(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{346:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){},507:function(e,t,a){},590:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},594:function(e,t,a){},596:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(52),o=a.n(i);a(346),a(347),a(348),a(349),a(350),a(351);const l=e=>[{value:"strict",label:null===e||void 0===e?void 0:e.strict},{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:910,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:76,attributeY:55,attributeX:680,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,effectBox:!0,frameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"},fullPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"fullPendulumSmall"},overframeCard:{artFinishX:100,artFinishY:219,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"overframeCard"},overframePendulum:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulum"},overframePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:813,artX:0,artY:0,ratio:.686,backgroundRatio:.686,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.325,type:"overframePendulumSmall"}},m=(e,t,a,r)=>{const n={...d(),...t};"strict"===a&&(n.boundless=!1,n.text=100,n.pendulum=100);const{boundless:i,body:o,pendulum:l,text:s,frameBorder:c}=n,m="fit"!==a&&"strict"!==a&&i,b=!!m&&c;if("full"===a)return b?u.overframeCard:u.fullCard;let p="normal";m||o<100?p=e?b?"small"===r?"overframePendulumSmall":"overframePendulum":"small"===r?"fullPendulumSmall":"fullPendulum":b?"overframeCard":"fullCard":e?s<100?p="small"===r?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===r&&(p="truePendulumLarge"),"small"===r&&(p="truePendulumSmall"),"medium"===r&&(p="truePendulum")):p="small"===r?"pendulumSmall":"pendulum":p=s<100?"extendedCard":"normal";const h=u[p];return{...h,backgroundRatio:"frame"===a?.686:h.backgroundRatio}};var b=a(631),p=a(4),h=a(1);const g=[{blendMode:"overlay",opacity:1}],f=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],v={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":g,"art-overlay":g,"art-border":g,"art-border-pendulum":g,"border-pendulum":g,attribute:g,frame:g},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":f,"art-border":f,"art-border-pendulum":f,"border-pendulum":f,frame:f,"frame-background":f,name:f,star:f},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},y={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},x={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},j=p.b.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: var(--br);
    margin: 7px 0;
`,O={normal:{name:"normal",color:"#747b95",preview:Object(h.jsx)(b.a,{}),isOption:!1},gold:{name:"gold",color:"#cfa65f",preview:Object(h.jsx)(j,{style:{backgroundColor:"#cfa65f"}}),isOption:!0},platinum:{name:"platinum",color:"#b1b1b1",preview:Object(h.jsx)(j,{style:{backgroundColor:"#b1b1b1"}}),isOption:!0},rainbow:{name:"rainbow",color:"#f3a486",preview:Object(h.jsx)(j,{style:{background:"linear-gradient(\n            135deg,\n            rgba(255, 80, 80, 1) 0%,\n            rgba(255, 194, 40, 1) 10%,\n            rgba(248, 255, 73, 1) 30%,\n            rgba(119, 255, 114, 1) 40%,\n            rgba(103, 255, 255, 1) 50%,\n            rgba(87, 241, 255, 1) 70%,\n            rgba(68, 167, 255, 1) 80%,\n            rgba(226, 52, 255, 1) 90%,\n            rgba(255, 80, 80, 1) 100%\n        )"}}),isOption:!0}},w=e=>[{label:null===e||void 0===e?void 0:e.normal,...O.normal},{label:null===e||void 0===e?void 0:e.gold,...O.gold},{label:null===e||void 0===e?void 0:e.platinum,...O.platinum}],k={topLeftFrame:0,topRightFrame:1,bottomLeftFrame:2,bottomRightFrame:3,effectBackground:4,pendulumEffectBackground:5,foil:6};var S=a(632);const C="NONE",F=[{name:C,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0}],L=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0}],T=L.reduce((e,t)=>{const{name:a}=t;return e[a]=t,e},{}),N={pt:{TRAP:{offsetX:-11}},it:{TRAP:{offsetX:-4}}},I={jp:{key:"jp",category:"ocg",fileKey:"ocg"},en:{key:"en",category:"tcg",fileKey:"tcg"},ch:{key:"ch",category:"ocg",fileKey:"ch"},de:{key:"de",category:"tcg",fileKey:"de"},fr:{key:"fr",category:"tcg",fileKey:"fr"},it:{key:"it",category:"tcg",fileKey:"it"},pt:{key:"pt",category:"tcg",fileKey:"pt"},sp:{key:"sp",category:"tcg",fileKey:"sp"}},R={tcg:I.en.key,ocg:I.jp.key},E="NO ICON",M=[{label:Object(h.jsx)(b.a,{}),value:E,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0},{label:"Normal",value:"NORMAL",nameKey:"input.icon.normal",isOption:!0}],z="no-sticker",P=[{value:z,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],A={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},custom:{value:"custom",labelKey:"input.icon-type.custom.label",fullLabelKey:"input.icon-type.custom.full.label",icon:Object(h.jsx)(S.a,{}),isOption:!1,isMixable:!1,showIcon:!1,imagePresetPath:"icon-",imagePresetSource:""},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-icon-list.png"}),isOption:!0,isMixable:!1,showIcon:!1,imagePresetPath:"icon-st",imagePresetSource:"subfamily/subfamily-icon-list.png"},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level",imagePresetSource:"subfamily/subfamily-level.png"},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-negative-level",imagePresetSource:"subfamily/subfamily-negative-level.png"},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-rank",imagePresetSource:"subfamily/subfamily-rank.png"},"level-rank":{value:"level-rank",labelKey:"input.icon-type.level-rank.label",fullLabelKey:"input.icon-type.level-rank.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"level-rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-level-rank",imagePresetSource:"subfamily/subfamily-level-rank.png"},grade:{value:"grade",labelKey:"input.icon-type.grade.label",fullLabelKey:"input.icon-type.grade.full.label",icon:Object(h.jsx)("img",{className:"icon-image",alt:"grade-icon",src:"/ygocarder/asset/image/subfamily/subfamily-grade.png"}),isOption:!0,isMixable:!0,showIcon:!1,imagePresetPath:"icon-grade",imagePresetSource:"subfamily/subfamily-grade.png"}},D=Object.values(A),H={dark:{value:"dark",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.dark",icon:Object(h.jsx)("img",{className:"icon-image",alt:"dark-icon",src:"/ygocarder/asset/image/subfamily/subfamily-dark.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-dark",imagePresetSource:"subfamily/subfamily-dark.png"},earth:{value:"earth",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.earth",icon:Object(h.jsx)("img",{className:"icon-image",alt:"earth-icon",src:"/ygocarder/asset/image/subfamily/subfamily-earth.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-earth",imagePresetSource:"subfamily/subfamily-earth.png"},fire:{value:"fire",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.fire",icon:Object(h.jsx)("img",{className:"icon-image",alt:"fire-icon",src:"/ygocarder/asset/image/subfamily/subfamily-fire.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-fire",imagePresetSource:"subfamily/subfamily-fire.png"},light:{value:"light",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.light",icon:Object(h.jsx)("img",{className:"icon-image",alt:"light-icon",src:"/ygocarder/asset/image/subfamily/subfamily-light.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-light",imagePresetSource:"subfamily/subfamily-light.png"},water:{value:"water",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.water",icon:Object(h.jsx)("img",{className:"icon-image",alt:"water-icon",src:"/ygocarder/asset/image/subfamily/subfamily-water.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-water",imagePresetSource:"subfamily/subfamily-water.png"},wind:{value:"wind",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.wind",icon:Object(h.jsx)("img",{className:"icon-image",alt:"wind-icon",src:"/ygocarder/asset/image/subfamily/subfamily-wind.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-wind",imagePresetSource:"subfamily/subfamily-wind.png"},divine:{value:"divine",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.divine",icon:Object(h.jsx)("img",{className:"icon-image",alt:"divine-icon",src:"/ygocarder/asset/image/subfamily/subfamily-divine.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-divine",imagePresetSource:"subfamily/subfamily-divine.png"},spell:{value:"spell",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.spell",icon:Object(h.jsx)("img",{className:"icon-image",alt:"spell-icon",src:"/ygocarder/asset/image/subfamily/subfamily-spell.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-spell",imagePresetSource:"subfamily/subfamily-spell.png"},trap:{value:"trap",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.trap",icon:Object(h.jsx)("img",{className:"icon-image",alt:"trap-icon",src:"/ygocarder/asset/image/subfamily/subfamily-trap.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-trap",imagePresetSource:"subfamily/subfamily-trap.png"}},B=Object.values(H),W={"continuous-l":{value:"continuous-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.continuous",icon:Object(h.jsx)("img",{className:"icon-image",alt:"continuous-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-continuous",imagePresetSource:"subfamily/subfamily-continuous-l.png"},"counter-l":{value:"counter-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.counter",icon:Object(h.jsx)("img",{className:"icon-image",alt:"counter-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-counter-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-counter",imagePresetSource:"subfamily/subfamily-counter-l.png"},"equip-l":{value:"equip-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.equip",icon:Object(h.jsx)("img",{className:"icon-image",alt:"equip-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-equip-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-equip",imagePresetSource:"subfamily/subfamily-equip-l.png"},"field-l":{value:"field-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.field",icon:Object(h.jsx)("img",{className:"icon-image",alt:"field-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-field-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-field",imagePresetSource:"subfamily/subfamily-field-l.png"},"quick-play-l":{value:"quick-play-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.quick-play",icon:Object(h.jsx)("img",{className:"icon-image",alt:"quick-play-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-quick-play-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-quick-play",imagePresetSource:"subfamily/subfamily-quick-play-l.png"},"ritual-l":{value:"ritual-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.ritual",icon:Object(h.jsx)("img",{className:"icon-image",alt:"ritual-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-ritual-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-ritual",imagePresetSource:"subfamily/subfamily-ritual-l.png"},"normal-l":{value:"normal-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.normal",icon:Object(h.jsx)("img",{className:"icon-image",alt:"normal-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-normal-l.png"}),isOption:!0,isMixable:!0,showIcon:!0,imagePresetPath:"icon-normal",imagePresetSource:"subfamily/subfamily-normal-l.png"}},$=Object.values(W),Y={rank:"rank",ritual:"ritual","ritual-l":"ritual-l",spell:"spell",trap:"trap",water:"water",wind:"wind",continuous:"continuous","continuous-l":"continuous-l",counter:"counter","counter-l":"counter-l",dark:"dark",divine:"divine",earth:"earth",equip:"equip","equip-l":"equip-l",field:"field","field-l":"field-l",fire:"fire",glow:"glow",grade:"grade","icon-list":"icon-list",level:"level","level-rank":"level-rank",light:"light","negative-level":"negative-level",normal:"normal","normal-l":"normal-l","quick-play":"quick-play","quick-play-l.png":"quick-play-l.png"},K={...A,...H,...W},U=13,G={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},X={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},q={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextGapRatio:0,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,vietnameseFont:"Times New Roman",vietnameseFontRatio:1.1,letterOffsetMap:{"\u2605":{ratio:.9,baseline:-.05,yRatio:1},"\u2606":{ratio:.9,baseline:-.05,yRatio:1},"\xa1":{ratio:1.2,baseline:-0,yRatio:1.05}}},V={...q,font:"MatrixBook, Times New Roman",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[],variant:"default-tcg"},_={...q,font:'"StoneSerif-Italic", "SVN-Times New Roman Italic"',vietnameseFont:'"SVN-Times New Roman Italic"',headTextHeightRatio:.75,fontStyle:"tcg",vietnameseFontRatio:1.08,fontList:[],variant:"default-tcg-normal"},J={...q,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[],variant:"default-ocg"},Q={tcg:{..._,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{..._,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{..._,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{..._,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{..._,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{..._,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{..._,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{..._,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},Z={tcg:{...V,variant:"tcg",fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...V,variant:"tcg-stat",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...V,variant:"tcg-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...V,variant:"tcg-type",fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...V,variant:"tcg-pendulumLarge",fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...V,variant:"tcg-pendulumLarge-stat",fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...V,variant:"tcg-pendulumLarge-type-stat",fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...V,variant:"tcg-pendulumLarge-type",fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...J,variant:"ocg",fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...J,variant:"ocg-stat",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...J,variant:"ocg-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...J,variant:"ocg-type",fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...J,variant:"ocg-pendulumLarge",fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...J,variant:"ocg-pendulumLarge-stat",fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...J,variant:"ocg-pendulumLarge-type-stat",fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...J,variant:"ocg-pendulumLarge-type",fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},ee={tcg:{default:1.5,pt:2.825},ocg:{default:3.65}},te="#010101",ae="Auto",re=()=>({font:ae,fillStyle:te,headTextFillStyle:te,shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"}),ne=()=>[!1,te,!1,"#000000"],ie=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",font:ae,...e}),oe={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:ie({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:ie({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:ie({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:ie({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:ie({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:ie({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:ie({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:ie({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:ie({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:ie({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:ie({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:ie({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:ie({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:ie({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:ie({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:ie({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:ie({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:ie({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})},rainbowSecretRare:{key:"rainbowSecretRare",label:"Rainbow Secret Rare",image:"asset/image/other/name-rainbow-secret-rare.png",value:ie({hasOutline:!0,headTextFillStyle:"#000000",lineColor:"#333333",lineOffsetX:0,lineOffsetY:0,lineWidth:6,pattern:"type2",preset:"rainbowSecretRare"})}},le=Object.values(oe),se={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},ce=Object.values(se);var de=a(622);const ue={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:49,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:792,artlessFrameY:553,fontSize:56.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:808,artlessFrameY:553,fontSize:56.5}},me=Object.values(ue),be={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},pe="medium",he=[{index:0,labelKey:"input.flag.mix-def-link",type:"checkbox",order:0},{index:1,labelKey:"input.flag.link-rating-behavior",type:"link-rating-behavior",order:2},{index:2,labelKey:"input.flag.hide-deactivated-link",type:"checkbox",order:1}],ge=0,fe=1,ve=he.length,ye={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},xe={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:65,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:65,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:65,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:65,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:65,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:951.5,trueEdge:65,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:65,trueHeightCap:144}]},je=64.44,Oe={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:129,trueHeightCap:80}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:122.6}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:129,trueHeightCap:155.8}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5,trueHeightCap:79.8}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:126.1}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:155.5}]}},we={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},ke={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},Se={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},Ce=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u53d6\u308a\u9664\u304d",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304d"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u540c\u4e00",rubyForm:"{\u540c|\u3069\u3046}{\u4e00|\u3044\u3064}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],Fe=Ce.reduce((e,t)=>(e[t.shortForm]=t,e),{}),Le={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps, Times New Roman",font:"MatrixRegularSmallCaps, Times New Roman",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.55,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix, Times New Roman",symbolFontRatio:.775,vietnameseFont:"MatrixRegularSmallCaps",vietnameseFontRatio:1,variant:"default-name",fontList:[{bulletWidth:64,fontSize:91,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91,offsetY:0}],letterOffsetMap:{"\u2605":{ratio:.55,baseline:-.05,yRatio:1},"\u2606":{ratio:.55,baseline:-.05,yRatio:1},"\xa1":{ratio:1,baseline:-.098,edge:.02,yRatio:.58}},letterDeviationMap:{default:{threshold:0,letterMap:{0:{baseLetter:"0"},1:{baseLetter:"1"},2:{baseLetter:"2"},C:{baseLetter:"C"},"\u0106":{baseLetter:"C"},"\u0108":{baseLetter:"C"},"\u010c":{baseLetter:"C"},"\u010a":{baseLetter:"C"},"\u1e08":{baseLetter:"C"},"\u0187":{baseLetter:"C"},"C\u0308":{baseLetter:"C"},"\u023b\u0308":{baseLetter:"C"},"\xc7\u0308":{baseLetter:"C"},"\u0107\u0308":{baseLetter:"c"},"\u0109\u0308":{baseLetter:"c"},"\u010d\u0308":{baseLetter:"c"},"\u010b\u0308":{baseLetter:"c"},"\u1e09\u0308":{baseLetter:"c"},"\u0188\u0308":{baseLetter:"c"},"c\u0308\u0308":{baseLetter:"c"},"\u023c\u0308":{baseLetter:"c"},"\xe7\u0308":{baseLetter:"c"},Q:{baseLetter:"Q"},"\u024a":{baseLetter:"Q"},q:{baseLetter:"q"},"\u02a0":{baseLetter:"q"},"\u024b":{baseLetter:"q"},"q\u0303":{baseLetter:"q"},o:{baseLetter:"o"},"\xf8":{baseLetter:"o"},"\u01ff":{baseLetter:"o"},"\xf6":{baseLetter:"o"},"\u022b":{baseLetter:"o"},"\xf3":{baseLetter:"o"},"\xf4":{baseLetter:"o"},"\u1ed1":{baseLetter:"o"},"\u1ed5":{baseLetter:"o"},"\u1ed7":{baseLetter:"o"},"\u01eb":{baseLetter:"o"},"\u020d":{baseLetter:"o"},"o\u0329":{baseLetter:"o"},"\xf3\u0329":{baseLetter:"o"},"\xf2\u0329":{baseLetter:"o"},"\u1ed9":{baseLetter:"o"},"\u01d2":{baseLetter:"o"},"\u1e53":{baseLetter:"o"},"\u1e51":{baseLetter:"o"},"\u1ecf":{baseLetter:"o"},"\u014d":{baseLetter:"o"},"\u1e4f":{baseLetter:"o"},"\xf5":{baseLetter:"o"},"\u1e4d":{baseLetter:"o"},"\u0151":{baseLetter:"o"},"\u014f":{baseLetter:"o"},"\u020f":{baseLetter:"o"},"\u022f":{baseLetter:"o"},"\u0231":{baseLetter:"o"},"\u01a1":{baseLetter:"o"},"\u1ecd":{baseLetter:"o"},"\u1ed3":{baseLetter:"o"},"\xf2":{baseLetter:"o"},"\u019f":{baseLetter:"o"},"\u0275":{baseLetter:"o"},"\u1ee1":{baseLetter:"o"},"\u1edb":{baseLetter:"o"},"\u1edd":{baseLetter:"o"},"\u1edf":{baseLetter:"o"},"\u022d":{baseLetter:"o"},"\u1ee3":{baseLetter:"o"},"\u01ed":{baseLetter:"o"},O:{baseLetter:"O"},"\xd8":{baseLetter:"O"},"\u01fe":{baseLetter:"O"},"\xd6":{baseLetter:"O"},"\u022a":{baseLetter:"O"},"\xd3":{baseLetter:"O"},"\xd2":{baseLetter:"O"},"\xd4":{baseLetter:"O"},"\u1ed0":{baseLetter:"O"},"\u1ed2":{baseLetter:"O"},"\u1ed4":{baseLetter:"O"},"\u1ed6":{baseLetter:"O"},"\u1ed8":{baseLetter:"O"},"\u01d1":{baseLetter:"O"},"\u0150":{baseLetter:"O"},"\u014e":{baseLetter:"O"},"\u020e":{baseLetter:"O"},"\u022e":{baseLetter:"O"},"\u0230":{baseLetter:"O"},"\u1ecc":{baseLetter:"O"},"\u01a0":{baseLetter:"O"},"\u1eda":{baseLetter:"O"},"\u1edc":{baseLetter:"O"},"\u1ee0":{baseLetter:"O"},"\u1ee2":{baseLetter:"O"},"\u1ede":{baseLetter:"O"},"\u1ece":{baseLetter:"O"},"\u014c":{baseLetter:"O"},"\u1e52":{baseLetter:"O"},"\u1e50":{baseLetter:"O"},"\xd5":{baseLetter:"O"},"\u022c":{baseLetter:"O"},"\u1e4c":{baseLetter:"O"},"\u1e4e":{baseLetter:"O"},"\u01ea":{baseLetter:"O"},"\u020c":{baseLetter:"O"},"O\u0329":{baseLetter:"O"},"\xd3\u0329":{baseLetter:"O"},"\xd2\u0329":{baseLetter:"O"},"\u01ec":{baseLetter:"O"},I:{baseLetter:"I"},i:{baseLetter:"i"},"\xcc":{baseLetter:"I"},"\xcd":{baseLetter:"I"},"\xce":{baseLetter:"I"},"\xcf":{baseLetter:"I"},"\xec":{baseLetter:"i"},"\xed":{baseLetter:"i"},"\xee":{baseLetter:"i"},"\xef":{baseLetter:"i"},"\u0128":{baseLetter:"I"},"\u0129":{baseLetter:"i"},"\u012a":{baseLetter:"I"},"\u012b":{baseLetter:"i"},"\u1ec8":{baseLetter:"I"},"\u1ec9":{baseLetter:"i"},"\u1eca":{baseLetter:"I"},"\u1ecb":{baseLetter:"i"},E:{baseLetter:"E"},e:{baseLetter:"e"},"\xc8":{baseLetter:"E"},"\xc9":{baseLetter:"E"},"\xca":{baseLetter:"E"},"\xca\u0304":{baseLetter:"E"},"\xca\u030c":{baseLetter:"E"},"\xcb":{baseLetter:"E"},"\xe8":{baseLetter:"e"},"\xe9":{baseLetter:"e"},"\xea":{baseLetter:"e"},"\xea\u0304":{baseLetter:"e"},"\xea\u030c":{baseLetter:"e"},"\xeb":{baseLetter:"e"},"\u0112":{baseLetter:"E"},"\u0113":{baseLetter:"e"},"\u1eba":{baseLetter:"E"},"\u1ebb":{baseLetter:"e"},"\u1ebc":{baseLetter:"E"},"\u1ebd":{baseLetter:"e"},"\u1ebe":{baseLetter:"E"},"\u1ebf":{baseLetter:"e"},"\u1ec0":{baseLetter:"E"},"\u1ec1":{baseLetter:"e"},"\u1ec2":{baseLetter:"E"},"\u1ec3":{baseLetter:"e"},"\u1ec4":{baseLetter:"E"},"\u1ec5":{baseLetter:"e"},"E\u0329":{baseLetter:"E"},"e\u0329":{baseLetter:"e"},"\xc8\u0329":{baseLetter:"E"},"\xc9\u0329":{baseLetter:"E"},"\xe8\u0329":{baseLetter:"e"},"\u1eb8":{baseLetter:"E"},"\u1eb9":{baseLetter:"e"},"\u1ec6":{baseLetter:"E"},"\u1ec7":{baseLetter:"e"},N:{baseLetter:"N"},"\u0143":{baseLetter:"N"},"\xd1":{baseLetter:"N"},"\u0147":{baseLetter:"N"},"\u01f8":{baseLetter:"N"},"\u1e44":{baseLetter:"N"},"\u1e46":{baseLetter:"N"},"\u0145":{baseLetter:"N"},"\u1e48":{baseLetter:"N"},"\u1e4a":{baseLetter:"N"},"\ua7a4":{baseLetter:"N"},n:{baseLetter:"n"},"\u0144":{baseLetter:"n"},"\xf1":{baseLetter:"n"},"\u0148":{baseLetter:"n"},"\u01f9":{baseLetter:"n"},"\u1e45":{baseLetter:"n"},"\u1e47":{baseLetter:"n"},"\u0146":{baseLetter:"n"},"\u1e49":{baseLetter:"n"},"\u1e4b":{baseLetter:"n"},"\ua7a5":{baseLetter:"n"},"\u1d70":{baseLetter:"n"},"\u1d87":{baseLetter:"n"}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.825,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:"Arial",vietnameseFontRatio:1,weight:"bold",variant:"arial-name",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextBold:!0,headTextHeightRatio:.775,headTextOverflow:"condense",metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:'"Yu-Gi-Oh! DF Leisho 3"',vietnameseFontRatio:1,variant:"ocg-name",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},Te={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",variant:"ocg-creator",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},Ne={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",variant:"ocg-password",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},Ie={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",variant:"tcg-type-ability",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4,fontLetterOffsetMap:{}}]},Re={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",variant:"ocg-type-ability",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},Ee={"tcg-small":{..._,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{..._,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{..._,variant:"tcg-large",fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},Me={"tcg-small":{...V,variant:"tcg-small",fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...V,variant:"tcg-medium",fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...V,variant:"tcg-large",fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...J,variant:"ocg-small",fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...J,variant:"ocg-medium",fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...J,variant:"ocg-large",fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},ze={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\xd8":"\u2205"},Pe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\u2205":"\xd8"},Ae={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},De={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},He=[{label:"1st Edition",value:"1<st> Edition"},{label:"1\xe8re \xc9dition",value:"1<\xe8re> \xc9dition"},{label:"1\u2006. Auflage",value:"1\u2006. Auflage"},{label:"1\xaa Edizione",value:"1\xaa Edizione"},{label:"1\xaa Edi\xe7\xe3o",value:"1\xaa Edi\xe7\xe3o"},{label:"1\xaa Edici\xf3n",value:"1\xaa Edici\xf3n"}],Be={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},We={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[De.ocg[2]]:De.tcg[2],[De.ocg[1]]:De.tcg[1],[De.ocg[0]]:De.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[Be.ocg]:Be.tcg},$e=Object.entries(We).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),Ye={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100,isOfficial:!0},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90,isOfficial:!0},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85,isOfficial:!0},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80,isOfficial:!0},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70,isOfficial:!0},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60,isOfficial:!0},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50,isOfficial:!0},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30,isOfficial:!0},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25,isOfficial:!0},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#666c74",sortWeight:1,isOfficial:!0},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15,isOfficial:!0},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10,isOfficial:!0},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9,isOfficial:!0},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8,isOfficial:!0},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7,isOfficial:!0},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6,isOfficial:!0},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5,isOfficial:!0},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3,isOfficial:!0},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2,isOfficial:!0},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4,isOfficial:!0},rebirth:{name:"rebirth",nameKey:"input.frame.rebirth",labelColor:"#000000",edition:"fanmade",labelBackgroundColor:"#ff9e03",sortWeight:100,isOfficial:!1}},Ke=Object.values(Ye),Ue=Ye.effect,Ge={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"},foil:{labelKey:"input.foil.label"}},Xe={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},qe=[-45,0,45,-90,0,90,-135,180,135],Ve=[-38,-28,-38,-28,0,-28,-38,-28,-38],_e=[-30,-23,-30,-28,0,-28,-30,-23,-30],Je=[0,0,0,0,0,0,0,0,0],Qe=[-5,0,5,0,0,0,5,0,-5],Ze=Object.values({...A,...H,...W}).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),et=Object.values(I).map(e=>{const t=e.fileKey,a=["ocg","tcg"].includes(t);return[...[...F].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}}),...[...a?L:[]].filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{name:a}=e;return{imagePresetPath:`icon-${t}-${a.toLowerCase()}`,imagePresetSource:`attribute/attr-${t}-${a.toLowerCase()}.png`}})]}),tt={...et.flatMap(e=>e).reduce((e,t)=>(e[t.imagePresetPath]=t.imagePresetSource,e),{}),...Ze},at=new RegExp("[A-Z\uff21-\uff3a\xc0-\xd6]"),rt=new RegExp("[\\[\\]\u3010\u3011]"),nt=`<(\\/?(${["i","b","pre"].join("|")}))( [^<]*|)>`,it=(new RegExp(nt),"img"),ot=`<(${[it].join("|")}).*?\\/>`,lt=(new RegExp(ot),"</i>"),st="</b>",ct="<pre>",dt="</pre>",ut="\u29da",mt="\u29db",bt="\u27c5",pt="\u27c6",ht="\u169b",gt="\u169c",ft="\u27ec",vt="\u27ed",yt="\u2987",xt="\u2988",jt=new RegExp(`[${[gt,ht,pt,bt,vt,ft,mt,ut].join("")}]|(\\|[^}]+})`,"g"),Ot=new RegExp(`${yt}[^${yt}${xt}]*${xt}$`),wt="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19\xc0-\xd6\xd9-\xf6\xf9-\xff\u0100-\u017e\u0180-\u024f\u1e00-\u1eff!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",kt=new RegExp(wt),St=new RegExp("[\u0102\u0110\u01a0\u0103\u0111\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]"),Ct=new RegExp(`(\\{[^\\{\\}]+?\\}|${wt}|${yt}[^${yt}${xt}]*${xt}|.)`,"u"),Ft="\u2e26\u2e27",Lt="\u2e26\u2e26\u2e27\u2e27",Tt=new RegExp(`(^|[-\\u2014/[(\\u2018${ut}${bt}${ht}${ft}\\s])"`,"g"),Nt=`${ut}|${mt}`,It=new RegExp(Nt),Rt=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${ut}?(\\(|\\*)[\\w\\W]+${mt}?)\\s*$`,Et=new RegExp("[\uff0b\uff0d\xb1~\xa1\xd8#\u2605\u2606@\u221e\u0370-\u03ff\u1f00-\u1ffe]"),Mt=`(${Ce.map(e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm}).join("|")})(?![^{]*})`,zt="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Pt=new RegExp(`[${zt}]`),At=`.[${zt})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,Dt=new RegExp("[\u2460-\u2473\u203b]"),Ht=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),Bt=new RegExp("[\uff10-\uff19]"),Wt=new RegExp("[0-9]"),$t=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,Yt=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Kt=new RegExp("[\u30fb]"),Ut=new RegExp("[\u30fc]"),Gt=new RegExp("[\u2015]"),Xt=new RegExp("[\uff1a]"),qt=new RegExp("[\u3002\uff64]"),Vt=new RegExp("[\uff1a]"),_t={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},Jt={"\u3002":-.5,"\uff1a":-.25},Qt={">":.125,"<":.125},Zt={},ea={},ta={},aa=e=>"tcg"===e?7:1,ra=/{[^{}]+?}/,na="\\s\\-/",ia=-2.25,oa=()=>({version:2,format:"tcg",region:"en",frame:"fusion",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:re(),attribute:"LIGHT",attributeType:"auto",subFamily:E,cardIcon:"auto",star:6,starAlignment:"auto",starList:[],art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artStyle:{flipX:!1,flipY:!1},artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:pe,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",firstEditionText:"1<st> Edition",isFirstEdition:!0,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:ne(),typeTextStyle:ne(),effectTextStyle:ne(),pendulumTextStyle:ne(),otherTextStyle:ne(),flag:[0,0,0],dyeList:["","","","","","",""],externalInfo:{}}),la=()=>({id:Object(de.a)(),...oa()}),sa=()=>({version:3,format:"tcg",region:"en",frame:"effect",legacyTemplate:!1,leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:re(),attribute:C,attributeType:"auto",subFamily:E,cardIcon:"auto",star:6,starList:[],starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artStyle:{flipX:!1,flipY:!1},artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundStyle:{flipX:!1,flipY:!1},backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:pe,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0,justifyRatio:100},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:z,firstEditionText:"1<st> Edition",isFirstEdition:!1,cornerText:"",hasCornerText:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:ne(),typeTextStyle:ne(),effectTextStyle:ne(),pendulumTextStyle:ne(),otherTextStyle:ne(),dyeList:["","","","","","",""],flag:[0,0,0],externalInfo:{}}),ca=[{subType:"artBorder",labelKey:"input.opacity.art-border.label",tooltipKey:"input.opacity.art-border.tooltip"},{subType:"nameBorder",labelKey:"input.opacity.name-border.label",tooltipKey:"input.opacity.name-border.tooltip"},{subType:"effectBox",labelKey:"input.opacity.effect-box.label",tooltipKey:"input.opacity.effect-box.tooltip"}],da=[{type:"body",label:"Card",labelKey:"input.opacity.body.label"},{type:"name",label:"Name",labelKey:"input.opacity.name.label"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label"},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label"}],ua=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF",te,"#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],ma={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(h.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},ba=[ma["549x800"],ma["561x818"],ma["813x1185"],ma["1122x1636"],ma["1388x2026"],ma["1626x2370"]],pa=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],ha=e=>[{value:"auto",label:e["setting.option.sliding-type.auto.label"]},{value:"manual",label:e["setting.option.sliding-type.manual.label"]}],{width:ga,height:fa}=s,va=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fa;const a=document.createElement("canvas");a.width=e,a.height=t;const r=a.getContext("2d");return{canvas:a,ctx:r}};var ya=a(161),xa=a.n(ya),ja=a(241),Oa=a.n(ja),wa=a(111),ka=a.n(wa),Sa=a(296),Ca=a.n(Sa),Fa=a(297),La=a.n(Fa),Ta=a(298),Na=a.n(Ta),Ia=a(299),Ra=a.n(Ia);function Ea(e,t){var a,r,n,i,o,l,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,b=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],b+=c[a],m=Math.max(m,c[a]);var p=ka.a.mallocDouble(u),h=xa()(p,c.slice(0),d.slice(0),0),g=ka.a.mallocUint32(m),f=ka.a.mallocUint32(m),v=ka.a.mallocDouble(u),y=xa()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:b);for(function(e,t,a){var r,n,i,o=0,l=Math.min;for(r=0;r<t;++r){for(i=e[o++],n=1;n<a;++n)i=l(e[o],i+1),e[o++]=i;for(n=0;n<a;++n)i=l(e[--o],i+1),e[o]=i;o+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(i=h.stride,n=1,r=a-1;r<s;++r)i[r]=n,n*=c[r];for(r=a-2;r>=0;--r)i[r]=n,n*=c[r];if(Oa.a.assign(h,y),l=c[a-1],isFinite(t))if(1===t)Ca()(h.data,u/l|0,0|l,g,f);else if(2===t)La()(h.data,u/l|0,0|l,g,f);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");Ra()(h.data,u/l|0,0|l,g,f,t)}else Na()(h.data,u/l|0,0|l,g,f);o=y,y=h,h=o}return Oa.a.assign(e,y),ka.a.freeDouble(v),ka.a.freeDouble(p),ka.a.freeUint32(g),ka.a.freeUint32(f),e}const{width:Ma,height:za}=s,Pa=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ma,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:za;if(!Wr.test(t))return{canvas:e,ctx:e.getContext("2d")};const{ctx:n,canvas:i}=va(a,r);return n?(n.filter="grayscale(1)",n.drawImage(e,0,0),n.filter="none",n.fillStyle=t,n.globalCompositeOperation="overlay",n.fillRect(0,0,Ma,za),n.globalCompositeOperation="destination-in",n.drawImage(e,0,0),n.globalCompositeOperation="source-over",{canvas:i,ctx:i.getContext("2d")}):{canvas:e,ctx:e.getContext("2d")}};var Aa=a(39),Da=a(334),Ha=a(300),Ba=a(145);const Wa={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},$a={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ya={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},Ka="sobel",Ua=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:Ka});class Ga{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...Ua(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:i,invertedGreen:o,invertedSource:l,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(i),this.invertGreen(o),this.invertSource(l),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new Aa.h(-.5,.5,.5,-.5,0,1),t=new Aa.k,a=new Ha.a(t,e);this.renderer=new Aa.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=Aa.n.clone(Ya.uniforms),this.material=new Aa.l({fragmentShader:Ya.fragmentShader,vertexShader:Ya.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new Aa.i(1,1,1,1),n=new Aa.f(r,this.material);t.add(n),this.gaussianShaderY=new Ba.a($a),this.gaussianShaderX=new Ba.a(Wa),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new Da.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new Aa.p(e,t,{minFilter:Aa.g,magFilter:Aa.g,format:Aa.j,stencilBuffer:!1})}getTexture(e){const t=new Aa.m(e);return t.wrapS=t.wrapT=Aa.b,t.minFilter=t.magFilter=Aa.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const Xa=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),i=Math.sin(a)*Math.cos(r),o=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*i)/100,Math.round(100*o)/100]},qa=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:i=[255,255,255],lightAngleVec:o,lightPitch:l,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,b=null!==r&&void 0!==r?r:t.width,p=u.getImageData(0,0,b,m,{willReadFrequently:!0}).data,h=o||("number"===typeof l&&"number"===typeof s?Xa(l,s):[1,0,0]),g=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),f=[h[0]/g,h[1]/g,h[2]/g];if(p)try{var v;const e=new Uint8ClampedArray(b*m);for(let n=0;n<p.length;n+=4)p[n]||p[n+1]||p[n+2]||p[n+3]?e[n/4]=0:e[n/4]=1;const t=Ea(xa()(e,[m,b])),a=t.shape[0],r=t.shape[1],o=new Uint8ClampedArray(b*m*4),l=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*b+e),r=t.get(n,e);o[a]=r*l,o[a+1]=r*l,o[a+2]=r*l,o[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=b,s.height=m,null===(v=s.getContext("2d"))||void 0===v||v.putImageData(new ImageData(o,b,m),0,0);const u=document.createElement("canvas");u.width=b,u.height=m;new Ga(Ua(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:Ka});const h=document.createElement("canvas");h.width=b,h.height=m;const g=h.getContext("2d");if(null===g||void 0===g||g.drawImage(u,0,0,b,m),!g)throw new Error("Could not soften normal map");const y=((e,t,a,r,n,i)=>{const o=new Uint8ClampedArray(t*a*4),l=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*i**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,i=0,u=0,m=0;for(let o=-l;o<=l;o++)for(let b=-l;b<=l;b++){const l=r+b,p=d+o;if(l>=0&&p>=0&&l<t&&p<a){const a=4*(d*t+r),o=4*(p*t+l),b=e[a],h=e[a+1],g=e[a+2],f=e[o],v=e[o+1],y=e[o+2],x=s(l,p,r,d)*c(b,f)*c(h,v)*c(g,y);n+=f*x,i+=v*x,u+=y*x,m+=x}}const b=4*(d*t+r);o[b]=n/m,o[b+1]=i/m,o[b+2]=u/m,o[b+3]=e[b+3]}return o})(g.getImageData(0,0,b,m).data,b,m,9,70,20),x=new Uint8ClampedArray(b*m*4);for(let n=0;n<p.length;n+=4){let e=y[n]/127.5-1,t=y[n+1]/127.5-1,a=y[n+2]/127.5-1;const r=(e*f[0]+t*f[1]+a*f[2])/2*(Math.abs(c)+Math.abs(d)),o=Math.max(c,Math.min(r,d));x[n]=Math.round(p[n]+i[0]*o),x[n+1]=Math.round(p[n+1]+i[1]*o),x[n+2]=Math.round(p[n+2]+i[2]*o),x[n+3]=p[n+3]}return new ImageData(x,b,m)}catch(y){return console.error("Could not apply emboss effect",y),null}},Va=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(r=>{setTimeout(()=>{if(e.current&&t)try{e.current.toBlob(e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r({status:"success"})},e.onerror=e=>{URL.revokeObjectURL(a),r({status:"error",data:e})}}else r({status:"error",data:new Error("Empty layer")})}else r({status:"error",data:new Error("No layer blob")})})}catch(a){t.drawImage(e.current,0,0),console.error("generateLayer",e.current.id,a),r({status:"error",data:a})}else r({status:"error",data:new Error("No export canvas")})},25*a)})},_a=e=>"speed-skill"===e.frame&&!Ja(e),Ja=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,Qa=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"rebirth"===e?"grade":"level",Za=e=>!Ja({frame:e})||tr(e),er=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),tr=e=>["link"].includes(e)||er(e),ar=(e,t)=>{let a=!1;switch(e){case 1:a=!0;break;case 2:a=!1;break;case 0:a=null!==t&&void 0!==t&&t}return a},rr=(e,t)=>{var a,r,n,i,o,l;const{frame:s,topLeftFrame:c,topRightFrame:d,bottomLeftFrame:u,bottomRightFrame:m,effectBackground:b,pendulumEffectBackground:p}=e,h=null!==s&&void 0!==s?s:"effect",g=null!==(a="auto"===c?h:c)&&void 0!==a?a:h,f=null!==(n="auto"===u?t?"spell":g:u)&&void 0!==n?n:h;return{topLeftFrame:g,topRightFrame:null!==(r="auto"===d?g:d)&&void 0!==r?r:h,bottomLeftFrame:f,bottomRightFrame:null!==(i="auto"===m?f:m)&&void 0!==i?i:h,effectBackground:null!==(o="auto"===b?f:b)&&void 0!==o?o:h,pendulumEffectBackground:null!==(l="auto"===p?f:p)&&void 0!==l?l:h}},nr=e=>{var t,a;let{format:r,frame:n,nameStyle:i,nameStyleType:o,foil:l}=e;const s=_a({frame:n});let c="auto"===o?ae:i.font;if(c===ae&&"ocg"===r&&(c="OCG"),c===ae&&"tcg"===r&&(c="Default"),c===ae&&s&&"tcg"===r&&(c="Arial"),"custom"===o)return{...i,font:c};const d=Za(n);let u={fillStyle:d?"#ffffff":te,headTextFillStyle:d?"#ffffff":te};if("predefined"===o){var m;const e={...oe[null!==(m=i.preset)&&void 0!==m?m:"commonB"].value};return{...u,...e,font:e.font===ae?c:e.font}}let b=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const p="normal"!==l&&null!==(t=null===(a=oe[l])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===n?oe.animeGold.value:{};return{font:c,...u,...b,...p,...h}};var ir=a(630),or=a(617);const lr=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return sr(e,0)},sr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),e=>e===t[0]?t[1]:t[0]);if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},cr={version:"ve",format:"fm",region:"rg",legacyTemplate:"lt",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artBorder:"opab",effectBox:"opeb",frameBorder:"opfb",nameBorder:"opnb",baseFill:"opbf",artFrame:"opaf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artStyle:{_newKey:"ast",flipX:"asfx",flipY:"asfy"},artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundStyle:{_newKey:"bst",flipX:"bsfx",flipY:"bsfy"},backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg",minLine:"eml",justifyRatio:"ejr"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg",minLine:"pml",justifyRatio:"pjr"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",attributeType:"att",subFamily:"sf",starList:"stl",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",firstEditionText:"fe",isFirstEdition:"ife",cornerText:"act",hasCornerText:"hct",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",dyeList:"dl",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},dr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cr;const a={},r={...e};return Object.keys(r).forEach(e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var i;const r=null===(i=t[e])||void 0===i?void 0:i._newKey;r&&(a[r]=dr(n,t[e]))}}),a},ur=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cr;const a={};return Object.keys(t).forEach(r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&e[i]&&(a[r]=ur(e[i],t[r]))}}),a},mr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cr;const a="string"===typeof e?JSON.parse(lr(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach(e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&a[i]&&(r[e]=mr(a[i],t[e]))}}),r},br=function(e){var t,a,r,n,i,o;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:sa();delete l.version;const s={id:Object(de.a)(),...l,...Object(ir.a)(e)};if(s.effectStyle={...sa().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...sa().pendulumStyle}:s.pendulumStyle={...sa().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==e.region&&(s.region=I["tcg"===s.format?"en":"jp"].key),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.pendulumSize&&(s.pendulumSize="medium"),null==s.rightFrame&&(s.rightFrame="auto"),null==s.leftFrame&&(s.leftFrame="auto"),null==s.pendulumRightFrame&&(s.pendulumRightFrame="auto"),null==s.finish&&(s.finish=[]),Array.isArray(s.starList)||(s.starList=[]),null==s.artFinish&&(s.artFinish="normal"),s.finish){const e=s.finish;e.includes("art")&&(s.finish=e.filter(e=>"art"!==e),s.otherFinish=[s.artFinish,s.artFinish,s.artFinish,s.artFinish])}!Array.isArray(s.otherFinish)||3!==s.otherFinish.length&&null!=s.otherFinish[3]||(s.otherFinish[3]=sa().otherFinish[3]),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),s.artStyle={flipX:!1,flipY:!1,...s.artStyle},"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),"boolean"!==typeof s.opacity.frameBorder&&(s.opacity.frameBorder=!1),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(n=s.background)&&void 0!==n?n:"")&&(s.background=""),""===(null!==(i=s.backgroundData)&&void 0!==i?i:"")&&(s.backgroundData=""),""===(null!==(o=s.backgroundSource)&&void 0!==o?o:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),s.backgroundStyle={flipX:!1,flipY:!1,...s.backgroundStyle},null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),null==s.linkRating&&(s.linkRating=""),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=ne()),s.pendulumTextStyle||(s.pendulumTextStyle=ne()),s.typeTextStyle||(s.typeTextStyle=ne()),s.statTextStyle||(s.statTextStyle=ne()),s.otherTextStyle||(s.otherTextStyle=ne()),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto"),null==s.attributeType&&(s.attributeType="custom");const c=[0,0,0];if(Array.isArray(s.flag)){if(s.flag.length<c.length){const e=[...s.flag];s.flag=c.map((t,a)=>"number"===typeof e[a]?e[a]:t)}}else s.flag=c;const u=["","","","","","",""];if(Array.isArray(s.dyeList)){if(s.dyeList.length<u.length){const e=[...s.dyeList];s.dyeList=u.map((t,a)=>"string"===typeof e[a]?e[a]:t)}}else s.dyeList=u;if(0===s.version||1===s.version){s.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:i,frame:o}=s,l=Ja({frame:o});("auto"!==e||t?!!(a||r||n&&i.length):l)||(s.atk="",s.def="")}if(2===s.version){s.version=3;const e=s.nameStyle.font;"Default"!==e&&"OCG"!==e||(s.nameStyle.font="Auto")}return s},pr=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},hr=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},gr=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:dr(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:dr(a)}},fr=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),vr=(e,t)=>{const{aspect:a,height:r,width:n,x:i,y:o,unit:l}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:b}=null!==t&&void 0!==t?t:{};return fr(a,s)&&fr(r,c)&&fr(n,d)&&fr(i,u)&&fr(o,m)&&l===b},yr=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},xr=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},jr={height:100,width:550},Or=(()=>{let e="",t={};return{get:e=>t[e],test:(a,r)=>{let{scale:n,xRatio:i,setup:o}=r;const l=JSON.stringify(a);if(l===e)return;e=l;const s=document.getElementById("debug-canvas"),c=null===s||void 0===s?void 0:s.getContext("2d"),d=null!==n&&void 0!==n?n:1,u=null!==i&&void 0!==i?i:1;if(s&&c){c.clearRect(0,0,s.width,s.height),t={},o&&o(c),c.fillStyle="#000000",c.fillText("mienMIEN120OQoq",0,95);const e={1:[{letter:"m",x:Math.round(34*u)},{letter:"i",x:Math.round(52*u),anchor:"m"},{letter:"e",x:Math.round(71*u),anchor:"m"},{letter:"n",x:Math.round(96*u),anchor:"m"},{letter:"M",x:Math.round(136*u)},{letter:"I",x:Math.round(188*u),anchor:"M"},{letter:"E",x:Math.round(208*u),anchor:"M"},{letter:"N",x:Math.round(240*u),anchor:"M"},{letter:"1",x:Math.round(290*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(326*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(360*u),anchor:"M"},{letter:"O",x:Math.round(400*u),anchor:"M"},{letter:"Q",x:Math.round(443*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(483*u),anchor:"m"},{letter:"q",x:Math.round(521*u),anchor:"m",compensateBottom:!1}],2:[{letter:"m",x:Math.round(70*u)},{letter:"i",x:Math.round(105*u),anchor:"m"},{letter:"e",x:Math.round(143*u),anchor:"m"},{letter:"n",x:Math.round(196*u),anchor:"m"},{letter:"M",x:Math.round(337*u)},{letter:"I",x:Math.round(376*u),anchor:"M"},{letter:"E",x:Math.round(415*u),anchor:"M"},{letter:"N",x:Math.round(481*u),anchor:"M"},{letter:"1",x:Math.round(585*u),anchor:"M",compensateTop:!1},{letter:"2",x:Math.round(654*u),anchor:"M",compensateTop:!1},{letter:"0",x:Math.round(723*u),anchor:"M"},{letter:"O",x:Math.round(801*u),anchor:"M"},{letter:"Q",x:Math.round(888*u),anchor:"M",compensateBottom:!1},{letter:"o",x:Math.round(969*u),anchor:"m"},{letter:"q",x:Math.round(1043*u),anchor:"m",compensateBottom:!1}]}[d];if(c.resetTransform(),e){const a=c.getImageData(0,0,jr.width*d,jr.height),r=a.data,n=(e,t,a)=>{r[e]=t?255:0,r[e+1]=a?0:255,r[e+2]=t?0:255,r[e+3]=255};let i={};for(let o=0;o<e.length;o++){const{anchor:l,letter:s,x:c,compensateBottom:d=!0,compensateTop:u=!0}=e[o];let m=-1,b=-1;const p=90;for(let e=0;e<jr.height;e++){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>p&&-1===m&&(o=e),n(t,i>p&&-1===m,u);const l=4*(e*a.width+c+1),s=r[l+3];let d=-1;s>p&&-1===m&&(d=e+1),n(l,s>p&&-1===m,u);const b=4*(e*a.width+c+2),h=r[b+3];let g=-1;if(h>p&&-1===m&&(g=e+2),n(b,h>p&&-1===m,u),m=Math.max(o,d,g),-1!==m)break}for(let e=jr.height-1;e>=0;e--){const t=4*(e*a.width+c),i=r[t+3];let o=-1;i>p&&-1===b&&(o=e),n(t,i>p&&-1===b,d);const l=4*(e*a.width+c+1),s=r[l+3];let u=-1;s>p&&-1===b&&(u=e+1),n(l,s>p&&-1===b,d);const m=4*(e*a.width+c+2),h=r[m+3];let g=-1;if(h>p&&-1===b&&(g=e+2),n(m,h>p&&-1===b,d),b=Math.max(o,u,g),-1!==b)break}if("string"!==typeof l)i[s]={ascent:m,descent:b};else{const{ascent:e,descent:a}=i[l];t[s]={ascentCompensate:"number"===typeof e&&u?m-e:0,descentCompensate:"number"===typeof a&&d?a-b:0,height:b-m,anchorAscent:e,anchorDescent:a,anchorHeight:a-e}}}c.putImageData(new ImageData(r,a.width,a.height),0,0),c.font="10px Arial"}}}}})(),wr=(e,t,a)=>{const r=document.createElement("a"),n=window.URL.createObjectURL(t);r.download=e,r.href=n,r.dataset.downloadurl=[a,r.download,r.href].join(":");const i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(i),r.remove(),window.URL.revokeObjectURL(n)};const kr={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[E]:"None"},Sr=Object.entries(kr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Cr={large:"Large",medium:"Normal",small:"Small"},Fr=Object.entries(Cr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Lr={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},Tr=Object.entries(Lr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Nr={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},Ir=Object.entries(Nr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Rr={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},Er=Object.entries(Rr).reduce((e,t)=>{const[a,r]=t;return e[r.key]=a,e},{}),Mr=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:i,effect:o,atk:l,def:s,art:c,artData:d,artSource:u,password:m,creator:b,attribute:p,attributeType:h,setId:g,pendulumEffect:f,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,isPendulum:j,linkMap:O,frame:w,externalInfo:k,nameStyle:S,nameStyleType:C,artFinish:F,finish:L}=e,T=yr(a),N=xr(o),I=xr(f),R=kr[i],E="auto"===h?Lr[p]:Lr.LIGHT,M=Nr[w],z="predefined"===C?Er[[S.preset,F,L.join("|")].join("-")]:"common",{pendulum:P,rarity:A,...D}=null!==k&&void 0!==k?k:{};return{isPartial:a!==T||o!==N||f!==I||void 0===R||void 0===E||void 0===M||void 0===z,result:{version:"1.0.0",name:T,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:N,atk:l,def:s,serial:m,copyright:b,attribute:null!==E&&void 0!==E?E:"None",id:g,pendulum:{enabled:j,effect:I,blue:v,red:y,boxSize:Cr[x],boxSizeEnabled:!0,...P},variant:"Normal",link:{topLeft:!!O.includes("1"),topCenter:!!O.includes("2"),topRight:!!O.includes("3"),middleLeft:!!O.includes("4"),middleRight:!!O.includes("6"),bottomLeft:!!O.includes("7"),bottomCenter:!!O.includes("8"),bottomRight:!!O.includes("9")},layout:null!==M&&void 0!==M?M:"Normal",boxSize:"large"===x?"Small":"Normal",rarity:null!==z&&void 0!==z?z:A,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...D}}},zr={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[E]:"None"},Pr=Object.entries(zr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Ar=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Dr=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),Hr={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},Br=e=>{var t,a,r;const{atk:n,attribute:i,card_images:o,card_sets:l,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:b,name:p,pend_desc:h,race:g,scale:f,typeline:v,linkval:y,linkmarkers:x}=e,j=Pr[g],O=Ar[i],[w,k]=Dr[d].split("_"),S=null!==(t=b?b.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",F=S.split("\n"),L=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==w&&void 0!==w?w:"normal"})&&F.length>1?[`[${F[0].replaceAll("\r","")}]`,...F.slice(1)].join("\n"):S,T=h?h.replaceAll(/^''|''$/g,""):"",N=o[0].image_url_cropped,I=sa();return{isPartial:!1,result:{...I,name:p,atk:n<0||null==n?"?":`${n}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==O&&void 0!==O?O:C,effect:L,subFamily:null!==j&&void 0!==j?j:E,setId:null!==(a=null===(r=l[l.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==w&&void 0!==w?w:"normal",star:"link"===d&&y?y:m,typeAbility:v||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:N,artSource:"online",artCrop:{...I.artCrop,y:0},isLink:"link"===w&&Array.isArray(x),linkMap:(null!==x&&void 0!==x?x:[]).map(e=>Hr[e]),isPendulum:"pendulum"===k,pendulumScaleBlue:null==f?"0":`${f}`,pendulumScaleRed:null==f?"0":`${f}`,pendulumEffect:T,password:`${u}`.padStart(8,"0"),creator:De.tcg[0]}}},Wr=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,$r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const i=e.replace("#","");let o=[0,0,0,1];var a,r,n;if(3===i.length||4===i.length)o=[parseInt(`${i[0]}${i[0]}`,16),parseInt(`${i[1]}${i[1]}`,16),parseInt(`${i[2]}${i[2]}`,16),parseInt(`${null!==(a=i[3])&&void 0!==a?a:"f"}${null!==(r=i[3])&&void 0!==r?r:"f"}`,16)];if(6===i.length||8===i.length)o=[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16),parseInt(null!==(n=i.slice(6,8))&&void 0!==n?n:"ff",16)];return o.map(e=>isNaN(e)?255:e).slice(0,t?4:3)}catch(i){return[0,0,0,1].slice(0,t?4:3)}};function Yr(e){if("number"!==typeof e)return"00";const t=Math.max(0,Math.min(e,255)).toString(16);return 1===t.length?"0"+t:t}const Kr=e=>{var t,a,r;return(299*(null!==(t=e[0])&&void 0!==t?t:0)+587*(null!==(a=e[1])&&void 0!==a?a:0)+114*(null!==(r=e[2])&&void 0!==r?r:0))/1e3>=128?"#000000":"#FFFFFF"},Ur=1e3,Gr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Ur;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ur,a=t,r=a,n=30,i=100;const o=()=>n=-1;return{reset:function(){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=o,a=o,n=30,i=100,r=o},searchDown:()=>(a-=i,n-=1,a),reverseSearch:()=>(1===i?o():(a+=i,i/=10,a-=i),Math.min(a,t)),finish:o,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===Ur)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,Ur));return n!==a&&e(n),n},Xr=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let i=t,o=a,l="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[o,i,l,c].filter(e=>""!==e).join(" ")}, Arial`,getFontInfo:()=>({style:o,size:l,family:c,sizeAsNumber:s,weight:i}),setWeight(e){return i=e,this},setStyle(e){return o=e,this},setSize(e){const t="function"===typeof e?e(s):e;return l="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},qr=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},Vr=(e,t)=>({...e,fontList:[...e.fontList,qr(t)]}),_r=(e,t)=>{const{fontData:a,fontLevel:r}=e,n=Xr(),i={...t,fontList:[...a.fontList]};return n.setSize(i.fontList[r].fontSize).setFamily(i.font).getFont(),{fontData:i,fontLevel:r,currentFont:n}},Jr=()=>Zr(re().gradientColor),Qr=e=>(null!==e&&void 0!==e?e:[]).map(e=>{let{color:t,offset:a}=e;return`${a}|${t}`}).join(","),Zr=e=>e?e.split(",").map((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}}):Zr(re().gradientColor),en=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)(()=>{t(e=>e+1)},[]),e]},tn=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:i,onCancel:o,onKeyPress:l}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===l||void 0===l?void 0:l(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e+1)%a)):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e-1)%a)):"Enter"===e.key||" "===e.key?i():"Escape"===e.key&&(null===o||void 0===o||o()))}}},an=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a},rn=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:i}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof i?i*t:i}},nn=(e,t)=>e.map(e=>e*t),on=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:i,headTextSpacing:o,iconSymbolWidth:l,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:i*t,headTextSpacing:"number"===typeof o?o*t:void 0,iconSymbolWidth:"number"===typeof l?l*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},ln=(e,t)=>({...e,fontList:e.fontList.map(e=>on(e,t))}),sn=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},cn=(()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e})();function dn(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var un=a(618),mn=a(336),bn=a(101);const pn=p.b.button`
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
`;var hn=a(633),gn=a(634),fn=a(635);const vn=(e,t)=>{var a,r,n,i,o;const{creator:l,effect:s,format:c,region:d,isFirstEdition:u,name:m,password:b,pendulumEffect:p,setId:h,typeAbility:g}=e;if(c===t)return e;const f=I[d].category===t?d:I[R[t]].key,v="ocg"===t?$e:We,y="ocg"===t&&/-EN/.test(h)?h.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(h)?h.replace("-JP","-EN"):h;return{...e,name:null!==(a=v[m])&&void 0!==a?a:m,format:t,region:f,effect:null!==(r=v[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=v[p])&&void 0!==n?n:p,typeAbility:g.map(e=>{var t;return null!==(t=v[e])&&void 0!==t?t:e}),creator:null!==(i=v[l])&&void 0!==i?i:l,password:null!==(o=v[b])&&void 0!==o?o:b,setId:y,isFirstEdition:"ocg"!==t&&u}};var yn=a(70);const xn=Object(yn.create)((e,t)=>({batchName:"",batch:void 0,batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1,startBatchDownload:(t,a)=>{e({batchName:t,batchQueue:a,isBatchDownloading:!0})},stopBatchDownload:()=>{e({batchName:"",batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1})},clearQueue:()=>{e({batchQueue:[]})},addToBatch:(t,a,r)=>{e(e=>{let{batchQueue:n,batchDataMap:i}=e;const o=n.filter(e=>e!==t),l={...i};return l[t]={name:a,blob:r},{batchQueue:o,batchDataMap:l,isReady:0===o.length}})}}));var jn=a(113),On=a.n(jn),wn=a(301),kn=a.n(wn);const Sn=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(h.jsx)(n.a.Fragment,{children:r.map((e,a)=>a%2===0?Object(h.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e])},e)},i={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,i,o)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:i,other:o}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,i)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-2.content":(e,t,n,i)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,i)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-6.content":(e,t,n,i)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-7.content":(e,t,n,i)=>r(a("guide.format.section-7.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-8.content":(e,t,n,i)=>r(a("guide.format.section-8.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-9.content":e=>r(a("guide.format.section-9.content"),{openTag:e}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...i}}},Cn=Object(yn.create)((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=Sn({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),i=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const i=Sn(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=i,i}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},o=async a=>{const o=t().languageMetadataMap[a];if(!o)return;const l=r[a]?r[a]:await i(a);l?(e({languageInfo:t().languageMetadataMap[a],language:l.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:o})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await i("eng"),await o(a),e({isInitiating:!1})},loadLanguage:i,changeLanguage:o}}),Fn=()=>Cn(e=>{let{language:t}=e;return t}),Ln=()=>Cn.getState().language;var Tn=a(187);const Nn=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Art Data","Art Source","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","First Edition Text","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Region","Attribute Type","Star Type","Star Alignment","Card Icon Type","Link Rating","Corner Text","Has Corner Text","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Frame Border","Opacity - Art Border","Opacity - Name Border","Opacity - Effect Box","Opacity - Boundless","Has Background","Background Link","Background Data","Background Source","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Art Style","Background Style","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Effect Style - Min Line","Effect Style - Justify Ratio","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Pendulum Effect Style - Min Line","Pendulum Effect Style - Justify Ratio","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Left Frame","Right Frame","Bottom Right Frame","Dye List","Star List","Flag","Legacy Template","External Info (JSON)"],In=[...Nn,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Rn=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),En=new Set(In.map(Rn)),Mn=Nn.reduce((e,t,a)=>{const r=Rn(t);return En.has(r)&&(e[t]=a),e},{}),zn=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,Pn=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},An=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Dn=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,Hn=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,Bn=e=>{try{const t=e[0].reduce((e,t,a)=>{const r=Rn(t);return En.has(r)&&(e[t]=a),e},{});return e.map((e,a)=>{var r,n,i,o,l,s,c,u,b,p,h,g,f,v,y,x,j,w,k,S,F,L,T,N,I,R,E,M,z,P,A,D,H,B,W,$,Y,K,G,X,q,V,_,J,Q,Z,ee,te,ae,ie,oe,le,se,ce,ue,me,be,pe,he,ge,fe,ye,xe,je,Oe,we;if(0===a)return null;if(""===e.join(""))return null;const ke=sa(),Se=((e,t)=>a=>{var r,n;const i=null!==(r=t[a])&&void 0!==r?r:-1,o=(null!==(n=e[i])&&void 0!==n?n:"").trim();return""===o?void 0:o})(e,t),Ce=(null!==(r=null!==(n=Se("Frame"))&&void 0!==n?n:Se("Background_Type"))&&void 0!==r?r:ke.frame).toLowerCase(),Fe=(null!==(i=Se("Right Frame"))&&void 0!==i?i:ke.rightFrame).toLowerCase(),Le=(null!==(o=Se("Left Frame"))&&void 0!==o?o:ke.leftFrame).toLowerCase(),Te=(null!==(l=Se("Bottom Right Frame"))&&void 0!==l?l:ke.pendulumRightFrame).toLowerCase(),Ne=null!==(s=null!==(c=Se("Star"))&&void 0!==c?c:Se("Level/Rank"))&&void 0!==s?s:"",Ie="text"===Se("Star Type")?Ne:parseInt(Ne)<=13&&parseInt(Ne)>=0&&"2"!==Se("Star_Type")?parseInt(Ne):Ne,Re=(null!==(u=null!==(b=Se("Foil"))&&void 0!==b?b:Se("Rarity"))&&void 0!==u?u:"normal").toLowerCase(),Ee=O[Re]?Re:"normal",Me=null!==(p=null===(h=Se("Attribute Type"))||void 0===h?void 0:h.toLowerCase())&&void 0!==p?p:"auto",ze=null===(g=Se("Attribute"))||void 0===g?void 0:g.toUpperCase(),Pe=ze||"custom"===Me?"NONE"===ze?C:null!==ze&&void 0!==ze?ze:C:"spell"===Ce?"SPELL":"trap"===Ce?"TRAP":ke.attribute,Ae=null!==(f=Se("Art Finish"))&&void 0!==f?f:Se("Art_Finish")?`type${Se("Art_Finish")}`:"",De=null!==(v=Se("Other Finish - Attribute"))&&void 0!==v?v:"",He=null!==(y=Se("Other Finish - Sticker"))&&void 0!==y?y:"",Be=null!==(x=Se("Other Finish - Icon"))&&void 0!==x?x:"",We=null!==(j=Se("Other Finish - Background"))&&void 0!==j?j:"",$e=null!==(w=Se("ATK"))&&void 0!==w?w:"",Ye=null!==(k=Se("Card Icon Type"))&&void 0!==k?k:ke.cardIcon,Ke=null!==(S=Se("Copyright"))&&void 0!==S?S:"",Ue=null!==(F=Se("DEF"))&&void 0!==F?F:"",Ge=null!==(L=Se("Effect"))&&void 0!==L?L:"",Xe=null!==(T=null===(N=Se("Card Finish"))||void 0===N?void 0:N.split(/,| /).filter(e=>""!==e))&&void 0!==T?T:[],qe=(null!==(I=Se("Format"))&&void 0!==I?I:ke.format).toLowerCase(),Ve=(null!==(R=Se("Region"))&&void 0!==R?R:ke.region).toLowerCase(),_e=Pn(Se("Legacy Template"),ke.legacyTemplate),Je=Pn(Se("Use Furigana Helper"),ke.furiganaHelper),Qe=null!==(E=Se("Name"))&&void 0!==E?E:"",Ze=null!==(M=Se("Password"))&&void 0!==M?M:"",et=null!==(z=null!==(P=Se("Set Id"))&&void 0!==P?P:Se("Set_ID"))&&void 0!==z?z:"",tt=(null!==(A=Se("Star Alignment"))&&void 0!==A?A:ke.starAlignment).toLowerCase(),at=(null!==(D=Se("Sticker"))&&void 0!==D?D:ke.sticker).toLowerCase(),rt=(null!==(H=null!==(B=Se("Spell/Trap Icon"))&&void 0!==B?B:Se("spell_type/trap_type"))&&void 0!==H?H:ke.subFamily).toUpperCase(),nt=null===(W=Se("Edition"))||void 0===W?void 0:W.toLowerCase(),it=null!==($=Se("First Edition Text"))&&void 0!==$?$:ke.firstEditionText,ot=Pn(Se("Is First Edition"),nt?"1st edition"===nt:ke.isFirstEdition),lt=null!==(Y=Se("Corner Text"))&&void 0!==Y?Y:ke.cornerText,st=Pn(Se("Has Corner Text"),nt?"1st edition"===nt:ke.hasCornerText),ct=Pn(Se("Is Duel Terminal Card"),nt?"duel terminal"===nt:ke.isDuelTerminalCard),dt=Pn(Se("Is Limited Edition"),nt?"limited edition"===nt:ke.isLimitedEdition),ut=Pn(Se("Is Speed Card"),nt?"speed duel"===nt:ke.isSpeedCard),mt=Pn(Se("Is Legacy Card"),ke.isLegacyCard),bt=Pn(Se("Is Pendulum"),ke.isPendulum),pt=(null!==(K=Se("Bottom Frame"))&&void 0!==K?K:ke.pendulumFrame).toLowerCase(),ht=null!==(G=Se("Pendulum Effect"))&&void 0!==G?G:"",gt=null!==(X=Se("Pendulum Scale Red"))&&void 0!==X?X:"",ft=null!==(q=Se("Pendulum Scale Blue"))&&void 0!==q?q:"",vt=null!==(V=Se("Pendulum Size"))&&void 0!==V?V:"medium",yt=Se("Type Ability"),xt=yt?yt.split("/"):[Se("Type_1"),Se("Type_2"),Se("Type_3"),Se("Type_4")].filter(e=>"string"===typeof e&&""!==e).map(e=>"string"===typeof e?e:""),jt=(null!==(_=Se("Condense Rate"))&&void 0!==_?_:ke.effectStyle.condenseTolerant).toLowerCase(),Ot=An(Se("Effect Style - Upsize"),ke.effectStyle.upSize),wt=An(Se("Pendulum Effect Style - Upsize"),ke.pendulumStyle.upSize),kt=(null!==(J=Se("Effect Style - Font Style"))&&void 0!==J?J:ke.effectStyle.fontStyle).toLowerCase(),St=(null!==(Q=Se("Pendulum Effect Style - Font Style"))&&void 0!==Q?Q:ke.pendulumStyle.fontStyle).toLowerCase(),Ct=(null!==(Z=Se("Effect Style - Background"))&&void 0!==Z?Z:ke.effectStyle.background).toLowerCase(),Ft=(null!==(ee=Se("Pendulum Effect Style - Background"))&&void 0!==ee?ee:ke.pendulumStyle.background).toLowerCase(),Lt=An(Se("Effect Style - Min Line"),ke.effectStyle.minLine),Tt=An(Se("Pendulum Effect Style - Min Line"),ke.pendulumStyle.minLine),Nt=An(Se("Effect Style - Min Line"),ke.effectStyle.justifyRatio),It=An(Se("Pendulum Effect Style - Min Line"),ke.pendulumStyle.justifyRatio),Rt=d(),Et={artBorder:Pn(Se("Opacity - Art Border"),Rt.artBorder),frameBorder:Pn(Se("Opacity - Frame Border"),Rt.frameBorder),baseFill:null!==(te=Se("Opacity - Base Fill"))&&void 0!==te?te:Rt.baseFill,body:An(Se("Opacity - Body"),Rt.body),boundless:Pn(Se("Opacity - Boundless"),Rt.boundless),effectBox:Pn(Se("Opacity - Effect Box"),Rt.effectBox),name:An(Se("Opacity - Name"),Rt.name),nameBorder:Pn(Se("Opacity - Name Border"),Rt.nameBorder),pendulum:An(Se("Opacity - Pendulum"),Rt.pendulum),text:An(Se("Opacity - Text"),Rt.text)},Mt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},zt=null!==(ae=Se("Art Link"))&&void 0!==ae?ae:ke.art,Pt=null!==(ie=Se("Art Data"))&&void 0!==ie?ie:ke.artData,At=null!==(oe=Se("Art Source"))&&void 0!==oe?oe:ke.artSource,Dt=Pn(Se("Is Using Full Art"),ke.artFit),Ht={aspect:m(bt,Et,void 0,vt).ratio,height:Dn(Se("Art Crop - Height (%)"),Mt.height),width:Dn(Se("Art Crop - Width (%)"),Mt.width),x:Dn(Se("Art Crop - X (%)"),Mt.x),y:Dn(Se("Art Crop - Y (%)"),Mt.y),unit:"%"};let Bt={flipX:!1,flipY:!1};try{var Wt;Bt=JSON.parse(null!==(Wt=Se("Art Style"))&&void 0!==Wt?Wt:"{}")}catch(va){console.error("csvToCardList",va)}const $t={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Yt=Pn(Se("Has Background"),ke.hasBackground),Kt=null!==(le=Se("Background Link"))&&void 0!==le?le:ke.background,Ut=null!==(se=Se("Background Data"))&&void 0!==se?se:ke.backgroundData,Gt=null!==(ce=Se("Background Source"))&&void 0!==ce?ce:ke.backgroundSource,Xt=(null!==(ue=Se("Background Type"))&&void 0!==ue?ue:ke.backgroundType).toLowerCase(),qt=Pn(Se("Is Using Full Background"),ke.backgroundFit),Vt={aspect:m(bt,Et,Xt,vt).ratio,height:Dn(Se("Background Crop - Height (%)"),$t.height),width:Dn(Se("Background Crop - Width (%)"),$t.width),x:Dn(Se("Background Crop - X (%)"),$t.x),y:Dn(Se("Background Crop - Y (%)"),$t.y),unit:"%"};let _t={flipX:!1,flipY:!1};try{var Jt;_t=JSON.parse(null!==(Jt=Se("Background Style"))&&void 0!==Jt?Jt:"{}")}catch(va){console.error("csvToCardList",va)}const Qt=re(),Zt=(null!==(me=Se("Name Style Type"))&&void 0!==me?me:ke.nameStyleType).toLowerCase(),ea={embossPitch:An(Se("Name Style - Emboss Pitch"),Qt.embossPitch),embossYaw:An(Se("Name Style - Emboss Yaw"),Qt.embossYaw),embossThickness:An(Se("Name Style - Emboss Thickness"),Qt.embossThickness),fillStyle:Hn(Se("Name Style - Fill Style"),Qt.fillStyle),font:null!==(be=Se("Name Style - Font"))&&void 0!==be?be:Qt.font,gradientAngle:An(Se("Name Style - Gradient Angle"),Qt.gradientAngle),gradientColor:null!==(pe=Se("Name Style - Gradient Color"))&&void 0!==pe?pe:Qt.gradientColor,hasEmboss:Pn(Se("Name Style - Has Emboss"),Qt.hasEmboss),hasGradient:Pn(Se("Name Style - Has Gradient"),Qt.hasGradient),hasOutline:Pn(Se("Name Style - Has Outline"),Qt.hasOutline),hasShadow:Pn(Se("Name Style - Has Shadow"),Qt.hasShadow),headTextFillStyle:Hn(Se("Name Style - Headtext Fill Style"),Qt.headTextFillStyle),lineColor:Hn(Se("Name Style - Line Color"),Qt.lineColor),lineOffsetX:An(Se("Name Style - Line Offset X"),Qt.lineOffsetX),lineOffsetY:An(Se("Name Style - Line Offset Y"),Qt.lineOffsetY),lineWidth:An(Se("Name Style - Line Width"),Qt.lineWidth),pattern:null!==(he=Se("Name Style - Pattern"))&&void 0!==he?he:Qt.pattern,preset:null!==(ge=Se("Name Style - Preset"))&&void 0!==ge?ge:Qt.preset,shadowBlur:An(Se("Name Style - Shadow Blur"),Qt.shadowBlur),shadowColor:Hn(Se("Name Style - Shadow Color"),Qt.shadowColor),shadowOffsetX:An(Se("Name Style - Shadow Offset X"),Qt.shadowOffsetX),shadowOffsetY:An(Se("Name Style - Shadow Offset Y"),Qt.shadowOffsetY)},ta=Pn(Se("Is Link"),null!==(fe=ke.isLink)&&void 0!==fe?fe:"link"===Ce),aa=null!==(ye=[Pn(Se("Link - Top Left Arrow"),!1)?"1":"",Pn(Se("Link - Top Arrow"),!1)?"2":"",Pn(Se("Link - Top Right Arrow"),!1)?"3":"",Pn(Se("Link - Left Arrow"),!1)?"4":"",Pn(Se("Link - Right Arrow"),!1)?"6":"",Pn(Se("Link - Bottom Left Arrow"),!1)?"7":"",Pn(Se("Link - Bottom Arrow"),!1)?"8":"",Pn(Se("Link - Bottom Right Arrow"),!1)?"9":""].filter(e=>""!==e))&&void 0!==ye?ye:[],ra=null!==(xe=Se("Link Rating"))&&void 0!==xe?xe:"",na=ne(),ia=[Pn(Se("Stat Style - Is Custom"),na[0]),Hn(Se("Stat Style - Fill Color"),na[1]),Pn(Se("Stat Style - Has Shadow"),na[2]),Hn(Se("Stat Style - Shadow Color"),na[3])],oa=[Pn(Se("Type Style - Is Custom"),na[0]),Hn(Se("Type Style - Fill Color"),na[1]),Pn(Se("Type Style - Has Shadow"),na[2]),Hn(Se("Type Style - Shadow Color"),na[3])],la=[Pn(Se("Effect Style - Is Custom"),na[0]),Hn(Se("Effect Style - Fill Color"),na[1]),Pn(Se("Effect Style - Has Shadow"),na[2]),Hn(Se("Effect Style - Shadow Color"),na[3])],ca=[Pn(Se("Pendulum Effect Style - Is Custom"),na[0]),Hn(Se("Pendulum Effect Style - Fill Color"),na[1]),Pn(Se("Pendulum Effect Style - Has Shadow"),na[2]),Hn(Se("Pendulum Effect Style - Shadow Color"),na[3])],da=[Pn(Se("Other Style - Is Custom"),na[0]),Hn(Se("Other Style - Fill Color"),na[1]),Pn(Se("Other Style - Has Shadow"),na[2]),Hn(Se("Other Style - Shadow Color"),na[3])];let ua={};try{var ma;ua=JSON.parse(null!==(ma=Se("External Info (JSON)"))&&void 0!==ma?ma:"{}")}catch(va){console.error("csvToCardList",va)}const ba=(null!==(je=Se("Flag"))&&void 0!==je?je:"").split("|").map(Number).slice(0,ve),pa=[0,0,0].map((e,t)=>"number"===typeof ba[t]?ba[t]:e),ha=(null!==(Oe=Se("Dye List"))&&void 0!==Oe?Oe:"").split("|").map(String).slice(0,7),ga=["","","","","","",""].map((e,t)=>"string"===typeof ha[t]?ha[t]:e),fa=(null!==(we=Se("Star List"))&&void 0!==we?we:"").split("|").map(String).slice(0,U);return{id:Object(de.a)(),...ke,art:zt,artData:Pt,artCrop:Ht,artFinish:Ae,artSource:At,artFit:Dt,artStyle:Bt,atk:$e,attribute:Pe,attributeType:Me,background:Kt,backgroundData:Ut,backgroundCrop:Vt,backgroundFit:qt,backgroundStyle:_t,backgroundSource:Gt,backgroundType:Xt,cardIcon:Ye,condenseTolerant:jt,cornerText:lt,creator:Ke,def:Ue,dyeList:ga,effect:Ge,effectStyle:{condenseTolerant:jt,upSize:Ot,fontStyle:kt,background:Ct,minLine:Lt,justifyRatio:Nt},effectTextStyle:la,externalInfo:ua,finish:Xe,firstEditionText:it,flag:pa,foil:Ee,format:qe,frame:Ce,furiganaHelper:Je,hasBackground:Yt,hasCornerText:st,isDuelTerminalCard:ct,isFirstEdition:ot,isLegacyCard:mt,isLimitedEdition:dt,isLink:ta,isPendulum:bt,isSpeedCard:ut,leftFrame:Le,legacyTemplate:_e,linkMap:aa,linkRating:ra,name:Qe,nameStyle:ea,nameStyleType:Zt,opacity:Et,otherFinish:[De,Be,He,We],otherTextStyle:da,password:Ze,pendulumEffect:ht,pendulumFrame:pt,pendulumRightFrame:Te,pendulumScaleBlue:ft,pendulumScaleRed:gt,pendulumSize:vt,pendulumStyle:{upSize:wt,fontStyle:St,background:Ft,minLine:Tt,justifyRatio:It},pendulumTextStyle:ca,region:Ve,rightFrame:Fe,setId:et,star:Ie,starList:fa,starAlignment:tt,statTextStyle:ia,sticker:at,subFamily:rt,typeAbility:xt,typeTextStyle:oa}}).filter(e=>null!=e)}catch(t){return console.error("csvToCardList",t),[]}},Wn=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),i=!!r&&isFinite(r);if(n&&!i)return-1;if(!n&&i)return 1;if(n&&i)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const o="?"===e?1:""===e?-1:0,l="?"===t?1:""===t?-1:0;return l-o===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):l-o},$n=(e,t)=>e.name.localeCompare(t.name),Yn=(e,t)=>e.setId.localeCompare(t.setId),Kn=(e,t)=>Wn(e.atk,t.atk),Un=(e,t)=>Wn(e.def,t.def),Gn=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:Wn(e.star,t.star),Xn=(e,t)=>{try{var a,r,n,i;const o=Ye[t.frame].sortWeight-Ye[e.frame].sortWeight;if(0!==o)return o;return(null!==(a=null===(r=Ye[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(i=Ye[e.pendulumFrame])||void 0===i?void 0:i.sortWeight)&&void 0!==n?n:1e3)}catch(o){return 0}},qn=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||_a(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},Vn=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},_n={name:{key:"name",sortFunction:e=>e.map(qn).sort((e,t)=>Vn([$n,Gn,Xn,Yn,Kn,Un],e,t))},atk:{key:"atk",sortFunction:e=>e.map(qn).sort((e,t)=>Vn([Kn,Un,Gn,Xn,$n,Yn],e,t))},def:{key:"def",sortFunction:e=>e.map(qn).sort((e,t)=>Vn([Un,Kn,Gn,Xn,$n,Yn],e,t))},set:{key:"set",sortFunction:e=>e.map(qn).sort((e,t)=>Vn([Yn,Xn,Gn,$n,Kn,Un],e,t))},level:{key:"level",sortFunction:e=>e.map(qn).sort((e,t)=>Vn([Xn,Gn,$n,Yn,Kn,Un],e,t))}},Jn=(e,t)=>{const a=Object.values(t).filter(e=>null!=e);return 0===a.length?e:a.reduce((e,t)=>t(e),e)},Qn=Object(yn.create)(Object(Tn.subscribeWithSelector)(e=>({activeId:"",cardDisplayList:[],cardList:[],selectedMap:{},filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e(e=>{let{cardList:t,filterFunctionMap:n}=e;const i={...n};if("text"===a){const e=r.toLowerCase();i[a]=t=>t.filter(t=>{let{name:a,effect:r,pendulumEffect:n,isPendulum:i}=t;return(yr(a).toLowerCase()+xr(r).toLowerCase()+(i?xr(n).toLowerCase():"")).includes(e)})}return{filterFunctionMap:i,cardDisplayList:Jn(t,i)}})},resetFilter:()=>{e(e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}})},addCard:t=>e(e=>{let{cardList:a}=e;const r={id:Object(de.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}}),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e(e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}}),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(e=>{let{cardList:r,cardDisplayList:n,isListDirty:i}=e,o=i;if(!1===o&&a){const e=r.find(e=>e.id===t.id);o=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:i,backgroundCrop:o,...l}=t;return Object(or.a)(n,l)&&vr(a,i)&&vr(r,o)})(t,e)}return{isListDirty:o,cardList:r.map(e=>e.id===t.id?{...t}:e),cardDisplayList:n.map(e=>e.id===t.id?{...t}:e)}})},setActiveId:t=>e({activeId:t}),selectCard:(t,a)=>{e(e=>{let{selectedMap:r}=e;const n={...r};return"add"===a?n[t]=t:delete n[t],{selectedMap:n}})},setSelectMap:(t,a)=>e(e=>{let{selectedMap:r}=e;return{selectedMap:t.reduce((e,t)=>(e[t.id]=t.id,e),"replace"===a?{}:{...r})}}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e(e=>{var a,r,n,i;let{cardList:o,activeId:l,cardDisplayList:s}=e;const c=o.filter(e=>e.id!==t),d=s.filter(e=>e.id!==t),u=d.findIndex(e=>e.id===l);return{activeId:l===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(i=d[0])||void 0===i?void 0:i.id)&&void 0!==a?a:"":l,cardList:c,cardDisplayList:d}})},duplicateCard:t=>{e(e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex(e=>{let{name:a}=e;return a===t.name}),i=Object(de.a)(),o={...Object(ir.a)(t),name:`${t.name} - Copy`,id:i},l=n<0?[...a,o]:[...a.slice(0,n),a[n],o,...a.slice(n+1,a.length)];return{activeId:i,pendingActiveCard:o,cardList:l,cardDisplayList:Jn(l,r)}})},sortList:t=>{e(e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:_n[t].sortFunction(a),cardList:_n[t].sortFunction(r)}})}}))),Zn=(e,t)=>{const a=Object(de.a)();let r=sa(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=ur(a);r=Object.keys(e).length>0?br(e,t):br(a,t)}else if(pr(a))r=br(a);else if(hr(a)){const e=ur(a);r=br(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:i}=Br(e);n=t,r=i}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=Br(a);n=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:n,effect:i,boxSize:o,copyright:l,icon:s,id:c,image:d,layout:u,level:m,link:b,pendulum:p,rarity:h,serial:g,type:f,variant:v,version:y}=e,{red:x,blue:j,boxSize:O,boxSizeEnabled:w,effect:k,enabled:S}=p,F=Sr[s],L=Tr[n],T=Ir[u],N="string"===typeof(I=d)&&I.startsWith("data:image/");var I;const R=parseInt(m),M=h?Rr[h.toLowerCase()]:void 0;let z=void 0===F||void 0===L||void 0===T||void 0===M;const{finish:P,artFinish:A,text:D}=null!==M&&void 0!==M?M:{},H=D?oe[D]:null;return{isPartial:z,result:{...sa(),finish:null!==P&&void 0!==P?P:[],name:t,nameStyleType:D?"predefined":"auto",nameStyle:H?H.value:re(),atk:a,def:r,attribute:null!==L&&void 0!==L?L:C,effect:i,creator:l,subFamily:null!==F&&void 0!==F?F:E,setId:c,frame:null!==T&&void 0!==T?T:"normal",star:`${R}`===m&&R<=13?R:m,typeAbility:f.split("/").map(e=>e.trim()),art:N?"":d,artFit:!0,artData:N?d:"",artSource:N?"offline":"online",artFinish:null!==A&&void 0!==A?A:"normal",isLink:"link"===T&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter(e=>"string"===typeof e),isPendulum:S,pendulumScaleBlue:j,pendulumScaleRed:x,pendulumEffect:k,pendulumSize:Fr[O],password:g,externalInfo:{version:y,variant:v,boxSize:o,rarity:h,pendulum:{boxSize:O,boxSizeEnabled:w}}}}})(a);n=e,r=t}}catch(i){console.error("decodedCard",e,i);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?mr(e):"string"===typeof e?JSON.parse(e):e,br(t)}(e,!0),mn.a.info({message:Ln()["service.decode.outdated.message"],description:Ln()["service.decode.outdated.description"]})}catch(i){console.error("cardData",e,i),mn.a.error({message:Ln()["service.decode.error.message"],description:Ln()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},ei={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},ti=Object(yn.create)((e,t)=>({card:la(),setCard:(t,a)=>{const r=Qn.getState().changeActiveCard;if("function"===typeof t)e(e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}});else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(de.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:i}=t(),o=t=>{i(a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:"function"===typeof t?t(a):null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}})};if(!n)return o;const l="string"===typeof n?null!==(a=ei[n])&&void 0!==a?a:void 0:n;if(!l)return o;const{wait:s,type:c}=l;return"debounce"===c?On()(o,s):"throttle"===c?kn()(o,s):o}})),ai=Object(yn.create)(e=>{const{allowHotkey:t,exportFormat:a,exportScheme:r,globalScale:n,mirrorPendulumScale:i,reduceMotionColor:o,resolution:l,showCreativeOption:c,showExtraAttribute:d,showExtraDecorativeOption:u,slidingType:m}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportScheme:"string"===typeof r?r:"with-name",globalScale:"number"===typeof n&&n<=s.maximumScale?n:1,exportFormat:"string"===typeof a?a:"csv",slidingType:"string"===typeof m?m:"auto",resolution:Array.isArray(l)&&"number"===typeof l[0]&&"number"===typeof l[1]?l:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof o&&o,showCreativeOption:"boolean"!==typeof c||c,showExtraAttribute:"boolean"!==typeof d||d,showExtraDecorativeOption:"boolean"!==typeof u||u,mirrorPendulumScale:"boolean"===typeof i&&i},updateSetting:t=>{e(e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}})}}}),ri=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:i,onExport:o,onDownloadError:l,onDownloadComplete:s}=e;const c=Fn(),{card:d}=ti(),{addToBatch:u,batchDataMap:m,isBatchDownloading:b}=xn(),p=ai(e=>e.setting.resolution),h=ai(e=>e.setting.exportScheme),{opacity:g,name:f,isPendulum:v,pendulumSize:y}=d,x=yr(f),j=Object(r.useRef)(!1),O=Object(r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const a=n.current,r=null===a||void 0===a?void 0:a.cloneNode(),i=null===a||void 0===a?void 0:a.getContext("2d"),o=null===r||void 0===r?void 0:r.getContext("2d");if(a&&i&&r&&o&&!t)return e&&(r.width=e[0],r.height=e[1]),o.drawImage(a,0,0,a.width,a.height,0,0,r.width,r.height),r.toDataURL("image/png")},[n,t,p]),w=Object(r.useCallback)(async function(e,t){var a;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;try{const a=O(r);if("string"!==typeof a)throw new Error("Failed to add card to batch");const n=await fetch(a),i=await n.blob();b&&u(t,e,i)}catch(n){l()}null===(a=document.querySelector("#export-canvas-guard"))||void 0===a||a.classList.remove("guard-on"),s()},[u,O,b,s,l,p]),k=Object(r.useCallback)(function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;try{const e=yr(f),r=O(t);if("string"!==typeof r)throw new Error("Failed to trigger automatic download");var a=document.createElement("a");a.download=e?`${e}.png`:"card.png",a.href=r,a.click()}catch(r){l()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()},[p,s,f,O,l]);return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&(document.title=x?`${x} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")},500),()=>{e=!1}},[x]),Object(r.useEffect)(()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.4.6")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),Object(r.useEffect)(()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.4.6")?r:"unknown")}catch(s){try{var l;const{artData:e,backgroundData:t,...a}=d;localStorage.setItem("card-data",JSON.stringify(a)),localStorage.setItem("card-version",null!==(l="2.4.6")?l:"unknown")}catch(s){const e="fail-to-set-storage-notification";mn.a.close(e),mn.a.info({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}}(async()=>{var a,r,l,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(l=document.getElementById("export-canvas-guard"))||void 0===l||l.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),i.current.pipelineRunning=!0,await i.current.currentPipeline,e&&(i.current.currentPipeline=o({isPendulum:v,opacity:g,pendulumSize:y,isRelevant:()=>e}),await i.current.currentPipeline,e))){var c,u,p,f;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(dr(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(p=document.getElementById("export-canvas-guard"))||void 0===p||p.setAttribute("style","display: none"),null===(f=document.getElementById("save-button-waiting"))||void 0===f||f.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),i.current.pipelineRunning=!1,j.current&&(j.current=!1,k()),b&&!m[e.id]&&setTimeout(()=>{w("with-name"===h?`${x}.png`:`${e.setId} - ${x}.png`,e.id)},200)}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}}),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout(()=>{!1===i.current.pipelineRunning?k(a):j.current=!0},200)},isPipelineRunning:()=>i.current.pipelineRunning}};var ni=a(304);const ii=()=>{const[e,t]=Object(r.useState)(null),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{const e=await async function(){try{return await Object(ni.a)("YgoCarderDb",4,{upgrade(e,t,a){e.objectStoreNames.contains("messageStore")||e.createObjectStore("messageStore",{keyPath:"key"}),e.objectStoreNames.contains("presetLayoutStore")||e.createObjectStore("presetLayoutStore",{keyPath:"key"}),e.objectStoreNames.contains("presetNameStyleStore")||e.createObjectStore("presetNameStyleStore",{keyPath:"key"}),4===a&&(e.objectStoreNames.contains("presetImageStore")||e.createObjectStore("presetImageStore",{keyPath:"key"})),console.info("YgoCarderDb ready")}})}catch(e){return console.error("setupYgoCarderDb",e),null}}();t(e),n(!0)})(),setTimeout(()=>{n(!0)},5e3)},[]),{db:e,dbReady:a}},oi=e=>{let{value:t="",onChange:a}=e;const[n,i]=Object(r.useState)(t),[o,l]=Object(r.useState)(()=>({hex:Wr.test(t)?t:"#000000",rgb:$r(t,!1)}));return Object(r.useEffect)(()=>{const e=n.startsWith("#")?n:`#${n}`;Wr.test(e)&&(i(e),l({hex:e,rgb:$r(e,!1)}),null===a||void 0===a||a(e))},[n]),Object(r.useEffect)(()=>{i(t),l({hex:Wr.test(t)?t:"#000000",rgb:$r(t,!1)})},[t]),{inputText:n,color:o,setColor:i}};var li=a(17);const si=Object(yn.create)(e=>({memory:{resetCanvasCounter:0,activeDropzone:0,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[],imagePresetMap:{}},updateGlobalMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return e.memory.imagePresetList!==a.imagePresetList&&(a.imagePresetMap=a.imagePresetList.reduce((e,t)=>(e[t.content.name]=t.content,e),{})),{memory:a}})}})),ci=e=>{const{targetMemory:t,updateGlobalMemory:a}=si(Object(li.useShallow)(t=>{let{memory:a,updateGlobalMemory:r}=t;return{targetMemory:a[e],updateGlobalMemory:r}}));return[t,Object(r.useCallback)(t=>{a(a=>({...a,[e]:"function"===typeof t?t(a[e]):t}))},[e,a])]},{height:di,width:ui,maximumScale:mi}=s,bi=()=>"#000000".replace(/0/g,()=>(~~(12*Math.random()+2)).toString(16)),pi=e=>{let{ctx:t,color:a=bi(),width:r,offset:n=4,edge:i,baseline:o,xRatio:l}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(i/l,o+1+Math.random()*n,r/l,2),t.fillStyle=s},hi=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="left";const l=Array.from(t);let s=r;return l.forEach(t=>{e.fillText(t,s,n),o&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2}),s},gi=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:o=!1}=null!==i&&void 0!==i?i:{};e.textAlign="right";const l=Array.from(t);let s=r;return l.forEach((t,r)=>{const i=l[l.length-r-1];e.fillText(i,s,n),o&&e.strokeText(i,s,n),s-=e.measureText(i).width*(2+a)/2}),s},fi=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ui*mi,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:di*mi;return!!e&&(e.clearRect(0,0,t,a),!0)},vi=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return async(a,r,n,i)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var o,l;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(o=t[r])&&void 0!==o?o:[],u=i?null!==(l=c[i])&&void 0!==l?l:i:pe;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},yi="#000000",xi="#000000",ji=e=>{var t,a;let{ctx:r,x:n,y:i,blur:o,color:l,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:b=1,useDefault:p=!0}=e;return(p||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*b),(p||"number"===typeof i)&&(r.shadowOffsetY=(null!==i&&void 0!==i?i:0)*b),(p||"number"===typeof o)&&(r.shadowBlur=(null!==o&&void 0!==o?o:0)*b),(p||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:xi),(p||"string"===typeof l)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:l)&&void 0!==t?t:te),(p||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:yi),(p||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*b),()=>{(p||"number"===typeof n)&&(r.shadowOffsetX=0),(p||"number"===typeof i)&&(r.shadowOffsetY=0),(p||"number"===typeof o)&&(r.shadowBlur=0),(p||"string"===typeof c)&&(r.shadowColor=xi),(p||"string"===typeof l)&&(r.fillStyle=te),(p||"string"===typeof d)&&(r.strokeStyle=yi),(p||"number"===typeof m)&&(r.lineWidth=0)}},Oi={},wi=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var i,o;if(!0===(null===(i=Oi[t])||void 0===i?void 0:i.ready)){const i=Oi[t].image,o="number"===typeof a?a:a(i),l="number"===typeof r?r:r(i);return e.drawImage(i,o,l),void setTimeout(()=>n(!0),0)}if(null!==(o=Oi[t])&&void 0!==o&&o.error)return void setTimeout(()=>n(!0),0);const l=Oi[t]&&(Oi[t].cache||Oi[t].ready),s=l?Oi[t].image:new Image;l||(s.src="/ygocarder"+t),s.addEventListener("load",()=>{const i="number"===typeof a?a:a(s),o="number"===typeof r?r:r(s);e.drawImage(s,i,o),Oi[t]&&(Oi[t].ready=!0,Oi[t].error=!1),n(!0)},{once:!0}),s.addEventListener("error",()=>{Oi[t]&&(Oi[t].error=!0),n(!1)},{once:!0}),l||(Oi[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},ki=(e,t,a)=>{const{naturalWidth:r,naturalHeight:n}=e,i="number"===typeof t?t:null===t||void 0===t?void 0:t(e),o="number"===typeof a?a:null===a||void 0===a?void 0:a(e);let l=r,s=n;return"number"!==typeof o&&"number"===typeof i?(l=i,s=l*n/r):"number"===typeof o&&"number"!==typeof i?(s=o,l=s*r/n):"number"===typeof o&&"number"===typeof i&&(l=i,s=o),{actualDH:s,actualDW:l}},Si=async(e,t,a,r,n,i,o,l,s,c,d)=>{const{cache:u=!0,internalImage:m=!0,overwrite:b=!1,crossorigin:p}=null!==d&&void 0!==d?d:{};return new Promise(e&&""!==t?d=>{var h,g;if(!0===(null===(h=Oi[t])||void 0===h?void 0:h.ready)){const u=Oi[t].image,m="number"===typeof a?a:a(u),b="number"===typeof r?r:r(u),p="number"===typeof o?o:null===o||void 0===o?void 0:o(u),h="number"===typeof l?l:null===l||void 0===l?void 0:l(u),g="number"===typeof s?s:null===s||void 0===s?void 0:s(u),f="number"===typeof c?c:null===c||void 0===c?void 0:c(u),{actualDH:v,actualDW:y}=ki(u,n,i);return"number"===typeof p&&"number"===typeof h&&"number"===typeof g&&"number"===typeof f?e.drawImage(u,p,h,g,f,m,b,y,v):e.drawImage(u,m,b,y,v),void setTimeout(()=>d(!0),0)}if(null!==(g=Oi[t])&&void 0!==g&&g.error&&!1===b)return void setTimeout(()=>d(!0),0);const f=!b&&(Oi[t]&&(Oi[t].cache||Oi[t].ready)),v=f?Oi[t].image:new Image;p&&(v.crossOrigin=p),f||(v.src=m?"/ygocarder"+t:t),v.addEventListener("load",()=>{const u="number"===typeof a?a:a(v),m="number"===typeof r?r:r(v),b="number"===typeof o?o:null===o||void 0===o?void 0:o(v),p="number"===typeof l?l:null===l||void 0===l?void 0:l(v),h="number"===typeof s?s:null===s||void 0===s?void 0:s(v),g="number"===typeof c?c:null===c||void 0===c?void 0:c(v),{actualDH:f,actualDW:y}=ki(v,n,i);"number"===typeof b&&"number"===typeof p&&"number"===typeof h&&"number"===typeof g?e.drawImage(v,b,p,h,g,u,m,y,f):e.drawImage(v,u,m,y,f),Oi[t]&&(Oi[t].ready=!0,Oi[t].error=!1),d(!0)},{once:!0}),v.addEventListener("error",()=>{Oi[t]&&(Oi[t].error=!0),d(!1)},{once:!0}),u&&!f&&(Oi[t]={image:v,ready:!1,error:!1,cache:!0})}:e=>e(!1))},Ci=async(e,t,a,r,n,i,o,l,s,c)=>await Si(e,"/asset/image/"+t,a,r,n,i,o,l,s,c),Fi=async function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const[r,n,i,o,l,s,c,d,u,m,b]=[...t],p=await Si(r,n,i,o,l,s,c,d,u,m,b);if(!1===p&&"anonymous"===(null===b||void 0===b?void 0:b.crossorigin)){const e={...b,overwrite:!0};return delete e.crossorigin,await Si(r,n,i,o,l,s,c,d,u,m,e)}return p},Li=async(e,t,a,r,n,i,o,l)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=i;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await Ci(d,t,0,0,n,i),null!==l&&void 0!==l&&l.color&&(d.fillStyle=l.color,d.fillRect(0,0,n,i),d.globalCompositeOperation="destination-in"),await Ci(d,t,0,0,n,i),d.globalCompositeOperation="source-over";const u=ji({ctx:s,...l,globalScale:o});s.drawImage(c,a,r),u()},Ti=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:i=!1,debug:o,fontStyle:l,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(It.test(n))return{width:0,boundWidth:0};const u="tcg"===l?ta:Qt,m="tcg"===l?Zt:_t,b="tcg"===l?ea:Jt,p=r.measureText(n),{width:h,actualBoundingBoxLeft:g,actualBoundingBoxRight:f}=p,v=g+f;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=i?b[n]:m[n])&&void 0!==t?t:0;if("tcg"===l){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[n])&&void 0!==w?w:0)*h),metric:p,offsetRatio:O}}let k=(null!==(a=u[n])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;Kt.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):Ut.test(n)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):Pt.test(n)?j="furigana"===c?v:Math.max(v,.7*h):Bt.test(n)?j=h:Xt.test(n)?j=2*v:qt.test(n)?j=1.25*v*(i?.5:1):$t.test(n)?j="furigana"===c?v:Math.max(v,.75*h):Yt.test(n)?j=Math.max(v,.69*h)*("creator"===c?.975:1):Gt.test(n)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const C=1*h*1;return o&&console.info(`getLetterWidth ${o}`,n,p,1,1,"|",C),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:p,offsetRatio:O}},Ni=e=>{var t,a;let{ctx:r,baseline:n,edge:i,letter:o,xRatio:l,deviation:s,letterMetric:c,textDrawer:d}=e;const{boundWidth:u,metric:m=r.measureText(o),offsetRatio:b=0}=null!==c&&void 0!==c?c:{},{letterMap:p={},threshold:h=10}=null!==s&&void 0!==s?s:{},{baseLetter:g}=null!==(t=p[o])&&void 0!==t?t:{},{height:f,ascentCompensate:v,descentCompensate:y}=null!==(a=Or.get(g))&&void 0!==a?a:{},x=m.width*l,j=u?u*l:x,O=null!==d&&void 0!==d?d:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},w=(x-j)/2,k=j*b;let S=1,C="number"===typeof y?y:0,F="number"===typeof v?v:0;if(("number"===typeof y||"number"===typeof v)&&"number"===typeof f&&f>0&&l>=h){const e=2;C="number"===typeof y&&Math.abs(y)<=e?y:0,F="number"===typeof v&&Math.abs(v)<=e?v:0,S=(f+C+F)/f}r.scale(1,S),O({ctx:r,letter:o,scaledEdge:i/l-w-k,scaledBaseline:(n+C)/S}),r.scale(1,1/S)},Ii=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${na}])|(${ut}[\\w\\W]+?${mt})|(.+?)`,"u"):new RegExp(`([${na}])|${ut}([\\w\\W]+?)${mt}|(.+?)`,"u");return e.split(t).filter(e=>null!=e&&""!==e)},Ri=(e,t,a,r,n)=>{const i=on(G,n),{fontSize:o,ordinalFontRatio:l=i.ordinalFontRatio,headTextFontRatio:s=i.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:b=c,numberFontRatio:p=1,furiganaFont:h,vietnameseFont:g=c,vietnameseFontRatio:f=1}=t;let v=r.getFontInfo();let y=r.getFontInfo();let x=r.getFontInfo();let j=r.getFontInfo();let O=r.getFontInfo();let w=r.getFontInfo();return{applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];O=r.getFontInfo(),e.font=r.setFamily(h).setWeight(t?"bold":"").setSize(o*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(O.family).setWeight(O.weight).setSize(O.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;w=r.getFontInfo(),e.font=r.setSize(o*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(w.size).getFont()},applyNumberFont:()=>{v=r.getFontInfo(),e.font=r.setFamily(b).setSize(o*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(v.family).setSize(v.size).getFont()},applyOrdinalFont:()=>{j=r.getFontInfo(),e.font=r.setFamily(d).setSize(o*l).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(j.family).setSize(j.size).getFont()},applySymbolFont:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;x=r.getFontInfo();const a=o*t;return e.font=r.setFamily(u).setSize(a).getFont(),{fontSize:a}},stopApplySymbolFont:()=>{e.font=r.setFamily(x.family).setSize(x.size).getFont()},applyVietnameseFont:()=>{y=r.getFontInfo(),e.font=r.setFamily(g).setSize(o*f).getFont()},stopApplyVietnameseFont:()=>{e.font=r.setFamily(y.family).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},Ei=(e,t,a,r,n)=>{const i=(r-n)/2;e.beginPath(),e.arc(t+i,a-i,i,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Mi=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:i,headTextSpacing:o,gapPadding:l,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,b=n/a*d;let p=o,h=0;b<=.95?p=1*o:b<=1.175?p=o>=0?0:3*o:b<=1.56?p=o>=0?-1*o/4:3*o:(h=.66,p=o>=0?-1*o/4:2*o),(c||u>0&&u<1)&&(p=o);const g=n*(u&&!c?u:!h||c?1:h)+p*(r.length-1),f=m?0:(a-n)/r.length,v=a,y=1===t.length||2*l+g>a?"center":"space-around",x="center"===y?p:f,j="center"===y?2*l+g:v,O=c?Math.min(j,a):j,w="center"===y?(g-a)/2:0,k=Math.max(i,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,k),{gapPadding:l,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},zi=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Pi=e=>{const[t,a]=e.replace(yt,"").replace(xt,"").split(";"),r=parseFloat(a);return{content:t,width:isNaN(r)?0:r}},Ai=e=>{var t;let{ctx:a,token:r,nextToken:n,xRatio:i,previousTokenGap:o=0,letterSpacing:l,lineHeight:s=0,format:c,globalScale:d,textData:u,memory:m}=e;if(!a||!r)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const b=null!==(t=null===m||void 0===m?void 0:m.image)&&void 0!==t?t:{},p=si.getState().memory.imagePresetMap,h=on(G,d),g=null!==l&&void 0!==l?l:h.letterSpacing,{currentFont:f,fontData:v,fontLevel:y}=u,{metricMethod:x,headTextGapRatio:j=X.headTextGapRatio,headTextOverflow:O=X.headTextOverflow,fontStyle:w,letterOffsetMap:k={}}=v,S=v.fontList[y],{bulletWidth:C,capitalLetterRatio:F,fontSize:L,iconSymbolWidth:T=C,largeSymbolRatio:N=h.largeSymbolRatio,headTextSpacing:I=h.headTextSpacing,squareBracketRatio:R,wordLetterSpacing:E}=S,M=-.5*L,{applyScale:z,reverseScale:P,applyLargerText:A,stopApplyLargerText:D,applyFuriganaFont:H,stopApplyFuriganaFont:B,applyOrdinalFont:W,stopApplyOrdinalFont:$,applySymbolFont:Y,stopApplySymbolFont:K,applyNumberFont:U,stopApplyNumberFont:q,applyVietnameseFont:V,stopApplyVietnameseFont:_}=Ri(a,v,S,f,d);let J=r.replaceAll(new RegExp(Nt,"g"),""),Q=J;const Z=1+g/2;let ee="",te=0,ae=0,re=!1;const ne=void 0===n;let ie=null!==o&&void 0!==o?o:0,oe=!1,le=0;const se=new RegExp(ot,"g");let ce;for(;null!=(ce=se.exec(J));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;if(ce[1]===it){var de;let t,a,r,n,o;ie=0;let l,c="";for(;null!==(t=e.exec(ce[0]));){t.index===e.lastIndex&&e.lastIndex++;const i=t[1],s=t[2];switch(i){case"src":c=s;break;case"width":a=parseInt(s);break;case"height":r=parseInt(s);break;case"offsetX":n=parseInt(s);break;case"offsetY":o=parseInt(s);break;case"name":l=s}}if(l){const e=b[l];e?(c=e.src,a="number"===typeof a?a:e.width,r="number"===typeof r?r:e.height,n="number"===typeof n?n:e.offsetX,o="number"===typeof o?o:e.offsetY):b[l]={src:c,width:a,height:r,offsetX:n,offsetY:o}}const d=c?p[c]:void 0,u=l?b[l]:void 0;te+=(null!==(de="number"===typeof a?a:d?d.width:null!==u&&void 0!==u&&u.width?null===u||void 0===u?void 0:u.width:void 0)&&void 0!==de?de:.9*s)/i,Q=Q.replace(ce[0],`${yt}img;0${xt}`)}}const ue=Q.replaceAll(new RegExp(nt,"g"),"").split(Ct).filter(e=>null!=e&&""!==e);for(let G=0;G<ue.length;G++){const e=0===G,t=ue[G];if("\u29be"===t){ie=0;te+=T/i*Z,e&&(le=0,ee=t[0])}else if("\u25cf"===t){ie=0;te+=C/i*Z,e&&(le=0,ee=t[0])}else if(/[\xa9]/.test(t)){ie=0,A(N);const r=a.measureText(t).width/i;D(),te+=r*Z,e&&(le=0,ee=t[0])}else if(Dt.test(t)){ie=0,W();const r=a.measureText(t).width/i;$(),te+=r*Z,ae+=1,e&&(le=0,ee=t[0])}else if(Ot.test(t)){ie=0;const{width:a,content:r}=Pi(t);te+="img"===r?a/i:a,e&&(le=0,ee=t[0])}else if(ra.test(t)){const[r,o,l=""]=t.replaceAll(/{|}/g,"").split(/(\|+)/),s="||"===o,{totalWidth:m}=Ai({ctx:a,token:r,nextToken:n,xRatio:i,letterSpacing:g,previousTokenGap:0,format:c,textData:u,globalScale:d});H();const b=l.split("").map(e=>Ti({ctx:a,letter:e,fontStyle:w,metricMethod:"furigana",xRatio:1,globalScale:d}).boundWidth).reduce((e,t)=>e+t,0);B();const{halfGap:p,headTextWidth:h}=Mi({headText:l,headTextLetterWidth:b/i,footText:r,footTextWidth:m,headTextGap:M/i,headTextSpacing:I,gapPadding:j*L/i,fitFootText:s,sentenceXRatio:i,xRatio:"condense"===O&&r.length>1?Math.min(1,i+.1):0}),f=0===l.length?Math.max(M,m/ia):p,v=f,y=f,x=Math.max(h,m),k=zi(ie,v);ie=y,te+=x-k,ae+=1,e&&(oe=!0,le=v,ee=r[0])}else if(kt.test(t)){const r=E?1+E/2:Z;a.letterSpacing=(r-1)*f.getFontInfo().sizeAsNumber+"px";let n=t,i=0;for(;""!==n;){let e=n[0],t=n.slice(1),r=a.measureText(n).width-a.measureText(t).width;if(rt.test(e))z(R),r=a.measureText(n).width-a.measureText(t).width,P(R);else if(at.test(e))z(F),r=a.measureText(n).width-a.measureText(t).width,P(F);else if(St.test(e)&&"tcg"===w)V(),r=a.measureText(n).width-a.measureText(t).width,_();else if(Wt.test(e))U(),r=a.measureText(n).width-a.measureText(t).width,q();else if(Et.test(e)&&"tcg"===w){var me;Y(null===(me=k[e])||void 0===me?void 0:me.ratio),r=a.measureText(n).width-a.measureText(t).width,K()}else r=a.measureText(n).width-a.measureText(t).width;i+=r,n=t}const o=Math.max(M,i/ia),l=o;te+=i-zi(ie,o),ie=l,e&&(le=o,ee=t[0]),a.letterSpacing="0px"}else if(Et.test(t)&&"tcg"===w){var be;Y(null===(be=k[t])||void 0===be?void 0:be.ratio);const r=a.measureText(t).width*Z;K();const n=Math.max(M,r/ia),i=n;te+=r-zi(ie,n),ie=i,e&&(le=n,ee=t[0])}else{const{boundWidth:r}=Ti({ctx:a,letter:t,isLastOfLine:ne,fontStyle:w,metricMethod:x,xRatio:i,globalScale:d}),n=r*Z,o=Math.max(M,n/ia),l=o;te+=n-zi(ie,o),ie=l,("ocg"===c||"tcg"===c&&/\s+/.test(t))&&!1===Gt.test(t)&&(ae+=1,G===ue.length-1&&(re=!0)),e&&(le=o,ee=t[0]),Vt.test(t)&&(le=0,ie=0)}}return{totalWidth:te,spaceCount:ae,spaceAtEnd:re,leftMostLetter:ee,rightGap:ie,leftGap:le,offsetable:oe}},Di=e=>{var t,a,r,n;let{ctx:i,line:o,width:l,lineHeight:s,xRatio:c,format:d,isLast:u,textData:m,globalScale:b,justifyRatio:p,region:h,memory:g}=e;const f=Ii(o);let v=0,y=0,x=0,j=m,O=!1;for(let F=0,L=c;F<f.length;F++){const e=f[F],t=f[F+1];if(e===ft){L=1;continue}if(e===vt){L=c;continue}if("<i>"===e){var w,k;const e=!!Q[null!==(w=null===(k=m.fontData)||void 0===k?void 0:k.variant)&&void 0!==w?w:""]?Q[m.fontData.variant]:m.fontData;j=_r(m,e),i.font=j.currentFont.setStyle("italic").getFont();continue}if(e===lt){j=m,i.font=j.currentFont.setStyle("").getFont();continue}if("<b>"===e){i.font=j.currentFont.setWeight("bold").getFont();continue}if(e===st){i.font=j.currentFont.setWeight("").getFont();continue}if(e===ct){O=!0;continue}if(e===dt){O=!1;continue}const{spaceCount:a,totalWidth:r,spaceAtEnd:n,leftGap:o,rightGap:l,leftMostLetter:u}=Ai({ctx:i,token:e,nextToken:t,xRatio:L,previousTokenGap:x/L,textData:j,format:d,globalScale:b,lineHeight:s,memory:g});x=l*L,v+=r*L+((0===F&&o>0?-1*Math.min(20*b,o*L):0)+(0===F&&Ht.test(u)?4*b*L:0)),y+=(O?0:a)-(n&&void 0===t?1:0)}const S=y>0?(l-v)/y:0,C=null!==(t=null!==(a=null===(r=ee[d])||void 0===r?void 0:r[h])&&void 0!==a?a:null===(n=ee[d])||void 0===n?void 0:n.default)&&void 0!==t?t:1;return{tokenList:f,spaceWidth:u&&S>C*b*(p/100)?0:S}},Hi=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:i,lineHeight:o,format:l,textData:s,globalScale:c,memory:d}=e;const{fontData:u,fontLevel:m}=s,{letterSpacing:b}=u.fontList[m],p=[],h=r.reduce((e,r)=>{const n=(a<=100?100:a)/1e3,u=i/n,m=Ii(r,!0);let h=1,g=[],f=0,v=0,y=0;for(let i=0,j=n;i<m.length;i++){const e=m[i],r=m[i+1];e===ft?(y+=1,j=1):e===vt&&(y-=1,j=n);let{leftMostLetter:x,totalWidth:O,rightGap:w,leftGap:k}=Ai({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:v,format:l,letterSpacing:b,textData:s,globalScale:c,lineHeight:o,memory:d});let S=O/(y>0?n:1)+(0===i?(k>0?-1*Math.min(20*c/j,k):0)+(Ht.test(x)?4*c:0):0);if(f+S>u){let n=g.join("").trim();y>0&&(n+=vt),y<0&&(n=ft+n),y=0,p.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:f});let{totalWidth:i,rightGap:u,leftGap:m}=Ai({ctx:t,token:e,nextToken:r,xRatio:j,previousTokenGap:0,format:l,textData:s,globalScale:c,lineHeight:o,memory:d});f=i+((m>0?-1*Math.min(20*c/j,m):0)+(Ht.test(x)?4*c:0)),v=u,g=[e],h+=1}else f+=S,v=w,g.push(e)}let x=g.join("").trim();return y>0&&(x+=vt),y<0&&(x=ft+x),y=0,p.push({line:x,effectiveMedian:a,isLast:!0,actualLineWidth:f}),e+h},0)+(null!==n&&void 0!==n?n:0);return{currentLineList:p,currentLineCount:h}},Bi=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:b,globalScale:p,xRatio:h,fontStyle:g,textWorker:f,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=f,k="condense"===y&&l.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:C,trueHeadTextWidth:F,halfGap:L,alignment:T,headTextXRatio:N}=Mi({headText:i,headTextLetterWidth:o,footText:l,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*b,fitFootText:v,sentenceXRatio:h,xRatio:k}),I=F>s*h;if(0===i.length)return{trueHeadTextWidth:F,halfGap:L};const R=v?Math.min(1,s*h/F):1,E=v?R:k&&"center"===T?k:N;let M=r;O(),(v||E)&&(w(E,1),M=r/E),"center"===T?(M+=S,I?E>R&&(M+=(s*h/E-F)/2/E):M+=(s*h-F)/2):M+=C/2;for(const z of i){x();const{width:e,boundWidth:r}=Ti({ctx:t,letter:z,fontStyle:g,metricMethod:"furigana",xRatio:1,globalScale:p}),i=(e-r)/2;j(),x(m),t.fillText(z,M-i,n-a*u),j(),M+=r+C}return(v||E)&&O(),w(h,1),{trueHeadTextWidth:F,halfGap:L}},Wi=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:i="rubyForm"}=null!==a&&void 0!==a?a:{},o=null!==e&&void 0!==e?e:"";let l="";const s="ocg"===t?ze:Pe;for(const h of o){var c;l+=null!==(c=s[h])&&void 0!==c?c:h}const d=l,u=(r?d.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${ht}$1${gt}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${bt}$1${pt}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(Tt,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,e=>{const t=Ae[e];return null!==t&&void 0!==t?t:e}).replaceAll(new RegExp("{{([^{}]+?)}}","g"),e=>e.replaceAll("{{",ft).replaceAll("}}",vt)).replaceAll(new RegExp("{[^{}]+?}","g"),e=>`${ut}${e}${mt}`),m=("tcg"===t||!1===n?u:u.replaceAll(new RegExp(Mt,"g"),e=>{var t;const a=null!==(t=Fe[e][i])&&void 0!==t?t:Fe[e].rubyForm;return`${ut}${a}${mt}`})).replaceAll(new RegExp(ot,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Pe[r])&&void 0!==a?a:r}return`${ut}${t}${mt}`}).replaceAll(new RegExp(nt,"g"),e=>{let t="";for(const r of e){var a;t+=null!==(a=Pe[r])&&void 0!==a?a:r}return`${ut}${t}${mt}`}).replaceAll(new RegExp(wt,"g"),e=>`${ut}${e}${mt}`).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),e=>`${ut}${e}${mt}`).replaceAll(new RegExp(At,"g"),e=>`${ut}${e}${mt}`).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),e=>`${ut}${e}${mt}`).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),e=>`${ut}${e}${mt}`);let b=[],p=0;for(const h of m)h===ut?(0===p&&b.push(h),p+=1):h===mt?(p-=1,0===p&&b.push(h)):b.push(h);return b.join("").replaceAll(`${gt}${mt}`,`${mt}${gt}`).replaceAll(`${pt}${mt}`,`${mt}${pt}`).replaceAll(`${ut}${ht}`,`${ht}${ut}`).replaceAll(`${ut}${bt}`,`${bt}${ut}`).replaceAll(`${ft}${mt}`,`${mt}${ft}`).replaceAll(`${ut}${vt}`,`${vt}${ut}`).replaceAll(`${bt}${pt}`,"").replaceAll(`${ht}${gt}`,"").replaceAll(`${ut}${mt}`,"")},$i=async e=>{var t;let{ctx:a,tokenList:r,trueEdge:n,trueBaseline:i,spaceWidth:o=0,lineHeight:l=0,xRatio:s,yRatio:c=1,textData:d,format:u,drawImage:m=!0,textDrawer:b,debug:p=!1,option:h,globalScale:g,memory:f}=e;const v=null!==f&&void 0!==f?f:{image:{}},y=null!==(t=null===v||void 0===v?void 0:v.image)&&void 0!==t?t:{},x=si.getState().memory.imagePresetMap,{drawHeadText:j=!0}=null!==h&&void 0!==h?h:{},{fontLevel:O}=d,w=d.fontData,k=on(G,g);let S=d,C=S.currentFont,F=S.fontData,L=F.fontList[O],T=Ri(a,F,L,C,g),N=0,I=[],R=0,E=n,M=!1;for(let K=0,U=s;K<r.length;K++){const{bulletOffset:e=k.bulletOffset,bulletWidth:t,capitalLetterRatio:n=k.capitalLetterRatio,fontSize:h,headTextSpacing:f=k.headTextSpacing,iconSymbolWidth:G=t,largeSymbolRatio:q=k.largeSymbolRatio,letterSpacing:V=k.letterSpacing,ordinalFontOffsetY:_=k.ordinalFontOffsetY,squareBracketRatio:J=k.squareBracketRatio,wordLetterSpacing:Z,allRightSymbolOffset:ee=k.allRightSymbolOffset,fontLetterOffsetMap:te={}}=L,ae=1+V/2,re=i/c,{headTextFillStyle:ne,headTextBold:ie=X.headTextBold,headTextHeightRatio:oe=X.headTextHeightRatio,headTextOverflow:le=X.headTextOverflow,headTextGapRatio:se=X.headTextGapRatio,metricMethod:ce,fontStyle:de,letterDeviationMap:ue={},letterOffsetMap:me={}}=F,{stopApplyFuriganaFont:be,applyFuriganaFont:pe,stopApplyLargerText:he,applyLargerText:ge,stopApplyNumberFont:fe,applyNumberFont:ve,stopApplyOrdinalFont:ye,applyOrdinalFont:xe,applyScale:je,reverseScale:Oe,applySymbolFont:we,stopApplySymbolFont:ke,applyVietnameseFont:Se,stopApplyVietnameseFont:Ce,applyAsymmetricScale:Fe,resetScale:Le}=T,Te=r[K];if(Te===ft){U=1,a.setTransform(1,0,0,1,0,0);continue}if(Te===vt){U=s,a.scale(U,1);continue}if("<i>"===Te){var z;const e=!!Q[null!==(z=null===w||void 0===w?void 0:w.variant)&&void 0!==z?z:""]?Q[w.variant]:w;S=_r(d,e),C=S.currentFont,F=S.fontData,L=F.fontList[O],T=Ri(a,F,L,C,g),a.font=C.setStyle("italic").getFont();continue}if(Te===lt){S=d,C=S.currentFont,F=S.fontData,L=F.fontList[O],T=Ri(a,F,L,C,g),a.font=C.setStyle("").getFont();continue}if("<b>"===Te){a.font=S.currentFont.setWeight("bold").getFont();continue}if(Te===st){a.font=S.currentFont.setWeight("").getFont();continue}if(Te===ct){M=!0;continue}if(Te===dt){M=!1;continue}const Ne=-.5*U,Ie=h*Ne,Re=r[K+1],Ee=r[K+2],Me={ctx:a,xRatio:U,letterSpacing:V,format:u,textData:d,globalScale:g,lineHeight:l},ze={ctx:a,baseline:re,xRatio:U,textDrawer:b};let Pe=Te;const Ae=[],De=new RegExp(ot,"g");let He,Be=0;for(;null!=(He=De.exec(Te));){const e=/(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|\u201d|\u201c](.+?)["|'|\u201d|\u201c]|\b)(?!<)(?=.*?>)/gm;let t=0;if(He[1]===it){let a;R=0;let r,n,i,o,s,c="";for(;null!==(a=e.exec(He[0]));){a.index===e.lastIndex&&e.lastIndex++;const t=a[1],l=a[2];switch(t){case"src":c=l;break;case"width":r=parseInt(l);break;case"height":n=parseInt(l);break;case"offsetX":i=parseInt(l);break;case"offsetY":o=parseInt(l);break;case"name":s=l}}if(s){const e=y[s];e?(c=e.src,r="number"===typeof r?r:e.width,n="number"===typeof n?n:e.height,i="number"===typeof i?i:e.offsetX,o="number"===typeof o?o:e.offsetY):y[s]={src:c,width:r,height:n,offsetX:i,offsetY:o}}if(c&&m){let e="number"===typeof r?r:"number"===typeof n?void 0:.9*l,a=c,s=!1;const d=c?x[c]:void 0;if(d){const{height:e,width:t,offsetX:l,offsetY:s,src:c}=d;a=c,r="number"===typeof r?r:t,n="number"===typeof n?n:e,o="number"===typeof o?o:s,i="number"===typeof i?i:l}else if(!c.startsWith("https")){var P;s=!0,a="/asset/image/"+(null!==(P=tt[c])&&void 0!==P?P:`${c}.png`)}t=(null!==e&&void 0!==e?e:0)/U,Ae[Be]={type:"img",isInternalSource:s,src:a,offsetX:i,offsetY:o,width:e,height:n}}}Pe=Pe.replace(He[0],`${yt}${Be};${t}${xt}`),Be+=1}const We=Te.split(Ct).filter(e=>null!=e&&""!==e),$e=Pe.split(Ct).filter(e=>null!=e&&""!==e),{leftMostLetter:Ye,leftGap:Ke,rightGap:Ue,totalWidth:Ge,spaceCount:Xe}=Ai({token:Pe,nextToken:Re,previousTokenGap:N/U,memory:v,...Me}),qe=0===K?(Ke>0?-1*Math.min(20*g,Ke*U):0)+(Ht.test(Ye)?4*g:0):0;let Ve=E+qe,_e=N;for(let r=0;r<$e.length;r++){var A,D;const s=$e[r],m=null!==(A=$e[r+1])&&void 0!==A?A:Re,p=null!==(D=$e[K+2])&&void 0!==D?D:Ee;if(Pe===ft||Pe===vt);else if("\u29be"===s)I.push({edge:Ve,size:G,baseline:re}),Ve+=G*ae,_e=0,R=0;else if("\u25cf"===s)Le(),Ei(a,Ve,i+e-1*g,t,aa(u)*g),Ve+=t*ae,Fe(U,c),_e=0,R=0;else if(/[\xa9]/.test(s))Le(),ge(q),Ni({...ze,letter:s,edge:Ve*U,baseline:i+("tcg"===u?ee:2*ee)}),Ve+=a.measureText(s).width*ae,he(),Fe(U,c),_e=0,R=0;else if(Dt.test(s))Le(),xe(),Ni({...ze,letter:s,edge:Ve*U,baseline:i+_}),Ve+=a.measureText(s).width*ae,ye(),Fe(U,c),Ve+=o,_e=0,R=0;else if(Ot.test(s)){const{content:e}=Pi(s),t=parseInt(e);if(!isNaN(t)&&Ae[t]){const{type:e,src:r,offsetX:n,offsetY:o,width:s,height:d,isInternalSource:u}=Ae[t],m=.75;Le(),await Fi(a,r,Ve+(null!==n&&void 0!==n?n:0),i+(null!==o&&void 0!==o?o:0)-l*m,s,d,void 0,void 0,void 0,void 0,{cache:u,internalImage:u,crossorigin:"anonymous"}),Ve+="img"===e&&s?s:0,Fe(U,c),_e=0,R=0}}else if(ra.test(s)){const[e,t,n=""]=We[r].replaceAll(/{|}/g,"").split(/(\|+)/),i="||"===t,{totalWidth:s}=Ai({token:e,nextToken:m,previousTokenGap:0,memory:v,...Me});pe();const y=n.split("").map(e=>Ti({ctx:a,letter:e,fontStyle:de,metricMethod:"furigana",xRatio:1,globalScale:g}).boundWidth).reduce((e,t)=>e+t,0);be();const{headTextWidth:x,halfGap:O}=Mi({headText:n,headTextLetterWidth:y,footText:e,footTextWidth:s*U,headTextGap:Ie,headTextSpacing:f*U,gapPadding:h*se,fitFootText:i,sentenceXRatio:U,xRatio:"condense"===le&&e.length>1?Math.min(1,U+.1):0}),w=0===n.length?Math.max(Ie,s*Ne):O,k=w,S=w,C=zi(_e,S),F=S>0?S-C:0,{offsetable:L,leftGap:N}=Ai({token:m,nextToken:p,previousTokenGap:k/U,memory:v,...Me}),I=N*U,E=zi(k,I),M=F+(k>0?k-E:0);let z=0,P=0;M>0&&I>=-2*g&&L?(z=(M+2*Math.max(I,0))/3,P=Math.max(I,0)-z):z=F;const A=Ve+(w<0?-C:qe?-qe:z)+R;R=P;const D=e.includes("<")?Ii(Wi(e,u,{multiline:!1,furiganaHelper:!1})):Ii(e);await $i({ctx:a,format:u,textData:d,tokenList:D,trueBaseline:re,lineHeight:l,trueEdge:A,xRatio:U,yRatio:c,spaceWidth:0,textDrawer:b,globalScale:g,debug:!1,memory:v});const H=a.fillStyle,B=a.strokeStyle,W=a.shadowColor,$=a.shadowOffsetX,Y=a.shadowOffsetY,K=a.shadowBlur;ne&&(a.fillStyle=ne,a.strokeStyle="",a.shadowColor="",a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowBlur=0);j&&Bi({ctx:a,fontSize:h,edge:Ve-C,baseline:re,headText:n,headTextLetterWidth:y,footText:e,footTextWidth:s,headTextGap:Ie,headTextSpacing:f,headTextHeightRatio:oe,headTextBold:ie,headTextGapRatio:se,xRatio:U,fontStyle:de,textWorker:T,fitFootText:i,headTextOverflow:le,globalScale:g}),a.fillStyle=H,a.strokeStyle=B,a.shadowColor=W,a.shadowOffsetX=$,a.shadowOffsetY=Y,a.shadowBlur=K,Ve+=Math.max(s*U,x)-C+o,_e=k}else if(kt.test(s)){const e=Z?1+Z/2:ae;a.letterSpacing=(e-1)*C.getFontInfo().sizeAsNumber+"px";const t=a.measureText(s).width*U,r=Math.max(Ie,t*Ne),i=r;Ve-=zi(_e,r);let o=s,l=Ve;for(;""!==o;){var H;let e=o[0],t=o.slice(1),r=0;const{edge:i}=null!==(H=te[e])&&void 0!==H?H:{};let c=l*(null!==i&&void 0!==i?i:1);const d={...ze,deviation:ue.default,letter:e,edge:c};if(rt.test(e))je(J),r=a.measureText(o).width-a.measureText(t).width,Ni({...d,edge:c/J,baseline:re/J}),Oe(J);else if(at.test(e)){je(n),r=a.measureText(o).width-a.measureText(t).width;const i=r>a.measureText(e).width*n?Math.round(r*(1-n))/2:0;Ni({...d,edge:c/n+i,baseline:re/n}),Oe(n)}else if(St.test(e)&&"tcg"===de)Se(),r=a.measureText(o).width-a.measureText(t).width,Ni(d),Ce();else if(Wt.test(e))ve(),r=a.measureText(o).width-a.measureText(t).width,Ni(d),fe();else if(Et.test(e)&&"tcg"===de){var B,W,$;const{fontSize:n}=we(null===(B=me[e])||void 0===B?void 0:B.ratio);r=a.measureText(o).width-a.measureText(t).width,Ni({...d,baseline:d.baseline+n*(null!==(W=null===($=me[s])||void 0===$?void 0:$.baseline)&&void 0!==W?W:0)}),ke()}else r=a.measureText(o).width-a.measureText(t).width,Ni(d);l+=r*U,o=t}Ve=l,_e=i,R=0,a.letterSpacing="0px"}else if(Et.test(s)&&"tcg"===de){var Y;const{yRatio:e=1,ratio:t,baseline:r=0,edge:n=0}=null!==(Y=me[s])&&void 0!==Y?Y:{},i=s,{fontSize:o}=we(t);a.scale(1,e);const l=a.measureText(i).width*ae*U,c=Math.max(Ie,l*Ne),d=c;Ve-=zi(_e,c),Ni({...ze,baseline:(ze.baseline+o*r)/e,letter:i,edge:Ve+o*n}),Ve+=l,a.scale(1,1/e),ke(),_e=d,R=0}else{const e=s,t=Ti({ctx:a,letter:e,fontStyle:de,metricMethod:ce,isLastOfLine:void 0===m,xRatio:U,globalScale:g}),r=t.boundWidth*ae*U,n=Math.max(Ie,r*Ne),i=n;Ve-=zi(_e,n),Ni({...ze,letter:e,edge:Ve,deviation:null===ue||void 0===ue?void 0:ue.default,letterMetric:t}),Ve+=r,("ocg"===u||"tcg"===u&&/\s+/.test(e))&&!0!==Gt.test(e)&&(Ve+=o),Vt.test(e)||(_e=i),R=0}}N=Ue*U,p&&pi({ctx:a,baseline:re,edge:E,width:Ge*U,xRatio:U});E+=Ge*U+(M?0:Xe)*o+qe}return{tokenEdge:E,iconPositionList:I}},Yi=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:i}=e;const o=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-"),l=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-");let s=Z[l];return a&&"tcg"===t&&Q[l]&&(s=Q[l]),{fontDataKey:l,fontData:s,sizeList:xe[o]}},Ki=async e=>{let{ctx:t,content:a,isNormal:r=!1,fontDataKey:n="tcg",fontData:i=Z[n],textStyle:o,region:l,sizeList:s=xe["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:m}=e;const{defaultSizeLevel:b,forceRelaxCondenseLimit:p,globalScale:h=1,minLine:g,justifyRatio:f}=null!==m&&void 0!==m?m:{},v="number"===typeof g?g:0,y="number"===typeof f?f:1;let x=null!==b&&void 0!==b?b:0;if(!t||!a)return x;const j=Wi(a.trim(),d,{furiganaHelper:u}),{lineList:O,fullLineListOption:w,effectFlavorCondition:k}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=[],n=[],i=new RegExp([`^(${bt}([^${pt}]*)${pt}\\s*)`,`^(${ht}([^${gt}]*)${gt}\\s*)`].join("|"));let o=e,l="";const s=null===(t=new RegExp(Rt,"m").exec(e))||void 0===t?void 0:t[1];s&&a?(l=s.trim(),o=o.replace(s,"")):l="";let c=0;for(;o.length>0&&c<=100;){const e=i.exec(o),t=null===e||void 0===e?void 0:e[1],a=null===e||void 0===e?void 0:e[2],l=null===e||void 0===e?void 0:e[3],s=null===e||void 0===e?void 0:e[4];if(a&&t)o=o.replace(t,""),r.push({line:a,alignment:"left"}),n.push(Ft);else if(s&&l)o=o.replace(l,""),r.push({line:s,alignment:"justify"}),n.push(Ft);else{const e=/(.*)(\n|$)/.exec(o),t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];"string"===typeof t&&"string"===typeof a&&(n.push(...a.replaceAll(bt,"[").replaceAll(pt,"]").replaceAll(ht,"[[").replaceAll(gt,"]]").split("\n")),o=o.replace(t,""))}c++}return l&&n.push(Lt),{lineList:n,fullLineListOption:[...r],effectFlavorCondition:l}}(j,r);let S=0;const C=ln(i,h),{fontList:F}=C,L=F[F.length-1].lineCount;for(;x<=F.length&&x>=0;){var T,N,I;const e=x===F.length||O.length>L,a=Math.min(F.length-1,x),i=e?{1:600,2:600,3:600}:"tcg"===d?p&&a<p?ye.relaxed:null!==(T=ye[c])&&void 0!==T?T:ye.strict:{1:800,2:800,3:800},{trueEdge:u,trueWidth:m,trueBaseline:b,trueHeightCap:g}=rn(null!==(N=s[a])&&void 0!==N?N:s[s.length-1],h),f=r&&"tcg"===d?m-2*h:m,j=e&&"number"===typeof g,R=j?Vr(C,{heightCap:g,lineCount:S}):C,E=j?x:a,{font:M,fontList:z}=R,P=j?z[E]:F[a],{fontSize:A,lineHeight:D,lineCount:H}=P,B={image:{}},W=Xr();t.font=W.setWeight("").setSize(A).setFamily(M).getFont(),t.textAlign="left";const $={fontData:R,fontLevel:E,currentFont:W};let Y=[];const K=O.length>H&&"number"===typeof g?1:Gr(e=>{const{currentLineList:a,currentLineCount:r}=Hi({ctx:t,median:e,paragraphList:O,additionalLineCount:0,format:d,textData:$,width:f,lineHeight:D,globalScale:h,memory:B});return Y=a,!(r>H)},200);S=Math.max(O.length,Math.max(v,Y.length));const U=ji({ctx:t,...o,globalScale:h}),G=null!==(I=i[`${O.length}`])&&void 0!==I?I:i[3];if(K<G&&x<F.length||v>H)x+=1;else{if(!(j&&K<G)){fi(t);let e=b+D;const r=Y.map(e=>{let{line:r,effectiveMedian:i,isLast:o}=e,s=1,c=[],u=0,m=$;if(r===Ft){var b;const{line:e="",alignment:a}=null!==(b=w.shift())&&void 0!==b?b:{},r="justify"!==a;s=.001*Gr(a=>{const{currentLineCount:r}=Hi({ctx:t,median:a,paragraphList:[e],format:d,textData:$,width:f,lineHeight:D,globalScale:h,memory:B});return!(r>1)});const{tokenList:n,spaceWidth:i}=Di({ctx:t,line:e,xRatio:s,format:d,isLast:r,textData:$,width:f,globalScale:h,justifyRatio:100,lineHeight:D,region:l,memory:B});c=n,u=i}else if(r===Lt){const e=ln(Z[n],h),r=j?Vr(e,{heightCap:g,lineCount:Math.max(v,Y.length)}):e,{fontSize:i}=j?r.fontList[E]:e.fontList[a],o=Xr();t.font=o.setSize(i).setFamily(e.font).getFont();const l={fontData:r,fontLevel:E,currentFont:o};s=.001*Gr(e=>{const{currentLineCount:a}=Hi({ctx:t,median:e,paragraphList:[k],format:d,textData:l,width:f,lineHeight:D,globalScale:h,memory:B});return!(a>1)});c=Ii(k),u=0,m=l,t.font=o.setSize(R.fontList[E].fontSize).setFamily(R.font).getFont()}else{s=i/1e3;const e=r,{tokenList:a,spaceWidth:n}=Di({ctx:t,line:e,xRatio:s,format:d,isLast:o,textData:$,width:f,globalScale:h,justifyRatio:y,lineHeight:D,region:l,memory:B});c=a,u=n}return t.setTransform(1,0,0,1,0,0),{xRatio:s,line:r,tokenList:c,spaceWidth:u,textData:m}});for(let a of r){const{xRatio:r,tokenList:n,line:i,spaceWidth:o,textData:l}=a;let s;const{currentFont:c,fontData:m}=l;t.font=c.setSize(A).setFamily(m.font).getFont(),i===Ft?(t.scale(r,1),s=$i({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:D,textData:l,format:d,globalScale:h,memory:B})):i===Lt?(t.scale(r,1),s=$i({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,lineHeight:D,textData:l,format:d,globalScale:h,memory:B})):(t.scale(r,1),s=$i({ctx:t,tokenList:n,xRatio:r,yRatio:1,trueEdge:u,trueBaseline:e,spaceWidth:o,lineHeight:D,textData:l,format:d,globalScale:h,memory:B})),await s,t.setTransform(1,0,0,1,0,0),e+=D}break}S+=1}U()}return x},{width:Ui,finishTypeCardWidth:Gi,stickerSize:Xi}=s,{width:qi,height:Vi,topToPendulumStructure:_i}=s,Ji={topRight:(async()=>{const e=document.createElement("canvas");e.width=qi,e.height=Vi;const t=e.getContext("2d");return t?(await wi(t,"mask/mask-top-right.png"),t.getImageData(0,0,qi,Vi).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=qi,e.height=Vi;const t=e.getContext("2d");return t?(await wi(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,qi,Vi).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=qi,e.height=Vi;const t=e.getContext("2d");return t?(await wi(t,"mask/mask-right.png"),t.getImageData(0,0,qi,Vi).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=qi,e.height=_i;const t=e.getContext("2d");return t?(await wi(t,"mask/mask-name.png"),t.getImageData(0,0,qi,_i).data):null})()},Qi=async(e,t,a,r)=>{const{ctx:n,canvas:i}=va(a,r);if(!n)return i;if("string"===typeof e?await wi(n,e,0,0):n.drawImage(e,0,0,a,r),!t)return i;const o=n.getImageData(0,0,a,r).data;for(let l=0;l<o.length;l+=4)o[l+3]=t[l+3];return n.putImageData(new ImageData(o,a,r),0,0),i},{width:Zi,height:eo,topToPendulumStructure:to,topToPendulumStructureFrame:ao,pendulumIconFrameHeight:ro,pendulumIconFrameWidth:no,pendulumFrameHeight:io,pendulumFrameWidth:oo,attributeSize:lo,attributeX:so,attributeY:co,finishTypeCardWidth:uo,stickerSize:mo,pendulumStructureHeight:bo}=s,po=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,globalScale:n,region:i,legacyTemplate:o,hasBackground:l,frame:s,leftFrame:c,pendulumFrame:d,rightFrame:u,pendulumRightFrame:b,dyeList:p,effectBackground:h,pendulumEffectBackground:g,backgroundType:f,cardIcon:v,attribute:x,attributeType:j,star:O,starList:w,foil:k,pendulumSize:S,opacity:F,isLink:L,isSpeedSkill:R,isXyz:E,isPendulum:M,pendulumFrameTypeMap:z,otherFinish:P,loopFinish:A,loopArtFinish:D}=e;const H=t.getContext("2d"),{artBorder:B,nameBorder:W,body:$,name:K,pendulum:U,text:G,boundless:X}=F,{artX:q,artY:V,artFrameX:_,artFrameY:J,artFrameWidth:Q,artFinishX:Z,artFinishY:ee,artWidth:te,artRatio:ae}=m(M,F,void 0,S),{frameType:re,effectBoxOffsetY:ne,pendulumBoxX:ie,pendulumBoxY:oe,pendulumBoxWidth:le,pendulumBoxHeight:se,pendulumBoxOffsetY:ce,artlessFrameY:de}=ue[S],me=$>0||B,pe=860,he="normal"!==k,ge=E||R?s:"normal",fe=o&&"synchro"===s?["normal","xyz","xyz","xyz","xyz"]:[ge],ve=!X&&me,ye=rr({frame:s,topLeftFrame:c,topRightFrame:u,bottomLeftFrame:d,bottomRightFrame:b,effectBackground:h,pendulumEffectBackground:g},M),{topLeftFrame:xe,topRightFrame:je,bottomLeftFrame:Oe,bottomRightFrame:we,effectBackground:ke,pendulumEffectBackground:Se}=ye,Ce={drawFrame:async()=>{if(!H)return;const e=l&&r&&"frame"===f,{ctx:t,canvas:a}=va();await wi(t,`${o?"legacy-":""}frame/frame-${xe}.png`,0,0);const{canvas:i,ctx:s}=Pa(a,p[0]);if(!e&&(xe!==je||""!==p[0]||""!==p[1])&&s){const e=await Qi(`${o?"legacy-":""}frame/frame-${je}.png`,await Ji.topRight,Zi,eo),{canvas:t}=Pa(e,p[1]);s.drawImage(t,0,0)}const{ctx:c,canvas:d}=va();await wi(c,`${o?"legacy-":""}frame-pendulum/frame-pendulum-${Oe}.png`,0,0);const{canvas:u,ctx:m}=Pa(d,p[2]);if(!e&&(Oe!==we||""!==p[2]||""!==p[3])&&m){m.clearRect(714,0,99,eo);const e=await Qi(`${o?"legacy-":""}frame/frame-${we}.png`,await Ji.bottomRight,Zi,eo),{canvas:t}=Pa(e,p[3]);m.drawImage(t,0,0)}if(H.globalAlpha=$/100,H.scale(n,n),M&&(null===s||void 0===s||s.clearRect(_,J,Q,bo),null===m||void 0===m||m.clearRect(_,J,Q,bo)),e&&s&&m){const{width:e,height:t}=r;s.globalCompositeOperation="source-atop",s.drawImage(r,0,0,e,t,0,0,Zi,eo),m.globalCompositeOperation="source-atop",m.drawImage(r,0,0,e,t,0,0,Zi,eo)}H.drawImage(i,0,0),H.drawImage(u,0,0),H.resetTransform(),H.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;if(!a||!e)return;const{width:t,height:r}=a;r<=0||e.drawImage(a,0,0,t,r,n*q,n*V,n*te,n*te/(t/r))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!r||!t||!l)return;const{width:i,height:o}=r;if(o<=0)return;const{artX:s,artY:c,artWidth:d,artFrameWidth:u,artFrameX:b,artFrameY:p,ratio:h,artRatio:g}=m(M,F,f,S);"frame"!==f?t.drawImage(r,0,0,i,o,n*s,n*c,n*d,n*d/h):t.drawImage(r,0,0,i,o,0,0,n*Zi,n*eo);const v=null!==(e=P[3])&&void 0!==e?e:"normal";if("normal"!==v&&a){const e=vi([v],y);await e(t,"art",async e=>Ci(t,`finish/art-finish-${e}.png`,n*b,n*p,n*u,n*u/g))}},drawAttribute:async()=>{var e;if(!H)return;H.scale(n,n);const{canvas:t,ctx:a}=va(Zi*n,(co+lo)*n);if("custom"===j)await Fi(a,x,e=>{const{naturalWidth:t,naturalHeight:a}=e;return so-(lo/a*t-lo)/2},co,void 0,lo,void 0,void 0,void 0,void 0,{internalImage:!1,crossorigin:"anonymous"});else{var r,o,l;const e=null!==(r=null===(o=N[i])||void 0===o||null===(l=o[x])||void 0===l?void 0:l.offsetX)&&void 0!==r?r:0,t=T[x]?"tcg":I[i].fileKey;await Ci(a,`attribute/attr-${t}-${x.toLowerCase()}.png`,so+e,co,void 0,lo)}const s=null!==(e=P[0])&&void 0!==e?e:"normal";if("normal"!==s){const e=vi([s],y),{canvas:r,ctx:n}=va(Zi,co+lo);null===n||void 0===n||n.drawImage(t,0,0),await e(n,"art",async e=>await wi(n,`finish/finish-typeart-${e}.png`,(Zi-uo)/2,mo)),a&&(a.globalCompositeOperation="source-in",a.drawImage(r,0,0)),H.drawImage(t,0,0)}else H.drawImage(t,0,0);H.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:r}=e;const i="auto"===v?Qa(s):v;if(!H)return;H.scale(n,n);const o=null!==(t=P[1])&&void 0!==t?t:"normal",l="normal"!==o?vi([o],y):void 0;await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:n,star:i,starList:o,starAlignment:l="auto",style:s,onStarDraw:c,loopStarFinish:d}=e;const u=Array.isArray(o)?o:[],m=50,b=3.8;let p="custom"===r?u.length:"string"===typeof i?""===i?0:1:"number"===typeof i?i:0,h=m*p+b*(p-1);const g=145;let f="right";["rank","negative-level"].includes(r)&&(f="left"),f="auto"===l?f:l,p>12&&(f="center"),n&&"center"===f&&(p=0,h=0);const v="center"===f?(Ui+h)/2:"left"===f?85.9125+h:728.775;let y=-53.8;if(t&&n&&"st"!==r){const e=50,r=ji({ctx:t,...s,globalScale:a});t.textAlign="left"===f||"right"===f?f:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const i="center"===f?t.measureText(n).width/-2:"left"===f?b:-57.6;t.fillText(n,v+i,g+.9*e),t.textAlign="left",r()}const{canvas:x,ctx:j}=va(Ui*a,195*a);if(await Promise.all([...Array(p)].map(async(e,t)=>{y+=53.8;const a="custom"===r?u[p-1-t]:r,n=[v-(m+Math.ceil(y)),g],i=[v-(m+Math.ceil(y))-3,142];return Y[a]&&await wi(j,"subfamily/subfamily-glow.png",...i),await wi(j,`subfamily/subfamily-${a}.png`,...n),await c(n)})),t)if(d){const{canvas:e,ctx:a}=va(Ui,195);null===a||void 0===a||a.drawImage(x,0,0),await d(a,"art",async e=>await wi(a,`finish/finish-typeart-${e}.png`,(Ui-Gi)/2,Xi)),j&&(j.globalCompositeOperation="source-in",j.drawImage(e,0,0)),t.drawImage(x,0,0)}else t.drawImage(x,0,0)})({ctx:H,cardIcon:i,text:"string"===typeof O?O:null,star:O,starList:w,starAlignment:r,style:a,globalScale:n,onStarDraw:async e=>"st"===i?Promise.resolve():await A(H,"star",async t=>wi(H,`finish/finish-${t}-star.png`,...e)),loopStarFinish:l}),H.resetTransform()},drawPendulumScaleIcon:async()=>{const{canvas:e,ctx:t}=va(no,ro);H&&t&&(await wi(t,`frame-pendulum/pendulum-scale-${S}.png`,0,0),"scaleless"===z.blue&&t.clearRect(0,0,no/2,ro),"scaleless"===z.red&&t.clearRect(no/2,0,no/2,ro),H.scale(n,n),H.drawImage(e,0,750),H.resetTransform())},drawStatBorder:async e=>{H&&(H.scale(n,n),await Li(t,"frame/frame-stat-border.png",0,1070,813,20,n,e),H.resetTransform())},drawNameBackground:async()=>{if(!H)return;H.scale(n,n);const{ctx:e,canvas:t}=va(Zi,to);await wi(e,`${o?"legacy-":""}background/background-name-${xe}.png`,0,0);const{canvas:a,ctx:r}=Pa(t,p[0]);if(xe!==je||""!==p[0]||""!==p[1]){const e=await Qi(`${o?"legacy-":""}background/background-name-${je}.png`,await Ji.name,Zi,to),t=Pa(e,p[1]).canvas;null===r||void 0===r||r.drawImage(t,0,0)}H.globalAlpha=K/100,H.drawImage(a,0,0),H.globalAlpha=1,H.resetTransform()},drawEffectBackground:async e=>{let{withPendulum:t=!1,blendWithBackground:a=!0,externalCtx:r=H}=e;if(!r)return;r.scale(n,n);const{ctx:i,canvas:l}=va();t?await Ci(i,`${o?"legacy-":""}background/background-text-${ke}.png`,54,884+ne,705,231,0,0+ne,705,231):await wi(i,`${o?"legacy-":""}background/background-text-${ke}.png`,54,884);const s=Pa(l,p[4]).canvas;if(r.globalAlpha=(a?G:100)/100,r.drawImage(s,0,0),t){var c;const{ctx:e,canvas:t}=va(),{exceptionFrameType:n=re,exceptionPendulumBoxOffsetHeight:i=0}=null!==(c=be[S][Se])&&void 0!==c?c:{};await Ci(e,`${o?"legacy-":""}background/background-${n}-${Se}.png`,ie,oe+ce,le,se,0,ce+i,le,se+i);const l=Pa(t,p[5]).canvas;r.globalAlpha=(a?U:100)/100,r.drawImage(l,0,0)}r.globalAlpha=1,r.resetTransform()},drawFrameBorder:async()=>{H&&(H.scale(n,n),await wi(H,`frame/frame-border-${ge}.png`,0,0),M&&!E&&await wi(H,"frame/frame-border-pendulum.png",0,0),H.resetTransform())},drawNameBorder:async()=>{if(W&&H){H.scale(n,n);for(let e=0;e<fe.length;e++)await wi(H,`frame/name-border-${fe[e]}.png`,0,0);H.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(me&&H){let e="";e=E||R?`frame/art-border-${s}.png`:L||["zarc","hamon","uria","raviel"].includes(s)?"frame/art-border-special.png":"frame/art-border.png",H.scale(n,n),await wi(H,e,60,170),H.resetTransform()}},drawPendulumBorder:async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!H)return;const r=Wr.test(p[6]),i=r&&a&&"normal"===t?"platinum":t,{canvas:o,ctx:l}=va(),s=Math.round(oo/2);if(await Ci(l,`frame-pendulum/border-pendulum-${S}-${i}-artless`+("scaleless"===z.blue?"-scaleless":"")+".png",30,ao,s,io,0,0,s,io),await Ci(l,`frame-pendulum/border-pendulum-${S}-${i}-artless`+("scaleless"===z.red?"-scaleless":"")+".png",30+s,ao,oo-s,io,s,0,oo-s,io),a&&r){const{canvas:e}=Pa(o,p[6]);null===l||void 0===l||l.drawImage(e,0,0)}if(e)if(null===l||void 0===l||l.clearRect(0,0,Zi,de+ao),r){const e="normal"===t?"platinum":t,{ctx:a,canvas:r}=va();await wi(a,`frame-pendulum/border-pendulum-${S}-${e}.png`,30,ao);const{canvas:n}=Pa(r,p[6]);null===l||void 0===l||l.drawImage(n,0,0)}else await wi(l,`frame-pendulum/border-pendulum-${S}-${t}.png`,30,ao);H.scale(n,n),H.drawImage(o,0,0),H.resetTransform()},drawEffectBorder:async()=>{H&&(H.scale(n,n),he||"speed-skill"!==Oe?await wi(H,"frame/effect-border.png",35,pe):await wi(H,"frame/effect-border-speed-skill.png",35,pe),H.resetTransform())},drawCardBorder:async()=>{if(H){if(H.scale(n,n),Wr.test(p[6])){const e="normal"===k?"platinum":k,{ctx:t,canvas:a}=va();await wi(t,`frame/card-border-${e}.png`,0,0);const{canvas:r}=Pa(a,p[6]);H.drawImage(r,0,0)}else await wi(H,`frame/card-border${he?`-${k}`:""}.png`,0,0);H.resetTransform()}},drawArtBorderFoil:async()=>{if(H){if(H.scale(n,n),me)if(Wr.test(p[6])){const e="normal"===k?"platinum":k,{ctx:t,canvas:a}=va();await wi(t,`frame/art-border-${e}.png`,60,170);const{canvas:r}=Pa(a,p[6]);H.drawImage(r,0,0)}else await wi(H,`frame/art-border-${k}.png`,60,170);H.resetTransform()}},drawEffectBorderFoil:async()=>{if(H){if(H.scale(n,n),Wr.test(p[6])){const e="normal"===k?"platinum":k,{ctx:t,canvas:a}=va();await wi(t,`frame/effect-border-${e}.png`,35,pe);const{canvas:r}=Pa(a,p[6]);H.drawImage(r,0,0)}else await wi(H,`frame/effect-border-${k}.png`,35,pe);H.resetTransform()}},drawNameFinish:async()=>{(me||W)&&H&&(H.scale(n,n),await A(H,"name",async e=>wi(H,`finish/finish-${e}-name.png`,0,0)),H.resetTransform())},drawAttributeFinish:async()=>{x!==C&&H&&(H.scale(n,n),await A(H,"attribute",async e=>wi(H,`finish/finish-${e}-attribute.png`,so,co)),H.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;ve&&e&&(e.scale(n,n),await D(e,"art",async(t,a)=>await Ci(e,`finish/art-finish-${t}${M?a:""}.png`,Z,ee,Q,Q/ae),S),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;e&&(e.scale(n,n),await A(e,"art-overlay",async t=>wi(e,`finish/finish-${t}-`+(ve?"art":"unart")+"-overlay"+(M?`-pendulum-${S}`:"")+".png",Z,ee)),e.resetTransform())},drawArtBorderFinish:async()=>{me&&H&&(H.scale(n,n),await A(H,"art-border",async e=>wi(H,`finish/finish-${e}-art-border.png`,0,0)),H.resetTransform())},drawPendulumArtBorderFinish:async()=>{H&&(H.scale(n,n),me&&await A(H,"art-border-pendulum",e=>wi(H,`finish/finish-${e}-art-border-pendulum-${S}.png`,0,0)),H.resetTransform())},drawBorderPendulumFinish:async()=>{H&&(H.scale(n,n),await A(H,"border-pendulum",async e=>{const t=`finish/finish-${e}-border-pendulum-${S}`;await Ci(H,`${t}${"scaleless"===z.blue?"-scaleless":""}.png`,0,0,Zi/2,eo,0,0,Zi/2,eo),await Ci(H,`${t}${"scaleless"===z.red?"-scaleless":""}.png`,0+Zi/2,0,Zi/2,eo,Zi/2,0,Zi/2,eo)}),H.resetTransform())},drawFrameFinish:async()=>{H&&(H.scale(n,n),await A(H,"frame",async e=>wi(H,`finish/finish-${e}-frame${M?`-pendulum-${S}`:""}.png`,0,0)),H.resetTransform())},drawFrameBackgroundFinish:async()=>{H&&(H.scale(n,n),await A(H,"frame-background",async e=>wi(H,`finish/finish-${e}-frame-background${M?"-pendulum":""}.png`,0,0)),H.resetTransform())},drawOverlayFinish:async()=>{H&&(H.scale(n,n),await A(H,"overlay",async e=>wi(H,`finish/finish-${e}-overlay.png`,0,0)),H.resetTransform())},drawCardBorderFinish:async()=>{H&&(H.scale(n,n),await A(H,"card-border",async e=>wi(H,`finish/finish-${e}-card-border.png`,0,0)),H.resetTransform())}};return Ce},ho=async(e,t,a,r,n,i,o,l)=>{var s,c,d;const{isSpeedSkill:u,format:m,frame:b,furiganaHelper:p,globalScale:h}=l,g=r*h,f=n*h,v=i*h,y=yr(a);if(!t||!a)return;const{embossPitch:x,embossYaw:j,embossThickness:O,fillStyle:w,font:k,gradientAngle:S,gradientColor:C,hasEmboss:F,hasGradient:L,hasOutline:T,hasShadow:N,headTextFillStyle:I,lineColor:R,lineOffsetX:E,lineOffsetY:M,lineWidth:z,shadowBlur:P,shadowColor:A,shadowOffsetX:D,shadowOffsetY:H,pattern:B}={...re(),...o},{patternImage:W,blendMode:$}=null!==(s=se[null!==B&&void 0!==B?B:""])&&void 0!==s?s:{};t.textAlign="left";const Y=ln({...(null!==(c=Le[k])&&void 0!==c?c:Le.Default).fontData,headTextFillStyle:I},h),K=Xr({defaultFamily:Y.font,defaultSize:Y.fontList[0].fontSize,defaultWeight:Y.weight}),U={fontLevel:0,fontData:Y,currentFont:K},X=Wi(a,m,{multiline:!1,furiganaHelper:p,dictionaryType:"rubyFormName"}),q="ocg"===m?[X]:X.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),V=Xr({defaultFamily:Y.font,defaultSize:Y.fontList[0].fontSize,defaultWeight:Y.weight}),_=V.getFont(),J=V.setSize(e=>e*Y.symbolFontRatio).setStyle("small-caps").setFamily(Y.symbolFont).getFont();let Q=0,Z=0;q.forEach((e,a)=>{t.font=a%2===0?_:J;const r=t.measureText(e.replaceAll(jt,""));Q=Math.max(Q,r.actualBoundingBoxAscent),Z=Math.max(Z,r.actualBoundingBoxDescent)},0),t.font=_;let ee=0;const te=U.fontData.fontList[U.fontLevel].lineHeight,ae=Gr(e=>{const{currentLineCount:a,currentLineList:r}=Hi({ctx:t,median:e,paragraphList:[X],format:m,textData:U,width:v,lineHeight:te,globalScale:h});return!(a>1)&&(ee=r[0].actualLineWidth,!0)})/1e3;t.scale(ae,1);const ne=on(G,h),ie=null!==(d=Y.fontList[0].offsetY)&&void 0!==d?d:ne.offsetY,oe=Ii(X),le=ee>0&&L?((e,t,a,r,n,i,o,l)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=o+l,m=r+n/2,b=i+(l-o)/2;let p=n,h=u;"1"!==c&&"3"!==c||(p=u,h=n);const g=Math.sqrt(p**2/4+h**2/4);if(g>0){const t=90-(180*Math.asin(p/2/g)/Math.PI-d),r=Math.sin(t/180*Math.PI)*g,n=Math.sin(d/180*Math.PI)*r,i=Math.cos(d/180*Math.PI)*r;let o=n,l=i;"1"===c&&(o=i,l=-n),"2"===c&&(o=-n,l=-i),"3"===c&&(o=-i,l=n);const s=m+o,u=b-l,h=m-o,f=b+l,v=e.createLinearGradient(s,u,h,f);return a.forEach(e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)}),v}})(t,S,Zr(C),g,ee,f,Q,Z):void 0;Or.test({globalScale:h,xRatio:ae,normalStyle:_},{scale:h,xRatio:ae,setup:e=>{e.font=_,e.resetTransform(),e.scale(ae,1)}});let ce=F&&"number"===typeof O&&O>0,de=()=>{};ce&&(de=ji({ctx:t,lineWidth:O,lineColor:w,lineColorGradient:le,globalScale:h,useDefault:!1})),t.fillStyle=null!==le&&void 0!==le?le:w;const{tokenEdge:ue}=await $i({ctx:t,tokenList:oe,xRatio:ae,yRatio:1,trueEdge:g,trueBaseline:f,textData:U,lineHeight:te,format:m,globalScale:h,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?ie:0)),ce&&t.strokeText(a,r,n-(u?ie:0))}});if(de(),W){const a=e.cloneNode(),r=a.getContext("2d");if(r){t.setTransform(1,0,0,1,0,0),r.scale(h,h),await wi(r,`frame/frame-${b}.png`,0,0),await wi(r,`background/background-name-${b}.png`,0,0),r.globalCompositeOperation=$,r.resetTransform();const e=t.measureText(y).actualBoundingBoxLeft;await Ci(r,`finish-name/${W}.png`,g-e,f-Q,v+e,Q+Z),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(ae,1)}}if(F){const a=10,r=qa({inputCanvas:e,lightPitch:x,lightYaw:j,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(ue+a)});r&&t.putImageData(r,0,0)}if(T){const e=ji({ctx:t,lineWidth:z+(F?O:0),lineColor:R,globalScale:h,useDefault:!1});t.globalCompositeOperation="destination-over",await $i({ctx:t,tokenList:oe,xRatio:ae,yRatio:1,trueEdge:g,trueBaseline:f,textData:U,lineHeight:te,format:m,globalScale:h,option:{drawHeadText:!1},drawImage:!1,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+E,n+M-(u?ie:0))}}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(N){const a=e.cloneNode(),r=a.getContext("2d");if(r){const n=ji({ctx:r,x:D,y:H,shadowColor:A,blur:P,globalScale:h,useDefault:!1});t.scale(1/ae,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}}await $i({ctx:t,tokenList:oe,xRatio:ae,yRatio:1,trueEdge:g,trueBaseline:f,textData:U,lineHeight:te,format:m,globalScale:h,drawImage:!1,textDrawer:()=>{}});const me=re();t.setTransform(1,0,0,1,0,0),t.fillStyle=me.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},go={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},fo=async e=>{var t,a;let{ctx:r,value:n,format:i,metricMethod:o,size:l,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:b}=rn(null!==(t=null===(a=we[i])||void 0===a?void 0:a[l])&&void 0!==t?t:we.tcg.medium,c),p=ln({tcg:Ie,ocg:Re}[i],c),h={...p,metricMethod:null!==o&&void 0!==o?o:p.metricMethod},{font:g}=h,f=go[l],v=h.fontList[f],y=Xr({defaultFamily:g,defaultSize:`${v.fontSize}px`}),x={fontLevel:f,fontData:h,currentFont:y};let j=0;const O=x.fontData.fontList[x.fontLevel].lineHeight;r.font=y.getFont(),r.textAlign="left";const w=Wi(n,i,{multiline:!1,furiganaHelper:s}),k=Gr(e=>{const{currentLineCount:t,currentLineList:a}=Hi({ctx:r,median:e,paragraphList:[w],format:i,textData:x,width:b,lineHeight:O,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)})/1e3;r.scale(k,1);const S=await $i({ctx:r,tokenList:Ii(w),xRatio:k,yRatio:1,trueEdge:"left"===d?u:u-j*k,trueBaseline:m,lineHeight:O,textData:x,format:i,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...S,xRatio:k}},{finishTypeCardWidth:vo,width:yo,iconHeight:xo,iconWidth:jo}=s,Oo=function(e,t,a,r,n,i){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:te;const l=a*i,s=r*i;if(e&&t){const a=n*i;e.font=`${a}px MatrixBoldSmallCaps, Times New Roman`,e.textAlign="left",e.fillStyle=o;const r=Array.from(`${t}`);if(1===r.length){const t=r[0],n=l-e.measureText(t).width/2;e.fillText(t,"1"===t?n+2*i:n,s+a)}else if(2===r.length){const t=r[0],n=r[1],i=.825*e.measureText(t).width,o=e.measureText(n).width,c=l-i-("1"===t?0:.1*i);e.fillText(t,c,s+a),e.fillText(n,c+i-("1"===t?"1"===n?.1*e.measureText("1").width:.1*o:-.1*o),s+a)}else{let t=0;r.forEach(a=>{t+=e.measureText(a).width*("1"===a?.7:1)});let n=l-t/2;r.forEach(t=>{e.fillText(t,n,s+a),n+=e.measureText(t).width*("1"===t?.7:1)})}}},wo=e=>{let{ctx:t,txt:a="1<st> Edition",edge:r=99,baseline:n=1150.93,baselineOffset:i=0,width:o=185,option:l={globalScale:1,stroke:!1}}=e;if(!t)return;const{stroke:s=!1,textStyle:c,globalScale:d}=null!==l&&void 0!==l?l:{},u=a.replaceAll("\\<",ut).replaceAll("\\>",mt).split(/(<|>|\d|\xaa|\xba)/g),m=r*d,b=n*d,p=i*d,h=ji({ctx:t,globalScale:d,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}}),g=7.4*d,f=-1*d,v=o*d;let y=m,x=!1,j=0;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(ut,"<").replaceAll(mt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',j+=t.measureText(a).width-2*d)}const O=Math.min(v/j,1);t.scale(O,1),y=m/O,x=!1;for(let w=0;w<u.length;w++){const e=u[w];if(""===e)continue;if("<"===e){x=!0;continue}if(">"===e){x=!1;continue}const a=e.replaceAll(ut,"<").replaceAll(mt,">");x?(t.font=17.78*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,b-g+p),s&&t.strokeText(a,y,b-g),y+=t.measureText(a).width):isNaN(parseInt(a))?"\xaa"===a||"\xba"===a?(t.font=28*d+"px palatino-linotype-bold",t.fillText(a,y,b-f+p),s&&t.strokeText(a,y,b-f),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,b+p),s&&t.strokeText(a,y,b),y+=t.measureText(a).width):(t.font=21*d+'px "ITC Stone Serif Std Semibold"',t.fillText(a,y,b+p),s&&t.strokeText(a,y,b),y+=t.measureText(a).width-2*d)}t.resetTransform(),h()},ko=(e,t,a,r,n)=>{if(!e)return;const i=a*n,o=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const l=hi(e,t,.075,i,o/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,hi(e,"/",.15,l+5*n,o/1.01),e.setTransform(1,0,0,1,0,0)},So=(e,t,a,r,n)=>{if(!e||null==t)return;const i=a*n,o=r*n,l=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*n}px matrix`,e.fillText(t,i+l,o);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*n}px MatrixBoldSmallCaps`,e.fillText(t,i+l,o/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce((t,r,i)=>{e.font=37*n+"px MatrixBoldSmallCaps";let o=t+e.measureText(r).width;return i<a.length-1&&(e.font=37*n+"px matrix",o+=e.measureText("?").width),o},0);if(r>0){const t=Math.min(l/r,1);e.scale(t,1),a.reduce((r,i,l,s)=>{const c=s[s.length-1-l];let d=r;return e.font=37*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+o),l<a.length-1&&(e.font=34*n+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,o/1.29-1),e.setTransform(1,0,0,1,0,0)),d},i+l),e.scale(1/t,1)}}},{height:Co,width:Fo,finishTypeCardWidth:Lo,finishTypeCardHeight:To,stickerX:No,stickerY:Io,stickerSize:Ro}=s,Eo=(e,t,a)=>{const{card:n}=ti(),{exportCanvasRef:i,artworkCanvasRef:o,backgroundCanvasRef:l,frameCanvasRef:s,creatorCanvasRef:u,effectCanvasRef:b,nameCanvasRef:p,passwordCanvasRef:h,pendulumEffectCanvasRef:g,pendulumScaleCanvasRef:f,setIdCanvasRef:x,statCanvasRef:j,stickerCanvasRef:O,cardIconCanvasRef:w,typeCanvasRef:k,finishCanvasRef:S,lightboxRef:F,previewCanvasRef:L}=t,{format:T,region:N,legacyTemplate:I,hasBackground:R,backgroundType:M,frame:P,foil:A,finish:D,artFinish:H,otherFinish:B,opacity:W,name:$,nameStyle:Y,nameStyleType:K,effectTextStyle:U,pendulumTextStyle:X,typeTextStyle:q,statTextStyle:V,otherTextStyle:_,effect:J,effectStyle:Q,typeAbility:Z,isPendulum:ee,pendulumFrame:ae,pendulumRightFrame:re,pendulumEffect:ne,pendulumScaleBlue:ie,pendulumScaleRed:oe,pendulumStyle:le,pendulumSize:se,leftFrame:ce,rightFrame:de,dyeList:me,atk:be,def:pe,linkMap:he,linkRating:ge,attribute:fe,attributeType:ve,cardIcon:ye,subFamily:xe,star:we,starAlignment:Ce,starList:Fe,setId:Le,password:Ie,creator:Re,sticker:ze,isLegacyCard:Pe,isFirstEdition:Ae,isDuelTerminalCard:De,isSpeedCard:He,isLimitedEdition:Be,cornerText:We,hasCornerText:$e,firstEditionText:Ye,furiganaHelper:Ke,flag:Ue}=n,Ge=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},effect:{name:"effect",order:6,rerun:0,instructor:()=>Promise.resolve()},pendulumEffect:{name:"pendulumEffect",order:7,rerun:0,instructor:()=>Promise.resolve()},otherText:{name:"otherText",order:7,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:9,rerun:0,instructor:()=>Promise.resolve()}}),qe=Q.background,Ve=le.background,_e=Q.minLine,Je=le.minLine,Qe=Q.justifyRatio,Ze=le.justifyRatio,et="auto"===ae?ee?"spell":P:ae,tt=null===Q||void 0===Q?void 0:Q.condenseTolerant,at=(e=>"normal"===e.frame&&Ja(e))(n),rt=(e=>"xyz"===e.frame)(n),nt=(e=>!0===e.isLink)(n),it=Ja(n),ot=_a(n),{body:lt=100,boundless:st}=W,ct=!!(lt<50||st),dt=er(et),{bottomRightFrame:ut}=rr({frame:P,topLeftFrame:ce,topRightFrame:de,bottomLeftFrame:ae,bottomRightFrame:re,effectBackground:qe,pendulumEffectBackground:Ve},ee),mt=er(ut),bt=Za(P),{levelStyle:pt,resolvedEffectTextStyle:ht,resolvedPendulumEffectTextStyle:gt,resolvedStatTextStyle:ft,resolvedTypeTextStyle:vt,resolvedOtherEffectTextStyle:yt}=Object(r.useMemo)(()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:i,statTextStyle:o,typeTextStyle:l}=e;const s={color:t?"#ffffff":te},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,b]=r,p=d?{...m?{y:0,blur:4,shadowColor:b}:{},color:u}:{},[h,g,f,v]=n,y=h?{...f?{y:0,blur:4,shadowColor:v}:{},color:g}:{},[x,j,O,w]=l,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,C,F,L]=o,T=S?{...F?{y:1,blur:1,shadowColor:L}:{},color:C}:{},[N,I,R,E]=i;return{levelStyle:c,resolvedEffectTextStyle:p,resolvedOtherEffectTextStyle:N?{...R?{y:0,blur:0,shadowColor:E}:{},color:I}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:T,resolvedTypeTextStyle:k}})({lightFooter:dt,lightHeader:bt,requireShadow:ct,effectTextStyle:U,pendulumTextStyle:X,otherTextStyle:_,statTextStyle:V,typeTextStyle:q}),[dt,bt,ct,U,X,_,V,q]),xt=me[6],jt=xe.toUpperCase(),Ot=Z.map(e=>e.trim()).join("ocg"===T?"\uff0f":"\u200a/\u200a"),[wt,kt,St]=Ue,Ct=!ee&&!it&&nt&&!(be||pe),Ft=ar(kt,nt)&&!Ct,Lt=Ft&&wt,Tt=!(!be&&!pe)||Ft||!(!ee||!Le),Nt=Ot.length>0&&("auto"===ye?it||ot:"st"!==ye),It=!(""===(null!==ie&&void 0!==ie?ie:"")),Rt=!(""===(null!==oe&&void 0!==oe?oe:"")),{isInitializing:Et,imageChangeCount:Mt,language:zt,globalScale:Pt}=a,At=e&&!1===Et,Dt=Object(r.useMemo)(()=>vi(D,v),[D]),Ht=Object(r.useMemo)(()=>vi([H],y),[H]),[,Bt,Wt]=B;Object(r.useEffect)(()=>{At&&(Ge.current.frame.rerun+=1,Ge.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=o.current,r=l.current;if(!fi(t)||!s.current)return;const n={...d(),...W},{effectBox:i,artBorder:u,body:b,text:p,boundless:h,baseFill:g,frameBorder:f}=n,v=(e,t,a,r,n,i)=>new Promise(o=>{setTimeout(()=>{e.fillStyle=R?null!==i&&void 0!==i?i:g:c,e.fillRect(t,a,r,n),o(!0)},0)}),y=b>0||u,{drawAttribute:x,drawBackground:j,drawCardArt:O,drawFrame:w,drawPendulumScaleIcon:k,drawStar:S,drawNameBackground:C,drawEffectBackground:F,drawFrameBorder:L,drawNameBorder:T,drawArtBorder:E,drawPendulumBorder:z,drawBorderPendulumFinish:D,drawEffectBorder:H,drawCardBorder:$,drawStatBorder:Y,drawAttributeFinish:K,drawArtBorderFoil:U,drawEffectBorderFoil:G,drawNameFinish:X,drawArtFinish:q,drawArtOverlayFinish:V,drawArtBorderFinish:_,drawPendulumArtBorderFinish:J,drawFrameFinish:Q,drawFrameBackgroundFinish:Z,drawOverlayFinish:te,drawCardBorderFinish:ne}=po({canvas:s.current,artworkCanvas:a,backgroundCanvas:r,globalScale:Pt,region:N,legacyTemplate:I,frame:P,leftFrame:ce,pendulumFrame:ae,rightFrame:de,pendulumRightFrame:re,dyeList:me,effectBackground:qe,pendulumEffectBackground:Ve,hasBackground:R,backgroundType:M,attribute:fe,attributeType:ve,cardIcon:ye,star:we,starList:Fe,foil:A,pendulumSize:se,opacity:n,isLink:nt,isSpeedSkill:ot,isXyz:rt,isPendulum:ee,pendulumFrameTypeMap:{red:Rt?"normal":"scaleless",blue:It?"normal":"scaleless"},otherFinish:B,loopFinish:Dt,loopArtFinish:Ht});await v(t,0,0,Pt*Fo,Pt*Co);const{canvas:ie,ctx:oe}=va(Fo*Pt,Co*Pt);a&&oe&&O(oe),await q(oe),await V(oe);const{canvas:le,ctx:ue}=va(Fo*Pt,Co*Pt);if(ue&&await v(ue,0,0,Pt*Fo,Pt*Co),r&&ue&&await j(ue,y),"strict"===M&&p<100&&ue&&await F({externalCtx:ue,blendWithBackground:!1,withPendulum:ee}),!h&&ue&&ue.drawImage(ie,0,0),t.drawImage(le,0,0),await w(),await $(),await ne(),ee||(h||await C(),h||!i&&R||(await F({}),await H(),await G()),await E(),await U(),await _()),ee&&!h){const{artX:e,artY:a,artWidth:r,ratio:n}=m(ee,W,void 0,se);t.drawImage(le,Pt*e,Pt*a,Pt*r,Pt*r/n,Pt*e,Pt*a,Pt*r,Pt*r/n),await C(),await F({withPendulum:!0}),await k(),await z(y,"normal"),"normal"!==A&&await z(y,A,!0),await J(),y&&await D()}if(h||(await Q(),await X()),y&&await Z(),h){await C(),await X(),await T(),nt&&!ee?await _():ee&&(y&&(await z(y,"normal"),"normal"!==A&&await z(y,A,!0)),await J());const{artX:e,artY:a,artWidth:r,ratio:n}=m(ee,W,"full",se);f&&await L(),t.drawImage(ie,Pt*e,Pt*a,Pt*r,Pt*r/n,Pt*e,Pt*a,Pt*r,Pt*r/n),f||await L(),ee?(await F({withPendulum:!0}),await k(),await z(!1,"normal"),"normal"!==A&&await z(!1,A,!0),await D()):i&&(await F({}),await H(),await G()),await Q()}Tt&&await Y({color:"#000000",...ft}),h||(await T(),await L());try{await x()}catch(be){console.error("drawAttribute error",be)}if(await K(),await S({style:pt,starAlignment:Ce}),Ft&&Tt){const e=ji({ctx:t,...ft,globalScale:Pt}),a="string"===typeof ge&&ge.length>0?ge:`${Array.isArray(he)?he.length:0}`;await(async(e,t,a,r)=>{const n=e.getContext("2d");if(!n||"string"!==typeof t)return;await Li(e,"link/link-text.png",...nn([600,1080,120,30],r),r,a);const i=isNaN(Number(t))?1106:1105,o=ji({ctx:n,...a,globalScale:r});n.textAlign="right",n.scale(1.2,1),n.font=`bold ${24*r}px RoGSanSrfStd-Bd`,n.fillText(`${t}`,622.75*r,i*r),n.setTransform(1,0,0,1,0,0),n.textAlign="left",o()})(s.current,a,ft,Pt),e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:i,isDuelTerminalCard:o,isSpeedCard:l,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(o){const e=n?[255,1072,175,35]:i?[151,848,216,24]:[80,843,270,30];await Li(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...nn(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(l){const e=n?[255,1084,176.4,25]:i?[151,854,215.6,22]:[80,850,245,25];await Li(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...nn(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:Pt,type:dt&&!ee?"white":"black",bordered:(b<50||h)&&!ee,isDuelTerminalCard:De,isSpeedCard:He,isLink:nt,isPendulum:ee,textStyle:yt}),await te()})},[At,Pt,o,fe,ve,l,M,ye,me,qe,D,A,T,P,s,R,De,nt,ee,He,ot,rt,ce,I,pt,dt,he,ge,Ht,Dt,W,B,Ve,ae,re,se,N,yt,ft,de,Ft,we,Ce,Fe,Tt,It,Rt,Mt]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");if(fi(t)&&ee){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=ue[se],i=gt.color;""!==(null!==ie&&void 0!==ie?ie:"")&&Oo(t,ie,e,r,n,Pt,i),""!==(null!==oe&&void 0!==oe?oe:"")&&Oo(t,oe,a,r,n,Pt,i)}},[At,Pt,ee,se,ie,oe,f,gt]),Object(r.useEffect)(()=>{At&&(Ge.current.name.rerun+=1,Ge.current.name.instructor=async()=>{var e;const t=null===(e=p.current)||void 0===e?void 0:e.getContext("2d");fi(t)&&p.current&&await ho(p.current,t,$,"tcg"===T?63:68,116,fe===C?"tcg"===T?688:674:"tcg"===T?608:598,nr({format:T,frame:P,nameStyle:Y,nameStyleType:K,foil:A}),{isSpeedSkill:ot,format:T,frame:P,furiganaHelper:Ke,globalScale:Pt})})},[At,Pt,fe,A,T,P,Ke,ot,$,p,Y,K]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(!fi(t)||!Tt)return;const a=ji({ctx:t,...ft,globalScale:Pt}),r=Ft;if(be){const e=((Ft?!!pe&&Lt:!!pe)?168.75:0)+(r?168.75:0);ko(t,"ATK",600.85-e,1106,Pt),So(t,be.trim(),677.574-e,1106.5,Pt)}if(pe&&(!Ft||Lt)){const e=r?168.75:0;ko(t,"DEF",600.85-e,1106,Pt),So(t,pe.trim(),673.865-e,1106.5,Pt)}a()},[At,Pt,be,pe,Ft,it,Lt,ft,j,Tt]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");fi(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:i,withShadow:o,format:l,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${o?"bold":""} ${22*r}px stone-serif-regular, Times New Roman`,"ocg"===l&&(d=.145,u=-1,m=-3);const b=ji({ctx:e,color:s&&!n?"#ffffff":te,shadowColor:o?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:o&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?hi(e,t,d,(66.65+m)*r,(1105.01+u)*r):i?gi(e,t,d,(666.56+m)*r,(872.94+u)*r):gi(e,t,d,(728.78+m)*r,(871.5+u)*r),b()})(t,Le,{globalScale:Pt,isLink:nt,isPendulum:ee,withShadow:ct&&!ee,format:T,lightFooter:mt,textStyle:yt})},[At,Pt,T,nt,ee,mt,x,Le,ot,et,ct,yt]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=h.current)||void 0===e?void 0:e.getContext("2d");Ge.current.otherText.rerun+=1,Ge.current.otherText.instructor=async()=>{if(!fi(t))return;const e=/^[0-9]*$/.test(Ie),a=e&&ee&&nt,{rightEdge:r}=await(async e=>{var t,a;let{ctx:r,globalScale:n,value:i,format:o,alignment:l,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:b}=e;if(!fi(r))return{rightEdge:0};const p=ji({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=rn(null!==(t=Se[o])&&void 0!==t?t:Se.tcg,n),v=ln(Ne[o],n),{font:y}=v,x=Wi(i,o,{multiline:!1,furiganaHelper:!1});let j={fontLevel:b,fontData:v,currentFont:Xr()},O=0;const w=j.fontData.fontList[j.fontLevel].lineHeight;let k=1e3,S=v.fontList[0];for(let T=0;T<v.fontList.length;T++){S=v.fontList[T];const e=Xr({defaultFamily:y,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",k=Gr(e=>{const{currentLineCount:i,currentLineList:l}=Hi({ctx:r,median:e,paragraphList:[x],format:o,textData:t,width:f,lineHeight:w,globalScale:n});return!(i>1)&&(a=l[0].actualLineWidth,!0)}),O=a,j=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=on(G,n),L=await $i({ctx:r,tokenList:Ii(x),xRatio:C,yRatio:1,trueEdge:"left"===l?h+c:h-c-O*C,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+s,lineHeight:w,textData:j,format:o,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),p(),{rightEdge:L.tokenEdge}})({ctx:t,globalScale:Pt,value:Ie,lightFooter:dt,alignment:"left",edgeOffset:(a?80:0)*Pt,format:T,hasShadow:"zarc"===et||ct,textStyle:yt,fontLevel:e?0:1}),n=(Pe||!e)&&!ee;if(Ae){const a=!ee||!!e,i=n?nt?151:89:Math.max(r/Pt+14.813,154.2)-("ocg"===T?7:0),o=n?871:1150.93,l=n?0:ot?-2:-1,s=n?ee?683:475:nt&&ee?130:0===Re.trim().length?615:185;a&&wo({ctx:t,txt:Ye,edge:i,baseline:o,baselineOffset:l,width:s,option:{stroke:!1,globalScale:Pt,textStyle:{color:dt?"#ffffff":"#000000",...yt}}})}if($e){const e=n?Math.max(r/Pt+14.813,154.2)-("ocg"===T?7:0):ee?65:nt?151:89,a=n?1150.93:871,i=n?ot?-2:-1:ee?"small"===se?-100:-140:0,o=n?0===Re.trim().length?615:185:ee?683:475;wo({ctx:t,txt:We,edge:e,baseline:a,baselineOffset:i,width:o,option:{stroke:!1,globalScale:Pt,textStyle:{color:dt?"#ffffff":"#000000",...yt}}})}}},[At,Pt,Re,et,We,Ye,T,$e,Ae,Pe,nt,ee,ot,dt,Ie,h,se,ct,yt]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=u.current)||void 0===e?void 0:e.getContext("2d");Ge.current.creator.rerun+=1,Ge.current.creator.instructor=async()=>{var e;if(!fi(t))return;const a={...d(),...W},{body:r,boundless:n}=a,i=await(async e=>{var t,a;let{ctx:r,value:n,format:i,alignment:o,widthOffset:l=0,edgeOffset:s=0,baselineOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,globalScale:b}=e;if(!fi(r))return;const p=ji({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",y:0,x:0,blur:u?3:0,globalScale:b,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=rn(null!==(t=ke[i])&&void 0!==t?t:ke.tcg,b),v=f+l,y=ln(Te[i],b),{font:x}=y,j=Wi(n,i,{multiline:!1,furiganaHelper:!1});let O={fontLevel:0,fontData:y,currentFont:Xr()},w=0,k=1e3,S=y.fontList[0];for(let T=0;T<y.fontList.length;T++){S=y.fontList[T];const e=Xr({defaultFamily:x,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:y,currentFont:e},a=0;const n=O.fontData.fontList[O.fontLevel].lineHeight;if(r.font=e.getFont(),r.textAlign="left",k=Gr(e=>{const{currentLineCount:o,currentLineList:l}=Hi({ctx:r,median:e,paragraphList:[j],format:i,textData:t,globalScale:b,width:v,lineHeight:n});return!(o>1)&&(a=l[0].actualLineWidth,!0)}),w=a,O=t,k>=1e3)break}const C=k/1e3;r.scale(C,1);const F=on(G,b),L=await $i({ctx:r,tokenList:Ii(j),xRatio:C,yRatio:1,trueEdge:"left"===o?h:h-w*C+s*b,trueBaseline:g+(null!==(a=S.offsetY)&&void 0!==a?a:F.offsetY)+c*b,lineHeight:O.fontData.fontList[O.fontLevel].lineHeight,textData:O,format:i,globalScale:b,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),p(),{leftEdge:"left"===o?h:h-w*C,...L}})({ctx:null===(e=u.current)||void 0===e?void 0:e.getContext("2d"),format:T,value:Re,alignment:"right",edgeOffset:nt&&ee?-20:0,widthOffset:(nt&&ee?-120:0)*Pt,baselineOffset:ot?-2:0,hasShadow:ct,lightFooter:mt,textStyle:yt,globalScale:Pt}),o=("tcg"===T?390:350)*Pt,l=("tcg"===T?30:40)*Pt;var s;Be&&u.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:i,isLegacyCard:o,widthOffset:l,bordered:s,textStyle:c}=e;const d=!o||n?i&&n?[220,1123,150-l/r,37]:[145,1123,240-l/r,37]:i?[151,846,216,36]:[80,843,240,40];await Li(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...nn(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:u.current,ctx:t,globalScale:Pt,type:dt&&!ee?"white":"black",bordered:(r<50||n)&&!ee,isLink:nt,isPendulum:ee,widthOffset:(null!==(s=null===i||void 0===i?void 0:i.leftEdge)&&void 0!==s?s:o)<o?l:0,isLegacyCard:Pe,textStyle:yt})}},[At,Pt,Re,u,b,T,Pe,Be,nt,ee,ot,dt,mt,W,ct,yt]),Object(r.useEffect)(()=>{At&&(Ge.current.sticker.rerun+=1,Ge.current.sticker.instructor=async()=>{var e;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");if(!fi(t))return;const{canvas:a,ctx:r}=va(Fo*Pt,Co*Pt);await(async e=>{let{ctx:t,sticker:a,globalScale:r,x:n,y:i}=e;if(fi(t)){if(a===z)return Promise.resolve();t.scale(r,r),await wi(t,`sticker/sticker-${a.toLowerCase()}.png`,n,i),t.resetTransform()}})({ctx:r,sticker:ze,globalScale:Pt,x:No,y:Io});const n=null!==Wt&&void 0!==Wt?Wt:"normal";if("normal"!==n){const e=vi([n],y),{canvas:i,ctx:o}=va(Fo*Pt,Co*Pt);o&&r&&(o.drawImage(a,0,0),o.scale(Pt,Pt),await e(o,"art",async e=>await wi(o,`finish/finish-typeart-${e}.png`,No-Lo+Ro,Io-To+Ro)),r.globalCompositeOperation="source-in",r.drawImage(i,0,0),t.drawImage(a,0,0))}else t.drawImage(a,0,0)})},[At,Pt,ze,Wt,O,Ht]),Object(r.useEffect)(()=>{var e,t;if(!At)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=k.current)||void 0===t?void 0:t.getContext("2d");Ge.current.effect.rerun+=1,Ge.current.effect.instructor=async()=>{if(!fi(a)||!fi(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==Q&&void 0!==Q?Q:{},i=U[0],o=i?t:0,l=i?at&&"auto"===n||"tcg"===T&&"italic"===n:at,s=await Ki({ctx:a,content:J,isNormal:at,useItalic:l,region:N,condenseTolerant:e,format:T,furiganaHelper:Ke,...Yi({format:T,statInEffect:Tt,typeInEffect:Nt,useItalic:l,frameType:ee&&"large"===se?"pendulumLarge":"normal"}),textStyle:ht,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-o,globalScale:Pt,minLine:_e,justifyRatio:Qe}}),c=null!==Bt&&void 0!==Bt?Bt:"normal",d="normal"!==c?vi([c],y):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:i,frame:o,size:l,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!fi(t))return;const m=r.length>0,b=n!==E&&"large"===l,p=r+(b?"\u29be":""),h=m?"tcg"===i?"large"===l?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!m)return;const g={color:tr(o)&&!_a({frame:o})&&"large"===l?"#ffffff":te,...c},f=ji({ctx:t,...g,globalScale:a}),{iconPositionList:v,xRatio:y}=await fo({ctx:t,format:i,size:l,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});f();let x="ocg"===i?-5:-1,j="ocg"===i?-3:0;if(b){const{edge:e,baseline:r}=v[0],{canvas:i,ctx:o}=va(yo*a,(r+jo)*a);if(await Ci(o,`subfamily/subfamily-${n.toLowerCase()}.png`,()=>e+(.175*jo*y+j)*a,()=>r-.8*jo*a+x*a,()=>jo*a,()=>xo*a),u){const{canvas:e,ctx:n}=va(yo*a,(r+jo)*a);n&&o&&(n.drawImage(i,0,0),n.scale(a,a),await u(n,"art",async e=>await wi(n,`finish/finish-typeart-${e}.png`,(yo-vo)/2,xo)),n.resetTransform(),o.globalCompositeOperation="source-in",o.drawImage(e,0,0),t.drawImage(i,0,0))}else t.drawImage(i,0,0)}})({ctx:r,globalScale:Pt,format:T,frame:P,furiganaHelper:Ke,isMonster:it,textStyle:vt,size:Nt?ee&&"large"===se?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:jt,typeAbility:Ot,loopIconFinish:d})}},[At,Pt,Nt,Tt,Q,J,U,b,_e,Qe,T,N,P,ee,se,Ke,Bt,it,at,vt,ht,jt,Ot,k]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=g.current)||void 0===e?void 0:e.getContext("2d");Ge.current.pendulumEffect.rerun+=1,Ge.current.pendulumEffect.instructor=async()=>{if(fi(t)&&ee){const{upSize:e,fontStyle:a}=null!==le&&void 0!==le?le:{},r=X[0],n=r?e:0,i=!!r&&("tcg"===T&&"italic"===a),o=`${T}-${se}`,l=Oe[It&&Rt?"normal":"scaleless"][se],s=It&&Rt?l:l.map(e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(It?je:0),trueWidth:a-(It?je:0)-(Rt?je:0)}});await Ki({ctx:t,content:ne,isNormal:!1,useItalic:i,fontData:(i?Ee:Me)[o],fontDataKey:o,region:N,textStyle:gt,sizeList:s,condenseTolerant:tt,format:T,furiganaHelper:Ke,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:Pt,minLine:Je,justifyRatio:Ze}})}}},[At,Pt,tt,T,N,ee,Rt,It,se,g,ne,le,X,Je,Ze,Ke,gt]),Object(r.useEffect)(()=>{var e;if(!At)return;const t=null===(e=S.current)||void 0===e?void 0:e.getContext("2d");Ge.current.overlay.rerun+=1,Ge.current.overlay.instructor=async()=>{if(fi(t)){if(nt){const e={...d(),...W},{artBorder:a,body:r,boundless:n}=e,i=r>0||a,{ctx:o,canvas:l}=va(Fo,Co);if(o){await(async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:i,top:o,height:l,width:s}=Xe[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[i,o,s,l];return await Ci(e,`${d}-base${n?"-full":""}.png`,...m),await Ci(e,`${d}-core.png`,...m),c?(await Ci(e,`${u}-base.png`,...m),Ci(e,`${u}-core.png`,...m)):void 0})),e.resetTransform())})(o,1,he,ee?"pendulum":"normal",n||!i),await(async(e,t,a,r,n,i)=>{if(!e)return;const o=Wr.test(i);if("normal"===a&&!o)return;const l=o?"platinum":a,s=async e=>{r?await wi(e,`link/link-overlay-arrow-${l}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:a,top:r,height:i,width:o}=Xe[n][t-1],s=[a,r,o,i];await Ci(e,`link/link-overlay-${t}-${l}.png`,...s)}))};if(e.scale(t,t),o){const{ctx:t,canvas:a}=va();t&&await s(t);const{canvas:r}=Pa(a,i);e.drawImage(r,0,0)}else await s(e);e.resetTransform()})(o,1,A,!1,ee?"pendulum":"normal",xt);const e=St?["1","2","3","4","5","6","7","8","9"].filter(e=>!he.includes(e)):[];for(let t=0;t<e.length;t++){const a=parseInt(e[t]),r=Xe[ee?"pendulum":"normal"][a-1];r&&o.clearRect(r.left,r.top,r.width,r.height)}t.scale(Pt,Pt),t.drawImage(l,0,0),t.scale(1/Pt,1/Pt)}}t.scale(Pt,Pt),await Dt(t,"total-overlay",e=>wi(t,`finish/finish-${e}-total-overlay.png`,0,0)),t.resetTransform()}}},[At,Pt,S,Dt,xt,$,nt,ee,he,W,st,A,ft,Tt,St,s]);const $t=Object(r.useRef)({}),Yt=Object(r.useCallback)(async e=>{const{onError:t,onSuccess:a}=e,r=i.current,n=null===r||void 0===r?void 0:r.getContext("2d");if(r&&n){var o,l,c;fi(n),await Promise.all(Object.values(Ge.current).sort((e,t)=>e.order-t.order).map(e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&$t.current[r]!==a||!$t.current[r]?($t.current[r]=a,t()):Promise.resolve()})).catch(e=>{console.error(e);const t="fail-to-draw-notification";mn.a.close(t),mn.a.error({key:t,message:zt["error.draw.error.message"],description:zt["error.draw.error.description"]})});const e=[s,p,w,f,g,k,b,j,x,h,u,O,S];let i={count:-1,error:null};for(let t=0;t<e.length;t++){const a=await Va(e[t],n,0);"error"===a.status&&(i={count:t,error:a.data})}i.error&&t(i.error),null===(o=F.current)||void 0===o||o.draw(r),null===(l=L.current)||void 0===l||null===(c=l.getContext("2d"))||void 0===c||c.drawImage(r,0,0,r.width,r.height,0,0,Fo,Co),i.error||a()}},[zt,w,u,i,b,S,F,p,h,g,f,x,s,j,O,k,L]);return{drawingPipeline:Ge,onExport:Yt}},Mo="ygocarder-notification",zo=Object(yn.create)(e=>{const{condenseReminder:t,versionReminder:a,faqReminder:r,feedbackReminder:n}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(Mo))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof n&&n,faqReminder:"string"!==typeof r?"":r,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e(e=>{const r={...e.memory,[t]:a};return localStorage.setItem(Mo,JSON.stringify(r)),{memory:r}})},updateNotificationMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(Mo,JSON.stringify(a)),{memory:a}})}}}),Po=e=>{const{targetMemory:t,updateNotification:a}=zo(Object(li.useShallow)(t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}}));return[t,Object(r.useCallback)(t=>a(e,t),[e,a])]};var Ao=a(196),Do=a.n(Ao);const Ho=Object(yn.create)(Object(Tn.subscribeWithSelector)(e=>({visible:!1,setVisible:t=>{e(e=>{let{visible:a}=e;return{visible:null==t?!a:t}})}})));var Bo=a(197),Wo=a.n(Bo);const $o=Object(p.b)(un.a)`
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
`,Yo=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[i,o]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)($o,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||i},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{o(!0);const e=await Promise.all(c.map(e=>{let{file:t,name:a}=e;return new Promise((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:i}=n;if("string"!==typeof i)return void r("Not a valid result");let o=JSON.parse(i);pr(o)&&(o=dr(o));const s=hr(o);let c=null;if(c=l?s?Mr(Zn(o).card).result:o:s?o:dr(Zn(o).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)})})),t=new Wo.a;e.forEach(e=>{let{blob:a,name:r}=e;t.file(r,a)});const a=await t.generateAsync({type:"blob"});wr("convert-result.zip",a,"application/zip"),o(!1),n(!1)}catch(e){console.error(e),mn.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),o(!1)}},children:[Object(h.jsxs)("div",{className:"controller",children:[Object(h.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:dn("toggle-button",l?"reverse":""),onClick:()=>s(e=>!e),children:Object(h.jsx)(hn.a,{})})}),Object(h.jsx)("label",{children:"Yugioh Carder"})]}),Object(h.jsxs)("div",{className:"file-panel",children:[Object(h.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(h.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],i&&Object(h.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(h.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(h.jsx)("div",{className:"file-list",children:c.map(e=>{let{name:t}=e;return Object(h.jsxs)("div",{className:"file-entry",children:[Object(h.jsx)("div",{children:t}),Object(h.jsx)("div",{className:"file-action",children:Object(h.jsx)(gn.a,{disabled:i,onClick:()=>d(e=>e.filter(e=>e.name!==t))})})]},t)})})]})]}),Object(h.jsx)(bn.a,{overlay:t["converter.header.label"],children:Object(h.jsx)(pn,{className:"batch-converter",onClick:()=>n(!0),children:Object(h.jsx)(fn.a,{})})})]})};var Ko=a(78),Uo=a(628),Go=a(654),Xo=a(616),qo=a(242);class Vo extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){qo.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var _o=a(202);const Jo="controls-wrapper",Qo=p.b.div`
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
`,Zo=e=>{let{children:t,...a}=e;return Object(h.jsxs)(Qo,{className:"angle-picker-container",children:[t,Object(h.jsx)(_o.AnglePicker,{...a})]})};var el=a(641),tl=a(642),al=a(643),rl=a(644),nl=a(645),il=a(600),ol=a(636);const ll=Object(p.b)(ol.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,sl=e=>{let{overlayClassName:t,iconProps:a,icon:r=ll,...n}=e;const{className:i,...o}=null!==a&&void 0!==a?a:{};return Object(h.jsx)(il.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...n,children:Object(h.jsx)(r,{className:["explanation-icon",null!==i&&void 0!==i?i:""].join(" "),...o})})};var cl=a(638),dl=a(626);const ul=p.b.span`
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
`,ml=e=>{let{size:t="md",active:a=!1,Icon:r,children:n,onClick:i,iconProps:o,tooltipProps:l,containerProps:s}=e;const{className:c,onClick:d,onKeyDown:u,...m}=null!==s&&void 0!==s?s:{};return Object(h.jsx)(bn.a,{title:null,...l,children:Object(h.jsx)(ul,{$size:t,$active:a,tabIndex:0,...m,onClick:e=>{null===i||void 0===i||i(),null===d||void 0===d||d(e)},onKeyDown:e=>{null===u||void 0===u||u(e),"Enter"===e.key&&(null===i||void 0===i||i())},className:["icon-button",null!==c&&void 0!==c?c:""].join(" "),$freeSize:!r,children:Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsx)(r,{...o}),n]})})})},bl=p.b.div`
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
`,pl=p.a`
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
`,hl=p.b.div`
    ${pl}
`,gl=(e,t)=>{let{onChange:a,value:n,optionList:i,children:o,suffix:l,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),b=i.length;return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}})),Object(h.jsxs)(hl,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[o&&Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:o}),Object(h.jsx)("div",{ref:m,className:"radio-train-input-group",...tn({setFocus:u,optionLength:b,onTrigger:()=>{const e=i[d];e&&a(e.value)}}),children:i.map((e,t)=>{let{value:r,props:i,label:o,tooltipProps:l}=e;const{className:s}=null!==i&&void 0!==i?i:{},u=c?r===n:`${r}`===`${n}`;return Object(h.jsx)(bn.a,{overlay:null,...l,children:Object(h.jsxs)("label",{...i,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(h.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(h.jsx)("span",{className:"ant-radio-button-inner"})}),Object(h.jsx)("span",{className:"label",children:o})]})},r)})}),l]})},fl=Object(r.forwardRef)(gl);var vl=a(623);const yl=p.b.div`
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
`;var xl=a(203),jl=a.n(xl),Ol=a(637);const wl=p.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,kl=p.a`
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
`,Sl=Object(p.b)(wl)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    ${kl}
`,Cl=e=>{let{data:t,children:a,disabled:n,overlay:i=Object(h.jsx)(Ol.a,{}),container:o}=e;const[l,s]=Object(r.useState)(!1);return Object(h.jsxs)(o,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,jl()("number"===typeof a?`${a}`:a),s(!0),setTimeout(()=>{s(!1)},1e3)},children:[l?Object(h.jsx)("div",{className:"copiable-overlay",children:i}):null,a]})},Fl=e=>{let{data:t,children:a}=e;return Object(h.jsx)(Cl,{data:t,container:Sl,children:a})},Ll=p.b.div`
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
`,Tl=Object(p.b)(Ll)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Nl=e=>{let{content:t,children:a,...r}=e;return t?Object(h.jsx)(il.a,{content:t,...r,children:a}):Object(h.jsx)(h.Fragment,{children:a})},Il=p.b.button`
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
`,Rl=p.b.div`
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
`,El=p.b.div`
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
`,Ml=p.b.div`
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
`,zl=p.b.div`
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
`,Pl=e=>{let{width:t,height:a,warning:r=!1,...n}=e;return Object(h.jsxs)(zl,{$warning:r,...n,children:[Object(h.jsx)("span",{className:"left-part",children:t}),Object(h.jsx)("span",{children:"\xd7"}),Object(h.jsx)("span",{className:"right-part",children:a})]})},Al=p.c`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,Dl=p.b.div`
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
    ${p.a`animation: ${Al} 6s linear infinite;`}
`,Hl=Object(p.b)(vl.a)`
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
`,Bl=p.b.div`
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
`,Wl=p.c`
    to {
        transform: rotate(360deg);
    }
`,$l=p.b.div`
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
`,Yl=Object(p.b)(bl)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":p.a`animation: ${Wl} 12s linear infinite;`}}
        }
    }
`,Kl=()=>{const e=Fn(),{setting:t,updateSetting:a}=ai(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}}),{allowHotkey:r,exportFormat:n,reduceMotionColor:i,resolution:o,showCreativeOption:l,showExtraDecorativeOption:s,slidingType:c}=t;return Object(h.jsx)(Yl,{className:"setting-button",$softMode:i,children:Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(h.jsxs)($l,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(dl.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(dl.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(dl.a,{checked:l,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(h.jsx)("div",{children:Object(h.jsx)(bn.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(h.jsx)(dl.a,{checked:r,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(h.jsx)(fl,{className:"resolution-list",value:`${o[0]}x${o[1]}`,optionList:ba.map(t=>{let{height:a,width:r,label:n,scale:i}=t;return{value:`${r}x${a}`,label:i>1?Object(h.jsx)(il.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(h.jsx)(Tl,{children:e["setting.option.resolution.warning"]}),children:Object(h.jsx)(Pl,{width:r,height:a,warning:!0})}):Object(h.jsx)(Pl,{width:r,height:a})}}),onChange:e=>{const t=ma[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(h.jsx)(fl,{value:n,optionList:pa,onChange:e=>{a({exportFormat:e})}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"list-option",children:e["setting.option.sliding-type.label"]}),Object(h.jsx)(fl,{value:c,optionList:ha(e),onChange:e=>{a({slidingType:e})}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(cl.a,{}),Object(h.jsx)("label",{children:e["setting.button.label"]})]})})})};var Ul=a(624);const Gl=p.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,Xl=p.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #2a2a2a inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?p.a`animation: 2s linear 350ms 4 ${Gl};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,ql=Object(p.b)(Xl)`
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
`,Vl=p.b.div`
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
`,_l=p.b.li`
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
`,Jl=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),Ql=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{n(!0);const e=await Jl.getLog();n(!1),t(e)})()},[]),0!==e.length||a?a?Object(h.jsx)("div",{children:"Loading changelog..."}):Object(h.jsx)("div",{children:e.map((e,t)=>{let{logList:a,version:r}=e;return Object(h.jsxs)("div",{className:"log-section",children:[Object(h.jsx)("b",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("ul",{children:a.map((e,t)=>{let{content:a,image:n}=e;return Object(h.jsxs)(_l,{children:[Object(h.jsx)("div",{className:"content",children:a}),n&&Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,title:"Click to open in new tab",children:Object(h.jsx)("img",{src:n,alt:`version-${r}-illust`})})]},t)})})]},`${r}-${t}`)})}):Object(h.jsx)("div",{children:"No changelogs"})},Zl=Object(p.b)(Tl)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,es=Object(r.memo)(()=>{var e;const[t,a]=Object(r.useState)(!1),[n,i]=Po("versionReminder");return Object(r.useEffect)(()=>{if(n){var e;const t=null!==(e="2.4.6")?e:"0.0.0",r=n;i("2.4.6"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[i,o,l]=String(t).split(".").map(Number);return a!==i?a>i:r!==o?r>o:n>l})(t,r)&&(a(!0),setTimeout(()=>{a(!1)},8e3))}},[i,n]),Object(h.jsx)(il.a,{placement:"bottom",content:Object(h.jsx)(Zl,{children:Object(h.jsx)(Ql,{})}),children:Object(h.jsxs)(Xl,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.4.6")?e:"unknown"]})})});var ts=a(614);const as="faq-button",rs=Object(p.b)(Vl)`
    text-align: center;
    blockquote,
    .answer {
        text-align: left;
    }
    img {
        max-height: 400px;
    }
`,ns=e=>{let{image:t,author:a,question:r,children:n}=e;return Object(h.jsxs)(rs,{children:[Object(h.jsxs)("blockquote",{children:[a&&Object(h.jsx)("label",{children:a}),Object(h.jsx)("div",{className:"question",children:r})]}),Object(h.jsx)("div",{className:"answer",children:n}),t&&Object(h.jsx)("img",{className:"image",src:t,alt:"answer preview"})]})},is=()=>{const[e,t]=Object(r.useState)(!1),[a,n]=Object(r.useState)(!1),[i,o]=Po("faqReminder"),[l,s]=Po("feedbackReminder");Object(r.useEffect)(()=>{const e="06/04/2026";i!==e&&(o(e),n(!0),setTimeout(()=>{n(!1)},8e3))},[o,i]),Object(r.useEffect)(()=>{!0!==l&&(s(!0),n(!0),mn.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{n(!1)}}))},[l,s]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ql,{id:as,$animating:a,onClick:()=>t(e=>!e),children:"FAQ"}),Object(h.jsx)(un.a,{width:600,visible:e,onCancel:()=>t(!1),footer:null,children:Object(h.jsxs)(ts.a,{children:[Object(h.jsxs)(ts.a.TabPane,{tab:"Feedbacks",children:[Object(h.jsx)("div",{children:Object(h.jsx)("i",{children:"Solved or stale (4 weeks of inactive) feedbacks are removed."})}),Object(h.jsx)("br",{}),[{author:"Anonymous at April 05, 2026",question:"Any reason in particular why the Condense tet in the paragraph style tab isn't saved or at least defaulted like almost everything else is? It's pretty convenient as a feature, or rather I've yet to encounter the use case where less condensation is better.\n\nWhat isn't convenient however is how you have to toggle it each time when your load your save file.",answer:"Hi there, I'm not sure if I fully understand your problem. Do you mean the condense option is not saved when you export the card? From my tests, the condense option is still saved correctly when you export the card, then re-import it later or refresh the page. If you could provide the steps to reproduce the issue (and explain what you expect to happen), it would help me resolve the problem."},{author:"Lukas at March 27, 2026",question:"Thanks to the new Utopia overframe card I noticed that the attributes of both spells/ traps aren't aligned like the monsters attributes. Is that intentional or an error? (I reported before without the screenshot, sorry).",answer:"Hi there, I'm not sure I fully understand your feedback, as all attributes (both monsters and spells/traps) appear to be aligned the same way from what I can see. Compared to the Utopia Overframe card, the attribute is slightly larger and misaligned however, which I have already made some updates to it."},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm\nI forgot to mention that the letter "q" also has a similar height issue compared to other letters like the letter "n" while it is in a long card\'s name \ud83d\ude05\ud83d\ude05\ud83d\ude05'},{author:"Yugiohfann at March 20, 2026",question:'Hello again Lauqerm, \nThank you for fixing the height issue of the letter "i" before, but now the issue is back with the letter "n" while it is shifted further down the line compared to the other letters in some long card\'s name such as "Gandora-G the Dragon of Destruction", "Dark Magician the Magician of Black Magic", "Dark Magician Girl the Magician\'s Apprentice".... \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d',answer:"My bad, I have updated the caliberation rule for the letter (again) \ud83d\ude2d\ud83d\ude2d."},{author:"Anonymous at March 19, 2026",question:"I am not sure if this is even feasible, but I think it'd be mighty convenient if there was a feature that allowed you to display the submitted card art mirrored in the card display, to save the bother of mirroring it beforehand.",answer:"Hi, now card artwork / background will allow you to flip the image horizontally / vertically.",image:"https://i.postimg.cc/fT68pVrZ/Screenshot-2026-03-19-at-11-44-37.png"},{author:"RedSupernovaDragon at March 17, 2026",question:'Hello again, I have some news that could help you in fixing the "name box shrinking issue". I tried to see if it was a common problem on similar sites; I typed the whole alphabet and the numbers on YGOPro and found out that it does not have such a defect: letters in the name box shrink normally, keeping their ratio and heights. As your site is objectively superior to YGOpro in terms of card making, image quality and UI, I was wondering if you could try something more to fix the issue, particularly on pc but mobile version would be nice too.\nNamely, you could do 3 things:\n1. Taking inspiration by how YGOpro managed to code the compression. To be clear, this is *not* an incitation to plagiarism, just a small comparison; maybe DevTools can show you how they coded that specific feature, so you can see if there is any substantial difference in the lines. IDK, but there must be a reason why their carder displays the right text at any length.\n2. You could simply try a different font file. I assume you uploaded fonts on this site, perhaps the rendering problem is due to the otf / ttf / whatever file itself.\n3. Finally, you could focus on mastering the manipulation of curved strokes, what is currently difficult for you. You managed to fix basically every other letter, at least on PC; on mobile there are still some issues even with E and I, but that may be related to my browser.\n\nI regard this issue as much more fundamental than it seems, since it affects basically every card with a (not so) long name created with your site.\nThere has to be a solution, otherwise it would be really sad to keep this defect. I think that details like this matter, even more than other features. A realistic proxy can have some defects that are not visibile at first glance; those defects do not include a letter O that goes Over the top in the name box, which is one of the first things you read on a card.\n\nI tried to give some suggestions, hoping that my words didn\'t sound too bad or out of place. And I also hope that this problem will be solved sooner or later.\nLooking forward to the next updates!',answer:"Thanks, I know how irritating this problem is, and believe me, I've spent quite a while trying to figure something out over the past years. The cause is very clear, rendering the font in large size causes the problem to appear when they are condensed. I just can't find a way to effectively solve it.\nI appreciate your suggestions though, here is what I have done:\n1. Unfortunately, all other card makers (as far as I know) are closed-source, which means I basically cannot access their codebase to see what they are doing at all.\n2. I did try the font from YGOPro card maker and ygocardmaker.net before, but to no avail.\n3. This is my only tactic right now: keep throwing fixes at the wall to see what sticks \ud83d\ude2d.\nAnyway, I have issued another experimental fix for now. If you encounter the problem again (which unfortunately is likely), please attach an image of the app (the report dialog has a screencapture function). It may help me a bit when evaluating any future fixes. Appreciate your help."},{author:"MaSaHo at March 11, 2026",question:"I recently noticed that Yu-Gi-Oh cards have had several small reformulations throughout the life of the game, which they call \u201cSeries\u201d, and your model is equivalent to Series 10 (the current one). Do you have plans to add the older series layouts at some point in the future?",answer:'Hi there, unfortunately that will require access to old series templates as well as a list of changes made over time, which I currently do not have. The app can only support a few limited options (for example, "small" and "large" pendulum frames, or the old position for the "1st Edition" text), but that is about it.'},{author:"Seamornf at March 09, 2026",question:'Hi! Love the work. I found that because traps in portuguese have the longest name of any attribute currently, the last "A" is getting the shadow from the name border.',answer:"I have updated the issue, thanks for your report."},{author:"RedSupernovaDragon at March 07, 2026",question:'Well, it\'s really unlucky for the name box to have those shrinking issues that you cannot fix at the moment. At least the problem was noticed.\nAside from this issue, there is a (very) small UI update you could make: in the frame panel, "Ritual" is currently placed after "Link"; a better position would be between "Effect" and "Fusion", since\n1) Rituals are Main Deck monsters;\n2) they were introduced early along with Fusions;\n3) this "R, F, S, X" order is the most natural, and it\'s found in some cards like the Firewall upgrades..',answer:"Yeah, I'm not the font maker so I can only have limited control over the font rendering. About your recommendation for the ritual frame, it should have been updated now."},{author:"RedSupernovaDragon at March 05, 2026",question:'Thank you very much for making the paragraph box static.\nWonderful fix for the letters! Unfortunately, there are other similar height issue: on "o"/"O", "q", and some of the numbers (namely 1, 2, and 0). When compression is necessary to fit longer names in the box, all of these characters are taller than they should be to fit on a common line.\nIt\'s a really frustrating issue, I know, especially since the font is supposed to be Regular. Thanks in advance for your working on this issue.',answer:"Right now, it is quite difficult for me to handle characters with curved strokes (like the letters O, Q, and the numbers 0, 3, 6, 9), because they actually protrude slightly beyond the normal top/bottom baselines as far as I can investigate. I might double check the bases of numbers 1 and 2, and that may be it. Sorry for the inconvenience."},{author:"RedSupernovaDragon at March 04, 2026",question:'Hello again, about the "i"/"I" issue, I tried to write the whole alphabet (upper and lower case) in the name box and I have to report the same issue for "E" and "N", at least from pc version.',answer:"Now this is really getting out of hand \ud83d\ude2d. I have issued another fix for this."},{author:"RedSupernovaDragon at March 03, 2026",question:"Hello! First off, thank you very much for this cardmaker, I'm new to custom cards but this  carder has already become my favourite.\nI'm using the site on pc, and noticed that when you open the \"Paragraph Style\" section, its width does not stay fixed like the other settings, but it slides to the right until it eventually stops. I was wondering if you could fix this by making it static, since it's kind of difficult to select the things you want while they're moving.\nThank you again for your work!",answer:"The paragraph panel should have fixed width now."},{author:"Yugiohfann at March 03, 2026",question:'Thank you so much for fixing the "i" letter for me, but it seems the issue has been fixed in the Android version, and the PC version still has the "i" letter sometimes positioned higher and sometimes lower \ud83d\ude2d\ud83d\ude2d.',answer:"It's okay, at least something is working \ud83d\ude2d. If possible, please also send me the report from the app on the bugged browser (it seems you send most of your reports from Chrome on a mobile device). The report will include additional information about your browser that may help me investigate further. Sorry for the inconvenience."},{author:"Yugiohfann at March 02, 2026",question:'I use 813x1185 resolution, can you adjust the height of the letter "i" so that it\'s the same height as the other letters in the name box? Thank you.',answer:"I have updated the font a bit, if this does not improve your issue I'm sorry I cannot do much more to help."},{author:"MaSaHo at March 01, 2026",question:"Is there a plan to update the foil border? I mean, adding the rainbow pattern of the new Overframe cards, as well as the assets from the Grand Master version?",answer:"I would love to but right now I am entirely depend on other artists to provide the assets for those first, so I cannot give a clear ETA on that."},{author:"LigerrFanArt at Feb 24, 2026",question:'Hello,\nI noticed a formatting issue with italic text in the effect box (Normal Monster text).\nWhen a line starts directly with a parenthesis, for example:\n"(This card is always treated as an "Archfiend" card.)"\nthe italic formatting does not activate properly.\nTo make the italics work, I have to manually add a space before the "(" at the beginning of the line. However, adding this space causes the text to shift\nslightly and the font size to shrink, as the entire text box appears to be recalculated and resized.\nIt seems like the issue may be related to how the parser handles lines beginning with a parenthesis.\nJust reporting it in case it helps improve the tool.\nThanks for your work!\n\nLigerrFanArt',answer:"I have fixed the issue T.T"},{author:"TheTonyB at Feb 23, 2026",question:"Spell/Trap icon finishes not working with high-res cards.",answer:"I have fixed the issue."},{author:"El Kebabini at Feb 17, 2026",question:"The german Attribute for Dark Finsternis is wrong. It's too condensed.",answer:"I am sorry but that is the only one that I have access to, I will update it if I can but right now it's really hard to get access to attributes for other languages."},{author:"Long at Feb 16, 2026",question:"Why did you change the font color? The default text used to be black, but now it\u2019s gray, and I don\u2019t think this change was necessary.",answer:"I am experimenting with a new color based on high-res official proxy from Konami site, so it may get further adjusted to fit the nature of the app. But you can always change it to pure black in Effect > Text Style. Sorry for the inconvenience."},{author:"LigerrFanArt at Feb 14, 2026",question:"Hi,\nWhen I disable \u201cbest effort render\u201d to get the rainbow effect on my card, it disables ATK / and DEF / in your menu.\nWould it be possible to add a new section next to Foil, with a Rainbow version alongside Gold and Platinum \u2014 unless you\u2019re already working on that?\nI had to manually add ATK / and DEF / in Photoshop myself.\n\nThx\nLigerrFanArt",answer:"Now best effort render option will no longer affect ATK / DEF texts (always display as long as there are values).\nFor rainbow foil unfortunately I am entirely dependent on the assets I can find, and currently I have no access to the frame assets needed for it."},{author:"Anonymous at Jan 25, 2026",question:"I was thinking it would be nice to have the Rainbow border similar to the Prismatic SR OCG Proxies and the Maximum Gold Premium Rare ones",answer:"I would love to do that, unfortunately I have no access to the frame assets needed."},{author:"Gio at Jan 05, 2026",question:"In Trap cards, the words for the card type are very close together because there isn\u2019t enough spacing between the letters (this doesn\u2019t happen in Spell cards). Also, the letter A is slightly taller than the other letters (I haven\u2019t checked if this happens with other letters as well), and the words look a bit uneven.\nIn Monster cards, the line that is right above ATK and DEF is thicker than in the original cards.\nRegards!",answer:"I have updated the font and spacing, as well as reduced the line thickness for ATK/DEF separator for a bit."},{author:"TheTonyB at Jan 04, 2026",question:'Hey, it\'s me again.\n\nSorry. I noticed the positioning of the edition text is off and the font is slightly wrong. \n\nWhen comparing to a real card, the edition text is too much to the right, it should be shifted to the left closer to the passcode.\n\nAbout the font being slightly off, It\'s more noticeable in the Italian, Portuguese and Spanish presets of the edition text. Compared to my real PT cards, the "\xaa" is wrong, it should be higher and be bold and underlined (it\'s not a problem with the text of the presets, it seems to be the font itself).\n\nLooking closer the font actually seems to be different from the real cards. It looks like the shapes of the letters is slightly different. As examples, the top stroke of the loop of the "d" in the real card seems to match the height of the gap betweeen the base of the "i" and the dot, the current font has that stroke matching the height of the base of the "i" right below the gap, making the "d" appear "taller". The shape of the serif of the "c" also looks diferent, but that\'s about what I could notice comparing this to the microscopic text on an actual TCG card\n\nAnd maybe, I\'m not so sure, but in the real cards the font looks slightly thicker too? I might be wrong about this though as it might be the lighting in my room.\n\nThanks in advance!',answer:'I have updated the edition text offset and fix the ordinal letter "\xaa". As for the font itself, currently there is not much I could do right now as finding another font that matches perfectly is quite hard (at least from what I have access to), so I must leave it as is.'},{author:"TheTonyB at Dec 30, 2025",question:"Hey, Lauqerm! Thanks for adding the Portuguese atributes and custom edition text! (Korean coming soon? :))\n\nAnyway, I have another suggestion:\nSince there's already a legacy placement option in adition to regular placement of the edition text, what if we could have two different edition texts simultaneously, one in each position?\n\nI imagine this may be more complicated to implement, but it would open up more customization potential. I don't mind if this feature isn't added though. I can just edit the card in photoshop if I want both texts, this is more of a suggestion than a feature request.\n\nAs always, keep up the good work. Your card maker is absolutely GOATED.",answer:"I have received an asset donation for PT attributes; hopefully, there will be another one for KR soon.\nI have also added an option for text below the image's left corner. Choosing legacy display will simply switch the positions between it and the edition text."},{author:"Anonymous at Dec 30, 2025",question:"I\u2019d like to use the original attributes in Spanish, where the word extends beyond the limits of the sphere, but when I upload my custom attribute the icon gets compressed and flattened. I designed the attributes from the original Spanish cards in case you\u2019d like to replace them. I\u2019ve also noticed that the Effect Monster card color is a slightly darker shade than the original ones. Here is the link with the attribute icons and the different card frame types, in case you\u2019d like to review it. Thank you, and congratulations\u2014this is the best Card Maker I\u2019ve tried: \nhttps://we.tl/t-niKReItUvF\n\n*If you would like me to modify the attributes to a specific resolution or dimensions, or help you with others languages you can write to me at giohesse7@gmail.com",answer:"Custom attribute will now respect the image's ratio when resizing so it no longer get stretched, I also tried some heuristic approach to ensure that it will be at correct position to avoid more complicated manual placement.\nFor the effect monster background though currently I must leave it as is, but thanks for your report."},{author:"Anonymous at Dec 26, 2025",question:"There is an error with the vowel accent marks in Spanish (e.g., \xe1, \xe9, \xed, \xf3, \xfa). It appears that the font does not support the Spanish language, as the accented characters look completely different from the original font. Could you please fix the font for this language?",answer:"I have tweaked the font a bit, hopefully it looks better now."},{author:"Ebrahim at Dec 24, 2025",question:'An option to maybe reduce the size of the "Edition" section similarly the LIMITED EDITION tag.',answer:"It is a bit cumbersome so for now I will just limit the section's maximum width, the text should auto compress if it is too long."},{author:"Blake at Dec 23, 2025",question:"Did you use boundless cause I\u2019m trying to make the object the image go over the card.",answer:"Yeah boundless layout is the main option to use. But the hard thing here is that you need a transparent artwork to combine with it to make a proper overframe card, which the app cannot help.\nIn any case I plan to readjust the option a bit for more clarity, and also add sample cards for easy demonstration."},{author:"Ebrahim at Dec 23, 2025",question:"when I click on the xyz background template the 1st Edition text is in black not white and it's hard to see please fix immediately.",answer:"It's done, the text should display properly now."},{author:"A-Rex at Dec 22, 2025",question:"Me gustar\xeda poder colocar 1a edici\xf3n\nPero en su lugar aparece 1st Edition\nQuisiera poder poner manualmente eso."},{author:"Ralph at Dec 22, 2025",question:"quisiera poner la marca 1a edici\xf3n\npero en su lugar pone 1st edition\nme gustar\xeda poder al menos colocarla manualmente.",answer:"I have implemented a customizable edition text with predefined options, you may try it now."},{author:"Blake at Dec 21, 2025",question:"When are you going to be adding the overframe rare?",answer:"With Layout options the app is already able to create cards with extended art (see attached image), but I will need to tweak some behaviors so it looks more correct.\nGrandmaster Rare however is a different story, as it use an entirely different set of layers and I can only wait for talented artists to extract them.",image:"https://i.imgur.com/a6ZlmEg.png"},{author:"Blake at Dec 18, 2025",question:"I can\u2019t download the card with a new attribute."},{author:"Blake at Dec 18, 2025",question:"It won\u2019t let me upload the card with a custom attribute.",answer:"Hi there, the app will now correctly show what is happening. In short, this is a security feature of your browser (not the app) that protect you from potential dangers of the image link, so you must manually download the image."},{author:"TOVYA at Dec 13, 2025",question:"Ch\xe0o b\u1ea1n, b\u1ea1n c\xf3 th\u1ec3 th\xeam v\xe0o h\u01b0\u1edbng d\u1eabn c\xe1ch ch\u1ea1y project n\xe0y c\u1ee7a b\u1ea1n b\u1eb1ng Docker trong README.md kh\xf4ng \xe1?",answer:"Done nha."},{author:"Anonymous User at Dec 13, 2025",question:"would it be possible to add the ability to upload custom attribute icons?",answer:"Right now I can only support using external link for attribute, so you can upload your custom attribute icon to an image hosting service (e.g., imgur) and use the link in the attribute input box.",image:"https://i.postimg.cc/cJMFW3M1/image.png"},{author:"TheTonyB at Dec 12, 2025",question:'I noticed Korean and Portuguese are missing from Attributes languages. Can you add those? Specially portuguese which is my main language.\nCould you also add other language options to the "1st Edition"/"Limited Edition" text or allow for a custom text?\nThanks and keep up the great work!',answer:"Hi there, unfortunately I have no access to those language sprites, so I cannot add them at the moment (somehow Yugipedia does not have attributes in Portugese and Korean even though they have the rest of official supported languages)."},{author:"Anonymous User at Dec 04, 2025",question:"Hello! I've noticed there's a problem with these 3 new cards :\nMagnet Warrior \u03a3\uff0d\nMagnet Warrior \u03a3\uff0b\nMagnet Warrior \u03a9+\n\nI've noticed that Konami is using new characters, and unfortunately, they're not displaying correctly for creating cards. Could you please fix this?\nThanks in advance.\nLigerrFanArt",answer:"Because those cards do not have an offical TCG version yet, so I will just import OCG font for this case."},{author:"I have assets to donate! at Oct 23, 2025",question:"Konami's new Genesys card searcher initially had high-resolution renders of all cards. I snagged a few before they \"fixed\" it (now their images are low-res again...) and used them to correct all the card frames, bevels, level stars, text boxes, fonts, and even text colors. I'm talking major corrections that took me hours since I'm not very efficient in Photoshop.\nAt the very least, your current Spell and Synchro frames need updating. Not only are the colors off, but there's actually an artifactual defect running across the entire right edge that you inherited from 9558able's frames (it's actually on all of them, but most visible on the Spell frame).\nAs far as I can tell, my updated assets now produce the most accurate proxies anywhere. I would like to donate them! I don't see a way to email you, but please email me at *******88@gmail.com if you're interested.\nI can reply with specifics and send you some comparisons.",answer:"Hi there, thanks for your generosity. I have already emailed you at Oct 24, hopefully I can make some good use out of it."},{author:"Anonymous User at Oct 08, 2025",question:"Missed you so much bro its been a month",answer:"Me too, me too."},{author:"Anonymous User at Sep 28, 2025",question:"For some reason, the border changes depending on the card type even though it's set to Default",answer:"It seems like the card border is not loaded yet, so it exposes the underlying frame. I have replicate your card but does not see the same issue, does the problem still persist?"},{author:"Anonymous User at Sep 26, 2025",question:"hi m8. luv your work. i was thinking about two things. maybe 1 option for anime cards like in Vrains. another option to adjust the colour and saturation of the card frame. thks again for your work",answer:"Hi there, currently I do not have time needed for new templates, but for the color option, have you checking out the Advanced Layout option? If will allow you to change current frame's color at will, which seem suitable for your use-case."},{author:"Elttaest the Master of Duels at Sep 18, 2025",question:"Hi. Love your work, just wondering - with Elttaes, the Master of Duels and Dragon of Illumination, Sanctuary's Shield, shouldn't we have enough data to make Rush Duel cards in English as well? The font seems the same in both English and Japanese. And the card name seems the same used in TCG, although I can't really make out what the Japanese font is. Sorry again for this. Just curious. Thanks for your time",answer:"Hi there, you are right that both cards can be used as a template for Rush Duel cards, but the main problem before the template itself is that currently I don't have enough resources for such project right now, so I can't promise anything at this moment. I will keep this in mind and see if I can do it in the future."},{author:"Armando Giordano at Sep 06, 2025",question:'Thank you for your quick response and for your astonishing work with the Carder. Yes, I am using an iPad and a phone, and, with both devices, when I click on the Download button, it just shows "Saving..." for a second, then no Download starts. I am now on a computer and it works great with left click and "Save as", though it would be nice to be able to use it on mobile.'},{author:"Armando Giordano at Sep 06, 2025",question:"Sorry for second report in a row! I noticed you asked me specific questions. 1 The App does NOT freeze when trying to download on iPad and Android phone. Just no download starts. 2 The problem was immediately experienced because I discovered the Carder just yesterday.",answer:"Now it's a bit strange; usually, if the export process encounters an error, an explicit message will be displayed. In this case, if the download process is already running but no files are downloaded, it could be that your mobile browser is blocking the automatic download due to some advance security settings. All mobile devices I have tested so far do not exhibit the same issue. I will try to investigate this further, but chances are I won't be able to resolve it if I cannot reproduce the issue. Sorry for the inconvenience."},{author:"Armando Giordano at Sep 06, 2025",question:"Hello! I am loving your work. I hope my issue is not because of ignorance, but it seems like it's not possible to download cards as images.",answer:"Hi there, based on the report it seems that you are using an iPad. I don't have an iPad to test right now, but could you please provide me some more information?\n1. When you click the Download button, does anything happen? Does the app freeze or it just not doing anything?\n2. Is the problem just appear recently, or it never worked in the first place?",image:"https://i.postimg.cc/Y2fjyvV2/image.png"},{author:"Rush Duel at Jun 22, 2025",question:"This card maker is amazing! Have you ever consider doing a rush duel section as well?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."}].map((e,t)=>{let{author:a,question:r,answer:n,image:i}=e;return Object(h.jsx)(ns,{author:a,question:r,image:i,children:n},t)})]},"feedback"),Object(h.jsx)(ts.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'},{question:"Will you make another version for Rush Duel cards?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."}].map((e,t)=>{let{question:a,answer:r}=e;return Object(h.jsx)(ns,{question:a,children:r},t)})},"faq")]})})]})};var os=a(601),ls=a(639);const ss=p.b.div`
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
`,cs=e=>{let{language:t,imagePreset:a,onDelete:r,onEdit:n}=e;const{src:i,name:o,width:l,height:s,offsetX:c,offsetY:d}=a,u="number"===typeof c?c>0?`+${c}`:c:"0",m="number"===typeof d?d>0?`+${d}`:d:"0";return Object(h.jsxs)(ss,{children:[Object(h.jsx)("div",{className:"image-preview",children:Object(h.jsx)("img",{src:i,alt:o})}),Object(h.jsxs)("div",{children:[null!==l&&void 0!==l?l:"auto"," \xd7 ",null!==s&&void 0!==s?s:"auto","number"===typeof c||"number"===typeof d?` (${u}, ${m})`:null]}),Object(h.jsxs)("div",{className:"image-info",children:[Object(h.jsx)("div",{className:"image-name",children:Object(h.jsx)(Cl,{data:o,container:Sl,children:o})}),r&&Object(h.jsx)(os.a,{title:t["generic.delete.label"],okText:t["generic.yes.label"],cancelText:t["generic.no.label"],onConfirm:()=>r(),children:Object(h.jsx)(gn.a,{})}),n&&Object(h.jsx)(ls.a,{onClick:()=>n()})]})]})};var ds=a(640);const us=p.b.div`
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
`,ms=140,bs=p.b.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: var(--spacing-xs);
    align-items: center;
    .canvas-container {
        width: ${ms}px;
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
`,ps=e=>{let{frameInfo:t,presetContent:a,active:n=!1,language:i,onOverwrite:o,onActive:l,onDelete:s}=e;const{format:c,foil:d}=ti(Object(li.useShallow)(e=>{let{card:{format:t,foil:a}}=e;return{format:t,foil:a}})),u=Object(r.useRef)(null),{name:m,labelBackgroundColor:b,labelBackgroundImage:p}=null!==t&&void 0!==t?t:{},g=null!==m&&void 0!==m?m:"effect";return Object(r.useEffect)(()=>{const e=u.current,t=null===e||void 0===e?void 0:e.getContext("2d");if(e&&t){t.clearRect(0,0,ms,30);const{font:r}=a;ho(e,t,"OCG"===r?"{\u30ab\u30fc\u30c9\u540d|\u304b\u30fc\u3069\u3081\u3044}":"Card Name","OCG"===r?65:12,"OCG"===r?65:60,350,nr({foil:d,format:c,frame:g,nameStyle:a,nameStyleType:"custom"}),{frame:g,format:c,furiganaHelper:!1,globalScale:.4,isSpeedSkill:!0})}},[d,c,g,a]),Object(h.jsxs)(bs,{className:dn("preset-option",n?"menu-active":""),children:[Object(h.jsx)(us,{className:dn("canvas-container",l?"":"menu-off"),onClick:l,style:{background:b,backgroundImage:p},children:Object(h.jsx)("canvas",{ref:u,width:ms,height:30})}),Object(h.jsxs)("div",{className:"preset-option-action",children:[s&&Object(h.jsx)(os.a,{title:i["generic.delete.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>s(),children:Object(h.jsx)(gn.a,{})}),o&&Object(h.jsx)(os.a,{title:i["generic.overwrite.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>o(),children:Object(h.jsx)(ds.a,{})})]})]})},hs=p.b.div`
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
`,gs=e=>{var t;let{tabIndex:a=0,width:r,height:n,baseLayoutState:i,resolvedLayoutState:o,isPendulum:l,activeLayout:s,dyeList:c,foil:d,onClick:u,onLayoutSelect:m,language:b,vertical:p=!1}=e;return Object(h.jsxs)(hs,{$width:r,$height:n,$layoutHoverable:!!m,$hoverable:!!u,onClick:u,className:dn("card-layout-container",p?"is-vertical":"is-horizontal"),children:[[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map(e=>{var t;let{className:n,key:d}=e;const u=o[d],b=null==k[d]?void 0:c[k[d]];if(!u)return null;if(!l&&"pendulumEffectBackground"===d)return null;const{labelBackgroundColor:p,labelBackgroundImage:g}=null!==(t=Ye[u])&&void 0!==t?t:{};return Object(h.jsx)("button",{...a<0?{}:{tabIndex:a},className:dn(n,d===s?"active":"","auto"===(null===i||void 0===i?void 0:i[d])?"unmodified":""),onClick:()=>null===m||void 0===m?void 0:m(d),style:g?{backgroundImage:g}:{backgroundColor:p},children:Object(h.jsx)("div",{className:"overlay-patch",style:b?{boxShadow:`0 0 0 ${Math.round(r/16)}px ${b} inset`}:{}})},d)}),Object(h.jsx)("button",{...a<0?{}:{tabIndex:a},className:dn("card-layout float-layout foil","foil"===s?"active":""),onClick:()=>null===m||void 0===m?void 0:m("foil"),style:{boxShadow:`0 0 0 2px ${Wr.test(c[k.foil])?c[k.foil]:null===(t=O[d])||void 0===t?void 0:t.color} inset`},children:b["input.foil.label"]})]})},fs=p.b.div`
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
`,vs=e=>{let{onActive:t,onDelete:a,onOverwrite:r,language:n,...i}=e;return Object(h.jsxs)(fs,{className:"frame-preset-option",children:[Object(h.jsx)("div",{className:"preview-container",onClick:t,children:Object(h.jsx)(gs,{...i,language:n})}),Object(h.jsxs)("div",{className:"layout-preset-option-action",children:[a&&Object(h.jsx)(os.a,{title:n["generic.delete.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:a,children:Object(h.jsx)(gn.a,{})}),r&&Object(h.jsx)(os.a,{title:n["generic.overwrite.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:()=>r(),children:Object(h.jsx)(ds.a,{})})]})]})};var ys=a(615),xs=a(619),js=a(602),Os=a(603),ws=a(627);const ks=Object(p.b)(ys.a.Item)`
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
`,Ss=Object(r.forwardRef)((e,t)=>{let{onSubmit:a,onEdit:n,language:i}=e;const[o]=ys.a.useForm(),[l,s]=Object(r.useState)(""),[c,d]=Object(r.useState)(!1),u=()=>{d(!1),s(""),o.resetFields()};return Object(r.useImperativeHandle)(t,()=>({edit:(e,t)=>{o.setFieldsValue(t),s(e),d(!0)}})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Ko.a,{className:"formatting-help-button",type:"primary",size:"small",onClick:()=>{d(!0)},children:i["preset.form.image.add.label"]}),Object(h.jsx)(un.a,{visible:c,width:400,className:"global-overlay",footer:()=>null,onCancel:()=>u(),children:Object(h.jsxs)(ys.a,{form:o,name:"image-preset",layout:"vertical",size:"middle",onFinish:e=>{"string"===typeof l&&""!==l?n(l,e):a(e),u()},onFinishFailed:()=>{mn.a.error({message:i["error.preset-import.message"],description:i["error.preset-import.description"]})},autoComplete:"off",children:[Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.src.label"],name:"src",rules:[{required:!0,message:i["form.required"]}],children:Object(h.jsx)(xs.a,{})}),Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.name.label"],name:"name",rules:[{required:!0,message:i["form.required"]}],children:Object(h.jsx)(xs.a,{})}),Object(h.jsx)("div",{children:i["form.default"]}),Object(h.jsxs)(js.a,{gutter:10,children:[Object(h.jsx)(Os.a,{span:12,children:Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.width.label"],name:"width",children:Object(h.jsx)(ws.a,{step:1,min:0,max:800})})}),Object(h.jsx)(Os.a,{span:12,children:Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.height.label"],name:"height",children:Object(h.jsx)(ws.a,{step:1,min:0,max:800})})})]}),Object(h.jsxs)(js.a,{gutter:10,children:[Object(h.jsx)(Os.a,{span:12,children:Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.offset-x.label"],name:"offsetX",children:Object(h.jsx)(ws.a,{step:1,min:-200,max:200})})}),Object(h.jsx)(Os.a,{span:12,children:Object(h.jsx)(ys.a.Item,{label:i["preset.form.image.offset-y.label"],name:"offsetY",children:Object(h.jsx)(ws.a,{step:1,min:-200,max:200})})})]}),Object(h.jsxs)(ks,{children:[Object(h.jsx)(Ko.a,{onClick:()=>u(),children:i["form.dismiss"]}),Object(h.jsx)(Ko.a,{type:"primary",htmlType:"submit",children:i["form.submit"]})]})]})})]})}),{width:Cs,height:Fs}=s,Ls=Object(p.b)(un.a)`
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
`,Ts=e=>{let{language:t,isPendulum:a,frameInfo:n,importData:i,onCancel:o}=e;const{db:l}=ii(),[s,c]=ci("nameStylePresetList"),[d,u]=ci("layoutPresetList"),{layoutPresetMap:m,nameStylePresetMap:b}=Object(r.useMemo)(()=>({nameStylePresetMap:s.reduce((e,t)=>(e[t.key]=t,e),{}),layoutPresetMap:d.reduce((e,t)=>(e[t.key]=t,e),{})}),[d,s]),{layoutPresetList:p=[],nameStylePresetList:g=[]}=i,[f,v]=Object(r.useState)(()=>({layoutPresetMap:p.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{}),nameStylePresetMap:g.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{})}));return Object(h.jsxs)(Ls,{visible:!0,width:700,maskClosable:!1,okText:t["preset.button.import.label"],cancelText:t["preset.button.discard.label"],onCancel:o,onOk:async()=>{const e=Object.values(f.layoutPresetMap),t=Object.values(f.nameStylePresetMap),a={},r=[],n=[];if(e.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:i,verdict:o}=e;if(r.push({key:t,content:i}),null==m[t]&&"keep-new"===o)n.push({key:t,content:i});else if("keep-both"===o){const e=Object(de.a)();n.push({key:e,content:i})}else a[t]={key:t,content:i}}),l){const e=l.transaction("presetLayoutStore","readwrite");for(const{key:t,content:a}of r)await l.put("presetLayoutStore",{key:t,content:JSON.stringify(a)});await e.done}u(e=>[...e.map(e=>a[e.key]?a[e.key]:e),...n]);const i={},s=[],d=[];if(t.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:a,verdict:r}=e;if(s.push({key:t,content:a}),null==b[t]&&"keep-new"===r)d.push({key:t,content:a});else if("keep-both"===r){const e=Object(de.a)();d.push({key:e,content:a})}else i[t]={key:t,content:a}}),l){const e=l.transaction("presetNameStyleStore","readwrite");for(const{key:t,content:a}of s)await l.put("presetNameStyleStore",{key:t,content:JSON.stringify(a)});await e.done}c(e=>[...e.map(e=>i[e.key]?i[e.key]:e),...d]),o()},children:[Object(h.jsxs)("div",{className:"import-review-title",children:[Object(h.jsx)("h2",{children:t["preset.review-title.label"]}),t["preset.review-description"]]}),Object(h.jsx)("table",{className:"import-action-table",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"import-action-row import-header-row",children:[Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.current.label"]}),Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.new.label"]}),Object(h.jsx)("th",{className:"header-row",children:t["preset.review-table.action.label"]})]}),g.map(e=>{var a;let{key:r,content:i}=e;const o={language:t,frameInfo:n},l=null===(a=b[r])||void 0===a?void 0:a.content,s=f.nameStylePresetMap[r].verdict;return Object(h.jsxs)("tr",{className:dn("import-action-row",s),children:[Object(h.jsx)("td",{className:"current-version",children:l&&Object(h.jsx)(ps,{...o,presetContent:l,children:l.preset})}),Object(h.jsx)("td",{className:"new-version",children:Object(h.jsx)(ps,{...o,presetContent:i,children:i.preset})}),Object(h.jsx)("td",{className:"action-list",children:Object(h.jsxs)("div",{className:"action-panel",children:[Object(h.jsx)(Ko.a,{size:"small",type:"keep-old"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-old"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(h.jsx)(Ko.a,{size:"small",type:"keep-new"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-new"},{...e,nameStylePresetMap:t}}),children:t[l?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),l&&Object(h.jsx)(Ko.a,{size:"small",type:"keep-both"===s?"primary":"default",onClick:()=>v(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-both"},{...e,nameStylePresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},r)}),p.map(e=>{var r,n,i,o,l;let{key:s,content:c}=e;const d={width:Math.round(40*Cs/Fs),height:40,isPendulum:a,tabIndex:-1,language:t},u=null===(r=m[s])||void 0===r?void 0:r.content,b=f.layoutPresetMap[s].verdict;return Object(h.jsxs)("tr",{className:dn("import-action-row",b),children:[Object(h.jsx)("td",{className:"current-version",children:u&&Object(h.jsx)(vs,{resolvedLayoutState:rr({frame:u.frame,topLeftFrame:u.leftFrame,topRightFrame:u.rightFrame,bottomLeftFrame:u.pendulumFrame,bottomRightFrame:u.pendulumRightFrame,effectBackground:null===(n=u.effectStyle)||void 0===n?void 0:n.background,pendulumEffectBackground:null===(i=u.pendulumStyle)||void 0===i?void 0:i.background},a),dyeList:u.dyeList,foil:u.foil,...d})}),Object(h.jsx)("td",{className:"new-version",children:Object(h.jsx)(vs,{resolvedLayoutState:rr({frame:c.frame,topLeftFrame:c.leftFrame,topRightFrame:c.rightFrame,bottomLeftFrame:c.pendulumFrame,bottomRightFrame:c.pendulumRightFrame,effectBackground:null===(o=c.effectStyle)||void 0===o?void 0:o.background,pendulumEffectBackground:null===(l=c.pendulumStyle)||void 0===l?void 0:l.background},a),dyeList:c.dyeList,foil:c.foil,...d})}),Object(h.jsx)("td",{className:"action-list",children:Object(h.jsxs)("div",{className:"action-panel",children:[Object(h.jsx)(Ko.a,{size:"small",type:"keep-old"===b?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-old"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(h.jsx)(Ko.a,{size:"small",type:"keep-new"===b?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-new"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),u&&Object(h.jsx)(Ko.a,{size:"small",type:"keep-both"===b?"primary":"default",onClick:()=>v(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-both"},{...e,layoutPresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},s)})]})})]})},Ns=Object(p.b)(Hl)`
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
`,Is=e=>{let{language:t}=e;const{setVisible:a,visible:n}=Ho(Object(li.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),{frame:i,isPendulum:o}=ti(Object(li.useShallow)(e=>{let{card:{frame:t,isPendulum:a}}=e;return{frame:t,isPendulum:a}})),{db:l}=ii(),[s,c]=ci("nameStylePresetList"),[d,u]=ci("layoutPresetList"),[m,b]=ci("imagePresetList"),[p,g]=Object(r.useState)({visible:!1,layoutPresetList:[],nameStylePresetList:[],imagePresetList:[]}),f=Ye[i],[v,y]=Object(r.useState)(0),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O="preset-import-direct-upload";return Object(h.jsxs)(Ns,{footer:null,width:345,visible:n,title:Object(h.jsxs)("div",{className:"overlay-title",children:[Object(h.jsx)("span",{children:t["preset.manager.label"]}),Object(h.jsx)(gn.a,{onClick:()=>{a(!1)}})]}),onClose:()=>{a(!1)},children:[Object(h.jsx)("div",{children:t["preset.warning.label"]}),Object(h.jsxs)("div",{className:"action-list",children:[Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{const e=JSON.stringify({layoutPresetList:d,nameStylePresetList:s}),t=new Blob([e],{type:"application/json"});wr("preset.json",t,"application/json")},children:t["generic.export.label"]}),Object(h.jsxs)(Ko.a,{size:"small",onClick:()=>{const e=document.getElementById(O);e&&e.click()},children:[t["generic.import.label"],Object(h.jsx)("input",{ref:x,type:"file",id:O,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;(e=>{if(e)for(let a=0;a<=e.length;a++){const r=e.item(a);if(!r)continue;const n=new FileReader;n.onload=e=>{let{target:a}=e;if(!a)return;const{result:r}=a;if("string"===typeof r)try{const{layoutPresetList:e,nameStylePresetList:t,imagePresetList:a}=JSON.parse(r);g({visible:!0,layoutPresetList:e,nameStylePresetList:t,imagePresetList:a})}catch(n){console.error(n),mn.a.error({description:t["error.preset-import.description"],message:t["error.preset-import.message"]})}},n.readAsText(r);break}y(e=>e+1)})(null===(e=x.current)||void 0===e?void 0:e.files)}},`direct-file-input-${v}`)]})]}),Object(h.jsxs)("div",{className:"preset-list name-style-preset-list",children:[Object(h.jsx)("label",{children:t["preset.instruction.name-style.label"]}),s.map(e=>{let{key:a,content:r}=e;return Object(h.jsx)(ps,{language:t,frameInfo:f,presetContent:r,onDelete:async()=>{if(l){const e=l.transaction("presetNameStyleStore","readwrite");await l.delete("presetNameStyleStore",a),await e.done}c(e=>e.filter(e=>e.key!==a))},children:r.preset},a)})]}),Object(h.jsxs)("div",{className:"preset-list layout-preset-list",children:[Object(h.jsx)("label",{children:t["preset.instruction.advanced-frame.label"]}),d.map(e=>{let{content:a,key:r}=e;const{dyeList:n,foil:i,frame:s,pendulumFrame:c,leftFrame:d,pendulumRightFrame:m,rightFrame:b,effectStyle:p,pendulumStyle:g}=a,f={frame:s,topLeftFrame:d,topRightFrame:b,bottomLeftFrame:c,bottomRightFrame:m,effectBackground:null===p||void 0===p?void 0:p.background,pendulumEffectBackground:null===g||void 0===g?void 0:g.background};return Object(h.jsx)(vs,{width:Math.round(40*Cs/Fs),height:40,isPendulum:o,resolvedLayoutState:rr(f,o),tabIndex:-1,dyeList:n,foil:i,language:t,onDelete:async()=>{if(l){const e=l.transaction("presetLayoutStore","readwrite");await l.delete("presetLayoutStore",r),await e.done}u(e=>e.filter(e=>{let{key:t}=e;return r!==t}))}},r)})]}),Object(h.jsxs)("div",{className:"preset-list image-preset-list",children:[Object(h.jsxs)("label",{children:[t["preset.instruction.image.label"],"\xa0",Object(h.jsx)(Ss,{ref:j,language:t,onSubmit:async e=>{const t=Object(de.a)();if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:t,content:JSON.stringify(e)}),await a.done}b(a=>[...a,{key:t,content:{...e}}])},onEdit:async(e,t)=>{if(l){const a=l.transaction("presetImageStore","readwrite");await l.put("presetImageStore",{key:e,content:JSON.stringify(t)}),await a.done}b(a=>a.map(a=>a.key===e?{key:e,content:{...t}}:a))}}),Object(h.jsx)("br",{}),t["preset.instruction.image.head-up.label"]]}),m.map(e=>{let{key:a,content:r}=e;return Object(h.jsx)(cs,{language:t,imagePreset:r,onDelete:async()=>{if(l){const e=l.transaction("presetImageStore","readwrite");await l.delete("presetImageStore",a),await e.done}b(e=>e.filter(e=>{let{key:t}=e;return a!==t}))},onEdit:()=>{var e;null===(e=j.current)||void 0===e||e.edit(a,r)}},a)})]}),p.visible&&Object(h.jsx)(Ts,{onCancel:()=>g(e=>({...e,visible:!1})),importData:p,frameInfo:f,isPendulum:o,language:t})]})},{height:Rs,width:Es}=s,Ms=Object(p.b)(un.a)`
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
                    height: calc(var(--thumb-size) / ${Es} * ${Rs});
                }
            }
        }
    }
`,zs=Object(r.forwardRef)((e,t)=>{let{language:a,applyCardData:n}=e;const[i,o]=Object(r.useState)(!1),{updateSetting:l}=ai(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}});return Object(r.useImperativeHandle)(t,()=>({open:()=>o(!0)})),Object(h.jsxs)(Ms,{visible:i,onCancel:()=>o(!1),okButtonProps:{style:{display:"none"}},cancelText:a["form.dismiss"],children:[Object(h.jsx)("div",{children:a["sample.manager.creative-requires.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("table",{className:"sample-container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:a["sample.manager.header.image.label"]})}),Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:a["sample.manager.header.description.label"]})})]}),[{image:"https://i.postimg.cc/SQDcs87c/image.png",description:"Sample card with custom background and overframe artwork.",value:'{"fm":"tcg","rg":"en","fr":"ritual","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":40,"opnm":100,"opbf":"#0062b1","opab":true,"opnb":true,"opeb":true,"opfb":true,"opbl":true},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Blue-Eyes Chaos MAX Dragon","nst":"custom","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":180,"nscg":"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6","nshg":true,"nshl":true,"nshs":true,"nshfs":"#000000","nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"animeSilver","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"DARK","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/msWo4gh.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":0.686,"arx":34.1036977491961,"ary":32.5614067055394,"arw":44.05144694533762,"arh":49.92711370262391},"hbg":true,"bg":"https://i.postimg.cc/SK4CtGfY/image.png","bgd":"","bf":false,"bgs":"online","bgt":"strict","bgc":{"bgu":"%","bga":1,"bgx":0,"bgy":0,"bgw":100,"bgh":100},"lm":["1","3","7","9"],"lr":"","il":null,"ip":false,"pf":"auto","pe":"","rs":"4","bs":"4","psi":"medium","ta":["Dragon","Ritual","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"You can Ritual Summon this card with \\"Chaos Form\\". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent\'s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.","si":"LDS2-EN016","atk":"4000","def":"0","pw":"55410871","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/Ss0JTL0H/image.png",description:"Sample card with custom image as frame background, custom levels alignment and small pendulum effect's text box.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"platinum","op":{"opbd":100,"oppd":100,"optx":100,"opnm":80,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Malefic Paradulum Dragon","nst":"auto","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":0,"nscg":"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf","nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#000000","nslox":0,"nsloy":0,"nslw":0,"nspt":"none","nspr":"commonB","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"DARK","att":"auto","sf":"NO ICON","it":"auto","st":10,"stl":["level","level","level","level",null,"negative-level","negative-level","negative-level",null,"rank","rank","rank","rank"],"sa":"center","ar":"https://i.imgur.com/cQcxyRQ.jpeg","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1.236,"arx":0,"ary":0,"arw":100,"arh":80.9061488673139},"hbg":true,"bg":"https://i.imgur.com/WpXf0GI.png","bgd":"","bf":false,"bgs":"online","bgt":"frame","bgc":{"bgu":"%","bga":0.686,"bgx":15.449999999999998,"bgy":0,"bgw":68.60000000000001,"bgh":100},"lm":["1","9","3","7"],"lr":"","il":false,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 \\"Malefic\\" Spell / Trap from your Deck to your hand. You can only use this effect of \\"Malefic Paradulum Dragon\\" once per turn.","rs":"0","bs":"0","psi":"small","ta":["Dragon","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"italic","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"Must be Pendulum Summoned, or Special Summoned (from your hand) by banishing 1 \\"Malefic\\" monster from your Extra Deck. While you control no card in your Field Zone, the field is treated as \\"Malefic World\\". Once per turn: You can send 1 \\"Malefic\\" card from your Deck to the GY; return 1 of your banished Level 8 Synchro Monsters to the Extra Deck, then you can Special Summon that monster from the Extra Deck, also you can only attack with \\"Malefic\\" monsters for the rest of this turn.","si":"","atk":"4000","def":"4000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#00007f",true,"#0000FF"],"tts":[false,"#ff0000",true,"#7F0000"],"ets":[false,"#7f0000",true,"#FF0000"],"pts":[false,"#7f0000",true,"#FF0000"],"ots":[false,"#ffffff",true,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/gc8Ccjyq/image.png",description:"Sample card with no frame background, colorized texts, customized level and attribute.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":0,"oppd":65,"optx":55,"opnm":65,"opbf":"#404040","opab":false,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Mega PenduLuMoon","nst":"predefined","ns":{"nsep":90,"nsey":90,"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"ultra","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"https://i.postimg.cc/HxZCQhxH/paranormal.png","att":"custom","sf":"NO ICON","it":"auto","st":"4","stl":[],"sa":"auto","ar":"https://i.imgur.com/JIgmiMj.png","ad":"","as":"online","af":false,"arc":{"arx":31.17030201342282,"ary":0,"arw":37.65939597315436,"arh":100,"aru":"%","ara":0.67},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":99.99999999999999,"bgu":"%","bga":0.67},"lm":["1","3","7","9"],"lr":"","il":null,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 PARANORMAL Pendulum Monster from your Extra Deck to your hand, then destroy this card. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","rs":"0","bs":"0","psi":"medium","ta":["Spellcaster","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"During your Main Phase: You can add up to 2 face-up PARANORMAL Pendulum Monsters from your Extra Deck to your hand, also for the rest of this turn, until you Pendulum Summon, you cannot activate monster effects, except PARANORMAL Monsters\' effects, and the effects of any cards in your Pendulum Zones are negated. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","si":"SMXR-EN025","atk":"400","def":"1400","pw":"45497573","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[true,"#400040",true,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[true,"#000000",true,"#FF00FF"],"pts":[true,"#000000",true,"#FF0000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'},{image:"https://i.postimg.cc/YCPQfmdn/image.png",description:"Sample card with link markers on pendulum frame and custom level placement.",value:'{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Countermoon Dragon","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"rare","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"WATER","att":"auto","sf":"NO ICON","it":"custom","st":12,"stl":["negative-level","negative-level","negative-level","negative-level",null,null,"level","level","level","level","level","level"],"sa":"auto","ar":"https://i.imgur.com/vf0AWDN.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":94.7867298578199,"aru":"%","ara":1.055},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":94.7867298578199,"bgu":"%","bga":1.055},"lm":["1","3","7","9"],"lr":"","il":true,"ip":true,"pf":"auto","pe":"Negate the effects of all face-up Continuous Trap on the field.","rs":"5","bs":"5","psi":"medium","ta":["Wyrm","Synchro","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"[Synchro: 1 Tuner + 1 non-Tuner monster | Link: 2 Wyrm monsters]\\nYou can only Special Summon 1 \\"Countermoon Dragon\\" per turn. If this card is Synchro Summoned: You can target 2 Spells/Traps on the field; destroy them. If this card is Dark Synchro Summoned: You can target 1 monster on the field; destroy it. If this card is Link Summoned: You can Special Summon 1 \\"Countersun Dragon\\" from your Extra Deck, then you can place this card in your Pendulum Zone.","si":"","atk":"1500","def":"3000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}'},{image:"https://i.postimg.cc/ncnLK60H/image.png",description:"Sample card with custom finishes and inline-image in card text.",value:'{"fm":"tcg","rg":"en","fr":"link","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":["type8"],"afn":"type5","of":["normal","normal","normal","normal"],"na":"Promethean Princess, Bestower of Flames","nst":"predefined","ns":{"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshg":false,"nshl":false,"nshs":false,"nslc":"#4d4d4d","nslox":0,"nsloy":0,"nslw":2,"nspt":"none","nspr":"ultra","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"FIRE","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/NywTwhA.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1,"arx":0,"ary":0,"arw":100,"arh":100},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":67,"bgu":"%","bga":1},"lm":["8","4","6"],"lr":"","il":true,"ip":false,"pf":"auto","pe":"","rs":"10","bs":"10","psi":"medium","ta":["Fiend","Link","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"{{2+<img src=\\"https://i.postimg.cc/NFQSRSzT/effect-monster.png\\" offsetY=\\"-4\\" />}} / You cannot Special Summon <img name=\\"monster\\" src=\\"https://i.postimg.cc/RZ0mk6G3/monster.png\\" offsetY=\\"-4\\" />, except <img src=\\"icon-fire\\" /><img name=\\"monster\\" />. You can only use each of the following effects of \\"Promethean Princess, Bestower of Flames\\" once per turn. During your {Main Phase}: You can Special Summon 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> from your {<img name=\\"gy\\" src=\\"https://i.postimg.cc/Pr4159Hv/gy.png\\" />.} If a <img name=\\"monster\\" /> is Special Summoned to your opponent\'s field, while this card is in your <img name=\\"gy\\" /> (except during the Damage Step): You can target 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> you control and 1 <img name=\\"monster\\" /> your opponent controls; destroy them, and if you do, Special Summon this card.","si":"PHNI-EN052","atk":"2700","def":"","pw":"02772337","sti":"holo5","fe":"1<st> Edition","ife":true,"isp":true,"ile":false,"idt":false,"ilc":false,"cr":"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#ffa500",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'}].map(e=>{let{description:t,image:a,value:r}=e;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:a,alt:"Sample Card"})}),Object(h.jsxs)("td",{children:[t,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{l({showCreativeOption:!0,showExtraDecorativeOption:!0}),n(Zn(r).card)},children:"Use sample"})]})]},a)})]})})]})});a(498);const Ps=()=>Object(h.jsx)("div",{className:"affiliation",children:Object(h.jsx)("div",{className:"affiliation-link",children:Object(h.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(el.a,{})})})}),As=Object(p.b)(tl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Ds=Object(p.b)(Tl)`
    font-size: var(--fs-sm);
`,Hs=p.b.div`
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
`,Bs=e=>{let{applyCardData:t}=e;const{language:a,languageInfo:n,languageMetadataMap:i,changeLanguage:o}=Cn(e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}}),{cardList:l,isListDirty:s,toggleVisible:c,visible:d}=Qn(Object(li.useShallow)(e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})),{setVisible:u,visible:m}=Ho(Object(li.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),b=Object(r.useRef)(null);return Object(h.jsxs)("div",{className:"app-header",children:[Object(h.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(h.jsxs)("div",{className:"app-description",children:[Object(h.jsxs)("div",{className:"header-language",children:[Object(h.jsx)("h1",{children:"Yugioh Carder"}),Object(h.jsx)(Ul.a.Group,{value:n.codeName,size:"small",className:"language-option",children:Object.values(i).filter(e=>{let{active:t}=e;return t}).map(e=>{let{codeName:t,name:a}=e;return Object(h.jsx)(Ul.a.Button,{value:t,onChange:e=>o(e.target.value),children:a},t)})}),Object(h.jsx)(bn.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(h.jsx)("span",{id:"sentry-bug-report",className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(as))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(as))||void 0===e||e.classList.remove("js-highlight")},children:Object(h.jsx)("div",{children:a["contributor.bug-report.tooltip"]})})}),Object(h.jsx)(is,{}),Object(h.jsx)(es,{})]}),Object(h.jsxs)("div",{className:"app-contribution",children:[Object(h.jsxs)("span",{className:"app-creator",children:[a["contributor.gui.label"],": ",Object(h.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(h.jsx)(sl,{content:Object(h.jsxs)(Tl,{className:"disclaimer",children:[Object(h.jsx)("h2",{children:a["contributor.disclaimer.label"]}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:a["contributor.disclaimer.line-1"](Object(h.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-2"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-3"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-4"]}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-5"](Object(h.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(h.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(h.jsx)("li",{children:a["contributor.disclaimer.line-6"]})]})]})})]}),Object(h.jsx)("span",{className:"template-creator",children:a["contributor.template-maker"](Object(h.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Grezar"})},"artist-1"),Object(h.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"9558able"})},"artist-2"),Object(h.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(h.jsx)("a",{href:"https://www.deviantart.com/geckoygo",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"GeckoYGO"})},"artist-4"),Object(h.jsx)(sl,{icon:As,content:Object(h.jsx)(Ds,{className:"additional-contributors",children:Object(h.jsxs)("ul",{className:"template-creator",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"icycatelf"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.deviantart.com/neophoenixknight/art/Rebirth-Monsters-686893186",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"NeoPhoenixKnight"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/100006320592457/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Tr\xed D\u0169ng Song To\xe0n"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://www.facebook.com/61577932176567/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("b",{children:"Tr\u1ea7n Quang Anh"})})})]})})},"artist-5"))})]})]}),Object(h.jsx)(Hs,{className:"app-setting",children:Object(h.jsx)(Kl,{})}),Object(h.jsx)(Hs,{className:"card-manager",children:Object(h.jsx)(bl,{className:dn("manager-button-label",d?"manager-active":""),onClick:()=>c(),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(al.a,{}),Object(h.jsx)("label",{children:a["manager.icon.title"]}),s&&l.length>1&&Object(h.jsx)("div",{className:"manager-notice",children:"*"})]})})}),Object(h.jsxs)(Hs,{className:"preset-manager",children:[Object(h.jsx)(bl,{className:dn("preset-manager-button-label",m?"preset-manager-active":""),onClick:()=>u(),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(rl.a,{}),Object(h.jsx)("label",{children:a["preset.manager.label"]})]})}),Object(h.jsx)(Is,{language:a})]}),Object(h.jsxs)(Hs,{className:"sample-card",children:[Object(h.jsx)(bl,{className:dn("preset-sample-button-label"),onClick:()=>{var e;null===(e=b.current)||void 0===e||e.open()},children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(nl.a,{}),Object(h.jsx)("label",{children:a["sample.manager.label"]})]})}),Object(h.jsx)(zs,{ref:b,language:a,applyCardData:t})]})]})},Ws=()=>{const e=Fn();return Object(h.jsxs)(Tl,{className:"disclaimer",children:[Object(h.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(h.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(h.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(h.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},$s=()=>Object(h.jsx)(sl,{overlayClassName:"disclaimer-overlay",content:Object(h.jsx)(Ws,{})});var Ys=a(620),Ks=a(646);a(499);const{Panel:Us}=Ys.a,Gs=p.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,Xs=p.b.div`
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
`,qs=p.b.div`
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
`,Vs=p.b.div`
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
`,_s=e=>{let{path:t,imagePath:a}=e;return Object(h.jsxs)("div",{className:"special-path-item",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:`/ygocarder/asset/image/${a}`,alt:t})}),Object(h.jsx)("div",{className:"path",children:Object(h.jsx)(Fl,{data:t,children:t})})]})},Js=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:i}=null!==a&&void 0!==a?a:{};return Object(h.jsxs)(qs,{className:`image-with-caption ${i}`,children:[Object(h.jsx)("img",{alt:r,...n}),Object(h.jsx)("div",{className:"caption",children:t})]})},Qs=()=>{const[e,t]=Object(r.useState)(!1),a=Fn();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(vl.a,{footer:null,visible:e,width:"60%",title:Object(h.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"],"\xa0\xa0",Object(h.jsx)(Ko.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["generic.close.label"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(h.jsxs)(Gs,{children:[Object(h.jsxs)("p",{children:[a["guide.format.introduction"](Object(h.jsx)(cl.a,{},"icon")),"."]}),Object(h.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(h.jsx)(wl,{children:"["},"open-tag"),Object(h.jsx)(wl,{children:"]"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+1"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+1"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(h.jsx)(wl,{children:"[["},"open-tag"),Object(h.jsx)(wl,{children:"]]"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+Shift+1"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+Shift+1"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(h.jsx)(wl,{children:"{"},"open-tag"),Object(h.jsx)(wl,{children:"}"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+2"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+2"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(h.jsx)(wl,{children:"|"},"separator"),Object(h.jsx)(wl,{children:"Ctrl+3"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+3"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(h.jsx)(wl,{children:"||"},"separator"),Object(h.jsx)(wl,{children:"Ctrl+4"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+4"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(h.jsx)(wl,{children:"{{"},"open-tag"),Object(h.jsx)(wl,{children:"}}"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+5"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+5"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-7.label"]}),a["guide.format.section-7.content"](Object(h.jsx)(wl,{children:"<i>"},"open-tag"),Object(h.jsx)(wl,{children:"</i>"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+I"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+I"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"italic text raw",src:"/ygocarder/asset/image/syntax/syntax-7-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"italic text preview",src:"/ygocarder/asset/image/syntax/syntax-7-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-8.label"]}),a["guide.format.section-8.content"](Object(h.jsx)(wl,{children:"<b>"},"open-tag"),Object(h.jsx)(wl,{children:"</b>"},"close-tag"),Object(h.jsx)(wl,{children:"Ctrl+B"},"hotkey"),Object(h.jsx)(wl,{children:"\u2318+B"},"hokey-alternative")),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"bold text raw",src:"/ygocarder/asset/image/syntax/syntax-8-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"bold text preview",src:"/ygocarder/asset/image/syntax/syntax-8-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(h.jsx)("h2",{children:a["guide.format.section-9.label"]}),a["guide.format.section-9.content"](Object(h.jsx)(wl,{children:"<img />"},"open-tag")),Object(h.jsx)(Ys.a,{ghost:!0,children:Object(h.jsx)(Us,{header:Object(h.jsx)("div",{children:a["guide.format.section-9.special-path.content"]}),children:[Object(h.jsx)(Vs,{children:[...Object.values(A).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(_s,{path:a,imagePath:t},a)})]},"subfamily-st"),Object(h.jsx)(Vs,{children:[...Object.values(W).filter(e=>{let{isOption:t}=e;return!0===t}).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(_s,{path:a,imagePath:t},a)})]},"subfamily-icon"),Object(h.jsx)(Vs,{children:[...Object.values(H).flatMap(e=>{let{imagePresetSource:t,imagePresetPath:a}=e;return Object(h.jsx)(_s,{path:a,imagePath:t},a)})]},"subfamily-attribute"),...et.map((e,t)=>Object(h.jsx)(Vs,{className:"path-container",children:e.map(e=>{let{imagePresetPath:t,imagePresetSource:a}=e;return Object(h.jsx)(_s,{path:t,imagePath:a},t)})},`region-${t}`))]},"sample-option")}),Object(h.jsxs)(Xs,{className:"panel-figure",children:[Object(h.jsx)(Js,{containerProps:{className:"panel-box box-raw"},alt:"image raw",src:"/ygocarder/asset/image/syntax/syntax-9-raw.jpg",caption:a["guide.format.caption.input"]}),Object(h.jsx)(Js,{containerProps:{className:"panel-box box-preview"},alt:"image preview",src:"/ygocarder/asset/image/syntax/syntax-9-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(h.jsxs)(Ko.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(h.jsx)(Ks.a,{})]})]})},Zs=p.b.div`
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
`,ec=p.b.div`
    display: inline-block;
    width: 8px;
`,tc=e=>{let{id:t,tabIndex:a,nameKey:r,labelBackgroundColor:n,labelBackgroundColorList:i,className:o,isOfficial:l,onClick:s}=e;const c=Fn();return Object(h.jsxs)(Zs,{id:t,tabIndex:a,className:`frame-info-block ${null!==o&&void 0!==o?o:""}`,$withPillar:!(!n&&!i),onClick:s,children:[i?Object(h.jsx)(ec,{children:i.map(e=>Object(h.jsx)("div",{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:e,height:100/i.length+"%"}},e))}):n?Object(h.jsx)(ec,{style:{background:l?"unset":"var(--gradient-diagonal-stripe)",backgroundColor:n}}):null,Object(h.jsx)("label",{className:"frame-info-block-label",children:c[r]})]})};var ac=a(148),rc=a(318),nc=a.n(rc),ic=a(647),oc=a(648),lc=a(649),sc=a(650),cc=a(604);const dc=p.b.div`
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
`,uc=()=>Object(h.jsx)(cc.a,{});uc.FullView=()=>Object(h.jsx)(dc,{className:"loading-fullview",children:Object(h.jsx)(cc.a,{size:"large"})});a(506),a(507);const mc=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:i=0,y:o=0,unit:l}=e;if("px"===l){const e=.8,n=400/300,{width:l,height:s}=t,c=s/l>=e?n:1,d=Math.min((null!==i&&void 0!==i?i:0)*c,l),u=Math.min((null!==o&&void 0!==o?o:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,l);return{unit:"%",x:d/l*100,y:u/s*100,width:m/l*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(i<0)return{...e,x:0};if(o<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),b=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,p=b/100,h=p>1?100:b,g=p>1?d/p:d,f=p>1?(100-g)/2:i<0?0:i,v=p>1||o<0?0:o;return{...e,x:f,y:v,height:h,width:g,aspect:a}},bc=Object(r.forwardRef)((e,t)=>{let{title:a,backgroundColor:n,className:i,forceFit:o,defaultSourceType:l,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:b,ratio:p,imageStyle:g,onImageStyleChange:f,onSourceLoaded:v=()=>{},onSourceChange:y=()=>{},onCropChange:x=()=>{},onTainted:j=()=>{},onMaxSizeExceeded:O=()=>{},onForceFitChange:w=()=>{}}=e;const k="offline"===l?"offline":"online",S=Fn(),C=Object(r.useRef)(null),[F,L]=Object(r.useState)("anonymous"),[T,N]=Object(r.useState)(0),[I,R]=Object(r.useState)(k),[E,M]=Object(r.useState)(k),[z,P]=Object(r.useState)(s),[A,D]=Object(r.useState)(!1),[H,B]=ci("activeDropzone"),[W,$]=Object(r.useState)(null),[Y,K]=Object(r.useState)(!1),[U,G]=Object(r.useState)(c),X=Object(r.useRef)(null),[q,V]=Object(r.useState)({current:b,completed:null}),[_,J]=Object(r.useState)("%"===b.unit),{current:Q,completed:Z}=q,ee=e=>{const t=e[0];if(!t)return;t.size>=4194304&&O(4),D(!0);const a=new FileReader;a.addEventListener("load",()=>{"string"===typeof a.result&&(L("anonymous"),P(a.result),R("offline"),M("offline"),y("offline",a.result),D(!1))}),a.readAsDataURL(t)},te=Object(r.useRef)({source:"",crop:null}),ae=Object(r.useCallback)(e=>{if(D(!1),$(null),v(F),X.current=e,e.src===te.current.source&&te.current.crop){const t=re.current;setTimeout(()=>{if(t!==re.current||!te.current.crop)return;const a=mc(te.current.crop,e,p);V({completed:a,current:a}),J(!0),te.current={source:"",crop:null}},250)}else setTimeout(()=>{V(t=>{const a=mc(t.current,e,p);return{completed:a,current:a}}),J(!0)},250)},[F,v,p]);Object(r.useEffect)(()=>{var e,t,a,r;const n=X.current;if(!Z||!d||!n)return;const{aspect:i}=Z;d.style.transform="scale(2)";const l=d.getContext("2d");if(!l||"number"!==typeof i||i<=0||A)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,b=null!==(e=Z.unit)&&void 0!==e?e:"px",p=window.devicePixelRatio;l.setTransform(p,0,0,p,0,0);let h,f=Math.floor((null!==(t=Z.width)&&void 0!==t?t:0)*("px"===b?u:c/100)),v=Math.min(c,f),y=Math.floor(f/i),j=Math.min(s,y),O=Math.min(c,Math.floor((null!==(a=Z.x)&&void 0!==a?a:0)*("px"===b?u:c/100))),w=Math.min(s,Math.floor((null!==(r=Z.y)&&void 0!==r?r:0)*("px"===b?m:s/100)));if(l.imageSmoothingQuality="high",!(v<=0||j<=0)){if(O+v>c||w+j>s||O<0||w<0||Math.abs((f-v)/v)>.01||Math.abs((y-j)/j)>.01){"width"===(i*s>c?"width":"height")?(v=c,j=v/i,O=0,w=(s-j)/2,h={unit:"%",aspect:i,height:j/s*100,width:v/c*100,x:0,y:w/s*100}):(v=s*i,j=s,O=(c-v)/2,w=0,h={unit:"%",aspect:i,height:j/s*100,width:v/c*100,x:O/c*100,y:0})}if(o){"width"===(i*s>c?"width":"height")?(v=c,j=v/i):(v=s*i,j=s),d.width=v,d.height=j;const{flipX:e,flipY:t}=g,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,0,0,c,s,0,0,a*v,r*j),l.scale(a,r)}else{var k,S;d.width=null!==(k=v)&&void 0!==k?k:0,d.height=null!==(S=j)&&void 0!==S?S:0;const{flipX:e,flipY:t}=g,a=e?-1:1,r=t?-1:1;l.scale(a,r),l.drawImage(n,O,w,v,j,0,0,a*v,r*j),l.scale(a,r)}"offline"===I&&(null!==z&&void 0!==z?z:"").length<=0||i===Z.aspect&&x(Z,I,Y),h&&V(e=>({...e,current:h}))}},[Z,d,T,o,g]),Object(r.useEffect)(()=>{K(!1),V(e=>{if(null!=X.current&&e.current){const t=mc(e.current,X.current,p);return{current:t,completed:t}}return e})},[p]);const re=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,()=>({isLoading:()=>A,hasImage:()=>"string"===typeof z&&z.length>0&&"offline"===I||"string"===typeof U&&U.length>0&&"online"===I,forceSource:(e,t,a)=>{const r="offline"===I?z:U;K(!1),r!==t&&(D(!0),R(e),M(e),y(e,t),"offline"===e?P(t):G(t)),L("anonymous"),J("%"===a.unit),re.current+=1,te.current={source:t,crop:a},N(e=>e+1)}}));const ne="offline"===I&&(null!==z&&void 0!==z?z:"").length>0||"online"===I&&(null!==U&&void 0!==U?U:"").length>0,ie=d&&ne&&!A&&(null===Z||void 0===Z?void 0:Z.width)&&(null===Z||void 0===Z?void 0:Z.height);return Object(h.jsxs)("div",{className:dn("card-image-cropper",i),children:[Object(h.jsxs)("div",{className:"card-image-source-input",children:[Object(h.jsxs)("div",{className:"card-image-source-input-container",children:[Object(h.jsxs)("div",{className:"card-image-source-input-title",children:[Object(h.jsxs)("span",{className:"field-title",children:[a," ",Object(h.jsx)(ml,{Icon:ic.a,containerProps:{className:ie?"":"disabled"},tooltipProps:{overlay:ie?S["image-cropper.download"]:S["image-cropper.no-download"]},onClick:()=>ie&&d&&function(e,t){t&&e&&e.toBlob(e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}},"image/png",1)}(d,Z)})]}),Object(h.jsxs)(Ul.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;M(t),((null!==z&&void 0!==z?z:"").length>0&&"offline"===t||(null!==U&&void 0!==U?U:"").length>0&&"online"===t)&&(R(t),"offline"===t?(L("anonymous"),y("offline",z)):y("online",U))},value:E,children:[Object(h.jsx)(bn.a,{title:Object(h.jsx)("div",{className:"image-info",children:S["image-cropper.online-tip"]}),children:Object(h.jsx)(Ul.a.Button,{value:"online",checked:"online"===E,children:S["image-cropper.source.online.tooltip"]})}),Object(h.jsx)(bn.a,{title:Object(h.jsx)("div",{className:"image-warning",children:S["image-cropper.offline-warning"]}),children:Object(h.jsx)(Ul.a.Button,{value:"offline",checked:"offline"===E,children:S["image-cropper.source.offline.tooltip"]})})]})]}),Object(h.jsx)("div",{className:["card-image-input","online"===E?"":"input-inactive"].join(" "),children:Object(h.jsx)(xs.a,{placeholder:S["image-cropper.placeholder"],value:U,onChange:e=>{const t=e.target.value;L("anonymous"),D(!0),R("online"),M("online"),y("online",t),G(t)},maxLength:512,allowClear:!0},"key")}),Object(h.jsx)("div",{className:["card-image-input","offline"===E?"":"input-inactive"].join(" "),children:Object(h.jsx)(xs.a,{ref:C,type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files.length>0?ee(e.target.files):alert(S["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=C.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(h.jsxs)("div",{className:dn("card-cropper"),onKeyDown:()=>{K(!0)},children:[Object(h.jsx)(Dl,{$visible:H>0,className:"drop-zone",onDragOver:e=>e.preventDefault(),onDrop:e=>{if(e.preventDefault(),B(0),e.currentTarget.classList.contains("drop-zone")){const t=e.dataTransfer.files;ee(t)}},children:Object(h.jsx)("label",{children:S["image-cropper.drop.tooltip"]})}),A&&Object(h.jsx)(uc.FullView,{}),ne&&!W&&Object(h.jsxs)("div",{className:"card-image-option",children:[Object(h.jsx)(bn.a,{placement:"left",overlay:S["image-cropper.button.flip-horizontal.tooltip"],children:Object(h.jsx)("div",{className:dn("image-option flip-horizontally-option",g.flipX?"option-active":""),onClick:()=>{K(!0),f({flipX:!g.flipX,flipY:g.flipY})},children:Object(h.jsx)(hn.a,{})})}),Object(h.jsx)(bn.a,{placement:"left",overlay:S["image-cropper.button.flip-vertical.tooltip"],children:Object(h.jsx)("div",{className:dn("image-option flip-vertically-option",g.flipY?"option-active":""),onClick:()=>{K(!0),f({flipX:g.flipX,flipY:!g.flipY})},children:Object(h.jsx)(oc.a,{})})}),Object(h.jsx)(bn.a,{placement:"left",overlay:o?S["image-cropper.button.use-crop.tooltip"]:S["image-cropper.button.force-fit.tooltip"],children:Object(h.jsx)("div",{className:dn("image-option force-fit-option",o?"option-active":""),onClick:()=>{K(!0),w(!o)},children:Object(h.jsx)(lc.a,{})})}),!o&&Object(h.jsx)(bn.a,{placement:"left",overlay:S["image-cropper.button.center-vertical.tooltip"],children:Object(h.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{K(!0),V(e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}})},children:Object(h.jsx)(sc.a,{})})}),!o&&Object(h.jsx)(bn.a,{placement:"left",overlay:S["image-cropper.button.center-horizontal.tooltip"],children:Object(h.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{K(!0),V(e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}})},children:Object(h.jsx)(sc.a,{})})})]}),(!ne||W&&void 0===F)&&!A&&Object(h.jsx)(ac.a,{description:S["image-cropper.not-found-warning"],image:null}),Object(h.jsx)(nc.a,{src:"offline"===I?z:U,disabled:o,className:o?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:ae,onImageError:()=>{if(d)if("online"===I&&""===(null!==U&&void 0!==U?U:"")||"offline"===I&&""===(null!==z&&void 0!==z?z:"")){te.current={source:"",crop:null};const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),Z&&x(Z,I,Y),v(F),D(!1),$("Image not found")}else L(void 0),j();else te.current={source:"",crop:null},D(!1),$("No receiving canvas"),j();void 0===F&&(D(!1),$("Tainted canvas"))},crop:Q,onDragStart:()=>{K(!0)},onChange:(e,t)=>{const a=X.current;te.current.crop||A||(_?V(e=>({...e,current:mc(t,a,p)})):(J(!0),V(t=>({...t,current:mc(e,a,p)}))))},onComplete:(e,t)=>{te.current.crop&&!A||V(e=>({...e,completed:t}))},ruleOfThirds:!0,crossorigin:F},`${I}-${_}-${T}`)]})]})}),pc=p.b.div`
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
`,hc=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],gc=e=>{let{value:t="",onChange:a}=e;const{color:r,inputText:n,setColor:i}=oi({value:t,onChange:a});return Object(h.jsxs)(pc,{children:[Object(h.jsx)("div",{className:"color-list",children:hc.map(e=>{let{hex:t,rgb:n}=e;const i=Kr(n);return Object(h.jsx)(yl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:r.hex.toUpperCase()===t&&Object(h.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(h.jsxs)("div",{className:"color-input",children:[Object(h.jsx)(yl,{$static:!0,style:{backgroundColor:r.hex}}),Object(h.jsx)(xs.a,{size:"small",value:n,onChange:e=>{i(e.target.value)}})]})]})};var fc=a(69),vc=a(323);const yc=p.b.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`,xc=Object(fc.c)(e=>{let{onChange:t,...a}=e;return Object(h.jsx)(yc,{children:Object(h.jsx)(vc.Saturation,{...a,onChange:e=>{null===t||void 0===t||t(e)}})})}),jc=[{hex:"#B80000",rgb:[184,0,0]},{hex:"#EB9694",rgb:[235,150,148]},{hex:"#DB3E00",rgb:[219,62,0]},{hex:"#FAD0C3",rgb:[250,208,195]},{hex:"#FCCB00",rgb:[252,203,0]},{hex:"#FEF3BD",rgb:[254,243,189]},{hex:"#008B02",rgb:[0,139,2]},{hex:"#C1E1C5",rgb:[193,225,197]},{hex:"#006B76",rgb:[0,107,118]},{hex:"#BEDADC",rgb:[190,218,220]},{hex:"#1273DE",rgb:[18,115,222]},{hex:"#C4DEF6",rgb:[196,222,246]},{hex:"#004DCF",rgb:[0,77,207]},{hex:"#BED3F3",rgb:[190,211,243]},{hex:"#5300EB",rgb:[83,0,235]},{hex:"#D4C4FB",rgb:[212,196,251]}],Oc=p.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem 4rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${yl} {
            display: inline-block;
            flex: 1;
            border: var(--bw) solid var(--sub-level-2);
            height: 18px;
        }
    }
    .color-list {
        display: grid;
        grid-template-columns: repeat(${jc.length/4}, max-content);
        border-radius: var(--br);
        overflow: hidden;
        ${yl} {
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
`,wc=e=>{let{children:t,onChange:a,value:r}=e;const{color:n,inputText:i,setColor:o}=oi({value:r,onChange:a}),l=""===i;return Object(h.jsxs)(Oc,{className:"horizontal-sketch-picker",children:[Object(h.jsx)("div",{className:"input-label",children:t}),Object(h.jsxs)("div",{className:"color-input",children:[Object(h.jsxs)("div",{className:"color-state",children:[Object(h.jsx)(yl,{$empty:l,style:l?{}:{backgroundColor:n.hex}}),Object(h.jsx)(ml,{size:"sm",Icon:gn.a,onClick:()=>{null===a||void 0===a||a("")}})]}),Object(h.jsx)(xs.a,{size:"small",value:i,onChange:e=>{o(e.target.value)}})]}),Object(h.jsx)("div",{className:"rgb-input-list",children:["R","G","B"].map((e,t)=>Object(h.jsxs)("div",{className:"rgb-input",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)(xs.a,{size:"small",value:l?"":n.rgb[t],onChange:e=>{const a=[...n.rgb];var r;a[t]=parseInt(e.target.value),o("#"+Yr((r=a)[0])+Yr(r[1])+Yr(r[2]))}})]},e))}),Object(h.jsx)("div",{className:"color-list",children:jc.map(e=>{let{hex:t,rgb:r}=e;const i=Kr(r);return Object(h.jsx)(yl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:n.hex.toUpperCase()===t&&Object(h.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(h.jsx)(xc,{color:n.hex,onChange:e=>{let{hex:t}=e;return o(t)}})]})};var kc=a(245),Sc=a(651),Cc=a(652),Fc=a(653);const{height:Lc,width:Tc}=s,Nc=p.b.div`
    width: ${Tc}px;
    height: ${Lc}px;
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
`,Ic=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:i,globalScale:o,width:l,height:s}=e;return Object(h.jsxs)("div",{className:"control-container",children:[Object(h.jsxs)("div",{className:"action-list",children:[Object(h.jsx)(Il,{disabled:i>=4,onClick:()=>{t()},children:Object(h.jsx)(Sc.a,{})}),Object(h.jsx)(Il,{disabled:i<=1/o,onClick:()=>{a()},children:Object(h.jsx)(Cc.a,{})}),Object(h.jsx)(Il,{onClick:()=>{r()},children:Object(h.jsx)(Fc.a,{})}),Object(h.jsx)(Il,{onClick:()=>{n(-Math.max(0,l-Tc)/2,-Math.max(0,s-Lc)/2,1)},children:Object(h.jsx)(lc.a,{})})]}),Object(h.jsxs)("div",{className:"control-info",children:[i&&Object(h.jsxs)(h.Fragment,{children:["\xd7",i<1?"1/"+Math.round(1/i*10)/10:Math.round(10*i)/10]}),"\xa0(",l," \xd7 ",s,")"]})]})},Rc=Object(r.forwardRef)((e,t)=>{let{globalScale:a}=e;const[n,i]=Object(r.useState)(!1),[o,l]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(()=>1/a);return Object(r.useImperativeHandle)(t,()=>({setVisible:i,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>l(e=>e+1),getCanvasKey:()=>o})),Object(r.useEffect)(()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()},[a]),Object(h.jsx)(un.a,{width:`${Tc+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>i(!1),footer:null,children:Object(h.jsx)(Nc,{className:"card-lightbox-container",children:Object(h.jsx)(kc.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"card-lightbox-control",children:Object(h.jsx)(Ic,{...t,scale:d,globalScale:a,width:Tc*a,height:Lc*a})}),Object(h.jsx)(kc.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:Tc,maxHeight:Lc,lineHeight:0},children:Object(h.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:Tc*a,height:Lc*a},o+.1)})]})}})})})}),Ec=p.b.div`
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
`,Mc=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:i}=e;const[o,l]=Object(r.useState)(a),s=Fn(),c=JSON.stringify(o);return Object(r.useEffect)(()=>{n(o)},[c]),Object(h.jsxs)(Ec,{className:dn("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)(dl.a,{checked:t,onChange:e=>i(e.target.checked),children:s["link-picker.label"]})}),Object(h.jsx)("div",{className:"container",children:[...Array(9)].map((e,a)=>{const r=`${a+1}`;return"5"===r?Object(h.jsx)(bn.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(h.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&l([])},children:Object(h.jsx)(b.a,{})})},"5"):Object(h.jsx)("div",{className:`link-marker-button marker-${a+1} ${o.includes(r)?"marker-checked":""}`,onClick:()=>{t&&l(e=>{let t=[...e];return t.includes(r)?t=t.filter(e=>e!==r):t.push(r),t})},children:Object(h.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${qe[a]}deg) translateY(-1px)`}})},r)})})]})};var zc=a(621);const Pc=Object(p.b)(zc.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Ac=Object(p.b)(zc.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,Dc=e=>{let{onChange:t,...a}=e;const r=Fn(),{resolution:n,updateSetting:i}=ai(Object(li.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}}));return Object(h.jsxs)(zc.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(h.jsx)(Pc,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),ba.map(e=>{let{width:a,height:o,label:l,scale:s}=e;return Object(h.jsx)(Ac,{className:n[0]===a&&n[1]===o?"active-setting":"",onClick:()=>{i({resolution:[a,o],globalScale:s}),null===t||void 0===t||t([a,o],s)},children:s>1?Object(h.jsx)(il.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(h.jsx)(Tl,{children:r["setting.option.resolution.warning"]}),children:Object(h.jsx)(Pl,{width:a,height:o,warning:!0})}):Object(h.jsx)(Pl,{width:a,height:o})},`${a}-${o}`)})]})},Hc=e=>Object(h.jsx)(Vo,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(Xo.a,{...e})}),Bc=p.b.div`
    font-weight: 500;
    border-color: transparent;
    background-color: transparent;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    user-select: none;
    display: inline-block;
    height: 32px;
    width: var(--width-label);
    line-height: 30px;
    position: relative;
    min-width: var(--width-label);
    text-align: right;
    padding-right: var(--spacing-antd);
`,Wc=p.b.div`
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
`,$c=p.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Yc=p.b.div`
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
`,Kc={Container:$c,Option:Wc},Uc=p.b.div`
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
`,Gc=Object(p.b)(Ko.a)`
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
`,Xc=Object(r.forwardRef)((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:i,globalScale:o,canvasMap:l,onTainted:s,onExportSucess:c,onDownloadError:d}=e;const u=Fn(),{allowHotkey:m,resolution:b}=ai(Object(li.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),{onExport:p}=Eo(!0,l,{imageChangeCount:i,isInitializing:n,language:u,globalScale:o}),{exportCanvasRef:g}=l,f=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[v,y]=Object(r.useState)(!1),x=Object(r.useCallback)(()=>{y(!1)},[]),j=Object(r.useCallback)(async e=>p({...e,onError:e=>{!a&&String(e).includes("Tainted canvases")&&s()},onSuccess:c}),[a,p,c,s]),{onSave:O,isPipelineRunning:w}=ri({isTainted:a,isInitializing:n,exportCanvasRef:g,exportRef:f,onExport:j,onDownloadError:d,onDownloadComplete:x}),k=e=>{v||(a?mn.a.error({message:u["prompt.download.tainted.message"]}):(y(!0),O(e)))};return Object(r.useImperativeHandle)(t,()=>({download:k,isPipelineRunning:w})),a?null:Object(h.jsxs)("div",{className:"save-button-container",children:[Object(h.jsx)("div",{id:"save-button-waiting"}),Object(h.jsxs)(Gc,{className:"save-button",id:"save-button-ready",children:[Object(h.jsx)(bn.a,{overlay:m?Object(h.jsx)(h.Fragment,{children:"Ctrl+S / \u2318+S"}):null,children:Object(h.jsx)("div",{className:"button-label",children:Object(h.jsx)("div",{className:"label-content",onClick:()=>k(),children:v?u["button.download.ongoing.label"]:u["button.download.label"]})})}),Object(h.jsx)(Uo.a,{disabled:v,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(h.jsx)(Dc,{onChange:()=>sn()}),children:Object(h.jsxs)(Uc,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(h.jsx)(Go.a,{className:"resolution-icon"}),Object(h.jsx)("span",{className:"resolution-overlay",children:b[1]})]})})]})]})});var qc=a(655),Vc=a(656),_c=a(657);const Jc=p.b.div`
    ${pn} {
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
`,Qc=Object(p.b)(pn)`
    ${kl}
`,Zc=e=>{let{data:t,children:a,disabled:r,withText:n}=e;return Object(h.jsx)(Cl,{disabled:r,data:t,container:Qc,overlay:n?Object(h.jsxs)(h.Fragment,{children:["Copied\xa0",Object(h.jsx)(Ol.a,{})]}):Object(h.jsx)(Ol.a,{}),children:a})},ed=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:gr},{label:e["button.import.for-other.label"],value:"other",converter:Mr}],td=Object(r.forwardRef)((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:i,onRequireDownload:o,onClose:l}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,b]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:p,resolution:g}=ai(Object(li.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),f=Fn(),v="export-input-raw",y=Object(r.useCallback)(()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())},[]);Object(r.useImperativeHandle)(t,()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),b(ed(f).map(t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:i}=r(e,n);return{value:a,isPartial:t,name:yr(e.name),data:`${JSON.stringify(i)}`}}catch(i){return console.error(i),{value:a,isPartial:!1,name:"Unknown",data:""}}}).reduce((e,t)=>{let{data:a,isPartial:r,value:n,name:i}=t;return e[n]={name:i,data:a,isPartial:r},e},{...m}))}})),Object(r.useEffect)(()=>{setTimeout(()=>{s&&"ygocarder"===d&&y()},100)},[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(un.a,{visible:s,title:f["button.export-modal.label"],className:"global-overlay export-modal",onCancel:()=>{c(!1),l()},cancelText:f["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(h.jsxs)(Jc,{children:[Object(h.jsx)(fl,{optionList:ed(f),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(h.jsxs)("div",{className:"partial-alert",children:[Object(h.jsx)("b",{children:f["service.decode.partial.message"]}),Object(h.jsx)("br",{}),f["service.decode.partial.description"]]}),Object(h.jsxs)("div",{className:dn("export-container-result",`mode_${d}`),children:[Object(h.jsx)(Nl,{content:a&&"other"===d?Object(h.jsx)(Ws,{}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(pn,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});wr(yr(O),e,"application/json")},children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(ic.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(h.jsx)(Nl,{placement:"bottom",content:j?Object(h.jsx)(Tl,{children:f["prompt.export.offline-warning.message"]}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(Zc,{disabled:!1,data:m.ygocarder.data,withText:!0,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(qc.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(h.jsx)(Nl,{placement:"bottom",content:j?Object(h.jsx)(Tl,{children:f["image-cropper.offline-warning"]}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(Zc,{disabled:j,data:window.location.href,withText:!0,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(Vc.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.share-button.label"]})]})})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(Nl,{content:a?Object(h.jsx)(Ws,{}):void 0,children:Object(h.jsx)("div",{children:Object(h.jsxs)(pn,{disabled:a,className:"export-download-image",onClick:o,children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(_c.a,{})}),Object(h.jsx)("div",{className:"label",children:f["button.export-modal.save-button.label"]})]})})}),Object(h.jsx)(Uo.a,{overlay:Object(h.jsx)(Dc,{}),children:Object(h.jsxs)("div",{className:"resolution-picker",children:[g[0]," \xd7 ",g[1]]})})]}),"ygocarder"===d&&!j&&Object(h.jsx)(xs.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(h.jsx)(bn.a,{overlay:p?Object(h.jsx)(h.Fragment,{children:"Ctrl+D / \u2318+D"}):null,children:Object(h.jsx)("button",{className:"primary-button export-button",onClick:()=>{i(),c(!0)},children:f["generic.export.label"]})}),Object(h.jsx)(Uo.a,{overlay:Object(h.jsx)(zc.a,{onClick:e=>e.domEvent.stopPropagation(),children:ed(f).map((e,t)=>{let{converter:a,label:r}=e;return Object(h.jsx)(zc.a.Item,{onClick:()=>{try{const e=ti.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});wr(yr(e),a,"application/json")})(yr(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),mn.a.error({message:f["error.export.message"],description:f["error.export.description"]})}},children:r},`${t}`)})}),children:Object(h.jsx)(pn,{className:"secondary-button export-custom",children:Object(h.jsx)(ic.a,{})})})]})});var ad=a(658);const rd=p.b.div`
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
        ${pn} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,nd=Object(r.forwardRef)((e,t)=>{let{allowHotkey:a,language:n,onImport:i,onClose:o}=e;const l="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(0),[p,g]=Object(r.useState)("replace"),[f,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)(()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())},[]);Object(r.useEffect)(()=>{setTimeout(()=>{f&&j()},100)},[j,f]),Object(r.useImperativeHandle)(t,()=>({requestImport:e=>{g(e),v(!0)}}));const O=()=>{b(e=>e+1),v(!1),x(!1),o()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:r}=Zn(e,"replace"===p||"new"===p?void 0:ti.getState().card);if(r&&mn.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};i(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}else i(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}}catch(a){console.error("Import error:",a),mn.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},S=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,i=null!==(e=n.trim())&&void 0!==e?e:"";let o="";try{o=lr(decodeURIComponent(i))}catch(a){}let l=null;if(i.startsWith("{")&&i.endsWith("}"))l=i;else if(o.startsWith("{")&&o.endsWith("}"))l=JSON.parse(o);else{var t;const e=i.startsWith("https://db.ygoprodeck.com/api")?i:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${i}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();l=null!==(t=r.data.find(e=>{let{name:t}=e;return t.toLowerCase()===i.toLowerCase()}))&&void 0!==t?t:r.data.sort((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],i=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!i)return 0;return(n.viewsweek+1)/(i.viewsweek+1)>2?i.viewsweek-n.viewsweek:i.views-n.views})[0]}await w(l,!0)}}catch(a){console.error("Import error:",a),mn.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{O()}};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(un.a,{visible:f,title:"merge"===p?n["button.import.merge.label"]:n["generic.import.label"],className:"global-overlay import-modal",onCancel:O,okText:n["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(h.jsxs)(rd,{children:["merge"!==p?Object(h.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(h.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(h.jsx)("div",{className:"import-container-input",children:Object(h.jsx)(xs.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:y,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==p?Object(h.jsxs)("div",{className:"import-container-upload",children:[Object(h.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(h.jsxs)(pn,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(h.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),O()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===p&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(h.jsx)(pn,{className:"import-empty",onClick:()=>{w(sa()),O()},children:n["button.empty.label"]})]})]}):null]})}),Object(h.jsx)(bn.a,{overlay:a?Object(h.jsxs)("div",{className:"center",children:[Object(h.jsx)("div",{children:"Ctrl+E / \u2318+E"}),Object(h.jsxs)("div",{children:["Ctrl+G / \u2318+G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(h.jsx)("button",{className:"primary-button import-button",onClick:()=>{g("replace"),v(!0)},children:n["generic.import.label"]})}),Object(h.jsx)(bn.a,{overlay:n["button.import.tooltip"],children:Object(h.jsxs)(pn,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(l);e&&e.click()},children:[Object(h.jsx)("input",{ref:d,type:"file",id:l,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),O()}},`direct-file-input-${m}`),Object(h.jsx)(ad.a,{})]})})]})}),id=(Object(p.b)(zc.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),od=e=>w({normal:e["input.foil.normal.label"],gold:e["input.foil.gold.label"],platinum:e["input.foil.platinum.label"],rainbow:e["input.foil.rainbow.label"]}).map(e=>{let{color:t,name:a,label:r,preview:n}=e;return{label:Object(h.jsx)(bn.a,{title:r,children:n}),value:a,props:{style:{color:t,fontWeight:"bold"}}}}),ld=[{value:"normal",label:Object(h.jsx)(b.a,{})},...Object.values(y).map(e=>{let{value:t,label:a}=e;return{label:a,value:t}})],sd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"official";return Ke.filter(t=>{let{isOfficial:a}=t;return"both"===e||("official"===e?a:!a)}).map(e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:i,isOfficial:o}=e;return{label:Object(h.jsx)(tc,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a,isOfficial:o}),value:t,edition:i}})},cd=[...Array(14)].map((e,t)=>({label:t,value:t})),dd=P.map(e=>{let{value:t}=e;return{label:t===z?Object(h.jsx)(b.a,{}):Object(h.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}}),ud=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map(e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}}).sort((e,t)=>e.order-t.order);var md=a(670);const bd=p.b.div`
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
`,pd=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Fn(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(h.jsxs)(bd,{tabIndex:-1,className:"char-picker-container",children:[Object(h.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\xd8","\u203b"].map(e=>Object(h.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e))}),Object(h.jsx)("div",{className:"char-picker-guideline",children:Object(h.jsx)(sl,{content:Object(h.jsxs)(Tl,{children:[r["input.char-picker.guide.header"],Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(h.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var hd=a(659);a(589),a(590);const gd=Object(r.forwardRef)((e,t)=>{let{disabled:a,color:n,onSelect:i,onOffsetChange:o,onRemove:l}=e;const s=Fn(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[b,p]=Object(r.useState)(-1),g=Object(r.useRef)(On()(m,250)).current;return Object(r.useImperativeHandle)(t,()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:i,round:o}=Math;d(t),m(i(0,n(100,o(100*parseFloat(a))))),p(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===b&&m(r(0,a(100,n(100*parseFloat(t)))))}})),Object(r.useEffect)(()=>{b>0&&(null===o||void 0===o||o(b,""+u/100))},[b,u,o]),Object(h.jsxs)("div",{className:"stop-point-control-panel",children:[Object(h.jsxs)("div",{className:"stop-point-offset-input",children:[Object(h.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(h.jsx)(ws.a,{value:u,size:"small",max:100,min:0,onChange:e=>g("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(h.jsx)(Ko.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===l||void 0===l?void 0:l(b),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(h.jsx)(fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===i||void 0===i||i(e.hex)}})]})}),fd=e=>({colorList:e,raw:Qr(e)}),vd=e=>{var t,a;let{palette:n=Qr(Jr()),angle:i=180,memoizedOnChange:o}=e;const l=Fn(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(i),[u,m]=Object(r.useState)(()=>{var e,t;const a=Zr(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}}),b=Object(r.useCallback)((e,t)=>m(a=>{const r=a.colorList.map(a=>a.id===e?{...a,offset:t}:a);return{...a,...fd(r)}}),[]);Object(r.useEffect)(()=>{d(i)},[i]),Object(r.useEffect)(()=>{var e,t;const a=Zr(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})},[n]);const p=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{var e;u.colorList[0]&&p.current&&(p.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))},[u.colorList]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find(e=>e.id===a);e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}},100),()=>{e=!1}},[u]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&o(u.colorList,c)},200),()=>{e=!1}},[u,c,o]),Object(h.jsxs)("div",{className:dn(Jo,"gradient-picker-container"),children:[Object(h.jsxs)("div",{className:"gradient-angle-control",children:[Object(h.jsx)("h2",{children:l["input.name-style.gradient.color-point.label"]}),Object(h.jsxs)(Ko.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m(e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort((e,t)=>Number(e.offset)-Number(t.offset));return{...e,...fd(t)}})},children:[l["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(h.jsx)(Zo,{angle:c,size:120,setAngle:d,children:Object(h.jsx)("h2",{children:l["input.name-style.gradient.gradient-direction.label"]})})]}),Object(h.jsx)("div",{className:"stop-color-picker-container",children:Object(h.jsx)(_o.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m(t=>({...t,...fd(e)})),onColorStopSelect:e=>{var t;m(t=>({...t,currentControlId:e.id})),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(h.jsx)(gd,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:b,onRemove:e=>{m(t=>{var a;const r=t.colorList.filter(t=>t.id!==e),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var i;n>0&&u.colorList[n]&&(null===(i=s.current)||void 0===i||i.setColor(u.colorList[n]));return{...fd(r),currentControlId:n}})}})})})]})},yd=Object(p.b)(Kc.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,xd=Object(p.b)(Kc.Container)`
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
`,jd=Object(p.b)(Kc.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Od=p.b.div`
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
`;var wd=a(332);const kd=Object(r.forwardRef)((e,t)=>{let{className:a,defaultValue:n,fieldMap:i,labelMap:o,onChange:l}=e;const s=Fn(),{x:c,y:d,color:u,width:m}=i,[b,p]=Object(r.useState)(()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}}),{x:g,y:f,color:v,width:y}=b,x=o[m];return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&l(b)},500),()=>{e=!1}},[b]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==b[a])return void p(t=>({...t,...e}))}})),Object(h.jsxs)("div",{className:a,children:[Object(h.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(h.jsxs)("div",{className:"line-position",children:[Object(h.jsx)(wd.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==g&&void 0!==g?g:0,y:null!==f&&void 0!==f?f:0,onChange:e=>{let{x:t,y:a}=e;return p(e=>({...e,x:t,y:a}))}}),Object(h.jsxs)(Bl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[s["input.name-style.slider.x-offset.label"],":"]}),Object(h.jsx)(ws.a,{size:"small",value:g,onChange:e=>p(t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))}),Object(h.jsxs)("span",{children:[s["input.name-style.slider.y-offset.label"],":"]}),Object(h.jsx)(ws.a,{size:"small",value:f,onChange:e=>p(t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))})]}),Object(h.jsxs)("div",{className:"single-slider",children:[x,":\xa0",Object(h.jsx)(Hc,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&p(t=>({...t,width:e}))}})]})]}),Object(h.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(h.jsx)(fc.b,{colors:ua,color:v,onChangeComplete:e=>p(t=>({...t,color:e.hex}))})]})}),Sd=Object(r.forwardRef)((e,t)=>{let{active:a,value:n,onClick:i,onCancel:o}=e;const l=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}})),Object(h.jsx)(jd,{ref:l,...tn({stopPropagation:!0,optionLength:le.length,setFocus:c,onTrigger:()=>{s>=0&&i(le[s])},onCancel:()=>{null===o||void 0===o||o()}}),children:le.map((e,t)=>{const{key:r,image:o,label:l}=e;return Object(h.jsx)(Od,{className:dn("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),i(e)},children:Object(h.jsx)("img",{className:"preset-preview",src:`/ygocarder/${o}`,alt:l})},r)})})}),Cd=p.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,Fd=p.b.div`
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
`,Ld=.01;const Td=re(),Nd=Object(r.forwardRef)((e,t)=>{let{defaultPitch:a=Td.embossPitch,defaultYaw:n=Td.embossYaw,defaultThickness:i=Td.embossThickness,materialColor:o,children:l,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=en(),[b,p]=Object(r.useState)("#ffffff"),[g,f]=Object(r.useState)(i),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(a),O=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),k=Object(r.useRef)(i),[C]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{let e=!0;return m&&setTimeout(()=>{if(e){const e=Xa(v,x),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(b);(t[0]!==O.current[0]||t[1]!==O.current[1]||t[2]!==O.current[2]||Math.abs(e[0]-w.current[0])>Ld||Math.abs(e[1]-w.current[1])>Ld||Math.abs(e[2]-w.current[2])>Ld||g!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:v,pitch:x,thickness:g}),O.current=t,w.current=e,k.current=g}},150),()=>{e=!1}},[m,b,v,x,g]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&p(t),a&&j(a),r&&y(r),"number"===typeof n&&y(n)}})),Object(h.jsxs)(Fd,{className:dn(Jo,"emboss-control"),children:[Object(h.jsx)("div",{className:"emboss-control-title",children:l}),Object(h.jsxs)("div",{className:"emboss-control-left",children:[Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(h.jsx)(Cd,{className:"material-color",onClick:c,$color:o})]}),s["input.name-style.emboss.color.alert"](Object(h.jsx)("span",{className:c?"navigate-button":"",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(h.jsxs)("h2",{className:"thickness-row",children:[Object(h.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(h.jsx)(Hc,{value:g,min:0,max:4,onChange:e=>{"number"===typeof e&&(f(e),u())}})]}),Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(h.jsx)(S.a,{className:"reset-button",onClick:()=>{j(90),u()}})]}),Object(h.jsxs)(El,{className:"vertical-angle-control",children:[Object(h.jsx)("div",{className:"slider-label"}),Object(h.jsx)(ws.a,{size:"small",min:-90,max:90,onChange:e=>{j("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:x}),Object(h.jsx)(Hc,{min:-90,max:90,value:x,onChange:e=>{j(e),u()}}),Object(h.jsx)("div",{className:"slider-padding"})]}),Object(h.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(h.jsx)(S.a,{className:"reset-button",onClick:()=>{y(90),u()}})]}),Object(h.jsx)("div",{className:"horizontal-angle-contorl",children:Object(h.jsx)(Zo,{angle:v,size:120,setAngle:e=>{y(e),u()}})})]}),C&&Object(h.jsxs)("div",{className:"emboss-control-right",children:[Object(h.jsx)("h2",{children:"Light color"}),Object(h.jsx)(fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:b,onChange:e=>{p(e.hex),u()},onChangeComplete:e=>{p(e.hex),u()}})]})]})}),Id=p.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,Rd=e=>{let{color:t,onChange:a}=e;const[n,i]=Object(r.useState)(t);return Object(r.useEffect)(()=>{i(t)},[t]),Object(h.jsxs)(Id,{children:[Object(h.jsx)(fc.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>i(e.hex),onChangeComplete:e=>{i(e.hex),a(e.hex)}}),Object(h.jsx)(fc.b,{colors:ua,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(592);const Ed=Object(r.forwardRef)((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:i,showExtraDecorativeOption:o,onChange:l}=e;const s=Fn(),c=Object(r.useRef)(null),[d,u]=ci("nameStylePresetList"),[m,p]=Object(r.useState)(-1),[g,f]=Object(r.useState)(!1),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(i),[O,w]=en(),{db:k}=ii(),S=Object(r.useRef)(On()(l,250)).current,C=Ho(e=>e.setVisible),F=Object(r.useCallback)((e,t)=>{j(a=>({...a,gradientAngle:t,gradientColor:Qr(e)})),O()},[O]),L=ai(e=>e.setting.reduceMotionColor),T=Object(r.useMemo)(()=>{return[{label:(e=s)["input.name-style.type.auto.label"],value:ae},...Object.values(Le).map(t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}})];var e},[s]);Object(r.useEffect)(()=>{0!==w&&(y("custom"),S("custom",x))},[w]);const N=Object(r.useRef)(null),I=Object(r.useRef)(null),R=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r;j(t=>({...t,...e}));const{lineColor:n,lineWidth:i,lineOffsetX:o,lineOffsetY:l,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:b,embossThickness:p}=e;null===(t=N.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=I.current)||void 0===a||a.setValue({x:o,y:l,width:i,color:n}),null===(r=R.current)||void 0===r||r.setValue({pitch:m,yaw:b,thickness:p})}}));const{fillStyle:E,headTextFillStyle:M,hasOutline:z,hasShadow:P,hasGradient:A,gradientColor:D,gradientAngle:H,hasEmboss:B,embossPitch:W,embossYaw:$,embossThickness:Y,pattern:K,font:U}=x,{labelBackgroundColor:G,labelBackgroundImage:X}=null!==a&&void 0!==a?a:{},q={background:G,backgroundImage:X},V="custom"===v,_="predefined"===v,J="name-style-option-input-container",Q=()=>{y("auto"),"auto"!==v&&S("auto",x)},Z=()=>{var e;const t=x.preset?null===(e=oe[x.preset])||void 0===e?void 0:e.value:{};y("predefined"),j(e=>({...e,...t})),S("predefined",{...x,...t})},ee=()=>{y("custom"),"custom"!==v&&S("custom",x)},te="color-picker";return Object(h.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(h.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(h.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(h.jsxs)("span",{className:"name-style-input-container",children:[Object(h.jsxs)("div",{id:J,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...tn({setFocus:p,optionLength:3,onKeyPress:e=>{if(1===m&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),p(1),f(!0),setTimeout(()=>{var e;1===m&&(null===(e=c.current)||void 0===e||e.focus())},200),!1},onTrigger(){0===m&&Q(),1===m&&Z(),2===m&&ee()}}),children:[Object(h.jsxs)("label",{className:dn("ant-radio-wrapper","auto"===v&&"ant-radio-wrapper-checked",0===m&&"ant-radio-focused"),onClick:()=>Q(),children:[Object(h.jsxs)("span",{className:"ant-radio "+("auto"===v?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(h.jsx)("span",{className:"name-style-option-break"}),Object(h.jsx)("label",{className:dn("ant-radio-wrapper",_&&"ant-radio-wrapper-checked",1===m&&"ant-radio-focused"),onClick:()=>Z(),children:Object(h.jsx)(il.a,{visible:g,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Sd,{ref:c,active:_,value:x,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(J))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=oe[a])||void 0===t?void 0:t.value:{};y("predefined"),j(e=>({...e,...r})),S("predefined",{...x,...r})}})}),children:Object(h.jsxs)("span",{className:"name-style-option-label",children:[Object(h.jsxs)("span",{className:"ant-radio "+(_?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(h.jsx)("span",{className:"name-style-option-break"}),Object(h.jsx)("label",{className:dn("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",2===m&&"ant-radio-focused"),onClick:()=>ee(),children:Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(h.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(h.jsx)("span",{className:"ant-radio-inner"})]}),Object(h.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(h.jsxs)("div",{className:"style-picker",children:[Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsxs)("div",{className:"custom-style-text",children:[Object(h.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(h.jsx)(Rd,{color:E,onChange:e=>{y("custom"),j(t=>({...t,fillStyle:e})),O()}})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"custom-style-text",children:[Object(h.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(h.jsx)(fc.b,{colors:ua,color:M,onChangeComplete:e=>{y("custom"),j(t=>({...t,headTextFillStyle:e.hex})),O()}})]})]})}),placement:"bottom",children:Object(h.jsxs)(Ml,{id:te,$softMode:L,$active:V,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(h.jsx)(hd.a,{})]})},"color-picker"),o&&Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(dl.a,{value:"has-shadow",checked:P,onChange:()=>{y("custom"),j(e=>({...e,hasShadow:!e.hasShadow})),O()},children:s["input.name-style.shadow.toggle.label"]})}),P&&Object(h.jsx)(kd,{ref:N,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(h.jsxs)(Ml,{$softMode:L,$active:V&&P,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(h.jsx)(hd.a,{})]})},"shadow-picker"),Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(dl.a,{value:"has-line",checked:z,onChange:()=>{y("custom"),j(e=>({...e,hasOutline:!e.hasOutline})),O()},children:s["input.name-style.outline.toggle.label"]})}),z&&Object(h.jsx)(kd,{ref:I,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:x,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;j(e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n})),O()}})]})}),placement:"bottom",children:Object(h.jsxs)(Ml,{$softMode:L,$active:V&&z,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(h.jsx)(hd.a,{})]})},"outline-picker"),o&&Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(dl.a,{value:"has-gradient",checked:A,onChange:()=>{y("custom"),j(e=>({...e,hasGradient:!e.hasGradient})),O()},children:s["input.name-style.gradient.toggle.label"]})}),A&&Object(h.jsx)("div",{className:"custom-style-gradient",children:Object(h.jsx)(vd,{angle:H,palette:D,memoizedOnChange:F})})]})}),placement:"bottom",children:Object(h.jsxs)(Ml,{$softMode:L,$active:V&&A,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(h.jsx)(hd.a,{})]})},"gradient-picker"),o&&Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(yd,{onClick:e=>e.stopPropagation(),children:[Object(h.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),ce.map(e=>{let{key:t,patternImage:a}=e;return Object(h.jsx)(us,{className:["pattern-option",x.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{j(e=>({...e,pattern:t})),O()},children:a?Object(h.jsx)("img",{style:a?q:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)})]})}),placement:"bottomLeft",children:Object(h.jsx)(Ml,{$softMode:L,$active:V&&"string"===typeof K&&"none"!==K,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Kc.Container,{children:T.map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Kc.Option,{className:U===t?"menu-active":"",onClick:()=>{j(e=>({...e,font:t})),O()},children:a},t)})})}),placement:"bottomLeft",children:Object(h.jsx)(Ml,{$softMode:L,$active:V&&"Auto"!==U,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),o&&Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)("div",{className:"input-popover",children:[Object(h.jsx)("h3",{className:"custom-style-expand",children:Object(h.jsx)(dl.a,{value:"has-emboss",checked:B,onChange:()=>{y("custom"),j(e=>({...e,hasEmboss:!e.hasEmboss})),O()},children:s["input.name-style.emboss.toggle.label"]})}),B&&Object(h.jsx)(Nd,{ref:R,language:s,defaultPitch:W,defaultYaw:$,defaultThickness:Y,materialColor:E,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(te))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;j(e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t})),O()},children:Object(h.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(h.jsx)(Ml,{$softMode:L,$active:V&&B,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker"),Object(h.jsxs)("div",{className:"save-preset-button-group",children:[Object(h.jsx)(Ko.a,{size:"small",className:"picker-dropdown preset-picker-dropdown",type:"primary",onClick:async()=>{const e=Object(de.a)();if(k){const t=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:e,content:JSON.stringify(x)}),await t.done}u(t=>[...t,{key:e,content:{...x}}])},children:s["input.name-style.preset.label"]}),Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay low-index",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(xd,{onClick:e=>e.stopPropagation(),children:[d.length>0&&Object(h.jsxs)("div",{className:"preset-warning",children:[s["preset.warning.label"],"\xa0",Object(h.jsx)("span",{className:"open-preset-manager",onClick:()=>C(!0),children:s["preset.manager.check.label"]})]}),0===d.length&&Object(h.jsx)(ac.a,{description:s["generic.empty.label"]}),d.map(e=>{let{key:t,content:r}=e;return Object(h.jsx)(ps,{language:s,frameInfo:a,presetContent:r,onActive:()=>{j({...r}),O()},onOverwrite:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:t,content:JSON.stringify(x)}),await e.done}u(e=>e.map(e=>e.key===t?{key:t,content:{...x}}:e))},onDelete:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.delete("presetNameStyleStore",t),await e.done}u(e=>e.filter(e=>e.key!==t))},children:r.preset},t)})]})}),placement:"bottomRight",children:Object(h.jsx)("div",{className:"custom-preset-button",children:Object(h.jsx)(hd.a,{})})},"preset-picker")]})]})]})]})})}),Md=p.a`
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
`;var zd=a(660);const Pd=Object(p.b)(Ml)`
    ${e=>{let{$inline:t}=e;return t?"margin-left: var(--spacing-xs);":"margin-top: var(--spacing);"}}
`,Ad=e=>{var t;let{inline:a,changeFrame:n}=e;const{setting:i}=ai(),{reduceMotionColor:o}=i,l=Fn(),s=Object(r.useMemo)(()=>sd("unofficial"),[]),{frame:c}=ti(Object(li.useShallow)(e=>{let{card:t}=e;return{frame:t.frame}}));return a?Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Dd,{className:"frame-radio",value:c,onChange:n,optionList:s})}),placement:"bottom",children:Object(h.jsx)(bn.a,{title:l["input.frame.unofficial.label"],children:Object(h.jsx)(Pd,{$softMode:o,$inline:a,$active:!1===(null===(t=Ye[c])||void 0===t?void 0:t.isOfficial),className:"picker-dropdown color-picker-dropdown",children:Object(h.jsx)(zd.a,{})})})}):Object(h.jsx)(Dd,{className:"frame-radio",value:c,onChange:n,optionList:s})},Dd=Object(p.b)(fl)`
	${Md}
`,Hd=Object(r.forwardRef)((e,t)=>{let{onSTFrameChange:a,onPasswordChange:n,onStatChange:i}=e;const{setting:o}=ai(),{showExtraDecorativeOption:l}=o,s=Object(r.useMemo)(()=>sd().filter(e=>l||"normal"===e.edition),[l]),{frame:c,setCard:d}=ti(Object(li.useShallow)(e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}})),u=Object(r.useCallback)(e=>{d(t=>{const{typeAbility:r,attribute:o,format:l,password:s,star:c,atk:d,def:u,linkRating:m}=t,b=`${e}`,p="spell"===b||"trap"===b,h=p||"speed-skill"===b,g="tcg"===l?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:$e,f="spell"===b?[g["Spell Card"]]:"trap"===b?[g["Trap Card"]]:r,v="token"===b?Be[l]:s,y=h?"":""===d?"0":d,x=h?"":""===u?"0":u,j=h?"":m,O="token"===b?0:c;return n(v),p&&a(f),i(y,x,j),{...t,frame:b,isLink:"link"===b,attribute:"token"===b?C:p?`${b}`.toUpperCase():o,star:O,typeAbility:f,password:v,atk:y,def:x,linkRating:j}})},[d,n,a,i]);return Object(r.useImperativeHandle)(t,()=>({changeFrame:u})),Object(h.jsx)(Dd,{className:"frame-radio",value:c,onChange:u,optionList:s,suffix:l&&Object(h.jsx)(Ad,{inline:!0,changeFrame:u})})}),Bd=p.b.div`
    ${pl}
`,Wd=e=>{let{onChange:t,value:a,optionList:n,children:i,className:o}=e;const[l,s]=Object(r.useState)(-1),c=n.length;return Object(h.jsxs)(Bd,{className:["ant-radio-group ant-radio-group-outline checkbox-train",o].join(" "),children:[i&&Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(h.jsx)("div",{className:"checkbox-train-input-group",...tn({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[l];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter(t=>`${e.value}`!==t):[...a,`${e.value}`])}}}),children:n.map((e,r)=>{const{label:n,value:i,props:o,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${i}`),d=Object(h.jsxs)("label",{...o,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",l===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter(e=>`${i}`!==e):[...a,`${i}`])},children:[Object(h.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(h.jsx)("span",{className:"ant-radio-button-inner"})}),Object(h.jsx)("span",{className:"label",children:n})]},i);return s?Object(h.jsx)(bn.a,{title:s,children:d},i):d})})]})},$d=Object(p.b)(bc)`
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
`,Yd=Object(r.forwardRef)((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=Fn(),{background:d,backgroundCrop:u,backgroundType:b,backgroundData:p,backgroundSource:g,backgroundFit:f,backgroundStyle:v,isPendulum:y,pendulumSize:x,opacity:j,getUpdater:O,setCard:w}=ti(Object(li.useShallow)(e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d},getUpdater:u,setCard:m}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:o,backgroundStyle:l,isPendulum:s,pendulumSize:c,opacity:d,getUpdater:u,setCard:m}})),k=Object(r.useRef)(null),S=Object(r.useMemo)(()=>O("backgroundSource"),[O]),C=Object(r.useMemo)(()=>O("background"),[O]),F=Object(r.useMemo)(()=>O("backgroundData"),[O]),L=Object(r.useCallback)(e=>w(t=>({...t,backgroundFit:e})),[w]),T=Object(r.useCallback)(e=>w(t=>({...t,backgroundStyle:{...t.backgroundStyle,...e}})),[w]),N=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&w(t=>({...t,backgroundCrop:e}),a)},[s,w]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=k.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=k.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=k.current)||void 0===o||o.forceSource("online",t,a))}})),Object(h.jsx)($d,{ref:k,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:g,defaultInternalSource:p,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:i,forceFit:f,imageStyle:v,onSourceChange:(e,t)=>{S(e),"offline"===e?F(t):C(t)},onCropChange:N,onTainted:l,onSourceLoaded:o,onForceFitChange:L,onImageStyleChange:T,onMaxSizeExceeded:e=>{mn.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(y,j,b,x).backgroundRatio,beforeCropper:null,children:n})});var Kd=a(661);a(593);const Ud=p.b.div`
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
`,Gd=p.b.div`
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
`,Xd=p.b.div`
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
`,qd=Object(r.forwardRef)((e,t)=>{var a;let{receivingCanvas:n,defaultValue:i,onTainted:o,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const b=Fn(),{background:p,backgroundData:g,backgroundSource:f,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,legacyTemplate:O,setCard:w}=ti(Object(li.useShallow)(e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:i,isPendulum:o,legacyTemplate:l},setCard:s,getUpdater:c}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:c,hasBackground:i,isPendulum:o,legacyTemplate:l,setCard:s}})),[k,S]=Object(r.useState)(!0),[C,F]=Object(r.useState)(!0),[L,T]=Object(r.useState)(()=>({...d(),...i})),N=Object(r.useRef)(null),I=Object(r.useMemo)(()=>y("backgroundType"),[y]),R=Object(r.useMemo)(()=>y("legacyTemplate"),[y]),E=Object(r.useCallback)(e=>w(t=>({...t,hasBackground:e.target.checked})),[w]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&s(L)},500),()=>{e=!1}},[L]),Object(r.useEffect)(()=>{S(!1),setTimeout(()=>{F(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...i}=e;var o;"string"!==typeof t&&"string"!==typeof r||!a||(null===(o=N.current)||void 0===o||o.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const l in i)i[l]!==L[l]&&T(e=>({...e,...i}))}}));const M=0===(null!==p&&void 0!==p?p:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(h.jsxs)(Ud,{className:"card-opacity-slider-container",children:[Object(h.jsx)(bn.a,{title:b["input.opacity.legacy.tooltip"],children:Object(h.jsx)(Rl,{className:"background-label",onClick:()=>R(e=>!e.legacyTemplate),children:Object(h.jsxs)("div",{className:"button-label",children:[Object(h.jsx)(dl.a,{checked:O}),"\xa0",b["input.opacity.legacy.label"]]})})}),Object(h.jsx)(il.a,{overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Xd,{className:"input-popover",children:[Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(dl.a,{className:"art-frame",onChange:e=>{T(t=>({...t,boundless:e.target.checked}))},checked:L.boundless,children:b["input.opacity.boundless.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:b["input.opacity.boundless.tooltip"]})]}),Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(dl.a,{className:"art-frame",disabled:!L.boundless,onChange:e=>{T(t=>({...t,frameBorder:e.target.checked,boundless:!!e.target.checked||t.boundless}))},checked:L.frameBorder,children:b["input.opacity.overframe.label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{className:L.boundless?"":"tooltip-disable",children:b["input.opacity.overframe.tooltip"]})]}),ca.map(e=>{let{labelKey:t,subType:a,tooltipKey:r}=e;const n=a&&L[a];return Object(h.jsxs)("div",{className:"layout-setting-option",children:[Object(h.jsx)(dl.a,{className:"art-frame",onChange:e=>T(t=>({...t,[a]:e.target.checked})),checked:n,children:b[t]}),Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:b[r]})]},a)})]})}),children:Object(h.jsx)(Rl,{className:"background-label",children:Object(h.jsx)("div",{className:"button-label",children:b["input.opacity.setting.label"]})})}),Object(h.jsx)(il.a,{visible:k,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:S,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",k?"picker-visible":"",C?"picker-hidden":""].join(" "),content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Gd,{className:["input-popover",M?"overlay-no-background-image":""].join(" "),children:[Object(h.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(h.jsx)(dl.a,{checked:x,onChange:e=>{E(e)},children:b["input.background.toggle-label"]}),Object(h.jsx)("br",{}),Object(h.jsx)("i",{children:b["input.background.description"]})]}),Object(h.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(h.jsx)(Yd,{ref:N,receivingCanvas:n,onSourceLoaded:u,onTainted:o,onCropChange:m,backgroundColor:L.baseFill,children:Object(h.jsxs)("div",{className:"layout-picker-panel",children:[Object(h.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(h.jsx)("h2",{children:b["input.background-color.label"]}),Object(h.jsx)(fc.b,{colors:ua,color:L.baseFill,onChangeComplete:e=>{T(t=>({...t,baseFill:e.hex}))}})]}),!M&&Object(h.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(h.jsx)("h2",{children:b["input.background-type.label"]}),Object(h.jsx)(fl,{className:"background-type-picker",onChange:I,optionList:l({strict:b["input.background-type.strict.label"],fit:b["input.background-type.fit.label"],full:b["input.background-type.full.label"],frame:b["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(h.jsxs)(Rl,{className:"background-label",children:[Object(h.jsx)("div",{className:"background-preview",style:{backgroundColor:x?L.baseFill:c},children:x?p||g?Object(h.jsx)("img",{className:"background-image-preview",src:"online"===f?p:g,alt:"Background"}):null:Object(h.jsx)(Kd.a,{className:"no-background-icon"})}),b["input.background.label"]]})}),da.map(e=>{var t,a;let{labelKey:r,type:n}=e;return"pendulum"!==n||j?Object(h.jsxs)(El,{className:["card-opacity-slider"].join(" "),children:[Object(h.jsx)(Rl,{className:"slider-label",children:b[r]}),Object(h.jsx)(ws.a,{size:"small",min:0,max:100,onChange:e=>T(t=>({...t,[n]:"number"===typeof e?e:100})),value:null!==(t=L[n])&&void 0!==t?t:100}),Object(h.jsx)(Hc,{min:0,max:100,step:5,onChange:e=>T(t=>({...t,[n]:e})),value:null!==(a=L[n])&&void 0!==a?a:100}),Object(h.jsx)("div",{className:"slider-padding"})]},n):null})]})});var Vd=a(662);const _d=new Set(["1","2","3","4","5","i"]),Jd=(e,t,a,r,n,i,o)=>{const l=e.substring(a,r),s="\n"===e[r]||!n;let c=l,d=2;switch(t){case"1":i?(c=`[[${l}]]${s?"":"\n"}`,d=s?4:5):(c=`[${l}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${l}}`;break;case"3":c=`{${l}|}`;break;case"4":c=`{${l}||}`,d=3;break;case"5":c=`{{${l}}}`,d=4;break;case"i":c=`<i>${l}</i>`,d=7}o(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},Qd=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:Zd}=xs.a,eu=Object(r.forwardRef)((e,t)=>{let{id:a,allowHotkey:n,defaultValue:i,onTakePicker:o,onChange:l,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(i),[m,b]=Object(r.useState)(i),[p,g]=Object(r.useState)({id:"",placement:-1}),f=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;u.current=t,b(t)},[]);Object(r.useEffect)(()=>{Qd(p)},[p]),Object(r.useEffect)(()=>{l({target:{value:m}})},[m]);const v=e=>{e!==u.current&&f(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null})),Object(h.jsx)(Zd,{id:a,autoComplete:"off",onFocus:()=>a&&(null===o||void 0===o?void 0:o({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:i,key:o,metaKey:l}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(i||l)&&a&&d!==c&&_d.has(o)&&(e.preventDefault(),Jd(e.currentTarget.value,o,c,d,!0,e.shiftKey,(e,t)=>{f(e),g({id:a,placement:t})}))},onChange:f,...d})}),tu=Object(r.forwardRef)((e,t)=>{let{id:a,defaultValue:n,onTakePicker:i,onChange:o,onKeyDown:l,className:s,...c}=e;const{setting:d}=ai(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[b,p]=Object(r.useState)(n),[g,f]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;m.current=t,p(t)},[]);Object(r.useEffect)(()=>{Qd(g)},[g]),Object(r.useEffect)(()=>{o({target:{value:b}})},[b]);const y=e=>{e!==b&&v(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:y,getValue:()=>m.current})),Object(h.jsx)(xs.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:b,onKeyDown:e=>{var t,r;if(null===l||void 0===l||l(e),!u)return;const{ctrlKey:n,key:i,metaKey:o}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||o)&&a&&c!==s&&_d.has(i)&&(e.preventDefault(),Jd(e.currentTarget.value,i,s,c,!1,e.shiftKey,(e,t)=>{v(e),f({id:a,placement:t})}))},onChange:e=>v(e.target.value),...c})}),au=p.b.div`
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
`,ru=p.b.div`
    .icon-button {
        margin-top: var(--spacing-xxs);
        margin-bottom: var(--spacing-xxs);
    }
`,nu=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{format:n,region:i,attribute:o,attributeType:l,getUpdater:s}=ti(Object(li.useShallow)(e=>{let{card:{format:t,region:a,isLink:r,attribute:n,attributeType:i},getUpdater:o}=e;return{format:t,region:a,isLink:r,attribute:n,attributeType:i,getUpdater:o}})),c=Object(r.useRef)(null),{setting:d,updateSetting:u}=ai(),[,m]=ci("resetCanvasCounter"),{showCreativeOption:p,showExtraDecorativeOption:g,showExtraAttribute:f}=d,[v,y]=Object(r.useState)("custom"===l),x=Object(r.useMemo)(()=>s("attribute"),[s]),j=Object(r.useMemo)(()=>s("attributeType"),[s]),O=Object(r.useMemo)(()=>s("region"),[s]),w=Object(r.useMemo)(()=>((e,t,a)=>F.map(a=>{var r;let{name:n,nameKey:i,isCreative:o}=a;return{label:n===C?Object(h.jsx)(b.a,{}):Object(h.jsx)(bn.a,{overlay:t[i],children:Object(h.jsx)("img",{alt:t[i],src:`/ygocarder/asset/image/attribute/attr-${null===(r=I[e])||void 0===r?void 0:r.fileKey}-${n.toLowerCase()}.png`})}),value:n,isCreative:o}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(i,a,p),[i,a,p]),k=Object(r.useMemo)(()=>((e,t,a)=>L.map(a=>{let{name:r,nameKey:n,isCreative:i}=a;return{label:Object(h.jsx)(bn.a,{overlay:t[n],children:Object(h.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:i}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(n,a,p),[n,a,p]),S=Object(r.useRef)("https://i.postimg.cc/3w5ZQ2rt/attr-custom-void.png");return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{attribute:t,attributeType:a}=e;var r;t&&("custom"===a&&(y(!0),u({showExtraAttribute:!1}),x(t),j("custom"),null===(r=c.current)||void 0===r||r.setValue(t)))}})),Object(h.jsxs)(h.Fragment,{children:[g&&Object(h.jsx)(au,{className:dn("attribute-region-container"),children:Object(h.jsx)(fl,{className:"attribute-region-picker",optionList:Object.values(I).map(e=>{let{key:t}=e;return{value:t,label:t.toUpperCase()}}),value:i,onChange:O})}),Object(h.jsx)(fl,{className:"fill-input-train span-input-train attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:w,suffix:g?Object(h.jsxs)(ru,{children:[Object(h.jsx)(ml,{onClick:()=>{var e,t;y(!0),u({showExtraAttribute:!1}),x(null!==(e=null===(t=c.current)||void 0===t?void 0:t.getValue())&&void 0!==e?e:S.current),j("custom")},active:"custom"===l,Icon:ls.a,tooltipProps:{overlay:a["input.attribute.type-custom"]}}),Object(h.jsx)(ml,{onClick:()=>{y(!1),u({showExtraAttribute:!0})},active:!!T[o],Icon:zd.a,tooltipProps:{overlay:a["input.attribute.type-extra"]}})]}):null,children:Object(h.jsx)("span",{children:a["input.attribute.label"]})}),g&&f&&Object(h.jsx)(fl,{className:"fill-input-train extra-attribute-input",value:o,onChange:e=>{x(e),j("auto"),m(e=>e+1)},optionList:k,suffix:f?Object(h.jsx)(ml,{onClick:()=>u({showExtraAttribute:!1}),Icon:Vd.a,tooltipProps:{overlay:a["button.less.label"]}}):null,children:"\xa0"}),v&&Object(h.jsxs)("div",{className:"link-attribute-input",children:[Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:"\xa0"}),Object(h.jsx)(tu,{ref:c,placeholder:a["input.link.custom.placeholder"],defaultValue:"custom"===l?o:S.current,onChange:e=>{"custom"===l&&(S.current=e.target.value,x(e.target.value),m(e=>e+1))}}),Object(h.jsx)(ml,{onClick:()=>y(!1),Icon:Vd.a,tooltipProps:{overlay:a["button.less.label"]}})]})]})});var iu=a(665),ou=a(666),lu=a(667),su=a(663),cu=a(664);const du=p.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
`,uu=Object(p.b)(Kc.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
`,mu=p.b.div`
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
`,bu=e=>{let{disabled:t=!1,className:a,language:r,activeCardIcon:n,showMixableOnly:i=!1,showRemove:o=!1,onChange:l,onRemove:s}=e;const c=i?e=>e.isMixable:()=>!0;return Object(h.jsxs)(mu,{className:dn("icon-dropdown-container overlay-event-absorber",t?"selector-disabled":"",a),children:[t&&Object(h.jsx)(du,{className:"container-disable-overlay"}),Object(h.jsxs)(uu,{className:"container-group container-star",children:[o&&Object(h.jsxs)(Kc.Option,{onClick:()=>null===s||void 0===s?void 0:s(),children:[Object(h.jsx)(b.a,{}),"\xa0",r["input.icon-type.remove.label"]]}),D.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Kc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})]}),Object(h.jsx)(uu,{className:"container-group container-attribute",children:B.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Kc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})}),Object(h.jsx)(uu,{className:"container-group container-icon",children:$.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(h.jsxs)(Kc.Option,{className:a===n?"menu-active":"",onClick:()=>l(a),children:[i?Object(h.jsxs)(h.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})})]})},pu=p.b.div`
    margin-bottom: var(--spacing);
`,hu=p.b.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`,gu=p.b.div`
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
`,fu=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{starList:n,setCard:i}=ti(Object(li.useShallow)(e=>{let{card:{starList:t},setCard:a}=e;return{starList:t,setCard:a}})),[o,l]=Object(r.useState)(!1),s=Object(r.useMemo)(()=>e=>{i(t=>{const a=Array.isArray(e)?e:e(t.starList);return{...t,starList:a}})},[i]),[{slotList:c,use12:d},u]=Object(r.useState)(()=>{const e=[],t=n.length<=12;for(let a=0;a<U;a++)e.push({slot:`slot-${a}`,index:a,disabled:!1});return t&&(e[12].disabled=!0),{slotList:e,use12:t}}),[m,p]=Object(r.useState)({activeList:[]});Object(r.useImperativeHandle)(t,()=>({changeStatus:e=>{"open"===e?l(!0):"close"===e?l(!1):"toggle"===e&&l(e=>!e),p({activeList:[]})}}));const{activeList:g}=m;return Object(h.jsxs)(un.a,{className:"global-overlay global-no-close",visible:o,width:506,onCancel:()=>l(!1),cancelText:a["manager.template.button.cancel.label"],okButtonProps:{style:{display:"none"}},children:[Object(h.jsxs)(pu,{className:"star-list-control-panel",children:[Object(h.jsx)(dl.a,{checked:d,onChange:e=>{e.target.checked?(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!0,index:12,slot:"slot-12"}],use12:!0}}),s(e=>e.slice(0,12)),p(e=>{let{activeList:t}=e;return{activeList:t.filter(e=>12!==e)}})):(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!1,index:12,slot:"slot-12"}],use12:!1}}),s(e=>function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=[...e];for(let n=e.length;n<t;n++)r.push(a);return r}(e,U)))},children:a["input.icon-type.slot.use-12.label"]}),Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{p(e=>({activeList:c.filter(t=>!e.activeList.includes(t.index)&&!t.disabled).map(e=>e.index)}))},children:a["input.icon-type.slot.revert.label"]}),"\xa0",Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{p({activeList:c.filter(e=>!e.disabled).map(e=>e.index)})},children:a["input.icon-type.slot.select-all.label"]}),"\xa0",Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{p({activeList:[]})},children:a["input.icon-type.slot.deselect-all.label"]})]}),Object(h.jsx)(gu,{className:"star-list-container",children:c.map(e=>{let{slot:t,index:a,disabled:r}=e;const i=n[a],o=K[null!==i&&void 0!==i?i:""],l=g.includes(a);return Object(h.jsxs)("div",{className:dn("star-list-entry",l?"entry-active":"",r?"entry-disable":""),children:[Object(h.jsx)("div",{className:"checkbox-container",children:Object(h.jsx)(dl.a,{disabled:r,checked:l,onChange:e=>{if(r)return;const t=e.target.checked;p(t?e=>({activeList:[...e.activeList,a]}):e=>({activeList:e.activeList.filter(e=>e!==a)}))}})}),Object(h.jsx)("div",{className:"star-value",onClick:()=>{r||p({activeList:[a]})},children:o?o.icon:Object(h.jsx)(b.a,{})})]},t)})}),Object(h.jsxs)(hu,{children:[Object(h.jsxs)(Ko.a,{size:"small",onClick:()=>{s(e=>[...e.slice(1,e.length),""]),p({activeList:[]})},children:[Object(h.jsx)(su.a,{}),"\xa0",a["input.icon-type.slot.shift-left.label"]]}),Object(h.jsxs)(Ko.a,{size:"small",onClick:()=>{s(e=>["",...e.slice(0,e.length-1)]),p({activeList:[]})},children:[a["input.icon-type.slot.shift-right.label"],"\xa0",Object(h.jsx)(cu.a,{})]})]}),Object(h.jsx)(bu,{disabled:0===g.length,language:a,activeCardIcon:g.length>1?"":n[g[0]],showMixableOnly:!0,showRemove:!0,onRemove:()=>{s(e=>c.filter(e=>!e.disabled).map((t,a)=>g.includes(a)?"":e[a]))},onChange:e=>{s(t=>c.filter(e=>!e.disabled).map((a,r)=>g.includes(r)?e:t[r]))}})]})}),vu=p.b.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`,yu=Object(p.b)(fl)`
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
`,xu=Object(p.b)(Ml)`
    margin-left: var(--spacing-sm);
`,ju=p.b.div`
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
`,Ou=e=>{let{language:t,value:a,onChange:r}=e;return Object(h.jsx)(fl,{value:a,onChange:r,optionList:[{value:"auto",tooltipProps:{overlay:t["input.icon-type.alignment.auto"]},label:Object(h.jsx)(b.a,{})},{value:"left",tooltipProps:{overlay:t["input.icon-type.alignment.left"]},label:Object(h.jsx)(iu.a,{})},{value:"center",tooltipProps:{overlay:t["input.icon-type.alignment.center"]},label:Object(h.jsx)(ou.a,{})},{value:"right",tooltipProps:{overlay:t["input.icon-type.alignment.right"]},label:Object(h.jsx)(lu.a,{})}]})},wu=Object(r.forwardRef)((e,t)=>{let{showCreativeOption:a}=e;const n=Fn(),{frame:i,subFamily:o,cardIcon:l,star:s,starList:c,starAlignment:d,getUpdater:u}=ti(Object(li.useShallow)(e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o},getUpdater:l}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:o,getUpdater:l}})),m=ai(e=>e.setting.reduceMotionColor),p=Object(r.useRef)(null),g=Object(r.useMemo)(()=>u("cardIcon"),[u]),f=Object(r.useMemo)(()=>u("subFamily"),[u]),v=Object(r.useMemo)(()=>u("star"),[u]),y=Object(r.useMemo)(()=>u("starAlignment"),[u]);Object(r.useImperativeHandle)(t,()=>({}));const x=Qa(i),j="auto"===l?K["none"===x?"auto":x]:K[l],{labelKey:O,icon:w,showIcon:k,value:S}=null!==j&&void 0!==j?j:K.level,C="string"===typeof O?n[O]:O({language:n}),F=a?Object(h.jsxs)(vu,{children:[k?w:null," ",C," ",Object(h.jsx)(hd.a,{})]}):C,L=Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)(bu,{language:n,activeCardIcon:l,onChange:e=>{var t;g(e),"custom"===e&&(null===(t=p.current)||void 0===t||t.changeStatus("open"))}}),placement:"bottomRight",children:Object(h.jsx)("span",{className:`card-icon-dropdown ${"auto"===l?"":"active"} ${a?"":"disabled"}`,children:F})},"icon-type-picker"),T=a?L:F;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(fu,{ref:p,language:n}),"auto"===l&&"none"===x?a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(fl,{className:"fill-input-train",value:l,onChange:g,optionList:D.map(e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(h.jsx)(b.a,{}),value:a,tooltipProps:{title:n[r]}}}),children:T}),Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(uu,{className:"container-group container-attribute",children:B.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(h.jsxs)(Kc.Option,{className:a===l?"menu-active":"",onClick:()=>g(a),children:[r?Object(h.jsxs)(h.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(h.jsx)(xu,{$softMode:m,className:a?"":"disabled",children:n["input.attribute.label"]})}),Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(uu,{className:"container-group container-icon",children:$.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(h.jsxs)(Kc.Option,{className:a===l?"menu-active":"",onClick:()=>g(a),children:[r?Object(h.jsxs)(h.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(h.jsxs)(xu,{$softMode:m,className:a?"":"disabled",children:[n["input.attribute.spell"],"\xa0/\xa0",n["input.attribute.trap"]]})}),Object(h.jsx)(xu,{$softMode:m,className:a?"":"disabled",onClick:()=>{var e;g("custom"),null===(e=p.current)||void 0===e||e.changeStatus("open")},children:n["input.icon-type.custom.label"]})]}):null:"st"===S?Object(h.jsx)(fl,{className:"fill-input-train",value:o,onChange:f,optionList:(N=n,M.map(e=>{let{value:t,nameKey:a}=e;return{label:t===E?Object(h.jsx)(b.a,{}):Object(h.jsx)(bn.a,{overlay:N[a],children:Object(h.jsx)("img",{alt:N[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}})),children:T}):"custom"===S?Object(h.jsxs)(ju,{className:"custom-star-picker",children:[Object(h.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:T}),Object(h.jsxs)("div",{className:"custom-star-content",children:[c.length>0?Object(h.jsx)("div",{className:"custom-star-preview",children:c.map((e,t)=>{const a=K[e];return Object(h.jsx)("span",{className:"star-preview-entry",children:a?a.icon:Object(h.jsx)(b.a,{})},`${e}-${t}`)})}):null,Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{var e;g("custom"),null===(e=p.current)||void 0===e||e.changeStatus("open")},children:n["generic.edit.label"]})]})]}):Object(h.jsx)(yu,{className:"checkbox-star-train",value:s,onChange:v,optionList:cd,strict:!0,suffix:a&&Object(h.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(h.jsx)(xs.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:v,placeholder:n["input.icon-type.custom.placeholder"]}),Object(h.jsx)(Ou,{language:n,value:d,onChange:y})]}),children:T})]});var N}),ku=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=ti(e=>e.getUpdater),i=Object(r.useRef)(null),o=Object(r.useMemo)(()=>n("effect",void 0,"debounce"),[n]);return Object(r.useEffect)(()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;null===(t=i.current)||void 0===t||t.setValue(e)}})),Object(h.jsx)(eu,{ref:i,id:"effect",allowHotkey:!0,defaultValue:ti.getState().card.effect,onChange:o,onTakePicker:a,autoSize:{minRows:9}})}),Su=p.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,Cu=Object(r.forwardRef)((e,t)=>{const a=Fn(),{isDuelTerminalCard:n,isSpeedCard:i,isLimitedEdition:o,isLegacyCard:l,setCard:s}=ti(Object(li.useShallow)(e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}));Object(r.useImperativeHandle)(t,()=>({}));const c=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}),[s,l]),d=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{hasCornerText:!1,isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}),[s,l]),u=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{hasCornerText:!1,isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}),[s,l]),m=Object(r.useCallback)(e=>s(t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:i,isSpeedCard:o}=t;let l=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&o,l=!d&&!s&&r,c=!(l||s||c)&&i):(s=n,c=!s&&i,d=o,l=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:l,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}),[s]);return Object(h.jsxs)(Su,{className:"checkbox-input",children:[Object(h.jsx)(bn.a,{overlayClassName:"long-tooltip-overlay",overlay:a["input.legacy.tooltip"],children:Object(h.jsx)(dl.a,{className:"input-legacy",onChange:m,checked:l,tabIndex:0,children:a["input.legacy.label"]})}),Object(h.jsx)(dl.a,{className:"input-limited",onChange:c,checked:o,tabIndex:0,children:a["input.limited-edition.label"]}),Object(h.jsx)(dl.a,{className:"input-speed",onChange:u,checked:i,tabIndex:0,children:a["input.speed-duel.label"]}),Object(h.jsx)(dl.a,{className:"input-terminal",onChange:d,checked:n,tabIndex:0,children:a["input.duel-terminal.label"]})]})});var Fu=a(668);const Lu=Object(p.b)(Kc.Container)`
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
    ${Md}
`,Tu=p.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,Nu=p.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,Iu=Object(p.b)(fl)`
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
`,Ru=p.b.div`
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
`,Eu=Object(p.b)(Tu)`
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
`,Mu=Object(r.forwardRef)((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:i}=e;const o=Fn(),{autoLinkRating:l,format:s,hasCornerText:c,isFirstEdition:d,isLegacyCard:u,isLink:m,linkRating:b,linkRatingDisplayMode:p,showDefAndLink:g,sticker:f,getUpdater:v,setCard:y}=ti(Object(li.useShallow)(e=>{let{card:{isLegacyCard:t,sticker:a,format:r,flag:n,isLink:i,linkRating:o,linkMap:l,isFirstEdition:s,hasCornerText:c},getUpdater:d,setCard:u}=e;return{autoLinkRating:l.length,format:r,hasCornerText:c,isFirstEdition:s,isLegacyCard:t,isLink:i,linkRating:o,linkRatingDisplayMode:n[fe],showDefAndLink:1===n[ge],sticker:a,getUpdater:d,setCard:u}})),x=Object(r.useRef)(null),j=Object(r.useRef)(null),O=Object(r.useRef)(null),w=Object(r.useRef)(null),k=Object(r.useRef)(null),C=Object(r.useRef)(null),F=Object(r.useRef)(null),L=!0,T=ar(p,m),N=!T||g,I=[L,N,T].filter(e=>!0===e).length%2===1,R=s&&De[s]?De[s]:De.tcg,E=Object(r.useMemo)(()=>v("atk",e=>e),[v]),M=Object(r.useMemo)(()=>v("def",e=>e),[v]),z=Object(r.useMemo)(()=>v("linkRating",e=>e),[v]),P=Object(r.useMemo)(()=>v("password",void 0,"debounce"),[v]),A=Object(r.useMemo)(()=>v("sticker"),[v]),D=Object(r.useMemo)(()=>v("creator",void 0,"debounce"),[v]),H=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}),[y,u]),B=Object(r.useCallback)(e=>y(t=>{let a;return a=e.target.checked?u?{hasCornerText:!0}:{isSpeedCard:!1,isDuelTerminalCard:!1,hasCornerText:!0}:{hasCornerText:!1},{...t,...a}}),[y,u]),W=Object(r.useMemo)(()=>v("firstEditionText",void 0,"debounce"),[v]),$=Object(r.useMemo)(()=>v("cornerText",void 0,"debounce"),[v]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r,n,i,o;let{password:l,creator:s,atk:c,def:d,linkRating:u,firstEditionText:m,cornerText:b}=e;"string"===typeof c&&(null===(t=O.current)||void 0===t||t.setValue(c)),"string"===typeof d&&(null===(a=w.current)||void 0===a||a.setValue(d)),"string"===typeof l&&(null===(r=x.current)||void 0===r||r.setValue(l)),"string"===typeof s&&(null===(n=j.current)||void 0===n||n.setValue(s)),"string"===typeof u&&(null===(i=k.current)||void 0===i||i.setValue(u)),"string"===typeof m&&(null===(o=C.current)||void 0===o||o.setValue(m))}})),Object(h.jsxs)(Ru,{className:"card-footer-input",children:[(a||n)&&Object(h.jsxs)(h.Fragment,{children:[L&&Object(h.jsx)(tu,{ref:O,id:"atk",addonBefore:o["input.atk.label"],defaultValue:ti.getState().card.atk,onChange:E,onTakePicker:i}),N&&Object(h.jsx)(tu,{ref:w,id:"def",addonBefore:o["input.def.label"],defaultValue:ti.getState().card.def,onChange:M,onTakePicker:i}),I&&Object(h.jsx)("div",{}),T&&Object(h.jsx)(tu,{ref:k,id:"link",addonBefore:Object(h.jsxs)(Eu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.link.label"]}),Object(h.jsx)(bn.a,{title:o["input.link.auto.tooltip"],children:Object(h.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof b&&b.length>0?Object(h.jsx)(dl.a,{onChange:e=>{var t;e.target.checked&&(z(""),null===(t=k.current)||void 0===t||t.setValue(""))}}):Object(h.jsx)("div",{className:"auto-link-rating",children:m?l:"-"})})})]}),defaultValue:`${ti.getState().card.linkRating}`,onChange:z,onTakePicker:i,placeholder:o["input.link.custom.placeholder"]})]}),Object(h.jsx)(tu,{ref:x,id:"password",addonBefore:Object(h.jsxs)(Tu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.password.label"]}),Object(h.jsx)(ml,{onClick:()=>{var e;return null===(e=x.current)||void 0===e?void 0:e.setValue(`${an("0123456789",8)}`)},Icon:S.a,tooltipProps:{overlay:o["button.randomize.label"]}})]}),defaultValue:ti.getState().card.password,onChange:P,onTakePicker:i}),Object(h.jsx)(tu,{ref:j,id:"creator",addonBefore:Object(h.jsxs)(Tu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.copyright.label"]}),Object(h.jsx)(Uo.a,{placement:"topLeft",arrow:!0,overlay:Object(h.jsx)(zc.a,{onClick:e=>e.domEvent.stopPropagation(),children:R.map((e,t)=>Object(h.jsx)(zc.a.Item,{onClick:()=>{var t;null===(t=j.current)||void 0===t||t.setValue(e)},children:e},`${t}`))}),children:Object(h.jsx)("div",{children:Object(h.jsx)(ml,{onClick:()=>{},Icon:Fu.a})})})]}),defaultValue:ti.getState().card.creator,onChange:D,onTakePicker:i}),Object(h.jsx)(tu,{ref:C,id:"firstEditionText",className:"first-edition-text",addonBefore:Object(h.jsxs)(Tu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.1st-edition.label"]}),"\xa0",Object(h.jsx)(dl.a,{className:"input-1st",onChange:H,checked:d,tabIndex:0}),Object(h.jsx)(Uo.a,{placement:"topLeft",arrow:!0,overlay:Object(h.jsx)(zc.a,{onClick:e=>e.domEvent.stopPropagation(),children:He.map((e,t)=>{let{label:a,value:r}=e;return Object(h.jsx)(zc.a.Item,{onClick:()=>{var e;H({target:{checked:!0}}),null===(e=C.current)||void 0===e||e.setValue(r)},children:a},`${t}`)})}),children:Object(h.jsx)("div",{children:Object(h.jsx)(ml,{onClick:()=>{},Icon:Fu.a})})})]}),defaultValue:ti.getState().card.firstEditionText,onChange:W,onTakePicker:i}),Object(h.jsx)(tu,{ref:F,id:"cornerText",className:"corner-text",addonBefore:Object(h.jsxs)(Tu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:o["input.corner.label"]}),"\xa0",Object(h.jsx)(dl.a,{className:"input-corner",onChange:B,checked:c,tabIndex:0})]}),defaultValue:ti.getState().card.cornerText,onChange:$,onTakePicker:i}),Object(h.jsx)(Cu,{}),Object(h.jsx)(fl,{className:"sticker-input fill-input-train",value:f,onChange:A,optionList:dd,children:Object(h.jsx)("span",{children:o["input.sticker.label"]})})]})}),zu=p.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,Pu=Object(p.b)(fl)`
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
`,Au=Object(p.b)(Kc.Option)`
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
`,Du=e=>{let{finishValueList:t,changeFinish:a,language:n,showCreativeOption:i}=e;const[o,l]=Object(r.useState)(x.art.key),s={[x.attribute.key]:t[1],[x.background.key]:t[4],[x.icon.key]:t[2],[x.sticker.key]:t[3],[x.art.key]:t[0]},c=Object.values(s).some(e=>"normal"!==e),d=Object(r.useMemo)(()=>{return e=n,Object.values(x).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[n]),u=i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[x[o].labelKey]," ",Object(h.jsx)(hd.a,{})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[x[o].labelKey]]}),m=Object(h.jsx)(il.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(Kc.Container,{children:[Object(h.jsx)(Yc,{children:n["input.other-finish.label"]}),d.map(e=>{let{label:t,value:a}=e;return Object(h.jsxs)(Au,{className:dn("normal"===s[a]?"default":"",o===a?"menu-active":""),onClick:()=>{l(a)},children:[Object(h.jsx)("div",{className:"value",children:Object(h.jsx)("div",{className:"tag",children:"normal"===s[a]||""===s[a]?"Auto":s[a]})}),Object(h.jsx)("div",{className:"label",children:t})]},a)})]})}),placement:"bottomRight",children:Object(h.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${i?"":"disabled"}`,children:u})},"icon-type-picker");return Object(h.jsx)(Pu,{className:"art-finish-checkbox fill-input-train",value:s[o],onChange:e=>{const t={...s};t[o]=`${e}`,a(t)},optionList:ld,children:m})},Hu=Object(r.forwardRef)((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:n,receivingCanvas:i,onSourceLoaded:o,onTainted:l,onCropChange:s}=e;const c=Fn(),{opacity:d,artFinish:u,otherFinish:b,linkMap:p,isPendulum:g,pendulumSize:f,isLink:v,art:y,artCrop:j,artData:O,artSource:w,artFit:k,artStyle:S,getUpdater:C,setCard:F}=ti(Object(li.useShallow)(e=>{let{card:{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:b},getUpdater:p,setCard:h}=e;return{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:o,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,artStyle:b,getUpdater:p,setCard:h}})),L=Object(r.useRef)(null),T=Object(r.useMemo)(()=>C("linkMap"),[C]),N=Object(r.useCallback)(e=>F(t=>({...t,isLink:e})),[F]),I=Object(r.useMemo)(()=>C("art"),[C]),R=Object(r.useMemo)(()=>C("artData"),[C]),E=Object(r.useCallback)(e=>F(t=>({...t,artFit:e})),[F]),M=Object(r.useCallback)(e=>F(t=>({...t,artStyle:{...t.artStyle,...e}})),[F]),z=Object(r.useMemo)(()=>C("artSource"),[C]),P=Object(r.useMemo)(()=>C("artFinish"),[C]),A=Object(r.useMemo)(()=>C("otherFinish"),[C]),D=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&F(t=>({...t,artCrop:e}),a)},[s,F]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=L.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var i,o;"offline"===n?"string"===typeof r&&a&&(null===(i=L.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(o=L.current)||void 0===o||o.forceSource("online",t,a))}})),Object(h.jsx)(bc,{ref:L,title:c["input.card-art.label"],defaultSourceType:w,defaultExternalSource:y,defaultInternalSource:O,defaultCropInfo:j,forceFit:k,imageStyle:S,receivingCanvas:i,onSourceChange:(e,t)=>{z(e),"offline"===e?R(t):I(t)},onCropChange:D,onTainted:l,onSourceLoaded:o,onForceFitChange:E,onImageStyleChange:M,onMaxSizeExceeded:e=>{mn.a.info({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(g,d,void 0,f).ratio,beforeCropper:a?Object(h.jsx)(Du,{finishValueList:[u,...b],changeFinish:e=>{P(e[x.art.key]),A([e[x.attribute.key],e[x.icon.key],e[x.sticker.key],e[x.background.key]])},language:c,showCreativeOption:n}):null,children:Object(h.jsx)(zu,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(h.jsx)(Mc,{active:!0===v,defaultValue:p,onChange:T,onStatusChange:N},`link-${JSON.stringify(p)}`)})})}),Bu=p.b.div`
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
`,Wu=p.b.span`
    cursor: pointer;
`,$u=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=Fn(),{name:i,format:o,getUpdater:l}=ti(Object(li.useShallow)(e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}})),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)(()=>l("setId"),[l]),u=Object(r.useMemo)(()=>l("name",void 0,"debounce"),[l]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}})),Object(h.jsxs)(Bu,{className:"name-id-input",children:[Object(h.jsx)(tu,{ref:s,id:"name",defaultValue:i,addonBefore:Object(h.jsx)(bn.a,{title:n["input.name.tooltip"],children:Object(h.jsx)(Wu,{onClick:()=>{var e;null===(e=navigator.clipboard)||void 0===e||e.writeText(yr(i))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(h.jsx)(tu,{ref:c,id:"set-id",defaultValue:ti.getState().card.setId,addonBefore:Object(h.jsxs)(Tu,{className:"input-label-with-button",children:[Object(h.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(h.jsx)(ml,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>an("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+an("0000000000111111111122222222223456789",1)+an("0123456789",2))(o))},Icon:S.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})});var Yu=a(669);const{width:Ku,height:Uu}=s,Gu=p.b.div`
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
`,Xu=e=>{let{isPendulum:t,onOverwrite:a,onActive:r,language:n}=e;const{db:i}=ii(),[o,l]=ci("layoutPresetList"),s=Ho(e=>e.setVisible);return 0===o.length?Object(h.jsx)(h.Fragment,{}):Object(h.jsxs)(Gu,{className:"frame-preset-panel",children:[o.length>0&&Object(h.jsx)("div",{className:"preset-panel-top",children:Object(h.jsxs)("div",{className:"preset-warning",children:[n["preset.warning.label"],"\xa0",Object(h.jsx)("span",{className:"open-preset-manager",onClick:()=>s(!0),children:n["preset.manager.check.label"]})]})}),o.map(e=>{let{content:o,key:s}=e;const{dyeList:c,foil:d,frame:u,pendulumFrame:m,leftFrame:b,pendulumRightFrame:p,rightFrame:g,effectStyle:f,pendulumStyle:v}=o,y={frame:u,topLeftFrame:b,topRightFrame:g,bottomLeftFrame:m,bottomRightFrame:p,effectBackground:null===f||void 0===f?void 0:f.background,pendulumEffectBackground:null===v||void 0===v?void 0:v.background};return Object(h.jsx)(vs,{width:Math.round(40*Ku/Uu),height:40,isPendulum:t,resolvedLayoutState:rr(y,t),tabIndex:-1,dyeList:c,foil:d,language:n,onActive:()=>r(o),onDelete:async()=>{if(i){const e=i.transaction("presetLayoutStore","readwrite");await i.delete("presetLayoutStore",s),await e.done}l(e=>e.filter(e=>{let{key:t}=e;return s!==t}))},onOverwrite:a?()=>null===a||void 0===a?void 0:a(s):void 0})})]})},qu=p.b.div`
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
`,Vu=()=>{const e=Fn(),{flag:t,setCard:a}=ti(Object(li.useShallow)(e=>{let{card:{flag:t},setCard:a,getUpdater:r}=e;return{flag:t,setCard:a,getUpdater:r}})),r=(e,t)=>a(a=>{const r=[...a.flag];return r[t]=e,{...a,flag:r}});return Object(h.jsx)(qu,{children:t.map((e,t)=>({component:he[t],value:e,index:t})).sort((e,t)=>e.component.order-t.component.order).map(t=>{let{component:a,value:n,index:i}=t;const{labelKey:o,type:l}=null!==a&&void 0!==a?a:{};return"checkbox"===l?Object(h.jsx)("div",{children:Object(h.jsx)(dl.a,{checked:0!==n,onChange:e=>{const t=e.target.checked?1:0;r(t,i)},children:e[o]})},o):"link-rating-behavior"===l?Object(h.jsx)(fl,{className:"link-rating-behavior-panel",onChange:e=>r(Number(e),i),optionList:[{label:e["input.flag.link-rating-behavior.auto"],value:0},{label:e["input.flag.link-rating-behavior.show"],value:1},{label:e["input.flag.link-rating-behavior.hide"],value:2}],value:n,suffix:Object(h.jsx)("label",{children:e[o]})},o):null})})},{width:_u,height:Ju}=s,Qu=p.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${Lu} {
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
`,Zu=Object(r.forwardRef)((e,t)=>{var a,n;let{frameList:i,onFrameChange:o,onCancel:l}=e;const{db:s}=ii(),c=Fn(),{isPendulum:d,foil:u,frame:m,leftFrame:b,rightFrame:p,pendulumFrame:g,pendulumRightFrame:f,effectBackground:v,pendulumEffectBackground:y,dyeList:x,setCard:j,getUpdater:O}=ti(Object(li.useShallow)(e=>{let{card:{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,dyeList:s,effectStyle:c,pendulumStyle:d},setCard:u,getUpdater:m}=e;return{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,effectBackground:c.background,pendulumEffectBackground:d.background,dyeList:s,setCard:u,getUpdater:m}})),[,w]=ci("layoutPresetList"),S=Object(r.useRef)({topLeftFrame:"auto"===g?"spell":g,topRightFrame:"auto"===g?"spell":g,bottomLeftFrame:"auto"===g?"spell":g,bottomRightFrame:"auto"===g?"spell":g,effectBackground:"auto"===g?"spell":g,pendulumEffectBackground:"auto"===g?"spell":g}),[C,F]=Object(r.useState)(0),[L,T]=Object(r.useState)("frame"),N="frame-layout-main",I=Object(r.useMemo)(()=>od(c),[c]);Object(r.useEffect)(()=>{"pendulumEffectBackground"!==L||d||T("frame")},[L,d]),Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=document.getElementById(N))||void 0===e?void 0:e.focus()}}));const R=Object(r.useMemo)(()=>O("foil"),[O]),E=Object(r.useMemo)(()=>O("pendulumFrame"),[O]),M=Object(r.useMemo)(()=>O("pendulumRightFrame"),[O]),z=Object(r.useMemo)(()=>O("leftFrame"),[O]),P=Object(r.useMemo)(()=>O("rightFrame"),[O]),A=e=>j(t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}}),D=e=>j(t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}}),H=Object(r.useMemo)(()=>O("dyeList"),[O]),B=e=>{"bottomLeftFrame"===L&&E(e),"bottomRightFrame"===L&&M(e),"topLeftFrame"===L&&z(e),"topRightFrame"===L&&P(e),"effectBackground"===L&&A(e),"pendulumEffectBackground"===L&&D(e)},W={frame:m,topLeftFrame:b,topRightFrame:p,bottomLeftFrame:g,bottomRightFrame:f,effectBackground:v,pendulumEffectBackground:y},$=W[L],Y=rr(W,d),K=k[L];return Object(h.jsxs)(Qu,{children:[Object(h.jsxs)("div",{className:"visual-preview-container",children:[Object(h.jsx)("label",{children:c["input.advanced-frame.main.label"]}),Object(h.jsx)(tc,{id:N,tabIndex:0,className:"frame"===L?"active":"",...null!==(a=Ye[m])&&void 0!==a?a:Ue,onClick:()=>T("frame")}),Object(h.jsx)("label",{children:c["input.advanced-frame.detailed.label"]}),Object(h.jsx)(gs,{width:2*Math.round(_u/20),height:2*Math.round(Ju/20),isPendulum:d,baseLayoutState:W,resolvedLayoutState:Y,activeLayout:L,onLayoutSelect:e=>T(e),dyeList:x,foil:u,language:c,vertical:!0}),Object(h.jsxs)("div",{className:"frame-action",children:[Object(h.jsx)(Ko.a,{size:"small",onClick:()=>{E("auto"),M("auto"),z("auto"),P("auto"),A("auto"),D("auto"),R("normal"),H(["","","","","","",""])},children:c["generic.reset.label"]}),Object(h.jsx)(Ko.a,{size:"small",type:"primary",onClick:async()=>{const e=Object(de.a)(),t={foil:u,frame:m,leftFrame:b,pendulumFrame:g,pendulumRightFrame:f,rightFrame:p,effectStyle:{background:v},pendulumStyle:{background:y},dyeList:[...x]};if(s){const a=s.transaction("presetLayoutStore","readwrite");await s.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}w(a=>[...a,{key:e,content:t}])},children:c["input.advanced-frame.save.label"]})]})]}),Object(h.jsx)("div",{children:Object(h.jsxs)(Lu,{className:"pendulum-frame-picker",...tn({stopPropagation:!0,optionLength:i.length,setFocus:F,onTrigger:()=>{C>=0&&B(i[C].value)},onCancel:l}),children:[Object(h.jsx)("div",{className:"frame-part-name",children:c[null===(n=Ge[L])||void 0===n?void 0:n.labelKey]}),"foil"!==L&&Object(h.jsx)(dl.a,{className:dn("inline-input","frame"===L?"checkbox-disabled":""),checked:"auto"===$,disabled:"frame"===L,onChange:e=>{var t;B(e.target.checked?"auto":null!==(t=S.current[L])&&void 0!==t?t:"auto")},children:c["input.frame.auto"]}),"foil"===L?Object(h.jsx)(fl,{className:"foil-radio",value:u,onChange:R,optionList:I,children:Object(h.jsx)("span",{children:c["input.foil.label"]})}):Object(h.jsx)(fl,{className:"frame-radio",value:$,onChange:e=>{"frame"===L?o(e):B(e)},optionList:i}),"number"===typeof K&&Object(h.jsx)(wc,{value:x[K],onChange:e=>{e!==x[K]&&((e,t)=>{j(a=>{const r=k[t];if("number"!==typeof r)return a;const n=[...a.dyeList];return n[r]=e,{...a,dyeList:n}})})(e,L)},children:c["input.advanced-frame.dye"]})]})}),Object(h.jsx)(Xu,{language:c,isPendulum:d,onOverwrite:async e=>{const t={foil:u,frame:m,leftFrame:b,pendulumFrame:g,pendulumRightFrame:f,rightFrame:p,effectStyle:{background:v},pendulumStyle:{background:y},dyeList:[...x]};if(s){const a=s.transaction("presetLayoutStore","readwrite");await s.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}w(a=>a.map(a=>a.key===e?{key:e,content:t}:a))},onActive:e=>{const{dyeList:t,foil:a,frame:r,pendulumFrame:n,leftFrame:i,pendulumRightFrame:l,rightFrame:s,effectStyle:c,pendulumStyle:d}=e;o(r),E(n),M(l),z(i),P(s),A(c.background),D(d.background),R(a),H(t)}})]})}),em=[{...he[0],valueDisplay:(e,t)=>e["input.flag.mix-def-link"],sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.mix-def-link"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...he[2],valueDisplay:(e,t)=>e["input.flag.hide-deactivated-link"],sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.hide-deactivated-link"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...he[1],valueDisplay:(e,t)=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.link-rating-behavior"],": ",e[1===t?"input.flag.link-rating-behavior.show":"input.flag.link-rating-behavior.hide"]]}),sampleDisplay:e=>Object(h.jsxs)(h.Fragment,{children:[e["input.flag.link-rating-behavior"],":",Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:0,children:0}),": ",e["input.flag.link-rating-behavior.auto"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:1,children:1}),": ",e["input.flag.link-rating-behavior.show"]]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(Fl,{data:2,children:2}),": ",e["input.flag.link-rating-behavior.hide"]]})]})]})}],{width:tm,height:am}=s,rm=p.b.div`
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
`,nm=p.b.div`
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
`,im=Object(r.forwardRef)((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:i,onTakePicker:o,onFrameChange:l}=e;const s=Fn(),{isPendulum:c,frame:d,foil:u,leftFrame:m,rightFrame:b,pendulumFrame:p,pendulumRightFrame:g,effectBackground:f,pendulumEffectBackground:v,pendulumScaleBlue:y,pendulumScaleRed:x,pendulumSize:j,dyeList:O,flag:w,setCard:k,getUpdater:S}=ti(Object(li.useShallow)(e=>{let{card:{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectStyle:u,pendulumStyle:m,dyeList:b,flag:p},setCard:h,getUpdater:g}=e;return{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:o,pendulumRightFrame:l,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectBackground:u.background,pendulumEffectBackground:m.background,dyeList:b,flag:p,setCard:h,getUpdater:g}})),{mirrorPendulumScale:C,updateSetting:F}=ai(Object(li.useShallow)(e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}})),L=Object(r.useRef)(null),T=Object(r.useRef)(null),N=Object(r.useRef)(null),[I,R]=Object(r.useState)(!1),E=Object(r.useMemo)(()=>S("pendulumScaleRed"),[S]),M=Object(r.useMemo)(()=>S("pendulumScaleBlue"),[S]),z=Object(r.useMemo)(()=>S("pendulumSize"),[S]),P=Object(r.useMemo)(()=>S("pendulumEffect",void 0,"debounce"),[S]),A=Object(r.useMemo)(()=>{return e=s,Object.values(ue).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[s]),D=Object(r.useMemo)(()=>sd("both").filter(e=>i||"normal"===e.edition),[i]);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=N.current)||void 0===t||t.setValue(a))}}));const H={frame:d,topLeftFrame:m,topRightFrame:b,bottomLeftFrame:p,bottomRightFrame:g,effectBackground:f,pendulumEffectBackground:v},B=w.map((e,t)=>{const a=em[t];return 0!==e&&a?Object(h.jsx)("li",{children:a.valueDisplay(s,e)},a.labelKey):null}).filter(e=>null!=e);return Object(h.jsxs)(nm,{className:"pendulum-input",children:[Object(h.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(h.jsx)("div",{className:"pendulum-checkbox",children:Object(h.jsx)(dl.a,{onChange:e=>k(t=>({...t,isPendulum:e.target.checked})),checked:c,children:s["input.pendulum.label"]})}),Object(h.jsxs)("div",{className:"pendulum-option-container",children:[n&&Object(h.jsx)(il.a,{visible:I,onVisibleChange:R,trigger:["click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(h.jsxs)("div",{className:"overlay-event-absorber",children:[Object(h.jsx)(Zu,{ref:T,isPendulum:c,frameList:D,pendulumFrame:p,onFrameChange:l,onCancel:()=>{var e;R(!1),null===(e=L.current)||void 0===e||e.focus()}}),Object(h.jsx)(Vu,{})]}),children:Object(h.jsxs)(rm,{ref:L,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return R(!0),setTimeout(()=>{var e;null===(e=T.current)||void 0===e||e.focus()},200),!1},children:[Object(h.jsx)("span",{className:"pendulum-frame-label",children:s["input.advanced-frame.label"]}),Object(h.jsx)("div",{className:"card-layout-preview-container",children:Object(h.jsx)(gs,{width:Math.round(30*tm/am),height:30,isPendulum:c,resolvedLayoutState:rr(H,c),tabIndex:-1,dyeList:O,foil:u,language:s})}),B.length>0?Object(h.jsx)(Nl,{content:Object(h.jsxs)(Tl,{children:[s["input.flag.effective.label"],Object(h.jsx)("ul",{children:B})]}),children:Object(h.jsx)(Yu.a,{})}):null,Object(h.jsx)(hd.a,{})]})}),c&&n&&Object(h.jsx)("div",{className:"pendulum-size",children:Object(h.jsx)(il.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(Kc.Container,{children:A.map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Kc.Option,{className:j===t?"menu-active":"",onClick:()=>{z(t)},children:a},t)})})}),placement:"bottomLeft",children:Object(h.jsx)(Ml,{$softMode:a,$active:j!==pe,children:s[ue[j].labelKey]})},"color-picker")}),c&&n&&Object(h.jsx)(dl.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;F({mirrorPendulumScale:t}),t&&E(y)},checked:C,children:s["input.mirror-scale.label"]})]})]}),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(xs.a,{addonBefore:Object(h.jsx)("span",{children:s["input.scale.label"](Object(h.jsx)("span",{className:"blue-scale",children:s["input.scale.blue.label"]},"blue-scale"))}),value:y,allowClear:!0,onChange:e=>{M(e),C&&E(e)}})}),Object(h.jsx)("div",{children:Object(h.jsx)(xs.a,{addonBefore:Object(h.jsx)("span",{children:s["input.scale.label"](Object(h.jsx)("span",{className:"red-scale",children:s["input.scale.red.label"]},"red-scale"))}),value:x,allowClear:!0,onChange:e=>{C&&M(e),E(e)}})}),Object(h.jsx)("div",{className:"joined-row",children:Object(h.jsx)(eu,{ref:N,id:"pendulum-effect",allowHotkey:!0,defaultValue:ti.getState().card.pendulumEffect,onChange:P,onTakePicker:o,autoSize:{minRows:5}})})]})]})}),om=p.b.div`
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
`,lm=p.b.div`
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
`,sm=p.b.div`
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
`,cm=Object(r.forwardRef)((e,t)=>{var a;let{onTakePicker:n}=e;const i=Fn(),{frame:o,cardIcon:l,format:s,furiganaHelper:c,condenseTolerant:d,setCard:u,getUpdater:m}=ti(Object(li.useShallow)(e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:i},setCard:o,getUpdater:l}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===i||void 0===i?void 0:i.condenseTolerant,setCard:o,getUpdater:l}})),b=ai(e=>e.setting.showExtraDecorativeOption),p="ocg"===s?"\uff0f":"/",g=Object(r.useRef)(null),[f,v]=Object(r.useState)(()=>ti.getState().card.effectStyle.minLine),[y,x]=Object(r.useState)(()=>ti.getState().card.pendulumStyle.minLine),[j,O]=Object(r.useState)(()=>ti.getState().card.effectStyle.justifyRatio),[w,k]=Object(r.useState)(()=>ti.getState().card.pendulumStyle.justifyRatio),S=Object(r.useMemo)(()=>m("typeAbility",e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map(e=>`${e}`.trim()).filter(e=>"string"===typeof e&&e.length>0),"debounce"),[m]),C=Object(r.useCallback)(e=>u(t=>({...t,furiganaHelper:e.target.checked})),[u]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&u(e=>{const t={...e.effectStyle,minLine:f,justifyRatio:j},a={...e.pendulumStyle,minLine:y,justifyRatio:w};return{...e,effectStyle:t,pendulumStyle:a}})},500),()=>{e=!1}},[j,f,w,y,u]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{typeAbility:a,effectMinLine:r,pendulumEffectMinLine:n,effectJustifyRatio:i,pendulumEffectJustifyRatio:o}=e;a&&(null===(t=g.current)||void 0===t||t.setValue(a.join(p))),"number"===typeof r&&v(r),"number"===typeof n&&x(n),"number"===typeof i&&O(i),"number"===typeof o&&k(o)}}));const F="auto"===l?Ja({frame:o})?"input.type.monster.label":"input.type.st.label":"st"===(null===(a=A[l])||void 0===a?void 0:a.value)?"input.type.st.label":"input.type.monster.label",L="ocg"===s;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(om,{className:`post-pendulum-input first-line variant-${s}`,children:[Object(h.jsx)(tu,{ref:g,addonBefore:i[F],id:"type-ability",defaultValue:ti.getState().card.typeAbility.join(p),onChange:S,onTakePicker:n}),L&&Object(h.jsx)(bn.a,{overlay:i["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(h.jsx)(dl.a,{className:"input-kanji-helper",onChange:C,checked:c,children:i["input.furigana-helper.label"]})}),Object(h.jsx)(Qs,{}),b&&Object(h.jsx)(il.a,{overlayClassName:"global-input-overlay global-style-picker-overlay paragraph-style",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsxs)(sm,{className:"input-popover",children:[Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsxs)("h2",{children:[i["input.condense.label"],Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:i["input.condense.tooltip"]})]}),Object(h.jsx)("div",{className:"line-input",children:Object(h.jsx)(fl,{className:"condense-input",value:`${d}`,onChange:e=>(e=>{u(t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}}))})(e),optionList:ud})})]}),Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsx)("h2",{children:i["input.text-style.min-line.label"]}),Object(h.jsx)("div",{className:"line-input",children:Object(h.jsxs)(Bl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(h.jsx)(ws.a,{id:"effect-line",size:"small",value:f,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>v("number"===typeof e?e:0),min:0,max:50}),Object(h.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(h.jsx)(ws.a,{id:"pendulum-effect-line",size:"small",value:y,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>x("number"===typeof e?e:0),min:0,max:50})]})})]}),Object(h.jsxs)("div",{className:"input-section",children:[Object(h.jsxs)("h2",{children:[i["input.text-style.justify-ratio.label"],Object(h.jsx)("br",{}),Object(h.jsx)("small",{children:i["input.text-style.justify-ratio.tooltip"]})]}),Object(h.jsx)("div",{className:"justify-ratio-input",children:Object(h.jsxs)(Bl,{className:"single-slider",children:[Object(h.jsxs)("span",{children:[i["input.text-style.min-line.effect.placeholder"],":"]}),Object(h.jsx)(ws.a,{id:"effect-justify-ratio",size:"small",value:j,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>O("number"===typeof e?e:0),min:0,max:5e3,step:100}),Object(h.jsxs)("span",{children:[i["input.text-style.min-line.pendulum-effect.placeholder"],":"]}),Object(h.jsx)(ws.a,{id:"pendulum-effect-justify-ratio",size:"small",value:w,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>k("number"===typeof e?e:0),min:0,max:5e3,step:100})]})})]})]})}),children:Object(h.jsx)(lm,{children:Object(h.jsx)("div",{className:"button-label",children:i["input.text-style.paragraph-style.label"]})})})]})})}),dm=p.b.div`
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
`,um=p.b.div`
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
`,mm={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},bm=()=>{const e=Fn(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:l,statTextStyle:s,typeTextStyle:c}=ti(Object(li.useShallow)(e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,statTextStyle:l,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:o,setCard:c,statTextStyle:l,typeTextStyle:s}})),d=[{info:mm.effectTextStyle,value:r,extraValue:a},{info:mm.pendulumTextStyle,value:o,extraValue:i},{info:mm.statTextStyle,value:s},{info:mm.typeTextStyle,value:c},{info:mm.otherTextStyle,value:n}];return Object(h.jsx)(il.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(h.jsx)("div",{className:"overlay-event-absorber",children:Object(h.jsx)(um,{className:"input-popover",children:d.map(a=>{let{info:r,value:n,extraValue:i}=a;const{keyName:o,labelKey:s,extraKeyname:c}=r,[d,u,m,p]=n,{upSize:g,fontStyle:f}=null!==i&&void 0!==i?i:{};return Object(h.jsxs)("div",{className:"style-section",children:[Object(h.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(h.jsx)("span",{children:e[s]}),Object(h.jsx)(dl.a,{checked:d,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[a,...n.slice(1)]}})},children:e["input.text-style.custom.label"]})]}),d&&Object(h.jsxs)("div",{className:"style-picker-section",children:["string"===typeof f&&"tcg"===t&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h2",{className:"font-style-picker",children:[Object(h.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(h.jsx)(fl,{className:"inline-radio-train",value:f,optionList:[{label:Object(h.jsx)(b.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t})}})]})}),"number"===typeof g&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h2",{className:"size-picker",children:[Object(h.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(h.jsx)(fl,{className:"inline-radio-train",value:g,optionList:[{label:Object(h.jsx)(b.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{l(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t})}})]})}),Object(h.jsx)("h2",{children:Object(h.jsx)(dl.a,{className:"shadow-checkbox",checked:m,onChange:e=>{l(t=>{const a=e.target.checked;return{...t,[o]:[...n.slice(0,2),a,n[3]]}})},children:Object(h.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(h.jsx)(gc,{value:p,onChange:e=>l(t=>({...t,[o]:[...n.slice(0,3),e]}))}),Object(h.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(h.jsx)(fc.b,{colors:ua,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{l(t=>({...t,[o]:[n[0],e.hex,...n.slice(2,4)]}))}})]})]},o)})})}),children:Object(h.jsxs)(dm,{className:"text-style-preview",children:[Object(h.jsx)("div",{className:"text-style-grid",children:d.map(e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[i,o,l,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(h.jsx)("div",{className:"text-style-preview-section",style:{background:i?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==o&&void 0!==o?o:"").length&&i?o:"var(--color-contrast)",textShadow:i&&l?`0 0 2px ${s}`:"none",fontStyle:i&&"italic"===d?"italic":"normal"},children:c&&i?Object(h.jsxs)("div",{children:["+",c]}):"Auto"},n)})}),Object(h.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(594);const pm=Object(r.forwardRef)((e,t)=>{let{applyCardData:a,artworkCanvas:n,backgroundCanvas:i,onCropChange:o,onTainted:l,onSourceLoaded:s}=e;const c=Fn(),{format:d,frame:u,foil:m,finish:b,opacity:p,nameStyleType:g,nameStyle:f,getUpdater:y,setCard:x}=ti(Object(li.useShallow)(e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s},getUpdater:c,setCard:d}=e;return{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:o,nameStyle:l,isLink:s,getUpdater:c,setCard:d}})),{setting:j}=ai(),{showCreativeOption:O,showExtraDecorativeOption:w,reduceMotionColor:k}=j,S=Object(r.useRef)(null),C=Ja({frame:u}),[F,L]=Object(r.useState)(0),T=Object(r.useMemo)(()=>od(c),[c]),N=Object(r.useRef)(null),I=Object(r.useRef)(null),R=Object(r.useRef)(null),E=Object(r.useRef)(null),M=Object(r.useRef)(null),z=Object(r.useRef)(null),P=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useRef)(null),[H,B]=Object(r.useState)({id:"",setValue:()=>{}}),W=Object(r.useMemo)(()=>y("foil"),[y]),$=Object(r.useMemo)(()=>y("finish"),[y]),Y=Object(r.useCallback)(e=>x(t=>({...t,opacity:e})),[x]),K=Object(r.useCallback)((e,t)=>{x(a=>({...a,nameStyleType:e,nameStyle:t}))},[x]),U=Object(r.useMemo)(()=>{return e=c,Object.values(v).map(t=>{let{value:a,label:r,labelKey:n,tooltipKey:i}=t;return{label:n?e[n]:r,tooltip:i?e[i]:void 0,value:a}});var e},[c]);return Object(r.useEffect)(()=>{var e;null===(e=S.current)||void 0===e||e.setValue({font:f.font})},[f]),Object(r.useEffect)(()=>{var e;null===(e=E.current)||void 0===e||e.setValue(p)},[p]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=R.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=E.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,n,i,o,l,s;L(e=>e+1);const{name:c,art:d,artCrop:u,artData:m,artSource:b,background:p,backgroundCrop:h,backgroundData:g,backgroundSource:f,opacity:v,attribute:y,attributeType:x,setId:j,pendulumEffect:O,typeAbility:w,effect:k,atk:S,def:C,creator:F,password:T,effectStyle:N,pendulumStyle:H,firstEditionText:B,cornerText:W}=e;null===(t=R.current)||void 0===t||t.setValue({art:d,artCrop:u,artData:m,artSource:b}),null===(a=E.current)||void 0===a||a.setValue({...v,background:p,backgroundCrop:h,backgroundData:g,backgroundSource:f}),null===(r=I.current)||void 0===r||r.setValue({attribute:y,attributeType:x}),null===(n=M.current)||void 0===n||n.setValue({name:c,setId:j}),null===(i=z.current)||void 0===i||i.setValue({pendulumEffect:O}),null===(o=P.current)||void 0===o||o.setValue(k),null===(l=A.current)||void 0===l||l.setValue({typeAbility:w,effectMinLine:N.minLine,pendulumEffectMinLine:H.minLine,effectJustifyRatio:N.justifyRatio,pendulumEffectJustifyRatio:H.justifyRatio}),null===(s=D.current)||void 0===s||s.setValue({atk:S,def:C,creator:F,password:T,firstEditionText:B,cornerText:W})}})),Object(h.jsxs)("div",{className:["card-info-panel","ocg"===d?"input-ocg":"input-tcg"].join(" "),children:[Object(h.jsx)(Bs,{applyCardData:a}),Object(h.jsx)("br",{}),Object(h.jsx)(Ps,{}),Object(h.jsxs)("div",{className:"card-overlay-input",children:[Object(h.jsx)(Iu,{className:"format-radio",value:d,onChange:e=>{x(t=>{var a,r,n,i,o;const l=vn(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:b,pendulumEffect:p}=l;return null===(a=M.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=P.current)||void 0===r||r.setValue(d),null===(n=z.current)||void 0===n||n.setValue({pendulumEffect:p}),null===(i=A.current)||void 0===i||i.setValue({typeAbility:u}),null===(o=D.current)||void 0===o||o.setValue({creator:b,password:m}),l})},optionList:id,children:Object(h.jsx)("span",{children:c["input.format.label"]})}),Object(h.jsx)(fl,{className:"foil-radio",value:m,onChange:W,optionList:T,children:Object(h.jsx)("span",{children:c["input.foil.label"]})}),w&&Object(h.jsx)(Wd,{className:"finish-checkbox",value:b,onChange:$,optionList:U,children:Object(h.jsxs)(Tu,{className:"finish-checkbox-label",children:[Object(h.jsx)("div",{className:"input-label",children:c["input.finish.label"]}),Object(h.jsx)(ml,{onClick:()=>$([]),Icon:md.a,tooltipProps:{title:c["input.other-finish.reset.tooltip"]}})]})})]}),O&&Object(h.jsxs)("div",{className:"card-layout-input",children:[Object(h.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[c["input.layout.label"]," ",Object(h.jsx)(sl,{content:Object(h.jsx)(Tl,{children:c["input.layout.tooltip"]})})]}),Object(h.jsx)(qd,{ref:E,defaultValue:p,receivingCanvas:i,onChange:Y,onTainted:l,onCropChange:o,onSourceLoaded:s})]}),Object(h.jsx)(Hd,{ref:N,onSTFrameChange:e=>{var t;return null===(t=A.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=D.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var r;return null===(r=D.current)||void 0===r?void 0:r.setValue({atk:e,def:t,linkRating:a})}}),Object(h.jsxs)(Nu,{className:"name-style-id-input",children:[Object(h.jsx)($u,{ref:M,onTakePicker:B}),Object(h.jsx)(Ed,{ref:S,frameInfo:Ye[u],defaultType:g,defaultValue:f,showExtraDecorativeOption:w,onChange:K},F),Object(h.jsx)(wu,{showCreativeOption:O})]}),Object(h.jsxs)("div",{className:"main-info",children:[Object(h.jsxs)("div",{className:"main-info-first",children:[Object(h.jsx)(nu,{ref:I,language:c}),Object(h.jsx)(im,{ref:z,showCreativeOption:O,showExtraDecorativeOption:w,softMode:k,onTakePicker:B,onFrameChange:e=>{var t;return null===(t=N.current)||void 0===t?void 0:t.changeFrame(e)}}),Object(h.jsx)(cm,{ref:A,onTakePicker:B}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(h.jsx)(Bc,{className:"standalone-label",children:c["input.effect.label"]}),O?Object(h.jsx)(bm,{}):Object(h.jsx)("div",{}),Object(h.jsx)(pd,{targetId:H.id,onPick:H.setValue})]}),Object(h.jsx)(ku,{ref:P,onTakePicker:B})]}),Object(h.jsx)(Mu,{ref:D,isMonster:C,showCreativeOption:O,onTakePicker:B})]}),Object(h.jsx)("div",{className:"main-info-second",children:Object(h.jsx)(Hu,{ref:R,receivingCanvas:n,showCreativeOption:O,showExtraDecorativeOption:w,onSourceLoaded:s,onTainted:l,onCropChange:o})})]})]})}),{height:hm,width:gm,cardBorder:fm}=s,vm=68/gm,ym=p.b.div`
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
`,xm=e=>{var t,a,n,i,o,l,s,d;let{index:u,card:b,active:p,selected:g,language:f,onDuplicate:v,onActive:y,onDelete:x,onSelect:j,style:O}=e;const[w,k]=Object(r.useState)(!1),{art:S,artCrop:C,artData:F,artFit:L,artSource:T,artStyle:N,atk:I,attribute:R,attributeType:M,background:z,backgroundCrop:P,backgroundData:A,backgroundFit:D,backgroundSource:H,backgroundStyle:B,backgroundType:W,cardIcon:$,def:Y,effectStyle:K,format:U,frame:G,hasBackground:X,isLink:q,isPendulum:V,leftFrame:_,rightFrame:J,linkMap:Q,name:Z,opacity:ee,pendulumFrame:te,pendulumRightFrame:ae,pendulumScaleBlue:re,pendulumScaleRed:ne,pendulumStyle:ie,setId:oe,star:le,subFamily:se,typeAbility:ce}=b,{topLeftFrame:de,topRightFrame:ue,bottomLeftFrame:me,bottomRightFrame:be}=rr({frame:G,topLeftFrame:_,topRightFrame:J,bottomLeftFrame:te,bottomRightFrame:ae,effectBackground:K.background,pendulumEffectBackground:ie.background},V),pe=yr(Z),he="offline"===T?S?F:"https://i.imgur.com/jjtCuG5.png":S,ge="offline"===H?z?A:"https://imgur.com/pdSVzUZ.png":z,fe="auto"===$?Qa(G):$,ve="st"===fe?se:fe,ye=!!(I||Y||q&&Q.length),xe=ce.join(" / "),je=m(V,ee),{artFrameHeight:Oe,artFrameWidth:we}=je;return Object(h.jsxs)(ym,{className:dn("truncate",p?"active":"",u%2===0?"alternative-color":""),onClick:()=>y(b),style:O,children:[Object(h.jsxs)("div",{className:"left-slot",children:[Object(h.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(t=Ye[de])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=Ye[de])||void 0===a?void 0:a.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(n=Ye[ue])||void 0===n?void 0:n.labelBackgroundColor,backgroundImage:null===(i=Ye[ue])||void 0===i?void 0:i.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(o=Ye[me])||void 0===o?void 0:o.labelBackgroundColor,backgroundImage:null===(l=Ye[me])||void 0===l?void 0:l.labelBackgroundImage}}),Object(h.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(s=Ye[be])||void 0===s?void 0:s.labelBackgroundColor,backgroundImage:null===(d=Ye[be])||void 0===d?void 0:d.labelBackgroundImage}}),Object(h.jsxs)("a",{className:"card-art-container",href:he,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:we*vm,height:Oe*vm,top:(hm-gm)/2/2*vm,left:(gm-we)/2*vm,backgroundColor:c},children:[Object(h.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${B.flipX?-1:1}, ${B.flipY?-1:1})`},children:X&&Object(h.jsx)(Om,{className:"background-art",artLink:ge,name:pe+" - background",fit:D,crop:P,canvasCoordinate:m(V,{...ee,boundless:"fit"!==W})})}),Object(h.jsx)("div",{className:"card-art-component-container",style:{transform:`scale(${N.flipX?-1:1}, ${N.flipY?-1:1})`},children:Object(h.jsx)(Om,{className:"foreground-art",artLink:he,name:pe,fit:L,crop:C,canvasCoordinate:je})})]}),q&&[...Array(9)].map((e,t)=>{if(4===t)return null;const a=V?_e:Ve,r=V?Qe:Je;return Object(h.jsx)("div",{className:dn(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,Q.includes(`${t+1}`)?"marker-checked":""),style:{top:V?16:19,transform:`rotate(${qe[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)}),V&&re&&Object(h.jsx)("div",{className:"pendulum-scale blue-scale",children:re}),V&&ne&&Object(h.jsx)("div",{className:"pendulum-scale red-scale",children:ne})]}),Object(h.jsxs)("div",{className:"right-slot truncate",children:[Object(h.jsxs)("div",{className:"first-row truncate",children:[Object(h.jsx)("div",{className:"select-box",onClick:e=>e.stopPropagation(),children:Object(h.jsx)(dl.a,{checked:g,onChange:e=>{j(b,e.target.checked?"add":"remove")}})}),pe]}),Object(h.jsxs)("div",{className:"second-row truncate",children:["custom"===M&&R.length>0?Object(h.jsx)("img",{className:"attribute-icon",src:R,alt:"Attribute"}):"NONE"===R?null:Object(h.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${U}-${R.toLowerCase()}.png`,alt:"Attribute"}),ce.length>0&&Object(h.jsx)("div",{className:"truncate",children:xe}),"st"!==fe&&Object(h.jsx)("div",{className:"padding"}),ve!==E&&"none"!==fe&&Object(h.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${("custom"===ve?"icon-list":ve).toLowerCase()}.png`,alt:"Icon"}),ve!==E&&"st"!==fe&&"none"!==fe&&"custom"!==fe&&Object(h.jsx)("span",{className:dn("star-content truncate",xe.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof le?le:""!==le?`"${le}"`:""})]}),Object(h.jsxs)("div",{className:"third-row truncate",children:[ye&&Object(h.jsx)("div",{children:I}),ye?Object(h.jsx)("div",{children:"\xa0/\xa0"}):Object(h.jsx)("div",{children:"\xa0"}),ye&&Object(h.jsx)("div",{children:q?`Link ${Q.length}`:Y}),oe&&Object(h.jsx)("div",{className:"set-id",children:oe})]})]}),Object(h.jsx)("div",{className:dn("action-slot",w?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(h.jsxs)("div",{className:"action-container",children:[Object(h.jsx)(bn.a,{placement:"left",title:f["manager.button.duplicate.tooltip"],children:Object(h.jsx)(qc.a,{className:"action-button action-duplicate",onClick:()=>v(b)})}),Object(h.jsx)(bn.a,{placement:"left",title:f["manager.button.download.tooltip"],children:Object(h.jsx)(ic.a,{className:"action-button action-download",onClick:()=>{const{id:e,...t}=b;jl()(JSON.stringify(dr(t)))}})}),Object(h.jsx)(os.a,{placement:"left",title:f["manager.button.delete.label"],onVisibleChange:e=>k(e),onConfirm:()=>x(b.id),okText:f["manager.button.delete.confirm.label"],cancelText:f["manager.button.delete.cancel.label"],children:Object(h.jsx)(bn.a,{placement:"left",title:f["manager.button.delete.tooltip"],children:Object(h.jsx)(gn.a,{className:"action-button action-delete"})})})]})})]})},jm=(e,t,a,r,n)=>{var i;const{artWidth:o,artY:l,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:b,y:p}=null!==(i=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==i?i:{},h=e*((null!==u&&void 0!==u?u:0)/100),g=t*((null!==m&&void 0!==m?m:0)/100),f=o*vm/(h<=0?1:h);return{top:(null!==p&&void 0!==p?p:0)/100*-t*f,left:(null!==b&&void 0!==b?b:0)/100*-e*f,width:e*f,height:n?t*(o/s*vm/(g<=0?1:g)):void 0,transform:[`translateX(${-(o===c?0:(gm-c)/2-fm)*vm}px)`,`translateY(${-(d-l)*vm}px)`].join(" ")}},Om=e=>{let{artLink:t,name:a,crop:n,className:i,fit:o,canvasCoordinate:l,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(()=>{var e,t,a,r;return jm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o)});return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&d(t)},500),()=>{e=!1}},[t]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{var t,a,r,i;e&&b(jm(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(i=u.current)||void 0===i?void 0:i.naturalHeight)&&void 0!==r?r:1,l,n,o))},500),()=>{e=!1}},[n,l,o]),Object(h.jsx)("img",{ref:u,className:dn("card-art",i),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;b(jm(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,o))}})};var wm=a(325),km=a(338),Sm=a(671),Cm=a(672),Fm=a(673);const Lm=p.b.div`
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
`,Tm=e=>{let{language:t,onActive:a}=e;const{selectedMap:n,listName:i,activeId:o,cardDisplayList:l}=Qn(Object(li.useShallow)(e=>{let{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}=e;return{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}})),{batchQueue:s,batchDataMap:c,isBatchDownloading:d,isReady:u,clearQueue:m,stopBatchDownload:b,startBatchDownload:p}=xn(),g=s[0],f=Object(r.useRef)("");Object(r.useEffect)(()=>{if(g&&d&&g!==f.current){f.current=g;const e=l.find(e=>e.id===g);e&&a(e)}},[l,d,g,a]),Object(r.useEffect)(()=>{let e=!0;return u&&(async()=>{const{batchName:t,batchDataMap:a}=xn.getState(),r=new Wo.a;if(Object.values(a).length>0){Object.values(a).forEach(e=>{let{blob:t,name:a}=e;r.file(a,t)});const n=await r.generateAsync({type:"blob"});e&&(wr(`${t}.zip`,n,"application/zip"),b())}})(),()=>{e=!1}},[u,b]);const v=0===Object.keys(n).length;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(un.a,{visible:d,onCancel:()=>b(),onOk:()=>m(),cancelText:t["manager.batch.batch-download.cancel-all.label"],okText:t["manager.batch.batch-download.premature-stop.label"],okButtonProps:{type:"default"},children:Object(h.jsx)(Lm,{className:"exporting-list",children:Object.values(l).map(e=>{let{id:t,name:a}=e;return v||n[t]?Object(h.jsxs)("div",{className:"exporting-item",children:[Object(h.jsx)("div",{className:"export-status",children:o===t?Object(h.jsx)(Sm.a,{}):c[t]?Object(h.jsx)(Cm.a,{}):Object(h.jsx)(Fm.a,{})}),Object(h.jsx)("div",{className:"export-name",children:a})]},t):null})})}),Object(h.jsx)(Ko.a,{className:"batch-download-button",onClick:()=>p(i,v?l.map(e=>e.id):Object.keys(n)),children:v?t["manager.batch.batch-download.label"]:t["manager.batch.batch-download.partial-download.label"]})]})};var Nm=a(674);const Im=Object(p.b)(zc.a.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`,Rm=p.b.div`
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
`,Em=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,selectedMap:i,language:o,list:l,onDelete:s,onDuplicate:c,onActive:d,onSelect:u}=t;return Object(h.jsx)(xm,{index:a,card:l[a],active:l[a].id===n,selected:!!i[l[a].id],language:o,onDuplicate:c,onActive:d,onDelete:s,onSelect:u,style:r})},Mm=e=>{let{language:t,onActive:a,onRequestImport:n}=e;const{activeId:i,cardDisplayList:o,selectedMap:l,selectCard:s,deleteCard:c,duplicateCard:d,setSelectMap:u,resetFilter:m}=Qn(Object(li.useShallow)(e=>{let{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}=e;return{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:o,setSelectMap:l,resetFilter:s}})),{exportScheme:b,updateSetting:p}=ai(Object(li.useShallow)(e=>{let{setting:{exportScheme:t},updateSetting:a}=e;return{exportScheme:t,updateSetting:a}})),[g,f]=Object(r.useState)(0),v=Object(r.useCallback)((e,t)=>{s(e.id,t)},[s]),y=e=>{c(e),f(e=>e+1)};return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{if(e&&g>0){const{activeId:e,cardList:t,setCardList:r}=Qn.getState(),n=t.find(t=>t.id===e);if(n)a(n);else{const e={id:Object(de.a)(),...sa()};r([e],e.name)}}},500),()=>{e=!1}},[a,g]),Object(h.jsxs)(Rm,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[o.length>0&&Object(h.jsxs)("div",{className:"select-panel",children:[Object(h.jsx)(Ko.a,{size:"small",onClick:()=>u([],"replace"),children:t["manager.batch.batch-download.clear.label"]}),Object(h.jsx)(Ko.a,{size:"small",onClick:()=>u(o,"add"),children:t["manager.batch.batch-download.all.label"]}),Object(h.jsx)("div",{children:Object(h.jsx)(Uo.a,{overlay:Object(h.jsx)(zc.a,{children:[{value:"with-name",label:t["manager.batch.batch-download.export-option.with-name.label"]},{value:"with-id",label:t["manager.batch.batch-download.export-option.with-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(Im,{onClick:()=>p({exportScheme:t}),className:t===b?"menu-active":"",children:a},t)})}),children:Object(h.jsxs)("div",{className:"scheme-button",children:[t["manager.batch.batch-download.export-scheme.label"]," ",Object(h.jsx)(Nm.a,{})]})})})]}),Object(h.jsx)("div",{className:"list-container",children:Object(h.jsx)(wm.a,{children:e=>{let{height:r,width:n}=e;return Object(h.jsx)(km.a,{className:"List",height:r,itemCount:o.length,itemSize:68,itemData:{list:o,language:t,activeId:i,selectedMap:l,onDuplicate:d,onActive:a,onDelete:y,onSelect:v},overscanCount:5,width:n,children:Em})}})}),0===o.length&&Object(h.jsxs)("div",{className:"no-card",children:[Object(h.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(h.jsx)("div",{className:"reset-filter",onClick:m,children:t["manager.button.search.button.reset.label"]})]}),0!==o.length&&Object(h.jsx)(Tm,{language:t,onActive:a}),Object(h.jsx)(Ko.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var zm=a(675);const{Panel:Pm}=Ys.a,Am=p.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,Dm=Object(p.b)(un.a)`
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
                ${Sl} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,Hm=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),i="https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing";return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(Am,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(h.jsx)(zm.a,{})]}),Object(h.jsx)(Dm,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(h.jsxs)("div",{className:"sample-modal-container",children:[Object(h.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(h.jsx)("br",{}),t["manager.template.description.line-2"]]}),i&&Object(h.jsx)("div",{className:"download-button",children:Object(h.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",download:!0,children:Object(h.jsx)(Ko.a,{children:t["manager.template.download.label"]})})}),Object(h.jsx)(Ys.a,{ghost:!0,children:Object(h.jsx)(Pm,{header:Object(h.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(h.jsx)("table",{className:"option-container",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(h.jsx)("th",{children:Object(h.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(h.jsx)("div",{children:["tcg","ocg"].map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Frame",altField:"Bottom Frame",value:Object(h.jsx)("div",{children:Ke.map(e=>{let{name:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Attribute",value:Object(h.jsx)("div",{children:[...F,...L].filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Spell/Trap Icon",value:Object(h.jsx)("div",{children:M.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Sticker",value:Object(h.jsx)("div",{children:P.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Foil",value:Object(h.jsx)("div",{children:w().filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Card Finish",value:Object(h.jsxs)("div",{children:[Object.values(v).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)}),Object(h.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Star Type",value:Object(h.jsx)("div",{children:["number","text"].map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Star Alignment",value:Object(h.jsx)("div",{children:["left","center","right"].map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Card Icon Type",value:Object(h.jsx)("div",{children:D.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Background Type",value:Object(h.jsx)("div",{children:l().map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Condense Rate",value:Object(h.jsx)("div",{children:Object.keys(ye).map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Name Style Type",value:Object(h.jsx)("div",{children:["predefined","custom"].map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Name Style - Font",value:Object(h.jsx)("div",{children:Object(h.jsx)(Fl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(h.jsx)("div",{children:Object.keys(oe).map(e=>Object(h.jsx)(Fl,{data:e,children:e},e))})},{field:"Name Style - Pattern",value:Object(h.jsx)("div",{children:ce.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{key:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Pendulum Size",value:Object(h.jsx)("div",{children:me.map(e=>{let{key:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Other Finish - Attribute",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Other Finish - Background",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Other Finish - Icon",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Other Finish - Sticker",value:Object(h.jsx)("div",{children:Object.values(y).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Region",value:Object(h.jsx)("div",{children:Object.values(I).map(e=>{let{key:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})})},{field:"Star List",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.star-list"]}),Object.values(K).filter(e=>{let{isMixable:t}=e;return t}).map(e=>{let{value:t}=e;return Object(h.jsx)(Fl,{data:t,children:t},t)})]})},{field:"Dye List",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.dye-list"]}),Object(h.jsx)("ul",{children:Object.entries(k).sort((e,t)=>e[1]-t[1]).map(e=>{var a,r;let[n]=e;return Object(h.jsx)("li",{children:t[null!==(a=null===(r=Ge[n])||void 0===r?void 0:r.labelKey)&&void 0!==a?a:""]},n)})})]})},{field:"Flag",value:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:t["manager.template.description.flag"]}),em.map(e=>{let{sampleDisplay:a,index:r}=e;return Object(h.jsx)("div",{children:a(t)},r)})]})}].map(e=>{let{field:t,altField:a,value:r}=e;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)(Sl,{children:t}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)(Sl,{children:a})]})]}),Object(h.jsx)("td",{children:r})]},t)})]})})},"sample-option")})]})})]})};var Bm=a(171);const Wm=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),$m=p.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,Ym=Object(p.b)(Hl)`
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
`,Km=Object(r.forwardRef)((e,t)=>{let{language:a,onVisibleChange:n,onSelect:i,onRequestImport:o}=e;const l="list-upload-id",s=Object(r.useRef)(null),{cardList:c,changeEditStatus:d,pendingActiveCard:u,setActiveId:m,setCardList:b,setFilterFunction:p,setListName:g,setPendingActiveCard:f,sortList:v,toggleVisible:y,visible:x}=Qn(Object(li.useShallow)(e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:o,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}})),j=ai(e=>e.setting.exportFormat),[O,w]=Object(r.useState)(0),[k,S]=Object(r.useState)(!1),[C,F]=Object(r.useState)(!1),L=On()(e=>{p({type:"text",value:e.target.value})},250),T=Object(r.useCallback)(e=>{i(e),m(e.id)},[i,m]);return Object(r.useEffect)(()=>{u&&(i(u),m(u.id),f())},[i,u,m,f]),Object(r.useEffect)(()=>{localStorage.setItem("manager-panel-visible",x.toString()),n(x)},[n,x]),Object(r.useEffect)(()=>{const e=Qn.subscribe(e=>e.filterResetSignal,e=>{e&&w(e=>e+1)});return()=>{e()}},[]),Object(r.useImperativeHandle)(t,()=>({}),[]),Object(h.jsx)($m,{children:Object(h.jsx)(Ym,{className:"card-manager-panel",title:Object(h.jsxs)("div",{className:"card-manager-header truncate",children:[Object(h.jsx)(Gm,{className:"manager-label-container truncate",language:a,children:c.length}),Object(h.jsxs)("div",{className:"manager-button-container",children:[Object(h.jsx)("div",{className:"manager-button",children:Object(h.jsx)(Hm,{language:a})}),Object(h.jsx)(Uo.a,{overlay:Object(h.jsx)(zc.a,{children:[{value:_n.level.key,label:a["manager.button.sort.level.label"]},{value:_n.name.key,label:a["manager.button.sort.name.label"]},{value:_n.atk.key,label:a["manager.button.sort.atk.label"]},{value:_n.def.key,label:a["manager.button.sort.def.label"]},{value:_n.set.key,label:a["manager.button.sort.set-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(h.jsx)(zc.a.Item,{onClick:()=>v(t),children:a},t)})}),children:Object(h.jsx)("div",{className:"manager-button",children:Object(h.jsx)(Fu.a,{})})}),Object(h.jsx)(bn.a,{title:a["manager.header.button.download.tooltip"],children:Object(h.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(F(!0),Wm.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Nn.length;for(let r=0;r<e.length;r++){const n=(e,t)=>{const a=Mn[e];"number"===typeof a&&("string"===typeof t&&(i[a]=t),"number"===typeof t&&(i[a]=`${t}`),"boolean"===typeof t&&(i[a]=`${t}`),null==t&&(i[a]=""))},i=Array(a).map(()=>""),{art:o,artCrop:l,artData:s,artFinish:c,artFit:d,artSource:u,artStyle:m,atk:b,attribute:p,attributeType:h,background:g,backgroundCrop:f,backgroundData:v,backgroundFit:y,backgroundSource:x,backgroundStyle:j,backgroundType:O,cardIcon:w,cornerText:k,creator:S,def:C,dyeList:F,effect:L,effectStyle:T,effectTextStyle:N,externalInfo:I,finish:R,firstEditionText:E,flag:M,foil:z,format:P,frame:A,furiganaHelper:D,hasBackground:H,hasCornerText:B,isDuelTerminalCard:W,isFirstEdition:$,isLegacyCard:Y,isLimitedEdition:K,isLink:U,isPendulum:G,isSpeedCard:X,leftFrame:q,legacyTemplate:V,linkMap:_,linkRating:J,name:Q,nameStyle:Z,nameStyleType:ee,opacity:te,otherFinish:ae,otherTextStyle:re,password:ne,pendulumEffect:ie,pendulumFrame:oe,pendulumRightFrame:le,pendulumScaleBlue:se,pendulumScaleRed:ce,pendulumSize:de,pendulumStyle:ue,pendulumTextStyle:me,region:be,rightFrame:pe,setId:he,star:ge,starAlignment:fe,starList:ve,statTextStyle:ye,sticker:xe,subFamily:je,typeAbility:Oe,typeTextStyle:we}=e[r],ke=JSON.stringify(I),Se=M.join("|"),Ce=F.join("|"),Fe=ve.join("|");n("Format",P),n("Region",be),n("Frame",A),n("Name",Q),n("Attribute",p),n("Attribute Type",h),n("Star",`${ge}`),n("Spell/Trap Icon",je),n("Art Link",o),n("Art Data",s),n("Art Source",u),n("Type Ability",Oe.join("/")),n("Effect",L),n("Set Id",he),n("ATK",b),n("DEF",C),n("Password",ne),n("Sticker",xe),n("Copyright",S),n("Is Pendulum",G),n("Pendulum Effect",ie),n("Pendulum Scale Red",ce),n("Pendulum Scale Blue",se),n("Is Link",null!==U&&void 0!==U?U:void 0),n("Link - Top Left Arrow",_.includes("1")),n("Link - Top Arrow",_.includes("2")),n("Link - Top Right Arrow",_.includes("3")),n("Link - Left Arrow",_.includes("4")),n("Link - Right Arrow",_.includes("6")),n("Link - Bottom Left Arrow",_.includes("7")),n("Link - Bottom Arrow",_.includes("8")),n("Link - Bottom Right Arrow",_.includes("9")),n("Link Rating",J),n("First Edition Text",E),n("Is First Edition",$),n("Corner Text",k),n("Has Corner Text",B),n("Is Speed Card",X),n("Is Limited Edition",K),n("Is Duel Terminal Card",W),n("Is Legacy Card",Y),n("Foil",z),n("Art Finish",c),n("Card Finish",R.join(",")),n("Art Crop - X (%)",l.x),n("Art Crop - Y (%)",l.y),n("Art Crop - Width (%)",l.width),n("Art Crop - Height (%)",l.height),n("Is Using Full Art",d),n("Art Style",JSON.stringify(m)),n("Star Type","number"===typeof ge&&ge>=0&&ge<=13?"number":"text"),n("Star Alignment",fe),n("Card Icon Type",w),n("Opacity - Body",te.body),n("Opacity - Pendulum",te.pendulum),n("Opacity - Text",te.text),n("Opacity - Name",te.name),n("Opacity - Base Fill",te.baseFill),n("Opacity - Art Border",te.artBorder),n("Opacity - Effect Box",te.effectBox),n("Opacity - Frame Border",te.frameBorder),n("Opacity - Name Border",te.nameBorder),n("Opacity - Boundless",te.boundless),n("Has Background",H),n("Background Link",g),n("Background Data",v),n("Background Source",x),n("Is Using Full Background",y),n("Background Style",JSON.stringify(j)),n("Background Type",O),n("Background Crop - X (%)",f.x),n("Background Crop - Y (%)",f.y),n("Background Crop - Width (%)",f.width),n("Background Crop - Height (%)",f.height),n("Bottom Frame",oe),n("Condense Rate",T.condenseTolerant),n("Use Furigana Helper",D),n("Name Style Type",ee),n("Name Style - Font",Z.font),n("Name Style - Fill Style",Z.fillStyle),n("Name Style - Headtext Fill Style",Z.headTextFillStyle),n("Name Style - Shadow Color",Z.shadowColor),n("Name Style - Shadow Offset Y",Z.shadowOffsetY),n("Name Style - Shadow Offset X",Z.shadowOffsetX),n("Name Style - Shadow Blur",Z.shadowBlur),n("Name Style - Has Shadow",Z.hasShadow),n("Name Style - Line Color",Z.lineColor),n("Name Style - Line Width",Z.lineWidth),n("Name Style - Line Offset Y",Z.lineOffsetY),n("Name Style - Line Offset X",Z.lineOffsetX),n("Name Style - Has Outline",Z.hasOutline),n("Name Style - Gradient Angle",Z.gradientAngle),n("Name Style - Gradient Color",Z.gradientColor),n("Name Style - Has Gradient",Z.hasGradient),n("Name Style - Emboss Pitch",Z.embossPitch),n("Name Style - Emboss Yaw",Z.embossYaw),n("Name Style - Emboss Thickness",Z.embossThickness),n("Name Style - Has Emboss",Z.hasEmboss),n("Name Style - Preset",Z.preset),n("Name Style - Pattern",Z.pattern),n("Stat Style - Is Custom",ye[0]),n("Stat Style - Fill Color",ye[1]),n("Stat Style - Has Shadow",ye[2]),n("Stat Style - Shadow Color",ye[3]),n("Type Style - Is Custom",we[0]),n("Type Style - Fill Color",we[1]),n("Type Style - Has Shadow",we[2]),n("Type Style - Shadow Color",we[3]),n("Effect Style - Is Custom",N[0]),n("Effect Style - Fill Color",N[1]),n("Effect Style - Has Shadow",N[2]),n("Effect Style - Shadow Color",N[3]),n("Effect Style - Upsize",T.upSize),n("Effect Style - Font Style",T.fontStyle),n("Effect Style - Background",T.background),n("Effect Style - Min Line",T.minLine),n("Effect Style - Justify Ratio",T.justifyRatio),n("Pendulum Size",de),n("Pendulum Effect Style - Is Custom",me[0]),n("Pendulum Effect Style - Fill Color",me[1]),n("Pendulum Effect Style - Has Shadow",me[2]),n("Pendulum Effect Style - Shadow Color",me[3]),n("Pendulum Effect Style - Upsize",ue.upSize),n("Pendulum Effect Style - Font Style",ue.fontStyle),n("Pendulum Effect Style - Background",ue.background),n("Pendulum Effect Style - Min Line",ue.minLine),n("Pendulum Effect Style - Justify Ratio",ue.justifyRatio),n("Other Style - Is Custom",re[0]),n("Other Style - Fill Color",re[1]),n("Other Style - Has Shadow",re[2]),n("Other Style - Shadow Color",re[3]),n("Other Finish - Attribute",ae[0]),n("Other Finish - Icon",ae[1]),n("Other Finish - Sticker",ae[2]),n("Other Finish - Background",ae[3]),n("Left Frame",q),n("Right Frame",pe),n("Bottom Right Frame",le),n("Dye List",Ce),n("Star List",Fe),n("Flag",Se),n("Legacy Template",V),n("External Info (JSON)","{}"===ke?"":ke),t.push(i.map(zn).join(","))}return{value:[Nn.join(","),t.join("\n")].join("\n"),error:""}})(Qn.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&mn.a.error({message:t,description:r})}switch(j){case"xlsx":{const e=Bm.a.read(t,{type:"string"});Bm.a.writeFile(e,`${Qn.getState().listName}.xlsx`);break}default:wr(Qn.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}d("download")}catch(t){}F(!1)},children:C?Object(h.jsx)(Sm.a,{}):Object(h.jsx)(ic.a,{})})}),Object(h.jsx)(bn.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(h.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(l);e&&!k&&e.click()},children:[Object(h.jsx)("input",{ref:s,type:"file",id:l,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=s.current)||void 0===t?void 0:t.files,{isListDirty:n}=Qn.getState(),o=()=>{w(e=>e+1),S(!1),mn.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let l=!0;if(n&&(l=window.confirm(a["prompt.warning.on-import.label"])),l&&r&&r[0]){S(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=Bm.a.read(e,{codepage:65001}),n=Bm.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),l=Bn(n);l.length>0?(b(l,l[0].id),g(t),w(e=>e+1),i(l[0]),S(!1)):o()}catch(e){console.error(e),o()}}else w(e=>e+1),S(!1)}},`upload-${O}`),k?Object(h.jsx)(Sm.a,{}):Object(h.jsx)(ad.a,{})]})},`${k}`),Object(h.jsx)("div",{className:"manager-button close-button",onClick:()=>y(!1),children:Object(h.jsx)(gn.a,{})})]}),Object(h.jsx)("div",{className:"card-manager-filter",children:Object(h.jsx)(xs.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>p({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${O}`)})]}),visible:x,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>y(!1),width:280,children:Object(h.jsx)(Mm,{language:a,onActive:T,onRequestImport:o})})})}),Um=p.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,Gm=e=>{let{language:t,children:a,...n}=e;const{isListDirty:i,cardList:o}=Qn(Object(li.useShallow)(e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}}));return Object(r.useEffect)(()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return i&&o.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[o.length,i,t]),Object(h.jsxs)(Um,{...n,children:[a,i&&o.length>1&&Object(h.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},Xm=p.b.div`
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
        ${pn} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,qm=p.b.div`
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
`,Vm=p.b.div`
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
`,_m=p.b.div`
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
`,Jm=p.b.div`
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
`,Qm=p.b.span`
    color: var(--main-danger);
`,Zm=Object(p.b)(Il)`
    position: absolute;
    z-index: 101;
`,eb=Object(p.b)(Zm)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,tb=Object(p.b)(Zm)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var ab=a(247),rb=a(612),nb=a(613),ib=a(625),ob=a(629),lb=a(331);Object(ab.configure)({ignoreTags:[]});const sb={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+y","command+y"],DOWNLOAD:["ctrl+s","command+s"]},{height:cb,width:db}=s,{height:ub,width:mb}=jr;var bb=function(){var e,t,a,n,i,o,l,s,c;const{allowHotkey:d,softMode:u,globalScale:m,resolution:b,slidingType:p}=ai(Object(li.useShallow)(e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r,resolution:n,slidingType:i}}=e;return{softMode:a,allowHotkey:t,globalScale:r,resolution:n,slidingType:i}})),{isInitiating:g,isLoading:f,language:v,isMetadataReady:y,languageInfo:x,initiate:j,loadDefaultLanguage:O}=Cn(Object(li.useShallow)(e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:o,loadDefaultLanguage:l}})),w=!cn&&!("ontouchstart"in window||navigator.maxTouchPoints>0),[k,S]=Object(r.useState)(!0),[,C]=ci("activeDropzone"),[F]=ci("resetCanvasCounter"),[L,T]=Object(r.useState)(""),[N,I]=Object(r.useState)("online"),{db:R,dbReady:E}=ii(),[M,z]=Object(r.useState)(!1),P=Object(r.useRef)(null),A=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),B=Object(r.useRef)(null),W=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),K=Object(r.useRef)(null),U=Object(r.useRef)(null),G=Object(r.useRef)(null),X=Object(r.useRef)(null),q=Object(r.useRef)(null),V=Object(r.useRef)(null),_=Object(r.useRef)(null),J=Object(r.useRef)(null),Q=Object(r.useRef)(null),Z=Object(r.useRef)(null),ee=Object(r.useRef)(null),te=Object(r.useRef)(null),ae=Object(r.useRef)(null),re=Object(r.useRef)(null),[ne]=Object(r.useState)({artworkCanvasRef:B,backgroundCanvasRef:W,exportCanvasRef:$,frameCanvasRef:K,cardIconCanvasRef:U,pendulumScaleCanvasRef:G,pendulumEffectCanvasRef:X,typeCanvasRef:q,effectCanvasRef:V,nameCanvasRef:_,statCanvasRef:J,setIdCanvasRef:Q,passwordCanvasRef:Z,creatorCanvasRef:ee,stickerCanvasRef:te,finishCanvasRef:ae,lightboxRef:re,previewCanvasRef:Y}),ie=Object(r.useRef)(null),oe=Object(r.useRef)(null),le=Object(r.useRef)(null),[se,ce]=Object(r.useState)(0);Object(r.useEffect)(()=>{const e=()=>{C(0)};let t=window.setTimeout(e,200);const a=()=>{C(1),window.clearTimeout(t),t=window.setTimeout(e,200)};return document.addEventListener("dragover",a),()=>{document.removeEventListener("dragover",a)}},[C]),Object(r.useEffect)(()=>{j()},[j]),Object(r.useEffect)(()=>{y&&O()},[y,O]),Object(r.useEffect)(()=>{["font-family","letter-spacing","--width-label"].forEach(e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=x.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")})},[x]),Object(r.useEffect)(()=>{ce(e=>e+1)},[M]),Object(r.useEffect)(()=>{ce(e=>e+1),"auto"===p&&P.current&&(P.current.style.transform="")},[p]),Object(r.useEffect)(()=>{(async()=>{try{if(R&&!1===f&&v){const e=R.transaction("presetLayoutStore","readonly"),t=[];for await(const o of e.store){const{content:e,key:a}=o.value;t.push({key:a,content:JSON.parse(e)})}await e.done,si.getState().updateGlobalMemory({layoutPresetList:t});const a=R.transaction("presetImageStore","readonly"),r=[];for await(const o of a.store){const{content:e,key:t}=o.value;r.push({key:t,content:JSON.parse(e)})}await a.done,si.getState().updateGlobalMemory({imagePresetList:r});const n=R.transaction("presetNameStyleStore","readonly"),i=[];for await(const o of n.store){const{content:e,key:t}=o.value;i.push({key:t,content:JSON.parse(e)})}await n.done,si.getState().updateGlobalMemory({nameStylePresetList:i})}}catch(e){console.error("Error reading database",e),mn.a.error({message:v["error.database-initialize.message"],description:v["error.database-initialize.description"]})}})()},[R,f,v]),Object(r.useEffect)(()=>{var e;const t=null===(e=$.current)||void 0===e?void 0:e.getContext("2d"),a=ti.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",fi(t)),!1===g&&Do.a.load({custom:{families:["ITC Stone Serif Std Semibold","Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","SVN-Times New Roman Italic","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),n=r?br(JSON.parse(r)):null,i=new URLSearchParams(window.location.search).get("data");if(i){var e,t;const{card:a}=Zn(i),r=br(a),{artSource:o,backgroundSource:l}=r;if("online"===o&&"online"===l)return Zn(i).card;const s={...r};return"offline"===o&&(s.artData=null!==(e=null===n||void 0===n?void 0:n.artData)&&void 0!==e?e:""),"offline"===l&&(s.backgroundData=null!==(t=null===n||void 0===n?void 0:n.backgroundData)&&void 0!==t?t:""),s}return null!==n&&"2.4.6"===a?n:la()}catch(a){return console.error(a),la()}})();a(e),Qn.getState().setCardList([e],e.id),S(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),mn.a.error({message:Ln()["error.load.font.tcg"](e)})},inactive:()=>{T(Ln()["error.load.font.all-tcg"]),S(!1)}})},[g]);const{styleContent:de}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:i,onInactive:o}=e;const{font:l,format:s}=ti(Object(li.useShallow)(e=>({format:e.card.format,font:e.card.nameStyle.font}))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)(()=>{("ocg"===s||"OCG"===l)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),Do.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,o()},fontinactive:i}))},[s,l,t,a,n,i,o]),{styleContent:c}})({isLanguageInitiating:g,onBeforeLoad:()=>{var e;S(!0);const t=null===(e=$.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",fi(t))},onActive:()=>{S(!1)},onInactive:()=>{T(Ln()["error.load.font.all-ocg"]),S(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),mn.a.error({message:Ln()["error.load.font.ocg"](e)})}}),[ue,me]=Object(r.useState)(!1);Object(r.useEffect)(()=>{var e;F>0&&ue&&(null===(e=re.current)||void 0===e||e.refresh(),ce(e=>e+1))},[ue,F]),Object(r.useEffect)(()=>{const e=document.body.classList;u?e.add("reduced-color-motion"):e.remove("reduced-color-motion")},[u]);const be=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||null===(t=re.current)||void 0===t||t.setVisible(t=>"boolean"===typeof e?e:!t)},[d]),pe=Object(r.useRef)(!1),he=document.getElementById("sentry-bug-report");Object(r.useEffect)(()=>{const e="https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920";he&&e&&v&&!1===pe.current&&!1===qo.f()&&(pe.current=!0,rb.a({dsn:e,integrations:[nb.a(),ib.a(),ob.a({colorScheme:"system",autoInject:!1}).attachTo(he,{formTitle:v["contributor.bug-report.tooltip"],nameLabel:v["contributor.bug-report.name.label"],namePlaceholder:v["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:v["contributor.bug-report.message.label"],messagePlaceholder:v["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:v["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:v["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:v["contributor.bug-report.cancel.label"],submitButtonLabel:v["contributor.bug-report.submit.label"],isRequiredLabel:v["contributor.bug-report.required.label"],successMessageText:v["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))},[v,he]);const ge=Object(r.useCallback)((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:i}=null!==t&&void 0!==t?t:{},{setCard:o,card:l}=ti.getState(),s=i?{...e,id:l.id}:e;r&&Qn.getState().addCard(s),o(s,n),ce(e=>e+1),null===(a=H.current)||void 0===a||a.forceCardData(s),sn()},[]),fe=Object(r.useCallback)(async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=le.current)||void 0===t||t.requestImport("replace"))},[d]),ve=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=le.current)||void 0===t||t.requestImport("merge"))},[d]),ye=Object(r.useCallback)(function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||d)if(null===e||void 0===e||e.preventDefault(),"online"===N&&null!==(t=H.current)&&void 0!==t&&t.isLoading())window.alert(v["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:ti.getState().card;null===(r=oe.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),mn.a.error({message:v["error.export.message"],description:v["error.export.description"]})}},[d,v,N]),xe=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!d||(null===e||void 0===e||e.preventDefault(),null===(t=ie.current)||void 0===t||t.download())},[d]),je=Object(r.useMemo)(()=>({IMPORT:e=>fe(e,!0),MERGE:e=>ve(e,!0),EXPORT:e=>ye(e,!0),VIEW:()=>be(!0,!0),DOWNLOAD:e=>xe(e,!0)}),[xe,ye,fe,ve,be]),Oe=Object(r.useCallback)(()=>{me(!0),alert(v["prompt.download.tainted.message"])},[v]),we=Object(r.useCallback)(e=>{var t;"anonymous"===e&&(me(!1),null===(t=re.current)||void 0===t||t.refresh());ce(e=>e+1)},[]),ke=Object(r.useCallback)((e,t)=>{ce(e=>e+1),I(t)},[]),Se=Object(r.useCallback)(()=>{ce(e=>e+1),me(!0)},[]),Ce=Object(r.useCallback)(e=>{z(e)},[]),Fe=Object(r.useCallback)(()=>{me(!1)},[]),Le=f||k||!E;return Object(h.jsx)(ab.HotKeys,{keyMap:sb,handlers:je,children:Object(h.jsxs)("div",{id:"app",onDrop:()=>{},onScroll:e=>{const t=e.currentTarget.scrollTop;if(P.current&&A.current&&"auto"===p){const a=document.body.clientWidth<1600?0:10,r=e.currentTarget.getBoundingClientRect().height,n=P.current.getBoundingClientRect().height;if(r>n+a){const e=Math.max(0,A.current.getBoundingClientRect().height-n);P.current.style.transform=`translateY(${Math.max(0,Math.min(e,t)-a)}px)`}else P.current.style.transform=""}},className:`language-${x.codeName} manager_${M?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:cn?"-webkit-fill-available":"100vh","--card-height":cb*m+"px","--card-width":db*m+"px","--global-scale":`${m}`,"--cropper-width":"375px"},children:[de&&Object(h.jsx)("link",{rel:"stylesheet",type:"text/css",href:de}),Object(h.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Le&&Object(h.jsx)(_m,{className:"app-loading",children:L.length>0?Object(h.jsx)(Qm,{children:L}):null!==(e=x.initialMessage)&&void 0!==e?e:""}),Object(h.jsxs)("div",{ref:A,className:dn("card-preview-panel",ue?"export-tainted":"export-normal",`sliding-type_${p}`),children:[Object(h.jsxs)("div",{ref:P,className:"preview-sliding-window",children:[Object(h.jsxs)(Xm,{className:"data-button-panel",children:[Object(h.jsxs)("div",{className:"imexport",children:[Object(h.jsx)(td,{ref:oe,tainted:ue,artworkCanvas:B.current,onRequireExportData:ye,onRequireDownload:()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.download()},onClose:sn}),Object(h.jsx)("div",{}),Object(h.jsx)(nd,{ref:le,onImport:ge,onClose:sn,allowHotkey:d,language:v})]}),Object(h.jsx)(Yo,{language:v}),Object(h.jsx)(Xc,{ref:ie,canvasMap:ne,imageChangeCount:se,isTainted:ue,onTainted:Se,onExportSucess:Fe,isInitializing:k,globalScale:m,onDownloadError:Oe}),ue&&Object(h.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(h.jsxs)("div",{className:"alert-label",children:[v["alert.download.tainted-first-line"],Object(h.jsx)("br",{}),v["alert.download.tainted-second-line"]," ",Object(h.jsx)($s,{})]}),Object(h.jsx)(Uo.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(h.jsx)(Dc,{onChange:()=>sn()}),children:Object(h.jsxs)(Uc,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(h.jsx)(Go.a,{className:"resolution-icon"}),Object(h.jsx)("span",{className:"resolution-overlay",children:b[1]})]})})]})]}),Object(h.jsxs)(qm,{className:"card-preview-container",children:[Object(h.jsx)(bn.a,{title:v["generic.reset.tooltip"],children:Object(h.jsx)(tb,{className:"reset-button",onClick:()=>{if(window.confirm(v["prompt.reset.message"])){var e;const{setCard:t,card:a}=ti.getState(),r={id:a.id,...oa()},n="tcg"===a.format?r:vn(r,"ocg");t(n,!0),ce(e=>e+1),null===(e=H.current)||void 0===e||e.forceCardData(n)}},children:Object(h.jsx)(md.a,{})})}),Object(h.jsx)(bn.a,{title:Object(h.jsxs)("div",{className:"center",children:[v["button.full-size.label"],d?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),"Ctrl+Y / \u2318+Y"]}):null]}),children:Object(h.jsx)(eb,{className:"lightbox-button",onClick:()=>be(),children:Object(h.jsx)(Sc.a,{})})}),Object(h.jsx)("canvas",{id:"debug-canvas",width:mb*m,height:ub},m+"scale"),Object(h.jsx)("canvas",{id:"preview-canvas",ref:Y,width:db,height:cb},(null!==(t=null===(a=re.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(h.jsxs)(Vm,{className:"card-canvas-group",children:[Object(h.jsx)("canvas",{id:"export-canvas",ref:$,width:db*m,height:cb*m},(null!==(n=null===(i=re.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==n?n:0)+.1),Object(h.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(h.jsx)("canvas",{id:"frameCanvas",className:`${null!==(s=null===(c=re.current)||void 0===c?void 0:c.getCanvasKey())&&void 0!==s?s:0}`,ref:K,width:db*m,height:cb*m},`${null!==(o=null===(l=re.current)||void 0===l?void 0:l.getCanvasKey())&&void 0!==o?o:0} ${F}`),Object(h.jsx)("canvas",{id:"nameCanvas",ref:_,width:db*m,height:148*m}),Object(h.jsx)("canvas",{id:"cardIconCanvas",ref:U,width:db*m,height:222*m}),Object(h.jsx)("canvas",{id:"pendulumScaleCanvas",ref:G,width:db*m,height:920*m}),Object(h.jsx)("canvas",{id:"pendulumEffectCanvas",ref:X,width:db*m,height:920*m}),Object(h.jsx)("canvas",{id:"typeCanvas",ref:q,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"effectCanvas",ref:V,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"statCanvas",ref:J,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"setIdCanvas",ref:Q,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"passwordCanvas",ref:Z,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"creatorCanvas",ref:ee,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"stickerCanvas",ref:te,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{id:"finishCanvas",ref:ae,width:db*m,height:cb*m}),Object(h.jsx)("canvas",{className:"crop-canvas",ref:B}),Object(h.jsx)("canvas",{className:"crop-canvas",ref:W})]})]})]}),w&&Object(h.jsx)(lb.a,{ref:D,target:P,className:"sliding-movable-window",draggable:!0,throttleDrag:1,edgeDraggable:!1,startDragRotate:0,throttleDragRotate:0,throttleScale:0,snappable:!0,pinchable:!0,snapContainer:".card-preview-panel",bounds:{left:0,top:0,right:0,bottom:0,position:"css"},onDrag:e=>{"manual"===p&&(e.target.style.transform=e.transform)}})]}),!1===Le&&Object(h.jsx)(pm,{ref:H,applyCardData:ge,artworkCanvas:B.current,backgroundCanvas:W.current,onSourceLoaded:we,onCropChange:ke,onTainted:Se})]}),Object(h.jsx)(Km,{language:v,onVisibleChange:Ce,onSelect:ge,onRequestImport:()=>{var e;null===(e=le.current)||void 0===e||e.requestImport("new")}}),Object(h.jsx)(Rc,{ref:re,globalScale:m}),Object(h.jsxs)(Jm,{className:"by-me",children:["Made by Lauqerm ",Object(h.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var pb=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,677)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:i,getTTFB:o}=t;a(e),r(e),n(e),i(e),o(e)})};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(bb,{})}),document.getElementById("root")),pb()}},[[596,1,2]]]);
//# sourceMappingURL=main.e4fcf2f9.chunk.js.map