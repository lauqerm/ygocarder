
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cea41d22-4a5f-5a98-9b27-d9cbf331908c")}catch(e){}}();
(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{346:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){},507:function(e,t,a){},590:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},594:function(e,t,a){},596:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(52),o=a.n(i);a(346),a(347),a(348),a(349),a(350),a(351);const l=e=>[{value:"strict",label:null===e||void 0===e?void 0:e.strict},{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s=e=>[{value:"none",label:e["input.advanced-frame.overlay-blend-type.none.label"]},{value:"source-in",label:e["input.advanced-frame.overlay-blend-type.source-in.label"]},{value:"overlay",label:e["input.advanced-frame.overlay-blend-type.overlay.label"]},{value:"color",label:e["input.advanced-frame.overlay-blend-type.color.label"]},{value:"multiply",label:e["input.advanced-frame.overlay-blend-type.multiply.label"]}],c={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:910,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:76,attributeY:55,attributeX:680,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},d="#404040",u=()=>({body:100,pendulum:100,text:100,name:100,baseFill:d,artBorder:!0,nameBorder:!0,effectBox:!0,frameBorder:!0,boundless:!1}),m={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"},fullPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"fullPendulumSmall"},overframeCard:{artFinishX:100,artFinishY:219,artWidth:813,artX:0,artY:0,ratio:.685,backgroundRatio:.685,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"overframeCard"},overframePendulum:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.685,backgroundRatio:.685,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulum"},overframePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.685,backgroundRatio:.685,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulumSmall"}},p=(e,t,a,r)=>{const n={...u(),...t};"strict"===a&&(n.boundless=!1,n.text=100,n.pendulum=100);const{boundless:i,body:o,pendulum:l,text:s,frameBorder:c}=n,d="fit"!==a&&"strict"!==a&&i,p=!!d&&c;if("full"===a)return p?m.overframeCard:m.fullCard;let b="normal";d||o<100?b=e?p?"small"===r?"overframePendulumSmall":"overframePendulum":"small"===r?"fullPendulumSmall":"fullPendulum":p?"overframeCard":"fullCard":e?s<100?b="small"===r?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===r&&(b="truePendulumLarge"),"small"===r&&(b="truePendulumSmall"),"medium"===r&&(b="truePendulum")):b="small"===r?"pendulumSmall":"pendulum":b=s<100?"extendedCard":"normal";const h=m[b];return{...h,backgroundRatio:"frame"===a?.685:h.backgroundRatio}};var b=a(631),h=a(4),g=a(1);const f=[{blendMode:"overlay",opacity:1}],v=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],y={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":f,"art-overlay":f,"art-border":f,"art-border-pendulum":f,"border-pendulum":f,attribute:f,frame:f},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":v,"art-border":v,"art-border-pendulum":v,"border-pendulum":v,frame:v,"frame-background":v,name:v,star:v},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},x={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},j={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},O=h.b.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: var(--br);
    margin: 7px 0;
`,w={normal:{name:"normal",color:"#747b95",preview:Object(g.jsx)(b.a,{}),isOption:!1},gold:{name:"gold",color:"#cfa65f",preview:Object(g.jsx)(O,{style:{backgroundColor:"#cfa65f"}}),isOption:!0},platinum:{name:"platinum",color:"#b1b1b1",preview:Object(g.jsx)(O,{style:{backgroundColor:"#b1b1b1"}}),isOption:!0},rainbow:{name:"rainbow",color:"#f3a486",preview:Object(g.jsx)(O,{style:{background:"linear-gradient(\n            135deg,\n            rgba(255, 80, 80, 1) 0%,\n            rgba(255, 194, 40, 1) 10%,\n            rgba(248, 255, 73, 1) 30%,\n            rgba(119, 255, 114, 1) 40%,\n            rgba(103, 255, 255, 1) 50%,\n            rgba(87, 241, 255, 1) 70%,\n            rgba(68, 167, 255, 1) 80%,\n            rgba(226, 52, 255, 1) 90%,\n            rgba(255, 80, 80, 1) 100%\n        )"}}),isOption:!0}},k=e=>[{label:null===e||void 0===e?void 0:e.normal,...w.normal},{label:null===e||void 0===e?void 0:e.gold,...w.gold},{label:null===e||void 0===e?void 0:e.platinum,...w.platinum}],S={topLeftFrame:0,topRightFrame:1,bottomLeftFrame:2,bottomRightFrame:3,effectBackground:4,pendulumEffectBackground:5,foil:6};var C=a(632);const F="NONE",L=[{name:F,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0}],T=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0}],I=T.reduce((e,t)=>{const{name:a}=t;return e[a]=t,e},{}),N={pt:{TRAP:{offsetX:-11}},it:{TRAP:{offsetX:-4}}},R={jp:{key:"jp",category:"ocg",fileKey:"ocg"},en:{key:"en",category:"tcg",fileKey:"tcg"},ch:{key:"ch",category:"ocg",fileKey:"ch"},de:{key:"de",category:"tcg",fileKey:"de"},fr:{key:"fr",category:"tcg",fileKey:"fr"},it:{key:"it",category:"tcg",fileKey:"it"},pt:{key:"pt",category:"tcg",fileKey:"pt"},sp:{key:"sp",category:"tcg",fileKey:"sp"}},E={tcg:R.en.key,ocg:R.jp.key},M="NO ICON",z=[{label:Object(g.jsx)(b.a,{}),value:M,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0},{label:"Normal",value:"NORMAL",nameKey:"input.icon.normal",isOption:!0}],A="no-sticker",D=[{value:A,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],P={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},custom:{value:"custom",labelKey:"input.icon-type.custom.label",fullLabelKey:"input.icon-type.custom.full.label",icon:Object(g.jsx)(C.a,{}),isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-icon-list.png"}),isOption:!0,isMixable:!1,showIcon:!1,imagePresetPath:"icon-st",imagePresetSource:"subfamily/subfamily-icon-list.png"},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level",imagePresetSource:"subfamily/subfamily-level.png"},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-negative-level",imagePresetSource:"subfamily/subfamily-negative-level.png"},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-rank",imagePresetSource:"subfamily/subfamily-rank.png"},"level-rank":{value:"level-rank",labelKey:"input.icon-type.level-rank.label",fullLabelKey:"input.icon-type.level-rank.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"level-rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level-rank",imagePresetSource:"subfamily/subfamily-level-rank.png"},grade:{value:"grade",labelKey:"input.icon-type.grade.label",fullLabelKey:"input.icon-type.grade.full.label",icon:Object(g.jsx)("img",{className:"icon-image",alt:"grade-icon",src:"/ygocarder/asset/image/subfamily/subfamily-grade.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-grade",imagePresetSource:"subfamily/subfamily-grade.png"}},H=Object.values(P),W={dark:{value:"dark",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.dark",icon:Object(g.jsx)("img",{className:"icon-image",alt:"dark-icon",src:"/ygocarder/asset/image/subfamily/subfamily-dark.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-dark",imagePresetSource:"subfamily/subfamily-dark.png"},earth:{value:"earth",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.earth",icon:Object(g.jsx)("img",{className:"icon-image",alt:"earth-icon",src:"/ygocarder/asset/image/subfamily/subfamily-earth.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-earth",imagePresetSource:"subfamily/subfamily-earth.png"},fire:{value:"fire",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.fire",icon:Object(g.jsx)("img",{className:"icon-image",alt:"fire-icon",src:"/ygocarder/asset/image/subfamily/subfamily-fire.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-fire",imagePresetSource:"subfamily/subfamily-fire.png"},light:{value:"light",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.light",icon:Object(g.jsx)("img",{className:"icon-image",alt:"light-icon",src:"/ygocarder/asset/image/subfamily/subfamily-light.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-light",imagePresetSource:"subfamily/subfamily-light.png"},water:{value:"water",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.water",icon:Object(g.jsx)("img",{className:"icon-image",alt:"water-icon",src:"/ygocarder/asset/image/subfamily/subfamily-water.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-water",imagePresetSource:"subfamily/subfamily-water.png"},wind:{value:"wind",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.wind",icon:Object(g.jsx)("img",{className:"icon-image",alt:"wind-icon",src:"/ygocarder/asset/image/subfamily/subfamily-wind.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-wind",imagePresetSource:"subfamily/subfamily-wind.png"},divine:{value:"divine",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.divine",icon:Object(g.jsx)("img",{className:"icon-image",alt:"divine-icon",src:"/ygocarder/asset/image/subfamily/subfamily-divine.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-divine",imagePresetSource:"subfamily/subfamily-divine.png"},spell:{value:"spell",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.spell",icon:Object(g.jsx)("img",{className:"icon-image",alt:"spell-icon",src:"/ygocarder/asset/image/subfamily/subfamily-spell.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-spell",imagePresetSource:"subfamily/subfamily-spell.png"},trap:{value:"trap",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.trap",icon:Object(g.jsx)("img",{className:"icon-image",alt:"trap-icon",src:"/ygocarder/asset/image/subfamily/subfamily-trap.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-trap",imagePresetSource:"subfamily/subfamily-trap.png"}},B=Object.values(W),$={"continuous-l":{value:"continuous-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.continuous",icon:Object(g.jsx)("img",{className:"icon-image",alt:"continuous-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-continuous",imagePresetSource:"subfamily/subfamily-continuous-l.png"},"counter-l":{value:"counter-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.counter",icon:Object(g.jsx)("img",{className:"icon-image",alt:"counter-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-counter-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-counter",imagePresetSource:"subfamily/subfamily-counter-l.png"},"equip-l":{value:"equip-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.equip",icon:Object(g.jsx)("img",{className:"icon-image",alt:"equip-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-equip-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-equip",imagePresetSource:"subfamily/subfamily-equip-l.png"},"field-l":{value:"field-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.field",icon:Object(g.jsx)("img",{className:"icon-image",alt:"field-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-field-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-field",imagePresetSource:"subfamily/subfamily-field-l.png"},"quick-play-l":{value:"quick-play-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.quick-play",icon:Object(g.jsx)("img",{className:"icon-image",alt:"quick-play-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-quick-play-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-quick-play",imagePresetSource:"subfamily/subfamily-quick-play-l.png"},"ritual-l":{value:"ritual-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.ritual",icon:Object(g.jsx)("img",{className:"icon-image",alt:"ritual-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-ritual-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-ritual",imagePresetSource:"subfamily/subfamily-ritual-l.png"},"normal-l":{value:"normal-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.normal",icon:Object(g.jsx)("img",{className:"icon-image",alt:"normal-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-normal-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-normal",imagePresetSource:"subfamily/subfamily-normal-l.png"}},Y=Object.values($),K={rank:"rank",ritual:"ritual","ritual-l":"ritual-l",spell:"spell",trap:"trap",water:"water",wind:"wind",continuous:"continuous","continuous-l":"continuous-l",counter:"counter","counter-l":"counter-l",dark:"dark",divine:"divine",earth:"earth",equip:"equip","equip-l":"equip-l",field:"field","field-l":"field-l",fire:"fire",glow:"glow",grade:"grade","icon-list":"icon-list",level:"level","level-rank":"level-rank",light:"light","negative-level":"negative-level",normal:"normal","normal-l":"normal-l","quick-play":"quick-play","quick-play-l.png":"quick-play-l.png"},U={...P,...W,...$,"user-defined":{value:"user-defined",labelKey:"input.icon-type.user-defined.label",fullLabelKey:"input.icon-type.user-defined.label",icon:null,isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"",imagePresetSource:""}},G=13,X={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},q={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},V={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextGapRatio:0,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,vietnameseFont:"Times New Roman",vietnameseFontRatio:1.1,letterOffsetMap:{"\u2605":{ratio:.9,baseline:-.05,yRatio:1},"\u2606":{ratio:.9,baseline:-.05,yRatio:1},"\xa1":{ratio:1.2,baseline:-0,yRatio:1.05}}},_={...V,font:"MatrixBook, Times New Roman",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[],variant:"default-tcg"},J={...V,font:'"StoneSerif-Italic", "SVN-Times New Roman Italic"',vietnameseFont:'"SVN-Times New Roman Italic"',headTextHeightRatio:.75,fontStyle:"tcg",vietnameseFontRatio:1.08,fontList:[],variant:"default-tcg-normal"},Q={...V,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[],variant:"default-ocg"},Z={tcg:{...J,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...J,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...J,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...J,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...J,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...J,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...J,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...J,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},ee={tcg:{..._,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{..._,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{..._,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{..._,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{..._,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{..._,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{..._,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{..._,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...Q,variant:"ocg",fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...Q,variant:"ocg-stat",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...Q,variant:"ocg-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...Q,variant:"ocg-type",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...Q,variant:"ocg-pendulumLarge",fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...Q,variant:"ocg-pendulumLarge-stat",fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...Q,variant:"ocg-pendulumLarge-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...Q,variant:"ocg-pendulumLarge-type",fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},te={tcg:{default:1.5,pt:2.825},ocg:{default:3.65}},ae="#010101",re="Auto",ne=()=>({font:re,fillStyle:ae,headTextFillStyle:ae,shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"}),ie=()=>[!1,ae,!1,"#000000"],oe=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",font:re,...e}),le={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:oe({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:oe({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:oe({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:oe({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:oe({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:oe({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:oe({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:oe({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:oe({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:oe({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:oe({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:oe({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:oe({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:oe({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:oe({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:oe({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:oe({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:oe({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})},rainbowSecretRare:{key:"rainbowSecretRare",label:"Rainbow Secret Rare",image:"asset/image/other/name-rainbow-secret-rare.png",value:oe({hasOutline:!0,headTextFillStyle:"#000000",lineColor:"#333333",lineOffsetX:0,lineOffsetY:0,lineWidth:6,pattern:"type2",preset:"rainbowSecretRare"})}},se=Object.values(le),ce={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},de=Object.values(ce);var ue=a(622);const me={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:49,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:792,artlessFrameY:553,fontSize:56.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:808,artlessFrameY:553,fontSize:56.5}},pe=Object.values(me),be={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},he="medium",ge=[{index:0,labelKey:"input.flag.mix-def-link",type:"checkbox",order:0},{index:1,labelKey:"input.flag.link-rating-behavior",type:"link-rating-behavior",order:3},{index:2,labelKey:"input.flag.hide-deactivated-link",type:"checkbox",order:1},{index:3,labelKey:"input.flag.stat-label",type:"checkbox",order:2}],fe=0,ve=1,ye=ge.length,xe=()=>({enabled:!1,effect:"",blue:"0",red:"0",boxSize:"Normal",boxSizeEnabled:!0}),je={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},Oe={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:65,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:65,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:65,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:65,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:951.5,trueEdge:65,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:65,trueHeightCap:144}]},we=64.44,ke={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:129,trueHeightCap:80}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:122.6}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:155.8}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5,trueHeightCap:79.8}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:126.1}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:155.5}]}},Se={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},Ce={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},Fe={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},Le=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u53d6\u308a\u9664\u304d",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304d"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u540c\u4e00",rubyForm:"{\u540c|\u3069\u3046}{\u4e00|\u3044\u3064}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],Te=Le.reduce((e,t)=>(e[t.shortForm]=t,e),{}),Ie={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps, Times New Roman",font:"MatrixRegularSmallCaps, Times New Roman",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.55,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix, Times New Roman",symbolFontRatio:.775,vietnameseFont:"MatrixRegularSmallCaps",vietnameseFontRatio:1,arabicFontRatio:.75,variant:"default-name",fontList:[{bulletWidth:64,fontSize:91,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91,offsetY:0}],letterOffsetMap:{"\u2605":{ratio:.55,baseline:-.05,yRatio:1},"\u2606":{ratio:.55,baseline:-.05,yRatio:1},"\xa1":{ratio:1,baseline:-.098,edge:.02,yRatio:.58}},letterDeviationMap:{default:{threshold:0,letterMap:{0:{baseLetter:"0"},1:{baseLetter:"1"},2:{baseLetter:"2"},C:{baseLetter:"C"},"\u0106":{baseLetter:"C"},"\u0108":{baseLetter:"C"},"\u010c":{baseLetter:"C"},"\u010a":{baseLetter:"C"},"\u1e08":{baseLetter:"C"},"\u0187":{baseLetter:"C"},"C\u0308":{baseLetter:"C"},"\u023b\u0308":{baseLetter:"C"},"\xc7\u0308":{baseLetter:"C"},"\u0107\u0308":{baseLetter:"c"},"\u0109\u0308":{baseLetter:"c"},"\u010d\u0308":{baseLetter:"c"},"\u010b\u0308":{baseLetter:"c"},"\u1e09\u0308":{baseLetter:"c"},"\u0188\u0308":{baseLetter:"c"},"c\u0308\u0308":{baseLetter:"c"},"\u023c\u0308":{baseLetter:"c"},"\xe7\u0308":{baseLetter:"c"},Q:{baseLetter:"Q"},"\u024a":{baseLetter:"Q"},q:{baseLetter:"q"},"\u02a0":{baseLetter:"q"},"\u024b":{baseLetter:"q"},"q\u0303":{baseLetter:"q"},o:{baseLetter:"o"},"\xf8":{baseLetter:"o"},"\u01ff":{baseLetter:"o"},"\xf6":{baseLetter:"o"},"\u022b":{baseLetter:"o"},"\xf3":{baseLetter:"o"},"\xf4":{baseLetter:"o"},"\u1ed1":{baseLetter:"o"},"\u1ed5":{baseLetter:"o"},"\u1ed7":{baseLetter:"o"},"\u01eb":{baseLetter:"o"},"\u020d":{baseLetter:"o"},"o\u0329":{baseLetter:"o"},"\xf3\u0329":{baseLetter:"o"},"\xf2\u0329":{baseLetter:"o"},"\u1ed9":{baseLetter:"o"},"\u01d2":{baseLetter:"o"},"\u1e53":{baseLetter:"o"},"\u1e51":{baseLetter:"o"},"\u1ecf":{baseLetter:"o"},"\u014d":{baseLetter:"o"},"\u1e4f":{baseLetter:"o"},"\xf5":{baseLetter:"o"},"\u1e4d":{baseLetter:"o"},"\u0151":{baseLetter:"o"},"\u014f":{baseLetter:"o"},"\u020f":{baseLetter:"o"},"\u022f":{baseLetter:"o"},"\u0231":{baseLetter:"o"},"\u01a1":{baseLetter:"o"},"\u1ecd":{baseLetter:"o"},"\u1ed3":{baseLetter:"o"},"\xf2":{baseLetter:"o"},"\u019f":{baseLetter:"o"},"\u0275":{baseLetter:"o"},"\u1ee1":{baseLetter:"o"},"\u1edb":{baseLetter:"o"},"\u1edd":{baseLetter:"o"},"\u1edf":{baseLetter:"o"},"\u022d":{baseLetter:"o"},"\u1ee3":{baseLetter:"o"},"\u01ed":{baseLetter:"o"},O:{baseLetter:"O"},"\xd8":{baseLetter:"O"},"\u01fe":{baseLetter:"O"},"\xd6":{baseLetter:"O"},"\u022a":{baseLetter:"O"},"\xd3":{baseLetter:"O"},"\xd2":{baseLetter:"O"},"\xd4":{baseLetter:"O"},"\u1ed0":{baseLetter:"O"},"\u1ed2":{baseLetter:"O"},"\u1ed4":{baseLetter:"O"},"\u1ed6":{baseLetter:"O"},"\u1ed8":{baseLetter:"O"},"\u01d1":{baseLetter:"O"},"\u0150":{baseLetter:"O"},"\u014e":{baseLetter:"O"},"\u020e":{baseLetter:"O"},"\u022e":{baseLetter:"O"},"\u0230":{baseLetter:"O"},"\u1ecc":{baseLetter:"O"},"\u01a0":{baseLetter:"O"},"\u1eda":{baseLetter:"O"},"\u1edc":{baseLetter:"O"},"\u1ee0":{baseLetter:"O"},"\u1ee2":{baseLetter:"O"},"\u1ede":{baseLetter:"O"},"\u1ece":{baseLetter:"O"},"\u014c":{baseLetter:"O"},"\u1e52":{baseLetter:"O"},"\u1e50":{baseLetter:"O"},"\xd5":{baseLetter:"O"},"\u022c":{baseLetter:"O"},"\u1e4c":{baseLetter:"O"},"\u1e4e":{baseLetter:"O"},"\u01ea":{baseLetter:"O"},"\u020c":{baseLetter:"O"},"O\u0329":{baseLetter:"O"},"\xd3\u0329":{baseLetter:"O"},"\xd2\u0329":{baseLetter:"O"},"\u01ec":{baseLetter:"O"},I:{baseLetter:"I"},i:{baseLetter:"i"},"\xcc":{baseLetter:"I"},"\xcd":{baseLetter:"I"},"\xce":{baseLetter:"I"},"\xcf":{baseLetter:"I"},"\xec":{baseLetter:"i"},"\xed":{baseLetter:"i"},"\xee":{baseLetter:"i"},"\xef":{baseLetter:"i"},"\u0128":{baseLetter:"I"},"\u0129":{baseLetter:"i"},"\u012a":{baseLetter:"I"},"\u012b":{baseLetter:"i"},"\u1ec8":{baseLetter:"I"},"\u1ec9":{baseLetter:"i"},"\u1eca":{baseLetter:"I"},"\u1ecb":{baseLetter:"i"},E:{baseLetter:"E"},e:{baseLetter:"e"},"\xc8":{baseLetter:"E"},"\xc9":{baseLetter:"E"},"\xca":{baseLetter:"E"},"\xca\u0304":{baseLetter:"E"},"\xca\u030c":{baseLetter:"E"},"\xcb":{baseLetter:"E"},"\xe8":{baseLetter:"e"},"\xe9":{baseLetter:"e"},"\xea":{baseLetter:"e"},"\xea\u0304":{baseLetter:"e"},"\xea\u030c":{baseLetter:"e"},"\xeb":{baseLetter:"e"},"\u0112":{baseLetter:"E"},"\u0113":{baseLetter:"e"},"\u1eba":{baseLetter:"E"},"\u1ebb":{baseLetter:"e"},"\u1ebc":{baseLetter:"E"},"\u1ebd":{baseLetter:"e"},"\u1ebe":{baseLetter:"E"},"\u1ebf":{baseLetter:"e"},"\u1ec0":{baseLetter:"E"},"\u1ec1":{baseLetter:"e"},"\u1ec2":{baseLetter:"E"},"\u1ec3":{baseLetter:"e"},"\u1ec4":{baseLetter:"E"},"\u1ec5":{baseLetter:"e"},"E\u0329":{baseLetter:"E"},"e\u0329":{baseLetter:"e"},"\xc8\u0329":{baseLetter:"E"},"\xc9\u0329":{baseLetter:"E"},"\xe8\u0329":{baseLetter:"e"},"\u1eb8":{baseLetter:"E"},"\u1eb9":{baseLetter:"e"},"\u1ec6":{baseLetter:"E"},"\u1ec7":{baseLetter:"e"},N:{baseLetter:"N"},"\u0143":{baseLetter:"N"},"\xd1":{baseLetter:"N"},"\u0147":{baseLetter:"N"},"\u01f8":{baseLetter:"N"},"\u1e44":{baseLetter:"N"},"\u1e46":{baseLetter:"N"},"\u0145":{baseLetter:"N"},"\u1e48":{baseLetter:"N"},"\u1e4a":{baseLetter:"N"},"\ua7a4":{baseLetter:"N"},n:{baseLetter:"n"},"\u0144":{baseLetter:"n"},"\xf1":{baseLetter:"n"},"\u0148":{baseLetter:"n"},"\u01f9":{baseLetter:"n"},"\u1e45":{baseLetter:"n"},"\u1e47":{baseLetter:"n"},"\u0146":{baseLetter:"n"},"\u1e49":{baseLetter:"n"},"\u1e4b":{baseLetter:"n"},"\ua7a5":{baseLetter:"n"},"\u1d70":{baseLetter:"n"},"\u1d87":{baseLetter:"n"},G:{baseLetter:"G"}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.825,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:"Arial",vietnameseFontRatio:1,weight:"bold",variant:"arial-name",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextBold:!0,headTextHeightRatio:.775,headTextOverflow:"condense",metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:'"Yu-Gi-Oh! DF Leisho 3"',vietnameseFontRatio:1,variant:"ocg-name",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},Ne={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",variant:"ocg-creator",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},Re={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",variant:"ocg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},Ee={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-type-ability",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4,fontLetterOffsetMap:{}}]},Me={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",variant:"ocg-type-ability",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},ze={"tcg-small":{...J,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...J,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...J,variant:"tcg-large",fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},Ae={"tcg-small":{..._,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{..._,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{..._,variant:"tcg-large",fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...Q,variant:"ocg-small",fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...Q,variant:"ocg-medium",fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...Q,variant:"ocg-large",fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},De={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\xd8":"\u2205"},Pe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\u2205":"\xd8"},He={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},We={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},Be=[{label:"1st Edition",value:"1<st> Edition"},{label:"1\xe8re \xc9dition",value:"1<\xe8re> \xc9dition"},{label:"1\u2006. Auflage",value:"1\u2006. Auflage"},{label:"1\xaa Edizione",value:"1\xaa Edizione"},{label:"1\xaa Edi\xe7\xe3o",value:"1\xaa Edi\xe7\xe3o"},{label:"1\xaa Edici\xf3n",value:"1\xaa Edici\xf3n"}],$e={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},Ye={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[We.ocg[2]]:We.tcg[2],[We.ocg[1]]:We.tcg[1],[We.ocg[0]]:We.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[$e.ocg]:$e.tcg},Ke=Object.entries(Ye).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),Ue={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100,isOfficial:!0},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90,isOfficial:!0},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85,isOfficial:!0},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80,isOfficial:!0},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70,isOfficial:!0},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60,isOfficial:!0},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50,isOfficial:!0},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30,isOfficial:!0},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25,isOfficial:!0},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#666c74",sortWeight:1,isOfficial:!0},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15,isOfficial:!0},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10,isOfficial:!0},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9,isOfficial:!0},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8,isOfficial:!0},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7,isOfficial:!0},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6,isOfficial:!0},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5,isOfficial:!0},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3,isOfficial:!0},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2,isOfficial:!0},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4,isOfficial:!0},rebirth:{name:"rebirth",nameKey:"input.frame.rebirth",labelColor:"#000000",edition:"fanmade",labelBackgroundColor:"#ff9e03",sortWeight:100,isOfficial:!1}},Ge=Object.values(Ue),Xe=Ue.effect,qe={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"},foil:{labelKey:"input.foil.label"}},Ve={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},_e=[-45,0,45,-90,0,90,-135,180,135],Je=[-38,-28,-38,-28,0,-28,-38,-28,-38],Qe=[-30,-23,-30,-28,0,-28,-30,-23,-30],Ze=[0,0,0,0,0,0,0,0,0],et=[-5,0,5,0,0,0,5,0,-5],tt=Object.values({...P,...W,...$}).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),at=Object.values(R).map(e=>{const t=e.fileKey,a=["ocg","tcg"].includes(t);return[...[...L].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}}),...[...a?T:[]].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}})]}),rt={...at.flatMap(e=>e).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),...tt},nt=new RegExp("[A-Z\uff21-\uff3a\xc0-\xd6]"),it=new RegExp("[\\[\\]\u3010\u3011]"),ot=`<(\\/?(${["i","b","pre"].join("|")}))( [^<]*|)>`,lt=(new RegExp(ot),"img"),st=`<(${[lt].join("|")}).*?\\/>`,ct=(new RegExp(st),"</i>"),dt="</b>",ut="<pre>",mt="</pre>",pt="\u29da",bt="\u29db",ht="\u27c5",gt="\u27c6",ft="\u169b",vt="\u169c",yt="\u27ec",xt="\u27ed",jt="\u2987",Ot="\u2988",wt=new RegExp(`[${[vt,ft,gt,ht,xt,yt,bt,pt].join("")}]|(\\|[^}]+})`,"g"),kt=new RegExp(`${jt}[^${jt}${Ot}]*${Ot}$`),St="[\u060c-\u0669#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19\xc0-\xd6\xd9-\xf6\xf9-\xff\u0100-\u017e\u0180-\u024f\u1e00-\u1eff!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",Ct=new RegExp(St,"u"),Ft=new RegExp("[\u060c-\u0669]+","u"),Lt=new RegExp("[\u0102\u0110\u01a0\u0103\u0111\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]"),Tt=new RegExp(`(\\{[^\\{\\}]+?\\}|${St}|${jt}[^${jt}${Ot}]*${Ot}|.)`,"u"),It="\u2e26\u2e27",Nt="\u2e26\u2e26\u2e27\u2e27",Rt=new RegExp(`(^|[-\\u2014/[(\\u2018${pt}${ht}${ft}${yt}\\s])"`,"g"),Et=`${pt}|${bt}`,Mt=new RegExp(Et),zt=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${pt}?(\\(|\\*)[\\w\\W]+${bt}?)\\s*$`,At=new RegExp("[\uff0b\uff0d\xb1~\xa1\xd8#\u2605\u2606@\u221e\u0370-\u03ff\u1f00-\u1ffe]"),Dt=`(${Le.map(e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm}).join("|")})(?![^{]*})`,Pt="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Ht=new RegExp(`[${Pt}]`),Wt=`.[${Pt})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,Bt=new RegExp("[\u2460-\u2473\u203b]"),$t=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),Yt=new RegExp("[\uff10-\uff19]"),Kt=new RegExp("[0-9]"),Ut=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,Gt=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Xt=new RegExp("[\u30fb]"),qt=new RegExp("[\u30fc]"),Vt=new RegExp("[\u2015]"),_t=new RegExp("[\uff1a]"),Jt=new RegExp("[\u3002\uff64]"),Qt=new RegExp("[\uff1a]"),Zt={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},ea={"\u3002":-.5,"\uff1a":-.25},ta={">":.125,"<":.125},aa={},ra={},na={},ia=e=>"tcg"===e?7:1,oa=/{[^{}]+?}/,la="\\s\\-/",sa=-2.25,ca=()=>({version:2,format:"tcg",region:"en",frame:"fusion",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:u(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:ne(),attribute:"LIGHT",attributeType:"auto",subFamily:M,cardIcon:"auto",star:6,starAlignment:"auto",starList:[],art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artStyle:{flipX:!1,flipY:!1},artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},overlay:"",overlayData:"",overlayFit:!0,overlayType:"border,source-in|frame,none",overlayStyle:{flipX:!1,flipY:!1},overlaySource:"online",overlayCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:.685},iconImage:"",iconImageData:"",iconImageFit:!0,iconImageStyle:{flipX:!1,flipY:!1},iconImageSource:"online",iconImageCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:1},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:he,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",firstEditionText:"1<st> Edition",isFirstEdition:!0,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:ie(),typeTextStyle:ie(),effectTextStyle:ie(),pendulumTextStyle:ie(),otherTextStyle:ie(),flag:[0,0,0,0],dyeList:["","","","","","",""],externalInfo:{}}),da=()=>({id:Object(ue.a)(),...ca()}),ua=()=>({version:3,format:"tcg",region:"en",frame:"effect",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:u(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:ne(),attribute:F,attributeType:"auto",subFamily:M,cardIcon:"auto",star:6,starList:[],starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artStyle:{flipX:!1,flipY:!1},artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},overlay:"",overlayData:"",overlayFit:!0,overlayType:"border,source-in|frame,none",overlayStyle:{flipX:!1,flipY:!1},overlaySource:"online",overlayCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:.685},iconImage:"",iconImageData:"",iconImageFit:!0,iconImageStyle:{flipX:!1,flipY:!1},iconImageSource:"online",iconImageCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:1},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:he,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:A,firstEditionText:"1<st> Edition",isFirstEdition:!1,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:ie(),typeTextStyle:ie(),effectTextStyle:ie(),pendulumTextStyle:ie(),otherTextStyle:ie(),dyeList:["","","","","","",""],flag:[0,0,0,0],externalInfo:{}}),ma=[{subType:"artBorder",labelKey:"input.opacity.art-border.label",tooltipKey:"input.opacity.art-border.tooltip"},{subType:"nameBorder",labelKey:"input.opacity.name-border.label",tooltipKey:"input.opacity.name-border.tooltip"},{subType:"effectBox",labelKey:"input.opacity.effect-box.label",tooltipKey:"input.opacity.effect-box.tooltip"}],pa=[{type:"body",label:"Card",labelKey:"input.opacity.body.label"},{type:"name",label:"Name",labelKey:"input.opacity.name.label"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label"},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label"}],ba=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF",ae,"#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],ha={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(g.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(g.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(g.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},ga=[ha["549x800"],ha["561x818"],ha["813x1185"],ha["1122x1636"],ha["1388x2026"],ha["1626x2370"]],fa=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],va=e=>[{value:"auto",label:e["setting.option.sliding-type.auto.label"]},{value:"manual",label:e["setting.option.sliding-type.manual.label"]}],{width:ya,height:xa}=c,ja=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ya,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xa;const a=document.createElement("canvas");a.width=e,a.height=t;const r=a.getContext("2d");return{canvas:a,ctx:r}},{width:Oa,height:wa}=c,ka=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Oa,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:wa,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!pr.test(t))return{canvas:e,ctx:e.getContext("2d")};const{ctx:i,canvas:o}=ja(a,r);return i?(i.filter=["grayscale(1)",n].join(" "),i.drawImage(e,0,0),i.filter="none",i.fillStyle=t,i.globalCompositeOperation="overlay",i.fillRect(0,0,Oa,wa),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),i.globalCompositeOperation="source-over",{canvas:o,ctx:o.getContext("2d")}):{canvas:e,ctx:e.getContext("2d")}},Sa=async e=>{let{canvas:t,customFoilCanvas:a,x:r=0,y:n=0,w:i=Oa,h:o=wa,method:l="source-in"}=e;const s=null!==t&&void 0!==t?t:ja().canvas,c=s.getContext("2d");if(!a||"none"===l||!c)return s;try{if("source-in"===l)c.globalCompositeOperation="source-in",c.drawImage(a,r,n,i,o),c.globalCompositeOperation="source-over";else if("color"===l||"multiply"===l||"overlay"===l){const{canvas:e,ctx:t}=ja();t&&(t.globalAlpha=.65,t.drawImage(a,r,n,i,o),t.globalCompositeOperation="destination-in",t.drawImage(s,0,0),c.globalCompositeOperation=l,c.drawImage(e,0,0),c.globalCompositeOperation="source-over")}}catch(d){return s}return s};var Ca=a(161),Fa=a.n(Ca),La=a(241),Ta=a.n(La),Ia=a(111),Na=a.n(Ia),Ra=a(297),Ea=a.n(Ra),Ma=a(298),za=a.n(Ma),Aa=a(299),Da=a.n(Aa),Pa=a(300),Ha=a.n(Pa);function Wa(e,t){var a,r,n,i,o,l,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,p=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],p+=c[a],m=Math.max(m,c[a]);var b=Na.a.mallocDouble(u),h=Fa()(b,c.slice(0),d.slice(0),0),g=Na.a.mallocUint32(m),f=Na.a.mallocUint32(m),v=Na.a.mallocDouble(u),y=Fa()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:p);for(function(e,t,a){var r,n,i,o=0,l=Math.min;for(r=0;r<t;++r){for(i=e[o++],n=1;n<a;++n)i=l(e[o],i+1),e[o++]=i;for(n=0;n<a;++n)i=l(e[--o],i+1),e[o]=i;o+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(i=h.stride,n=1,r=a-1;r<s;++r)i[r]=n,n*=c[r];for(r=a-2;r>=0;--r)i[r]=n,n*=c[r];if(Ta.a.assign(h,y),l=c[a-1],isFinite(t))if(1===t)Ea()(h.data,u/l|0,0|l,g,f);else if(2===t)za()(h.data,u/l|0,0|l,g,f);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");Ha()(h.data,u/l|0,0|l,g,f,t)}else Da()(h.data,u/l|0,0|l,g,f);o=y,y=h,h=o}return Ta.a.assign(e,y),Na.a.freeDouble(v),Na.a.freeDouble(b),Na.a.freeUint32(g),Na.a.freeUint32(f),e}var Ba=a(39),$a=a(335),Ya=a(301),Ka=a(145);const Ua={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ga={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Xa={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},qa="sobel",Va=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:qa});class _a{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...Va(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:i,invertedGreen:o,invertedSource:l,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(i),this.invertGreen(o),this.invertSource(l),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new Ba.h(-.5,.5,.5,-.5,0,1),t=new Ba.k,a=new Ya.a(t,e);this.renderer=new Ba.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=Ba.n.clone(Xa.uniforms),this.material=new Ba.l({fragmentShader:Xa.fragmentShader,vertexShader:Xa.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new Ba.i(1,1,1,1),n=new Ba.f(r,this.material);t.add(n),this.gaussianShaderY=new Ka.a(Ga),this.gaussianShaderX=new Ka.a(Ua),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new $a.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new Ba.p(e,t,{minFilter:Ba.g,magFilter:Ba.g,format:Ba.j,stencilBuffer:!1})}getTexture(e){const t=new Ba.m(e);return t.wrapS=t.wrapT=Ba.b,t.minFilter=t.magFilter=Ba.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const Ja=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),i=Math.sin(a)*Math.cos(r),o=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*i)/100,Math.round(100*o)/100]},Qa=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:i=[255,255,255],lightAngleVec:o,lightPitch:l,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,p=null!==r&&void 0!==r?r:t.width,b=u.getImageData(0,0,p,m,{willReadFrequently:!0}).data,h=o||("number"===typeof l&&"number"===typeof s?Ja(l,s):[1,0,0]),g=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),f=[h[0]/g,h[1]/g,h[2]/g];if(b)try{var v;const e=new Uint8ClampedArray(p*m);for(let n=0;n<b.length;n+=4)b[n]||b[n+1]||b[n+2]||b[n+3]?e[n/4]=0:e[n/4]=1;const t=Wa(Fa()(e,[m,p])),a=t.shape[0],r=t.shape[1],o=new Uint8ClampedArray(p*m*4),l=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*p+e),r=t.get(n,e);o[a]=r*l,o[a+1]=r*l,o[a+2]=r*l,o[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=p,s.height=m,null===(v=s.getContext("2d"))||void 0===v||v.putImageData(new ImageData(o,p,m),0,0);const u=document.createElement("canvas");u.width=p,u.height=m;new _a(Va(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:qa});const h=document.createElement("canvas");h.width=p,h.height=m;const g=h.getContext("2d");if(null===g||void 0===g||g.drawImage(u,0,0,p,m),!g)throw new Error("Could not soften normal map");const y=((e,t,a,r,n,i)=>{const o=new Uint8ClampedArray(t*a*4),l=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*i**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,i=0,u=0,m=0;for(let o=-l;o<=l;o++)for(let p=-l;p<=l;p++){const l=r+p,b=d+o;if(l>=0&&b>=0&&l<t&&b<a){const a=4*(d*t+r),o=4*(b*t+l),p=e[a],h=e[a+1],g=e[a+2],f=e[o],v=e[o+1],y=e[o+2],x=s(l,b,r,d)*c(p,f)*c(h,v)*c(g,y);n+=f*x,i+=v*x,u+=y*x,m+=x}}const p=4*(d*t+r);o[p]=n/m,o[p+1]=i/m,o[p+2]=u/m,o[p+3]=e[p+3]}return o})(g.getImageData(0,0,p,m).data,p,m,9,70,20),x=new Uint8ClampedArray(p*m*4);for(let n=0;n<b.length;n+=4){let e=y[n]/127.5-1,t=y[n+1]/127.5-1,a=y[n+2]/127.5-1;const r=(e*f[0]+t*f[1]+a*f[2])/2*(Math.abs(c)+Math.abs(d)),o=Math.max(c,Math.min(r,d));x[n]=Math.round(b[n]+i[0]*o),x[n+1]=Math.round(b[n+1]+i[1]*o),x[n+2]=Math.round(b[n+2]+i[2]*o),x[n+3]=b[n+3]}return new ImageData(x,p,m)}catch(y){return console.error("Could not apply emboss effect",y),null}},Za=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(r=>{setTimeout(()=>{if(e.current&&t)try{e.current.toBlob(e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r({status:"success"})},e.onerror=e=>{URL.revokeObjectURL(a),r({status:"error",data:e})}}else r({status:"error",data:new Error("Empty layer")})}else r({status:"error",data:new Error("No layer blob")})})}catch(a){t.drawImage(e.current,0,0),console.error("generateLayer",e.current.id,a),r({status:"error",data:a})}else r({status:"error",data:new Error("No export canvas")})},25*a)})},er=e=>"speed-skill"===e.frame&&!tr(e),tr=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,ar=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"rebirth"===e?"grade":"level",rr=e=>!tr({frame:e})||ir(e),nr=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),ir=e=>["link"].includes(e)||nr(e),or=(e,t)=>{let a=!1;switch(e){case 1:a=!0;break;case 2:a=!1;break;case 0:a=null!==t&&void 0!==t&&t}return a},lr=(e,t)=>{var a,r,n,i,o,l;const{frame:s,topLeftFrame:c,topRightFrame:d,bottomLeftFrame:u,bottomRightFrame:m,effectBackground:p,pendulumEffectBackground:b}=e,h=null!==s&&void 0!==s?s:"effect",g=null!==(a="auto"===c?h:c)&&void 0!==a?a:h,f=null!==(n="auto"===u?t?"spell":g:u)&&void 0!==n?n:h;return{topLeftFrame:g,topRightFrame:null!==(r="auto"===d?g:d)&&void 0!==r?r:h,bottomLeftFrame:f,bottomRightFrame:null!==(i="auto"===m?f:m)&&void 0!==i?i:h,effectBackground:null!==(o="auto"===p?f:p)&&void 0!==o?o:h,pendulumEffectBackground:null!==(l="auto"===b?f:b)&&void 0!==l?l:h}},sr=e=>{var t,a;let{format:r,frame:n,nameStyle:i,nameStyleType:o,foil:l}=e;const s=er({frame:n});let c="auto"===o?re:i.font;if(c===re&&"ocg"===r&&(c="OCG"),c===re&&"tcg"===r&&(c="Default"),c===re&&s&&"tcg"===r&&(c="Arial"),"custom"===o)return{...i,font:c};const d=rr(n);let u={fillStyle:d?"#ffffff":ae,headTextFillStyle:d?"#ffffff":ae};if("predefined"===o){var m;const e={...le[null!==(m=i.preset)&&void 0!==m?m:"commonB"].value};return{...u,...e,font:e.font===re?c:e.font}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const b="normal"!==l&&null!==(t=null===(a=le[l])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===n?le.animeGold.value:{};return{font:c,...u,...p,...b,...h}};var cr=a(630),dr=a(617);const ur=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return mr(e,0)},mr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),e=>e===t[0]?t[1]:t[0]);if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},pr=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,br=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const i=e.replace("#","");let o=[0,0,0,1];var a,r,n;if(3===i.length||4===i.length)o=[parseInt(`${i[0]}${i[0]}`,16),parseInt(`${i[1]}${i[1]}`,16),parseInt(`${i[2]}${i[2]}`,16),parseInt(`${null!==(a=i[3])&&void 0!==a?a:"f"}${null!==(r=i[3])&&void 0!==r?r:"f"}`,16)];if(6===i.length||8===i.length)o=[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16),parseInt(null!==(n=i.slice(6,8))&&void 0!==n?n:"ff",16)];return o.map(e=>isNaN(e)?255:e).slice(0,t?4:3)}catch(i){return[0,0,0,1].slice(0,t?4:3)}};function hr(e){if("number"!==typeof e)return"00";const t=Math.max(0,Math.min(e,255)).toString(16);return 1===t.length?"0"+t:t}const gr=e=>{var t,a,r;return(299*(null!==(t=e[0])&&void 0!==t?t:0)+587*(null!==(a=e[1])&&void 0!==a?a:0)+114*(null!==(r=e[2])&&void 0!==r?r:0))/1e3>=128?"#000000":"#FFFFFF"},fr={version:"ve",format:"fm",region:"rg",legacyTemplate:"lt",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artBorder:"opab",effectBox:"opeb",frameBorder:"opfb",nameBorder:"opnb",baseFill:"opbf",artFrame:"opaf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artStyle:{_newKey:"ast",flipX:"asfx",flipY:"asfy"},artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundStyle:{_newKey:"bst",flipX:"bsfx",flipY:"bsfy"},backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},overlay:"ovg",overlayFit:"ovf",overlayType:"ovt",overlayStyle:{_newKey:"ovst",flipX:"ovsfx",flipY:"ovsfy"},overlayData:"ovgd",overlaySource:"ovgs",overlayCrop:{_newKey:"ovgc",x:"ovgx",y:"ovgy",width:"ovgw",height:"ovgh",unit:"ovgu",aspect:"ovga"},iconImage:"sivg",iconImageFit:"sivf",iconImageStyle:{_newKey:"sivst",flipX:"sivsfx",flipY:"sivsfy"},iconImageData:"sivgd",iconImageSource:"sivgs",iconImageCrop:{_newKey:"sivgc",x:"sivgx",y:"sivgy",width:"sivgw",height:"sivgh",unit:"sivgu",aspect:"sivga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg",minLine:"eml",justifyRatio:"ejr"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg",minLine:"pml",justifyRatio:"pjr"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",attributeType:"att",subFamily:"sf",starList:"stl",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",firstEditionText:"fe",isFirstEdition:"ife",cornerText:"act",hasCornerText:"hct",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",dyeList:"dl",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},vr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr;const a={},r={...e};return Object.keys(r).forEach(e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var i;const r=null===(i=t[e])||void 0===i?void 0:i._newKey;r&&(a[r]=vr(n,t[e]))}}),a},yr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr;const a={};return Object.keys(t).forEach(r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&e[i]&&(a[r]=yr(e[i],t[r]))}}),a},xr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr;const a="string"===typeof e?JSON.parse(ur(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach(e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&a[i]&&(r[e]=xr(a[i],t[e]))}}),r},jr=function(e){var t,a,r,n,i,o,l,s,c,d,m,p,b,h;let g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ua();delete g.version;const f={id:Object(ue.a)(),...g,...Object(cr.a)(e)};if(f.effectStyle={...ua().effectStyle,...f.effectStyle},"verystrict"===(null===(t=f.effectStyle)||void 0===t?void 0:t.condenseTolerant)&&(f.effectStyle.condenseTolerant="veryStrict"),"veryloose"===(null===(a=f.effectStyle)||void 0===a?void 0:a.condenseTolerant)&&(f.effectStyle.condenseTolerant="veryLoose"),null==f.pendulumStyle?f.pendulumStyle={...ua().pendulumStyle}:f.pendulumStyle={...ua().pendulumStyle,...f.pendulumStyle},null==f.version&&(f.version=1),null==f.format&&(f.format="tcg"),null==e.region&&(f.region=R["tcg"===f.format?"en":"jp"].key),null==f.pendulumFrame&&(f.pendulumFrame="auto"),null==f.pendulumSize&&(f.pendulumSize="medium"),null==f.rightFrame&&(f.rightFrame="auto"),null==f.leftFrame&&(f.leftFrame="auto"),null==f.pendulumRightFrame&&(f.pendulumRightFrame="auto"),null==f.finish&&(f.finish=[]),Array.isArray(f.starList)||(f.starList=[]),null==f.artFinish&&(f.artFinish="normal"),f.finish){const e=f.finish;e.includes("art")&&(f.finish=e.filter(e=>"art"!==e),f.otherFinish=[f.artFinish,f.artFinish,f.artFinish,f.artFinish])}!Array.isArray(f.otherFinish)||3!==f.otherFinish.length&&null!=f.otherFinish[3]||(f.otherFinish[3]=ua().otherFinish[3]),f.picture&&!e.art&&(f.art=f.picture),delete f.picture,f.pictureCrop&&!e.artCrop&&(f.artCrop=f.pictureCrop),delete f.pictureCrop,""===(null!==(r=f.art)&&void 0!==r?r:"")&&(f.art=""),""===(null!==(n=f.artData)&&void 0!==n?n:"")&&(f.artData=""),""===(null!==(i=f.artSource)&&void 0!==i?i:"")&&(f.artSource="online"),null==f.artFit&&(f.artFit=!1),f.artStyle={flipX:!1,flipY:!1,...f.artStyle},"boolean"===typeof f.opacity.artFrame&&null==f.opacity.boundless&&(f.opacity.boundless=!f.opacity.artFrame,delete f.opacity.artFrame),"boolean"!==typeof f.opacity.frameBorder&&(f.opacity.frameBorder=!1),f.opacity={...u(),...f.opacity},delete f.opacity.artFrame,""===(null!==(o=f.background)&&void 0!==o?o:"")&&(f.background=""),""===(null!==(l=f.backgroundData)&&void 0!==l?l:"")&&(f.backgroundData=""),""===(null!==(s=f.backgroundSource)&&void 0!==s?s:"")&&(f.backgroundSource="online"),null==f.backgroundFit&&(f.backgroundFit=!1),f.backgroundStyle={flipX:!1,flipY:!1,...f.backgroundStyle},null==f.hasBackground&&(f.background||f.backgroundData||f.opacity.baseFill)&&(f.hasBackground=!0),f.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...f.backgroundCrop},""===(null!==(c=f.overlay)&&void 0!==c?c:"")&&(f.overlay=""),""===(null!==(d=f.overlayData)&&void 0!==d?d:"")&&(f.overlayData=""),""===(null!==(m=f.overlaySource)&&void 0!==m?m:"")&&(f.overlaySource="online"),null==f.overlayFit&&(f.overlayFit=!0),f.overlayStyle={flipX:!1,flipY:!1,...f.overlayStyle},f.overlayCrop={x:0,y:0,width:100,height:100,unit:"%",aspect:.685,...f.overlayCrop},""===(null!==(p=f.iconImage)&&void 0!==p?p:"")&&(f.iconImage=""),""===(null!==(b=f.iconImageData)&&void 0!==b?b:"")&&(f.iconImageData=""),""===(null!==(h=f.iconImageSource)&&void 0!==h?h:"")&&(f.iconImageSource="online"),null==f.iconImageFit&&(f.iconImageFit=!0),f.iconImageStyle={flipX:!1,flipY:!1,...f.iconImageStyle},f.iconImageCrop={x:0,y:0,width:100,height:100,unit:"%",aspect:1,...f.iconImageCrop},null==f.isLink&&"link"===f.frame&&(f.isLink=!0),null==f.linkRating&&(f.linkRating=""),f.kanjiHelper&&!e.furiganaHelper&&(f.furiganaHelper=f.kanjiHelper),delete f.kanjiHelper,void 0===f.furiganaHelper&&(f.furiganaHelper=!0),f.passcode&&!e.password&&(f.password=f.passcode),delete f.passcode,f.effectTextStyle||(f.effectTextStyle=ie()),f.pendulumTextStyle||(f.pendulumTextStyle=ie()),f.typeTextStyle||(f.typeTextStyle=ie()),f.statTextStyle||(f.statTextStyle=ie()),f.otherTextStyle||(f.otherTextStyle=ie()),"undefined"===typeof f.isLimitedEdition&&(f.isLimitedEdition=!1),"undefined"===typeof f.isLegacyCard&&(f.isLegacyCard=!1),f.starAlignment||(f.starAlignment="auto"),null==f.attributeType&&(f.attributeType="custom");const v=[0,0,0,0];if(Array.isArray(f.flag)){if(f.flag.length<v.length){const e=[...f.flag];f.flag=v.map((t,a)=>"number"===typeof e[a]?e[a]:t)}}else f.flag=v;const y=["","","","","","",""];if(Array.isArray(f.dyeList)){if(f.dyeList.length<y.length){const e=[...f.dyeList];f.dyeList=y.map((t,a)=>"string"===typeof e[a]?e[a]:t)}}else f.dyeList=y;if(pr.test(f.dyeList[6])&&"normal"===f.foil&&(f.foil="platinum"),0===f.version||1===f.version){f.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:i,frame:o}=f,l=tr({frame:o});("auto"!==e||t?!!(a||r||n&&i.length):l)||(f.atk="",f.def="")}if(2===f.version){f.version=3;const e=f.nameStyle.font;"Default"!==e&&"OCG"!==e||(f.nameStyle.font="Auto")}return f},Or=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},wr=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},kr=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:vr(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:vr(a)}},Sr=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),Cr=(e,t)=>{const{aspect:a,height:r,width:n,x:i,y:o,unit:l}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:p}=null!==t&&void 0!==t?t:{};return Sr(a,s)&&Sr(r,c)&&Sr(n,d)&&Sr(i,u)&&Sr(o,m)&&l===p},Fr=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Lr=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Tr={height:100,width:600},Ir=(()=>{let e="",t={};return{get:e=>t[e],test:(a,r)=>{let{scale:n,xRatio:i,setup:o}=r;const l=JSON.stringify(a);if(l===e)return;e=l;const s=document.getElementById("debug-canvas"),c=null===s||void 0===s?void 0:s.getContext("2d"),d=null!==n&&void 0!==n?n:1,u=null!==i&&void 0!==i?i:1;if(s&&c){c.clearRect(0,0,s.width,s.height),t={},o&&o(c),c.fillStyle="#000000",c.fillText("mienMIEN120OQoqG",0,95);const e={1:[{letter:"m",x:Math.round(34*u)},{letter:"i",x:Math.round(52*u),anchor:"m"},{letter:"e",x:Math.round(71*u),anchor:"m"},{letter:"n",x:Math.round(96*u),anchor:"m"},{letter:"M",x:Math.round(136*u)},{letter:"I",x:Math.round(188*u),anchor:"M"},{letter:"E",x:Math.round(208*u),anchor:"M"},{letter:"N",x:Math.round(240*u),anchor:"M"},{letter:"1",x:Math.round(290*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(326*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(360*u),anchor:"M"},{letter:"O",x:Math.round(400*u),anchor:"M"},{letter:"Q",x:Math.round(443*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(483*u),anchor:"m"},{letter:"q",x:Math.round(521*u),anchor:"m",compensateBottom:!1},{letter:"G",x:Math.round(566*u),anchor:"M"}],2:[{letter:"m",x:Math.round(70*u)},{letter:"i",x:Math.round(105*u),anchor:"m"},{letter:"e",x:Math.round(143*u),anchor:"m"},{letter:"n",x:Math.round(196*u),anchor:"m"},{letter:"M",x:Math.round(337*u)},{letter:"I",x:Math.round(376*u),anchor:"M"},{letter:"E",x:Math.round(415*u),anchor:"M"},{letter:"N",x:Math.round(481*u),anchor:"M"},{letter:"1",x:Math.round(585*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(654*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(723*u),anchor:"M"},{letter:"O",x:Math.round(801*u),anchor:"M"},{letter:"Q",x:Math.round(888*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(969*u),anchor:"m"},{letter:"q",x:Math.round(1043*u),anchor:"m",compensateBottom:!1},{letter:"G",x:Math.round(1126*u),anchor:"M"}]}[d];if(c.resetTransform(),e){const a=c.getImageData(0,0,Tr.width*d,Tr.height),r=a.data,n=(e,t,a)=>{r[e]=t?255:0,r[e+1]=a?0:255,r[e+2]=t?0:255,r[e+3]=255};let i={};for(let o=0;o<e.length;o++){const{anchor:l,letter:s,x:c,compensateBottom:d=!0,compensateTop:u=!0}=e[o];let m=-1,p=-1;const b=90;for(let e=0;e<Tr.height;e++){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>b&&-1===m&&(o=e),n(t,i>b&&-1===m,u);const l=4*(e*a.width+c+1),s=r[l+3];let d=-1;s>b&&-1===m&&(d=e+1),n(l,s>b&&-1===m,u);const p=4*(e*a.width+c+2),h=r[p+3];let g=-1;if(h>b&&-1===m&&(g=e+2),n(p,h>b&&-1===m,u),m=Math.max(o,d,g),-1!==m)break}for(let e=Tr.height-1;e>=0;e--){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>b&&-1===p&&(o=e),n(t,i>b&&-1===p,d);const l=4*(e*a.width+c+1),s=r[l+3];let u=-1;s>b&&-1===p&&(u=e+1),n(l,s>b&&-1===p,d);const m=4*(e*a.width+c+2),h=r[m+3];let g=-1;if(h>b&&-1===p&&(g=e+2),n(m,h>b&&-1===p,d),p=Math.max(o,u,g),-1!==p)break}if("string"!==typeof l)i[s]={ascent:m,descent:p};else{const{ascent:e,descent:a}=i[l];t[s]={ascentCompensate:1*("number"===typeof e&&u?m-e:0),descentCompensate:1*("number"===typeof a&&d?a-p:0),height:p-m,anchorAscent:e,anchorDescent:a,anchorHeight:a-e}}}c.putImageData(new ImageData(r,a.width,a.height),0,0),c.font="10px Arial"}}}}})();var Nr=a(242);const Rr=(e,t)=>{var a,r,n,i,o;const{creator:l,effect:s,format:c,region:d,isFirstEdition:u,name:m,password:p,pendulumEffect:b,setId:h,typeAbility:g}=e;if(c===t)return e;const f=R[d].category===t?d:R[E[t]].key,v="ocg"===t?Ke:Ye,y="ocg"===t&&/-EN/.test(h)?h.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(h)?h.replace("-JP","-EN"):h;return{...e,name:null!==(a=v[m])&&void 0!==a?a:m,format:t,region:f,effect:null!==(r=v[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=v[b])&&void 0!==n?n:b,typeAbility:g.map(e=>{var t;return null!==(t=v[e])&&void 0!==t?t:e}),creator:null!==(i=v[l])&&void 0!==i?i:l,password:null!==(o=v[p])&&void 0!==o?o:p,setId:y,isFirstEdition:"ocg"!==t&&u}};var Er=a(67);const Mr=Object(Er.create)((e,t)=>({batchName:"",batch:void 0,batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1,startBatchDownload:(t,a)=>{e({batchName:t,batchQueue:a,isBatchDownloading:!0})},stopBatchDownload:()=>{e({batchName:"",batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1})},clearQueue:()=>{e({batchQueue:[]})},addToBatch:(t,a,r)=>{e(e=>{let{batchQueue:n,batchDataMap:i}=e;const o=n.filter(e=>e!==t),l={...i};return l[t]={name:a,blob:r},{batchQueue:o,batchDataMap:l,isReady:0===o.length}})}}));var zr=a(113),Ar=a.n(zr),Dr=a(302),Pr=a.n(Dr),Hr=a(337);const Wr=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(g.jsx)(n.a.Fragment,{children:r.map((e,a)=>a%2===0?Object(g.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e])},e)},i={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,i,o)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:i,other:o}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,i)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-2.content":(e,t,n,i)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,i)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-6.content":(e,t,n,i)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-7.content":(e,t,n,i)=>r(a("guide.format.section-7.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-8.content":(e,t,n,i)=>r(a("guide.format.section-8.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-9.content":e=>r(a("guide.format.section-9.content"),{openTag:e}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...i}}},Br=Object(Er.create)((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=Wr({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),i=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const i=Wr(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=i,i}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},o=async a=>{const o=t().languageMetadataMap[a];if(!o)return;const l=r[a]?r[a]:await i(a);l?(e({languageInfo:t().languageMetadataMap[a],language:l.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:o})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await i("eng"),await o(a),e({isInitiating:!1})},loadLanguage:i,changeLanguage:o}}),$r=()=>Br(e=>{let{language:t}=e;return t}),Yr=()=>Br.getState().language;var Kr=a(187);const Ur=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Art Data","Art Source","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","First Edition Text","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Region","Attribute Type","Star Type","Star Alignment","Card Icon Type","Link Rating","Corner Text","Has Corner Text","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Frame Border","Opacity - Art Border","Opacity - Name Border","Opacity - Effect Box","Opacity - Boundless","Has Background","Background Link","Background Data","Background Source","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Art Style","Background Style","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Effect Style - Min Line","Effect Style - Justify Ratio","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Pendulum Effect Style - Min Line","Pendulum Effect Style - Justify Ratio","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Overlay Link","Overlay Data","Overlay Source","Is Using Full Overlay","Overlay Style","Overlay Type","Overlay Crop - X (%)","Overlay Crop - Y (%)","Overlay Crop - Width (%)","Overlay Crop - Height (%)","Icon Link","Icon Data","Icon Source","Is Using Full Icon Image","Icon Style","Icon Crop - X (%)","Icon Crop - Y (%)","Icon Crop - Width (%)","Icon Crop - Height (%)","Left Frame","Right Frame","Bottom Right Frame","Dye List","Star List","Flag","Legacy Template","External Info (JSON)"],Gr=[...Ur,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Xr=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),qr=new Set(Gr.map(Xr)),Vr=Ur.reduce((e,t,a)=>{const r=Xr(t);return qr.has(r)&&(e[t]=a),e},{}),_r=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,Jr=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},Qr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Zr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,en=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,tn=e=>{try{const t=e[0].reduce((e,t,a)=>{const r=Xr(t);return qr.has(r)&&(e[t]=a),e},{});return e.map((e,a)=>{var r,n,i,o,l,s,c,d,b,h,g,f,v,y,x,j,O,k,S,C,L,T,I,N,R,E,M,z,A,D,P,H,W,B,$,Y,K,U,X,q,V,_,J,Q,Z,ee,te,ae,re,oe,le,se,ce,de,me,pe,be,he,ge,fe,ve,xe,je,Oe,we,ke,Se,Ce,Fe,Le,Te,Ie,Ne;if(0===a)return null;if(""===e.join(""))return null;const Re=ua(),Ee=((e,t)=>a=>{var r,n;const i=null!==(r=t[a])&&void 0!==r?r:-1,o=(null!==(n=e[i])&&void 0!==n?n:"").trim();return""===o?void 0:o})(e,t),Me=(null!==(r=null!==(n=Ee("Frame"))&&void 0!==n?n:Ee("Background_Type"))&&void 0!==r?r:Re.frame).toLowerCase(),ze=(null!==(i=Ee("Right Frame"))&&void 0!==i?i:Re.rightFrame).toLowerCase(),Ae=(null!==(o=Ee("Left Frame"))&&void 0!==o?o:Re.leftFrame).toLowerCase(),De=(null!==(l=Ee("Bottom Right Frame"))&&void 0!==l?l:Re.pendulumRightFrame).toLowerCase(),Pe=null!==(s=null!==(c=Ee("Star"))&&void 0!==c?c:Ee("Level/Rank"))&&void 0!==s?s:"",He="text"===Ee("Star Type")?Pe:parseInt(Pe)<=13&&parseInt(Pe)>=0&&"2"!==Ee("Star_Type")?parseInt(Pe):Pe,We=(null!==(d=null!==(b=Ee("Foil"))&&void 0!==b?b:Ee("Rarity"))&&void 0!==d?d:"normal").toLowerCase(),Be=w[We]?We:"normal",$e=null!==(h=null===(g=Ee("Attribute Type"))||void 0===g?void 0:g.toLowerCase())&&void 0!==h?h:"auto",Ye=null===(f=Ee("Attribute"))||void 0===f?void 0:f.toUpperCase(),Ke=Ye||"custom"===$e?"NONE"===Ye?F:null!==Ye&&void 0!==Ye?Ye:F:"spell"===Me?"SPELL":"trap"===Me?"TRAP":Re.attribute,Ue=null!==(v=Ee("Art Finish"))&&void 0!==v?v:Ee("Art_Finish")?`type${Ee("Art_Finish")}`:"",Ge=null!==(y=Ee("Other Finish - Attribute"))&&void 0!==y?y:"",Xe=null!==(x=Ee("Other Finish - Sticker"))&&void 0!==x?x:"",qe=null!==(j=Ee("Other Finish - Icon"))&&void 0!==j?j:"",Ve=null!==(O=Ee("Other Finish - Background"))&&void 0!==O?O:"",_e=null!==(k=Ee("ATK"))&&void 0!==k?k:"",Je=null!==(S=Ee("Card Icon Type"))&&void 0!==S?S:Re.cardIcon,Qe=null!==(C=Ee("Copyright"))&&void 0!==C?C:"",Ze=null!==(L=Ee("DEF"))&&void 0!==L?L:"",et=null!==(T=Ee("Effect"))&&void 0!==T?T:"",tt=null!==(I=null===(N=Ee("Card Finish"))||void 0===N?void 0:N.split(/,| /).filter(e=>""!==e))&&void 0!==I?I:[],at=(null!==(R=Ee("Format"))&&void 0!==R?R:Re.format).toLowerCase(),rt=(null!==(E=Ee("Region"))&&void 0!==E?E:Re.region).toLowerCase(),nt=Jr(Ee("Legacy Template"),Re.legacyTemplate),it=Jr(Ee("Use Furigana Helper"),Re.furiganaHelper),ot=null!==(M=Ee("Name"))&&void 0!==M?M:"",lt=null!==(z=Ee("Password"))&&void 0!==z?z:"",st=null!==(A=null!==(D=Ee("Set Id"))&&void 0!==D?D:Ee("Set_ID"))&&void 0!==A?A:"",ct=(null!==(P=Ee("Star Alignment"))&&void 0!==P?P:Re.starAlignment).toLowerCase(),dt=(null!==(H=Ee("Sticker"))&&void 0!==H?H:Re.sticker).toLowerCase(),ut=(null!==(W=null!==(B=Ee("Spell/Trap Icon"))&&void 0!==B?B:Ee("spell_type/trap_type"))&&void 0!==W?W:Re.subFamily).toUpperCase(),mt=null===($=Ee("Edition"))||void 0===$?void 0:$.toLowerCase(),pt=null!==(Y=Ee("First Edition Text"))&&void 0!==Y?Y:Re.firstEditionText,bt=Jr(Ee("Is First Edition"),mt?"1st edition"===mt:Re.isFirstEdition),ht=null!==(K=Ee("Corner Text"))&&void 0!==K?K:Re.cornerText,gt=Jr(Ee("Has Corner Text"),mt?"1st edition"===mt:Re.hasCornerText),ft=Jr(Ee("Is Duel Terminal Card"),mt?"duel terminal"===mt:Re.isDuelTerminalCard),vt=Jr(Ee("Is Limited Edition"),mt?"limited edition"===mt:Re.isLimitedEdition),yt=Jr(Ee("Is Speed Card"),mt?"speed duel"===mt:Re.isSpeedCard),xt=Jr(Ee("Is Legacy Card"),Re.isLegacyCard),jt=Jr(Ee("Is Pendulum"),Re.isPendulum),Ot=(null!==(U=Ee("Bottom Frame"))&&void 0!==U?U:Re.pendulumFrame).toLowerCase(),wt=null!==(X=Ee("Pendulum Effect"))&&void 0!==X?X:"",kt=null!==(q=Ee("Pendulum Scale Red"))&&void 0!==q?q:"",St=null!==(V=Ee("Pendulum Scale Blue"))&&void 0!==V?V:"",Ct=null!==(_=Ee("Pendulum Size"))&&void 0!==_?_:"medium",Ft=Ee("Type Ability"),Lt=Ft?Ft.split("/"):[Ee("Type_1"),Ee("Type_2"),Ee("Type_3"),Ee("Type_4")].filter(e=>"string"===typeof e&&""!==e).map(e=>"string"===typeof e?e:""),Tt=null!==(J=Ee("Condense Rate"))&&void 0!==J?J:Re.effectStyle.condenseTolerant,It="verystrict"===Tt?"veryStrict":"veryloose"===Tt?"veryLoose":Tt,Nt=Qr(Ee("Effect Style - Upsize"),Re.effectStyle.upSize),Rt=Qr(Ee("Pendulum Effect Style - Upsize"),Re.pendulumStyle.upSize),Et=(null!==(Q=Ee("Effect Style - Font Style"))&&void 0!==Q?Q:Re.effectStyle.fontStyle).toLowerCase(),Mt=(null!==(Z=Ee("Pendulum Effect Style - Font Style"))&&void 0!==Z?Z:Re.pendulumStyle.fontStyle).toLowerCase(),zt=(null!==(ee=Ee("Effect Style - Background"))&&void 0!==ee?ee:Re.effectStyle.background).toLowerCase(),At=(null!==(te=Ee("Pendulum Effect Style - Background"))&&void 0!==te?te:Re.pendulumStyle.background).toLowerCase(),Dt=Qr(Ee("Effect Style - Min Line"),Re.effectStyle.minLine),Pt=Qr(Ee("Pendulum Effect Style - Min Line"),Re.pendulumStyle.minLine),Ht=Qr(Ee("Effect Style - Min Line"),Re.effectStyle.justifyRatio),Wt=Qr(Ee("Pendulum Effect Style - Min Line"),Re.pendulumStyle.justifyRatio),Bt=u(),$t={artBorder:Jr(Ee("Opacity - Art Border"),Bt.artBorder),frameBorder:Jr(Ee("Opacity - Frame Border"),Bt.frameBorder),baseFill:null!==(ae=Ee("Opacity - Base Fill"))&&void 0!==ae?ae:Bt.baseFill,body:Qr(Ee("Opacity - Body"),Bt.body),boundless:Jr(Ee("Opacity - Boundless"),Bt.boundless),effectBox:Jr(Ee("Opacity - Effect Box"),Bt.effectBox),name:Qr(Ee("Opacity - Name"),Bt.name),nameBorder:Jr(Ee("Opacity - Name Border"),Bt.nameBorder),pendulum:Qr(Ee("Opacity - Pendulum"),Bt.pendulum),text:Qr(Ee("Opacity - Text"),Bt.text)},Yt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Kt=null!==(re=Ee("Art Link"))&&void 0!==re?re:Re.art,Ut=null!==(oe=Ee("Art Data"))&&void 0!==oe?oe:Re.artData,Gt=null!==(le=Ee("Art Source"))&&void 0!==le?le:Re.artSource,Xt=Jr(Ee("Is Using Full Art"),Re.artFit),qt={aspect:p(jt,$t,void 0,Ct).ratio,height:Zr(Ee("Art Crop - Height (%)"),Yt.height),width:Zr(Ee("Art Crop - Width (%)"),Yt.width),x:Zr(Ee("Art Crop - X (%)"),Yt.x),y:Zr(Ee("Art Crop - Y (%)"),Yt.y),unit:"%"};let Vt={flipX:!1,flipY:!1};try{var _t;Vt=JSON.parse(null!==(_t=Ee("Art Style"))&&void 0!==_t?_t:"{}")}catch(Ka){console.error("csvToCardList",Ka)}const Jt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Qt=Jr(Ee("Has Background"),Re.hasBackground),Zt=null!==(se=Ee("Background Link"))&&void 0!==se?se:Re.background,ea=null!==(ce=Ee("Background Data"))&&void 0!==ce?ce:Re.backgroundData,ta=null!==(de=Ee("Background Source"))&&void 0!==de?de:Re.backgroundSource,aa=(null!==(me=Ee("Background Type"))&&void 0!==me?me:Re.backgroundType).toLowerCase(),ra=Jr(Ee("Is Using Full Background"),Re.backgroundFit),na={aspect:p(jt,$t,aa,Ct).ratio,height:Zr(Ee("Background Crop - Height (%)"),Jt.height),width:Zr(Ee("Background Crop - Width (%)"),Jt.width),x:Zr(Ee("Background Crop - X (%)"),Jt.x),y:Zr(Ee("Background Crop - Y (%)"),Jt.y),unit:"%"};let ia={flipX:!1,flipY:!1};try{var oa;ia=JSON.parse(null!==(oa=Ee("Background Style"))&&void 0!==oa?oa:"{}")}catch(Ka){console.error("csvToCardList",Ka)}const la={x:0,y:0,width:100,height:100,unit:"%",aspect:.685},sa=null!==(pe=Ee("Overlay Link"))&&void 0!==pe?pe:Re.overlay,ca=null!==(be=Ee("Overlay Data"))&&void 0!==be?be:Re.overlayData,da=null!==(he=Ee("Overlay Source"))&&void 0!==he?he:Re.overlaySource,ma=Jr(Ee("Is Using Full Overlay"),Re.overlayFit),pa=(null!==(ge=Ee("Overlay Type"))&&void 0!==ge?ge:Re.overlayType).toLowerCase(),ba={aspect:m.overframeCard.ratio,height:Zr(Ee("Overlay Crop - Height (%)"),la.height),width:Zr(Ee("Overlay Crop - Width (%)"),la.width),x:Zr(Ee("Overlay Crop - X (%)"),la.x),y:Zr(Ee("Overlay Crop - Y (%)"),la.y),unit:"%"};let ha={flipX:!1,flipY:!1};try{var ga;ha=JSON.parse(null!==(ga=Ee("Overlay Style"))&&void 0!==ga?ga:"{}")}catch(Ka){console.error("csvToCardList",Ka)}const fa={x:0,y:0,width:100,height:100,unit:"%",aspect:1},va=null!==(fe=Ee("Icon Link"))&&void 0!==fe?fe:Re.iconImage,ya=null!==(ve=Ee("Icon Data"))&&void 0!==ve?ve:Re.iconImageData,xa=null!==(xe=Ee("Icon Source"))&&void 0!==xe?xe:Re.iconImageSource,ja=Jr(Ee("Is Using Full Icon Image"),Re.iconImageFit),Oa={aspect:1,height:Zr(Ee("Icon Crop - Height (%)"),fa.height),width:Zr(Ee("Icon Crop - Width (%)"),fa.width),x:Zr(Ee("Icon Crop - X (%)"),fa.x),y:Zr(Ee("Icon Crop - Y (%)"),fa.y),unit:"%"};let wa={flipX:!1,flipY:!1};try{var ka;wa=JSON.parse(null!==(ka=Ee("Icon Style"))&&void 0!==ka?ka:"{}")}catch(Ka){console.error("csvToCardList",Ka)}const Sa=ne(),Ca=(null!==(je=Ee("Name Style Type"))&&void 0!==je?je:Re.nameStyleType).toLowerCase(),Fa={embossPitch:Qr(Ee("Name Style - Emboss Pitch"),Sa.embossPitch),embossYaw:Qr(Ee("Name Style - Emboss Yaw"),Sa.embossYaw),embossThickness:Qr(Ee("Name Style - Emboss Thickness"),Sa.embossThickness),fillStyle:en(Ee("Name Style - Fill Style"),Sa.fillStyle),font:null!==(Oe=Ee("Name Style - Font"))&&void 0!==Oe?Oe:Sa.font,gradientAngle:Qr(Ee("Name Style - Gradient Angle"),Sa.gradientAngle),gradientColor:null!==(we=Ee("Name Style - Gradient Color"))&&void 0!==we?we:Sa.gradientColor,hasEmboss:Jr(Ee("Name Style - Has Emboss"),Sa.hasEmboss),hasGradient:Jr(Ee("Name Style - Has Gradient"),Sa.hasGradient),hasOutline:Jr(Ee("Name Style - Has Outline"),Sa.hasOutline),hasShadow:Jr(Ee("Name Style - Has Shadow"),Sa.hasShadow),headTextFillStyle:en(Ee("Name Style - Headtext Fill Style"),Sa.headTextFillStyle),lineColor:en(Ee("Name Style - Line Color"),Sa.lineColor),lineOffsetX:Qr(Ee("Name Style - Line Offset X"),Sa.lineOffsetX),lineOffsetY:Qr(Ee("Name Style - Line Offset Y"),Sa.lineOffsetY),lineWidth:Qr(Ee("Name Style - Line Width"),Sa.lineWidth),pattern:null!==(ke=Ee("Name Style - Pattern"))&&void 0!==ke?ke:Sa.pattern,preset:null!==(Se=Ee("Name Style - Preset"))&&void 0!==Se?Se:Sa.preset,shadowBlur:Qr(Ee("Name Style - Shadow Blur"),Sa.shadowBlur),shadowColor:en(Ee("Name Style - Shadow Color"),Sa.shadowColor),shadowOffsetX:Qr(Ee("Name Style - Shadow Offset X"),Sa.shadowOffsetX),shadowOffsetY:Qr(Ee("Name Style - Shadow Offset Y"),Sa.shadowOffsetY)},La=Jr(Ee("Is Link"),null!==(Ce=Re.isLink)&&void 0!==Ce?Ce:"link"===Me),Ta=null!==(Fe=[Jr(Ee("Link - Top Left Arrow"),!1)?"1":"",Jr(Ee("Link - Top Arrow"),!1)?"2":"",Jr(Ee("Link - Top Right Arrow"),!1)?"3":"",Jr(Ee("Link - Left Arrow"),!1)?"4":"",Jr(Ee("Link - Right Arrow"),!1)?"6":"",Jr(Ee("Link - Bottom Left Arrow"),!1)?"7":"",Jr(Ee("Link - Bottom Arrow"),!1)?"8":"",Jr(Ee("Link - Bottom Right Arrow"),!1)?"9":""].filter(e=>""!==e))&&void 0!==Fe?Fe:[],Ia=null!==(Le=Ee("Link Rating"))&&void 0!==Le?Le:"",Na=ie(),Ra=[Jr(Ee("Stat Style - Is Custom"),Na[0]),en(Ee("Stat Style - Fill Color"),Na[1]),Jr(Ee("Stat Style - Has Shadow"),Na[2]),en(Ee("Stat Style - Shadow Color"),Na[3])],Ea=[Jr(Ee("Type Style - Is Custom"),Na[0]),en(Ee("Type Style - Fill Color"),Na[1]),Jr(Ee("Type Style - Has Shadow"),Na[2]),en(Ee("Type Style - Shadow Color"),Na[3])],Ma=[Jr(Ee("Effect Style - Is Custom"),Na[0]),en(Ee("Effect Style - Fill Color"),Na[1]),Jr(Ee("Effect Style - Has Shadow"),Na[2]),en(Ee("Effect Style - Shadow Color"),Na[3])],za=[Jr(Ee("Pendulum Effect Style - Is Custom"),Na[0]),en(Ee("Pendulum Effect Style - Fill Color"),Na[1]),Jr(Ee("Pendulum Effect Style - Has Shadow"),Na[2]),en(Ee("Pendulum Effect Style - Shadow Color"),Na[3])],Aa=[Jr(Ee("Other Style - Is Custom"),Na[0]),en(Ee("Other Style - Fill Color"),Na[1]),Jr(Ee("Other Style - Has Shadow"),Na[2]),en(Ee("Other Style - Shadow Color"),Na[3])];let Da={};try{var Pa;Da=JSON.parse(null!==(Pa=Ee("External Info (JSON)"))&&void 0!==Pa?Pa:"{}")}catch(Ka){console.error("csvToCardList",Ka)}const Ha=(null!==(Te=Ee("Flag"))&&void 0!==Te?Te:"").split("|").map(Number).slice(0,ye),Wa=[0,0,0,0].map((e,t)=>"number"===typeof Ha[t]?Ha[t]:e),Ba=(null!==(Ie=Ee("Dye List"))&&void 0!==Ie?Ie:"").split("|").map(String).slice(0,7),$a=["","","","","","",""].map((e,t)=>"string"===typeof Ba[t]?Ba[t]:e),Ya=(null!==(Ne=Ee("Star List"))&&void 0!==Ne?Ne:"").split("|").map(String).slice(0,G);return{id:Object(ue.a)(),...Re,art:Kt,artData:Ut,artCrop:qt,artFinish:Ue,artSource:Gt,artFit:Xt,artStyle:Vt,atk:_e,attribute:Ke,attributeType:$e,background:Zt,backgroundData:ea,backgroundCrop:na,backgroundFit:ra,backgroundStyle:ia,backgroundSource:ta,backgroundType:aa,cardIcon:Je,condenseTolerant:It,cornerText:ht,creator:Qe,def:Ze,dyeList:$a,effect:et,effectStyle:{condenseTolerant:It,upSize:Nt,fontStyle:Et,background:zt,minLine:Dt,justifyRatio:Ht},effectTextStyle:Ma,externalInfo:Da,finish:tt,firstEditionText:pt,flag:Wa,foil:Be,format:at,frame:Me,furiganaHelper:it,hasBackground:Qt,hasCornerText:gt,isDuelTerminalCard:ft,isFirstEdition:bt,isLegacyCard:xt,isLimitedEdition:vt,isLink:La,isPendulum:jt,isSpeedCard:yt,leftFrame:Ae,legacyTemplate:nt,linkMap:Ta,linkRating:Ia,name:ot,nameStyle:Fa,nameStyleType:Ca,opacity:$t,otherFinish:[Ge,qe,Xe,Ve],otherTextStyle:Aa,overlay:sa,overlayCrop:ba,overlayData:ca,overlayFit:ma,overlaySource:da,overlayStyle:ha,overlayType:pa,iconImage:va,iconImageCrop:Oa,iconImageData:ya,iconImageFit:ja,iconImageSource:xa,iconImageStyle:wa,password:lt,pendulumEffect:wt,pendulumFrame:Ot,pendulumRightFrame:De,pendulumScaleBlue:St,pendulumScaleRed:kt,pendulumSize:Ct,pendulumStyle:{upSize:Rt,fontStyle:Mt,background:At,minLine:Pt,justifyRatio:Wt},pendulumTextStyle:za,region:rt,rightFrame:ze,setId:st,star:He,starList:Ya,starAlignment:ct,statTextStyle:Ra,sticker:dt,subFamily:ut,typeAbility:Lt,typeTextStyle:Ea}}).filter(e=>null!=e)}catch(t){return console.error("csvToCardList",t),[]}},an=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),i=!!r&&isFinite(r);if(n&&!i)return-1;if(!n&&i)return 1;if(n&&i)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const o="?"===e?1:""===e?-1:0,l="?"===t?1:""===t?-1:0;return l-o===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):l-o},rn=(e,t)=>e.name.localeCompare(t.name),nn=(e,t)=>e.setId.localeCompare(t.setId),on=(e,t)=>an(e.atk,t.atk),ln=(e,t)=>an(e.def,t.def),sn=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:an(e.star,t.star),cn=(e,t)=>{try{var a,r,n,i;const o=Ue[t.frame].sortWeight-Ue[e.frame].sortWeight;if(0!==o)return o;return(null!==(a=null===(r=Ue[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(i=Ue[e.pendulumFrame])||void 0===i?void 0:i.sortWeight)&&void 0!==n?n:1e3)}catch(o){return 0}},dn=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||er(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},un=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},mn={name:{key:"name",sortFunction:e=>e.map(dn).sort((e,t)=>un([rn,sn,cn,nn,on,ln],e,t))},atk:{key:"atk",sortFunction:e=>e.map(dn).sort((e,t)=>un([on,ln,sn,cn,rn,nn],e,t))},def:{key:"def",sortFunction:e=>e.map(dn).sort((e,t)=>un([ln,on,sn,cn,rn,nn],e,t))},set:{key:"set",sortFunction:e=>e.map(dn).sort((e,t)=>un([nn,cn,sn,rn,on,ln],e,t))},level:{key:"level",sortFunction:e=>e.map(dn).sort((e,t)=>un([cn,sn,rn,nn,on,ln],e,t))}},pn=(e,t)=>{const a=Object.values(t).filter(e=>null!=e);return 0===a.length?e:a.reduce((e,t)=>t(e),e)},bn=Object(Er.create)(Object(Kr.subscribeWithSelector)(e=>({activeId:"",cardDisplayList:[],cardList:[],selectedMap:{},filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e(e=>{let{cardList:t,filterFunctionMap:n}=e;const i={...n};if("text"===a){const e=r.toLowerCase();i[a]=t=>t.filter(t=>{let{name:a,effect:r,pendulumEffect:n,isPendulum:i}=t;return(Fr(a).toLowerCase()+Lr(r).toLowerCase()+(i?Lr(n).toLowerCase():"")).includes(e)})}return{filterFunctionMap:i,cardDisplayList:pn(t,i)}})},resetFilter:()=>{e(e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}})},addCard:t=>e(e=>{let{cardList:a}=e;const r={id:Object(ue.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}}),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e(e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}}),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(e=>{let{cardList:r,cardDisplayList:n,isListDirty:i}=e,o=i;if(!1===o&&a){const e=r.find(e=>e.id===t.id);o=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:i,backgroundCrop:o,...l}=t;return Object(dr.a)(n,l)&&Cr(a,i)&&Cr(r,o)})(t,e)}return{isListDirty:o,cardList:r.map(e=>e.id===t.id?{...t}:e),cardDisplayList:n.map(e=>e.id===t.id?{...t}:e)}})},setActiveId:t=>e({activeId:t}),selectCard:(t,a)=>{e(e=>{let{selectedMap:r}=e;const n={...r};return"add"===a?n[t]=t:delete n[t],{selectedMap:n}})},setSelectMap:(t,a)=>e(e=>{let{selectedMap:r}=e;return{selectedMap:t.reduce((e,t)=>(e[t.id]=t.id,e),"replace"===a?{}:{...r})}}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e(e=>{var a,r,n,i;let{cardList:o,activeId:l,cardDisplayList:s}=e;const c=o.filter(e=>e.id!==t),d=s.filter(e=>e.id!==t),u=d.findIndex(e=>e.id===l);return{activeId:l===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(i=d[0])||void 0===i?void 0:i.id)&&void 0!==a?a:"":l,cardList:c,cardDisplayList:d}})},duplicateCard:t=>{e(e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex(e=>{let{name:a}=e;return a===t.name}),i=Object(ue.a)(),o={...Object(cr.a)(t),name:`${t.name} - Copy`,id:i},l=n<0?[...a,o]:[...a.slice(0,n),a[n],o,...a.slice(n+1,a.length)];return{activeId:i,pendingActiveCard:o,cardList:l,cardDisplayList:pn(l,r)}})},sortList:t=>{e(e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:mn[t].sortFunction(a),cardList:mn[t].sortFunction(r)}})}}))),hn=(e,t)=>{const a=Object(ue.a)();let r=ua(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=yr(a);r=Object.keys(e).length>0?jr(e,t):jr(a,t)}else if(Or(a))r=jr(a);else if(wr(a)){const e=yr(a);r=jr(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:i}=So(e);n=t,r=i}else if(yo(a)){const{isPartial:e,result:t}=So(a);n=e,r=t}else{const{isPartial:e,result:t}=vo(a);n=e,r=t}}catch(i){console.error("decodedCard",e,i);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?xr(e):"string"===typeof e?JSON.parse(e):e,jr(t)}(e,!0),Hr.a.info({message:Yr()["service.decode.outdated.message"],description:Yr()["service.decode.outdated.description"]})}catch(i){console.error("cardData",e,i),Hr.a.error({message:Yr()["service.decode.error.message"],description:Yr()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},gn={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},fn=Object(Er.create)((e,t)=>({card:da(),setCard:(t,a)=>{const r=bn.getState().changeActiveCard;if("function"===typeof t)e(e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}});else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(ue.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:i}=t(),o=t=>{i(a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:"function"===typeof t?t(a):null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}})};if(!n)return o;const l="string"===typeof n?null!==(a=gn[n])&&void 0!==a?a:void 0:n;if(!l)return o;const{wait:s,type:c}=l;return"debounce"===c?Ar()(o,s):"throttle"===c?Pr()(o,s):o}})),vn=Object(Er.create)(e=>({canvasMap:null,canvasRenderCountMap:{iconImage:0},canvasDataMap:{iconImage:null},updateCanvasMap:t=>{e({canvasMap:t})},updateCanvasRenderCount:t=>{e(e=>{const a=t.includes("iconImage")?{...e.canvasRenderCountMap,iconImage:e.canvasRenderCountMap.iconImage+1}:e.canvasRenderCountMap;return{...e,canvasRenderCountMap:a}})},updateCanvasData:t=>{e(e=>{var a,r;const n=t.includes("iconImage"),i=(null===(a=e.canvasMap)||void 0===a||null===(r=a.iconImageCanvasRef.current)||void 0===r?void 0:r.toDataURL())||null;return{...e,canvasDataMap:n?{...e.canvasDataMap,iconImage:n?i:e.canvasDataMap.iconImage}:e.canvasDataMap}})}})),yn=Object(Er.create)(e=>{const{allowHotkey:t,exportFormat:a,exportScheme:r,globalScale:n,mirrorPendulumScale:i,reduceMotionColor:o,resolution:l,showCreativeOption:s,showExtraAttribute:d,showExtraDecorativeOption:u,slidingType:m}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportScheme:"string"===typeof r?r:"with-name",globalScale:"number"===typeof n&&n<=c.maximumScale?n:1,exportFormat:"string"===typeof a?a:"csv",slidingType:"string"===typeof m?m:"auto",resolution:Array.isArray(l)&&"number"===typeof l[0]&&"number"===typeof l[1]?l:[c.width,c.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof o&&o,showCreativeOption:"boolean"!==typeof s||s,showExtraAttribute:"boolean"!==typeof d||d,showExtraDecorativeOption:"boolean"!==typeof u||u,mirrorPendulumScale:"boolean"===typeof i&&i},updateSetting:t=>{e(e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}})}}}),xn=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:i,onExport:o,onDownloadError:l,onDownloadComplete:s}=e;const c=$r(),{card:d}=fn(),{addToBatch:u,batchDataMap:m,isBatchDownloading:p}=Mr(),b=yn(e=>e.setting.resolution),h=yn(e=>e.setting.exportScheme),{opacity:g,name:f,isPendulum:v,pendulumSize:y}=d,x=Fr(f),j=Object(r.useRef)(!1),O=Object(r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;const a=n.current,r=null===a||void 0===a?void 0:a.cloneNode(),i=null===a||void 0===a?void 0:a.getContext("2d"),o=null===r||void 0===r?void 0:r.getContext("2d");if(a&&i&&r&&o&&!t)return e&&(r.width=e[0],r.height=e[1]),o.drawImage(a,0,0,a.width,a.height,0,0,r.width,r.height),r.toDataURL("image/png")},[n,t,b]),w=Object(r.useCallback)(async function(e,t){var a;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;try{const a=O(r);if("string"!==typeof a)throw new Error("Failed to add card to batch");const n=await fetch(a),i=await n.blob();p&&u(t,e,i)}catch(n){l()}null===(a=document.querySelector("#export-canvas-guard"))||void 0===a||a.classList.remove("guard-on"),s()},[u,O,p,s,l,b]),k=Object(r.useCallback)(function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;try{const e=Fr(f),r=O(t);if("string"!==typeof r)throw new Error("Failed to trigger automatic download");var a=document.createElement("a");a.download=e?`${e}.png`:"card.png",a.href=r,a.click()}catch(r){l()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()},[b,s,f,O,l]);return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&(document.title=x?`${x} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")},500),()=>{e=!1}},[x]),Object(r.useEffect)(()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.4.11")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),Object(r.useEffect)(()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.4.11")?r:"unknown")}catch(s){try{var l;const{artData:e,backgroundData:t,overlayData:a,iconImageData:r,...n}=d;localStorage.setItem("card-data",JSON.stringify(n)),localStorage.setItem("card-version",null!==(l="2.4.11")?l:"unknown")}catch(s){const e="fail-to-set-storage-notification";Hr.a.close(e),Hr.a.info({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}}(async()=>{var a,r,l,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(l=document.getElementById("export-canvas-guard"))||void 0===l||l.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),i.current.pipelineRunning=!0,await i.current.currentPipeline,e&&(i.current.currentPipeline=o({isPendulum:v,opacity:g,pendulumSize:y,isRelevant:()=>e}),await i.current.currentPipeline,e))){var c,u,b,f;const e={...d,artData:"",backgroundData:"",overlayData:"",iconImageData:""},a=JSON.stringify(vr(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(b=document.getElementById("export-canvas-guard"))||void 0===b||b.setAttribute("style","display: none"),null===(f=document.getElementById("save-button-waiting"))||void 0===f||f.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),i.current.pipelineRunning=!1,j.current&&(j.current=!1,k()),p&&!m[e.id]&&setTimeout(()=>{w("with-name"===h?`${x}.png`:`${e.setId} - ${x}.png`,e.id)},200)}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}}),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout(()=>{!1===i.current.pipelineRunning?k(a):j.current=!0},200)},isPipelineRunning:()=>i.current.pipelineRunning}};var jn=a(305);const On=()=>{const[e,t]=Object(r.useState)(null),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{const e=await async function(){try{return await Object(jn.a)("YgoCarderDb",4,{upgrade(e,t,a){e.objectStoreNames.contains("messageStore")||e.createObjectStore("messageStore",{keyPath:"key"}),e.objectStoreNames.contains("presetLayoutStore")||e.createObjectStore("presetLayoutStore",{keyPath:"key"}),e.objectStoreNames.contains("presetNameStyleStore")||e.createObjectStore("presetNameStyleStore",{keyPath:"key"}),4===a&&(e.objectStoreNames.contains("presetImageStore")||e.createObjectStore("presetImageStore",{keyPath:"key"})),console.info("YgoCarderDb ready")}})}catch(e){return console.error("setupYgoCarderDb",e),null}}();t(e),n(!0)})(),setTimeout(()=>{n(!0)},5e3)},[]),{db:e,dbReady:a}},wn=e=>{let{value:t="",onChange:a}=e;const[n,i]=Object(r.useState)(t),[o,l]=Object(r.useState)(()=>({hex:pr.test(t)?t:"#000000",rgb:br(t,!1)}));return Object(r.useEffect)(()=>{const e=n.startsWith("#")?n:`#${n}`;pr.test(e)&&(i(e),l({hex:e,rgb:br(e,!1)}),null===a||void 0===a||a(e))},[n]),Object(r.useEffect)(()=>{i(t),l({hex:pr.test(t)?t:"#000000",rgb:br(t,!1)})},[t]),{inputText:n,color:o,setColor:i}};var kn=a(15);const Sn=Object(Er.create)(e=>({memory:{resetCanvasCounter:0,activeDropzone:0,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[],imagePresetMap:{}},updateGlobalMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return e.memory.imagePresetList!==a.imagePresetList&&(a.imagePresetMap=a.imagePresetList.reduce((e,t)=>(e[t.content.name]=t.content,e),{})),{memory:a}})}})),Cn=e=>{const{targetMemory:t,updateGlobalMemory:a}=Sn(Object(kn.useShallow)(t=>{let{memory:a,updateGlobalMemory:r}=t;return{targetMemory:a[e],updateGlobalMemory:r}}));return[t,Object(r.useCallback)(t=>{a(a=>({...a,[e]:"function"===typeof t?t(a[e]):t}))},[e,a])]},{height:Fn,width:Ln,maximumScale:Tn}=c,In=()=>"#000000".replace(/0/g,()=>(~~(12*Math.random()+2)).toString(16)),Nn=e=>{let{ctx:t,color:a=In(),width:r,offset:n=4,edge:i,baseline:o,xRatio:l}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(i/l,o+1+Math.random()*n,r/l,2),t.fillStyle=s},Rn=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="left";const l=Array.from(t);let s=r;return l.forEach(t=>{e.fillText(t,s,n),o&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2}),s},En=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="right";const l=Array.from(t);let s=r;return l.forEach((t,r)=>{const i=l[l.length-r-1];e.fillText(i,s,n),o&&e.strokeText(i,s,n),s-=e.measureText(i).width*(2+a)/2}),s},Mn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ln*Tn,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Fn*Tn;return!!e&&(e.clearRect(0,0,t,a),!0)},zn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return async(a,r,n,i)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var o,l;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(o=t[r])&&void 0!==o?o:[],u=i?null!==(l=c[i])&&void 0!==l?l:i:he;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},An="#000000",Dn="#000000",Pn=e=>{var t,a;let{ctx:r,x:n,y:i,blur:o,color:l,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:p=1,useDefault:b=!0}=e;return(b||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*p),(b||"number"===typeof i)&&(r.shadowOffsetY=(null!==i&&void 0!==i?i:0)*p),(b||"number"===typeof o)&&(r.shadowBlur=(null!==o&&void 0!==o?o:0)*p),(b||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:Dn),(b||"string"===typeof l)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:l)&&void 0!==t?t:ae),(b||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:An),(b||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*p),()=>{(b||"number"===typeof n)&&(r.shadowOffsetX=0),(b||"number"===typeof i)&&(r.shadowOffsetY=0),(b||"number"===typeof o)&&(r.shadowBlur=0),(b||"string"===typeof c)&&(r.shadowColor=Dn),(b||"string"===typeof l)&&(r.fillStyle=ae),(b||"string"===typeof d)&&(r.strokeStyle=An),(b||"number"===typeof m)&&(r.lineWidth=0)}},Hn={},Wn=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var i,o;if(!0===(null===(i=Hn[t])||void 0===i?void 0:i.ready)){const i=Hn[t].image,o="number"===typeof a?a:a(i),l="number"===typeof r?r:r(i);return e.drawImage(i,o,l),void setTimeout(()=>n(!0),0)}if(null!==(o=Hn[t])&&void 0!==o&&o.error)return void setTimeout(()=>n(!0),0);const l=Hn[t]&&(Hn[t].cache||Hn[t].ready),s=l?Hn[t].image:new Image;l||(s.src=t.startsWith("http")?t:"/ygocarder"+t),s.addEventListener("load",()=>{const i="number"===typeof a?a:a(s),o="number"===typeof r?r:r(s);e.drawImage(s,i,o),Hn[t]&&(Hn[t].ready=!0,Hn[t].error=!1),n(!0)},{once:!0}),s.addEventListener("error",()=>{Hn[t]&&(Hn[t].error=!0),n(!1)},{once:!0}),l||(Hn[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},Bn=(e,t,a)=>{const{naturalWidth:r,naturalHeight:n}=e,i="number"===typeof t?t:null===t||void 0===t?void 0:t(e),o="number"===typeof a?a:null===a||void 0===a?void 0:a(e);let l=r,s=n;return"number"!==typeof o&&"number"===typeof i?(l=i,s=l*n/r):"number"===typeof o&&"number"!==typeof i?(s=o,l=s*r/n):"number"===typeof o&&"number"===typeof i&&(l=i,s=o),{actualDH:s,actualDW:l}},$n=async(e,t,a,r,n,i,o,l,s,c,d)=>{const{cache:u=!0,internalImage:m=!0,overwrite:p=!1,crossorigin:b}=null!==d&&void 0!==d?d:{};return new Promise(e&&""!==t?d=>{var h,g;if(!0===(null===(h=Hn[t])||void 0===h?void 0:h.ready)){const u=Hn[t].image,m="number"===typeof a?a:a(u),p="number"===typeof r?r:r(u),b="number"===typeof o?o:null===o||void 0===o?void 0:o(u),h="number"===typeof l?l:null===l||void 0===l?void 0:l(u),g="number"===typeof s?s:null===s||void 0===s?void 0:s(u),f="number"===typeof c?c:null===c||void 0===c?void 0:c(u),{actualDH:v,actualDW:y}=Bn(u,n,i);return"number"===typeof b&&"number"===typeof h&&"number"===typeof g&&"number"===typeof f?e.drawImage(u,b,h,g,f,m,p,y,v):e.drawImage(u,m,p,y,v),void setTimeout(()=>d(!0),0)}if(null!==(g=Hn[t])&&void 0!==g&&g.error&&!1===p)return void setTimeout(()=>d(!0),0);const f=!p&&(Hn[t]&&(Hn[t].cache||Hn[t].ready)),v=f?Hn[t].image:new Image;b&&(v.crossOrigin=b),f||(v.src=m?"/ygocarder"+t:t),v.addEventListener("load",()=>{const u="number"===typeof a?a:a(v),m="number"===typeof r?r:r(v),p="number"===typeof o?o:null===o||void 0===o?void 0:o(v),b="number"===typeof l?l:null===l||void 0===l?void 0:l(v),h="number"===typeof s?s:null===s||void 0===s?void 0:s(v),g="number"===typeof c?c:null===c||void 0===c?void 0:c(v),{actualDH:f,actualDW:y}=Bn(v,n,i);"number"===typeof p&&"number"===typeof b&&"number"===typeof h&&"number"===typeof g?e.drawImage(v,p,b,h,g,u,m,y,f):e.drawImage(v,u,m,y,f),Hn[t]&&(Hn[t].ready=!0,Hn[t].error=!1),d(!0)},{once:!0}),v.addEventListener("error",()=>{Hn[t]&&(Hn[t].error=!0),d(!1)},{once:!0}),u&&!f&&(Hn[t]={image:v,ready:!1,error:!1,cache:!0})}:e=>e(!1))},Yn=async(e,t,a,r,n,i,o,l,s,c)=>await $n(e,"/asset/image/"+t,a,r,n,i,o,l,s,c),Kn=async function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const[r,n,i,o,l,s,c,d,u,m,p]=[...t],b=await $n(r,n,i,o,l,s,c,d,u,m,p);if(!1===b&&"anonymous"===(null===p||void 0===p?void 0:p.crossorigin)){const e={...p,overwrite:!0};return delete e.crossorigin,await $n(r,n,i,o,l,s,c,d,u,m,e)}return b},Un=async(e,t,a,r,n,i,o,l)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=i;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await Yn(d,t,0,0,n,i),null!==l&&void 0!==l&&l.color&&(d.fillStyle=l.color,d.fillRect(0,0,n,i),d.globalCompositeOperation="destination-in"),await Yn(d,t,0,0,n,i),d.globalCompositeOperation="source-over";const u=Pn({ctx:s,...l,globalScale:o});s.drawImage(c,a,r),u()},Gn=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:i=!1,debug:o,fontStyle:l,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(Mt.test(n))return{width:0,boundWidth:0};const u="tcg"===l?na:ta,m="tcg"===l?aa:Zt,p="tcg"===l?ra:ea,b=r.measureText(n),{width:h,actualBoundingBoxLeft:g,actualBoundingBoxRight:f}=b,v=g+f;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=i?p[n]:m[n])&&void 0!==t?t:0;if("tcg"===l){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[n])&&void 0!==w?w:0)*h),metric:b,offsetRatio:O}}let k=(null!==(a=u[n])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;Xt.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):qt.test(n)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):Ht.test(n)?j="furigana"===c?v:Math.max(v,.7*h):Yt.test(n)?j=h:_t.test(n)?j=2*v:Jt.test(n)?j=1.25*v*(i?.5:1):Ut.test(n)?j="furigana"===c?v:Math.max(v,.75*h):Gt.test(n)?j=Math.max(v,.69*h)*("creator"===c?.975:1):Vt.test(n)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const C=1*h*1;return o&&console.info(`getLetterWidth ${o}`,n,b,1,1,"|",C),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:b,offsetRatio:O}},Xn=e=>{var t,a;let{ctx:r,baseline:n,edge:i,letter:o,xRatio:l,deviation:s,letterMetric:c,textDrawer:d}=e;const{boundWidth:u,metric:m=r.measureText(o),offsetRatio:p=0}=null!==c&&void 0!==c?c:{},{letterMap:b={},threshold:h=10}=null!==s&&void 0!==s?s:{},{baseLetter:g}=null!==(t=b[o])&&void 0!==t?t:{},{height:f,ascentCompensate:v,descentCompensate:y}=null!==(a=Ir.get(g))&&void 0!==a?a:{},x=m.width*l,j=u?u*l:x,O=null!==d&&void 0!==d?d:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},w=(x-j)/2,k=j*p;let S=1,C="number"===typeof y?y:0,F="number"===typeof v?v:0;if(("number"===typeof y||"number"===typeof v)&&"number"===typeof f&&f>0&&l>=h){const e=2;C="number"===typeof y&&Math.abs(y)<=e?y:0,F="number"===typeof v&&Math.abs(v)<=e?v:0,S=(f+C+F)/f}r.scale(1,S),O({ctx:r,letter:o,scaledEdge:i/l-w-k,scaledBaseline:(n+C)/S}),r.scale(1,1/S)},qn=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${la}])|(${pt}[\\w\\W]+?${bt})|(.+?)`,"u"):new RegExp(`([${la}])|${pt}([\\w\\W]+?)${bt}|(.+?)`,"u");return e.split(t).filter(e=>null!=e&&""!==e)},Vn=(e,t,a,r,n)=>{const i=Wo(X,n),{fontSize:o,ordinalFontRatio:l=i.ordinalFontRatio,headTextFontRatio:s=i.headTextFontRatio}=a,{arabicFontRatio:c=1,font:d,furiganaFont:u,numberFont:m=d,numberFontRatio:p=1,ordinalFont:b,symbolFont:h,symbolFontRatio:g,vietnameseFont:f=d,vietnameseFontRatio:v=1}=t;let y=r.getFontInfo();let x=r.getFontInfo();let j=r.getFontInfo();let O=r.getFontInfo();let w=r.getFontInfo();let k=r.getFontInfo();let S=r.getFontInfo();return{applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];k=r.getFontInfo(),e.font=r.setFamily(u).setWeight(t?"bold":"").setSize(o*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(k.family).setWeight(k.weight).setSize(k.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;S=r.getFontInfo(),e.font=r.setSize(o*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(S.size).getFont()},applyNumberFont:()=>{y=r.getFontInfo(),e.font=r.setFamily(m).setSize(o*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(y.family).setSize(y.size).getFont()},applyOrdinalFont:()=>{w=r.getFontInfo(),e.font=r.setFamily(b).setSize(o*l).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(w.family).setSize(w.size).getFont()},applySymbolFont:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;O=r.getFontInfo();const a=o*t;return e.font=r.setFamily(h).setSize(a).getFont(),{fontSize:a}},stopApplySymbolFont:()=>{e.font=r.setFamily(O.family).setSize(O.size).getFont()},applyVietnameseFont:()=>{x=r.getFontInfo(),e.font=r.setFamily(f).setSize(o*v).getFont()},stopApplyVietnameseFont:()=>{e.font=r.setFamily(x.family).setSize(x.size).getFont()},applyArabicFont:()=>{j=r.getFontInfo(),e.font=r.setSize(o*c).getFont()},stopApplyArabicFont:()=>{e.font=r.setSize(j.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(1/t,1/a)}}},_n=(e,t,a,r,n)=>{const i=(r-n)/2;e.beginPath(),e.arc(t+i,a-i,i,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Jn=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:i,headTextSpacing:o,gapPadding:l,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,p=n/a*d;let b=o,h=0;p<=.95?b=1*o:p<=1.175?b=o>=0?0:3*o:p<=1.56?b=o>=0?-1*o/4:3*o:(h=.66,b=o>=0?-1*o/4:2*o),(c||u>0&&u<1)&&(b=o);const g=n*(u&&!c?u:!h||c?1:h)+b*(r.length-1),f=m?0:(a-n)/r.length,v=a,y=1===t.length||2*l+g>a?"center":"space-around",x="center"===y?b:f,j="center"===y?2*l+g:v,O=c?Math.min(j,a):j,w="center"===y?(g-a)/2:0,k=Math.max(i,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,k),{gapPadding:l,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},Qn=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Zn=e=>{const[t,a]=e.replace(jt,"").replace(Ot,"").split(";"),r=parseFloat(a);return{content:t,width:isNaN(r)?0:r}},ei=e=>Ft.test(e)?"rtl":"ltr",ti=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=[],r=e=>{const{body:t,head:a,tail:r}=function(e){const t=e.length;if(0===t)return{head:"",body:"",tail:""};const a={"(":")","[":"]","{":"}","\u2018":"\u2019","\u201c":"\u201d"},r=new Set(Object.values(a)),n=new Set(['"',"'"]),i=new Set,o=[];for(let d=0;d<t;d++){const t=e[d];if(a[t])o.push({char:t,index:d});else if(r.has(t)){const e=o[o.length-1];e&&a[e.char]===t&&(i.add(e.index),i.add(d),o.pop())}else if(n.has(t)){const e=o[o.length-1];e&&e.char===t?(i.add(e.index),i.add(d),o.pop()):o.push({char:t,index:d})}}const l=t=>{const o=e[t],l=/\s/.test(o),s=(void 0!==a[o]||r.has(o)||n.has(o))&&!i.has(t);return l||s};let s=0;for(;s<t&&l(s);)s++;let c=t;for(;c>s&&l(c-1);)c--;return{head:e.slice(0,s),body:e.slice(s,c),tail:e.slice(c)}}(e);return[r.split("").reverse().join(""),t,a.split("").reverse().join("")].join("")};let n=!1,i="";for(let o=0;o<e.length;o++)/\s+/.test(e[o])?n?i+=e[o]:a.push(e[o]):Ft.test(e[o])||/^[0-9]+$/.test(e[o])?(n&&(a.push(r(i)),i="",n=!1),a.push(e[o])):(n=!0,i+=e[o]);return n&&(a.push(r(i)),i="",n=!1),t&&console.info("bidirectionArrange",e,a),a};const ai=e=>{var t;let{ctx:a,token:r,nextToken:n,xRatio:i,previousTokenGap:o=0,letterSpacing:l,lineHeight:s=0,format:c,globalScale:d,textData:u,memory:m}=e;if(!a||!r)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const p=null!==(t=null===m||void 0===m?void 0:m.image)&&void 0!==t?t:{},b=Sn.getState().memory.imagePresetMap,h=Wo(X,d),g=null!==l&&void 0!==l?l:h.letterSpacing,{currentFont:f,fontData:v,fontLevel:y}=u,{metricMethod:x,headTextGapRatio:j=q.headTextGapRatio,headTextOverflow:O=q.headTextOverflow,fontStyle:w,letterOffsetMap:k={}}=v,S=v.fontList[y],{bulletWidth:C,capitalLetterRatio:F,fontSize:L,headTextSpacing:T=h.headTextSpacing,iconSymbolWidth:I=C,largeSymbolRatio:N=h.largeSymbolRatio,squareBracketRatio:R,wordLetterSpacing:E}=S,M=-.5*L,{applyArabicFont:z,stopApplyArabicFont:A,applyFuriganaFont:D,stopApplyFuriganaFont:P,applyLargerText:H,stopApplyLargerText:W,applyNumberFont:B,stopApplyNumberFont:$,applyOrdinalFont:Y,stopApplyOrdinalFont:K,applyScale:U,reverseScale:G,applySymbolFont:V,stopApplySymbolFont:_,applyVietnameseFont:J,stopApplyVietnameseFont:Q}=Vn(a,v,S,f,d);let Z=r.replaceAll(new RegExp(Et,"g"),""),ee=Z;const te=1+g/2;let ae="",re=0,ne=0,ie=!1;const oe=void 0===n;let le=null!==o&&void 0!==o?o:0,se=!1,ce=0;const de=new RegExp(st,"g");let ue;for(;null!=(ue=de.exec(Z));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;if(ue[1]===lt){var me;let t,a,r,n,o;le=0;let l,c="";for(;null!==(t=e.exec(ue[0]));){t.index===e.lastIndex&&e.lastIndex++;const i=t[1],s=t[2];switch(i){case"src":c=s;break;case"width":a=parseInt(s);break;case"height":r=parseInt(s);break;case"offsetX":n=parseInt(s);break;case"offsetY":o=parseInt(s);break;case"name":l=s}}if(l){const e=p[l];e?(c=e.src,a="number"===typeof a?a:e.width,r="number"===typeof r?r:e.height,n="number"===typeof n?n:e.offsetX,o="number"===typeof o?o:e.offsetY):p[l]={src:c,width:a,height:r,offsetX:n,offsetY:o}}const d=c?b[c]:void 0,u=l?p[l]:void 0;re+=(null!==(me="number"===typeof a?a:d?d.width:null!==u&&void 0!==u&&u.width?null===u||void 0===u?void 0:u.width:void 0)&&void 0!==me?me:.9*s)/i,ee=ee.replace(ue[0],`${jt}img;0${Ot}`)}}const pe=ee.replaceAll(new RegExp(ot,"g"),"").split(Tt).filter(e=>null!=e&&""!==e);for(let X=0;X<pe.length;X++){const e=0===X,t=pe[X];if("\u29be"===t){le=0;re+=I/i*te,e&&(ce=0,ae=t[0])}else if("\u25cf"===t){le=0;re+=C/i*te,e&&(ce=0,ae=t[0])}else if(/[\xa9]/.test(t)){le=0,H(N);const r=a.measureText(t).width/i;W(),re+=r*te,e&&(ce=0,ae=t[0])}else if(Bt.test(t)){le=0,Y();const r=a.measureText(t).width/i;K(),re+=r*te,ne+=1,e&&(ce=0,ae=t[0])}else if(kt.test(t)){le=0;const{width:a,content:r}=Zn(t);re+="img"===r?a/i:a,e&&(ce=0,ae=t[0])}else if(oa.test(t)){const[r,o,l=""]=t.replaceAll(/{|}/g,"").split(/(\|+)/),s="||"===o,{totalWidth:m}=ai({ctx:a,token:r,nextToken:n,xRatio:i,letterSpacing:g,previousTokenGap:0,format:c,textData:u,globalScale:d});D();const p=l.split("").map(e=>Gn({ctx:a,letter:e,fontStyle:w,metricMethod:"furigana",xRatio:1,globalScale:d}).boundWidth).reduce((e,t)=>e+t,0);P();const{halfGap:b,headTextWidth:h}=Jn({headText:l,headTextLetterWidth:p/i,footText:r,footTextWidth:m,headTextGap:M/i,headTextSpacing:T,gapPadding:j*L/i,fitFootText:s,sentenceXRatio:i,xRatio:"condense"===O&&r.length>1?Math.min(1,i+.1):0}),f=0===l.length?Math.max(M,m/sa):b,v=f,y=f,x=Math.max(h,m),k=Qn(le,v);le=y,re+=x-k,ne+=1,e&&(se=!0,ce=v,ae=r[0])}else if(Ct.test(t)){const r=E?1+E/2:te;a.letterSpacing=(r-1)*f.getFontInfo().sizeAsNumber+"px";let n=t,i=0;if(Ft.test(t))z(),i+=a.measureText(t).width,A();else for(;""!==n;){let e=n[0],t=n.slice(1),r=a.measureText(n).width-a.measureText(t).width;if(it.test(e))U(R),r=a.measureText(n).width-a.measureText(t).width,G(R);else if(nt.test(e))U(F),r=a.measureText(n).width-a.measureText(t).width,G(F);else if(Lt.test(e)&&"tcg"===w)J(),r=a.measureText(n).width-a.measureText(t).width,Q();else if(Kt.test(e))B(),r=a.measureText(n).width-a.measureText(t).width,$();else if(At.test(e)&&"tcg"===w){var be;V(null===(be=k[e])||void 0===be?void 0:be.ratio),r=a.measureText(n).width-a.measureText(t).width,_()}else r=a.measureText(n).width-a.measureText(t).width;i+=r,n=t}const o=Math.max(M,i/sa),l=o;re+=i-Qn(le,o),le=l,e&&(ce=o,ae=t[0]),a.letterSpacing="0px"}else if(At.test(t)&&"tcg"===w){var he;V(null===(he=k[t])||void 0===he?void 0:he.ratio);const r=a.measureText(t).width*te;_();const n=Math.max(M,r/sa),i=n;re+=r-Qn(le,n),le=i,e&&(ce=n,ae=t[0])}else{const{boundWidth:r}=Gn({ctx:a,letter:t,isLastOfLine:oe,fontStyle:w,metricMethod:x,xRatio:i,globalScale:d}),n=r*te,o=Math.max(M,n/sa),l=o;re+=n-Qn(le,o),le=l,("ocg"===c||"tcg"===c&&/\s+/.test(t))&&!1===Vt.test(t)&&(ne+=1,X===pe.length-1&&(ie=!0)),e&&(ce=o,ae=t[0]),Qt.test(t)&&(ce=0,le=0)}}return{totalWidth:re,spaceCount:ne,spaceAtEnd:ie,leftMostLetter:ae,rightGap:le,leftGap:ce,offsetable:se}},ri=e=>{var t,a,r,n;let{ctx:i,line:o,width:l,lineHeight:s,xRatio:c,format:d,isLast:u,textData:m,globalScale:p,justifyRatio:b,region:h,memory:g}=e;const f=qn(o);let v=0,y=0,x=0,j=m,O=!1;for(let F=0,L=c;F<f.length;F++){const e=f[F],t=f[F+1];if(e===yt){L=1;continue}if(e===xt){L=c;continue}if("<i>"===e){var w,k;const e=!!Z[null!==(w=null===(k=m.fontData)||void 0===k?void 0:k.variant)&&void 0!==w?w:""]?Z[m.fontData.variant]:m.fontData;j=No(m,e),i.font=j.currentFont.setStyle("italic").getFont();continue}if(e===ct){j=m,i.font=j.currentFont.setStyle("").getFont();continue}if("<b>"===e){i.font=j.currentFont.setWeight("bold").getFont();continue}if(e===dt){i.font=j.currentFont.setWeight("").getFont();continue}if(e===ut){O=!0;continue}if(e===mt){O=!1;continue}const{spaceCount:a,totalWidth:r,spaceAtEnd:n,leftGap:o,rightGap:l,leftMostLetter:u}=ai({ctx:i,token:e,nextToken:t,xRatio:L,previousTokenGap:x/L,textData:j,format:d,globalScale:p,lineHeight:s,memory:g});x=l*L,v+=r*L+((0===F&&o>0?-1*Math.min(20*p,o*L):0)+(0===F&&$t.test(u)?4*p*L:0)),y+=(O?0:a)-(n&&void 0===t?1:0)}const S=y>0?(l-v)/y:0,C=null!==(t=null!==(a=null===(r=te[d])||void 0===r?void 0:r[h])&&void 0!==a?a:null===(n=te[d])||void 0===n?void 0:n.default)&&void 0!==t?t:1;return{tokenList:f,spaceWidth:u&&S>C*p*(b/100)?0:S}},ni=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:i,lineHeight:o,format:l,textData:s,globalScale:c,memory:d}=e;const{fontData:u,fontLevel:m}=s,{letterSpacing:p}=u.fontList[m],b=[],h=r.reduce((e,r)=>{const n=(a<=100?100:a)/1e3,u=i/n,m=qn(r,!0);let h=1,g=[],f=0,v=0,y=0;for(let i=0,j=n;i<m.length;i++){const e=m[i],r=m[i+1];e===yt?(y+=1,j=1):e===xt&&(y-=1,j=n);let{leftMostLetter:x,totalWidth:O,rightGap:w,leftGap:k}=ai({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:v,format:l,letterSpacing:p,textData:s,globalScale:c,lineHeight:o,memory:d});let S=O/(y>0?n:1)+(0===i?(k>0?-1*Math.min(20*c/j,k):0)+($t.test(x)?4*c:0):0);if(f+S>u){let n=g.join("").trim();y>0&&(n+=xt),y<0&&(n=yt+n),y=0,b.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:f});let{totalWidth:i,rightGap:u,leftGap:m}=ai({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:0,format:l,textData:s,globalScale:c,lineHeight:o,memory:d});f=i+((m>0?-1*Math.min(20*c/j,m):0)+($t.test(x)?4*c:0)),v=u,g=[e],h+=1}else f+=S,v=w,g.push(e)}let x=g.join("").trim();return y>0&&(x+=xt),y<0&&(x=yt+x),y=0,b.push({line:x,effectiveMedian:a,isLast:!0,actualLineWidth:f}),e+h},0)+(null!==n&&void 0!==n?n:0);return{currentLineList:b,currentLineCount:h}},ii=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:p,globalScale:b,xRatio:h,fontStyle:g,textWorker:f,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=f,k="condense"===y&&l.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:C,trueHeadTextWidth:F,halfGap:L,alignment:T,headTextXRatio:I}=Jn({headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*p,fitFootText:v,sentenceXRatio:h,xRatio:k}),N=F>s*h;if(0===i.length)return{trueHeadTextWidth:F,halfGap:L};const R=v?Math.min(1,s*h/F):1,E=v?R:k&&"center"===T?k:I;let M=r;O(),(v||E)&&(w(E,1),M=r/E),"center"===T?(M+=S,N?E>R&&(M+=(s*h/E-F)/2/E):M+=(s*h-F)/2):M+=C/2;for(const z of i){x();const{width:e,boundWidth:r}=Gn({ctx:t,letter:z,fontStyle:g,metricMethod:"furigana",xRatio:1,globalScale:b}),i=(e-r)/2;j(),x(m),t.fillText(z,M-i,n-a*u),j(),M+=r+C}return(v||E)&&O(),w(h,1),{trueHeadTextWidth:F,halfGap:L}},oi=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:i="rubyForm",direction:o="ltr"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let s="";const c="ocg"===t?De:Pe;for(const g of l){var d;s+=null!==(d=c[g])&&void 0!==d?d:g}const u=s,m=(r?u.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${ft}$1${vt}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${ht}$1${gt}`):u).replace(/(^|[-\u2014\s(["])'/g,"rtl"===o?"$1\u2019":"$1\u2018").replace(/'/g,"rtl"===o?"\u2018":"\u2019").replace(Rt,"rtl"===o?"$1\u201d":"$1\u201c").replace(/"/g,"rtl"===o?"\u201c":"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,e=>{const t=He[e];return null!==t&&void 0!==t?t:e}).replaceAll(new RegExp("{{([^{}]+?)}}","g"),e=>e.replaceAll("{{",yt).replaceAll("}}",xt)).replaceAll(new RegExp("{[^{}]+?}","g"),e=>`${pt}${e}${bt}`),p=("tcg"===t||!1===n?m:m.replaceAll(new RegExp(Dt,"g"),e=>{var t;const a=null!==(t=Te[e][i])&&void 0!==t?t:Te[e].rubyForm;return`${pt}${a}${bt}`})).replaceAll(new RegExp(st,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Pe[r])&&void 0!==a?a:r}return`${pt}${t}${bt}`}).replaceAll(new RegExp(ot,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Pe[r])&&void 0!==a?a:r}return`${pt}${t}${bt}`}).replaceAll(new RegExp(St,"gu"),e=>`${pt}${e}${bt}`).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),e=>`${pt}${e}${bt}`).replaceAll(new RegExp(Wt,"g"),e=>`${pt}${e}${bt}`).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),e=>`${pt}${e}${bt}`).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),e=>`${pt}${e}${bt}`);let b=[],h=0;for(const g of p)g===pt?(0===h&&b.push(g),h+=1):g===bt?(h-=1,0===h&&b.push(g)):b.push(g);return b.join("").replaceAll(`${vt}${bt}`,`${bt}${vt}`).replaceAll(`${gt}${bt}`,`${bt}${gt}`).replaceAll(`${pt}${ft}`,`${ft}${pt}`).replaceAll(`${pt}${ht}`,`${ht}${pt}`).replaceAll(`${yt}${bt}`,`${bt}${yt}`).replaceAll(`${pt}${xt}`,`${xt}${pt}`).replaceAll(`${ht}${gt}`,"").replaceAll(`${ft}${vt}`,"").replaceAll(`${pt}${bt}`,"")},li=async e=>{var t;let{ctx:a,tokenList:r,trueEdge:n,trueBaseline:i,spaceWidth:o=0,lineHeight:l=0,xRatio:s,yRatio:c=1,textData:d,format:u,drawImage:m=!0,textDrawer:p,debug:b=!1,option:h,globalScale:g,memory:f,width:v=0}=e;const y=null!==f&&void 0!==f?f:{image:{}},x=null!==(t=null===y||void 0===y?void 0:y.image)&&void 0!==t?t:{},j=Sn.getState().memory.imagePresetMap,{drawHeadText:O=!0,direction:w="ltr"}=null!==h&&void 0!==h?h:{},{fontLevel:k}=d,S=d.fontData,C=Wo(X,g);let F=d,L=F.currentFont,T=F.fontData,I=T.fontList[k],N=Vn(a,T,I,L,g),R=0,E=[],M=0,z=0!==v&&"rtl"===w?n+v:n,A=!1;const D="rtl"===w?ti(r,b):r;a.direction=w;for(let X=s,V=0;V<D.length;V++){const{allRightSymbolOffset:e=C.allRightSymbolOffset,bulletOffset:t=C.bulletOffset,bulletWidth:r,capitalLetterRatio:n=C.capitalLetterRatio,fontLetterOffsetMap:h={},fontSize:f,headTextSpacing:v=C.headTextSpacing,iconSymbolWidth:_=r,largeSymbolRatio:J=C.largeSymbolRatio,letterSpacing:Q=C.letterSpacing,ordinalFontOffsetY:ee=C.ordinalFontOffsetY,squareBracketRatio:te=C.squareBracketRatio,wordLetterSpacing:ae}=I,re=1+Q/2,ne=i/c,{headTextFillStyle:ie,headTextBold:oe=q.headTextBold,headTextHeightRatio:le=q.headTextHeightRatio,headTextOverflow:se=q.headTextOverflow,headTextGapRatio:ce=q.headTextGapRatio,metricMethod:de,fontStyle:ue,letterDeviationMap:me={},letterOffsetMap:pe={}}=T,{stopApplyArabicFont:be,applyArabicFont:he,stopApplyFuriganaFont:ge,applyFuriganaFont:fe,stopApplyLargerText:ve,applyLargerText:ye,stopApplyNumberFont:xe,applyNumberFont:je,stopApplyOrdinalFont:Oe,applyOrdinalFont:we,applyScale:ke,reverseScale:Se,applySymbolFont:Ce,stopApplySymbolFont:Fe,applyVietnameseFont:Le,stopApplyVietnameseFont:Te,applyAsymmetricScale:Ie,resetScale:Ne}=N,Re=D[V];if(Re===yt){X=1,a.setTransform(1,0,0,1,0,0);continue}if(Re===xt){X=s,a.scale(X,1);continue}if("<i>"===Re){var P;const e=!!Z[null!==(P=null===S||void 0===S?void 0:S.variant)&&void 0!==P?P:""]?Z[S.variant]:S;F=No(d,e),L=F.currentFont,T=F.fontData,I=T.fontList[k],N=Vn(a,T,I,L,g),a.font=L.setStyle("italic").getFont();continue}if(Re===ct){F=d,L=F.currentFont,T=F.fontData,I=T.fontList[k],N=Vn(a,T,I,L,g),a.font=L.setStyle("").getFont();continue}if("<b>"===Re){a.font=F.currentFont.setWeight("bold").getFont();continue}if(Re===dt){a.font=F.currentFont.setWeight("").getFont();continue}if(Re===ut){A=!0;continue}if(Re===mt){A=!1;continue}const Ee=-.5*X,Me=f*Ee,ze=D[V+1],Ae=D[V+2],De={ctx:a,xRatio:X,letterSpacing:Q,format:u,textData:d,globalScale:g,lineHeight:l},Pe={ctx:a,baseline:ne,xRatio:X,textDrawer:p};let He=Re;const We=[],Be=new RegExp(st,"g");let $e,Ye=0;for(;null!=($e=Be.exec(Re));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;let t=0;if($e[1]===lt){let a;M=0;let r,n,i,o,s,c="";for(;null!==(a=e.exec($e[0]));){a.index===e.lastIndex&&e.lastIndex++;const t=a[1],l=a[2];switch(t){case"src":c=l;break;case"width":r=parseInt(l);break;case"height":n=parseInt(l);break;case"offsetX":i=parseInt(l);break;case"offsetY":o=parseInt(l);break;case"name":s=l}}if(s){const e=x[s];e?(c=e.src,r="number"===typeof r?r:e.width,n="number"===typeof n?n:e.height,i="number"===typeof i?i:e.offsetX,o="number"===typeof o?o:e.offsetY):x[s]={src:c,width:r,height:n,offsetX:i,offsetY:o}}if(c&&m){let e="number"===typeof r?r:"number"===typeof n?void 0:.9*l,a=c,s=!1;const d=c?j[c]:void 0;if(d){const{height:e,width:t,offsetX:l,offsetY:s,src:c}=d;a=c,r="number"===typeof r?r:t,n="number"===typeof n?n:e,o="number"===typeof o?o:s,i="number"===typeof i?i:l}else if(!c.startsWith("https")){var H;s=!0,a="/asset/image/"+(null!==(H=rt[c])&&void 0!==H?H:`${c}.png`)}t=(null!==e&&void 0!==e?e:0)/X,We[Ye]={type:"img",isInternalSource:s,src:a,offsetX:i,offsetY:o,width:e,height:n}}}He=He.replace($e[0],`${jt}${Ye};${t}${Ot}`),Ye+=1}const Ke=Re.split(Tt).filter(e=>null!=e&&""!==e),Ue=He.split(Tt).filter(e=>null!=e&&""!==e),{leftMostLetter:Ge,leftGap:Xe,rightGap:qe,totalWidth:Ve,spaceCount:_e}=ai({token:He,nextToken:ze,previousTokenGap:R/X,memory:y,...De}),Je=A?0:_e,Qe=0===V?(Xe>0?-1*Math.min(20*g,Xe*X):0)+($t.test(Ge)?4*g:0):0;z-="rtl"===w?Ve*X+Je*o+Qe:0;let Ze=z+Qe,et=R;for(let s=0;s<Ue.length;s++){var W,B;const m=Ue[s],b=null!==(W=Ue[s+1])&&void 0!==W?W:ze,x=null!==(B=Ue[V+2])&&void 0!==B?B:Ae;if(He===yt||He===xt);else if("\u29be"===m)E.push({edge:Ze,size:_,baseline:ne}),Ze+=_*re,et=0,M=0;else if("\u25cf"===m)Ne(),_n(a,Ze,i+t-1*g,r,ia(u)*g),Ze+=r*re,Ie(X,c),et=0,M=0;else if(/[\xa9]/.test(m))Ne(),ye(J),Xn({...Pe,letter:m,edge:Ze*X,baseline:i+("tcg"===u?e:2*e)}),Ze+=a.measureText(m).width*re,ve(),Ie(X,c),et=0,M=0;else if(Bt.test(m))Ne(),we(),Xn({...Pe,letter:m,edge:Ze*X,baseline:i+ee}),Ze+=a.measureText(m).width*re,Oe(),Ie(X,c),Ze+=o,et=0,M=0;else if(kt.test(m)){const{content:e}=Zn(m),t=parseInt(e);if(!isNaN(t)&&We[t]){const{type:e,src:r,offsetX:n,offsetY:o,width:s,height:d,isInternalSource:u}=We[t],m=.75;Ne(),await Kn(a,r,Ze+(null!==n&&void 0!==n?n:0),i+(null!==o&&void 0!==o?o:0)-l*m,s,d,void 0,void 0,void 0,void 0,{cache:u,internalImage:u,crossorigin:"anonymous"}),Ze+="img"===e&&s?s:0,Ie(X,c),et=0,M=0}}else if(oa.test(m)){const[e,t,r=""]=Ke[s].replaceAll(/{|}/g,"").split(/(\|+)/),n="||"===t,{totalWidth:i}=ai({token:e,nextToken:b,previousTokenGap:0,memory:y,...De});fe();const m=r.split("").map(e=>Gn({ctx:a,letter:e,fontStyle:ue,metricMethod:"furigana",xRatio:1,globalScale:g}).boundWidth).reduce((e,t)=>e+t,0);ge();const{headTextWidth:h,halfGap:j}=Jn({headText:r,headTextLetterWidth:m,footText:e,footTextWidth:i*X,headTextGap:Me,headTextSpacing:v*X,gapPadding:f*ce,fitFootText:n,sentenceXRatio:X,xRatio:"condense"===se&&e.length>1?Math.min(1,X+.1):0}),w=0===r.length?Math.max(Me,i*Ee):j,k=w,S=w,C=Qn(et,S),F=S>0?S-C:0,{offsetable:L,leftGap:T}=ai({token:b,nextToken:x,previousTokenGap:k/X,memory:y,...De}),I=T*X,R=Qn(k,I),E=F+(k>0?k-R:0);let z=0,A=0;E>0&&I>=-2*g&&L?(z=(E+2*Math.max(I,0))/3,A=Math.max(I,0)-z):z=F;const D=Ze+(w<0?-C:Qe?-Qe:z)+M;M=A;const P=e.includes("<")?qn(oi(e,u,{multiline:!1,furiganaHelper:!1})):qn(e);await li({ctx:a,format:u,textData:d,tokenList:P,trueBaseline:ne,lineHeight:l,trueEdge:D,xRatio:X,yRatio:c,spaceWidth:0,textDrawer:p,globalScale:g,debug:!1,memory:y});const H=a.fillStyle,W=a.strokeStyle,B=a.shadowColor,$=a.shadowOffsetX,Y=a.shadowOffsetY,K=a.shadowBlur;ie&&(a.fillStyle=ie,a.strokeStyle="",a.shadowColor="",a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowBlur=0);O&&ii({ctx:a,fontSize:f,edge:Ze-C,baseline:ne,headText:r,headTextLetterWidth:m,footText:e,footTextWidth:i,headTextGap:Me,headTextSpacing:v,headTextHeightRatio:le,headTextBold:oe,headTextGapRatio:ce,xRatio:X,fontStyle:ue,textWorker:N,fitFootText:n,headTextOverflow:se,globalScale:g}),a.fillStyle=H,a.strokeStyle=W,a.shadowColor=B,a.shadowOffsetX=$,a.shadowOffsetY=Y,a.shadowBlur=K,Ze+=Math.max(i*X,h)-C+o,et=k}else if(Ct.test(m)){const e=ae?1+ae/2:re;a.letterSpacing=(e-1)*L.getFontInfo().sizeAsNumber+"px";const t=a.measureText(m).width*X,r=Math.max(Me,t*Ee),i=r;Ze-=Qn(et,r);let o=Ze;if(Ft.test(m))he(),p?p({ctx:a,letter:m,scaledEdge:o/X,scaledBaseline:Pe.baseline}):a.fillText(m,o/X,Pe.baseline),be();else{let e=m;for(;""!==e;){var $;let t=e[0],r=e.slice(1),i=0;const{edge:l}=null!==($=h[t])&&void 0!==$?$:{};let s=o*(null!==l&&void 0!==l?l:1);const c={...Pe,deviation:me.default,letter:t,edge:s};if(it.test(t))ke(te),i=a.measureText(e).width-a.measureText(r).width,Xn({...c,edge:s/te,baseline:ne/te}),Se(te);else if(nt.test(t)){ke(n),i=a.measureText(e).width-a.measureText(r).width;const o=i>a.measureText(t).width*n?Math.round(i*(1-n))/2:0;Xn({...c,edge:s/n+o,baseline:ne/n}),Se(n)}else if(Lt.test(t)&&"tcg"===ue)Le(),i=a.measureText(e).width-a.measureText(r).width,Xn(c),Te();else if(Kt.test(t))je(),i=a.measureText(e).width-a.measureText(r).width,Xn(c),xe();else if(At.test(t)&&"tcg"===ue){var Y,K,U;const{fontSize:n}=Ce(null===(Y=pe[t])||void 0===Y?void 0:Y.ratio);i=a.measureText(e).width-a.measureText(r).width,Xn({...c,baseline:c.baseline+n*(null!==(K=null===(U=pe[m])||void 0===U?void 0:U.baseline)&&void 0!==K?K:0)}),Fe()}else i=a.measureText(e).width-a.measureText(r).width,Xn(c);o+=i*X,e=r}}Ze=o,et=i,M=0,a.letterSpacing="0px"}else if(At.test(m)&&"tcg"===ue){var G;const{yRatio:e=1,ratio:t,baseline:r=0,edge:n=0}=null!==(G=pe[m])&&void 0!==G?G:{},i=m,{fontSize:o}=Ce(t);a.scale(1,e);const l=a.measureText(i).width*re*X,s=Math.max(Me,l*Ee),c=s;Ze-=Qn(et,s),Xn({...Pe,baseline:(Pe.baseline+o*r)/e,letter:i,edge:Ze+o*n}),Ze+=l,a.scale(1,1/e),Fe(),et=c,M=0}else{const e=m,t=Gn({ctx:a,letter:e,fontStyle:ue,metricMethod:de,isLastOfLine:void 0===b,xRatio:X,globalScale:g}),r=t.boundWidth*re*X,n=Math.max(Me,r*Ee),i=n;Ze-=Qn(et,n),Xn({...Pe,letter:e,edge:Ze,deviation:null===me||void 0===me?void 0:me.default,letterMetric:t}),Ze+=r,("ocg"===u||"tcg"===u&&/\s+/.test(e))&&!0!==Vt.test(e)&&(Ze+=o),Qt.test(e)||(et=i),M=0}}R=qe*X,b&&Nn({ctx:a,baseline:ne,edge:z,width:Ve*X,xRatio:X}),z+="rtl"===w?0:Ve*X+Je*o+Qe}return{tokenEdge:z,iconPositionList:E}},si=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:i}=e;const o=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-"),l=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-");let s=ee[l];return a&&"tcg"===t&&Z[l]&&(s=Z[l]),{fontDataKey:l,fontData:s,sizeList:Oe[o]}},ci=async e=>{let{ctx:t,content:a,isNormal:r=!1,fontDataKey:n="tcg",fontData:i=ee[n],textStyle:o,region:l,sizeList:s=Oe["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:m}=e;const{defaultSizeLevel:p,forceRelaxCondenseLimit:b,globalScale:h=1,minLine:g,justifyRatio:f}=null!==m&&void 0!==m?m:{},v="number"===typeof g?g:0,y="number"===typeof f?f:1;let x=null!==p&&void 0!==p?p:0;if(!t||!a)return x;const j=ei(a),O=oi(a.trim(),d,{furiganaHelper:u,direction:j}),{lineList:w,fullLineListOption:k,effectFlavorCondition:S}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=[],n=[],i=new RegExp([`^(${ht}([^${gt}]*)${gt}\\s*)`,`^(${ft}([^${vt}]*)${vt}\\s*)`].join("|"));let o=e,l="";const s=null===(t=new RegExp(zt,"m").exec(e))||void 0===t?void 0:t[1];s&&a?(l=s.trim(),o=o.replace(s,"")):l="";let c=0;for(;o.length>0&&c<=100;){const e=i.exec(o),t=null===e||void 0===e?void 0:e[1],a=null===e||void 0===e?void 0:e[2],l=null===e||void 0===e?void 0:e[3],s=null===e||void 0===e?void 0:e[4];if(a&&t)o=o.replace(t,""),r.push({line:a,alignment:"left"}),n.push(It);else if(s&&l)o=o.replace(l,""),r.push({line:s,alignment:"justify"}),n.push(It);else{const e=/(.*)(\n|$)/.exec(o),t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];"string"===typeof t&&"string"===typeof a&&(n.push(...a.replaceAll(ht,"[").replaceAll(gt,"]").replaceAll(ft,"[[").replaceAll(vt,"]]").split("\n")),o=o.replace(t,""))}c++}return l&&n.push(Nt),{lineList:n,fullLineListOption:[...r],effectFlavorCondition:l}}(O,r);let C=0;const F=Bo(i,h),{fontList:L}=F,T=L[L.length-1].lineCount;for(;x<=L.length&&x>=0;){var I,N,R;const e=x===L.length||w.length>T,a=Math.min(L.length-1,x),i=e?{1:600,2:600,3:600}:"tcg"===d?b&&a<b?je.relaxed:null!==(I=je[c])&&void 0!==I?I:je.strict:{1:800,2:800,3:800},{trueEdge:u,trueWidth:m,trueBaseline:p,trueHeightCap:g}=Po(null!==(N=s[a])&&void 0!==N?N:s[s.length-1],h),f=r&&"tcg"===d?m-2*h:m,O=e&&"number"===typeof g,E=O?Io(F,{heightCap:g,lineCount:C}):F,M=O?x:a,{font:z,fontList:A}=E,D=O?A[M]:L[a],{fontSize:P,lineHeight:H,lineCount:W}=D,B={image:{}},$=Lo();t.font=$.setWeight("").setSize(P).setFamily(z).getFont(),t.textAlign="left";const Y={fontData:E,fontLevel:M,currentFont:$};let K=[];const U=w.length>W&&"number"===typeof g?1:Fo(e=>{const{currentLineList:a,currentLineCount:r}=ni({ctx:t,median:e,paragraphList:w,additionalLineCount:0,format:d,textData:Y,width:f,lineHeight:H,globalScale:h,memory:B});return K=a,!(r>W)},200);C=Math.max(w.length,Math.max(v,K.length));const G=Pn({ctx:t,...o,globalScale:h}),X=null!==(R=i[`${w.length}`])&&void 0!==R?R:i[3];if(U<X&&x<L.length||v>W)x+=1;else{if(!(O&&U<X)){Mn(t);let e=p+H;const r=K.map(e=>{let{line:r,effectiveMedian:i,isLast:o}=e,s=1,c=[],u=0,m=Y;if(r===It){var p;const{line:e="",alignment:a}=null!==(p=k.shift())&&void 0!==p?p:{},r="justify"!==a;s=.001*Fo(a=>{const{currentLineCount:r}=ni({ctx:t,median:a,paragraphList:[e],format:d,textData:Y,width:f,lineHeight:H,globalScale:h,memory:B});return!(r>1)});const{tokenList:n,spaceWidth:i}=ri({ctx:t,line:e,xRatio:s,format:d,isLast:r,textData:Y,width:f,globalScale:h,justifyRatio:100,lineHeight:H,region:l,memory:B});c=n,u=i}else if(r===Nt){const e=Bo(ee[n],h),r=O?Io(e,{heightCap:g,lineCount:Math.max(v,K.length)}):e,{fontSize:i}=O?r.fontList[M]:e.fontList[a],o=Lo();t.font=o.setSize(i).setFamily(e.font).getFont();const l={fontData:r,fontLevel:M,currentFont:o};s=.001*Fo(e=>{const{currentLineCount:a}=ni({ctx:t,median:e,paragraphList:[S],format:d,textData:l,width:f,lineHeight:H,globalScale:h,memory:B});return!(a>1)});c=qn(S),u=0,m=l,t.font=o.setSize(E.fontList[M].fontSize).setFamily(E.font).getFont()}else{s=i/1e3;const e=r,{tokenList:a,spaceWidth:n}=ri({ctx:t,line:e,xRatio:s,format:d,isLast:o,textData:Y,width:f,globalScale:h,justifyRatio:y,lineHeight:H,region:l,memory:B});c=a,u=n}return t.setTransform(1,0,0,1,0,0),{xRatio:s,line:r,tokenList:c,spaceWidth:u,textData:m}});for(let a of r){const{xRatio:r,tokenList:n,line:i,spaceWidth:o,textData:l}=a;let s;const{currentFont:c,fontData:m}=l;t.font=c.setSize(P).setFamily(m.font).getFont(),i===It?(t.scale(r,1),s=li({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:H,textData:l,format:d,globalScale:h,memory:B,width:f,option:{direction:j}})):i===Nt?(t.scale(r,1),s=li({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,lineHeight:H,textData:l,format:d,globalScale:h,memory:B,width:f,option:{direction:j}})):(t.scale(r,1),s=li({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:H,textData:l,format:d,globalScale:h,memory:B,width:f,option:{direction:j}})),await s,t.setTransform(1,0,0,1,0,0),e+=H}break}C+=1}G()}return x},{width:di,finishTypeCardWidth:ui,stickerSize:mi}=c,{width:pi,height:bi,topToPendulumStructure:hi}=c,gi={topRight:(async()=>{const e=document.createElement("canvas");e.width=pi,e.height=bi;const t=e.getContext("2d");return t?(await Wn(t,"mask/mask-top-right.png"),t.getImageData(0,0,pi,bi).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=pi,e.height=bi;const t=e.getContext("2d");return t?(await Wn(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,pi,bi).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=pi,e.height=bi;const t=e.getContext("2d");return t?(await Wn(t,"mask/mask-right.png"),t.getImageData(0,0,pi,bi).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=pi,e.height=hi;const t=e.getContext("2d");return t?(await Wn(t,"mask/mask-name.png"),t.getImageData(0,0,pi,hi).data):null})()},fi=async(e,t,a,r)=>{const{ctx:n,canvas:i}=ja(a,r);if(!n)return i;if("string"===typeof e?await Wn(n,e,0,0):n.drawImage(e,0,0,a,r),!t)return i;const o=n.getImageData(0,0,a,r).data;for(let l=0;l<o.length;l+=4)o[l+3]=t[l+3];return n.putImageData(new ImageData(o,a,r),0,0),i},{width:vi,height:yi,topToPendulumStructure:xi,topToPendulumStructureFrame:ji,pendulumIconFrameHeight:Oi,pendulumIconFrameWidth:wi,pendulumFrameHeight:ki,pendulumFrameWidth:Si,attributeSize:Ci,attributeX:Fi,attributeY:Li,finishTypeCardWidth:Ti,stickerSize:Ii,pendulumStructureHeight:Ni}=c,Ri=e=>{var t,a,r,n,i,o;let{canvas:l,artworkCanvas:s,backgroundCanvas:c,overlayCanvas:d,globalScale:u,region:m,legacyTemplate:b,hasBackground:h,hasOverlay:g,overlayType:f,frame:v,leftFrame:y,pendulumFrame:j,rightFrame:O,pendulumRightFrame:w,dyeList:k,effectBackground:S,pendulumEffectBackground:C,backgroundType:L,cardIcon:T,attribute:E,attributeType:M,star:z,starList:A,foil:D,pendulumSize:P,opacity:H,isLink:W,isSpeedSkill:B,isXyz:$,isPendulum:Y,pendulumFrameTypeMap:U,otherFinish:G,controlString:X,loopFinish:q,loopArtFinish:V}=e;const _=l.getContext("2d"),{artBorder:J,nameBorder:Q,body:Z,name:ee,pendulum:te,text:ae,boundless:re}=H,{artX:ne,artY:ie,artFrameX:oe,artFrameY:le,artFrameWidth:se,artFinishX:ce,artFinishY:de,artWidth:ue,artRatio:pe}=p(Y,H,void 0,P),{frameType:he,effectBoxOffsetY:ge,pendulumBoxX:fe,pendulumBoxY:ve,pendulumBoxWidth:ye,pendulumBoxHeight:xe,pendulumBoxOffsetY:je,artlessFrameY:Oe}=me[P],we=Z>0||J,ke=860,Se=f.split("|"),Ce=g?null!==(t=null===(a=Se.find(e=>e.includes("border,")))||void 0===a||null===(r=a.split(","))||void 0===r?void 0:r[1])&&void 0!==t?t:"source-in":"none",Fe=g&&null!==(n=null===(i=Se.find(e=>e.includes("frame,")))||void 0===i||null===(o=i.split(","))||void 0===o?void 0:o[1])&&void 0!==n?n:"none",Le=g&&"none"!==Ce;X&&console.info("Control String",X);const Te="normal"!==D,Ie=$||B?v:"normal",Ne=b&&"synchro"===v?["normal","xyz","xyz","xyz","xyz"]:[Ie],Re=!re&&we,Ee=lr({frame:v,topLeftFrame:y,topRightFrame:O,bottomLeftFrame:j,bottomRightFrame:w,effectBackground:S,pendulumEffectBackground:C},Y),{topLeftFrame:Me,topRightFrame:ze,bottomLeftFrame:Ae,bottomRightFrame:De,effectBackground:Pe,pendulumEffectBackground:He}=Ee,We={drawFrame:async()=>{if(!_)return;const e=h&&c&&"frame"===L,{ctx:t,canvas:a}=ja();await Wn(t,`${b?"legacy-":""}frame/frame-${Me}.png`,0,0);const{canvas:r,ctx:n}=ka(await Sa({canvas:a,customFoilCanvas:d,method:Fe}),k[0]);if(!e&&(Me!==ze||""!==k[0]||""!==k[1])&&n){const e=await fi(`${b?"legacy-":""}frame/frame-${ze}.png`,await gi.topRight,vi,yi),{canvas:t}=ka(await Sa({canvas:e,customFoilCanvas:d,method:Fe}),k[1]);n.drawImage(t,0,0)}const{ctx:i,canvas:o}=ja();await Wn(i,`${b?"legacy-":""}frame-pendulum/frame-pendulum-${Ae}.png`,0,0);const{canvas:l,ctx:s}=ka(await Sa({canvas:o,customFoilCanvas:d,method:Fe}),k[2]);if(!e&&(Ae!==De||""!==k[2]||""!==k[3])&&s){s.clearRect(714,0,99,yi);const e=await fi(`${b?"legacy-":""}frame/frame-${De}.png`,await gi.bottomRight,vi,yi),{canvas:t}=ka(await Sa({canvas:e,customFoilCanvas:d,method:Fe}),k[3]);s.drawImage(t,0,0)}if(_.globalAlpha=Z/100,_.scale(u,u),Y&&(null===n||void 0===n||n.clearRect(oe,le,se,Ni),null===s||void 0===s||s.clearRect(oe,le,se,Ni)),e&&n&&s){const{width:e,height:t}=c;n.globalCompositeOperation="source-atop",n.drawImage(c,0,0,e,t,0,0,vi,yi),s.globalCompositeOperation="source-atop",s.drawImage(c,0,0,e,t,0,0,vi,yi)}_.drawImage(r,0,0),_.drawImage(l,0,0),_.resetTransform(),_.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;if(!s||!e)return;const{width:t,height:a}=s;a<=0||e.drawImage(s,0,0,t,a,u*ne,u*ie,u*ue,u*ue/(t/a))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!c||!t||!h)return;const{width:r,height:n}=c;if(n<=0)return;const{artX:i,artY:o,artWidth:l,artFrameWidth:s,artFrameX:d,artFrameY:m,ratio:b,artRatio:g}=p(Y,H,L,P);"frame"!==L?t.drawImage(c,0,0,r,n,u*i,u*o,u*l,u*l/b):t.drawImage(c,0,0,r,n,0,0,u*vi,u*yi);const f=null!==(e=G[3])&&void 0!==e?e:"normal";if("normal"!==f&&a){const e=zn([f],x);await e(t,"art",async e=>Yn(t,`finish/art-finish-${e}.png`,u*d,u*m,u*s,u*s/g))}},drawAttribute:async()=>{var e;if(!_)return;_.scale(u,u);const{canvas:t,ctx:a}=ja(vi*u,(Li+Ci)*u);if("custom"===M)await Kn(a,E,e=>{const{naturalWidth:t,naturalHeight:a}=e;return Fi-(Ci/a*t-Ci)/2},Li,void 0,Ci,void 0,void 0,void 0,void 0,{internalImage:!1,crossorigin:"anonymous"});else{var r,n,i;const e=null!==(r=null===(n=N[m])||void 0===n||null===(i=n[E])||void 0===i?void 0:i.offsetX)&&void 0!==r?r:0,t=I[E]?"tcg":R[m].fileKey;await Yn(a,`attribute/attr-${t}-${E.toLowerCase()}.png`,Fi+e,Li,void 0,Ci)}const o=null!==(e=G[0])&&void 0!==e?e:"normal";if("normal"!==o){const e=zn([o],x),{canvas:r,ctx:n}=ja(vi,Li+Ci);null===n||void 0===n||n.drawImage(t,0,0),await e(n,"art",async e=>await Wn(n,`finish/finish-typeart-${e}.png`,(vi-Ti)/2,Ii)),a&&(a.globalCompositeOperation="source-in",a.drawImage(r,0,0)),_.drawImage(t,0,0)}else _.drawImage(t,0,0);_.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:r,iconImage:n}=e;const i="auto"===T?ar(v):T;if(!_)return;_.scale(u,u);const o=null!==(t=G[1])&&void 0!==t?t:"normal",l="normal"!==o?zn([o],x):void 0;await(async e=>{let{ctx:t,iconImage:a,globalScale:r,cardIcon:n,text:i,star:o,starList:l,starAlignment:s="auto",style:c,onStarDraw:d,loopStarFinish:u}=e;const m=Array.isArray(l)?l:[],p=50,b=3.8;let h="custom"===n?m.length:"string"===typeof o?""===o?0:1:"number"===typeof o?o:0,g=p*h+b*(h-1);const f=145;let v="right";["rank","negative-level"].includes(n)&&(v="left"),v="auto"===s?v:s,h>12&&(v="center"),i&&"center"===v&&(h=0,g=0);const y="center"===v?(di+g)/2:"left"===v?85.9125+g:728.775;let x=-53.8;if(t&&i&&"st"!==n){const e=50,a=Pn({ctx:t,...c,globalScale:r});t.textAlign="left"===v||"right"===v?v:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const n="center"===v?t.measureText(i).width/-2:"left"===v?b:-57.6;t.fillText(i,y+n,f+.9*e),t.textAlign="left",a()}const{canvas:j,ctx:O}=ja(di*r,195*r);if(await Promise.all([...Array(h)].map(async(e,t)=>{x+=53.8;const r="custom"===n?m[h-1-t]:n,i=[y-(p+Math.ceil(x)),f],o=[y-(p+Math.ceil(x))-3,142];return K[r]&&await Wn(O,"subfamily/subfamily-glow.png",...o),"user-defined"===r&&O&&a?null===O||void 0===O||O.drawImage(a,...i,p,p):await Wn(O,`subfamily/subfamily-${r}.png`,...i),await d(i)})),t)if(u){const{canvas:e,ctx:a}=ja(di,195);null===a||void 0===a||a.drawImage(j,0,0),await u(a,"art",async e=>await Wn(a,`finish/finish-typeart-${e}.png`,(di-ui)/2,mi)),O&&(O.globalCompositeOperation="source-in",O.drawImage(e,0,0)),t.drawImage(j,0,0)}else t.drawImage(j,0,0)})({ctx:_,iconImage:n,cardIcon:i,text:"string"===typeof z?z:null,star:z,starList:A,starAlignment:r,style:a,globalScale:u,onStarDraw:async e=>"st"===i?Promise.resolve():await q(_,"star",async t=>Wn(_,`finish/finish-${t}-star.png`,...e)),loopStarFinish:l}),_.resetTransform()},drawPendulumScaleIcon:async()=>{const{canvas:e,ctx:t}=ja(wi,Oi);_&&t&&(await Wn(t,`frame-pendulum/pendulum-scale-${P}.png`,0,0),"scaleless"===U.blue&&t.clearRect(0,0,wi/2,Oi),"scaleless"===U.red&&t.clearRect(wi/2,0,wi/2,Oi),_.scale(u,u),_.drawImage(e,0,750),_.resetTransform())},drawStatBorder:async e=>{_&&(_.scale(u,u),await Un(l,"frame/frame-stat-border.png",0,1070,813,20,u,e),_.resetTransform())},drawNameBackground:async()=>{if(!_)return;_.scale(u,u);const{ctx:e,canvas:t}=ja(vi,xi);await Wn(e,`${b?"legacy-":""}background/background-name-${Me}.png`,0,0);const{canvas:a,ctx:r}=ka(await Sa({canvas:t,customFoilCanvas:d,method:Fe}),k[0]);if(Me!==ze||""!==k[0]||""!==k[1]){const e=await fi(`${b?"legacy-":""}background/background-name-${ze}.png`,await gi.name,vi,xi),t=ka(e,k[1]).canvas;null===r||void 0===r||r.drawImage(t,0,0)}_.globalAlpha=ee/100,_.drawImage(a,0,0),_.globalAlpha=1,_.resetTransform()},drawEffectBackground:async e=>{let{withPendulum:t=!1,blendWithBackground:a=!0,externalCtx:r=_}=e;if(!r)return;r.scale(u,u);const{ctx:n,canvas:i}=ja();t?await Yn(n,`${b?"legacy-":""}background/background-text-${Pe}.png`,54,884+ge,705,231,0,0+ge,705,231):await Wn(n,`${b?"legacy-":""}background/background-text-${Pe}.png`,54,884);const o=ka(i,k[4]).canvas;if(r.globalAlpha=(a?ae:100)/100,r.drawImage(o,0,0),t){var l;const{ctx:e,canvas:t}=ja(),{exceptionFrameType:n=he,exceptionPendulumBoxOffsetHeight:i=0}=null!==(l=be[P][He])&&void 0!==l?l:{};await Yn(e,`${b?"legacy-":""}background/background-${n}-${He}.png`,fe,ve+je,ye,xe,0,je+i,ye,xe+i);const o=ka(t,k[5]).canvas;r.globalAlpha=(a?te:100)/100,r.drawImage(o,0,0)}r.globalAlpha=1,r.resetTransform()},drawFrameBorder:async()=>{_&&(_.scale(u,u),await Wn(_,`frame/frame-border-${Ie}.png`,0,0),Y&&!$&&await Wn(_,"frame/frame-border-pendulum.png",0,0),_.resetTransform())},drawNameBorder:async()=>{if(Q&&_){_.scale(u,u);for(let e=0;e<Ne.length;e++)await Wn(_,`frame/name-border-${Ne[e]}.png`,0,0);_.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(we&&_){let e="";e=$||B?`frame/art-border-${v}.png`:W||["zarc","hamon","uria","raviel"].includes(v)?"frame/art-border-special.png":"frame/art-border-base.png",_.scale(u,u),await Wn(_,e,60,170),_.resetTransform()}},drawPendulumBorder:async e=>{if(!_)return;const{canvas:t,ctx:a}=ja(),r=Math.round(Si/2);await Yn(a,`frame-pendulum/border-pendulum-${P}-base-artless`+("scaleless"===U.blue?"-scaleless":"")+".png",30,ji,r,ki,0,0,r,ki),await Yn(a,`frame-pendulum/border-pendulum-${P}-base-artless`+("scaleless"===U.red?"-scaleless":"")+".png",30+r,ji,Si-r,ki,r,0,Si-r,ki),e&&(null===a||void 0===a||a.clearRect(0,0,vi,Oe+ji),await Wn(a,`frame-pendulum/border-pendulum-${P}-base.png`,30,ji)),_.scale(u,u),_.drawImage(t,0,0),_.resetTransform()},drawPendulumBorderFoil:async e=>{if(!_)return;const{canvas:t,ctx:a}=ja(),r=Math.round(Si/2);await Yn(a,`frame-pendulum/border-pendulum-${P}-${D}-artless`+("scaleless"===U.blue?"-scaleless":"")+".png",30,ji,r,ki,0,0,r,ki),await Yn(a,`frame-pendulum/border-pendulum-${P}-${D}-artless`+("scaleless"===U.red?"-scaleless":"")+".png",30+r,ji,Si-r,ki,r,0,Si-r,ki),e&&await Wn(a,`frame-pendulum/border-pendulum-${P}-${D}.png`,30,ji);const n=await Sa({canvas:t,customFoilCanvas:d,method:Ce}),i=ka(n,k[6]).canvas;_.scale(u,u),_.drawImage(i,0,0),_.resetTransform()},drawEffectBorder:async()=>{_&&(_.scale(u,u),Te||"speed-skill"!==Ae?await Wn(_,"frame/effect-border-base.png",35,ke):await Wn(_,"frame/effect-border-speed-skill.png",35,ke),_.resetTransform())},drawCardBorder:async()=>{if(!_)return;_.scale(u,u);const{ctx:e,canvas:t}=ja();await Wn(e,`frame/card-border-${D}.png`,0,0),_.drawImage(t,0,0);if(pr.test(k[6])||Le){const e=await Sa({canvas:t,customFoilCanvas:d,method:Ce}),a=ka(e,k[6]).canvas;_.drawImage(a,0,0)}_.resetTransform()},drawArtBorderFoil:async()=>{if(_){if(_.scale(u,u),we){const{ctx:e,canvas:t}=ja();await Wn(e,`frame/art-border-${D}.png`,60,170);const a=await Sa({canvas:t,customFoilCanvas:d,method:Ce}),r=ka(a,k[6]).canvas;_.drawImage(r,0,0)}_.resetTransform()}},drawEffectBorderFoil:async()=>{if(!_)return;_.scale(u,u);const{ctx:e,canvas:t}=ja();await Wn(e,`frame/effect-border-${D}.png`,35,ke);const a=await Sa({canvas:t,customFoilCanvas:d,method:Ce}),r=ka(a,k[6]).canvas;_.drawImage(r,0,0),_.resetTransform()},drawNameFinish:async()=>{(we||Q)&&_&&(_.scale(u,u),await q(_,"name",async e=>Wn(_,`finish/finish-${e}-name.png`,0,0)),_.resetTransform())},drawAttributeFinish:async()=>{E!==F&&_&&(_.scale(u,u),await q(_,"attribute",async e=>Wn(_,`finish/finish-${e}-attribute.png`,Fi,Li)),_.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;Re&&e&&(e.scale(u,u),await V(e,"art",async(t,a)=>await Yn(e,`finish/art-finish-${t}${Y?a:""}.png`,ce,de,se,se/pe),P),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;e&&(e.scale(u,u),await q(e,"art-overlay",async t=>Wn(e,`finish/finish-${t}-`+(Re?"art":"unart")+"-overlay"+(Y?`-pendulum-${P}`:"")+".png",ce,de)),e.resetTransform())},drawArtBorderFinish:async()=>{we&&_&&(_.scale(u,u),await q(_,"art-border",async e=>Wn(_,`finish/finish-${e}-art-border.png`,0,0)),_.resetTransform())},drawPendulumArtBorderFinish:async()=>{_&&(_.scale(u,u),we&&await q(_,"art-border-pendulum",e=>Wn(_,`finish/finish-${e}-art-border-pendulum-${P}.png`,0,0)),_.resetTransform())},drawBorderPendulumFinish:async()=>{_&&(_.scale(u,u),await q(_,"border-pendulum",async e=>{const t=`finish/finish-${e}-border-pendulum-${P}`;await Yn(_,`${t}${"scaleless"===U.blue?"-scaleless":""}.png`,0,0,vi/2,yi,0,0,vi/2,yi),await Yn(_,`${t}${"scaleless"===U.red?"-scaleless":""}.png`,0+vi/2,0,vi/2,yi,vi/2,0,vi/2,yi)}),_.resetTransform())},drawFrameFinish:async()=>{_&&(_.scale(u,u),await q(_,"frame",async e=>Wn(_,`finish/finish-${e}-frame${Y?`-pendulum-${P}`:""}.png`,0,0)),_.resetTransform())},drawFrameBackgroundFinish:async()=>{_&&(_.scale(u,u),await q(_,"frame-background",async e=>Wn(_,`finish/finish-${e}-frame-background${Y?"-pendulum":""}.png`,0,0)),_.resetTransform())},drawOverlayFinish:async()=>{_&&(_.scale(u,u),await q(_,"overlay",async e=>Wn(_,`finish/finish-${e}-overlay.png`,0,0)),_.resetTransform())},drawCardBorderFinish:async()=>{_&&(_.scale(u,u),await q(_,"card-border",async e=>Wn(_,`finish/finish-${e}-card-border.png`,0,0)),_.resetTransform())}};return We},Ei=async(e,t,a,r,n,i,o,l)=>{var s,c,d;const{isSpeedSkill:u,format:m,frame:p,furiganaHelper:b,globalScale:h}=l,g=r*h,f=n*h,v=ei(a),y=i*h,x=Fr(a),j=!1;if(!t||!a)return;const{embossPitch:O,embossYaw:w,embossThickness:k,fillStyle:S,font:C,gradientAngle:F,gradientColor:L,hasEmboss:T,hasGradient:I,hasOutline:N,hasShadow:R,headTextFillStyle:E,lineColor:M,lineOffsetX:z,lineOffsetY:A,lineWidth:D,shadowBlur:P,shadowColor:H,shadowOffsetX:W,shadowOffsetY:B,pattern:$}={...ne(),...o},{patternImage:Y,blendMode:K}=null!==(s=ce[null!==$&&void 0!==$?$:""])&&void 0!==s?s:{};t.textAlign="left";const U=Bo({...(null!==(c=Ie[C])&&void 0!==c?c:Ie.Default).fontData,headTextFillStyle:E},h),G=Lo({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),q={fontLevel:0,fontData:U,currentFont:G},V=oi(a,m,{multiline:!1,furiganaHelper:b,dictionaryType:"rubyFormName",direction:v}),_="ocg"===m?[V]:V.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),J=Lo({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),Q=J.getFont(),Z=J.setSize(e=>e*U.symbolFontRatio).setStyle("small-caps").setFamily(U.symbolFont).getFont();let ee=0,te=0;_.forEach((e,a)=>{t.font=a%2===0?Q:Z;const r=t.measureText(e.replaceAll(wt,""));ee=Math.max(ee,r.actualBoundingBoxAscent),te=Math.max(te,r.actualBoundingBoxDescent)},0),t.font=Q;let ae=0;const re=q.fontData.fontList[q.fontLevel].lineHeight,ie=Fo(e=>{const{currentLineCount:a,currentLineList:r}=ni({ctx:t,median:e,paragraphList:[V],format:m,textData:q,width:y,lineHeight:re,globalScale:h});return!(a>1)&&(ae=r[0].actualLineWidth,!0)})/1e3;t.scale(ie,1);const oe=Wo(X,h),le=null!==(d=U.fontList[0].offsetY)&&void 0!==d?d:oe.offsetY,se=qn(V),de=ae>0&&I?((e,t,a,r,n,i,o,l)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=o+l,m=r+n/2,p=i+(l-o)/2;let b=n,h=u;"1"!==c&&"3"!==c||(b=u,h=n);const g=Math.sqrt(b**2/4+h**2/4);if(g>0){const t=90-(180*Math.asin(b/2/g)/Math.PI-d),r=Math.sin(t/180*Math.PI)*g,n=Math.sin(d/180*Math.PI)*r,i=Math.cos(d/180*Math.PI)*r;let o=n,l=i;"1"===c&&(o=i,l=-n),"2"===c&&(o=-n,l=-i),"3"===c&&(o=-i,l=n);const s=m+o,u=p-l,h=m-o,f=p+l,v=e.createLinearGradient(s,u,h,f);return a.forEach(e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)}),v}})(t,F,Mo(L),g,ae,f,ee,te):void 0;Ir.test({globalScale:h,xRatio:ie,normalStyle:Q},{scale:h,xRatio:ie,setup:e=>{e.font=Q,e.resetTransform(),e.scale(ie,1)}});let ue=T&&"number"===typeof k&&k>0,me=()=>{};ue&&(me=Pn({ctx:t,lineWidth:k,lineColor:S,lineColorGradient:de,globalScale:h,useDefault:!1})),t.fillStyle=null!==de&&void 0!==de?de:S;const{tokenEdge:pe}=await li({ctx:t,tokenList:se,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:re,format:m,globalScale:h,option:{drawHeadText:!1,direction:v},width:ae*ie,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?le:0)),ue&&t.strokeText(a,r,n-(u?le:0))},debug:j});if(me(),Y){const a=e.cloneNode(),r=a.getContext("2d");if(r){t.setTransform(1,0,0,1,0,0),r.scale(h,h),await Wn(r,`frame/frame-${p}.png`,0,0),await Wn(r,`background/background-name-${p}.png`,0,0),r.globalCompositeOperation=K,r.resetTransform();const e=t.measureText(x).actualBoundingBoxLeft;await Yn(r,`finish-name/${Y}.png`,g-e,f-ee,y+e,ee+te),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(ie,1)}}if(T){const a=10,r=Qa({inputCanvas:e,lightPitch:O,lightYaw:w,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(pe+a)});r&&t.putImageData(r,0,0)}if(N){const e=Pn({ctx:t,lineWidth:D+(T?k:0),lineColor:M,globalScale:h,useDefault:!1});t.globalCompositeOperation="destination-over",await li({ctx:t,tokenList:se,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:re,format:m,globalScale:h,option:{drawHeadText:!1,direction:v},width:ae*ie,drawImage:!1,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+z,n+A-(u?le:0))},debug:j}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(R){const a=e.cloneNode(),r=a.getContext("2d");if(r){const n=Pn({ctx:r,x:W,y:B,shadowColor:H,blur:P,globalScale:h,useDefault:!1});t.scale(1/ie,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}}await li({ctx:t,tokenList:se,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:re,format:m,globalScale:h,drawImage:!1,option:{direction:v},width:ae*ie,textDrawer:()=>{},debug:j});const be=ne();t.setTransform(1,0,0,1,0,0),t.fillStyle=be.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},Mi={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},zi=async e=>{var t,a;let{ctx:r,value:n,format:i,metricMethod:o,size:l,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:p}=Po(null!==(t=null===(a=Se[i])||void 0===a?void 0:a[l])&&void 0!==t?t:Se.tcg.medium,c),b=ei(n),h=Bo({tcg:Ee,ocg:Me}[i],c),g={...h,metricMethod:null!==o&&void 0!==o?o:h.metricMethod},{font:f}=g,v=Mi[l],y=g.fontList[v],x=Lo({defaultFamily:f,defaultSize:`${y.fontSize}px`}),j={fontLevel:v,fontData:g,currentFont:x};let O=0;const w=j.fontData.fontList[j.fontLevel].lineHeight;r.font=x.getFont(),r.textAlign="left";const k=oi(n,i,{multiline:!1,furiganaHelper:s}),S=Fo(e=>{const{currentLineCount:t,currentLineList:a}=ni({ctx:r,median:e,paragraphList:[k],format:i,textData:j,width:p,lineHeight:w,globalScale:c});return!(t>1)&&(O=a[0].actualLineWidth,!0)})/1e3;r.scale(S,1);const C=await li({ctx:r,tokenList:qn(k),xRatio:S,yRatio:1,trueEdge:"left"===d?u:u-O*S,trueBaseline:m,lineHeight:w,textData:j,format:i,globalScale:c,option:{direction:b},width:O*S,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...C,xRatio:S}},{finishTypeCardWidth:Ai,width:Di,iconHeight:Pi,iconWidth:Hi}=c,Wi=function(e,t,a,r,n,i){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:ae;const l=a*i,s=r*i;if(e&&t){const a=n*i;e.font=`${a}px MatrixBoldSmallCaps, Times New Roman`,e.textAlign="left",e.fillStyle=o;const r=Array.from(`${t}`);if(1===r.length){const t=r[0],n=l-e.measureText(t).width/2;e.fillText(t,"1"===t?n+2*i:n,s+a)}else if(2===r.length){const t=r[0],n=r[1],i=.825*e.measureText(t).width,o=e.measureText(n).width,c=l-i-("1"===t?0:.1*i);e.fillText(t,c,s+a),e.fillText(n,c+i-("1"===t?"1"===n?.1*e.measureText("1").width:.1*o:-.1*o),s+a)}else{let t=0;r.forEach(a=>{t+=e.measureText(a).width*("1"===a?.7:1)});let n=l-t/2;r.forEach(t=>{e.fillText(t,n,s+a),n+=e.measureText(t).width*("1"===t?.7:1)})}}},Bi=e=>{let{ctx:t,txt:a="1<st> Edition",edge:r=99,baseline:n=1150.93,baselineOffset:i=0,width:o=185,option:l={globalScale:1,stroke:!1}}=e;if(!t)return;const{stroke:s=!1,textStyle:c,globalScale:d}=null!==l&&void 0!==l?l:{},u=a.replaceAll("\\<",pt).replaceAll("\\>",bt).split(/(<|>|\d|\xaa|\xba)/g),m=r*d,p=n*d,b=i*d,h=Pn({ctx:t,globalScale:d,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}}),g=7.4*d,f=-1*d,v=o*d;let y=m,x=!1,j=0;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(pt,"<").replaceAll(bt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width-2*d)}const O=Math.min(v/j,1);t.scale(O,1),y=m/O,x=!1;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(pt,"<").replaceAll(bt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p-g+b),s&&t.strokeText(a,y,p-g),y+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",t.fillText(a,y,p-f+b),s&&t.strokeText(a,y,p-f),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p+b),s&&t.strokeText(a,y,p),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p+b),s&&t.strokeText(a,y,p),y+=t.measureText(a).width-2*d)}t.resetTransform(),h()},$i=(e,t,a,r,n)=>{if(!e)return;const i=a*n,o=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const l=Rn(e,t,.075,i,o/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,Rn(e,"/",.15,l+5*n,o/1.01),e.setTransform(1,0,0,1,0,0)},Yi=(e,t,a,r,n)=>{if(!e||null==t)return;const i=a*n,o=r*n,l=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*n}px matrix`,e.fillText(t,i+l,o);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*n}px MatrixBoldSmallCaps`,e.fillText(t,i+l,o/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce((t,r,i)=>{e.font=37*n+"px MatrixBoldSmallCaps";let o=t+e.measureText(r).width;return i<a.length-1&&(e.font=37*n+"px matrix",o+=e.measureText("?").width),o},0);if(r>0){const t=Math.min(l/r,1);e.scale(t,1),a.reduce((r,i,l,s)=>{const c=s[s.length-1-l];let d=r;return e.font=37*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+o),l<a.length-1&&(e.font=34*n+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,o/1.29-1),e.setTransform(1,0,0,1,0,0)),d},i+l),e.scale(1/t,1)}}},{height:Ki,width:Ui,finishTypeCardWidth:Gi,finishTypeCardHeight:Xi,stickerX:qi,stickerY:Vi,stickerSize:_i}=c,Ji=(e,t,a)=>{const{card:n}=fn(),{exportCanvasRef:i,artworkCanvasRef:o,backgroundCanvasRef:l,overlayCanvasRef:s,iconImageCanvasRef:c,frameCanvasRef:m,creatorCanvasRef:b,effectCanvasRef:h,nameCanvasRef:g,passwordCanvasRef:f,pendulumEffectCanvasRef:v,pendulumScaleCanvasRef:j,setIdCanvasRef:O,statCanvasRef:w,stickerCanvasRef:k,cardIconCanvasRef:S,typeCanvasRef:C,finishCanvasRef:L,lightboxRef:T,previewCanvasRef:I}=t,{format:N,region:R,legacyTemplate:E,hasBackground:z,backgroundType:D,overlay:P,overlayData:H,overlaySource:W,overlayType:B,iconImage:$,iconImageData:Y,iconImageSource:K,frame:U,foil:G,finish:q,artFinish:V,otherFinish:_,opacity:J,name:Q,nameStyle:Z,nameStyleType:ee,effectTextStyle:te,pendulumTextStyle:re,typeTextStyle:ne,statTextStyle:ie,otherTextStyle:oe,effect:le,effectStyle:se,typeAbility:ce,isPendulum:de,pendulumFrame:ue,pendulumRightFrame:pe,pendulumEffect:be,pendulumScaleBlue:he,pendulumScaleRed:ge,pendulumStyle:fe,pendulumSize:ve,leftFrame:ye,rightFrame:xe,dyeList:je,atk:Oe,def:Se,linkMap:Le,linkRating:Te,attribute:Ie,attributeType:Ee,cardIcon:Me,subFamily:De,star:Pe,starAlignment:He,starList:We,setId:Be,password:$e,creator:Ye,sticker:Ke,isLegacyCard:Ue,isFirstEdition:Ge,isDuelTerminalCard:Xe,isSpeedCard:qe,isLimitedEdition:_e,cornerText:Je,hasCornerText:Qe,firstEditionText:Ze,furiganaHelper:et,flag:tt}=n,at="online"===W&&""!==P.trim()||"offline"===W&&""!==H.trim(),rt="online"===K&&""!==$.trim()||"offline"===K&&""!==Y.trim(),nt=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},effect:{name:"effect",order:6,rerun:0,instructor:()=>Promise.resolve()},pendulumEffect:{name:"pendulumEffect",order:7,rerun:0,instructor:()=>Promise.resolve()},otherText:{name:"otherText",order:7,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:9,rerun:0,instructor:()=>Promise.resolve()}}),it=se.background,ot=fe.background,lt=se.minLine,st=fe.minLine,ct=se.justifyRatio,dt=fe.justifyRatio,ut="auto"===ue?de?"spell":U:ue,mt=null===se||void 0===se?void 0:se.condenseTolerant,pt=(e=>"normal"===e.frame&&tr(e))(n),bt=(e=>"xyz"===e.frame)(n),ht=(e=>!0===e.isLink)(n),gt=tr(n),ft=er(n),{body:vt=100,boundless:yt}=J,xt=!!(vt<50||yt),jt=nr(ut),{bottomRightFrame:Ot}=lr({frame:U,topLeftFrame:ye,topRightFrame:xe,bottomLeftFrame:ue,bottomRightFrame:pe,effectBackground:it,pendulumEffectBackground:ot},de),wt=nr(Ot),kt=rr(U),{levelStyle:St,resolvedEffectTextStyle:Ct,resolvedPendulumEffectTextStyle:Ft,resolvedStatTextStyle:Lt,resolvedTypeTextStyle:Tt,resolvedOtherEffectTextStyle:It}=Object(r.useMemo)(()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:i,statTextStyle:o,typeTextStyle:l}=e;const s={color:t?"#ffffff":ae},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,p]=r,b=d?{...m?{y:0,blur:4,shadowColor:p}:{},color:u}:{},[h,g,f,v]=n,y=h?{...f?{y:0,blur:4,shadowColor:v}:{},color:g}:{},[x,j,O,w]=l,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,C,F,L]=o,T=S?{...F?{y:1,blur:1,shadowColor:L}:{},color:C}:{},[I,N,R,E]=i;return{levelStyle:c,resolvedEffectTextStyle:b,resolvedOtherEffectTextStyle:I?{...R?{y:0,blur:0,shadowColor:E}:{},color:N}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:T,resolvedTypeTextStyle:k}})({lightFooter:jt,lightHeader:kt,requireShadow:xt,effectTextStyle:te,pendulumTextStyle:re,otherTextStyle:oe,statTextStyle:ie,typeTextStyle:ne}),[jt,kt,xt,te,re,oe,ie,ne]),Nt=je[6],Rt=De.toUpperCase(),Et=ce.map(e=>e.trim()).join("ocg"===N?"\uff0f":"\u200a/\u200a"),[Mt,zt,At,Dt]=tt,Pt=!de&&!gt&&ht&&!(Oe||Se),Ht=or(zt,ht)&&!Pt,Wt=Ht&&Mt,Bt=!(!Oe&&!Se)||Ht||!(!de||!Be),$t=Et.length>0&&("auto"===Me?gt||ft:"st"!==Me),Yt=!(""===(null!==he&&void 0!==he?he:"")),Kt=!(""===(null!==ge&&void 0!==ge?ge:"")),{isInitializing:Ut,imageChangeCount:Gt,language:Xt,globalScale:qt}=a,Vt=e&&!1===Ut,_t=Object(r.useMemo)(()=>zn(q,y),[q]),Jt=Object(r.useMemo)(()=>zn([V],x),[V]),[,Qt,Zt]=_;Object(r.useEffect)(()=>{Vt&&(nt.current.frame.rerun+=1,nt.current.frame.instructor=async()=>{var e;const t=null===(e=m.current)||void 0===e?void 0:e.getContext("2d"),a=o.current,r=l.current,n=s.current;if(!Mn(t)||!m.current)return;const i={...u(),...J},{effectBox:b,artBorder:h,body:g,text:f,boundless:v,baseFill:y,frameBorder:x}=i,j=(e,t,a,r,n,i)=>new Promise(o=>{setTimeout(()=>{e.fillStyle=z?null!==i&&void 0!==i?i:y:d,e.fillRect(t,a,r,n),o(!0)},0)}),O=g>0||h,{drawAttribute:w,drawBackground:k,drawCardArt:S,drawFrame:C,drawPendulumScaleIcon:F,drawStar:L,drawNameBackground:T,drawEffectBackground:I,drawFrameBorder:N,drawNameBorder:M,drawArtBorder:A,drawPendulumBorder:P,drawBorderPendulumFinish:H,drawEffectBorder:W,drawCardBorder:$,drawStatBorder:Y,drawAttributeFinish:K,drawArtBorderFoil:X,drawEffectBorderFoil:q,drawPendulumBorderFoil:V,drawNameFinish:Q,drawArtFinish:Z,drawArtOverlayFinish:ee,drawArtBorderFinish:te,drawPendulumArtBorderFinish:ae,drawFrameFinish:re,drawFrameBackgroundFinish:ne,drawOverlayFinish:ie,drawCardBorderFinish:oe}=Ri({canvas:m.current,artworkCanvas:a,backgroundCanvas:r,overlayCanvas:n,globalScale:qt,region:R,legacyTemplate:E,frame:U,leftFrame:ye,pendulumFrame:ue,rightFrame:xe,pendulumRightFrame:pe,dyeList:je,effectBackground:it,pendulumEffectBackground:ot,hasBackground:z,hasOverlay:at,overlayType:B,backgroundType:D,attribute:Ie,attributeType:Ee,cardIcon:Me,star:Pe,starList:We,foil:G,pendulumSize:ve,opacity:i,isLink:ht,isSpeedSkill:ft,isXyz:bt,isPendulum:de,pendulumFrameTypeMap:{red:Kt?"normal":"scaleless",blue:Yt?"normal":"scaleless"},otherFinish:_,loopFinish:_t,loopArtFinish:Jt});await j(t,0,0,qt*Ui,qt*Ki);const{canvas:le,ctx:se}=ja(Ui*qt,Ki*qt);a&&se&&S(se),await Z(se),await ee(se);const{canvas:ce,ctx:me}=ja(Ui*qt,Ki*qt);if(me&&await j(me,0,0,qt*Ui,qt*Ki),r&&me&&await k(me,O),"strict"===D&&f<100&&me&&b&&await I({externalCtx:me,blendWithBackground:!1,withPendulum:de}),!v&&me&&me.drawImage(le,0,0),t.drawImage(ce,0,0),await C(),("frame"!==D||b)&&await $(),await oe(),de||(v||await T(),v||!b&&z||(await I({}),await W(),await q()),await A(),await X(),await te()),de&&!v){const{artX:e,artY:a,artWidth:r,ratio:n}=p(de,J,void 0,ve);t.drawImage(ce,qt*e,qt*a,qt*r,qt*r/n,qt*e,qt*a,qt*r,qt*r/n),await T(),b&&await I({withPendulum:!0}),await F(),b&&(await P(O),await V(O),await ae(),O&&await H())}if(v||(await re(),await Q()),O&&await ne(),v){await T(),await Q(),await M(),ht&&!de?await te():de&&b&&(O&&(await P(O),await V(O)),await ae());const{artX:e,artY:a,artWidth:r,ratio:n}=p(de,J,"full",ve);x&&await N(),t.drawImage(le,qt*e,qt*a,qt*r,qt*r/n,qt*e,qt*a,qt*r,qt*r/n),x||await N(),de?b&&(await I({withPendulum:!0}),await F(),await P(!1),await V(!1),await H()):b&&(await I({}),await W(),await q()),await re()}Bt&&await Y({color:"#000000",...Lt}),v||(await M(),await N());try{await w()}catch(be){console.error("drawAttribute error",be)}if(await K(),await L({style:St,starAlignment:He,iconImage:rt?c.current:void 0}),Ht&&Bt){const e=Pn({ctx:t,...Lt,globalScale:qt}),a="string"===typeof Te&&Te.length>0?Te:`${Array.isArray(Le)?Le.length:0}`;await(async(e,t,a,r,n)=>{const i=e.getContext("2d");if(!i||"string"!==typeof t)return;r&&await Un(e,"link/link-text.png",...Ho([600,1080,120,30],n),n,a);const o=isNaN(Number(t))?1106:1105,l=Pn({ctx:i,...a,globalScale:n});i.textAlign="right",i.scale(1.2,1),i.font=`bold ${24*n}px RoGSanSrfStd-Bd`,i.fillText(`${t}`,622.75*n,o*n),i.setTransform(1,0,0,1,0,0),i.textAlign="left",l()})(m.current,a,Lt,!Dt,qt),e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:i,isDuelTerminalCard:o,isSpeedCard:l,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(o){const e=n?[255,1072,175,35]:i?[151,848,216,24]:[80,843,270,30];await Un(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...Ho(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(l){const e=n?[255,1084,176.4,25]:i?[151,854,215.6,22]:[80,850,245,25];await Un(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...Ho(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:m.current,globalScale:qt,type:jt&&!de?"white":"black",bordered:(g<50||v)&&!de,isDuelTerminalCard:Xe,isSpeedCard:qe,isLink:ht,isPendulum:de,textStyle:It}),await ie()})},[Vt,qt,o,Ie,Ee,l,D,Me,je,it,q,G,N,U,m,z,rt,at,Dt,c,Xe,ht,de,qe,ft,bt,ye,E,St,jt,Le,Te,Jt,_t,J,_,s,B,ot,ue,pe,ve,R,It,Lt,xe,Ht,Pe,He,We,Bt,Yt,Kt,Gt]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(Mn(t)&&de){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=me[ve],i=Ft.color;""!==(null!==he&&void 0!==he?he:"")&&Wi(t,he,e,r,n,qt,i),""!==(null!==ge&&void 0!==ge?ge:"")&&Wi(t,ge,a,r,n,qt,i)}},[Vt,qt,de,ve,he,ge,j,Ft]),Object(r.useEffect)(()=>{Vt&&(nt.current.name.rerun+=1,nt.current.name.instructor=async()=>{var e;const t=null===(e=g.current)||void 0===e?void 0:e.getContext("2d");Mn(t)&&g.current&&await Ei(g.current,t,Q,"tcg"===N?63:68,116,Ie===F?"tcg"===N?688:674:"tcg"===N?608:598,sr({format:N,frame:U,nameStyle:Z,nameStyleType:ee,foil:G}),{isSpeedSkill:ft,format:N,frame:U,furiganaHelper:et,globalScale:qt})})},[Vt,qt,Ie,G,N,U,et,ft,Q,g,Z,ee]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");if(!Mn(t)||!Bt)return;const a=Pn({ctx:t,...Lt,globalScale:qt}),r=Ht;if(Oe){const e=((Ht?!!Se&&Wt:!!Se)?168.75:0)+(r?168.75:0);Dt||$i(t,"ATK",600.85-e,1106,qt),Yi(t,Oe.trim(),677.574-e,1106.5,qt)}if(Se&&(!Ht||Wt)){const e=r?168.75:0;Dt||$i(t,"DEF",600.85-e,1106,qt),Yi(t,Se.trim(),673.865-e,1106.5,qt)}a()},[Oe,Se,qt,gt,Vt,Lt,Wt,Ht,Dt,w,Bt]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");Mn(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:i,withShadow:o,format:l,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${o?"bold":""} ${22*r}px stone-serif-regular, Times New Roman`,"ocg"===l&&(d=.145,u=-1,m=-3);const p=Pn({ctx:e,color:s&&!n?"#ffffff":ae,shadowColor:o?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:o&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?Rn(e,t,d,(66.65+m)*r,(1105.01+u)*r):i?En(e,t,d,(666.56+m)*r,(872.94+u)*r):En(e,t,d,(728.78+m)*r,(871.5+u)*r),p()})(t,Be,{globalScale:qt,isLink:ht,isPendulum:de,withShadow:xt&&!de,format:N,lightFooter:wt,textStyle:It})},[Vt,qt,N,ht,de,wt,O,Be,ft,ut,xt,It]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");nt.current.otherText.rerun+=1,nt.current.otherText.instructor=async()=>{if(!Mn(t))return;const e=/^[0-9]*$/.test($e),a=e&&de&&ht,{rightEdge:r}=await(async e=>{var t,a;let{ctx:r,globalScale:n,value:i,format:o,alignment:l,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:p}=e;if(!Mn(r))return{rightEdge:0};const b=Pn({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Po(null!==(t=Fe[o])&&void 0!==t?t:Fe.tcg,n),v=Bo(Re[o],n),{font:y}=v,x=oi(i,o,{multiline:!1,furiganaHelper:!1});let j={fontLevel:p,fontData:v,currentFont:Lo()},O=0;const w=j.fontData.fontList[j.fontLevel].lineHeight;let k=1e3,S=v.fontList[0];for(let T=0;T<v.fontList.length;T++){S=v.fontList[T];const e=Lo({defaultFamily:y,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",k=Fo(e=>{const{currentLineCount:i,currentLineList:l}=ni({ctx:r,median:e,paragraphList:[x],format:o,textData:t,width:f,lineHeight:w,globalScale:n});return!(i>1)&&(a=l[0].actualLineWidth,!0)}),O=a,j=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=Wo(X,n),L=await li({ctx:r,tokenList:qn(x),xRatio:C,yRatio:1,trueEdge:"left"===l?h+c:h-c-O*C,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+s,lineHeight:w,textData:j,format:o,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),b(),{rightEdge:L.tokenEdge}})({ctx:t,globalScale:qt,value:$e,lightFooter:jt,alignment:"left",edgeOffset:(a?80:0)*qt,format:N,hasShadow:"zarc"===ut||xt,textStyle:It,fontLevel:e?0:1}),n=(Ue||!e)&&!de;if(Ge){const a=!de||!!e,i=n?ht?151:89:Math.max(r/qt+14.813,154.2)-("ocg"===N?7:0),o=n?871:1150.93,l=n?0:ft?-2:-1,s=n?de?683:475:ht&&de?130:0===Ye.trim().length?615:185;a&&Bi({ctx:t,txt:Ze,edge:i,baseline:o,baselineOffset:l,width:s,option:{stroke:!1,globalScale:qt,textStyle:{color:jt?"#ffffff":"#000000",...It}}})}if(Qe){const e=n?Math.max(r/qt+14.813,154.2)-("ocg"===N?7:0):de?65:ht?151:89,a=n?1150.93:871,i=n?ft?-2:-1:de?"small"===ve?-100:-140:0,o=n?0===Ye.trim().length?615:185:de?683:475;Bi({ctx:t,txt:Je,edge:e,baseline:a,baselineOffset:i,width:o,option:{stroke:!1,globalScale:qt,textStyle:{color:jt?"#ffffff":"#000000",...It}}})}}},[Vt,qt,Ye,ut,Je,Ze,N,Qe,Ge,Ue,ht,de,ft,jt,$e,f,ve,xt,It]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=b.current)||void 0===e?void 0:e.getContext("2d");nt.current.creator.rerun+=1,nt.current.creator.instructor=async()=>{var e;if(!Mn(t))return;const a={...u(),...J},{body:r,boundless:n}=a,i=await(async e=>{var t,a;let{ctx:r,value:n,format:i,alignment:o,widthOffset:l=0,edgeOffset:s=0,baselineOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,globalScale:p}=e;if(!Mn(r))return;const b=Pn({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",y:0,x:0,blur:u?3:0,globalScale:p,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Po(null!==(t=Ce[i])&&void 0!==t?t:Ce.tcg,p),v=f+l,y=Bo(Ne[i],p),{font:x}=y,j=oi(n,i,{multiline:!1,furiganaHelper:!1});let O={fontLevel:0,fontData:y,currentFont:Lo()},w=0,k=1e3,S=y.fontList[0];for(let T=0;T<y.fontList.length;T++){S=y.fontList[T];const e=Lo({defaultFamily:x,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:y,currentFont:e},a=0;const n=O.fontData.fontList[O.fontLevel].lineHeight;if(r.font=e.getFont(),r.textAlign="left",k=Fo(e=>{const{currentLineCount:o,currentLineList:l}=ni({ctx:r,median:e,paragraphList:[j],format:i,textData:t,globalScale:p,width:v,lineHeight:n});return!(o>1)&&(a=l[0].actualLineWidth,!0)}),w=a,O=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=Wo(X,p),L=await li({ctx:r,tokenList:qn(j),xRatio:C,yRatio:1,trueEdge:"left"===o?h:h-w*C+s*p,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+c*p,lineHeight:O.fontData.fontList[O.fontLevel].lineHeight,textData:O,format:i,globalScale:p,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),b(),{leftEdge:"left"===o?h:h-w*C,...L}})({ctx:null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),format:N,value:Ye,alignment:"right",edgeOffset:ht&&de?-20:0,widthOffset:(ht&&de?-120:0)*qt,baselineOffset:ft?-2:0,hasShadow:xt,lightFooter:wt,textStyle:It,globalScale:qt}),o=("tcg"===N?390:350)*qt,l=("tcg"===N?30:40)*qt;var s;_e&&b.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:i,isLegacyCard:o,widthOffset:l,bordered:s,textStyle:c}=e;const d=!o||n?i&&n?[220,1123,150-l/r,37]:[145,1123,240-l/r,37]:i?[151,846,216,36]:[80,843,240,40];await Un(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Ho(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:b.current,ctx:t,globalScale:qt,type:jt&&!de?"white":"black",bordered:(r<50||n)&&!de,isLink:ht,isPendulum:de,widthOffset:(null!==(s=null===i||void 0===i?void 0:i.leftEdge)&&void 0!==s?s:o)<o?l:0,isLegacyCard:Ue,textStyle:It})}},[Vt,qt,Ye,b,h,N,Ue,_e,ht,de,ft,jt,wt,J,xt,It]),Object(r.useEffect)(()=>{Vt&&(nt.current.sticker.rerun+=1,nt.current.sticker.instructor=async()=>{var e;const t=null===(e=k.current)||void 0===e?void 0:e.getContext("2d");if(!Mn(t))return;const{canvas:a,ctx:r}=ja(Ui*qt,Ki*qt);await(async e=>{let{ctx:t,sticker:a,globalScale:r,x:n,y:i}=e;if(Mn(t)){if(a===A)return Promise.resolve();t.scale(r,r),await Wn(t,`sticker/sticker-${a.toLowerCase()}.png`,n,i),t.resetTransform()}})({ctx:r,sticker:Ke,globalScale:qt,x:qi,y:Vi});const n=null!==Zt&&void 0!==Zt?Zt:"normal";if("normal"!==n){const e=zn([n],x),{canvas:i,ctx:o}=ja(Ui*qt,Ki*qt);o&&r&&(o.drawImage(a,0,0),o.scale(qt,qt),await e(o,"art",async e=>await Wn(o,`finish/finish-typeart-${e}.png`,qi-Gi+_i,Vi-Xi+_i)),r.globalCompositeOperation="source-in",r.drawImage(i,0,0),t.drawImage(a,0,0))}else t.drawImage(a,0,0)})},[Vt,qt,Ke,Zt,k,Jt]),Object(r.useEffect)(()=>{var e,t;if(!Vt)return;const a=null===(e=h.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=C.current)||void 0===t?void 0:t.getContext("2d");nt.current.effect.rerun+=1,nt.current.effect.instructor=async()=>{if(!Mn(a)||!Mn(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==se&&void 0!==se?se:{},i=te[0],o=i?t:0,l=i?pt&&"auto"===n||"tcg"===N&&"italic"===n:pt,s=await ci({ctx:a,content:le,isNormal:pt,useItalic:l,region:R,condenseTolerant:e,format:N,furiganaHelper:et,...si({format:N,statInEffect:Bt,typeInEffect:$t,useItalic:l,frameType:de&&"large"===ve?"pendulumLarge":"normal"}),textStyle:Ct,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-o,globalScale:qt,minLine:lt,justifyRatio:ct}}),c=null!==Qt&&void 0!==Qt?Qt:"normal",d="normal"!==c?zn([c],x):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:i,frame:o,size:l,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!Mn(t))return;const m=r.length>0,p=n!==M&&"large"===l,b=r+(p?"\u29be":""),h=m?"tcg"===i?"large"===l?`[\u200a\u200a${b}\u200a\u200a]`:`[${b}]`:`\u3010${b}\u3011`:"";if(!m)return;const g={color:ir(o)&&!er({frame:o})&&"large"===l?"#ffffff":ae,...c},f=Pn({ctx:t,...g,globalScale:a}),{iconPositionList:v,xRatio:y}=await zi({ctx:t,format:i,size:l,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});f();let x="ocg"===i?-5:-1,j="ocg"===i?-3:0;if(p){const{edge:e,baseline:r}=v[0],{canvas:i,ctx:o}=ja(Di*a,(r+Hi)*a);if(await Yn(o,`subfamily/subfamily-${n.toLowerCase()}.png`,()=>e+(.175*Hi*y+j)*a,()=>r-.8*Hi*a+x*a,()=>Hi*a,()=>Pi*a),u){const{canvas:e,ctx:n}=ja(Di*a,(r+Hi)*a);n&&o&&(n.drawImage(i,0,0),n.scale(a,a),await u(n,"art",async e=>await Wn(n,`finish/finish-typeart-${e}.png`,(Di-Ai)/2,Pi)),n.resetTransform(),o.globalCompositeOperation="source-in",o.drawImage(e,0,0),t.drawImage(i,0,0))}else t.drawImage(i,0,0)}})({ctx:r,globalScale:qt,format:N,frame:U,furiganaHelper:et,isMonster:gt,textStyle:Tt,size:$t?de&&"large"===ve?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:Rt,typeAbility:Et,loopIconFinish:d})}},[Vt,qt,$t,Bt,se,le,te,h,lt,ct,N,R,U,de,ve,et,Qt,gt,pt,Tt,Ct,Rt,Et,C]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=v.current)||void 0===e?void 0:e.getContext("2d");nt.current.pendulumEffect.rerun+=1,nt.current.pendulumEffect.instructor=async()=>{if(Mn(t)&&de){const{upSize:e,fontStyle:a}=null!==fe&&void 0!==fe?fe:{},r=re[0],n=r?e:0,i=!!r&&("tcg"===N&&"italic"===a),o=`${N}-${ve}`,l=ke[Yt&&Kt?"normal":"scaleless"][ve],s=Yt&&Kt?l:l.map(e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(Yt?we:0),trueWidth:a-(Yt?we:0)-(Kt?we:0)}});await ci({ctx:t,content:be,isNormal:!1,useItalic:i,fontData:(i?ze:Ae)[o],fontDataKey:o,region:R,textStyle:Ft,sizeList:s,condenseTolerant:mt,format:N,furiganaHelper:et,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:qt,minLine:st,justifyRatio:dt}})}}},[Vt,qt,mt,N,R,de,Kt,Yt,ve,v,be,fe,re,st,dt,et,Ft]),Object(r.useEffect)(()=>{var e;if(!Vt)return;const t=null===(e=L.current)||void 0===e?void 0:e.getContext("2d");nt.current.overlay.rerun+=1,nt.current.overlay.instructor=async()=>{if(Mn(t)){if(ht){const e={...u(),...J},{artBorder:a,body:r,boundless:n}=e,i=r>0||a,{ctx:o,canvas:l}=ja(Ui,Ki);if(o){await(async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:i,top:o,height:l,width:s}=Ve[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[i,o,s,l];return await Yn(e,`${d}-base${n?"-full":""}.png`,...m),await Yn(e,`${d}-core.png`,...m),c?(await Yn(e,`${u}-base.png`,...m),Yn(e,`${u}-core.png`,...m)):void 0})),e.resetTransform())})(o,1,Le,de?"pendulum":"normal",n||!i),await(async(e,t,a,r,n,i)=>{if(!e)return;const o=pr.test(i);if("normal"===a&&!o)return;const l=o?"platinum":a,s=async e=>{r?await Wn(e,`link/link-overlay-arrow-${l}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:a,top:r,height:i,width:o}=Ve[n][t-1],s=[a,r,o,i];await Yn(e,`link/link-overlay-${t}-${l}.png`,...s)}))};if(e.scale(t,t),o){const{ctx:t,canvas:a}=ja();t&&await s(t);const{canvas:r}=ka(a,i);e.drawImage(r,0,0)}else await s(e);e.resetTransform()})(o,1,G,!1,de?"pendulum":"normal",Nt);const e=At?["1","2","3","4","5","6","7","8","9"].filter(e=>!Le.includes(e)):[];for(let t=0;t<e.length;t++){const a=parseInt(e[t]),r=Ve[de?"pendulum":"normal"][a-1];r&&o.clearRect(r.left,r.top,r.width,r.height)}t.scale(qt,qt),t.drawImage(l,0,0),t.scale(1/qt,1/qt)}}t.scale(qt,qt),await _t(t,"total-overlay",e=>Wn(t,`finish/finish-${e}-total-overlay.png`,0,0)),t.resetTransform()}}},[Vt,qt,L,_t,Nt,Q,ht,de,Le,J,yt,G,Lt,Bt,At,m]);const ea=Object(r.useRef)({}),ta=Object(r.useCallback)(async e=>{const{onError:t,onSuccess:a}=e,r=i.current,n=null===r||void 0===r?void 0:r.getContext("2d");if(r&&n){var o,l,s;Mn(n),await Promise.all(Object.values(nt.current).sort((e,t)=>e.order-t.order).map(e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&ea.current[r]!==a||!ea.current[r]?(ea.current[r]=a,t()):Promise.resolve()})).catch(e=>{console.error(e);const t="fail-to-draw-notification";Hr.a.close(t),Hr.a.error({key:t,message:Xt["error.draw.error.message"],description:Xt["error.draw.error.description"]})});const e=[m,g,S,j,v,C,h,w,O,f,b,k,L];let i={count:-1,error:null};for(let t=0;t<e.length;t++){const a=await Za(e[t],n,0);"error"===a.status&&(i={count:t,error:a.data})}i.error&&t(i.error),null===(o=T.current)||void 0===o||o.draw(r),null===(l=I.current)||void 0===l||null===(s=l.getContext("2d"))||void 0===s||s.drawImage(r,0,0,r.width,r.height,0,0,Ui,Ki),i.error||a()}},[Xt,S,b,i,h,L,T,g,f,v,j,O,m,w,k,C,I]);return{drawingPipeline:nt,onExport:ta}},Qi="ygocarder-notification",Zi=Object(Er.create)(e=>{const{condenseReminder:t,versionReminder:a,faqReminder:r,feedbackReminder:n}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(Qi))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof n&&n,faqReminder:"string"!==typeof r?"":r,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e(e=>{const r={...e.memory,[t]:a};return localStorage.setItem(Qi,JSON.stringify(r)),{memory:r}})},updateNotificationMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(Qi,JSON.stringify(a)),{memory:a}})}}}),eo=e=>{const{targetMemory:t,updateNotification:a}=Zi(Object(kn.useShallow)(t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}}));return[t,Object(r.useCallback)(t=>a(e,t),[e,a])]};var to=a(196),ao=a.n(to);const ro=Object(Er.create)(Object(Kr.subscribeWithSelector)(e=>({visible:!1,setVisible:t=>{e(e=>{let{visible:a}=e;return{visible:null==t?!a:t}})}}))),no=(e,t,a)=>{const r=document.createElement("a"),n=window.URL.createObjectURL(t);r.download=e,r.href=n,r.dataset.downloadurl=[a,r.download,r.href].join(":");const i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(i),r.remove(),window.URL.revokeObjectURL(n)};const io=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("object"===typeof e&&"object"===typeof t){if(null===e||null===t)return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!1===io(e[r],t[r],a))return!1;return!0}if("[object Object]"===e.toString()&&"[object Object]"===t.toString()){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r of Object.keys(e))if(!1===io(e[r],t[r],a))return!1;return!0}return a?`${e}`===`${t}`:e===t}return e===t},oo={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[M]:"None"},lo=Object.entries(oo).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),so={large:"Large",medium:"Normal",small:"Small"},co=Object.entries(so).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),uo={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},mo=Object.entries(uo).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),po={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},bo=Object.entries(po).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),ho={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},go=Object.entries(ho).reduce((e,t)=>{const[a,r]=t;return e[r.key]=a,e},{}),fo=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:i,effect:o,atk:l,def:s,art:c,artData:d,artSource:u,password:m,creator:p,attribute:b,attributeType:h,setId:g,pendulumEffect:f,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,isPendulum:j,linkMap:O,frame:w,externalInfo:k,nameStyle:S,nameStyleType:C,artFinish:F,finish:L}=e,T=Fr(a),I=Lr(o),N=Lr(f),R=oo[i],E="auto"===h?uo[b]:uo.LIGHT,M=po[w],z="predefined"===C?go[[S.preset,F,L.join("|")].join("-")]:"common",{pendulum:A,rarity:D,...P}=null!==k&&void 0!==k?k:{};return{isPartial:a!==T||o!==I||f!==N||void 0===R||void 0===E||void 0===M||void 0===z,result:{version:"1.0.0",name:T,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:I,atk:l,def:s,serial:m,copyright:p,attribute:null!==E&&void 0!==E?E:"None",id:g,pendulum:{enabled:j,effect:N,blue:v,red:y,boxSize:so[x],boxSizeEnabled:!0,...A},variant:"Normal",link:{topLeft:!!O.includes("1"),topCenter:!!O.includes("2"),topRight:!!O.includes("3"),middleLeft:!!O.includes("4"),middleRight:!!O.includes("6"),bottomLeft:!!O.includes("7"),bottomCenter:!!O.includes("8"),bottomRight:!!O.includes("9")},layout:null!==M&&void 0!==M?M:"Normal",boxSize:"large"===x?"Small":"Normal",rarity:null!==z&&void 0!==z?z:D,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...P}}},vo=e=>{try{const{name:a,atk:r,def:n,attribute:i,effect:o,boxSize:l,copyright:s,icon:c,id:d,image:u,layout:m,level:p,link:b,pendulum:h,rarity:g,serial:f,type:v,variant:y,version:x}=e,{red:j,blue:O,boxSize:w,boxSizeEnabled:k,effect:S,enabled:C}=null!==h&&void 0!==h?h:xe(),L=lo[c],T=mo[i],I=bo[m],N="string"===typeof(t=u)&&t.startsWith("data:image/"),R=parseInt(p),E=g?ho[g.toLowerCase()]:void 0;let z=void 0===L||void 0===T||void 0===I||void 0===E;const{finish:A,artFinish:D,text:P}=null!==E&&void 0!==E?E:{},H=P?le[P]:null,W=ua();return{isPartial:z,result:{...W,finish:null!==A&&void 0!==A?A:[],name:a,nameStyleType:P?"predefined":"auto",nameStyle:H?H.value:ne(),atk:"number"===typeof r?`${r}`:r,def:"number"===typeof n?`${n}`:n,attribute:null!==T&&void 0!==T?T:F,effect:o,creator:s,subFamily:null!==L&&void 0!==L?L:M,setId:d,frame:null!==I&&void 0!==I?I:"normal",star:`${R}`===p&&R<=13?R:p,typeAbility:v.split("/").map(e=>e.trim()),art:N?"":u,artFit:!0,artData:N?u:"",artSource:N?"offline":"online",artFinish:null!==D&&void 0!==D?D:"normal",isLink:"link"===I&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter(e=>"string"===typeof e),isPendulum:C,pendulumScaleBlue:O,pendulumScaleRed:j,pendulumEffect:S,pendulumSize:co[w],password:f,externalInfo:{version:x,variant:y,boxSize:l,rarity:g,pendulum:{boxSize:w,boxSizeEnabled:k}}}}}catch(a){return{isPartial:!0,result:ca()}}var t},yo=e=>{try{return"id"in e&&"frameType"in e&&"ygoprodeck_url"in e}catch(t){return console.error(t),!1}},xo={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[M]:"None"},jo=Object.entries(xo).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Oo=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),wo=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),ko={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},So=e=>{try{var t,a,r;const{atk:n,attribute:i,card_images:o,card_sets:l,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:p,name:b,pend_desc:h,race:g,scale:f,typeline:v,linkval:y,linkmarkers:x}=e,j=jo[g],O=Oo[i],[w,k]=wo[d].split("_"),S=null!==(t=p?p.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",C=S.split("\n"),L=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==w&&void 0!==w?w:"normal"})&&C.length>1?[`[${C[0].replaceAll("\r","")}]`,...C.slice(1)].join("\n"):S,T=h?h.replaceAll(/^''|''$/g,""):"",I=o[0].image_url_cropped,N=!["spell","trap","skill"].includes(d),R=ua();return{isPartial:!1,result:{...R,name:b,atk:N?n<0||null==n?"?":`${n}`:"",def:N?s?s<0||null==s?"?":`${s}`:"0":"",attribute:null!==O&&void 0!==O?O:F,effect:L,subFamily:null!==j&&void 0!==j?j:M,setId:l&&null!==(a=null===(r=l[l.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==w&&void 0!==w?w:"normal",star:"link"===d&&y?y:m,typeAbility:v||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:I,artSource:"online",artCrop:{...R.artCrop,y:0},isLink:"link"===w&&Array.isArray(x),linkMap:(null!==x&&void 0!==x?x:[]).map(e=>ko[e]),isPendulum:"pendulum"===k,pendulumScaleBlue:null==f?"0":`${f}`,pendulumScaleRed:null==f?"0":`${f}`,pendulumEffect:T,password:`${u}`.padStart(8,"0"),creator:We.tcg[0]}}}catch(n){return(e=>{var t;const a={version:null!==(t="2.4.11")?t:"0.0.0",setting:yn.getState(),href:window.location.href};Nr.c(e,{extra:a}),console.error(e)})(n),{isPartial:!0,result:ca()}}},Co=1e3,Fo=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Co;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Co,a=t,r=a,n=30,i=100;const o=()=>n=-1;return{reset:function(){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=o,a=o,n=30,i=100,r=o},searchDown:()=>(a-=i,n-=1,a),reverseSearch:()=>(1===i?o():(a+=i,i/=10,a-=i),Math.min(a,t)),finish:o,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===Co)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,Co));return n!==a&&e(n),n},Lo=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let i=t,o=a,l="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[o,i,l,c].filter(e=>""!==e).join(" ")}, Arial`,getFontInfo:()=>({style:o,size:l,family:c,sizeAsNumber:s,weight:i}),setWeight(e){return i=e,this},setStyle(e){return o=e,this},setSize(e){const t="function"===typeof e?e(s):e;return l="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},To=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},Io=(e,t)=>({...e,fontList:[...e.fontList,To(t)]}),No=(e,t)=>{const{fontData:a,fontLevel:r}=e,n=Lo(),i={...t,fontList:[...a.fontList]};return n.setSize(i.fontList[r].fontSize).setFamily(i.font).getFont(),{fontData:i,fontLevel:r,currentFont:n}},Ro=()=>Mo(ne().gradientColor),Eo=e=>(null!==e&&void 0!==e?e:[]).map(e=>{let{color:t,offset:a}=e;return`${a}|${t}`}).join(","),Mo=e=>e?e.split(",").map((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}}):Mo(ne().gradientColor),zo=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)(()=>{t(e=>e+1)},[]),e]},Ao=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:i,onCancel:o,onKeyPress:l}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===l||void 0===l?void 0:l(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e+1)%a)):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e-1)%a)):"Enter"===e.key||" "===e.key?i():"Escape"===e.key&&(null===o||void 0===o||o()))}}},Do=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a},Po=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:i}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof i?i*t:i}},Ho=(e,t)=>e.map(e=>e*t),Wo=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:i,headTextSpacing:o,iconSymbolWidth:l,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:i*t,headTextSpacing:"number"===typeof o?o*t:void 0,iconSymbolWidth:"number"===typeof l?l*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},Bo=(e,t)=>({...e,fontList:e.fontList.map(e=>Wo(e,t))}),$o=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},Yo=(()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e})();function Ko(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var Uo=a(618),Go=a(101);const Xo=h.b.button`
    align-content: center;
    font-size: var(--fs-lg);
    border: var(--bw) solid var(--sub-tertiary);
    border-radius: var(--br-lg);
    background-color: var(--main-primary);
    border: var(--bw) solid var(--main-primary);
    cursor: pointer;
    &:not(:disabled):hover {
        background-color: var(--sub-primary);
    }
    &:disabled {
        color: var(--color-dim);
        cursor: not-allowed;
        background-color: var(--color-contrast);
        border: var(--bw) solid var(--color-contrast);
        .anticon {
            color: inherit;
        }
    }
    input {
        display: none;
    }  
`;var qo=a(633),Vo=a(634),_o=a(635),Jo=a(197),Qo=a.n(Jo);const Zo=Object(h.b)(Uo.a)`
    .controller {
        display: flex;
        gap: var(--spacing);
        align-items: center;
        label {
            background: var(--main-level-4);
            border: var(--bw) solid var(--sub-level-4);
            padding: 0 var(--spacing-xs);
            border-radius: var(--br);
        }
        .toggle-button {
            padding: 0;
            /** Alignemnt */
            width: 26px;
            height: 26px;
            background-color: var(--main-primary);
            border: var(--bw) solid var(--sub-primary);
            border-radius: var(--br);
            box-shadow: var(--bs-block);
            cursor: pointer;
            transform: rotate(0deg);
            transition: transform 0.33s ease-in-out;
            &.reverse{
                transform: rotate(-180deg);
                transition: transform 0.33s ease-in-out;
            }
            &:hover {
                background-color: var(--sub-primary);
            }
        }
    }
    .announce {
        text-align: center;
        .warning {
            color: var(--main-danger);
        }
        .in-progress {
            color: var(--main-info);
        }
    }
    .file-panel {
        margin-top: var(--spacing);
        input {
            width: 100%;
            background: var(--main-level-4);
            padding: var(--spacing-xs);
            border-radius: var(--br);
            cursor: pointer;
            margin-bottom: var(--spacing-sm);
        }
        .file-list {
            margin-top: var(--spacing-sm);
            &:empty {
                margin-top: 0;
            }
        }
        .file-entry {
            display: grid;
            grid-template-columns: 1fr max-content;
            gap: var(--spacing-xs);
            background-color: var(--main-level-1);
            border: 1px solid var(--sub-level-3);
            padding: 0 var(--spacing-xs);
            border-radius: var(--br-lg);
            + .file-entry {
                margin-top: var(--spacing-xxs);
            }
            .file-action {
                .anticon:hover {
                    color: var(--sub-danger);
                }
            }
        }
    }
`,el=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[i,o]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(Zo,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||i},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{o(!0);const e=await Promise.all(c.map(e=>{let{file:t,name:a}=e;return new Promise((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:i}=n;if("string"!==typeof i)return void r("Not a valid result");let o=JSON.parse(i);Or(o)&&(o=vr(o));const s=wr(o);let c=null;if(c=l?s?fo(hn(o).card).result:o:s?o:vr(hn(o).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)})})),t=new Qo.a;e.forEach(e=>{let{blob:a,name:r}=e;t.file(r,a)});const a=await t.generateAsync({type:"blob"});no("convert-result.zip",a,"application/zip"),o(!1),n(!1)}catch(e){console.error(e),Hr.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),o(!1)}},children:[Object(g.jsxs)("div",{className:"controller",children:[Object(g.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:Ko("toggle-button",l?"reverse":""),onClick:()=>s(e=>!e),children:Object(g.jsx)(qo.a,{})})}),Object(g.jsx)("label",{children:"Yugioh Carder"})]}),Object(g.jsxs)("div",{className:"file-panel",children:[Object(g.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(g.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],i&&Object(g.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(g.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(g.jsx)("div",{className:"file-list",children:c.map(e=>{let{name:t}=e;return Object(g.jsxs)("div",{className:"file-entry",children:[Object(g.jsx)("div",{children:t}),Object(g.jsx)("div",{className:"file-action",children:Object(g.jsx)(Vo.a,{disabled:i,onClick:()=>d(e=>e.filter(e=>e.name!==t))})})]},t)})})]})]}),Object(g.jsx)(Go.a,{overlay:t["converter.header.label"],children:Object(g.jsx)(Xo,{className:"batch-converter",onClick:()=>n(!0),children:Object(g.jsx)(_o.a,{})})})]})};var tl=a(79),al=a(628),rl=a(654),nl=a(616);class il extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){Nr.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var ol=a(202);const ll="controls-wrapper",sl=h.b.div`
    .ap {
        background-color: var(--color-heavy);
        .apc {
            width: 8px;
        }
        .aph {
            width: 8px;
            height: 8px;
        }
    }
    .ai {
        margin: 0;
        margin-top: var(--spacing-sm);
        background: var(--main-slider);
        justify-content: space-between;
        line-height: 1.4;
        span {
            background: var(--main-secondary);
            padding-left: var(--spacing);
            padding-right: var(--spacing);
            &:hover {
                background: var(--sub-secondary);
            }
        }
        span,
        input {
            color: var(--color-heavy);
        }
    }
`,cl=e=>{let{children:t,...a}=e;return Object(g.jsxs)(sl,{className:"angle-picker-container",children:[t,Object(g.jsx)(ol.AnglePicker,{...a})]})};var dl=a(641),ul=a(642),ml=a(643),pl=a(644),bl=a(645),hl=a(600),gl=a(636);const fl=Object(h.b)(gl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,vl=e=>{let{overlayClassName:t,iconProps:a,icon:r=fl,...n}=e;const{className:i,...o}=null!==a&&void 0!==a?a:{};return Object(g.jsx)(hl.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...n,children:Object(g.jsx)(r,{className:["explanation-icon",null!==i&&void 0!==i?i:""].join(" "),...o})})};var yl=a(638),xl=a(626);const jl=h.b.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    ${e=>{let{$freeSize:t,$size:a}=e;return t?"padding: 0 var(--spacing-xxs);":"sm"===a?"width: 18px;":"width: 24px;"}};
    ${e=>{let{$size:t}=e;return"sm"===t?"\n            height: 18px;\n            font-size: var(--fs-sm);\n        ":"\n            height: 24px;\n            font-size: var(--fs);\n        "}}
    ${e=>{let{$active:t}=e;return t?"\n            background-color: var(--main-active);\n            &:hover {\n                background-color: var(--sub-active);\n            }\n        ":"\n            background-color: var(--main-level-4);\n            &:hover {\n                background-color: var(--sub-level-4);\n            }\n        "}}
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
	cursor: pointer;
`,Ol=e=>{let{size:t="md",active:a=!1,Icon:r,children:n,onClick:i,iconProps:o,tooltipProps:l,containerProps:s}=e;const{className:c,onClick:d,onKeyDown:u,...m}=null!==s&&void 0!==s?s:{};return Object(g.jsx)(Go.a,{title:null,...l,children:Object(g.jsx)(jl,{$size:t,$active:a,tabIndex:0,...m,onClick:e=>{null===i||void 0===i||i(),null===d||void 0===d||d(e)},onKeyDown:e=>{null===u||void 0===u||u(e),"Enter"===e.key&&(null===i||void 0===i||i())},className:["icon-button",null!==c&&void 0!==c?c:""].join(" "),$freeSize:!r,children:Object(g.jsxs)(g.Fragment,{children:[r&&Object(g.jsx)(r,{...o}),n]})})})},wl=h.b.div`
    cursor: pointer;
    .button-label {
        display: grid;
        label {
            cursor: pointer;
            line-height: 1;
            font-size: var(--fs-xs);
            margin-top: var(--spacing-xs);
        }
    }
    .anticon {
        font-size: var(--fs-xl);
        justify-self: center;
    }
    &:hover {
        color: var(--main-active);
        .anticon {
            color: var(--sub-active);
        }
    }
`,kl=h.a`
    display: flex;
    align-items: center;
    .checkbox-train-input-group,
    .radio-train-input-group {
        display: flex;
        flex: 1 1 auto;
		&:focus-visible {
			.radio-train-focused,
			.checkbox-train-focused {
				background-color: var(--main-level-3);
			}
		}
    }
    .ant-radio-button-wrapper {
        user-select: none;
    }
    .ant-radio-button-wrapper:first-child,
    .ant-radio-button-wrapper:last-child {
        border-radius: 0;
    }
    .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):first-child {
        border-left-color: var(--sub-level-1);
    }
`,Sl=h.b.div`
    ${kl}
`,Cl=(e,t)=>{let{onChange:a,value:n,optionList:i,children:o,suffix:l,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),p=i.length;return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}})),Object(g.jsxs)(Sl,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[o&&Object(g.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:o}),Object(g.jsx)("div",{ref:m,className:"radio-train-input-group",...Ao({setFocus:u,optionLength:p,onTrigger:()=>{const e=i[d];e&&a(e.value)}}),children:i.map((e,t)=>{let{value:r,props:i,label:o,tooltipProps:l}=e;const{className:s}=null!==i&&void 0!==i?i:{},u=c?r===n:`${r}`===`${n}`;return Object(g.jsx)(Go.a,{overlay:null,...l,children:Object(g.jsxs)("label",{...i,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(g.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(g.jsx)("span",{className:"ant-radio-button-inner"})}),Object(g.jsx)("span",{className:"label",children:o})]})},r)})}),l]})},Fl=Object(r.forwardRef)(Cl);var Ll=a(623);const Tl=h.b.div`
    height: 17px;
    width: 17px;
    cursor: pointer;
    position: relative;
    outline: none;
    box-shadow: 0 0 1px 1px var(--main-level-3);
    border-radius: var(--br);
    ${e=>{let{$static:t}=e;return t?"\n            cursor: default;\n            height: 9px;\n            width: 9px;\n            margin: 4px 0;\n            border: none;\n        ":""}}
    ${e=>{let{$empty:t}=e;return t?"\n            background-color: var(--sub-level-4);\n            background-image: var(--gradient-diagonal-stripe);\n        ":""}}
    .active-dot {
        position: absolute;
        inset: var(--spacing-xs);
        background: rgb(0, 0, 0);
        border-radius: 50%;
        opacity: 1;
    }
`;var Il=a(203),Nl=a.n(Il),Rl=a(637);const El=h.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,Ml=h.a`
    position: relative;
    .copiable-overlay {
        align-items: center;
        background-color: var(--color-contrast);
        font-size: var(--fs);
        font-weight: bold;
        border-radius: var(--br);
        color: var(--color);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
    }
`,zl=Object(h.b)(El)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    ${Ml}
`,Al=e=>{let{data:t,children:a,disabled:n,overlay:i=Object(g.jsx)(Rl.a,{}),container:o}=e;const[l,s]=Object(r.useState)(!1);return Object(g.jsxs)(o,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,Nl()("number"===typeof a?`${a}`:a),s(!0),setTimeout(()=>{s(!1)},1e3)},children:[l?Object(g.jsx)("div",{className:"copiable-overlay",children:i}):null,a]})},Dl=e=>{let{data:t,children:a}=e;return Object(g.jsx)(Al,{data:t,container:zl,children:a})},Pl=h.b.div`
    padding: var(--spacing-xs);
    background-color: var(--main-level-3);
    font-size: var(--fs);
    color: var(--color-heavy);
    text-shadow: var(--ts);
    p {
        white-space: pre-line;
    }
    ul {
        padding-inline-start: var(--spacing-2xl);
        margin-block-end: 0;
        li {
            line-height: 1.5;
        }
    }
    :last-child {
        margin-bottom: 0;
    }
`,Hl=Object(h.b)(Pl)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Wl=e=>{let{content:t,children:a,...r}=e;return t?Object(g.jsx)(hl.a,{content:t,...r,children:a}):Object(g.jsx)(g.Fragment,{children:a})},Bl=h.b.button`
    --overlay-size: 36px;
    background: var(--main-primary);
    border-width: 0;
    border-style: solid;
    border-color: var(--main-active);
    color: var(--color-heavy);
    padding: var(--spacing-sm);
    line-height: 1;
    font-size: var(--fs-xl);
    text-align: center;
    width: var(--overlay-size);
    height: var(--overlay-size);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-1);
    /* display: none; */
    &:not(:disabled) {
        cursor: pointer;
        &:hover {
            background: var(--sub-primary);
        }
    }
    &:disabled {
        cursor: not-allowed;
        filter: opacity(0.5);
    }
`,$l=h.b.div`
    display: inline-flex;
    column-gap: var(--spacing-xs);
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--br);
    box-shadow: var(--bs-input);
    .button-label {
        position: relative;
        display: flex;
        .ant-checkbox-wrapper {
            display: inline-flex;
            align-items: center;
            .ant-checkbox {
                transform: translateY(1px); // Alignment, but why?
            }
        }
    }
`,Yl=h.b.div`
    display: grid;
    grid-template-columns: max-content 57px 36px 6px;
    &.inactive {
        .slider-label,
        .ant-slider,
        .slider-padding {
            background-color: var(--main-level-3);
        }
    }
    .slider-label,
    .ant-slider,
    .slider-padding {
        border: var(--bw) solid var(--sub-level-1);
        background-color: var(--main-level-4);
    }
    .slider-label {
        border-right: none;
        border-radius: var(--br) 0 0 var(--br);
    }
    .ant-slider {
        margin: 0;
        border-left: none;
        border-right: none;
        height: 28px; // Alignment
        padding-top: 11px; // Alignment
    }
    .slider-padding {
        border-left: none;
        border-radius: 0 var(--br) var(--br) 0;
    }
    .ant-slider-rail,
    .ant-slider-track {
        border-radius: 0 var(--br) var(--br) 0;
    }
    .ant-input-number.ant-input-number-sm {
        height: 28px; // Alignment
        width: unset;
        border-radius: 0;
        box-shadow: var(--bs-input);
        .ant-input-number-input {
            height: 26px; // Alignment
        }
    }
`,Kl=h.b.div`
    display: inline-block;
    background-color: var(--main-level-4);
    ${e=>{let{$active:t}=e;return t?"border: var(--bw) solid var(--main-active);":"border: var(--bw) solid var(--sub-level-1);"}}
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin: calc(-1 * var(--spacing-xxs)) 0;
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
    color: var(--color-heavy);
    cursor: pointer;
    font-size: var(--fs);
    ${e=>{let{$softMode:t,$active:a}=e;return t?`\n                border: var(--bw) solid var(--main-level-4);\n                ${a?"outline: var(--bw) solid var(--main-active);":""}\n            `:""}}
    &:hover {
        background-color: var(--sub-level-4);
    }
`,Ul=h.b.div`
    display: grid;
    grid-template-columns: 3em max-content 3em;
    gap: var(--spacing-xs);
    .left-part {
        text-align: right;
    }
    .right-part {
        text-align: left;
    }
    ${e=>{let{$warning:t}=e;return t?"\n            color: var(--main-warning);\n        ":""}}
`,Gl=e=>{let{width:t,height:a,warning:r=!1,...n}=e;return Object(g.jsxs)(Ul,{$warning:r,...n,children:[Object(g.jsx)("span",{className:"left-part",children:t}),Object(g.jsx)("span",{children:"\xd7"}),Object(g.jsx)("span",{className:"right-part",children:a})]})},Xl=h.c`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,ql=h.b.div`
	display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
	width: 100%;
	height: 100%;
	background-color: #8888cc44;
	z-index: 1;
	font-size: var(--fs-3xl);
	align-items: center;
    justify-content: center;
	text-shadow: 0 0 3px #222;
    border: 5px dashed #cccccc;
    background: linear-gradient(-45deg, #ee7752aa, #e73c7e88, #23a6d588, #23d5ab88);
	background-size: 400% 400%;
    padding: 5px;
    label {
        color: var(--color-heavy);
        line-height: 1.25;
    }
    ${h.a`animation: ${Xl} 6s linear infinite;`}
`,Vl=Object(h.b)(Ll.a)`
    .ant-drawer-header {
        padding: var(--spacing);
    }
    .ant-drawer-content {
        box-shadow: 0 0 3px 2px #202020;
    }
    .ant-drawer-body {
        padding: 0;
        height: 100%;
    }
    .ant-drawer-close {
        display: none;
    }
    .ant-drawer-content {
        background-color: #484848;
    }
`,_l=h.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: var(--spacing-sm);
    align-items: center;
    color: var(--color);
    text-shadow: var(--ts);
    font-weight: 500;
    .ant-input-number {
        width: 55px;
    }
    .ant-slider {
        margin: var(--spacing-xxs);
    }
`,Jl=h.c`
    to {
        transform: rotate(360deg);
    }
`,Ql=h.b.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    color: var(--color);
    min-width: 15rem;
    .list-option {
        margin-bottom: var(--spacing-xs);
    }
    .resolution-list {
        &.radio-train {
            .ant-radio-button-wrapper:first-child {
                border-radius: var(--br) var(--br) 0 0;
            }
            .ant-radio-button-wrapper:last-child {
                border-radius: 0 0 var(--br) var(--br);
            }
        }
        .radio-train-input-group {
            display: inline-grid;
            flex: 0 1 auto;
            .ant-radio-button-wrapper {
                border-left-width: 1.02px;
                &:before {
                    content: none;
                }
            }
        }
    }
`,Zl=Object(h.b)(wl)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":h.a`animation: ${Jl} 12s linear infinite;`}}
        }
    }
`,es=()=>{const e=$r(),{setting:t,updateSetting:a}=yn(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}}),{allowHotkey:r,exportFormat:n,reduceMotionColor:i,resolution:o,showCreativeOption:l,showExtraDecorativeOption:s,slidingType:c}=t;return Object(g.jsx)(Zl,{className:"setting-button",$softMode:i,children:Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(g.jsxs)(Ql,{children:[Object(g.jsx)("div",{children:Object(g.jsx)(xl.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(g.jsx)("div",{children:Object(g.jsx)(xl.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(g.jsx)("div",{children:Object(g.jsx)(xl.a,{checked:l,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(g.jsx)("div",{children:Object(g.jsx)(Go.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(g.jsx)(xl.a,{checked:r,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(g.jsx)(Fl,{className:"resolution-list",value:`${o[0]}x${o[1]}`,optionList:ga.map(t=>{let{height:a,width:r,label:n,scale:i}=t;return{value:`${r}x${a}`,label:i>1?Object(g.jsx)(hl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(g.jsx)(Hl,{children:e["setting.option.resolution.warning"]}),children:Object(g.jsx)(Gl,{width:r,height:a,warning:!0})}):Object(g.jsx)(Gl,{width:r,height:a})}}),onChange:e=>{const t=ha[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(g.jsx)(Fl,{value:n,optionList:fa,onChange:e=>{a({exportFormat:e})}})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"list-option",children:e["setting.option.sliding-type.label"]}),Object(g.jsx)(Fl,{value:c,optionList:va(e),onChange:e=>{a({slidingType:e})}})]}),Object(g.jsx)("div",{children:Object(g.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(g.jsxs)("div",{className:"button-label",children:[Object(g.jsx)(yl.a,{}),Object(g.jsx)("label",{children:e["setting.button.label"]})]})})})};var ts=a(624);const as=h.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,rs=h.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #2a2a2a inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?h.a`animation: 2s linear 350ms 4 ${as};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,ns=Object(h.b)(rs)`
    box-shadow: none;
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    &.js-highlight {
        background: var(--main-info);
        text-shadow: none;
        box-shadow: 0 0 2px 0 #333333;
    }
    ${e=>{let{$animating:t}=e;return t?"\n            background: var(--main-info);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background: var(--sub-info);
    }
`,is=h.b.div`
    white-space: pre-line;
    label {
        font-weight: bold;
        font-style: italic;
        &:after {
            content: ":";
        }
    }
    .question {
        margin-left: var(--spacing);
    }
    .answer {
        margin: var(--spacing) 0;
        margin-bottom: var(--spacing-lg);
    }
    .image {
        max-width: 100%;
        padding: 0 var(--spacing) var(--spacing-lg) var(--spacing);
    }
    &:last-child {
        .answer {
            margin-bottom: 0;
        }
    }
`,os=h.b.li`
    text-align: center;
    .content {
        text-align: left;
    }
    a {
        display: inline-block;
    }
    img {
        display: block;
        max-width: 400px;
        max-height: 300px;
        margin: auto;
        box-shadow: var(--bs-1);
        margin-top: var(--spacing-xs);
    }
`,ls=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),ss=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{n(!0);const e=await ls.getLog();n(!1),t(e)})()},[]),0!==e.length||a?a?Object(g.jsx)("div",{children:"Loading changelog..."}):Object(g.jsx)("div",{children:e.map((e,t)=>{let{logList:a,version:r}=e;return Object(g.jsxs)("div",{className:"log-section",children:[Object(g.jsx)("b",{children:r}),Object(g.jsx)("br",{}),Object(g.jsx)("ul",{children:a.map((e,t)=>{let{content:a,image:n}=e;return Object(g.jsxs)(os,{children:[Object(g.jsx)("div",{className:"content",children:a}),n&&Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,title:"Click to open in new tab",children:Object(g.jsx)("img",{src:n,alt:`version-${r}-illust`})})]},t)})})]},`${r}-${t}`)})}):Object(g.jsx)("div",{children:"No changelogs"})},cs=Object(h.b)(Hl)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,ds=Object(r.memo)(()=>{var e;const[t,a]=Object(r.useState)(!1),[n,i]=eo("versionReminder");return Object(r.useEffect)(()=>{if(n){var e;const t=null!==(e="2.4.11")?e:"0.0.0",r=n;i("2.4.11"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[i,o,l]=String(t).split(".").map(Number);return a!==i?a>i:r!==o?r>o:n>l})(t,r)&&(a(!0),setTimeout(()=>{a(!1)},8e3))}},[i,n]),Object(g.jsx)(hl.a,{placement:"bottom",content:Object(g.jsx)(cs,{children:Object(g.jsx)(ss,{})}),children:Object(g.jsxs)(rs,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.4.11")?e:"unknown"]})})});var us=a(614);const ms="faq-button",ps=Object(h.b)(is)`
    text-align: center;
    blockquote,
    .answer {
        text-align: left;
    }
    img {
        max-height: 400px;
    }
`,bs=e=>{let{image:t,author:a,question:r,children:n}=e;return Object(g.jsxs)(ps,{children:[Object(g.jsxs)("blockquote",{children:[a&&Object(g.jsx)("label",{children:a}),Object(g.jsx)("div",{className:"question",children:r})]}),Object(g.jsx)("div",{className:"answer",children:n}),t&&t.map((e,t)=>Object(g.jsx)("img",{className:"image",src:e,alt:`answer preview ${t}`},`${e}-${t}`))]})},hs=()=>{const[e,t]=Object(r.useState)(!1),[a,n]=Object(r.useState)(!1),[i,o]=eo("faqReminder"),[l,s]=eo("feedbackReminder");Object(r.useEffect)(()=>{const e="30/04/2026";i!==e&&(o(e),n(!0),setTimeout(()=>{n(!1)},8e3))},[o,i]),Object(r.useEffect)(()=>{!0!==l&&(s(!0),n(!0),Hr.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{n(!1)}}))},[l,s]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(ns,{id:ms,$animating:a,onClick:()=>t(e=>!e),children:"FAQ"}),Object(g.jsx)(Uo.a,{width:600,visible:e,onCancel:()=>t(!1),footer:null,children:Object(g.jsxs)(us.a,{children:[Object(g.jsxs)(us.a.TabPane,{tab:"Feedbacks",children:[Object(g.jsx)("div",{children:Object(g.jsx)("i",{children:"Solved or stale (4 weeks of inactive) feedbacks are removed."})}),Object(g.jsx)("br",{}),[{author:"Anonymous at April 30, 2026",question:"That didnt work, even though i did everything you told me, is there smth im missing?",answer:'Your frame crop is a bit off so it does not align with other elements on the card. You can use the "Use whole image" option to ignore manual crop and use the full image instead. Let me know if there is still any issue after that.',image:["https://i.postimg.cc/Dfqqd5VQ/image.png"]},{author:"Anonymous at April 29, 2026",question:"this is the frame i want \nhttps://static.wikia.nocookie.net/ycm/images/4/46/Constellation_Monster.png/revision/latest?cb=20180202161511\n\nif we can pull it off thats good, but if we cant then can i get a feature that lets me add custom templates like this one to your app?",answer:"Hi, it takes a bit of set up but you can certainly apply your template in the app. Below is a step-by-step guide and the end result.",image:["https://i.postimg.cc/HL4PXZjw/test.png","https://i.postimg.cc/Z5gyj4v0/download-(2).png"]},{author:"Anonymous at April 28, 2026",question:'I saw a card template once and thought "wow it would be rly cool if i made a card outta this", then i realised i couldn\'t, so could you give us the feature to upload our own custom templates without needing to use the default ones??\n\nOh, and by templates i mean the Monster templates',answer:"Hi, what does your template look like? The app supports customizing a variety of card components, including background layer, foil, etc. If you can provide more details about your template and which part you want to customize, I may be able to suggest how to achieve that with current features or by adding new ones if needed."},{author:"Ryan at April 24, 2026",question:"Importing a Spell Card (haven't tried on Traps) don't auto attach the Spell Attribute and show ATK/DEF like a Monster card.",answer:"Thanks for your report, I have fixed the issue."},{author:"Anonymous at April 18, 2026",question:"I want to remove the pendulum effect frame, as it's already available on the overframe card",answer:"Do you want to be able to remove the effect background as well? I may give it a try."},{author:"Anonymous at April 14, 2026",question:"Hey it's me again, i see that the issue wasnt fixed, ik if the issue lasts more than 2 weeks then you are unable to fix it, but pls reconsider.\nheres a screenshot for reference",answer:"I have update the formatting in card name and effects to adapt with Arabic, you may try it now."},{author:"Anonymous at April 12, 2026",question:"Hi Lauqerm, have you fix the issue of G and S leeters\ud83d\ude2d\ud83d\ude2d i think the height issue cameback maybe came from the shrinkage of the attribute icons in the name box \ud83e\udd14\ud83e\udd14"},{author:"Anonymous at April 09, 2026",question:"The S and G letter now are lower than other letters Lauqerm, i tried on Slifer the Sky Dragon, its same as the N letter issue before you fixed for me \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",answer:"Can you provide some images / screenshots to help me visualize the issue better? It's pretty weird because I never adjust the letter S so it very unlikely that it bugged out right now when it is not before."},{author:"Anonymous at April 09, 2026",question:"Hello, its me again.\nThe same issue is back with G letter again Lauqerm, please fix it \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",answer:"Oh man \ud83d\ude2d."},{author:"Anonymous at April 09, 2026",question:"\"From my tests, the condense option is still saved correctly when you export the card, then re-import it later or refresh the page.\"\n\nI don't know what to say. It simply is not stored as a saved toggle feature whenever I import the card list. It's a very minor thing and a peeve at worst. I cannot say it's exclusively a me thing, but if you say it should work that way, then it just doesn't do it for me.",answer:"I see. I have tried apply a fix for this, hopefully this will resolve the issue. But if it still persists, could you send me a part of your card list as well? (not the whole thing, just the first few lines are enough). It will help me a lot to investigate the problem. Thanks for your help."},{author:"Anonymous at April 09, 2026",question:"I'm an Arab and love Yu-Gi-Oh, but your card maker doesn't support the Arabic language and I really want to make Arabic Yu-Gi-Oh cards becuz my friends can't understand english to read the cards I maker"},{author:"Anonymous at April 09, 2026",question:'If I wasn\'t clear before, the Arabic text is supposed to look like this\n \u0623\u0647\u0644\u0627\u060c \u0627\u0646\u0627 \u0627\u062a\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0628\u064a\u0629\nInstead it looks like this\n\u0629 \u064a \u0628 \u0631 \u0644 \u0623  \u062b \u062f \u062d \u062a \u0627\u060c \u0623 \u0644 \u0647 \u0627 \nPlease fix this\n(Btw the translation is "Hello, I speak Arabic")',answer:"I will try my best. But I don't know Arabic and its writing system so it may take sometime \ud83d\ude2d. Thanks for your patience."},{author:"Anonymous at April 05, 2026",question:"OCG Series 1 and 2 only button from change setting.",answer:"Sorry, I do not have access to the template for older series."},{author:"Anonymous at April 05, 2026",question:"Any reason in particular why the Condense tet in the paragraph style tab isn't saved or at least defaulted like almost everything else is? It's pretty convenient as a feature, or rather I've yet to encounter the use case where less condensation is better.\n\nWhat isn't convenient however is how you have to toggle it each time when your load your save file.",answer:"Hi there, I'm not sure if I fully understand your problem. Do you mean the condense option is not saved when you export the card? From my tests, the condense option is still saved correctly when you export the card, then re-import it later or refresh the page. If you could provide the steps to reproduce the issue (and explain what you expect to happen), it would help me resolve the problem."},{author:"Lukas at March 27, 2026",question:"Thanks to the new Utopia overframe card I noticed that the attributes of both spells/ traps aren't aligned like the monsters attributes. Is that intentional or an error? (I reported before without the screenshot, sorry).",answer:"Hi there, I'm not sure I fully understand your feedback, as all attributes (both monsters and spells/traps) appear to be aligned the same way from what I can see. Compared to the Utopia Overframe card, the attribute is slightly larger and misaligned however, which I have already made some updates to it."},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm\nI forgot to mention that the letter "q" also has a similar height issue compared to other letters like the letter "n" while it is in a long card\'s name \ud83d\ude05\ud83d\ude05\ud83d\ude05'},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm, \nThank you for fixing the height issue of the letter "i" before, but now the issue is back with the letter "n" while it is shifted further down the line compared to the other letters in some long card\'s name such as "Gandora-G the Dragon of Destruction", "Dark Magician the Magician of Black Magic", "Dark Magician Girl the Magician\'s Apprentice".... \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d',answer:"My bad, I have updated the caliberation rule for the letter (again) \ud83d\ude2d\ud83d\ude2d."},{author:"Anonymous at March 19, 2026",question:"I am not sure if this is even feasible, but I think it'd be mighty convenient if there was a feature that allowed you to display the submitted card art mirrored in the card display, to save the bother of mirroring it beforehand.",answer:"Hi, now card artwork / background will allow you to flip the image horizontally / vertically.",image:["https://i.postimg.cc/fT68pVrZ/Screenshot-2026-03-19-at-11-44-37.png"]},{author:"RedSupernovaDragon at March 17, 2026",question:'Hello again, I have some news that could help you in fixing the "name box shrinking issue". I tried to see if it was a common problem on similar sites; I typed the whole alphabet and the numbers on YGOPro and found out that it does not have such a defect: letters in the name box shrink normally, keeping their ratio and heights. As your site is objectively superior to YGOpro in terms of card making, image quality and UI, I was wondering if you could try something more to fix the issue, particularly on pc but mobile version would be nice too.\nNamely, you could do 3 things:\n1. Taking inspiration by how YGOpro managed to code the compression. To be clear, this is *not* an incitation to plagiarism, just a small comparison; maybe DevTools can show you how they coded that specific feature, so you can see if there is any substantial difference in the lines. IDK, but there must be a reason why their carder displays the right text at any length.\n2. You could simply try a different font file. I assume you uploaded fonts on this site, perhaps the rendering problem is due to the otf / ttf / whatever file itself.\n3. Finally, you could focus on mastering the manipulation of curved strokes, what is currently difficult for you. You managed to fix basically every other letter, at least on PC; on mobile there are still some issues even with E and I, but that may be related to my browser.\n\nI regard this issue as much more fundamental than it seems, since it affects basically every card with a (not so) long name created with your site.\nThere has to be a solution, otherwise it would be really sad to keep this defect. I think that details like this matter, even more than other features. A realistic proxy can have some defects that are not visibile at first glance; those defects do not include a letter O that goes Over the top in the name box, which is one of the first things you read on a card.\n\nI tried to give some suggestions, hoping that my words didn\'t sound too bad or out of place. And I also hope that this problem will be solved sooner or later.\nLooking forward to the next updates!',answer:"Thanks, I know how irritating this problem is, and believe me, I've spent quite a while trying to figure something out over the past years. The cause is very clear, rendering the font in large size causes the problem to appear when they are condensed. I just can't find a way to effectively solve it.\nI appreciate your suggestions though, here is what I have done:\n1. Unfortunately, all other card makers (as far as I know) are closed-source, which means I basically cannot access their codebase to see what they are doing at all.\n2. I did try the font from YGOPro card maker and ygocardmaker.net before, but to no avail.\n3. This is my only tactic right now: keep throwing fixes at the wall to see what sticks \ud83d\ude2d.\nAnyway, I have issued another experimental fix for now. If you encounter the problem again (which unfortunately is likely), please attach an image of the app (the report dialog has a screencapture function). It may help me a bit when evaluating any future fixes. Appreciate your help."},{author:"MaSaHo at March 11, 2026",question:"I recently noticed that Yu-Gi-Oh cards have had several small reformulations throughout the life of the game, which they call \u201cSeries\u201d, and your model is equivalent to Series 10 (the current one). Do you have plans to add the older series layouts at some point in the future?",answer:'Hi there, unfortunately that will require access to old series templates as well as a list of changes made over time, which I currently do not have. The app can only support a few limited options (for example, "small" and "large" pendulum frames, or the old position for the "1st Edition" text), but that is about it.'},{author:"Seamornf at March 09, 2026",question:'Hi! Love the work. I found that because traps in portuguese have the longest name of any attribute currently, the last "A" is getting the shadow from the name border.',answer:"I have updated the issue, thanks for your report."},{author:"RedSupernovaDragon at March 07, 2026",question:'Well, it\'s really unlucky for the name box to have those shrinking issues that you cannot fix at the moment. At least the problem was noticed.\nAside from this issue, there is a (very) small UI update you could make: in the frame panel, "Ritual" is currently placed after "Link"; a better position would be between "Effect" and "Fusion", since\n1) Rituals are Main Deck monsters;\n2) they were introduced early along with Fusions;\n3) this "R, F, S, X" order is the most natural, and it\'s found in some cards like the Firewall upgrades..',answer:"Yeah, I'm not the font maker so I can only have limited control over the font rendering. About your recommendation for the ritual frame, it should have been updated now."},{author:"RedSupernovaDragon at March 05, 2026",question:'Thank you very much for making the paragraph box static.\nWonderful fix for the letters! Unfortunately, there are other similar height issue: on "o"/"O", "q", and some of the numbers (namely 1, 2, and 0). When compression is necessary to fit longer names in the box, all of these characters are taller than they should be to fit on a common line.\nIt\'s a really frustrating issue, I know, especially since the font is supposed to be Regular. Thanks in advance for your working on this issue.',answer:"Right now, it is quite difficult for me to handle characters with curved strokes (like the letters O, Q, and the numbers 0, 3, 6, 9), because they actually protrude slightly beyond the normal top/bottom baselines as far as I can investigate. I might double check the bases of numbers 1 and 2, and that may be it. Sorry for the inconvenience."},{author:"RedSupernovaDragon at March 04, 2026",question:'Hello again, about the "i"/"I" issue, I tried to write the whole alphabet (upper and lower case) in the name box and I have to report the same issue for "E" and "N", at least from pc version.',answer:"Now this is really getting out of hand \ud83d\ude2d. I have issued another fix for this."},{author:"RedSupernovaDragon at March 03, 2026",question:"Hello! First off, thank you very much for this cardmaker, I'm new to custom cards but this  carder has already become my favourite.\nI'm using the site on pc, and noticed that when you open the \"Paragraph Style\" section, its width does not stay fixed like the other settings, but it slides to the right until it eventually stops. I was wondering if you could fix this by making it static, since it's kind of difficult to select the things you want while they're moving.\nThank you again for your work!",answer:"The paragraph panel should have fixed width now."},{author:"Yugiohfann at March 03, 2026",question:'Thank you so much for fixing the "i" letter for me, but it seems the issue has been fixed in the Android version, and the PC version still has the "i" letter sometimes positioned higher and sometimes lower \ud83d\ude2d\ud83d\ude2d.',answer:"It's okay, at least something is working \ud83d\ude2d. If possible, please also send me the report from the app on the bugged browser (it seems you send most of your reports from Chrome on a mobile device). The report will include additional information about your browser that may help me investigate further. Sorry for the inconvenience."},{author:"Yugiohfann at March 02, 2026",question:'I use 813x1185 resolution, can you adjust the height of the letter "i" so that it\'s the same height as the other letters in the name box? Thank you.',answer:"I have updated the font a bit, if this does not improve your issue I'm sorry I cannot do much more to help."},{author:"MaSaHo at March 01, 2026",question:"Is there a plan to update the foil border? I mean, adding the rainbow pattern of the new Overframe cards, as well as the assets from the Grand Master version?",answer:"I would love to but right now I am entirely depend on other artists to provide the assets for those first, so I cannot give a clear ETA on that."},{author:"LigerrFanArt at Feb 24, 2026",question:'Hello,\nI noticed a formatting issue with italic text in the effect box (Normal Monster text).\nWhen a line starts directly with a parenthesis, for example:\n"(This card is always treated as an "Archfiend" card.)"\nthe italic formatting does not activate properly.\nTo make the italics work, I have to manually add a space before the "(" at the beginning of the line. However, adding this space causes the text to shift\nslightly and the font size to shrink, as the entire text box appears to be recalculated and resized.\nIt seems like the issue may be related to how the parser handles lines beginning with a parenthesis.\nJust reporting it in case it helps improve the tool.\nThanks for your work!\n\nLigerrFanArt',answer:"I have fixed the issue T.T"},{author:"TheTonyB at Feb 23, 2026",question:"Spell/Trap icon finishes not working with high-res cards.",answer:"I have fixed the issue."},{author:"El Kebabini at Feb 17, 2026",question:"The german Attribute for Dark Finsternis is wrong. It's too condensed.",answer:"I am sorry but that is the only one that I have access to, I will update it if I can but right now it's really hard to get access to attributes for other languages."},{author:"Long at Feb 16, 2026",question:"Why did you change the font color? The default text used to be black, but now it\u2019s gray, and I don\u2019t think this change was necessary.",answer:"I am experimenting with a new color based on high-res official proxy from Konami site, so it may get further adjusted to fit the nature of the app. But you can always change it to pure black in Effect > Text Style. Sorry for the inconvenience."},{author:"LigerrFanArt at Feb 14, 2026",question:"Hi,\nWhen I disable \u201cbest effort render\u201d to get the rainbow effect on my card, it disables ATK / and DEF / in your menu.\nWould it be possible to add a new section next to Foil, with a Rainbow version alongside Gold and Platinum \u2014 unless you\u2019re already working on that?\nI had to manually add ATK / and DEF / in Photoshop myself.\n\nThx\nLigerrFanArt",answer:"Now best effort render option will no longer affect ATK / DEF texts (always display as long as there are values).\nFor rainbow foil unfortunately I am entirely dependent on the assets I can find, and currently I have no access to the frame assets needed for it."},{author:"Anonymous at Jan 25, 2026",question:"I was thinking it would be nice to have the Rainbow border similar to the Prismatic SR OCG Proxies and the Maximum Gold Premium Rare ones",answer:"I would love to do that, unfortunately I have no access to the frame assets needed."},{author:"Gio at Jan 05, 2026",question:"In Trap cards, the words for the card type are very close together because there isn\u2019t enough spacing between the letters (this doesn\u2019t happen in Spell cards). Also, the letter A is slightly taller than the other letters (I haven\u2019t checked if this happens with other letters as well), and the words look a bit uneven.\nIn Monster cards, the line that is right above ATK and DEF is thicker than in the original cards.\nRegards!",answer:"I have updated the font and spacing, as well as reduced the line thickness for ATK/DEF separator for a bit."},{author:"TheTonyB at Jan 04, 2026",question:'Hey, it\'s me again.\n\nSorry. I noticed the positioning of the edition text is off and the font is slightly wrong. \n\nWhen comparing to a real card, the edition text is too much to the right, it should be shifted to the left closer to the passcode.\n\nAbout the font being slightly off, It\'s more noticeable in the Italian, Portuguese and Spanish presets of the edition text. Compared to my real PT cards, the "\xaa" is wrong, it should be higher and be bold and underlined (it\'s not a problem with the text of the presets, it seems to be the font itself).\n\nLooking closer the font actually seems to be different from the real cards. It looks like the shapes of the letters is slightly different. As examples, the top stroke of the loop of the "d" in the real card seems to match the height of the gap betweeen the base of the "i" and the dot, the current font has that stroke matching the height of the base of the "i" right below the gap, making the "d" appear "taller". The shape of the serif of the "c" also looks diferent, but that\'s about what I could notice comparing this to the microscopic text on an actual TCG card\n\nAnd maybe, I\'m not so sure, but in the real cards the font looks slightly thicker too? I might be wrong about this though as it might be the lighting in my room.\n\nThanks in advance!',answer:'I have updated the edition text offset and fix the ordinal letter "\xaa". As for the font itself, currently there is not much I could do right now as finding another font that matches perfectly is quite hard (at least from what I have access to), so I must leave it as is.'},{author:"TheTonyB at Dec 30, 2025",question:"Hey, Lauqerm! Thanks for adding the Portuguese atributes and custom edition text! (Korean coming soon? :))\n\nAnyway, I have another suggestion:\nSince there's already a legacy placement option in adition to regular placement of the edition text, what if we could have two different edition texts simultaneously, one in each position?\n\nI imagine this may be more complicated to implement, but it would open up more customization potential. I don't mind if this feature isn't added though. I can just edit the card in photoshop if I want both texts, this is more of a suggestion than a feature request.\n\nAs always, keep up the good work. Your card maker is absolutely GOATED.",answer:"I have received an asset donation for PT attributes; hopefully, there will be another one for KR soon.\nI have also added an option for text below the image's left corner. Choosing legacy display will simply switch the positions between it and the edition text."},{author:"Anonymous at Dec 30, 2025",question:"I\u2019d like to use the original attributes in Spanish, where the word extends beyond the limits of the sphere, but when I upload my custom attribute the icon gets compressed and flattened. I designed the attributes from the original Spanish cards in case you\u2019d like to replace them. I\u2019ve also noticed that the Effect Monster card color is a slightly darker shade than the original ones. Here is the link with the attribute icons and the different card frame types, in case you\u2019d like to review it. Thank you, and congratulations\u2014this is the best Card Maker I\u2019ve tried: \nhttps://we.tl/t-niKReItUvF\n\n*If you would like me to modify the attributes to a specific resolution or dimensions, or help you with others languages you can write to me at giohesse7@gmail.com",answer:"Custom attribute will now respect the image's ratio when resizing so it no longer get stretched, I also tried some heuristic approach to ensure that it will be at correct position to avoid more complicated manual placement.\nFor the effect monster background though currently I must leave it as is, but thanks for your report."},{author:"Anonymous at Dec 26, 2025",question:"There is an error with the vowel accent marks in Spanish (e.g., \xe1, \xe9, \xed, \xf3, \xfa). It appears that the font does not support the Spanish language, as the accented characters look completely different from the original font. Could you please fix the font for this language?",answer:"I have tweaked the font a bit, hopefully it looks better now."},{author:"Ebrahim at Dec 24, 2025",question:'An option to maybe reduce the size of the "Edition" section similarly the LIMITED EDITION tag.',answer:"It is a bit cumbersome so for now I will just limit the section's maximum width, the text should auto compress if it is too long."},{author:"Blake at Dec 23, 2025",question:"Did you use boundless cause I\u2019m trying to make the object the image go over the card.",answer:"Yeah boundless layout is the main option to use. But the hard thing here is that you need a transparent artwork to combine with it to make a proper overframe card, which the app cannot help.\nIn any case I plan to readjust the option a bit for more clarity, and also add sample cards for easy demonstration."},{author:"Ebrahim at Dec 23, 2025",question:"when I click on the xyz background template the 1st Edition text is in black not white and it's hard to see please fix immediately.",answer:"It's done, the text should display properly now."},{author:"A-Rex at Dec 22, 2025",question:"Me gustar\xeda poder colocar 1a edici\xf3n\nPero en su lugar aparece 1st Edition\nQuisiera poder poner manualmente eso."},{author:"Ralph at Dec 22, 2025",question:"quisiera poner la marca 1a edici\xf3n\npero en su lugar pone 1st edition\nme gustar\xeda poder al menos colocarla manualmente.",answer:"I have implemented a customizable edition text with predefined options, you may try it now."},{author:"Blake at Dec 21, 2025",question:"When are you going to be adding the overframe rare?",answer:"With Layout options the app is already able to create cards with extended art (see attached image), but I will need to tweak some behaviors so it looks more correct.\nGrandmaster Rare however is a different story, as it use an entirely different set of layers and I can only wait for talented artists to extract them.",image:["https://i.imgur.com/a6ZlmEg.png"]},{author:"Blake at Dec 18, 2025",question:"I can\u2019t download the card with a new attribute."},{author:"Blake at Dec 18, 2025",question:"It won\u2019t let me upload the card with a custom attribute.",answer:"Hi there, the app will now correctly show what is happening. In short, this is a security feature of your browser (not the app) that protect you from potential dangers of the image link, so you must manually download the image."},{author:"TOVYA at Dec 13, 2025",question:"Ch\xe0o b\u1ea1n, b\u1ea1n c\xf3 th\u1ec3 th\xeam v\xe0o h\u01b0\u1edbng d\u1eabn c\xe1ch ch\u1ea1y project n\xe0y c\u1ee7a b\u1ea1n b\u1eb1ng Docker trong README.md kh\xf4ng \xe1?",answer:"Done nha."},{author:"Anonymous User at Dec 13, 2025",question:"would it be possible to add the ability to upload custom attribute icons?",answer:"Right now I can only support using external link for attribute, so you can upload your custom attribute icon to an image hosting service (e.g., imgur) and use the link in the attribute input box.",image:["https://i.postimg.cc/cJMFW3M1/image.png"]},{author:"TheTonyB at Dec 12, 2025",question:'I noticed Korean and Portuguese are missing from Attributes languages. Can you add those? Specially portuguese which is my main language.\nCould you also add other language options to the "1st Edition"/"Limited Edition" text or allow for a custom text?\nThanks and keep up the great work!',answer:"Hi there, unfortunately I have no access to those language sprites, so I cannot add them at the moment (somehow Yugipedia does not have attributes in Portugese and Korean even though they have the rest of official supported languages)."},{author:"Anonymous User at Dec 04, 2025",question:"Hello! I've noticed there's a problem with these 3 new cards :\nMagnet Warrior \u03a3\uff0d\nMagnet Warrior \u03a3\uff0b\nMagnet Warrior \u03a9+\n\nI've noticed that Konami is using new characters, and unfortunately, they're not displaying correctly for creating cards. Could you please fix this?\nThanks in advance.\nLigerrFanArt",answer:"Because those cards do not have an offical TCG version yet, so I will just import OCG font for this case."},{author:"I have assets to donate! at Oct 23, 2025",question:"Konami's new Genesys card searcher initially had high-resolution renders of all cards. I snagged a few before they \"fixed\" it (now their images are low-res again...) and used them to correct all the card frames, bevels, level stars, text boxes, fonts, and even text colors. I'm talking major corrections that took me hours since I'm not very efficient in Photoshop.\nAt the very least, your current Spell and Synchro frames need updating. Not only are the colors off, but there's actually an artifactual defect running across the entire right edge that you inherited from 9558able's frames (it's actually on all of them, but most visible on the Spell frame).\nAs far as I can tell, my updated assets now produce the most accurate proxies anywhere. I would like to donate them! I don't see a way to email you, but please email me at *******88@gmail.com if you're interested.\nI can reply with specifics and send you some comparisons.",answer:"Hi there, thanks for your generosity. I have already emailed you at Oct 24, hopefully I can make some good use out of it."},{author:"Anonymous User at Oct 08, 2025",question:"Missed you so much bro its been a month",answer:"Me too, me too."},{author:"Anonymous User at Sep 28, 2025",question:"For some reason, the border changes depending on the card type even though it's set to Default",answer:"It seems like the card border is not loaded yet, so it exposes the underlying frame. I have replicate your card but does not see the same issue, does the problem still persist?"},{author:"Anonymous User at Sep 26, 2025",question:"hi m8. luv your work. i was thinking about two things. maybe 1 option for anime cards like in Vrains. another option to adjust the colour and saturation of the card frame. thks again for your work",answer:"Hi there, currently I do not have time needed for new templates, but for the color option, have you checking out the Advanced Layout option? If will allow you to change current frame's color at will, which seem suitable for your use-case."},{author:"Elttaest the Master of Duels at Sep 18, 2025",question:"Hi. Love your work, just wondering - with Elttaes, the Master of Duels and Dragon of Illumination, Sanctuary's Shield, shouldn't we have enough data to make Rush Duel cards in English as well? The font seems the same in both English and Japanese. And the card name seems the same used in TCG, although I can't really make out what the Japanese font is. Sorry again for this. Just curious. Thanks for your time",answer:"Hi there, you are right that both cards can be used as a template for Rush Duel cards, but the main problem before the template itself is that currently I don't have enough resources for such project right now, so I can't promise anything at this moment. I will keep this in mind and see if I can do it in the future."},{author:"Armando Giordano at Sep 06, 2025",question:'Thank you for your quick response and for your astonishing work with the Carder. Yes, I am using an iPad and a phone, and, with both devices, when I click on the Download button, it just shows "Saving..." for a second, then no Download starts. I am now on a computer and it works great with left click and "Save as", though it would be nice to be able to use it on mobile.'},{author:"Armando Giordano at Sep 06, 2025",question:"Sorry for second report in a row! I noticed you asked me specific questions. 1 The App does NOT freeze when trying to download on iPad and Android phone. Just no download starts. 2 The problem was immediately experienced because I discovered the Carder just yesterday.",answer:"Now it's a bit strange; usually, if the export process encounters an error, an explicit message will be displayed. In this case, if the download process is already running but no files are downloaded, it could be that your mobile browser is blocking the automatic download due to some advance security settings. All mobile devices I have tested so far do not exhibit the same issue. I will try to investigate this further, but chances are I won't be able to resolve it if I cannot reproduce the issue. Sorry for the inconvenience."},{author:"Armando Giordano at Sep 06, 2025",question:"Hello! I am loving your work. I hope my issue is not because of ignorance, but it seems like it's not possible to download cards as images.",answer:"Hi there, based on the report it seems that you are using an iPad. I don't have an iPad to test right now, but could you please provide me some more information?\n1. When you click the Download button, does anything happen? Does the app freeze or it just not doing anything?\n2. Is the problem just appear recently, or it never worked in the first place?",image:["https://i.postimg.cc/Y2fjyvV2/image.png"]},{author:"Rush Duel at Jun 22, 2025",question:"This card maker is amazing! Have you ever consider doing a rush duel section as well?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."}].map((e,t)=>{let{author:a,question:r,answer:n,image:i}=e;return Object(g.jsx)(bs,{author:a,question:r,image:i,children:n},t)})]},"feedback"),Object(g.jsx)(us.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'},{question:"Will you make another version for Rush Duel cards?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."}].map((e,t)=>{let{question:a,answer:r}=e;return Object(g.jsx)(bs,{question:a,children:r},t)})},"faq")]})})]})};var gs=a(601),fs=a(639);const vs=h.b.div`
    --max-image-height: ${60}px;
    display: grid;
    grid-template-rows: ${60}px 22px 1fr;
    text-align: center;
    .image-preview {
        align-content: space-around;
        height: var(--max-image-height);
        img {
            max-width: ${140}px;
            max-height: var(--max-image-height);
        }
    }
    .image-info {
        display: flex;
        gap: var(--spacing-xxs);
        align-items: center;
        .image-name {
            flex: 1 1 auto;
        }
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-edit:hover {
                color: var(--sub-info);
            }
        }
    }
`,ys=e=>{let{language:t,imagePreset:a,onDelete:r,onEdit:n}=e;const{src:i,name:o,width:l,height:s,offsetX:c,offsetY:d}=a,u="number"===typeof c?c>0?`+${c}`:c:"0",m="number"===typeof d?d>0?`+${d}`:d:"0";return Object(g.jsxs)(vs,{children:[Object(g.jsx)("div",{className:"image-preview",children:Object(g.jsx)("img",{src:i,alt:o})}),Object(g.jsxs)("div",{children:[null!==l&&void 0!==l?l:"auto"," \xd7 ",null!==s&&void 0!==s?s:"auto","number"===typeof c||"number"===typeof d?` (${u}, ${m})`:null]}),Object(g.jsxs)("div",{className:"image-info",children:[Object(g.jsx)("div",{className:"image-name",children:Object(g.jsx)(Al,{data:o,container:zl,children:o})}),r&&Object(g.jsx)(gs.a,{title:t["generic.delete.label"],okText:t["generic.yes.label"],cancelText:t["generic.no.label"],onConfirm:()=>r(),children:Object(g.jsx)(Vo.a,{})}),n&&Object(g.jsx)(fs.a,{onClick:()=>n()})]})]})};var xs=a(640);const js=h.b.div`
    line-height: 0;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
        cursor: pointer;
        min-height: 23.2px;
        &.menu-active {
            outline: var(--bw-lg) solid var(--main-active);
            &:hover {
                outline: var(--bw-lg) solid var(--sub-active);
            }
        }
        :hover {
            outline: var(--bw-lg) solid var(--sub-active);
        }
    }
    &.menu-off {
        &:hover {
            color: var(--main-link);
            .anticon {
                color: var(--main-link);
            }
        }
    }
    img {
        max-width: 100%;
        border: var(--bw) solid var(--sub-level-1);
    }
`,Os=140,ws=h.b.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: var(--spacing-xs);
    align-items: center;
    .canvas-container {
        width: ${Os}px;
        height: ${30}px;
        box-shadow: var(--bs-1);
    }
    .preset-option-action {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-xxs);
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-save:hover {
                color: var(--sub-info);
            }
        }
    }
`,ks=e=>{let{frameInfo:t,presetContent:a,active:n=!1,language:i,onOverwrite:o,onActive:l,onDelete:s}=e;const{format:c,foil:d}=fn(Object(kn.useShallow)(e=>{let{card:{format:t,foil:a}}=e;return{format:t,foil:a}})),u=Object(r.useRef)(null),{name:m,labelBackgroundColor:p,labelBackgroundImage:b}=null!==t&&void 0!==t?t:{},h=null!==m&&void 0!==m?m:"effect";return Object(r.useEffect)(()=>{const e=u.current,t=null===e||void 0===e?void 0:e.getContext("2d");if(e&&t){t.clearRect(0,0,Os,30);const{font:r}=a;Ei(e,t,"OCG"===r?"{\u30ab\u30fc\u30c9\u540d|\u304b\u30fc\u3069\u3081\u3044}":"Card Name","OCG"===r?65:12,"OCG"===r?65:60,350,sr({foil:d,format:c,frame:h,nameStyle:a,nameStyleType:"custom"}),{frame:h,format:c,furiganaHelper:!1,globalScale:.4,isSpeedSkill:!0})}},[d,c,h,a]),Object(g.jsxs)(ws,{className:Ko("preset-option",n?"menu-active":""),children:[Object(g.jsx)(js,{className:Ko("canvas-container",l?"":"menu-off"),onClick:l,style:{background:p,backgroundImage:b},children:Object(g.jsx)("canvas",{ref:u,width:Os,height:30})}),Object(g.jsxs)("div",{className:"preset-option-action",children:[s&&Object(g.jsx)(gs.a,{title:i["generic.delete.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>s(),children:Object(g.jsx)(Vo.a,{})}),o&&Object(g.jsx)(gs.a,{title:i["generic.overwrite.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>o(),children:Object(g.jsx)(xs.a,{})})]})]})},Ss=h.b.div`
    /** Ensure even width */
    --layout-width: ${e=>2*Math.round(e.$width/2)}px;
    --layout-height: ${e=>e.$height}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
    ${e=>e.$hoverable?"cursor: pointer;":""}
    &.is-vertical {
        margin-bottom: var(--spacing-3xl);
        .float-layout.foil {
            width: 100%;
            left: 0;
            bottom: -22.5%;
            font-size: var(--fs-sm);
            background-color: var(--main-level-1);
        }
    }
    &.is-horizontal {
        margin-right: var(--spacing-lg);
        .float-layout.foil {
            width: 50%;
            height: 80%;
            top: 10%;
            right: -60%;
            font-size: 0;
            background-color: var(--main-level-1);
        }
    }
    button {
        border: none;
    }
    .overlay-patch {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .dye-patch {
        position: absolute;
        z-index: 1;
        top: 10%;
        left: 50%;
        min-width: 6px;
        min-height: 6px;
        width: ${e=>e.$width/6}px;
        height: ${e=>e.$width/6}px;
        border-radius: var(--br-lg);
        transform: translateX(-50%);
    }
    .card-layout {
        position: absolute;
        ${e=>e.$layoutHoverable?"cursor: pointer;":""}
        padding: 0;
        &.unmodified .overlay-patch {
            background: var(--gradient-diagonal-stripe);
        }
    }
    .partial-layout {
        background-clip: padding-box;
        ${e=>e.$layoutHoverable?"\n                border: var(--bw) solid var(--main-level-1);\n                &.active {\n                    border: var(--bw) dashed var(--main-level-1);\n                }\n                &:hover {\n                    border: var(--bw) dashed var(--main-level-2);\n                }\n            ":""}
    }
    .float-layout {
        ${e=>e.$layoutHoverable?"\n                border: var(--bw) solid var(--main-level-1);\n                &.active {\n                    border: var(--bw) dashed var(--main-level-2);\n                    box-shadow: 0 0 1px 0 var(--main-level-1);\n                }\n                &:hover {\n                    border: var(--bw) solid var(--main-level-2);\n                    box-shadow: 0 0 1px 0 var(--main-level-1);\n                }\n            ":""}
    }
    /** For Zarc's gradient */
    .partial-layout {
        background-size: 200%;
    }
    .top-left {
        width: 50%; height: 50%;
        top: 0; left: 0;
    }
    .top-right {
        width: 50%; height: 50%;
        top: 0; left: 50%;
        background-position-x: 100%;
    }
    .bottom-left {
        width: 50%; height: 50%;
        top: 50%; left: 0;
    }
    .bottom-right {
        width: 50%; height: 50%;
        top: 50%; left: 50%;
        background-position-x: 100%;
    }
    /** Background width is slightly reduced to help active bottom frames easier */
    .effect-background {
        width: 80%;
        height: 20%;
        bottom: 5%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
    .pendulum-effect-background {
        width: 80%;
        height: 13%;
        bottom: 28%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
`,Cs=e=>{var t;let{tabIndex:a=0,width:r,height:n,baseLayoutState:i,resolvedLayoutState:o,isPendulum:l,activeLayout:s,dyeList:c,foil:d,onClick:u,onLayoutSelect:m,language:p,vertical:b=!1}=e;return Object(g.jsxs)(Ss,{$width:r,$height:n,$layoutHoverable:!!m,$hoverable:!!u,onClick:u,className:Ko("card-layout-container",b?"is-vertical":"is-horizontal"),children:[[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map(e=>{var t;let{className:n,key:d}=e;const u=o[d],p=null==S[d]?void 0:c[S[d]];if(!u)return null;if(!l&&"pendulumEffectBackground"===d)return null;const{labelBackgroundColor:b,labelBackgroundImage:h}=null!==(t=Ue[u])&&void 0!==t?t:{};return Object(g.jsx)("button",{...a<0?{}:{tabIndex:a},className:Ko(n,d===s?"active":"","auto"===(null===i||void 0===i?void 0:i[d])?"unmodified":""),onClick:()=>null===m||void 0===m?void 0:m(d),style:h?{backgroundImage:h}:{backgroundColor:b},children:Object(g.jsx)("div",{className:"overlay-patch",style:p?{boxShadow:`0 0 0 ${Math.round(r/16)}px ${p} inset`}:{}})},d)}),Object(g.jsx)("button",{...a<0?{}:{tabIndex:a},className:Ko("card-layout float-layout foil","foil"===s?"active":""),onClick:()=>null===m||void 0===m?void 0:m("foil"),style:{boxShadow:`0 0 0 2px ${pr.test(c[S.foil])?c[S.foil]:null===(t=w[d])||void 0===t?void 0:t.color} inset`},children:p["input.foil.label"]})]})},Fs=h.b.div`
    text-align: center;
    .layout-preset-option-action {
        line-height: 1.25;
        text-align: center;
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-save:hover {
                color: var(--sub-info);
            }
            + .anticon {
                margin-left: var(--spacing-xs);
            }
        }
    }
`,Ls=e=>{let{onActive:t,onDelete:a,onOverwrite:r,language:n,...i}=e;return Object(g.jsxs)(Fs,{className:"frame-preset-option",children:[Object(g.jsx)("div",{className:"preview-container",onClick:t,children:Object(g.jsx)(Cs,{...i,language:n})}),Object(g.jsxs)("div",{className:"layout-preset-option-action",children:[a&&Object(g.jsx)(gs.a,{title:n["generic.delete.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:a,children:Object(g.jsx)(Vo.a,{})}),r&&Object(g.jsx)(gs.a,{title:n["generic.overwrite.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:()=>r(),children:Object(g.jsx)(xs.a,{})})]})]})};var Ts=a(615),Is=a(619),Ns=a(602),Rs=a(603),Es=a(627);const Ms=Object(h.b)(Ts.a.Item)`
    &.ant-form-item {
        margin-bottom: calc(-3/2 * var(--spacing));
        margin-top: var(--spacing);
        margin-left: calc(-3/2 * var(--spacing));
        margin-right: calc(-3/2 * var(--spacing));
        padding: var(--spacing);
        border-top: var(--bw) solid var(--sub-level-1);
        .ant-form-item-control-input-content {
            display: flex;
            justify-content: end;
            gap: var(--spacing);
        }
    }
`,zs=Object(r.forwardRef)((e,t)=>{let{onSubmit:a,onEdit:n,language:i}=e;const[o]=Ts.a.useForm(),[l,s]=Object(r.useState)(""),[c,d]=Object(r.useState)(!1),u=()=>{d(!1),s(""),o.resetFields()};return Object(r.useImperativeHandle)(t,()=>({edit:(e,t)=>{o.setFieldsValue(t),s(e),d(!0)}})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(tl.a,{className:"formatting-help-button",type:"primary",size:"small",onClick:()=>{d(!0)},children:i["preset.form.image.add.label"]}),Object(g.jsx)(Uo.a,{visible:c,width:400,className:"global-overlay",footer:()=>null,onCancel:()=>u(),children:Object(g.jsxs)(Ts.a,{form:o,name:"image-preset",layout:"vertical",size:"middle",onFinish:e=>{"string"===typeof l&&""!==l?n(l,e):a(e),u()},onFinishFailed:()=>{Hr.a.error({message:i["error.preset-import.message"],description:i["error.preset-import.description"]})},autoComplete:"off",children:[Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.src.label"],name:"src",rules:[{required:!0,message:i["form.required"]}],children:Object(g.jsx)(Is.a,{})}),Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.name.label"],name:"name",rules:[{required:!0,message:i["form.required"]}],children:Object(g.jsx)(Is.a,{})}),Object(g.jsx)("div",{children:i["form.default"]}),Object(g.jsxs)(Ns.a,{gutter:10,children:[Object(g.jsx)(Rs.a,{span:12,children:Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.width.label"],name:"width",children:Object(g.jsx)(Es.a,{step:1,min:0,max:800})})}),Object(g.jsx)(Rs.a,{span:12,children:Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.height.label"],name:"height",children:Object(g.jsx)(Es.a,{step:1,min:0,max:800})})})]}),Object(g.jsxs)(Ns.a,{gutter:10,children:[Object(g.jsx)(Rs.a,{span:12,children:Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.offset-x.label"],name:"offsetX",children:Object(g.jsx)(Es.a,{step:1,min:-200,max:200})})}),Object(g.jsx)(Rs.a,{span:12,children:Object(g.jsx)(Ts.a.Item,{label:i["preset.form.image.offset-y.label"],name:"offsetY",children:Object(g.jsx)(Es.a,{step:1,min:-200,max:200})})})]}),Object(g.jsxs)(Ms,{children:[Object(g.jsx)(tl.a,{onClick:()=>u(),children:i["form.dismiss"]}),Object(g.jsx)(tl.a,{type:"primary",htmlType:"submit",children:i["form.submit"]})]})]})})]})}),{width:As,height:Ds}=c,Ps=Object(h.b)(Uo.a)`
    .import-review-title {
        margin-bottom: var(--spacing-xs);
    }
    .import-action-table {
        width: 100%;
        table-layout: fixed;
        background-color: #494949;
        th,
        td {
            border: var(--bw) solid var(--sub-level-4);
            padding: var(--spacing-xs);
            &:nth-child(1) {
                width: 150px;
            }
            &:nth-child(2) {
                width: 150px;
            }
        }
        .action-panel {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: var(--spacing-xs);
        }
        .import-action-row {
            &.keep-old {
                td:nth-child(1) {
                    background-color: var(--main-level-4);
                }
            }
            &.keep-new {
                td:nth-child(2) {
                    background-color: var(--main-level-4);
                }
            }
            &.keep-both {
                td:nth-child(1),
                td:nth-child(2) {
                    background-color: var(--main-level-4);
                }
            }
        }
    }
`,Hs=e=>{let{language:t,isPendulum:a,frameInfo:n,importData:i,onCancel:o}=e;const{db:l}=On(),[s,c]=Cn("nameStylePresetList"),[d,u]=Cn("layoutPresetList"),{layoutPresetMap:m,nameStylePresetMap:p}=Object(r.useMemo)(()=>({nameStylePresetMap:s.reduce((e,t)=>(e[t.key]=t,e),{}),layoutPresetMap:d.reduce((e,t)=>(e[t.key]=t,e),{})}),[d,s]),{layoutPresetList:b=[],nameStylePresetList:h=[]}=i,[f,v]=Object(r.useState)(()=>({layoutPresetMap:b.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{}),nameStylePresetMap:h.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{})}));return Object(g.jsxs)(Ps,{visible:!0,width:700,maskClosable:!1,okText:t["preset.button.import.label"],cancelText:t["preset.button.discard.label"],onCancel:o,onOk:async()=>{const e=Object.values(f.layoutPresetMap),t=Object.values(f.nameStylePresetMap),a={},r=[],n=[];if(e.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:i,verdict:o}=e;if(r.push({key:t,content:i}),null==m[t]&&"keep-new"===o)n.push({key:t,content:i});else if("keep-both"===o){const e=Object(ue.a)();n.push({key:e,content:i})}else a[t]={key:t,content:i}}),l){const e=l.transaction("presetLayoutStore","readwrite");for(const{key:t,content:a}of r)await l.put("presetLayoutStore",{key:t,content:JSON.stringify(a)});await e.done}u(e=>[...e.map(e=>a[e.key]?a[e.key]:e),...n]);const i={},s=[],d=[];if(t.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:a,verdict:r}=e;if(s.push({key:t,content:a}),null==p[t]&&"keep-new"===r)d.push({key:t,content:a});else if("keep-both"===r){const e=Object(ue.a)();d.push({key:e,content:a})}else i[t]={key:t,content:a}}),l){const e=l.transaction("presetNameStyleStore","readwrite");for(const{key:t,content:a}of s)await l.put("presetNameStyleStore",{key:t,content:JSON.stringify(a)});await e.done}c(e=>[...e.map(e=>i[e.key]?i[e.key]:e),...d]),o()},children:[Object(g.jsxs)("div",{className:"import-review-title",children:[Object(g.jsx)("h2",{children:t["preset.review-title.label"]}),t["preset.review-description"]]}),Object(g.jsx)("table",{className:"import-action-table",children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{className:"import-action-row import-header-row",children:[Object(g.jsx)("th",{className:"header-row",children:t["preset.review-table.current.label"]}),Object(g.jsx)("th",{className:"header-row",children:t["preset.review-table.new.label"]}),Object(g.jsx)("th",{className:"header-row",children:t["preset.review-table.action.label"]})]}),h.map(e=>{var a;let{key:r,content:i}=e;const o={language:t,frameInfo:n},l=null===(a=p[r])||void 0===a?void 0:a.content,s=f.nameStylePresetMap[r].verdict;return Object(g.jsxs)("tr",{className:Ko("import-action-row",s),children:[Object(g.jsx)("td",{className:"current-version",children:l&&Object(g.jsx)(ks,{...o,presetContent:l,children:l.preset})}),Object(g.jsx)("td",{className:"new-version",children:Object(g.jsx)(ks,{...o,presetContent:i,children:i.preset})}),Object(g.jsx)("td",{className:"action-list",children:Object(g.jsxs)("div",{className:"action-panel",children:[Object(g.jsx)(tl.a,{size:"small",type:"keep-old"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-old"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(g.jsx)(tl.a,{size:"small",type:"keep-new"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-new"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),l&&Object(g.jsx)(tl.a,{size:"small",type:"keep-both"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-both"},{...e,nameStylePresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},r)}),b.map(e=>{var r,n,i,o,l;let{key:s,content:c}=e;const d={width:Math.round(40*As/Ds),height:40,isPendulum:a,tabIndex:-1,language:t},u=null===(r=m[s])||void 0===r?void 0:r.content,p=f.layoutPresetMap[s].verdict;return Object(g.jsxs)("tr",{className:Ko("import-action-row",p),children:[Object(g.jsx)("td",{className:"current-version",children:u&&Object(g.jsx)(Ls,{resolvedLayoutState:lr({frame:u.frame,topLeftFrame:u.leftFrame,topRightFrame:u.rightFrame,bottomLeftFrame:u.pendulumFrame,bottomRightFrame:u.pendulumRightFrame,effectBackground:null===(n=u.effectStyle)||void 0===n?void 0:n.background,pendulumEffectBackground:null===(i=u.pendulumStyle)||void 0===i?void 0:i.background},a),dyeList:u.dyeList,foil:u.foil,...d})}),Object(g.jsx)("td",{className:"new-version",children:Object(g.jsx)(Ls,{resolvedLayoutState:lr({frame:c.frame,topLeftFrame:c.leftFrame,topRightFrame:c.rightFrame,bottomLeftFrame:c.pendulumFrame,bottomRightFrame:c.pendulumRightFrame,effectBackground:null===(o=c.effectStyle)||void 0===o?void 0:o.background,pendulumEffectBackground:null===(l=c.pendulumStyle)||void 0===l?void 0:l.background},a),dyeList:c.dyeList,foil:c.foil,...d})}),Object(g.jsx)("td",{className:"action-list",children:Object(g.jsxs)("div",{className:"action-panel",children:[Object(g.jsx)(tl.a,{size:"small",type:"keep-old"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-old"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(g.jsx)(tl.a,{size:"small",type:"keep-new"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-new"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),u&&Object(g.jsx)(tl.a,{size:"small",type:"keep-both"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-both"},{...e,layoutPresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},s)})]})})]})},Ws=Object(h.b)(Vl)`
    .ant-drawer-body {
        padding: var(--spacing);
    }
    .preset-list {
        margin-top: var(--spacing);
        padding-top: var(--spacing);
        border-top: var(--bw) solid var(--main-level-1);
    }
    .image-preset-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-sm);
    }
    .overlay-title {
        display: grid;
        grid-template-columns: 1fr max-content;
        line-height: 1;
    }
    .name-style-preset-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-sm);
    }
    .layout-preset-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
        gap: var(--spacing-sm);
    }
    .action-list {
        margin-top: var(--spacing);
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: var(--spacing-sm);
        .import-upload-input {
            display: none;
        }
    }
    label {
        display: block;
        grid-column: -1 / 1;
    }
`,Bs=e=>{let{language:t}=e;const{setVisible:a,visible:n}=ro(Object(kn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),{frame:i,isPendulum:o}=fn(Object(kn.useShallow)(e=>{let{card:{frame:t,isPendulum:a}}=e;return{frame:t,isPendulum:a}})),{db:l}=On(),[s,c]=Cn("nameStylePresetList"),[d,u]=Cn("layoutPresetList"),[m,p]=Cn("imagePresetList"),[b,h]=Object(r.useState)({visible:!1,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[]}),f=Ue[i],[v,y]=Object(r.useState)(0),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O="preset-import-direct-upload";return Object(g.jsxs)(Ws,{footer:null,width:345,visible:n,title:Object(g.jsxs)("div",{className:"overlay-title",children:[Object(g.jsx)("span",{children:t["preset.manager.label"]}),Object(g.jsx)(Vo.a,{onClick:()=>{a(!1)}})]}),onClose:()=>{a(!1)},children:[Object(g.jsx)("div",{children:t["preset.warning.label"]}),Object(g.jsxs)("div",{className:"action-list",children:[Object(g.jsx)(tl.a,{size:"small",onClick:()=>{const e=JSON.stringify({layoutPresetList:d,nameStylePresetList:s}),t=new Blob([e],{type:"application/json"});no("preset.json",t,"application/json")},children:t["generic.export.label"]}),Object(g.jsxs)(tl.a,{size:"small",onClick:()=>{const e=document.getElementById(O);e&&e.click()},children:[t["generic.import.label"],Object(g.jsx)("input",{ref:x,type:"file",id:O,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;(e=>{if(e)for(let a=0;a<=e.length;a++){const r=e.item(a);if(!r)continue;const n=new FileReader;n.onload=e=>{let{target:a}=e;if(!a)return;const{result:r}=a;if("string"===typeof r)try{const{layoutPresetList:e,nameStylePresetList:t,imagePresetList:a}=JSON.parse(r);h({visible:!0,layoutPresetList:e,nameStylePresetList:t,imagePresetList:a})}catch(n){console.error(n),Hr.a.error({description:t["error.preset-import.description"],message:t["error.preset-import.message"]})}},n.readAsText(r);break}y(e=>e+1)})(null===(e=x.current)||void 0===e?void 0:e.files)}},`direct-file-input-${v}`)]})]}),Object(g.jsxs)("div",{className:"preset-list name-style-preset-list",children:[Object(g.jsx)("label",{children:t["preset.instruction.name-style.label"]}),s.map(e=>{let{key:a,content:r}=e;return Object(g.jsx)(ks,{language:t,frameInfo:f,presetContent:r,onDelete:async()=>{if(l){const e=l.transaction("presetNameStyleStore","readwrite");await l.delete("presetNameStyleStore",a),await e.done}c(e=>e.filter(e=>e.key!==a))},children:r.preset},a)})]}),Object(g.jsxs)("div",{className:"preset-list layout-preset-list",children:[Object(g.jsx)("label",{children:t["preset.instruction.advanced-frame.label"]}),d.map(e=>{let{content:a,key:r}=e;const{dyeList:n,foil:i,frame:s,pendulumFrame:c,leftFrame:d,pendulumRightFrame:m,rightFrame:p,effectStyle:b,pendulumStyle:h}=a,f={frame:s,topLeftFrame:d,topRightFrame:p,bottomLeftFrame:c,bottomRightFrame:m,effectBackground:null===b||void 0===b?void 0:b.background,pendulumEffectBackground:null===h||void 0===h?void 0:h.background};return Object(g.jsx)(Ls,{width:Math.round(40*As/Ds),height:40,isPendulum:o,resolvedLayoutState:lr(f,o),tabIndex:-1,dyeList:n,foil:i,language:t,onDelete:async()=>{if(l){const e=l.transaction("presetLayoutStore","readwrite");await l.delete("presetLayoutStore",r),await e.done}u(e=>e.filter(e=>{let{key:t}=e;return r!==t}))}},r)})]}),Object(g.jsxs)("div",{className:"preset-list image-preset-list",children:[Object(g.jsxs)("label",{children:[t["preset.instruction.image.label"],"\xa0",Object(g.jsx)(zs,{ref:j,language:t,onSubmit:async e=>{const t=Object(ue.a)();if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:t,content:JSON.stringify(e)}),await a.done}p(a=>[...a,{key:t,content:{...e}}])},onEdit:async(e,t)=>{if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:e,content:JSON.stringify(t)}),await a.done}p(a=>a.map(a=>a.key===e?{key:e,content:{...t}}:a))}}),Object(g.jsx)("br",{}),t["preset.instruction.image.head-up.label"]]}),m.map(e=>{let{key:a,content:r}=e;return Object(g.jsx)(ys,{language:t,imagePreset:r,onDelete:async()=>{if(l){const e=l.transaction("presetImageStore","readwrite");await l.delete("presetImageStore",a),await e.done}p(e=>e.filter(e=>{let{key:t}=e;return a!==t}))},onEdit:()=>{var e;null===(e=j.current)||void 0===e||e.edit(a,r)}},a)})]}),b.visible&&Object(g.jsx)(Hs,{onCancel:()=>h(e=>({...e,visible:!1})),importData:b,frameInfo:f,isPendulum:o,language:t})]})},{height:$s,width:Ys}=c,Ks=Object(h.b)(Uo.a)`
    .ant-modal-close-x {
        display: none;
    }
    .sample-container {
        width: 100%;
        table-layout: fixed;
        background-color: #494949;
        th,
        td {
            border: var(--bw) solid var(--sub-level-4);
            padding: var(--spacing-xs) var(--spacing-sm);
            &:nth-child(1) {
                width: 150px;
            }
            &:nth-child(2) {
                vertical-align: top;
            }
        }
        td {
            &:nth-child(1) {
                padding: var(--spacing-xs);
                img {
                    --thumb-size: 140px;
                    max-width: var(--thumb-size);
                    height: calc(var(--thumb-size) / ${Ys} * ${$s});
                }
            }
        }
    }
`,Us=Object(r.forwardRef)((e,t)=>{let{language:a,applyCardData:n}=e;const[i,o]=Object(r.useState)(!1),{updateSetting:l}=yn(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}});return Object(r.useImperativeHandle)(t,()=>({open:()=>o(!0)})),Object(g.jsxs)(Ks,{visible:i,onCancel:()=>o(!1),okButtonProps:{style:{display:"none"}},cancelText:a["form.dismiss"],children:[Object(g.jsx)("div",{children:a["sample.manager.creative-requires.label"]}),Object(g.jsx)("br",{}),Object(g.jsx)("table",{className:"sample-container",children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsx)("b",{children:a["sample.manager.header.image.label"]})}),Object(g.jsx)("th",{children:Object(g.jsx)("b",{children:a["sample.manager.header.description.label"]})})]}),[{image:"https://i.postimg.cc/SQDcs87c/image.png",description:"Sample card with custom background and overframe artwork.",value:'{"fm":"tcg","rg":"en","fr":"ritual","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":40,"opnm":100,"opbf":"#0062b1","opab":true,"opnb":true,"opeb":true,"opfb":true,"opbl":true},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Blue-Eyes Chaos MAX Dragon","nst":"custom","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":180,"nscg":"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6","nshg":true,"nshl":true,"nshs":true,"nshfs":"#000000","nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"animeSilver","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"DARK","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/msWo4gh.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":0.686,"arx":34.1036977491961,"ary":32.5614067055394,"arw":44.05144694533762,"arh":49.92711370262391},"hbg":true,"bg":"https://i.postimg.cc/SK4CtGfY/image.png","bgd":"","bf":false,"bgs":"online","bgt":"strict","bgc":{"bgu":"%","bga":1,"bgx":0,"bgy":0,"bgw":100,"bgh":100},"lm":["1","3","7","9"],"lr":"","il":null,"ip":false,"pf":"auto","pe":"","rs":"4","bs":"4","psi":"medium","ta":["Dragon","Ritual","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"You can Ritual Summon this card with \\"Chaos Form\\". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent\'s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.","si":"LDS2-EN016","atk":"4000","def":"0","pw":"55410871","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/Ss0JTL0H/image.png",description:"Sample card with custom image as frame background, custom levels alignment and small pendulum effect's text box.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"platinum","op":{"opbd":100,"oppd":100,"optx":100,"opnm":80,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Malefic Paradulum Dragon","nst":"auto","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":0,"nscg":"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf","nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#000000","nslox":0,"nsloy":0,"nslw":0,"nspt":"none","nspr":"commonB","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"DARK","att":"auto","sf":"NO ICON","it":"auto","st":10,"stl":["level","level","level","level",null,"negative-level","negative-level","negative-level",null,"rank","rank","rank","rank"],"sa":"center","ar":"https://i.imgur.com/cQcxyRQ.jpeg","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1.236,"arx":0,"ary":0,"arw":100,"arh":80.9061488673139},"hbg":true,"bg":"https://i.imgur.com/WpXf0GI.png","bgd":"","bf":false,"bgs":"online","bgt":"frame","bgc":{"bgu":"%","bga":0.686,"bgx":15.449999999999998,"bgy":0,"bgw":68.60000000000001,"bgh":100},"lm":["1","9","3","7"],"lr":"","il":false,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 \\"Malefic\\" Spell / Trap from your Deck to your hand. You can only use this effect of \\"Malefic Paradulum Dragon\\" once per turn.","rs":"0","bs":"0","psi":"small","ta":["Dragon","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"italic","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"Must be Pendulum Summoned, or Special Summoned (from your hand) by banishing 1 \\"Malefic\\" monster from your Extra Deck. While you control no card in your Field Zone, the field is treated as \\"Malefic World\\". Once per turn: You can send 1 \\"Malefic\\" card from your Deck to the GY; return 1 of your banished Level 8 Synchro Monsters to the Extra Deck, then you can Special Summon that monster from the Extra Deck, also you can only attack with \\"Malefic\\" monsters for the rest of this turn.","si":"","atk":"4000","def":"4000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#00007f",true,"#0000FF"],"tts":[false,"#ff0000",true,"#7F0000"],"ets":[false,"#7f0000",true,"#FF0000"],"pts":[false,"#7f0000",true,"#FF0000"],"ots":[false,"#ffffff",true,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/gc8Ccjyq/image.png",description:"Sample card with no frame background, colorized texts, customized level and attribute.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":0,"oppd":65,"optx":55,"opnm":65,"opbf":"#404040","opab":false,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Mega PenduLuMoon","nst":"predefined","ns":{"nsep":90,"nsey":90,"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"ultra","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"https://i.postimg.cc/HxZCQhxH/paranormal.png","att":"custom","sf":"NO ICON","it":"auto","st":"4","stl":[],"sa":"auto","ar":"https://i.imgur.com/JIgmiMj.png","ad":"","as":"online","af":false,"arc":{"arx":31.17030201342282,"ary":0,"arw":37.65939597315436,"arh":100,"aru":"%","ara":0.67},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":99.99999999999999,"bgu":"%","bga":0.67},"lm":["1","3","7","9"],"lr":"","il":null,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 PARANORMAL Pendulum Monster from your Extra Deck to your hand, then destroy this card. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","rs":"0","bs":"0","psi":"medium","ta":["Spellcaster","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"During your Main Phase: You can add up to 2 face-up PARANORMAL Pendulum Monsters from your Extra Deck to your hand, also for the rest of this turn, until you Pendulum Summon, you cannot activate monster effects, except PARANORMAL Monsters\' effects, and the effects of any cards in your Pendulum Zones are negated. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","si":"SMXR-EN025","atk":"400","def":"1400","pw":"45497573","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[true,"#400040",true,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[true,"#000000",true,"#FF00FF"],"pts":[true,"#000000",true,"#FF0000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/YCPQfmdn/image.png",description:"Sample card with link markers on pendulum frame and custom level placement.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Countermoon Dragon","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"rare","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"WATER","att":"auto","sf":"NO ICON","it":"custom","st":12,"stl":["negative-level","negative-level","negative-level","negative-level",null,null,"level","level","level","level","level","level"],"sa":"auto","ar":"https://i.imgur.com/vf0AWDN.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":94.7867298578199,"aru":"%","ara":1.055},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":94.7867298578199,"bgu":"%","bga":1.055},"lm":["1","3","7","9"],"lr":"","il":true,"ip":true,"pf":"auto","pe":"Negate the effects of all face-up Continuous Trap on the field.","rs":"5","bs":"5","psi":"medium","ta":["Wyrm","Synchro","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"[Synchro: 1 Tuner + 1 non-Tuner monster | Link: 2 Wyrm monsters]\\nYou can only Special Summon 1 \\"Countermoon Dragon\\" per turn. If this card is Synchro Summoned: You can target 2 Spells/Traps on the field; destroy them. If this card is Dark Synchro Summoned: You can target 1 monster on the field; destroy it. If this card is Link Summoned: You can Special Summon 1 \\"Countersun Dragon\\" from your Extra Deck, then you can place this card in your Pendulum Zone.","si":"","atk":"1500","def":"3000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}'},{image:"https://i.postimg.cc/ncnLK60H/image.png",description:"Sample card with custom finishes and inline-image in card text.",value:'{"fm":"tcg","rg":"en","fr":"link","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":["type8"],"afn":"type5","of":["normal","normal","normal","normal"],"na":"Promethean Princess, Bestower of Flames","nst":"predefined","ns":{"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshg":false,"nshl":false,"nshs":false,"nslc":"#4d4d4d","nslox":0,"nsloy":0,"nslw":2,"nspt":"none","nspr":"ultra","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"FIRE","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/NywTwhA.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1,"arx":0,"ary":0,"arw":100,"arh":100},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":67,"bgu":"%","bga":1},"lm":["8","4","6"],"lr":"","il":true,"ip":false,"pf":"auto","pe":"","rs":"10","bs":"10","psi":"medium","ta":["Fiend","Link","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"{{2+<img src=\\"https://i.postimg.cc/NFQSRSzT/effect-monster.png\\" offsetY=\\"-4\\" />}} / You cannot Special Summon <img name=\\"monster\\" src=\\"https://i.postimg.cc/RZ0mk6G3/monster.png\\" offsetY=\\"-4\\" />, except <img src=\\"icon-fire\\" /><img name=\\"monster\\" />. You can only use each of the following effects of \\"Promethean Princess, Bestower of Flames\\" once per turn. During your {Main Phase}: You can Special Summon 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> from your {<img name=\\"gy\\" src=\\"https://i.postimg.cc/Pr4159Hv/gy.png\\" />.} If a <img name=\\"monster\\" /> is Special Summoned to your opponent\'s field, while this card is in your <img name=\\"gy\\" /> (except during the Damage Step): You can target 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> you control and 1 <img name=\\"monster\\" /> your opponent controls; destroy them, and if you do, Special Summon this card.","si":"PHNI-EN052","atk":"2700","def":"","pw":"02772337","sti":"holo5","fe":"1<st> Edition","ife":true,"isp":true,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#ffa500",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'}].map(e=>{let{description:t,image:a,value:r}=e;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:a,alt:"Sample Card"})}),Object(g.jsxs)("td",{children:[t,Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(tl.a,{size:"small",onClick:()=>{l({showCreativeOption:!0,showExtraDecorativeOption:!0}),n(hn(r).card)},children:"Use sample"})]})]},a)})]})})]})});a(498);const Gs=()=>Object(g.jsx)("div",{className:"affiliation",children:Object(g.jsx)("div",{className:"affiliation-link",children:Object(g.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(g.jsx)(dl.a,{})})})}),Xs=Object(h.b)(ul.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,qs=Object(h.b)(Hl)`
    font-size: var(--fs-sm);
`,Vs=h.b.div`
    align-content: center;
    align-self: center;
    border-left: var(--bw) dashed #b1b1b1;
    padding-left: var(--spacing);
    margin-left: var(--spacing);
    height: 100%;
    .button-label {
        position: relative;
    }
    .manager-notice {
        position: absolute;
        color: var(--main-danger);
        right: 0;
        top: 0;
        line-height: 1;
    }
`,_s=e=>{let{applyCardData:t}=e;const{language:a,languageInfo:n,languageMetadataMap:i,changeLanguage:o}=Br(e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}}),{cardList:l,isListDirty:s,toggleVisible:c,visible:d}=bn(Object(kn.useShallow)(e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})),{setVisible:u,visible:m}=ro(Object(kn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),p=Object(r.useRef)(null);return Object(g.jsxs)("div",{className:"app-header",children:[Object(g.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(g.jsxs)("div",{className:"app-description",children:[Object(g.jsxs)("div",{className:"header-language",children:[Object(g.jsx)("h1",{children:"Yugioh Carder"}),Object(g.jsx)(ts.a.Group,{value:n.codeName,size:"small",className:"language-option",children:Object.values(i).filter(e=>{let{active:t}=e;return t}).map(e=>{let{codeName:t,name:a}=e;return Object(g.jsx)(ts.a.Button,{value:t,onChange:e=>o(e.target.value),children:a},t)})}),Object(g.jsx)(Go.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(g.jsx)("span",{id:"sentry-bug-report",className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(ms))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(ms))||void 0===e||e.classList.remove("js-highlight")},children:Object(g.jsx)("div",{children:a["contributor.bug-report.tooltip"]})})}),Object(g.jsx)(hs,{}),Object(g.jsx)(ds,{})]}),Object(g.jsxs)("div",{className:"app-contribution",children:[Object(g.jsxs)("span",{className:"app-creator",children:[a["contributor.gui.label"],": ",Object(g.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(g.jsx)(vl,{content:Object(g.jsxs)(Hl,{className:"disclaimer",children:[Object(g.jsx)("h2",{children:a["contributor.disclaimer.label"]}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:a["contributor.disclaimer.line-1"](Object(g.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(g.jsx)("li",{children:a["contributor.disclaimer.line-2"]}),Object(g.jsx)("li",{children:a["contributor.disclaimer.line-3"]}),Object(g.jsx)("li",{children:a["contributor.disclaimer.line-4"]}),Object(g.jsx)("li",{children:a["contributor.disclaimer.line-5"](Object(g.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(g.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(g.jsx)("li",{children:a["contributor.disclaimer.line-6"]})]})]})})]}),Object(g.jsx)("span",{className:"template-creator",children:a["contributor.template-maker"](Object(g.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"Grezar"})},"artist-1"),Object(g.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"9558able"})},"artist-2"),Object(g.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(g.jsx)("a",{href:"https://www.deviantart.com/geckoygo",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"GeckoYGO"})},"artist-4"),Object(g.jsx)(vl,{icon:Xs,content:Object(g.jsx)(qs,{className:"additional-contributors",children:Object(g.jsxs)("ul",{className:"template-creator",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"icycatelf"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.deviantart.com/neophoenixknight/art/Rebirth-Monsters-686893186",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"NeoPhoenixKnight"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.facebook.com/100006320592457/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"Tr\xed D\u0169ng Song To\xe0n"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://www.facebook.com/61577932176567/",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("b",{children:"Tr\u1ea7n Quang Anh"})})})]})})},"artist-5"))})]})]}),Object(g.jsx)(Vs,{className:"app-setting",children:Object(g.jsx)(es,{})}),Object(g.jsx)(Vs,{className:"card-manager",children:Object(g.jsx)(wl,{className:Ko("manager-button-label",d?"manager-active":""),onClick:()=>c(),children:Object(g.jsxs)("div",{className:"button-label",children:[Object(g.jsx)(ml.a,{}),Object(g.jsx)("label",{children:a["manager.icon.title"]}),s&&l.length>1&&Object(g.jsx)("div",{className:"manager-notice",children:"*"})]})})}),Object(g.jsxs)(Vs,{className:"preset-manager",children:[Object(g.jsx)(wl,{className:Ko("preset-manager-button-label",m?"preset-manager-active":""),onClick:()=>u(),children:Object(g.jsxs)("div",{className:"button-label",children:[Object(g.jsx)(pl.a,{}),Object(g.jsx)("label",{children:a["preset.manager.label"]})]})}),Object(g.jsx)(Bs,{language:a})]}),Object(g.jsxs)(Vs,{className:"sample-card",children:[Object(g.jsx)(wl,{className:Ko("preset-sample-button-label"),onClick:()=>{var e;null===(e=p.current)||void 0===e||e.open()},children:Object(g.jsxs)("div",{className:"button-label",children:[Object(g.jsx)(bl.a,{}),Object(g.jsx)("label",{children:a["sample.manager.label"]})]})}),Object(g.jsx)(Us,{ref:p,language:a,applyCardData:t})]})]})},Js=()=>{const e=$r();return Object(g.jsxs)(Hl,{className:"disclaimer",children:[Object(g.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(g.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(g.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(g.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(g.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(g.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},Qs=()=>Object(g.jsx)(vl,{overlayClassName:"disclaimer-overlay",content:Object(g.jsx)(Js,{})});var Zs=a(620),ec=a(646);a(499);const{Panel:tc}=Zs.a,ac=h.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,rc=h.b.div`
    display: grid;
    grid-template-columns: 615fr 703fr;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) 0;
    overflow: hidden;
    .panel-box {
        min-width: 0;
        position: relative;
        overflow: hidden;
    }
`,nc=h.b.div`
    min-width: 0;
    position: relative;
    overflow: hidden;
    .caption {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: var(--spacing-px) var(--spacing-sm);
        background: var(--main-level-5);
        border-radius: var(--br-lg) 0 0 0;
        box-shadow: var(--bs-block);
    }
    > img {
        max-width: 100%;
        border: var(--bw) solid var(--sub-level-1);
        border-radius: var(--br-lg);
    }
`,ic=h.b.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    .special-path-item {
        display: grid;
        grid-template-columns: 20px 180px;
        gap: var(--spacing-xs);
        align-items: center;
        img {
            max-width: 20px;
            max-height: 20px;
        }
    }
    + .path-container {
        margin-top: var(--spacing);
    }
`,oc=e=>{let{path:t,imagePath:a}=e;return Object(g.jsxs)("div",{className:"special-path-item",children:[Object(g.jsx)("div",{className:"image",children:Object(g.jsx)("img",{src:`/ygocarder/asset/image/${a}`,alt:t})}),Object(g.jsx)("div",{className:"path",children:Object(g.jsx)(Dl,{data:t,children:t})})]})},lc=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:i}=null!==a&&void 0!==a?a:{};return Object(g.jsxs)(nc,{className:`image-with-caption ${i}`,children:[Object(g.jsx)("img",{alt:r,...n}),Object(g.jsx)("div",{className:"caption",children:t})]})},sc=()=>{const[e,t]=Object(r.useState)(!1),a=$r();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Ll.a,{footer:null,visible:e,width:"60%",title:Object(g.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"],"\xa0\xa0",Object(g.jsx)(tl.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["generic.close.label"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(g.jsxs)(ac,{children:[Object(g.jsxs)("p",{children:[a["guide.format.introduction"](Object(g.jsx)(yl.a,{},"icon")),"."]}),Object(g.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(g.jsx)(El,{children:"["},"open-tag"),Object(g.jsx)(El,{children:"]"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+1"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+1"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(g.jsx)(El,{children:"[["},"open-tag"),Object(g.jsx)(El,{children:"]]"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+Shift+1"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+Shift+1"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(g.jsx)(El,{children:"{"},"open-tag"),Object(g.jsx)(El,{children:"}"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+2"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+2"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(g.jsx)(El,{children:"|"},"separator"),Object(g.jsx)(El,{children:"Ctrl+3"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+3"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(g.jsx)(El,{children:"||"},"separator"),Object(g.jsx)(El,{children:"Ctrl+4"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+4"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(g.jsx)(El,{children:"{{"},"open-tag"),Object(g.jsx)(El,{children:"}}"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+5"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+5"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-7.label"]}),a["guide.format.section-7.content"](Object(g.jsx)(El,{children:"<i>"},"open-tag"),Object(g.jsx)(El,{children:"</i>"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+I"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+I"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"italic text raw",src:"/ygocarder/asset/image/syntax/syntax-7-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"italic text preview",src:"/ygocarder/asset/image/syntax/syntax-7-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-8.label"]}),a["guide.format.section-8.content"](Object(g.jsx)(El,{children:"<b>"},"open-tag"),Object(g.jsx)(El,{children:"</b>"},"close-tag"),Object(g.jsx)(El,{children:"Ctrl+B"},"hotkey"),Object(g.jsx)(El,{children:"\u2318+B"},"hokey-alternative")),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"bold text raw",src:"/ygocarder/asset/image/syntax/syntax-8-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"bold text preview",src:"/ygocarder/asset/image/syntax/syntax-8-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(g.jsx)("h2",{children:a["guide.format.section-9.label"]}),a["guide.format.section-9.content"](Object(g.jsx)(El,{children:"<img />"},"open-tag")),Object(g.jsx)(Zs.a,{ghost:!0,children:Object(g.jsx)(tc,{header:Object(g.jsx)("div",{children:a["guide.format.section-9.special-path.content"]}),children:[Object(g.jsx)(ic,{children:[...Object.values(P).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(g.jsx)(oc,{path:a,imagePath:t},a)})]},"subfamily-st"),Object(g.jsx)(ic,{children:[...Object.values($).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(g.jsx)(oc,{path:a,imagePath:t},a)})]},"subfamily-icon"),Object(g.jsx)(ic,{children:[...Object.values(W).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(g.jsx)(oc,{path:a,imagePath:t},a)})]},"subfamily-attribute"),...at.map((e,t)=>Object(g.jsx)(ic,{className:"path-container",children:e.map(e=>{let{imagePresetPath:t,imagePresetSource:a}=e;return Object(g.jsx)(oc,{path:t,imagePath:a},t)})},`region-${t}`))]},"sample-option")}),Object(g.jsxs)(rc,{className:"panel-figure",children:[Object(g.jsx)(lc,{containerProps:{className:"panel-box box-raw"},alt:"image raw",src:"/ygocarder/asset/image/syntax/syntax-9-raw.jpg",caption:a["guide.format.caption.input"]}),Object(g.jsx)(lc,{containerProps:{className:"panel-box box-preview"},alt:"image preview",src:"/ygocarder/asset/image/syntax/syntax-9-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(g.jsxs)(tl.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(g.jsx)(ec.a,{})]})]})},cc=h.b.div`
    display: grid;
    ${e=>{let{$withPillar:t}=e;return t?"grid-template-columns: max-content 1fr;":"grid-template-columns: 1fr;"}}
    > label {
        cursor: pointer;
        padding: 0 var(--spacing-xxs);
        text-align: center;
    }
    &:focus {
        background-color: var(--main-level-3);
    }
    &:focus-visible {
        background-color: var(--main-level-3);
    }
`,dc=h.b.div`
    display: inline-block;
    width: 8px;
`,uc=e=>{let{id:t,tabIndex:a,nameKey:r,labelBackgroundColor:n,labelBackgroundColorList:i,className:o,isOfficial:l,onClick:s}=e;const c=$r();return Object(g.jsxs)(cc,{id:t,tabIndex:a,className:`frame-info-block ${null!==o&&void 0!==o?o:""}`,$withPillar:!(!n&&!i),onClick:s,children:[i?Object(g.jsx)(dc,{children:i.map(e=>Object(g.jsx)("div",{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:e,height:100/i.length+"%"}},e))}):n?Object(g.jsx)(dc,{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:n}}):null,Object(g.jsx)("label",{className:"frame-info-block-label",children:c[r]})]})};var mc=a(148),pc=a(319),bc=a.n(pc),hc=a(647),gc=a(648),fc=a(649),vc=a(650),yc=a(604);const xc=h.b.div`
    display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(#fafafaaa, #fafafaaa);
    justify-content: center;
    align-items: center;
    z-index: 999;
`,jc=()=>Object(g.jsx)(yc.a,{});jc.FullView=()=>Object(g.jsx)(xc,{className:"loading-fullview",children:Object(g.jsx)(yc.a,{size:"large"})});a(506),a(507);const Oc=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:i=0,y:o=0,unit:l}=e;if("px"===l){const e=.8,n=400/300,{width:l,height:s}=t,c=s/l>=e?n:1,d=Math.min((null!==i&&void 0!==i?i:0)*c,l),u=Math.min((null!==o&&void 0!==o?o:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,l);return{unit:"%",x:d/l*100,y:u/s*100,width:m/l*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(i<0)return{...e,x:0};if(o<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),p=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,b=p/100,h=b>1?100:p,g=b>1?d/b:d,f=b>1?(100-g)/2:i<0?0:i,v=b>1||o<0?0:o;return{...e,x:f,y:v,height:h,width:g,aspect:a}},wc=Object(r.forwardRef)((e,t)=>{let{title:a,backgroundColor:n,className:i,forceFit:o,defaultSourceType:l,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:p,ratio:b,imageStyle:h,isNotFoundAnError:f=!0,onImageStyleChange:v,onSourceLoaded:y=()=>{},onSourceChange:x=()=>{},onCropChange:j=()=>{},onTainted:O=()=>{},onMaxSizeExceeded:w=()=>{},onForceFitChange:k=()=>{}}=e;const S="offline"===l?"offline":"online",C=$r(),F=Object(r.useRef)(null),[L,T]=Object(r.useState)("anonymous"),[I,N]=Object(r.useState)(0),[R,E]=Object(r.useState)(S),[M,z]=Object(r.useState)(S),[A,D]=Object(r.useState)(s),[P,H]=Object(r.useState)(!1),[W,B]=Cn("activeDropzone"),[$,Y]=Object(r.useState)(null),[K,U]=Object(r.useState)(!1),[G,X]=Object(r.useState)(c),q=Object(r.useRef)(null),[V,_]=Object(r.useState)({current:p,completed:null}),[J,Q]=Object(r.useState)("%"===p.unit),{current:Z,completed:ee}=V,te=e=>{const t=e[0];if(!t)return;t.size>=4194304&&w(4),H(!0);const a=new FileReader;a.addEventListener("load",()=>{"string"===typeof a.result&&(T("anonymous"),D(a.result),E("offline"),z("offline"),x("offline",a.result,K),H(!1))}),a.readAsDataURL(t)},ae=Object(r.useRef)({source:"",crop:null}),re=Object(r.useCallback)(e=>{if(H(!1),Y(null),y(L,K),q.current=e,e.src===ae.current.source&&ae.current.crop){const t=ne.current;setTimeout(()=>{if(t!==ne.current||!ae.current.crop)return;const a=Oc(ae.current.crop,e,b);_({completed:a,current:a}),Q(!0),ae.current={source:"",crop:null}},250)}else setTimeout(()=>{_(t=>{const a=Oc(t.current,e,b);return{completed:a,current:a}}),Q(!0)},250)},[L,K,y,b]);Object(r.useEffect)(()=>{var e,t,a,r;const n=q.current;if(!ee||!d||!n)return;const{aspect:i}=ee;d.style.transform="scale(2)";const l=d.getContext("2d");if(!l||"number"!==typeof i||i<=0||P)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,p=null!==(e=ee.unit)&&void 0!==e?e:"px",b=window.devicePixelRatio;l.setTransform(b,0,0,b,0,0);let g,f=Math.floor((null!==(t=ee.width)&&void 0!==t?t:0)*("px"===p?u:c/100)),v=Math.min(c,f),y=Math.floor(f/i),x=Math.min(s,y),O=Math.min(c,Math.floor((null!==(a=ee.x)&&void 0!==a?a:0)*("px"===p?u:c/100))),w=Math.min(s,Math.floor((null!==(r=ee.y)&&void 0!==r?r:0)*("px"===p?m:s/100)));if(l.imageSmoothingQuality="high",!(v<=0||x<=0)){if(O+v>c||w+x>s||O<0||w<0||Math.abs((f-v)/v)>.01||Math.abs((y-x)/x)>.01){"width"===(i*s>c?"width":"height")?(v=c,x=v/i,O=0,w=(s-x)/2,g={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:0,y:w/s*100}):(v=s*i,x=s,O=(c-v)/2,w=0,g={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:O/c*100,y:0})}if(o){"width"===(i*s>c?"width":"height")?(v=c,x=v/i):(v=s*i,x=s),d.width=v,d.height=x;const{flipX:e,flipY:t}=h,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,0,0,c,s,0,0,a*v,r*x),l.scale(a,r)}else{var k,S;d.width=null!==(k=v)&&void 0!==k?k:0,d.height=null!==(S=x)&&void 0!==S?S:0;const{flipX:e,flipY:t}=h,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,O,w,v,x,0,0,a*v,r*x),l.scale(a,r)}"offline"===R&&(null!==A&&void 0!==A?A:"").length<=0||i===ee.aspect&&j(ee,R,K),g&&_(e=>({...e,current:g}))}},[ee,d,I,o,h]),Object(r.useEffect)(()=>{U(!1),_(e=>{if(null!=q.current&&e.current){const t=Oc(e.current,q.current,b);return{current:t,completed:t}}return e})},[b]);const ne=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,()=>({isLoading:()=>P,hasImage:()=>"string"===typeof A&&A.length>0&&"offline"===R||"string"===typeof G&&G.length>0&&"online"===R,getSource:()=>({type:R,crop:V.current,image:"online"===R?G:"",imageData:"offline"===R?A:""}),forceSource:(e,t,a)=>{const r="offline"===R?A:G;U(!1),r!==t&&(H(!0),E(e),z(e),x(e,t,K),"offline"===e?D(t):X(t)),T("anonymous"),Q("%"===a.unit),ne.current+=1,ae.current={source:t,crop:a},N(e=>e+1)}}));const ie="offline"===R&&(null!==A&&void 0!==A?A:"").length>0||"online"===R&&(null!==G&&void 0!==G?G:"").length>0,oe=d&&ie&&!P&&(null===ee||void 0===ee?void 0:ee.width)&&(null===ee||void 0===ee?void 0:ee.height);return Object(g.jsxs)("div",{className:Ko("card-image-cropper",i),children:[Object(g.jsxs)("div",{className:"card-image-source-input",children:[Object(g.jsxs)("div",{className:"card-image-source-input-container",onKeyDown:()=>{U(!0)},onClick:()=>{U(!0)},children:[Object(g.jsxs)("div",{className:"card-image-source-input-title",children:[Object(g.jsxs)("span",{className:"field-title",children:[a,Object(g.jsx)(Ol,{Icon:hc.a,containerProps:{className:oe?"":"disabled"},tooltipProps:{overlay:oe?C["image-cropper.download"]:C["image-cropper.no-download"]},onClick:()=>oe&&d&&function(e,t){t&&e&&e.toBlob(e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}},"image/png",1)}(d,ee)}),Object(g.jsx)(Ol,{Icon:Vo.a,tooltipProps:{overlay:C["generic.reset.tooltip"]},onClick:()=>{"offline"===R?(D(""),x("offline","",K)):(X(""),x("online","",K))}})]}),Object(g.jsxs)(ts.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;z(t),((null!==A&&void 0!==A?A:"").length>0&&"offline"===t||(null!==G&&void 0!==G?G:"").length>0&&"online"===t)&&(E(t),"offline"===t?(T("anonymous"),x("offline",A,K)):x("online",G,K))},value:M,children:[Object(g.jsx)(Go.a,{title:Object(g.jsx)("div",{className:"image-info",children:C["image-cropper.online-tip"]}),children:Object(g.jsx)(ts.a.Button,{value:"online",checked:"online"===M,children:C["image-cropper.source.online.tooltip"]})}),Object(g.jsx)(Go.a,{title:Object(g.jsx)("div",{className:"image-warning",children:C["image-cropper.offline-warning"]}),children:Object(g.jsx)(ts.a.Button,{value:"offline",checked:"offline"===M,children:C["image-cropper.source.offline.tooltip"]})})]})]}),Object(g.jsx)("div",{className:["card-image-input","online"===M?"":"input-inactive"].join(" "),children:Object(g.jsx)(Is.a,{placeholder:C["image-cropper.placeholder"],value:G,onChange:e=>{const t=e.target.value;T("anonymous"),H(!0),E("online"),z("online"),x("online",t,K),X(t)},maxLength:512,allowClear:!0},"key")}),Object(g.jsx)("div",{className:["card-image-input","offline"===M?"":"input-inactive"].join(" "),children:Object(g.jsx)(Is.a,{ref:F,type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files.length>0?te(e.target.files):alert(C["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(g.jsxs)("div",{className:Ko("card-cropper"),onKeyDown:()=>{U(!0)},children:[Object(g.jsx)(ql,{$visible:W>0,className:"drop-zone",onDragOver:e=>e.preventDefault(),onDrop:e=>{if(e.preventDefault(),B(0),e.currentTarget.classList.contains("drop-zone")){const t=e.dataTransfer.files;te(t)}},children:Object(g.jsx)("label",{children:C["image-cropper.drop.tooltip"]})}),P&&Object(g.jsx)(jc.FullView,{}),ie&&!$&&Object(g.jsxs)("div",{className:"card-image-option",children:[Object(g.jsx)(Go.a,{placement:"left",overlay:C["image-cropper.button.flip-horizontal.tooltip"],children:Object(g.jsx)("div",{className:Ko("image-option flip-horizontally-option",h.flipX?"option-active":""),onClick:()=>{U(!0),v({flipX:!h.flipX,flipY:h.flipY})},children:Object(g.jsx)(qo.a,{})})}),Object(g.jsx)(Go.a,{placement:"left",overlay:C["image-cropper.button.flip-vertical.tooltip"],children:Object(g.jsx)("div",{className:Ko("image-option flip-vertically-option",h.flipY?"option-active":""),onClick:()=>{U(!0),v({flipX:h.flipX,flipY:!h.flipY})},children:Object(g.jsx)(gc.a,{})})}),Object(g.jsx)(Go.a,{placement:"left",overlay:o?C["image-cropper.button.use-crop.tooltip"]:C["image-cropper.button.force-fit.tooltip"],children:Object(g.jsx)("div",{className:Ko("image-option force-fit-option",o?"option-active":""),onClick:()=>{U(!0),k(!o)},children:Object(g.jsx)(fc.a,{})})}),!o&&Object(g.jsx)(Go.a,{placement:"left",overlay:C["image-cropper.button.center-vertical.tooltip"],children:Object(g.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{U(!0),_(e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}})},children:Object(g.jsx)(vc.a,{})})}),!o&&Object(g.jsx)(Go.a,{placement:"left",overlay:C["image-cropper.button.center-horizontal.tooltip"],children:Object(g.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{U(!0),_(e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}})},children:Object(g.jsx)(vc.a,{})})})]}),(!ie||$&&void 0===L)&&!P&&Object(g.jsx)(mc.a,{description:f?C["image-cropper.not-found-warning"]:C["image-cropper.not-found-info"],image:null}),Object(g.jsx)(bc.a,{src:"offline"===R?A:G,disabled:o,className:o?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:re,onImageError:()=>{if(d)if("online"===R&&""===(null!==G&&void 0!==G?G:"")||"offline"===R&&""===(null!==A&&void 0!==A?A:"")){ae.current={source:"",crop:null};const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),ee&&j(ee,R,K),y(L,K),H(!1),Y("Image not found")}else T(void 0),O();else ae.current={source:"",crop:null},H(!1),Y("No receiving canvas"),O();void 0===L&&(H(!1),Y("Tainted canvas"))},crop:Z,onDragStart:()=>{U(!0)},onChange:(e,t)=>{const a=q.current;ae.current.crop||P||(J?_(e=>({...e,current:Oc(t,a,b)})):(Q(!0),_(t=>({...t,current:Oc(e,a,b)}))))},onComplete:(e,t)=>{ae.current.crop&&!P||_(e=>({...e,completed:t}))},ruleOfThirds:!0,crossorigin:L},`${R}-${J}-${I}`)]})]})}),kc=h.b.div`
    color: var(--color);
    text-shadow: var(--ts);
    font-weight: 500;
    padding: 5px;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3px;
    .color-list {
        display: flex;
        flex-wrap: nowrap;
        gap: 3px;
    }
    .color-input {
        display: grid;
        grid-template-columns: max-content 1fr;
        border-left: var(--bw-lg) solid var(--sub-level-4);
        gap: 3px; // Alignment
        padding-left: 3px; // Alignment
        input {
            width: 58px; // Alignment
            font-size: var(--fs-sm);
            line-height: 1;
            border: none;
            padding: 0 5px;
        }
    }
`,Sc=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Cc=e=>{let{value:t="",onChange:a}=e;const{color:r,inputText:n,setColor:i}=wn({value:t,onChange:a});return Object(g.jsxs)(kc,{children:[Object(g.jsx)("div",{className:"color-list",children:Sc.map(e=>{let{hex:t,rgb:n}=e;const i=gr(n);return Object(g.jsx)(Tl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:r.hex.toUpperCase()===t&&Object(g.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(g.jsxs)("div",{className:"color-input",children:[Object(g.jsx)(Tl,{$static:!0,style:{backgroundColor:r.hex}}),Object(g.jsx)(Is.a,{size:"small",value:n,onChange:e=>{i(e.target.value)}})]})]})};var Fc=a(70),Lc=a(324);const Tc=h.b.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`,Ic=Object(Fc.c)(e=>{let{onChange:t,...a}=e;return Object(g.jsx)(Tc,{children:Object(g.jsx)(Lc.Saturation,{...a,onChange:e=>{null===t||void 0===t||t(e)}})})}),Nc=[{hex:"#B80000",rgb:[184,0,0]},{hex:"#EB9694",rgb:[235,150,148]},{hex:"#DB3E00",rgb:[219,62,0]},{hex:"#FAD0C3",rgb:[250,208,195]},{hex:"#FCCB00",rgb:[252,203,0]},{hex:"#FEF3BD",rgb:[254,243,189]},{hex:"#008B02",rgb:[0,139,2]},{hex:"#C1E1C5",rgb:[193,225,197]},{hex:"#006B76",rgb:[0,107,118]},{hex:"#BEDADC",rgb:[190,218,220]},{hex:"#1273DE",rgb:[18,115,222]},{hex:"#C4DEF6",rgb:[196,222,246]},{hex:"#004DCF",rgb:[0,77,207]},{hex:"#BED3F3",rgb:[190,211,243]},{hex:"#5300EB",rgb:[83,0,235]},{hex:"#D4C4FB",rgb:[212,196,251]}],Rc=h.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem 4rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${Tl} {
            display: inline-block;
            flex: 1;
            border: var(--bw) solid var(--sub-level-2);
            height: 18px;
        }
    }
    .color-list {
        display: grid;
        grid-template-columns: repeat(${Nc.length/4}, max-content);
        border-radius: var(--br);
        overflow: hidden;
        ${Tl} {
            height: 16px;
            width: 16px;
            box-shadow: none;
            border-radius: 0;
        }
    }
    .rgb-input {
        display: grid;
        grid-template-columns: 1rem 1fr;
        column-gap: var(--spacing-xs);
        font-size: var(--fs-sm);
        input {
            line-height: 1;
            font-size: var(--fs-sm);
        }
        + .rgb-input {
            margin-top: var(--spacing-xxs);
        }
    }
`,Ec=e=>{let{children:t,onChange:a,value:r}=e;const{color:n,inputText:i,setColor:o}=wn({value:r,onChange:a}),l=""===i;return Object(g.jsxs)(Rc,{className:"horizontal-sketch-picker",children:[Object(g.jsx)("div",{className:"input-label",children:t}),Object(g.jsxs)("div",{className:"color-input",children:[Object(g.jsxs)("div",{className:"color-state",children:[Object(g.jsx)(Tl,{$empty:l,style:l?{}:{backgroundColor:n.hex}}),Object(g.jsx)(Ol,{size:"sm",Icon:Vo.a,onClick:()=>{null===a||void 0===a||a("")}})]}),Object(g.jsx)(Is.a,{size:"small",value:i,onChange:e=>{o(e.target.value)}})]}),Object(g.jsx)("div",{className:"rgb-input-list",children:["R","G","B"].map((e,t)=>Object(g.jsxs)("div",{className:"rgb-input",children:[Object(g.jsx)("span",{children:e}),Object(g.jsx)(Is.a,{size:"small",value:l?"":n.rgb[t],onChange:e=>{const a=[...n.rgb];var r;a[t]=parseInt(e.target.value),o("#"+hr((r=a)[0])+hr(r[1])+hr(r[2]))}})]},e))}),Object(g.jsx)("div",{className:"color-list",children:Nc.map(e=>{let{hex:t,rgb:r}=e;const i=gr(r);return Object(g.jsx)(Tl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:n.hex.toUpperCase()===t&&Object(g.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(g.jsx)(Ic,{color:n.hex,onChange:e=>{let{hex:t}=e;return o(t)}})]})};var Mc=a(245),zc=a(651),Ac=a(652),Dc=a(653);const{height:Pc,width:Hc}=c,Wc=h.b.div`
    width: ${Hc}px;
    height: ${Pc}px;
    overflow: hidden;
    position: relative;
    line-height: 0;
    .card-lightbox-control {
        position: absolute;
        z-index: 1;
        top: var(--spacing);
        right: var(--spacing);
        user-select: none;
        text-align: right;
        .action-list {
            display: inline-flex;
            gap: var(--spacing-xs);
        }
        .control-info {
            background-color: var(--main-level-1);
            padding: var(--spacing-xs);
            margin-top: var(--spacing-xs);
            border-radius: var(--br);
            border: var(--bw) solid var(--sub-level-1);
            line-height: 1;
            box-shadow: var(--bs-1);
        }
    }
    .card-lightbox-content {
        cursor: grab;
    }
`,Bc=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:i,globalScale:o,width:l,height:s}=e;return Object(g.jsxs)("div",{className:"control-container",children:[Object(g.jsxs)("div",{className:"action-list",children:[Object(g.jsx)(Bl,{disabled:i>=4,onClick:()=>{t()},children:Object(g.jsx)(zc.a,{})}),Object(g.jsx)(Bl,{disabled:i<=1/o,onClick:()=>{a()},children:Object(g.jsx)(Ac.a,{})}),Object(g.jsx)(Bl,{onClick:()=>{r()},children:Object(g.jsx)(Dc.a,{})}),Object(g.jsx)(Bl,{onClick:()=>{n(-Math.max(0,l-Hc)/2,-Math.max(0,s-Pc)/2,1)},children:Object(g.jsx)(fc.a,{})})]}),Object(g.jsxs)("div",{className:"control-info",children:[i&&Object(g.jsxs)(g.Fragment,{children:["\xd7",i<1?"1/"+Math.round(1/i*10)/10:Math.round(10*i)/10]}),"\xa0(",l," \xd7 ",s,")"]})]})},$c=Object(r.forwardRef)((e,t)=>{let{globalScale:a}=e;const[n,i]=Object(r.useState)(!1),[o,l]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(()=>1/a);return Object(r.useImperativeHandle)(t,()=>({setVisible:i,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>l(e=>e+1),getCanvasKey:()=>o})),Object(r.useEffect)(()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()},[a]),Object(g.jsx)(Uo.a,{width:`${Hc+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>i(!1),footer:null,children:Object(g.jsx)(Wc,{className:"card-lightbox-container",children:Object(g.jsx)(Mc.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"card-lightbox-control",children:Object(g.jsx)(Bc,{...t,scale:d,globalScale:a,width:Hc*a,height:Pc*a})}),Object(g.jsx)(Mc.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:Hc,maxHeight:Pc,lineHeight:0},children:Object(g.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:Hc*a,height:Pc*a},o+.1)})]})}})})})}),Yc=h.b.div`
    --link-arrow-icon-size: 16px;
    --link-arrow-border-size: 8px;
    --link-arrow-half-size: ${13}px;
    --link-arrow-full-size: calc(var(--link-arrow-half-size) * 2);
    --link-arrow-margin-inline: calc(var(--link-arrow-half-size) - var(--link-arrow-icon-size) / 2);
    --link-arrow-margin-block: calc(var(--link-arrow-half-size) - var(--link-arrow-border-size) / 2);
    font-weight: 500;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    padding: var(--spacing-xs);
    background-color: var(--main-level-4);
    box-shadow: var(--bs-block);
    border-radius: var(--br-lg);
    display: inline-block;
    .title {
        line-height: 1;
        margin-bottom: var(--spacing-sm);
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: calc(3 * var(--link-arrow-full-size));
        height: calc(3 * var(--link-arrow-full-size));
        column-gap: 0;
        row-gap: 0;
        background-color: var(--main-level-1);
        box-shadow: 0 0 2px 1px #141414 inset;
        border-radius: var(--br-lg);
        margin: auto;
        .link-marker-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: var(--link-arrow-margin-block) var(--link-arrow-margin-inline);
            border-width: 0 var(--link-arrow-border-size) var(--link-arrow-border-size) var(--link-arrow-border-size);
            border-color: transparent transparent #484848 transparent;
            .anticon {
                font-size: var(--link-arrow-icon-size);
            }
        }
        .link-marker-button.marker-checked .link-marker-icon {
            border-color: transparent transparent var(--sub-active) transparent;
        }
    }
    .link-marker-reset {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .marker-checked {
        color: var(--sub-active);
    }
    &.chooser-disabled {
        .container {
            background-color: var(--main-level-4);
            box-shadow: 0 0 0 1px var(--sub-level-4) inset;
            .link-marker-icon {
                border-color: transparent transparent #585858 transparent;
            }
            .link-marker-button.marker-checked .link-marker-icon {
                border-color: transparent transparent var(--sub-disabled) transparent;
            }
            .link-marker-reset .anticon {
                color: var(--main-level-4);
            }
        }
    }
    &.chooser-active {
        .link-marker-reset,
        .link-marker-button {
            cursor: pointer;
            border-radius: var(--br-lg);
            &:hover {
                background-color: var(--sub-level-1);
            }
        }
    }
`,Kc=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:i}=e;const[o,l]=Object(r.useState)(a),s=$r(),c=JSON.stringify(o);return Object(r.useEffect)(()=>{n(o)},[c]),Object(g.jsxs)(Yc,{className:Ko("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(g.jsx)("div",{className:"title",children:Object(g.jsx)(xl.a,{checked:t,onChange:e=>i(e.target.checked),children:s["link-picker.label"]})}),Object(g.jsx)("div",{className:"container",children:[...Array(9)].map((e,a)=>{const r=`${a+1}`;return"5"===r?Object(g.jsx)(Go.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(g.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&l([])},children:Object(g.jsx)(b.a,{})})},"5"):Object(g.jsx)("div",{className:`link-marker-button marker-${a+1} ${o.includes(r)?"marker-checked":""}`,onClick:()=>{t&&l(e=>{let t=[...e];return t.includes(r)?t=t.filter(e=>e!==r):t.push(r),t})},children:Object(g.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${_e[a]}deg) translateY(-1px)`}})},r)})})]})};var Uc=a(621);const Gc=Object(h.b)(Uc.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Xc=Object(h.b)(Uc.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,qc=e=>{let{onChange:t,...a}=e;const r=$r(),{resolution:n,updateSetting:i}=yn(Object(kn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}}));return Object(g.jsxs)(Uc.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(g.jsx)(Gc,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),ga.map(e=>{let{width:a,height:o,label:l,scale:s}=e;return Object(g.jsx)(Xc,{className:n[0]===a&&n[1]===o?"active-setting":"",onClick:()=>{i({resolution:[a,o],globalScale:s}),null===t||void 0===t||t([a,o],s)},children:s>1?Object(g.jsx)(hl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(g.jsx)(Hl,{children:r["setting.option.resolution.warning"]}),children:Object(g.jsx)(Gl,{width:a,height:o,warning:!0})}):Object(g.jsx)(Gl,{width:a,height:o})},`${a}-${o}`)})]})},Vc=e=>Object(g.jsx)(il,{fallback:Object(g.jsx)(g.Fragment,{}),children:Object(g.jsx)(nl.a,{...e})}),_c=h.b.div`
    font-weight: 500;
    border-color: transparent;
    background-color: transparent;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    user-select: none;
    display: inline-block;
    position: relative;
    text-align: right;
    padding-right: var(--spacing-antd);
    ${e=>{let{$fixedSize:t=!0}=e;return t?"\n                height: 32px;\n                width: var(--width-label);\n                line-height: 30px;\n                min-width: var(--width-label);\n            ":""}}
`,Jc=h.b.div`
    display: flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing);
    cursor: pointer;
    &:hover {
        background-color: var(--sub-active);
    }
    &.menu-active {
        background-color: var(--main-active);
        &:hover {
            background-color: var(--sub-active);
        }
    }
`,Qc=h.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Zc=h.b.div`
    color: var(--color);
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    padding: 0 var(--spacing);
    padding-bottom: var(--spacing-xs);
    line-height: 1;
    cursor: default;
    &:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,ed={Container:Qc,Option:Jc},td=h.b.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing);
    border-left: var(--bw) solid var(--sub-secondary);
    border-radius: 0 var(--br-lg) var(--br-lg) 0;
    color: var(--color);
    cursor: pointer;
    .anticon {
        font-size: var(--fs-2xl);
        margin-left: 0;
    }
    .resolution-overlay {
        position: absolute;
        left: 50%;
        bottom: 3px; // Alignment
        font-size: var(--fs-xs);
        text-align: center;
        transform: translateX(-50%);
    }
    .resolution-icon {
        transform: translateY(-5px); // Alignment
    }
`,ad=Object(h.b)(tl.a)`
    padding: 0;
    .button-label {
        height: 100%; // Alignment
        align-content: center;
        border-radius: var(--br-lg);
        line-height: 1.5;
        .label-content {
            padding: 4px 15px;
            border: var(--bw) solid transparent;
            border-radius: var(--br-lg);
            line-height: 29px; // Alignment
        }
    }
`,rd=Object(r.forwardRef)((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:i,globalScale:o,canvasMap:l,onTainted:s,onExportSucess:c,onDownloadError:d}=e;const u=$r(),{allowHotkey:m,resolution:p}=yn(Object(kn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),{onExport:b}=Ji(!0,l,{imageChangeCount:i,isInitializing:n,language:u,globalScale:o}),{exportCanvasRef:h}=l,f=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[v,y]=Object(r.useState)(!1),x=Object(r.useCallback)(()=>{y(!1)},[]),j=Object(r.useCallback)(async e=>b({...e,onError:e=>{!a&&String(e).includes("Tainted canvases")&&s()},onSuccess:c}),[a,b,c,s]),{onSave:O,isPipelineRunning:w}=xn({isTainted:a,isInitializing:n,exportCanvasRef:h,exportRef:f,onExport:j,onDownloadError:d,onDownloadComplete:x}),k=e=>{v||(a?Hr.a.error({message:u["prompt.download.tainted.message"]}):(y(!0),O(e)))};return Object(r.useImperativeHandle)(t,()=>({download:k,isPipelineRunning:w})),a?null:Object(g.jsxs)("div",{className:"save-button-container",children:[Object(g.jsx)("div",{id:"save-button-waiting"}),Object(g.jsxs)(ad,{className:"save-button",id:"save-button-ready",children:[Object(g.jsx)(Go.a,{overlay:m?Object(g.jsx)(g.Fragment,{children:"Ctrl+S / \u2318+S"}):null,children:Object(g.jsx)("div",{className:"button-label",children:Object(g.jsx)("div",{className:"label-content",onClick:()=>k(),children:v?u["button.download.ongoing.label"]:u["button.download.label"]})})}),Object(g.jsx)(al.a,{disabled:v,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(g.jsx)(qc,{onChange:()=>$o()}),children:Object(g.jsxs)(td,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(g.jsx)(rl.a,{className:"resolution-icon"}),Object(g.jsx)("span",{className:"resolution-overlay",children:p[1]})]})})]})]})});var nd=a(655),id=a(656),od=a(657);const ld=h.b.div`
    ${Xo} {
        font-size: var(--fs);
        padding-bottom: var(--spacing-sm);
        .icon {
            font-size: var(--fs-4xl);
        }
        &.export-download-image {
            border-radius: var(--br-lg) var(--br-lg) 0 0;
            border-bottom: var(--bw) solid var(--sub-secondary);
            &:disabled {
                border-bottom: var(--bw) solid var(--main-level-1);
            }
        }
    }
    .radio-train-input-group {
        flex-wrap: wrap;
    }
    .export-container-result {
        margin-top: var(--spacing-lg);
        display: grid;
        gap: var(--spacing-lg);
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        &.mode_other {
            grid-template-columns: 1fr 1fr;
        }
        button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        > div {
            height: 100%;
        }
    }
    .partial-alert {
        margin-top: var(--spacing-lg);
        padding-bottom: var(--spacing-sm);
        border-bottom: var(--bw) solid var(--sub-secondary);
        + .export-container-result {
            margin-top: var(--spacing-sm);
        }
    }
    .resolution-picker {
        background-color: var(--main-level-4);
        border-radius: 0 0 var(--br-lg) var(--br-lg);
        padding: var(--spacing-xs);
        line-height: 1;
        text-align: center;
        border: var(--bw) solid transparent;
        cursor: pointer;
    }
    .export-input-raw {
        grid-column: 1 / -1;
    }
`,sd=Object(h.b)(Xo)`
    ${Ml}
`,cd=e=>{let{data:t,children:a,disabled:r,withText:n}=e;return Object(g.jsx)(Al,{disabled:r,data:t,container:sd,overlay:n?Object(g.jsxs)(g.Fragment,{children:["Copied\xa0",Object(g.jsx)(Rl.a,{})]}):Object(g.jsx)(Rl.a,{}),children:a})},dd=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:kr},{label:e["button.import.for-other.label"],value:"other",converter:fo}],ud=Object(r.forwardRef)((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:i,onRequireDownload:o,onClose:l}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,p]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:b,resolution:h}=yn(Object(kn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),f=$r(),v="export-input-raw",y=Object(r.useCallback)(()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())},[]);Object(r.useImperativeHandle)(t,()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),p(dd(f).map(t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:i}=r(e,n);return{value:a,isPartial:t,name:Fr(e.name),data:`${JSON.stringify(i)}`}}catch(i){return console.error(i),{value:a,isPartial:!1,name:"Unknown",data:""}}}).reduce((e,t)=>{let{data:a,isPartial:r,value:n,name:i}=t;return e[n]={name:i,data:a,isPartial:r},e},{...m}))}})),Object(r.useEffect)(()=>{setTimeout(()=>{s&&"ygocarder"===d&&y()},100)},[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Uo.a,{visible:s,title:f["button.export-modal.label"],className:"global-overlay export-modal",onCancel:()=>{c(!1),l()},cancelText:f["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(g.jsxs)(ld,{children:[Object(g.jsx)(Fl,{optionList:dd(f),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(g.jsxs)("div",{className:"partial-alert",children:[Object(g.jsx)("b",{children:f["service.decode.partial.message"]}),Object(g.jsx)("br",{}),f["service.decode.partial.description"]]}),Object(g.jsxs)("div",{className:Ko("export-container-result",`mode_${d}`),children:[Object(g.jsx)(Wl,{content:a&&"other"===d?Object(g.jsx)(Js,{}):void 0,children:Object(g.jsx)("div",{children:Object(g.jsxs)(Xo,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});no(Fr(O),e,"application/json")},children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(hc.a,{})}),Object(g.jsx)("div",{className:"label",children:f["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(g.jsx)(Wl,{placement:"bottom",content:j?Object(g.jsx)(Hl,{children:f["prompt.export.offline-warning.message"]}):void 0,children:Object(g.jsx)("div",{children:Object(g.jsxs)(cd,{disabled:!1,data:m.ygocarder.data,withText:!0,children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(nd.a,{})}),Object(g.jsx)("div",{className:"label",children:f["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(g.jsx)(Wl,{placement:"bottom",content:j?Object(g.jsx)(Hl,{children:f["image-cropper.offline-warning"]}):void 0,children:Object(g.jsx)("div",{children:Object(g.jsxs)(cd,{disabled:j,data:window.location.href,withText:!0,children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(id.a,{})}),Object(g.jsx)("div",{className:"label",children:f["button.export-modal.share-button.label"]})]})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(Wl,{content:a?Object(g.jsx)(Js,{}):void 0,children:Object(g.jsx)("div",{children:Object(g.jsxs)(Xo,{disabled:a,className:"export-download-image",onClick:o,children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(od.a,{})}),Object(g.jsx)("div",{className:"label",children:f["button.export-modal.save-button.label"]})]})})}),Object(g.jsx)(al.a,{overlay:Object(g.jsx)(qc,{}),children:Object(g.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!j&&Object(g.jsx)(Is.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(g.jsx)(Go.a,{overlay:b?Object(g.jsx)(g.Fragment,{children:"Ctrl+D / \u2318+D"}):null,children:Object(g.jsx)("button",{className:"primary-button export-button",onClick:()=>{i(),c(!0)},children:f["generic.export.label"]})}),Object(g.jsx)(al.a,{overlay:Object(g.jsx)(Uc.a,{onClick:e=>e.domEvent.stopPropagation(),children:dd(f).map((e,t)=>{let{converter:a,label:r}=e;return Object(g.jsx)(Uc.a.Item,{onClick:()=>{try{const e=fn.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});no(Fr(e),a,"application/json")})(Fr(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),Hr.a.error({message:f["error.export.message"],description:f["error.export.description"]})}},children:r},`${t}`)})}),children:Object(g.jsx)(Xo,{className:"secondary-button export-custom",children:Object(g.jsx)(hc.a,{})})})]})});var md=a(658);const pd=h.b.div`
    .prompt-alert {
        margin-bottom: var(--spacing-sm);
        .alert {
            color: var(--main-danger);
        }
    }
    .import-container-upload {
        margin-top: var(--spacing-sm);
        text-align: center;
        .import-custom,
        .import-empty {
            font-size: var(--fs);
        }
        .import-custom {
            margin-right: var(--spacing);
        }
        .option-separator {
            display: inline-block;
            margin-right: var(--spacing);
        }
        ${Xo} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,bd=Object(r.forwardRef)((e,t)=>{let{allowHotkey:a,language:n,onImport:i,onClose:o}=e;const l="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,p]=Object(r.useState)(0),[b,h]=Object(r.useState)("replace"),[f,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)(()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())},[]);Object(r.useEffect)(()=>{setTimeout(()=>{f&&j()},100)},[j,f]),Object(r.useImperativeHandle)(t,()=>({requestImport:e=>{h(e),v(!0)}}));const O=()=>{p(e=>e+1),v(!1),x(!1),o()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:r}=hn(e,"replace"===b||"new"===b?void 0:fn.getState().card);if(r&&Hr.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};i(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==b,addToList:"new"===b})}else i(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==b,addToList:"new"===b})}}catch(a){console.error("Import error:",a),Hr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},S=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,i=null!==(e=n.trim())&&void 0!==e?e:"";let o="";try{o=ur(decodeURIComponent(i))}catch(a){}let l=null;if(i.startsWith("{")&&i.endsWith("}"))l=i;else if(o.startsWith("{")&&o.endsWith("}"))l=JSON.parse(o);else{var t;const e=i.startsWith("https://db.ygoprodeck.com/api")?i:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${i}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();l=null!==(t=r.data.find(e=>{let{name:t}=e;return t.toLowerCase()===i.toLowerCase()}))&&void 0!==t?t:r.data.sort((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],i=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!i)return 0;return(n.viewsweek+1)/(i.viewsweek+1)>2?i.viewsweek-n.viewsweek:i.views-n.views})[0]}await w(l,!0)}}catch(a){console.error("Import error:",a),Hr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{O()}};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Uo.a,{visible:f,title:"merge"===b?n["button.import.merge.label"]:n["generic.import.label"],className:"global-overlay import-modal",onCancel:O,okText:n["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(g.jsxs)(pd,{children:["merge"!==b?Object(g.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(g.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(g.jsx)("div",{className:"import-container-input",children:Object(g.jsx)(Is.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:y,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==b?Object(g.jsxs)("div",{className:"import-container-upload",children:[Object(g.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(g.jsxs)(Xo,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(g.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),O()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===b&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(g.jsx)(Xo,{className:"import-empty",onClick:()=>{w(ua()),O()},children:n["button.empty.label"]})]})]}):null]})}),Object(g.jsx)(Go.a,{overlay:a?Object(g.jsxs)("div",{className:"center",children:[Object(g.jsx)("div",{children:"Ctrl+E / \u2318+E"}),Object(g.jsxs)("div",{children:["Ctrl+G / \u2318+G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(g.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),v(!0)},children:n["generic.import.label"]})}),Object(g.jsx)(Go.a,{overlay:n["button.import.tooltip"],children:Object(g.jsxs)(Xo,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(l);e&&e.click()},children:[Object(g.jsx)("input",{ref:d,type:"file",id:l,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),O()}},`direct-file-input-${m}`),Object(g.jsx)(md.a,{})]})})]})}),hd=(Object(h.b)(Uc.a)`
    .ant-dropdown-menu-item {
        padding: 0;
    }
    .import-upload-button {
        /** Mimic antd */
        cursor: pointer;
        padding: 5px 12px;
        background: transparent;
        border: none;
        width: 100%;
        text-align: left;
    }
    .import-upload-input {
        display: none;
    }
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),gd=e=>k({normal:e["input.foil.normal.label"],gold:e["input.foil.gold.label"],platinum:e["input.foil.platinum.label"],rainbow:e["input.foil.rainbow.label"]}).map(e=>{let{color:t,name:a,label:r,preview:n}=e;return{label:Object(g.jsx)(Go.a,{title:r,children:n}),value:a,props:{style:{color:t,fontWeight:"bold"}}}}),fd=[{value:"normal",label:Object(g.jsx)(b.a,{})},...Object.values(x).map(e=>{let{value:t,label:a}=e;return{label:a,value:t}})],vd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"official";return Ge.filter(t=>{let{isOfficial:a}=t;return"both"===e||("official"===e?a:!a)}).map(e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:i,isOfficial:o}=e;return{label:Object(g.jsx)(uc,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a,isOfficial:o}),value:t,edition:i}})},yd=[...Array(14)].map((e,t)=>({label:t,value:t})),xd=D.map(e=>{let{value:t}=e;return{label:t===A?Object(g.jsx)(b.a,{}):Object(g.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}}),jd=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map(e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}}).sort((e,t)=>e.order-t.order);var Od=a(670);const wd=h.b.div`
    z-index: 10;
    display: inline-grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    column-gap: var(--spacing-sm);

    .char-picker {
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
        button.ant-btn {
            padding: 0;
        }
        .handler,
        .ant-btn {
            background-color: var(--main-level-1);
            color: var(--color-heavy);
            text-shadow: var(--ts);
            font-family: Segoe UI Symbol, sans-serif;
            border: 1px solid var(--sub-level-1);
            border-radius: 0;
            padding: 0 var(--spacing);
            + .ant-btn {
                border-left-width: 0;
            }
            &:hover {
                color: var(--main-active);
            }
            &:first-child {
                border-radius: var(--br) 0 0 var(--br);
            }
            &:last-child {
                border-radius: 0 var(--br) var(--br) 0;
            }
        }
        /** Currently char picker no longer movable */
        /* .handler {
            cursor: grabbing;
            background-color: var(--main-level-2);
            height: unset;
            font-size: var(--fs-xl);
            height: var(--fs-xl);
            line-height: 1;
            padding: 0;
            text-align: center;
        } */
    }
    .moveable-control-box {
        .moveable-control.moveable-origin,
        .moveable-line.moveable-direction {
            border-color: transparent;
            background: none;
        }
    }
`,kd=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=$r(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(g.jsxs)(wd,{tabIndex:-1,className:"char-picker-container",children:[Object(g.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\xd8","\u203b"].map(e=>Object(g.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e))}),Object(g.jsx)("div",{className:"char-picker-guideline",children:Object(g.jsx)(vl,{content:Object(g.jsxs)(Hl,{children:[r["input.char-picker.guide.header"],Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(g.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var Sd=a(659);a(589),a(590);const Cd=Object(r.forwardRef)((e,t)=>{let{disabled:a,color:n,onSelect:i,onOffsetChange:o,onRemove:l}=e;const s=$r(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[p,b]=Object(r.useState)(-1),h=Object(r.useRef)(Ar()(m,250)).current;return Object(r.useImperativeHandle)(t,()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:i,round:o}=Math;d(t),m(i(0,n(100,o(100*parseFloat(a))))),b(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===p&&m(r(0,a(100,n(100*parseFloat(t)))))}})),Object(r.useEffect)(()=>{p>0&&(null===o||void 0===o||o(p,""+u/100))},[p,u,o]),Object(g.jsxs)("div",{className:"stop-point-control-panel",children:[Object(g.jsxs)("div",{className:"stop-point-offset-input",children:[Object(g.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(g.jsx)(Es.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(g.jsx)(tl.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===l||void 0===l?void 0:l(p),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(g.jsx)(Fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===i||void 0===i||i(e.hex)}})]})}),Fd=e=>({colorList:e,raw:Eo(e)}),Ld=e=>{var t,a;let{palette:n=Eo(Ro()),angle:i=180,memoizedOnChange:o}=e;const l=$r(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(i),[u,m]=Object(r.useState)(()=>{var e,t;const a=Mo(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}}),p=Object(r.useCallback)((e,t)=>m(a=>{const r=a.colorList.map(a=>a.id===e?{...a,offset:t}:a);return{...a,...Fd(r)}}),[]);Object(r.useEffect)(()=>{d(i)},[i]),Object(r.useEffect)(()=>{var e,t;const a=Mo(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})},[n]);const b=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{var e;u.colorList[0]&&b.current&&(b.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))},[u.colorList]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find(e=>e.id===a);e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}},100),()=>{e=!1}},[u]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&o(u.colorList,c)},200),()=>{e=!1}},[u,c,o]),Object(g.jsxs)("div",{className:Ko(ll,"gradient-picker-container"),children:[Object(g.jsxs)("div",{className:"gradient-angle-control",children:[Object(g.jsx)("h2",{children:l["input.name-style.gradient.color-point.label"]}),Object(g.jsxs)(tl.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m(e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort((e,t)=>Number(e.offset)-Number(t.offset));return{...e,...Fd(t)}})},children:[l["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(g.jsx)(cl,{angle:c,size:120,setAngle:d,children:Object(g.jsx)("h2",{children:l["input.name-style.gradient.gradient-direction.label"]})})]}),Object(g.jsx)("div",{className:"stop-color-picker-container",children:Object(g.jsx)(ol.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m(t=>({...t,...Fd(e)})),onColorStopSelect:e=>{var t;m(t=>({...t,currentControlId:e.id})),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(g.jsx)(Cd,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:p,onRemove:e=>{m(t=>{var a;const r=t.colorList.filter(t=>t.id!==e),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var i;n>0&&u.colorList[n]&&(null===(i=s.current)||void 0===i||i.setColor(u.colorList[n]));return{...Fd(r),currentControlId:n}})}})})})]})},Td=Object(h.b)(ed.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,Id=Object(h.b)(ed.Container)`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    max-width: 507px; // Alignment
    .preset-warning {
        flex: 0 0 100%;
        font-size: var(--fs-sm);
    }
    .panel-action {
        flex: 0 0 100%;
    }
    .open-preset-manager {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
`,Nd=Object(h.b)(ed.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Rd=h.b.div`
    line-height: 0;
    cursor: pointer;
    min-height: 26.13px;
    &.menu-active {
        outline: var(--bw-lg) solid var(--main-active);
        &:hover {
            outline: var(--bw-lg) solid var(--sub-active);
        }
    }
    &.preset-item-focused {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    :hover {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    img {
        max-width: 100%;
    }
`;var Ed=a(333);const Md=Object(r.forwardRef)((e,t)=>{let{className:a,defaultValue:n,fieldMap:i,labelMap:o,onChange:l}=e;const s=$r(),{x:c,y:d,color:u,width:m}=i,[p,b]=Object(r.useState)(()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}}),{x:h,y:f,color:v,width:y}=p,x=o[m];return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&l(p)},500),()=>{e=!1}},[p]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==p[a])return void b(t=>({...t,...e}))}})),Object(g.jsxs)("div",{className:a,children:[Object(g.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(g.jsxs)("div",{className:"line-position",children:[Object(g.jsx)(Ed.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==h&&void 0!==h?h:0,y:null!==f&&void 0!==f?f:0,onChange:e=>{let{x:t,y:a}=e;return b(e=>({...e,x:t,y:a}))}}),Object(g.jsxs)(_l,{className:"single-slider",children:[Object(g.jsxs)("span",{children:[s["input.name-style.slider.x-offset.label"],":"]}),Object(g.jsx)(Es.a,{size:"small",value:h,onChange:e=>b(t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))}),Object(g.jsxs)("span",{children:[s["input.name-style.slider.y-offset.label"],":"]}),Object(g.jsx)(Es.a,{size:"small",value:f,onChange:e=>b(t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))})]}),Object(g.jsxs)("div",{className:"single-slider",children:[x,":\xa0",Object(g.jsx)(Vc,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&b(t=>({...t,width:e}))}})]})]}),Object(g.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(g.jsx)(Fc.b,{colors:ba,color:v,onChangeComplete:e=>b(t=>({...t,color:e.hex}))})]})}),zd=Object(r.forwardRef)((e,t)=>{let{active:a,value:n,onClick:i,onCancel:o}=e;const l=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}})),Object(g.jsx)(Nd,{ref:l,...Ao({stopPropagation:!0,optionLength:se.length,setFocus:c,onTrigger:()=>{s>=0&&i(se[s])},onCancel:()=>{null===o||void 0===o||o()}}),children:se.map((e,t)=>{const{key:r,image:o,label:l}=e;return Object(g.jsx)(Rd,{className:Ko("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),i(e)},children:Object(g.jsx)("img",{className:"preset-preview",src:`/ygocarder/${o}`,alt:l})},r)})})}),Ad=h.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,Dd=h.b.div`
    width: 245px; // Exact same width with text color picker, for alignment
    color: var(--color);
    .emboss-control-title {
        font-size: var(--fs-sm);
        text-align: left;
        padding: var(--spacing-sm);
        padding-bottom: 0;
    }
    .emboss-control-left h2 {
        padding: var(--spacing-sm) 0;
    }
    .angle-picker-container {
        text-align: center;
    }
    .emboss-control-right {
        padding: var(--spacing-sm) 0;
    }
    .emboss-control-left {
        padding: var(--spacing-sm);
        padding-top: 0;
    }
    .slider-label {
        padding: 0;
        border: none;
    }
    .vertical-angle-control {
        grid-template-columns: max-content 60px 85px 12px;
    }
    .reset-button {
        cursor: pointer;
        &:hover {
            color: var(--color-heavy);
        }
    }
    .navigate-button {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
    .thickness-row {
        display: grid;
        grid-template-columns: max-content 1fr;
        column-gap: var(--spacing-sm);
        align-items: center;
        .ant-slider {
            height: unset;
            margin-top: var(--spacing-xs);
            margin-bottom: var(--spacing-xs);
        }
    }
`,Pd=.01;const Hd=ne(),Wd=Object(r.forwardRef)((e,t)=>{let{defaultPitch:a=Hd.embossPitch,defaultYaw:n=Hd.embossYaw,defaultThickness:i=Hd.embossThickness,materialColor:o,children:l,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=zo(),[p,b]=Object(r.useState)("#ffffff"),[h,f]=Object(r.useState)(i),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(a),O=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),k=Object(r.useRef)(i),[S]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{let e=!0;return m&&setTimeout(()=>{if(e){const e=Ja(v,x),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(p);(t[0]!==O.current[0]||t[1]!==O.current[1]||t[2]!==O.current[2]||Math.abs(e[0]-w.current[0])>Pd||Math.abs(e[1]-w.current[1])>Pd||Math.abs(e[2]-w.current[2])>Pd||h!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:v,pitch:x,thickness:h}),O.current=t,w.current=e,k.current=h}},150),()=>{e=!1}},[m,p,v,x,h]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&b(t),a&&j(a),r&&y(r),"number"===typeof n&&y(n)}})),Object(g.jsxs)(Dd,{className:Ko(ll,"emboss-control"),children:[Object(g.jsx)("div",{className:"emboss-control-title",children:l}),Object(g.jsxs)("div",{className:"emboss-control-left",children:[Object(g.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(g.jsx)(Ad,{className:"material-color",onClick:c,$color:o})]}),s["input.name-style.emboss.color.alert"](Object(g.jsx)("span",{className:c?"navigate-button":"",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(g.jsxs)("h2",{className:"thickness-row",children:[Object(g.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(g.jsx)(Vc,{value:h,min:0,max:4,onChange:e=>{"number"===typeof e&&(f(e),u())}})]}),Object(g.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(g.jsx)(C.a,{className:"reset-button",onClick:()=>{j(90),u()}})]}),Object(g.jsxs)(Yl,{className:"vertical-angle-control",children:[Object(g.jsx)("div",{className:"slider-label"}),Object(g.jsx)(Es.a,{size:"small",min:-90,max:90,onChange:e=>{j("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:x}),Object(g.jsx)(Vc,{min:-90,max:90,value:x,onChange:e=>{j(e),u()}}),Object(g.jsx)("div",{className:"slider-padding"})]}),Object(g.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(g.jsx)(C.a,{className:"reset-button",onClick:()=>{y(90),u()}})]}),Object(g.jsx)("div",{className:"horizontal-angle-contorl",children:Object(g.jsx)(cl,{angle:v,size:120,setAngle:e=>{y(e),u()}})})]}),S&&Object(g.jsxs)("div",{className:"emboss-control-right",children:[Object(g.jsx)("h2",{children:"Light color"}),Object(g.jsx)(Fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:p,onChange:e=>{b(e.hex),u()},onChangeComplete:e=>{b(e.hex),u()}})]})]})}),Bd=h.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,$d=e=>{let{color:t,onChange:a}=e;const[n,i]=Object(r.useState)(t);return Object(r.useEffect)(()=>{i(t)},[t]),Object(g.jsxs)(Bd,{children:[Object(g.jsx)(Fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>i(e.hex),onChangeComplete:e=>{i(e.hex),a(e.hex)}}),Object(g.jsx)(Fc.b,{colors:ba,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(592);const Yd=Object(r.forwardRef)((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:i,showExtraDecorativeOption:o,onChange:l}=e;const s=$r(),c=Object(r.useRef)(null),[d,u]=Cn("nameStylePresetList"),[m,p]=Object(r.useState)(-1),[h,f]=Object(r.useState)(!1),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(i),[O,w]=zo(),{db:k}=On(),S=Object(r.useRef)(Ar()(l,250)).current,C=ro(e=>e.setVisible),F=Object(r.useCallback)((e,t)=>{j(a=>({...a,gradientAngle:t,gradientColor:Eo(e)})),O()},[O]),L=yn(e=>e.setting.reduceMotionColor),T=Object(r.useMemo)(()=>{return[{label:(e=s)["input.name-style.type.auto.label"],value:re},...Object.values(Ie).map(t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}})];var e},[s]);Object(r.useEffect)(()=>{0!==w&&(y("custom"),S("custom",x))},[w]);const I=Object(r.useRef)(null),N=Object(r.useRef)(null),R=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r;j(t=>({...t,...e}));const{lineColor:n,lineWidth:i,lineOffsetX:o,lineOffsetY:l,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:p,embossThickness:b}=e;null===(t=I.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=N.current)||void 0===a||a.setValue({x:o,y:l,width:i,color:n}),null===(r=R.current)||void 0===r||r.setValue({pitch:m,yaw:p,thickness:b})}}));const{fillStyle:E,headTextFillStyle:M,hasOutline:z,hasShadow:A,hasGradient:D,gradientColor:P,gradientAngle:H,hasEmboss:W,embossPitch:B,embossYaw:$,embossThickness:Y,pattern:K,font:U}=x,{labelBackgroundColor:G,labelBackgroundImage:X}=null!==a&&void 0!==a?a:{},q={background:G,backgroundImage:X},V="custom"===v,_="predefined"===v,J="name-style-option-input-container",Q=()=>{y("auto"),"auto"!==v&&S("auto",x)},Z=()=>{var e;const t=x.preset?null===(e=le[x.preset])||void 0===e?void 0:e.value:{};y("predefined"),j(e=>({...e,...t})),S("predefined",{...x,...t})},ee=()=>{y("custom"),"custom"!==v&&S("custom",x)},te="color-picker";return Object(g.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(g.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(g.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(g.jsxs)("span",{className:"name-style-input-container",children:[Object(g.jsxs)("div",{id:J,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...Ao({setFocus:p,optionLength:3,onKeyPress:e=>{if(1===m&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),p(1),f(!0),setTimeout(()=>{var e;1===m&&(null===(e=c.current)||void 0===e||e.focus())},200),!1},onTrigger(){0===m&&Q(),1===m&&Z(),2===m&&ee()}}),children:[Object(g.jsxs)("label",{className:Ko("ant-radio-wrapper","auto"===v&&"ant-radio-wrapper-checked",0===m&&"ant-radio-focused"),onClick:()=>Q(),children:[Object(g.jsxs)("span",{className:"ant-radio "+("auto"===v?"ant-radio-checked":""),children:[Object(g.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(g.jsx)("span",{className:"ant-radio-inner"})]}),Object(g.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(g.jsx)("span",{className:"name-style-option-break"}),Object(g.jsx)("label",{className:Ko("ant-radio-wrapper",_&&"ant-radio-wrapper-checked",1===m&&"ant-radio-focused"),onClick:()=>Z(),children:Object(g.jsx)(hl.a,{visible:h,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(zd,{ref:c,active:_,value:x,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(J))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=le[a])||void 0===t?void 0:t.value:{};y("predefined"),j(e=>({...e,...r})),S("predefined",{...x,...r})}})}),children:Object(g.jsxs)("span",{className:"name-style-option-label",children:[Object(g.jsxs)("span",{className:"ant-radio "+(_?"ant-radio-checked":""),children:[Object(g.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(g.jsx)("span",{className:"ant-radio-inner"})]}),Object(g.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(g.jsx)("span",{className:"name-style-option-break"}),Object(g.jsx)("label",{className:Ko("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",2===m&&"ant-radio-focused"),onClick:()=>ee(),children:Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(g.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(g.jsx)("span",{className:"ant-radio-inner"})]}),Object(g.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(g.jsxs)("div",{className:"style-picker",children:[Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)("div",{className:"input-popover",children:[Object(g.jsxs)("div",{className:"custom-style-text",children:[Object(g.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(g.jsx)($d,{color:E,onChange:e=>{y("custom"),j(t=>({...t,fillStyle:e})),O()}})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"custom-style-text",children:[Object(g.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(g.jsx)(Fc.b,{colors:ba,color:M,onChangeComplete:e=>{y("custom"),j(t=>({...t,headTextFillStyle:e.hex})),O()}})]})]})}),placement:"bottom",children:Object(g.jsxs)(Kl,{id:te,$softMode:L,$active:V,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(g.jsx)(Sd.a,{})]})},"color-picker"),o&&Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)("div",{className:"input-popover",children:[Object(g.jsx)("h3",{className:"custom-style-expand",children:Object(g.jsx)(xl.a,{value:"has-shadow",checked:A,onChange:()=>{y("custom"),j(e=>({...e,hasShadow:!e.hasShadow})),O()},children:s["input.name-style.shadow.toggle.label"]})}),A&&Object(g.jsx)(Md,{ref:I,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(g.jsxs)(Kl,{$softMode:L,$active:V&&A,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(g.jsx)(Sd.a,{})]})},"shadow-picker"),Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)("div",{className:"input-popover",children:[Object(g.jsx)("h3",{className:"custom-style-expand",children:Object(g.jsx)(xl.a,{value:"has-line",checked:z,onChange:()=>{y("custom"),j(e=>({...e,hasOutline:!e.hasOutline})),O()},children:s["input.name-style.outline.toggle.label"]})}),z&&Object(g.jsx)(Md,{ref:N,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(g.jsxs)(Kl,{$softMode:L,$active:V&&z,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(g.jsx)(Sd.a,{})]})},"outline-picker"),o&&Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)("div",{className:"input-popover",children:[Object(g.jsx)("h3",{className:"custom-style-expand",children:Object(g.jsx)(xl.a,{value:"has-gradient",checked:D,onChange:()=>{y("custom"),j(e=>({...e,hasGradient:!e.hasGradient})),O()},children:s["input.name-style.gradient.toggle.label"]})}),D&&Object(g.jsx)("div",{className:"custom-style-gradient",children:Object(g.jsx)(Ld,{angle:H,palette:P,memoizedOnChange:F})})]})}),placement:"bottom",children:Object(g.jsxs)(Kl,{$softMode:L,$active:V&&D,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(g.jsx)(Sd.a,{})]})},"gradient-picker"),o&&Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(Td,{onClick:e=>e.stopPropagation(),children:[Object(g.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),de.map(e=>{let{key:t,patternImage:a}=e;return Object(g.jsx)(js,{className:["pattern-option",x.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{j(e=>({...e,pattern:t})),O()},children:a?Object(g.jsx)("img",{style:a?q:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)})]})}),placement:"bottomLeft",children:Object(g.jsx)(Kl,{$softMode:L,$active:V&&"string"===typeof K&&"none"!==K,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(ed.Container,{children:T.map(e=>{let{value:t,label:a}=e;return Object(g.jsx)(ed.Option,{className:U===t?"menu-active":"",onClick:()=>{j(e=>({...e,font:t})),O()},children:a},t)})})}),placement:"bottomLeft",children:Object(g.jsx)(Kl,{$softMode:L,$active:V&&"Auto"!==U,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),o&&Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)("div",{className:"input-popover",children:[Object(g.jsx)("h3",{className:"custom-style-expand",children:Object(g.jsx)(xl.a,{value:"has-emboss",checked:W,onChange:()=>{y("custom"),j(e=>({...e,hasEmboss:!e.hasEmboss})),O()},children:s["input.name-style.emboss.toggle.label"]})}),W&&Object(g.jsx)(Wd,{ref:R,language:s,defaultPitch:B,defaultYaw:$,defaultThickness:Y,materialColor:E,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(te))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;j(e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t})),O()},children:Object(g.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(g.jsx)(Kl,{$softMode:L,$active:V&&W,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker"),Object(g.jsxs)("div",{className:"save-preset-button-group",children:[Object(g.jsx)(tl.a,{size:"small",className:"picker-dropdown preset-picker-dropdown",type:"primary",onClick:async()=>{const e=Object(ue.a)();if(k){const t=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:e,content:JSON.stringify(x)}),await t.done}u(t=>[...t,{key:e,content:{...x}}])},children:s["input.name-style.preset.label"]}),Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay low-index",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(Id,{onClick:e=>e.stopPropagation(),children:[d.length>0&&Object(g.jsxs)("div",{className:"preset-warning",children:[s["preset.warning.label"],"\xa0",Object(g.jsx)("span",{className:"open-preset-manager",onClick:()=>C(!0),children:s["preset.manager.check.label"]})]}),0===d.length&&Object(g.jsx)(mc.a,{description:s["generic.empty.label"]}),d.map(e=>{let{key:t,content:r}=e;return Object(g.jsx)(ks,{language:s,frameInfo:a,presetContent:r,onActive:()=>{j({...r}),O()},onOverwrite:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:t,content:JSON.stringify(x)}),await e.done}u(e=>e.map(e=>e.key===t?{key:t,content:{...x}}:e))},onDelete:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.delete("presetNameStyleStore",t),await e.done}u(e=>e.filter(e=>e.key!==t))},children:r.preset},t)})]})}),placement:"bottomRight",children:Object(g.jsx)("div",{className:"custom-preset-button",children:Object(g.jsx)(Sd.a,{})})},"preset-picker")]})]})]})]})})}),Kd=h.a`
    .checkbox-train-input-group,
    .radio-train-input-group {
		display: flex;
		flex-wrap: wrap;
		column-gap: var(--spacing-xs);
		row-gap: var(--spacing-xs);
		box-shadow: none;
		border-radius: 0;
		&:focus-visible {
			outline: 3px solid var(--focus); // +1 width size to account for shadow
		}
		.ant-radio-button-wrapper:first-child,
		.ant-radio-button-wrapper:last-child {
			border-radius: 0;
		}
		.ant-radio-button-wrapper {
			flex: 1;
			white-space: nowrap;
			border: none;
			box-shadow: var(--bs-1);
			padding: 0;
			min-width: 90px;
			height: 28px;
			line-height: 28px;
			text-align: center;
			text-shadow: none;
			font-size: var(--fs-sm);
			&:hover {
				outline: var(--bw) solid var(--main-active);
				outline-offset: var(--bw);
			}
			&::before {
				display: none;
			}
		}
		.ant-radio-button-wrapper-checked {
			outline: var(--bw) solid var(--main-active);
			outline-offset: var(--bw);
		}
	}
`;var Ud=a(660);const Gd=Object(h.b)(Kl)`
    ${e=>{let{$inline:t}=e;return t?"margin-left: var(--spacing-xs);":"margin-top: var(--spacing);"}}
`,Xd=e=>{var t;let{inline:a,changeFrame:n}=e;const{setting:i}=yn(),{reduceMotionColor:o}=i,l=$r(),s=Object(r.useMemo)(()=>vd("unofficial"),[]),{frame:c}=fn(Object(kn.useShallow)(e=>{let{card:t}=e;return{frame:t.frame}}));return a?Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(qd,{className:"frame-radio",value:c,onChange:n,optionList:s})}),placement:"bottom",children:Object(g.jsx)(Go.a,{title:l["input.frame.unofficial.label"],children:Object(g.jsx)(Gd,{$softMode:o,$inline:a,$active:!1===(null===(t=Ue[c])||void 0===t?void 0:t.isOfficial),className:"picker-dropdown color-picker-dropdown",children:Object(g.jsx)(Ud.a,{})})})}):Object(g.jsx)(qd,{className:"frame-radio",value:c,onChange:n,optionList:s})},qd=Object(h.b)(Fl)`
	${Kd}
`,Vd=Object(r.forwardRef)((e,t)=>{let{onSTFrameChange:a,onPasswordChange:n,onStatChange:i}=e;const{setting:o}=yn(),{showExtraDecorativeOption:l}=o,s=Object(r.useMemo)(()=>vd().filter(e=>l||"normal"===e.edition),[l]),{frame:c,setCard:d}=fn(Object(kn.useShallow)(e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}})),u=Object(r.useCallback)(e=>{d(t=>{const{typeAbility:r,attribute:o,format:l,password:s,star:c,atk:d,def:u,linkRating:m}=t,p=`${e}`,b="spell"===p||"trap"===p,h=b||"speed-skill"===p,g="tcg"===l?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:Ke,f="spell"===p?[g["Spell Card"]]:"trap"===p?[g["Trap Card"]]:r,v="token"===p?$e[l]:s,y=h?"":""===d?"0":d,x=h?"":""===u?"0":u,j=h?"":m,O="token"===p?0:c;return n(v),b&&a(f),i(y,x,j),{...t,frame:p,isLink:"link"===p,attribute:"token"===p?F:b?`${p}`.toUpperCase():o,star:O,typeAbility:f,password:v,atk:y,def:x,linkRating:j}})},[d,n,a,i]);return Object(r.useImperativeHandle)(t,()=>({changeFrame:u})),Object(g.jsx)(qd,{className:"frame-radio",value:c,onChange:u,optionList:s,suffix:l&&Object(g.jsx)(Xd,{inline:!0,changeFrame:u})})}),_d=h.b.div`
    ${kl}
`,Jd=e=>{let{onChange:t,value:a,optionList:n,children:i,className:o}=e;const[l,s]=Object(r.useState)(-1),c=n.length;return Object(g.jsxs)(_d,{className:["ant-radio-group ant-radio-group-outline checkbox-train",o].join(" "),children:[i&&Object(g.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(g.jsx)("div",{className:"checkbox-train-input-group",...Ao({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[l];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter(t=>`${e.value}`!==t):[...a,`${e.value}`])}}}),children:n.map((e,r)=>{const{label:n,value:i,props:o,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${i}`),d=Object(g.jsxs)("label",{...o,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",l===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter(e=>`${i}`!==e):[...a,`${i}`])},children:[Object(g.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(g.jsx)("span",{className:"ant-radio-button-inner"})}),Object(g.jsx)("span",{className:"label",children:n})]},i);return s?Object(g.jsx)(Go.a,{title:s,children:d},i):d})})]})},Qd=Object(h.b)(wc)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    .card-image-source-input {
        display: flex;
        flex-direction: column;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: var(--cropper-width);
        text-align: center;
    }
    .layout-picker-subpanel {
        h2 {
            padding-left: 0;
            padding-right: 0;
        }
    }
`,Zd=Object(r.forwardRef)((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=$r(),{background:d,backgroundCrop:u,backgroundType:m,backgroundData:b,backgroundSource:h,backgroundFit:f,backgroundStyle:v,isPendulum:y,pendulumSize:x,opacity:j,getUpdater:O,setCard:w}=fn(Object(kn.useShallow)(e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d},getUpdater:u,setCard:m}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d,getUpdater:u,setCard:m}})),k=Object(r.useRef)(null),S=Object(r.useMemo)(()=>O("backgroundSource"),[O]),C=Object(r.useMemo)(()=>O("background"),[O]),F=Object(r.useMemo)(()=>O("backgroundData"),[O]),L=Object(r.useCallback)(e=>w(t=>({...t,backgroundFit:e})),[w]),T=Object(r.useCallback)(e=>w(t=>({...t,backgroundStyle:{...t.backgroundStyle,...e}})),[w]),I=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&w(t=>({...t,backgroundCrop:e}),a)},[s,w]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=k.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=k.current)||void 0===o||o.forceSource("online",t,a))}})),Object(g.jsx)(Qd,{ref:k,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:b,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:i,forceFit:f,imageStyle:v,onSourceChange:(e,t)=>{S(e),"offline"===e?F(t):C(t)},onCropChange:I,onTainted:l,onSourceLoaded:o,onForceFitChange:L,onImageStyleChange:T,onMaxSizeExceeded:e=>{Hr.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:p(y,j,m,x).backgroundRatio,beforeCropper:null,children:n})});var eu=a(661);a(593);const{width:tu,height:au}=c,ru=h.b.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    padding: 2px 0;
    align-items: center;
    .art-frame {
        span {
            padding: 0;
        }
    }
    div.ant-slider {
        .ant-slider-handle {
            height: 19px;
            top: 8px;
            border-radius: 0;
            width: 10px;
        }
        .ant-slider-step,
        .ant-slider-track,
        .ant-slider-rail {
            height: 10px;
        }
    }
    .card-opacity-slider {
        flex: 0 1 auto;
        .ant-slider {
            padding-top: 8px;
        }
    }
    .background-label {
        cursor: pointer;
        &:hover {
            .background-preview {
                box-shadow: 0 0 2px 0 #2a2a2a;
            }
        }
    }
    .background-preview {
        display: inline-block;
        line-height: 0;
        width: 17px;
        height: 17px; // Alignment
        align-self: center;
        border: 1px solid #333333;
        text-align: center;
        user-select: none;
        .background-preview-callback-passer {
            width: 100%;
            height: 100%;
        }
        .background-image-preview {
            max-width: 15px;
            max-height: 15px;
        }
        .no-background-icon {
            font-size: 15px; // Alignment
        }
    }
`,nu=h.b.div`
    --input-width: 315px;
    &.overlay-no-background-image {
        .card-image-cropper {
            grid-template-columns: 1fr;
        }
        .card-cropper {
            min-height: 0;
            line-height: 0;
            width: 0;
            visibility: hidden;
            position: absolute;
        }
        .card-image-source-input {
            padding-right: 0;
            margin-right: 0;
            border-right: none;
        }
        i {
            max-width: var(--input-width); // Alignment
        }
    }
    i {
        display: inline-block;
        font-size: var(--fs-sm);
        color: var(--color);
        font-weight: normal;
    }
    .background-picker {
        padding: var(--spacing-xs);
        /** No display none here, again we want to keep card cropper painted, just not visible */
        &.overlay-no-background {
            visibility: hidden;
            height: 0;
            width: 0;
            padding: 0;
        }
        .layout-picker-panel {
            margin-top: var(--spacing);
        }
        .card-image-input {
            text-align: center;
            max-width: var(--input-width);
        }
    }
    .card-image-source-input {
        height: 100%;
        justify-content: start;
        padding-right: var(--spacing-xs);
        margin-right: var(--spacing-xs);
        border-right: var(--bw) solid var(--sub-level-4);
        .type-section h2 {
            margin-top: var(--spacing-xs);
        }
        .background-type-picker {
            .radio-train-input-group {
                display: grid;
            }
            .ant-radio-button-wrapper {
                border-left: var(--bw) solid var(--sub-level-1);
            }
        }
        .color-section h2 {
            padding-top: 0;
            padding-left: 0;
        }
    }
    .color-section {
        > h2 + div {
            > div:first-child {
                box-shadow: none !important; // Override inline style
            }
            > div:nth-child(2) {
                border: var(--bw) solid var(--main-level-1);
            }
        }
    }
`,iu=h.b.div`
    max-width: 20rem;
    padding: var(--spacing-sm);
    small {
        display: block;
        line-height: var(--fs-lg);
        &.tooltip-disable {
            color: var(--color-dim);
        }
    }
    .layout-setting-option + .layout-setting-option {
        margin-top: var(--spacing-sm);
    }
`,ou=Object(r.forwardRef)((e,t)=>{var a;let{receivingCanvas:n,defaultValue:i,onTainted:o,onChange:s,onSourceLoaded:c,onCropChange:m}=e;const p=$r(),{background:b,backgroundData:h,backgroundSource:f,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,legacyTemplate:O,setCard:w}=fn(Object(kn.useShallow)(e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:i,isPendulum:o,legacyTemplate:l},setCard:s,getUpdater:c}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:c,hasBackground:i,isPendulum:o,legacyTemplate:l,setCard:s}})),{globalScale:k}=yn(Object(kn.useShallow)(e=>{let{setting:{globalScale:t}}=e;return{globalScale:t}})),[S,C]=Object(r.useState)(!0),[F,L]=Object(r.useState)(!0),[T,I]=Object(r.useState)(()=>({...u(),...i})),N=Object(r.useRef)(null),R=Object(r.useMemo)(()=>y("backgroundType"),[y]),E=Object(r.useMemo)(()=>y("legacyTemplate"),[y]),M=Object(r.useCallback)(e=>w(t=>({...t,hasBackground:e.target.checked})),[w]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&s(T)},500),()=>{e=!1}},[T]),Object(r.useEffect)(()=>{C(!1),setTimeout(()=>{L(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...i}=e;var o;"string"!==typeof t&&"string"!==typeof r||!a||(null===(o=N.current)||void 0===o||o.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const l in i)i[l]!==T[l]&&I(e=>({...e,...i}))}}));const z=0===(null!==b&&void 0!==b?b:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(g.jsxs)(ru,{className:"card-opacity-slider-container",children:[Object(g.jsx)(Go.a,{title:p["input.opacity.legacy.tooltip"],children:Object(g.jsx)($l,{className:"background-label",onClick:()=>E(e=>!e.legacyTemplate),children:Object(g.jsxs)("div",{className:"button-label",children:[Object(g.jsx)(xl.a,{checked:O}),"\xa0",p["input.opacity.legacy.label"]]})})}),Object(g.jsx)(hl.a,{overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(iu,{className:"input-popover",children:[Object(g.jsxs)("div",{className:"layout-setting-option",children:[Object(g.jsx)(xl.a,{className:"art-frame",onChange:e=>{I(t=>({...t,boundless:e.target.checked}))},checked:T.boundless,children:p["input.opacity.boundless.label"]}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{children:p["input.opacity.boundless.tooltip"]})]}),Object(g.jsxs)("div",{className:"layout-setting-option",children:[Object(g.jsx)(xl.a,{className:"art-frame",disabled:!T.boundless,onChange:e=>{I(t=>({...t,frameBorder:e.target.checked,boundless:!!e.target.checked||t.boundless}))},checked:T.frameBorder,children:p["input.opacity.overframe.label"]}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:T.boundless?"":"tooltip-disable",children:p["input.opacity.overframe.tooltip"]})]}),ma.map(e=>{let{labelKey:t,subType:a,tooltipKey:r}=e;const n=a&&T[a];return Object(g.jsxs)("div",{className:"layout-setting-option",children:[Object(g.jsx)(xl.a,{className:"art-frame",onChange:e=>I(t=>({...t,[a]:e.target.checked})),checked:n,children:p[t]}),Object(g.jsx)("br",{}),Object(g.jsx)("small",{children:p[r]})]},a)})]})}),children:Object(g.jsx)($l,{className:"background-label",children:Object(g.jsx)("div",{className:"button-label",children:p["input.opacity.setting.label"]})})}),Object(g.jsx)(hl.a,{visible:S,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:C,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",S?"picker-visible":"",F?"picker-hidden":""].join(" "),content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(nu,{className:["input-popover",z?"overlay-no-background-image":""].join(" "),children:[Object(g.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(g.jsx)(xl.a,{checked:x,onChange:e=>{M(e)},children:p["input.background.toggle-label"]}),Object(g.jsx)("br",{}),Object(g.jsx)("i",{children:p["input.background.description"]})]}),Object(g.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),style:{"--card-height":au*k+"px","--card-width":tu*k+"px","--global-scale":`${k}`,"--cropper-width":"300px"},children:Object(g.jsx)(Zd,{ref:N,receivingCanvas:n,onSourceLoaded:c,onTainted:o,onCropChange:m,backgroundColor:T.baseFill,children:Object(g.jsxs)("div",{className:"layout-picker-panel",children:[Object(g.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(g.jsx)("h2",{children:p["input.background-color.label"]}),Object(g.jsx)(Fc.b,{colors:ba,color:T.baseFill,onChangeComplete:e=>{I(t=>({...t,baseFill:e.hex}))}})]}),!z&&Object(g.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(g.jsx)("h2",{children:p["input.background-type.label"]}),Object(g.jsx)(Fl,{className:"background-type-picker",onChange:R,optionList:l({strict:p["input.background-type.strict.label"],fit:p["input.background-type.fit.label"],full:p["input.background-type.full.label"],frame:p["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(g.jsxs)($l,{className:"background-label",children:[Object(g.jsx)("div",{className:"background-preview",style:{backgroundColor:x?T.baseFill:d},children:x?b||h?Object(g.jsx)("img",{className:"background-image-preview",src:"online"===f?b:h,alt:"Background"}):null:Object(g.jsx)(eu.a,{className:"no-background-icon"})}),p["input.background.label"]]})}),pa.map(e=>{var t,a;let{labelKey:r,type:n}=e;return"pendulum"!==n||j?Object(g.jsxs)(Yl,{className:["card-opacity-slider"].join(" "),children:[Object(g.jsx)($l,{className:"slider-label",children:p[r]}),Object(g.jsx)(Es.a,{size:"small",min:0,max:100,onChange:e=>I(t=>({...t,[n]:"number"===typeof e?e:100})),value:null!==(t=T[n])&&void 0!==t?t:100}),Object(g.jsx)(Vc,{min:0,max:100,step:5,onChange:e=>I(t=>({...t,[n]:e})),value:null!==(a=T[n])&&void 0!==a?a:100}),Object(g.jsx)("div",{className:"slider-padding"})]},n):null})]})});var lu=a(662);const su=new Set(["1","2","3","4","5","i"]),cu=(e,t,a,r,n,i,o)=>{const l=e.substring(a,r),s="\n"===e[r]||!n;let c=l,d=2;switch(t){case"1":i?(c=`[[${l}]]${s?"":"\n"}`,d=s?4:5):(c=`[${l}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${l}}`;break;case"3":c=`{${l}|}`;break;case"4":c=`{${l}||}`,d=3;break;case"5":c=`{{${l}}}`,d=4;break;case"i":c=`<i>${l}</i>`,d=7}o(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},du=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:uu}=Is.a,mu=Object(r.forwardRef)((e,t)=>{let{id:a,allowHotkey:n,defaultValue:i,onTakePicker:o,onChange:l,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(i),[m,p]=Object(r.useState)(i),[b,h]=Object(r.useState)({id:"",placement:-1}),f=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;u.current=t,p(t)},[]);Object(r.useEffect)(()=>{du(b)},[b]),Object(r.useEffect)(()=>{l({target:{value:m}})},[m]);const v=e=>{e!==u.current&&f(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null})),Object(g.jsx)(uu,{dir:"auto",id:a,autoComplete:"off",onFocus:()=>a&&(null===o||void 0===o?void 0:o({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:i,key:o,metaKey:l}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(i||l)&&a&&d!==c&&su.has(o)&&(e.preventDefault(),cu(e.currentTarget.value,o,c,d,!0,e.shiftKey,(e,t)=>{f(e),h({id:a,placement:t})}))},onChange:f,...d})}),pu=Object(r.forwardRef)((e,t)=>{let{id:a,defaultValue:n,onTakePicker:i,onChange:o,onKeyDown:l,className:s,...c}=e;const{setting:d}=yn(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[p,b]=Object(r.useState)(n),[h,f]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;m.current=t,b(t)},[]);Object(r.useEffect)(()=>{du(h)},[h]),Object(r.useEffect)(()=>{o({target:{value:p}})},[p]);const y=e=>{e!==p&&v(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:y,getValue:()=>m.current})),Object(g.jsx)(Is.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:p,onKeyDown:e=>{var t,r;if(null===l||void 0===l||l(e),!u)return;const{ctrlKey:n,key:i,metaKey:o}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||o)&&a&&c!==s&&su.has(i)&&(e.preventDefault(),cu(e.currentTarget.value,i,s,c,!1,e.shiftKey,(e,t)=>{v(e),f({id:a,placement:t})}))},onChange:e=>v(e.target.value),...c})}),bu=h.b.div`
    align-self: flex-end;
    position: relative;
    min-height: 6px; // Alignment
    .attribute-region-picker {
        position: absolute;
        right: 0;
        top: calc(var(--spacing-xxs) * -1);
        z-index: 1;
    }
    .ant-radio-button-wrapper {
        font-size: var(--fs-xs);
        height: unset;
        line-height: 1.1;
    }
`,hu=h.b.div`
    .icon-button {
        margin-top: var(--spacing-xxs);
        margin-bottom: var(--spacing-xxs);
    }
`,gu=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{format:n,region:i,attribute:o,attributeType:l,getUpdater:s}=fn(Object(kn.useShallow)(e=>{let{card:{format:t,region:a,isLink:r,attribute:n,attributeType:i},getUpdater:o}=e;return{format:t,region:a,isLink:r,attribute:n,attributeType:i,getUpdater:o}})),c=Object(r.useRef)(null),{setting:d,updateSetting:u}=yn(),[,m]=Cn("resetCanvasCounter"),{showCreativeOption:p,showExtraDecorativeOption:h,showExtraAttribute:f}=d,[v,y]=Object(r.useState)("custom"===l),x=Object(r.useMemo)(()=>s("attribute"),[s]),j=Object(r.useMemo)(()=>s("attributeType"),[s]),O=Object(r.useMemo)(()=>s("region"),[s]),w=Object(r.useMemo)(()=>((e,t,a)=>L.map(a=>{var r;let{name:n,nameKey:i,isCreative:o}=a;return{label:n===F?Object(g.jsx)(b.a,{}):Object(g.jsx)(Go.a,{overlay:t[i],children:Object(g.jsx)("img",{alt:t[i],src:`/ygocarder/asset/image/attribute/attr-${null===(r=R[e])||void 0===r?void 0:r.fileKey}-${n.toLowerCase()}.png`})}),value:n,isCreative:o}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(i,a,p),[i,a,p]),k=Object(r.useMemo)(()=>((e,t,a)=>T.map(a=>{let{name:r,nameKey:n,isCreative:i}=a;return{label:Object(g.jsx)(Go.a,{overlay:t[n],children:Object(g.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:i}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(n,a,p),[n,a,p]),S=Object(r.useRef)("https://i.postimg.cc/3w5ZQ2rt/attr-custom-void.png");return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{attribute:t,attributeType:a}=e;var r;t&&("custom"===a&&(y(!0),u({showExtraAttribute:!1}),x(t),j("custom"),null===(r=c.current)||void 0===r||r.setValue(t)))}})),Object(g.jsxs)(g.Fragment,{children:[h&&Object(g.jsx)(bu,{className:Ko("attribute-region-container"),children:Object(g.jsx)(Fl,{className:"attribute-region-picker",optionList:Object.values(R).map(e=>{let{key:t}=e;return{value:t,label:t.toUpperCase()}}),value:i,onChange:O})}),Object(g.jsx)(Fl,{className:"fill-input-train span-input-train attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:w,suffix:h?Object(g.jsxs)(hu,{children:[Object(g.jsx)(Ol,{onClick:()=>{var e,t;y(!0),u({showExtraAttribute:!1}),x(null!==(e=null===(t=c.current)||void 0===t?void 0:t.getValue())&&void 0!==e?e:S.current),j("custom")},active:"custom"===l,Icon:fs.a,tooltipProps:{overlay:a["input.attribute.type-custom"]}}),Object(g.jsx)(Ol,{onClick:()=>{y(!1),u({showExtraAttribute:!0})},active:!!I[o],Icon:Ud.a,tooltipProps:{overlay:a["input.attribute.type-extra"]}})]}):null,children:Object(g.jsx)("span",{children:a["input.attribute.label"]})}),h&&f&&Object(g.jsx)(Fl,{className:"fill-input-train extra-attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:k,suffix:f?Object(g.jsx)(Ol,{onClick:()=>u({showExtraAttribute:!1}),Icon:lu.a,tooltipProps:{overlay:a["button.less.label"]}}):null,children:"\xa0"}),v&&Object(g.jsxs)("div",{className:"link-attribute-input",children:[Object(g.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:"\xa0"}),Object(g.jsx)(pu,{ref:c,placeholder:a["input.link.custom.placeholder"],defaultValue:"custom"===l?o:S.current,onChange:e=>{"custom"===l&&(S.current=e.target.value,x(e.target.value),m(e=>e+1))}}),Object(g.jsx)(Ol,{onClick:()=>y(!1),Icon:lu.a,tooltipProps:{overlay:a["button.less.label"]}})]})]})}),fu=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=fn(e=>e.getUpdater),i=Object(r.useRef)(null),o=Object(r.useMemo)(()=>n("effect",void 0,"debounce"),[n]);return Object(r.useEffect)(()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;null===(t=i.current)||void 0===t||t.setValue(e)}})),Object(g.jsx)(mu,{ref:i,id:"effect",allowHotkey:!0,defaultValue:fn.getState().card.effect,onChange:o,onTakePicker:a,autoSize:{minRows:9}})}),vu=h.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,yu=Object(r.forwardRef)((e,t)=>{const a=$r(),{isDuelTerminalCard:n,isSpeedCard:i,isLimitedEdition:o,isLegacyCard:l,setCard:s}=fn(Object(kn.useShallow)(e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}));Object(r.useImperativeHandle)(t,()=>({}));const c=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}),[s,l]),d=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{hasCornerText:!1,isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}),[s,l]),u=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{hasCornerText:!1,isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}),[s,l]),m=Object(r.useCallback)(e=>s(t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:i,isSpeedCard:o}=t;let l=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&o,l=!d&&!s&&r,c=!(l||s||c)&&i):(s=n,c=!s&&i,d=o,l=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:l,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}),[s]);return Object(g.jsxs)(vu,{className:"checkbox-input",children:[Object(g.jsx)(Go.a,{overlayClassName:"long-tooltip-overlay",overlay:a["input.legacy.tooltip"],children:Object(g.jsx)(xl.a,{className:"input-legacy",onChange:m,checked:l,tabIndex:0,children:a["input.legacy.label"]})}),Object(g.jsx)(xl.a,{className:"input-limited",onChange:c,checked:o,tabIndex:0,children:a["input.limited-edition.label"]}),Object(g.jsx)(xl.a,{className:"input-speed",onChange:u,checked:i,tabIndex:0,children:a["input.speed-duel.label"]}),Object(g.jsx)(xl.a,{className:"input-terminal",onChange:d,checked:n,tabIndex:0,children:a["input.duel-terminal.label"]})]})});var xu=a(663);const ju=Object(h.b)(ed.Container)`
    padding: var(--spacing-xs);
    position: relative;
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 480px;
        .radio-train-input-group {
            gap: var(--spacing);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        }
    }
    .ant-checkbox-wrapper {
        color: var(--color-heavy);
    }
    .inline-input {
        margin-bottom: var(--spacing-xs);
    }
    .checkbox-disabled {
        .ant-checkbox {
            display: none;
        }
        visibility: hidden; // Avoid collapsing
    }
    .frame-part-name {
        position: absolute;
        padding: 0 var(--spacing);
        top: calc(-1 * var(--spacing-sm));
        right: calc(-1 * var(--spacing-sm));
        border-radius: 0 0 0 var(--br-lg);
        background-color: var(--main-level-4);
        border-left: var(--bw) solid var(--sub-level-4);
        border-bottom: var(--bw) solid var(--sub-level-4);
        &:empty {
            display: none;
        }
    }
    .horizontal-sketch-picker {
        margin-top: var(--spacing);
    }
    ${Kd}
`,Ou=h.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,wu=h.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,ku=Object(h.b)(Fl)`
    &.radio-train {
        .ant-radio-button-wrapper-checked {
            &.ocg-button {
                background-color: var(--main-red-scale);
                border-color: var(--sub-red-scale);
                &:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
                    border-right-color: var(--sub-red-scale);
                }
                &:not(.ant-radio-button-wrapper-disabled):first-child {
                    border-color: var(--sub-red-scale);
                }
                &:hover {
                    background-color: var(--sub-red-scale);
                    color: var(--color-heavy);
                }
            }
            &.tcg-button {
                background-color: var(--main-blue-scale);
                border-color: var(--sub-blue-scale);
                &:hover {
                    background-color: var(--sub-blue-scale);
                    color: var(--color-heavy);
                }
            }
        }
        .ocg-button {
            color: var(--color-heavy);
            &:hover {
                color: var(--sub-red-scale);
            }
        }
        .tcg-button {
            color: var(--color-heavy);
            &:hover {
                color: var(--sub-blue-scale);
            }
        }
    }
`,Su=h.b.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
    .checkbox-input {
        align-self: center;
        .ant-checkbox + span {
            user-select: none;
        }
    }
    .sticker-input,
    .checkbox-input {
        grid-column: span 2;
    }
    .sticker-input .ant-radio-button-wrapper {
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
    }
`,Cu=Object(h.b)(Ou)`
    .auto-link-rating-input {
        margin-left: var(--spacing-sm);
    }
    .auto-link-rating {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 1;
        text-align: center;
        padding: var(--spacing-xs);
        background: var(--main-level-4);
        border-radius: var(--br-lg);
        font-family: 'RoGSanSrfStd-Bd';
        box-shadow: var(--bs-button);
    }
`,Fu=Object(r.forwardRef)((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:i}=e;const o=$r(),{autoLinkRating:l,format:s,hasCornerText:c,isFirstEdition:d,isLegacyCard:u,isLink:m,linkRating:p,linkRatingDisplayMode:b,showDefAndLink:h,sticker:f,getUpdater:v,setCard:y}=fn(Object(kn.useShallow)(e=>{let{card:{isLegacyCard:t,sticker:a,format:r,flag:n,isLink:i,linkRating:o,linkMap:l,isFirstEdition:s,hasCornerText:c},getUpdater:d,setCard:u}=e;return{autoLinkRating:l.length,format:r,hasCornerText:c,isFirstEdition:s,isLegacyCard:t,isLink:i,linkRating:o,linkRatingDisplayMode:n[ve],showDefAndLink:1===n[fe],sticker:a,getUpdater:d,setCard:u}})),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O=Object(r.useRef)(null),w=Object(r.useRef)(null),k=Object(r.useRef)(null),S=Object(r.useRef)(null),F=Object(r.useRef)(null),L=!0,T=or(b,m),I=!T||h,N=[L,I,T].filter(e=>!0===e).length%2===1,R=s&&We[s]?We[s]:We.tcg,E=Object(r.useMemo)(()=>v("atk",e=>e),[v]),M=Object(r.useMemo)(()=>v("def",e=>e),[v]),z=Object(r.useMemo)(()=>v("linkRating",e=>e),[v]),A=Object(r.useMemo)(()=>v("password",void 0,"debounce"),[v]),D=Object(r.useMemo)(()=>v("sticker"),[v]),P=Object(r.useMemo)(()=>v("creator",void 0,"debounce"),[v]),H=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}),[y,u]),W=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{hasCornerText:!0}:{isSpeedCard:!1,isDuelTerminalCard:!1,hasCornerText:!0}:{hasCornerText:!1},{...t,...a}}),[y,u]),B=Object(r.useMemo)(()=>v("firstEditionText",void 0,"debounce"),[v]),$=Object(r.useMemo)(()=>v("cornerText",void 0,"debounce"),[v]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r,n,i,o;let{password:l,creator:s,atk:c,def:d,linkRating:u,firstEditionText:m,cornerText:p}=e;"string"===typeof c&&(null===(t=O.current)||void 0===t||t.setValue(c)),"string"===typeof d&&(null===(a=w.current)||void 0===a||a.setValue(d)),"string"===typeof l&&(null===(r=x.current)||void 0===r||r.setValue(l)),"string"===typeof s&&(null===(n=j.current)||void 0===n||n.setValue(s)),"string"===typeof u&&(null===(i=k.current)||void 0===i||i.setValue(u)),"string"===typeof m&&(null===(o=S.current)||void 0===o||o.setValue(m))}})),Object(g.jsxs)(Su,{className:"card-footer-input",children:[(a||n)&&Object(g.jsxs)(g.Fragment,{children:[L&&Object(g.jsx)(pu,{ref:O,id:"atk",addonBefore:o["input.atk.label"],defaultValue:fn.getState().card.atk,onChange:E,onTakePicker:i}),I&&Object(g.jsx)(pu,{ref:w,id:"def",addonBefore:o["input.def.label"],defaultValue:fn.getState().card.def,onChange:M,onTakePicker:i}),N&&Object(g.jsx)("div",{}),T&&Object(g.jsx)(pu,{ref:k,id:"link",addonBefore:Object(g.jsxs)(Cu,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:o["input.link.label"]}),Object(g.jsx)(Go.a,{title:o["input.link.auto.tooltip"],children:Object(g.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof p&&p.length>0?Object(g.jsx)(xl.a,{onChange:e=>{var t;e.target.checked&&(z(""),null===(t=k.current)||void 0===t||t.setValue(""))}}):Object(g.jsx)("div",{className:"auto-link-rating",children:m?l:"-"})})})]}),defaultValue:`${fn.getState().card.linkRating}`,onChange:z,onTakePicker:i,placeholder:o["input.link.custom.placeholder"]})]}),Object(g.jsx)(pu,{ref:x,id:"password",addonBefore:Object(g.jsxs)(Ou,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:o["input.password.label"]}),Object(g.jsx)(Ol,{onClick:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.setValue(`${Do("0123456789",8)}`)},Icon:C.a,tooltipProps:{overlay:o["button.randomize.label"]}})]}),defaultValue:fn.getState().card.password,onChange:A,onTakePicker:i}),Object(g.jsx)(pu,{ref:j,id:"creator",addonBefore:Object(g.jsxs)(Ou,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:o["input.copyright.label"]}),Object(g.jsx)(al.a,{placement:"topLeft",arrow:!0,overlay:Object(g.jsx)(Uc.a,{onClick:e=>e.domEvent.stopPropagation(),children:R.map((e,t)=>Object(g.jsx)(Uc.a.Item,{onClick:()=>{var t;null===(t=j.current)||void 0===t||t.setValue(e)},children:e},`${t}`))}),children:Object(g.jsx)("div",{children:Object(g.jsx)(Ol,{onClick:()=>{},Icon:xu.a})})})]}),defaultValue:fn.getState().card.creator,onChange:P,onTakePicker:i}),Object(g.jsx)(pu,{ref:S,id:"firstEditionText",className:"first-edition-text",addonBefore:Object(g.jsxs)(Ou,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:o["input.1st-edition.label"]}),"\xa0",Object(g.jsx)(xl.a,{className:"input-1st",onChange:H,checked:d,tabIndex:0}),Object(g.jsx)(al.a,{placement:"topLeft",arrow:!0,overlay:Object(g.jsx)(Uc.a,{onClick:e=>e.domEvent.stopPropagation(),children:Be.map((e,t)=>{let{label:a,value:r}=e;return Object(g.jsx)(Uc.a.Item,{onClick:()=>{var e;H({target:{checked:!0}}),null===(e=S.current)||void 0===e||e.setValue(r)},children:a},`${t}`)})}),children:Object(g.jsx)("div",{children:Object(g.jsx)(Ol,{onClick:()=>{},Icon:xu.a})})})]}),defaultValue:fn.getState().card.firstEditionText,onChange:B,onTakePicker:i}),Object(g.jsx)(pu,{ref:F,id:"cornerText",className:"corner-text",addonBefore:Object(g.jsxs)(Ou,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:o["input.corner.label"]}),"\xa0",Object(g.jsx)(xl.a,{className:"input-corner",onChange:W,checked:c,tabIndex:0})]}),defaultValue:fn.getState().card.cornerText,onChange:$,onTakePicker:i}),Object(g.jsx)(yu,{}),Object(g.jsx)(Fl,{className:"sticker-input fill-input-train",value:f,onChange:D,optionList:xd,children:Object(g.jsx)("span",{children:o["input.sticker.label"]})})]})}),Lu=h.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,Tu=Object(h.b)(Fl)`
    text-align: left;
    .ant-input-group-addon {
        flex: 0 0 auto;
        text-align: left;
    }
    .radio-train-input-group {
        flex: 1;
    }
    .ant-radio-button-wrapper {
        padding: 0 var(--spacing-xs);
    }
`,Iu=Object(h.b)(ed.Option)`
    display: grid;
    grid-template-columns: 30px 1fr;
    column-gap: var(--spacing-xs);
    .tag {
        background: var(--sub-level-2);
        color: var(--color-contrast);
        box-shadow: 0 0 1px 1px var(--main-level-1) inset;
        font-size: var(--fs-xs);
        text-align: center;
        line-height: 1.5;
    }
    &.default {
        .tag {
            background: var(--sub-level-4);
        }
    }
`,Nu=e=>{let{finishValueList:t,changeFinish:a,language:n,showCreativeOption:i}=e;const[o,l]=Object(r.useState)(j.art.key),s={[j.attribute.key]:t[1],[j.background.key]:t[4],[j.icon.key]:t[2],[j.sticker.key]:t[3],[j.art.key]:t[0]},c=Object.values(s).some(e=>"normal"!==e),d=Object(r.useMemo)(()=>{return e=n,Object.values(j).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[n]),u=i?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[j[o].labelKey]," ",Object(g.jsx)(Sd.a,{})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[j[o].labelKey]]}),m=Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(ed.Container,{children:[Object(g.jsx)(Zc,{children:n["input.other-finish.label"]}),d.map(e=>{let{label:t,value:a}=e;return Object(g.jsxs)(Iu,{className:Ko("normal"===s[a]?"default":"",o===a?"menu-active":""),onClick:()=>{l(a)},children:[Object(g.jsx)("div",{className:"value",children:Object(g.jsx)("div",{className:"tag",children:"normal"===s[a]||""===s[a]?"Auto":s[a]})}),Object(g.jsx)("div",{className:"label",children:t})]},a)})]})}),placement:"bottomRight",children:Object(g.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${i?"":"disabled"}`,children:u})},"icon-type-picker");return Object(g.jsx)(Tu,{className:"art-finish-checkbox fill-input-train",value:s[o],onChange:e=>{const t={...s};t[o]=`${e}`,a(t)},optionList:fd,children:m})},Ru=Object(r.forwardRef)((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=$r(),{opacity:d,artFinish:u,otherFinish:m,linkMap:b,isPendulum:h,pendulumSize:f,isLink:v,art:y,artCrop:x,artData:O,artSource:w,artFit:k,artStyle:S,getUpdater:C,setCard:F}=fn(Object(kn.useShallow)(e=>{let{card:{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:p},getUpdater:b,setCard:h}=e;return{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:p,getUpdater:b,setCard:h}})),L=Object(r.useRef)(null),T=Object(r.useMemo)(()=>C("linkMap"),[C]),I=Object(r.useCallback)(e=>F(t=>({...t,isLink:e})),[F]),N=Object(r.useMemo)(()=>C("art"),[C]),R=Object(r.useMemo)(()=>C("artData"),[C]),E=Object(r.useCallback)(e=>F(t=>({...t,artFit:e})),[F]),M=Object(r.useCallback)(e=>F(t=>({...t,artStyle:{...t.artStyle,...e}})),[F]),z=Object(r.useMemo)(()=>C("artSource"),[C]),A=Object(r.useMemo)(()=>C("artFinish"),[C]),D=Object(r.useMemo)(()=>C("otherFinish"),[C]),P=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&F(t=>({...t,artCrop:e}),a)},[s,F]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=L.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=L.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=L.current)||void 0===o||o.forceSource("online",t,a))}})),Object(g.jsx)(wc,{ref:L,title:c["input.card-art.label"],defaultSourceType:w,defaultExternalSource:y,defaultInternalSource:O,defaultCropInfo:x,forceFit:k,imageStyle:S,receivingCanvas:i,onSourceChange:(e,t)=>{z(e),"offline"===e?R(t):N(t)},onCropChange:P,onTainted:l,onSourceLoaded:o,onForceFitChange:E,onImageStyleChange:M,onMaxSizeExceeded:e=>{Hr.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:p(h,d,void 0,f).ratio,beforeCropper:a?Object(g.jsx)(Nu,{finishValueList:[u,...m],changeFinish:e=>{A(e[j.art.key]),D([e[j.attribute.key],e[j.icon.key],e[j.sticker.key],e[j.background.key]])},language:c,showCreativeOption:n}):null,children:Object(g.jsx)(Lu,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(g.jsx)(Kc,{active:!0===v,defaultValue:b,onChange:T,onStatusChange:I},`link-${JSON.stringify(b)}`)})})}),Eu=h.b.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    width: 100%;
    .name-input {
        flex: 3;
        min-width: 400px;
    }
    .set-id-input {
        flex: 1;
        min-width: 250px;
    }
`,Mu=h.b.span`
    cursor: pointer;
`,zu=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=$r(),{name:i,format:o,getUpdater:l}=fn(Object(kn.useShallow)(e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}})),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)(()=>l("setId"),[l]),u=Object(r.useMemo)(()=>l("name",void 0,"debounce"),[l]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}})),Object(g.jsxs)(Eu,{className:"name-id-input",children:[Object(g.jsx)(pu,{ref:s,dir:"auto",id:"name",defaultValue:i,addonBefore:Object(g.jsx)(Go.a,{title:n["input.name.tooltip"],children:Object(g.jsx)(Mu,{onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(Fr(i))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(g.jsx)(pu,{ref:c,id:"set-id",defaultValue:fn.getState().card.setId,addonBefore:Object(g.jsxs)(Ou,{className:"input-label-with-button",children:[Object(g.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(g.jsx)(Ol,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>Do("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+Do("0000000000111111111122222222223456789",1)+Do("0123456789",2))(o))},Icon:C.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})});var Au=a(664);const{width:Du,height:Pu}=c,Hu=h.b.div`
    margin-top: var(--spacing-sm);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
    row-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    color: var(--color);
    .preset-panel-top {
        grid-column: -1 / 1;
    }
    .preset-warning {
        font-size: var(--fs-sm);
    }
    .preview-container {
        line-height: 0;
        padding: var(--spacing-xxs) 0;
        border-radius: var(--br);
        cursor: pointer;
        border: var(--bw) solid transparent;
        .card-layout-container {
            pointer-events: none;
        }
        &:hover {
            border-color: var(--main-active);
        }
    }
    .open-preset-manager {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
`,Wu=e=>{let{isPendulum:t,onOverwrite:a,onActive:r,language:n}=e;const{db:i}=On(),[o,l]=Cn("layoutPresetList"),s=ro(e=>e.setVisible);return 0===o.length?Object(g.jsx)(g.Fragment,{}):Object(g.jsxs)(Hu,{className:"frame-preset-panel",children:[o.length>0&&Object(g.jsx)("div",{className:"preset-panel-top",children:Object(g.jsxs)("div",{className:"preset-warning",children:[n["preset.warning.label"],"\xa0",Object(g.jsx)("span",{className:"open-preset-manager",onClick:()=>s(!0),children:n["preset.manager.check.label"]})]})}),o.map(e=>{let{content:o,key:s}=e;const{dyeList:c,foil:d,frame:u,pendulumFrame:m,leftFrame:p,pendulumRightFrame:b,rightFrame:h,effectStyle:f,pendulumStyle:v}=o,y={frame:u,topLeftFrame:p,topRightFrame:h,bottomLeftFrame:m,bottomRightFrame:b,effectBackground:null===f||void 0===f?void 0:f.background,pendulumEffectBackground:null===v||void 0===v?void 0:v.background};return Object(g.jsx)(Ls,{width:Math.round(40*Du/Pu),height:40,isPendulum:t,resolvedLayoutState:lr(y,t),tabIndex:-1,dyeList:c,foil:d,language:n,onActive:()=>r(o),onDelete:async()=>{if(i){const e=i.transaction("presetLayoutStore","readwrite");await i.delete("presetLayoutStore",s),await e.done}l(e=>e.filter(e=>{let{key:t}=e;return s!==t}))},onOverwrite:a?()=>null===a||void 0===a?void 0:a(s):void 0})})]})},Bu=Object(h.b)(wc)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    .card-image-source-input {
        display: flex;
        flex-direction: column;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: var(--cropper-width);
        text-align: center;
    }
    .layout-picker-subpanel {
        h2 {
            padding-left: 0;
            padding-right: 0;
        }
    }
`,$u=Object(r.forwardRef)((e,t)=>{let{children:a,receivingCanvas:n,onSourceLoaded:i,onTainted:o,onCropChange:l}=e;const s=$r(),{overlay:c,overlayCrop:d,overlayData:u,overlaySource:p,overlayFit:b,overlayStyle:h,getUpdater:f,setCard:v}=fn(Object(kn.useShallow)(e=>{let{card:{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n,overlayFit:i,overlayStyle:o},getUpdater:l,setCard:s}=e;return{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n,overlayFit:i,overlayStyle:o,getUpdater:l,setCard:s}})),y=Object(r.useRef)(null),x=Object(r.useMemo)(()=>f("overlaySource"),[f]),j=Object(r.useMemo)(()=>f("overlay"),[f]),O=Object(r.useMemo)(()=>f("overlayData"),[f]),w=Object(r.useCallback)(e=>v(t=>({...t,overlayFit:e})),[v]),k=Object(r.useCallback)(e=>v(t=>({...t,overlayStyle:{...t.overlayStyle,...e}})),[v]),S=Object(r.useCallback)((e,t,a)=>{null===l||void 0===l||l(e,t),e&&v(t=>({...t,overlayCrop:e}),a)},[l,v]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=y.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=y.current)||void 0===o||o.forceSource("online",t,a))}})),Object(g.jsx)(Bu,{ref:y,title:s["input.background-image.label"],defaultSourceType:p,defaultInternalSource:u,defaultExternalSource:c,defaultCropInfo:d,receivingCanvas:n,forceFit:b,imageStyle:h,onSourceChange:(e,t)=>{x(e),"offline"===e?O(t):j(t)},onCropChange:S,onTainted:o,onSourceLoaded:i,onForceFitChange:w,onImageStyleChange:k,onMaxSizeExceeded:e=>{Hr.a.info({description:s["error.max-size.description"](e),message:s["error.max-size.message"]})},ratio:m.overframeCard.backgroundRatio,beforeCropper:null,isNotFoundAnError:!1,children:a})}),Yu=h.b.div`
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border-top: var(--bw) solid var(--sub-level-3);
    > * + * {
        margin-top: var(--spacing-sm);
    }
    .link-rating-behavior-panel {
        .radio-train-input-group {
            flex: 0 0 auto;
            margin-right: var(--spacing-sm);
        }
        label {
            flex: 1 1 auto;
            text-align: left;
            font-size: var(--fs);
            color: var(--color);
        }
    }
`,Ku=()=>{const e=$r(),{flag:t,setCard:a}=fn(Object(kn.useShallow)(e=>{let{card:{flag:t},setCard:a,getUpdater:r}=e;return{flag:t,setCard:a,getUpdater:r}})),r=(e,t)=>a(a=>{const r=[...a.flag];return r[t]=e,{...a,flag:r}});return Object(g.jsx)(Yu,{children:t.map((e,t)=>({component:ge[t],value:e,index:t})).sort((e,t)=>e.component.order-t.component.order).map(t=>{let{component:a,value:n,index:i}=t;const{labelKey:o,type:l}=null!==a&&void 0!==a?a:{};return"checkbox"===l?Object(g.jsx)("div",{children:Object(g.jsx)(xl.a,{checked:0!==n,onChange:e=>{const t=e.target.checked?1:0;r(t,i)},children:e[o]})},o):"link-rating-behavior"===l?Object(g.jsx)(Fl,{className:"link-rating-behavior-panel",onChange:e=>r(Number(e),i),optionList:[{label:e["input.flag.link-rating-behavior.auto"],value:0},{label:e["input.flag.link-rating-behavior.show"],value:1},{label:e["input.flag.link-rating-behavior.hide"],value:2}],value:n,suffix:Object(g.jsx)("label",{children:e[o]})},o):null})})},{width:Uu,height:Gu}=c,Xu=h.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${ju} {
        border: none;
        box-shadow: none;
        padding: 0;
    }
    .visual-preview-container {
        color: var(--color-heavy);
        width: 110px; // Alignment
        text-align: center;
        label {
            display: block;
            padding-bottom: var(--spacing-xxs);
        }
        .frame-info-block {
			height: 30px; // Alignment
			line-height: 28px; // Alignment with border 1px
            border: var(--bw) solid var(--sub-level-1);
            background-color: var(--main-level-1);
            margin-bottom: var(--spacing-xs);
            cursor: pointer;
            .frame-info-block-label {
                padding: 0 var(--spacing-xs);
            }
            &.active {
                border: var(--bw) dashed var(--main-level-2);
            }
            &:hover {
                border: var(--bw) solid var(--main-level-2);
            }
        }
    }
    .frame-action {
        .ant-btn {
            width: 100%;
            & + .ant-btn {
                margin-top: var(--spacing-xs);
            }
        }
    }
    .frame-preset-panel {
        grid-column: -1 / 1;
        padding-top: var(--spacing-sm);
        border-top: var(--bw) solid var(--sub-level-3);
    }
    .radio-train.overlay-radio {
        display: grid;
        margin-top: var(--spacing-sm);
        .ant-radio-button-wrapper {
            font-size: var(--fs);
            min-width: unset;
        }
        .standalone-addon {
            border: none;
            padding-bottom: var(--spacing-xxs);
        }
        .radio-train-input-group {
            gap: 0;
        }
        .ant-radio-button-wrapper {
            &:hover {
                outline: none;
            }
        }
    }
    .part-radio {
        .radio-train-input-group {
            grid-template-columns: 1fr;
        }
    }
    .foil-radio {
        grid-template-columns: var(--width-label) 1fr;
        .radio-train-input-group {
            grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        }
    }
    .custom-overlay-group {
        padding-top: var(--spacing-2xl);
        .card-image-source-input {
            width: 280px;
            padding-right: var(--spacing-sm);
        }
    }
    .custom-overlay-group-hidden {
        visibility: hidden;
        position: absolute;
        width: 0;
        .custom-overlay-part-group {
            display: none;
        }
    }
    .custom-overlay-part-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-sm);
    }
`,qu=Object(r.forwardRef)((e,t)=>{var a,n,i,o,l,c;let{receivingCanvas:d,onSourceLoaded:u,onTainted:m,onCropChange:p,frameList:b,onFrameChange:h,onCancel:f}=e;const{db:v}=On(),y=$r(),{isPendulum:x,foil:j,overlayType:O,overlaySource:w,overlay:k,overlayData:C,frame:F,leftFrame:L,rightFrame:T,pendulumFrame:I,pendulumRightFrame:N,effectBackground:R,pendulumEffectBackground:E,dyeList:M,setCard:z,getUpdater:A}=fn(Object(kn.useShallow)(e=>{let{card:{isPendulum:t,foil:a,overlayType:r,overlaySource:n,overlay:i,overlayData:o,frame:l,leftFrame:s,rightFrame:c,pendulumFrame:d,pendulumRightFrame:u,dyeList:m,effectStyle:p,pendulumStyle:b},setCard:h,getUpdater:g}=e;return{isPendulum:t,foil:a,overlayType:r,overlaySource:n,overlay:i,overlayData:o,frame:l,leftFrame:s,rightFrame:c,pendulumFrame:d,pendulumRightFrame:u,effectBackground:p.background,pendulumEffectBackground:b.background,dyeList:m,setCard:h,getUpdater:g}})),{globalScale:D}=yn(Object(kn.useShallow)(e=>{let{setting:{globalScale:t}}=e;return{globalScale:t}})),[,P]=Cn("layoutPresetList"),H=Object(r.useRef)({topLeftFrame:"auto"===I?"spell":I,topRightFrame:"auto"===I?"spell":I,bottomLeftFrame:"auto"===I?"spell":I,bottomRightFrame:"auto"===I?"spell":I,effectBackground:"auto"===I?"spell":I,pendulumEffectBackground:"auto"===I?"spell":I}),[W,B]=Object(r.useState)(0),[$,Y]=Object(r.useState)("frame"),K="frame-layout-main",U=Object(r.useRef)(null),G=Object(r.useMemo)(()=>gd(y),[y]),X=Object(r.useMemo)(()=>s(y),[y]);Object(r.useEffect)(()=>{"pendulumEffectBackground"!==$||x||Y("frame")},[$,x]),Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=document.getElementById(K))||void 0===e?void 0:e.focus()}}));const q=Object(r.useMemo)(()=>A("foil"),[A]),V=Object(r.useMemo)(()=>A("overlayType"),[A]),_=Object(r.useMemo)(()=>A("pendulumFrame"),[A]),J=Object(r.useMemo)(()=>A("pendulumRightFrame"),[A]),Q=Object(r.useMemo)(()=>A("leftFrame"),[A]),Z=Object(r.useMemo)(()=>A("rightFrame"),[A]),ee=e=>z(t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}}),te=e=>z(t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}}),ae=Object(r.useMemo)(()=>A("dyeList"),[A]),re=e=>{"bottomLeftFrame"===$&&_(e),"bottomRightFrame"===$&&J(e),"topLeftFrame"===$&&Q(e),"topRightFrame"===$&&Z(e),"effectBackground"===$&&ee(e),"pendulumEffectBackground"===$&&te(e)},ne=O.split("|"),ie=ne.find(e=>e.includes("border,")),oe=ne.find(e=>e.includes("frame,")),le=null!==(a=null===ie||void 0===ie||null===(n=ie.split(","))||void 0===n?void 0:n[1])&&void 0!==a?a:"source-in",se=null!==(i=null===oe||void 0===oe||null===(o=oe.split(","))||void 0===o?void 0:o[1])&&void 0!==i?i:"none",ce={frame:F,topLeftFrame:L,topRightFrame:T,bottomLeftFrame:I,bottomRightFrame:N,effectBackground:R,pendulumEffectBackground:E},de=ce[$],me=lr(ce,x),pe=S[$],be="online"===w&&""!==k.trim()||"offline"===w&&""!==C.trim();return Object(g.jsxs)(Xu,{children:[Object(g.jsxs)("div",{className:"visual-preview-container",children:[Object(g.jsx)("label",{children:y["input.advanced-frame.main.label"]}),Object(g.jsx)(uc,{id:K,tabIndex:0,className:"frame"===$?"active":"",...null!==(l=Ue[F])&&void 0!==l?l:Xe,onClick:()=>Y("frame")}),Object(g.jsx)("label",{children:y["input.advanced-frame.detailed.label"]}),Object(g.jsx)(Cs,{width:2*Math.round(Uu/20),height:2*Math.round(Gu/20),isPendulum:x,baseLayoutState:ce,resolvedLayoutState:me,activeLayout:$,onLayoutSelect:e=>Y(e),dyeList:M,foil:j,language:y,vertical:!0}),Object(g.jsxs)("div",{className:"frame-action",children:[Object(g.jsx)(tl.a,{size:"small",onClick:()=>{_("auto"),J("auto"),Q("auto"),Z("auto"),ee("auto"),te("auto"),q("normal"),V(ca().overlayType),ae(["","","","","","",""])},children:y["generic.reset.label"]}),Object(g.jsx)(tl.a,{size:"small",type:"primary",onClick:async()=>{const e=Object(ue.a)(),t={foil:j,frame:F,leftFrame:L,pendulumFrame:I,pendulumRightFrame:N,rightFrame:T,effectStyle:{background:R},pendulumStyle:{background:E},dyeList:[...M]};if(v){const a=v.transaction("presetLayoutStore","readwrite");await v.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}P(a=>[...a,{key:e,content:t}])},children:y["input.advanced-frame.save.label"]})]})]}),Object(g.jsx)("div",{children:Object(g.jsxs)(ju,{className:"pendulum-frame-picker",...Ao({stopPropagation:!0,optionLength:b.length,setFocus:B,onTrigger:()=>{W>=0&&re(b[W].value)},onCancel:f}),children:[Object(g.jsx)("div",{className:"frame-part-name",children:y[null===(c=qe[$])||void 0===c?void 0:c.labelKey]}),"foil"!==$&&Object(g.jsx)(xl.a,{className:Ko("inline-input","frame"===$?"checkbox-disabled":""),checked:"auto"===de,disabled:"frame"===$,onChange:e=>{var t;re(e.target.checked?"auto":null!==(t=H.current[$])&&void 0!==t?t:"auto")},children:y["input.frame.auto"]}),"foil"!==$&&Object(g.jsx)(Fl,{className:"frame-radio",value:de,onChange:e=>{"frame"===$?h(e):re(e)},optionList:b}),Object(g.jsx)("div",{className:Ko("custom-overlay-group","foil"!==$?"custom-overlay-group-hidden":""),style:{"--card-height":Gu*D+"px","--card-width":Uu*D+"px","--global-scale":`${D}`,"--cropper-width":"200px"},children:Object(g.jsxs)($u,{ref:U,receivingCanvas:d,onSourceLoaded:u,onTainted:m,onCropChange:p,children:[Object(g.jsx)(Fl,{className:"overlay-radio foil-radio",value:j,onChange:q,optionList:G,children:Object(g.jsx)("span",{children:y["input.foil.label"]})}),be&&Object(g.jsxs)("div",{className:"custom-overlay-part-group",children:[Object(g.jsx)(Fl,{className:"overlay-radio part-radio",value:le,onChange:e=>{V(`border,${e}|${oe}`)},optionList:X,children:Object(g.jsx)("span",{children:y["input.advanced-frame.overlay-blend.border.label"]})}),Object(g.jsx)(Fl,{className:"overlay-radio part-radio",value:se,onChange:e=>{V(`${ie}|frame,${e}`)},optionList:X,children:Object(g.jsx)("span",{children:y["input.advanced-frame.overlay-blend.frame.label"]})})]})]})}),"number"===typeof pe&&Object(g.jsx)(Ec,{value:M[pe],onChange:e=>{e!==M[pe]&&((e,t)=>{z(a=>{const r=S[t];if("number"!==typeof r)return a;const n=[...a.dyeList];return n[r]=e,{...a,dyeList:n}})})(e,$)},children:Object(g.jsx)(_c,{$fixedSize:!1,children:y["input.advanced-frame.dye"]})})]})}),Object(g.jsx)(Wu,{language:y,isPendulum:x,onOverwrite:async e=>{const t={foil:j,frame:F,leftFrame:L,pendulumFrame:I,pendulumRightFrame:N,rightFrame:T,effectStyle:{background:R},pendulumStyle:{background:E},dyeList:[...M]};if(v){const a=v.transaction("presetLayoutStore","readwrite");await v.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}P(a=>a.map(a=>a.key===e?{key:e,content:t}:a))},onActive:e=>{const{dyeList:t,foil:a,frame:r,pendulumFrame:n,leftFrame:i,pendulumRightFrame:o,rightFrame:l,effectStyle:s,pendulumStyle:c}=e;h(r),_(n),J(o),Q(i),Z(l),ee(s.background),te(c.background),q(a),ae(t)}})]})}),Vu=[{...ge[0],valueDisplay:(e,t)=>e["input.flag.mix-def-link"],sampleDisplay:e=>Object(g.jsxs)(g.Fragment,{children:[e["input.flag.mix-def-link"],":",Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...ge[2],valueDisplay:(e,t)=>e["input.flag.hide-deactivated-link"],sampleDisplay:e=>Object(g.jsxs)(g.Fragment,{children:[e["input.flag.hide-deactivated-link"],":",Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...ge[1],valueDisplay:(e,t)=>Object(g.jsxs)(g.Fragment,{children:[e["input.flag.link-rating-behavior"],": ",e[1===t?"input.flag.link-rating-behavior.show":"input.flag.link-rating-behavior.hide"]]}),sampleDisplay:e=>Object(g.jsxs)(g.Fragment,{children:[e["input.flag.link-rating-behavior"],":",Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:0,children:0}),": ",e["input.flag.link-rating-behavior.auto"]]}),Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:1,children:1}),": ",e["input.flag.link-rating-behavior.show"]]}),Object(g.jsxs)("li",{children:[Object(g.jsx)(Dl,{data:2,children:2}),": ",e["input.flag.link-rating-behavior.hide"]]})]})]})}],{width:_u,height:Ju}=c,Qu=h.b.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    background-color: var(--main-level-4);
    &:focus-visible {
        outline: 2px solid var(--focus);
    }
    .pendulum-frame-info-block {
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        line-height: 2; // Alignment
        min-width: 110px;
        overflow: hidden;
        border: var(--bw) solid var(--sub-level-1);
        .frame-info-block-label {
            padding: var(--spacing-px) var(--spacing-xs);
        }
    }
    .pendulum-frame-label {
        display: inline-block;
        background: var(--main-level-4);
        border: var(--bw) solid var(--sub-level-1);
        border-right: none;
        padding: var(--spacing-px) var(--spacing-xs);
        border-radius: var(--br-lg) 0 0 var(--br-lg);
        line-height: 2; // Alignment
        &:last-child {
            border-radius: var(--br-lg);
            border-right: var(--bw) solid var(--sub-level-1);
        }
    }
    .card-layout-preview-container {
        line-height: 0;
        border: var(--bw) solid var(--sub-level-1);
        overflow: hidden;
    }
    .anticon {
        align-content: center;
        padding: 0 var(--spacing-xs);
        border: var(--bw) solid var(--sub-level-1);
        border-left: none;
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
    }
`,Zu=h.b.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    .red-scale {
        color: var(--sub-red-scale);
    }
    .blue-scale {
        color: var(--sub-blue-scale);
    }
    .pendulum-option {
        display: grid;
        grid-template-columns: var(--width-label) 1fr;
        align-items: center;
        .pendulum-frame-input,
        .pendulum-checkbox {
            flex: 0 0 auto;
        }
        .mirror-scale {
            /** Alignment **/
            line-height: 32px;
            align-items: center;
            .ant-checkbox {
                transform: translateY(-1px); // Alignment, but why?
            }
        }
    }
    .joined-row {
        position: relative;
        grid-column: span 2;
        .standalone-label {
            min-width: 0;
            width: unset;
            padding-left: var(--spacing-antd);
        }
        .pendulum-checkbox {
            display: inline-block;
            /** Alignment **/
            width: var(--width-label);
            /** Alignment **/
            line-height: 32px;
            text-align: right;
            font-weight: 500;
            margin-right: 0;
            padding-right: var(--spacing);
            > span {
                padding-right: 0;
            }
        }
        .pendulum-checkbox-placeholder {
            display: inline-block;
            /** Alignment **/
            width: var(--width-label);
        }
        .pendulum-frame-input {
            margin-right: var(--spacing);
        }
        .pendulum-size {
            display: inline-block;
            line-height: 1.15; // Alignment
            margin-right: var(--spacing);
        }
        .ant-checkbox-wrapper + .ant-checkbox-wrapper {
            margin-left: 0;
        }
    }
`,em=Object(r.forwardRef)((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:i,receivingCanvas:o,onTakePicker:l,onFrameChange:s,onCropChange:c,onTainted:d,onSourceLoaded:u}=e;const m=$r(),{isPendulum:p,frame:b,foil:h,leftFrame:f,rightFrame:v,pendulumFrame:y,pendulumRightFrame:x,effectBackground:j,pendulumEffectBackground:O,pendulumScaleBlue:w,pendulumScaleRed:k,pendulumSize:S,dyeList:C,flag:F,setCard:L,getUpdater:T}=fn(Object(kn.useShallow)(e=>{let{card:{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectStyle:u,pendulumStyle:m,dyeList:p,flag:b},setCard:h,getUpdater:g}=e;return{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectBackground:u.background,pendulumEffectBackground:m.background,dyeList:p,flag:b,setCard:h,getUpdater:g}})),{mirrorPendulumScale:I,updateSetting:N}=yn(Object(kn.useShallow)(e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}})),R=Object(r.useRef)(null),E=Object(r.useRef)(null),M=Object(r.useRef)(null),[z,A]=Object(r.useState)(!0),[D,P]=Object(r.useState)(!0),H=Object(r.useMemo)(()=>T("pendulumScaleRed"),[T]),W=Object(r.useMemo)(()=>T("pendulumScaleBlue"),[T]),B=Object(r.useMemo)(()=>T("pendulumSize"),[T]),$=Object(r.useMemo)(()=>T("pendulumEffect",void 0,"debounce"),[T]),Y=Object(r.useMemo)(()=>{return e=m,Object.values(me).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[m]),K=Object(r.useMemo)(()=>vd("both").filter(e=>i||"normal"===e.edition),[i]);Object(r.useEffect)(()=>{A(!1),setTimeout(()=>{P(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=M.current)||void 0===t||t.setValue(a))}}));const U={frame:b,topLeftFrame:f,topRightFrame:v,bottomLeftFrame:y,bottomRightFrame:x,effectBackground:j,pendulumEffectBackground:O},G=F.map((e,t)=>{const a=Vu[t];return 0!==e&&a?Object(g.jsx)("li",{children:a.valueDisplay(m,e)},a.labelKey):null}).filter(e=>null!=e);return Object(g.jsxs)(Zu,{className:"pendulum-input",children:[Object(g.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(g.jsx)("div",{className:"pendulum-checkbox",children:Object(g.jsx)(xl.a,{onChange:e=>L(t=>({...t,isPendulum:e.target.checked})),checked:p,children:m["input.pendulum.label"]})}),Object(g.jsxs)("div",{className:"pendulum-option-container",children:[n&&Object(g.jsx)(hl.a,{visible:z,onVisibleChange:A,trigger:["click"],placement:"bottom",overlayClassName:["pendulum-frame-picker-overlay layout-picker-overlay",z?"picker-visible":"",D?"picker-hidden":""].join(" "),content:Object(g.jsxs)("div",{className:"overlay-event-absorber",children:[Object(g.jsx)(qu,{ref:E,isPendulum:p,frameList:K,pendulumFrame:y,onTainted:d,onCropChange:c,onSourceLoaded:u,receivingCanvas:o,onFrameChange:s,onCancel:()=>{var e;A(!1),null===(e=R.current)||void 0===e||e.focus()}}),Object(g.jsx)(Ku,{})]}),children:Object(g.jsxs)(Qu,{ref:R,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return A(!0),setTimeout(()=>{var e;null===(e=E.current)||void 0===e||e.focus()},200),!1},children:[Object(g.jsx)("span",{className:"pendulum-frame-label",children:m["input.advanced-frame.label"]}),Object(g.jsx)("div",{className:"card-layout-preview-container",children:Object(g.jsx)(Cs,{width:Math.round(30*_u/Ju),height:30,isPendulum:p,resolvedLayoutState:lr(U,p),tabIndex:-1,dyeList:C,foil:h,language:m})}),G.length>0?Object(g.jsx)(Wl,{content:Object(g.jsxs)(Hl,{children:[m["input.flag.effective.label"],Object(g.jsx)("ul",{children:G})]}),children:Object(g.jsx)(Au.a,{})}):null,Object(g.jsx)(Sd.a,{})]})}),p&&n&&Object(g.jsx)("div",{className:"pendulum-size",children:Object(g.jsx)(hl.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(ed.Container,{children:Y.map(e=>{let{value:t,label:a}=e;return Object(g.jsx)(ed.Option,{className:S===t?"menu-active":"",onClick:()=>{B(t)},children:a},t)})})}),placement:"bottomLeft",children:Object(g.jsx)(Kl,{$softMode:a,$active:S!==he,children:m[me[S].labelKey]})},"color-picker")}),p&&n&&Object(g.jsx)(xl.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;N({mirrorPendulumScale:t}),t&&H(w)},checked:I,children:m["input.mirror-scale.label"]})]})]}),p&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:Object(g.jsx)(Is.a,{addonBefore:Object(g.jsx)("span",{children:m["input.scale.label"](Object(g.jsx)("span",{className:"blue-scale",children:m["input.scale.blue.label"]},"blue-scale"))}),value:w,allowClear:!0,onChange:e=>{W(e),I&&H(e)}})}),Object(g.jsx)("div",{children:Object(g.jsx)(Is.a,{addonBefore:Object(g.jsx)("span",{children:m["input.scale.label"](Object(g.jsx)("span",{className:"red-scale",children:m["input.scale.red.label"]},"red-scale"))}),value:k,allowClear:!0,onChange:e=>{I&&W(e),H(e)}})}),Object(g.jsx)("div",{className:"joined-row",children:Object(g.jsx)(mu,{ref:M,id:"pendulum-effect",allowHotkey:!0,defaultValue:fn.getState().card.pendulumEffect,onChange:$,onTakePicker:l,autoSize:{minRows:5}})})]})]})}),tm=h.b.div`
    &.first-line,
    &.second-line {
        display: flex;
        gap: var(--spacing-sm);
        align-items: center;
        justify-content: right;
    }
    .type-ability-input {
        flex: 1 1 auto;
        width: unset;
        max-width: 40rem;
    }
    .condense-input {
        flex: 1 1 auto;
    }
    .formatting-help-button,
    .input-kanji-helper {
        flex: 0 0 auto;
    }
    .input-kanji-helper {
        span {
            padding-right: 0;
        }
    }
    .formatting-help-button {
        grid-area: help-button;
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
        &:focus {
            box-shadow: 0 0 0 2px var(--focus);
        }
    }
    .condense-input {
		.standalone-addon.ant-input-group-addon {
			width: unset;
		}
		.ant-radio-button-wrapper {
			flex: 1 1 90px;
		}
	}
`,am=h.b.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    background-color: var(--main-level-4);
    flex: 0 0 auto;
    .button-label {
        line-height: 2;
        padding: var(--spacing-px) var(--spacing-xs);
    }
`,rm=h.b.div`
    width: 20rem;
    padding: var(--spacing-sm);
    .input-section {
        h2 {
            padding-left: 0;
            padding-right: 0;
        }
        small {
            display: block;
            color: var(--color);
            margin-top: var(--spacing-xs);
            line-height: var(--fs-lg);
        }
        + .input-section {
            margin-top: var(--spacing-sm);
        }
    }
    .single-slider {
        .ant-input-number {
            width: 75px;
        }
    }
`,nm=Object(r.forwardRef)((e,t)=>{var a;let{onTakePicker:n}=e;const i=$r(),{frame:o,cardIcon:l,format:s,furiganaHelper:c,condenseTolerant:d,setCard:u,getUpdater:m}=fn(Object(kn.useShallow)(e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:i},setCard:o,getUpdater:l}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===i||void 0===i?void 0:i.condenseTolerant,setCard:o,getUpdater:l}})),p=yn(e=>e.setting.showExtraDecorativeOption),b="ocg"===s?"\uff0f":"/",h=Object(r.useRef)(null),[f,v]=Object(r.useState)(()=>fn.getState().card.effectStyle.minLine),[y,x]=Object(r.useState)(()=>fn.getState().card.pendulumStyle.minLine),[j,O]=Object(r.useState)(()=>fn.getState().card.effectStyle.justifyRatio),[w,k]=Object(r.useState)(()=>fn.getState().card.pendulumStyle.justifyRatio),S=Object(r.useMemo)(()=>m("typeAbility",e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map(e=>`${e}`.trim()).filter(e=>"string"===typeof e&&e.length>0),"debounce"),[m]),C=Object(r.useCallback)(e=>u(t=>({...t,furiganaHelper:e.target.checked})),[u]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&u(e=>{const t={...e.effectStyle,minLine:f,justifyRatio:j},a={...e.pendulumStyle,minLine:y,justifyRatio:w};return{...e,effectStyle:t,pendulumStyle:a}})},500),()=>{e=!1}},[j,f,w,y,u]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{typeAbility:a,effectMinLine:r,pendulumEffectMinLine:n,effectJustifyRatio:i,pendulumEffectJustifyRatio:o}=e;a&&(null===(t=h.current)||void 0===t||t.setValue(a.join(b))),"number"===typeof r&&v(r),"number"===typeof n&&x(n),"number"===typeof i&&O(i),"number"===typeof o&&k(o)}}));const F="auto"===l?tr({frame:o})?"input.type.monster.label":"input.type.st.label":"st"===(null===(a=P[l])||void 0===a?void 0:a.value)?"input.type.st.label":"input.type.monster.label",L="ocg"===s;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(tm,{className:`post-pendulum-input first-line variant-${s}`,children:[Object(g.jsx)(pu,{ref:h,dir:"auto",addonBefore:i[F],id:"type-ability",defaultValue:fn.getState().card.typeAbility.join(b),onChange:S,onTakePicker:n}),L&&Object(g.jsx)(Go.a,{overlay:i["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(g.jsx)(xl.a,{className:"input-kanji-helper",onChange:C,checked:c,children:i["input.furigana-helper.label"]})}),Object(g.jsx)(sc,{}),p&&Object(g.jsx)(hl.a,{overlayClassName:"global-input-overlay global-style-picker-overlay paragraph-style",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsxs)(rm,{className:"input-popover",children:[Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsxs)("h2",{children:[i["input.condense.label"],Object(g.jsx)("br",{}),Object(g.jsx)("small",{children:i["input.condense.tooltip"]})]}),Object(g.jsx)("div",{className:"line-input",children:Object(g.jsx)(Fl,{className:"condense-input",value:`${d}`,onChange:e=>(e=>{u(t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}}))})(e),optionList:jd})})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsx)("h2",{children:i["input.text-style.min-line.label"]}),Object(g.jsx)("div",{className:"line-input",children:Object(g.jsxs)(_l,{className:"single-slider",children:[Object(g.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(g.jsx)(Es.a,{id:"effect-line",size:"small",value:f,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>v("number"===typeof e?e:0),min:0,max:50}),Object(g.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(g.jsx)(Es.a,{id:"pendulum-effect-line",size:"small",value:y,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>x("number"===typeof e?e:0),min:0,max:50})]})})]}),Object(g.jsxs)("div",{className:"input-section",children:[Object(g.jsxs)("h2",{children:[i["input.text-style.justify-ratio.label"],Object(g.jsx)("br",{}),Object(g.jsx)("small",{children:i["input.text-style.justify-ratio.tooltip"]})]}),Object(g.jsx)("div",{className:"justify-ratio-input",children:Object(g.jsxs)(_l,{className:"single-slider",children:[Object(g.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(g.jsx)(Es.a,{id:"effect-justify-ratio",size:"small",value:j,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>O("number"===typeof e?e:0),min:0,max:5e3,step:100}),Object(g.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(g.jsx)(Es.a,{id:"pendulum-effect-justify-ratio",size:"small",value:w,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>k("number"===typeof e?e:0),min:0,max:5e3,step:100})]})})]})]})}),children:Object(g.jsx)(am,{children:Object(g.jsx)("div",{className:"button-label",children:i["input.text-style.paragraph-style.label"]})})})]})})}),im=h.b.div`
    display: inline-grid;
    grid-template-columns: 1fr max-content;
    column-gap: var(--spacing-xxs);
    padding: var(--spacing-px);
    margin-right: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br);
    background-color: var(--main-level-4);
    cursor: pointer;
    &:hover {
        border-color: var(--main-active);
    }
    .text-style-grid {
        display: grid;
        grid-template-columns: 25px 25px 25px;
        grid-template-rows: 13px 13px; // Alignment
        gap: var(--spacing-xxs);
        font-size: var(--fs-xs);
        text-align: center;
        line-height: 1.5;
    }
    .text-style-preview-section {
        border-radius: var(--br-sm);
        box-shadow: 0 0 1px 1px var(--main-level-1) inset;
    }
    .text-style-label {
        padding: var(--spacing-xxs);
        line-height: 1.7;
    }
`,om=h.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-px);
    &.input-popover {
        background-color: var(--sub-level-4); // Mimic border color
    }
    .style-section {
        z-index: 1;
        position: relative;
        background-color: var(--main-level-3);
    }
    .style-picker-section {
        overflow: hidden;
        h2.size-picker,
        h2.font-style-picker {
            padding: var(--spacing-xs);
        }
        .inline-radio-train {
            display: inline-flex;
            padding-bottom: 0;
            margin-left: var(--spacing-sm);
        }
        .shadow-checkbox .ant-checkbox {
            transform: translateY(1px);
        }
        > .ant-checkbox-wrapper {
            padding: var(--spacing-xs);
        }
    }
    .custom-style-expand {
        display: grid;
        grid-template-columns: 1fr max-content;
        column-gap: var(--spacing-xs);
        .ant-checkbox-wrapper > span {
            padding-right: 0;
        }
    }
    .radio-train {
        padding: var(--spacing-xs);
        padding-top: 0;
        .standalone-addon {
            flex: 1 1 auto;
            text-align: left;
        }
        .radio-train-input-group {
            flex: 0 0 auto;
        }
        .ant-radio-button-wrapper {
            height: 26px;
            line-height: 24px;
        }
    }
`,lm={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},sm=()=>{const e=$r(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:l,statTextStyle:s,typeTextStyle:c}=fn(Object(kn.useShallow)(e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,statTextStyle:l,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:c,statTextStyle:l,typeTextStyle:s}})),d=[{info:lm.effectTextStyle,value:r,extraValue:a},{info:lm.pendulumTextStyle,value:o,extraValue:i},{info:lm.statTextStyle,value:s},{info:lm.typeTextStyle,value:c},{info:lm.otherTextStyle,value:n}];return Object(g.jsx)(hl.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(om,{className:"input-popover",children:d.map(a=>{let{info:r,value:n,extraValue:i}=a;const{keyName:o,labelKey:s,extraKeyname:c}=r,[d,u,m,p]=n,{upSize:h,fontStyle:f}=null!==i&&void 0!==i?i:{};return Object(g.jsxs)("div",{className:"style-section",children:[Object(g.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(g.jsx)("span",{children:e[s]}),Object(g.jsx)(xl.a,{checked:d,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[a,...n.slice(1)]}})},children:e["input.text-style.custom.label"]})]}),d&&Object(g.jsxs)("div",{className:"style-picker-section",children:["string"===typeof f&&"tcg"===t&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("h2",{className:"font-style-picker",children:[Object(g.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(g.jsx)(Fl,{className:"inline-radio-train",value:f,optionList:[{label:Object(g.jsx)(b.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t})}})]})}),"number"===typeof h&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("h2",{className:"size-picker",children:[Object(g.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(g.jsx)(Fl,{className:"inline-radio-train",value:h,optionList:[{label:Object(g.jsx)(b.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t})}})]})}),Object(g.jsx)("h2",{children:Object(g.jsx)(xl.a,{className:"shadow-checkbox",checked:m,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[...n.slice(0,2),a,n[3]]}})},children:Object(g.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(g.jsx)(Cc,{value:p,onChange:e=>l(t=>({...t,[o]:[...n.slice(0,3),e]}))}),Object(g.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(g.jsx)(Fc.b,{colors:ba,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{l(t=>({...t,[o]:[n[0],e.hex,...n.slice(2,4)]}))}})]})]},o)})})}),children:Object(g.jsxs)(im,{className:"text-style-preview",children:[Object(g.jsx)("div",{className:"text-style-grid",children:d.map(e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[i,o,l,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(g.jsx)("div",{className:"text-style-preview-section",style:{background:i?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==o&&void 0!==o?o:"").length&&i?o:"var(--color-contrast)",textShadow:i&&l?`0 0 2px ${s}`:"none",fontStyle:i&&"italic"===d?"italic":"normal"},children:c&&i?Object(g.jsxs)("div",{children:["+",c]}):"Auto"},n)})}),Object(g.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};var cm=a(667),dm=a(668),um=a(669),mm=a(665),pm=a(666);const bm=h.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
    z-index: 2;
`,hm=Object(h.b)(ed.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
    > label {
        margin: 0 var(--spacing-xs);
    }
`,gm=h.b.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    gap: var(--spacing-px);
    background-color: var(--sub-level-1);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    overflow: hidden;
    position: relative;
    .container-group {
        box-shadow: none;
        border: none;
        border-radius: 0;
    }
    .card-image-cropper {
        width: 225px;
        grid-template-columns: 1fr;
        gap: var(--spacing);
        margin: 0 var(--spacing-xs);
        --max-image-height: 200px;
    }
    &.selector-disabled {
        filter: opacity(0.65) grayscale(0.85);
    }
`,fm=Object(r.forwardRef)((e,t)=>{let{children:a,disabled:r=!1,className:n,language:i,activeCardIcon:o,showMixableOnly:l=!1,showRemove:s=!1,onChange:c,onRemove:d}=e;const u=l?e=>e.isMixable:()=>!0;return Object(g.jsxs)(gm,{className:Ko("icon-dropdown-container overlay-event-absorber",r?"selector-disabled":"",n),children:[r&&Object(g.jsx)(bm,{className:"container-disable-overlay"}),Object(g.jsxs)(hm,{className:"container-group container-star",children:[s&&Object(g.jsxs)(ed.Option,{onClick:()=>null===d||void 0===d?void 0:d(),children:[Object(g.jsx)(b.a,{}),"\xa0",i["input.icon-type.remove.label"]]}),H.filter(u).map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(g.jsxs)(ed.Option,{className:a===o?"menu-active":"",onClick:()=>c(a),children:[r?Object(g.jsxs)(g.Fragment,{children:[r,"\xa0"]}):null,i[t]]},a)})]}),Object(g.jsx)(hm,{className:"container-group container-attribute",children:B.filter(u).map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(g.jsxs)(ed.Option,{className:a===o?"menu-active":"",onClick:()=>c(a),children:[r?Object(g.jsxs)(g.Fragment,{children:[r,"\xa0"]}):null,i[t]]},a)})}),Object(g.jsx)(hm,{className:"container-group container-icon",children:Y.filter(u).map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(g.jsxs)(ed.Option,{className:a===o?"menu-active":"",onClick:()=>c(a),children:[r?Object(g.jsxs)(g.Fragment,{children:[r,"\xa0"]}):null,i[t]]},a)})}),Object(g.jsxs)(hm,{className:"container-group container-user-defined",children:[r&&Object(g.jsx)(bm,{className:"container-disable-overlay"}),Object(g.jsx)(xl.a,{checked:"user-defined"===o,onChange:e=>c(e.target.checked?"user-defined":P.auto.value),children:i["input.icon-type.user-defined.label"]}),a]})]})}),vm=h.b.div`
    margin-bottom: var(--spacing);
`,ym=h.b.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`,xm=h.b.div`
    display: grid;
    grid-template-columns: repeat(13, 2rem);
    gap: var(--spacing-xs);
    align-items: center;
    text-align: center;
    margin-bottom: var(--spacing-sm);
    line-height: 0;
    .star-value {
        display: inline-flex;
        height: 2rem;
        width: 2rem;;
        align-items: center;
        justify-content: center;
        background-color: var(--main-level-1);
        border-radius: var(--br-lg);
        margin-top: var(--spacing-xs);
        cursor: pointer;
        border: var(--bw) solid transparent;
        .anticon-close-circle {
            font-size: var(--fs-lg)
        }
    }
    .icon-image {
        max-width: 1.5rem; // Alignment
        max-height: 1.5rem;; // Alignment
    }
    .entry-active {
        .star-value {
            border-color: var(--main-active);
        }
    }
    .entry-disable {
        filter: opacity(0.65) grayscale(0.85);
        * {
            cursor: not-allowed;
        }
    }
    :not(.entry-disable) .star-value:hover {
        border-color: var(--sub-active);
    }
`,jm=Object(h.b)(fm)`
    grid-template-columns: 1fr 1fr 1fr;
    .container-user-defined {
        min-height: 175px;
        grid-column: span 3;
    }
    .card-image-cropper {
        width: unset;
        grid-template-columns: 1fr 1fr;
    }
`,Om=Object(r.forwardRef)((e,t)=>{let{children:a,language:n}=e;const{starList:i,setCard:o}=fn(Object(kn.useShallow)(e=>{let{card:{starList:t},setCard:a}=e;return{starList:t,setCard:a}})),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)(!0),u=Object(r.useMemo)(()=>e=>{o(t=>{const a=Array.isArray(e)?e:e(t.starList);return{...t,starList:a}})},[o]),[{slotList:m,use12:p},h]=Object(r.useState)(()=>{const e=[],t=i.length<=12;for(let a=0;a<G;a++)e.push({slot:`slot-${a}`,index:a,disabled:!1});return t&&(e[12].disabled=!0),{slotList:e,use12:t}}),[f,v]=Object(r.useState)({activeList:[]}),y=Object(r.useRef)(null),{cardIconImage:x}=vn(Object(kn.useShallow)(e=>{let{canvasDataMap:t}=e;return{cardIconImage:t.iconImage}}));Object(r.useImperativeHandle)(t,()=>({changeStatus:e=>{"open"===e?s(!0):"close"===e?s(!1):"toggle"===e&&s(e=>!e),v({activeList:[]})}})),Object(r.useEffect)(()=>{s(!0),setTimeout(()=>{s(!1)},250),setTimeout(()=>{},800)},[]);const{activeList:j}=f;return Object(g.jsxs)(Uo.a,{className:Ko("global-overlay global-no-close",c?"global-modal-hidden":""),mask:!c&&void 0,visible:l,width:506,onCancel:()=>s(!1),onOk:()=>s(!1),afterClose:()=>d(!1),cancelText:n["manager.template.button.cancel.label"],children:[Object(g.jsxs)(vm,{className:"star-list-control-panel",children:[Object(g.jsx)(xl.a,{checked:p,onChange:e=>{e.target.checked?(h(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!0,index:12,slot:"slot-12"}],use12:!0}}),u(e=>e.slice(0,12)),v(e=>{let{activeList:t}=e;return{activeList:t.filter(e=>12!==e)}})):(h(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!1,index:12,slot:"slot-12"}],use12:!1}}),u(e=>function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=[...e];for(let n=e.length;n<t;n++)r.push(a);return r}(e,G)))},children:n["input.icon-type.slot.use-12.label"]}),Object(g.jsx)(tl.a,{size:"small",onClick:()=>{v(e=>({activeList:m.filter(t=>!e.activeList.includes(t.index)&&!t.disabled).map(e=>e.index)}))},children:n["input.icon-type.slot.revert.label"]}),"\xa0",Object(g.jsx)(tl.a,{size:"small",onClick:()=>{v({activeList:m.filter(e=>!e.disabled).map(e=>e.index)})},children:n["input.icon-type.slot.select-all.label"]}),"\xa0",Object(g.jsx)(tl.a,{size:"small",onClick:()=>{v({activeList:[]})},children:n["input.icon-type.slot.deselect-all.label"]})]}),Object(g.jsx)(xm,{className:"star-list-container",children:m.map(e=>{let{slot:t,index:a,disabled:r}=e;const n=i[a],o="user-defined"===n&&x?{icon:Object(g.jsx)("img",{className:"icon-image",src:x,alt:"User-defined icon"})}:U[null!==n&&void 0!==n?n:""],l=j.includes(a);return Object(g.jsxs)("div",{className:Ko("star-list-entry",l?"entry-active":"",r?"entry-disable":""),children:[Object(g.jsx)("div",{className:"checkbox-container",children:Object(g.jsx)(xl.a,{disabled:r,checked:l,onChange:e=>{if(r)return;const t=e.target.checked;v(t?e=>({activeList:[...e.activeList,a]}):e=>({activeList:e.activeList.filter(e=>e!==a)}))}})}),Object(g.jsx)("div",{className:"star-value",onClick:()=>{r||v({activeList:[a]})},children:o?o.icon:Object(g.jsx)(b.a,{})})]},t)})}),Object(g.jsxs)(ym,{children:[Object(g.jsxs)(tl.a,{size:"small",onClick:()=>{u(e=>[...e.slice(1,e.length),""]),v({activeList:[]})},children:[Object(g.jsx)(mm.a,{}),"\xa0",n["input.icon-type.slot.shift-left.label"]]}),Object(g.jsxs)(tl.a,{size:"small",onClick:()=>{u(e=>["",...e.slice(0,e.length-1)]),v({activeList:[]})},children:[n["input.icon-type.slot.shift-right.label"],"\xa0",Object(g.jsx)(pm.a,{})]})]}),Object(g.jsx)(jm,{ref:y,disabled:0===j.length,language:n,activeCardIcon:j.length>1?"":i[j[0]],showMixableOnly:!0,showRemove:!0,onRemove:()=>{u(e=>m.filter(e=>!e.disabled).map((t,a)=>j.includes(a)?"":e[a]))},onChange:e=>{u(t=>m.filter(e=>!e.disabled).map((a,r)=>j.includes(r)?e:t[r]))},children:a})]})}),wm=Object(h.b)(wc)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    --cropper-width: 225px;
    .card-image-source-input {
        display: flex;
        flex-direction: column;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: var(--cropper-width);
        text-align: center;
    }
    .layout-picker-subpanel {
        h2 {
            padding-left: 0;
            padding-right: 0;
        }
    }
`,km=Object(r.forwardRef)((e,t)=>{let{children:a,receivingCanvas:n,onUserChange:i,onCropChange:o,onSourceLoaded:l,onTainted:s}=e;const c=$r(),{iconImage:d,iconImageCrop:u,iconImageData:m,iconImageSource:p,iconImageFit:b,iconImageStyle:h,getUpdater:f,setCard:v}=fn(Object(kn.useShallow)(e=>{let{card:{iconImage:t,iconImageCrop:a,iconImageData:r,iconImageSource:n,iconImageFit:i,iconImageStyle:o},getUpdater:l,setCard:s}=e;return{iconImage:t,iconImageCrop:a,iconImageData:r,iconImageSource:n,iconImageFit:i,iconImageStyle:o,getUpdater:l,setCard:s}})),y=Object(r.useRef)(null),x=Object(r.useMemo)(()=>f("iconImageSource"),[f]),j=Object(r.useMemo)(()=>f("iconImage"),[f]),O=Object(r.useMemo)(()=>f("iconImageData"),[f]),w=Object(r.useCallback)(e=>v(t=>({...t,iconImageFit:e})),[v]),k=Object(r.useCallback)(e=>v(t=>({...t,iconImageStyle:{...t.iconImageStyle,...e}})),[v]),S=Object(r.useCallback)((e,t,a)=>{null===o||void 0===o||o(e,t),e&&v(t=>{const a=t.iconImageCrop;return io(a,e)?t:{...t,iconImageCrop:e}},a)},[o,v]),C=Object(r.useCallback)((e,t,a)=>{a&&(null===i||void 0===i||i()),S(e,t,a)},[S,i]),F=Object(r.useCallback)((e,t)=>{console.log("\ud83d\ude80 ~ crossorigin, byUser:",e,t),t&&(null===i||void 0===i||i()),null===l||void 0===l||l(e,t)},[i,l]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},syncValue:()=>{var e,t;const{crop:a,imageData:r,image:n}=null!==(e=null===(t=y.current)||void 0===t?void 0:t.getSource())&&void 0!==e?e:{};var i,o;u&&!io(a,u)&&("offline"===p?"string"===typeof m&&r!==m&&(null===(i=y.current)||void 0===i||i.forceSource("offline",m,u)):"string"===typeof d&&n!==d&&(null===(o=y.current)||void 0===o||o.forceSource("online",d,u)))},setValue:e=>{let{iconImage:t,iconImageCrop:a,iconImageData:r,iconImageSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=y.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=y.current)||void 0===o||o.forceSource("online",t,a))}})),Object(g.jsx)(wm,{ref:y,title:c["input.background-image.label"],defaultSourceType:p,defaultInternalSource:m,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:n,forceFit:b,imageStyle:h,onSourceChange:(e,t)=>{x(e),"offline"===e?O(t):j(t)},onCropChange:C,onTainted:s,onSourceLoaded:F,onForceFitChange:w,onImageStyleChange:k,onMaxSizeExceeded:e=>{Hr.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:1,beforeCropper:null,isNotFoundAnError:!1,children:a})}),Sm=h.b.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`,Cm=Object(h.b)(Fl)`
    .custom-star-input {
        width: 7rem;
    }
    .checkbox-star-suffix {
        display: flex;
        flex-wrap: wrap;
        column-gap: var(--spacing-sm);
        row-gap: var(--spacing-xxs);
        margin-left: var(--spacing-sm);
    }
`,Fm=Object(h.b)(Kl)`
    margin-left: var(--spacing-sm);
`,Lm=h.b.div`
    display: flex;
    align-items: center;
    .custom-star-preview {
        display: inline-flex;
        line-height: 0;
        align-items: center;
        background-color: var(--main-level-1);
        padding: var(--spacing-xs);
        border-radius: var(--br);
        .star-preview-entry {
            margin-right: var(--spacing-xs);
            width: 22px; // Alignment
            height: 22px; // Alignment
            .icon-image {
                max-width: 22px; // Alignment
                max-height: 22px; // Alignment
            }
            .anticon-close-circle {
                font-size: var(--fs-xl);
                margin-top: 1px; // Alignment
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .custom-star-content {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-sm);
        margin-right: var(--spacing-sm);
    }
`,Tm=e=>{let{language:t,value:a,onChange:r}=e;return Object(g.jsx)(Fl,{value:a,onChange:r,optionList:[{value:"auto",tooltipProps:{overlay:t["input.icon-type.alignment.auto"]},label:Object(g.jsx)(b.a,{})},{value:"left",tooltipProps:{overlay:t["input.icon-type.alignment.left"]},label:Object(g.jsx)(cm.a,{})},{value:"center",tooltipProps:{overlay:t["input.icon-type.alignment.center"]},label:Object(g.jsx)(dm.a,{})},{value:"right",tooltipProps:{overlay:t["input.icon-type.alignment.right"]},label:Object(g.jsx)(um.a,{})}]})},Im=Object(r.forwardRef)((e,t)=>{let{showCreativeOption:a,receivingCanvas:n,onTainted:i,onSourceLoaded:o}=e;const l=$r(),{frame:s,subFamily:c,cardIcon:d,star:u,starList:m,starAlignment:p,getUpdater:h}=fn(Object(kn.useShallow)(e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o},getUpdater:l}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o,getUpdater:l}})),f=yn(e=>e.setting.reduceMotionColor),v=Object(r.useRef)(null),y=Object(r.useRef)(null),x=Object(r.useRef)(null),{cardIconImage:j}=vn(Object(kn.useShallow)(e=>{let{canvasDataMap:t}=e;return{cardIconImage:t.iconImage}})),O=Object(r.useMemo)(()=>h("cardIcon"),[h]),w=Object(r.useMemo)(()=>h("subFamily"),[h]),k=Object(r.useMemo)(()=>h("star"),[h]),S=Object(r.useMemo)(()=>h("starAlignment"),[h]);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a;let{iconImage:r,iconImageCrop:n,iconImageData:i,iconImageSource:o}=e;null===(t=y.current)||void 0===t||t.setValue({iconImage:r,iconImageCrop:n,iconImageData:i,iconImageSource:o}),null===(a=x.current)||void 0===a||a.setValue({iconImage:r,iconImageCrop:n,iconImageData:i,iconImageSource:o})},isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=x.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a}}));const C=Object(r.useCallback)(()=>{O("user-defined")},[O]),F=()=>{var e,t;O("custom"),null===(e=v.current)||void 0===e||e.changeStatus("open"),null===(t=x.current)||void 0===t||t.syncValue()},L=ar(s),T="auto"===d?U["none"===L?"auto":L]:U[d],{labelKey:I,icon:N,showIcon:R,value:E}=null!==T&&void 0!==T?T:U.level,A="string"===typeof I?l[I]:I({language:l}),D=a?Object(g.jsxs)(Sm,{children:[R?N:null," ",A," ",Object(g.jsx)(Sd.a,{})]}):A,P=Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(g.jsx)(fm,{language:l,activeCardIcon:d,onChange:e=>{"custom"===e?F():O(e)},children:Object(g.jsx)(km,{ref:y,receivingCanvas:n,onTainted:i,onUserChange:C,onSourceLoaded:o})}),onVisibleChange:e=>{var t;e&&(null===(t=y.current)||void 0===t||t.syncValue())},placement:"bottom",children:Object(g.jsx)("span",{className:`card-icon-dropdown ${"auto"===d?"":"active"} ${a?"":"disabled"}`,children:D})},"icon-type-picker"),W=a?P:D;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Om,{ref:v,language:l,children:Object(g.jsx)(km,{ref:x,receivingCanvas:n,onTainted:i,onUserChange:C,onSourceLoaded:o})}),"auto"===d&&"none"===L?a?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Fl,{className:"fill-input-train",value:d,onChange:O,optionList:H.map(e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(g.jsx)(b.a,{}),value:a,tooltipProps:{title:l[r]}}}),children:W}),Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(hm,{className:"container-group container-attribute",children:B.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(g.jsxs)(ed.Option,{className:a===d?"menu-active":"",onClick:()=>O(a),children:[r?Object(g.jsxs)(g.Fragment,{children:[r,"\xa0"]}):null,l[t]]},a)})})}),children:Object(g.jsx)(Fm,{$softMode:f,className:a?"":"disabled",children:l["input.attribute.label"]})}),Object(g.jsx)(hl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(g.jsx)("div",{className:"overlay-event-absorber",children:Object(g.jsx)(hm,{className:"container-group container-icon",children:Y.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(g.jsxs)(ed.Option,{className:a===d?"menu-active":"",onClick:()=>O(a),children:[r?Object(g.jsxs)(g.Fragment,{children:[r,"\xa0"]}):null,l[t]]},a)})})}),children:Object(g.jsxs)(Fm,{$softMode:f,className:a?"":"disabled",children:[l["input.attribute.spell"],"\xa0/\xa0",l["input.attribute.trap"]]})}),Object(g.jsx)(Fm,{$softMode:f,className:a?"":"disabled",onClick:F,children:l["input.icon-type.custom.label"]})]}):null:"st"===E?Object(g.jsx)(Fl,{className:"fill-input-train",value:c,onChange:w,optionList:($=l,z.map(e=>{let{value:t,nameKey:a}=e;return{label:t===M?Object(g.jsx)(b.a,{}):Object(g.jsx)(Go.a,{overlay:$[a],children:Object(g.jsx)("img",{alt:$[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}})),children:W}):"custom"===E?Object(g.jsxs)(Lm,{className:"custom-star-picker",children:[Object(g.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:W}),Object(g.jsxs)("div",{className:"custom-star-content",children:[m.length>0?Object(g.jsx)("div",{className:"custom-star-preview",children:m.map((e,t)=>{const a="user-defined"===e&&j?{icon:Object(g.jsx)("img",{className:"icon-image",src:j,alt:"User-defined icon"})}:U[e];return Object(g.jsx)("span",{className:"star-preview-entry",children:a?a.icon:Object(g.jsx)(b.a,{})},`${e}-${t}`)})}):null,Object(g.jsx)(tl.a,{size:"small",onClick:F,children:l["generic.edit.label"]})]})]}):Object(g.jsx)(Cm,{className:"checkbox-star-train",value:u,onChange:k,optionList:yd,strict:!0,suffix:a&&Object(g.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(g.jsx)(Is.a,{className:"custom-star-input",value:"number"===typeof u?"":u,allowClear:!0,onChange:k,placeholder:l["input.icon-type.custom.placeholder"]}),Object(g.jsx)(Tm,{language:l,value:p,onChange:S})]}),children:W})]});var $});a(594);const Nm=Object(r.forwardRef)((e,t)=>{let{applyCardData:a,artworkCanvas:n,backgroundCanvas:i,overlayCanvas:o,iconImageCanvas:l,onCropChange:s,onTainted:c,onSourceLoaded:d}=e;const u=$r(),{format:m,frame:p,foil:b,finish:h,opacity:f,nameStyleType:v,nameStyle:x,getUpdater:j,setCard:O}=fn(Object(kn.useShallow)(e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s},getUpdater:c,setCard:d}=e;return{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s,getUpdater:c,setCard:d}})),{setting:w}=yn(),{showCreativeOption:k,showExtraDecorativeOption:S,reduceMotionColor:C}=w,F=Object(r.useRef)(null),L=tr({frame:p}),[T,I]=Object(r.useState)(0),N=Object(r.useMemo)(()=>gd(u),[u]),R=Object(r.useRef)(null),E=Object(r.useRef)(null),M=Object(r.useRef)(null),z=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useRef)(null),P=Object(r.useRef)(null),H=Object(r.useRef)(null),W=Object(r.useRef)(null),B=Object(r.useRef)(null),[$,Y]=Object(r.useState)({id:"",setValue:()=>{}}),K=Object(r.useMemo)(()=>j("foil"),[j]),U=Object(r.useMemo)(()=>j("finish"),[j]),G=Object(r.useCallback)(e=>O(t=>({...t,opacity:e})),[O]),X=Object(r.useCallback)((e,t)=>{O(a=>({...a,nameStyleType:e,nameStyle:t}))},[O]),q=Object(r.useMemo)(()=>{return e=u,Object.values(y).map(t=>{let{value:a,label:r,labelKey:n,tooltipKey:i}=t;return{label:n?e[n]:r,tooltip:i?e[i]:void 0,value:a}});var e},[u]);return Object(r.useEffect)(()=>{var e;null===(e=F.current)||void 0===e||e.setValue({font:x.font})},[x]),Object(r.useEffect)(()=>{var e;null===(e=A.current)||void 0===e||e.setValue(f)},[f]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t,a,r,n,i;return null!==(e=null===(t=z.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=A.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a||null!==(n=null===(i=M.current)||void 0===i?void 0:i.isLoading())&&void 0!==n&&n},forceCardData:e=>{var t,a,r,n,i,o,l,s,c;I(e=>e+1);const{name:d,art:u,artCrop:m,artData:p,artSource:b,background:h,backgroundCrop:g,backgroundData:f,backgroundSource:v,iconImage:y,iconImageCrop:x,iconImageData:j,iconImageSource:O,overlay:w,overlayCrop:k,overlayData:S,overlaySource:C,opacity:F,attribute:L,attributeType:T,setId:N,pendulumEffect:R,typeAbility:$,effect:Y,atk:K,def:U,creator:G,password:X,effectStyle:q,pendulumStyle:V,firstEditionText:_,cornerText:J}=e;null===(t=z.current)||void 0===t||t.setValue({art:u,artCrop:m,artData:p,artSource:b}),null===(a=A.current)||void 0===a||a.setValue({...F,background:h,backgroundCrop:g,backgroundData:f,backgroundSource:v}),null===(r=E.current)||void 0===r||r.setValue({attribute:L,attributeType:T}),null===(n=D.current)||void 0===n||n.setValue({name:d,setId:N}),null===(i=P.current)||void 0===i||i.setValue({pendulumEffect:R,overlay:w,overlayCrop:k,overlayData:S,overlaySource:C}),null===(o=M.current)||void 0===o||o.setValue({iconImage:y,iconImageCrop:x,iconImageData:j,iconImageSource:O}),null===(l=H.current)||void 0===l||l.setValue(Y),null===(s=W.current)||void 0===s||s.setValue({typeAbility:$,effectMinLine:q.minLine,pendulumEffectMinLine:V.minLine,effectJustifyRatio:q.justifyRatio,pendulumEffectJustifyRatio:V.justifyRatio}),null===(c=B.current)||void 0===c||c.setValue({atk:K,def:U,creator:G,password:X,firstEditionText:_,cornerText:J})}})),Object(g.jsxs)("div",{className:["card-info-panel","ocg"===m?"input-ocg":"input-tcg"].join(" "),children:[Object(g.jsx)(_s,{applyCardData:a}),Object(g.jsx)("br",{}),Object(g.jsx)(Gs,{}),Object(g.jsxs)("div",{className:"card-overlay-input",children:[Object(g.jsx)(ku,{className:"format-radio",value:m,onChange:e=>{O(t=>{var a,r,n,i,o;const l=Rr(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:p,pendulumEffect:b}=l;return null===(a=D.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=H.current)||void 0===r||r.setValue(d),null===(n=P.current)||void 0===n||n.setValue({pendulumEffect:b}),null===(i=W.current)||void 0===i||i.setValue({typeAbility:u}),null===(o=B.current)||void 0===o||o.setValue({creator:p,password:m}),l})},optionList:hd,children:Object(g.jsx)("span",{children:u["input.format.label"]})}),Object(g.jsx)(Fl,{className:"foil-radio",value:b,onChange:K,optionList:N,children:Object(g.jsx)("span",{children:u["input.foil.label"]})}),S&&Object(g.jsx)(Jd,{className:"finish-checkbox",value:h,onChange:U,optionList:q,children:Object(g.jsxs)(Ou,{className:"finish-checkbox-label",children:[Object(g.jsx)("div",{className:"input-label",children:u["input.finish.label"]}),Object(g.jsx)(Ol,{onClick:()=>U([]),Icon:Od.a,tooltipProps:{title:u["input.other-finish.reset.tooltip"]}})]})})]}),k&&Object(g.jsxs)("div",{className:"card-layout-input",children:[Object(g.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[u["input.layout.label"]," ",Object(g.jsx)(vl,{content:Object(g.jsx)(Hl,{children:u["input.layout.tooltip"]})})]}),Object(g.jsx)(ou,{ref:A,defaultValue:f,receivingCanvas:i,onChange:G,onTainted:c,onCropChange:s,onSourceLoaded:d})]}),Object(g.jsx)(Vd,{ref:R,onSTFrameChange:e=>{var t;return null===(t=W.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=B.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var r;return null===(r=B.current)||void 0===r?void 0:r.setValue({atk:e,def:t,linkRating:a})}}),Object(g.jsxs)(wu,{className:"name-style-id-input",children:[Object(g.jsx)(zu,{ref:D,onTakePicker:Y}),Object(g.jsx)(Yd,{ref:F,frameInfo:Ue[p],defaultType:v,defaultValue:x,showExtraDecorativeOption:S,onChange:X},T),Object(g.jsx)(Im,{ref:M,showCreativeOption:k,receivingCanvas:l,onTainted:c,onSourceLoaded:d})]}),Object(g.jsxs)("div",{className:"main-info",children:[Object(g.jsxs)("div",{className:"main-info-first",children:[Object(g.jsx)(gu,{ref:E,language:u}),Object(g.jsx)(em,{ref:P,showCreativeOption:k,showExtraDecorativeOption:S,softMode:C,receivingCanvas:o,onTainted:c,onSourceLoaded:d,onCropChange:s,onTakePicker:Y,onFrameChange:e=>{var t;return null===(t=R.current)||void 0===t?void 0:t.changeFrame(e)}}),Object(g.jsx)(nm,{ref:W,onTakePicker:Y}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(g.jsx)(_c,{className:"standalone-label",children:u["input.effect.label"]}),k?Object(g.jsx)(sm,{}):Object(g.jsx)("div",{}),Object(g.jsx)(kd,{targetId:$.id,onPick:$.setValue})]}),Object(g.jsx)(fu,{ref:H,onTakePicker:Y})]}),Object(g.jsx)(Fu,{ref:B,isMonster:L,showCreativeOption:k,onTakePicker:Y})]}),Object(g.jsx)("div",{className:"main-info-second",children:Object(g.jsx)(Ru,{ref:z,receivingCanvas:n,showCreativeOption:k,showExtraDecorativeOption:S,onSourceLoaded:d,onTainted:c,onCropChange:s})})]})]})}),{height:Rm,width:Em,cardBorder:Mm}=c,zm=68/Em,Am=h.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    border: var(--bw) solid var(--main-level-1);
    border-top-color: transparent;
    background-color: #333333;
    cursor: pointer;
    position: relative;
    z-index: 1;
    height: ${68}px;
    font-size: var(--fs-thumb);
    &.alternative-color {
        background-color: #282828;
    }
    &.active {
        background-color: #484848;
        border-color: var(--main-active);
        box-shadow: var(--bs-2);
        z-index: 2;
    }
    &:hover {
        border-color: var(--sub-active);
    }
    .right-slot {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: var(--spacing-xxs);
        line-height: 1.25;
        overflow: hidden;
        padding: var(--spacing-xs);
        border-left: var(--bw) solid var(--main-level-3);
        .select-box {
            display: inline-block;
            margin-right: var(--spacing-xs);
        }
        .first-row {
            &:empty:before {
                content: "\\00a0";
            }
        }
        .second-row {
            display: flex;
            column-gap: var(--spacing-xs);
            align-items: center;
            .padding {
                flex: 1;
            }
            .card-icon {
                width: 1em;
            }
            .attribute-icon {
                width: 1em;
            }
            .star-content {
                flex: 0 0 30px;
                &.tuner {
                    color: var(--main-online);
                }
            }
        }
        .third-row {
            display: flex;
            .set-id {
                flex: 1;
                text-align: right;
            }
        }
    }
    .left-slot {
        --link-arrow-icon-size: 16px;
        --link-arrow-border-size: 6px;
        --link-arrow-container-size: 8px;
        --link-arrow-half-size: 13px;
        --link-arrow-margin-inline: calc(var(--link-arrow-half-size) - var(--link-arrow-icon-size) / 2);
        --link-arrow-margin-block: calc(var(--link-arrow-half-size) - var(--link-arrow-border-size) / 2);
        line-height: 0;
        position: relative;
        width: ${68}px;
        overflow: hidden;
        .card-art-container {
            cursor: pointer;
            display: inline-block;
            max-height: ${56}px;
            overflow: hidden;
            box-shadow: var(--bs-1);
            position: relative;
            z-index: 1;
            .card-art-component-container {
                display: inline-block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .card-art {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
        }
        .card-frame {
            width: 50%;
            height: 50%;
            position: absolute;
            background-size: 200% 200%;
            &.top-left-frame {
                top: 0;
                left: 0;
                background-position: 0% 0%;
            }
            &.top-right-frame {
                top: 0;
                left: 50%;
                background-position: 100% 0%;
            }
            &.bottom-left-frame {
                top: 50%;
                left: 0;
                background-position: 0% 0%;
            }
            &.bottom-right-frame {
                top: 50%;
                left: 50%;
                background-position: 100% 0%;
            }
        }
        .thumb-link-marker-icon {
            display: inline-block;
            width: 0;
            height: 0;
            left: 21px;
            border-style: solid;
            position: absolute;
            z-index: 3;
            margin: var(--link-arrow-margin-block) var(--link-arrow-margin-inline);
            border-width: 0 var(--link-arrow-container-size) var(--link-arrow-container-size) var(--link-arrow-container-size);
            border-color: transparent transparent #dadada transparent;
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                height: 0;
                width: 0;
                top: 0;
                left: calc(-1 * var(--link-arrow-border-size));
                border-style: solid;
                border-width: 0 var(--link-arrow-border-size) var(--link-arrow-border-size) var(--link-arrow-border-size);
                border-color: transparent transparent #484848 transparent;
                transform: translateY(1px);
                z-index: 2;
            }
            &.marker-checked:after {
                border-color: transparent transparent var(--main-link-marker) transparent;
            }
        }
        .pendulum-scale {
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 18px;
            line-height: 1;
            z-index: 3;
            font-size: var(--fs-sm);
            background-color: #eaeaea;
            box-shadow: var(--bs-1);
            padding: var(--spacing-xxs) 0;
            &.red-scale {
                right: 0;
                color: var(--main-red-scale);
                border-radius: var(--br-lg) 0 0 0;
            }
            &.blue-scale {
                left: 0;
                color: var(--main-blue-scale);
                border-radius: 0 var(--br-lg) 0 0;
            }
        }
    }
    .action-slot {
        display: none;
        padding: var(--spacing-xs);
        position: absolute;
        top: 0;
        right: 0;
        background: var(--main-level-3);
        height: 100%;
        box-shadow: 0 0 3px 0 #2a2a2a;
        cursor: default;
        &.force-visible {
            display: block;
        }
        .action-container {
            display: inline-grid;
            grid-template-columns: max-content;
            gap: var(--spacing-xs);
        }
        .action-button {
            cursor: pointer;
            &.action-duplicate:hover {
                color: var(--main-active);
            }
            &.action-delete:hover {
                color: var(--main-danger);
            }
            &.action-download:hover {
                color: var(--main-online);
            }
        }
    }
    &:hover {
        .action-slot {
            display: block;
        }
    }
`,Dm=e=>{var t,a,n,i,o,l,s,c,u;let{index:m,card:b,active:h,selected:f,language:v,onDuplicate:y,onActive:x,onDelete:j,onSelect:O,style:w}=e;const[k,S]=Object(r.useState)(!1),{art:C,artCrop:F,artData:L,artFit:T,artSource:I,artStyle:N,atk:R,attribute:E,attributeType:z,background:A,backgroundCrop:D,backgroundData:P,backgroundFit:H,backgroundSource:W,backgroundStyle:B,backgroundType:$,cardIcon:Y,def:K,effectStyle:U,format:G,frame:X,hasBackground:q,isLink:V,isPendulum:_,leftFrame:J,rightFrame:Q,linkMap:Z,name:ee,opacity:te,pendulumFrame:ae,pendulumRightFrame:re,pendulumScaleBlue:ne,pendulumScaleRed:ie,pendulumStyle:oe,setId:le,star:se,iconImage:ce,iconImageData:de,iconImageSource:ue,subFamily:me,typeAbility:pe}=b,{topLeftFrame:be,topRightFrame:he,bottomLeftFrame:ge,bottomRightFrame:fe}=lr({frame:X,topLeftFrame:J,topRightFrame:Q,bottomLeftFrame:ae,bottomRightFrame:re,effectBackground:U.background,pendulumEffectBackground:oe.background},_),ve=Fr(ee),ye="offline"===I?C?L:"https://i.imgur.com/jjtCuG5.png":C,xe="offline"===W?A?P:"https://imgur.com/pdSVzUZ.png":A,je="auto"===Y?ar(X):Y,Oe="st"===je?me:je,we=!!(R||K||V&&Z.length),ke=pe.join(" / "),Se=p(_,te),{artFrameHeight:Ce,artFrameWidth:Fe}=Se,Le=null!==(t="user-defined"===Y?"online"===ue&&ce?ce:"offline"===ue&&de?de:void 0:void 0)&&void 0!==t?t:`/ygocarder/asset/image/subfamily/subfamily-${("custom"===Oe?"icon-list":Oe).toLowerCase()}.png`;return Object(g.jsxs)(Am,{className:Ko("truncate",h?"active":"",m%2===0?"alternative-color":""),onClick:()=>x(b),style:w,children:[Object(g.jsxs)("div",{className:"left-slot",children:[Object(g.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(a=Ue[be])||void 0===a?void 0:a.labelBackgroundColor,backgroundImage:null===(n=Ue[be])||void 0===n?void 0:n.labelBackgroundImage}}),Object(g.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(i=Ue[he])||void 0===i?void 0:i.labelBackgroundColor,backgroundImage:null===(o=Ue[he])||void 0===o?void 0:o.labelBackgroundImage}}),Object(g.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(l=Ue[ge])||void 0===l?void 0:l.labelBackgroundColor,backgroundImage:null===(s=Ue[ge])||void 0===s?void 0:s.labelBackgroundImage}}),Object(g.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(c=Ue[fe])||void 0===c?void 0:c.labelBackgroundColor,backgroundImage:null===(u=Ue[fe])||void 0===u?void 0:u.labelBackgroundImage}}),Object(g.jsxs)("a",{className:"card-art-container",href:ye,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:Fe*zm,height:Ce*zm,top:(Rm-Em)/2/2*zm,left:(Em-Fe)/2*zm,backgroundColor:d},children:[Object(g.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${B.flipX?-1:1}, ${B.flipY?-1:1})`},children:q&&Object(g.jsx)(Hm,{className:"background-art",artLink:xe,name:ve+" - background",fit:H,crop:D,canvasCoordinate:p(_,{...te,boundless:"fit"!==$})})}),Object(g.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${N.flipX?-1:1}, ${N.flipY?-1:1})`},children:Object(g.jsx)(Hm,{className:"foreground-art",artLink:ye,name:ve,fit:T,crop:F,canvasCoordinate:Se})})]}),V&&[...Array(9)].map((e,t)=>{if(4===t)return null;const a=_?Qe:Je,r=_?et:Ze;return Object(g.jsx)("div",{className:Ko(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,Z.includes(`${t+1}`)?"marker-checked":""),style:{top:_?16:19,transform:`rotate(${_e[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)}),_&&ne&&Object(g.jsx)("div",{className:"pendulum-scale blue-scale",children:ne}),_&&ie&&Object(g.jsx)("div",{className:"pendulum-scale red-scale",children:ie})]}),Object(g.jsxs)("div",{className:"right-slot truncate",children:[Object(g.jsxs)("div",{className:"first-row truncate",children:[Object(g.jsx)("div",{className:"select-box",onClick:e=>e.stopPropagation(),children:Object(g.jsx)(xl.a,{checked:f,onChange:e=>{O(b,e.target.checked?"add":"remove")}})}),ve]}),Object(g.jsxs)("div",{className:"second-row truncate",children:["custom"===z&&E.length>0?Object(g.jsx)("img",{className:"attribute-icon",src:E,alt:"Attribute"}):"NONE"===E?null:Object(g.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${G}-${E.toLowerCase()}.png`,alt:"Attribute"}),pe.length>0&&Object(g.jsx)("div",{className:"truncate",children:ke}),"st"!==je&&Object(g.jsx)("div",{className:"padding"}),Oe!==M&&"none"!==je&&Object(g.jsx)("img",{className:"card-icon",src:Le,alt:"Icon"}),Oe!==M&&"st"!==je&&"none"!==je&&"custom"!==je&&Object(g.jsx)("span",{className:Ko("star-content truncate",ke.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof se?se:""!==se?`"${se}"`:""})]}),Object(g.jsxs)("div",{className:"third-row truncate",children:[we&&Object(g.jsx)("div",{children:R}),we?Object(g.jsx)("div",{children:"\xa0/\xa0"}):Object(g.jsx)("div",{children:"\xa0"}),we&&Object(g.jsx)("div",{children:V?`Link ${Z.length}`:K}),le&&Object(g.jsx)("div",{className:"set-id",children:le})]})]}),Object(g.jsx)("div",{className:Ko("action-slot",k?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(g.jsxs)("div",{className:"action-container",children:[Object(g.jsx)(Go.a,{placement:"left",title:v["manager.button.duplicate.tooltip"],children:Object(g.jsx)(nd.a,{className:"action-button action-duplicate",onClick:()=>y(b)})}),Object(g.jsx)(Go.a,{placement:"left",title:v["manager.button.download.tooltip"],children:Object(g.jsx)(hc.a,{className:"action-button action-download",onClick:()=>{const{id:e,...t}=b;Nl()(JSON.stringify(vr(t)))}})}),Object(g.jsx)(gs.a,{placement:"left",title:v["manager.button.delete.label"],onVisibleChange:e=>S(e),onConfirm:()=>j(b.id),okText:v["manager.button.delete.confirm.label"],cancelText:v["manager.button.delete.cancel.label"],children:Object(g.jsx)(Go.a,{placement:"left",title:v["manager.button.delete.tooltip"],children:Object(g.jsx)(Vo.a,{className:"action-button action-delete"})})})]})})]})},Pm=(e,t,a,r,n)=>{var i;const{artWidth:o,artY:l,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:p,y:b}=null!==(i=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==i?i:{},h=e*((null!==u&&void 0!==u?u:0)/100),g=t*((null!==m&&void 0!==m?m:0)/100),f=o*zm/(h<=0?1:h);return{top:(null!==b&&void 0!==b?b:0)/100*-t*f,left:(null!==p&&void 0!==p?p:0)/100*-e*f,width:e*f,height:n?t*(o/s*zm/(g<=0?1:g)):void 0,transform:[`translateX(${-(o===c?0:(Em-c)/2-Mm)*zm}px)`,`translateY(${-(d-l)*zm}px)`].join(" ")}},Hm=e=>{let{artLink:t,name:a,crop:n,className:i,fit:o,canvasCoordinate:l,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,p]=Object(r.useState)(()=>{var e,t,a,r;return Pm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o)});return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&d(t)},500),()=>{e=!1}},[t]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{var t,a,r,i;e&&p(Pm(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(i=u.current)||void 0===i?void 0:i.naturalHeight)&&void 0!==r?r:1,l,n,o))},500),()=>{e=!1}},[n,l,o]),Object(g.jsx)("img",{ref:u,className:Ko("card-art",i),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;p(Pm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o))}})};var Wm=a(326),Bm=a(339),$m=a(671),Ym=a(672),Km=a(673);const Um=h.b.div`
    .exporting-item {
        display: grid;
        grid-template-columns: 1.5rem 1fr;
    }
    .anticon-hourglass {
        color: var(--main-info);
    }
    .anticon-loading {
        color: var(--main-active);
    }
    .anticon-check-circle {
        color: var(--main-online);
    }
`,Gm=e=>{let{language:t,onActive:a}=e;const{selectedMap:n,listName:i,activeId:o,cardDisplayList:l}=bn(Object(kn.useShallow)(e=>{let{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}=e;return{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}})),{batchQueue:s,batchDataMap:c,isBatchDownloading:d,isReady:u,clearQueue:m,stopBatchDownload:p,startBatchDownload:b}=Mr(),h=s[0],f=Object(r.useRef)("");Object(r.useEffect)(()=>{if(h&&d&&h!==f.current){f.current=h;const e=l.find(e=>e.id===h);e&&a(e)}},[l,d,h,a]),Object(r.useEffect)(()=>{let e=!0;return u&&(async()=>{const{batchName:t,batchDataMap:a}=Mr.getState(),r=new Qo.a;if(Object.values(a).length>0){Object.values(a).forEach(e=>{let{blob:t,name:a}=e;r.file(a,t)});const n=await r.generateAsync({type:"blob"});e&&(no(`${t}.zip`,n,"application/zip"),p())}})(),()=>{e=!1}},[u,p]);const v=0===Object.keys(n).length;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Uo.a,{visible:d,onCancel:()=>p(),onOk:()=>m(),cancelText:t["manager.batch.batch-download.cancel-all.label"],okText:t["manager.batch.batch-download.premature-stop.label"],okButtonProps:{type:"default"},children:Object(g.jsx)(Um,{className:"exporting-list",children:Object.values(l).map(e=>{let{id:t,name:a}=e;return v||n[t]?Object(g.jsxs)("div",{className:"exporting-item",children:[Object(g.jsx)("div",{className:"export-status",children:o===t?Object(g.jsx)($m.a,{}):c[t]?Object(g.jsx)(Ym.a,{}):Object(g.jsx)(Km.a,{})}),Object(g.jsx)("div",{className:"export-name",children:a})]},t):null})})}),Object(g.jsx)(tl.a,{className:"batch-download-button",onClick:()=>b(i,v?l.map(e=>e.id):Object.keys(n)),children:v?t["manager.batch.batch-download.label"]:t["manager.batch.batch-download.partial-download.label"]})]})};var Xm=a(674);const qm=Object(h.b)(Uc.a.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`,Vm=h.b.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .list-container {
        flex: 1;
        overflow: auto;
    }
    .batch-download-button {
        margin-bottom: var(--spacing-xs);
    }
    .select-panel {
        display: grid;
        grid-template-columns: max-content max-content 1fr;
        padding: var(--spacing-xs);
        gap: var(--spacing-xs);
        text-align: right;
        .ant-checkbox-wrapper span {
            padding-right: 0;
        }
        .scheme-button {
            display: inline-block;
        }
    }
    .no-card {
        padding: var(--spacing);
        text-align: center;
        position: absolute;
        width: 100%;
        .reset-filter {
            cursor: pointer;
            color: var(--main-active);
            &:hover {
                color: var(--sub-active);
            }
        }
    }
    .add-card {
        flex: 0;
        width: 100%;
        border-radius: 0;
        background: var(--main-primary);
        border-color: var(--main-active);
        &:hover {
            background: var(--sub-primary);
        }
    }
`,_m=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,selectedMap:i,language:o,list:l,onDelete:s,onDuplicate:c,onActive:d,onSelect:u}=t;return Object(g.jsx)(Dm,{index:a,card:l[a],active:l[a].id===n,selected:!!i[l[a].id],language:o,onDuplicate:c,onActive:d,onDelete:s,onSelect:u,style:r})},Jm=e=>{let{language:t,onActive:a,onRequestImport:n}=e;const{activeId:i,cardDisplayList:o,selectedMap:l,selectCard:s,deleteCard:c,duplicateCard:d,setSelectMap:u,resetFilter:m}=bn(Object(kn.useShallow)(e=>{let{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}=e;return{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}})),{exportScheme:p,updateSetting:b}=yn(Object(kn.useShallow)(e=>{let{setting:{exportScheme:t},updateSetting:a}=e;return{exportScheme:t,updateSetting:a}})),[h,f]=Object(r.useState)(0),v=Object(r.useCallback)((e,t)=>{s(e.id,t)},[s]),y=e=>{c(e),f(e=>e+1)};return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{if(e&&h>0){const{activeId:e,cardList:t,setCardList:r}=bn.getState(),n=t.find(t=>t.id===e);if(n)a(n);else{const e={id:Object(ue.a)(),...ua()};r([e],e.name)}}},500),()=>{e=!1}},[a,h]),Object(g.jsxs)(Vm,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[o.length>0&&Object(g.jsxs)("div",{className:"select-panel",children:[Object(g.jsx)(tl.a,{size:"small",onClick:()=>u([],"replace"),children:t["manager.batch.batch-download.clear.label"]}),Object(g.jsx)(tl.a,{size:"small",onClick:()=>u(o,"add"),children:t["manager.batch.batch-download.all.label"]}),Object(g.jsx)("div",{children:Object(g.jsx)(al.a,{overlay:Object(g.jsx)(Uc.a,{children:[{value:"with-name",label:t["manager.batch.batch-download.export-option.with-name.label"]},{value:"with-id",label:t["manager.batch.batch-download.export-option.with-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(g.jsx)(qm,{onClick:()=>b({exportScheme:t}),className:t===p?"menu-active":"",children:a},t)})}),children:Object(g.jsxs)("div",{className:"scheme-button",children:[t["manager.batch.batch-download.export-scheme.label"]," ",Object(g.jsx)(Xm.a,{})]})})})]}),Object(g.jsx)("div",{className:"list-container",children:Object(g.jsx)(Wm.a,{children:e=>{let{height:r,width:n}=e;return Object(g.jsx)(Bm.a,{className:"List",height:r,itemCount:o.length,itemSize:68,itemData:{list:o,language:t,activeId:i,selectedMap:l,onDuplicate:d,onActive:a,onDelete:y,onSelect:v},overscanCount:5,width:n,children:_m})}})}),0===o.length&&Object(g.jsxs)("div",{className:"no-card",children:[Object(g.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(g.jsx)("div",{className:"reset-filter",onClick:m,children:t["manager.button.search.button.reset.label"]})]}),0!==o.length&&Object(g.jsx)(Gm,{language:t,onActive:a}),Object(g.jsx)(tl.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var Qm=a(675);const{Panel:Zm}=Zs.a,ep=h.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,tp=Object(h.b)(Uo.a)`
    .ant-modal-close-x {
        display: none;
    }
    .download-button {
        text-align: center;
        margin: var(--spacing-sm) 0;
        .ant-btn {
            background: var(--main-primary);
            border-color: var(--main-active);
            &:hover {
                background: var(--sub-primary);
            }
        }
    }
    .option-container {
        width: 100%;
        table-layout: fixed;
        background-color: #494949;
        th,
        td {
            border: var(--bw) solid var(--sub-level-4);
            padding: var(--spacing-xs) var(--spacing-sm);
            &:nth-child(1) {
                width: 170px;
            }
            &:nth-child(2) {
                ${zl} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,ap=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),i="https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing";return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(ep,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(g.jsx)(Qm.a,{})]}),Object(g.jsx)(tp,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(g.jsxs)("div",{className:"sample-modal-container",children:[Object(g.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(g.jsx)("br",{}),t["manager.template.description.line-2"]]}),i&&Object(g.jsx)("div",{className:"download-button",children:Object(g.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",download:!0,children:Object(g.jsx)(tl.a,{children:t["manager.template.download.label"]})})}),Object(g.jsx)(Zs.a,{ghost:!0,children:Object(g.jsx)(Zm,{header:Object(g.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(g.jsx)("table",{className:"option-container",children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(g.jsx)("th",{children:Object(g.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(g.jsx)("div",{children:["tcg","ocg"].map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Frame",altField:"Bottom Frame",value:Object(g.jsx)("div",{children:Ge.map(e=>{let{name:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Attribute",value:Object(g.jsx)("div",{children:[...L,...T].filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Spell/Trap Icon",value:Object(g.jsx)("div",{children:z.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Sticker",value:Object(g.jsx)("div",{children:D.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Foil",value:Object(g.jsx)("div",{children:k().filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Card Finish",value:Object(g.jsxs)("div",{children:[Object.values(y).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)}),Object(g.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(g.jsx)("div",{children:Object.values(x).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Star Type",value:Object(g.jsx)("div",{children:["number","text"].map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Star Alignment",value:Object(g.jsx)("div",{children:["left","center","right"].map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Card Icon Type",value:Object(g.jsx)("div",{children:H.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Background Type",value:Object(g.jsx)("div",{children:l().map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Condense Rate",value:Object(g.jsx)("div",{children:Object.keys(je).map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Name Style Type",value:Object(g.jsx)("div",{children:["predefined","custom"].map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Name Style - Font",value:Object(g.jsx)("div",{children:Object(g.jsx)(Dl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(g.jsx)("div",{children:Object.keys(le).map(e=>Object(g.jsx)(Dl,{data:e,children:e},e))})},{field:"Name Style - Pattern",value:Object(g.jsx)("div",{children:de.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{key:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Pendulum Size",value:Object(g.jsx)("div",{children:pe.map(e=>{let{key:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Other Finish - Attribute",value:Object(g.jsx)("div",{children:Object.values(x).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Other Finish - Background",value:Object(g.jsx)("div",{children:Object.values(x).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Other Finish - Icon",value:Object(g.jsx)("div",{children:Object.values(x).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Other Finish - Sticker",value:Object(g.jsx)("div",{children:Object.values(x).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Overlay Type",value:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:t["manager.template.description.overlay"]}),Object(g.jsx)("ul",{children:(o=t,[{value:"border",label:o["input.advanced-frame.overlay-blend.border.label"]},{value:"frame",label:o["input.advanced-frame.overlay-blend.frame.label"]}]).map(e=>{let{value:a}=e;return Object(g.jsx)("li",{children:s(t).map(e=>{let{value:t}=e;const r=`${a},${t}`;return Object(g.jsx)(Dl,{data:r,children:r},r)})},a)})})]})},{field:"Region",value:Object(g.jsx)("div",{children:Object.values(R).map(e=>{let{key:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})})},{field:"Star List",value:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:t["manager.template.description.star-list"]}),Object.values(U).filter(e=>{let{isMixable:t}=e;return t}).map(e=>{let{value:t}=e;return Object(g.jsx)(Dl,{data:t,children:t},t)})]})},{field:"Dye List",value:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:t["manager.template.description.dye-list"]}),Object(g.jsx)("ul",{children:Object.entries(S).sort((e,t)=>e[1]-t[1]).map(e=>{var a,r;let[n]=e;return Object(g.jsx)("li",{children:t[null!==(a=null===(r=qe[n])||void 0===r?void 0:r.labelKey)&&void 0!==a?a:""]},n)})})]})},{field:"Flag",value:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:t["manager.template.description.flag"]}),Vu.map(e=>{let{sampleDisplay:a,index:r}=e;return Object(g.jsx)("div",{children:a(t)},r)})]})}].map(e=>{let{field:t,altField:a,value:r}=e;return Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)(zl,{children:t}),a&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(zl,{children:a})]})]}),Object(g.jsx)("td",{children:r})]},t)})]})})},"sample-option")})]})})]});var o};var rp=a(171);const np=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),ip=h.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,op=Object(h.b)(Vl)`
    .ant-drawer-header {
        padding: 0;
    }
    .manager-label-container {
        padding: var(--spacing-sm) 0 0 var(--spacing-sm);
    }
    .manager-button-container {
        padding: var(--spacing-sm) var(--spacing-sm) 0 var(--spacing-sm);
        .manager-button {
            cursor: pointer;
            input {
                display: none;
            }
            &:hover {
                color: var(--main-active);
                .anticon {
                    color: var(--main-active);
                }
            }
            &.close-button:hover {
                .anticon {
                    color: var(--main-danger);
                }
            }
        }
    }
    .card-manager-header {
        display: grid;
        grid-template-columns: 1fr max-content;
        .card-manager-filter {
            grid-column: span 2;
            padding: var(--spacing-xs);
            .card-manager-search {
                width: 100%;
            }
        }
    }
    .manager-button-container {
        display: inline-flex;
        gap: var(--spacing-sm);
    }
`,lp=Object(r.forwardRef)((e,t)=>{let{language:a,onVisibleChange:n,onSelect:i,onRequestImport:o}=e;const l="list-upload-id",s=Object(r.useRef)(null),{cardList:c,changeEditStatus:d,pendingActiveCard:u,setActiveId:m,setCardList:p,setFilterFunction:b,setListName:h,setPendingActiveCard:f,sortList:v,toggleVisible:y,visible:x}=bn(Object(kn.useShallow)(e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}})),j=yn(e=>e.setting.exportFormat),[O,w]=Object(r.useState)(0),[k,S]=Object(r.useState)(!1),[C,F]=Object(r.useState)(!1),L=Ar()(e=>{b({type:"text",value:e.target.value})},250),T=Object(r.useCallback)(e=>{i(e),m(e.id)},[i,m]);return Object(r.useEffect)(()=>{u&&(i(u),m(u.id),f())},[i,u,m,f]),Object(r.useEffect)(()=>{localStorage.setItem("manager-panel-visible",x.toString()),n(x)},[n,x]),Object(r.useEffect)(()=>{const e=bn.subscribe(e=>e.filterResetSignal,e=>{e&&w(e=>e+1)});return()=>{e()}},[]),Object(r.useImperativeHandle)(t,()=>({}),[]),Object(g.jsx)(ip,{children:Object(g.jsx)(op,{className:"card-manager-panel",title:Object(g.jsxs)("div",{className:"card-manager-header truncate",children:[Object(g.jsx)(cp,{className:"manager-label-container truncate",language:a,children:c.length}),Object(g.jsxs)("div",{className:"manager-button-container",children:[Object(g.jsx)("div",{className:"manager-button",children:Object(g.jsx)(ap,{language:a})}),Object(g.jsx)(al.a,{overlay:Object(g.jsx)(Uc.a,{children:[{value:mn.level.key,label:a["manager.button.sort.level.label"]},{value:mn.name.key,label:a["manager.button.sort.name.label"]},{value:mn.atk.key,label:a["manager.button.sort.atk.label"]},{value:mn.def.key,label:a["manager.button.sort.def.label"]},{value:mn.set.key,label:a["manager.button.sort.set-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(g.jsx)(Uc.a.Item,{onClick:()=>v(t),children:a},t)})}),children:Object(g.jsx)("div",{className:"manager-button",children:Object(g.jsx)(xu.a,{})})}),Object(g.jsx)(Go.a,{title:a["manager.header.button.download.tooltip"],children:Object(g.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(F(!0),np.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Ur.length;for(let r=0;r<e.length;r++){const n=(e,t)=>{const a=Vr[e];"number"===typeof a&&("string"===typeof t&&(i[a]=t),"number"===typeof t&&(i[a]=`${t}`),"boolean"===typeof t&&(i[a]=`${t}`),null==t&&(i[a]=""))},i=Array(a).map(()=>""),{art:o,artCrop:l,artData:s,artFinish:c,artFit:d,artSource:u,artStyle:m,atk:p,attribute:b,attributeType:h,background:g,backgroundCrop:f,backgroundData:v,backgroundFit:y,backgroundSource:x,backgroundStyle:j,backgroundType:O,cardIcon:w,cornerText:k,creator:S,def:C,dyeList:F,effect:L,effectStyle:T,effectTextStyle:I,externalInfo:N,finish:R,firstEditionText:E,flag:M,foil:z,format:A,frame:D,furiganaHelper:P,hasBackground:H,hasCornerText:W,isDuelTerminalCard:B,isFirstEdition:$,isLegacyCard:Y,isLimitedEdition:K,isLink:U,isPendulum:G,isSpeedCard:X,leftFrame:q,legacyTemplate:V,linkMap:_,linkRating:J,name:Q,nameStyle:Z,nameStyleType:ee,opacity:te,otherFinish:ae,otherTextStyle:re,overlay:ne,overlayCrop:ie,overlayData:oe,overlayFit:le,overlaySource:se,overlayStyle:ce,overlayType:de,password:ue,pendulumEffect:me,pendulumFrame:pe,pendulumRightFrame:be,pendulumScaleBlue:he,pendulumScaleRed:ge,pendulumSize:fe,pendulumStyle:ve,pendulumTextStyle:ye,region:xe,rightFrame:je,setId:Oe,star:we,starAlignment:ke,iconImage:Se,iconImageCrop:Ce,iconImageData:Fe,iconImageFit:Le,iconImageSource:Te,iconImageStyle:Ie,starList:Ne,statTextStyle:Re,sticker:Ee,subFamily:Me,typeAbility:ze,typeTextStyle:Ae}=e[r],De=JSON.stringify(N),Pe=M.join("|"),He=F.join("|"),We=Ne.join("|");n("Format",A),n("Region",xe),n("Frame",D),n("Name",Q),n("Attribute",b),n("Attribute Type",h),n("Star",`${we}`),n("Spell/Trap Icon",Me),n("Art Link",o),n("Art Data",s),n("Art Source",u),n("Type Ability",ze.join("/")),n("Effect",L),n("Set Id",Oe),n("ATK",p),n("DEF",C),n("Password",ue),n("Sticker",Ee),n("Copyright",S),n("Is Pendulum",G),n("Pendulum Effect",me),n("Pendulum Scale Red",ge),n("Pendulum Scale Blue",he),n("Is Link",null!==U&&void 0!==U?U:void 0),n("Link - Top Left Arrow",_.includes("1")),n("Link - Top Arrow",_.includes("2")),n("Link - Top Right Arrow",_.includes("3")),n("Link - Left Arrow",_.includes("4")),n("Link - Right Arrow",_.includes("6")),n("Link - Bottom Left Arrow",_.includes("7")),n("Link - Bottom Arrow",_.includes("8")),n("Link - Bottom Right Arrow",_.includes("9")),n("Link Rating",J),n("First Edition Text",E),n("Is First Edition",$),n("Corner Text",k),n("Has Corner Text",W),n("Is Speed Card",X),n("Is Limited Edition",K),n("Is Duel Terminal Card",B),n("Is Legacy Card",Y),n("Foil",z),n("Art Finish",c),n("Card Finish",R.join(",")),n("Art Crop - X (%)",l.x),n("Art Crop - Y (%)",l.y),n("Art Crop - Width (%)",l.width),n("Art Crop - Height (%)",l.height),n("Is Using Full Art",d),n("Art Style",JSON.stringify(m)),n("Star Type","number"===typeof we&&we>=0&&we<=13?"number":"text"),n("Star Alignment",ke),n("Card Icon Type",w),n("Opacity - Body",te.body),n("Opacity - Pendulum",te.pendulum),n("Opacity - Text",te.text),n("Opacity - Name",te.name),n("Opacity - Base Fill",te.baseFill),n("Opacity - Art Border",te.artBorder),n("Opacity - Effect Box",te.effectBox),n("Opacity - Frame Border",te.frameBorder),n("Opacity - Name Border",te.nameBorder),n("Opacity - Boundless",te.boundless),n("Has Background",H),n("Background Link",g),n("Background Data",v),n("Background Source",x),n("Is Using Full Background",y),n("Background Style",JSON.stringify(j)),n("Background Type",O),n("Background Crop - X (%)",f.x),n("Background Crop - Y (%)",f.y),n("Background Crop - Width (%)",f.width),n("Background Crop - Height (%)",f.height),n("Bottom Frame",pe),n("Condense Rate",T.condenseTolerant),n("Use Furigana Helper",P),n("Name Style Type",ee),n("Name Style - Font",Z.font),n("Name Style - Fill Style",Z.fillStyle),n("Name Style - Headtext Fill Style",Z.headTextFillStyle),n("Name Style - Shadow Color",Z.shadowColor),n("Name Style - Shadow Offset Y",Z.shadowOffsetY),n("Name Style - Shadow Offset X",Z.shadowOffsetX),n("Name Style - Shadow Blur",Z.shadowBlur),n("Name Style - Has Shadow",Z.hasShadow),n("Name Style - Line Color",Z.lineColor),n("Name Style - Line Width",Z.lineWidth),n("Name Style - Line Offset Y",Z.lineOffsetY),n("Name Style - Line Offset X",Z.lineOffsetX),n("Name Style - Has Outline",Z.hasOutline),n("Name Style - Gradient Angle",Z.gradientAngle),n("Name Style - Gradient Color",Z.gradientColor),n("Name Style - Has Gradient",Z.hasGradient),n("Name Style - Emboss Pitch",Z.embossPitch),n("Name Style - Emboss Yaw",Z.embossYaw),n("Name Style - Emboss Thickness",Z.embossThickness),n("Name Style - Has Emboss",Z.hasEmboss),n("Name Style - Preset",Z.preset),n("Name Style - Pattern",Z.pattern),n("Stat Style - Is Custom",Re[0]),n("Stat Style - Fill Color",Re[1]),n("Stat Style - Has Shadow",Re[2]),n("Stat Style - Shadow Color",Re[3]),n("Type Style - Is Custom",Ae[0]),n("Type Style - Fill Color",Ae[1]),n("Type Style - Has Shadow",Ae[2]),n("Type Style - Shadow Color",Ae[3]),n("Effect Style - Is Custom",I[0]),n("Effect Style - Fill Color",I[1]),n("Effect Style - Has Shadow",I[2]),n("Effect Style - Shadow Color",I[3]),n("Effect Style - Upsize",T.upSize),n("Effect Style - Font Style",T.fontStyle),n("Effect Style - Background",T.background),n("Effect Style - Min Line",T.minLine),n("Effect Style - Justify Ratio",T.justifyRatio),n("Pendulum Size",fe),n("Pendulum Effect Style - Is Custom",ye[0]),n("Pendulum Effect Style - Fill Color",ye[1]),n("Pendulum Effect Style - Has Shadow",ye[2]),n("Pendulum Effect Style - Shadow Color",ye[3]),n("Pendulum Effect Style - Upsize",ve.upSize),n("Pendulum Effect Style - Font Style",ve.fontStyle),n("Pendulum Effect Style - Background",ve.background),n("Pendulum Effect Style - Min Line",ve.minLine),n("Pendulum Effect Style - Justify Ratio",ve.justifyRatio),n("Other Style - Is Custom",re[0]),n("Other Style - Fill Color",re[1]),n("Other Style - Has Shadow",re[2]),n("Other Style - Shadow Color",re[3]),n("Other Finish - Attribute",ae[0]),n("Other Finish - Icon",ae[1]),n("Other Finish - Sticker",ae[2]),n("Other Finish - Background",ae[3]),n("Overlay Link",ne),n("Overlay Data",oe),n("Overlay Source",se),n("Is Using Full Overlay",le),n("Overlay Style",JSON.stringify(ce)),n("Overlay Type",de),n("Overlay Crop - X (%)",ie.x),n("Overlay Crop - Y (%)",ie.y),n("Overlay Crop - Width (%)",ie.width),n("Overlay Crop - Height (%)",ie.height),n("Icon Link",Se),n("Icon Data",Fe),n("Icon Source",Te),n("Is Using Full Icon Image",Le),n("Icon Style",JSON.stringify(Ie)),n("Icon Crop - X (%)",Ce.x),n("Icon Crop - Y (%)",Ce.y),n("Icon Crop - Width (%)",Ce.width),n("Icon Crop - Height (%)",Ce.height),n("Left Frame",q),n("Right Frame",je),n("Bottom Right Frame",be),n("Dye List",He),n("Star List",We),n("Flag",Pe),n("Legacy Template",V),n("External Info (JSON)","{}"===De?"":De),t.push(i.map(_r).join(","))}return{value:[Ur.join(","),t.join("\n")].join("\n"),error:""}})(bn.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&Hr.a.error({message:t,description:r})}switch(j){case"xlsx":{const e=rp.a.read(t,{type:"string"});rp.a.writeFile(e,`${bn.getState().listName}.xlsx`);break}default:no(bn.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}d("download")}catch(t){}F(!1)},children:C?Object(g.jsx)($m.a,{}):Object(g.jsx)(hc.a,{})})}),Object(g.jsx)(Go.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(g.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(l);e&&!k&&e.click()},children:[Object(g.jsx)("input",{ref:s,type:"file",id:l,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=s.current)||void 0===t?void 0:t.files,{isListDirty:n}=bn.getState(),o=()=>{w(e=>e+1),S(!1),Hr.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let l=!0;if(n&&(l=window.confirm(a["prompt.warning.on-import.label"])),l&&r&&r[0]){S(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=rp.a.read(e,{codepage:65001}),n=rp.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),l=tn(n);l.length>0?(p(l,l[0].id),h(t),w(e=>e+1),i(l[0]),S(!1)):o()}catch(e){console.error(e),o()}}else w(e=>e+1),S(!1)}},`upload-${O}`),k?Object(g.jsx)($m.a,{}):Object(g.jsx)(md.a,{})]})},`${k}`),Object(g.jsx)("div",{className:"manager-button close-button",onClick:()=>y(!1),children:Object(g.jsx)(Vo.a,{})})]}),Object(g.jsx)("div",{className:"card-manager-filter",children:Object(g.jsx)(Is.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>b({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${O}`)})]}),visible:x,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>y(!1),width:280,children:Object(g.jsx)(Jm,{language:a,onActive:T,onRequestImport:o})})})}),sp=h.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,cp=e=>{let{language:t,children:a,...n}=e;const{isListDirty:i,cardList:o}=bn(Object(kn.useShallow)(e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}}));return Object(r.useEffect)(()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return i&&o.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[o.length,i,t]),Object(g.jsxs)(sp,{...n,children:[a,i&&o.length>1&&Object(g.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},dp=h.b.div`
    display: flex;
    column-gap: var(--spacing);
    border-radius: var(--br-lg);
    font-size: var(--fs-4xl);
    line-height: 1.5;
    margin: auto;
    max-width: var(--card-width);
    min-height: 59px;
    outline: none !important;   // Avoid default state styling
    padding: var(--spacing);
    padding-right: 0;
    text-align: center;
    text-shadow: 0 1px 2px black;
    .anticon {
        cursor: pointer;
    }
    button {
        color: white;
        border-radius: var(--br-lg);
        outline: none !important;   // Avoid default state styling
        cursor: pointer;
    }
    .save-button {
        flex: 1;
        font-size: var(--fs-xl);
        border: none;
        font-weight: 500;
        box-shadow: var(--bs-button);
        height: 39px; // Alignment
        line-height: 1;
        &:focus, &:active {
            color: white;
        }
    }
    #save-button-waiting {
        cursor: wait;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
    #save-button-ready {
        cursor: pointer;
        &:hover {
            background-color: var(--sub-info);
            box-shadow: none;
        }
    }
    .save-button-container {
        display: flex;
        flex: 1;
        font-size: var(--fs);
        line-height: 1.35;
        position: relative;
    }
    .save-button-tainted {
        .alert-label {
            flex: 1;
            padding-top: var(--spacing-px);
        }
        .resolution-option {
            position: relative;
            border: none;
            border-radius: var(--br-lg);
            background: var(--main-primary);
        }
    }
    .imexport {
        flex: 0 0 200px;
        display: grid;
        grid-template-columns: 1fr max-content var(--spacing) 1fr max-content;
        .primary-button {
            align-content: center;
            font-size: var(--fs);
            background-color: var(--main-tertiary);
            border: var(--bw) solid var(--sub-tertiary);
            border-radius: var(--br-lg) 0 0 var(--br-lg);
            &:hover {
                background-color: var(--sub-tertiary);
                box-shadow: none;
            }
        }
        ${Xo} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,up=h.b.div`
    position: relative;
    display: block;
    width: calc(var(--card-width) * var(--resize-ratio) * 1 / var(--global-scale));
    height: calc(var(--card-height) * var(--resize-ratio) * 1 / var(--global-scale));
    margin: 0 var(--spacing);
    .reset-button,
    .lightbox-button {
        display: none;
    }
    #preview-canvas {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
        transform: translateX(calc(var(--resize-percentage) / 2 - 50%))
            translateY(calc(var(--resize-percentage) / 2 - 50%))
            scale(var(--resize-ratio))
            translateZ(0);
        &.js-export-available {
            display: inline-block !important;   // Override js-controlled inline style
            cursor: default;
        }
    }
    &:hover {
        .reset-button,
        .lightbox-button {
            display: block;
        }
    }
`,mp=h.b.div`
    width: var(--card-width);
    height: var(--card-height);
    margin-bottom: var(--spacing);
    transform: translateX(calc(var(--resize-percentage) / 2 / var(--global-scale) - 50%))
        translateY(calc(var(--resize-percentage) / 2 / var(--global-scale) - 50%))
        scale(calc(var(--resize-ratio) / var(--global-scale)))
        translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    canvas {
        position: absolute;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }
    &:hover {
        #export-canvas.js-export-available {
            display: inline-block !important;   // Override js-controlled inline style
            cursor: default;
        }
        #export-canvas-guard {
            display: flex;
            cursor: wait;
            transition: all 2s;
        }
    }
    #export-canvas {
        display: none;
        z-index: 100;
        pointer-events: all;
    }
    #export-canvas-guard {
        position: absolute;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 101;
        // background-color: #ffffff08;
        width: var(--card-width);
        height: var(--card-height);
        .anticon {
            font-size: var(--fs-4xl);
        }
        .canvas-guard-alert {
            position: absolute;
            top: 0;
            right: 0;
            color: white;
            padding: var(--spacing-xs) var(--spacing);
            border-radius: 0 0 0 var(--br-lg);
            background-color: var(--main-active);
            box-shadow:
                0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);
        }
        &.guard-on {
            display: flex !important;   // Override js-controlled inline style
        }
    }
    .crop-canvas {
        position: relative;
        /** Size here is just a placeholder, crop canvas constantly get its dimensions updated based on the current artwork */
        width: 416px;
        height: 416px;
        z-index: 0;
        top: 0;
        left: 0;
        visibility: hidden;
    }
`,pp=h.b.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(45deg, #333, #333);
	z-index: 4000;
	color: white;
	text-shadow:
		0 1px #333,
		0 2px #111;
	font-size: var(--fs-3xl);
	display: flex;
	align-items: center;
	justify-content: center;
`,bp=h.b.div`
	position: fixed;
	right: var(--spacing);
	bottom: 0;
	font-size: var(--fs-xs);
	opacity: 0.5;
	padding: var(--spacing-px) var(--spacing-xs);
	color: var(--color-dim);
    img {
        height: 10px;
        margin-left: 1px;
    }
`,hp=h.b.span`
    color: var(--main-danger);
`,gp=Object(h.b)(Bl)`
    position: absolute;
    z-index: 101;
`,fp=Object(h.b)(gp)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,vp=Object(h.b)(gp)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var yp=a(247),xp=a(612),jp=a(613),Op=a(625),wp=a(629),kp=a(332);Object(yp.configure)({ignoreTags:[]});const Sp={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+y","command+y"],DOWNLOAD:["ctrl+s","command+s"]},{height:Cp,width:Fp}=c,{height:Lp,width:Tp}=Tr;var Ip=function(){var e,t,a,n,i,o,l,s,c;const{allowHotkey:d,softMode:u,globalScale:m,resolution:p,slidingType:b}=yn(Object(kn.useShallow)(e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r,resolution:n,slidingType:i}}=e;return{softMode:a,allowHotkey:t,globalScale:r,resolution:n,slidingType:i}})),{isInitiating:h,isLoading:f,language:v,isMetadataReady:y,languageInfo:x,initiate:j,loadDefaultLanguage:O}=Br(Object(kn.useShallow)(e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}})),w=!Yo&&!("ontouchstart"in window||navigator.maxTouchPoints>0),[k,S]=Object(r.useState)(!0),[,C]=Cn("activeDropzone"),[F]=Cn("resetCanvasCounter"),[L,T]=Object(r.useState)(""),[I,N]=Object(r.useState)("online"),{db:R,dbReady:E}=On(),[M,z]=Object(r.useState)(!1),A=Object(r.useRef)(null),D=Object(r.useRef)(null),P=Object(r.useRef)(null),H=Object(r.useRef)(null),W=Object(r.useRef)(null),B=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),K=Object(r.useRef)(null),U=Object(r.useRef)(null),G=Object(r.useRef)(null),X=Object(r.useRef)(null),q=Object(r.useRef)(null),V=Object(r.useRef)(null),_=Object(r.useRef)(null),J=Object(r.useRef)(null),Q=Object(r.useRef)(null),Z=Object(r.useRef)(null),ee=Object(r.useRef)(null),te=Object(r.useRef)(null),ae=Object(r.useRef)(null),re=Object(r.useRef)(null),ne=Object(r.useRef)(null),ie=Object(r.useRef)(null),[oe]=Object(r.useState)({artworkCanvasRef:W,backgroundCanvasRef:B,overlayCanvasRef:Y,iconImageCanvasRef:$,exportCanvasRef:K,frameCanvasRef:G,cardIconCanvasRef:X,pendulumScaleCanvasRef:q,pendulumEffectCanvasRef:V,typeCanvasRef:_,effectCanvasRef:J,nameCanvasRef:Q,statCanvasRef:Z,setIdCanvasRef:ee,passwordCanvasRef:te,creatorCanvasRef:ae,stickerCanvasRef:re,finishCanvasRef:ne,lightboxRef:ie,previewCanvasRef:U}),{updateCanvasRenderCount:le,updateCanvasData:se}=vn(Object(kn.useShallow)(e=>{let{updateCanvasRenderCount:t,updateCanvasData:a}=e;return{updateCanvasRenderCount:t,updateCanvasData:a}})),ce=Object(r.useRef)(null),de=Object(r.useRef)(null),ue=Object(r.useRef)(null),[me,pe]=Object(r.useState)(0);Object(r.useEffect)(()=>{const e=()=>{C(0)};let t=window.setTimeout(e,200);const a=()=>{C(1),window.clearTimeout(t),t=window.setTimeout(e,200)};return document.addEventListener("dragover",a),()=>{document.removeEventListener("dragover",a)}},[C]),Object(r.useEffect)(()=>{j()},[j]),Object(r.useEffect)(()=>{y&&O()},[y,O]),Object(r.useEffect)(()=>{["font-family","letter-spacing","--width-label"].forEach(e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=x.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")})},[x]),Object(r.useEffect)(()=>{pe(e=>e+1)},[M]),Object(r.useEffect)(()=>{pe(e=>e+1),"auto"===b&&A.current&&(A.current.style.transform="")},[b]),Object(r.useEffect)(()=>{(async()=>{try{if(R&&!1===f&&v){const e=R.transaction("presetLayoutStore","readonly"),t=[];for await(const o of e.store){const{content:e,key:a}=o.value;t.push({key:a,content:JSON.parse(e)})}await e.done,Sn.getState().updateGlobalMemory({layoutPresetList:t});const a=R.transaction("presetImageStore","readonly"),r=[];for await(const o of a.store){const{content:e,key:t}=o.value;r.push({key:t,content:JSON.parse(e)})}await a.done,Sn.getState().updateGlobalMemory({imagePresetList:r});const n=R.transaction("presetNameStyleStore","readonly"),i=[];for await(const o of n.store){const{content:e,key:t}=o.value;i.push({key:t,content:JSON.parse(e)})}await n.done,Sn.getState().updateGlobalMemory({nameStylePresetList:i}),vn.getState().updateCanvasMap(oe)}}catch(e){console.error("Error reading database",e),Hr.a.error({message:v["error.database-initialize.message"],description:v["error.database-initialize.description"]})}})()},[oe,R,f,v]),Object(r.useEffect)(()=>{var e;const t=null===(e=K.current)||void 0===e?void 0:e.getContext("2d"),a=fn.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Mn(t)),!1===h&&ao.a.load({custom:{families:["ITC Stone Serif Std Semibold","Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","SVN-Times New Roman Italic","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const n=localStorage.getItem("card-version"),i=localStorage.getItem("card-data"),o=i?jr(JSON.parse(i)):null,l=new URLSearchParams(window.location.search).get("data");if(l){var e,t,a,r;const{card:n}=hn(l),i=jr(n),{artSource:s,backgroundSource:c,overlaySource:d,iconImageSource:u}=i;if("online"===s&&"online"===c&&"online"===d&&"online"===u)return hn(l).card;const m={...i};return"offline"===s&&(m.artData=null!==(e=null===o||void 0===o?void 0:o.artData)&&void 0!==e?e:""),"offline"===c&&(m.backgroundData=null!==(t=null===o||void 0===o?void 0:o.backgroundData)&&void 0!==t?t:""),"offline"===d&&(m.overlayData=null!==(a=null===o||void 0===o?void 0:o.overlayData)&&void 0!==a?a:""),"offline"===u&&(m.iconImageData=null!==(r=null===o||void 0===o?void 0:o.iconImageData)&&void 0!==r?r:""),m}return null!==o&&"2.4.11"===n?o:da()}catch(n){return console.error(n),da()}})();a(e),bn.getState().setCardList([e],e.id),S(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),Hr.a.error({message:Yr()["error.load.font.tcg"](e)})},inactive:()=>{T(Yr()["error.load.font.all-tcg"]),S(!1)}})},[h]);const{styleContent:be}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:i,onInactive:o}=e;const{font:l,format:s}=fn(Object(kn.useShallow)(e=>({format:e.card.format,font:e.card.nameStyle.font}))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)(()=>{("ocg"===s||"OCG"===l)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),ao.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,o()},fontinactive:i}))},[s,l,t,a,n,i,o]),{styleContent:c}})({isLanguageInitiating:h,onBeforeLoad:()=>{var e;S(!0);const t=null===(e=K.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Mn(t))},onActive:()=>{S(!1)},onInactive:()=>{T(Yr()["error.load.font.all-ocg"]),S(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),Hr.a.error({message:Yr()["error.load.font.ocg"](e)})}}),[he,ge]=Object(r.useState)(!1);Object(r.useEffect)(()=>{var e;F>0&&he&&(null===(e=ie.current)||void 0===e||e.refresh(),pe(e=>e+1))},[he,F]),Object(r.useEffect)(()=>{const e=document.body.classList;u?e.add("reduced-color-motion"):e.remove("reduced-color-motion")},[u]);const fe=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||null===(t=ie.current)||void 0===t||t.setVisible(t=>"boolean"===typeof e?e:!t)},[d]),ve=Object(r.useRef)(!1),ye=document.getElementById("sentry-bug-report");Object(r.useEffect)(()=>{const e="https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920";ye&&e&&v&&!1===ve.current&&!1===Nr.f()&&(ve.current=!0,xp.a({dsn:e,integrations:[jp.a(),Op.a(),wp.a({colorScheme:"system",autoInject:!1}).attachTo(ye,{formTitle:v["contributor.bug-report.tooltip"],nameLabel:v["contributor.bug-report.name.label"],namePlaceholder:v["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:v["contributor.bug-report.message.label"],messagePlaceholder:v["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:v["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:v["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:v["contributor.bug-report.cancel.label"],submitButtonLabel:v["contributor.bug-report.submit.label"],isRequiredLabel:v["contributor.bug-report.required.label"],successMessageText:v["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))},[v,ye]);const xe=Object(r.useCallback)((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:i}=null!==t&&void 0!==t?t:{},{setCard:o,card:l}=fn.getState(),s=i?{...e,id:l.id}:e;r&&bn.getState().addCard(s),o(s,n),pe(e=>e+1),null===(a=H.current)||void 0===a||a.forceCardData(s),$o()},[]),je=Object(r.useCallback)(async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=ue.current)||void 0===t||t.requestImport("replace"))},[d]),Oe=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=ue.current)||void 0===t||t.requestImport("merge"))},[d]),we=Object(r.useCallback)(function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||d)if(null===e||void 0===e||e.preventDefault(),"online"===I&&null!==(t=H.current)&&void 0!==t&&t.isLoading())window.alert(v["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:fn.getState().card;null===(r=de.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),Hr.a.error({message:v["error.export.message"],description:v["error.export.description"]})}},[d,v,I]),ke=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=ce.current)||void 0===t||t.download())},[d]),Se=Object(r.useMemo)(()=>({IMPORT:e=>je(e,!0),MERGE:e=>Oe(e,!0),EXPORT:e=>we(e,!0),VIEW:()=>fe(!0,!0),DOWNLOAD:e=>ke(e,!0)}),[ke,we,je,Oe,fe]),Ce=Object(r.useCallback)(()=>{ge(!0),alert(v["prompt.download.tainted.message"])},[v]),Fe=Object(r.useCallback)(e=>{var t;"anonymous"===e&&(ge(!1),null===(t=ie.current)||void 0===t||t.refresh());pe(e=>e+1)},[]),Le=Object(r.useCallback)((e,t)=>{pe(e=>e+1),N(t)},[]),{iconImageCrop:Te,iconImageSource:Ie}=fn(Object(kn.useShallow)(e=>{let{card:{iconImageCrop:t,iconImageSource:a}}=e;return{iconImageCrop:t,iconImageSource:a}}));Object(r.useEffect)(()=>{Le(Te,Ie)},[Le,Te,Ie,le]);const Ne=Object(r.useCallback)(()=>{pe(e=>e+1),ge(!0)},[]),Re=Object(r.useCallback)(e=>{z(e)},[]),Ee=Object(r.useCallback)(()=>{ge(!1),se(["iconImage"])},[se]),Me=f||k||!E;return Object(g.jsx)(yp.HotKeys,{keyMap:Sp,handlers:Se,children:Object(g.jsxs)("div",{id:"app",onDrop:()=>{},onScroll:e=>{const t=e.currentTarget.scrollTop;if(A.current&&D.current&&"auto"===b){const a=document.body.clientWidth<1600?0:10,r=e.currentTarget.getBoundingClientRect().height,n=A.current.getBoundingClientRect().height;if(r>n+a){const e=Math.max(0,D.current.getBoundingClientRect().height-n);A.current.style.transform=`translateY(${Math.max(0,Math.min(e,t)-a)}px)`}else A.current.style.transform=""}},className:`language-${x.codeName} manager_${M?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:Yo?"-webkit-fill-available":"100vh","--card-height":Cp*m+"px","--card-width":Fp*m+"px","--global-scale":`${m}`,"--cropper-width":"375px"},children:[be&&Object(g.jsx)("link",{rel:"stylesheet",type:"text/css",href:be}),Object(g.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Me&&Object(g.jsx)(pp,{className:"app-loading",children:L.length>0?Object(g.jsx)(hp,{children:L}):null!==(e=x.initialMessage)&&void 0!==e?e:""}),Object(g.jsxs)("div",{ref:D,className:Ko("card-preview-panel",he?"export-tainted":"export-normal",`sliding-type_${b}`),children:[Object(g.jsxs)("div",{ref:A,className:"preview-sliding-window",children:[Object(g.jsxs)(dp,{className:"data-button-panel",children:[Object(g.jsxs)("div",{className:"imexport",children:[Object(g.jsx)(ud,{ref:de,tainted:he,artworkCanvas:W.current,onRequireExportData:we,onRequireDownload:()=>{var e;return null===(e=ce.current)||void 0===e?void 0:e.download()},onClose:$o}),Object(g.jsx)("div",{}),Object(g.jsx)(bd,{ref:ue,onImport:xe,onClose:$o,allowHotkey:d,language:v})]}),Object(g.jsx)(el,{language:v}),Object(g.jsx)(rd,{ref:ce,canvasMap:oe,imageChangeCount:me,isTainted:he,onTainted:Ne,onExportSucess:Ee,isInitializing:k,globalScale:m,onDownloadError:Ce}),he&&Object(g.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(g.jsxs)("div",{className:"alert-label",children:[v["alert.download.tainted-first-line"],Object(g.jsx)("br",{}),v["alert.download.tainted-second-line"]," ",Object(g.jsx)(Qs,{})]}),Object(g.jsx)(al.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(g.jsx)(qc,{onChange:()=>$o()}),children:Object(g.jsxs)(td,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(g.jsx)(rl.a,{className:"resolution-icon"}),Object(g.jsx)("span",{className:"resolution-overlay",children:p[1]})]})})]})]}),Object(g.jsxs)(up,{className:"card-preview-container",children:[Object(g.jsx)(Go.a,{title:v["generic.reset.tooltip"],children:Object(g.jsx)(vp,{className:"reset-button",onClick:()=>{if(window.confirm(v["prompt.reset.message"])){var e;const{setCard:t,card:a}=fn.getState(),r={id:a.id,...ca()},n="tcg"===a.format?r:Rr(r,"ocg");t(n,!0),pe(e=>e+1),null===(e=H.current)||void 0===e||e.forceCardData(n)}},children:Object(g.jsx)(Od.a,{})})}),Object(g.jsx)(Go.a,{title:Object(g.jsxs)("div",{className:"center",children:[v["button.full-size.label"],d?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),"Ctrl+Y / \u2318+Y"]}):null]}),children:Object(g.jsx)(fp,{className:"lightbox-button",onClick:()=>fe(),children:Object(g.jsx)(zc.a,{})})}),Object(g.jsx)("canvas",{id:"debug-canvas",width:Tp*m,height:Lp},m+"scale"),Object(g.jsx)("canvas",{id:"preview-canvas",ref:U,width:Fp,height:Cp},(null!==(t=null===(a=ie.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(g.jsxs)(mp,{className:"card-canvas-group",children:[Object(g.jsx)("canvas",{id:"export-canvas",ref:K,width:Fp*m,height:Cp*m},(null!==(n=null===(i=ie.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==n?n:0)+.1),Object(g.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(g.jsx)("canvas",{id:"frameCanvas",className:`${null!==(s=null===(c=ie.current)||void 0===c?void 0:c.getCanvasKey())&&void 0!==s?s:0}`,ref:G,width:Fp*m,height:Cp*m},`${null!==(o=null===(l=ie.current)||void 0===l?void 0:l.getCanvasKey())&&void 0!==o?o:0} ${F}`),Object(g.jsx)("canvas",{id:"nameCanvas",ref:Q,width:Fp*m,height:148*m}),Object(g.jsx)("canvas",{id:"cardIconCanvas",ref:X,width:Fp*m,height:222*m}),Object(g.jsx)("canvas",{id:"pendulumScaleCanvas",ref:q,width:Fp*m,height:920*m}),Object(g.jsx)("canvas",{id:"pendulumEffectCanvas",ref:V,width:Fp*m,height:920*m}),Object(g.jsx)("canvas",{id:"typeCanvas",ref:_,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"effectCanvas",ref:J,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"statCanvas",ref:Z,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"setIdCanvas",ref:ee,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"passwordCanvas",ref:te,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"creatorCanvas",ref:ae,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"stickerCanvas",ref:re,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{id:"finishCanvas",ref:ne,width:Fp*m,height:Cp*m}),Object(g.jsx)("canvas",{className:"crop-canvas",ref:W}),Object(g.jsx)("canvas",{className:"crop-canvas",ref:B}),Object(g.jsx)("canvas",{className:"crop-canvas",ref:Y}),Object(g.jsx)("canvas",{className:"crop-canvas",ref:$})]})]})]}),w&&Object(g.jsx)(kp.a,{ref:P,target:A,className:"sliding-movable-window",draggable:!0,throttleDrag:1,edgeDraggable:!1,startDragRotate:0,throttleDragRotate:0,throttleScale:0,snappable:!0,pinchable:!0,snapContainer:".card-preview-panel",bounds:{left:0,top:0,right:0,bottom:0,position:"css"},onDrag:e=>{"manual"===b&&(e.target.style.transform=e.transform)}})]}),!1===Me&&Object(g.jsx)(Nm,{ref:H,applyCardData:xe,artworkCanvas:W.current,backgroundCanvas:B.current,overlayCanvas:Y.current,iconImageCanvas:$.current,onSourceLoaded:Fe,onCropChange:Le,onTainted:Ne})]}),Object(g.jsx)(lp,{language:v,onVisibleChange:Re,onSelect:xe,onRequestImport:()=>{var e;null===(e=ue.current)||void 0===e||e.requestImport("new")}}),Object(g.jsx)($c,{ref:ie,globalScale:m}),Object(g.jsxs)(bp,{className:"by-me",children:["Made by Lauqerm ",Object(g.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Np=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,677)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:i,getTTFB:o}=t;a(e),r(e),n(e),i(e),o(e)})};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(Ip,{})}),document.getElementById("root")),Np()}},[[596,1,2]]]);
//# sourceMappingURL=main.5b204785.chunk.js.map
//# debugId=cea41d22-4a5f-5a98-9b27-d9cbf331908c
