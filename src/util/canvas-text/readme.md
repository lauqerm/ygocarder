# Glyph atlas text rendering

Prebuilt bitmap atlases replace `fillText` at draw time, so glyph positioning
is identical on Windows and macOS. Vertical alignment comes from the font's own
design plus a small hand-tuned override table — nothing is derived by
measurement at build time.

Three files:

- `glyph-atlas-build.ts` — build-time only, never ships
- `glyph-atlas-runtime.ts` — ships with the app
- `glyph-offset-tuner.html` — standalone page for producing the override table

---

## What changed from the measured approach

Every glyph in a group is now rasterized at **one font size**. The font's
optical corrections survive intact: round letters keep their overshoot, pointed
vertices like `N` and `A` keep the protrusion that makes them read as aligned.
Normalizing each glyph to an identical ink height was undoing that work and
then needing more machinery to compensate.

Glyphs are positioned by **baseline** rather than by ink top, since heights
within a group now legitimately differ.

Corrections are a hand-authored `overrides` table. Most glyphs need no entry.

---

## Phase 1: generate the atlases

Run on **Windows Chrome** — that machine's rasterizer is the one whose output
you preferred, and whichever machine you run this on is the rendering you ship.

Bundle `glyph-atlas-build.ts` into a scratch page that loads your webfont, open
it, and run:

```ts
await document.fonts.ready; // never skip this, or you cache the fallback font

const atlas = buildGlyphAtlas(
  [
    { id: 'caps',      chars: CHARSET.upper,  fontSizeCss: 48, anchorChar: 'H' },
    { id: 'smallcaps', chars: CHARSET.lower,  fontSizeCss: 48, anchorChar: 'x' },
    { id: 'digits',    chars: CHARSET.digits, fontSizeCss: 48, anchorChar: '0' },
  ],
  { fontFamily: 'YourFont', pixelRatio: 2 },
);

console.table(reportOutliers(atlas.meta, 1)); // informational, see below
await exportAtlas(atlas, 'yourfont-md@2x');
```

Repeat for every **font size × DPR** pair you support. Only the matching atlas
is fetched at runtime, so payload is unchanged.

**Anchor letters** define each group's span. Pick flat-topped, flat-bottomed
glyphs — `H`, `x`, `0`. Round letters make poor anchors because their overshoot
inflates the span.

**`reportOutliers` is information, not a defect list.** It lists glyphs whose
ink falls outside the anchor span. Overshoot on `O C G S` and on `A N V W M` is
deliberate design and should normally be left alone. Use the report to spot
outliers that are unusually large relative to their neighbours, then check
those visually before deciding anything.

---

## Phase 2: tune the outliers

Open `glyph-offset-tuner.html` directly in a browser (no server needed) and
load the `.png` and `.json` you just exported.

- Click a glyph to select it
- `↑` / `↓` adjusts by one device pixel, `Shift` for five
- **move** shifts the glyph vertically, **stretch** scales it about the baseline
- Anchor lines are red, baseline is green
- "whole group" loads every character at once for a sweep
- "reset selected" clears both values for the current glyph
- The textarea outputs a ready-to-paste `overrides` block

Paste that block into the matching group in your build config and regenerate:

```ts
{
  id: 'smallcaps',
  chars: CHARSET.lower,
  fontSizeCss: 48,
  anchorChar: 'x',
  overrides: {
    n: { offsetY: -1 },
    o: { scaleY: 0.9812 },
    g: { offsetY: 1, scaleY: 1.0208 },
  },
}
```

### The three knobs

| | What it does | Rebuild? | Tuner |
|---|---|---|---|
| `offsetY` | Vertical nudge, device px, positive moves down | no | **move** mode |
| `scaleY` | Vertical-only stretch about the baseline | no | **stretch** mode |
| `sizeScale` | Uniform scale — re-rasterizes at a different font size | yes | not previewable |

`offsetY` and `scaleY` are applied at draw time, so the tuner's preview is
exact rather than approximate: it resamples the bitmap the same way the runtime
does. You can also edit both directly in an exported `.json` and reload for a
quick check — but move the values back into the build config once you settle,
or the next build loses them.

`sizeScale` scales the glyph **uniformly**, so width and stroke weight change
with it. It re-rasterizes, which yields a crisper result than stretching, but
needs a rebuild and the tuner cannot show it. Reach for `scaleY` first; use
`sizeScale` only when a glyph genuinely needs to be a different size rather
than a different shape. If several glyphs in a group need it, the group's
`fontSizeCss` is probably the wrong value.

Stretching resamples, so large `scaleY` values soften the glyph. Corrections in
the 1–3% range are invisible; past roughly 10% you will see it, and that is the
signal to reach for `sizeScale` or a separate group instead.

Tune on one canonical string per group rather than glyph by glyph. Alignment is
a relationship between neighbours, and a letter that looks wrong alone often
looks right in a word.

---

## Phase 3: load at app start

```ts
const variants: AtlasVariant[] = [
  { size: 'md', pixelRatio: 1, pngUrl: '/atlas/yourfont-md@1x.png', jsonUrl: '/atlas/yourfont-md@1x.json' },
  { size: 'md', pixelRatio: 2, pngUrl: '/atlas/yourfont-md@2x.png', jsonUrl: '/atlas/yourfont-md@2x.json' },
];

const variant = selectVariant(variants, 'md');
const atlas = await loadAtlas(variant.pngUrl, variant.jsonUrl);
```

Await this before the first paint. There is no font-loading dependency at
runtime anymore — `document.fonts.ready` is a build-time concern only.

---

## Phase 4: draw

```ts
const result = drawString(masterCtx, atlas, 'FINALE', {
  xCss: 40,
  baselineYCss: 180,
  color: '#000',
  align: 'left',
});

// Continue a run on the same line:
drawString(masterCtx, atlas, ' KNIGHT', { ...opts, xCss: result.nextXCss });
```

If your layout is expressed in anchor lines rather than baselines:

```ts
const baselineYCss = baselineForAnchorTop(atlas, 'caps', anchorTopCss);
```

`measureString` gives advance width, ink extent, ascent and descent without
drawing — for centering, wrapping, or fitting text to a box.

### Why scaled text can look heavier than native

Three separate causes. Work through them in order — the first is usually the
biggest.

**1. White rasterization plus tinting.** Skia selects its text gamma and
contrast table from the paint colour: light-on-dark rasterizes with a heavier
coverage profile than dark-on-light. An atlas built white and recoloured black
at draw time keeps that heavier profile, so it stays bolder than a direct black
`fillText` even with no resampling at all.

Fix: bake the real colour and skip the tint.

```ts
// build
buildGlyphAtlas(groups, { fontFamily: 'YourFont', pixelRatio: 2, fillStyle: '#000' });

// draw — omit `color` entirely
drawString(ctx, atlas, 'FINALE', { xCss: 40, baselineYCss: 180 });
```

The cost is that one atlas then serves one colour. Keep the white-plus-tint
path only where you genuinely need runtime recolouring, and expect it to render
slightly heavier there.

**2. Antialiasing applied more than once.** The build rasterizes the outline
into coverage values, giving roughly a one-pixel partial-coverage band at each
stem edge. Every additional resample averages those already-partial pixels with
their neighbours and widens the band. Native `fillText` computes coverage
geometrically once, at the final size, so its edges stay one pixel.

The pipeline resamples **exactly once**: glyphs compose into the layer at the
atlas's own resolution as pure pixel copies, and a single final blit handles
DPR conversion and `scaleX` together.

**3. Gamma-incorrect resampling.** Browsers average pixel values in sRGB rather
than linear light, so averaging 0 and 255 gives 128 — about 22% of the
luminance that value should represent. Every mid-coverage pixel therefore reads
darker than its coverage warrants. This only applies when something actually
resamples, so it disappears at `pixelRatio === devicePixelRatio`,
`supersample: 1`, and `scaleX: 1`.

`supersample` helps when you *do* scale: rasterizing at 2× the target and
letting the single resample bring it down keeps edges tighter, because the
source has real detail to average rather than an already-blurred edge.

```ts
buildGlyphAtlas(groups, { fontFamily: 'YourFont', pixelRatio: 2, supersample: 2 });
```

The trade-off is real — memory grows with the square, and every draw becomes a
resample rather than a pixel copy, so unscaled text gets marginally softer.
Leave it at 1 for atlases that always render at native size.

### Why the whole run can sit a pixel below fillText

Glyphs are composited at **integer device coordinates by design** — that is
what makes output identical across platforms. `fillText` positions subpixel. So
a fractional baseline puts the two up to a pixel apart, and because every glyph
in a run shares the same fractional part, they all round the same direction and
the run shifts as a block.

Two places this creeps in:

- **The build's scratch baseline.** Now snapped to a whole device pixel
  internally, so `ascent` comes out integral regardless of font size.
- **Your draw-time baseline.** Pass it through `snapBaseline(y, dpr)`, or keep
  baselines and font sizes on whole device pixels in your layout.

If a residual offset remains after both, it is the atlas's alpha threshold
discarding the faintest edge row. Lower `alphaThreshold` toward 1 in the build
config to keep more of the antialiased fringe.

### Horizontal scaling

Two separate controls, at different levels:

```ts
// Run level: condense or expand the whole string by any ratio
drawString(ctx, atlas, 'LONG CARD NAME', { ...opts, scaleX: 0.9 });
```

Per-glyph horizontal correction lives in the build overrides as `scaleX`,
alongside `scaleY` and `offsetY`. It exists for genuinely malformed glyphs; for
condensing a word, use the run-level control.

**The run-level scale resamples the composed layer once**, not each glyph
separately. That matters: scaling per glyph would round each width
independently and inter-letter gaps would come out visibly uneven under a
condense. One resample keeps spacing proportional.

If you need to fit a run to a box, `measureString` gives the natural advance
width; divide and pass the ratio.

### What horizontal scaling costs

**It is more visible than vertical stretching at the same percentage.** Latin
letterforms carry their weight in vertical stems, and condensing thins exactly
those. Vertical stretching resamples crossbars and serifs, which are thinner
and less load-bearing to begin with. Rough thresholds: vertical stretch is
invisible to about 10%, horizontal condensing starts showing around 5%.

**Stem dropout at aggressive settings.** Below roughly `scaleX: 0.7` at small
sizes, thin stems fall under one device pixel. Some land on 1px and some on
2px, so the word picks up a ragged, uneven-weight look.

**It is not the same as a condensed font.** Real condensed type redraws stems
at the correct weight for the narrower width. Bitmap condensing thins them
proportionally, so heavily condensed text looks anemic next to properly drawn
condensed type. If you routinely need more than about 10%, ship a condensed
atlas variant instead of squeezing.

**It does not reintroduce the platform problem.** Bitmap resampling is the same
Skia code path on Windows and macOS — unlike hinting policy, which was the
original culprit. A condensed run renders identically on both.

**Prefer this order when fitting text to a width:** tighten tracking with
`letterSpacingCss` first, condense with `scaleX` second, drop to a smaller
atlas variant third. Reaching straight for a large condense from a big overflow
gives the worst-looking result of the three.

---

## What runs when

| | Build (offline) | Runtime |
|---|---|---|
| `fillText` | yes | never |
| Pixel scanning | yes | never |
| Font loading | required | not needed |
| Per draw | — | `drawImage` + one tint pass |

Rasterization happens exactly once, on your machine, and ships as pixels. That
is what removes the platform difference.

---

## Things that will bite you

**Do not remove the `setTransform` identity call in `drawString`.** If your
master context carries `scale(dpr, dpr)`, an integer CSS coordinate lands on a
half device pixel, Skia resamples, and the drift comes straight back.

**Enumerate the charset before generating.** A glyph not in the atlas cannot be
drawn — `drawString` skips it and warns. Include punctuation, `®`, `™`, en and
em dashes, curly quotes, and `CHARSET.vietnameseLower` / `vietnameseUpper` if
Vietnamese content is possible. Diacritics are cheap now and awkward to
discover in production. Log the `missing` array from `DrawResult` so you learn
what to add in the next build.

**Cache invalidation.** Font family, weight, style, size, DPR, and the override
table are all baked in. Version the filenames. DPR changes when a window moves
between monitors.

**Colour is not baked in.** Glyphs are rasterized white and tinted per draw via
`source-in`, so one atlas serves every colour.

**Overrides are per size and DPR.** A one-device-pixel nudge at DPR 2 is half a
CSS pixel; the same visual correction at DPR 1 may be zero or one. Tune each
variant, and expect the tables to differ.

**Memory.** One atlas at 2048px wide is a few MB of texture. Load only the
variants in use; call `releaseTintLayer()` when tearing down a surface on a
memory-constrained device.

**Font licensing.** Rasterizing a typeface into a shipped image asset is a
different use than embedding a webfont. Most commercial EULAs permit it, some
require the rasterization to be non-extractable, a few prohibit it.

---

## Migration order

1. Generate one atlas for your most common size and DPR, with no overrides
2. Run it through the tuner and fill in only the glyphs that are actually wrong
3. Wire `loadAtlas` and swap `fillText` for `drawString` on a single surface
4. Compare that surface on Windows and macOS — this is the check that matters
5. Generate the remaining variants, tuning each one, and roll out
6. Delete the old `findVisibleBounds` / `fitTextBetweenAnchors` path