(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{328:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},561:function(e,t,a){},563:function(e,t,a){},569:function(e,t,a){},570:function(e,t,a){},571:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(50),l=a.n(i);a(328),a(329),a(330),a(331),a(332),a(333);const o=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:912,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:77,attributeY:55,attributeX:678,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"}},m=(e,t,a,n)=>{const{boundless:r,body:i,pendulum:l,text:o}={...d(),...t};if("full"===a)return u.fullCard;let s="normal";"fit"!==a&&r||i<100?s=e?"fullPendulum":"fullCard":e?o<100?s="small"===n?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===n&&(s="truePendulumLarge"),"small"===n&&(s="truePendulumSmall"),"medium"===n&&(s="truePendulum")):s="small"===n?"pendulumSmall":"pendulum":s=o<100?"extendedCard":"normal";const c=u[s];return{...c,backgroundRatio:"frame"===a?.686:c.backgroundRatio}},b=[{blendMode:"overlay",opacity:1}],p=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],h={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":b,"art-overlay":b,"art-border":b,"art-border-pendulum":b,"border-pendulum":b,attribute:b,frame:b},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":p,"art-border":p,"art-border-pendulum":p,"border-pendulum":p,frame:p,"frame-background":p,name:p,star:p},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},g={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},f={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},v={normal:{name:"normal",color:"#747b95",isOption:!1},gold:{name:"gold",color:"#cfa65f",isOption:!0},platinum:{name:"platinum",color:"#b1b1b1",isOption:!0}},y=e=>[{label:null===e||void 0===e?void 0:e.normal,...v.normal},{label:null===e||void 0===e?void 0:e.gold,...v.gold},{label:null===e||void 0===e?void 0:e.platinum,...v.platinum}],x={topLeftFrame:0,topRightFrame:1,bottomLeftFrame:2,bottomRightFrame:3,effectBackground:4,pendulumEffectBackground:5,foil:6};var j=a(605),O=a(1);const w="NONE",k=[{name:w,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0}],S=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0}],F={jp:{key:"jp",category:"ocg",fileKey:"ocg"},ch:{key:"ch",category:"ocg",fileKey:"ch"},en:{key:"en",category:"tcg",fileKey:"tcg"},fr:{key:"fr",category:"tcg",fileKey:"fr"},de:{key:"de",category:"tcg",fileKey:"de"},it:{key:"it",category:"tcg",fileKey:"it"},sp:{key:"sp",category:"tcg",fileKey:"sp"}},C={tcg:F.en.key,ocg:F.jp.key},L="NO ICON",T=[{label:Object(O.jsx)(j.a,{}),value:L,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0},{label:"Normal",value:"NORMAL",nameKey:"input.icon.normal",isOption:!0}],N="no-sticker",R=[{value:N,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],I={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1},custom:{value:"custom",labelKey:"input.icon-type.custom.label",fullLabelKey:"input.icon-type.custom.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-icon-list.png"}),isOption:!0,isMixable:!1,showIcon:!1},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0,isMixable:!0,showIcon:!1},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0,isMixable:!0,showIcon:!1},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1},"level-rank":{value:"level-rank",labelKey:"input.icon-type.level-rank.label",fullLabelKey:"input.icon-type.level-rank.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"level-rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1}},B=Object.values(I),z={dark:{value:"dark",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.dark",icon:Object(O.jsx)("img",{className:"icon-image",alt:"dark-icon",src:"/ygocarder/asset/image/subfamily/subfamily-dark.png"}),isOption:!0,isMixable:!0,showIcon:!0},earth:{value:"earth",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.earth",icon:Object(O.jsx)("img",{className:"icon-image",alt:"earth-icon",src:"/ygocarder/asset/image/subfamily/subfamily-earth.png"}),isOption:!0,isMixable:!0,showIcon:!0},fire:{value:"fire",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.fire",icon:Object(O.jsx)("img",{className:"icon-image",alt:"fire-icon",src:"/ygocarder/asset/image/subfamily/subfamily-fire.png"}),isOption:!0,isMixable:!0,showIcon:!0},light:{value:"light",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.light",icon:Object(O.jsx)("img",{className:"icon-image",alt:"light-icon",src:"/ygocarder/asset/image/subfamily/subfamily-light.png"}),isOption:!0,isMixable:!0,showIcon:!0},water:{value:"water",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.water",icon:Object(O.jsx)("img",{className:"icon-image",alt:"water-icon",src:"/ygocarder/asset/image/subfamily/subfamily-water.png"}),isOption:!0,isMixable:!0,showIcon:!0},wind:{value:"wind",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.wind",icon:Object(O.jsx)("img",{className:"icon-image",alt:"wind-icon",src:"/ygocarder/asset/image/subfamily/subfamily-wind.png"}),isOption:!0,isMixable:!0,showIcon:!0},divine:{value:"divine",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.divine",icon:Object(O.jsx)("img",{className:"icon-image",alt:"divine-icon",src:"/ygocarder/asset/image/subfamily/subfamily-divine.png"}),isOption:!0,isMixable:!0,showIcon:!0},spell:{value:"spell",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.spell",icon:Object(O.jsx)("img",{className:"icon-image",alt:"spell-icon",src:"/ygocarder/asset/image/subfamily/subfamily-spell.png"}),isOption:!0,isMixable:!0,showIcon:!0},trap:{value:"trap",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.trap",icon:Object(O.jsx)("img",{className:"icon-image",alt:"trap-icon",src:"/ygocarder/asset/image/subfamily/subfamily-trap.png"}),isOption:!0,isMixable:!0,showIcon:!0}},E=Object.values(z),D={"continuous-l":{value:"continuous-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.continuous",icon:Object(O.jsx)("img",{className:"icon-image",alt:"continuous-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"counter-l":{value:"counter-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.counter",icon:Object(O.jsx)("img",{className:"icon-image",alt:"counter-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-counter-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"equip-l":{value:"equip-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.equip",icon:Object(O.jsx)("img",{className:"icon-image",alt:"equip-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-equip-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"field-l":{value:"field-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.field",icon:Object(O.jsx)("img",{className:"icon-image",alt:"field-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-field-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"quick-play-l":{value:"quick-play-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.quick-play",icon:Object(O.jsx)("img",{className:"icon-image",alt:"quick-play-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-quick-play-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"ritual-l":{value:"ritual-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.ritual",icon:Object(O.jsx)("img",{className:"icon-image",alt:"ritual-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-ritual-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"normal-l":{value:"normal-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.normal",icon:Object(O.jsx)("img",{className:"icon-image",alt:"normal-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-normal-l.png"}),isOption:!0,isMixable:!0,showIcon:!0}},W=Object.values(D),M={...I,...z,...D},A=13,H=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",...e}),$={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:H({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:H({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:H({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:H({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:H({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:H({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:H({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:H({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:H({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:H({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:H({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:H({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:H({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:H({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:H({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:H({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:H({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:H({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})}},P=Object.values($),K={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},U=Object.values(K);var Y=a(597);const G={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:50,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:792,artlessFrameY:553,fontSize:56.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:808,artlessFrameY:553,fontSize:56.5}},X=Object.values(G),V={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},q="medium",_=[{index:0,labelKey:"input.flag.mix-def-link",type:"checkbox"},{index:1,labelKey:"input.flag.link-rating-behavior",type:"link-rating-behavior"}],J=0,Q=1,Z=_.length,ee={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},te={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:64.5,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:64.5,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:64.5,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:951.5,trueEdge:64.5,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:144}]},ae=64.44,ne={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:128.94,trueHeightCap:80}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94,trueHeightCap:122.6}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94,trueHeightCap:155.8}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5,trueHeightCap:79.8}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:126.1}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:155.5}]}},re={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},ie={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},le={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},oe=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],se=oe.reduce(((e,t)=>(e[t.shortForm]=t,e)),{}),ce={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},de={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},ue={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextGapRatio:0,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,vietnameseFont:"Times New Roman",vietnameseFontRatio:1.1},me={...ue,font:"MatrixBook, Times New Roman",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},be={...ue,font:'"StoneSerif-Italic", "SVN-Times New Roman Italic"',vietnameseFont:'"SVN-Times New Roman Italic"',headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},pe={...ue,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},he={tcg:{...be,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...be,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...be,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...be,fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...be,fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...be,fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...be,fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...be,fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},ge={tcg:{...me,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...me,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...me,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...me,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...me,fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...me,fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...me,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...me,fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...pe,fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...pe,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...pe,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...pe,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...pe,fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...pe,fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...pe,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...pe,fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},fe={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps",font:"MatrixRegularSmallCaps",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.55,fontList:[{bulletWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterDeviationMap:{1:{threshold:.94,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:11},"\u1ecb":{uniformBoxDescent:11},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:11},"e\u0329":{uniformBoxDescent:11},"\xc8\u0329":{uniformBoxDescent:11},"\xc9\u0329":{uniformBoxDescent:11},"\xe8\u0329":{uniformBoxDescent:11},"\u1eb8":{uniformBoxDescent:11},"\u1eb9":{uniformBoxDescent:11},"\u1ec6":{uniformBoxDescent:11},"\u1ec7":{uniformBoxDescent:11}}},2:{threshold:0,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:20},"\u1ecb":{uniformBoxDescent:20},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:20},"e\u0329":{uniformBoxDescent:20},"\xc8\u0329":{uniformBoxDescent:20},"\xc9\u0329":{uniformBoxDescent:20},"\xe8\u0329":{uniformBoxDescent:20},"\u1eb8":{uniformBoxDescent:20},"\u1eb9":{uniformBoxDescent:20},"\u1ec6":{uniformBoxDescent:20},"\u1ec7":{uniformBoxDescent:20}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.825,weight:"bold",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.775,headTextOverflow:"condense",headTextBold:!0,metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,fontStyle:"ocg",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},ve={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},ye={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},xe={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},je={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},Oe={"tcg-small":{...be,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...be,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...be,fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},we={"tcg-small":{...me,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...me,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...me,fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...pe,fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...pe,fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...pe,fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},ke={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},Se={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},Fe={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},Ce={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},Le={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},Te={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[Ce.ocg[2]]:Ce.tcg[2],[Ce.ocg[1]]:Ce.tcg[1],[Ce.ocg[0]]:Ce.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[Le.ocg]:Le.tcg},Ne=Object.entries(Te).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),Re={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},Ie=Object.values(Re),Be=Re.effect,ze={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"},foil:{labelKey:"input.foil.label"}},Ee={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},De=[-45,0,45,-90,0,90,-135,180,135],We=[-38,-28,-38,-28,0,-28,-38,-28,-38],Me=[-30,-23,-30,-28,0,-28,-30,-23,-30],Ae=[0,0,0,0,0,0,0,0,0],He=[-5,0,5,0,0,0,5,0,-5],$e=new RegExp("[A-Z\uff21-\uff3a\xc0-\xd6]"),Pe=new RegExp("[\\[\\]\u3010\u3011]"),Ke="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19\xc0-\xd6\xd9-\xf6\xf9-\xff\u0100-\u017e\u0180-\u024f\u1e00-\u1eff!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",Ue=new RegExp(Ke),Ye=new RegExp("[\xc0\xc1\xc2\xc3\xc8\xc9\xca\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]"),Ge=new RegExp(`({[^{}]+?}|${Ke}|.)`),Xe="\u2989",Ve="\u298a",qe="\u27c5",_e="\u27c6",Je="\u169b",Qe="\u169c",Ze="\u27ec",et="\u27ed",tt=new RegExp(`[${[Qe,Je,_e,qe,et,Ze,Ve,Xe].join("")}]|(\\|[^}]+})`,"g"),at="\u2e26\u2e27",nt="\u2e26\u2e26\u2e27\u2e27",rt=new RegExp(`(^|[-\\u2014/[(\\u2018${Xe}${qe}${Je}${Ze}\\s])"`,"g"),it=`${Xe}|${Ve}`,lt=new RegExp(it),ot=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${Xe}?(\\(|\\*)[\\w\\W]+${Ve}?)\\s*$`,st=new RegExp("[#\u2605\u2606@\u221e]"),ct=`(${oe.map((e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm})).join("|")})(?![^{]*})`,dt="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",ut=new RegExp(`[${dt}]`),mt=`.[${dt})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,bt=new RegExp("[\u2460-\u2473\u203b]"),pt=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),ht=new RegExp("[\uff10-\uff19]"),gt=new RegExp("[0-9]"),ft=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,vt=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,yt=new RegExp("[\u30fb]"),xt=new RegExp("[\u30fc]"),jt=new RegExp("[\u2015]"),Ot=new RegExp("[\uff1a]"),wt=new RegExp("[\u3002\uff64]"),kt=new RegExp("[\uff1a]"),St={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},Ft={"\u3002":-.5,"\uff1a":-.25},Ct={">":.125,"<":.125},Lt={},Tt={},Nt={},Rt=e=>"tcg"===e?7:1,It=/{[^{}]+?}/,Bt="\\s\\-/",zt=-2.25,Et=()=>({version:2,format:"tcg",region:"en",frame:"fusion",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:"LIGHT",subFamily:L,cardIcon:"auto",star:6,starAlignment:"auto",starList:[],art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:q,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],flag:[0,0],dyeList:["","","","","","",""],externalInfo:{}}),Dt=()=>({id:Object(Y.a)(),...Et()}),Wt=()=>({version:2,format:"tcg",region:"en",frame:"effect",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:w,subFamily:L,cardIcon:"auto",star:6,starList:[],starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:q,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:N,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],dyeList:["","","","","","",""],flag:[0,0],externalInfo:{}}),Mt=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],At=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],Ht={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},$t=[Ht["549x800"],Ht["561x818"],Ht["813x1185"],Ht["1122x1636"],Ht["1388x2026"],Ht["1626x2370"]],Pt=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],{width:Kt,height:Ut}=s,Yt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ut;const a=document.createElement("canvas");a.width=e,a.height=t;const n=a.getContext("2d");return{canvas:a,ctx:n}};var Gt=a(157),Xt=a.n(Gt),Vt=a(230),qt=a.n(Vt),_t=a(109),Jt=a.n(_t),Qt=a(279),Zt=a.n(Qt),ea=a(280),ta=a.n(ea),aa=a(281),na=a.n(aa),ra=a(282),ia=a.n(ra);function la(e,t){var a,n,r,i,l,o,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,b=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],b+=c[a],m=Math.max(m,c[a]);var p=Jt.a.mallocDouble(u),h=Xt()(p,c.slice(0),d.slice(0),0),g=Jt.a.mallocUint32(m),f=Jt.a.mallocUint32(m),v=Jt.a.mallocDouble(u),y=Xt()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:b);for(function(e,t,a){var n,r,i,l=0,o=Math.min;for(n=0;n<t;++n){for(i=e[l++],r=1;r<a;++r)i=o(e[l],i+1),e[l++]=i;for(r=0;r<a;++r)i=o(e[--l],i+1),e[l]=i;l+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(i=h.stride,r=1,n=a-1;n<s;++n)i[n]=r,r*=c[n];for(n=a-2;n>=0;--n)i[n]=r,r*=c[n];if(qt.a.assign(h,y),o=c[a-1],isFinite(t))if(1===t)Zt()(h.data,u/o|0,0|o,g,f);else if(2===t)ta()(h.data,u/o|0,0|o,g,f);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");ia()(h.data,u/o|0,0|o,g,f,t)}else na()(h.data,u/o|0,0|o,g,f);l=y,y=h,h=l}return qt.a.assign(e,y),Jt.a.freeDouble(v),Jt.a.freeDouble(p),Jt.a.freeUint32(g),Jt.a.freeUint32(f),e}const{width:oa,height:sa}=s,ca=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:oa,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:sa;if(!mn.test(t))return{canvas:e,ctx:e.getContext("2d")};const{ctx:r,canvas:i}=Yt(a,n);return r.filter="grayscale(1)",r.drawImage(e,0,0),r.filter="none",r.fillStyle=t,r.globalCompositeOperation="overlay",r.fillRect(0,0,oa,sa),r.globalCompositeOperation="destination-in",r.drawImage(e,0,0),r.globalCompositeOperation="source-over",{canvas:i,ctx:i.getContext("2d")}};var da=a(37),ua=a(317),ma=a(283),ba=a(140);const pa={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},ha={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},ga={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},fa="sobel",va=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:fa});class ya{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...va(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:n}=e,r=this.getTexture(e);this.normalMapUniform.tHeightMap.value=r,this.normalMapUniform.dimensions.value=[a,n,0],this.renderer.setSize(a,n),this.effectComposer.setSize(a,n),this.effectComposer.reset(this.getRenderTarget(a,n));const{invertedRed:i,invertedGreen:l,invertedSource:o,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(i),this.invertGreen(l),this.invertSource(o),this.setBlurSharp(s,a,n),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new da.h(-.5,.5,.5,-.5,0,1),t=new da.k,a=new ma.a(t,e);this.renderer=new da.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=da.n.clone(ga.uniforms),this.material=new da.l({fragmentShader:ga.fragmentShader,vertexShader:ga.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const n=new da.i(1,1,1,1),r=new da.f(n,this.material);t.add(r),this.gaussianShaderY=new ba.a(ha),this.gaussianShaderX=new ba.a(pa),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new ua.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new da.p(e,t,{minFilter:da.g,magFilter:da.g,format:da.j,stencilBuffer:!1})}getTexture(e){const t=new da.m(e);return t.wrapS=t.wrapT=da.b,t.minFilter=t.magFilter=da.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const xa=(e,t)=>{const a=(e+90)*Math.PI/180,n=(t+90)*Math.PI/180,r=Math.cos(a)*Math.cos(n),i=Math.sin(a)*Math.cos(n),l=Math.sin(n);return[Math.round(100*r)/100,Math.round(100*i)/100,Math.round(100*l)/100]},ja=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:n,maxHeight:r=8,lightColorVec:i=[255,255,255],lightAngleVec:l,lightPitch:o,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,b=null!==n&&void 0!==n?n:t.width,p=u.getImageData(0,0,b,m,{willReadFrequently:!0}).data,h=l||("number"===typeof o&&"number"===typeof s?xa(o,s):[1,0,0]),g=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),f=[h[0]/g,h[1]/g,h[2]/g];if(p)try{const e=new Uint8ClampedArray(b*m);for(let r=0;r<p.length;r+=4)p[r]||p[r+1]||p[r+2]||p[r+3]?e[r/4]=0:e[r/4]=1;const t=la(Xt()(e,[m,b])),a=t.shape[0],n=t.shape[1],l=new Uint8ClampedArray(b*m*4),o=Math.floor(255/r);for(let r=0;r<a;r++)for(let e=0;e<n;e++){const a=4*(r*b+e),n=t.get(r,e);l[a]=n*o,l[a+1]=n*o,l[a+2]=n*o,l[a+3]=0===n?0:255}const s=document.createElement("canvas");s.width=b,s.height=m,s.getContext("2d").putImageData(new ImageData(l,b,m),0,0);const u=document.createElement("canvas");u.width=b,u.height=m;new ya(va(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:fa});const h=document.createElement("canvas");h.width=b,h.height=m;const g=h.getContext("2d");g.drawImage(u,0,0,b,m);const v=((e,t,a,n,r,i)=>{const l=new Uint8ClampedArray(t*a*4),o=Math.floor(n/2);function s(e,t,a,n){return Math.exp(-((e-a)**2+(t-n)**2)/(2*i**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*r**2))}for(let d=0;d<a;d++)for(let n=0;n<t;n++){let r=0,i=0,u=0,m=0;for(let l=-o;l<=o;l++)for(let b=-o;b<=o;b++){const o=n+b,p=d+l;if(o>=0&&p>=0&&o<t&&p<a){const a=4*(d*t+n),l=4*(p*t+o),b=e[a],h=e[a+1],g=e[a+2],f=e[l],v=e[l+1],y=e[l+2],x=s(o,p,n,d)*c(b,f)*c(h,v)*c(g,y);r+=f*x,i+=v*x,u+=y*x,m+=x}}const b=4*(d*t+n);l[b]=r/m,l[b+1]=i/m,l[b+2]=u/m,l[b+3]=e[b+3]}return l})(g.getImageData(0,0,b,m).data,b,m,9,70,20),y=new Uint8ClampedArray(b*m*4);for(let r=0;r<p.length;r+=4){let e=v[r]/127.5-1,t=v[r+1]/127.5-1,a=v[r+2]/127.5-1;const n=(e*f[0]+t*f[1]+a*f[2])/2*(Math.abs(c)+Math.abs(d)),l=Math.max(c,Math.min(n,d));y[r]=Math.round(p[r]+i[0]*l),y[r+1]=Math.round(p[r+1]+i[1]*l),y[r+2]=Math.round(p[r+2]+i[2]*l),y[r+3]=p[r+3]}return new ImageData(y,b,m)}catch(v){return console.error("Could not apply emboss effect",v),null}},Oa=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((n=>{setTimeout((()=>{if(e.current&&t)try{e.current.toBlob((e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),n(!0)},e.onerror=()=>{URL.revokeObjectURL(a),n(!1)}}else n(!1)}else n(!1)}))}catch(a){t.drawImage(e.current,0,0),console.error(a),n(!1)}else n(!1)}),25*a)}))},wa=e=>"speed-skill"===e.frame&&!ka(e),ka=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,Sa=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"level",Fa=e=>!ka({frame:e})||La(e),Ca=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),La=e=>["link"].includes(e)||Ca(e),Ta=(e,t)=>{let a=!1;switch(e){case 1:a=!0;break;case 2:a=!1;break;case 0:a=t}return a},Na=(e,t)=>{var a,n,r,i,l;const{frame:o,topLeftFrame:s,topRightFrame:c,bottomLeftFrame:d,bottomRightFrame:u,effectBackground:m,pendulumEffectBackground:b}=e,p=null!==o&&void 0!==o?o:"effect",h="auto"===s?p:s,g=null!==(n="auto"===d?t?"spell":h:d)&&void 0!==n?n:p;return{topLeftFrame:h,topRightFrame:null!==(a="auto"===c?h:c)&&void 0!==a?a:p,bottomLeftFrame:g,bottomRightFrame:null!==(r="auto"===u?g:u)&&void 0!==r?r:p,effectBackground:null!==(i="auto"===m?g:m)&&void 0!==i?i:p,pendulumEffectBackground:null!==(l="auto"===b?g:b)&&void 0!==l?l:p}};var Ra=a(604),Ia=a(591);const Ba=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return za(e,0)},za=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],n=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),(e=>e===t[0]?t[1]:t[0]));if(t)for(t=0;t<a.length;++t)e=n(e,a[t]);else for(t=a.length;t--;)e=n(e,a[t]);return e},Ea={version:"ve",format:"fm",region:"rg",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg",minLine:"eml"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg",minLine:"pml"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",subFamily:"sf",starList:"stl",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",dyeList:"dl",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},Da=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ea;const a={},n={...e};return Object.keys(n).forEach((e=>{const r=n[e];if("object"!==typeof r||null===r||Array.isArray(r)){const n=t[e];"string"===typeof n&&(a[n]=r)}else{var i;const n=null===(i=t[e])||void 0===i?void 0:i._newKey;n&&(a[n]=Da(r,t[e]))}})),a},Wa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ea;const a={};return Object.keys(t).forEach((n=>{const r=t[n];if("object"!==typeof r||null===r||Array.isArray(r))null!=e[r]&&(a[n]=e[r]);else{const i=null===r||void 0===r?void 0:r._newKey;i&&e[i]&&(a[n]=Wa(e[i],t[n]))}})),a},Ma=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ea;const a="string"===typeof e?JSON.parse(Ba(decodeURIComponent(e))):e,n={};return Object.keys(t).forEach((e=>{const r=t[e];if("object"!==typeof r||null===r||Array.isArray(r))null!=a[r]&&(n[e]=a[r]);else{const i=null===r||void 0===r?void 0:r._newKey;i&&a[i]&&(n[e]=Ma(a[i],t[e]))}})),n},Aa=function(e){var t,a,n,r,i,l;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wt();delete o.version;const s={id:Object(Y.a)(),...o,...Object(Ra.a)(e)};if(s.effectStyle={...Wt().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...Wt().pendulumStyle}:s.pendulumStyle={...Wt().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==s.region&&(s.region=F["tcg"===s.format?"en":"jp"].key),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.pendulumSize&&(s.pendulumSize="medium"),null==s.rightFrame&&(s.rightFrame="auto"),null==s.leftFrame&&(s.leftFrame="auto"),null==s.pendulumRightFrame&&(s.pendulumRightFrame="auto"),null==s.finish&&(s.finish=[]),Array.isArray(s.starList)||(s.starList=[]),null==s.artFinish&&(s.artFinish="normal"),s.finish){const e=s.finish;e.includes("art")&&(s.finish=e.filter((e=>"art"!==e)),s.otherFinish=[s.artFinish,s.artFinish,s.artFinish,s.artFinish])}!Array.isArray(s.otherFinish)||3!==s.otherFinish.length&&null!=s.otherFinish[3]||(s.otherFinish[3]=Wt().otherFinish[3]),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(n=s.artSource)&&void 0!==n?n:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(r=s.background)&&void 0!==r?r:"")&&(s.background=""),""===(null!==(i=s.backgroundData)&&void 0!==i?i:"")&&(s.backgroundData=""),""===(null!==(l=s.backgroundSource)&&void 0!==l?l:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),null==s.linkRating&&(s.linkRating=""),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto");const c=[0,0];if(Array.isArray(s.flag)){if(s.flag.length<c.length){const e=[...s.flag];s.flag=c.map(((t,a)=>"number"===typeof e[a]?e[a]:t))}}else s.flag=c;const u=["","","","","","",""];if(Array.isArray(s.dyeList)){if(s.dyeList.length<u.length){const e=[...s.dyeList];s.dyeList=u.map(((t,a)=>"string"===typeof e[a]?e[a]:t))}}else s.dyeList=u;if(0===s.version||1===s.version){s.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:n,isLink:r,linkMap:i,frame:l}=s,o=ka({frame:l});("auto"!==e||t?!!(a||n||r&&i.length):o)||(s.atk="",s.def="")}return s},Ha=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},$a=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},Pa=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:Da(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:Da(a)}},Ka=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),Ua=(e,t)=>{const{aspect:a,height:n,width:r,x:i,y:l,unit:o}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:b}=null!==t&&void 0!==t?t:{};return Ka(a,s)&&Ka(n,c)&&Ka(r,d)&&Ka(i,u)&&Ka(l,m)&&o===b},Ya=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Ga=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Xa=(e,t,a)=>{const n=document.createElement("a"),r=window.URL.createObjectURL(t);n.download=e,n.href=r,n.dataset.downloadurl=[a,n.download,n.href].join(":");const i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});n.dispatchEvent(i),n.remove(),window.URL.revokeObjectURL(r)};const Va={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[L]:"None"},qa=Object.entries(Va).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),_a={large:"Large",medium:"Normal",small:"Small"},Ja=Object.entries(_a).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),Qa={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},Za=Object.entries(Qa).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),en={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},tn=Object.entries(en).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),an={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},nn=Object.entries(an).reduce(((e,t)=>{const[a,n]=t;return e[n.key]=a,e}),{}),rn=(e,t)=>{const{name:a,star:n,typeAbility:r,subFamily:i,effect:l,atk:o,def:s,art:c,artData:d,artSource:u,password:m,creator:b,attribute:p,setId:h,pendulumEffect:g,pendulumScaleBlue:f,pendulumScaleRed:v,pendulumSize:y,isPendulum:x,linkMap:j,frame:O,externalInfo:w,nameStyle:k,nameStyleType:S,artFinish:F,finish:C}=e,L=Ya(a),T=Ga(l),N=Ga(g),R=Va[i],I=Qa[p],B=en[O],z="predefined"===S?nn[[k.preset,F,C.join("|")].join("-")]:"common",{pendulum:E,rarity:D,...W}=null!==w&&void 0!==w?w:{};return{isPartial:a!==L||l!==T||g!==N||void 0===R||void 0===I||void 0===B||void 0===z,result:{version:"1.0.0",name:L,level:`${n}`,type:r.join("/"),icon:null!==R&&void 0!==R?R:"",effect:T,atk:o,def:s,serial:m,copyright:b,attribute:null!==I&&void 0!==I?I:"None",id:h,pendulum:{enabled:x,effect:N,blue:f,red:v,boxSize:_a[y],boxSizeEnabled:!0,...E},variant:"Normal",link:{topLeft:!!j.includes("1"),topCenter:!!j.includes("2"),topRight:!!j.includes("3"),middleLeft:!!j.includes("4"),middleRight:!!j.includes("6"),bottomLeft:!!j.includes("7"),bottomCenter:!!j.includes("8"),bottomRight:!!j.includes("9")},layout:null!==B&&void 0!==B?B:"Normal",boxSize:"large"===y?"Small":"Normal",rarity:null!==z&&void 0!==z?z:D,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...W}}},ln={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[L]:"None"},on=Object.entries(ln).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),sn=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),cn=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce(((e,t)=>{const[a,n]=t;return e[n]=a,e}),{}),dn={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},un=e=>{var t,a,n;const{atk:r,attribute:i,card_images:l,card_sets:o,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:b,name:p,pend_desc:h,race:g,scale:f,typeline:v,linkval:y,linkmarkers:x}=e,j=on[g],O=sn[i],[k,S]=cn[d].split("_"),F=null!==(t=b?b.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",C=F.split("\n"),T=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==k&&void 0!==k?k:"normal"})&&C.length>1?[`[${C[0].replaceAll("\r","")}]`,...C.slice(1)].join("\n"):F,N=h?h.replaceAll(/^''|''$/g,""):"",R=l[0].image_url_cropped,I=Wt();return{isPartial:!1,result:{...I,name:p,atk:r<0||null==r?"?":`${r}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==O&&void 0!==O?O:w,effect:T,subFamily:null!==j&&void 0!==j?j:L,setId:null!==(a=null===(n=o[o.length-1])||void 0===n?void 0:n.set_code)&&void 0!==a?a:"",frame:null!==k&&void 0!==k?k:"normal",star:"link"===d&&y?y:m,typeAbility:v||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:R,artSource:"online",artCrop:{...I.artCrop,y:0},isLink:"link"===k&&Array.isArray(x),linkMap:(null!==x&&void 0!==x?x:[]).map((e=>dn[e])),isPendulum:"pendulum"===S,pendulumScaleBlue:null==f?"0":`${f}`,pendulumScaleRed:null==f?"0":`${f}`,pendulumEffect:N,password:`${u}`.padStart(8,"0"),creator:Ce.tcg[0]}}},mn=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,bn=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const i=e.replace("#","");let l=[0,0,0,1];var a,n,r;if(3===i.length||4===i.length)l=[parseInt(`${i[0]}${i[0]}`,16),parseInt(`${i[1]}${i[1]}`,16),parseInt(`${i[2]}${i[2]}`,16),parseInt(`${null!==(a=i[3])&&void 0!==a?a:"f"}${null!==(n=i[3])&&void 0!==n?n:"f"}`,16)];if(6===i.length||8===i.length)l=[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16),parseInt(null!==(r=i.slice(6,8))&&void 0!==r?r:"ff",16)];return l.map((e=>isNaN(e)?255:e)).slice(0,t?4:3)}catch(i){return[0,0,0,1].slice(0,t?4:3)}},pn=e=>{var t,a,n;return(299*(null!==(t=e[0])&&void 0!==t?t:0)+587*(null!==(a=e[1])&&void 0!==a?a:0)+114*(null!==(n=e[2])&&void 0!==n?n:0))/1e3>=128?"#000000":"#FFFFFF"},hn=1e3,gn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=hn;const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:hn,a=t,n=a,r=30,i=100;const l=()=>r=-1;return{reset:function(){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=l,a=l,r=30,i=100,n=l},searchDown:()=>(a-=i,r-=1,a),reverseSearch:()=>(1===i?l():(a+=i,i/=10,a-=i),Math.min(a,t)),finish:l,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>n,applyLastEffective:()=>(a=n,r=-1,a),getIterateCount:()=>r}}();for(;n.getIterateCount()>=0;){if(n.getIterateCount()<=0){a=n.getMedian();break}if(!e(n.getMedian())&&n.getMedian()>0)n.searchDown();else{if(n.getMedian()===hn)break;a=n.reverseSearch()}}const r=Math.max(t,Math.min(a,hn));return r!==a&&e(r),r},fn=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:n="10px",defaultFamily:r="Arial"}=null!==e&&void 0!==e?e:{};let i=t,l=a,o="number"===typeof n?`${n}px`:n,s="number"===typeof n?n:parseFloat(n.replaceAll("px","")),c=r;return{getFont:()=>`${[l,i,o,c].filter((e=>""!==e)).join(" ")}, Arial`,getFontInfo:()=>({style:l,size:o,family:c,sizeAsNumber:s,weight:i}),setWeight(e){return i=e,this},setStyle(e){return l=e,this},setSize(e){const t="function"===typeof e?e(s):e;return o="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},vn=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},yn=(e,t)=>({...e,fontList:[...e.fontList,vn(t)]}),xn=()=>On("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),jn=e=>(null!==e&&void 0!==e?e:[]).map((e=>{let{color:t,offset:a}=e;return`${a}|${t}`})).join(","),On=e=>e?e.split(",").map(((e,t)=>{const[a,n]=e.split("|");return{color:n,offset:a,id:t+1}})):On("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),wn=()=>{const[e,t]=Object(n.useState)(0);return[Object(n.useCallback)((()=>{t((e=>e+1))}),[]),e]},kn=e=>{let{debug:t,optionLength:a,stopPropagation:n=!1,setFocus:r,onTrigger:i,onCancel:l,onKeyPress:o}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),r(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),r(-1)},onKeyDown:e=>{n&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===o||void 0===o?void 0:o(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),r((e=>Math.max(0,a+e+1)%a))):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),r((e=>Math.max(0,a+e-1)%a))):"Enter"===e.key||" "===e.key?i():"Escape"===e.key&&(null===l||void 0===l||l()))}}},Sn=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const n=e.length;for(let r=0;r<t;r++)a+=e.charAt(Math.floor(Math.random()*n));return a},Fn=(e,t)=>{const{trueBaseline:a,trueEdge:n,trueWidth:r,trueHeightCap:i}=e;return{...e,trueBaseline:a*t,trueEdge:n*t,trueWidth:r*t,trueHeightCap:"number"===typeof i?i*t:i}},Cn=(e,t)=>e.map((e=>e*t)),Ln=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:n,bulletWidth:r,fontSize:i,headTextSpacing:l,iconSymbolWidth:o,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof n?n*t:void 0,bulletWidth:r*t,fontSize:i*t,headTextSpacing:"number"===typeof l?l*t:void 0,iconSymbolWidth:"number"===typeof o?o*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},Tn=(e,t)=>({...e,fontList:e.fontList.map((e=>Ln(e,t)))}),Nn=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},Rn=()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e};function In(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var Bn=a(592),zn=a(319),En=a(116),Dn=a(6);const Wn=Dn.b.button`
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
`;var Mn=a(606),An=a(607),Hn=a(608);const $n=(e,t)=>{var a,n,r,i,l;const{creator:o,effect:s,format:c,region:d,isFirstEdition:u,name:m,password:b,pendulumEffect:p,setId:h,typeAbility:g,nameStyle:f}=e;if(c===t)return e;const v=F[d].category===t?d:F[C[t]].key,y="ocg"===t?Ne:Te,x="ocg"===t&&/-EN/.test(h)?h.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(h)?h.replace("-JP","-EN"):h,j={...f,font:"ocg"===t&&"Default"===f.font?"OCG":"tcg"===t&&"OCG"===f.font?"Default":f.font};return{...e,name:null!==(a=y[m])&&void 0!==a?a:m,format:t,region:v,effect:null!==(n=y[s])&&void 0!==n?n:s,pendulumEffect:null!==(r=y[p])&&void 0!==r?r:p,typeAbility:g.map((e=>{var t;return null!==(t=y[e])&&void 0!==t?t:e})),creator:null!==(i=y[o])&&void 0!==i?i:o,password:null!==(l=y[b])&&void 0!==l?l:b,setId:x,isFirstEdition:"ocg"!==t&&u,nameStyle:j}};var Pn=a(83);const Kn=Object(Pn.create)(((e,t)=>({batchName:"",batch:void 0,batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1,startBatchDownload:(t,a)=>{e({batchName:t,batchQueue:a,isBatchDownloading:!0})},stopBatchDownload:()=>{e({batchName:"",batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1})},clearQueue:()=>{e({batchQueue:[]})},addToBatch:(t,a,n)=>{e((e=>{let{batchQueue:r,batchDataMap:i}=e;const l=r.filter((e=>e!==t)),o={...i};return o[t]={name:a,blob:n},{batchQueue:l,batchDataMap:o,isReady:0===l.length}}))}})));var Un=a(110),Yn=a.n(Un),Gn=a(285),Xn=a.n(Gn);const Vn=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},n=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),n=e.split(a);return Object(O.jsx)(r.a.Fragment,{children:n.map(((e,a)=>a%2===0?Object(O.jsx)(r.a.Fragment,{children:e},`${e}-${a}`):t[e]))},e)},i={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>n(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>n(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,r,i)=>n(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:r,artist4:i}),"converter.header.warning.label":e=>n(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>n(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,r,i)=>n(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:r,hotkeyAlternative:i}),"guide.format.section-2.content":(e,t,r,i)=>n(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:r,hotkeyAlternative:i}),"guide.format.section-3.content":(e,t,r)=>n(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:r}),"guide.format.section-4.content":(e,t,r)=>n(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:r}),"guide.format.section-5.content":(e,t,r,i)=>n(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:r,hotkeyAlternative:i}),"guide.format.section-6.content":(e,t,r,i)=>n(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:r,hotkeyAlternative:i}),"input.name-style.emboss.color.alert":e=>n(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>n(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...i}}},qn=Object(Pn.create)(((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(n){return console.error("useSetting: Error when getting cached language",n),"eng"}})(),n={},r=Vn({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),i=async e=>{if(n[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),r=await a.json();if(!r.rawDictionary)throw new Error("No dictionary found");const i=Vn(r,null===(t=n.eng)||void 0===t?void 0:t.rawDictionary);return n[e]=i,i}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},l=async a=>{const l=t().languageMetadataMap[a];if(!l)return;const o=n[a]?n[a]:await i(a);o?(e({languageInfo:t().languageMetadataMap[a],language:o.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:l})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:r.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:r.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await i("eng"),await l(a),e({isInitiating:!1})},loadLanguage:i,changeLanguage:l}})),_n=()=>qn((e=>{let{language:t}=e;return t})),Jn=()=>qn.getState().language;var Qn=a(286);const Zn=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Region","Star Type","Star Alignment","Card Icon Type","Link Rating","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Effect Style - Min Line","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Pendulum Effect Style - Min Line","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Left Frame","Right Frame","Bottom Right Frame","Dye List","Star List","Flag","External Info (JSON)"],er=[...Zn,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],tr=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),ar=new Set(er.map(tr)),nr=Zn.reduce(((e,t,a)=>{const n=tr(t);return ar.has(n)&&(e[t]=a),e}),{}),rr=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,ir=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},lr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,or=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,sr=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,cr=e=>{try{const t=e[0].reduce(((e,t,a)=>{const n=tr(t);return ar.has(n)&&(e[t]=a),e}),{});return e.map(((e,a)=>{var n,r,i,l,o,s,c,u,b,p,h,g,f,y,x,j,O,k,S,F,C,L,T,N,R,I,B,z,E,D,W,M,H,$,P,K,U,G,X,V,q,_,J,Q,ee,te,ae,ne,re,ie,le,oe,se,ce,de,ue,me,be;if(0===a)return null;if(""===e.join(""))return null;const pe=Wt(),he=((e,t)=>a=>{var n,r;const i=null!==(n=t[a])&&void 0!==n?n:-1,l=(null!==(r=e[i])&&void 0!==r?r:"").trim();return""===l?void 0:l})(e,t),ge=(null!==(n=null!==(r=he("Frame"))&&void 0!==r?r:he("Background_Type"))&&void 0!==n?n:pe.frame).toLowerCase(),fe=(null!==(i=he("Right Frame"))&&void 0!==i?i:pe.rightFrame).toLowerCase(),ve=(null!==(l=he("Left Frame"))&&void 0!==l?l:pe.leftFrame).toLowerCase(),ye=(null!==(o=he("Bottom Right Frame"))&&void 0!==o?o:pe.pendulumRightFrame).toLowerCase(),xe=null!==(s=null!==(c=he("Star"))&&void 0!==c?c:he("Level/Rank"))&&void 0!==s?s:"",je="text"===he("Star Type")?xe:parseInt(xe)<=13&&parseInt(xe)>=0&&"2"!==he("Star_Type")?parseInt(xe):xe,Oe=(null!==(u=null!==(b=he("Foil"))&&void 0!==b?b:he("Rarity"))&&void 0!==u?u:"normal").toLowerCase(),we=v[Oe]?Oe:"normal",ke=null===(p=he("Attribute"))||void 0===p?void 0:p.toUpperCase(),Se=ke?"NONE"===ke?w:ke:"spell"===ge?"SPELL":"trap"===ge?"TRAP":pe.attribute,Fe=null!==(h=he("Art Finish"))&&void 0!==h?h:he("Art_Finish")?`type${he("Art_Finish")}`:"",Ce=null!==(g=he("Other Finish - Attribute"))&&void 0!==g?g:"",Le=null!==(f=he("Other Finish - Sticker"))&&void 0!==f?f:"",Te=null!==(y=he("Other Finish - Icon"))&&void 0!==y?y:"",Ne=null!==(x=he("Other Finish - Background"))&&void 0!==x?x:"",Re=null!==(j=he("ATK"))&&void 0!==j?j:"",Ie=null!==(O=he("Card Icon Type"))&&void 0!==O?O:pe.cardIcon,Be=null!==(k=he("Copyright"))&&void 0!==k?k:"",ze=null!==(S=he("DEF"))&&void 0!==S?S:"",Ee=null!==(F=he("Effect"))&&void 0!==F?F:"",De=null!==(C=null===(L=he("Card Finish"))||void 0===L?void 0:L.split(/,| /).filter((e=>""!==e)))&&void 0!==C?C:[],We=(null!==(T=he("Format"))&&void 0!==T?T:pe.format).toLowerCase(),Me=(null!==(N=he("Region"))&&void 0!==N?N:pe.region).toLowerCase(),Ae=ir(he("Use Furigana Helper"),pe.furiganaHelper),He=null!==(R=he("Name"))&&void 0!==R?R:"",$e=null!==(I=he("Password"))&&void 0!==I?I:"",Pe=null!==(B=null!==(z=he("Set Id"))&&void 0!==z?z:he("Set_ID"))&&void 0!==B?B:"",Ke=(null!==(E=he("Star Alignment"))&&void 0!==E?E:pe.starAlignment).toLowerCase(),Ue=(null!==(D=he("Sticker"))&&void 0!==D?D:pe.sticker).toLowerCase(),Ye=(null!==(W=null!==(M=he("Spell/Trap Icon"))&&void 0!==M?M:he("spell_type/trap_type"))&&void 0!==W?W:pe.subFamily).toUpperCase(),Ge=null===(H=he("Edition"))||void 0===H?void 0:H.toLowerCase(),Xe=ir(he("Is First Edition"),Ge?"1st edition"===Ge:pe.isFirstEdition),Ve=ir(he("Is Duel Terminal Card"),Ge?"duel terminal"===Ge:pe.isDuelTerminalCard),qe=ir(he("Is Limited Edition"),Ge?"limited edition"===Ge:pe.isLimitedEdition),_e=ir(he("Is Speed Card"),Ge?"speed duel"===Ge:pe.isSpeedCard),Je=ir(he("Is Legacy Card"),pe.isLegacyCard),Qe=ir(he("Is Pendulum"),pe.isPendulum),Ze=(null!==($=he("Bottom Frame"))&&void 0!==$?$:pe.pendulumFrame).toLowerCase(),et=null!==(P=he("Pendulum Effect"))&&void 0!==P?P:"",tt=null!==(K=he("Pendulum Scale Red"))&&void 0!==K?K:"",at=null!==(U=he("Pendulum Scale Blue"))&&void 0!==U?U:"",nt=null!==(G=he("Pendulum Size"))&&void 0!==G?G:"medium",rt=he("Type Ability"),it=rt?rt.split("/"):[he("Type_1"),he("Type_2"),he("Type_3"),he("Type_4")].filter((e=>"string"===typeof e&&""!==e)),lt=(null!==(X=he("Condense Rate"))&&void 0!==X?X:pe.effectStyle.condenseTolerant).toLowerCase(),ot=lr(he("Effect Style - Upsize"),pe.effectStyle.upSize),st=lr(he("Pendulum Effect Style - Upsize"),pe.pendulumStyle.upSize),ct=(null!==(V=he("Effect Style - Font Style"))&&void 0!==V?V:pe.effectStyle.fontStyle).toLowerCase(),dt=(null!==(q=he("Pendulum Effect Style - Font Style"))&&void 0!==q?q:pe.pendulumStyle.fontStyle).toLowerCase(),ut=(null!==(_=he("Effect Style - Background"))&&void 0!==_?_:pe.effectStyle.background).toLowerCase(),mt=(null!==(J=he("Pendulum Effect Style - Background"))&&void 0!==J?J:pe.pendulumStyle.background).toLowerCase(),bt=lr(he("Effect Style - Min Line"),pe.effectStyle.minLine),pt=lr(he("Pendulum Effect Style - Min Line"),pe.pendulumStyle.minLine),ht=d(),gt={artBorder:ir(he("Opacity - Art Border"),ht.artBorder),baseFill:null!==(Q=he("Opacity - Base Fill"))&&void 0!==Q?Q:ht.baseFill,body:lr(he("Opacity - Body"),ht.body),boundless:ir(he("Opacity - Boundless"),ht.boundless),name:lr(he("Opacity - Name"),ht.name),nameBorder:ir(he("Opacity - Name Border"),ht.nameBorder),pendulum:lr(he("Opacity - Pendulum"),ht.pendulum),text:lr(he("Opacity - Text"),ht.text)},ft={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},vt=null!==(ee=he("Art Link"))&&void 0!==ee?ee:pe.art,yt=ir(he("Is Using Full Art"),pe.artFit),xt={aspect:m(Qe,gt,void 0,nt).ratio,height:or(he("Art Crop - Height (%)"),ft.height),width:or(he("Art Crop - Width (%)"),ft.width),x:or(he("Art Crop - X (%)"),ft.x),y:or(he("Art Crop - Y (%)"),ft.y),unit:"%"},jt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Ot=ir(he("Has Background"),pe.hasBackground),wt=null!==(te=he("Background Link"))&&void 0!==te?te:pe.background,kt=(null!==(ae=he("Background Type"))&&void 0!==ae?ae:pe.backgroundType).toLowerCase(),St=ir(he("Is Using Full Background"),pe.backgroundFit),Ft={aspect:m(Qe,gt,kt,nt).ratio,height:or(he("Background Crop - Height (%)"),jt.height),width:or(he("Background Crop - Width (%)"),jt.width),x:or(he("Background Crop - X (%)"),jt.x),y:or(he("Background Crop - Y (%)"),jt.y),unit:"%"},Ct={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},Lt=(null!==(ne=he("Name Style Type"))&&void 0!==ne?ne:pe.nameStyleType).toLowerCase(),Tt={embossPitch:lr(he("Name Style - Emboss Pitch"),Ct.embossPitch),embossYaw:lr(he("Name Style - Emboss Yaw"),Ct.embossYaw),embossThickness:lr(he("Name Style - Emboss Thickness"),Ct.embossThickness),fillStyle:sr(he("Name Style - Fill Style"),Ct.fillStyle),font:null!==(re=he("Name Style - Font"))&&void 0!==re?re:Ct.font,gradientAngle:lr(he("Name Style - Gradient Angle"),Ct.gradientAngle),gradientColor:null!==(ie=he("Name Style - Gradient Color"))&&void 0!==ie?ie:Ct.gradientColor,hasEmboss:ir(he("Name Style - Has Emboss"),Ct.hasEmboss),hasGradient:ir(he("Name Style - Has Gradient"),Ct.hasGradient),hasOutline:ir(he("Name Style - Has Outline"),Ct.hasOutline),hasShadow:ir(he("Name Style - Has Shadow"),Ct.hasShadow),headTextFillStyle:sr(he("Name Style - Headtext Fill Style"),Ct.headTextFillStyle),lineColor:sr(he("Name Style - Line Color"),Ct.lineColor),lineOffsetX:lr(he("Name Style - Line Offset X"),Ct.lineOffsetX),lineOffsetY:lr(he("Name Style - Line Offset Y"),Ct.lineOffsetY),lineWidth:lr(he("Name Style - Line Width"),Ct.lineWidth),pattern:null!==(le=he("Name Style - Pattern"))&&void 0!==le?le:Ct.pattern,preset:null!==(oe=he("Name Style - Preset"))&&void 0!==oe?oe:Ct.preset,shadowBlur:lr(he("Name Style - Shadow Blur"),Ct.shadowBlur),shadowColor:sr(he("Name Style - Shadow Color"),Ct.shadowColor),shadowOffsetX:lr(he("Name Style - Shadow Offset X"),Ct.shadowOffsetX),shadowOffsetY:lr(he("Name Style - Shadow Offset Y"),Ct.shadowOffsetY)},Nt=ir(he("Is Link"),null!==(se=pe.isLink)&&void 0!==se?se:"link"===ge),Rt=null!==(ce=[ir(he("Link - Top Left Arrow"),!1)?"1":"",ir(he("Link - Top Arrow"),!1)?"2":"",ir(he("Link - Top Right Arrow"),!1)?"3":"",ir(he("Link - Left Arrow"),!1)?"4":"",ir(he("Link - Right Arrow"),!1)?"6":"",ir(he("Link - Bottom Left Arrow"),!1)?"7":"",ir(he("Link - Bottom Arrow"),!1)?"8":"",ir(he("Link - Bottom Right Arrow"),!1)?"9":""].filter((e=>""!==e)))&&void 0!==ce?ce:[],It=null!==(de=he("Link Rating"))&&void 0!==de?de:"",Bt=[!1,"#000000",!1,"#000000"],zt=[ir(he("Stat Style - Is Custom"),Bt[0]),sr(he("Stat Style - Fill Color"),Bt[1]),ir(he("Stat Style - Has Shadow"),Bt[2]),sr(he("Stat Style - Shadow Color"),Bt[3])],Et=[ir(he("Type Style - Is Custom"),Bt[0]),sr(he("Type Style - Fill Color"),Bt[1]),ir(he("Type Style - Has Shadow"),Bt[2]),sr(he("Type Style - Shadow Color"),Bt[3])],Dt=[ir(he("Effect Style - Is Custom"),Bt[0]),sr(he("Effect Style - Fill Color"),Bt[1]),ir(he("Effect Style - Has Shadow"),Bt[2]),sr(he("Effect Style - Shadow Color"),Bt[3])],Mt=[ir(he("Pendulum Effect Style - Is Custom"),Bt[0]),sr(he("Pendulum Effect Style - Fill Color"),Bt[1]),ir(he("Pendulum Effect Style - Has Shadow"),Bt[2]),sr(he("Pendulum Effect Style - Shadow Color"),Bt[3])],At=[ir(he("Other Style - Is Custom"),Bt[0]),sr(he("Other Style - Fill Color"),Bt[1]),ir(he("Other Style - Has Shadow"),Bt[2]),sr(he("Other Style - Shadow Color"),Bt[3])];let Ht={};try{var $t;Ht=JSON.parse(null!==($t=he("External Info (JSON)"))&&void 0!==$t?$t:"{}")}catch(Xt){console.error("csvToCardList",Xt)}const Pt=(null!==(ue=he("Flag"))&&void 0!==ue?ue:"").split("|").map(Number).slice(0,Z),Kt=[0,0].map(((e,t)=>"number"===typeof Pt[t]?Pt[t]:e)),Ut=(null!==(me=he("Dye List"))&&void 0!==me?me:"").split("|").map(String).slice(0,7),Yt=["","","","","","",""].map(((e,t)=>"string"===typeof Ut[t]?Ut[t]:e)),Gt=(null!==(be=he("Star List"))&&void 0!==be?be:"").split("|").map(String).slice(0,A);return{id:Object(Y.a)(),...pe,art:vt,artCrop:xt,artFinish:Fe,artFit:yt,artSource:"online",atk:Re,attribute:Se,background:wt,backgroundCrop:Ft,backgroundFit:St,backgroundSource:"online",backgroundType:kt,cardIcon:Ie,condenseTolerant:lt,creator:Be,def:ze,dyeList:Yt,effect:Ee,effectStyle:{condenseTolerant:lt,upSize:ot,fontStyle:ct,background:ut,minLine:bt},effectTextStyle:Dt,externalInfo:Ht,finish:De,flag:Kt,foil:we,format:We,frame:ge,furiganaHelper:Ae,hasBackground:Ot,isDuelTerminalCard:Ve,isFirstEdition:Xe,isLegacyCard:Je,isLimitedEdition:qe,isLink:Nt,isPendulum:Qe,isSpeedCard:_e,leftFrame:ve,linkMap:Rt,linkRating:It,name:He,nameStyle:Tt,nameStyleType:Lt,opacity:gt,otherFinish:[Ce,Te,Le,Ne],otherTextStyle:At,password:$e,pendulumEffect:et,pendulumFrame:Ze,pendulumRightFrame:ye,pendulumScaleBlue:at,pendulumScaleRed:tt,pendulumSize:nt,pendulumStyle:{upSize:st,fontStyle:dt,background:mt,minLine:pt},pendulumTextStyle:Mt,region:Me,rightFrame:fe,setId:Pe,star:je,starList:Gt,starAlignment:Ke,statTextStyle:zt,sticker:Ue,subFamily:Ye,typeAbility:it,typeTextStyle:Et}})).filter((e=>null!=e))}catch(t){return console.error("csvToCardList",t),[]}},dr=(e,t)=>{const a="string"===typeof e?parseInt(e):e,n="string"===typeof t?parseInt(t):t,r=!!a&&isFinite(a),i=!!n&&isFinite(n);if(r&&!i)return-1;if(!r&&i)return 1;if(r&&i)return(null!==n&&void 0!==n?n:0)-(null!==a&&void 0!==a?a:0);const l="?"===e?1:""===e?-1:0,o="?"===t?1:""===t?-1:0;return o-l===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):o-l},ur=(e,t)=>e.name.localeCompare(t.name),mr=(e,t)=>e.setId.localeCompare(t.setId),br=(e,t)=>dr(e.atk,t.atk),pr=(e,t)=>dr(e.def,t.def),hr=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:dr(e.star,t.star),gr=(e,t)=>{try{var a,n,r,i;const l=Re[t.frame].sortWeight-Re[e.frame].sortWeight;if(0!==l)return l;return(null!==(a=null===(n=Re[t.pendulumFrame])||void 0===n?void 0:n.sortWeight)&&void 0!==a?a:1e3)-(null!==(r=null===(i=Re[e.pendulumFrame])||void 0===i?void 0:i.sortWeight)&&void 0!==r?r:1e3)}catch(l){return 0}},fr=e=>{const t={...e},{frame:a,isLink:n}=t;return("spell"===a||"trap"===a||wa(t))&&(t.atk="",t.def="",t.star=0),n&&(t.def="",t.star=0),t},vr=(e,t,a)=>{for(let n=0;n<e.length;n++){const r=e[n](t,a);if(0!==r)return r}return 0},yr={name:{key:"name",sortFunction:e=>e.map(fr).sort(((e,t)=>vr([ur,hr,gr,mr,br,pr],e,t)))},atk:{key:"atk",sortFunction:e=>e.map(fr).sort(((e,t)=>vr([br,pr,hr,gr,ur,mr],e,t)))},def:{key:"def",sortFunction:e=>e.map(fr).sort(((e,t)=>vr([pr,br,hr,gr,ur,mr],e,t)))},set:{key:"set",sortFunction:e=>e.map(fr).sort(((e,t)=>vr([mr,gr,hr,ur,br,pr],e,t)))},level:{key:"level",sortFunction:e=>e.map(fr).sort(((e,t)=>vr([gr,hr,ur,mr,br,pr],e,t)))}},xr=(e,t)=>{const a=Object.values(t).filter((e=>null!=e));return 0===a.length?e:a.reduce(((e,t)=>t(e)),e)},jr=Object(Pn.create)(Object(Qn.subscribeWithSelector)((e=>({activeId:"",cardDisplayList:[],cardList:[],selectedMap:{},filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:n}=t;return e((e=>{let{cardList:t,filterFunctionMap:r}=e;const i={...r};if("text"===a){const e=n.toLowerCase();i[a]=t=>t.filter((t=>{let{name:a,effect:n,pendulumEffect:r}=t;return(Ya(a).toLowerCase()+Ga(n).toLowerCase()+Ga(r).toLowerCase()).includes(e)}))}return{filterFunctionMap:i,cardDisplayList:xr(t,i)}}))},resetFilter:()=>{e((e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}}))},addCard:t=>e((e=>{let{cardList:a}=e;const n={id:Object(Y.a)(),...t};return{activeId:n.id,cardList:[...a,n],cardDisplayList:[...a,n]}})),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e((e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}})),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e((e=>{let{cardList:n,cardDisplayList:r,isListDirty:i}=e,l=i;if(!1===l&&a){const e=n.find((e=>e.id===t.id));l=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:n,...r}=e,{artCrop:i,backgroundCrop:l,...o}=t;return Object(Ia.a)(r,o)&&Ua(a,i)&&Ua(n,l)})(t,e)}return{isListDirty:l,cardList:n.map((e=>e.id===t.id?{...t}:e)),cardDisplayList:r.map((e=>e.id===t.id?{...t}:e))}}))},setActiveId:t=>e({activeId:t}),selectCard:(t,a)=>{e((e=>{let{selectedMap:n}=e;const r={...n};return"add"===a?r[t]=t:delete r[t],{selectedMap:r}}))},setSelectMap:(t,a)=>e((e=>{let{selectedMap:n}=e;return{selectedMap:t.reduce(((e,t)=>(e[t.id]=t.id,e)),"replace"===a?{}:{...n})}})),setCardList:(t,a)=>{var n;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(n=t[0])||void 0===n?void 0:n.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e((e=>{var a,n,r,i;let{cardList:l,activeId:o,cardDisplayList:s}=e;const c=l.filter((e=>e.id!==t)),d=s.filter((e=>e.id!==t)),u=d.findIndex((e=>e.id===o));return{activeId:o===t?null!==(a=null!==(n=null===(r=d[u-1])||void 0===r?void 0:r.id)&&void 0!==n?n:null===(i=d[0])||void 0===i?void 0:i.id)&&void 0!==a?a:"":o,cardList:c,cardDisplayList:d}}))},duplicateCard:t=>{e((e=>{let{cardList:a,filterFunctionMap:n}=e;const r=a.findIndex((e=>{let{name:a}=e;return a===t.name})),i=Object(Y.a)(),l={...Object(Ra.a)(t),name:`${t.name} - Copy`,id:i},o=r<0?[...a,l]:[...a.slice(0,r),a[r],l,...a.slice(r+1,a.length)];return{activeId:i,pendingActiveCard:l,cardList:o,cardDisplayList:xr(o,n)}}))},sortList:t=>{e((e=>{let{cardDisplayList:a,cardList:n}=e;return{cardDisplayList:yr[t].sortFunction(a),cardList:yr[t].sortFunction(n)}}))}})))),Or=(e,t)=>{const a=Object(Y.a)();let n=Wt(),r=!1;if(!e)return{isPartial:r,card:{...n,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=Wa(a);n=Object.keys(e).length>0?Aa(e,t):Aa(a,t)}else if(Ha(a))n=Aa(a);else if($a(a)){const e=Wa(a);n=Aa(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:i}=un(e);r=t,n=i}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=un(a);r=e,n=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:n,attribute:r,effect:i,boxSize:l,copyright:o,icon:s,id:c,image:d,layout:u,level:m,link:b,pendulum:p,rarity:h,serial:g,type:f,variant:v,version:y}=e,{red:x,blue:j,boxSize:O,boxSizeEnabled:k,effect:S,enabled:F}=p,C=qa[s],T=Za[r],N=tn[u],R="string"===typeof(I=d)&&I.startsWith("data:image/");var I;const B=parseInt(m),z=h?an[h.toLowerCase()]:void 0;let E=void 0===C||void 0===T||void 0===N||void 0===z;const{finish:D,artFinish:W,text:M}=null!==z&&void 0!==z?z:{},A=M?$[M]:null;return{isPartial:E,result:{...Wt(),finish:null!==D&&void 0!==D?D:[],name:t,nameStyleType:M?"predefined":"auto",nameStyle:A?A.value:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},atk:a,def:n,attribute:null!==T&&void 0!==T?T:w,effect:i,creator:o,subFamily:null!==C&&void 0!==C?C:L,setId:c,frame:null!==N&&void 0!==N?N:"normal",star:`${B}`===m&&B<=13?B:m,typeAbility:f.split("/").map((e=>e.trim())),art:R?"":d,artFit:!0,artData:R?d:"",artSource:R?"offline":"online",artFinish:null!==W&&void 0!==W?W:"normal",isLink:"link"===N&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter((e=>"string"===typeof e)),isPendulum:F,pendulumScaleBlue:j,pendulumScaleRed:x,pendulumEffect:S,pendulumSize:Ja[O],password:g,externalInfo:{version:y,variant:v,boxSize:l,rarity:h,pendulum:{boxSize:O,boxSizeEnabled:k}}}}})(a);r=e,n=t}}catch(i){console.error("decodedCard",e,i);try{n=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Ma(e):"string"===typeof e?JSON.parse(e):e,Aa(t)}(e,!0),zn.a.info({message:Jn()["service.decode.outdated.message"],description:Jn()["service.decode.outdated.description"]})}catch(i){console.error("cardData",e,i),zn.a.error({message:Jn()["service.decode.error.message"],description:Jn()["service.decode.error.description"]})}}return{isPartial:r,card:{...n,id:a}}},wr={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},kr=Object(Pn.create)(((e,t)=>({card:Dt(),setCard:(t,a)=>{const n=jr.getState().changeActiveCard;if("function"===typeof t)e((e=>{const r=t(e.card);return n(r,null===a||void 0===a||a),{card:r}}));else if("id"in(r=t)&&""!==r.id)n(t,a),e({card:t});else{const r={id:Object(Y.a)(),...t};n(r,a),e({card:r})}var r},getUpdater:function(e){var a;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,r=arguments.length>2?arguments[2]:void 0;const{setCard:i}=t(),l=t=>{i((a=>{var r;return{...a,[e]:n("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(r=t.target)||void 0===r?void 0:r.value)}}))};if(!r)return l;const o="string"===typeof r?null!==(a=wr[r])&&void 0!==a?a:void 0:r;if(!o)return l;const{wait:s,type:c}=o;return"debounce"===c?Yn()(l,s):"throttle"===c?Xn()(l,s):l}}))),Sr=Object(Pn.create)((e=>{const{allowHotkey:t,exportFormat:a,exportScheme:n,globalScale:r,mirrorPendulumScale:i,reduceMotionColor:l,resolution:o,showCreativeOption:c,showExtraAttribute:d,showExtraDecorativeOption:u}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportScheme:"string"===typeof n?n:"with-name",globalScale:"number"===typeof r&&r<=s.maximumScale?r:1,exportFormat:"string"===typeof a?a:"csv",resolution:Array.isArray(o)&&"number"===typeof o[0]&&"number"===typeof o[1]?o:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof l&&l,showCreativeOption:"boolean"!==typeof c||c,showExtraAttribute:"boolean"!==typeof d||d,showExtraDecorativeOption:"boolean"!==typeof u||u,mirrorPendulumScale:"boolean"===typeof i&&i},updateSetting:t=>{e((e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}}))}}})),Fr=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:r,exportRef:i,onExport:l,onDownloadError:o,onDownloadComplete:s}=e;const c=_n(),{card:d}=kr(),{addToBatch:u,batchDataMap:m,isBatchDownloading:b}=Kn(),p=Sr((e=>e.setting.resolution)),h=Sr((e=>e.setting.exportScheme)),{opacity:g,name:f,isPendulum:v,pendulumSize:y}=d,x=Ya(f),j=Object(n.useRef)(!1),O=Object(n.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const a=r.current,n=null===a||void 0===a?void 0:a.cloneNode(),i=null===a||void 0===a?void 0:a.getContext("2d"),l=null===n||void 0===n?void 0:n.getContext("2d");if(a&&i&&n&&l&&!t)return e&&(n.width=e[0],n.height=e[1]),l.drawImage(a,0,0,a.width,a.height,0,0,n.width,n.height),n.toDataURL("image/png")}),[r,t,p]),w=Object(n.useCallback)((async function(e,t){var a;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;try{const a=await fetch(O(n)),r=await a.blob();b&&u(t,e,r)}catch(r){o()}null===(a=document.querySelector("#export-canvas-guard"))||void 0===a||a.classList.remove("guard-on"),s()}),[u,O,b,s,o,p]),k=Object(n.useCallback)((function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;try{const e=Ya(f);var a=document.createElement("a");a.download=e?`${e}.png`:"card.png",a.href=O(t),a.click()}catch(n){o()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()}),[p,s,f,O,o]);return Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&(document.title=x?`${x} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")}),500),()=>{e=!1}}),[x]),Object(n.useEffect)((()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.3.13")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}})),Object(n.useEffect)((()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var n;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(n="2.3.13")?n:"unknown")}catch(o){const e="fail-to-set-storage-notification";zn.a.close(e),zn.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,n,o,s;if(r.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(n=document.getElementById("preview-canvas"))||void 0===n||n.classList.remove("js-export-available"),null===(o=document.getElementById("export-canvas-guard"))||void 0===o||o.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),i.current.pipelineRunning=!0,await i.current.currentPipeline,e&&(i.current.currentPipeline=l({isPendulum:v,opacity:g,pendulumSize:y,isRelevant:()=>e}),await i.current.currentPipeline,e))){var c,u,p,f;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(Da(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let n=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:n},"",n)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(p=document.getElementById("export-canvas-guard"))||void 0===p||p.setAttribute("style","display: none"),null===(f=document.getElementById("save-button-waiting"))||void 0===f||f.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),i.current.pipelineRunning=!1,j.current&&(j.current=!1,k()),b&&!m[e.id]&&setTimeout((()=>{w("with-name"===h?`${x}.png`:`${e.setId} - ${x}.png`,e.id)}),200)}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}})),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout((()=>{!1===i.current.pipelineRunning?k(a):j.current=!0}),200)},isPipelineRunning:()=>i.current.pipelineRunning}},Cr=e=>{let{value:t="",onChange:a}=e;const[r,i]=Object(n.useState)(t),[l,o]=Object(n.useState)((()=>({hex:mn.test(t)?t:"#000000",rgb:bn(t,!1)})));return Object(n.useEffect)((()=>{const e=r.startsWith("#")?r:`#${r}`;mn.test(e)&&(i(e),o({hex:e,rgb:bn(e,!1)}),null===a||void 0===a||a(e))}),[r]),Object(n.useEffect)((()=>{i(t),o({hex:mn.test(t)?t:"#000000",rgb:bn(t,!1)})}),[t]),{inputText:r,color:l,setColor:i}},{height:Lr,width:Tr,maximumScale:Nr}=s,Rr=()=>"#000000".replace(/0/g,(()=>(~~(12*Math.random()+2)).toString(16))),Ir=e=>{let{ctx:t,color:a=Rr(),width:n,offset:r=4,edge:i,baseline:l,xRatio:o}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(i/o,l+1+Math.random()*r,n/o,2),t.fillStyle=s},Br=(e,t,a,n,r,i)=>{if(!e||!t)return n;const{stroke:l=!1}=null!==i&&void 0!==i?i:{};e.textAlign="left";const o=t.split("");let s=n;return o.forEach((t=>{e.fillText(t,s,r),l&&e.strokeText(t,s,r),s+=e.measureText(t).width*(2+a)/2})),s},zr=(e,t,a,n,r,i)=>{if(!e||!t)return n;const{stroke:l=!1}=null!==i&&void 0!==i?i:{};e.textAlign="right";const o=t.split("");let s=n;return o.forEach(((t,n)=>{const i=o[o.length-n-1];e.fillText(i,s,r),l&&e.strokeText(i,s,r),s-=e.measureText(i).width*(2+a)/2})),s},Er=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Tr*Nr,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Lr*Nr;return!!e&&(e.clearRect(0,0,t,a),!0)},Dr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return async(a,n,r,i)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(r&&t[s]){var l,o;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=n&&null!==(l=t[n])&&void 0!==l?l:[],u=i?null!==(o=c[i])&&void 0!==o?o:i:q;if(d.length)for(const{blendMode:e="source-over",opacity:n=1}of d)a.globalCompositeOperation=e,a.globalAlpha=n,await r(s,u);else await r(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},Wr="#000000",Mr="#000000",Ar="#000000",Hr=e=>{var t,a;let{ctx:n,x:r,y:i,blur:l,color:o,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:b=1,useDefault:p=!0}=e;return(p||"number"===typeof r)&&(n.shadowOffsetX=(null!==r&&void 0!==r?r:0)*b),(p||"number"===typeof i)&&(n.shadowOffsetY=(null!==i&&void 0!==i?i:0)*b),(p||"number"===typeof l)&&(n.shadowBlur=(null!==l&&void 0!==l?l:0)*b),(p||"string"===typeof c)&&(n.shadowColor=null!==c&&void 0!==c?c:Mr),(p||"string"===typeof o)&&(n.fillStyle=null!==(t=null!==s&&void 0!==s?s:o)&&void 0!==t?t:Ar),(p||"string"===typeof d)&&(n.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:Wr),(p||"number"===typeof m)&&(n.lineWidth=(null!==m&&void 0!==m?m:0)*b),()=>{(p||"number"===typeof r)&&(n.shadowOffsetX=0),(p||"number"===typeof i)&&(n.shadowOffsetY=0),(p||"number"===typeof l)&&(n.shadowBlur=0),(p||"string"===typeof c)&&(n.shadowColor=Mr),(p||"string"===typeof o)&&(n.fillStyle=Ar),(p||"string"===typeof d)&&(n.strokeStyle=Wr),(p||"number"===typeof m)&&(n.lineWidth=0)}},$r={},Pr=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?r=>{var i,l;if(!0===(null===(i=$r[t])||void 0===i?void 0:i.ready)){const i=$r[t].image,l="number"===typeof a?a:a(i),o="number"===typeof n?n:n(i);return e.drawImage(i,l,o),void setTimeout((()=>r(!0)),0)}if(null!==(l=$r[t])&&void 0!==l&&l.error)return void setTimeout((()=>r(!0)),0);const o=$r[t]&&($r[t].cache||$r[t].ready),s=o?$r[t].image:new Image;o||(s.src="/ygocarder"+t),s.addEventListener("load",(()=>{const i="number"===typeof a?a:a(s),l="number"===typeof n?n:n(s);e.drawImage(s,i,l),$r[t]&&($r[t].ready=!0,$r[t].error=!1),r(!0)}),{once:!0}),s.addEventListener("error",(()=>{$r[t]&&($r[t].error=!0),r(!1)}),{once:!0}),o||($r[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,n)},Kr=async(e,t,a,n,r,i,l,o,s,c)=>await(async(e,t,a,n,r,i,l,o,s,c)=>new Promise(e&&""!==t?d=>{var u,m;if(!0===(null===(u=$r[t])||void 0===u?void 0:u.ready)){const u=$r[t].image,m="number"===typeof a?a:a(u),b="number"===typeof n?n:n(u),p="number"===typeof r?r:r(u),h="number"===typeof i?i:i(u),g="number"===typeof l?l:null===l||void 0===l?void 0:l(u),f="number"===typeof o?o:null===o||void 0===o?void 0:o(u),v="number"===typeof s?s:null===s||void 0===s?void 0:s(u),y="number"===typeof c?c:null===c||void 0===c?void 0:c(u);return"number"===typeof g&&"number"===typeof f&&"number"===typeof v&&"number"===typeof y?e.drawImage(u,g,f,v,y,m,b,p,h):e.drawImage(u,m,b,p,h),void setTimeout((()=>d(!0)),0)}if(null!==(m=$r[t])&&void 0!==m&&m.error)return void setTimeout((()=>d(!0)),0);const b=$r[t]&&($r[t].cache||$r[t].ready),p=b?$r[t].image:new Image;b||(p.src="/ygocarder"+t),p.addEventListener("load",(()=>{const u="number"===typeof a?a:a(p),m="number"===typeof n?n:n(p),b="number"===typeof r?r:r(p),h="number"===typeof i?i:i(p),g="number"===typeof l?l:null===l||void 0===l?void 0:l(p),f="number"===typeof o?o:null===o||void 0===o?void 0:o(p),v="number"===typeof s?s:null===s||void 0===s?void 0:s(p),y="number"===typeof c?c:null===c||void 0===c?void 0:c(p);"number"===typeof g&&"number"===typeof f&&"number"===typeof v&&"number"===typeof y?e.drawImage(p,g,f,v,y,u,m,b,h):e.drawImage(p,u,m,b,h),$r[t]&&($r[t].ready=!0,$r[t].error=!1),d(!0)}),{once:!0}),p.addEventListener("error",(()=>{$r[t]&&($r[t].error=!0),d(!1)}),{once:!0}),b||($r[t]={image:p,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,n,r,i,l,o,s,c),Ur=async(e,t,a,n,r,i,l,o)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=r,c.height=i;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await Kr(d,t,0,0,r,i),null!==o&&void 0!==o&&o.color&&(d.fillStyle=o.color,d.fillRect(0,0,r,i),d.globalCompositeOperation="destination-in"),await Kr(d,t,0,0,r,i),d.globalCompositeOperation="source-over";const u=Hr({ctx:s,...o,globalScale:l});s.drawImage(c,a,n),u()},Yr=e=>{var t,a;let{ctx:n,letter:r,isLastOfLine:i=!1,debug:l,fontStyle:o,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(lt.test(r))return{width:0,boundWidth:0};const u="tcg"===o?Nt:Ct,m="tcg"===o?Lt:St,b="tcg"===o?Tt:Ft,p=n.measureText(r),{width:h,actualBoundingBoxLeft:g,actualBoundingBoxRight:f}=p,v=g+f;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=i?b[r]:m[r])&&void 0!==t?t:0;if("tcg"===o){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[r])&&void 0!==w?w:0)*h),metric:p,offsetRatio:O}}let k=(null!==(a=u[r])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;yt.test(r)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):xt.test(r)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):ut.test(r)?j="furigana"===c?v:Math.max(v,.7*h):ht.test(r)?j=h:Ot.test(r)?j=2*v:wt.test(r)?j=1.25*v*(i?.5:1):ft.test(r)?j="furigana"===c?v:Math.max(v,.75*h):vt.test(r)?j=Math.max(v,.69*h)*("creator"===c?.975:1):jt.test(r)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const F=1*h*1;return l&&console.info(`getLetterWidth ${l}`,r,p,1,1,"|",F),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:p,offsetRatio:O}},Gr=e=>{var t;let{ctx:a,baseline:n,edge:r,letter:i,xRatio:l,deviation:o,letterMetric:s,textDrawer:c}=e;const{boundWidth:d,metric:u=a.measureText(i),offsetRatio:m=0}=null!==s&&void 0!==s?s:{},{letterMap:b={},threshold:p=10}=null!==o&&void 0!==o?o:{},{uniformBoxDescent:h}=null!==(t=b[i])&&void 0!==t?t:{},g=u.width*l,f=d?d*l:g,v=null!==c&&void 0!==c?c:e=>{let{ctx:t,letter:a,scaledBaseline:n,scaledEdge:r}=e;t.fillText(a,r,n)},y=(g-f)/2,x=f*m;let j=1,O=0;if("number"===typeof h&&l>=p){const{actualBoundingBoxDescent:e,actualBoundingBoxAscent:t}=a.measureText(i);O=h-e;const n=t+e;j=(n+2*O)/n}a.scale(1,j),v({ctx:a,letter:i,scaledEdge:r/l-y-x,scaledBaseline:(n+O)/j}),a.scale(1,1/j)},Xr=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${Bt}])|(${Xe}[\\w\\W]+?${Ve})|(.+?)`):new RegExp(`([${Bt}])|${Xe}([\\w\\W]+?)${Ve}|(.+?)`);return e.split(t).filter((e=>null!=e&&""!==e))},Vr=(e,t,a,n,r)=>{const i=Ln(ce,r),{fontSize:l,ordinalFontRatio:o=i.ordinalFontRatio,headTextFontRatio:s=i.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:b=c,numberFontRatio:p=1,furiganaFont:h,vietnameseFont:g,vietnameseFontRatio:f=1}=t;let v=n.getFontInfo();let y=n.getFontInfo();let x=n.getFontInfo();let j=n.getFontInfo();let O=n.getFontInfo();let w=n.getFontInfo();return{applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];O=n.getFontInfo(),e.font=n.setFamily(h).setWeight(t?"bold":"").setSize(l*s).getFont()},stopApplyFuriganaFont:()=>{e.font=n.setFamily(O.family).setWeight(O.weight).setSize(O.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;w=n.getFontInfo(),e.font=n.setSize(l*t).getFont()},stopApplyLargerText:()=>{e.font=n.setSize(w.size).getFont()},applyNumberFont:()=>{v=n.getFontInfo(),e.font=n.setFamily(b).setSize(l*p).getFont()},stopApplyNumberFont:()=>{e.font=n.setFamily(v.family).setSize(v.size).getFont()},applyOrdinalFont:()=>{j=n.getFontInfo(),e.font=n.setFamily(d).setSize(l*o).getFont()},stopApplyOrdinalFont:()=>{e.font=n.setFamily(j.family).setSize(j.size).getFont()},applySymbolFont:()=>{x=n.getFontInfo(),e.font=n.setFamily(u).setSize(l*m).getFont()},stopApplySymbolFont:()=>{e.font=n.setFamily(x.family).setSize(x.size).getFont()},applyVietnameseFont:()=>{y=n.getFontInfo(),e.font=n.setFamily(g).setSize(l*f).getFont()},stopApplyVietnameseFont:()=>{e.font=n.setFamily(y.family).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},qr=(e,t,a,n,r)=>{const i=(n-r)/2;e.beginPath(),e.arc(t+i,a-i,i,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},_r=e=>{let{footText:t,footTextWidth:a,headText:n,headTextLetterWidth:r,headTextGap:i,headTextSpacing:l,gapPadding:o,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===n.length,b=r/a*d;let p=l,h=0;b<=.95?p=1*l:b<=1.175?p=l>=0?0:3*l:b<=1.56?p=l>=0?-1*l/4:3*l:(h=.66,p=l>=0?-1*l/4:2*l),(c||u>0&&u<1)&&(p=l);const g=r*(u&&!c?u:!h||c?1:h)+p*(n.length-1),f=m?0:(a-r)/n.length,v=a,y=1===t.length||2*o+g>a?"center":"space-around",x="center"===y?p:f,j="center"===y?2*o+g:v,O=c?Math.min(j,a):j,w="center"===y?(g-a)/2:0,k=Math.max(i,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",n,O,j,t,a,k),{gapPadding:o,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},Jr=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Qr=e=>{let{ctx:t,token:a,nextToken:n,xRatio:r,previousTokenGap:i=0,letterSpacing:l,format:o,globalScale:s,textData:c}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const d=Ln(ce,s),u=null!==l&&void 0!==l?l:d.letterSpacing,{currentFont:m,fontData:b,fontLevel:p}=c,{metricMethod:h,headTextGapRatio:g=de.headTextGapRatio,headTextOverflow:f=de.headTextOverflow,fontStyle:v}=b,y=b.fontList[p],{bulletWidth:x,capitalLetterRatio:j,fontSize:O,iconSymbolWidth:w=x,largeSymbolRatio:k=d.largeSymbolRatio,headTextSpacing:S=d.headTextSpacing,squareBracketRatio:F,wordLetterSpacing:C}=y,L=-.5*O,{applyScale:T,reverseScale:N,applyLargerText:R,stopApplyLargerText:I,applyFuriganaFont:B,stopApplyFuriganaFont:z,applyOrdinalFont:E,stopApplyOrdinalFont:D,applySymbolFont:W,stopApplySymbolFont:M,applyNumberFont:A,stopApplyNumberFont:H,applyVietnameseFont:$,stopApplyVietnameseFont:P}=Vr(t,b,y,m,s),K=1+u/2;let U="",Y=0,G=0,X=!1;const V=void 0===n;let q=null!==i&&void 0!==i?i:0,_=!1,J=0;const Q=a.replaceAll(new RegExp(it,"g"),"").split(Ge).filter((e=>null!=e&&""!==e));for(let Z=0;Z<Q.length;Z++){const e=0===Z,a=Q[Z];if("\u29be"===a){q=0;Y+=w/r*K,e&&(J=0,U=a[0])}else if("\u25cf"===a){q=0;Y+=x/r*K,e&&(J=0,U=a[0])}else if(/[\xa9]/.test(a)){q=0,R(k);const n=t.measureText(a).width/r;I(),Y+=n*K,e&&(J=0,U=a[0])}else if(bt.test(a)){q=0,E();const n=t.measureText(a).width/r;D(),Y+=n*K,G+=1,e&&(J=0,U=a[0])}else if(It.test(a)){const[i,l,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),m="||"===l,{totalWidth:b}=Qr({ctx:t,token:i,nextToken:n,xRatio:r,letterSpacing:u,previousTokenGap:0,format:o,textData:c,globalScale:s});B();const p=d.split("").map((e=>Yr({ctx:t,letter:e,fontStyle:v,metricMethod:"furigana",xRatio:1,globalScale:s}).boundWidth)).reduce(((e,t)=>e+t),0);z();const{halfGap:h,headTextWidth:y}=_r({headText:d,headTextLetterWidth:p/r,footText:i,footTextWidth:b,headTextGap:L/r,headTextSpacing:S,gapPadding:g*O/r,fitFootText:m,sentenceXRatio:r,xRatio:"condense"===f&&i.length>1?Math.min(1,r+.1):0}),x=0===d.length?Math.max(L,b/zt):h,j=x,w=x,k=Math.max(y,b),F=Jr(q,j);q=w,Y+=k-F,G+=1,e&&(_=!0,J=j,U=i[0])}else if(Ue.test(a)){const n=C?1+C/2:K;t.letterSpacing=(n-1)*m.getFontInfo().sizeAsNumber+"px";let r=a,i=0;for(;""!==r;){let e=r[0],a=r.slice(1),n=t.measureText(r).width-t.measureText(a).width;Pe.test(e)?(T(F),n=t.measureText(r).width-t.measureText(a).width,N(F)):$e.test(e)?(T(j),n=t.measureText(r).width-t.measureText(a).width,N(j)):Ye.test(e)&&"tcg"===v?($(),n=t.measureText(r).width-t.measureText(a).width,P()):gt.test(e)?(A(),n=t.measureText(r).width-t.measureText(a).width,H()):st.test(e)&&"tcg"===v?(W(),n=t.measureText(r).width-t.measureText(a).width,M()):n=t.measureText(r).width-t.measureText(a).width,i+=n,r=a}const l=Math.max(L,i/zt),o=l;Y+=i-Jr(q,l),q=o,e&&(J=l,U=a[0]),t.letterSpacing="0px"}else if(st.test(a)&&"tcg"===v){W();const n=t.measureText(a).width*K;M();const r=Math.max(L,n/zt),i=r;Y+=n-Jr(q,r),q=i,e&&(J=r,U=a[0])}else{const{boundWidth:n}=Yr({ctx:t,letter:a,isLastOfLine:V,fontStyle:v,metricMethod:h,xRatio:r,globalScale:s}),i=n*K,l=Math.max(L,i/zt),c=l;Y+=i-Jr(q,l),q=c,("ocg"===o||"tcg"===o&&/\s+/.test(a))&&!1===jt.test(a)&&(G+=1,Z===Q.length-1&&(X=!0)),e&&(J=l,U=a[0]),kt.test(a)&&(J=0,q=0)}}return{totalWidth:Y,spaceCount:G,spaceAtEnd:X,leftMostLetter:U,rightGap:q,leftGap:J,offsetable:_}},Zr=e=>{let{ctx:t,line:a,width:n,xRatio:r,format:i,isLast:l,textData:o,globalScale:s}=e;const c=Xr(a);let d=0,u=0,m=0;for(let p=0,h=r;p<c.length;p++){const e=c[p],a=c[p+1];if(e===Ze){h=1;continue}if(e===et){h=r;continue}const{spaceCount:n,totalWidth:l,spaceAtEnd:b,leftGap:g,rightGap:f,leftMostLetter:v}=Qr({ctx:t,token:e,nextToken:a,xRatio:h,previousTokenGap:m/h,textData:o,format:i,globalScale:s});m=f*h,d+=l*h+((0===p&&g>0?-1*Math.min(20*s,g*h):0)+(0===p&&pt.test(v)?4*s*h:0)),u+=n-(b&&void 0===a?1:0)}const b=u>0?(n-d)/u:0;return{tokenList:c,spaceWidth:l?"tcg"===i?b>1.5*s?0:b:b>3.65*s?0:b:b}},ei=e=>{let{ctx:t,median:a,paragraphList:n,additionalLineCount:r=0,width:i,format:l,textData:o,globalScale:s}=e;const{fontData:c,fontLevel:d}=o,{letterSpacing:u}=c.fontList[d],m=[],b=n.reduce(((e,n)=>{const r=(a<=100?100:a)/1e3,c=i/r,d=Xr(n,!0);let b=1,p=[],h=0,g=0,f=0;for(let i=0,y=r;i<d.length;i++){const e=d[i],n=d[i+1];e===Ze?(f+=1,y=1):e===et&&(f-=1,y=r);let{leftMostLetter:v,totalWidth:x,rightGap:j,leftGap:O}=Qr({ctx:t,token:e,nextToken:n,xRatio:y,previousTokenGap:g,format:l,letterSpacing:u,textData:o,globalScale:s});let w=x/(f>0?r:1)+(0===i?(O>0?-1*Math.min(20*s/y,O):0)+(pt.test(v)?4*s:0):0);if(h+w>c){let r=p.join("").trim();f>0&&(r+=et),f<0&&(r=Ze+r),f=0,m.push({line:r,effectiveMedian:a,isLast:!1,actualLineWidth:h});let{totalWidth:i,rightGap:c,leftGap:d}=Qr({ctx:t,token:e,nextToken:n,xRatio:y,previousTokenGap:0,format:l,textData:o,globalScale:s});h=i+((d>0?-1*Math.min(20*s/y,d):0)+(pt.test(v)?4*s:0)),g=c,p=[e],b+=1}else h+=w,g=j,p.push(e)}let v=p.join("").trim();return f>0&&(v+=et),f<0&&(v=Ze+v),f=0,m.push({line:v,effectiveMedian:a,isLast:!0,actualLineWidth:h}),e+b}),0)+(null!==r&&void 0!==r?r:0);return{currentLineList:m,currentLineCount:b}},ti=e=>{let{ctx:t,fontSize:a,edge:n,baseline:r,headText:i,headTextLetterWidth:l,footText:o,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:b,globalScale:p,xRatio:h,fontStyle:g,textWorker:f,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=f,k="condense"===y&&o.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:F,trueHeadTextWidth:C,halfGap:L,alignment:T,headTextXRatio:N}=_r({headText:i,headTextLetterWidth:l,footText:o,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*b,fitFootText:v,sentenceXRatio:h,xRatio:k}),R=C>s*h;if(0===i.length)return{trueHeadTextWidth:C,halfGap:L};const I=v?Math.min(1,s*h/C):1,B=v?I:k&&"center"===T?k:N;let z=n;O(),(v||B)&&(w(B,1),z=n/B),"center"===T?(z+=S,R?B>I&&(z+=(s*h/B-C)/2/B):z+=(s*h-C)/2):z+=F/2;for(const E of i){x();const{width:e,boundWidth:n}=Yr({ctx:t,letter:E,fontStyle:g,metricMethod:"furigana",xRatio:1,globalScale:p}),i=(e-n)/2;j(),x(m),t.fillText(E,z-i,r-a*u),j(),z+=n+F}return(v||B)&&O(),w(h,1),{trueHeadTextWidth:C,halfGap:L}},ai=e=>{let{ctx:t,tokenList:a,trueEdge:n,trueBaseline:r,spaceWidth:i=0,xRatio:l,yRatio:o=1,textData:s,format:c,textDrawer:d,debug:u=!1,option:m,globalScale:b}=e;const{drawHeadText:p=!0}=null!==m&&void 0!==m?m:{},{currentFont:h,fontData:g,fontLevel:f}=s,v=g.fontList[f],{headTextFillStyle:y,headTextBold:x=de.headTextBold,headTextHeightRatio:j=de.headTextHeightRatio,headTextOverflow:O=de.headTextOverflow,headTextGapRatio:w=de.headTextGapRatio,metricMethod:k,fontStyle:S,letterDeviationMap:F={}}=g,C=Ln(ce,b),{bulletOffset:L=C.bulletOffset,bulletWidth:T,capitalLetterRatio:N=C.capitalLetterRatio,fontSize:R,headTextSpacing:I=C.headTextSpacing,iconSymbolWidth:B=T,largeSymbolRatio:z=C.largeSymbolRatio,letterSpacing:E=C.letterSpacing,ordinalFontOffsetY:D=C.ordinalFontOffsetY,squareBracketRatio:W=C.squareBracketRatio,wordLetterSpacing:M,allRightSymbolOffset:A=C.allRightSymbolOffset}=v,H=Vr(t,g,v,h,b),{stopApplyFuriganaFont:$,applyFuriganaFont:P,stopApplyLargerText:K,applyLargerText:U,stopApplyNumberFont:Y,applyNumberFont:G,stopApplyOrdinalFont:X,applyOrdinalFont:V,applyScale:q,reverseScale:_,applySymbolFont:J,stopApplySymbolFont:Q,applyVietnameseFont:Z,stopApplyVietnameseFont:ee,applyAsymmetricScale:te,resetScale:ae}=H,ne=1+E/2,re=r/o;let ie=0,le=[],oe=0,se=n;for(let ce=0,de=l;ce<a.length;ce++){const e=a[ce];if(e===Ze){de=1,t.setTransform(1,0,0,1,0,0);continue}if(e===et){de=l,t.scale(de,1);continue}const n=-.5*de,m=R*n,g=a[ce+1],f=a[ce+2],v={ctx:t,xRatio:de,letterSpacing:E,format:c,textData:s,globalScale:b},C={ctx:t,baseline:re,xRatio:de,textDrawer:d},be=e.split(Ge).filter((e=>null!=e&&""!==e)),{leftMostLetter:pe,leftGap:he,rightGap:ge,totalWidth:fe,spaceCount:ve}=Qr({token:e,nextToken:g,previousTokenGap:ie/de,...v}),ye=0===ce?(he>0?-1*Math.min(20*b,he*de):0)+(pt.test(pe)?4*b:0):0;let xe=se+ye,je=ie;for(let a=0;a<be.length;a++){var ue,me;const l=be[a],u=null!==(ue=be[a+1])&&void 0!==ue?ue:g,E=null!==(me=be[ce+2])&&void 0!==me?me:f;if(e===Ze||e===et);else if("\u29be"===l)le.push({edge:xe,size:B,baseline:re}),xe+=B*ne,je=0,oe=0;else if("\u25cf"===l)ae(),qr(t,xe,r+L-1*b,T,Rt(c)*b),xe+=T*ne,te(de,o),je=0,oe=0;else if(/[\xa9]/.test(l))ae(),U(z),Gr({...C,letter:l,edge:xe*de,baseline:r+("tcg"===c?A:2*A)}),xe+=t.measureText(l).width*ne,K(),te(de,o),je=0,oe=0;else if(bt.test(l))ae(),V(),Gr({...C,letter:l,edge:xe*de,baseline:r+D}),xe+=t.measureText(l).width*ne,X(),te(de,o),xe+=i,je=0,oe=0;else if(It.test(l)){const[e,a,r=""]=l.replaceAll(/{|}/g,"").split(/(\|+)/),h="||"===a,{totalWidth:g}=Qr({token:e,nextToken:u,previousTokenGap:0,...v});P();const f=r.split("").map((e=>Yr({ctx:t,letter:e,fontStyle:S,metricMethod:"furigana",xRatio:1,globalScale:b}).boundWidth)).reduce(((e,t)=>e+t),0);$();const{headTextWidth:k,halfGap:F}=_r({headText:r,headTextLetterWidth:f,footText:e,footTextWidth:g*de,headTextGap:m,headTextSpacing:I*de,gapPadding:R*w,fitFootText:h,sentenceXRatio:de,xRatio:"condense"===O&&e.length>1?Math.min(1,de+.1):0}),C=0===r.length?Math.max(m,g*n):F,L=C,T=C,N=Jr(je,T),B=T>0?T-N:0,{offsetable:z,leftGap:D}=Qr({token:u,nextToken:E,previousTokenGap:L/de,...v}),W=D*de,M=Jr(L,W),A=B+(L>0?L-M:0);let K=0,U=0;A>0&&W>=-2*b&&z?(K=(A+2*Math.max(W,0))/3,U=Math.max(W,0)-K):K=B;const Y=xe+(C<0?-N:ye?-ye:K)+oe;oe=U,ai({ctx:t,format:c,textData:s,tokenList:Xr(e),trueBaseline:re,trueEdge:Y,xRatio:de,yRatio:o,spaceWidth:0,textDrawer:d,globalScale:b,debug:!1});const G=t.fillStyle,X=t.strokeStyle,V=t.shadowColor,q=t.shadowOffsetX,_=t.shadowOffsetY,J=t.shadowBlur;y&&(t.fillStyle=y,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);p&&ti({ctx:t,fontSize:R,edge:xe-N,baseline:re,headText:r,headTextLetterWidth:f,footText:e,footTextWidth:g,headTextGap:m,headTextSpacing:I,headTextHeightRatio:j,headTextBold:x,headTextGapRatio:w,xRatio:de,fontStyle:S,textWorker:H,fitFootText:h,headTextOverflow:O,globalScale:b}),t.fillStyle=G,t.strokeStyle=X,t.shadowColor=V,t.shadowOffsetX=q,t.shadowOffsetY=_,t.shadowBlur=J,xe+=Math.max(g*de,k)-N+i,je=L}else if(Ue.test(l)){const e=M?1+M/2:ne;t.letterSpacing=(e-1)*h.getFontInfo().sizeAsNumber+"px";const a=t.measureText(l).width*de,r=Math.max(m,a*n),i=r;xe-=Jr(je,r);let o=l,s=xe;for(;""!==o;){let e=o[0],a=o.slice(1),n=0;const r={...C,deviation:F[`${b}`],letter:e,edge:s};if(Pe.test(e))q(W),n=t.measureText(o).width-t.measureText(a).width,Gr({...r,edge:s/W,baseline:re/W}),_(W);else if($e.test(e)){q(N),n=t.measureText(o).width-t.measureText(a).width;const i=n>t.measureText(e).width*N?Math.round(n*(1-N))/2:0;Gr({...r,edge:s/N+i,baseline:re/N}),_(N)}else Ye.test(e)&&"tcg"===S?(Z(),n=t.measureText(o).width-t.measureText(a).width,Gr(r),ee()):gt.test(e)?(G(),n=t.measureText(o).width-t.measureText(a).width,Gr(r),Y()):st.test(e)&&"tcg"===S?(J(),n=t.measureText(o).width-t.measureText(a).width,Gr(r),Q()):(n=t.measureText(o).width-t.measureText(a).width,Gr(r));s+=n*de,o=a}xe=s,je=i,oe=0,t.letterSpacing="0px"}else if(st.test(l)&&"tcg"===S){const e=l;J();const a=t.measureText(e).width*ne*de,r=Math.max(m,a*n),i=r;xe-=Jr(je,r),Gr({...C,letter:e,edge:xe}),xe+=a,Q(),je=i,oe=0}else{const e=l,a=Yr({ctx:t,letter:e,fontStyle:S,metricMethod:k,isLastOfLine:void 0===u,xRatio:de,globalScale:b}),r=a.boundWidth*ne*de,o=Math.max(m,r*n),s=o;xe-=Jr(je,o),Gr({...C,letter:e,edge:xe,deviation:null===F||void 0===F?void 0:F[`${b}`],letterMetric:a}),xe+=r,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==jt.test(e)&&(xe+=i),kt.test(e)||(je=s),oe=0}}ie=ge*de,u&&Ir({ctx:t,baseline:re,edge:se,width:fe*de,xRatio:de}),se+=fe*de+ve*i+ye}return{tokenEdge:se,iconPositionList:le}},ni=(e,t,a)=>{const{multiline:n=!0,furiganaHelper:r=!0,dictionaryType:i="rubyForm"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let o="",s="ocg"===t?ke:Se;for(const h of l){var c;o+=null!==(c=s[h])&&void 0!==c?c:h}const d=o,u=(n?d.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${Je}$1${Qe}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${qe}$1${_e}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(rt,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,(e=>{const t=Fe[e];return null!==t&&void 0!==t?t:e})).replaceAll(new RegExp("{{([^{}]+?)}}","g"),(e=>e.replaceAll("{{",Ze).replaceAll("}}",et))).replaceAll(new RegExp("{[^{}]+?}","g"),(e=>`${Xe}${e}${Ve}`)),m=("tcg"===t||!1===r?u:u.replaceAll(new RegExp(ct,"g"),(e=>{var t;const a=null!==(t=se[e][i])&&void 0!==t?t:se[e].rubyForm;return`${Xe}${a}${Ve}`}))).replaceAll(new RegExp(Ke,"g"),(e=>`${Xe}${e}${Ve}`)).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),(e=>`${Xe}${e}${Ve}`)).replaceAll(new RegExp(mt,"g"),(e=>`${Xe}${e}${Ve}`)).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),(e=>`${Xe}${e}${Ve}`)).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),(e=>`${Xe}${e}${Ve}`));let b=[],p=0;for(const h of m)h===Xe?(0===p&&b.push(h),p+=1):h===Ve?(p-=1,0===p&&b.push(h)):b.push(h);return b.join("").replaceAll(`${Qe}${Ve}`,`${Ve}${Qe}`).replaceAll(`${_e}${Ve}`,`${Ve}${_e}`).replaceAll(`${Xe}${Je}`,`${Je}${Xe}`).replaceAll(`${Xe}${qe}`,`${qe}${Xe}`).replaceAll(`${Ze}${Ve}`,`${Ve}${Ze}`).replaceAll(`${Xe}${et}`,`${et}${Xe}`).replaceAll(`${qe}${_e}`,"").replaceAll(`${Je}${Qe}`,"").replaceAll(`${Xe}${Ve}`,"")},ri=e=>{let{format:t,useItalic:a,statInEffect:n,typeInEffect:r,frameType:i}=e;const l=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],r?"type":"",n?"stat":""].filter((e=>""!==e)).join("-"),o=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],r?"type":"",n?"stat":""].filter((e=>""!==e)).join("-");let s=ge[o];return a&&"tcg"===t&&he[o]&&(s=he[o]),{fontDataKey:o,fontData:s,sizeList:te[l]}},ii=e=>{let{ctx:t,content:a,isNormal:n=!1,fontDataKey:r="tcg",fontData:i=ge[r],textStyle:l,sizeList:o=te["tcg-type"],condenseTolerant:s="strict",format:c,furiganaHelper:d,option:u}=e;const{defaultSizeLevel:m,forceRelaxCondenseLimit:b,globalScale:p=1,minLine:h=0}=null!==u&&void 0!==u?u:{},g="number"===typeof h?h:0;let f=null!==m&&void 0!==m?m:0;if(!t||!a)return f;const v=ni(a.trim(),c,{furiganaHelper:d}),{lineList:y,fullLineListOption:x,effectFlavorCondition:j}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=[],r=[],i=new RegExp([`^(${qe}([^${_e}]*)${_e}\\s*)`,`^(${Je}([^${Qe}]*)${Qe}\\s*)`].join("|"));let l=e,o="";const s=null===(t=new RegExp(ot,"m").exec(e))||void 0===t?void 0:t[1];s&&a?(o=s.trim(),l=l.replace(s,"")):o="";let c=0;for(;l.length>0&&c<=100;){const e=i.exec(l),t=null===e||void 0===e?void 0:e[1],a=null===e||void 0===e?void 0:e[2],o=null===e||void 0===e?void 0:e[3],s=null===e||void 0===e?void 0:e[4];if(a&&t)l=l.replace(t,""),n.push({line:a,alignment:"left"}),r.push(at);else if(s&&o)l=l.replace(o,""),n.push({line:s,alignment:"justify"}),r.push(at);else{const e=/(.*)(\n|$)/.exec(l),t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];t&&(r.push(...a.replaceAll(qe,"[").replaceAll(_e,"]").replaceAll(Je,"[[").replaceAll(Qe,"]]").split("\n")),l=l.replace(t,""))}c++}return o&&r.push(nt),{lineList:r,fullLineListOption:[...n],effectFlavorCondition:o}}(v,n);let O=0;const w=Tn(i,p),{fontList:k}=w;for(;f<=k.length&&f>=0;){var S,F,C;const e=f===k.length,a=Math.min(k.length-1,f),i=e?{1:1e3,2:1e3,3:1e3}:"tcg"===c?b&&a<b?ee.relaxed:null!==(S=ee[s])&&void 0!==S?S:ee.strict:{1:800,2:800,3:800},{trueEdge:d,trueWidth:u,trueBaseline:m,trueHeightCap:h}=Fn(null!==(F=o[a])&&void 0!==F?F:o[o.length-1],p),v=n&&"tcg"===c?u-2*p:u,L=e&&"number"===typeof h,T=L?yn(w,{heightCap:h,lineCount:O}):w,N=L?f:a,{font:R,fontList:I}=T,B=L?I[N]:k[a],{fontSize:z,lineHeight:E,lineCount:D}=B,W=fn();t.font=W.setWeight("").setSize(z).setFamily(R).getFont(),t.textAlign="left";const M={fontData:T,fontLevel:N,currentFont:W};let A=[];const H=y.length>D&&"number"===typeof h?1:gn((e=>{const{currentLineList:a,currentLineCount:n}=ei({ctx:t,median:e,paragraphList:y,additionalLineCount:0,format:c,textData:M,width:v,globalScale:p});return A=a,!(n>D)}),200);O=Math.max(g,A.length);const $=Hr({ctx:t,...l,globalScale:p});if(!(H<(null!==(C=i[`${y.length}`])&&void 0!==C?C:i[3])&&f<k.length||g>D)){Er(t);let e=m+E;A.forEach((n=>{let{line:i,effectiveMedian:l,isLast:o}=n;if(i===at){const{line:a,alignment:n}=x.shift(),r="justify"!==n,i=.001*gn((e=>{const{currentLineCount:n}=ei({ctx:t,median:e,paragraphList:[a],format:c,textData:M,width:v,globalScale:p});return!(n>1)})),{tokenList:l,spaceWidth:o}=Zr({ctx:t,line:a,xRatio:i,format:c,isLast:r,textData:M,width:v,globalScale:p});t.scale(i,1),ai({ctx:t,tokenList:l,xRatio:i,yRatio:1,trueEdge:d,trueBaseline:e,spaceWidth:o,textData:M,format:c,globalScale:p})}else if(i===nt){const n=Tn(ge[r],p),i=L?yn(n,{heightCap:h,lineCount:Math.max(g,A.length)}):n,{fontSize:l}=L?i.fontList[N]:n.fontList[a],o=fn();t.font=o.setSize(l).setFamily(n.font).getFont();const s={fontData:i,fontLevel:N,currentFont:o},u=.001*gn((e=>{const{currentLineCount:a}=ei({ctx:t,median:e,paragraphList:[j],format:c,textData:s,width:v,globalScale:p});return!(a>1)})),m=Xr(j);t.scale(u,1),ai({ctx:t,tokenList:m,xRatio:u,yRatio:1,trueEdge:d,trueBaseline:e,textData:s,format:c,globalScale:p})}else{const a=l/1e3,n=i,{tokenList:r,spaceWidth:s}=Zr({ctx:t,line:n,xRatio:a,format:c,isLast:o,textData:M,width:v,globalScale:p});t.scale(a,1),ai({ctx:t,tokenList:r,xRatio:a,yRatio:1,trueEdge:d,trueBaseline:e,spaceWidth:s,textData:M,format:c,globalScale:p})}t.setTransform(1,0,0,1,0,0),e+=E}));break}f+=1,$()}return f},{width:li,finishTypeCardWidth:oi,stickerSize:si}=s,{width:ci,height:di,topToPendulumStructure:ui}=s,mi={topRight:(async()=>{const e=document.createElement("canvas");e.width=ci,e.height=di;const t=e.getContext("2d");return t?(await Pr(t,"mask/mask-top-right.png"),t.getImageData(0,0,ci,di).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=ci,e.height=di;const t=e.getContext("2d");return t?(await Pr(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,ci,di).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=ci,e.height=di;const t=e.getContext("2d");return t?(await Pr(t,"mask/mask-right.png"),t.getImageData(0,0,ci,di).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=ci,e.height=ui;const t=e.getContext("2d");return t?(await Pr(t,"mask/mask-name.png"),t.getImageData(0,0,ci,ui).data):null})()},bi=async(e,t,a,n)=>{const{ctx:r,canvas:i}=Yt(a,n);"string"===typeof e?await Pr(r,e,0,0):r.drawImage(e,0,0,a,n);const l=r.getImageData(0,0,a,n).data;for(let o=0;o<l.length;o+=4)l[o+3]=t[o+3];return r.putImageData(new ImageData(l,a,n),0,0),i},{width:pi,height:hi,topToPendulumStructure:gi,topToPendulumStructureFrame:fi,pendulumIconFrameHeight:vi,pendulumIconFrameWidth:yi,pendulumFrameHeight:xi,pendulumFrameWidth:ji,attributeSize:Oi,attributeX:wi,attributeY:ki,finishTypeCardWidth:Si,stickerSize:Fi}=s,Ci=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:n,globalScale:r,region:i,hasBackground:l,frame:o,leftFrame:s,pendulumFrame:c,rightFrame:d,pendulumRightFrame:u,dyeList:b,effectBackground:p,pendulumEffectBackground:h,backgroundType:f,cardIcon:v,attribute:y,star:x,starList:j,foil:O,pendulumSize:k,opacity:S,isLink:C,isSpeedSkill:L,isXyz:T,isPendulum:N,pendulumFrameTypeMap:R,otherFinish:I,loopFinish:B,loopArtFinish:z}=e;const E=t.getContext("2d"),{artBorder:D,nameBorder:W,body:M,name:A,pendulum:H,text:$,boundless:P}=S,{artX:K,artY:U,artFrameX:Y,artFrameY:X,artFrameHeight:q,artFrameWidth:_,artFinishX:J,artFinishY:Q,artWidth:Z,artRatio:ee}=m(N,S,void 0,k),{frameType:te,effectBoxOffsetY:ae,pendulumBoxX:ne,pendulumBoxY:re,pendulumBoxWidth:ie,pendulumBoxHeight:le,pendulumBoxOffsetY:oe,artlessFrameY:se}=G[k],ce=M>0||D,de=860,ue="normal"!==O,me=T||L?o:"normal",be="synchro"===o?["normal","xyz","xyz","xyz","xyz"]:[me],pe=!P&&ce,he=Na({frame:o,topLeftFrame:s,topRightFrame:d,bottomLeftFrame:c,bottomRightFrame:u,effectBackground:p,pendulumEffectBackground:h},N),{topLeftFrame:ge,topRightFrame:fe,bottomLeftFrame:ve,bottomRightFrame:ye,effectBackground:xe,pendulumEffectBackground:je}=he,Oe={drawFrame:async()=>{if(!E)return;const e=l&&n&&"frame"===f,{ctx:t,canvas:a}=Yt();await Pr(t,`frame/frame-${ge}.png`,0,0);const{canvas:i,ctx:o}=ca(a,b[0]);if(!e&&(ge!==fe||""!==b[0]||""!==b[1])){const e=await bi(`frame/frame-${fe}.png`,await mi.topRight,pi,hi),{canvas:t}=ca(e,b[1]);o.drawImage(t,0,0)}const{ctx:s,canvas:c}=Yt();await Pr(s,`frame-pendulum/frame-pendulum-${ve}.png`,0,0);const{canvas:d,ctx:u}=ca(c,b[2]);if(!e&&(ve!==ye||""!==b[2]||""!==b[3])){u.clearRect(714,0,99,hi);const e=await bi(`frame/frame-${ye}.png`,await mi.bottomRight,pi,hi),{canvas:t}=ca(e,b[3]);u.drawImage(t,0,0)}if(E.globalAlpha=M/100,E.scale(r,r),N&&(o.clearRect(Y,X,_,q),u.clearRect(Y,X,_,q)),e){const{width:e,height:t}=n;o.globalCompositeOperation="source-atop",o.drawImage(n,0,0,e,t,0,0,pi,hi),u.globalCompositeOperation="source-atop",u.drawImage(n,0,0,e,t,0,0,pi,hi)}E.drawImage(i,0,0),E.drawImage(d,0,0),E.resetTransform(),E.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;if(!a||!e)return;const{width:t,height:n}=a;n<=0||e.drawImage(a,0,0,t,n,r*K,r*U,r*Z,r*Z/(t/n))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n||!t||!l)return;const{width:i,height:o}=n;if(o<=0)return;const{artX:s,artY:c,artWidth:d,artFrameWidth:u,artFrameX:b,artFrameY:p,ratio:h,artRatio:v}=m(N,S,f,k);"frame"!==f?t.drawImage(n,0,0,i,o,r*s,r*c,r*d,r*d/h):t.drawImage(n,0,0,i,o,0,0,r*pi,r*hi);const y=null!==(e=I[3])&&void 0!==e?e:"normal";if("normal"!==y&&a){const e=Dr([y],g);await e(t,"art",(async e=>Kr(t,`finish/art-finish-${e}.png`,r*b,r*p,r*u,r*u/v)))}},drawAttribute:async()=>{var e;if(!E)return;E.scale(r,r);const{canvas:t,ctx:a}=Yt(pi*r,(ki+Oi)*r);await Pr(a,`attribute/attr-${F[i].fileKey}-${y.toLowerCase()}.png`,wi,ki);const n=null!==(e=I[0])&&void 0!==e?e:"normal";if("normal"!==n){const e=Dr([n],g),{canvas:r,ctx:i}=Yt(pi,ki+Oi);i.drawImage(t,0,0),await e(i,"art",(async e=>await Pr(i,`finish/finish-typeart-${e}.png`,(pi-Si)/2,Fi))),a.globalCompositeOperation="source-in",a.drawImage(r,0,0),E.drawImage(t,0,0)}else E.drawImage(t,0,0);E.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:n}=e;const i="auto"===v?Sa(o):v;if(!E)return;E.scale(r,r);const l=null!==(t=I[1])&&void 0!==t?t:"normal",s="normal"!==l?Dr([l],g):void 0;await(async e=>{let{ctx:t,globalScale:a,cardIcon:n,text:r,star:i,starList:l,starAlignment:o="auto",style:s,onStarDraw:c,loopStarFinish:d}=e;const u=Array.isArray(l)?l:[],m=50;let b="custom"===n?u.length:"string"===typeof i?""===i?0:1:"number"===typeof i?i:0,p=m*b+4*(b-1);const h=145;let g="right";["rank","negative-level"].includes(n)&&(g="left"),g="auto"===o?g:o,b>12&&(g="center"),r&&"center"===g&&(b=0,p=0);const f="center"===g?(li+p)/2:"left"===g?85.9125+p:728.775;let v=-54;if(t&&r&&"st"!==n){const e=50,n=Hr({ctx:t,...s,globalScale:a});t.textAlign="left"===g||"right"===g?g:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const i="center"===g?t.measureText(r).width/-2:"left"===g?4:-58;t.fillText(r,f+i,h+.9*e),t.textAlign="left",n()}const{canvas:y,ctx:x}=Yt(li*a,195*a);if(await Promise.all([...Array(b)].map((async(e,t)=>{v+=54;const a="custom"===n?u[b-1-t]:n;let r=[f-(m+v),h];return await Pr(x,`subfamily/subfamily-${a}.png`,...r),await c(r)}))),d){const{canvas:e,ctx:a}=Yt(li,195);a.drawImage(y,0,0),await d(a,"art",(async e=>await Pr(a,`finish/finish-typeart-${e}.png`,(li-oi)/2,si))),x.globalCompositeOperation="source-in",x.drawImage(e,0,0),t.drawImage(y,0,0)}else t.drawImage(y,0,0)})({ctx:E,cardIcon:i,text:"string"===typeof x?x:null,star:x,starList:j,starAlignment:n,style:a,globalScale:r,onStarDraw:async e=>"st"===i?Promise.resolve():await B(E,"star",(async t=>Pr(E,`finish/finish-${t}-star.png`,...e))),loopStarFinish:s}),E.resetTransform()},drawPendulumScaleIcon:async()=>{if(!E)return;const{canvas:e,ctx:t}=Yt(yi,vi);await Pr(t,`frame-pendulum/pendulum-scale-${k}.png`,0,0),"scaleless"===R.blue&&t.clearRect(0,0,yi/2,vi),"scaleless"===R.red&&t.clearRect(yi/2,0,yi/2,vi),E.scale(r,r),E.drawImage(e,0,750),E.resetTransform()},drawStatBorder:async e=>{E&&(E.scale(r,r),await Ur(t,"frame/frame-stat-border.png",0,1070,813,20,r,e),E.resetTransform())},drawNameBackground:async()=>{if(!E)return;E.scale(r,r);const{ctx:e,canvas:t}=Yt(pi,gi);await Pr(e,`background/background-name-${ge}.png`,0,0);const{canvas:a,ctx:n}=ca(t,b[0]);if(ge!==fe||""!==b[0]||""!==b[1]){const e=await bi(`background/background-name-${fe}.png`,await mi.name,pi,gi),t=ca(e,b[1]).canvas;n.drawImage(t,0,0)}E.globalAlpha=A/100,E.drawImage(a,0,0),E.globalAlpha=1,E.resetTransform()},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!E)return;E.scale(r,r);const{ctx:t,canvas:a}=Yt();e?await Kr(t,`background/background-text-${xe}.png`,54,885+ae,705,231,0,0+ae,705,231):await Pr(t,`background/background-text-${xe}.png`,54,885);const n=ca(a,b[4]).canvas;if(E.globalAlpha=$/100,E.drawImage(n,0,0),e){var i;const{ctx:e,canvas:t}=Yt(),{exceptionFrameType:a=te,exceptionPendulumBoxOffsetHeight:n=0}=null!==(i=V[k][je])&&void 0!==i?i:{};await Kr(e,`background/background-${a}-${je}.png`,ne,re+oe,ie,le,0,oe+n,ie,le+n);const r=ca(t,b[5]).canvas;E.globalAlpha=H/100,E.drawImage(r,0,0)}E.globalAlpha=1,E.resetTransform()},drawFrameBorder:async()=>{E&&(E.scale(r,r),await Pr(E,`frame/frame-border-${me}.png`,0,0),E.resetTransform())},drawNameBorder:async()=>{if(W&&E){E.scale(r,r);for(let e=0;e<be.length;e++)await Pr(E,`frame/name-border-${be[e]}.png`,0,0);E.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(ce&&E){let e="";e=T||L?`frame/art-border-${o}.png`:C||["zarc","hamon","uria","raviel"].includes(o)?"frame/art-border-special.png":"frame/art-border.png",E.scale(r,r),await Pr(E,e,60,170),E.resetTransform()}},drawPendulumBorder:async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!E)return;const n=mn.test(b[6]),i=n&&a&&"normal"===t?"platinum":t,{canvas:l,ctx:o}=Yt();if(await Kr(o,`frame-pendulum/border-pendulum-${k}-${i}-artless`+("scaleless"===R.blue?"-scaleless":"")+".png",30,fi,ji/2,xi,0,0,ji/2,xi),await Kr(o,`frame-pendulum/border-pendulum-${k}-${i}-artless`+("scaleless"===R.red?"-scaleless":"")+".png",30+ji/2,fi,ji/2,xi,ji/2,0,ji/2,xi),a&&n){const{canvas:e}=ca(l,b[6]);o.drawImage(e,0,0)}if(e)if(o.clearRect(0,0,pi,se+fi),n){const e="normal"===t?"platinum":t,{ctx:a,canvas:n}=Yt();await Pr(a,`frame-pendulum/border-pendulum-${k}-${e}.png`,30,fi);const{canvas:r}=ca(n,b[6]);o.drawImage(r,0,0)}else await Pr(o,`frame-pendulum/border-pendulum-${k}-${t}.png`,30,fi);E.scale(r,r),E.drawImage(l,0,0),E.resetTransform()},drawEffectBorder:async()=>{E&&(E.scale(r,r),ue||"speed-skill"!==ve?await Pr(E,"frame/effect-border.png",35,de):await Pr(E,"frame/effect-border-speed-skill.png",35,de),E.resetTransform())},drawCardBorder:async()=>{if(E){if(E.scale(r,r),mn.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Yt();await Pr(t,`frame/card-border-${e}.png`,0,0);const{canvas:n}=ca(a,b[6]);E.drawImage(n,0,0)}else await Pr(E,`frame/card-border${ue?`-${O}`:""}.png`,0,0);E.resetTransform()}},drawArtBorderFoil:async()=>{if(E){if(E.scale(r,r),ce)if(mn.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Yt();await Pr(t,`frame/art-border-${e}.png`,60,170);const{canvas:n}=ca(a,b[6]);E.drawImage(n,0,0)}else await Pr(E,`frame/art-border-${O}.png`,60,170);E.resetTransform()}},drawEffectBorderFoil:async()=>{if(E){if(E.scale(r,r),mn.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Yt();await Pr(t,`frame/effect-border-${e}.png`,35,de);const{canvas:n}=ca(a,b[6]);E.drawImage(n,0,0)}else await Pr(E,`frame/effect-border-${O}.png`,35,de);E.resetTransform()}},drawNameFinish:async()=>{(ce||W)&&E&&(E.scale(r,r),await B(E,"name",(async e=>Pr(E,`finish/finish-${e}-name.png`,0,0))),E.resetTransform())},drawAttributeFinish:async()=>{y!==w&&E&&(E.scale(r,r),await B(E,"attribute",(async e=>Pr(E,`finish/finish-${e}-attribute.png`,678,55))),E.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;pe&&e&&(e.scale(r,r),await z(e,"art",(async(t,a)=>await Kr(e,`finish/art-finish-${t}${N?a:""}.png`,J,Q,_,_/ee)),k),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;e&&(e.scale(r,r),await B(e,"art-overlay",(async t=>Pr(e,`finish/finish-${t}-`+(pe?"art":"unart")+"-overlay"+(N?`-pendulum-${k}`:"")+".png",J,Q))),e.resetTransform())},drawArtBorderFinish:async()=>{ce&&E&&(E.scale(r,r),await B(E,"art-border",(async e=>Pr(E,`finish/finish-${e}-art-border.png`,0,0))),E.resetTransform())},drawPendulumArtBorderFinish:async()=>{E&&(E.scale(r,r),ce&&await B(E,"art-border-pendulum",(e=>Pr(E,`finish/finish-${e}-art-border-pendulum-${k}.png`,0,0))),E.resetTransform())},drawBorderPendulumFinish:async()=>{E&&(E.scale(r,r),await B(E,"border-pendulum",(async e=>{const t=`finish/finish-${e}-border-pendulum-${k}`;await Kr(E,`${t}${"scaleless"===R.blue?"-scaleless":""}.png`,0,0,pi/2,hi,0,0,pi/2,hi),await Kr(E,`${t}${"scaleless"===R.red?"-scaleless":""}.png`,0+pi/2,0,pi/2,hi,pi/2,0,pi/2,hi)})),E.resetTransform())},drawFrameFinish:async()=>{E&&(E.scale(r,r),await B(E,"frame",(async e=>Pr(E,`finish/finish-${e}-frame${N?`-pendulum-${k}`:""}.png`,0,0))),E.resetTransform())},drawFrameBackgroundFinish:async()=>{E&&(E.scale(r,r),await B(E,"frame-background",(async e=>Pr(E,`finish/finish-${e}-frame-background${N?"-pendulum":""}.png`,0,0))),E.resetTransform())},drawOverlayFinish:async()=>{E&&(E.scale(r,r),await B(E,"overlay",(async e=>Pr(E,`finish/finish-${e}-overlay.png`,0,0))),E.resetTransform())},drawCardBorderFinish:async()=>{E&&(E.scale(r,r),await B(E,"card-border",(async e=>Pr(E,`finish/finish-${e}-card-border.png`,0,0))),E.resetTransform())}};return Oe},Li=async(e,t,a,n,r,i,l,o)=>{var s,c,d;const{isSpeedSkill:u,format:m,cloneNode:b,frame:p,furiganaHelper:h,globalScale:g}=o,f=n*g,v=r*g,y=i*g,x=null===b||void 0===b?void 0:b.getContext("2d");if(!(t&&x&&a))return;const{embossPitch:j,embossYaw:O,embossThickness:w,fillStyle:k,font:S,gradientAngle:F,gradientColor:C,hasEmboss:L,hasGradient:T,hasOutline:N,hasShadow:R,headTextFillStyle:I,lineColor:B,lineOffsetX:z,lineOffsetY:E,lineWidth:D,shadowBlur:W,shadowColor:M,shadowOffsetX:A,shadowOffsetY:H,pattern:$}={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none",...l},{patternImage:P,blendMode:U}=null!==(s=K[null!==$&&void 0!==$?$:""])&&void 0!==s?s:{};t.textAlign="left";const Y=Tn({...(null!==(c=fe[S])&&void 0!==c?c:fe.Default).fontData,headTextFillStyle:I},g),G=fn({defaultFamily:Y.font,defaultSize:Y.fontList[0].fontSize,defaultWeight:Y.weight}),X={fontLevel:0,fontData:Y,currentFont:G},V=ni(a,m,{multiline:!1,furiganaHelper:h,dictionaryType:"rubyFormName"}),q="ocg"===m?[V]:V.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),_=fn({defaultFamily:Y.font,defaultSize:Y.fontList[0].fontSize,defaultWeight:Y.weight}),J=_.getFont(),Q=_.setSize((e=>e*Y.symbolFontRatio)).setStyle("small-caps").setFamily(Y.symbolFont).getFont();let Z=0,ee=0;q.forEach(((e,a)=>{t.font=a%2===0?J:Q;const n=t.measureText(e.replaceAll(tt,""));Z=Math.max(Z,n.actualBoundingBoxAscent),ee=Math.max(ee,n.actualBoundingBoxDescent)}),0),t.font=J;let te=0;const ae=gn((e=>{const{currentLineCount:a,currentLineList:n}=ei({ctx:t,median:e,paragraphList:[V],format:m,textData:X,width:y,globalScale:g});return!(a>1)&&(te=n[0].actualLineWidth,!0)}))/1e3;t.scale(ae,1);const ne=Ln(ce,g),re=null!==(d=Y.fontList[0].offsetY)&&void 0!==d?d:ne.offsetY,ie=Xr(V),le=te>0&&T?((e,t,a,n,r,i,l,o)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=l+o,m=n+r/2,b=i+(o-l)/2;let p=r,h=u;"1"!==c&&"3"!==c||(p=u,h=r);const g=Math.sqrt(p**2/4+h**2/4);if(g>0){const t=90-(180*Math.asin(p/2/g)/Math.PI-d),n=Math.sin(t/180*Math.PI)*g,r=Math.sin(d/180*Math.PI)*n,i=Math.cos(d/180*Math.PI)*n;let l=r,o=i;"1"===c&&(l=i,o=-r),"2"===c&&(l=-r,o=-i),"3"===c&&(l=-i,o=r);const s=m+l,u=b-o,h=m-l,f=b+o,v=e.createLinearGradient(s,u,h,f);return a.forEach((e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)})),v}})(t,F,On(C),f,te,v,Z,ee):void 0;let oe=L&&"number"===typeof w&&w>0,se=()=>{};oe&&(se=Hr({ctx:t,lineWidth:w,lineColor:k,lineColorGradient:le,globalScale:g,useDefault:!1})),t.fillStyle=null!==le&&void 0!==le?le:k;const{tokenEdge:de}=ai({ctx:t,tokenList:ie,xRatio:ae,yRatio:1,trueEdge:f,trueBaseline:v,textData:X,format:m,globalScale:g,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:n,scaledBaseline:r}=e;t.fillText(a,n,r-(u?re:0)),oe&&t.strokeText(a,n,r-(u?re:0))}});if(se(),P){const a=e.cloneNode(),n=a.getContext("2d");t.setTransform(1,0,0,1,0,0),n.scale(g,g),await Pr(n,`frame/frame-${p}.png`,0,0),await Pr(n,`background/background-name-${p}.png`,0,0),n.globalCompositeOperation=U,n.resetTransform(),await Kr(n,`finish-name/${P}.png`,f,v-Z,y,Z+ee),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(ae,1)}if(L){const a=10,n=ja({inputCanvas:e,lightPitch:j,lightYaw:O,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(de+a)});t.putImageData(n,0,0)}if(N){const e=Hr({ctx:t,lineWidth:D+(L?w:0),lineColor:B,globalScale:g,useDefault:!1});t.globalCompositeOperation="destination-over",ai({ctx:t,tokenList:ie,xRatio:ae,yRatio:1,trueEdge:f,trueBaseline:v,textData:X,format:m,globalScale:g,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:n,scaledBaseline:r}=e;t.lineJoin="round",t.strokeText(a,n+z,r+E-(u?re:0))}}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(R){const a=e.cloneNode(),n=a.getContext("2d"),r=Hr({ctx:n,x:A,y:H,shadowColor:M,blur:W,globalScale:g,useDefault:!1});t.scale(1/ae,1),n.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",r()}ai({ctx:t,tokenList:ie,xRatio:ae,yRatio:1,trueEdge:f,trueBaseline:v,textData:X,format:m,globalScale:g,textDrawer:()=>{}});const ue={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"};t.setTransform(1,0,0,1,0,0),t.fillStyle=ue.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},Ti={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},Ni=e=>{var t,a;let{ctx:n,value:r,format:i,metricMethod:l,size:o,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:b}=Fn(null!==(t=null===(a=re[i])||void 0===a?void 0:a[o])&&void 0!==t?t:re.tcg.medium,c),p=Tn({tcg:xe,ocg:je}[i],c),h={...p,metricMethod:null!==l&&void 0!==l?l:p.metricMethod},{font:g}=h,f=Ti[o],v=h.fontList[f],y=fn({defaultFamily:g,defaultSize:`${v.fontSize}px`}),x={fontLevel:f,fontData:h,currentFont:y};let j=0;n.font=y.getFont(),n.textAlign="left";const O=ni(r,i,{multiline:!1,furiganaHelper:s}),w=gn((e=>{const{currentLineCount:t,currentLineList:a}=ei({ctx:n,median:e,paragraphList:[O],format:i,textData:x,width:b,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)}))/1e3;n.scale(w,1);const k=ai({ctx:n,tokenList:Xr(O),xRatio:w,yRatio:1,trueEdge:"left"===d?u:u-j*w,trueBaseline:m,textData:x,format:i,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:n,scaledBaseline:r}=e;t.fillText(a,n,r)}});return n.setTransform(1,0,0,1,0,0),{...k,xRatio:w}},{finishTypeCardWidth:Ri,width:Ii,iconHeight:Bi,iconWidth:zi}=s,Ei=(e,t,a,n,r,i)=>{const l=a*i,o=n*i;if(e&&t){const a=r*i;e.font=`${a}px MatrixBoldSmallCaps`,e.textAlign="left";const n=`${t}`.split("");if(1===n.length){const t=n[0],r=l-e.measureText(t).width/2;e.fillText(t,"1"===t?r+2*i:r,o+a)}else if(2===n.length){const t=n[0],r=n[1],i=.825*e.measureText(t).width,s=e.measureText(r).width,c=l-i-("1"===t?0:.1*i);e.fillText(t,c,o+a),e.fillText(r,c+i-("1"===t?"1"===r?.1*e.measureText("1").width:.1*s:-.1*s),o+a)}else{let t=0;n.forEach((a=>{t+=e.measureText(a).width*("1"===a?.7:1)}));let r=l-t/2;n.forEach((t=>{e.fillText(t,r,o+a),r+=e.measureText(t).width*("1"===t?.7:1)}))}}},Di=(e,t,a,n,r)=>{if(!e)return;const i=a*r,l=n*r;e.scale(1,.98),e.font=`bold ${35.73*r}px Matrix-Bold`;const o=Br(e,t,.075,i,l/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*r}px Matrix-Bold`,Br(e,"/",.15,o+5*r,l/1.01),e.setTransform(1,0,0,1,0,0)},Wi=(e,t,a,n,r)=>{if(!e||null==t)return;const i=a*r,l=n*r,o=73.97*r;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*r}px matrix`,e.fillText(t,i+o,l);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*r}px MatrixBoldSmallCaps`,e.fillText(t,i+o,l/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let n=a.reduce(((t,n,i)=>{e.font=36.18*r+"px MatrixBoldSmallCaps";let l=t+e.measureText(n).width;return i<a.length-1&&(e.font=36.18*r+"px matrix",l+=e.measureText("?").width),l}),0);if(n>0){const t=Math.min(o/n,1);e.scale(t,1),a.reduce(((n,i,o,s)=>{const c=s[s.length-1-o];let d=n;return e.font=36.18*r+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+l),o<a.length-1&&(e.font=34*r+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,l/1.29-1),e.setTransform(1,0,0,1,0,0)),d}),i+o),e.scale(1/t,1)}}},{height:Mi,width:Ai,finishTypeCardWidth:Hi,finishTypeCardHeight:$i,stickerX:Pi,stickerY:Ki,stickerSize:Ui}=s,Yi=(e,t,a)=>{const{card:r}=kr(),{exportCanvasRef:i,artworkCanvasRef:l,backgroundCanvasRef:o,frameCanvasRef:s,creatorCanvasRef:u,effectCanvasRef:b,nameCanvasRef:p,passwordCanvasRef:f,pendulumEffectCanvasRef:v,pendulumScaleCanvasRef:y,setIdCanvasRef:x,statCanvasRef:j,stickerCanvasRef:O,cardIconCanvasRef:k,typeCanvasRef:S,finishCanvasRef:F,lightboxRef:C,previewCanvasRef:T}=t,{format:R,region:I,hasBackground:B,backgroundType:z,frame:E,foil:D,finish:W,artFinish:M,otherFinish:A,opacity:H,name:P,nameStyle:K,nameStyleType:U,effectTextStyle:Y,pendulumTextStyle:X,typeTextStyle:V,statTextStyle:q,otherTextStyle:_,effect:J,effectStyle:Q,typeAbility:Z,isPendulum:ee,pendulumFrame:te,pendulumRightFrame:re,pendulumEffect:oe,pendulumScaleBlue:se,pendulumScaleRed:de,pendulumStyle:ue,pendulumSize:me,leftFrame:be,rightFrame:pe,dyeList:he,atk:ge,def:fe,linkMap:xe,linkRating:je,attribute:ke,cardIcon:Se,subFamily:Fe,star:Ce,starAlignment:Le,starList:Te,setId:Ne,password:Re,creator:Ie,sticker:Be,isLegacyCard:ze,isFirstEdition:De,isDuelTerminalCard:We,isSpeedCard:Me,isLimitedEdition:Ae,furiganaHelper:He,flag:$e}=r,Pe=Object(n.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),Ke=Q.background,Ue=ue.background,Ye=Q.minLine,Ge=ue.minLine,Xe="auto"===te?ee?"spell":E:te,Ve=null===Q||void 0===Q?void 0:Q.condenseTolerant,qe=(e=>"normal"===e.frame&&ka(e))(r),_e=(e=>"xyz"===e.frame)(r),Je=(e=>!0===e.isLink)(r),Qe=ka(r),Ze=wa(r),{body:et=100,boundless:tt}=H,at=!!(et<50||tt),nt=Ca(Xe),{bottomRightFrame:rt}=Na({frame:E,topLeftFrame:be,topRightFrame:pe,bottomLeftFrame:te,bottomRightFrame:re,effectBackground:Ke,pendulumEffectBackground:Ue},ee),it=Ca(rt),lt=Fa(E),{levelStyle:ot,resolvedEffectTextStyle:st,resolvedPendulumEffectTextStyle:ct,resolvedStatTextStyle:dt,resolvedTypeTextStyle:ut,resolvedOtherEffectTextStyle:mt}=Object(n.useMemo)((()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:n,pendulumTextStyle:r,otherTextStyle:i,statTextStyle:l,typeTextStyle:o}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,b]=n,p=d?{...m?{y:0,blur:4,shadowColor:b}:{},color:u}:{},[h,g,f,v]=r,y=h?{...f?{y:0,blur:4,shadowColor:v}:{},color:g}:{},[x,j,O,w]=o,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,F,C,L]=l,T=S?{...C?{y:1,blur:1,shadowColor:L}:{},color:F}:{},[N,R,I,B]=i;return{levelStyle:c,resolvedEffectTextStyle:p,resolvedOtherEffectTextStyle:N?{...I?{y:0,blur:0,shadowColor:B}:{},color:R}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:T,resolvedTypeTextStyle:k}})({lightFooter:nt,lightHeader:lt,requireShadow:at,effectTextStyle:Y,pendulumTextStyle:X,otherTextStyle:_,statTextStyle:q,typeTextStyle:V})),[nt,lt,at,Y,X,_,q,V]),bt=he[6],pt=Fe.toUpperCase(),ht=Z.map((e=>e.trim())).join("ocg"===R?"\uff0f":"\u200a/\u200a"),[gt,ft]=$e,vt=!ee&&!Qe&&Je&&!(ge||fe),yt=Ta(ft,Je)&&!vt,xt=yt&&gt,jt=!(!ge&&!fe)||yt||!(!ee||!Ne),Ot=ht.length>0&&("auto"===Se?Qe||Ze:"st"!==Se),wt=!(""===(null!==se&&void 0!==se?se:"")),kt=!(""===(null!==de&&void 0!==de?de:"")),{isInitializing:St,imageChangeCount:Ft,language:Ct,globalScale:Lt}=a,Tt=e&&!1===St,Nt=Object(n.useMemo)((()=>Dr(W,h)),[W]),Rt=Object(n.useMemo)((()=>Dr([M],g)),[M]),[,It,Bt]=A;Object(n.useEffect)((()=>{Tt&&(Pe.current.frame.rerun+=1,Pe.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=l.current,n=o.current;if(!Er(t)||!s.current)return;const r={...d(),...H},{artBorder:i,body:u,boundless:b,baseFill:p}=r,h=(e,t,a,n,r,i)=>new Promise((l=>{setTimeout((()=>{e.fillStyle=B?null!==i&&void 0!==i?i:p:c,e.fillRect(t,a,n,r),l(!0)}),0)})),g=u>0||i,{drawAttribute:f,drawBackground:v,drawCardArt:y,drawFrame:x,drawPendulumScaleIcon:j,drawStar:O,drawNameBackground:w,drawEffectBackground:k,drawFrameBorder:S,drawNameBorder:F,drawArtBorder:C,drawPendulumBorder:L,drawBorderPendulumFinish:T,drawEffectBorder:N,drawCardBorder:R,drawStatBorder:W,drawAttributeFinish:M,drawArtBorderFoil:$,drawEffectBorderFoil:P,drawNameFinish:K,drawArtFinish:U,drawArtOverlayFinish:Y,drawArtBorderFinish:G,drawPendulumArtBorderFinish:X,drawFrameFinish:V,drawFrameBackgroundFinish:q,drawOverlayFinish:_,drawCardBorderFinish:J}=Ci({canvas:s.current,artworkCanvas:a,backgroundCanvas:n,globalScale:Lt,region:I,frame:E,leftFrame:be,pendulumFrame:te,rightFrame:pe,pendulumRightFrame:re,dyeList:he,effectBackground:Ke,pendulumEffectBackground:Ue,hasBackground:B,backgroundType:z,attribute:ke,cardIcon:Se,star:Ce,starList:Te,foil:D,pendulumSize:me,opacity:r,isLink:Je,isSpeedSkill:Ze,isXyz:_e,isPendulum:ee,pendulumFrameTypeMap:{red:kt?"normal":"scaleless",blue:wt?"normal":"scaleless"},otherFinish:A,loopFinish:Nt,loopArtFinish:Rt});await h(t,0,0,Lt*Ai,Lt*Mi);const{canvas:Q,ctx:Z}=Yt(Ai*Lt,Mi*Lt);a&&Z&&y(Z),await U(Z),await Y(Z);const{canvas:ae,ctx:ne}=Yt(Ai*Lt,Mi*Lt);if(await h(ne,0,0,Lt*Ai,Lt*Mi),n&&ne&&await v(ne,g),b||ne.drawImage(Q,0,0),t.drawImage(ae,0,0),await x(),await R(),await J(),ee||(b||(await w(),await k(),await N(),await P()),await C(),await $(),await G()),ee&&!b){const{artX:e,artY:a,artWidth:n,ratio:r}=m(ee,H,void 0,me);t.drawImage(ae,Lt*e,Lt*a,Lt*n,Lt*n/r,Lt*e,Lt*a,Lt*n,Lt*n/r),await w(),await k(!0),await j(),await L(g,"normal"),await L(g,D,!0),await X(),g&&await T()}if(b||(await V(),await K()),g&&await q(),b){await w(),await K(),await F(),Je&&!ee?await G():ee&&(g&&(await L(g,"normal"),await L(g,D,!0)),await X());const{artX:e,artY:a,artWidth:n,ratio:r}=m(ee,H,"full",me);t.drawImage(Q,Lt*e,Lt*a,Lt*n,Lt*n/r,Lt*e,Lt*a,Lt*n,Lt*n/r),ee?(await k(!0),await j(),await L(!1,"normal"),await L(!1,D,!0),await T()):(await k(),await N(),await P()),await V()}if(jt&&await W({color:"#000000",...dt}),await f(),await M(),await O({style:ot,starAlignment:Le}),b||await F(),await S(),yt&&jt){const e=Hr({ctx:t,...dt,globalScale:Lt}),a="string"===typeof je&&je.length>0?je:`${Array.isArray(xe)?xe.length:0}`;await(async(e,t,a,n)=>{const r=e.getContext("2d");if(!r||"string"!==typeof t)return;await Ur(e,"link/link-text.png",...Cn([600,1080,120,30],n),n,a);const i=isNaN(Number(t))?1106:1105,l=Hr({ctx:r,...a,globalScale:n});r.textAlign="right",r.scale(1.2,1),r.font=`bold ${24*n}px RoGSanSrfStd-Bd`,r.fillText(`${t}`,622.75*n,i*n),r.setTransform(1,0,0,1,0,0),r.textAlign="left",l()})(s.current,a,dt,Lt),e()}await(async e=>{let{canvas:t,globalScale:a,type:n,isPendulum:r,isLink:i,isDuelTerminalCard:l,isSpeedCard:o,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(l){const e=r?[255,1072,175,35]:i?[151,848,216,24]:[80,843,270,30];await Ur(t,`text/text-duel-terminal-${n}${s?"-bordered":""}.png`,...Cn(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(o){const e=r?[255,1084,176.4,25]:i?[151,854,215.6,22]:[80,850,245,25];await Ur(t,`text/text-speed-duel-${n}${s?"-bordered":""}.png`,...Cn(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:Lt,type:nt&&!ee?"white":"black",bordered:(u<50||b)&&!ee,isDuelTerminalCard:We,isSpeedCard:Me,isLink:Je,isPendulum:ee,textStyle:mt}),await _()})}),[Tt,Lt,l,ke,o,z,Se,he,Ke,W,D,R,I,E,s,B,We,Je,ee,Me,Ze,_e,be,ot,nt,xe,je,Rt,Nt,H,A,Ue,te,re,me,mt,dt,pe,yt,Ce,Te,Le,jt,wt,kt,Ft]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=y.current)||void 0===e?void 0:e.getContext("2d");if(Er(t)&&ee){const{numberBlueX:e,numberRedX:a,numberY:n,fontSize:r}=G[me];""!==(null!==se&&void 0!==se?se:"")&&Ei(t,se,e,n,r,Lt),""!==(null!==de&&void 0!==de?de:"")&&Ei(t,de,a,n,r,Lt)}}),[Tt,Lt,ee,me,se,de,y]),Object(n.useEffect)((()=>{Tt&&(Pe.current.name.rerun+=1,Pe.current.name.instructor=async()=>{var e,t;const a=null===(e=p.current)||void 0===e?void 0:e.getContext("2d"),n=null===(t=p.current)||void 0===t?void 0:t.cloneNode();Er(a)&&n&&await Li(p.current,a,P,"tcg"===R?60:68,116,ke===w?"tcg"===R?688:674:"tcg"===R?608:598,(e=>{var t,a;let{format:n,frame:r,nameStyle:i,nameStyleType:l,foil:o}=e;if("custom"===l)return i;const s=wa({frame:r}),c=Fa(r);let d="Default";"ocg"===n&&(d="OCG"),s&&"tcg"===n&&(d="Arial");let u={fillStyle:c?"#ffffff":"#000000",headTextFillStyle:c?"#ffffff":"#000000"};if("predefined"===l){var m,b;const e={...$[null!==(m=i.preset)&&void 0!==m?m:"commonB"].value};return $[null!==(b=e.preset)&&void 0!==b?b:"commonB"].value.font||(e.font=d),{...u,...e}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const h="normal"!==o&&null!==(t=null===(a=$[o])||void 0===a?void 0:a.value)&&void 0!==t?t:{},g="zarc"===r?$.animeGold.value:{};return{font:d,...u,...p,...h,...g}})({format:R,frame:E,nameStyle:K,nameStyleType:U,foil:D}),{isSpeedSkill:Ze,format:R,cloneNode:n,frame:E,furiganaHelper:He,globalScale:Lt})})}),[Tt,Lt,ke,D,R,E,He,Ze,P,p,K,U]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(!Er(t)||!jt)return;const a=Hr({ctx:t,...dt,globalScale:Lt}),n=yt;if(ge){const e=((yt?!!fe&&xt:!!fe)?168.75:0)+(n?168.75:0);Di(t,"ATK",600.85-e,1106,Lt),Wi(t,ge.trim(),677.574-e,1106.5,Lt)}if(fe&&(!yt||xt)){const e=n?168.75:0;Di(t,"DEF",600.85-e,1106,Lt),Wi(t,fe.trim(),673.865-e,1106.5,Lt)}a()}),[Tt,Lt,ge,fe,yt,Qe,xt,dt,j,jt]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");Er(t)&&((e,t,a)=>{if(!e)return;const{globalScale:n,isPendulum:r,isLink:i,withShadow:l,format:o,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${l?"bold":""} ${22*n}px stone-serif-regular`,"ocg"===o&&(d=.145,u=-1,m=-3);const b=Hr({ctx:e,color:s&&!r?"#ffffff":"#000000",shadowColor:l?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:l&&!r?3:0,globalScale:n,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});r?Br(e,t,d,(66.65+m)*n,(1105.01+u)*n):i?zr(e,t,d,(666.56+m)*n,(872.94+u)*n):zr(e,t,d,(728.78+m)*n,(871.5+u)*n),b()})(t,Ne,{globalScale:Lt,isLink:Je,isPendulum:ee,withShadow:at&&!ee,format:R,lightFooter:it,textStyle:mt})}),[Tt,Lt,R,Je,ee,it,x,Ne,Ze,Xe,at,mt]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");if(!Er(t))return;const a=/^[0-9]*$/.test(Re),n=a&&ee&&Je,{rightEdge:r}=(e=>{var t,a;let{ctx:n,globalScale:r,value:i,format:l,alignment:o,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:b}=e;if(!Er(n))return{rightEdge:0};const p=Hr({ctx:n,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:r,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Fn(null!==(t=le[l])&&void 0!==t?t:le.tcg,r),v=Tn(ye[l],r),{font:y}=v,x=ni(i,l,{multiline:!1,furiganaHelper:!1});let j={fontLevel:b,fontData:v,currentFont:fn()},O=0,w=1e3,k=v.fontList[0];for(let L=0;L<v.fontList.length;L++){k=v.fontList[L];const e=fn({defaultFamily:y,defaultSize:`${k.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:L,fontData:v,currentFont:e},a=0;if(n.font=e.getFont(),n.textAlign="left",w=gn((e=>{const{currentLineCount:i,currentLineList:o}=ei({ctx:n,median:e,paragraphList:[x],format:l,textData:t,width:f,globalScale:r});return!(i>1)&&(a=o[0].actualLineWidth,!0)})),O=a,j=t,w>=1e3)break}const S=w/1e3;n.scale(S,1);const F=Ln(ce,r),C=ai({ctx:n,tokenList:Xr(x),xRatio:S,yRatio:1,trueEdge:"left"===o?h+c:h-c-O*S,trueBaseline:g+(null!==(a=k.offsetY)&&void 0!==a?a:F.offsetY)+s,textData:j,format:l,globalScale:r,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:n,scaledBaseline:r}=e;t.fillText(a,n,r)}});return n.setTransform(1,0,0,1,0,0),p(),{rightEdge:C.tokenEdge}})({ctx:t,globalScale:Lt,value:Re,lightFooter:nt,alignment:"left",edgeOffset:(n?80:0)*Lt,format:R,hasShadow:"zarc"===Xe||at,textStyle:mt,fontLevel:a?0:1});if(De){const e=!ee||!!a,n=!ze&&a||ee?Math.max(r/Lt+14.813,142.2)-("ocg"===R?7:0):Je?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{globalScale:1,stroke:!1};if(!e)return;const{textStyle:i,globalScale:l}=null!==r&&void 0!==r?r:{},o=t*l,s=a*l,c=n*l,d=Hr({ctx:e,globalScale:l,...i,...null!==i&&void 0!==i&&i.shadowColor?{x:0,y:0,blur:3}:{}}),u=7.4*l;e.font=`bold ${23.7*l}px palatino-linotype-bold`;let m=o;e.fillText("1",m,s+c),m+=e.measureText("1").width-2*l,e.font=`bold ${17.78*l}px palatino-linotype-bold`,e.fillText("st",m,s-u+c),m+=e.measureText("st").width,e.font=`bold ${22.22*l}px palatino-linotype-bold`,e.fillText(" Edition",m,s+c),d()}(t,n,!ze&&a||ee?1150.93:871,!ze&&a||ee?Ze?-2:-1:0,{stroke:!1,globalScale:Lt,textStyle:{color:nt?"#ffffff":"#000000",...mt}})}}),[Tt,Lt,De,Re,f,nt,R,at,Je,Ze,ee,ze,Xe,mt]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=u.current)||void 0===e?void 0:e.getContext("2d");Pe.current.creator.rerun+=1,Pe.current.creator.instructor=async()=>{var e;if(!Er(t))return;const a={...d(),...H},{body:n,boundless:r}=a,i=(e=>{var t,a;let{ctx:n,value:r,format:i,alignment:l,baselineOffset:o=0,lightFooter:s,hasShadow:c,textStyle:d,globalScale:u}=e;if(!Er(n))return;const m=Hr({ctx:n,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,globalScale:u,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:b,trueBaseline:p,trueWidth:h}=Fn(null!==(t=ie[i])&&void 0!==t?t:ie.tcg,u),g=Tn(ve[i],u),{font:f}=g,v=ni(r,i,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:g,currentFont:fn()},x=0,j=1e3,O=g.fontList[0];for(let F=0;F<g.fontList.length;F++){O=g.fontList[F];const e=fn({defaultFamily:f,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:F,fontData:g,currentFont:e},a=0;if(n.font=e.getFont(),n.textAlign="left",j=gn((e=>{const{currentLineCount:r,currentLineList:l}=ei({ctx:n,median:e,paragraphList:[v],format:i,textData:t,globalScale:u,width:h});return!(r>1)&&(a=l[0].actualLineWidth,!0)})),x=a,y=t,j>=1e3)break}const w=j/1e3;n.scale(w,1);const k=Ln(ce,u),S=ai({ctx:n,tokenList:Xr(v),xRatio:w,yRatio:1,trueEdge:"left"===l?b:b-x*w,trueBaseline:p+(null!==(a=O.offsetY)&&void 0!==a?a:k.offsetY)+o*u,textData:y,format:i,globalScale:u,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:n,scaledBaseline:r}=e;t.fillText(a,n,r)}});return n.setTransform(1,0,0,1,0,0),m(),{leftEdge:"left"===l?b:b-x*w,...S}})({ctx:null===(e=u.current)||void 0===e?void 0:e.getContext("2d"),format:R,value:Ie,alignment:"right",baselineOffset:Ze?-2:0,hasShadow:at,lightFooter:it,textStyle:mt,globalScale:Lt}),l=("tcg"===R?390:350)*Lt,o=("tcg"===R?30:40)*Lt;var s;Ae&&u.current&&await(async e=>{let{canvas:t,type:a,globalScale:n,isPendulum:r,isLink:i,isLegacyCard:l,widthOffset:o,bordered:s,textStyle:c}=e;const d=!l||r?[145,1123,240-o/n,37]:i?[151,846,216,36]:[80,843,240,40];await Ur(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Cn(d,n),n,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:u.current,ctx:t,globalScale:Lt,type:nt&&!ee?"white":"black",bordered:(n<50||r)&&!ee,isLink:Je,isPendulum:ee,widthOffset:(null!==(s=null===i||void 0===i?void 0:i.leftEdge)&&void 0!==s?s:l)<l?o:0,isLegacyCard:ze,textStyle:mt})}}),[Tt,Lt,Ie,u,b,R,ze,Ae,Je,ee,Ze,nt,it,H,at,mt]),Object(n.useEffect)((()=>{Tt&&(Pe.current.sticker.rerun+=1,Pe.current.sticker.instructor=async()=>{var e;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");if(!Er(t))return;const{canvas:a,ctx:n}=Yt(Ai*Lt,Mi*Lt);await(async e=>{let{ctx:t,sticker:a,globalScale:n,x:r,y:i}=e;if(Er(t)){if(a===N)return Promise.resolve();t.scale(n,n),await Pr(t,`sticker/sticker-${a.toLowerCase()}.png`,r,i),t.resetTransform()}})({ctx:n,sticker:Be,globalScale:Lt,x:Pi,y:Ki});const r=null!==Bt&&void 0!==Bt?Bt:"normal";if("normal"!==r){const e=Dr([r],g),{canvas:i,ctx:l}=Yt(Ai*Lt,Mi*Lt);l.drawImage(a,0,0),l.scale(Lt,Lt),await e(l,"art",(async e=>await Pr(l,`finish/finish-typeart-${e}.png`,Pi-Hi+Ui,Ki-$i+Ui))),n.globalCompositeOperation="source-in",n.drawImage(i,0,0),t.drawImage(a,0,0)}else t.drawImage(a,0,0)})}),[Tt,Lt,Be,Bt,O,Rt]),Object(n.useEffect)((()=>{var e,t;if(!Tt)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),n=null===(t=S.current)||void 0===t?void 0:t.getContext("2d");Pe.current.typeAbility.rerun+=1,Pe.current.typeAbility.instructor=async()=>{if(!Er(a)||!Er(n))return;const{condenseTolerant:e,upSize:t,fontStyle:r}=null!==Q&&void 0!==Q?Q:{},i=Y[0],l=i?t:0,o=i?qe&&"auto"===r||"tcg"===R&&"italic"===r:qe,s=ii({ctx:a,content:J,isNormal:qe,useItalic:o,condenseTolerant:e,format:R,furiganaHelper:He,...ri({format:R,statInEffect:jt,typeInEffect:Ot,useItalic:o,frameType:ee&&"large"===me?"pendulumLarge":"normal"}),textStyle:st,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-l,globalScale:Lt,minLine:Ye}}),c=null!==It&&void 0!==It?It:"normal",d="normal"!==c?Dr([c],g):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:n,subFamily:r,format:i,frame:l,size:o,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!Er(t))return;const m=n.length>0,b=r!==L&&"large"===o,p=n+(b?"\u29be":""),h=m?"tcg"===i?"large"===o?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!m)return;const g={color:La(l)&&!wa({frame:l})&&"large"===o?"#ffffff":"#000000",...c},f=Hr({ctx:t,...g,globalScale:a}),{iconPositionList:v,xRatio:y}=Ni({ctx:t,format:i,size:o,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});f();let x="ocg"===i?-5:-1,j="ocg"===i?-3:0;if(b){const{edge:e,baseline:n}=v[0],{canvas:i,ctx:l}=Yt(Ii*a,(n+zi)*a);if(await Kr(l,`subfamily/subfamily-${r.toLowerCase()}.png`,(()=>e+(.175*zi*y+j)*a),(()=>n-.8*zi*a+x*a),(()=>zi*a),(()=>Bi*a)),u){const{canvas:e,ctx:r}=Yt(Ii*a,(n+zi)*a);r.drawImage(i,0,0),await u(r,"art",(async e=>await Pr(r,`finish/finish-typeart-${e}.png`,(Ii-Ri)/2,Bi))),l.globalCompositeOperation="source-in",l.drawImage(e,0,0),t.drawImage(i,0,0)}else t.drawImage(i,0,0)}})({ctx:n,globalScale:Lt,format:R,frame:E,furiganaHelper:He,isMonster:Qe,textStyle:ut,size:Ot?ee&&"large"===me?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:pt,typeAbility:ht,loopIconFinish:d})}}),[Tt,Lt,Ot,jt,Q,J,Y,b,Ye,R,E,ee,me,He,It,Qe,qe,ut,st,pt,ht,S]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=v.current)||void 0===e?void 0:e.getContext("2d");if(Er(t)&&ee){const{upSize:e,fontStyle:a}=null!==ue&&void 0!==ue?ue:{},n=X[0],r=n?e:0,i=!!n&&("tcg"===R&&"italic"===a),l=`${R}-${me}`,o=ne[wt&&kt?"normal":"scaleless"][me],s=wt&&kt?o:o.map((e=>{let{trueEdge:t,trueWidth:a,...n}=e;return{...n,trueEdge:t+(wt?ae:0),trueWidth:a-(wt?ae:0)-(kt?ae:0)}}));ii({ctx:t,content:oe,isNormal:!1,useItalic:i,fontData:(i?Oe:we)[l],fontDataKey:l,textStyle:ct,sizeList:s,condenseTolerant:Ve,format:R,furiganaHelper:He,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-r,globalScale:Lt,minLine:Ge}})}}),[Tt,Lt,Ve,R,ee,kt,wt,me,v,oe,ue,X,Ge,He,ct]),Object(n.useEffect)((()=>{var e;if(!Tt)return;const t=null===(e=F.current)||void 0===e?void 0:e.getContext("2d");Pe.current.overlay.rerun+=1,Pe.current.overlay.instructor=async()=>{if(Er(t)){if(Je){const e={...d(),...H},{artBorder:a,body:n,boundless:r}=e,i=n>0||a;await(async(e,t,a,n,r)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:i,top:l,height:o,width:s}=Ee[n][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[i,l,s,o];return await Kr(e,`${d}-base${r?"-full":""}.png`,...m),await Kr(e,`${d}-core.png`,...m),c?(await Kr(e,`${u}-base.png`,...m),Kr(e,`${u}-core.png`,...m)):void 0}))),e.resetTransform())})(t,Lt,xe,ee?"pendulum":"normal",r||!i),await(async(e,t,a,n,r,i)=>{if(!e)return;const l=mn.test(i);if("normal"===a&&!l)return;const o=l?"platinum":a,s=async e=>{n?await Pr(e,`link/link-overlay-arrow-${o}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:a,top:n,height:i,width:l}=Ee[r][t-1],s=[a,n,l,i];await Kr(e,`link/link-overlay-${t}-${o}.png`,...s)})))};if(e.scale(t,t),l){const{ctx:t,canvas:a}=Yt();await s(t);const{canvas:n}=ca(a,i);e.drawImage(n,0,0)}else await s(e);e.resetTransform()})(t,Lt,D,!1,ee?"pendulum":"normal",bt)}t.scale(Lt,Lt),await Nt(t,"total-overlay",(e=>Pr(t,`finish/finish-${e}-total-overlay.png`,0,0))),t.resetTransform()}}}),[Tt,Lt,F,Nt,bt,P,Je,ee,xe,H,tt,D,dt,jt,s]);const zt=Object(n.useRef)({}),Et=Object(n.useCallback)((async e=>{const t=i.current,a=null===t||void 0===t?void 0:t.getContext("2d");var n,r,l;t&&a&&(Er(a),await Promise.all(Object.values(Pe.current).sort(((e,t)=>e.order-t.order)).map((e=>{let{instructor:t,rerun:a,name:n}=e;return 0!==a&&zt.current[n]!==a||!zt.current[n]?(zt.current[n]=a,t()):Promise.resolve()}))).catch((e=>{console.error(e);const t="fail-to-draw-notification";zn.a.close(t),zn.a.error({key:t,message:Ct["error.draw.error.message"],description:Ct["error.draw.error.description"]})})),await Oa(s,a,0),await Oa(p,a,0),await Oa(k,a,0),await Oa(y,a,0),await Oa(v,a,0),await Oa(S,a,0),await Oa(b,a,0),await Oa(j,a,0),await Oa(x,a,0),await Oa(f,a,0),await Oa(u,a,0),await Oa(O,a,0),await Oa(F,a,0),null===(n=C.current)||void 0===n||n.draw(t),null===(r=T.current)||void 0===r||null===(l=r.getContext("2d"))||void 0===l||l.drawImage(t,0,0,t.width,t.height,0,0,Ai,Mi))}),[Ct,k,u,i,b,F,C,p,f,v,y,x,s,j,O,S,T]);return{drawingPipeline:Pe,onExport:Et}};var Gi=a(22);const Xi="ygocarder-notification",Vi=Object(Pn.create)((e=>{const{condenseReminder:t,versionReminder:a,faqReminder:n,feedbackReminder:r}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(Xi))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof r&&r,faqReminder:"string"!==typeof n?"":n,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e((e=>{const n={...e.memory,[t]:a};return localStorage.setItem(Xi,JSON.stringify(n)),{memory:n}}))},updateNotificationMemory:t=>{e((e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(Xi,JSON.stringify(a)),{memory:a}}))}}})),qi=e=>{const{targetMemory:t,updateNotification:a}=Vi(Object(Gi.useShallow)((t=>{let{memory:a,updateNotification:n}=t;return{targetMemory:a[e],updateNotification:n}})));return[t,Object(n.useCallback)((t=>a(e,t)),[e,a])]};var _i=a(190),Ji=a.n(_i);var Qi=a(191),Zi=a.n(Qi);const el=Object(Dn.b)(Bn.a)`
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
`,tl=e=>{let{language:t}=e;const[a,r]=Object(n.useState)(!1),[i,l]=Object(n.useState)(!1),[o,s]=Object(n.useState)(!1),[c,d]=Object(n.useState)([]),u=c.length>50;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(el,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||i},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>r(!1),onOk:async()=>{try{l(!0);const e=await Promise.all(c.map((e=>{let{file:t,name:a}=e;return new Promise(((e,n)=>{const r=new FileReader;r.onload=t=>{let{target:r}=t;if(!r)return void n("Not a valid target");const{result:i}=r;if("string"!==typeof i)return void n("Not a valid result");let l=JSON.parse(i);Ha(l)&&(l=Da(l));const s=$a(l);let c=null;if(c=o?s?rn(Or(l).card).result:l:s?l:Da(Or(l).card),!c)return void n("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},r.readAsText(t)}))}))),t=new Zi.a;e.forEach((e=>{let{blob:a,name:n}=e;t.file(n,a)}));const a=await t.generateAsync({type:"blob"});Xa("convert-result.zip",a,"application/zip"),l(!1),r(!1)}catch(e){console.error(e),zn.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),l(!1)}},children:[Object(O.jsxs)("div",{className:"controller",children:[Object(O.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:In("toggle-button",o?"reverse":""),onClick:()=>s((e=>!e)),children:Object(O.jsx)(Mn.a,{})})}),Object(O.jsx)("label",{children:"Yugioh Carder"})]}),Object(O.jsxs)("div",{className:"file-panel",children:[Object(O.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const n=t.item(a);n&&e.push({file:n,name:n.name})}d(e)}}}),Object(O.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],i&&Object(O.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(O.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(O.jsx)("div",{className:"file-list",children:c.map((e=>{let{name:t}=e;return Object(O.jsxs)("div",{className:"file-entry",children:[Object(O.jsx)("div",{children:t}),Object(O.jsx)("div",{className:"file-action",children:Object(O.jsx)(An.a,{disabled:i,onClick:()=>d((e=>e.filter((e=>e.name!==t))))})})]},t)}))})]})]}),Object(O.jsx)(En.a,{overlay:t["converter.header.label"],children:Object(O.jsx)(Wn,{className:"batch-converter",onClick:()=>r(!0),children:Object(O.jsx)(Hn.a,{})})})]})};var al=a(75),nl=a(596),rl=a(621),il=a(589),ll=a(231);class ol extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){ll.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var sl=a(196);const cl="controls-wrapper",dl=Dn.b.div`
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
`,ul=e=>{let{children:t,...a}=e;return Object(O.jsxs)(dl,{className:"angle-picker-container",children:[t,Object(O.jsx)(sl.AnglePicker,{...a})]})};var ml=a(612),bl=a(613),pl=a(577),hl=a(609);const gl=Object(Dn.b)(hl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,fl=e=>{let{overlayClassName:t,iconProps:a,...n}=e;const{className:r,...i}=null!==a&&void 0!==a?a:{};return Object(O.jsx)(pl.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...n,children:Object(O.jsx)(gl,{className:["explanation-icon",null!==r&&void 0!==r?r:""].join(" "),...i})})};var vl=a(611),yl=a(601);const xl=Dn.b.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    ${e=>{let{$freeSize:t,$size:a}=e;return t?"padding: 0 var(--spacing-xxs);":"sm"===a?"width: 18px;":"width: 24px;"}};
    ${e=>{let{$size:t}=e;return"sm"===t?"\n            height: 18px;\n            font-size: var(--fs-sm);\n        ":"\n            height: 24px;\n            font-size: var(--fs);\n        "}}
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
	cursor: pointer;
	&:hover {
		background-color: var(--sub-level-4);
	}
`,jl=e=>{let{size:t="md",Icon:a,children:n,onClick:r,iconProps:i,tooltipProps:l,containerProps:o}=e;const{className:s,onClick:c,onKeyDown:d,...u}=null!==o&&void 0!==o?o:{};return Object(O.jsx)(En.a,{title:null,...l,children:Object(O.jsx)(xl,{$size:t,tabIndex:0,...u,onClick:e=>{null===r||void 0===r||r(),null===c||void 0===c||c(e)},onKeyDown:e=>{null===d||void 0===d||d(e),"Enter"===e.key&&(null===r||void 0===r||r())},className:["icon-button",null!==s&&void 0!==s?s:""].join(" "),$freeSize:!a,children:Object(O.jsxs)(O.Fragment,{children:[a&&Object(O.jsx)(a,{...i}),n]})})})},Ol=Dn.b.div`
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
`,wl=Dn.a`
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
`,kl=Dn.b.div`
    ${wl}
`,Sl=(e,t)=>{let{onChange:a,value:r,optionList:i,children:l,suffix:o,className:s,strict:c=!1}=e;const[d,u]=Object(n.useState)(-1),m=Object(n.useRef)(null),b=i.length;return Object(n.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}}))),Object(O.jsxs)(kl,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[l&&Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:l}),Object(O.jsx)("div",{ref:m,className:"radio-train-input-group",...kn({setFocus:u,optionLength:b,onTrigger:()=>{const e=i[d];e&&a(e.value)}}),children:i.map(((e,t)=>{let{value:n,props:i,label:l,tooltipProps:o}=e;const{className:s}=null!==i&&void 0!==i?i:{},u=c?n===r:`${n}`===`${r}`;return Object(O.jsx)(En.a,{overlay:null,...o,children:Object(O.jsxs)("label",{...i,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(n),children:[Object(O.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(O.jsx)("span",{className:"ant-radio-button-inner"})}),Object(O.jsx)("span",{className:"label",children:l})]})},n)}))}),o]})},Fl=Object(n.forwardRef)(Sl),Cl=Dn.b.div`
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
`;var Ll=a(137),Tl=a.n(Ll),Nl=a(610);const Rl=Dn.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,Il=Object(Dn.b)(Rl)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
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
`,Bl=e=>{let{data:t,children:a}=e;const[r,i]=Object(n.useState)(!1);return Object(O.jsxs)(Il,{onClick:e=>{var a;e.stopPropagation(),a=t,Tl()("number"===typeof a?`${a}`:a),i(!0),setTimeout((()=>{i(!1)}),1e3)},children:[r?Object(O.jsx)("div",{className:"copiable-overlay",children:Object(O.jsx)(Nl.a,{})}):null,a]})},zl=Dn.b.div`
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
`,El=Object(Dn.b)(zl)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Dl=e=>{let{content:t,children:a,...n}=e;return t?Object(O.jsx)(pl.a,{content:t,...n,children:a}):Object(O.jsx)(O.Fragment,{children:a})},Wl=Dn.b.button`
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
`,Ml=Dn.b.div`
    display: inline-flex;
    column-gap: var(--spacing-xs);
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--br);
    box-shadow: var(--bs-input);
    .ant-checkbox-wrapper {
        transform: translateY(-1px); // Alignment
    }
`,Al=Dn.b.div`
    display: grid;
    grid-template-columns: max-content 57px 39px 6px;
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
`,Hl=Dn.b.div`
    display: inline-block;
    background-color: var(--main-level-4);
    ${e=>{let{$active:t}=e;return t?"border: var(--bw) solid var(--main-active);":"border: var(--bw) solid var(--sub-level-1);"}}
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin: calc(-1 * var(--spacing-xxs)) 0;
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
    color: var(--color-heavy);
    cursor: pointer;
    ${e=>{let{$softMode:t,$active:a}=e;return t?`\n                border: var(--bw) solid var(--main-level-4);\n                ${a?"outline: var(--bw) solid var(--main-active);":""}\n            `:""}}
    &:hover {
        background-color: var(--sub-level-4);
    }
`,$l=Dn.b.div`
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
`,Pl=e=>{let{width:t,height:a,warning:n}=e;return Object(O.jsxs)($l,{$warning:n,children:[Object(O.jsx)("span",{className:"left-part",children:t}),Object(O.jsx)("span",{children:"\xd7"}),Object(O.jsx)("span",{className:"right-part",children:a})]})},Kl=Dn.c`
    to {
        transform: rotate(360deg);
    }
`,Ul=Dn.b.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    color: var(--color);
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
`,Yl=Object(Dn.b)(Ol)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":Dn.a`animation: ${Kl} 12s linear infinite;`}}
        }
    }
`,Gl=()=>{const e=_n(),{setting:t,updateSetting:a}=Sr((e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}})),{exportFormat:n,resolution:r,allowHotkey:i,reduceMotionColor:l,showCreativeOption:o,showExtraDecorativeOption:s}=t;return Object(O.jsx)(Yl,{className:"setting-button",$softMode:l,children:Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(O.jsxs)(Ul,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(yl.a,{checked:l,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(yl.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(yl.a,{checked:o,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(En.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(O.jsx)(yl.a,{checked:i,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(O.jsx)(Fl,{className:"resolution-list",value:`${r[0]}x${r[1]}`,optionList:$t.map((t=>{let{height:a,width:n,label:r,scale:i}=t;return{value:`${n}x${a}`,label:i>1?Object(O.jsx)(pl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(O.jsx)(El,{children:e["setting.option.resolution.warning"]}),children:Object(O.jsx)(Pl,{width:n,height:a,warning:!0})}):Object(O.jsx)(Pl,{width:n,height:a})}})),onChange:e=>{const t=Ht[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(O.jsx)(Fl,{value:n,optionList:Pt,onChange:e=>{a({exportFormat:e})}})]}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(O.jsxs)("div",{className:"button-label",children:[Object(O.jsx)(vl.a,{}),Object(O.jsx)("label",{children:e["setting.button.label"]})]})})})};var Xl=a(598);const Vl=Dn.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,ql=Dn.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #2a2a2a inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?Dn.a`animation: 2s linear 350ms 4 ${Vl};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,_l=Object(Dn.b)(ql)`
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
`,Jl=Dn.b.div`
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
    &:last-child {
        .answer {
            margin-bottom: 0;
        }
    }
`,Ql=Dn.b.li`
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
`,Zl=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const n=await a.json();return t=n,e=!0,t}catch(n){console.error(n)}return[]}}})(),eo=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{(async()=>{r(!0);const e=await Zl.getLog();r(!1),t(e)})()}),[]),0!==e.length||a?a?Object(O.jsx)("div",{children:"Loading changelog..."}):Object(O.jsx)("div",{children:e.map(((e,t)=>{let{logList:a,version:n}=e;return Object(O.jsxs)("div",{className:"log-section",children:[Object(O.jsx)("b",{children:n}),Object(O.jsx)("br",{}),Object(O.jsx)("ul",{children:a.map(((e,t)=>{let{content:a,image:r}=e;return Object(O.jsxs)(Ql,{children:[Object(O.jsx)("div",{className:"content",children:a}),r&&Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:r,title:"Click to open in new tab",children:Object(O.jsx)("img",{src:r,alt:`version-${n}-illust`})})]},t)}))})]},`${n}-${t}`)}))}):Object(O.jsx)("div",{children:"No changelogs"})},to=Object(Dn.b)(El)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,ao=Object(n.memo)((()=>{var e;const[t,a]=Object(n.useState)(!1),[r,i]=qi("versionReminder");return Object(n.useEffect)((()=>{if(r){var e;const t=null!==(e="2.3.13")?e:"0.0.0",n=r;i("2.3.13"),((e,t)=>{const[a,n,r]=String(e).split(".").map(Number),[i,l,o]=String(t).split(".").map(Number);return a!==i?a>i:n!==l?n>l:r>o})(t,n)&&(a(!0),setTimeout((()=>{a(!1)}),8e3))}}),[i,r]),Object(O.jsx)(pl.a,{placement:"bottom",content:Object(O.jsx)(to,{children:Object(O.jsx)(eo,{})}),children:Object(O.jsxs)(ql,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.3.13")?e:"unknown"]})})}));var no=a(588);const ro="faq-button",io=e=>{let{author:t,question:a,children:n}=e;return Object(O.jsxs)(Jl,{children:[Object(O.jsxs)("blockquote",{children:[t&&Object(O.jsx)("label",{children:t}),Object(O.jsx)("div",{className:"question",children:a})]}),Object(O.jsx)("div",{className:"answer",children:n})]})},lo=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!1),[i,l]=qi("faqReminder"),[o,s]=qi("feedbackReminder");return Object(n.useEffect)((()=>{const e="28/06/2025";i!==e&&(l(e),r(!0),setTimeout((()=>{r(!1)}),8e3))}),[l,i]),Object(n.useEffect)((()=>{!0!==o&&(s(!0),r(!0),zn.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{r(!1)}}))}),[o,s]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(_l,{id:ro,$animating:a,onClick:()=>t((e=>!e)),children:"FAQ"}),Object(O.jsx)(Bn.a,{visible:e,onCancel:()=>t(!1),footer:null,children:Object(O.jsxs)(no.a,{children:[Object(O.jsxs)(no.a.TabPane,{tab:"Feedbacks",children:[Object(O.jsx)("div",{children:Object(O.jsx)("i",{children:"Solved feedbacks are removed."})}),Object(O.jsx)("br",{}),[{author:'Error "\xe9" at Jun 30, 2025',question:'There is a problem with the writing. The line wrap is sometimes incorrect when using this "\xe9" character.\nThe last word is "Mat\xe9riel". The last word should not be cut.',answer:"I have updated the algorithm to have a better behavior for non-alphabet letters. But in case it goes wrong, you can always use non-breakable text syntax to keep the word in line."},{author:"Anonymous User at Jun 30, 2025",question:"Having a format similar for cards similar to Master Duel cards.",answer:"I have no plan to support format like Master Duel right now."},{author:"Anonymous User at Jun 29, 2025",question:"Add a predefined rainbow gradient for Name Styles similar to the one for Secret Rares in Simplified Chinese's proxies",answer:"I don't think I can do it. I don't even know what those proxies look like."},{author:"Anonymous User at Jun 28, 2025",question:'It seems to me that the attribute "darkness" in French is not the correct image. The name "T\xe9n\xe8bres" is written in larger letters (less constricted) and extends beyond the circle because it is a long word.\nMaybe the same problem for light too "LUMIERE".\nSee this link:\nhttps://yugioh.fandom.com/fr/wiki/T%C3%89N%C3%88BRES',answer:"I have updated the icon, hopefully it looks better now."},{author:"Blake Jun at 27, 2025",question:"Can you make a website with rush duel. card templates just like this one? Not only effect and fusion, but all card types."},{author:"Blake Jun at 27, 2025",question:"Can you also put in the link in the description?",answer:"At the moment, no. You may check the FAQ for more detail."},{author:"Skip at Jun 27, 2025",question:'Good job! I notice a mistake with the attribute spell card in french. It is not "SPELL" but "MAGIE" we should use.',answer:"Indeed, I have messed up the Spell attribute between French and German cards. It should be fixed by now."},{author:"Anonymous User at Jun 24, 2025",question:"In a line with brackets (), with no justifing syntax, the line with brackets will appear more compressed compared to a line with no brackets",answer:'The first line ("3 Xyz...") is using the non-breakable line syntax, which does not obey the overall compressing ratio. I will update the description to make it more clear.'},{author:"Blake at Jun 23, 2025",question:"When choose an image for the background of the card, not only it covers the card but also the main image of the card. Can you do something to fix it please?",answer:'Hi there, the background system is indeed has a bug, but in your case, it seems that you are using the "Replace Frame" option, which will replace the usual card frame (Normal, Effect, etc...) with your background. You may want to switch cover type into "Fit to art border" instead.'},{author:"Die Frauen at Jun 22, 2025",question:"Looking good. One last change for now I'd like to see is, if you could implement that dye feature on the card layout for the card frames as well. That way you could get different variations from just Gold and Platinum",answer:"Update: I already implement the feature.\nFoil system contains more parts, but I think it should be doable. I will look into it later."},{author:"Rush Duel at Jun 22, 2025",question:"This card maker is amazing! Have you ever consider doing a rush duel section as well?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."},{author:"Die Frauen at Jun 22, 2025",question:'Fantastic job, you understood the assignment. It sappears it still needs to be better centered out , the custom array is a bit skewed to the right, and it appears the toggle to move them to the left/center aren\'t quite there yet.\n\nA minor update I would like is, to add a "normal spell/trap" icon, I think you can find it on the wiki if you look it up, as a blank template.'},{author:"Die Frauen at Jun 22, 2025",question:"Addendum (Disregard the alignment comment, or to rephrase, it works fine. I was under the impression it would align on its own, and put the level at the edges and it projected as though it were the 13th icon).\n\nI assume you can organize those manually, but for all intents and purposes it is perfectly functional!",answer:"Come to think of it, maybe the star editor is not intuitive enough to use, so I have updated it a bit more. Also the normal icon for Spell/Trap is now available."},{author:"Die Frauen at Jun 19, 2025",question:"This may be a bit crazy, but since you've already come a long way with customization, do you think it'd be possible to toggle Star Types to be sorted manually in any combinations of the ones currently available?\n\nAnd on that note, and this here may be a bit too out there, but do you think you could use the Spell/Trap iconography as you would any of those? And if it's not too much of a bother, maybe the monster Attributes downsized on that row as well?",answer:"Putting Spell/Trap/Monster Attribute icon in star slots is possible. As for manual icon of each star slot, I think *technically* it should be doable, but I need to do a bit more test, probably will look into it this weekend.\nUpdate: I have added those options, you may try it out now."},{author:"Die Frauen at Jun 19, 2025",question:"Hello, first of all I would like to congratulate you on creating what's probably the best card editor there is, and thank you for making things convenient for everyone using it. I shall formally make a request of sorts in a different report, but I couldn't just not commend the efforts you and all others involved have done. Even managed to  mesh together the Link Arrows for a Pendulum frame in a not entirely unsightly way, and the new hue feature for advanced layouts is also superb for custom card frame efforts.\n\nSuperb work, keep it up",answer:"Thanks for your kind words, appreciate your support."},{author:"Not really a feedback but... at Jun 19, 2025",question:"It would be cool to see the Attributes in other languages available in TCG",answer:"I have added many more Attributes that I could find on Yugipedia."},{author:"KaibaSetoo at Jun 15, 2025",question:"Hello, can you fix the scale number 10, 11 and 12. They are not in the center of the scale value border. Thank you.",answer:'I have updated some cases, but please note that some scale numbers does not place at the center of the box at all, but deviated a bit to the right side (very clear in cards like "D/D Savant Kepler").'},{author:"Anonymous User at Jun 16, 2025",question:"Can you change back the *LINK-* text as before, like before the increase card larger update, the letter *L* is now higher."},{author:"Anonymous User at Jun 16, 2025",question:"And the LINK number are now higher then the text too."},{author:"TheDuelistt at Jun 15, 2025",question:'Can you make this L letter to be consistent with the rest of the INK, also, can you make the Link Rating value (number) lower and consistent with the INK, and the dash "-" a little bolder, so that the overall look is similar to the official Konami Yugioh Card template. Thank you.',answer:"I have updated the layer, hopefully it look better now."},{author:"text format at Jun 14, 2025",question:"The text format looks completely different with the pendulum effect than with the monster effect",answer:"Text effect is automatically calculated to best fit in the card, I always recommended to let it flow naturally, but regardless, I have added input to define the minimum lines of effect you would want in your cards."},{author:"Anonymous User at Jun 14, 2025",question:"The outline is a bit uneven depending on the letter.",answer:"This is a known issue, unfortunately this is the best I can offer right now."},{author:"Anonymous User at Jun 14, 2025",question:"Justify doesn't seem to work",answer:"It should work normally by now."},{author:"Phan Tr\xed D\u0129 at Jun 11, 2025",question:"Hi, firstly, I want to thanks to your hardwork for making a wonderful website, very appreciate your work. There's some K9 card with a special hash sign. It get a bit smaller when I use it. I wondering if you can fix it. Thank you very much.",answer:'Hi there. There are two parts of the problem here:\nThe first thing is the hash sign, which is not a bug. This design has been used on many cards in the past, for example "Hi-Speedroid Glider #2", and there is no sign that it would be different this time.\nThe second thing is the letter "\xd8", which currently only appear on the OCG card, as Lupus itself is not yet revealed for TCG, we doesn\'t know if the TCG would keep this letter or not.'},{author:"Anonymous User at Jun 06, 2025",question:"When using the Link Arrows on a Pendulum card, the Link Rating disappears",answer:"It should be fixed by now"},{author:"Shanaya User at Jun 04, 2025",question:"I would like to request another artwork effect like this, like the effect of the attached picture its a secret rare effect",answer:"I have added finish type 9, this is my best and final attempt, sorry if it does not match your need."},{author:"Yugiohfann at Jun 03, 2025",question:"Please fix the ATK/DEF font text, the numbers are higher than the ATK/DEF text."},{author:"Anonymous User at Jun 03, 2025",question:"Small adjustment for size and style of card stats (ATK, DEF). Can you bring back the old size and style of card stats. Now the stats are higher than the ATK and DEF text.",answer:"Can you provide a sample image so I can see the difference? I cannot take action blindly wihout any reference."},{author:"Anonymous User at Jun 02, 2025",question:"please can you add sizing selection in card name? please? thank you!",answer:"Can you provide a sample image of the old card? I would like to take a look to see if it is possible to implement it or not."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."}].map(((e,t)=>{let{author:a,question:n,answer:r}=e;return Object(O.jsx)(io,{author:a,question:n,children:r},t)}))]},"feedback"),Object(O.jsx)(no.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'},{question:"Will you make another version for Rush Duel cards?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."}].map(((e,t)=>{let{question:a,answer:n}=e;return Object(O.jsx)(io,{question:a,children:n},t)}))},"faq")]})})]})};a(418);const oo=()=>Object(O.jsx)("div",{className:"affiliation",children:Object(O.jsx)("div",{className:"affiliation-link",children:Object(O.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(O.jsx)(ml.a,{})})})}),so=Dn.b.div`
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
`,co=()=>{const{language:e,languageInfo:t,languageMetadataMap:a,changeLanguage:n}=qn((e=>{let{languageInfo:t,language:a,languageMetadataMap:n,changeLanguage:r}=e;return{languageInfo:t,language:a,languageMetadataMap:n,changeLanguage:r}})),{cardList:r,isListDirty:i,toggleVisible:l,visible:o}=jr(Object(Gi.useShallow)((e=>{let{cardList:t,isListDirty:a,toggleVisible:n,visible:r}=e;return{cardList:t,isListDirty:a,toggleVisible:n,visible:r}})));return Object(O.jsxs)("div",{className:"app-header",children:[Object(O.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(O.jsxs)("div",{className:"app-description",children:[Object(O.jsxs)("div",{className:"header-language",children:[Object(O.jsx)("h1",{children:"Yugioh Carder"}),Object(O.jsx)(Xl.a.Group,{value:t.codeName,size:"small",className:"language-option",children:Object.values(a).filter((e=>{let{active:t}=e;return t})).map((e=>{let{codeName:t,name:a}=e;return Object(O.jsx)(Xl.a.Button,{value:t,onChange:e=>n(e.target.value),children:a},t)}))}),Object(O.jsx)(En.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(O.jsx)("span",{className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(ro))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(ro))||void 0===e||e.classList.remove("js-highlight")},children:Object(O.jsx)("div",{id:"sentry-bug-report",children:e["contributor.bug-report.tooltip"]})})}),Object(O.jsx)(lo,{}),Object(O.jsx)(ao,{})]}),Object(O.jsxs)("div",{className:"app-contribution",children:[Object(O.jsxs)("span",{className:"app-creator",children:[e["contributor.gui.label"],": ",Object(O.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(O.jsx)(fl,{content:Object(O.jsxs)(El,{className:"disclaimer",children:[Object(O.jsx)("h2",{children:e["contributor.disclaimer.label"]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:e["contributor.disclaimer.line-1"](Object(O.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-2"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-3"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-4"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-5"](Object(O.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(O.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-6"]})]})]})})]}),Object(O.jsx)("span",{className:"template-creator",children:e["contributor.template-maker"](Object(O.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"Grezar"})},"artist-1"),Object(O.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"9558able"})},"artist-2"),Object(O.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(O.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(O.jsx)(so,{className:"app-setting",children:Object(O.jsx)(Gl,{})}),Object(O.jsx)(so,{className:"card-manager",children:Object(O.jsx)(Ol,{className:In("manager-button-label",o?"manager-active":""),onClick:()=>l(),children:Object(O.jsxs)("div",{className:"button-label",children:[Object(O.jsx)(bl.a,{}),Object(O.jsx)("label",{children:e["manager.icon.title"]}),i&&r.length>1&&Object(O.jsx)("div",{className:"manager-notice",children:"*"})]})})})]})},uo=()=>{const e=_n();return Object(O.jsxs)(El,{className:"disclaimer",children:[Object(O.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(O.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(O.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},mo=()=>Object(O.jsx)(fl,{overlayClassName:"disclaimer-overlay",content:Object(O.jsx)(uo,{})});var bo=a(599),po=a(614);a(419);const ho=Dn.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,go=Dn.b.div`
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
`,fo=Dn.b.div`
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
`,vo=e=>{let{caption:t,containerProps:a,alt:n,...r}=e;const{className:i}=null!==a&&void 0!==a?a:{};return Object(O.jsxs)(fo,{className:`image-with-caption ${i}`,children:[Object(O.jsx)("img",{alt:n,...r}),Object(O.jsx)("div",{className:"caption",children:t})]})},yo=()=>{const[e,t]=Object(n.useState)(!1),a=_n();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(bo.a,{footer:null,visible:e,width:"60%",title:Object(O.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"]," ",Object(O.jsx)(al.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["guide.format.close"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(O.jsxs)(ho,{children:[Object(O.jsxs)("p",{children:[a["guide.format.introduction"](Object(O.jsx)(vl.a,{},"icon")),"."]}),Object(O.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(O.jsx)(Rl,{children:"["},"open-tag"),Object(O.jsx)(Rl,{children:"]"},"close-tag"),Object(O.jsx)(Rl,{children:"Ctrl-1"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-1"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(O.jsx)(Rl,{children:"[["},"open-tag"),Object(O.jsx)(Rl,{children:"]]"},"close-tag"),Object(O.jsx)(Rl,{children:"Ctrl-Shift-1"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-Shift-1"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(O.jsx)(Rl,{children:"{"},"open-tag"),Object(O.jsx)(Rl,{children:"}"},"close-tag"),Object(O.jsx)(Rl,{children:"Ctrl-2"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-2"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(O.jsx)(Rl,{children:"|"},"separator"),Object(O.jsx)(Rl,{children:"Ctrl-3"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-3"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(O.jsx)(Rl,{children:"||"},"separator"),Object(O.jsx)(Rl,{children:"Ctrl-4"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-4"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(O.jsx)(Rl,{children:"{{"},"open-tag"),Object(O.jsx)(Rl,{children:"}}"},"close-tag"),Object(O.jsx)(Rl,{children:"Ctrl-5"},"hotkey"),Object(O.jsx)(Rl,{children:"\u2318-5"},"hokey-alternative")),Object(O.jsxs)(go,{className:"panel-figure",children:[Object(O.jsx)(vo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(vo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(O.jsxs)(al.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(O.jsx)(po.a,{})]})]})},xo=Dn.b.div`
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
`,jo=Dn.b.div`
    display: inline-block;
    width: 10px;
`,Oo=e=>{let{id:t,tabIndex:a,nameKey:n,labelBackgroundColor:r,labelBackgroundColorList:i,className:l,onClick:o}=e;const s=_n();return Object(O.jsxs)(xo,{id:t,tabIndex:a,className:`frame-info-block ${null!==l&&void 0!==l?l:""}`,$withPillar:!(!r&&!i),onClick:o,children:[i?Object(O.jsx)(jo,{children:i.map((e=>Object(O.jsx)("div",{style:{backgroundColor:e,height:100/i.length+"%"}},e)))}):r?Object(O.jsx)(jo,{style:{backgroundColor:r}}):null,Object(O.jsx)("label",{className:"frame-info-block-label",children:s[n]})]})};var wo=a(593);const ko=Dn.b.div`
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
`,So=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Fo=e=>{let{value:t="",onChange:a}=e;const{color:n,inputText:r,setColor:i}=Cr({value:t,onChange:a});return Object(O.jsxs)(ko,{children:[Object(O.jsx)("div",{className:"color-list",children:So.map((e=>{let{hex:t,rgb:r}=e;const i=pn(r);return Object(O.jsx)(Cl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:n.hex.toUpperCase()===t&&Object(O.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)}))}),Object(O.jsxs)("div",{className:"color-input",children:[Object(O.jsx)(Cl,{$static:!0,style:{backgroundColor:n.hex}}),Object(O.jsx)(wo.a,{size:"small",value:r,onChange:e=>{i(e.target.value)}})]})]})};var Co=a(66),Lo=a(304);const To=Dn.b.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`,No=Object(Co.c)((e=>{let{onChange:t,...a}=e;return Object(O.jsx)(To,{children:Object(O.jsx)(Lo.Saturation,{...a,onChange:e=>{null===t||void 0===t||t(e)}})})})),Ro=[{hex:"#B80000",rgb:[184,0,0]},{hex:"#EB9694",rgb:[235,150,148]},{hex:"#DB3E00",rgb:[219,62,0]},{hex:"#FAD0C3",rgb:[250,208,195]},{hex:"#FCCB00",rgb:[252,203,0]},{hex:"#FEF3BD",rgb:[254,243,189]},{hex:"#008B02",rgb:[0,139,2]},{hex:"#C1E1C5",rgb:[193,225,197]},{hex:"#006B76",rgb:[0,107,118]},{hex:"#BEDADC",rgb:[190,218,220]},{hex:"#1273DE",rgb:[18,115,222]},{hex:"#C4DEF6",rgb:[196,222,246]},{hex:"#004DCF",rgb:[0,77,207]},{hex:"#BED3F3",rgb:[190,211,243]},{hex:"#5300EB",rgb:[83,0,235]},{hex:"#D4C4FB",rgb:[212,196,251]}],Io=Dn.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${Cl} {
            display: inline-block;
            flex: 1;
            border: var(--bw) solid var(--sub-level-2);
            height: 18px;
        }
    }
    .color-list {
        display: grid;
        grid-template-columns: repeat(${Ro.length/4}, max-content);
        border-radius: var(--br);
        overflow: hidden;
        ${Cl} {
            height: 15px;
            width: 15px;
            box-shadow: none;
            border-radius: 0;
        }
    }
`,Bo=e=>{let{children:t,onChange:a,value:n}=e;const{color:r,inputText:i,setColor:l}=Cr({value:n,onChange:a}),o=""===i;return Object(O.jsxs)(Io,{className:"horizontal-sketch-picker",children:[Object(O.jsx)("div",{className:"input-label",children:t}),Object(O.jsxs)("div",{className:"color-input",children:[Object(O.jsxs)("div",{className:"color-state",children:[Object(O.jsx)(Cl,{$empty:o,style:o?{}:{backgroundColor:r.hex}}),Object(O.jsx)(jl,{size:"sm",Icon:An.a,onClick:()=>{a("")}})]}),Object(O.jsx)(wo.a,{size:"small",value:i,onChange:e=>{l(e.target.value)}})]}),Object(O.jsx)("div",{className:"color-list",children:Ro.map((e=>{let{hex:t,rgb:n}=e;const i=pn(n);return Object(O.jsx)(Cl,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:r.hex.toUpperCase()===t&&Object(O.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)}))}),Object(O.jsx)(No,{color:r.hex,onChange:e=>{let{hex:t}=e;return l(t)}})]})};var zo=a(234),Eo=a(615),Do=a(616),Wo=a(617),Mo=a(618);const{height:Ao,width:Ho}=s,$o=Dn.b.div`
    width: ${Ho}px;
    height: ${Ao}px;
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
`,Po=e=>{let{zoomIn:t,zoomOut:a,resetTransform:n,setTransform:r,scale:i,globalScale:l,width:o,height:s}=e;return Object(O.jsxs)("div",{className:"control-container",children:[Object(O.jsxs)("div",{className:"action-list",children:[Object(O.jsx)(Wl,{disabled:i>=4,onClick:()=>{t()},children:Object(O.jsx)(Eo.a,{})}),Object(O.jsx)(Wl,{disabled:i<=1/l,onClick:()=>{a()},children:Object(O.jsx)(Do.a,{})}),Object(O.jsx)(Wl,{onClick:()=>{n()},children:Object(O.jsx)(Wo.a,{})}),Object(O.jsx)(Wl,{onClick:()=>{r(-Math.max(0,o-Ho)/2,-Math.max(0,s-Ao)/2,1)},children:Object(O.jsx)(Mo.a,{})})]}),Object(O.jsxs)("div",{className:"control-info",children:[i&&Object(O.jsxs)(O.Fragment,{children:["\xd7",i<1?"1/"+Math.round(1/i*10)/10:Math.round(10*i)/10]}),"\xa0(",o," \xd7 ",s,")"]})]})},Ko=Object(n.forwardRef)(((e,t)=>{let{globalScale:a}=e;const[r,i]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),s=Object(n.useRef)(null),c=Object(n.useRef)(null),[d,u]=Object(n.useState)((()=>1/a));return Object(n.useImperativeHandle)(t,(()=>({setVisible:i,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>o((e=>e+1)),getCanvasKey:()=>l}))),Object(n.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()}),[a]),Object(O.jsx)(Bn.a,{width:`${Ho+30}px`,wrapClassName:"card-lightbox-overlay",visible:r,forceRender:!0,onCancel:()=>i(!1),footer:null,children:Object(O.jsx)($o,{className:"card-lightbox-container",children:Object(O.jsx)(zo.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"card-lightbox-control",children:Object(O.jsx)(Po,{...t,scale:d,globalScale:a,width:Ho*a,height:Ao*a})}),Object(O.jsx)(zo.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:Ho,maxHeight:Ao,lineHeight:0},children:Object(O.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:Ho*a,height:Ao*a},l+.1)})]})}})})})})),Uo=Dn.b.div`
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
`,Yo=e=>{let{active:t,defaultValue:a=[],onChange:r=()=>{},onStatusChange:i}=e;const[l,o]=Object(n.useState)(a),s=_n(),c=JSON.stringify(l);return Object(n.useEffect)((()=>{r(l)}),[c]),Object(O.jsxs)(Uo,{className:In("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)(yl.a,{checked:t,onChange:e=>i(e.target.checked),children:s["link-picker.label"]})}),Object(O.jsx)("div",{className:"container",children:[...Array(9)].map(((e,a)=>{const n=`${a+1}`;return"5"===n?Object(O.jsx)(En.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(O.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&o([])},children:Object(O.jsx)(j.a,{})})},"5"):Object(O.jsx)("div",{className:`link-marker-button marker-${a+1} ${l.includes(n)?"marker-checked":""}`,onClick:()=>{t&&o((e=>{let t=[...e];return t.includes(n)?t=t.filter((e=>e!==n)):t.push(n),t}))},children:Object(O.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${De[a]}deg) translateY(-1px)`}})},n)}))})]})};var Go=a(594);const Xo=Object(Dn.b)(Go.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Vo=Object(Dn.b)(Go.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,qo=e=>{let{onChange:t,...a}=e;const n=_n(),{resolution:r,updateSetting:i}=Sr(Object(Gi.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:n}=e;return{allowHotkey:t,resolution:a,updateSetting:n}})));return Object(O.jsxs)(Go.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(O.jsx)(Xo,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:n["setting.option.resolution.label"]}),$t.map((e=>{let{width:a,height:l,label:o,scale:s}=e;return Object(O.jsx)(Vo,{className:r[0]===a&&r[1]===l?"active-setting":"",onClick:()=>{i({resolution:[a,l],globalScale:s}),null===t||void 0===t||t([a,l],s)},children:s>1?Object(O.jsx)(pl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(O.jsx)(El,{children:n["setting.option.resolution.warning"]}),children:Object(O.jsx)(Pl,{width:a,height:l,warning:!0})}):Object(O.jsx)(Pl,{width:a,height:l})},`${a}-${l}`)}))]})};var _o=a(143),Jo=a(306),Qo=a.n(Jo),Zo=a(619),es=a(620),ts=a(578);const as=Dn.b.div`
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
`,ns=()=>Object(O.jsx)(ts.a,{});ns.FullView=()=>Object(O.jsx)(as,{className:"loading-fullview",children:Object(O.jsx)(ts.a,{size:"large"})});a(560),a(561);const rs=(e,t,a)=>{if(!t)return e;const{width:n,height:r,x:i=0,y:l=0,unit:o}=e;if("px"===o){const e=.8,r=400/300,{width:o,height:s}=t,c=s/o>=e?r:1,d=Math.min((null!==i&&void 0!==i?i:0)*c,o),u=Math.min((null!==l&&void 0!==l?l:0)*c,s),m=Math.min((null!==n&&void 0!==n?n:0)*c,o);return{unit:"%",x:d/o*100,y:u/s*100,width:m/o*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(i<0)return{...e,x:0};if(l<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==n&&void 0!==n?n:0,u=null!==r&&void 0!==r?r:0,m=.05*(s>c?s:c),b=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,p=b/100,h=p>1?100:b,g=p>1?d/p:d,f=p>1?(100-g)/2:i<0?0:i,v=p>1||l<0?0:l;return{...e,x:f,y:v,height:h,width:g,aspect:a}},is=Object(n.forwardRef)(((e,t)=>{let{title:a,backgroundColor:r,className:i,forceFit:l,defaultSourceType:o,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:b,ratio:p,onSourceLoaded:h=()=>{},onSourceChange:g=()=>{},onCropChange:f=()=>{},onTainted:v=()=>{},onMaxSizeExceeded:y=()=>{},onForceFitChange:x=()=>{}}=e;const j="offline"===o?"offline":"online",w=_n(),k=Object(n.useRef)(null),[S,F]=Object(n.useState)("anonymous"),[C,L]=Object(n.useState)(0),[T,N]=Object(n.useState)(j),[R,I]=Object(n.useState)(j),[B,z]=Object(n.useState)(s),[E,D]=Object(n.useState)(!1),[W,M]=Object(n.useState)(null),[A,H]=Object(n.useState)(!1),[$,P]=Object(n.useState)(c),K=Object(n.useRef)(null),[U,Y]=Object(n.useState)({current:b,completed:null}),[G,X]=Object(n.useState)("%"===b.unit),{current:V,completed:q}=U,_=Object(n.useRef)({source:"",crop:null}),J=Object(n.useCallback)((e=>{if(D(!1),M(null),h(S),K.current=e,e.src===_.current.source&&_.current.crop){const t=Q.current;setTimeout((()=>{if(t!==Q.current||!_.current.crop)return;const a=rs(_.current.crop,e,p);Y({completed:a,current:a}),X(!0),_.current={source:"",crop:null}}),250)}else setTimeout((()=>{Y((t=>{const a=rs(t.current,e,p);return{completed:a,current:a}})),X(!0)}),250)}),[S,h,p]);Object(n.useEffect)((()=>{var e,t,a,n;const r=K.current;if(!q||!d||!r)return;const{aspect:i}=q;d.style.transform="scale(2)";const o=d.getContext("2d");if(!o||"number"!==typeof i||i<=0||E)return;const{naturalHeight:s,naturalWidth:c}=r,u=c/r.width,m=s/r.height,b=null!==(e=q.unit)&&void 0!==e?e:"px",p=window.devicePixelRatio;o.setTransform(p,0,0,p,0,0);let h,g=Math.floor((null!==(t=q.width)&&void 0!==t?t:0)*("px"===b?u:c/100)),v=Math.min(c,g),y=Math.floor(g/i),x=Math.min(s,y),j=Math.min(c,Math.floor((null!==(a=q.x)&&void 0!==a?a:0)*("px"===b?u:c/100))),O=Math.min(s,Math.floor((null!==(n=q.y)&&void 0!==n?n:0)*("px"===b?m:s/100)));if(o.imageSmoothingQuality="high",!(v<=0||x<=0)){if(j+v>c||O+x>s||j<0||O<0||Math.abs((g-v)/v)>.01||Math.abs((y-x)/x)>.01){"width"===(i*s>c?"width":"height")?(v=c,x=v/i,j=0,O=(s-x)/2,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:0,y:O/s*100}):(v=s*i,x=s,j=(c-v)/2,O=0,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:j/c*100,y:0})}if(l){"width"===(i*s>c?"width":"height")?(v=c,x=v/i):(v=s*i,x=s),d.width=v,d.height=x,o.drawImage(r,0,0,c,s,0,0,v,x)}else{var w,k;d.width=null!==(w=v)&&void 0!==w?w:0,d.height=null!==(k=x)&&void 0!==k?k:0,o.drawImage(r,j,O,v,x,0,0,v,x)}"offline"===T&&(null!==B&&void 0!==B?B:"").length<=0||i===q.aspect&&f(q,T,A),h&&Y((e=>({...e,current:h})))}}),[q,d,C,l]),Object(n.useEffect)((()=>{H(!1),Y((e=>{if(null!=K.current&&e.current){const t=rs(e.current,K.current,p);return{current:t,completed:t}}return e}))}),[p]);const Q=Object(n.useRef)(0);Object(n.useImperativeHandle)(t,(()=>({isLoading:()=>E,hasImage:()=>"string"===typeof B&&B.length>0&&"offline"===T||"string"===typeof $&&$.length>0&&"online"===T,forceSource:(e,t,a)=>{const n="offline"===T?B:$;H(!1),n!==t&&(D(!0),N(e),I(e),g(e,t),"offline"===e?z(t):P(t)),F("anonymous"),X("%"===a.unit),Q.current+=1,_.current={source:t,crop:a},L((e=>e+1))}})));const Z="offline"===T&&(null!==B&&void 0!==B?B:"").length>0||"online"===T&&(null!==$&&void 0!==$?$:"").length>0,ee=d&&Z&&!E&&(null===q||void 0===q?void 0:q.width)&&(null===q||void 0===q?void 0:q.height);return Object(O.jsxs)("div",{className:`card-image-cropper ${i}`,children:[Object(O.jsxs)("div",{className:"card-image-source-input",children:[Object(O.jsxs)("div",{className:"card-image-source-input-container",children:[Object(O.jsxs)("div",{className:"card-image-source-input-title",children:[Object(O.jsxs)("span",{className:"field-title",children:[a," ",Object(O.jsx)(jl,{Icon:Zo.a,containerProps:{className:ee?"":"disabled"},tooltipProps:{overlay:ee?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>ee&&d&&function(e,t){t&&e&&e.toBlob((e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}}),"image/png",1)}(d,q)})]}),Object(O.jsxs)(Xl.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;I(t),((null!==B&&void 0!==B?B:"").length>0&&"offline"===t||(null!==$&&void 0!==$?$:"").length>0&&"online"===t)&&(N(t),"offline"===t?(F("anonymous"),g("offline",B)):g("online",$))},value:R,children:[Object(O.jsx)(En.a,{title:Object(O.jsx)("div",{className:"image-info",children:w["image-cropper.online-tip"]}),children:Object(O.jsx)(Xl.a.Button,{value:"online",checked:"online"===R,children:w["image-cropper.source.online.tooltip"]})}),Object(O.jsx)(En.a,{title:Object(O.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(O.jsx)(Xl.a.Button,{value:"offline",checked:"offline"===R,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(O.jsx)("div",{className:["card-image-input","online"===R?"":"input-inactive"].join(" "),children:Object(O.jsx)(wo.a,{placeholder:w["image-cropper.placeholder"],value:$,onChange:e=>{const t=e.target.value;F("anonymous"),D(!0),N("online"),I("online"),g("online",t),P(t)},maxLength:512,allowClear:!0},"key")}),Object(O.jsx)("div",{className:["card-image-input","offline"===R?"":"input-inactive"].join(" "),children:Object(O.jsx)(wo.a,{ref:k,type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files.length>0){const t=e.target.files[0],a=4;if(t.size<1024*a*1024){D(!0);const e=new FileReader;e.addEventListener("load",(()=>{"string"===typeof e.result&&(F("anonymous"),z(e.result),N("offline"),I("offline"),g("offline",e.result),D(!1))})),e.readAsDataURL(t)}else y(a)}else alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(O.jsxs)("div",{className:"card-cropper",onKeyDown:()=>{H(!0)},children:[E&&Object(O.jsx)(ns.FullView,{}),Z&&!W&&Object(O.jsxs)("div",{className:"card-image-option",children:[Object(O.jsx)(En.a,{placement:"left",overlay:l?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(O.jsx)("div",{className:In("image-option force-fit-option",l?"option-active":""),onClick:()=>{H(!0),x(!l)},children:Object(O.jsx)(Mo.a,{})})}),!l&&Object(O.jsx)(En.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(O.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{H(!0),Y((e=>{var t;const{width:a,x:n}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof n)return e;const r={...e.completed,x:(100-a)/2};return{current:r,completed:r}}))},children:Object(O.jsx)(es.a,{})})}),!l&&Object(O.jsx)(En.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(O.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{H(!0),Y((e=>{var t;const{height:a,y:n}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof n)return e;const r={...e.completed,y:(100-a)/2};return{current:r,completed:r}}))},children:Object(O.jsx)(es.a,{})})})]}),(!Z||W&&void 0===S)&&!E&&Object(O.jsx)(_o.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(O.jsx)(Qo.a,{src:"offline"===T?B:$,disabled:l,className:l?"force-fitted":"",imageStyle:r?{backgroundColor:r}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:J,onImageError:()=>{if(d)if("online"===T&&""===(null!==$&&void 0!==$?$:"")||"offline"===T&&""===(null!==B&&void 0!==B?B:"")){_.current={source:"",crop:null};const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),q&&f(q,T,A),h(S),D(!1),M("Image not found")}else F(void 0),v();else _.current={source:"",crop:null},D(!1),M("No receiving canvas"),v();void 0===S&&(D(!1),M("Tainted canvas"))},crop:V,onDragStart:()=>{H(!0)},onChange:(e,t)=>{const a=K.current;_.current.crop||E||(G?Y((e=>({...e,current:rs(t,a,p)}))):(X(!0),Y((t=>({...t,current:rs(e,a,p)})))))},onComplete:(e,t)=>{_.current.crop&&!E||Y((e=>({...e,completed:t})))},ruleOfThirds:!0,crossorigin:S},`${T}-${G}-${C}`)]})]})})),ls=e=>Object(O.jsx)(ol,{fallback:Object(O.jsx)(O.Fragment,{}),children:Object(O.jsx)(il.a,{...e})}),os=Dn.b.div`
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
`,ss=Dn.b.div`
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
`,cs=Dn.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,ds=Dn.b.div`
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
`,us={Container:cs,Option:ss},ms=Dn.b.div`
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
`,bs=Object(Dn.b)(al.a)`
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
`,ps=Object(n.forwardRef)(((e,t)=>{let{isTainted:a,isInitializing:r,imageChangeCount:i,globalScale:l,canvasMap:o,onDownloadError:s}=e;const c=_n(),{allowHotkey:d,resolution:u}=Sr(Object(Gi.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),{onExport:m}=Yi(!0,o,{imageChangeCount:i,isInitializing:r,language:c,globalScale:l}),{exportCanvasRef:b}=o,p=Object(n.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[h,g]=Object(n.useState)(!1),f=Object(n.useCallback)((()=>{g(!1)}),[]),{onSave:v,isPipelineRunning:y}=Fr({isTainted:a,isInitializing:r,exportCanvasRef:b,exportRef:p,onExport:m,onDownloadError:s,onDownloadComplete:f}),x=e=>{h||(a?zn.a.error({message:c["prompt.download.tainted.message"]}):(g(!0),v(e)))};return Object(n.useImperativeHandle)(t,(()=>({download:x,isPipelineRunning:y}))),a?null:Object(O.jsxs)("div",{className:"save-button-container",children:[Object(O.jsx)("div",{id:"save-button-waiting"}),Object(O.jsxs)(bs,{className:"save-button",id:"save-button-ready",children:[Object(O.jsx)(En.a,{overlay:d?Object(O.jsx)(O.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(O.jsx)("div",{className:"button-label",children:Object(O.jsx)("div",{className:"label-content",onClick:()=>x(),children:h?c["button.download.ongoing.label"]:c["button.download.label"]})})}),Object(O.jsx)(nl.a,{disabled:h,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(O.jsx)(qo,{onChange:()=>Nn()}),children:Object(O.jsxs)(ms,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(O.jsx)(rl.a,{className:"resolution-icon"}),Object(O.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]})}));var hs=a(622),gs=a(623),fs=a(624);const vs=Dn.b.div`
    ${Wn} {
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
`,ys=Object(Dn.b)(Wn)`
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
`,xs=e=>{let{data:t,children:a,disabled:r,withText:i}=e;const[l,o]=Object(n.useState)(!1);return Object(O.jsxs)(ys,{disabled:r,onClick:e=>{var a;e.stopPropagation(),a=t,Tl()(a),o(!0),setTimeout((()=>{o(!1)}),1e3)},children:[l?Object(O.jsx)("div",{className:"copiable-overlay",children:i?Object(O.jsxs)(O.Fragment,{children:["Copied\xa0",Object(O.jsx)(Nl.a,{})]}):Object(O.jsx)(Nl.a,{})}):null,a]})},js=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:Pa},{label:e["button.import.for-other.label"],value:"other",converter:rn}],Os=Object(n.forwardRef)(((e,t)=>{let{tainted:a,artworkCanvas:r,onRequireExportData:i,onRequireDownload:l,onClose:o}=e;const[s,c]=Object(n.useState)(!1),[d,u]=Object(n.useState)("ygocarder"),[m,b]=Object(n.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:p,resolution:h}=Sr(Object(Gi.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),g=_n(),f="export-input-raw",v=Object(n.useCallback)((()=>{const e=document.getElementById(f);e&&(e.focus(),e.select())}),[]);Object(n.useImperativeHandle)(t,(()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),b(js(g).map((t=>{let{value:a,converter:n}=t;try{const{isPartial:t,result:i}=n(e,r);return{value:a,isPartial:t,name:Ya(e.name),data:`${JSON.stringify(i)}`}}catch(i){return console.error(i),{value:a,isPartial:!1,name:"Unknown",data:""}}})).reduce(((e,t)=>{let{data:a,isPartial:n,value:r,name:i}=t;return e[r]={name:i,data:a,isPartial:n},e}),{...m}))}}))),Object(n.useEffect)((()=>{setTimeout((()=>{s&&"ygocarder"===d&&v()}),100)}),[d,v,s]);const{data:y,isPartial:x,name:j}=m[d];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Bn.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay",onCancel:()=>{c(!1),o()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(O.jsxs)(vs,{children:[Object(O.jsx)(Fl,{optionList:js(g),onChange:e=>u(e),value:d}),"other"===d&&x&&Object(O.jsxs)("div",{className:"partial-alert",children:[Object(O.jsx)("b",{children:g["service.decode.partial.message"]}),Object(O.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(O.jsxs)("div",{className:In("export-container-result",`mode_${d}`),children:[Object(O.jsx)(Dl,{content:a&&"other"===d?Object(O.jsx)(uo,{}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Wn,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([y],{type:"application/json"});Xa(Ya(j),e,"application/json")},children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(Zo.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(O.jsx)(Dl,{placement:"bottom",content:x?Object(O.jsx)(El,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(xs,{disabled:x,data:m.ygocarder.data,withText:!0,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(hs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(O.jsx)(Dl,{placement:"bottom",content:x?Object(O.jsx)(El,{children:g["image-cropper.offline-warning"]}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(xs,{disabled:x,data:window.location.href,withText:!0,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(gs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.share-button.label"]})]})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(Dl,{content:a?Object(O.jsx)(uo,{}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Wn,{disabled:a,className:"export-download-image",onClick:l,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(fs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(O.jsx)(nl.a,{overlay:Object(O.jsx)(qo,{}),children:Object(O.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!x&&Object(O.jsx)(wo.a.TextArea,{id:f,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(O.jsx)(En.a,{overlay:p?Object(O.jsx)(O.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(O.jsx)("button",{className:"primary-button export-button",onClick:()=>{i(),c(!0)},children:g["button.export.label"]})}),Object(O.jsx)(nl.a,{overlay:Object(O.jsx)(Go.a,{onClick:e=>e.domEvent.stopPropagation(),children:js(g).map(((e,t)=>{let{converter:a,label:n}=e;return Object(O.jsx)(Go.a.Item,{onClick:()=>{try{const e=kr.getState().card,{result:t}=a(e,r);((e,t)=>{const a=new Blob([t],{type:"application/json"});Xa(Ya(e),a,"application/json")})(Ya(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),zn.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:n},`${t}`)}))}),children:Object(O.jsx)(Wn,{className:"secondary-button export-custom",children:Object(O.jsx)(Zo.a,{})})})]})}));var ws=a(625);const ks=Dn.b.div`
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
        ${Wn} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,Ss=Object(n.forwardRef)(((e,t)=>{let{allowHotkey:a,language:r,onImport:i,onClose:l}=e;const o="import-direct-upload",s="import-upload",c="import-textarea",d=Object(n.useRef)(null),u=Object(n.useRef)(null),[m,b]=Object(n.useState)(0),[p,h]=Object(n.useState)("replace"),[g,f]=Object(n.useState)(!1),[v,y]=Object(n.useState)(!1),x=Object(n.useCallback)((()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())}),[]);Object(n.useEffect)((()=>{setTimeout((()=>{g&&x()}),100)}),[x,g]),Object(n.useImperativeHandle)(t,(()=>({requestImport:e=>{h(e),f(!0)}})));const j=()=>{b((e=>e+1)),f(!1),y(!1),l()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:n}=Or(e,"replace"===p||"new"===p?void 0:kr.getState().card);if(n&&zn.a.info({message:r["service.decode.partial.message"],description:r["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};i(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}else i(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}}catch(a){console.error("Import error:",a),zn.a.error({message:r["error.import.error.message"],description:r["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const n=new FileReader;n.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},n.readAsText(a);break}},S=async()=>{try{const n=document.getElementById(c);if(n){var e;const{value:r}=n,i=null!==(e=r.trim())&&void 0!==e?e:"";let l="";try{l=Ba(decodeURIComponent(i))}catch(a){}let o=null;if(i.startsWith("{")&&i.endsWith("}"))o=i;else if(l.startsWith("{")&&l.endsWith("}"))o=JSON.parse(l);else{var t;const e=i.startsWith("https://db.ygoprodeck.com/api")?i:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${i}&num=10&offset=0&misc=yes`;y(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const n=await a.json();o=null!==(t=n.data.find((e=>{let{name:t}=e;return t.toLowerCase()===i.toLowerCase()})))&&void 0!==t?t:n.data.sort(((e,t)=>{var a,n;const r=null===(a=e.misc_info)||void 0===a?void 0:a[0],i=null===(n=t.misc_info)||void 0===n?void 0:n[0];if(!r||!i)return 0;return(r.viewsweek+1)/(i.viewsweek+1)>2?i.viewsweek-r.viewsweek:i.views-r.views}))[0]}await w(o,!0)}}catch(a){console.error("Import error:",a),zn.a.error({message:r["error.import.error.message"],description:r["error.import.error.description"]})}finally{j()}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Bn.a,{visible:g,title:"merge"===p?r["button.import.merge.label"]:r["button.import.label"],className:"global-overlay",onCancel:j,okText:r["prompt.import.ok.label"],confirmLoading:v,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(O.jsxs)(ks,{children:["merge"!==p?Object(O.jsxs)("div",{className:"prompt-alert",children:[r["prompt.import.instruction.line-1"],Object(O.jsx)("br",{}),r["prompt.import.instruction.line-2"],Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"alert",children:r["prompt.import.instruction.alert.line-1"]})]}):null,Object(O.jsx)("div",{className:"import-container-input",children:Object(O.jsx)(wo.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:r["prompt.import.message"],disabled:v,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==p?Object(O.jsxs)("div",{className:"import-container-upload",children:[Object(O.jsx)("span",{className:"option-separator",children:r["prompt.import.alternative.label"]}),Object(O.jsxs)(Wn,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(O.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),j()}},`file-input-${m}`),r["button.import.tooltip"]]}),"new"===p&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"option-separator",children:r["prompt.import.alternative.label"]}),Object(O.jsx)(Wn,{className:"import-empty",onClick:()=>{w(Wt()),j()},children:r["button.empty.label"]})]})]}):null]})}),Object(O.jsx)(En.a,{overlay:a?Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(O.jsxs)("div",{children:["Ctrl-G / \u2318-G",r["prompt.import.merge.tooltip"]]})]}):null,children:Object(O.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),f(!0)},children:r["button.import.label"]})}),Object(O.jsx)(En.a,{overlay:r["button.import.tooltip"],children:Object(O.jsxs)(Wn,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(o);e&&e.click()},children:[Object(O.jsx)("input",{ref:d,type:"file",id:o,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),j()}},`direct-file-input-${m}`),Object(O.jsx)(ws.a,{})]})})]})})),Fs=(Object(Dn.b)(Go.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),Cs=e=>y(e).map((e=>{let{color:t,name:a,label:n}=e;return{label:"normal"===a?Object(O.jsx)(j.a,{}):n,value:a,props:{style:{color:t,fontWeight:"bold"}}}})),Ls=[{value:"normal",label:Object(O.jsx)(j.a,{})},...Object.values(g).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}}))],Ts=()=>Ie.map((e=>{let{name:t,nameKey:a,labelBackgroundColor:n,labelBackgroundColorList:r,edition:i}=e;return{label:Object(O.jsx)(Oo,{labelBackgroundColor:n,labelBackgroundColorList:r,nameKey:a}),value:t,edition:i}})),Ns=[...Array(14)].map(((e,t)=>({label:t,value:t}))),Rs=R.map((e=>{let{value:t}=e;return{label:t===N?Object(O.jsx)(j.a,{}):Object(O.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}})),Is=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map((e=>{let[t,{label:a,order:n}]=e;return{label:a,value:t,order:n}})).sort(((e,t)=>e.order-t.order));var Bs=a(636);const zs=Dn.b.div`
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
            padding: 0 var(--spacing-xs);
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
`,Es=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const n=_n(),r=e=>{const n=document.getElementById(t);if(n){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,n=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(n,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(n,e);a(t,e)}};return Object(O.jsxs)(zs,{tabIndex:-1,className:"char-picker-container",children:[Object(O.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\u2205","\u203b"].map((e=>Object(O.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>r(e),children:e},e)))}),Object(O.jsx)("div",{className:"char-picker-guideline",children:Object(O.jsx)(fl,{content:Object(O.jsxs)(El,{children:[n["input.char-picker.guide.header"],Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:n["input.char-picker.guide.instruction-1"]}),Object(O.jsx)("li",{children:n["input.char-picker.guide.instruction-2"]})]})]})})})]})};var Ds=a(627),Ws=a(602);a(562),a(563);const Ms=Object(n.forwardRef)(((e,t)=>{let{disabled:a,color:r,onSelect:i,onOffsetChange:l,onRemove:o}=e;const s=_n(),[c,d]=Object(n.useState)(r),[u,m]=Object(n.useState)(0),[b,p]=Object(n.useState)(-1),h=Object(n.useRef)(Yn()(m,250)).current;return Object(n.useImperativeHandle)(t,(()=>({setColor:e=>{if(e){const{color:t,offset:a,id:n}=e,{min:r,max:i,round:l}=Math;d(t),m(i(0,r(100,l(100*parseFloat(a))))),p(n)}},setCurrentOffset:(e,t)=>{const{min:a,max:n,round:r}=Math;e===b&&m(n(0,a(100,r(100*parseFloat(t)))))}}))),Object(n.useEffect)((()=>{b>0&&(null===l||void 0===l||l(b,""+u/100))}),[b,u,l]),Object(O.jsxs)("div",{className:"stop-point-control-panel",children:[Object(O.jsxs)("div",{className:"stop-point-offset-input",children:[Object(O.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(O.jsx)(Ws.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(O.jsx)(al.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===o||void 0===o?void 0:o(b),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(O.jsx)(Co.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===i||void 0===i||i(e.hex)}})]})})),As=e=>({colorList:e,raw:jn(e)}),Hs=e=>{var t,a;let{palette:r=jn(xn()),angle:i=180,memoizedOnChange:l}=e;const o=_n(),s=Object(n.useRef)(null),[c,d]=Object(n.useState)(i),[u,m]=Object(n.useState)((()=>{var e,t;const a=On(r);return{raw:r,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}})),b=Object(n.useCallback)(((e,t)=>m((a=>{const n=a.colorList.map((a=>a.id===e?{...a,offset:t}:a));return{...a,...As(n)}}))),[]);Object(n.useEffect)((()=>{d(i)}),[i]),Object(n.useEffect)((()=>{var e,t;const a=On(r);m({raw:r,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})}),[r]);const p=Object(n.useRef)(!1);return Object(n.useEffect)((()=>{var e;u.colorList[0]&&p.current&&(p.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))}),[u.colorList]),Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var n;const e=t.find((e=>e.id===a));e&&(null===(n=s.current)||void 0===n||n.setCurrentOffset(a,e.offset))}}),100),()=>{e=!1}}),[u]),Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&l(u.colorList,c)}),200),()=>{e=!1}}),[u,c,l]),Object(O.jsxs)("div",{className:In(cl,"gradient-picker-container"),children:[Object(O.jsxs)("div",{className:"gradient-angle-control",children:[Object(O.jsx)("h2",{children:o["input.name-style.gradient.color-point.label"]}),Object(O.jsxs)(al.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m((e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort(((e,t)=>Number(e.offset)-Number(t.offset)));return{...e,...As(t)}}))},children:[o["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(O.jsx)(ul,{angle:c,size:120,setAngle:d,children:Object(O.jsx)("h2",{children:o["input.name-style.gradient.gradient-direction.label"]})})]}),Object(O.jsx)("div",{className:"stop-color-picker-container",children:Object(O.jsx)(sl.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m((t=>({...t,...As(e)}))),onColorStopSelect:e=>{var t;m((t=>({...t,currentControlId:e.id}))),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(O.jsx)(Ms,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:b,onRemove:e=>{m((t=>{var a;const n=t.colorList.filter((t=>t.id!==e)),r=null!==(a=null===n||void 0===n?void 0:n[0].id)&&void 0!==a?a:-1;var i;r>0&&u.colorList[r]&&(null===(i=s.current)||void 0===i||i.setColor(u.colorList[r]));return{...As(n),currentControlId:r}}))}})})})]})},$s=Object(Dn.b)(us.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,Ps=Dn.b.div`
    line-height: 0;
    cursor: pointer;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
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
`,Ks=Object(Dn.b)(us.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Us=Dn.b.div`
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
`;var Ys=a(315);const Gs=Object(n.forwardRef)(((e,t)=>{let{className:a,defaultValue:r,fieldMap:i,labelMap:l,onChange:o}=e;const s=_n(),{x:c,y:d,color:u,width:m}=i,[b,p]=Object(n.useState)((()=>{const e=r[c],t=r[d],a=r[u],n=r[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==n&&void 0!==n?n:0,color:a}})),{x:h,y:g,color:f,width:v}=b,y=l[m];return Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&o(b)}),500),()=>{e=!1}}),[b]),Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==b[a])return void p((t=>({...t,...e})))}}))),Object(O.jsxs)("div",{className:a,children:[Object(O.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(O.jsxs)("div",{className:"line-position",children:[Object(O.jsx)(Ys.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==h&&void 0!==h?h:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return p((e=>({...e,x:t,y:a})))}}),Object(O.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(O.jsx)(Ws.a,{size:"small",value:h,onChange:e=>p((t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(O.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(O.jsx)(Ws.a,{size:"small",value:g,onChange:e=>p((t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(O.jsxs)("div",{className:"single-slider",children:[y,":\xa0",Object(O.jsx)(ls,{value:v,min:1,max:10,onChange:e=>{"number"===typeof e&&p((t=>({...t,width:e})))}})]})]}),Object(O.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(O.jsx)(Co.b,{colors:At,color:f,onChangeComplete:e=>p((t=>({...t,color:e.hex})))})]})})),Xs=Object(n.forwardRef)(((e,t)=>{let{active:a,value:r,onClick:i,onCancel:l}=e;const o=Object(n.useRef)(null),[s,c]=Object(n.useState)(0);return Object(n.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.focus()}}))),Object(O.jsx)(Ks,{ref:o,...kn({stopPropagation:!0,optionLength:P.length,setFocus:c,onTrigger:()=>{s>=0&&i(P[s])},onCancel:()=>{null===l||void 0===l||l()}}),children:P.map(((e,t)=>{const{key:n,image:l,label:o}=e;return Object(O.jsx)(Us,{className:In("preset-item",r.preset===n&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),i(e)},children:Object(O.jsx)("img",{className:"preset-preview",src:`/ygocarder/${l}`,alt:o})},n)}))})}));var Vs=a(626);const qs=Dn.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,_s=Dn.b.div`
    display: inline-grid;
    grid-template-columns: max-content max-content;
    color: var(--color);
    .emboss-control-title {
        grid-column: -1 / 1;
        font-size: var(--fs-sm);
        text-align: center;
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
`,Js=.01;const Qs={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},Zs=Object(n.forwardRef)(((e,t)=>{let{defaultPitch:a=Qs.embossPitch,defaultYaw:r=Qs.embossYaw,defaultThickness:i=Qs.embossThickness,materialColor:l,children:o,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=wn(),[b,p]=Object(n.useState)("#ffffff"),[h,g]=Object(n.useState)(i),[f,v]=Object(n.useState)(r),[y,x]=Object(n.useState)(a),j=Object(n.useRef)([255,255,255]),w=Object(n.useRef)([0,1,0]),k=Object(n.useRef)(i),[S]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{let e=!0;return m&&setTimeout((()=>{if(e){const e=xa(f,y),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(b);(t[0]!==j.current[0]||t[1]!==j.current[1]||t[2]!==j.current[2]||Math.abs(e[0]-w.current[0])>Js||Math.abs(e[1]-w.current[1])>Js||Math.abs(e[2]-w.current[2])>Js||h!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:f,pitch:y,thickness:h}),j.current=t,w.current=e,k.current=h}}),150),()=>{e=!1}}),[m,b,f,y,h]),Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{let{color:t,pitch:a,yaw:n,thickness:r}=e;t&&p(t),a&&x(a),n&&v(n),"number"===typeof r&&v(r)}}))),Object(O.jsxs)(_s,{className:In(cl,"emboss-control"),children:[Object(O.jsx)("div",{className:"emboss-control-title",children:o}),Object(O.jsxs)("div",{className:"emboss-control-left",children:[Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(O.jsx)(qs,{className:"material-color",onClick:c,$color:l})]}),s["input.name-style.emboss.color.alert"](Object(O.jsx)("span",{className:"navigate-button",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(O.jsxs)("h2",{className:"thickness-row",children:[Object(O.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(O.jsx)(ls,{value:h,min:0,max:4,onChange:e=>{"number"===typeof e&&(g(e),u())}})]}),Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(O.jsx)(Vs.a,{className:"reset-button",onClick:()=>{x(90),u()}})]}),Object(O.jsxs)(Al,{className:"vertical-angle-control",children:[Object(O.jsx)("div",{className:"slider-label"}),Object(O.jsx)(Ws.a,{size:"small",min:-90,max:90,onChange:e=>{x("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:y}),Object(O.jsx)(ls,{min:-90,max:90,value:y,onChange:e=>{x(e),u()}}),Object(O.jsx)("div",{className:"slider-padding"})]}),Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(O.jsx)(Vs.a,{className:"reset-button",onClick:()=>{v(90),u()}})]}),Object(O.jsx)("div",{className:"horizontal-angle-contorl",children:Object(O.jsx)(ul,{angle:f,size:120,setAngle:e=>{v(e),u()}})})]}),S&&Object(O.jsxs)("div",{className:"emboss-control-right",children:[Object(O.jsx)("h2",{children:"Light color"}),Object(O.jsx)(Co.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:b,onChange:e=>{p(e.hex),u()},onChangeComplete:e=>{p(e.hex),u()}})]})]})})),ec=Dn.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,tc=e=>{let{color:t,onChange:a}=e;const[r,i]=Object(n.useState)(t);return Object(n.useEffect)((()=>{i(t)}),[t]),Object(O.jsxs)(ec,{children:[Object(O.jsx)(Co.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:r,onChange:e=>i(e.hex),onChangeComplete:e=>{i(e.hex),a(e.hex)}}),Object(O.jsx)(Co.b,{colors:At,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(569);const ac=Object(n.forwardRef)(((e,t)=>{let{frameInfo:a,defaultType:r,defaultValue:i,showExtraDecorativeOption:l,onChange:o}=e;const s=_n(),c=Object(n.useRef)(null),[d,u]=Object(n.useState)(-1),[m,b]=Object(n.useState)(!1),[p,h]=Object(n.useState)(r),[g,f]=Object(n.useState)(i),[v,y]=wn(),x=Object(n.useRef)(Yn()(o,250)).current,w=Object(n.useCallback)(((e,t)=>{f((a=>({...a,gradientAngle:t,gradientColor:jn(e)}))),v()}),[v]),k=Sr((e=>e.setting.reduceMotionColor)),S=Object(n.useMemo)((()=>{return e=s,Object.values(fe).map((t=>{let{value:a,labelKey:n}=t;return{label:e[n],value:a}}));var e}),[s]);Object(n.useEffect)((()=>{0!==y&&(h("custom"),x("custom",g))}),[y]);const F=Object(n.useRef)(null),C=Object(n.useRef)(null),L=Object(n.useRef)(null);Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,n;f((t=>({...t,...e})));const{lineColor:r,lineWidth:i,lineOffsetX:l,lineOffsetY:o,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:b,embossThickness:p}=e;null===(t=F.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=C.current)||void 0===a||a.setValue({x:l,y:o,width:i,color:r}),null===(n=L.current)||void 0===n||n.setValue({pitch:m,yaw:b,thickness:p})}})));const{fillStyle:T,headTextFillStyle:N,hasOutline:R,hasShadow:I,hasGradient:B,gradientColor:z,gradientAngle:E,hasEmboss:D,embossPitch:W,embossYaw:M,embossThickness:A,pattern:H,font:P}=g,{labelBackgroundColor:K,labelBackgroundImage:Y}=null!==a&&void 0!==a?a:{},G={background:K,backgroundImage:Y},X="custom"===p,V="predefined"===p,q="name-style-option-input-container",_=()=>{h("auto"),"auto"!==p&&x("auto",g)},J=()=>{var e;const t=g.preset?null===(e=$[g.preset])||void 0===e?void 0:e.value:{};h("predefined"),f((e=>({...e,...t}))),x("predefined",{...g,...t})},Q=()=>{h("custom"),"custom"!==p&&x("custom",g)},Z="color-picker";return Object(O.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(O.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(O.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(O.jsxs)("span",{className:"name-style-input-container",children:[Object(O.jsxs)("div",{id:q,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...kn({setFocus:u,optionLength:3,onKeyPress:e=>{if(1===d&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),u(1),b(!0),setTimeout((()=>{var e;1===d&&(null===(e=c.current)||void 0===e||e.focus())}),200),!1},onTrigger(){0===d&&_(),1===d&&J(),2===d&&Q()}}),children:[Object(O.jsxs)("label",{className:In("ant-radio-wrapper","auto"===p&&"ant-radio-wrapper-checked",0===d&&"ant-radio-focused"),onClick:()=>_(),children:[Object(O.jsxs)("span",{className:"ant-radio "+("auto"===p?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(O.jsx)("span",{className:"name-style-option-break"}),Object(O.jsx)("label",{className:In("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",1===d&&"ant-radio-focused"),onClick:()=>J(),children:Object(O.jsx)(pl.a,{visible:m,onVisibleChange:b,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Xs,{ref:c,active:V,value:g,onCancel:()=>{var e;b(!1),null===(e=document.getElementById(q))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const n=a?null===(t=$[a])||void 0===t?void 0:t.value:{};h("predefined"),f((e=>({...e,...n}))),x("predefined",{...g,...n})}})}),children:Object(O.jsxs)("span",{className:"name-style-option-label",children:[Object(O.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(O.jsx)("span",{className:"name-style-option-break"}),Object(O.jsx)("label",{className:In("ant-radio-wrapper",X&&"ant-radio-wrapper-checked",2===d&&"ant-radio-focused"),onClick:()=>Q(),children:Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"ant-radio "+(X?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(O.jsxs)("div",{className:"style-picker",children:[Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsxs)("div",{className:"custom-style-text",children:[Object(O.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(O.jsx)(tc,{color:T,onChange:e=>{h("custom"),f((t=>({...t,fillStyle:e}))),v()}})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"custom-style-text",children:[Object(O.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(O.jsx)(Co.b,{colors:At,color:N,onChangeComplete:e=>{h("custom"),f((t=>({...t,headTextFillStyle:e.hex}))),v()}})]})]})}),placement:"bottom",children:Object(O.jsxs)(Hl,{id:Z,$softMode:k,$active:X,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(O.jsx)(Ds.a,{})]})},"color-picker"),l&&Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(yl.a,{value:"has-shadow",checked:I,onChange:()=>{h("custom"),f((e=>({...e,hasShadow:!e.hasShadow}))),v()},children:s["input.name-style.shadow.toggle.label"]})}),I&&Object(O.jsx)(Gs,{ref:F,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:g,onChange:e=>{let{color:t,width:a,x:n,y:r}=e;f((e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:n,shadowOffsetY:r}))),v()}})]})}),placement:"bottom",children:Object(O.jsxs)(Hl,{$softMode:k,$active:X&&I,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(O.jsx)(Ds.a,{})]})},"shadow-picker"),Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(yl.a,{value:"has-line",checked:R,onChange:()=>{h("custom"),f((e=>({...e,hasOutline:!e.hasOutline}))),v()},children:s["input.name-style.outline.toggle.label"]})}),R&&Object(O.jsx)(Gs,{ref:C,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:g,onChange:e=>{let{color:t,width:a,x:n,y:r}=e;f((e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:n,lineOffsetY:r}))),v()}})]})}),placement:"bottom",children:Object(O.jsxs)(Hl,{$softMode:k,$active:X&&R,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(O.jsx)(Ds.a,{})]})},"outline-picker"),l&&Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(yl.a,{value:"has-gradient",checked:B,onChange:()=>{h("custom"),f((e=>({...e,hasGradient:!e.hasGradient}))),v()},children:s["input.name-style.gradient.toggle.label"]})}),B&&Object(O.jsx)("div",{className:"custom-style-gradient",children:Object(O.jsx)(Hs,{angle:E,palette:z,memoizedOnChange:w})})]})}),placement:"bottom",children:Object(O.jsxs)(Hl,{$softMode:k,$active:X&&B,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(O.jsx)(Ds.a,{})]})},"gradient-picker"),l&&Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)($s,{onClick:e=>e.stopPropagation(),children:[Object(O.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),U.map((e=>{let{key:t,patternImage:a}=e;return Object(O.jsx)(Ps,{className:["pattern-option",g.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{f((e=>({...e,pattern:t}))),v()},children:a?Object(O.jsx)("img",{style:a?G:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)}))]})}),placement:"bottomLeft",children:Object(O.jsx)(Hl,{$softMode:k,$active:X&&"string"===typeof H&&"none"!==H,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(us.Container,{children:S.map((e=>{let{value:t,label:a}=e;return Object(O.jsx)(us.Option,{className:P===t?"menu-active":"",onClick:()=>{f((e=>({...e,font:t}))),v()},children:a},t)}))})}),placement:"bottomLeft",children:Object(O.jsx)(Hl,{$softMode:k,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),l&&Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(yl.a,{value:"has-emboss",checked:D,onChange:()=>{h("custom"),f((e=>({...e,hasEmboss:!e.hasEmboss}))),v()},children:s["input.name-style.emboss.toggle.label"]})}),D&&Object(O.jsx)(Zs,{ref:L,language:s,defaultPitch:W,defaultYaw:M,defaultThickness:A,materialColor:T,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(Z))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:n}=e;f((e=>({...e,embossPitch:n,embossYaw:a,embossThickness:t}))),v()},children:Object(O.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(O.jsx)(Hl,{$softMode:k,$active:X&&D,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker")]})]})]})})})),nc=Dn.a`
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
`,rc=Object(Dn.b)(Fl)`
	${nc}
`,ic=Object(n.forwardRef)(((e,t)=>{let{onSTFrameChange:a,onPasswordChange:r,onStatChange:i}=e;const{setting:l}=Sr(),{showExtraDecorativeOption:o}=l,s=Object(n.useMemo)((()=>Ts().filter((e=>o||"normal"===e.edition))),[o]),{frame:c,setCard:d}=kr(Object(Gi.useShallow)((e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}}))),u=Object(n.useCallback)((e=>{d((t=>{const{typeAbility:n,attribute:l,format:o,password:s,star:c,atk:d,def:u,linkRating:m}=t,b=`${e}`,p="spell"===b||"trap"===b,h=p||"speed-skill"===b,g="tcg"===o?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:Ne,f="spell"===b?[g["Spell Card"]]:"trap"===b?[g["Trap Card"]]:n,v="token"===b?Le[o]:s,y=h?"":""===d?"0":d,x=h?"":""===u?"0":u,j=h?"":m,O="token"===b?0:c;return r(v),p&&a(f),i(y,x,j),{...t,frame:b,isLink:"link"===b,attribute:"token"===b?w:p?`${b}`.toUpperCase():l,star:O,typeAbility:f,password:v,atk:y,def:x,linkRating:j}}))}),[d,r,a,i]);return Object(n.useImperativeHandle)(t,(()=>({changeFrame:u}))),Object(O.jsx)(rc,{className:"frame-radio",value:c,onChange:u,optionList:s})})),lc=Dn.b.div`
    ${wl}
`,oc=e=>{let{onChange:t,value:a,optionList:r,children:i,className:l}=e;const[o,s]=Object(n.useState)(-1),c=r.length;return Object(O.jsxs)(lc,{className:["ant-radio-group ant-radio-group-outline checkbox-train",l].join(" "),children:[i&&Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(O.jsx)("div",{className:"checkbox-train-input-group",...kn({setFocus:s,optionLength:c,onTrigger:()=>{const e=r[o];if(e){const n=!!Array.isArray(a)&&a.includes(`${e.value}`);t(n?a.filter((t=>`${e.value}`!==t)):[...a,`${e.value}`])}}}),children:r.map(((e,n)=>{const{label:r,value:i,props:l,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${i}`),d=Object(O.jsxs)("label",{...l,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",o===n?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter((e=>`${i}`!==e)):[...a,`${i}`])},children:[Object(O.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(O.jsx)("span",{className:"ant-radio-button-inner"})}),Object(O.jsx)("span",{className:"label",children:r})]},i);return s?Object(O.jsx)(En.a,{title:s,children:d},i):d}))})]})},sc=Object(Dn.b)(is)`
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
        width: 375px;
        text-align: center;
    }
`,cc=Object(n.forwardRef)(((e,t)=>{let{backgroundColor:a,children:r,receivingCanvas:i,onSourceLoaded:l,onTainted:o,onCropChange:s}=e;const c=_n(),{background:d,backgroundCrop:u,backgroundType:b,backgroundData:p,backgroundSource:h,backgroundFit:g,isPendulum:f,pendulumSize:v,opacity:y,getUpdater:x,setCard:j}=kr(Object(Gi.useShallow)((e=>{let{card:{background:t,backgroundCrop:a,backgroundType:n,backgroundData:r,backgroundSource:i,backgroundFit:l,isPendulum:o,pendulumSize:s,opacity:c},getUpdater:d,setCard:u}=e;return{background:t,backgroundCrop:a,backgroundType:n,backgroundData:r,backgroundSource:i,backgroundFit:l,isPendulum:o,pendulumSize:s,opacity:c,getUpdater:d,setCard:u}}))),w=Object(n.useRef)(null),k=Object(n.useMemo)((()=>x("backgroundSource")),[x]),S=Object(n.useMemo)((()=>x("background")),[x]),F=Object(n.useMemo)((()=>x("backgroundData")),[x]),C=Object(n.useCallback)((e=>j((t=>({...t,backgroundFit:e})))),[j]),L=Object(n.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&j((t=>({...t,backgroundCrop:e})),a)}),[s,j]);return Object(n.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:n,backgroundSource:r}=e;var i,l;"offline"===r?"string"===typeof n&&a&&(null===(i=w.current)||void 0===i||i.forceSource("offline",n,a)):"string"===typeof t&&a&&(null===(l=w.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(O.jsx)(sc,{ref:w,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:p,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:i,forceFit:g,onSourceChange:(e,t)=>{k(e),"offline"===e?F(t):S(t)},onCropChange:L,onTainted:o,onSourceLoaded:l,onForceFitChange:C,onMaxSizeExceeded:e=>{zn.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(f,y,b,v).backgroundRatio,beforeCropper:null,children:r})}));var dc=a(628);a(570);const uc=Dn.b.span`
    white-space: pre-line;
`,mc=Dn.b.div`
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
`,bc=Dn.b.div`
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
`,pc=Object(n.forwardRef)(((e,t)=>{var a;let{receivingCanvas:r,defaultValue:i,onTainted:l,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const b=_n(),{background:p,backgroundData:h,backgroundSource:g,backgroundType:f,getUpdater:v,hasBackground:y,isPendulum:x,setCard:j}=kr(Object(Gi.useShallow)((e=>{let{card:{background:t,backgroundData:a,backgroundSource:n,backgroundType:r,hasBackground:i,isPendulum:l},setCard:o,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:n,backgroundType:r,getUpdater:s,hasBackground:i,isPendulum:l,setCard:o}}))),[w,k]=Object(n.useState)(!0),[S,F]=Object(n.useState)(!0),[C,L]=Object(n.useState)((()=>({...d(),...i}))),T=Object(n.useRef)(null),N=Object(n.useMemo)((()=>v("backgroundType")),[v]),R=Object(n.useCallback)((e=>j((t=>({...t,hasBackground:e.target.checked})))),[j]);Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&s(C)}),500),()=>{e=!1}}),[C]),Object(n.useEffect)((()=>{k(!1),setTimeout((()=>{F(!1)}),250)}),[]),Object(n.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=T.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:n,backgroundSource:r,...i}=e;var l;"string"!==typeof t&&"string"!==typeof n||!a||(null===(l=T.current)||void 0===l||l.setValue({background:t,backgroundCrop:a,backgroundData:n,backgroundSource:r}));for(const o in i)i[o]!==C[o]&&L((e=>({...e,...i})))}})));const I=0===(null!==p&&void 0!==p?p:"").length&&!0!==(null===(a=T.current)||void 0===a?void 0:a.hasImage());return Object(O.jsxs)(mc,{className:"card-opacity-slider-container",children:[Object(O.jsx)(En.a,{overlayClassName:"long-tooltip-overlay",title:Object(O.jsx)(uc,{children:b["input.opacity.boundless.tooltip"]}),children:Object(O.jsx)(Ml,{className:"background-label",children:Object(O.jsxs)(yl.a,{className:"art-frame",onChange:e=>L((t=>({...t,boundless:e.target.checked}))),checked:C.boundless,children:["\xa0",b["input.opacity.boundless.label"]]})})}),Object(O.jsx)(pl.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:k,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",S?"picker-hidden":""].join(" "),content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(bc,{className:["custom-style-picker",I?"overlay-no-background-image":""].join(" "),children:[Object(O.jsxs)("h3",{className:"custom-style-expand "+(y?"":"inactive"),children:[Object(O.jsx)(yl.a,{checked:y,onChange:e=>{R(e)},children:b["input.background.toggle-label"]}),Object(O.jsx)("br",{}),Object(O.jsx)("i",{children:b["input.background.description"]})]}),Object(O.jsx)("div",{className:"background-picker "+(y?"":"overlay-no-background"),children:Object(O.jsx)(cc,{ref:T,receivingCanvas:r,onSourceLoaded:u,onTainted:l,onCropChange:m,backgroundColor:C.baseFill,children:Object(O.jsxs)("div",{className:"layout-picker-panel",children:[Object(O.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(O.jsx)("h2",{children:b["input.background-color.label"]}),Object(O.jsx)(Co.b,{colors:At,color:C.baseFill,onChangeComplete:e=>{L((t=>({...t,baseFill:e.hex})))}})]}),!I&&Object(O.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(O.jsx)("h2",{children:b["input.background-type.label"]}),Object(O.jsx)(Fl,{className:"background-type-picker",onChange:N,optionList:o({fit:b["input.background-type.fit.label"],full:b["input.background-type.full.label"],frame:b["input.background-type.frame.label"]}),value:f})]})]})})})]})}),placement:"bottom",children:Object(O.jsxs)(Ml,{className:"background-label",children:[Object(O.jsx)("div",{className:"background-preview",style:{backgroundColor:y?C.baseFill:c},children:y?p||h?Object(O.jsx)("img",{className:"background-image-preview",src:"online"===g?p:h,alt:"Background"}):null:Object(O.jsx)(dc.a,{className:"no-background-icon"})}),b["input.background.label"]]})}),Mt.map((e=>{var t,a,n;let{labelKey:r,type:i,subType:l,tooltipKey:o}=e;if("pendulum"===i&&!x)return null;const s=!!l,c=l&&C[l];return Object(O.jsxs)(Al,{className:["card-opacity-slider",c?"":"inactive"].join(" "),children:[Object(O.jsxs)(Ml,{className:"slider-label",children:[s&&Object(O.jsx)(En.a,{title:o&&null!==(t=b[o])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(O.jsx)(yl.a,{checked:c,onChange:e=>l&&L((t=>({...t,[l]:e.target.checked})))})}),b[r]]}),Object(O.jsx)(Ws.a,{size:"small",min:0,max:100,onChange:e=>L((t=>({...t,[i]:"number"===typeof e?e:100}))),value:null!==(a=C[i])&&void 0!==a?a:100}),Object(O.jsx)(ls,{min:0,max:100,step:5,onChange:e=>L((t=>({...t,[i]:e}))),value:null!==(n=C[i])&&void 0!==n?n:100}),Object(O.jsx)("div",{className:"slider-padding"})]},i)}))]})}));var hc=a(629),gc=a(630);const fc=Dn.b.div`
    align-self: flex-end;
    position: relative;
    min-height: 6px; // Alignment
    .attribute-region-picker {
        position: absolute;
        right: 0;
        top: calc(var(--spacing-xxs) * -1);
        z-index: 1;
    }
    &.container-block .attribute-region-picker {
        position: relative;
        right: 0;
        top: 0;
    }
    .ant-radio-button-wrapper {
        font-size: var(--fs-sm);
        height: unset;
        line-height: 1.25;
    }
`,vc=e=>{let{language:t}=e;const{format:a,region:r,attribute:i,getUpdater:l}=kr(Object(Gi.useShallow)((e=>{let{card:{format:t,region:a,isLink:n,attribute:r},getUpdater:i}=e;return{format:t,region:a,isLink:n,attribute:r,getUpdater:i}}))),{setting:o,updateSetting:s}=Sr(),{showCreativeOption:c,showExtraDecorativeOption:d,showExtraAttribute:u}=o,m=Object(n.useMemo)((()=>l("attribute")),[l]),b=Object(n.useMemo)((()=>l("region")),[l]),p=Object(n.useMemo)((()=>((e,t,a)=>k.map((a=>{var n;let{name:r,nameKey:i,isCreative:l}=a;return{label:r===w?Object(O.jsx)(j.a,{}):Object(O.jsx)(En.a,{overlay:t[i],children:Object(O.jsx)("img",{alt:t[i],src:`/ygocarder/asset/image/attribute/attr-${null===(n=F[e])||void 0===n?void 0:n.fileKey}-${r.toLowerCase()}.png`})}),value:r,isCreative:l}})).filter((e=>{let{isCreative:t}=e;return!1===t||t===a})))(r,t,c)),[r,t,c]),h=Object(n.useMemo)((()=>((e,t,a)=>S.map((a=>{let{name:n,nameKey:r,isCreative:i}=a;return{label:Object(O.jsx)(En.a,{overlay:t[r],children:Object(O.jsx)("img",{alt:t[r],src:`/ygocarder/asset/image/attribute/attr-${e}-${n.toLowerCase()}.png`})}),value:n,isCreative:i}})).filter((e=>{let{isCreative:t}=e;return!1===t||t===a})))(a,t,c)),[a,t,c]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Fl,{className:"fill-input-train span-input-train attribute-input",value:i,onChange:m,optionList:p,suffix:!u&&d?Object(O.jsx)(jl,{onClick:()=>s({showExtraAttribute:!0}),Icon:hc.a,tooltipProps:{overlay:t["button.more.label"]}}):null,children:Object(O.jsx)("span",{children:t["input.attribute.label"]})}),d&&Object(O.jsx)(fc,{className:In("attribute-region-container",u?"container-block":"container-float"),children:Object(O.jsx)(Fl,{className:"attribute-region-picker",optionList:Object.values(F).map((e=>{let{key:t}=e;return{value:t,label:t.toUpperCase()}})),value:r,onChange:b})}),d&&u&&Object(O.jsx)(Fl,{className:"fill-input-train extra-attribute-input",value:i,onChange:m,optionList:h,suffix:d&&u?Object(O.jsx)(jl,{onClick:()=>s({showExtraAttribute:!1}),Icon:gc.a,tooltipProps:{overlay:t["button.less.label"]}}):null,children:"\xa0"})]})};var yc=a(631),xc=a(632),jc=a(633);const Oc=Dn.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
`,wc=Object(Dn.b)(us.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
`,kc=Dn.b.div`
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
`,Sc=e=>{let{disabled:t=!1,className:a,language:n,activeCardIcon:r,showMixableOnly:i=!1,showRemove:l=!1,onChange:o,onRemove:s}=e;const c=i?e=>e.isMixable:()=>!0;return Object(O.jsxs)(kc,{className:In("icon-dropdown-container overlay-event-absorber",t?"selector-disabled":"",a),children:[t&&Object(O.jsx)(Oc,{className:"container-disable-overlay"}),Object(O.jsxs)(wc,{className:"container-group container-star",children:[l&&Object(O.jsxs)(us.Option,{onClick:()=>null===s||void 0===s?void 0:s(),children:[Object(O.jsx)(j.a,{}),"\xa0",n["input.icon-type.remove.label"]]}),B.filter(c).map((e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(us.Option,{className:a===r?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,n[t]]},a)}))]}),Object(O.jsx)(wc,{className:"container-group container-attribute",children:E.filter(c).map((e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(us.Option,{className:a===r?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,n[t]]},a)}))}),Object(O.jsx)(wc,{className:"container-group container-icon",children:W.filter(c).map((e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(us.Option,{className:a===r?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,n[t]]},a)}))})]})},Fc=Dn.b.div`
    margin-bottom: var(--spacing);
`,Cc=Dn.b.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`,Lc=Dn.b.div`
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
`,Tc=Object(n.forwardRef)(((e,t)=>{let{language:a}=e;const{starList:r,setCard:i}=kr(Object(Gi.useShallow)((e=>{let{card:{starList:t},setCard:a}=e;return{starList:t,setCard:a}}))),[l,o]=Object(n.useState)(!1),s=Object(n.useMemo)((()=>e=>{i((t=>{const a=Array.isArray(e)?e:e(t.starList);return{...t,starList:a}}))}),[i]),[{slotList:c,use12:d},u]=Object(n.useState)((()=>{const e=[],t=r.length<=12;for(let a=0;a<A;a++)e.push({slot:`slot-${a}`,index:a,disabled:!1});return t&&(e[12].disabled=!0),{slotList:e,use12:t}})),[m,b]=Object(n.useState)({activeList:[]});Object(n.useImperativeHandle)(t,(()=>({changeStatus:e=>{"open"===e?o(!0):"close"===e?o(!1):"toggle"===e&&o((e=>!e)),b({activeList:[]})}})));const{activeList:p}=m;return Object(O.jsxs)(Bn.a,{className:"global-overlay global-no-close",visible:l,width:506,onCancel:()=>o(!1),cancelText:a["manager.template.button.cancel.label"],okButtonProps:{style:{display:"none"}},children:[Object(O.jsxs)(Fc,{className:"star-list-control-panel",children:[Object(O.jsx)(yl.a,{checked:d,onChange:e=>{e.target.checked?(u((e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!0,index:12,slot:"slot-12"}],use12:!0}})),s((e=>e.slice(0,12))),b((e=>{let{activeList:t}=e;return{activeList:t.filter((e=>12!==e))}}))):(u((e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!1,index:12,slot:"slot-12"}],use12:!1}})),s((e=>function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const n=[...e];for(let r=e.length;r<t;r++)n.push(a);return n}(e,A))))},children:a["input.icon-type.slot.use-12.label"]}),Object(O.jsx)(al.a,{size:"small",onClick:()=>{b((e=>({activeList:c.filter((t=>!e.activeList.includes(t.index)&&!t.disabled)).map((e=>e.index))})))},children:a["input.icon-type.slot.revert.label"]}),"\xa0",Object(O.jsx)(al.a,{size:"small",onClick:()=>{b({activeList:c.filter((e=>!e.disabled)).map((e=>e.index))})},children:a["input.icon-type.slot.select-all.label"]}),"\xa0",Object(O.jsx)(al.a,{size:"small",onClick:()=>{b({activeList:[]})},children:a["input.icon-type.slot.deselect-all.label"]})]}),Object(O.jsx)(Lc,{className:"star-list-container",children:c.map((e=>{let{slot:t,index:a,disabled:n}=e;const i=r[a],l=M[null!==i&&void 0!==i?i:""],o=p.includes(a);return Object(O.jsxs)("div",{className:In("star-list-entry",o?"entry-active":"",n?"entry-disable":""),children:[Object(O.jsx)("div",{className:"checkbox-container",children:Object(O.jsx)(yl.a,{disabled:n,checked:o,onChange:e=>{if(n)return;const t=e.target.checked;b(t?e=>({activeList:[...e.activeList,a]}):e=>({activeList:e.activeList.filter((e=>e!==a))}))}})}),Object(O.jsx)("div",{className:"star-value",onClick:()=>{n||b({activeList:[a]})},children:l?l.icon:Object(O.jsx)(j.a,{})})]},t)}))}),Object(O.jsxs)(Cc,{children:[Object(O.jsxs)(al.a,{size:"small",onClick:()=>{s((e=>[...e.slice(1,e.length),""])),b({activeList:[]})},children:[Object(O.jsx)(gc.a,{}),"\xa0",a["input.icon-type.slot.shift-left.label"]]}),Object(O.jsxs)(al.a,{size:"small",onClick:()=>{s((e=>["",...e.slice(0,e.length-1)])),b({activeList:[]})},children:[a["input.icon-type.slot.shift-right.label"],"\xa0",Object(O.jsx)(hc.a,{})]})]}),Object(O.jsx)(Sc,{disabled:0===p.length,language:a,activeCardIcon:p.length>1?"":r[p[0]],showMixableOnly:!0,showRemove:!0,onRemove:()=>{s((e=>c.filter((e=>!e.disabled)).map(((t,a)=>p.includes(a)?"":e[a]))))},onChange:e=>{s((t=>c.filter((e=>!e.disabled)).map(((a,n)=>p.includes(n)?e:t[n]))))}})]})})),Nc=Dn.b.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`,Rc=Object(Dn.b)(Fl)`
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
`,Ic=Object(Dn.b)(Hl)`
    margin-left: var(--spacing-sm);
`,Bc=Dn.b.div`
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
`,zc=e=>{let{language:t,value:a,onChange:n}=e;return Object(O.jsx)(Fl,{value:a,onChange:n,optionList:[{value:"auto",tooltipProps:{overlay:t["input.icon-type.alignment.auto"]},label:Object(O.jsx)(j.a,{})},{value:"left",tooltipProps:{overlay:t["input.icon-type.alignment.left"]},label:Object(O.jsx)(yc.a,{})},{value:"center",tooltipProps:{overlay:t["input.icon-type.alignment.center"]},label:Object(O.jsx)(xc.a,{})},{value:"right",tooltipProps:{overlay:t["input.icon-type.alignment.right"]},label:Object(O.jsx)(jc.a,{})}]})},Ec=Object(n.forwardRef)(((e,t)=>{let{showCreativeOption:a}=e;const r=_n(),{frame:i,subFamily:l,cardIcon:o,star:s,starList:c,starAlignment:d,getUpdater:u}=kr(Object(Gi.useShallow)((e=>{let{card:{frame:t,subFamily:a,cardIcon:n,star:r,starList:i,starAlignment:l},getUpdater:o}=e;return{frame:t,subFamily:a,cardIcon:n,star:r,starList:i,starAlignment:l,getUpdater:o}}))),m=Sr((e=>e.setting.reduceMotionColor)),b=Object(n.useRef)(null),p=Object(n.useMemo)((()=>u("cardIcon")),[u]),h=Object(n.useMemo)((()=>u("subFamily")),[u]),g=Object(n.useMemo)((()=>u("star")),[u]),f=Object(n.useMemo)((()=>u("starAlignment")),[u]);Object(n.useImperativeHandle)(t,(()=>({})));const v=Sa(i),y="auto"===o?M["none"===v?"auto":v]:M[o],{labelKey:x,icon:w,showIcon:k,value:S}=null!==y&&void 0!==y?y:M.level,F="string"===typeof x?r[x]:x({language:r}),C=a?Object(O.jsxs)(Nc,{children:[k?w:null," ",F," ",Object(O.jsx)(Ds.a,{})]}):F,N=Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)(Sc,{language:r,activeCardIcon:o,onChange:e=>{var t;p(e),"custom"===e&&(null===(t=b.current)||void 0===t||t.changeStatus("open"))}}),placement:"bottomRight",children:Object(O.jsx)("span",{className:`card-icon-dropdown ${"auto"===o?"":"active"} ${a?"":"disabled"}`,children:C})},"icon-type-picker"),R=a?N:C;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Tc,{ref:b,language:r}),"auto"===o&&"none"===v?a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Fl,{className:"fill-input-train",value:o,onChange:p,optionList:B.map((e=>{let{icon:t,value:a,fullLabelKey:n}=e;return{label:null!==t&&void 0!==t?t:Object(O.jsx)(j.a,{}),value:a,tooltipProps:{title:r[n]}}})),children:R}),Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(wc,{className:"container-group container-attribute",children:E.map((e=>{let{fullLabelKey:t,value:a,icon:n}=e;return Object(O.jsxs)(us.Option,{className:a===o?"menu-active":"",onClick:()=>p(a),children:[n?Object(O.jsxs)(O.Fragment,{children:[n,"\xa0"]}):null,r[t]]},a)}))})}),children:Object(O.jsx)(Ic,{$softMode:m,className:a?"":"disabled",children:r["input.attribute.label"]})}),Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(wc,{className:"container-group container-icon",children:W.map((e=>{let{fullLabelKey:t,value:a,icon:n}=e;return Object(O.jsxs)(us.Option,{className:a===o?"menu-active":"",onClick:()=>p(a),children:[n?Object(O.jsxs)(O.Fragment,{children:[n,"\xa0"]}):null,r[t]]},a)}))})}),children:Object(O.jsxs)(Ic,{$softMode:m,className:a?"":"disabled",children:[r["input.attribute.spell"],"\xa0/\xa0",r["input.attribute.trap"]]})}),Object(O.jsx)(Ic,{$softMode:m,className:a?"":"disabled",onClick:()=>{var e;p("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:r["input.icon-type.custom.label"]})]}):null:"st"===S?Object(O.jsx)(Fl,{className:"fill-input-train",value:l,onChange:h,optionList:(I=r,T.map((e=>{let{value:t,nameKey:a}=e;return{label:t===L?Object(O.jsx)(j.a,{}):Object(O.jsx)(En.a,{overlay:I[a],children:Object(O.jsx)("img",{alt:I[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}}))),children:R}):"custom"===S?Object(O.jsxs)(Bc,{className:"custom-star-picker",children:[Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:R}),Object(O.jsxs)("div",{className:"custom-star-content",children:[c.length>0?Object(O.jsx)("div",{className:"custom-star-preview",children:c.map(((e,t)=>{const a=M[e];return Object(O.jsx)("span",{className:"star-preview-entry",children:a?a.icon:Object(O.jsx)(j.a,{})},`${e}-${t}`)}))}):null,Object(O.jsx)(al.a,{size:"small",onClick:()=>{var e;p("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:r["input.icon-type.slot.edit.label"]})]})]}):Object(O.jsx)(Rc,{className:"checkbox-star-train",value:s,onChange:g,optionList:Ns,strict:!0,suffix:a&&Object(O.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(O.jsx)(wo.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:g,placeholder:r["input.icon-type.custom.placeholder"]}),Object(O.jsx)(zc,{language:r,value:d,onChange:f})]}),children:R})]});var I})),Dc=new Set(["1","2","3","4","5"]),Wc=(e,t,a,n,r,i,l)=>{const o=e.substring(a,n),s="\n"===e[n]||!r;let c=o,d=2;switch(t){case"1":i?(c=`[[${o}]]${s?"":"\n"}`,d=s?4:5):(c=`[${o}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${o}}`;break;case"3":c=`{${o}|}`;break;case"4":c=`{${o}||}`,d=3;break;case"5":c=`{{${o}}}`,d=4}l(e.substring(0,a)+`${c}`+e.substring(n,e.length),n+d)},Mc=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var n;const e=document.querySelector(`#${t}`);e&&(null!==(n=e.selectionEnd)&&void 0!==n?n:-1)>=0&&(e.selectionEnd=a)}},{TextArea:Ac}=wo.a,Hc=Object(n.forwardRef)(((e,t)=>{let{id:a,allowHotkey:r,defaultValue:i,onTakePicker:l,onChange:o,onKeyDown:s,className:c,...d}=e;const u=Object(n.useRef)(i),[m,b]=Object(n.useState)(i),[p,h]=Object(n.useState)({id:"",placement:-1}),g=Object(n.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;u.current=t,b(t)}),[]);Object(n.useEffect)((()=>{Mc(p)}),[p]),Object(n.useEffect)((()=>{o({target:{value:m}})}),[m]);const f=e=>{e!==u.current&&g(e)};return Object(n.useImperativeHandle)(t,(()=>({setValue:f,getPickerRef:()=>a?{id:a,setValue:f}:null}))),Object(O.jsx)(Ac,{id:a,autoComplete:"off",onFocus:()=>a&&(null===l||void 0===l?void 0:l({id:a,setValue:f})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,n;if(null===s||void 0===s||s(e),!r)return;const{ctrlKey:i,key:l,metaKey:o}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(n=e.currentTarget.selectionEnd)&&void 0!==n?n:-1;(i||o)&&a&&d!==c&&Dc.has(l)&&(e.preventDefault(),Wc(e.currentTarget.value,l,c,d,!0,e.shiftKey,((e,t)=>{g(e),h({id:a,placement:t})})))},onChange:g,...d})})),$c=Object(n.forwardRef)(((e,t)=>{let{id:a,defaultValue:r,onTakePicker:i,onChange:l,onKeyDown:o,className:s,...c}=e;const{setting:d}=Sr(),{allowHotkey:u}=d,m=Object(n.useRef)(r),[b,p]=Object(n.useState)(r),[h,g]=Object(n.useState)({id:"",placement:-1}),f=Object(n.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;m.current=t,p(t)}),[]);Object(n.useEffect)((()=>{Mc(h)}),[h]),Object(n.useEffect)((()=>{l({target:{value:b}})}),[b]);const v=e=>{e!==b&&f(e)};return Object(n.useImperativeHandle)(t,(()=>({setValue:v}))),Object(O.jsx)(wo.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:v})),allowClear:!0,className:`${a}-input ${s}`,value:b,onKeyDown:e=>{var t,n;if(null===o||void 0===o||o(e),!u)return;const{ctrlKey:r,key:i,metaKey:l}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(n=e.currentTarget.selectionEnd)&&void 0!==n?n:-1;(r||l)&&a&&c!==s&&Dc.has(i)&&(e.preventDefault(),Wc(e.currentTarget.value,i,s,c,!1,e.shiftKey,((e,t)=>{f(e),g({id:a,placement:t})})))},onChange:e=>f(e.target.value),...c})})),Pc=Object(n.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const r=kr((e=>e.getUpdater)),i=Object(n.useRef)(null),l=Object(n.useMemo)((()=>r("effect",void 0,"debounce")),[r]);return Object(n.useEffect)((()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))}),[]),Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t;null===(t=i.current)||void 0===t||t.setValue(e)}}))),Object(O.jsx)(Hc,{ref:i,id:"effect",allowHotkey:!0,defaultValue:kr.getState().card.effect,onChange:l,onTakePicker:a,autoSize:{minRows:9}})})),Kc=Dn.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,Uc=e=>{const t=_n(),{isDuelTerminalCard:a,isFirstEdition:r,isSpeedCard:i,isLimitedEdition:l,isLegacyCard:o,setCard:s}=kr(Object(Gi.useShallow)((e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}))),c=Object(n.useCallback)((e=>s((t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}))),[s,o]),d=Object(n.useCallback)((e=>s((t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}))),[s,o]),u=Object(n.useCallback)((e=>s((t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}))),[s,o]),m=Object(n.useCallback)((e=>s((t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}))),[s,o]),b=Object(n.useCallback)((e=>s((t=>{const a=e.target.checked,{isDuelTerminalCard:n,isFirstEdition:r,isLimitedEdition:i,isSpeedCard:l}=t;let o=!1,s=!1,c=!1,d=!1;return a?(s=r,d=!s&&l,o=!d&&!s&&n,c=!(o||s||c)&&i):(s=r,c=!s&&i,d=l,o=!d&&n),{...t,isLegacyCard:a,isDuelTerminalCard:o,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}))),[s]);return Object(O.jsxs)(Kc,{className:"checkbox-input",children:[Object(O.jsx)(En.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(O.jsx)(yl.a,{className:"input-legacy",onChange:b,checked:o,tabIndex:0,children:t["input.legacy.label"]})}),Object(O.jsx)(yl.a,{className:"input-1st",onChange:c,checked:r,tabIndex:0,children:t["input.1st-edition.label"]}),Object(O.jsx)(yl.a,{className:"input-limited",onChange:d,checked:l,tabIndex:0,children:t["input.limited-edition.label"]}),Object(O.jsx)(yl.a,{className:"input-speed",onChange:m,checked:i,tabIndex:0,children:t["input.speed-duel.label"]}),Object(O.jsx)(yl.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var Yc=a(634);const Gc=Object(Dn.b)(us.Container)`
    padding: var(--spacing-xs);
    position: relative;
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 480px;
        .radio-train-input-group {
            gap: var(--spacing);
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
    ${nc}
`,Xc=Dn.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,Vc=Dn.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,qc=Object(Dn.b)(Fl)`
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
`,_c=Dn.b.div`
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
`,Jc=Object(Dn.b)(Xc)`
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
`,Qc=Object(n.forwardRef)(((e,t)=>{let{isMonster:a,showCreativeOption:r,onTakePicker:i}=e;const l=_n(),{isLink:o,linkRating:s,autoLinkRating:c,showDefAndLink:d,linkRatingDisplayMode:u,sticker:m,format:b,getUpdater:p}=kr(Object(Gi.useShallow)((e=>{let{card:{sticker:t,format:a,flag:n,isLink:r,linkRating:i,linkMap:l},getUpdater:o}=e;return{linkRating:i,autoLinkRating:l.length,isLink:r,sticker:t,format:a,showDefAndLink:1===n[J],linkRatingDisplayMode:n[Q],getUpdater:o}}))),h=Object(n.useRef)(null),g=Object(n.useRef)(null),f=Object(n.useRef)(null),v=Object(n.useRef)(null),y=Object(n.useRef)(null),x=!0,j=Ta(u,o),w=!j||d,k=[x,w,j].filter((e=>!0===e)).length%2===1,S=b&&Ce[b]?Ce[b]:Ce.tcg,F=Object(n.useMemo)((()=>p("atk",(e=>e))),[p]),C=Object(n.useMemo)((()=>p("def",(e=>e))),[p]),L=Object(n.useMemo)((()=>p("linkRating",(e=>e))),[p]),T=Object(n.useMemo)((()=>p("password",void 0,"debounce")),[p]),N=Object(n.useMemo)((()=>p("sticker")),[p]),R=Object(n.useMemo)((()=>p("creator",void 0,"debounce")),[p]);return Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,n,r,i;let{password:l,creator:o,atk:s,def:c,linkRating:d}=e;"string"===typeof s&&(null===(t=f.current)||void 0===t||t.setValue(s)),"string"===typeof c&&(null===(a=v.current)||void 0===a||a.setValue(c)),"string"===typeof l&&(null===(n=h.current)||void 0===n||n.setValue(l)),"string"===typeof o&&(null===(r=g.current)||void 0===r||r.setValue(o)),"string"===typeof d&&(null===(i=y.current)||void 0===i||i.setValue(d))}}))),Object(O.jsxs)(_c,{className:"card-footer-input",children:[(a||r)&&Object(O.jsxs)(O.Fragment,{children:[x&&Object(O.jsx)($c,{ref:f,id:"atk",addonBefore:l["input.atk.label"],defaultValue:kr.getState().card.atk,onChange:F,onTakePicker:i}),w&&Object(O.jsx)($c,{ref:v,id:"def",addonBefore:l["input.def.label"],defaultValue:kr.getState().card.def,onChange:C,onTakePicker:i}),k&&Object(O.jsx)("div",{}),j&&Object(O.jsx)($c,{ref:y,id:"link",addonBefore:Object(O.jsxs)(Jc,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.link.label"]}),Object(O.jsx)(En.a,{title:l["input.link.auto.tooltip"],children:Object(O.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof s&&s.length>0?Object(O.jsx)(yl.a,{onChange:e=>{e.target.checked&&(L(""),y.current.setValue(""))}}):Object(O.jsx)("div",{className:"auto-link-rating",children:o?c:"-"})})})]}),defaultValue:`${kr.getState().card.linkRating}`,onChange:L,onTakePicker:i,placeholder:l["input.link.custom.placeholder"]})]}),Object(O.jsx)($c,{ref:h,id:"password",addonBefore:Object(O.jsxs)(Xc,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.password.label"]}),Object(O.jsx)(jl,{onClick:()=>{var e;return null===(e=h.current)||void 0===e?void 0:e.setValue(`${Sn("0123456789",8)}`)},Icon:Vs.a,tooltipProps:{overlay:l["button.randomize.label"]}})]}),defaultValue:kr.getState().card.password,onChange:T,onTakePicker:i}),Object(O.jsx)($c,{ref:g,id:"creator",addonBefore:Object(O.jsxs)(Xc,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.copyright.label"]}),Object(O.jsx)(nl.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(O.jsx)(Go.a,{onClick:e=>e.domEvent.stopPropagation(),children:S.map(((e,t)=>Object(O.jsx)(Go.a.Item,{onClick:()=>{var t;null===(t=g.current)||void 0===t||t.setValue(e)},children:e},`${t}`)))}),children:Object(O.jsx)("div",{children:Object(O.jsx)(jl,{onClick:()=>{},Icon:Yc.a})})})]}),defaultValue:kr.getState().card.creator,onChange:R,onTakePicker:i}),Object(O.jsx)(Uc,{}),Object(O.jsx)(Fl,{className:"sticker-input fill-input-train",value:m,onChange:N,optionList:Rs,children:Object(O.jsx)("span",{children:l["input.sticker.label"]})})]})})),Zc=Dn.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,ed=Object(Dn.b)(Fl)`
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
`,td=Object(Dn.b)(us.Option)`
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
`,ad=e=>{let{finishValueList:t,changeFinish:a,language:r,showCreativeOption:i}=e;const[l,o]=Object(n.useState)(f.art.key),s={[f.attribute.key]:t[1],[f.background.key]:t[4],[f.icon.key]:t[2],[f.sticker.key]:t[3],[f.art.key]:t[0]},c=Object.values(s).some((e=>"normal"!==e)),d=Object(n.useMemo)((()=>{return e=r,Object.values(f).map((t=>{let{key:a,labelKey:n}=t;return{label:e[n],value:a}}));var e}),[r]),u=i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:[r["input.finish.label"],":"]}),"\xa0",r[f[l].labelKey]," ",Object(O.jsx)(Ds.a,{})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:[r["input.finish.label"],":"]}),"\xa0",r[f[l].labelKey]]}),m=Object(O.jsx)(pl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(us.Container,{children:[Object(O.jsx)(ds,{children:r["input.other-finish.label"]}),d.map((e=>{let{label:t,value:a}=e;return Object(O.jsxs)(td,{className:In("normal"===s[a]?"default":"",l===a?"menu-active":""),onClick:()=>{o(a)},children:[Object(O.jsx)("div",{className:"value",children:Object(O.jsx)("div",{className:"tag",children:"normal"===s[a]||""===s[a]?"Auto":s[a]})}),Object(O.jsx)("div",{className:"label",children:t})]},a)}))]})}),placement:"bottomRight",children:Object(O.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${i?"":"disabled"}`,children:u})},"icon-type-picker");return Object(O.jsx)(ed,{className:"art-finish-checkbox fill-input-train",value:s[l],onChange:e=>{const t={...s};t[l]=`${e}`,a(t)},optionList:Ls,children:m})},nd=Object(n.forwardRef)(((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:r,receivingCanvas:i,onSourceLoaded:l,onTainted:o,onCropChange:s}=e;const c=_n(),{opacity:d,artFinish:u,otherFinish:b,linkMap:p,isPendulum:h,pendulumSize:g,isLink:v,art:y,artCrop:x,artData:j,artSource:w,artFit:k,getUpdater:S,setCard:F}=kr(Object(Gi.useShallow)((e=>{let{card:{opacity:t,artFinish:a,otherFinish:n,linkMap:r,isPendulum:i,pendulumSize:l,isLink:o,art:s,artCrop:c,artData:d,artSource:u,artFit:m},getUpdater:b,setCard:p}=e;return{opacity:t,artFinish:a,otherFinish:n,linkMap:r,isPendulum:i,pendulumSize:l,isLink:o,art:s,artCrop:c,artData:d,artSource:u,artFit:m,getUpdater:b,setCard:p}}))),C=Object(n.useRef)(null),L=Object(n.useMemo)((()=>S("linkMap")),[S]),T=Object(n.useCallback)((e=>F((t=>({...t,isLink:e})))),[F]),N=Object(n.useMemo)((()=>S("art")),[S]),R=Object(n.useMemo)((()=>S("artData")),[S]),I=Object(n.useCallback)((e=>F((t=>({...t,artFit:e})))),[F]),B=Object(n.useMemo)((()=>S("artSource")),[S]),z=Object(n.useMemo)((()=>S("artFinish")),[S]),E=Object(n.useMemo)((()=>S("otherFinish")),[S]),D=Object(n.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&F((t=>({...t,artCrop:e})),a)}),[s,F]);return Object(n.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=C.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:n,artSource:r}=e;var i,l;"offline"===r?"string"===typeof n&&a&&(null===(i=C.current)||void 0===i||i.forceSource("offline",n,a)):"string"===typeof t&&a&&(null===(l=C.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(O.jsx)(is,{ref:C,title:c["input.card-art.label"],defaultSourceType:w,defaultExternalSource:y,defaultInternalSource:j,defaultCropInfo:x,forceFit:k,receivingCanvas:i,onSourceChange:(e,t)=>{B(e),"offline"===e?R(t):N(t)},onCropChange:D,onTainted:o,onSourceLoaded:l,onForceFitChange:I,onMaxSizeExceeded:e=>{zn.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(h,d,void 0,g).ratio,beforeCropper:a?Object(O.jsx)(ad,{finishValueList:[u,...b],changeFinish:e=>{z(e[f.art.key]),E([e[f.attribute.key],e[f.icon.key],e[f.sticker.key],e[f.background.key]])},language:c,showCreativeOption:r}):null,children:Object(O.jsx)(Zc,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(O.jsx)(Yo,{active:!0===v,defaultValue:p,onChange:L,onStatusChange:T},`link-${JSON.stringify(p)}`)})})})),rd=Dn.b.div`
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
`,id=Dn.b.span`
    cursor: pointer;
`,ld=Object(n.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const r=_n(),{name:i,format:l,getUpdater:o}=kr(Object(Gi.useShallow)((e=>{let{card:{name:t,format:a},getUpdater:n}=e;return{name:t,format:a,getUpdater:n}}))),s=Object(n.useRef)(null),c=Object(n.useRef)(null),d=Object(n.useMemo)((()=>o("setId")),[o]),u=Object(n.useMemo)((()=>o("name",void 0,"debounce")),[o]);return Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;let{name:n,setId:r}=e;"string"===typeof n&&(null===(t=s.current)||void 0===t||t.setValue(n)),"string"===typeof r&&(null===(a=c.current)||void 0===a||a.setValue(r))}}))),Object(O.jsxs)(rd,{className:"name-id-input",children:[Object(O.jsx)($c,{ref:s,id:"name",defaultValue:i,addonBefore:Object(O.jsx)(En.a,{title:r["input.name.tooltip"],children:Object(O.jsx)(id,{onClick:()=>{navigator.clipboard.writeText(Ya(i))},children:r["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(O.jsx)($c,{ref:c,id:"set-id",defaultValue:kr.getState().card.setId,addonBefore:Object(O.jsxs)(Xc,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:r["input.set-id.label"]}),Object(O.jsx)(jl,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>Sn("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+Sn("0000000000111111111122222222223456789",1)+Sn("0123456789",2))(l))},Icon:Vs.a,tooltipProps:{overlay:r["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})}));var od=a(635);const sd=Dn.b.div`
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
`,cd=()=>{const e=_n(),{flag:t,setCard:a}=kr(Object(Gi.useShallow)((e=>{let{card:{flag:t},setCard:a,getUpdater:n}=e;return{flag:t,setCard:a,getUpdater:n}}))),n=(e,t)=>a((a=>{const n=[...a.flag];return n[t]=e,{...a,flag:n}}));return Object(O.jsx)(sd,{children:t.map(((t,a)=>{var r;const{labelKey:i,type:l}=null!==(r=_[a])&&void 0!==r?r:{};return"checkbox"===l?Object(O.jsx)("div",{children:Object(O.jsx)(yl.a,{checked:0!==t,onChange:e=>{const t=e.target.checked?1:0;n(t,a)},children:e[i]})},i):"link-rating-behavior"===l?Object(O.jsx)(Fl,{className:"link-rating-behavior-panel",onChange:e=>n(Number(e),a),optionList:[{label:e["input.flag.link-rating-behavior.auto"],value:0},{label:e["input.flag.link-rating-behavior.show"],value:1},{label:e["input.flag.link-rating-behavior.hide"],value:2}],value:t,suffix:Object(O.jsx)("label",{children:e[i]})},i):null}))})},{width:dd,height:ud}=s,md=Dn.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${Gc} {
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
`,bd=Dn.b.div`
    /** Ensure even width */
    --layout-width: ${e=>2*Math.round(e.$width/2)}px;
    --layout-height: ${e=>e.$height}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
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
        cursor: pointer;
        padding: 0;
        &.unmodified .overlay-patch {
            background: var(--gradient-diagonal-stripe);
        }
    }
    .partial-layout {
        background-clip: padding-box;
        ${e=>e.$hoverable?"\n                border: var(--bw) solid var(--main-level-1);\n                &.active {\n                    border: var(--bw) dashed var(--main-level-1);\n                }\n                &:hover {\n                    border: var(--bw) dashed var(--main-level-2);\n                }\n            ":""}
    }
    .float-layout {
        ${e=>e.$hoverable?"\n                border: var(--bw) solid var(--main-level-1);\n                &.active {\n                    border: var(--bw) dashed var(--main-level-2);\n                    box-shadow: 0 0 1px 0 var(--main-level-1);\n                }\n                &:hover {\n                    border: var(--bw) solid var(--main-level-2);\n                    box-shadow: 0 0 1px 0 var(--main-level-1);\n                }\n            ":""}
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
`,pd=e=>{let{tabIndex:t=0,width:a,height:n,baseLayoutState:r,resolvedLayoutState:i,isPendulum:l,activeLayout:o,dyeList:s,foil:c,onClick:d,language:u,vertical:m=!1}=e;return Object(O.jsxs)(bd,{$width:a,$height:n,$hoverable:!!d,className:In("card-layout-container",m?"is-vertical":"is-horizontal"),children:[[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map((e=>{var n;let{className:c,key:u}=e;const m=i[u],b=null==x[u]?void 0:s[x[u]];if(!m)return null;if(!l&&"pendulumEffectBackground"===u)return null;const{labelBackgroundColor:p,labelBackgroundImage:h}=null!==(n=Re[m])&&void 0!==n?n:{};return Object(O.jsx)("button",{...t<0?{}:{tabIndex:t},className:In(c,u===o?"active":"","auto"===(null===r||void 0===r?void 0:r[u])?"unmodified":""),onClick:()=>null===d||void 0===d?void 0:d(u),style:h?{backgroundImage:h}:{backgroundColor:p},children:Object(O.jsx)("div",{className:"overlay-patch",style:b?{boxShadow:`0 0 0 ${Math.round(a/16)}px ${b} inset`}:{}})},u)})),Object(O.jsx)("button",{...t<0?{}:{tabIndex:t},className:In("card-layout float-layout foil","foil"===o?"active":""),onClick:()=>null===d||void 0===d?void 0:d("foil"),style:{boxShadow:`0 0 0 2px ${mn.test(s[x.foil])?s[x.foil]:v[c].color} inset`},children:u["input.foil.label"]})]})},hd=Object(n.forwardRef)(((e,t)=>{var a,r;let{frameList:i,onFrameChange:l,onCancel:o}=e;const s=_n(),{isPendulum:c,foil:d,frame:u,leftFrame:m,rightFrame:b,pendulumFrame:p,pendulumRightFrame:h,effectBackground:g,pendulumEffectBackground:f,dyeList:v,setCard:y,getUpdater:j}=kr(Object(Gi.useShallow)((e=>{let{card:{isPendulum:t,foil:a,frame:n,leftFrame:r,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,dyeList:s,effectStyle:c,pendulumStyle:d},setCard:u,getUpdater:m}=e;return{isPendulum:t,foil:a,frame:n,leftFrame:r,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,effectBackground:c.background,pendulumEffectBackground:d.background,dyeList:s,setCard:u,getUpdater:m}}))),w=Object(n.useRef)({topLeftFrame:"auto"===p?"spell":p,topRightFrame:"auto"===p?"spell":p,bottomLeftFrame:"auto"===p?"spell":p,bottomRightFrame:"auto"===p?"spell":p,effectBackground:"auto"===p?"spell":p,pendulumEffectBackground:"auto"===p?"spell":p}),[k,S]=Object(n.useState)(0),[F,C]=Object(n.useState)("frame"),L="frame-layout-main",T=Object(n.useMemo)((()=>Cs({normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]})),[s]);Object(n.useEffect)((()=>{"pendulumEffectBackground"!==F||c||C("frame")}),[F,c]),Object(n.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=document.getElementById(L))||void 0===e?void 0:e.focus()}})));const N=Object(n.useMemo)((()=>j("foil")),[j]),R=Object(n.useMemo)((()=>j("pendulumFrame")),[j]),I=Object(n.useMemo)((()=>j("pendulumRightFrame")),[j]),B=Object(n.useMemo)((()=>j("leftFrame")),[j]),z=Object(n.useMemo)((()=>j("rightFrame")),[j]),E=e=>y((t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}})),D=e=>y((t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}})),W=Object(n.useMemo)((()=>j("dyeList")),[j]),M=e=>{"bottomLeftFrame"===F&&R(e),"bottomRightFrame"===F&&I(e),"topLeftFrame"===F&&B(e),"topRightFrame"===F&&z(e),"effectBackground"===F&&E(e),"pendulumEffectBackground"===F&&D(e)},A={frame:u,topLeftFrame:m,topRightFrame:b,bottomLeftFrame:p,bottomRightFrame:h,effectBackground:g,pendulumEffectBackground:f},H=A[F],$=Na(A,c),P=x[F];return Object(O.jsxs)(md,{children:[Object(O.jsxs)("div",{className:"visual-preview-container",children:[Object(O.jsx)("label",{children:s["input.advanced-frame.main.label"]}),Object(O.jsx)(Oo,{id:L,tabIndex:0,className:"frame"===F?"active":"",...null!==(a=Re[u])&&void 0!==a?a:Be,onClick:()=>C("frame")}),Object(O.jsx)("label",{children:s["input.advanced-frame.detailed.label"]}),Object(O.jsx)(pd,{width:2*Math.round(dd/20),height:2*Math.round(ud/20),isPendulum:c,baseLayoutState:A,resolvedLayoutState:$,activeLayout:F,onClick:e=>C(e),dyeList:v,foil:d,language:s,vertical:!0}),Object(O.jsx)(al.a,{size:"small",type:"primary",onClick:()=>{R("auto"),I("auto"),B("auto"),z("auto"),E("auto"),D("auto"),N("normal"),W(["","","","","","",""])},children:s["button.reset.label"]})]}),Object(O.jsx)("div",{children:Object(O.jsxs)(Gc,{className:"pendulum-frame-picker",...kn({stopPropagation:!0,optionLength:i.length,setFocus:S,onTrigger:()=>{k>=0&&M(i[k].value)},onCancel:o}),children:[Object(O.jsx)("div",{className:"frame-part-name",children:s[null===(r=ze[F])||void 0===r?void 0:r.labelKey]}),"foil"!==F&&Object(O.jsx)(yl.a,{className:In("inline-input","frame"===F?"checkbox-disabled":""),checked:"auto"===H,disabled:"frame"===F,onChange:e=>{var t;M(e.target.checked?"auto":null!==(t=w.current[F])&&void 0!==t?t:"auto")},children:s["input.frame.auto"]}),"foil"===F?Object(O.jsx)(Fl,{className:"foil-radio",value:d,onChange:N,optionList:T,children:Object(O.jsx)("span",{children:s["input.foil.label"]})}):Object(O.jsx)(Fl,{className:"frame-radio",value:H,onChange:e=>{"frame"===F?l(e):M(e)},optionList:i}),"number"===typeof P&&Object(O.jsx)(Bo,{value:v[P],onChange:e=>{e!==v[P]&&((e,t)=>{y((a=>{const n=x[t];if("number"!==typeof n)return a;const r=[...a.dyeList];return r[n]=e,{...a,dyeList:r}}))})(e,F)},children:s["input.advanced-frame.dye"]})]})})]})})),gd=[{..._[0],valueDisplay:(e,t)=>e["input.flag.mix-def-link"],sampleDisplay:e=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.mix-def-link"],":",Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)(Bl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Bl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{..._[1],valueDisplay:(e,t)=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.link-rating-behavior"],": ",e[1===t?"input.flag.link-rating-behavior.show":"input.flag.link-rating-behavior.hide"]]}),sampleDisplay:e=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.link-rating-behavior"],":",Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)(Bl,{data:0,children:0}),": ",e["input.flag.link-rating-behavior.auto"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Bl,{data:1,children:1}),": ",e["input.flag.link-rating-behavior.show"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Bl,{data:2,children:2}),": ",e["input.flag.link-rating-behavior.hide"]]})]})]})}],{width:fd,height:vd}=s,yd=Dn.b.div`
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
`,xd=Dn.b.div`
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
`,jd=Object(n.forwardRef)(((e,t)=>{let{softMode:a,showCreativeOption:r,showExtraDecorativeOption:i,onTakePicker:l,onFrameChange:o}=e;const s=_n(),{isPendulum:c,frame:d,foil:u,leftFrame:m,rightFrame:b,pendulumFrame:p,pendulumRightFrame:h,effectBackground:g,pendulumEffectBackground:f,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,dyeList:j,flag:w,setCard:k,getUpdater:S}=kr(Object(Gi.useShallow)((e=>{let{card:{isPendulum:t,frame:a,foil:n,leftFrame:r,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectStyle:u,pendulumStyle:m,dyeList:b,flag:p},setCard:h,getUpdater:g}=e;return{isPendulum:t,frame:a,foil:n,leftFrame:r,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectBackground:u.background,pendulumEffectBackground:m.background,dyeList:b,flag:p,setCard:h,getUpdater:g}}))),{mirrorPendulumScale:F,updateSetting:C}=Sr(Object(Gi.useShallow)((e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}}))),L=Object(n.useRef)(null),T=Object(n.useRef)(null),N=Object(n.useRef)(null),[R,I]=Object(n.useState)(!1),B=Object(n.useMemo)((()=>S("pendulumScaleRed")),[S]),z=Object(n.useMemo)((()=>S("pendulumScaleBlue")),[S]),E=Object(n.useMemo)((()=>S("pendulumSize")),[S]),D=Object(n.useMemo)((()=>S("pendulumEffect",void 0,"debounce")),[S]),W=Object(n.useMemo)((()=>{return e=s,Object.values(G).map((t=>{let{key:a,labelKey:n}=t;return{label:e[n],value:a}}));var e}),[s]),M=Object(n.useMemo)((()=>Ts().filter((e=>i||"normal"===e.edition))),[i]);Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=N.current)||void 0===t||t.setValue(a))}})));const A={frame:d,topLeftFrame:m,topRightFrame:b,bottomLeftFrame:p,bottomRightFrame:h,effectBackground:g,pendulumEffectBackground:f},H=w.map(((e,t)=>{const a=gd[t];return 0!==e&&a?Object(O.jsx)("li",{children:a.valueDisplay(s,e)},a.labelKey):null})).filter((e=>null!=e));return Object(O.jsxs)(xd,{className:"pendulum-input",children:[Object(O.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(O.jsx)("div",{className:"pendulum-checkbox",children:Object(O.jsx)(yl.a,{onChange:e=>k((t=>({...t,isPendulum:e.target.checked}))),checked:c,children:s["input.pendulum.label"]})}),Object(O.jsxs)("div",{className:"pendulum-option-container",children:[r&&Object(O.jsx)(pl.a,{visible:R,onVisibleChange:I,trigger:["click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(O.jsxs)("div",{className:"overlay-event-absorber",children:[Object(O.jsx)(hd,{ref:T,isPendulum:c,frameList:M,pendulumFrame:p,onFrameChange:o,onCancel:()=>{var e;I(!1),null===(e=L.current)||void 0===e||e.focus()}}),Object(O.jsx)(cd,{})]}),children:Object(O.jsxs)(yd,{ref:L,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return I(!0),setTimeout((()=>{var e;null===(e=T.current)||void 0===e||e.focus()}),200),!1},children:[Object(O.jsx)("span",{className:"pendulum-frame-label",children:s["input.advanced-frame.label"]}),Object(O.jsx)("div",{className:"card-layout-preview-container",children:Object(O.jsx)(pd,{width:Math.round(30*fd/vd),height:30,isPendulum:c,resolvedLayoutState:Na(A,c),tabIndex:-1,dyeList:j,foil:u,language:s})}),H.length>0?Object(O.jsx)(Dl,{content:Object(O.jsxs)(El,{children:[s["input.flag.effective.label"],Object(O.jsx)("ul",{children:H})]}),children:Object(O.jsx)(od.a,{})}):null,Object(O.jsx)(Ds.a,{})]})}),c&&r&&Object(O.jsx)("div",{className:"pendulum-size",children:Object(O.jsx)(pl.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(us.Container,{children:W.map((e=>{let{value:t,label:a}=e;return Object(O.jsx)(us.Option,{className:x===t?"menu-active":"",onClick:()=>{E(t)},children:a},t)}))})}),placement:"bottomLeft",children:Object(O.jsx)(Hl,{$softMode:a,$active:x!==q,children:s[G[x].labelKey]})},"color-picker")}),c&&r&&Object(O.jsx)(yl.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;C({mirrorPendulumScale:t}),t&&B(v)},checked:F,children:s["input.mirror-scale.label"]})]})]}),c&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(wo.a,{addonBefore:Object(O.jsx)("span",{children:s["input.scale.label"](Object(O.jsx)("span",{className:"blue-scale",children:s["input.scale.blue.label"]},"blue-scale"))}),value:v,allowClear:!0,onChange:e=>{z(e),F&&B(e)}})}),Object(O.jsx)("div",{children:Object(O.jsx)(wo.a,{addonBefore:Object(O.jsx)("span",{children:s["input.scale.label"](Object(O.jsx)("span",{className:"red-scale",children:s["input.scale.red.label"]},"red-scale"))}),value:y,allowClear:!0,onChange:e=>{F&&z(e),B(e)}})}),Object(O.jsx)("div",{className:"joined-row",children:Object(O.jsx)(Hc,{ref:N,id:"pendulum-effect",allowHotkey:!0,defaultValue:kr.getState().card.pendulumEffect,onChange:D,onTakePicker:l,autoSize:{minRows:5}})})]})]})})),Od=Dn.b.div`
    &.first-line,
    &.second-line {
        display: flex;
        flex-wrap: wrap;
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
    .line-input {
        flex: 0 0 auto;
        display: inline-grid;
        grid-template-columns: var(--width-label) max-content max-content;
        gap: var(--spacing-sm);
        align-items: center;
        .ant-input-number {
            width: 65px;
        }
    }
    .formatting-help-button,
    .input-kanji-helper {
        flex: 0 0 auto;
    }
    .formatting-help-button {
        grid-area: help-button;
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
`,wd=Object(n.forwardRef)(((e,t)=>{var a;let{onTakePicker:r}=e;const i=_n(),{frame:l,cardIcon:o,format:s,furiganaHelper:c,condenseTolerant:d,setCard:u,getUpdater:m}=kr(Object(Gi.useShallow)((e=>{let{card:{frame:t,cardIcon:a,format:n,furiganaHelper:r,effectStyle:i},setCard:l,getUpdater:o}=e;return{frame:t,cardIcon:a,format:n,furiganaHelper:r,condenseTolerant:null===i||void 0===i?void 0:i.condenseTolerant,setCard:l,getUpdater:o}}))),b=Sr((e=>e.setting.showExtraDecorativeOption)),p="ocg"===s?"\uff0f":"/",h=Object(n.useRef)(null),[g,f]=Object(n.useState)((()=>kr.getState().card.effectStyle.minLine)),[v,y]=Object(n.useState)((()=>kr.getState().card.pendulumStyle.minLine)),x=Object(n.useMemo)((()=>m("typeAbility",(e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map((e=>`${e}`.trim())).filter((e=>"string"===typeof e&&e.length>0))),"debounce")),[m]),j=Object(n.useCallback)((e=>u((t=>({...t,furiganaHelper:e.target.checked})))),[u]);Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&u((e=>{const t={...e.effectStyle,minLine:g},a={...e.pendulumStyle,minLine:v};return{...e,effectStyle:t,pendulumStyle:a}}))}),500),()=>{e=!1}}),[g,v,u]),Object(n.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{typeAbility:a,effectMinLine:n,pendulumEffectMinLine:r}=e;a&&(null===(t=h.current)||void 0===t||t.setValue(a.join(p))),"number"===typeof n&&f(n),"number"===typeof r&&y(r)}})));const w="auto"===o?ka({frame:l})?"input.type.monster.label":"input.type.st.label":"st"===(null===(a=I[o])||void 0===a?void 0:a.value)?"input.type.st.label":"input.type.monster.label",k="ocg"===s;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(Od,{className:`post-pendulum-input first-line variant-${s}`,children:[Object(O.jsx)($c,{ref:h,addonBefore:i[w],id:"type-ability",defaultValue:kr.getState().card.typeAbility.join(p),onChange:x,onTakePicker:r}),k&&Object(O.jsx)(En.a,{overlay:i["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(O.jsx)(yl.a,{className:"input-kanji-helper",onChange:j,checked:c,children:i["input.furigana-helper.label"]})}),Object(O.jsx)(yo,{})]}),Object(O.jsxs)(Od,{className:`post-pendulum-input second-line variant-${s}`,children:[Object(O.jsx)(Fl,{className:"condense-input",value:`${d}`,onChange:e=>(e=>{u((t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}})))})(e),optionList:Is,children:Object(O.jsxs)("span",{children:[i["input.condense.label"]," ",Object(O.jsx)(fl,{content:Object(O.jsx)(El,{children:i["input.condense.tooltip"]})})]})}),b&&Object(O.jsxs)("div",{className:"line-input",children:[Object(O.jsx)("div",{children:i["input.text-style.min-line.label"]}),Object(O.jsx)(Ws.a,{id:"effect-line",value:g,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>f("number"===typeof e?e:0),min:0,max:50}),Object(O.jsx)(Ws.a,{id:"pendulum-effect-line",value:v,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>y("number"===typeof e?e:0),min:0,max:50})]})]})]})})),kd=Dn.b.div`
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
`,Sd=Dn.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-px);
    &.custom-style-picker {
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
`,Fd={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},Cd=()=>{const e=_n(),{format:t,effectStyle:a,effectTextStyle:n,otherTextStyle:r,pendulumStyle:i,pendulumTextStyle:l,setCard:o,statTextStyle:s,typeTextStyle:c}=kr(Object(Gi.useShallow)((e=>{let{card:{format:t,effectStyle:a,effectTextStyle:n,otherTextStyle:r,pendulumStyle:i,pendulumTextStyle:l,statTextStyle:o,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:n,otherTextStyle:r,pendulumStyle:i,pendulumTextStyle:l,setCard:c,statTextStyle:o,typeTextStyle:s}}))),d=[{info:Fd.effectTextStyle,value:n,extraValue:a},{info:Fd.pendulumTextStyle,value:l,extraValue:i},{info:Fd.statTextStyle,value:s},{info:Fd.typeTextStyle,value:c},{info:Fd.otherTextStyle,value:r}];return Object(O.jsx)(pl.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Sd,{className:"custom-style-picker",children:d.map((a=>{let{info:n,value:r,extraValue:i}=a;const{keyName:l,labelKey:s,extraKeyname:c}=n,[d,u,m,b]=r,{upSize:p,fontStyle:h}=null!==i&&void 0!==i?i:{};return Object(O.jsxs)("div",{className:"style-section",children:[Object(O.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(O.jsx)("span",{children:e[s]}),Object(O.jsx)(yl.a,{checked:d,onChange:e=>{o((t=>{const a=e.target.checked;return{...t,[l]:[a,...r.slice(1)]}}))},children:e["input.text-style.custom.label"]})]}),d&&Object(O.jsxs)("div",{className:"style-picker-section",children:["string"===typeof h&&"tcg"===t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("h2",{className:"font-style-picker",children:[Object(O.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(O.jsx)(Fl,{className:"inline-radio-train",value:h,optionList:[{label:Object(O.jsx)(j.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{o((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t}))}})]})}),"number"===typeof p&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("h2",{className:"size-picker",children:[Object(O.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(O.jsx)(Fl,{className:"inline-radio-train",value:p,optionList:[{label:Object(O.jsx)(j.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{o((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t}))}})]})}),Object(O.jsx)("h2",{children:Object(O.jsx)(yl.a,{className:"shadow-checkbox",checked:m,onChange:e=>{o((t=>{const a=e.target.checked;return{...t,[l]:[...r.slice(0,2),a,r[3]]}}))},children:Object(O.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(O.jsx)(Fo,{value:b,onChange:e=>o((t=>({...t,[l]:[...r.slice(0,3),e]})))}),Object(O.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(O.jsx)(Co.b,{colors:At,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{o((t=>({...t,[l]:[r[0],e.hex,...r.slice(2,4)]})))}})]})]},l)}))})}),children:Object(O.jsxs)(kd,{className:"text-style-preview",children:[Object(O.jsx)("div",{className:"text-style-grid",children:d.map((e=>{let{info:t,value:a,extraValue:n}=e;const{keyName:r}=t,[i,l,o,s]=a,{upSize:c,fontStyle:d}=null!==n&&void 0!==n?n:{};return Object(O.jsx)("div",{className:"text-style-preview-section",style:{background:i?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==l&&void 0!==l?l:"").length&&i?l:"var(--color-contrast)",textShadow:i&&o?`0 0 2px ${s}`:"none",fontStyle:i&&"italic"===d?"italic":"normal"},children:c&&i?Object(O.jsxs)("div",{children:["+",c]}):"Auto"},r)}))}),Object(O.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(571);const Ld=Object(n.forwardRef)(((e,t)=>{let{artworkCanvas:a,backgroundCanvas:r,onCropChange:i,onTainted:l,onSourceLoaded:o}=e;const s=_n(),{format:c,frame:d,foil:u,finish:m,opacity:b,nameStyleType:p,nameStyle:g,getUpdater:f,setCard:v}=kr(Object(Gi.useShallow)((e=>{let{card:{format:t,frame:a,foil:n,finish:r,opacity:i,nameStyleType:l,nameStyle:o,isLink:s},getUpdater:c,setCard:d}=e;return{format:t,frame:a,foil:n,finish:r,opacity:i,nameStyleType:l,nameStyle:o,isLink:s,getUpdater:c,setCard:d}}))),{setting:y}=Sr(),{showCreativeOption:x,showExtraDecorativeOption:j,reduceMotionColor:w}=y,k=Object(n.useRef)(null),S=ka({frame:d}),[F,C]=Object(n.useState)(0),L=Object(n.useMemo)((()=>Cs({normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]})),[s]),T=Object(n.useRef)(null),N=Object(n.useRef)(null),R=Object(n.useRef)(null),I=Object(n.useRef)(null),B=Object(n.useRef)(null),z=Object(n.useRef)(null),E=Object(n.useRef)(null),D=Object(n.useRef)(null),[W,M]=Object(n.useState)({id:"",setValue:()=>{}}),A=Object(n.useMemo)((()=>f("foil")),[f]),H=Object(n.useMemo)((()=>f("finish")),[f]),$=Object(n.useCallback)((e=>v((t=>({...t,opacity:e})))),[v]),P=Object(n.useCallback)(((e,t)=>{v((a=>({...a,nameStyleType:e,nameStyle:t})))}),[v]),K=Object(n.useMemo)((()=>{return e=s,Object.values(h).map((t=>{let{value:a,label:n,labelKey:r,tooltipKey:i}=t;return{label:r?e[r]:n,tooltip:i?e[i]:void 0,value:a}}));var e}),[s]);return Object(n.useEffect)((()=>{var e;null===(e=k.current)||void 0===e||e.setValue({font:g.font})}),[g]),Object(n.useEffect)((()=>{var e;null===(e=R.current)||void 0===e||e.setValue(b)}),[b]),Object(n.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t,a,n;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(n=R.current)||void 0===n?void 0:n.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,n,r,i,l,o;C((e=>e+1));const{name:s,art:c,artCrop:d,artData:u,artSource:m,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:g,opacity:f,setId:v,pendulumEffect:y,typeAbility:x,effect:j,atk:O,def:w,creator:k,password:S,effectStyle:F,pendulumStyle:L}=e;null===(t=N.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:m}),null===(a=R.current)||void 0===a||a.setValue({...f,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:g}),null===(n=I.current)||void 0===n||n.setValue({name:s,setId:v}),null===(r=B.current)||void 0===r||r.setValue({pendulumEffect:y}),null===(i=z.current)||void 0===i||i.setValue(j),null===(l=E.current)||void 0===l||l.setValue({typeAbility:x,effectMinLine:F.minLine,pendulumEffectMinLine:L.minLine}),null===(o=D.current)||void 0===o||o.setValue({atk:O,def:w,creator:k,password:S})}}))),Object(O.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(O.jsx)(co,{}),Object(O.jsx)("br",{}),Object(O.jsx)(oo,{}),Object(O.jsxs)("div",{className:"card-overlay-input",children:[Object(O.jsx)(qc,{className:"format-radio",value:c,onChange:e=>{v((t=>{var a,n,r,i,l;const o=$n(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:b,pendulumEffect:p}=o;return null===(a=I.current)||void 0===a||a.setValue({name:s,setId:c}),null===(n=z.current)||void 0===n||n.setValue(d),null===(r=B.current)||void 0===r||r.setValue({pendulumEffect:p}),null===(i=E.current)||void 0===i||i.setValue({typeAbility:u}),null===(l=D.current)||void 0===l||l.setValue({creator:b,password:m}),o}))},optionList:Fs,children:Object(O.jsx)("span",{children:s["input.format.label"]})}),Object(O.jsx)(Fl,{className:"foil-radio",value:u,onChange:A,optionList:L,children:Object(O.jsx)("span",{children:s["input.foil.label"]})}),j&&Object(O.jsx)(oc,{className:"finish-checkbox",value:m,onChange:H,optionList:K,children:Object(O.jsxs)(Xc,{className:"finish-checkbox-label",children:[Object(O.jsx)("div",{className:"input-label",children:s["input.finish.label"]}),Object(O.jsx)(jl,{onClick:()=>H([]),Icon:Bs.a,tooltipProps:{title:s["input.other-finish.reset.tooltip"]}})]})})]}),x&&Object(O.jsxs)("div",{className:"card-layout-input",children:[Object(O.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(O.jsx)(fl,{content:Object(O.jsx)(El,{children:s["input.layout.tooltip"]})})]}),Object(O.jsx)(pc,{ref:R,defaultValue:b,receivingCanvas:r,onChange:$,onTainted:l,onCropChange:i,onSourceLoaded:o})]}),Object(O.jsx)(ic,{ref:T,onSTFrameChange:e=>{var t;return null===(t=E.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=D.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var n;return null===(n=D.current)||void 0===n?void 0:n.setValue({atk:e,def:t,linkRating:a})}}),Object(O.jsxs)(Vc,{className:"name-style-id-input",children:[Object(O.jsx)(ld,{ref:I,onTakePicker:M}),Object(O.jsx)(ac,{ref:k,frameInfo:Re[d],defaultType:p,defaultValue:g,showExtraDecorativeOption:j,onChange:P},F),Object(O.jsx)(Ec,{showCreativeOption:x})]}),Object(O.jsxs)("div",{className:"main-info",children:[Object(O.jsxs)("div",{className:"main-info-first",children:[Object(O.jsx)(vc,{language:s}),Object(O.jsx)(jd,{ref:B,showCreativeOption:x,showExtraDecorativeOption:j,softMode:w,onTakePicker:M,onFrameChange:e=>T.current.changeFrame(e)}),Object(O.jsx)(wd,{ref:E,onTakePicker:M}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(O.jsx)(os,{className:"standalone-label",children:s["input.effect.label"]}),x?Object(O.jsx)(Cd,{}):Object(O.jsx)("div",{}),Object(O.jsx)(Es,{targetId:W.id,onPick:W.setValue})]}),Object(O.jsx)(Pc,{ref:z,onTakePicker:M})]}),Object(O.jsx)(Qc,{ref:D,isMonster:S,showCreativeOption:x,onTakePicker:M})]}),Object(O.jsx)("div",{className:"main-info-second",children:Object(O.jsx)(nd,{ref:N,receivingCanvas:a,showCreativeOption:x,showExtraDecorativeOption:j,onSourceLoaded:o,onTainted:l,onCropChange:i})})]})]})}));var Td=a(579);const{height:Nd,width:Rd,cardBorder:Id}=s,Bd=68/Rd,zd=Dn.b.div`
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
            &.top-left-frame {
                top: 0;
                left: 0;
            }
            &.top-right-frame {
                top: 0;
                left: 50%;
            }
            &.bottom-left-frame {
                top: 50%;
                left: 0;
            }
            &.bottom-right-frame {
                top: 50%;
                left: 50%;
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
`,Ed=e=>{var t,a,r,i,l,o,s,d;let{index:u,card:b,active:p,selected:h,language:g,onDuplicate:f,onActive:v,onDelete:y,onSelect:x,style:j}=e;const[w,k]=Object(n.useState)(!1),{art:S,artCrop:F,artData:C,artFit:T,artSource:N,atk:R,attribute:I,background:B,backgroundCrop:z,backgroundData:E,backgroundFit:D,backgroundSource:W,backgroundType:M,cardIcon:A,def:H,format:$,frame:P,leftFrame:K,rightFrame:U,hasBackground:Y,isLink:G,isPendulum:X,linkMap:V,name:q,opacity:_,pendulumFrame:J,pendulumRightFrame:Q,pendulumScaleBlue:Z,pendulumScaleRed:ee,setId:te,star:ae,subFamily:ne,typeAbility:re,effectStyle:ie,pendulumStyle:le}=b,{topLeftFrame:oe,topRightFrame:se,bottomLeftFrame:ce,bottomRightFrame:de}=Na({frame:P,topLeftFrame:K,topRightFrame:U,bottomLeftFrame:J,bottomRightFrame:Q,effectBackground:ie.background,pendulumEffectBackground:le.background},X),ue=Ya(q),me="offline"===N?S?C:"https://i.imgur.com/jjtCuG5.png":S,be="offline"===W?B?E:"https://imgur.com/pdSVzUZ.png":B,pe="auto"===A?Sa(P):A,he="st"===pe?ne:pe,ge=wa(b),fe=!!(R||H||G&&V.length),ve=re.join(" / "),ye=m(X,_),{artFrameHeight:xe,artFrameWidth:je}=ye;return Object(O.jsxs)(zd,{className:In("truncate",p?"active":"",u%2===0?"alternative-color":""),onClick:()=>v(b),style:j,children:[Object(O.jsxs)("div",{className:"left-slot",children:[Object(O.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(t=Re[oe])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=Re[oe])||void 0===a?void 0:a.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(r=Re[se])||void 0===r?void 0:r.labelBackgroundColor,backgroundImage:null===(i=Re[se])||void 0===i?void 0:i.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(l=Re[ce])||void 0===l?void 0:l.labelBackgroundColor,backgroundImage:null===(o=Re[ce])||void 0===o?void 0:o.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(s=Re[de])||void 0===s?void 0:s.labelBackgroundColor,backgroundImage:null===(d=Re[de])||void 0===d?void 0:d.labelBackgroundImage}}),Object(O.jsxs)("a",{className:"card-art-container",href:me,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:je*Bd,height:xe*Bd,top:(Nd-Rd)/2/2*Bd,left:(Rd-je)/2*Bd,backgroundColor:c},children:[Y&&Object(O.jsx)(Wd,{className:"background-art",artLink:be,name:ue+" - background",fit:D,crop:z,canvasCoordinate:m(X,{..._,boundless:"fit"!==M})}),Object(O.jsx)(Wd,{className:"foreground-art",artLink:me,name:ue,fit:T,crop:F,canvasCoordinate:ye})]}),G&&[...Array(9)].map(((e,t)=>{if(4===t)return null;const a=X?Me:We,n=X?He:Ae;return Object(O.jsx)("div",{className:In(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,V.includes(`${t+1}`)?"marker-checked":""),style:{top:X?16:19,transform:`rotate(${De[t]}deg) translateY(${a[t]}px) translateX(${n[t]}px)`}},`link-${t}`)})),X&&Z&&Object(O.jsx)("div",{className:"pendulum-scale blue-scale",children:Z}),X&&ee&&Object(O.jsx)("div",{className:"pendulum-scale red-scale",children:ee})]}),Object(O.jsxs)("div",{className:"right-slot truncate",children:[Object(O.jsxs)("div",{className:"first-row truncate",children:[Object(O.jsx)("div",{className:"select-box",onClick:e=>e.stopPropagation(),children:Object(O.jsx)(yl.a,{checked:h,onChange:e=>{x(b,e.target.checked?"add":"remove")}})}),ue]}),Object(O.jsxs)("div",{className:"second-row truncate",children:[ge||"NONE"===I?null:Object(O.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${$}-${I.toLowerCase()}.png`,alt:"Icon"}),re.length>0&&Object(O.jsx)("div",{className:"truncate",children:ve}),"st"!==pe&&Object(O.jsx)("div",{className:"padding"}),he!==L&&"none"!==pe&&Object(O.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${("custom"===he?"icon-list":he).toLowerCase()}.png`,alt:"Icon"}),he!==L&&"st"!==pe&&"none"!==pe&&"custom"!==pe&&Object(O.jsx)("span",{className:In("star-content truncate",ve.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof ae?ae:""!==ae?`"${ae}"`:""})]}),Object(O.jsxs)("div",{className:"third-row truncate",children:[fe&&Object(O.jsx)("div",{children:R}),fe?Object(O.jsx)("div",{children:"\xa0/\xa0"}):Object(O.jsx)("div",{children:"\xa0"}),fe&&Object(O.jsx)("div",{children:G?`Link ${V.length}`:H}),te&&Object(O.jsx)("div",{className:"set-id",children:te})]})]}),Object(O.jsx)("div",{className:In("action-slot",w?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(O.jsxs)("div",{className:"action-container",children:[Object(O.jsx)(En.a,{placement:"left",title:g["manager.button.duplicate.tooltip"],children:Object(O.jsx)(hs.a,{className:"action-button action-duplicate",onClick:()=>f(b)})}),Object(O.jsx)(En.a,{placement:"left",title:g["manager.button.download.tooltip"],children:Object(O.jsx)(Zo.a,{className:"action-button action-download",onClick:()=>{const{id:e,...t}=b;Tl()(JSON.stringify(Da(t)))}})}),Object(O.jsx)(Td.a,{placement:"left",title:g["manager.button.delete.label"],onVisibleChange:e=>k(e),onConfirm:()=>y(b.id),okText:g["manager.button.delete.confirm.label"],cancelText:g["manager.button.delete.cancel.label"],children:Object(O.jsx)(En.a,{placement:"left",title:g["manager.button.delete.tooltip"],children:Object(O.jsx)(An.a,{className:"action-button action-delete"})})})]})})]})},Dd=(e,t,a,n,r)=>{var i;const{artWidth:l,artY:o,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:b,y:p}=null!==(i=r?{...n,width:100,height:100,x:0,y:0}:n)&&void 0!==i?i:{},h=e*((null!==u&&void 0!==u?u:0)/100),g=t*((null!==m&&void 0!==m?m:0)/100),f=l*Bd/(h<=0?1:h);return{top:(null!==p&&void 0!==p?p:0)/100*-t*f,left:(null!==b&&void 0!==b?b:0)/100*-e*f,width:e*f,height:r?t*(l/s*Bd/(g<=0?1:g)):void 0,transform:`translateX(${-(l===c?0:(Rd-c)/2-Id)*Bd}px) translateY(${-(d-o)*Bd}px)`}},Wd=e=>{let{artLink:t,name:a,crop:r,className:i,fit:l,canvasCoordinate:o,style:s}=e;const[c,d]=Object(n.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(n.useRef)(null),[m,b]=Object(n.useState)((()=>{var e,t,a,n;return Dd(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(n=u.current)||void 0===n?void 0:n.naturalHeight)&&void 0!==a?a:1,o,r,l)}));return Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&d(t)}),500),()=>{e=!1}}),[t]),Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{var t,a,n,i;e&&b(Dd(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(n=null===(i=u.current)||void 0===i?void 0:i.naturalHeight)&&void 0!==n?n:1,o,r,l))}),500),()=>{e=!1}}),[r,o,l]),Object(O.jsx)("img",{ref:u,className:In("card-art",i),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,n;b(Dd(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(n=u.current)||void 0===n?void 0:n.naturalHeight)&&void 0!==a?a:1,o,r,l))}})};var Md=a(309),Ad=a(321),Hd=a(637),$d=a(638),Pd=a(639);const Kd=Dn.b.div`
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
`,Ud=e=>{let{language:t,onActive:a}=e;const{selectedMap:r,listName:i,activeId:l,cardDisplayList:o}=jr(Object(Gi.useShallow)((e=>{let{selectedMap:t,listName:a,activeId:n,cardDisplayList:r}=e;return{selectedMap:t,listName:a,activeId:n,cardDisplayList:r}}))),{batchQueue:s,batchDataMap:c,isBatchDownloading:d,isReady:u,clearQueue:m,stopBatchDownload:b,startBatchDownload:p}=Kn(),h=s[0],g=Object(n.useRef)("");Object(n.useEffect)((()=>{if(h&&d&&h!==g.current){g.current=h;const e=o.find((e=>e.id===h));e&&a(e)}}),[o,d,h,a]),Object(n.useEffect)((()=>{let e=!0;return u&&(async()=>{const{batchName:t,batchDataMap:a}=Kn.getState(),n=new Zi.a;if(Object.values(a).length>0){Object.values(a).forEach((e=>{let{blob:t,name:a}=e;n.file(a,t)}));const r=await n.generateAsync({type:"blob"});e&&(Xa(`${t}.zip`,r,"application/zip"),b())}})(),()=>{e=!1}}),[u,b]);const f=0===Object.keys(r).length;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Bn.a,{visible:d,onCancel:()=>b(),onOk:()=>m(),cancelText:t["manager.batch.batch-download.cancel-all.label"],okText:t["manager.batch.batch-download.premature-stop.label"],okButtonProps:{type:"default"},children:Object(O.jsx)(Kd,{className:"exporting-list",children:Object.values(o).map((e=>{let{id:t,name:a}=e;return f||r[t]?Object(O.jsxs)("div",{className:"exporting-item",children:[Object(O.jsx)("div",{className:"export-status",children:l===t?Object(O.jsx)(Hd.a,{}):c[t]?Object(O.jsx)($d.a,{}):Object(O.jsx)(Pd.a,{})}),Object(O.jsx)("div",{className:"export-name",children:a})]},t):null}))})}),Object(O.jsx)(al.a,{className:"batch-download-button",onClick:()=>p(i,f?o.map((e=>e.id)):Object.keys(r)),children:f?t["manager.batch.batch-download.label"]:t["manager.batch.batch-download.partial-download.label"]})]})};var Yd=a(640);const Gd=Object(Dn.b)(Go.a.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`,Xd=Dn.b.div`
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
`,Vd=e=>{let{data:t,index:a,style:n}=e;const{activeId:r,selectedMap:i,language:l,list:o,onDelete:s,onDuplicate:c,onActive:d,onSelect:u}=t;return Object(O.jsx)(Ed,{index:a,card:o[a],active:o[a].id===r,selected:!!i[o[a].id],language:l,onDuplicate:c,onActive:d,onDelete:s,onSelect:u,style:n})},qd=e=>{let{language:t,onActive:a,onRequestImport:r}=e;const{activeId:i,cardDisplayList:l,selectedMap:o,selectCard:s,deleteCard:c,duplicateCard:d,setSelectMap:u,resetFilter:m}=jr(Object(Gi.useShallow)((e=>{let{activeId:t,cardDisplayList:a,selectedMap:n,selectCard:r,deleteCard:i,duplicateCard:l,setSelectMap:o,resetFilter:s}=e;return{activeId:t,cardDisplayList:a,selectedMap:n,selectCard:r,deleteCard:i,duplicateCard:l,setSelectMap:o,resetFilter:s}}))),{exportScheme:b,updateSetting:p}=Sr(Object(Gi.useShallow)((e=>{let{setting:{exportScheme:t},updateSetting:a}=e;return{exportScheme:t,updateSetting:a}}))),[h,g]=Object(n.useState)(0),f=Object(n.useCallback)(((e,t)=>{s(e.id,t)}),[s]),v=e=>{c(e),g((e=>e+1))};return Object(n.useEffect)((()=>{let e=!0;return setTimeout((()=>{if(e&&h>0){const{activeId:e,cardList:t,setCardList:n}=jr.getState(),r=t.find((t=>t.id===e));if(r)a(r);else{const e={id:Object(Y.a)(),...Wt()};n([e],e.name)}}}),500),()=>{e=!1}}),[a,h]),Object(O.jsxs)(Xd,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[l.length>0&&Object(O.jsxs)("div",{className:"select-panel",children:[Object(O.jsx)(al.a,{size:"small",onClick:()=>u([],"replace"),children:t["manager.batch.batch-download.clear.label"]}),Object(O.jsx)(al.a,{size:"small",onClick:()=>u(l,"add"),children:t["manager.batch.batch-download.all.label"]}),Object(O.jsx)("div",{children:Object(O.jsx)(nl.a,{overlay:Object(O.jsx)(Go.a,{children:[{value:"with-name",label:t["manager.batch.batch-download.export-option.with-name.label"]},{value:"with-id",label:t["manager.batch.batch-download.export-option.with-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(O.jsx)(Gd,{onClick:()=>p({exportScheme:t}),className:t===b?"menu-active":"",children:a},t)}))}),children:Object(O.jsxs)("div",{className:"scheme-button",children:[t["manager.batch.batch-download.export-scheme.label"]," ",Object(O.jsx)(Yd.a,{})]})})})]}),Object(O.jsx)("div",{className:"list-container",children:Object(O.jsx)(Md.a,{children:e=>{let{height:n,width:r}=e;return Object(O.jsx)(Ad.a,{className:"List",height:n,itemCount:l.length,itemSize:68,itemData:{list:l,language:t,activeId:i,selectedMap:o,onDuplicate:d,onActive:a,onDelete:v,onSelect:f},overscanCount:5,width:r,children:Vd})}})}),0===l.length&&Object(O.jsxs)("div",{className:"no-card",children:[Object(O.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(O.jsx)("div",{className:"reset-filter",onClick:m,children:t["manager.button.search.button.reset.label"]})]}),0!==l.length&&Object(O.jsx)(Ud,{language:t,onActive:a}),Object(O.jsx)(al.a,{className:"add-card",onClick:r,children:t["manager.button.add.label"]})]})};var _d=a(595),Jd=a(641);const{Panel:Qd}=_d.a,Zd=Dn.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,eu=Object(Dn.b)(Bn.a)`
    .ant-modal-close-x {
        display: none;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        padding: 0;
        padding-left: 24px;
        .ant-collapse-arrow {
            top: 5px;
            left: 0;
        }
    }
    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
        padding: var(--spacing-sm) 0 0 0;
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
                ${Il} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,tu=e=>{let{language:t}=e;const[a,r]=Object(n.useState)(!1);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(Zd,{className:"manager-toggle-button",onClick:()=>r(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(O.jsx)(Jd.a,{})]}),Object(O.jsx)(eu,{visible:a,onCancel:()=>r(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(O.jsxs)("div",{className:"sample-modal-container",children:[Object(O.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(O.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(O.jsx)("div",{className:"download-button",children:Object(O.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(O.jsx)(al.a,{children:t["manager.template.download.label"]})})}),Object(O.jsx)(_d.a,{ghost:!0,children:Object(O.jsx)(Qd,{header:Object(O.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(O.jsx)("table",{className:"option-container",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(O.jsx)("th",{children:Object(O.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(O.jsx)("div",{children:["tcg","ocg"].map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Frame",altField:"Bottom Frame",value:Object(O.jsx)("div",{children:Ie.map((e=>{let{name:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Attribute",value:Object(O.jsx)("div",{children:[...k,...S].filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Spell/Trap Icon",value:Object(O.jsx)("div",{children:T.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Sticker",value:Object(O.jsx)("div",{children:R.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Foil",value:Object(O.jsx)("div",{children:y().filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Card Finish",value:Object(O.jsxs)("div",{children:[Object.values(h).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)})),Object(O.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(O.jsx)("div",{children:Object.values(g).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Star Type",value:Object(O.jsx)("div",{children:["number","text"].map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Star Alignment",value:Object(O.jsx)("div",{children:["left","center","right"].map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Card Icon Type",value:Object(O.jsx)("div",{children:B.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Background Type",value:Object(O.jsx)("div",{children:o().map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Condense Rate",value:Object(O.jsx)("div",{children:Object.keys(ee).map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Name Style Type",value:Object(O.jsx)("div",{children:["predefined","custom"].map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Name Style - Font",value:Object(O.jsx)("div",{children:Object(O.jsx)(Bl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(O.jsx)("div",{children:Object.keys($).map((e=>Object(O.jsx)(Bl,{data:e,children:e},e)))})},{field:"Name Style - Pattern",value:Object(O.jsx)("div",{children:U.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{key:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Pendulum Size",value:Object(O.jsx)("div",{children:X.map((e=>{let{key:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Other Finish - Attribute",value:Object(O.jsx)("div",{children:Object.values(g).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Other Finish - Background",value:Object(O.jsx)("div",{children:Object.values(g).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Other Finish - Icon",value:Object(O.jsx)("div",{children:Object.values(g).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Other Finish - Sticker",value:Object(O.jsx)("div",{children:Object.values(g).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Region",value:Object(O.jsx)("div",{children:Object.values(F).map((e=>{let{key:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))})},{field:"Star List",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.star-list"]}),Object.values(M).filter((e=>{let{isMixable:t}=e;return t})).map((e=>{let{value:t}=e;return Object(O.jsx)(Bl,{data:t,children:t},t)}))]})},{field:"Dye List",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.dye-list"]}),Object(O.jsx)("ul",{children:Object.entries(x).sort(((e,t)=>e[1]-t[1])).map((e=>{var a,n;let[r]=e;return Object(O.jsx)("li",{children:t[null!==(a=null===(n=ze[r])||void 0===n?void 0:n.labelKey)&&void 0!==a?a:""]},r)}))})]})},{field:"Flag",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.flag"]}),gd.map((e=>{let{sampleDisplay:a,index:n}=e;return Object(O.jsx)("div",{children:a(t)},n)}))]})}].map((e=>{let{field:t,altField:a,value:n}=e;return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)(Il,{children:t}),a&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(Il,{children:a})]})]}),Object(O.jsx)("td",{children:n})]},t)}))]})})},"sample-option")})]})})]})};var au=a(167);const nu=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),ru=Dn.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,iu=Object(Dn.b)(bo.a)`
    .ant-drawer-header {
        padding: 0;
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
`,lu=Object(n.forwardRef)(((e,t)=>{let{language:a,onVisibleChange:r,onSelect:i,onRequestImport:l}=e;const o="list-upload-id",s=Object(n.useRef)(null),{cardList:c,changeEditStatus:d,pendingActiveCard:u,setActiveId:m,setCardList:b,setFilterFunction:p,setListName:h,setPendingActiveCard:g,sortList:f,toggleVisible:v,visible:y}=jr(Object(Gi.useShallow)((e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:n,setActiveId:r,setCardList:i,setFilterFunction:l,setListName:o,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:n,setActiveId:r,setCardList:i,setFilterFunction:l,setListName:o,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}}))),x=Sr((e=>e.setting.exportFormat)),[j,w]=Object(n.useState)(0),[k,S]=Object(n.useState)(!1),[F,C]=Object(n.useState)(!1),L=Yn()((e=>{p({type:"text",value:e.target.value})}),250),T=Object(n.useCallback)((e=>{i(e),m(e.id)}),[i,m]);return Object(n.useEffect)((()=>{u&&(i(u),m(u.id),g())}),[i,u,m,g]),Object(n.useEffect)((()=>{localStorage.setItem("manager-panel-visible",y.toString()),r(y)}),[r,y]),Object(n.useEffect)((()=>{const e=jr.subscribe((e=>e.filterResetSignal),(e=>{e&&w((e=>e+1))}));return()=>{e()}}),[]),Object(n.useImperativeHandle)(t,(()=>({})),[]),Object(O.jsx)(ru,{children:Object(O.jsx)(iu,{className:"card-manager-panel",title:Object(O.jsxs)("div",{className:"card-manager-header truncate",children:[Object(O.jsx)(su,{className:"manager-label-container truncate",language:a,children:c.length}),Object(O.jsxs)("div",{className:"manager-button-container",children:[Object(O.jsx)("div",{className:"manager-button",children:Object(O.jsx)(tu,{language:a})}),Object(O.jsx)(nl.a,{overlay:Object(O.jsx)(Go.a,{children:[{value:yr.level.key,label:a["manager.button.sort.level.label"]},{value:yr.name.key,label:a["manager.button.sort.name.label"]},{value:yr.atk.key,label:a["manager.button.sort.atk.label"]},{value:yr.def.key,label:a["manager.button.sort.def.label"]},{value:yr.set.key,label:a["manager.button.sort.set-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(O.jsx)(Go.a.Item,{onClick:()=>f(t),children:a},t)}))}),children:Object(O.jsx)("div",{className:"manager-button",children:Object(O.jsx)(Yc.a,{})})}),Object(O.jsx)(En.a,{title:a["manager.header.button.download.tooltip"],children:Object(O.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(C(!0),nu.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Zn.length;let n="";for(let r=0;r<e.length;r++){const i=(e,t)=>{const a=nr[e];"number"===typeof a&&("string"===typeof t&&(l[a]=t),"number"===typeof t&&(l[a]=`${t}`),"boolean"===typeof t&&(l[a]=`${t}`),null==t&&(l[a]=""))},l=Array(a).map((()=>"")),{art:o,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:m,attribute:b,background:p,backgroundCrop:h,backgroundFit:g,backgroundSource:f,backgroundType:v,cardIcon:y,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:k,externalInfo:S,finish:F,flag:C,foil:L,format:T,region:N,frame:R,furiganaHelper:I,hasBackground:B,isDuelTerminalCard:z,isFirstEdition:E,isLegacyCard:D,isLimitedEdition:W,isLink:M,isPendulum:A,isSpeedCard:H,leftFrame:$,linkMap:P,linkRating:K,name:U,nameStyle:Y,nameStyleType:G,opacity:X,otherFinish:V,otherTextStyle:q,password:_,pendulumEffect:J,pendulumFrame:Q,pendulumRightFrame:Z,pendulumScaleBlue:ee,pendulumScaleRed:te,pendulumSize:ae,pendulumStyle:ne,pendulumTextStyle:re,rightFrame:ie,setId:le,star:oe,starAlignment:se,statTextStyle:ce,sticker:de,subFamily:ue,starList:me,typeAbility:be,typeTextStyle:pe,dyeList:he}=e[r],ge=JSON.stringify(S),fe=C.join("|"),ve=he.join("|"),ye=me.join("|");i("Format",T),i("Region",N),i("Frame",R),i("Name",U),i("Attribute",b),i("Star",`${oe}`),i("Spell/Trap Icon",ue),i("Art Link",o),i("Type Ability",be.join("/")),i("Effect",O),i("Set Id",le),i("ATK",m),i("DEF",j),i("Password",_),i("Sticker",de),i("Copyright",x),i("Is Pendulum",A),i("Pendulum Effect",J),i("Pendulum Scale Red",te),i("Pendulum Scale Blue",ee),i("Is Link",null!==M&&void 0!==M?M:void 0),i("Link - Top Left Arrow",P.includes("1")),i("Link - Top Arrow",P.includes("2")),i("Link - Top Right Arrow",P.includes("3")),i("Link - Left Arrow",P.includes("4")),i("Link - Right Arrow",P.includes("6")),i("Link - Bottom Left Arrow",P.includes("7")),i("Link - Bottom Arrow",P.includes("8")),i("Link - Bottom Right Arrow",P.includes("9")),i("Link Rating",K),i("Is First Edition",E),i("Is Speed Card",H),i("Is Limited Edition",W),i("Is Duel Terminal Card",z),i("Is Legacy Card",D),i("Foil",L),i("Art Finish",c),i("Card Finish",F.join(",")),i("Art Crop - X (%)",s.x),i("Art Crop - Y (%)",s.y),i("Art Crop - Width (%)",s.width),i("Art Crop - Height (%)",s.height),i("Is Using Full Art",d),i("Star Type","number"===typeof oe&&oe>=0&&oe<=13?"number":"text"),i("Star Alignment",se),i("Card Icon Type",y),i("Opacity - Body",X.body),i("Opacity - Pendulum",X.pendulum),i("Opacity - Text",X.text),i("Opacity - Name",X.name),i("Opacity - Base Fill",X.baseFill),i("Opacity - Art Border",X.artBorder),i("Opacity - Name Border",X.nameBorder),i("Opacity - Boundless",X.boundless),i("Has Background",B),i("Background Link",p),i("Is Using Full Background",g),i("Background Type",v),i("Background Crop - X (%)",h.x),i("Background Crop - Y (%)",h.y),i("Background Crop - Width (%)",h.width),i("Background Crop - Height (%)",h.height),i("Bottom Frame",Q),i("Condense Rate",w.condenseTolerant),i("Use Furigana Helper",I),i("Name Style Type",G),i("Name Style - Font",Y.font),i("Name Style - Fill Style",Y.fillStyle),i("Name Style - Headtext Fill Style",Y.headTextFillStyle),i("Name Style - Shadow Color",Y.shadowColor),i("Name Style - Shadow Offset Y",Y.shadowOffsetY),i("Name Style - Shadow Offset X",Y.shadowOffsetX),i("Name Style - Shadow Blur",Y.shadowBlur),i("Name Style - Has Shadow",Y.hasShadow),i("Name Style - Line Color",Y.lineColor),i("Name Style - Line Width",Y.lineWidth),i("Name Style - Line Offset Y",Y.lineOffsetY),i("Name Style - Line Offset X",Y.lineOffsetX),i("Name Style - Has Outline",Y.hasOutline),i("Name Style - Gradient Angle",Y.gradientAngle),i("Name Style - Gradient Color",Y.gradientColor),i("Name Style - Has Gradient",Y.hasGradient),i("Name Style - Emboss Pitch",Y.embossPitch),i("Name Style - Emboss Yaw",Y.embossYaw),i("Name Style - Emboss Thickness",Y.embossThickness),i("Name Style - Has Emboss",Y.hasEmboss),i("Name Style - Preset",Y.preset),i("Name Style - Pattern",Y.pattern),i("Stat Style - Is Custom",ce[0]),i("Stat Style - Fill Color",ce[1]),i("Stat Style - Has Shadow",ce[2]),i("Stat Style - Shadow Color",ce[3]),i("Type Style - Is Custom",pe[0]),i("Type Style - Fill Color",pe[1]),i("Type Style - Has Shadow",pe[2]),i("Type Style - Shadow Color",pe[3]),i("Effect Style - Is Custom",k[0]),i("Effect Style - Fill Color",k[1]),i("Effect Style - Has Shadow",k[2]),i("Effect Style - Shadow Color",k[3]),i("Effect Style - Upsize",w.upSize),i("Effect Style - Font Style",w.fontStyle),i("Effect Style - Background",w.background),i("Effect Style - Min Line",w.minLine),i("Pendulum Size",ae),i("Pendulum Effect Style - Is Custom",re[0]),i("Pendulum Effect Style - Fill Color",re[1]),i("Pendulum Effect Style - Has Shadow",re[2]),i("Pendulum Effect Style - Shadow Color",re[3]),i("Pendulum Effect Style - Upsize",ne.upSize),i("Pendulum Effect Style - Font Style",ne.fontStyle),i("Pendulum Effect Style - Background",ne.background),i("Pendulum Effect Style - Min Line",ne.minLine),i("Other Style - Is Custom",q[0]),i("Other Style - Fill Color",q[1]),i("Other Style - Has Shadow",q[2]),i("Other Style - Shadow Color",q[3]),i("Other Finish - Attribute",V[0]),i("Other Finish - Icon",V[1]),i("Other Finish - Sticker",V[2]),i("Other Finish - Background",V[3]),i("Left Frame",$),i("Right Frame",ie),i("Bottom Right Frame",Z),i("Dye List",ve),i("Star List",ye),i("Flag",fe),i("External Info (JSON)","{}"===ge?"":ge),("offline"===u||B&&"offline"===f)&&(n="offline-data"),t.push(l.map(rr).join(","))}return{value:[Zn.join(","),t.join("\n")].join("\n"),error:n}})(jr.getState().cardList);if(e){let t="",n="";if("offline-data"===e)t=a["error.export.offline-data.message"],n=a["error.export.offline-data.description"];(t||n)&&zn.a.error({message:t,description:n})}switch(x){case"xlsx":{const e=au.a.read(t,{type:"string"});au.a.writeFile(e,`${jr.getState().listName}.xlsx`);break}default:Xa(jr.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}d("download")}catch(t){}C(!1)},children:F?Object(O.jsx)(Hd.a,{}):Object(O.jsx)(Zo.a,{})})}),Object(O.jsx)(En.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(O.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(o);e&&!k&&e.click()},children:[Object(O.jsx)("input",{ref:s,type:"file",id:o,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const n=null===(t=s.current)||void 0===t?void 0:t.files,{isListDirty:r}=jr.getState(),l=()=>{w((e=>e+1)),S(!1),zn.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let o=!0;if(r&&(o=window.confirm(a["prompt.warning.on-import.label"])),o&&n&&n[0]){S(!0);try{const e=await n[0].arrayBuffer(),t=n[0].name.replace(/\.[^/.]+$/,""),a=au.a.read(e,{codepage:65001}),r=au.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),o=cr(r);o.length>0?(b(o,o[0].id),h(t),w((e=>e+1)),i(o[0]),S(!1)):l()}catch(e){console.error(e),l()}}else w((e=>e+1)),S(!1)}},`upload-${j}`),k?Object(O.jsx)(Hd.a,{}):Object(O.jsx)(ws.a,{})]})},`${k}`),Object(O.jsx)("div",{className:"manager-button close-button",onClick:()=>v(!1),children:Object(O.jsx)(An.a,{})})]}),Object(O.jsx)("div",{className:"card-manager-filter",children:Object(O.jsx)(wo.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>p({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${j}`)})]}),visible:y,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>v(!1),width:280,children:Object(O.jsx)(qd,{language:a,onActive:T,onRequestImport:l})})})})),ou=Dn.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,su=e=>{let{language:t,children:a,...r}=e;const{isListDirty:i,cardList:l}=jr(Object(Gi.useShallow)((e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}})));return Object(n.useEffect)((()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return i&&l.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[l.length,i,t]),Object(O.jsxs)(ou,{...r,children:[a,i&&l.length>1&&Object(O.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},cu=Dn.b.div`
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
        ${Wn} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,du=Dn.b.div`
    position: relative;
    display: block;
    width: calc(var(--card-width) * var(--resize-ratio) * 1 / var(--global-scale));
    height: calc(var(--card-height) * var(--resize-ratio) * 1 / var(--global-scale));
    margin: var(--spacing);
    margin-top: 0;
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
`,uu=Dn.b.div`
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
`,mu=Dn.b.div`
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
`,bu=Dn.b.div`
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
`,pu=Dn.b.span`
    color: var(--main-danger);
`,hu=Object(Dn.b)(Wl)`
    position: absolute;
    z-index: 101;
`,gu=Object(Dn.b)(hu)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,fu=Object(Dn.b)(hu)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var vu=a(236),yu=a(587),xu=a(590),ju=a(600),Ou=a(603);Object(vu.configure)({ignoreTags:[]});const wu={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:ku,width:Su}=s;var Fu=function(){var e,t,a,r,i,l,o;const{allowHotkey:s,softMode:c,globalScale:d,resolution:u}=Sr(Object(Gi.useShallow)((e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:n,resolution:r}}=e;return{softMode:a,allowHotkey:t,globalScale:n,resolution:r}}))),{isInitiating:m,isLoading:b,language:p,isMetadataReady:h,languageInfo:g,initiate:f,loadDefaultLanguage:v}=qn(Object(Gi.useShallow)((e=>{let{isInitiating:t,isLoading:a,language:n,isMetadataReady:r,languageInfo:i,initiate:l,loadDefaultLanguage:o}=e;return{isInitiating:t,isLoading:a,language:n,isMetadataReady:r,languageInfo:i,initiate:l,loadDefaultLanguage:o}}))),[y,x]=Object(n.useState)(!0),[j,w]=Object(n.useState)(""),[k,S]=Object(n.useState)("online"),[F,C]=Object(n.useState)(!1),L=Object(n.useRef)(null),T=Object(n.useRef)(null),N=Object(n.useRef)(null),R=Object(n.useRef)(null),I=Object(n.useRef)(null),B=Object(n.useRef)(null),z=Object(n.useRef)(null),E=Object(n.useRef)(null),D=Object(n.useRef)(null),W=Object(n.useRef)(null),M=Object(n.useRef)(null),A=Object(n.useRef)(null),H=Object(n.useRef)(null),$=Object(n.useRef)(null),P=Object(n.useRef)(null),K=Object(n.useRef)(null),U=Object(n.useRef)(null),Y=Object(n.useRef)(null),G=Object(n.useRef)(null),[X]=Object(n.useState)({artworkCanvasRef:T,backgroundCanvasRef:N,exportCanvasRef:R,frameCanvasRef:B,cardIconCanvasRef:z,pendulumScaleCanvasRef:E,pendulumEffectCanvasRef:D,typeCanvasRef:W,effectCanvasRef:M,nameCanvasRef:A,statCanvasRef:H,setIdCanvasRef:$,passwordCanvasRef:P,creatorCanvasRef:K,stickerCanvasRef:U,finishCanvasRef:Y,lightboxRef:G,previewCanvasRef:I}),V=Object(n.useRef)(null),q=Object(n.useRef)(null),_=Object(n.useRef)(null),[J,Q]=Object(n.useState)(0);Object(n.useEffect)((()=>{f()}),[f]),Object(n.useEffect)((()=>{h&&v()}),[h,v]),Object(n.useEffect)((()=>{["font-family","letter-spacing","--width-label"].forEach((e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=g.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")}))}),[g]),Object(n.useEffect)((()=>{var e;const t=null===(e=R.current)||void 0===e?void 0:e.getContext("2d"),a=kr.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Er(t)),!1===m&&Ji.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","SVN-Times New Roman Italic","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),n=localStorage.getItem("card-data"),r=n?Aa(JSON.parse(n)):null,i=new URLSearchParams(window.location.search).get("data");if(i){var e,t;const{card:a}=Or(i),n=Aa(a),{artSource:l,backgroundSource:o}=n;if("online"===l&&"online"===o)return Or(i).card;const s={...n};return"offline"===l&&(s.artData=null!==(e=null===r||void 0===r?void 0:r.artData)&&void 0!==e?e:""),"offline"===o&&(s.backgroundData=null!==(t=null===r||void 0===r?void 0:r.backgroundData)&&void 0!==t?t:""),s}return null!==r&&"2.3.13"===a?r:Dt()}catch(a){return console.error(a),Dt()}})();a(e),jr.getState().setCardList([e],e.id),x(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),zn.a.error({message:Jn()["error.load.font.tcg"](e)})},inactive:()=>{w(Jn()["error.load.font.all-tcg"]),x(!1)}})}),[m]);const{styleContent:Z}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:r,onFontInactive:i,onInactive:l}=e;const{font:o,format:s}=kr(Object(Gi.useShallow)((e=>({format:e.card.format,font:e.card.nameStyle.font})))),[c,d]=Object(n.useState)(""),u=Object(n.useRef)(!1),m=Object(n.useRef)(0);return Object(n.useEffect)((()=>{("ocg"===s||"OCG"===o)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),r(),Ji.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,l()},fontinactive:i}))}),[s,o,t,a,r,i,l]),{styleContent:c}})({isLanguageInitiating:m,onBeforeLoad:()=>{var e;x(!0);const t=null===(e=R.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Er(t))},onActive:()=>{x(!1)},onInactive:()=>{w(Jn()["error.load.font.all-ocg"]),x(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),zn.a.error({message:Jn()["error.load.font.ocg"](e)})}}),[ee,te]=Object(n.useState)(!1);Object(n.useEffect)((()=>{const e=document.body.classList;c?e.add("reduced-color-motion"):e.remove("reduced-color-motion")}),[c]);const ae=Object(n.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||null===(t=G.current)||void 0===t||t.setVisible((t=>"boolean"===typeof e?e:!t))}),[s]),ne=Object(n.useRef)(!1),re=document.getElementById("sentry-bug-report");Object(n.useEffect)((()=>{re&&p&&!1===ne.current&&!1===ll.f()&&(ne.current=!0,yu.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[xu.a(),ju.a(),Ou.a({colorScheme:"system",autoInject:!1}).attachTo(re,{formTitle:p["contributor.bug-report.tooltip"],nameLabel:p["contributor.bug-report.name.label"],namePlaceholder:p["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:p["contributor.bug-report.message.label"],messagePlaceholder:p["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:p["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:p["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:p["contributor.bug-report.cancel.label"],submitButtonLabel:p["contributor.bug-report.submit.label"],isRequiredLabel:p["contributor.bug-report.required.label"],successMessageText:p["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))}),[p,re]);const ie=Object(n.useCallback)(((e,t)=>{var a;const{addToList:n,forcePurityCheck:r,writeOnCurrentCard:i}=null!==t&&void 0!==t?t:{},{setCard:l,card:o}=kr.getState(),s=i?{...e,id:o.id}:e;n&&jr.getState().addCard(s),l(s,r),Q((e=>e+1)),null===(a=L.current)||void 0===a||a.forceCardData(s),Nn()}),[]),le=Object(n.useCallback)((async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("replace"))}),[s]),oe=Object(n.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("merge"))}),[s]),se=Object(n.useCallback)((function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||s)if(null===e||void 0===e||e.preventDefault(),"online"===k&&null!==(t=L.current)&&void 0!==t&&t.isLoading())window.alert(p["error.export.image-loading.message"]);else try{var n;const e=null!==a&&void 0!==a?a:kr.getState().card;null===(n=q.current)||void 0===n||n.setCardData(e)}catch(r){console.error(r),zn.a.error({message:p["error.export.message"],description:p["error.export.description"]})}}),[s,p,k]),ce=Object(n.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=V.current)||void 0===t||t.download())}),[s]),de=Object(n.useMemo)((()=>({IMPORT:e=>le(e,!0),MERGE:e=>oe(e,!0),EXPORT:e=>se(e,!0),VIEW:()=>ae(!0,!0),DOWNLOAD:e=>ce(e,!0)})),[ce,se,le,oe,ae]),ue=Object(n.useCallback)((()=>{te(!0),alert(p["prompt.download.tainted.message"])}),[p]),me=Object(n.useCallback)((e=>{var t;"anonymous"===e&&(te(!1),null===(t=G.current)||void 0===t||t.refresh());Q((e=>e+1))}),[]),be=Object(n.useCallback)(((e,t)=>{Q((e=>e+1)),S(t)}),[]),pe=Object(n.useCallback)((()=>{Q((e=>e+1)),te(!0)}),[]),he=Object(n.useCallback)((e=>{C(e)}),[]),ge=b||y;return Object(O.jsx)(vu.HotKeys,{keyMap:wu,handlers:de,children:Object(O.jsxs)("div",{id:"app",onDrop:()=>{},className:`language-${g.codeName} manager-${F?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:Rn()?"-webkit-fill-available":"100vh","--card-height":ku*d+"px","--card-width":Su*d+"px","--global-scale":`${d}`},children:[Z&&Object(O.jsx)("link",{rel:"stylesheet",type:"text/css",href:Z}),Object(O.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[ge&&Object(O.jsx)(mu,{className:"app-loading",children:j.length>0?Object(O.jsx)(pu,{children:j}):null!==(e=g.initialMessage)&&void 0!==e?e:""}),Object(O.jsxs)("div",{className:"card-preview-panel "+(ee?"export-tainted":"export-normal"),children:[Object(O.jsxs)(cu,{className:"data-button-panel",children:[Object(O.jsxs)("div",{className:"imexport",children:[Object(O.jsx)(Os,{ref:q,tainted:ee,artworkCanvas:T.current,onRequireExportData:se,onRequireDownload:()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.download()},onClose:Nn}),Object(O.jsx)("div",{}),Object(O.jsx)(Ss,{ref:_,onImport:ie,onClose:Nn,allowHotkey:s,language:p})]}),Object(O.jsx)(tl,{language:p}),Object(O.jsx)(ps,{ref:V,canvasMap:X,imageChangeCount:J,isTainted:ee,isInitializing:y,globalScale:d,onDownloadError:ue}),ee&&Object(O.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(O.jsxs)("div",{className:"alert-label",children:[p["alert.download.tainted-first-line"],Object(O.jsx)("br",{}),p["alert.download.tainted-second-line"]," ",Object(O.jsx)(mo,{})]}),Object(O.jsx)(nl.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(O.jsx)(qo,{onChange:()=>Nn()}),children:Object(O.jsxs)(ms,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(O.jsx)(rl.a,{className:"resolution-icon"}),Object(O.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]}),Object(O.jsxs)(du,{className:"card-preview-container",children:[Object(O.jsx)(En.a,{title:p["button.reset.tooltip"],children:Object(O.jsx)(fu,{className:"reset-button",onClick:()=>{if(window.confirm(p["prompt.reset.message"])){var e;const{setCard:t,card:a}=kr.getState(),n={id:a.id,...Et()},r="tcg"===a.format?n:$n(n,"ocg");t(r,!0),Q((e=>e+1)),null===(e=L.current)||void 0===e||e.forceCardData(r)}},children:Object(O.jsx)(Bs.a,{})})}),Object(O.jsx)(En.a,{title:Object(O.jsxs)("div",{className:"center",children:[p["button.full-size.label"],s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(O.jsx)(gu,{className:"lightbox-button",onClick:()=>ae(),children:Object(O.jsx)(Eo.a,{})})}),Object(O.jsx)("canvas",{id:"preview-canvas",ref:I,width:Su,height:ku},(null!==(t=null===(a=G.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(O.jsxs)(uu,{className:"card-canvas-group",children:[Object(O.jsx)("canvas",{id:"export-canvas",ref:R,width:Su*d,height:ku*d},(null!==(r=null===(i=G.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==r?r:0)+.1),Object(O.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(O.jsx)("canvas",{id:"frameCanvas",ref:B,width:Su*d,height:ku*d},null!==(l=null===(o=G.current)||void 0===o?void 0:o.getCanvasKey())&&void 0!==l?l:0),Object(O.jsx)("canvas",{id:"nameCanvas",ref:A,width:Su*d,height:148*d}),Object(O.jsx)("canvas",{id:"cardIconCanvas",ref:z,width:Su*d,height:222*d}),Object(O.jsx)("canvas",{id:"pendulumScaleCanvas",ref:E,width:Su*d,height:920*d}),Object(O.jsx)("canvas",{id:"pendulumEffectCanvas",ref:D,width:Su*d,height:920*d}),Object(O.jsx)("canvas",{id:"typeCanvas",ref:W,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"effectCanvas",ref:M,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"statCanvas",ref:H,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"setIdCanvas",ref:$,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"passwordCanvas",ref:P,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"creatorCanvas",ref:K,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"stickerCanvas",ref:U,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{id:"finishCanvas",ref:Y,width:Su*d,height:ku*d}),Object(O.jsx)("canvas",{className:"crop-canvas",ref:T}),Object(O.jsx)("canvas",{className:"crop-canvas",ref:N})]})]})]}),!1===ge&&Object(O.jsx)(Ld,{ref:L,artworkCanvas:T.current,backgroundCanvas:N.current,onSourceLoaded:me,onCropChange:be,onTainted:pe})]}),Object(O.jsx)(lu,{language:p,onVisibleChange:he,onSelect:ie,onRequestImport:()=>{var e;null===(e=_.current)||void 0===e||e.requestImport("new")}}),Object(O.jsx)(Ko,{ref:G,globalScale:d}),Object(O.jsxs)(bu,{className:"by-me",children:["Made by Lauqerm ",Object(O.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Cu=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,643)).then((t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:i,getTTFB:l}=t;a(e),n(e),r(e),i(e),l(e)}))};l.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Fu,{})}),document.getElementById("root")),Cu()}},[[573,1,2]]]);
//# sourceMappingURL=main.4f3422cf.chunk.js.map