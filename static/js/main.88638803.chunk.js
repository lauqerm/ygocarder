(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{314:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},403:function(e,t,a){},404:function(e,t,a){},422:function(e,t,a){},529:function(e,t,a){},535:function(e,t,a){},536:function(e,t,a){},537:function(e,t,a){},539:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(50),i=a.n(o);a(314),a(315),a(316),a(317),a(318),a(319);const l=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:912,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:77,attributeY:55,attributeX:678,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"}},m=(e,t,a,r)=>{const{boundless:n,body:o,pendulum:i,text:l}={...d(),...t};if("full"===a)return u.fullCard;let s="normal";"fit"!==a&&n||o<100?s=e?"fullPendulum":"fullCard":e?l<100?s="small"===r?"extendedPendulumSmall":"extendedPendulum":i<100?("large"===r&&(s="truePendulumLarge"),"small"===r&&(s="truePendulumSmall"),"medium"===r&&(s="truePendulum")):s="small"===r?"pendulumSmall":"pendulum":s=l<100?"extendedCard":"normal";const c=u[s];return{...c,backgroundRatio:"frame"===a?.686:c.backgroundRatio}};var b=a(571),p=a(1);const h="NONE",f=[{name:h,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1,supportFormat:["tcg","ocg"]},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0,supportFormat:["tcg","ocg"]}],g=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0,supportFormat:["tcg","ocg"]}],v="NO ICON",y=[{label:Object(p.jsx)(b.a,{}),value:v,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0}],x="no-sticker",j=[{value:x,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],O={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous.png"}),isOption:!0},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0}},w=Object.values(O),k=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",...e}),S={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:k({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:k({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:k({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:k({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:k({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:k({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:k({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:k({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:k({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:k({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:k({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:k({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:k({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:k({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:k({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:k({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:k({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:k({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})}},F=Object.values(S),C={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},T=Object.values(C);var L=a(563);const N={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:50,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:790,artlessFrameY:553,fontSize:60.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:806,artlessFrameY:553,fontSize:60.5}},R=Object.values(N),B={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},z="medium",E=[{index:0,labelKey:"input.flag.mix-def-link"}],I=0,W=E.length,D={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},H={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:64.5,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:64.5,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:64.5,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:144}]},A=64.44,M={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:128.94}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5}]}},P={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},$={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},Y={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},U=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],K=U.reduce(((e,t)=>(e[t.shortForm]=t,e)),{}),G=[{blendMode:"overlay",opacity:1}],X=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],V={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":G,"art-overlay":G,"art-border":G,"art-border-pendulum":G,"border-pendulum":G,attribute:G,frame:G},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":X,"art-border":X,"art-border-pendulum":X,"border-pendulum":X,frame:X,"frame-background":X,name:X,star:X},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},q={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},_={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},J={normal:"normal",gold:"gold",platinum:"platinum"},Z=e=>[{name:J.normal,label:null===e||void 0===e?void 0:e.normal,color:"#747b95",isOption:!1},{name:J.gold,label:null===e||void 0===e?void 0:e.gold,color:"#cfa65f",isOption:!0},{name:J.platinum,label:null===e||void 0===e?void 0:e.platinum,color:"#b1b1b1",isOption:!0}],Q={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},ee={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},te={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,headTextGapRatio:0},ae={...te,font:"MatrixBook",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},re={...te,font:'"StoneSerif-Italic"',headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},ne={...te,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},oe={tcg:{...re,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...re,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...re,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...re,fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...re,fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...re,fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...re,fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...re,fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},ie={tcg:{...ae,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...ae,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...ae,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...ae,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...ae,fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...ae,fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...ae,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...ae,fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...ne,fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...ne,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...ne,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...ne,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...ne,fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...ne,fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...ne,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...ne,fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},le={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps",font:"MatrixRegularSmallCaps",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.55,fontList:[{bulletWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterDeviationMap:{1:{threshold:.94,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:11},"\u1ecb":{uniformBoxDescent:11},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:11},"e\u0329":{uniformBoxDescent:11},"\xc8\u0329":{uniformBoxDescent:11},"\xc9\u0329":{uniformBoxDescent:11},"\xe8\u0329":{uniformBoxDescent:11},"\u1eb8":{uniformBoxDescent:11},"\u1eb9":{uniformBoxDescent:11},"\u1ec6":{uniformBoxDescent:11},"\u1ec7":{uniformBoxDescent:11}}},2:{threshold:0,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:20},"\u1ecb":{uniformBoxDescent:20},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:20},"e\u0329":{uniformBoxDescent:20},"\xc8\u0329":{uniformBoxDescent:20},"\xc9\u0329":{uniformBoxDescent:20},"\xe8\u0329":{uniformBoxDescent:20},"\u1eb8":{uniformBoxDescent:20},"\u1eb9":{uniformBoxDescent:20},"\u1ec6":{uniformBoxDescent:20},"\u1ec7":{uniformBoxDescent:20}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.825,weight:"bold",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.775,headTextOverflow:"condense",headTextBold:!0,metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,fontStyle:"ocg",fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},se={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},ce={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},de={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},ue={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},me={"tcg-small":{...re,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...re,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...re,fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},be={"tcg-small":{...ae,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...ae,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...ae,fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...ne,fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...ne,fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...ne,fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},pe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},he={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},fe={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},ge={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},ve={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},ye={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[ge.ocg[2]]:ge.tcg[2],[ge.ocg[1]]:ge.tcg[1],[ge.ocg[0]]:ge.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[ve.ocg]:ve.tcg},xe=Object.entries(ye).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),je={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},Oe=Object.values(je),we={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"}},ke={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},Se=[-45,0,45,-90,0,90,-135,180,135],Fe=[-38,-28,-38,-28,0,-28,-38,-28,-38],Ce=[-30,-23,-30,-28,0,-28,-30,-23,-30],Te=[0,0,0,0,0,0,0,0,0],Le=[-5,0,5,0,0,0,5,0,-5],Ne=new RegExp("[A-Z\uff21-\uff3a]"),Re=new RegExp("[\\[\\]\u3010\u3011]"),Be="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",ze=new RegExp(Be),Ee=new RegExp(`({[^{}]+?}|${Be}|.)`),Ie="\u2989",We="\u298a",De="\u27c5",He="\u27c6",Ae="\u169b",Me="\u169c",Pe="\u27ec",$e="\u27ed",Ye=new RegExp(`[${[Me,Ae,He,De,$e,Pe,We,Ie].join("")}]|(\\|[^}]+})`,"g"),Ue=new RegExp(`(^|[-\\u2014/[(\\u2018${Ie}${De}${Ae}${Pe}\\s])"`,"g"),Ke=`${Ie}|${We}`,Ge=new RegExp(Ke),Xe=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${Ie}?(\\(|\\*)[\\w\\W]+${We}?)\\s*$`,Ve=new RegExp("[#\u2605\u2606@\u221e]"),qe=`(${U.map((e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm})).join("|")})(?![^{]*})`,_e="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Je=new RegExp(`[${_e}]`),Ze=`.[${_e})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,Qe=new RegExp("[\u2460-\u2473\u203b]"),et=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),tt=new RegExp("[\uff10-\uff19]"),at=new RegExp("[0-9]"),rt=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,nt=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,ot=new RegExp("[\u30fb]"),it=new RegExp("[\u30fc]"),lt=new RegExp("[\u2015]"),st=new RegExp("[\uff1a]"),ct=new RegExp("[\u3002\uff64]"),dt=new RegExp("[\uff1a]"),ut={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},mt={"\u3002":-.5,"\uff1a":-.25},bt={">":.125,"<":.125},pt={},ht={},ft={},gt=e=>"tcg"===e?7:1,vt=/{[^{}]+?}/,yt="\\s\\-/",xt=-2.25,jt=()=>({version:2,format:"tcg",frame:"fusion",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:"LIGHT",subFamily:v,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:z,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto"},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto"},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],flag:[0],externalInfo:{}}),Ot=()=>({id:Object(L.a)(),...jt()}),wt=()=>({version:2,format:"tcg",frame:"effect",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:h,subFamily:v,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:z,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto"},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto"},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:x,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],flag:[0],externalInfo:{}}),kt=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],St=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],Ft={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(p.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(p.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(p.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},Ct=[Ft["549x800"],Ft["561x818"],Ft["813x1185"],Ft["1122x1636"],Ft["1388x2026"],Ft["1626x2370"]],Tt=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],Lt=(e,t)=>{const a=document.createElement("canvas");a.width=e,a.height=t;const r=a.getContext("2d");return{canvas:a,context:r}};var Nt=a(151),Rt=a.n(Nt),Bt=a(221),zt=a.n(Bt),Et=a(108),It=a.n(Et),Wt=a(264),Dt=a.n(Wt),Ht=a(265),At=a.n(Ht),Mt=a(266),Pt=a.n(Mt),$t=a(267),Yt=a.n($t);function Ut(e,t){var a,r,n,o,i,l,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,b=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],b+=c[a],m=Math.max(m,c[a]);var p=It.a.mallocDouble(u),h=Rt()(p,c.slice(0),d.slice(0),0),f=It.a.mallocUint32(m),g=It.a.mallocUint32(m),v=It.a.mallocDouble(u),y=Rt()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:b);for(function(e,t,a){var r,n,o,i=0,l=Math.min;for(r=0;r<t;++r){for(o=e[i++],n=1;n<a;++n)o=l(e[i],o+1),e[i++]=o;for(n=0;n<a;++n)o=l(e[--i],o+1),e[i]=o;i+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(o=h.stride,n=1,r=a-1;r<s;++r)o[r]=n,n*=c[r];for(r=a-2;r>=0;--r)o[r]=n,n*=c[r];if(zt.a.assign(h,y),l=c[a-1],isFinite(t))if(1===t)Dt()(h.data,u/l|0,0|l,f,g);else if(2===t)At()(h.data,u/l|0,0|l,f,g);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");Yt()(h.data,u/l|0,0|l,f,g,t)}else Pt()(h.data,u/l|0,0|l,f,g);i=y,y=h,h=i}return zt.a.assign(e,y),It.a.freeDouble(v),It.a.freeDouble(p),It.a.freeUint32(f),It.a.freeUint32(g),e}var Kt=a(37),Gt=a(303),Xt=a(268),Vt=a(138);const qt={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},_t={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Jt={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},Zt="sobel",Qt=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:Zt});class ea{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...Qt(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:o,invertedGreen:i,invertedSource:l,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(o),this.invertGreen(i),this.invertSource(l),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new Kt.h(-.5,.5,.5,-.5,0,1),t=new Kt.k,a=new Xt.a(t,e);this.renderer=new Kt.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=Kt.n.clone(Jt.uniforms),this.material=new Kt.l({fragmentShader:Jt.fragmentShader,vertexShader:Jt.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new Kt.i(1,1,1,1),n=new Kt.f(r,this.material);t.add(n),this.gaussianShaderY=new Vt.a(_t),this.gaussianShaderX=new Vt.a(qt),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new Gt.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new Kt.p(e,t,{minFilter:Kt.g,magFilter:Kt.g,format:Kt.j,stencilBuffer:!1})}getTexture(e){const t=new Kt.m(e);return t.wrapS=t.wrapT=Kt.b,t.minFilter=t.magFilter=Kt.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const ta=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),o=Math.sin(a)*Math.cos(r),i=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*o)/100,Math.round(100*i)/100]},aa=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:o=[255,255,255],lightAngleVec:i,lightPitch:l,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,b=null!==r&&void 0!==r?r:t.width,p=u.getImageData(0,0,b,m,{willReadFrequently:!0}).data,h=i||("number"===typeof l&&"number"===typeof s?ta(l,s):[1,0,0]),f=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),g=[h[0]/f,h[1]/f,h[2]/f];if(p)try{const e=new Uint8ClampedArray(b*m);for(let n=0;n<p.length;n+=4)p[n]||p[n+1]||p[n+2]||p[n+3]?e[n/4]=0:e[n/4]=1;const t=Ut(Rt()(e,[m,b])),a=t.shape[0],r=t.shape[1],i=new Uint8ClampedArray(b*m*4),l=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*b+e),r=t.get(n,e);i[a]=r*l,i[a+1]=r*l,i[a+2]=r*l,i[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=b,s.height=m,s.getContext("2d").putImageData(new ImageData(i,b,m),0,0);const u=document.createElement("canvas");u.width=b,u.height=m;new ea(Qt(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:Zt});const h=document.createElement("canvas");h.width=b,h.height=m;const f=h.getContext("2d");f.drawImage(u,0,0,b,m);const v=((e,t,a,r,n,o)=>{const i=new Uint8ClampedArray(t*a*4),l=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*o**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,o=0,u=0,m=0;for(let i=-l;i<=l;i++)for(let b=-l;b<=l;b++){const l=r+b,p=d+i;if(l>=0&&p>=0&&l<t&&p<a){const a=4*(d*t+r),i=4*(p*t+l),b=e[a],h=e[a+1],f=e[a+2],g=e[i],v=e[i+1],y=e[i+2],x=s(l,p,r,d)*c(b,g)*c(h,v)*c(f,y);n+=g*x,o+=v*x,u+=y*x,m+=x}}const b=4*(d*t+r);i[b]=n/m,i[b+1]=o/m,i[b+2]=u/m,i[b+3]=e[b+3]}return i})(f.getImageData(0,0,b,m).data,b,m,9,70,20),y=new Uint8ClampedArray(b*m*4);for(let n=0;n<p.length;n+=4){let e=v[n]/127.5-1,t=v[n+1]/127.5-1,a=v[n+2]/127.5-1;const r=(e*g[0]+t*g[1]+a*g[2])/2*(Math.abs(c)+Math.abs(d)),i=Math.max(c,Math.min(r,d));y[n]=Math.round(p[n]+o[0]*i),y[n+1]=Math.round(p[n+1]+o[1]*i),y[n+2]=Math.round(p[n+2]+o[2]*i),y[n+3]=p[n+3]}return new ImageData(y,b,m)}catch(v){return console.error("Could not apply emboss effect",v),null}},ra=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((r=>{setTimeout((()=>{if(e.current&&t)try{e.current.toBlob((e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r(!0)},e.onerror=()=>{URL.revokeObjectURL(a),r(!1)}}else r(!1)}else r(!1)}))}catch(a){t.drawImage(e.current,0,0),console.error(a),r(!1)}else r(!1)}),25*a)}))},na=e=>"speed-skill"===e.frame&&!oa(e),oa=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,ia=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"level",la=e=>!oa({frame:e})||ca(e),sa=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),ca=e=>["link"].includes(e)||sa(e),da=(e,t)=>{var a,r,n,o,i;const{frame:l,topLeftFrame:s,topRightFrame:c,bottomLeftFrame:d,bottomRightFrame:u,effectBackground:m,pendulumEffectBackground:b}=e,p=null!==l&&void 0!==l?l:"effect",h="auto"===s?p:s,f=null!==(r="auto"===d?t?"spell":h:d)&&void 0!==r?r:p;return{topLeftFrame:h,topRightFrame:null!==(a="auto"===c?h:c)&&void 0!==a?a:p,bottomLeftFrame:f,bottomRightFrame:null!==(n="auto"===u?f:u)&&void 0!==n?n:p,effectBackground:null!==(o="auto"===m?f:m)&&void 0!==o?o:p,pendulumEffectBackground:null!==(i="auto"===b?f:b)&&void 0!==i?i:p}};var ua=a(570),ma=a(557);const ba=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return pa(e,0)},pa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),(e=>e===t[0]?t[1]:t[0]));if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},ha={version:"ve",format:"fm",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",subFamily:"sf",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},fa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ha;const a={},r={...e};return Object.keys(r).forEach((e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var o;const r=null===(o=t[e])||void 0===o?void 0:o._newKey;r&&(a[r]=fa(n,t[e]))}})),a},ga=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ha;const a={};return Object.keys(t).forEach((r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const o=null===n||void 0===n?void 0:n._newKey;o&&e[o]&&(a[r]=ga(e[o],t[r]))}})),a},va=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ha;const a="string"===typeof e?JSON.parse(ba(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach((e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const o=null===n||void 0===n?void 0:n._newKey;o&&a[o]&&(r[e]=va(a[o],t[e]))}})),r},ya=function(e){var t,a,r,n,o,i;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt();delete l.version;const s={id:Object(L.a)(),...l,...Object(ua.a)(e)};if(s.effectStyle={...wt().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...wt().pendulumStyle}:s.pendulumStyle={...wt().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.pendulumSize&&(s.pendulumSize="medium"),null==s.rightFrame&&(s.rightFrame="auto"),null==s.leftFrame&&(s.leftFrame="auto"),null==s.pendulumRightFrame&&(s.pendulumRightFrame="auto"),null==s.finish&&(s.finish=[]),null==s.artFinish&&(s.artFinish="normal"),s.finish){const e=s.finish;e.includes("art")&&(s.finish=e.filter((e=>"art"!==e)),s.otherFinish=[s.artFinish,s.artFinish,s.artFinish,s.artFinish])}if(!Array.isArray(s.otherFinish)||3!==s.otherFinish.length&&null!=s.otherFinish[3]||(s.otherFinish[3]=wt().otherFinish[3]),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(n=s.background)&&void 0!==n?n:"")&&(s.background=""),""===(null!==(o=s.backgroundData)&&void 0!==o?o:"")&&(s.backgroundData=""),""===(null!==(i=s.backgroundSource)&&void 0!==i?i:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),null==s.linkRating&&(s.linkRating=""),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto"),Array.isArray(s.flag)||(s.flag=[0]),0===s.version||1===s.version){s.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:o,frame:i}=s,l=oa({frame:i});("auto"!==e||t?!!(a||r||n&&o.length):l)||(s.atk="",s.def="")}return s},xa=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},ja=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},Oa=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:fa(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:fa(a)}},wa=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),ka=(e,t)=>{const{aspect:a,height:r,width:n,x:o,y:i,unit:l}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:b}=null!==t&&void 0!==t?t:{};return wa(a,s)&&wa(r,c)&&wa(n,d)&&wa(o,u)&&wa(i,m)&&l===b},Sa=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Fa=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Ca=(e,t,a)=>{const r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=[a,r.download,r.href].join(":");const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(n),r.remove()},Ta={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[v]:"None"},La=Object.entries(Ta).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Na={large:"Large",medium:"Normal",small:"Small"},Ra=Object.entries(Na).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Ba={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},za=Object.entries(Ba).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Ea={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},Ia=Object.entries(Ea).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Wa={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},Da=Object.entries(Wa).reduce(((e,t)=>{const[a,r]=t;return e[r.key]=a,e}),{}),Ha=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:o,effect:i,atk:l,def:s,art:c,artData:d,artSource:u,password:m,creator:b,attribute:p,setId:h,pendulumEffect:f,pendulumScaleBlue:g,pendulumScaleRed:v,pendulumSize:y,isPendulum:x,linkMap:j,frame:O,externalInfo:w,nameStyle:k,nameStyleType:S,artFinish:F,finish:C}=e,T=Sa(a),L=Fa(i),N=Fa(f),R=Ta[o],B=Ba[p],z=Ea[O],E="predefined"===S?Da[[k.preset,F,C.join("|")].join("-")]:"common",{pendulum:I,rarity:W,...D}=null!==w&&void 0!==w?w:{};return{isPartial:a!==T||i!==L||f!==N||void 0===R||void 0===B||void 0===z||void 0===E,result:{version:"1.0.0",name:T,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:L,atk:l,def:s,serial:m,copyright:b,attribute:null!==B&&void 0!==B?B:"None",id:h,pendulum:{enabled:x,effect:N,blue:g,red:v,boxSize:Na[y],boxSizeEnabled:!0,...I},variant:"Normal",link:{topLeft:!!j.includes("1"),topCenter:!!j.includes("2"),topRight:!!j.includes("3"),middleLeft:!!j.includes("4"),middleRight:!!j.includes("6"),bottomLeft:!!j.includes("7"),bottomCenter:!!j.includes("8"),bottomRight:!!j.includes("9")},layout:null!==z&&void 0!==z?z:"Normal",boxSize:"large"===y?"Small":"Normal",rarity:null!==E&&void 0!==E?E:W,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...D}}},Aa={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[v]:"None"},Ma=Object.entries(Aa).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Pa=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),$a=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Ya={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},Ua=e=>{var t,a,r;const{atk:n,attribute:o,card_images:i,card_sets:l,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:b,name:p,pend_desc:f,race:g,scale:y,typeline:x,linkval:j,linkmarkers:O}=e,w=Ma[g],k=Pa[o],[S,F]=$a[d].split("_"),C=null!==(t=b?b.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",T=C.split("\n"),L=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==S&&void 0!==S?S:"normal"})&&T.length>1?[`[${T[0].replaceAll("\r","")}]`,...T.slice(1)].join("\n"):C,N=f?f.replaceAll(/^''|''$/g,""):"",R=i[0].image_url_cropped,B=wt();return{isPartial:!1,result:{...B,name:p,atk:n<0||null==n?"?":`${n}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==k&&void 0!==k?k:h,effect:L,subFamily:null!==w&&void 0!==w?w:v,setId:null!==(a=null===(r=l[l.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==S&&void 0!==S?S:"normal",star:"link"===d&&j?j:m,typeAbility:x||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:R,artSource:"online",artCrop:{...B.artCrop,y:0},isLink:"link"===S&&Array.isArray(O),linkMap:(null!==O&&void 0!==O?O:[]).map((e=>Ya[e])),isPendulum:"pendulum"===F,pendulumScaleBlue:null==y?"0":`${y}`,pendulumScaleRed:null==y?"0":`${y}`,pendulumEffect:N,password:`${u}`.padStart(8,"0"),creator:ge.tcg[0]}}},Ka=1e3,Ga=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Ka;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ka,a=t,r=a,n=30,o=100;const i=()=>n=-1;return{reset:function(){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=i,a=i,n=30,o=100,r=i},searchDown:()=>(a-=o,n-=1,a),reverseSearch:()=>(1===o?i():(a+=o,o/=10,a-=o),Math.min(a,t)),finish:i,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===Ka)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,Ka));return n!==a&&e(n),n},Xa=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let o=t,i=a,l="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[i,o,l,c].filter((e=>""!==e)).join(" ")}, Arial`,getFontInfo:()=>({style:i,size:l,family:c,sizeAsNumber:s,weight:o}),setWeight(e){return o=e,this},setStyle(e){return i=e,this},setSize(e){const t="function"===typeof e?e(s):e;return l="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},Va=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},qa=(e,t)=>({...e,fontList:[...e.fontList,Va(t)]}),_a=()=>Za("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),Ja=e=>(null!==e&&void 0!==e?e:[]).map((e=>{let{color:t,offset:a}=e;return`${a}|${t}`})).join(","),Za=e=>e?e.split(",").map(((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}})):Za("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),Qa=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)((()=>{t((e=>e+1))}),[]),e]},er=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:o,onCancel:i,onKeyPress:l}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===l||void 0===l?void 0:l(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n((e=>Math.max(0,a+e+1)%a))):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n((e=>Math.max(0,a+e-1)%a))):"Enter"===e.key||" "===e.key?o():"Escape"===e.key&&(null===i||void 0===i||i()))}}},tr=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:o}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof o?o*t:o}},ar=(e,t)=>e.map((e=>e*t)),rr=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:o,headTextSpacing:i,iconSymbolWidth:l,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:o*t,headTextSpacing:"number"===typeof i?i*t:void 0,iconSymbolWidth:"number"===typeof l?l*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},nr=(e,t)=>({...e,fontList:e.fontList.map((e=>rr(e,t)))}),or=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a};const ir=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},lr=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,sr=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const o=e.replace("#","");let i=[0,0,0,1];var a,r,n;if(3===o.length||4===o.length)i=[parseInt(`${o[0]}${o[0]}`,16),parseInt(`${o[1]}${o[1]}`,16),parseInt(`${o[2]}${o[2]}`,16),parseInt(`${null!==(a=o[3])&&void 0!==a?a:"f"}${null!==(r=o[3])&&void 0!==r?r:"f"}`,16)];if(6===o.length||8===o.length)i=[parseInt(o.slice(0,2),16),parseInt(o.slice(2,4),16),parseInt(o.slice(4,6),16),parseInt(null!==(n=o.slice(6,8))&&void 0!==n?n:"ff",16)];return i.map((e=>isNaN(e)?255:e)).slice(0,t?4:3)}catch(o){return[0,0,0,1].slice(0,t?4:3)}},cr=()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e};function dr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var ur=a(558),mr=a(305),br=a(116),pr=a(6);const hr=pr.b.button`
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
`;var fr=a(572),gr=a(573),vr=a(574);const yr=(e,t)=>{var a,r,n,o,i;const{creator:l,effect:s,format:c,isFirstEdition:d,name:u,password:m,pendulumEffect:b,setId:p,typeAbility:h,nameStyle:f}=e;if(c===t)return e;const g="ocg"===t?xe:ye,v="ocg"===t&&/-EN/.test(p)?p.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(p)?p.replace("-JP","-EN"):p,y={...f,font:"ocg"===t&&"Default"===f.font?"OCG":"tcg"===t&&"OCG"===f.font?"Default":f.font};return{...e,name:null!==(a=g[u])&&void 0!==a?a:u,format:t,effect:null!==(r=g[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=g[b])&&void 0!==n?n:b,typeAbility:h.map((e=>{var t;return null!==(t=g[e])&&void 0!==t?t:e})),creator:null!==(o=g[l])&&void 0!==o?o:l,password:null!==(i=g[m])&&void 0!==i?i:m,setId:v,isFirstEdition:"ocg"!==t&&d,nameStyle:y}};var xr=a(92),jr=a(110),Or=a.n(jr),wr=a(270),kr=a.n(wr);const Sr=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(p.jsx)(n.a.Fragment,{children:r.map(((e,a)=>a%2===0?Object(p.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e]))},e)},o={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,o)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:o}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,o)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-2.content":(e,t,n,o)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,o)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"guide.format.section-6.content":(e,t,n,o)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:o}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...o}}},Fr=Object(xr.create)(((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=Sr({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),o=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const o=Sr(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=o,o}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},i=async a=>{const i=t().languageMetadataMap[a];if(!i)return;const l=r[a]?r[a]:await o(a);l?(e({languageInfo:t().languageMetadataMap[a],language:l.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:i})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await o("eng"),await i(a),e({isInitiating:!1})},loadLanguage:o,changeLanguage:i}})),Cr=()=>Fr((e=>{let{language:t}=e;return t})),Tr=()=>Fr.getState().language;var Lr=a(271);const Nr=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Star Type","Star Alignment","Card Icon Type","Link Rating","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Left Frame","Right Frame","Bottom Right Frame","Flag","External Info (JSON)"],Rr=[...Nr,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Br=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),zr=new Set(Rr.map(Br)),Er=Nr.reduce(((e,t,a)=>{const r=Br(t);return zr.has(r)&&(e[t]=a),e}),{}),Ir=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,Wr=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},Dr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Hr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,Ar=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,Mr=e=>{try{const t=e[0].reduce(((e,t,a)=>{const r=Br(t);return zr.has(r)&&(e[t]=a),e}),{});return e.map(((e,a)=>{var r,n,o,i,l,s,c,u,b,p,f,g,v,y,x,j,O,w,k,S,F,C,T,N,R,B,z,E,I,D,H,A,M,P,$,Y,U,K,G,X,V,q,_,Z,Q,ee,te,ae,re,ne,oe,ie,le,se;if(0===a)return null;if(""===e.join(""))return null;const ce=wt(),de=((e,t)=>a=>{var r,n;const o=null!==(r=t[a])&&void 0!==r?r:-1,i=(null!==(n=e[o])&&void 0!==n?n:"").trim();return""===i?void 0:i})(e,t),ue=(null!==(r=null!==(n=de("Frame"))&&void 0!==n?n:de("Background_Type"))&&void 0!==r?r:ce.frame).toLowerCase(),me=(null!==(o=de("Right Frame"))&&void 0!==o?o:ce.rightFrame).toLowerCase(),be=(null!==(i=de("Left Frame"))&&void 0!==i?i:ce.leftFrame).toLowerCase(),pe=(null!==(l=de("Bottom Right Frame"))&&void 0!==l?l:ce.pendulumRightFrame).toLowerCase(),he=null!==(s=null!==(c=de("Star"))&&void 0!==c?c:de("Level/Rank"))&&void 0!==s?s:"",fe="text"===de("Star Type")?he:parseInt(he)<=13&&parseInt(he)>=0&&"2"!==de("Star_Type")?parseInt(he):he,ge=(null!==(u=null!==(b=de("Foil"))&&void 0!==b?b:de("Rarity"))&&void 0!==u?u:"normal").toLowerCase(),ve=J[ge]?ge:"normal",ye=null===(p=de("Attribute"))||void 0===p?void 0:p.toUpperCase(),xe=ye?"NONE"===ye?h:ye:"spell"===ue?"SPELL":"trap"===ue?"TRAP":ce.attribute,je=null!==(f=de("Art Finish"))&&void 0!==f?f:de("Art_Finish")?`type${de("Art_Finish")}`:"",Oe=null!==(g=de("Other Finish - Attribute"))&&void 0!==g?g:"",we=null!==(v=de("Other Finish - Sticker"))&&void 0!==v?v:"",ke=null!==(y=de("Other Finish - Icon"))&&void 0!==y?y:"",Se=null!==(x=de("Other Finish - Background"))&&void 0!==x?x:"",Fe=null!==(j=de("ATK"))&&void 0!==j?j:"",Ce=null!==(O=de("Card Icon Type"))&&void 0!==O?O:ce.cardIcon,Te=null!==(w=de("Copyright"))&&void 0!==w?w:"",Le=null!==(k=de("DEF"))&&void 0!==k?k:"",Ne=null!==(S=de("Effect"))&&void 0!==S?S:"",Re=null!==(F=null===(C=de("Card Finish"))||void 0===C?void 0:C.split(/,| /).filter((e=>""!==e)))&&void 0!==F?F:[],Be=(null!==(T=de("Format"))&&void 0!==T?T:ce.format).toLowerCase(),ze=Wr(de("Use Furigana Helper"),ce.furiganaHelper),Ee=null!==(N=de("Name"))&&void 0!==N?N:"",Ie=null!==(R=de("Password"))&&void 0!==R?R:"",We=null!==(B=null!==(z=de("Set Id"))&&void 0!==z?z:de("Set_ID"))&&void 0!==B?B:"",De=(null!==(E=de("Star Alignment"))&&void 0!==E?E:ce.starAlignment).toLowerCase(),He=(null!==(I=de("Sticker"))&&void 0!==I?I:ce.sticker).toLowerCase(),Ae=(null!==(D=null!==(H=de("Spell/Trap Icon"))&&void 0!==H?H:de("spell_type/trap_type"))&&void 0!==D?D:ce.subFamily).toUpperCase(),Me=null===(A=de("Edition"))||void 0===A?void 0:A.toLowerCase(),Pe=Wr(de("Is First Edition"),Me?"1st edition"===Me:ce.isFirstEdition),$e=Wr(de("Is Duel Terminal Card"),Me?"duel terminal"===Me:ce.isDuelTerminalCard),Ye=Wr(de("Is Limited Edition"),Me?"limited edition"===Me:ce.isLimitedEdition),Ue=Wr(de("Is Speed Card"),Me?"speed duel"===Me:ce.isSpeedCard),Ke=Wr(de("Is Legacy Card"),ce.isLegacyCard),Ge=Wr(de("Is Pendulum"),ce.isPendulum),Xe=(null!==(M=de("Bottom Frame"))&&void 0!==M?M:ce.pendulumFrame).toLowerCase(),Ve=null!==(P=de("Pendulum Effect"))&&void 0!==P?P:"",qe=null!==($=de("Pendulum Scale Red"))&&void 0!==$?$:"",_e=null!==(Y=de("Pendulum Scale Blue"))&&void 0!==Y?Y:"",Je=null!==(U=de("Pendulum Size"))&&void 0!==U?U:"medium",Ze=de("Type Ability"),Qe=Ze?Ze.split("/"):[de("Type_1"),de("Type_2"),de("Type_3"),de("Type_4")].filter((e=>"string"===typeof e&&""!==e)),et=(null!==(K=de("Condense Rate"))&&void 0!==K?K:ce.effectStyle.condenseTolerant).toLowerCase(),tt=Dr(de("Effect Style - Upsize"),ce.effectStyle.upSize),at=Dr(de("Pendulum Effect Style - Upsize"),ce.pendulumStyle.upSize),rt=(null!==(G=de("Effect Style - Font Style"))&&void 0!==G?G:ce.effectStyle.fontStyle).toLowerCase(),nt=(null!==(X=de("Pendulum Effect Style - Font Style"))&&void 0!==X?X:ce.pendulumStyle.fontStyle).toLowerCase(),ot=(null!==(V=de("Effect Style - Background"))&&void 0!==V?V:ce.effectStyle.background).toLowerCase(),it=(null!==(q=de("Pendulum Effect Style - Background"))&&void 0!==q?q:ce.pendulumStyle.background).toLowerCase(),lt=d(),st={artBorder:Wr(de("Opacity - Art Border"),lt.artBorder),baseFill:null!==(_=de("Opacity - Base Fill"))&&void 0!==_?_:lt.baseFill,body:Dr(de("Opacity - Body"),lt.body),boundless:Wr(de("Opacity - Boundless"),lt.boundless),name:Dr(de("Opacity - Name"),lt.name),nameBorder:Wr(de("Opacity - Name Border"),lt.nameBorder),pendulum:Dr(de("Opacity - Pendulum"),lt.pendulum),text:Dr(de("Opacity - Text"),lt.text)},ct={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},dt=null!==(Z=de("Art Link"))&&void 0!==Z?Z:ce.art,ut=Wr(de("Is Using Full Art"),ce.artFit),mt={aspect:m(Ge,st,void 0,Je).ratio,height:Hr(de("Art Crop - Height (%)"),ct.height),width:Hr(de("Art Crop - Width (%)"),ct.width),x:Hr(de("Art Crop - X (%)"),ct.x),y:Hr(de("Art Crop - Y (%)"),ct.y),unit:"%"},bt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},pt=Wr(de("Has Background"),ce.hasBackground),ht=null!==(Q=de("Background Link"))&&void 0!==Q?Q:ce.background,ft=(null!==(ee=de("Background Type"))&&void 0!==ee?ee:ce.backgroundType).toLowerCase(),gt=Wr(de("Is Using Full Background"),ce.backgroundFit),vt={aspect:m(Ge,st,ft,Je).ratio,height:Hr(de("Background Crop - Height (%)"),bt.height),width:Hr(de("Background Crop - Width (%)"),bt.width),x:Hr(de("Background Crop - X (%)"),bt.x),y:Hr(de("Background Crop - Y (%)"),bt.y),unit:"%"},yt={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},xt=(null!==(te=de("Name Style Type"))&&void 0!==te?te:ce.nameStyleType).toLowerCase(),jt={embossPitch:Dr(de("Name Style - Emboss Pitch"),yt.embossPitch),embossYaw:Dr(de("Name Style - Emboss Yaw"),yt.embossYaw),embossThickness:Dr(de("Name Style - Emboss Thickness"),yt.embossThickness),fillStyle:Ar(de("Name Style - Fill Style"),yt.fillStyle),font:null!==(ae=de("Name Style - Font"))&&void 0!==ae?ae:yt.font,gradientAngle:Dr(de("Name Style - Gradient Angle"),yt.gradientAngle),gradientColor:null!==(re=de("Name Style - Gradient Color"))&&void 0!==re?re:yt.gradientColor,hasEmboss:Wr(de("Name Style - Has Emboss"),yt.hasEmboss),hasGradient:Wr(de("Name Style - Has Gradient"),yt.hasGradient),hasOutline:Wr(de("Name Style - Has Outline"),yt.hasOutline),hasShadow:Wr(de("Name Style - Has Shadow"),yt.hasShadow),headTextFillStyle:Ar(de("Name Style - Headtext Fill Style"),yt.headTextFillStyle),lineColor:Ar(de("Name Style - Line Color"),yt.lineColor),lineOffsetX:Dr(de("Name Style - Line Offset X"),yt.lineOffsetX),lineOffsetY:Dr(de("Name Style - Line Offset Y"),yt.lineOffsetY),lineWidth:Dr(de("Name Style - Line Width"),yt.lineWidth),pattern:null!==(ne=de("Name Style - Pattern"))&&void 0!==ne?ne:yt.pattern,preset:null!==(oe=de("Name Style - Preset"))&&void 0!==oe?oe:yt.preset,shadowBlur:Dr(de("Name Style - Shadow Blur"),yt.shadowBlur),shadowColor:Ar(de("Name Style - Shadow Color"),yt.shadowColor),shadowOffsetX:Dr(de("Name Style - Shadow Offset X"),yt.shadowOffsetX),shadowOffsetY:Dr(de("Name Style - Shadow Offset Y"),yt.shadowOffsetY)},Ot=Wr(de("Is Link"),null!==(ie=ce.isLink)&&void 0!==ie?ie:"link"===ue),kt=null!==(le=[Wr(de("Link - Top Left Arrow"),!1)?"1":"",Wr(de("Link - Top Arrow"),!1)?"2":"",Wr(de("Link - Top Right Arrow"),!1)?"3":"",Wr(de("Link - Left Arrow"),!1)?"4":"",Wr(de("Link - Right Arrow"),!1)?"6":"",Wr(de("Link - Bottom Left Arrow"),!1)?"7":"",Wr(de("Link - Bottom Arrow"),!1)?"8":"",Wr(de("Link - Bottom Right Arrow"),!1)?"9":""].filter((e=>""!==e)))&&void 0!==le?le:[],St=null!==(se=de("Link Rating"))&&void 0!==se?se:"",Ft=[!1,"#000000",!1,"#000000"],Ct=[Wr(de("Stat Style - Is Custom"),Ft[0]),Ar(de("Stat Style - Fill Color"),Ft[1]),Wr(de("Stat Style - Has Shadow"),Ft[2]),Ar(de("Stat Style - Shadow Color"),Ft[3])],Tt=[Wr(de("Type Style - Is Custom"),Ft[0]),Ar(de("Type Style - Fill Color"),Ft[1]),Wr(de("Type Style - Has Shadow"),Ft[2]),Ar(de("Type Style - Shadow Color"),Ft[3])],Lt=[Wr(de("Effect Style - Is Custom"),Ft[0]),Ar(de("Effect Style - Fill Color"),Ft[1]),Wr(de("Effect Style - Has Shadow"),Ft[2]),Ar(de("Effect Style - Shadow Color"),Ft[3])],Nt=[Wr(de("Pendulum Effect Style - Is Custom"),Ft[0]),Ar(de("Pendulum Effect Style - Fill Color"),Ft[1]),Wr(de("Pendulum Effect Style - Has Shadow"),Ft[2]),Ar(de("Pendulum Effect Style - Shadow Color"),Ft[3])],Rt=[Wr(de("Other Style - Is Custom"),Ft[0]),Ar(de("Other Style - Fill Color"),Ft[1]),Wr(de("Other Style - Has Shadow"),Ft[2]),Ar(de("Other Style - Shadow Color"),Ft[3])];let Bt={};try{var zt;Bt=JSON.parse(null!==(zt=de("External Info (JSON)"))&&void 0!==zt?zt:"{}")}catch(It){console.error("csvToCardList",It)}const Et=de("Flag").split("|").map(Number).slice(0,W);return{id:Object(L.a)(),...ce,art:dt,artCrop:mt,artFinish:je,artFit:ut,artSource:"online",atk:Fe,attribute:xe,background:ht,backgroundCrop:vt,backgroundFit:gt,backgroundSource:"online",backgroundType:ft,cardIcon:Ce,condenseTolerant:et,creator:Te,def:Le,effect:Ne,effectStyle:{condenseTolerant:et,upSize:tt,fontStyle:rt,background:ot},effectTextStyle:Lt,externalInfo:Bt,finish:Re,flag:Et,foil:ve,format:Be,frame:ue,furiganaHelper:ze,hasBackground:pt,isDuelTerminalCard:$e,isFirstEdition:Pe,isLegacyCard:Ke,isLimitedEdition:Ye,isLink:Ot,isPendulum:Ge,isSpeedCard:Ue,leftFrame:be,linkMap:kt,linkRating:St,name:Ee,nameStyle:jt,nameStyleType:xt,opacity:st,otherFinish:[Oe,ke,we,Se],otherTextStyle:Rt,password:Ie,pendulumEffect:Ve,pendulumFrame:Xe,pendulumRightFrame:pe,pendulumScaleBlue:_e,pendulumScaleRed:qe,pendulumSize:Je,pendulumStyle:{upSize:at,fontStyle:nt,background:it},pendulumTextStyle:Nt,rightFrame:me,setId:We,star:fe,starAlignment:De,statTextStyle:Ct,sticker:He,subFamily:Ae,typeAbility:Qe,typeTextStyle:Tt}})).filter((e=>null!=e))}catch(t){return console.error("csvToCardList",t),[]}},Pr=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),o=!!r&&isFinite(r);if(n&&!o)return-1;if(!n&&o)return 1;if(n&&o)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const i="?"===e?1:""===e?-1:0,l="?"===t?1:""===t?-1:0;return l-i===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):l-i},$r=(e,t)=>e.name.localeCompare(t.name),Yr=(e,t)=>e.setId.localeCompare(t.setId),Ur=(e,t)=>Pr(e.atk,t.atk),Kr=(e,t)=>Pr(e.def,t.def),Gr=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:Pr(e.star,t.star),Xr=(e,t)=>{var a,r,n,o;const i=je[t.frame].sortWeight-je[e.frame].sortWeight;if(0!==i)return i;return(null!==(a=null===(r=je[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(o=je[e.pendulumFrame])||void 0===o?void 0:o.sortWeight)&&void 0!==n?n:1e3)},Vr=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||na(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},qr=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},_r={name:{key:"name",sortFunction:e=>e.map(Vr).sort(((e,t)=>qr([$r,Gr,Xr,Yr,Ur,Kr],e,t)))},atk:{key:"atk",sortFunction:e=>e.map(Vr).sort(((e,t)=>qr([Ur,Kr,Gr,Xr,$r,Yr],e,t)))},def:{key:"def",sortFunction:e=>e.map(Vr).sort(((e,t)=>qr([Kr,Ur,Gr,Xr,$r,Yr],e,t)))},set:{key:"set",sortFunction:e=>e.map(Vr).sort(((e,t)=>qr([Yr,Xr,Gr,$r,Ur,Kr],e,t)))},level:{key:"level",sortFunction:e=>e.map(Vr).sort(((e,t)=>qr([Xr,Gr,$r,Yr,Ur,Kr],e,t)))}},Jr=(e,t)=>{const a=Object.values(t).filter((e=>null!=e));return 0===a.length?e:a.reduce(((e,t)=>t(e)),e)},Zr=Object(xr.create)(Object(Lr.subscribeWithSelector)((e=>({activeId:"",cardDisplayList:[],cardList:[],filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e((e=>{let{cardList:t,filterFunctionMap:n}=e;const o={...n};if("text"===a){const e=r.toLowerCase();o[a]=t=>t.filter((t=>{let{name:a,effect:r,pendulumEffect:n}=t;return(Sa(a).toLowerCase()+Fa(r).toLowerCase()+Fa(n).toLowerCase()).includes(e)}))}return{filterFunctionMap:o,cardDisplayList:Jr(t,o)}}))},resetFilter:()=>{e((e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}}))},addCard:t=>e((e=>{let{cardList:a}=e;const r={id:Object(L.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}})),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e((e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}})),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e((e=>{let{cardList:r,cardDisplayList:n,isListDirty:o}=e,i=o;if(!1===i&&a){const e=r.find((e=>e.id===t.id));i=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:o,backgroundCrop:i,...l}=t;return Object(ma.a)(n,l)&&ka(a,o)&&ka(r,i)})(t,e)}return{isListDirty:i,cardList:r.map((e=>e.id===t.id?{...t}:e)),cardDisplayList:n.map((e=>e.id===t.id?{...t}:e))}}))},setActiveId:t=>e({activeId:t}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e((e=>{var a,r,n,o;let{cardList:i,activeId:l,cardDisplayList:s}=e;const c=i.filter((e=>e.id!==t)),d=s.filter((e=>e.id!==t)),u=d.findIndex((e=>e.id===l));return{activeId:l===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(o=d[0])||void 0===o?void 0:o.id)&&void 0!==a?a:"":l,cardList:c,cardDisplayList:d}}))},duplicateCard:t=>{e((e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex((e=>{let{name:a}=e;return a===t.name})),o=Object(L.a)(),i={...Object(ua.a)(t),name:`${t.name} - Copy`,id:o},l=n<0?[...a,i]:[...a.slice(0,n),a[n],i,...a.slice(n+1,a.length)];return{activeId:o,pendingActiveCard:i,cardList:l,cardDisplayList:Jr(l,r)}}))},sortList:t=>{e((e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:_r[t].sortFunction(a),cardList:_r[t].sortFunction(r)}}))}})))),Qr=(e,t)=>{const a=Object(L.a)();let r=wt(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=ga(a);r=Object.keys(e).length>0?ya(e,t):ya(a,t)}else if(xa(a))r=ya(a);else if(ja(a)){const e=ga(a);r=ya(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:o}=Ua(e);n=t,r=o}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=Ua(a);n=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:n,effect:o,boxSize:i,copyright:l,icon:s,id:c,image:d,layout:u,level:m,link:b,pendulum:p,rarity:f,serial:g,type:y,variant:x,version:j}=e,{red:O,blue:w,boxSize:k,boxSizeEnabled:F,effect:C,enabled:T}=p,L=La[s],N=za[n],R=Ia[u],B="string"===typeof(z=d)&&z.startsWith("data:image/");var z;const E=parseInt(m),I=f?Wa[f.toLowerCase()]:void 0;let W=void 0===L||void 0===N||void 0===R||void 0===I;const{finish:D,artFinish:H,text:A}=null!==I&&void 0!==I?I:{},M=A?S[A]:null;return{isPartial:W,result:{...wt(),finish:null!==D&&void 0!==D?D:[],name:t,nameStyleType:A?"predefined":"auto",nameStyle:M?M.value:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},atk:a,def:r,attribute:null!==N&&void 0!==N?N:h,effect:o,creator:l,subFamily:null!==L&&void 0!==L?L:v,setId:c,frame:null!==R&&void 0!==R?R:"normal",star:`${E}`===m&&E<=13?E:m,typeAbility:y.split("/").map((e=>e.trim())),art:B?"":d,artFit:!0,artData:B?d:"",artSource:B?"offline":"online",artFinish:null!==H&&void 0!==H?H:"normal",isLink:"link"===R&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter((e=>"string"===typeof e)),isPendulum:T,pendulumScaleBlue:w,pendulumScaleRed:O,pendulumEffect:C,pendulumSize:Ra[k],password:g,externalInfo:{version:j,variant:x,boxSize:i,rarity:f,pendulum:{boxSize:k,boxSizeEnabled:F}}}}})(a);n=e,r=t}}catch(o){console.error("decodedCard",e,o);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?va(e):"string"===typeof e?JSON.parse(e):e,ya(t)}(e,!0),mr.a.info({message:Tr()["service.decode.outdated.message"],description:Tr()["service.decode.outdated.description"]})}catch(o){console.error("cardData",e,o),mr.a.error({message:Tr()["service.decode.error.message"],description:Tr()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},en={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},tn=Object(xr.create)(((e,t)=>({card:Ot(),setCard:(t,a)=>{const r=Zr.getState().changeActiveCard;if("function"===typeof t)e((e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}}));else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(L.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:o}=t(),i=t=>{o((a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}}))};if(!n)return i;const l="string"===typeof n?null!==(a=en[n])&&void 0!==a?a:void 0:n;if(!l)return i;const{wait:s,type:c}=l;return"debounce"===c?Or()(i,s):"throttle"===c?kr()(i,s):i}}))),an=Object(xr.create)((e=>{const{allowHotkey:t,exportFormat:a,globalScale:r,mirrorPendulumScale:n,reduceMotionColor:o,resolution:i,showCreativeOption:l,showExtraAttribute:c,showExtraDecorativeOption:d}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{globalScale:"number"===typeof r&&r<=s.maximumScale?r:1,exportFormat:"string"===typeof a?a:"csv",resolution:Array.isArray(i)&&"number"===typeof i[0]&&"number"===typeof i[1]?i:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof o&&o,showCreativeOption:"boolean"!==typeof l||l,showExtraAttribute:"boolean"!==typeof c||c,showExtraDecorativeOption:"boolean"!==typeof d||d,mirrorPendulumScale:"boolean"===typeof n&&n},updateSetting:t=>{e((e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}}))}}})),rn=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:o,onExport:i,onDownloadError:l,onDownloadComplete:s}=e;const c=Cr(),{card:d}=tn(),u=an((e=>e.setting.resolution)),{opacity:m,name:b,isPendulum:p,pendulumSize:h}=d,f=Object(r.useRef)(!1),g=Object(r.useCallback)((function(){var e;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=n.current,o=null===r||void 0===r?void 0:r.cloneNode(),i=null===r||void 0===r?void 0:r.getContext("2d"),c=null===o||void 0===o?void 0:o.getContext("2d");if(r&&i&&o&&c&&!t)try{a&&(o.width=a[0],o.height=a[1]),c.drawImage(r,0,0,r.width,r.height,0,0,o.width,o.height);const e=Sa(b);var d=document.createElement("a");d.download=e?`${e}.png`:"card.png",d.href=o.toDataURL("image/png"),d.click()}catch(m){l()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()}),[n,t,b,u,s,l]);return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const t=Sa(b);e&&(document.title=t?`${t} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")}),500),()=>{e=!1}}),[b]),Object(r.useEffect)((()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.3.0")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}})),Object(r.useEffect)((()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.3.0")?r:"unknown")}catch(l){const e="fail-to-set-storage-notification";mr.a.close(e),mr.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,r,l,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(l=document.getElementById("export-canvas-guard"))||void 0===l||l.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),o.current.pipelineRunning=!0,await o.current.currentPipeline,e&&(o.current.currentPipeline=i({isPendulum:p,opacity:m,pendulumSize:h,isRelevant:()=>e}),await o.current.currentPipeline,e))){var c,u,b,v;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(fa(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(b=document.getElementById("export-canvas-guard"))||void 0===b||b.setAttribute("style","display: none"),null===(v=document.getElementById("save-button-waiting"))||void 0===v||v.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),o.current.pipelineRunning=!1,f.current&&(f.current=!1,g())}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}})),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout((()=>{!1===o.current.pipelineRunning?g(a):f.current=!0}),200)},isPipelineRunning:()=>o.current.pipelineRunning}},{height:nn,width:on,maximumScale:ln}=s,sn=()=>"#000000".replace(/0/g,(()=>(~~(12*Math.random()+2)).toString(16))),cn=e=>{let{ctx:t,color:a=sn(),width:r,offset:n=4,edge:o,baseline:i,xRatio:l}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(o/l,i+1+Math.random()*n,r/l,2),t.fillStyle=s},dn=(e,t,a,r,n,o)=>{if(!e||!t)return r;const{stroke:i=!1}=null!==o&&void 0!==o?o:{};e.textAlign="left";const l=t.split("");let s=r;return l.forEach((t=>{e.fillText(t,s,n),i&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2})),s},un=(e,t,a,r,n,o)=>{if(!e||!t)return r;const{stroke:i=!1}=null!==o&&void 0!==o?o:{};e.textAlign="right";const l=t.split("");let s=r;return l.forEach(((t,r)=>{const o=l[l.length-r-1];e.fillText(o,s,n),i&&e.strokeText(o,s,n),s-=e.measureText(o).width*(2+a)/2})),s},mn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:on*ln,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:nn*ln;return!!e&&(e.clearRect(0,0,t,a),!0)},bn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V;return async(a,r,n,o)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var i,l;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(i=t[r])&&void 0!==i?i:[],u=o?null!==(l=c[o])&&void 0!==l?l:o:z;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},pn="#000000",hn="#000000",fn="#000000",gn=e=>{var t,a;let{ctx:r,x:n,y:o,blur:i,color:l,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:b=1,useDefault:p=!0}=e;return(p||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*b),(p||"number"===typeof o)&&(r.shadowOffsetY=(null!==o&&void 0!==o?o:0)*b),(p||"number"===typeof i)&&(r.shadowBlur=(null!==i&&void 0!==i?i:0)*b),(p||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:hn),(p||"string"===typeof l)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:l)&&void 0!==t?t:fn),(p||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:pn),(p||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*b),()=>{(p||"number"===typeof n)&&(r.shadowOffsetX=0),(p||"number"===typeof o)&&(r.shadowOffsetY=0),(p||"number"===typeof i)&&(r.shadowBlur=0),(p||"string"===typeof c)&&(r.shadowColor=hn),(p||"string"===typeof l)&&(r.fillStyle=fn),(p||"string"===typeof d)&&(r.strokeStyle=pn),(p||"number"===typeof m)&&(r.lineWidth=0)}},vn={},yn=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var o,i;if(!0===(null===(o=vn[t])||void 0===o?void 0:o.ready)){const o=vn[t].image,i="number"===typeof a?a:a(o),l="number"===typeof r?r:r(o);return e.drawImage(o,i,l),void setTimeout((()=>n(!0)),0)}if(null!==(i=vn[t])&&void 0!==i&&i.error)return void setTimeout((()=>n(!0)),0);const l=vn[t]&&(vn[t].cache||vn[t].ready),s=l?vn[t].image:new Image;l||(s.src="/ygocarder"+t),s.addEventListener("load",(()=>{const o="number"===typeof a?a:a(s),i="number"===typeof r?r:r(s);e.drawImage(s,o,i),vn[t]&&(vn[t].ready=!0,vn[t].error=!1),n(!0)}),{once:!0}),s.addEventListener("error",(()=>{vn[t]&&(vn[t].error=!0),n(!1)}),{once:!0}),l||(vn[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},xn=async(e,t,a,r,n,o,i,l,s,c)=>await(async(e,t,a,r,n,o,i,l,s,c)=>new Promise(e&&""!==t?d=>{var u,m;if(!0===(null===(u=vn[t])||void 0===u?void 0:u.ready)){const u=vn[t].image,m="number"===typeof a?a:a(u),b="number"===typeof r?r:r(u),p="number"===typeof n?n:n(u),h="number"===typeof o?o:o(u),f="number"===typeof i?i:null===i||void 0===i?void 0:i(u),g="number"===typeof l?l:null===l||void 0===l?void 0:l(u),v="number"===typeof s?s:null===s||void 0===s?void 0:s(u),y="number"===typeof c?c:null===c||void 0===c?void 0:c(u);return"number"===typeof f&&"number"===typeof g&&"number"===typeof v&&"number"===typeof y?e.drawImage(u,f,g,v,y,m,b,p,h):e.drawImage(u,m,b,p,h),void setTimeout((()=>d(!0)),0)}if(null!==(m=vn[t])&&void 0!==m&&m.error)return void setTimeout((()=>d(!0)),0);const b=vn[t]&&(vn[t].cache||vn[t].ready),p=b?vn[t].image:new Image;b||(p.src="/ygocarder"+t),p.addEventListener("load",(()=>{const u="number"===typeof a?a:a(p),m="number"===typeof r?r:r(p),b="number"===typeof n?n:n(p),h="number"===typeof o?o:o(p),f="number"===typeof i?i:null===i||void 0===i?void 0:i(p),g="number"===typeof l?l:null===l||void 0===l?void 0:l(p),v="number"===typeof s?s:null===s||void 0===s?void 0:s(p),y="number"===typeof c?c:null===c||void 0===c?void 0:c(p);"number"===typeof f&&"number"===typeof g&&"number"===typeof v&&"number"===typeof y?e.drawImage(p,f,g,v,y,u,m,b,h):e.drawImage(p,u,m,b,h),vn[t]&&(vn[t].ready=!0,vn[t].error=!1),d(!0)}),{once:!0}),p.addEventListener("error",(()=>{vn[t]&&(vn[t].error=!0),d(!1)}),{once:!0}),b||(vn[t]={image:p,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,r,n,o,i,l,s,c),jn=async(e,t,a,r,n,o,i,l)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=o;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await xn(d,t,0,0,n,o),null!==l&&void 0!==l&&l.color&&(d.fillStyle=l.color,d.fillRect(0,0,n,o),d.globalCompositeOperation="destination-in"),await xn(d,t,0,0,n,o),d.globalCompositeOperation="source-over";const u=gn({ctx:s,...l,globalScale:i});s.drawImage(c,a,r),u()},On=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:o=!1,debug:i,fontStyle:l,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(Ge.test(n))return{width:0,boundWidth:0};const u="tcg"===l?ft:bt,m="tcg"===l?pt:ut,b="tcg"===l?ht:mt,p=r.measureText(n),{width:h,actualBoundingBoxLeft:f,actualBoundingBoxRight:g}=p,v=f+g;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=o?b[n]:m[n])&&void 0!==t?t:0;if("tcg"===l){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[n])&&void 0!==w?w:0)*h),metric:p,offsetRatio:O}}let k=(null!==(a=u[n])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;ot.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):it.test(n)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):Je.test(n)?j="furigana"===c?v:Math.max(v,.7*h):tt.test(n)?j=h:st.test(n)?j=2*v:ct.test(n)?j=1.25*v*(o?.5:1):rt.test(n)?j="furigana"===c?v:Math.max(v,.75*h):nt.test(n)?j=Math.max(v,.69*h)*("creator"===c?.975:1):lt.test(n)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const F=1*h*1;return i&&console.info(`getLetterWidth ${i}`,n,p,1,1,"|",F),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:p,offsetRatio:O}},wn=e=>{var t;let{ctx:a,baseline:r,edge:n,letter:o,xRatio:i,deviation:l,letterMetric:s,textDrawer:c}=e;const{boundWidth:d,metric:u=a.measureText(o),offsetRatio:m=0}=null!==s&&void 0!==s?s:{},{letterMap:b={},threshold:p=10}=null!==l&&void 0!==l?l:{},{uniformBoxDescent:h}=null!==(t=b[o])&&void 0!==t?t:{},f=u.width*i,g=d?d*i:f,v=null!==c&&void 0!==c?c:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},y=(f-g)/2,x=g*m;let j=1,O=0;if("number"===typeof h&&i>=p){const{actualBoundingBoxDescent:e,actualBoundingBoxAscent:t}=a.measureText(o);O=h-e;const r=t+e;j=(r+2*O)/r}a.scale(1,j),v({ctx:a,letter:o,scaledEdge:n/i-y-x,scaledBaseline:(r+O)/j}),a.scale(1,1/j)},kn=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${yt}])|(${Ie}[\\w\\W]+?${We})|(.+?)`):new RegExp(`([${yt}])|${Ie}([\\w\\W]+?)${We}|(.+?)`);return e.split(t).filter((e=>null!=e&&""!==e))},Sn=(e,t,a,r,n)=>{const o=rr(Q,n),{fontSize:i,ordinalFontRatio:l=o.ordinalFontRatio,headTextFontRatio:s=o.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:b=c,numberFontRatio:p=1,furiganaFont:h}=t;let f=r.getFontInfo();let g=r.getFontInfo();let v=r.getFontInfo();let y=r.getFontInfo();let x=r.getFontInfo();return{applyNumberFont:()=>{f=r.getFontInfo(),e.font=r.setFamily(b).setSize(i*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(f.family).setSize(f.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;x=r.getFontInfo(),e.font=r.setSize(i*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(x.size).getFont()},applySymbolFont:()=>{g=r.getFontInfo(),e.font=r.setFamily(u).setSize(i*m).getFont()},stopApplySymbolFont:()=>{e.font=r.setFamily(g.family).setSize(g.size).getFont()},applyOrdinalFont:()=>{v=r.getFontInfo(),e.font=r.setFamily(d).setSize(i*l).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(v.family).setSize(v.size).getFont()},applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y=r.getFontInfo(),e.font=r.setFamily(h).setWeight(t?"bold":"").setSize(i*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(y.family).setWeight(y.weight).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},Fn=(e,t,a,r,n)=>{const o=(r-n)/2;e.beginPath(),e.arc(t+o,a-o,o,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Cn=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:o,headTextSpacing:i,gapPadding:l,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,b=n/a*d;let p=i,h=0;b<=.95?p=1*i:b<=1.175?p=i>=0?0:3*i:b<=1.56?p=i>=0?-1*i/4:3*i:(h=.66,p=i>=0?-1*i/4:2*i),(c||u>0&&u<1)&&(p=i);const f=n*(u&&!c?u:!h||c?1:h)+p*(r.length-1),g=m?0:(a-n)/r.length,v=a,y=1===t.length||2*l+f>a?"center":"space-around",x="center"===y?p:g,j="center"===y?2*l+f:v,O=c?Math.min(j,a):j,w="center"===y?(f-a)/2:0,k=Math.max(o,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,k),{gapPadding:l,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},Tn=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Ln=e=>{let{ctx:t,token:a,nextToken:r,xRatio:n,previousTokenGap:o=0,letterSpacing:i,format:l,globalScale:s,textData:c}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const d=rr(Q,s),u=null!==i&&void 0!==i?i:d.letterSpacing,{currentFont:m,fontData:b,fontLevel:p}=c,{metricMethod:h,headTextGapRatio:f=ee.headTextGapRatio,headTextOverflow:g=ee.headTextOverflow,fontStyle:v}=b,y=b.fontList[p],{bulletWidth:x,capitalLetterRatio:j,fontSize:O,iconSymbolWidth:w=x,largeSymbolRatio:k=d.largeSymbolRatio,headTextSpacing:S=d.headTextSpacing,squareBracketRatio:F,wordLetterSpacing:C}=y,T=-.5*O,{applyScale:L,reverseScale:N,applyLargerText:R,stopApplyLargerText:B,applyFuriganaFont:z,stopApplyFuriganaFont:E,applyOrdinalFont:I,stopApplyOrdinalFont:W,applySymbolFont:D,stopApplySymbolFont:H,applyNumberFont:A,stopApplyNumberFont:M}=Sn(t,b,y,m,s),P=1+u/2;let $="",Y=0,U=0,K=!1;const G=void 0===r;let X=null!==o&&void 0!==o?o:0,V=!1,q=0;const _=a.replaceAll(new RegExp(Ke,"g"),"").split(Ee).filter((e=>null!=e&&""!==e));for(let J=0;J<_.length;J++){const e=0===J,a=_[J];if("\u29be"===a){X=0;Y+=w/n*P,e&&(q=0,$=a[0])}else if("\u25cf"===a){X=0;Y+=x/n*P,e&&(q=0,$=a[0])}else if(/[\xa9]/.test(a)){X=0,R(k);const r=t.measureText(a).width/n;B(),Y+=r*P,e&&(q=0,$=a[0])}else if(Qe.test(a)){X=0,I();const r=t.measureText(a).width/n;W(),Y+=r*P,U+=1,e&&(q=0,$=a[0])}else if(vt.test(a)){const[o,i,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),m="||"===i,{totalWidth:b}=Ln({ctx:t,token:o,nextToken:r,xRatio:n,letterSpacing:u,previousTokenGap:0,format:l,textData:c,globalScale:s});z();const p=d.split("").map((e=>On({ctx:t,letter:e,fontStyle:v,metricMethod:"furigana",xRatio:1,globalScale:s}).boundWidth)).reduce(((e,t)=>e+t),0);E();const{halfGap:h,headTextWidth:y}=Cn({headText:d,headTextLetterWidth:p/n,footText:o,footTextWidth:b,headTextGap:T/n,headTextSpacing:S,gapPadding:f*O/n,fitFootText:m,sentenceXRatio:n,xRatio:"condense"===g&&o.length>1?Math.min(1,n+.1):0}),x=0===d.length?Math.max(T,b/xt):h,j=x,w=x,k=Math.max(y,b),F=Tn(X,j);X=w,Y+=k-F,U+=1,e&&(V=!0,q=j,$=o[0])}else if(ze.test(a)){const r=C?1+C/2:P;t.letterSpacing=(r-1)*m.getFontInfo().sizeAsNumber+"px";let n=a,o=0;for(;""!==n;){let e=n[0],a=n.slice(1),r=t.measureText(n).width-t.measureText(a).width;Re.test(e)?(L(F),r=t.measureText(n).width-t.measureText(a).width,N(F)):Ne.test(e)?(L(j),r=t.measureText(n).width-t.measureText(a).width,N(j)):at.test(e)?(A(),r=t.measureText(n).width-t.measureText(a).width,M()):Ve.test(e)&&"tcg"===v?(D(),r=t.measureText(n).width-t.measureText(a).width,H()):r=t.measureText(n).width-t.measureText(a).width,o+=r,n=a}const i=Math.max(T,o/xt),l=i;Y+=o-Tn(X,i),X=l,e&&(q=i,$=a[0]),t.letterSpacing="0px"}else if(Ve.test(a)&&"tcg"===v){D();const r=t.measureText(a).width*P;H();const n=Math.max(T,r/xt),o=n;Y+=r-Tn(X,n),X=o,e&&(q=n,$=a[0])}else{const{boundWidth:r}=On({ctx:t,letter:a,isLastOfLine:G,fontStyle:v,metricMethod:h,xRatio:n,globalScale:s}),o=r*P,i=Math.max(T,o/xt),c=i;Y+=o-Tn(X,i),X=c,("ocg"===l||"tcg"===l&&/\s+/.test(a))&&!1===lt.test(a)&&(U+=1,J===_.length-1&&(K=!0)),e&&(q=i,$=a[0]),dt.test(a)&&(q=0,X=0)}}return{totalWidth:Y,spaceCount:U,spaceAtEnd:K,leftMostLetter:$,rightGap:X,leftGap:q,offsetable:V}},Nn=e=>{let{ctx:t,line:a,width:r,xRatio:n,format:o,isLast:i,textData:l,globalScale:s}=e;const c=kn(a);let d=0,u=0,m=0;for(let p=0,h=n;p<c.length;p++){const e=c[p],a=c[p+1];if(e===Pe){h=1;continue}if(e===$e){h=n;continue}const{spaceCount:r,totalWidth:i,spaceAtEnd:b,leftGap:f,rightGap:g,leftMostLetter:v}=Ln({ctx:t,token:e,nextToken:a,xRatio:h,previousTokenGap:m/h,textData:l,format:o,globalScale:s});m=g*h,d+=i*h+((0===p&&f>0?-1*Math.min(20*s,f*h):0)+(0===p&&et.test(v)?4*s*h:0)),u+=r-(b&&void 0===a?1:0)}const b=u>0?(r-d)/u:0;return{tokenList:c,spaceWidth:i?"tcg"===o?b>1.5*s?0:b:b>3.65*s?0:b:b}},Rn=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:o,format:i,textData:l,globalScale:s}=e;const{fontData:c,fontLevel:d}=l,{letterSpacing:u}=c.fontList[d],m=[],b=r.reduce(((e,r)=>{const n=(a<=100?100:a)/1e3,c=o/n,d=kn(r,!0);let b=1,p=[],h=0,f=0,g=0;for(let o=0,y=n;o<d.length;o++){const e=d[o],r=d[o+1];e===Pe?(g+=1,y=1):e===$e&&(g-=1,y=n);let{leftMostLetter:v,totalWidth:x,rightGap:j,leftGap:O}=Ln({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:f,format:i,letterSpacing:u,textData:l,globalScale:s});let w=x/(g>0?n:1)+(0===o?(O>0?-1*Math.min(20*s/y,O):0)+(et.test(v)?4*s:0):0);if(h+w>c){let n=p.join("").trim();g>0&&(n+=$e),g<0&&(n=Pe+n),g=0,m.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:h});let{totalWidth:o,rightGap:c,leftGap:d}=Ln({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:0,format:i,textData:l,globalScale:s});h=o+((d>0?-1*Math.min(20*s/y,d):0)+(et.test(v)?4*s:0)),f=c,p=[e],b+=1}else h+=w,f=j,p.push(e)}let v=p.join("").trim();return g>0&&(v+=$e),g<0&&(v=Pe+v),g=0,m.push({line:v,effectiveMedian:a,isLast:!0,actualLineWidth:h}),e+b}),0)+(null!==n&&void 0!==n?n:0);return{currentLineList:m,currentLineCount:b}},Bn=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:o,headTextLetterWidth:i,footText:l,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:b,globalScale:p,xRatio:h,fontStyle:f,textWorker:g,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=g,k="condense"===y&&l.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:F,trueHeadTextWidth:C,halfGap:T,alignment:L,headTextXRatio:N}=Cn({headText:o,headTextLetterWidth:i,footText:l,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*b,fitFootText:v,sentenceXRatio:h,xRatio:k}),R=C>s*h;if(0===o.length)return{trueHeadTextWidth:C,halfGap:T};const B=v?Math.min(1,s*h/C):1,z=v?B:k&&"center"===L?k:N;let E=r;O(),(v||z)&&(w(z,1),E=r/z),"center"===L?(E+=S,R?z>B&&(E+=(s*h/z-C)/2/z):E+=(s*h-C)/2):E+=F/2;for(const I of o){x();const{width:e,boundWidth:r}=On({ctx:t,letter:I,fontStyle:f,metricMethod:"furigana",xRatio:1,globalScale:p}),o=(e-r)/2;j(),x(m),t.fillText(I,E-o,n-a*u),j(),E+=r+F}return(v||z)&&O(),w(h,1),{trueHeadTextWidth:C,halfGap:T}},zn=e=>{let{ctx:t,tokenList:a,trueEdge:r,trueBaseline:n,spaceWidth:o=0,xRatio:i,yRatio:l=1,textData:s,format:c,textDrawer:d,debug:u=!1,option:m,globalScale:b}=e;const{drawHeadText:p=!0}=null!==m&&void 0!==m?m:{},{currentFont:h,fontData:f,fontLevel:g}=s,v=f.fontList[g],{headTextFillStyle:y,headTextBold:x=ee.headTextBold,headTextHeightRatio:j=ee.headTextHeightRatio,headTextOverflow:O=ee.headTextOverflow,headTextGapRatio:w=ee.headTextGapRatio,metricMethod:k,fontStyle:S,letterDeviationMap:F={}}=f,C=rr(Q,b),{bulletOffset:T=C.bulletOffset,bulletWidth:L,capitalLetterRatio:N=C.capitalLetterRatio,fontSize:R,headTextSpacing:B=C.headTextSpacing,iconSymbolWidth:z=L,largeSymbolRatio:E=C.largeSymbolRatio,letterSpacing:I=C.letterSpacing,ordinalFontOffsetY:W=C.ordinalFontOffsetY,squareBracketRatio:D=C.squareBracketRatio,wordLetterSpacing:H,allRightSymbolOffset:A=C.allRightSymbolOffset}=v,M=Sn(t,f,v,h,b),{stopApplyFuriganaFont:P,applyFuriganaFont:$,stopApplyLargerText:Y,applyLargerText:U,stopApplyNumberFont:K,applyNumberFont:G,stopApplyOrdinalFont:X,applyOrdinalFont:V,applyScale:q,reverseScale:_,applySymbolFont:J,stopApplySymbolFont:Z,applyAsymmetricScale:te,resetScale:ae}=M,re=1+I/2,ne=n/l;let oe=0,ie=[],le=0,se=r;for(let Q=0,ee=i;Q<a.length;Q++){const e=a[Q];if(e===Pe){ee=1,t.setTransform(1,0,0,1,0,0);continue}if(e===$e){ee=i,t.scale(ee,1);continue}const r=-.5*ee,m=R*r,f=a[Q+1],g=a[Q+2],v={ctx:t,xRatio:ee,letterSpacing:I,format:c,textData:s,globalScale:b},C={ctx:t,baseline:ne,xRatio:ee,textDrawer:d},ue=e.split(Ee).filter((e=>null!=e&&""!==e)),{leftMostLetter:me,leftGap:be,rightGap:pe,totalWidth:he,spaceCount:fe}=Ln({token:e,nextToken:f,previousTokenGap:oe/ee,...v}),ge=0===Q?(be>0?-1*Math.min(20*b,be*ee):0)+(et.test(me)?4*b:0):0;let ve=se+ge,ye=oe;for(let a=0;a<ue.length;a++){var ce,de;const i=ue[a],u=null!==(ce=ue[a+1])&&void 0!==ce?ce:f,I=null!==(de=ue[Q+2])&&void 0!==de?de:g;if(e===Pe||e===$e);else if("\u29be"===i)ie.push({edge:ve,size:z,baseline:ne}),ve+=z*re,ye=0,le=0;else if("\u25cf"===i)ae(),Fn(t,ve,n+T-1*b,L,gt(c)*b),ve+=L*re,te(ee,l),ye=0,le=0;else if(/[\xa9]/.test(i))ae(),U(E),wn({...C,letter:i,edge:ve*ee,baseline:n+("tcg"===c?A:2*A)}),ve+=t.measureText(i).width*re,Y(),te(ee,l),ye=0,le=0;else if(Qe.test(i))ae(),V(),wn({...C,letter:i,edge:ve*ee,baseline:n+W}),ve+=t.measureText(i).width*re,X(),te(ee,l),ve+=o,ye=0,le=0;else if(vt.test(i)){const[e,a,n=""]=i.replaceAll(/{|}/g,"").split(/(\|+)/),h="||"===a,{totalWidth:f}=Ln({token:e,nextToken:u,previousTokenGap:0,...v});$();const g=n.split("").map((e=>On({ctx:t,letter:e,fontStyle:S,metricMethod:"furigana",xRatio:1,globalScale:b}).boundWidth)).reduce(((e,t)=>e+t),0);P();const{headTextWidth:k,halfGap:F}=Cn({headText:n,headTextLetterWidth:g,footText:e,footTextWidth:f*ee,headTextGap:m,headTextSpacing:B*ee,gapPadding:R*w,fitFootText:h,sentenceXRatio:ee,xRatio:"condense"===O&&e.length>1?Math.min(1,ee+.1):0}),C=0===n.length?Math.max(m,f*r):F,T=C,L=C,N=Tn(ye,L),z=L>0?L-N:0,{offsetable:E,leftGap:W}=Ln({token:u,nextToken:I,previousTokenGap:T/ee,...v}),D=W*ee,H=Tn(T,D),A=z+(T>0?T-H:0);let Y=0,U=0;A>0&&D>=-2*b&&E?(Y=(A+2*Math.max(D,0))/3,U=Math.max(D,0)-Y):Y=z;const K=ve+(C<0?-N:ge?-ge:Y)+le;le=U,zn({ctx:t,format:c,textData:s,tokenList:kn(e),trueBaseline:ne,trueEdge:K,xRatio:ee,yRatio:l,spaceWidth:0,textDrawer:d,globalScale:b,debug:!1});const G=t.fillStyle,X=t.strokeStyle,V=t.shadowColor,q=t.shadowOffsetX,_=t.shadowOffsetY,J=t.shadowBlur;y&&(t.fillStyle=y,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);p&&Bn({ctx:t,fontSize:R,edge:ve-N,baseline:ne,headText:n,headTextLetterWidth:g,footText:e,footTextWidth:f,headTextGap:m,headTextSpacing:B,headTextHeightRatio:j,headTextBold:x,headTextGapRatio:w,xRatio:ee,fontStyle:S,textWorker:M,fitFootText:h,headTextOverflow:O,globalScale:b}),t.fillStyle=G,t.strokeStyle=X,t.shadowColor=V,t.shadowOffsetX=q,t.shadowOffsetY=_,t.shadowBlur=J,ve+=Math.max(f*ee,k)-N+o,ye=T}else if(ze.test(i)){const e=H?1+H/2:re;t.letterSpacing=(e-1)*h.getFontInfo().sizeAsNumber+"px";const a=t.measureText(i).width*ee,n=Math.max(m,a*r),o=n;ve-=Tn(ye,n);let l=i,s=ve;for(;""!==l;){let e=l[0],a=l.slice(1),r=0;const n={...C,deviation:F[`${b}`],letter:e,edge:s};if(Re.test(e))q(D),r=t.measureText(l).width-t.measureText(a).width,wn({...n,edge:s/D,baseline:ne/D}),_(D);else if(Ne.test(e)){q(N),r=t.measureText(l).width-t.measureText(a).width;const o=r>t.measureText(e).width*N?Math.round(r*(1-N))/2:0;wn({...n,edge:s/N+o,baseline:ne/N}),_(N)}else at.test(e)?(G(),r=t.measureText(l).width-t.measureText(a).width,wn(n),K()):Ve.test(e)&&"tcg"===S?(J(),r=t.measureText(l).width-t.measureText(a).width,wn(n),Z()):(r=t.measureText(l).width-t.measureText(a).width,wn(n));s+=r*ee,l=a}ve=s,ye=o,le=0,t.letterSpacing="0px"}else if(Ve.test(i)&&"tcg"===S){const e=i;J();const a=t.measureText(e).width*re*ee,n=Math.max(m,a*r),o=n;ve-=Tn(ye,n),wn({...C,letter:e,edge:ve}),ve+=a,Z(),ye=o,le=0}else{const e=i,a=On({ctx:t,letter:e,fontStyle:S,metricMethod:k,isLastOfLine:void 0===u,xRatio:ee,globalScale:b}),n=a.boundWidth*re*ee,l=Math.max(m,n*r),s=l;ve-=Tn(ye,l),wn({...C,letter:e,edge:ve,deviation:null===F||void 0===F?void 0:F[`${b}`],letterMetric:a}),ve+=n,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==lt.test(e)&&(ve+=o),dt.test(e)||(ye=s),le=0}}oe=pe*ee,u&&cn({ctx:t,baseline:ne,edge:se,width:he*ee,xRatio:ee}),se+=he*ee+fe*o+ge}return{tokenEdge:se,iconPositionList:ie}},En=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:o="rubyForm"}=null!==a&&void 0!==a?a:{},i=null!==e&&void 0!==e?e:"";let l="",s="ocg"===t?pe:he;for(const h of i){var c;l+=null!==(c=s[h])&&void 0!==c?c:h}const d=l,u=(r?d.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${Ae}$1${Me}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${De}$1${He}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(Ue,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,(e=>{const t=fe[e];return null!==t&&void 0!==t?t:e})).replaceAll(new RegExp("{{([^{}]+?)}}","g"),(e=>e.replaceAll("{{",Pe).replaceAll("}}",$e))).replaceAll(new RegExp("{[^{}]+?}","g"),(e=>`${Ie}${e}${We}`)),m=("tcg"===t||!1===n?u:u.replaceAll(new RegExp(qe,"g"),(e=>{var t;const a=null!==(t=K[e][o])&&void 0!==t?t:K[e].rubyForm;return`${Ie}${a}${We}`}))).replaceAll(new RegExp(Be,"g"),(e=>`${Ie}${e}${We}`)).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),(e=>`${Ie}${e}${We}`)).replaceAll(new RegExp(Ze,"g"),(e=>`${Ie}${e}${We}`)).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),(e=>`${Ie}${e}${We}`)).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),(e=>`${Ie}${e}${We}`));let b=[],p=0;for(const h of m)h===Ie?(0===p&&b.push(h),p+=1):h===We?(p-=1,0===p&&b.push(h)):b.push(h);return b.join("").replaceAll(`${Me}${We}`,`${We}${Me}`).replaceAll(`${He}${We}`,`${We}${He}`).replaceAll(`${Ie}${Ae}`,`${Ae}${Ie}`).replaceAll(`${Ie}${De}`,`${De}${Ie}`).replaceAll(`${Pe}${We}`,`${We}${Pe}`).replaceAll(`${Ie}${$e}`,`${$e}${Ie}`).replaceAll(`${De}${He}`,"").replaceAll(`${Ae}${Me}`,"").replaceAll(`${Ie}${We}`,"")},In=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:o}=e;const i=[t,..."pendulumLarge"===o?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter((e=>""!==e)).join("-"),l=[t,..."pendulumLarge"===o?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter((e=>""!==e)).join("-");let s=ie[l];return a&&"tcg"===t&&oe[l]&&(s=oe[l]),{fontDataKey:l,fontData:s,sizeList:H[i]}},Wn=e=>{var t;let{ctx:a,content:r,isNormal:n=!1,fontDataKey:o="tcg",fontData:i=ie[o],textStyle:l,sizeList:s=H["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:m}=e;const{defaultSizeLevel:b,forceRelaxCondenseLimit:p,globalScale:h=1}=null!==m&&void 0!==m?m:{};let f=null!==b&&void 0!==b?b:0;if(!a||!r)return f;const g=En(r.trim(),d,{furiganaHelper:u}),{effectText:v,effectFlavorCondition:y,fullLineList:x,fullLineListOption:j}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e;const n=[],o=[],i=new RegExp([`^(${De}([^${He}]*)${He}\\s*)`,`^(${Ae}([^${Me}]*)${Me}\\s*)`].join("|"));let l,s,c,d,u=!1;do{const e=i.exec(r);l=null===e||void 0===e?void 0:e[1],s=null===e||void 0===e?void 0:e[2],c=null===e||void 0===e?void 0:e[3],d=null===e||void 0===e?void 0:e[4],u=!1,s&&l?(n.push(s),r=r.replace(l,""),o.push({alignment:"left"}),u=!0):d&&c&&(n.push(d),r=r.replace(c,""),o.push({alignment:"justify"}),u=!0)}while(u);let m="";const b=null===(t=new RegExp(Xe,"m").exec(e))||void 0===t?void 0:t[1];return b&&a?(m=b.trim(),r=r.replace(b,"")):m="",r=r.replaceAll(De,"[").replaceAll(He,"]").replaceAll(Ae,"[[").replaceAll(Me,"]]"),{fullLineList:n,fullLineListOption:o,effectText:r,effectFlavorCondition:m}}(g,n),O=(null!==(t=x.length)&&void 0!==t?t:0)+(y.length>0?1:0),w=v?v.split("\n"):[];let k=0;const S=nr(i,h),{fontList:F}=S;for(;f<=F.length&&f>=0;){var C,T,L;const e=f===F.length,t=Math.min(F.length-1,f),r=e?{1:1e3,2:1e3,3:1e3}:"tcg"===d?p&&t<p?D.relaxed:null!==(C=D[c])&&void 0!==C?C:D.strict:{1:800,2:800,3:800},{trueEdge:i,trueWidth:u,trueBaseline:m,trueHeightCap:b}=tr(null!==(T=s[t])&&void 0!==T?T:s[s.length-1],h),g=n&&"tcg"===d?u-2*h:u,v=e&&"number"===typeof b,N=v?qa(S,{heightCap:b,lineCount:k}):S,R=v?f:t,{font:B,fontList:z}=N,E=v?z[R]:F[t],{fontSize:I,lineHeight:W,lineCount:H}=E,A=Xa();a.font=A.setWeight("").setSize(I).setFamily(B).getFont(),a.textAlign="left";const M={fontData:N,fontLevel:R,currentFont:A};let P=[];const $=O>H&&"number"===typeof b?1:Ga((e=>{const{currentLineList:t,currentLineCount:r}=Rn({ctx:a,median:e,paragraphList:w,additionalLineCount:O,format:d,textData:M,width:g,globalScale:h});return P=t,!(r>H)}),200);k=P.length+O;const Y=gn({ctx:a,...l,globalScale:h});if(!($<(null!==(L=r[`${w.length}`])&&void 0!==L?L:r[3])&&f<F.length)){mn(a);let e=m+W;if([...x.map(((e,t)=>({line:e,isLast:"justify"!==j[t].alignment,effectiveMedian:Ga((t=>{const{currentLineCount:r}=Rn({ctx:a,median:t,paragraphList:[e],format:d,textData:M,width:g,globalScale:h});return!(r>1)}))}))),...P].forEach((t=>{let{line:r,isLast:n,effectiveMedian:o}=t;const l=o/1e3,{tokenList:s,spaceWidth:c}=Nn({ctx:a,line:r,xRatio:l,format:d,isLast:n,textData:M,width:g,globalScale:h});a.scale(l,1),zn({ctx:a,tokenList:s,xRatio:l,yRatio:1,trueEdge:i,trueBaseline:e,spaceWidth:c,textData:M,format:d,globalScale:h}),e+=W,a.setTransform(1,0,0,1,0,0)})),y.length>0&&ie[o]){const r=nr(ie[o],h),n=v?qa(r,{heightCap:b,lineCount:k}):r,l=v?n.fontList[R]:r.fontList[t],{fontSize:s,lineHeight:c}=l,u=Xa();a.font=u.setSize(s).setFamily(r.font).getFont();const m={fontData:n,fontLevel:R,currentFont:u},p=Ga((e=>{const{currentLineCount:t}=Rn({ctx:a,median:e,paragraphList:[y],format:d,textData:m,width:g,globalScale:h});return!(t>1)}))/1e3;a.scale(p,1);const f=kn(y);zn({ctx:a,tokenList:f,xRatio:p,yRatio:1,trueEdge:i,trueBaseline:e,textData:m,format:d,globalScale:h}),e+=c,a.setTransform(1,0,0,1,0,0)}break}f+=1,Y()}return f},{width:Dn,finishTypeCardWidth:Hn,stickerSize:An}=s,{width:Mn,height:Pn,topToPendulumStructure:$n}=s,Yn={topRight:(async()=>{const e=document.createElement("canvas");e.width=Mn,e.height=Pn;const t=e.getContext("2d");return t?(await yn(t,"mask/mask-top-right.png"),t.getImageData(0,0,Mn,Pn).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=Mn,e.height=Pn;const t=e.getContext("2d");return t?(await yn(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,Mn,Pn).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=Mn,e.height=Pn;const t=e.getContext("2d");return t?(await yn(t,"mask/mask-right.png"),t.getImageData(0,0,Mn,Pn).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=Mn,e.height=$n;const t=e.getContext("2d");return t?(await yn(t,"mask/mask-name.png"),t.getImageData(0,0,Mn,$n).data):null})()},Un=async(e,t,a,r)=>{const{context:n,canvas:o}=Lt(a,r);"string"===typeof e?await yn(n,e,0,0):n.drawImage(e,0,0,a,r);const i=n.getImageData(0,0,a,r).data;for(let l=0;l<i.length;l+=4)i[l+3]=t[l+3];return n.putImageData(new ImageData(i,a,r),0,0),o},Kn=async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:o,top:i,height:l,width:s}=ke[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[o,i,s,l];return await xn(e,`${d}-base${n?"-full":""}.png`,...m),await xn(e,`${d}-core.png`,...m),c?(await xn(e,`${u}-base.png`,...m),xn(e,`${u}-core.png`,...m)):void 0}))),e.resetTransform())},Gn=async(e,t,a,r,n)=>{e&&"normal"!==a&&(e.scale(t,t),r?await yn(e,`link/link-overlay-arrow-${a}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:r,top:o,height:i,width:l}=ke[n][t-1],s=[r,o,l,i];await xn(e,`link/link-overlay-${t}-${a}.png`,...s)}))),e.resetTransform())},{width:Xn,height:Vn,topToPendulumStructure:qn,topToPendulumStructureFrame:_n,pendulumIconFrameHeight:Jn,pendulumIconFrameWidth:Zn,pendulumFrameHeight:Qn,pendulumFrameWidth:eo,attributeSize:to,attributeX:ao,attributeY:ro,finishTypeCardWidth:no,stickerSize:oo}=s,io=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,globalScale:n,format:o,hasBackground:i,frame:l,leftFrame:s,pendulumFrame:c,rightFrame:d,pendulumRightFrame:u,effectBackground:b,pendulumEffectBackground:p,backgroundType:f,cardIcon:g,attribute:v,star:y,foil:x,pendulumSize:j,opacity:O,isLink:w,isSpeedSkill:k,isXyz:S,isPendulum:F,pendulumFrameTypeMap:C,otherFinish:T,loopFinish:L,loopArtFinish:R}=e;const z=t.getContext("2d"),{artBorder:E,nameBorder:I,body:W,name:D,pendulum:H,text:A,boundless:M}=O,{artX:P,artY:$,artFrameX:Y,artFrameY:U,artFrameHeight:K,artFrameWidth:G,artFinishX:X,artFinishY:V,artWidth:_,artRatio:J}=m(F,O,void 0,j),{frameType:Z,effectBoxOffsetY:Q,pendulumBoxX:ee,pendulumBoxY:te,pendulumBoxWidth:ae,pendulumBoxHeight:re,pendulumBoxOffsetY:ne,artlessFrameY:oe}=N[j],ie=W>0||E,le=860,se="normal"!==x,ce=S||k?l:"normal",de="synchro"===l?["normal","xyz","xyz","xyz","xyz"]:[ce],ue=!M&&ie,me=da({frame:l,topLeftFrame:s,topRightFrame:d,bottomLeftFrame:c,bottomRightFrame:u,effectBackground:b,pendulumEffectBackground:p},F),{topLeftFrame:be,topRightFrame:pe,bottomLeftFrame:he,bottomRightFrame:fe,effectBackground:ge,pendulumEffectBackground:ve}=me,ye={drawFrame:async()=>{if(!z)return;const{context:e,canvas:t}=Lt(Xn,Vn);if(await yn(e,`frame/frame-${be}.png`,0,0),be!==pe){const t=await Un(`frame/frame-${pe}.png`,await Yn.topRight,Xn,Vn);e.drawImage(t,0,0)}const{context:a,canvas:o}=Lt(Xn,Vn);if(await yn(a,`frame-pendulum/frame-pendulum-${he}.png`,0,0),he!==fe){a.clearRect(714,0,99,Vn);const e=await Un(`frame/frame-${fe}.png`,await(fe===pe?Yn.right:Yn.bottomRight),Xn,Vn);a.drawImage(e,0,0)}if(z.globalAlpha=W/100,z.scale(n,n),F&&(e.clearRect(Y,U,G,K),a.clearRect(Y,U,G,K)),z.drawImage(t,0,0),z.drawImage(o,0,0),z.resetTransform(),!i||!r||"frame"!==f)return void(z.globalAlpha=1);const{width:l,height:s}=r,c=r.cloneNode(),d=null===c||void 0===c?void 0:c.getContext("2d");c&&d?(c.width=Xn*n,c.height=Vn*n,d.drawImage(r,0,0,l,s,0,0,Xn*n,Vn*n),z.drawImage(c,0,0,n*Xn,n*Vn,0,0,n*Xn,n*Vn),z.globalAlpha=1):z.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;if(!a||!e)return;const{width:t,height:r}=a;r<=0||e.drawImage(a,0,0,t,r,n*P,n*$,n*_,n*_/(t/r))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!r||!t||!i)return;const{width:o,height:l}=r;if(l<=0)return;const{artX:s,artY:c,artWidth:d,artFrameWidth:u,artFrameX:b,artFrameY:p,ratio:h,artRatio:g}=m(F,O,f,j);t.drawImage(r,0,0,o,l,n*s,n*c,n*d,n*d/h);const v=null!==(e=T[3])&&void 0!==e?e:"normal";if("normal"!==v&&a){const e=bn([v],q);await e(t,"art",(async e=>xn(t,`finish/art-finish-${e}.png`,n*b,n*p,n*u,n*u/g)))}},drawAttribute:async()=>{var e;if(!z)return;z.scale(n,n);const{canvas:t,context:a}=Lt(Xn*n,(ro+to)*n);await yn(a,`attribute/attr-${o}-${v.toLowerCase()}.png`,ao,ro);const r=null!==(e=T[0])&&void 0!==e?e:"normal";if("normal"!==r){const e=bn([r],q),{canvas:n,context:o}=Lt(Xn,ro+to);o.drawImage(t,0,0),await e(o,"art",(async e=>await yn(o,`finish/finish-typeart-${e}.png`,(Xn-no)/2,oo))),a.globalCompositeOperation="source-in",a.drawImage(n,0,0),z.drawImage(t,0,0)}else z.drawImage(t,0,0);z.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:r}=e;const o="auto"===g?ia(l):g;if(!z)return;z.scale(n,n);const i=null!==(t=T[1])&&void 0!==t?t:"normal",s="normal"!==i?bn([i],q):void 0;await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:n,star:o,starAlignment:i="auto",style:l,onStarDraw:s,loopStarFinish:c}=e;const d=50;let u="string"===typeof o?""===o?0:1:"number"===typeof o?o:0,m=d*u+4*(u-1);const b=145;let p="right";["rank","negative-level"].includes(r)&&(p="left"),p="auto"===i?p:i,u>12&&(p="center"),n&&"center"===p&&(u=0,m=0);const h="center"===p?(Dn+m)/2:"left"===p?85.9125+m:728.775;let f=-54;if(t&&n&&"st"!==r){const e=50,r=gn({ctx:t,...l,globalScale:a});t.textAlign="left"===p||"right"===p?p:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const o="center"===p?t.measureText(n).width/-2:"left"===p?4:-58;t.fillText(n,h+o,b+.9*e),t.textAlign="left",r()}const{canvas:g,context:v}=Lt(Dn*a,195*a);if(await Promise.all([...Array(u)].map((async()=>{f+=54;let e=[h-(d+f),b];return await yn(v,`subfamily/subfamily-${r}.png`,...e),await s(e)}))),c){const{canvas:e,context:a}=Lt(Dn,195);a.drawImage(g,0,0),await c(a,"art",(async e=>await yn(a,`finish/finish-typeart-${e}.png`,(Dn-Hn)/2,An))),v.globalCompositeOperation="source-in",v.drawImage(e,0,0),t.drawImage(g,0,0)}else t.drawImage(g,0,0)})({ctx:z,cardIcon:o,text:"string"===typeof y?y:null,star:y,starAlignment:r,style:a,globalScale:n,onStarDraw:async e=>"st"===o?Promise.resolve():await L(z,"star",(async t=>yn(z,`finish/finish-${t}-star.png`,...e))),loopStarFinish:s}),z.resetTransform()},drawPendulumScaleIcon:async()=>{if(!z)return;const{canvas:e,context:t}=Lt(Zn,Jn);await yn(t,`frame-pendulum/pendulum-scale-${j}.png`,0,0),"scaleless"===C.blue&&t.clearRect(0,0,Zn/2,Jn),"scaleless"===C.red&&t.clearRect(Zn/2,0,Zn/2,Jn),z.scale(n,n),z.drawImage(e,0,750),z.resetTransform()},drawLinkArrowMap:async(e,t)=>{const a=W>0||E;return await Kn(z,n,e,t,M||!a)},drawStatBorder:async e=>{z&&(z.scale(n,n),await jn(t,"frame/frame-stat-border.png",0,1070,813,20,n,e),z.resetTransform())},drawNameBackground:async()=>{if(!z)return;z.scale(n,n);const{context:e,canvas:t}=Lt(Xn,qn);if(await yn(e,`background/background-name-${be}.png`,0,0),be!==pe){const t=await Un(`background/background-name-${pe}.png`,await Yn.name,Xn,qn);e.drawImage(t,0,0)}z.globalAlpha=D/100,z.drawImage(t,0,0),z.globalAlpha=1,z.resetTransform()},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(z){if(z.scale(n,n),z.globalAlpha=A/100,e?await xn(z,`background/background-text-${ge}.png`,54,885+Q,705,231,0,0+Q,705,231):await yn(z,`background/background-text-${ge}.png`,54,885),e){var t;z.globalAlpha=H/100;const{exceptionFrameType:e=Z,exceptionPendulumBoxOffsetHeight:a=0}=null!==(t=B[j][ve])&&void 0!==t?t:{};await xn(z,`background/background-${e}-${ve}.png`,ee,te+ne,ae,re,0,ne+a,ae,re+a)}z.globalAlpha=1,z.resetTransform()}},drawFrameBorder:async()=>{z&&(z.scale(n,n),await yn(z,`frame/frame-border-${ce}.png`,0,0),z.resetTransform())},drawNameBorder:async()=>{if(I&&z){z.scale(n,n);for(let e=0;e<de.length;e++)await yn(z,`frame/name-border-${de[e]}.png`,0,0);z.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(ie&&z){let e="";e=S||k?`frame/art-border-${l}.png`:w||["zarc","hamon","uria","raviel"].includes(l)?"frame/art-border-special.png":"frame/art-border.png",z.scale(n,n),await yn(z,e,60,170),z.resetTransform()}},drawPendulumBorder:async(e,t)=>{if(!z)return;const{canvas:a,context:r}=Lt(Xn,Vn);await xn(r,`frame-pendulum/border-pendulum-${j}-${t}-artless`+("scaleless"===C.blue?"-scaleless":"")+".png",30,_n,eo/2,Qn,0,0,eo/2,Qn),await xn(r,`frame-pendulum/border-pendulum-${j}-${t}-artless`+("scaleless"===C.red?"-scaleless":"")+".png",30+eo/2,_n,eo/2,Qn,eo/2,0,eo/2,Qn),e&&(r.clearRect(0,0,Xn,oe+_n),await yn(r,`frame-pendulum/border-pendulum-${j}-${t}.png`,30,_n)),z.scale(n,n),z.drawImage(a,0,0),z.resetTransform()},drawEffectBorder:async()=>{z&&(z.scale(n,n),se||"speed-skill"!==he?await yn(z,"frame/effect-border.png",35,le):await yn(z,"frame/effect-border-speed-skill.png",35,le),z.resetTransform())},drawCardBorder:async()=>{z&&(z.scale(n,n),await yn(z,`frame/card-border${se?`-${x}`:""}.png`,0,0),z.resetTransform())},drawArtBorderFoil:async()=>{z&&(z.scale(n,n),ie&&await yn(z,`frame/art-border-${x}.png`,60,170),z.resetTransform())},drawEffectBorderFoil:async()=>{z&&(z.scale(n,n),await yn(z,`frame/effect-border-${x}.png`,35,le),z.resetTransform())},drawLinkMapFoil:async function(){return Gn(z,n,x,arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,arguments.length>1?arguments[1]:void 0)},drawNameFinish:async()=>{(ie||I)&&z&&(z.scale(n,n),await L(z,"name",(async e=>yn(z,`finish/finish-${e}-name.png`,0,0))),z.resetTransform())},drawAttributeFinish:async()=>{v!==h&&z&&(z.scale(n,n),await L(z,"attribute",(async e=>yn(z,`finish/finish-${e}-attribute.png`,678,55))),z.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;ue&&e&&(e.scale(n,n),await R(e,"art",(async(t,a)=>await xn(e,`finish/art-finish-${t}${F?a:""}.png`,X,V,G,G/J)),j),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;e&&(e.scale(n,n),await L(e,"art-overlay",(async t=>yn(e,`finish/finish-${t}-`+(ue?"art":"unart")+"-overlay"+(F?`-pendulum-${j}`:"")+".png",X,V))),e.resetTransform())},drawArtBorderFinish:async()=>{ie&&z&&(z.scale(n,n),await L(z,"art-border",(async e=>yn(z,`finish/finish-${e}-art-border.png`,0,0))),z.resetTransform())},drawPendulumArtBorderFinish:async()=>{z&&(z.scale(n,n),ie&&await L(z,"art-border-pendulum",(e=>yn(z,`finish/finish-${e}-art-border-pendulum-${j}.png`,0,0))),z.resetTransform())},drawBorderPendulumFinish:async()=>{z&&(z.scale(n,n),await L(z,"border-pendulum",(async e=>{const t=`finish/finish-${e}-border-pendulum-${j}`;await xn(z,`${t}${"scaleless"===C.blue?"-scaleless":""}.png`,0,0,Xn/2,Vn,0,0,Xn/2,Vn),await xn(z,`${t}${"scaleless"===C.red?"-scaleless":""}.png`,0+Xn/2,0,Xn/2,Vn,Xn/2,0,Xn/2,Vn)})),z.resetTransform())},drawFrameFinish:async()=>{z&&(z.scale(n,n),await L(z,"frame",(async e=>yn(z,`finish/finish-${e}-frame${F?`-pendulum-${j}`:""}.png`,0,0))),z.resetTransform())},drawFrameBackgroundFinish:async()=>{z&&(z.scale(n,n),await L(z,"frame-background",(async e=>yn(z,`finish/finish-${e}-frame-background${F?"-pendulum":""}.png`,0,0))),z.resetTransform())},drawOverlayFinish:async()=>{z&&(z.scale(n,n),await L(z,"overlay",(async e=>yn(z,`finish/finish-${e}-overlay.png`,0,0))),z.resetTransform())},drawCardBorderFinish:async()=>{z&&(z.scale(n,n),await L(z,"card-border",(async e=>yn(z,`finish/finish-${e}-card-border.png`,0,0))),z.resetTransform())}};return ye},lo=async(e,t,a,r,n,o,i,l)=>{var s,c,d;const{isSpeedSkill:u,format:m,cloneNode:b,frame:p,furiganaHelper:h,globalScale:f}=l,g=r*f,v=n*f,y=o*f,x=null===b||void 0===b?void 0:b.getContext("2d");if(!(t&&x&&a))return;const{embossPitch:j,embossYaw:O,embossThickness:w,fillStyle:k,font:S,gradientAngle:F,gradientColor:T,hasEmboss:L,hasGradient:N,hasOutline:R,hasShadow:B,headTextFillStyle:z,lineColor:E,lineOffsetX:I,lineOffsetY:W,lineWidth:D,shadowBlur:H,shadowColor:A,shadowOffsetX:M,shadowOffsetY:P,pattern:$}={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none",...i},{patternImage:Y,blendMode:U}=null!==(s=C[null!==$&&void 0!==$?$:""])&&void 0!==s?s:{};t.textAlign="left";const K=nr({...(null!==(c=le[S])&&void 0!==c?c:le.Default).fontData,headTextFillStyle:z},f),G=Xa({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),X={fontLevel:0,fontData:K,currentFont:G},V=En(a,m,{multiline:!1,furiganaHelper:h,dictionaryType:"rubyFormName"}),q="ocg"===m?[V]:V.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),_=Xa({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),J=_.getFont(),Z=_.setSize((e=>e*K.symbolFontRatio)).setStyle("small-caps").setFamily(K.symbolFont).getFont();let ee=0,te=0;q.forEach(((e,a)=>{t.font=a%2===0?J:Z;const r=t.measureText(e.replaceAll(Ye,""));ee=Math.max(ee,r.actualBoundingBoxAscent),te=Math.max(te,r.actualBoundingBoxDescent)}),0),t.font=J;let ae=0;const re=Ga((e=>{const{currentLineCount:a,currentLineList:r}=Rn({ctx:t,median:e,paragraphList:[V],format:m,textData:X,width:y,globalScale:f});return!(a>1)&&(ae=r[0].actualLineWidth,!0)}))/1e3;t.scale(re,1);const ne=rr(Q,f),oe=null!==(d=K.fontList[0].offsetY)&&void 0!==d?d:ne.offsetY,ie=kn(V),se=ae>0&&N?((e,t,a,r,n,o,i,l)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=i+l,m=r+n/2,b=o+(l-i)/2;let p=n,h=u;"1"!==c&&"3"!==c||(p=u,h=n);const f=Math.sqrt(p**2/4+h**2/4);if(f>0){const t=90-(180*Math.asin(p/2/f)/Math.PI-d),r=Math.sin(t/180*Math.PI)*f,n=Math.sin(d/180*Math.PI)*r,o=Math.cos(d/180*Math.PI)*r;let i=n,l=o;"1"===c&&(i=o,l=-n),"2"===c&&(i=-n,l=-o),"3"===c&&(i=-o,l=n);const s=m+i,u=b-l,h=m-i,g=b+l,v=e.createLinearGradient(s,u,h,g);return a.forEach((e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)})),v}})(t,F,Za(T),g,ae,v,ee,te):void 0;let ce=L&&"number"===typeof w&&w>0,de=()=>{};ce&&(de=gn({ctx:t,lineWidth:w,lineColor:k,lineColorGradient:se,globalScale:f,useDefault:!1})),t.fillStyle=null!==se&&void 0!==se?se:k;const{tokenEdge:ue}=zn({ctx:t,tokenList:ie,xRatio:re,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:f,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?oe:0)),ce&&t.strokeText(a,r,n-(u?oe:0))}});if(de(),Y){const a=e.cloneNode(),r=a.getContext("2d");t.setTransform(1,0,0,1,0,0),r.scale(f,f),await yn(r,`frame/frame-${p}.png`,0,0),await yn(r,`background/background-name-${p}.png`,0,0),r.globalCompositeOperation=U,r.resetTransform(),await xn(r,`finish-name/${Y}.png`,g,v-ee,y,ee+te),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(re,1)}if(L){const a=10,r=aa({inputCanvas:e,lightPitch:j,lightYaw:O,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(ue+a)});t.putImageData(r,0,0)}if(R){const e=gn({ctx:t,lineWidth:D+w,lineColor:E,globalScale:f,useDefault:!1});t.globalCompositeOperation="destination-over",zn({ctx:t,tokenList:ie,xRatio:re,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:f,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+I,n+W-(u?oe:0))}}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(B){const a=e.cloneNode(),r=a.getContext("2d"),n=gn({ctx:r,x:M,y:P,shadowColor:A,blur:H,globalScale:f,useDefault:!1});t.scale(1/re,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}zn({ctx:t,tokenList:ie,xRatio:re,yRatio:1,trueEdge:g,trueBaseline:v,textData:X,format:m,globalScale:f,textDrawer:()=>{}});const me={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"};t.setTransform(1,0,0,1,0,0),t.fillStyle=me.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},so={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},co=e=>{var t,a;let{ctx:r,value:n,format:o,metricMethod:i,size:l,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:b}=tr(null!==(t=null===(a=P[o])||void 0===a?void 0:a[l])&&void 0!==t?t:P.tcg.medium,c),p=nr({tcg:de,ocg:ue}[o],c),h={...p,metricMethod:null!==i&&void 0!==i?i:p.metricMethod},{font:f}=h,g=so[l],v=h.fontList[g],y=Xa({defaultFamily:f,defaultSize:`${v.fontSize}px`}),x={fontLevel:g,fontData:h,currentFont:y};let j=0;r.font=y.getFont(),r.textAlign="left";const O=En(n,o,{multiline:!1,furiganaHelper:s}),w=Ga((e=>{const{currentLineCount:t,currentLineList:a}=Rn({ctx:r,median:e,paragraphList:[O],format:o,textData:x,width:b,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)}))/1e3;r.scale(w,1);const k=zn({ctx:r,tokenList:kn(O),xRatio:w,yRatio:1,trueEdge:"left"===d?u:u-j*w,trueBaseline:m,textData:x,format:o,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...k,xRatio:w}},{finishTypeCardWidth:uo,width:mo,iconHeight:bo,iconWidth:po}=s,ho=(e,t,a,r,n,o)=>{const i=a*o,l=r*o;if(e&&t){const a=n*o;e.font=`${a}px MatrixBoldSmallCaps`,e.textAlign="left";const r=.8,s=`${t}`.split("");let c=0;s.forEach((t=>{c+=e.measureText(t).width*("1"===t?r:1)}));let d=i-c/2;s.forEach((t=>{e.fillText(t,"1"===t?d+1*o:d,l+a),d+=e.measureText(t).width*("1"===t?r:1)}))}},fo=(e,t,a,r,n)=>{if(!e)return;const o=a*n,i=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const l=dn(e,t,.075,o,i/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,dn(e,"/",.15,l+5*n,i/1.01),e.setTransform(1,0,0,1,0,0)},go=(e,t,a,r,n)=>{if(!e||null==t)return;const o=a*n,i=r*n,l=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*n}px matrix`,e.fillText(t,o+l,i);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*n}px MatrixBoldSmallCaps`,e.fillText(t,o+l,i/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce(((t,r,o)=>{e.font=36.18*n+"px MatrixBoldSmallCaps";let i=t+e.measureText(r).width;return o<a.length-1&&(e.font=36.18*n+"px matrix",i+=e.measureText("?").width),i}),0);if(r>0){const t=Math.min(l/r,1);e.scale(t,1),a.reduce(((r,o,l,s)=>{const c=s[s.length-1-l];let d=r;return e.font=36.18*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+i),l<a.length-1&&(e.font=34*n+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,i/1.29-1),e.setTransform(1,0,0,1,0,0)),d}),o+l),e.scale(1/t,1)}}},{height:vo,width:yo,finishTypeCardWidth:xo,finishTypeCardHeight:jo,stickerX:Oo,stickerY:wo,stickerSize:ko}=s,So=(e,t,a)=>{const{card:n}=tn(),{exportCanvasRef:o,artworkCanvasRef:i,backgroundCanvasRef:l,frameCanvasRef:s,creatorCanvasRef:u,effectCanvasRef:b,nameCanvasRef:p,passwordCanvasRef:f,pendulumEffectCanvasRef:g,pendulumScaleCanvasRef:y,setIdCanvasRef:j,statCanvasRef:O,stickerCanvasRef:w,cardIconCanvasRef:k,typeCanvasRef:F,finishCanvasRef:C,lightboxRef:T,previewCanvasRef:L}=t,{format:R,hasBackground:B,backgroundType:z,frame:E,foil:I,finish:W,artFinish:D,otherFinish:H,opacity:P,name:U,nameStyle:K,nameStyleType:G,effectTextStyle:X,pendulumTextStyle:_,typeTextStyle:J,statTextStyle:Z,otherTextStyle:ee,effect:te,effectStyle:ae,typeAbility:re,isPendulum:ne,pendulumFrame:oe,pendulumRightFrame:ie,pendulumEffect:le,pendulumScaleBlue:de,pendulumScaleRed:ue,pendulumStyle:pe,pendulumSize:he,leftFrame:fe,rightFrame:ge,atk:ve,def:ye,linkMap:xe,linkRating:je,attribute:Oe,cardIcon:we,subFamily:ke,star:Se,starAlignment:Fe,setId:Ce,password:Te,creator:Le,sticker:Ne,isLegacyCard:Re,isFirstEdition:Be,isDuelTerminalCard:ze,isSpeedCard:Ee,isLimitedEdition:Ie,furiganaHelper:We,flag:De}=n,He=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),Ae=ae.background,Me=pe.background,Pe="auto"===oe?ne?"spell":E:oe,$e=null===ae||void 0===ae?void 0:ae.condenseTolerant,Ye=(e=>"normal"===e.frame&&oa(e))(n),Ue=(e=>"xyz"===e.frame)(n),Ke=(e=>!0===e.isLink)(n),Ge=oa(n),Xe=na(n),{body:Ve=100,boundless:qe}=P,_e=!!(Ve<50||qe),Je=sa(Pe),{bottomRightFrame:Ze}=da({frame:E,topLeftFrame:fe,topRightFrame:ge,bottomLeftFrame:oe,bottomRightFrame:ie,effectBackground:Ae,pendulumEffectBackground:Me},ne),Qe=sa(Ze),et=la(E),{levelStyle:tt,resolvedEffectTextStyle:at,resolvedPendulumEffectTextStyle:rt,resolvedStatTextStyle:nt,resolvedTypeTextStyle:ot,resolvedOtherEffectTextStyle:it}=Object(r.useMemo)((()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:o,statTextStyle:i,typeTextStyle:l}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,b]=r,p=d?{...m?{y:0,blur:4,shadowColor:b}:{},color:u}:{},[h,f,g,v]=n,y=h?{...g?{y:0,blur:4,shadowColor:v}:{},color:f}:{},[x,j,O,w]=l,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,F,C,T]=i,L=S?{...C?{y:1,blur:1,shadowColor:T}:{},color:F}:{},[N,R,B,z]=o;return{levelStyle:c,resolvedEffectTextStyle:p,resolvedOtherEffectTextStyle:N?{...B?{y:0,blur:0,shadowColor:z}:{},color:R}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:L,resolvedTypeTextStyle:k}})({lightFooter:Je,lightHeader:et,requireShadow:_e,effectTextStyle:X,pendulumTextStyle:_,otherTextStyle:ee,statTextStyle:Z,typeTextStyle:J})),[Je,et,_e,X,_,ee,Z,J]),lt=ke.toUpperCase(),st=re.map((e=>e.trim())).join("ocg"===R?"\uff0f":"\u200a/\u200a"),[ct]=De,dt=Ke&&ct,ut=!(!ve&&!ye)||!(!ne||!Ce),mt=st.length>0&&("auto"===we?Ge||Xe:"st"!==we),bt=!(""===(null!==de&&void 0!==de?de:"")),pt=!(""===(null!==ue&&void 0!==ue?ue:"")),{isInitializing:ht,imageChangeCount:ft,language:gt,globalScale:vt}=a,yt=e&&!1===ht,xt=Object(r.useMemo)((()=>bn(W,V)),[W]),jt=Object(r.useMemo)((()=>bn([D],q)),[D]),[,Ot,wt]=H;Object(r.useEffect)((()=>{yt&&(He.current.frame.rerun+=1,He.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=i.current,r=l.current;if(!mn(t)||!s.current)return;const n={...d(),...P},{artBorder:o,body:u,boundless:b,baseFill:p}=n,h=(e,t,a,r,n,o)=>new Promise((i=>{setTimeout((()=>{e.fillStyle=B?null!==o&&void 0!==o?o:p:c,e.fillRect(t,a,r,n),i(!0)}),0)})),f=u>0||o,{drawAttribute:g,drawBackground:v,drawCardArt:y,drawFrame:x,drawLinkArrowMap:j,drawPendulumScaleIcon:O,drawStar:w,drawNameBackground:k,drawEffectBackground:S,drawFrameBorder:F,drawNameBorder:C,drawArtBorder:T,drawPendulumBorder:L,drawBorderPendulumFinish:N,drawEffectBorder:W,drawCardBorder:D,drawStatBorder:A,drawAttributeFinish:M,drawArtBorderFoil:$,drawEffectBorderFoil:Y,drawLinkMapFoil:U,drawNameFinish:K,drawArtFinish:G,drawArtOverlayFinish:X,drawArtBorderFinish:V,drawPendulumArtBorderFinish:q,drawFrameFinish:_,drawFrameBackgroundFinish:J,drawOverlayFinish:Z,drawCardBorderFinish:Q}=io({canvas:s.current,artworkCanvas:a,backgroundCanvas:r,globalScale:vt,format:R,frame:E,leftFrame:fe,pendulumFrame:oe,rightFrame:ge,pendulumRightFrame:ie,effectBackground:Ae,pendulumEffectBackground:Me,hasBackground:B,backgroundType:z,attribute:Oe,cardIcon:we,star:Se,foil:I,pendulumSize:he,opacity:n,isLink:Ke,isSpeedSkill:Xe,isXyz:Ue,isPendulum:ne,pendulumFrameTypeMap:{red:pt?"normal":"scaleless",blue:bt?"normal":"scaleless"},otherFinish:H,loopFinish:xt,loopArtFinish:jt});await h(t,0,0,vt*yo,vt*vo);const{canvas:ee,context:te}=Lt(yo*vt,vo*vt);a&&te&&y(te),await G(te),await X(te);const{canvas:ae,context:re}=Lt(yo*vt,vo*vt);if(await h(re,0,0,vt*yo,vt*vo),r&&re&&await v(re,f),b||re.drawImage(ee,0,0),t.drawImage(ae,0,0),await x(),await D(),await Q(),ne||(b||(await k(),await S(),await W(),await Y()),await T(),await $(),await V()),ne&&!b){const{artX:e,artY:a,artWidth:r,ratio:n}=m(ne,P,void 0,he);t.drawImage(ae,vt*e,vt*a,vt*r,vt*r/n,vt*e,vt*a,vt*r,vt*r/n),await k(),await S(!0),await O(),await L(f,"normal"),await L(f,I),await q(),f&&await N()}if(b||(await _(),await K()),f&&await J(),b){await k(),await K(),await C(),Ke&&!ne?await V():ne&&(f&&(await L(f,"normal"),await L(f,I)),await q());const{artX:e,artY:a,artWidth:r,ratio:n}=m(ne,P,"full",he);t.drawImage(ee,vt*e,vt*a,vt*r,vt*r/n,vt*e,vt*a,vt*r,vt*r/n),ne?(await S(!0),await O(),await L(!1,"normal"),await L(!1,I),await N()):(await S(),await W(),await Y()),await _()}if(ut&&await A({color:"#000000",...nt}),await g(),await M(),await w({style:tt,starAlignment:Fe}),b||await C(),await F(),Ke&&!ne&&(await j(xe,ne?"pendulum":"normal"),await U(!1,ne?"pendulum":"normal")),Ke&&ut){const e=gn({ctx:t,...nt,globalScale:vt});if(ut){const e="string"===typeof je&&je.length>0?je:`${Array.isArray(xe)?xe.length:0}`;await(async(e,t,a,r)=>{const n=e.getContext("2d");if(!n||"string"!==typeof t)return;await jn(e,"link/link-text.png",...ar([600,1080,120,30],r),r,a);const o=isNaN(Number(t))?1106:1105,i=gn({ctx:n,...a,globalScale:r});n.textAlign="right",n.scale(1.2,1),n.font=`bold ${26.55*r}px RoGSanSrfStd-Bd`,n.fillText(`${t}`,622.75*r,o*r),n.setTransform(1,0,0,1,0,0),n.textAlign="left",i()})(s.current,e,nt,vt)}e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:o,isDuelTerminalCard:i,isSpeedCard:l,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(i){const e=n?[255,1072,175,35]:o?[151,848,216,24]:[80,843,270,30];await jn(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...ar(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(l){const e=n?[255,1084,176.4,25]:o?[151,854,215.6,22]:[80,850,245,25];await jn(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...ar(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:vt,type:Je&&!ne?"white":"black",bordered:(u<50||b)&&!ne,isDuelTerminalCard:ze,isSpeedCard:Ee,isLink:Ke,isPendulum:ne,textStyle:it}),await Z()})}),[yt,vt,i,l,s,E,fe,ge,ie,R,B,z,Oe,oe,I,Se,Fe,we,ze,Ke,ne,bt,pt,Ee,Xe,Ue,Je,xe,je,nt,it,W,H,Ae,Me,jt,xt,P,he,ut,tt,ft]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=y.current)||void 0===e?void 0:e.getContext("2d");if(mn(t)&&ne){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=N[he];""!==(null!==de&&void 0!==de?de:"")&&ho(t,de,e,r,n,vt),""!==(null!==ue&&void 0!==ue?ue:"")&&ho(t,ue,a,r,n,vt)}}),[yt,vt,ne,he,de,ue,y]),Object(r.useEffect)((()=>{yt&&(He.current.name.rerun+=1,He.current.name.instructor=async()=>{var e,t;const a=null===(e=p.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=p.current)||void 0===t?void 0:t.cloneNode();mn(a)&&r&&await lo(p.current,a,U,"tcg"===R?60:68,116,Oe===h?"tcg"===R?688:674:"tcg"===R?608:598,(e=>{var t,a;let{format:r,frame:n,nameStyle:o,nameStyleType:i,foil:l}=e;if("custom"===i)return o;const s=na({frame:n}),c=la(n);let d="Default";"ocg"===r&&(d="OCG"),s&&"tcg"===r&&(d="Arial");let u={fillStyle:c?"#ffffff":"#000000",headTextFillStyle:c?"#ffffff":"#000000"};if("predefined"===i){var m,b;const e={...S[null!==(m=o.preset)&&void 0!==m?m:"commonB"].value};return S[null!==(b=e.preset)&&void 0!==b?b:"commonB"].value.font||(e.font=d),{...u,...e}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const h="normal"!==l&&null!==(t=null===(a=S[l])||void 0===a?void 0:a.value)&&void 0!==t?t:{},f="zarc"===n?S.animeGold.value:{};return{font:d,...u,...p,...h,...f}})({format:R,frame:E,nameStyle:K,nameStyleType:G,foil:I}),{isSpeedSkill:Xe,format:R,cloneNode:r,frame:E,furiganaHelper:We,globalScale:vt})})}),[yt,vt,Oe,I,R,E,We,Xe,U,p,K,G]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");if(!mn(t)||!ut)return;const a=gn({ctx:t,...nt,globalScale:vt}),r=dt?168.75:0;fo(t,"ATK",432.1-r,1106,vt),go(t,ve.trim(),508.824-r,1106.5,vt),Ke&&!dt||(fo(t,"DEF",600.85-r,1106,vt),go(t,ye.trim(),673.865-r,1106.5,vt)),a()}),[yt,vt,ve,ye,Ke,Ge,dt,nt,O,ut]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");mn(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:o,withShadow:i,format:l,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${i?"bold":""} ${22*r}px stone-serif-regular`,"ocg"===l&&(d=.145,u=-1,m=-3);const b=gn({ctx:e,color:s&&!n?"#ffffff":"#000000",shadowColor:i?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:i&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?dn(e,t,d,(66.65+m)*r,(1105.01+u)*r):o?un(e,t,d,(666.56+m)*r,(872.94+u)*r):un(e,t,d,(728.78+m)*r,(871.5+u)*r),b()})(t,Ce,{globalScale:vt,isLink:Ke,isPendulum:ne,withShadow:_e&&!ne,format:R,lightFooter:Qe,textStyle:it})}),[yt,vt,R,Ke,ne,Qe,j,Ce,Xe,Pe,_e,it]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");if(!mn(t))return;const a=/^[0-9]*$/.test(Te),r=a&&ne&&Ke,{rightEdge:n}=(e=>{var t,a;let{ctx:r,globalScale:n,value:o,format:i,alignment:l,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:b}=e;if(!mn(r))return{rightEdge:0};const p=gn({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:f,trueWidth:g}=tr(null!==(t=Y[i])&&void 0!==t?t:Y.tcg,n),v=nr(ce[i],n),{font:y}=v,x=En(o,i,{multiline:!1,furiganaHelper:!1});let j={fontLevel:b,fontData:v,currentFont:Xa()},O=0,w=1e3,k=v.fontList[0];for(let T=0;T<v.fontList.length;T++){k=v.fontList[T];const e=Xa({defaultFamily:y,defaultSize:`${k.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:T,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",w=Ga((e=>{const{currentLineCount:o,currentLineList:l}=Rn({ctx:r,median:e,paragraphList:[x],format:i,textData:t,width:g,globalScale:n});return!(o>1)&&(a=l[0].actualLineWidth,!0)})),O=a,j=t,w>=1e3)break}const S=w/1e3;r.scale(S,1);const F=rr(Q,n),C=zn({ctx:r,tokenList:kn(x),xRatio:S,yRatio:1,trueEdge:"left"===l?h+c:h-c-O*S,trueBaseline:f+(null!==(a=k.offsetY)&&void 0!==a?a:F.offsetY)+s,textData:j,format:i,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),p(),{rightEdge:C.tokenEdge}})({ctx:t,globalScale:vt,value:Te,lightFooter:Je,alignment:"left",edgeOffset:(r?80:0)*vt,format:R,hasShadow:"zarc"===Pe||_e,textStyle:it,fontLevel:a?0:1});if(Be){const e=!ne||!!a,r=!Re&&a||ne?Math.max(n/vt+14.813,142.2)-("ocg"===R?7:0):Ke?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{globalScale:1,stroke:!1};if(!e)return;const{stroke:o=!1,textStyle:i,globalScale:l}=null!==n&&void 0!==n?n:{},s=t*l,c=a*l,d=r*l,u=gn({ctx:e,globalScale:l,...i,...null!==i&&void 0!==i&&i.shadowColor?{x:0,y:0,blur:3}:{}}),m=7.4*l;e.font=`bold ${23.7*l}px palatino-linotype-bold`;let b=s;e.fillText("1",b,c+d),o&&e.strokeText("1",b,c),b+=e.measureText("1").width-2*l,e.font=`bold ${17.78*l}px palatino-linotype-bold`,e.fillText("st",b,c-m+d),o&&e.strokeText("st",b,c-m),b+=e.measureText("st").width,e.font=`bold ${22.22*l}px palatino-linotype-bold`,e.fillText(" Edition",b,c+d),o&&e.strokeText(" Edition",b,c),u()}(t,r,!Re&&a||ne?1150.93:871,!Re&&a||ne?Xe?-2:-1:0,{globalScale:vt,textStyle:{color:Je?"#ffffff":"#000000",...it}})}}),[yt,vt,Be,Te,f,Je,R,_e,Ke,Xe,ne,Re,Pe,it]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=u.current)||void 0===e?void 0:e.getContext("2d");He.current.creator.rerun+=1,He.current.creator.instructor=async()=>{var e;if(!mn(t))return;const a={...d(),...P},{body:r,boundless:n}=a,o=(e=>{var t,a;let{ctx:r,value:n,format:o,alignment:i,baselineOffset:l=0,lightFooter:s,hasShadow:c,textStyle:d,globalScale:u}=e;if(!mn(r))return;const m=gn({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,globalScale:u,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:b,trueBaseline:p,trueWidth:h}=tr(null!==(t=$[o])&&void 0!==t?t:$.tcg,u),f=nr(se[o],u),{font:g}=f,v=En(n,o,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:f,currentFont:Xa()},x=0,j=1e3,O=f.fontList[0];for(let F=0;F<f.fontList.length;F++){O=f.fontList[F];const e=Xa({defaultFamily:g,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:F,fontData:f,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",j=Ga((e=>{const{currentLineCount:n,currentLineList:i}=Rn({ctx:r,median:e,paragraphList:[v],format:o,textData:t,globalScale:u,width:h});return!(n>1)&&(a=i[0].actualLineWidth,!0)})),x=a,y=t,j>=1e3)break}const w=j/1e3;r.scale(w,1);const k=rr(Q,u),S=zn({ctx:r,tokenList:kn(v),xRatio:w,yRatio:1,trueEdge:"left"===i?b:b-x*w,trueBaseline:p+(null!==(a=O.offsetY)&&void 0!==a?a:k.offsetY)+l*u,textData:y,format:o,globalScale:u,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),m(),{leftEdge:"left"===i?b:b-x*w,...S}})({ctx:null===(e=u.current)||void 0===e?void 0:e.getContext("2d"),format:R,value:Le,alignment:"right",baselineOffset:Xe?-2:0,hasShadow:_e,lightFooter:Qe,textStyle:it,globalScale:vt}),i=("tcg"===R?390:350)*vt,l=("tcg"===R?30:40)*vt;var s;Ie&&u.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:o,isLegacyCard:i,widthOffset:l,bordered:s,textStyle:c}=e;const d=!i||n?[145,1123,240-l/r,37]:o?[151,846,216,36]:[80,843,240,40];await jn(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...ar(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:u.current,ctx:t,globalScale:vt,type:Je&&!ne?"white":"black",bordered:(r<50||n)&&!ne,isLink:Ke,isPendulum:ne,widthOffset:(null!==(s=null===o||void 0===o?void 0:o.leftEdge)&&void 0!==s?s:i)<i?l:0,isLegacyCard:Re,textStyle:it})}}),[yt,vt,Le,u,b,R,Re,Ie,Ke,ne,Xe,Je,Qe,P,_e,it]),Object(r.useEffect)((()=>{yt&&(He.current.sticker.rerun+=1,He.current.sticker.instructor=async()=>{var e;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");if(!mn(t))return;const{canvas:a,context:r}=Lt(yo*vt,vo*vt);await(async e=>{let{ctx:t,sticker:a,globalScale:r,x:n,y:o}=e;if(mn(t)){if(a===x)return Promise.resolve();t.scale(r,r),await yn(t,`sticker/sticker-${a.toLowerCase()}.png`,n,o),t.resetTransform()}})({ctx:r,sticker:Ne,globalScale:vt,x:Oo,y:wo});const n=null!==wt&&void 0!==wt?wt:"normal";if("normal"!==n){const e=bn([n],q),{canvas:o,context:i}=Lt(yo*vt,vo*vt);i.drawImage(a,0,0),i.scale(vt,vt),await e(i,"art",(async e=>await yn(i,`finish/finish-typeart-${e}.png`,Oo-xo+ko,wo-jo+ko))),r.globalCompositeOperation="source-in",r.drawImage(o,0,0),t.drawImage(a,0,0)}else t.drawImage(a,0,0)})}),[yt,vt,Ne,wt,w,jt]),Object(r.useEffect)((()=>{var e,t;if(!yt)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=F.current)||void 0===t?void 0:t.getContext("2d");He.current.typeAbility.rerun+=1,He.current.typeAbility.instructor=async()=>{if(!mn(a)||!mn(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==ae&&void 0!==ae?ae:{},o=X[0],i=o?t:0,l=o?Ye&&"auto"===n||"tcg"===R&&"italic"===n:Ye,s=Wn({ctx:a,content:te,isNormal:Ye,useItalic:l,condenseTolerant:e,format:R,furiganaHelper:We,...In({format:R,statInEffect:ut,typeInEffect:mt,useItalic:l,frameType:ne&&"large"===he?"pendulumLarge":"normal"}),textStyle:at,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-i,globalScale:vt}}),c=null!==Ot&&void 0!==Ot?Ot:"normal",d="normal"!==c?bn([c],q):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:o,frame:i,size:l,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!mn(t))return;const m=r.length>0,b=n!==v&&"large"===l,p=r+(b?"\u29be":""),h=m?"tcg"===o?"large"===l?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!m)return;const f={color:ca(i)&&!na({frame:i})&&"large"===l?"#ffffff":"#000000",...c},g=gn({ctx:t,...f,globalScale:a}),{iconPositionList:y,xRatio:x}=co({ctx:t,format:o,size:l,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});g();let j="ocg"===o?-5:-1,O="ocg"===o?-3:0;if(b){const{edge:e,baseline:r}=y[0],{canvas:o,context:i}=Lt(mo*a,(r+po)*a);if(await xn(i,`subfamily/subfamily-${n.toLowerCase()}.png`,(()=>e+(.175*po*x+O)*a),(()=>r-.8*po*a+j*a),(()=>po*a),(()=>bo*a)),u){const{canvas:e,context:n}=Lt(mo*a,(r+po)*a);n.drawImage(o,0,0),await u(n,"art",(async e=>await yn(n,`finish/finish-typeart-${e}.png`,(mo-uo)/2,bo))),i.globalCompositeOperation="source-in",i.drawImage(e,0,0),t.drawImage(o,0,0)}else t.drawImage(o,0,0)}})({ctx:r,globalScale:vt,format:R,frame:E,furiganaHelper:We,isMonster:Ge,textStyle:ot,size:mt?ne&&"large"===he?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:lt,typeAbility:st,loopIconFinish:d})}}),[yt,vt,mt,ut,ae,te,X,b,R,E,ne,he,We,Ot,Ge,Ye,ot,at,lt,st,F]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=g.current)||void 0===e?void 0:e.getContext("2d");if(mn(t)&&ne){const{upSize:e,fontStyle:a}=null!==pe&&void 0!==pe?pe:{},r=_[0],n=r?e:0,o=!!r&&("tcg"===R&&"italic"===a),i=`${R}-${he}`,l=M[bt&&pt?"normal":"scaleless"][he],s=bt&&pt?l:l.map((e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(bt?A:0),trueWidth:a-(bt?A:0)-(pt?A:0)}}));Wn({ctx:t,content:le,isNormal:!1,useItalic:o,fontData:(o?me:be)[i],fontDataKey:i,textStyle:rt,sizeList:s,condenseTolerant:$e,format:R,furiganaHelper:We,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:vt}})}}),[yt,vt,$e,R,ne,pt,bt,he,g,le,pe,_,We,rt]),Object(r.useEffect)((()=>{var e;if(!yt)return;const t=null===(e=C.current)||void 0===e?void 0:e.getContext("2d");He.current.overlay.rerun+=1,He.current.overlay.instructor=async()=>{if(mn(t)){if(Ke&&ne){const e={...d(),...P},{artBorder:a,body:r,boundless:n}=e,o=r>0||a;await Kn(t,vt,xe,ne?"pendulum":"normal",n||!o),await Gn(t,vt,I,!1,ne?"pendulum":"normal")}t.scale(vt,vt),await xt(t,"total-overlay",(e=>yn(t,`finish/finish-${e}-total-overlay.png`,0,0))),t.resetTransform()}}}),[yt,vt,C,xt,U,Ke,ne,xe,P,qe,I,nt,ut,s]);const kt=Object(r.useRef)({}),St=Object(r.useCallback)((async e=>{const t=o.current,a=null===t||void 0===t?void 0:t.getContext("2d");var r,n,i;t&&a&&(mn(a),await Promise.all(Object.values(He.current).sort(((e,t)=>e.order-t.order)).map((e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&kt.current[r]!==a||!kt.current[r]?(kt.current[r]=a,t()):Promise.resolve()}))).catch((e=>{console.error(e);const t="fail-to-draw-notification";mr.a.close(t),mr.a.error({key:t,message:gt["error.draw.error.message"],description:gt["error.draw.error.description"]})})),await ra(s,a,0),await ra(p,a,0),await ra(k,a,0),await ra(y,a,0),await ra(g,a,0),await ra(F,a,0),await ra(b,a,0),await ra(O,a,0),await ra(j,a,0),await ra(f,a,0),await ra(u,a,0),await ra(w,a,0),await ra(C,a,0),null===(r=T.current)||void 0===r||r.draw(t),null===(n=L.current)||void 0===n||null===(i=n.getContext("2d"))||void 0===i||i.drawImage(t,0,0,t.width,t.height,0,0,yo,vo))}),[gt,k,u,o,b,C,T,p,f,g,y,j,s,O,w,F,L]);return{drawingPipeline:He,onExport:St}};var Fo=a(29);const Co="ygocarder-notification",To=Object(xr.create)((e=>{const{condenseReminder:t,versionReminder:a,faqReminder:r,feedbackReminder:n}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(Co))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof n&&n,faqReminder:"string"!==typeof r?"":r,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e((e=>{const r={...e.memory,[t]:a};return localStorage.setItem(Co,JSON.stringify(r)),{memory:r}}))},updateNotificationMemory:t=>{e((e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(Co,JSON.stringify(a)),{memory:a}}))}}})),Lo=e=>{const{targetMemory:t,updateNotification:a}=To(Object(Fo.useShallow)((t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}})));return[t,Object(r.useCallback)((t=>a(e,t)),[e,a])]};var No=a(183),Ro=a.n(No);var Bo=a(275),zo=a.n(Bo);const Eo=Object(pr.b)(ur.a)`
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
`,Io=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[o,i]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(Eo,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||o},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{i(!0);const e=await Promise.all(c.map((e=>{let{file:t,name:a}=e;return new Promise(((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:o}=n;if("string"!==typeof o)return void r("Not a valid result");let i=JSON.parse(o);xa(i)&&(i=fa(i));const s=ja(i);let c=null;if(c=l?s?Ha(Qr(i).card).result:i:s?i:fa(Qr(i).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)}))}))),t=new zo.a;e.forEach((e=>{let{blob:a,name:r}=e;t.file(r,a)}));const a=await t.generateAsync({type:"blob"});Ca("convert-result.zip",a,"application/zip"),i(!1),n(!1)}catch(e){console.error(e),mr.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),i(!1)}},children:[Object(p.jsxs)("div",{className:"controller",children:[Object(p.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:dr("toggle-button",l?"reverse":""),onClick:()=>s((e=>!e)),children:Object(p.jsx)(fr.a,{})})}),Object(p.jsx)("label",{children:"Yugioh Carder"})]}),Object(p.jsxs)("div",{className:"file-panel",children:[Object(p.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(p.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],o&&Object(p.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(p.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(p.jsx)("div",{className:"file-list",children:c.map((e=>{let{name:t}=e;return Object(p.jsxs)("div",{className:"file-entry",children:[Object(p.jsx)("div",{children:t}),Object(p.jsx)("div",{className:"file-action",children:Object(p.jsx)(gr.a,{disabled:o,onClick:()=>d((e=>e.filter((e=>e.name!==t))))})})]},t)}))})]})]}),Object(p.jsx)(br.a,{overlay:t["converter.header.label"],children:Object(p.jsx)(hr,{className:"batch-converter",onClick:()=>n(!0),children:Object(p.jsx)(vr.a,{})})})]})};var Wo=a(75),Do=a(562),Ho=a(586),Ao=a(555),Mo=a(222);class Po extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){Mo.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var $o=a(188);const Yo="controls-wrapper",Uo=pr.b.div`
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
`,Ko=e=>{let{children:t,...a}=e;return Object(p.jsxs)(Uo,{className:"angle-picker-container",children:[t,Object(p.jsx)($o.AnglePicker,{...a})]})};var Go=a(577),Xo=a(578),Vo=a(543),qo=a(575);const _o=Object(pr.b)(qo.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Jo=e=>{let{overlayClassName:t,iconProps:a,...r}=e;const{className:n,...o}=null!==a&&void 0!==a?a:{};return Object(p.jsx)(Vo.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...r,children:Object(p.jsx)(_o,{className:["explanation-icon",null!==n&&void 0!==n?n:""].join(" "),...o})})};var Zo=a(576),Qo=a(567);const ei=pr.b.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    ${e=>{let{$freeSize:t}=e;return t?"padding: 0 var(--spacing-xxs);":"width: 24px;"}};
    height: 24px;
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
	cursor: pointer;
    font-size: var(--fs);
	&:hover {
		background-color: var(--sub-level-4);
	}
`,ti=e=>{let{Icon:t,children:a,onClick:r,iconProps:n,tooltipProps:o,containerProps:i}=e;const{className:l,onClick:s,onKeyDown:c,...d}=null!==i&&void 0!==i?i:{};return Object(p.jsx)(br.a,{title:null,...o,children:Object(p.jsx)(ei,{tabIndex:0,...d,onClick:e=>{null===r||void 0===r||r(),null===s||void 0===s||s(e)},onKeyDown:e=>{null===c||void 0===c||c(e),"Enter"===e.key&&(null===r||void 0===r||r())},className:["icon-button",null!==l&&void 0!==l?l:""].join(" "),$freeSize:!t,children:Object(p.jsxs)(p.Fragment,{children:[t&&Object(p.jsx)(t,{...n}),a]})})})},ai=pr.b.div`
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
`,ri=pr.a`
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
`,ni=pr.b.div`
    ${ri}
`,oi=(e,t)=>{let{onChange:a,value:n,optionList:o,children:i,suffix:l,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),b=o.length;return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}}))),Object(p.jsxs)(ni,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[i&&Object(p.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(p.jsx)("div",{ref:m,className:"radio-train-input-group",...er({setFocus:u,optionLength:b,onTrigger:()=>{const e=o[d];e&&a(e.value)}}),children:o.map(((e,t)=>{let{value:r,props:o,label:i,tooltipProps:l}=e;const{className:s}=null!==o&&void 0!==o?o:{},u=c?r===n:`${r}`===`${n}`;return Object(p.jsx)(br.a,{overlay:null,...l,children:Object(p.jsxs)("label",{...o,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(p.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(p.jsx)("span",{className:"ant-radio-button-inner"})}),Object(p.jsx)("span",{className:"label",children:i})]})},r)}))}),l]})},ii=Object(r.forwardRef)(oi),li=pr.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,si=pr.b.div`
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
`,ci=Object(pr.b)(si)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,di=e=>{let{content:t,children:a,...r}=e;return t?Object(p.jsx)(Vo.a,{content:t,...r,children:a}):Object(p.jsx)(p.Fragment,{children:a})},ui=pr.b.button`
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
`,mi=pr.b.div`
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
`,bi=pr.b.div`
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
`,pi=pr.b.div`
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
`,hi=pr.b.div`
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
`,fi=e=>{let{width:t,height:a,warning:r}=e;return Object(p.jsxs)(hi,{$warning:r,children:[Object(p.jsx)("span",{className:"left-part",children:t}),Object(p.jsx)("span",{children:"\xd7"}),Object(p.jsx)("span",{className:"right-part",children:a})]})},gi=pr.c`
    to {
        transform: rotate(360deg);
    }
`,vi=pr.b.div`
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
`,yi=Object(pr.b)(ai)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":pr.a`animation: ${gi} 12s linear infinite;`}}
        }
    }
`,xi=()=>{const e=Cr(),{setting:t,updateSetting:a}=an((e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}})),{exportFormat:r,resolution:n,allowHotkey:o,reduceMotionColor:i,showCreativeOption:l,showExtraDecorativeOption:s}=t;return Object(p.jsx)(yi,{className:"setting-button",$softMode:i,children:Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(p.jsxs)(vi,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(Qo.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Qo.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Qo.a,{checked:l,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(br.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(p.jsx)(Qo.a,{checked:o,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(p.jsx)(ii,{className:"resolution-list",value:`${n[0]}x${n[1]}`,optionList:Ct.map((t=>{let{height:a,width:r,label:n,scale:o}=t;return{value:`${r}x${a}`,label:o>1?Object(p.jsx)(Vo.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(p.jsx)(ci,{children:e["setting.option.resolution.warning"]}),children:Object(p.jsx)(fi,{width:r,height:a,warning:!0})}):Object(p.jsx)(fi,{width:r,height:a})}})),onChange:e=>{const t=Ft[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(p.jsx)(ii,{value:r,optionList:Tt,onChange:e=>{a({exportFormat:e})}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(p.jsxs)("div",{className:"button-label",children:[Object(p.jsx)(Zo.a,{}),Object(p.jsx)("label",{children:e["setting.button.label"]})]})})})};var ji=a(564);const Oi=pr.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,wi=pr.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #222222 inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?pr.a`animation: 2s linear 350ms 4 ${Oi};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,ki=Object(pr.b)(wi)`
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
`,Si=pr.b.div`
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
    }
    &:last-child {
        .answer {
            margin-bottom: 0;
        }
    }
`,Fi=pr.b.li`
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
`,Ci=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),Ti=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{(async()=>{n(!0);const e=await Ci.getLog();n(!1),t(e)})()}),[]),0!==e.length||a?a?Object(p.jsx)("div",{children:"Loading changelog..."}):Object(p.jsx)("div",{children:e.map(((e,t)=>{let{logList:a,version:r}=e;return Object(p.jsxs)("div",{className:"log-section",children:[Object(p.jsx)("b",{children:r}),Object(p.jsx)("br",{}),Object(p.jsx)("ul",{children:a.map(((e,t)=>{let{content:a,image:n}=e;return Object(p.jsxs)(Fi,{children:[Object(p.jsx)("div",{className:"content",children:a}),n&&Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,title:"Click to open in new tab",children:Object(p.jsx)("img",{src:n,alt:`version-${r}-illust`})})]},t)}))})]},`${r}-${t}`)}))}):Object(p.jsx)("div",{children:"No changelogs"})},Li=Object(pr.b)(ci)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,Ni=Object(r.memo)((()=>{var e;const[t,a]=Object(r.useState)(!1),[n,o]=Lo("versionReminder");return Object(r.useEffect)((()=>{if(n){var e;const t=null!==(e="2.3.0")?e:"0.0.0",r=n;o("2.3.0"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[o,i,l]=String(t).split(".").map(Number);return a!==o?a>o:r!==i?r>i:n>l})(t,r)&&(a(!0),setTimeout((()=>{a(!1)}),8e3))}}),[o,n]),Object(p.jsx)(Vo.a,{placement:"bottom",content:Object(p.jsx)(Li,{children:Object(p.jsx)(Ti,{})}),children:Object(p.jsxs)(wi,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.3.0")?e:"unknown"]})})}));var Ri=a(554);const Bi="faq-button",zi=e=>{let{author:t,question:a,children:r}=e;return Object(p.jsxs)(Si,{children:[Object(p.jsxs)("blockquote",{children:[t&&Object(p.jsx)("label",{children:t}),Object(p.jsx)("div",{className:"question",children:a})]}),Object(p.jsx)("div",{className:"answer",children:r})]})},Ei=()=>{const[e,t]=Object(r.useState)(!1),[a,n]=Object(r.useState)(!1),[o,i]=Lo("faqReminder"),[l,s]=Lo("feedbackReminder");return Object(r.useEffect)((()=>{const e="11/06/2025";o!==e&&(i(e),n(!0),setTimeout((()=>{n(!1)}),8e3))}),[i,o]),Object(r.useEffect)((()=>{!0!==l&&(s(!0),n(!0),mr.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{n(!1)}}))}),[l,s]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ki,{id:Bi,$animating:a,onClick:()=>t((e=>!e)),children:"FAQ"}),Object(p.jsx)(ur.a,{visible:e,onCancel:()=>t(!1),footer:null,children:Object(p.jsxs)(Ri.a,{children:[Object(p.jsxs)(Ri.a.TabPane,{tab:"Feedbacks",children:[Object(p.jsx)("div",{children:Object(p.jsx)("i",{children:"Solved feedbacks are removed."})}),Object(p.jsx)("br",{}),[{author:"Anonymous User at Jun 06, 2025",question:"When using the Link Arrows on a Pendulum card, the Link Rating disappears",answer:"It should be fixed by now"},{author:"Shanaya User at Jun 04, 2025",question:"I would like to request another artwork effect like this, like the effect of the attached picture its a secret rare effect",answer:"I have added foil 9, this is my best and final attempt, sorry if it does not match your need."},{author:"Yugiohfann at Jun 03, 2025",question:"Please fix the ATK/DEF font text, the numbers are higher than the ATK/DEF text."},{author:"Anonymous User at Jun 03, 2025",question:"Small adjustment for size and style of card stats (ATK, DEF). Can you bring back the old size and style of card stats. Now the stats are higher than the ATK and DEF text.",answer:"Can you provide a sample image so I can see the difference? I cannot take action blindly wihout any reference."},{author:"Anonymous User at Jun 02, 2025",question:"please can you add sizing selection in card name? please? thank you!",answer:"Can you provide a sample image of the old card? I would like to take a look to see if it is possible to implement it or not."},{author:"Cardmaker_01",question:"Hello, the Xyz cards have black font in Set ID and Copyright, making it invisible to Xyz cards. Attached screenshot is an example. Can you please fix those fields to white font again? tysm and more power to you :)",answer:"It should be fixed by now, thanks for your feedback."},{author:"galaxy dragon",question:"Can you add a little space on the edge of the spell and trap card? when it is full of text. Thank you.",answer:"I can't quite understand what you mean, can you be more specific, or provide a sample image?"},{author:"Anonymous User at May 27, 2025",question:"Hello, can you add a selection of sizes in card title? because the old card and new card have different card title alignment, the old card seems to appear the title is more stretch than the new maybe because of the card size of the old card. can you fix it pls? maybe add some choices of card title alignments?\nor maybe size? THANK YOU SO MUCH!!",answer:"Do you have any sample image of the old card? I would like to see the difference between the two so I can decide that if it is possible or not."},{author:"ATK/DEF at May 26, 2025",question:"The ATK/DEF text and values seem to have different sizes than usual. Also the ? seems to be in a different format to how it appears in TCG/OCG",answer:"I have made a bit adjustment for font size and font family of stats text."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."},{author:"Shanaya at May 22, 2025",question:"Can you put something rainbow effect on the Finish in number 3?",answer:"I have added art finish type 8, which is a mix between type 3 and 6, you may try that out."}].map(((e,t)=>{let{author:a,question:r,answer:n}=e;return Object(p.jsx)(zi,{author:a,question:r,children:n},t)}))]},"feedback"),Object(p.jsx)(Ri.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'}].map(((e,t)=>{let{question:a,answer:r}=e;return Object(p.jsx)(zi,{question:a,children:r},t)}))},"faq")]})})]})};a(403);const Ii=()=>Object(p.jsx)("div",{className:"affiliation",children:Object(p.jsx)("div",{className:"affiliation-link",children:Object(p.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(Go.a,{})})})}),Wi=pr.b.div`
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
`,Di=()=>{const{language:e,languageInfo:t,languageMetadataMap:a,changeLanguage:r}=Fr((e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}})),{cardList:n,isListDirty:o,toggleVisible:i,visible:l}=Zr(Object(Fo.useShallow)((e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})));return Object(p.jsxs)("div",{className:"app-header",children:[Object(p.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(p.jsxs)("div",{className:"app-description",children:[Object(p.jsxs)("div",{className:"header-language",children:[Object(p.jsx)("h1",{children:"Yugioh Carder"}),Object(p.jsx)(ji.a.Group,{value:t.codeName,size:"small",className:"language-option",children:Object.values(a).filter((e=>{let{active:t}=e;return t})).map((e=>{let{codeName:t,name:a}=e;return Object(p.jsx)(ji.a.Button,{value:t,onChange:e=>r(e.target.value),children:a},t)}))}),Object(p.jsx)(br.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(p.jsx)("span",{className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(Bi))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(Bi))||void 0===e||e.classList.remove("js-highlight")},children:Object(p.jsx)("div",{id:"sentry-bug-report",children:e["contributor.bug-report.tooltip"]})})}),Object(p.jsx)(Ei,{}),Object(p.jsx)(Ni,{})]}),Object(p.jsxs)("div",{className:"app-contribution",children:[Object(p.jsxs)("span",{className:"app-creator",children:[e["contributor.gui.label"],": ",Object(p.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(p.jsx)(Jo,{content:Object(p.jsxs)(ci,{className:"disclaimer",children:[Object(p.jsx)("h2",{children:e["contributor.disclaimer.label"]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:e["contributor.disclaimer.line-1"](Object(p.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(p.jsx)("li",{children:e["contributor.disclaimer.line-2"]}),Object(p.jsx)("li",{children:e["contributor.disclaimer.line-3"]}),Object(p.jsx)("li",{children:e["contributor.disclaimer.line-4"]}),Object(p.jsx)("li",{children:e["contributor.disclaimer.line-5"](Object(p.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(p.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(p.jsx)("li",{children:e["contributor.disclaimer.line-6"]})]})]})})]}),Object(p.jsx)("span",{className:"template-creator",children:e["contributor.template-maker"](Object(p.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"Grezar"})},"artist-1"),Object(p.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"9558able"})},"artist-2"),Object(p.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(p.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(p.jsx)(Wi,{className:"app-setting",children:Object(p.jsx)(xi,{})}),Object(p.jsx)(Wi,{className:"card-manager",children:Object(p.jsx)(ai,{className:dr("manager-button-label",l?"manager-active":""),onClick:()=>i(),children:Object(p.jsxs)("div",{className:"button-label",children:[Object(p.jsx)(Xo.a,{}),Object(p.jsx)("label",{children:e["manager.icon.title"]}),o&&n.length>1&&Object(p.jsx)("div",{className:"manager-notice",children:"*"})]})})})]})},Hi=()=>{const e=Cr();return Object(p.jsxs)(ci,{className:"disclaimer",children:[Object(p.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(p.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(p.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},Ai=()=>Object(p.jsx)(Jo,{overlayClassName:"disclaimer-overlay",content:Object(p.jsx)(Hi,{})});var Mi=a(565),Pi=a(579);a(404);const $i=pr.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,Yi=pr.b.div`
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
`,Ui=pr.b.div`
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
`,Ki=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:o}=null!==a&&void 0!==a?a:{};return Object(p.jsxs)(Ui,{className:`image-with-caption ${o}`,children:[Object(p.jsx)("img",{alt:r,...n}),Object(p.jsx)("div",{className:"caption",children:t})]})},Gi=()=>{const[e,t]=Object(r.useState)(!1),a=Cr();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Mi.a,{footer:null,visible:e,width:"60%",title:Object(p.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"]," ",Object(p.jsx)(Wo.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["guide.format.close"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(p.jsxs)($i,{children:[Object(p.jsxs)("p",{children:[a["guide.format.introduction"](Object(p.jsx)(Zo.a,{},"icon")),"."]}),Object(p.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(p.jsx)(li,{children:"["},"open-tag"),Object(p.jsx)(li,{children:"]"},"close-tag"),Object(p.jsx)(li,{children:"Ctrl-1"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-1"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(p.jsx)(li,{children:"[["},"open-tag"),Object(p.jsx)(li,{children:"]]"},"close-tag"),Object(p.jsx)(li,{children:"Ctrl-Shift-1"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-Shift-1"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(p.jsx)(li,{children:"{"},"open-tag"),Object(p.jsx)(li,{children:"}"},"close-tag"),Object(p.jsx)(li,{children:"Ctrl-2"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-2"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(p.jsx)(li,{children:"|"},"separator"),Object(p.jsx)(li,{children:"Ctrl-3"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-3"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(p.jsx)(li,{children:"||"},"separator"),Object(p.jsx)(li,{children:"Ctrl-4"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-4"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(p.jsx)(li,{children:"{{"},"open-tag"),Object(p.jsx)(li,{children:"}}"},"close-tag"),Object(p.jsx)(li,{children:"Ctrl-5"},"hotkey"),Object(p.jsx)(li,{children:"\u2318-5"},"hokey-alternative")),Object(p.jsxs)(Yi,{className:"panel-figure",children:[Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Ki,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(p.jsxs)(Wo.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(p.jsx)(Pi.a,{})]})]})},Xi=pr.b.div`
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
`,Vi=pr.b.div`
    display: inline-block;
    width: 10px;
`,qi=e=>{let{id:t,tabIndex:a,nameKey:r,labelBackgroundColor:n,labelBackgroundColorList:o,className:i,onClick:l}=e;const s=Cr();return Object(p.jsxs)(Xi,{id:t,tabIndex:a,className:`frame-info-block ${null!==i&&void 0!==i?i:""}`,$withPillar:!(!n&&!o),onClick:l,children:[o?Object(p.jsx)(Vi,{children:o.map((e=>Object(p.jsx)("div",{style:{backgroundColor:e,height:100/o.length+"%"}},e)))}):n?Object(p.jsx)(Vi,{style:{backgroundColor:n}}):null,Object(p.jsx)("label",{className:"frame-info-block-label",children:s[r]})]})};var _i=a(559);const Ji=pr.b.div`
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
`,Zi=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Qi=e=>{let{disabled:t,value:a="",onChange:n}=e;const[o,i]=Object(r.useState)(a),[l,s]=Object(r.useState)((()=>({hex:lr.test(a)?a:"#000000",rgb:sr(a,!1)})));return Object(r.useEffect)((()=>{const e=o.startsWith("#")?o:`#${o}`;lr.test(e)&&(i(e),s({hex:e,rgb:sr(e,!1)}),null===n||void 0===n||n(e))}),[o]),Object(r.useEffect)((()=>{i(a),s({hex:lr.test(a)?a:"#000000",rgb:sr(a,!1)})}),[a]),Object(p.jsxs)(Ji,{children:[Object(p.jsx)("div",{className:"color-list",children:Zi.map((e=>{let{hex:t,rgb:a}=e;const r=(299*a[0]+587*a[1]+114*a[2])/1e3>=128?"#000000":"#FFFFFF";return Object(p.jsx)("div",{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===n||void 0===n?void 0:n(t),children:l.hex.toUpperCase()===t&&Object(p.jsx)("div",{className:"active-dot",style:{backgroundColor:r}})},t)}))}),Object(p.jsxs)("div",{className:"color-input",children:[Object(p.jsx)("div",{className:"color-block static-block",style:{backgroundColor:l.hex}}),Object(p.jsx)(_i.a,{size:"small",value:o,onChange:e=>{i(e.target.value)}})]})]})};var el=a(224),tl=a(580),al=a(581),rl=a(582),nl=a(583);const{height:ol,width:il}=s,ll=pr.b.div`
    width: ${il}px;
    height: ${ol}px;
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
`,sl=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:o,globalScale:i,width:l,height:s}=e;return Object(p.jsxs)("div",{className:"control-container",children:[Object(p.jsxs)("div",{className:"action-list",children:[Object(p.jsx)(ui,{disabled:o>=4,onClick:()=>{t()},children:Object(p.jsx)(tl.a,{})}),Object(p.jsx)(ui,{disabled:o<=1/i,onClick:()=>{a()},children:Object(p.jsx)(al.a,{})}),Object(p.jsx)(ui,{onClick:()=>{r()},children:Object(p.jsx)(rl.a,{})}),Object(p.jsx)(ui,{onClick:()=>{n(-Math.max(0,l-il)/2,-Math.max(0,s-ol)/2,1)},children:Object(p.jsx)(nl.a,{})})]}),Object(p.jsxs)("div",{className:"control-info",children:[o&&Object(p.jsxs)(p.Fragment,{children:["\xd7",o<1?"1/"+Math.round(1/o*10)/10:Math.round(10*o)/10]}),"\xa0(",l," \xd7 ",s,")"]})]})},cl=Object(r.forwardRef)(((e,t)=>{let{globalScale:a}=e;const[n,o]=Object(r.useState)(!1),[i,l]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)((()=>1/a));return Object(r.useImperativeHandle)(t,(()=>({setVisible:o,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>l((e=>e+1)),getCanvasKey:()=>i}))),Object(r.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()}),[a]),Object(p.jsx)(ur.a,{width:`${il+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>o(!1),footer:null,children:Object(p.jsx)(ll,{className:"card-lightbox-container",children:Object(p.jsx)(el.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"card-lightbox-control",children:Object(p.jsx)(sl,{...t,scale:d,globalScale:a,width:il*a,height:ol*a})}),Object(p.jsx)(el.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:il,maxHeight:ol,lineHeight:0},children:Object(p.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:il*a,height:ol*a},i+.1)})]})}})})})})),dl=pr.b.div`
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
`,ul=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:o}=e;const[i,l]=Object(r.useState)(a),s=Cr(),c=JSON.stringify(i);return Object(r.useEffect)((()=>{n(i)}),[c]),Object(p.jsxs)(dl,{className:dr("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)(Qo.a,{checked:t,onChange:e=>o(e.target.checked),children:s["link-picker.label"]})}),Object(p.jsx)("div",{className:"container",children:[...Array(9)].map(((e,a)=>{const r=`${a+1}`;return"5"===r?Object(p.jsx)(br.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(p.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&l([])},children:Object(p.jsx)(b.a,{})})},"5"):Object(p.jsx)("div",{className:`link-marker-button marker-${a+1} ${i.includes(r)?"marker-checked":""}`,onClick:()=>{t&&l((e=>{let t=[...e];return t.includes(r)?t=t.filter((e=>e!==r)):t.push(r),t}))},children:Object(p.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${Se[a]}deg) translateY(-1px)`}})},r)}))})]})};var ml=a(560);const bl=Object(pr.b)(ml.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,pl=Object(pr.b)(ml.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,hl=e=>{let{onChange:t,...a}=e;const r=Cr(),{resolution:n,updateSetting:o}=an(Object(Fo.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}})));return Object(p.jsxs)(ml.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(p.jsx)(bl,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),Ct.map((e=>{let{width:a,height:i,label:l,scale:s}=e;return Object(p.jsx)(pl,{className:n[0]===a&&n[1]===i?"active-setting":"",onClick:()=>{o({resolution:[a,i],globalScale:s}),null===t||void 0===t||t([a,i],s)},children:s>1?Object(p.jsx)(Vo.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(p.jsx)(ci,{children:r["setting.option.resolution.warning"]}),children:Object(p.jsx)(fi,{width:a,height:i,warning:!0})}):Object(p.jsx)(fi,{width:a,height:i})},`${a}-${i}`)}))]})};var fl=a(140),gl=a(287),vl=a.n(gl),yl=a(584),xl=a(585),jl=a(544);const Ol=pr.b.div`
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
`,wl=()=>Object(p.jsx)(jl.a,{});wl.FullView=()=>Object(p.jsx)(Ol,{className:"loading-fullview",children:Object(p.jsx)(jl.a,{size:"large"})});a(421),a(422);const kl=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:o=0,y:i=0,unit:l}=e;if("px"===l){const e=.8,n=400/300,{width:l,height:s}=t,c=s/l>=e?n:1,d=Math.min((null!==o&&void 0!==o?o:0)*c,l),u=Math.min((null!==i&&void 0!==i?i:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,l);return{unit:"%",x:d/l*100,y:u/s*100,width:m/l*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(o<0)return{...e,x:0};if(i<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),b=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,p=b/100,h=p>1?100:b,f=p>1?d/p:d,g=p>1?(100-f)/2:o<0?0:o,v=p>1||i<0?0:i;return{...e,x:g,y:v,height:h,width:f,aspect:a}},Sl=Object(r.forwardRef)(((e,t)=>{let{title:a,backgroundColor:n,className:o,forceFit:i,defaultSourceType:l,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:b,ratio:h,onSourceLoaded:f=()=>{},onSourceChange:g=()=>{},onCropChange:v=()=>{},onTainted:y=()=>{},onMaxSizeExceeded:x=()=>{},onForceFitChange:j=()=>{}}=e;const O="offline"===l?"offline":"online",w=Cr(),k=Object(r.useRef)(null),[S,F]=Object(r.useState)("anonymous"),[C,T]=Object(r.useState)(0),[L,N]=Object(r.useState)(O),[R,B]=Object(r.useState)(O),[z,E]=Object(r.useState)(s),[I,W]=Object(r.useState)(!1),[D,H]=Object(r.useState)(null),[A,M]=Object(r.useState)(!1),[P,$]=Object(r.useState)(c),Y=Object(r.useRef)(null),[U,K]=Object(r.useState)({current:b,completed:null}),[G,X]=Object(r.useState)("%"===b.unit),{current:V,completed:q}=U,_=Object(r.useRef)({source:"",crop:null}),J=Object(r.useCallback)((e=>{if(W(!1),H(null),f(S),Y.current=e,e.src===_.current.source&&_.current.crop){const t=Z.current;setTimeout((()=>{if(t!==Z.current||!_.current.crop)return;const a=kl(_.current.crop,e,h);K({completed:a,current:a}),X(!0),_.current={source:"",crop:null}}),250)}else setTimeout((()=>{K((t=>{const a=kl(t.current,e,h);return{completed:a,current:a}})),X(!0)}),250)}),[S,f,h]);Object(r.useEffect)((()=>{var e,t,a,r;const n=Y.current;if(!q||!d||!n)return;const{aspect:o}=q;d.style.transform="scale(2)";const l=d.getContext("2d");if(!l||"number"!==typeof o||o<=0)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,b=null!==(e=q.unit)&&void 0!==e?e:"px",p=window.devicePixelRatio;l.setTransform(p,0,0,p,0,0);let h,f=Math.floor((null!==(t=q.width)&&void 0!==t?t:0)*("px"===b?u:c/100)),g=Math.min(c,f),y=Math.floor(f/o),x=Math.min(s,y),j=Math.min(c,Math.floor((null!==(a=q.x)&&void 0!==a?a:0)*("px"===b?u:c/100))),O=Math.min(s,Math.floor((null!==(r=q.y)&&void 0!==r?r:0)*("px"===b?m:s/100)));if(l.imageSmoothingQuality="high",!(g<=0||x<=0)){if(j+g>c||O+x>s||j<0||O<0||Math.abs((f-g)/g)>.01||Math.abs((y-x)/x)>.01){"width"===(o*s>c?"width":"height")?(g=c,x=g/o,j=0,O=(s-x)/2,h={unit:"%",aspect:o,height:x/s*100,width:g/c*100,x:0,y:O/s*100}):(g=s*o,x=s,j=(c-g)/2,O=0,h={unit:"%",aspect:o,height:x/s*100,width:g/c*100,x:j/c*100,y:0})}if(i){"width"===(o*s>c?"width":"height")?(g=c,x=g/o):(g=s*o,x=s),d.width=g,d.height=x,l.drawImage(n,0,0,c,s,0,0,g,x)}else{var w,k;d.width=null!==(w=g)&&void 0!==w?w:0,d.height=null!==(k=x)&&void 0!==k?k:0,l.drawImage(n,j,O,g,x,0,0,g,x)}"offline"===L&&(null!==z&&void 0!==z?z:"").length<=0||o===q.aspect&&v(q,L,A),h&&K((e=>({...e,current:h})))}}),[q,d,C,i]),Object(r.useEffect)((()=>{M(!1),K((e=>{if(null!=Y.current&&e.current){const t=kl(e.current,Y.current,h);return{current:t,completed:t}}return e}))}),[h]);const Z=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>I,hasImage:()=>"string"===typeof z&&z.length>0&&"offline"===L||"string"===typeof P&&P.length>0&&"online"===L,forceSource:(e,t,a)=>{const r="offline"===L?z:P;M(!1),r!==t&&(W(!0),N(e),B(e),g(e,t),"offline"===e?E(t):$(t)),F("anonymous"),X("%"===a.unit),Z.current+=1,_.current={source:t,crop:a},T((e=>e+1))}})));const Q="offline"===L&&(null!==z&&void 0!==z?z:"").length>0||"online"===L&&(null!==P&&void 0!==P?P:"").length>0,ee=d&&Q&&!I&&(null===q||void 0===q?void 0:q.width)&&(null===q||void 0===q?void 0:q.height);return Object(p.jsxs)("div",{className:`card-image-cropper ${o}`,children:[Object(p.jsxs)("div",{className:"card-image-source-input",children:[Object(p.jsxs)("div",{className:"card-image-source-input-container",children:[Object(p.jsxs)("div",{className:"card-image-source-input-title",children:[Object(p.jsxs)("span",{className:"field-title",children:[a," ",Object(p.jsx)(ti,{Icon:yl.a,containerProps:{className:ee?"":"disabled"},tooltipProps:{overlay:ee?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>ee&&d&&function(e,t){t&&e&&e.toBlob((e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}}),"image/png",1)}(d,q)})]}),Object(p.jsxs)(ji.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;B(t),((null!==z&&void 0!==z?z:"").length>0&&"offline"===t||(null!==P&&void 0!==P?P:"").length>0&&"online"===t)&&(N(t),"offline"===t?(F("anonymous"),g("offline",z)):g("online",P))},value:R,children:[Object(p.jsx)(br.a,{title:Object(p.jsx)("div",{className:"image-info",children:w["image-cropper.online-tip"]}),children:Object(p.jsx)(ji.a.Button,{value:"online",checked:"online"===R,children:w["image-cropper.source.online.tooltip"]})}),Object(p.jsx)(br.a,{title:Object(p.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(p.jsx)(ji.a.Button,{value:"offline",checked:"offline"===R,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(p.jsx)("div",{className:["card-image-input","online"===R?"":"input-inactive"].join(" "),children:Object(p.jsx)(_i.a,{placeholder:w["image-cropper.placeholder"],value:P,onChange:e=>{const t=e.target.value;F("anonymous"),W(!0),N("online"),B("online"),g("online",t),$(t)},maxLength:512,allowClear:!0},"key")}),Object(p.jsx)("div",{className:["card-image-input","offline"===R?"":"input-inactive"].join(" "),children:Object(p.jsx)(_i.a,{ref:k,type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files.length>0){const t=e.target.files[0],a=4;if(t.size<1024*a*1024){W(!0);const e=new FileReader;e.addEventListener("load",(()=>{"string"===typeof e.result&&(F("anonymous"),E(e.result),N("offline"),B("offline"),g("offline",e.result),W(!1))})),e.readAsDataURL(t)}else x(a)}else alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(p.jsxs)("div",{className:"card-cropper",onKeyDown:()=>{M(!0)},children:[I&&Object(p.jsx)(wl.FullView,{}),Q&&!D&&Object(p.jsxs)("div",{className:"card-image-option",children:[Object(p.jsx)(br.a,{placement:"left",overlay:i?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(p.jsx)("div",{className:dr("image-option force-fit-option",i?"option-active":""),onClick:()=>{M(!0),j(!i)},children:Object(p.jsx)(nl.a,{})})}),!i&&Object(p.jsx)(br.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(p.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{M(!0),K((e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}}))},children:Object(p.jsx)(xl.a,{})})}),!i&&Object(p.jsx)(br.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(p.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{M(!0),K((e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}}))},children:Object(p.jsx)(xl.a,{})})})]}),(!Q||D&&void 0===S)&&!I&&Object(p.jsx)(fl.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(p.jsx)(vl.a,{src:"offline"===L?z:P,disabled:i,className:i?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:J,onImageError:()=>{if(_.current={source:"",crop:null},d)if("online"===L&&""===(null!==P&&void 0!==P?P:"")||"offline"===L&&""===(null!==z&&void 0!==z?z:"")){const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),q&&v(q,L,A),f(S),W(!1),H("Image not found")}else F(void 0),y();else W(!1),H("No receiving canvas"),y();void 0===S&&(W(!1),H("Tainted canvas"))},crop:V,onDragStart:()=>{M(!0)},onChange:(e,t)=>{const a=Y.current;_.current.crop||(G?K((e=>({...e,current:kl(t,a,h)}))):(X(!0),K((t=>({...t,current:kl(e,a,h)})))))},onComplete:(e,t)=>{_.current.crop||K((e=>({...e,completed:t})))},ruleOfThirds:!0,crossorigin:S},`${L}-${G}-${C}`)]})]})})),Fl=e=>Object(p.jsx)(Po,{fallback:Object(p.jsx)(p.Fragment,{}),children:Object(p.jsx)(Ao.a,{...e})}),Cl=pr.b.div`
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
`,Tl=pr.b.div`
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
`,Ll=pr.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Nl=pr.b.div`
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
`,Rl={Container:Ll,Option:Tl},Bl=pr.b.div`
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
`,zl=Object(pr.b)(Wo.a)`
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
`,El=Object(r.forwardRef)(((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:o,globalScale:i,canvasMap:l,onDownloadError:s}=e;const c=Cr(),{allowHotkey:d,resolution:u}=an(Object(Fo.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),{onExport:m}=So(!0,l,{imageChangeCount:o,isInitializing:n,language:c,globalScale:i}),{exportCanvasRef:b}=l,h=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[f,g]=Object(r.useState)(!1),v=Object(r.useCallback)((()=>{g(!1)}),[]),{onSave:y,isPipelineRunning:x}=rn({isTainted:a,isInitializing:n,exportCanvasRef:b,exportRef:h,onExport:m,onDownloadError:s,onDownloadComplete:v}),j=e=>{f||(a?mr.a.error({message:c["prompt.download.tainted.message"]}):(g(!0),y(e)))};return Object(r.useImperativeHandle)(t,(()=>({download:j,isPipelineRunning:x}))),a?null:Object(p.jsxs)("div",{className:"save-button-container",children:[Object(p.jsx)("div",{id:"save-button-waiting"}),Object(p.jsxs)(zl,{className:"save-button",id:"save-button-ready",children:[Object(p.jsx)(br.a,{overlay:d?Object(p.jsx)(p.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(p.jsx)("div",{className:"button-label",children:Object(p.jsx)("div",{className:"label-content",onClick:()=>j(),children:f?c["button.download.ongoing.label"]:c["button.download.label"]})})}),Object(p.jsx)(Do.a,{disabled:f,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(p.jsx)(hl,{onChange:()=>ir()}),children:Object(p.jsxs)(Bl,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(p.jsx)(Ho.a,{className:"resolution-icon"}),Object(p.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]})}));var Il=a(192),Wl=a.n(Il),Dl=a(587),Hl=a(588),Al=a(589),Ml=a(590);const Pl=pr.b.div`
    ${hr} {
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
`,$l=Object(pr.b)(hr)`
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
`,Yl=e=>{let{data:t,children:a,disabled:n,withText:o}=e;const[i,l]=Object(r.useState)(!1);return Object(p.jsxs)($l,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,Wl()(a),l(!0),setTimeout((()=>{l(!1)}),1e3)},children:[i?Object(p.jsx)("div",{className:"copiable-overlay",children:o?Object(p.jsxs)(p.Fragment,{children:["Copied\xa0",Object(p.jsx)(Dl.a,{})]}):Object(p.jsx)(Dl.a,{})}):null,a]})},Ul=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:Oa},{label:e["button.import.for-other.label"],value:"other",converter:Ha}],Kl=Object(r.forwardRef)(((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:o,onRequireDownload:i,onClose:l}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,b]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:h,resolution:f}=an(Object(Fo.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),g=Cr(),v="export-input-raw",y=Object(r.useCallback)((()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())}),[]);Object(r.useImperativeHandle)(t,(()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),b(Ul(g).map((t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:o}=r(e,n);return{value:a,isPartial:t,name:Sa(e.name),data:`${JSON.stringify(o)}`}}catch(o){return console.error(o),{value:a,isPartial:!1,name:"Unknown",data:""}}})).reduce(((e,t)=>{let{data:a,isPartial:r,value:n,name:o}=t;return e[n]={name:o,data:a,isPartial:r},e}),{...m}))}}))),Object(r.useEffect)((()=>{setTimeout((()=>{s&&"ygocarder"===d&&y()}),100)}),[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ur.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay",onCancel:()=>{c(!1),l()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(p.jsxs)(Pl,{children:[Object(p.jsx)(ii,{optionList:Ul(g),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(p.jsxs)("div",{className:"partial-alert",children:[Object(p.jsx)("b",{children:g["service.decode.partial.message"]}),Object(p.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(p.jsxs)("div",{className:dr("export-container-result",`mode_${d}`),children:[Object(p.jsx)(di,{content:a&&"other"===d?Object(p.jsx)(Hi,{}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(hr,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});Ca(Sa(O),e,"application/json")},children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(yl.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(p.jsx)(di,{placement:"bottom",content:j?Object(p.jsx)(ci,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(Yl,{disabled:j,data:m.ygocarder.data,withText:!0,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(Hl.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(p.jsx)(di,{placement:"bottom",content:j?Object(p.jsx)(ci,{children:g["image-cropper.offline-warning"]}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(Yl,{disabled:j,data:window.location.href,withText:!0,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(Al.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.share-button.label"]})]})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(di,{content:a?Object(p.jsx)(Hi,{}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(hr,{disabled:a,className:"export-download-image",onClick:i,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(Ml.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(p.jsx)(Do.a,{overlay:Object(p.jsx)(hl,{}),children:Object(p.jsxs)("div",{className:"resolution-picker",children:[f[0]," \xd7 ",f[1]]})})]}),"ygocarder"===d&&!j&&Object(p.jsx)(_i.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(p.jsx)(br.a,{overlay:h?Object(p.jsx)(p.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(p.jsx)("button",{className:"primary-button export-button",onClick:()=>{o(),c(!0)},children:g["button.export.label"]})}),Object(p.jsx)(Do.a,{overlay:Object(p.jsx)(ml.a,{onClick:e=>e.domEvent.stopPropagation(),children:Ul(g).map(((e,t)=>{let{converter:a,label:r}=e;return Object(p.jsx)(ml.a.Item,{onClick:()=>{try{const e=tn.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});Ca(Sa(e),a,"application/json")})(Sa(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),mr.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:r},`${t}`)}))}),children:Object(p.jsx)(hr,{className:"secondary-button export-custom",children:Object(p.jsx)(yl.a,{})})})]})}));var Gl=a(591);const Xl=pr.b.div`
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
        ${hr} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,Vl=Object(r.forwardRef)(((e,t)=>{let{allowHotkey:a,language:n,onImport:o,onClose:i}=e;const l="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(0),[h,f]=Object(r.useState)("replace"),[g,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)((()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())}),[]);Object(r.useEffect)((()=>{setTimeout((()=>{g&&j()}),100)}),[j,g]),Object(r.useImperativeHandle)(t,(()=>({requestImport:e=>{f(e),v(!0)}})));const O=()=>{b((e=>e+1)),v(!1),x(!1),i()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:r}=Qr(e,"replace"===h||"new"===h?void 0:tn.getState().card);if(r&&mr.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};o(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==h,addToList:"new"===h})}else o(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==h,addToList:"new"===h})}}catch(a){console.error("Import error:",a),mr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},S=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,o=null!==(e=n.trim())&&void 0!==e?e:"";let i="";try{i=ba(decodeURIComponent(o))}catch(a){}let l=null;if(o.startsWith("{")&&o.endsWith("}"))l=o;else if(i.startsWith("{")&&i.endsWith("}"))l=JSON.parse(i);else{var t;const e=o.startsWith("https://db.ygoprodeck.com/api")?o:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${o}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();l=null!==(t=r.data.find((e=>{let{name:t}=e;return t.toLowerCase()===o.toLowerCase()})))&&void 0!==t?t:r.data.sort(((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],o=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!o)return 0;return(n.viewsweek+1)/(o.viewsweek+1)>2?o.viewsweek-n.viewsweek:o.views-n.views}))[0]}await w(l,!0)}}catch(a){console.error("Import error:",a),mr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{O()}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ur.a,{visible:g,title:"merge"===h?n["button.import.merge.label"]:n["button.import.label"],className:"global-overlay",onCancel:O,okText:n["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(p.jsxs)(Xl,{children:["merge"!==h?Object(p.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(p.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(p.jsx)("div",{className:"import-container-input",children:Object(p.jsx)(_i.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:y,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==h?Object(p.jsxs)("div",{className:"import-container-upload",children:[Object(p.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(p.jsxs)(hr,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(p.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),O()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===h&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(p.jsx)(hr,{className:"import-empty",onClick:()=>{w(wt()),O()},children:n["button.empty.label"]})]})]}):null]})}),Object(p.jsx)(br.a,{overlay:a?Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(p.jsxs)("div",{children:["Ctrl-G / \u2318-G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(p.jsx)("button",{className:"primary-button import-button",onClick:()=>{f("replace"),v(!0)},children:n["button.import.label"]})}),Object(p.jsx)(br.a,{overlay:n["button.import.tooltip"],children:Object(p.jsxs)(hr,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(l);e&&e.click()},children:[Object(p.jsx)("input",{ref:d,type:"file",id:l,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),O()}},`direct-file-input-${m}`),Object(p.jsx)(Gl.a,{})]})})]})})),ql=(Object(pr.b)(ml.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),_l=[{value:"normal",label:Object(p.jsx)(b.a,{})},...Object.values(q).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}}))],Jl=()=>Oe.map((e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:o}=e;return{label:Object(p.jsx)(qi,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a}),value:t,edition:o}})),Zl=[...Array(14)].map(((e,t)=>({label:t,value:t}))),Ql=j.map((e=>{let{value:t}=e;return{label:t===x?Object(p.jsx)(b.a,{}):Object(p.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}})),es=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map((e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}})).sort(((e,t)=>e.order-t.order));var ts=a(600),as=a(601),rs=a(602);const ns=pr.b.div`
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
`,os=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Cr(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(p.jsxs)(ns,{tabIndex:-1,className:"char-picker-container",children:[Object(p.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\u2205","\u203b"].map((e=>Object(p.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e)))}),Object(p.jsx)("div",{className:"char-picker-guideline",children:Object(p.jsx)(Jo,{content:Object(p.jsxs)(ci,{children:[r["input.char-picker.guide.header"],Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(p.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var is=a(67),ls=a(593),ss=a(568);a(528),a(529);const cs=Object(r.forwardRef)(((e,t)=>{let{disabled:a,color:n,onSelect:o,onOffsetChange:i,onRemove:l}=e;const s=Cr(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[b,h]=Object(r.useState)(-1),f=Object(r.useRef)(Or()(m,250)).current;return Object(r.useImperativeHandle)(t,(()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:o,round:i}=Math;d(t),m(o(0,n(100,i(100*parseFloat(a))))),h(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===b&&m(r(0,a(100,n(100*parseFloat(t)))))}}))),Object(r.useEffect)((()=>{b>0&&(null===i||void 0===i||i(b,""+u/100))}),[b,u,i]),Object(p.jsxs)("div",{className:"stop-point-control-panel",children:[Object(p.jsxs)("div",{className:"stop-point-offset-input",children:[Object(p.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(p.jsx)(ss.a,{value:u,size:"small",max:100,min:0,onChange:e=>f("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(p.jsx)(Wo.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===l||void 0===l?void 0:l(b),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(p.jsx)(is.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===o||void 0===o||o(e.hex)}})]})})),ds=e=>({colorList:e,raw:Ja(e)}),us=e=>{var t,a;let{palette:n=Ja(_a()),angle:o=180,memoizedOnChange:i}=e;const l=Cr(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(o),[u,m]=Object(r.useState)((()=>{var e,t;const a=Za(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}})),b=Object(r.useCallback)(((e,t)=>m((a=>{const r=a.colorList.map((a=>a.id===e?{...a,offset:t}:a));return{...a,...ds(r)}}))),[]);Object(r.useEffect)((()=>{d(o)}),[o]),Object(r.useEffect)((()=>{var e,t;const a=Za(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})}),[n]);const h=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{var e;u.colorList[0]&&h.current&&(h.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))}),[u.colorList]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find((e=>e.id===a));e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}}),100),()=>{e=!1}}),[u]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&i(u.colorList,c)}),200),()=>{e=!1}}),[u,c,i]),Object(p.jsxs)("div",{className:dr(Yo,"gradient-picker-container"),children:[Object(p.jsxs)("div",{className:"gradient-angle-control",children:[Object(p.jsx)("h2",{children:l["input.name-style.gradient.color-point.label"]}),Object(p.jsxs)(Wo.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m((e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort(((e,t)=>Number(e.offset)-Number(t.offset)));return{...e,...ds(t)}}))},children:[l["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(p.jsx)(Ko,{angle:c,size:120,setAngle:d,children:Object(p.jsx)("h2",{children:l["input.name-style.gradient.gradient-direction.label"]})})]}),Object(p.jsx)("div",{className:"stop-color-picker-container",children:Object(p.jsx)($o.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m((t=>({...t,...ds(e)}))),onColorStopSelect:e=>{var t;m((t=>({...t,currentControlId:e.id}))),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(p.jsx)(cs,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:b,onRemove:e=>{m((t=>{var a;const r=t.colorList.filter((t=>t.id!==e)),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var o;n>0&&u.colorList[n]&&(null===(o=s.current)||void 0===o||o.setColor(u.colorList[n]));return{...ds(r),currentControlId:n}}))}})})})]})},ms=Object(pr.b)(Rl.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,bs=pr.b.div`
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
`,ps=Object(pr.b)(Rl.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,hs=pr.b.div`
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
`;var fs=a(301);const gs=Object(r.forwardRef)(((e,t)=>{let{className:a,defaultValue:n,fieldMap:o,labelMap:i,onChange:l}=e;const s=Cr(),{x:c,y:d,color:u,width:m}=o,[b,h]=Object(r.useState)((()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}})),{x:f,y:g,color:v,width:y}=b,x=i[m];return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&l(b)}),500),()=>{e=!1}}),[b]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==b[a])return void h((t=>({...t,...e})))}}))),Object(p.jsxs)("div",{className:a,children:[Object(p.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(p.jsxs)("div",{className:"line-position",children:[Object(p.jsx)(fs.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==f&&void 0!==f?f:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return h((e=>({...e,x:t,y:a})))}}),Object(p.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(p.jsx)(ss.a,{size:"small",value:f,onChange:e=>h((t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(p.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(p.jsx)(ss.a,{size:"small",value:g,onChange:e=>h((t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(p.jsxs)("div",{className:"single-slider",children:[x,":\xa0",Object(p.jsx)(Fl,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&h((t=>({...t,width:e})))}})]})]}),Object(p.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(p.jsx)(is.b,{colors:St,color:v,onChangeComplete:e=>h((t=>({...t,color:e.hex})))})]})})),vs=Object(r.forwardRef)(((e,t)=>{let{active:a,value:n,onClick:o,onCancel:i}=e;const l=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}}))),Object(p.jsx)(ps,{ref:l,...er({stopPropagation:!0,optionLength:F.length,setFocus:c,onTrigger:()=>{s>=0&&o(F[s])},onCancel:()=>{null===i||void 0===i||i()}}),children:F.map(((e,t)=>{const{key:r,image:i,label:l}=e;return Object(p.jsx)(hs,{className:dr("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),o(e)},children:Object(p.jsx)("img",{className:"preset-preview",src:`/ygocarder/${i}`,alt:l})},r)}))})}));var ys=a(592);const xs=pr.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,js=pr.b.div`
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
`,Os=.01;const ws={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"},ks=Object(r.forwardRef)(((e,t)=>{let{defaultPitch:a=ws.embossPitch,defaultYaw:n=ws.embossYaw,defaultThickness:o=ws.embossThickness,materialColor:i,children:l,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=Qa(),[b,h]=Object(r.useState)("#ffffff"),[f,g]=Object(r.useState)(o),[v,y]=Object(r.useState)(n),[x,j]=Object(r.useState)(a),O=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),k=Object(r.useRef)(o),[S]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{let e=!0;return m&&setTimeout((()=>{if(e){const e=ta(v,x),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(b);(t[0]!==O.current[0]||t[1]!==O.current[1]||t[2]!==O.current[2]||Math.abs(e[0]-w.current[0])>Os||Math.abs(e[1]-w.current[1])>Os||Math.abs(e[2]-w.current[2])>Os||f!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:v,pitch:x,thickness:f}),O.current=t,w.current=e,k.current=f}}),150),()=>{e=!1}}),[m,b,v,x,f]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&h(t),a&&j(a),r&&y(r),"number"===typeof n&&y(n)}}))),Object(p.jsxs)(js,{className:dr(Yo,"emboss-control"),children:[Object(p.jsx)("div",{className:"emboss-control-title",children:l}),Object(p.jsxs)("div",{className:"emboss-control-left",children:[Object(p.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(p.jsx)(xs,{className:"material-color",onClick:c,$color:i})]}),s["input.name-style.emboss.color.alert"](Object(p.jsx)("span",{className:"navigate-button",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(p.jsxs)("h2",{className:"thickness-row",children:[Object(p.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(p.jsx)(Fl,{value:f,min:0,max:4,onChange:e=>{"number"===typeof e&&(g(e),u())}})]}),Object(p.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(p.jsx)(ys.a,{className:"reset-button",onClick:()=>{j(90),u()}})]}),Object(p.jsxs)(bi,{className:"vertical-angle-control",children:[Object(p.jsx)("div",{className:"slider-label"}),Object(p.jsx)(ss.a,{size:"small",min:-90,max:90,onChange:e=>{j("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:x}),Object(p.jsx)(Fl,{min:-90,max:90,value:x,onChange:e=>{j(e),u()}}),Object(p.jsx)("div",{className:"slider-padding"})]}),Object(p.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(p.jsx)(ys.a,{className:"reset-button",onClick:()=>{y(90),u()}})]}),Object(p.jsx)("div",{className:"horizontal-angle-contorl",children:Object(p.jsx)(Ko,{angle:v,size:120,setAngle:e=>{y(e),u()}})})]}),S&&Object(p.jsxs)("div",{className:"emboss-control-right",children:[Object(p.jsx)("h2",{children:"Light color"}),Object(p.jsx)(is.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:b,onChange:e=>{h(e.hex),u()},onChangeComplete:e=>{h(e.hex),u()}})]})]})})),Ss=pr.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,Fs=e=>{let{color:t,onChange:a}=e;const[n,o]=Object(r.useState)(t);return Object(r.useEffect)((()=>{o(t)}),[t]),Object(p.jsxs)(Ss,{children:[Object(p.jsx)(is.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>o(e.hex),onChangeComplete:e=>{o(e.hex),a(e.hex)}}),Object(p.jsx)(is.b,{colors:St,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(535);const Cs=Object(r.forwardRef)(((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:o,showExtraDecorativeOption:i,onChange:l}=e;const s=Cr(),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(-1),[m,h]=Object(r.useState)(!1),[f,g]=Object(r.useState)(n),[v,y]=Object(r.useState)(o),[x,j]=Qa(),O=Object(r.useRef)(Or()(l,250)).current,w=Object(r.useCallback)(((e,t)=>{y((a=>({...a,gradientAngle:t,gradientColor:Ja(e)}))),x()}),[x]),k=an((e=>e.setting.reduceMotionColor)),F=Object(r.useMemo)((()=>{return e=s,Object.values(le).map((t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[s]);Object(r.useEffect)((()=>{0!==j&&(g("custom"),O("custom",v))}),[j]);const C=Object(r.useRef)(null),L=Object(r.useRef)(null),N=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r;y((t=>({...t,...e})));const{lineColor:n,lineWidth:o,lineOffsetX:i,lineOffsetY:l,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:b,embossThickness:p}=e;null===(t=C.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=L.current)||void 0===a||a.setValue({x:i,y:l,width:o,color:n}),null===(r=N.current)||void 0===r||r.setValue({pitch:m,yaw:b,thickness:p})}})));const{fillStyle:R,headTextFillStyle:B,hasOutline:z,hasShadow:E,hasGradient:I,gradientColor:W,gradientAngle:D,hasEmboss:H,embossPitch:A,embossYaw:M,embossThickness:P,pattern:$,font:Y}=v,{labelBackgroundColor:U,labelBackgroundImage:K}=null!==a&&void 0!==a?a:{},G={background:U,backgroundImage:K},X="custom"===f,V="predefined"===f,q="name-style-option-input-container",_=()=>{g("auto"),"auto"!==f&&O("auto",v)},J=()=>{var e;const t=v.preset?null===(e=S[v.preset])||void 0===e?void 0:e.value:{};g("predefined"),y((e=>({...e,...t}))),O("predefined",{...v,...t})},Z=()=>{g("custom"),"custom"!==f&&O("custom",v)},Q="color-picker";return Object(p.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(p.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(p.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(p.jsxs)("span",{className:"name-style-input-container",children:[Object(p.jsxs)("div",{id:q,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...er({setFocus:u,optionLength:3,onKeyPress:e=>{if(1===d&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),u(1),h(!0),setTimeout((()=>{var e;1===d&&(null===(e=c.current)||void 0===e||e.focus())}),200),!1},onTrigger(){0===d&&_(),1===d&&J(),2===d&&Z()}}),children:[Object(p.jsxs)("label",{className:dr("ant-radio-wrapper","auto"===f&&"ant-radio-wrapper-checked",0===d&&"ant-radio-focused"),onClick:()=>_(),children:[Object(p.jsxs)("span",{className:"ant-radio "+("auto"===f?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(p.jsx)("span",{className:"name-style-option-break"}),Object(p.jsx)("label",{className:dr("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",1===d&&"ant-radio-focused"),onClick:()=>J(),children:Object(p.jsx)(Vo.a,{visible:m,onVisibleChange:h,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(vs,{ref:c,active:V,value:v,onCancel:()=>{var e;h(!1),null===(e=document.getElementById(q))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=S[a])||void 0===t?void 0:t.value:{};g("predefined"),y((e=>({...e,...r}))),O("predefined",{...v,...r})}})}),children:Object(p.jsxs)("span",{className:"name-style-option-label",children:[Object(p.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(p.jsx)("span",{className:"name-style-option-break"}),Object(p.jsx)("label",{className:dr("ant-radio-wrapper",X&&"ant-radio-wrapper-checked",2===d&&"ant-radio-focused"),onClick:()=>Z(),children:Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"ant-radio "+(X?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(p.jsxs)("div",{className:"style-picker",children:[Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsxs)("div",{className:"custom-style-text",children:[Object(p.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(p.jsx)(Fs,{color:R,onChange:e=>{g("custom"),y((t=>({...t,fillStyle:e}))),x()}})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"custom-style-text",children:[Object(p.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(p.jsx)(is.b,{colors:St,color:B,onChangeComplete:e=>{g("custom"),y((t=>({...t,headTextFillStyle:e.hex}))),x()}})]})]})}),placement:"bottom",children:Object(p.jsxs)(pi,{id:Q,$softMode:k,$active:X,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(p.jsx)(ls.a,{})]})},"color-picker"),i&&Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Qo.a,{value:"has-shadow",checked:E,onChange:()=>{g("custom"),y((e=>({...e,hasShadow:!e.hasShadow}))),x()},children:s["input.name-style.shadow.toggle.label"]})}),E&&Object(p.jsx)(gs,{ref:C,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y((e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n}))),x()}})]})}),placement:"bottom",children:Object(p.jsxs)(pi,{$softMode:k,$active:X&&E,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(p.jsx)(ls.a,{})]})},"shadow-picker"),Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Qo.a,{value:"has-line",checked:z,onChange:()=>{g("custom"),y((e=>({...e,hasOutline:!e.hasOutline}))),x()},children:s["input.name-style.outline.toggle.label"]})}),z&&Object(p.jsx)(gs,{ref:L,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y((e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n}))),x()}})]})}),placement:"bottom",children:Object(p.jsxs)(pi,{$softMode:k,$active:X&&z,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(p.jsx)(ls.a,{})]})},"outline-picker"),i&&Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Qo.a,{value:"has-gradient",checked:I,onChange:()=>{g("custom"),y((e=>({...e,hasGradient:!e.hasGradient}))),x()},children:s["input.name-style.gradient.toggle.label"]})}),I&&Object(p.jsx)("div",{className:"custom-style-gradient",children:Object(p.jsx)(us,{angle:D,palette:W,memoizedOnChange:w})})]})}),placement:"bottom",children:Object(p.jsxs)(pi,{$softMode:k,$active:X&&I,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(p.jsx)(ls.a,{})]})},"gradient-picker"),i&&Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)(ms,{onClick:e=>e.stopPropagation(),children:[Object(p.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),T.map((e=>{let{key:t,patternImage:a}=e;return Object(p.jsx)(bs,{className:["pattern-option",v.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{y((e=>({...e,pattern:t}))),x()},children:a?Object(p.jsx)("img",{style:a?G:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)}))]})}),placement:"bottomLeft",children:Object(p.jsx)(pi,{$softMode:k,$active:X&&"string"===typeof $&&"none"!==$,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Rl.Container,{children:F.map((e=>{let{value:t,label:a}=e;return Object(p.jsx)(Rl.Option,{className:Y===t?"menu-active":"",onClick:()=>{y((e=>({...e,font:t}))),x()},children:a},t)}))})}),placement:"bottomLeft",children:Object(p.jsx)(pi,{$softMode:k,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),i&&Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Qo.a,{value:"has-emboss",checked:H,onChange:()=>{g("custom"),y((e=>({...e,hasEmboss:!e.hasEmboss}))),x()},children:s["input.name-style.emboss.toggle.label"]})}),H&&Object(p.jsx)(ks,{ref:N,language:s,defaultPitch:A,defaultYaw:M,defaultThickness:P,materialColor:R,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(Q))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;y((e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t}))),x()},children:Object(p.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(p.jsx)(pi,{$softMode:k,$active:X&&H,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker")]})]})]})})})),Ts=pr.a`
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
`,Ls=Object(pr.b)(ii)`
	${Ts}
`,Ns=Object(r.forwardRef)(((e,t)=>{let{onSTFrameChange:a,onPasswordChange:n,onStatChange:o}=e;const{setting:i}=an(),{showExtraDecorativeOption:l}=i,s=Object(r.useMemo)((()=>Jl().filter((e=>l||"normal"===e.edition))),[l]),{frame:c,setCard:d}=tn(Object(Fo.useShallow)((e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}}))),u=Object(r.useCallback)((e=>{d((t=>{const{typeAbility:r,attribute:i,format:l,password:s,star:c,atk:d,def:u,linkRating:m}=t,b=`${e}`,p="spell"===b||"trap"===b,f=p||"speed-skill"===b,g="tcg"===l?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:xe,v="spell"===b?[g["Spell Card"]]:"trap"===b?[g["Trap Card"]]:r,y="token"===b?ve[l]:s,x=f?"":d,j=f?"":u,O=f?"":m,w="token"===b?0:c;return n(y),p&&a(v),f&&o(x,j,O),{...t,frame:b,isLink:"link"===b,attribute:"token"===b?h:p?`${b}`.toUpperCase():i,star:w,typeAbility:v,password:y,atk:x,def:j,linkRating:O}}))}),[d,n,a,o]);return Object(r.useImperativeHandle)(t,(()=>({changeFrame:u}))),Object(p.jsx)(Ls,{className:"frame-radio",value:c,onChange:u,optionList:s})})),Rs=pr.b.div`
    ${ri}
`,Bs=e=>{let{onChange:t,value:a,optionList:n,children:o,className:i}=e;const[l,s]=Object(r.useState)(-1),c=n.length;return Object(p.jsxs)(Rs,{className:["ant-radio-group ant-radio-group-outline checkbox-train",i].join(" "),children:[o&&Object(p.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:o}),Object(p.jsx)("div",{className:"checkbox-train-input-group",...er({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[l];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter((t=>`${e.value}`!==t)):[...a,`${e.value}`])}}}),children:n.map(((e,r)=>{const{label:n,value:o,props:i,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${o}`),d=Object(p.jsxs)("label",{...i,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",l===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter((e=>`${o}`!==e)):[...a,`${o}`])},children:[Object(p.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(p.jsx)("span",{className:"ant-radio-button-inner"})}),Object(p.jsx)("span",{className:"label",children:n})]},o);return s?Object(p.jsx)(br.a,{title:s,children:d},o):d}))})]})},zs=Object(pr.b)(Sl)`
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
`,Es=Object(r.forwardRef)(((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:o,onSourceLoaded:i,onTainted:l,onCropChange:s}=e;const c=Cr(),{background:d,backgroundCrop:u,backgroundType:b,backgroundData:h,backgroundSource:f,backgroundFit:g,isPendulum:v,pendulumSize:y,opacity:x,getUpdater:j,setCard:O}=tn(Object(Fo.useShallow)((e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:o,backgroundFit:i,isPendulum:l,pendulumSize:s,opacity:c},getUpdater:d,setCard:u}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:o,backgroundFit:i,isPendulum:l,pendulumSize:s,opacity:c,getUpdater:d,setCard:u}}))),w=Object(r.useRef)(null),k=Object(r.useMemo)((()=>j("backgroundSource")),[j]),S=Object(r.useMemo)((()=>j("background")),[j]),F=Object(r.useMemo)((()=>j("backgroundData")),[j]),C=Object(r.useCallback)((e=>O((t=>({...t,backgroundFit:e})))),[O]),T=Object(r.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&O((t=>({...t,backgroundCrop:e})),a)}),[s,O]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var o,i;"offline"===n?"string"===typeof r&&a&&(null===(o=w.current)||void 0===o||o.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(i=w.current)||void 0===i||i.forceSource("online",t,a))}}))),Object(p.jsx)(zs,{ref:w,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:f,defaultInternalSource:h,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:o,forceFit:g,onSourceChange:(e,t)=>{k(e),"offline"===e?F(t):S(t)},onCropChange:T,onTainted:l,onSourceLoaded:i,onForceFitChange:C,onMaxSizeExceeded:e=>{mr.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(v,x,b,y).backgroundRatio,beforeCropper:null,children:n})}));var Is=a(594);a(536);const Ws=pr.b.span`
    white-space: pre-line;
`,Ds=pr.b.div`
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
                box-shadow: 0 0 2px 0 #222222;
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
`,Hs=pr.b.div`
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
`,As=Object(r.forwardRef)(((e,t)=>{var a;let{receivingCanvas:n,defaultValue:o,onTainted:i,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const b=Cr(),{background:h,backgroundData:f,backgroundSource:g,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,setCard:O}=tn(Object(Fo.useShallow)((e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:o,isPendulum:i},setCard:l,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:s,hasBackground:o,isPendulum:i,setCard:l}}))),[w,k]=Object(r.useState)(!0),[S,F]=Object(r.useState)(!0),[C,T]=Object(r.useState)((()=>({...d(),...o}))),L=Object(r.useRef)(null),N=Object(r.useMemo)((()=>y("backgroundType")),[y]),R=Object(r.useCallback)((e=>O((t=>({...t,hasBackground:e.target.checked})))),[O]);Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&s(C)}),500),()=>{e=!1}}),[C]),Object(r.useEffect)((()=>{k(!1),setTimeout((()=>{F(!1)}),250)}),[]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=L.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...o}=e;var i;"string"!==typeof t&&"string"!==typeof r||!a||(null===(i=L.current)||void 0===i||i.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const l in o)o[l]!==C[l]&&T((e=>({...e,...o})))}})));const B=0===(null!==h&&void 0!==h?h:"").length&&!0!==(null===(a=L.current)||void 0===a?void 0:a.hasImage());return Object(p.jsxs)(Ds,{className:"card-opacity-slider-container",children:[Object(p.jsx)(br.a,{overlayClassName:"long-tooltip-overlay",title:Object(p.jsx)(Ws,{children:b["input.opacity.boundless.tooltip"]}),children:Object(p.jsx)(mi,{className:"background-label",children:Object(p.jsxs)(Qo.a,{className:"art-frame",onChange:e=>T((t=>({...t,boundless:e.target.checked}))),checked:C.boundless,children:["\xa0",b["input.opacity.boundless.label"]]})})}),Object(p.jsx)(Vo.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:k,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",S?"picker-hidden":""].join(" "),content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)(Hs,{className:["custom-style-picker",B?"overlay-no-background-image":""].join(" "),children:[Object(p.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(p.jsx)(Qo.a,{checked:x,onChange:e=>{R(e)},children:b["input.background.toggle-label"]}),Object(p.jsx)("br",{}),Object(p.jsx)("i",{children:b["input.background.description"]})]}),Object(p.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(p.jsx)(Es,{ref:L,receivingCanvas:n,onSourceLoaded:u,onTainted:i,onCropChange:m,backgroundColor:C.baseFill,children:Object(p.jsxs)("div",{className:"layout-picker-panel",children:[Object(p.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(p.jsx)("h2",{children:b["input.background-color.label"]}),Object(p.jsx)(is.b,{colors:St,color:C.baseFill,onChangeComplete:e=>{T((t=>({...t,baseFill:e.hex})))}})]}),!B&&Object(p.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(p.jsx)("h2",{children:b["input.background-type.label"]}),Object(p.jsx)(ii,{className:"background-type-picker",onChange:N,optionList:l({fit:b["input.background-type.fit.label"],full:b["input.background-type.full.label"],frame:b["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(p.jsxs)(mi,{className:"background-label",children:[Object(p.jsx)("div",{className:"background-preview",style:{backgroundColor:x?C.baseFill:c},children:x?h||f?Object(p.jsx)("img",{className:"background-image-preview",src:"online"===g?h:f,alt:"Background"}):null:Object(p.jsx)(Is.a,{className:"no-background-icon"})}),b["input.background.label"]]})}),kt.map((e=>{var t,a,r;let{labelKey:n,type:o,subType:i,tooltipKey:l}=e;if("pendulum"===o&&!j)return null;const s=!!i,c=i&&C[i];return Object(p.jsxs)(bi,{className:["card-opacity-slider",c?"":"inactive"].join(" "),children:[Object(p.jsxs)(mi,{className:"slider-label",children:[s&&Object(p.jsx)(br.a,{title:l&&null!==(t=b[l])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(p.jsx)(Qo.a,{checked:c,onChange:e=>i&&T((t=>({...t,[i]:e.target.checked})))})}),b[n]]}),Object(p.jsx)(ss.a,{size:"small",min:0,max:100,onChange:e=>T((t=>({...t,[o]:"number"===typeof e?e:100}))),value:null!==(a=C[o])&&void 0!==a?a:100}),Object(p.jsx)(Fl,{min:0,max:100,step:5,onChange:e=>T((t=>({...t,[o]:e}))),value:null!==(r=C[o])&&void 0!==r?r:100}),Object(p.jsx)("div",{className:"slider-padding"})]},o)}))]})}));var Ms=a(595),Ps=a(596),$s=a(597);const Ys=Object(pr.b)(Rl.Container)`
    img.icon-image {
        width: var(--fs-lg);
    }
`,Us=Object(pr.b)(ii)`
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
`,Ks=Object(r.forwardRef)(((e,t)=>{let{showCreativeOption:a}=e;const n=Cr(),{frame:o,subFamily:i,cardIcon:l,star:s,starAlignment:c,getUpdater:d}=tn(Object(Fo.useShallow)((e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starAlignment:o},getUpdater:i}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starAlignment:o,getUpdater:i}}))),u=Object(r.useMemo)((()=>d("cardIcon")),[d]),m=Object(r.useMemo)((()=>d("subFamily")),[d]),h=Object(r.useMemo)((()=>d("star")),[d]),f=Object(r.useMemo)((()=>d("starAlignment")),[d]);Object(r.useImperativeHandle)(t,(()=>({})));const g=ia(o),x="auto"===l?O["none"===g?"auto":g]:O[l],j=n[x.labelKey],k=a?Object(p.jsxs)(p.Fragment,{children:[j," ",Object(p.jsx)(ls.a,{})]}):j,S=Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Ys,{children:w.map((e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(p.jsxs)(Rl.Option,{className:a===l?"menu-active":"",onClick:()=>u(a),children:[r?Object(p.jsxs)(p.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)}))})}),placement:"bottomRight",children:Object(p.jsx)("span",{className:`card-icon-dropdown ${"auto"===l?"":"active"} ${a?"":"disabled"}`,children:k})},"icon-type-picker"),F=a?S:k;return"auto"===l&&"none"===g?a?Object(p.jsx)(ii,{className:"fill-input-train",value:l,onChange:u,optionList:w.map((e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(p.jsx)(b.a,{}),value:a,tooltipProps:{title:n[r]}}})),children:F}):null:"st"===x.value?Object(p.jsx)(ii,{className:"fill-input-train",value:i,onChange:m,optionList:(C=n,y.map((e=>{let{value:t,nameKey:a}=e;return{label:t===v?Object(p.jsx)(b.a,{}):Object(p.jsx)(br.a,{overlay:C[a],children:Object(p.jsx)("img",{alt:C[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}}))),children:F}):Object(p.jsx)(Us,{className:"checkbox-star-train",value:s,onChange:h,optionList:Zl,strict:!0,suffix:a&&Object(p.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(p.jsx)(_i.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:h,placeholder:n["input.icon-type.custom.placeholder"]}),Object(p.jsx)(ii,{value:c,onChange:f,optionList:[{value:"auto",tooltipProps:{overlay:n["input.icon-type.alignment.auto"]},label:Object(p.jsx)(b.a,{})},{value:"left",tooltipProps:{overlay:n["input.icon-type.alignment.left"]},label:Object(p.jsx)(Ms.a,{})},{value:"center",tooltipProps:{overlay:n["input.icon-type.alignment.center"]},label:Object(p.jsx)(Ps.a,{})},{value:"right",tooltipProps:{overlay:n["input.icon-type.alignment.right"]},label:Object(p.jsx)($s.a,{})}]})]}),children:F});var C})),Gs=new Set(["1","2","3","4","5"]),Xs=(e,t,a,r,n,o,i)=>{const l=e.substring(a,r),s="\n"===e[r]||!n;let c=l,d=2;switch(t){case"1":o?(c=`[[${l}]]${s?"":"\n"}`,d=s?4:5):(c=`[${l}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${l}}`;break;case"3":c=`{${l}|}`;break;case"4":c=`{${l}||}`,d=3;break;case"5":c=`{{${l}}}`,d=4}i(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},Vs=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:qs}=_i.a,_s=Object(r.forwardRef)(((e,t)=>{let{id:a,allowHotkey:n,defaultValue:o,onTakePicker:i,onChange:l,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(o),[m,b]=Object(r.useState)(o),[h,f]=Object(r.useState)({id:"",placement:-1}),g=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;u.current=t,b(t)}),[]);Object(r.useEffect)((()=>{Vs(h)}),[h]),Object(r.useEffect)((()=>{l({target:{value:m}})}),[m]);const v=e=>{e!==u.current&&g(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null}))),Object(p.jsx)(qs,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:o,key:i,metaKey:l}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(o||l)&&a&&d!==c&&Gs.has(i)&&(e.preventDefault(),Xs(e.currentTarget.value,i,c,d,!0,e.shiftKey,((e,t)=>{g(e),f({id:a,placement:t})})))},onChange:g,...d})})),Js=Object(r.forwardRef)(((e,t)=>{let{id:a,defaultValue:n,onTakePicker:o,onChange:i,onKeyDown:l,className:s,...c}=e;const{setting:d}=an(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[b,h]=Object(r.useState)(n),[f,g]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;m.current=t,h(t)}),[]);Object(r.useEffect)((()=>{Vs(f)}),[f]),Object(r.useEffect)((()=>{i({target:{value:b}})}),[b]);const y=e=>{e!==b&&v(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:y}))),Object(p.jsx)(_i.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===o||void 0===o?void 0:o({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:b,onKeyDown:e=>{var t,r;if(null===l||void 0===l||l(e),!u)return;const{ctrlKey:n,key:o,metaKey:i}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||i)&&a&&c!==s&&Gs.has(o)&&(e.preventDefault(),Xs(e.currentTarget.value,o,s,c,!1,e.shiftKey,((e,t)=>{v(e),g({id:a,placement:t})})))},onChange:e=>v(e.target.value),...c})})),Zs=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=tn((e=>e.getUpdater)),o=Object(r.useRef)(null),i=Object(r.useMemo)((()=>n("effect",void 0,"debounce")),[n]);return Object(r.useEffect)((()=>{var e;const t=null===(e=o.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))}),[]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;null===(t=o.current)||void 0===t||t.setValue(e)}}))),Object(p.jsx)(_s,{ref:o,id:"effect",allowHotkey:!0,defaultValue:tn.getState().card.effect,onChange:i,onTakePicker:a,autoSize:{minRows:9}})})),Qs=pr.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,ec=e=>{const t=Cr(),{isDuelTerminalCard:a,isFirstEdition:n,isSpeedCard:o,isLimitedEdition:i,isLegacyCard:l,setCard:s}=tn(Object(Fo.useShallow)((e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}))),c=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}))),[s,l]),d=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}))),[s,l]),u=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}))),[s,l]),m=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}))),[s,l]),b=Object(r.useCallback)((e=>s((t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:o,isSpeedCard:i}=t;let l=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&i,l=!d&&!s&&r,c=!(l||s||c)&&o):(s=n,c=!s&&o,d=i,l=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:l,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}))),[s]);return Object(p.jsxs)(Qs,{className:"checkbox-input",children:[Object(p.jsx)(br.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(p.jsx)(Qo.a,{className:"input-legacy",onChange:b,checked:l,tabIndex:0,children:t["input.legacy.label"]})}),Object(p.jsx)(Qo.a,{className:"input-1st",onChange:c,checked:n,tabIndex:0,children:t["input.1st-edition.label"]}),Object(p.jsx)(Qo.a,{className:"input-limited",onChange:d,checked:i,tabIndex:0,children:t["input.limited-edition.label"]}),Object(p.jsx)(Qo.a,{className:"input-speed",onChange:m,checked:o,tabIndex:0,children:t["input.speed-duel.label"]}),Object(p.jsx)(Qo.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var tc=a(598);const ac=Object(pr.b)(Rl.Container)`
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
        top: calc(-1 * var(--spacing-xs));
        right: calc(-1 * var(--spacing-xs));
        border-radius: 0 0 0 var(--br-lg);
        background-color: var(--main-level-4);
        border-left: var(--bw) solid var(--sub-level-4);
        border-bottom: var(--bw) solid var(--sub-level-4);
        &:empty {
            display: none;
        }
    }
    ${Ts}
`,rc=pr.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,nc=pr.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,oc=Object(pr.b)(ii)`
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
`,ic=pr.b.div`
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
`,lc=Object(pr.b)(rc)`
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
`,sc=Object(r.forwardRef)(((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:o}=e;const i=Cr(),{isLink:l,linkRating:s,autoLinkRating:c,showDefAndLink:d,sticker:u,format:m,getUpdater:b}=tn(Object(Fo.useShallow)((e=>{let{card:{sticker:t,format:a,flag:r,isLink:n,linkRating:o,linkMap:i},getUpdater:l}=e;return{linkRating:o,autoLinkRating:i.length,isLink:n,sticker:t,format:a,showDefAndLink:1===r[I],getUpdater:l}}))),h=Object(r.useRef)(null),f=Object(r.useRef)(null),g=Object(r.useRef)(null),v=Object(r.useRef)(null),y=Object(r.useRef)(null),x=m&&ge[m]?ge[m]:ge.tcg,j=Object(r.useMemo)((()=>b("atk",(e=>e))),[b]),O=Object(r.useMemo)((()=>b("def",(e=>e))),[b]),w=Object(r.useMemo)((()=>b("linkRating",(e=>e))),[b]),k=Object(r.useMemo)((()=>b("password",void 0,"debounce")),[b]),S=Object(r.useMemo)((()=>b("sticker")),[b]),F=Object(r.useMemo)((()=>b("creator",void 0,"debounce")),[b]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r,n,o;let{password:i,creator:l,atk:s,def:c,linkRating:d}=e;"string"===typeof s&&(null===(t=g.current)||void 0===t||t.setValue(s)),"string"===typeof c&&(null===(a=v.current)||void 0===a||a.setValue(c)),"string"===typeof i&&(null===(r=h.current)||void 0===r||r.setValue(i)),"string"===typeof l&&(null===(n=f.current)||void 0===n||n.setValue(l)),"string"===typeof d&&(null===(o=y.current)||void 0===o||o.setValue(d))}}))),Object(p.jsxs)(ic,{className:"card-footer-input",children:[(a||n)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Js,{ref:g,id:"atk",addonBefore:i["input.atk.label"],defaultValue:tn.getState().card.atk,onChange:j,onTakePicker:o}),(!l||l&&d)&&Object(p.jsx)(Js,{ref:v,id:"def",addonBefore:i["input.def.label"],defaultValue:tn.getState().card.def,onChange:O,onTakePicker:o}),l&&d&&Object(p.jsx)("div",{}),l&&Object(p.jsx)(Js,{ref:y,id:"link",addonBefore:Object(p.jsxs)(lc,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:i["input.link.label"]}),Object(p.jsx)(br.a,{title:i["input.link.auto.tooltip"],children:Object(p.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof s&&s.length>0?Object(p.jsx)(Qo.a,{onChange:e=>{e.target.checked&&(w(""),y.current.setValue(""))}}):Object(p.jsx)("div",{className:"auto-link-rating",children:l?c:"-"})})})]}),defaultValue:`${tn.getState().card.linkRating}`,onChange:w,onTakePicker:o,placeholder:i["input.link.custom.placeholder"]})]}),Object(p.jsx)(Js,{ref:h,id:"password",addonBefore:Object(p.jsxs)(rc,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:i["input.password.label"]}),Object(p.jsx)(ti,{onClick:()=>{var e;return null===(e=h.current)||void 0===e?void 0:e.setValue(`${or("0123456789",8)}`)},Icon:ys.a,tooltipProps:{overlay:i["button.randomize.label"]}})]}),defaultValue:tn.getState().card.password,onChange:k,onTakePicker:o}),Object(p.jsx)(Js,{ref:f,id:"creator",addonBefore:Object(p.jsxs)(rc,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:i["input.copyright.label"]}),Object(p.jsx)(Do.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(p.jsx)(ml.a,{onClick:e=>e.domEvent.stopPropagation(),children:x.map(((e,t)=>Object(p.jsx)(ml.a.Item,{onClick:()=>{var t;null===(t=f.current)||void 0===t||t.setValue(e)},children:e},`${t}`)))}),children:Object(p.jsx)("div",{children:Object(p.jsx)(ti,{onClick:()=>{},Icon:tc.a})})})]}),defaultValue:tn.getState().card.creator,onChange:F,onTakePicker:o}),Object(p.jsx)(ec,{}),Object(p.jsx)(ii,{className:"sticker-input fill-input-train",value:u,onChange:S,optionList:Ql,children:Object(p.jsx)("span",{children:i["input.sticker.label"]})})]})})),cc=pr.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,dc=Object(pr.b)(ii)`
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
`,uc=Object(pr.b)(Rl.Option)`
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
`,mc=e=>{let{finishValueList:t,changeFinish:a,language:n,showCreativeOption:o}=e;const[i,l]=Object(r.useState)(_.art.key),s={[_.attribute.key]:t[1],[_.background.key]:t[4],[_.icon.key]:t[2],[_.sticker.key]:t[3],[_.art.key]:t[0]},c=Object.values(s).some((e=>"normal"!==e)),d=Object(r.useMemo)((()=>{return e=n,Object.values(_).map((t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[n]),u=o?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[_[i].labelKey]," ",Object(p.jsx)(ls.a,{})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[_[i].labelKey]]}),m=Object(p.jsx)(Vo.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)(Rl.Container,{children:[Object(p.jsx)(Nl,{children:n["input.other-finish.label"]}),d.map((e=>{let{label:t,value:a}=e;return Object(p.jsxs)(uc,{className:dr("normal"===s[a]?"default":"",i===a?"menu-active":""),onClick:()=>{l(a)},children:[Object(p.jsx)("div",{className:"value",children:Object(p.jsx)("div",{className:"tag",children:"normal"===s[a]?"Auto":s[a]})}),Object(p.jsx)("div",{className:"label",children:t})]},a)}))]})}),placement:"bottomRight",children:Object(p.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${o?"":"disabled"}`,children:u})},"icon-type-picker");return Object(p.jsx)(dc,{className:"art-finish-checkbox fill-input-train",value:s[i],onChange:e=>{const t={...s};t[i]=`${e}`,a(t)},optionList:_l,children:m})},bc=Object(r.forwardRef)(((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:n,receivingCanvas:o,onSourceLoaded:i,onTainted:l,onCropChange:s}=e;const c=Cr(),{opacity:d,artFinish:u,otherFinish:b,linkMap:h,isPendulum:f,pendulumSize:g,isLink:v,art:y,artCrop:x,artData:j,artSource:O,artFit:w,getUpdater:k,setCard:S}=tn(Object(Fo.useShallow)((e=>{let{card:{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:o,pendulumSize:i,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m},getUpdater:b,setCard:p}=e;return{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:o,pendulumSize:i,isLink:l,art:s,artCrop:c,artData:d,artSource:u,artFit:m,getUpdater:b,setCard:p}}))),F=Object(r.useRef)(null),C=Object(r.useMemo)((()=>k("linkMap")),[k]),T=Object(r.useCallback)((e=>S((t=>({...t,isLink:e})))),[S]),L=Object(r.useMemo)((()=>k("art")),[k]),N=Object(r.useMemo)((()=>k("artData")),[k]),R=Object(r.useCallback)((e=>S((t=>({...t,artFit:e})))),[S]),B=Object(r.useMemo)((()=>k("artSource")),[k]),z=Object(r.useMemo)((()=>k("artFinish")),[k]),E=Object(r.useMemo)((()=>k("otherFinish")),[k]),I=Object(r.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&S((t=>({...t,artCrop:e})),a)}),[s,S]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=F.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var o,i;"offline"===n?"string"===typeof r&&a&&(null===(o=F.current)||void 0===o||o.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(i=F.current)||void 0===i||i.forceSource("online",t,a))}}))),Object(p.jsx)(Sl,{ref:F,title:c["input.card-art.label"],defaultSourceType:O,defaultExternalSource:y,defaultInternalSource:j,defaultCropInfo:x,forceFit:w,receivingCanvas:o,onSourceChange:(e,t)=>{B(e),"offline"===e?N(t):L(t)},onCropChange:I,onTainted:l,onSourceLoaded:i,onForceFitChange:R,onMaxSizeExceeded:e=>{mr.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(f,d,void 0,g).ratio,beforeCropper:a?Object(p.jsx)(mc,{finishValueList:[u,...b],changeFinish:e=>{z(e[_.art.key]),E([e[_.attribute.key],e[_.icon.key],e[_.sticker.key],e[_.background.key]])},language:c,showCreativeOption:n}):null,children:Object(p.jsx)(cc,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(p.jsx)(ul,{active:!0===v,defaultValue:h,onChange:C,onStatusChange:T},`link-${JSON.stringify(h)}`)})})})),pc=pr.b.div`
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
`,hc=pr.b.span`
    cursor: pointer;
`,fc=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=Cr(),{name:o,format:i,getUpdater:l}=tn(Object(Fo.useShallow)((e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}}))),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)((()=>l("setId")),[l]),u=Object(r.useMemo)((()=>l("name",void 0,"debounce")),[l]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}}))),Object(p.jsxs)(pc,{className:"name-id-input",children:[Object(p.jsx)(Js,{ref:s,id:"name",defaultValue:o,addonBefore:Object(p.jsx)(br.a,{title:n["input.name.tooltip"],children:Object(p.jsx)(hc,{onClick:()=>{navigator.clipboard.writeText(Sa(o))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(p.jsx)(Js,{ref:c,id:"set-id",defaultValue:tn.getState().card.setId,addonBefore:Object(p.jsxs)(rc,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(p.jsx)(ti,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>or("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+or("0000000000111111111122222222223456789",1)+or("0123456789",2))(i))},Icon:ys.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})}));var gc=a(599);const vc=pr.b.div`
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border-top: var(--bw) solid var(--sub-level-3);
`,yc=()=>{const e=Cr(),{flag:t,setCard:a}=tn(Object(Fo.useShallow)((e=>{let{card:{flag:t},setCard:a,getUpdater:r}=e;return{flag:t,setCard:a,getUpdater:r}})));return Object(p.jsx)(vc,{children:t.map(((t,r)=>{const{labelKey:n}=E[r];return Object(p.jsx)("div",{children:Object(p.jsx)(Qo.a,{checked:0!==t,onChange:e=>{((e,t)=>{a((a=>{const r=[...a.flag];return r[t]=e,{...a,flag:r}}))})(e.target.checked?1:0,r)},children:e[n]})},n)}))})},{width:xc,height:jc}=s,Oc=pr.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${ac} {
        border: none;
        box-shadow: none;
        padding: 0;
    }
    .visual-preview-container {
        color: var(--color-heavy);
        width: 110px; // Alignment
        text-align: center;
        label {
            padding-bottom: var(--spacing-xs);
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
`,wc=pr.b.div`
    --layout-width: ${e=>e.$width}px;
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
    .card-layout {
        position: absolute;
        cursor: pointer;
        &.unmodified .overlay-patch {
            background: repeating-linear-gradient(
                45deg,
                #44444466,
                #44444466 8px,
                #00000000 8px,
                #00000000 12px
            );
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
`,kc=e=>{let{tabIndex:t=0,width:a,height:r,baseLayoutState:n,resolvedLayoutState:o,isPendulum:i,activeLayout:l,onClick:s}=e;return Object(p.jsx)(wc,{$width:a,$height:r,$hoverable:!!s,children:[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map((e=>{let{className:a,key:r}=e;const c=o[r];if(!c)return null;if(!i&&"pendulumEffectBackground"===r)return null;const{labelBackgroundColor:d,labelBackgroundImage:u}=je[c];return Object(p.jsx)("button",{...t<0?{}:{tabIndex:t},className:dr(a,r===l?"active":"","auto"===(null===n||void 0===n?void 0:n[r])?"unmodified":""),onClick:()=>null===s||void 0===s?void 0:s(r),style:u?{backgroundImage:u}:{backgroundColor:d},children:Object(p.jsx)("div",{className:"overlay-patch"})},r)}))})},Sc=Object(r.forwardRef)(((e,t)=>{var a;let{frameList:n,onFrameChange:o,onCancel:i}=e;const l=Cr(),{isPendulum:s,frame:c,leftFrame:d,rightFrame:u,pendulumFrame:m,pendulumRightFrame:b,effectBackground:h,pendulumEffectBackground:f,setCard:g,getUpdater:v}=tn(Object(Fo.useShallow)((e=>{let{card:{isPendulum:t,frame:a,leftFrame:r,rightFrame:n,pendulumFrame:o,pendulumRightFrame:i,effectStyle:l,pendulumStyle:s},setCard:c,getUpdater:d}=e;return{isPendulum:t,frame:a,leftFrame:r,rightFrame:n,pendulumFrame:o,pendulumRightFrame:i,effectBackground:l.background,pendulumEffectBackground:s.background,setCard:c,getUpdater:d}}))),y=Object(r.useRef)({topLeftFrame:"auto"===m?"spell":m,topRightFrame:"auto"===m?"spell":m,bottomLeftFrame:"auto"===m?"spell":m,bottomRightFrame:"auto"===m?"spell":m,effectBackground:"auto"===m?"spell":m,pendulumEffectBackground:"auto"===m?"spell":m}),[x,j]=Object(r.useState)(0),[O,w]=Object(r.useState)("frame"),k="frame-layout-main";Object(r.useEffect)((()=>{"pendulumEffectBackground"!==O||s||w("frame")}),[O,s]),Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=document.getElementById(k))||void 0===e?void 0:e.focus()}})));const S=Object(r.useMemo)((()=>v("pendulumFrame")),[v]),F=Object(r.useMemo)((()=>v("pendulumRightFrame")),[v]),C=Object(r.useMemo)((()=>v("leftFrame")),[v]),T=Object(r.useMemo)((()=>v("rightFrame")),[v]),L=e=>g((t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}})),N=e=>g((t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}})),R=e=>{"bottomLeftFrame"===O&&S(e),"bottomRightFrame"===O&&F(e),"topLeftFrame"===O&&C(e),"topRightFrame"===O&&T(e),"effectBackground"===O&&L(e),"pendulumEffectBackground"===O&&N(e)},B={frame:c,topLeftFrame:d,topRightFrame:u,bottomLeftFrame:m,bottomRightFrame:b,effectBackground:h,pendulumEffectBackground:f},z=B[O],E=da(B,s);return Object(p.jsxs)(Oc,{children:[Object(p.jsxs)("div",{className:"visual-preview-container",children:[Object(p.jsx)("label",{children:l["input.advanced-frame.main.label"]}),Object(p.jsx)(qi,{id:k,tabIndex:0,className:"frame"===O?"active":"",...je[c],onClick:()=>w("frame")}),Object(p.jsx)("label",{children:l["input.advanced-frame.detailed.label"]}),Object(p.jsx)(kc,{width:2*Math.round(xc/20),height:2*Math.round(jc/20),isPendulum:s,baseLayoutState:B,resolvedLayoutState:E,activeLayout:O,onClick:e=>w(e)}),Object(p.jsx)(Wo.a,{size:"small",type:"primary",onClick:()=>{S("auto"),F("auto"),C("auto"),T("auto"),L("auto"),N("auto")},children:l["button.reset.label"]})]}),Object(p.jsx)("div",{children:Object(p.jsxs)(ac,{className:"pendulum-frame-picker",...er({stopPropagation:!0,optionLength:n.length,setFocus:j,onTrigger:()=>{x>=0&&R(n[x].value)},onCancel:i}),children:[Object(p.jsx)("div",{className:"frame-part-name",children:l[null===(a=we[O])||void 0===a?void 0:a.labelKey]}),Object(p.jsx)(Qo.a,{className:dr("inline-input","frame"===O?"checkbox-disabled":""),checked:"auto"===z,disabled:"frame"===O,onChange:e=>{var t;R(e.target.checked?"auto":null!==(t=y.current[O])&&void 0!==t?t:"auto")},children:l["input.frame.auto"]}),Object(p.jsx)(ii,{className:"frame-radio",value:z,onChange:e=>{"frame"===O?o(e):R(e)},optionList:n})]})})]})})),{width:Fc,height:Cc}=s,Tc=pr.b.div`
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
`,Lc=pr.b.div`
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
`,Nc=Object(r.forwardRef)(((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:o,onTakePicker:i,onFrameChange:l}=e;const s=Cr(),{isPendulum:c,frame:d,leftFrame:u,rightFrame:m,pendulumFrame:b,pendulumRightFrame:h,effectBackground:f,pendulumEffectBackground:g,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,flag:j,setCard:O,getUpdater:w}=tn(Object(Fo.useShallow)((e=>{let{card:{isPendulum:t,frame:a,leftFrame:r,rightFrame:n,pendulumFrame:o,pendulumRightFrame:i,pendulumScaleBlue:l,pendulumScaleRed:s,pendulumSize:c,effectStyle:d,pendulumStyle:u,flag:m},setCard:b,getUpdater:p}=e;return{isPendulum:t,frame:a,leftFrame:r,rightFrame:n,pendulumFrame:o,pendulumRightFrame:i,pendulumScaleBlue:l,pendulumScaleRed:s,pendulumSize:c,effectBackground:d.background,pendulumEffectBackground:u.background,flag:m,setCard:b,getUpdater:p}}))),{mirrorPendulumScale:k,updateSetting:S}=an(Object(Fo.useShallow)((e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}}))),F=Object(r.useRef)(null),C=Object(r.useRef)(null),T=Object(r.useRef)(null),[L,R]=Object(r.useState)(!1),B=Object(r.useMemo)((()=>w("pendulumScaleRed")),[w]),I=Object(r.useMemo)((()=>w("pendulumScaleBlue")),[w]),W=Object(r.useMemo)((()=>w("pendulumSize")),[w]),D=Object(r.useMemo)((()=>w("pendulumEffect",void 0,"debounce")),[w]),H=Object(r.useMemo)((()=>{return e=s,Object.values(N).map((t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[s]),A=Object(r.useMemo)((()=>Jl().filter((e=>o||"normal"===e.edition))),[o]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=T.current)||void 0===t||t.setValue(a))}})));const M={frame:d,topLeftFrame:u,topRightFrame:m,bottomLeftFrame:b,bottomRightFrame:h,effectBackground:f,pendulumEffectBackground:g},P=j.map(((e,t)=>0!==e?Object(p.jsx)("li",{children:s[E[t].labelKey]},E[t].labelKey):null)).filter((e=>null!=e));return Object(p.jsxs)(Lc,{className:"pendulum-input",children:[Object(p.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(p.jsx)("div",{className:"pendulum-checkbox",children:Object(p.jsx)(Qo.a,{onChange:e=>O((t=>({...t,isPendulum:e.target.checked}))),checked:c,children:s["input.pendulum.label"]})}),Object(p.jsxs)("div",{className:"pendulum-option-container",children:[n&&Object(p.jsx)(Vo.a,{visible:L,onVisibleChange:R,trigger:["click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(p.jsxs)("div",{className:"overlay-event-absorber",children:[Object(p.jsx)(Sc,{ref:C,isPendulum:c,frameList:A,pendulumFrame:b,onFrameChange:l,onCancel:()=>{var e;R(!1),null===(e=F.current)||void 0===e||e.focus()}}),Object(p.jsx)(yc,{})]}),children:Object(p.jsxs)(Tc,{ref:F,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return R(!0),setTimeout((()=>{var e;null===(e=C.current)||void 0===e||e.focus()}),200),!1},children:[Object(p.jsx)("span",{className:"pendulum-frame-label",children:s["input.advanced-frame.label"]}),Object(p.jsx)("div",{className:"card-layout-preview-container",children:Object(p.jsx)(kc,{width:Math.round(30*Fc/Cc),height:30,isPendulum:c,resolvedLayoutState:da(M,c),tabIndex:-1})}),P.length>0?Object(p.jsx)(di,{content:Object(p.jsxs)(ci,{children:[s["input.flag.effective.label"],Object(p.jsx)("ul",{children:P})]}),children:Object(p.jsx)(gc.a,{})}):null,Object(p.jsx)(ls.a,{})]})}),c&&n&&Object(p.jsx)("div",{className:"pendulum-size",children:Object(p.jsx)(Vo.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Rl.Container,{children:H.map((e=>{let{value:t,label:a}=e;return Object(p.jsx)(Rl.Option,{className:x===t?"menu-active":"",onClick:()=>{W(t)},children:a},t)}))})}),placement:"bottomLeft",children:Object(p.jsx)(pi,{$softMode:a,$active:x!==z,children:s[N[x].labelKey]})},"color-picker")}),c&&n&&Object(p.jsx)(Qo.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;S({mirrorPendulumScale:t}),t&&B(v)},checked:k,children:s["input.mirror-scale.label"]})]})]}),c&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(_i.a,{addonBefore:Object(p.jsx)("span",{children:s["input.scale.label"](Object(p.jsx)("span",{className:"blue-scale",children:s["input.scale.blue.label"]},"blue-scale"))}),value:v,allowClear:!0,onChange:e=>{I(e),k&&B(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)(_i.a,{addonBefore:Object(p.jsx)("span",{children:s["input.scale.label"](Object(p.jsx)("span",{className:"red-scale",children:s["input.scale.red.label"]},"red-scale"))}),value:y,allowClear:!0,onChange:e=>{k&&I(e),B(e)}})}),Object(p.jsx)("div",{className:"joined-row",children:Object(p.jsx)(_s,{ref:T,id:"pendulum-effect",allowHotkey:!0,defaultValue:tn.getState().card.pendulumEffect,onChange:D,onTakePicker:i,autoSize:{minRows:5}})})]})]})})),Rc=pr.b.div`
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
`,Bc=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const n=Cr(),{frame:o,cardIcon:i,format:l,furiganaHelper:s,condenseTolerant:c,setCard:d,getUpdater:u}=tn(Object(Fo.useShallow)((e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:o},setCard:i,getUpdater:l}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===o||void 0===o?void 0:o.condenseTolerant,setCard:i,getUpdater:l}}))),m="ocg"===l?"\uff0f":"/",b=Object(r.useRef)(null),h=Object(r.useMemo)((()=>u("typeAbility",(e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map((e=>`${e}`.trim())).filter((e=>"string"===typeof e&&e.length>0))),"debounce")),[u]),f=Object(r.useCallback)((e=>d((t=>({...t,furiganaHelper:e.target.checked})))),[d]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{typeAbility:a}=e;a&&(null===(t=b.current)||void 0===t||t.setValue(a.join(m)))}})));const g="auto"===i?oa({frame:o})?"input.type.monster.label":"input.type.st.label":"st"===O[i].value?"input.type.st.label":"input.type.monster.label",v="ocg"===l;return Object(p.jsxs)(Rc,{className:`post-pendulum-input variant-${l}`,children:[Object(p.jsx)(Js,{ref:b,addonBefore:n[g],id:"type-ability",defaultValue:tn.getState().card.typeAbility.join(m),onChange:h,onTakePicker:a}),v&&Object(p.jsx)(br.a,{overlay:n["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(p.jsx)(Qo.a,{className:"input-kanji-helper",onChange:f,checked:s,children:n["input.furigana-helper.label"]})}),Object(p.jsx)(ii,{className:"condense-input",value:`${c}`,onChange:e=>(e=>{d((t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}})))})(e),optionList:es,children:Object(p.jsxs)("span",{children:[n["input.condense.label"]," ",Object(p.jsx)(Jo,{content:Object(p.jsx)(ci,{children:n["input.condense.tooltip"]})})]})}),Object(p.jsx)(Gi,{})]})})),zc=pr.b.div`
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
`,Ec=pr.b.div`
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
`,Ic={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},Wc=()=>{const e=Cr(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:i,setCard:l,statTextStyle:s,typeTextStyle:c}=tn(Object(Fo.useShallow)((e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:i,statTextStyle:l,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:o,pendulumTextStyle:i,setCard:c,statTextStyle:l,typeTextStyle:s}}))),d=[{info:Ic.effectTextStyle,value:r,extraValue:a},{info:Ic.pendulumTextStyle,value:i,extraValue:o},{info:Ic.statTextStyle,value:s},{info:Ic.typeTextStyle,value:c},{info:Ic.otherTextStyle,value:n}];return Object(p.jsx)(Vo.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Ec,{className:"custom-style-picker",children:d.map((a=>{let{info:r,value:n,extraValue:o}=a;const{keyName:i,labelKey:s,extraKeyname:c}=r,[d,u,m,h]=n,{upSize:f,fontStyle:g}=null!==o&&void 0!==o?o:{};return Object(p.jsxs)("div",{className:"style-section",children:[Object(p.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(p.jsx)("span",{children:e[s]}),Object(p.jsx)(Qo.a,{checked:d,onChange:e=>{l((t=>{const a=e.target.checked;return{...t,[i]:[a,...n.slice(1)]}}))},children:e["input.text-style.custom.label"]})]}),d&&Object(p.jsxs)("div",{className:"style-picker-section",children:["string"===typeof g&&"tcg"===t&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("h2",{className:"font-style-picker",children:[Object(p.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(p.jsx)(ii,{className:"inline-radio-train",value:g,optionList:[{label:Object(p.jsx)(b.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{l((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t}))}})]})}),"number"===typeof f&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("h2",{className:"size-picker",children:[Object(p.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(p.jsx)(ii,{className:"inline-radio-train",value:f,optionList:[{label:Object(p.jsx)(b.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{l((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t}))}})]})}),Object(p.jsx)("h2",{children:Object(p.jsx)(Qo.a,{className:"shadow-checkbox",checked:m,onChange:e=>{l((t=>{const a=e.target.checked;return{...t,[i]:[...n.slice(0,2),a,n[3]]}}))},children:Object(p.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(p.jsx)(Qi,{value:h,onChange:e=>l((t=>({...t,[i]:[...n.slice(0,3),e]})))}),Object(p.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(p.jsx)(is.b,{colors:St,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{l((t=>({...t,[i]:[n[0],e.hex,...n.slice(2,4)]})))}})]})]},i)}))})}),children:Object(p.jsxs)(zc,{className:"text-style-preview",children:[Object(p.jsx)("div",{className:"text-style-grid",children:d.map((e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[o,i,l,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(p.jsx)("div",{className:"text-style-preview-section",style:{background:o?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==i&&void 0!==i?i:"").length&&o?i:"var(--color-contrast)",textShadow:o&&l?`0 0 2px ${s}`:"none",fontStyle:o&&"italic"===d?"italic":"normal"},children:c&&o?Object(p.jsxs)("div",{children:["+",c]}):"Auto"},n)}))}),Object(p.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(537);const Dc=Object(r.forwardRef)(((e,t)=>{let{artworkCanvas:a,backgroundCanvas:n,onCropChange:o,onTainted:i,onSourceLoaded:l}=e;const s=Cr(),{format:c,frame:d,foil:u,finish:m,opacity:v,nameStyleType:y,nameStyle:x,isPendulum:j,attribute:O,getUpdater:w,setCard:k}=tn(Object(Fo.useShallow)((e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:o,nameStyleType:i,nameStyle:l,isPendulum:s,isLink:c,attribute:d},getUpdater:u,setCard:m}=e;return{format:t,frame:a,foil:r,finish:n,opacity:o,nameStyleType:i,nameStyle:l,isPendulum:s,isLink:c,attribute:d,getUpdater:u,setCard:m}}))),{setting:S,updateSetting:F}=an(),{showCreativeOption:C,showExtraDecorativeOption:T,reduceMotionColor:L,showExtraAttribute:N}=S,R=Object(r.useRef)(null),B=oa({frame:d}),[z,E]=Object(r.useState)(0),I=Object(r.useMemo)((()=>{return e={normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]},Z(e).map((e=>{let{color:t,name:a,label:r}=e;return{label:"normal"===a?Object(p.jsx)(b.a,{}):r,value:a,props:{style:{color:t,fontWeight:"bold"}}}}));var e}),[s]),W=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),A=Object(r.useRef)(null),M=Object(r.useRef)(null),P=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),[U,K]=Object(r.useState)({id:"",setValue:()=>{}}),G=Object(r.useMemo)((()=>w("foil")),[w]),X=Object(r.useMemo)((()=>w("finish")),[w]),q=Object(r.useCallback)((e=>k((t=>({...t,opacity:e})))),[k]),_=Object(r.useMemo)((()=>w("attribute")),[w]),J=Object(r.useCallback)(((e,t)=>{k((a=>({...a,nameStyleType:e,nameStyle:t})))}),[k]),Q=Object(r.useMemo)((()=>((e,t,a)=>f.map((a=>{let{name:r,nameKey:n,isCreative:o,supportFormat:i}=a;return{label:r===h?Object(p.jsx)(b.a,{}):Object(p.jsx)(br.a,{overlay:t[n],children:Object(p.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:o,supportFormat:i}})).filter((t=>{let{isCreative:r,supportFormat:n}=t;return(!1===r||r===a)&&n.includes(e)})))(c,s,C)),[c,s,C]),ee=Object(r.useMemo)((()=>((e,t,a)=>g.map((a=>{let{name:r,nameKey:n,isCreative:o,supportFormat:i}=a;return{label:Object(p.jsx)(br.a,{overlay:t[n],children:Object(p.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:o,supportFormat:i}})).filter((t=>{let{isCreative:r,supportFormat:n}=t;return(!1===r||r===a)&&n.includes(e)})))(c,s,C)),[c,s,C]),te=Object(r.useMemo)((()=>{return e=s,Object.values(V).map((t=>{let{value:a,label:r,labelKey:n,tooltipKey:o}=t;return{label:n?e[n]:r,tooltip:o?e[o]:void 0,value:a}}));var e}),[s]);return Object(r.useEffect)((()=>{var e;null===(e=R.current)||void 0===e||e.setValue({font:x.font})}),[x]),Object(r.useEffect)((()=>{var e;null===(e=H.current)||void 0===e||e.setValue(v)}),[v]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=D.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=H.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,n,o,i,l;E((e=>e+1));const{name:s,art:c,artCrop:d,artData:u,artSource:m,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:f,opacity:g,setId:v,pendulumEffect:y,typeAbility:x,effect:j,atk:O,def:w,creator:k,password:S}=e;null===(t=D.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:m}),null===(a=H.current)||void 0===a||a.setValue({...g,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:f}),null===(r=A.current)||void 0===r||r.setValue({name:s,setId:v}),null===(n=M.current)||void 0===n||n.setValue({pendulumEffect:y}),null===(o=P.current)||void 0===o||o.setValue(j),null===(i=$.current)||void 0===i||i.setValue({typeAbility:x}),null===(l=Y.current)||void 0===l||l.setValue({atk:O,def:w,creator:k,password:S})}}))),Object(p.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(p.jsx)(Di,{}),Object(p.jsx)("br",{}),Object(p.jsx)(Ii,{}),Object(p.jsxs)("div",{className:"card-overlay-input",children:[Object(p.jsx)(oc,{className:"format-radio",value:c,onChange:e=>{k((t=>{var a,r,n,o,i;const l=yr(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:b,pendulumEffect:p}=l;return null===(a=A.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=P.current)||void 0===r||r.setValue(d),null===(n=M.current)||void 0===n||n.setValue({pendulumEffect:p}),null===(o=$.current)||void 0===o||o.setValue({typeAbility:u}),null===(i=Y.current)||void 0===i||i.setValue({creator:b,password:m}),l}))},optionList:ql,children:Object(p.jsx)("span",{children:s["input.format.label"]})}),Object(p.jsx)(ii,{className:"foil-radio",value:u,onChange:G,optionList:I,children:Object(p.jsx)("span",{children:s["input.foil.label"]})}),T&&Object(p.jsx)(Bs,{className:"finish-checkbox",value:m,onChange:X,optionList:te,children:Object(p.jsxs)(rc,{className:"finish-checkbox-label",children:[Object(p.jsx)("div",{className:"input-label",children:s["input.finish.label"]}),Object(p.jsx)(ti,{onClick:()=>X([]),Icon:ts.a,tooltipProps:{title:s["input.other-finish.reset.tooltip"]}})]})})]}),C&&Object(p.jsxs)("div",{className:"card-layout-input",children:[Object(p.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(p.jsx)(Jo,{content:Object(p.jsx)(ci,{children:s["input.layout.tooltip"]})})]}),Object(p.jsx)(As,{ref:H,defaultValue:v,receivingCanvas:n,onChange:q,onTainted:i,onCropChange:o,onSourceLoaded:l})]}),Object(p.jsx)(Ns,{ref:W,onSTFrameChange:e=>{var t;return null===(t=$.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=Y.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var r;return null===(r=Y.current)||void 0===r?void 0:r.setValue({atk:e,def:t,linkRating:a})}}),Object(p.jsxs)(nc,{className:"name-style-id-input",children:[Object(p.jsx)(fc,{ref:A,onTakePicker:K}),Object(p.jsx)(Cs,{ref:R,frameInfo:je[d],defaultType:y,defaultValue:x,showExtraDecorativeOption:T,onChange:J},z),Object(p.jsx)(Ks,{showCreativeOption:C})]}),Object(p.jsxs)("div",{className:"main-info",children:[Object(p.jsxs)("div",{className:"main-info-first",children:[Object(p.jsx)(ii,{className:"fill-input-train span-input-train attribute-input",value:O,onChange:_,optionList:Q,suffix:!N&&T?Object(p.jsx)(ti,{onClick:()=>F({showExtraAttribute:!0}),Icon:as.a,tooltipProps:{overlay:s["button.more.label"]}}):null,children:Object(p.jsx)("span",{children:s["input.attribute.label"]})}),T&&N&&Object(p.jsx)(ii,{className:"fill-input-train extra-attribute-input",value:O,onChange:_,optionList:ee,suffix:T&&N?Object(p.jsx)(ti,{onClick:()=>F({showExtraAttribute:!1}),Icon:rs.a,tooltipProps:{overlay:s["button.less.label"]}}):null,children:"\xa0"}),(j||C)&&Object(p.jsx)(Nc,{ref:M,showCreativeOption:C,showExtraDecorativeOption:T,softMode:L,onTakePicker:K,onFrameChange:e=>W.current.changeFrame(e)}),Object(p.jsx)(Bc,{ref:$,onTakePicker:K}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(p.jsx)(Cl,{className:"standalone-label",children:s["input.effect.label"]}),C?Object(p.jsx)(Wc,{}):Object(p.jsx)("div",{}),Object(p.jsx)(os,{targetId:U.id,onPick:U.setValue})]}),Object(p.jsx)(Zs,{ref:P,onTakePicker:K})]}),Object(p.jsx)(sc,{ref:Y,isMonster:B,showCreativeOption:C,onTakePicker:K})]}),Object(p.jsx)("div",{className:"main-info-second",children:Object(p.jsx)(bc,{ref:D,receivingCanvas:a,showCreativeOption:C,showExtraDecorativeOption:T,onSourceLoaded:l,onTainted:i,onCropChange:o})})]})]})}));var Hc=a(545);const{height:Ac,width:Mc,cardBorder:Pc}=s,$c=68/Mc,Yc=pr.b.div`
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
`,Uc=e=>{var t,a,n,o,i,l,s,d;let{index:u,card:b,active:h,language:f,onDuplicate:g,onSelect:y,onDelete:x,style:j}=e;const[O,w]=Object(r.useState)(!1),{art:k,artCrop:S,artData:F,artFit:C,artSource:T,atk:L,attribute:N,background:R,backgroundCrop:B,backgroundData:z,backgroundFit:E,backgroundSource:I,backgroundType:W,cardIcon:D,def:H,format:A,frame:M,leftFrame:P,rightFrame:$,hasBackground:Y,isLink:U,isPendulum:K,linkMap:G,name:X,opacity:V,pendulumFrame:q,pendulumRightFrame:_,pendulumScaleBlue:J,pendulumScaleRed:Z,setId:Q,star:ee,subFamily:te,typeAbility:ae,effectStyle:re,pendulumStyle:ne}=b,{topLeftFrame:oe,topRightFrame:ie,bottomLeftFrame:le,bottomRightFrame:se}=da({frame:M,topLeftFrame:P,topRightFrame:$,bottomLeftFrame:q,bottomRightFrame:_,effectBackground:re.background,pendulumEffectBackground:ne.background},K),ce=Sa(X),de="offline"===T?k?F:"https://i.imgur.com/jjtCuG5.png":k,ue="offline"===I?R?z:"https://imgur.com/pdSVzUZ.png":R,me="auto"===D?ia(M):D,be="st"===me?te:me,pe=na(b),he=!!(L||H||U&&G.length),fe=ae.join(" / "),ge=m(K,V),{artFrameHeight:ve,artFrameWidth:ye}=ge;return Object(p.jsxs)(Yc,{className:dr("truncate",h?"active":"",u%2===0?"alternative-color":""),onClick:()=>y(b),style:j,children:[Object(p.jsxs)("div",{className:"left-slot",children:[Object(p.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(t=je[oe])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=je[oe])||void 0===a?void 0:a.labelBackgroundImage}}),Object(p.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(n=je[ie])||void 0===n?void 0:n.labelBackgroundColor,backgroundImage:null===(o=je[ie])||void 0===o?void 0:o.labelBackgroundImage}}),Object(p.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(i=je[le])||void 0===i?void 0:i.labelBackgroundColor,backgroundImage:null===(l=je[le])||void 0===l?void 0:l.labelBackgroundImage}}),Object(p.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(s=je[se])||void 0===s?void 0:s.labelBackgroundColor,backgroundImage:null===(d=je[se])||void 0===d?void 0:d.labelBackgroundImage}}),Object(p.jsxs)("a",{className:"card-art-container",href:de,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:ye*$c,height:ve*$c,top:(Ac-Mc)/2/2*$c,left:(Mc-ye)/2*$c,backgroundColor:c},children:[Y&&Object(p.jsx)(Gc,{className:"background-art",artLink:ue,name:ce+" - background",fit:E,crop:B,canvasCoordinate:m(K,{...V,boundless:"fit"!==W})}),Object(p.jsx)(Gc,{className:"foreground-art",artLink:de,name:ce,fit:C,crop:S,canvasCoordinate:ge})]}),U&&[...Array(9)].map(((e,t)=>{if(4===t)return null;const a=K?Ce:Fe,r=K?Le:Te;return Object(p.jsx)("div",{className:dr(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,G.includes(`${t+1}`)?"marker-checked":""),style:{top:K?16:19,transform:`rotate(${Se[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)})),K&&J&&Object(p.jsx)("div",{className:"pendulum-scale blue-scale",children:J}),K&&Z&&Object(p.jsx)("div",{className:"pendulum-scale red-scale",children:Z})]}),Object(p.jsxs)("div",{className:"right-slot truncate",children:[Object(p.jsx)("div",{className:"first-row truncate",children:ce}),Object(p.jsxs)("div",{className:"second-row truncate",children:[pe||"NONE"===N?null:Object(p.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${A}-${N.toLowerCase()}.png`,alt:"Icon"}),ae.length>0&&Object(p.jsx)("div",{className:"truncate",children:fe}),"st"!==me&&Object(p.jsx)("div",{className:"padding"}),!U&&be!==v&&"none"!==me&&Object(p.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${be.toLowerCase()}.png`,alt:"Icon"}),!U&&!pe&&"st"!==me&&Object(p.jsx)("span",{className:dr("star-content truncate",fe.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof ee?ee:""!==ee?`"${ee}"`:""})]}),Object(p.jsxs)("div",{className:"third-row truncate",children:[he&&Object(p.jsx)("div",{children:L}),he?Object(p.jsx)("div",{children:"\xa0/\xa0"}):Object(p.jsx)("div",{children:"\xa0"}),he&&Object(p.jsx)("div",{children:U?`Link ${G.length}`:H}),Q&&Object(p.jsx)("div",{className:"set-id",children:Q})]})]}),Object(p.jsx)("div",{className:dr("action-slot",O?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(p.jsxs)("div",{className:"action-container",children:[Object(p.jsx)(br.a,{placement:"left",title:f["manager.button.duplicate.tooltip"],children:Object(p.jsx)(Hl.a,{className:"action-button action-duplicate",onClick:()=>g(b)})}),Object(p.jsx)(Hc.a,{placement:"left",title:f["manager.button.delete.label"],onVisibleChange:e=>w(e),onConfirm:()=>x(b.id),okText:f["manager.button.delete.confirm.label"],cancelText:f["manager.button.delete.cancel.label"],children:Object(p.jsx)(br.a,{placement:"left",title:f["manager.button.delete.tooltip"],children:Object(p.jsx)(gr.a,{className:"action-button action-delete"})})})]})})]})},Kc=(e,t,a,r,n)=>{var o;const{artWidth:i,artY:l,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:b,y:p}=null!==(o=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==o?o:{},h=e*((null!==u&&void 0!==u?u:0)/100),f=t*((null!==m&&void 0!==m?m:0)/100),g=i*$c/(h<=0?1:h);return{top:(null!==p&&void 0!==p?p:0)/100*-t*g,left:(null!==b&&void 0!==b?b:0)/100*-e*g,width:e*g,height:n?t*(i/s*$c/(f<=0?1:f)):void 0,transform:`translateX(${-(i===c?0:(Mc-c)/2-Pc)*$c}px) translateY(${-(d-l)*$c}px)`}},Gc=e=>{let{artLink:t,name:a,crop:n,className:o,fit:i,canvasCoordinate:l,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,b]=Object(r.useState)((()=>{var e,t,a,r;return Kc(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,i)}));return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&d(t)}),500),()=>{e=!1}}),[t]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{var t,a,r,o;e&&b(Kc(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(o=u.current)||void 0===o?void 0:o.naturalHeight)&&void 0!==r?r:1,l,n,i))}),500),()=>{e=!1}}),[n,l,i]),Object(p.jsx)("img",{ref:u,className:dr("card-art",o),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;b(Kc(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,n,i))}})};var Xc=a(295),Vc=a(307);const qc=pr.b.div`
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
`,_c=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,language:o,list:i,onDelete:l,onDownload:s,onDuplicate:c,onSelect:d}=t;return Object(p.jsx)(Uc,{index:a,card:i[a],active:i[a].id===n,language:o,onDuplicate:c,onSelect:d,onDownload:s,onDelete:l,style:r})},Jc=e=>{let{language:t,onSelect:a,onDownload:n,onRequestImport:o}=e;const{activeId:i,cardDisplayList:l,deleteCard:s,duplicateCard:c,resetFilter:d}=Zr(Object(Fo.useShallow)((e=>{let{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:n,resetFilter:o}=e;return{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:n,resetFilter:o}}))),[u,m]=Object(r.useState)(0),b=e=>{s(e),m((e=>e+1))};return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{if(e&&u>0){const{activeId:e,cardList:t,setCardList:r}=Zr.getState(),n=t.find((t=>t.id===e));if(n)a(n);else{const e={id:Object(L.a)(),...wt()};r([e],e.name)}}}),500),()=>{e=!1}}),[a,u]),Object(p.jsxs)(qc,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Object(p.jsx)("div",{className:"list-container",children:Object(p.jsx)(Xc.a,{children:e=>{let{height:r,width:o}=e;return Object(p.jsx)(Vc.a,{className:"List",height:r,itemCount:l.length,itemSize:68,itemData:{list:l,language:t,activeId:i,onDuplicate:c,onSelect:a,onDownload:n,onDelete:b},overscanCount:5,width:o,children:_c})}})}),0===l.length&&Object(p.jsxs)("div",{className:"no-card",children:[Object(p.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(p.jsx)("div",{className:"reset-filter",onClick:d,children:t["manager.button.search.button.reset.label"]})]}),Object(p.jsx)(Wo.a,{className:"add-card",onClick:o,children:t["manager.button.add.label"]})]})};var Zc=a(604),Qc=a(561),ed=a(603);const{Panel:td}=Qc.a,ad=pr.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,rd=Object(pr.b)(li)`
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
`,nd=Object(pr.b)(ur.a)`
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
                ${rd} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,od=e=>{let{data:t,children:a}=e;const[n,o]=Object(r.useState)(!1);return Object(p.jsxs)(rd,{onClick:e=>{var a;e.stopPropagation(),a=t,Wl()(a),o(!0),setTimeout((()=>{o(!1)}),1e3)},children:[n?Object(p.jsx)("div",{className:"copiable-overlay",children:Object(p.jsx)(Dl.a,{})}):null,a]})},id=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(ad,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(p.jsx)(ed.a,{})]}),Object(p.jsx)(nd,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(p.jsxs)("div",{className:"sample-modal-container",children:[Object(p.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(p.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(p.jsx)("div",{className:"download-button",children:Object(p.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(p.jsx)(Wo.a,{children:t["manager.template.download.label"]})})}),Object(p.jsx)(Qc.a,{ghost:!0,children:Object(p.jsx)(td,{header:Object(p.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(p.jsxs)("table",{className:"option-container",children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(p.jsx)("th",{children:Object(p.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(p.jsx)("div",{children:["tcg","ocg"].map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Frame",altField:"Bottom Frame",value:Object(p.jsx)("div",{children:Oe.map((e=>{let{name:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Attribute",value:Object(p.jsx)("div",{children:[...f,...g].filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Spell/Trap Icon",value:Object(p.jsx)("div",{children:y.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Sticker",value:Object(p.jsx)("div",{children:j.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Foil",value:Object(p.jsx)("div",{children:Z().filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Card Finish",value:Object(p.jsxs)("div",{children:[Object.values(V).map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)})),Object(p.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(p.jsx)("div",{children:Object.values(q).map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Star Type",value:Object(p.jsx)("div",{children:["number","text"].map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Star Alignment",value:Object(p.jsx)("div",{children:["left","center","right"].map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Card Icon Type",value:Object(p.jsx)("div",{children:w.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Background Type",value:Object(p.jsx)("div",{children:l().map((e=>{let{value:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Condense Rate",value:Object(p.jsx)("div",{children:Object.keys(D).map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Name Style Type",value:Object(p.jsx)("div",{children:["predefined","custom"].map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Name Style - Font",value:Object(p.jsx)("div",{children:Object(p.jsx)(od,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(p.jsx)("div",{children:Object.keys(S).map((e=>Object(p.jsx)(od,{data:e,children:e},e)))})},{field:"Name Style - Pattern",value:Object(p.jsx)("div",{children:T.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{key:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})},{field:"Pendulum Size",value:Object(p.jsx)("div",{children:R.map((e=>{let{key:t}=e;return Object(p.jsx)(od,{data:t,children:t},t)}))})}].map((e=>{let{field:t,altField:a,value:r}=e;return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[Object(p.jsx)(rd,{children:t}),a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)(rd,{children:a})]})]}),Object(p.jsx)("td",{children:r})]},t)}))]})},"sample-option")})]})})]})};var ld=a(162);const sd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),cd=pr.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,dd=Object(pr.b)(Mi.a)`
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
`,ud=Object(r.forwardRef)(((e,t)=>{let{language:a,onVisibleChange:n,onSelect:o,onDownload:i,onRequestImport:l}=e;const s="list-upload-id",c=Object(r.useRef)(null),{cardList:d,changeEditStatus:u,pendingActiveCard:m,setActiveId:b,setCardList:h,setFilterFunction:f,setListName:g,setPendingActiveCard:v,sortList:y,toggleVisible:x,visible:j}=Zr(Object(Fo.useShallow)((e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:o,setFilterFunction:i,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:o,setFilterFunction:i,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}}))),O=an((e=>e.setting.exportFormat)),[w,k]=Object(r.useState)(0),[S,F]=Object(r.useState)(!1),[C,T]=Object(r.useState)(!1),L=Or()((e=>{f({type:"text",value:e.target.value})}),250),N=Object(r.useCallback)((e=>{o(e),b(e.id)}),[o,b]);return Object(r.useEffect)((()=>{m&&(o(m),b(m.id),v())}),[o,m,b,v]),Object(r.useEffect)((()=>{localStorage.setItem("manager-panel-visible",j.toString()),n(j)}),[n,j]),Object(r.useEffect)((()=>{const e=Zr.subscribe((e=>e.filterResetSignal),(e=>{e&&k((e=>e+1))}));return()=>{e()}}),[]),Object(r.useImperativeHandle)(t,(()=>({})),[]),Object(p.jsx)(cd,{children:Object(p.jsx)(dd,{title:Object(p.jsxs)("div",{className:"card-manager-header truncate",children:[Object(p.jsx)(bd,{className:"manager-label-container truncate",language:a,children:d.length}),Object(p.jsxs)("div",{className:"manager-button-container",children:[Object(p.jsx)("div",{className:"manager-button",children:Object(p.jsx)(id,{language:a})}),Object(p.jsx)(Do.a,{overlay:Object(p.jsx)(ml.a,{children:[{value:_r.level.key,label:a["manager.button.sort.level.label"]},{value:_r.name.key,label:a["manager.button.sort.name.label"]},{value:_r.atk.key,label:a["manager.button.sort.atk.label"]},{value:_r.def.key,label:a["manager.button.sort.def.label"]},{value:_r.set.key,label:a["manager.button.sort.set-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(p.jsx)(ml.a.Item,{onClick:()=>y(t),children:a},t)}))}),children:Object(p.jsx)("div",{className:"manager-button",children:Object(p.jsx)(tc.a,{})})}),Object(p.jsx)(br.a,{title:a["manager.header.button.download.tooltip"],children:Object(p.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(T(!0),sd.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Nr.length;let r="";for(let n=0;n<e.length;n++){const o=(e,t)=>{const a=Er[e];"number"===typeof a&&("string"===typeof t&&(i[a]=t),"number"===typeof t&&(i[a]=`${t}`),"boolean"===typeof t&&(i[a]=`${t}`),null==t&&(i[a]=""))},i=Array(a).map((()=>"")),{art:l,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:m,attribute:b,background:p,backgroundCrop:h,backgroundFit:f,backgroundSource:g,backgroundType:v,cardIcon:y,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:k,externalInfo:S,finish:F,flag:C,foil:T,format:L,frame:N,furiganaHelper:R,hasBackground:B,isDuelTerminalCard:z,isFirstEdition:E,isLegacyCard:I,isLimitedEdition:W,isLink:D,isPendulum:H,isSpeedCard:A,leftFrame:M,linkMap:P,linkRating:$,name:Y,nameStyle:U,nameStyleType:K,opacity:G,otherFinish:X,otherTextStyle:V,password:q,pendulumEffect:_,pendulumFrame:J,pendulumRightFrame:Z,pendulumScaleBlue:Q,pendulumScaleRed:ee,pendulumSize:te,pendulumStyle:ae,pendulumTextStyle:re,rightFrame:ne,setId:oe,star:ie,starAlignment:le,statTextStyle:se,sticker:ce,subFamily:de,typeAbility:ue,typeTextStyle:me}=e[n],be=JSON.stringify(S),pe=C.join("|");o("Format",L),o("Frame",N),o("Name",Y),o("Attribute",b),o("Star",`${ie}`),o("Spell/Trap Icon",de),o("Art Link",l),o("Type Ability",ue.join("/")),o("Effect",O),o("Set Id",oe),o("ATK",m),o("DEF",j),o("Password",q),o("Sticker",ce),o("Copyright",x),o("Is Pendulum",H),o("Pendulum Effect",_),o("Pendulum Scale Red",ee),o("Pendulum Scale Blue",Q),o("Is Link",null!==D&&void 0!==D?D:void 0),o("Link - Top Left Arrow",P.includes("1")),o("Link - Top Arrow",P.includes("2")),o("Link - Top Right Arrow",P.includes("3")),o("Link - Left Arrow",P.includes("4")),o("Link - Right Arrow",P.includes("6")),o("Link - Bottom Left Arrow",P.includes("7")),o("Link - Bottom Arrow",P.includes("8")),o("Link - Bottom Right Arrow",P.includes("9")),o("Link Rating",$),o("Is First Edition",E),o("Is Speed Card",A),o("Is Limited Edition",W),o("Is Duel Terminal Card",z),o("Is Legacy Card",I),o("Foil",T),o("Art Finish",c),o("Card Finish",F.join(",")),o("Art Crop - X (%)",s.x),o("Art Crop - Y (%)",s.y),o("Art Crop - Width (%)",s.width),o("Art Crop - Height (%)",s.height),o("Is Using Full Art",d),o("Star Type","number"===typeof ie&&ie>=0&&ie<=13?"number":"text"),o("Star Alignment",le),o("Card Icon Type",y),o("Opacity - Body",G.body),o("Opacity - Pendulum",G.pendulum),o("Opacity - Text",G.text),o("Opacity - Name",G.name),o("Opacity - Base Fill",G.baseFill),o("Opacity - Art Border",G.artBorder),o("Opacity - Name Border",G.nameBorder),o("Opacity - Boundless",G.boundless),o("Has Background",B),o("Background Link",p),o("Is Using Full Background",f),o("Background Type",v),o("Background Crop - X (%)",h.x),o("Background Crop - Y (%)",h.y),o("Background Crop - Width (%)",h.width),o("Background Crop - Height (%)",h.height),o("Bottom Frame",J),o("Condense Rate",w.condenseTolerant),o("Use Furigana Helper",R),o("Name Style Type",K),o("Name Style - Font",U.font),o("Name Style - Fill Style",U.fillStyle),o("Name Style - Headtext Fill Style",U.headTextFillStyle),o("Name Style - Shadow Color",U.shadowColor),o("Name Style - Shadow Offset Y",U.shadowOffsetY),o("Name Style - Shadow Offset X",U.shadowOffsetX),o("Name Style - Shadow Blur",U.shadowBlur),o("Name Style - Has Shadow",U.hasShadow),o("Name Style - Line Color",U.lineColor),o("Name Style - Line Width",U.lineWidth),o("Name Style - Line Offset Y",U.lineOffsetY),o("Name Style - Line Offset X",U.lineOffsetX),o("Name Style - Has Outline",U.hasOutline),o("Name Style - Gradient Angle",U.gradientAngle),o("Name Style - Gradient Color",U.gradientColor),o("Name Style - Has Gradient",U.hasGradient),o("Name Style - Emboss Pitch",U.embossPitch),o("Name Style - Emboss Yaw",U.embossYaw),o("Name Style - Emboss Thickness",U.embossThickness),o("Name Style - Has Emboss",U.hasEmboss),o("Name Style - Preset",U.preset),o("Name Style - Pattern",U.pattern),o("Stat Style - Is Custom",se[0]),o("Stat Style - Fill Color",se[1]),o("Stat Style - Has Shadow",se[2]),o("Stat Style - Shadow Color",se[3]),o("Type Style - Is Custom",me[0]),o("Type Style - Fill Color",me[1]),o("Type Style - Has Shadow",me[2]),o("Type Style - Shadow Color",me[3]),o("Effect Style - Is Custom",k[0]),o("Effect Style - Fill Color",k[1]),o("Effect Style - Has Shadow",k[2]),o("Effect Style - Shadow Color",k[3]),o("Effect Style - Upsize",w.upSize),o("Effect Style - Font Style",w.fontStyle),o("Effect Style - Background",w.background),o("Pendulum Size",te),o("Pendulum Effect Style - Is Custom",re[0]),o("Pendulum Effect Style - Fill Color",re[1]),o("Pendulum Effect Style - Has Shadow",re[2]),o("Pendulum Effect Style - Shadow Color",re[3]),o("Pendulum Effect Style - Upsize",ae.upSize),o("Pendulum Effect Style - Font Style",ae.fontStyle),o("Pendulum Effect Style - Background",ae.background),o("Other Style - Is Custom",V[0]),o("Other Style - Fill Color",V[1]),o("Other Style - Has Shadow",V[2]),o("Other Style - Shadow Color",V[3]),o("Other Finish - Attribute",X[0]),o("Other Finish - Icon",X[1]),o("Other Finish - Sticker",X[2]),o("Other Finish - Background",X[3]),o("Left Frame",M),o("Right Frame",ne),o("Bottom Right Frame",Z),o("Flag",pe),o("External Info (JSON)","{}"===be?"":be),("offline"===u||B&&"offline"===g)&&(r="offline-data"),t.push(i.map(Ir).join(","))}return{value:[Nr.join(","),t.join("\n")].join("\n"),error:r}})(Zr.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&mr.a.error({message:t,description:r})}switch(O){case"xlsx":{const e=ld.a.read(t,{type:"string"});ld.a.writeFile(e,`${Zr.getState().listName}.xlsx`);break}default:Ca(Zr.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}u("download")}catch(t){}T(!1)},children:C?Object(p.jsx)(Zc.a,{}):Object(p.jsx)(yl.a,{})})}),Object(p.jsx)(br.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(p.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(s);e&&!S&&e.click()},children:[Object(p.jsx)("input",{ref:c,type:"file",id:s,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=c.current)||void 0===t?void 0:t.files,{isListDirty:n}=Zr.getState(),i=()=>{k((e=>e+1)),F(!1),mr.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let l=!0;if(n&&(l=window.confirm(a["prompt.warning.on-import.label"])),l&&r&&r[0]){F(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=ld.a.read(e,{codepage:65001}),n=ld.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),l=Mr(n);l.length>0?(h(l,l[0].id),g(t),k((e=>e+1)),o(l[0]),F(!1)):i()}catch(e){console.error(e),i()}}else k((e=>e+1)),F(!1)}},`upload-${w}`),S?Object(p.jsx)(Zc.a,{}):Object(p.jsx)(Gl.a,{})]})},`${S}`),Object(p.jsx)("div",{className:"manager-button close-button",onClick:()=>x(!1),children:Object(p.jsx)(gr.a,{})})]}),Object(p.jsx)("div",{className:"card-manager-filter",children:Object(p.jsx)(_i.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>f({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${w}`)})]}),visible:j,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>x(!1),width:280,children:Object(p.jsx)(Jc,{language:a,onSelect:N,onDownload:i,onRequestImport:l})})})})),md=pr.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,bd=e=>{let{language:t,children:a,...n}=e;const{isListDirty:o,cardList:i}=Zr(Object(Fo.useShallow)((e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}})));return Object(r.useEffect)((()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return o&&i.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[i.length,o,t]),Object(p.jsxs)(md,{...n,children:[a,o&&i.length>1&&Object(p.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},pd=pr.b.div`
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
        ${hr} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,hd=pr.b.div`
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
`,fd=pr.b.div`
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
`,gd=pr.b.div`
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
`,vd=pr.b.div`
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
`,yd=pr.b.span`
    color: var(--main-danger);
`,xd=Object(pr.b)(ui)`
    position: absolute;
    z-index: 101;
`,jd=Object(pr.b)(xd)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,Od=Object(pr.b)(xd)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var wd=a(227),kd=a(553),Sd=a(556),Fd=a(566),Cd=a(569);Object(wd.configure)({ignoreTags:[]});const Td={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:Ld,width:Nd}=s;var Rd=function(){var e,t,a,n,o,i,l;const{allowHotkey:s,softMode:c,globalScale:d,resolution:u}=an(Object(Fo.useShallow)((e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r,resolution:n}}=e;return{softMode:a,allowHotkey:t,globalScale:r,resolution:n}}))),{isInitiating:m,isLoading:b,language:h,isMetadataReady:f,languageInfo:g,initiate:v,loadDefaultLanguage:y}=Fr(Object(Fo.useShallow)((e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:o,initiate:i,loadDefaultLanguage:l}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:o,initiate:i,loadDefaultLanguage:l}}))),[x,j]=Object(r.useState)(!0),[O,w]=Object(r.useState)(""),[k,S]=Object(r.useState)("online"),[F,C]=Object(r.useState)(!1),T=Object(r.useRef)(null),L=Object(r.useRef)(null),N=Object(r.useRef)(null),R=Object(r.useRef)(null),B=Object(r.useRef)(null),z=Object(r.useRef)(null),E=Object(r.useRef)(null),I=Object(r.useRef)(null),W=Object(r.useRef)(null),D=Object(r.useRef)(null),H=Object(r.useRef)(null),A=Object(r.useRef)(null),M=Object(r.useRef)(null),P=Object(r.useRef)(null),$=Object(r.useRef)(null),Y=Object(r.useRef)(null),U=Object(r.useRef)(null),K=Object(r.useRef)(null),G=Object(r.useRef)(null),[X]=Object(r.useState)({artworkCanvasRef:L,backgroundCanvasRef:N,exportCanvasRef:R,frameCanvasRef:z,cardIconCanvasRef:E,pendulumScaleCanvasRef:I,pendulumEffectCanvasRef:W,typeCanvasRef:D,effectCanvasRef:H,nameCanvasRef:A,statCanvasRef:M,setIdCanvasRef:P,passwordCanvasRef:$,creatorCanvasRef:Y,stickerCanvasRef:U,finishCanvasRef:K,lightboxRef:G,previewCanvasRef:B}),V=Object(r.useRef)(null),q=Object(r.useRef)(null),_=Object(r.useRef)(null),[J,Z]=Object(r.useState)(0);Object(r.useEffect)((()=>{v()}),[v]),Object(r.useEffect)((()=>{f&&y()}),[f,y]),Object(r.useEffect)((()=>{["font-family","letter-spacing","--width-label"].forEach((e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=g.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")}))}),[g]),Object(r.useEffect)((()=>{var e;const t=null===(e=R.current)||void 0===e?void 0:e.getContext("2d"),a=tn.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",mn(t)),!1===m&&Ro.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),n=r?ya(JSON.parse(r)):null,o=new URLSearchParams(window.location.search).get("data");if(o){var e,t;const{card:a}=Qr(o),r=ya(a),{artSource:i,backgroundSource:l}=r;if("online"===i&&"online"===l)return Qr(o).card;const s={...r};return"offline"===i&&(s.artData=null!==(e=null===n||void 0===n?void 0:n.artData)&&void 0!==e?e:""),"offline"===l&&(s.backgroundData=null!==(t=null===n||void 0===n?void 0:n.backgroundData)&&void 0!==t?t:""),s}return null!==n&&"2.3.0"===a?n:Ot()}catch(a){return console.error(a),Ot()}})();a(e),Zr.getState().setCardList([e],e.id),j(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),mr.a.error({message:Tr()["error.load.font.tcg"](e)})},inactive:()=>{w(Tr()["error.load.font.all-tcg"]),j(!1)}})}),[m]);const{styleContent:Q}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:o,onInactive:i}=e;const{font:l,format:s}=tn(Object(Fo.useShallow)((e=>({format:e.card.format,font:e.card.nameStyle.font})))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)((()=>{("ocg"===s||"OCG"===l)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),Ro.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,i()},fontinactive:o}))}),[s,l,t,a,n,o,i]),{styleContent:c}})({isLanguageInitiating:m,onBeforeLoad:()=>{var e;j(!0);const t=null===(e=R.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",mn(t))},onActive:()=>{j(!1)},onInactive:()=>{w(Tr()["error.load.font.all-ocg"]),j(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),mr.a.error({message:Tr()["error.load.font.ocg"](e)})}}),[ee,te]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=document.body.classList;c?e.add("reduced-color-motion"):e.remove("reduced-color-motion")}),[c]);const ae=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||null===(t=G.current)||void 0===t||t.setVisible((t=>"boolean"===typeof e?e:!t))}),[s]),re=Object(r.useRef)(!1),ne=document.getElementById("sentry-bug-report");Object(r.useEffect)((()=>{ne&&h&&!1===re.current&&!1===Mo.f()&&(re.current=!0,kd.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[Sd.a(),Fd.a(),Cd.a({colorScheme:"system",autoInject:!1}).attachTo(ne,{formTitle:h["contributor.bug-report.tooltip"],nameLabel:h["contributor.bug-report.name.label"],namePlaceholder:h["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:h["contributor.bug-report.message.label"],messagePlaceholder:h["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:h["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:h["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:h["contributor.bug-report.cancel.label"],submitButtonLabel:h["contributor.bug-report.submit.label"],isRequiredLabel:h["contributor.bug-report.required.label"],successMessageText:h["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))}),[h,ne]);const oe=Object(r.useCallback)(((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:o}=null!==t&&void 0!==t?t:{},{setCard:i,card:l}=tn.getState(),s=o?{...e,id:l.id}:e;r&&Zr.getState().addCard(s),i(s,n),Z((e=>e+1)),null===(a=T.current)||void 0===a||a.forceCardData(s),ir()}),[]),ie=Object(r.useCallback)((async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("replace"))}),[s]),le=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("merge"))}),[s]),se=Object(r.useCallback)((function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||s)if(null===e||void 0===e||e.preventDefault(),"online"===k&&null!==(t=T.current)&&void 0!==t&&t.isLoading())window.alert(h["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:tn.getState().card;null===(r=q.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),mr.a.error({message:h["error.export.message"],description:h["error.export.description"]})}}),[s,h,k]),ce=Object(r.useCallback)((e=>{const{id:t,...a}=e;se(void 0,!1,a)}),[se]),de=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=V.current)||void 0===t||t.download())}),[s]),ue=Object(r.useMemo)((()=>({IMPORT:e=>ie(e,!0),MERGE:e=>le(e,!0),EXPORT:e=>se(e,!0),VIEW:()=>ae(!0,!0),DOWNLOAD:e=>de(e,!0)})),[de,se,ie,le,ae]),me=Object(r.useCallback)((()=>{te(!0),alert(h["prompt.download.tainted.message"])}),[h]),be=Object(r.useCallback)((e=>{var t;"anonymous"===e&&(te(!1),null===(t=G.current)||void 0===t||t.refresh());Z((e=>e+1))}),[]),pe=Object(r.useCallback)(((e,t)=>{Z((e=>e+1)),S(t)}),[]),he=Object(r.useCallback)((()=>{Z((e=>e+1)),te(!0)}),[]),fe=Object(r.useCallback)((e=>{C(e)}),[]),ge=b||x;return Object(p.jsx)(wd.HotKeys,{keyMap:Td,handlers:ue,children:Object(p.jsxs)("div",{id:"app",onDrop:()=>{},className:`language-${g.codeName} manager-${F?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:cr()?"-webkit-fill-available":"100vh","--card-height":Ld*d+"px","--card-width":Nd*d+"px","--global-scale":`${d}`},children:[Q&&Object(p.jsx)("link",{rel:"stylesheet",type:"text/css",href:Q}),Object(p.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[ge&&Object(p.jsx)(gd,{className:"app-loading",children:O.length>0?Object(p.jsx)(yd,{children:O}):null!==(e=g.initialMessage)&&void 0!==e?e:""}),Object(p.jsxs)("div",{className:"card-preview-panel "+(ee?"export-tainted":"export-normal"),children:[Object(p.jsxs)(pd,{className:"data-button-panel",children:[Object(p.jsxs)("div",{className:"imexport",children:[Object(p.jsx)(Kl,{ref:q,tainted:ee,artworkCanvas:L.current,onRequireExportData:se,onRequireDownload:()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.download()},onClose:ir}),Object(p.jsx)("div",{}),Object(p.jsx)(Vl,{ref:_,onImport:oe,onClose:ir,allowHotkey:s,language:h})]}),Object(p.jsx)(Io,{language:h}),Object(p.jsx)(El,{ref:V,canvasMap:X,imageChangeCount:J,isTainted:ee,isInitializing:x,globalScale:d,onDownloadError:me}),ee&&Object(p.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(p.jsxs)("div",{className:"alert-label",children:[h["alert.download.tainted-first-line"],Object(p.jsx)("br",{}),h["alert.download.tainted-second-line"]," ",Object(p.jsx)(Ai,{})]}),Object(p.jsx)(Do.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(p.jsx)(hl,{onChange:()=>ir()}),children:Object(p.jsxs)(Bl,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(p.jsx)(Ho.a,{className:"resolution-icon"}),Object(p.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]}),Object(p.jsxs)(hd,{className:"card-preview-container",children:[Object(p.jsx)(br.a,{title:h["button.reset.tooltip"],children:Object(p.jsx)(Od,{className:"reset-button",onClick:()=>{if(window.confirm(h["prompt.reset.message"])){var e;const{setCard:t,card:a}=tn.getState(),r={id:a.id,...jt()},n="tcg"===a.format?r:yr(r,"ocg");t(n,!0),Z((e=>e+1)),null===(e=T.current)||void 0===e||e.forceCardData(n)}},children:Object(p.jsx)(ts.a,{})})}),Object(p.jsx)(br.a,{title:Object(p.jsxs)("div",{className:"center",children:[h["button.full-size.label"],s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(p.jsx)(jd,{className:"lightbox-button",onClick:()=>ae(),children:Object(p.jsx)(tl.a,{})})}),Object(p.jsx)("canvas",{id:"preview-canvas",ref:B,width:Nd,height:Ld},(null!==(t=null===(a=G.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(p.jsxs)(fd,{className:"card-canvas-group",children:[Object(p.jsx)("canvas",{id:"export-canvas",ref:R,width:Nd*d,height:Ld*d},(null!==(n=null===(o=G.current)||void 0===o?void 0:o.getCanvasKey())&&void 0!==n?n:0)+.1),Object(p.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(p.jsx)("canvas",{id:"frameCanvas",ref:z,width:Nd*d,height:Ld*d},null!==(i=null===(l=G.current)||void 0===l?void 0:l.getCanvasKey())&&void 0!==i?i:0),Object(p.jsx)("canvas",{id:"nameCanvas",ref:A,width:Nd*d,height:148*d}),Object(p.jsx)("canvas",{id:"cardIconCanvas",ref:E,width:Nd*d,height:222*d}),Object(p.jsx)("canvas",{id:"pendulumScaleCanvas",ref:I,width:Nd*d,height:920*d}),Object(p.jsx)("canvas",{id:"pendulumEffectCanvas",ref:W,width:Nd*d,height:920*d}),Object(p.jsx)("canvas",{id:"typeCanvas",ref:D,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"effectCanvas",ref:H,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"statCanvas",ref:M,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"setIdCanvas",ref:P,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"passwordCanvas",ref:$,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"creatorCanvas",ref:Y,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"stickerCanvas",ref:U,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{id:"finishCanvas",ref:K,width:Nd*d,height:Ld*d}),Object(p.jsx)("canvas",{className:"crop-canvas",ref:L}),Object(p.jsx)("canvas",{className:"crop-canvas",ref:N})]})]})]}),!1===ge&&Object(p.jsx)(Dc,{ref:T,artworkCanvas:L.current,backgroundCanvas:N.current,onSourceLoaded:be,onCropChange:pe,onTainted:he})]}),Object(p.jsx)(ud,{language:h,onVisibleChange:fe,onDownload:ce,onSelect:oe,onRequestImport:()=>{var e;null===(e=_.current)||void 0===e||e.requestImport("new")}}),Object(p.jsx)(cl,{ref:G,globalScale:d}),Object(p.jsxs)(vd,{className:"by-me",children:["Made by Lauqerm ",Object(p.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Bd=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,606)).then((t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:o,getTTFB:i}=t;a(e),r(e),n(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Rd,{})}),document.getElementById("root")),Bd()}},[[539,1,2]]]);
//# sourceMappingURL=main.88638803.chunk.js.map