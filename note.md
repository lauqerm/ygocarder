#### Game Technical
* <https://yugipedia.com/wiki/Japanese_terms_and_phrases>
* <https://yugipedia.com/wiki/Card_layout>
* <https://snkrdunk.com/articles/15138/>

### Other
* <https://en.wikipedia.org/wiki/Bracket>
* <https://en.wikipedia.org/wiki/Whitespace_character>
* <https://en.wikipedia.org/wiki/Line_breaking_rules_in_East_Asian_languages#Line_breaking_rules_in_Japanese_text_(Kinsoku_Shori)>
* <https://en.wikipedia.org/wiki/Ch%C5%8Donpu>
* <https://en.wikipedia.org/wiki/Half-width_kana>
* <https://unicodelookup.com/#circle/3>

### Improvements backlog

* Dark synchro style syntax
* OCG's letter dialect ("Chef Special Recipe" OCG for example)
* Improve UX when rendering card (reduce flashing)

### Known issues

* A rather hard one that make card cropper sometimes return wrong crop information upon import. Re-import that same data will fix the issue. This must be a timing problem because the component re-render at the same time it receive imperative information, but currently we have no easy way to reproduce it, and thus unable to effectively fix it.