
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5e975dc0-f47b-545e-95b6-105cd0af8250")}catch(e){}}();
(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{346:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){},507:function(e,t,a){},590:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},594:function(e,t,a){},596:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(52),o=a.n(i);a(346),a(347),a(348),a(349),a(350),a(351);const l=e=>[{value:"strict",label:null===e||void 0===e?void 0:e.strict},{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:910,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:76,attributeY:55,attributeX:680,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,effectBox:!0,frameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"},fullPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"fullPendulumSmall"},overframeCard:{artFinishX:100,artFinishY:219,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"overframeCard"},overframePendulum:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulum"},overframePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulumSmall"}},m=(e,t,a,r)=>{const n={...d(),...t};"strict"===a&&(n.boundless=!1,n.text=100,n.pendulum=100);const{boundless:i,body:o,pendulum:l,text:s,frameBorder:c}=n,m="fit"!==a&&"strict"!==a&&i,p=!!m&&c;if("full"===a)return p?u.overframeCard:u.fullCard;let b="normal";m||o<100?b=e?p?"small"===r?"overframePendulumSmall":"overframePendulum":"small"===r?"fullPendulumSmall":"fullPendulum":p?"overframeCard":"fullCard":e?s<100?b="small"===r?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===r&&(b="truePendulumLarge"),"small"===r&&(b="truePendulumSmall"),"medium"===r&&(b="truePendulum")):b="small"===r?"pendulumSmall":"pendulum":b=s<100?"extendedCard":"normal";const h=u[b];return{...h,backgroundRatio:"frame"===a?.686:h.backgroundRatio}};var p=a(631),b=a(4),h=a(1);const g=[{blendMode:"overlay",opacity:1}],f=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],v={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":g,"art-overlay":g,"art-border":g,"art-border-pendulum":g,"border-pendulum":g,attribute:g,frame:g},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":f,"art-border":f,"art-border-pendulum":f,"border-pendulum":f,frame:f,"frame-background":f,name:f,star:f},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},y={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},x={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},j=b.b.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: var(--br);
    margin: 7px 0;
`,O={normal:{name:"normal",color:"#747b95",preview:Object(h.jsx)(p.a,{}),isOption:!1},gold:{name:"gold",color:"#cfa65f",preview:Object(h.jsx)(j,{style:{backgroundColor:"#cfa65f"}}),isOption:!0},platinum:{name:"platinum",color:"#b1b1b1",preview:Object(h.jsx)(j,{style:{backgroundColor:"#b1b1b1"}}),isOption:!0},rainbow:{name:"rainbow",color:"#f3a486",preview:Object(h.jsx)(j,{style:{background:"linear-gradient(\n            135deg,\n            rgba(255, 80, 80, 1) 0%,\n            rgba(255, 194, 40, 1) 10%,\n            rgba(248, 255, 73, 1) 30%,\n            rgba(119, 255, 114, 1) 40%,\n            rgba(103, 255, 255, 1) 50%,\n            rgba(87, 241, 255, 1) 70%,\n            rgba(68, 167, 255, 1) 80%,\n            rgba(226, 52, 255, 1) 90%,\n            rgba(255, 80, 80, 1) 100%\n        )"}}),isOption:!0}},w=e=>[{label:null===e||void 0===e?void 0:e.normal,...O.normal},{label:null===e||void 0===e?void 0:e.gold,...O.gold},{label:null===e||void 0===e?void 0:e.platinum,...O.platinum}],k={topLeftFrame:0,topRightFrame:1,bottomLeftFrame:2,bottomRightFrame:3,effectBackground:4,pendulumEffectBackground:5,foil:6};var S=a(632);const C="NONE",F=[{name:C,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0}],L=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0}],T=L.reduce((e,t)=>{const{name:a}=t;return e[a]=t,e},{}),N={pt:{TRAP:{offsetX:-11}},it:{TRAP:{offsetX:-4}}},I={jp:{key:"jp",category:"ocg",fileKey:"ocg"},en:{key:"en",category:"tcg",fileKey:"tcg"},ch:{key:"ch",category:"ocg",fileKey:"ch"},de:{key:"de",category:"tcg",fileKey:"de"},fr:{key:"fr",category:"tcg",fileKey:"fr"},it:{key:"it",category:"tcg",fileKey:"it"},pt:{key:"pt",category:"tcg",fileKey:"pt"},sp:{key:"sp",category:"tcg",fileKey:"sp"}},R={tcg:I.en.key,ocg:I.jp.key},E="NO ICON",M=[{label:Object(h.jsx)(p.a,{}),value:E,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0},{label:"Normal",value:"NORMAL",nameKey:"input.icon.normal",isOption:!0}],z="no-sticker",P=[{value:z,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],A={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},custom:{value:"custom",labelKey:"input.icon-type.custom.label",fullLabelKey:"input.icon-type.custom.full.label",icon:Object(h.jsx)(S.a,{}),isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-icon-list.png"}),isOption:!0,isMixable:!1,showIcon:!1,imagePresetPath:"icon-st",imagePresetSource:"subfamily/subfamily-icon-list.png"},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level",imagePresetSource:"subfamily/subfamily-level.png"},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-negative-level",imagePresetSource:"subfamily/subfamily-negative-level.png"},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-rank",imagePresetSource:"subfamily/subfamily-rank.png"},"level-rank":{value:"level-rank",labelKey:"input.icon-type.level-rank.label",fullLabelKey:"input.icon-type.level-rank.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"level-rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level-rank",imagePresetSource:"subfamily/subfamily-level-rank.png"},grade:{value:"grade",labelKey:"input.icon-type.grade.label",fullLabelKey:"input.icon-type.grade.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"grade-icon",src:"/ygocarder/asset/image/subfamily/subfamily-grade.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-grade",imagePresetSource:"subfamily/subfamily-grade.png"}},D=Object.values(A),H={dark:{value:"dark",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.dark",icon:Object(h.jsx)("img",{className:"icon-image",alt:"dark-icon",src:"/ygocarder/asset/image/subfamily/subfamily-dark.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-dark",imagePresetSource:"subfamily/subfamily-dark.png"},earth:{value:"earth",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.earth",icon:Object(h.jsx)("img",{className:"icon-image",alt:"earth-icon",src:"/ygocarder/asset/image/subfamily/subfamily-earth.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-earth",imagePresetSource:"subfamily/subfamily-earth.png"},fire:{value:"fire",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.fire",icon:Object(h.jsx)("img",{className:"icon-image",alt:"fire-icon",src:"/ygocarder/asset/image/subfamily/subfamily-fire.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-fire",imagePresetSource:"subfamily/subfamily-fire.png"},light:{value:"light",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.light",icon:Object(h.jsx)("img",{className:"icon-image",alt:"light-icon",src:"/ygocarder/asset/image/subfamily/subfamily-light.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-light",imagePresetSource:"subfamily/subfamily-light.png"},water:{value:"water",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.water",icon:Object(h.jsx)("img",{className:"icon-image",alt:"water-icon",src:"/ygocarder/asset/image/subfamily/subfamily-water.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-water",imagePresetSource:"subfamily/subfamily-water.png"},wind:{value:"wind",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.wind",icon:Object(h.jsx)("img",{className:"icon-image",alt:"wind-icon",src:"/ygocarder/asset/image/subfamily/subfamily-wind.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-wind",imagePresetSource:"subfamily/subfamily-wind.png"},divine:{value:"divine",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.divine",icon:Object(h.jsx)("img",{className:"icon-image",alt:"divine-icon",src:"/ygocarder/asset/image/subfamily/subfamily-divine.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-divine",imagePresetSource:"subfamily/subfamily-divine.png"},spell:{value:"spell",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.spell",icon:Object(h.jsx)("img",{className:"icon-image",alt:"spell-icon",src:"/ygocarder/asset/image/subfamily/subfamily-spell.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-spell",imagePresetSource:"subfamily/subfamily-spell.png"},trap:{value:"trap",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.trap",icon:Object(h.jsx)("img",{className:"icon-image",alt:"trap-icon",src:"/ygocarder/asset/image/subfamily/subfamily-trap.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-trap",imagePresetSource:"subfamily/subfamily-trap.png"}},B=Object.values(H),W={"continuous-l":{value:"continuous-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.continuous",icon:Object(h.jsx)("img",{className:"icon-image",alt:"continuous-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-continuous",imagePresetSource:"subfamily/subfamily-continuous-l.png"},"counter-l":{value:"counter-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.counter",icon:Object(h.jsx)("img",{className:"icon-image",alt:"counter-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-counter-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-counter",imagePresetSource:"subfamily/subfamily-counter-l.png"},"equip-l":{value:"equip-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.equip",icon:Object(h.jsx)("img",{className:"icon-image",alt:"equip-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-equip-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-equip",imagePresetSource:"subfamily/subfamily-equip-l.png"},"field-l":{value:"field-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.field",icon:Object(h.jsx)("img",{className:"icon-image",alt:"field-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-field-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-field",imagePresetSource:"subfamily/subfamily-field-l.png"},"quick-play-l":{value:"quick-play-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.quick-play",icon:Object(h.jsx)("img",{className:"icon-image",alt:"quick-play-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-quick-play-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-quick-play",imagePresetSource:"subfamily/subfamily-quick-play-l.png"},"ritual-l":{value:"ritual-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.ritual",icon:Object(h.jsx)("img",{className:"icon-image",alt:"ritual-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-ritual-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-ritual",imagePresetSource:"subfamily/subfamily-ritual-l.png"},"normal-l":{value:"normal-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.normal",icon:Object(h.jsx)("img",{className:"icon-image",alt:"normal-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-normal-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-normal",imagePresetSource:"subfamily/subfamily-normal-l.png"}},$=Object.values(W),Y={rank:"rank",ritual:"ritual","ritual-l":"ritual-l",spell:"spell",trap:"trap",water:"water",wind:"wind",continuous:"continuous","continuous-l":"continuous-l",counter:"counter","counter-l":"counter-l",dark:"dark",divine:"divine",earth:"earth",equip:"equip","equip-l":"equip-l",field:"field","field-l":"field-l",fire:"fire",glow:"glow",grade:"grade","icon-list":"icon-list",level:"level","level-rank":"level-rank",light:"light","negative-level":"negative-level",normal:"normal","normal-l":"normal-l","quick-play":"quick-play","quick-play-l.png":"quick-play-l.png"},K={...A,...H,...W},U=13,G={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},X={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},q={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextGapRatio:0,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,vietnameseFont:"Times New Roman",vietnameseFontRatio:1.1,letterOffsetMap:{"\u2605":{ratio:.9,baseline:-.05,yRatio:1},"\u2606":{ratio:.9,baseline:-.05,yRatio:1},"\xa1":{ratio:1.2,baseline:-0,yRatio:1.05}}},V={...q,font:"MatrixBook, Times New Roman",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[],variant:"default-tcg"},_={...q,font:'"StoneSerif-Italic", "SVN-Times New Roman Italic"',vietnameseFont:'"SVN-Times New Roman Italic"',headTextHeightRatio:.75,fontStyle:"tcg",vietnameseFontRatio:1.08,fontList:[],variant:"default-tcg-normal"},J={...q,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[],variant:"default-ocg"},Q={tcg:{..._,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{..._,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{..._,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{..._,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{..._,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{..._,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{..._,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{..._,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},Z={tcg:{...V,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...V,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...V,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...V,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...V,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...V,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...V,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...V,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...J,variant:"ocg",fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...J,variant:"ocg-stat",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...J,variant:"ocg-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...J,variant:"ocg-type",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...J,variant:"ocg-pendulumLarge",fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...J,variant:"ocg-pendulumLarge-stat",fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...J,variant:"ocg-pendulumLarge-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...J,variant:"ocg-pendulumLarge-type",fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},ee={tcg:{default:1.5,pt:2.825},ocg:{default:3.65}},te="#010101",ae="Auto",re=()=>({font:ae,fillStyle:te,headTextFillStyle:te,shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"}),ne=()=>[!1,te,!1,"#000000"],ie=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",font:ae,...e}),oe={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:ie({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:ie({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:ie({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:ie({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:ie({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:ie({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:ie({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:ie({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:ie({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:ie({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:ie({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:ie({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:ie({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:ie({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:ie({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:ie({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:ie({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:ie({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})},rainbowSecretRare:{key:"rainbowSecretRare",label:"Rainbow Secret Rare",image:"asset/image/other/name-rainbow-secret-rare.png",value:ie({hasOutline:!0,headTextFillStyle:"#000000",lineColor:"#333333",lineOffsetX:0,lineOffsetY:0,lineWidth:6,pattern:"type2",preset:"rainbowSecretRare"})}},le=Object.values(oe),se={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},ce=Object.values(se);var de=a(622);const ue={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:49,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:792,artlessFrameY:553,fontSize:56.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:808,artlessFrameY:553,fontSize:56.5}},me=Object.values(ue),pe={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},be="medium",he=[{index:0,labelKey:"input.flag.mix-def-link",type:"checkbox",order:0},{index:1,labelKey:"input.flag.link-rating-behavior",type:"link-rating-behavior",order:2},{index:2,labelKey:"input.flag.hide-deactivated-link",type:"checkbox",order:1}],ge=0,fe=1,ve=he.length,ye=()=>({enabled:!1,effect:"",blue:"0",red:"0",boxSize:"Normal",boxSizeEnabled:!0}),xe={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},je={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:65,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:65,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:65,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:65,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:951.5,trueEdge:65,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:65,trueHeightCap:144}]},Oe=64.44,we={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:129,trueHeightCap:80}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:122.6}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:155.8}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5,trueHeightCap:79.8}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:126.1}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:155.5}]}},ke={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},Se={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},Ce={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},Fe=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u53d6\u308a\u9664\u304d",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304d"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u540c\u4e00",rubyForm:"{\u540c|\u3069\u3046}{\u4e00|\u3044\u3064}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],Le=Fe.reduce((e,t)=>(e[t.shortForm]=t,e),{}),Te={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps, Times New Roman",font:"MatrixRegularSmallCaps, Times New Roman",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.55,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix, Times New Roman",symbolFontRatio:.775,vietnameseFont:"MatrixRegularSmallCaps",vietnameseFontRatio:1,arabicFontRatio:.75,variant:"default-name",fontList:[{bulletWidth:64,fontSize:91,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91,offsetY:0}],letterOffsetMap:{"\u2605":{ratio:.55,baseline:-.05,yRatio:1},"\u2606":{ratio:.55,baseline:-.05,yRatio:1},"\xa1":{ratio:1,baseline:-.098,edge:.02,yRatio:.58}},letterDeviationMap:{default:{threshold:0,letterMap:{0:{baseLetter:"0"},1:{baseLetter:"1"},2:{baseLetter:"2"},C:{baseLetter:"C"},"\u0106":{baseLetter:"C"},"\u0108":{baseLetter:"C"},"\u010c":{baseLetter:"C"},"\u010a":{baseLetter:"C"},"\u1e08":{baseLetter:"C"},"\u0187":{baseLetter:"C"},"C\u0308":{baseLetter:"C"},"\u023b\u0308":{baseLetter:"C"},"\xc7\u0308":{baseLetter:"C"},"\u0107\u0308":{baseLetter:"c"},"\u0109\u0308":{baseLetter:"c"},"\u010d\u0308":{baseLetter:"c"},"\u010b\u0308":{baseLetter:"c"},"\u1e09\u0308":{baseLetter:"c"},"\u0188\u0308":{baseLetter:"c"},"c\u0308\u0308":{baseLetter:"c"},"\u023c\u0308":{baseLetter:"c"},"\xe7\u0308":{baseLetter:"c"},Q:{baseLetter:"Q"},"\u024a":{baseLetter:"Q"},q:{baseLetter:"q"},"\u02a0":{baseLetter:"q"},"\u024b":{baseLetter:"q"},"q\u0303":{baseLetter:"q"},o:{baseLetter:"o"},"\xf8":{baseLetter:"o"},"\u01ff":{baseLetter:"o"},"\xf6":{baseLetter:"o"},"\u022b":{baseLetter:"o"},"\xf3":{baseLetter:"o"},"\xf4":{baseLetter:"o"},"\u1ed1":{baseLetter:"o"},"\u1ed5":{baseLetter:"o"},"\u1ed7":{baseLetter:"o"},"\u01eb":{baseLetter:"o"},"\u020d":{baseLetter:"o"},"o\u0329":{baseLetter:"o"},"\xf3\u0329":{baseLetter:"o"},"\xf2\u0329":{baseLetter:"o"},"\u1ed9":{baseLetter:"o"},"\u01d2":{baseLetter:"o"},"\u1e53":{baseLetter:"o"},"\u1e51":{baseLetter:"o"},"\u1ecf":{baseLetter:"o"},"\u014d":{baseLetter:"o"},"\u1e4f":{baseLetter:"o"},"\xf5":{baseLetter:"o"},"\u1e4d":{baseLetter:"o"},"\u0151":{baseLetter:"o"},"\u014f":{baseLetter:"o"},"\u020f":{baseLetter:"o"},"\u022f":{baseLetter:"o"},"\u0231":{baseLetter:"o"},"\u01a1":{baseLetter:"o"},"\u1ecd":{baseLetter:"o"},"\u1ed3":{baseLetter:"o"},"\xf2":{baseLetter:"o"},"\u019f":{baseLetter:"o"},"\u0275":{baseLetter:"o"},"\u1ee1":{baseLetter:"o"},"\u1edb":{baseLetter:"o"},"\u1edd":{baseLetter:"o"},"\u1edf":{baseLetter:"o"},"\u022d":{baseLetter:"o"},"\u1ee3":{baseLetter:"o"},"\u01ed":{baseLetter:"o"},O:{baseLetter:"O"},"\xd8":{baseLetter:"O"},"\u01fe":{baseLetter:"O"},"\xd6":{baseLetter:"O"},"\u022a":{baseLetter:"O"},"\xd3":{baseLetter:"O"},"\xd2":{baseLetter:"O"},"\xd4":{baseLetter:"O"},"\u1ed0":{baseLetter:"O"},"\u1ed2":{baseLetter:"O"},"\u1ed4":{baseLetter:"O"},"\u1ed6":{baseLetter:"O"},"\u1ed8":{baseLetter:"O"},"\u01d1":{baseLetter:"O"},"\u0150":{baseLetter:"O"},"\u014e":{baseLetter:"O"},"\u020e":{baseLetter:"O"},"\u022e":{baseLetter:"O"},"\u0230":{baseLetter:"O"},"\u1ecc":{baseLetter:"O"},"\u01a0":{baseLetter:"O"},"\u1eda":{baseLetter:"O"},"\u1edc":{baseLetter:"O"},"\u1ee0":{baseLetter:"O"},"\u1ee2":{baseLetter:"O"},"\u1ede":{baseLetter:"O"},"\u1ece":{baseLetter:"O"},"\u014c":{baseLetter:"O"},"\u1e52":{baseLetter:"O"},"\u1e50":{baseLetter:"O"},"\xd5":{baseLetter:"O"},"\u022c":{baseLetter:"O"},"\u1e4c":{baseLetter:"O"},"\u1e4e":{baseLetter:"O"},"\u01ea":{baseLetter:"O"},"\u020c":{baseLetter:"O"},"O\u0329":{baseLetter:"O"},"\xd3\u0329":{baseLetter:"O"},"\xd2\u0329":{baseLetter:"O"},"\u01ec":{baseLetter:"O"},I:{baseLetter:"I"},i:{baseLetter:"i"},"\xcc":{baseLetter:"I"},"\xcd":{baseLetter:"I"},"\xce":{baseLetter:"I"},"\xcf":{baseLetter:"I"},"\xec":{baseLetter:"i"},"\xed":{baseLetter:"i"},"\xee":{baseLetter:"i"},"\xef":{baseLetter:"i"},"\u0128":{baseLetter:"I"},"\u0129":{baseLetter:"i"},"\u012a":{baseLetter:"I"},"\u012b":{baseLetter:"i"},"\u1ec8":{baseLetter:"I"},"\u1ec9":{baseLetter:"i"},"\u1eca":{baseLetter:"I"},"\u1ecb":{baseLetter:"i"},E:{baseLetter:"E"},e:{baseLetter:"e"},"\xc8":{baseLetter:"E"},"\xc9":{baseLetter:"E"},"\xca":{baseLetter:"E"},"\xca\u0304":{baseLetter:"E"},"\xca\u030c":{baseLetter:"E"},"\xcb":{baseLetter:"E"},"\xe8":{baseLetter:"e"},"\xe9":{baseLetter:"e"},"\xea":{baseLetter:"e"},"\xea\u0304":{baseLetter:"e"},"\xea\u030c":{baseLetter:"e"},"\xeb":{baseLetter:"e"},"\u0112":{baseLetter:"E"},"\u0113":{baseLetter:"e"},"\u1eba":{baseLetter:"E"},"\u1ebb":{baseLetter:"e"},"\u1ebc":{baseLetter:"E"},"\u1ebd":{baseLetter:"e"},"\u1ebe":{baseLetter:"E"},"\u1ebf":{baseLetter:"e"},"\u1ec0":{baseLetter:"E"},"\u1ec1":{baseLetter:"e"},"\u1ec2":{baseLetter:"E"},"\u1ec3":{baseLetter:"e"},"\u1ec4":{baseLetter:"E"},"\u1ec5":{baseLetter:"e"},"E\u0329":{baseLetter:"E"},"e\u0329":{baseLetter:"e"},"\xc8\u0329":{baseLetter:"E"},"\xc9\u0329":{baseLetter:"E"},"\xe8\u0329":{baseLetter:"e"},"\u1eb8":{baseLetter:"E"},"\u1eb9":{baseLetter:"e"},"\u1ec6":{baseLetter:"E"},"\u1ec7":{baseLetter:"e"},N:{baseLetter:"N"},"\u0143":{baseLetter:"N"},"\xd1":{baseLetter:"N"},"\u0147":{baseLetter:"N"},"\u01f8":{baseLetter:"N"},"\u1e44":{baseLetter:"N"},"\u1e46":{baseLetter:"N"},"\u0145":{baseLetter:"N"},"\u1e48":{baseLetter:"N"},"\u1e4a":{baseLetter:"N"},"\ua7a4":{baseLetter:"N"},n:{baseLetter:"n"},"\u0144":{baseLetter:"n"},"\xf1":{baseLetter:"n"},"\u0148":{baseLetter:"n"},"\u01f9":{baseLetter:"n"},"\u1e45":{baseLetter:"n"},"\u1e47":{baseLetter:"n"},"\u0146":{baseLetter:"n"},"\u1e49":{baseLetter:"n"},"\u1e4b":{baseLetter:"n"},"\ua7a5":{baseLetter:"n"},"\u1d70":{baseLetter:"n"},"\u1d87":{baseLetter:"n"},G:{baseLetter:"G"}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.825,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:"Arial",vietnameseFontRatio:1,weight:"bold",variant:"arial-name",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextBold:!0,headTextHeightRatio:.775,headTextOverflow:"condense",metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:'"Yu-Gi-Oh! DF Leisho 3"',vietnameseFontRatio:1,variant:"ocg-name",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},Ne={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",variant:"ocg-creator",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},Ie={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",variant:"ocg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},Re={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-type-ability",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4,fontLetterOffsetMap:{}}]},Ee={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",variant:"ocg-type-ability",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},Me={"tcg-small":{..._,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{..._,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{..._,variant:"tcg-large",fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},ze={"tcg-small":{...V,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...V,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...V,variant:"tcg-large",fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...J,variant:"ocg-small",fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...J,variant:"ocg-medium",fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...J,variant:"ocg-large",fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},Pe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\xd8":"\u2205"},Ae={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\u2205":"\xd8"},De={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},He={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},Be=[{label:"1st Edition",value:"1<st> Edition"},{label:"1\xe8re \xc9dition",value:"1<\xe8re> \xc9dition"},{label:"1\u2006. Auflage",value:"1\u2006. Auflage"},{label:"1\xaa Edizione",value:"1\xaa Edizione"},{label:"1\xaa Edi\xe7\xe3o",value:"1\xaa Edi\xe7\xe3o"},{label:"1\xaa Edici\xf3n",value:"1\xaa Edici\xf3n"}],We={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},$e={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[He.ocg[2]]:He.tcg[2],[He.ocg[1]]:He.tcg[1],[He.ocg[0]]:He.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[We.ocg]:We.tcg},Ye=Object.entries($e).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),Ke={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100,isOfficial:!0},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90,isOfficial:!0},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85,isOfficial:!0},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80,isOfficial:!0},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70,isOfficial:!0},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60,isOfficial:!0},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50,isOfficial:!0},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30,isOfficial:!0},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25,isOfficial:!0},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#666c74",sortWeight:1,isOfficial:!0},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15,isOfficial:!0},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10,isOfficial:!0},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9,isOfficial:!0},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8,isOfficial:!0},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7,isOfficial:!0},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6,isOfficial:!0},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5,isOfficial:!0},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3,isOfficial:!0},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2,isOfficial:!0},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4,isOfficial:!0},rebirth:{name:"rebirth",nameKey:"input.frame.rebirth",labelColor:"#000000",edition:"fanmade",labelBackgroundColor:"#ff9e03",sortWeight:100,isOfficial:!1}},Ue=Object.values(Ke),Ge=Ke.effect,Xe={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"},foil:{labelKey:"input.foil.label"}},qe={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},Ve=[-45,0,45,-90,0,90,-135,180,135],_e=[-38,-28,-38,-28,0,-28,-38,-28,-38],Je=[-30,-23,-30,-28,0,-28,-30,-23,-30],Qe=[0,0,0,0,0,0,0,0,0],Ze=[-5,0,5,0,0,0,5,0,-5],et=Object.values({...A,...H,...W}).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),tt=Object.values(I).map(e=>{const t=e.fileKey,a=["ocg","tcg"].includes(t);return[...[...F].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}}),...[...a?L:[]].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}})]}),at={...tt.flatMap(e=>e).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),...et},rt=new RegExp("[A-Z\uff21-\uff3a\xc0-\xd6]"),nt=new RegExp("[\\[\\]\u3010\u3011]"),it=`<(\\/?(${["i","b","pre"].join("|")}))( [^<]*|)>`,ot=(new RegExp(it),"img"),lt=`<(${[ot].join("|")}).*?\\/>`,st=(new RegExp(lt),"</i>"),ct="</b>",dt="<pre>",ut="</pre>",mt="\u29da",pt="\u29db",bt="\u27c5",ht="\u27c6",gt="\u169b",ft="\u169c",vt="\u27ec",yt="\u27ed",xt="\u2987",jt="\u2988",Ot=new RegExp(`[${[ft,gt,ht,bt,yt,vt,pt,mt].join("")}]|(\\|[^}]+})`,"g"),wt=new RegExp(`${xt}[^${xt}${jt}]*${jt}$`),kt="[\u060c-\u0669#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19\xc0-\xd6\xd9-\xf6\xf9-\xff\u0100-\u017e\u0180-\u024f\u1e00-\u1eff!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",St=new RegExp(kt,"u"),Ct=new RegExp("[\u060c-\u0669]+","u"),Ft=new RegExp("[\u0102\u0110\u01a0\u0103\u0111\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]"),Lt=new RegExp(`(\\{[^\\{\\}]+?\\}|${kt}|${xt}[^${xt}${jt}]*${jt}|.)`,"u"),Tt="\u2e26\u2e27",Nt="\u2e26\u2e26\u2e27\u2e27",It=new RegExp(`(^|[-\\u2014/[(\\u2018${mt}${bt}${gt}${vt}\\s])"`,"g"),Rt=`${mt}|${pt}`,Et=new RegExp(Rt),Mt=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${mt}?(\\(|\\*)[\\w\\W]+${pt}?)\\s*$`,zt=new RegExp("[\uff0b\uff0d\xb1~\xa1\xd8#\u2605\u2606@\u221e\u0370-\u03ff\u1f00-\u1ffe]"),Pt=`(${Fe.map(e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm}).join("|")})(?![^{]*})`,At="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Dt=new RegExp(`[${At}]`),Ht=`.[${At})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,Bt=new RegExp("[\u2460-\u2473\u203b]"),Wt=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),$t=new RegExp("[\uff10-\uff19]"),Yt=new RegExp("[0-9]"),Kt=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,Ut=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Gt=new RegExp("[\u30fb]"),Xt=new RegExp("[\u30fc]"),qt=new RegExp("[\u2015]"),Vt=new RegExp("[\uff1a]"),_t=new RegExp("[\u3002\uff64]"),Jt=new RegExp("[\uff1a]"),Qt={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},Zt={"\u3002":-.5,"\uff1a":-.25},ea={">":.125,"<":.125},ta={},aa={},ra={},na=e=>"tcg"===e?7:1,ia=/{[^{}]+?}/,oa="\\s\\-/",la=-2.25,sa=()=>({version:2,format:"tcg",region:"en",frame:"fusion",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:re(),attribute:"LIGHT",attributeType:"auto",subFamily:E,cardIcon:"auto",star:6,starAlignment:"auto",starList:[],art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artStyle:{flipX:!1,flipY:!1},artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},overlay:"",overlayData:"",overlayFit:!0,overlayStyle:{flipX:!1,flipY:!1},overlaySource:"online",overlayCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:.686},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:be,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",firstEditionText:"1<st> Edition",isFirstEdition:!0,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:ne(),typeTextStyle:ne(),effectTextStyle:ne(),pendulumTextStyle:ne(),otherTextStyle:ne(),flag:[0,0,0],dyeList:["","","","","","",""],externalInfo:{}}),ca=()=>({id:Object(de.a)(),...sa()}),da=()=>({version:3,format:"tcg",region:"en",frame:"effect",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:re(),attribute:C,attributeType:"auto",subFamily:E,cardIcon:"auto",star:6,starList:[],starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artStyle:{flipX:!1,flipY:!1},artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},overlay:"",overlayData:"",overlayFit:!0,overlayStyle:{flipX:!1,flipY:!1},overlaySource:"online",overlayCrop:{x:0,y:0,width:100,height:100,unit:"%",aspect:.686},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:be,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:z,firstEditionText:"1<st> Edition",isFirstEdition:!1,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:ne(),typeTextStyle:ne(),effectTextStyle:ne(),pendulumTextStyle:ne(),otherTextStyle:ne(),dyeList:["","","","","","",""],flag:[0,0,0],externalInfo:{}}),ua=[{subType:"artBorder",labelKey:"input.opacity.art-border.label",tooltipKey:"input.opacity.art-border.tooltip"},{subType:"nameBorder",labelKey:"input.opacity.name-border.label",tooltipKey:"input.opacity.name-border.tooltip"},{subType:"effectBox",labelKey:"input.opacity.effect-box.label",tooltipKey:"input.opacity.effect-box.tooltip"}],ma=[{type:"body",label:"Card",labelKey:"input.opacity.body.label"},{type:"name",label:"Name",labelKey:"input.opacity.name.label"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label"},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label"}],pa=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF",te,"#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],ba={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},ha=[ba["549x800"],ba["561x818"],ba["813x1185"],ba["1122x1636"],ba["1388x2026"],ba["1626x2370"]],ga=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],fa=e=>[{value:"auto",label:e["setting.option.sliding-type.auto.label"]},{value:"manual",label:e["setting.option.sliding-type.manual.label"]}],{width:va,height:ya}=s,xa=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:va,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ya;const a=document.createElement("canvas");a.width=e,a.height=t;const r=a.getContext("2d");return{canvas:a,ctx:r}};var ja=a(161),Oa=a.n(ja),wa=a(241),ka=a.n(wa),Sa=a(111),Ca=a.n(Sa),Fa=a(297),La=a.n(Fa),Ta=a(298),Na=a.n(Ta),Ia=a(299),Ra=a.n(Ia),Ea=a(300),Ma=a.n(Ea);function za(e,t){var a,r,n,i,o,l,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,p=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],p+=c[a],m=Math.max(m,c[a]);var b=Ca.a.mallocDouble(u),h=Oa()(b,c.slice(0),d.slice(0),0),g=Ca.a.mallocUint32(m),f=Ca.a.mallocUint32(m),v=Ca.a.mallocDouble(u),y=Oa()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:p);for(function(e,t,a){var r,n,i,o=0,l=Math.min;for(r=0;r<t;++r){for(i=e[o++],n=1;n<a;++n)i=l(e[o],i+1),e[o++]=i;for(n=0;n<a;++n)i=l(e[--o],i+1),e[o]=i;o+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(i=h.stride,n=1,r=a-1;r<s;++r)i[r]=n,n*=c[r];for(r=a-2;r>=0;--r)i[r]=n,n*=c[r];if(ka.a.assign(h,y),l=c[a-1],isFinite(t))if(1===t)La()(h.data,u/l|0,0|l,g,f);else if(2===t)Na()(h.data,u/l|0,0|l,g,f);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");Ma()(h.data,u/l|0,0|l,g,f,t)}else Ra()(h.data,u/l|0,0|l,g,f);o=y,y=h,h=o}return ka.a.assign(e,y),Ca.a.freeDouble(v),Ca.a.freeDouble(b),Ca.a.freeUint32(g),Ca.a.freeUint32(f),e}const{width:Pa,height:Aa}=s,Da=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Pa,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Aa,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!jo.test(t))return{canvas:e,ctx:e.getContext("2d")};const{ctx:i,canvas:o}=xa(a,r);return i?(i.filter=["grayscale(1)",n].join(" "),i.drawImage(e,0,0),i.filter="none",i.fillStyle=t,i.globalCompositeOperation="overlay",i.fillRect(0,0,Pa,Aa),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),i.globalCompositeOperation="source-over",{canvas:o,ctx:o.getContext("2d")}):{canvas:e,ctx:e.getContext("2d")}};var Ha=a(39),Ba=a(335),Wa=a(301),$a=a(145);const Ya={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ka={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ua={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},Ga="sobel",Xa=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:Ga});class qa{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...Xa(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:i,invertedGreen:o,invertedSource:l,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(i),this.invertGreen(o),this.invertSource(l),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new Ha.h(-.5,.5,.5,-.5,0,1),t=new Ha.k,a=new Wa.a(t,e);this.renderer=new Ha.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=Ha.n.clone(Ua.uniforms),this.material=new Ha.l({fragmentShader:Ua.fragmentShader,vertexShader:Ua.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new Ha.i(1,1,1,1),n=new Ha.f(r,this.material);t.add(n),this.gaussianShaderY=new $a.a(Ka),this.gaussianShaderX=new $a.a(Ya),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new Ba.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new Ha.p(e,t,{minFilter:Ha.g,magFilter:Ha.g,format:Ha.j,stencilBuffer:!1})}getTexture(e){const t=new Ha.m(e);return t.wrapS=t.wrapT=Ha.b,t.minFilter=t.magFilter=Ha.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const Va=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),i=Math.sin(a)*Math.cos(r),o=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*i)/100,Math.round(100*o)/100]},_a=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:i=[255,255,255],lightAngleVec:o,lightPitch:l,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,p=null!==r&&void 0!==r?r:t.width,b=u.getImageData(0,0,p,m,{willReadFrequently:!0}).data,h=o||("number"===typeof l&&"number"===typeof s?Va(l,s):[1,0,0]),g=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),f=[h[0]/g,h[1]/g,h[2]/g];if(b)try{var v;const e=new Uint8ClampedArray(p*m);for(let n=0;n<b.length;n+=4)b[n]||b[n+1]||b[n+2]||b[n+3]?e[n/4]=0:e[n/4]=1;const t=za(Oa()(e,[m,p])),a=t.shape[0],r=t.shape[1],o=new Uint8ClampedArray(p*m*4),l=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*p+e),r=t.get(n,e);o[a]=r*l,o[a+1]=r*l,o[a+2]=r*l,o[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=p,s.height=m,null===(v=s.getContext("2d"))||void 0===v||v.putImageData(new ImageData(o,p,m),0,0);const u=document.createElement("canvas");u.width=p,u.height=m;new qa(Xa(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:Ga});const h=document.createElement("canvas");h.width=p,h.height=m;const g=h.getContext("2d");if(null===g||void 0===g||g.drawImage(u,0,0,p,m),!g)throw new Error("Could not soften normal map");const y=((e,t,a,r,n,i)=>{const o=new Uint8ClampedArray(t*a*4),l=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*i**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,i=0,u=0,m=0;for(let o=-l;o<=l;o++)for(let p=-l;p<=l;p++){const l=r+p,b=d+o;if(l>=0&&b>=0&&l<t&&b<a){const a=4*(d*t+r),o=4*(b*t+l),p=e[a],h=e[a+1],g=e[a+2],f=e[o],v=e[o+1],y=e[o+2],x=s(l,b,r,d)*c(p,f)*c(h,v)*c(g,y);n+=f*x,i+=v*x,u+=y*x,m+=x}}const p=4*(d*t+r);o[p]=n/m,o[p+1]=i/m,o[p+2]=u/m,o[p+3]=e[p+3]}return o})(g.getImageData(0,0,p,m).data,p,m,9,70,20),x=new Uint8ClampedArray(p*m*4);for(let n=0;n<b.length;n+=4){let e=y[n]/127.5-1,t=y[n+1]/127.5-1,a=y[n+2]/127.5-1;const r=(e*f[0]+t*f[1]+a*f[2])/2*(Math.abs(c)+Math.abs(d)),o=Math.max(c,Math.min(r,d));x[n]=Math.round(b[n]+i[0]*o),x[n+1]=Math.round(b[n+1]+i[1]*o),x[n+2]=Math.round(b[n+2]+i[2]*o),x[n+3]=b[n+3]}return new ImageData(x,p,m)}catch(y){return console.error("Could not apply emboss effect",y),null}},Ja=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(r=>{setTimeout(()=>{if(e.current&&t)try{e.current.toBlob(e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r({status:"success"})},e.onerror=e=>{URL.revokeObjectURL(a),r({status:"error",data:e})}}else r({status:"error",data:new Error("Empty layer")})}else r({status:"error",data:new Error("No layer blob")})})}catch(a){t.drawImage(e.current,0,0),console.error("generateLayer",e.current.id,a),r({status:"error",data:a})}else r({status:"error",data:new Error("No export canvas")})},25*a)})},Qa=e=>"speed-skill"===e.frame&&!Za(e),Za=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,er=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"rebirth"===e?"grade":"level",tr=e=>!Za({frame:e})||rr(e),ar=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),rr=e=>["link"].includes(e)||ar(e),nr=(e,t)=>{let a=!1;switch(e){case 1:a=!0;break;case 2:a=!1;break;case 0:a=null!==t&&void 0!==t&&t}return a},ir=(e,t)=>{var a,r,n,i,o,l;const{frame:s,topLeftFrame:c,topRightFrame:d,bottomLeftFrame:u,bottomRightFrame:m,effectBackground:p,pendulumEffectBackground:b}=e,h=null!==s&&void 0!==s?s:"effect",g=null!==(a="auto"===c?h:c)&&void 0!==a?a:h,f=null!==(n="auto"===u?t?"spell":g:u)&&void 0!==n?n:h;return{topLeftFrame:g,topRightFrame:null!==(r="auto"===d?g:d)&&void 0!==r?r:h,bottomLeftFrame:f,bottomRightFrame:null!==(i="auto"===m?f:m)&&void 0!==i?i:h,effectBackground:null!==(o="auto"===p?f:p)&&void 0!==o?o:h,pendulumEffectBackground:null!==(l="auto"===b?f:b)&&void 0!==l?l:h}},or=e=>{var t,a;let{format:r,frame:n,nameStyle:i,nameStyleType:o,foil:l}=e;const s=Qa({frame:n});let c="auto"===o?ae:i.font;if(c===ae&&"ocg"===r&&(c="OCG"),c===ae&&"tcg"===r&&(c="Default"),c===ae&&s&&"tcg"===r&&(c="Arial"),"custom"===o)return{...i,font:c};const d=tr(n);let u={fillStyle:d?"#ffffff":te,headTextFillStyle:d?"#ffffff":te};if("predefined"===o){var m;const e={...oe[null!==(m=i.preset)&&void 0!==m?m:"commonB"].value};return{...u,...e,font:e.font===ae?c:e.font}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const b="normal"!==l&&null!==(t=null===(a=oe[l])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===n?oe.animeGold.value:{};return{font:c,...u,...p,...b,...h}};var lr=a(630),sr=a(617);const cr=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return dr(e,0)},dr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),e=>e===t[0]?t[1]:t[0]);if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},ur={version:"ve",format:"fm",region:"rg",legacyTemplate:"lt",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artBorder:"opab",effectBox:"opeb",frameBorder:"opfb",nameBorder:"opnb",baseFill:"opbf",artFrame:"opaf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artStyle:{_newKey:"ast",flipX:"asfx",flipY:"asfy"},artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundStyle:{_newKey:"bst",flipX:"bsfx",flipY:"bsfy"},backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},overlay:"ovg",overlayFit:"ovf",overlayStyle:{_newKey:"ovst",flipX:"ovsfx",flipY:"ovsfy"},overlayData:"ovgd",overlaySource:"ovgs",overlayCrop:{_newKey:"ovgc",x:"ovgx",y:"ovgy",width:"ovgw",height:"ovgh",unit:"ovgu",aspect:"ovga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg",minLine:"eml",justifyRatio:"ejr"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg",minLine:"pml",justifyRatio:"pjr"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",attributeType:"att",subFamily:"sf",starList:"stl",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",firstEditionText:"fe",isFirstEdition:"ife",cornerText:"act",hasCornerText:"hct",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",dyeList:"dl",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},mr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ur;const a={},r={...e};return Object.keys(r).forEach(e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var i;const r=null===(i=t[e])||void 0===i?void 0:i._newKey;r&&(a[r]=mr(n,t[e]))}}),a},pr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ur;const a={};return Object.keys(t).forEach(r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&e[i]&&(a[r]=pr(e[i],t[r]))}}),a},br=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ur;const a="string"===typeof e?JSON.parse(cr(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach(e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&a[i]&&(r[e]=br(a[i],t[e]))}}),r},hr=function(e){var t,a,r,n,i,o,l,s,c,u,m;let p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:da();delete p.version;const b={id:Object(de.a)(),...p,...Object(lr.a)(e)};if(b.effectStyle={...da().effectStyle,...b.effectStyle},"verystrict"===(null===(t=b.effectStyle)||void 0===t?void 0:t.condenseTolerant)&&(b.effectStyle.condenseTolerant="veryStrict"),"veryloose"===(null===(a=b.effectStyle)||void 0===a?void 0:a.condenseTolerant)&&(b.effectStyle.condenseTolerant="veryLoose"),null==b.pendulumStyle?b.pendulumStyle={...da().pendulumStyle}:b.pendulumStyle={...da().pendulumStyle,...b.pendulumStyle},null==b.version&&(b.version=1),null==b.format&&(b.format="tcg"),null==e.region&&(b.region=I["tcg"===b.format?"en":"jp"].key),null==b.pendulumFrame&&(b.pendulumFrame="auto"),null==b.pendulumSize&&(b.pendulumSize="medium"),null==b.rightFrame&&(b.rightFrame="auto"),null==b.leftFrame&&(b.leftFrame="auto"),null==b.pendulumRightFrame&&(b.pendulumRightFrame="auto"),null==b.finish&&(b.finish=[]),Array.isArray(b.starList)||(b.starList=[]),null==b.artFinish&&(b.artFinish="normal"),b.finish){const e=b.finish;e.includes("art")&&(b.finish=e.filter(e=>"art"!==e),b.otherFinish=[b.artFinish,b.artFinish,b.artFinish,b.artFinish])}!Array.isArray(b.otherFinish)||3!==b.otherFinish.length&&null!=b.otherFinish[3]||(b.otherFinish[3]=da().otherFinish[3]),b.picture&&!e.art&&(b.art=b.picture),delete b.picture,b.pictureCrop&&!e.artCrop&&(b.artCrop=b.pictureCrop),delete b.pictureCrop,""===(null!==(r=b.art)&&void 0!==r?r:"")&&(b.art=""),""===(null!==(n=b.artData)&&void 0!==n?n:"")&&(b.artData=""),""===(null!==(i=b.artSource)&&void 0!==i?i:"")&&(b.artSource="online"),null==b.artFit&&(b.artFit=!1),b.artStyle={flipX:!1,flipY:!1,...b.artStyle},"boolean"===typeof b.opacity.artFrame&&null==b.opacity.boundless&&(b.opacity.boundless=!b.opacity.artFrame,delete b.opacity.artFrame),"boolean"!==typeof b.opacity.frameBorder&&(b.opacity.frameBorder=!1),b.opacity={...d(),...b.opacity},delete b.opacity.artFrame,""===(null!==(o=b.background)&&void 0!==o?o:"")&&(b.background=""),""===(null!==(l=b.backgroundData)&&void 0!==l?l:"")&&(b.backgroundData=""),""===(null!==(s=b.backgroundSource)&&void 0!==s?s:"")&&(b.backgroundSource="online"),null==b.backgroundFit&&(b.backgroundFit=!1),b.backgroundStyle={flipX:!1,flipY:!1,...b.backgroundStyle},null==b.hasBackground&&(b.background||b.backgroundData||b.opacity.baseFill)&&(b.hasBackground=!0),b.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...b.backgroundCrop},""===(null!==(c=b.overlay)&&void 0!==c?c:"")&&(b.overlay=""),""===(null!==(u=b.overlayData)&&void 0!==u?u:"")&&(b.overlayData=""),""===(null!==(m=b.overlaySource)&&void 0!==m?m:"")&&(b.overlaySource="online"),null==b.overlayFit&&(b.overlayFit=!0),b.overlayStyle={flipX:!1,flipY:!1,...b.overlayStyle},b.overlayCrop={x:0,y:0,width:100,height:100,unit:"%",aspect:.686,...b.overlayCrop},null==b.isLink&&"link"===b.frame&&(b.isLink=!0),null==b.linkRating&&(b.linkRating=""),b.kanjiHelper&&!e.furiganaHelper&&(b.furiganaHelper=b.kanjiHelper),delete b.kanjiHelper,void 0===b.furiganaHelper&&(b.furiganaHelper=!0),b.passcode&&!e.password&&(b.password=b.passcode),delete b.passcode,b.effectTextStyle||(b.effectTextStyle=ne()),b.pendulumTextStyle||(b.pendulumTextStyle=ne()),b.typeTextStyle||(b.typeTextStyle=ne()),b.statTextStyle||(b.statTextStyle=ne()),b.otherTextStyle||(b.otherTextStyle=ne()),"undefined"===typeof b.isLimitedEdition&&(b.isLimitedEdition=!1),"undefined"===typeof b.isLegacyCard&&(b.isLegacyCard=!1),b.starAlignment||(b.starAlignment="auto"),null==b.attributeType&&(b.attributeType="custom");const h=[0,0,0];if(Array.isArray(b.flag)){if(b.flag.length<h.length){const e=[...b.flag];b.flag=h.map((t,a)=>"number"===typeof e[a]?e[a]:t)}}else b.flag=h;const g=["","","","","","",""];if(Array.isArray(b.dyeList)){if(b.dyeList.length<g.length){const e=[...b.dyeList];b.dyeList=g.map((t,a)=>"string"===typeof e[a]?e[a]:t)}}else b.dyeList=g;if(0===b.version||1===b.version){b.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:i,frame:o}=b,l=Za({frame:o});("auto"!==e||t?!!(a||r||n&&i.length):l)||(b.atk="",b.def="")}if(2===b.version){b.version=3;const e=b.nameStyle.font;"Default"!==e&&"OCG"!==e||(b.nameStyle.font="Auto")}return b},gr=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},fr=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},vr=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:mr(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:mr(a)}},yr=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),xr=(e,t)=>{const{aspect:a,height:r,width:n,x:i,y:o,unit:l}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:p}=null!==t&&void 0!==t?t:{};return yr(a,s)&&yr(r,c)&&yr(n,d)&&yr(i,u)&&yr(o,m)&&l===p},jr=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Or=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},wr={height:100,width:600},kr=(()=>{let e="",t={};return{get:e=>t[e],test:(a,r)=>{let{scale:n,xRatio:i,setup:o}=r;const l=JSON.stringify(a);if(l===e)return;e=l;const s=document.getElementById("debug-canvas"),c=null===s||void 0===s?void 0:s.getContext("2d"),d=null!==n&&void 0!==n?n:1,u=null!==i&&void 0!==i?i:1;if(s&&c){c.clearRect(0,0,s.width,s.height),t={},o&&o(c),c.fillStyle="#000000",c.fillText("mienMIEN120OQoqG",0,95);const e={1:[{letter:"m",x:Math.round(34*u)},{letter:"i",x:Math.round(52*u),anchor:"m"},{letter:"e",x:Math.round(71*u),anchor:"m"},{letter:"n",x:Math.round(96*u),anchor:"m"},{letter:"M",x:Math.round(136*u)},{letter:"I",x:Math.round(188*u),anchor:"M"},{letter:"E",x:Math.round(208*u),anchor:"M"},{letter:"N",x:Math.round(240*u),anchor:"M"},{letter:"1",x:Math.round(290*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(326*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(360*u),anchor:"M"},{letter:"O",x:Math.round(400*u),anchor:"M"},{letter:"Q",x:Math.round(443*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(483*u),anchor:"m"},{letter:"q",x:Math.round(521*u),anchor:"m",compensateBottom:!1},{letter:"G",x:Math.round(566*u),anchor:"M"}],2:[{letter:"m",x:Math.round(70*u)},{letter:"i",x:Math.round(105*u),anchor:"m"},{letter:"e",x:Math.round(143*u),anchor:"m"},{letter:"n",x:Math.round(196*u),anchor:"m"},{letter:"M",x:Math.round(337*u)},{letter:"I",x:Math.round(376*u),anchor:"M"},{letter:"E",x:Math.round(415*u),anchor:"M"},{letter:"N",x:Math.round(481*u),anchor:"M"},{letter:"1",x:Math.round(585*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(654*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(723*u),anchor:"M"},{letter:"O",x:Math.round(801*u),anchor:"M"},{letter:"Q",x:Math.round(888*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(969*u),anchor:"m"},{letter:"q",x:Math.round(1043*u),anchor:"m",compensateBottom:!1},{letter:"G",x:Math.round(1126*u),anchor:"M"}]}[d];if(c.resetTransform(),e){const a=c.getImageData(0,0,wr.width*d,wr.height),r=a.data,n=(e,t,a)=>{r[e]=t?255:0,r[e+1]=a?0:255,r[e+2]=t?0:255,r[e+3]=255};let i={};for(let o=0;o<e.length;o++){const{anchor:l,letter:s,x:c,compensateBottom:d=!0,compensateTop:u=!0}=e[o];let m=-1,p=-1;const b=90;for(let e=0;e<wr.height;e++){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>b&&-1===m&&(o=e),n(t,i>b&&-1===m,u);const l=4*(e*a.width+c+1),s=r[l+3];let d=-1;s>b&&-1===m&&(d=e+1),n(l,s>b&&-1===m,u);const p=4*(e*a.width+c+2),h=r[p+3];let g=-1;if(h>b&&-1===m&&(g=e+2),n(p,h>b&&-1===m,u),m=Math.max(o,d,g),-1!==m)break}for(let e=wr.height-1;e>=0;e--){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>b&&-1===p&&(o=e),n(t,i>b&&-1===p,d);const l=4*(e*a.width+c+1),s=r[l+3];let u=-1;s>b&&-1===p&&(u=e+1),n(l,s>b&&-1===p,d);const m=4*(e*a.width+c+2),h=r[m+3];let g=-1;if(h>b&&-1===p&&(g=e+2),n(m,h>b&&-1===p,d),p=Math.max(o,u,g),-1!==p)break}if("string"!==typeof l)i[s]={ascent:m,descent:p};else{const{ascent:e,descent:a}=i[l];t[s]={ascentCompensate:1*("number"===typeof e&&u?m-e:0),descentCompensate:1*("number"===typeof a&&d?a-p:0),height:p-m,anchorAscent:e,anchorDescent:a,anchorHeight:a-e}}}c.putImageData(new ImageData(r,a.width,a.height),0,0),c.font="10px Arial"}}}}})();var Sr=a(242);const Cr=(e,t)=>{var a,r,n,i,o;const{creator:l,effect:s,format:c,region:d,isFirstEdition:u,name:m,password:p,pendulumEffect:b,setId:h,typeAbility:g}=e;if(c===t)return e;const f=I[d].category===t?d:I[R[t]].key,v="ocg"===t?Ye:$e,y="ocg"===t&&/-EN/.test(h)?h.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(h)?h.replace("-JP","-EN"):h;return{...e,name:null!==(a=v[m])&&void 0!==a?a:m,format:t,region:f,effect:null!==(r=v[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=v[b])&&void 0!==n?n:b,typeAbility:g.map(e=>{var t;return null!==(t=v[e])&&void 0!==t?t:e}),creator:null!==(i=v[l])&&void 0!==i?i:l,password:null!==(o=v[p])&&void 0!==o?o:p,setId:y,isFirstEdition:"ocg"!==t&&u}};var Fr=a(70);const Lr=Object(Fr.create)((e,t)=>({batchName:"",batch:void 0,batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1,startBatchDownload:(t,a)=>{e({batchName:t,batchQueue:a,isBatchDownloading:!0})},stopBatchDownload:()=>{e({batchName:"",batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1})},clearQueue:()=>{e({batchQueue:[]})},addToBatch:(t,a,r)=>{e(e=>{let{batchQueue:n,batchDataMap:i}=e;const o=n.filter(e=>e!==t),l={...i};return l[t]={name:a,blob:r},{batchQueue:o,batchDataMap:l,isReady:0===o.length}})}}));var Tr=a(113),Nr=a.n(Tr),Ir=a(302),Rr=a.n(Ir),Er=a(337);const Mr=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(h.jsx)(n.a.Fragment,{children:r.map((e,a)=>a%2===0?Object(h.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e])},e)},i={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,i,o)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:i,other:o}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,i)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-2.content":(e,t,n,i)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,i)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-6.content":(e,t,n,i)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-7.content":(e,t,n,i)=>r(a("guide.format.section-7.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-8.content":(e,t,n,i)=>r(a("guide.format.section-8.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-9.content":e=>r(a("guide.format.section-9.content"),{openTag:e}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...i}}},zr=Object(Fr.create)((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=Mr({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),i=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const i=Mr(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=i,i}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},o=async a=>{const o=t().languageMetadataMap[a];if(!o)return;const l=r[a]?r[a]:await i(a);l?(e({languageInfo:t().languageMetadataMap[a],language:l.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:o})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await i("eng"),await o(a),e({isInitiating:!1})},loadLanguage:i,changeLanguage:o}}),Pr=()=>zr(e=>{let{language:t}=e;return t}),Ar=()=>zr.getState().language;var Dr=a(187);const Hr=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Art Data","Art Source","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","First Edition Text","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Region","Attribute Type","Star Type","Star Alignment","Card Icon Type","Link Rating","Corner Text","Has Corner Text","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Frame Border","Opacity - Art Border","Opacity - Name Border","Opacity - Effect Box","Opacity - Boundless","Has Background","Background Link","Background Data","Background Source","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Art Style","Background Style","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Effect Style - Min Line","Effect Style - Justify Ratio","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Pendulum Effect Style - Min Line","Pendulum Effect Style - Justify Ratio","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Overlay Link","Overlay Data","Overlay Source","Is Using Full Overlay","Overlay Style","Overlay Crop - X (%)","Overlay Crop - Y (%)","Overlay Crop - Width (%)","Overlay Crop - Height (%)","Left Frame","Right Frame","Bottom Right Frame","Dye List","Star List","Flag","Legacy Template","External Info (JSON)"],Br=[...Hr,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Wr=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),$r=new Set(Br.map(Wr)),Yr=Hr.reduce((e,t,a)=>{const r=Wr(t);return $r.has(r)&&(e[t]=a),e},{}),Kr=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,Ur=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},Gr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Xr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,qr=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,Vr=e=>{try{const t=e[0].reduce((e,t,a)=>{const r=Wr(t);return $r.has(r)&&(e[t]=a),e},{});return e.map((e,a)=>{var r,n,i,o,l,s,c,p,b,h,g,f,v,y,x,j,w,k,S,F,L,T,N,I,R,E,M,z,P,A,D,H,B,W,$,Y,K,G,X,q,V,_,J,Q,Z,ee,te,ae,ie,oe,le,se,ce,ue,me,pe,be,he,ge,fe,ye,xe,je,Oe,we,ke,Se,Ce,Fe;if(0===a)return null;if(""===e.join(""))return null;const Le=da(),Te=((e,t)=>a=>{var r,n;const i=null!==(r=t[a])&&void 0!==r?r:-1,o=(null!==(n=e[i])&&void 0!==n?n:"").trim();return""===o?void 0:o})(e,t),Ne=(null!==(r=null!==(n=Te("Frame"))&&void 0!==n?n:Te("Background_Type"))&&void 0!==r?r:Le.frame).toLowerCase(),Ie=(null!==(i=Te("Right Frame"))&&void 0!==i?i:Le.rightFrame).toLowerCase(),Re=(null!==(o=Te("Left Frame"))&&void 0!==o?o:Le.leftFrame).toLowerCase(),Ee=(null!==(l=Te("Bottom Right Frame"))&&void 0!==l?l:Le.pendulumRightFrame).toLowerCase(),Me=null!==(s=null!==(c=Te("Star"))&&void 0!==c?c:Te("Level/Rank"))&&void 0!==s?s:"",ze="text"===Te("Star Type")?Me:parseInt(Me)<=13&&parseInt(Me)>=0&&"2"!==Te("Star_Type")?parseInt(Me):Me,Pe=(null!==(p=null!==(b=Te("Foil"))&&void 0!==b?b:Te("Rarity"))&&void 0!==p?p:"normal").toLowerCase(),Ae=O[Pe]?Pe:"normal",De=null!==(h=null===(g=Te("Attribute Type"))||void 0===g?void 0:g.toLowerCase())&&void 0!==h?h:"auto",He=null===(f=Te("Attribute"))||void 0===f?void 0:f.toUpperCase(),Be=He||"custom"===De?"NONE"===He?C:null!==He&&void 0!==He?He:C:"spell"===Ne?"SPELL":"trap"===Ne?"TRAP":Le.attribute,We=null!==(v=Te("Art Finish"))&&void 0!==v?v:Te("Art_Finish")?`type${Te("Art_Finish")}`:"",$e=null!==(y=Te("Other Finish - Attribute"))&&void 0!==y?y:"",Ye=null!==(x=Te("Other Finish - Sticker"))&&void 0!==x?x:"",Ke=null!==(j=Te("Other Finish - Icon"))&&void 0!==j?j:"",Ue=null!==(w=Te("Other Finish - Background"))&&void 0!==w?w:"",Ge=null!==(k=Te("ATK"))&&void 0!==k?k:"",Xe=null!==(S=Te("Card Icon Type"))&&void 0!==S?S:Le.cardIcon,qe=null!==(F=Te("Copyright"))&&void 0!==F?F:"",Ve=null!==(L=Te("DEF"))&&void 0!==L?L:"",_e=null!==(T=Te("Effect"))&&void 0!==T?T:"",Je=null!==(N=null===(I=Te("Card Finish"))||void 0===I?void 0:I.split(/,| /).filter(e=>""!==e))&&void 0!==N?N:[],Qe=(null!==(R=Te("Format"))&&void 0!==R?R:Le.format).toLowerCase(),Ze=(null!==(E=Te("Region"))&&void 0!==E?E:Le.region).toLowerCase(),et=Ur(Te("Legacy Template"),Le.legacyTemplate),tt=Ur(Te("Use Furigana Helper"),Le.furiganaHelper),at=null!==(M=Te("Name"))&&void 0!==M?M:"",rt=null!==(z=Te("Password"))&&void 0!==z?z:"",nt=null!==(P=null!==(A=Te("Set Id"))&&void 0!==A?A:Te("Set_ID"))&&void 0!==P?P:"",it=(null!==(D=Te("Star Alignment"))&&void 0!==D?D:Le.starAlignment).toLowerCase(),ot=(null!==(H=Te("Sticker"))&&void 0!==H?H:Le.sticker).toLowerCase(),lt=(null!==(B=null!==(W=Te("Spell/Trap Icon"))&&void 0!==W?W:Te("spell_type/trap_type"))&&void 0!==B?B:Le.subFamily).toUpperCase(),st=null===($=Te("Edition"))||void 0===$?void 0:$.toLowerCase(),ct=null!==(Y=Te("First Edition Text"))&&void 0!==Y?Y:Le.firstEditionText,dt=Ur(Te("Is First Edition"),st?"1st edition"===st:Le.isFirstEdition),ut=null!==(K=Te("Corner Text"))&&void 0!==K?K:Le.cornerText,mt=Ur(Te("Has Corner Text"),st?"1st edition"===st:Le.hasCornerText),pt=Ur(Te("Is Duel Terminal Card"),st?"duel terminal"===st:Le.isDuelTerminalCard),bt=Ur(Te("Is Limited Edition"),st?"limited edition"===st:Le.isLimitedEdition),ht=Ur(Te("Is Speed Card"),st?"speed duel"===st:Le.isSpeedCard),gt=Ur(Te("Is Legacy Card"),Le.isLegacyCard),ft=Ur(Te("Is Pendulum"),Le.isPendulum),vt=(null!==(G=Te("Bottom Frame"))&&void 0!==G?G:Le.pendulumFrame).toLowerCase(),yt=null!==(X=Te("Pendulum Effect"))&&void 0!==X?X:"",xt=null!==(q=Te("Pendulum Scale Red"))&&void 0!==q?q:"",jt=null!==(V=Te("Pendulum Scale Blue"))&&void 0!==V?V:"",Ot=null!==(_=Te("Pendulum Size"))&&void 0!==_?_:"medium",wt=Te("Type Ability"),kt=wt?wt.split("/"):[Te("Type_1"),Te("Type_2"),Te("Type_3"),Te("Type_4")].filter(e=>"string"===typeof e&&""!==e).map(e=>"string"===typeof e?e:""),St=null!==(J=Te("Condense Rate"))&&void 0!==J?J:Le.effectStyle.condenseTolerant,Ct="verystrict"===St?"veryStrict":"veryloose"===St?"veryLoose":St,Ft=Gr(Te("Effect Style - Upsize"),Le.effectStyle.upSize),Lt=Gr(Te("Pendulum Effect Style - Upsize"),Le.pendulumStyle.upSize),Tt=(null!==(Q=Te("Effect Style - Font Style"))&&void 0!==Q?Q:Le.effectStyle.fontStyle).toLowerCase(),Nt=(null!==(Z=Te("Pendulum Effect Style - Font Style"))&&void 0!==Z?Z:Le.pendulumStyle.fontStyle).toLowerCase(),It=(null!==(ee=Te("Effect Style - Background"))&&void 0!==ee?ee:Le.effectStyle.background).toLowerCase(),Rt=(null!==(te=Te("Pendulum Effect Style - Background"))&&void 0!==te?te:Le.pendulumStyle.background).toLowerCase(),Et=Gr(Te("Effect Style - Min Line"),Le.effectStyle.minLine),Mt=Gr(Te("Pendulum Effect Style - Min Line"),Le.pendulumStyle.minLine),zt=Gr(Te("Effect Style - Min Line"),Le.effectStyle.justifyRatio),Pt=Gr(Te("Pendulum Effect Style - Min Line"),Le.pendulumStyle.justifyRatio),At=d(),Dt={artBorder:Ur(Te("Opacity - Art Border"),At.artBorder),frameBorder:Ur(Te("Opacity - Frame Border"),At.frameBorder),baseFill:null!==(ae=Te("Opacity - Base Fill"))&&void 0!==ae?ae:At.baseFill,body:Gr(Te("Opacity - Body"),At.body),boundless:Ur(Te("Opacity - Boundless"),At.boundless),effectBox:Ur(Te("Opacity - Effect Box"),At.effectBox),name:Gr(Te("Opacity - Name"),At.name),nameBorder:Ur(Te("Opacity - Name Border"),At.nameBorder),pendulum:Gr(Te("Opacity - Pendulum"),At.pendulum),text:Gr(Te("Opacity - Text"),At.text)},Ht={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Bt=null!==(ie=Te("Art Link"))&&void 0!==ie?ie:Le.art,Wt=null!==(oe=Te("Art Data"))&&void 0!==oe?oe:Le.artData,$t=null!==(le=Te("Art Source"))&&void 0!==le?le:Le.artSource,Yt=Ur(Te("Is Using Full Art"),Le.artFit),Kt={aspect:m(ft,Dt,void 0,Ot).ratio,height:Xr(Te("Art Crop - Height (%)"),Ht.height),width:Xr(Te("Art Crop - Width (%)"),Ht.width),x:Xr(Te("Art Crop - X (%)"),Ht.x),y:Xr(Te("Art Crop - Y (%)"),Ht.y),unit:"%"};let Ut={flipX:!1,flipY:!1};try{var Gt;Ut=JSON.parse(null!==(Gt=Te("Art Style"))&&void 0!==Gt?Gt:"{}")}catch(Ia){console.error("csvToCardList",Ia)}const Xt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},qt=Ur(Te("Has Background"),Le.hasBackground),Vt=null!==(se=Te("Background Link"))&&void 0!==se?se:Le.background,_t=null!==(ce=Te("Background Data"))&&void 0!==ce?ce:Le.backgroundData,Jt=null!==(ue=Te("Background Source"))&&void 0!==ue?ue:Le.backgroundSource,Qt=(null!==(me=Te("Background Type"))&&void 0!==me?me:Le.backgroundType).toLowerCase(),Zt=Ur(Te("Is Using Full Background"),Le.backgroundFit),ea={aspect:m(ft,Dt,Qt,Ot).ratio,height:Xr(Te("Background Crop - Height (%)"),Xt.height),width:Xr(Te("Background Crop - Width (%)"),Xt.width),x:Xr(Te("Background Crop - X (%)"),Xt.x),y:Xr(Te("Background Crop - Y (%)"),Xt.y),unit:"%"};let ta={flipX:!1,flipY:!1};try{var aa;ta=JSON.parse(null!==(aa=Te("Background Style"))&&void 0!==aa?aa:"{}")}catch(Ia){console.error("csvToCardList",Ia)}const ra={x:0,y:0,width:100,height:100,unit:"%",aspect:.686},na=null!==(pe=Te("Overlay Link"))&&void 0!==pe?pe:Le.overlay,ia=null!==(be=Te("Overlay Data"))&&void 0!==be?be:Le.overlayData,oa=null!==(he=Te("Overlay Source"))&&void 0!==he?he:Le.overlaySource,la=Ur(Te("Is Using Full Overlay"),Le.overlayFit),sa={aspect:u.overframeCard.ratio,height:Xr(Te("Overlay Crop - Height (%)"),ra.height),width:Xr(Te("Overlay Crop - Width (%)"),ra.width),x:Xr(Te("Overlay Crop - X (%)"),ra.x),y:Xr(Te("Overlay Crop - Y (%)"),ra.y),unit:"%"};let ca={flipX:!1,flipY:!1};try{var ua;ca=JSON.parse(null!==(ua=Te("Overlay Style"))&&void 0!==ua?ua:"{}")}catch(Ia){console.error("csvToCardList",Ia)}const ma=re(),pa=(null!==(ge=Te("Name Style Type"))&&void 0!==ge?ge:Le.nameStyleType).toLowerCase(),ba={embossPitch:Gr(Te("Name Style - Emboss Pitch"),ma.embossPitch),embossYaw:Gr(Te("Name Style - Emboss Yaw"),ma.embossYaw),embossThickness:Gr(Te("Name Style - Emboss Thickness"),ma.embossThickness),fillStyle:qr(Te("Name Style - Fill Style"),ma.fillStyle),font:null!==(fe=Te("Name Style - Font"))&&void 0!==fe?fe:ma.font,gradientAngle:Gr(Te("Name Style - Gradient Angle"),ma.gradientAngle),gradientColor:null!==(ye=Te("Name Style - Gradient Color"))&&void 0!==ye?ye:ma.gradientColor,hasEmboss:Ur(Te("Name Style - Has Emboss"),ma.hasEmboss),hasGradient:Ur(Te("Name Style - Has Gradient"),ma.hasGradient),hasOutline:Ur(Te("Name Style - Has Outline"),ma.hasOutline),hasShadow:Ur(Te("Name Style - Has Shadow"),ma.hasShadow),headTextFillStyle:qr(Te("Name Style - Headtext Fill Style"),ma.headTextFillStyle),lineColor:qr(Te("Name Style - Line Color"),ma.lineColor),lineOffsetX:Gr(Te("Name Style - Line Offset X"),ma.lineOffsetX),lineOffsetY:Gr(Te("Name Style - Line Offset Y"),ma.lineOffsetY),lineWidth:Gr(Te("Name Style - Line Width"),ma.lineWidth),pattern:null!==(xe=Te("Name Style - Pattern"))&&void 0!==xe?xe:ma.pattern,preset:null!==(je=Te("Name Style - Preset"))&&void 0!==je?je:ma.preset,shadowBlur:Gr(Te("Name Style - Shadow Blur"),ma.shadowBlur),shadowColor:qr(Te("Name Style - Shadow Color"),ma.shadowColor),shadowOffsetX:Gr(Te("Name Style - Shadow Offset X"),ma.shadowOffsetX),shadowOffsetY:Gr(Te("Name Style - Shadow Offset Y"),ma.shadowOffsetY)},ha=Ur(Te("Is Link"),null!==(Oe=Le.isLink)&&void 0!==Oe?Oe:"link"===Ne),ga=null!==(we=[Ur(Te("Link - Top Left Arrow"),!1)?"1":"",Ur(Te("Link - Top Arrow"),!1)?"2":"",Ur(Te("Link - Top Right Arrow"),!1)?"3":"",Ur(Te("Link - Left Arrow"),!1)?"4":"",Ur(Te("Link - Right Arrow"),!1)?"6":"",Ur(Te("Link - Bottom Left Arrow"),!1)?"7":"",Ur(Te("Link - Bottom Arrow"),!1)?"8":"",Ur(Te("Link - Bottom Right Arrow"),!1)?"9":""].filter(e=>""!==e))&&void 0!==we?we:[],fa=null!==(ke=Te("Link Rating"))&&void 0!==ke?ke:"",va=ne(),ya=[Ur(Te("Stat Style - Is Custom"),va[0]),qr(Te("Stat Style - Fill Color"),va[1]),Ur(Te("Stat Style - Has Shadow"),va[2]),qr(Te("Stat Style - Shadow Color"),va[3])],xa=[Ur(Te("Type Style - Is Custom"),va[0]),qr(Te("Type Style - Fill Color"),va[1]),Ur(Te("Type Style - Has Shadow"),va[2]),qr(Te("Type Style - Shadow Color"),va[3])],ja=[Ur(Te("Effect Style - Is Custom"),va[0]),qr(Te("Effect Style - Fill Color"),va[1]),Ur(Te("Effect Style - Has Shadow"),va[2]),qr(Te("Effect Style - Shadow Color"),va[3])],Oa=[Ur(Te("Pendulum Effect Style - Is Custom"),va[0]),qr(Te("Pendulum Effect Style - Fill Color"),va[1]),Ur(Te("Pendulum Effect Style - Has Shadow"),va[2]),qr(Te("Pendulum Effect Style - Shadow Color"),va[3])],wa=[Ur(Te("Other Style - Is Custom"),va[0]),qr(Te("Other Style - Fill Color"),va[1]),Ur(Te("Other Style - Has Shadow"),va[2]),qr(Te("Other Style - Shadow Color"),va[3])];let ka={};try{var Sa;ka=JSON.parse(null!==(Sa=Te("External Info (JSON)"))&&void 0!==Sa?Sa:"{}")}catch(Ia){console.error("csvToCardList",Ia)}const Ca=(null!==(Se=Te("Flag"))&&void 0!==Se?Se:"").split("|").map(Number).slice(0,ve),Fa=[0,0,0].map((e,t)=>"number"===typeof Ca[t]?Ca[t]:e),La=(null!==(Ce=Te("Dye List"))&&void 0!==Ce?Ce:"").split("|").map(String).slice(0,7),Ta=["","","","","","",""].map((e,t)=>"string"===typeof La[t]?La[t]:e),Na=(null!==(Fe=Te("Star List"))&&void 0!==Fe?Fe:"").split("|").map(String).slice(0,U);return{id:Object(de.a)(),...Le,art:Bt,artData:Wt,artCrop:Kt,artFinish:We,artSource:$t,artFit:Yt,artStyle:Ut,atk:Ge,attribute:Be,attributeType:De,background:Vt,backgroundData:_t,backgroundCrop:ea,backgroundFit:Zt,backgroundStyle:ta,backgroundSource:Jt,backgroundType:Qt,cardIcon:Xe,condenseTolerant:Ct,cornerText:ut,creator:qe,def:Ve,dyeList:Ta,effect:_e,effectStyle:{condenseTolerant:Ct,upSize:Ft,fontStyle:Tt,background:It,minLine:Et,justifyRatio:zt},effectTextStyle:ja,externalInfo:ka,finish:Je,firstEditionText:ct,flag:Fa,foil:Ae,format:Qe,frame:Ne,furiganaHelper:tt,hasBackground:qt,hasCornerText:mt,isDuelTerminalCard:pt,isFirstEdition:dt,isLegacyCard:gt,isLimitedEdition:bt,isLink:ha,isPendulum:ft,isSpeedCard:ht,leftFrame:Re,legacyTemplate:et,linkMap:ga,linkRating:fa,name:at,nameStyle:ba,nameStyleType:pa,opacity:Dt,otherFinish:[$e,Ke,Ye,Ue],otherTextStyle:wa,overlay:na,overlayCrop:sa,overlayData:ia,overlayFit:la,overlaySource:oa,overlayStyle:ca,password:rt,pendulumEffect:yt,pendulumFrame:vt,pendulumRightFrame:Ee,pendulumScaleBlue:jt,pendulumScaleRed:xt,pendulumSize:Ot,pendulumStyle:{upSize:Lt,fontStyle:Nt,background:Rt,minLine:Mt,justifyRatio:Pt},pendulumTextStyle:Oa,region:Ze,rightFrame:Ie,setId:nt,star:ze,starList:Na,starAlignment:it,statTextStyle:ya,sticker:ot,subFamily:lt,typeAbility:kt,typeTextStyle:xa}}).filter(e=>null!=e)}catch(t){return console.error("csvToCardList",t),[]}},_r=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),i=!!r&&isFinite(r);if(n&&!i)return-1;if(!n&&i)return 1;if(n&&i)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const o="?"===e?1:""===e?-1:0,l="?"===t?1:""===t?-1:0;return l-o===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):l-o},Jr=(e,t)=>e.name.localeCompare(t.name),Qr=(e,t)=>e.setId.localeCompare(t.setId),Zr=(e,t)=>_r(e.atk,t.atk),en=(e,t)=>_r(e.def,t.def),tn=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:_r(e.star,t.star),an=(e,t)=>{try{var a,r,n,i;const o=Ke[t.frame].sortWeight-Ke[e.frame].sortWeight;if(0!==o)return o;return(null!==(a=null===(r=Ke[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(i=Ke[e.pendulumFrame])||void 0===i?void 0:i.sortWeight)&&void 0!==n?n:1e3)}catch(o){return 0}},rn=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||Qa(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},nn=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},on={name:{key:"name",sortFunction:e=>e.map(rn).sort((e,t)=>nn([Jr,tn,an,Qr,Zr,en],e,t))},atk:{key:"atk",sortFunction:e=>e.map(rn).sort((e,t)=>nn([Zr,en,tn,an,Jr,Qr],e,t))},def:{key:"def",sortFunction:e=>e.map(rn).sort((e,t)=>nn([en,Zr,tn,an,Jr,Qr],e,t))},set:{key:"set",sortFunction:e=>e.map(rn).sort((e,t)=>nn([Qr,an,tn,Jr,Zr,en],e,t))},level:{key:"level",sortFunction:e=>e.map(rn).sort((e,t)=>nn([an,tn,Jr,Qr,Zr,en],e,t))}},ln=(e,t)=>{const a=Object.values(t).filter(e=>null!=e);return 0===a.length?e:a.reduce((e,t)=>t(e),e)},sn=Object(Fr.create)(Object(Dr.subscribeWithSelector)(e=>({activeId:"",cardDisplayList:[],cardList:[],selectedMap:{},filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e(e=>{let{cardList:t,filterFunctionMap:n}=e;const i={...n};if("text"===a){const e=r.toLowerCase();i[a]=t=>t.filter(t=>{let{name:a,effect:r,pendulumEffect:n,isPendulum:i}=t;return(jr(a).toLowerCase()+Or(r).toLowerCase()+(i?Or(n).toLowerCase():"")).includes(e)})}return{filterFunctionMap:i,cardDisplayList:ln(t,i)}})},resetFilter:()=>{e(e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}})},addCard:t=>e(e=>{let{cardList:a}=e;const r={id:Object(de.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}}),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e(e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}}),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(e=>{let{cardList:r,cardDisplayList:n,isListDirty:i}=e,o=i;if(!1===o&&a){const e=r.find(e=>e.id===t.id);o=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:i,backgroundCrop:o,...l}=t;return Object(sr.a)(n,l)&&xr(a,i)&&xr(r,o)})(t,e)}return{isListDirty:o,cardList:r.map(e=>e.id===t.id?{...t}:e),cardDisplayList:n.map(e=>e.id===t.id?{...t}:e)}})},setActiveId:t=>e({activeId:t}),selectCard:(t,a)=>{e(e=>{let{selectedMap:r}=e;const n={...r};return"add"===a?n[t]=t:delete n[t],{selectedMap:n}})},setSelectMap:(t,a)=>e(e=>{let{selectedMap:r}=e;return{selectedMap:t.reduce((e,t)=>(e[t.id]=t.id,e),"replace"===a?{}:{...r})}}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e(e=>{var a,r,n,i;let{cardList:o,activeId:l,cardDisplayList:s}=e;const c=o.filter(e=>e.id!==t),d=s.filter(e=>e.id!==t),u=d.findIndex(e=>e.id===l);return{activeId:l===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(i=d[0])||void 0===i?void 0:i.id)&&void 0!==a?a:"":l,cardList:c,cardDisplayList:d}})},duplicateCard:t=>{e(e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex(e=>{let{name:a}=e;return a===t.name}),i=Object(de.a)(),o={...Object(lr.a)(t),name:`${t.name} - Copy`,id:i},l=n<0?[...a,o]:[...a.slice(0,n),a[n],o,...a.slice(n+1,a.length)];return{activeId:i,pendingActiveCard:o,cardList:l,cardDisplayList:ln(l,r)}})},sortList:t=>{e(e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:on[t].sortFunction(a),cardList:on[t].sortFunction(r)}})}}))),cn=(e,t)=>{const a=Object(de.a)();let r=da(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=pr(a);r=Object.keys(e).length>0?hr(e,t):hr(a,t)}else if(gr(a))r=hr(a);else if(fr(a)){const e=pr(a);r=hr(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:i}=xo(e);n=t,r=i}else if(bo(a)){const{isPartial:e,result:t}=xo(a);n=e,r=t}else{const{isPartial:e,result:t}=po(a);n=e,r=t}}catch(i){console.error("decodedCard",e,i);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?br(e):"string"===typeof e?JSON.parse(e):e,hr(t)}(e,!0),Er.a.info({message:Ar()["service.decode.outdated.message"],description:Ar()["service.decode.outdated.description"]})}catch(i){console.error("cardData",e,i),Er.a.error({message:Ar()["service.decode.error.message"],description:Ar()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},dn={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},un=Object(Fr.create)((e,t)=>({card:ca(),setCard:(t,a)=>{const r=sn.getState().changeActiveCard;if("function"===typeof t)e(e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}});else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(de.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:i}=t(),o=t=>{i(a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:"function"===typeof t?t(a):null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}})};if(!n)return o;const l="string"===typeof n?null!==(a=dn[n])&&void 0!==a?a:void 0:n;if(!l)return o;const{wait:s,type:c}=l;return"debounce"===c?Nr()(o,s):"throttle"===c?Rr()(o,s):o}})),mn=Object(Fr.create)(e=>{const{allowHotkey:t,exportFormat:a,exportScheme:r,globalScale:n,mirrorPendulumScale:i,reduceMotionColor:o,resolution:l,showCreativeOption:c,showExtraAttribute:d,showExtraDecorativeOption:u,slidingType:m}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportScheme:"string"===typeof r?r:"with-name",globalScale:"number"===typeof n&&n<=s.maximumScale?n:1,exportFormat:"string"===typeof a?a:"csv",slidingType:"string"===typeof m?m:"auto",resolution:Array.isArray(l)&&"number"===typeof l[0]&&"number"===typeof l[1]?l:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof o&&o,showCreativeOption:"boolean"!==typeof c||c,showExtraAttribute:"boolean"!==typeof d||d,showExtraDecorativeOption:"boolean"!==typeof u||u,mirrorPendulumScale:"boolean"===typeof i&&i},updateSetting:t=>{e(e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}})}}}),pn=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:i,onExport:o,onDownloadError:l,onDownloadComplete:s}=e;const c=Pr(),{card:d}=un(),{addToBatch:u,batchDataMap:m,isBatchDownloading:p}=Lr(),b=mn(e=>e.setting.resolution),h=mn(e=>e.setting.exportScheme),{opacity:g,name:f,isPendulum:v,pendulumSize:y}=d,x=jr(f),j=Object(r.useRef)(!1),O=Object(r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;const a=n.current,r=null===a||void 0===a?void 0:a.cloneNode(),i=null===a||void 0===a?void 0:a.getContext("2d"),o=null===r||void 0===r?void 0:r.getContext("2d");if(a&&i&&r&&o&&!t)return e&&(r.width=e[0],r.height=e[1]),o.drawImage(a,0,0,a.width,a.height,0,0,r.width,r.height),r.toDataURL("image/png")},[n,t,b]),w=Object(r.useCallback)(async function(e,t){var a;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;try{const a=O(r);if("string"!==typeof a)throw new Error("Failed to add card to batch");const n=await fetch(a),i=await n.blob();p&&u(t,e,i)}catch(n){l()}null===(a=document.querySelector("#export-canvas-guard"))||void 0===a||a.classList.remove("guard-on"),s()},[u,O,p,s,l,b]),k=Object(r.useCallback)(function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;try{const e=jr(f),r=O(t);if("string"!==typeof r)throw new Error("Failed to trigger automatic download");var a=document.createElement("a");a.download=e?`${e}.png`:"card.png",a.href=r,a.click()}catch(r){l()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()},[b,s,f,O,l]);return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&(document.title=x?`${x} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")},500),()=>{e=!1}},[x]),Object(r.useEffect)(()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.4.8")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),Object(r.useEffect)(()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.4.8")?r:"unknown")}catch(s){try{var l;const{artData:e,backgroundData:t,overlayData:a,...r}=d;localStorage.setItem("card-data",JSON.stringify(r)),localStorage.setItem("card-version",null!==(l="2.4.8")?l:"unknown")}catch(s){const e="fail-to-set-storage-notification";Er.a.close(e),Er.a.info({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}}(async()=>{var a,r,l,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(l=document.getElementById("export-canvas-guard"))||void 0===l||l.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),i.current.pipelineRunning=!0,await i.current.currentPipeline,e&&(i.current.currentPipeline=o({isPendulum:v,opacity:g,pendulumSize:y,isRelevant:()=>e}),await i.current.currentPipeline,e))){var c,u,b,f;const e={...d,artData:"",backgroundData:"",overlayData:""},a=JSON.stringify(mr(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(b=document.getElementById("export-canvas-guard"))||void 0===b||b.setAttribute("style","display: none"),null===(f=document.getElementById("save-button-waiting"))||void 0===f||f.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),i.current.pipelineRunning=!1,j.current&&(j.current=!1,k()),p&&!m[e.id]&&setTimeout(()=>{w("with-name"===h?`${x}.png`:`${e.setId} - ${x}.png`,e.id)},200)}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}}),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout(()=>{!1===i.current.pipelineRunning?k(a):j.current=!0},200)},isPipelineRunning:()=>i.current.pipelineRunning}};var bn=a(305);const hn=()=>{const[e,t]=Object(r.useState)(null),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{const e=await async function(){try{return await Object(bn.a)("YgoCarderDb",4,{upgrade(e,t,a){e.objectStoreNames.contains("messageStore")||e.createObjectStore("messageStore",{keyPath:"key"}),e.objectStoreNames.contains("presetLayoutStore")||e.createObjectStore("presetLayoutStore",{keyPath:"key"}),e.objectStoreNames.contains("presetNameStyleStore")||e.createObjectStore("presetNameStyleStore",{keyPath:"key"}),4===a&&(e.objectStoreNames.contains("presetImageStore")||e.createObjectStore("presetImageStore",{keyPath:"key"})),console.info("YgoCarderDb ready")}})}catch(e){return console.error("setupYgoCarderDb",e),null}}();t(e),n(!0)})(),setTimeout(()=>{n(!0)},5e3)},[]),{db:e,dbReady:a}},gn=e=>{let{value:t="",onChange:a}=e;const[n,i]=Object(r.useState)(t),[o,l]=Object(r.useState)(()=>({hex:jo.test(t)?t:"#000000",rgb:Oo(t,!1)}));return Object(r.useEffect)(()=>{const e=n.startsWith("#")?n:`#${n}`;jo.test(e)&&(i(e),l({hex:e,rgb:Oo(e,!1)}),null===a||void 0===a||a(e))},[n]),Object(r.useEffect)(()=>{i(t),l({hex:jo.test(t)?t:"#000000",rgb:Oo(t,!1)})},[t]),{inputText:n,color:o,setColor:i}};var fn=a(16);const vn=Object(Fr.create)(e=>({memory:{resetCanvasCounter:0,activeDropzone:0,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[],imagePresetMap:{}},updateGlobalMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return e.memory.imagePresetList!==a.imagePresetList&&(a.imagePresetMap=a.imagePresetList.reduce((e,t)=>(e[t.content.name]=t.content,e),{})),{memory:a}})}})),yn=e=>{const{targetMemory:t,updateGlobalMemory:a}=vn(Object(fn.useShallow)(t=>{let{memory:a,updateGlobalMemory:r}=t;return{targetMemory:a[e],updateGlobalMemory:r}}));return[t,Object(r.useCallback)(t=>{a(a=>({...a,[e]:"function"===typeof t?t(a[e]):t}))},[e,a])]},{height:xn,width:jn,maximumScale:On}=s,wn=()=>"#000000".replace(/0/g,()=>(~~(12*Math.random()+2)).toString(16)),kn=e=>{let{ctx:t,color:a=wn(),width:r,offset:n=4,edge:i,baseline:o,xRatio:l}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(i/l,o+1+Math.random()*n,r/l,2),t.fillStyle=s},Sn=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="left";const l=Array.from(t);let s=r;return l.forEach(t=>{e.fillText(t,s,n),o&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2}),s},Cn=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="right";const l=Array.from(t);let s=r;return l.forEach((t,r)=>{const i=l[l.length-r-1];e.fillText(i,s,n),o&&e.strokeText(i,s,n),s-=e.measureText(i).width*(2+a)/2}),s},Fn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:jn*On,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:xn*On;return!!e&&(e.clearRect(0,0,t,a),!0)},Ln=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return async(a,r,n,i)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var o,l;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(o=t[r])&&void 0!==o?o:[],u=i?null!==(l=c[i])&&void 0!==l?l:i:be;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},Tn="#000000",Nn="#000000",In=e=>{var t,a;let{ctx:r,x:n,y:i,blur:o,color:l,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:p=1,useDefault:b=!0}=e;return(b||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*p),(b||"number"===typeof i)&&(r.shadowOffsetY=(null!==i&&void 0!==i?i:0)*p),(b||"number"===typeof o)&&(r.shadowBlur=(null!==o&&void 0!==o?o:0)*p),(b||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:Nn),(b||"string"===typeof l)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:l)&&void 0!==t?t:te),(b||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:Tn),(b||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*p),()=>{(b||"number"===typeof n)&&(r.shadowOffsetX=0),(b||"number"===typeof i)&&(r.shadowOffsetY=0),(b||"number"===typeof o)&&(r.shadowBlur=0),(b||"string"===typeof c)&&(r.shadowColor=Nn),(b||"string"===typeof l)&&(r.fillStyle=te),(b||"string"===typeof d)&&(r.strokeStyle=Tn),(b||"number"===typeof m)&&(r.lineWidth=0)}},Rn={},En=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var i,o;if(!0===(null===(i=Rn[t])||void 0===i?void 0:i.ready)){const i=Rn[t].image,o="number"===typeof a?a:a(i),l="number"===typeof r?r:r(i);return e.drawImage(i,o,l),void setTimeout(()=>n(!0),0)}if(null!==(o=Rn[t])&&void 0!==o&&o.error)return void setTimeout(()=>n(!0),0);const l=Rn[t]&&(Rn[t].cache||Rn[t].ready),s=l?Rn[t].image:new Image;l||(s.src=t.startsWith("http")?t:"/ygocarder"+t),s.addEventListener("load",()=>{const i="number"===typeof a?a:a(s),o="number"===typeof r?r:r(s);e.drawImage(s,i,o),Rn[t]&&(Rn[t].ready=!0,Rn[t].error=!1),n(!0)},{once:!0}),s.addEventListener("error",()=>{Rn[t]&&(Rn[t].error=!0),n(!1)},{once:!0}),l||(Rn[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},Mn=(e,t,a)=>{const{naturalWidth:r,naturalHeight:n}=e,i="number"===typeof t?t:null===t||void 0===t?void 0:t(e),o="number"===typeof a?a:null===a||void 0===a?void 0:a(e);let l=r,s=n;return"number"!==typeof o&&"number"===typeof i?(l=i,s=l*n/r):"number"===typeof o&&"number"!==typeof i?(s=o,l=s*r/n):"number"===typeof o&&"number"===typeof i&&(l=i,s=o),{actualDH:s,actualDW:l}},zn=async(e,t,a,r,n,i,o,l,s,c,d)=>{const{cache:u=!0,internalImage:m=!0,overwrite:p=!1,crossorigin:b}=null!==d&&void 0!==d?d:{};return new Promise(e&&""!==t?d=>{var h,g;if(!0===(null===(h=Rn[t])||void 0===h?void 0:h.ready)){const u=Rn[t].image,m="number"===typeof a?a:a(u),p="number"===typeof r?r:r(u),b="number"===typeof o?o:null===o||void 0===o?void 0:o(u),h="number"===typeof l?l:null===l||void 0===l?void 0:l(u),g="number"===typeof s?s:null===s||void 0===s?void 0:s(u),f="number"===typeof c?c:null===c||void 0===c?void 0:c(u),{actualDH:v,actualDW:y}=Mn(u,n,i);return"number"===typeof b&&"number"===typeof h&&"number"===typeof g&&"number"===typeof f?e.drawImage(u,b,h,g,f,m,p,y,v):e.drawImage(u,m,p,y,v),void setTimeout(()=>d(!0),0)}if(null!==(g=Rn[t])&&void 0!==g&&g.error&&!1===p)return void setTimeout(()=>d(!0),0);const f=!p&&(Rn[t]&&(Rn[t].cache||Rn[t].ready)),v=f?Rn[t].image:new Image;b&&(v.crossOrigin=b),f||(v.src=m?"/ygocarder"+t:t),v.addEventListener("load",()=>{const u="number"===typeof a?a:a(v),m="number"===typeof r?r:r(v),p="number"===typeof o?o:null===o||void 0===o?void 0:o(v),b="number"===typeof l?l:null===l||void 0===l?void 0:l(v),h="number"===typeof s?s:null===s||void 0===s?void 0:s(v),g="number"===typeof c?c:null===c||void 0===c?void 0:c(v),{actualDH:f,actualDW:y}=Mn(v,n,i);"number"===typeof p&&"number"===typeof b&&"number"===typeof h&&"number"===typeof g?e.drawImage(v,p,b,h,g,u,m,y,f):e.drawImage(v,u,m,y,f),Rn[t]&&(Rn[t].ready=!0,Rn[t].error=!1),d(!0)},{once:!0}),v.addEventListener("error",()=>{Rn[t]&&(Rn[t].error=!0),d(!1)},{once:!0}),u&&!f&&(Rn[t]={image:v,ready:!1,error:!1,cache:!0})}:e=>e(!1))},Pn=async(e,t,a,r,n,i,o,l,s,c)=>await zn(e,"/asset/image/"+t,a,r,n,i,o,l,s,c),An=async function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const[r,n,i,o,l,s,c,d,u,m,p]=[...t],b=await zn(r,n,i,o,l,s,c,d,u,m,p);if(!1===b&&"anonymous"===(null===p||void 0===p?void 0:p.crossorigin)){const e={...p,overwrite:!0};return delete e.crossorigin,await zn(r,n,i,o,l,s,c,d,u,m,e)}return b},Dn=async(e,t,a,r,n,i,o,l)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=i;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await Pn(d,t,0,0,n,i),null!==l&&void 0!==l&&l.color&&(d.fillStyle=l.color,d.fillRect(0,0,n,i),d.globalCompositeOperation="destination-in"),await Pn(d,t,0,0,n,i),d.globalCompositeOperation="source-over";const u=In({ctx:s,...l,globalScale:o});s.drawImage(c,a,r),u()},Hn=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:i=!1,debug:o,fontStyle:l,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(Et.test(n))return{width:0,boundWidth:0};const u="tcg"===l?ra:ea,m="tcg"===l?ta:Qt,p="tcg"===l?aa:Zt,b=r.measureText(n),{width:h,actualBoundingBoxLeft:g,actualBoundingBoxRight:f}=b,v=g+f;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=i?p[n]:m[n])&&void 0!==t?t:0;if("tcg"===l){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[n])&&void 0!==w?w:0)*h),metric:b,offsetRatio:O}}let k=(null!==(a=u[n])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;Gt.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):Xt.test(n)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):Dt.test(n)?j="furigana"===c?v:Math.max(v,.7*h):$t.test(n)?j=h:Vt.test(n)?j=2*v:_t.test(n)?j=1.25*v*(i?.5:1):Kt.test(n)?j="furigana"===c?v:Math.max(v,.75*h):Ut.test(n)?j=Math.max(v,.69*h)*("creator"===c?.975:1):qt.test(n)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const C=1*h*1;return o&&console.info(`getLetterWidth ${o}`,n,b,1,1,"|",C),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:b,offsetRatio:O}},Bn=e=>{var t,a;let{ctx:r,baseline:n,edge:i,letter:o,xRatio:l,deviation:s,letterMetric:c,textDrawer:d}=e;const{boundWidth:u,metric:m=r.measureText(o),offsetRatio:p=0}=null!==c&&void 0!==c?c:{},{letterMap:b={},threshold:h=10}=null!==s&&void 0!==s?s:{},{baseLetter:g}=null!==(t=b[o])&&void 0!==t?t:{},{height:f,ascentCompensate:v,descentCompensate:y}=null!==(a=kr.get(g))&&void 0!==a?a:{},x=m.width*l,j=u?u*l:x,O=null!==d&&void 0!==d?d:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},w=(x-j)/2,k=j*p;let S=1,C="number"===typeof y?y:0,F="number"===typeof v?v:0;if(("number"===typeof y||"number"===typeof v)&&"number"===typeof f&&f>0&&l>=h){const e=2;C="number"===typeof y&&Math.abs(y)<=e?y:0,F="number"===typeof v&&Math.abs(v)<=e?v:0,S=(f+C+F)/f}r.scale(1,S),O({ctx:r,letter:o,scaledEdge:i/l-w-k,scaledBaseline:(n+C)/S}),r.scale(1,1/S)},Wn=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${oa}])|(${mt}[\\w\\W]+?${pt})|(.+?)`,"u"):new RegExp(`([${oa}])|${mt}([\\w\\W]+?)${pt}|(.+?)`,"u");return e.split(t).filter(e=>null!=e&&""!==e)},$n=(e,t,a,r,n)=>{const i=Ho(G,n),{fontSize:o,ordinalFontRatio:l=i.ordinalFontRatio,headTextFontRatio:s=i.headTextFontRatio}=a,{arabicFontRatio:c=1,font:d,furiganaFont:u,numberFont:m=d,numberFontRatio:p=1,ordinalFont:b,symbolFont:h,symbolFontRatio:g,vietnameseFont:f=d,vietnameseFontRatio:v=1}=t;let y=r.getFontInfo();let x=r.getFontInfo();let j=r.getFontInfo();let O=r.getFontInfo();let w=r.getFontInfo();let k=r.getFontInfo();let S=r.getFontInfo();return{applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];k=r.getFontInfo(),e.font=r.setFamily(u).setWeight(t?"bold":"").setSize(o*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(k.family).setWeight(k.weight).setSize(k.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;S=r.getFontInfo(),e.font=r.setSize(o*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(S.size).getFont()},applyNumberFont:()=>{y=r.getFontInfo(),e.font=r.setFamily(m).setSize(o*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(y.family).setSize(y.size).getFont()},applyOrdinalFont:()=>{w=r.getFontInfo(),e.font=r.setFamily(b).setSize(o*l).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(w.family).setSize(w.size).getFont()},applySymbolFont:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;O=r.getFontInfo();const a=o*t;return e.font=r.setFamily(h).setSize(a).getFont(),{fontSize:a}},stopApplySymbolFont:()=>{e.font=r.setFamily(O.family).setSize(O.size).getFont()},applyVietnameseFont:()=>{x=r.getFontInfo(),e.font=r.setFamily(f).setSize(o*v).getFont()},stopApplyVietnameseFont:()=>{e.font=r.setFamily(x.family).setSize(x.size).getFont()},applyArabicFont:()=>{j=r.getFontInfo(),e.font=r.setSize(o*c).getFont()},stopApplyArabicFont:()=>{e.font=r.setSize(j.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(1/t,1/a)}}},Yn=(e,t,a,r,n)=>{const i=(r-n)/2;e.beginPath(),e.arc(t+i,a-i,i,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Kn=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:i,headTextSpacing:o,gapPadding:l,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,p=n/a*d;let b=o,h=0;p<=.95?b=1*o:p<=1.175?b=o>=0?0:3*o:p<=1.56?b=o>=0?-1*o/4:3*o:(h=.66,b=o>=0?-1*o/4:2*o),(c||u>0&&u<1)&&(b=o);const g=n*(u&&!c?u:!h||c?1:h)+b*(r.length-1),f=m?0:(a-n)/r.length,v=a,y=1===t.length||2*l+g>a?"center":"space-around",x="center"===y?b:f,j="center"===y?2*l+g:v,O=c?Math.min(j,a):j,w="center"===y?(g-a)/2:0,k=Math.max(i,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,k),{gapPadding:l,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},Un=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Gn=e=>{const[t,a]=e.replace(xt,"").replace(jt,"").split(";"),r=parseFloat(a);return{content:t,width:isNaN(r)?0:r}},Xn=e=>Ct.test(e)?"rtl":"ltr",qn=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=[],r=e=>{const{body:t,head:a,tail:r}=function(e){const t=e.length;if(0===t)return{head:"",body:"",tail:""};const a={"(":")","[":"]","{":"}","\u2018":"\u2019","\u201c":"\u201d"},r=new Set(Object.values(a)),n=new Set(['"',"'"]),i=new Set,o=[];for(let d=0;d<t;d++){const t=e[d];if(a[t])o.push({char:t,index:d});else if(r.has(t)){const e=o[o.length-1];e&&a[e.char]===t&&(i.add(e.index),i.add(d),o.pop())}else if(n.has(t)){const e=o[o.length-1];e&&e.char===t?(i.add(e.index),i.add(d),o.pop()):o.push({char:t,index:d})}}const l=t=>{const o=e[t],l=/\s/.test(o),s=(void 0!==a[o]||r.has(o)||n.has(o))&&!i.has(t);return l||s};let s=0;for(;s<t&&l(s);)s++;let c=t;for(;c>s&&l(c-1);)c--;return{head:e.slice(0,s),body:e.slice(s,c),tail:e.slice(c)}}(e);return[r.split("").reverse().join(""),t,a.split("").reverse().join("")].join("")};let n=!1,i="";for(let o=0;o<e.length;o++)/\s+/.test(e[o])?n?i+=e[o]:a.push(e[o]):Ct.test(e[o])||/^[0-9]+$/.test(e[o])?(n&&(a.push(r(i)),i="",n=!1),a.push(e[o])):(n=!0,i+=e[o]);return n&&(a.push(r(i)),i="",n=!1),t&&console.info("bidirectionArrange",e,a),a};const Vn=e=>{var t;let{ctx:a,token:r,nextToken:n,xRatio:i,previousTokenGap:o=0,letterSpacing:l,lineHeight:s=0,format:c,globalScale:d,textData:u,memory:m}=e;if(!a||!r)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const p=null!==(t=null===m||void 0===m?void 0:m.image)&&void 0!==t?t:{},b=vn.getState().memory.imagePresetMap,h=Ho(G,d),g=null!==l&&void 0!==l?l:h.letterSpacing,{currentFont:f,fontData:v,fontLevel:y}=u,{metricMethod:x,headTextGapRatio:j=X.headTextGapRatio,headTextOverflow:O=X.headTextOverflow,fontStyle:w,letterOffsetMap:k={}}=v,S=v.fontList[y],{bulletWidth:C,capitalLetterRatio:F,fontSize:L,headTextSpacing:T=h.headTextSpacing,iconSymbolWidth:N=C,largeSymbolRatio:I=h.largeSymbolRatio,squareBracketRatio:R,wordLetterSpacing:E}=S,M=-.5*L,{applyArabicFont:z,stopApplyArabicFont:P,applyFuriganaFont:A,stopApplyFuriganaFont:D,applyLargerText:H,stopApplyLargerText:B,applyNumberFont:W,stopApplyNumberFont:$,applyOrdinalFont:Y,stopApplyOrdinalFont:K,applyScale:U,reverseScale:q,applySymbolFont:V,stopApplySymbolFont:_,applyVietnameseFont:J,stopApplyVietnameseFont:Q}=$n(a,v,S,f,d);let Z=r.replaceAll(new RegExp(Rt,"g"),""),ee=Z;const te=1+g/2;let ae="",re=0,ne=0,ie=!1;const oe=void 0===n;let le=null!==o&&void 0!==o?o:0,se=!1,ce=0;const de=new RegExp(lt,"g");let ue;for(;null!=(ue=de.exec(Z));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;if(ue[1]===ot){var me;let t,a,r,n,o;le=0;let l,c="";for(;null!==(t=e.exec(ue[0]));){t.index===e.lastIndex&&e.lastIndex++;const i=t[1],s=t[2];switch(i){case"src":c=s;break;case"width":a=parseInt(s);break;case"height":r=parseInt(s);break;case"offsetX":n=parseInt(s);break;case"offsetY":o=parseInt(s);break;case"name":l=s}}if(l){const e=p[l];e?(c=e.src,a="number"===typeof a?a:e.width,r="number"===typeof r?r:e.height,n="number"===typeof n?n:e.offsetX,o="number"===typeof o?o:e.offsetY):p[l]={src:c,width:a,height:r,offsetX:n,offsetY:o}}const d=c?b[c]:void 0,u=l?p[l]:void 0;re+=(null!==(me="number"===typeof a?a:d?d.width:null!==u&&void 0!==u&&u.width?null===u||void 0===u?void 0:u.width:void 0)&&void 0!==me?me:.9*s)/i,ee=ee.replace(ue[0],`${xt}img;0${jt}`)}}const pe=ee.replaceAll(new RegExp(it,"g"),"").split(Lt).filter(e=>null!=e&&""!==e);for(let G=0;G<pe.length;G++){const e=0===G,t=pe[G];if("\u29be"===t){le=0;re+=N/i*te,e&&(ce=0,ae=t[0])}else if("\u25cf"===t){le=0;re+=C/i*te,e&&(ce=0,ae=t[0])}else if(/[\xa9]/.test(t)){le=0,H(I);const r=a.measureText(t).width/i;B(),re+=r*te,e&&(ce=0,ae=t[0])}else if(Bt.test(t)){le=0,Y();const r=a.measureText(t).width/i;K(),re+=r*te,ne+=1,e&&(ce=0,ae=t[0])}else if(wt.test(t)){le=0;const{width:a,content:r}=Gn(t);re+="img"===r?a/i:a,e&&(ce=0,ae=t[0])}else if(ia.test(t)){const[r,o,l=""]=t.replaceAll(/{|}/g,"").split(/(\|+)/),s="||"===o,{totalWidth:m}=Vn({ctx:a,token:r,nextToken:n,xRatio:i,letterSpacing:g,previousTokenGap:0,format:c,textData:u,globalScale:d});A();const p=l.split("").map(e=>Hn({ctx:a,letter:e,fontStyle:w,metricMethod:"furigana",xRatio:1,globalScale:d}).boundWidth).reduce((e,t)=>e+t,0);D();const{halfGap:b,headTextWidth:h}=Kn({headText:l,headTextLetterWidth:p/i,footText:r,footTextWidth:m,headTextGap:M/i,headTextSpacing:T,gapPadding:j*L/i,fitFootText:s,sentenceXRatio:i,xRatio:"condense"===O&&r.length>1?Math.min(1,i+.1):0}),f=0===l.length?Math.max(M,m/la):b,v=f,y=f,x=Math.max(h,m),k=Un(le,v);le=y,re+=x-k,ne+=1,e&&(se=!0,ce=v,ae=r[0])}else if(St.test(t)){const r=E?1+E/2:te;a.letterSpacing=(r-1)*f.getFontInfo().sizeAsNumber+"px";let n=t,i=0;if(Ct.test(t))z(),i+=a.measureText(t).width,P();else for(;""!==n;){let e=n[0],t=n.slice(1),r=a.measureText(n).width-a.measureText(t).width;if(nt.test(e))U(R),r=a.measureText(n).width-a.measureText(t).width,q(R);else if(rt.test(e))U(F),r=a.measureText(n).width-a.measureText(t).width,q(F);else if(Ft.test(e)&&"tcg"===w)J(),r=a.measureText(n).width-a.measureText(t).width,Q();else if(Yt.test(e))W(),r=a.measureText(n).width-a.measureText(t).width,$();else if(zt.test(e)&&"tcg"===w){var be;V(null===(be=k[e])||void 0===be?void 0:be.ratio),r=a.measureText(n).width-a.measureText(t).width,_()}else r=a.measureText(n).width-a.measureText(t).width;i+=r,n=t}const o=Math.max(M,i/la),l=o;re+=i-Un(le,o),le=l,e&&(ce=o,ae=t[0]),a.letterSpacing="0px"}else if(zt.test(t)&&"tcg"===w){var he;V(null===(he=k[t])||void 0===he?void 0:he.ratio);const r=a.measureText(t).width*te;_();const n=Math.max(M,r/la),i=n;re+=r-Un(le,n),le=i,e&&(ce=n,ae=t[0])}else{const{boundWidth:r}=Hn({ctx:a,letter:t,isLastOfLine:oe,fontStyle:w,metricMethod:x,xRatio:i,globalScale:d}),n=r*te,o=Math.max(M,n/la),l=o;re+=n-Un(le,o),le=l,("ocg"===c||"tcg"===c&&/\s+/.test(t))&&!1===qt.test(t)&&(ne+=1,G===pe.length-1&&(ie=!0)),e&&(ce=o,ae=t[0]),Jt.test(t)&&(ce=0,le=0)}}return{totalWidth:re,spaceCount:ne,spaceAtEnd:ie,leftMostLetter:ae,rightGap:le,leftGap:ce,offsetable:se}},_n=e=>{var t,a,r,n;let{ctx:i,line:o,width:l,lineHeight:s,xRatio:c,format:d,isLast:u,textData:m,globalScale:p,justifyRatio:b,region:h,memory:g}=e;const f=Wn(o);let v=0,y=0,x=0,j=m,O=!1;for(let F=0,L=c;F<f.length;F++){const e=f[F],t=f[F+1];if(e===vt){L=1;continue}if(e===yt){L=c;continue}if("<i>"===e){var w,k;const e=!!Q[null!==(w=null===(k=m.fontData)||void 0===k?void 0:k.variant)&&void 0!==w?w:""]?Q[m.fontData.variant]:m.fontData;j=No(m,e),i.font=j.currentFont.setStyle("italic").getFont();continue}if(e===st){j=m,i.font=j.currentFont.setStyle("").getFont();continue}if("<b>"===e){i.font=j.currentFont.setWeight("bold").getFont();continue}if(e===ct){i.font=j.currentFont.setWeight("").getFont();continue}if(e===dt){O=!0;continue}if(e===ut){O=!1;continue}const{spaceCount:a,totalWidth:r,spaceAtEnd:n,leftGap:o,rightGap:l,leftMostLetter:u}=Vn({ctx:i,token:e,nextToken:t,xRatio:L,previousTokenGap:x/L,textData:j,format:d,globalScale:p,lineHeight:s,memory:g});x=l*L,v+=r*L+((0===F&&o>0?-1*Math.min(20*p,o*L):0)+(0===F&&Wt.test(u)?4*p*L:0)),y+=(O?0:a)-(n&&void 0===t?1:0)}const S=y>0?(l-v)/y:0,C=null!==(t=null!==(a=null===(r=ee[d])||void 0===r?void 0:r[h])&&void 0!==a?a:null===(n=ee[d])||void 0===n?void 0:n.default)&&void 0!==t?t:1;return{tokenList:f,spaceWidth:u&&S>C*p*(b/100)?0:S}},Jn=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:i,lineHeight:o,format:l,textData:s,globalScale:c,memory:d}=e;const{fontData:u,fontLevel:m}=s,{letterSpacing:p}=u.fontList[m],b=[],h=r.reduce((e,r)=>{const n=(a<=100?100:a)/1e3,u=i/n,m=Wn(r,!0);let h=1,g=[],f=0,v=0,y=0;for(let i=0,j=n;i<m.length;i++){const e=m[i],r=m[i+1];e===vt?(y+=1,j=1):e===yt&&(y-=1,j=n);let{leftMostLetter:x,totalWidth:O,rightGap:w,leftGap:k}=Vn({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:v,format:l,letterSpacing:p,textData:s,globalScale:c,lineHeight:o,memory:d});let S=O/(y>0?n:1)+(0===i?(k>0?-1*Math.min(20*c/j,k):0)+(Wt.test(x)?4*c:0):0);if(f+S>u){let n=g.join("").trim();y>0&&(n+=yt),y<0&&(n=vt+n),y=0,b.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:f});let{totalWidth:i,rightGap:u,leftGap:m}=Vn({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:0,format:l,textData:s,globalScale:c,lineHeight:o,memory:d});f=i+((m>0?-1*Math.min(20*c/j,m):0)+(Wt.test(x)?4*c:0)),v=u,g=[e],h+=1}else f+=S,v=w,g.push(e)}let x=g.join("").trim();return y>0&&(x+=yt),y<0&&(x=vt+x),y=0,b.push({line:x,effectiveMedian:a,isLast:!0,actualLineWidth:f}),e+h},0)+(null!==n&&void 0!==n?n:0);return{currentLineList:b,currentLineCount:h}},Qn=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:p,globalScale:b,xRatio:h,fontStyle:g,textWorker:f,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=f,k="condense"===y&&l.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:C,trueHeadTextWidth:F,halfGap:L,alignment:T,headTextXRatio:N}=Kn({headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*p,fitFootText:v,sentenceXRatio:h,xRatio:k}),I=F>s*h;if(0===i.length)return{trueHeadTextWidth:F,halfGap:L};const R=v?Math.min(1,s*h/F):1,E=v?R:k&&"center"===T?k:N;let M=r;O(),(v||E)&&(w(E,1),M=r/E),"center"===T?(M+=S,I?E>R&&(M+=(s*h/E-F)/2/E):M+=(s*h-F)/2):M+=C/2;for(const z of i){x();const{width:e,boundWidth:r}=Hn({ctx:t,letter:z,fontStyle:g,metricMethod:"furigana",xRatio:1,globalScale:b}),i=(e-r)/2;j(),x(m),t.fillText(z,M-i,n-a*u),j(),M+=r+C}return(v||E)&&O(),w(h,1),{trueHeadTextWidth:F,halfGap:L}},Zn=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:i="rubyForm",direction:o="ltr"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let s="";const c="ocg"===t?Pe:Ae;for(const g of l){var d;s+=null!==(d=c[g])&&void 0!==d?d:g}const u=s,m=(r?u.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${gt}$1${ft}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${bt}$1${ht}`):u).replace(/(^|[-\u2014\s(["])'/g,"rtl"===o?"$1\u2019":"$1\u2018").replace(/'/g,"rtl"===o?"\u2018":"\u2019").replace(It,"rtl"===o?"$1\u201d":"$1\u201c").replace(/"/g,"rtl"===o?"\u201c":"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,e=>{const t=De[e];return null!==t&&void 0!==t?t:e}).replaceAll(new RegExp("{{([^{}]+?)}}","g"),e=>e.replaceAll("{{",vt).replaceAll("}}",yt)).replaceAll(new RegExp("{[^{}]+?}","g"),e=>`${mt}${e}${pt}`),p=("tcg"===t||!1===n?m:m.replaceAll(new RegExp(Pt,"g"),e=>{var t;const a=null!==(t=Le[e][i])&&void 0!==t?t:Le[e].rubyForm;return`${mt}${a}${pt}`})).replaceAll(new RegExp(lt,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Ae[r])&&void 0!==a?a:r}return`${mt}${t}${pt}`}).replaceAll(new RegExp(it,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Ae[r])&&void 0!==a?a:r}return`${mt}${t}${pt}`}).replaceAll(new RegExp(kt,"gu"),e=>`${mt}${e}${pt}`).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),e=>`${mt}${e}${pt}`).replaceAll(new RegExp(Ht,"g"),e=>`${mt}${e}${pt}`).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),e=>`${mt}${e}${pt}`).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),e=>`${mt}${e}${pt}`);let b=[],h=0;for(const g of p)g===mt?(0===h&&b.push(g),h+=1):g===pt?(h-=1,0===h&&b.push(g)):b.push(g);return b.join("").replaceAll(`${ft}${pt}`,`${pt}${ft}`).replaceAll(`${ht}${pt}`,`${pt}${ht}`).replaceAll(`${mt}${gt}`,`${gt}${mt}`).replaceAll(`${mt}${bt}`,`${bt}${mt}`).replaceAll(`${vt}${pt}`,`${pt}${vt}`).replaceAll(`${mt}${yt}`,`${yt}${mt}`).replaceAll(`${bt}${ht}`,"").replaceAll(`${gt}${ft}`,"").replaceAll(`${mt}${pt}`,"")},ei=async e=>{var t;let{ctx:a,tokenList:r,trueEdge:n,trueBaseline:i,spaceWidth:o=0,lineHeight:l=0,xRatio:s,yRatio:c=1,textData:d,format:u,drawImage:m=!0,textDrawer:p,debug:b=!1,option:h,globalScale:g,memory:f,width:v=0}=e;const y=null!==f&&void 0!==f?f:{image:{}},x=null!==(t=null===y||void 0===y?void 0:y.image)&&void 0!==t?t:{},j=vn.getState().memory.imagePresetMap,{drawHeadText:O=!0,direction:w="ltr"}=null!==h&&void 0!==h?h:{},{fontLevel:k}=d,S=d.fontData,C=Ho(G,g);let F=d,L=F.currentFont,T=F.fontData,N=T.fontList[k],I=$n(a,T,N,L,g),R=0,E=[],M=0,z=0!==v&&"rtl"===w?n+v:n,P=!1;const A="rtl"===w?qn(r,b):r;a.direction=w;for(let G=s,V=0;V<A.length;V++){const{allRightSymbolOffset:e=C.allRightSymbolOffset,bulletOffset:t=C.bulletOffset,bulletWidth:r,capitalLetterRatio:n=C.capitalLetterRatio,fontLetterOffsetMap:h={},fontSize:f,headTextSpacing:v=C.headTextSpacing,iconSymbolWidth:_=r,largeSymbolRatio:J=C.largeSymbolRatio,letterSpacing:Z=C.letterSpacing,ordinalFontOffsetY:ee=C.ordinalFontOffsetY,squareBracketRatio:te=C.squareBracketRatio,wordLetterSpacing:ae}=N,re=1+Z/2,ne=i/c,{headTextFillStyle:ie,headTextBold:oe=X.headTextBold,headTextHeightRatio:le=X.headTextHeightRatio,headTextOverflow:se=X.headTextOverflow,headTextGapRatio:ce=X.headTextGapRatio,metricMethod:de,fontStyle:ue,letterDeviationMap:me={},letterOffsetMap:pe={}}=T,{stopApplyArabicFont:be,applyArabicFont:he,stopApplyFuriganaFont:ge,applyFuriganaFont:fe,stopApplyLargerText:ve,applyLargerText:ye,stopApplyNumberFont:xe,applyNumberFont:je,stopApplyOrdinalFont:Oe,applyOrdinalFont:we,applyScale:ke,reverseScale:Se,applySymbolFont:Ce,stopApplySymbolFont:Fe,applyVietnameseFont:Le,stopApplyVietnameseFont:Te,applyAsymmetricScale:Ne,resetScale:Ie}=I,Re=A[V];if(Re===vt){G=1,a.setTransform(1,0,0,1,0,0);continue}if(Re===yt){G=s,a.scale(G,1);continue}if("<i>"===Re){var D;const e=!!Q[null!==(D=null===S||void 0===S?void 0:S.variant)&&void 0!==D?D:""]?Q[S.variant]:S;F=No(d,e),L=F.currentFont,T=F.fontData,N=T.fontList[k],I=$n(a,T,N,L,g),a.font=L.setStyle("italic").getFont();continue}if(Re===st){F=d,L=F.currentFont,T=F.fontData,N=T.fontList[k],I=$n(a,T,N,L,g),a.font=L.setStyle("").getFont();continue}if("<b>"===Re){a.font=F.currentFont.setWeight("bold").getFont();continue}if(Re===ct){a.font=F.currentFont.setWeight("").getFont();continue}if(Re===dt){P=!0;continue}if(Re===ut){P=!1;continue}const Ee=-.5*G,Me=f*Ee,ze=A[V+1],Pe=A[V+2],Ae={ctx:a,xRatio:G,letterSpacing:Z,format:u,textData:d,globalScale:g,lineHeight:l},De={ctx:a,baseline:ne,xRatio:G,textDrawer:p};let He=Re;const Be=[],We=new RegExp(lt,"g");let $e,Ye=0;for(;null!=($e=We.exec(Re));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;let t=0;if($e[1]===ot){let a;M=0;let r,n,i,o,s,c="";for(;null!==(a=e.exec($e[0]));){a.index===e.lastIndex&&e.lastIndex++;const t=a[1],l=a[2];switch(t){case"src":c=l;break;case"width":r=parseInt(l);break;case"height":n=parseInt(l);break;case"offsetX":i=parseInt(l);break;case"offsetY":o=parseInt(l);break;case"name":s=l}}if(s){const e=x[s];e?(c=e.src,r="number"===typeof r?r:e.width,n="number"===typeof n?n:e.height,i="number"===typeof i?i:e.offsetX,o="number"===typeof o?o:e.offsetY):x[s]={src:c,width:r,height:n,offsetX:i,offsetY:o}}if(c&&m){let e="number"===typeof r?r:"number"===typeof n?void 0:.9*l,a=c,s=!1;const d=c?j[c]:void 0;if(d){const{height:e,width:t,offsetX:l,offsetY:s,src:c}=d;a=c,r="number"===typeof r?r:t,n="number"===typeof n?n:e,o="number"===typeof o?o:s,i="number"===typeof i?i:l}else if(!c.startsWith("https")){var H;s=!0,a="/asset/image/"+(null!==(H=at[c])&&void 0!==H?H:`${c}.png`)}t=(null!==e&&void 0!==e?e:0)/G,Be[Ye]={type:"img",isInternalSource:s,src:a,offsetX:i,offsetY:o,width:e,height:n}}}He=He.replace($e[0],`${xt}${Ye};${t}${jt}`),Ye+=1}const Ke=Re.split(Lt).filter(e=>null!=e&&""!==e),Ue=He.split(Lt).filter(e=>null!=e&&""!==e),{leftMostLetter:Ge,leftGap:Xe,rightGap:qe,totalWidth:Ve,spaceCount:_e}=Vn({token:He,nextToken:ze,previousTokenGap:R/G,memory:y,...Ae}),Je=P?0:_e,Qe=0===V?(Xe>0?-1*Math.min(20*g,Xe*G):0)+(Wt.test(Ge)?4*g:0):0;z-="rtl"===w?Ve*G+Je*o+Qe:0;let Ze=z+Qe,et=R;for(let s=0;s<Ue.length;s++){var B,W;const m=Ue[s],b=null!==(B=Ue[s+1])&&void 0!==B?B:ze,x=null!==(W=Ue[V+2])&&void 0!==W?W:Pe;if(He===vt||He===yt);else if("\u29be"===m)E.push({edge:Ze,size:_,baseline:ne}),Ze+=_*re,et=0,M=0;else if("\u25cf"===m)Ie(),Yn(a,Ze,i+t-1*g,r,na(u)*g),Ze+=r*re,Ne(G,c),et=0,M=0;else if(/[\xa9]/.test(m))Ie(),ye(J),Bn({...De,letter:m,edge:Ze*G,baseline:i+("tcg"===u?e:2*e)}),Ze+=a.measureText(m).width*re,ve(),Ne(G,c),et=0,M=0;else if(Bt.test(m))Ie(),we(),Bn({...De,letter:m,edge:Ze*G,baseline:i+ee}),Ze+=a.measureText(m).width*re,Oe(),Ne(G,c),Ze+=o,et=0,M=0;else if(wt.test(m)){const{content:e}=Gn(m),t=parseInt(e);if(!isNaN(t)&&Be[t]){const{type:e,src:r,offsetX:n,offsetY:o,width:s,height:d,isInternalSource:u}=Be[t],m=.75;Ie(),await An(a,r,Ze+(null!==n&&void 0!==n?n:0),i+(null!==o&&void 0!==o?o:0)-l*m,s,d,void 0,void 0,void 0,void 0,{cache:u,internalImage:u,crossorigin:"anonymous"}),Ze+="img"===e&&s?s:0,Ne(G,c),et=0,M=0}}else if(ia.test(m)){const[e,t,r=""]=Ke[s].replaceAll(/{|}/g,"").split(/(\|+)/),n="||"===t,{totalWidth:i}=Vn({token:e,nextToken:b,previousTokenGap:0,memory:y,...Ae});fe();const m=r.split("").map(e=>Hn({ctx:a,letter:e,fontStyle:ue,metricMethod:"furigana",xRatio:1,globalScale:g}).boundWidth).reduce((e,t)=>e+t,0);ge();const{headTextWidth:h,halfGap:j}=Kn({headText:r,headTextLetterWidth:m,footText:e,footTextWidth:i*G,headTextGap:Me,headTextSpacing:v*G,gapPadding:f*ce,fitFootText:n,sentenceXRatio:G,xRatio:"condense"===se&&e.length>1?Math.min(1,G+.1):0}),w=0===r.length?Math.max(Me,i*Ee):j,k=w,S=w,C=Un(et,S),F=S>0?S-C:0,{offsetable:L,leftGap:T}=Vn({token:b,nextToken:x,previousTokenGap:k/G,memory:y,...Ae}),N=T*G,R=Un(k,N),E=F+(k>0?k-R:0);let z=0,P=0;E>0&&N>=-2*g&&L?(z=(E+2*Math.max(N,0))/3,P=Math.max(N,0)-z):z=F;const A=Ze+(w<0?-C:Qe?-Qe:z)+M;M=P;const D=e.includes("<")?Wn(Zn(e,u,{multiline:!1,furiganaHelper:!1})):Wn(e);await ei({ctx:a,format:u,textData:d,tokenList:D,trueBaseline:ne,lineHeight:l,trueEdge:A,xRatio:G,yRatio:c,spaceWidth:0,textDrawer:p,globalScale:g,debug:!1,memory:y});const H=a.fillStyle,B=a.strokeStyle,W=a.shadowColor,$=a.shadowOffsetX,Y=a.shadowOffsetY,K=a.shadowBlur;ie&&(a.fillStyle=ie,a.strokeStyle="",a.shadowColor="",a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowBlur=0);O&&Qn({ctx:a,fontSize:f,edge:Ze-C,baseline:ne,headText:r,headTextLetterWidth:m,footText:e,footTextWidth:i,headTextGap:Me,headTextSpacing:v,headTextHeightRatio:le,headTextBold:oe,headTextGapRatio:ce,xRatio:G,fontStyle:ue,textWorker:I,fitFootText:n,headTextOverflow:se,globalScale:g}),a.fillStyle=H,a.strokeStyle=B,a.shadowColor=W,a.shadowOffsetX=$,a.shadowOffsetY=Y,a.shadowBlur=K,Ze+=Math.max(i*G,h)-C+o,et=k}else if(St.test(m)){const e=ae?1+ae/2:re;a.letterSpacing=(e-1)*L.getFontInfo().sizeAsNumber+"px";const t=a.measureText(m).width*G,r=Math.max(Me,t*Ee),i=r;Ze-=Un(et,r);let o=Ze;if(Ct.test(m))he(),p?p({ctx:a,letter:m,scaledEdge:o/G,scaledBaseline:De.baseline}):a.fillText(m,o/G,De.baseline),be();else{let e=m;for(;""!==e;){var $;let t=e[0],r=e.slice(1),i=0;const{edge:l}=null!==($=h[t])&&void 0!==$?$:{};let s=o*(null!==l&&void 0!==l?l:1);const c={...De,deviation:me.default,letter:t,edge:s};if(nt.test(t))ke(te),i=a.measureText(e).width-a.measureText(r).width,Bn({...c,edge:s/te,baseline:ne/te}),Se(te);else if(rt.test(t)){ke(n),i=a.measureText(e).width-a.measureText(r).width;const o=i>a.measureText(t).width*n?Math.round(i*(1-n))/2:0;Bn({...c,edge:s/n+o,baseline:ne/n}),Se(n)}else if(Ft.test(t)&&"tcg"===ue)Le(),i=a.measureText(e).width-a.measureText(r).width,Bn(c),Te();else if(Yt.test(t))je(),i=a.measureText(e).width-a.measureText(r).width,Bn(c),xe();else if(zt.test(t)&&"tcg"===ue){var Y,K,U;const{fontSize:n}=Ce(null===(Y=pe[t])||void 0===Y?void 0:Y.ratio);i=a.measureText(e).width-a.measureText(r).width,Bn({...c,baseline:c.baseline+n*(null!==(K=null===(U=pe[m])||void 0===U?void 0:U.baseline)&&void 0!==K?K:0)}),Fe()}else i=a.measureText(e).width-a.measureText(r).width,Bn(c);o+=i*G,e=r}}Ze=o,et=i,M=0,a.letterSpacing="0px"}else if(zt.test(m)&&"tcg"===ue){var q;const{yRatio:e=1,ratio:t,baseline:r=0,edge:n=0}=null!==(q=pe[m])&&void 0!==q?q:{},i=m,{fontSize:o}=Ce(t);a.scale(1,e);const l=a.measureText(i).width*re*G,s=Math.max(Me,l*Ee),c=s;Ze-=Un(et,s),Bn({...De,baseline:(De.baseline+o*r)/e,letter:i,edge:Ze+o*n}),Ze+=l,a.scale(1,1/e),Fe(),et=c,M=0}else{const e=m,t=Hn({ctx:a,letter:e,fontStyle:ue,metricMethod:de,isLastOfLine:void 0===b,xRatio:G,globalScale:g}),r=t.boundWidth*re*G,n=Math.max(Me,r*Ee),i=n;Ze-=Un(et,n),Bn({...De,letter:e,edge:Ze,deviation:null===me||void 0===me?void 0:me.default,letterMetric:t}),Ze+=r,("ocg"===u||"tcg"===u&&/\s+/.test(e))&&!0!==qt.test(e)&&(Ze+=o),Jt.test(e)||(et=i),M=0}}R=qe*G,b&&kn({ctx:a,baseline:ne,edge:z,width:Ve*G,xRatio:G}),z+="rtl"===w?0:Ve*G+Je*o+Qe}return{tokenEdge:z,iconPositionList:E}},ti=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:i}=e;const o=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-"),l=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-");let s=Z[l];return a&&"tcg"===t&&Q[l]&&(s=Q[l]),{fontDataKey:l,fontData:s,sizeList:je[o]}},ai=async e=>{let{ctx:t,content:a,isNormal:r=!1,fontDataKey:n="tcg",fontData:i=Z[n],textStyle:o,region:l,sizeList:s=je["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:m}=e;const{defaultSizeLevel:p,forceRelaxCondenseLimit:b,globalScale:h=1,minLine:g,justifyRatio:f}=null!==m&&void 0!==m?m:{},v="number"===typeof g?g:0,y="number"===typeof f?f:1;let x=null!==p&&void 0!==p?p:0;if(!t||!a)return x;const j=Xn(a),O=Zn(a.trim(),d,{furiganaHelper:u,direction:j}),{lineList:w,fullLineListOption:k,effectFlavorCondition:S}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=[],n=[],i=new RegExp([`^(${bt}([^${ht}]*)${ht}\\s*)`,`^(${gt}([^${ft}]*)${ft}\\s*)`].join("|"));let o=e,l="";const s=null===(t=new RegExp(Mt,"m").exec(e))||void 0===t?void 0:t[1];s&&a?(l=s.trim(),o=o.replace(s,"")):l="";let c=0;for(;o.length>0&&c<=100;){const e=i.exec(o),t=null===e||void 0===e?void 0:e[1],a=null===e||void 0===e?void 0:e[2],l=null===e||void 0===e?void 0:e[3],s=null===e||void 0===e?void 0:e[4];if(a&&t)o=o.replace(t,""),r.push({line:a,alignment:"left"}),n.push(Tt);else if(s&&l)o=o.replace(l,""),r.push({line:s,alignment:"justify"}),n.push(Tt);else{const e=/(.*)(\n|$)/.exec(o),t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];"string"===typeof t&&"string"===typeof a&&(n.push(...a.replaceAll(bt,"[").replaceAll(ht,"]").replaceAll(gt,"[[").replaceAll(ft,"]]").split("\n")),o=o.replace(t,""))}c++}return l&&n.push(Nt),{lineList:n,fullLineListOption:[...r],effectFlavorCondition:l}}(O,r);let C=0;const F=Bo(i,h),{fontList:L}=F,T=L[L.length-1].lineCount;for(;x<=L.length&&x>=0;){var N,I,R;const e=x===L.length||w.length>T,a=Math.min(L.length-1,x),i=e?{1:600,2:600,3:600}:"tcg"===d?b&&a<b?xe.relaxed:null!==(N=xe[c])&&void 0!==N?N:xe.strict:{1:800,2:800,3:800},{trueEdge:u,trueWidth:m,trueBaseline:p,trueHeightCap:g}=Ao(null!==(I=s[a])&&void 0!==I?I:s[s.length-1],h),f=r&&"tcg"===d?m-2*h:m,O=e&&"number"===typeof g,E=O?To(F,{heightCap:g,lineCount:C}):F,M=O?x:a,{font:z,fontList:P}=E,A=O?P[M]:L[a],{fontSize:D,lineHeight:H,lineCount:B}=A,W={image:{}},$=Fo();t.font=$.setWeight("").setSize(D).setFamily(z).getFont(),t.textAlign="left";const Y={fontData:E,fontLevel:M,currentFont:$};let K=[];const U=w.length>B&&"number"===typeof g?1:Co(e=>{const{currentLineList:a,currentLineCount:r}=Jn({ctx:t,median:e,paragraphList:w,additionalLineCount:0,format:d,textData:Y,width:f,lineHeight:H,globalScale:h,memory:W});return K=a,!(r>B)},200);C=Math.max(w.length,Math.max(v,K.length));const G=In({ctx:t,...o,globalScale:h}),X=null!==(R=i[`${w.length}`])&&void 0!==R?R:i[3];if(U<X&&x<L.length||v>B)x+=1;else{if(!(O&&U<X)){Fn(t);let e=p+H;const r=K.map(e=>{let{line:r,effectiveMedian:i,isLast:o}=e,s=1,c=[],u=0,m=Y;if(r===Tt){var p;const{line:e="",alignment:a}=null!==(p=k.shift())&&void 0!==p?p:{},r="justify"!==a;s=.001*Co(a=>{const{currentLineCount:r}=Jn({ctx:t,median:a,paragraphList:[e],format:d,textData:Y,width:f,lineHeight:H,globalScale:h,memory:W});return!(r>1)});const{tokenList:n,spaceWidth:i}=_n({ctx:t,line:e,xRatio:s,format:d,isLast:r,textData:Y,width:f,globalScale:h,justifyRatio:100,lineHeight:H,region:l,memory:W});c=n,u=i}else if(r===Nt){const e=Bo(Z[n],h),r=O?To(e,{heightCap:g,lineCount:Math.max(v,K.length)}):e,{fontSize:i}=O?r.fontList[M]:e.fontList[a],o=Fo();t.font=o.setSize(i).setFamily(e.font).getFont();const l={fontData:r,fontLevel:M,currentFont:o};s=.001*Co(e=>{const{currentLineCount:a}=Jn({ctx:t,median:e,paragraphList:[S],format:d,textData:l,width:f,lineHeight:H,globalScale:h,memory:W});return!(a>1)});c=Wn(S),u=0,m=l,t.font=o.setSize(E.fontList[M].fontSize).setFamily(E.font).getFont()}else{s=i/1e3;const e=r,{tokenList:a,spaceWidth:n}=_n({ctx:t,line:e,xRatio:s,format:d,isLast:o,textData:Y,width:f,globalScale:h,justifyRatio:y,lineHeight:H,region:l,memory:W});c=a,u=n}return t.setTransform(1,0,0,1,0,0),{xRatio:s,line:r,tokenList:c,spaceWidth:u,textData:m}});for(let a of r){const{xRatio:r,tokenList:n,line:i,spaceWidth:o,textData:l}=a;let s;const{currentFont:c,fontData:m}=l;t.font=c.setSize(D).setFamily(m.font).getFont(),i===Tt?(t.scale(r,1),s=ei({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:H,textData:l,format:d,globalScale:h,memory:W,width:f,option:{direction:j}})):i===Nt?(t.scale(r,1),s=ei({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,lineHeight:H,textData:l,format:d,globalScale:h,memory:W,width:f,option:{direction:j}})):(t.scale(r,1),s=ei({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:H,textData:l,format:d,globalScale:h,memory:W,width:f,option:{direction:j}})),await s,t.setTransform(1,0,0,1,0,0),e+=H}break}C+=1}G()}return x},{width:ri,finishTypeCardWidth:ni,stickerSize:ii}=s,{width:oi,height:li,topToPendulumStructure:si}=s,ci={topRight:(async()=>{const e=document.createElement("canvas");e.width=oi,e.height=li;const t=e.getContext("2d");return t?(await En(t,"mask/mask-top-right.png"),t.getImageData(0,0,oi,li).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=oi,e.height=li;const t=e.getContext("2d");return t?(await En(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,oi,li).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=oi,e.height=li;const t=e.getContext("2d");return t?(await En(t,"mask/mask-right.png"),t.getImageData(0,0,oi,li).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=oi,e.height=si;const t=e.getContext("2d");return t?(await En(t,"mask/mask-name.png"),t.getImageData(0,0,oi,si).data):null})()},di=async(e,t,a,r)=>{const{ctx:n,canvas:i}=xa(a,r);if(!n)return i;if("string"===typeof e?await En(n,e,0,0):n.drawImage(e,0,0,a,r),!t)return i;const o=n.getImageData(0,0,a,r).data;for(let l=0;l<o.length;l+=4)o[l+3]=t[l+3];return n.putImageData(new ImageData(o,a,r),0,0),i},{width:ui,height:mi}=s,pi=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:ui,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:mi;const o=null!==e&&void 0!==e?e:xa().canvas;if(!t)return o;try{const e=o.getContext("2d");e&&(e.globalCompositeOperation="source-in",e.drawImage(t,a,r,n,i))}catch(l){return o}return o},{width:bi,height:hi,topToPendulumStructure:gi,topToPendulumStructureFrame:fi,pendulumIconFrameHeight:vi,pendulumIconFrameWidth:yi,pendulumFrameHeight:xi,pendulumFrameWidth:ji,attributeSize:Oi,attributeX:wi,attributeY:ki,finishTypeCardWidth:Si,stickerSize:Ci,pendulumStructureHeight:Fi}=s,Li=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,overlayCanvas:n,globalScale:i,region:o,legacyTemplate:l,hasBackground:s,hasOverlay:c,frame:d,leftFrame:u,pendulumFrame:p,rightFrame:b,pendulumRightFrame:h,dyeList:g,effectBackground:f,pendulumEffectBackground:v,backgroundType:x,cardIcon:j,attribute:O,attributeType:w,star:k,starList:S,foil:F,pendulumSize:L,opacity:R,isLink:E,isSpeedSkill:M,isXyz:z,isPendulum:P,pendulumFrameTypeMap:A,otherFinish:D,loopFinish:H,loopArtFinish:B}=e;const W=t.getContext("2d"),{artBorder:$,nameBorder:K,body:U,name:G,pendulum:X,text:q,boundless:V}=R,{artX:_,artY:J,artFrameX:Q,artFrameY:Z,artFrameWidth:ee,artFinishX:te,artFinishY:ae,artWidth:re,artRatio:ne}=m(P,R,void 0,L),{frameType:ie,effectBoxOffsetY:oe,pendulumBoxX:le,pendulumBoxY:se,pendulumBoxWidth:ce,pendulumBoxHeight:de,pendulumBoxOffsetY:me,artlessFrameY:be}=ue[L],he=U>0||$,ge=860,fe="normal"!==F,ve=z||M?d:"normal",ye=l&&"synchro"===d?["normal","xyz","xyz","xyz","xyz"]:[ve],xe=!V&&he,je=ir({frame:d,topLeftFrame:u,topRightFrame:b,bottomLeftFrame:p,bottomRightFrame:h,effectBackground:f,pendulumEffectBackground:v},P),{topLeftFrame:Oe,topRightFrame:we,bottomLeftFrame:ke,bottomRightFrame:Se,effectBackground:Ce,pendulumEffectBackground:Fe}=je,Le={drawFrame:async()=>{if(!W)return;const e=s&&r&&"frame"===x,{ctx:t,canvas:a}=xa();await En(t,`${l?"legacy-":""}frame/frame-${Oe}.png`,0,0);const{canvas:n,ctx:o}=Da(a,g[0]);if(!e&&(Oe!==we||""!==g[0]||""!==g[1])&&o){const e=await di(`${l?"legacy-":""}frame/frame-${we}.png`,await ci.topRight,bi,hi),{canvas:t}=Da(e,g[1]);o.drawImage(t,0,0)}const{ctx:c,canvas:d}=xa();await En(c,`${l?"legacy-":""}frame-pendulum/frame-pendulum-${ke}.png`,0,0);const{canvas:u,ctx:m}=Da(d,g[2]);if(!e&&(ke!==Se||""!==g[2]||""!==g[3])&&m){m.clearRect(714,0,99,hi);const e=await di(`${l?"legacy-":""}frame/frame-${Se}.png`,await ci.bottomRight,bi,hi),{canvas:t}=Da(e,g[3]);m.drawImage(t,0,0)}if(W.globalAlpha=U/100,W.scale(i,i),P&&(null===o||void 0===o||o.clearRect(Q,Z,ee,Fi),null===m||void 0===m||m.clearRect(Q,Z,ee,Fi)),e&&o&&m){const{width:e,height:t}=r;o.globalCompositeOperation="source-atop",o.drawImage(r,0,0,e,t,0,0,bi,hi),m.globalCompositeOperation="source-atop",m.drawImage(r,0,0,e,t,0,0,bi,hi)}W.drawImage(n,0,0),W.drawImage(u,0,0),W.resetTransform(),W.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;if(!a||!e)return;const{width:t,height:r}=a;r<=0||e.drawImage(a,0,0,t,r,i*_,i*J,i*re,i*re/(t/r))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!r||!t||!s)return;const{width:n,height:o}=r;if(o<=0)return;const{artX:l,artY:c,artWidth:d,artFrameWidth:u,artFrameX:p,artFrameY:b,ratio:h,artRatio:g}=m(P,R,x,L);"frame"!==x?t.drawImage(r,0,0,n,o,i*l,i*c,i*d,i*d/h):t.drawImage(r,0,0,n,o,0,0,i*bi,i*hi);const f=null!==(e=D[3])&&void 0!==e?e:"normal";if("normal"!==f&&a){const e=Ln([f],y);await e(t,"art",async e=>Pn(t,`finish/art-finish-${e}.png`,i*p,i*b,i*u,i*u/g))}},drawAttribute:async()=>{var e;if(!W)return;W.scale(i,i);const{canvas:t,ctx:a}=xa(bi*i,(ki+Oi)*i);if("custom"===w)await An(a,O,e=>{const{naturalWidth:t,naturalHeight:a}=e;return wi-(Oi/a*t-Oi)/2},ki,void 0,Oi,void 0,void 0,void 0,void 0,{internalImage:!1,crossorigin:"anonymous"});else{var r,n,l;const e=null!==(r=null===(n=N[o])||void 0===n||null===(l=n[O])||void 0===l?void 0:l.offsetX)&&void 0!==r?r:0,t=T[O]?"tcg":I[o].fileKey;await Pn(a,`attribute/attr-${t}-${O.toLowerCase()}.png`,wi+e,ki,void 0,Oi)}const s=null!==(e=D[0])&&void 0!==e?e:"normal";if("normal"!==s){const e=Ln([s],y),{canvas:r,ctx:n}=xa(bi,ki+Oi);null===n||void 0===n||n.drawImage(t,0,0),await e(n,"art",async e=>await En(n,`finish/finish-typeart-${e}.png`,(bi-Si)/2,Ci)),a&&(a.globalCompositeOperation="source-in",a.drawImage(r,0,0)),W.drawImage(t,0,0)}else W.drawImage(t,0,0);W.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:r}=e;const n="auto"===j?er(d):j;if(!W)return;W.scale(i,i);const o=null!==(t=D[1])&&void 0!==t?t:"normal",l="normal"!==o?Ln([o],y):void 0;await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:n,star:i,starList:o,starAlignment:l="auto",style:s,onStarDraw:c,loopStarFinish:d}=e;const u=Array.isArray(o)?o:[],m=50,p=3.8;let b="custom"===r?u.length:"string"===typeof i?""===i?0:1:"number"===typeof i?i:0,h=m*b+p*(b-1);const g=145;let f="right";["rank","negative-level"].includes(r)&&(f="left"),f="auto"===l?f:l,b>12&&(f="center"),n&&"center"===f&&(b=0,h=0);const v="center"===f?(ri+h)/2:"left"===f?85.9125+h:728.775;let y=-53.8;if(t&&n&&"st"!==r){const e=50,r=In({ctx:t,...s,globalScale:a});t.textAlign="left"===f||"right"===f?f:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const i="center"===f?t.measureText(n).width/-2:"left"===f?p:-57.6;t.fillText(n,v+i,g+.9*e),t.textAlign="left",r()}const{canvas:x,ctx:j}=xa(ri*a,195*a);if(await Promise.all([...Array(b)].map(async(e,t)=>{y+=53.8;const a="custom"===r?u[b-1-t]:r,n=[v-(m+Math.ceil(y)),g],i=[v-(m+Math.ceil(y))-3,142];return Y[a]&&await En(j,"subfamily/subfamily-glow.png",...i),await En(j,`subfamily/subfamily-${a}.png`,...n),await c(n)})),t)if(d){const{canvas:e,ctx:a}=xa(ri,195);null===a||void 0===a||a.drawImage(x,0,0),await d(a,"art",async e=>await En(a,`finish/finish-typeart-${e}.png`,(ri-ni)/2,ii)),j&&(j.globalCompositeOperation="source-in",j.drawImage(e,0,0)),t.drawImage(x,0,0)}else t.drawImage(x,0,0)})({ctx:W,cardIcon:n,text:"string"===typeof k?k:null,star:k,starList:S,starAlignment:r,style:a,globalScale:i,onStarDraw:async e=>"st"===n?Promise.resolve():await H(W,"star",async t=>En(W,`finish/finish-${t}-star.png`,...e)),loopStarFinish:l}),W.resetTransform()},drawPendulumScaleIcon:async()=>{const{canvas:e,ctx:t}=xa(yi,vi);W&&t&&(await En(t,`frame-pendulum/pendulum-scale-${L}.png`,0,0),"scaleless"===A.blue&&t.clearRect(0,0,yi/2,vi),"scaleless"===A.red&&t.clearRect(yi/2,0,yi/2,vi),W.scale(i,i),W.drawImage(e,0,750),W.resetTransform())},drawStatBorder:async e=>{W&&(W.scale(i,i),await Dn(t,"frame/frame-stat-border.png",0,1070,813,20,i,e),W.resetTransform())},drawNameBackground:async()=>{if(!W)return;W.scale(i,i);const{ctx:e,canvas:t}=xa(bi,gi);await En(e,`${l?"legacy-":""}background/background-name-${Oe}.png`,0,0);const{canvas:a,ctx:r}=Da(t,g[0]);if(Oe!==we||""!==g[0]||""!==g[1]){const e=await di(`${l?"legacy-":""}background/background-name-${we}.png`,await ci.name,bi,gi),t=Da(e,g[1]).canvas;null===r||void 0===r||r.drawImage(t,0,0)}W.globalAlpha=G/100,W.drawImage(a,0,0),W.globalAlpha=1,W.resetTransform()},drawEffectBackground:async e=>{let{withPendulum:t=!1,blendWithBackground:a=!0,externalCtx:r=W}=e;if(!r)return;r.scale(i,i);const{ctx:n,canvas:o}=xa();t?await Pn(n,`${l?"legacy-":""}background/background-text-${Ce}.png`,54,884+oe,705,231,0,0+oe,705,231):await En(n,`${l?"legacy-":""}background/background-text-${Ce}.png`,54,884);const s=Da(o,g[4]).canvas;if(r.globalAlpha=(a?q:100)/100,r.drawImage(s,0,0),t){var c;const{ctx:e,canvas:t}=xa(),{exceptionFrameType:n=ie,exceptionPendulumBoxOffsetHeight:i=0}=null!==(c=pe[L][Fe])&&void 0!==c?c:{};await Pn(e,`${l?"legacy-":""}background/background-${n}-${Fe}.png`,le,se+me,ce,de,0,me+i,ce,de+i);const o=Da(t,g[5]).canvas;r.globalAlpha=(a?X:100)/100,r.drawImage(o,0,0)}r.globalAlpha=1,r.resetTransform()},drawFrameBorder:async()=>{W&&(W.scale(i,i),await En(W,`frame/frame-border-${ve}.png`,0,0),P&&!z&&await En(W,"frame/frame-border-pendulum.png",0,0),W.resetTransform())},drawNameBorder:async()=>{if(K&&W){W.scale(i,i);for(let e=0;e<ye.length;e++)await En(W,`frame/name-border-${ye[e]}.png`,0,0);W.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(he&&W){let e="";e=z||M?`frame/art-border-${d}.png`:E||["zarc","hamon","uria","raviel"].includes(d)?"frame/art-border-special.png":"frame/art-border-normal.png",W.scale(i,i),await En(W,e,60,170),W.resetTransform()}},drawPendulumBorder:async e=>{if(!W)return;const{canvas:t,ctx:a}=xa(),r=Math.round(ji/2);await Pn(a,`frame-pendulum/border-pendulum-${L}-normal-artless`+("scaleless"===A.blue?"-scaleless":"")+".png",30,fi,r,xi,0,0,r,xi),await Pn(a,`frame-pendulum/border-pendulum-${L}-normal-artless`+("scaleless"===A.red?"-scaleless":"")+".png",30+r,fi,ji-r,xi,r,0,ji-r,xi),e&&(null===a||void 0===a||a.clearRect(0,0,bi,be+fi),await En(a,`frame-pendulum/border-pendulum-${L}-normal.png`,30,fi)),W.scale(i,i),W.drawImage(t,0,0),W.resetTransform()},drawPendulumBorderFoil:async e=>{if(!W)return;if("normal"!==F||jo.test(g[6])||c){const t="normal"===F?"platinum":F,{canvas:a,ctx:r}=xa(),o=Math.round(ji/2);await Pn(r,`frame-pendulum/border-pendulum-${L}-${t}-artless`+("scaleless"===A.blue?"-scaleless":"")+".png",30,fi,o,xi,0,0,o,xi),await Pn(r,`frame-pendulum/border-pendulum-${L}-${t}-artless`+("scaleless"===A.red?"-scaleless":"")+".png",30+o,fi,ji-o,xi,o,0,ji-o,xi),e&&await En(r,`frame-pendulum/border-pendulum-${L}-${t}.png`,30,fi);const l=await pi(a,c?n:void 0),s=Da(l,g[6],void 0,void 0,"normal"!==F||c?"":"brightness(65%)").canvas;W.scale(i,i),W.drawImage(s,0,0),W.resetTransform()}},drawEffectBorder:async()=>{W&&(W.scale(i,i),fe||"speed-skill"!==ke?await En(W,"frame/effect-border-normal.png",35,ge):await En(W,"frame/effect-border-speed-skill.png",35,ge),W.resetTransform())},drawCardBorder:async()=>{if(!W)return;W.scale(i,i);const{ctx:e,canvas:t}=xa();await En(e,`frame/card-border-${F}.png`,0,0);const a=await pi(t,c?n:void 0),r=Da(a,g[6],void 0,void 0,"normal"!==F||c?"":"brightness(65%)").canvas;W.drawImage(r,0,0),W.resetTransform()},drawArtBorderFoil:async()=>{if(!W)return;W.scale(i,i);if(("normal"!==F||jo.test(g[6])||c)&&he){const e="normal"===F?"platinum":F,{ctx:t,canvas:a}=xa();await En(t,`frame/art-border-${e}.png`,60,170);const r=await pi(a,c?n:void 0),i=Da(r,g[6],void 0,void 0,"normal"!==F||c?"":"brightness(65%)").canvas;W.drawImage(i,0,0)}W.resetTransform()},drawEffectBorderFoil:async()=>{if(!W)return;W.scale(i,i);if("normal"!==F||jo.test(g[6])||c){const e="normal"===F?"platinum":F,{ctx:t,canvas:a}=xa();await En(t,`frame/effect-border-${e}.png`,35,ge);const r=await pi(a,c?n:void 0),i=Da(r,g[6],void 0,void 0,"normal"!==F||c?"":"brightness(65%)").canvas;W.drawImage(i,0,0)}W.resetTransform()},drawNameFinish:async()=>{(he||K)&&W&&(W.scale(i,i),await H(W,"name",async e=>En(W,`finish/finish-${e}-name.png`,0,0)),W.resetTransform())},drawAttributeFinish:async()=>{O!==C&&W&&(W.scale(i,i),await H(W,"attribute",async e=>En(W,`finish/finish-${e}-attribute.png`,wi,ki)),W.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;xe&&e&&(e.scale(i,i),await B(e,"art",async(t,a)=>await Pn(e,`finish/art-finish-${t}${P?a:""}.png`,te,ae,ee,ee/ne),L),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;e&&(e.scale(i,i),await H(e,"art-overlay",async t=>En(e,`finish/finish-${t}-`+(xe?"art":"unart")+"-overlay"+(P?`-pendulum-${L}`:"")+".png",te,ae)),e.resetTransform())},drawArtBorderFinish:async()=>{he&&W&&(W.scale(i,i),await H(W,"art-border",async e=>En(W,`finish/finish-${e}-art-border.png`,0,0)),W.resetTransform())},drawPendulumArtBorderFinish:async()=>{W&&(W.scale(i,i),he&&await H(W,"art-border-pendulum",e=>En(W,`finish/finish-${e}-art-border-pendulum-${L}.png`,0,0)),W.resetTransform())},drawBorderPendulumFinish:async()=>{W&&(W.scale(i,i),await H(W,"border-pendulum",async e=>{const t=`finish/finish-${e}-border-pendulum-${L}`;await Pn(W,`${t}${"scaleless"===A.blue?"-scaleless":""}.png`,0,0,bi/2,hi,0,0,bi/2,hi),await Pn(W,`${t}${"scaleless"===A.red?"-scaleless":""}.png`,0+bi/2,0,bi/2,hi,bi/2,0,bi/2,hi)}),W.resetTransform())},drawFrameFinish:async()=>{W&&(W.scale(i,i),await H(W,"frame",async e=>En(W,`finish/finish-${e}-frame${P?`-pendulum-${L}`:""}.png`,0,0)),W.resetTransform())},drawFrameBackgroundFinish:async()=>{W&&(W.scale(i,i),await H(W,"frame-background",async e=>En(W,`finish/finish-${e}-frame-background${P?"-pendulum":""}.png`,0,0)),W.resetTransform())},drawOverlayFinish:async()=>{W&&(W.scale(i,i),await H(W,"overlay",async e=>En(W,`finish/finish-${e}-overlay.png`,0,0)),W.resetTransform())},drawCardBorderFinish:async()=>{W&&(W.scale(i,i),await H(W,"card-border",async e=>En(W,`finish/finish-${e}-card-border.png`,0,0)),W.resetTransform())}};return Le},Ti=async(e,t,a,r,n,i,o,l)=>{var s,c,d;const{isSpeedSkill:u,format:m,frame:p,furiganaHelper:b,globalScale:h}=l,g=r*h,f=n*h,v=Xn(a),y=i*h,x=jr(a),j=!1;if(!t||!a)return;const{embossPitch:O,embossYaw:w,embossThickness:k,fillStyle:S,font:C,gradientAngle:F,gradientColor:L,hasEmboss:T,hasGradient:N,hasOutline:I,hasShadow:R,headTextFillStyle:E,lineColor:M,lineOffsetX:z,lineOffsetY:P,lineWidth:A,shadowBlur:D,shadowColor:H,shadowOffsetX:B,shadowOffsetY:W,pattern:$}={...re(),...o},{patternImage:Y,blendMode:K}=null!==(s=se[null!==$&&void 0!==$?$:""])&&void 0!==s?s:{};t.textAlign="left";const U=Bo({...(null!==(c=Te[C])&&void 0!==c?c:Te.Default).fontData,headTextFillStyle:E},h),X=Fo({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),q={fontLevel:0,fontData:U,currentFont:X},V=Zn(a,m,{multiline:!1,furiganaHelper:b,dictionaryType:"rubyFormName",direction:v}),_="ocg"===m?[V]:V.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),J=Fo({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),Q=J.getFont(),Z=J.setSize(e=>e*U.symbolFontRatio).setStyle("small-caps").setFamily(U.symbolFont).getFont();let ee=0,te=0;_.forEach((e,a)=>{t.font=a%2===0?Q:Z;const r=t.measureText(e.replaceAll(Ot,""));ee=Math.max(ee,r.actualBoundingBoxAscent),te=Math.max(te,r.actualBoundingBoxDescent)},0),t.font=Q;let ae=0;const ne=q.fontData.fontList[q.fontLevel].lineHeight,ie=Co(e=>{const{currentLineCount:a,currentLineList:r}=Jn({ctx:t,median:e,paragraphList:[V],format:m,textData:q,width:y,lineHeight:ne,globalScale:h});return!(a>1)&&(ae=r[0].actualLineWidth,!0)})/1e3;t.scale(ie,1);const oe=Ho(G,h),le=null!==(d=U.fontList[0].offsetY)&&void 0!==d?d:oe.offsetY,ce=Wn(V),de=ae>0&&N?((e,t,a,r,n,i,o,l)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=o+l,m=r+n/2,p=i+(l-o)/2;let b=n,h=u;"1"!==c&&"3"!==c||(b=u,h=n);const g=Math.sqrt(b**2/4+h**2/4);if(g>0){const t=90-(180*Math.asin(b/2/g)/Math.PI-d),r=Math.sin(t/180*Math.PI)*g,n=Math.sin(d/180*Math.PI)*r,i=Math.cos(d/180*Math.PI)*r;let o=n,l=i;"1"===c&&(o=i,l=-n),"2"===c&&(o=-n,l=-i),"3"===c&&(o=-i,l=n);const s=m+o,u=p-l,h=m-o,f=p+l,v=e.createLinearGradient(s,u,h,f);return a.forEach(e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)}),v}})(t,F,Eo(L),g,ae,f,ee,te):void 0;kr.test({globalScale:h,xRatio:ie,normalStyle:Q},{scale:h,xRatio:ie,setup:e=>{e.font=Q,e.resetTransform(),e.scale(ie,1)}});let ue=T&&"number"===typeof k&&k>0,me=()=>{};ue&&(me=In({ctx:t,lineWidth:k,lineColor:S,lineColorGradient:de,globalScale:h,useDefault:!1})),t.fillStyle=null!==de&&void 0!==de?de:S;const{tokenEdge:pe}=await ei({ctx:t,tokenList:ce,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:ne,format:m,globalScale:h,option:{drawHeadText:!1,direction:v},width:ae*ie,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?le:0)),ue&&t.strokeText(a,r,n-(u?le:0))},debug:j});if(me(),Y){const a=e.cloneNode(),r=a.getContext("2d");if(r){t.setTransform(1,0,0,1,0,0),r.scale(h,h),await En(r,`frame/frame-${p}.png`,0,0),await En(r,`background/background-name-${p}.png`,0,0),r.globalCompositeOperation=K,r.resetTransform();const e=t.measureText(x).actualBoundingBoxLeft;await Pn(r,`finish-name/${Y}.png`,g-e,f-ee,y+e,ee+te),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(ie,1)}}if(T){const a=10,r=_a({inputCanvas:e,lightPitch:O,lightYaw:w,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(pe+a)});r&&t.putImageData(r,0,0)}if(I){const e=In({ctx:t,lineWidth:A+(T?k:0),lineColor:M,globalScale:h,useDefault:!1});t.globalCompositeOperation="destination-over",await ei({ctx:t,tokenList:ce,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:ne,format:m,globalScale:h,option:{drawHeadText:!1,direction:v},width:ae*ie,drawImage:!1,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+z,n+P-(u?le:0))},debug:j}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(R){const a=e.cloneNode(),r=a.getContext("2d");if(r){const n=In({ctx:r,x:B,y:W,shadowColor:H,blur:D,globalScale:h,useDefault:!1});t.scale(1/ie,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}}await ei({ctx:t,tokenList:ce,xRatio:ie,yRatio:1,trueEdge:g,trueBaseline:f,textData:q,lineHeight:ne,format:m,globalScale:h,drawImage:!1,option:{direction:v},width:ae*ie,textDrawer:()=>{},debug:j});const be=re();t.setTransform(1,0,0,1,0,0),t.fillStyle=be.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},Ni={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},Ii=async e=>{var t,a;let{ctx:r,value:n,format:i,metricMethod:o,size:l,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:p}=Ao(null!==(t=null===(a=ke[i])||void 0===a?void 0:a[l])&&void 0!==t?t:ke.tcg.medium,c),b=Xn(n),h=Bo({tcg:Re,ocg:Ee}[i],c),g={...h,metricMethod:null!==o&&void 0!==o?o:h.metricMethod},{font:f}=g,v=Ni[l],y=g.fontList[v],x=Fo({defaultFamily:f,defaultSize:`${y.fontSize}px`}),j={fontLevel:v,fontData:g,currentFont:x};let O=0;const w=j.fontData.fontList[j.fontLevel].lineHeight;r.font=x.getFont(),r.textAlign="left";const k=Zn(n,i,{multiline:!1,furiganaHelper:s}),S=Co(e=>{const{currentLineCount:t,currentLineList:a}=Jn({ctx:r,median:e,paragraphList:[k],format:i,textData:j,width:p,lineHeight:w,globalScale:c});return!(t>1)&&(O=a[0].actualLineWidth,!0)})/1e3;r.scale(S,1);const C=await ei({ctx:r,tokenList:Wn(k),xRatio:S,yRatio:1,trueEdge:"left"===d?u:u-O*S,trueBaseline:m,lineHeight:w,textData:j,format:i,globalScale:c,option:{direction:b},width:O*S,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...C,xRatio:S}},{finishTypeCardWidth:Ri,width:Ei,iconHeight:Mi,iconWidth:zi}=s,Pi=function(e,t,a,r,n,i){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:te;const l=a*i,s=r*i;if(e&&t){const a=n*i;e.font=`${a}px MatrixBoldSmallCaps, Times New Roman`,e.textAlign="left",e.fillStyle=o;const r=Array.from(`${t}`);if(1===r.length){const t=r[0],n=l-e.measureText(t).width/2;e.fillText(t,"1"===t?n+2*i:n,s+a)}else if(2===r.length){const t=r[0],n=r[1],i=.825*e.measureText(t).width,o=e.measureText(n).width,c=l-i-("1"===t?0:.1*i);e.fillText(t,c,s+a),e.fillText(n,c+i-("1"===t?"1"===n?.1*e.measureText("1").width:.1*o:-.1*o),s+a)}else{let t=0;r.forEach(a=>{t+=e.measureText(a).width*("1"===a?.7:1)});let n=l-t/2;r.forEach(t=>{e.fillText(t,n,s+a),n+=e.measureText(t).width*("1"===t?.7:1)})}}},Ai=e=>{let{ctx:t,txt:a="1<st> Edition",edge:r=99,baseline:n=1150.93,baselineOffset:i=0,width:o=185,option:l={globalScale:1,stroke:!1}}=e;if(!t)return;const{stroke:s=!1,textStyle:c,globalScale:d}=null!==l&&void 0!==l?l:{},u=a.replaceAll("\\<",mt).replaceAll("\\>",pt).split(/(<|>|\d|\xaa|\xba)/g),m=r*d,p=n*d,b=i*d,h=In({ctx:t,globalScale:d,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}}),g=7.4*d,f=-1*d,v=o*d;let y=m,x=!1,j=0;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(mt,"<").replaceAll(pt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width-2*d)}const O=Math.min(v/j,1);t.scale(O,1),y=m/O,x=!1;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(mt,"<").replaceAll(pt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p-g+b),s&&t.strokeText(a,y,p-g),y+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",t.fillText(a,y,p-f+b),s&&t.strokeText(a,y,p-f),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p+b),s&&t.strokeText(a,y,p),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,p+b),s&&t.strokeText(a,y,p),y+=t.measureText(a).width-2*d)}t.resetTransform(),h()},Di=(e,t,a,r,n)=>{if(!e)return;const i=a*n,o=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const l=Sn(e,t,.075,i,o/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,Sn(e,"/",.15,l+5*n,o/1.01),e.setTransform(1,0,0,1,0,0)},Hi=(e,t,a,r,n)=>{if(!e||null==t)return;const i=a*n,o=r*n,l=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*n}px matrix`,e.fillText(t,i+l,o);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*n}px MatrixBoldSmallCaps`,e.fillText(t,i+l,o/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce((t,r,i)=>{e.font=37*n+"px MatrixBoldSmallCaps";let o=t+e.measureText(r).width;return i<a.length-1&&(e.font=37*n+"px matrix",o+=e.measureText("?").width),o},0);if(r>0){const t=Math.min(l/r,1);e.scale(t,1),a.reduce((r,i,l,s)=>{const c=s[s.length-1-l];let d=r;return e.font=37*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+o),l<a.length-1&&(e.font=34*n+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,o/1.29-1),e.setTransform(1,0,0,1,0,0)),d},i+l),e.scale(1/t,1)}}},{height:Bi,width:Wi,finishTypeCardWidth:$i,finishTypeCardHeight:Yi,stickerX:Ki,stickerY:Ui,stickerSize:Gi}=s,Xi=(e,t,a)=>{const{card:n}=un(),{exportCanvasRef:i,artworkCanvasRef:o,backgroundCanvasRef:l,overlayCanvasRef:s,frameCanvasRef:u,creatorCanvasRef:p,effectCanvasRef:b,nameCanvasRef:h,passwordCanvasRef:g,pendulumEffectCanvasRef:f,pendulumScaleCanvasRef:x,setIdCanvasRef:j,statCanvasRef:O,stickerCanvasRef:w,cardIconCanvasRef:k,typeCanvasRef:S,finishCanvasRef:F,lightboxRef:L,previewCanvasRef:T}=t,{format:N,region:I,legacyTemplate:R,hasBackground:M,backgroundType:P,overlay:A,overlayData:D,overlaySource:H,frame:B,foil:W,finish:$,artFinish:Y,otherFinish:K,opacity:U,name:X,nameStyle:q,nameStyleType:V,effectTextStyle:_,pendulumTextStyle:J,typeTextStyle:Q,statTextStyle:Z,otherTextStyle:ee,effect:ae,effectStyle:re,typeAbility:ne,isPendulum:ie,pendulumFrame:oe,pendulumRightFrame:le,pendulumEffect:se,pendulumScaleBlue:ce,pendulumScaleRed:de,pendulumStyle:me,pendulumSize:pe,leftFrame:be,rightFrame:he,dyeList:ge,atk:fe,def:ve,linkMap:ye,linkRating:xe,attribute:je,attributeType:ke,cardIcon:Fe,subFamily:Le,star:Te,starAlignment:Re,starList:Ee,setId:Pe,password:Ae,creator:De,sticker:He,isLegacyCard:Be,isFirstEdition:We,isDuelTerminalCard:$e,isSpeedCard:Ye,isLimitedEdition:Ke,cornerText:Ue,hasCornerText:Ge,firstEditionText:Xe,furiganaHelper:Ve,flag:_e}=n,Je="online"===H&&""!==A.trim()||"offline"===H&&""!==D.trim(),Qe=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},effect:{name:"effect",order:6,rerun:0,instructor:()=>Promise.resolve()},pendulumEffect:{name:"pendulumEffect",order:7,rerun:0,instructor:()=>Promise.resolve()},otherText:{name:"otherText",order:7,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:9,rerun:0,instructor:()=>Promise.resolve()}}),Ze=re.background,et=me.background,tt=re.minLine,at=me.minLine,rt=re.justifyRatio,nt=me.justifyRatio,it="auto"===oe?ie?"spell":B:oe,ot=null===re||void 0===re?void 0:re.condenseTolerant,lt=(e=>"normal"===e.frame&&Za(e))(n),st=(e=>"xyz"===e.frame)(n),ct=(e=>!0===e.isLink)(n),dt=Za(n),ut=Qa(n),{body:mt=100,boundless:pt}=U,bt=!!(mt<50||pt),ht=ar(it),{bottomRightFrame:gt}=ir({frame:B,topLeftFrame:be,topRightFrame:he,bottomLeftFrame:oe,bottomRightFrame:le,effectBackground:Ze,pendulumEffectBackground:et},ie),ft=ar(gt),vt=tr(B),{levelStyle:yt,resolvedEffectTextStyle:xt,resolvedPendulumEffectTextStyle:jt,resolvedStatTextStyle:Ot,resolvedTypeTextStyle:wt,resolvedOtherEffectTextStyle:kt}=Object(r.useMemo)(()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:i,statTextStyle:o,typeTextStyle:l}=e;const s={color:t?"#ffffff":te},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,p]=r,b=d?{...m?{y:0,blur:4,shadowColor:p}:{},color:u}:{},[h,g,f,v]=n,y=h?{...f?{y:0,blur:4,shadowColor:v}:{},color:g}:{},[x,j,O,w]=l,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,C,F,L]=o,T=S?{...F?{y:1,blur:1,shadowColor:L}:{},color:C}:{},[N,I,R,E]=i;return{levelStyle:c,resolvedEffectTextStyle:b,resolvedOtherEffectTextStyle:N?{...R?{y:0,blur:0,shadowColor:E}:{},color:I}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:T,resolvedTypeTextStyle:k}})({lightFooter:ht,lightHeader:vt,requireShadow:bt,effectTextStyle:_,pendulumTextStyle:J,otherTextStyle:ee,statTextStyle:Z,typeTextStyle:Q}),[ht,vt,bt,_,J,ee,Z,Q]),St=ge[6],Ct=Le.toUpperCase(),Ft=ne.map(e=>e.trim()).join("ocg"===N?"\uff0f":"\u200a/\u200a"),[Lt,Tt,Nt]=_e,It=!ie&&!dt&&ct&&!(fe||ve),Rt=nr(Tt,ct)&&!It,Et=Rt&&Lt,Mt=!(!fe&&!ve)||Rt||!(!ie||!Pe),zt=Ft.length>0&&("auto"===Fe?dt||ut:"st"!==Fe),Pt=!(""===(null!==ce&&void 0!==ce?ce:"")),At=!(""===(null!==de&&void 0!==de?de:"")),{isInitializing:Dt,imageChangeCount:Ht,language:Bt,globalScale:Wt}=a,$t=e&&!1===Dt,Yt=Object(r.useMemo)(()=>Ln($,v),[$]),Kt=Object(r.useMemo)(()=>Ln([Y],y),[Y]),[,Ut,Gt]=K;Object(r.useEffect)(()=>{$t&&(Qe.current.frame.rerun+=1,Qe.current.frame.instructor=async()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.getContext("2d"),a=o.current,r=l.current,n=s.current;if(!Fn(t)||!u.current)return;const i={...d(),...U},{effectBox:p,artBorder:b,body:h,text:g,boundless:f,baseFill:v,frameBorder:y}=i,x=(e,t,a,r,n,i)=>new Promise(o=>{setTimeout(()=>{e.fillStyle=M?null!==i&&void 0!==i?i:v:c,e.fillRect(t,a,r,n),o(!0)},0)}),j=h>0||b,{drawAttribute:O,drawBackground:w,drawCardArt:k,drawFrame:S,drawPendulumScaleIcon:C,drawStar:F,drawNameBackground:L,drawEffectBackground:T,drawFrameBorder:N,drawNameBorder:E,drawArtBorder:z,drawPendulumBorder:A,drawBorderPendulumFinish:D,drawEffectBorder:H,drawCardBorder:$,drawStatBorder:Y,drawAttributeFinish:G,drawArtBorderFoil:X,drawEffectBorderFoil:q,drawPendulumBorderFoil:V,drawNameFinish:_,drawArtFinish:J,drawArtOverlayFinish:Q,drawArtBorderFinish:Z,drawPendulumArtBorderFinish:ee,drawFrameFinish:te,drawFrameBackgroundFinish:ae,drawOverlayFinish:re,drawCardBorderFinish:ne}=Li({canvas:u.current,artworkCanvas:a,backgroundCanvas:r,overlayCanvas:n,globalScale:Wt,region:I,legacyTemplate:R,frame:B,leftFrame:be,pendulumFrame:oe,rightFrame:he,pendulumRightFrame:le,dyeList:ge,effectBackground:Ze,pendulumEffectBackground:et,hasBackground:M,hasOverlay:Je,backgroundType:P,attribute:je,attributeType:ke,cardIcon:Fe,star:Te,starList:Ee,foil:W,pendulumSize:pe,opacity:i,isLink:ct,isSpeedSkill:ut,isXyz:st,isPendulum:ie,pendulumFrameTypeMap:{red:At?"normal":"scaleless",blue:Pt?"normal":"scaleless"},otherFinish:K,loopFinish:Yt,loopArtFinish:Kt});await x(t,0,0,Wt*Wi,Wt*Bi);const{canvas:se,ctx:ce}=xa(Wi*Wt,Bi*Wt);a&&ce&&k(ce),await J(ce),await Q(ce);const{canvas:de,ctx:ue}=xa(Wi*Wt,Bi*Wt);if(ue&&await x(ue,0,0,Wt*Wi,Wt*Bi),r&&ue&&await w(ue,j),"strict"===P&&g<100&&ue&&p&&await T({externalCtx:ue,blendWithBackground:!1,withPendulum:ie}),!f&&ue&&ue.drawImage(se,0,0),t.drawImage(de,0,0),await S(),("frame"!==P||p)&&await $(),await ne(),ie||(f||await L(),f||!p&&M||(await T({}),await H(),await q()),await z(),await X(),await Z()),ie&&!f){const{artX:e,artY:a,artWidth:r,ratio:n}=m(ie,U,void 0,pe);t.drawImage(de,Wt*e,Wt*a,Wt*r,Wt*r/n,Wt*e,Wt*a,Wt*r,Wt*r/n),await L(),p&&await T({withPendulum:!0}),await C(),p&&(await A(j),await V(j),await ee(),j&&await D())}if(f||(await te(),await _()),j&&await ae(),f){await L(),await _(),await E(),ct&&!ie?await Z():ie&&p&&(j&&(await A(j),await V(j)),await ee());const{artX:e,artY:a,artWidth:r,ratio:n}=m(ie,U,"full",pe);y&&await N(),t.drawImage(se,Wt*e,Wt*a,Wt*r,Wt*r/n,Wt*e,Wt*a,Wt*r,Wt*r/n),y||await N(),ie?p&&(await T({withPendulum:!0}),await C(),await A(!1),await V(!1),await D()):p&&(await T({}),await H(),await q()),await te()}Mt&&await Y({color:"#000000",...Ot}),f||(await E(),await N());try{await O()}catch(me){console.error("drawAttribute error",me)}if(await G(),await F({style:yt,starAlignment:Re}),Rt&&Mt){const e=In({ctx:t,...Ot,globalScale:Wt}),a="string"===typeof xe&&xe.length>0?xe:`${Array.isArray(ye)?ye.length:0}`;await(async(e,t,a,r)=>{const n=e.getContext("2d");if(!n||"string"!==typeof t)return;await Dn(e,"link/link-text.png",...Do([600,1080,120,30],r),r,a);const i=isNaN(Number(t))?1106:1105,o=In({ctx:n,...a,globalScale:r});n.textAlign="right",n.scale(1.2,1),n.font=`bold ${24*r}px RoGSanSrfStd-Bd`,n.fillText(`${t}`,622.75*r,i*r),n.setTransform(1,0,0,1,0,0),n.textAlign="left",o()})(u.current,a,Ot,Wt),e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:i,isDuelTerminalCard:o,isSpeedCard:l,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(o){const e=n?[255,1072,175,35]:i?[151,848,216,24]:[80,843,270,30];await Dn(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...Do(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(l){const e=n?[255,1084,176.4,25]:i?[151,854,215.6,22]:[80,850,245,25];await Dn(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...Do(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:u.current,globalScale:Wt,type:ht&&!ie?"white":"black",bordered:(h<50||f)&&!ie,isDuelTerminalCard:$e,isSpeedCard:Ye,isLink:ct,isPendulum:ie,textStyle:kt}),await re()})},[$t,Wt,o,je,ke,l,s,P,Fe,ge,Ze,$,W,N,B,u,M,Je,$e,ct,ie,Ye,ut,st,be,R,yt,ht,ye,xe,Kt,Yt,U,K,et,oe,le,pe,I,kt,Ot,he,Rt,Te,Re,Ee,Mt,Pt,At,Ht]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");if(Fn(t)&&ie){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=ue[pe],i=jt.color;""!==(null!==ce&&void 0!==ce?ce:"")&&Pi(t,ce,e,r,n,Wt,i),""!==(null!==de&&void 0!==de?de:"")&&Pi(t,de,a,r,n,Wt,i)}},[$t,Wt,ie,pe,ce,de,x,jt]),Object(r.useEffect)(()=>{$t&&(Qe.current.name.rerun+=1,Qe.current.name.instructor=async()=>{var e;const t=null===(e=h.current)||void 0===e?void 0:e.getContext("2d");Fn(t)&&h.current&&await Ti(h.current,t,X,"tcg"===N?63:68,116,je===C?"tcg"===N?688:674:"tcg"===N?608:598,or({format:N,frame:B,nameStyle:q,nameStyleType:V,foil:W}),{isSpeedSkill:ut,format:N,frame:B,furiganaHelper:Ve,globalScale:Wt})})},[$t,Wt,je,W,N,B,Ve,ut,X,h,q,V]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");if(!Fn(t)||!Mt)return;const a=In({ctx:t,...Ot,globalScale:Wt}),r=Rt;if(fe){const e=((Rt?!!ve&&Et:!!ve)?168.75:0)+(r?168.75:0);Di(t,"ATK",600.85-e,1106,Wt),Hi(t,fe.trim(),677.574-e,1106.5,Wt)}if(ve&&(!Rt||Et)){const e=r?168.75:0;Di(t,"DEF",600.85-e,1106,Wt),Hi(t,ve.trim(),673.865-e,1106.5,Wt)}a()},[$t,Wt,fe,ve,Rt,dt,Et,Ot,O,Mt]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");Fn(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:i,withShadow:o,format:l,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${o?"bold":""} ${22*r}px stone-serif-regular, Times New Roman`,"ocg"===l&&(d=.145,u=-1,m=-3);const p=In({ctx:e,color:s&&!n?"#ffffff":te,shadowColor:o?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:o&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?Sn(e,t,d,(66.65+m)*r,(1105.01+u)*r):i?Cn(e,t,d,(666.56+m)*r,(872.94+u)*r):Cn(e,t,d,(728.78+m)*r,(871.5+u)*r),p()})(t,Pe,{globalScale:Wt,isLink:ct,isPendulum:ie,withShadow:bt&&!ie,format:N,lightFooter:ft,textStyle:kt})},[$t,Wt,N,ct,ie,ft,j,Pe,ut,it,bt,kt]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=g.current)||void 0===e?void 0:e.getContext("2d");Qe.current.otherText.rerun+=1,Qe.current.otherText.instructor=async()=>{if(!Fn(t))return;const e=/^[0-9]*$/.test(Ae),a=e&&ie&&ct,{rightEdge:r}=await(async e=>{var t,a;let{ctx:r,globalScale:n,value:i,format:o,alignment:l,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:p}=e;if(!Fn(r))return{rightEdge:0};const b=In({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Ao(null!==(t=Ce[o])&&void 0!==t?t:Ce.tcg,n),v=Bo(Ie[o],n),{font:y}=v,x=Zn(i,o,{multiline:!1,furiganaHelper:!1});let j={fontLevel:p,fontData:v,currentFont:Fo()},O=0;const w=j.fontData.fontList[j.fontLevel].lineHeight;let k=1e3,S=v.fontList[0];for(let T=0;T<v.fontList.length;T++){S=v.fontList[T];const e=Fo({defaultFamily:y,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",k=Co(e=>{const{currentLineCount:i,currentLineList:l}=Jn({ctx:r,median:e,paragraphList:[x],format:o,textData:t,width:f,lineHeight:w,globalScale:n});return!(i>1)&&(a=l[0].actualLineWidth,!0)}),O=a,j=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=Ho(G,n),L=await ei({ctx:r,tokenList:Wn(x),xRatio:C,yRatio:1,trueEdge:"left"===l?h+c:h-c-O*C,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+s,lineHeight:w,textData:j,format:o,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),b(),{rightEdge:L.tokenEdge}})({ctx:t,globalScale:Wt,value:Ae,lightFooter:ht,alignment:"left",edgeOffset:(a?80:0)*Wt,format:N,hasShadow:"zarc"===it||bt,textStyle:kt,fontLevel:e?0:1}),n=(Be||!e)&&!ie;if(We){const a=!ie||!!e,i=n?ct?151:89:Math.max(r/Wt+14.813,154.2)-("ocg"===N?7:0),o=n?871:1150.93,l=n?0:ut?-2:-1,s=n?ie?683:475:ct&&ie?130:0===De.trim().length?615:185;a&&Ai({ctx:t,txt:Xe,edge:i,baseline:o,baselineOffset:l,width:s,option:{stroke:!1,globalScale:Wt,textStyle:{color:ht?"#ffffff":"#000000",...kt}}})}if(Ge){const e=n?Math.max(r/Wt+14.813,154.2)-("ocg"===N?7:0):ie?65:ct?151:89,a=n?1150.93:871,i=n?ut?-2:-1:ie?"small"===pe?-100:-140:0,o=n?0===De.trim().length?615:185:ie?683:475;Ai({ctx:t,txt:Ue,edge:e,baseline:a,baselineOffset:i,width:o,option:{stroke:!1,globalScale:Wt,textStyle:{color:ht?"#ffffff":"#000000",...kt}}})}}},[$t,Wt,De,it,Ue,Xe,N,Ge,We,Be,ct,ie,ut,ht,Ae,g,pe,bt,kt]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=p.current)||void 0===e?void 0:e.getContext("2d");Qe.current.creator.rerun+=1,Qe.current.creator.instructor=async()=>{var e;if(!Fn(t))return;const a={...d(),...U},{body:r,boundless:n}=a,i=await(async e=>{var t,a;let{ctx:r,value:n,format:i,alignment:o,widthOffset:l=0,edgeOffset:s=0,baselineOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,globalScale:p}=e;if(!Fn(r))return;const b=In({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",y:0,x:0,blur:u?3:0,globalScale:p,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Ao(null!==(t=Se[i])&&void 0!==t?t:Se.tcg,p),v=f+l,y=Bo(Ne[i],p),{font:x}=y,j=Zn(n,i,{multiline:!1,furiganaHelper:!1});let O={fontLevel:0,fontData:y,currentFont:Fo()},w=0,k=1e3,S=y.fontList[0];for(let T=0;T<y.fontList.length;T++){S=y.fontList[T];const e=Fo({defaultFamily:x,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:y,currentFont:e},a=0;const n=O.fontData.fontList[O.fontLevel].lineHeight;if(r.font=e.getFont(),r.textAlign="left",k=Co(e=>{const{currentLineCount:o,currentLineList:l}=Jn({ctx:r,median:e,paragraphList:[j],format:i,textData:t,globalScale:p,width:v,lineHeight:n});return!(o>1)&&(a=l[0].actualLineWidth,!0)}),w=a,O=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=Ho(G,p),L=await ei({ctx:r,tokenList:Wn(j),xRatio:C,yRatio:1,trueEdge:"left"===o?h:h-w*C+s*p,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+c*p,lineHeight:O.fontData.fontList[O.fontLevel].lineHeight,textData:O,format:i,globalScale:p,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),b(),{leftEdge:"left"===o?h:h-w*C,...L}})({ctx:null===(e=p.current)||void 0===e?void 0:e.getContext("2d"),format:N,value:De,alignment:"right",edgeOffset:ct&&ie?-20:0,widthOffset:(ct&&ie?-120:0)*Wt,baselineOffset:ut?-2:0,hasShadow:bt,lightFooter:ft,textStyle:kt,globalScale:Wt}),o=("tcg"===N?390:350)*Wt,l=("tcg"===N?30:40)*Wt;var s;Ke&&p.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:i,isLegacyCard:o,widthOffset:l,bordered:s,textStyle:c}=e;const d=!o||n?i&&n?[220,1123,150-l/r,37]:[145,1123,240-l/r,37]:i?[151,846,216,36]:[80,843,240,40];await Dn(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Do(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:p.current,ctx:t,globalScale:Wt,type:ht&&!ie?"white":"black",bordered:(r<50||n)&&!ie,isLink:ct,isPendulum:ie,widthOffset:(null!==(s=null===i||void 0===i?void 0:i.leftEdge)&&void 0!==s?s:o)<o?l:0,isLegacyCard:Be,textStyle:kt})}},[$t,Wt,De,p,b,N,Be,Ke,ct,ie,ut,ht,ft,U,bt,kt]),Object(r.useEffect)(()=>{$t&&(Qe.current.sticker.rerun+=1,Qe.current.sticker.instructor=async()=>{var e;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");if(!Fn(t))return;const{canvas:a,ctx:r}=xa(Wi*Wt,Bi*Wt);await(async e=>{let{ctx:t,sticker:a,globalScale:r,x:n,y:i}=e;if(Fn(t)){if(a===z)return Promise.resolve();t.scale(r,r),await En(t,`sticker/sticker-${a.toLowerCase()}.png`,n,i),t.resetTransform()}})({ctx:r,sticker:He,globalScale:Wt,x:Ki,y:Ui});const n=null!==Gt&&void 0!==Gt?Gt:"normal";if("normal"!==n){const e=Ln([n],y),{canvas:i,ctx:o}=xa(Wi*Wt,Bi*Wt);o&&r&&(o.drawImage(a,0,0),o.scale(Wt,Wt),await e(o,"art",async e=>await En(o,`finish/finish-typeart-${e}.png`,Ki-$i+Gi,Ui-Yi+Gi)),r.globalCompositeOperation="source-in",r.drawImage(i,0,0),t.drawImage(a,0,0))}else t.drawImage(a,0,0)})},[$t,Wt,He,Gt,w,Kt]),Object(r.useEffect)(()=>{var e,t;if(!$t)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=S.current)||void 0===t?void 0:t.getContext("2d");Qe.current.effect.rerun+=1,Qe.current.effect.instructor=async()=>{if(!Fn(a)||!Fn(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==re&&void 0!==re?re:{},i=_[0],o=i?t:0,l=i?lt&&"auto"===n||"tcg"===N&&"italic"===n:lt,s=await ai({ctx:a,content:ae,isNormal:lt,useItalic:l,region:I,condenseTolerant:e,format:N,furiganaHelper:Ve,...ti({format:N,statInEffect:Mt,typeInEffect:zt,useItalic:l,frameType:ie&&"large"===pe?"pendulumLarge":"normal"}),textStyle:xt,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-o,globalScale:Wt,minLine:tt,justifyRatio:rt}}),c=null!==Ut&&void 0!==Ut?Ut:"normal",d="normal"!==c?Ln([c],y):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:i,frame:o,size:l,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!Fn(t))return;const m=r.length>0,p=n!==E&&"large"===l,b=r+(p?"\u29be":""),h=m?"tcg"===i?"large"===l?`[\u200a\u200a${b}\u200a\u200a]`:`[${b}]`:`\u3010${b}\u3011`:"";if(!m)return;const g={color:rr(o)&&!Qa({frame:o})&&"large"===l?"#ffffff":te,...c},f=In({ctx:t,...g,globalScale:a}),{iconPositionList:v,xRatio:y}=await Ii({ctx:t,format:i,size:l,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});f();let x="ocg"===i?-5:-1,j="ocg"===i?-3:0;if(p){const{edge:e,baseline:r}=v[0],{canvas:i,ctx:o}=xa(Ei*a,(r+zi)*a);if(await Pn(o,`subfamily/subfamily-${n.toLowerCase()}.png`,()=>e+(.175*zi*y+j)*a,()=>r-.8*zi*a+x*a,()=>zi*a,()=>Mi*a),u){const{canvas:e,ctx:n}=xa(Ei*a,(r+zi)*a);n&&o&&(n.drawImage(i,0,0),n.scale(a,a),await u(n,"art",async e=>await En(n,`finish/finish-typeart-${e}.png`,(Ei-Ri)/2,Mi)),n.resetTransform(),o.globalCompositeOperation="source-in",o.drawImage(e,0,0),t.drawImage(i,0,0))}else t.drawImage(i,0,0)}})({ctx:r,globalScale:Wt,format:N,frame:B,furiganaHelper:Ve,isMonster:dt,textStyle:wt,size:zt?ie&&"large"===pe?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:Ct,typeAbility:Ft,loopIconFinish:d})}},[$t,Wt,zt,Mt,re,ae,_,b,tt,rt,N,I,B,ie,pe,Ve,Ut,dt,lt,wt,xt,Ct,Ft,S]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");Qe.current.pendulumEffect.rerun+=1,Qe.current.pendulumEffect.instructor=async()=>{if(Fn(t)&&ie){const{upSize:e,fontStyle:a}=null!==me&&void 0!==me?me:{},r=J[0],n=r?e:0,i=!!r&&("tcg"===N&&"italic"===a),o=`${N}-${pe}`,l=we[Pt&&At?"normal":"scaleless"][pe],s=Pt&&At?l:l.map(e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(Pt?Oe:0),trueWidth:a-(Pt?Oe:0)-(At?Oe:0)}});await ai({ctx:t,content:se,isNormal:!1,useItalic:i,fontData:(i?Me:ze)[o],fontDataKey:o,region:I,textStyle:jt,sizeList:s,condenseTolerant:ot,format:N,furiganaHelper:Ve,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:Wt,minLine:at,justifyRatio:nt}})}}},[$t,Wt,ot,N,I,ie,At,Pt,pe,f,se,me,J,at,nt,Ve,jt]),Object(r.useEffect)(()=>{var e;if(!$t)return;const t=null===(e=F.current)||void 0===e?void 0:e.getContext("2d");Qe.current.overlay.rerun+=1,Qe.current.overlay.instructor=async()=>{if(Fn(t)){if(ct){const e={...d(),...U},{artBorder:a,body:r,boundless:n}=e,i=r>0||a,{ctx:o,canvas:l}=xa(Wi,Bi);if(o){await(async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:i,top:o,height:l,width:s}=qe[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[i,o,s,l];return await Pn(e,`${d}-base${n?"-full":""}.png`,...m),await Pn(e,`${d}-core.png`,...m),c?(await Pn(e,`${u}-base.png`,...m),Pn(e,`${u}-core.png`,...m)):void 0})),e.resetTransform())})(o,1,ye,ie?"pendulum":"normal",n||!i),await(async(e,t,a,r,n,i)=>{if(!e)return;const o=jo.test(i);if("normal"===a&&!o)return;const l=o?"platinum":a,s=async e=>{r?await En(e,`link/link-overlay-arrow-${l}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:a,top:r,height:i,width:o}=qe[n][t-1],s=[a,r,o,i];await Pn(e,`link/link-overlay-${t}-${l}.png`,...s)}))};if(e.scale(t,t),o){const{ctx:t,canvas:a}=xa();t&&await s(t);const{canvas:r}=Da(a,i);e.drawImage(r,0,0)}else await s(e);e.resetTransform()})(o,1,W,!1,ie?"pendulum":"normal",St);const e=Nt?["1","2","3","4","5","6","7","8","9"].filter(e=>!ye.includes(e)):[];for(let t=0;t<e.length;t++){const a=parseInt(e[t]),r=qe[ie?"pendulum":"normal"][a-1];r&&o.clearRect(r.left,r.top,r.width,r.height)}t.scale(Wt,Wt),t.drawImage(l,0,0),t.scale(1/Wt,1/Wt)}}t.scale(Wt,Wt),await Yt(t,"total-overlay",e=>En(t,`finish/finish-${e}-total-overlay.png`,0,0)),t.resetTransform()}}},[$t,Wt,F,Yt,St,X,ct,ie,ye,U,pt,W,Ot,Mt,Nt,u]);const Xt=Object(r.useRef)({}),qt=Object(r.useCallback)(async e=>{const{onError:t,onSuccess:a}=e,r=i.current,n=null===r||void 0===r?void 0:r.getContext("2d");if(r&&n){var o,l,s;Fn(n),await Promise.all(Object.values(Qe.current).sort((e,t)=>e.order-t.order).map(e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&Xt.current[r]!==a||!Xt.current[r]?(Xt.current[r]=a,t()):Promise.resolve()})).catch(e=>{console.error(e);const t="fail-to-draw-notification";Er.a.close(t),Er.a.error({key:t,message:Bt["error.draw.error.message"],description:Bt["error.draw.error.description"]})});const e=[u,h,k,x,f,S,b,O,j,g,p,w,F];let i={count:-1,error:null};for(let t=0;t<e.length;t++){const a=await Ja(e[t],n,0);"error"===a.status&&(i={count:t,error:a.data})}i.error&&t(i.error),null===(o=L.current)||void 0===o||o.draw(r),null===(l=T.current)||void 0===l||null===(s=l.getContext("2d"))||void 0===s||s.drawImage(r,0,0,r.width,r.height,0,0,Wi,Bi),i.error||a()}},[Bt,k,p,i,b,F,L,h,g,f,x,j,u,O,w,S,T]);return{drawingPipeline:Qe,onExport:qt}},qi="ygocarder-notification",Vi=Object(Fr.create)(e=>{const{condenseReminder:t,versionReminder:a,faqReminder:r,feedbackReminder:n}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(qi))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof n&&n,faqReminder:"string"!==typeof r?"":r,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e(e=>{const r={...e.memory,[t]:a};return localStorage.setItem(qi,JSON.stringify(r)),{memory:r}})},updateNotificationMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(qi,JSON.stringify(a)),{memory:a}})}}}),_i=e=>{const{targetMemory:t,updateNotification:a}=Vi(Object(fn.useShallow)(t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}}));return[t,Object(r.useCallback)(t=>a(e,t),[e,a])]};var Ji=a(196),Qi=a.n(Ji);const Zi=Object(Fr.create)(Object(Dr.subscribeWithSelector)(e=>({visible:!1,setVisible:t=>{e(e=>{let{visible:a}=e;return{visible:null==t?!a:t}})}}))),eo=(e,t,a)=>{const r=document.createElement("a"),n=window.URL.createObjectURL(t);r.download=e,r.href=n,r.dataset.downloadurl=[a,r.download,r.href].join(":");const i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(i),r.remove(),window.URL.revokeObjectURL(n)};const to={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[E]:"None"},ao=Object.entries(to).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),ro={large:"Large",medium:"Normal",small:"Small"},no=Object.entries(ro).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),io={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},oo=Object.entries(io).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),lo={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},so=Object.entries(lo).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),co={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},uo=Object.entries(co).reduce((e,t)=>{const[a,r]=t;return e[r.key]=a,e},{}),mo=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:i,effect:o,atk:l,def:s,art:c,artData:d,artSource:u,password:m,creator:p,attribute:b,attributeType:h,setId:g,pendulumEffect:f,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,isPendulum:j,linkMap:O,frame:w,externalInfo:k,nameStyle:S,nameStyleType:C,artFinish:F,finish:L}=e,T=jr(a),N=Or(o),I=Or(f),R=to[i],E="auto"===h?io[b]:io.LIGHT,M=lo[w],z="predefined"===C?uo[[S.preset,F,L.join("|")].join("-")]:"common",{pendulum:P,rarity:A,...D}=null!==k&&void 0!==k?k:{};return{isPartial:a!==T||o!==N||f!==I||void 0===R||void 0===E||void 0===M||void 0===z,result:{version:"1.0.0",name:T,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:N,atk:l,def:s,serial:m,copyright:p,attribute:null!==E&&void 0!==E?E:"None",id:g,pendulum:{enabled:j,effect:I,blue:v,red:y,boxSize:ro[x],boxSizeEnabled:!0,...P},variant:"Normal",link:{topLeft:!!O.includes("1"),topCenter:!!O.includes("2"),topRight:!!O.includes("3"),middleLeft:!!O.includes("4"),middleRight:!!O.includes("6"),bottomLeft:!!O.includes("7"),bottomCenter:!!O.includes("8"),bottomRight:!!O.includes("9")},layout:null!==M&&void 0!==M?M:"Normal",boxSize:"large"===x?"Small":"Normal",rarity:null!==z&&void 0!==z?z:A,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...D}}},po=e=>{try{const{name:a,atk:r,def:n,attribute:i,effect:o,boxSize:l,copyright:s,icon:c,id:d,image:u,layout:m,level:p,link:b,pendulum:h,rarity:g,serial:f,type:v,variant:y,version:x}=e,{red:j,blue:O,boxSize:w,boxSizeEnabled:k,effect:S,enabled:F}=null!==h&&void 0!==h?h:ye(),L=ao[c],T=oo[i],N=so[m],I="string"===typeof(t=u)&&t.startsWith("data:image/"),R=parseInt(p),M=g?co[g.toLowerCase()]:void 0;let z=void 0===L||void 0===T||void 0===N||void 0===M;const{finish:P,artFinish:A,text:D}=null!==M&&void 0!==M?M:{},H=D?oe[D]:null,B=da();return{isPartial:z,result:{...B,finish:null!==P&&void 0!==P?P:[],name:a,nameStyleType:D?"predefined":"auto",nameStyle:H?H.value:re(),atk:"number"===typeof r?`${r}`:r,def:"number"===typeof n?`${n}`:n,attribute:null!==T&&void 0!==T?T:C,effect:o,creator:s,subFamily:null!==L&&void 0!==L?L:E,setId:d,frame:null!==N&&void 0!==N?N:"normal",star:`${R}`===p&&R<=13?R:p,typeAbility:v.split("/").map(e=>e.trim()),art:I?"":u,artFit:!0,artData:I?u:"",artSource:I?"offline":"online",artFinish:null!==A&&void 0!==A?A:"normal",isLink:"link"===N&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter(e=>"string"===typeof e),isPendulum:F,pendulumScaleBlue:O,pendulumScaleRed:j,pendulumEffect:S,pendulumSize:no[w],password:f,externalInfo:{version:x,variant:y,boxSize:l,rarity:g,pendulum:{boxSize:w,boxSizeEnabled:k}}}}}catch(a){return{isPartial:!0,result:sa()}}var t},bo=e=>{try{return"id"in e&&"frameType"in e&&"ygoprodeck_url"in e}catch(t){return console.error(t),!1}},ho={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[E]:"None"},go=Object.entries(ho).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),fo=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),vo=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),yo={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},xo=e=>{try{var t,a,r;const{atk:n,attribute:i,card_images:o,card_sets:l,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:p,name:b,pend_desc:h,race:g,scale:f,typeline:v,linkval:y,linkmarkers:x}=e,j=go[g],O=fo[i],[w,k]=vo[d].split("_"),S=null!==(t=p?p.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",F=S.split("\n"),L=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==w&&void 0!==w?w:"normal"})&&F.length>1?[`[${F[0].replaceAll("\r","")}]`,...F.slice(1)].join("\n"):S,T=h?h.replaceAll(/^''|''$/g,""):"",N=o[0].image_url_cropped,I=da();return{isPartial:!1,result:{...I,name:b,atk:n<0||null==n?"?":`${n}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==O&&void 0!==O?O:C,effect:L,subFamily:null!==j&&void 0!==j?j:E,setId:l&&null!==(a=null===(r=l[l.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==w&&void 0!==w?w:"normal",star:"link"===d&&y?y:m,typeAbility:v||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:N,artSource:"online",artCrop:{...I.artCrop,y:0},isLink:"link"===w&&Array.isArray(x),linkMap:(null!==x&&void 0!==x?x:[]).map(e=>yo[e]),isPendulum:"pendulum"===k,pendulumScaleBlue:null==f?"0":`${f}`,pendulumScaleRed:null==f?"0":`${f}`,pendulumEffect:T,password:`${u}`.padStart(8,"0"),creator:He.tcg[0]}}}catch(n){return(e=>{var t;const a={version:null!==(t="2.4.8")?t:"0.0.0",setting:mn.getState(),href:window.location.href};Sr.c(e,{extra:a}),console.error(e)})(n),{isPartial:!0,result:sa()}}},jo=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,Oo=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const i=e.replace("#","");let o=[0,0,0,1];var a,r,n;if(3===i.length||4===i.length)o=[parseInt(`${i[0]}${i[0]}`,16),parseInt(`${i[1]}${i[1]}`,16),parseInt(`${i[2]}${i[2]}`,16),parseInt(`${null!==(a=i[3])&&void 0!==a?a:"f"}${null!==(r=i[3])&&void 0!==r?r:"f"}`,16)];if(6===i.length||8===i.length)o=[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16),parseInt(null!==(n=i.slice(6,8))&&void 0!==n?n:"ff",16)];return o.map(e=>isNaN(e)?255:e).slice(0,t?4:3)}catch(i){return[0,0,0,1].slice(0,t?4:3)}};function wo(e){if("number"!==typeof e)return"00";const t=Math.max(0,Math.min(e,255)).toString(16);return 1===t.length?"0"+t:t}const ko=e=>{var t,a,r;return(299*(null!==(t=e[0])&&void 0!==t?t:0)+587*(null!==(a=e[1])&&void 0!==a?a:0)+114*(null!==(r=e[2])&&void 0!==r?r:0))/1e3>=128?"#000000":"#FFFFFF"},So=1e3,Co=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=So;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:So,a=t,r=a,n=30,i=100;const o=()=>n=-1;return{reset:function(){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=o,a=o,n=30,i=100,r=o},searchDown:()=>(a-=i,n-=1,a),reverseSearch:()=>(1===i?o():(a+=i,i/=10,a-=i),Math.min(a,t)),finish:o,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===So)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,So));return n!==a&&e(n),n},Fo=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let i=t,o=a,l="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[o,i,l,c].filter(e=>""!==e).join(" ")}, Arial`,getFontInfo:()=>({style:o,size:l,family:c,sizeAsNumber:s,weight:i}),setWeight(e){return i=e,this},setStyle(e){return o=e,this},setSize(e){const t="function"===typeof e?e(s):e;return l="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},Lo=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},To=(e,t)=>({...e,fontList:[...e.fontList,Lo(t)]}),No=(e,t)=>{const{fontData:a,fontLevel:r}=e,n=Fo(),i={...t,fontList:[...a.fontList]};return n.setSize(i.fontList[r].fontSize).setFamily(i.font).getFont(),{fontData:i,fontLevel:r,currentFont:n}},Io=()=>Eo(re().gradientColor),Ro=e=>(null!==e&&void 0!==e?e:[]).map(e=>{let{color:t,offset:a}=e;return`${a}|${t}`}).join(","),Eo=e=>e?e.split(",").map((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}}):Eo(re().gradientColor),Mo=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)(()=>{t(e=>e+1)},[]),e]},zo=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:i,onCancel:o,onKeyPress:l}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===l||void 0===l?void 0:l(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e+1)%a)):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e-1)%a)):"Enter"===e.key||" "===e.key?i():"Escape"===e.key&&(null===o||void 0===o||o()))}}},Po=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a},Ao=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:i}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof i?i*t:i}},Do=(e,t)=>e.map(e=>e*t),Ho=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:i,headTextSpacing:o,iconSymbolWidth:l,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:i*t,headTextSpacing:"number"===typeof o?o*t:void 0,iconSymbolWidth:"number"===typeof l?l*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},Bo=(e,t)=>({...e,fontList:e.fontList.map(e=>Ho(e,t))}),Wo=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},$o=(()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e})();function Yo(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var Ko=a(618),Uo=a(101);const Go=b.b.button`
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
`;var Xo=a(633),qo=a(634),Vo=a(635),_o=a(197),Jo=a.n(_o);const Qo=Object(b.b)(Ko.a)`
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
`,Zo=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[i,o]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(Qo,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||i},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{o(!0);const e=await Promise.all(c.map(e=>{let{file:t,name:a}=e;return new Promise((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:i}=n;if("string"!==typeof i)return void r("Not a valid result");let o=JSON.parse(i);gr(o)&&(o=mr(o));const s=fr(o);let c=null;if(c=l?s?mo(cn(o).card).result:o:s?o:mr(cn(o).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)})})),t=new Jo.a;e.forEach(e=>{let{blob:a,name:r}=e;t.file(r,a)});const a=await t.generateAsync({type:"blob"});eo("convert-result.zip",a,"application/zip"),o(!1),n(!1)}catch(e){console.error(e),Er.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),o(!1)}},children:[Object(h.jsxs)("div",{className:"controller",children:[Object(h.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:Yo("toggle-button",l?"reverse":""),onClick:()=>s(e=>!e),children:Object(h.jsx)(Xo.a,{})})}),Object(h.jsx)("label",{children:"Yugioh Carder"})]}),Object(h.jsxs)("div",{className:"file-panel",children:[Object(h.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(h.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],i&&Object(h.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(h.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(h.jsx)("div",{className:"file-list",children:c.map(e=>{let{name:t}=e;return Object(h.jsxs)("div",{className:"file-entry",children:[Object(h.jsx)("div",{children:t}),Object(h.jsx)("div",{className:"file-action",children:Object(h.jsx)(qo.a,{disabled:i,onClick:()=>d(e=>e.filter(e=>e.name!==t))})})]},t)})})]})]}),Object(h.jsx)(Uo.a,{overlay:t["converter.header.label"],children:Object(h.jsx)(Go,{className:"batch-converter",onClick:()=>n(!0),children:Object(h.jsx)(Vo.a,{})})})]})};var el=a(79),tl=a(628),al=a(654),rl=a(616);class nl extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){Sr.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var il=a(202);const ol="controls-wrapper",ll=b.b.div`
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
`,sl=e=>{let{children:t,...a}=e;return Object(h.jsxs)(ll,{className:"angle-picker-container",children:[t,Object(h.jsx)(il.AnglePicker,{...a})]})};var cl=a(641),dl=a(642),ul=a(643),ml=a(644),pl=a(645),bl=a(600),hl=a(636);const gl=Object(b.b)(hl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,fl=e=>{let{overlayClassName:t,iconProps:a,icon:r=gl,...n}=e;const{className:i,...o}=null!==a&&void 0!==a?a:{};return Object(h.jsx)(bl.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...n,children:Object(h.jsx)(r,{className:["explanation-icon",null!==i&&void 0!==i?i:""].join(" "),...o})})};var vl=a(638),yl=a(626);const xl=b.b.span`
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
`,jl=e=>{let{size:t="md",active:a=!1,Icon:r,children:n,onClick:i,iconProps:o,tooltipProps:l,containerProps:s}=e;const{className:c,onClick:d,onKeyDown:u,...m}=null!==s&&void 0!==s?s:{};return Object(h.jsx)(Uo.a,{title:null,...l,children:Object(h.jsx)(xl,{$size:t,$active:a,tabIndex:0,...m,onClick:e=>{null===i||void 0===i||i(),null===d||void 0===d||d(e)},onKeyDown:e=>{null===u||void 0===u||u(e),"Enter"===e.key&&(null===i||void 0===i||i())},className:["icon-button",null!==c&&void 0!==c?c:""].join(" "),$freeSize:!r,children:Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsx)(r,{...o}),n]})})})},Ol=b.b.div`
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
`,wl=b.a`
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
`,kl=b.b.div`
    ${wl}
`,Sl=(e,t)=>{let{onChange:a,value:n,optionList:i,children:o,suffix:l,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),p=i.length;return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}})),Object(h.jsxs)(kl,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[o&&Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:o}),Object(h.jsx)("div",{ref:m,className:"radio-train-input-group",...zo({setFocus:u,optionLength:p,onTrigger:()=>{const e=i[d];e&&a(e.value)}}),children:i.map((e,t)=>{let{value:r,props:i,label:o,tooltipProps:l}=e;const{className:s}=null!==i&&void 0!==i?i:{},u=c?r===n:`${r}`===`${n}`;return Object(h.jsx)(Uo.a,{overlay:null,...l,children:Object(h.jsxs)("label",{...i,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(h.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(h.jsx)("span",{className:"ant-radio-button-inner"})}),Object(h.jsx)("span",{className:"label",children:o})]})},r)})}),l]})},Cl=Object(r.forwardRef)(Sl);var Fl=a(623);const Ll=b.b.div`
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
`;var Tl=a(203),Nl=a.n(Tl),Il=a(637);const Rl=b.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,El=b.a`
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
`,Ml=Object(b.b)(Rl)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    ${El}
`,zl=e=>{let{data:t,children:a,disabled:n,overlay:i=Object(h.jsx)(Il.a,{}),container:o}=e;const[l,s]=Object(r.useState)(!1);return Object(h.jsxs)(o,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,Nl()("number"===typeof a?`${a}`:a),s(!0),setTimeout(()=>{s(!1)},1e3)},children:[l?Object(h.jsx)("div",{className:"copiable-overlay",children:i}):null,a]})},Pl=e=>{let{data:t,children:a}=e;return Object(h.jsx)(zl,{data:t,container:Ml,children:a})},Al=b.b.div`
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
`,Dl=Object(b.b)(Al)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Hl=e=>{let{content:t,children:a,...r}=e;return t?Object(h.jsx)(bl.a,{content:t,...r,children:a}):Object(h.jsx)(h.Fragment,{children:a})},Bl=b.b.button`
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
`,Wl=b.b.div`
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
`,$l=b.b.div`
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
`,Yl=b.b.div`
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
`,Kl=b.b.div`
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
`,Ul=e=>{let{width:t,height:a,warning:r=!1,...n}=e;return Object(h.jsxs)(Kl,{$warning:r,...n,children:[Object(h.jsx)("span",{className:"left-part",children:t}),Object(h.jsx)("span",{children:"\xd7"}),Object(h.jsx)("span",{className:"right-part",children:a})]})},Gl=b.c`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,Xl=b.b.div`
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
    ${b.a`animation: ${Gl} 6s linear infinite;`}
`,ql=Object(b.b)(Fl.a)`
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
`,Vl=b.b.div`
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
`,_l=b.c`
    to {
        transform: rotate(360deg);
    }
`,Jl=b.b.div`
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
`,Ql=Object(b.b)(Ol)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":b.a`animation: ${_l} 12s linear infinite;`}}
        }
    }
`,Zl=()=>{const e=Pr(),{setting:t,updateSetting:a}=mn(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}}),{allowHotkey:r,exportFormat:n,reduceMotionColor:i,resolution:o,showCreativeOption:l,showExtraDecorativeOption:s,slidingType:c}=t;return Object(h.jsx)(Ql,{className:"setting-button",$softMode:i,children:Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(h.jsxs)(Jl,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(yl.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(yl.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(yl.a,{checked:l,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(Uo.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(h.jsx)(yl.a,{checked:r,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(h.jsx)(Cl,{className:"resolution-list",value:`${o[0]}x${o[1]}`,optionList:ha.map(t=>{let{height:a,width:r,label:n,scale:i}=t;return{value:`${r}x${a}`,label:i>1?Object(h.jsx)(bl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(h.jsx)(Dl,{children:e["setting.option.resolution.warning"]}),children:Object(h.jsx)(Ul,{width:r,height:a,warning:!0})}):Object(h.jsx)(Ul,{width:r,height:a})}}),onChange:e=>{const t=ba[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(h.jsx)(Cl,{value:n,optionList:ga,onChange:e=>{a({exportFormat:e})}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.sliding-type.label"]}),Object(h.jsx)(Cl,{value:c,optionList:fa(e),onChange:e=>{a({slidingType:e})}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(vl.a,{}),Object(h.jsx)("label",{children:e["setting.button.label"]})]})})})};var es=a(624);const ts=b.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,as=b.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #2a2a2a inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?b.a`animation: 2s linear 350ms 4 ${ts};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,rs=Object(b.b)(as)`
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
`,ns=b.b.div`
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
`,is=b.b.li`
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
`,os=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),ls=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{n(!0);const e=await os.getLog();n(!1),t(e)})()},[]),0!==e.length||a?a?Object(h.jsx)("div",{children:"Loading changelog..."}):Object(h.jsx)("div",{children:e.map((e,t)=>{let{logList:a,version:r}=e;return Object(h.jsxs)("div",{className:"log-section",children:[Object(h.jsx)("b",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("ul",{children:a.map((e,t)=>{let{content:a,image:n}=e;return Object(h.jsxs)(is,{children:[Object(h.jsx)("div",{className:"content",children:a}),n&&Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,title:"Click to open in new tab",children:Object(h.jsx)("img",{src:n,alt:`version-${r}-illust`})})]},t)})})]},`${r}-${t}`)})}):Object(h.jsx)("div",{children:"No changelogs"})},ss=Object(b.b)(Dl)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,cs=Object(r.memo)(()=>{var e;const[t,a]=Object(r.useState)(!1),[n,i]=_i("versionReminder");return Object(r.useEffect)(()=>{if(n){var e;const t=null!==(e="2.4.8")?e:"0.0.0",r=n;i("2.4.8"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[i,o,l]=String(t).split(".").map(Number);return a!==i?a>i:r!==o?r>o:n>l})(t,r)&&(a(!0),setTimeout(()=>{a(!1)},8e3))}},[i,n]),Object(h.jsx)(bl.a,{placement:"bottom",content:Object(h.jsx)(ss,{children:Object(h.jsx)(ls,{})}),children:Object(h.jsxs)(as,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.4.8")?e:"unknown"]})})});var ds=a(614);const us="faq-button",ms=Object(b.b)(ns)`
    text-align: center;
    blockquote,
    .answer {
        text-align: left;
    }
    img {
        max-height: 400px;
    }
`,ps=e=>{let{image:t,author:a,question:r,children:n}=e;return Object(h.jsxs)(ms,{children:[Object(h.jsxs)("blockquote",{children:[a&&Object(h.jsx)("label",{children:a}),Object(h.jsx)("div",{className:"question",children:r})]}),Object(h.jsx)("div",{className:"answer",children:n}),t&&Object(h.jsx)("img",{className:"image",src:t,alt:"answer preview"})]})},bs=()=>{const[e,t]=Object(r.useState)(!1),[a,n]=Object(r.useState)(!1),[i,o]=_i("faqReminder"),[l,s]=_i("feedbackReminder");Object(r.useEffect)(()=>{const e="18/04/2026";i!==e&&(o(e),n(!0),setTimeout(()=>{n(!1)},8e3))},[o,i]),Object(r.useEffect)(()=>{!0!==l&&(s(!0),n(!0),Er.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{n(!1)}}))},[l,s]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(rs,{id:us,$animating:a,onClick:()=>t(e=>!e),children:"FAQ"}),Object(h.jsx)(Ko.a,{width:600,visible:e,onCancel:()=>t(!1),footer:null,children:Object(h.jsxs)(ds.a,{children:[Object(h.jsxs)(ds.a.TabPane,{tab:"Feedbacks",children:[Object(h.jsx)("div",{children:Object(h.jsx)("i",{children:"Solved or stale (4 weeks of inactive) feedbacks are removed."})}),Object(h.jsx)("br",{}),[{author:"Anonymous at April 18, 2026",question:"I want to remove the pendulum effect frame, as it's already available on the overframe card",answer:"Do you want to be able to remove the effect background as well? I may give it a try."},{author:"Anonymous at April 14, 2026",question:"Hey it's me again, i see that the issue wasnt fixed, ik if the issue lasts more than 2 weeks then you are unable to fix it, but pls reconsider.\nheres a screenshot for reference",answer:"I have update the formatting in card name and effects to adapt with Arabic, you may try it now."},{author:"Anonymous at April 12, 2026",question:"Hi Lauqerm, have you fix the issue of G and S leeters\ud83d\ude2d\ud83d\ude2d i think the height issue cameback maybe came from the shrinkage of the attribute icons in the name box \ud83e\udd14\ud83e\udd14"},{author:"Anonymous at April 09, 2026",question:"The S and G letter now are lower than other letters Lauqerm, i tried on Slifer the Sky Dragon, its same as the N letter issue before you fixed for me \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",answer:"Can you provide some images / screenshots to help me visualize the issue better? It's pretty weird because I never adjust the letter S so it very unlikely that it bugged out right now when it is not before."},{author:"Anonymous at April 09, 2026",question:"Hello, its me again.\nThe same issue is back with G letter again Lauqerm, please fix it \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",answer:"Oh man \ud83d\ude2d."},{author:"Anonymous at April 09, 2026",question:"\"From my tests, the condense option is still saved correctly when you export the card, then re-import it later or refresh the page.\"\n\nI don't know what to say. It simply is not stored as a saved toggle feature whenever I import the card list. It's a very minor thing and a peeve at worst. I cannot say it's exclusively a me thing, but if you say it should work that way, then it just doesn't do it for me.",answer:"I see. I have tried apply a fix for this, hopefully this will resolve the issue. But if it still persists, could you send me a part of your card list as well? (not the whole thing, just the first few lines are enough). It will help me a lot to investigate the problem. Thanks for your help."},{author:"Anonymous at April 09, 2026",question:"I'm an Arab and love Yu-Gi-Oh, but your card maker doesn't support the Arabic language and I really want to make Arabic Yu-Gi-Oh cards becuz my friends can't understand english to read the cards I maker"},{author:"Anonymous at April 09, 2026",question:'If I wasn\'t clear before, the Arabic text is supposed to look like this\n \u0623\u0647\u0644\u0627\u060c \u0627\u0646\u0627 \u0627\u062a\u062d\u062f\u062b \u0627\u0644\u0639\u0631\u0628\u064a\u0629\nInstead it looks like this\n\u0629 \u064a \u0628 \u0631 \u0644 \u0623  \u062b \u062f \u062d \u062a \u0627\u060c \u0623 \u0644 \u0647 \u0627 \nPlease fix this\n(Btw the translation is "Hello, I speak Arabic")',answer:"I will try my best. But I don't know Arabic and its writing system so it may take sometime \ud83d\ude2d. Thanks for your patience."},{author:"Anonymous at April 05, 2026",question:"OCG Series 1 and 2 only button from change setting.",answer:"Sorry, I do not have access to the template for older series."},{author:"Anonymous at April 05, 2026",question:"Any reason in particular why the Condense tet in the paragraph style tab isn't saved or at least defaulted like almost everything else is? It's pretty convenient as a feature, or rather I've yet to encounter the use case where less condensation is better.\n\nWhat isn't convenient however is how you have to toggle it each time when your load your save file.",answer:"Hi there, I'm not sure if I fully understand your problem. Do you mean the condense option is not saved when you export the card? From my tests, the condense option is still saved correctly when you export the card, then re-import it later or refresh the page. If you could provide the steps to reproduce the issue (and explain what you expect to happen), it would help me resolve the problem."},{author:"Lukas at March 27, 2026",question:"Thanks to the new Utopia overframe card I noticed that the attributes of both spells/ traps aren't aligned like the monsters attributes. Is that intentional or an error? (I reported before without the screenshot, sorry).",answer:"Hi there, I'm not sure I fully understand your feedback, as all attributes (both monsters and spells/traps) appear to be aligned the same way from what I can see. Compared to the Utopia Overframe card, the attribute is slightly larger and misaligned however, which I have already made some updates to it."},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm\nI forgot to mention that the letter "q" also has a similar height issue compared to other letters like the letter "n" while it is in a long card\'s name \ud83d\ude05\ud83d\ude05\ud83d\ude05'},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm, \nThank you for fixing the height issue of the letter "i" before, but now the issue is back with the letter "n" while it is shifted further down the line compared to the other letters in some long card\'s name such as "Gandora-G the Dragon of Destruction", "Dark Magician the Magician of Black Magic", "Dark Magician Girl the Magician\'s Apprentice".... \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d',answer:"My bad, I have updated the caliberation rule for the letter (again) \ud83d\ude2d\ud83d\ude2d."},{author:"Anonymous at March 19, 2026",question:"I am not sure if this is even feasible, but I think it'd be mighty convenient if there was a feature that allowed you to display the submitted card art mirrored in the card display, to save the bother of mirroring it beforehand.",answer:"Hi, now card artwork / background will allow you to flip the image horizontally / vertically.",image:"https://i.postimg.cc/fT68pVrZ/Screenshot-2026-03-19-at-11-44-37.png"},{author:"RedSupernovaDragon at March 17, 2026",question:'Hello again, I have some news that could help you in fixing the "name box shrinking issue". I tried to see if it was a common problem on similar sites; I typed the whole alphabet and the numbers on YGOPro and found out that it does not have such a defect: letters in the name box shrink normally, keeping their ratio and heights. As your site is objectively superior to YGOpro in terms of card making, image quality and UI, I was wondering if you could try something more to fix the issue, particularly on pc but mobile version would be nice too.\nNamely, you could do 3 things:\n1. Taking inspiration by how YGOpro managed to code the compression. To be clear, this is *not* an incitation to plagiarism, just a small comparison; maybe DevTools can show you how they coded that specific feature, so you can see if there is any substantial difference in the lines. IDK, but there must be a reason why their carder displays the right text at any length.\n2. You could simply try a different font file. I assume you uploaded fonts on this site, perhaps the rendering problem is due to the otf / ttf / whatever file itself.\n3. Finally, you could focus on mastering the manipulation of curved strokes, what is currently difficult for you. You managed to fix basically every other letter, at least on PC; on mobile there are still some issues even with E and I, but that may be related to my browser.\n\nI regard this issue as much more fundamental than it seems, since it affects basically every card with a (not so) long name created with your site.\nThere has to be a solution, otherwise it would be really sad to keep this defect. I think that details like this matter, even more than other features. A realistic proxy can have some defects that are not visibile at first glance; those defects do not include a letter O that goes Over the top in the name box, which is one of the first things you read on a card.\n\nI tried to give some suggestions, hoping that my words didn\'t sound too bad or out of place. And I also hope that this problem will be solved sooner or later.\nLooking forward to the next updates!',answer:"Thanks, I know how irritating this problem is, and believe me, I've spent quite a while trying to figure something out over the past years. The cause is very clear, rendering the font in large size causes the problem to appear when they are condensed. I just can't find a way to effectively solve it.\nI appreciate your suggestions though, here is what I have done:\n1. Unfortunately, all other card makers (as far as I know) are closed-source, which means I basically cannot access their codebase to see what they are doing at all.\n2. I did try the font from YGOPro card maker and ygocardmaker.net before, but to no avail.\n3. This is my only tactic right now: keep throwing fixes at the wall to see what sticks \ud83d\ude2d.\nAnyway, I have issued another experimental fix for now. If you encounter the problem again (which unfortunately is likely), please attach an image of the app (the report dialog has a screencapture function). It may help me a bit when evaluating any future fixes. Appreciate your help."},{author:"MaSaHo at March 11, 2026",question:"I recently noticed that Yu-Gi-Oh cards have had several small reformulations throughout the life of the game, which they call \u201cSeries\u201d, and your model is equivalent to Series 10 (the current one). Do you have plans to add the older series layouts at some point in the future?",answer:'Hi there, unfortunately that will require access to old series templates as well as a list of changes made over time, which I currently do not have. The app can only support a few limited options (for example, "small" and "large" pendulum frames, or the old position for the "1st Edition" text), but that is about it.'},{author:"Seamornf at March 09, 2026",question:'Hi! Love the work. I found that because traps in portuguese have the longest name of any attribute currently, the last "A" is getting the shadow from the name border.',answer:"I have updated the issue, thanks for your report."},{author:"RedSupernovaDragon at March 07, 2026",question:'Well, it\'s really unlucky for the name box to have those shrinking issues that you cannot fix at the moment. At least the problem was noticed.\nAside from this issue, there is a (very) small UI update you could make: in the frame panel, "Ritual" is currently placed after "Link"; a better position would be between "Effect" and "Fusion", since\n1) Rituals are Main Deck monsters;\n2) they were introduced early along with Fusions;\n3) this "R, F, S, X" order is the most natural, and it\'s found in some cards like the Firewall upgrades..',answer:"Yeah, I'm not the font maker so I can only have limited control over the font rendering. About your recommendation for the ritual frame, it should have been updated now."},{author:"RedSupernovaDragon at March 05, 2026",question:'Thank you very much for making the paragraph box static.\nWonderful fix for the letters! Unfortunately, there are other similar height issue: on "o"/"O", "q", and some of the numbers (namely 1, 2, and 0). When compression is necessary to fit longer names in the box, all of these characters are taller than they should be to fit on a common line.\nIt\'s a really frustrating issue, I know, especially since the font is supposed to be Regular. Thanks in advance for your working on this issue.',answer:"Right now, it is quite difficult for me to handle characters with curved strokes (like the letters O, Q, and the numbers 0, 3, 6, 9), because they actually protrude slightly beyond the normal top/bottom baselines as far as I can investigate. I might double check the bases of numbers 1 and 2, and that may be it. Sorry for the inconvenience."},{author:"RedSupernovaDragon at March 04, 2026",question:'Hello again, about the "i"/"I" issue, I tried to write the whole alphabet (upper and lower case) in the name box and I have to report the same issue for "E" and "N", at least from pc version.',answer:"Now this is really getting out of hand \ud83d\ude2d. I have issued another fix for this."},{author:"RedSupernovaDragon at March 03, 2026",question:"Hello! First off, thank you very much for this cardmaker, I'm new to custom cards but this  carder has already become my favourite.\nI'm using the site on pc, and noticed that when you open the \"Paragraph Style\" section, its width does not stay fixed like the other settings, but it slides to the right until it eventually stops. I was wondering if you could fix this by making it static, since it's kind of difficult to select the things you want while they're moving.\nThank you again for your work!",answer:"The paragraph panel should have fixed width now."},{author:"Yugiohfann at March 03, 2026",question:'Thank you so much for fixing the "i" letter for me, but it seems the issue has been fixed in the Android version, and the PC version still has the "i" letter sometimes positioned higher and sometimes lower \ud83d\ude2d\ud83d\ude2d.',answer:"It's okay, at least something is working \ud83d\ude2d. If possible, please also send me the report from the app on the bugged browser (it seems you send most of your reports from Chrome on a mobile device). The report will include additional information about your browser that may help me investigate further. Sorry for the inconvenience."},{author:"Yugiohfann at March 02, 2026",question:'I use 813x1185 resolution, can you adjust the height of the letter "i" so that it\'s the same height as the other letters in the name box? Thank you.',answer:"I have updated the font a bit, if this does not improve your issue I'm sorry I cannot do much more to help."},{author:"MaSaHo at March 01, 2026",question:"Is there a plan to update the foil border? I mean, adding the rainbow pattern of the new Overframe cards, as well as the assets from the Grand Master version?",answer:"I would love to but right now I am entirely depend on other artists to provide the assets for those first, so I cannot give a clear ETA on that."},{author:"LigerrFanArt at Feb 24, 2026",question:'Hello,\nI noticed a formatting issue with italic text in the effect box (Normal Monster text).\nWhen a line starts directly with a parenthesis, for example:\n"(This card is always treated as an "Archfiend" card.)"\nthe italic formatting does not activate properly.\nTo make the italics work, I have to manually add a space before the "(" at the beginning of the line. However, adding this space causes the text to shift\nslightly and the font size to shrink, as the entire text box appears to be recalculated and resized.\nIt seems like the issue may be related to how the parser handles lines beginning with a parenthesis.\nJust reporting it in case it helps improve the tool.\nThanks for your work!\n\nLigerrFanArt',answer:"I have fixed the issue T.T"},{author:"TheTonyB at Feb 23, 2026",question:"Spell/Trap icon finishes not working with high-res cards.",answer:"I have fixed the issue."},{author:"El Kebabini at Feb 17, 2026",question:"The german Attribute for Dark Finsternis is wrong. It's too condensed.",answer:"I am sorry but that is the only one that I have access to, I will update it if I can but right now it's really hard to get access to attributes for other languages."},{author:"Long at Feb 16, 2026",question:"Why did you change the font color? The default text used to be black, but now it\u2019s gray, and I don\u2019t think this change was necessary.",answer:"I am experimenting with a new color based on high-res official proxy from Konami site, so it may get further adjusted to fit the nature of the app. But you can always change it to pure black in Effect > Text Style. Sorry for the inconvenience."},{author:"LigerrFanArt at Feb 14, 2026",question:"Hi,\nWhen I disable \u201cbest effort render\u201d to get the rainbow effect on my card, it disables ATK / and DEF / in your menu.\nWould it be possible to add a new section next to Foil, with a Rainbow version alongside Gold and Platinum \u2014 unless you\u2019re already working on that?\nI had to manually add ATK / and DEF / in Photoshop myself.\n\nThx\nLigerrFanArt",answer:"Now best effort render option will no longer affect ATK / DEF texts (always display as long as there are values).\nFor rainbow foil unfortunately I am entirely dependent on the assets I can find, and currently I have no access to the frame assets needed for it."},{author:"Anonymous at Jan 25, 2026",question:"I was thinking it would be nice to have the Rainbow border similar to the Prismatic SR OCG Proxies and the Maximum Gold Premium Rare ones",answer:"I would love to do that, unfortunately I have no access to the frame assets needed."},{author:"Gio at Jan 05, 2026",question:"In Trap cards, the words for the card type are very close together because there isn\u2019t enough spacing between the letters (this doesn\u2019t happen in Spell cards). Also, the letter A is slightly taller than the other letters (I haven\u2019t checked if this happens with other letters as well), and the words look a bit uneven.\nIn Monster cards, the line that is right above ATK and DEF is thicker than in the original cards.\nRegards!",answer:"I have updated the font and spacing, as well as reduced the line thickness for ATK/DEF separator for a bit."},{author:"TheTonyB at Jan 04, 2026",question:'Hey, it\'s me again.\n\nSorry. I noticed the positioning of the edition text is off and the font is slightly wrong. \n\nWhen comparing to a real card, the edition text is too much to the right, it should be shifted to the left closer to the passcode.\n\nAbout the font being slightly off, It\'s more noticeable in the Italian, Portuguese and Spanish presets of the edition text. Compared to my real PT cards, the "\xaa" is wrong, it should be higher and be bold and underlined (it\'s not a problem with the text of the presets, it seems to be the font itself).\n\nLooking closer the font actually seems to be different from the real cards. It looks like the shapes of the letters is slightly different. As examples, the top stroke of the loop of the "d" in the real card seems to match the height of the gap betweeen the base of the "i" and the dot, the current font has that stroke matching the height of the base of the "i" right below the gap, making the "d" appear "taller". The shape of the serif of the "c" also looks diferent, but that\'s about what I could notice comparing this to the microscopic text on an actual TCG card\n\nAnd maybe, I\'m not so sure, but in the real cards the font looks slightly thicker too? I might be wrong about this though as it might be the lighting in my room.\n\nThanks in advance!',answer:'I have updated the edition text offset and fix the ordinal letter "\xaa". As for the font itself, currently there is not much I could do right now as finding another font that matches perfectly is quite hard (at least from what I have access to), so I must leave it as is.'},{author:"TheTonyB at Dec 30, 2025",question:"Hey, Lauqerm! Thanks for adding the Portuguese atributes and custom edition text! (Korean coming soon? :))\n\nAnyway, I have another suggestion:\nSince there's already a legacy placement option in adition to regular placement of the edition text, what if we could have two different edition texts simultaneously, one in each position?\n\nI imagine this may be more complicated to implement, but it would open up more customization potential. I don't mind if this feature isn't added though. I can just edit the card in photoshop if I want both texts, this is more of a suggestion than a feature request.\n\nAs always, keep up the good work. Your card maker is absolutely GOATED.",answer:"I have received an asset donation for PT attributes; hopefully, there will be another one for KR soon.\nI have also added an option for text below the image's left corner. Choosing legacy display will simply switch the positions between it and the edition text."},{author:"Anonymous at Dec 30, 2025",question:"I\u2019d like to use the original attributes in Spanish, where the word extends beyond the limits of the sphere, but when I upload my custom attribute the icon gets compressed and flattened. I designed the attributes from the original Spanish cards in case you\u2019d like to replace them. I\u2019ve also noticed that the Effect Monster card color is a slightly darker shade than the original ones. Here is the link with the attribute icons and the different card frame types, in case you\u2019d like to review it. Thank you, and congratulations\u2014this is the best Card Maker I\u2019ve tried: \nhttps://we.tl/t-niKReItUvF\n\n*If you would like me to modify the attributes to a specific resolution or dimensions, or help you with others languages you can write to me at giohesse7@gmail.com",answer:"Custom attribute will now respect the image's ratio when resizing so it no longer get stretched, I also tried some heuristic approach to ensure that it will be at correct position to avoid more complicated manual placement.\nFor the effect monster background though currently I must leave it as is, but thanks for your report."},{author:"Anonymous at Dec 26, 2025",question:"There is an error with the vowel accent marks in Spanish (e.g., \xe1, \xe9, \xed, \xf3, \xfa). It appears that the font does not support the Spanish language, as the accented characters look completely different from the original font. Could you please fix the font for this language?",answer:"I have tweaked the font a bit, hopefully it looks better now."},{author:"Ebrahim at Dec 24, 2025",question:'An option to maybe reduce the size of the "Edition" section similarly the LIMITED EDITION tag.',answer:"It is a bit cumbersome so for now I will just limit the section's maximum width, the text should auto compress if it is too long."},{author:"Blake at Dec 23, 2025",question:"Did you use boundless cause I\u2019m trying to make the object the image go over the card.",answer:"Yeah boundless layout is the main option to use. But the hard thing here is that you need a transparent artwork to combine with it to make a proper overframe card, which the app cannot help.\nIn any case I plan to readjust the option a bit for more clarity, and also add sample cards for easy demonstration."},{author:"Ebrahim at Dec 23, 2025",question:"when I click on the xyz background template the 1st Edition text is in black not white and it's hard to see please fix immediately.",answer:"It's done, the text should display properly now."},{author:"A-Rex at Dec 22, 2025",question:"Me gustar\xeda poder colocar 1a edici\xf3n\nPero en su lugar aparece 1st Edition\nQuisiera poder poner manualmente eso."},{author:"Ralph at Dec 22, 2025",question:"quisiera poner la marca 1a edici\xf3n\npero en su lugar pone 1st edition\nme gustar\xeda poder al menos colocarla manualmente.",answer:"I have implemented a customizable edition text with predefined options, you may try it now."},{author:"Blake at Dec 21, 2025",question:"When are you going to be adding the overframe rare?",answer:"With Layout options the app is already able to create cards with extended art (see attached image), but I will need to tweak some behaviors so it looks more correct.\nGrandmaster Rare however is a different story, as it use an entirely different set of layers and I can only wait for talented artists to extract them.",image:"https://i.imgur.com/a6ZlmEg.png"},{author:"Blake at Dec 18, 2025",question:"I can\u2019t download the card with a new attribute."},{author:"Blake at Dec 18, 2025",question:"It won\u2019t let me upload the card with a custom attribute.",answer:"Hi there, the app will now correctly show what is happening. In short, this is a security feature of your browser (not the app) that protect you from potential dangers of the image link, so you must manually download the image."},{author:"TOVYA at Dec 13, 2025",question:"Ch\xe0o b\u1ea1n, b\u1ea1n c\xf3 th\u1ec3 th\xeam v\xe0o h\u01b0\u1edbng d\u1eabn c\xe1ch ch\u1ea1y project n\xe0y c\u1ee7a b\u1ea1n b\u1eb1ng Docker trong README.md kh\xf4ng \xe1?",answer:"Done nha."},{author:"Anonymous User at Dec 13, 2025",question:"would it be possible to add the ability to upload custom attribute icons?",answer:"Right now I can only support using external link for attribute, so you can upload your custom attribute icon to an image hosting service (e.g., imgur) and use the link in the attribute input box.",image:"https://i.postimg.cc/cJMFW3M1/image.png"},{author:"TheTonyB at Dec 12, 2025",question:'I noticed Korean and Portuguese are missing from Attributes languages. Can you add those? Specially portuguese which is my main language.\nCould you also add other language options to the "1st Edition"/"Limited Edition" text or allow for a custom text?\nThanks and keep up the great work!',answer:"Hi there, unfortunately I have no access to those language sprites, so I cannot add them at the moment (somehow Yugipedia does not have attributes in Portugese and Korean even though they have the rest of official supported languages)."},{author:"Anonymous User at Dec 04, 2025",question:"Hello! I've noticed there's a problem with these 3 new cards :\nMagnet Warrior \u03a3\uff0d\nMagnet Warrior \u03a3\uff0b\nMagnet Warrior \u03a9+\n\nI've noticed that Konami is using new characters, and unfortunately, they're not displaying correctly for creating cards. Could you please fix this?\nThanks in advance.\nLigerrFanArt",answer:"Because those cards do not have an offical TCG version yet, so I will just import OCG font for this case."},{author:"I have assets to donate! at Oct 23, 2025",question:"Konami's new Genesys card searcher initially had high-resolution renders of all cards. I snagged a few before they \"fixed\" it (now their images are low-res again...) and used them to correct all the card frames, bevels, level stars, text boxes, fonts, and even text colors. I'm talking major corrections that took me hours since I'm not very efficient in Photoshop.\nAt the very least, your current Spell and Synchro frames need updating. Not only are the colors off, but there's actually an artifactual defect running across the entire right edge that you inherited from 9558able's frames (it's actually on all of them, but most visible on the Spell frame).\nAs far as I can tell, my updated assets now produce the most accurate proxies anywhere. I would like to donate them! I don't see a way to email you, but please email me at *******88@gmail.com if you're interested.\nI can reply with specifics and send you some comparisons.",answer:"Hi there, thanks for your generosity. I have already emailed you at Oct 24, hopefully I can make some good use out of it."},{author:"Anonymous User at Oct 08, 2025",question:"Missed you so much bro its been a month",answer:"Me too, me too."},{author:"Anonymous User at Sep 28, 2025",question:"For some reason, the border changes depending on the card type even though it's set to Default",answer:"It seems like the card border is not loaded yet, so it exposes the underlying frame. I have replicate your card but does not see the same issue, does the problem still persist?"},{author:"Anonymous User at Sep 26, 2025",question:"hi m8. luv your work. i was thinking about two things. maybe 1 option for anime cards like in Vrains. another option to adjust the colour and saturation of the card frame. thks again for your work",answer:"Hi there, currently I do not have time needed for new templates, but for the color option, have you checking out the Advanced Layout option? If will allow you to change current frame's color at will, which seem suitable for your use-case."},{author:"Elttaest the Master of Duels at Sep 18, 2025",question:"Hi. Love your work, just wondering - with Elttaes, the Master of Duels and Dragon of Illumination, Sanctuary's Shield, shouldn't we have enough data to make Rush Duel cards in English as well? The font seems the same in both English and Japanese. And the card name seems the same used in TCG, although I can't really make out what the Japanese font is. Sorry again for this. Just curious. Thanks for your time",answer:"Hi there, you are right that both cards can be used as a template for Rush Duel cards, but the main problem before the template itself is that currently I don't have enough resources for such project right now, so I can't promise anything at this moment. I will keep this in mind and see if I can do it in the future."},{author:"Armando Giordano at Sep 06, 2025",question:'Thank you for your quick response and for your astonishing work with the Carder. Yes, I am using an iPad and a phone, and, with both devices, when I click on the Download button, it just shows "Saving..." for a second, then no Download starts. I am now on a computer and it works great with left click and "Save as", though it would be nice to be able to use it on mobile.'},{author:"Armando Giordano at Sep 06, 2025",question:"Sorry for second report in a row! I noticed you asked me specific questions. 1 The App does NOT freeze when trying to download on iPad and Android phone. Just no download starts. 2 The problem was immediately experienced because I discovered the Carder just yesterday.",answer:"Now it's a bit strange; usually, if the export process encounters an error, an explicit message will be displayed. In this case, if the download process is already running but no files are downloaded, it could be that your mobile browser is blocking the automatic download due to some advance security settings. All mobile devices I have tested so far do not exhibit the same issue. I will try to investigate this further, but chances are I won't be able to resolve it if I cannot reproduce the issue. Sorry for the inconvenience."},{author:"Armando Giordano at Sep 06, 2025",question:"Hello! I am loving your work. I hope my issue is not because of ignorance, but it seems like it's not possible to download cards as images.",answer:"Hi there, based on the report it seems that you are using an iPad. I don't have an iPad to test right now, but could you please provide me some more information?\n1. When you click the Download button, does anything happen? Does the app freeze or it just not doing anything?\n2. Is the problem just appear recently, or it never worked in the first place?",image:"https://i.postimg.cc/Y2fjyvV2/image.png"},{author:"Rush Duel at Jun 22, 2025",question:"This card maker is amazing! Have you ever consider doing a rush duel section as well?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."}].map((e,t)=>{let{author:a,question:r,answer:n,image:i}=e;return Object(h.jsx)(ps,{author:a,question:r,image:i,children:n},t)})]},"feedback"),Object(h.jsx)(ds.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'},{question:"Will you make another version for Rush Duel cards?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."}].map((e,t)=>{let{question:a,answer:r}=e;return Object(h.jsx)(ps,{question:a,children:r},t)})},"faq")]})})]})};var hs=a(601),gs=a(639);const fs=b.b.div`
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
`,vs=e=>{let{language:t,imagePreset:a,onDelete:r,onEdit:n}=e;const{src:i,name:o,width:l,height:s,offsetX:c,offsetY:d}=a,u="number"===typeof c?c>0?`+${c}`:c:"0",m="number"===typeof d?d>0?`+${d}`:d:"0";return Object(h.jsxs)(fs,{children:[Object(h.jsx)("div",{className:"image-preview",children:Object(h.jsx)("img",{src:i,alt:o})}),Object(h.jsxs)("div",{children:[null!==l&&void 0!==l?l:"auto"," \xd7 ",null!==s&&void 0!==s?s:"auto","number"===typeof c||"number"===typeof d?` (${u}, ${m})`:null]}),Object(h.jsxs)("div",{className:"image-info",children:[Object(h.jsx)("div",{className:"image-name",children:Object(h.jsx)(zl,{data:o,container:Ml,children:o})}),r&&Object(h.jsx)(hs.a,{title:t["generic.delete.label"],okText:t["generic.yes.label"],cancelText:t["generic.no.label"],onConfirm:()=>r(),children:Object(h.jsx)(qo.a,{})}),n&&Object(h.jsx)(gs.a,{onClick:()=>n()})]})]})};var ys=a(640);const xs=b.b.div`
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
`,js=140,Os=b.b.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: var(--spacing-xs);
    align-items: center;
    .canvas-container {
        width: ${js}px;
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
`,ws=e=>{let{frameInfo:t,presetContent:a,active:n=!1,language:i,onOverwrite:o,onActive:l,onDelete:s}=e;const{format:c,foil:d}=un(Object(fn.useShallow)(e=>{let{card:{format:t,foil:a}}=e;return{format:t,foil:a}})),u=Object(r.useRef)(null),{name:m,labelBackgroundColor:p,labelBackgroundImage:b}=null!==t&&void 0!==t?t:{},g=null!==m&&void 0!==m?m:"effect";return Object(r.useEffect)(()=>{const e=u.current,t=null===e||void 0===e?void 0:e.getContext("2d");if(e&&t){t.clearRect(0,0,js,30);const{font:r}=a;Ti(e,t,"OCG"===r?"{\u30ab\u30fc\u30c9\u540d|\u304b\u30fc\u3069\u3081\u3044}":"Card Name","OCG"===r?65:12,"OCG"===r?65:60,350,or({foil:d,format:c,frame:g,nameStyle:a,nameStyleType:"custom"}),{frame:g,format:c,furiganaHelper:!1,globalScale:.4,isSpeedSkill:!0})}},[d,c,g,a]),Object(h.jsxs)(Os,{className:Yo("preset-option",n?"menu-active":""),children:[Object(h.jsx)(xs,{className:Yo("canvas-container",l?"":"menu-off"),onClick:l,style:{background:p,backgroundImage:b},children:Object(h.jsx)("canvas",{ref:u,width:js,height:30})}),Object(h.jsxs)("div",{className:"preset-option-action",children:[s&&Object(h.jsx)(hs.a,{title:i["generic.delete.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>s(),children:Object(h.jsx)(qo.a,{})}),o&&Object(h.jsx)(hs.a,{title:i["generic.overwrite.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>o(),children:Object(h.jsx)(ys.a,{})})]})]})},ks=b.b.div`
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
`,Ss=e=>{var t;let{tabIndex:a=0,width:r,height:n,baseLayoutState:i,resolvedLayoutState:o,isPendulum:l,activeLayout:s,dyeList:c,foil:d,onClick:u,onLayoutSelect:m,language:p,vertical:b=!1}=e;return Object(h.jsxs)(ks,{$width:r,$height:n,$layoutHoverable:!!m,$hoverable:!!u,onClick:u,className:Yo("card-layout-container",b?"is-vertical":"is-horizontal"),children:[[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map(e=>{var t;let{className:n,key:d}=e;const u=o[d],p=null==k[d]?void 0:c[k[d]];if(!u)return null;if(!l&&"pendulumEffectBackground"===d)return null;const{labelBackgroundColor:b,labelBackgroundImage:g}=null!==(t=Ke[u])&&void 0!==t?t:{};return Object(h.jsx)("button",{...a<0?{}:{tabIndex:a},className:Yo(n,d===s?"active":"","auto"===(null===i||void 0===i?void 0:i[d])?"unmodified":""),onClick:()=>null===m||void 0===m?void 0:m(d),style:g?{backgroundImage:g}:{backgroundColor:b},children:Object(h.jsx)("div",{className:"overlay-patch",style:p?{boxShadow:`0 0 0 ${Math.round(r/16)}px ${p} inset`}:{}})},d)}),Object(h.jsx)("button",{...a<0?{}:{tabIndex:a},className:Yo("card-layout float-layout foil","foil"===s?"active":""),onClick:()=>null===m||void 0===m?void 0:m("foil"),style:{boxShadow:`0 0 0 2px ${jo.test(c[k.foil])?c[k.foil]:null===(t=O[d])||void 0===t?void 0:t.color} inset`},children:p["input.foil.label"]})]})},Cs=b.b.div`
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
`,Fs=e=>{let{onActive:t,onDelete:a,onOverwrite:r,language:n,...i}=e;return Object(h.jsxs)(Cs,{className:"frame-preset-option",children:[Object(h.jsx)("div",{className:"preview-container",onClick:t,children:Object(h.jsx)(Ss,{...i,language:n})}),Object(h.jsxs)("div",{className:"layout-preset-option-action",children:[a&&Object(h.jsx)(hs.a,{title:n["generic.delete.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:a,children:Object(h.jsx)(qo.a,{})}),r&&Object(h.jsx)(hs.a,{title:n["generic.overwrite.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:()=>r(),children:Object(h.jsx)(ys.a,{})})]})]})};var Ls=a(615),Ts=a(619),Ns=a(602),Is=a(603),Rs=a(627);const Es=Object(b.b)(Ls.a.Item)`
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
`,Ms=Object(r.forwardRef)((e,t)=>{let{onSubmit:a,onEdit:n,language:i}=e;const[o]=Ls.a.useForm(),[l,s]=Object(r.useState)(""),[c,d]=Object(r.useState)(!1),u=()=>{d(!1),s(""),o.resetFields()};return Object(r.useImperativeHandle)(t,()=>({edit:(e,t)=>{o.setFieldsValue(t),s(e),d(!0)}})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(el.a,{className:"formatting-help-button",type:"primary",size:"small",onClick:()=>{d(!0)},children:i["preset.form.image.add.label"]}),Object(h.jsx)(Ko.a,{visible:c,width:400,className:"global-overlay",footer:()=>null,onCancel:()=>u(),children:Object(h.jsxs)(Ls.a,{form:o,name:"image-preset",layout:"vertical",size:"middle",onFinish:e=>{"string"===typeof l&&""!==l?n(l,e):a(e),u()},onFinishFailed:()=>{Er.a.error({message:i["error.preset-import.message"],description:i["error.preset-import.description"]})},autoComplete:"off",children:[Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.src.label"],name:"src",rules:[{required:!0,message:i["form.required"]}],children:Object(h.jsx)(Ts.a,{})}),Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.name.label"],name:"name",rules:[{required:!0,message:i["form.required"]}],children:Object(h.jsx)(Ts.a,{})}),Object(h.jsx)("div",{children:i["form.default"]}),Object(h.jsxs)(Ns.a,{gutter:10,children:[Object(h.jsx)(Is.a,{span:12,children:Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.width.label"],name:"width",children:Object(h.jsx)(Rs.a,{step:1,min:0,max:800})})}),Object(h.jsx)(Is.a,{span:12,children:Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.height.label"],name:"height",children:Object(h.jsx)(Rs.a,{step:1,min:0,max:800})})})]}),Object(h.jsxs)(Ns.a,{gutter:10,children:[Object(h.jsx)(Is.a,{span:12,children:Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.offset-x.label"],name:"offsetX",children:Object(h.jsx)(Rs.a,{step:1,min:-200,max:200})})}),Object(h.jsx)(Is.a,{span:12,children:Object(h.jsx)(Ls.a.Item,{label:i["preset.form.image.offset-y.label"],name:"offsetY",children:Object(h.jsx)(Rs.a,{step:1,min:-200,max:200})})})]}),Object(h.jsxs)(Es,{children:[Object(h.jsx)(el.a,{onClick:()=>u(),children:i["form.dismiss"]}),Object(h.jsx)(el.a,{type:"primary",htmlType:"submit",children:i["form.submit"]})]})]})})]})}),{width:zs,height:Ps}=s,As=Object(b.b)(Ko.a)`
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
`,Ds=e=>{let{language:t,isPendulum:a,frameInfo:n,importData:i,onCancel:o}=e;const{db:l}=hn(),[s,c]=yn("nameStylePresetList"),[d,u]=yn("layoutPresetList"),{layoutPresetMap:m,nameStylePresetMap:p}=Object(r.useMemo)(()=>({nameStylePresetMap:s.reduce((e,t)=>(e[t.key]=t,e),{}),layoutPresetMap:d.reduce((e,t)=>(e[t.key]=t,e),{})}),[d,s]),{layoutPresetList:b=[],nameStylePresetList:g=[]}=i,[f,v]=Object(r.useState)(()=>({layoutPresetMap:b.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{}),nameStylePresetMap:g.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{})}));return Object(h.jsxs)(As,{visible:!0,width:700,maskClosable:!1,okText:t["preset.button.import.label"],cancelText:t["preset.button.discard.label"],onCancel:o,onOk:async()=>{const e=Object.values(f.layoutPresetMap),t=Object.values(f.nameStylePresetMap),a={},r=[],n=[];if(e.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:i,verdict:o}=e;if(r.push({key:t,content:i}),null==m[t]&&"keep-new"===o)n.push({key:t,content:i});else if("keep-both"===o){const e=Object(de.a)();n.push({key:e,content:i})}else a[t]={key:t,content:i}}),l){const e=l.transaction("presetLayoutStore","readwrite");for(const{key:t,content:a}of r)await l.put("presetLayoutStore",{key:t,content:JSON.stringify(a)});await e.done}u(e=>[...e.map(e=>a[e.key]?a[e.key]:e),...n]);const i={},s=[],d=[];if(t.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:a,verdict:r}=e;if(s.push({key:t,content:a}),null==p[t]&&"keep-new"===r)d.push({key:t,content:a});else if("keep-both"===r){const e=Object(de.a)();d.push({key:e,content:a})}else i[t]={key:t,content:a}}),l){const e=l.transaction("presetNameStyleStore","readwrite");for(const{key:t,content:a}of s)await l.put("presetNameStyleStore",{key:t,content:JSON.stringify(a)});await e.done}c(e=>[...e.map(e=>i[e.key]?i[e.key]:e),...d]),o()},children:[Object(h.jsxs)("div",{className:"import-review-title",children:[Object(h.jsx)("h2",{children:t["preset.review-title.label"]}),t["preset.review-description"]]}),Object(h.jsx)("table",{className:"import-action-table",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"import-action-row import-header-row",children:[Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.current.label"]}),Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.new.label"]}),Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.action.label"]})]}),g.map(e=>{var a;let{key:r,content:i}=e;const o={language:t,frameInfo:n},l=null===(a=p[r])||void 0===a?void 0:a.content,s=f.nameStylePresetMap[r].verdict;return Object(h.jsxs)("tr",{className:Yo("import-action-row",s),children:[Object(h.jsx)("td",{className:"current-version",children:l&&Object(h.jsx)(ws,{...o,presetContent:l,children:l.preset})}),Object(h.jsx)("td",{className:"new-version",children:Object(h.jsx)(ws,{...o,presetContent:i,children:i.preset})}),Object(h.jsx)("td",{className:"action-list",children:Object(h.jsxs)("div",{className:"action-panel",children:[Object(h.jsx)(el.a,{size:"small",type:"keep-old"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-old"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(h.jsx)(el.a,{size:"small",type:"keep-new"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-new"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),l&&Object(h.jsx)(el.a,{size:"small",type:"keep-both"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-both"},{...e,nameStylePresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},r)}),b.map(e=>{var r,n,i,o,l;let{key:s,content:c}=e;const d={width:Math.round(40*zs/Ps),height:40,isPendulum:a,tabIndex:-1,language:t},u=null===(r=m[s])||void 0===r?void 0:r.content,p=f.layoutPresetMap[s].verdict;return Object(h.jsxs)("tr",{className:Yo("import-action-row",p),children:[Object(h.jsx)("td",{className:"current-version",children:u&&Object(h.jsx)(Fs,{resolvedLayoutState:ir({frame:u.frame,topLeftFrame:u.leftFrame,topRightFrame:u.rightFrame,bottomLeftFrame:u.pendulumFrame,bottomRightFrame:u.pendulumRightFrame,effectBackground:null===(n=u.effectStyle)||void 0===n?void 0:n.background,pendulumEffectBackground:null===(i=u.pendulumStyle)||void 0===i?void 0:i.background},a),dyeList:u.dyeList,foil:u.foil,...d})}),Object(h.jsx)("td",{className:"new-version",children:Object(h.jsx)(Fs,{resolvedLayoutState:ir({frame:c.frame,topLeftFrame:c.leftFrame,topRightFrame:c.rightFrame,bottomLeftFrame:c.pendulumFrame,bottomRightFrame:c.pendulumRightFrame,effectBackground:null===(o=c.effectStyle)||void 0===o?void 0:o.background,pendulumEffectBackground:null===(l=c.pendulumStyle)||void 0===l?void 0:l.background},a),dyeList:c.dyeList,foil:c.foil,...d})}),Object(h.jsx)("td",{className:"action-list",children:Object(h.jsxs)("div",{className:"action-panel",children:[Object(h.jsx)(el.a,{size:"small",type:"keep-old"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-old"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(h.jsx)(el.a,{size:"small",type:"keep-new"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-new"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),u&&Object(h.jsx)(el.a,{size:"small",type:"keep-both"===p?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-both"},{...e,layoutPresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},s)})]})})]})},Hs=Object(b.b)(ql)`
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
`,Bs=e=>{let{language:t}=e;const{setVisible:a,visible:n}=Zi(Object(fn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),{frame:i,isPendulum:o}=un(Object(fn.useShallow)(e=>{let{card:{frame:t,isPendulum:a}}=e;return{frame:t,isPendulum:a}})),{db:l}=hn(),[s,c]=yn("nameStylePresetList"),[d,u]=yn("layoutPresetList"),[m,p]=yn("imagePresetList"),[b,g]=Object(r.useState)({visible:!1,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[]}),f=Ke[i],[v,y]=Object(r.useState)(0),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O="preset-import-direct-upload";return Object(h.jsxs)(Hs,{footer:null,width:345,visible:n,title:Object(h.jsxs)("div",{className:"overlay-title",children:[Object(h.jsx)("span",{children:t["preset.manager.label"]}),Object(h.jsx)(qo.a,{onClick:()=>{a(!1)}})]}),onClose:()=>{a(!1)},children:[Object(h.jsx)("div",{children:t["preset.warning.label"]}),Object(h.jsxs)("div",{className:"action-list",children:[Object(h.jsx)(el.a,{size:"small",onClick:()=>{const e=JSON.stringify({layoutPresetList:d,nameStylePresetList:s}),t=new Blob([e],{type:"application/json"});eo("preset.json",t,"application/json")},children:t["generic.export.label"]}),Object(h.jsxs)(el.a,{size:"small",onClick:()=>{const e=document.getElementById(O);e&&e.click()},children:[t["generic.import.label"],Object(h.jsx)("input",{ref:x,type:"file",id:O,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;(e=>{if(e)for(let a=0;a<=e.length;a++){const r=e.item(a);if(!r)continue;const n=new FileReader;n.onload=e=>{let{target:a}=e;if(!a)return;const{result:r}=a;if("string"===typeof r)try{const{layoutPresetList:e,nameStylePresetList:t,imagePresetList:a}=JSON.parse(r);g({visible:!0,layoutPresetList:e,nameStylePresetList:t,imagePresetList:a})}catch(n){console.error(n),Er.a.error({description:t["error.preset-import.description"],message:t["error.preset-import.message"]})}},n.readAsText(r);break}y(e=>e+1)})(null===(e=x.current)||void 0===e?void 0:e.files)}},`direct-file-input-${v}`)]})]}),Object(h.jsxs)("div",{className:"preset-list name-style-preset-list",children:[Object(h.jsx)("label",{children:t["preset.instruction.name-style.label"]}),s.map(e=>{let{key:a,content:r}=e;return Object(h.jsx)(ws,{language:t,frameInfo:f,presetContent:r,onDelete:async()=>{if(l){const e=l.transaction("presetNameStyleStore","readwrite");await l.delete("presetNameStyleStore",a),await e.done}c(e=>e.filter(e=>e.key!==a))},children:r.preset},a)})]}),Object(h.jsxs)("div",{className:"preset-list layout-preset-list",children:[Object(h.jsx)("label",{children:t["preset.instruction.advanced-frame.label"]}),d.map(e=>{let{content:a,key:r}=e;const{dyeList:n,foil:i,frame:s,pendulumFrame:c,leftFrame:d,pendulumRightFrame:m,rightFrame:p,effectStyle:b,pendulumStyle:g}=a,f={frame:s,topLeftFrame:d,topRightFrame:p,bottomLeftFrame:c,bottomRightFrame:m,effectBackground:null===b||void 0===b?void 0:b.background,pendulumEffectBackground:null===g||void 0===g?void 0:g.background};return Object(h.jsx)(Fs,{width:Math.round(40*zs/Ps),height:40,isPendulum:o,resolvedLayoutState:ir(f,o),tabIndex:-1,dyeList:n,foil:i,language:t,onDelete:async()=>{if(l){const e=l.transaction("presetLayoutStore","readwrite");await l.delete("presetLayoutStore",r),await e.done}u(e=>e.filter(e=>{let{key:t}=e;return r!==t}))}},r)})]}),Object(h.jsxs)("div",{className:"preset-list image-preset-list",children:[Object(h.jsxs)("label",{children:[t["preset.instruction.image.label"],"\xa0",Object(h.jsx)(Ms,{ref:j,language:t,onSubmit:async e=>{const t=Object(de.a)();if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:t,content:JSON.stringify(e)}),await a.done}p(a=>[...a,{key:t,content:{...e}}])},onEdit:async(e,t)=>{if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:e,content:JSON.stringify(t)}),await a.done}p(a=>a.map(a=>a.key===e?{key:e,content:{...t}}:a))}}),Object(h.jsx)("br",{}),t["preset.instruction.image.head-up.label"]]}),m.map(e=>{let{key:a,content:r}=e;return Object(h.jsx)(vs,{language:t,imagePreset:r,onDelete:async()=>{if(l){const e=l.transaction("presetImageStore","readwrite");await l.delete("presetImageStore",a),await e.done}p(e=>e.filter(e=>{let{key:t}=e;return a!==t}))},onEdit:()=>{var e;null===(e=j.current)||void 0===e||e.edit(a,r)}},a)})]}),b.visible&&Object(h.jsx)(Ds,{onCancel:()=>g(e=>({...e,visible:!1})),importData:b,frameInfo:f,isPendulum:o,language:t})]})},{height:Ws,width:$s}=s,Ys=Object(b.b)(Ko.a)`
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
                    height: calc(var(--thumb-size) / ${$s} * ${Ws});
                }
            }
        }
    }
`,Ks=Object(r.forwardRef)((e,t)=>{let{language:a,applyCardData:n}=e;const[i,o]=Object(r.useState)(!1),{updateSetting:l}=mn(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}});return Object(r.useImperativeHandle)(t,()=>({open:()=>o(!0)})),Object(h.jsxs)(Ys,{visible:i,onCancel:()=>o(!1),okButtonProps:{style:{display:"none"}},cancelText:a["form.dismiss"],children:[Object(h.jsx)("div",{children:a["sample.manager.creative-requires.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{className:"sample-container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:a["sample.manager.header.image.label"]})}),Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:a["sample.manager.header.description.label"]})})]}),[{image:"https://i.postimg.cc/SQDcs87c/image.png",description:"Sample card with custom background and overframe artwork.",value:'{"fm":"tcg","rg":"en","fr":"ritual","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":40,"opnm":100,"opbf":"#0062b1","opab":true,"opnb":true,"opeb":true,"opfb":true,"opbl":true},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Blue-Eyes Chaos MAX Dragon","nst":"custom","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":180,"nscg":"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6","nshg":true,"nshl":true,"nshs":true,"nshfs":"#000000","nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"animeSilver","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"DARK","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/msWo4gh.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":0.686,"arx":34.1036977491961,"ary":32.5614067055394,"arw":44.05144694533762,"arh":49.92711370262391},"hbg":true,"bg":"https://i.postimg.cc/SK4CtGfY/image.png","bgd":"","bf":false,"bgs":"online","bgt":"strict","bgc":{"bgu":"%","bga":1,"bgx":0,"bgy":0,"bgw":100,"bgh":100},"lm":["1","3","7","9"],"lr":"","il":null,"ip":false,"pf":"auto","pe":"","rs":"4","bs":"4","psi":"medium","ta":["Dragon","Ritual","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"You can Ritual Summon this card with \\"Chaos Form\\". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent\'s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.","si":"LDS2-EN016","atk":"4000","def":"0","pw":"55410871","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/Ss0JTL0H/image.png",description:"Sample card with custom image as frame background, custom levels alignment and small pendulum effect's text box.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"platinum","op":{"opbd":100,"oppd":100,"optx":100,"opnm":80,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Malefic Paradulum Dragon","nst":"auto","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":0,"nscg":"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf","nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#000000","nslox":0,"nsloy":0,"nslw":0,"nspt":"none","nspr":"commonB","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"DARK","att":"auto","sf":"NO ICON","it":"auto","st":10,"stl":["level","level","level","level",null,"negative-level","negative-level","negative-level",null,"rank","rank","rank","rank"],"sa":"center","ar":"https://i.imgur.com/cQcxyRQ.jpeg","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1.236,"arx":0,"ary":0,"arw":100,"arh":80.9061488673139},"hbg":true,"bg":"https://i.imgur.com/WpXf0GI.png","bgd":"","bf":false,"bgs":"online","bgt":"frame","bgc":{"bgu":"%","bga":0.686,"bgx":15.449999999999998,"bgy":0,"bgw":68.60000000000001,"bgh":100},"lm":["1","9","3","7"],"lr":"","il":false,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 \\"Malefic\\" Spell / Trap from your Deck to your hand. You can only use this effect of \\"Malefic Paradulum Dragon\\" once per turn.","rs":"0","bs":"0","psi":"small","ta":["Dragon","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"italic","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"Must be Pendulum Summoned, or Special Summoned (from your hand) by banishing 1 \\"Malefic\\" monster from your Extra Deck. While you control no card in your Field Zone, the field is treated as \\"Malefic World\\". Once per turn: You can send 1 \\"Malefic\\" card from your Deck to the GY; return 1 of your banished Level 8 Synchro Monsters to the Extra Deck, then you can Special Summon that monster from the Extra Deck, also you can only attack with \\"Malefic\\" monsters for the rest of this turn.","si":"","atk":"4000","def":"4000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#00007f",true,"#0000FF"],"tts":[false,"#ff0000",true,"#7F0000"],"ets":[false,"#7f0000",true,"#FF0000"],"pts":[false,"#7f0000",true,"#FF0000"],"ots":[false,"#ffffff",true,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/gc8Ccjyq/image.png",description:"Sample card with no frame background, colorized texts, customized level and attribute.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":0,"oppd":65,"optx":55,"opnm":65,"opbf":"#404040","opab":false,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Mega PenduLuMoon","nst":"predefined","ns":{"nsep":90,"nsey":90,"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"ultra","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"https://i.postimg.cc/HxZCQhxH/paranormal.png","att":"custom","sf":"NO ICON","it":"auto","st":"4","stl":[],"sa":"auto","ar":"https://i.imgur.com/JIgmiMj.png","ad":"","as":"online","af":false,"arc":{"arx":31.17030201342282,"ary":0,"arw":37.65939597315436,"arh":100,"aru":"%","ara":0.67},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":99.99999999999999,"bgu":"%","bga":0.67},"lm":["1","3","7","9"],"lr":"","il":null,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 PARANORMAL Pendulum Monster from your Extra Deck to your hand, then destroy this card. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","rs":"0","bs":"0","psi":"medium","ta":["Spellcaster","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"During your Main Phase: You can add up to 2 face-up PARANORMAL Pendulum Monsters from your Extra Deck to your hand, also for the rest of this turn, until you Pendulum Summon, you cannot activate monster effects, except PARANORMAL Monsters\' effects, and the effects of any cards in your Pendulum Zones are negated. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","si":"SMXR-EN025","atk":"400","def":"1400","pw":"45497573","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[true,"#400040",true,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[true,"#000000",true,"#FF00FF"],"pts":[true,"#000000",true,"#FF0000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/YCPQfmdn/image.png",description:"Sample card with link markers on pendulum frame and custom level placement.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Countermoon Dragon","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"rare","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"WATER","att":"auto","sf":"NO ICON","it":"custom","st":12,"stl":["negative-level","negative-level","negative-level","negative-level",null,null,"level","level","level","level","level","level"],"sa":"auto","ar":"https://i.imgur.com/vf0AWDN.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":94.7867298578199,"aru":"%","ara":1.055},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":94.7867298578199,"bgu":"%","bga":1.055},"lm":["1","3","7","9"],"lr":"","il":true,"ip":true,"pf":"auto","pe":"Negate the effects of all face-up Continuous Trap on the field.","rs":"5","bs":"5","psi":"medium","ta":["Wyrm","Synchro","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"[Synchro: 1 Tuner + 1 non-Tuner monster | Link: 2 Wyrm monsters]\\nYou can only Special Summon 1 \\"Countermoon Dragon\\" per turn. If this card is Synchro Summoned: You can target 2 Spells/Traps on the field; destroy them. If this card is Dark Synchro Summoned: You can target 1 monster on the field; destroy it. If this card is Link Summoned: You can Special Summon 1 \\"Countersun Dragon\\" from your Extra Deck, then you can place this card in your Pendulum Zone.","si":"","atk":"1500","def":"3000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}'},{image:"https://i.postimg.cc/ncnLK60H/image.png",description:"Sample card with custom finishes and inline-image in card text.",value:'{"fm":"tcg","rg":"en","fr":"link","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":["type8"],"afn":"type5","of":["normal","normal","normal","normal"],"na":"Promethean Princess, Bestower of Flames","nst":"predefined","ns":{"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshg":false,"nshl":false,"nshs":false,"nslc":"#4d4d4d","nslox":0,"nsloy":0,"nslw":2,"nspt":"none","nspr":"ultra","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"FIRE","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/NywTwhA.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1,"arx":0,"ary":0,"arw":100,"arh":100},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":67,"bgu":"%","bga":1},"lm":["8","4","6"],"lr":"","il":true,"ip":false,"pf":"auto","pe":"","rs":"10","bs":"10","psi":"medium","ta":["Fiend","Link","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"{{2+<img src=\\"https://i.postimg.cc/NFQSRSzT/effect-monster.png\\" offsetY=\\"-4\\" />}} / You cannot Special Summon <img name=\\"monster\\" src=\\"https://i.postimg.cc/RZ0mk6G3/monster.png\\" offsetY=\\"-4\\" />, except <img src=\\"icon-fire\\" /><img name=\\"monster\\" />. You can only use each of the following effects of \\"Promethean Princess, Bestower of Flames\\" once per turn. During your {Main Phase}: You can Special Summon 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> from your {<img name=\\"gy\\" src=\\"https://i.postimg.cc/Pr4159Hv/gy.png\\" />.} If a <img name=\\"monster\\" /> is Special Summoned to your opponent\'s field, while this card is in your <img name=\\"gy\\" /> (except during the Damage Step): You can target 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> you control and 1 <img name=\\"monster\\" /> your opponent controls; destroy them, and if you do, Special Summon this card.","si":"PHNI-EN052","atk":"2700","def":"","pw":"02772337","sti":"holo5","fe":"1<st> Edition","ife":true,"isp":true,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#ffa500",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'}].map(e=>{let{description:t,image:a,value:r}=e;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:a,alt:"Sample Card"})}),Object(h.jsxs)("td",{children:[t,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(el.a,{size:"small",onClick:()=>{l({showCreativeOption:!0,showExtraDecorativeOption:!0}),n(cn(r).card)},children:"Use sample"})]})]},a)})]})})]})});a(498);const Us=()=>Object(h.jsx)("div",{className:"affiliation",children:Object(h.jsx)("div",{className:"affiliation-link",children:Object(h.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(cl.a,{})})})}),Gs=Object(b.b)(dl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Xs=Object(b.b)(Dl)`
    font-size: var(--fs-sm);
`,qs=b.b.div`
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
`,Vs=e=>{let{applyCardData:t}=e;const{language:a,languageInfo:n,languageMetadataMap:i,changeLanguage:o}=zr(e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}}),{cardList:l,isListDirty:s,toggleVisible:c,visible:d}=sn(Object(fn.useShallow)(e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})),{setVisible:u,visible:m}=Zi(Object(fn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),p=Object(r.useRef)(null);return Object(h.jsxs)("div",{className:"app-header",children:[Object(h.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(h.jsxs)("div",{className:"app-description",children:[Object(h.jsxs)("div",{className:"header-language",children:[Object(h.jsx)("h1",{children:"Yugioh Carder"}),Object(h.jsx)(es.a.Group,{value:n.codeName,size:"small",className:"language-option",children:Object.values(i).filter(e=>{let{active:t}=e;return t}).map(e=>{let{codeName:t,name:a}=e;return Object(h.jsx)(es.a.Button,{value:t,onChange:e=>o(e.target.value),children:a},t)})}),Object(h.jsx)(Uo.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(h.jsx)("span",{id:"sentry-bug-report",className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(us))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(us))||void 0===e||e.classList.remove("js-highlight")},children:Object(h.jsx)("div",{children:a["contributor.bug-report.tooltip"]})})}),Object(h.jsx)(bs,{}),Object(h.jsx)(cs,{})]}),Object(h.jsxs)("div",{className:"app-contribution",children:[Object(h.jsxs)("span",{className:"app-creator",children:[a["contributor.gui.label"],": ",Object(h.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(h.jsx)(fl,{content:Object(h.jsxs)(Dl,{className:"disclaimer",children:[Object(h.jsx)("h2",{children:a["contributor.disclaimer.label"]}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:a["contributor.disclaimer.line-1"](Object(h.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-2"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-3"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-4"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-5"](Object(h.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(h.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-6"]})]})]})})]}),Object(h.jsx)("span",{className:"template-creator",children:a["contributor.template-maker"](Object(h.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Grezar"})},"artist-1"),Object(h.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"9558able"})},"artist-2"),Object(h.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(h.jsx)("a",{href:"https://www.deviantart.com/geckoygo",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"GeckoYGO"})},"artist-4"),Object(h.jsx)(fl,{icon:Gs,content:Object(h.jsx)(Xs,{className:"additional-contributors",children:Object(h.jsxs)("ul",{className:"template-creator",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"icycatelf"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.deviantart.com/neophoenixknight/art/Rebirth-Monsters-686893186",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"NeoPhoenixKnight"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/100006320592457/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Tr\xed D\u0169ng Song To\xe0n"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/61577932176567/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Tr\u1ea7n Quang Anh"})})})]})})},"artist-5"))})]})]}),Object(h.jsx)(qs,{className:"app-setting",children:Object(h.jsx)(Zl,{})}),Object(h.jsx)(qs,{className:"card-manager",children:Object(h.jsx)(Ol,{className:Yo("manager-button-label",d?"manager-active":""),onClick:()=>c(),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(ul.a,{}),Object(h.jsx)("label",{children:a["manager.icon.title"]}),s&&l.length>1&&Object(h.jsx)("div",{className:"manager-notice",children:"*"})]})})}),Object(h.jsxs)(qs,{className:"preset-manager",children:[Object(h.jsx)(Ol,{className:Yo("preset-manager-button-label",m?"preset-manager-active":""),onClick:()=>u(),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(ml.a,{}),Object(h.jsx)("label",{children:a["preset.manager.label"]})]})}),Object(h.jsx)(Bs,{language:a})]}),Object(h.jsxs)(qs,{className:"sample-card",children:[Object(h.jsx)(Ol,{className:Yo("preset-sample-button-label"),onClick:()=>{var e;null===(e=p.current)||void 0===e||e.open()},children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(pl.a,{}),Object(h.jsx)("label",{children:a["sample.manager.label"]})]})}),Object(h.jsx)(Ks,{ref:p,language:a,applyCardData:t})]})]})},_s=()=>{const e=Pr();return Object(h.jsxs)(Dl,{className:"disclaimer",children:[Object(h.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(h.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(h.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},Js=()=>Object(h.jsx)(fl,{overlayClassName:"disclaimer-overlay",content:Object(h.jsx)(_s,{})});var Qs=a(620),Zs=a(646);a(499);const{Panel:ec}=Qs.a,tc=b.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,ac=b.b.div`
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
`,rc=b.b.div`
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
`,nc=b.b.div`
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
`,ic=e=>{let{path:t,imagePath:a}=e;return Object(h.jsxs)("div",{className:"special-path-item",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:`/ygocarder/asset/image/${a}`,alt:t})}),Object(h.jsx)("div",{className:"path",children:Object(h.jsx)(Pl,{data:t,children:t})})]})},oc=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:i}=null!==a&&void 0!==a?a:{};return Object(h.jsxs)(rc,{className:`image-with-caption ${i}`,children:[Object(h.jsx)("img",{alt:r,...n}),Object(h.jsx)("div",{className:"caption",children:t})]})},lc=()=>{const[e,t]=Object(r.useState)(!1),a=Pr();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Fl.a,{footer:null,visible:e,width:"60%",title:Object(h.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"],"\xa0\xa0",Object(h.jsx)(el.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["generic.close.label"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(h.jsxs)(tc,{children:[Object(h.jsxs)("p",{children:[a["guide.format.introduction"](Object(h.jsx)(vl.a,{},"icon")),"."]}),Object(h.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(h.jsx)(Rl,{children:"["},"open-tag"),Object(h.jsx)(Rl,{children:"]"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+1"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+1"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(h.jsx)(Rl,{children:"[["},"open-tag"),Object(h.jsx)(Rl,{children:"]]"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+Shift+1"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+Shift+1"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(h.jsx)(Rl,{children:"{"},"open-tag"),Object(h.jsx)(Rl,{children:"}"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+2"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+2"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(h.jsx)(Rl,{children:"|"},"separator"),Object(h.jsx)(Rl,{children:"Ctrl+3"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+3"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(h.jsx)(Rl,{children:"||"},"separator"),Object(h.jsx)(Rl,{children:"Ctrl+4"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+4"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(h.jsx)(Rl,{children:"{{"},"open-tag"),Object(h.jsx)(Rl,{children:"}}"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+5"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+5"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-7.label"]}),a["guide.format.section-7.content"](Object(h.jsx)(Rl,{children:"<i>"},"open-tag"),Object(h.jsx)(Rl,{children:"</i>"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+I"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+I"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"italic text raw",src:"/ygocarder/asset/image/syntax/syntax-7-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"italic text preview",src:"/ygocarder/asset/image/syntax/syntax-7-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-8.label"]}),a["guide.format.section-8.content"](Object(h.jsx)(Rl,{children:"<b>"},"open-tag"),Object(h.jsx)(Rl,{children:"</b>"},"close-tag"),Object(h.jsx)(Rl,{children:"Ctrl+B"},"hotkey"),Object(h.jsx)(Rl,{children:"\u2318+B"},"hokey-alternative")),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"bold text raw",src:"/ygocarder/asset/image/syntax/syntax-8-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"bold text preview",src:"/ygocarder/asset/image/syntax/syntax-8-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-9.label"]}),a["guide.format.section-9.content"](Object(h.jsx)(Rl,{children:"<img />"},"open-tag")),Object(h.jsx)(Qs.a,{ghost:!0,children:Object(h.jsx)(ec,{header:Object(h.jsx)("div",{children:a["guide.format.section-9.special-path.content"]}),children:[Object(h.jsx)(nc,{children:[...Object.values(A).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(ic,{path:a,imagePath:t},a)})]},"subfamily-st"),Object(h.jsx)(nc,{children:[...Object.values(W).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(ic,{path:a,imagePath:t},a)})]},"subfamily-icon"),Object(h.jsx)(nc,{children:[...Object.values(H).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(ic,{path:a,imagePath:t},a)})]},"subfamily-attribute"),...tt.map((e,t)=>Object(h.jsx)(nc,{className:"path-container",children:e.map(e=>{let{imagePresetPath:t,imagePresetSource:a}=e;return Object(h.jsx)(ic,{path:t,imagePath:a},t)})},`region-${t}`))]},"sample-option")}),Object(h.jsxs)(ac,{className:"panel-figure",children:[Object(h.jsx)(oc,{containerProps:{className:"panel-box box-raw"},alt:"image raw",src:"/ygocarder/asset/image/syntax/syntax-9-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(oc,{containerProps:{className:"panel-box box-preview"},alt:"image preview",src:"/ygocarder/asset/image/syntax/syntax-9-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(h.jsxs)(el.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(h.jsx)(Zs.a,{})]})]})},sc=b.b.div`
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
`,cc=b.b.div`
    display: inline-block;
    width: 8px;
`,dc=e=>{let{id:t,tabIndex:a,nameKey:r,labelBackgroundColor:n,labelBackgroundColorList:i,className:o,isOfficial:l,onClick:s}=e;const c=Pr();return Object(h.jsxs)(sc,{id:t,tabIndex:a,className:`frame-info-block ${null!==o&&void 0!==o?o:""}`,$withPillar:!(!n&&!i),onClick:s,children:[i?Object(h.jsx)(cc,{children:i.map(e=>Object(h.jsx)("div",{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:e,height:100/i.length+"%"}},e))}):n?Object(h.jsx)(cc,{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:n}}):null,Object(h.jsx)("label",{className:"frame-info-block-label",children:c[r]})]})};var uc=a(148),mc=a(319),pc=a.n(mc),bc=a(647),hc=a(648),gc=a(649),fc=a(650),vc=a(604);const yc=b.b.div`
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
`,xc=()=>Object(h.jsx)(vc.a,{});xc.FullView=()=>Object(h.jsx)(yc,{className:"loading-fullview",children:Object(h.jsx)(vc.a,{size:"large"})});a(506),a(507);const jc=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:i=0,y:o=0,unit:l}=e;if("px"===l){const e=.8,n=400/300,{width:l,height:s}=t,c=s/l>=e?n:1,d=Math.min((null!==i&&void 0!==i?i:0)*c,l),u=Math.min((null!==o&&void 0!==o?o:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,l);return{unit:"%",x:d/l*100,y:u/s*100,width:m/l*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(i<0)return{...e,x:0};if(o<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),p=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,b=p/100,h=b>1?100:p,g=b>1?d/b:d,f=b>1?(100-g)/2:i<0?0:i,v=b>1||o<0?0:o;return{...e,x:f,y:v,height:h,width:g,aspect:a}},Oc=Object(r.forwardRef)((e,t)=>{let{title:a,backgroundColor:n,className:i,forceFit:o,defaultSourceType:l,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:p,ratio:b,imageStyle:g,isNotFoundAnError:f=!0,onImageStyleChange:v,onSourceLoaded:y=()=>{},onSourceChange:x=()=>{},onCropChange:j=()=>{},onTainted:O=()=>{},onMaxSizeExceeded:w=()=>{},onForceFitChange:k=()=>{}}=e;const S="offline"===l?"offline":"online",C=Pr(),F=Object(r.useRef)(null),[L,T]=Object(r.useState)("anonymous"),[N,I]=Object(r.useState)(0),[R,E]=Object(r.useState)(S),[M,z]=Object(r.useState)(S),[P,A]=Object(r.useState)(s),[D,H]=Object(r.useState)(!1),[B,W]=yn("activeDropzone"),[$,Y]=Object(r.useState)(null),[K,U]=Object(r.useState)(!1),[G,X]=Object(r.useState)(c),q=Object(r.useRef)(null),[V,_]=Object(r.useState)({current:p,completed:null}),[J,Q]=Object(r.useState)("%"===p.unit),{current:Z,completed:ee}=V,te=e=>{const t=e[0];if(!t)return;t.size>=4194304&&w(4),H(!0);const a=new FileReader;a.addEventListener("load",()=>{"string"===typeof a.result&&(T("anonymous"),A(a.result),E("offline"),z("offline"),x("offline",a.result),H(!1))}),a.readAsDataURL(t)},ae=Object(r.useRef)({source:"",crop:null}),re=Object(r.useCallback)(e=>{if(H(!1),Y(null),y(L),q.current=e,e.src===ae.current.source&&ae.current.crop){const t=ne.current;setTimeout(()=>{if(t!==ne.current||!ae.current.crop)return;const a=jc(ae.current.crop,e,b);_({completed:a,current:a}),Q(!0),ae.current={source:"",crop:null}},250)}else setTimeout(()=>{_(t=>{const a=jc(t.current,e,b);return{completed:a,current:a}}),Q(!0)},250)},[L,y,b]);Object(r.useEffect)(()=>{var e,t,a,r;const n=q.current;if(!ee||!d||!n)return;const{aspect:i}=ee;d.style.transform="scale(2)";const l=d.getContext("2d");if(!l||"number"!==typeof i||i<=0||D)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,p=null!==(e=ee.unit)&&void 0!==e?e:"px",b=window.devicePixelRatio;l.setTransform(b,0,0,b,0,0);let h,f=Math.floor((null!==(t=ee.width)&&void 0!==t?t:0)*("px"===p?u:c/100)),v=Math.min(c,f),y=Math.floor(f/i),x=Math.min(s,y),O=Math.min(c,Math.floor((null!==(a=ee.x)&&void 0!==a?a:0)*("px"===p?u:c/100))),w=Math.min(s,Math.floor((null!==(r=ee.y)&&void 0!==r?r:0)*("px"===p?m:s/100)));if(l.imageSmoothingQuality="high",!(v<=0||x<=0)){if(O+v>c||w+x>s||O<0||w<0||Math.abs((f-v)/v)>.01||Math.abs((y-x)/x)>.01){"width"===(i*s>c?"width":"height")?(v=c,x=v/i,O=0,w=(s-x)/2,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:0,y:w/s*100}):(v=s*i,x=s,O=(c-v)/2,w=0,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:O/c*100,y:0})}if(o){"width"===(i*s>c?"width":"height")?(v=c,x=v/i):(v=s*i,x=s),d.width=v,d.height=x;const{flipX:e,flipY:t}=g,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,0,0,c,s,0,0,a*v,r*x),l.scale(a,r)}else{var k,S;d.width=null!==(k=v)&&void 0!==k?k:0,d.height=null!==(S=x)&&void 0!==S?S:0;const{flipX:e,flipY:t}=g,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,O,w,v,x,0,0,a*v,r*x),l.scale(a,r)}"offline"===R&&(null!==P&&void 0!==P?P:"").length<=0||i===ee.aspect&&j(ee,R,K),h&&_(e=>({...e,current:h}))}},[ee,d,N,o,g]),Object(r.useEffect)(()=>{U(!1),_(e=>{if(null!=q.current&&e.current){const t=jc(e.current,q.current,b);return{current:t,completed:t}}return e})},[b]);const ne=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,()=>({isLoading:()=>D,hasImage:()=>"string"===typeof P&&P.length>0&&"offline"===R||"string"===typeof G&&G.length>0&&"online"===R,forceSource:(e,t,a)=>{const r="offline"===R?P:G;U(!1),r!==t&&(H(!0),E(e),z(e),x(e,t),"offline"===e?A(t):X(t)),T("anonymous"),Q("%"===a.unit),ne.current+=1,ae.current={source:t,crop:a},I(e=>e+1)}}));const ie="offline"===R&&(null!==P&&void 0!==P?P:"").length>0||"online"===R&&(null!==G&&void 0!==G?G:"").length>0,oe=d&&ie&&!D&&(null===ee||void 0===ee?void 0:ee.width)&&(null===ee||void 0===ee?void 0:ee.height);return Object(h.jsxs)("div",{className:Yo("card-image-cropper",i),children:[Object(h.jsxs)("div",{className:"card-image-source-input",children:[Object(h.jsxs)("div",{className:"card-image-source-input-container",children:[Object(h.jsxs)("div",{className:"card-image-source-input-title",children:[Object(h.jsxs)("span",{className:"field-title",children:[a,Object(h.jsx)(jl,{Icon:bc.a,containerProps:{className:oe?"":"disabled"},tooltipProps:{overlay:oe?C["image-cropper.download"]:C["image-cropper.no-download"]},onClick:()=>oe&&d&&function(e,t){t&&e&&e.toBlob(e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}},"image/png",1)}(d,ee)}),Object(h.jsx)(jl,{Icon:qo.a,tooltipProps:{overlay:C["generic.reset.tooltip"]},onClick:()=>{"offline"===R?(A(""),x("offline","")):(X(""),x("online",""))}})]}),Object(h.jsxs)(es.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;z(t),((null!==P&&void 0!==P?P:"").length>0&&"offline"===t||(null!==G&&void 0!==G?G:"").length>0&&"online"===t)&&(E(t),"offline"===t?(T("anonymous"),x("offline",P)):x("online",G))},value:M,children:[Object(h.jsx)(Uo.a,{title:Object(h.jsx)("div",{className:"image-info",children:C["image-cropper.online-tip"]}),children:Object(h.jsx)(es.a.Button,{value:"online",checked:"online"===M,children:C["image-cropper.source.online.tooltip"]})}),Object(h.jsx)(Uo.a,{title:Object(h.jsx)("div",{className:"image-warning",children:C["image-cropper.offline-warning"]}),children:Object(h.jsx)(es.a.Button,{value:"offline",checked:"offline"===M,children:C["image-cropper.source.offline.tooltip"]})})]})]}),Object(h.jsx)("div",{className:["card-image-input","online"===M?"":"input-inactive"].join(" "),children:Object(h.jsx)(Ts.a,{placeholder:C["image-cropper.placeholder"],value:G,onChange:e=>{const t=e.target.value;T("anonymous"),H(!0),E("online"),z("online"),x("online",t),X(t)},maxLength:512,allowClear:!0},"key")}),Object(h.jsx)("div",{className:["card-image-input","offline"===M?"":"input-inactive"].join(" "),children:Object(h.jsx)(Ts.a,{ref:F,type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files.length>0?te(e.target.files):alert(C["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(h.jsxs)("div",{className:Yo("card-cropper"),onKeyDown:()=>{U(!0)},children:[Object(h.jsx)(Xl,{$visible:B>0,className:"drop-zone",onDragOver:e=>e.preventDefault(),onDrop:e=>{if(e.preventDefault(),W(0),e.currentTarget.classList.contains("drop-zone")){const t=e.dataTransfer.files;te(t)}},children:Object(h.jsx)("label",{children:C["image-cropper.drop.tooltip"]})}),D&&Object(h.jsx)(xc.FullView,{}),ie&&!$&&Object(h.jsxs)("div",{className:"card-image-option",children:[Object(h.jsx)(Uo.a,{placement:"left",overlay:C["image-cropper.button.flip-horizontal.tooltip"],children:Object(h.jsx)("div",{className:Yo("image-option flip-horizontally-option",g.flipX?"option-active":""),onClick:()=>{U(!0),v({flipX:!g.flipX,flipY:g.flipY})},children:Object(h.jsx)(Xo.a,{})})}),Object(h.jsx)(Uo.a,{placement:"left",overlay:C["image-cropper.button.flip-vertical.tooltip"],children:Object(h.jsx)("div",{className:Yo("image-option flip-vertically-option",g.flipY?"option-active":""),onClick:()=>{U(!0),v({flipX:g.flipX,flipY:!g.flipY})},children:Object(h.jsx)(hc.a,{})})}),Object(h.jsx)(Uo.a,{placement:"left",overlay:o?C["image-cropper.button.use-crop.tooltip"]:C["image-cropper.button.force-fit.tooltip"],children:Object(h.jsx)("div",{className:Yo("image-option force-fit-option",o?"option-active":""),onClick:()=>{U(!0),k(!o)},children:Object(h.jsx)(gc.a,{})})}),!o&&Object(h.jsx)(Uo.a,{placement:"left",overlay:C["image-cropper.button.center-vertical.tooltip"],children:Object(h.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{U(!0),_(e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}})},children:Object(h.jsx)(fc.a,{})})}),!o&&Object(h.jsx)(Uo.a,{placement:"left",overlay:C["image-cropper.button.center-horizontal.tooltip"],children:Object(h.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{U(!0),_(e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}})},children:Object(h.jsx)(fc.a,{})})})]}),(!ie||$&&void 0===L)&&!D&&Object(h.jsx)(uc.a,{description:f?C["image-cropper.not-found-warning"]:C["image-cropper.not-found-info"],image:null}),Object(h.jsx)(pc.a,{src:"offline"===R?P:G,disabled:o,className:o?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:re,onImageError:()=>{if(d)if("online"===R&&""===(null!==G&&void 0!==G?G:"")||"offline"===R&&""===(null!==P&&void 0!==P?P:"")){ae.current={source:"",crop:null};const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),ee&&j(ee,R,K),y(L),H(!1),Y("Image not found")}else T(void 0),O();else ae.current={source:"",crop:null},H(!1),Y("No receiving canvas"),O();void 0===L&&(H(!1),Y("Tainted canvas"))},crop:Z,onDragStart:()=>{U(!0)},onChange:(e,t)=>{const a=q.current;ae.current.crop||D||(J?_(e=>({...e,current:jc(t,a,b)})):(Q(!0),_(t=>({...t,current:jc(e,a,b)}))))},onComplete:(e,t)=>{ae.current.crop&&!D||_(e=>({...e,completed:t}))},ruleOfThirds:!0,crossorigin:L},`${R}-${J}-${N}`)]})]})}),wc=b.b.div`
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
`,kc=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Sc=e=>{let{value:t="",onChange:a}=e;const{color:r,inputText:n,setColor:i}=gn({value:t,onChange:a});return Object(h.jsxs)(wc,{children:[Object(h.jsx)("div",{className:"color-list",children:kc.map(e=>{let{hex:t,rgb:n}=e;const i=ko(n);return Object(h.jsx)(Ll,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:r.hex.toUpperCase()===t&&Object(h.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(h.jsxs)("div",{className:"color-input",children:[Object(h.jsx)(Ll,{$static:!0,style:{backgroundColor:r.hex}}),Object(h.jsx)(Ts.a,{size:"small",value:n,onChange:e=>{i(e.target.value)}})]})]})};var Cc=a(69),Fc=a(324);const Lc=b.b.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`,Tc=Object(Cc.c)(e=>{let{onChange:t,...a}=e;return Object(h.jsx)(Lc,{children:Object(h.jsx)(Fc.Saturation,{...a,onChange:e=>{null===t||void 0===t||t(e)}})})}),Nc=[{hex:"#B80000",rgb:[184,0,0]},{hex:"#EB9694",rgb:[235,150,148]},{hex:"#DB3E00",rgb:[219,62,0]},{hex:"#FAD0C3",rgb:[250,208,195]},{hex:"#FCCB00",rgb:[252,203,0]},{hex:"#FEF3BD",rgb:[254,243,189]},{hex:"#008B02",rgb:[0,139,2]},{hex:"#C1E1C5",rgb:[193,225,197]},{hex:"#006B76",rgb:[0,107,118]},{hex:"#BEDADC",rgb:[190,218,220]},{hex:"#1273DE",rgb:[18,115,222]},{hex:"#C4DEF6",rgb:[196,222,246]},{hex:"#004DCF",rgb:[0,77,207]},{hex:"#BED3F3",rgb:[190,211,243]},{hex:"#5300EB",rgb:[83,0,235]},{hex:"#D4C4FB",rgb:[212,196,251]}],Ic=b.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem 4rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${Ll} {
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
        ${Ll} {
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
`,Rc=e=>{let{children:t,onChange:a,value:r}=e;const{color:n,inputText:i,setColor:o}=gn({value:r,onChange:a}),l=""===i;return Object(h.jsxs)(Ic,{className:"horizontal-sketch-picker",children:[Object(h.jsx)("div",{className:"input-label",children:t}),Object(h.jsxs)("div",{className:"color-input",children:[Object(h.jsxs)("div",{className:"color-state",children:[Object(h.jsx)(Ll,{$empty:l,style:l?{}:{backgroundColor:n.hex}}),Object(h.jsx)(jl,{size:"sm",Icon:qo.a,onClick:()=>{null===a||void 0===a||a("")}})]}),Object(h.jsx)(Ts.a,{size:"small",value:i,onChange:e=>{o(e.target.value)}})]}),Object(h.jsx)("div",{className:"rgb-input-list",children:["R","G","B"].map((e,t)=>Object(h.jsxs)("div",{className:"rgb-input",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)(Ts.a,{size:"small",value:l?"":n.rgb[t],onChange:e=>{const a=[...n.rgb];var r;a[t]=parseInt(e.target.value),o("#"+wo((r=a)[0])+wo(r[1])+wo(r[2]))}})]},e))}),Object(h.jsx)("div",{className:"color-list",children:Nc.map(e=>{let{hex:t,rgb:r}=e;const i=ko(r);return Object(h.jsx)(Ll,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:n.hex.toUpperCase()===t&&Object(h.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(h.jsx)(Tc,{color:n.hex,onChange:e=>{let{hex:t}=e;return o(t)}})]})};var Ec=a(245),Mc=a(651),zc=a(652),Pc=a(653);const{height:Ac,width:Dc}=s,Hc=b.b.div`
    width: ${Dc}px;
    height: ${Ac}px;
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
`,Bc=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:i,globalScale:o,width:l,height:s}=e;return Object(h.jsxs)("div",{className:"control-container",children:[Object(h.jsxs)("div",{className:"action-list",children:[Object(h.jsx)(Bl,{disabled:i>=4,onClick:()=>{t()},children:Object(h.jsx)(Mc.a,{})}),Object(h.jsx)(Bl,{disabled:i<=1/o,onClick:()=>{a()},children:Object(h.jsx)(zc.a,{})}),Object(h.jsx)(Bl,{onClick:()=>{r()},children:Object(h.jsx)(Pc.a,{})}),Object(h.jsx)(Bl,{onClick:()=>{n(-Math.max(0,l-Dc)/2,-Math.max(0,s-Ac)/2,1)},children:Object(h.jsx)(gc.a,{})})]}),Object(h.jsxs)("div",{className:"control-info",children:[i&&Object(h.jsxs)(h.Fragment,{children:["\xd7",i<1?"1/"+Math.round(1/i*10)/10:Math.round(10*i)/10]}),"\xa0(",l," \xd7 ",s,")"]})]})},Wc=Object(r.forwardRef)((e,t)=>{let{globalScale:a}=e;const[n,i]=Object(r.useState)(!1),[o,l]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(()=>1/a);return Object(r.useImperativeHandle)(t,()=>({setVisible:i,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>l(e=>e+1),getCanvasKey:()=>o})),Object(r.useEffect)(()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()},[a]),Object(h.jsx)(Ko.a,{width:`${Dc+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>i(!1),footer:null,children:Object(h.jsx)(Hc,{className:"card-lightbox-container",children:Object(h.jsx)(Ec.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"card-lightbox-control",children:Object(h.jsx)(Bc,{...t,scale:d,globalScale:a,width:Dc*a,height:Ac*a})}),Object(h.jsx)(Ec.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:Dc,maxHeight:Ac,lineHeight:0},children:Object(h.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:Dc*a,height:Ac*a},o+.1)})]})}})})})}),$c=b.b.div`
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
`,Yc=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:i}=e;const[o,l]=Object(r.useState)(a),s=Pr(),c=JSON.stringify(o);return Object(r.useEffect)(()=>{n(o)},[c]),Object(h.jsxs)($c,{className:Yo("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)(yl.a,{checked:t,onChange:e=>i(e.target.checked),children:s["link-picker.label"]})}),Object(h.jsx)("div",{className:"container",children:[...Array(9)].map((e,a)=>{const r=`${a+1}`;return"5"===r?Object(h.jsx)(Uo.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(h.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&l([])},children:Object(h.jsx)(p.a,{})})},"5"):Object(h.jsx)("div",{className:`link-marker-button marker-${a+1} ${o.includes(r)?"marker-checked":""}`,onClick:()=>{t&&l(e=>{let t=[...e];return t.includes(r)?t=t.filter(e=>e!==r):t.push(r),t})},children:Object(h.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${Ve[a]}deg) translateY(-1px)`}})},r)})})]})};var Kc=a(621);const Uc=Object(b.b)(Kc.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Gc=Object(b.b)(Kc.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,Xc=e=>{let{onChange:t,...a}=e;const r=Pr(),{resolution:n,updateSetting:i}=mn(Object(fn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}}));return Object(h.jsxs)(Kc.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(h.jsx)(Uc,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),ha.map(e=>{let{width:a,height:o,label:l,scale:s}=e;return Object(h.jsx)(Gc,{className:n[0]===a&&n[1]===o?"active-setting":"",onClick:()=>{i({resolution:[a,o],globalScale:s}),null===t||void 0===t||t([a,o],s)},children:s>1?Object(h.jsx)(bl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(h.jsx)(Dl,{children:r["setting.option.resolution.warning"]}),children:Object(h.jsx)(Ul,{width:a,height:o,warning:!0})}):Object(h.jsx)(Ul,{width:a,height:o})},`${a}-${o}`)})]})},qc=e=>Object(h.jsx)(nl,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(rl.a,{...e})}),Vc=b.b.div`
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
`,_c=b.b.div`
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
`,Jc=b.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Qc=b.b.div`
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
`,Zc={Container:Jc,Option:_c},ed=b.b.div`
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
`,td=Object(b.b)(el.a)`
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
`,ad=Object(r.forwardRef)((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:i,globalScale:o,canvasMap:l,onTainted:s,onExportSucess:c,onDownloadError:d}=e;const u=Pr(),{allowHotkey:m,resolution:p}=mn(Object(fn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),{onExport:b}=Xi(!0,l,{imageChangeCount:i,isInitializing:n,language:u,globalScale:o}),{exportCanvasRef:g}=l,f=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[v,y]=Object(r.useState)(!1),x=Object(r.useCallback)(()=>{y(!1)},[]),j=Object(r.useCallback)(async e=>b({...e,onError:e=>{!a&&String(e).includes("Tainted canvases")&&s()},onSuccess:c}),[a,b,c,s]),{onSave:O,isPipelineRunning:w}=pn({isTainted:a,isInitializing:n,exportCanvasRef:g,exportRef:f,onExport:j,onDownloadError:d,onDownloadComplete:x}),k=e=>{v||(a?Er.a.error({message:u["prompt.download.tainted.message"]}):(y(!0),O(e)))};return Object(r.useImperativeHandle)(t,()=>({download:k,isPipelineRunning:w})),a?null:Object(h.jsxs)("div",{className:"save-button-container",children:[Object(h.jsx)("div",{id:"save-button-waiting"}),Object(h.jsxs)(td,{className:"save-button",id:"save-button-ready",children:[Object(h.jsx)(Uo.a,{overlay:m?Object(h.jsx)(h.Fragment,{children:"Ctrl+S / \u2318+S"}):null,children:Object(h.jsx)("div",{className:"button-label",children:Object(h.jsx)("div",{className:"label-content",onClick:()=>k(),children:v?u["button.download.ongoing.label"]:u["button.download.label"]})})}),Object(h.jsx)(tl.a,{disabled:v,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(h.jsx)(Xc,{onChange:()=>Wo()}),children:Object(h.jsxs)(ed,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(h.jsx)(al.a,{className:"resolution-icon"}),Object(h.jsx)("span",{className:"resolution-overlay",children:p[1]})]})})]})]})});var rd=a(655),nd=a(656),id=a(657);const od=b.b.div`
    ${Go} {
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
`,ld=Object(b.b)(Go)`
    ${El}
`,sd=e=>{let{data:t,children:a,disabled:r,withText:n}=e;return Object(h.jsx)(zl,{disabled:r,data:t,container:ld,overlay:n?Object(h.jsxs)(h.Fragment,{children:["Copied\xa0",Object(h.jsx)(Il.a,{})]}):Object(h.jsx)(Il.a,{}),children:a})},cd=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:vr},{label:e["button.import.for-other.label"],value:"other",converter:mo}],dd=Object(r.forwardRef)((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:i,onRequireDownload:o,onClose:l}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,p]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:b,resolution:g}=mn(Object(fn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),f=Pr(),v="export-input-raw",y=Object(r.useCallback)(()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())},[]);Object(r.useImperativeHandle)(t,()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),p(cd(f).map(t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:i}=r(e,n);return{value:a,isPartial:t,name:jr(e.name),data:`${JSON.stringify(i)}`}}catch(i){return console.error(i),{value:a,isPartial:!1,name:"Unknown",data:""}}}).reduce((e,t)=>{let{data:a,isPartial:r,value:n,name:i}=t;return e[n]={name:i,data:a,isPartial:r},e},{...m}))}})),Object(r.useEffect)(()=>{setTimeout(()=>{s&&"ygocarder"===d&&y()},100)},[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Ko.a,{visible:s,title:f["button.export-modal.label"],className:"global-overlay export-modal",onCancel:()=>{c(!1),l()},cancelText:f["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(h.jsxs)(od,{children:[Object(h.jsx)(Cl,{optionList:cd(f),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(h.jsxs)("div",{className:"partial-alert",children:[Object(h.jsx)("b",{children:f["service.decode.partial.message"]}),Object(h.jsx)("br",{}),f["service.decode.partial.description"]]}),Object(h.jsxs)("div",{className:Yo("export-container-result",`mode_${d}`),children:[Object(h.jsx)(Hl,{content:a&&"other"===d?Object(h.jsx)(_s,{}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(Go,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});eo(jr(O),e,"application/json")},children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(bc.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(h.jsx)(Hl,{placement:"bottom",content:j?Object(h.jsx)(Dl,{children:f["prompt.export.offline-warning.message"]}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(sd,{disabled:!1,data:m.ygocarder.data,withText:!0,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(rd.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(h.jsx)(Hl,{placement:"bottom",content:j?Object(h.jsx)(Dl,{children:f["image-cropper.offline-warning"]}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(sd,{disabled:j,data:window.location.href,withText:!0,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(nd.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.share-button.label"]})]})})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(Hl,{content:a?Object(h.jsx)(_s,{}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(Go,{disabled:a,className:"export-download-image",onClick:o,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(id.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.save-button.label"]})]})})}),Object(h.jsx)(tl.a,{overlay:Object(h.jsx)(Xc,{}),children:Object(h.jsxs)("div",{className:"resolution-picker",children:[g[0]," \xd7 ",g[1]]})})]}),"ygocarder"===d&&!j&&Object(h.jsx)(Ts.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(h.jsx)(Uo.a,{overlay:b?Object(h.jsx)(h.Fragment,{children:"Ctrl+D / \u2318+D"}):null,children:Object(h.jsx)("button",{className:"primary-button export-button",onClick:()=>{i(),c(!0)},children:f["generic.export.label"]})}),Object(h.jsx)(tl.a,{overlay:Object(h.jsx)(Kc.a,{onClick:e=>e.domEvent.stopPropagation(),children:cd(f).map((e,t)=>{let{converter:a,label:r}=e;return Object(h.jsx)(Kc.a.Item,{onClick:()=>{try{const e=un.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});eo(jr(e),a,"application/json")})(jr(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),Er.a.error({message:f["error.export.message"],description:f["error.export.description"]})}},children:r},`${t}`)})}),children:Object(h.jsx)(Go,{className:"secondary-button export-custom",children:Object(h.jsx)(bc.a,{})})})]})});var ud=a(658);const md=b.b.div`
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
        ${Go} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,pd=Object(r.forwardRef)((e,t)=>{let{allowHotkey:a,language:n,onImport:i,onClose:o}=e;const l="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,p]=Object(r.useState)(0),[b,g]=Object(r.useState)("replace"),[f,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)(()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())},[]);Object(r.useEffect)(()=>{setTimeout(()=>{f&&j()},100)},[j,f]),Object(r.useImperativeHandle)(t,()=>({requestImport:e=>{g(e),v(!0)}}));const O=()=>{p(e=>e+1),v(!1),x(!1),o()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:r}=cn(e,"replace"===b||"new"===b?void 0:un.getState().card);if(r&&Er.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};i(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==b,addToList:"new"===b})}else i(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==b,addToList:"new"===b})}}catch(a){console.error("Import error:",a),Er.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},S=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,i=null!==(e=n.trim())&&void 0!==e?e:"";let o="";try{o=cr(decodeURIComponent(i))}catch(a){}let l=null;if(i.startsWith("{")&&i.endsWith("}"))l=i;else if(o.startsWith("{")&&o.endsWith("}"))l=JSON.parse(o);else{var t;const e=i.startsWith("https://db.ygoprodeck.com/api")?i:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${i}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();l=null!==(t=r.data.find(e=>{let{name:t}=e;return t.toLowerCase()===i.toLowerCase()}))&&void 0!==t?t:r.data.sort((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],i=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!i)return 0;return(n.viewsweek+1)/(i.viewsweek+1)>2?i.viewsweek-n.viewsweek:i.views-n.views})[0]}await w(l,!0)}}catch(a){console.error("Import error:",a),Er.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{O()}};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Ko.a,{visible:f,title:"merge"===b?n["button.import.merge.label"]:n["generic.import.label"],className:"global-overlay import-modal",onCancel:O,okText:n["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(h.jsxs)(md,{children:["merge"!==b?Object(h.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(h.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(h.jsx)("div",{className:"import-container-input",children:Object(h.jsx)(Ts.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:y,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==b?Object(h.jsxs)("div",{className:"import-container-upload",children:[Object(h.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(h.jsxs)(Go,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(h.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),O()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===b&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(h.jsx)(Go,{className:"import-empty",onClick:()=>{w(da()),O()},children:n["button.empty.label"]})]})]}):null]})}),Object(h.jsx)(Uo.a,{overlay:a?Object(h.jsxs)("div",{className:"center",children:[Object(h.jsx)("div",{children:"Ctrl+E / \u2318+E"}),Object(h.jsxs)("div",{children:["Ctrl+G / \u2318+G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(h.jsx)("button",{className:"primary-button import-button",onClick:()=>{g("replace"),v(!0)},children:n["generic.import.label"]})}),Object(h.jsx)(Uo.a,{overlay:n["button.import.tooltip"],children:Object(h.jsxs)(Go,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(l);e&&e.click()},children:[Object(h.jsx)("input",{ref:d,type:"file",id:l,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),O()}},`direct-file-input-${m}`),Object(h.jsx)(ud.a,{})]})})]})}),bd=(Object(b.b)(Kc.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),hd=e=>w({normal:e["input.foil.normal.label"],gold:e["input.foil.gold.label"],platinum:e["input.foil.platinum.label"],rainbow:e["input.foil.rainbow.label"]}).map(e=>{let{color:t,name:a,label:r,preview:n}=e;return{label:Object(h.jsx)(Uo.a,{title:r,children:n}),value:a,props:{style:{color:t,fontWeight:"bold"}}}}),gd=[{value:"normal",label:Object(h.jsx)(p.a,{})},...Object.values(y).map(e=>{let{value:t,label:a}=e;return{label:a,value:t}})],fd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"official";return Ue.filter(t=>{let{isOfficial:a}=t;return"both"===e||("official"===e?a:!a)}).map(e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:i,isOfficial:o}=e;return{label:Object(h.jsx)(dc,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a,isOfficial:o}),value:t,edition:i}})},vd=[...Array(14)].map((e,t)=>({label:t,value:t})),yd=P.map(e=>{let{value:t}=e;return{label:t===z?Object(h.jsx)(p.a,{}):Object(h.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}}),xd=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map(e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}}).sort((e,t)=>e.order-t.order);var jd=a(670);const Od=b.b.div`
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
`,wd=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Pr(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(h.jsxs)(Od,{tabIndex:-1,className:"char-picker-container",children:[Object(h.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\xd8","\u203b"].map(e=>Object(h.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e))}),Object(h.jsx)("div",{className:"char-picker-guideline",children:Object(h.jsx)(fl,{content:Object(h.jsxs)(Dl,{children:[r["input.char-picker.guide.header"],Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(h.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var kd=a(659);a(589),a(590);const Sd=Object(r.forwardRef)((e,t)=>{let{disabled:a,color:n,onSelect:i,onOffsetChange:o,onRemove:l}=e;const s=Pr(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[p,b]=Object(r.useState)(-1),g=Object(r.useRef)(Nr()(m,250)).current;return Object(r.useImperativeHandle)(t,()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:i,round:o}=Math;d(t),m(i(0,n(100,o(100*parseFloat(a))))),b(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===p&&m(r(0,a(100,n(100*parseFloat(t)))))}})),Object(r.useEffect)(()=>{p>0&&(null===o||void 0===o||o(p,""+u/100))},[p,u,o]),Object(h.jsxs)("div",{className:"stop-point-control-panel",children:[Object(h.jsxs)("div",{className:"stop-point-offset-input",children:[Object(h.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(h.jsx)(Rs.a,{value:u,size:"small",max:100,min:0,onChange:e=>g("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(h.jsx)(el.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===l||void 0===l?void 0:l(p),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(h.jsx)(Cc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===i||void 0===i||i(e.hex)}})]})}),Cd=e=>({colorList:e,raw:Ro(e)}),Fd=e=>{var t,a;let{palette:n=Ro(Io()),angle:i=180,memoizedOnChange:o}=e;const l=Pr(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(i),[u,m]=Object(r.useState)(()=>{var e,t;const a=Eo(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}}),p=Object(r.useCallback)((e,t)=>m(a=>{const r=a.colorList.map(a=>a.id===e?{...a,offset:t}:a);return{...a,...Cd(r)}}),[]);Object(r.useEffect)(()=>{d(i)},[i]),Object(r.useEffect)(()=>{var e,t;const a=Eo(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})},[n]);const b=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{var e;u.colorList[0]&&b.current&&(b.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))},[u.colorList]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find(e=>e.id===a);e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}},100),()=>{e=!1}},[u]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&o(u.colorList,c)},200),()=>{e=!1}},[u,c,o]),Object(h.jsxs)("div",{className:Yo(ol,"gradient-picker-container"),children:[Object(h.jsxs)("div",{className:"gradient-angle-control",children:[Object(h.jsx)("h2",{children:l["input.name-style.gradient.color-point.label"]}),Object(h.jsxs)(el.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m(e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort((e,t)=>Number(e.offset)-Number(t.offset));return{...e,...Cd(t)}})},children:[l["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(h.jsx)(sl,{angle:c,size:120,setAngle:d,children:Object(h.jsx)("h2",{children:l["input.name-style.gradient.gradient-direction.label"]})})]}),Object(h.jsx)("div",{className:"stop-color-picker-container",children:Object(h.jsx)(il.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m(t=>({...t,...Cd(e)})),onColorStopSelect:e=>{var t;m(t=>({...t,currentControlId:e.id})),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(h.jsx)(Sd,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:p,onRemove:e=>{m(t=>{var a;const r=t.colorList.filter(t=>t.id!==e),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var i;n>0&&u.colorList[n]&&(null===(i=s.current)||void 0===i||i.setColor(u.colorList[n]));return{...Cd(r),currentControlId:n}})}})})})]})},Ld=Object(b.b)(Zc.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,Td=Object(b.b)(Zc.Container)`
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
`,Nd=Object(b.b)(Zc.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Id=b.b.div`
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
`;var Rd=a(333);const Ed=Object(r.forwardRef)((e,t)=>{let{className:a,defaultValue:n,fieldMap:i,labelMap:o,onChange:l}=e;const s=Pr(),{x:c,y:d,color:u,width:m}=i,[p,b]=Object(r.useState)(()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}}),{x:g,y:f,color:v,width:y}=p,x=o[m];return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&l(p)},500),()=>{e=!1}},[p]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==p[a])return void b(t=>({...t,...e}))}})),Object(h.jsxs)("div",{className:a,children:[Object(h.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(h.jsxs)("div",{className:"line-position",children:[Object(h.jsx)(Rd.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==g&&void 0!==g?g:0,y:null!==f&&void 0!==f?f:0,onChange:e=>{let{x:t,y:a}=e;return b(e=>({...e,x:t,y:a}))}}),Object(h.jsxs)(Vl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[s["input.name-style.slider.x-offset.label"],":"]}),Object(h.jsx)(Rs.a,{size:"small",value:g,onChange:e=>b(t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))}),Object(h.jsxs)("span",{children:[s["input.name-style.slider.y-offset.label"],":"]}),Object(h.jsx)(Rs.a,{size:"small",value:f,onChange:e=>b(t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))})]}),Object(h.jsxs)("div",{className:"single-slider",children:[x,":\xa0",Object(h.jsx)(qc,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&b(t=>({...t,width:e}))}})]})]}),Object(h.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(h.jsx)(Cc.b,{colors:pa,color:v,onChangeComplete:e=>b(t=>({...t,color:e.hex}))})]})}),Md=Object(r.forwardRef)((e,t)=>{let{active:a,value:n,onClick:i,onCancel:o}=e;const l=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}})),Object(h.jsx)(Nd,{ref:l,...zo({stopPropagation:!0,optionLength:le.length,setFocus:c,onTrigger:()=>{s>=0&&i(le[s])},onCancel:()=>{null===o||void 0===o||o()}}),children:le.map((e,t)=>{const{key:r,image:o,label:l}=e;return Object(h.jsx)(Id,{className:Yo("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),i(e)},children:Object(h.jsx)("img",{className:"preset-preview",src:`/ygocarder/${o}`,alt:l})},r)})})}),zd=b.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,Pd=b.b.div`
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
`,Ad=.01;const Dd=re(),Hd=Object(r.forwardRef)((e,t)=>{let{defaultPitch:a=Dd.embossPitch,defaultYaw:n=Dd.embossYaw,defaultThickness:i=Dd.embossThickness,materialColor:o,children:l,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=Mo(),[p,b]=Object(r.useState)("#ffffff"),[g,f]=Object(r.useState)(i),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(a),O=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),k=Object(r.useRef)(i),[C]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{let e=!0;return m&&setTimeout(()=>{if(e){const e=Va(v,x),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(p);(t[0]!==O.current[0]||t[1]!==O.current[1]||t[2]!==O.current[2]||Math.abs(e[0]-w.current[0])>Ad||Math.abs(e[1]-w.current[1])>Ad||Math.abs(e[2]-w.current[2])>Ad||g!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:v,pitch:x,thickness:g}),O.current=t,w.current=e,k.current=g}},150),()=>{e=!1}},[m,p,v,x,g]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&b(t),a&&j(a),r&&y(r),"number"===typeof n&&y(n)}})),Object(h.jsxs)(Pd,{className:Yo(ol,"emboss-control"),children:[Object(h.jsx)("div",{className:"emboss-control-title",children:l}),Object(h.jsxs)("div",{className:"emboss-control-left",children:[Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(h.jsx)(zd,{className:"material-color",onClick:c,$color:o})]}),s["input.name-style.emboss.color.alert"](Object(h.jsx)("span",{className:c?"navigate-button":"",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(h.jsxs)("h2",{className:"thickness-row",children:[Object(h.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(h.jsx)(qc,{value:g,min:0,max:4,onChange:e=>{"number"===typeof e&&(f(e),u())}})]}),Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(h.jsx)(S.a,{className:"reset-button",onClick:()=>{j(90),u()}})]}),Object(h.jsxs)($l,{className:"vertical-angle-control",children:[Object(h.jsx)("div",{className:"slider-label"}),Object(h.jsx)(Rs.a,{size:"small",min:-90,max:90,onChange:e=>{j("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:x}),Object(h.jsx)(qc,{min:-90,max:90,value:x,onChange:e=>{j(e),u()}}),Object(h.jsx)("div",{className:"slider-padding"})]}),Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(h.jsx)(S.a,{className:"reset-button",onClick:()=>{y(90),u()}})]}),Object(h.jsx)("div",{className:"horizontal-angle-contorl",children:Object(h.jsx)(sl,{angle:v,size:120,setAngle:e=>{y(e),u()}})})]}),C&&Object(h.jsxs)("div",{className:"emboss-control-right",children:[Object(h.jsx)("h2",{children:"Light color"}),Object(h.jsx)(Cc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:p,onChange:e=>{b(e.hex),u()},onChangeComplete:e=>{b(e.hex),u()}})]})]})}),Bd=b.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,Wd=e=>{let{color:t,onChange:a}=e;const[n,i]=Object(r.useState)(t);return Object(r.useEffect)(()=>{i(t)},[t]),Object(h.jsxs)(Bd,{children:[Object(h.jsx)(Cc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>i(e.hex),onChangeComplete:e=>{i(e.hex),a(e.hex)}}),Object(h.jsx)(Cc.b,{colors:pa,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(592);const $d=Object(r.forwardRef)((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:i,showExtraDecorativeOption:o,onChange:l}=e;const s=Pr(),c=Object(r.useRef)(null),[d,u]=yn("nameStylePresetList"),[m,b]=Object(r.useState)(-1),[g,f]=Object(r.useState)(!1),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(i),[O,w]=Mo(),{db:k}=hn(),S=Object(r.useRef)(Nr()(l,250)).current,C=Zi(e=>e.setVisible),F=Object(r.useCallback)((e,t)=>{j(a=>({...a,gradientAngle:t,gradientColor:Ro(e)})),O()},[O]),L=mn(e=>e.setting.reduceMotionColor),T=Object(r.useMemo)(()=>{return[{label:(e=s)["input.name-style.type.auto.label"],value:ae},...Object.values(Te).map(t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}})];var e},[s]);Object(r.useEffect)(()=>{0!==w&&(y("custom"),S("custom",x))},[w]);const N=Object(r.useRef)(null),I=Object(r.useRef)(null),R=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r;j(t=>({...t,...e}));const{lineColor:n,lineWidth:i,lineOffsetX:o,lineOffsetY:l,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:p,embossThickness:b}=e;null===(t=N.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=I.current)||void 0===a||a.setValue({x:o,y:l,width:i,color:n}),null===(r=R.current)||void 0===r||r.setValue({pitch:m,yaw:p,thickness:b})}}));const{fillStyle:E,headTextFillStyle:M,hasOutline:z,hasShadow:P,hasGradient:A,gradientColor:D,gradientAngle:H,hasEmboss:B,embossPitch:W,embossYaw:$,embossThickness:Y,pattern:K,font:U}=x,{labelBackgroundColor:G,labelBackgroundImage:X}=null!==a&&void 0!==a?a:{},q={background:G,backgroundImage:X},V="custom"===v,_="predefined"===v,J="name-style-option-input-container",Q=()=>{y("auto"),"auto"!==v&&S("auto",x)},Z=()=>{var e;const t=x.preset?null===(e=oe[x.preset])||void 0===e?void 0:e.value:{};y("predefined"),j(e=>({...e,...t})),S("predefined",{...x,...t})},ee=()=>{y("custom"),"custom"!==v&&S("custom",x)},te="color-picker";return Object(h.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(h.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(h.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(h.jsxs)("span",{className:"name-style-input-container",children:[Object(h.jsxs)("div",{id:J,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...zo({setFocus:b,optionLength:3,onKeyPress:e=>{if(1===m&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),b(1),f(!0),setTimeout(()=>{var e;1===m&&(null===(e=c.current)||void 0===e||e.focus())},200),!1},onTrigger(){0===m&&Q(),1===m&&Z(),2===m&&ee()}}),children:[Object(h.jsxs)("label",{className:Yo("ant-radio-wrapper","auto"===v&&"ant-radio-wrapper-checked",0===m&&"ant-radio-focused"),onClick:()=>Q(),children:[Object(h.jsxs)("span",{className:"ant-radio "+("auto"===v?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(h.jsx)("span",{className:"name-style-option-break"}),Object(h.jsx)("label",{className:Yo("ant-radio-wrapper",_&&"ant-radio-wrapper-checked",1===m&&"ant-radio-focused"),onClick:()=>Z(),children:Object(h.jsx)(bl.a,{visible:g,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Md,{ref:c,active:_,value:x,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(J))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=oe[a])||void 0===t?void 0:t.value:{};y("predefined"),j(e=>({...e,...r})),S("predefined",{...x,...r})}})}),children:Object(h.jsxs)("span",{className:"name-style-option-label",children:[Object(h.jsxs)("span",{className:"ant-radio "+(_?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(h.jsx)("span",{className:"name-style-option-break"}),Object(h.jsx)("label",{className:Yo("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",2===m&&"ant-radio-focused"),onClick:()=>ee(),children:Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(h.jsxs)("div",{className:"style-picker",children:[Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsxs)("div",{className:"custom-style-text",children:[Object(h.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(h.jsx)(Wd,{color:E,onChange:e=>{y("custom"),j(t=>({...t,fillStyle:e})),O()}})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"custom-style-text",children:[Object(h.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(h.jsx)(Cc.b,{colors:pa,color:M,onChangeComplete:e=>{y("custom"),j(t=>({...t,headTextFillStyle:e.hex})),O()}})]})]})}),placement:"bottom",children:Object(h.jsxs)(Yl,{id:te,$softMode:L,$active:V,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(h.jsx)(kd.a,{})]})},"color-picker"),o&&Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(yl.a,{value:"has-shadow",checked:P,onChange:()=>{y("custom"),j(e=>({...e,hasShadow:!e.hasShadow})),O()},children:s["input.name-style.shadow.toggle.label"]})}),P&&Object(h.jsx)(Ed,{ref:N,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(h.jsxs)(Yl,{$softMode:L,$active:V&&P,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(h.jsx)(kd.a,{})]})},"shadow-picker"),Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(yl.a,{value:"has-line",checked:z,onChange:()=>{y("custom"),j(e=>({...e,hasOutline:!e.hasOutline})),O()},children:s["input.name-style.outline.toggle.label"]})}),z&&Object(h.jsx)(Ed,{ref:I,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(h.jsxs)(Yl,{$softMode:L,$active:V&&z,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(h.jsx)(kd.a,{})]})},"outline-picker"),o&&Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(yl.a,{value:"has-gradient",checked:A,onChange:()=>{y("custom"),j(e=>({...e,hasGradient:!e.hasGradient})),O()},children:s["input.name-style.gradient.toggle.label"]})}),A&&Object(h.jsx)("div",{className:"custom-style-gradient",children:Object(h.jsx)(Fd,{angle:H,palette:D,memoizedOnChange:F})})]})}),placement:"bottom",children:Object(h.jsxs)(Yl,{$softMode:L,$active:V&&A,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(h.jsx)(kd.a,{})]})},"gradient-picker"),o&&Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Ld,{onClick:e=>e.stopPropagation(),children:[Object(h.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),ce.map(e=>{let{key:t,patternImage:a}=e;return Object(h.jsx)(xs,{className:["pattern-option",x.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{j(e=>({...e,pattern:t})),O()},children:a?Object(h.jsx)("img",{style:a?q:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)})]})}),placement:"bottomLeft",children:Object(h.jsx)(Yl,{$softMode:L,$active:V&&"string"===typeof K&&"none"!==K,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Zc.Container,{children:T.map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Zc.Option,{className:U===t?"menu-active":"",onClick:()=>{j(e=>({...e,font:t})),O()},children:a},t)})})}),placement:"bottomLeft",children:Object(h.jsx)(Yl,{$softMode:L,$active:V&&"Auto"!==U,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),o&&Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(yl.a,{value:"has-emboss",checked:B,onChange:()=>{y("custom"),j(e=>({...e,hasEmboss:!e.hasEmboss})),O()},children:s["input.name-style.emboss.toggle.label"]})}),B&&Object(h.jsx)(Hd,{ref:R,language:s,defaultPitch:W,defaultYaw:$,defaultThickness:Y,materialColor:E,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(te))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;j(e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t})),O()},children:Object(h.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(h.jsx)(Yl,{$softMode:L,$active:V&&B,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker"),Object(h.jsxs)("div",{className:"save-preset-button-group",children:[Object(h.jsx)(el.a,{size:"small",className:"picker-dropdown preset-picker-dropdown",type:"primary",onClick:async()=>{const e=Object(de.a)();if(k){const t=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:e,content:JSON.stringify(x)}),await t.done}u(t=>[...t,{key:e,content:{...x}}])},children:s["input.name-style.preset.label"]}),Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay low-index",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Td,{onClick:e=>e.stopPropagation(),children:[d.length>0&&Object(h.jsxs)("div",{className:"preset-warning",children:[s["preset.warning.label"],"\xa0",Object(h.jsx)("span",{className:"open-preset-manager",onClick:()=>C(!0),children:s["preset.manager.check.label"]})]}),0===d.length&&Object(h.jsx)(uc.a,{description:s["generic.empty.label"]}),d.map(e=>{let{key:t,content:r}=e;return Object(h.jsx)(ws,{language:s,frameInfo:a,presetContent:r,onActive:()=>{j({...r}),O()},onOverwrite:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:t,content:JSON.stringify(x)}),await e.done}u(e=>e.map(e=>e.key===t?{key:t,content:{...x}}:e))},onDelete:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.delete("presetNameStyleStore",t),await e.done}u(e=>e.filter(e=>e.key!==t))},children:r.preset},t)})]})}),placement:"bottomRight",children:Object(h.jsx)("div",{className:"custom-preset-button",children:Object(h.jsx)(kd.a,{})})},"preset-picker")]})]})]})]})})}),Yd=b.a`
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
`;var Kd=a(660);const Ud=Object(b.b)(Yl)`
    ${e=>{let{$inline:t}=e;return t?"margin-left: var(--spacing-xs);":"margin-top: var(--spacing);"}}
`,Gd=e=>{var t;let{inline:a,changeFrame:n}=e;const{setting:i}=mn(),{reduceMotionColor:o}=i,l=Pr(),s=Object(r.useMemo)(()=>fd("unofficial"),[]),{frame:c}=un(Object(fn.useShallow)(e=>{let{card:t}=e;return{frame:t.frame}}));return a?Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Xd,{className:"frame-radio",value:c,onChange:n,optionList:s})}),placement:"bottom",children:Object(h.jsx)(Uo.a,{title:l["input.frame.unofficial.label"],children:Object(h.jsx)(Ud,{$softMode:o,$inline:a,$active:!1===(null===(t=Ke[c])||void 0===t?void 0:t.isOfficial),className:"picker-dropdown color-picker-dropdown",children:Object(h.jsx)(Kd.a,{})})})}):Object(h.jsx)(Xd,{className:"frame-radio",value:c,onChange:n,optionList:s})},Xd=Object(b.b)(Cl)`
	${Yd}
`,qd=Object(r.forwardRef)((e,t)=>{let{onSTFrameChange:a,onPasswordChange:n,onStatChange:i}=e;const{setting:o}=mn(),{showExtraDecorativeOption:l}=o,s=Object(r.useMemo)(()=>fd().filter(e=>l||"normal"===e.edition),[l]),{frame:c,setCard:d}=un(Object(fn.useShallow)(e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}})),u=Object(r.useCallback)(e=>{d(t=>{const{typeAbility:r,attribute:o,format:l,password:s,star:c,atk:d,def:u,linkRating:m}=t,p=`${e}`,b="spell"===p||"trap"===p,h=b||"speed-skill"===p,g="tcg"===l?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:Ye,f="spell"===p?[g["Spell Card"]]:"trap"===p?[g["Trap Card"]]:r,v="token"===p?We[l]:s,y=h?"":""===d?"0":d,x=h?"":""===u?"0":u,j=h?"":m,O="token"===p?0:c;return n(v),b&&a(f),i(y,x,j),{...t,frame:p,isLink:"link"===p,attribute:"token"===p?C:b?`${p}`.toUpperCase():o,star:O,typeAbility:f,password:v,atk:y,def:x,linkRating:j}})},[d,n,a,i]);return Object(r.useImperativeHandle)(t,()=>({changeFrame:u})),Object(h.jsx)(Xd,{className:"frame-radio",value:c,onChange:u,optionList:s,suffix:l&&Object(h.jsx)(Gd,{inline:!0,changeFrame:u})})}),Vd=b.b.div`
    ${wl}
`,_d=e=>{let{onChange:t,value:a,optionList:n,children:i,className:o}=e;const[l,s]=Object(r.useState)(-1),c=n.length;return Object(h.jsxs)(Vd,{className:["ant-radio-group ant-radio-group-outline checkbox-train",o].join(" "),children:[i&&Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(h.jsx)("div",{className:"checkbox-train-input-group",...zo({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[l];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter(t=>`${e.value}`!==t):[...a,`${e.value}`])}}}),children:n.map((e,r)=>{const{label:n,value:i,props:o,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${i}`),d=Object(h.jsxs)("label",{...o,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",l===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter(e=>`${i}`!==e):[...a,`${i}`])},children:[Object(h.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(h.jsx)("span",{className:"ant-radio-button-inner"})}),Object(h.jsx)("span",{className:"label",children:n})]},i);return s?Object(h.jsx)(Uo.a,{title:s,children:d},i):d})})]})},Jd=Object(b.b)(Oc)`
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
`,Qd=Object(r.forwardRef)((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=Pr(),{background:d,backgroundCrop:u,backgroundType:p,backgroundData:b,backgroundSource:g,backgroundFit:f,backgroundStyle:v,isPendulum:y,pendulumSize:x,opacity:j,getUpdater:O,setCard:w}=un(Object(fn.useShallow)(e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d},getUpdater:u,setCard:m}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d,getUpdater:u,setCard:m}})),k=Object(r.useRef)(null),S=Object(r.useMemo)(()=>O("backgroundSource"),[O]),C=Object(r.useMemo)(()=>O("background"),[O]),F=Object(r.useMemo)(()=>O("backgroundData"),[O]),L=Object(r.useCallback)(e=>w(t=>({...t,backgroundFit:e})),[w]),T=Object(r.useCallback)(e=>w(t=>({...t,backgroundStyle:{...t.backgroundStyle,...e}})),[w]),N=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&w(t=>({...t,backgroundCrop:e}),a)},[s,w]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=k.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=k.current)||void 0===o||o.forceSource("online",t,a))}})),Object(h.jsx)(Jd,{ref:k,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:g,defaultInternalSource:b,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:i,forceFit:f,imageStyle:v,onSourceChange:(e,t)=>{S(e),"offline"===e?F(t):C(t)},onCropChange:N,onTainted:l,onSourceLoaded:o,onForceFitChange:L,onImageStyleChange:T,onMaxSizeExceeded:e=>{Er.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(y,j,p,x).backgroundRatio,beforeCropper:null,children:n})});var Zd=a(661);a(593);const eu=b.b.div`
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
`,tu=b.b.div`
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
`,au=b.b.div`
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
`,ru=Object(r.forwardRef)((e,t)=>{var a;let{receivingCanvas:n,defaultValue:i,onTainted:o,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const p=Pr(),{background:b,backgroundData:g,backgroundSource:f,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,legacyTemplate:O,setCard:w}=un(Object(fn.useShallow)(e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:i,isPendulum:o,legacyTemplate:l},setCard:s,getUpdater:c}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:c,hasBackground:i,isPendulum:o,legacyTemplate:l,setCard:s}})),[k,S]=Object(r.useState)(!0),[C,F]=Object(r.useState)(!0),[L,T]=Object(r.useState)(()=>({...d(),...i})),N=Object(r.useRef)(null),I=Object(r.useMemo)(()=>y("backgroundType"),[y]),R=Object(r.useMemo)(()=>y("legacyTemplate"),[y]),E=Object(r.useCallback)(e=>w(t=>({...t,hasBackground:e.target.checked})),[w]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&s(L)},500),()=>{e=!1}},[L]),Object(r.useEffect)(()=>{S(!1),setTimeout(()=>{F(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...i}=e;var o;"string"!==typeof t&&"string"!==typeof r||!a||(null===(o=N.current)||void 0===o||o.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const l in i)i[l]!==L[l]&&T(e=>({...e,...i}))}}));const M=0===(null!==b&&void 0!==b?b:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(h.jsxs)(eu,{className:"card-opacity-slider-container",children:[Object(h.jsx)(Uo.a,{title:p["input.opacity.legacy.tooltip"],children:Object(h.jsx)(Wl,{className:"background-label",onClick:()=>R(e=>!e.legacyTemplate),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(yl.a,{checked:O}),"\xa0",p["input.opacity.legacy.label"]]})})}),Object(h.jsx)(bl.a,{overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(au,{className:"input-popover",children:[Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(yl.a,{className:"art-frame",onChange:e=>{T(t=>({...t,boundless:e.target.checked}))},checked:L.boundless,children:p["input.opacity.boundless.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:p["input.opacity.boundless.tooltip"]})]}),Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(yl.a,{className:"art-frame",disabled:!L.boundless,onChange:e=>{T(t=>({...t,frameBorder:e.target.checked,boundless:!!e.target.checked||t.boundless}))},checked:L.frameBorder,children:p["input.opacity.overframe.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{className:L.boundless?"":"tooltip-disable",children:p["input.opacity.overframe.tooltip"]})]}),ua.map(e=>{let{labelKey:t,subType:a,tooltipKey:r}=e;const n=a&&L[a];return Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(yl.a,{className:"art-frame",onChange:e=>T(t=>({...t,[a]:e.target.checked})),checked:n,children:p[t]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:p[r]})]},a)})]})}),children:Object(h.jsx)(Wl,{className:"background-label",children:Object(h.jsx)("div",{className:"button-label",children:p["input.opacity.setting.label"]})})}),Object(h.jsx)(bl.a,{visible:k,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:S,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",k?"picker-visible":"",C?"picker-hidden":""].join(" "),content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(tu,{className:["input-popover",M?"overlay-no-background-image":""].join(" "),children:[Object(h.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(h.jsx)(yl.a,{checked:x,onChange:e=>{E(e)},children:p["input.background.toggle-label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("i",{children:p["input.background.description"]})]}),Object(h.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(h.jsx)(Qd,{ref:N,receivingCanvas:n,onSourceLoaded:u,onTainted:o,onCropChange:m,backgroundColor:L.baseFill,children:Object(h.jsxs)("div",{className:"layout-picker-panel",children:[Object(h.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(h.jsx)("h2",{children:p["input.background-color.label"]}),Object(h.jsx)(Cc.b,{colors:pa,color:L.baseFill,onChangeComplete:e=>{T(t=>({...t,baseFill:e.hex}))}})]}),!M&&Object(h.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(h.jsx)("h2",{children:p["input.background-type.label"]}),Object(h.jsx)(Cl,{className:"background-type-picker",onChange:I,optionList:l({strict:p["input.background-type.strict.label"],fit:p["input.background-type.fit.label"],full:p["input.background-type.full.label"],frame:p["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(h.jsxs)(Wl,{className:"background-label",children:[Object(h.jsx)("div",{className:"background-preview",style:{backgroundColor:x?L.baseFill:c},children:x?b||g?Object(h.jsx)("img",{className:"background-image-preview",src:"online"===f?b:g,alt:"Background"}):null:Object(h.jsx)(Zd.a,{className:"no-background-icon"})}),p["input.background.label"]]})}),ma.map(e=>{var t,a;let{labelKey:r,type:n}=e;return"pendulum"!==n||j?Object(h.jsxs)($l,{className:["card-opacity-slider"].join(" "),children:[Object(h.jsx)(Wl,{className:"slider-label",children:p[r]}),Object(h.jsx)(Rs.a,{size:"small",min:0,max:100,onChange:e=>T(t=>({...t,[n]:"number"===typeof e?e:100})),value:null!==(t=L[n])&&void 0!==t?t:100}),Object(h.jsx)(qc,{min:0,max:100,step:5,onChange:e=>T(t=>({...t,[n]:e})),value:null!==(a=L[n])&&void 0!==a?a:100}),Object(h.jsx)("div",{className:"slider-padding"})]},n):null})]})});var nu=a(662);const iu=new Set(["1","2","3","4","5","i"]),ou=(e,t,a,r,n,i,o)=>{const l=e.substring(a,r),s="\n"===e[r]||!n;let c=l,d=2;switch(t){case"1":i?(c=`[[${l}]]${s?"":"\n"}`,d=s?4:5):(c=`[${l}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${l}}`;break;case"3":c=`{${l}|}`;break;case"4":c=`{${l}||}`,d=3;break;case"5":c=`{{${l}}}`,d=4;break;case"i":c=`<i>${l}</i>`,d=7}o(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},lu=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:su}=Ts.a,cu=Object(r.forwardRef)((e,t)=>{let{id:a,allowHotkey:n,defaultValue:i,onTakePicker:o,onChange:l,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(i),[m,p]=Object(r.useState)(i),[b,g]=Object(r.useState)({id:"",placement:-1}),f=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;u.current=t,p(t)},[]);Object(r.useEffect)(()=>{lu(b)},[b]),Object(r.useEffect)(()=>{l({target:{value:m}})},[m]);const v=e=>{e!==u.current&&f(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null})),Object(h.jsx)(su,{dir:"auto",id:a,autoComplete:"off",onFocus:()=>a&&(null===o||void 0===o?void 0:o({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:i,key:o,metaKey:l}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(i||l)&&a&&d!==c&&iu.has(o)&&(e.preventDefault(),ou(e.currentTarget.value,o,c,d,!0,e.shiftKey,(e,t)=>{f(e),g({id:a,placement:t})}))},onChange:f,...d})}),du=Object(r.forwardRef)((e,t)=>{let{id:a,defaultValue:n,onTakePicker:i,onChange:o,onKeyDown:l,className:s,...c}=e;const{setting:d}=mn(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[p,b]=Object(r.useState)(n),[g,f]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;m.current=t,b(t)},[]);Object(r.useEffect)(()=>{lu(g)},[g]),Object(r.useEffect)(()=>{o({target:{value:p}})},[p]);const y=e=>{e!==p&&v(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:y,getValue:()=>m.current})),Object(h.jsx)(Ts.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:p,onKeyDown:e=>{var t,r;if(null===l||void 0===l||l(e),!u)return;const{ctrlKey:n,key:i,metaKey:o}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||o)&&a&&c!==s&&iu.has(i)&&(e.preventDefault(),ou(e.currentTarget.value,i,s,c,!1,e.shiftKey,(e,t)=>{v(e),f({id:a,placement:t})}))},onChange:e=>v(e.target.value),...c})}),uu=b.b.div`
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
`,mu=b.b.div`
    .icon-button {
        margin-top: var(--spacing-xxs);
        margin-bottom: var(--spacing-xxs);
    }
`,pu=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{format:n,region:i,attribute:o,attributeType:l,getUpdater:s}=un(Object(fn.useShallow)(e=>{let{card:{format:t,region:a,isLink:r,attribute:n,attributeType:i},getUpdater:o}=e;return{format:t,region:a,isLink:r,attribute:n,attributeType:i,getUpdater:o}})),c=Object(r.useRef)(null),{setting:d,updateSetting:u}=mn(),[,m]=yn("resetCanvasCounter"),{showCreativeOption:b,showExtraDecorativeOption:g,showExtraAttribute:f}=d,[v,y]=Object(r.useState)("custom"===l),x=Object(r.useMemo)(()=>s("attribute"),[s]),j=Object(r.useMemo)(()=>s("attributeType"),[s]),O=Object(r.useMemo)(()=>s("region"),[s]),w=Object(r.useMemo)(()=>((e,t,a)=>F.map(a=>{var r;let{name:n,nameKey:i,isCreative:o}=a;return{label:n===C?Object(h.jsx)(p.a,{}):Object(h.jsx)(Uo.a,{overlay:t[i],children:Object(h.jsx)("img",{alt:t[i],src:`/ygocarder/asset/image/attribute/attr-${null===(r=I[e])||void 0===r?void 0:r.fileKey}-${n.toLowerCase()}.png`})}),value:n,isCreative:o}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(i,a,b),[i,a,b]),k=Object(r.useMemo)(()=>((e,t,a)=>L.map(a=>{let{name:r,nameKey:n,isCreative:i}=a;return{label:Object(h.jsx)(Uo.a,{overlay:t[n],children:Object(h.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:i}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(n,a,b),[n,a,b]),S=Object(r.useRef)("https://i.postimg.cc/3w5ZQ2rt/attr-custom-void.png");return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{attribute:t,attributeType:a}=e;var r;t&&("custom"===a&&(y(!0),u({showExtraAttribute:!1}),x(t),j("custom"),null===(r=c.current)||void 0===r||r.setValue(t)))}})),Object(h.jsxs)(h.Fragment,{children:[g&&Object(h.jsx)(uu,{className:Yo("attribute-region-container"),children:Object(h.jsx)(Cl,{className:"attribute-region-picker",optionList:Object.values(I).map(e=>{let{key:t}=e;return{value:t,label:t.toUpperCase()}}),value:i,onChange:O})}),Object(h.jsx)(Cl,{className:"fill-input-train span-input-train attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:w,suffix:g?Object(h.jsxs)(mu,{children:[Object(h.jsx)(jl,{onClick:()=>{var e,t;y(!0),u({showExtraAttribute:!1}),x(null!==(e=null===(t=c.current)||void 0===t?void 0:t.getValue())&&void 0!==e?e:S.current),j("custom")},active:"custom"===l,Icon:gs.a,tooltipProps:{overlay:a["input.attribute.type-custom"]}}),Object(h.jsx)(jl,{onClick:()=>{y(!1),u({showExtraAttribute:!0})},active:!!T[o],Icon:Kd.a,tooltipProps:{overlay:a["input.attribute.type-extra"]}})]}):null,children:Object(h.jsx)("span",{children:a["input.attribute.label"]})}),g&&f&&Object(h.jsx)(Cl,{className:"fill-input-train extra-attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:k,suffix:f?Object(h.jsx)(jl,{onClick:()=>u({showExtraAttribute:!1}),Icon:nu.a,tooltipProps:{overlay:a["button.less.label"]}}):null,children:"\xa0"}),v&&Object(h.jsxs)("div",{className:"link-attribute-input",children:[Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:"\xa0"}),Object(h.jsx)(du,{ref:c,placeholder:a["input.link.custom.placeholder"],defaultValue:"custom"===l?o:S.current,onChange:e=>{"custom"===l&&(S.current=e.target.value,x(e.target.value),m(e=>e+1))}}),Object(h.jsx)(jl,{onClick:()=>y(!1),Icon:nu.a,tooltipProps:{overlay:a["button.less.label"]}})]})]})});var bu=a(665),hu=a(666),gu=a(667),fu=a(663),vu=a(664);const yu=b.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
`,xu=Object(b.b)(Zc.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
`,ju=b.b.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    &.selector-disabled {
        filter: opacity(0.65) grayscale(0.85);
    }
`,Ou=e=>{let{disabled:t=!1,className:a,language:r,activeCardIcon:n,showMixableOnly:i=!1,showRemove:o=!1,onChange:l,onRemove:s}=e;const c=i?e=>e.isMixable:()=>!0;return Object(h.jsxs)(ju,{className:Yo("icon-dropdown-container overlay-event-absorber",t?"selector-disabled":"",a),children:[t&&Object(h.jsx)(yu,{className:"container-disable-overlay"}),Object(h.jsxs)(xu,{className:"container-group container-star",children:[o&&Object(h.jsxs)(Zc.Option,{onClick:()=>null===s||void 0===s?void 0:s(),children:[Object(h.jsx)(p.a,{}),"\xa0",r["input.icon-type.remove.label"]]}),D.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Zc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})]}),Object(h.jsx)(xu,{className:"container-group container-attribute",children:B.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Zc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})}),Object(h.jsx)(xu,{className:"container-group container-icon",children:$.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Zc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})})]})},wu=b.b.div`
    margin-bottom: var(--spacing);
`,ku=b.b.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`,Su=b.b.div`
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
`,Cu=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{starList:n,setCard:i}=un(Object(fn.useShallow)(e=>{let{card:{starList:t},setCard:a}=e;return{starList:t,setCard:a}})),[o,l]=Object(r.useState)(!1),s=Object(r.useMemo)(()=>e=>{i(t=>{const a=Array.isArray(e)?e:e(t.starList);return{...t,starList:a}})},[i]),[{slotList:c,use12:d},u]=Object(r.useState)(()=>{const e=[],t=n.length<=12;for(let a=0;a<U;a++)e.push({slot:`slot-${a}`,index:a,disabled:!1});return t&&(e[12].disabled=!0),{slotList:e,use12:t}}),[m,b]=Object(r.useState)({activeList:[]});Object(r.useImperativeHandle)(t,()=>({changeStatus:e=>{"open"===e?l(!0):"close"===e?l(!1):"toggle"===e&&l(e=>!e),b({activeList:[]})}}));const{activeList:g}=m;return Object(h.jsxs)(Ko.a,{className:"global-overlay global-no-close",visible:o,width:506,onCancel:()=>l(!1),cancelText:a["manager.template.button.cancel.label"],okButtonProps:{style:{display:"none"}},children:[Object(h.jsxs)(wu,{className:"star-list-control-panel",children:[Object(h.jsx)(yl.a,{checked:d,onChange:e=>{e.target.checked?(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!0,index:12,slot:"slot-12"}],use12:!0}}),s(e=>e.slice(0,12)),b(e=>{let{activeList:t}=e;return{activeList:t.filter(e=>12!==e)}})):(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!1,index:12,slot:"slot-12"}],use12:!1}}),s(e=>function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=[...e];for(let n=e.length;n<t;n++)r.push(a);return r}(e,U)))},children:a["input.icon-type.slot.use-12.label"]}),Object(h.jsx)(el.a,{size:"small",onClick:()=>{b(e=>({activeList:c.filter(t=>!e.activeList.includes(t.index)&&!t.disabled).map(e=>e.index)}))},children:a["input.icon-type.slot.revert.label"]}),"\xa0",Object(h.jsx)(el.a,{size:"small",onClick:()=>{b({activeList:c.filter(e=>!e.disabled).map(e=>e.index)})},children:a["input.icon-type.slot.select-all.label"]}),"\xa0",Object(h.jsx)(el.a,{size:"small",onClick:()=>{b({activeList:[]})},children:a["input.icon-type.slot.deselect-all.label"]})]}),Object(h.jsx)(Su,{className:"star-list-container",children:c.map(e=>{let{slot:t,index:a,disabled:r}=e;const i=n[a],o=K[null!==i&&void 0!==i?i:""],l=g.includes(a);return Object(h.jsxs)("div",{className:Yo("star-list-entry",l?"entry-active":"",r?"entry-disable":""),children:[Object(h.jsx)("div",{className:"checkbox-container",children:Object(h.jsx)(yl.a,{disabled:r,checked:l,onChange:e=>{if(r)return;const t=e.target.checked;b(t?e=>({activeList:[...e.activeList,a]}):e=>({activeList:e.activeList.filter(e=>e!==a)}))}})}),Object(h.jsx)("div",{className:"star-value",onClick:()=>{r||b({activeList:[a]})},children:o?o.icon:Object(h.jsx)(p.a,{})})]},t)})}),Object(h.jsxs)(ku,{children:[Object(h.jsxs)(el.a,{size:"small",onClick:()=>{s(e=>[...e.slice(1,e.length),""]),b({activeList:[]})},children:[Object(h.jsx)(fu.a,{}),"\xa0",a["input.icon-type.slot.shift-left.label"]]}),Object(h.jsxs)(el.a,{size:"small",onClick:()=>{s(e=>["",...e.slice(0,e.length-1)]),b({activeList:[]})},children:[a["input.icon-type.slot.shift-right.label"],"\xa0",Object(h.jsx)(vu.a,{})]})]}),Object(h.jsx)(Ou,{disabled:0===g.length,language:a,activeCardIcon:g.length>1?"":n[g[0]],showMixableOnly:!0,showRemove:!0,onRemove:()=>{s(e=>c.filter(e=>!e.disabled).map((t,a)=>g.includes(a)?"":e[a]))},onChange:e=>{s(t=>c.filter(e=>!e.disabled).map((a,r)=>g.includes(r)?e:t[r]))}})]})}),Fu=b.b.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`,Lu=Object(b.b)(Cl)`
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
`,Tu=Object(b.b)(Yl)`
    margin-left: var(--spacing-sm);
`,Nu=b.b.div`
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
            .icon-image {
                max-width: 22px; // Alignment
                max-height: 22px; // Alignment
            }
            .anticon-close-circle {
                font-size: var(--fs-xl);
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
`,Iu=e=>{let{language:t,value:a,onChange:r}=e;return Object(h.jsx)(Cl,{value:a,onChange:r,optionList:[{value:"auto",tooltipProps:{overlay:t["input.icon-type.alignment.auto"]},label:Object(h.jsx)(p.a,{})},{value:"left",tooltipProps:{overlay:t["input.icon-type.alignment.left"]},label:Object(h.jsx)(bu.a,{})},{value:"center",tooltipProps:{overlay:t["input.icon-type.alignment.center"]},label:Object(h.jsx)(hu.a,{})},{value:"right",tooltipProps:{overlay:t["input.icon-type.alignment.right"]},label:Object(h.jsx)(gu.a,{})}]})},Ru=Object(r.forwardRef)((e,t)=>{let{showCreativeOption:a}=e;const n=Pr(),{frame:i,subFamily:o,cardIcon:l,star:s,starList:c,starAlignment:d,getUpdater:u}=un(Object(fn.useShallow)(e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o},getUpdater:l}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o,getUpdater:l}})),m=mn(e=>e.setting.reduceMotionColor),b=Object(r.useRef)(null),g=Object(r.useMemo)(()=>u("cardIcon"),[u]),f=Object(r.useMemo)(()=>u("subFamily"),[u]),v=Object(r.useMemo)(()=>u("star"),[u]),y=Object(r.useMemo)(()=>u("starAlignment"),[u]);Object(r.useImperativeHandle)(t,()=>({}));const x=er(i),j="auto"===l?K["none"===x?"auto":x]:K[l],{labelKey:O,icon:w,showIcon:k,value:S}=null!==j&&void 0!==j?j:K.level,C="string"===typeof O?n[O]:O({language:n}),F=a?Object(h.jsxs)(Fu,{children:[k?w:null," ",C," ",Object(h.jsx)(kd.a,{})]}):C,L=Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)(Ou,{language:n,activeCardIcon:l,onChange:e=>{var t;g(e),"custom"===e&&(null===(t=b.current)||void 0===t||t.changeStatus("open"))}}),placement:"bottomRight",children:Object(h.jsx)("span",{className:`card-icon-dropdown ${"auto"===l?"":"active"} ${a?"":"disabled"}`,children:F})},"icon-type-picker"),T=a?L:F;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Cu,{ref:b,language:n}),"auto"===l&&"none"===x?a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Cl,{className:"fill-input-train",value:l,onChange:g,optionList:D.map(e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(h.jsx)(p.a,{}),value:a,tooltipProps:{title:n[r]}}}),children:T}),Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(xu,{className:"container-group container-attribute",children:B.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(h.jsxs)(Zc.Option,{className:a===l?"menu-active":"",onClick:()=>g(a),children:[r?Object(h.jsxs)(h.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(h.jsx)(Tu,{$softMode:m,className:a?"":"disabled",children:n["input.attribute.label"]})}),Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(xu,{className:"container-group container-icon",children:$.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(h.jsxs)(Zc.Option,{className:a===l?"menu-active":"",onClick:()=>g(a),children:[r?Object(h.jsxs)(h.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(h.jsxs)(Tu,{$softMode:m,className:a?"":"disabled",children:[n["input.attribute.spell"],"\xa0/\xa0",n["input.attribute.trap"]]})}),Object(h.jsx)(Tu,{$softMode:m,className:a?"":"disabled",onClick:()=>{var e;g("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:n["input.icon-type.custom.label"]})]}):null:"st"===S?Object(h.jsx)(Cl,{className:"fill-input-train",value:o,onChange:f,optionList:(N=n,M.map(e=>{let{value:t,nameKey:a}=e;return{label:t===E?Object(h.jsx)(p.a,{}):Object(h.jsx)(Uo.a,{overlay:N[a],children:Object(h.jsx)("img",{alt:N[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}})),children:T}):"custom"===S?Object(h.jsxs)(Nu,{className:"custom-star-picker",children:[Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:T}),Object(h.jsxs)("div",{className:"custom-star-content",children:[c.length>0?Object(h.jsx)("div",{className:"custom-star-preview",children:c.map((e,t)=>{const a=K[e];return Object(h.jsx)("span",{className:"star-preview-entry",children:a?a.icon:Object(h.jsx)(p.a,{})},`${e}-${t}`)})}):null,Object(h.jsx)(el.a,{size:"small",onClick:()=>{var e;g("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:n["generic.edit.label"]})]})]}):Object(h.jsx)(Lu,{className:"checkbox-star-train",value:s,onChange:v,optionList:vd,strict:!0,suffix:a&&Object(h.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(h.jsx)(Ts.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:v,placeholder:n["input.icon-type.custom.placeholder"]}),Object(h.jsx)(Iu,{language:n,value:d,onChange:y})]}),children:T})]});var N}),Eu=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=un(e=>e.getUpdater),i=Object(r.useRef)(null),o=Object(r.useMemo)(()=>n("effect",void 0,"debounce"),[n]);return Object(r.useEffect)(()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;null===(t=i.current)||void 0===t||t.setValue(e)}})),Object(h.jsx)(cu,{ref:i,id:"effect",allowHotkey:!0,defaultValue:un.getState().card.effect,onChange:o,onTakePicker:a,autoSize:{minRows:9}})}),Mu=b.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,zu=Object(r.forwardRef)((e,t)=>{const a=Pr(),{isDuelTerminalCard:n,isSpeedCard:i,isLimitedEdition:o,isLegacyCard:l,setCard:s}=un(Object(fn.useShallow)(e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}));Object(r.useImperativeHandle)(t,()=>({}));const c=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}),[s,l]),d=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{hasCornerText:!1,isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}),[s,l]),u=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{hasCornerText:!1,isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}),[s,l]),m=Object(r.useCallback)(e=>s(t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:i,isSpeedCard:o}=t;let l=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&o,l=!d&&!s&&r,c=!(l||s||c)&&i):(s=n,c=!s&&i,d=o,l=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:l,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}),[s]);return Object(h.jsxs)(Mu,{className:"checkbox-input",children:[Object(h.jsx)(Uo.a,{overlayClassName:"long-tooltip-overlay",overlay:a["input.legacy.tooltip"],children:Object(h.jsx)(yl.a,{className:"input-legacy",onChange:m,checked:l,tabIndex:0,children:a["input.legacy.label"]})}),Object(h.jsx)(yl.a,{className:"input-limited",onChange:c,checked:o,tabIndex:0,children:a["input.limited-edition.label"]}),Object(h.jsx)(yl.a,{className:"input-speed",onChange:u,checked:i,tabIndex:0,children:a["input.speed-duel.label"]}),Object(h.jsx)(yl.a,{className:"input-terminal",onChange:d,checked:n,tabIndex:0,children:a["input.duel-terminal.label"]})]})});var Pu=a(668);const Au=Object(b.b)(Zc.Container)`
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
    .radio-train.foil-radio {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-px); // Alignment
        .ant-radio-button-wrapper {
            font-size: var(--fs);
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
    ${Yd}
`,Du=b.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,Hu=b.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,Bu=Object(b.b)(Cl)`
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
`,Wu=b.b.div`
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
`,$u=Object(b.b)(Du)`
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
`,Yu=Object(r.forwardRef)((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:i}=e;const o=Pr(),{autoLinkRating:l,format:s,hasCornerText:c,isFirstEdition:d,isLegacyCard:u,isLink:m,linkRating:p,linkRatingDisplayMode:b,showDefAndLink:g,sticker:f,getUpdater:v,setCard:y}=un(Object(fn.useShallow)(e=>{let{card:{isLegacyCard:t,sticker:a,format:r,flag:n,isLink:i,linkRating:o,linkMap:l,isFirstEdition:s,hasCornerText:c},getUpdater:d,setCard:u}=e;return{autoLinkRating:l.length,format:r,hasCornerText:c,isFirstEdition:s,isLegacyCard:t,isLink:i,linkRating:o,linkRatingDisplayMode:n[fe],showDefAndLink:1===n[ge],sticker:a,getUpdater:d,setCard:u}})),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O=Object(r.useRef)(null),w=Object(r.useRef)(null),k=Object(r.useRef)(null),C=Object(r.useRef)(null),F=Object(r.useRef)(null),L=!0,T=nr(b,m),N=!T||g,I=[L,N,T].filter(e=>!0===e).length%2===1,R=s&&He[s]?He[s]:He.tcg,E=Object(r.useMemo)(()=>v("atk",e=>e),[v]),M=Object(r.useMemo)(()=>v("def",e=>e),[v]),z=Object(r.useMemo)(()=>v("linkRating",e=>e),[v]),P=Object(r.useMemo)(()=>v("password",void 0,"debounce"),[v]),A=Object(r.useMemo)(()=>v("sticker"),[v]),D=Object(r.useMemo)(()=>v("creator",void 0,"debounce"),[v]),H=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}),[y,u]),B=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{hasCornerText:!0}:{isSpeedCard:!1,isDuelTerminalCard:!1,hasCornerText:!0}:{hasCornerText:!1},{...t,...a}}),[y,u]),W=Object(r.useMemo)(()=>v("firstEditionText",void 0,"debounce"),[v]),$=Object(r.useMemo)(()=>v("cornerText",void 0,"debounce"),[v]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r,n,i,o;let{password:l,creator:s,atk:c,def:d,linkRating:u,firstEditionText:m,cornerText:p}=e;"string"===typeof c&&(null===(t=O.current)||void 0===t||t.setValue(c)),"string"===typeof d&&(null===(a=w.current)||void 0===a||a.setValue(d)),"string"===typeof l&&(null===(r=x.current)||void 0===r||r.setValue(l)),"string"===typeof s&&(null===(n=j.current)||void 0===n||n.setValue(s)),"string"===typeof u&&(null===(i=k.current)||void 0===i||i.setValue(u)),"string"===typeof m&&(null===(o=C.current)||void 0===o||o.setValue(m))}})),Object(h.jsxs)(Wu,{className:"card-footer-input",children:[(a||n)&&Object(h.jsxs)(h.Fragment,{children:[L&&Object(h.jsx)(du,{ref:O,id:"atk",addonBefore:o["input.atk.label"],defaultValue:un.getState().card.atk,onChange:E,onTakePicker:i}),N&&Object(h.jsx)(du,{ref:w,id:"def",addonBefore:o["input.def.label"],defaultValue:un.getState().card.def,onChange:M,onTakePicker:i}),I&&Object(h.jsx)("div",{}),T&&Object(h.jsx)(du,{ref:k,id:"link",addonBefore:Object(h.jsxs)($u,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.link.label"]}),Object(h.jsx)(Uo.a,{title:o["input.link.auto.tooltip"],children:Object(h.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof p&&p.length>0?Object(h.jsx)(yl.a,{onChange:e=>{var t;e.target.checked&&(z(""),null===(t=k.current)||void 0===t||t.setValue(""))}}):Object(h.jsx)("div",{className:"auto-link-rating",children:m?l:"-"})})})]}),defaultValue:`${un.getState().card.linkRating}`,onChange:z,onTakePicker:i,placeholder:o["input.link.custom.placeholder"]})]}),Object(h.jsx)(du,{ref:x,id:"password",addonBefore:Object(h.jsxs)(Du,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.password.label"]}),Object(h.jsx)(jl,{onClick:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.setValue(`${Po("0123456789",8)}`)},Icon:S.a,tooltipProps:{overlay:o["button.randomize.label"]}})]}),defaultValue:un.getState().card.password,onChange:P,onTakePicker:i}),Object(h.jsx)(du,{ref:j,id:"creator",addonBefore:Object(h.jsxs)(Du,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.copyright.label"]}),Object(h.jsx)(tl.a,{placement:"topLeft",arrow:!0,overlay:Object(h.jsx)(Kc.a,{onClick:e=>e.domEvent.stopPropagation(),children:R.map((e,t)=>Object(h.jsx)(Kc.a.Item,{onClick:()=>{var t;null===(t=j.current)||void 0===t||t.setValue(e)},children:e},`${t}`))}),children:Object(h.jsx)("div",{children:Object(h.jsx)(jl,{onClick:()=>{},Icon:Pu.a})})})]}),defaultValue:un.getState().card.creator,onChange:D,onTakePicker:i}),Object(h.jsx)(du,{ref:C,id:"firstEditionText",className:"first-edition-text",addonBefore:Object(h.jsxs)(Du,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.1st-edition.label"]}),"\xa0",Object(h.jsx)(yl.a,{className:"input-1st",onChange:H,checked:d,tabIndex:0}),Object(h.jsx)(tl.a,{placement:"topLeft",arrow:!0,overlay:Object(h.jsx)(Kc.a,{onClick:e=>e.domEvent.stopPropagation(),children:Be.map((e,t)=>{let{label:a,value:r}=e;return Object(h.jsx)(Kc.a.Item,{onClick:()=>{var e;H({target:{checked:!0}}),null===(e=C.current)||void 0===e||e.setValue(r)},children:a},`${t}`)})}),children:Object(h.jsx)("div",{children:Object(h.jsx)(jl,{onClick:()=>{},Icon:Pu.a})})})]}),defaultValue:un.getState().card.firstEditionText,onChange:W,onTakePicker:i}),Object(h.jsx)(du,{ref:F,id:"cornerText",className:"corner-text",addonBefore:Object(h.jsxs)(Du,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.corner.label"]}),"\xa0",Object(h.jsx)(yl.a,{className:"input-corner",onChange:B,checked:c,tabIndex:0})]}),defaultValue:un.getState().card.cornerText,onChange:$,onTakePicker:i}),Object(h.jsx)(zu,{}),Object(h.jsx)(Cl,{className:"sticker-input fill-input-train",value:f,onChange:A,optionList:yd,children:Object(h.jsx)("span",{children:o["input.sticker.label"]})})]})}),Ku=b.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,Uu=Object(b.b)(Cl)`
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
`,Gu=Object(b.b)(Zc.Option)`
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
`,Xu=e=>{let{finishValueList:t,changeFinish:a,language:n,showCreativeOption:i}=e;const[o,l]=Object(r.useState)(x.art.key),s={[x.attribute.key]:t[1],[x.background.key]:t[4],[x.icon.key]:t[2],[x.sticker.key]:t[3],[x.art.key]:t[0]},c=Object.values(s).some(e=>"normal"!==e),d=Object(r.useMemo)(()=>{return e=n,Object.values(x).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[n]),u=i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[x[o].labelKey]," ",Object(h.jsx)(kd.a,{})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[x[o].labelKey]]}),m=Object(h.jsx)(bl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Zc.Container,{children:[Object(h.jsx)(Qc,{children:n["input.other-finish.label"]}),d.map(e=>{let{label:t,value:a}=e;return Object(h.jsxs)(Gu,{className:Yo("normal"===s[a]?"default":"",o===a?"menu-active":""),onClick:()=>{l(a)},children:[Object(h.jsx)("div",{className:"value",children:Object(h.jsx)("div",{className:"tag",children:"normal"===s[a]||""===s[a]?"Auto":s[a]})}),Object(h.jsx)("div",{className:"label",children:t})]},a)})]})}),placement:"bottomRight",children:Object(h.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${i?"":"disabled"}`,children:u})},"icon-type-picker");return Object(h.jsx)(Uu,{className:"art-finish-checkbox fill-input-train",value:s[o],onChange:e=>{const t={...s};t[o]=`${e}`,a(t)},optionList:gd,children:m})},qu=Object(r.forwardRef)((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=Pr(),{opacity:d,artFinish:u,otherFinish:p,linkMap:b,isPendulum:g,pendulumSize:f,isLink:v,art:y,artCrop:j,artData:O,artSource:w,artFit:k,artStyle:S,getUpdater:C,setCard:F}=un(Object(fn.useShallow)(e=>{let{card:{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:p},getUpdater:b,setCard:h}=e;return{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:p,getUpdater:b,setCard:h}})),L=Object(r.useRef)(null),T=Object(r.useMemo)(()=>C("linkMap"),[C]),N=Object(r.useCallback)(e=>F(t=>({...t,isLink:e})),[F]),I=Object(r.useMemo)(()=>C("art"),[C]),R=Object(r.useMemo)(()=>C("artData"),[C]),E=Object(r.useCallback)(e=>F(t=>({...t,artFit:e})),[F]),M=Object(r.useCallback)(e=>F(t=>({...t,artStyle:{...t.artStyle,...e}})),[F]),z=Object(r.useMemo)(()=>C("artSource"),[C]),P=Object(r.useMemo)(()=>C("artFinish"),[C]),A=Object(r.useMemo)(()=>C("otherFinish"),[C]),D=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&F(t=>({...t,artCrop:e}),a)},[s,F]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=L.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=L.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=L.current)||void 0===o||o.forceSource("online",t,a))}})),Object(h.jsx)(Oc,{ref:L,title:c["input.card-art.label"],defaultSourceType:w,defaultExternalSource:y,defaultInternalSource:O,defaultCropInfo:j,forceFit:k,imageStyle:S,receivingCanvas:i,onSourceChange:(e,t)=>{z(e),"offline"===e?R(t):I(t)},onCropChange:D,onTainted:l,onSourceLoaded:o,onForceFitChange:E,onImageStyleChange:M,onMaxSizeExceeded:e=>{Er.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(g,d,void 0,f).ratio,beforeCropper:a?Object(h.jsx)(Xu,{finishValueList:[u,...p],changeFinish:e=>{P(e[x.art.key]),A([e[x.attribute.key],e[x.icon.key],e[x.sticker.key],e[x.background.key]])},language:c,showCreativeOption:n}):null,children:Object(h.jsx)(Ku,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(h.jsx)(Yc,{active:!0===v,defaultValue:b,onChange:T,onStatusChange:N},`link-${JSON.stringify(b)}`)})})}),Vu=b.b.div`
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
`,_u=b.b.span`
    cursor: pointer;
`,Ju=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=Pr(),{name:i,format:o,getUpdater:l}=un(Object(fn.useShallow)(e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}})),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)(()=>l("setId"),[l]),u=Object(r.useMemo)(()=>l("name",void 0,"debounce"),[l]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}})),Object(h.jsxs)(Vu,{className:"name-id-input",children:[Object(h.jsx)(du,{ref:s,dir:"auto",id:"name",defaultValue:i,addonBefore:Object(h.jsx)(Uo.a,{title:n["input.name.tooltip"],children:Object(h.jsx)(_u,{onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(jr(i))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(h.jsx)(du,{ref:c,id:"set-id",defaultValue:un.getState().card.setId,addonBefore:Object(h.jsxs)(Du,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(h.jsx)(jl,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>Po("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+Po("0000000000111111111122222222223456789",1)+Po("0123456789",2))(o))},Icon:S.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})});var Qu=a(669);const{width:Zu,height:em}=s,tm=b.b.div`
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
`,am=e=>{let{isPendulum:t,onOverwrite:a,onActive:r,language:n}=e;const{db:i}=hn(),[o,l]=yn("layoutPresetList"),s=Zi(e=>e.setVisible);return 0===o.length?Object(h.jsx)(h.Fragment,{}):Object(h.jsxs)(tm,{className:"frame-preset-panel",children:[o.length>0&&Object(h.jsx)("div",{className:"preset-panel-top",children:Object(h.jsxs)("div",{className:"preset-warning",children:[n["preset.warning.label"],"\xa0",Object(h.jsx)("span",{className:"open-preset-manager",onClick:()=>s(!0),children:n["preset.manager.check.label"]})]})}),o.map(e=>{let{content:o,key:s}=e;const{dyeList:c,foil:d,frame:u,pendulumFrame:m,leftFrame:p,pendulumRightFrame:b,rightFrame:g,effectStyle:f,pendulumStyle:v}=o,y={frame:u,topLeftFrame:p,topRightFrame:g,bottomLeftFrame:m,bottomRightFrame:b,effectBackground:null===f||void 0===f?void 0:f.background,pendulumEffectBackground:null===v||void 0===v?void 0:v.background};return Object(h.jsx)(Fs,{width:Math.round(40*Zu/em),height:40,isPendulum:t,resolvedLayoutState:ir(y,t),tabIndex:-1,dyeList:c,foil:d,language:n,onActive:()=>r(o),onDelete:async()=>{if(i){const e=i.transaction("presetLayoutStore","readwrite");await i.delete("presetLayoutStore",s),await e.done}l(e=>e.filter(e=>{let{key:t}=e;return s!==t}))},onOverwrite:a?()=>null===a||void 0===a?void 0:a(s):void 0})})]})},rm=Object(b.b)(Oc)`
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
`,nm=Object(r.forwardRef)((e,t)=>{let{children:a,receivingCanvas:n,onSourceLoaded:i,onTainted:o,onCropChange:l}=e;const s=Pr(),{overlay:c,overlayCrop:d,overlayData:m,overlaySource:p,overlayFit:b,overlayStyle:g,getUpdater:f,setCard:v}=un(Object(fn.useShallow)(e=>{let{card:{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n,overlayFit:i,overlayStyle:o},getUpdater:l,setCard:s}=e;return{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n,overlayFit:i,overlayStyle:o,getUpdater:l,setCard:s}})),y=Object(r.useRef)(null),x=Object(r.useMemo)(()=>f("overlaySource"),[f]),j=Object(r.useMemo)(()=>f("overlay"),[f]),O=Object(r.useMemo)(()=>f("overlayData"),[f]),w=Object(r.useCallback)(e=>v(t=>({...t,overlayFit:e})),[v]),k=Object(r.useCallback)(e=>v(t=>({...t,overlayStyle:{...t.overlayStyle,...e}})),[v]),S=Object(r.useCallback)((e,t,a)=>{null===l||void 0===l||l(e,t),e&&v(t=>({...t,overlayCrop:e}),a)},[l,v]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=y.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{overlay:t,overlayCrop:a,overlayData:r,overlaySource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=y.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=y.current)||void 0===o||o.forceSource("online",t,a))}})),Object(h.jsx)(rm,{ref:y,title:s["input.background-image.label"],defaultSourceType:p,defaultInternalSource:m,defaultExternalSource:c,defaultCropInfo:d,receivingCanvas:n,forceFit:b,imageStyle:g,onSourceChange:(e,t)=>{x(e),"offline"===e?O(t):j(t)},onCropChange:S,onTainted:o,onSourceLoaded:i,onForceFitChange:w,onImageStyleChange:k,onMaxSizeExceeded:e=>{Er.a.info({description:s["error.max-size.description"](e),message:s["error.max-size.message"]})},ratio:u.overframeCard.backgroundRatio,beforeCropper:null,isNotFoundAnError:!1,children:a})}),im=b.b.div`
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
`,om=()=>{const e=Pr(),{flag:t,setCard:a}=un(Object(fn.useShallow)(e=>{let{card:{flag:t},setCard:a,getUpdater:r}=e;return{flag:t,setCard:a,getUpdater:r}})),r=(e,t)=>a(a=>{const r=[...a.flag];return r[t]=e,{...a,flag:r}});return Object(h.jsx)(im,{children:t.map((e,t)=>({component:he[t],value:e,index:t})).sort((e,t)=>e.component.order-t.component.order).map(t=>{let{component:a,value:n,index:i}=t;const{labelKey:o,type:l}=null!==a&&void 0!==a?a:{};return"checkbox"===l?Object(h.jsx)("div",{children:Object(h.jsx)(yl.a,{checked:0!==n,onChange:e=>{const t=e.target.checked?1:0;r(t,i)},children:e[o]})},o):"link-rating-behavior"===l?Object(h.jsx)(Cl,{className:"link-rating-behavior-panel",onChange:e=>r(Number(e),i),optionList:[{label:e["input.flag.link-rating-behavior.auto"],value:0},{label:e["input.flag.link-rating-behavior.show"],value:1},{label:e["input.flag.link-rating-behavior.hide"],value:2}],value:n,suffix:Object(h.jsx)("label",{children:e[o]})},o):null})})},{width:lm,height:sm}=s,cm=b.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${Au} {
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
    .custom-foil-group {
        padding-top: var(--spacing-2xl);
        .card-image-source-input {
            width: 280px;
            padding-right: var(--spacing-sm);
        }
    }
    .custom-foil-group-hidden {
        visibility: hidden;
        position: absolute;
        width: 0;
    }
`,dm=Object(r.forwardRef)((e,t)=>{var a,n;let{receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s,frameList:c,onFrameChange:d,onCancel:u}=e;const{db:m}=hn(),p=Pr(),{isPendulum:b,foil:g,frame:f,leftFrame:v,rightFrame:y,pendulumFrame:x,pendulumRightFrame:j,effectBackground:O,pendulumEffectBackground:w,dyeList:S,setCard:C,getUpdater:F}=un(Object(fn.useShallow)(e=>{let{card:{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,dyeList:s,effectStyle:c,pendulumStyle:d},setCard:u,getUpdater:m}=e;return{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,effectBackground:c.background,pendulumEffectBackground:d.background,dyeList:s,setCard:u,getUpdater:m}})),{globalScale:L}=mn(Object(fn.useShallow)(e=>{let{setting:{globalScale:t}}=e;return{globalScale:t}})),[,T]=yn("layoutPresetList"),N=Object(r.useRef)({topLeftFrame:"auto"===x?"spell":x,topRightFrame:"auto"===x?"spell":x,bottomLeftFrame:"auto"===x?"spell":x,bottomRightFrame:"auto"===x?"spell":x,effectBackground:"auto"===x?"spell":x,pendulumEffectBackground:"auto"===x?"spell":x}),[I,R]=Object(r.useState)(0),[E,M]=Object(r.useState)("frame"),z="frame-layout-main",P=Object(r.useMemo)(()=>hd(p),[p]),A=Object(r.useRef)(null);Object(r.useEffect)(()=>{"pendulumEffectBackground"!==E||b||M("frame")},[E,b]),Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=document.getElementById(z))||void 0===e?void 0:e.focus()}}));const D=Object(r.useMemo)(()=>F("foil"),[F]),H=Object(r.useMemo)(()=>F("pendulumFrame"),[F]),B=Object(r.useMemo)(()=>F("pendulumRightFrame"),[F]),W=Object(r.useMemo)(()=>F("leftFrame"),[F]),$=Object(r.useMemo)(()=>F("rightFrame"),[F]),Y=e=>C(t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}}),K=e=>C(t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}}),U=Object(r.useMemo)(()=>F("dyeList"),[F]),G=e=>{"bottomLeftFrame"===E&&H(e),"bottomRightFrame"===E&&B(e),"topLeftFrame"===E&&W(e),"topRightFrame"===E&&$(e),"effectBackground"===E&&Y(e),"pendulumEffectBackground"===E&&K(e)},X={frame:f,topLeftFrame:v,topRightFrame:y,bottomLeftFrame:x,bottomRightFrame:j,effectBackground:O,pendulumEffectBackground:w},q=X[E],V=ir(X,b),_=k[E];return Object(h.jsxs)(cm,{children:[Object(h.jsxs)("div",{className:"visual-preview-container",children:[Object(h.jsx)("label",{children:p["input.advanced-frame.main.label"]}),Object(h.jsx)(dc,{id:z,tabIndex:0,className:"frame"===E?"active":"",...null!==(a=Ke[f])&&void 0!==a?a:Ge,onClick:()=>M("frame")}),Object(h.jsx)("label",{children:p["input.advanced-frame.detailed.label"]}),Object(h.jsx)(Ss,{width:2*Math.round(lm/20),height:2*Math.round(sm/20),isPendulum:b,baseLayoutState:X,resolvedLayoutState:V,activeLayout:E,onLayoutSelect:e=>M(e),dyeList:S,foil:g,language:p,vertical:!0}),Object(h.jsxs)("div",{className:"frame-action",children:[Object(h.jsx)(el.a,{size:"small",onClick:()=>{H("auto"),B("auto"),W("auto"),$("auto"),Y("auto"),K("auto"),D("normal"),U(["","","","","","",""])},children:p["generic.reset.label"]}),Object(h.jsx)(el.a,{size:"small",type:"primary",onClick:async()=>{const e=Object(de.a)(),t={foil:g,frame:f,leftFrame:v,pendulumFrame:x,pendulumRightFrame:j,rightFrame:y,effectStyle:{background:O},pendulumStyle:{background:w},dyeList:[...S]};if(m){const a=m.transaction("presetLayoutStore","readwrite");await m.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}T(a=>[...a,{key:e,content:t}])},children:p["input.advanced-frame.save.label"]})]})]}),Object(h.jsx)("div",{children:Object(h.jsxs)(Au,{className:"pendulum-frame-picker",...zo({stopPropagation:!0,optionLength:c.length,setFocus:R,onTrigger:()=>{I>=0&&G(c[I].value)},onCancel:u}),children:[Object(h.jsx)("div",{className:"frame-part-name",children:p[null===(n=Xe[E])||void 0===n?void 0:n.labelKey]}),"foil"!==E&&Object(h.jsx)(yl.a,{className:Yo("inline-input","frame"===E?"checkbox-disabled":""),checked:"auto"===q,disabled:"frame"===E,onChange:e=>{var t;G(e.target.checked?"auto":null!==(t=N.current[E])&&void 0!==t?t:"auto")},children:p["input.frame.auto"]}),"foil"!==E&&Object(h.jsx)(Cl,{className:"frame-radio",value:q,onChange:e=>{"frame"===E?d(e):G(e)},optionList:c}),Object(h.jsx)("div",{className:Yo("custom-foil-group","foil"!==E?"custom-foil-group-hidden":""),style:{"--card-height":sm*L+"px","--card-width":lm*L+"px","--global-scale":`${L}`,"--cropper-width":"200px"},children:Object(h.jsx)(nm,{ref:A,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s,children:Object(h.jsx)(Cl,{className:"foil-radio",value:g,onChange:D,optionList:P,children:Object(h.jsx)("span",{children:p["input.foil.label"]})})})}),"number"===typeof _&&Object(h.jsx)(Rc,{value:S[_],onChange:e=>{e!==S[_]&&((e,t)=>{C(a=>{const r=k[t];if("number"!==typeof r)return a;const n=[...a.dyeList];return n[r]=e,{...a,dyeList:n}})})(e,E)},children:Object(h.jsx)(Vc,{$fixedSize:!1,children:p["input.advanced-frame.dye"]})})]})}),Object(h.jsx)(am,{language:p,isPendulum:b,onOverwrite:async e=>{const t={foil:g,frame:f,leftFrame:v,pendulumFrame:x,pendulumRightFrame:j,rightFrame:y,effectStyle:{background:O},pendulumStyle:{background:w},dyeList:[...S]};if(m){const a=m.transaction("presetLayoutStore","readwrite");await m.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}T(a=>a.map(a=>a.key===e?{key:e,content:t}:a))},onActive:e=>{const{dyeList:t,foil:a,frame:r,pendulumFrame:n,leftFrame:i,pendulumRightFrame:o,rightFrame:l,effectStyle:s,pendulumStyle:c}=e;d(r),H(n),B(o),W(i),$(l),Y(s.background),K(c.background),D(a),U(t)}})]})}),um=[{...he[0],valueDisplay:(e,t)=>e["input.flag.mix-def-link"],sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.mix-def-link"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...he[2],valueDisplay:(e,t)=>e["input.flag.hide-deactivated-link"],sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.hide-deactivated-link"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...he[1],valueDisplay:(e,t)=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.link-rating-behavior"],": ",e[1===t?"input.flag.link-rating-behavior.show":"input.flag.link-rating-behavior.hide"]]}),sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.link-rating-behavior"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:0,children:0}),": ",e["input.flag.link-rating-behavior.auto"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:1,children:1}),": ",e["input.flag.link-rating-behavior.show"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Pl,{data:2,children:2}),": ",e["input.flag.link-rating-behavior.hide"]]})]})]})}],{width:mm,height:pm}=s,bm=b.b.div`
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
`,hm=b.b.div`
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
`,gm=Object(r.forwardRef)((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:i,receivingCanvas:o,onTakePicker:l,onFrameChange:s,onCropChange:c,onTainted:d,onSourceLoaded:u}=e;const m=Pr(),{isPendulum:p,frame:b,foil:g,leftFrame:f,rightFrame:v,pendulumFrame:y,pendulumRightFrame:x,effectBackground:j,pendulumEffectBackground:O,pendulumScaleBlue:w,pendulumScaleRed:k,pendulumSize:S,dyeList:C,flag:F,setCard:L,getUpdater:T}=un(Object(fn.useShallow)(e=>{let{card:{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectStyle:u,pendulumStyle:m,dyeList:p,flag:b},setCard:h,getUpdater:g}=e;return{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectBackground:u.background,pendulumEffectBackground:m.background,dyeList:p,flag:b,setCard:h,getUpdater:g}})),{mirrorPendulumScale:N,updateSetting:I}=mn(Object(fn.useShallow)(e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}})),R=Object(r.useRef)(null),E=Object(r.useRef)(null),M=Object(r.useRef)(null),[z,P]=Object(r.useState)(!0),[A,D]=Object(r.useState)(!0),H=Object(r.useMemo)(()=>T("pendulumScaleRed"),[T]),B=Object(r.useMemo)(()=>T("pendulumScaleBlue"),[T]),W=Object(r.useMemo)(()=>T("pendulumSize"),[T]),$=Object(r.useMemo)(()=>T("pendulumEffect",void 0,"debounce"),[T]),Y=Object(r.useMemo)(()=>{return e=m,Object.values(ue).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[m]),K=Object(r.useMemo)(()=>fd("both").filter(e=>i||"normal"===e.edition),[i]);Object(r.useEffect)(()=>{P(!1),setTimeout(()=>{D(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=M.current)||void 0===t||t.setValue(a))}}));const U={frame:b,topLeftFrame:f,topRightFrame:v,bottomLeftFrame:y,bottomRightFrame:x,effectBackground:j,pendulumEffectBackground:O},G=F.map((e,t)=>{const a=um[t];return 0!==e&&a?Object(h.jsx)("li",{children:a.valueDisplay(m,e)},a.labelKey):null}).filter(e=>null!=e);return Object(h.jsxs)(hm,{className:"pendulum-input",children:[Object(h.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(h.jsx)("div",{className:"pendulum-checkbox",children:Object(h.jsx)(yl.a,{onChange:e=>L(t=>({...t,isPendulum:e.target.checked})),checked:p,children:m["input.pendulum.label"]})}),Object(h.jsxs)("div",{className:"pendulum-option-container",children:[n&&Object(h.jsx)(bl.a,{visible:z,onVisibleChange:P,trigger:["click"],placement:"bottom",overlayClassName:["pendulum-frame-picker-overlay layout-picker-overlay",z?"picker-visible":"",A?"picker-hidden":""].join(" "),content:Object(h.jsxs)("div",{className:"overlay-event-absorber",children:[Object(h.jsx)(dm,{ref:E,isPendulum:p,frameList:K,pendulumFrame:y,onTainted:d,onCropChange:c,onSourceLoaded:u,receivingCanvas:o,onFrameChange:s,onCancel:()=>{var e;P(!1),null===(e=R.current)||void 0===e||e.focus()}}),Object(h.jsx)(om,{})]}),children:Object(h.jsxs)(bm,{ref:R,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return P(!0),setTimeout(()=>{var e;null===(e=E.current)||void 0===e||e.focus()},200),!1},children:[Object(h.jsx)("span",{className:"pendulum-frame-label",children:m["input.advanced-frame.label"]}),Object(h.jsx)("div",{className:"card-layout-preview-container",children:Object(h.jsx)(Ss,{width:Math.round(30*mm/pm),height:30,isPendulum:p,resolvedLayoutState:ir(U,p),tabIndex:-1,dyeList:C,foil:g,language:m})}),G.length>0?Object(h.jsx)(Hl,{content:Object(h.jsxs)(Dl,{children:[m["input.flag.effective.label"],Object(h.jsx)("ul",{children:G})]}),children:Object(h.jsx)(Qu.a,{})}):null,Object(h.jsx)(kd.a,{})]})}),p&&n&&Object(h.jsx)("div",{className:"pendulum-size",children:Object(h.jsx)(bl.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Zc.Container,{children:Y.map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Zc.Option,{className:S===t?"menu-active":"",onClick:()=>{W(t)},children:a},t)})})}),placement:"bottomLeft",children:Object(h.jsx)(Yl,{$softMode:a,$active:S!==be,children:m[ue[S].labelKey]})},"color-picker")}),p&&n&&Object(h.jsx)(yl.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;I({mirrorPendulumScale:t}),t&&H(w)},checked:N,children:m["input.mirror-scale.label"]})]})]}),p&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(Ts.a,{addonBefore:Object(h.jsx)("span",{children:m["input.scale.label"](Object(h.jsx)("span",{className:"blue-scale",children:m["input.scale.blue.label"]},"blue-scale"))}),value:w,allowClear:!0,onChange:e=>{B(e),N&&H(e)}})}),Object(h.jsx)("div",{children:Object(h.jsx)(Ts.a,{addonBefore:Object(h.jsx)("span",{children:m["input.scale.label"](Object(h.jsx)("span",{className:"red-scale",children:m["input.scale.red.label"]},"red-scale"))}),value:k,allowClear:!0,onChange:e=>{N&&B(e),H(e)}})}),Object(h.jsx)("div",{className:"joined-row",children:Object(h.jsx)(cu,{ref:M,id:"pendulum-effect",allowHotkey:!0,defaultValue:un.getState().card.pendulumEffect,onChange:$,onTakePicker:l,autoSize:{minRows:5}})})]})]})}),fm=b.b.div`
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
`,vm=b.b.div`
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
`,ym=b.b.div`
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
`,xm=Object(r.forwardRef)((e,t)=>{var a;let{onTakePicker:n}=e;const i=Pr(),{frame:o,cardIcon:l,format:s,furiganaHelper:c,condenseTolerant:d,setCard:u,getUpdater:m}=un(Object(fn.useShallow)(e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:i},setCard:o,getUpdater:l}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===i||void 0===i?void 0:i.condenseTolerant,setCard:o,getUpdater:l}})),p=mn(e=>e.setting.showExtraDecorativeOption),b="ocg"===s?"\uff0f":"/",g=Object(r.useRef)(null),[f,v]=Object(r.useState)(()=>un.getState().card.effectStyle.minLine),[y,x]=Object(r.useState)(()=>un.getState().card.pendulumStyle.minLine),[j,O]=Object(r.useState)(()=>un.getState().card.effectStyle.justifyRatio),[w,k]=Object(r.useState)(()=>un.getState().card.pendulumStyle.justifyRatio),S=Object(r.useMemo)(()=>m("typeAbility",e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map(e=>`${e}`.trim()).filter(e=>"string"===typeof e&&e.length>0),"debounce"),[m]),C=Object(r.useCallback)(e=>u(t=>({...t,furiganaHelper:e.target.checked})),[u]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&u(e=>{const t={...e.effectStyle,minLine:f,justifyRatio:j},a={...e.pendulumStyle,minLine:y,justifyRatio:w};return{...e,effectStyle:t,pendulumStyle:a}})},500),()=>{e=!1}},[j,f,w,y,u]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{typeAbility:a,effectMinLine:r,pendulumEffectMinLine:n,effectJustifyRatio:i,pendulumEffectJustifyRatio:o}=e;a&&(null===(t=g.current)||void 0===t||t.setValue(a.join(b))),"number"===typeof r&&v(r),"number"===typeof n&&x(n),"number"===typeof i&&O(i),"number"===typeof o&&k(o)}}));const F="auto"===l?Za({frame:o})?"input.type.monster.label":"input.type.st.label":"st"===(null===(a=A[l])||void 0===a?void 0:a.value)?"input.type.st.label":"input.type.monster.label",L="ocg"===s;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(fm,{className:`post-pendulum-input first-line variant-${s}`,children:[Object(h.jsx)(du,{ref:g,dir:"auto",addonBefore:i[F],id:"type-ability",defaultValue:un.getState().card.typeAbility.join(b),onChange:S,onTakePicker:n}),L&&Object(h.jsx)(Uo.a,{overlay:i["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(h.jsx)(yl.a,{className:"input-kanji-helper",onChange:C,checked:c,children:i["input.furigana-helper.label"]})}),Object(h.jsx)(lc,{}),p&&Object(h.jsx)(bl.a,{overlayClassName:"global-input-overlay global-style-picker-overlay paragraph-style",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(ym,{className:"input-popover",children:[Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsxs)("h2",{children:[i["input.condense.label"],Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:i["input.condense.tooltip"]})]}),Object(h.jsx)("div",{className:"line-input",children:Object(h.jsx)(Cl,{className:"condense-input",value:`${d}`,onChange:e=>(e=>{u(t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}}))})(e),optionList:xd})})]}),Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsx)("h2",{children:i["input.text-style.min-line.label"]}),Object(h.jsx)("div",{className:"line-input",children:Object(h.jsxs)(Vl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(h.jsx)(Rs.a,{id:"effect-line",size:"small",value:f,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>v("number"===typeof e?e:0),min:0,max:50}),Object(h.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(h.jsx)(Rs.a,{id:"pendulum-effect-line",size:"small",value:y,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>x("number"===typeof e?e:0),min:0,max:50})]})})]}),Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsxs)("h2",{children:[i["input.text-style.justify-ratio.label"],Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:i["input.text-style.justify-ratio.tooltip"]})]}),Object(h.jsx)("div",{className:"justify-ratio-input",children:Object(h.jsxs)(Vl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(h.jsx)(Rs.a,{id:"effect-justify-ratio",size:"small",value:j,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>O("number"===typeof e?e:0),min:0,max:5e3,step:100}),Object(h.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(h.jsx)(Rs.a,{id:"pendulum-effect-justify-ratio",size:"small",value:w,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>k("number"===typeof e?e:0),min:0,max:5e3,step:100})]})})]})]})}),children:Object(h.jsx)(vm,{children:Object(h.jsx)("div",{className:"button-label",children:i["input.text-style.paragraph-style.label"]})})})]})})}),jm=b.b.div`
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
`,Om=b.b.div`
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
`,wm={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},km=()=>{const e=Pr(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:l,statTextStyle:s,typeTextStyle:c}=un(Object(fn.useShallow)(e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,statTextStyle:l,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:c,statTextStyle:l,typeTextStyle:s}})),d=[{info:wm.effectTextStyle,value:r,extraValue:a},{info:wm.pendulumTextStyle,value:o,extraValue:i},{info:wm.statTextStyle,value:s},{info:wm.typeTextStyle,value:c},{info:wm.otherTextStyle,value:n}];return Object(h.jsx)(bl.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Om,{className:"input-popover",children:d.map(a=>{let{info:r,value:n,extraValue:i}=a;const{keyName:o,labelKey:s,extraKeyname:c}=r,[d,u,m,b]=n,{upSize:g,fontStyle:f}=null!==i&&void 0!==i?i:{};return Object(h.jsxs)("div",{className:"style-section",children:[Object(h.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(h.jsx)("span",{children:e[s]}),Object(h.jsx)(yl.a,{checked:d,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[a,...n.slice(1)]}})},children:e["input.text-style.custom.label"]})]}),d&&Object(h.jsxs)("div",{className:"style-picker-section",children:["string"===typeof f&&"tcg"===t&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h2",{className:"font-style-picker",children:[Object(h.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(h.jsx)(Cl,{className:"inline-radio-train",value:f,optionList:[{label:Object(h.jsx)(p.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t})}})]})}),"number"===typeof g&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h2",{className:"size-picker",children:[Object(h.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(h.jsx)(Cl,{className:"inline-radio-train",value:g,optionList:[{label:Object(h.jsx)(p.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t})}})]})}),Object(h.jsx)("h2",{children:Object(h.jsx)(yl.a,{className:"shadow-checkbox",checked:m,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[...n.slice(0,2),a,n[3]]}})},children:Object(h.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(h.jsx)(Sc,{value:b,onChange:e=>l(t=>({...t,[o]:[...n.slice(0,3),e]}))}),Object(h.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(h.jsx)(Cc.b,{colors:pa,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{l(t=>({...t,[o]:[n[0],e.hex,...n.slice(2,4)]}))}})]})]},o)})})}),children:Object(h.jsxs)(jm,{className:"text-style-preview",children:[Object(h.jsx)("div",{className:"text-style-grid",children:d.map(e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[i,o,l,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(h.jsx)("div",{className:"text-style-preview-section",style:{background:i?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==o&&void 0!==o?o:"").length&&i?o:"var(--color-contrast)",textShadow:i&&l?`0 0 2px ${s}`:"none",fontStyle:i&&"italic"===d?"italic":"normal"},children:c&&i?Object(h.jsxs)("div",{children:["+",c]}):"Auto"},n)})}),Object(h.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(594);const Sm=Object(r.forwardRef)((e,t)=>{let{applyCardData:a,artworkCanvas:n,backgroundCanvas:i,foilCanvas:o,onCropChange:l,onTainted:s,onSourceLoaded:c}=e;const d=Pr(),{format:u,frame:m,foil:p,finish:b,opacity:g,nameStyleType:f,nameStyle:y,getUpdater:x,setCard:j}=un(Object(fn.useShallow)(e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s},getUpdater:c,setCard:d}=e;return{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s,getUpdater:c,setCard:d}})),{setting:O}=mn(),{showCreativeOption:w,showExtraDecorativeOption:k,reduceMotionColor:S}=O,C=Object(r.useRef)(null),F=Za({frame:m}),[L,T]=Object(r.useState)(0),N=Object(r.useMemo)(()=>hd(d),[d]),I=Object(r.useRef)(null),R=Object(r.useRef)(null),E=Object(r.useRef)(null),M=Object(r.useRef)(null),z=Object(r.useRef)(null),P=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),[B,W]=Object(r.useState)({id:"",setValue:()=>{}}),$=Object(r.useMemo)(()=>x("foil"),[x]),Y=Object(r.useMemo)(()=>x("finish"),[x]),K=Object(r.useCallback)(e=>j(t=>({...t,opacity:e})),[j]),U=Object(r.useCallback)((e,t)=>{j(a=>({...a,nameStyleType:e,nameStyle:t}))},[j]),G=Object(r.useMemo)(()=>{return e=d,Object.values(v).map(t=>{let{value:a,label:r,labelKey:n,tooltipKey:i}=t;return{label:n?e[n]:r,tooltip:i?e[i]:void 0,value:a}});var e},[d]);return Object(r.useEffect)(()=>{var e;null===(e=C.current)||void 0===e||e.setValue({font:y.font})},[y]),Object(r.useEffect)(()=>{var e;null===(e=M.current)||void 0===e||e.setValue(g)},[g]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=E.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=M.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,n,i,o,l,s;T(e=>e+1);const{name:c,art:d,artCrop:u,artData:m,artSource:p,background:b,backgroundCrop:h,backgroundData:g,backgroundSource:f,overlay:v,overlayCrop:y,overlayData:x,overlaySource:j,opacity:O,attribute:w,attributeType:k,setId:S,pendulumEffect:C,typeAbility:F,effect:L,atk:N,def:I,creator:B,password:W,effectStyle:$,pendulumStyle:Y,firstEditionText:K,cornerText:U}=e;null===(t=E.current)||void 0===t||t.setValue({art:d,artCrop:u,artData:m,artSource:p}),null===(a=M.current)||void 0===a||a.setValue({...O,background:b,backgroundCrop:h,backgroundData:g,backgroundSource:f}),null===(r=R.current)||void 0===r||r.setValue({attribute:w,attributeType:k}),null===(n=z.current)||void 0===n||n.setValue({name:c,setId:S}),null===(i=P.current)||void 0===i||i.setValue({pendulumEffect:C,overlay:v,overlayCrop:y,overlayData:x,overlaySource:j}),null===(o=A.current)||void 0===o||o.setValue(L),null===(l=D.current)||void 0===l||l.setValue({typeAbility:F,effectMinLine:$.minLine,pendulumEffectMinLine:Y.minLine,effectJustifyRatio:$.justifyRatio,pendulumEffectJustifyRatio:Y.justifyRatio}),null===(s=H.current)||void 0===s||s.setValue({atk:N,def:I,creator:B,password:W,firstEditionText:K,cornerText:U})}})),Object(h.jsxs)("div",{className:["card-info-panel","ocg"===u?"input-ocg":"input-tcg"].join(" "),children:[Object(h.jsx)(Vs,{applyCardData:a}),Object(h.jsx)("br",{}),Object(h.jsx)(Us,{}),Object(h.jsxs)("div",{className:"card-overlay-input",children:[Object(h.jsx)(Bu,{className:"format-radio",value:u,onChange:e=>{j(t=>{var a,r,n,i,o;const l=Cr(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:p,pendulumEffect:b}=l;return null===(a=z.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=A.current)||void 0===r||r.setValue(d),null===(n=P.current)||void 0===n||n.setValue({pendulumEffect:b}),null===(i=D.current)||void 0===i||i.setValue({typeAbility:u}),null===(o=H.current)||void 0===o||o.setValue({creator:p,password:m}),l})},optionList:bd,children:Object(h.jsx)("span",{children:d["input.format.label"]})}),Object(h.jsx)(Cl,{className:"foil-radio",value:p,onChange:$,optionList:N,children:Object(h.jsx)("span",{children:d["input.foil.label"]})}),k&&Object(h.jsx)(_d,{className:"finish-checkbox",value:b,onChange:Y,optionList:G,children:Object(h.jsxs)(Du,{className:"finish-checkbox-label",children:[Object(h.jsx)("div",{className:"input-label",children:d["input.finish.label"]}),Object(h.jsx)(jl,{onClick:()=>Y([]),Icon:jd.a,tooltipProps:{title:d["input.other-finish.reset.tooltip"]}})]})})]}),w&&Object(h.jsxs)("div",{className:"card-layout-input",children:[Object(h.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[d["input.layout.label"]," ",Object(h.jsx)(fl,{content:Object(h.jsx)(Dl,{children:d["input.layout.tooltip"]})})]}),Object(h.jsx)(ru,{ref:M,defaultValue:g,receivingCanvas:i,onChange:K,onTainted:s,onCropChange:l,onSourceLoaded:c})]}),Object(h.jsx)(qd,{ref:I,onSTFrameChange:e=>{var t;return null===(t=D.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=H.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var r;return null===(r=H.current)||void 0===r?void 0:r.setValue({atk:e,def:t,linkRating:a})}}),Object(h.jsxs)(Hu,{className:"name-style-id-input",children:[Object(h.jsx)(Ju,{ref:z,onTakePicker:W}),Object(h.jsx)($d,{ref:C,frameInfo:Ke[m],defaultType:f,defaultValue:y,showExtraDecorativeOption:k,onChange:U},L),Object(h.jsx)(Ru,{showCreativeOption:w})]}),Object(h.jsxs)("div",{className:"main-info",children:[Object(h.jsxs)("div",{className:"main-info-first",children:[Object(h.jsx)(pu,{ref:R,language:d}),Object(h.jsx)(gm,{ref:P,showCreativeOption:w,showExtraDecorativeOption:k,softMode:S,receivingCanvas:o,onTainted:s,onSourceLoaded:c,onCropChange:l,onTakePicker:W,onFrameChange:e=>{var t;return null===(t=I.current)||void 0===t?void 0:t.changeFrame(e)}}),Object(h.jsx)(xm,{ref:D,onTakePicker:W}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(h.jsx)(Vc,{className:"standalone-label",children:d["input.effect.label"]}),w?Object(h.jsx)(km,{}):Object(h.jsx)("div",{}),Object(h.jsx)(wd,{targetId:B.id,onPick:B.setValue})]}),Object(h.jsx)(Eu,{ref:A,onTakePicker:W})]}),Object(h.jsx)(Yu,{ref:H,isMonster:F,showCreativeOption:w,onTakePicker:W})]}),Object(h.jsx)("div",{className:"main-info-second",children:Object(h.jsx)(qu,{ref:E,receivingCanvas:n,showCreativeOption:w,showExtraDecorativeOption:k,onSourceLoaded:c,onTainted:s,onCropChange:l})})]})]})}),{height:Cm,width:Fm,cardBorder:Lm}=s,Tm=68/Fm,Nm=b.b.div`
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
`,Im=e=>{var t,a,n,i,o,l,s,d;let{index:u,card:p,active:b,selected:g,language:f,onDuplicate:v,onActive:y,onDelete:x,onSelect:j,style:O}=e;const[w,k]=Object(r.useState)(!1),{art:S,artCrop:C,artData:F,artFit:L,artSource:T,artStyle:N,atk:I,attribute:R,attributeType:M,background:z,backgroundCrop:P,backgroundData:A,backgroundFit:D,backgroundSource:H,backgroundStyle:B,backgroundType:W,cardIcon:$,def:Y,effectStyle:K,format:U,frame:G,hasBackground:X,isLink:q,isPendulum:V,leftFrame:_,rightFrame:J,linkMap:Q,name:Z,opacity:ee,pendulumFrame:te,pendulumRightFrame:ae,pendulumScaleBlue:re,pendulumScaleRed:ne,pendulumStyle:ie,setId:oe,star:le,subFamily:se,typeAbility:ce}=p,{topLeftFrame:de,topRightFrame:ue,bottomLeftFrame:me,bottomRightFrame:pe}=ir({frame:G,topLeftFrame:_,topRightFrame:J,bottomLeftFrame:te,bottomRightFrame:ae,effectBackground:K.background,pendulumEffectBackground:ie.background},V),be=jr(Z),he="offline"===T?S?F:"https://i.imgur.com/jjtCuG5.png":S,ge="offline"===H?z?A:"https://imgur.com/pdSVzUZ.png":z,fe="auto"===$?er(G):$,ve="st"===fe?se:fe,ye=!!(I||Y||q&&Q.length),xe=ce.join(" / "),je=m(V,ee),{artFrameHeight:Oe,artFrameWidth:we}=je;return Object(h.jsxs)(Nm,{className:Yo("truncate",b?"active":"",u%2===0?"alternative-color":""),onClick:()=>y(p),style:O,children:[Object(h.jsxs)("div",{className:"left-slot",children:[Object(h.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(t=Ke[de])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=Ke[de])||void 0===a?void 0:a.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(n=Ke[ue])||void 0===n?void 0:n.labelBackgroundColor,backgroundImage:null===(i=Ke[ue])||void 0===i?void 0:i.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(o=Ke[me])||void 0===o?void 0:o.labelBackgroundColor,backgroundImage:null===(l=Ke[me])||void 0===l?void 0:l.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(s=Ke[pe])||void 0===s?void 0:s.labelBackgroundColor,backgroundImage:null===(d=Ke[pe])||void 0===d?void 0:d.labelBackgroundImage}}),Object(h.jsxs)("a",{className:"card-art-container",href:he,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:we*Tm,height:Oe*Tm,top:(Cm-Fm)/2/2*Tm,left:(Fm-we)/2*Tm,backgroundColor:c},children:[Object(h.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${B.flipX?-1:1}, ${B.flipY?-1:1})`},children:X&&Object(h.jsx)(Em,{className:"background-art",artLink:ge,name:be+" - background",fit:D,crop:P,canvasCoordinate:m(V,{...ee,boundless:"fit"!==W})})}),Object(h.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${N.flipX?-1:1}, ${N.flipY?-1:1})`},children:Object(h.jsx)(Em,{className:"foreground-art",artLink:he,name:be,fit:L,crop:C,canvasCoordinate:je})})]}),q&&[...Array(9)].map((e,t)=>{if(4===t)return null;const a=V?Je:_e,r=V?Ze:Qe;return Object(h.jsx)("div",{className:Yo(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,Q.includes(`${t+1}`)?"marker-checked":""),style:{top:V?16:19,transform:`rotate(${Ve[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)}),V&&re&&Object(h.jsx)("div",{className:"pendulum-scale blue-scale",children:re}),V&&ne&&Object(h.jsx)("div",{className:"pendulum-scale red-scale",children:ne})]}),Object(h.jsxs)("div",{className:"right-slot truncate",children:[Object(h.jsxs)("div",{className:"first-row truncate",children:[Object(h.jsx)("div",{className:"select-box",onClick:e=>e.stopPropagation(),children:Object(h.jsx)(yl.a,{checked:g,onChange:e=>{j(p,e.target.checked?"add":"remove")}})}),be]}),Object(h.jsxs)("div",{className:"second-row truncate",children:["custom"===M&&R.length>0?Object(h.jsx)("img",{className:"attribute-icon",src:R,alt:"Attribute"}):"NONE"===R?null:Object(h.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${U}-${R.toLowerCase()}.png`,alt:"Attribute"}),ce.length>0&&Object(h.jsx)("div",{className:"truncate",children:xe}),"st"!==fe&&Object(h.jsx)("div",{className:"padding"}),ve!==E&&"none"!==fe&&Object(h.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${("custom"===ve?"icon-list":ve).toLowerCase()}.png`,alt:"Icon"}),ve!==E&&"st"!==fe&&"none"!==fe&&"custom"!==fe&&Object(h.jsx)("span",{className:Yo("star-content truncate",xe.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof le?le:""!==le?`"${le}"`:""})]}),Object(h.jsxs)("div",{className:"third-row truncate",children:[ye&&Object(h.jsx)("div",{children:I}),ye?Object(h.jsx)("div",{children:"\xa0/\xa0"}):Object(h.jsx)("div",{children:"\xa0"}),ye&&Object(h.jsx)("div",{children:q?`Link ${Q.length}`:Y}),oe&&Object(h.jsx)("div",{className:"set-id",children:oe})]})]}),Object(h.jsx)("div",{className:Yo("action-slot",w?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(h.jsxs)("div",{className:"action-container",children:[Object(h.jsx)(Uo.a,{placement:"left",title:f["manager.button.duplicate.tooltip"],children:Object(h.jsx)(rd.a,{className:"action-button action-duplicate",onClick:()=>v(p)})}),Object(h.jsx)(Uo.a,{placement:"left",title:f["manager.button.download.tooltip"],children:Object(h.jsx)(bc.a,{className:"action-button action-download",onClick:()=>{const{id:e,...t}=p;Nl()(JSON.stringify(mr(t)))}})}),Object(h.jsx)(hs.a,{placement:"left",title:f["manager.button.delete.label"],onVisibleChange:e=>k(e),onConfirm:()=>x(p.id),okText:f["manager.button.delete.confirm.label"],cancelText:f["manager.button.delete.cancel.label"],children:Object(h.jsx)(Uo.a,{placement:"left",title:f["manager.button.delete.tooltip"],children:Object(h.jsx)(qo.a,{className:"action-button action-delete"})})})]})})]})},Rm=(e,t,a,r,n)=>{var i;const{artWidth:o,artY:l,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:p,y:b}=null!==(i=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==i?i:{},h=e*((null!==u&&void 0!==u?u:0)/100),g=t*((null!==m&&void 0!==m?m:0)/100),f=o*Tm/(h<=0?1:h);return{top:(null!==b&&void 0!==b?b:0)/100*-t*f,left:(null!==p&&void 0!==p?p:0)/100*-e*f,width:e*f,height:n?t*(o/s*Tm/(g<=0?1:g)):void 0,transform:[`translateX(${-(o===c?0:(Fm-c)/2-Lm)*Tm}px)`,`translateY(${-(d-l)*Tm}px)`].join(" ")}},Em=e=>{let{artLink:t,name:a,crop:n,className:i,fit:o,canvasCoordinate:l,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,p]=Object(r.useState)(()=>{var e,t,a,r;return Rm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o)});return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&d(t)},500),()=>{e=!1}},[t]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{var t,a,r,i;e&&p(Rm(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(i=u.current)||void 0===i?void 0:i.naturalHeight)&&void 0!==r?r:1,l,n,o))},500),()=>{e=!1}},[n,l,o]),Object(h.jsx)("img",{ref:u,className:Yo("card-art",i),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;p(Rm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o))}})};var Mm=a(326),zm=a(339),Pm=a(671),Am=a(672),Dm=a(673);const Hm=b.b.div`
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
`,Bm=e=>{let{language:t,onActive:a}=e;const{selectedMap:n,listName:i,activeId:o,cardDisplayList:l}=sn(Object(fn.useShallow)(e=>{let{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}=e;return{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}})),{batchQueue:s,batchDataMap:c,isBatchDownloading:d,isReady:u,clearQueue:m,stopBatchDownload:p,startBatchDownload:b}=Lr(),g=s[0],f=Object(r.useRef)("");Object(r.useEffect)(()=>{if(g&&d&&g!==f.current){f.current=g;const e=l.find(e=>e.id===g);e&&a(e)}},[l,d,g,a]),Object(r.useEffect)(()=>{let e=!0;return u&&(async()=>{const{batchName:t,batchDataMap:a}=Lr.getState(),r=new Jo.a;if(Object.values(a).length>0){Object.values(a).forEach(e=>{let{blob:t,name:a}=e;r.file(a,t)});const n=await r.generateAsync({type:"blob"});e&&(eo(`${t}.zip`,n,"application/zip"),p())}})(),()=>{e=!1}},[u,p]);const v=0===Object.keys(n).length;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Ko.a,{visible:d,onCancel:()=>p(),onOk:()=>m(),cancelText:t["manager.batch.batch-download.cancel-all.label"],okText:t["manager.batch.batch-download.premature-stop.label"],okButtonProps:{type:"default"},children:Object(h.jsx)(Hm,{className:"exporting-list",children:Object.values(l).map(e=>{let{id:t,name:a}=e;return v||n[t]?Object(h.jsxs)("div",{className:"exporting-item",children:[Object(h.jsx)("div",{className:"export-status",children:o===t?Object(h.jsx)(Pm.a,{}):c[t]?Object(h.jsx)(Am.a,{}):Object(h.jsx)(Dm.a,{})}),Object(h.jsx)("div",{className:"export-name",children:a})]},t):null})})}),Object(h.jsx)(el.a,{className:"batch-download-button",onClick:()=>b(i,v?l.map(e=>e.id):Object.keys(n)),children:v?t["manager.batch.batch-download.label"]:t["manager.batch.batch-download.partial-download.label"]})]})};var Wm=a(674);const $m=Object(b.b)(Kc.a.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`,Ym=b.b.div`
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
`,Km=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,selectedMap:i,language:o,list:l,onDelete:s,onDuplicate:c,onActive:d,onSelect:u}=t;return Object(h.jsx)(Im,{index:a,card:l[a],active:l[a].id===n,selected:!!i[l[a].id],language:o,onDuplicate:c,onActive:d,onDelete:s,onSelect:u,style:r})},Um=e=>{let{language:t,onActive:a,onRequestImport:n}=e;const{activeId:i,cardDisplayList:o,selectedMap:l,selectCard:s,deleteCard:c,duplicateCard:d,setSelectMap:u,resetFilter:m}=sn(Object(fn.useShallow)(e=>{let{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}=e;return{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}})),{exportScheme:p,updateSetting:b}=mn(Object(fn.useShallow)(e=>{let{setting:{exportScheme:t},updateSetting:a}=e;return{exportScheme:t,updateSetting:a}})),[g,f]=Object(r.useState)(0),v=Object(r.useCallback)((e,t)=>{s(e.id,t)},[s]),y=e=>{c(e),f(e=>e+1)};return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{if(e&&g>0){const{activeId:e,cardList:t,setCardList:r}=sn.getState(),n=t.find(t=>t.id===e);if(n)a(n);else{const e={id:Object(de.a)(),...da()};r([e],e.name)}}},500),()=>{e=!1}},[a,g]),Object(h.jsxs)(Ym,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[o.length>0&&Object(h.jsxs)("div",{className:"select-panel",children:[Object(h.jsx)(el.a,{size:"small",onClick:()=>u([],"replace"),children:t["manager.batch.batch-download.clear.label"]}),Object(h.jsx)(el.a,{size:"small",onClick:()=>u(o,"add"),children:t["manager.batch.batch-download.all.label"]}),Object(h.jsx)("div",{children:Object(h.jsx)(tl.a,{overlay:Object(h.jsx)(Kc.a,{children:[{value:"with-name",label:t["manager.batch.batch-download.export-option.with-name.label"]},{value:"with-id",label:t["manager.batch.batch-download.export-option.with-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(h.jsx)($m,{onClick:()=>b({exportScheme:t}),className:t===p?"menu-active":"",children:a},t)})}),children:Object(h.jsxs)("div",{className:"scheme-button",children:[t["manager.batch.batch-download.export-scheme.label"]," ",Object(h.jsx)(Wm.a,{})]})})})]}),Object(h.jsx)("div",{className:"list-container",children:Object(h.jsx)(Mm.a,{children:e=>{let{height:r,width:n}=e;return Object(h.jsx)(zm.a,{className:"List",height:r,itemCount:o.length,itemSize:68,itemData:{list:o,language:t,activeId:i,selectedMap:l,onDuplicate:d,onActive:a,onDelete:y,onSelect:v},overscanCount:5,width:n,children:Km})}})}),0===o.length&&Object(h.jsxs)("div",{className:"no-card",children:[Object(h.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(h.jsx)("div",{className:"reset-filter",onClick:m,children:t["manager.button.search.button.reset.label"]})]}),0!==o.length&&Object(h.jsx)(Bm,{language:t,onActive:a}),Object(h.jsx)(el.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var Gm=a(675);const{Panel:Xm}=Qs.a,qm=b.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,Vm=Object(b.b)(Ko.a)`
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
                ${Ml} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,_m=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),i="https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing";return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(qm,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(h.jsx)(Gm.a,{})]}),Object(h.jsx)(Vm,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(h.jsxs)("div",{className:"sample-modal-container",children:[Object(h.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(h.jsx)("br",{}),t["manager.template.description.line-2"]]}),i&&Object(h.jsx)("div",{className:"download-button",children:Object(h.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",download:!0,children:Object(h.jsx)(el.a,{children:t["manager.template.download.label"]})})}),Object(h.jsx)(Qs.a,{ghost:!0,children:Object(h.jsx)(Xm,{header:Object(h.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(h.jsx)("table",{className:"option-container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(h.jsx)("div",{children:["tcg","ocg"].map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Frame",altField:"Bottom Frame",value:Object(h.jsx)("div",{children:Ue.map(e=>{let{name:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Attribute",value:Object(h.jsx)("div",{children:[...F,...L].filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Spell/Trap Icon",value:Object(h.jsx)("div",{children:M.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Sticker",value:Object(h.jsx)("div",{children:P.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Foil",value:Object(h.jsx)("div",{children:w().filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Card Finish",value:Object(h.jsxs)("div",{children:[Object.values(v).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)}),Object(h.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Star Type",value:Object(h.jsx)("div",{children:["number","text"].map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Star Alignment",value:Object(h.jsx)("div",{children:["left","center","right"].map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Card Icon Type",value:Object(h.jsx)("div",{children:D.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Background Type",value:Object(h.jsx)("div",{children:l().map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Condense Rate",value:Object(h.jsx)("div",{children:Object.keys(xe).map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Name Style Type",value:Object(h.jsx)("div",{children:["predefined","custom"].map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Name Style - Font",value:Object(h.jsx)("div",{children:Object(h.jsx)(Pl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(h.jsx)("div",{children:Object.keys(oe).map(e=>Object(h.jsx)(Pl,{data:e,children:e},e))})},{field:"Name Style - Pattern",value:Object(h.jsx)("div",{children:ce.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{key:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Pendulum Size",value:Object(h.jsx)("div",{children:me.map(e=>{let{key:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Other Finish - Attribute",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Other Finish - Background",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Other Finish - Icon",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Other Finish - Sticker",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Region",value:Object(h.jsx)("div",{children:Object.values(I).map(e=>{let{key:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})})},{field:"Star List",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.star-list"]}),Object.values(K).filter(e=>{let{isMixable:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Pl,{data:t,children:t},t)})]})},{field:"Dye List",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.dye-list"]}),Object(h.jsx)("ul",{children:Object.entries(k).sort((e,t)=>e[1]-t[1]).map(e=>{var a,r;let[n]=e;return Object(h.jsx)("li",{children:t[null!==(a=null===(r=Xe[n])||void 0===r?void 0:r.labelKey)&&void 0!==a?a:""]},n)})})]})},{field:"Flag",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.flag"]}),um.map(e=>{let{sampleDisplay:a,index:r}=e;return Object(h.jsx)("div",{children:a(t)},r)})]})}].map(e=>{let{field:t,altField:a,value:r}=e;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)(Ml,{children:t}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)(Ml,{children:a})]})]}),Object(h.jsx)("td",{children:r})]},t)})]})})},"sample-option")})]})})]})};var Jm=a(171);const Qm=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),Zm=b.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,ep=Object(b.b)(ql)`
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
`,tp=Object(r.forwardRef)((e,t)=>{let{language:a,onVisibleChange:n,onSelect:i,onRequestImport:o}=e;const l="list-upload-id",s=Object(r.useRef)(null),{cardList:c,changeEditStatus:d,pendingActiveCard:u,setActiveId:m,setCardList:p,setFilterFunction:b,setListName:g,setPendingActiveCard:f,sortList:v,toggleVisible:y,visible:x}=sn(Object(fn.useShallow)(e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}})),j=mn(e=>e.setting.exportFormat),[O,w]=Object(r.useState)(0),[k,S]=Object(r.useState)(!1),[C,F]=Object(r.useState)(!1),L=Nr()(e=>{b({type:"text",value:e.target.value})},250),T=Object(r.useCallback)(e=>{i(e),m(e.id)},[i,m]);return Object(r.useEffect)(()=>{u&&(i(u),m(u.id),f())},[i,u,m,f]),Object(r.useEffect)(()=>{localStorage.setItem("manager-panel-visible",x.toString()),n(x)},[n,x]),Object(r.useEffect)(()=>{const e=sn.subscribe(e=>e.filterResetSignal,e=>{e&&w(e=>e+1)});return()=>{e()}},[]),Object(r.useImperativeHandle)(t,()=>({}),[]),Object(h.jsx)(Zm,{children:Object(h.jsx)(ep,{className:"card-manager-panel",title:Object(h.jsxs)("div",{className:"card-manager-header truncate",children:[Object(h.jsx)(rp,{className:"manager-label-container truncate",language:a,children:c.length}),Object(h.jsxs)("div",{className:"manager-button-container",children:[Object(h.jsx)("div",{className:"manager-button",children:Object(h.jsx)(_m,{language:a})}),Object(h.jsx)(tl.a,{overlay:Object(h.jsx)(Kc.a,{children:[{value:on.level.key,label:a["manager.button.sort.level.label"]},{value:on.name.key,label:a["manager.button.sort.name.label"]},{value:on.atk.key,label:a["manager.button.sort.atk.label"]},{value:on.def.key,label:a["manager.button.sort.def.label"]},{value:on.set.key,label:a["manager.button.sort.set-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Kc.a.Item,{onClick:()=>v(t),children:a},t)})}),children:Object(h.jsx)("div",{className:"manager-button",children:Object(h.jsx)(Pu.a,{})})}),Object(h.jsx)(Uo.a,{title:a["manager.header.button.download.tooltip"],children:Object(h.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(F(!0),Qm.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Hr.length;for(let r=0;r<e.length;r++){const n=(e,t)=>{const a=Yr[e];"number"===typeof a&&("string"===typeof t&&(i[a]=t),"number"===typeof t&&(i[a]=`${t}`),"boolean"===typeof t&&(i[a]=`${t}`),null==t&&(i[a]=""))},i=Array(a).map(()=>""),{art:o,artCrop:l,artData:s,artFinish:c,artFit:d,artSource:u,artStyle:m,atk:p,attribute:b,attributeType:h,background:g,backgroundCrop:f,backgroundData:v,backgroundFit:y,backgroundSource:x,backgroundStyle:j,backgroundType:O,cardIcon:w,cornerText:k,creator:S,def:C,dyeList:F,effect:L,effectStyle:T,effectTextStyle:N,externalInfo:I,finish:R,firstEditionText:E,flag:M,foil:z,format:P,frame:A,furiganaHelper:D,hasBackground:H,hasCornerText:B,isDuelTerminalCard:W,isFirstEdition:$,isLegacyCard:Y,isLimitedEdition:K,isLink:U,isPendulum:G,isSpeedCard:X,leftFrame:q,legacyTemplate:V,linkMap:_,linkRating:J,name:Q,nameStyle:Z,nameStyleType:ee,opacity:te,otherFinish:ae,otherTextStyle:re,overlay:ne,overlayCrop:ie,overlayData:oe,overlayFit:le,overlaySource:se,overlayStyle:ce,password:de,pendulumEffect:ue,pendulumFrame:me,pendulumRightFrame:pe,pendulumScaleBlue:be,pendulumScaleRed:he,pendulumSize:ge,pendulumStyle:fe,pendulumTextStyle:ve,region:ye,rightFrame:xe,setId:je,star:Oe,starAlignment:we,starList:ke,statTextStyle:Se,sticker:Ce,subFamily:Fe,typeAbility:Le,typeTextStyle:Te}=e[r],Ne=JSON.stringify(I),Ie=M.join("|"),Re=F.join("|"),Ee=ke.join("|");n("Format",P),n("Region",ye),n("Frame",A),n("Name",Q),n("Attribute",b),n("Attribute Type",h),n("Star",`${Oe}`),n("Spell/Trap Icon",Fe),n("Art Link",o),n("Art Data",s),n("Art Source",u),n("Type Ability",Le.join("/")),n("Effect",L),n("Set Id",je),n("ATK",p),n("DEF",C),n("Password",de),n("Sticker",Ce),n("Copyright",S),n("Is Pendulum",G),n("Pendulum Effect",ue),n("Pendulum Scale Red",he),n("Pendulum Scale Blue",be),n("Is Link",null!==U&&void 0!==U?U:void 0),n("Link - Top Left Arrow",_.includes("1")),n("Link - Top Arrow",_.includes("2")),n("Link - Top Right Arrow",_.includes("3")),n("Link - Left Arrow",_.includes("4")),n("Link - Right Arrow",_.includes("6")),n("Link - Bottom Left Arrow",_.includes("7")),n("Link - Bottom Arrow",_.includes("8")),n("Link - Bottom Right Arrow",_.includes("9")),n("Link Rating",J),n("First Edition Text",E),n("Is First Edition",$),n("Corner Text",k),n("Has Corner Text",B),n("Is Speed Card",X),n("Is Limited Edition",K),n("Is Duel Terminal Card",W),n("Is Legacy Card",Y),n("Foil",z),n("Art Finish",c),n("Card Finish",R.join(",")),n("Art Crop - X (%)",l.x),n("Art Crop - Y (%)",l.y),n("Art Crop - Width (%)",l.width),n("Art Crop - Height (%)",l.height),n("Is Using Full Art",d),n("Art Style",JSON.stringify(m)),n("Star Type","number"===typeof Oe&&Oe>=0&&Oe<=13?"number":"text"),n("Star Alignment",we),n("Card Icon Type",w),n("Opacity - Body",te.body),n("Opacity - Pendulum",te.pendulum),n("Opacity - Text",te.text),n("Opacity - Name",te.name),n("Opacity - Base Fill",te.baseFill),n("Opacity - Art Border",te.artBorder),n("Opacity - Effect Box",te.effectBox),n("Opacity - Frame Border",te.frameBorder),n("Opacity - Name Border",te.nameBorder),n("Opacity - Boundless",te.boundless),n("Has Background",H),n("Background Link",g),n("Background Data",v),n("Background Source",x),n("Is Using Full Background",y),n("Background Style",JSON.stringify(j)),n("Background Type",O),n("Background Crop - X (%)",f.x),n("Background Crop - Y (%)",f.y),n("Background Crop - Width (%)",f.width),n("Background Crop - Height (%)",f.height),n("Bottom Frame",me),n("Condense Rate",T.condenseTolerant),n("Use Furigana Helper",D),n("Name Style Type",ee),n("Name Style - Font",Z.font),n("Name Style - Fill Style",Z.fillStyle),n("Name Style - Headtext Fill Style",Z.headTextFillStyle),n("Name Style - Shadow Color",Z.shadowColor),n("Name Style - Shadow Offset Y",Z.shadowOffsetY),n("Name Style - Shadow Offset X",Z.shadowOffsetX),n("Name Style - Shadow Blur",Z.shadowBlur),n("Name Style - Has Shadow",Z.hasShadow),n("Name Style - Line Color",Z.lineColor),n("Name Style - Line Width",Z.lineWidth),n("Name Style - Line Offset Y",Z.lineOffsetY),n("Name Style - Line Offset X",Z.lineOffsetX),n("Name Style - Has Outline",Z.hasOutline),n("Name Style - Gradient Angle",Z.gradientAngle),n("Name Style - Gradient Color",Z.gradientColor),n("Name Style - Has Gradient",Z.hasGradient),n("Name Style - Emboss Pitch",Z.embossPitch),n("Name Style - Emboss Yaw",Z.embossYaw),n("Name Style - Emboss Thickness",Z.embossThickness),n("Name Style - Has Emboss",Z.hasEmboss),n("Name Style - Preset",Z.preset),n("Name Style - Pattern",Z.pattern),n("Stat Style - Is Custom",Se[0]),n("Stat Style - Fill Color",Se[1]),n("Stat Style - Has Shadow",Se[2]),n("Stat Style - Shadow Color",Se[3]),n("Type Style - Is Custom",Te[0]),n("Type Style - Fill Color",Te[1]),n("Type Style - Has Shadow",Te[2]),n("Type Style - Shadow Color",Te[3]),n("Effect Style - Is Custom",N[0]),n("Effect Style - Fill Color",N[1]),n("Effect Style - Has Shadow",N[2]),n("Effect Style - Shadow Color",N[3]),n("Effect Style - Upsize",T.upSize),n("Effect Style - Font Style",T.fontStyle),n("Effect Style - Background",T.background),n("Effect Style - Min Line",T.minLine),n("Effect Style - Justify Ratio",T.justifyRatio),n("Pendulum Size",ge),n("Pendulum Effect Style - Is Custom",ve[0]),n("Pendulum Effect Style - Fill Color",ve[1]),n("Pendulum Effect Style - Has Shadow",ve[2]),n("Pendulum Effect Style - Shadow Color",ve[3]),n("Pendulum Effect Style - Upsize",fe.upSize),n("Pendulum Effect Style - Font Style",fe.fontStyle),n("Pendulum Effect Style - Background",fe.background),n("Pendulum Effect Style - Min Line",fe.minLine),n("Pendulum Effect Style - Justify Ratio",fe.justifyRatio),n("Other Style - Is Custom",re[0]),n("Other Style - Fill Color",re[1]),n("Other Style - Has Shadow",re[2]),n("Other Style - Shadow Color",re[3]),n("Other Finish - Attribute",ae[0]),n("Other Finish - Icon",ae[1]),n("Other Finish - Sticker",ae[2]),n("Other Finish - Background",ae[3]),n("Overlay Link",ne),n("Overlay Data",oe),n("Overlay Source",se),n("Is Using Full Overlay",le),n("Overlay Style",JSON.stringify(ce)),n("Overlay Crop - X (%)",ie.x),n("Overlay Crop - Y (%)",ie.y),n("Overlay Crop - Width (%)",ie.width),n("Overlay Crop - Height (%)",ie.height),n("Left Frame",q),n("Right Frame",xe),n("Bottom Right Frame",pe),n("Dye List",Re),n("Star List",Ee),n("Flag",Ie),n("Legacy Template",V),n("External Info (JSON)","{}"===Ne?"":Ne),t.push(i.map(Kr).join(","))}return{value:[Hr.join(","),t.join("\n")].join("\n"),error:""}})(sn.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&Er.a.error({message:t,description:r})}switch(j){case"xlsx":{const e=Jm.a.read(t,{type:"string"});Jm.a.writeFile(e,`${sn.getState().listName}.xlsx`);break}default:eo(sn.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}d("download")}catch(t){}F(!1)},children:C?Object(h.jsx)(Pm.a,{}):Object(h.jsx)(bc.a,{})})}),Object(h.jsx)(Uo.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(h.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(l);e&&!k&&e.click()},children:[Object(h.jsx)("input",{ref:s,type:"file",id:l,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=s.current)||void 0===t?void 0:t.files,{isListDirty:n}=sn.getState(),o=()=>{w(e=>e+1),S(!1),Er.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let l=!0;if(n&&(l=window.confirm(a["prompt.warning.on-import.label"])),l&&r&&r[0]){S(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=Jm.a.read(e,{codepage:65001}),n=Jm.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),l=Vr(n);l.length>0?(p(l,l[0].id),g(t),w(e=>e+1),i(l[0]),S(!1)):o()}catch(e){console.error(e),o()}}else w(e=>e+1),S(!1)}},`upload-${O}`),k?Object(h.jsx)(Pm.a,{}):Object(h.jsx)(ud.a,{})]})},`${k}`),Object(h.jsx)("div",{className:"manager-button close-button",onClick:()=>y(!1),children:Object(h.jsx)(qo.a,{})})]}),Object(h.jsx)("div",{className:"card-manager-filter",children:Object(h.jsx)(Ts.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>b({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${O}`)})]}),visible:x,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>y(!1),width:280,children:Object(h.jsx)(Um,{language:a,onActive:T,onRequestImport:o})})})}),ap=b.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,rp=e=>{let{language:t,children:a,...n}=e;const{isListDirty:i,cardList:o}=sn(Object(fn.useShallow)(e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}}));return Object(r.useEffect)(()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return i&&o.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[o.length,i,t]),Object(h.jsxs)(ap,{...n,children:[a,i&&o.length>1&&Object(h.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},np=b.b.div`
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
        ${Go} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,ip=b.b.div`
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
`,op=b.b.div`
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
`,lp=b.b.div`
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
`,sp=b.b.div`
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
`,cp=b.b.span`
    color: var(--main-danger);
`,dp=Object(b.b)(Bl)`
    position: absolute;
    z-index: 101;
`,up=Object(b.b)(dp)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,mp=Object(b.b)(dp)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var pp=a(247),bp=a(612),hp=a(613),gp=a(625),fp=a(629),vp=a(332);Object(pp.configure)({ignoreTags:[]});const yp={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+y","command+y"],DOWNLOAD:["ctrl+s","command+s"]},{height:xp,width:jp}=s,{height:Op,width:wp}=wr;var kp=function(){var e,t,a,n,i,o,l,s,c;const{allowHotkey:d,softMode:u,globalScale:m,resolution:p,slidingType:b}=mn(Object(fn.useShallow)(e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r,resolution:n,slidingType:i}}=e;return{softMode:a,allowHotkey:t,globalScale:r,resolution:n,slidingType:i}})),{isInitiating:g,isLoading:f,language:v,isMetadataReady:y,languageInfo:x,initiate:j,loadDefaultLanguage:O}=zr(Object(fn.useShallow)(e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}})),w=!$o&&!("ontouchstart"in window||navigator.maxTouchPoints>0),[k,S]=Object(r.useState)(!0),[,C]=yn("activeDropzone"),[F]=yn("resetCanvasCounter"),[L,T]=Object(r.useState)(""),[N,I]=Object(r.useState)("online"),{db:R,dbReady:E}=hn(),[M,z]=Object(r.useState)(!1),P=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),B=Object(r.useRef)(null),W=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),K=Object(r.useRef)(null),U=Object(r.useRef)(null),G=Object(r.useRef)(null),X=Object(r.useRef)(null),q=Object(r.useRef)(null),V=Object(r.useRef)(null),_=Object(r.useRef)(null),J=Object(r.useRef)(null),Q=Object(r.useRef)(null),Z=Object(r.useRef)(null),ee=Object(r.useRef)(null),te=Object(r.useRef)(null),ae=Object(r.useRef)(null),re=Object(r.useRef)(null),ne=Object(r.useRef)(null),[ie]=Object(r.useState)({artworkCanvasRef:B,backgroundCanvasRef:W,overlayCanvasRef:$,exportCanvasRef:Y,frameCanvasRef:U,cardIconCanvasRef:G,pendulumScaleCanvasRef:X,pendulumEffectCanvasRef:q,typeCanvasRef:V,effectCanvasRef:_,nameCanvasRef:J,statCanvasRef:Q,setIdCanvasRef:Z,passwordCanvasRef:ee,creatorCanvasRef:te,stickerCanvasRef:ae,finishCanvasRef:re,lightboxRef:ne,previewCanvasRef:K}),oe=Object(r.useRef)(null),le=Object(r.useRef)(null),se=Object(r.useRef)(null),[ce,de]=Object(r.useState)(0);Object(r.useEffect)(()=>{const e=()=>{C(0)};let t=window.setTimeout(e,200);const a=()=>{C(1),window.clearTimeout(t),t=window.setTimeout(e,200)};return document.addEventListener("dragover",a),()=>{document.removeEventListener("dragover",a)}},[C]),Object(r.useEffect)(()=>{j()},[j]),Object(r.useEffect)(()=>{y&&O()},[y,O]),Object(r.useEffect)(()=>{["font-family","letter-spacing","--width-label"].forEach(e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=x.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")})},[x]),Object(r.useEffect)(()=>{de(e=>e+1)},[M]),Object(r.useEffect)(()=>{de(e=>e+1),"auto"===b&&P.current&&(P.current.style.transform="")},[b]),Object(r.useEffect)(()=>{(async()=>{try{if(R&&!1===f&&v){const e=R.transaction("presetLayoutStore","readonly"),t=[];for await(const o of e.store){const{content:e,key:a}=o.value;t.push({key:a,content:JSON.parse(e)})}await e.done,vn.getState().updateGlobalMemory({layoutPresetList:t});const a=R.transaction("presetImageStore","readonly"),r=[];for await(const o of a.store){const{content:e,key:t}=o.value;r.push({key:t,content:JSON.parse(e)})}await a.done,vn.getState().updateGlobalMemory({imagePresetList:r});const n=R.transaction("presetNameStyleStore","readonly"),i=[];for await(const o of n.store){const{content:e,key:t}=o.value;i.push({key:t,content:JSON.parse(e)})}await n.done,vn.getState().updateGlobalMemory({nameStylePresetList:i})}}catch(e){console.error("Error reading database",e),Er.a.error({message:v["error.database-initialize.message"],description:v["error.database-initialize.description"]})}})()},[R,f,v]),Object(r.useEffect)(()=>{var e;const t=null===(e=Y.current)||void 0===e?void 0:e.getContext("2d"),a=un.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Fn(t)),!1===g&&Qi.a.load({custom:{families:["ITC Stone Serif Std Semibold","Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","SVN-Times New Roman Italic","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const r=localStorage.getItem("card-version"),n=localStorage.getItem("card-data"),i=n?hr(JSON.parse(n)):null,o=new URLSearchParams(window.location.search).get("data");if(o){var e,t,a;const{card:r}=cn(o),n=hr(r),{artSource:l,backgroundSource:s,overlaySource:c}=n;if("online"===l&&"online"===s&&"online"===c)return cn(o).card;const d={...n};return"offline"===l&&(d.artData=null!==(e=null===i||void 0===i?void 0:i.artData)&&void 0!==e?e:""),"offline"===s&&(d.backgroundData=null!==(t=null===i||void 0===i?void 0:i.backgroundData)&&void 0!==t?t:""),"offline"===c&&(d.overlayData=null!==(a=null===i||void 0===i?void 0:i.overlayData)&&void 0!==a?a:""),d}return null!==i&&"2.4.8"===r?i:ca()}catch(r){return console.error(r),ca()}})();a(e),sn.getState().setCardList([e],e.id),S(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),Er.a.error({message:Ar()["error.load.font.tcg"](e)})},inactive:()=>{T(Ar()["error.load.font.all-tcg"]),S(!1)}})},[g]);const{styleContent:ue}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:i,onInactive:o}=e;const{font:l,format:s}=un(Object(fn.useShallow)(e=>({format:e.card.format,font:e.card.nameStyle.font}))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)(()=>{("ocg"===s||"OCG"===l)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),Qi.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,o()},fontinactive:i}))},[s,l,t,a,n,i,o]),{styleContent:c}})({isLanguageInitiating:g,onBeforeLoad:()=>{var e;S(!0);const t=null===(e=Y.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Fn(t))},onActive:()=>{S(!1)},onInactive:()=>{T(Ar()["error.load.font.all-ocg"]),S(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),Er.a.error({message:Ar()["error.load.font.ocg"](e)})}}),[me,pe]=Object(r.useState)(!1);Object(r.useEffect)(()=>{var e;F>0&&me&&(null===(e=ne.current)||void 0===e||e.refresh(),de(e=>e+1))},[me,F]),Object(r.useEffect)(()=>{const e=document.body.classList;u?e.add("reduced-color-motion"):e.remove("reduced-color-motion")},[u]);const be=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||null===(t=ne.current)||void 0===t||t.setVisible(t=>"boolean"===typeof e?e:!t)},[d]),he=Object(r.useRef)(!1),ge=document.getElementById("sentry-bug-report");Object(r.useEffect)(()=>{const e="https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920";ge&&e&&v&&!1===he.current&&!1===Sr.f()&&(he.current=!0,bp.a({dsn:e,integrations:[hp.a(),gp.a(),fp.a({colorScheme:"system",autoInject:!1}).attachTo(ge,{formTitle:v["contributor.bug-report.tooltip"],nameLabel:v["contributor.bug-report.name.label"],namePlaceholder:v["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:v["contributor.bug-report.message.label"],messagePlaceholder:v["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:v["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:v["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:v["contributor.bug-report.cancel.label"],submitButtonLabel:v["contributor.bug-report.submit.label"],isRequiredLabel:v["contributor.bug-report.required.label"],successMessageText:v["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))},[v,ge]);const fe=Object(r.useCallback)((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:i}=null!==t&&void 0!==t?t:{},{setCard:o,card:l}=un.getState(),s=i?{...e,id:l.id}:e;r&&sn.getState().addCard(s),o(s,n),de(e=>e+1),null===(a=H.current)||void 0===a||a.forceCardData(s),Wo()},[]),ve=Object(r.useCallback)(async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=se.current)||void 0===t||t.requestImport("replace"))},[d]),ye=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=se.current)||void 0===t||t.requestImport("merge"))},[d]),xe=Object(r.useCallback)(function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||d)if(null===e||void 0===e||e.preventDefault(),"online"===N&&null!==(t=H.current)&&void 0!==t&&t.isLoading())window.alert(v["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:un.getState().card;null===(r=le.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),Er.a.error({message:v["error.export.message"],description:v["error.export.description"]})}},[d,v,N]),je=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=oe.current)||void 0===t||t.download())},[d]),Oe=Object(r.useMemo)(()=>({IMPORT:e=>ve(e,!0),MERGE:e=>ye(e,!0),EXPORT:e=>xe(e,!0),VIEW:()=>be(!0,!0),DOWNLOAD:e=>je(e,!0)}),[je,xe,ve,ye,be]),we=Object(r.useCallback)(()=>{pe(!0),alert(v["prompt.download.tainted.message"])},[v]),ke=Object(r.useCallback)(e=>{var t;"anonymous"===e&&(pe(!1),null===(t=ne.current)||void 0===t||t.refresh());de(e=>e+1)},[]),Se=Object(r.useCallback)((e,t)=>{de(e=>e+1),I(t)},[]),Ce=Object(r.useCallback)(()=>{de(e=>e+1),pe(!0)},[]),Fe=Object(r.useCallback)(e=>{z(e)},[]),Le=Object(r.useCallback)(()=>{pe(!1)},[]),Te=f||k||!E;return Object(h.jsx)(pp.HotKeys,{keyMap:yp,handlers:Oe,children:Object(h.jsxs)("div",{id:"app",onDrop:()=>{},onScroll:e=>{const t=e.currentTarget.scrollTop;if(P.current&&A.current&&"auto"===b){const a=document.body.clientWidth<1600?0:10,r=e.currentTarget.getBoundingClientRect().height,n=P.current.getBoundingClientRect().height;if(r>n+a){const e=Math.max(0,A.current.getBoundingClientRect().height-n);P.current.style.transform=`translateY(${Math.max(0,Math.min(e,t)-a)}px)`}else P.current.style.transform=""}},className:`language-${x.codeName} manager_${M?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:$o?"-webkit-fill-available":"100vh","--card-height":xp*m+"px","--card-width":jp*m+"px","--global-scale":`${m}`,"--cropper-width":"375px"},children:[ue&&Object(h.jsx)("link",{rel:"stylesheet",type:"text/css",href:ue}),Object(h.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Te&&Object(h.jsx)(lp,{className:"app-loading",children:L.length>0?Object(h.jsx)(cp,{children:L}):null!==(e=x.initialMessage)&&void 0!==e?e:""}),Object(h.jsxs)("div",{ref:A,className:Yo("card-preview-panel",me?"export-tainted":"export-normal",`sliding-type_${b}`),children:[Object(h.jsxs)("div",{ref:P,className:"preview-sliding-window",children:[Object(h.jsxs)(np,{className:"data-button-panel",children:[Object(h.jsxs)("div",{className:"imexport",children:[Object(h.jsx)(dd,{ref:le,tainted:me,artworkCanvas:B.current,onRequireExportData:xe,onRequireDownload:()=>{var e;return null===(e=oe.current)||void 0===e?void 0:e.download()},onClose:Wo}),Object(h.jsx)("div",{}),Object(h.jsx)(pd,{ref:se,onImport:fe,onClose:Wo,allowHotkey:d,language:v})]}),Object(h.jsx)(Zo,{language:v}),Object(h.jsx)(ad,{ref:oe,canvasMap:ie,imageChangeCount:ce,isTainted:me,onTainted:Ce,onExportSucess:Le,isInitializing:k,globalScale:m,onDownloadError:we}),me&&Object(h.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(h.jsxs)("div",{className:"alert-label",children:[v["alert.download.tainted-first-line"],Object(h.jsx)("br",{}),v["alert.download.tainted-second-line"]," ",Object(h.jsx)(Js,{})]}),Object(h.jsx)(tl.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(h.jsx)(Xc,{onChange:()=>Wo()}),children:Object(h.jsxs)(ed,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(h.jsx)(al.a,{className:"resolution-icon"}),Object(h.jsx)("span",{className:"resolution-overlay",children:p[1]})]})})]})]}),Object(h.jsxs)(ip,{className:"card-preview-container",children:[Object(h.jsx)(Uo.a,{title:v["generic.reset.tooltip"],children:Object(h.jsx)(mp,{className:"reset-button",onClick:()=>{if(window.confirm(v["prompt.reset.message"])){var e;const{setCard:t,card:a}=un.getState(),r={id:a.id,...sa()},n="tcg"===a.format?r:Cr(r,"ocg");t(n,!0),de(e=>e+1),null===(e=H.current)||void 0===e||e.forceCardData(n)}},children:Object(h.jsx)(jd.a,{})})}),Object(h.jsx)(Uo.a,{title:Object(h.jsxs)("div",{className:"center",children:[v["button.full-size.label"],d?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),"Ctrl+Y / \u2318+Y"]}):null]}),children:Object(h.jsx)(up,{className:"lightbox-button",onClick:()=>be(),children:Object(h.jsx)(Mc.a,{})})}),Object(h.jsx)("canvas",{id:"debug-canvas",width:wp*m,height:Op},m+"scale"),Object(h.jsx)("canvas",{id:"preview-canvas",ref:K,width:jp,height:xp},(null!==(t=null===(a=ne.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(h.jsxs)(op,{className:"card-canvas-group",children:[Object(h.jsx)("canvas",{id:"export-canvas",ref:Y,width:jp*m,height:xp*m},(null!==(n=null===(i=ne.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==n?n:0)+.1),Object(h.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(h.jsx)("canvas",{id:"frameCanvas",className:`${null!==(s=null===(c=ne.current)||void 0===c?void 0:c.getCanvasKey())&&void 0!==s?s:0}`,ref:U,width:jp*m,height:xp*m},`${null!==(o=null===(l=ne.current)||void 0===l?void 0:l.getCanvasKey())&&void 0!==o?o:0} ${F}`),Object(h.jsx)("canvas",{id:"nameCanvas",ref:J,width:jp*m,height:148*m}),Object(h.jsx)("canvas",{id:"cardIconCanvas",ref:G,width:jp*m,height:222*m}),Object(h.jsx)("canvas",{id:"pendulumScaleCanvas",ref:X,width:jp*m,height:920*m}),Object(h.jsx)("canvas",{id:"pendulumEffectCanvas",ref:q,width:jp*m,height:920*m}),Object(h.jsx)("canvas",{id:"typeCanvas",ref:V,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"effectCanvas",ref:_,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"statCanvas",ref:Q,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"setIdCanvas",ref:Z,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"passwordCanvas",ref:ee,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"creatorCanvas",ref:te,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"stickerCanvas",ref:ae,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{id:"finishCanvas",ref:re,width:jp*m,height:xp*m}),Object(h.jsx)("canvas",{className:"crop-canvas",ref:B}),Object(h.jsx)("canvas",{className:"crop-canvas",ref:W}),Object(h.jsx)("canvas",{className:"crop-canvas",ref:$})]})]})]}),w&&Object(h.jsx)(vp.a,{ref:D,target:P,className:"sliding-movable-window",draggable:!0,throttleDrag:1,edgeDraggable:!1,startDragRotate:0,throttleDragRotate:0,throttleScale:0,snappable:!0,pinchable:!0,snapContainer:".card-preview-panel",bounds:{left:0,top:0,right:0,bottom:0,position:"css"},onDrag:e=>{"manual"===b&&(e.target.style.transform=e.transform)}})]}),!1===Te&&Object(h.jsx)(Sm,{ref:H,applyCardData:fe,artworkCanvas:B.current,backgroundCanvas:W.current,foilCanvas:$.current,onSourceLoaded:ke,onCropChange:Se,onTainted:Ce})]}),Object(h.jsx)(tp,{language:v,onVisibleChange:Fe,onSelect:fe,onRequestImport:()=>{var e;null===(e=se.current)||void 0===e||e.requestImport("new")}}),Object(h.jsx)(Wc,{ref:ne,globalScale:m}),Object(h.jsxs)(sp,{className:"by-me",children:["Made by Lauqerm ",Object(h.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Sp=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,677)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:i,getTTFB:o}=t;a(e),r(e),n(e),i(e),o(e)})};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(kp,{})}),document.getElementById("root")),Sp()}},[[596,1,2]]]);
//# sourceMappingURL=main.494c5501.chunk.js.map
//# debugId=5e975dc0-f47b-545e-95b6-105cd0af8250
