(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{310:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},415:function(e,t,a){},530:function(e,t,a){},536:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){},540:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(49),l=a.n(n);a(310),a(311),a(312),a(313),a(314),a(315);const i=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToArtFrame:213,pendulumStructureHeight:912,leftToPendulumStructure:52,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"pendulum"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"extendedPendulum"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.057,backgroundRatio:1.057,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"truePendulum"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"fullPendulum"}},m=(e,t,a)=>{const{boundless:r,body:o,pendulum:n,text:l}={...d(),...t};if("full"===a)return u.fullCard;const i=u["fit"!==a&&r||o<100?e?"fullPendulum":"fullCard":e?l<100?"extendedPendulum":n<100?"truePendulum":"pendulum":l<100?"extendedCard":"normal"];return{...i,backgroundRatio:"frame"===a?.686:i.backgroundRatio}};var b=a(571),p=a(1);const f="NONE",h=[{name:f,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0},{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0}],g="NO ICON",v=[{label:Object(p.jsx)(b.a,{}),value:g,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0}],y="no-sticker",x=[{value:y,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],j={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.label",icon:null,isOption:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous.png"}),isOption:!0},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.label",icon:Object(p.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0}},O=Object.values(j),w=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,pattern:"none",...e}),S={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:w({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:w({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:w({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:w({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:w({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:w({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:w({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:w({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:w({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:w({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:w({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:w({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:w({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:w({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:w({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:w({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:w({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:w({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})}},k=Object.values(S),F={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},C=Object.values(F);var T=a(563);const N={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:64.5}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5}]},L=[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94},{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}],R={tcg:{small:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},medium:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5}},ocg:{small:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},medium:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5}}},D={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},E={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},B=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],I=B.reduce(((e,t)=>(e[t.shortForm]=t,e)),{}),A=[{blendMode:"overlay",opacity:1}],z=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],M={type1:{value:"type1",label:"1",partInstructionMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"art-overlay":A,"art-border":A,"art-border-pendulum":A,"border-pendulum":A,attribute:A,frame:A}},type4:{value:"type4",label:"4",partInstructionMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]}},type8:{value:"type8",label:"8",partInstructionMap:{"art-border":z,"art-border-pendulum":z,"border-pendulum":z,frame:z,"frame-background":z,name:z,star:z}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]}}},W={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]}}},P={normal:"normal",gold:"gold",platinum:"platinum"},H=e=>[{name:P.normal,label:null===e||void 0===e?void 0:e.normal,color:"#747b95",isOption:!1},{name:P.gold,label:null===e||void 0===e?void 0:e.gold,color:"#cfa65f",isOption:!0},{name:P.platinum,label:null===e||void 0===e?void 0:e.platinum,color:"#b1b1b1",isOption:!0}],$={allRightSymbolOffset:1,bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletSymbolOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},U={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},Y={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,headTextGapRatio:0},K={...Y,font:"MatrixBook",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},G={...Y,font:'"StoneSerif-Italic"',headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},V={...Y,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},X={tcg:{...G,fontList:[{bulletSymbolWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletSymbolWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletSymbolWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletSymbolOffset:1}]},"tcg-stat":{...G,fontList:[{bulletSymbolWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletSymbolWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletSymbolOffset:1},{bulletSymbolWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletSymbolOffset:1}]},"tcg-type-stat":{...G,fontList:[{bulletSymbolWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletSymbolWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletSymbolWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletSymbolWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletSymbolOffset:2}]},"tcg-type":{...G,fontList:[{bulletSymbolWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletSymbolWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletSymbolWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletSymbolWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletSymbolOffset:1}]}},_={tcg:{...K,fontList:[{bulletSymbolWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletSymbolWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletSymbolWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletSymbolOffset:1}]},"tcg-stat":{...K,fontList:[{bulletSymbolWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletSymbolWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletSymbolOffset:1},{bulletSymbolWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletSymbolOffset:1}]},"tcg-type-stat":{...K,fontList:[{bulletSymbolWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:6},{bulletSymbolWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7},{bulletSymbolWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8},{bulletSymbolWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletSymbolOffset:2}]},"tcg-type":{...K,fontList:[{bulletSymbolWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.7,lineCount:7},{bulletSymbolWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletSymbolWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletSymbolWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletSymbolOffset:1},{bulletSymbolWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletSymbolOffset:1}]},ocg:{...V,fontList:[{bulletSymbolWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletSymbolWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...V,fontList:[{bulletSymbolWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...V,fontList:[{bulletSymbolWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...V,fontList:[{bulletSymbolWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]}},q={tcg:{...G,fontList:[{bulletSymbolWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletSymbolWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletSymbolOffset:2},{bulletSymbolWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletSymbolOffset:3},{bulletSymbolWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletSymbolWidth:18,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletSymbolWidth:17,fontSize:17,lineHeight:17.4,lineCount:7},{bulletSymbolWidth:14,fontSize:14.7,lineHeight:15.32,lineCount:8}]}},J={tcg:{...K,fontList:[{bulletSymbolWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletSymbolWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletSymbolOffset:2},{bulletSymbolWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletSymbolOffset:3},{bulletSymbolWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletSymbolWidth:18,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletSymbolWidth:17,fontSize:17,lineHeight:17.4,lineCount:7},{bulletSymbolWidth:14,fontSize:14.7,lineHeight:15.32,lineCount:8}]},ocg:{...V,fontList:[{bulletSymbolWidth:41,bulletSymbolOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletSymbolWidth:31,bulletSymbolOffset:2,fontSize:35.55,lineHeight:40.6,headTextFontRatio:.3,lineCount:3},{bulletSymbolWidth:23,bulletSymbolOffset:1,fontSize:25.05,lineHeight:30.6,headTextFontRatio:.35,lineCount:4},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.2,headTextFontRatio:.4,lineCount:5}]}},Z={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},Q={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps",font:"MatrixRegularSmallCaps",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.55,fontList:[{bulletSymbolWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterDeviationMap:{1:{threshold:.94,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:11},"\u1ecb":{uniformBoxDescent:11},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:11},"e\u0329":{uniformBoxDescent:11},"\xc8\u0329":{uniformBoxDescent:11},"\xc9\u0329":{uniformBoxDescent:11},"\xe8\u0329":{uniformBoxDescent:11},"\u1eb8":{uniformBoxDescent:11},"\u1eb9":{uniformBoxDescent:11},"\u1ec6":{uniformBoxDescent:11},"\u1ec7":{uniformBoxDescent:11}}},2:{threshold:0,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:20},"\u1ecb":{uniformBoxDescent:20},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:20},"e\u0329":{uniformBoxDescent:20},"\xc8\u0329":{uniformBoxDescent:20},"\xc9\u0329":{uniformBoxDescent:20},"\xe8\u0329":{uniformBoxDescent:20},"\u1eb8":{uniformBoxDescent:20},"\u1eb9":{uniformBoxDescent:20},"\u1ec6":{uniformBoxDescent:20},"\u1ec7":{uniformBoxDescent:20}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.825,weight:"bold",fontList:[{bulletSymbolWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.775,headTextOverflow:"condense",headTextBold:!0,metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,fontStyle:"ocg",fontList:[{bulletSymbolWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},ee={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletSymbolWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletSymbolWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},te={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},ae={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletSymbolWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletSymbolWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletSymbolWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},re={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletSymbolWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletSymbolWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletSymbolWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},oe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},ne={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},le={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},ie={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},se={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},ce={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[ie.ocg[2]]:ie.tcg[2],[ie.ocg[1]]:ie.tcg[1],[ie.ocg[0]]:ie.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[se.ocg]:se.tcg},de=Object.entries(ce).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),ue={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 48%","rgba(239,239,239,1) 52%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},me=Object.values(ue),be=[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pe=[-45,0,45,-90,0,90,-135,180,135],fe=[-38,-27,-38,-27,0,-27,-38,-27,-38],he=new RegExp("[A-Z\uff21-\uff3a]"),ge=new RegExp("[\\[\\]\u3010\u3011]"),ve="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",ye=new RegExp(ve),xe=new RegExp(`({[^{}]+?}|${ve}|.)`),je="\u2989",Oe="\u298a",we="\u27c5",Se="\u27c6",ke="\u27ec",Fe="\u27ed",Ce=new RegExp(`[${[je,Oe,we,Se,ke,Fe].join("")}]|(\\|[^}]+})`,"g"),Te=new RegExp(`(^|[-\\u2014/[(\\u2018${je}${we}${ke}\\s])"`,"g"),Ne=`${je}|${Oe}`,Le=new RegExp(Ne),Re=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${je}?(\\(|\\*)[\\w\\W]+${Oe}?)\\s*$`,De=new RegExp("[#\u2605\u2606@\u221e]"),Ee=`(${B.map((e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm})).join("|")})(?![^{]*})`,Be="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",Ie=new RegExp(`[${Be}]`),Ae=`.[${Be})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,ze=new RegExp("[\u2460-\u2473\u203b]"),Me=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),We=new RegExp("[\uff10-\uff19]"),Pe=new RegExp("[0-9]"),He=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,$e=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Ue=new RegExp("[\u30fb]"),Ye=new RegExp("[\u30fc]"),Ke=new RegExp("[\u2015]"),Ge=new RegExp("[\uff1a]"),Ve=new RegExp("[\u3002\uff64]"),Xe=new RegExp("[\uff1a]"),_e={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},qe={"\u3002":-.5,"\uff1a":-.25},Je={">":.125,"<":.125},Ze={},Qe={},et={},tt=e=>"tcg"===e?7:1,at=/{[^{}]+?}/,rt="\\s\\-/",ot=-2.25,nt=()=>({version:0,format:"tcg",frame:"fusion",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:"LIGHT",subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),lt=()=>({id:Object(T.a)(),...nt()}),it=()=>({version:0,format:"tcg",frame:"effect",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none"},attribute:f,subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:y,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),st=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],ct=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],dt={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1388x2026":{label:Object(p.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(p.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},ut=[dt["549x800"],dt["561x818"],dt["813x1185"],dt["1388x2026"],dt["1626x2370"]],mt=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}];var bt=a(263),pt=a.n(bt),ft=a(214),ht=a.n(ft),gt=a(35),vt=a(226),yt=a(217),xt=a(127);const jt={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},Ot={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},wt={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},St="sobel",kt=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:St});class Ft{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...kt(),...e},this.init(),console.info("\ud83d\ude80 ~ ShaderPass:",xt.a,yt.a,vt.a)}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,o=this.getTexture(e);this.normalMapUniform.tHeightMap.value=o,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:n,invertedGreen:l,invertedSource:i,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(n),this.invertGreen(l),this.invertSource(i),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new gt.h(-.5,.5,.5,-.5,0,1),t=new gt.k,a=new yt.a(t,e);this.renderer=new gt.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=gt.n.clone(wt.uniforms),this.material=new gt.l({fragmentShader:wt.fragmentShader,vertexShader:wt.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new gt.i(1,1,1,1),o=new gt.f(r,this.material);t.add(o),this.gaussianShaderY=new xt.a(Ot),this.gaussianShaderX=new xt.a(jt),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new vt.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new gt.p(e,t,{minFilter:gt.g,magFilter:gt.g,format:gt.j,stencilBuffer:!1})}getTexture(e){const t=new gt.m(e);return t.wrapS=t.wrapT=gt.b,t.minFilter=t.magFilter=gt.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const Ct=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,o=Math.cos(a)*Math.cos(r),n=Math.sin(a)*Math.cos(r),l=Math.sin(r);return[Math.round(100*o)/100,Math.round(100*n)/100,Math.round(100*l)/100]},Tt=e=>{let{inputCanvas:t,maxHeight:a=8,lightColorVec:r=[255,255,255],lightAngleVec:o,lightPitch:n,lightYaw:l,minIntensity:i=-1,maxIntensity:s=1}=e;const c=t.getContext("2d");if(!c)return;const{width:d,height:u}=t,m=c.getImageData(0,0,d,u,{willReadFrequently:!0}).data,b=o||("number"===typeof n&&"number"===typeof l?Ct(n,l):[1,0,0]),p=Math.sqrt(b[0]**2+b[1]**2+b[2]**2),f=[b[0]/p,b[1]/p,b[2]/p];if(m)try{const e=new Uint8ClampedArray(d*u);for(let a=0;a<m.length;a+=4)m[a]||m[a+1]||m[a+2]||m[a+3]?e[a/4]=0:e[a/4]=1;const t=pt()(ht()(e,[u,d])),o=t.shape[0],n=t.shape[1],l=new Uint8ClampedArray(d*u*4),c=Math.floor(255/a);for(let a=0;a<o;a++)for(let e=0;e<n;e++){const r=4*(a*d+e),o=t.get(a,e);l[r]=o*c,l[r+1]=o*c,l[r+2]=o*c,l[r+3]=0===o?0:255}const b=document.createElement("canvas");b.width=d,b.height=u,b.getContext("2d").putImageData(new ImageData(l,d,u),0,0);const p=document.createElement("canvas");p.width=d,p.height=u;new Ft(kt(),p).apply(b,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:St});const h=document.createElement("canvas");h.width=d,h.height=u;const g=h.getContext("2d");g.drawImage(p,0,0,d,u);const v=((e,t,a,r,o,n)=>{const l=new Uint8ClampedArray(t*a*4),i=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*n**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*o**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let o=0,n=0,u=0,m=0;for(let l=-i;l<=i;l++)for(let b=-i;b<=i;b++){const i=r+b,p=d+l;if(i>=0&&p>=0&&i<t&&p<a){const a=4*(d*t+r),l=4*(p*t+i),b=e[a],f=e[a+1],h=e[a+2],g=e[l],v=e[l+1],y=e[l+2],x=s(i,p,r,d)*c(b,g)*c(f,v)*c(h,y);o+=g*x,n+=v*x,u+=y*x,m+=x}}const b=4*(d*t+r);l[b]=o/m,l[b+1]=n/m,l[b+2]=u/m,l[b+3]=e[b+3]}return l})(g.getImageData(0,0,d,u).data,d,u,9,70,20),y=new Uint8ClampedArray(d*u*4);for(let a=0;a<m.length;a+=4){let e=v[a]/127.5-1,t=v[a+1]/127.5-1,o=v[a+2]/127.5-1;const n=(e*f[0]+t*f[1]+o*f[2])/2*(Math.abs(i)+Math.abs(s)),l=Math.max(i,Math.min(n,s));y[a]=Math.round(m[a]+r[0]*l),y[a+1]=Math.round(m[a+1]+r[1]*l),y[a+2]=Math.round(m[a+2]+r[2]*l),y[a+3]=m[a+3]}return new ImageData(y,d,u)}catch(h){return console.error("Could not apply emboss effect",h),null}},Nt=e=>"xyz"===e.frame,Lt=e=>"speed-skill"===e.frame&&!Rt(e),Rt=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,Dt=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e?"none":"level",Et=e=>!Rt({frame:e})||Bt(e),Bt=e=>["link","xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e);var It=a(570),At=a(557);const zt=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return Mt(e,0)},Mt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),(e=>e===t[0]?t[1]:t[0]));if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},Wt={version:"ve",format:"fm",frame:"fr",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus"},nameStyle:{_newKey:"ns",font:"nsft",fillStyle:"nsfs",headTextFillStyle:"nshfs",shadowColor:"nssc",shadowOffsetY:"nssoy",shadowOffsetX:"nssox",shadowBlur:"nssb",hasShadow:"nshs",lineColor:"nslc",lineWidth:"nslw",lineOffsetY:"nsloy",lineOffsetX:"nslox",hasOutline:"nshl",gradientAngle:"nsgd",gradientColor:"nscg",hasGradient:"nshg",embossPitch:"nsep",embossYaw:"nsey",hasEmboss:"nshe",preset:"nspr",pattern:"nspt"},attribute:"at",subFamily:"sf",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},Pt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wt;const a={},r={...e};return Object.keys(r).forEach((e=>{const o=r[e];if("object"!==typeof o||null===o||Array.isArray(o)){const r=t[e];"string"===typeof r&&(a[r]=o)}else{var n;const r=null===(n=t[e])||void 0===n?void 0:n._newKey;r&&(a[r]=Pt(o,t[e]))}})),a},Ht=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wt;const a={};return Object.keys(t).forEach((r=>{const o=t[r];if("object"!==typeof o||null===o||Array.isArray(o))null!=e[o]&&(a[r]=e[o]);else{const n=null===o||void 0===o?void 0:o._newKey;n&&e[n]&&(a[r]=Ht(e[n],t[r]))}})),a},$t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wt;const a="string"===typeof e?JSON.parse(zt(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach((e=>{const o=t[e];if("object"!==typeof o||null===o||Array.isArray(o))null!=a[o]&&(r[e]=a[o]);else{const n=null===o||void 0===o?void 0:o._newKey;n&&a[n]&&(r[e]=$t(a[n],t[e]))}})),r},Ut=function(e){var t,a,r,o,n,l;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:it();const s={id:Object(T.a)(),...i,...Object(It.a)(e)};return s.effectStyle={...it().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...it().pendulumStyle}:s.pendulumStyle={...it().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.finish&&(s.finish=[]),null==s.artFinish&&(s.artFinish="normal"),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(o=s.background)&&void 0!==o?o:"")&&(s.background=""),""===(null!==(n=s.backgroundData)&&void 0!==n?n:"")&&(s.backgroundData=""),""===(null!==(l=s.backgroundSource)&&void 0!==l?l:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto"),s},Yt=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},Kt=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},Gt=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:Pt(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:Pt(a)}},Vt=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),Xt=(e,t)=>{const{aspect:a,height:r,width:o,x:n,y:l,unit:i}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:b}=null!==t&&void 0!==t?t:{};return Vt(a,s)&&Vt(r,c)&&Vt(o,d)&&Vt(n,u)&&Vt(l,m)&&i===b},_t=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1")}catch(t){return console.error(t),e}},qt=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1")}catch(t){return console.error(t),e}},Jt=(e,t,a)=>{const r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=[a,r.download,r.href].join(":");const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(o),r.remove()},Zt={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[g]:"None"},Qt=Object.entries(Zt).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),ea={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},ta=Object.entries(ea).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),aa={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},ra=Object.entries(aa).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),oa={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},na=Object.entries(oa).reduce(((e,t)=>{const[a,r]=t;return e[r.key]=a,e}),{}),la=(e,t)=>{const{name:a,star:r,typeAbility:o,subFamily:n,effect:l,atk:i,def:s,art:c,artData:d,artSource:u,password:m,creator:b,attribute:p,setId:f,pendulumEffect:h,pendulumScaleBlue:g,pendulumScaleRed:v,isPendulum:y,linkMap:x,frame:j,externalInfo:O,nameStyle:w,nameStyleType:S,artFinish:k,finish:F}=e,C=_t(a),T=qt(l),N=qt(h),L=Zt[n],R=ea[p],D=aa[j],E="predefined"===S?na[[w.preset,k,F.join("|")].join("-")]:"common",{pendulum:B,rarity:I,...A}=null!==O&&void 0!==O?O:{};return{isPartial:a!==C||l!==T||h!==N||void 0===L||void 0===R||void 0===D||void 0===E,result:{version:"1.0.0",name:C,level:`${r}`,type:o.join("/"),icon:null!==L&&void 0!==L?L:"",effect:T,atk:i,def:s,serial:m,copyright:b,attribute:null!==R&&void 0!==R?R:"None",id:f,pendulum:{enabled:y,effect:N,blue:g,red:v,boxSize:"Normal",boxSizeEnabled:!0,...B},variant:"Normal",link:{topLeft:!!x.includes("1"),topCenter:!!x.includes("2"),topRight:!!x.includes("3"),middleLeft:!!x.includes("4"),middleRight:!!x.includes("6"),bottomLeft:!!x.includes("7"),bottomCenter:!!x.includes("8"),bottomRight:!!x.includes("9")},layout:null!==D&&void 0!==D?D:"Normal",boxSize:"Normal",rarity:null!==E&&void 0!==E?E:I,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...A}}},ia={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[g]:"None"},sa=Object.entries(ia).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),ca=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),da=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),ua={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},ma=e=>{var t,a,r;const{atk:o,attribute:n,card_images:l,card_sets:i,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:b,name:p,pend_desc:h,race:v,scale:y,typeline:x,linkval:j,linkmarkers:O}=e,w=sa[v],S=ca[n],[k,F]=da[d].split("_"),C=null!==(t=b?b.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",T=C.split("\n"),N=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==k&&void 0!==k?k:"normal"})&&T.length>1?[`[${T[0].replaceAll("\r","")}]`,...T.slice(1)].join("\n"):C,L=h?h.replaceAll(/^''|''$/g,""):"",R=l[0].image_url_cropped,D=it();return{isPartial:!1,result:{...D,name:p,atk:o<0||null==o?"?":`${o}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==S&&void 0!==S?S:f,effect:N,subFamily:null!==w&&void 0!==w?w:g,setId:null!==(a=null===(r=i[i.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==k&&void 0!==k?k:"normal",star:"link"===d&&j?j:m,typeAbility:x||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:R,artSource:"online",artCrop:{...D.artCrop,y:0},isLink:"link"===k&&Array.isArray(O),linkMap:(null!==O&&void 0!==O?O:[]).map((e=>ua[e])),isPendulum:"pendulum"===F,pendulumScaleBlue:null==y?"0":`${y}`,pendulumScaleRed:null==y?"0":`${y}`,pendulumEffect:L,password:`${u}`.padStart(8,"0"),creator:ie.tcg[0]}}},ba=1e3,pa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=ba;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ba,a=t,r=a,o=30,n=100;const l=()=>o=-1;return{reset:function(){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=l,a=l,o=30,n=100,r=l},searchDown:()=>(a-=n,o-=1,a),reverseSearch:()=>(1===n?l():(a+=n,n/=10,a-=n),Math.min(a,t)),finish:l,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,o=-1,a),getIterateCount:()=>o}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===ba)break;a=r.reverseSearch()}}const o=Math.max(t,Math.min(a,ba));return o!==a&&e(o),o},fa=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:o="Arial"}=null!==e&&void 0!==e?e:{};let n=t,l=a,i="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=o;return{getFont:()=>`${[l,n,i,c].filter((e=>""!==e)).join(" ")}, Arial`,getFontInfo:()=>({style:l,size:i,family:c,sizeAsNumber:s,weight:n}),setWeight(e){return n=e,this},setStyle(e){return l=e,this},setSize(e){const t="function"===typeof e?e(s):e;return i="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},ha=()=>va("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),ga=e=>(null!==e&&void 0!==e?e:[]).map((e=>{let{color:t,offset:a}=e;return`${a}|${t}`})).join(","),va=e=>e?e.split(",").map(((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}})):va("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),ya=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)((()=>{t((e=>e+1))}),[]),e]},xa=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:o,onTrigger:n,onCancel:l,onKeyPress:i}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),o(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),o(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===i||void 0===i?void 0:i(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),o((e=>Math.max(0,a+e+1)%a))):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),o((e=>Math.max(0,a+e-1)%a))):"Enter"===e.key||" "===e.key?n():"Escape"===e.key&&(null===l||void 0===l||l()))}}},ja=(e,t)=>({...e,trueBaseline:e.trueBaseline*t,trueEdge:e.trueEdge*t,trueWidth:e.trueWidth*t}),Oa=(e,t)=>e.map((e=>e*t)),wa=(e,t)=>{const{allRightSymbolOffset:a,bulletSymbolOffset:r,bulletSymbolWidth:o,fontSize:n,headTextSpacing:l,iconSymbolWidth:i,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletSymbolOffset:"number"===typeof r?r*t:void 0,bulletSymbolWidth:o*t,fontSize:n*t,headTextSpacing:"number"===typeof l?l*t:void 0,iconSymbolWidth:"number"===typeof i?i*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},Sa=(e,t)=>({...e,fontList:e.fontList.map((e=>wa(e,t)))}),ka=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let o=0;o<t;o++)a+=e.charAt(Math.floor(Math.random()*r));return a};const Fa=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},Ca=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,Ta=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const n=e.replace("#","");let l=[0,0,0,1];var a,r,o;if(3===n.length||4===n.length)l=[parseInt(`${n[0]}${n[0]}`,16),parseInt(`${n[1]}${n[1]}`,16),parseInt(`${n[2]}${n[2]}`,16),parseInt(`${null!==(a=n[3])&&void 0!==a?a:"f"}${null!==(r=n[3])&&void 0!==r?r:"f"}`,16)];if(6===n.length||8===n.length)l=[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16),parseInt(null!==(o=n.slice(6,8))&&void 0!==o?o:"ff",16)];return l.map((e=>isNaN(e)?255:e)).slice(0,t?4:3)}catch(n){return[0,0,0,1].slice(0,t?4:3)}},Na=()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e};function La(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var Ra=a(558),Da=a(301),Ea=a(112),Ba=a(7);const Ia=Ba.b.button`
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
`;var Aa=a(572),za=a(573),Ma=a(574);const Wa=(e,t)=>{var a,r,o,n,l;const{creator:i,effect:s,format:c,isFirstEdition:d,name:u,password:m,pendulumEffect:b,setId:p,typeAbility:f,nameStyle:h}=e;if(c===t)return e;const g="ocg"===t?de:ce,v="ocg"===t&&/-EN/.test(p)?p.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(p)?p.replace("-JP","-EN"):p,y={...h,font:"ocg"===t&&"Default"===h.font?"OCG":"tcg"===t&&"OCG"===h.font?"Default":h.font};return{...e,name:null!==(a=g[u])&&void 0!==a?a:u,format:t,effect:null!==(r=g[s])&&void 0!==r?r:s,pendulumEffect:null!==(o=g[b])&&void 0!==o?o:b,typeAbility:f.map((e=>{var t;return null!==(t=g[e])&&void 0!==t?t:e})),creator:null!==(n=g[i])&&void 0!==n?n:i,password:null!==(l=g[m])&&void 0!==l?l:m,setId:v,isFirstEdition:"ocg"!==t&&d,nameStyle:y}};var Pa=a(91),Ha=a(106),$a=a.n(Ha),Ua=a(265),Ya=a.n(Ua);const Ka=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(p.jsx)(o.a.Fragment,{children:r.map(((e,a)=>a%2===0?Object(p.jsx)(o.a.Fragment,{children:e},`${e}-${a}`):t[e]))},e)},n={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,o,n)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:o,artist4:n}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,o,n)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"guide.format.section-2.content":(e,t,o,n)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"guide.format.section-3.content":(e,t,o)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:o}),"guide.format.section-4.content":(e,t,o)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:o}),"guide.format.section-5.content":(e,t,o,n)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...n}}},Ga=Object(Pa.create)(((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},o=Ka({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),n=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),o=await a.json();if(!o.rawDictionary)throw new Error("No dictionary found");const n=Ka(o,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=n,n}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},l=async a=>{const l=t().languageMetadataMap[a];if(!l)return;const i=r[a]?r[a]:await n(a);i?(e({languageInfo:t().languageMetadataMap[a],language:i.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:l})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:o.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:o.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await n("eng"),await l(a),e({isInitiating:!1})},loadLanguage:n,changeLanguage:l}})),Va=()=>Ga((e=>{let{language:t}=e;return t})),Xa=()=>Ga.getState().language;var _a=a(266);const qa=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Star Type","Star Alignment","Card Icon Type","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","External Info (JSON)"],Ja=[...qa,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Za=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),Qa=new Set(Ja.map(Za)),er=qa.reduce(((e,t,a)=>{const r=Za(t);return Qa.has(r)&&(e[t]=a),e}),{}),tr=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,ar=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},rr=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,or=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,nr=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,lr=e=>{try{const t=e[0].reduce(((e,t,a)=>{const r=Za(t);return Qa.has(r)&&(e[t]=a),e}),{});return e.map(((e,a)=>{var r,o,n,l,i,s,c,u,b,p,h,g,v,y,x,j,O,w,S,k,F,C,N,L,R,D,E,B,I,A,z,M,W,H,$,U,Y,K,G,V,X,_,q;if(0===a)return null;if(""===e.join(""))return null;const J=it(),Z=((e,t)=>a=>{var r,o;const n=null!==(r=t[a])&&void 0!==r?r:-1,l=(null!==(o=e[n])&&void 0!==o?o:"").trim();return""===l?void 0:l})(e,t),Q=(null!==(r=null!==(o=Z("Frame"))&&void 0!==o?o:Z("Background_Type"))&&void 0!==r?r:J.frame).toLowerCase(),ee=null!==(n=null!==(l=Z("Star"))&&void 0!==l?l:Z("Level/Rank"))&&void 0!==n?n:"",te="text"===Z("Star Type")?ee:parseInt(ee)<=13&&parseInt(ee)>=0&&"2"!==Z("Star_Type")?parseInt(ee):ee,ae=(null!==(i=null!==(s=Z("Foil"))&&void 0!==s?s:Z("Rarity"))&&void 0!==i?i:"normal").toLowerCase(),re=P[ae]?ae:"normal",oe=null===(c=Z("Attribute"))||void 0===c?void 0:c.toUpperCase(),ne=oe?"NONE"===oe?f:oe:"spell"===Q?"SPELL":"trap"===Q?"TRAP":J.attribute,le=null!==(u=Z("Art Finish"))&&void 0!==u?u:Z("Art_Finish")?`type${Z("Art_Finish")}`:"",ie=null!==(b=Z("ATK"))&&void 0!==b?b:"",se=null!==(p=Z("Card Icon Type"))&&void 0!==p?p:J.cardIcon,ce=null!==(h=Z("Copyright"))&&void 0!==h?h:"",de=null!==(g=Z("DEF"))&&void 0!==g?g:"",ue=null!==(v=Z("Effect"))&&void 0!==v?v:"",me=null!==(y=null===(x=Z("Card Finish"))||void 0===x?void 0:x.split(/,| /).filter((e=>""!==e)))&&void 0!==y?y:[],be=(null!==(j=Z("Format"))&&void 0!==j?j:J.format).toLowerCase(),pe=ar(Z("Use Furigana Helper"),J.furiganaHelper),fe=null!==(O=Z("Name"))&&void 0!==O?O:"",he=null!==(w=Z("Password"))&&void 0!==w?w:"",ge=null!==(S=null!==(k=Z("Set Id"))&&void 0!==k?k:Z("Set_ID"))&&void 0!==S?S:"",ve=(null!==(F=Z("Star Alignment"))&&void 0!==F?F:J.starAlignment).toLowerCase(),ye=(null!==(C=Z("Sticker"))&&void 0!==C?C:J.sticker).toLowerCase(),xe=(null!==(N=null!==(L=Z("Spell/Trap Icon"))&&void 0!==L?L:Z("spell_type/trap_type"))&&void 0!==N?N:J.subFamily).toUpperCase(),je=null===(R=Z("Edition"))||void 0===R?void 0:R.toLowerCase(),Oe=ar(Z("Is First Edition"),je?"1st edition"===je:J.isFirstEdition),we=ar(Z("Is Duel Terminal Card"),je?"duel terminal"===je:J.isDuelTerminalCard),Se=ar(Z("Is Limited Edition"),je?"limited edition"===je:J.isLimitedEdition),ke=ar(Z("Is Speed Card"),je?"speed duel"===je:J.isSpeedCard),Fe=ar(Z("Is Legacy Card"),J.isLegacyCard),Ce=ar(Z("Is Pendulum"),J.isPendulum),Te=(null!==(D=Z("Bottom Frame"))&&void 0!==D?D:J.pendulumFrame).toLowerCase(),Ne=null!==(E=Z("Pendulum Effect"))&&void 0!==E?E:"",Le=null!==(B=Z("Pendulum Scale Red"))&&void 0!==B?B:J.pendulumScaleRed,Re=null!==(I=Z("Pendulum Scale Blue"))&&void 0!==I?I:J.pendulumScaleBlue,De=Z("Type Ability"),Ee=De?De.split("/"):[Z("Type_1"),Z("Type_2"),Z("Type_3"),Z("Type_4")].filter((e=>"string"===typeof e&&""!==e)),Be=(null!==(A=Z("Condense Rate"))&&void 0!==A?A:J.effectStyle.condenseTolerant).toLowerCase(),Ie=rr(Z("Effect Style - Upsize"),J.effectStyle.upSize),Ae=rr(Z("Pendulum Effect Style - Upsize"),J.pendulumStyle.upSize),ze=(null!==(z=Z("Effect Style - Font Style"))&&void 0!==z?z:J.effectStyle.fontStyle).toLowerCase(),Me=(null!==(M=Z("Pendulum Effect Style - Font Style"))&&void 0!==M?M:J.pendulumStyle.fontStyle).toLowerCase(),We=d(),Pe={artBorder:ar(Z("Opacity - Art Border"),We.artBorder),baseFill:null!==(W=Z("Opacity - Base Fill"))&&void 0!==W?W:We.baseFill,body:rr(Z("Opacity - Body"),We.body),boundless:ar(Z("Opacity - Boundless"),We.boundless),name:rr(Z("Opacity - Name"),We.name),nameBorder:ar(Z("Opacity - Name Border"),We.nameBorder),pendulum:rr(Z("Opacity - Pendulum"),We.pendulum),text:rr(Z("Opacity - Text"),We.text)},He={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},$e=null!==(H=Z("Art Link"))&&void 0!==H?H:J.art,Ue=ar(Z("Is Using Full Art"),J.artFit),Ye={aspect:m(Ce,Pe).ratio,height:or(Z("Art Crop - Height (%)"),He.height),width:or(Z("Art Crop - Width (%)"),He.width),x:or(Z("Art Crop - X (%)"),He.x),y:or(Z("Art Crop - Y (%)"),He.y),unit:"%"},Ke={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},Ge=ar(Z("Has Background"),J.hasBackground),Ve=null!==($=Z("Background Link"))&&void 0!==$?$:J.background,Xe=(null!==(U=Z("Background Type"))&&void 0!==U?U:J.backgroundType).toLowerCase(),_e=ar(Z("Is Using Full Background"),J.backgroundFit),qe={aspect:m(Ce,Pe,Xe).ratio,height:or(Z("Background Crop - Height (%)"),Ke.height),width:or(Z("Background Crop - Width (%)"),Ke.width),x:or(Z("Background Crop - X (%)"),Ke.x),y:or(Z("Background Crop - Y (%)"),Ke.y),unit:"%"},Je={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none"},Ze=(null!==(Y=Z("Name Style Type"))&&void 0!==Y?Y:J.nameStyleType).toLowerCase(),Qe={embossPitch:rr(Z("Name Style - Emboss Pitch"),Je.embossPitch),embossYaw:rr(Z("Name Style - Emboss Yaw"),Je.embossYaw),fillStyle:nr(Z("Name Style - Fill Style"),Je.fillStyle),font:null!==(K=Z("Name Style - Font"))&&void 0!==K?K:Je.font,gradientAngle:rr(Z("Name Style - Gradient Angle"),Je.gradientAngle),gradientColor:null!==(G=Z("Name Style - Gradient Color"))&&void 0!==G?G:Je.gradientColor,hasEmboss:ar(Z("Name Style - Has Emboss"),Je.hasEmboss),hasGradient:ar(Z("Name Style - Has Gradient"),Je.hasGradient),hasOutline:ar(Z("Name Style - Has Outline"),Je.hasOutline),hasShadow:ar(Z("Name Style - Has Shadow"),Je.hasShadow),headTextFillStyle:nr(Z("Name Style - Headtext Fill Style"),Je.headTextFillStyle),lineColor:nr(Z("Name Style - Line Color"),Je.lineColor),lineOffsetX:rr(Z("Name Style - Line Offset X"),Je.lineOffsetX),lineOffsetY:rr(Z("Name Style - Line Offset Y"),Je.lineOffsetY),lineWidth:rr(Z("Name Style - Line Width"),Je.lineWidth),pattern:null!==(V=Z("Name Style - Pattern"))&&void 0!==V?V:Je.pattern,preset:null!==(X=Z("Name Style - Preset"))&&void 0!==X?X:Je.preset,shadowBlur:rr(Z("Name Style - Shadow Blur"),Je.shadowBlur),shadowColor:nr(Z("Name Style - Shadow Color"),Je.shadowColor),shadowOffsetX:rr(Z("Name Style - Shadow Offset X"),Je.shadowOffsetX),shadowOffsetY:rr(Z("Name Style - Shadow Offset Y"),Je.shadowOffsetY)},et=ar(Z("Is Link"),null!==(_=J.isLink)&&void 0!==_?_:"link"===Q),tt=null!==(q=[ar(Z("Link - Top Left Arrow"),!1)?"1":"",ar(Z("Link - Top Arrow"),!1)?"2":"",ar(Z("Link - Top Right Arrow"),!1)?"3":"",ar(Z("Link - Left Arrow"),!1)?"4":"",ar(Z("Link - Right Arrow"),!1)?"6":"",ar(Z("Link - Bottom Left Arrow"),!1)?"7":"",ar(Z("Link - Bottom Arrow"),!1)?"8":"",ar(Z("Link - Bottom Right Arrow"),!1)?"9":""].filter((e=>""!==e)))&&void 0!==q?q:[],at=[!1,"#000000",!1,"#000000"],rt=[ar(Z("Stat Style - Is Custom"),at[0]),nr(Z("Stat Style - Fill Color"),at[1]),ar(Z("Stat Style - Has Shadow"),at[2]),nr(Z("Stat Style - Shadow Color"),at[3])],ot=[ar(Z("Type Style - Is Custom"),at[0]),nr(Z("Type Style - Fill Color"),at[1]),ar(Z("Type Style - Has Shadow"),at[2]),nr(Z("Type Style - Shadow Color"),at[3])],nt=[ar(Z("Effect Style - Is Custom"),at[0]),nr(Z("Effect Style - Fill Color"),at[1]),ar(Z("Effect Style - Has Shadow"),at[2]),nr(Z("Effect Style - Shadow Color"),at[3])],lt=[ar(Z("Pendulum Effect Style - Is Custom"),at[0]),nr(Z("Pendulum Effect Style - Fill Color"),at[1]),ar(Z("Pendulum Effect Style - Has Shadow"),at[2]),nr(Z("Pendulum Effect Style - Shadow Color"),at[3])],st=[ar(Z("Other Style - Is Custom"),at[0]),nr(Z("Other Style - Fill Color"),at[1]),ar(Z("Other Style - Has Shadow"),at[2]),nr(Z("Other Style - Shadow Color"),at[3])];let ct={};try{var dt;ct=JSON.parse(null!==(dt=Z("External Info (JSON)"))&&void 0!==dt?dt:"{}")}catch(ut){console.error("csvToCardList",ut)}return{id:Object(T.a)(),...J,art:$e,artCrop:Ye,artFinish:le,artFit:Ue,artSource:"online",atk:ie,attribute:ne,background:Ve,backgroundCrop:qe,backgroundFit:_e,backgroundSource:"online",backgroundType:Xe,cardIcon:se,condenseTolerant:Be,creator:ce,def:de,effectStyle:{condenseTolerant:Be,upSize:Ie,fontStyle:ze},effect:ue,effectTextStyle:nt,externalInfo:ct,finish:me,foil:re,format:be,frame:Q,furiganaHelper:pe,hasBackground:Ge,isDuelTerminalCard:we,isFirstEdition:Oe,isLegacyCard:Fe,isLimitedEdition:Se,isLink:et,isPendulum:Ce,isSpeedCard:ke,linkMap:tt,name:fe,nameStyle:Qe,nameStyleType:Ze,opacity:Pe,otherTextStyle:st,password:he,pendulumEffect:Ne,pendulumFrame:Te,pendulumScaleBlue:Re,pendulumScaleRed:Le,pendulumStyle:{upSize:Ae,fontStyle:Me},pendulumTextStyle:lt,setId:ge,star:te,starAlignment:ve,statTextStyle:rt,sticker:ye,subFamily:xe,typeAbility:Ee,typeTextStyle:ot}})).filter((e=>null!=e))}catch(t){return console.error("csvToCardList",t),[]}},ir=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,o=!!a&&isFinite(a),n=!!r&&isFinite(r);if(o&&!n)return-1;if(!o&&n)return 1;if(o&&n)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const l="?"===e?1:""===e?-1:0,i="?"===t?1:""===t?-1:0;return i-l===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):i-l},sr=(e,t)=>e.name.localeCompare(t.name),cr=(e,t)=>e.setId.localeCompare(t.setId),dr=(e,t)=>ir(e.atk,t.atk),ur=(e,t)=>ir(e.def,t.def),mr=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:ir(e.star,t.star),br=(e,t)=>{var a,r,o,n;const l=ue[t.frame].sortWeight-ue[e.frame].sortWeight;if(0!==l)return l;return(null!==(a=null===(r=ue[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(o=null===(n=ue[e.pendulumFrame])||void 0===n?void 0:n.sortWeight)&&void 0!==o?o:1e3)},pr=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||Lt(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},fr=(e,t,a)=>{for(let r=0;r<e.length;r++){const o=e[r](t,a);if(0!==o)return o}return 0},hr={name:{key:"name",sortFunction:e=>e.map(pr).sort(((e,t)=>fr([sr,mr,br,cr,dr,ur],e,t)))},atk:{key:"atk",sortFunction:e=>e.map(pr).sort(((e,t)=>fr([dr,ur,mr,br,sr,cr],e,t)))},def:{key:"def",sortFunction:e=>e.map(pr).sort(((e,t)=>fr([ur,dr,mr,br,sr,cr],e,t)))},set:{key:"set",sortFunction:e=>e.map(pr).sort(((e,t)=>fr([cr,br,mr,sr,dr,ur],e,t)))},level:{key:"level",sortFunction:e=>e.map(pr).sort(((e,t)=>fr([br,mr,sr,cr,dr,ur],e,t)))}},gr=(e,t)=>{const a=Object.values(t).filter((e=>null!=e));return 0===a.length?e:a.reduce(((e,t)=>t(e)),e)},vr=Object(Pa.create)(Object(_a.subscribeWithSelector)((e=>({activeId:"",cardDisplayList:[],cardList:[],filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e((e=>{let{cardList:t,filterFunctionMap:o}=e;const n={...o};if("text"===a){const e=r.toLowerCase();n[a]=t=>t.filter((t=>{let{name:a,effect:r,pendulumEffect:o}=t;return(_t(a).toLowerCase()+qt(r).toLowerCase()+qt(o).toLowerCase()).includes(e)}))}return{filterFunctionMap:n,cardDisplayList:gr(t,n)}}))},resetFilter:()=>{e((e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}}))},addCard:t=>e((e=>{let{cardList:a}=e;const r={id:Object(T.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}})),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e((e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}})),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e((e=>{let{cardList:r,cardDisplayList:o,isListDirty:n}=e,l=n;if(!1===l&&a){const e=r.find((e=>e.id===t.id));l=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...o}=e,{artCrop:n,backgroundCrop:l,...i}=t;return Object(At.a)(o,i)&&Xt(a,n)&&Xt(r,l)})(t,e)}return{isListDirty:l,cardList:r.map((e=>e.id===t.id?{...t}:e)),cardDisplayList:o.map((e=>e.id===t.id?{...t}:e))}}))},setActiveId:t=>e({activeId:t}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e((e=>{var a,r,o,n;let{cardList:l,activeId:i,cardDisplayList:s}=e;const c=l.filter((e=>e.id!==t)),d=s.filter((e=>e.id!==t)),u=d.findIndex((e=>e.id===i));return{activeId:i===t?null!==(a=null!==(r=null===(o=d[u-1])||void 0===o?void 0:o.id)&&void 0!==r?r:null===(n=d[0])||void 0===n?void 0:n.id)&&void 0!==a?a:"":i,cardList:c,cardDisplayList:d}}))},duplicateCard:t=>{e((e=>{let{cardList:a,filterFunctionMap:r}=e;const o=a.findIndex((e=>{let{name:a}=e;return a===t.name})),n=Object(T.a)(),l={...Object(It.a)(t),name:`${t.name} - Copy`,id:n},i=o<0?[...a,l]:[...a.slice(0,o),a[o],l,...a.slice(o+1,a.length)];return{activeId:n,pendingActiveCard:l,cardList:i,cardDisplayList:gr(i,r)}}))},sortList:t=>{e((e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:hr[t].sortFunction(a),cardList:hr[t].sortFunction(r)}}))}})))),yr=(e,t)=>{const a=Object(T.a)();let r=it(),o=!1;if(!e)return{isPartial:o,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=Ht(a);r=Object.keys(e).length>0?Ut(e,t):Ut(a,t)}else if(Yt(a))r=Ut(a);else if(Kt(a)){const e=Ht(a);r=Ut(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:n}=ma(e);o=t,r=n}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=ma(a);o=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:o,effect:n,boxSize:l,copyright:i,icon:s,id:c,image:d,layout:u,level:m,link:b,pendulum:p,rarity:h,serial:v,type:y,variant:x,version:j}=e,{red:O,blue:w,boxSize:k,boxSizeEnabled:F,effect:C,enabled:T}=p,N=Qt[s],L=ta[o],R=ra[u],D="string"===typeof(E=d)&&E.startsWith("data:image/");var E;const B=parseInt(m),I=h?oa[h.toLowerCase()]:void 0;let A=void 0===N||void 0===L||void 0===R||void 0===I;const{finish:z,artFinish:M,text:W}=null!==I&&void 0!==I?I:{},P=W?S[W]:null;return{isPartial:A,result:{...it(),finish:null!==z&&void 0!==z?z:[],name:t,nameStyleType:W?"predefined":"auto",nameStyle:P?P.value:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none"},atk:a,def:r,attribute:null!==L&&void 0!==L?L:f,effect:n,creator:i,subFamily:null!==N&&void 0!==N?N:g,setId:c,frame:null!==R&&void 0!==R?R:"normal",star:`${B}`===m&&B<=13?B:m,typeAbility:y.split("/").map((e=>e.trim())),art:D?"":d,artFit:!0,artData:D?d:"",artSource:D?"offline":"online",artFinish:null!==M&&void 0!==M?M:"normal",isLink:"link"===R&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter((e=>"string"===typeof e)),isPendulum:T,pendulumScaleBlue:w,pendulumScaleRed:O,pendulumEffect:C,password:v,externalInfo:{version:j,variant:x,boxSize:l,rarity:h,pendulum:{boxSize:k,boxSizeEnabled:F}}}}})(a);o=e,r=t}}catch(n){console.error("decodedCard",e,n);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?$t(e):"string"===typeof e?JSON.parse(e):e,Ut(t)}(e,!0),Da.a.info({message:Xa()["service.decode.outdated.message"],description:Xa()["service.decode.outdated.description"]})}catch(n){console.error("cardData",e,n),Da.a.error({message:Xa()["service.decode.error.message"],description:Xa()["service.decode.error.description"]})}}return{isPartial:o,card:{...r,id:a}}},xr={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},jr=Object(Pa.create)(((e,t)=>({card:lt(),setCard:(t,a)=>{const r=vr.getState().changeActiveCard;if("function"===typeof t)e((e=>{const o=t(e.card);return r(o,null===a||void 0===a||a),{card:o}}));else if("id"in(o=t)&&""!==o.id)r(t,a),e({card:t});else{const o={id:Object(T.a)(),...t};r(o,a),e({card:o})}var o},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,o=arguments.length>2?arguments[2]:void 0;const{setCard:n}=t(),l=t=>{n((a=>{var o;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(o=t.target)||void 0===o?void 0:o.value)}}))};if(!o)return l;const i="string"===typeof o?null!==(a=xr[o])&&void 0!==a?a:void 0:o;if(!i)return l;const{wait:s,type:c}=i;return"debounce"===c?$a()(l,s):"throttle"===c?Ya()(l,s):l}}))),Or=Object(Pa.create)((e=>{const{allowHotkey:t,exportFormat:a,reduceMotionColor:r,resolution:o,globalScale:n,showCreativeOption:l,showExtraDecorativeOption:i}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{globalScale:"number"===typeof n&&n<=s.maximumScale?n:1,exportFormat:"string"===typeof a?a:"csv",resolution:Array.isArray(o)&&"number"===typeof o[0]&&"number"===typeof o[1]?o:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof r&&r,showCreativeOption:"boolean"!==typeof l||l,showExtraDecorativeOption:"boolean"!==typeof i||i},updateSetting:t=>{e((e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}}))}}})),wr=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:o,exportRef:n,onExport:l,onDownloadError:i,onDownloadComplete:s}=e;const c=Va(),{card:d}=jr(),u=Or((e=>e.setting.resolution)),{opacity:m,name:b,isPendulum:p}=d,f=Object(r.useRef)(!1),h=Object(r.useCallback)((function(){var e;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=o.current,n=null===r||void 0===r?void 0:r.cloneNode(),l=null===r||void 0===r?void 0:r.getContext("2d"),c=null===n||void 0===n?void 0:n.getContext("2d");if(r&&l&&n&&c&&!t)try{a&&(n.width=a[0],n.height=a[1]),c.drawImage(r,0,0,r.width,r.height,0,0,n.width,n.height);const e=_t(b);var d=document.createElement("a");d.download=e?`${e}.png`:"card.png",d.href=n.toDataURL("image/png"),d.click()}catch(m){i()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()}),[o,t,b,u,s,i]);return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const t=_t(b);e&&(document.title=t?`${t} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")}),500),()=>{e=!1}}),[b]),Object(r.useEffect)((()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.1.19")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}})),Object(r.useEffect)((()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.1.19")?r:"unknown")}catch(i){const e="fail-to-set-storage-notification";Da.a.close(e),Da.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,r,i,s;if(o.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(i=document.getElementById("export-canvas-guard"))||void 0===i||i.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),n.current.pipelineRunning=!0,await n.current.currentPipeline,e&&(n.current.currentPipeline=l({isPendulum:p,opacity:m,isRelevant:()=>e}),await n.current.currentPipeline,e))){var c,u,b,g;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(Pt(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(b=document.getElementById("export-canvas-guard"))||void 0===b||b.setAttribute("style","display: none"),null===(g=document.getElementById("save-button-waiting"))||void 0===g||g.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),n.current.pipelineRunning=!1,f.current&&(f.current=!1,h())}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}})),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout((()=>{!1===n.current.pipelineRunning?h(a):f.current=!0}),200)},isPipelineRunning:()=>n.current.pipelineRunning}},{height:Sr,width:kr,maximumScale:Fr}=s,Cr=()=>"#000000".replace(/0/g,(()=>(~~(12*Math.random()+2)).toString(16))),Tr=e=>{let{ctx:t,color:a=Cr(),width:r,offset:o=4,edge:n,baseline:l,xRatio:i}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(n/i,l+1+Math.random()*o,r/i,2),t.fillStyle=s},Nr=(e,t,a,r,o,n)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==n&&void 0!==n?n:{};e.textAlign="left";const i=t.split("");let s=r;return i.forEach((t=>{e.fillText(t,s,o),l&&e.strokeText(t,s,o),s+=e.measureText(t).width*(2+a)/2})),s},Lr=(e,t,a,r,o,n)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==n&&void 0!==n?n:{};e.textAlign="right";const i=t.split("");let s=r;return i.forEach(((t,r)=>{const n=i[i.length-r-1];e.fillText(n,s,o),l&&e.strokeText(n,s,o),s-=e.measureText(n).width*(2+a)/2})),s},Rr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:kr*Fr,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Sr*Fr;return!!e&&(e.clearRect(0,0,t,a),!0)},Dr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;return async(a,r,o)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const l of e){const e=t[l];if(o&&t[l]){var n;const{partInstructionMap:t}=e,i=r&&null!==(n=t[r])&&void 0!==n?n:[];if(i.length)for(const{blendMode:e="source-over",opacity:r=1}of i)a.globalCompositeOperation=e,a.globalAlpha=r,await o(l);else await o(l);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},Er="#000000",Br="#000000",Ir="#000000",Ar=e=>{let{ctx:t,x:a,y:r,blur:o,color:n,shadowColor:l,lineColor:i,lineWidth:s,globalScale:c=1,useDefault:d=!0}=e;return(d||"number"===typeof a)&&(t.shadowOffsetX=(null!==a&&void 0!==a?a:0)*c),(d||"number"===typeof r)&&(t.shadowOffsetY=(null!==r&&void 0!==r?r:0)*c),(d||"number"===typeof o)&&(t.shadowBlur=(null!==o&&void 0!==o?o:0)*c),(d||"string"===typeof l)&&(t.shadowColor=null!==l&&void 0!==l?l:Br),(d||"string"===typeof n)&&(t.fillStyle=null!==n&&void 0!==n?n:Ir),(d||"string"===typeof i)&&(t.strokeStyle=null!==i&&void 0!==i?i:Er),(d||"number"===typeof s)&&(t.lineWidth=(null!==s&&void 0!==s?s:0)*c),()=>{(d||"number"===typeof a)&&(t.shadowOffsetX=0),(d||"number"===typeof r)&&(t.shadowOffsetY=0),(d||"number"===typeof o)&&(t.shadowBlur=0),(d||"string"===typeof l)&&(t.shadowColor=Br),(d||"string"===typeof n)&&(t.fillStyle=Ir),(d||"string"===typeof i)&&(t.strokeStyle=Er),(d||"number"===typeof s)&&(t.lineWidth=0)}},zr={},Mr=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?o=>{var n,l;if(!0===(null===(n=zr[t])||void 0===n?void 0:n.ready)){const n=zr[t].image,l="number"===typeof a?a:a(n),i="number"===typeof r?r:r(n);return e.drawImage(n,l,i),void setTimeout((()=>o(!0)),0)}if(null!==(l=zr[t])&&void 0!==l&&l.error)return void setTimeout((()=>o(!0)),0);const i=zr[t]&&(zr[t].cache||zr[t].ready),s=i?zr[t].image:new Image;i||(s.src="/ygocarder"+t),s.addEventListener("load",(()=>{const n="number"===typeof a?a:a(s),l="number"===typeof r?r:r(s);e.drawImage(s,n,l),zr[t]&&(zr[t].ready=!0,zr[t].error=!1),o(!0)}),{once:!0}),s.addEventListener("error",(()=>{zr[t]&&(zr[t].error=!0),o(!1)}),{once:!0}),i||(zr[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},Wr=async(e,t,a,r,o,n)=>await(async(e,t,a,r,o,n)=>new Promise(e&&""!==t?l=>{var i,s;if(!0===(null===(i=zr[t])||void 0===i?void 0:i.ready)){const i=zr[t].image,s="number"===typeof a?a:a(i),c="number"===typeof r?r:r(i),d="number"===typeof o?o:o(i),u="number"===typeof n?n:n(i);return e.drawImage(i,s,c,d,u),void setTimeout((()=>l(!0)),0)}if(null!==(s=zr[t])&&void 0!==s&&s.error)return void setTimeout((()=>l(!0)),0);const c=zr[t]&&(zr[t].cache||zr[t].ready),d=c?zr[t].image:new Image;c||(d.src="/ygocarder"+t),d.addEventListener("load",(()=>{const i="number"===typeof a?a:a(d),s="number"===typeof r?r:r(d),c="number"===typeof o?o:o(d),u="number"===typeof n?n:n(d);e.drawImage(d,i,s,c,u),zr[t]&&(zr[t].ready=!0,zr[t].error=!1),l(!0)}),{once:!0}),d.addEventListener("error",(()=>{zr[t]&&(zr[t].error=!0),l(!1)}),{once:!0}),c||(zr[t]={image:d,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,r,o,n),Pr=async(e,t,a,r,o,n,l,i)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=o,c.height=n;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await Wr(d,t,0,0,o,n),null!==i&&void 0!==i&&i.color&&(d.fillStyle=i.color,d.fillRect(0,0,o,n),d.globalCompositeOperation="destination-in"),await Wr(d,t,0,0,o,n),d.globalCompositeOperation="source-over";const u=Ar({ctx:s,...i,globalScale:l});s.drawImage(c,a,r),u()},Hr=e=>{var t,a;let{ctx:r,letter:o,isLastOfLine:n=!1,debug:l,fontStyle:i,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(Le.test(o))return{width:0,boundWidth:0};const u="tcg"===i?et:Je,m="tcg"===i?Ze:_e,b="tcg"===i?Qe:qe,p=r.measureText(o),{width:f,actualBoundingBoxLeft:h,actualBoundingBoxRight:g}=p,v=h+g;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=n?b[o]:m[o])&&void 0!==t?t:0;if("tcg"===i){var w;return{width:f,actualBoundWidth:v,boundWidth:f+2*((null!==(w=u[o])&&void 0!==w?w:0)*f),metric:p,offsetRatio:O}}let S=(null!==(a=u[o])&&void 0!==a?a:0)*f+("furigana"===c?0:Math.min(.075*f,Math.max(.45*d,f*x)*y)),k=1;Ue.test(o)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),k=.6):Ye.test(o)?(j="furigana"===c?v:Math.max(v,.75*f),S=2*d):Ie.test(o)?j="furigana"===c?v:Math.max(v,.7*f):We.test(o)?j=f:Ge.test(o)?j=2*v:Ve.test(o)?j=1.25*v*(n?.5:1):He.test(o)?j="furigana"===c?v:Math.max(v,.75*f):$e.test(o)?j=Math.max(v,.69*f)*("creator"===c?.975:1):Ke.test(o)?(j=f,S=0):j="furigana"===c?v:Math.max(v,.75*f),S="furigana"===c?0:S;const F=1*f*1;return l&&console.info(`getLetterWidth ${l}`,o,p,1,1,"|",F),{width:f,actualBoundWidth:v,boundWidth:"standard"===c?f*k:j+2*S,metric:p,offsetRatio:O}},$r=e=>{var t;let{ctx:a,baseline:r,edge:o,letter:n,xRatio:l,deviation:i,letterMetric:s,textDrawer:c}=e;const{boundWidth:d,metric:u=a.measureText(n),offsetRatio:m=0}=null!==s&&void 0!==s?s:{},{letterMap:b={},threshold:p=10}=null!==i&&void 0!==i?i:{},{uniformBoxDescent:f}=null!==(t=b[n])&&void 0!==t?t:{},h=u.width*l,g=d?d*l:h,v=null!==c&&void 0!==c?c:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:o}=e;t.fillText(a,o,r)},y=(h-g)/2,x=g*m;let j=1,O=0;if("number"===typeof f&&l>=p){const{actualBoundingBoxDescent:e,actualBoundingBoxAscent:t}=a.measureText(n);O=f-e;const r=t+e;j=(r+2*O)/r}a.scale(1,j),v({ctx:a,letter:n,scaledEdge:o/l-y-x,scaledBaseline:(r+O)/j}),a.scale(1,1/j)},Ur=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${rt}])|(${je}[\\w\\W]+?${Oe})|(.+?)`):new RegExp(`([${rt}])|${je}([\\w\\W]+?)${Oe}|(.+?)`);return e.split(t).filter((e=>null!=e&&""!==e))},Yr=(e,t,a,r,o)=>{const n=wa($,o),{fontSize:l,ordinalFontRatio:i=n.ordinalFontRatio,headTextFontRatio:s=n.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:b=c,numberFontRatio:p=1,furiganaFont:f}=t;let h=r.getFontInfo();let g=r.getFontInfo();let v=r.getFontInfo();let y=r.getFontInfo();let x=r.getFontInfo();return{applyNumberFont:()=>{h=r.getFontInfo(),e.font=r.setFamily(b).setSize(l*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(h.family).setSize(h.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;x=r.getFontInfo(),e.font=r.setSize(l*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(x.size).getFont()},applySymbolFont:()=>{g=r.getFontInfo(),e.font=r.setFamily(u).setSize(l*m).getFont()},stopApplySymbolFont:()=>{e.font=r.setFamily(g.family).setSize(g.size).getFont()},applyOrdinalFont:()=>{v=r.getFontInfo(),e.font=r.setFamily(d).setSize(l*i).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(v.family).setSize(v.size).getFont()},applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y=r.getFontInfo(),e.font=r.setFamily(f).setWeight(t?"bold":"").setSize(l*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(y.family).setWeight(y.weight).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},Kr=(e,t,a,r,o)=>{const n=(r-o)/2;e.beginPath(),e.arc(t+n,a-n,n,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Gr=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:o,headTextGap:n,headTextSpacing:l,gapPadding:i,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,b=o/a*d;let p=l,f=0;b<=.95?p=1*l:b<=1.175?p=l>=0?0:3*l:b<=1.56?p=l>=0?-1*l/4:3*l:(f=.66,p=l>=0?-1*l/4:2*l),(c||u>0&&u<1)&&(p=l);const h=o*(u&&!c?u:!f||c?1:f)+p*(r.length-1),g=m?0:(a-o)/r.length,v=a,y=1===t.length||2*i+h>a?"center":"space-around",x="center"===y?p:g,j="center"===y?2*i+h:v,O=c?Math.min(j,a):j,w="center"===y?(h-a)/2:0,S=Math.max(n,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,S),{gapPadding:i,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:S,headTextXRatio:"center"===y?f:0}},Vr=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Xr=e=>{let{ctx:t,token:a,nextToken:r,xRatio:o,previousTokenGap:n=0,letterSpacing:l,format:i,globalScale:s,textData:c}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const d=wa($,s),u=null!==l&&void 0!==l?l:d.letterSpacing,{currentFont:m,fontData:b,fontLevel:p}=c,{metricMethod:f,headTextGapRatio:h=U.headTextGapRatio,headTextOverflow:g=U.headTextOverflow,fontStyle:v}=b,y=b.fontList[p],{bulletSymbolWidth:x,capitalLetterRatio:j,fontSize:O,iconSymbolWidth:w=x,largeSymbolRatio:S=d.largeSymbolRatio,headTextSpacing:k=d.headTextSpacing,squareBracketRatio:F,wordLetterSpacing:C}=y,T=-.5*O,{applyScale:N,reverseScale:L,applyLargerText:R,stopApplyLargerText:D,applyFuriganaFont:E,stopApplyFuriganaFont:B,applyOrdinalFont:I,stopApplyOrdinalFont:A,applySymbolFont:z,stopApplySymbolFont:M,applyNumberFont:W,stopApplyNumberFont:P}=Yr(t,b,y,m,s),H=1+u/2;let Y="",K=0,G=0,V=!1;const X=void 0===r;let _=null!==n&&void 0!==n?n:0,q=!1,J=0;const Z=a.replaceAll(new RegExp(Ne,"g"),"").split(xe).filter((e=>null!=e&&""!==e));for(let $=0;$<Z.length;$++){const e=0===$,a=Z[$];if("\u29be"===a){_=0;K+=w/o*H,e&&(J=0,Y=a[0])}else if("\u25cf"===a){_=0;K+=x/o*H,e&&(J=0,Y=a[0])}else if(/[\xa9]/.test(a)){_=0,R(S);const r=t.measureText(a).width/o;D(),K+=r*H,e&&(J=0,Y=a[0])}else if(ze.test(a)){_=0,I();const r=t.measureText(a).width/o;A(),K+=r*H,G+=1,e&&(J=0,Y=a[0])}else if(at.test(a)){const[n,l,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),m="||"===l,{totalWidth:b}=Xr({ctx:t,token:n,nextToken:r,xRatio:o,letterSpacing:u,previousTokenGap:0,format:i,textData:c,globalScale:s});E();const p=d.split("").map((e=>Hr({ctx:t,letter:e,fontStyle:v,metricMethod:"furigana",xRatio:1,globalScale:s}).boundWidth)).reduce(((e,t)=>e+t),0);B();const{halfGap:f,headTextWidth:y}=Gr({headText:d,headTextLetterWidth:p/o,footText:n,footTextWidth:b,headTextGap:T/o,headTextSpacing:k,gapPadding:h*O/o,fitFootText:m,sentenceXRatio:o,xRatio:"condense"===g&&n.length>1?Math.min(1,o+.1):0}),x=0===d.length?Math.max(T,b/ot):f,j=x,w=x,S=Math.max(y,b),F=Vr(_,j);_=w,K+=S-F,G+=1,e&&(q=!0,J=j,Y=n[0])}else if(ye.test(a)){const r=C?1+C/2:H;t.letterSpacing=(r-1)*m.getFontInfo().sizeAsNumber+"px";let o=a,n=0;for(;""!==o;){let e=o[0],a=o.slice(1),r=t.measureText(o).width-t.measureText(a).width;ge.test(e)?(N(F),r=t.measureText(o).width-t.measureText(a).width,L(F)):he.test(e)?(N(j),r=t.measureText(o).width-t.measureText(a).width,L(j)):Pe.test(e)?(W(),r=t.measureText(o).width-t.measureText(a).width,P()):De.test(e)&&"tcg"===v?(z(),r=t.measureText(o).width-t.measureText(a).width,M()):r=t.measureText(o).width-t.measureText(a).width,n+=r,o=a}const l=Math.max(T,n/ot),i=l;K+=n-Vr(_,l),_=i,e&&(J=l,Y=a[0]),t.letterSpacing="0px"}else if(De.test(a)&&"tcg"===v){z();const r=t.measureText(a).width*H;M();const o=Math.max(T,r/ot),n=o;K+=r-Vr(_,o),_=n,e&&(J=o,Y=a[0])}else{const{boundWidth:r}=Hr({ctx:t,letter:a,isLastOfLine:X,fontStyle:v,metricMethod:f,xRatio:o,globalScale:s}),n=r*H,l=Math.max(T,n/ot),c=l;K+=n-Vr(_,l),_=c,("ocg"===i||"tcg"===i&&/\s+/.test(a))&&!1===Ke.test(a)&&(G+=1,$===Z.length-1&&(V=!0)),e&&(J=l,Y=a[0]),Xe.test(a)&&(J=0,_=0)}}return{totalWidth:K,spaceCount:G,spaceAtEnd:V,leftMostLetter:Y,rightGap:_,leftGap:J,offsetable:q}},_r=e=>{let{ctx:t,line:a,width:r,xRatio:o,format:n,isLast:l,textData:i,globalScale:s}=e;const c=Ur(a);let d=0,u=0,m=0;for(let p=0,f=o;p<c.length;p++){const e=c[p],a=c[p+1];if(e===ke){f=1;continue}if(e===Fe){f=o;continue}const{spaceCount:r,totalWidth:l,spaceAtEnd:b,leftGap:h,rightGap:g,leftMostLetter:v}=Xr({ctx:t,token:e,nextToken:a,xRatio:f,previousTokenGap:m/f,textData:i,format:n,globalScale:s});m=g*f,d+=l*f+((0===p&&h>0?-1*Math.min(20*s,h*f):0)+(0===p&&Me.test(v)?4*s*f:0)),u+=r-(b&&void 0===a?1:0)}const b=u>0?(r-d)/u:0;return{tokenList:c,spaceWidth:l?"tcg"===n?b>1.5*s?0:b:b>3.65*s?0:b:b}},qr=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:o=0,width:n,format:l,textData:i,globalScale:s}=e;const{fontData:c,fontLevel:d}=i,{letterSpacing:u}=c.fontList[d],m=[],b=r.reduce(((e,r)=>{const o=(a<=100?100:a)/1e3,c=n/o,d=Ur(r,!0);let b=1,p=[],f=0,h=0,g=0;for(let n=0,y=o;n<d.length;n++){const e=d[n],r=d[n+1];e===ke?(g+=1,y=1):e===Fe&&(g-=1,y=o);let{leftMostLetter:v,totalWidth:x,rightGap:j,leftGap:O}=Xr({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:h,format:l,letterSpacing:u,textData:i,globalScale:s});let w=x/(g>0?o:1)+(0===n?(O>0?-1*Math.min(20*s/y,O):0)+(Me.test(v)?4*s:0):0);if(f+w>c){let o=p.join("").trim();g>0&&(o+=Fe),g<0&&(o=ke+o),g=0,m.push({line:o,effectiveMedian:a,isLast:!1,actualLineWidth:f});let{totalWidth:n,rightGap:c,leftGap:d}=Xr({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:0,format:l,textData:i,globalScale:s});f=n+((d>0?-1*Math.min(20*s/y,d):0)+(Me.test(v)?4*s:0)),h=c,p=[e],b+=1}else f+=w,h=j,p.push(e)}let v=p.join("").trim();return g>0&&(v+=Fe),g<0&&(v=ke+v),g=0,m.push({line:v,effectiveMedian:a,isLast:!0,actualLineWidth:f}),e+b}),0)+(null!==o&&void 0!==o?o:0);return{currentLineList:m,currentLineCount:b}},Jr=e=>{let{ctx:t,fontSize:a,edge:r,baseline:o,headText:n,headTextLetterWidth:l,footText:i,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:b,globalScale:p,xRatio:f,fontStyle:h,textWorker:g,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=g,S="condense"===y&&i.length>1?Math.min(1,f+.1):0,{gapPadding:k,letterSpacing:F,trueHeadTextWidth:C,halfGap:T,alignment:N,headTextXRatio:L}=Gr({headText:n,headTextLetterWidth:l,footText:i,footTextWidth:s*f,headTextGap:c,headTextSpacing:d*f,gapPadding:a*b,fitFootText:v,sentenceXRatio:f,xRatio:S}),R=C>s*f;if(0===n.length)return{trueHeadTextWidth:C,halfGap:T};const D=v?Math.min(1,s*f/C):1,E=v?D:S&&"center"===N?S:L;let B=r;O(),(v||E)&&(w(E,1),B=r/E),"center"===N?(B+=k,R?E>D&&(B+=(s*f/E-C)/2/E):B+=(s*f-C)/2):B+=F/2;for(const I of n){x();const{width:e,boundWidth:r}=Hr({ctx:t,letter:I,fontStyle:h,metricMethod:"furigana",xRatio:1,globalScale:p}),n=(e-r)/2;j(),x(m),t.fillText(I,B-n,o-a*u),j(),B+=r+F}return(v||E)&&O(),w(f,1),{trueHeadTextWidth:C,halfGap:T}},Zr=e=>{let{ctx:t,tokenList:a,trueEdge:r,trueBaseline:o,spaceWidth:n=0,xRatio:l,yRatio:i=1,textData:s,format:c,textDrawer:d,debug:u=!1,globalScale:m}=e;const{currentFont:b,fontData:p,fontLevel:f}=s,h=p.fontList[f],{headTextFillStyle:g,headTextBold:v=U.headTextBold,headTextHeightRatio:y=U.headTextHeightRatio,headTextOverflow:x=U.headTextOverflow,headTextGapRatio:j=U.headTextGapRatio,metricMethod:O,fontStyle:w,letterDeviationMap:S={}}=p,k=wa($,m),{bulletSymbolOffset:F=k.bulletSymbolOffset,bulletSymbolWidth:C,capitalLetterRatio:T=k.capitalLetterRatio,fontSize:N,headTextSpacing:L=k.headTextSpacing,iconSymbolWidth:R=C,largeSymbolRatio:D=k.largeSymbolRatio,letterSpacing:E=k.letterSpacing,ordinalFontOffsetY:B=k.ordinalFontOffsetY,squareBracketRatio:I=k.squareBracketRatio,wordLetterSpacing:A,allRightSymbolOffset:z=k.allRightSymbolOffset}=h,M=Yr(t,p,h,b,m),{stopApplyFuriganaFont:W,applyFuriganaFont:P,stopApplyLargerText:H,applyLargerText:Y,stopApplyNumberFont:K,applyNumberFont:G,stopApplyOrdinalFont:V,applyOrdinalFont:X,applyScale:_,reverseScale:q,applySymbolFont:J,stopApplySymbolFont:Z,applyAsymmetricScale:Q,resetScale:ee}=M,te=1+E/2,ae=o/i;let re=0,oe=[],ne=0,le=r;for(let $=0,U=l;$<a.length;$++){const e=a[$];if(e===ke){U=1,t.setTransform(1,0,0,1,0,0);continue}if(e===Fe){U=l,t.scale(U,1);continue}const r=-.5*U,p=N*r,f=a[$+1],h=a[$+2],k={ctx:t,xRatio:U,letterSpacing:E,format:c,textData:s,globalScale:m},ce={ctx:t,baseline:ae,xRatio:U,textDrawer:d},de=e.split(xe).filter((e=>null!=e&&""!==e)),{leftMostLetter:ue,leftGap:me,rightGap:be,totalWidth:pe,spaceCount:fe}=Xr({token:e,nextToken:f,previousTokenGap:re/U,...k}),ve=0===$?(me>0?-1*Math.min(20*m,me*U):0)+(Me.test(ue)?4*m:0):0;let je=le+ve,Oe=re;for(let a=0;a<de.length;a++){var ie,se;const l=de[a],u=null!==(ie=de[a+1])&&void 0!==ie?ie:f,E=null!==(se=de[$+2])&&void 0!==se?se:h;if(e===ke||e===Fe);else if("\u29be"===l)oe.push({edge:je,size:R,baseline:ae}),je+=R*te,Oe=0,ne=0;else if("\u25cf"===l)ee(),Kr(t,je,o+F-1*m,C,tt(c)*m),je+=C*te,Q(U,i),Oe=0,ne=0;else if(/[\xa9]/.test(l))ee(),Y(D),$r({...ce,letter:l,edge:je*U,baseline:o+("tcg"===c?z:2*z)}),je+=t.measureText(l).width*te,H(),Q(U,i),Oe=0,ne=0;else if(ze.test(l))ee(),X(),$r({...ce,letter:l,edge:je*U,baseline:o+B}),je+=t.measureText(l).width*te,V(),Q(U,i),je+=n,Oe=0,ne=0;else if(at.test(l)){const[e,a,o=""]=l.replaceAll(/{|}/g,"").split(/(\|+)/),b="||"===a,{totalWidth:f}=Xr({token:e,nextToken:u,previousTokenGap:0,...k});P();const h=o.split("").map((e=>Hr({ctx:t,letter:e,fontStyle:w,metricMethod:"furigana",xRatio:1,globalScale:m}).boundWidth)).reduce(((e,t)=>e+t),0);W();const{headTextWidth:O,halfGap:S}=Gr({headText:o,headTextLetterWidth:h,footText:e,footTextWidth:f*U,headTextGap:p,headTextSpacing:L*U,gapPadding:N*j,fitFootText:b,sentenceXRatio:U,xRatio:"condense"===x&&e.length>1?Math.min(1,U+.1):0}),F=0===o.length?Math.max(p,f*r):S,C=F,T=F,R=Vr(Oe,T),D=T>0?T-R:0,{offsetable:B,leftGap:I}=Xr({token:u,nextToken:E,previousTokenGap:C/U,...k}),A=I*U,z=Vr(C,A),H=D+(C>0?C-z:0);let $=0,Y=0;H>0&&A>=-2*m&&B?($=(H+2*Math.max(A,0))/3,Y=Math.max(A,0)-$):$=D;const K=je+(F<0?-R:ve?-ve:$)+ne;ne=Y,Zr({ctx:t,format:c,textData:s,tokenList:Ur(e),trueBaseline:ae,trueEdge:K,xRatio:U,yRatio:i,spaceWidth:0,textDrawer:d,globalScale:m,debug:!1});const G=t.fillStyle,V=t.strokeStyle,X=t.shadowColor,_=t.shadowOffsetX,q=t.shadowOffsetY,J=t.shadowBlur;g&&(t.fillStyle=g,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);Jr({ctx:t,fontSize:N,edge:je-R,baseline:ae,headText:o,headTextLetterWidth:h,footText:e,footTextWidth:f,headTextGap:p,headTextSpacing:L,headTextHeightRatio:y,headTextBold:v,headTextGapRatio:j,xRatio:U,fontStyle:w,textWorker:M,fitFootText:b,headTextOverflow:x,globalScale:m}),t.fillStyle=G,t.strokeStyle=V,t.shadowColor=X,t.shadowOffsetX=_,t.shadowOffsetY=q,t.shadowBlur=J,je+=Math.max(f*U,O)-R+n,Oe=C}else if(ye.test(l)){const e=A?1+A/2:te;t.letterSpacing=(e-1)*b.getFontInfo().sizeAsNumber+"px";const a=t.measureText(l).width*U,o=Math.max(p,a*r),n=o;je-=Vr(Oe,o);let i=l,s=je;for(;""!==i;){let e=i[0],a=i.slice(1),r=0;const o={...ce,deviation:S[`${m}`],letter:e,edge:s};if(ge.test(e))_(I),r=t.measureText(i).width-t.measureText(a).width,$r({...o,edge:s/I,baseline:ae/I}),q(I);else if(he.test(e)){_(T),r=t.measureText(i).width-t.measureText(a).width;const n=r>t.measureText(e).width*T?Math.round(r*(1-T))/2:0;$r({...o,edge:s/T+n,baseline:ae/T}),q(T)}else Pe.test(e)?(G(),r=t.measureText(i).width-t.measureText(a).width,$r(o),K()):De.test(e)&&"tcg"===w?(J(),r=t.measureText(i).width-t.measureText(a).width,$r(o),Z()):(r=t.measureText(i).width-t.measureText(a).width,$r(o));s+=r*U,i=a}je=s,Oe=n,ne=0,t.letterSpacing="0px"}else if(De.test(l)&&"tcg"===w){const e=l;J();const a=t.measureText(e).width*te*U,o=Math.max(p,a*r),n=o;je-=Vr(Oe,o),$r({...ce,letter:e,edge:je}),je+=a,Z(),Oe=n,ne=0}else{const e=l,a=Hr({ctx:t,letter:e,fontStyle:w,metricMethod:O,isLastOfLine:void 0===u,xRatio:U,globalScale:m}),o=a.boundWidth*te*U,i=Math.max(p,o*r),s=i;je-=Vr(Oe,i),$r({...ce,letter:e,edge:je,deviation:null===S||void 0===S?void 0:S[`${m}`],letterMetric:a}),je+=o,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==Ke.test(e)&&(je+=n),Xe.test(e)||(Oe=s),ne=0}}re=be*U,u&&Tr({ctx:t,baseline:ae,edge:le,width:pe*U,xRatio:U}),le+=pe*U+fe*n+ve}return{tokenEdge:le,iconPositionList:oe}},Qr=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:o=!0,dictionaryType:n="rubyForm"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let i="",s="ocg"===t?oe:ne;for(const f of l){var c;i+=null!==(c=s[f])&&void 0!==c?c:f}const d=i,u=(r?d.replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${we}$1${Se}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(Te,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,(e=>{const t=le[e];return null!==t&&void 0!==t?t:e})).replaceAll(new RegExp("{{([^{}]+?)}}","g"),(e=>e.replaceAll("{{",ke).replaceAll("}}",Fe))).replaceAll(new RegExp("{[^{}]+?}","g"),(e=>`${je}${e}${Oe}`)),m=("tcg"===t||!1===o?u:u.replaceAll(new RegExp(Ee,"g"),(e=>{var t;const a=null!==(t=I[e][n])&&void 0!==t?t:I[e].rubyForm;return`${je}${a}${Oe}`}))).replaceAll(new RegExp(ve,"g"),(e=>`${je}${e}${Oe}`)).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),(e=>`${je}${e}${Oe}`)).replaceAll(new RegExp(Ae,"g"),(e=>`${je}${e}${Oe}`)).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),(e=>`${je}${e}${Oe}`)).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),(e=>`${je}${e}${Oe}`));let b=[],p=0;for(const f of m)f===je?(0===p&&b.push(f),p+=1):f===Oe?(p-=1,0===p&&b.push(f)):b.push(f);return b.join("").replaceAll(`${Se}${Oe}`,`${Oe}${Se}`).replaceAll(`${je}${we}`,`${we}${je}`).replaceAll(`${ke}${Oe}`,`${Oe}${ke}`).replaceAll(`${je}${Fe}`,`${Fe}${je}`).replaceAll(`${we}${Se}`,"").replaceAll(`${je}${Oe}`,"")},eo=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:o}=e;const n=[t,o?"type":"",r?"stat":""].filter((e=>""!==e)).join("-"),l=[t,o?"type":"",r?"stat":""].filter((e=>""!==e)).join("-");let i=_[l];return a&&"tcg"===t&&X[l]&&(i=X[l]),{fontDataKey:l,fontData:i,sizeList:N[n]}},to=e=>{var t;let{ctx:a,content:r,isNormal:o=!1,fontData:n=_.tcg,textStyle:l,sizeList:i=N["tcg-type"],condenseTolerant:s="strict",format:c,furiganaHelper:d,option:u}=e;const{defaultSizeLevel:m,forceRelaxCondenseLimit:b,globalScale:p=1}=null!==u&&void 0!==u?u:{};let f=null!==m&&void 0!==m?m:0;if(!a||!r)return f;const h=Qr(r.trim(),c,{furiganaHelper:d}),{effectText:g,effectFlavorCondition:v,fullLineList:y}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e,o=[];const n=new RegExp(`^(${we}([^${Se}]*)${Se}\\s*)`);let l,i;do{var s,c;l=null===(s=n.exec(r))||void 0===s?void 0:s[1],i=null===(c=n.exec(r))||void 0===c?void 0:c[2],i&&l&&(o.push(i),r=r.replace(l,""))}while(l&&i);let d="";const u=null===(t=new RegExp(Re,"m").exec(e))||void 0===t?void 0:t[1];return u&&a?(d=u.trim(),r=r.replace(u,"")):d="",{fullLineList:o,effectText:r,effectFlavorCondition:d}}(h,o),x=(null!==(t=y.length)&&void 0!==t?t:0)+(v.length>0?1:0),j=g?g.split("\n"):[],{font:O,fontList:w}=Sa(n,p);for(;f<w.length&&f>=0;){var S,k,F;const e="tcg"===c?b&&f<b?Z.relaxed:null!==(S=Z[s])&&void 0!==S?S:Z.strict:{1:800,2:800,3:800},t=w[f],{fontSize:r,lineHeight:d,lineCount:u}=t,{trueEdge:m,trueWidth:h,trueBaseline:g}=ja(null!==(k=i[f])&&void 0!==k?k:i[i.length-1],p),C=o&&"tcg"===c?h-2*p:h,T=fa();a.font=T.setWeight("").setSize(r).setFamily(O).getFont(),a.textAlign="left";const N={fontData:Sa(n,p),fontLevel:f,currentFont:T};let L=[];const R=pa((e=>{const{currentLineList:t,currentLineCount:r}=qr({ctx:a,median:e,paragraphList:j,additionalLineCount:x,format:c,textData:N,width:C,globalScale:p});return L=t,!(r>u)}),200),D=Ar({ctx:a,...l,globalScale:p});if(!(R<(null!==(F=e[`${j.length}`])&&void 0!==F?F:e[3])&&f<w.length-1)){Rr(a);let e=g+d;if([...y.map((e=>({line:e,isLast:!0,effectiveMedian:pa((t=>{const{currentLineCount:r}=qr({ctx:a,median:t,paragraphList:[e],format:c,textData:N,width:C,globalScale:p});return!(r>1)}))}))),...L].forEach((t=>{let{line:r,isLast:o,effectiveMedian:n}=t;const l=n/1e3,{tokenList:i,spaceWidth:s}=_r({ctx:a,line:r,xRatio:l,format:c,isLast:o,textData:N,width:C,globalScale:p});a.scale(l,1),Zr({ctx:a,tokenList:i,xRatio:l,yRatio:1,trueEdge:m,trueBaseline:e,spaceWidth:s,textData:N,format:c,globalScale:p}),e+=d,a.setTransform(1,0,0,1,0,0)})),v.length>0){const t=Sa(_.tcg,p),r=t.fontList[f],{fontSize:o,lineHeight:n}=r,l=fa();a.font=l.setSize(o).setFamily(t.font).getFont();const i={fontData:t,fontLevel:f,currentFont:l},s=pa((e=>{const{currentLineCount:t}=qr({ctx:a,median:e,paragraphList:[v],format:c,textData:i,width:C,globalScale:p});return!(t>1)}))/1e3;a.scale(s,1);const d=Ur(v);Zr({ctx:a,tokenList:d,xRatio:s,yRatio:1,trueEdge:m,trueBaseline:e,textData:i,format:c,globalScale:p}),e+=n,a.setTransform(1,0,0,1,0,0)}break}f+=1,D()}return f},{width:ao}=s,{width:ro,height:oo,topToPendulumStructure:no,pendulumStructureHeight:lo,leftToPendulumStructure:io,effectBoxHeight:so,effectBoxWidth:co,leftToEffectBox:uo,topToEffectBox:mo}=s,bo=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,globalScale:o,format:n,hasBackground:l,frame:i,bottomFrame:s,backgroundType:c,cardIcon:d,attribute:b,star:p,foil:h,pendulumSize:g,opacity:v,isLink:y,isSpeedSkill:x,isXyz:j,isPendulum:O,loopFinish:w,loopArtFinish:S}=e;const k=t.getContext("2d"),{artBorder:F,nameBorder:C,body:T,name:N,pendulum:L,text:R,boundless:D}=v,{artX:E,artY:B,artFinishX:I,artFinishY:A,artWidth:z}=m(O,v),M=T>0||F,W=860,P="normal"!==h,H=j||x?i:"normal",$=H,U=!D&&M,Y={calculateCardArtRedrawCoordination(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;const o=null!==t&&void 0!==t?t:v,{body:n}=o,{artX:l,artY:i,artWidth:s}=m(O,o,r),{width:c,height:d}=e,u=s/c,b=n<100?(io-l)/u:0,p=b*u,f=n<100?(no-i)/u:0,h=f*u,g=n<100?d-lo/u:0;return{imageScaledRatio:u,sourceOffsetX:b,sourceOffsetY:f,destinationOffsetX:p,destinationOffsetY:h,offsetHeight:g,destinationX:l+p,destinationY:i+h,destinationWidth:s-2*p,destinationHeight:s/(c/d)*a-g*u}},drawFrame:async()=>{if(k){if(k.globalAlpha=T/100,k.scale(o,o),await Mr(k,`frame/frame-${i}.png`,0,0),await Mr(k,`frame-pendulum/frame-pendulum-${s}.png`,0,0),k.resetTransform(),l&&r&&"frame"===c){const{width:e,height:t}=r,a=r.cloneNode(),n=null===a||void 0===a?void 0:a.getContext("2d");a&&n&&(a.width=ro*o,a.height=oo*o,n.drawImage(r,0,0,e,t,0,0,ro*o,oo*o),n.clearRect(o*u.normal.artX,o*u.normal.artY,o*u.normal.artWidth,o*u.normal.artWidth/u.normal.artRatio),n.clearRect(o*uo,o*mo,o*co,o*so),k.drawImage(a,0,0,o*ro,o*oo,0,0,o*ro,o*oo))}k.globalAlpha=1}},drawCardArt:()=>{if(!a||!k)return;const{width:e,height:t}=a;t<=0||k.drawImage(a,0,0,e,t,o*E,o*B,o*z,o*z/(e/t))},drawBackground:e=>{if(!r||!k||!l)return;const{width:t,height:a}=r;if(a<=0)return;if("pendulum"===e&&"frame"!==c){let e=Y.calculateCardArtRedrawCoordination(r);"full"===c?e=Y.calculateCardArtRedrawCoordination(r,{...v,body:0},void 0,"full"):"fit"===c&&(e=Y.calculateCardArtRedrawCoordination(r,v,void 0,"fit"));const{sourceOffsetX:n,sourceOffsetY:l,offsetHeight:i,destinationX:s,destinationY:d,destinationWidth:u,destinationHeight:m}=e;return void k.drawImage(r,n,l,t-2*n,a-i,o*s,o*d,o*u,o*m)}const{artX:n,artY:i,artWidth:s}=m(O,{...v,boundless:!0},c);k.drawImage(r,0,0,t,a,o*n,o*i,o*s,o*s/(t/a))},drawAttribute:async()=>{k&&(k.scale(o,o),await Mr(k,`attribute/attr-${n}-${b.toLowerCase()}.png`,678,55),k.resetTransform())},drawStar:async e=>{let{style:t,starAlignment:a}=e;const r="auto"===d?Dt(i):d;k&&(k.scale(o,o),await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:o,star:n,starAlignment:l="auto",style:i,onStarDraw:s}=e,c="string"===typeof n?""===n?0:1:"number"===typeof n?n:0,d=50*c+4*(c-1),u="right";["rank","negative-level"].includes(r)&&(u="left"),u="auto"===l?u:l,c>12&&(u="center"),o&&"center"===u&&(c=0,d=0);const m="center"===u?(ao+d)/2:"left"===u?85.9125+d:728.775;let b=-54;if(t&&o&&"st"!==r){const e=50,r=Ar({ctx:t,...i,globalScale:a});t.textAlign="left"===u||"right"===u?u:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const n="center"===u?t.measureText(o).width/-2:"left"===u?4:-58;t.fillText(o,m+n,145+.9*e),t.textAlign="left",r()}return await Promise.all([...Array(c)].map((async()=>{b+=54;let e=[m-(50+b),145];return await Mr(t,`subfamily/subfamily-${r}.png`,...e),await s(e)})))})({ctx:k,cardIcon:r,text:"string"===typeof p?p:null,star:p,starAlignment:a,style:t,globalScale:o,onStarDraw:async e=>"st"===r?Promise.resolve():await w(k,"star",(async t=>Mr(k,`finish/finish-${t}-star.png`,...e)))}),k.resetTransform())},drawPendulumScaleIcon:async()=>{k&&(k.scale(o,o),await Mr(k,`frame-pendulum/pendulum-scale-${g}.png`,0,750),k.resetTransform())},drawLinkArrowMap:async e=>{k&&(k.scale(o,o),await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:a,top:r,height:o,width:n}=be[t-1],l=e.includes(`${t}`),i=`link/link-inactive-${t}`,s=`link/link-active-${t}`,c=[a,r,n,o];return await Wr(k,`${i}-base${D?"-full":""}.png`,...c),await Wr(k,`${i}-core.png`,...c),l?(await Wr(k,`${s}-base.png`,...c),Wr(k,`${s}-core.png`,...c)):void 0}))),k.resetTransform())},drawStatBorder:async e=>{k&&(k.scale(o,o),await Pr(t,"frame/frame-stat-border.png",0,1070,813,20,o,e),k.resetTransform())},drawNameBackground:async()=>{k&&(k.scale(o,o),k.globalAlpha=N/100,await Mr(k,`background/background-name-${i}.png`,0,0),k.globalAlpha=1,k.resetTransform())},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];k&&(k.scale(o,o),k.globalAlpha=R/100,await Mr(k,`background/background-text-${s}.png`,54,884),e&&(k.globalAlpha=L/100,await Mr(k,`background/background-pendulum-${s}.png`,55,738)),k.globalAlpha=1,k.resetTransform())},drawFrameBorder:async()=>{k&&(k.scale(o,o),await Mr(k,`frame/frame-border-${H}.png`,0,0),k.resetTransform())},drawNameBorder:async()=>{C&&k?(k.scale(o,o),await Mr(k,`frame/name-border-${$}.png`,0,0),k.resetTransform()):Promise.resolve()},drawArtBorder:async()=>{if(M&&k){let e="";e=j||x?`frame/art-border-${i}.png`:y||["zarc","hamon","uria","raviel"].includes(i)?"frame/art-border-special.png":"frame/art-border.png",k.scale(o,o),await Mr(k,e,60,170),k.resetTransform()}},drawPendulumBorder:async(e,t)=>{k&&(k.scale(o,o),await Mr(k,`frame-pendulum/border-pendulum-${g}-${t}`+(e?"":"-artless")+".png",30,185),k.resetTransform())},drawEffectBorder:async()=>{k&&(k.scale(o,o),P||"speed-skill"!==s?await Mr(k,"frame/effect-border.png",35,W):await Mr(k,"frame/effect-border-speed-skill.png",35,W),k.resetTransform())},drawCardBorder:async()=>{k&&(k.scale(o,o),await Mr(k,`frame/card-border${P?`-${h}`:""}.png`,0,0),k.resetTransform())},drawArtBorderFoil:async()=>{k&&(k.scale(o,o),M&&await Mr(k,`frame/art-border-${h}.png`,60,170),k.resetTransform())},drawEffectBorderFoil:async()=>{k&&(k.scale(o,o),await Mr(k,`frame/effect-border-${h}.png`,35,W),k.resetTransform())},drawLinkMapFoil:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;k&&(k.scale(o,o),await Mr(k,`link/link-overlay-arrow-${h}${e?"":"-artless"}.png`,0,175),k.resetTransform())},drawNameFinish:async()=>{(M||C)&&k&&(k.scale(o,o),await w(k,"name",(async e=>Mr(k,`finish/finish-${e}-name.png`,0,0))),k.resetTransform())},drawAttributeFinish:async()=>{b!==f&&k&&(k.scale(o,o),await w(k,"attribute",(async e=>Mr(k,`finish/finish-${e}-attribute.png`,678,55))),k.resetTransform())},drawArtFinish:async()=>{U&&k&&(k.scale(o,o),await S(k,"art",(async e=>await Mr(k,`finish/art-finish-${e}${O?`-pendulum-${g}`:""}.png`,I,A))),k.resetTransform())},drawArtOverlayFinish:async()=>{k&&(k.scale(o,o),await w(k,"art-overlay",(async e=>Mr(k,`finish/finish-${e}-`+(U?"art":"unart")+"-overlay"+(O?`-pendulum-${g}`:"")+".png",I,A))),k.resetTransform())},drawArtBorderFinish:async()=>{M&&k&&(k.scale(o,o),await w(k,"art-border",(async e=>Mr(k,`finish/finish-${e}-art-border.png`,0,0))),k.resetTransform())},drawPendulumArtBorderFinish:async()=>{k&&(k.scale(o,o),M&&await w(k,"art-border-pendulum",(e=>Mr(k,`finish/finish-${e}-art-border-pendulum-${g}.png`,0,0))),k.resetTransform())},drawBorderPendulumFinish:async()=>{k&&(k.scale(o,o),await w(k,"border-pendulum",(async e=>Mr(k,`finish/finish-${e}-border-pendulum-${g}.png`,0,0))),k.resetTransform())},drawFrameFinish:async()=>{k&&(k.scale(o,o),await w(k,"frame",(async e=>Mr(k,`finish/finish-${e}-frame${O?`-pendulum-${g}`:""}.png`,0,0))),k.resetTransform())},drawFrameBackgroundFinish:async()=>{k&&(k.scale(o,o),await w(k,"frame-background",(async e=>Mr(k,`finish/finish-${e}-frame-background${O?`-pendulum-${g}`:""}.png`,0,0))),k.resetTransform())},drawOverlayFinish:async()=>{k&&(k.scale(o,o),await w(k,"overlay",(async e=>Mr(k,`finish/finish-${e}-overlay.png`,0,0))),k.resetTransform())},drawCardBorderFinish:async()=>{k&&(k.scale(o,o),await w(k,"card-border",(async e=>Mr(k,`finish/finish-${e}-card-border.png`,0,0))),k.resetTransform())}};return Y},po=async(e,t,a,r,o,n,l,i)=>{const{isSpeedSkill:s,format:c,cloneNode:d,frame:u,furiganaHelper:m,globalScale:b}=i,p=r*b,f=o*b,h=n*b,g=null===d||void 0===d?void 0:d.getContext("2d");if(t&&g&&a){var v,y,x;const{embossPitch:r,embossYaw:o,fillStyle:n,font:i,gradientAngle:j,gradientColor:O,hasEmboss:w,hasGradient:S,hasOutline:k,hasShadow:C,headTextFillStyle:T,lineColor:N,lineOffsetX:L,lineOffsetY:R,lineWidth:D,shadowBlur:E,shadowColor:B,shadowOffsetX:I,shadowOffsetY:A,pattern:z}={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none",...l},{patternImage:M,blendMode:W}=null!==(v=F[null!==z&&void 0!==z?z:""])&&void 0!==v?v:{},P=k;t.textAlign="left";let H=()=>{};k&&(H=Ar({ctx:t,lineWidth:D,lineColor:N,globalScale:b,useDefault:!1}));const U=Sa({...(null!==(y=Q[i])&&void 0!==y?y:Q.Default).fontData,headTextFillStyle:T},b),Y=fa({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),K={fontLevel:0,fontData:U,currentFont:Y},G=Qr(a,c,{multiline:!1,furiganaHelper:m,dictionaryType:"rubyFormName"}),V="ocg"===c?[G]:G.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),X=fa({defaultFamily:U.font,defaultSize:U.fontList[0].fontSize,defaultWeight:U.weight}),_=X.getFont(),q=X.setSize((e=>e*U.symbolFontRatio)).setStyle("small-caps").setFamily(U.symbolFont).getFont();let J=0,Z=0;V.forEach(((e,a)=>{t.font=a%2===0?_:q;const r=t.measureText(e.replaceAll(Ce,""));J=Math.max(J,r.actualBoundingBoxAscent),Z=Math.max(Z,r.actualBoundingBoxDescent)}),0),t.font=_;let ee=0;const te=pa((e=>{const{currentLineCount:a,currentLineList:r}=qr({ctx:t,median:e,paragraphList:[G],format:c,textData:K,width:h,globalScale:b});return!(a>1)&&(ee=r[0].actualLineWidth,!0)}))/1e3,ae=1;t.scale(te,ae);const re=wa($,b),oe=null!==(x=U.fontList[0].offsetY)&&void 0!==x?x:re.offsetY,ne=Ur(G),le=ee>0&&S?((e,t,a,r,o,n,l,i)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=l+i,m=r+o/2,b=n+(i-l)/2;let p=o,f=u;"1"!==c&&"3"!==c||(p=u,f=o);const h=Math.sqrt(p**2/4+f**2/4);if(h>0){const t=90-(180*Math.asin(p/2/h)/Math.PI-d),r=Math.sin(t/180*Math.PI)*h,o=Math.sin(d/180*Math.PI)*r,n=Math.cos(d/180*Math.PI)*r;let l=o,i=n;"1"===c&&(l=n,i=-o),"2"===c&&(l=-o,i=-n),"3"===c&&(l=-n,i=o);const s=m+l,u=b-i,f=m-l,g=b+i,v=e.createLinearGradient(s,u,f,g);return a.forEach((e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)})),v}})(t,j,va(O),p,ee,f,J,Z):void 0;if(t.fillStyle=null!==le&&void 0!==le?le:n,Zr({ctx:t,tokenList:ne,xRatio:te,yRatio:ae,trueEdge:p,trueBaseline:f,textData:K,format:c,globalScale:b,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o-(s?oe:0))}}),M&&d&&(t.setTransform(1,0,0,1,0,0),g.scale(b,b),await Mr(g,`frame/frame-${u}.png`,0,0),await Mr(g,`background/background-name-${u}.png`,0,0),g.globalCompositeOperation=W,g.resetTransform(),await Wr(g,`finish-name/${M}.png`,p,f-J,h,J+Z),t.globalCompositeOperation="source-in",t.drawImage(d,0,0),t.scale(te,ae),t.globalCompositeOperation="source-over",Zr({ctx:t,tokenList:ne,xRatio:te,yRatio:ae,trueEdge:p,trueBaseline:f,textData:K,format:c,globalScale:b,textDrawer:()=>{}})),w){const a=Tt({inputCanvas:e,lightPitch:r,lightYaw:o,minIntensity:-.9,maxIntensity:.9});t.putImageData(a,0,0)}let ie=()=>{};C&&(ie=Ar({ctx:t,x:I,y:A,shadowColor:B,blur:E,globalScale:b,useDefault:!1}),t.globalCompositeOperation="destination-over",Zr({ctx:t,tokenList:ne,xRatio:te,yRatio:ae,trueEdge:p,trueBaseline:f,textData:K,format:c,globalScale:b,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o-(s?oe:0))}}),t.globalCompositeOperation="source-over"),P&&(t.globalCompositeOperation="destination-over",Zr({ctx:t,tokenList:ne,xRatio:te,yRatio:ae,trueEdge:p,trueBaseline:f,textData:K,format:c,globalScale:b,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.lineJoin="round",t.strokeText(a,r+L,o+R-(s?oe:0))}})),t.globalCompositeOperation="source-over",t.setTransform(1,0,0,1,0,0);const se={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,hasEmboss:!1,preset:"commonB",pattern:"none"};t.fillStyle=se.fillStyle,ie(),H(),t.lineJoin="miter",t.globalCompositeOperation="source-over"}},fo={small:0,medium:1,large:2},ho=e=>{var t,a;let{ctx:r,value:o,format:n,metricMethod:l,size:i,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:b}=ja(null!==(t=null===(a=R[n])||void 0===a?void 0:a[i])&&void 0!==t?t:R.tcg.medium,c),p=Sa({tcg:ae,ocg:re}[n],c),f={...p,metricMethod:null!==l&&void 0!==l?l:p.metricMethod},{font:h}=f,g=fo[i],v=f.fontList[g],y=fa({defaultFamily:h,defaultSize:`${v.fontSize}px`}),x={fontLevel:g,fontData:f,currentFont:y};let j=0;r.font=y.getFont(),r.textAlign="left";const O=Qr(o,n,{multiline:!1,furiganaHelper:s}),w=pa((e=>{const{currentLineCount:t,currentLineList:a}=qr({ctx:r,median:e,paragraphList:[O],format:n,textData:x,width:b,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)}))/1e3;r.scale(w,1);const S=Zr({ctx:r,tokenList:Ur(O),xRatio:w,yRatio:1,trueEdge:"left"===d?u:u-j*w,trueBaseline:m,textData:x,format:n,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),{...S,xRatio:w}},go=(e,t,a,r,o)=>{const n=a*o,l=r*o;if(e&&t){const a=60.5*o;e.font=`${a}px MatrixBoldSmallCaps`,e.textAlign="left";const r=.65,i=`${t}`.split("");let s=0;i.forEach((t=>{s+=e.measureText(t).width*("1"===t?r:1)}));let c=n-s/2;i.forEach((t=>{e.fillText(t,"1"===t?c-3*o:c,l+a),c+=e.measureText(t).width*("1"===t?r:1)}))}},vo=(e,t,a,r,o)=>{if(!e)return;const n=a*o,l=r*o;e.scale(1,.98),e.font=`bold ${35.73*o}px Matrix-Bold`;const i=Nr(e,t,.075,n,l/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*o}px Matrix-Bold`,Nr(e,"/",.15,i+5*o,l/1.01),e.setTransform(1,0,0,1,0,0)},yo=(e,t,a,r,o)=>{if(!e||null==t)return;const n=a*o,l=r*o,i=73.97*o;if("\u221e"===t)e.textAlign="right",e.font=`bold ${37*o}px matrix`,e.fillText(t,n+i,l);else if("?"===t)e.textAlign="right",e.font=`bold ${34*o}px matrix`,e.fillText(t,n+i,l);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce(((t,r,n)=>{e.font=37*o+"px MatrixBoldSmallCaps";let l=t+e.measureText(r).width;return n<a.length-1&&(e.font=37*o+"px matrix",l+=e.measureText("?").width),l}),0);if(r>0){const t=Math.min(i/r,1);e.scale(t,1),a.reduce(((r,n,i,s)=>{const c=s[s.length-1-i];let d=r;return e.font=37*o+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,l),i<a.length-1&&(e.font=`bold ${37*o}px matrix`,d-=e.measureText("?").width*t,e.fillText("?",d/t,l)),d}),n+i),e.scale(1/t,1)}}},{height:xo,width:jo}=s,Oo=(e,t,a)=>{const{card:o}=jr(),{exportCanvasRef:n,artworkCanvasRef:l,backgroundCanvasRef:i,frameCanvasRef:s,creatorCanvasRef:b,effectCanvasRef:p,nameCanvasRef:h,passwordCanvasRef:v,pendulumEffectCanvasRef:x,pendulumScaleCanvasRef:j,setIdCanvasRef:O,statCanvasRef:w,stickerCanvasRef:k,cardIconCanvasRef:F,typeCanvasRef:C,finishCanvasRef:T,lightboxRef:N,previewCanvasRef:R}=t,{format:B,hasBackground:I,backgroundType:A,frame:z,foil:P,finish:H,artFinish:U,opacity:Y,name:K,nameStyle:G,nameStyleType:V,effectTextStyle:X,pendulumTextStyle:_,typeTextStyle:Z,statTextStyle:Q,otherTextStyle:ae,effect:re,effectStyle:oe,typeAbility:ne,isPendulum:le,pendulumFrame:ie,pendulumEffect:se,pendulumScaleBlue:ce,pendulumScaleRed:de,pendulumStyle:ue,atk:me,def:be,linkMap:pe,attribute:fe,cardIcon:he,subFamily:ge,star:ve,starAlignment:ye,setId:xe,password:je,creator:Oe,sticker:we,isLegacyCard:Se,isFirstEdition:ke,isDuelTerminalCard:Fe,isSpeedCard:Ce,isLimitedEdition:Te,furiganaHelper:Ne}=o,Le=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),Re="auto"===ie?le?"spell":z:ie,De=null===oe||void 0===oe?void 0:oe.condenseTolerant,Ee=(e=>"normal"===e.frame&&Rt(e))(o),Be=Nt(o),Ie=(e=>!0===e.isLink)(o),Ae=Rt(o),ze=Lt(o),{body:Me=100,boundless:We}=Y,Pe=!!(Me<50||We),He=["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(Re),$e=Et(z),{levelStyle:Ue,resolvedEffectTextStyle:Ye,resolvedPendulumEffectTextStyle:Ke,resolvedStatTextStyle:Ge,resolvedTypeTextStyle:Ve,resolvedOtherEffectTextStyle:Xe}=Object(r.useMemo)((()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:o,otherTextStyle:n,statTextStyle:l,typeTextStyle:i}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,b]=r,p=d?{...m?{y:0,blur:4,shadowColor:b}:{},color:u}:{},[f,h,g,v]=o,y=f?{...g?{y:0,blur:4,shadowColor:v}:{},color:h}:{},[x,j,O,w]=i,S=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[k,F,C,T]=l,N=k?{...C?{y:1,blur:1,shadowColor:T}:{},color:F}:{},[L,R,D,E]=n;return{levelStyle:c,resolvedEffectTextStyle:p,resolvedOtherEffectTextStyle:L?{...D?{y:0,blur:0,shadowColor:E}:{},color:R}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:N,resolvedTypeTextStyle:S}})({lightFooter:He,lightHeader:$e,requireShadow:Pe,effectTextStyle:X,pendulumTextStyle:_,otherTextStyle:ae,statTextStyle:Q,typeTextStyle:Z})),[He,$e,Pe,X,_,ae,Q,Z]),_e=ge.toUpperCase(),qe=ne.map((e=>e.trim())).join("ocg"===B?"\uff0f":"\u200a/\u200a"),Je="auto"!==ie||le?!!(me||be||Ie&&pe.length):Ae,Ze="auto"===he?Ae||ze:"st"!==he||Ie,{isInitializing:Qe,imageChangeCount:et,pendulumSize:tt="medium",language:at,globalScale:rt}=a,ot=e&&!1===Qe,nt=Object(r.useMemo)((()=>Dr(H,M)),[H]),lt=Object(r.useMemo)((()=>Dr([U],W)),[U]);Object(r.useEffect)((()=>{ot&&(Le.current.frame.rerun+=1,Le.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=l.current,r=i.current;if(!Rr(t)||!s.current)return;const o={...d(),...Y},{artBorder:n,body:m,boundless:b,baseFill:p}=o,f=(e,a,r,o)=>new Promise((n=>{setTimeout((()=>{t.fillStyle=I?p:c,t.fillRect(e,a,r,o),n(!0)}),0)})),h=m>0||n;await f(0,0,rt*jo,rt*xo);const{drawAttribute:g,drawBackground:v,drawCardArt:y,drawFrame:x,drawLinkArrowMap:j,drawPendulumScaleIcon:O,drawStar:w,drawNameBackground:S,drawEffectBackground:k,drawFrameBorder:F,drawNameBorder:C,drawArtBorder:T,drawPendulumBorder:N,drawBorderPendulumFinish:L,drawEffectBorder:R,drawCardBorder:D,drawStatBorder:E,drawAttributeFinish:M,drawArtBorderFoil:W,drawEffectBorderFoil:H,drawLinkMapFoil:$,drawNameFinish:U,drawArtFinish:K,drawArtOverlayFinish:G,drawArtBorderFinish:V,drawPendulumArtBorderFinish:X,drawFrameFinish:_,drawFrameBackgroundFinish:q,drawOverlayFinish:J,drawCardBorderFinish:Z,calculateCardArtRedrawCoordination:Q}=bo({canvas:s.current,artworkCanvas:a,backgroundCanvas:r,globalScale:rt,format:B,frame:z,bottomFrame:Re,hasBackground:I,backgroundType:A,attribute:fe,cardIcon:he,star:ve,foil:P,pendulumSize:tt,opacity:o,isLink:Ie,isSpeedSkill:ze,isXyz:Be,isPendulum:le,loopFinish:nt,loopArtFinish:lt});if(r&&t&&v(),a&&t&&!b&&y(),await x(),await D(),await Z(),le||(b||(await S(),await k(),await R(),await H()),await T(),await W(),await V()),le&&!Ie&&!b){if(a&&t&&a.height>0){const{width:e,height:r}=a,{sourceOffsetX:o,sourceOffsetY:n,offsetHeight:l,destinationX:i,destinationY:s,destinationWidth:c,destinationHeight:d}=Q(a);await f(rt*i,rt*s,rt*c,rt*d),v("pendulum"),t.drawImage(a,o,n,e-2*o,r-l,rt*i,rt*s,rt*c,rt*d)}await S(),await k(!0)}if(await K(),await G(),!le||Ie||b||(await O(),await N(h,"normal"),await N(h,P),await X(),h&&await L()),b||(await _(),await U()),h&&await q(),b){if(Ie)await V();else if(le){const e=u.fullCard.ratio/u.extendedPendulum.ratio;if(a&&t&&a.height>0){const{destinationX:t,destinationY:r,destinationWidth:o,destinationHeight:n}=Q(a,{...d(),...Y,body:100,boundless:!1},e);await f(rt*t,rt*r,rt*o,rt*n),v("pendulum")}h&&(await N(h,"normal"),await N(h,P)),await X()}await S(),await U(),await C(),a&&t&&y(),await G(),le&&!Ie?(await k(!0),await O(),await N(!1,"normal"),await N(!1,P),await L()):(await k(),await R(),await H()),await _()}if(Je&&await E({color:"#000000",...Ge}),!le&&Ie){await j(pe),await $(!1);const e=Ar({ctx:t,...Ge,globalScale:rt});Je&&await(async(e,t,a,r)=>{const o=e.getContext("2d");if(!o||!Array.isArray(t))return;await Pr(e,"link/link-text.png",...Oa([600,1080,120,30],r),r,a);const n=Ar({ctx:o,...a,globalScale:r});o.textAlign="right",o.scale(1.2,1),o.font=`bold ${26.55*r}px RoGSanSrfStd-Bd`,o.fillText(`${t.length}`,622.75*r,1105*r),o.setTransform(1,0,0,1,0,0),o.textAlign="left",n()})(s.current,null!==pe&&void 0!==pe?pe:[],Ge,rt),e()}await g(),await M(),Ie||ze||await w({style:Ue,starAlignment:ye}),b||await C(),await F(),await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:o,isLink:n,isDuelTerminalCard:l,isSpeedCard:i,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(l){const e=o?[255,1072,175,35]:n?[151,848,216,24]:[80,843,270,30];await Pr(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...Oa(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(i){const e=o?[255,1084,176.4,25]:n?[151,854,215.6,22]:[80,850,245,25];await Pr(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...Oa(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:rt,type:He&&!le?"white":"black",bordered:(m<50||b)&&!le,isDuelTerminalCard:Fe,isSpeedCard:Ce,isLink:Ie,isPendulum:le,textStyle:Xe}),await J()})}),[ot,rt,l,i,s,z,B,I,A,fe,Re,P,ve,ye,he,Fe,Ie,le,Ce,ze,Be,He,pe,Ge,Xe,lt,nt,Y,tt,Je,Ue,et]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");Rr(t)&&le&&(go(t,null!==ce&&void 0!==ce?ce:"0",84.4,790,rt),go(t,null!==de&&void 0!==de?de:"0",728,790,rt))}),[ot,rt,le,ce,de,j]),Object(r.useEffect)((()=>{ot&&(Le.current.name.rerun+=1,Le.current.name.instructor=async()=>{var e,t;const a=null===(e=h.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=h.current)||void 0===t?void 0:t.cloneNode();Rr(a)&&r&&await po(h.current,a,K,"tcg"===B?60:68,116,fe===f?"tcg"===B?688:674:"tcg"===B?608:598,(e=>{var t,a;let{format:r,frame:o,nameStyle:n,nameStyleType:l,foil:i}=e;if("custom"===l)return n;const s=Lt({frame:o}),c=Et(o);let d="Default";"ocg"===r&&(d="OCG"),s&&"tcg"===r&&(d="Arial");let u={fillStyle:c?"#ffffff":"#000000",headTextFillStyle:c?"#ffffff":"#000000"};if("predefined"===l){var m,b;const e={...S[null!==(m=n.preset)&&void 0!==m?m:"commonB"].value};return S[null!==(b=e.preset)&&void 0!==b?b:"commonB"].value.font||(e.font=d),{...u,...e}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const f="normal"!==i&&null!==(t=null===(a=S[i])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===o?S.animeGold.value:{};return{font:d,...u,...p,...f,...h}})({format:B,frame:z,nameStyle:G,nameStyleType:V,foil:P}),{isSpeedSkill:ze,format:B,cloneNode:r,frame:z,furiganaHelper:Ne,globalScale:rt})})}),[ot,rt,fe,P,B,z,Ne,ze,K,h,G,V]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");if(!Rr(t)||!Je)return;const a=Ar({ctx:t,...Ge,globalScale:rt});vo(t,"ATK",432.1,1106.494,rt),yo(t,me,508.824,1106.494,rt),Ie||(vo(t,"DEF",600.85,1106.494,rt),yo(t,be,673.865,1106.494,rt)),a()}),[ot,rt,me,be,Ie,Ae,Ge,w,Je]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");Rr(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:o,isLink:n,withShadow:l,format:i,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${l?"bold":""} ${22*r}px stone-serif-regular`,"ocg"===i&&(d=.145,u=-1,m=-3);const b=Ar({ctx:e,color:s&&!o?"#ffffff":"#000000",shadowColor:l?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:l&&!o?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});o?Nr(e,t,d,(66.65+m)*r,(1105.01+u)*r):n?Lr(e,t,d,(666.56+m)*r,(872.94+u)*r):Lr(e,t,d,(728.78+m)*r,(871.5+u)*r),b()})(t,xe,{globalScale:rt,isLink:Ie,isPendulum:le,withShadow:Pe&&!le,format:B,lightFooter:He,textStyle:Xe})}),[ot,rt,B,Ie,le,He,O,xe,ze,Re,Pe,Xe]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=v.current)||void 0===e?void 0:e.getContext("2d");if(!Rr(t))return;const{rightEdge:a,isNumberPassword:r}=(e=>{var t,a;let{ctx:r,globalScale:o,value:n,format:l,alignment:i,baselineOffset:s=0,lightFooter:c,hasShadow:d,textStyle:u}=e;const m=/^[0-9]*$/.test(n);if(!Rr(r))return{rightEdge:0,isNumberPassword:m};const b=Ar({ctx:r,color:c?"#ffffff":"#000000",shadowColor:d?c?"#000000":"#ffffff":"#000000",x:0,y:0,blur:d?3:0,globalScale:o,...u,...null!==u&&void 0!==u&&u.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:p,trueBaseline:f,trueWidth:h}=ja(null!==(t=E[l])&&void 0!==t?t:E.tcg,o),g=Sa(te[l],o),{font:v}=g,y=Qr(n,l,{multiline:!1,furiganaHelper:!1});let x={fontLevel:m?0:1,fontData:g,currentFont:fa()},j=0,O=1e3,w=g.fontList[0];for(let C=0;C<g.fontList.length;C++){w=g.fontList[C];const e=fa({defaultFamily:v,defaultSize:`${w.fontSize}px`,defaultWeight:d?"bold":""});let t={fontLevel:C,fontData:g,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",O=pa((e=>{const{currentLineCount:n,currentLineList:i}=qr({ctx:r,median:e,paragraphList:[y],format:l,textData:t,width:h,globalScale:o});return!(n>1)&&(a=i[0].actualLineWidth,!0)})),j=a,x=t,O>=1e3)break}const S=O/1e3;r.scale(S,1);const k=wa($,o),F=Zr({ctx:r,tokenList:Ur(y),xRatio:S,yRatio:1,trueEdge:"left"===i?p:p-j*S,trueBaseline:f+(null!==(a=w.offsetY)&&void 0!==a?a:k.offsetY)+s,textData:x,format:l,globalScale:o,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),b(),{rightEdge:F.tokenEdge,isNumberPassword:m}})({ctx:t,globalScale:rt,value:je,lightFooter:He,alignment:"left",format:B,hasShadow:"zarc"===Re||Pe,textStyle:Xe});if(ke){const e=!le||!!r,o=!Se&&r||le?Math.max(a/rt+14.813,142.2)-("ocg"===B?7:0):Ie?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{globalScale:1,stroke:!1};if(!e)return;const{stroke:n=!1,textStyle:l,globalScale:i}=null!==o&&void 0!==o?o:{},s=t*i,c=a*i,d=r*i,u=Ar({ctx:e,globalScale:i,...l,...null!==l&&void 0!==l&&l.shadowColor?{x:0,y:0,blur:3}:{}}),m=7.4*i;e.font=`bold ${23.7*i}px palatino-linotype-bold`;let b=s;e.fillText("1",b,c+d),n&&e.strokeText("1",b,c),b+=e.measureText("1").width-2*i,e.font=`bold ${17.78*i}px palatino-linotype-bold`,e.fillText("st",b,c-m+d),n&&e.strokeText("st",b,c-m),b+=e.measureText("st").width,e.font=`bold ${22.22*i}px palatino-linotype-bold`,e.fillText(" Edition",b,c+d),n&&e.strokeText(" Edition",b,c),u()}(t,o,!Se&&r||le?1150.93:871,!Se&&r||le?ze?-2:-1:0,{globalScale:rt,textStyle:{color:He?"#ffffff":"#000000",...Xe}})}}),[ot,rt,ke,je,v,He,B,Pe,Ie,ze,le,Se,Re,Xe]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=b.current)||void 0===e?void 0:e.getContext("2d");Le.current.creator.rerun+=1,Le.current.creator.instructor=async()=>{var e;if(!Rr(t))return;const a={...d(),...Y},{body:r,boundless:o}=a,n=(e=>{var t,a;let{ctx:r,value:o,format:n,alignment:l,baselineOffset:i=0,lightFooter:s,hasShadow:c,textStyle:d,globalScale:u}=e;if(!Rr(r))return;const m=Ar({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,globalScale:u,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:b,trueBaseline:p,trueWidth:f}=ja(null!==(t=D[n])&&void 0!==t?t:D.tcg,u),h=Sa(ee[n],u),{font:g}=h,v=Qr(o,n,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:h,currentFont:fa()},x=0,j=1e3,O=h.fontList[0];for(let F=0;F<h.fontList.length;F++){O=h.fontList[F];const e=fa({defaultFamily:g,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:F,fontData:h,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",j=pa((e=>{const{currentLineCount:o,currentLineList:l}=qr({ctx:r,median:e,paragraphList:[v],format:n,textData:t,globalScale:u,width:f});return!(o>1)&&(a=l[0].actualLineWidth,!0)})),x=a,y=t,j>=1e3)break}const w=j/1e3;r.scale(w,1);const S=wa($,u),k=Zr({ctx:r,tokenList:Ur(v),xRatio:w,yRatio:1,trueEdge:"left"===l?b:b-x*w,trueBaseline:p+(null!==(a=O.offsetY)&&void 0!==a?a:S.offsetY)+i*u,textData:y,format:n,globalScale:u,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),m(),{leftEdge:"left"===l?b:b-x*w,...k}})({ctx:null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),format:B,value:Oe,alignment:"right",baselineOffset:ze?-2:0,hasShadow:Pe,lightFooter:He,textStyle:Xe,globalScale:rt}),l=("tcg"===B?390:350)*rt,i=("tcg"===B?30:40)*rt;var s;Te&&b.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:o,isLink:n,isLegacyCard:l,widthOffset:i,bordered:s,textStyle:c}=e;const d=!l||o?[145,1123,240-i/r,37]:n?[151,846,216,36]:[80,843,240,40];await Pr(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Oa(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:b.current,ctx:t,globalScale:rt,type:He&&!le?"white":"black",bordered:(r<50||o)&&!le,isLink:Ie,isPendulum:le,widthOffset:(null!==(s=null===n||void 0===n?void 0:n.leftEdge)&&void 0!==s?s:l)<l?i:0,isLegacyCard:Se,textStyle:Xe})}}),[ot,rt,Oe,b,p,B,Se,Te,Ie,le,ze,He,Y,Pe,Xe]),Object(r.useEffect)((()=>{ot&&(Le.current.sticker.rerun+=1,Le.current.sticker.instructor=async()=>{var e;return await(async e=>{let{ctx:t,sticker:a,globalScale:r}=e;if(Rr(t)){if(a===y)return Promise.resolve();t.scale(r,r),await Mr(t,`sticker/sticker-${a.toLowerCase()}.png`,739.1438,1110.938),t.resetTransform()}})({ctx:null===(e=k.current)||void 0===e?void 0:e.getContext("2d"),sticker:we,globalScale:rt})})}),[ot,rt,we,k]),Object(r.useEffect)((()=>{var e,t;if(!ot)return;const a=null===(e=p.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=C.current)||void 0===t?void 0:t.getContext("2d");Le.current.typeAbility.rerun+=1,Le.current.typeAbility.instructor=async()=>{if(!Rr(a)||!Rr(r))return;const{condenseTolerant:e,upSize:t,fontStyle:o}=null!==oe&&void 0!==oe?oe:{},n=X[0],l=n?t:0,i=n?Ee&&"auto"===o||"tcg"===B&&"italic"===o:Ee,s=to({ctx:a,content:re,isNormal:Ee,useItalic:i,condenseTolerant:e,format:B,furiganaHelper:Ne,...eo({format:B,statInEffect:Je,typeInEffect:Ze,useItalic:i}),textStyle:Ye,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-l,globalScale:rt}});await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:o,format:n,frame:l,size:i,isMonster:s,textStyle:c,furiganaHelper:d}=e;if(!Rr(t))return;const u=r.length>0,m=o!==g&&"large"===i,b=r+(m?"\u29be":""),p=u?"tcg"===n?"large"===i?`[\u200a\u200a${b}\u200a\u200a]`:`[${b}]`:`\u3010${b}\u3011`:"";if(!u)return;const f={color:Bt(l)&&!Lt({frame:l})&&"large"===i?"#ffffff":"#000000",...c},h=Ar({ctx:t,...f,globalScale:a}),{iconPositionList:v,xRatio:y}=ho({ctx:t,format:n,size:i,value:p,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});h();let x="ocg"===n?-4:0,j="ocg"===n?-3:0;if(m){const{edge:e,baseline:r}=v[0];await Wr(t,`subfamily/subfamily-${o.toLowerCase()}.png`,(t=>e+(.175*t.naturalWidth*y+j)*a),(e=>r-.8*e.naturalWidth*a+x*a),(e=>a*e.naturalWidth),(e=>a*e.naturalWidth))}})({ctx:r,globalScale:rt,format:B,frame:z,furiganaHelper:Ne,isMonster:Ae,textStyle:Ve,size:Ze?s<=3?"medium":"small":"large",subFamily:_e,typeAbility:qe})}}),[ot,rt,Ze,Je,oe,re,X,p,B,z,Ne,Ae,Ee,Ve,Ye,_e,qe,C]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");if(Rr(t)&&le){const{upSize:e,fontStyle:a}=null!==ue&&void 0!==ue?ue:{},r=_[0],o=!!r&&("tcg"===B&&"italic"===a);to({ctx:t,content:se,isNormal:!1,useItalic:o,fontData:(o?q:J)[B],textStyle:Ke,sizeList:L,condenseTolerant:De,format:B,furiganaHelper:Ne,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-(r?e:0),globalScale:rt}})}}),[ot,rt,De,B,le,x,se,ue,_,Ne,Ke]),Object(r.useEffect)((()=>{var e;if(!ot)return;const t=null===(e=T.current)||void 0===e?void 0:e.getContext("2d");Le.current.overlay.rerun+=1,Le.current.overlay.instructor=async()=>{Rr(t)&&(t.scale(rt,rt),await nt(t,"total-overlay",(e=>Mr(t,`finish/finish-${e}-total-overlay.png`,0,0))),t.resetTransform())}}),[ot,rt,T,nt,K]);const it=Object(r.useRef)({}),st=Object(r.useCallback)((async e=>{const{isPendulum:t=!1,opacity:a}=e,r=n.current,o=null===r||void 0===r?void 0:r.getContext("2d"),i=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((r=>{setTimeout((()=>{if(e.current&&t)try{e.current.toBlob((e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r(!0)},e.onerror=()=>{URL.revokeObjectURL(a),r(!1)}}else r(!1)}else r(!1)}))}catch(a){t.drawImage(e.current,0,0),console.error(a),r(!1)}else r(!1)}),25*a)}))};if(r&&o){var c,d,u;Rr(o),await Promise.all(Object.values(Le.current).sort(((e,t)=>e.order-t.order)).map((e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&it.current[r]!==a||!it.current[r]?(it.current[r]=a,t()):Promise.resolve()}))).catch((e=>{console.error(e);const t="fail-to-draw-notification";Da.a.close(t),Da.a.error({key:t,message:at["error.draw.error.message"],description:at["error.draw.error.description"]})}));const e=l.current;if(e&&o){const{artX:r,artY:n,artWidth:l}=m(t,a),{width:i,height:s}=e;s>0&&o.drawImage(e,0,0,i,s,r,n,l,l/(i/s))}await i(s,o,0),await i(h,o,0),await i(F,o,0),await i(j,o,0),await i(x,o,0),await i(C,o,0),await i(p,o,0),await i(w,o,0),await i(O,o,0),await i(v,o,0),await i(b,o,0),await i(k,o,0),await i(T,o,0),null===(c=N.current)||void 0===c||c.draw(r),null===(d=R.current)||void 0===d||null===(u=d.getContext("2d"))||void 0===u||u.drawImage(r,0,0,r.width,r.height,0,0,jo,xo)}}),[at,l,F,b,n,p,T,N,h,v,x,j,O,s,w,k,C,R]);return{drawingPipeline:Le,onExport:st}};var wo=a(29);Object(Pa.create)((e=>{const{condenseReminder:t}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("notification"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{condenseReminder:"boolean"===typeof t&&t},updateNotification:(t,a)=>{e((e=>{const r={...e.memory,[t]:a};return localStorage.setItem("notification",JSON.stringify(r)),{memory:r}}))},updateNotificationMemory:t=>{e((e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem("notification",JSON.stringify(a)),{memory:a}}))}}}));var So=a(180),ko=a.n(So);var Fo=a(270),Co=a.n(Fo);const To=Object(Ba.b)(Ra.a)`
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
`,No=e=>{let{language:t}=e;const[a,o]=Object(r.useState)(!1),[n,l]=Object(r.useState)(!1),[i,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(To,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||n},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>o(!1),onOk:async()=>{try{l(!0);const e=await Promise.all(c.map((e=>{let{file:t,name:a}=e;return new Promise(((e,r)=>{const o=new FileReader;o.onload=t=>{let{target:o}=t;if(!o)return void r("Not a valid target");const{result:n}=o;if("string"!==typeof n)return void r("Not a valid result");let l=JSON.parse(n);Yt(l)&&(l=Pt(l));const s=Kt(l);let c=null;if(c=i?s?la(yr(l).card).result:l:s?l:Pt(yr(l).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},o.readAsText(t)}))}))),t=new Co.a;e.forEach((e=>{let{blob:a,name:r}=e;t.file(r,a)}));const a=await t.generateAsync({type:"blob"});Jt("convert-result.zip",a,"application/zip"),l(!1),o(!1)}catch(e){console.error(e),Da.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),l(!1)}},children:[Object(p.jsxs)("div",{className:"controller",children:[Object(p.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:La("toggle-button",i?"reverse":""),onClick:()=>s((e=>!e)),children:Object(p.jsx)(Aa.a,{})})}),Object(p.jsx)("label",{children:"Yugioh Carder"})]}),Object(p.jsxs)("div",{className:"file-panel",children:[Object(p.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(p.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],n&&Object(p.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(p.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(p.jsx)("div",{className:"file-list",children:c.map((e=>{let{name:t}=e;return Object(p.jsxs)("div",{className:"file-entry",children:[Object(p.jsx)("div",{children:t}),Object(p.jsx)("div",{className:"file-action",children:Object(p.jsx)(za.a,{disabled:n,onClick:()=>d((e=>e.filter((e=>e.name!==t))))})})]},t)}))})]})]}),Object(p.jsx)(Ea.a,{overlay:t["converter.header.label"],children:Object(p.jsx)(Ia,{className:"batch-converter",onClick:()=>o(!0),children:Object(p.jsx)(Ma.a,{})})})]})};var Lo=a(73),Ro=a(562),Do=a(586),Eo=a(555),Bo=a(218);class Io extends o.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){Bo.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var Ao=a(184);const zo="controls-wrapper",Mo=Ba.b.div`
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
`,Wo=e=>{let{children:t,...a}=e;return Object(p.jsxs)(Mo,{className:"angle-picker-container",children:[t,Object(p.jsx)(Ao.AnglePicker,{...a})]})};var Po=a(577),Ho=a(578),$o=a(544),Uo=a(575);const Yo=Object(Ba.b)(Uo.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Ko=e=>{let{overlayClassName:t,iconProps:a,...r}=e;const{className:o,...n}=null!==a&&void 0!==a?a:{};return Object(p.jsx)($o.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...r,children:Object(p.jsx)(Yo,{className:["explanation-icon",null!==o&&void 0!==o?o:""].join(" "),...n})})};var Go=a(576),Vo=a(567);const Xo=Ba.b.span`
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
`,_o=e=>{let{Icon:t,children:a,onClick:r,iconProps:o,tooltipProps:n,containerProps:l}=e;const{className:i,onClick:s,onKeyDown:c,...d}=null!==l&&void 0!==l?l:{};return Object(p.jsx)(Ea.a,{title:null,...n,children:Object(p.jsx)(Xo,{tabIndex:0,...d,onClick:e=>{null===r||void 0===r||r(),null===s||void 0===s||s(e)},onKeyDown:e=>{null===c||void 0===c||c(e),"Enter"===e.key&&(null===r||void 0===r||r())},className:["icon-button",null!==i&&void 0!==i?i:""].join(" "),children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(t,{...o}),a]})})})},qo=Ba.b.div`
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
`,Jo=Ba.a`
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
`,Zo=Ba.b.div`
    ${Jo}
`,Qo=(e,t)=>{let{onChange:a,value:o,optionList:n,children:l,suffix:i,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),b=n.length;return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}}))),Object(p.jsxs)(Zo,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[l&&Object(p.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:l}),Object(p.jsx)("div",{ref:m,className:"radio-train-input-group",...xa({setFocus:u,optionLength:b,onTrigger:()=>{const e=n[d];e&&a(e.value)}}),children:n.map(((e,t)=>{let{value:r,props:n,label:l,tooltipProps:i}=e;const{className:s}=null!==n&&void 0!==n?n:{},u=c?r===o:`${r}`===`${o}`;return Object(p.jsx)(Ea.a,{overlay:null,...i,children:Object(p.jsxs)("label",{...n,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(p.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(p.jsx)("span",{className:"ant-radio-button-inner"})}),Object(p.jsx)("span",{className:"label",children:l})]})},r)}))}),i]})},en=Object(r.forwardRef)(Qo),tn=Ba.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,an=Ba.b.div`
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
`,rn=Object(Ba.b)(an)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,on=e=>{let{content:t,children:a,...r}=e;return t?Object(p.jsx)($o.a,{content:t,...r,children:a}):Object(p.jsx)(p.Fragment,{children:a})},nn=Ba.b.button`
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
`,ln=Ba.b.div`
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
`,sn=Ba.c`
    to {
        transform: rotate(360deg);
    }
`,cn=Ba.b.div`
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
`,dn=Object(Ba.b)(qo)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":Ba.a`animation: ${sn} 12s linear infinite;`}}
        }
    }
`,un=()=>{const e=Va(),{setting:t,updateSetting:a}=Or((e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}})),{exportFormat:r,resolution:o,allowHotkey:n,reduceMotionColor:l,showCreativeOption:i,showExtraDecorativeOption:s}=t;return Object(p.jsx)(dn,{className:"setting-button",$softMode:l,children:Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(p.jsxs)(cn,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(Vo.a,{checked:l,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Vo.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Vo.a,{checked:i,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(p.jsx)("div",{children:Object(p.jsx)(Ea.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(p.jsx)(Vo.a,{checked:n,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(p.jsx)(en,{className:"resolution-list",value:`${o[0]}x${o[1]}`,optionList:ut.map((t=>{let{height:a,width:r,label:o,scale:n}=t;return{value:`${r}x${a}`,label:n>1?Object(p.jsx)($o.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(p.jsx)(rn,{children:e["setting.option.resolution.warning"]}),children:o}):o}})),onChange:e=>{const t=dt[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(p.jsx)(en,{value:r,optionList:mt,onChange:e=>{a({exportFormat:e})}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(p.jsxs)("div",{className:"button-label",children:[Object(p.jsx)(Go.a,{}),Object(p.jsx)("label",{children:e["setting.button.label"]})]})})})};var mn=a(564);const bn=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),pn=()=>{const[e,t]=Object(r.useState)([]),[a,o]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{(async()=>{o(!0);const e=await bn.getLog();o(!1),t(e)})()}),[]),0!==e.length||a?a?Object(p.jsx)("div",{children:"Loading changelog..."}):Object(p.jsx)("div",{children:e.map(((e,t)=>{let{logList:a,version:r}=e;return Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:r}),Object(p.jsx)("br",{}),Object(p.jsx)("ul",{children:a.map(((e,t)=>{let{content:a}=e;return Object(p.jsx)("li",{children:a},t)}))})]},`${r}-${t}`)}))}):Object(p.jsx)("div",{children:"No changelogs"})};a(400);const fn=()=>Object(p.jsx)("div",{className:"affiliation",children:Object(p.jsx)("div",{className:"affiliation-link",children:Object(p.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(Po.a,{})})})}),hn=Object(Ba.b)(rn)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
`,gn=Ba.b.div`
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
`,vn=()=>{var e;const{language:t,languageInfo:a,languageMetadataMap:r,changeLanguage:o}=Ga((e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:o}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:o}})),{cardList:n,isListDirty:l,toggleVisible:i,visible:s}=vr(Object(wo.useShallow)((e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:o}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:o}})));return Object(p.jsxs)("div",{className:"app-header",children:[Object(p.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(p.jsxs)("div",{className:"app-description",children:[Object(p.jsxs)("div",{className:"header-language",children:[Object(p.jsx)("h1",{children:"Yugioh Carder"}),Object(p.jsx)(mn.a.Group,{value:a.codeName,size:"small",className:"language-option",children:Object.values(r).filter((e=>{let{active:t}=e;return t})).map((e=>{let{codeName:t,name:a}=e;return Object(p.jsx)(mn.a.Button,{value:t,onChange:e=>o(e.target.value),children:a},t)}))}),Object(p.jsx)("span",{className:"bug-report",children:Object(p.jsx)("div",{id:"sentry-bug-report",children:t["contributor.bug-report.tooltip"]})}),Object(p.jsx)($o.a,{placement:"bottom",content:Object(p.jsx)(hn,{children:Object(p.jsx)(pn,{})}),children:Object(p.jsxs)("div",{className:"app-log",children:["v",null!==(e="2.1.19")?e:"unknown"]})})]}),Object(p.jsxs)("div",{className:"app-contribution",children:[Object(p.jsxs)("span",{className:"app-creator",children:[t["contributor.gui.label"],": ",Object(p.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(p.jsx)(Ko,{content:Object(p.jsxs)(rn,{className:"disclaimer",children:[Object(p.jsx)("h2",{children:t["contributor.disclaimer.label"]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:t["contributor.disclaimer.line-1"](Object(p.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(p.jsx)("li",{children:t["contributor.disclaimer.line-2"]}),Object(p.jsx)("li",{children:t["contributor.disclaimer.line-3"]}),Object(p.jsx)("li",{children:t["contributor.disclaimer.line-4"]}),Object(p.jsx)("li",{children:t["contributor.disclaimer.line-5"](Object(p.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(p.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(p.jsx)("li",{children:t["contributor.disclaimer.line-6"]})]})]})})]}),Object(p.jsx)("span",{className:"template-creator",children:t["contributor.template-maker"](Object(p.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"Grezar"})},"artist-1"),Object(p.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"9558able"})},"artist-2"),Object(p.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(p.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(p.jsx)(gn,{className:"app-setting",children:Object(p.jsx)(un,{})}),Object(p.jsx)(gn,{className:"card-manager",children:Object(p.jsx)(qo,{className:La("manager-button-label",s?"manager-active":""),onClick:()=>i(),children:Object(p.jsxs)("div",{className:"button-label",children:[Object(p.jsx)(Ho.a,{}),Object(p.jsx)("label",{children:t["manager.icon.title"]}),l&&n.length>1&&Object(p.jsx)("div",{className:"manager-notice",children:"*"})]})})})]})},yn=()=>{const e=Va();return Object(p.jsxs)(rn,{className:"disclaimer",children:[Object(p.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(p.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(p.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(p.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},xn=()=>Object(p.jsx)(Ko,{overlayClassName:"disclaimer-overlay",content:Object(p.jsx)(yn,{})});var jn=a(565),On=a(579);a(401);const wn=Ba.b.div`
    white-space: pre-line;
`,Sn=Ba.b.div`
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
`,kn=Ba.b.div`
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
`,Fn=e=>{let{caption:t,containerProps:a,alt:r,...o}=e;const{className:n}=null!==a&&void 0!==a?a:{};return Object(p.jsxs)(kn,{className:`image-with-caption ${n}`,children:[Object(p.jsx)("img",{alt:r,...o}),Object(p.jsx)("div",{className:"caption",children:t})]})},Cn=()=>{const[e,t]=Object(r.useState)(!1),a=Va();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(jn.a,{footer:null,visible:e,width:"60%",title:Object(p.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"]," ",Object(p.jsx)(Lo.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["guide.format.close"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(p.jsxs)(wn,{children:[Object(p.jsxs)("p",{children:[a["guide.format.introduction"](Object(p.jsx)(Go.a,{},"icon")),"."]}),Object(p.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(p.jsx)(tn,{children:"["},"open-tag"),Object(p.jsx)(tn,{children:"]"},"close-tag"),Object(p.jsx)(tn,{children:"Ctrl-1"},"hotkey"),Object(p.jsx)(tn,{children:"\u2318-1"},"hokey-alternative")),Object(p.jsxs)(Sn,{className:"panel-figure",children:[Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(p.jsx)(tn,{children:"{"},"open-tag"),Object(p.jsx)(tn,{children:"}"},"close-tag"),Object(p.jsx)(tn,{children:"Ctrl-2"},"hotkey"),Object(p.jsx)(tn,{children:"\u2318-2"},"hokey-alternative")),Object(p.jsxs)(Sn,{className:"panel-figure",children:[Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(p.jsx)(tn,{children:"|"},"separator"),Object(p.jsx)(tn,{children:"Ctrl-3"},"hotkey"),Object(p.jsx)(tn,{children:"\u2318-3"},"hokey-alternative")),Object(p.jsxs)(Sn,{className:"panel-figure",children:[Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(p.jsx)(tn,{children:"||"},"separator"),Object(p.jsx)(tn,{children:"Ctrl-4"},"hotkey"),Object(p.jsx)(tn,{children:"\u2318-4"},"hokey-alternative")),Object(p.jsxs)(Sn,{className:"panel-figure",children:[Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(p.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(p.jsx)(tn,{children:"{{"},"open-tag"),Object(p.jsx)(tn,{children:"}}"},"close-tag"),Object(p.jsx)(tn,{children:"Ctrl-5"},"hotkey"),Object(p.jsx)(tn,{children:"\u2318-5"},"hokey-alternative")),Object(p.jsxs)(Sn,{className:"panel-figure",children:[Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(p.jsx)(Fn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(p.jsxs)(Lo.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(p.jsx)(On.a,{})]})]})},Tn=Ba.b.div`
    display: grid;
    ${e=>{let{$withPillar:t}=e;return t?"grid-template-columns: max-content 1fr;":"grid-template-columns: 1fr;"}}
    > label {
        cursor: pointer;
        padding: 0 var(--spacing-xxs);
        text-align: center;
    }
`,Nn=Ba.b.div`
    display: inline-block;
    width: 10px;
`,Ln=e=>{let{nameKey:t,labelBackgroundColor:a,labelBackgroundColorList:r,className:o}=e;const n=Va();return Object(p.jsxs)(Tn,{className:`frame-info-block ${null!==o&&void 0!==o?o:""}`,$withPillar:!(!a&&!r),children:[r?Object(p.jsx)(Nn,{children:r.map((e=>Object(p.jsx)("div",{style:{backgroundColor:e,height:100/r.length+"%"}},e)))}):a?Object(p.jsx)(Nn,{style:{backgroundColor:a}}):null,Object(p.jsx)("label",{className:"frame-info-block-label",children:n[t]})]})};var Rn=a(219),Dn=a(580),En=a(581),Bn=a(582),In=a(583);const{height:An,width:zn}=s,Mn=Ba.b.div`
    width: ${zn}px;
    height: ${An}px;
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
`,Wn=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:o,scale:n,globalScale:l,width:i,height:s}=e;return Object(p.jsxs)("div",{className:"control-container",children:[Object(p.jsxs)("div",{className:"action-list",children:[Object(p.jsx)(nn,{disabled:n>=4,onClick:()=>{t()},children:Object(p.jsx)(Dn.a,{})}),Object(p.jsx)(nn,{disabled:n<=1/l,onClick:()=>{a()},children:Object(p.jsx)(En.a,{})}),Object(p.jsx)(nn,{onClick:()=>{r()},children:Object(p.jsx)(Bn.a,{})}),Object(p.jsx)(nn,{onClick:()=>{o(-Math.max(0,i-zn)/2,-Math.max(0,s-An)/2,1)},children:Object(p.jsx)(In.a,{})})]}),Object(p.jsxs)("div",{className:"control-info",children:[n&&Object(p.jsxs)(p.Fragment,{children:["\xd7",n<1?"1/"+Math.round(1/n*10)/10:Math.round(10*n)/10]}),"\xa0(",i," \xd7 ",s,")"]})]})},Pn=Object(r.forwardRef)(((e,t)=>{let{globalScale:a}=e;const[o,n]=Object(r.useState)(!1),[l,i]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)((()=>1/a));return Object(r.useImperativeHandle)(t,(()=>({setVisible:n,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>i((e=>e+1)),getCanvasKey:()=>l}))),Object(r.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()}),[a]),Object(p.jsx)(Ra.a,{width:`${zn+30}px`,wrapClassName:"card-lightbox-overlay",visible:o,forceRender:!0,onCancel:()=>n(!1),footer:null,children:Object(p.jsx)(Mn,{className:"card-lightbox-container",children:Object(p.jsx)(Rn.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"card-lightbox-control",children:Object(p.jsx)(Wn,{...t,scale:d,globalScale:a,width:zn*a,height:An*a})}),Object(p.jsx)(Rn.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:zn,maxHeight:An,lineHeight:0},children:Object(p.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:zn*a,height:An*a},l+.1)})]})}})})})}));var Hn=a(559);const $n=Object(Ba.b)(Hn.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,Un=Object(Ba.b)(Hn.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,Yn=e=>{let{onChange:t,...a}=e;const r=Va(),{resolution:o,updateSetting:n}=Or(Object(wo.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}})));return Object(p.jsxs)(Hn.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(p.jsx)($n,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),ut.map((e=>{let{width:a,height:l,label:i,scale:s}=e;return Object(p.jsx)(Un,{className:o[0]===a&&o[1]===l?"active-setting":"",onClick:()=>{n({resolution:[a,l],globalScale:s}),null===t||void 0===t||t([a,l],s)},children:s>1?Object(p.jsx)($o.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(p.jsx)(rn,{children:r["setting.option.resolution.warning"]}),children:i}):i},`${a}-${l}`)}))]})};var Kn=a(560),Gn=a(139),Vn=a(279),Xn=a.n(Vn),_n=a(584),qn=a(585),Jn=a(545);const Zn=Ba.b.div`
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
`,Qn=()=>Object(p.jsx)(Jn.a,{});Qn.FullView=()=>Object(p.jsx)(Zn,{className:"loading-fullview",children:Object(p.jsx)(Jn.a,{size:"large"})});a(414),a(415);const el=(e,t,a)=>{if(!t)return e;const{width:r,height:o,x:n=0,y:l=0,unit:i}=e;if("px"===i){const e=.8,o=400/300,{width:i,height:s}=t,c=s/i>=e?o:1,d=Math.min((null!==n&&void 0!==n?n:0)*c,i),u=Math.min((null!==l&&void 0!==l?l:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,i);return{unit:"%",x:d/i*100,y:u/s*100,width:m/i*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(n<0)return{...e,x:0};if(l<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==o&&void 0!==o?o:0,m=.05*(s>c?s:c),b=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,p=b/100,f=p>1?100:b,h=p>1?d/p:d,g=p>1?(100-h)/2:n<0?0:n,v=p>1||l<0?0:l;return{...e,x:g,y:v,height:f,width:h,aspect:a}},tl=Object(r.forwardRef)(((e,t)=>{let{title:a,backgroundColor:o,className:n,forceFit:l,defaultSourceType:i,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:b,ratio:f,onSourceLoaded:h=()=>{},onSourceChange:g=()=>{},onCropChange:v=()=>{},onTainted:y=()=>{},onMaxSizeExceeded:x=()=>{},onForceFitChange:j=()=>{}}=e;const O="offline"===i?"offline":"online",w=Va(),S=Object(r.useRef)(null),[k,F]=Object(r.useState)("anonymous"),[C,T]=Object(r.useState)(0),[N,L]=Object(r.useState)(O),[R,D]=Object(r.useState)(O),[E,B]=Object(r.useState)(s),[I,A]=Object(r.useState)(!1),[z,M]=Object(r.useState)(null),[W,P]=Object(r.useState)(!1),[H,$]=Object(r.useState)(c),U=Object(r.useRef)(null),[Y,K]=Object(r.useState)({current:b,completed:null}),[G,V]=Object(r.useState)("%"===b.unit),{current:X,completed:_}=Y,q=Object(r.useRef)({source:"",crop:null}),J=Object(r.useCallback)((e=>{if(A(!1),M(null),h(k),U.current=e,e.src===q.current.source&&q.current.crop){const t=Z.current;setTimeout((()=>{if(t!==Z.current||!q.current.crop)return;const a=el(q.current.crop,e,f);K({completed:a,current:a}),V(!0),q.current={source:"",crop:null}}),250)}else setTimeout((()=>{K((t=>{const a=el(t.current,e,f);return{completed:a,current:a}})),V(!0)}),250)}),[k,h,f]);Object(r.useEffect)((()=>{var e,t,a,r;const o=U.current;if(!_||!d||!o)return;const{aspect:n}=_;d.style.transform="scale(2)";const i=d.getContext("2d");if(!i||"number"!==typeof n||n<=0)return;const{naturalHeight:s,naturalWidth:c}=o,u=c/o.width,m=s/o.height,b=null!==(e=_.unit)&&void 0!==e?e:"px",p=window.devicePixelRatio;i.setTransform(p,0,0,p,0,0);let f,h=Math.floor((null!==(t=_.width)&&void 0!==t?t:0)*("px"===b?u:c/100)),g=Math.min(c,h),y=Math.floor(h/n),x=Math.min(s,y),j=Math.min(c,Math.floor((null!==(a=_.x)&&void 0!==a?a:0)*("px"===b?u:c/100))),O=Math.min(s,Math.floor((null!==(r=_.y)&&void 0!==r?r:0)*("px"===b?m:s/100)));if(i.imageSmoothingQuality="high",!(g<=0||x<=0)){if(j+g>c||O+x>s||j<0||O<0||Math.abs((h-g)/g)>.01||Math.abs((y-x)/x)>.01){"width"===(n*s>c?"width":"height")?(g=c,x=g/n,j=0,O=(s-x)/2,f={unit:"%",aspect:n,height:x/s*100,width:g/c*100,x:0,y:O/s*100}):(g=s*n,x=s,j=(c-g)/2,O=0,f={unit:"%",aspect:n,height:x/s*100,width:g/c*100,x:j/c*100,y:0})}if(l){"width"===(n*s>c?"width":"height")?(g=c,x=g/n):(g=s*n,x=s),d.width=g,d.height=x,i.drawImage(o,0,0,c,s,0,0,g,x)}else{var w,S;d.width=null!==(w=g)&&void 0!==w?w:0,d.height=null!==(S=x)&&void 0!==S?S:0,i.drawImage(o,j,O,g,x,0,0,g,x)}"offline"===N&&(null!==E&&void 0!==E?E:"").length<=0||n===_.aspect&&v(_,N,W),f&&K((e=>({...e,current:f})))}}),[_,d,C,l]),Object(r.useEffect)((()=>{P(!1),K((e=>{if(null!=U.current&&e.current){const t=el(e.current,U.current,f);return{current:t,completed:t}}return e}))}),[f]);const Z=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>I,hasImage:()=>"string"===typeof E&&E.length>0&&"offline"===N||"string"===typeof H&&H.length>0&&"online"===N,forceSource:(e,t,a)=>{const r="offline"===N?E:H;P(!1),r!==t&&(A(!0),L(e),D(e),g(e,t),"offline"===e?B(t):$(t)),F("anonymous"),V("%"===a.unit),Z.current+=1,q.current={source:t,crop:a},T((e=>e+1))}})));const Q="offline"===N&&(null!==E&&void 0!==E?E:"").length>0||"online"===N&&(null!==H&&void 0!==H?H:"").length>0,ee=d&&Q&&!I&&(null===_||void 0===_?void 0:_.width)&&(null===_||void 0===_?void 0:_.height);return Object(p.jsxs)("div",{className:`card-image-cropper ${n}`,children:[Object(p.jsxs)("div",{className:"card-image-source-input",children:[u,Object(p.jsxs)("div",{className:"card-image-source-input-container",children:[Object(p.jsxs)("div",{className:"card-image-source-input-title",children:[Object(p.jsxs)("span",{className:"field-title",children:[a," ",Object(p.jsx)(_o,{Icon:_n.a,containerProps:{className:ee?"":"disabled"},tooltipProps:{overlay:ee?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>ee&&d&&function(e,t){t&&e&&e.toBlob((e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}}),"image/png",1)}(d,_)})]}),Object(p.jsxs)(mn.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;D(t),((null!==E&&void 0!==E?E:"").length>0&&"offline"===t||(null!==H&&void 0!==H?H:"").length>0&&"online"===t)&&(L(t),"offline"===t?(F("anonymous"),g("offline",E)):g("online",H),A(!0))},value:R,children:[Object(p.jsx)(mn.a.Button,{value:"online",checked:"online"===R,children:w["image-cropper.source.online.tooltip"]}),Object(p.jsx)(Ea.a,{placement:"topLeft",title:Object(p.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(p.jsx)(mn.a.Button,{value:"offline",checked:"offline"===R,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(p.jsxs)("div",{className:["card-image-input","online"===R?"":"input-inactive"].join(" "),children:[Object(p.jsx)(Kn.a,{placeholder:w["image-cropper.placeholder"],value:H,onChange:e=>{const t=e.target.value;F("anonymous"),A(!0),L("online"),D("online"),g("online",t),$(t)},maxLength:512,allowClear:!0},"key"),Object(p.jsx)("div",{className:"online-image-tip",children:w["image-cropper.online-tip"]})]}),Object(p.jsxs)("div",{className:["card-image-input","offline"===R?"":"input-inactive"].join(" "),children:[Object(p.jsx)(Kn.a,{ref:S,type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files.length>0){const t=e.target.files[0],a=4;if(t.size<1024*a*1024){A(!0);const e=new FileReader;e.addEventListener("load",(()=>{"string"===typeof e.result&&(F("anonymous"),B(e.result),L("offline"),D("offline"),g("offline",e.result),A(!1))})),e.readAsDataURL(t)}else x(a)}else alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=S.current)||void 0===e?void 0:e.setValue("")}}),Object(p.jsx)("hr",{}),w["image-cropper.offline-warning"]]})]})]}),m,Object(p.jsxs)("div",{className:"card-cropper",onKeyDown:()=>{P(!0)},children:[I&&Object(p.jsx)(Qn.FullView,{}),Q&&!z&&Object(p.jsxs)("div",{className:"card-image-option",children:[Object(p.jsx)(Ea.a,{placement:"left",overlay:l?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(p.jsx)("div",{className:La("image-option force-fit-option",l?"option-active":""),onClick:()=>{P(!0),j(!l)},children:Object(p.jsx)(In.a,{})})}),!l&&Object(p.jsx)(Ea.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(p.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{P(!0),K((e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const o={...e.completed,x:(100-a)/2};return{current:o,completed:o}}))},children:Object(p.jsx)(qn.a,{})})}),!l&&Object(p.jsx)(Ea.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(p.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{P(!0),K((e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const o={...e.completed,y:(100-a)/2};return{current:o,completed:o}}))},children:Object(p.jsx)(qn.a,{})})})]}),(!Q||z&&void 0===k)&&Object(p.jsx)(Gn.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(p.jsx)(Xn.a,{src:"offline"===N?E:H,disabled:l,className:l?"force-fitted":"",imageStyle:o?{backgroundColor:o}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:J,onImageError:()=>{if(q.current={source:"",crop:null},d)if("online"===N&&""===(null!==H&&void 0!==H?H:"")||"offline"===N&&""===(null!==E&&void 0!==E?E:"")){const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),_&&v(_,N,W),h(k),A(!1),M("Image not found")}else F(void 0),y();else A(!1),M("No receiving canvas"),y();void 0===k&&(A(!1),M("Tainted canvas"))},crop:X,onDragStart:()=>{P(!0)},onChange:(e,t)=>{const a=U.current;q.current.crop||(G?K((e=>({...e,current:el(t,a,f)}))):(V(!0),K((t=>({...t,current:el(e,a,f)})))))},onComplete:(e,t)=>{q.current.crop||K((e=>({...e,completed:t})))},ruleOfThirds:!0,crossorigin:k},`${N}-${G}-${C}`)]})]})})),al=Ba.b.div`
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
`,rl=e=>{let{active:t,defaultValue:a=[],onChange:o=()=>{},onStatusChange:n}=e;const[l,i]=Object(r.useState)(a),s=Va(),c=JSON.stringify(l);return Object(r.useEffect)((()=>{o(l)}),[c]),Object(p.jsxs)(al,{className:La("link-marker-chooser",t?"chooser-active":"chooser-disabled"),children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)(Vo.a,{checked:t,onChange:e=>n(e.target.checked),children:s["link-picker.label"]})}),Object(p.jsx)("div",{className:"container",children:[...Array(9)].map(((e,a)=>{const r=`${a+1}`;return"5"===r?Object(p.jsx)(Ea.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(p.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&i([])},children:Object(p.jsx)(b.a,{})})},"5"):Object(p.jsx)("div",{className:`link-marker-button marker-${a+1} ${l.includes(r)?"marker-checked":""}`,onClick:()=>{t&&i((e=>{let t=[...e];return t.includes(r)?t=t.filter((e=>e!==r)):t.push(r),t}))},children:Object(p.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${pe[a]}deg) translateY(-1px)`}})},r)}))})]})},ol=e=>Object(p.jsx)(Io,{fallback:Object(p.jsx)(p.Fragment,{}),children:Object(p.jsx)(Eo.a,{...e})}),nl=Ba.b.div`
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
`,ll=Ba.b.div`
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
`,il={Container:Ba.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Option:ll},sl=Object(Ba.b)(Lo.a)`
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
        &:hover {
            background: #399af9;
        }
    }
`,cl=Object(r.forwardRef)(((e,t)=>{let{isTainted:a,isInitializing:o,imageChangeCount:n,globalScale:l,canvasMap:i,onDownloadError:s}=e;const c=Va(),{allowHotkey:d}=Or(Object(wo.useShallow)((e=>{let{setting:{allowHotkey:t}}=e;return{allowHotkey:t}}))),{onExport:u}=Oo(!0,i,{imageChangeCount:n,isInitializing:o,language:c,globalScale:l}),{exportCanvasRef:m}=i,b=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[f,h]=Object(r.useState)(!1),g=Object(r.useCallback)((()=>{h(!1)}),[]),{onSave:v,isPipelineRunning:y}=wr({isTainted:a,isInitializing:o,exportCanvasRef:m,exportRef:b,onExport:u,onDownloadError:s,onDownloadComplete:g}),x=e=>{f||(a?Da.a.error({message:c["prompt.download.tainted.message"]}):(h(!0),v(e)))};return Object(r.useImperativeHandle)(t,(()=>({download:x,isPipelineRunning:y}))),a?null:Object(p.jsxs)("div",{className:"save-button-container",children:[Object(p.jsx)("div",{id:"save-button-waiting"}),Object(p.jsxs)(sl,{className:"save-button",id:"save-button-ready",children:[Object(p.jsx)(Ea.a,{overlay:d?Object(p.jsx)(p.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(p.jsx)("div",{className:"button-label",children:Object(p.jsx)("div",{className:"label-content",onClick:()=>x(),children:f?c["button.download.ongoing.label"]:c["button.download.label"]})})}),Object(p.jsx)(Ro.a,{disabled:f,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(p.jsx)(Yn,{onChange:()=>Fa()}),children:Object(p.jsx)("div",{className:"button-option",onClick:e=>e.stopPropagation(),children:Object(p.jsx)(Do.a,{})})})]})]})}));var dl=a(187),ul=a.n(dl),ml=a(587),bl=a(588),pl=a(589),fl=a(590);const hl=Ba.b.div`
    ${Ia} {
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
`,gl=Object(Ba.b)(Ia)`
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
`,vl=e=>{let{data:t,children:a,disabled:o,withText:n}=e;const[l,i]=Object(r.useState)(!1);return Object(p.jsxs)(gl,{disabled:o,onClick:e=>{var a;e.stopPropagation(),a=t,ul()(a),i(!0),setTimeout((()=>{i(!1)}),1e3)},children:[l?Object(p.jsx)("div",{className:"copiable-overlay",children:n?Object(p.jsxs)(p.Fragment,{children:["Copied\xa0",Object(p.jsx)(ml.a,{})]}):Object(p.jsx)(ml.a,{})}):null,a]})},yl=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:Gt},{label:e["button.import.for-other.label"],value:"other",converter:la}],xl=Object(r.forwardRef)(((e,t)=>{let{tainted:a,artworkCanvas:o,onRequireExportData:n,onRequireDownload:l,onClose:i}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,b]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:f,resolution:h}=Or(Object(wo.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),g=Va(),v="export-input-raw",y=Object(r.useCallback)((()=>{const e=document.getElementById(v);e&&(e.focus(),e.select())}),[]);Object(r.useImperativeHandle)(t,(()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),b(yl(g).map((t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:n}=r(e,o);return{value:a,isPartial:t,name:_t(e.name),data:`${JSON.stringify(n)}`}}catch(n){return console.error(n),{value:a,isPartial:!1,name:"Unknown",data:""}}})).reduce(((e,t)=>{let{data:a,isPartial:r,value:o,name:n}=t;return e[o]={name:n,data:a,isPartial:r},e}),{...m}))}}))),Object(r.useEffect)((()=>{setTimeout((()=>{s&&"ygocarder"===d&&y()}),100)}),[d,y,s]);const{data:x,isPartial:j,name:O}=m[d];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Ra.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay",onCancel:()=>{c(!1),i()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(p.jsxs)(hl,{children:[Object(p.jsx)(en,{optionList:yl(g),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(p.jsxs)("div",{className:"partial-alert",children:[Object(p.jsx)("b",{children:g["service.decode.partial.message"]}),Object(p.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(p.jsxs)("div",{className:La("export-container-result",`mode_${d}`),children:[Object(p.jsx)(on,{content:a&&"other"===d?Object(p.jsx)(yn,{}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(Ia,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});Jt(_t(O),e,"application/json")},children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(_n.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(p.jsx)(on,{content:j?Object(p.jsx)(rn,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(vl,{disabled:j,data:m.ygocarder.data,withText:!0,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(bl.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(p.jsx)("div",{children:Object(p.jsxs)(vl,{disabled:j,data:window.location.href,withText:!0,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(pl.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.share-button.label"]})]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(on,{content:a?Object(p.jsx)(yn,{}):void 0,children:Object(p.jsx)("div",{children:Object(p.jsxs)(Ia,{disabled:a,className:"export-download-image",onClick:l,children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)(fl.a,{})}),Object(p.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(p.jsx)(Ro.a,{overlay:Object(p.jsx)(Yn,{}),children:Object(p.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!j&&Object(p.jsx)(Kn.a.TextArea,{id:v,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(p.jsx)(Ea.a,{overlay:f?Object(p.jsx)(p.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(p.jsx)("button",{className:"primary-button export-button",onClick:()=>{n(),c(!0)},children:g["button.export.label"]})}),Object(p.jsx)(Ro.a,{overlay:Object(p.jsx)(Hn.a,{onClick:e=>e.domEvent.stopPropagation(),children:yl(g).map(((e,t)=>{let{converter:a,label:r}=e;return Object(p.jsx)(Hn.a.Item,{onClick:()=>{try{const e=jr.getState().card,{result:t}=a(e,o);((e,t)=>{const a=new Blob([t],{type:"application/json"});Jt(_t(e),a,"application/json")})(_t(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),Da.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:r},`${t}`)}))}),children:Object(p.jsx)(Ia,{className:"secondary-button export-custom",children:Object(p.jsx)(_n.a,{})})})]})}));var jl=a(591);const Ol=Ba.b.div`
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
        ${Ia} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,wl=Object(r.forwardRef)(((e,t)=>{let{allowHotkey:a,language:o,onImport:n,onClose:l}=e;const i="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(0),[f,h]=Object(r.useState)("replace"),[g,v]=Object(r.useState)(!1),[y,x]=Object(r.useState)(!1),j=Object(r.useCallback)((()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())}),[]);Object(r.useEffect)((()=>{setTimeout((()=>{g&&j()}),100)}),[j,g]),Object(r.useImperativeHandle)(t,(()=>({requestImport:e=>{h(e),v(!0)}})));const O=()=>{b((e=>e+1)),v(!1),x(!1),l()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:r,isPartial:l}=yr(e,"replace"===f||"new"===f?void 0:jr.getState().card);if(l&&Da.a.info({message:o["service.decode.partial.message"],description:o["service.decode.partial.description"]}),t&&"online"===r.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(r.art)){const e={...r};try{const t=await(async e=>{const t=new Headers;t.append("Authorization","Client-ID 83ff9cbdd22c23c");const a=new FormData;return a.append("image",e),a.append("type","url"),a.append("title",e.replace("https://images.ygoprodeck.com/images/cards_cropped/","").replace(".jpg","")),await fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:a,redirect:"follow"})})(r.art);if(200!==t.status)throw e.art="https://i.imgur.com/jjtCuG5.png",new Error("Imgur response status: "+t.status);const a=await t.json();e.art=a.data.link}catch(a){console.error("Upload error:",a),Da.a.error({message:o["prompt.import.imgur.message"],description:o["prompt.import.imgur.description"]})}n(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}else n(r,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}}catch(a){console.error("Import error:",a),Da.a.error({message:o["error.import.error.message"],description:o["error.import.error.description"]})}},S=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},k=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:o}=r,n=null!==(e=o.trim())&&void 0!==e?e:"";let l="";try{l=zt(decodeURIComponent(n))}catch(a){}let i=null;if(n.startsWith("{")&&n.endsWith("}"))i=n;else if(l.startsWith("{")&&l.endsWith("}"))i=JSON.parse(l);else{var t;const e=n.startsWith("https://db.ygoprodeck.com/api")?n:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${n}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();i=null!==(t=r.data.find((e=>{let{name:t}=e;return t.toLowerCase()===n.toLowerCase()})))&&void 0!==t?t:r.data.sort(((e,t)=>{var a,r;const o=null===(a=e.misc_info)||void 0===a?void 0:a[0],n=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!o||!n)return 0;return(o.viewsweek+1)/(n.viewsweek+1)>2?n.viewsweek-o.viewsweek:n.views-o.views}))[0]}await w(i,!0)}}catch(a){console.error("Import error:",a),Da.a.error({message:o["error.import.error.message"],description:o["error.import.error.description"]})}finally{O()}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Ra.a,{visible:g,title:"merge"===f?o["button.import.merge.label"]:o["button.import.label"],className:"global-overlay",onCancel:O,okText:o["prompt.import.ok.label"],confirmLoading:y,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:k,children:Object(p.jsxs)(Ol,{children:["merge"!==f?Object(p.jsxs)("div",{className:"prompt-alert",children:[o["prompt.import.instruction.line-1"],Object(p.jsx)("br",{}),o["prompt.import.instruction.line-2"],Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"alert",children:o["prompt.import.instruction.alert.line-1"]})]}):null,Object(p.jsx)("div",{className:"import-container-input",children:Object(p.jsx)(Kn.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:o["prompt.import.message"],disabled:y,onPressEnter:k,rows:4},`input-${m}`)}),"merge"!==f?Object(p.jsxs)("div",{className:"import-container-upload",children:[Object(p.jsx)("span",{className:"option-separator",children:o["prompt.import.alternative.label"]}),Object(p.jsxs)(Ia,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(p.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;S(t),O()}},`file-input-${m}`),o["button.import.tooltip"]]}),"new"===f&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"option-separator",children:o["prompt.import.alternative.label"]}),Object(p.jsx)(Ia,{className:"import-empty",onClick:()=>{w(it()),O()},children:o["button.empty.label"]})]})]}):null]})}),Object(p.jsx)(Ea.a,{overlay:a?Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(p.jsxs)("div",{children:["Ctrl-G / \u2318-G",o["prompt.import.merge.tooltip"]]})]}):null,children:Object(p.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),v(!0)},children:o["button.import.label"]})}),Object(p.jsx)(Ea.a,{overlay:o["button.import.tooltip"],children:Object(p.jsxs)(Ia,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(i);e&&e.click()},children:[Object(p.jsx)("input",{ref:d,type:"file",id:i,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;S(t),O()}},`direct-file-input-${m}`),Object(p.jsx)(jl.a,{})]})})]})})),Sl=(Object(Ba.b)(Hn.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),kl=Object.values(M).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}})),Fl=[{value:"normal",label:Object(p.jsx)(b.a,{})},...Object.values(W).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}}))],Cl=()=>me.map((e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:o,edition:n}=e;return{label:Object(p.jsx)(Ln,{labelBackgroundColor:r,labelBackgroundColorList:o,nameKey:a}),value:t,edition:n}})),Tl=[...Array(14)].map(((e,t)=>({label:t,value:t}))),Nl=x.map((e=>{let{value:t}=e;return{label:t===y?Object(p.jsx)(b.a,{}):Object(p.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}})),Ll=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map((e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}})).sort(((e,t)=>e.order-t.order));const Rl=Ba.b.div`
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
`,Dl=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Va(),o=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(p.jsxs)(Rl,{tabIndex:-1,className:"char-picker-container",children:[Object(p.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\u2205","\u203b"].map((e=>Object(p.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>o(e),children:e},e)))}),Object(p.jsx)("div",{className:"char-picker-guideline",children:Object(p.jsx)(Ko,{content:Object(p.jsxs)(rn,{children:[r["input.char-picker.guide.header"],Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(p.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var El=a(79),Bl=a(593),Il=a(568);a(529),a(530);const Al=Object(r.forwardRef)(((e,t)=>{let{disabled:a,color:o,onSelect:n,onOffsetChange:l,onRemove:i}=e;const s=Va(),[c,d]=Object(r.useState)(o),[u,m]=Object(r.useState)(0),[b,f]=Object(r.useState)(-1),h=Object(r.useRef)($a()(m,250)).current;return Object(r.useImperativeHandle)(t,(()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:o,max:n,round:l}=Math;d(t),m(n(0,o(100,l(100*parseFloat(a))))),f(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:o}=Math;e===b&&m(r(0,a(100,o(100*parseFloat(t)))))}}))),Object(r.useEffect)((()=>{b>0&&(null===l||void 0===l||l(b,""+u/100))}),[b,u,l]),Object(p.jsxs)("div",{className:"stop-point-control-panel",children:[Object(p.jsxs)("div",{className:"stop-point-offset-input",children:[Object(p.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(p.jsx)(Il.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(p.jsx)(Lo.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===i||void 0===i?void 0:i(b),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(p.jsx)(El.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===n||void 0===n||n(e.hex)}})]})})),zl=e=>({colorList:e,raw:ga(e)}),Ml=e=>{var t,a;let{palette:o=ga(ha()),angle:n=180,memoizedOnChange:l}=e;const i=Va(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)((()=>{var e,t;const a=va(o);return{raw:o,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}})),b=Object(r.useCallback)(((e,t)=>m((a=>{const r=a.colorList.map((a=>a.id===e?{...a,offset:t}:a));return{...a,...zl(r)}}))),[]);Object(r.useEffect)((()=>{d(n)}),[n]),Object(r.useEffect)((()=>{var e,t;const a=va(o);m({raw:o,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})}),[o]);const f=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{var e;u.colorList[0]&&f.current&&(f.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))}),[u.colorList]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find((e=>e.id===a));e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}}),100),()=>{e=!1}}),[u]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&l(u.colorList,c)}),200),()=>{e=!1}}),[u,c,l]),Object(p.jsxs)("div",{className:La(zo,"gradient-picker-container"),children:[Object(p.jsxs)("div",{className:"gradient-angle-control",children:[Object(p.jsx)("h2",{children:i["input.name-style.gradient.color-point.label"]}),Object(p.jsxs)(Lo.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m((e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort(((e,t)=>Number(e.offset)-Number(t.offset)));return{...e,...zl(t)}}))},children:[i["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(p.jsx)(Wo,{angle:c,size:120,setAngle:d,children:Object(p.jsx)("h2",{children:i["input.name-style.gradient.gradient-direction.label"]})})]}),Object(p.jsx)("div",{className:"stop-color-picker-container",children:Object(p.jsx)(Ao.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m((t=>({...t,...zl(e)}))),onColorStopSelect:e=>{var t;m((t=>({...t,currentControlId:e.id}))),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(p.jsx)(Al,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:b,onRemove:e=>{m((t=>{var a;const r=t.colorList.filter((t=>t.id!==e)),o=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var n;o>0&&u.colorList[o]&&(null===(n=s.current)||void 0===n||n.setColor(u.colorList[o]));return{...zl(r),currentControlId:o}}))}})})})]})},Wl=Ba.b.div`
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
`,Pl=Object(Ba.b)(il.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,Hl=Ba.b.div`
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
`,$l=Object(Ba.b)(il.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,Ul=Ba.b.div`
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
`;var Yl=a(297);const Kl=Object(r.forwardRef)(((e,t)=>{let{className:a,defaultValue:o,fieldMap:n,labelMap:l,onChange:i}=e;const s=Va(),{x:c,y:d,color:u,width:m}=n,[b,f]=Object(r.useState)((()=>{const e=o[c],t=o[d],a=o[u],r=o[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}})),{x:h,y:g,color:v,width:y}=b,x=l[m];return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&i(b)}),500),()=>{e=!1}}),[b]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==b[a])return void f((t=>({...t,...e})))}}))),Object(p.jsxs)("div",{className:a,children:[Object(p.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(p.jsxs)("div",{className:"line-position",children:[Object(p.jsx)(Yl.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:5,xmin:-5,ymax:5,ymin:-5,x:null!==h&&void 0!==h?h:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return f((e=>({...e,x:t,y:a})))}}),Object(p.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(p.jsx)(Il.a,{size:"small",value:h,onChange:e=>f((t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(p.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(p.jsx)(Il.a,{size:"small",value:g,onChange:e=>f((t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(p.jsxs)("div",{className:"single-slider",children:[x,": ",Object(p.jsx)(ol,{value:y,min:1,max:10,onChange:e=>{"number"===typeof e&&f((t=>({...t,width:e})))}})]})]}),Object(p.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(p.jsx)(El.b,{colors:ct,color:v,onChangeComplete:e=>f((t=>({...t,color:e.hex})))})]})})),Gl=Object(r.forwardRef)(((e,t)=>{let{active:a,value:o,onClick:n,onCancel:l}=e;const i=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.focus()}}))),Object(p.jsx)($l,{ref:i,...xa({stopPropagation:!0,optionLength:k.length,setFocus:c,onTrigger:()=>{s>=0&&n(k[s])},onCancel:()=>{null===l||void 0===l||l()}}),children:k.map(((e,t)=>{const{key:r,image:l,label:i}=e;return Object(p.jsx)(Ul,{className:La("preset-item",o.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),n(e)},children:Object(p.jsx)("img",{className:"preset-preview",src:`/ygocarder/${l}`,alt:i})},r)}))})}));var Vl=a(592);const Xl=Ba.b.div`
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
`,_l=.01,ql=90,Jl=90;const Zl=Object(r.forwardRef)(((e,t)=>{let{defaultPitch:a=ql,defaultYaw:o=Jl,children:n,onChange:l}=e;const[i,s]=ya(),[c,d]=Object(r.useState)("#ffffff"),[u,m]=Object(r.useState)(o),[b,f]=Object(r.useState)(a),h=Object(r.useRef)([255,255,255]),g=Object(r.useRef)([0,1,0]),[v]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{let e=!0;return s&&setTimeout((()=>{if(e){const e=Ct(u,b),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(c);h.current=t,g.current=e,(t[0]!==h[0]||t[1]!==h[1]||t[2]!==h[2]||Math.abs(e[0]-g[0])>_l||Math.abs(e[1]-g[1])>_l||Math.abs(e[2]-g[2])>_l)&&l(t,e,[u,b])}}),50),()=>{e=!1}}),[s,c,u,b]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{let{color:t,pitch:a,yaw:r}=e;t&&d(t),a&&f(a),r&&m(r)}}))),Object(p.jsxs)(Xl,{className:La(zo,"emboss-control"),children:[Object(p.jsx)("div",{className:"emboss-control-title",children:n}),Object(p.jsxs)("div",{className:"emboss-control-left",children:[Object(p.jsxs)("h2",{children:["Pitch\xa0\xa0",Object(p.jsx)(Vl.a,{className:"reset-button",onClick:()=>{f(ql),i()}})]}),Object(p.jsxs)(ln,{className:"vertical-angle-control",children:[Object(p.jsx)("div",{className:"slider-label"}),Object(p.jsx)(Il.a,{size:"small",min:-90,max:90,onChange:e=>{f("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),i()},value:b}),Object(p.jsx)(ol,{min:-90,max:90,value:b,onChange:e=>{f(e),i()}}),Object(p.jsx)("div",{className:"slider-padding"})]}),Object(p.jsxs)("h2",{children:["Yaw\xa0\xa0",Object(p.jsx)(Vl.a,{className:"reset-button",onClick:()=>{m(Jl),i()}})]}),Object(p.jsx)("div",{className:"horizontal-angle-contorl",children:Object(p.jsx)(Wo,{angle:u,size:120,setAngle:e=>{m(e),i()}})})]}),v&&Object(p.jsxs)("div",{className:"emboss-control-right",children:[Object(p.jsx)("h2",{children:"Light color"}),Object(p.jsx)(El.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>{d(e.hex),i()},onChangeComplete:e=>{d(e.hex),i()}})]})]})}));a(536);const Ql=Object(r.forwardRef)(((e,t)=>{let{frameInfo:a,defaultType:o,defaultValue:n,showExtraDecorativeOption:l,onChange:i}=e;const s=Va(),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(-1),[m,f]=Object(r.useState)(!1),[h,g]=Object(r.useState)(o),[v,y]=Object(r.useState)(n),[x,j]=ya(),O=Object(r.useRef)($a()(i,250)).current,w=Object(r.useCallback)(((e,t)=>{y((a=>({...a,gradientAngle:t,gradientColor:ga(e)}))),x()}),[x]),k=Or((e=>e.setting.reduceMotionColor)),F=Object(r.useMemo)((()=>{return e=s,Object.values(Q).map((t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[s]);Object(r.useEffect)((()=>{0!==j&&(g("custom"),O("custom",v))}),[j]);const T=Object(r.useRef)(null),N=Object(r.useRef)(null),L=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r;y((t=>({...t,...e})));const{lineColor:o,lineWidth:n,lineOffsetX:l,lineOffsetY:i,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:b}=e;null===(t=T.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=N.current)||void 0===a||a.setValue({x:l,y:i,width:n,color:o}),null===(r=L.current)||void 0===r||r.setValue({pitch:m,yaw:b})}})));const{fillStyle:R,headTextFillStyle:D,hasOutline:E,hasShadow:B,hasGradient:I,gradientColor:A,gradientAngle:z,hasEmboss:M,embossPitch:W,embossYaw:P,pattern:H,font:$}=v,{labelBackgroundColor:U,labelBackgroundImage:Y}=null!==a&&void 0!==a?a:{},K={background:U,backgroundImage:Y},G="custom"===h,V="predefined"===h,X="name-style-option-input-container",_=()=>{g("auto"),"auto"!==h&&O("auto",v)},q=()=>{var e;const t=v.preset?null===(e=S[v.preset])||void 0===e?void 0:e.value:{};g("predefined"),y((e=>({...e,...t}))),O("predefined",{...v,...t})},J=()=>{g("custom"),"custom"!==h&&O("custom",v)};return Object(p.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(p.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(p.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(p.jsxs)("span",{className:"name-style-input-container",children:[Object(p.jsxs)("div",{id:X,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...xa({setFocus:u,optionLength:3,onKeyPress:e=>{if(1===d&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),u(1),f(!0),setTimeout((()=>{var e;1===d&&(null===(e=c.current)||void 0===e||e.focus())}),200),!1},onTrigger(){0===d&&_(),1===d&&q(),2===d&&J()}}),children:[Object(p.jsxs)("label",{className:La("ant-radio-wrapper","auto"===h&&"ant-radio-wrapper-checked",0===d&&"ant-radio-focused"),onClick:()=>_(),children:[Object(p.jsxs)("span",{className:"ant-radio "+("auto"===h?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(p.jsx)("span",{className:"name-style-option-break"}),Object(p.jsx)("label",{className:La("ant-radio-wrapper",V&&"ant-radio-wrapper-checked",1===d&&"ant-radio-focused"),onClick:()=>q(),children:Object(p.jsx)($o.a,{visible:m,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Gl,{ref:c,active:V,value:v,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(X))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=S[a])||void 0===t?void 0:t.value:{};g("predefined"),y((e=>({...e,...r}))),O("predefined",{...v,...r})}})}),children:Object(p.jsxs)("span",{className:"name-style-option-label",children:[Object(p.jsxs)("span",{className:"ant-radio "+(V?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(p.jsx)("span",{className:"name-style-option-break"}),Object(p.jsx)("label",{className:La("ant-radio-wrapper",G&&"ant-radio-wrapper-checked",2===d&&"ant-radio-focused"),onClick:()=>J(),children:Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{className:"ant-radio "+(G?"ant-radio-checked":""),children:[Object(p.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(p.jsx)("span",{className:"ant-radio-inner"})]}),Object(p.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(p.jsxs)("div",{className:"style-picker",children:[Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsxs)("div",{className:"custom-style-text",children:[Object(p.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(p.jsx)(El.b,{colors:ct,color:R,onChangeComplete:e=>{g("custom"),y((t=>({...t,fillStyle:e.hex}))),x()}})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"custom-style-text",children:[Object(p.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(p.jsx)(El.b,{colors:ct,color:D,onChangeComplete:e=>{g("custom"),y((t=>({...t,headTextFillStyle:e.hex}))),x()}})]})]})}),placement:"bottom",children:Object(p.jsxs)(Wl,{$softMode:k,$active:G,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(p.jsx)(Bl.a,{})]})},"color-picker"),l&&Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Vo.a,{value:"has-shadow",checked:B,onChange:()=>{g("custom"),y((e=>({...e,hasShadow:!e.hasShadow}))),x()},children:s["input.name-style.shadow.toggle.label"]})}),B&&Object(p.jsx)(Kl,{ref:T,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:o}=e;y((e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:o}))),x()}})]})}),placement:"bottom",children:Object(p.jsxs)(Wl,{$softMode:k,$active:G&&B,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(p.jsx)(Bl.a,{})]})},"shadow-picker"),Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Vo.a,{value:"has-line",checked:E,onChange:()=>{g("custom"),y((e=>({...e,hasOutline:!e.hasOutline}))),x()},children:s["input.name-style.outline.toggle.label"]})}),E&&Object(p.jsx)(Kl,{ref:N,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:o}=e;y((e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:o}))),x()}})]})}),placement:"bottom",children:Object(p.jsxs)(Wl,{$softMode:k,$active:G&&E,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(p.jsx)(Bl.a,{})]})},"outline-picker"),l&&Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Vo.a,{value:"has-gradient",checked:I,onChange:()=>{g("custom"),y((e=>({...e,hasGradient:!e.hasGradient}))),x()},children:s["input.name-style.gradient.toggle.label"]})}),I&&Object(p.jsx)("div",{className:"custom-style-gradient",children:Object(p.jsx)(Ml,{angle:z,palette:A,memoizedOnChange:w})})]})}),placement:"bottom",children:Object(p.jsxs)(Wl,{$softMode:k,$active:G&&I,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(p.jsx)(Bl.a,{})]})},"gradient-picker"),l&&Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)(Pl,{onClick:e=>e.stopPropagation(),children:[Object(p.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),C.map((e=>{let{key:t,patternImage:a}=e;return Object(p.jsx)(Hl,{className:["pattern-option",v.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{y((e=>({...e,pattern:t}))),x()},children:a?Object(p.jsx)("img",{style:a?K:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)}))]})}),placement:"bottomLeft",children:Object(p.jsx)(Wl,{$softMode:k,$active:G&&"string"===typeof H&&"none"!==H,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(il.Container,{children:F.map((e=>{let{value:t,label:a}=e;return Object(p.jsx)(il.Option,{className:$===t?"menu-active":"",onClick:()=>{y((e=>({...e,font:t}))),x()},children:a},t)}))})}),placement:"bottomLeft",children:Object(p.jsx)(Wl,{$softMode:k,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),l&&Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)("div",{className:"custom-style-picker",children:[Object(p.jsx)("h3",{className:"custom-style-expand",children:Object(p.jsx)(Vo.a,{value:"has-emboss",checked:M,onChange:()=>{g("custom"),y((e=>({...e,hasEmboss:!e.hasEmboss}))),x()},children:s["input.name-style.emboss.toggle.label"]})}),M&&Object(p.jsx)(Zl,{ref:L,defaultPitch:W,defaultYaw:P,onChange:(e,t,a)=>{let[r,o]=a;y((e=>({...e,embossPitch:o,embossYaw:r}))),x()},children:Object(p.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(p.jsx)(Wl,{$softMode:k,$active:G&&M,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker")]})]})]})})})),ei=Ba.a`
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
`,ti=Object(Ba.b)(en)`
	${ei}
`,ai=e=>{let{onSTFrameChange:t,onPasswordChange:a}=e;const{setting:o}=Or(),{showExtraDecorativeOption:n}=o,l=Object(r.useMemo)((()=>Cl().filter((e=>n||"normal"===e.edition))),[n]),{frame:i,setCard:s}=jr(Object(wo.useShallow)((e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}}))),c=Object(r.useCallback)((e=>{s((r=>{const{typeAbility:o,isPendulum:n,attribute:l,format:i,password:s,star:c}=r,d=`${e}`,u="spell"===d||"trap"===d,m="tcg"===i?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:de,b="spell"===d?[m["Spell Card"]]:"trap"===d?[m["Trap Card"]]:o,p="token"===d?se[i]:s;return a(p),u&&t(b),{...r,frame:d,isPendulum:"link"!==d&&n,isLink:"link"===d,attribute:"token"===d?f:u?`${d}`.toUpperCase():l,star:"token"===d?0:c,typeAbility:b,password:p}}))}),[s,a,t]);return Object(p.jsx)(ti,{className:"frame-radio",value:i,onChange:c,optionList:l})},ri=Ba.b.div`
    ${Jo}
`,oi=e=>{let{onChange:t,value:a,optionList:o,children:n,className:l}=e;const[i,s]=Object(r.useState)(-1),c=o.length;return Object(p.jsxs)(ri,{className:["ant-radio-group ant-radio-group-outline checkbox-train",l].join(" "),children:[n&&Object(p.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:n}),Object(p.jsx)("div",{className:"checkbox-train-input-group",...xa({setFocus:s,optionLength:c,onTrigger:()=>{const e=o[i];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter((t=>`${e.value}`!==t)):[...a,`${e.value}`])}}}),children:o.map(((e,r)=>{const{label:o,value:n,props:l}=e,s=!!Array.isArray(a)&&a.includes(`${n}`);return Object(p.jsxs)("label",{...l,className:["ant-radio-button-wrapper",s?"ant-radio-button-wrapper-checked":"",i===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(s?a.filter((e=>`${n}`!==e)):[...a,`${n}`])},children:[Object(p.jsx)("span",{className:"ant-radio-button "+(s?"ant-radio-button-checked":""),children:Object(p.jsx)("span",{className:"ant-radio-button-inner"})}),Object(p.jsx)("span",{className:"label",children:o})]},n)}))})]})},ni=Object(Ba.b)(tl)`
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
`,li=Object(r.forwardRef)(((e,t)=>{let{backgroundColor:a,children:o,receivingCanvas:n,onSourceLoaded:l,onTainted:i,onCropChange:s}=e;const c=Va(),{background:d,backgroundCrop:u,backgroundType:b,backgroundData:f,backgroundSource:h,backgroundFit:g,isPendulum:v,opacity:y,getUpdater:x,setCard:j}=jr(Object(wo.useShallow)((e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:o,backgroundSource:n,backgroundFit:l,isPendulum:i,opacity:s},getUpdater:c,setCard:d}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:o,backgroundSource:n,backgroundFit:l,isPendulum:i,opacity:s,getUpdater:c,setCard:d}}))),O=Object(r.useRef)(null),w=Object(r.useMemo)((()=>x("backgroundSource")),[x]),S=Object(r.useMemo)((()=>x("background")),[x]),k=Object(r.useMemo)((()=>x("backgroundData")),[x]),F=Object(r.useCallback)((e=>j((t=>({...t,backgroundFit:e})))),[j]),C=Object(r.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&j((t=>({...t,backgroundCrop:e})),a)}),[s,j]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=O.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=O.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o}=e;var n,l;"offline"===o?"string"===typeof r&&a&&(null===(n=O.current)||void 0===n||n.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=O.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(p.jsx)(ni,{ref:O,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:f,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:n,forceFit:g,onSourceChange:(e,t)=>{w(e),"offline"===e?k(t):S(t)},onCropChange:C,onTainted:i,onSourceLoaded:l,onForceFitChange:F,onMaxSizeExceeded:e=>{Da.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(v,y,b).backgroundRatio,beforeCropper:null,children:o})}));var ii=a(594);a(537);const si=Ba.b.span`
    white-space: pre-line;
`,ci=Ba.b.div`
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
`,di=Ba.b.div`
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
`,ui=Object(r.forwardRef)(((e,t)=>{var a;let{receivingCanvas:o,defaultValue:n,onTainted:l,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const b=Va(),{background:f,backgroundData:h,backgroundSource:g,backgroundType:v,getUpdater:y,hasBackground:x,isPendulum:j,setCard:O}=jr(Object(wo.useShallow)((e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:o,hasBackground:n,isPendulum:l},setCard:i,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:o,getUpdater:s,hasBackground:n,isPendulum:l,setCard:i}}))),[w,S]=Object(r.useState)(!0),[k,F]=Object(r.useState)(!0),[C,T]=Object(r.useState)((()=>({...d(),...n}))),N=Object(r.useRef)(null),L=Object(r.useMemo)((()=>y("backgroundType")),[y]),R=Object(r.useCallback)((e=>O((t=>({...t,hasBackground:e.target.checked})))),[O]);Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&s(C)}),500),()=>{e=!1}}),[C]),Object(r.useEffect)((()=>{S(!1),setTimeout((()=>{F(!1)}),250)}),[]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o,...n}=e;var l;"string"!==typeof t&&"string"!==typeof r||!a||(null===(l=N.current)||void 0===l||l.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o}));for(const i in n)n[i]!==C[i]&&T((e=>({...e,...n})))}})));const D=0===(null!==f&&void 0!==f?f:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(p.jsxs)(ci,{className:"card-opacity-slider-container",children:[Object(p.jsx)(Ea.a,{overlayClassName:"long-tooltip-overlay",title:Object(p.jsx)(si,{children:b["input.opacity.boundless.tooltip"]}),children:Object(p.jsx)(Vo.a,{className:"art-frame",onChange:e=>T((t=>({...t,boundless:e.target.checked}))),checked:C.boundless,children:b["input.opacity.boundless.label"]})}),st.map((e=>{var t,a,r;let{labelKey:n,type:s,subType:d,tooltipKey:y}=e;if("pendulum"===s&&!j)return null;const O=!!d,F=d&&C[d];return Object(p.jsxs)(ln,{className:["card-opacity-slider",F?"":"inactive"].join(" "),children:[Object(p.jsxs)("div",{className:"slider-label",children:["body"===s&&Object(p.jsx)($o.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:S,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",k?"picker-hidden":""].join(" "),content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsxs)(di,{className:["custom-style-picker",D?"overlay-no-background-image":""].join(" "),children:[Object(p.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(p.jsx)(Vo.a,{checked:x,onChange:e=>{R(e)},children:b["input.background.toggle-label"]}),Object(p.jsx)("br",{}),Object(p.jsx)("i",{children:b["input.background.description"]})]}),Object(p.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(p.jsx)(li,{ref:N,receivingCanvas:o,onSourceLoaded:u,onTainted:l,onCropChange:m,backgroundColor:C.baseFill,children:Object(p.jsxs)("div",{className:"layout-picker-panel",children:[Object(p.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(p.jsx)("h2",{children:b["input.background-color.label"]}),Object(p.jsx)(El.b,{colors:ct,color:C.baseFill,onChangeComplete:e=>{T((t=>({...t,baseFill:e.hex})))}})]}),!D&&Object(p.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(p.jsx)("h2",{children:b["input.background-type.label"]}),Object(p.jsx)(en,{className:"background-type-picker",onChange:L,optionList:i({fit:b["input.background-type.fit.label"],full:b["input.background-type.full.label"],frame:b["input.background-type.frame.label"]}),value:v})]})]})})})]})}),placement:"bottom",children:Object(p.jsx)("div",{className:"background-preview",style:{backgroundColor:x?C.baseFill:c},children:Object(p.jsx)(Ea.a,{overlay:b["input.background.toolip"],children:Object(p.jsx)("div",{className:"background-preview-callback-passer",children:x?f?Object(p.jsx)("img",{className:"background-image-preview",src:"online"===g?f:h,alt:"Background"}):null:Object(p.jsx)(ii.a,{className:"no-background-icon"})})})})}),O&&Object(p.jsx)(Ea.a,{title:y&&null!==(t=b[y])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(p.jsx)(Vo.a,{checked:F,onChange:e=>d&&T((t=>({...t,[d]:e.target.checked})))})}),b[n]]}),Object(p.jsx)(Il.a,{size:"small",min:0,max:100,onChange:e=>T((t=>({...t,[s]:"number"===typeof e?e:100}))),value:null!==(a=C[s])&&void 0!==a?a:100}),Object(p.jsx)(ol,{min:0,max:100,step:5,onChange:e=>T((t=>({...t,[s]:e}))),value:null!==(r=C[s])&&void 0!==r?r:100}),Object(p.jsx)("div",{className:"slider-padding"})]},s)}))]})}));var mi=a(595),bi=a(596),pi=a(597);const fi=Object(Ba.b)(il.Container)`
    img.icon-image {
        width: var(--fs-lg);
    }
`,hi=Object(Ba.b)(en)`
    .custom-star-input {
        width: 6.5rem;
    }
    .checkbox-star-suffix {
        display: flex;
        flex-wrap: wrap;
        column-gap: var(--spacing-sm);
        row-gap: var(--spacing-xxs);
        margin-left: var(--spacing-sm);
    }
`,gi=Object(r.forwardRef)(((e,t)=>{let{isLink:a,isMonster:o,showCreativeOption:n}=e;const l=Va(),{frame:i,subFamily:s,cardIcon:c,star:d,starAlignment:u,getUpdater:m}=jr(Object(wo.useShallow)((e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:o,starAlignment:n},getUpdater:l}=e;return{frame:t,subFamily:a,cardIcon:r,star:o,starAlignment:n,getUpdater:l}}))),f="dark-synchro"==={frame:i}.frame;const h=Nt({frame:i}),y=Object(r.useMemo)((()=>m("cardIcon")),[m]),x=Object(r.useMemo)((()=>m("subFamily")),[m]),w=Object(r.useMemo)((()=>m("star")),[m]),S=Object(r.useMemo)((()=>m("starAlignment")),[m]);Object(r.useImperativeHandle)(t,(()=>({})));const k="auto"===c?j[o?h?"rank":f?"negative-level":"level":"st"]:j[c],F=l[k.labelKey],C=n?Object(p.jsxs)(p.Fragment,{children:[F," ",Object(p.jsx)(Bl.a,{})]}):F,T=Object(p.jsx)($o.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(fi,{children:O.map((e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(p.jsxs)(il.Option,{className:a===c?"menu-active":"",onClick:()=>y(a),children:[r?Object(p.jsxs)(p.Fragment,{children:[r,"\xa0"]}):null,l[t]]},a)}))})}),placement:"bottomRight",children:Object(p.jsx)("span",{className:`card-icon-dropdown ${"auto"===c?"":"active"} ${n?"":"disabled"}`,children:C})},"icon-type-picker"),N=n?T:C;return a?null:"st"===k.value?Object(p.jsx)(en,{className:"fill-input-train",value:s,onChange:x,optionList:(L=l,v.map((e=>{let{value:t,nameKey:a}=e;return{label:t===g?Object(p.jsx)(b.a,{}):Object(p.jsx)(Ea.a,{overlay:L[a],children:Object(p.jsx)("img",{alt:L[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}}))),children:N}):Object(p.jsx)(hi,{className:"checkbox-star-train",value:d,onChange:w,optionList:Tl,strict:!0,suffix:n&&Object(p.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(p.jsx)(Kn.a,{className:"custom-star-input",value:"number"===typeof d?"":d,allowClear:!0,onChange:w,placeholder:l["input.icon-type.custom.placeholder"]}),Object(p.jsx)(en,{value:u,onChange:S,optionList:[{value:"auto",tooltipProps:{overlay:l["input.icon-type.alignment.auto"]},label:Object(p.jsx)(b.a,{})},{value:"left",tooltipProps:{overlay:l["input.icon-type.alignment.left"]},label:Object(p.jsx)(mi.a,{})},{value:"center",tooltipProps:{overlay:l["input.icon-type.alignment.center"]},label:Object(p.jsx)(bi.a,{})},{value:"right",tooltipProps:{overlay:l["input.icon-type.alignment.right"]},label:Object(p.jsx)(pi.a,{})}]})]}),children:N});var L})),vi=new Set(["1","2","3","4","5"]),yi=(e,t,a,r,o,n)=>{const l=e.substring(a,r),i="\n"===e[r]||!o;let s=l,c=2;switch(t){case"1":s=`[${l}]${i?"":"\n"}`,c=i?2:3;break;case"2":s=`{${l}}`;break;case"3":s=`{${l}|}`;break;case"4":s=`{${l}||}`,c=3;break;case"5":s=`{{${l}}}`,c=4}n(e.substring(0,a)+`${s}`+e.substring(r,e.length),r+c)},xi=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:ji}=Kn.a,Oi=Object(r.forwardRef)(((e,t)=>{let{id:a,allowHotkey:o,defaultValue:n,onTakePicker:l,onChange:i,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(n),[m,b]=Object(r.useState)(n),[f,h]=Object(r.useState)({id:"",placement:-1}),g=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;u.current=t,b(t)}),[]);Object(r.useEffect)((()=>{xi(f)}),[f]),Object(r.useEffect)((()=>{i({target:{value:m}})}),[m]);const v=e=>{e!==u.current&&g(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:v,getPickerRef:()=>a?{id:a,setValue:v}:null}))),Object(p.jsx)(ji,{id:a,autoComplete:"off",onFocus:()=>a&&(null===l||void 0===l?void 0:l({id:a,setValue:v})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!o)return;const{ctrlKey:n,key:l,metaKey:i}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||i)&&a&&d!==c&&vi.has(l)&&(e.preventDefault(),yi(e.currentTarget.value,l,c,d,!0,((e,t)=>{g(e),h({id:a,placement:t})})))},onChange:g,...d})})),wi=Object(r.forwardRef)(((e,t)=>{let{id:a,defaultValue:o,onTakePicker:n,onChange:l,onKeyDown:i,className:s,...c}=e;const{setting:d}=Or(),{allowHotkey:u}=d,m=Object(r.useRef)(o),[b,f]=Object(r.useState)(o),[h,g]=Object(r.useState)({id:"",placement:-1}),v=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;m.current=t,f(t)}),[]);Object(r.useEffect)((()=>{xi(h)}),[h]),Object(r.useEffect)((()=>{l({target:{value:b}})}),[b]);const y=e=>{e!==b&&v(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:y}))),Object(p.jsx)(Kn.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===n||void 0===n?void 0:n({id:a,setValue:y})),allowClear:!0,className:`${a}-input ${s}`,value:b,onKeyDown:e=>{var t,r;if(null===i||void 0===i||i(e),!u)return;const{ctrlKey:o,key:n,metaKey:l}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(o||l)&&a&&c!==s&&vi.has(n)&&(e.preventDefault(),yi(e.currentTarget.value,n,s,c,!1,((e,t)=>{v(e),g({id:a,placement:t})})))},onChange:e=>v(e.target.value),...c})})),Si=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=jr((e=>e.getUpdater)),n=Object(r.useRef)(null),l=Object(r.useMemo)((()=>o("effect",void 0,"debounce")),[o]);return Object(r.useEffect)((()=>{var e;const t=null===(e=n.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))}),[]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;null===(t=n.current)||void 0===t||t.setValue(e)}}))),Object(p.jsx)(Oi,{ref:n,id:"effect",allowHotkey:!0,defaultValue:jr.getState().card.effect,onChange:l,onTakePicker:a,autoSize:{minRows:9}})})),ki=Ba.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,Fi=e=>{const t=Va(),{isDuelTerminalCard:a,isFirstEdition:o,isSpeedCard:n,isLimitedEdition:l,isLegacyCard:i,setCard:s}=jr(Object(wo.useShallow)((e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}))),c=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}))),[s,i]),d=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}))),[s,i]),u=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}))),[s,i]),m=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?i?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}))),[s,i]),b=Object(r.useCallback)((e=>s((t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:o,isLimitedEdition:n,isSpeedCard:l}=t;let i=!1,s=!1,c=!1,d=!1;return a?(s=o,d=!s&&l,i=!d&&!s&&r,c=!(i||s||c)&&n):(s=o,c=!s&&n,d=l,i=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:i,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}))),[s]);return Object(p.jsxs)(ki,{className:"checkbox-input",children:[Object(p.jsx)(Ea.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(p.jsx)(Vo.a,{className:"input-legacy",onChange:b,checked:i,tabIndex:0,children:t["input.legacy.label"]})}),Object(p.jsx)(Vo.a,{className:"input-1st",onChange:c,checked:o,tabIndex:0,children:t["input.1st-edition.label"]}),Object(p.jsx)(Vo.a,{className:"input-limited",onChange:d,checked:l,tabIndex:0,children:t["input.limited-edition.label"]}),Object(p.jsx)(Vo.a,{className:"input-speed",onChange:m,checked:n,tabIndex:0,children:t["input.speed-duel.label"]}),Object(p.jsx)(Vo.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var Ci=a(598);const Ti=Object(Ba.b)(il.Container)`
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
    ${ei}
`,Ni=Ba.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,Li=Ba.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,Ri=Object(Ba.b)(en)`
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
`,Di=Ba.b.div`
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
`,Ei=Object(r.forwardRef)(((e,t)=>{let{isMonster:a,showCreativeOption:o,onTakePicker:n}=e;const l=Va(),{sticker:i,format:s,getUpdater:c}=jr(Object(wo.useShallow)((e=>{let{card:{sticker:t,format:a},getUpdater:r}=e;return{sticker:t,format:a,getUpdater:r}}))),d=Object(r.useRef)(null),u=Object(r.useRef)(null),m=Object(r.useRef)(null),b=Object(r.useRef)(null),f=s&&ie[s]?ie[s]:ie.tcg,h=Object(r.useMemo)((()=>c("atk",(e=>"string"===typeof e?e.trim():e))),[c]),g=Object(r.useMemo)((()=>c("def",(e=>"string"===typeof e?e.trim():e))),[c]),v=Object(r.useMemo)((()=>c("password",void 0,"debounce")),[c]),y=Object(r.useMemo)((()=>c("sticker")),[c]),x=Object(r.useMemo)((()=>c("creator",void 0,"debounce")),[c]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r,o;let{password:n,creator:l,atk:i,def:s}=e;"string"===typeof i&&(null===(t=m.current)||void 0===t||t.setValue(i)),"string"===typeof s&&(null===(a=b.current)||void 0===a||a.setValue(s)),"string"===typeof n&&(null===(r=d.current)||void 0===r||r.setValue(n)),"string"===typeof l&&(null===(o=u.current)||void 0===o||o.setValue(l))}}))),Object(p.jsxs)(Di,{className:"card-footer-input",children:[(a||o)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(wi,{ref:m,id:"atk",addonBefore:l["input.atk.label"],defaultValue:jr.getState().card.atk,onChange:h,onTakePicker:n}),Object(p.jsx)(wi,{ref:b,id:"def",addonBefore:l["input.def.label"],defaultValue:jr.getState().card.def,onChange:g,onTakePicker:n})]}),Object(p.jsx)(wi,{ref:d,id:"password",addonBefore:Object(p.jsxs)(Ni,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:l["input.password.label"]}),Object(p.jsx)(_o,{onClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.setValue(`${ka("0123456789",8)}`)},Icon:Vl.a,tooltipProps:{overlay:l["button.randomize.label"]}})]}),defaultValue:jr.getState().card.password,onChange:v,onTakePicker:n}),Object(p.jsx)(wi,{ref:u,id:"creator",addonBefore:Object(p.jsxs)(Ni,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:l["input.copyright.label"]}),Object(p.jsx)(Ro.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(p.jsx)(Hn.a,{onClick:e=>e.domEvent.stopPropagation(),children:f.map(((e,t)=>Object(p.jsx)(Hn.a.Item,{onClick:()=>{var t;null===(t=u.current)||void 0===t||t.setValue(e)},children:e},`${t}`)))}),children:Object(p.jsx)("div",{children:Object(p.jsx)(_o,{onClick:()=>{},Icon:Ci.a})})})]}),defaultValue:jr.getState().card.creator,onChange:x,onTakePicker:n}),Object(p.jsx)(Fi,{}),Object(p.jsx)(en,{className:"sticker-input fill-input-train",value:i,onChange:y,optionList:Nl,children:Object(p.jsx)("span",{children:l["input.sticker.label"]})})]})})),Bi=Object(Ba.b)(en)`
    .ant-input-group-addon {
        flex: 0;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`,Ii=Object(r.forwardRef)(((e,t)=>{let{showExtraDecorativeOption:a,receivingCanvas:o,onSourceLoaded:n,onTainted:l,onCropChange:i}=e;const s=Va(),{opacity:c,artFinish:d,linkMap:u,isPendulum:b,isLink:f,art:h,artCrop:g,artData:v,artSource:y,artFit:x,getUpdater:j,setCard:O}=jr(Object(wo.useShallow)((e=>{let{card:{opacity:t,artFinish:a,linkMap:r,isPendulum:o,isLink:n,art:l,artCrop:i,artData:s,artSource:c,artFit:d},getUpdater:u,setCard:m}=e;return{opacity:t,artFinish:a,linkMap:r,isPendulum:o,isLink:n,art:l,artCrop:i,artData:s,artSource:c,artFit:d,getUpdater:u,setCard:m}}))),w=Object(r.useRef)(null),S=Object(r.useMemo)((()=>j("linkMap")),[j]),k=Object(r.useCallback)((e=>O((t=>({...t,isLink:e,isPendulum:!e&&t.isPendulum})))),[O]),F=Object(r.useMemo)((()=>j("art")),[j]),C=Object(r.useMemo)((()=>j("artData")),[j]),T=Object(r.useCallback)((e=>O((t=>({...t,artFit:e})))),[O]),N=Object(r.useMemo)((()=>j("artSource")),[j]),L=Object(r.useMemo)((()=>j("artFinish")),[j]),R=Object(r.useCallback)(((e,t,a)=>{null===i||void 0===i||i(e,t),e&&O((t=>({...t,artCrop:e})),a)}),[i,O]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:o}=e;var n,l;"offline"===o?"string"===typeof r&&a&&(null===(n=w.current)||void 0===n||n.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=w.current)||void 0===l||l.forceSource("online",t,a))}}))),Object(p.jsx)(tl,{ref:w,title:s["input.card-art.label"],defaultSourceType:y,defaultExternalSource:h,defaultInternalSource:v,defaultCropInfo:g,forceFit:x,receivingCanvas:o,onSourceChange:(e,t)=>{N(e),"offline"===e?C(t):F(t)},onCropChange:R,onTainted:l,onSourceLoaded:n,onForceFitChange:T,onMaxSizeExceeded:e=>{Da.a.error({description:s["error.max-size.description"](e),message:s["error.max-size.message"]})},ratio:m(b,c).ratio,beforeCropper:a?Object(p.jsx)(Bi,{className:"art-finish-checkbox fill-input-train",value:d,onChange:L,optionList:Fl,children:Object(p.jsx)("span",{className:"field-title",children:s["input.art-finish.label"]})}):null,children:Object(p.jsx)(rl,{active:!0===f,defaultValue:u,onChange:S,onStatusChange:k},`link-${JSON.stringify(u)}`)})})),Ai=Ba.b.div`
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
`,zi=Ba.b.span`
    cursor: pointer;
`,Mi=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=Va(),{name:n,format:l,getUpdater:i}=jr(Object(wo.useShallow)((e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}}))),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)((()=>i("setId")),[i]),u=Object(r.useMemo)((()=>i("name",void 0,"debounce")),[i]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;let{name:r,setId:o}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof o&&(null===(a=c.current)||void 0===a||a.setValue(o))}}))),Object(p.jsxs)(Ai,{className:"name-id-input",children:[Object(p.jsx)(wi,{ref:s,id:"name",defaultValue:n,addonBefore:Object(p.jsx)(Ea.a,{title:o["input.name.tooltip"],children:Object(p.jsx)(zi,{onClick:()=>{navigator.clipboard.writeText(_t(n))},children:o["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(p.jsx)(wi,{ref:c,id:"set-id",defaultValue:jr.getState().card.setId,addonBefore:Object(p.jsxs)(Ni,{className:"input-label-with-button",children:[Object(p.jsx)("div",{className:"input-label",children:o["input.set-id.label"]}),Object(p.jsx)(_o,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>ka("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+ka("0000000000111111111122222222223456789",1)+ka("0123456789",2))(l))},Icon:Vl.a,tooltipProps:{overlay:o["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})})),Wi=Object(r.forwardRef)(((e,t)=>{let{frameList:a,pendulumFrame:o,onChange:n,onCancel:l}=e;const i=Va(),s=Object(r.useRef)("auto"===o?"spell":o),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.focus()}}))),Object(p.jsxs)(Ti,{className:"pendulum-frame-picker",...xa({stopPropagation:!0,optionLength:a.length,setFocus:u,onTrigger:()=>{d>=0&&n(a[d].value)},onCancel:l}),children:[Object(p.jsx)(Vo.a,{ref:c,className:"frame-auto-checkbox",checked:"auto"===o,onChange:e=>{n(e.target.checked?"auto":s.current)},children:i["input.frame.auto"]}),Object(p.jsx)(en,{className:"frame-radio",value:o,onChange:n,optionList:a})]})})),Pi=Ba.b.div`
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
`,Hi=Ba.b.div`
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
    .joined-row {
        position: 'relative';
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
            margin-right: var(--spacing-lg);
        }
        .ant-checkbox-wrapper + .ant-checkbox-wrapper {
            margin-left: 0;
        }
    }
`,$i=Object(r.forwardRef)(((e,t)=>{let{showCreativeOption:a,showExtraDecorativeOption:o,onTakePicker:n}=e;const l=Va(),{isPendulum:i,pendulumFrame:s,pendulumScaleBlue:c,pendulumScaleRed:d,setCard:u,getUpdater:m}=jr(Object(wo.useShallow)((e=>{let{card:{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:o},setCard:n,getUpdater:l}=e;return{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:o,setCard:n,getUpdater:l}}))),b=Object(r.useRef)(null),f=Object(r.useRef)(null),h=Object(r.useRef)(null),[g,v]=Object(r.useState)(!0),[y,x]=Object(r.useState)(!1),j=Object(r.useRef)("auto"===s?"spell":s),O=Object(r.useMemo)((()=>m("pendulumScaleRed")),[m]),w=Object(r.useMemo)((()=>m("pendulumScaleBlue")),[m]),S=Object(r.useMemo)((()=>m("pendulumEffect",void 0,"debounce")),[m]),k=Object(r.useMemo)((()=>Cl().filter((e=>o||"normal"===e.edition))),[o]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=h.current)||void 0===t||t.setValue(a))}})));const F=ue[s];return Object(p.jsxs)(Hi,{className:"pendulum-input",children:[Object(p.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(p.jsx)("div",{className:"pendulum-checkbox",children:Object(p.jsx)(Vo.a,{onChange:e=>u((t=>{const a=e.target.checked;return{...t,isPendulum:a,isLink:!a&&t.isLink}})),checked:i,children:l["input.pendulum.label"]})}),a&&Object(p.jsx)($o.a,{visible:y,onVisibleChange:x,trigger:["hover","click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(Wi,{ref:f,frameList:k,pendulumFrame:s,onCancel:()=>{var e;x(!1),null===(e=b.current)||void 0===e||e.focus()},onChange:e=>{const t=`${e}`;"auto"!==t&&(j.current=t),u((e=>({...e,pendulumFrame:t})))}})}),children:Object(p.jsxs)(Pi,{ref:b,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return x(!0),setTimeout((()=>{var e;null===(e=f.current)||void 0===e||e.focus()}),200),!1},children:[Object(p.jsxs)("span",{className:"pendulum-frame-label",children:[l["input.bottom-frame.label"]," ",Object(p.jsx)(Bl.a,{})]}),F?Object(p.jsx)(Ln,{className:"pendulum-frame-info-block",...F}):Object(p.jsx)(Ln,{className:"pendulum-frame-info-block",nameKey:"input.frame.auto"})]})}),i&&a&&Object(p.jsx)(Vo.a,{onChange:e=>v(e.target.checked),checked:g,children:l["input.mirror-scale.label"]})]}),i&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(Kn.a,{addonBefore:Object(p.jsx)("span",{children:l["input.scale.label"](Object(p.jsx)("span",{className:"blue-scale",children:l["input.scale.blue.label"]},"blue-scale"))}),value:c,onChange:e=>{w(e),g&&O(e)}})}),Object(p.jsx)("div",{children:Object(p.jsx)(Kn.a,{addonBefore:Object(p.jsx)("span",{children:l["input.scale.label"](Object(p.jsx)("span",{className:"red-scale",children:l["input.scale.red.label"]},"red-scale"))}),value:d,onChange:e=>{g&&w(e),O(e)}})}),Object(p.jsx)("div",{className:"joined-row",children:Object(p.jsx)(Oi,{ref:h,id:"pendulum-effect",allowHotkey:!0,defaultValue:jr.getState().card.pendulumEffect,onChange:S,onTakePicker:n,autoSize:{minRows:5}})})]})]})})),Ui=Ba.b.div`
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
`,Yi=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=Va(),{frame:n,cardIcon:l,format:i,furiganaHelper:s,condenseTolerant:c,setCard:d,getUpdater:u}=jr(Object(wo.useShallow)((e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:o,effectStyle:n},setCard:l,getUpdater:i}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:o,condenseTolerant:null===n||void 0===n?void 0:n.condenseTolerant,setCard:l,getUpdater:i}}))),m="ocg"===i?"\uff0f":"/",b=Object(r.useRef)(null),f=Object(r.useMemo)((()=>u("typeAbility",(e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map((e=>`${e}`.trim())).filter((e=>"string"===typeof e&&e.length>0))),"debounce")),[u]),h=Object(r.useCallback)((e=>d((t=>({...t,furiganaHelper:e.target.checked})))),[d]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{typeAbility:a}=e;a&&(null===(t=b.current)||void 0===t||t.setValue(a.join(m)))}})));const g="auto"===l?Rt({frame:n})?"input.type.monster.label":"input.type.st.label":"st"===j[l].value?"input.type.st.label":"input.type.monster.label",v="ocg"===i;return Object(p.jsxs)(Ui,{className:`post-pendulum-input variant-${i}`,children:[Object(p.jsx)(wi,{ref:b,addonBefore:o[g],id:"type-ability",defaultValue:jr.getState().card.typeAbility.join(m),onChange:f,onTakePicker:a}),v&&Object(p.jsx)(Ea.a,{overlay:o["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(p.jsx)(Vo.a,{className:"input-kanji-helper",onChange:h,checked:s,children:o["input.furigana-helper.label"]})}),Object(p.jsx)(en,{className:"condense-input",value:`${c}`,onChange:e=>(e=>{d((t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}})))})(e),optionList:Ll,children:Object(p.jsxs)("span",{children:[o["input.condense.label"]," ",Object(p.jsx)(Ko,{content:Object(p.jsx)(rn,{children:o["input.condense.tooltip"]})})]})}),Object(p.jsx)(Cn,{})]})})),Ki=Ba.b.div`
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
`,Gi=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],Vi=e=>{let{value:t="",onChange:a}=e;const[o,n]=Object(r.useState)(t),[l,i]=Object(r.useState)((()=>({hex:Ca.test(t)?t:"#000000",rgb:Ta(t,!1)})));return Object(r.useEffect)((()=>{const e=o.startsWith("#")?o:`#${o}`;Ca.test(e)&&(n(e),i({hex:e,rgb:Ta(e,!1)}),null===a||void 0===a||a(e))}),[o]),Object(r.useEffect)((()=>{n(t),i({hex:Ca.test(t)?t:"#000000",rgb:Ta(t,!1)})}),[t]),Object(p.jsxs)(Ki,{children:[Object(p.jsx)("div",{className:"color-list",children:Gi.map((e=>{let{hex:t,rgb:r}=e;const o=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?"#000000":"#FFFFFF";return Object(p.jsx)("div",{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:l.hex.toUpperCase()===t&&Object(p.jsx)("div",{className:"active-dot",style:{backgroundColor:o}})},t)}))}),Object(p.jsxs)("div",{className:"color-input",children:[Object(p.jsx)("div",{className:"color-block static-block",style:{backgroundColor:l.hex}}),Object(p.jsx)(Kn.a,{size:"small",value:o,onChange:e=>{n(e.target.value)}})]})]})},Xi=Ba.b.div`
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
`,_i=Ba.b.div`
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
`,qi={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},Ji=()=>{const e=Va(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:o,pendulumStyle:n,pendulumTextStyle:l,setCard:i,statTextStyle:s,typeTextStyle:c}=jr(Object(wo.useShallow)((e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:o,pendulumStyle:n,pendulumTextStyle:l,statTextStyle:i,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:o,pendulumStyle:n,pendulumTextStyle:l,setCard:c,statTextStyle:i,typeTextStyle:s}}))),d=[{info:qi.effectTextStyle,value:r,extraValue:a},{info:qi.pendulumTextStyle,value:l,extraValue:n},{info:qi.statTextStyle,value:s},{info:qi.typeTextStyle,value:c},{info:qi.otherTextStyle,value:o}];return Object(p.jsx)($o.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(p.jsx)("div",{className:"overlay-event-absorber",children:Object(p.jsx)(_i,{className:"custom-style-picker",children:d.map((a=>{let{info:r,value:o,extraValue:n}=a;const{keyName:l,labelKey:s,extraKeyname:c}=r,[d,u,m,f]=o,{upSize:h,fontStyle:g}=null!==n&&void 0!==n?n:{};return Object(p.jsxs)("div",{className:"style-section",children:[Object(p.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(p.jsx)("span",{children:e[s]}),Object(p.jsx)(Vo.a,{checked:d,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[l]:[a,...o.slice(1)]}}))},children:e["input.text-style.custom.label"]})]}),d&&Object(p.jsxs)("div",{className:"style-picker-section",children:["string"===typeof g&&"tcg"===t&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("h2",{className:"font-style-picker",children:[Object(p.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(p.jsx)(en,{className:"inline-radio-train",value:g,optionList:[{label:Object(p.jsx)(b.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{i((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t}))}})]})}),"number"===typeof h&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("h2",{className:"size-picker",children:[Object(p.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(p.jsx)(en,{className:"inline-radio-train",value:h,optionList:[{label:Object(p.jsx)(b.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{i((t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t}))}})]})}),Object(p.jsx)("h2",{children:Object(p.jsx)(Vo.a,{className:"shadow-checkbox",checked:m,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[l]:[...o.slice(0,2),a,o[3]]}}))},children:Object(p.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(p.jsx)(Vi,{value:f,onChange:e=>i((t=>({...t,[l]:[...o.slice(0,3),e]})))}),Object(p.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(p.jsx)(El.b,{colors:ct,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{i((t=>({...t,[l]:[o[0],e.hex,...o.slice(2,4)]})))}})]})]},l)}))})}),children:Object(p.jsxs)(Xi,{className:"text-style-preview",children:[Object(p.jsx)("div",{className:"text-style-grid",children:d.map((e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:o}=t,[n,l,i,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(p.jsx)("div",{className:"text-style-preview-section",style:{background:n?"#eaeaea":"var(--sub-level-4)",color:0!==(null!==l&&void 0!==l?l:"").length&&n?l:"#000000",textShadow:n&&i?`0 0 2px ${s}`:"none",fontStyle:n&&"italic"===d?"italic":"normal"},children:c&&n?Object(p.jsxs)("div",{children:["+",c]}):"Auto"},o)}))}),Object(p.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(538);const Zi=Object(r.forwardRef)(((e,t)=>{let{artworkCanvas:a,backgroundCanvas:o,onCropChange:n,onTainted:l,onSourceLoaded:i}=e;const s=Va(),{format:c,frame:d,foil:u,finish:m,opacity:g,nameStyleType:v,nameStyle:y,isPendulum:x,isLink:j,attribute:O,getUpdater:w,setCard:S}=jr(Object(wo.useShallow)((e=>{let{card:{format:t,frame:a,foil:r,finish:o,opacity:n,nameStyleType:l,nameStyle:i,isPendulum:s,isLink:c,attribute:d},getUpdater:u,setCard:m}=e;return{format:t,frame:a,foil:r,finish:o,opacity:n,nameStyleType:l,nameStyle:i,isPendulum:s,isLink:c,attribute:d,getUpdater:u,setCard:m}}))),{setting:k}=Or(),{showCreativeOption:F,showExtraDecorativeOption:C}=k,T=Object(r.useRef)(null),N=Rt({frame:d}),[L,R]=Object(r.useState)(0),D=Object(r.useMemo)((()=>{return e={normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]},H(e).map((e=>{let{color:t,name:a,label:r}=e;return{label:"normal"===a?Object(p.jsx)(b.a,{}):r,value:a,props:{style:{color:t,fontWeight:"bold"}}}}));var e}),[s]),E=Object(r.useRef)(null),B=Object(r.useRef)(null),I=Object(r.useRef)(null),A=Object(r.useRef)(null),z=Object(r.useRef)(null),M=Object(r.useRef)(null),W=Object(r.useRef)(null),[P,$]=Object(r.useState)({id:"",setValue:()=>{}}),U=Object(r.useMemo)((()=>w("foil")),[w]),Y=Object(r.useMemo)((()=>w("finish")),[w]),K=Object(r.useCallback)((e=>S((t=>({...t,opacity:e})))),[S]),G=Object(r.useMemo)((()=>w("attribute")),[w]),V=Object(r.useCallback)(((e,t)=>{S((a=>({...a,nameStyleType:e,nameStyle:t})))}),[S]),X=Object(r.useMemo)((()=>((e,t,a)=>h.map((a=>{let{name:r,nameKey:o,isCreative:n}=a;return{label:r===f?Object(p.jsx)(b.a,{}):Object(p.jsx)(Ea.a,{overlay:t[o],children:Object(p.jsx)("img",{alt:t[o],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:n}})).filter((e=>{let{isCreative:t}=e;return!1===t||t===a})))(c,s,F)),[c,s,F]);return Object(r.useEffect)((()=>{var e;null===(e=T.current)||void 0===e||e.setValue({font:y.font})}),[y]),Object(r.useEffect)((()=>{var e;null===(e=B.current)||void 0===e||e.setValue(g)}),[g]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=E.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=B.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,o,n,l,i;R((e=>e+1));const{name:s,art:c,artCrop:d,artData:u,artSource:m,background:b,backgroundCrop:p,backgroundData:f,backgroundSource:h,opacity:g,setId:v,pendulumEffect:y,typeAbility:x,effect:j,atk:O,def:w,creator:S,password:k}=e;null===(t=E.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:m}),null===(a=B.current)||void 0===a||a.setValue({...g,background:b,backgroundCrop:p,backgroundData:f,backgroundSource:h}),null===(r=I.current)||void 0===r||r.setValue({name:s,setId:v}),null===(o=A.current)||void 0===o||o.setValue({pendulumEffect:y}),null===(n=z.current)||void 0===n||n.setValue(j),null===(l=M.current)||void 0===l||l.setValue({typeAbility:x}),null===(i=W.current)||void 0===i||i.setValue({atk:O,def:w,creator:S,password:k})}}))),Object(p.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(p.jsx)(vn,{}),Object(p.jsx)("br",{}),Object(p.jsx)(fn,{}),Object(p.jsxs)("div",{className:"card-overlay-input",children:[Object(p.jsx)(Ri,{className:"format-radio",value:c,onChange:e=>{S((t=>{var a,r,o,n,l;const i=Wa(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:b,pendulumEffect:p}=i;return null===(a=I.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=z.current)||void 0===r||r.setValue(d),null===(o=A.current)||void 0===o||o.setValue({pendulumEffect:p}),null===(n=M.current)||void 0===n||n.setValue({typeAbility:u}),null===(l=W.current)||void 0===l||l.setValue({creator:b,password:m}),i}))},optionList:Sl,children:Object(p.jsx)("span",{children:s["input.format.label"]})}),Object(p.jsx)(en,{className:"foil-radio",value:u,onChange:U,optionList:D,children:Object(p.jsx)("span",{children:s["input.foil.label"]})}),C&&Object(p.jsx)(oi,{className:"finish-checkbox",value:m,onChange:Y,optionList:kl,children:Object(p.jsx)("span",{children:s["input.finish.label"]})})]}),F&&Object(p.jsxs)("div",{className:"card-layout-input",children:[Object(p.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(p.jsx)(Ko,{content:Object(p.jsx)(rn,{children:s["input.layout.tooltip"]})})]}),Object(p.jsx)(ui,{ref:B,defaultValue:g,receivingCanvas:o,onChange:K,onTainted:l,onCropChange:n,onSourceLoaded:i})]}),Object(p.jsx)(ai,{onSTFrameChange:e=>{var t;return null===(t=M.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=W.current)||void 0===t?void 0:t.setValue({password:e})}}),Object(p.jsxs)(Li,{className:"name-style-id-input",children:[Object(p.jsx)(Mi,{ref:I,onTakePicker:$}),Object(p.jsx)(Ql,{ref:T,frameInfo:ue[d],defaultType:v,defaultValue:y,showExtraDecorativeOption:C,onChange:V},L),Object(p.jsx)(gi,{isLink:j,isMonster:N,showCreativeOption:F})]}),Object(p.jsxs)("div",{className:"main-info",children:[Object(p.jsxs)("div",{className:"main-info-first",children:[Object(p.jsx)(en,{className:"fill-input-train attribute-input",value:O,onChange:G,optionList:X,children:Object(p.jsx)("span",{children:s["input.attribute.label"]})}),(x||F)&&Object(p.jsx)($i,{ref:A,showCreativeOption:F,showExtraDecorativeOption:C,onTakePicker:$}),Object(p.jsx)(Yi,{ref:M,onTakePicker:$}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(p.jsx)(nl,{className:"standalone-label",children:s["input.effect.label"]}),F?Object(p.jsx)(Ji,{}):Object(p.jsx)("div",{}),Object(p.jsx)(Dl,{targetId:P.id,onPick:P.setValue})]}),Object(p.jsx)(Si,{ref:z,onTakePicker:$})]}),Object(p.jsx)(Ei,{ref:W,isMonster:N,showCreativeOption:F,onTakePicker:$})]}),Object(p.jsx)("div",{className:"main-info-second",children:Object(p.jsx)(Ii,{ref:E,receivingCanvas:a,showExtraDecorativeOption:C,onSourceLoaded:i,onTainted:l,onCropChange:n})})]})]})}));var Qi=a(546);const{height:es,width:ts,cardBorder:as}=s,rs=68/ts,os=Ba.b.div`
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
            top: 19px;
            left: 20px;
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
`,ns=e=>{var t,a,o,n;let{index:l,card:i,active:s,language:d,onDuplicate:u,onSelect:b,onDelete:f,style:h}=e;const[v,y]=Object(r.useState)(!1),{art:x,artCrop:j,artData:O,artFit:w,artSource:S,atk:k,attribute:F,background:C,backgroundCrop:T,backgroundData:N,backgroundFit:L,backgroundSource:R,backgroundType:D,cardIcon:E,def:B,format:I,frame:A,hasBackground:z,isLink:M,isPendulum:W,linkMap:P,name:H,opacity:$,pendulumFrame:U,pendulumScaleBlue:Y,pendulumScaleRed:K,setId:G,star:V,subFamily:X,typeAbility:_}=i,q=_t(H),J="auto"===U?W?"spell":A:U,Z="offline"===S?x?O:"https://i.imgur.com/jjtCuG5.png":x,Q="offline"===R?C?N:"https://imgur.com/pdSVzUZ.png":C,ee="auto"===E?Dt(A):E,te="st"===ee?X:ee,ae=Rt(i),re=Lt(i),oe="auto"!==U||W?!!(k||B||M&&P.length):ae,ne=_.join(" / "),le=m(W,$),{artFrameHeight:ie,artFrameWidth:se}=le;return Object(p.jsxs)(os,{className:La("truncate",s?"active":"",l%2===0?"alternative-color":""),onClick:()=>b(i),style:h,children:[Object(p.jsxs)("div",{className:"left-slot",children:[Object(p.jsx)("div",{className:"card-frame top-frame",style:{backgroundColor:null===(t=ue[A])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=ue[A])||void 0===a?void 0:a.labelBackgroundImage}}),Object(p.jsx)("div",{className:"card-frame bottom-frame",style:{backgroundColor:null===(o=ue[J])||void 0===o?void 0:o.labelBackgroundColor,backgroundImage:null===(n=ue[J])||void 0===n?void 0:n.labelBackgroundImage}}),Object(p.jsxs)("a",{className:"card-art-container",href:Z,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:se*rs,height:ie*rs,top:(es-ts)/2/2*rs,left:(ts-se)/2*rs,backgroundColor:c},children:[z&&Object(p.jsx)(is,{className:"background-art",artLink:Q,name:q+" - background",fit:L,crop:T,canvasCoordinate:m(W,{...$,boundless:"fit"!==D})}),Object(p.jsx)(is,{className:"foreground-art",artLink:Z,name:q,fit:w,crop:j,canvasCoordinate:le})]}),M&&[...Array(9)].map(((e,t)=>4===t?null:Object(p.jsx)("div",{className:La(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,P.includes(`${t+1}`)?"marker-checked":""),style:{transform:`rotate(${pe[t]}deg) translateY(${fe[t]}px)`}},`link-${t}`))),W&&Object(p.jsx)("div",{className:"pendulum-scale blue-scale",children:Y}),W&&Object(p.jsx)("div",{className:"pendulum-scale red-scale",children:K})]}),Object(p.jsxs)("div",{className:"right-slot truncate",children:[Object(p.jsx)("div",{className:"first-row truncate",children:q}),Object(p.jsxs)("div",{className:"second-row truncate",children:[re||"NONE"===F?null:Object(p.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${I}-${F.toLowerCase()}.png`,alt:"Icon"}),_.length>0&&Object(p.jsx)("div",{className:"truncate",children:ne}),"st"!==ee&&Object(p.jsx)("div",{className:"padding"}),!M&&te!==g&&"none"!==ee&&Object(p.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${te.toLowerCase()}.png`,alt:"Icon"}),!M&&!re&&"st"!==ee&&Object(p.jsx)("span",{className:La("star-content truncate",ne.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof V?V:""!==V?`"${V}"`:""})]}),Object(p.jsxs)("div",{className:"third-row truncate",children:[oe&&Object(p.jsx)("div",{children:k}),oe?Object(p.jsx)("div",{children:"\xa0/\xa0"}):Object(p.jsx)("div",{children:"\xa0"}),oe&&Object(p.jsx)("div",{children:M?`Link ${P.length}`:B}),G&&Object(p.jsx)("div",{className:"set-id",children:G})]})]}),Object(p.jsx)("div",{className:La("action-slot",v?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(p.jsxs)("div",{className:"action-container",children:[Object(p.jsx)(Ea.a,{placement:"left",title:d["manager.button.duplicate.tooltip"],children:Object(p.jsx)(bl.a,{className:"action-button action-duplicate",onClick:()=>u(i)})}),Object(p.jsx)(Qi.a,{placement:"left",title:d["manager.button.delete.label"],onVisibleChange:e=>y(e),onConfirm:()=>f(i.id),okText:d["manager.button.delete.confirm.label"],cancelText:d["manager.button.delete.cancel.label"],children:Object(p.jsx)(Ea.a,{placement:"left",title:d["manager.button.delete.tooltip"],children:Object(p.jsx)(za.a,{className:"action-button action-delete"})})})]})})]})},ls=(e,t,a,r,o)=>{var n;const{artWidth:l,artY:i,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:b,y:p}=null!==(n=o?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==n?n:{},f=e*((null!==u&&void 0!==u?u:0)/100),h=t*((null!==m&&void 0!==m?m:0)/100),g=l*rs/(f<=0?1:f);return{top:(null!==p&&void 0!==p?p:0)/100*-t*g,left:(null!==b&&void 0!==b?b:0)/100*-e*g,width:e*g,height:o?t*(l/s*rs/(h<=0?1:h)):void 0,transform:`translateX(${-(l===c?0:(ts-c)/2-as)*rs}px) translateY(${-(d-i)*rs}px)`}},is=e=>{let{artLink:t,name:a,crop:o,className:n,fit:l,canvasCoordinate:i,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,b]=Object(r.useState)((()=>{var e,t,a,r;return ls(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,i,o,l)}));return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&d(t)}),500),()=>{e=!1}}),[t]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{var t,a,r,n;e&&b(ls(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(n=u.current)||void 0===n?void 0:n.naturalHeight)&&void 0!==r?r:1,i,o,l))}),500),()=>{e=!1}}),[o,i,l]),Object(p.jsx)("img",{ref:u,className:La("card-art",n),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;b(ls(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,i,o,l))}})};var ss=a(291),cs=a(303);const ds=Ba.b.div`
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
`,us=e=>{let{data:t,index:a,style:r}=e;const{activeId:o,language:n,list:l,onDelete:i,onDownload:s,onDuplicate:c,onSelect:d}=t;return Object(p.jsx)(ns,{index:a,card:l[a],active:l[a].id===o,language:n,onDuplicate:c,onSelect:d,onDownload:s,onDelete:i,style:r})},ms=e=>{let{language:t,onSelect:a,onDownload:o,onRequestImport:n}=e;const{activeId:l,cardDisplayList:i,deleteCard:s,duplicateCard:c,resetFilter:d}=vr(Object(wo.useShallow)((e=>{let{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:o,resetFilter:n}=e;return{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:o,resetFilter:n}}))),[u,m]=Object(r.useState)(0),b=e=>{s(e),m((e=>e+1))};return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{if(e&&u>0){const{activeId:e,cardList:t,setCardList:r}=vr.getState(),o=t.find((t=>t.id===e));if(o)a(o);else{const e={id:Object(T.a)(),...it()};r([e],e.name)}}}),500),()=>{e=!1}}),[a,u]),Object(p.jsxs)(ds,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Object(p.jsx)("div",{className:"list-container",children:Object(p.jsx)(ss.a,{children:e=>{let{height:r,width:n}=e;return Object(p.jsx)(cs.a,{className:"List",height:r,itemCount:i.length,itemSize:68,itemData:{list:i,language:t,activeId:l,onDuplicate:c,onSelect:a,onDownload:o,onDelete:b},overscanCount:5,width:n,children:us})}})}),0===i.length&&Object(p.jsxs)("div",{className:"no-card",children:[Object(p.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(p.jsx)("div",{className:"reset-filter",onClick:d,children:t["manager.button.search.button.reset.label"]})]}),Object(p.jsx)(Lo.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var bs=a(599),ps=a(561);const{Panel:fs}=ps.a,hs=Ba.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,gs=Object(Ba.b)(tn)`
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
`,vs=Object(Ba.b)(Ra.a)`
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
                ${gs} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,ys=e=>{let{data:t,children:a}=e;const[o,n]=Object(r.useState)(!1);return Object(p.jsxs)(gs,{onClick:e=>{var a;e.stopPropagation(),a=t,ul()(a),n(!0),setTimeout((()=>{n(!1)}),1e3)},children:[o?Object(p.jsx)("div",{className:"copiable-overlay",children:Object(p.jsx)(ml.a,{})}):null,a]})},xs=e=>{let{language:t}=e;const[a,o]=Object(r.useState)(!1);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(hs,{className:"manager-toggle-button",onClick:()=>o(!0),children:t["manager.header.button.template.label"]}),Object(p.jsx)(vs,{visible:a,onCancel:()=>o(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(p.jsxs)("div",{className:"sample-modal-container",children:[Object(p.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(p.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(p.jsx)("div",{className:"download-button",children:Object(p.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(p.jsx)(Lo.a,{children:t["manager.template.download.label"]})})}),Object(p.jsx)(ps.a,{ghost:!0,children:Object(p.jsx)(fs,{header:Object(p.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(p.jsxs)("table",{className:"option-container",children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(p.jsx)("th",{children:Object(p.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(p.jsx)("div",{children:["tcg","ocg"].map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Frame",altField:"Bottom Frame",value:Object(p.jsx)("div",{children:me.map((e=>{let{name:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Attribute",value:Object(p.jsx)("div",{children:h.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Spell/Trap Icon",value:Object(p.jsx)("div",{children:v.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Sticker",value:Object(p.jsx)("div",{children:x.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Foil",value:Object(p.jsx)("div",{children:H().filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Card Finish",value:Object(p.jsxs)("div",{children:[Object.values(M).map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)})),Object(p.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(p.jsx)("div",{children:Object.values(W).map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Star Type",value:Object(p.jsx)("div",{children:["number","text"].map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Star Alignment",value:Object(p.jsx)("div",{children:["left","center","right"].map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Card Icon Type",value:Object(p.jsx)("div",{children:O.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Background Type",value:Object(p.jsx)("div",{children:i().map((e=>{let{value:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})},{field:"Condense Rate",value:Object(p.jsx)("div",{children:Object.keys(Z).map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Name Style Type",value:Object(p.jsx)("div",{children:["predefined","custom"].map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Name Style - Font",value:Object(p.jsx)("div",{children:Object(p.jsx)(ys,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(p.jsx)("div",{children:Object.keys(S).map((e=>Object(p.jsx)(ys,{data:e,children:e},e)))})},{field:"Name Style - Pattern",value:Object(p.jsx)("div",{children:C.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{key:t}=e;return Object(p.jsx)(ys,{data:t,children:t},t)}))})}].map((e=>{let{field:t,altField:a,value:r}=e;return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[Object(p.jsx)(gs,{children:t}),a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)(gs,{children:a})]})]}),Object(p.jsx)("td",{children:r})]},t)}))]})},"sample-option")})]})})]})};var js=a(159);const Os=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),ws=Ba.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,Ss=Object(Ba.b)(jn.a)`
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
`,ks=Object(r.forwardRef)(((e,t)=>{let{language:a,onVisibleChange:o,onSelect:n,onDownload:l,onRequestImport:i}=e;const s="list-upload-id",c=Object(r.useRef)(null),{cardList:d,changeEditStatus:u,pendingActiveCard:m,setActiveId:b,setCardList:f,setFilterFunction:h,setListName:g,setPendingActiveCard:v,sortList:y,toggleVisible:x,visible:j}=vr(Object(wo.useShallow)((e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:o,setCardList:n,setFilterFunction:l,setListName:i,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:o,setCardList:n,setFilterFunction:l,setListName:i,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}}))),O=Or((e=>e.setting.exportFormat)),[w,S]=Object(r.useState)(0),[k,F]=Object(r.useState)(!1),[C,T]=Object(r.useState)(!1),N=$a()((e=>{h({type:"text",value:e.target.value})}),250),L=Object(r.useCallback)((e=>{n(e),b(e.id)}),[n,b]);return Object(r.useEffect)((()=>{m&&(n(m),b(m.id),v())}),[n,m,b,v]),Object(r.useEffect)((()=>{localStorage.setItem("manager-panel-visible",j.toString()),o(j)}),[o,j]),Object(r.useEffect)((()=>{const e=vr.subscribe((e=>e.filterResetSignal),(e=>{e&&S((e=>e+1))}));return()=>{e()}}),[]),Object(r.useImperativeHandle)(t,(()=>({})),[]),Object(p.jsx)(ws,{children:Object(p.jsx)(Ss,{title:Object(p.jsxs)("div",{className:"card-manager-header truncate",children:[Object(p.jsx)(Cs,{className:"manager-label-container truncate",language:a,children:d.length}),Object(p.jsxs)("div",{className:"manager-button-container",children:[Object(p.jsx)("div",{className:"manager-button",children:Object(p.jsx)(xs,{language:a})}),Object(p.jsx)(Ro.a,{overlay:Object(p.jsx)(Hn.a,{children:[{value:hr.level.key,label:a["manager.button.sort.level.label"]},{value:hr.name.key,label:a["manager.button.sort.name.label"]},{value:hr.atk.key,label:a["manager.button.sort.atk.label"]},{value:hr.def.key,label:a["manager.button.sort.def.label"]},{value:hr.set.key,label:a["manager.button.sort.set-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(p.jsx)(Hn.a.Item,{onClick:()=>y(t),children:a},t)}))}),children:Object(p.jsx)("div",{className:"manager-button",children:Object(p.jsx)(Ci.a,{})})}),Object(p.jsx)(Ea.a,{title:a["manager.header.button.download.tooltip"],children:Object(p.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(T(!0),Os.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=qa.length;let r="";for(let o=0;o<e.length;o++){const n=(e,t)=>{const a=er[e];"number"===typeof a&&("string"===typeof t&&(l[a]=t),"number"===typeof t&&(l[a]=`${t}`),"boolean"===typeof t&&(l[a]=`${t}`),null==t&&(l[a]=""))},l=Array(a).map((()=>"")),{art:i,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:m,attribute:b,background:p,backgroundCrop:f,backgroundFit:h,backgroundSource:g,backgroundType:v,cardIcon:y,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:S,externalInfo:k,finish:F,foil:C,format:T,frame:N,furiganaHelper:L,hasBackground:R,isDuelTerminalCard:D,isFirstEdition:E,isLegacyCard:B,isLimitedEdition:I,isLink:A,isPendulum:z,isSpeedCard:M,linkMap:W,name:P,nameStyle:H,nameStyleType:$,opacity:U,otherTextStyle:Y,password:K,pendulumEffect:G,pendulumFrame:V,pendulumScaleBlue:X,pendulumScaleRed:_,pendulumStyle:q,pendulumTextStyle:J,setId:Z,star:Q,starAlignment:ee,statTextStyle:te,sticker:ae,subFamily:re,typeAbility:oe,typeTextStyle:ne}=e[o],le=JSON.stringify(k);n("Format",T),n("Frame",N),n("Name",P),n("Attribute",b),n("Star",`${Q}`),n("Spell/Trap Icon",re),n("Art Link",i),n("Type Ability",oe.join("/")),n("Effect",O),n("Set Id",Z),n("ATK",m),n("DEF",j),n("Password",K),n("Sticker",ae),n("Copyright",x),n("Is Pendulum",z),n("Pendulum Effect",G),n("Pendulum Scale Red",_),n("Pendulum Scale Blue",X),n("Is Link",null!==A&&void 0!==A?A:void 0),n("Link - Top Left Arrow",W.includes("1")),n("Link - Top Arrow",W.includes("2")),n("Link - Top Right Arrow",W.includes("3")),n("Link - Left Arrow",W.includes("4")),n("Link - Right Arrow",W.includes("6")),n("Link - Bottom Left Arrow",W.includes("7")),n("Link - Bottom Arrow",W.includes("8")),n("Link - Bottom Right Arrow",W.includes("9")),n("Is First Edition",E),n("Is Speed Card",M),n("Is Limited Edition",I),n("Is Duel Terminal Card",D),n("Is Legacy Card",B),n("Foil",C),n("Art Finish",c),n("Card Finish",F.join(",")),n("Art Crop - X (%)",s.x),n("Art Crop - Y (%)",s.y),n("Art Crop - Width (%)",s.width),n("Art Crop - Height (%)",s.height),n("Is Using Full Art",d),n("Star Type","number"===typeof Q&&Q>=0&&Q<=13?"number":"text"),n("Star Alignment",ee),n("Card Icon Type",y),n("Opacity - Body",U.body),n("Opacity - Pendulum",U.pendulum),n("Opacity - Text",U.text),n("Opacity - Name",U.name),n("Opacity - Base Fill",U.baseFill),n("Opacity - Art Border",U.artBorder),n("Opacity - Name Border",U.nameBorder),n("Opacity - Boundless",U.boundless),n("Has Background",R),n("Background Link",p),n("Is Using Full Background",h),n("Background Type",v),n("Background Crop - X (%)",f.x),n("Background Crop - Y (%)",f.y),n("Background Crop - Width (%)",f.width),n("Background Crop - Height (%)",f.height),n("Bottom Frame",V),n("Condense Rate",w.condenseTolerant),n("Use Furigana Helper",L),n("Name Style Type",$),n("Name Style - Font",H.font),n("Name Style - Fill Style",H.fillStyle),n("Name Style - Headtext Fill Style",H.headTextFillStyle),n("Name Style - Shadow Color",H.shadowColor),n("Name Style - Shadow Offset Y",H.shadowOffsetY),n("Name Style - Shadow Offset X",H.shadowOffsetX),n("Name Style - Shadow Blur",H.shadowBlur),n("Name Style - Has Shadow",H.hasShadow),n("Name Style - Line Color",H.lineColor),n("Name Style - Line Width",H.lineWidth),n("Name Style - Line Offset Y",H.lineOffsetY),n("Name Style - Line Offset X",H.lineOffsetX),n("Name Style - Has Outline",H.hasOutline),n("Name Style - Gradient Angle",H.gradientAngle),n("Name Style - Gradient Color",H.gradientColor),n("Name Style - Has Gradient",H.hasGradient),n("Name Style - Emboss Pitch",H.embossPitch),n("Name Style - Emboss Yaw",H.embossYaw),n("Name Style - Has Emboss",H.hasEmboss),n("Name Style - Preset",H.preset),n("Name Style - Pattern",H.pattern),n("Stat Style - Is Custom",te[0]),n("Stat Style - Fill Color",te[1]),n("Stat Style - Has Shadow",te[2]),n("Stat Style - Shadow Color",te[3]),n("Type Style - Is Custom",ne[0]),n("Type Style - Fill Color",ne[1]),n("Type Style - Has Shadow",ne[2]),n("Type Style - Shadow Color",ne[3]),n("Effect Style - Is Custom",S[0]),n("Effect Style - Fill Color",S[1]),n("Effect Style - Has Shadow",S[2]),n("Effect Style - Shadow Color",S[3]),n("Effect Style - Upsize",w.upSize),n("Effect Style - Font Style",w.fontStyle),n("Pendulum Effect Style - Is Custom",J[0]),n("Pendulum Effect Style - Fill Color",J[1]),n("Pendulum Effect Style - Has Shadow",J[2]),n("Pendulum Effect Style - Shadow Color",J[3]),n("Pendulum Effect Style - Upsize",q.upSize),n("Pendulum Effect Style - Font Style",q.fontStyle),n("Other Style - Is Custom",Y[0]),n("Other Style - Fill Color",Y[1]),n("Other Style - Has Shadow",Y[2]),n("Other Style - Shadow Color",Y[3]),n("External Info (JSON)","{}"===le?"":le),("offline"===u||R&&"offline"===g)&&(r="offline-data"),t.push(l.map(tr).join(","))}return{value:[qa.join(","),t.join("\n")].join("\n"),error:r}})(vr.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&Da.a.error({message:t,description:r})}switch(O){case"xlsx":{const e=js.a.read(t,{type:"string"});js.a.writeFile(e,`${vr.getState().listName}.xlsx`);break}default:Jt(vr.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}u("download")}catch(t){}T(!1)},children:C?Object(p.jsx)(bs.a,{}):Object(p.jsx)(_n.a,{})})}),Object(p.jsx)(Ea.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(p.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(s);e&&!k&&e.click()},children:[Object(p.jsx)("input",{ref:c,type:"file",id:s,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=c.current)||void 0===t?void 0:t.files,{isListDirty:o}=vr.getState(),l=()=>{S((e=>e+1)),F(!1),Da.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let i=!0;if(o&&(i=window.confirm(a["prompt.warning.on-import.label"])),i&&r&&r[0]){F(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=js.a.read(e,{codepage:65001}),o=js.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),i=lr(o);i.length>0?(f(i,i[0].id),g(t),S((e=>e+1)),n(i[0]),F(!1)):l()}catch(e){console.error(e),l()}}else S((e=>e+1)),F(!1)}},`upload-${w}`),k?Object(p.jsx)(bs.a,{}):Object(p.jsx)(jl.a,{})]})},`${k}`),Object(p.jsx)("div",{className:"manager-button close-button",onClick:()=>x(!1),children:Object(p.jsx)(za.a,{})})]}),Object(p.jsx)("div",{className:"card-manager-filter",children:Object(p.jsx)(Kn.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:N,onPressEnter:e=>h({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${w}`)})]}),visible:j,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:()=>null,onClose:()=>x(!1),width:280,children:Object(p.jsx)(ms,{language:a,onSelect:L,onDownload:l,onRequestImport:i})})})})),Fs=Ba.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,Cs=e=>{let{language:t,children:a,...o}=e;const{isListDirty:n,cardList:l}=vr(Object(wo.useShallow)((e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}})));return Object(r.useEffect)((()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return n&&l.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[l.length,n,t]),Object(p.jsxs)(Fs,{...o,children:[a,n&&l.length>1&&Object(p.jsx)("span",{className:"header-warning",children:"\xa0*"})]})};var Ts=a(600);const Ns=Ba.b.div`
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
        ${Ia} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,Ls=Ba.b.div`
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
`,Rs=Ba.b.div`
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
`,Ds=Ba.b.div`
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
`,Es=Ba.b.div`
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
`,Bs=Ba.b.span`
    color: var(--main-danger);
`,Is=Object(Ba.b)(nn)`
    position: absolute;
    z-index: 101;
`,As=Object(Ba.b)(Is)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,zs=Object(Ba.b)(Is)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var Ms=a(223),Ws=a(554),Ps=a(556),Hs=a(566),$s=a(569);Object(Ms.configure)({ignoreTags:[]});const Us={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:Ys,width:Ks}=s;var Gs=function(){var e,t,a,o,n,l,i;const{allowHotkey:s,softMode:c,globalScale:d}=Or(Object(wo.useShallow)((e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r}}=e;return{softMode:a,allowHotkey:t,globalScale:r}}))),{isInitiating:u,isLoading:m,language:b,isMetadataReady:f,languageInfo:h,initiate:g,loadDefaultLanguage:v}=Ga(Object(wo.useShallow)((e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:o,languageInfo:n,initiate:l,loadDefaultLanguage:i}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:o,languageInfo:n,initiate:l,loadDefaultLanguage:i}}))),[y,x]=Object(r.useState)(!0),[j,O]=Object(r.useState)(""),[w,S]=Object(r.useState)("online"),[k,F]=Object(r.useState)(!1),C=Object(r.useRef)(null),T=Object(r.useRef)(null),N=Object(r.useRef)(null),L=Object(r.useRef)(null),R=Object(r.useRef)(null),D=Object(r.useRef)(null),E=Object(r.useRef)(null),B=Object(r.useRef)(null),I=Object(r.useRef)(null),A=Object(r.useRef)(null),z=Object(r.useRef)(null),M=Object(r.useRef)(null),W=Object(r.useRef)(null),P=Object(r.useRef)(null),H=Object(r.useRef)(null),$=Object(r.useRef)(null),U=Object(r.useRef)(null),Y=Object(r.useRef)(null),K=Object(r.useRef)(null),[G]=Object(r.useState)({artworkCanvasRef:T,backgroundCanvasRef:N,exportCanvasRef:L,frameCanvasRef:D,cardIconCanvasRef:E,pendulumScaleCanvasRef:B,pendulumEffectCanvasRef:I,typeCanvasRef:A,effectCanvasRef:z,nameCanvasRef:M,statCanvasRef:W,setIdCanvasRef:P,passwordCanvasRef:H,creatorCanvasRef:$,stickerCanvasRef:U,finishCanvasRef:Y,lightboxRef:K,previewCanvasRef:R}),V=Object(r.useRef)(null),X=Object(r.useRef)(null),_=Object(r.useRef)(null),[q,J]=Object(r.useState)(0);Object(r.useEffect)((()=>{g()}),[g]),Object(r.useEffect)((()=>{f&&v()}),[f,v]),Object(r.useEffect)((()=>{["font-family","letter-spacing","--width-label"].forEach((e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=h.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")}))}),[h]),Object(r.useEffect)((()=>{var e;const t=null===(e=L.current)||void 0===e?void 0:e.getContext("2d"),a=jr.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Rr(t)),!1===u&&ko.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),o=r?Ut(JSON.parse(r)):null,n=new URLSearchParams(window.location.search).get("data");if(n){var e,t;const{card:a}=yr(n),r=Ut(a),{artSource:l,backgroundSource:i}=r;if("online"===l&&"online"===i)return yr(n).card;const s={...r};return"offline"===l&&(s.artData=null!==(e=null===o||void 0===o?void 0:o.artData)&&void 0!==e?e:""),"offline"===i&&(s.backgroundData=null!==(t=null===o||void 0===o?void 0:o.backgroundData)&&void 0!==t?t:""),s}return null!==o&&"2.1.19"===a?o:lt()}catch(a){return console.error(a),lt()}})();a(e),vr.getState().setCardList([e],e.id),x(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),Da.a.error({message:Xa()["error.load.font.tcg"](e)})},inactive:()=>{O(Xa()["error.load.font.all-tcg"]),x(!1)}})}),[u]);const{styleContent:Z}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:o,onFontInactive:n,onInactive:l}=e;const{font:i,format:s}=jr(Object(wo.useShallow)((e=>({format:e.card.format,font:e.card.nameStyle.font})))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)((()=>{("ocg"===s||"OCG"===i)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),o(),ko.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,l()},fontinactive:n}))}),[s,i,t,a,o,n,l]),{styleContent:c}})({isLanguageInitiating:u,onBeforeLoad:()=>{var e;x(!0);const t=null===(e=L.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Rr(t))},onActive:()=>{x(!1)},onInactive:()=>{O(Xa()["error.load.font.all-ocg"]),x(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),Da.a.error({message:Xa()["error.load.font.ocg"](e)})}}),[Q,ee]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=document.body.classList;c?e.add("reduced-color-motion"):e.remove("reduced-color-motion")}),[c]);const te=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||null===(t=K.current)||void 0===t||t.setVisible((t=>"boolean"===typeof e?e:!t))}),[s]),ae=Object(r.useRef)(!1),re=document.getElementById("sentry-bug-report");Object(r.useEffect)((()=>{re&&b&&!1===ae.current&&!1===Bo.f()&&(ae.current=!0,Ws.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[Ps.a(),Hs.a(),$s.a({colorScheme:"system",autoInject:!1}).attachTo(re,{formTitle:b["contributor.bug-report.tooltip"],nameLabel:b["contributor.bug-report.name.label"],namePlaceholder:b["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:b["contributor.bug-report.message.label"],messagePlaceholder:b["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:b["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:b["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:b["contributor.bug-report.cancel.label"],submitButtonLabel:b["contributor.bug-report.submit.label"],isRequiredLabel:b["contributor.bug-report.required.label"],successMessageText:b["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))}),[b,re]);const oe=Object(r.useCallback)(((e,t)=>{var a;const{addToList:r,forcePurityCheck:o,writeOnCurrentCard:n}=null!==t&&void 0!==t?t:{},{setCard:l,card:i}=jr.getState(),s=n?{...e,id:i.id}:e;r&&vr.getState().addCard(s),l(s,o),J((e=>e+1)),null===(a=C.current)||void 0===a||a.forceCardData(s),Fa()}),[]),ne=Object(r.useCallback)((async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("replace"))}),[s]),le=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=_.current)||void 0===t||t.requestImport("merge"))}),[s]),ie=Object(r.useCallback)((function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||s)if(null===e||void 0===e||e.preventDefault(),"online"===w&&null!==(t=C.current)&&void 0!==t&&t.isLoading())window.alert(b["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:jr.getState().card;null===(r=X.current)||void 0===r||r.setCardData(e)}catch(o){console.error(o),Da.a.error({message:b["error.export.message"],description:b["error.export.description"]})}}),[s,b,w]),se=Object(r.useCallback)((e=>{const{id:t,...a}=e;ie(void 0,!1,a)}),[ie]),ce=Object(r.useCallback)((function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=V.current)||void 0===t||t.download())}),[s]),de=Object(r.useMemo)((()=>({IMPORT:e=>ne(e,!0),MERGE:e=>le(e,!0),EXPORT:e=>ie(e,!0),VIEW:()=>te(!0,!0),DOWNLOAD:e=>ce(e,!0)})),[ce,ie,ne,le,te]),ue=Object(r.useCallback)((()=>{ee(!0),alert(b["prompt.download.tainted.message"])}),[b]),me=Object(r.useCallback)((e=>{var t;"anonymous"===e&&(ee(!1),null===(t=K.current)||void 0===t||t.refresh());J((e=>e+1))}),[]),be=Object(r.useCallback)(((e,t)=>{J((e=>e+1)),S(t)}),[]),pe=Object(r.useCallback)((()=>{J((e=>e+1)),ee(!0)}),[]),fe=Object(r.useCallback)((e=>{F(e)}),[]),he=m||y;return Object(p.jsx)(Ms.HotKeys,{keyMap:Us,handlers:de,children:Object(p.jsxs)("div",{id:"app",onDrop:()=>{},className:`language-${h.codeName} manager-${k?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:Na()?"-webkit-fill-available":"100vh","--card-height":Ys*d+"px","--card-width":Ks*d+"px","--global-scale":`${d}`},children:[Z&&Object(p.jsx)("link",{rel:"stylesheet",type:"text/css",href:Z}),Object(p.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[he&&Object(p.jsx)(Ds,{className:"app-loading",children:j.length>0?Object(p.jsx)(Bs,{children:j}):null!==(e=h.initialMessage)&&void 0!==e?e:""}),Object(p.jsxs)("div",{className:"card-preview-panel "+(Q?"export-tainted":"export-normal"),children:[Object(p.jsxs)(Ns,{className:"data-button-panel",children:[Object(p.jsxs)("div",{className:"imexport",children:[Object(p.jsx)(xl,{ref:X,tainted:Q,artworkCanvas:T.current,onRequireExportData:ie,onRequireDownload:()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.download()},onClose:Fa}),Object(p.jsx)("div",{}),Object(p.jsx)(wl,{ref:_,onImport:oe,onClose:Fa,allowHotkey:s,language:b})]}),Object(p.jsx)(No,{language:b}),Object(p.jsx)(cl,{ref:V,canvasMap:G,imageChangeCount:q,isTainted:Q,isInitializing:y,globalScale:d,onDownloadError:ue}),Q&&Object(p.jsx)("div",{id:"save-button-tainted",className:"save-button-container",children:Object(p.jsxs)("span",{children:[b["alert.download.tainted-first-line"],Object(p.jsx)("br",{}),b["alert.download.tainted-second-line"]," ",Object(p.jsx)(xn,{})]})})]}),Object(p.jsxs)(Ls,{className:"card-preview-container",children:[Object(p.jsx)(Ea.a,{title:b["button.reset.tooltip"],children:Object(p.jsx)(zs,{className:"reset-button",onClick:()=>{if(window.confirm(b["prompt.reset.message"])){var e;const{setCard:t,card:a}=jr.getState(),r={id:a.id,...nt()},o="tcg"===a.format?r:Wa(r,"ocg");t(o,!0),J((e=>e+1)),null===(e=C.current)||void 0===e||e.forceCardData(o)}},children:Object(p.jsx)(Ts.a,{})})}),Object(p.jsx)(Ea.a,{title:Object(p.jsxs)("div",{className:"center",children:[b["button.full-size.label"],s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(p.jsx)(As,{className:"lightbox-button",onClick:()=>te(),children:Object(p.jsx)(Dn.a,{})})}),Object(p.jsx)("canvas",{id:"preview-canvas",ref:R,width:Ks,height:Ys},(null!==(t=null===(a=K.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(p.jsxs)(Rs,{className:"card-canvas-group",children:[Object(p.jsx)("canvas",{id:"export-canvas",ref:L,width:Ks*d,height:Ys*d},(null!==(o=null===(n=K.current)||void 0===n?void 0:n.getCanvasKey())&&void 0!==o?o:0)+.1),Object(p.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(p.jsx)("canvas",{id:"frameCanvas",ref:D,width:Ks*d,height:Ys*d},null!==(l=null===(i=K.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==l?l:0),Object(p.jsx)("canvas",{id:"nameCanvas",ref:M,width:Ks*d,height:148*d}),Object(p.jsx)("canvas",{id:"cardIconCanvas",ref:E,width:Ks*d,height:222*d}),Object(p.jsx)("canvas",{id:"pendulumScaleCanvas",ref:B,width:Ks*d,height:889*d}),Object(p.jsx)("canvas",{id:"pendulumEffectCanvas",ref:I,width:Ks*d,height:889*d}),Object(p.jsx)("canvas",{id:"typeCanvas",ref:A,width:Ks*d,height:1037*d}),Object(p.jsx)("canvas",{id:"effectCanvas",ref:z,width:Ks*d,height:1111*d}),Object(p.jsx)("canvas",{id:"statCanvas",ref:W,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{id:"setIdCanvas",ref:P,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{id:"passwordCanvas",ref:H,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{id:"creatorCanvas",ref:$,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{id:"stickerCanvas",ref:U,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{id:"finishCanvas",ref:Y,width:Ks*d,height:Ys*d}),Object(p.jsx)("canvas",{className:"crop-canvas",ref:T}),Object(p.jsx)("canvas",{className:"crop-canvas",ref:N})]})]})]}),!1===he&&Object(p.jsx)(Zi,{ref:C,artworkCanvas:T.current,backgroundCanvas:N.current,onSourceLoaded:me,onCropChange:be,onTainted:pe})]}),Object(p.jsx)(ks,{language:b,onVisibleChange:fe,onDownload:se,onSelect:oe,onRequestImport:()=>{var e;null===(e=_.current)||void 0===e||e.requestImport("new")}}),Object(p.jsx)(Pn,{ref:K,globalScale:d}),Object(p.jsxs)(Es,{className:"by-me",children:["Made by Lauqerm ",Object(p.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var Vs=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,602)).then((t=>{let{getCLS:a,getFID:r,getFCP:o,getLCP:n,getTTFB:l}=t;a(e),r(e),o(e),n(e),l(e)}))};l.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Gs,{})}),document.getElementById("root")),Vs()}},[[540,1,2]]]);
//# sourceMappingURL=main.692a6e8b.chunk.js.map