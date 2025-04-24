(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{313:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){},411:function(e,t,a){},526:function(e,t,a){},532:function(e,t,a){},533:function(e,t,a){},534:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(49),l=a.n(o);a(313),a(314),a(315),a(316),a(317),a(318);const i=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:912,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:52,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"fullPendulum"}},m=(e,t,a,r)=>{const{boundless:n,body:o,pendulum:l,text:i}={...d(),...t};if("full"===a)return u.fullCard;let s="normal";"fit"!==a&&n||o<100?s=e?"fullPendulum":"fullCard":e?i<100?s="small"===r?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===r&&(s="truePendulumLarge"),"small"===r&&(s="truePendulumSmall"),"medium"===r&&(s="truePendulum")):s="small"===r?"pendulumSmall":"pendulum":s=i<100?"extendedCard":"normal";const c=u[s];return{...c,backgroundRatio:"frame"===a?.686:c.backgroundRatio}};var p=a(567),b=a(1);const f="NONE",h=[{name:f,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1,supportFormat:["tcg","ocg"]},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]}],g="NO ICON",v=[{label:Object(b.jsx)(p.a,{}),value:g,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0}],y="no-sticker",x=[{value:y,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],j={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous.png"}),isOption:!0},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0}},O=Object.values(j),w=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",...e}),S={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:w({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:w({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:w({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:w({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:w({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:w({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:w({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:w({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:w({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:w({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:w({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:w({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:w({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:w({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:w({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:w({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:w({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:w({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})}},k=Object.values(S),C={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},F=Object.values(C);var T=a(559);const N={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:50,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:790,artlessFrameY:553,fontSize:60.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:806,artlessFrameY:553,fontSize:60.5}},L=Object.values(N),R={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},z="medium",W={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},E={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:64.5,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:64.5,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:64.5,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:144}]},B=64.44,D={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:128.94}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5}]}},H={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},I={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},A={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},M=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],P=M.reduce(((e,t)=>(e[t.shortForm]=t,e)),{}),$=[{blendMode:"overlay",opacity:1}],Y=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],U={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":$,"art-overlay":$,"art-border":$,"art-border-pendulum":$,"border-pendulum":$,attribute:$,frame:$},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":Y,"art-border":Y,"art-border-pendulum":Y,"border-pendulum":Y,frame:Y,"frame-background":Y,name:Y,star:Y},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}}},K={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}}},G={normal:"normal",gold:"gold",platinum:"platinum"},X=e=>[{name:G.normal,label:null===e||void 0===e?void 0:e.normal,color:"#747b95",isOption:!1},{name:G.gold,label:null===e||void 0===e?void 0:e.gold,color:"#cfa65f",isOption:!0},{name:G.platinum,label:null===e||void 0===e?void 0:e.platinum,color:"#b1b1b1",isOption:!0}],V={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},_={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},q={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,headTextGapRatio:0},J={...q,font:"MatrixBook",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},Z={...q,font:'"StoneSerif-Italic"',headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},Q={...q,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},ee={tcg:{...Z,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...Z,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...Z,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...Z,fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...Z,fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...Z,fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...Z,fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...Z,fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},te={tcg:{...J,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...J,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...J,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...J,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...J,fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...J,fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...J,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...J,fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...Q,fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...Q,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...Q,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...Q,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...Q,fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...Q,fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...Q,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...Q,fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},ae={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps",font:"MatrixRegularSmallCaps",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.55,fontList:[{bulletWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterDeviationMap:{1:{threshold:.94,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:11},"\u1ecb":{uniformBoxDescent:11},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:11},"e\u0329":{uniformBoxDescent:11},"\xc8\u0329":{uniformBoxDescent:11},"\xc9\u0329":{uniformBoxDescent:11},"\xe8\u0329":{uniformBoxDescent:11},"\u1eb8":{uniformBoxDescent:11},"\u1eb9":{uniformBoxDescent:11},"\u1ec6":{uniformBoxDescent:11},"\u1ec7":{uniformBoxDescent:11}}},2:{threshold:0,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:20},"\u1ecb":{uniformBoxDescent:20},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:20},"e\u0329":{uniformBoxDescent:20},"\xc8\u0329":{uniformBoxDescent:20},"\xc9\u0329":{uniformBoxDescent:20},"\xe8\u0329":{uniformBoxDescent:20},"\u1eb8":{uniformBoxDescent:20},"\u1eb9":{uniformBoxDescent:20},"\u1ec6":{uniformBoxDescent:20},"\u1ec7":{uniformBoxDescent:20}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.825,weight:"bold",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.775,headTextOverflow:"condense",headTextBold:!0,metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,fontStyle:"ocg",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},re={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},ne={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},oe={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},le={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},ie={"tcg-small":{...Z,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...Z,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...Z,fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},se={"tcg-small":{...J,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...J,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...J,fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...Q,fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...Q,fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...Q,fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},ce={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},de={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},ue={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},me={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},pe={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},be={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[me.ocg[2]]:me.tcg[2],[me.ocg[1]]:me.tcg[1],[me.ocg[0]]:me.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[pe.ocg]:pe.tcg},fe=Object.entries(be).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),he={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 48%","rgba(239,239,239,1) 52%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},ge=Object.values(he),ve={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},ye=[-45,0,45,-90,0,90,-135,180,135],xe=[-38,-28,-38,-28,0,-28,-38,-28,-38],je=[-30,-23,-30,-28,0,-28,-30,-23,-30],Oe=[0,0,0,0,0,0,0,0,0],we=[-5,0,5,0,0,0,5,0,-5],Se=new RegExp("[A-Z\uff21-\uff3a]"),ke=new RegExp("[\\[\\]\u3010\u3011]"),Ce="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",Fe=new RegExp(Ce),Te=new RegExp(`({[^{}]+?}|${Ce}|.)`),Ne="\u2989",Le="\u298a",Re="\u27c5",ze="\u27c6",We="\u169b",Ee="\u169c",Be="\u27ec",De="\u27ed",He=new RegExp(`[${[Ee,We,ze,Re,De,Be,Le,Ne].join("")}]|(\\|[^}]+})`,"g"),Ie=new RegExp(`(^|[-\\u2014/[(\\u2018${Ne}${Re}${We}${Be}\\s])"`,"g"),Ae=`${Ne}|${Le}`,Me=new RegExp(Ae),Pe=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${Ne}?(\\(|\\*)[\\w\\W]+${Le}?)\\s*$`,$e=new RegExp("[#\u2605\u2606@\u221e]"),Ye=`(${M.map((e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm})).join("|")})(?![^{]*})`,Ue="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Ke=new RegExp(`[${Ue}]`),Ge=`.[${Ue})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,Xe=new RegExp("[\u2460-\u2473\u203b]"),Ve=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),_e=new RegExp("[\uff10-\uff19]"),qe=new RegExp("[0-9]"),Je=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,Ze=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Qe=new RegExp("[\u30fb]"),et=new RegExp("[\u30fc]"),tt=new RegExp("[\u2015]"),at=new RegExp("[\uff1a]"),rt=new RegExp("[\u3002\uff64]"),nt=new RegExp("[\uff1a]"),ot={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},lt={"\u3002":-.5,"\uff1a":-.25},it={">":.125,"<":.125},st={},ct={},dt={},ut=e=>"tcg"===e?7:1,mt=/{[^{}]+?}/,pt="\\s\\-/",bt=-2.25,ft=()=>({version:2,format:"tcg",frame:"fusion",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:"LIGHT",subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:z,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),ht=()=>({id:Object(T.a)(),...ft()}),gt=()=>({version:2,format:"tcg",frame:"effect",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:f,subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:z,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:y,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),vt=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],yt=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],xt={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(b.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(b.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(b.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},jt=[xt["549x800"],xt["561x818"],xt["813x1185"],xt["1122x1636"],xt["1388x2026"],xt["1626x2370"]],Ot=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}];var wt=a(151),St=a.n(wt),kt=a(218),Ct=a.n(kt),Ft=a(105),Tt=a.n(Ft),Nt=a(261),Lt=a.n(Nt),Rt=a(262),zt=a.n(Rt),Wt=a(263),Et=a.n(Wt),Bt=a(264),Dt=a.n(Bt);function Ht(e,t){var a,r,n,o,l,i,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,p=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],p+=c[a],m=Math.max(m,c[a]);var b=Tt.a.mallocDouble(u),f=St()(b,c.slice(0),d.slice(0),0),h=Tt.a.mallocUint32(m),g=Tt.a.mallocUint32(m),v=Tt.a.mallocDouble(u),y=St()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:p);for(function(e,t,a){var r,n,o,l=0,i=Math.min;for(r=0;r<t;++r){for(o=e[l++],n=1;n<a;++n)o=i(e[l],o+1),e[l++]=o;for(n=0;n<a;++n)o=i(e[--l],o+1),e[l]=o;l+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(o=f.stride,n=1,r=a-1;r<s;++r)o[r]=n,n*=c[r];for(r=a-2;r>=0;--r)o[r]=n,n*=c[r];if(Ct.a.assign(f,y),i=c[a-1],isFinite(t))if(1===t)Lt()(f.data,u/i|0,0|i,h,g);else if(2===t)zt()(f.data,u/i|0,0|i,h,g);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");Dt()(f.data,u/i|0,0|i,h,g,t)}else Et()(f.data,u/i|0,0|i,h,g);l=y,y=f,f=l}return Ct.a.assign(e,y),Tt.a.freeDouble(v),Tt.a.freeDouble(b),Tt.a.freeUint32(h),Tt.a.freeUint32(g),e}var It=a(35),At=a(302),Mt=a(265),Pt=a(138);const $t={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Yt={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ut={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},Kt="sobel",Gt=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:Kt});class Xt{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...Gt(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:o,invertedGreen:l,invertedSource:i,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(o),this.invertGreen(l),this.invertSource(i),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new It.h(-.5,.5,.5,-.5,0,1),t=new It.k,a=new Mt.a(t,e);this.renderer=new It.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=It.n.clone(Ut.uniforms),this.material=new It.l({fragmentShader:Ut.fragmentShader,vertexShader:Ut.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new It.i(1,1,1,1),n=new It.f(r,this.material);t.add(n),this.gaussianShaderY=new Pt.a(Yt),this.gaussianShaderX=new Pt.a($t),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new At.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new It.p(e,t,{minFilter:It.g,magFilter:It.g,format:It.j,stencilBuffer:!1})}getTexture(e){const t=new It.m(e);return t.wrapS=t.wrapT=It.b,t.minFilter=t.magFilter=It.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const Vt=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),o=Math.sin(a)*Math.cos(r),l=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*o)/100,Math.round(100*l)/100]},_t=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:o=[255,255,255],lightAngleVec:l,lightPitch:i,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,p=null!==r&&void 0!==r?r:t.width,b=u.getImageData(0,0,p,m,{willReadFrequently:!0}).data,f=l||("number"===typeof i&&"number"===typeof s?Vt(i,s):[1,0,0]),h=Math.sqrt(f[0]**2+f[1]**2+f[2]**2),g=[f[0]/h,f[1]/h,f[2]/h];if(b)try{const e=new Uint8ClampedArray(p*m);for(let n=0;n<b.length;n+=4)b[n]||b[n+1]||b[n+2]||b[n+3]?e[n/4]=0:e[n/4]=1;const t=Ht(St()(e,[m,p])),a=t.shape[0],r=t.shape[1],l=new Uint8ClampedArray(p*m*4),i=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*p+e),r=t.get(n,e);l[a]=r*i,l[a+1]=r*i,l[a+2]=r*i,l[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=p,s.height=m,s.getContext("2d").putImageData(new ImageData(l,p,m),0,0);const u=document.createElement("canvas");u.width=p,u.height=m;new Xt(Gt(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:Kt});const f=document.createElement("canvas");f.width=p,f.height=m;const h=f.getContext("2d");h.drawImage(u,0,0,p,m);const v=((e,t,a,r,n,o)=>{const l=new Uint8ClampedArray(t*a*4),i=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*o**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,o=0,u=0,m=0;for(let l=-i;l<=i;l++)for(let p=-i;p<=i;p++){const i=r+p,b=d+l;if(i>=0&&b>=0&&i<t&&b<a){const a=4*(d*t+r),l=4*(b*t+i),p=e[a],f=e[a+1],h=e[a+2],g=e[l],v=e[l+1],y=e[l+2],x=s(i,b,r,d)*c(p,g)*c(f,v)*c(h,y);n+=g*x,o+=v*x,u+=y*x,m+=x}}const p=4*(d*t+r);l[p]=n/m,l[p+1]=o/m,l[p+2]=u/m,l[p+3]=e[p+3]}return l})(h.getImageData(0,0,p,m).data,p,m,9,70,20),y=new Uint8ClampedArray(p*m*4);for(let n=0;n<b.length;n+=4){let e=v[n]/127.5-1,t=v[n+1]/127.5-1,a=v[n+2]/127.5-1;const r=(e*g[0]+t*g[1]+a*g[2])/2*(Math.abs(c)+Math.abs(d)),l=Math.max(c,Math.min(r,d));y[n]=Math.round(b[n]+o[0]*l),y[n+1]=Math.round(b[n+1]+o[1]*l),y[n+2]=Math.round(b[n+2]+o[2]*l),y[n+3]=b[n+3]}return new ImageData(y,p,m)}catch(v){return console.error("Could not apply emboss effect",v),null}},qt=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((r=>{setTimeout((()=>{if(e.current&&t)try{e.current.toBlob((e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r(!0)},e.onerror=()=>{URL.revokeObjectURL(a),r(!1)}}else r(!1)}else r(!1)}))}catch(a){t.drawImage(e.current,0,0),console.error(a),r(!1)}else r(!1)}),25*a)}))},Jt=e=>"speed-skill"===e.frame&&!Zt(e),Zt=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,Qt=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"level",ea=e=>!Zt({frame:e})||ta(e),ta=e=>["link","xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e);var aa=a(566),ra=a(553);const na=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return oa(e,0)},oa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),(e=>e===t[0]?t[1]:t[0]));if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},la={version:"ve",format:"fm",frame:"fr",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",subFamily:"sf",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},ia=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:la;const a={},r={...e};return Object.keys(r).forEach((e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var o;const r=null===(o=t[e])||void 0===o?void 0:o._newKey;r&&(a[r]=ia(n,t[e]))}})),a},sa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:la;const a={};return Object.keys(t).forEach((r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const o=null===n||void 0===n?void 0:n._newKey;o&&e[o]&&(a[r]=sa(e[o],t[r]))}})),a},ca=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:la;const a="string"===typeof e?JSON.parse(na(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach((e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const o=null===n||void 0===n?void 0:n._newKey;o&&a[o]&&(r[e]=ca(a[o],t[e]))}})),r},da=function(e){var t,a,r,n,o,l;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:gt();delete i.version;const s={id:Object(T.a)(),...i,...Object(aa.a)(e)};if(s.effectStyle={...gt().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...gt().pendulumStyle}:s.pendulumStyle={...gt().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.pendulumSize&&(s.pendulumSize="medium"),null==s.finish&&(s.finish=[]),null==s.artFinish&&(s.artFinish="normal"),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(n=s.background)&&void 0!==n?n:"")&&(s.background=""),""===(null!==(o=s.backgroundData)&&void 0!==o?o:"")&&(s.backgroundData=""),""===(null!==(l=s.backgroundSource)&&void 0!==l?l:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto"),0===s.version||1===s.version){s.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:o,frame:l}=s,i=Zt({frame:l});("auto"!==e||t?!!(a||r||n&&o.length):i)||(s.atk="",s.def="")}return s},ua=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},ma=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},pa=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:ia(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:ia(a)}},ba=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),fa=(e,t)=>{const{aspect:a,height:r,width:n,x:o,y:l,unit:i}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:p}=null!==t&&void 0!==t?t:{};return ba(a,s)&&ba(r,c)&&ba(n,d)&&ba(o,u)&&ba(l,m)&&i===p},ha=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},ga=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},va=(e,t,a)=>{const r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=[a,r.download,r.href].join(":");const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(n),r.remove()},ya={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[g]:"None"},xa=Object.entries(ya).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),ja={large:"Large",medium:"Normal",small:"Small"},Oa=Object.entries(ja).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),wa={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},Sa=Object.entries(wa).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),ka={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},Ca=Object.entries(ka).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Fa={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},Ta=Object.entries(Fa).reduce(((e,t)=>{const[a,r]=t;return e[r.key]=a,e}),{}),Na=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:o,effect:l,atk:i,def:s,art:c,artData:d,artSource:u,password:m,creator:p,attribute:b,setId:f,pendulumEffect:h,pendulumScaleBlue:g,pendulumScaleRed:v,pendulumSize:y,isPendulum:x,linkMap:j,frame:O,externalInfo:w,nameStyle:S,nameStyleType:k,artFinish:C,finish:F}=e,T=ha(a),N=ga(l),L=ga(h),R=ya[o],z=wa[b],W=ka[O],E="predefined"===k?Ta[[S.preset,C,F.join("|")].join("-")]:"common",{pendulum:B,rarity:D,...H}=null!==w&&void 0!==w?w:{};return{isPartial:a!==T||l!==N||h!==L||void 0===R||void 0===z||void 0===W||void 0===E,result:{version:"1.0.0",name:T,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:N,atk:i,def:s,serial:m,copyright:p,attribute:null!==z&&void 0!==z?z:"None",id:f,pendulum:{enabled:x,effect:L,blue:g,red:v,boxSize:ja[y],boxSizeEnabled:!0,...B},variant:"Normal",link:{topLeft:!!j.includes("1"),topCenter:!!j.includes("2"),topRight:!!j.includes("3"),middleLeft:!!j.includes("4"),middleRight:!!j.includes("6"),bottomLeft:!!j.includes("7"),bottomCenter:!!j.includes("8"),bottomRight:!!j.includes("9")},layout:null!==W&&void 0!==W?W:"Normal",boxSize:"large"===y?"Small":"Normal",rarity:null!==E&&void 0!==E?E:D,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...H}}},La={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[g]:"None"},Ra=Object.entries(La).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),za=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Wa=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Ea={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},Ba=e=>{var t,a,r;const{atk:n,attribute:o,card_images:l,card_sets:i,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:p,name:b,pend_desc:h,race:v,scale:y,typeline:x,linkval:j,linkmarkers:O}=e,w=Ra[v],S=za[o],[k,C]=Wa[d].split("_"),F=null!==(t=p?p.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",T=F.split("\n"),N=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==k&&void 0!==k?k:"normal"})&&T.length>1?[`[${T[0].replaceAll("\r","")}]`,...T.slice(1)].join("\n"):F,L=h?h.replaceAll(/^''|''$/g,""):"",R=l[0].image_url_cropped,z=gt();return{isPartial:!1,result:{...z,name:b,atk:n<0||null==n?"?":`${n}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==S&&void 0!==S?S:f,effect:N,subFamily:null!==w&&void 0!==w?w:g,setId:null!==(a=null===(r=i[i.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==k&&void 0!==k?k:"normal",star:"link"===d&&j?j:m,typeAbility:x||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:R,artSource:"online",artCrop:{...z.artCrop,y:0},isLink:"link"===k&&Array.isArray(O),linkMap:(null!==O&&void 0!==O?O:[]).map((e=>Ea[e])),isPendulum:"pendulum"===C,pendulumScaleBlue:null==y?"0":`${y}`,pendulumScaleRed:null==y?"0":`${y}`,pendulumEffect:L,password:`${u}`.padStart(8,"0"),creator:me.tcg[0]}}},Da=1e3,Ha=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Da;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Da,a=t,r=a,n=30,o=100;const l=()=>n=-1;return{reset:function(){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=l,a=l,n=30,o=100,r=l},searchDown:()=>(a-=o,n-=1,a),reverseSearch:()=>(1===o?l():(a+=o,o/=10,a-=o),Math.min(a,t)),finish:l,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===Da)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,Da));return n!==a&&e(n),n},Ia=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let o=t,l=a,i="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[l,o,i,c].filter((e=>""!==e)).join(" ")}, Arial`,getFontInfo:()=>({style:l,size:i,family:c,sizeAsNumber:s,weight:o}),setWeight(e){return o=e,this},setStyle(e){return l=e,this},setSize(e){const t="function"===typeof e?e(s):e;return i="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},Aa=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},Ma=(e,t)=>({...e,fontList:[...e.fontList,Aa(t)]}),Pa=()=>Ya("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),$a=e=>(null!==e&&void 0!==e?e:[]).map((e=>{let{color:t,offset:a}=e;return`${a}|${t}`})).join(","),Ya=e=>e?e.split(",").map(((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}})):Ya("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),Ua=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)((()=>{t((e=>e+1))}),[]),e]},Ka=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:o,onCancel:l,onKeyPress:i}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===i||void 0===i?void 0:i(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n((e=>Math.max(0,a+e+1)%a))):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n((e=>Math.max(0,a+e-1)%a))):"Enter"===e.key||" "===e.key?o():"Escape"===e.key&&(null===l||void 0===l||l()))}}},Ga=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:o}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof o?o*t:o}},Xa=(e,t)=>e.map((e=>e*t)),Va=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:o,headTextSpacing:l,iconSymbolWidth:i,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:o*t,headTextSpacing:"number"===typeof l?l*t:void 0,iconSymbolWidth:"number"===typeof i?i*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},_a=(e,t)=>({...e,fontList:e.fontList.map((e=>Va(e,t)))}),qa=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a};const Ja=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},Za=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,Qa=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const o=e.replace("#","");let l=[0,0,0,1];var a,r,n;if(3===o.length||4===o.length)l=[parseInt(`${o[0]}${o[0]}`,16),parseInt(`${o[1]}${o[1]}`,16),parseInt(`${o[2]}${o[2]}`,16),parseInt(`${null!==(a=o[3])&&void 0!==a?a:"f"}${null!==(r=o[3])&&void 0!==r?r:"f"}`,16)];if(6===o.length||8===o.length)l=[parseInt(o.slice(0,2),16),parseInt(o.slice(2,4),16),parseInt(o.slice(4,6),16),parseInt(null!==(n=o.slice(6,8))&&void 0!==n?n:"ff",16)];return l.map((e=>isNaN(e)?255:e)).slice(0,t?4:3)}catch(o){return[0,0,0,1].slice(0,t?4:3)}},er=()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e};function tr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var ar=a(554),rr=a(304),nr=a(113),or=a(7);const lr=or.b.button`
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
`;var ir=a(568),sr=a(569),cr=a(570);const dr=(e,t)=>{var a,r,n,o,l;const{creator:i,effect:s,format:c,isFirstEdition:d,name:u,password:m,pendulumEffect:p,setId:b,typeAbility:f,nameStyle:h}=e;if(c===t)return e;const g="ocg"===t?fe:be,v="ocg"===t&&/-EN/.test(b)?b.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(b)?b.replace("-JP","-EN"):b,y={...h,font:"ocg"===t&&"Default"===h.font?"OCG":"tcg"===t&&"OCG"===h.font?"Default":h.font};return{...e,name:null!==(a=g[u])&&void 0!==a?a:u,format:t,effect:null!==(r=g[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=g[p])&&void 0!==n?n:p,typeAbility:f.map((e=>{var t;return null!==(t=g[e])&&void 0!==t?t:e})),creator:null!==(o=g[i])&&void 0!==o?o:i,password:null!==(l=g[m])&&void 0!==l?l:m,setId:v,isFirstEdition:"ocg"!==t&&d,nameStyle:y}};var ur=a(91),mr=a(107),pr=a.n(mr),br=a(267),fr=a.n(br);const hr=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(b.jsx)(n.a.Fragment,{children:r.map(((e,a)=>a%2===0?Object(b.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e]))},e)},o={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,o)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:o}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,o)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-2.content":(e,t,n,o)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,o)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-6.content":(e,t,n,o)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...o}}},gr=Object(ur.create)(((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=hr({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),o=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const o=hr(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=o,o}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},l=async a=>{const l=t().languageMetadataMap[a];if(!l)return;const i=r[a]?r[a]:await o(a);i?(e({languageInfo:t().languageMetadataMap[a],language:i.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:l})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await o("eng"),await l(a),e({isInitiating:!1})},loadLanguage:o,changeLanguage:l}})),vr=()=>gr((e=>{let{language:t}=e;return t})),yr=()=>gr.getState().language;var xr=a(268);const jr=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Star Type","Star Alignment","Card Icon Type","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","External Info (JSON)"],Or=[...jr,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],wr=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),Sr=new Set(Or.map(wr)),kr=jr.reduce(((e,t,a)=>{const r=wr(t);return Sr.has(r)&&(e[t]=a),e}),{}),Cr=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,Fr=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},Tr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Nr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,Lr=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,Rr=e=>{try{const t=e[0].reduce(((e,t,a)=>{const r=wr(t);return Sr.has(r)&&(e[t]=a),e}),{});return e.map(((e,a)=>{var r,n,o,l,i,s,c,u,p,b,h,g,v,y,x,j,O,w,S,k,C,F,N,L,R,z,W,E,B,D,H,I,A,M,P,$,Y,U,K,X,V,_,q,J;if(0===a)return null;if(""===e.join(""))return null;const Z=gt(),Q=((e,t)=>a=>{var r,n;const o=null!==(r=t[a])&&void 0!==r?r:-1,l=(null!==(n=e[o])&&void 0!==n?n:"").trim();return""===l?void 0:l})(e,t),ee=(null!==(r=null!==(n=Q("Frame"))&&void 0!==n?n:Q("Background_Type"))&&void 0!==r?r:Z.frame).toLowerCase(),te=null!==(o=null!==(l=Q("Star"))&&void 0!==l?l:Q("Level/Rank"))&&void 0!==o?o:"",ae="text"===Q("Star Type")?te:parseInt(te)<=13&&parseInt(te)>=0&&"2"!==Q("Star_Type")?parseInt(te):te,re=(null!==(i=null!==(s=Q("Foil"))&&void 0!==s?s:Q("Rarity"))&&void 0!==i?i:"normal").toLowerCase(),ne=G[re]?re:"normal",oe=null===(c=Q("Attribute"))||void 0===c?void 0:c.toUpperCase(),le=oe?"NONE"===oe?f:oe:"spell"===ee?"SPELL":"trap"===ee?"TRAP":Z.attribute,ie=null!==(u=Q("Art Finish"))&&void 0!==u?u:Q("Art_Finish")?`type${Q("Art_Finish")}`:"",se=null!==(p=Q("ATK"))&&void 0!==p?p:"",ce=null!==(b=Q("Card Icon Type"))&&void 0!==b?b:Z.cardIcon,de=null!==(h=Q("Copyright"))&&void 0!==h?h:"",ue=null!==(g=Q("DEF"))&&void 0!==g?g:"",me=null!==(v=Q("Effect"))&&void 0!==v?v:"",pe=null!==(y=null===(x=Q("Card Finish"))||void 0===x?void 0:x.split(/,| /).filter((e=>""!==e)))&&void 0!==y?y:[],be=(null!==(j=Q("Format"))&&void 0!==j?j:Z.format).toLowerCase(),fe=Fr(Q("Use Furigana Helper"),Z.furiganaHelper),he=null!==(O=Q("Name"))&&void 0!==O?O:"",ge=null!==(w=Q("Password"))&&void 0!==w?w:"",ve=null!==(S=null!==(k=Q("Set Id"))&&void 0!==k?k:Q("Set_ID"))&&void 0!==S?S:"",ye=(null!==(C=Q("Star Alignment"))&&void 0!==C?C:Z.starAlignment).toLowerCase(),xe=(null!==(F=Q("Sticker"))&&void 0!==F?F:Z.sticker).toLowerCase(),je=(null!==(N=null!==(L=Q("Spell/Trap Icon"))&&void 0!==L?L:Q("spell_type/trap_type"))&&void 0!==N?N:Z.subFamily).toUpperCase(),Oe=null===(R=Q("Edition"))||void 0===R?void 0:R.toLowerCase(),we=Fr(Q("Is First Edition"),Oe?"1st edition"===Oe:Z.isFirstEdition),Se=Fr(Q("Is Duel Terminal Card"),Oe?"duel terminal"===Oe:Z.isDuelTerminalCard),ke=Fr(Q("Is Limited Edition"),Oe?"limited edition"===Oe:Z.isLimitedEdition),Ce=Fr(Q("Is Speed Card"),Oe?"speed duel"===Oe:Z.isSpeedCard),Fe=Fr(Q("Is Legacy Card"),Z.isLegacyCard),Te=Fr(Q("Is Pendulum"),Z.isPendulum),Ne=(null!==(z=Q("Bottom Frame"))&&void 0!==z?z:Z.pendulumFrame).toLowerCase(),Le=null!==(W=Q("Pendulum Effect"))&&void 0!==W?W:"",Re=null!==(E=Q("Pendulum Scale Red"))&&void 0!==E?E:"",ze=null!==(B=Q("Pendulum Scale Blue"))&&void 0!==B?B:"",We=null!==(D=Q("Pendulum Size"))&&void 0!==D?D:"medium",Ee=Q("Type Ability"),Be=Ee?Ee.split("/"):[Q("Type_1"),Q("Type_2"),Q("Type_3"),Q("Type_4")].filter((e=>"string"===typeof e&&""!==e)),De=(null!==(H=Q("Condense Rate"))&&void 0!==H?H:Z.effectStyle.condenseTolerant).toLowerCase(),He=Tr(Q("Effect Style - Upsize"),Z.effectStyle.upSize),Ie=Tr(Q("Pendulum Effect Style - Upsize"),Z.pendulumStyle.upSize),Ae=(null!==(I=Q("Effect Style - Font Style"))&&void 0!==I?I:Z.effectStyle.fontStyle).toLowerCase(),Me=(null!==(A=Q("Pendulum Effect Style - Font Style"))&&void 0!==A?A:Z.pendulumStyle.fontStyle).toLowerCase(),Pe=d(),$e={artBorder:Fr(Q("Opacity - Art Border"),Pe.artBorder),baseFill:null!==(M=Q("Opacity - Base Fill"))&&void 0!==M?M:Pe.baseFill,body:Tr(Q("Opacity - Body"),Pe.body),boundless:Fr(Q("Opacity - Boundless"),Pe.boundless),name:Tr(Q("Opacity - Name"),Pe.name),nameBorder:Fr(Q("Opacity - Name Border"),Pe.nameBorder),pendulum:Tr(Q("Opacity - Pendulum"),Pe.pendulum),text:Tr(Q("Opacity - Text"),Pe.text)},Ye={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Ue=null!==(P=Q("Art Link"))&&void 0!==P?P:Z.art,Ke=Fr(Q("Is Using Full Art"),Z.artFit),Ge={aspect:m(Te,$e,void 0,We).ratio,height:Nr(Q("Art Crop - Height (%)"),Ye.height),width:Nr(Q("Art Crop - Width (%)"),Ye.width),x:Nr(Q("Art Crop - X (%)"),Ye.x),y:Nr(Q("Art Crop - Y (%)"),Ye.y),unit:"%"},Xe={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Ve=Fr(Q("Has Background"),Z.hasBackground),_e=null!==($=Q("Background Link"))&&void 0!==$?$:Z.background,qe=(null!==(Y=Q("Background Type"))&&void 0!==Y?Y:Z.backgroundType).toLowerCase(),Je=Fr(Q("Is Using Full Background"),Z.backgroundFit),Ze={aspect:m(Te,$e,qe,We).ratio,height:Nr(Q("Background Crop - Height (%)"),Xe.height),width:Nr(Q("Background Crop - Width (%)"),Xe.width),x:Nr(Q("Background Crop - X (%)"),Xe.x),y:Nr(Q("Background Crop - Y (%)"),Xe.y),unit:"%"},Qe={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},et=(null!==(U=Q("Name Style Type"))&&void 0!==U?U:Z.nameStyleType).toLowerCase(),tt={embossPitch:Tr(Q("Name Style - Emboss Pitch"),Qe.embossPitch),embossYaw:Tr(Q("Name Style - Emboss Yaw"),Qe.embossYaw),embossThickness:Tr(Q("Name Style - Emboss Thickness"),Qe.embossThickness),fillStyle:Lr(Q("Name Style - Fill Style"),Qe.fillStyle),font:null!==(K=Q("Name Style - Font"))&&void 0!==K?K:Qe.font,gradientAngle:Tr(Q("Name Style - Gradient Angle"),Qe.gradientAngle),gradientColor:null!==(X=Q("Name Style - Gradient Color"))&&void 0!==X?X:Qe.gradientColor,hasEmboss:Fr(Q("Name Style - Has Emboss"),Qe.hasEmboss),hasGradient:Fr(Q("Name Style - Has Gradient"),Qe.hasGradient),hasOutline:Fr(Q("Name Style - Has Outline"),Qe.hasOutline),hasShadow:Fr(Q("Name Style - Has Shadow"),Qe.hasShadow),headTextFillStyle:Lr(Q("Name Style - Headtext Fill Style"),Qe.headTextFillStyle),lineColor:Lr(Q("Name Style - Line Color"),Qe.lineColor),lineOffsetX:Tr(Q("Name Style - Line Offset X"),Qe.lineOffsetX),lineOffsetY:Tr(Q("Name Style - Line Offset Y"),Qe.lineOffsetY),lineWidth:Tr(Q("Name Style - Line Width"),Qe.lineWidth),pattern:null!==(V=Q("Name Style - Pattern"))&&void 0!==V?V:Qe.pattern,preset:null!==(_=Q("Name Style - Preset"))&&void 0!==_?_:Qe.preset,shadowBlur:Tr(Q("Name Style - Shadow Blur"),Qe.shadowBlur),shadowColor:Lr(Q("Name Style - Shadow Color"),Qe.shadowColor),shadowOffsetX:Tr(Q("Name Style - Shadow Offset X"),Qe.shadowOffsetX),shadowOffsetY:Tr(Q("Name Style - Shadow Offset Y"),Qe.shadowOffsetY)},at=Fr(Q("Is Link"),null!==(q=Z.isLink)&&void 0!==q?q:"link"===ee),rt=null!==(J=[Fr(Q("Link - Top Left Arrow"),!1)?"1":"",Fr(Q("Link - Top Arrow"),!1)?"2":"",Fr(Q("Link - Top Right Arrow"),!1)?"3":"",Fr(Q("Link - Left Arrow"),!1)?"4":"",Fr(Q("Link - Right Arrow"),!1)?"6":"",Fr(Q("Link - Bottom Left Arrow"),!1)?"7":"",Fr(Q("Link - Bottom Arrow"),!1)?"8":"",Fr(Q("Link - Bottom Right Arrow"),!1)?"9":""].filter((e=>""!==e)))&&void 0!==J?J:[],nt=[!1,"#000000",!1,"#000000"],ot=[Fr(Q("Stat Style - Is Custom"),nt[0]),Lr(Q("Stat Style - Fill Color"),nt[1]),Fr(Q("Stat Style - Has Shadow"),nt[2]),Lr(Q("Stat Style - Shadow Color"),nt[3])],lt=[Fr(Q("Type Style - Is Custom"),nt[0]),Lr(Q("Type Style - Fill Color"),nt[1]),Fr(Q("Type Style - Has Shadow"),nt[2]),Lr(Q("Type Style - Shadow Color"),nt[3])],it=[Fr(Q("Effect Style - Is Custom"),nt[0]),Lr(Q("Effect Style - Fill Color"),nt[1]),Fr(Q("Effect Style - Has Shadow"),nt[2]),Lr(Q("Effect Style - Shadow Color"),nt[3])],st=[Fr(Q("Pendulum Effect Style - Is Custom"),nt[0]),Lr(Q("Pendulum Effect Style - Fill Color"),nt[1]),Fr(Q("Pendulum Effect Style - Has Shadow"),nt[2]),Lr(Q("Pendulum Effect Style - Shadow Color"),nt[3])],ct=[Fr(Q("Other Style - Is Custom"),nt[0]),Lr(Q("Other Style - Fill Color"),nt[1]),Fr(Q("Other Style - Has Shadow"),nt[2]),Lr(Q("Other Style - Shadow Color"),nt[3])];let dt={};try{var ut;dt=JSON.parse(null!==(ut=Q("External Info (JSON)"))&&void 0!==ut?ut:"{}")}catch(mt){console.error("csvToCardList",mt)}return{id:Object(T.a)(),...Z,art:Ue,artCrop:Ge,artFinish:ie,artFit:Ke,artSource:"online",atk:se,attribute:le,background:_e,backgroundCrop:Ze,backgroundFit:Je,backgroundSource:"online",backgroundType:qe,cardIcon:ce,condenseTolerant:De,creator:de,def:ue,effectStyle:{condenseTolerant:De,upSize:He,fontStyle:Ae},effect:me,effectTextStyle:it,externalInfo:dt,finish:pe,foil:ne,format:be,frame:ee,furiganaHelper:fe,hasBackground:Ve,isDuelTerminalCard:Se,isFirstEdition:we,isLegacyCard:Fe,isLimitedEdition:ke,isLink:at,isPendulum:Te,isSpeedCard:Ce,linkMap:rt,name:he,nameStyle:tt,nameStyleType:et,opacity:$e,otherTextStyle:ct,password:ge,pendulumEffect:Le,pendulumFrame:Ne,pendulumScaleBlue:ze,pendulumScaleRed:Re,pendulumStyle:{upSize:Ie,fontStyle:Me},pendulumTextStyle:st,pendulumSize:We,setId:ve,star:ae,starAlignment:ye,statTextStyle:ot,sticker:xe,subFamily:je,typeAbility:Be,typeTextStyle:lt}})).filter((e=>null!=e))}catch(t){return console.error("csvToCardList",t),[]}},zr=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),o=!!r&&isFinite(r);if(n&&!o)return-1;if(!n&&o)return 1;if(n&&o)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const l="?"===e?1:""===e?-1:0,i="?"===t?1:""===t?-1:0;return i-l===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):i-l},Wr=(e,t)=>e.name.localeCompare(t.name),Er=(e,t)=>e.setId.localeCompare(t.setId),Br=(e,t)=>zr(e.atk,t.atk),Dr=(e,t)=>zr(e.def,t.def),Hr=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:zr(e.star,t.star),Ir=(e,t)=>{var a,r,n,o;const l=he[t.frame].sortWeight-he[e.frame].sortWeight;if(0!==l)return l;return(null!==(a=null===(r=he[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(o=he[e.pendulumFrame])||void 0===o?void 0:o.sortWeight)&&void 0!==n?n:1e3)},Ar=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||Jt(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},Mr=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},Pr={name:{key:"name",sortFunction:e=>e.map(Ar).sort(((e,t)=>Mr([Wr,Hr,Ir,Er,Br,Dr],e,t)))},atk:{key:"atk",sortFunction:e=>e.map(Ar).sort(((e,t)=>Mr([Br,Dr,Hr,Ir,Wr,Er],e,t)))},def:{key:"def",sortFunction:e=>e.map(Ar).sort(((e,t)=>Mr([Dr,Br,Hr,Ir,Wr,Er],e,t)))},set:{key:"set",sortFunction:e=>e.map(Ar).sort(((e,t)=>Mr([Er,Ir,Hr,Wr,Br,Dr],e,t)))},level:{key:"level",sortFunction:e=>e.map(Ar).sort(((e,t)=>Mr([Ir,Hr,Wr,Er,Br,Dr],e,t)))}},$r=(e,t)=>{const a=Object.values(t).filter((e=>null!=e));return 0===a.length?e:a.reduce(((e,t)=>t(e)),e)},Yr=Object(ur.create)(Object(xr.subscribeWithSelector)((e=>({activeId:"",cardDisplayList:[],cardList:[],filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e((e=>{let{cardList:t,filterFunctionMap:n}=e;const o={...n};if("text"===a){const e=r.toLowerCase();o[a]=t=>t.filter((t=>{let{name:a,effect:r,pendulumEffect:n}=t;return(ha(a).toLowerCase()+ga(r).toLowerCase()+ga(n).toLowerCase()).includes(e)}))}return{filterFunctionMap:o,cardDisplayList:$r(t,o)}}))},resetFilter:()=>{e((e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}}))},addCard:t=>e((e=>{let{cardList:a}=e;const r={id:Object(T.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}})),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e((e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}})),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e((e=>{let{cardList:r,cardDisplayList:n,isListDirty:o}=e,l=o;if(!1===l&&a){const e=r.find((e=>e.id===t.id));l=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:o,backgroundCrop:l,...i}=t;return Object(ra.a)(n,i)&&fa(a,o)&&fa(r,l)})(t,e)}return{isListDirty:l,cardList:r.map((e=>e.id===t.id?{...t}:e)),cardDisplayList:n.map((e=>e.id===t.id?{...t}:e))}}))},setActiveId:t=>e({activeId:t}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e((e=>{var a,r,n,o;let{cardList:l,activeId:i,cardDisplayList:s}=e;const c=l.filter((e=>e.id!==t)),d=s.filter((e=>e.id!==t)),u=d.findIndex((e=>e.id===i));return{activeId:i===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(o=d[0])||void 0===o?void 0:o.id)&&void 0!==a?a:"":i,cardList:c,cardDisplayList:d}}))},duplicateCard:t=>{e((e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex((e=>{let{name:a}=e;return a===t.name})),o=Object(T.a)(),l={...Object(aa.a)(t),name:`${t.name} - Copy`,id:o},i=n<0?[...a,l]:[...a.slice(0,n),a[n],l,...a.slice(n+1,a.length)];return{activeId:o,pendingActiveCard:l,cardList:i,cardDisplayList:$r(i,r)}}))},sortList:t=>{e((e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:Pr[t].sortFunction(a),cardList:Pr[t].sortFunction(r)}}))}})))),Ur=(e,t)=>{const a=Object(T.a)();let r=gt(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=sa(a);r=Object.keys(e).length>0?da(e,t):da(a,t)}else if(ua(a))r=da(a);else if(ma(a)){const e=sa(a);r=da(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:o}=Ba(e);n=t,r=o}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=Ba(a);n=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:n,effect:o,boxSize:l,copyright:i,icon:s,id:c,image:d,layout:u,level:m,link:p,pendulum:b,rarity:h,serial:v,type:y,variant:x,version:j}=e,{red:O,blue:w,boxSize:k,boxSizeEnabled:C,effect:F,enabled:T}=b,N=xa[s],L=Sa[n],R=Ca[u],z="string"===typeof(W=d)&&W.startsWith("data:image/");var W;const E=parseInt(m),B=h?Fa[h.toLowerCase()]:void 0;let D=void 0===N||void 0===L||void 0===R||void 0===B;const{finish:H,artFinish:I,text:A}=null!==B&&void 0!==B?B:{},M=A?S[A]:null;return{isPartial:D,result:{...gt(),finish:null!==H&&void 0!==H?H:[],name:t,nameStyleType:A?"predefined":"auto",nameStyle:M?M.value:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},atk:a,def:r,attribute:null!==L&&void 0!==L?L:f,effect:o,creator:i,subFamily:null!==N&&void 0!==N?N:g,setId:c,frame:null!==R&&void 0!==R?R:"normal",star:`${E}`===m&&E<=13?E:m,typeAbility:y.split("/").map((e=>e.trim())),art:z?"":d,artFit:!0,artData:z?d:"",artSource:z?"offline":"online",artFinish:null!==I&&void 0!==I?I:"normal",isLink:"link"===R&&null!=p,linkMap:[!0===(null===p||void 0===p?void 0:p.topLeft)?"1":null,!0===(null===p||void 0===p?void 0:p.topCenter)?"2":null,!0===(null===p||void 0===p?void 0:p.topRight)?"3":null,!0===(null===p||void 0===p?void 0:p.middleLeft)?"4":null,!0===(null===p||void 0===p?void 0:p.middleRight)?"6":null,!0===(null===p||void 0===p?void 0:p.bottomLeft)?"7":null,!0===(null===p||void 0===p?void 0:p.bottomCenter)?"8":null,!0===(null===p||void 0===p?void 0:p.bottomRight)?"9":null].filter((e=>"string"===typeof e)),isPendulum:T,pendulumScaleBlue:w,pendulumScaleRed:O,pendulumEffect:F,pendulumSize:Oa[k],password:v,externalInfo:{version:j,variant:x,boxSize:l,rarity:h,pendulum:{boxSize:k,boxSizeEnabled:C}}}}})(a);n=e,r=t}}catch(o){console.error("decodedCard",e,o);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?ca(e):"string"===typeof e?JSON.parse(e):e,da(t)}(e,!0),rr.a.info({message:yr()["service.decode.outdated.message"],description:yr()["service.decode.outdated.description"]})}catch(o){console.error("cardData",e,o),rr.a.error({message:yr()["service.decode.error.message"],description:yr()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},Kr={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},Gr=Object(ur.create)(((e,t)=>({card:ht(),setCard:(t,a)=>{const r=Yr.getState().changeActiveCard;if("function"===typeof t)e((e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}}));else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(T.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:o}=t(),l=t=>{o((a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}}))};if(!n)return l;const i="string"===typeof n?null!==(a=Kr[n])&&void 0!==a?a:void 0:n;if(!i)return l;const{wait:s,type:c}=i;return"debounce"===c?pr()(l,s):"throttle"===c?fr()(l,s):l}}))),Xr=Object(ur.create)((e=>{const{allowHotkey:t,exportFormat:a,reduceMotionColor:r,resolution:n,globalScale:o,showCreativeOption:l,showExtraDecorativeOption:i,mirrorPendulumScale:c}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{globalScale:"number"===typeof o&&o<=s.maximumScale?o:1,exportFormat:"string"===typeof a?a:"csv",resolution:Array.isArray(n)&&"number"===typeof n[0]&&"number"===typeof n[1]?n:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof r&&r,showCreativeOption:"boolean"!==typeof l||l,showExtraDecorativeOption:"boolean"!==typeof i||i,mirrorPendulumScale:"boolean"===typeof c&&c},updateSetting:t=>{e((e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}}))}}})),Vr=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:o,onExport:l,onDownloadError:i,onDownloadComplete:s}=e;const c=vr(),{card:d}=Gr(),u=Xr((e=>e.setting.resolution)),{opacity:m,name:p,isPendulum:b,pendulumSize:f}=d,h=Object(r.useRef)(!1),g=Object(r.useCallback)((function(){var e;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=n.current,o=null===r||void 0===r?void 0:r.cloneNode(),l=null===r||void 0===r?void 0:r.getContext("2d"),c=null===o||void 0===o?void 0:o.getContext("2d");if(r&&l&&o&&c&&!t)try{a&&(o.width=a[0],o.height=a[1]),c.drawImage(r,0,0,r.width,r.height,0,0,o.width,o.height);const e=ha(p);var d=document.createElement("a");d.download=e?`${e}.png`:"card.png",d.href=o.toDataURL("image/png"),d.click()}catch(m){i()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()}),[n,t,p,u,s,i]);return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const t=ha(p);e&&(document.title=t?`${t} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")}),500),()=>{e=!1}}),[p]),Object(r.useEffect)((()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.2.2")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}})),Object(r.useEffect)((()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.2.2")?r:"unknown")}catch(i){const e="fail-to-set-storage-notification";rr.a.close(e),rr.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,r,i,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(i=document.getElementById("export-canvas-guard"))||void 0===i||i.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),o.current.pipelineRunning=!0,await o.current.currentPipeline,e&&(o.current.currentPipeline=l({isPendulum:b,opacity:m,pendulumSize:f,isRelevant:()=>e}),await o.current.currentPipeline,e))){var c,u,p,v;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(ia(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(p=document.getElementById("export-canvas-guard"))||void 0===p||p.setAttribute("style","display: none"),null===(v=document.getElementById("save-button-waiting"))||void 0===v||v.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),o.current.pipelineRunning=!1,h.current&&(h.current=!1,g())}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}})),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout((()=>{!1===o.current.pipelineRunning?g(a):h.current=!0}),200)},isPipelineRunning:()=>o.current.pipelineRunning}},{height:_r,width:qr,maximumScale:Jr}=s,Zr=()=>"#000000".replace(/0/g,(()=>(~~(12*Math.random()+2)).toString(16))),Qr=e=>{let{ctx:t,color:a=Zr(),width:r,offset:n=4,edge:o,baseline:l,xRatio:i}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(o/i,l+1+Math.random()*n,r/i,2),t.fillStyle=s},en=(e,t,a,r,n,o)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==o&&void 0!==o?o:{};e.textAlign="left";const i=t.split("");let s=r;return i.forEach((t=>{e.fillText(t,s,n),l&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2})),s},tn=(e,t,a,r,n,o)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==o&&void 0!==o?o:{};e.textAlign="right";const i=t.split("");let s=r;return i.forEach(((t,r)=>{const o=i[i.length-r-1];e.fillText(o,s,n),l&&e.strokeText(o,s,n),s-=e.measureText(o).width*(2+a)/2})),s},an=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qr*Jr,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_r*Jr;return!!e&&(e.clearRect(0,0,t,a),!0)},rn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U;return async(a,r,n,o)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var l,i;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(l=t[r])&&void 0!==l?l:[],u=o?null!==(i=c[o])&&void 0!==i?i:o:z;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},nn="#000000",on="#000000",ln="#000000",sn=e=>{var t,a;let{ctx:r,x:n,y:o,blur:l,color:i,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:p=1,useDefault:b=!0}=e;return(b||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*p),(b||"number"===typeof o)&&(r.shadowOffsetY=(null!==o&&void 0!==o?o:0)*p),(b||"number"===typeof l)&&(r.shadowBlur=(null!==l&&void 0!==l?l:0)*p),(b||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:on),(b||"string"===typeof i)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:i)&&void 0!==t?t:ln),(b||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:nn),(b||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*p),()=>{(b||"number"===typeof n)&&(r.shadowOffsetX=0),(b||"number"===typeof o)&&(r.shadowOffsetY=0),(b||"number"===typeof l)&&(r.shadowBlur=0),(b||"string"===typeof c)&&(r.shadowColor=on),(b||"string"===typeof i)&&(r.fillStyle=ln),(b||"string"===typeof d)&&(r.strokeStyle=nn),(b||"number"===typeof m)&&(r.lineWidth=0)}},cn={},dn=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var o,l;if(!0===(null===(o=cn[t])||void 0===o?void 0:o.ready)){const o=cn[t].image,l="number"===typeof a?a:a(o),i="number"===typeof r?r:r(o);return e.drawImage(o,l,i),void setTimeout((()=>n(!0)),0)}if(null!==(l=cn[t])&&void 0!==l&&l.error)return void setTimeout((()=>n(!0)),0);const i=cn[t]&&(cn[t].cache||cn[t].ready),s=i?cn[t].image:new Image;i||(s.src="/ygocarder"+t),s.addEventListener("load",(()=>{const o="number"===typeof a?a:a(s),l="number"===typeof r?r:r(s);e.drawImage(s,o,l),cn[t]&&(cn[t].ready=!0,cn[t].error=!1),n(!0)}),{once:!0}),s.addEventListener("error",(()=>{cn[t]&&(cn[t].error=!0),n(!1)}),{once:!0}),i||(cn[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},un=async(e,t,a,r,n,o,l,i,s,c)=>await(async(e,t,a,r,n,o,l,i,s,c)=>new Promise(e&&""!==t?d=>{var u,m;if(!0===(null===(u=cn[t])||void 0===u?void 0:u.ready)){const u=cn[t].image,m="number"===typeof a?a:a(u),p="number"===typeof r?r:r(u),b="number"===typeof n?n:n(u),f="number"===typeof o?o:o(u),h="number"===typeof l?l:null===l||void 0===l?void 0:l(u),g="number"===typeof i?i:null===i||void 0===i?void 0:i(u),v="number"===typeof s?s:null===s||void 0===s?void 0:s(u),y="number"===typeof c?c:null===c||void 0===c?void 0:c(u);return"number"===typeof h&&"number"===typeof g&&"number"===typeof v&&"number"===typeof y?e.drawImage(u,h,g,v,y,m,p,b,f):e.drawImage(u,m,p,b,f),void setTimeout((()=>d(!0)),0)}if(null!==(m=cn[t])&&void 0!==m&&m.error)return void setTimeout((()=>d(!0)),0);const p=cn[t]&&(cn[t].cache||cn[t].ready),b=p?cn[t].image:new Image;p||(b.src="/ygocarder"+t),b.addEventListener("load",(()=>{const u="number"===typeof a?a:a(b),m="number"===typeof r?r:r(b),p="number"===typeof n?n:n(b),f="number"===typeof o?o:o(b),h="number"===typeof l?l:null===l||void 0===l?void 0:l(b),g="number"===typeof i?i:null===i||void 0===i?void 0:i(b),v="number"===typeof s?s:null===s||void 0===s?void 0:s(b),y="number"===typeof c?c:null===c||void 0===c?void 0:c(b);"number"===typeof h&&"number"===typeof g&&"number"===typeof v&&"number"===typeof y?e.drawImage(b,h,g,v,y,u,m,p,f):e.drawImage(b,u,m,p,f),cn[t]&&(cn[t].ready=!0,cn[t].error=!1),d(!0)}),{once:!0}),b.addEventListener("error",(()=>{cn[t]&&(cn[t].error=!0),d(!1)}),{once:!0}),p||(cn[t]={image:b,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,r,n,o,l,i,s,c),mn=async(e,t,a,r,n,o,l,i)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=o;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await un(d,t,0,0,n,o),null!==i&&void 0!==i&&i.color&&(d.fillStyle=i.color,d.fillRect(0,0,n,o),d.globalCompositeOperation="destination-in"),await un(d,t,0,0,n,o),d.globalCompositeOperation="source-over";const u=sn({ctx:s,...i,globalScale:l});s.drawImage(c,a,r),u()},pn=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:o=!1,debug:l,fontStyle:i,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(Me.test(n))return{width:0,boundWidth:0};const u="tcg"===i?dt:it,m="tcg"===i?st:ot,p="tcg"===i?ct:lt,b=r.measureText(n),{width:f,actualBoundingBoxLeft:h,actualBoundingBoxRight:g}=b,v=h+g;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=o?p[n]:m[n])&&void 0!==t?t:0;if("tcg"===i){var w;return{width:f,actualBoundWidth:v,boundWidth:f+2*((null!==(w=u[n])&&void 0!==w?w:0)*f),metric:b,offsetRatio:O}}let S=(null!==(a=u[n])&&void 0!==a?a:0)*f+("furigana"===c?0:Math.min(.075*f,Math.max(.45*d,f*x)*y)),k=1;Qe.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),k=.6):et.test(n)?(j="furigana"===c?v:Math.max(v,.75*f),S=2*d):Ke.test(n)?j="furigana"===c?v:Math.max(v,.7*f):_e.test(n)?j=f:at.test(n)?j=2*v:rt.test(n)?j=1.25*v*(o?.5:1):Je.test(n)?j="furigana"===c?v:Math.max(v,.75*f):Ze.test(n)?j=Math.max(v,.69*f)*("creator"===c?.975:1):tt.test(n)?(j=f,S=0):j="furigana"===c?v:Math.max(v,.75*f),S="furigana"===c?0:S;const C=1*f*1;return l&&console.info(`getLetterWidth ${l}`,n,b,1,1,"|",C),{width:f,actualBoundWidth:v,boundWidth:"standard"===c?f*k:j+2*S,metric:b,offsetRatio:O}},bn=e=>{var t;let{ctx:a,baseline:r,edge:n,letter:o,xRatio:l,deviation:i,letterMetric:s,textDrawer:c}=e;const{boundWidth:d,metric:u=a.measureText(o),offsetRatio:m=0}=null!==s&&void 0!==s?s:{},{letterMap:p={},threshold:b=10}=null!==i&&void 0!==i?i:{},{uniformBoxDescent:f}=null!==(t=p[o])&&void 0!==t?t:{},h=u.width*l,g=d?d*l:h,v=null!==c&&void 0!==c?c:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},y=(h-g)/2,x=g*m;let j=1,O=0;if("number"===typeof f&&l>=b){const{actualBoundingBoxDescent:e,actualBoundingBoxAscent:t}=a.measureText(o);O=f-e;const r=t+e;j=(r+2*O)/r}a.scale(1,j),v({ctx:a,letter:o,scaledEdge:n/l-y-x,scaledBaseline:(r+O)/j}),a.scale(1,1/j)},fn=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${pt}])|(${Ne}[\\w\\W]+?${Le})|(.+?)`):new RegExp(`([${pt}])|${Ne}([\\w\\W]+?)${Le}|(.+?)`);return e.split(t).filter((e=>null!=e&&""!==e))},hn=(e,t,a,r,n)=>{const o=Va(V,n),{fontSize:l,ordinalFontRatio:i=o.ordinalFontRatio,headTextFontRatio:s=o.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:p=c,numberFontRatio:b=1,furiganaFont:f}=t;let h=r.getFontInfo();let g=r.getFontInfo();let v=r.getFontInfo();let y=r.getFontInfo();let x=r.getFontInfo();return{applyNumberFont:()=>{h=r.getFontInfo(),e.font=r.setFamily(p).setSize(l*b).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(h.family).setSize(h.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;x=r.getFontInfo(),e.font=r.setSize(l*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(x.size).getFont()},applySymbolFont:()=>{g=r.getFontInfo(),e.font=r.setFamily(u).setSize(l*m).getFont()},stopApplySymbolFont:()=>{e.font=r.setFamily(g.family).setSize(g.size).getFont()},applyOrdinalFont:()=>{v=r.getFontInfo(),e.font=r.setFamily(d).setSize(l*i).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(v.family).setSize(v.size).getFont()},applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y=r.getFontInfo(),e.font=r.setFamily(f).setWeight(t?"bold":"").setSize(l*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(y.family).setWeight(y.weight).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},gn=(e,t,a,r,n)=>{const o=(r-n)/2;e.beginPath(),e.arc(t+o,a-o,o,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},vn=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:o,headTextSpacing:l,gapPadding:i,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,p=n/a*d;let b=l,f=0;p<=.95?b=1*l:p<=1.175?b=l>=0?0:3*l:p<=1.56?b=l>=0?-1*l/4:3*l:(f=.66,b=l>=0?-1*l/4:2*l),(c||u>0&&u<1)&&(b=l);const h=n*(u&&!c?u:!f||c?1:f)+b*(r.length-1),g=m?0:(a-n)/r.length,v=a,y=1===t.length||2*i+h>a?"center":"space-around",x="center"===y?b:g,j="center"===y?2*i+h:v,O=c?Math.min(j,a):j,w="center"===y?(h-a)/2:0,S=Math.max(o,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,S),{gapPadding:i,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:S,headTextXRatio:"center"===y?f:0}},yn=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,xn=e=>{let{ctx:t,token:a,nextToken:r,xRatio:n,previousTokenGap:o=0,letterSpacing:l,format:i,globalScale:s,textData:c}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const d=Va(V,s),u=null!==l&&void 0!==l?l:d.letterSpacing,{currentFont:m,fontData:p,fontLevel:b}=c,{metricMethod:f,headTextGapRatio:h=_.headTextGapRatio,headTextOverflow:g=_.headTextOverflow,fontStyle:v}=p,y=p.fontList[b],{bulletWidth:x,capitalLetterRatio:j,fontSize:O,iconSymbolWidth:w=x,largeSymbolRatio:S=d.largeSymbolRatio,headTextSpacing:k=d.headTextSpacing,squareBracketRatio:C,wordLetterSpacing:F}=y,T=-.5*O,{applyScale:N,reverseScale:L,applyLargerText:R,stopApplyLargerText:z,applyFuriganaFont:W,stopApplyFuriganaFont:E,applyOrdinalFont:B,stopApplyOrdinalFont:D,applySymbolFont:H,stopApplySymbolFont:I,applyNumberFont:A,stopApplyNumberFont:M}=hn(t,p,y,m,s),P=1+u/2;let $="",Y=0,U=0,K=!1;const G=void 0===r;let X=null!==o&&void 0!==o?o:0,q=!1,J=0;const Z=a.replaceAll(new RegExp(Ae,"g"),"").split(Te).filter((e=>null!=e&&""!==e));for(let V=0;V<Z.length;V++){const e=0===V,a=Z[V];if("\u29be"===a){X=0;Y+=w/n*P,e&&(J=0,$=a[0])}else if("\u25cf"===a){X=0;Y+=x/n*P,e&&(J=0,$=a[0])}else if(/[\xa9]/.test(a)){X=0,R(S);const r=t.measureText(a).width/n;z(),Y+=r*P,e&&(J=0,$=a[0])}else if(Xe.test(a)){X=0,B();const r=t.measureText(a).width/n;D(),Y+=r*P,U+=1,e&&(J=0,$=a[0])}else if(mt.test(a)){const[o,l,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),m="||"===l,{totalWidth:p}=xn({ctx:t,token:o,nextToken:r,xRatio:n,letterSpacing:u,previousTokenGap:0,format:i,textData:c,globalScale:s});W();const b=d.split("").map((e=>pn({ctx:t,letter:e,fontStyle:v,metricMethod:"furigana",xRatio:1,globalScale:s}).boundWidth)).reduce(((e,t)=>e+t),0);E();const{halfGap:f,headTextWidth:y}=vn({headText:d,headTextLetterWidth:b/n,footText:o,footTextWidth:p,headTextGap:T/n,headTextSpacing:k,gapPadding:h*O/n,fitFootText:m,sentenceXRatio:n,xRatio:"condense"===g&&o.length>1?Math.min(1,n+.1):0}),x=0===d.length?Math.max(T,p/bt):f,j=x,w=x,S=Math.max(y,p),C=yn(X,j);X=w,Y+=S-C,U+=1,e&&(q=!0,J=j,$=o[0])}else if(Fe.test(a)){const r=F?1+F/2:P;t.letterSpacing=(r-1)*m.getFontInfo().sizeAsNumber+"px";let n=a,o=0;for(;""!==n;){let e=n[0],a=n.slice(1),r=t.measureText(n).width-t.measureText(a).width;ke.test(e)?(N(C),r=t.measureText(n).width-t.measureText(a).width,L(C)):Se.test(e)?(N(j),r=t.measureText(n).width-t.measureText(a).width,L(j)):qe.test(e)?(A(),r=t.measureText(n).width-t.measureText(a).width,M()):$e.test(e)&&"tcg"===v?(H(),r=t.measureText(n).width-t.measureText(a).width,I()):r=t.measureText(n).width-t.measureText(a).width,o+=r,n=a}const l=Math.max(T,o/bt),i=l;Y+=o-yn(X,l),X=i,e&&(J=l,$=a[0]),t.letterSpacing="0px"}else if($e.test(a)&&"tcg"===v){H();const r=t.measureText(a).width*P;I();const n=Math.max(T,r/bt),o=n;Y+=r-yn(X,n),X=o,e&&(J=n,$=a[0])}else{const{boundWidth:r}=pn({ctx:t,letter:a,isLastOfLine:G,fontStyle:v,metricMethod:f,xRatio:n,globalScale:s}),o=r*P,l=Math.max(T,o/bt),c=l;Y+=o-yn(X,l),X=c,("ocg"===i||"tcg"===i&&/\s+/.test(a))&&!1===tt.test(a)&&(U+=1,V===Z.length-1&&(K=!0)),e&&(J=l,$=a[0]),nt.test(a)&&(J=0,X=0)}}return{totalWidth:Y,spaceCount:U,spaceAtEnd:K,leftMostLetter:$,rightGap:X,leftGap:J,offsetable:q}},jn=e=>{let{ctx:t,line:a,width:r,xRatio:n,format:o,isLast:l,textData:i,globalScale:s}=e;const c=fn(a);let d=0,u=0,m=0;for(let b=0,f=n;b<c.length;b++){const e=c[b],a=c[b+1];if(e===Be){f=1;continue}if(e===De){f=n;continue}const{spaceCount:r,totalWidth:l,spaceAtEnd:p,leftGap:h,rightGap:g,leftMostLetter:v}=xn({ctx:t,token:e,nextToken:a,xRatio:f,previousTokenGap:m/f,textData:i,format:o,globalScale:s});m=g*f,d+=l*f+((0===b&&h>0?-1*Math.min(20*s,h*f):0)+(0===b&&Ve.test(v)?4*s*f:0)),u+=r-(p&&void 0===a?1:0)}const p=u>0?(r-d)/u:0;return{tokenList:c,spaceWidth:l?"tcg"===o?p>1.5*s?0:p:p>3.65*s?0:p:p}},On=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:o,format:l,textData:i,globalScale:s}=e;const{fontData:c,fontLevel:d}=i,{letterSpacing:u}=c.fontList[d],m=[],p=r.reduce(((e,r)=>{const n=(a<=100?100:a)/1e3,c=o/n,d=fn(r,!0);let p=1,b=[],f=0,h=0,g=0;for(let o=0,y=n;o<d.length;o++){const e=d[o],r=d[o+1];e===Be?(g+=1,y=1):e===De&&(g-=1,y=n);let{leftMostLetter:v,totalWidth:x,rightGap:j,leftGap:O}=xn({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:h,format:l,letterSpacing:u,textData:i,globalScale:s});let w=x/(g>0?n:1)+(0===o?(O>0?-1*Math.min(20*s/y,O):0)+(Ve.test(v)?4*s:0):0);if(f+w>c){let n=b.join("").trim();g>0&&(n+=De),g<0&&(n=Be+n),g=0,m.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:f});let{totalWidth:o,rightGap:c,leftGap:d}=xn({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:0,format:l,textData:i,globalScale:s});f=o+((d>0?-1*Math.min(20*s/y,d):0)+(Ve.test(v)?4*s:0)),h=c,b=[e],p+=1}else f+=w,h=j,b.push(e)}let v=b.join("").trim();return g>0&&(v+=De),g<0&&(v=Be+v),g=0,m.push({line:v,effectiveMedian:a,isLast:!0,actualLineWidth:f}),e+p}),0)+(null!==n&&void 0!==n?n:0);return{currentLineList:m,currentLineCount:p}},wn=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:o,headTextLetterWidth:l,footText:i,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:p,globalScale:b,xRatio:f,fontStyle:h,textWorker:g,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=g,S="condense"===y&&i.length>1?Math.min(1,f+.1):0,{gapPadding:k,letterSpacing:C,trueHeadTextWidth:F,halfGap:T,alignment:N,headTextXRatio:L}=vn({headText:o,headTextLetterWidth:l,footText:i,footTextWidth:s*f,headTextGap:c,headTextSpacing:d*f,gapPadding:a*p,fitFootText:v,sentenceXRatio:f,xRatio:S}),R=F>s*f;if(0===o.length)return{trueHeadTextWidth:F,halfGap:T};const z=v?Math.min(1,s*f/F):1,W=v?z:S&&"center"===N?S:L;let E=r;O(),(v||W)&&(w(W,1),E=r/W),"center"===N?(E+=k,R?W>z&&(E+=(s*f/W-F)/2/W):E+=(s*f-F)/2):E+=C/2;for(const B of o){x();const{width:e,boundWidth:r}=pn({ctx:t,letter:B,fontStyle:h,metricMethod:"furigana",xRatio:1,globalScale:b}),o=(e-r)/2;j(),x(m),t.fillText(B,E-o,n-a*u),j(),E+=r+C}return(v||W)&&O(),w(f,1),{trueHeadTextWidth:F,halfGap:T}},Sn=e=>{let{ctx:t,tokenList:a,trueEdge:r,trueBaseline:n,spaceWidth:o=0,xRatio:l,yRatio:i=1,textData:s,format:c,textDrawer:d,debug:u=!1,option:m,globalScale:p}=e;const{drawHeadText:b=!0}=null!==m&&void 0!==m?m:{},{currentFont:f,fontData:h,fontLevel:g}=s,v=h.fontList[g],{headTextFillStyle:y,headTextBold:x=_.headTextBold,headTextHeightRatio:j=_.headTextHeightRatio,headTextOverflow:O=_.headTextOverflow,headTextGapRatio:w=_.headTextGapRatio,metricMethod:S,fontStyle:k,letterDeviationMap:C={}}=h,F=Va(V,p),{bulletOffset:T=F.bulletOffset,bulletWidth:N,capitalLetterRatio:L=F.capitalLetterRatio,fontSize:R,headTextSpacing:z=F.headTextSpacing,iconSymbolWidth:W=N,largeSymbolRatio:E=F.largeSymbolRatio,letterSpacing:B=F.letterSpacing,ordinalFontOffsetY:D=F.ordinalFontOffsetY,squareBracketRatio:H=F.squareBracketRatio,wordLetterSpacing:I,allRightSymbolOffset:A=F.allRightSymbolOffset}=v,M=hn(t,h,v,f,p),{stopApplyFuriganaFont:P,applyFuriganaFont:$,stopApplyLargerText:Y,applyLargerText:U,stopApplyNumberFont:K,applyNumberFont:G,stopApplyOrdinalFont:X,applyOrdinalFont:q,applyScale:J,reverseScale:Z,applySymbolFont:Q,stopApplySymbolFont:ee,applyAsymmetricScale:te,resetScale:ae}=M,re=1+B/2,ne=n/i;let oe=0,le=[],ie=0,se=r;for(let V=0,_=l;V<a.length;V++){const e=a[V];if(e===Be){_=1,t.setTransform(1,0,0,1,0,0);continue}if(e===De){_=l,t.scale(_,1);continue}const r=-.5*_,m=R*r,h=a[V+1],g=a[V+2],v={ctx:t,xRatio:_,letterSpacing:B,format:c,textData:s,globalScale:p},F={ctx:t,baseline:ne,xRatio:_,textDrawer:d},ue=e.split(Te).filter((e=>null!=e&&""!==e)),{leftMostLetter:me,leftGap:pe,rightGap:be,totalWidth:fe,spaceCount:he}=xn({token:e,nextToken:h,previousTokenGap:oe/_,...v}),ge=0===V?(pe>0?-1*Math.min(20*p,pe*_):0)+(Ve.test(me)?4*p:0):0;let ve=se+ge,ye=oe;for(let a=0;a<ue.length;a++){var ce,de;const l=ue[a],u=null!==(ce=ue[a+1])&&void 0!==ce?ce:h,B=null!==(de=ue[V+2])&&void 0!==de?de:g;if(e===Be||e===De);else if("\u29be"===l)le.push({edge:ve,size:W,baseline:ne}),ve+=W*re,ye=0,ie=0;else if("\u25cf"===l)ae(),gn(t,ve,n+T-1*p,N,ut(c)*p),ve+=N*re,te(_,i),ye=0,ie=0;else if(/[\xa9]/.test(l))ae(),U(E),bn({...F,letter:l,edge:ve*_,baseline:n+("tcg"===c?A:2*A)}),ve+=t.measureText(l).width*re,Y(),te(_,i),ye=0,ie=0;else if(Xe.test(l))ae(),q(),bn({...F,letter:l,edge:ve*_,baseline:n+D}),ve+=t.measureText(l).width*re,X(),te(_,i),ve+=o,ye=0,ie=0;else if(mt.test(l)){const[e,a,n=""]=l.replaceAll(/{|}/g,"").split(/(\|+)/),f="||"===a,{totalWidth:h}=xn({token:e,nextToken:u,previousTokenGap:0,...v});$();const g=n.split("").map((e=>pn({ctx:t,letter:e,fontStyle:k,metricMethod:"furigana",xRatio:1,globalScale:p}).boundWidth)).reduce(((e,t)=>e+t),0);P();const{headTextWidth:S,halfGap:C}=vn({headText:n,headTextLetterWidth:g,footText:e,footTextWidth:h*_,headTextGap:m,headTextSpacing:z*_,gapPadding:R*w,fitFootText:f,sentenceXRatio:_,xRatio:"condense"===O&&e.length>1?Math.min(1,_+.1):0}),F=0===n.length?Math.max(m,h*r):C,T=F,N=F,L=yn(ye,N),W=N>0?N-L:0,{offsetable:E,leftGap:D}=xn({token:u,nextToken:B,previousTokenGap:T/_,...v}),H=D*_,I=yn(T,H),A=W+(T>0?T-I:0);let Y=0,U=0;A>0&&H>=-2*p&&E?(Y=(A+2*Math.max(H,0))/3,U=Math.max(H,0)-Y):Y=W;const K=ve+(F<0?-L:ge?-ge:Y)+ie;ie=U,Sn({ctx:t,format:c,textData:s,tokenList:fn(e),trueBaseline:ne,trueEdge:K,xRatio:_,yRatio:i,spaceWidth:0,textDrawer:d,globalScale:p,debug:!1});const G=t.fillStyle,X=t.strokeStyle,V=t.shadowColor,q=t.shadowOffsetX,J=t.shadowOffsetY,Z=t.shadowBlur;y&&(t.fillStyle=y,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);b&&wn({ctx:t,fontSize:R,edge:ve-L,baseline:ne,headText:n,headTextLetterWidth:g,footText:e,footTextWidth:h,headTextGap:m,headTextSpacing:z,headTextHeightRatio:j,headTextBold:x,headTextGapRatio:w,xRatio:_,fontStyle:k,textWorker:M,fitFootText:f,headTextOverflow:O,globalScale:p}),t.fillStyle=G,t.strokeStyle=X,t.shadowColor=V,t.shadowOffsetX=q,t.shadowOffsetY=J,t.shadowBlur=Z,ve+=Math.max(h*_,S)-L+o,ye=T}else if(Fe.test(l)){const e=I?1+I/2:re;t.letterSpacing=(e-1)*f.getFontInfo().sizeAsNumber+"px";const a=t.measureText(l).width*_,n=Math.max(m,a*r),o=n;ve-=yn(ye,n);let i=l,s=ve;for(;""!==i;){let e=i[0],a=i.slice(1),r=0;const n={...F,deviation:C[`${p}`],letter:e,edge:s};if(ke.test(e))J(H),r=t.measureText(i).width-t.measureText(a).width,bn({...n,edge:s/H,baseline:ne/H}),Z(H);else if(Se.test(e)){J(L),r=t.measureText(i).width-t.measureText(a).width;const o=r>t.measureText(e).width*L?Math.round(r*(1-L))/2:0;bn({...n,edge:s/L+o,baseline:ne/L}),Z(L)}else qe.test(e)?(G(),r=t.measureText(i).width-t.measureText(a).width,bn(n),K()):$e.test(e)&&"tcg"===k?(Q(),r=t.measureText(i).width-t.measureText(a).width,bn(n),ee()):(r=t.measureText(i).width-t.measureText(a).width,bn(n));s+=r*_,i=a}ve=s,ye=o,ie=0,t.letterSpacing="0px"}else if($e.test(l)&&"tcg"===k){const e=l;Q();const a=t.measureText(e).width*re*_,n=Math.max(m,a*r),o=n;ve-=yn(ye,n),bn({...F,letter:e,edge:ve}),ve+=a,ee(),ye=o,ie=0}else{const e=l,a=pn({ctx:t,letter:e,fontStyle:k,metricMethod:S,isLastOfLine:void 0===u,xRatio:_,globalScale:p}),n=a.boundWidth*re*_,i=Math.max(m,n*r),s=i;ve-=yn(ye,i),bn({...F,letter:e,edge:ve,deviation:null===C||void 0===C?void 0:C[`${p}`],letterMetric:a}),ve+=n,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==tt.test(e)&&(ve+=o),nt.test(e)||(ye=s),ie=0}}oe=be*_,u&&Qr({ctx:t,baseline:ne,edge:se,width:fe*_,xRatio:_}),se+=fe*_+he*o+ge}return{tokenEdge:se,iconPositionList:le}},kn=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:o="rubyForm"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let i="",s="ocg"===t?ce:de;for(const f of l){var c;i+=null!==(c=s[f])&&void 0!==c?c:f}const d=i,u=(r?d.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${We}$1${Ee}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${Re}$1${ze}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(Ie,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,(e=>{const t=ue[e];return null!==t&&void 0!==t?t:e})).replaceAll(new RegExp("{{([^{}]+?)}}","g"),(e=>e.replaceAll("{{",Be).replaceAll("}}",De))).replaceAll(new RegExp("{[^{}]+?}","g"),(e=>`${Ne}${e}${Le}`)),m=("tcg"===t||!1===n?u:u.replaceAll(new RegExp(Ye,"g"),(e=>{var t;const a=null!==(t=P[e][o])&&void 0!==t?t:P[e].rubyForm;return`${Ne}${a}${Le}`}))).replaceAll(new RegExp(Ce,"g"),(e=>`${Ne}${e}${Le}`)).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),(e=>`${Ne}${e}${Le}`)).replaceAll(new RegExp(Ge,"g"),(e=>`${Ne}${e}${Le}`)).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),(e=>`${Ne}${e}${Le}`)).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),(e=>`${Ne}${e}${Le}`));let p=[],b=0;for(const f of m)f===Ne?(0===b&&p.push(f),b+=1):f===Le?(b-=1,0===b&&p.push(f)):p.push(f);return p.join("").replaceAll(`${Ee}${Le}`,`${Le}${Ee}`).replaceAll(`${ze}${Le}`,`${Le}${ze}`).replaceAll(`${Ne}${We}`,`${We}${Ne}`).replaceAll(`${Ne}${Re}`,`${Re}${Ne}`).replaceAll(`${Be}${Le}`,`${Le}${Be}`).replaceAll(`${Ne}${De}`,`${De}${Ne}`).replaceAll(`${Re}${ze}`,"").replaceAll(`${We}${Ee}`,"").replaceAll(`${Ne}${Le}`,"")},Cn=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:o}=e;const l=[t,..."pendulumLarge"===o?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter((e=>""!==e)).join("-"),i=[t,..."pendulumLarge"===o?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter((e=>""!==e)).join("-");let s=te[i];return a&&"tcg"===t&&ee[i]&&(s=ee[i]),{fontDataKey:i,fontData:s,sizeList:E[l]}},Fn=e=>{var t;let{ctx:a,content:r,isNormal:n=!1,fontDataKey:o="tcg",fontData:l=te[o],textStyle:i,sizeList:s=E["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:m}=e;const{defaultSizeLevel:p,forceRelaxCondenseLimit:b,globalScale:f=1}=null!==m&&void 0!==m?m:{};let h=null!==p&&void 0!==p?p:0;if(!a||!r)return h;const g=kn(r.trim(),d,{furiganaHelper:u}),{effectText:v,effectFlavorCondition:y,fullLineList:x,fullLineListOption:j}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e;const n=[],o=[],l=new RegExp([`^(${Re}([^${ze}]*)${ze}\\s*)`,`^(${We}([^${Ee}]*)${Ee}\\s*)`].join("|"));let i,s,c,d,u=!1;do{const e=l.exec(r);i=null===e||void 0===e?void 0:e[1],s=null===e||void 0===e?void 0:e[2],c=null===e||void 0===e?void 0:e[3],d=null===e||void 0===e?void 0:e[4],u=!1,s&&i?(n.push(s),r=r.replace(i,""),o.push({alignment:"left"}),u=!0):d&&c&&(n.push(d),r=r.replace(c,""),o.push({alignment:"justify"}),u=!0)}while(u);let m="";const p=null===(t=new RegExp(Pe,"m").exec(e))||void 0===t?void 0:t[1];return p&&a?(m=p.trim(),r=r.replace(p,"")):m="",r=r.replaceAll(Re,"[").replaceAll(ze,"]").replaceAll(We,"[[").replaceAll(Ee,"]]"),{fullLineList:n,fullLineListOption:o,effectText:r,effectFlavorCondition:m}}(g,n),O=(null!==(t=x.length)&&void 0!==t?t:0)+(y.length>0?1:0),w=v?v.split("\n"):[];let S=0;const k=_a(l,f),{fontList:C}=k;for(;h<=C.length&&h>=0;){var F,T,N;const e=h===C.length,t=Math.min(C.length-1,h),r=e?{1:1e3,2:1e3,3:1e3}:"tcg"===d?b&&t<b?W.relaxed:null!==(F=W[c])&&void 0!==F?F:W.strict:{1:800,2:800,3:800},{trueEdge:l,trueWidth:u,trueBaseline:m,trueHeightCap:p}=Ga(null!==(T=s[t])&&void 0!==T?T:s[s.length-1],f),g=n&&"tcg"===d?u-2*f:u,v=e&&"number"===typeof p,L=v?Ma(k,{heightCap:p,lineCount:S}):k,R=v?h:t,{font:z,fontList:E}=L,B=v?E[R]:C[t],{fontSize:D,lineHeight:H,lineCount:I}=B,A=Ia();a.font=A.setWeight("").setSize(D).setFamily(z).getFont(),a.textAlign="left";const M={fontData:L,fontLevel:R,currentFont:A};let P=[];const $=O>I&&"number"===typeof p?1:Ha((e=>{const{currentLineList:t,currentLineCount:r}=On({ctx:a,median:e,paragraphList:w,additionalLineCount:O,format:d,textData:M,width:g,globalScale:f});return P=t,!(r>I)}),200);S=P.length+O;const Y=sn({ctx:a,...i,globalScale:f});if(!($<(null!==(N=r[`${w.length}`])&&void 0!==N?N:r[3])&&h<C.length)){an(a);let e=m+H;if([...x.map(((e,t)=>({line:e,isLast:"justify"!==j[t].alignment,effectiveMedian:Ha((t=>{const{currentLineCount:r}=On({ctx:a,median:t,paragraphList:[e],format:d,textData:M,width:g,globalScale:f});return!(r>1)}))}))),...P].forEach((t=>{let{line:r,isLast:n,effectiveMedian:o}=t;const i=o/1e3,{tokenList:s,spaceWidth:c}=jn({ctx:a,line:r,xRatio:i,format:d,isLast:n,textData:M,width:g,globalScale:f});a.scale(i,1),Sn({ctx:a,tokenList:s,xRatio:i,yRatio:1,trueEdge:l,trueBaseline:e,spaceWidth:c,textData:M,format:d,globalScale:f}),e+=H,a.setTransform(1,0,0,1,0,0)})),y.length>0&&te[o]){const r=_a(te[o],f),n=v?Ma(r,{heightCap:p,lineCount:S}):r,i=v?n.fontList[R]:r.fontList[t],{fontSize:s,lineHeight:c}=i,u=Ia();a.font=u.setSize(s).setFamily(r.font).getFont();const m={fontData:n,fontLevel:R,currentFont:u},b=Ha((e=>{const{currentLineCount:t}=On({ctx:a,median:e,paragraphList:[y],format:d,textData:m,width:g,globalScale:f});return!(t>1)}))/1e3;a.scale(b,1);const h=fn(y);Sn({ctx:a,tokenList:h,xRatio:b,yRatio:1,trueEdge:l,trueBaseline:e,textData:m,format:d,globalScale:f}),e+=c,a.setTransform(1,0,0,1,0,0)}break}h+=1,Y()}return h},{width:Tn}=s,Nn=async(e,t,a,r)=>{const n=e.getContext("2d");if(!n||!Array.isArray(t))return;await mn(e,"link/link-text.png",...Xa([600,1080,120,30],r),r,a);const o=sn({ctx:n,...a,globalScale:r});n.textAlign="right",n.scale(1.2,1),n.font=`bold ${26.55*r}px RoGSanSrfStd-Bd`,n.fillText(`${t.length}`,622.75*r,1105*r),n.setTransform(1,0,0,1,0,0),n.textAlign="left",o()},Ln=async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:o,top:l,height:i,width:s}=ve[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[o,l,s,i];return await un(e,`${d}-base${n?"-full":""}.png`,...m),await un(e,`${d}-core.png`,...m),c?(await un(e,`${u}-base.png`,...m),un(e,`${u}-core.png`,...m)):void 0}))),e.resetTransform())},Rn=async(e,t,a,r,n)=>{e&&"normal"!==a&&(e.scale(t,t),r?await dn(e,`link/link-overlay-arrow-${a}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:r,top:o,height:l,width:i}=ve[n][t-1],s=[r,o,i,l];await un(e,`link/link-overlay-${t}-${a}.png`,...s)}))),e.resetTransform())},{width:zn,height:Wn,topToPendulumStructure:En,topToPendulumStructureFrame:Bn,pendulumIconFrameHeight:Dn,pendulumIconFrameWidth:Hn,pendulumFrameHeight:In,pendulumFrameWidth:An,pendulumStructureHeight:Mn,leftToPendulumStructure:Pn,effectBoxHeight:$n,effectBoxWidth:Yn,leftToEffectBox:Un,topToEffectBox:Kn}=s,Gn=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,globalScale:n,format:o,hasBackground:l,frame:i,bottomFrame:s,backgroundType:c,cardIcon:d,attribute:p,star:b,foil:h,pendulumSize:g,opacity:v,isLink:y,isSpeedSkill:x,isXyz:j,isPendulum:O,pendulumFrameTypeMap:w,loopFinish:S,loopArtFinish:k}=e;const C=t.getContext("2d"),{artBorder:F,nameBorder:T,body:L,name:z,pendulum:W,text:E,boundless:B}=v,{artX:D,artY:H,artFinishX:I,artFinishY:A,artWidth:M,artRatio:P}=m(O,v,void 0,g),{frameType:$,effectBoxOffsetY:Y,pendulumBoxX:U,pendulumBoxY:K,pendulumBoxWidth:G,pendulumBoxHeight:X,pendulumBoxOffsetY:V,artlessFrameY:_}=N[g],q=L>0||F,J=860,Z="normal"!==h,Q=j||x?i:"normal",ee="synchro"===i?["normal","xyz"]:[Q],te=!B&&q,ae={calculateCardArtRedrawCoordination(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;const n=null!==t&&void 0!==t?t:v,{body:o}=n,{artX:l,artY:i,artWidth:s,artFrameWidth:c}=m(O,n,r,g),{width:d,height:u}=e,p=s/d,b=o<100?(Pn-l)/p:0,f=b*p,h=o<100?(En-i)/p:0,y=h*p,x=o<100?u-Mn/p:0;return{imageScaledRatio:p,sourceOffsetX:b,sourceOffsetY:h,destinationOffsetX:f,destinationOffsetY:y,offsetHeight:x,destinationX:l+f,destinationY:i+y,destinationWidth:s-2*f,destinationHeight:s/(d/u)*a-x*p,fillWidth:c,fillHeight:Mn}},drawFrame:async()=>{if(C){if(C.globalAlpha=L/100,C.scale(n,n),await dn(C,`frame/frame-${i}.png`,0,0),await dn(C,`frame-pendulum/frame-pendulum-${s}.png`,0,0),C.resetTransform(),l&&r&&"frame"===c){const{width:e,height:t}=r,a=r.cloneNode(),o=null===a||void 0===a?void 0:a.getContext("2d");a&&o&&(a.width=zn*n,a.height=Wn*n,o.drawImage(r,0,0,e,t,0,0,zn*n,Wn*n),o.clearRect(n*u.normal.artX,n*u.normal.artY,n*u.normal.artWidth,n*u.normal.artWidth/u.normal.artRatio),o.clearRect(n*Un,n*Kn,n*Yn,n*$n),C.drawImage(a,0,0,n*zn,n*Wn,0,0,n*zn,n*Wn))}C.globalAlpha=1}},drawCardArt:()=>{if(!a||!C)return;const{width:e,height:t}=a;t<=0||C.drawImage(a,0,0,e,t,n*D,n*H,n*M,n*M/(e/t))},drawBackground:e=>{if(!r||!C||!l)return;const{width:t,height:a}=r;if(a<=0)return;if("pendulum"===e&&"frame"!==c){let e=ae.calculateCardArtRedrawCoordination(r);"full"===c?e=ae.calculateCardArtRedrawCoordination(r,{...v,body:0},void 0,"full"):"fit"===c&&(e=ae.calculateCardArtRedrawCoordination(r,v,void 0,"fit"));const{sourceOffsetX:o,sourceOffsetY:l,offsetHeight:i,destinationX:s,destinationY:d,destinationWidth:u,destinationHeight:m}=e;return void C.drawImage(r,o,l,t-2*o,a-i,n*s,n*d,n*u,n*m)}const{artX:o,artY:i,artWidth:s}=m(O,{...v,boundless:!0},c,g);C.drawImage(r,0,0,t,a,n*o,n*i,n*s,n*s/(t/a))},drawAttribute:async()=>{C&&(C.scale(n,n),await dn(C,`attribute/attr-${o}-${p.toLowerCase()}.png`,678,55),C.resetTransform())},drawStar:async e=>{let{style:t,starAlignment:a}=e;const r="auto"===d?Qt(i):d;C&&(C.scale(n,n),await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:n,star:o,starAlignment:l="auto",style:i,onStarDraw:s}=e,c="string"===typeof o?""===o?0:1:"number"===typeof o?o:0,d=50*c+4*(c-1),u="right";["rank","negative-level"].includes(r)&&(u="left"),u="auto"===l?u:l,c>12&&(u="center"),n&&"center"===u&&(c=0,d=0);const m="center"===u?(Tn+d)/2:"left"===u?85.9125+d:728.775;let p=-54;if(t&&n&&"st"!==r){const e=50,r=sn({ctx:t,...i,globalScale:a});t.textAlign="left"===u||"right"===u?u:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const o="center"===u?t.measureText(n).width/-2:"left"===u?4:-58;t.fillText(n,m+o,145+.9*e),t.textAlign="left",r()}return await Promise.all([...Array(c)].map((async()=>{p+=54;let e=[m-(50+p),145];return await dn(t,`subfamily/subfamily-${r}.png`,...e),await s(e)})))})({ctx:C,cardIcon:r,text:"string"===typeof b?b:null,star:b,starAlignment:a,style:t,globalScale:n,onStarDraw:async e=>"st"===r?Promise.resolve():await S(C,"star",(async t=>dn(C,`finish/finish-${t}-star.png`,...e)))}),C.resetTransform())},drawPendulumScaleIcon:async()=>{if(!C)return;const e=document.createElement("canvas");e.width=Hn,e.height=Dn;const t=e.getContext("2d");await dn(t,`frame-pendulum/pendulum-scale-${g}.png`,0,0),"scaleless"===w.blue&&t.clearRect(0,0,Hn/2,Dn),"scaleless"===w.red&&t.clearRect(Hn/2,0,Hn/2,Dn),C.scale(n,n),C.drawImage(e,0,750),C.resetTransform()},drawLinkArrowMap:async(e,t)=>Ln(C,n,e,t,B),drawStatBorder:async e=>{C&&(C.scale(n,n),await mn(t,"frame/frame-stat-border.png",0,1070,813,20,n,e),C.resetTransform())},drawNameBackground:async()=>{C&&(C.scale(n,n),C.globalAlpha=z/100,await dn(C,`background/background-name-${i}.png`,0,0),C.globalAlpha=1,C.resetTransform())},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(C){if(C.scale(n,n),C.globalAlpha=E/100,e?await un(C,`background/background-text-${s}.png`,54,885+Y,705,231,0,0+Y,705,231):await dn(C,`background/background-text-${s}.png`,54,885),e){var t;C.globalAlpha=W/100;const{exceptionFrameType:e=$,exceptionPendulumBoxOffsetHeight:a=0}=null!==(t=R[g][s])&&void 0!==t?t:{};await un(C,`background/background-${e}-${s}.png`,U,K+V,G,X,0,V+a,G,X+a)}C.globalAlpha=1,C.resetTransform()}},drawFrameBorder:async()=>{C&&(C.scale(n,n),await dn(C,`frame/frame-border-${Q}.png`,0,0),C.resetTransform())},drawNameBorder:async()=>{if(T&&C){C.scale(n,n);for(let e=0;e<ee.length;e++)await dn(C,`frame/name-border-${ee[e]}.png`,0,0);C.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(q&&C){let e="";e=j||x?`frame/art-border-${i}.png`:y||["zarc","hamon","uria","raviel"].includes(i)?"frame/art-border-special.png":"frame/art-border.png",C.scale(n,n),await dn(C,e,60,170),C.resetTransform()}},drawPendulumBorder:async(e,t)=>{if(!C)return;const a=document.createElement("canvas");a.width=zn,a.height=Wn;const r=a.getContext("2d");await un(r,`frame-pendulum/border-pendulum-${g}-${t}-artless`+("scaleless"===w.blue?"-scaleless":"")+".png",30,Bn,An/2,In,0,0,An/2,In),await un(r,`frame-pendulum/border-pendulum-${g}-${t}-artless`+("scaleless"===w.red?"-scaleless":"")+".png",30+An/2,Bn,An/2,In,An/2,0,An/2,In),e&&(r.clearRect(0,0,zn,_+Bn),await dn(r,`frame-pendulum/border-pendulum-${g}-${t}.png`,30,Bn)),C.scale(n,n),C.drawImage(a,0,0),C.resetTransform()},drawEffectBorder:async()=>{C&&(C.scale(n,n),Z||"speed-skill"!==s?await dn(C,"frame/effect-border.png",35,J):await dn(C,"frame/effect-border-speed-skill.png",35,J),C.resetTransform())},drawCardBorder:async()=>{C&&(C.scale(n,n),await dn(C,`frame/card-border${Z?`-${h}`:""}.png`,0,0),C.resetTransform())},drawArtBorderFoil:async()=>{C&&(C.scale(n,n),q&&await dn(C,`frame/art-border-${h}.png`,60,170),C.resetTransform())},drawEffectBorderFoil:async()=>{C&&(C.scale(n,n),await dn(C,`frame/effect-border-${h}.png`,35,J),C.resetTransform())},drawLinkMapFoil:async function(){return Rn(C,n,h,arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,arguments.length>1?arguments[1]:void 0)},drawNameFinish:async()=>{(q||T)&&C&&(C.scale(n,n),await S(C,"name",(async e=>dn(C,`finish/finish-${e}-name.png`,0,0))),C.resetTransform())},drawAttributeFinish:async()=>{p!==f&&C&&(C.scale(n,n),await S(C,"attribute",(async e=>dn(C,`finish/finish-${e}-attribute.png`,678,55))),C.resetTransform())},drawArtFinish:async()=>{te&&C&&(C.scale(n,n),await k(C,"art",(async(e,t)=>await un(C,`finish/art-finish-${e}${O?t:""}.png`,I,A,M,M/P)),g),C.resetTransform())},drawArtOverlayFinish:async()=>{C&&(C.scale(n,n),await S(C,"art-overlay",(async e=>dn(C,`finish/finish-${e}-`+(te?"art":"unart")+"-overlay"+(O?`-pendulum-${g}`:"")+".png",I,A))),C.resetTransform())},drawArtBorderFinish:async()=>{q&&C&&(C.scale(n,n),await S(C,"art-border",(async e=>dn(C,`finish/finish-${e}-art-border.png`,0,0))),C.resetTransform())},drawPendulumArtBorderFinish:async()=>{C&&(C.scale(n,n),q&&await S(C,"art-border-pendulum",(e=>dn(C,`finish/finish-${e}-art-border-pendulum-${g}.png`,0,0))),C.resetTransform())},drawBorderPendulumFinish:async()=>{C&&(C.scale(n,n),await S(C,"border-pendulum",(async e=>{const t=`finish/finish-${e}-border-pendulum-${g}`;await un(C,`${t}${"scaleless"===w.blue?"-scaleless":""}.png`,0,0,zn/2,Wn,0,0,zn/2,Wn),await un(C,`${t}${"scaleless"===w.red?"-scaleless":""}.png`,0+zn/2,0,zn/2,Wn,zn/2,0,zn/2,Wn)})),C.resetTransform())},drawFrameFinish:async()=>{C&&(C.scale(n,n),await S(C,"frame",(async e=>dn(C,`finish/finish-${e}-frame${O?`-pendulum-${g}`:""}.png`,0,0))),C.resetTransform())},drawFrameBackgroundFinish:async()=>{C&&(C.scale(n,n),await S(C,"frame-background",(async e=>dn(C,`finish/finish-${e}-frame-background${O?"-pendulum":""}.png`,0,0))),C.resetTransform())},drawOverlayFinish:async()=>{C&&(C.scale(n,n),await S(C,"overlay",(async e=>dn(C,`finish/finish-${e}-overlay.png`,0,0))),C.resetTransform())},drawCardBorderFinish:async()=>{C&&(C.scale(n,n),await S(C,"card-border",(async e=>dn(C,`finish/finish-${e}-card-border.png`,0,0))),C.resetTransform())}};return ae},Xn=async(e,t,a,r,n,o,l,i)=>{var s,c,d;const{isSpeedSkill:u,format:m,cloneNode:p,frame:b,furiganaHelper:f,globalScale:h}=i,g=r*h,v=n*h,y=o*h,x=null===p||void 0===p?void 0:p.getContext("2d");if(!(t&&x&&a))return;const{embossPitch:j,embossYaw:O,embossThickness:w,fillStyle:S,font:k,gradientAngle:F,gradientColor:T,hasEmboss:N,hasGradient:L,hasOutline:R,hasShadow:z,headTextFillStyle:W,lineColor:E,lineOffsetX:B,lineOffsetY:D,lineWidth:H,shadowBlur:I,shadowColor:A,shadowOffsetX:M,shadowOffsetY:P,pattern:$}={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none",...l},{patternImage:Y,blendMode:U}=null!==(s=C[null!==$&&void 0!==$?$:""])&&void 0!==s?s:{};t.textAlign="left";const K=_a({...(null!==(c=ae[k])&&void 0!==c?c:ae.Default).fontData,headTextFillStyle:W},h),G=Ia({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),X={fontLevel:0,fontData:K,currentFont:G},_=kn(a,m,{multiline:!1,furiganaHelper:f,dictionaryType:"rubyFormName"}),q="ocg"===m?[_]:_.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),J=Ia({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),Z=J.getFont(),Q=J.setSize((e=>e*K.symbolFontRatio)).setStyle("small-caps").setFamily(K.symbolFont).getFont();let ee=0,te=0;q.forEach(((e,a)=>{t.font=a%2===0?Z:Q;const r=t.measureText(e.replaceAll(He,""));ee=Math.max(ee,r.actualBoundingBoxAscent),te=Math.max(te,r.actualBoundingBoxDescent)}),0),t.font=Z;let re=0;const ne=Ha((e=>{const{currentLineCount:a,currentLineList:r}=On({ctx:t,median:e,paragraphList:[_],format:m,textData:X,width:y,globalScale:h});return!(a>1)&&(re=r[0].actualLineWidth,!0)}))/1e3;t.scale(ne,1);const oe=Va(V,h),le=null!==(d=K.fontList[0].offsetY)&&void 0!==d?d:oe.offsetY,ie=fn(_),se=re>0&&L?((e,t,a,r,n,o,l,i)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=l+i,m=r+n/2,p=o+(i-l)/2;let b=n,f=u;"1"!==c&&"3"!==c||(b=u,f=n);const h=Math.sqrt(b**2/4+f**2/4);if(h>0){const t=90-(180*Math.asin(b/2/h)/Math.PI-d),r=Math.sin(t/180*Math.PI)*h,n=Math.sin(d/180*Math.PI)*r,o=Math.cos(d/180*Math.PI)*r;let l=n,i=o;"1"===c&&(l=o,i=-n),"2"===c&&(l=-n,i=-o),"3"===c&&(l=-o,i=n);const s=m+l,u=p-i,f=m-l,g=p+i,v=e.createLinearGradient(s,u,f,g);return a.forEach((e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)})),v}})(t,F,Ya(T),g,re,v,ee,te):void 0;let ce=N&&"number"===typeof w&&w>0,de=()=>{};ce&&(de=sn({ctx:t,lineWidth:w,lineColor:S,lineColorGradient:se,globalScale:h,useDefault:!1})),t.fillStyle=null!==se&&void 0!==se?se:S;const{tokenEdge:ue}=Sn({ctx:t,tokenList:ie,xRatio:ne,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:h,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?le:0)),ce&&t.strokeText(a,r,n-(u?le:0))}});if(de(),Y){const a=e.cloneNode(),r=a.getContext("2d");t.setTransform(1,0,0,1,0,0),r.scale(h,h),await dn(r,`frame/frame-${b}.png`,0,0),await dn(r,`background/background-name-${b}.png`,0,0),r.globalCompositeOperation=U,r.resetTransform(),await un(r,`finish-name/${Y}.png`,g,v-ee,y,ee+te),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(ne,1)}if(N){const a=10,r=_t({inputCanvas:e,lightPitch:j,lightYaw:O,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(ue+a)});t.putImageData(r,0,0)}if(R){const e=sn({ctx:t,lineWidth:H+w,lineColor:E,globalScale:h,useDefault:!1});t.globalCompositeOperation="destination-over",Sn({ctx:t,tokenList:ie,xRatio:ne,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:h,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+B,n+D-(u?le:0))}}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(z){const a=e.cloneNode(),r=a.getContext("2d"),n=sn({ctx:r,x:M,y:P,shadowColor:A,blur:I,globalScale:h,useDefault:!1});t.scale(1/ne,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}Sn({ctx:t,tokenList:ie,xRatio:ne,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:h,textDrawer:()=>{}});const me={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"};t.setTransform(1,0,0,1,0,0),t.fillStyle=me.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},Vn={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},_n=e=>{var t,a;let{ctx:r,value:n,format:o,metricMethod:l,size:i,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:p}=Ga(null!==(t=null===(a=H[o])||void 0===a?void 0:a[i])&&void 0!==t?t:H.tcg.medium,c),b=_a({tcg:oe,ocg:le}[o],c),f={...b,metricMethod:null!==l&&void 0!==l?l:b.metricMethod},{font:h}=f,g=Vn[i],v=f.fontList[g],y=Ia({defaultFamily:h,defaultSize:`${v.fontSize}px`}),x={fontLevel:g,fontData:f,currentFont:y};let j=0;r.font=y.getFont(),r.textAlign="left";const O=kn(n,o,{multiline:!1,furiganaHelper:s}),w=Ha((e=>{const{currentLineCount:t,currentLineList:a}=On({ctx:r,median:e,paragraphList:[O],format:o,textData:x,width:p,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)}))/1e3;r.scale(w,1);const S=Sn({ctx:r,tokenList:fn(O),xRatio:w,yRatio:1,trueEdge:"left"===d?u:u-j*w,trueBaseline:m,textData:x,format:o,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...S,xRatio:w}},qn=(e,t,a,r,n,o)=>{const l=a*o,i=r*o;if(e&&t){const a=n*o;e.font=`${a}px MatrixBoldSmallCaps`,e.textAlign="left";const r=.8,s=`${t}`.split("");let c=0;s.forEach((t=>{c+=e.measureText(t).width*("1"===t?r:1)}));let d=l-c/2;s.forEach((t=>{e.fillText(t,"1"===t?d+1*o:d,i+a),d+=e.measureText(t).width*("1"===t?r:1)}))}},Jn=(e,t,a,r,n)=>{if(!e)return;const o=a*n,l=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const i=en(e,t,.075,o,l/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,en(e,"/",.15,i+5*n,l/1.01),e.setTransform(1,0,0,1,0,0)},Zn=(e,t,a,r,n)=>{if(!e||null==t)return;const o=a*n,l=r*n,i=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${37*n}px matrix`,e.fillText(t,o+i,l);else if("?"===t)e.textAlign="right",e.font=`bold ${34*n}px matrix`,e.fillText(t,o+i,l);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce(((t,r,o)=>{e.font=37*n+"px MatrixBoldSmallCaps";let l=t+e.measureText(r).width;return o<a.length-1&&(e.font=37*n+"px matrix",l+=e.measureText("?").width),l}),0);if(r>0){const t=Math.min(i/r,1);e.scale(t,1),a.reduce(((r,o,i,s)=>{const c=s[s.length-1-i];let d=r;return e.font=37*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,l),i<a.length-1&&(e.font=`bold ${37*n}px matrix`,d-=e.measureText("?").width*t,e.fillText("?",d/t,l)),d}),o+i),e.scale(1/t,1)}}},{height:Qn,width:eo}=s,to=(e,t,a)=>{const{card:n}=Gr(),{exportCanvasRef:o,artworkCanvasRef:l,backgroundCanvasRef:i,frameCanvasRef:s,creatorCanvasRef:p,effectCanvasRef:b,nameCanvasRef:h,passwordCanvasRef:v,pendulumEffectCanvasRef:x,pendulumScaleCanvasRef:j,setIdCanvasRef:O,statCanvasRef:w,stickerCanvasRef:k,cardIconCanvasRef:C,typeCanvasRef:F,finishCanvasRef:T,lightboxRef:L,previewCanvasRef:R}=t,{format:z,hasBackground:W,backgroundType:E,frame:H,foil:M,finish:P,artFinish:$,opacity:Y,name:G,nameStyle:X,nameStyleType:_,effectTextStyle:q,pendulumTextStyle:J,typeTextStyle:Z,statTextStyle:Q,otherTextStyle:ee,effect:te,effectStyle:ae,typeAbility:oe,isPendulum:le,pendulumFrame:ce,pendulumEffect:de,pendulumScaleBlue:ue,pendulumScaleRed:me,pendulumStyle:pe,pendulumSize:be,atk:fe,def:he,linkMap:ge,attribute:ve,cardIcon:ye,subFamily:xe,star:je,starAlignment:Oe,setId:we,password:Se,creator:ke,sticker:Ce,isLegacyCard:Fe,isFirstEdition:Te,isDuelTerminalCard:Ne,isSpeedCard:Le,isLimitedEdition:Re,furiganaHelper:ze}=n,We=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),Ee="auto"===ce?le?"spell":H:ce,Be=null===ae||void 0===ae?void 0:ae.condenseTolerant,De=(e=>"normal"===e.frame&&Zt(e))(n),He=(e=>"xyz"===e.frame)(n),Ie=(e=>!0===e.isLink)(n),Ae=Zt(n),Me=Jt(n),{body:Pe=100,boundless:$e}=Y,Ye=!!(Pe<50||$e),Ue=["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(Ee),Ke=ea(H),{levelStyle:Ge,resolvedEffectTextStyle:Xe,resolvedPendulumEffectTextStyle:Ve,resolvedStatTextStyle:_e,resolvedTypeTextStyle:qe,resolvedOtherEffectTextStyle:Je}=Object(r.useMemo)((()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:o,statTextStyle:l,typeTextStyle:i}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,p]=r,b=d?{...m?{y:0,blur:4,shadowColor:p}:{},color:u}:{},[f,h,g,v]=n,y=f?{...g?{y:0,blur:4,shadowColor:v}:{},color:h}:{},[x,j,O,w]=i,S=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[k,C,F,T]=l,N=k?{...F?{y:1,blur:1,shadowColor:T}:{},color:C}:{},[L,R,z,W]=o;return{levelStyle:c,resolvedEffectTextStyle:b,resolvedOtherEffectTextStyle:L?{...z?{y:0,blur:0,shadowColor:W}:{},color:R}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:N,resolvedTypeTextStyle:S}})({lightFooter:Ue,lightHeader:Ke,requireShadow:Ye,effectTextStyle:q,pendulumTextStyle:J,otherTextStyle:ee,statTextStyle:Q,typeTextStyle:Z})),[Ue,Ke,Ye,q,J,ee,Q,Z]),Ze=xe.toUpperCase(),Qe=oe.map((e=>e.trim())).join("ocg"===z?"\uff0f":"\u200a/\u200a"),et=!(!fe&&!he)||!(!le||!we),tt=Qe.length>0&&("auto"===ye?Ae||Me:"st"!==ye),at=!(""===(null!==ue&&void 0!==ue?ue:"")),rt=!(""===(null!==me&&void 0!==me?me:"")),{isInitializing:nt,imageChangeCount:ot,language:lt,globalScale:it}=a,st=e&&!1===nt,ct=Object(r.useMemo)((()=>rn(P,U)),[P]),dt=Object(r.useMemo)((()=>rn([$],K)),[$]);Object(r.useEffect)((()=>{st&&(We.current.frame.rerun+=1,We.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=l.current,r=i.current;if(!an(t)||!s.current)return;const n={...d(),...Y},{artBorder:o,body:m,boundless:p,baseFill:b}=n,f=(e,a,r,n,o)=>new Promise((l=>{setTimeout((()=>{t.fillStyle=W?null!==o&&void 0!==o?o:b:c,t.fillRect(e,a,r,n),l(!0)}),0)})),h=m>0||o;await f(0,0,it*eo,it*Qn);const{drawAttribute:g,drawBackground:v,drawCardArt:y,drawFrame:x,drawLinkArrowMap:j,drawPendulumScaleIcon:O,drawStar:w,drawNameBackground:S,drawEffectBackground:k,drawFrameBorder:C,drawNameBorder:F,drawArtBorder:T,drawPendulumBorder:N,drawBorderPendulumFinish:L,drawEffectBorder:R,drawCardBorder:B,drawStatBorder:D,drawAttributeFinish:I,drawArtBorderFoil:A,drawEffectBorderFoil:P,drawLinkMapFoil:$,drawNameFinish:U,drawArtFinish:K,drawArtOverlayFinish:G,drawArtBorderFinish:X,drawPendulumArtBorderFinish:V,drawFrameFinish:_,drawFrameBackgroundFinish:q,drawOverlayFinish:J,drawCardBorderFinish:Z,calculateCardArtRedrawCoordination:Q}=Gn({canvas:s.current,artworkCanvas:a,backgroundCanvas:r,globalScale:it,format:z,frame:H,bottomFrame:Ee,hasBackground:W,backgroundType:E,attribute:ve,cardIcon:ye,star:je,foil:M,pendulumSize:be,opacity:n,isLink:Ie,isSpeedSkill:Me,isXyz:He,isPendulum:le,pendulumFrameTypeMap:{red:rt?"normal":"scaleless",blue:at?"normal":"scaleless"},loopFinish:ct,loopArtFinish:dt});if(r&&t&&v(),a&&t&&!p&&y(),await x(),await B(),await Z(),le||(p||(await S(),await k(),await R(),await P()),await T(),await A(),await X()),le&&!p){if(a&&t&&a.height>0){const{width:e,height:r}=a,{sourceOffsetX:n,sourceOffsetY:o,offsetHeight:l,destinationX:i,destinationY:s,destinationWidth:c,destinationHeight:d,fillWidth:u,fillHeight:m}=Q(a);await f(it*i,it*s,it*u,it*m),v("pendulum"),t.drawImage(a,n,o,e-2*n,r-l,it*i,it*s,it*c,it*d)}await S(),await k(!0)}if(await K(),await G(),le&&!p&&(await O(),await N(h,"normal"),await N(h,M),await V(),h&&await L()),p||(await _(),await U()),h&&await q(),p){if(Ie)await X();else if(le){const e=u.fullCard.ratio/u.extendedPendulum.ratio;if(a&&t&&a.height>0){const{destinationX:t,destinationY:r,destinationWidth:n,destinationHeight:o}=Q(a,{...d(),...Y,body:100,boundless:!1},e);await f(it*t,it*r,it*n,it*o),v("pendulum")}h&&(await N(h,"normal"),await N(h,M)),await V()}await S(),await U(),await F(),a&&t&&y(),await G(),le?(await k(!0),await O(),await N(!1,"normal"),await N(!1,M),await L()):(await k(),await R(),await P()),await _()}if(et&&await D({color:"#000000",..._e}),await g(),await I(),await w({style:Ge,starAlignment:Oe}),p||await F(),await C(),Ie&&!le){await j(ge,le?"pendulum":"normal"),await $(!1,le?"pendulum":"normal");const e=sn({ctx:t,..._e,globalScale:it});et&&await Nn(s.current,null!==ge&&void 0!==ge?ge:[],_e,it),e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:o,isDuelTerminalCard:l,isSpeedCard:i,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(l){const e=n?[255,1072,175,35]:o?[151,848,216,24]:[80,843,270,30];await mn(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...Xa(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(i){const e=n?[255,1084,176.4,25]:o?[151,854,215.6,22]:[80,850,245,25];await mn(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...Xa(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:it,type:Ue&&!le?"white":"black",bordered:(m<50||p)&&!le,isDuelTerminalCard:Ne,isSpeedCard:Le,isLink:Ie,isPendulum:le,textStyle:Je}),await J()})}),[st,it,l,i,s,H,z,W,E,ve,Ee,M,je,Oe,ye,Ne,Ie,le,at,rt,Le,Me,He,Ue,ge,_e,Je,dt,ct,Y,be,et,Ge,ot]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(an(t)&&le){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=N[be];""!==(null!==ue&&void 0!==ue?ue:"")&&qn(t,ue,e,r,n,it),""!==(null!==me&&void 0!==me?me:"")&&qn(t,me,a,r,n,it)}}),[st,it,le,be,ue,me,j]),Object(r.useEffect)((()=>{st&&(We.current.name.rerun+=1,We.current.name.instructor=async()=>{var e,t;const a=null===(e=h.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=h.current)||void 0===t?void 0:t.cloneNode();an(a)&&r&&await Xn(h.current,a,G,"tcg"===z?60:68,116,ve===f?"tcg"===z?688:674:"tcg"===z?608:598,(e=>{var t,a;let{format:r,frame:n,nameStyle:o,nameStyleType:l,foil:i}=e;if("custom"===l)return o;const s=Jt({frame:n}),c=ea(n);let d="Default";"ocg"===r&&(d="OCG"),s&&"tcg"===r&&(d="Arial");let u={fillStyle:c?"#ffffff":"#000000",headTextFillStyle:c?"#ffffff":"#000000"};if("predefined"===l){var m,p;const e={...S[null!==(m=o.preset)&&void 0!==m?m:"commonB"].value};return S[null!==(p=e.preset)&&void 0!==p?p:"commonB"].value.font||(e.font=d),{...u,...e}}let b=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const f="normal"!==i&&null!==(t=null===(a=S[i])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===n?S.animeGold.value:{};return{font:d,...u,...b,...f,...h}})({format:z,frame:H,nameStyle:X,nameStyleType:_,foil:M}),{isSpeedSkill:Me,format:z,cloneNode:r,frame:H,furiganaHelper:ze,globalScale:it})})}),[st,it,ve,M,z,H,ze,Me,G,h,X,_]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");if(!an(t)||!et)return;const a=sn({ctx:t,..._e,globalScale:it});Jn(t,"ATK",432.1,1106.494,it),Zn(t,fe.trim(),508.824,1106.494,it),Ie||(Jn(t,"DEF",600.85,1106.494,it),Zn(t,he.trim(),673.865,1106.494,it)),a()}),[st,it,fe,he,Ie,Ae,_e,w,et]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");an(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:o,withShadow:l,format:i,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${l?"bold":""} ${22*r}px stone-serif-regular`,"ocg"===i&&(d=.145,u=-1,m=-3);const p=sn({ctx:e,color:s&&!n?"#ffffff":"#000000",shadowColor:l?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:l&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?en(e,t,d,(66.65+m)*r,(1105.01+u)*r):o?tn(e,t,d,(666.56+m)*r,(872.94+u)*r):tn(e,t,d,(728.78+m)*r,(871.5+u)*r),p()})(t,we,{globalScale:it,isLink:Ie,isPendulum:le,withShadow:Ye&&!le,format:z,lightFooter:Ue,textStyle:Je})}),[st,it,z,Ie,le,Ue,O,we,Me,Ee,Ye,Je]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=v.current)||void 0===e?void 0:e.getContext("2d");if(!an(t))return;const a=/^[0-9]*$/.test(Se),r=a&&le&&Ie,{rightEdge:n}=(e=>{var t,a;let{ctx:r,globalScale:n,value:o,format:l,alignment:i,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:p}=e;if(!an(r))return{rightEdge:0};const b=sn({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:f,trueBaseline:h,trueWidth:g}=Ga(null!==(t=A[l])&&void 0!==t?t:A.tcg,n),v=_a(ne[l],n),{font:y}=v,x=kn(o,l,{multiline:!1,furiganaHelper:!1});let j={fontLevel:p,fontData:v,currentFont:Ia()},O=0,w=1e3,S=v.fontList[0];for(let T=0;T<v.fontList.length;T++){S=v.fontList[T];const e=Ia({defaultFamily:y,defaultSize:`${S.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",w=Ha((e=>{const{currentLineCount:o,currentLineList:i}=On({ctx:r,median:e,paragraphList:[x],format:l,textData:t,width:g,globalScale:n});return!(o>1)&&(a=i[0].actualLineWidth,!0)})),O=a,j=t,w>=1e3)break}const k=w/1e3;r.scale(k,1);const C=Va(V,n),F=Sn({ctx:r,tokenList:fn(x),xRatio:k,yRatio:1,trueEdge:"left"===i?f+c:f-c-O*k,trueBaseline:h+(null!==(a=S.offsetY)&&void 0!==a?a:C.offsetY)+s,textData:j,format:l,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),b(),{rightEdge:F.tokenEdge}})({ctx:t,globalScale:it,value:Se,lightFooter:Ue,alignment:"left",edgeOffset:(r?80:0)*it,format:z,hasShadow:"zarc"===Ee||Ye,textStyle:Je,fontLevel:a?0:1});if(Te){const e=!le||!!a,r=!Fe&&a||le?Math.max(n/it+14.813,142.2)-("ocg"===z?7:0):Ie?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{globalScale:1,stroke:!1};if(!e)return;const{stroke:o=!1,textStyle:l,globalScale:i}=null!==n&&void 0!==n?n:{},s=t*i,c=a*i,d=r*i,u=sn({ctx:e,globalScale:i,...l,...null!==l&&void 0!==l&&l.shadowColor?{x:0,y:0,blur:3}:{}}),m=7.4*i;e.font=`bold ${23.7*i}px palatino-linotype-bold`;let p=s;e.fillText("1",p,c+d),o&&e.strokeText("1",p,c),p+=e.measureText("1").width-2*i,e.font=`bold ${17.78*i}px palatino-linotype-bold`,e.fillText("st",p,c-m+d),o&&e.strokeText("st",p,c-m),p+=e.measureText("st").width,e.font=`bold ${22.22*i}px palatino-linotype-bold`,e.fillText(" Edition",p,c+d),o&&e.strokeText(" Edition",p,c),u()}(t,r,!Fe&&a||le?1150.93:871,!Fe&&a||le?Me?-2:-1:0,{globalScale:it,textStyle:{color:Ue?"#ffffff":"#000000",...Je}})}}),[st,it,Te,Se,v,Ue,z,Ye,Ie,Me,le,Fe,Ee,Je]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=p.current)||void 0===e?void 0:e.getContext("2d");We.current.creator.rerun+=1,We.current.creator.instructor=async()=>{var e;if(!an(t))return;const a={...d(),...Y},{body:r,boundless:n}=a,o=(e=>{var t,a;let{ctx:r,value:n,format:o,alignment:l,baselineOffset:i=0,lightFooter:s,hasShadow:c,textStyle:d,globalScale:u}=e;if(!an(r))return;const m=sn({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,globalScale:u,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:p,trueBaseline:b,trueWidth:f}=Ga(null!==(t=I[o])&&void 0!==t?t:I.tcg,u),h=_a(re[o],u),{font:g}=h,v=kn(n,o,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:h,currentFont:Ia()},x=0,j=1e3,O=h.fontList[0];for(let C=0;C<h.fontList.length;C++){O=h.fontList[C];const e=Ia({defaultFamily:g,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:C,fontData:h,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",j=Ha((e=>{const{currentLineCount:n,currentLineList:l}=On({ctx:r,median:e,paragraphList:[v],format:o,textData:t,globalScale:u,width:f});return!(n>1)&&(a=l[0].actualLineWidth,!0)})),x=a,y=t,j>=1e3)break}const w=j/1e3;r.scale(w,1);const S=Va(V,u),k=Sn({ctx:r,tokenList:fn(v),xRatio:w,yRatio:1,trueEdge:"left"===l?p:p-x*w,trueBaseline:b+(null!==(a=O.offsetY)&&void 0!==a?a:S.offsetY)+i*u,textData:y,format:o,globalScale:u,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),m(),{leftEdge:"left"===l?p:p-x*w,...k}})({ctx:null===(e=p.current)||void 0===e?void 0:e.getContext("2d"),format:z,value:ke,alignment:"right",baselineOffset:Me?-2:0,hasShadow:Ye,lightFooter:Ue,textStyle:Je,globalScale:it}),l=("tcg"===z?390:350)*it,i=("tcg"===z?30:40)*it;var s;Re&&p.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:o,isLegacyCard:l,widthOffset:i,bordered:s,textStyle:c}=e;const d=!l||n?[145,1123,240-i/r,37]:o?[151,846,216,36]:[80,843,240,40];await mn(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Xa(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:p.current,ctx:t,globalScale:it,type:Ue&&!le?"white":"black",bordered:(r<50||n)&&!le,isLink:Ie,isPendulum:le,widthOffset:(null!==(s=null===o||void 0===o?void 0:o.leftEdge)&&void 0!==s?s:l)<l?i:0,isLegacyCard:Fe,textStyle:Je})}}),[st,it,ke,p,b,z,Fe,Re,Ie,le,Me,Ue,Y,Ye,Je]),Object(r.useEffect)((()=>{st&&(We.current.sticker.rerun+=1,We.current.sticker.instructor=async()=>{var e;return await(async e=>{let{ctx:t,sticker:a,globalScale:r}=e;if(an(t)){if(a===y)return Promise.resolve();t.scale(r,r),await dn(t,`sticker/sticker-${a.toLowerCase()}.png`,739.1438,1110.938),t.resetTransform()}})({ctx:null===(e=k.current)||void 0===e?void 0:e.getContext("2d"),sticker:Ce,globalScale:it})})}),[st,it,Ce,k]),Object(r.useEffect)((()=>{var e,t;if(!st)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=F.current)||void 0===t?void 0:t.getContext("2d");We.current.typeAbility.rerun+=1,We.current.typeAbility.instructor=async()=>{if(!an(a)||!an(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==ae&&void 0!==ae?ae:{},o=q[0],l=o?t:0,i=o?De&&"auto"===n||"tcg"===z&&"italic"===n:De,s=Fn({ctx:a,content:te,isNormal:De,useItalic:i,condenseTolerant:e,format:z,furiganaHelper:ze,...Cn({format:z,statInEffect:et,typeInEffect:tt,useItalic:i,frameType:le&&"large"===be?"pendulumLarge":"normal"}),textStyle:Xe,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-l,globalScale:it}});await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:o,frame:l,size:i,isMonster:s,textStyle:c,furiganaHelper:d}=e;if(!an(t))return;const u=r.length>0,m=n!==g&&"large"===i,p=r+(m?"\u29be":""),b=u?"tcg"===o?"large"===i?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!u)return;const f={color:ta(l)&&!Jt({frame:l})&&"large"===i?"#ffffff":"#000000",...c},h=sn({ctx:t,...f,globalScale:a}),{iconPositionList:v,xRatio:y}=_n({ctx:t,format:o,size:i,value:b,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});h();let x="ocg"===o?-4:0,j="ocg"===o?-3:0;if(m){const{edge:e,baseline:r}=v[0];await un(t,`subfamily/subfamily-${n.toLowerCase()}.png`,(t=>e+(.175*t.naturalWidth*y+j)*a),(e=>r-.8*e.naturalWidth*a+x*a),(e=>a*e.naturalWidth),(e=>a*e.naturalWidth))}})({ctx:r,globalScale:it,format:z,frame:H,furiganaHelper:ze,isMonster:Ae,textStyle:qe,size:tt?le&&"large"===be?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:Ze,typeAbility:Qe})}}),[st,it,tt,et,ae,te,q,b,z,H,le,be,ze,Ae,De,qe,Xe,Ze,Qe,F]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");if(an(t)&&le){const{upSize:e,fontStyle:a}=null!==pe&&void 0!==pe?pe:{},r=J[0],n=r?e:0,o=!!r&&("tcg"===z&&"italic"===a),l=`${z}-${be}`,i=D[at&&rt?"normal":"scaleless"][be],s=at&&rt?i:i.map((e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(at?B:0),trueWidth:a-(at?B:0)-(rt?B:0)}}));Fn({ctx:t,content:de,isNormal:!1,useItalic:o,fontData:(o?ie:se)[l],fontDataKey:l,textStyle:Ve,sizeList:s,condenseTolerant:Be,format:z,furiganaHelper:ze,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:it}})}}),[st,it,Be,z,le,rt,at,be,x,de,pe,J,ze,Ve]),Object(r.useEffect)((()=>{var e;if(!st)return;const t=null===(e=T.current)||void 0===e?void 0:e.getContext("2d");We.current.overlay.rerun+=1,We.current.overlay.instructor=async()=>{if(an(t)){if(Ie&&le){await Ln(t,it,ge,le?"pendulum":"normal",$e),await Rn(t,it,M,!1,le?"pendulum":"normal");const e=sn({ctx:t,..._e,globalScale:it});et&&await Nn(s.current,null!==ge&&void 0!==ge?ge:[],_e,it),e()}t.scale(it,it),await ct(t,"total-overlay",(e=>dn(t,`finish/finish-${e}-total-overlay.png`,0,0))),t.resetTransform()}}}),[st,it,T,ct,G,Ie,le,ge,$e,M,_e,et,s]);const ut=Object(r.useRef)({}),mt=Object(r.useCallback)((async e=>{const{pendulumSize:t,isPendulum:a=!1,opacity:r}=e,n=o.current,i=null===n||void 0===n?void 0:n.getContext("2d");if(n&&i){var c,d,u;an(i),await Promise.all(Object.values(We.current).sort(((e,t)=>e.order-t.order)).map((e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&ut.current[r]!==a||!ut.current[r]?(ut.current[r]=a,t()):Promise.resolve()}))).catch((e=>{console.error(e);const t="fail-to-draw-notification";rr.a.close(t),rr.a.error({key:t,message:lt["error.draw.error.message"],description:lt["error.draw.error.description"]})}));const e=l.current;if(e&&i){const{artX:n,artY:o,artWidth:l}=m(a,r,void 0,t),{width:s,height:c}=e;c>0&&i.drawImage(e,0,0,s,c,n,o,l,l/(s/c))}await qt(s,i,0),await qt(h,i,0),await qt(C,i,0),await qt(j,i,0),await qt(x,i,0),await qt(F,i,0),await qt(b,i,0),await qt(w,i,0),await qt(O,i,0),await qt(v,i,0),await qt(p,i,0),await qt(k,i,0),await qt(T,i,0),null===(c=L.current)||void 0===c||c.draw(n),null===(d=R.current)||void 0===d||null===(u=d.getContext("2d"))||void 0===u||u.drawImage(n,0,0,n.width,n.height,0,0,eo,Qn)}}),[lt,l,C,p,o,b,T,L,h,v,x,j,O,s,w,k,F,R]);return{drawingPipeline:We,onExport:mt}};var ao=a(29);const ro="ygocarder-notification",no=Object(ur.create)((e=>{const{condenseReminder:t,versionReminder:a}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(ro))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e((e=>{const r={...e.memory,[t]:a};return localStorage.setItem(ro,JSON.stringify(r)),{memory:r}}))},updateNotificationMemory:t=>{e((e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(ro,JSON.stringify(a)),{memory:a}}))}}}));var oo=a(182),lo=a.n(oo);var io=a(272),so=a.n(io);const co=Object(or.b)(ar.a)`
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
`,uo=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[o,l]=Object(r.useState)(!1),[i,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(co,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||o},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{l(!0);const e=await Promise.all(c.map((e=>{let{file:t,name:a}=e;return new Promise(((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:o}=n;if("string"!==typeof o)return void r("Not a valid result");let l=JSON.parse(o);ua(l)&&(l=ia(l));const s=ma(l);let c=null;if(c=i?s?Na(Ur(l).card).result:l:s?l:ia(Ur(l).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)}))}))),t=new so.a;e.forEach((e=>{let{blob:a,name:r}=e;t.file(r,a)}));const a=await t.generateAsync({type:"blob"});va("convert-result.zip",a,"application/zip"),l(!1),n(!1)}catch(e){console.error(e),rr.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),l(!1)}},children:[Object(b.jsxs)("div",{className:"controller",children:[Object(b.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:tr("toggle-button",i?"reverse":""),onClick:()=>s((e=>!e)),children:Object(b.jsx)(ir.a,{})})}),Object(b.jsx)("label",{children:"Yugioh Carder"})]}),Object(b.jsxs)("div",{className:"file-panel",children:[Object(b.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(b.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],o&&Object(b.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(b.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(b.jsx)("div",{className:"file-list",children:c.map((e=>{let{name:t}=e;return Object(b.jsxs)("div",{className:"file-entry",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{className:"file-action",children:Object(b.jsx)(sr.a,{disabled:o,onClick:()=>d((e=>e.filter((e=>e.name!==t))))})})]},t)}))})]})]}),Object(b.jsx)(nr.a,{overlay:t["converter.header.label"],children:Object(b.jsx)(lr,{className:"batch-converter",onClick:()=>n(!0),children:Object(b.jsx)(cr.a,{})})})]})};var mo=a(74),po=a(558),bo=a(582),fo=a(551),ho=a(219);class go extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){ho.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var vo=a(186);const yo="controls-wrapper",xo=or.b.div`
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
`,jo=e=>{let{children:t,...a}=e;return Object(b.jsxs)(xo,{className:"angle-picker-container",children:[t,Object(b.jsx)(vo.AnglePicker,{...a})]})};var Oo=a(573),wo=a(574),So=a(540),ko=a(571);const Co=Object(or.b)(ko.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Fo=e=>{let{overlayClassName:t,iconProps:a,...r}=e;const{className:n,...o}=null!==a&&void 0!==a?a:{};return Object(b.jsx)(So.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...r,children:Object(b.jsx)(Co,{className:["explanation-icon",null!==n&&void 0!==n?n:""].join(" "),...o})})};var To=a(572),No=a(563);const Lo=or.b.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    width: 24px;
    height: 24px;
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
	cursor: pointer;
	&:hover {
		background-color: var(--sub-level-4);
	}
`,Ro=e=>{let{Icon:t,children:a,onClick:r,iconProps:n,tooltipProps:o,containerProps:l}=e;const{className:i,onClick:s,onKeyDown:c,...d}=null!==l&&void 0!==l?l:{};return Object(b.jsx)(nr.a,{title:null,...o,children:Object(b.jsx)(Lo,{tabIndex:0,...d,onClick:e=>{null===r||void 0===r||r(),null===s||void 0===s||s(e)},onKeyDown:e=>{null===c||void 0===c||c(e),"Enter"===e.key&&(null===r||void 0===r||r())},className:["icon-button",null!==i&&void 0!==i?i:""].join(" "),children:Object(b.jsxs)(b.Fragment,{children:[t&&Object(b.jsx)(t,{...n}),a]})})})},zo=or.b.div`
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
`,Wo=or.a`
    display: flex;
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
`,Eo=or.b.div`
    ${Wo}
`,Bo=(e,t)=>{let{onChange:a,value:n,optionList:o,children:l,suffix:i,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),p=o.length;return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsxs)(Eo,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[l&&Object(b.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:l}),Object(b.jsx)("div",{ref:m,className:"radio-train-input-group",...Ka({setFocus:u,optionLength:p,onTrigger:()=>{const e=o[d];e&&a(e.value)}}),children:o.map(((e,t)=>{let{value:r,props:o,label:l,tooltipProps:i}=e;const{className:s}=null!==o&&void 0!==o?o:{},u=c?r===n:`${r}`===`${n}`;return Object(b.jsx)(nr.a,{overlay:null,...i,children:Object(b.jsxs)("label",{...o,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(b.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(b.jsx)("span",{className:"ant-radio-button-inner"})}),Object(b.jsx)("span",{className:"label",children:l})]})},r)}))}),i]})},Do=Object(r.forwardRef)(Bo),Ho=or.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,Io=or.b.div`
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
`,Ao=Object(or.b)(Io)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Mo=e=>{let{content:t,children:a,...r}=e;return t?Object(b.jsx)(So.a,{content:t,...r,children:a}):Object(b.jsx)(b.Fragment,{children:a})},Po=or.b.button`
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
`,$o=or.b.div`
    display: grid;
    grid-template-columns: max-content 60px 45px 12px;
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
        display: inline-flex;
        column-gap: var(--spacing-xs);
        border-right: none;
        padding: var(--spacing-xxs) var(--spacing-xs);
        border-radius: var(--br) 0 0 var(--br);
        box-shadow: var(--bs-input);
        .ant-checkbox-wrapper {
            transform: translateY(-1px); // Alignment
        }
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
`,Yo=or.b.div`
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
`,Uo=or.c`
    to {
        transform: rotate(360deg);
    }
`,Ko=or.b.div`
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
`,Go=Object(or.b)(zo)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":or.a`animation: ${Uo} 12s linear infinite;`}}
        }
    }
`,Xo=()=>{const e=vr(),{setting:t,updateSetting:a}=Xr((e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}})),{exportFormat:r,resolution:n,allowHotkey:o,reduceMotionColor:l,showCreativeOption:i,showExtraDecorativeOption:s}=t;return Object(b.jsx)(Go,{className:"setting-button",$softMode:l,children:Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(b.jsxs)(Ko,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(No.a,{checked:l,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(No.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(No.a,{checked:i,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(nr.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(b.jsx)(No.a,{checked:o,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(b.jsx)(Do,{className:"resolution-list",value:`${n[0]}x${n[1]}`,optionList:jt.map((t=>{let{height:a,width:r,label:n,scale:o}=t;return{value:`${r}x${a}`,label:o>1?Object(b.jsx)(So.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(b.jsx)(Ao,{children:e["setting.option.resolution.warning"]}),children:n}):n}})),onChange:e=>{const t=xt[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(b.jsx)(Do,{value:r,optionList:Ot,onChange:e=>{a({exportFormat:e})}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(b.jsxs)("div",{className:"button-label",children:[Object(b.jsx)(To.a,{}),Object(b.jsx)("label",{children:e["setting.button.label"]})]})})})};var Vo=a(560);const _o=or.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,qo=or.b.li`
    img {
        display: block;
        max-width: 400px;
        max-height: 200px;
        margin: auto;
        box-shadow: var(--bs-1);
        margin-top: var(--spacing-xs);
    }
`,Jo=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),Zo=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{(async()=>{n(!0);const e=await Jo.getLog();n(!1),t(e)})()}),[]),0!==e.length||a?a?Object(b.jsx)("div",{children:"Loading changelog..."}):Object(b.jsx)("div",{children:e.map(((e,t)=>{let{logList:a,version:r}=e;return Object(b.jsxs)("div",{className:"log-section",children:[Object(b.jsx)("b",{children:r}),Object(b.jsx)("br",{}),Object(b.jsx)("ul",{children:a.map(((e,t)=>{let{content:a,image:n}=e;return Object(b.jsxs)(qo,{children:[a,n&&Object(b.jsx)("img",{src:n,alt:`version-${r}-illust`})]},t)}))})]},`${r}-${t}`)}))}):Object(b.jsx)("div",{children:"No changelogs"})},Qo=or.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #222222 inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?or.a`animation: 2s linear 350ms 4 ${_o};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,el=Object(or.b)(Ao)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,tl=Object(r.memo)((()=>{var e;const[t,a]=Object(r.useState)(!1),[n,o]=(e=>{const{targetMemory:t,updateNotification:a}=no(Object(ao.useShallow)((t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}})));return[t,Object(r.useCallback)((t=>a(e,t)),[e,a])]})("versionReminder");return Object(r.useEffect)((()=>{if(n){var e;const t=null!==(e="2.2.2")?e:"0.0.0",r=n;o("2.2.2"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[o,l,i]=String(t).split(".").map(Number);return a!==o?a>o:r!==l?r>l:n>i})(t,r)&&(a(!0),setTimeout((()=>{a(!1)}),8e3))}}),[o,n]),Object(b.jsx)(So.a,{placement:"bottom",content:Object(b.jsx)(el,{children:Object(b.jsx)(Zo,{})}),children:Object(b.jsxs)(Qo,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.2.2")?e:"unknown"]})})}));a(396);const al=()=>Object(b.jsx)("div",{className:"affiliation",children:Object(b.jsx)("div",{className:"affiliation-link",children:Object(b.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(Oo.a,{})})})}),rl=or.b.div`
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
`,nl=()=>{const{language:e,languageInfo:t,languageMetadataMap:a,changeLanguage:r}=gr((e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}})),{cardList:n,isListDirty:o,toggleVisible:l,visible:i}=Yr(Object(ao.useShallow)((e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})));return Object(b.jsxs)("div",{className:"app-header",children:[Object(b.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(b.jsxs)("div",{className:"app-description",children:[Object(b.jsxs)("div",{className:"header-language",children:[Object(b.jsx)("h1",{children:"Yugioh Carder"}),Object(b.jsx)(Vo.a.Group,{value:t.codeName,size:"small",className:"language-option",children:Object.values(a).filter((e=>{let{active:t}=e;return t})).map((e=>{let{codeName:t,name:a}=e;return Object(b.jsx)(Vo.a.Button,{value:t,onChange:e=>r(e.target.value),children:a},t)}))}),Object(b.jsx)("span",{className:"bug-report",children:Object(b.jsx)("div",{id:"sentry-bug-report",children:e["contributor.bug-report.tooltip"]})}),Object(b.jsx)(tl,{})]}),Object(b.jsxs)("div",{className:"app-contribution",children:[Object(b.jsxs)("span",{className:"app-creator",children:[e["contributor.gui.label"],": ",Object(b.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(b.jsx)(Fo,{content:Object(b.jsxs)(Ao,{className:"disclaimer",children:[Object(b.jsx)("h2",{children:e["contributor.disclaimer.label"]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e["contributor.disclaimer.line-1"](Object(b.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-2"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-3"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-4"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-5"](Object(b.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(b.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-6"]})]})]})})]}),Object(b.jsx)("span",{className:"template-creator",children:e["contributor.template-maker"](Object(b.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"Grezar"})},"artist-1"),Object(b.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"9558able"})},"artist-2"),Object(b.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(b.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(b.jsx)(rl,{className:"app-setting",children:Object(b.jsx)(Xo,{})}),Object(b.jsx)(rl,{className:"card-manager",children:Object(b.jsx)(zo,{className:tr("manager-button-label",i?"manager-active":""),onClick:()=>l(),children:Object(b.jsxs)("div",{className:"button-label",children:[Object(b.jsx)(wo.a,{}),Object(b.jsx)("label",{children:e["manager.icon.title"]}),o&&n.length>1&&Object(b.jsx)("div",{className:"manager-notice",children:"*"})]})})})]})},ol=()=>{const e=vr();return Object(b.jsxs)(Ao,{className:"disclaimer",children:[Object(b.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(b.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(b.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},ll=()=>Object(b.jsx)(Fo,{overlayClassName:"disclaimer-overlay",content:Object(b.jsx)(ol,{})});var il=a(561),sl=a(575);a(397);const cl=or.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,dl=or.b.div`
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
`,ul=or.b.div`
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
`,ml=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:o}=null!==a&&void 0!==a?a:{};return Object(b.jsxs)(ul,{className:`image-with-caption ${o}`,children:[Object(b.jsx)("img",{alt:r,...n}),Object(b.jsx)("div",{className:"caption",children:t})]})},pl=()=>{const[e,t]=Object(r.useState)(!1),a=vr();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(il.a,{footer:null,visible:e,width:"60%",title:Object(b.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"]," ",Object(b.jsx)(mo.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["guide.format.close"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(b.jsxs)(cl,{children:[Object(b.jsxs)("p",{children:[a["guide.format.introduction"](Object(b.jsx)(To.a,{},"icon")),"."]}),Object(b.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(b.jsx)(Ho,{children:"["},"open-tag"),Object(b.jsx)(Ho,{children:"]"},"close-tag"),Object(b.jsx)(Ho,{children:"Ctrl-1"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-1"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(b.jsx)(Ho,{children:"[["},"open-tag"),Object(b.jsx)(Ho,{children:"]]"},"close-tag"),Object(b.jsx)(Ho,{children:"Ctrl-Shift-1"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-Shift-1"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(b.jsx)(Ho,{children:"{"},"open-tag"),Object(b.jsx)(Ho,{children:"}"},"close-tag"),Object(b.jsx)(Ho,{children:"Ctrl-2"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-2"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(b.jsx)(Ho,{children:"|"},"separator"),Object(b.jsx)(Ho,{children:"Ctrl-3"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-3"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(b.jsx)(Ho,{children:"||"},"separator"),Object(b.jsx)(Ho,{children:"Ctrl-4"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-4"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(b.jsx)(Ho,{children:"{{"},"open-tag"),Object(b.jsx)(Ho,{children:"}}"},"close-tag"),Object(b.jsx)(Ho,{children:"Ctrl-5"},"hotkey"),Object(b.jsx)(Ho,{children:"\u2318-5"},"hokey-alternative")),Object(b.jsxs)(dl,{className:"panel-figure",children:[Object(b.jsx)(ml,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(ml,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(b.jsxs)(mo.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(b.jsx)(sl.a,{})]})]})},bl=or.b.div`
    display: grid;
    ${e=>{let{$withPillar:t}=e;return t?"grid-template-columns: max-content 1fr;":"grid-template-columns: 1fr;"}}
    > label {
        cursor: pointer;
        padding: 0 var(--spacing-xxs);
        text-align: center;
    }
`,fl=or.b.div`
    display: inline-block;
    width: 10px;
`,hl=e=>{let{nameKey:t,labelBackgroundColor:a,labelBackgroundColorList:r,className:n}=e;const o=vr();return Object(b.jsxs)(bl,{className:`frame-info-block ${null!==n&&void 0!==n?n:""}`,$withPillar:!(!a&&!r),children:[r?Object(b.jsx)(fl,{children:r.map((e=>Object(b.jsx)("div",{style:{backgroundColor:e,height:100/r.length+"%"}},e)))}):a?Object(b.jsx)(fl,{style:{backgroundColor:a}}):null,Object(b.jsx)("label",{className:"frame-info-block-label",children:o[t]})]})};var gl=a(220),vl=a(576),yl=a(577),xl=a(578),jl=a(579);const{height:Ol,width:wl}=s,Sl=or.b.div`
    width: ${wl}px;
    height: ${Ol}px;
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
`,kl=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:o,globalScale:l,width:i,height:s}=e;return Object(b.jsxs)("div",{className:"control-container",children:[Object(b.jsxs)("div",{className:"action-list",children:[Object(b.jsx)(Po,{disabled:o>=4,onClick:()=>{t()},children:Object(b.jsx)(vl.a,{})}),Object(b.jsx)(Po,{disabled:o<=1/l,onClick:()=>{a()},children:Object(b.jsx)(yl.a,{})}),Object(b.jsx)(Po,{onClick:()=>{r()},children:Object(b.jsx)(xl.a,{})}),Object(b.jsx)(Po,{onClick:()=>{n(-Math.max(0,i-wl)/2,-Math.max(0,s-Ol)/2,1)},children:Object(b.jsx)(jl.a,{})})]}),Object(b.jsxs)("div",{className:"control-info",children:[o&&Object(b.jsxs)(b.Fragment,{children:["\xd7",o<1?"1/"+Math.round(1/o*10)/10:Math.round(10*o)/10]}),"\xa0(",i," \xd7 ",s,")"]})]})},Cl=Object(r.forwardRef)(((e,t)=>{let{globalScale:a}=e;const[n,o]=Object(r.useState)(!1),[l,i]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)((()=>1/a));return Object(r.useImperativeHandle)(t,(()=>({setVisible:o,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>i((e=>e+1)),getCanvasKey:()=>l}))),Object(r.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()}),[a]),Object(b.jsx)(ar.a,{width:`${wl+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>o(!1),footer:null,children:Object(b.jsx)(Sl,{className:"card-lightbox-container",children:Object(b.jsx)(gl.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"card-lightbox-control",children:Object(b.jsx)(kl,{...t,scale:d,globalScale:a,width:wl*a,height:Ol*a})}),Object(b.jsx)(gl.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:wl,maxHeight:Ol,lineHeight:0},children:Object(b.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:wl*a,height:Ol*a},l+.1)})]})}})})})}));var Fl=a(555);const Tl=Object(or.b)(Fl.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Nl=Object(or.b)(Fl.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,Ll=e=>{let{onChange:t,...a}=e;const r=vr(),{resolution:n,updateSetting:o}=Xr(Object(ao.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}})));return Object(b.jsxs)(Fl.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(b.jsx)(Tl,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),jt.map((e=>{let{width:a,height:l,label:i,scale:s}=e;return Object(b.jsx)(Nl,{className:n[0]===a&&n[1]===l?"active-setting":"",onClick:()=>{o({resolution:[a,l],globalScale:s}),null===t||void 0===t||t([a,l],s)},children:s>1?Object(b.jsx)(So.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(b.jsx)(Ao,{children:r["setting.option.resolution.warning"]}),children:i}):i},`${a}-${l}`)}))]})};var Rl=a(556),zl=a(140),Wl=a(281),El=a.n(Wl),Bl=a(580),Dl=a(581),Hl=a(541);const Il=or.b.div`
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
`,Al=()=>Object(b.jsx)(Hl.a,{});Al.FullView=()=>Object(b.jsx)(Il,{className:"loading-fullview",children:Object(b.jsx)(Hl.a,{size:"large"})});a(410),a(411);const Ml=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:o=0,y:l=0,unit:i}=e;if("px"===i){const e=.8,n=400/300,{width:i,height:s}=t,c=s/i>=e?n:1,d=Math.min((null!==o&&void 0!==o?o:0)*c,i),u=Math.min((null!==l&&void 0!==l?l:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,i);return{unit:"%",x:d/i*100,y:u/s*100,width:m/i*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(o<0)return{...e,x:0};if(l<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),p=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,b=p/100,f=b>1?100:p,h=b>1?d/b:d,g=b>1?(100-h)/2:o<0?0:o,v=b>1||l<0?0:l;return{...e,x:g,y:v,height:f,width:h,aspect:a}},Pl=Object(r.forwardRef)(((e,t)=>{let{title:a,backgroundColor:n,className:o,forceFit:l,defaultSourceType:i,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:p,ratio:f,onSourceLoaded:h=()=>{},onSourceChange:g=()=>{},onCropChange:v=()=>{},onTainted:y=()=>{},onMaxSizeExceeded:x=()=>{},onForceFitChange:j=()=>{}}=e;const O="offline"===i?"offline":"online",w=vr(),S=Object(r.useRef)(null),[k,C]=Object(r.useState)("anonymous"),[F,T]=Object(r.useState)(0),[N,L]=Object(r.useState)(O),[R,z]=Object(r.useState)(O),[W,E]=Object(r.useState)(s),[B,D]=Object(r.useState)(!1),[H,I]=Object(r.useState)(null),[A,M]=Object(r.useState)(!1),[P,$]=Object(r.useState)(c),Y=Object(r.useRef)(null),[U,K]=Object(r.useState)({current:p,completed:null}),[G,X]=Object(r.useState)("%"===p.unit),{current:V,completed:_}=U,q=Object(r.useRef)({source:"",crop:null}),J=Object(r.useCallback)((e=>{if(D(!1),I(null),h(k),Y.current=e,e.src===q.current.source&&q.current.crop){const t=Z.current;setTimeout((()=>{if(t!==Z.current||!q.current.crop)return;const a=Ml(q.current.crop,e,f);K({completed:a,current:a}),X(!0),q.current={source:"",crop:null}}),250)}else setTimeout((()=>{K((t=>{const a=Ml(t.current,e,f);return{completed:a,current:a}})),X(!0)}),250)}),[k,h,f]);Object(r.useEffect)((()=>{var e,t,a,r;const n=Y.current;if(!_||!d||!n)return;const{aspect:o}=_;d.style.transform="scale(2)";const i=d.getContext("2d");if(!i||"number"!==typeof o||o<=0)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,p=null!==(e=_.unit)&&void 0!==e?e:"px",b=window.devicePixelRatio;i.setTransform(b,0,0,b,0,0);let f,h=Math.floor((null!==(t=_.width)&&void 0!==t?t:0)*("px"===p?u:c/100)),g=Math.min(c,h),y=Math.floor(h/o),x=Math.min(s,y),j=Math.min(c,Math.floor((null!==(a=_.x)&&void 0!==a?a:0)*("px"===p?u:c/100))),O=Math.min(s,Math.floor((null!==(r=_.y)&&void 0!==r?r:0)*("px"===p?m:s/100)));if(i.imageSmoothingQuality="high",!(g<=0||x<=0)){if(j+g>c||O+x>s||j<0||O<0||Math.abs((h-g)/g)>.01||Math.abs((y-x)/x)>.01){"width"===(o*s>c?"width":"height")?(g=c,x=g/o,j=0,O=(s-x)/2,f={unit:"%",aspect:o,height:x/s*100,width:g/c*100,x:0,y:O/s*100}):(g=s*o,x=s,j=(c-g)/2,O=0,f={unit:"%",aspect:o,height:x/s*100,width:g/c*100,x:j/c*100,y:0})}if(l){"width"===(o*s>c?"width":"height")?(g=c,x=g/o):(g=s*o,x=s),d.width=g,d.height=x,i.drawImage(n,0,0,c,s,0,0,g,x)}else{var w,S;d.width=null!==(w=g)&&void 0!==w?w:0,d.height=null!==(S=x)&&void 0!==S?S:0,i.drawImage(n,j,O,g,x,0,0,g,x)}"offline"===N&&(null!==W&&void 0!==W?W:"").length<=0||o===_.aspect&&v(_,N,A),f&&K((e=>({...e,current:f})))}}),[_,d,F,l]),Object(r.useEffect)((()=>{M(!1),K((e=>{if(null!=Y.current&&e.current){const t=Ml(e.current,Y.current,f);return{current:t,completed:t}}return e}))}),[f]);const Z=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>B,hasImage:()=>"string"===typeof W&&W.length>0&&"offline"===N||"string"===typeof P&&P.length>0&&"online"===N,forceSource:(e,t,a)=>{const r="offline"===N?W:P;M(!1),r!==t&&(D(!0),L(e),z(e),g(e,t),"offline"===e?E(t):$(t)),C("anonymous"),X("%"===a.unit),Z.current+=1,q.current={source:t,crop:a},T((e=>e+1))}})));const Q="offline"===N&&(null!==W&&void 0!==W?W:"").length>0||"online"===N&&(null!==P&&void 0!==P?P:"").length>0,ee=d&&Q&&!B&&(null===_||void 0===_?void 0:_.width)&&(null===_||void 0===_?void 0:_.height);return Object(b.jsxs)("div",{className:`card-image-cropper ${o}`,children:[Object(b.jsxs)("div",{className:"card-image-source-input",children:[u,Object(b.jsxs)("div",{className:"card-image-source-input-container",children:[Object(b.jsxs)("div",{className:"card-image-source-input-title",children:[Object(b.jsxs)("span",{className:"field-title",children:[a," ",Object(b.jsx)(Ro,{Icon:Bl.a,containerProps:{className:ee?"":"disabled"},tooltipProps:{overlay:ee?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>ee&&d&&function(e,t){t&&e&&e.toBlob((e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}}),"image/png",1)}(d,_)})]}),Object(b.jsxs)(Vo.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;z(t),((null!==W&&void 0!==W?W:"").length>0&&"offline"===t||(null!==P&&void 0!==P?P:"").length>0&&"online"===t)&&(L(t),"offline"===t?(C("anonymous"),g("offline",W)):g("online",P),D(!0))},value:R,children:[Object(b.jsx)(Vo.a.Button,{value:"online",checked:"online"===R,children:w["image-cropper.source.online.tooltip"]}),Object(b.jsx)(nr.a,{placement:"topLeft",title:Object(b.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(b.jsx)(Vo.a.Button,{value:"offline",checked:"offline"===R,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(b.jsxs)("div",{className:["card-image-input","online"===R?"":"input-inactive"].join(" "),children:[Object(b.jsx)(Rl.a,{placeholder:w["image-cropper.placeholder"],value:P,onChange:e=>{const t=e.target.value;C("anonymous"),D(!0),L("online"),z("online"),g("online",t),$(t)},maxLength:512,allowClear:!0},"key"),Object(b.jsx)("div",{className:"online-image-tip",children:w["image-cropper.online-tip"]})]}),Object(b.jsxs)("div",{className:["card-image-input","offline"===R?"":"input-inactive"].join(" "),children:[Object(b.jsx)(Rl.a,{ref:S,type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files.length>0){const t=e.target.files[0],a=4;if(t.size<1024*a*1024){D(!0);const e=new FileReader;e.addEventListener("load",(()=>{"string"===typeof e.result&&(C("anonymous"),E(e.result),L("offline"),z("offline"),g("offline",e.result),D(!1))})),e.readAsDataURL(t)}else x(a)}else alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=S.current)||void 0===e?void 0:e.setValue("")}}),Object(b.jsx)("hr",{}),w["image-cropper.offline-warning"]]})]})]}),m,Object(b.jsxs)("div",{className:"card-cropper",onKeyDown:()=>{M(!0)},children:[B&&Object(b.jsx)(Al.FullView,{}),Q&&!H&&Object(b.jsxs)("div",{className:"card-image-option",children:[Object(b.jsx)(nr.a,{placement:"left",overlay:l?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(b.jsx)("div",{className:tr("image-option force-fit-option",l?"option-active":""),onClick:()=>{M(!0),j(!l)},children:Object(b.jsx)(jl.a,{})})}),!l&&Object(b.jsx)(nr.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(b.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{M(!0),K((e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}}))},children:Object(b.jsx)(Dl.a,{})})}),!l&&Object(b.jsx)(nr.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(b.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{M(!0),K((e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}}))},children:Object(b.jsx)(Dl.a,{})})})]}),(!Q||H&&void 0===k)&&Object(b.jsx)(zl.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(b.jsx)(El.a,{src:"offline"===N?W:P,disabled:l,className:l?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:J,onImageError:()=>{if(q.current={source:"",crop:null},d)if("online"===N&&""===(null!==P&&void 0!==P?P:"")||"offline"===N&&""===(null!==W&&void 0!==W?W:"")){const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),_&&v(_,N,A),h(k),D(!1),I("Image not found")}else C(void 0),y();else D(!1),I("No receiving canvas"),y();void 0===k&&(D(!1),I("Tainted canvas"))},crop:V,onDragStart:()=>{M(!0)},onChange:(e,t)=>{const a=Y.current;q.current.crop||(G?K((e=>({...e,current:Ml(t,a,f)}))):(X(!0),K((t=>({...t,current:Ml(e,a,f)})))))},onComplete:(e,t)=>{q.current.crop||K((e=>({...e,completed:t})))},ruleOfThirds:!0,crossorigin:k},`${N}-${G}-${F}`)]})]})})),$l=or.b.div`
    --link-arrow-icon-size: 16px;
    --link-arrow-border-size: 8px;
    --link-arrow-half-size: 13px;
    --link-arrow-full-size: calc(var(--link-arrow-half-size) * 2);
    --link-arrow-margin-inline: calc(var(--link-arrow-half-size) - var(--link-arrow-icon-size) / 2);
    --link-arrow-margin-block: calc(var(--link-arrow-half-size) - var(--link-arrow-border-size) / 2);
    font-weight: 500;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    padding: var(--spacing-sm);
    background-color: var(--main-level-4);
    box-shadow: var(--bs-block);
    border-radius: var(--br-lg);
    display: inline-block;
    .title {
        line-height: 0;
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
`,Yl=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:o}=e;const[l,i]=Object(r.useState)(a),s=vr(),c=JSON.stringify(l);return Object(r.useEffect)((()=>{n(l)}),[c]),Object(b.jsxs)($l,{className:tr("link-marker-chooser",t?"chooser-active":"chooser-disabled"),children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)(No.a,{checked:t,onChange:e=>o(e.target.checked),children:s["link-picker.label"]})}),Object(b.jsx)("div",{className:"container",children:[...Array(9)].map(((e,a)=>{const r=`${a+1}`;return"5"===r?Object(b.jsx)(nr.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(b.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&i([])},children:Object(b.jsx)(p.a,{})})},"5"):Object(b.jsx)("div",{className:`link-marker-button marker-${a+1} ${l.includes(r)?"marker-checked":""}`,onClick:()=>{t&&i((e=>{let t=[...e];return t.includes(r)?t=t.filter((e=>e!==r)):t.push(r),t}))},children:Object(b.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${ye[a]}deg) translateY(-1px)`}})},r)}))})]})},Ul=e=>Object(b.jsx)(go,{fallback:Object(b.jsx)(b.Fragment,{}),children:Object(b.jsx)(fo.a,{...e})}),Kl=or.b.div`
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
`,Gl=or.b.div`
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
`,Xl={Container:or.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Option:Gl},Vl=Object(or.b)(mo.a)`
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
    .button-option {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        padding: var(--spacing);
        border-left: var(--bw) solid var(--sub-secondary);
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
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
    }
`,_l=Object(r.forwardRef)(((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:o,globalScale:l,canvasMap:i,onDownloadError:s}=e;const c=vr(),{allowHotkey:d,resolution:u}=Xr(Object(ao.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),{onExport:m}=to(!0,i,{imageChangeCount:o,isInitializing:n,language:c,globalScale:l}),{exportCanvasRef:p}=i,f=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[h,g]=Object(r.useState)(!1),v=Object(r.useCallback)((()=>{g(!1)}),[]),{onSave:y,isPipelineRunning:x}=Vr({isTainted:a,isInitializing:n,exportCanvasRef:p,exportRef:f,onExport:m,onDownloadError:s,onDownloadComplete:v}),j=e=>{h||(a?rr.a.error({message:c["prompt.download.tainted.message"]}):(g(!0),y(e)))};return Object(r.useImperativeHandle)(t,(()=>({download:j,isPipelineRunning:x}))),a?null:Object(b.jsxs)("div",{className:"save-button-container",children:[Object(b.jsx)("div",{id:"save-button-waiting"}),Object(b.jsxs)(Vl,{className:"save-button",id:"save-button-ready",children:[Object(b.jsx)(nr.a,{overlay:d?Object(b.jsx)(b.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(b.jsx)("div",{className:"button-label",children:Object(b.jsx)("div",{className:"label-content",onClick:()=>j(),children:h?c["button.download.ongoing.label"]:c["button.download.label"]})})}),Object(b.jsx)(po.a,{disabled:h,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(b.jsx)(Ll,{onChange:()=>Ja()}),children:Object(b.jsxs)("div",{className:"button-option",onClick:e=>e.stopPropagation(),children:[Object(b.jsx)(bo.a,{className:"resolution-icon"}),Object(b.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]})}));var ql=a(189),Jl=a.n(ql),Zl=a(583),Ql=a(584),ei=a(585),ti=a(586);const ai=or.b.div`
    ${lr} {
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
`,ri=Object(or.b)(lr)`
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
`,ni=e=>{let{data:t,children:a,disabled:n,withText:o}=e;const[l,i]=Object(r.useState)(!1);return Object(b.jsxs)(ri,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,Jl()(a),i(!0),setTimeout((()=>{i(!1)}),1e3)},children:[l?Object(b.jsx)("div",{className:"copiable-overlay",children:o?Object(b.jsxs)(b.Fragment,{children:["Copied\xa0",Object(b.jsx)(Zl.a,{})]}):Object(b.jsx)(Zl.a,{})}):null,a]})},oi=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:pa},{label:e["button.import.for-other.label"],value:"other",converter:Na}],li=Object(r.forwardRef)(((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:o,onRequireDownload:l,onClose:i}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,p]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:f,resolution:h}=Xr(Object(ao.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),g=vr(),v="export-input-raw",y=Object(r.useCallback)((()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())}),[]);Object(r.useImperativeHandle)(t,(()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),p(oi(g).map((t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:o}=r(e,n);return{value:a,isPartial:t,name:ha(e.name),data:`${JSON.stringify(o)}`}}catch(o){return console.error(o),{value:a,isPartial:!1,name:"Unknown",data:""}}})).reduce(((e,t)=>{let{data:a,isPartial:r,value:n,name:o}=t;return e[n]={name:o,data:a,isPartial:r},e}),{...m}))}}))),Object(r.useEffect)((()=>{setTimeout((()=>{s&&"ygocarder"===d&&y()}),100)}),[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ar.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay",onCancel:()=>{c(!1),i()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(b.jsxs)(ai,{children:[Object(b.jsx)(Do,{optionList:oi(g),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(b.jsxs)("div",{className:"partial-alert",children:[Object(b.jsx)("b",{children:g["service.decode.partial.message"]}),Object(b.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(b.jsxs)("div",{className:tr("export-container-result",`mode_${d}`),children:[Object(b.jsx)(Mo,{content:a&&"other"===d?Object(b.jsx)(ol,{}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(lr,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});va(ha(O),e,"application/json")},children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(Bl.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(b.jsx)(Mo,{content:j?Object(b.jsx)(Ao,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(ni,{disabled:j,data:m.ygocarder.data,withText:!0,children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(Ql.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(b.jsx)("div",{children:Object(b.jsxs)(ni,{disabled:j,data:window.location.href,withText:!0,children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(ei.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.share-button.label"]})]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Mo,{content:a?Object(b.jsx)(ol,{}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(lr,{disabled:a,className:"export-download-image",onClick:l,children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(ti.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(b.jsx)(po.a,{overlay:Object(b.jsx)(Ll,{}),children:Object(b.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!j&&Object(b.jsx)(Rl.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(b.jsx)(nr.a,{overlay:f?Object(b.jsx)(b.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(b.jsx)("button",{className:"primary-button export-button",onClick:()=>{o(),c(!0)},children:g["button.export.label"]})}),Object(b.jsx)(po.a,{overlay:Object(b.jsx)(Fl.a,{onClick:e=>e.domEvent.stopPropagation(),children:oi(g).map(((e,t)=>{let{converter:a,label:r}=e;return Object(b.jsx)(Fl.a.Item,{onClick:()=>{try{const e=Gr.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});va(ha(e),a,"application/json")})(ha(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),rr.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:r},`${t}`)}))}),children:Object(b.jsx)(lr,{className:"secondary-button export-custom",children:Object(b.jsx)(Bl.a,{})})})]})}));var ii=a(587);const si=or.b.div`
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
        ${lr} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,ci=Object(r.forwardRef)(((e,t)=>{let{allowHotkey:a,language:n,onImport:o,onClose:l}=e;const i="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,p]=Object(r.useState)(0),[f,h]=Object(r.useState)("replace"),[g,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)((()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())}),[]);Object(r.useEffect)((()=>{setTimeout((()=>{g&&j()}),100)}),[j,g]),Object(r.useImperativeHandle)(t,(()=>({requestImport:e=>{h(e),v(!0)}})));const O=()=>{p((e=>e+1)),v(!1),x(!1),l()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:r,isPartial:l}=Ur(e,"replace"===f||"new"===f?void 0:Gr.getState().card);if(l&&rr.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===r.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(r.art)){const e={...r};try{const t=await(async e=>{const t=new Headers;t.append("Authorization","Client-ID 83ff9cbdd22c23c");const a=new FormData;return a.append("image",e),a.append("type","url"),a.append("title",e.replace("https://images.ygoprodeck.com/images/cards_cropped/","").replace(".jpg","")),await fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:a,redirect:"follow"})})(r.art);if(200!==t.status)throw e.art="https://i.imgur.com/jjtCuG5.png",new Error("Imgur response status: "+t.status);const a=await t.json();e.art=a.data.link}catch(a){console.error("Upload error:",a),rr.a.error({message:n["prompt.import.imgur.message"],description:n["prompt.import.imgur.description"]})}o(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}else o(r,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}}catch(a){console.error("Import error:",a),rr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},S=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},k=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,o=null!==(e=n.trim())&&void 0!==e?e:"";let l="";try{l=na(decodeURIComponent(o))}catch(a){}let i=null;if(o.startsWith("{")&&o.endsWith("}"))i=o;else if(l.startsWith("{")&&l.endsWith("}"))i=JSON.parse(l);else{var t;const e=o.startsWith("https://db.ygoprodeck.com/api")?o:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${o}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();i=null!==(t=r.data.find((e=>{let{name:t}=e;return t.toLowerCase()===o.toLowerCase()})))&&void 0!==t?t:r.data.sort(((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],o=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!o)return 0;return(n.viewsweek+1)/(o.viewsweek+1)>2?o.viewsweek-n.viewsweek:o.views-n.views}))[0]}await w(i,!0)}}catch(a){console.error("Import error:",a),rr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{O()}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ar.a,{visible:g,title:"merge"===f?n["button.import.merge.label"]:n["button.import.label"],className:"global-overlay",onCancel:O,okText:n["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:k,children:Object(b.jsxs)(si,{children:["merge"!==f?Object(b.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(b.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(b.jsx)("div",{className:"import-container-input",children:Object(b.jsx)(Rl.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:y,onPressEnter:k,rows:4},`input-${m}`)}),"merge"!==f?Object(b.jsxs)("div",{className:"import-container-upload",children:[Object(b.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(b.jsxs)(lr,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(b.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;S(t),O()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===f&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(b.jsx)(lr,{className:"import-empty",onClick:()=>{w(gt()),O()},children:n["button.empty.label"]})]})]}):null]})}),Object(b.jsx)(nr.a,{overlay:a?Object(b.jsxs)("div",{className:"center",children:[Object(b.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(b.jsxs)("div",{children:["Ctrl-G / \u2318-G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(b.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),v(!0)},children:n["button.import.label"]})}),Object(b.jsx)(nr.a,{overlay:n["button.import.tooltip"],children:Object(b.jsxs)(lr,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(i);e&&e.click()},children:[Object(b.jsx)("input",{ref:d,type:"file",id:i,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;S(t),O()}},`direct-file-input-${m}`),Object(b.jsx)(ii.a,{})]})})]})})),di=(Object(or.b)(Fl.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),ui=Object.values(U).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}})),mi=[{value:"normal",label:Object(b.jsx)(p.a,{})},...Object.values(K).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}}))],pi=()=>ge.map((e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:o}=e;return{label:Object(b.jsx)(hl,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a}),value:t,edition:o}})),bi=[...Array(14)].map(((e,t)=>({label:t,value:t}))),fi=x.map((e=>{let{value:t}=e;return{label:t===y?Object(b.jsx)(p.a,{}):Object(b.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}})),hi=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map((e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}})).sort(((e,t)=>e.order-t.order));const gi=or.b.div`
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
`,vi=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=vr(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(b.jsxs)(gi,{tabIndex:-1,className:"char-picker-container",children:[Object(b.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\u2205","\u203b"].map((e=>Object(b.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e)))}),Object(b.jsx)("div",{className:"char-picker-guideline",children:Object(b.jsx)(Fo,{content:Object(b.jsxs)(Ao,{children:[r["input.char-picker.guide.header"],Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(b.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var yi=a(67),xi=a(589),ji=a(564);a(525),a(526);const Oi=Object(r.forwardRef)(((e,t)=>{let{disabled:a,color:n,onSelect:o,onOffsetChange:l,onRemove:i}=e;const s=vr(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[p,f]=Object(r.useState)(-1),h=Object(r.useRef)(pr()(m,250)).current;return Object(r.useImperativeHandle)(t,(()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:o,round:l}=Math;d(t),m(o(0,n(100,l(100*parseFloat(a))))),f(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===p&&m(r(0,a(100,n(100*parseFloat(t)))))}}))),Object(r.useEffect)((()=>{p>0&&(null===l||void 0===l||l(p,""+u/100))}),[p,u,l]),Object(b.jsxs)("div",{className:"stop-point-control-panel",children:[Object(b.jsxs)("div",{className:"stop-point-offset-input",children:[Object(b.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(b.jsx)(ji.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(b.jsx)(mo.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===i||void 0===i?void 0:i(p),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(b.jsx)(yi.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===o||void 0===o||o(e.hex)}})]})})),wi=e=>({colorList:e,raw:$a(e)}),Si=e=>{var t,a;let{palette:n=$a(Pa()),angle:o=180,memoizedOnChange:l}=e;const i=vr(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(o),[u,m]=Object(r.useState)((()=>{var e,t;const a=Ya(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}})),p=Object(r.useCallback)(((e,t)=>m((a=>{const r=a.colorList.map((a=>a.id===e?{...a,offset:t}:a));return{...a,...wi(r)}}))),[]);Object(r.useEffect)((()=>{d(o)}),[o]),Object(r.useEffect)((()=>{var e,t;const a=Ya(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})}),[n]);const f=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{var e;u.colorList[0]&&f.current&&(f.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))}),[u.colorList]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find((e=>e.id===a));e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}}),100),()=>{e=!1}}),[u]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&l(u.colorList,c)}),200),()=>{e=!1}}),[u,c,l]),Object(b.jsxs)("div",{className:tr(yo,"gradient-picker-container"),children:[Object(b.jsxs)("div",{className:"gradient-angle-control",children:[Object(b.jsx)("h2",{children:i["input.name-style.gradient.color-point.label"]}),Object(b.jsxs)(mo.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m((e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort(((e,t)=>Number(e.offset)-Number(t.offset)));return{...e,...wi(t)}}))},children:[i["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(b.jsx)(jo,{angle:c,size:120,setAngle:d,children:Object(b.jsx)("h2",{children:i["input.name-style.gradient.gradient-direction.label"]})})]}),Object(b.jsx)("div",{className:"stop-color-picker-container",children:Object(b.jsx)(vo.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m((t=>({...t,...wi(e)}))),onColorStopSelect:e=>{var t;m((t=>({...t,currentControlId:e.id}))),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(b.jsx)(Oi,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:p,onRemove:e=>{m((t=>{var a;const r=t.colorList.filter((t=>t.id!==e)),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var o;n>0&&u.colorList[n]&&(null===(o=s.current)||void 0===o||o.setColor(u.colorList[n]));return{...wi(r),currentControlId:n}}))}})})})]})},ki=Object(or.b)(Xl.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,Ci=or.b.div`
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
`,Fi=Object(or.b)(Xl.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Ti=or.b.div`
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
`;var Ni=a(299);const Li=Object(r.forwardRef)(((e,t)=>{let{className:a,defaultValue:n,fieldMap:o,labelMap:l,onChange:i}=e;const s=vr(),{x:c,y:d,color:u,width:m}=o,[p,f]=Object(r.useState)((()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}})),{x:h,y:g,color:v,width:y}=p,x=l[m];return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&i(p)}),500),()=>{e=!1}}),[p]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==p[a])return void f((t=>({...t,...e})))}}))),Object(b.jsxs)("div",{className:a,children:[Object(b.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(b.jsxs)("div",{className:"line-position",children:[Object(b.jsx)(Ni.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==h&&void 0!==h?h:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return f((e=>({...e,x:t,y:a})))}}),Object(b.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(b.jsx)(ji.a,{size:"small",value:h,onChange:e=>f((t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(b.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(b.jsx)(ji.a,{size:"small",value:g,onChange:e=>f((t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(b.jsxs)("div",{className:"single-slider",children:[x,":\xa0",Object(b.jsx)(Ul,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&f((t=>({...t,width:e})))}})]})]}),Object(b.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(b.jsx)(yi.b,{colors:yt,color:v,onChangeComplete:e=>f((t=>({...t,color:e.hex})))})]})})),Ri=Object(r.forwardRef)(((e,t)=>{let{active:a,value:n,onClick:o,onCancel:l}=e;const i=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsx)(Fi,{ref:i,...Ka({stopPropagation:!0,optionLength:k.length,setFocus:c,onTrigger:()=>{s>=0&&o(k[s])},onCancel:()=>{null===l||void 0===l||l()}}),children:k.map(((e,t)=>{const{key:r,image:l,label:i}=e;return Object(b.jsx)(Ti,{className:tr("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),o(e)},children:Object(b.jsx)("img",{className:"preset-preview",src:`/ygocarder/${l}`,alt:i})},r)}))})}));var zi=a(588);const Wi=or.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,Ei=or.b.div`
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
`,Bi=.01;const Di={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},Hi=Object(r.forwardRef)(((e,t)=>{let{defaultPitch:a=Di.embossPitch,defaultYaw:n=Di.embossYaw,defaultThickness:o=Di.embossThickness,materialColor:l,children:i,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=Ua(),[p,f]=Object(r.useState)("#ffffff"),[h,g]=Object(r.useState)(o),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(a),O=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),S=Object(r.useRef)(o),[k]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{let e=!0;return m&&setTimeout((()=>{if(e){const e=Vt(v,x),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(p);(t[0]!==O.current[0]||t[1]!==O.current[1]||t[2]!==O.current[2]||Math.abs(e[0]-w.current[0])>Bi||Math.abs(e[1]-w.current[1])>Bi||Math.abs(e[2]-w.current[2])>Bi||h!==S.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:v,pitch:x,thickness:h}),O.current=t,w.current=e,S.current=h}}),150),()=>{e=!1}}),[m,p,v,x,h]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&f(t),a&&j(a),r&&y(r),"number"===typeof n&&y(n)}}))),Object(b.jsxs)(Ei,{className:tr(yo,"emboss-control"),children:[Object(b.jsx)("div",{className:"emboss-control-title",children:i}),Object(b.jsxs)("div",{className:"emboss-control-left",children:[Object(b.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(b.jsx)(Wi,{className:"material-color",onClick:c,$color:l})]}),s["input.name-style.emboss.color.alert"](Object(b.jsx)("span",{className:"navigate-button",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(b.jsxs)("h2",{className:"thickness-row",children:[Object(b.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(b.jsx)(Ul,{value:h,min:0,max:4,onChange:e=>{"number"===typeof e&&(g(e),u())}})]}),Object(b.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(b.jsx)(zi.a,{className:"reset-button",onClick:()=>{j(90),u()}})]}),Object(b.jsxs)($o,{className:"vertical-angle-control",children:[Object(b.jsx)("div",{className:"slider-label"}),Object(b.jsx)(ji.a,{size:"small",min:-90,max:90,onChange:e=>{j("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:x}),Object(b.jsx)(Ul,{min:-90,max:90,value:x,onChange:e=>{j(e),u()}}),Object(b.jsx)("div",{className:"slider-padding"})]}),Object(b.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(b.jsx)(zi.a,{className:"reset-button",onClick:()=>{y(90),u()}})]}),Object(b.jsx)("div",{className:"horizontal-angle-contorl",children:Object(b.jsx)(jo,{angle:v,size:120,setAngle:e=>{y(e),u()}})})]}),k&&Object(b.jsxs)("div",{className:"emboss-control-right",children:[Object(b.jsx)("h2",{children:"Light color"}),Object(b.jsx)(yi.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:p,onChange:e=>{f(e.hex),u()},onChangeComplete:e=>{f(e.hex),u()}})]})]})})),Ii=or.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,Ai=e=>{let{color:t,onChange:a}=e;const[n,o]=Object(r.useState)(t);return Object(r.useEffect)((()=>{o(t)}),[t]),Object(b.jsxs)(Ii,{children:[Object(b.jsx)(yi.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>o(e.hex),onChangeComplete:e=>{o(e.hex),a(e.hex)}}),Object(b.jsx)(yi.b,{colors:yt,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(532);const Mi=Object(r.forwardRef)(((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:o,showExtraDecorativeOption:l,onChange:i}=e;const s=vr(),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(-1),[m,f]=Object(r.useState)(!1),[h,g]=Object(r.useState)(n),[v,y]=Object(r.useState)(o),[x,j]=Ua(),O=Object(r.useRef)(pr()(i,250)).current,w=Object(r.useCallback)(((e,t)=>{y((a=>({...a,gradientAngle:t,gradientColor:$a(e)}))),x()}),[x]),k=Xr((e=>e.setting.reduceMotionColor)),C=Object(r.useMemo)((()=>{return e=s,Object.values(ae).map((t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[s]);Object(r.useEffect)((()=>{0!==j&&(g("custom"),O("custom",v))}),[j]);const T=Object(r.useRef)(null),N=Object(r.useRef)(null),L=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r;y((t=>({...t,...e})));const{lineColor:n,lineWidth:o,lineOffsetX:l,lineOffsetY:i,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:p,embossThickness:b}=e;null===(t=T.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=N.current)||void 0===a||a.setValue({x:l,y:i,width:o,color:n}),null===(r=L.current)||void 0===r||r.setValue({pitch:m,yaw:p,thickness:b})}})));const{fillStyle:R,headTextFillStyle:z,hasOutline:W,hasShadow:E,hasGradient:B,gradientColor:D,gradientAngle:H,hasEmboss:I,embossPitch:A,embossYaw:M,embossThickness:P,pattern:$,font:Y}=v,{labelBackgroundColor:U,labelBackgroundImage:K}=null!==a&&void 0!==a?a:{},G={background:U,backgroundImage:K},X="custom"===h,V="predefined"===h,_="name-style-option-input-container",q=()=>{g("auto"),"auto"!==h&&O("auto",v)},J=()=>{var e;const t=v.preset?null===(e=S[v.preset])||void 0===e?void 0:e.value:{};g("predefined"),y((e=>({...e,...t}))),O("predefined",{...v,...t})},Z=()=>{g("custom"),"custom"!==h&&O("custom",v)},Q="color-picker";return Object(b.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(b.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(b.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(b.jsxs)("span",{className:"name-style-input-container",children:[Object(b.jsxs)("div",{id:_,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...Ka({setFocus:u,optionLength:3,onKeyPress:e=>{if(1===d&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),u(1),f(!0),setTimeout((()=>{var e;1===d&&(null===(e=c.current)||void 0===e||e.focus())}),200),!1},onTrigger(){0===d&&q(),1===d&&J(),2===d&&Z()}}),children:[Object(b.jsxs)("label",{className:tr("ant-radio-wrapper","auto"===h&&"ant-radio-wrapper-checked",0===d&&"ant-radio-focused"),onClick:()=>q(),children:[Object(b.jsxs)("span",{className:"ant-radio "+("auto"===h?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(b.jsx)("span",{className:"name-style-option-break"}),Object(b.jsx)("label",{className:tr("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",1===d&&"ant-radio-focused"),onClick:()=>J(),children:Object(b.jsx)(So.a,{visible:m,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Ri,{ref:c,active:V,value:v,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(_))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=S[a])||void 0===t?void 0:t.value:{};g("predefined"),y((e=>({...e,...r}))),O("predefined",{...v,...r})}})}),children:Object(b.jsxs)("span",{className:"name-style-option-label",children:[Object(b.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(b.jsx)("span",{className:"name-style-option-break"}),Object(b.jsx)("label",{className:tr("ant-radio-wrapper",X&&"ant-radio-wrapper-checked",2===d&&"ant-radio-focused"),onClick:()=>Z(),children:Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{className:"ant-radio "+(X?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(b.jsxs)("div",{className:"style-picker",children:[Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsxs)("div",{className:"custom-style-text",children:[Object(b.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(b.jsx)(Ai,{color:R,onChange:e=>{g("custom"),y((t=>({...t,fillStyle:e}))),x()}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"custom-style-text",children:[Object(b.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(b.jsx)(yi.b,{colors:yt,color:z,onChangeComplete:e=>{g("custom"),y((t=>({...t,headTextFillStyle:e.hex}))),x()}})]})]})}),placement:"bottom",children:Object(b.jsxs)(Yo,{id:Q,$softMode:k,$active:X,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(b.jsx)(xi.a,{})]})},"color-picker"),l&&Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(No.a,{value:"has-shadow",checked:E,onChange:()=>{g("custom"),y((e=>({...e,hasShadow:!e.hasShadow}))),x()},children:s["input.name-style.shadow.toggle.label"]})}),E&&Object(b.jsx)(Li,{ref:T,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y((e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n}))),x()}})]})}),placement:"bottom",children:Object(b.jsxs)(Yo,{$softMode:k,$active:X&&E,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(b.jsx)(xi.a,{})]})},"shadow-picker"),Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(No.a,{value:"has-line",checked:W,onChange:()=>{g("custom"),y((e=>({...e,hasOutline:!e.hasOutline}))),x()},children:s["input.name-style.outline.toggle.label"]})}),W&&Object(b.jsx)(Li,{ref:N,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y((e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n}))),x()}})]})}),placement:"bottom",children:Object(b.jsxs)(Yo,{$softMode:k,$active:X&&W,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(b.jsx)(xi.a,{})]})},"outline-picker"),l&&Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(No.a,{value:"has-gradient",checked:B,onChange:()=>{g("custom"),y((e=>({...e,hasGradient:!e.hasGradient}))),x()},children:s["input.name-style.gradient.toggle.label"]})}),B&&Object(b.jsx)("div",{className:"custom-style-gradient",children:Object(b.jsx)(Si,{angle:H,palette:D,memoizedOnChange:w})})]})}),placement:"bottom",children:Object(b.jsxs)(Yo,{$softMode:k,$active:X&&B,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(b.jsx)(xi.a,{})]})},"gradient-picker"),l&&Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)(ki,{onClick:e=>e.stopPropagation(),children:[Object(b.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),F.map((e=>{let{key:t,patternImage:a}=e;return Object(b.jsx)(Ci,{className:["pattern-option",v.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{y((e=>({...e,pattern:t}))),x()},children:a?Object(b.jsx)("img",{style:a?G:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)}))]})}),placement:"bottomLeft",children:Object(b.jsx)(Yo,{$softMode:k,$active:X&&"string"===typeof $&&"none"!==$,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Xl.Container,{children:C.map((e=>{let{value:t,label:a}=e;return Object(b.jsx)(Xl.Option,{className:Y===t?"menu-active":"",onClick:()=>{y((e=>({...e,font:t}))),x()},children:a},t)}))})}),placement:"bottomLeft",children:Object(b.jsx)(Yo,{$softMode:k,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),l&&Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(No.a,{value:"has-emboss",checked:I,onChange:()=>{g("custom"),y((e=>({...e,hasEmboss:!e.hasEmboss}))),x()},children:s["input.name-style.emboss.toggle.label"]})}),I&&Object(b.jsx)(Hi,{ref:L,language:s,defaultPitch:A,defaultYaw:M,defaultThickness:P,materialColor:R,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(Q))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;y((e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t}))),x()},children:Object(b.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(b.jsx)(Yo,{$softMode:k,$active:X&&I,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker")]})]})]})})})),Pi=or.a`
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
`,$i=Object(or.b)(Do)`
	${Pi}
`,Yi=e=>{let{onSTFrameChange:t,onPasswordChange:a,onStatChange:n}=e;const{setting:o}=Xr(),{showExtraDecorativeOption:l}=o,i=Object(r.useMemo)((()=>pi().filter((e=>l||"normal"===e.edition))),[l]),{frame:s,setCard:c}=Gr(Object(ao.useShallow)((e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}}))),d=Object(r.useCallback)((e=>{c((r=>{const{typeAbility:o,attribute:l,format:i,password:s,star:c,atk:d,def:u}=r,m=`${e}`,p="spell"===m||"trap"===m,b=p||"speed-skill"===m,h="tcg"===i?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:fe,g="spell"===m?[h["Spell Card"]]:"trap"===m?[h["Trap Card"]]:o,v="token"===m?pe[i]:s,y=b?"":d,x=b?"":u,j="token"===m?0:c;return a(v),p&&t(g),b&&n(y,x),{...r,frame:m,isLink:"link"===m,attribute:"token"===m?f:p?`${m}`.toUpperCase():l,star:j,typeAbility:g,password:v,atk:y,def:x}}))}),[c,a,t,n]);return Object(b.jsx)($i,{className:"frame-radio",value:s,onChange:d,optionList:i})},Ui=or.b.div`
    ${Wo}
`,Ki=e=>{let{onChange:t,value:a,optionList:n,children:o,className:l}=e;const[i,s]=Object(r.useState)(-1),c=n.length;return Object(b.jsxs)(Ui,{className:["ant-radio-group ant-radio-group-outline checkbox-train",l].join(" "),children:[o&&Object(b.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:o}),Object(b.jsx)("div",{className:"checkbox-train-input-group",...Ka({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[i];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter((t=>`${e.value}`!==t)):[...a,`${e.value}`])}}}),children:n.map(((e,r)=>{const{label:n,value:o,props:l}=e,s=!!Array.isArray(a)&&a.includes(`${o}`);return Object(b.jsxs)("label",{...l,className:["ant-radio-button-wrapper",s?"ant-radio-button-wrapper-checked":"",i===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(s?a.filter((e=>`${o}`!==e)):[...a,`${o}`])},children:[Object(b.jsx)("span",{className:"ant-radio-button "+(s?"ant-radio-button-checked":""),children:Object(b.jsx)("span",{className:"ant-radio-button-inner"})}),Object(b.jsx)("span",{className:"label",children:n})]},o)}))})]})},Gi=Object(or.b)(Pl)`
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: start;
    gap: 0;
    .card-image-source-input {
        display: flex;
        flex-direction: column-reverse;
        .online-image-tip {
            text-align: center;
        }
    }
    .card-cropper {
        width: 375px;
        text-align: center;
    }
`,Xi=Object(r.forwardRef)(((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:o,onSourceLoaded:l,onTainted:i,onCropChange:s}=e;const c=vr(),{background:d,backgroundCrop:u,backgroundType:p,backgroundData:f,backgroundSource:h,backgroundFit:g,isPendulum:v,pendulumSize:y,opacity:x,getUpdater:j,setCard:O}=Gr(Object(ao.useShallow)((e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:o,backgroundFit:l,isPendulum:i,pendulumSize:s,opacity:c},getUpdater:d,setCard:u}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:o,backgroundFit:l,isPendulum:i,pendulumSize:s,opacity:c,getUpdater:d,setCard:u}}))),w=Object(r.useRef)(null),S=Object(r.useMemo)((()=>j("backgroundSource")),[j]),k=Object(r.useMemo)((()=>j("background")),[j]),C=Object(r.useMemo)((()=>j("backgroundData")),[j]),F=Object(r.useCallback)((e=>O((t=>({...t,backgroundFit:e})))),[O]),T=Object(r.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&O((t=>({...t,backgroundCrop:e})),a)}),[s,O]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var o,l;"offline"===n?"string"===typeof r&&a&&(null===(o=w.current)||void 0===o||o.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=w.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(b.jsx)(Gi,{ref:w,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:f,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:o,forceFit:g,onSourceChange:(e,t)=>{S(e),"offline"===e?C(t):k(t)},onCropChange:T,onTainted:i,onSourceLoaded:l,onForceFitChange:F,onMaxSizeExceeded:e=>{rr.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(v,x,p,y).backgroundRatio,beforeCropper:null,children:n})}));var Vi=a(590);a(533);const _i=or.b.span`
    white-space: pre-line;
`,qi=or.b.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    padding: 2px 0;
    align-items: center;
    .card-opacity-slider {
        flex: 0 1 auto;
    }
    .background-preview {
        display: inline-block;
        line-height: 0;
        width: 17px;
        height: 17px; // Alignment
        align-self: center;
        border: 1px solid #333333;
        cursor: pointer;
        text-align: center;
        user-select: none;
        &:hover {
            box-shadow: 0 0 2px 0 #222222;
        }
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
`,Ji=or.b.div`
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
`,Zi=Object(r.forwardRef)(((e,t)=>{var a;let{receivingCanvas:n,defaultValue:o,onTainted:l,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const p=vr(),{background:f,backgroundData:h,backgroundSource:g,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,setCard:O}=Gr(Object(ao.useShallow)((e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:o,isPendulum:l},setCard:i,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:s,hasBackground:o,isPendulum:l,setCard:i}}))),[w,S]=Object(r.useState)(!0),[k,C]=Object(r.useState)(!0),[F,T]=Object(r.useState)((()=>({...d(),...o}))),N=Object(r.useRef)(null),L=Object(r.useMemo)((()=>y("backgroundType")),[y]),R=Object(r.useCallback)((e=>O((t=>({...t,hasBackground:e.target.checked})))),[O]);Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&s(F)}),500),()=>{e=!1}}),[F]),Object(r.useEffect)((()=>{S(!1),setTimeout((()=>{C(!1)}),250)}),[]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...o}=e;var l;"string"!==typeof t&&"string"!==typeof r||!a||(null===(l=N.current)||void 0===l||l.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const i in o)o[i]!==F[i]&&T((e=>({...e,...o})))}})));const z=0===(null!==f&&void 0!==f?f:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(b.jsxs)(qi,{className:"card-opacity-slider-container",children:[Object(b.jsx)(nr.a,{overlayClassName:"long-tooltip-overlay",title:Object(b.jsx)(_i,{children:p["input.opacity.boundless.tooltip"]}),children:Object(b.jsx)(No.a,{className:"art-frame",onChange:e=>T((t=>({...t,boundless:e.target.checked}))),checked:F.boundless,children:p["input.opacity.boundless.label"]})}),vt.map((e=>{var t,a,r;let{labelKey:o,type:s,subType:d,tooltipKey:y}=e;if("pendulum"===s&&!j)return null;const O=!!d,C=d&&F[d];return Object(b.jsxs)($o,{className:["card-opacity-slider",C?"":"inactive"].join(" "),children:[Object(b.jsxs)("div",{className:"slider-label",children:["body"===s&&Object(b.jsx)(So.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:S,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",k?"picker-hidden":""].join(" "),content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)(Ji,{className:["custom-style-picker",z?"overlay-no-background-image":""].join(" "),children:[Object(b.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(b.jsx)(No.a,{checked:x,onChange:e=>{R(e)},children:p["input.background.toggle-label"]}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:p["input.background.description"]})]}),Object(b.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(b.jsx)(Xi,{ref:N,receivingCanvas:n,onSourceLoaded:u,onTainted:l,onCropChange:m,backgroundColor:F.baseFill,children:Object(b.jsxs)("div",{className:"layout-picker-panel",children:[Object(b.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(b.jsx)("h2",{children:p["input.background-color.label"]}),Object(b.jsx)(yi.b,{colors:yt,color:F.baseFill,onChangeComplete:e=>{T((t=>({...t,baseFill:e.hex})))}})]}),!z&&Object(b.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(b.jsx)("h2",{children:p["input.background-type.label"]}),Object(b.jsx)(Do,{className:"background-type-picker",onChange:L,optionList:i({fit:p["input.background-type.fit.label"],full:p["input.background-type.full.label"],frame:p["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(b.jsx)("div",{className:"background-preview",style:{backgroundColor:x?F.baseFill:c},children:Object(b.jsx)(nr.a,{overlay:p["input.background.toolip"],children:Object(b.jsx)("div",{className:"background-preview-callback-passer",children:x?f?Object(b.jsx)("img",{className:"background-image-preview",src:"online"===g?f:h,alt:"Background"}):null:Object(b.jsx)(Vi.a,{className:"no-background-icon"})})})})}),O&&Object(b.jsx)(nr.a,{title:y&&null!==(t=p[y])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(b.jsx)(No.a,{checked:C,onChange:e=>d&&T((t=>({...t,[d]:e.target.checked})))})}),p[o]]}),Object(b.jsx)(ji.a,{size:"small",min:0,max:100,onChange:e=>T((t=>({...t,[s]:"number"===typeof e?e:100}))),value:null!==(a=F[s])&&void 0!==a?a:100}),Object(b.jsx)(Ul,{min:0,max:100,step:5,onChange:e=>T((t=>({...t,[s]:e}))),value:null!==(r=F[s])&&void 0!==r?r:100}),Object(b.jsx)("div",{className:"slider-padding"})]},s)}))]})}));var Qi=a(591),es=a(592),ts=a(593);const as=Object(or.b)(Xl.Container)`
    img.icon-image {
        width: var(--fs-lg);
    }
`,rs=Object(or.b)(Do)`
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
`,ns=Object(r.forwardRef)(((e,t)=>{let{showCreativeOption:a}=e;const n=vr(),{frame:o,subFamily:l,cardIcon:i,star:s,starAlignment:c,getUpdater:d}=Gr(Object(ao.useShallow)((e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starAlignment:o},getUpdater:l}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starAlignment:o,getUpdater:l}}))),u=Object(r.useMemo)((()=>d("cardIcon")),[d]),m=Object(r.useMemo)((()=>d("subFamily")),[d]),f=Object(r.useMemo)((()=>d("star")),[d]),h=Object(r.useMemo)((()=>d("starAlignment")),[d]);Object(r.useImperativeHandle)(t,(()=>({})));const y=Qt(o),x="auto"===i?j["none"===y?"auto":y]:j[i],w=n[x.labelKey],S=a?Object(b.jsxs)(b.Fragment,{children:[w," ",Object(b.jsx)(xi.a,{})]}):w,k=Object(b.jsx)(So.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(as,{children:O.map((e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(b.jsxs)(Xl.Option,{className:a===i?"menu-active":"",onClick:()=>u(a),children:[r?Object(b.jsxs)(b.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)}))})}),placement:"bottomRight",children:Object(b.jsx)("span",{className:`card-icon-dropdown ${"auto"===i?"":"active"} ${a?"":"disabled"}`,children:S})},"icon-type-picker"),C=a?k:S;return"auto"===i&&"none"===y?a?Object(b.jsx)(Do,{className:"fill-input-train",value:i,onChange:u,optionList:O.map((e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(b.jsx)(p.a,{}),value:a,tooltipProps:{title:n[r]}}})),children:C}):null:"st"===x.value?Object(b.jsx)(Do,{className:"fill-input-train",value:l,onChange:m,optionList:(F=n,v.map((e=>{let{value:t,nameKey:a}=e;return{label:t===g?Object(b.jsx)(p.a,{}):Object(b.jsx)(nr.a,{overlay:F[a],children:Object(b.jsx)("img",{alt:F[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}}))),children:C}):Object(b.jsx)(rs,{className:"checkbox-star-train",value:s,onChange:f,optionList:bi,strict:!0,suffix:a&&Object(b.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(b.jsx)(Rl.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:f,placeholder:n["input.icon-type.custom.placeholder"]}),Object(b.jsx)(Do,{value:c,onChange:h,optionList:[{value:"auto",tooltipProps:{overlay:n["input.icon-type.alignment.auto"]},label:Object(b.jsx)(p.a,{})},{value:"left",tooltipProps:{overlay:n["input.icon-type.alignment.left"]},label:Object(b.jsx)(Qi.a,{})},{value:"center",tooltipProps:{overlay:n["input.icon-type.alignment.center"]},label:Object(b.jsx)(es.a,{})},{value:"right",tooltipProps:{overlay:n["input.icon-type.alignment.right"]},label:Object(b.jsx)(ts.a,{})}]})]}),children:C});var F})),os=new Set(["1","2","3","4","5"]),ls=(e,t,a,r,n,o,l)=>{const i=e.substring(a,r),s="\n"===e[r]||!n;let c=i,d=2;switch(t){case"1":o?(c=`[[${i}]]${s?"":"\n"}`,d=s?4:5):(c=`[${i}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${i}}`;break;case"3":c=`{${i}|}`;break;case"4":c=`{${i}||}`,d=3;break;case"5":c=`{{${i}}}`,d=4}l(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},is=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:ss}=Rl.a,cs=Object(r.forwardRef)(((e,t)=>{let{id:a,allowHotkey:n,defaultValue:o,onTakePicker:l,onChange:i,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(o),[m,p]=Object(r.useState)(o),[f,h]=Object(r.useState)({id:"",placement:-1}),g=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;u.current=t,p(t)}),[]);Object(r.useEffect)((()=>{is(f)}),[f]),Object(r.useEffect)((()=>{i({target:{value:m}})}),[m]);const v=e=>{e!==u.current&&g(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null}))),Object(b.jsx)(ss,{id:a,autoComplete:"off",onFocus:()=>a&&(null===l||void 0===l?void 0:l({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:o,key:l,metaKey:i}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(o||i)&&a&&d!==c&&os.has(l)&&(e.preventDefault(),ls(e.currentTarget.value,l,c,d,!0,e.shiftKey,((e,t)=>{g(e),h({id:a,placement:t})})))},onChange:g,...d})})),ds=Object(r.forwardRef)(((e,t)=>{let{id:a,defaultValue:n,onTakePicker:o,onChange:l,onKeyDown:i,className:s,...c}=e;const{setting:d}=Xr(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[p,f]=Object(r.useState)(n),[h,g]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;m.current=t,f(t)}),[]);Object(r.useEffect)((()=>{is(h)}),[h]),Object(r.useEffect)((()=>{l({target:{value:p}})}),[p]);const y=e=>{e!==p&&v(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:y}))),Object(b.jsx)(Rl.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===o||void 0===o?void 0:o({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:p,onKeyDown:e=>{var t,r;if(null===i||void 0===i||i(e),!u)return;const{ctrlKey:n,key:o,metaKey:l}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||l)&&a&&c!==s&&os.has(o)&&(e.preventDefault(),ls(e.currentTarget.value,o,s,c,!1,e.shiftKey,((e,t)=>{v(e),g({id:a,placement:t})})))},onChange:e=>v(e.target.value),...c})})),us=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=Gr((e=>e.getUpdater)),o=Object(r.useRef)(null),l=Object(r.useMemo)((()=>n("effect",void 0,"debounce")),[n]);return Object(r.useEffect)((()=>{var e;const t=null===(e=o.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))}),[]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;null===(t=o.current)||void 0===t||t.setValue(e)}}))),Object(b.jsx)(cs,{ref:o,id:"effect",allowHotkey:!0,defaultValue:Gr.getState().card.effect,onChange:l,onTakePicker:a,autoSize:{minRows:9}})})),ms=or.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,ps=e=>{const t=vr(),{isDuelTerminalCard:a,isFirstEdition:n,isSpeedCard:o,isLimitedEdition:l,isLegacyCard:i,setCard:s}=Gr(Object(ao.useShallow)((e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}))),c=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}))),[s,i]),d=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}))),[s,i]),u=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}))),[s,i]),m=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}))),[s,i]),p=Object(r.useCallback)((e=>s((t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:o,isSpeedCard:l}=t;let i=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&l,i=!d&&!s&&r,c=!(i||s||c)&&o):(s=n,c=!s&&o,d=l,i=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:i,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}))),[s]);return Object(b.jsxs)(ms,{className:"checkbox-input",children:[Object(b.jsx)(nr.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(b.jsx)(No.a,{className:"input-legacy",onChange:p,checked:i,tabIndex:0,children:t["input.legacy.label"]})}),Object(b.jsx)(No.a,{className:"input-1st",onChange:c,checked:n,tabIndex:0,children:t["input.1st-edition.label"]}),Object(b.jsx)(No.a,{className:"input-limited",onChange:d,checked:l,tabIndex:0,children:t["input.limited-edition.label"]}),Object(b.jsx)(No.a,{className:"input-speed",onChange:m,checked:o,tabIndex:0,children:t["input.speed-duel.label"]}),Object(b.jsx)(No.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var bs=a(594);const fs=Object(or.b)(Xl.Container)`
    padding: var(--spacing-xs);
    .radio-train {
        display: flex;
        flex-wrap: wrap;
        max-width: 550px;
        .radio-train-input-group {
            gap: var(--spacing);
        }
    }
    .ant-checkbox-wrapper {
        color: var(--color-heavy);
    }
    .frame-auto-checkbox {
        margin-bottom: var(--spacing-xs);
    }
    ${Pi}
`,hs=or.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,gs=or.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,vs=Object(or.b)(Do)`
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
`,ys=or.b.div`
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
`,xs=Object(r.forwardRef)(((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:o}=e;const l=vr(),{sticker:i,format:s,getUpdater:c}=Gr(Object(ao.useShallow)((e=>{let{card:{sticker:t,format:a},getUpdater:r}=e;return{sticker:t,format:a,getUpdater:r}}))),d=Object(r.useRef)(null),u=Object(r.useRef)(null),m=Object(r.useRef)(null),p=Object(r.useRef)(null),f=s&&me[s]?me[s]:me.tcg,h=Object(r.useMemo)((()=>c("atk",(e=>e))),[c]),g=Object(r.useMemo)((()=>c("def",(e=>e))),[c]),v=Object(r.useMemo)((()=>c("password",void 0,"debounce")),[c]),y=Object(r.useMemo)((()=>c("sticker")),[c]),x=Object(r.useMemo)((()=>c("creator",void 0,"debounce")),[c]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r,n;let{password:o,creator:l,atk:i,def:s}=e;"string"===typeof i&&(null===(t=m.current)||void 0===t||t.setValue(i)),"string"===typeof s&&(null===(a=p.current)||void 0===a||a.setValue(s)),"string"===typeof o&&(null===(r=d.current)||void 0===r||r.setValue(o)),"string"===typeof l&&(null===(n=u.current)||void 0===n||n.setValue(l))}}))),Object(b.jsxs)(ys,{className:"card-footer-input",children:[(a||n)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ds,{ref:m,id:"atk",addonBefore:l["input.atk.label"],defaultValue:Gr.getState().card.atk,onChange:h,onTakePicker:o}),Object(b.jsx)(ds,{ref:p,id:"def",addonBefore:l["input.def.label"],defaultValue:Gr.getState().card.def,onChange:g,onTakePicker:o})]}),Object(b.jsx)(ds,{ref:d,id:"password",addonBefore:Object(b.jsxs)(hs,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:l["input.password.label"]}),Object(b.jsx)(Ro,{onClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.setValue(`${qa("0123456789",8)}`)},Icon:zi.a,tooltipProps:{overlay:l["button.randomize.label"]}})]}),defaultValue:Gr.getState().card.password,onChange:v,onTakePicker:o}),Object(b.jsx)(ds,{ref:u,id:"creator",addonBefore:Object(b.jsxs)(hs,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:l["input.copyright.label"]}),Object(b.jsx)(po.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(b.jsx)(Fl.a,{onClick:e=>e.domEvent.stopPropagation(),children:f.map(((e,t)=>Object(b.jsx)(Fl.a.Item,{onClick:()=>{var t;null===(t=u.current)||void 0===t||t.setValue(e)},children:e},`${t}`)))}),children:Object(b.jsx)("div",{children:Object(b.jsx)(Ro,{onClick:()=>{},Icon:bs.a})})})]}),defaultValue:Gr.getState().card.creator,onChange:x,onTakePicker:o}),Object(b.jsx)(ps,{}),Object(b.jsx)(Do,{className:"sticker-input fill-input-train",value:i,onChange:y,optionList:fi,children:Object(b.jsx)("span",{children:l["input.sticker.label"]})})]})})),js=Object(or.b)(Do)`
    .ant-input-group-addon {
        flex: 0;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`,Os=Object(r.forwardRef)(((e,t)=>{let{showExtraDecorativeOption:a,receivingCanvas:n,onSourceLoaded:o,onTainted:l,onCropChange:i}=e;const s=vr(),{opacity:c,artFinish:d,linkMap:u,isPendulum:p,pendulumSize:f,isLink:h,art:g,artCrop:v,artData:y,artSource:x,artFit:j,getUpdater:O,setCard:w}=Gr(Object(ao.useShallow)((e=>{let{card:{opacity:t,artFinish:a,linkMap:r,isPendulum:n,pendulumSize:o,isLink:l,art:i,artCrop:s,artData:c,artSource:d,artFit:u},getUpdater:m,setCard:p}=e;return{opacity:t,artFinish:a,linkMap:r,isPendulum:n,pendulumSize:o,isLink:l,art:i,artCrop:s,artData:c,artSource:d,artFit:u,getUpdater:m,setCard:p}}))),S=Object(r.useRef)(null),k=Object(r.useMemo)((()=>O("linkMap")),[O]),C=Object(r.useCallback)((e=>w((t=>({...t,isLink:e})))),[w]),F=Object(r.useMemo)((()=>O("art")),[O]),T=Object(r.useMemo)((()=>O("artData")),[O]),N=Object(r.useCallback)((e=>w((t=>({...t,artFit:e})))),[w]),L=Object(r.useMemo)((()=>O("artSource")),[O]),R=Object(r.useMemo)((()=>O("artFinish")),[O]),z=Object(r.useCallback)(((e,t,a)=>{null===i||void 0===i||i(e,t),e&&w((t=>({...t,artCrop:e})),a)}),[i,w]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=S.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var o,l;"offline"===n?"string"===typeof r&&a&&(null===(o=S.current)||void 0===o||o.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=S.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(b.jsx)(Pl,{ref:S,title:s["input.card-art.label"],defaultSourceType:x,defaultExternalSource:g,defaultInternalSource:y,defaultCropInfo:v,forceFit:j,receivingCanvas:n,onSourceChange:(e,t)=>{L(e),"offline"===e?T(t):F(t)},onCropChange:z,onTainted:l,onSourceLoaded:o,onForceFitChange:N,onMaxSizeExceeded:e=>{rr.a.error({description:s["error.max-size.description"](e),message:s["error.max-size.message"]})},ratio:m(p,c,void 0,f).ratio,beforeCropper:a?Object(b.jsx)(js,{className:"art-finish-checkbox fill-input-train",value:d,onChange:R,optionList:mi,children:Object(b.jsx)("span",{className:"field-title",children:s["input.art-finish.label"]})}):null,children:Object(b.jsx)("div",{children:Object(b.jsx)(Yl,{active:!0===h,defaultValue:u,onChange:k,onStatusChange:C},`link-${JSON.stringify(u)}`)})})})),ws=or.b.div`
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
`,Ss=or.b.span`
    cursor: pointer;
`,ks=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=vr(),{name:o,format:l,getUpdater:i}=Gr(Object(ao.useShallow)((e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}}))),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)((()=>i("setId")),[i]),u=Object(r.useMemo)((()=>i("name",void 0,"debounce")),[i]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}}))),Object(b.jsxs)(ws,{className:"name-id-input",children:[Object(b.jsx)(ds,{ref:s,id:"name",defaultValue:o,addonBefore:Object(b.jsx)(nr.a,{title:n["input.name.tooltip"],children:Object(b.jsx)(Ss,{onClick:()=>{navigator.clipboard.writeText(ha(o))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(b.jsx)(ds,{ref:c,id:"set-id",defaultValue:Gr.getState().card.setId,addonBefore:Object(b.jsxs)(hs,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(b.jsx)(Ro,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>qa("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+qa("0000000000111111111122222222223456789",1)+qa("0123456789",2))(l))},Icon:zi.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})})),Cs=Object(r.forwardRef)(((e,t)=>{let{frameList:a,pendulumFrame:n,onChange:o,onCancel:l}=e;const i=vr(),s=Object(r.useRef)("auto"===n?"spell":n),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsxs)(fs,{className:"pendulum-frame-picker",...Ka({stopPropagation:!0,optionLength:a.length,setFocus:u,onTrigger:()=>{d>=0&&o(a[d].value)},onCancel:l}),children:[Object(b.jsx)(No.a,{ref:c,className:"frame-auto-checkbox",checked:"auto"===n,onChange:e=>{o(e.target.checked?"auto":s.current)},children:i["input.frame.auto"]}),Object(b.jsx)(Do,{className:"frame-radio",value:n,onChange:o,optionList:a})]})})),Fs=or.b.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    &:focus-visible {
        outline: 2px solid var(--focus);
    }
    .pendulum-frame-info-block {
        border-radius: 0 var(--br-lg) var(--br-lg) 0;
        line-height: 2; // Alignment
        background-color: var(--main-level-4);
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
`,Ts=or.b.div`
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
        display: flex;
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
`,Ns=Object(r.forwardRef)(((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:o,onTakePicker:l}=e;const i=vr(),{isPendulum:s,pendulumFrame:c,pendulumScaleBlue:d,pendulumScaleRed:u,pendulumSize:m,setCard:p,getUpdater:f}=Gr(Object(ao.useShallow)((e=>{let{card:{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:n,pendulumSize:o},setCard:l,getUpdater:i}=e;return{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:n,pendulumSize:o,setCard:l,getUpdater:i}}))),{mirrorPendulumScale:h,updateSetting:g}=Xr(Object(ao.useShallow)((e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}}))),v=Object(r.useRef)(null),y=Object(r.useRef)(null),x=Object(r.useRef)(null),[j,O]=Object(r.useState)(!1),w=Object(r.useRef)("auto"===c?"spell":c),S=Object(r.useMemo)((()=>f("pendulumScaleRed")),[f]),k=Object(r.useMemo)((()=>f("pendulumScaleBlue")),[f]),C=Object(r.useMemo)((()=>f("pendulumSize")),[f]),F=Object(r.useMemo)((()=>f("pendulumEffect",void 0,"debounce")),[f]),T=Object(r.useMemo)((()=>{return e=i,Object.values(N).map((t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[i]),L=Object(r.useMemo)((()=>pi().filter((e=>o||"normal"===e.edition))),[o]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=x.current)||void 0===t||t.setValue(a))}})));const R=he[c];return Object(b.jsxs)(Ts,{className:"pendulum-input",children:[Object(b.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(b.jsx)("div",{className:"pendulum-checkbox",children:Object(b.jsx)(No.a,{onChange:e=>p((t=>({...t,isPendulum:e.target.checked}))),checked:s,children:i["input.pendulum.label"]})}),n&&Object(b.jsx)(So.a,{visible:j,onVisibleChange:O,trigger:["hover","click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Cs,{ref:y,frameList:L,pendulumFrame:c,onCancel:()=>{var e;O(!1),null===(e=v.current)||void 0===e||e.focus()},onChange:e=>{const t=`${e}`;"auto"!==t&&(w.current=t),p((e=>({...e,pendulumFrame:t})))}})}),children:Object(b.jsxs)(Fs,{ref:v,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return O(!0),setTimeout((()=>{var e;null===(e=y.current)||void 0===e||e.focus()}),200),!1},children:[Object(b.jsxs)("span",{className:"pendulum-frame-label",children:[i["input.bottom-frame.label"]," ",Object(b.jsx)(xi.a,{})]}),R?Object(b.jsx)(hl,{className:"pendulum-frame-info-block",...R}):Object(b.jsx)(hl,{className:"pendulum-frame-info-block",nameKey:"input.frame.auto"})]})}),s&&n&&Object(b.jsx)("div",{className:"pendulum-size",children:Object(b.jsx)(So.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Xl.Container,{children:T.map((e=>{let{value:t,label:a}=e;return Object(b.jsx)(Xl.Option,{className:m===t?"menu-active":"",onClick:()=>{C(t)},children:a},t)}))})}),placement:"bottomLeft",children:Object(b.jsx)(Yo,{$softMode:a,$active:m!==z,children:i[N[m].labelKey]})},"color-picker")}),s&&n&&Object(b.jsx)(No.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;g({mirrorPendulumScale:t}),t&&S(d)},checked:h,children:i["input.mirror-scale.label"]})]}),s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(Rl.a,{addonBefore:Object(b.jsx)("span",{children:i["input.scale.label"](Object(b.jsx)("span",{className:"blue-scale",children:i["input.scale.blue.label"]},"blue-scale"))}),value:d,allowClear:!0,onChange:e=>{k(e),h&&S(e)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(Rl.a,{addonBefore:Object(b.jsx)("span",{children:i["input.scale.label"](Object(b.jsx)("span",{className:"red-scale",children:i["input.scale.red.label"]},"red-scale"))}),value:u,allowClear:!0,onChange:e=>{h&&k(e),S(e)}})}),Object(b.jsx)("div",{className:"joined-row",children:Object(b.jsx)(cs,{ref:x,id:"pendulum-effect",allowHotkey:!0,defaultValue:Gr.getState().card.pendulumEffect,onChange:F,onTakePicker:l,autoSize:{minRows:5}})})]})]})})),Ls=or.b.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-areas:
        "type-input input-helper"
        "condense-input help-button";
    gap: var(--spacing-sm);
    align-items: center;
    .formatting-help-button {
        grid-area: help-button;
        &:focus {
            box-shadow: 0 0 0 2px var(--focus);
        }
    }
    .input-kanji-helper {
        grid-area: input-helper;
    }
    .type-ability-input {
        grid-area: type-input;
    }
    .condense-input {
        grid-area: condense-input;
		.standalone-addon.ant-input-group-addon {
			width: unset;
		}
		.ant-radio-button-wrapper {
			flex: 1 1 90px;
		}
	}
    &.variant-tcg {
        .type-ability-input {
            grid-column: span 2;
        }
    }
`,Rs=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=vr(),{frame:o,cardIcon:l,format:i,furiganaHelper:s,condenseTolerant:c,setCard:d,getUpdater:u}=Gr(Object(ao.useShallow)((e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:o},setCard:l,getUpdater:i}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===o||void 0===o?void 0:o.condenseTolerant,setCard:l,getUpdater:i}}))),m="ocg"===i?"\uff0f":"/",p=Object(r.useRef)(null),f=Object(r.useMemo)((()=>u("typeAbility",(e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map((e=>`${e}`.trim())).filter((e=>"string"===typeof e&&e.length>0))),"debounce")),[u]),h=Object(r.useCallback)((e=>d((t=>({...t,furiganaHelper:e.target.checked})))),[d]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{typeAbility:a}=e;a&&(null===(t=p.current)||void 0===t||t.setValue(a.join(m)))}})));const g="auto"===l?Zt({frame:o})?"input.type.monster.label":"input.type.st.label":"st"===j[l].value?"input.type.st.label":"input.type.monster.label",v="ocg"===i;return Object(b.jsxs)(Ls,{className:`post-pendulum-input variant-${i}`,children:[Object(b.jsx)(ds,{ref:p,addonBefore:n[g],id:"type-ability",defaultValue:Gr.getState().card.typeAbility.join(m),onChange:f,onTakePicker:a}),v&&Object(b.jsx)(nr.a,{overlay:n["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(b.jsx)(No.a,{className:"input-kanji-helper",onChange:h,checked:s,children:n["input.furigana-helper.label"]})}),Object(b.jsx)(Do,{className:"condense-input",value:`${c}`,onChange:e=>(e=>{d((t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}})))})(e),optionList:hi,children:Object(b.jsxs)("span",{children:[n["input.condense.label"]," ",Object(b.jsx)(Fo,{content:Object(b.jsx)(Ao,{children:n["input.condense.tooltip"]})})]})}),Object(b.jsx)(pl,{})]})})),zs=or.b.div`
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
    .color-block {
        height: 17px;
        width: 17px;
        cursor: pointer;
        position: relative;
        outline: none;
        border: var(--bw) solid var(--sub-level-4);
        &.static-block {
            cursor: default;
            height: 9px;
            width: 9px;
            margin: 4px 0;
            border: none;
        }
    }
    .active-dot {
        position: absolute;
        inset: var(--spacing-xs);
        background: rgb(0, 0, 0);
        border-radius: 50%;
        opacity: 1;
    }
    .color-input {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 3px;
        border-left: var(--bw-lg) solid var(--sub-level-4);
        padding-left: 3px;
        input {
            width: 58px;
            font-size: var(--fs-sm);
            line-height: 1;
            border: none;
            padding: 0 5px;
        }
    }
`,Ws=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Es=e=>{let{value:t="",onChange:a}=e;const[n,o]=Object(r.useState)(t),[l,i]=Object(r.useState)((()=>({hex:Za.test(t)?t:"#000000",rgb:Qa(t,!1)})));return Object(r.useEffect)((()=>{const e=n.startsWith("#")?n:`#${n}`;Za.test(e)&&(o(e),i({hex:e,rgb:Qa(e,!1)}),null===a||void 0===a||a(e))}),[n]),Object(r.useEffect)((()=>{o(t),i({hex:Za.test(t)?t:"#000000",rgb:Qa(t,!1)})}),[t]),Object(b.jsxs)(zs,{children:[Object(b.jsx)("div",{className:"color-list",children:Ws.map((e=>{let{hex:t,rgb:r}=e;const n=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?"#000000":"#FFFFFF";return Object(b.jsx)("div",{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:l.hex.toUpperCase()===t&&Object(b.jsx)("div",{className:"active-dot",style:{backgroundColor:n}})},t)}))}),Object(b.jsxs)("div",{className:"color-input",children:[Object(b.jsx)("div",{className:"color-block static-block",style:{backgroundColor:l.hex}}),Object(b.jsx)(Rl.a,{size:"small",value:n,onChange:e=>{o(e.target.value)}})]})]})},Bs=or.b.div`
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
`,Ds=or.b.div`
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
`,Hs={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},Is=()=>{const e=vr(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:l,setCard:i,statTextStyle:s,typeTextStyle:c}=Gr(Object(ao.useShallow)((e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:l,statTextStyle:i,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:l,setCard:c,statTextStyle:i,typeTextStyle:s}}))),d=[{info:Hs.effectTextStyle,value:r,extraValue:a},{info:Hs.pendulumTextStyle,value:l,extraValue:o},{info:Hs.statTextStyle,value:s},{info:Hs.typeTextStyle,value:c},{info:Hs.otherTextStyle,value:n}];return Object(b.jsx)(So.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Ds,{className:"custom-style-picker",children:d.map((a=>{let{info:r,value:n,extraValue:o}=a;const{keyName:l,labelKey:s,extraKeyname:c}=r,[d,u,m,f]=n,{upSize:h,fontStyle:g}=null!==o&&void 0!==o?o:{};return Object(b.jsxs)("div",{className:"style-section",children:[Object(b.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(b.jsx)("span",{children:e[s]}),Object(b.jsx)(No.a,{checked:d,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[l]:[a,...n.slice(1)]}}))},children:e["input.text-style.custom.label"]})]}),d&&Object(b.jsxs)("div",{className:"style-picker-section",children:["string"===typeof g&&"tcg"===t&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h2",{className:"font-style-picker",children:[Object(b.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(b.jsx)(Do,{className:"inline-radio-train",value:g,optionList:[{label:Object(b.jsx)(p.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{i((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t}))}})]})}),"number"===typeof h&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h2",{className:"size-picker",children:[Object(b.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(b.jsx)(Do,{className:"inline-radio-train",value:h,optionList:[{label:Object(b.jsx)(p.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{i((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t}))}})]})}),Object(b.jsx)("h2",{children:Object(b.jsx)(No.a,{className:"shadow-checkbox",checked:m,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[l]:[...n.slice(0,2),a,n[3]]}}))},children:Object(b.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(b.jsx)(Es,{value:f,onChange:e=>i((t=>({...t,[l]:[...n.slice(0,3),e]})))}),Object(b.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(b.jsx)(yi.b,{colors:yt,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{i((t=>({...t,[l]:[n[0],e.hex,...n.slice(2,4)]})))}})]})]},l)}))})}),children:Object(b.jsxs)(Bs,{className:"text-style-preview",children:[Object(b.jsx)("div",{className:"text-style-grid",children:d.map((e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[o,l,i,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(b.jsx)("div",{className:"text-style-preview-section",style:{background:o?"#eaeaea":"var(--sub-level-4)",color:0!==(null!==l&&void 0!==l?l:"").length&&o?l:"#000000",textShadow:o&&i?`0 0 2px ${s}`:"none",fontStyle:o&&"italic"===d?"italic":"normal"},children:c&&o?Object(b.jsxs)("div",{children:["+",c]}):"Auto"},n)}))}),Object(b.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(534);const As=Object(r.forwardRef)(((e,t)=>{let{artworkCanvas:a,backgroundCanvas:n,onCropChange:o,onTainted:l,onSourceLoaded:i}=e;const s=vr(),{format:c,frame:d,foil:u,finish:m,opacity:g,nameStyleType:v,nameStyle:y,isPendulum:x,attribute:j,getUpdater:O,setCard:w}=Gr(Object(ao.useShallow)((e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:o,nameStyleType:l,nameStyle:i,isPendulum:s,isLink:c,attribute:d},getUpdater:u,setCard:m}=e;return{format:t,frame:a,foil:r,finish:n,opacity:o,nameStyleType:l,nameStyle:i,isPendulum:s,isLink:c,attribute:d,getUpdater:u,setCard:m}}))),{setting:S}=Xr(),{showCreativeOption:k,showExtraDecorativeOption:C,reduceMotionColor:F}=S,T=Object(r.useRef)(null),N=Zt({frame:d}),[L,R]=Object(r.useState)(0),z=Object(r.useMemo)((()=>{return e={normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]},X(e).map((e=>{let{color:t,name:a,label:r}=e;return{label:"normal"===a?Object(b.jsx)(p.a,{}):r,value:a,props:{style:{color:t,fontWeight:"bold"}}}}));var e}),[s]),W=Object(r.useRef)(null),E=Object(r.useRef)(null),B=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),I=Object(r.useRef)(null),A=Object(r.useRef)(null),[M,P]=Object(r.useState)({id:"",setValue:()=>{}}),$=Object(r.useMemo)((()=>O("foil")),[O]),Y=Object(r.useMemo)((()=>O("finish")),[O]),U=Object(r.useCallback)((e=>w((t=>({...t,opacity:e})))),[w]),K=Object(r.useMemo)((()=>O("attribute")),[O]),G=Object(r.useCallback)(((e,t)=>{w((a=>({...a,nameStyleType:e,nameStyle:t})))}),[w]),V=Object(r.useMemo)((()=>((e,t,a)=>h.map((a=>{let{name:r,nameKey:n,isCreative:o,supportFormat:l}=a;return{label:r===f?Object(b.jsx)(p.a,{}):Object(b.jsx)(nr.a,{overlay:t[n],children:Object(b.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:o,supportFormat:l}})).filter((t=>{let{isCreative:r,supportFormat:n}=t;return(!1===r||r===a)&&n.includes(e)})))(c,s,k)),[c,s,k]);return Object(r.useEffect)((()=>{var e;null===(e=T.current)||void 0===e||e.setValue({font:y.font})}),[y]),Object(r.useEffect)((()=>{var e;null===(e=E.current)||void 0===e||e.setValue(g)}),[g]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=W.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=E.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,n,o,l,i;R((e=>e+1));const{name:s,art:c,artCrop:d,artData:u,artSource:m,background:p,backgroundCrop:b,backgroundData:f,backgroundSource:h,opacity:g,setId:v,pendulumEffect:y,typeAbility:x,effect:j,atk:O,def:w,creator:S,password:k}=e;null===(t=W.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:m}),null===(a=E.current)||void 0===a||a.setValue({...g,background:p,backgroundCrop:b,backgroundData:f,backgroundSource:h}),null===(r=B.current)||void 0===r||r.setValue({name:s,setId:v}),null===(n=D.current)||void 0===n||n.setValue({pendulumEffect:y}),null===(o=H.current)||void 0===o||o.setValue(j),null===(l=I.current)||void 0===l||l.setValue({typeAbility:x}),null===(i=A.current)||void 0===i||i.setValue({atk:O,def:w,creator:S,password:k})}}))),Object(b.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(b.jsx)(nl,{}),Object(b.jsx)("br",{}),Object(b.jsx)(al,{}),Object(b.jsxs)("div",{className:"card-overlay-input",children:[Object(b.jsx)(vs,{className:"format-radio",value:c,onChange:e=>{w((t=>{var a,r,n,o,l;const i=dr(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:p,pendulumEffect:b}=i;return null===(a=B.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=H.current)||void 0===r||r.setValue(d),null===(n=D.current)||void 0===n||n.setValue({pendulumEffect:b}),null===(o=I.current)||void 0===o||o.setValue({typeAbility:u}),null===(l=A.current)||void 0===l||l.setValue({creator:p,password:m}),i}))},optionList:di,children:Object(b.jsx)("span",{children:s["input.format.label"]})}),Object(b.jsx)(Do,{className:"foil-radio",value:u,onChange:$,optionList:z,children:Object(b.jsx)("span",{children:s["input.foil.label"]})}),C&&Object(b.jsx)(Ki,{className:"finish-checkbox",value:m,onChange:Y,optionList:ui,children:Object(b.jsx)("span",{children:s["input.finish.label"]})})]}),k&&Object(b.jsxs)("div",{className:"card-layout-input",children:[Object(b.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(b.jsx)(Fo,{content:Object(b.jsx)(Ao,{children:s["input.layout.tooltip"]})})]}),Object(b.jsx)(Zi,{ref:E,defaultValue:g,receivingCanvas:n,onChange:U,onTainted:l,onCropChange:o,onSourceLoaded:i})]}),Object(b.jsx)(Yi,{onSTFrameChange:e=>{var t;return null===(t=I.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=A.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t)=>{var a;return null===(a=A.current)||void 0===a?void 0:a.setValue({atk:e,def:t})}}),Object(b.jsxs)(gs,{className:"name-style-id-input",children:[Object(b.jsx)(ks,{ref:B,onTakePicker:P}),Object(b.jsx)(Mi,{ref:T,frameInfo:he[d],defaultType:v,defaultValue:y,showExtraDecorativeOption:C,onChange:G},L),Object(b.jsx)(ns,{showCreativeOption:k})]}),Object(b.jsxs)("div",{className:"main-info",children:[Object(b.jsxs)("div",{className:"main-info-first",children:[Object(b.jsx)(Do,{className:"fill-input-train attribute-input",value:j,onChange:K,optionList:V,children:Object(b.jsx)("span",{children:s["input.attribute.label"]})}),(x||k)&&Object(b.jsx)(Ns,{ref:D,showCreativeOption:k,showExtraDecorativeOption:C,softMode:F,onTakePicker:P}),Object(b.jsx)(Rs,{ref:I,onTakePicker:P}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(b.jsx)(Kl,{className:"standalone-label",children:s["input.effect.label"]}),k?Object(b.jsx)(Is,{}):Object(b.jsx)("div",{}),Object(b.jsx)(vi,{targetId:M.id,onPick:M.setValue})]}),Object(b.jsx)(us,{ref:H,onTakePicker:P})]}),Object(b.jsx)(xs,{ref:A,isMonster:N,showCreativeOption:k,onTakePicker:P})]}),Object(b.jsx)("div",{className:"main-info-second",children:Object(b.jsx)(Os,{ref:W,receivingCanvas:a,showExtraDecorativeOption:C,onSourceLoaded:i,onTainted:l,onCropChange:o})})]})]})}));var Ms=a(542);const{height:Ps,width:$s,cardBorder:Ys}=s,Us=68/$s,Ks=or.b.div`
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
            width: 100%;
            height: 50%;
            position: absolute;
            left: 0;
            &.top-frame {
                top: 0;
            }
            &.bottom-frame {
                top: 50%;
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
        box-shadow: 0 0 3px 0 #222222;
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
`,Gs=e=>{var t,a,n,o;let{index:l,card:i,active:s,language:d,onDuplicate:u,onSelect:p,onDelete:f,style:h}=e;const[v,y]=Object(r.useState)(!1),{art:x,artCrop:j,artData:O,artFit:w,artSource:S,atk:k,attribute:C,background:F,backgroundCrop:T,backgroundData:N,backgroundFit:L,backgroundSource:R,backgroundType:z,cardIcon:W,def:E,format:B,frame:D,hasBackground:H,isLink:I,isPendulum:A,linkMap:M,name:P,opacity:$,pendulumFrame:Y,pendulumScaleBlue:U,pendulumScaleRed:K,setId:G,star:X,subFamily:V,typeAbility:_}=i,q=ha(P),J="auto"===Y?A?"spell":D:Y,Z="offline"===S?x?O:"https://i.imgur.com/jjtCuG5.png":x,Q="offline"===R?F?N:"https://imgur.com/pdSVzUZ.png":F,ee="auto"===W?Qt(D):W,te="st"===ee?V:ee,ae=Jt(i),re=!!(k||E||I&&M.length),ne=_.join(" / "),oe=m(A,$),{artFrameHeight:le,artFrameWidth:ie}=oe;return Object(b.jsxs)(Ks,{className:tr("truncate",s?"active":"",l%2===0?"alternative-color":""),onClick:()=>p(i),style:h,children:[Object(b.jsxs)("div",{className:"left-slot",children:[Object(b.jsx)("div",{className:"card-frame top-frame",style:{backgroundColor:null===(t=he[D])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=he[D])||void 0===a?void 0:a.labelBackgroundImage}}),Object(b.jsx)("div",{className:"card-frame bottom-frame",style:{backgroundColor:null===(n=he[J])||void 0===n?void 0:n.labelBackgroundColor,backgroundImage:null===(o=he[J])||void 0===o?void 0:o.labelBackgroundImage}}),Object(b.jsxs)("a",{className:"card-art-container",href:Z,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:ie*Us,height:le*Us,top:(Ps-$s)/2/2*Us,left:($s-ie)/2*Us,backgroundColor:c},children:[H&&Object(b.jsx)(Vs,{className:"background-art",artLink:Q,name:q+" - background",fit:L,crop:T,canvasCoordinate:m(A,{...$,boundless:"fit"!==z})}),Object(b.jsx)(Vs,{className:"foreground-art",artLink:Z,name:q,fit:w,crop:j,canvasCoordinate:oe})]}),I&&[...Array(9)].map(((e,t)=>{if(4===t)return null;const a=A?je:xe,r=A?we:Oe;return Object(b.jsx)("div",{className:tr(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,M.includes(`${t+1}`)?"marker-checked":""),style:{top:A?16:19,transform:`rotate(${ye[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)})),A&&U&&Object(b.jsx)("div",{className:"pendulum-scale blue-scale",children:U}),A&&K&&Object(b.jsx)("div",{className:"pendulum-scale red-scale",children:K})]}),Object(b.jsxs)("div",{className:"right-slot truncate",children:[Object(b.jsx)("div",{className:"first-row truncate",children:q}),Object(b.jsxs)("div",{className:"second-row truncate",children:[ae||"NONE"===C?null:Object(b.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${B}-${C.toLowerCase()}.png`,alt:"Icon"}),_.length>0&&Object(b.jsx)("div",{className:"truncate",children:ne}),"st"!==ee&&Object(b.jsx)("div",{className:"padding"}),!I&&te!==g&&"none"!==ee&&Object(b.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${te.toLowerCase()}.png`,alt:"Icon"}),!I&&!ae&&"st"!==ee&&Object(b.jsx)("span",{className:tr("star-content truncate",ne.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof X?X:""!==X?`"${X}"`:""})]}),Object(b.jsxs)("div",{className:"third-row truncate",children:[re&&Object(b.jsx)("div",{children:k}),re?Object(b.jsx)("div",{children:"\xa0/\xa0"}):Object(b.jsx)("div",{children:"\xa0"}),re&&Object(b.jsx)("div",{children:I?`Link ${M.length}`:E}),G&&Object(b.jsx)("div",{className:"set-id",children:G})]})]}),Object(b.jsx)("div",{className:tr("action-slot",v?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(b.jsxs)("div",{className:"action-container",children:[Object(b.jsx)(nr.a,{placement:"left",title:d["manager.button.duplicate.tooltip"],children:Object(b.jsx)(Ql.a,{className:"action-button action-duplicate",onClick:()=>u(i)})}),Object(b.jsx)(Ms.a,{placement:"left",title:d["manager.button.delete.label"],onVisibleChange:e=>y(e),onConfirm:()=>f(i.id),okText:d["manager.button.delete.confirm.label"],cancelText:d["manager.button.delete.cancel.label"],children:Object(b.jsx)(nr.a,{placement:"left",title:d["manager.button.delete.tooltip"],children:Object(b.jsx)(sr.a,{className:"action-button action-delete"})})})]})})]})},Xs=(e,t,a,r,n)=>{var o;const{artWidth:l,artY:i,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:p,y:b}=null!==(o=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==o?o:{},f=e*((null!==u&&void 0!==u?u:0)/100),h=t*((null!==m&&void 0!==m?m:0)/100),g=l*Us/(f<=0?1:f);return{top:(null!==b&&void 0!==b?b:0)/100*-t*g,left:(null!==p&&void 0!==p?p:0)/100*-e*g,width:e*g,height:n?t*(l/s*Us/(h<=0?1:h)):void 0,transform:`translateX(${-(l===c?0:($s-c)/2-Ys)*Us}px) translateY(${-(d-i)*Us}px)`}},Vs=e=>{let{artLink:t,name:a,crop:n,className:o,fit:l,canvasCoordinate:i,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,p]=Object(r.useState)((()=>{var e,t,a,r;return Xs(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,i,n,l)}));return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&d(t)}),500),()=>{e=!1}}),[t]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{var t,a,r,o;e&&p(Xs(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(o=u.current)||void 0===o?void 0:o.naturalHeight)&&void 0!==r?r:1,i,n,l))}),500),()=>{e=!1}}),[n,i,l]),Object(b.jsx)("img",{ref:u,className:tr("card-art",o),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;p(Xs(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,i,n,l))}})};var _s=a(293),qs=a(306);const Js=or.b.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .list-container {
        flex: 1;
        overflow: auto;
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
`,Zs=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,language:o,list:l,onDelete:i,onDownload:s,onDuplicate:c,onSelect:d}=t;return Object(b.jsx)(Gs,{index:a,card:l[a],active:l[a].id===n,language:o,onDuplicate:c,onSelect:d,onDownload:s,onDelete:i,style:r})},Qs=e=>{let{language:t,onSelect:a,onDownload:n,onRequestImport:o}=e;const{activeId:l,cardDisplayList:i,deleteCard:s,duplicateCard:c,resetFilter:d}=Yr(Object(ao.useShallow)((e=>{let{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:n,resetFilter:o}=e;return{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:n,resetFilter:o}}))),[u,m]=Object(r.useState)(0),p=e=>{s(e),m((e=>e+1))};return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{if(e&&u>0){const{activeId:e,cardList:t,setCardList:r}=Yr.getState(),n=t.find((t=>t.id===e));if(n)a(n);else{const e={id:Object(T.a)(),...gt()};r([e],e.name)}}}),500),()=>{e=!1}}),[a,u]),Object(b.jsxs)(Js,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Object(b.jsx)("div",{className:"list-container",children:Object(b.jsx)(_s.a,{children:e=>{let{height:r,width:o}=e;return Object(b.jsx)(qs.a,{className:"List",height:r,itemCount:i.length,itemSize:68,itemData:{list:i,language:t,activeId:l,onDuplicate:c,onSelect:a,onDownload:n,onDelete:p},overscanCount:5,width:o,children:Zs})}})}),0===i.length&&Object(b.jsxs)("div",{className:"no-card",children:[Object(b.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(b.jsx)("div",{className:"reset-filter",onClick:d,children:t["manager.button.search.button.reset.label"]})]}),Object(b.jsx)(mo.a,{className:"add-card",onClick:o,children:t["manager.button.add.label"]})]})};var ec=a(596),tc=a(557),ac=a(595);const{Panel:rc}=tc.a,nc=or.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,oc=Object(or.b)(Ho)`
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
`,lc=Object(or.b)(ar.a)`
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
                ${oc} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,ic=e=>{let{data:t,children:a}=e;const[n,o]=Object(r.useState)(!1);return Object(b.jsxs)(oc,{onClick:e=>{var a;e.stopPropagation(),a=t,Jl()(a),o(!0),setTimeout((()=>{o(!1)}),1e3)},children:[n?Object(b.jsx)("div",{className:"copiable-overlay",children:Object(b.jsx)(Zl.a,{})}):null,a]})},sc=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(nc,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(b.jsx)(ac.a,{})]}),Object(b.jsx)(lc,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(b.jsxs)("div",{className:"sample-modal-container",children:[Object(b.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(b.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(b.jsx)("div",{className:"download-button",children:Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(b.jsx)(mo.a,{children:t["manager.template.download.label"]})})}),Object(b.jsx)(tc.a,{ghost:!0,children:Object(b.jsx)(rc,{header:Object(b.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(b.jsxs)("table",{className:"option-container",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(b.jsx)("th",{children:Object(b.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(b.jsx)("div",{children:["tcg","ocg"].map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Frame",altField:"Bottom Frame",value:Object(b.jsx)("div",{children:ge.map((e=>{let{name:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Attribute",value:Object(b.jsx)("div",{children:h.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Spell/Trap Icon",value:Object(b.jsx)("div",{children:v.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Sticker",value:Object(b.jsx)("div",{children:x.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Foil",value:Object(b.jsx)("div",{children:X().filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Card Finish",value:Object(b.jsxs)("div",{children:[Object.values(U).map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)})),Object(b.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(b.jsx)("div",{children:Object.values(K).map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Star Type",value:Object(b.jsx)("div",{children:["number","text"].map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Star Alignment",value:Object(b.jsx)("div",{children:["left","center","right"].map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Card Icon Type",value:Object(b.jsx)("div",{children:O.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Background Type",value:Object(b.jsx)("div",{children:i().map((e=>{let{value:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Condense Rate",value:Object(b.jsx)("div",{children:Object.keys(W).map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Name Style Type",value:Object(b.jsx)("div",{children:["predefined","custom"].map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Name Style - Font",value:Object(b.jsx)("div",{children:Object(b.jsx)(ic,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(b.jsx)("div",{children:Object.keys(S).map((e=>Object(b.jsx)(ic,{data:e,children:e},e)))})},{field:"Name Style - Pattern",value:Object(b.jsx)("div",{children:F.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{key:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})},{field:"Pendulum Size",value:Object(b.jsx)("div",{children:L.map((e=>{let{key:t}=e;return Object(b.jsx)(ic,{data:t,children:t},t)}))})}].map((e=>{let{field:t,altField:a,value:r}=e;return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)(oc,{children:t}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)(oc,{children:a})]})]}),Object(b.jsx)("td",{children:r})]},t)}))]})},"sample-option")})]})})]})};var cc=a(161);const dc=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),uc=or.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,mc=Object(or.b)(il.a)`
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
`,pc=Object(r.forwardRef)(((e,t)=>{let{language:a,onVisibleChange:n,onSelect:o,onDownload:l,onRequestImport:i}=e;const s="list-upload-id",c=Object(r.useRef)(null),{cardList:d,changeEditStatus:u,pendingActiveCard:m,setActiveId:p,setCardList:f,setFilterFunction:h,setListName:g,setPendingActiveCard:v,sortList:y,toggleVisible:x,visible:j}=Yr(Object(ao.useShallow)((e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:o,setFilterFunction:l,setListName:i,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:o,setFilterFunction:l,setListName:i,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}}))),O=Xr((e=>e.setting.exportFormat)),[w,S]=Object(r.useState)(0),[k,C]=Object(r.useState)(!1),[F,T]=Object(r.useState)(!1),N=pr()((e=>{h({type:"text",value:e.target.value})}),250),L=Object(r.useCallback)((e=>{o(e),p(e.id)}),[o,p]);return Object(r.useEffect)((()=>{m&&(o(m),p(m.id),v())}),[o,m,p,v]),Object(r.useEffect)((()=>{localStorage.setItem("manager-panel-visible",j.toString()),n(j)}),[n,j]),Object(r.useEffect)((()=>{const e=Yr.subscribe((e=>e.filterResetSignal),(e=>{e&&S((e=>e+1))}));return()=>{e()}}),[]),Object(r.useImperativeHandle)(t,(()=>({})),[]),Object(b.jsx)(uc,{children:Object(b.jsx)(mc,{title:Object(b.jsxs)("div",{className:"card-manager-header truncate",children:[Object(b.jsx)(fc,{className:"manager-label-container truncate",language:a,children:d.length}),Object(b.jsxs)("div",{className:"manager-button-container",children:[Object(b.jsx)("div",{className:"manager-button",children:Object(b.jsx)(sc,{language:a})}),Object(b.jsx)(po.a,{overlay:Object(b.jsx)(Fl.a,{children:[{value:Pr.level.key,label:a["manager.button.sort.level.label"]},{value:Pr.name.key,label:a["manager.button.sort.name.label"]},{value:Pr.atk.key,label:a["manager.button.sort.atk.label"]},{value:Pr.def.key,label:a["manager.button.sort.def.label"]},{value:Pr.set.key,label:a["manager.button.sort.set-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(b.jsx)(Fl.a.Item,{onClick:()=>y(t),children:a},t)}))}),children:Object(b.jsx)("div",{className:"manager-button",children:Object(b.jsx)(bs.a,{})})}),Object(b.jsx)(nr.a,{title:a["manager.header.button.download.tooltip"],children:Object(b.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(T(!0),dc.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=jr.length;let r="";for(let n=0;n<e.length;n++){const o=(e,t)=>{const a=kr[e];"number"===typeof a&&("string"===typeof t&&(l[a]=t),"number"===typeof t&&(l[a]=`${t}`),"boolean"===typeof t&&(l[a]=`${t}`),null==t&&(l[a]=""))},l=Array(a).map((()=>"")),{art:i,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:m,attribute:p,background:b,backgroundCrop:f,backgroundFit:h,backgroundSource:g,backgroundType:v,cardIcon:y,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:S,externalInfo:k,finish:C,foil:F,format:T,frame:N,furiganaHelper:L,hasBackground:R,isDuelTerminalCard:z,isFirstEdition:W,isLegacyCard:E,isLimitedEdition:B,isLink:D,isPendulum:H,isSpeedCard:I,linkMap:A,name:M,nameStyle:P,nameStyleType:$,opacity:Y,otherTextStyle:U,password:K,pendulumEffect:G,pendulumFrame:X,pendulumScaleBlue:V,pendulumScaleRed:_,pendulumStyle:q,pendulumSize:J,pendulumTextStyle:Z,setId:Q,star:ee,starAlignment:te,statTextStyle:ae,sticker:re,subFamily:ne,typeAbility:oe,typeTextStyle:le}=e[n],ie=JSON.stringify(k);o("Format",T),o("Frame",N),o("Name",M),o("Attribute",p),o("Star",`${ee}`),o("Spell/Trap Icon",ne),o("Art Link",i),o("Type Ability",oe.join("/")),o("Effect",O),o("Set Id",Q),o("ATK",m),o("DEF",j),o("Password",K),o("Sticker",re),o("Copyright",x),o("Is Pendulum",H),o("Pendulum Effect",G),o("Pendulum Scale Red",_),o("Pendulum Scale Blue",V),o("Is Link",null!==D&&void 0!==D?D:void 0),o("Link - Top Left Arrow",A.includes("1")),o("Link - Top Arrow",A.includes("2")),o("Link - Top Right Arrow",A.includes("3")),o("Link - Left Arrow",A.includes("4")),o("Link - Right Arrow",A.includes("6")),o("Link - Bottom Left Arrow",A.includes("7")),o("Link - Bottom Arrow",A.includes("8")),o("Link - Bottom Right Arrow",A.includes("9")),o("Is First Edition",W),o("Is Speed Card",I),o("Is Limited Edition",B),o("Is Duel Terminal Card",z),o("Is Legacy Card",E),o("Foil",F),o("Art Finish",c),o("Card Finish",C.join(",")),o("Art Crop - X (%)",s.x),o("Art Crop - Y (%)",s.y),o("Art Crop - Width (%)",s.width),o("Art Crop - Height (%)",s.height),o("Is Using Full Art",d),o("Star Type","number"===typeof ee&&ee>=0&&ee<=13?"number":"text"),o("Star Alignment",te),o("Card Icon Type",y),o("Opacity - Body",Y.body),o("Opacity - Pendulum",Y.pendulum),o("Opacity - Text",Y.text),o("Opacity - Name",Y.name),o("Opacity - Base Fill",Y.baseFill),o("Opacity - Art Border",Y.artBorder),o("Opacity - Name Border",Y.nameBorder),o("Opacity - Boundless",Y.boundless),o("Has Background",R),o("Background Link",b),o("Is Using Full Background",h),o("Background Type",v),o("Background Crop - X (%)",f.x),o("Background Crop - Y (%)",f.y),o("Background Crop - Width (%)",f.width),o("Background Crop - Height (%)",f.height),o("Bottom Frame",X),o("Condense Rate",w.condenseTolerant),o("Use Furigana Helper",L),o("Name Style Type",$),o("Name Style - Font",P.font),o("Name Style - Fill Style",P.fillStyle),o("Name Style - Headtext Fill Style",P.headTextFillStyle),o("Name Style - Shadow Color",P.shadowColor),o("Name Style - Shadow Offset Y",P.shadowOffsetY),o("Name Style - Shadow Offset X",P.shadowOffsetX),o("Name Style - Shadow Blur",P.shadowBlur),o("Name Style - Has Shadow",P.hasShadow),o("Name Style - Line Color",P.lineColor),o("Name Style - Line Width",P.lineWidth),o("Name Style - Line Offset Y",P.lineOffsetY),o("Name Style - Line Offset X",P.lineOffsetX),o("Name Style - Has Outline",P.hasOutline),o("Name Style - Gradient Angle",P.gradientAngle),o("Name Style - Gradient Color",P.gradientColor),o("Name Style - Has Gradient",P.hasGradient),o("Name Style - Emboss Pitch",P.embossPitch),o("Name Style - Emboss Yaw",P.embossYaw),o("Name Style - Emboss Thickness",P.embossThickness),o("Name Style - Has Emboss",P.hasEmboss),o("Name Style - Preset",P.preset),o("Name Style - Pattern",P.pattern),o("Stat Style - Is Custom",ae[0]),o("Stat Style - Fill Color",ae[1]),o("Stat Style - Has Shadow",ae[2]),o("Stat Style - Shadow Color",ae[3]),o("Type Style - Is Custom",le[0]),o("Type Style - Fill Color",le[1]),o("Type Style - Has Shadow",le[2]),o("Type Style - Shadow Color",le[3]),o("Effect Style - Is Custom",S[0]),o("Effect Style - Fill Color",S[1]),o("Effect Style - Has Shadow",S[2]),o("Effect Style - Shadow Color",S[3]),o("Effect Style - Upsize",w.upSize),o("Effect Style - Font Style",w.fontStyle),o("Pendulum Size",J),o("Pendulum Effect Style - Is Custom",Z[0]),o("Pendulum Effect Style - Fill Color",Z[1]),o("Pendulum Effect Style - Has Shadow",Z[2]),o("Pendulum Effect Style - Shadow Color",Z[3]),o("Pendulum Effect Style - Upsize",q.upSize),o("Pendulum Effect Style - Font Style",q.fontStyle),o("Other Style - Is Custom",U[0]),o("Other Style - Fill Color",U[1]),o("Other Style - Has Shadow",U[2]),o("Other Style - Shadow Color",U[3]),o("External Info (JSON)","{}"===ie?"":ie),("offline"===u||R&&"offline"===g)&&(r="offline-data"),t.push(l.map(Cr).join(","))}return{value:[jr.join(","),t.join("\n")].join("\n"),error:r}})(Yr.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&rr.a.error({message:t,description:r})}switch(O){case"xlsx":{const e=cc.a.read(t,{type:"string"});cc.a.writeFile(e,`${Yr.getState().listName}.xlsx`);break}default:va(Yr.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}u("download")}catch(t){}T(!1)},children:F?Object(b.jsx)(ec.a,{}):Object(b.jsx)(Bl.a,{})})}),Object(b.jsx)(nr.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(b.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(s);e&&!k&&e.click()},children:[Object(b.jsx)("input",{ref:c,type:"file",id:s,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=c.current)||void 0===t?void 0:t.files,{isListDirty:n}=Yr.getState(),l=()=>{S((e=>e+1)),C(!1),rr.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let i=!0;if(n&&(i=window.confirm(a["prompt.warning.on-import.label"])),i&&r&&r[0]){C(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=cc.a.read(e,{codepage:65001}),n=cc.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),i=Rr(n);i.length>0?(f(i,i[0].id),g(t),S((e=>e+1)),o(i[0]),C(!1)):l()}catch(e){console.error(e),l()}}else S((e=>e+1)),C(!1)}},`upload-${w}`),k?Object(b.jsx)(ec.a,{}):Object(b.jsx)(ii.a,{})]})},`${k}`),Object(b.jsx)("div",{className:"manager-button close-button",onClick:()=>x(!1),children:Object(b.jsx)(sr.a,{})})]}),Object(b.jsx)("div",{className:"card-manager-filter",children:Object(b.jsx)(Rl.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:N,onPressEnter:e=>h({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${w}`)})]}),visible:j,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:()=>null,onClose:()=>x(!1),width:280,children:Object(b.jsx)(Qs,{language:a,onSelect:L,onDownload:l,onRequestImport:i})})})})),bc=or.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,fc=e=>{let{language:t,children:a,...n}=e;const{isListDirty:o,cardList:l}=Yr(Object(ao.useShallow)((e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}})));return Object(r.useEffect)((()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return o&&l.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[l.length,o,t]),Object(b.jsxs)(bc,{...n,children:[a,o&&l.length>1&&Object(b.jsx)("span",{className:"header-warning",children:"\xa0*"})]})};var hc=a(597);const gc=or.b.div`
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
        ${lr} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,vc=or.b.div`
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
`,yc=or.b.div`
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
`,xc=or.b.div`
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
`,jc=or.b.div`
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
`,Oc=or.b.span`
    color: var(--main-danger);
`,wc=Object(or.b)(Po)`
    position: absolute;
    z-index: 101;
`,Sc=Object(or.b)(wc)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,kc=Object(or.b)(wc)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var Cc=a(224),Fc=a(550),Tc=a(552),Nc=a(562),Lc=a(565);Object(Cc.configure)({ignoreTags:[]});const Rc={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:zc,width:Wc}=s;var Ec=function(){var e,t,a,n,o,l,i;const{allowHotkey:s,softMode:c,globalScale:d}=Xr(Object(ao.useShallow)((e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r}}=e;return{softMode:a,allowHotkey:t,globalScale:r}}))),{isInitiating:u,isLoading:m,language:p,isMetadataReady:f,languageInfo:h,initiate:g,loadDefaultLanguage:v}=gr(Object(ao.useShallow)((e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:o,initiate:l,loadDefaultLanguage:i}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:o,initiate:l,loadDefaultLanguage:i}}))),[y,x]=Object(r.useState)(!0),[j,O]=Object(r.useState)(""),[w,S]=Object(r.useState)("online"),[k,C]=Object(r.useState)(!1),F=Object(r.useRef)(null),T=Object(r.useRef)(null),N=Object(r.useRef)(null),L=Object(r.useRef)(null),R=Object(r.useRef)(null),z=Object(r.useRef)(null),W=Object(r.useRef)(null),E=Object(r.useRef)(null),B=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),I=Object(r.useRef)(null),A=Object(r.useRef)(null),M=Object(r.useRef)(null),P=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),U=Object(r.useRef)(null),K=Object(r.useRef)(null),[G]=Object(r.useState)({artworkCanvasRef:T,backgroundCanvasRef:N,exportCanvasRef:L,frameCanvasRef:z,cardIconCanvasRef:W,pendulumScaleCanvasRef:E,pendulumEffectCanvasRef:B,typeCanvasRef:D,effectCanvasRef:H,nameCanvasRef:I,statCanvasRef:A,setIdCanvasRef:M,passwordCanvasRef:P,creatorCanvasRef:$,stickerCanvasRef:Y,finishCanvasRef:U,lightboxRef:K,previewCanvasRef:R}),X=Object(r.useRef)(null),V=Object(r.useRef)(null),_=Object(r.useRef)(null),[q,J]=Object(r.useState)(0);Object(r.useEffect)((()=>{g()}),[g]),Object(r.useEffect)((()=>{f&&v()}),[f,v]),Object(r.useEffect)((()=>{["font-family","letter-spacing","--width-label"].forEach((e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=h.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")}))}),[h]),Object(r.useEffect)((()=>{var e;const t=null===(e=L.current)||void 0===e?void 0:e.getContext("2d"),a=Gr.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",an(t)),!1===u&&lo.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),n=r?da(JSON.parse(r)):null,o=new URLSearchParams(window.location.search).get("data");if(o){var e,t;const{card:a}=Ur(o),r=da(a),{artSource:l,backgroundSource:i}=r;if("online"===l&&"online"===i)return Ur(o).card;const s={...r};return"offline"===l&&(s.artData=null!==(e=null===n||void 0===n?void 0:n.artData)&&void 0!==e?e:""),"offline"===i&&(s.backgroundData=null!==(t=null===n||void 0===n?void 0:n.backgroundData)&&void 0!==t?t:""),s}return null!==n&&"2.2.2"===a?n:ht()}catch(a){return console.error(a),ht()}})();a(e),Yr.getState().setCardList([e],e.id),x(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),rr.a.error({message:yr()["error.load.font.tcg"](e)})},inactive:()=>{O(yr()["error.load.font.all-tcg"]),x(!1)}})}),[u]);const{styleContent:Z}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:o,onInactive:l}=e;const{font:i,format:s}=Gr(Object(ao.useShallow)((e=>({format:e.card.format,font:e.card.nameStyle.font})))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)((()=>{("ocg"===s||"OCG"===i)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),lo.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,l()},fontinactive:o}))}),[s,i,t,a,n,o,l]),{styleContent:c}})({isLanguageInitiating:u,onBeforeLoad:()=>{var e;x(!0);const t=null===(e=L.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",an(t))},onActive:()=>{x(!1)},onInactive:()=>{O(yr()["error.load.font.all-ocg"]),x(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),rr.a.error({message:yr()["error.load.font.ocg"](e)})}}),[Q,ee]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=document.body.classList;c?e.add("reduced-color-motion"):e.remove("reduced-color-motion")}),[c]);const te=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||null===(t=K.current)||void 0===t||t.setVisible((t=>"boolean"===typeof e?e:!t))}),[s]),ae=Object(r.useRef)(!1),re=document.getElementById("sentry-bug-report");Object(r.useEffect)((()=>{re&&p&&!1===ae.current&&!1===ho.f()&&(ae.current=!0,Fc.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[Tc.a(),Nc.a(),Lc.a({colorScheme:"system",autoInject:!1}).attachTo(re,{formTitle:p["contributor.bug-report.tooltip"],nameLabel:p["contributor.bug-report.name.label"],namePlaceholder:p["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:p["contributor.bug-report.message.label"],messagePlaceholder:p["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:p["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:p["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:p["contributor.bug-report.cancel.label"],submitButtonLabel:p["contributor.bug-report.submit.label"],isRequiredLabel:p["contributor.bug-report.required.label"],successMessageText:p["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))}),[p,re]);const ne=Object(r.useCallback)(((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:o}=null!==t&&void 0!==t?t:{},{setCard:l,card:i}=Gr.getState(),s=o?{...e,id:i.id}:e;r&&Yr.getState().addCard(s),l(s,n),J((e=>e+1)),null===(a=F.current)||void 0===a||a.forceCardData(s),Ja()}),[]),oe=Object(r.useCallback)((async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("replace"))}),[s]),le=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("merge"))}),[s]),ie=Object(r.useCallback)((function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||s)if(null===e||void 0===e||e.preventDefault(),"online"===w&&null!==(t=F.current)&&void 0!==t&&t.isLoading())window.alert(p["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:Gr.getState().card;null===(r=V.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),rr.a.error({message:p["error.export.message"],description:p["error.export.description"]})}}),[s,p,w]),se=Object(r.useCallback)((e=>{const{id:t,...a}=e;ie(void 0,!1,a)}),[ie]),ce=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=X.current)||void 0===t||t.download())}),[s]),de=Object(r.useMemo)((()=>({IMPORT:e=>oe(e,!0),MERGE:e=>le(e,!0),EXPORT:e=>ie(e,!0),VIEW:()=>te(!0,!0),DOWNLOAD:e=>ce(e,!0)})),[ce,ie,oe,le,te]),ue=Object(r.useCallback)((()=>{ee(!0),alert(p["prompt.download.tainted.message"])}),[p]),me=Object(r.useCallback)((e=>{var t;"anonymous"===e&&(ee(!1),null===(t=K.current)||void 0===t||t.refresh());J((e=>e+1))}),[]),pe=Object(r.useCallback)(((e,t)=>{J((e=>e+1)),S(t)}),[]),be=Object(r.useCallback)((()=>{J((e=>e+1)),ee(!0)}),[]),fe=Object(r.useCallback)((e=>{C(e)}),[]),he=m||y;return Object(b.jsx)(Cc.HotKeys,{keyMap:Rc,handlers:de,children:Object(b.jsxs)("div",{id:"app",onDrop:()=>{},className:`language-${h.codeName} manager-${k?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:er()?"-webkit-fill-available":"100vh","--card-height":zc*d+"px","--card-width":Wc*d+"px","--global-scale":`${d}`},children:[Z&&Object(b.jsx)("link",{rel:"stylesheet",type:"text/css",href:Z}),Object(b.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[he&&Object(b.jsx)(xc,{className:"app-loading",children:j.length>0?Object(b.jsx)(Oc,{children:j}):null!==(e=h.initialMessage)&&void 0!==e?e:""}),Object(b.jsxs)("div",{className:"card-preview-panel "+(Q?"export-tainted":"export-normal"),children:[Object(b.jsxs)(gc,{className:"data-button-panel",children:[Object(b.jsxs)("div",{className:"imexport",children:[Object(b.jsx)(li,{ref:V,tainted:Q,artworkCanvas:T.current,onRequireExportData:ie,onRequireDownload:()=>{var e;return null===(e=X.current)||void 0===e?void 0:e.download()},onClose:Ja}),Object(b.jsx)("div",{}),Object(b.jsx)(ci,{ref:_,onImport:ne,onClose:Ja,allowHotkey:s,language:p})]}),Object(b.jsx)(uo,{language:p}),Object(b.jsx)(_l,{ref:X,canvasMap:G,imageChangeCount:q,isTainted:Q,isInitializing:y,globalScale:d,onDownloadError:ue}),Q&&Object(b.jsx)("div",{id:"save-button-tainted",className:"save-button-container",children:Object(b.jsxs)("span",{children:[p["alert.download.tainted-first-line"],Object(b.jsx)("br",{}),p["alert.download.tainted-second-line"]," ",Object(b.jsx)(ll,{})]})})]}),Object(b.jsxs)(vc,{className:"card-preview-container",children:[Object(b.jsx)(nr.a,{title:p["button.reset.tooltip"],children:Object(b.jsx)(kc,{className:"reset-button",onClick:()=>{if(window.confirm(p["prompt.reset.message"])){var e;const{setCard:t,card:a}=Gr.getState(),r={id:a.id,...ft()},n="tcg"===a.format?r:dr(r,"ocg");t(n,!0),J((e=>e+1)),null===(e=F.current)||void 0===e||e.forceCardData(n)}},children:Object(b.jsx)(hc.a,{})})}),Object(b.jsx)(nr.a,{title:Object(b.jsxs)("div",{className:"center",children:[p["button.full-size.label"],s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(b.jsx)(Sc,{className:"lightbox-button",onClick:()=>te(),children:Object(b.jsx)(vl.a,{})})}),Object(b.jsx)("canvas",{id:"preview-canvas",ref:R,width:Wc,height:zc},(null!==(t=null===(a=K.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(b.jsxs)(yc,{className:"card-canvas-group",children:[Object(b.jsx)("canvas",{id:"export-canvas",ref:L,width:Wc*d,height:zc*d},(null!==(n=null===(o=K.current)||void 0===o?void 0:o.getCanvasKey())&&void 0!==n?n:0)+.1),Object(b.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(b.jsx)("canvas",{id:"frameCanvas",ref:z,width:Wc*d,height:zc*d},null!==(l=null===(i=K.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==l?l:0),Object(b.jsx)("canvas",{id:"nameCanvas",ref:I,width:Wc*d,height:148*d}),Object(b.jsx)("canvas",{id:"cardIconCanvas",ref:W,width:Wc*d,height:222*d}),Object(b.jsx)("canvas",{id:"pendulumScaleCanvas",ref:E,width:Wc*d,height:920*d}),Object(b.jsx)("canvas",{id:"pendulumEffectCanvas",ref:B,width:Wc*d,height:920*d}),Object(b.jsx)("canvas",{id:"typeCanvas",ref:D,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"effectCanvas",ref:H,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"statCanvas",ref:A,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"setIdCanvas",ref:M,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"passwordCanvas",ref:P,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"creatorCanvas",ref:$,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"stickerCanvas",ref:Y,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{id:"finishCanvas",ref:U,width:Wc*d,height:zc*d}),Object(b.jsx)("canvas",{className:"crop-canvas",ref:T}),Object(b.jsx)("canvas",{className:"crop-canvas",ref:N})]})]})]}),!1===he&&Object(b.jsx)(As,{ref:F,artworkCanvas:T.current,backgroundCanvas:N.current,onSourceLoaded:me,onCropChange:pe,onTainted:be})]}),Object(b.jsx)(pc,{language:p,onVisibleChange:fe,onDownload:se,onSelect:ne,onRequestImport:()=>{var e;null===(e=_.current)||void 0===e||e.requestImport("new")}}),Object(b.jsx)(Cl,{ref:K,globalScale:d}),Object(b.jsxs)(jc,{className:"by-me",children:["Made by Lauqerm ",Object(b.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Bc=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,599)).then((t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:o,getTTFB:l}=t;a(e),r(e),n(e),o(e),l(e)}))};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(Ec,{})}),document.getElementById("root")),Bc()}},[[536,1,2]]]);
//# sourceMappingURL=main.5cf32814.chunk.js.map