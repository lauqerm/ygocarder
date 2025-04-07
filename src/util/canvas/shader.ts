import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const HorizontalBlurShader = {
    uniforms: {
        'tDiffuse': { type: 't', value: null },
        'h': { type: 'f', value: 3.0 / 512.0 }
    },
    vertexShader: [
        'varying vec2 vUv;',

        'void main() {',

        'vUv = uv;',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

        '}'
    ].join('\n'),
    fragmentShader: [
        'uniform sampler2D tDiffuse;',
        'uniform float h;',

        'varying vec2 vUv;',

        'void main() {',

        'vec4 sum = vec4( 0.0 );',
        'float lef4 = vUv.x - 4.0 * h;',
        'float lef3 = vUv.x - 3.0 * h;',
        'float lef2 = vUv.x - 2.0 * h;',
        'float lef1 = vUv.x - 1.0 * h;',
        'float rig1 = vUv.x + 1.0 * h;',
        'float rig2 = vUv.x + 2.0 * h;',
        'float rig3 = vUv.x + 3.0 * h;',
        'float rig4 = vUv.x + 4.0 * h;',

        'lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);',
        'lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );',
        'lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);',
        'lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );',
        'lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);',
        'lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );',
        'lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);',
        'lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );',
        'rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);',
        'rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );',
        'rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);',
        'rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );',
        'rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);',
        'rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );',
        'rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);',
        'rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );',

        'sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;',
        'sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;',
        'sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;',
        'sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
        'sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;',
        'sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;',
        'sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;',
        'sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;',
        'if (h > 0.0){',
        '	vec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );',
        '	sum = srcValue + srcValue - sum;',
        '}',
        'gl_FragColor = sum;',
        //"gl_FragColor = vec4(1,0,0,1);",

        '}'
    ].join('\n')
};
const VerticalBlurShader = {
    uniforms: {
        tDiffuse: { type: 't', value: null },
        v: { type: 'f', value: 3.0 / 512.0 },
    },
    vertexShader: [
        'varying vec2 vUv;',

        'void main() {',

        'vUv = uv;',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

        '}',
    ].join('\n'),
    fragmentShader: [
        'uniform sampler2D tDiffuse;',
        'uniform float v;',

        'varying vec2 vUv;',

        'void main() {',

        'vec4 sum = vec4( 0.0 );',
        'float top4 = vUv.y - 4.0 * v;',
        'float top3 = vUv.y - 3.0 * v;',
        'float top2 = vUv.y - 2.0 * v;',
        'float top1 = vUv.y - 1.0 * v;',
        'float bot1 = vUv.y + 1.0 * v;',
        'float bot2 = vUv.y + 2.0 * v;',
        'float bot3 = vUv.y + 3.0 * v;',
        'float bot4 = vUv.y + 4.0 * v;',

        'top4 = top4 >= 0.0 ? top4 : (1.0 + top4);',
        'top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );',
        'top3 = top3 >= 0.0 ? top3 : (1.0 + top3);',
        'top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );',
        'top2 = top2 >= 0.0 ? top2 : (1.0 + top2);',
        'top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );',
        'top1 = top1 >= 0.0 ? top1 : (1.0 + top1);',
        'top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );',
        'bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);',
        'bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );',
        'bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);',
        'bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );',
        'bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);',
        'bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );',
        'bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);',
        'bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );',

        'sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;',
        'sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;',
        'if (v > 0.0){',
        '	vec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );',
        '	sum = srcValue + srcValue - sum;',
        '}',
        'gl_FragColor = sum;',

        '}',
    ].join('\n'),
};
const NormalMapShader = {
    uniforms: {
        'type': { type: '1i', value: 0 },
        'invertR': { type: '1f', value: 1 },
        'invertG': { type: '1f', value: 1 },
        'invertH': { type: '1f', value: 1 },
        'dz': { type: '1f', value: 0 },
        'dimensions': { type: 'fv', value: [0, 0, 0] },
        'tHeightMap': { type: 't', value: null }
    },
    vertexShader: [
        'precision mediump float;',
        'varying vec2 vUv;',
        'varying vec2 step;',
        'uniform vec3 dimensions;',
        'void main() {',
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        'step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);', // - to switch from glsl orientation to my orientation :D
        'vUv = uv;',
        '}'
    ].join('\n'),
    fragmentShader: [
        'precision mediump float;',
        'uniform vec3 dimensions;',
        'varying vec2 vUv;',
        'varying vec2 step;',
        'uniform float dz;',
        'uniform float invertR;',
        'uniform float invertG;',
        'uniform float invertH;',
        'uniform int type;',
        'uniform sampler2D tHeightMap;',

        'void main(void) {',
        '	vec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );',
        '	vec2 lv  = vec2(vUv.x - step.x, vUv.y 		   );',
        '	vec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);',
        '	vec2 tv  = vec2(vUv.x 		  , vUv.y + step.y );',
        '	vec2 bv  = vec2(vUv.x 		  , vUv.y - step.y);',
        '	vec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );',
        '	vec2 rv  = vec2(vUv.x + step.x, vUv.y 		   );',
        '	vec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);',
        '	tlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), 	tlv.y >= 0.0	? tlv.y : (1.0  + tlv.y));',
        '	tlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), 	tlv.y < 1.0   	? tlv.y : (tlv.y - 1.0 ));',
        '	lv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  	lv.y  >= 0.0 	?  lv.y : (1.0  +  lv.y));',
        '	lv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  	?  lv.y : ( lv.y - 1.0 ));',
        '	blv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), 	blv.y >= 0.0 	? blv.y : (1.0  + blv.y));',
        '	blv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), 	blv.y < 1.0 	? blv.y : (blv.y - 1.0 ));',
        '	tv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  	tv.y  >= 0.0 	?  tv.y : (1.0  +  tv.y));',
        '	tv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 	?  tv.y : ( tv.y - 1.0 ));',
        '	bv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  	bv.y  >= 0.0 	?  bv.y : (1.0  +  bv.y));',
        '	bv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 	?  bv.y : ( bv.y - 1.0 ));',
        '	trv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), 	trv.y >= 0.0 	? trv.y : (1.0  + trv.y));',
        '	trv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), 	trv.y < 1.0   	? trv.y : (trv.y - 1.0 ));',
        '	rv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  	rv.y  >= 0.0 	?  rv.y : (1.0  +  rv.y));',
        '	rv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   	?  rv.y : ( rv.y - 1.0 ));',
        '	brv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), 	brv.y >= 0.0 	? brv.y : (1.0  + brv.y));',
        '	brv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), 	brv.y < 1.0   	? brv.y : (brv.y - 1.0 ));',
        /*"	tlv = vec2(tlv.x >= 0.0 		 ? tlv.x : (dimensions.x - tlv.x), 	tlv.y >= 0.0			? tlv.y : (dimensions.y - tlv.y));",
        "	tlv = vec2(tlv.x < dimensions.x  ? tlv.x : (tlv.x - dimensions.x ), tlv.y <= dimensions.y   ? tlv.y : (tlv.y - dimensions.y  ));",
        "	lv  = vec2( lv.x >= 0.0  		 ?  lv.x : (dimensions.x - lv.x),  	lv.y >= 0.0 			?  lv.y : (dimensions.y - lv.y));",
        "	lv  = vec2( lv.x < dimensions.x  ?  lv.x : ( lv.x - dimensions.x ), lv.y <= dimensions.y   	?  lv.y : ( lv.y - dimensions.y  ));",
        "	blv = vec2(blv.x >= 0.0  		 ? blv.x : (dimensions.x - blv.x), 	blv.y >= 0.0 			? blv.y : (dimensions.y - blv.y));",
        "	blv = vec2(blv.x < dimensions.x  ? blv.x : (blv.x - dimensions.x ), blv.y <= dimensions.y  	? blv.y : (blv.y - dimensions.y  ));",
        "	tv  = vec2( tv.x >= 0.0  		 ?  tv.x : (dimensions.x - tv.x),  	tv.y >= 0.0 			?  tv.y : (dimensions.y - tv.y));",
        "	tv  = vec2( tv.x < dimensions.x  ?  tv.x : ( tv.x - dimensions.x ), tv.y <= dimensions.y  	?  tv.y : ( tv.y - dimensions.y  ));",
        "	bv  = vec2( bv.x >= 0.0  		 ?  bv.x : (dimensions.x - bv.x),  	bv.y >= 0.0 			?  bv.y : (dimensions.y - bv.y));",
        "	bv  = vec2( bv.x < dimensions.x  ?  bv.x : ( bv.x - dimensions.x ), bv.y <= dimensions.y  	?  bv.y : ( bv.y - dimensions.y  ));",
        "	trv = vec2(trv.x >= 0.0  		 ? trv.x : (dimensions.x - trv.x), 	trv.y >= 0.0 			? trv.y : (dimensions.y - trv.y));",
        "	trv = vec2(trv.x < dimensions.x  ? trv.x : (trv.x - dimensions.x ), trv.y <= dimensions.y   ? trv.y : (trv.y - dimensions.y  ));",
        "	rv  = vec2( rv.x >= 0.0 		 ?  rv.x : (dimensions.x - rv.x),  	rv.y >= 0.0 			?  rv.y : (dimensions.y - rv.y));",
        "	rv  = vec2( rv.x < dimensions.x  ?  rv.x : ( rv.x - dimensions.x ), rv.y <= dimensions.y    ?  rv.y : ( rv.y - dimensions.y  ));",
        "	brv = vec2(brv.x >= 0.0 		 ? brv.x : (dimensions.x - brv.x), 	brv.y >= 0.0 			? brv.y : (dimensions.y - brv.y));",
        "	brv = vec2(brv.x < dimensions.x  ? brv.x : (brv.x - dimensions.x ), brv.y <= dimensions.y    ? brv.y : (brv.y - dimensions.y  ));",*/
        '	float tl = abs(texture2D(tHeightMap, tlv).r);',
        '	float l  = abs(texture2D(tHeightMap, lv ).r);',
        '	float bl = abs(texture2D(tHeightMap, blv).r);',
        '	float t  = abs(texture2D(tHeightMap, tv ).r);',
        '	float b  = abs(texture2D(tHeightMap, bv ).r);',
        '	float tr = abs(texture2D(tHeightMap, trv).r);',
        '	float r  = abs(texture2D(tHeightMap, rv ).r);',
        '	float br = abs(texture2D(tHeightMap, brv).r);',
        '   float dx = 0.0, dy = 0.0;',
        '   if(type == 0){',	// Sobel
        '		dx = tl + l*2.0 + bl - tr - r*2.0 - br;',
        '		dy = tl + t*2.0 + tr - bl - b*2.0 - br;',
        '   }',
        '   else{',				// Scharr
        '		dx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;',
        '		dy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;',
        '   }',
        '	vec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);',
        '	gl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);',
        //"	gl_FragColor = texture2D(tDiffuse, vec2(1.0,1.0));",
        //"	gl_FragColor = texture2D(tHeightMap, vec2(0.0,0.0));",
        //"	gl_FragColor = texture2D(tDiffuse, tlv);",
        //"	gl_FragColor = vec4(texture2D(tHeightMap, vUv.xy).rgba);",
        '}'
    ].join('\n')
};

export const SHADER_FILTER_TYPE = {
    SOBEL: 'sobel' as const,
    SCHARR: 'scharr' as const,
};
export const getDefaultHeightToNormalMapOption = () => ({
    invertedRed: false,
    invertedGreen: false,
    invertedSource: false,
    blurSharp: 0,
    strength: 1,
    level: 8.5,
    type: SHADER_FILTER_TYPE.SOBEL,
});
type HeightToNormalMapOption = Partial<ReturnType<typeof getDefaultHeightToNormalMapOption>>;

export class HeightToNormalMap {
    renderer: THREE.WebGLRenderer;
    effectComposer: EffectComposer;
    normalMapUniform: typeof NormalMapShader['uniforms'];
    material: THREE.ShaderMaterial;
    option: Required<HeightToNormalMapOption>;
    canvas!: HTMLCanvasElement;
    gaussianShaderX!: ShaderPass;
    gaussianShaderY!: ShaderPass;

    constructor(option: HeightToNormalMapOption, resultCanvas: HTMLCanvasElement) {
        this.canvas = resultCanvas;
        this.option = { ...getDefaultHeightToNormalMapOption(), ...option };
        this.init();
    }

    apply(image: HTMLCanvasElement, option: HeightToNormalMapOption = {}) {
        const { width, height } = image;
        const texture = this.getTexture(image);
        this.normalMapUniform.tHeightMap.value = texture;
        this.normalMapUniform.dimensions.value = [width, height, 0];
        this.renderer.setSize(width, height);
        this.effectComposer.setSize(width, height);
        this.effectComposer.reset(this.getRenderTarget(width, height));

        const { invertedRed, invertedGreen, invertedSource, blurSharp, strength, level, type } = {
            ...this.option,
            ...option,
        };

        this.invertRed(invertedRed);
        this.invertGreen(invertedGreen);
        this.invertSource(invertedSource);
        this.setBlurSharp(blurSharp, width, height);
        this.setStrengthAndLevel(strength, level);
        this.setType(type);

        this.effectComposer.render(1 / 60);
    }

    init() {
        const camera = new THREE.OrthographicCamera(1 / -2, 1 / 2, 1 / 2, 1 / -2, 0, 1);
        const scene = new THREE.Scene();
        const normalRenderScene = new RenderPass(scene, camera);

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: this.canvas });
        this.renderer.setClearColor(0x000000, 0); // the default

        this.normalMapUniform = THREE.UniformsUtils.clone(NormalMapShader.uniforms);

        this.material = new THREE.ShaderMaterial({
            fragmentShader: NormalMapShader.fragmentShader,
            vertexShader: NormalMapShader.vertexShader,
            uniforms: this.normalMapUniform,
        });
        this.material.transparent = true;

        const meshGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        const renderMesh = new THREE.Mesh(meshGeometry, this.material);
        scene.add(renderMesh);

        this.gaussianShaderY = new ShaderPass(VerticalBlurShader);
        this.gaussianShaderX = new ShaderPass(HorizontalBlurShader);
        this.gaussianShaderX.renderToScreen = true;

        this.effectComposer = new EffectComposer(this.renderer, this.getRenderTarget());
        this.effectComposer.addPass(normalRenderScene);
        this.effectComposer.addPass(this.gaussianShaderY);
        this.effectComposer.addPass(this.gaussianShaderX);
    }
    getRenderTarget(width?: number, height?: number) {
        return new THREE.WebGLRenderTarget(width, height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            stencilBuffer: false,
        });
    }
    getTexture(image: TexImageSource) {
        const texture = new THREE.Texture(image);
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping; // eslint-disable-line
        texture.minFilter = texture.magFilter = THREE.NearestFilter; // eslint-disable-line
        texture.anisotropy = 2;
        texture.needsUpdate = true;
        return texture;
    }

    invertRed(status: boolean) {
        if (status) {
            this.normalMapUniform.invertR.value = -1;
        } else {
            this.normalMapUniform.invertR.value = 1;
        }
    }

    invertGreen(status: boolean) {
        if (status) {
            this.normalMapUniform.invertG.value = -1;
        } else {
            this.normalMapUniform.invertG.value = 1;
        }
    }

    invertSource(status: boolean) {
        if (status) {
            this.normalMapUniform.invertH.value = -1;
        } else {
            this.normalMapUniform.invertH.value = 1;
        }
    }

    setBlurSharp(value, width, height) {
        this.gaussianShaderY.uniforms.v.value = value / width / 5;
        this.gaussianShaderX.uniforms.h.value = value / height / 5;
    }

    setStrengthAndLevel(strength, level) {
        this.normalMapUniform.dz.value = 1.0 / strength * (1.0 + Math.pow(2.0, level)); //  eslint-disable-line
    }

    setType(type) {
        this.normalMapUniform.type.value = type === 'sobel' ? 0 : 1;
    }
}