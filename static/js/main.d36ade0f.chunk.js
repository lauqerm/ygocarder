(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{299:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},389:function(e,t,a){},504:function(e,t,a){},510:function(e,t,a){},511:function(e,t,a){},512:function(e,t,a){},514:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(47),i=a.n(n);a(299),a(300),a(301),a(302),a(303),a(304);const l=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,topToPendulumStructure:210,topToArtFrame:213,pendulumStructureHeight:912,leftToPendulumStructure:52,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"pendulum"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"extendedPendulum"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.057,backgroundRatio:1.057,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"truePendulum"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artRatio:1.325,type:"fullPendulum"}},p=(e,t,a)=>{const{boundless:r,body:o,pendulum:n,text:i}={...d(),...t};if("full"===a)return u.fullCard;const l=u["fit"!==a&&r||o<100?e?"fullPendulum":"fullCard":e?i<100?"extendedPendulum":n<100?"truePendulum":"pendulum":i<100?"extendedCard":"normal"];return{...l,backgroundRatio:"frame"===a?.686:l.backgroundRatio}};var m=a(545),b=a(1);const f="NONE",h=[{name:f,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0},{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0}],g="NO ICON",y=[{label:Object(b.jsx)(m.a,{}),value:g,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0}],v="no-sticker",x=[{value:v,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],j={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.label",icon:null,isOption:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous.png"}),isOption:!0},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.label",icon:Object(b.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0}},O=Object.values(j),w=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,pattern:"none",...e}),S={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:w({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:w({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:w({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:w({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:w({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:w({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:w({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:w({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:w({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:w({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:w({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:w({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:w({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:w({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:w({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:w({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})}},k=Object.values(S),F={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},C=Object.values(F);var T=a(537);const R={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8}],"tcg-type-stat":[{trueWidth:684,trueBaseline:919.8,trueEdge:64.5}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5}]},N=[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94},{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94}],L={tcg:{small:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},medium:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5}},ocg:{small:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},medium:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5}}},E={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},I={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},A=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],B=A.reduce(((e,t)=>(e[t.shortForm]=t,e)),{}),z=[{blendMode:"overlay",opacity:1}],W=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],D={type1:{value:"type1",label:"1",partInstructionMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"art-overlay":z,"art-border":z,"art-border-pendulum":z,"border-pendulum":z,attribute:z,frame:z}},type4:{value:"type4",label:"4",partInstructionMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]}},type8:{value:"type8",label:"8",partInstructionMap:{"art-border":W,"art-border-pendulum":W,"border-pendulum":W,frame:W,"frame-background":W,name:W,star:W}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]}}},P={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]}}},M={normal:"normal",gold:"gold",platinum:"platinum"},H=e=>[{name:M.normal,label:null===e||void 0===e?void 0:e.normal,color:"#747b95",isOption:!1},{name:M.gold,label:null===e||void 0===e?void 0:e.gold,color:"#cfa65f",isOption:!0},{name:M.platinum,label:null===e||void 0===e?void 0:e.platinum,color:"#b1b1b1",isOption:!0}],$={bulletSymbolOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},K={yOffset:0,yRatio:1},Y={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},G={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,headTextGapRatio:0},U={...G,font:"MatrixBook",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},X={...G,font:'"StoneSerif-Italic"',headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},V={...G,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},_={tcg:{...X,fontList:[{bulletSymbolWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletSymbolWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletSymbolWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10}]},"tcg-stat":{...X,fontList:[{bulletSymbolWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.9,lineCount:7},{bulletSymbolWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletSymbolWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10}]},"tcg-type-stat":{...X,fontList:[{bulletSymbolWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.9,lineCount:6},{bulletSymbolWidth:23,fontSize:19.28,lineHeight:21.5,lineCount:7},{bulletSymbolWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletSymbolWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9},{bulletSymbolWidth:19,fontSize:12.99,lineHeight:15,lineCount:10}]},"tcg-type":{...X,fontList:[{bulletSymbolWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:24.5,lineHeight:24.9,lineCount:7},{bulletSymbolWidth:23,fontSize:19.28,lineHeight:21.5,lineCount:8}]}},q={tcg:{...U,fontList:[{bulletSymbolWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletSymbolWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletSymbolWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletSymbolWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10}]},"tcg-stat":{...U,fontList:[{bulletSymbolWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.9,lineCount:7}]},"tcg-type-stat":{...U,fontList:[{bulletSymbolWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletSymbolOffset:1},{bulletSymbolWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.9,lineCount:6},{bulletSymbolWidth:23,fontSize:19.95,lineHeight:21.5,lineCount:7},{bulletSymbolWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8},{bulletSymbolWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletSymbolOffset:1},{bulletSymbolWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletSymbolOffset:2}]},"tcg-type":{...U,fontList:[{bulletSymbolWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletSymbolOffset:2},{bulletSymbolWidth:30,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletSymbolWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletSymbolWidth:23,fontSize:25.2,lineHeight:24.9,lineCount:7},{bulletSymbolWidth:23,fontSize:19.95,lineHeight:21.5,lineCount:8}]},ocg:{...V,fontList:[{bulletSymbolWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletSymbolWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...V,fontList:[{bulletSymbolWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...V,fontList:[{bulletSymbolWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...V,fontList:[{bulletSymbolWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletSymbolOffset:3,headTextFontRatio:.25},{bulletSymbolWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletSymbolOffset:2,headTextFontRatio:.25},{bulletSymbolWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletSymbolOffset:1,headTextFontRatio:.3},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]}},J={tcg:{...X,fontList:[{bulletSymbolWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletSymbolWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletSymbolOffset:2},{bulletSymbolWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletSymbolOffset:3},{bulletSymbolWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletSymbolWidth:18,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletSymbolWidth:17,fontSize:17,lineHeight:17.4,lineCount:7},{bulletSymbolWidth:14,fontSize:14.7,lineHeight:15.32,lineCount:8}]}},Z={tcg:{...U,fontList:[{bulletSymbolWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletSymbolWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletSymbolOffset:2},{bulletSymbolWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletSymbolOffset:3},{bulletSymbolWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletSymbolWidth:18,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletSymbolWidth:17,fontSize:17,lineHeight:17.4,lineCount:7},{bulletSymbolWidth:14,fontSize:14.7,lineHeight:15.32,lineCount:8}]},ocg:{...V,fontList:[{bulletSymbolWidth:41,bulletSymbolOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletSymbolWidth:31,bulletSymbolOffset:2,fontSize:35.55,lineHeight:40.6,headTextFontRatio:.3,lineCount:3},{bulletSymbolWidth:23,bulletSymbolOffset:1,fontSize:25.05,lineHeight:30.6,headTextFontRatio:.35,lineCount:4},{bulletSymbolWidth:16,fontSize:22.05,lineHeight:25.2,headTextFontRatio:.4,lineCount:5}]}},Q={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},ee={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps",font:"MatrixRegularSmallCaps",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.55,fontList:[{bulletSymbolWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterDeviationMap:{i:{yOffset:1,yRatio:1.03},"\xec":{yOffset:1,yRatio:1.03},"\xed":{yOffset:1,yRatio:1.03},"\xee":{yOffset:1,yRatio:1.03},"\xef":{yOffset:1,yRatio:1.03},"\u0129":{yOffset:1,yRatio:1.03},"\u012b":{yOffset:1,yRatio:1.03},"\u012d":{yOffset:1,yRatio:1.03},"\u012f":{yOffset:1,yRatio:1.03},"\u01d0":{yOffset:1,yRatio:1.03},"\u0209":{yOffset:1,yRatio:1.03},"\u020b":{yOffset:1,yRatio:1.03},"\u0268":{yOffset:1,yRatio:1.03},"\u0269":{yOffset:1,yRatio:1.03},"\u1d79":{yOffset:1,yRatio:1.03},"\u1d7c":{yOffset:1,yRatio:1.03},"\u1d96":{yOffset:1,yRatio:1.03},"\u1e2d":{yOffset:1,yRatio:1.03},"\u1e2f":{yOffset:1,yRatio:1.03},"\u1ec9":{yOffset:1,yRatio:1.03},"\u1ecb":{yOffset:1,yRatio:1.03},I:{yOffset:1,yRatio:1.022},"\xcc":{yOffset:1,yRatio:1.022},"\xcd":{yOffset:1,yRatio:1.022},"\xce":{yOffset:1,yRatio:1.022},"\xcf":{yOffset:1,yRatio:1.022},"\u0128":{yOffset:1,yRatio:1.022},"\u012a":{yOffset:1,yRatio:1.022},"\u012c":{yOffset:1,yRatio:1.022},"\u012e":{yOffset:1,yRatio:1.022},"\u0130":{yOffset:1,yRatio:1.022},"\u0196":{yOffset:1,yRatio:1.022},"\u0197":{yOffset:1,yRatio:1.022},"\u01cf":{yOffset:1,yRatio:1.022},"\u0208":{yOffset:1,yRatio:1.022},"\u020a":{yOffset:1,yRatio:1.022},"\u1e2c":{yOffset:1,yRatio:1.022},"\u1e2e":{yOffset:1,yRatio:1.022},"\u1ec8":{yOffset:1,yRatio:1.022},"\u1eca":{yOffset:1,yRatio:1.022},E:{yOffset:1,yRatio:1.04},"\u0114":{yOffset:1,yRatio:1.04},"\u0115":{yOffset:1,yRatio:1.04},"\u1e1c":{yOffset:1,yRatio:1.04},"\u1e1d":{yOffset:1,yRatio:1.04},"\u0206":{yOffset:1,yRatio:1.04},"\u0207":{yOffset:1,yRatio:1.04},"\xca":{yOffset:1,yRatio:1.04},"\xea":{yOffset:1,yRatio:1.04},"\xca\u0304":{yOffset:1,yRatio:1.04},"\xea\u0304":{yOffset:1,yRatio:1.04},"\xca\u030c":{yOffset:1,yRatio:1.04},"\xea\u030c":{yOffset:1,yRatio:1.04},"\u1ec0":{yOffset:1,yRatio:1.04},"\u1ec1":{yOffset:1,yRatio:1.04},"\u1ebe":{yOffset:1,yRatio:1.04},"\u1ebf":{yOffset:1,yRatio:1.04},"\u1ec2":{yOffset:1,yRatio:1.04},"\u1ec3":{yOffset:1,yRatio:1.04},"\u1ec4":{yOffset:1,yRatio:1.04},"\u1ec5":{yOffset:1,yRatio:1.04},"\u1ec6":{yOffset:1,yRatio:1.04},"\u1ec7":{yOffset:1,yRatio:1.04},"\u1eba":{yOffset:1,yRatio:1.04},"\u1ebb":{yOffset:1,yRatio:1.04},"\u1e18":{yOffset:1,yRatio:1.04},"\u1e19":{yOffset:1,yRatio:1.04},"\u011a":{yOffset:1,yRatio:1.04},"\u011b":{yOffset:1,yRatio:1.04},"\u0246":{yOffset:1,yRatio:1.04},"\u0247":{yOffset:1,yRatio:1.04},"\u0116":{yOffset:1,yRatio:1.04},"\u0117":{yOffset:1,yRatio:1.04},"\u0116\u0301":{yOffset:1,yRatio:1.04},"\u0117\u0301":{yOffset:1,yRatio:1.04},"\u0116\u0303":{yOffset:1,yRatio:1.04},"\u0117\u0303":{yOffset:1,yRatio:1.04},"\u1eb8":{yOffset:1,yRatio:1.04},"\u1eb9":{yOffset:1,yRatio:1.04},"\xcb":{yOffset:1,yRatio:1.04},"\xeb":{yOffset:1,yRatio:1.04},"\xc8":{yOffset:1,yRatio:1.04},"\xe8":{yOffset:1,yRatio:1.04},"\xc8\u0329":{yOffset:1,yRatio:1.04},"\xe8\u0329":{yOffset:1,yRatio:1.04},"\u0204":{yOffset:1,yRatio:1.04},"\u0205":{yOffset:1,yRatio:1.04},"\xc9":{yOffset:1,yRatio:1.04},"\xe9":{yOffset:1,yRatio:1.04},"\xc9\u0329":{yOffset:1,yRatio:1.04},"\u0112":{yOffset:1,yRatio:1.04},"\u0113":{yOffset:1,yRatio:1.04},"\u1e14":{yOffset:1,yRatio:1.04},"\u1e15":{yOffset:1,yRatio:1.04},"\u1e16":{yOffset:1,yRatio:1.04},"\u1e17":{yOffset:1,yRatio:1.04},"\u1ebc":{yOffset:1,yRatio:1.04},"\u1ebd":{yOffset:1,yRatio:1.04},"\u1e1a":{yOffset:1,yRatio:1.04},"\u1e1b":{yOffset:1,yRatio:1.04},"\u0118":{yOffset:1,yRatio:1.04},"\u0119":{yOffset:1,yRatio:1.04},"\u0118\u0301":{yOffset:1,yRatio:1.04},"\u0119\u0301":{yOffset:1,yRatio:1.04},"\u0118\u0303":{yOffset:1,yRatio:1.04},"\u0119\u0303":{yOffset:1,yRatio:1.04},"\u0228":{yOffset:1,yRatio:1.04},"\u0229":{yOffset:1,yRatio:1.04},"E\u0329":{yOffset:1,yRatio:1.04},"e\u0329":{yOffset:1,yRatio:1.04},"\u1d92":{yOffset:1,yRatio:1.04}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",ordinalFont:'"DFKakuTaiHiStd-W4"',fontStyle:"tcg",symbolFont:"matrix",symbolFontRatio:.775,headTextHeightRatio:.825,weight:"bold",fontList:[{bulletSymbolWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.775,headTextOverflow:"condense",headTextBold:!0,metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,fontStyle:"ocg",fontList:[{bulletSymbolWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},te={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletSymbolWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletSymbolWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},ae={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletSymbolWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletSymbolWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},re={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletSymbolWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletSymbolWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletSymbolWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},oe={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletSymbolWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletSymbolWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletSymbolWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},ne={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},ie={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@"},le={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},se={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},ce={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},de={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[se.ocg[2]]:se.tcg[2],[se.ocg[1]]:se.tcg[1],[se.ocg[0]]:se.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[ce.ocg]:ce.tcg},ue=Object.entries(de).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),pe={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 48%","rgba(239,239,239,1) 52%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},me=Object.values(pe),be=[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],fe=[-45,0,45,-90,0,90,-135,180,135],he=[-38,-27,-38,-27,0,-27,-38,-27,-38],ge=new RegExp("[A-Z\uff21-\uff3a]"),ye=new RegExp("[\\[\\]\u3010\u3011]"),ve="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",xe=new RegExp(ve),je=new RegExp(`({[^{}]+?}|${ve}|.)`),Oe="\u2989",we="\u298a",Se="\u27c5",ke="\u27c6",Fe="\u27ec",Ce="\u27ed",Te=new RegExp(`[${[Oe,we,Se,ke,Fe,Ce].join("")}]|(\\|[^}]+})`,"g"),Re=new RegExp(`(^|[-\\u2014/[(\\u2018${Oe}${Se}${Fe}\\s])"`,"g"),Ne=`${Oe}|${we}`,Le=new RegExp(Ne),Ee=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${Oe}?(\\(|\\*)[\\w\\W]+${we}?)\\s*$`,Ie=new RegExp("[#\u2605\u2606@\u221e]"),Ae=`(${A.map((e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm})).join("|")})(?![^{]*})`,Be="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",ze=new RegExp(`[${Be}]`),We=`.[${Be})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,De=new RegExp("[\u2460-\u2473\u203b]"),Pe=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),Me=new RegExp("[\uff10-\uff19]"),He=new RegExp("[0-9]"),$e=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,Ke=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,Ye=new RegExp("[\u30fb]"),Ge=new RegExp("[\u30fc]"),Ue=new RegExp("[\u2015]"),Xe=new RegExp("[\uff1a]"),Ve=new RegExp("[\u3002\uff64]"),_e=new RegExp("[\uff1a]"),qe={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},Je={"\u3002":-.5,"\uff1a":-.25},Ze={">":.125,"<":.125},Qe={},et={},tt={},at=e=>"tcg"===e?7:1,rt=/{[^{}]+?}/,ot="\\s\\-/",nt=-2.25,it=()=>({version:0,format:"tcg",frame:"fusion",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none"},attribute:"LIGHT",subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),lt=()=>({id:Object(T.a)(),...it()}),st=()=>({version:0,format:"tcg",frame:"effect",foil:"normal",opacity:d(),finish:[],artFinish:"normal",name:"",nameStyleType:"auto",nameStyle:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none"},attribute:f,subFamily:g,cardIcon:"auto",star:6,starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0},pendulumStyle:{fontStyle:"auto",upSize:0},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:v,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],externalInfo:{}}),ct=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],dt=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],ut={"549x800":{label:"549 \xd7 800",width:549,height:800,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,settingValue:[813,1185]}},pt=[ut["549x800"],ut["561x818"],ut["813x1185"]],mt=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],bt=e=>"xyz"===e.frame,ft=e=>"speed-skill"===e.frame&&!ht(e),ht=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,gt=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e?"none":"level",yt=e=>!ht({frame:e})||vt(e),vt=e=>["link","xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e);var xt=a(544),jt=a(531);const Ot=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return wt(e,0)},wt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),(e=>e===t[0]?t[1]:t[0]));if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},St={version:"ve",format:"fm",frame:"fr",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus"},nameStyle:{_newKey:"ns",font:"nsft",fillStyle:"nsfs",headTextFillStyle:"nshfs",shadowColor:"nssc",shadowOffsetY:"nssoy",shadowOffsetX:"nssox",shadowBlur:"nssb",hasShadow:"nshs",lineColor:"nslc",lineWidth:"nslw",lineOffsetY:"nsloy",lineOffsetX:"nslox",hasOutline:"nshl",gradientAngle:"nsgd",gradientColor:"nscg",hasGradient:"nshg",preset:"nspr",pattern:"nspt"},attribute:"at",subFamily:"sf",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},kt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:St;const a={},r={...e};return Object.keys(r).forEach((e=>{const o=r[e];if("object"!==typeof o||null===o||Array.isArray(o)){const r=t[e];"string"===typeof r&&(a[r]=o)}else{var n;const r=null===(n=t[e])||void 0===n?void 0:n._newKey;r&&(a[r]=kt(o,t[e]))}})),a},Ft=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:St;const a={};return Object.keys(t).forEach((r=>{const o=t[r];if("object"!==typeof o||null===o||Array.isArray(o))null!=e[o]&&(a[r]=e[o]);else{const n=null===o||void 0===o?void 0:o._newKey;n&&e[n]&&(a[r]=Ft(e[n],t[r]))}})),a},Ct=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:St;const a="string"===typeof e?JSON.parse(Ot(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach((e=>{const o=t[e];if("object"!==typeof o||null===o||Array.isArray(o))null!=a[o]&&(r[e]=a[o]);else{const n=null===o||void 0===o?void 0:o._newKey;n&&a[n]&&(r[e]=Ct(a[n],t[e]))}})),r},Tt=function(e){var t,a,r,o,n,i;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:st();const s={id:Object(T.a)(),...l,...Object(xt.a)(e)};return s.effectStyle={...st().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...st().pendulumStyle}:s.pendulumStyle={...st().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.finish&&(s.finish=[]),null==s.artFinish&&(s.artFinish="normal"),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(o=s.background)&&void 0!==o?o:"")&&(s.background=""),""===(null!==(n=s.backgroundData)&&void 0!==n?n:"")&&(s.backgroundData=""),""===(null!==(i=s.backgroundSource)&&void 0!==i?i:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto"),s},Rt=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},Nt=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},Lt=(e,t)=>{if("offline"===e.artSource||"offline"===e.backgroundSource)return{isPartial:!0,result:kt(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:kt(a)}},Et=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),It=(e,t)=>{const{aspect:a,height:r,width:o,x:n,y:i,unit:l}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:p,unit:m}=null!==t&&void 0!==t?t:{};return Et(a,s)&&Et(r,c)&&Et(o,d)&&Et(n,u)&&Et(i,p)&&l===m},At=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1")}catch(t){return console.error(t),e}},Bt=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1")}catch(t){return console.error(t),e}},zt=(e,t,a)=>{const r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=[a,r.download,r.href].join(":");const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(o),r.remove()},Wt={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[g]:"None"},Dt=Object.entries(Wt).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Pt={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},Mt=Object.entries(Pt).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Ht={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},$t=Object.entries(Ht).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Kt={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},Yt=Object.entries(Kt).reduce(((e,t)=>{const[a,r]=t;return e[r.key]=a,e}),{}),Gt=(e,t)=>{const{name:a,star:r,typeAbility:o,subFamily:n,effect:i,atk:l,def:s,art:c,artData:d,artSource:u,password:p,creator:m,attribute:b,setId:f,pendulumEffect:h,pendulumScaleBlue:g,pendulumScaleRed:y,isPendulum:v,linkMap:x,frame:j,externalInfo:O,nameStyle:w,nameStyleType:S,artFinish:k,finish:F}=e,C=At(a),T=Bt(i),R=Bt(h),N=Wt[n],L=Pt[b],E=Ht[j],I="predefined"===S?Yt[[w.preset,k,F.join("|")].join("-")]:"common",{pendulum:A,rarity:B,...z}=null!==O&&void 0!==O?O:{};return{isPartial:a!==C||i!==T||h!==R||void 0===N||void 0===L||void 0===E||void 0===I,result:{version:"1.0.0",name:C,level:`${r}`,type:o.join("/"),icon:null!==N&&void 0!==N?N:"",effect:T,atk:l,def:s,serial:p,copyright:m,attribute:null!==L&&void 0!==L?L:"None",id:f,pendulum:{enabled:v,effect:R,blue:g,red:y,boxSize:"Normal",boxSizeEnabled:!0,...A},variant:"Normal",link:{topLeft:!!x.includes("1"),topCenter:!!x.includes("2"),topRight:!!x.includes("3"),middleLeft:!!x.includes("4"),middleRight:!!x.includes("6"),bottomLeft:!!x.includes("7"),bottomCenter:!!x.includes("8"),bottomRight:!!x.includes("9")},layout:null!==E&&void 0!==E?E:"Normal",boxSize:"Normal",rarity:null!==I&&void 0!==I?I:B,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...z}}},Ut={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[g]:"None"},Xt=Object.entries(Ut).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),Vt=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),_t=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce(((e,t)=>{const[a,r]=t;return e[r]=a,e}),{}),qt={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},Jt=e=>{var t,a,r;const{atk:o,attribute:n,card_images:i,card_sets:l,def:s,desc:c,frameType:d,id:u,level:p,monster_desc:m,name:b,pend_desc:h,race:y,scale:v,typeline:x,linkval:j,linkmarkers:O}=e,w=Xt[y],S=Vt[n],[k,F]=_t[d].split("_"),C=null!==(t=m?m.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",T=C.split("\n"),R=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==k&&void 0!==k?k:"normal"})&&T.length>1?[`[${T[0].replaceAll("\r","")}]`,...T.slice(1)].join("\n"):C,N=h?h.replaceAll(/^''|''$/g,""):"",L=i[0].image_url_cropped,E=st();return{isPartial:!1,result:{...E,name:b,atk:o<0||null==o?"?":`${o}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==S&&void 0!==S?S:f,effect:R,subFamily:null!==w&&void 0!==w?w:g,setId:null!==(a=null===(r=l[l.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==k&&void 0!==k?k:"normal",star:"link"===d&&j?j:p,typeAbility:x||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:L,artSource:"online",artCrop:{...E.artCrop,y:0},isLink:"link"===k&&Array.isArray(O),linkMap:(null!==O&&void 0!==O?O:[]).map((e=>qt[e])),isPendulum:"pendulum"===F,pendulumScaleBlue:null==v?"0":`${v}`,pendulumScaleRed:null==v?"0":`${v}`,pendulumEffect:N,password:`${u}`.padStart(8,"0"),creator:se.tcg[0]}}},Zt=1e3,Qt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=Zt;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zt,a=t,r=a,o=30,n=100;const i=()=>o=-1;return{reset:function(){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=i,a=i,o=30,n=100,r=i},searchDown:()=>(a-=n,o-=1,a),reverseSearch:()=>(1===n?i():(a+=n,n/=10,a-=n),Math.min(a,t)),finish:i,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,o=-1,a),getIterateCount:()=>o}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===Zt)break;a=r.reverseSearch()}}const o=Math.max(t,Math.min(a,Zt));return o!==a&&e(o),o},ea=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:o="Arial"}=null!==e&&void 0!==e?e:{};let n=t,i=a,l="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=o;return{getFont:()=>`${[i,n,l,c].filter((e=>""!==e)).join(" ")}, Arial`,getFontInfo:()=>({style:i,size:l,family:c,sizeAsNumber:s,weight:n}),setWeight(e){return n=e,this},setStyle(e){return i=e,this},setSize(e){const t="function"===typeof e?e(s):e;return l="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},ta=()=>ra("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),aa=e=>(null!==e&&void 0!==e?e:[]).map((e=>{let{color:t,offset:a}=e;return`${a}|${t}`})).join(","),ra=e=>e?e.split(",").map(((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}})):ra("0.000|#eef10b,0.5|#d78025,1.000|#7e20cf"),oa=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:o,onTrigger:n,onCancel:i,onKeyPress:l}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),o(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),o(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===l||void 0===l?void 0:l(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),o((e=>Math.max(0,a+e+1)%a))):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),o((e=>Math.max(0,a+e-1)%a))):"Enter"===e.key||" "===e.key?n():"Escape"===e.key&&(null===i||void 0===i||i()))}}},na=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let o=0;o<t;o++)a+=e.charAt(Math.floor(Math.random()*r));return a};const ia=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()},la=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,sa=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const n=e.replace("#","");let i=[0,0,0,1];var a,r,o;if(3===n.length||4===n.length)i=[parseInt(`${n[0]}${n[0]}`,16),parseInt(`${n[1]}${n[1]}`,16),parseInt(`${n[2]}${n[2]}`,16),parseInt(`${null!==(a=n[3])&&void 0!==a?a:"f"}${null!==(r=n[3])&&void 0!==r?r:"f"}`,16)];if(6===n.length||8===n.length)i=[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16),parseInt(null!==(o=n.slice(6,8))&&void 0!==o?o:"ff",16)];return i.map((e=>isNaN(e)?255:e)).slice(0,t?4:3)}catch(n){return[0,0,0,1].slice(0,t?4:3)}},ca=()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e};function da(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var ua=a(532),pa=a(290),ma=a(111),ba=a(8);const fa=ba.b.button`
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
`;var ha=a(546),ga=a(547),ya=a(548);const va=(e,t)=>{var a,r,o,n,i;const{creator:l,effect:s,format:c,isFirstEdition:d,name:u,password:p,pendulumEffect:m,setId:b,typeAbility:f}=e;if(c===t)return e;const h="ocg"===t?ue:de,g="ocg"===t&&/-EN/.test(b)?b.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(b)?b.replace("-JP","-EN"):b;return{...e,name:null!==(a=h[u])&&void 0!==a?a:u,format:t,effect:null!==(r=h[s])&&void 0!==r?r:s,pendulumEffect:null!==(o=h[m])&&void 0!==o?o:m,typeAbility:f.map((e=>{var t;return null!==(t=h[e])&&void 0!==t?t:e})),creator:null!==(n=h[l])&&void 0!==n?n:l,password:null!==(i=h[p])&&void 0!==i?i:p,setId:g,isFirstEdition:"ocg"!==t&&d}};var xa=a(105),ja=a(104),Oa=a.n(ja),wa=a(254),Sa=a.n(wa);const ka=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(b.jsx)(o.a.Fragment,{children:r.map(((e,a)=>a%2===0?Object(b.jsx)(o.a.Fragment,{children:e},`${e}-${a}`):t[e]))},e)},n={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,o,n)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:o,artist4:n}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,o,n)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"guide.format.section-2.content":(e,t,o,n)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"guide.format.section-3.content":(e,t,o)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:o}),"guide.format.section-4.content":(e,t,o)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:o}),"guide.format.section-5.content":(e,t,o,n)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:o,hotkeyAlternative:n}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...n}}},Fa=Object(xa.create)(((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},o=ka({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),n=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),o=await a.json();if(!o.rawDictionary)throw new Error("No dictionary found");const n=ka(o,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=n,n}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},i=async a=>{const i=t().languageMetadataMap[a];if(!i)return;const l=r[a]?r[a]:await n(a);l?(e({languageInfo:t().languageMetadataMap[a],language:l.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:i})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:o.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:o.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await n("eng"),await i(a),e({isInitiating:!1})},loadLanguage:n,changeLanguage:i}})),Ca=()=>Fa((e=>{let{language:t}=e;return t})),Ta=()=>Fa.getState().language;var Ra=a(255);const Na=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Star Type","Star Alignment","Card Icon Type","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","External Info (JSON)"],La=[...Na,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],Ea=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),Ia=new Set(La.map(Ea)),Aa=Na.reduce(((e,t,a)=>{const r=Ea(t);return Ia.has(r)&&(e[t]=a),e}),{}),Ba=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,za=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},Wa=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,Da=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,Pa=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,Ma=e=>{try{const t=e[0].reduce(((e,t,a)=>{const r=Ea(t);return Ia.has(r)&&(e[t]=a),e}),{});return e.map(((e,a)=>{var r,o,n,i,l,s,c,u,m,b,h,g,y,v,x,j,O,w,S,k,F,C,R,N,L,E,I,A,B,z,W,D,P,H,$,K,Y,G,U,X;if(0===a)return null;if(""===e.join(""))return null;const V=st(),_=((e,t)=>a=>{var r,o;const n=null!==(r=t[a])&&void 0!==r?r:-1,i=(null!==(o=e[n])&&void 0!==o?o:"").trim();return""===i?void 0:i})(e,t),q=(null!==(r=null!==(o=_("Frame"))&&void 0!==o?o:_("Background_Type"))&&void 0!==r?r:V.frame).toLowerCase(),J=null!==(n=null!==(i=_("Star"))&&void 0!==i?i:_("Level/Rank"))&&void 0!==n?n:"",Z="text"===_("Star Type")?J:parseInt(J)<=13&&parseInt(J)>=0&&"2"!==_("Star_Type")?parseInt(J):J,Q=(null!==(l=null!==(s=_("Foil"))&&void 0!==s?s:_("Rarity"))&&void 0!==l?l:"normal").toLowerCase(),ee=M[Q]?Q:"normal",te=null===(c=_("Attribute"))||void 0===c?void 0:c.toUpperCase(),ae=te?"NONE"===te?f:te:"spell"===q?"SPELL":"trap"===q?"TRAP":V.attribute,re=null!==(u=_("Art Finish"))&&void 0!==u?u:_("Art_Finish")?`type${_("Art_Finish")}`:"",oe=null!==(m=_("ATK"))&&void 0!==m?m:"",ne=null!==(b=_("Card Icon Type"))&&void 0!==b?b:V.cardIcon,ie=null!==(h=_("Copyright"))&&void 0!==h?h:"",le=null!==(g=_("DEF"))&&void 0!==g?g:"",se=null!==(y=_("Effect"))&&void 0!==y?y:"",ce=null!==(v=null===(x=_("Card Finish"))||void 0===x?void 0:x.split(/,| /).filter((e=>""!==e)))&&void 0!==v?v:[],de=(null!==(j=_("Format"))&&void 0!==j?j:V.format).toLowerCase(),ue=za(_("Use Furigana Helper"),V.furiganaHelper),pe=null!==(O=_("Name"))&&void 0!==O?O:"",me=null!==(w=_("Password"))&&void 0!==w?w:"",be=null!==(S=null!==(k=_("Set Id"))&&void 0!==k?k:_("Set_ID"))&&void 0!==S?S:"",fe=(null!==(F=_("Star Alignment"))&&void 0!==F?F:V.starAlignment).toLowerCase(),he=(null!==(C=_("Sticker"))&&void 0!==C?C:V.sticker).toLowerCase(),ge=(null!==(R=null!==(N=_("Spell/Trap Icon"))&&void 0!==N?N:_("spell_type/trap_type"))&&void 0!==R?R:V.subFamily).toUpperCase(),ye=null===(L=_("Edition"))||void 0===L?void 0:L.toLowerCase(),ve=za(_("Is First Edition"),ye?"1st edition"===ye:V.isFirstEdition),xe=za(_("Is Duel Terminal Card"),ye?"duel terminal"===ye:V.isDuelTerminalCard),je=za(_("Is Limited Edition"),ye?"limited edition"===ye:V.isLimitedEdition),Oe=za(_("Is Speed Card"),ye?"speed duel"===ye:V.isSpeedCard),we=za(_("Is Legacy Card"),V.isLegacyCard),Se=za(_("Is Pendulum"),V.isPendulum),ke=(null!==(E=_("Bottom Frame"))&&void 0!==E?E:V.pendulumFrame).toLowerCase(),Fe=null!==(I=_("Pendulum Effect"))&&void 0!==I?I:"",Ce=null!==(A=_("Pendulum Scale Red"))&&void 0!==A?A:V.pendulumScaleRed,Te=null!==(B=_("Pendulum Scale Blue"))&&void 0!==B?B:V.pendulumScaleBlue,Re=_("Type Ability"),Ne=Re?Re.split("/"):[_("Type_1"),_("Type_2"),_("Type_3"),_("Type_4")].filter((e=>"string"===typeof e)).filter((e=>""!==e)),Le=(null!==(z=_("Condense Rate"))&&void 0!==z?z:V.effectStyle.condenseTolerant).toLowerCase(),Ee=Wa(_("Effect Style - Upsize"),V.effectStyle.upSize),Ie=Wa(_("Pendulum Effect Style - Upsize"),V.pendulumStyle.upSize),Ae=d(),Be={artBorder:za(_("Opacity - Art Border"),Ae.artBorder),baseFill:null!==(W=_("Opacity - Base Fill"))&&void 0!==W?W:Ae.baseFill,body:Wa(_("Opacity - Body"),Ae.body),boundless:za(_("Opacity - Boundless"),Ae.boundless),name:Wa(_("Opacity - Name"),Ae.name),nameBorder:za(_("Opacity - Name Border"),Ae.nameBorder),pendulum:Wa(_("Opacity - Pendulum"),Ae.pendulum),text:Wa(_("Opacity - Text"),Ae.text)},ze={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},We=null!==(D=_("Art Link"))&&void 0!==D?D:V.art,De=za(_("Is Using Full Art"),V.artFit),Pe={aspect:p(Se,Be).ratio,height:Da(_("Art Crop - Height (%)"),ze.height),width:Da(_("Art Crop - Width (%)"),ze.width),x:Da(_("Art Crop - X (%)"),ze.x),y:Da(_("Art Crop - Y (%)"),ze.y),unit:"%"},Me={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},He=za(_("Has Background"),V.hasBackground),$e=null!==(P=_("Background Link"))&&void 0!==P?P:V.background,Ke=(null!==(H=_("Background Type"))&&void 0!==H?H:V.backgroundType).toLowerCase(),Ye=za(_("Is Using Full Background"),V.backgroundFit),Ge={aspect:p(Se,Be,Ke).ratio,height:Da(_("Background Crop - Height (%)"),Me.height),width:Da(_("Background Crop - Width (%)"),Me.width),x:Da(_("Background Crop - X (%)"),Me.x),y:Da(_("Background Crop - Y (%)"),Me.y),unit:"%"},Ue={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none"},Xe=(null!==($=_("Name Style Type"))&&void 0!==$?$:V.nameStyleType).toLowerCase(),Ve={fillStyle:Pa(_("Name Style - Fill Style"),Ue.fillStyle),font:null!==(K=_("Name Style - Font"))&&void 0!==K?K:Ue.font,gradientAngle:Wa(_("Name Style - Gradient Angle"),Ue.gradientAngle),gradientColor:null!==(Y=_("Name Style - Gradient Color"))&&void 0!==Y?Y:Ue.gradientColor,hasGradient:za(_("Name Style - Has Gradient"),Ue.hasGradient),hasOutline:za(_("Name Style - Has Outline"),Ue.hasOutline),hasShadow:za(_("Name Style - Has Shadow"),Ue.hasShadow),headTextFillStyle:Pa(_("Name Style - Headtext Fill Style"),Ue.headTextFillStyle),lineColor:Pa(_("Name Style - Line Color"),Ue.lineColor),lineOffsetX:Wa(_("Name Style - Line Offset X"),Ue.lineOffsetX),lineOffsetY:Wa(_("Name Style - Line Offset Y"),Ue.lineOffsetY),lineWidth:Wa(_("Name Style - Line Width"),Ue.lineWidth),pattern:null!==(G=_("Name Style - Pattern"))&&void 0!==G?G:Ue.pattern,preset:null!==(U=_("Name Style - Preset"))&&void 0!==U?U:Ue.preset,shadowBlur:Wa(_("Name Style - Shadow Blur"),Ue.shadowBlur),shadowColor:Pa(_("Name Style - Shadow Color"),Ue.shadowColor),shadowOffsetX:Wa(_("Name Style - Shadow Offset X"),Ue.shadowOffsetX),shadowOffsetY:Wa(_("Name Style - Shadow Offset Y"),Ue.shadowOffsetY)},_e=za(_("Is Link"),V.isLink),qe=null!==(X=[za(_("Link - Top Left Arrow"),!1)?"1":"",za(_("Link - Top Arrow"),!1)?"2":"",za(_("Link - Top Right Arrow"),!1)?"3":"",za(_("Link - Left Arrow"),!1)?"4":"",za(_("Link - Right Arrow"),!1)?"6":"",za(_("Link - Bottom Left Arrow"),!1)?"7":"",za(_("Link - Bottom Arrow"),!1)?"8":"",za(_("Link - Bottom Right Arrow"),!1)?"9":""].filter((e=>""!==e)))&&void 0!==X?X:[],Je=[!1,"#000000",!1,"#000000"],Ze=[za(_("Stat Style - Is Custom"),Je[0]),Pa(_("Stat Style - Fill Color"),Je[1]),za(_("Stat Style - Has Shadow"),Je[2]),Pa(_("Stat Style - Shadow Color"),Je[3])],Qe=[za(_("Type Style - Is Custom"),Je[0]),Pa(_("Type Style - Fill Color"),Je[1]),za(_("Type Style - Has Shadow"),Je[2]),Pa(_("Type Style - Shadow Color"),Je[3])],et=[za(_("Effect Style - Is Custom"),Je[0]),Pa(_("Effect Style - Fill Color"),Je[1]),za(_("Effect Style - Has Shadow"),Je[2]),Pa(_("Effect Style - Shadow Color"),Je[3])],tt=[za(_("Pendulum Effect Style - Is Custom"),Je[0]),Pa(_("Pendulum Effect Style - Fill Color"),Je[1]),za(_("Pendulum Effect Style - Has Shadow"),Je[2]),Pa(_("Pendulum Effect Style - Shadow Color"),Je[3])],at=[za(_("Other Style - Is Custom"),Je[0]),Pa(_("Other Style - Fill Color"),Je[1]),za(_("Other Style - Has Shadow"),Je[2]),Pa(_("Other Style - Shadow Color"),Je[3])];let rt={};try{var ot;rt=JSON.parse(null!==(ot=_("External Info (JSON)"))&&void 0!==ot?ot:"{}")}catch(nt){console.error("csvToCardList",nt)}return{id:Object(T.a)(),...V,art:We,artCrop:Pe,artFinish:re,artFit:De,artSource:"online",atk:oe,attribute:ae,background:$e,backgroundCrop:Ge,backgroundFit:Ye,backgroundSource:"online",backgroundType:Ke,cardIcon:ne,condenseTolerant:Le,creator:ie,def:le,effectStyle:{condenseTolerant:Le,upSize:Ee},effect:se,effectTextStyle:et,externalInfo:rt,finish:ce,foil:ee,format:de,frame:q,furiganaHelper:ue,hasBackground:He,isDuelTerminalCard:xe,isFirstEdition:ve,isLegacyCard:we,isLimitedEdition:je,isLink:_e,isPendulum:Se,isSpeedCard:Oe,linkMap:qe,name:pe,nameStyle:Ve,nameStyleType:Xe,opacity:Be,otherTextStyle:at,password:me,pendulumEffect:Fe,pendulumFrame:ke,pendulumScaleBlue:Te,pendulumScaleRed:Ce,pendulumStyle:{upSize:Ie},pendulumTextStyle:tt,setId:be,star:Z,starAlignment:fe,statTextStyle:Ze,sticker:he,subFamily:ge,typeAbility:Ne,typeTextStyle:Qe}})).filter((e=>null!=e))}catch(t){return console.error("csvToCardList",t),[]}},Ha=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,o=!!a&&isFinite(a),n=!!r&&isFinite(r);if(o&&!n)return-1;if(!o&&n)return 1;if(o&&n)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const i="?"===e?1:""===e?-1:0,l="?"===t?1:""===t?-1:0;return l-i===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):l-i},$a=(e,t)=>e.name.localeCompare(t.name),Ka=(e,t)=>e.setId.localeCompare(t.setId),Ya=(e,t)=>Ha(e.atk,t.atk),Ga=(e,t)=>Ha(e.def,t.def),Ua=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:Ha(e.star,t.star),Xa=(e,t)=>{var a,r,o,n;const i=pe[t.frame].sortWeight-pe[e.frame].sortWeight;if(0!==i)return i;return(null!==(a=null===(r=pe[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(o=null===(n=pe[e.pendulumFrame])||void 0===n?void 0:n.sortWeight)&&void 0!==o?o:1e3)},Va=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||ft(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},_a=(e,t,a)=>{for(let r=0;r<e.length;r++){const o=e[r](t,a);if(0!==o)return o}return 0},qa={name:{key:"name",sortFunction:e=>e.map(Va).sort(((e,t)=>_a([$a,Ua,Xa,Ka,Ya,Ga],e,t)))},atk:{key:"atk",sortFunction:e=>e.map(Va).sort(((e,t)=>_a([Ya,Ga,Ua,Xa,$a,Ka],e,t)))},def:{key:"def",sortFunction:e=>e.map(Va).sort(((e,t)=>_a([Ga,Ya,Ua,Xa,$a,Ka],e,t)))},set:{key:"set",sortFunction:e=>e.map(Va).sort(((e,t)=>_a([Ka,Xa,Ua,$a,Ya,Ga],e,t)))},level:{key:"level",sortFunction:e=>e.map(Va).sort(((e,t)=>_a([Xa,Ua,$a,Ka,Ya,Ga],e,t)))}},Ja=(e,t)=>{const a=Object.values(t).filter((e=>null!=e));return 0===a.length?e:a.reduce(((e,t)=>t(e)),e)},Za=Object(xa.create)(Object(Ra.subscribeWithSelector)((e=>({activeId:"",cardDisplayList:[],cardList:[],filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e((e=>{let{cardList:t,filterFunctionMap:o}=e;const n={...o};if("text"===a){const e=r.toLowerCase();n[a]=t=>t.filter((t=>{let{name:a,effect:r,pendulumEffect:o}=t;return(At(a).toLowerCase()+Bt(r).toLowerCase()+Bt(o).toLowerCase()).includes(e)}))}return{filterFunctionMap:n,cardDisplayList:Ja(t,n)}}))},resetFilter:()=>{e((e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}}))},addCard:t=>e((e=>{let{cardList:a}=e;const r={id:Object(T.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}})),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e((e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}})),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e((e=>{let{cardList:r,cardDisplayList:o,isListDirty:n}=e,i=n;if(!1===i&&a){const e=r.find((e=>e.id===t.id));i=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...o}=e,{artCrop:n,backgroundCrop:i,...l}=t;return Object(jt.a)(o,l)&&It(a,n)&&It(r,i)})(t,e)}return{isListDirty:i,cardList:r.map((e=>e.id===t.id?{...t}:e)),cardDisplayList:o.map((e=>e.id===t.id?{...t}:e))}}))},setActiveId:t=>e({activeId:t}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e((e=>{var a,r,o,n;let{cardList:i,activeId:l,cardDisplayList:s}=e;const c=i.filter((e=>e.id!==t)),d=s.filter((e=>e.id!==t)),u=d.findIndex((e=>e.id===l));return{activeId:l===t?null!==(a=null!==(r=null===(o=d[u-1])||void 0===o?void 0:o.id)&&void 0!==r?r:null===(n=d[0])||void 0===n?void 0:n.id)&&void 0!==a?a:"":l,cardList:c,cardDisplayList:d}}))},duplicateCard:t=>{e((e=>{let{cardList:a,filterFunctionMap:r}=e;const o=a.findIndex((e=>{let{name:a}=e;return a===t.name})),n=Object(T.a)(),i={...Object(xt.a)(t),name:`${t.name} - Copy`,id:n},l=o<0?[...a,i]:[...a.slice(0,o),a[o],i,...a.slice(o+1,a.length)];return{activeId:n,pendingActiveCard:i,cardList:l,cardDisplayList:Ja(l,r)}}))},sortList:t=>{e((e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:qa[t].sortFunction(a),cardList:qa[t].sortFunction(r)}}))}})))),Qa=(e,t)=>{const a=Object(T.a)();let r=st(),o=!1;if(!e)return{isPartial:o,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=Ft(a);r=Object.keys(e).length>0?Tt(e,t):Tt(a,t)}else if(Rt(a))r=Tt(a);else if(Nt(a)){const e=Ft(a);r=Tt(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:n}=Jt(e);o=t,r=n}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=Jt(a);o=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:o,effect:n,boxSize:i,copyright:l,icon:s,id:c,image:d,layout:u,level:p,link:m,pendulum:b,rarity:h,serial:y,type:v,variant:x,version:j}=e,{red:O,blue:w,boxSize:k,boxSizeEnabled:F,effect:C,enabled:T}=b,R=Dt[s],N=Mt[o],L=$t[u],E="string"===typeof(I=d)&&I.startsWith("data:image/");var I;const A=parseInt(p),B=h?Kt[h.toLowerCase()]:void 0;let z=void 0===R||void 0===N||void 0===L||void 0===B;const{finish:W,artFinish:D,text:P}=null!==B&&void 0!==B?B:{},M=P?S[P]:null;return{isPartial:z,result:{...st(),finish:null!==W&&void 0!==W?W:[],name:t,nameStyleType:P?"predefined":"auto",nameStyle:M?M.value:{font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none"},atk:a,def:r,attribute:null!==N&&void 0!==N?N:f,effect:n,creator:l,subFamily:null!==R&&void 0!==R?R:g,setId:c,frame:null!==L&&void 0!==L?L:"normal",star:`${A}`===p&&A<=13?A:p,typeAbility:v.split("/").map((e=>e.trim())),art:E?"":d,artFit:!0,artData:E?d:"",artSource:E?"offline":"online",artFinish:null!==D&&void 0!==D?D:"normal",isLink:"link"===L&&null!=m,linkMap:[!0===(null===m||void 0===m?void 0:m.topLeft)?"1":null,!0===(null===m||void 0===m?void 0:m.topCenter)?"2":null,!0===(null===m||void 0===m?void 0:m.topRight)?"3":null,!0===(null===m||void 0===m?void 0:m.middleLeft)?"4":null,!0===(null===m||void 0===m?void 0:m.middleRight)?"6":null,!0===(null===m||void 0===m?void 0:m.bottomLeft)?"7":null,!0===(null===m||void 0===m?void 0:m.bottomCenter)?"8":null,!0===(null===m||void 0===m?void 0:m.bottomRight)?"9":null].filter((e=>"string"===typeof e)),isPendulum:T,pendulumScaleBlue:w,pendulumScaleRed:O,pendulumEffect:C,password:y,externalInfo:{version:j,variant:x,boxSize:i,rarity:h,pendulum:{boxSize:k,boxSizeEnabled:F}}}}})(a);o=e,r=t}}catch(n){console.error("decodedCard",e,n);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Ct(e):"string"===typeof e?JSON.parse(e):e,Tt(t)}(e,!0),pa.a.info({message:Ta()["service.decode.outdated.message"],description:Ta()["service.decode.outdated.description"]})}catch(n){console.error("cardData",e,n),pa.a.error({message:Ta()["service.decode.error.message"],description:Ta()["service.decode.error.description"]})}}return{isPartial:o,card:{...r,id:a}}},er={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},tr=Object(xa.create)(((e,t)=>({card:lt(),setCard:(t,a)=>{const r=Za.getState().changeActiveCard;if("function"===typeof t)e((e=>{const o=t(e.card);return r(o,null===a||void 0===a||a),{card:o}}));else if("id"in(o=t)&&""!==o.id)r(t,a),e({card:t});else{const o={id:Object(T.a)(),...t};r(o,a),e({card:o})}var o},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,o=arguments.length>2?arguments[2]:void 0;const{setCard:n}=t(),i=t=>{n((a=>{var o;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(o=t.target)||void 0===o?void 0:o.value)}}))};if(!o)return i;const l="string"===typeof o?null!==(a=er[o])&&void 0!==a?a:void 0:o;if(!l)return i;const{wait:s,type:c}=l;return"debounce"===c?Oa()(i,s):"throttle"===c?Sa()(i,s):i}}))),ar=Object(xa.create)((e=>{const{allowHotkey:t,exportFormat:a,reduceMotionColor:r,resolution:o,showCreativeOption:n,showExtraDecorativeOption:i}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportFormat:"string"===typeof a?a:"csv",resolution:Array.isArray(o)&&"number"===typeof o[0]&&"number"===typeof o[1]?o:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof r&&r,showCreativeOption:"boolean"!==typeof n||n,showExtraDecorativeOption:"boolean"!==typeof i||i},updateSetting:t=>{e((e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}}))}}})),rr=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:o,exportRef:n,onExport:i,onDownloadError:l,onDownloadComplete:s}=e;const c=Ca(),{card:d}=tr(),u=ar((e=>e.setting.resolution)),{opacity:p,name:m,isPendulum:b}=d,f=Object(r.useRef)(!1),h=Object(r.useCallback)((function(){var e;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=o.current,n=null===r||void 0===r?void 0:r.cloneNode(),i=null===r||void 0===r?void 0:r.getContext("2d"),c=null===n||void 0===n?void 0:n.getContext("2d");if(r&&i&&n&&c&&!t)try{a&&(n.width=a[0],n.height=a[1]),c.drawImage(r,0,0,r.width,r.height,0,0,n.width,n.height);const e=At(m);var d=document.createElement("a");d.download=e?`${e}.png`:"card.png",d.href=n.toDataURL("image/png"),d.click()}catch(p){l()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()}),[o,t,m,u,s,l]);return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const t=At(m);e&&(document.title=t?`${t} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")}),500),()=>{e=!1}}),[m]),Object(r.useEffect)((()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.1.17")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}})),Object(r.useEffect)((()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.1.17")?r:"unknown")}catch(l){const e="fail-to-set-storage-notification";pa.a.close(e),pa.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,r,l;if(o.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("export-canvas-guard"))||void 0===r||r.setAttribute("style",""),null===(l=document.getElementById("save-button-waiting"))||void 0===l||l.setAttribute("style","display: block"),n.current.pipelineRunning=!0,await n.current.currentPipeline,e&&(n.current.currentPipeline=i({isPendulum:b,opacity:p,isRelevant:()=>e}),await n.current.currentPipeline,e))){var s,c,u;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(kt(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(s=document.getElementById("export-canvas"))||void 0===s||s.classList.add("js-export-available"),null===(c=document.getElementById("export-canvas-guard"))||void 0===c||c.setAttribute("style","display: none"),null===(u=document.getElementById("save-button-waiting"))||void 0===u||u.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),n.current.pipelineRunning=!1,f.current&&(f.current=!1,h())}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}})),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout((()=>{!1===n.current.pipelineRunning?h(a):f.current=!0}),200)},isPipelineRunning:()=>n.current.pipelineRunning}},{height:or,width:nr}=s,ir=()=>"#000000".replace(/0/g,(()=>(~~(12*Math.random()+2)).toString(16))),lr=e=>{let{ctx:t,color:a=ir(),width:r,offset:o=4,edge:n,baseline:i,xRatio:l}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(n/l,i+1+Math.random()*o,r/l,2),t.fillStyle=s},sr=(e,t,a,r,o,n)=>{if(!e||!t)return r;const{stroke:i=!1}=null!==n&&void 0!==n?n:{};e.textAlign="left";const l=t.split("");let s=r;return l.forEach((t=>{e.fillText(t,s,o),i&&e.strokeText(t,s,o),s+=e.measureText(t).width*(2+a)/2})),s},cr=(e,t,a,r,o,n)=>{if(!e||!t)return r;const{stroke:i=!1}=null!==n&&void 0!==n?n:{};e.textAlign="right";const l=t.split("");let s=r;return l.forEach(((t,r)=>{const n=l[l.length-r-1];e.fillText(n,s,o),i&&e.strokeText(n,s,o),s-=e.measureText(n).width*(2+a)/2})),s},dr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nr,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:or;return!!e&&(e.clearRect(0,0,t,a),!0)},ur=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;return async(a,r,o)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const i of e){const e=t[i];if(o&&t[i]){var n;const{partInstructionMap:t}=e,l=r&&null!==(n=t[r])&&void 0!==n?n:[];if(l.length)for(const{blendMode:e="source-over",opacity:r=1}of l)a.globalCompositeOperation=e,a.globalAlpha=r,await o(i);else await o(i);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},pr=0,mr=0,br=0,fr="#000000",hr="#000000",gr=e=>{let{ctx:t,x:a=pr,y:r=mr,blur:o=br,color:n=hr,shadowColor:i=fr}=e;return t.shadowOffsetX=a,t.shadowOffsetY=r,t.shadowBlur=o,t.shadowColor=i,t.fillStyle=n,()=>{t.shadowOffsetX=pr,t.shadowOffsetY=mr,t.shadowBlur=br,t.shadowColor=fr,t.fillStyle=hr}},yr={},vr=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?o=>{var n,i;if(!0===(null===(n=yr[t])||void 0===n?void 0:n.ready)){const n=yr[t].image,i="number"===typeof a?a:a(n),l="number"===typeof r?r:r(n);return e.drawImage(n,i,l),void setTimeout((()=>o(!0)),0)}if(null!==(i=yr[t])&&void 0!==i&&i.error)return void setTimeout((()=>o(!0)),0);const l=yr[t]&&(yr[t].cache||yr[t].ready),s=l?yr[t].image:new Image;l||(s.src="/ygocarder"+t),s.addEventListener("load",(()=>{const n="number"===typeof a?a:a(s),i="number"===typeof r?r:r(s);e.drawImage(s,n,i),yr[t]&&(yr[t].ready=!0,yr[t].error=!1),o(!0)}),{once:!0}),s.addEventListener("error",(()=>{yr[t]&&(yr[t].error=!0),o(!1)}),{once:!0}),l||(yr[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},xr=async(e,t,a,r,o,n)=>await(async(e,t,a,r,o,n)=>new Promise(e&&""!==t?i=>{var l,s;if(!0===(null===(l=yr[t])||void 0===l?void 0:l.ready)){const l=yr[t].image,s="number"===typeof a?a:a(l),c="number"===typeof r?r:r(l),d="number"===typeof o?o:o(l),u="number"===typeof n?n:n(l);return e.drawImage(l,s,c,d,u),void setTimeout((()=>i(!0)),0)}if(null!==(s=yr[t])&&void 0!==s&&s.error)return void setTimeout((()=>i(!0)),0);const c=yr[t]&&(yr[t].cache||yr[t].ready),d=c?yr[t].image:new Image;c||(d.src="/ygocarder"+t),d.addEventListener("load",(()=>{const l="number"===typeof a?a:a(d),s="number"===typeof r?r:r(d),c="number"===typeof o?o:o(d),u="number"===typeof n?n:n(d);e.drawImage(d,l,s,c,u),yr[t]&&(yr[t].ready=!0,yr[t].error=!1),i(!0)}),{once:!0}),d.addEventListener("error",(()=>{yr[t]&&(yr[t].error=!0),i(!1)}),{once:!0}),c||(yr[t]={image:d,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,r,o,n),jr=async(e,t,a,r,o,n,i)=>{const l=e.getContext("2d"),s=document.createElement("canvas");s.width=o,s.height=n;const c=s.getContext("2d",{willReadFrequently:!0});if(!c||!l)return;await xr(c,t,0,0,o,n),null!==i&&void 0!==i&&i.color&&(c.fillStyle=i.color,c.fillRect(0,0,o,n),c.globalCompositeOperation="destination-in"),await xr(c,t,0,0,o,n),c.globalCompositeOperation="source-over";const d=gr({ctx:l,...i});l.drawImage(s,a,r),d()},Or=e=>{var t,a;let{ctx:r,letter:o,isLastOfLine:n=!1,debug:i,fontStyle:l,xRatio:s,metricMethod:c="standard"}=e;if(Le.test(o))return{width:0,boundWidth:0};const d="tcg"===l?tt:Ze,u="tcg"===l?Qe:qe,p="tcg"===l?et:Je,m=r.measureText(o),{width:b,actualBoundingBoxLeft:f,actualBoundingBoxRight:h}=m,g=f+h;let y=1;"name"===c&&(y=1+8*(1-s));const v="name"===c||"compact"===c||"furigana"===c?.046875:0;let x=g,j=null!==(t=n?p[o]:u[o])&&void 0!==t?t:0;if("tcg"===l){var O;return{width:b,actualBoundWidth:g,boundWidth:b+2*((null!==(O=d[o])&&void 0!==O?O:0)*b),metric:m,offsetRatio:j}}let w=(null!==(a=d[o])&&void 0!==a?a:0)*b+("furigana"===c?0:Math.min(.075*b,Math.max(.45,b*v)*y)),S=1;Ye.test(o)?(x="furigana"===c?g:g*("creator"===c?1.75:2.5),S=.6):Ge.test(o)?(x="furigana"===c?g:Math.max(g,.75*b),w=2):ze.test(o)?x="furigana"===c?g:Math.max(g,.7*b):Me.test(o)?x=b:Xe.test(o)?x=2*g:Ve.test(o)?x=1.25*g*(n?.5:1):$e.test(o)?x="furigana"===c?g:Math.max(g,.75*b):Ke.test(o)?x=Math.max(g,.69*b)*("creator"===c?.975:1):Ue.test(o)?(x=b,w=0):x="furigana"===c?g:Math.max(g,.75*b),w="furigana"===c?0:w;const k=1*b*1;return i&&console.info(`getLetterWidth ${i}`,o,m,1,1,"|",k),{width:b,actualBoundWidth:g,boundWidth:"standard"===c?b*S:x+2*w,metric:m,offsetRatio:j}},wr=e=>{let{ctx:t,baseline:a,edge:r,letter:o,xRatio:n,deviation:i={},letterMetric:l,textDrawer:s}=e;const{boundWidth:c,metric:d=t.measureText(o),offsetRatio:u=0}=null!==l&&void 0!==l?l:{},{yOffset:p=K.yOffset,yRatio:m=K.yRatio}=n<.94?{}:i,b=d.width*n,f=c?c*n:b,h=null!==s&&void 0!==s?s:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:o}=e;t.fillText(a,o,r)},g=(b-f)/2,y=f*u;t.scale(1,m),h({ctx:t,letter:o,scaledEdge:r/n-g-y,scaledBaseline:(a+p)/m}),t.scale(1,1/m)},Sr=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${ot}])|(${Oe}[\\w\\W]+?${we})|(.+?)`):new RegExp(`([${ot}])|${Oe}([\\w\\W]+?)${we}|(.+?)`);return e.split(t).filter((e=>null!=e&&""!==e))},kr=(e,t,a,r)=>{const{fontSize:o,ordinalFontRatio:n=$.ordinalFontRatio,headTextFontRatio:i=$.headTextFontRatio}=a,{font:l,ordinalFont:s,symbolFont:c,symbolFontRatio:d,numberFont:u=l,numberFontRatio:p=1,furiganaFont:m}=t;let b=r.getFontInfo();let f=r.getFontInfo();let h=r.getFontInfo();let g=r.getFontInfo();let y=r.getFontInfo();return{applyNumberFont:()=>{b=r.getFontInfo(),e.font=r.setFamily(u).setSize(o*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(b.family).setSize(b.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;y=r.getFontInfo(),e.font=r.setSize(o*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(y.size).getFont()},applySymbolFont:()=>{f=r.getFontInfo(),e.font=r.setFamily(c).setSize(o*d).getFont()},stopApplySymbolFont:()=>{e.font=r.setFamily(f.family).setSize(f.size).getFont()},applyOrdinalFont:()=>{h=r.getFontInfo(),e.font=r.setFamily(s).setSize(o*n).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(h.family).setSize(h.size).getFont()},applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];g=r.getFontInfo(),e.font=r.setFamily(m).setWeight(t?"bold":"").setSize(o*i).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(g.family).setWeight(g.weight).setSize(g.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},Fr=(e,t,a,r,o)=>{const n=(r-o)/2;e.beginPath(),e.arc(t+n,a-n-1,n,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},Cr=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:o,headTextGap:n,headTextSpacing:i,gapPadding:l,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const p=0===r.length,m=o/a*d;let b=i,f=0;m<=.95?b=1*i:m<=1.175?b=i>=0?0:3*i:m<=1.56?b=i>=0?-1*i/4:3*i:(f=.66,b=i>=0?-1*i/4:2*i),(c||u>0&&u<1)&&(b=i);const h=o*(u&&!c?u:!f||c?1:f)+b*(r.length-1),g=p?0:(a-o)/r.length,y=a,v=1===t.length||2*l+h>a?"center":"space-around",x="center"===v?b:g,j="center"===v?2*l+h:y,O=c?Math.min(j,a):j,w="center"===v?(h-a)/2:0,S=Math.max(n,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,v,x,"|",r,O,j,t,a,S),{gapPadding:l,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:v,halfGap:S,headTextXRatio:"center"===v?f:0}},Tr=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,Rr=e=>{let{ctx:t,token:a,nextToken:r,xRatio:o,previousTokenGap:n=0,letterSpacing:i=$.letterSpacing,format:l,textData:s}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const{currentFont:c,fontData:d,fontLevel:u}=s,{metricMethod:p,headTextGapRatio:m=Y.headTextGapRatio,headTextOverflow:b=Y.headTextOverflow,fontStyle:f}=d,h=d.fontList[u],{bulletSymbolWidth:g,capitalLetterRatio:y,fontSize:v,iconSymbolWidth:x=g,largeSymbolRatio:j=$.largeSymbolRatio,headTextSpacing:O=$.headTextSpacing,squareBracketRatio:w,wordLetterSpacing:S}=h,k=-.5*v,{applyScale:F,reverseScale:C,applyLargerText:T,stopApplyLargerText:R,applyFuriganaFont:N,stopApplyFuriganaFont:L,applyOrdinalFont:E,stopApplyOrdinalFont:I,applySymbolFont:A,stopApplySymbolFont:B,applyNumberFont:z,stopApplyNumberFont:W}=kr(t,d,h,c),D=1+i/2;let P="",M=0,H=0,K=!1;const G=void 0===r;let U=null!==n&&void 0!==n?n:0,X=!1,V=0;const _=a.replaceAll(new RegExp(Ne,"g"),"").split(je).filter((e=>null!=e&&""!==e));for(let $=0;$<_.length;$++){const e=0===$,a=_[$];if("\u29be"===a){U=0;M+=x/o*D,e&&(V=0,P=a[0])}else if("\u25cf"===a){U=0;M+=g/o*D,e&&(V=0,P=a[0])}else if(/[\xa9]/.test(a)){U=0,T(j);const r=t.measureText(a).width/o;R(),M+=r*D,e&&(V=0,P=a[0])}else if(De.test(a)){U=0,E();const r=t.measureText(a).width/o;I(),M+=r*D,H+=1,e&&(V=0,P=a[0])}else if(rt.test(a)){const[n,c,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),u="||"===c,{totalWidth:p}=Rr({ctx:t,token:n,nextToken:r,xRatio:o,letterSpacing:i,previousTokenGap:0,format:l,textData:s});N();const h=d.split("").map((e=>Or({ctx:t,letter:e,fontStyle:f,metricMethod:"furigana",xRatio:1}).boundWidth)).reduce(((e,t)=>e+t),0);L();const{halfGap:g,headTextWidth:y}=Cr({headText:d,headTextLetterWidth:h/o,footText:n,footTextWidth:p,headTextGap:k/o,headTextSpacing:O,gapPadding:m*v/o,fitFootText:u,sentenceXRatio:o,xRatio:"condense"===b&&n.length>1?Math.min(1,o+.1):0}),x=0===d.length?Math.max(k,p/nt):g,j=x,w=x,S=Math.max(y,p),F=Tr(U,j);U=w,M+=S-F,H+=1,e&&(X=!0,V=j,P=n[0])}else if(xe.test(a)){const r=S?1+S/2:D;t.letterSpacing=(r-1)*c.getFontInfo().sizeAsNumber+"px";let o=a,n=0;for(;""!==o;){let e=o[0],a=o.slice(1),r=t.measureText(o).width-t.measureText(a).width;ye.test(e)?(F(w),r=t.measureText(o).width-t.measureText(a).width,C(w)):ge.test(e)?(F(y),r=t.measureText(o).width-t.measureText(a).width,C(y)):He.test(e)?(z(),r=t.measureText(o).width-t.measureText(a).width,W()):Ie.test(e)&&"tcg"===f?(A(),r=t.measureText(o).width-t.measureText(a).width,B()):r=t.measureText(o).width-t.measureText(a).width,n+=r,o=a}const i=Math.max(k,n/nt),l=i;M+=n-Tr(U,i),U=l,e&&(V=i,P=a[0]),t.letterSpacing="0px"}else if(Ie.test(a)&&"tcg"===f){A();const r=t.measureText(a).width*D;B();const o=Math.max(k,r/nt),n=o;M+=r-Tr(U,o),U=n,e&&(V=o,P=a[0])}else{const{boundWidth:r}=Or({ctx:t,letter:a,isLastOfLine:G,fontStyle:f,metricMethod:p,xRatio:o}),n=r*D,i=Math.max(k,n/nt),s=i;M+=n-Tr(U,i),U=s,("ocg"===l||"tcg"===l&&/\s+/.test(a))&&!1===Ue.test(a)&&(H+=1,$===_.length-1&&(K=!0)),e&&(V=i,P=a[0]),_e.test(a)&&(V=0,U=0)}}return{totalWidth:M,spaceCount:H,spaceAtEnd:K,leftMostLetter:P,rightGap:U,leftGap:V,offsetable:X}},Nr=e=>{let{ctx:t,line:a,width:r,xRatio:o,format:n,isLast:i,textData:l}=e;const s=Sr(a);let c=0,d=0,u=0;for(let m=0,b=o;m<s.length;m++){const e=s[m],a=s[m+1];if(e===Fe){b=1;continue}if(e===Ce){b=o;continue}const{spaceCount:r,totalWidth:i,spaceAtEnd:p,leftGap:f,rightGap:h,leftMostLetter:g}=Rr({ctx:t,token:e,nextToken:a,xRatio:b,previousTokenGap:u/b,textData:l,format:n});u=h*b,c+=i*b+((0===m&&f>0?-1*Math.min(20,f*b):0)+(0===m&&Pe.test(g)?4*b:0)),d+=r-(p&&void 0===a?1:0)}const p=d>0?(r-c)/d:0;return{tokenList:s,spaceWidth:i?"tcg"===n?p>1.5?0:p:p>3.65?0:p:p}},Lr=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:o=0,width:n,format:i,textData:l}=e;const{fontData:s,fontLevel:c}=l,{letterSpacing:d}=s.fontList[c],u=[],p=r.reduce(((e,r)=>{const o=(a<=100?100:a)/1e3,s=n/o,c=Sr(r,!0);let p=1,m=[],b=0,f=0,h=0;for(let n=0,y=o;n<c.length;n++){const e=c[n],r=c[n+1];e===Fe?(h+=1,y=1):e===Ce&&(h-=1,y=o);let{leftMostLetter:g,totalWidth:v,rightGap:x,leftGap:j}=Rr({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:f,format:i,letterSpacing:d,textData:l});let O=v/(h>0?o:1)+(0===n?(j>0?-1*Math.min(20/y,j):0)+(Pe.test(g)?4:0):0);if(b+O>s){let o=m.join("").trim();h>0&&(o+=Ce),h<0&&(o=Fe+o),h=0,u.push({line:o,effectiveMedian:a,isLast:!1,actualLineWidth:b});let{totalWidth:n,rightGap:s,leftGap:c}=Rr({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:0,format:i,textData:l});b=n+((c>0?-1*Math.min(20/y,c):0)+(Pe.test(g)?4:0)),f=s,m=[e],p+=1}else b+=O,f=x,m.push(e)}let g=m.join("").trim();return h>0&&(g+=Ce),h<0&&(g=Fe+g),h=0,u.push({line:g,effectiveMedian:a,isLast:!0,actualLineWidth:b}),e+p}),0)+(null!==o&&void 0!==o?o:0);return{currentLineList:u,currentLineCount:p}},Er=e=>{let{ctx:t,fontSize:a,edge:r,baseline:o,headText:n,headTextLetterWidth:i,footText:l,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:p,headTextGapRatio:m,xRatio:b,fontStyle:f,textWorker:h,fitFootText:g,headTextOverflow:y}=e;const{applyFuriganaFont:v,stopApplyFuriganaFont:x,resetScale:j,applyScale:O}=h,w="condense"===y&&l.length>1?Math.min(1,b+.1):0,{gapPadding:S,letterSpacing:k,trueHeadTextWidth:F,halfGap:C,alignment:T,headTextXRatio:R}=Cr({headText:n,headTextLetterWidth:i,footText:l,footTextWidth:s*b,headTextGap:c,headTextSpacing:d*b,gapPadding:a*m,fitFootText:g,sentenceXRatio:b,xRatio:w}),N=F>s*b;if(0===n.length)return{trueHeadTextWidth:F,halfGap:C};const L=g?Math.min(1,s*b/F):1,E=g?L:w&&"center"===T?w:R;let I=r;j(),(g||E)&&(O(E,1),I=r/E),"center"===T?(I+=S,N?E>L&&(I+=(s*b/E-F)/2/E):I+=(s*b-F)/2):I+=k/2;for(const A of n){v();const{width:e,boundWidth:r}=Or({ctx:t,letter:A,fontStyle:f,metricMethod:"furigana",xRatio:1}),n=(e-r)/2;x(),v(p),t.fillText(A,I-n,o-a*u),x(),I+=r+k}return(g||E)&&j(),O(b,1),{trueHeadTextWidth:F,halfGap:C}},Ir=e=>{let{ctx:t,tokenList:a,trueEdge:r,trueBaseline:o,spaceWidth:n=0,xRatio:i,yRatio:l=1,textData:s,format:c,textDrawer:d,debug:u=!1}=e;const{currentFont:p,fontData:m,fontLevel:b}=s,f=m.fontList[b],{headTextFillStyle:h,headTextBold:g=Y.headTextBold,headTextHeightRatio:y=Y.headTextHeightRatio,headTextOverflow:v=Y.headTextOverflow,headTextGapRatio:x=Y.headTextGapRatio,metricMethod:j,fontStyle:O,letterDeviationMap:w={}}=m,{bulletSymbolOffset:S=$.bulletSymbolOffset,bulletSymbolWidth:k,capitalLetterRatio:F=$.capitalLetterRatio,fontSize:C,headTextSpacing:T=$.headTextSpacing,iconSymbolWidth:R=k,largeSymbolRatio:N=$.largeSymbolRatio,letterSpacing:L=$.letterSpacing,ordinalFontOffsetY:E=$.ordinalFontOffsetY,squareBracketRatio:I=$.squareBracketRatio,wordLetterSpacing:A}=f,B=kr(t,m,f,p),{stopApplyFuriganaFont:z,applyFuriganaFont:W,stopApplyLargerText:D,applyLargerText:P,stopApplyNumberFont:M,applyNumberFont:H,stopApplyOrdinalFont:K,applyOrdinalFont:G,applyScale:U,reverseScale:X,applySymbolFont:V,stopApplySymbolFont:_,applyAsymmetricScale:q,resetScale:J}=B,Z=1+L/2,Q=o/l;let ee=0,te=[],ae=0,re=r;for(let $=0,Y=i;$<a.length;$++){const e=a[$];if(e===Fe){Y=1,t.setTransform(1,0,0,1,0,0);continue}if(e===Ce){Y=i,t.scale(Y,1);continue}const r=-.5*Y,m=C*r,b=a[$+1],f=a[$+2],ie={ctx:t,xRatio:Y,letterSpacing:L,format:c,textData:s},le={ctx:t,baseline:Q,xRatio:Y,textDrawer:d},se=e.split(je).filter((e=>null!=e&&""!==e)),{leftMostLetter:ce,leftGap:de,rightGap:ue,totalWidth:pe,spaceCount:me}=Rr({token:e,nextToken:b,previousTokenGap:ee/Y,...ie}),be=0===$?(de>0?-1*Math.min(20,de*Y):0)+(Pe.test(ce)?4:0):0;let fe=re+be,he=ee;for(let a=0;a<se.length;a++){var oe,ne;const i=se[a],u=null!==(oe=se[a+1])&&void 0!==oe?oe:b,L=null!==(ne=se[$+2])&&void 0!==ne?ne:f;if(e===Fe||e===Ce);else if("\u29be"===i)te.push({edge:fe,size:R,baseline:Q}),fe+=R*Z,he=0,ae=0;else if("\u25cf"===i)J(),Fr(t,fe,o+S,k,at(c)),fe+=k*Z,q(Y,l),he=0,ae=0;else if(/[\xa9]/.test(i))J(),P(N),wr({...le,letter:i,edge:fe*Y,baseline:o+("tcg"===c?1:2)}),fe+=t.measureText(i).width*Z,D(),q(Y,l),he=0,ae=0;else if(De.test(i))J(),G(),wr({...le,letter:i,edge:fe*Y,baseline:o+E}),fe+=t.measureText(i).width*Z,K(),q(Y,l),fe+=n,he=0,ae=0;else if(rt.test(i)){const[e,a,o=""]=i.replaceAll(/{|}/g,"").split(/(\|+)/),p="||"===a,{totalWidth:b}=Rr({token:e,nextToken:u,previousTokenGap:0,...ie});W();const f=o.split("").map((e=>Or({ctx:t,letter:e,fontStyle:O,metricMethod:"furigana",xRatio:1}).boundWidth)).reduce(((e,t)=>e+t),0);z();const{headTextWidth:j,halfGap:w}=Cr({headText:o,headTextLetterWidth:f,footText:e,footTextWidth:b*Y,headTextGap:m,headTextSpacing:T*Y,gapPadding:C*x,fitFootText:p,sentenceXRatio:Y,xRatio:"condense"===v&&e.length>1?Math.min(1,Y+.1):0}),S=0===o.length?Math.max(m,b*r):w,k=S,F=S,R=Tr(he,F),N=F>0?F-R:0,{offsetable:E,leftGap:I}=Rr({token:u,nextToken:L,previousTokenGap:k/Y,...ie}),A=I*Y,D=Tr(k,A),P=N+(k>0?k-D:0);let M=0,H=0;P>0&&A>=-2&&E?(M=(P+2*Math.max(A,0))/3,H=Math.max(A,0)-M):M=N;const $=fe+(S<0?-R:be?-be:M)+ae;ae=H,Ir({ctx:t,format:c,textData:s,tokenList:Sr(e),trueBaseline:Q,trueEdge:$,xRatio:Y,yRatio:l,spaceWidth:0,textDrawer:d,debug:!1});const K=t.fillStyle,G=t.strokeStyle,U=t.shadowColor,X=t.shadowOffsetX,V=t.shadowOffsetY,_=t.shadowBlur;h&&(t.fillStyle=h,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);Er({ctx:t,fontSize:C,edge:fe-R,baseline:Q,headText:o,headTextLetterWidth:f,footText:e,footTextWidth:b,headTextGap:m,headTextSpacing:T,headTextHeightRatio:y,headTextBold:g,headTextGapRatio:x,xRatio:Y,fontStyle:O,textWorker:B,fitFootText:p,headTextOverflow:v}),t.fillStyle=K,t.strokeStyle=G,t.shadowColor=U,t.shadowOffsetX=X,t.shadowOffsetY=V,t.shadowBlur=_,fe+=Math.max(b*Y,j)-R+n,he=k}else if(xe.test(i)){const e=A?1+A/2:Z;t.letterSpacing=(e-1)*p.getFontInfo().sizeAsNumber+"px";const a=t.measureText(i).width*Y,o=Math.max(m,a*r),n=o;fe-=Tr(he,o);let l=i,s=fe;for(;""!==l;){let e=l[0],a=l.slice(1),r=0;const o={...le,deviation:w[e],letter:e,edge:s};if(ye.test(e))U(I),r=t.measureText(l).width-t.measureText(a).width,wr({...o,edge:s/I,baseline:Q/I}),X(I);else if(ge.test(e)){U(F),r=t.measureText(l).width-t.measureText(a).width;const n=r>t.measureText(e).width*F?Math.round(r*(1-F))/2:0;wr({...o,edge:s/F+n,baseline:Q/F}),X(F)}else He.test(e)?(H(),r=t.measureText(l).width-t.measureText(a).width,wr(o),M()):Ie.test(e)&&"tcg"===O?(V(),r=t.measureText(l).width-t.measureText(a).width,wr(o),_()):(r=t.measureText(l).width-t.measureText(a).width,wr(o));s+=r*Y,l=a}fe=s,he=n,ae=0,t.letterSpacing="0px"}else if(Ie.test(i)&&"tcg"===O){const e=i;V();const a=t.measureText(e).width*Z*Y,o=Math.max(m,a*r),n=o;fe-=Tr(he,o),wr({...le,letter:e,edge:fe}),fe+=a,_(),he=n,ae=0}else{const e=i,a=Or({ctx:t,letter:e,fontStyle:O,metricMethod:j,isLastOfLine:void 0===u,xRatio:Y}),o=a.boundWidth*Z*Y,l=Math.max(m,o*r),s=l;fe-=Tr(he,l),wr({...le,letter:e,edge:fe,deviation:w[e],letterMetric:a}),fe+=o,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==Ue.test(e)&&(fe+=n),_e.test(e)||(he=s),ae=0}}ee=ue*Y,u&&lr({ctx:t,baseline:Q,edge:re,width:pe*Y,xRatio:Y}),re+=pe*Y+me*n+be}return{tokenEdge:re,iconPositionList:te}},Ar=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:o=!0,dictionaryType:n="rubyForm"}=null!==a&&void 0!==a?a:{},i=null!==e&&void 0!==e?e:"";let l="",s="ocg"===t?ne:ie;for(const f of i){var c;l+=null!==(c=s[f])&&void 0!==c?c:f}const d=l,u=(r?d.replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${Se}$1${ke}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(Re,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,(e=>{const t=le[e];return null!==t&&void 0!==t?t:e})).replaceAll(new RegExp("{{([^{}]+?)}}","g"),(e=>e.replaceAll("{{",Fe).replaceAll("}}",Ce))).replaceAll(new RegExp("{[^{}]+?}","g"),(e=>`${Oe}${e}${we}`)),p=("tcg"===t||!1===o?u:u.replaceAll(new RegExp(Ae,"g"),(e=>{var t;const a=null!==(t=B[e][n])&&void 0!==t?t:B[e].rubyForm;return`${Oe}${a}${we}`}))).replaceAll(new RegExp(ve,"g"),(e=>`${Oe}${e}${we}`)).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),(e=>`${Oe}${e}${we}`)).replaceAll(new RegExp(We,"g"),(e=>`${Oe}${e}${we}`)).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),(e=>`${Oe}${e}${we}`)).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),(e=>`${Oe}${e}${we}`));let m=[],b=0;for(const f of p)f===Oe?(0===b&&m.push(f),b+=1):f===we?(b-=1,0===b&&m.push(f)):m.push(f);return m.join("").replaceAll(`${ke}${we}`,`${we}${ke}`).replaceAll(`${Oe}${Se}`,`${Se}${Oe}`).replaceAll(`${Fe}${we}`,`${we}${Fe}`).replaceAll(`${Oe}${Ce}`,`${Ce}${Oe}`).replaceAll(`${Se}${ke}`,"").replaceAll(`${Oe}${we}`,"")},Br=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:o}=e;const n=[t,o?"type":"",r?"stat":""].filter((e=>""!==e)).join("-"),i=[t,o?"type":"",r?"stat":""].filter((e=>""!==e)).join("-");let l=q[i];return a&&"tcg"===t&&_[i]&&(l=_[i]),{fontDataKey:i,fontData:l,sizeList:R[n]}},{width:zr}=s,Wr=e=>{var t;let{ctx:a,content:r,isNormal:o=!1,useItalic:n=!1,fontData:i=q.tcg,textStyle:l,sizeList:s=R["tcg-type"],condenseTolerant:c="strict",format:d,furiganaHelper:u,option:p}=e;const{defaultSizeLevel:m,forceRelaxCondenseLimit:b}=null!==p&&void 0!==p?p:{};let f=null!==m&&void 0!==m?m:0;if(!a||!r)return f;const h=Ar(r.trim(),d,{furiganaHelper:u}),{effectText:g,effectFlavorCondition:y,fullLineList:v}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e,o=[];const n=new RegExp(`^(${Se}([^${ke}]*)${ke}\\s*)`);let i,l;do{var s,c;i=null===(s=n.exec(r))||void 0===s?void 0:s[1],l=null===(c=n.exec(r))||void 0===c?void 0:c[2],l&&i&&(o.push(l),r=r.replace(i,""))}while(i&&l);let d="";const u=null===(t=new RegExp(Ee,"m").exec(e))||void 0===t?void 0:t[1];return u&&a?(d=u.trim(),r=r.replace(u,"")):d="",{fullLineList:o,effectText:r,effectFlavorCondition:d}}(h,o),x=(null!==(t=v.length)&&void 0!==t?t:0)+(y.length>0?1:0),j=g?g.split("\n"):[],{font:O,fontList:w}=i;for(;f<w.length&&f>=0;){var S,k,F;const e="tcg"===d?b&&f<b?Q.relaxed:null!==(S=Q[c])&&void 0!==S?S:Q.strict:{1:800,2:800,3:800},t=w[f],{fontSize:r,lineHeight:o,lineCount:u}=t,{trueEdge:p,trueWidth:m,trueBaseline:h}=null!==(k=s[f])&&void 0!==k?k:s[s.length-1],g=n&&"tcg"===d?m-2:m,C=ea();a.font=C.setWeight("").setSize(r).setFamily(O).getFont(),a.textAlign="left";const T={fontData:i,fontLevel:f,currentFont:C};let R=[];const N=Qt((e=>{const{currentLineList:t,currentLineCount:r}=Lr({ctx:a,median:e,paragraphList:j,additionalLineCount:x,format:d,textData:T,width:g});return R=t,!(r>u)}),200),L=gr({ctx:a,...l});if(!(N<(null!==(F=e[`${j.length}`])&&void 0!==F?F:e[3])&&f<w.length-1)){a.clearRect(0,0,zr,1111);let e=h+o;if([...v.map((e=>({line:e,isLast:!0,effectiveMedian:Qt((t=>{const{currentLineCount:r}=Lr({ctx:a,median:t,paragraphList:[e],format:d,textData:T,width:g});return!(r>1)}))}))),...R].forEach((t=>{let{line:r,isLast:n,effectiveMedian:i}=t;const l=i/1e3,{tokenList:s,spaceWidth:c}=Nr({ctx:a,line:r,xRatio:l,format:d,isLast:n,textData:T,width:g});a.scale(l,1),Ir({ctx:a,tokenList:s,xRatio:l,yRatio:1,trueEdge:p,trueBaseline:e,spaceWidth:c,textData:T,format:d}),e+=o,a.setTransform(1,0,0,1,0,0)})),y.length>0){const t=q.tcg,r=t.fontList[f],{fontSize:o,lineHeight:n}=r,i=ea();a.font=i.setSize(o).setFamily(t.font).getFont();const l={fontData:t,fontLevel:f,currentFont:i},s=Qt((e=>{const{currentLineCount:t}=Lr({ctx:a,median:e,paragraphList:[y],format:d,textData:l,width:g});return!(t>1)}))/1e3;a.scale(s,1);const c=Sr(y);Ir({ctx:a,tokenList:c,xRatio:s,yRatio:1,trueEdge:p,trueBaseline:e,textData:l,format:d}),e+=n,a.setTransform(1,0,0,1,0,0)}break}f+=1,L()}return f},{width:Dr}=s,{width:Pr,height:Mr,topToPendulumStructure:Hr,pendulumStructureHeight:$r,leftToPendulumStructure:Kr,effectBoxHeight:Yr,effectBoxWidth:Gr,leftToEffectBox:Ur,topToEffectBox:Xr}=s,Vr=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,format:o,hasBackground:n,frame:i,bottomFrame:l,backgroundType:s,cardIcon:c,attribute:d,star:m,foil:b,pendulumSize:h,opacity:g,isLink:y,isSpeedSkill:v,isXyz:x,isPendulum:j,loopFinish:O,loopArtFinish:w}=e;const S=t.getContext("2d"),{artBorder:k,nameBorder:F,body:C,name:T,pendulum:R,text:N,boundless:L}=g,{artX:E,artY:I,artFinishX:A,artFinishY:B,artWidth:z}=p(j,g),W=C>0||k,D=860,P="normal"!==b,M=x||v?i:"normal",H=M,$=!L&&W,K={calculateCardArtRedrawCoordination(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;const o=null!==t&&void 0!==t?t:g,{body:n}=o,{artX:i,artY:l,artWidth:s}=p(j,o,r),{width:c,height:d}=e,u=s/c,m=n<100?(Kr-i)/u:0,b=m*u,f=n<100?(Hr-l)/u:0,h=f*u,y=n<100?d-$r/u:0;return{imageScaledRatio:u,sourceOffsetX:m,sourceOffsetY:f,destinationOffsetX:b,destinationOffsetY:h,offsetHeight:y,destinationX:i+b,destinationY:l+h,destinationWidth:s-2*b,destinationHeight:s/(c/d)*a-y*u}},drawFrame:async()=>{if(S){if(S.globalAlpha=C/100,await vr(S,`frame/frame-${i}.png`,0,0),await vr(S,`frame-pendulum/frame-pendulum-${l}.png`,0,0),n&&r&&"frame"===s){const{width:e,height:t}=r,a=r.cloneNode(),o=null===a||void 0===a?void 0:a.getContext("2d");a&&o&&(a.width=Pr,a.height=Mr,o.drawImage(r,0,0,e,t,0,0,Pr,Mr),o.clearRect(u.normal.artX,u.normal.artY,u.normal.artWidth,u.normal.artWidth/u.normal.artRatio),o.clearRect(Ur,Xr,Gr,Yr),S.drawImage(a,0,0,Pr,Mr,0,0,Pr,Mr))}S.globalAlpha=1}},drawCardArt:()=>{if(!a||!S)return;const{width:e,height:t}=a;t<=0||S.drawImage(a,0,0,e,t,E,I,z,z/(e/t))},drawBackground:e=>{if(!r||!S||!n)return;const{width:t,height:a}=r;if(a<=0)return;if("pendulum"===e&&"frame"!==s){let e=K.calculateCardArtRedrawCoordination(r);"full"===s?e=K.calculateCardArtRedrawCoordination(r,{...g,body:0},void 0,"full"):"fit"===s&&(e=K.calculateCardArtRedrawCoordination(r,g,void 0,"fit"));const{sourceOffsetX:o,sourceOffsetY:n,offsetHeight:i,destinationX:l,destinationY:c,destinationWidth:d,destinationHeight:u}=e;return void S.drawImage(r,o,n,t-2*o,a-i,l,c,d,u)}const{artX:o,artY:i,artWidth:l}=p(j,{...g,boundless:!0},s);S.drawImage(r,0,0,t,a,o,i,l,l/(t/a))},drawAttribute:async()=>{await vr(S,`attribute/attr-${o}-${d.toLowerCase()}.png`,678,55)},drawStar:async e=>{let{style:t,starAlignment:a}=e;const r="auto"===c?gt(i):c;await(async e=>{let{ctx:t,cardIcon:a,text:r,star:o,starAlignment:n="auto",style:i,onStarDraw:l}=e,s="string"===typeof o?""===o?0:1:"number"===typeof o?o:0,c=50*s+4*(s-1),d="right";["rank","negative-level"].includes(a)&&(d="left"),d="auto"===n?d:n,s>12&&(d="center"),r&&"center"===d&&(s=0,c=0);const u="center"===d?(Dr+c)/2:"left"===d?85.9125+c:728.775;let p=-54;if(t&&r&&"st"!==a){const e=50,a=gr({ctx:t,...i});t.textAlign="left"===d||"right"===d?d:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const o="center"===d?t.measureText(r).width/-2:"left"===d?4:-58;t.fillText(r,u+o,145+.9*e),t.textAlign="left",a()}return await Promise.all([...Array(s)].map((async()=>{p+=54;let e=[u-(50+p),145];return await vr(t,`subfamily/subfamily-${a}.png`,...e),await l(e)})))})({ctx:S,cardIcon:r,text:"string"===typeof m?m:null,star:m,starAlignment:a,style:t,onStarDraw:async e=>"st"===r?Promise.resolve():await O(S,"star",(async t=>vr(S,`finish/finish-${t}-star.png`,...e)))})},drawPendulumScaleIcon:async()=>{await vr(S,`frame-pendulum/pendulum-scale-${h}.png`,0,750)},drawLinkArrowMap:async e=>{await Promise.all([1,2,3,4,6,7,8,9].map((async t=>{const{left:a,top:r,height:o,width:n}=be[t-1],i=e.includes(`${t}`),l=`link/link-inactive-${t}`,s=`link/link-active-${t}`,c=[a,r,n,o];return await xr(S,`${l}-base${L?"-full":""}.png`,...c),await xr(S,`${l}-core.png`,...c),i?(await xr(S,`${s}-base.png`,...c),xr(S,`${s}-core.png`,...c)):void 0})))},drawStatBorder:async e=>{await jr(t,"frame/frame-stat-border.png",0,1070,813,20,e)},drawNameBackground:async()=>{S&&(S.globalAlpha=T/100,await vr(S,`background/background-name-${i}.png`,0,0),S.globalAlpha=1)},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];S&&(S.globalAlpha=N/100,await vr(S,`background/background-text-${l}.png`,54,884),e&&(S.globalAlpha=R/100,await vr(S,`background/background-pendulum-${l}.png`,55,738)),S.globalAlpha=1)},drawFrameBorder:async()=>vr(S,`frame/frame-border-${M}.png`,0,0),drawNameBorder:async()=>F?vr(S,`frame/name-border-${H}.png`,0,0):Promise.resolve(),drawArtBorder:async()=>{if(W){let e="";e=x||v?`frame/art-border-${i}.png`:y||["zarc","hamon","uria","raviel"].includes(i)?"frame/art-border-special.png":"frame/art-border.png",await vr(S,e,60,170)}},drawPendulumBorder:async(e,t)=>{await vr(S,`frame-pendulum/border-pendulum-${h}-${t}`+(e?"":"-artless")+".png",30,185)},drawEffectBorder:async()=>{P||"speed-skill"!==l?await vr(S,"frame/effect-border.png",35,D):await vr(S,"frame/effect-border-speed-skill.png",35,D)},drawCardBorder:async()=>{await vr(S,`frame/card-border${P?`-${b}`:""}.png`,0,0)},drawArtBorderFoil:async()=>{W&&await vr(S,`frame/art-border-${b}.png`,60,170)},drawEffectBorderFoil:async()=>{await vr(S,`frame/effect-border-${b}.png`,35,D)},drawLinkMapFoil:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;await vr(S,`link/link-overlay-arrow-${b}${e?"":"-artless"}.png`,0,175)},drawNameFinish:async()=>{(W||F)&&await O(S,"name",(async e=>vr(S,`finish/finish-${e}-name.png`,0,0)))},drawAttributeFinish:async()=>{d!==f&&await O(S,"attribute",(async e=>vr(S,`finish/finish-${e}-attribute.png`,678,55)))},drawArtFinish:async()=>{$&&await w(S,"art",(async e=>await vr(S,`finish/art-finish-${e}${j?`-pendulum-${h}`:""}.png`,A,B)))},drawArtOverlayFinish:async()=>{await O(S,"art-overlay",(async e=>vr(S,`finish/finish-${e}-`+($?"art":"unart")+"-overlay"+(j?`-pendulum-${h}`:"")+".png",A,B)))},drawArtBorderFinish:async()=>{W&&await O(S,"art-border",(async e=>vr(S,`finish/finish-${e}-art-border.png`,0,0)))},drawPendulumArtBorderFinish:async()=>{W&&await O(S,"art-border-pendulum",(e=>vr(S,`finish/finish-${e}-art-border-pendulum-${h}.png`,0,0)))},drawBorderPendulumFinish:async()=>{await O(S,"border-pendulum",(async e=>vr(S,`finish/finish-${e}-border-pendulum-${h}.png`,0,0)))},drawFrameFinish:async()=>{await O(S,"frame",(async e=>vr(S,`finish/finish-${e}-frame${j?`-pendulum-${h}`:""}.png`,0,0)))},drawFrameBackgroundFinish:async()=>{await O(S,"frame-background",(async e=>vr(S,`finish/finish-${e}-frame-background${j?`-pendulum-${h}`:""}.png`,0,0)))},drawOverlayFinish:async()=>{await O(S,"overlay",(async e=>vr(S,`finish/finish-${e}-overlay.png`,0,0)))},drawCardBorderFinish:async()=>{await O(S,"card-border",(async e=>vr(S,`finish/finish-${e}-card-border.png`,0,0)))}};return K},_r=async(e,t,a,r,o,n,i)=>{const{isSpeedSkill:l,format:s,cloneNode:c,frame:d,furiganaHelper:u}=i,p=null===c||void 0===c?void 0:c.getContext("2d");if(e&&p&&t){var m,b,f;const{font:i,fillStyle:h,headTextFillStyle:g,shadowBlur:y,hasShadow:v,shadowColor:x,shadowOffsetX:j,shadowOffsetY:O,hasOutline:w,lineColor:S,lineWidth:k,lineOffsetX:C,lineOffsetY:T,hasGradient:R,gradientAngle:N,gradientColor:L,pattern:E}={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none",...n},{patternImage:I,blendMode:A}=null!==(m=F[null!==E&&void 0!==E?E:""])&&void 0!==m?m:{},B=w;e.textAlign="left",v&&(e.shadowColor=x,e.shadowOffsetY=O,e.shadowOffsetX=j,e.shadowBlur=y),w&&(e.lineWidth=k,e.strokeStyle=S);const z={...(null!==(b=ee[i])&&void 0!==b?b:ee.Default).fontData,headTextFillStyle:g},W=ea({defaultFamily:z.font,defaultSize:z.fontList[0].fontSize,defaultWeight:z.weight}),D={fontLevel:0,fontData:z,currentFont:W},P=Ar(t,s,{multiline:!1,furiganaHelper:u,dictionaryType:"rubyFormName"}),M="ocg"===s?[P]:P.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),H=ea({defaultFamily:z.font,defaultSize:z.fontList[0].fontSize,defaultWeight:z.weight}),K=H.getFont(),Y=H.setSize((e=>e*z.symbolFontRatio)).setStyle("small-caps").setFamily(z.symbolFont).getFont();let G=0,U=0;M.forEach(((t,a)=>{e.font=a%2===0?K:Y;const r=e.measureText(t.replaceAll(Te,""));G=Math.max(G,r.actualBoundingBoxAscent),U=Math.max(U,r.actualBoundingBoxDescent)}),0),e.font=K;let X=0;const V=Qt((t=>{const{currentLineCount:a,currentLineList:r}=Lr({ctx:e,median:t,paragraphList:[P],format:s,textData:D,width:o});return!(a>1)&&(X=r[0].actualLineWidth,!0)}))/1e3,_=1;e.scale(V,_);const q=null!==(f=z.fontList[0].offsetY)&&void 0!==f?f:$.offsetY,J=Sr(P),Z=X>0&&R?((e,t,a,r,o,n,i,l)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=i+l,p=r+o/2,m=n+(l-i)/2;let b=o,f=u;"1"!==c&&"3"!==c||(b=u,f=o);const h=Math.sqrt(b**2/4+f**2/4);if(h>0){const t=90-(180*Math.asin(b/2/h)/Math.PI-d),r=Math.sin(t/180*Math.PI)*h,o=Math.sin(d/180*Math.PI)*r,n=Math.cos(d/180*Math.PI)*r;let i=o,l=n;"1"===c&&(i=n,l=-o),"2"===c&&(i=-o,l=-n),"3"===c&&(i=-n,l=o);const s=p+i,u=m-l,f=p-i,g=m+l,y=e.createLinearGradient(s,u,f,g);return a.forEach((e=>{let{color:t,offset:a}=e;return y.addColorStop(parseFloat(a),t)})),y}})(e,N,ra(L),a,X,r,G,U):void 0;e.fillStyle=null!==Z&&void 0!==Z?Z:h,Ir({ctx:e,tokenList:J,xRatio:V,yRatio:_,trueEdge:a,trueBaseline:r,textData:D,format:s,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o-(l?q:0))}}),I&&c&&(e.setTransform(1,0,0,1,0,0),await vr(p,`frame/frame-${d}.png`,0,0),await vr(p,`background/background-name-${d}.png`,0,0),p.globalCompositeOperation=A,await xr(p,`finish-name/${I}.png`,a,r-G,o,G+U),e.globalCompositeOperation="source-in",e.drawImage(c,0,0),e.scale(V,_),e.globalCompositeOperation="source-over",Ir({ctx:e,tokenList:J,xRatio:V,yRatio:_,trueEdge:a,trueBaseline:r,textData:D,format:s,textDrawer:()=>{}})),B&&(e.globalCompositeOperation="destination-over",Ir({ctx:e,tokenList:J,xRatio:V,yRatio:_,trueEdge:a,trueBaseline:r,textData:D,format:s,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.lineJoin="round",t.strokeText(a,r+C,o+T-(l?q:0))}})),e.globalCompositeOperation="source-over",e.setTransform(1,0,0,1,0,0);const Q={font:"Default",fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,preset:"commonB",pattern:"none"};e.fillStyle=Q.fillStyle,e.shadowColor=Q.shadowColor,e.shadowOffsetY=Q.shadowOffsetY,e.shadowOffsetX=Q.shadowOffsetX,e.shadowBlur=Q.shadowBlur,e.lineWidth=Q.lineWidth,e.strokeStyle=Q.lineColor,e.lineJoin="miter",e.globalCompositeOperation="source-over"}},qr={small:0,medium:1,large:2},Jr=e=>{var t,a;let{ctx:r,value:o,format:n,metricMethod:i,size:l,furiganaHelper:s}=e;const{edgeAlignment:c="left",trueEdge:d,trueBaseline:u,trueWidth:p}=null!==(t=null===(a=L[n])||void 0===a?void 0:a[l])&&void 0!==t?t:L.tcg.medium,m={tcg:re,ocg:oe}[n];i&&(m.metricMethod=i);const{font:b}=m,f=qr[l],h=m.fontList[f],g=ea({defaultFamily:b,defaultSize:`${h.fontSize}px`}),y={fontLevel:f,fontData:m,currentFont:g};let v=0;r.font=g.getFont(),r.textAlign="left";const x=Ar(o,n,{multiline:!1,furiganaHelper:s}),j=Qt((e=>{const{currentLineCount:t,currentLineList:a}=Lr({ctx:r,median:e,paragraphList:[x],format:n,textData:y,width:p});return!(t>1)&&(v=a[0].actualLineWidth,!0)}))/1e3;r.scale(j,1);const O=Ir({ctx:r,tokenList:Sr(x),xRatio:j,yRatio:1,trueEdge:"left"===c?d:d-v*j,trueBaseline:u,textData:y,format:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),{...O,xRatio:j}},Zr=(e,t,a,r)=>{if(e&&t){const o=60.5;e.font=`${o}px MatrixBoldSmallCaps`,e.textAlign="left";const n=.65,i=`${t}`.split("");let l=0;i.forEach((t=>{l+=e.measureText(t).width*("1"===t?n:1)}));let s=a-l/2;i.forEach((t=>{e.fillText(t,"1"===t?s-3:s,r+o),s+=e.measureText(t).width*("1"===t?n:1)}))}},Qr=(e,t,a,r)=>{if(!e)return;e.scale(1,.98),e.font="bold 35.73px Matrix-Bold";const o=sr(e,t,.075,a,r/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font="bold 34.74px Matrix-Bold",sr(e,"/",.15,o+5,r/1.01),e.setTransform(1,0,0,1,0,0)},eo=(e,t,a,r)=>{if(!e||null==t)return;const o=73.97;if("\u221e"===t)e.textAlign="right",e.font="bold 37px matrix",e.fillText(t,a+o,r);else if("?"===t)e.textAlign="right",e.font="bold 34px matrix",e.fillText(t,a+o,r);else{e.textAlign="left";const n=`${t}`.split("?");let i=n.reduce(((t,a,r)=>{e.font="37px MatrixBoldSmallCaps";let o=t+e.measureText(a).width;return r<n.length-1&&(e.font="37px matrix",o+=e.measureText("?").width),o}),0);if(i>0){const t=Math.min(o/i,1);e.scale(t,1),n.reduce(((a,o,i,l)=>{const s=l[l.length-1-i];let c=a;return e.font="37px MatrixBoldSmallCaps",c-=e.measureText(s).width*t,e.fillText(s,c/t,r),i<n.length-1&&(e.font="bold 37px matrix",c-=e.measureText("?").width*t,e.fillText("?",c/t,r)),c}),a+o),e.scale(1/t,1)}}},{height:to,width:ao}=s,ro=(e,t,a)=>{const{card:o}=tr(),{exportCanvasRef:n,artworkCanvasRef:i,backgroundCanvasRef:l,frameCanvasRef:m,creatorCanvasRef:b,effectCanvasRef:h,nameCanvasRef:y,passwordCanvasRef:x,pendulumEffectCanvasRef:j,pendulumScaleCanvasRef:O,setIdCanvasRef:w,statCanvasRef:k,stickerCanvasRef:F,cardIconCanvasRef:C,typeCanvasRef:T,finishCanvasRef:R,lightboxCanvasRef:L}=t,{format:A,hasBackground:B,backgroundType:z,frame:W,foil:M,finish:H,artFinish:K,opacity:Y,name:G,nameStyle:U,nameStyleType:X,effectTextStyle:V,pendulumTextStyle:_,typeTextStyle:q,statTextStyle:Q,otherTextStyle:ee,effect:re,effectStyle:oe,typeAbility:ne,isPendulum:ie,pendulumFrame:le,pendulumEffect:se,pendulumScaleBlue:ce,pendulumScaleRed:de,pendulumStyle:ue,atk:pe,def:me,linkMap:be,attribute:fe,cardIcon:he,subFamily:ge,star:ye,starAlignment:ve,setId:xe,password:je,creator:Oe,sticker:we,isLegacyCard:Se,isFirstEdition:ke,isDuelTerminalCard:Fe,isSpeedCard:Ce,isLimitedEdition:Te,furiganaHelper:Re}=o,Ne=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),Le="auto"===le?ie?"spell":W:le,Ee=null===oe||void 0===oe?void 0:oe.condenseTolerant,Ie=(e=>"normal"===e.frame&&ht(e))(o),Ae=bt(o),Be=(e=>e.isLink)(o),ze=ht(o),We=ft(o),{body:De=100,boundless:Pe}=Y,Me=!!(De<50||Pe),He=["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(Le),$e=yt(W),{levelStyle:Ke,resolvedEffectTextStyle:Ye,resolvedPendulumEffectTextStyle:Ge,resolvedStatTextStyle:Ue,resolvedTypeTextStyle:Xe,resolvedOtherEffectTextStyle:Ve}=Object(r.useMemo)((()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:o,otherTextStyle:n,statTextStyle:i,typeTextStyle:l}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,p,m]=r,b=d?{...p?{y:0,blur:4,shadowColor:m}:{},color:u}:{},[f,h,g,y]=o,v=f?{...g?{y:0,blur:4,shadowColor:y}:{},color:h}:{},[x,j,O,w]=l,S=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[k,F,C,T]=i,R=k?{...C?{y:1,blur:1,shadowColor:T}:{},color:F}:{},[N,L,E,I]=n;return{levelStyle:c,resolvedEffectTextStyle:b,resolvedOtherEffectTextStyle:N?{...E?{y:0,blur:0,shadowColor:I}:{},color:L}:{},resolvedPendulumEffectTextStyle:v,resolvedStatTextStyle:R,resolvedTypeTextStyle:S}})({lightFooter:He,lightHeader:$e,requireShadow:Me,effectTextStyle:V,pendulumTextStyle:_,otherTextStyle:ee,statTextStyle:Q,typeTextStyle:q})),[He,$e,Me,V,_,ee,Q,q]),_e=ge.toUpperCase(),qe=ne.map((e=>e.trim())).join("ocg"===A?"\uff0f":"\u200a/\u200a"),Je="auto"!==le||ie?!!(pe||me||Be&&be.length):ze,Ze="auto"===he?ze||We:"st"!==he||Be,{isInitializing:Qe,imageChangeCount:et,pendulumSize:tt="medium",language:at}=a,rt=e&&!1===Qe,ot=Object(r.useMemo)((()=>ur(H,D)),[H]),nt=Object(r.useMemo)((()=>ur([K],P)),[K]);Object(r.useEffect)((()=>{rt&&(Ne.current.frame.rerun+=1,Ne.current.frame.instructor=async()=>{var e;const t=null===(e=m.current)||void 0===e?void 0:e.getContext("2d"),a=i.current,r=l.current;if(!dr(t)||!m.current)return;const o={...d(),...Y},{artBorder:n,body:s,boundless:p,baseFill:b}=o,f=(e,a,r,o)=>new Promise((n=>{setTimeout((()=>{t.fillStyle=B?b:c,t.fillRect(e,a,r,o),n(!0)}),0)})),h=s>0||n;await f(0,0,ao,to);const{drawAttribute:g,drawBackground:y,drawCardArt:v,drawFrame:x,drawLinkArrowMap:j,drawPendulumScaleIcon:O,drawStar:w,drawNameBackground:S,drawEffectBackground:k,drawFrameBorder:F,drawNameBorder:C,drawArtBorder:T,drawPendulumBorder:R,drawBorderPendulumFinish:N,drawEffectBorder:L,drawCardBorder:E,drawStatBorder:I,drawAttributeFinish:D,drawArtBorderFoil:P,drawEffectBorderFoil:H,drawLinkMapFoil:$,drawNameFinish:K,drawArtFinish:G,drawArtOverlayFinish:U,drawArtBorderFinish:X,drawPendulumArtBorderFinish:V,drawFrameFinish:_,drawFrameBackgroundFinish:q,drawOverlayFinish:J,drawCardBorderFinish:Z,calculateCardArtRedrawCoordination:Q}=Vr({canvas:m.current,artworkCanvas:a,backgroundCanvas:r,format:A,frame:W,bottomFrame:Le,hasBackground:B,backgroundType:z,attribute:fe,cardIcon:he,star:ye,foil:M,pendulumSize:tt,opacity:o,isLink:Be,isSpeedSkill:We,isXyz:Ae,isPendulum:ie,loopFinish:ot,loopArtFinish:nt});if(r&&t&&y(),a&&t&&!p&&v(),await x(),await E(),await Z(),ie||(p||(await S(),await k(),await L(),await H()),await T(),await P(),await X()),ie&&!Be&&!p){if(a&&t&&a.height>0){const{width:e,height:r}=a,{sourceOffsetX:o,sourceOffsetY:n,offsetHeight:i,destinationX:l,destinationY:s,destinationWidth:c,destinationHeight:d}=Q(a);await f(l,s,c,d),y("pendulum"),t.drawImage(a,o,n,e-2*o,r-i,l,s,c,d)}await S(),await k(!0)}if(await G(),await U(),!ie||Be||p||(await O(),await R(h,"normal"),await R(h,M),await V(),h&&await N()),p||(await _(),await K()),h&&await q(),p){if(Be)await X();else if(ie){const e=u.fullCard.ratio/u.extendedPendulum.ratio;if(a&&t&&a.height>0){const{destinationX:t,destinationY:r,destinationWidth:o,destinationHeight:n}=Q(a,{...d(),...Y,body:100,boundless:!1},e);await f(t,r,o,n),y("pendulum")}h&&(await R(h,"normal"),await R(h,M)),await V()}await S(),await K(),await C(),a&&t&&v(),await U(),ie&&!Be?(await k(!0),await O(),await R(!1,"normal"),await R(!1,M),await N()):(await k(),await L(),await H()),await _()}if(Je&&await I({color:"#000000",...Ue}),!ie&&Be){await j(be),await $(!1);const e=gr({ctx:t,...Ue});Je&&await(async(e,t,a)=>{const r=e.getContext("2d");if(!r||!Array.isArray(t))return;await jr(e,"link/link-text.png",600,1080,120,30,a);const o=gr({ctx:r,...a});r.textAlign="right",r.scale(1.2,1),r.font="bold 26.55px RoGSanSrfStd-Bd",r.fillText(`${t.length}`,622.75,1105),r.setTransform(1,0,0,1,0,0),r.textAlign="left",o()})(m.current,null!==be&&void 0!==be?be:[],Ue),e()}await g(),await D(),Be||We||await w({style:Ke,starAlignment:ve}),p||await C(),await F(),await(async e=>{let{canvas:t,type:a,isPendulum:r,isLink:o,isDuelTerminalCard:n,isSpeedCard:i,bordered:l,textStyle:s}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(n){const e=r?[255,1072,175,35]:o?[151,848,216,24]:[80,843,270,30];await jr(t,`text/text-duel-terminal-${a}${l?"-bordered":""}.png`,...e,null!==s&&void 0!==s&&s.shadowColor?{...s,blur:3,x:0,y:0}:s)}if(i){const e=r?[255,1084,176.4,25]:o?[151,854,215.6,22]:[80,850,245,25];await jr(t,`text/text-speed-duel-${a}${l?"-bordered":""}.png`,...e,null!==s&&void 0!==s&&s.shadowColor?{...s,blur:3,x:0,y:0}:s)}}})({canvas:m.current,type:He&&!ie?"white":"black",bordered:(s<50||p)&&!ie,isDuelTerminalCard:Fe,isSpeedCard:Ce,isLink:Be,isPendulum:ie,textStyle:Ve}),await J()})}),[rt,i,l,m,W,A,B,z,fe,Le,M,ye,ve,he,Fe,Be,ie,Ce,We,Ae,He,be,Ue,Ve,nt,ot,Y,tt,Je,Ke,et]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");dr(t)&&ie&&(Zr(t,null!==ce&&void 0!==ce?ce:0,84.4,790),Zr(t,null!==de&&void 0!==de?de:0,728,790))}),[rt,ie,ce,de,O]),Object(r.useEffect)((()=>{rt&&(Ne.current.name.rerun+=1,Ne.current.name.instructor=async()=>{var e,t;const a=null===(e=y.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=y.current)||void 0===t?void 0:t.cloneNode();dr(a)&&r&&await _r(a,G,"tcg"===A?60:68,116,fe===f?"tcg"===A?688:674:"tcg"===A?608:598,(e=>{var t,a;let{format:r,frame:o,nameStyle:n,nameStyleType:i,foil:l}=e;if("custom"===i)return n;const s=ft({frame:o}),c=yt(o);let d="Default";"ocg"===r&&(d="OCG"),s&&"tcg"===r&&(d="Arial");let u={fillStyle:c?"#ffffff":"#000000",headTextFillStyle:c?"#ffffff":"#000000"};if("predefined"===i){var p,m;const e={...S[null!==(p=n.preset)&&void 0!==p?p:"commonB"].value};return S[null!==(m=e.preset)&&void 0!==m?m:"commonB"].value.font||(e.font=d),{...u,...e}}let b=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const f="normal"!==l&&null!==(t=null===(a=S[l])||void 0===a?void 0:a.value)&&void 0!==t?t:{},h="zarc"===o?S.animeGold.value:{};return{font:d,...u,...b,...f,...h}})({format:A,frame:W,nameStyle:U,nameStyleType:X,foil:M}),{isSpeedSkill:We,format:A,cloneNode:r,frame:W,furiganaHelper:Re})})}),[rt,fe,M,A,W,Re,We,G,y,U,X]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=k.current)||void 0===e?void 0:e.getContext("2d");if(!dr(t)||!Je)return;const a=gr({ctx:t,...Ue});Qr(t,"ATK",432.1,1106.494),eo(t,pe,508.824,1106.494),Be||(Qr(t,"DEF",600.85,1106.494),eo(t,me,673.865,1106.494)),a()}),[rt,pe,me,Be,ze,Ue,k,Je]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=w.current)||void 0===e?void 0:e.getContext("2d");dr(t)&&((e,t,a)=>{if(!e)return;const{isPendulum:r,isLink:o,withShadow:n,format:i,lightFooter:l,textStyle:s}=a;let c=.125,d=0,u=0;e.font=(n?"bold":"")+" 22px stone-serif-regular","ocg"===i&&(c=.145,d=-1,u=-3);const p=gr({ctx:e,color:l&&!r?"#ffffff":"#000000",shadowColor:n?l?"#000000":"#ffffff":"#000000",y:0,x:0,blur:n&&!r?3:0,...s,...null!==s&&void 0!==s&&s.shadowColor?{x:0,y:0,blur:3}:{}});r?sr(e,t,c,66.65+u,1105.01+d):o?cr(e,t,c,666.56+u,872.94+d):cr(e,t,c,728.78+u,871.5+d),p()})(t,xe,{isLink:Be,isPendulum:ie,withShadow:Me&&!ie,format:A,lightFooter:He,textStyle:Ve})}),[rt,A,Be,ie,He,w,xe,We,Le,Me,Ve]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");if(!dr(t))return;const{rightEdge:a,isNumberPassword:r}=(e=>{var t,a;let{ctx:r,value:o,format:n,alignment:i,baselineOffset:l=0,lightFooter:s,hasShadow:c,textStyle:d}=e;const u=/^[0-9]*$/.test(o);if(!dr(r))return{rightEdge:0,isNumberPassword:u};const p=gr({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",x:0,y:0,blur:c?3:0,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:m,trueBaseline:b,trueWidth:f}=null!==(t=I[n])&&void 0!==t?t:I.tcg,h=ae[n],{font:g}=h,y=Ar(o,n,{multiline:!1,furiganaHelper:!1});let v={fontLevel:u?0:1,fontData:h,currentFont:ea()},x=0,j=1e3,O=h.fontList[0];for(let k=0;k<h.fontList.length;k++){O=h.fontList[k];const e=ea({defaultFamily:g,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:k,fontData:h,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",j=Qt((e=>{const{currentLineCount:o,currentLineList:i}=Lr({ctx:r,median:e,paragraphList:[y],format:n,textData:t,width:f});return!(o>1)&&(a=i[0].actualLineWidth,!0)})),x=a,v=t,j>=1e3)break}const w=j/1e3;r.scale(w,1);const S=Ir({ctx:r,tokenList:Sr(y),xRatio:w,yRatio:1,trueEdge:"left"===i?m:m-x*w,trueBaseline:b+(null!==(a=O.offsetY)&&void 0!==a?a:$.offsetY)+l,textData:v,format:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),p(),{rightEdge:S.tokenEdge,isNumberPassword:u}})({ctx:t,value:je,lightFooter:He,alignment:"left",format:A,hasShadow:"zarc"===Le||Me,textStyle:Ve});if(ke){const e=!ie||!!r,o=!Se&&r||ie?Math.max(a+14.813,142.2)-("ocg"===A?7:0):Be?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{stroke:!1};if(!e)return;const{stroke:n=!1,textStyle:i}=null!==o&&void 0!==o?o:{},l=gr({ctx:e,...i,...null!==i&&void 0!==i&&i.shadowColor?{x:0,y:0,blur:3}:{}});e.font="bold 23.7px palatino-linotype-bold";let s=t;e.fillText("1",s,a+r),n&&e.strokeText("1",s,a),s+=e.measureText("1").width-2,e.font="bold 17.78px palatino-linotype-bold",e.fillText("st",s,a-7.4+r),n&&e.strokeText("st",s,a-7.4),s+=e.measureText("st").width,e.font="bold 22.22px palatino-linotype-bold",e.fillText(" Edition",s,a+r),n&&e.strokeText(" Edition",s,a),l()}(t,o,!Se&&r||ie?1150.93:871,!Se&&r||ie?We?-2:-1:0,{textStyle:{color:He?"#ffffff":"#000000",...Ve}})}}),[rt,ke,je,x,He,A,Me,Be,We,ie,Se,Le,Ve]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=b.current)||void 0===e?void 0:e.getContext("2d");Ne.current.creator.rerun+=1,Ne.current.creator.instructor=async()=>{var e;if(!dr(t))return;const a={...d(),...Y},{body:r,boundless:o}=a,n=(e=>{var t,a;let{ctx:r,value:o,format:n,alignment:i,baselineOffset:l=0,lightFooter:s,hasShadow:c,textStyle:d}=e;if(!dr(r))return;const u=gr({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:p,trueBaseline:m,trueWidth:b}=null!==(t=E[n])&&void 0!==t?t:E.tcg,f=te[n],{font:h}=f,g=Ar(o,n,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:f,currentFont:ea()},v=0,x=1e3,j=f.fontList[0];for(let S=0;S<f.fontList.length;S++){j=f.fontList[S];const e=ea({defaultFamily:h,defaultSize:`${j.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:S,fontData:f,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",x=Qt((e=>{const{currentLineCount:o,currentLineList:i}=Lr({ctx:r,median:e,paragraphList:[g],format:n,textData:t,width:b});return!(o>1)&&(a=i[0].actualLineWidth,!0)})),v=a,y=t,x>=1e3)break}const O=x/1e3;r.scale(O,1);const w=Ir({ctx:r,tokenList:Sr(g),xRatio:O,yRatio:1,trueEdge:"left"===i?p:p-v*O,trueBaseline:m+(null!==(a=j.offsetY)&&void 0!==a?a:$.offsetY)+l,textData:y,format:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:o}=e;t.fillText(a,r,o)}});return r.setTransform(1,0,0,1,0,0),u(),{leftEdge:"left"===i?p:p-v*O,...w}})({ctx:null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),format:A,value:Oe,alignment:"right",baselineOffset:We?-2:0,hasShadow:Me,lightFooter:He,textStyle:Ve}),i="tcg"===A?390:350,l="tcg"===A?30:40;var s;Te&&b.current&&await(async e=>{let{canvas:t,type:a,isPendulum:r,isLink:o,isLegacyCard:n,widthOffset:i,bordered:l,textStyle:s}=e;const c=!n||r?[145,1122,240-i,37]:o?[151,846,216,36]:[80,843,240,40];await jr(t,`text/text-limited-edition-${a}${l?"-bordered":""}.png`,...c,null!==s&&void 0!==s&&s.shadowColor?{...s,blur:3,x:0,y:0}:s)})({canvas:b.current,ctx:t,type:He&&!ie?"white":"black",bordered:(r<50||o)&&!ie,isLink:Be,isPendulum:ie,widthOffset:(null!==(s=null===n||void 0===n?void 0:n.leftEdge)&&void 0!==s?s:i)<i?l:0,isLegacyCard:Se,textStyle:Ve})}}),[rt,Oe,b,h,A,Se,Te,Be,ie,We,He,Y,Me,Ve]),Object(r.useEffect)((()=>{rt&&(Ne.current.sticker.rerun+=1,Ne.current.sticker.instructor=async()=>{var e;return await(async e=>{let{ctx:t,sticker:a}=e;if(dr(t))return a===v?Promise.resolve():vr(t,`sticker/sticker-${a.toLowerCase()}.png`,739.1438,1110.938)})({ctx:null===(e=F.current)||void 0===e?void 0:e.getContext("2d"),sticker:we})})}),[rt,we,F]),Object(r.useEffect)((()=>{var e,t;if(!rt)return;const a=null===(e=h.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=T.current)||void 0===t?void 0:t.getContext("2d");Ne.current.typeAbility.rerun+=1,Ne.current.typeAbility.instructor=async()=>{if(!dr(a)||!dr(r))return;const{condenseTolerant:e,upSize:t,fontStyle:o}=null!==oe&&void 0!==oe?oe:{},n=V[0],i=n?t:0,l=n?Ie&&"auto"===o||"italic"===o:Ie,s=Wr({ctx:a,content:re,isNormal:Ie,useItalic:l,condenseTolerant:e,format:A,furiganaHelper:Re,...Br({format:A,statInEffect:Je,typeInEffect:Ze,useItalic:l}),textStyle:Ye,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-i}});await(async e=>{let{ctx:t,typeAbility:a,subFamily:r,format:o,frame:n,size:i,isMonster:l,textStyle:s,furiganaHelper:c}=e;if(!dr(t))return;const d=a.length>0,u=r!==g&&"large"===i,p=a+(u?"\u29be":""),m=d?"tcg"===o?"large"===i?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!d)return;const b={color:vt(n)&&!ft({frame:n})&&"large"===i?"#ffffff":"#000000",...s},f=gr({ctx:t,...b}),{iconPositionList:h,xRatio:y}=Jr({ctx:t,format:o,size:i,value:m,metricMethod:l?void 0:"compact",furiganaHelper:c});f();let v="ocg"===o?-4:0,x="ocg"===o?-3:0;if(u){const{edge:e,baseline:a}=h[0];await xr(t,`subfamily/subfamily-${r.toLowerCase()}.png`,(t=>e+.175*t.naturalWidth*y+x),(e=>a-.8*e.naturalWidth+v),(e=>e.naturalWidth),(e=>e.naturalWidth))}})({ctx:r,format:A,frame:W,furiganaHelper:Re,isMonster:ze,textStyle:Xe,size:Ze?s<=3?"medium":"small":"large",subFamily:_e,typeAbility:qe})}}),[rt,Ze,Je,oe,re,V,h,A,W,Re,ze,Ie,Xe,Ye,_e,qe,T]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(dr(t)&&ie){const{upSize:e,fontStyle:a}=null!==ue&&void 0!==ue?ue:{},r=_[0],o=!!r&&"italic"===a;Wr({ctx:t,content:se,isNormal:!1,useItalic:o,fontData:(o?J:Z)[A],textStyle:Ge,sizeList:N,condenseTolerant:Ee,format:A,furiganaHelper:Re,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-(r?e:0)}})}}),[rt,Ee,A,ie,j,se,ue,_,Re,Ge]),Object(r.useEffect)((()=>{var e;if(!rt)return;const t=null===(e=R.current)||void 0===e?void 0:e.getContext("2d");Ne.current.overlay.rerun+=1,Ne.current.overlay.instructor=async()=>{dr(t)&&await ot(t,"total-overlay",(e=>vr(t,`finish/finish-${e}-total-overlay.png`,0,0)))}}),[rt,R,ot,G]);const it=Object(r.useRef)({}),lt=Object(r.useCallback)((async e=>{const{isPendulum:t=!1,opacity:a}=e,r=n.current,o=null===r||void 0===r?void 0:r.getContext("2d"),l=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((r=>{setTimeout((()=>{if(e.current&&t)try{e.current.toBlob((e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r(!0)},e.onerror=()=>{URL.revokeObjectURL(a),r(!1)}}else r(!1)}else r(!1)}))}catch(a){t.drawImage(e.current,0,0),console.error(a),r(!1)}else r(!1)}),25*a)}))};if(r&&o){var c,d;o.clearRect(0,0,s.width,s.height),await Promise.all(Object.values(Ne.current).sort(((e,t)=>e.order-t.order)).map((e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&it.current[r]!==a||!it.current[r]?(it.current[r]=a,t()):Promise.resolve()}))).catch((e=>{console.error(e);const t="fail-to-draw-notification";pa.a.close(t),pa.a.error({key:t,message:at["error.draw.error.message"],description:at["error.draw.error.description"]})}));const e=i.current;if(e&&o){const{artX:r,artY:n,artWidth:i}=p(t,a),{width:l,height:s}=e;s>0&&o.drawImage(e,0,0,l,s,r,n,i,i/(l/s))}await l(m,o,0),await l(y,o,0),await l(C,o,0),await l(O,o,0),await l(j,o,0),await l(T,o,0),await l(h,o,0),await l(k,o,0),await l(w,o,0),await l(x,o,0),await l(b,o,0),await l(F,o,0),await l(R,o,0),null===(c=L.current)||void 0===c||null===(d=c.getContext("2d"))||void 0===d||d.drawImage(r,0,0)}}),[at,i,C,b,n,h,R,L,y,x,j,O,w,m,k,F,T]);return{drawingPipeline:Ne,onExport:lt}};var oo=a(177),no=a.n(oo),io=a(30);var lo=a(259),so=a.n(lo);const co=Object(ba.b)(ua.a)`
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
`,uo=e=>{let{language:t}=e;const[a,o]=Object(r.useState)(!1),[n,i]=Object(r.useState)(!1),[l,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(co,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||n},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>o(!1),onOk:async()=>{try{i(!0);const e=await Promise.all(c.map((e=>{let{file:t,name:a}=e;return new Promise(((e,r)=>{const o=new FileReader;o.onload=t=>{let{target:o}=t;if(!o)return void r("Not a valid target");const{result:n}=o;if("string"!==typeof n)return void r("Not a valid result");let i=JSON.parse(n);Rt(i)&&(i=kt(i));const s=Nt(i);let c=null;if(c=l?s?Gt(Qa(i).card).result:i:s?i:kt(Qa(i).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},o.readAsText(t)}))}))),t=new so.a;e.forEach((e=>{let{blob:a,name:r}=e;t.file(r,a)}));const a=await t.generateAsync({type:"blob"});zt("convert-result.zip",a,"application/zip"),i(!1),o(!1)}catch(e){console.error(e),pa.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),i(!1)}},children:[Object(b.jsxs)("div",{className:"controller",children:[Object(b.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:da("toggle-button",l?"reverse":""),onClick:()=>s((e=>!e)),children:Object(b.jsx)(ha.a,{})})}),Object(b.jsx)("label",{children:"Yugioh Carder"})]}),Object(b.jsxs)("div",{className:"file-panel",children:[Object(b.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(b.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],n&&Object(b.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(b.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(b.jsx)("div",{className:"file-list",children:c.map((e=>{let{name:t}=e;return Object(b.jsxs)("div",{className:"file-entry",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{className:"file-action",children:Object(b.jsx)(ga.a,{disabled:n,onClick:()=>d((e=>e.filter((e=>e.name!==t))))})})]},t)}))})]})]}),Object(b.jsx)(ma.a,{overlay:t["converter.header.label"],children:Object(b.jsx)(fa,{className:"batch-converter",onClick:()=>o(!0),children:Object(b.jsx)(ya.a,{})})})]})};var po=a(72),mo=a(536),bo=a(559),fo=a(529),ho=a(212);class go extends o.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){ho.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var yo=a(551),vo=a(552),xo=a(553),jo=a(554),Oo=a(518),wo=a(549);const So=Object(ba.b)(wo.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,ko=e=>{let{overlayClassName:t,iconProps:a,...r}=e;const{className:o,...n}=null!==a&&void 0!==a?a:{};return Object(b.jsx)(Oo.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...r,children:Object(b.jsx)(So,{className:["explanation-icon",null!==o&&void 0!==o?o:""].join(" "),...n})})};var Fo=a(550),Co=a(541);const To=ba.b.span`
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
`,Ro=e=>{let{Icon:t,children:a,onClick:r,iconProps:o,tooltipProps:n,containerProps:i}=e;const{className:l,onClick:s,onKeyDown:c,...d}=null!==i&&void 0!==i?i:{};return Object(b.jsx)(ma.a,{title:null,...n,children:Object(b.jsx)(To,{tabIndex:0,...d,onClick:e=>{null===r||void 0===r||r(),null===s||void 0===s||s(e)},onKeyDown:e=>{null===c||void 0===c||c(e),"Enter"===e.key&&(null===r||void 0===r||r())},className:["icon-button",null!==l&&void 0!==l?l:""].join(" "),children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(t,{...o}),a]})})})},No=ba.b.div`
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
`,Lo=ba.a`
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
`,Eo=ba.b.div`
    ${Lo}
`,Io=(e,t)=>{let{onChange:a,value:o,optionList:n,children:i,suffix:l,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),p=Object(r.useRef)(null),m=n.length;return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=p.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsxs)(Eo,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[i&&Object(b.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(b.jsx)("div",{ref:p,className:"radio-train-input-group",...oa({setFocus:u,optionLength:m,onTrigger:()=>{const e=n[d];e&&a(e.value)}}),children:n.map(((e,t)=>{let{value:r,props:n,label:i,tooltipProps:l}=e;const{className:s}=null!==n&&void 0!==n?n:{},u=c?r===o:`${r}`===`${o}`;return Object(b.jsx)(ma.a,{overlay:null,...l,children:Object(b.jsxs)("label",{...n,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(b.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(b.jsx)("span",{className:"ant-radio-button-inner"})}),Object(b.jsx)("span",{className:"label",children:i})]})},r)}))}),l]})},Ao=Object(r.forwardRef)(Io),Bo=ba.c`
    to {
        transform: rotate(360deg);
    }
`,zo=ba.b.div`
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
`,Wo=Object(ba.b)(No)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":ba.a`animation: ${Bo} 12s linear infinite;`}}
        }
    }
`,Do=()=>{const e=Ca(),{setting:t,updateSetting:a}=ar((e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}})),{exportFormat:r,resolution:o,allowHotkey:n,reduceMotionColor:i,showCreativeOption:l,showExtraDecorativeOption:s}=t;return Object(b.jsx)(Wo,{className:"setting-button",$softMode:i,children:Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(b.jsxs)(zo,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(Co.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(Co.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(Co.a,{checked:l,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(b.jsx)("div",{children:Object(b.jsx)(ma.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(b.jsx)(Co.a,{checked:n,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(b.jsx)(Ao,{value:`${o[0]}x${o[1]}`,optionList:pt.map((e=>{let{height:t,width:a,label:r}=e;return{value:`${a}x${t}`,label:r}})),onChange:e=>{ut[e]&&a({resolution:ut[e].settingValue})}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(b.jsx)(Ao,{value:r,optionList:mt,onChange:e=>{a({exportFormat:e})}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(b.jsxs)("div",{className:"button-label",children:[Object(b.jsx)(Fo.a,{}),Object(b.jsx)("label",{children:e["setting.button.label"]})]})})})};var Po=a(538);const Mo=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),Ho=()=>{const[e,t]=Object(r.useState)([]),[a,o]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{(async()=>{o(!0);const e=await Mo.getLog();o(!1),t(e)})()}),[]),0!==e.length||a?a?Object(b.jsx)("div",{children:"Loading changelog..."}):Object(b.jsx)("div",{children:e.map(((e,t)=>{let{logList:a,version:r}=e;return Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:r}),Object(b.jsx)("br",{}),Object(b.jsx)("ul",{children:a.map(((e,t)=>{let{content:a}=e;return Object(b.jsx)("li",{children:a},t)}))})]},`${r}-${t}`)}))}):Object(b.jsx)("div",{children:"No changelogs"})},$o=ba.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,Ko=ba.b.div`
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
`,Yo=Object(ba.b)(Ko)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Go=e=>{let{content:t,children:a,...r}=e;return t?Object(b.jsx)(Oo.a,{content:t,...r,children:a}):Object(b.jsx)(b.Fragment,{children:a})};a(374);const Uo=()=>{var e;return Object(b.jsxs)("div",{className:"affiliation",children:[Object(b.jsxs)("span",{className:"version",children:["v",null!==(e="2.1.17")?e:"unknown"]}),Object(b.jsx)("div",{className:"affiliation-link",children:Object(b.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(yo.a,{})})})]})},Xo=Object(ba.b)(Yo)`
    overflow: auto;
    max-height: 300px;
    width: 550px;
`,Vo=ba.b.div`
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
`,_o=()=>{const{language:e,languageInfo:t,languageMetadataMap:a,changeLanguage:r}=Fa((e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:o}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:o}})),{cardList:o,isListDirty:n,toggleVisible:i,visible:l}=Za(Object(io.useShallow)((e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:o}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:o}})));return Object(b.jsxs)("div",{className:"app-header",children:[Object(b.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(b.jsxs)("div",{className:"app-description",children:[Object(b.jsxs)("div",{className:"header-language",children:[Object(b.jsx)("h1",{children:"Yugioh Carder"}),Object(b.jsx)(Po.a.Group,{value:t.codeName,size:"small",className:"language-option",children:Object.values(a).filter((e=>{let{active:t}=e;return t})).map((e=>{let{codeName:t,name:a}=e;return Object(b.jsx)(Po.a.Button,{value:t,onChange:e=>r(e.target.value),children:a},t)}))}),Object(b.jsx)("span",{className:"bug-report",children:Object(b.jsxs)("div",{id:"sentry-bug-report",children:[e["contributor.bug-report.tooltip"]," ",Object(b.jsx)(vo.a,{})]})}),Object(b.jsx)(Oo.a,{placement:"bottom",content:Object(b.jsx)(Xo,{children:Object(b.jsx)(Ho,{})}),children:Object(b.jsx)(xo.a,{className:"app-log"})})]}),Object(b.jsxs)("div",{className:"app-contribution",children:[Object(b.jsxs)("span",{className:"app-creator",children:[e["contributor.gui.label"],": ",Object(b.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(b.jsx)(ko,{content:Object(b.jsxs)(Yo,{className:"disclaimer",children:[Object(b.jsx)("h2",{children:e["contributor.disclaimer.label"]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:e["contributor.disclaimer.line-1"](Object(b.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-2"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-3"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-4"]}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-5"](Object(b.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(b.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(b.jsx)("li",{children:e["contributor.disclaimer.line-6"]})]})]})})]}),Object(b.jsx)("span",{className:"template-creator",children:e["contributor.template-maker"](Object(b.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"Grezar"})},"artist-1"),Object(b.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"9558able"})},"artist-2"),Object(b.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(b.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(b.jsx)(Vo,{className:"app-setting",children:Object(b.jsx)(Do,{})}),Object(b.jsx)(Vo,{className:"card-manager",children:Object(b.jsx)(No,{className:da("manager-button-label",l?"manager-active":""),onClick:()=>i(),children:Object(b.jsxs)("div",{className:"button-label",children:[Object(b.jsx)(jo.a,{}),Object(b.jsx)("label",{children:e["manager.icon.title"]}),n&&o.length>1&&Object(b.jsx)("div",{className:"manager-notice",children:"*"})]})})})]})},qo=()=>{const e=Ca();return Object(b.jsxs)(Yo,{className:"disclaimer",children:[Object(b.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(b.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(b.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(b.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},Jo=()=>Object(b.jsx)(ko,{overlayClassName:"disclaimer-overlay",content:Object(b.jsx)(qo,{})});var Zo=a(539),Qo=a(555);a(375);const en=ba.b.div`
    white-space: pre-line;
`,tn=ba.b.div`
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
`,an=ba.b.div`
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
`,rn=e=>{let{caption:t,containerProps:a,alt:r,...o}=e;const{className:n}=null!==a&&void 0!==a?a:{};return Object(b.jsxs)(an,{className:`image-with-caption ${n}`,children:[Object(b.jsx)("img",{alt:r,...o}),Object(b.jsx)("div",{className:"caption",children:t})]})},on=()=>{const[e,t]=Object(r.useState)(!1),a=Ca();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Zo.a,{footer:null,visible:e,width:"60%",title:Object(b.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"]," ",Object(b.jsx)(po.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["guide.format.close"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(b.jsxs)(en,{children:[Object(b.jsxs)("p",{children:[a["guide.format.introduction"](Object(b.jsx)(Fo.a,{},"icon")),"."]}),Object(b.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(b.jsx)($o,{children:"["},"open-tag"),Object(b.jsx)($o,{children:"]"},"close-tag"),Object(b.jsx)($o,{children:"Ctrl-1"},"hotkey"),Object(b.jsx)($o,{children:"\u2318-1"},"hokey-alternative")),Object(b.jsxs)(tn,{className:"panel-figure",children:[Object(b.jsx)(rn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(rn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(b.jsx)($o,{children:"{"},"open-tag"),Object(b.jsx)($o,{children:"}"},"close-tag"),Object(b.jsx)($o,{children:"Ctrl-2"},"hotkey"),Object(b.jsx)($o,{children:"\u2318-2"},"hokey-alternative")),Object(b.jsxs)(tn,{className:"panel-figure",children:[Object(b.jsx)(rn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(rn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(b.jsx)($o,{children:"|"},"separator"),Object(b.jsx)($o,{children:"Ctrl-3"},"hotkey"),Object(b.jsx)($o,{children:"\u2318-3"},"hokey-alternative")),Object(b.jsxs)(tn,{className:"panel-figure",children:[Object(b.jsx)(rn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(rn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(b.jsx)($o,{children:"||"},"separator"),Object(b.jsx)($o,{children:"Ctrl-4"},"hotkey"),Object(b.jsx)($o,{children:"\u2318-4"},"hokey-alternative")),Object(b.jsxs)(tn,{className:"panel-figure",children:[Object(b.jsx)(rn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(rn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(b.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(b.jsx)($o,{children:"{{"},"open-tag"),Object(b.jsx)($o,{children:"}}"},"close-tag"),Object(b.jsx)($o,{children:"Ctrl-5"},"hotkey"),Object(b.jsx)($o,{children:"\u2318-5"},"hokey-alternative")),Object(b.jsxs)(tn,{className:"panel-figure",children:[Object(b.jsx)(rn,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(b.jsx)(rn,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(b.jsxs)(po.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(b.jsx)(Qo.a,{})]})]})},nn=ba.b.div`
    display: grid;
    ${e=>{let{$withPillar:t}=e;return t?"grid-template-columns: max-content 1fr;":"grid-template-columns: 1fr;"}}
    > label {
        cursor: pointer;
        padding: 0 var(--spacing-xxs);
        text-align: center;
    }
`,ln=ba.b.div`
    display: inline-block;
    width: 10px;
`,sn=e=>{let{nameKey:t,labelBackgroundColor:a,labelBackgroundColorList:r,className:o}=e;const n=Ca();return Object(b.jsxs)(nn,{className:`frame-info-block ${null!==o&&void 0!==o?o:""}`,$withPillar:!(!a&&!r),children:[r?Object(b.jsx)(ln,{children:r.map((e=>Object(b.jsx)("div",{style:{backgroundColor:e,height:100/r.length+"%"}},e)))}):a?Object(b.jsx)(ln,{style:{backgroundColor:a}}):null,Object(b.jsx)("label",{className:"frame-info-block-label",children:n[t]})]})};var cn=a(533);const dn=Object(ba.b)(cn.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,un=Object(ba.b)(cn.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,pn=e=>{let{onChange:t,...a}=e;const r=Ca(),{resolution:o,updateSetting:n}=ar(Object(io.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}})));return Object(b.jsxs)(cn.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(b.jsx)(dn,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),pt.map((e=>{let{width:a,height:r,label:i}=e;return Object(b.jsx)(un,{className:o[0]===a&&o[1]===r?"active-setting":"",onClick:()=>{n({resolution:[a,r]}),null===t||void 0===t||t([a,r])},children:i},`${a}-${r}`)}))]})};var mn=a(534),bn=a(136),fn=a(268),hn=a.n(fn),gn=a(556),yn=a(557),vn=a(558),xn=a(519);const jn=ba.b.div`
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
`,On=()=>Object(b.jsx)(xn.a,{});On.FullView=()=>Object(b.jsx)(jn,{className:"loading-fullview",children:Object(b.jsx)(xn.a,{size:"large"})});a(388),a(389);const wn=(e,t,a)=>{if(!t)return e;const{width:r,height:o,x:n=0,y:i=0,unit:l}=e;if("px"===l){const e=.8,o=400/300,{width:l,height:s}=t,c=s/l>=e?o:1,d=Math.min((null!==n&&void 0!==n?n:0)*c,l),u=Math.min((null!==i&&void 0!==i?i:0)*c,s),p=Math.min((null!==r&&void 0!==r?r:0)*c,l);return{unit:"%",x:d/l*100,y:u/s*100,width:p/l*100,height:p/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(n<0)return{...e,x:0};if(i<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==o&&void 0!==o?o:0,p=.05*(s>c?s:c),m=Math.abs(u*s*a-d*c)<=p?u:d*t.naturalWidth/a/t.naturalHeight,b=m/100,f=b>1?100:m,h=b>1?d/b:d,g=b>1?(100-h)/2:n<0?0:n,y=b>1||i<0?0:i;return{...e,x:g,y:y,height:f,width:h,aspect:a}},Sn=Object(r.forwardRef)(((e,t)=>{let{title:a,backgroundColor:o,className:n,forceFit:i,defaultSourceType:l,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:p,defaultCropInfo:m,ratio:f,onSourceLoaded:h=()=>{},onSourceChange:g=()=>{},onCropChange:y=()=>{},onTainted:v=()=>{},onMaxSizeExceeded:x=()=>{},onForceFitChange:j=()=>{}}=e;const O="offline"===l?"offline":"online",w=Ca(),S=Object(r.useRef)(null),[k,F]=Object(r.useState)("anonymous"),[C,T]=Object(r.useState)(0),[R,N]=Object(r.useState)(O),[L,E]=Object(r.useState)(O),[I,A]=Object(r.useState)(s),[B,z]=Object(r.useState)(!1),[W,D]=Object(r.useState)(null),[P,M]=Object(r.useState)(!1),[H,$]=Object(r.useState)(c),K=Object(r.useRef)(null),[Y,G]=Object(r.useState)({current:m,completed:null}),[U,X]=Object(r.useState)("%"===m.unit),{current:V,completed:_}=Y,q=Object(r.useRef)({source:"",crop:null}),J=Object(r.useCallback)((e=>{if(z(!1),D(null),h(k),K.current=e,e.src===q.current.source&&q.current.crop){const t=Z.current;setTimeout((()=>{if(t!==Z.current||!q.current.crop)return;const a=wn(q.current.crop,e,f);G({completed:a,current:a}),X(!0),q.current={source:"",crop:null}}),250)}else setTimeout((()=>{G((t=>{const a=wn(t.current,e,f);return{completed:a,current:a}})),X(!0)}),250)}),[k,h,f]);Object(r.useEffect)((()=>{var e,t,a,r;const o=K.current;if(!_||!d||!o)return;const{aspect:n}=_;d.style.transform="scale(2)";const l=d.getContext("2d");if(!l||"number"!==typeof n||n<=0)return;const{naturalHeight:s,naturalWidth:c}=o,u=c/o.width,p=s/o.height,m=null!==(e=_.unit)&&void 0!==e?e:"px",b=window.devicePixelRatio;l.setTransform(b,0,0,b,0,0);let f,h=Math.floor((null!==(t=_.width)&&void 0!==t?t:0)*("px"===m?u:c/100)),g=Math.min(c,h),v=Math.floor(h/n),x=Math.min(s,v),j=Math.min(c,Math.floor((null!==(a=_.x)&&void 0!==a?a:0)*("px"===m?u:c/100))),O=Math.min(s,Math.floor((null!==(r=_.y)&&void 0!==r?r:0)*("px"===m?p:s/100)));if(l.imageSmoothingQuality="high",!(g<=0||x<=0)){if(j+g>c||O+x>s||j<0||O<0||Math.abs((h-g)/g)>.01||Math.abs((v-x)/x)>.01){"width"===(n*s>c?"width":"height")?(g=c,x=g/n,j=0,O=(s-x)/2,f={unit:"%",aspect:n,height:x/s*100,width:g/c*100,x:0,y:O/s*100}):(g=s*n,x=s,j=(c-g)/2,O=0,f={unit:"%",aspect:n,height:x/s*100,width:g/c*100,x:j/c*100,y:0})}if(i){"width"===(n*s>c?"width":"height")?(g=c,x=g/n):(g=s*n,x=s),d.width=g,d.height=x,l.drawImage(o,0,0,c,s,0,0,g,x)}else{var w,S;d.width=null!==(w=g)&&void 0!==w?w:0,d.height=null!==(S=x)&&void 0!==S?S:0,l.drawImage(o,j,O,g,x,0,0,g,x)}"offline"===R&&(null!==I&&void 0!==I?I:"").length<=0||n===_.aspect&&y(_,R,P),f&&G((e=>({...e,current:f})))}}),[_,d,C,i]),Object(r.useEffect)((()=>{M(!1),G((e=>{if(null!=K.current&&e.current){const t=wn(e.current,K.current,f);return{current:t,completed:t}}return e}))}),[f]);const Z=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>B,hasImage:()=>"string"===typeof I&&I.length>0&&"offline"===R||"string"===typeof H&&H.length>0&&"online"===R,forceSource:(e,t,a)=>{const r="offline"===R?I:H;M(!1),r!==t&&(z(!0),N(e),E(e),g(e,t),"offline"===e?A(t):$(t)),F("anonymous"),X("%"===a.unit),Z.current+=1,q.current={source:t,crop:a},T((e=>e+1))}})));const Q="offline"===R&&(null!==I&&void 0!==I?I:"").length>0||"online"===R&&(null!==H&&void 0!==H?H:"").length>0,ee=d&&Q&&!B&&(null===_||void 0===_?void 0:_.width)&&(null===_||void 0===_?void 0:_.height);return Object(b.jsxs)("div",{className:`card-image-cropper ${n}`,children:[Object(b.jsxs)("div",{className:"card-image-source-input",children:[u,Object(b.jsxs)("div",{className:"card-image-source-input-container",children:[Object(b.jsxs)("div",{className:"card-image-source-input-title",children:[Object(b.jsxs)("span",{className:"field-title",children:[a," ",Object(b.jsx)(Ro,{Icon:gn.a,containerProps:{className:ee?"":"disabled"},tooltipProps:{overlay:ee?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>ee&&d&&function(e,t){t&&e&&e.toBlob((e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}}),"image/png",1)}(d,_)})]}),Object(b.jsxs)(Po.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;E(t),((null!==I&&void 0!==I?I:"").length>0&&"offline"===t||(null!==H&&void 0!==H?H:"").length>0&&"online"===t)&&(N(t),"offline"===t?(F("anonymous"),g("offline",I)):g("online",H),z(!0))},value:L,children:[Object(b.jsx)(Po.a.Button,{value:"online",checked:"online"===L,children:w["image-cropper.source.online.tooltip"]}),Object(b.jsx)(ma.a,{placement:"topLeft",title:Object(b.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(b.jsx)(Po.a.Button,{value:"offline",checked:"offline"===L,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(b.jsxs)("div",{className:["card-image-input","online"===L?"":"input-inactive"].join(" "),children:[Object(b.jsx)(mn.a,{placeholder:w["image-cropper.placeholder"],value:H,onChange:e=>{const t=e.target.value;F("anonymous"),z(!0),N("online"),E("online"),g("online",t),$(t)},maxLength:512,allowClear:!0},"key"),Object(b.jsx)("div",{className:"online-image-tip",children:w["image-cropper.online-tip"]})]}),Object(b.jsxs)("div",{className:["card-image-input","offline"===L?"":"input-inactive"].join(" "),children:[Object(b.jsx)(mn.a,{ref:S,type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files.length>0){const t=e.target.files[0],a=4;if(t.size<1024*a*1024){z(!0);const e=new FileReader;e.addEventListener("load",(()=>{"string"===typeof e.result&&(F("anonymous"),A(e.result),N("offline"),E("offline"),g("offline",e.result),z(!1))})),e.readAsDataURL(t)}else x(a)}else alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=S.current)||void 0===e?void 0:e.setValue("")}}),Object(b.jsx)("hr",{}),w["image-cropper.offline-warning"]]})]})]}),p,Object(b.jsxs)("div",{className:"card-cropper",onKeyDown:()=>{M(!0)},children:[B&&Object(b.jsx)(On.FullView,{}),Q&&!W&&Object(b.jsxs)("div",{className:"card-image-option",children:[Object(b.jsx)(ma.a,{placement:"left",overlay:i?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(b.jsx)("div",{className:da("image-option force-fit-option",i?"option-active":""),onClick:()=>{M(!0),j(!i)},children:Object(b.jsx)(yn.a,{})})}),!i&&Object(b.jsx)(ma.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(b.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{M(!0),G((e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const o={...e.completed,x:(100-a)/2};return{current:o,completed:o}}))},children:Object(b.jsx)(vn.a,{})})}),!i&&Object(b.jsx)(ma.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(b.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{M(!0),G((e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const o={...e.completed,y:(100-a)/2};return{current:o,completed:o}}))},children:Object(b.jsx)(vn.a,{})})})]}),(!Q||W&&void 0===k)&&Object(b.jsx)(bn.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(b.jsx)(hn.a,{src:"offline"===R?I:H,disabled:i,className:i?"force-fitted":"",imageStyle:o?{backgroundColor:o}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:J,onImageError:()=>{if(q.current={source:"",crop:null},d)if("online"===R&&""===(null!==H&&void 0!==H?H:"")||"offline"===R&&""===(null!==I&&void 0!==I?I:"")){const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),_&&y(_,R,P),h(k),z(!1),D("Image not found")}else F(void 0),v();else z(!1),D("No receiving canvas"),v();void 0===k&&(z(!1),D("Tainted canvas"))},crop:V,onDragStart:()=>{M(!0)},onChange:(e,t)=>{const a=K.current;q.current.crop||(U?G((e=>({...e,current:wn(t,a,f)}))):(X(!0),G((t=>({...t,current:wn(e,a,f)})))))},onComplete:(e,t)=>{q.current.crop||G((e=>({...e,completed:t})))},ruleOfThirds:!0,crossorigin:k},`${R}-${U}-${C}`)]})]})})),kn=ba.b.div`
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
`,Fn=e=>{let{active:t,defaultValue:a=[],onChange:o=()=>{},onStatusChange:n}=e;const[i,l]=Object(r.useState)(a),s=Ca(),c=JSON.stringify(i);return Object(r.useEffect)((()=>{o(i)}),[c]),Object(b.jsxs)(kn,{className:da("link-marker-chooser",t?"chooser-active":"chooser-disabled"),children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)(Co.a,{checked:t,onChange:e=>n(e.target.checked),children:s["link-picker.label"]})}),Object(b.jsx)("div",{className:"container",children:[...Array(9)].map(((e,a)=>{const r=`${a+1}`;return"5"===r?Object(b.jsx)(ma.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(b.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&l([])},children:Object(b.jsx)(m.a,{})})},"5"):Object(b.jsx)("div",{className:`link-marker-button marker-${a+1} ${i.includes(r)?"marker-checked":""}`,onClick:()=>{t&&l((e=>{let t=[...e];return t.includes(r)?t=t.filter((e=>e!==r)):t.push(r),t}))},children:Object(b.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${fe[a]}deg) translateY(-1px)`}})},r)}))})]})},Cn=e=>Object(b.jsx)(go,{fallback:Object(b.jsx)(b.Fragment,{}),children:Object(b.jsx)(fo.a,{...e})}),Tn=ba.b.div`
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
`,Rn=ba.b.div`
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
`,Nn={Container:ba.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Option:Rn},Ln=Object(ba.b)(po.a)`
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
`,En=Object(r.forwardRef)(((e,t)=>{let{isTainted:a,isInitializing:o,imageChangeCount:n,canvasMap:i,onDownloadError:l}=e;const s=Ca(),{allowHotkey:c}=ar(Object(io.useShallow)((e=>{let{setting:{allowHotkey:t}}=e;return{allowHotkey:t}}))),{onExport:d}=ro(!0,i,{imageChangeCount:n,isInitializing:o,language:s}),{exportCanvasRef:u}=i,p=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[m,f]=Object(r.useState)(!1),h=Object(r.useCallback)((()=>{f(!1)}),[]),{onSave:g,isPipelineRunning:y}=rr({isTainted:a,isInitializing:o,exportCanvasRef:u,exportRef:p,onExport:d,onDownloadError:l,onDownloadComplete:h}),v=e=>{m||(a?pa.a.error({message:s["prompt.download.tainted.message"]}):(f(!0),g(e)))};return Object(r.useImperativeHandle)(t,(()=>({download:v,isPipelineRunning:y}))),a?null:Object(b.jsxs)("div",{className:"save-button-container",children:[Object(b.jsx)("div",{id:"save-button-waiting"}),Object(b.jsxs)(Ln,{className:"save-button",id:"save-button-ready",children:[Object(b.jsx)(ma.a,{overlay:c?Object(b.jsx)(b.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(b.jsx)("div",{className:"button-label",children:Object(b.jsx)("div",{className:"label-content",onClick:()=>v(),children:m?s["button.download.ongoing.label"]:s["button.download.label"]})})}),Object(b.jsx)(mo.a,{disabled:m,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(b.jsx)(pn,{onChange:()=>ia()}),children:Object(b.jsx)("div",{className:"button-option",onClick:e=>e.stopPropagation(),children:Object(b.jsx)(bo.a,{})})})]})]})}));var In=a(183),An=a.n(In),Bn=a(560),zn=a(561),Wn=a(562);const Dn=ba.b.div`
    ${fa} {
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
        grid-template-columns: 1fr 1fr 1fr;
        &.mode-other {
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
        border: var(--bw) solid var(--main-level-2);
        cursor: pointer;
    }
    .export-input-raw {
        grid-column: 1 / -1;
    }
`,Pn=Object(ba.b)(fa)`
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
`,Mn=e=>{let{data:t,children:a,disabled:o}=e;const[n,i]=Object(r.useState)(!1);return Object(b.jsxs)(Pn,{disabled:o,onClick:e=>{var a;e.stopPropagation(),a=t,An()(a),i(!0),setTimeout((()=>{i(!1)}),1e3)},children:[n?Object(b.jsx)("div",{className:"copiable-overlay",children:Object(b.jsx)(Bn.a,{})}):null,a]})},Hn=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:Lt},{label:e["button.import.for-other.label"],value:"other",converter:Gt}],$n=Object(r.forwardRef)(((e,t)=>{let{tainted:a,artworkCanvas:o,onRequireExportData:n,onRequireDownload:i,onClose:l}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[p,m]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:f,resolution:h}=ar(Object(io.useShallow)((e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}}))),g=Ca(),y="export-input-raw",v=Object(r.useCallback)((()=>{const e=document.getElementById(y);e&&(e.focus(),e.select())}),[]);Object(r.useImperativeHandle)(t,(()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),m(Hn(g).map((t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:n}=r(e,o);return{value:a,isPartial:t,name:At(e.name),data:`${JSON.stringify(n)}`}}catch(n){return console.error(n),{value:a,isPartial:!1,name:"Unknown",data:""}}})).reduce(((e,t)=>{let{data:a,isPartial:r,value:o,name:n}=t;return e[o]={name:n,data:a,isPartial:r},e}),{...p}))}}))),Object(r.useEffect)((()=>{setTimeout((()=>{s&&"ygocarder"===d&&v()}),100)}),[d,v,s]);const{data:x,isPartial:j,name:O}=p[d];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ua.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay",onCancel:()=>{c(!1),l()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},destroyOnClose:!1,children:Object(b.jsxs)(Dn,{children:[Object(b.jsx)(Ao,{optionList:Hn(g),onChange:e=>u(e),value:d}),"other"===d&&j&&Object(b.jsxs)("div",{className:"partial-alert",children:[Object(b.jsx)("b",{children:g["service.decode.partial.message"]}),Object(b.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(b.jsxs)("div",{className:da("export-container-result",`mode-${d}`),children:[Object(b.jsx)(Go,{content:a&&"other"===d?Object(b.jsx)(qo,{}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(fa,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([x],{type:"application/json"});zt(At(O),e,"application/json")},children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(gn.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(b.jsx)(Go,{content:j?Object(b.jsx)(Yo,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(Mn,{disabled:j,data:p.ygocarder.data,children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(zn.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Go,{content:a?Object(b.jsx)(qo,{}):void 0,children:Object(b.jsx)("div",{children:Object(b.jsxs)(fa,{disabled:a,className:"export-download-image",onClick:i,children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(Wn.a,{})}),Object(b.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(b.jsx)(mo.a,{overlay:Object(b.jsx)(pn,{}),children:Object(b.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!j&&Object(b.jsx)(mn.a.TextArea,{id:y,className:"export-input-raw",size:"small",value:p.ygocarder.data,rows:5})]})]})}),Object(b.jsx)(ma.a,{overlay:f?Object(b.jsx)(b.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(b.jsx)("button",{className:"primary-button export-button",onClick:()=>{n(),c(!0)},children:g["button.export.label"]})}),Object(b.jsx)(mo.a,{overlay:Object(b.jsx)(cn.a,{onClick:e=>e.domEvent.stopPropagation(),children:Hn(g).map(((e,t)=>{let{converter:a,label:r}=e;return Object(b.jsx)(cn.a.Item,{onClick:()=>{try{const e=tr.getState().card,{result:t}=a(e,o);((e,t)=>{const a=new Blob([t],{type:"application/json"});zt(At(e),a,"application/json")})(At(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),pa.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:r},`${t}`)}))}),children:Object(b.jsx)(fa,{className:"secondary-button export-custom",children:Object(b.jsx)(gn.a,{})})})]})}));var Kn=a(563);const Yn=ba.b.div`
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
        ${fa} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,Gn=Object(r.forwardRef)(((e,t)=>{let{allowHotkey:a,language:o,onImport:n,onClose:i}=e;const l="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[p,m]=Object(r.useState)(0),[f,h]=Object(r.useState)("replace"),[g,y]=Object(r.useState)(!1),[v,x]=Object(r.useState)(!1),j=Object(r.useCallback)((()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())}),[]);Object(r.useEffect)((()=>{setTimeout((()=>{g&&j()}),100)}),[j,g]),Object(r.useImperativeHandle)(t,(()=>({requestImport:e=>{h(e),y(!0)}})));const O=()=>{m((e=>e+1)),y(!1),x(!1),i()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:r,isPartial:i}=Qa(e,"replace"===f||"new"===f?void 0:tr.getState().card);if(i&&pa.a.info({message:o["service.decode.partial.message"],description:o["service.decode.partial.description"]}),t&&"online"===r.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(r.art)){const e={...r};try{const t=await(async e=>{const t=new Headers;t.append("Authorization","Client-ID 83ff9cbdd22c23c");const a=new FormData;return a.append("image",e),a.append("type","url"),a.append("title",e.replace("https://images.ygoprodeck.com/images/cards_cropped/","").replace(".jpg","")),await fetch("https://api.imgur.com/3/image",{method:"POST",headers:t,body:a,redirect:"follow"})})(r.art);if(200!==t.status)throw e.art="https://i.imgur.com/jjtCuG5.png",new Error("Imgur response status: "+t.status);const a=await t.json();e.art=a.data.link}catch(a){console.error("Upload error:",a),pa.a.error({message:o["prompt.import.imgur.message"],description:o["prompt.import.imgur.description"]})}n(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}else n(r,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==f,addToList:"new"===f})}}catch(a){console.error("Import error:",a),pa.a.error({message:o["error.import.error.message"],description:o["error.import.error.description"]})}},S=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},k=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:o}=r,n=null!==(e=o.trim())&&void 0!==e?e:"";let i="";try{i=Ot(decodeURIComponent(n))}catch(a){}let l=null;if(n.startsWith("{")&&n.endsWith("}"))l=n;else if(i.startsWith("{")&&i.endsWith("}"))l=JSON.parse(i);else{var t;const e=n.startsWith("https://db.ygoprodeck.com/api")?n:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${n}&num=10&offset=0&misc=yes`;x(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();l=null!==(t=r.data.find((e=>{let{name:t}=e;return t.toLowerCase()===n.toLowerCase()})))&&void 0!==t?t:r.data.sort(((e,t)=>{var a,r;const o=null===(a=e.misc_info)||void 0===a?void 0:a[0],n=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!o||!n)return 0;return(o.viewsweek+1)/(n.viewsweek+1)>2?n.viewsweek-o.viewsweek:n.views-o.views}))[0]}await w(l,!0)}}catch(a){console.error("Import error:",a),pa.a.error({message:o["error.import.error.message"],description:o["error.import.error.description"]})}finally{O()}};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ua.a,{visible:g,title:"merge"===f?o["button.import.merge.label"]:o["button.import.label"],className:"global-overlay",onCancel:O,okText:o["prompt.import.ok.label"],confirmLoading:v,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:k,children:Object(b.jsxs)(Yn,{children:["merge"!==f?Object(b.jsxs)("div",{className:"prompt-alert",children:[o["prompt.import.instruction.line-1"],Object(b.jsx)("br",{}),o["prompt.import.instruction.line-2"],Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"alert",children:o["prompt.import.instruction.alert.line-1"]})]}):null,Object(b.jsx)("div",{className:"import-container-input",children:Object(b.jsx)(mn.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:o["prompt.import.message"],disabled:v,onPressEnter:k,rows:4},`input-${p}`)}),"merge"!==f?Object(b.jsxs)("div",{className:"import-container-upload",children:[Object(b.jsx)("span",{className:"option-separator",children:o["prompt.import.alternative.label"]}),Object(b.jsxs)(fa,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(b.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;S(t),O()}},`file-input-${p}`),o["button.import.tooltip"]]}),"new"===f&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{className:"option-separator",children:o["prompt.import.alternative.label"]}),Object(b.jsx)(fa,{className:"import-empty",onClick:()=>{w(st()),O()},children:o["button.empty.label"]})]})]}):null]})}),Object(b.jsx)(ma.a,{overlay:a?Object(b.jsxs)("div",{className:"center",children:[Object(b.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(b.jsxs)("div",{children:["Ctrl-G / \u2318-G",o["prompt.import.merge.tooltip"]]})]}):null,children:Object(b.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),y(!0)},children:o["button.import.label"]})}),Object(b.jsx)(ma.a,{overlay:o["button.import.tooltip"],children:Object(b.jsxs)(fa,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(l);e&&e.click()},children:[Object(b.jsx)("input",{ref:d,type:"file",id:l,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;S(t),O()}},`direct-file-input-${p}`),Object(b.jsx)(Kn.a,{})]})})]})})),Un=(Object(ba.b)(cn.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),Xn=Object.values(D).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}})),Vn=[{value:"normal",label:Object(b.jsx)(m.a,{})},...Object.values(P).map((e=>{let{value:t,label:a}=e;return{label:a,value:t}}))],_n=()=>me.map((e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:o,edition:n}=e;return{label:Object(b.jsx)(sn,{labelBackgroundColor:r,labelBackgroundColorList:o,nameKey:a}),value:t,edition:n}})),qn=[...Array(14)].map(((e,t)=>({label:t,value:t}))),Jn=x.map((e=>{let{value:t}=e;return{label:t===v?Object(b.jsx)(m.a,{}):Object(b.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}})),Zn=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map((e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}})).sort(((e,t)=>e.order-t.order));const Qn=ba.b.div`
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
`,ei=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Ca(),o=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(b.jsxs)(Qn,{tabIndex:-1,className:"char-picker-container",children:[Object(b.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\u2205","\u203b"].map((e=>Object(b.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>o(e),children:e},e)))}),Object(b.jsx)("div",{className:"char-picker-guideline",children:Object(b.jsx)(ko,{content:Object(b.jsxs)(Yo,{children:[r["input.char-picker.guide.header"],Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(b.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var ti=a(85),ai=a(564),ri=a(542),oi=a(216);a(503),a(504);const ni=Object(r.forwardRef)(((e,t)=>{let{disabled:a,color:o,onSelect:n,onOffsetChange:i,onRemove:l}=e;const s=Ca(),[c,d]=Object(r.useState)(o),[u,p]=Object(r.useState)(0),[m,f]=Object(r.useState)(-1),h=Object(r.useRef)(Oa()(p,250)).current;return Object(r.useImperativeHandle)(t,(()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:o,max:n,round:i}=Math;d(t),p(n(0,o(100,i(100*parseFloat(a))))),f(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:o}=Math;e===m&&p(r(0,a(100,o(100*parseFloat(t)))))}}))),Object(r.useEffect)((()=>{m>0&&(null===i||void 0===i||i(m,""+u/100))}),[m,u,i]),Object(b.jsxs)("div",{className:"stop-point-control-panel",children:[Object(b.jsxs)("div",{className:"stop-point-offset-input",children:[Object(b.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(b.jsx)(ri.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(b.jsx)(po.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===l||void 0===l?void 0:l(m),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(b.jsx)(ti.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===n||void 0===n||n(e.hex)}})]})})),ii=e=>({colorList:e,raw:aa(e)}),li=e=>{var t,a;let{palette:o=aa(ta()),angle:n=180,memoizedOnChange:i}=e;const l=Ca(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(n),[u,p]=Object(r.useState)((()=>{var e,t;const a=ra(o);return{raw:o,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}})),m=Object(r.useCallback)(((e,t)=>p((a=>{const r=a.colorList.map((a=>a.id===e?{...a,offset:t}:a));return{...a,...ii(r)}}))),[]);Object(r.useEffect)((()=>{d(n)}),[n]),Object(r.useEffect)((()=>{var e,t;const a=ra(o);p({raw:o,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})}),[o]);const f=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{var e;u.colorList[0]&&f.current&&(f.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))}),[u.colorList]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find((e=>e.id===a));e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}}),100),()=>{e=!1}}),[u]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&i(u.colorList,c)}),200),()=>{e=!1}}),[u,c,i]),Object(b.jsxs)("div",{className:"controls-wrapper gradient-picker-container",children:[Object(b.jsxs)("div",{className:"gradient-angle-control",children:[Object(b.jsx)("h2",{children:l["input.name-style.gradient.color-point.label"]}),Object(b.jsxs)(po.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{p((e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort(((e,t)=>Number(e.offset)-Number(t.offset)));return{...e,...ii(t)}}))},children:[l["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(b.jsxs)("div",{className:"angle-picker-container",children:[Object(b.jsx)("h2",{children:l["input.name-style.gradient.gradient-direction.label"]}),Object(b.jsx)(oi.AnglePicker,{angle:c,size:120,setAngle:d})]})]}),Object(b.jsx)("div",{className:"stop-color-picker-container",children:Object(b.jsx)(oi.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>p((t=>({...t,...ii(e)}))),onColorStopSelect:e=>{var t;p((t=>({...t,currentControlId:e.id}))),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(b.jsx)(ni,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:m,onRemove:e=>{p((t=>{var a;const r=t.colorList.filter((t=>t.id!==e)),o=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var n;o>0&&u.colorList[o]&&(null===(n=s.current)||void 0===n||n.setColor(u.colorList[o]));return{...ii(r),currentControlId:o}}))}})})})]})},si=ba.b.div`
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
`,ci=Object(ba.b)(Nn.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,di=ba.b.div`
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
`,ui=Object(ba.b)(Nn.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,pi=ba.b.div`
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
`;var mi=a(286);const bi=Object(r.forwardRef)(((e,t)=>{let{className:a,defaultValue:o,fieldMap:n,labelMap:i,onChange:l}=e;const s=Ca(),{x:c,y:d,color:u,width:p}=n,[m,f]=Object(r.useState)((()=>{const e=o[c],t=o[d],a=o[u],r=o[p];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}})),{x:h,y:g,color:y,width:v}=m,x=i[p];return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&l(m)}),500),()=>{e=!1}}),[m]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==m[a])return void f((t=>({...t,...e})))}}))),Object(b.jsxs)("div",{className:a,children:[Object(b.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(b.jsxs)("div",{className:"line-position",children:[Object(b.jsx)(mi.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:5,xmin:-5,ymax:5,ymin:-5,x:null!==h&&void 0!==h?h:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return f((e=>({...e,x:t,y:a})))}}),Object(b.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(b.jsx)(ri.a,{size:"small",value:h,onChange:e=>f((t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(b.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(b.jsx)(ri.a,{size:"small",value:g,onChange:e=>f((t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")})))})]}),Object(b.jsxs)("div",{className:"single-slider",children:[x,": ",Object(b.jsx)(Cn,{value:v,min:1,max:10,onChange:e=>{"number"===typeof e&&f((t=>({...t,width:e})))}})]})]}),Object(b.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(b.jsx)(ti.b,{colors:dt,color:y,onChangeComplete:e=>f((t=>({...t,color:e.hex})))})]})})),fi=Object(r.forwardRef)(((e,t)=>{let{active:a,value:o,onClick:n,onCancel:i}=e;const l=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsx)(ui,{ref:l,...oa({stopPropagation:!0,optionLength:k.length,setFocus:c,onTrigger:()=>{s>=0&&n(k[s])},onCancel:()=>{null===i||void 0===i||i()}}),children:k.map(((e,t)=>{const{key:r,image:i,label:l}=e;return Object(b.jsx)(pi,{className:da("preset-item",o.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),n(e)},children:Object(b.jsx)("img",{className:"preset-preview",src:`/ygocarder/${i}`,alt:l})},r)}))})}));a(510);const hi=Object(r.forwardRef)(((e,t)=>{let{frameInfo:a,defaultType:o,defaultValue:n,showExtraDecorativeOption:i,onChange:l}=e;const s=Ca(),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(-1),[p,f]=Object(r.useState)(!1),[h,g]=Object(r.useState)(o),[y,v]=Object(r.useState)(n),[x,j]=(()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)((()=>{t((e=>e+1))}),[]),e]})(),O=Object(r.useRef)(Oa()(l,250)).current,w=Object(r.useCallback)(((e,t)=>{v((a=>({...a,gradientAngle:t,gradientColor:aa(e)}))),x()}),[x]),k=ar((e=>e.setting.reduceMotionColor)),F=Object(r.useMemo)((()=>{return e=s,Object.values(ee).map((t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}}));var e}),[s]);Object(r.useEffect)((()=>{0!==j&&(g("custom"),O("custom",y))}),[j]);const T=Object(r.useRef)(null),R=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;v((t=>({...t,...e})));const{lineColor:r,lineWidth:o,lineOffsetX:n,lineOffsetY:i,shadowBlur:l,shadowColor:s,shadowOffsetX:c,shadowOffsetY:d}=e;null===(t=T.current)||void 0===t||t.setValue({x:c,y:d,width:l,color:s}),null===(a=R.current)||void 0===a||a.setValue({x:n,y:i,width:o,color:r})}})));const{fillStyle:N,headTextFillStyle:L,hasOutline:E,hasShadow:I,hasGradient:A,gradientColor:B,gradientAngle:z,pattern:W,font:D}=y,{labelBackgroundColor:P,labelBackgroundImage:M}=null!==a&&void 0!==a?a:{},H={background:P,backgroundImage:M},$="custom"===h,K="predefined"===h,Y="name-style-option-input-container",G=()=>{g("auto"),"auto"!==h&&O("auto",y)},U=()=>{var e;const t=y.preset?null===(e=S[y.preset])||void 0===e?void 0:e.value:{};g("predefined"),v((e=>({...e,...t}))),O("predefined",{...y,...t})},X=()=>{g("custom"),"custom"!==h&&O("custom",y)};return Object(b.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(b.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(b.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(b.jsxs)("span",{className:"name-style-input-container",children:[Object(b.jsxs)("div",{id:Y,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...oa({setFocus:u,optionLength:3,onKeyPress:e=>{if(1===d&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),u(1),f(!0),setTimeout((()=>{var e;1===d&&(null===(e=c.current)||void 0===e||e.focus())}),200),!1},onTrigger(){0===d&&G(),1===d&&U(),2===d&&X()}}),children:[Object(b.jsxs)("label",{className:da("ant-radio-wrapper","auto"===h&&"ant-radio-wrapper-checked",0===d&&"ant-radio-focused"),onClick:()=>G(),children:[Object(b.jsxs)("span",{className:"ant-radio "+("auto"===h?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(b.jsx)("span",{className:"name-style-option-break"}),Object(b.jsx)("label",{className:da("ant-radio-wrapper",K&&"ant-radio-wrapper-checked",1===d&&"ant-radio-focused"),onClick:()=>U(),children:Object(b.jsx)(Oo.a,{visible:p,onVisibleChange:f,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(fi,{ref:c,active:K,value:y,onCancel:()=>{var e;f(!1),null===(e=document.getElementById(Y))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=S[a])||void 0===t?void 0:t.value:{};g("predefined"),v((e=>({...e,...r}))),O("predefined",{...y,...r})}})}),children:Object(b.jsxs)("span",{className:"name-style-option-label",children:[Object(b.jsxs)("span",{className:"ant-radio "+(K?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(b.jsx)("span",{className:"name-style-option-break"}),Object(b.jsx)("label",{className:da("ant-radio-wrapper",$&&"ant-radio-wrapper-checked",2===d&&"ant-radio-focused"),onClick:()=>X(),children:Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{className:"ant-radio "+($?"ant-radio-checked":""),children:[Object(b.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(b.jsx)("span",{className:"ant-radio-inner"})]}),Object(b.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(b.jsxs)("div",{className:"style-picker",children:[Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsxs)("div",{className:"custom-style-text",children:[Object(b.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(b.jsx)(ti.b,{colors:dt,color:N,onChangeComplete:e=>{g("custom"),v((t=>({...t,fillStyle:e.hex}))),x()}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"custom-style-text",children:[Object(b.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(b.jsx)(ti.b,{colors:dt,color:L,onChangeComplete:e=>{g("custom"),v((t=>({...t,headTextFillStyle:e.hex}))),x()}})]})]})}),placement:"bottom",children:Object(b.jsxs)(si,{$softMode:k,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(b.jsx)(ai.a,{})]})},"color-picker"),i&&Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(Co.a,{value:"has-shadow",checked:I,onChange:()=>{g("custom"),v((e=>({...e,hasShadow:!e.hasShadow}))),x()},children:s["input.name-style.shadow.toggle.label"]})}),I&&Object(b.jsx)(bi,{ref:T,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:y,onChange:e=>{let{color:t,width:a,x:r,y:o}=e;v((e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:o}))),x()}})]})}),placement:"bottom",children:Object(b.jsxs)(si,{$softMode:k,$active:$&&I,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(b.jsx)(ai.a,{})]})},"shadow-picker"),Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(Co.a,{value:"has-line",checked:E,onChange:()=>{g("custom"),v((e=>({...e,hasOutline:!e.hasOutline}))),x()},children:s["input.name-style.outline.toggle.label"]})}),E&&Object(b.jsx)(bi,{ref:R,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:y,onChange:e=>{let{color:t,width:a,x:r,y:o}=e;v((e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:o}))),x()}})]})}),placement:"bottom",children:Object(b.jsxs)(si,{$softMode:k,$active:$&&E,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(b.jsx)(ai.a,{})]})},"outline-picker"),i&&Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)("div",{className:"custom-style-picker",children:[Object(b.jsx)("h3",{className:"custom-style-expand",children:Object(b.jsx)(Co.a,{value:"has-gradient",checked:A,onChange:()=>{g("custom"),v((e=>({...e,hasGradient:!e.hasGradient}))),x()},children:s["input.name-style.gradient.toggle.label"]})}),A&&Object(b.jsx)("div",{className:"custom-style-gradient",children:Object(b.jsx)(li,{angle:z,palette:B,memoizedOnChange:w})})]})}),placement:"bottom",children:Object(b.jsxs)(si,{$softMode:k,$active:$&&A,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(b.jsx)(ai.a,{})]})},"gradient-picker"),i&&Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)(ci,{onClick:e=>e.stopPropagation(),children:[Object(b.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),C.map((e=>{let{key:t,patternImage:a}=e;return Object(b.jsx)(di,{className:["pattern-option",y.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{v((e=>({...e,pattern:t}))),x()},children:a?Object(b.jsx)("img",{style:a?H:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)}))]})}),placement:"bottomLeft",children:Object(b.jsx)(si,{$softMode:k,$active:$&&"string"===typeof W&&"none"!==W,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Nn.Container,{children:F.map((e=>{let{value:t,label:a}=e;return Object(b.jsx)(Nn.Option,{className:D===t?"menu-active":"",onClick:()=>{v((e=>({...e,font:t}))),x()},children:a},t)}))})}),placement:"bottomLeft",children:Object(b.jsx)(si,{$softMode:k,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker")]})]})]})})})),gi=ba.a`
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
`,yi=Object(ba.b)(Ao)`
	${gi}
`,vi=e=>{let{onSTFrameChange:t,onPasswordChange:a}=e;const{setting:o}=ar(),{showExtraDecorativeOption:n}=o,i=Object(r.useMemo)((()=>_n().filter((e=>n||"normal"===e.edition))),[n]),{frame:l,setCard:s}=tr(Object(io.useShallow)((e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}}))),c=Object(r.useCallback)((e=>{s((r=>{const{typeAbility:o,isPendulum:n,attribute:i,format:l,password:s,star:c}=r,d=`${e}`,u="spell"===d||"trap"===d,p="tcg"===l?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:ue,m="spell"===d?[p["Spell Card"]]:"trap"===d?[p["Trap Card"]]:o,b="token"===d?ce[l]:s;return a(b),u&&t(m),{...r,frame:d,isPendulum:"link"!==d&&n,isLink:"link"===d,attribute:"token"===d?f:u?`${d}`.toUpperCase():i,star:"token"===d?0:c,typeAbility:m,password:b}}))}),[s,a,t]);return Object(b.jsx)(yi,{className:"frame-radio",value:l,onChange:c,optionList:i})},xi=ba.b.div`
    ${Lo}
`,ji=e=>{let{onChange:t,value:a,optionList:o,children:n,className:i}=e;const[l,s]=Object(r.useState)(-1),c=o.length;return Object(b.jsxs)(xi,{className:["ant-radio-group ant-radio-group-outline checkbox-train",i].join(" "),children:[n&&Object(b.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:n}),Object(b.jsx)("div",{className:"checkbox-train-input-group",...oa({setFocus:s,optionLength:c,onTrigger:()=>{const e=o[l];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter((t=>`${e.value}`!==t)):[...a,`${e.value}`])}}}),children:o.map(((e,r)=>{const{label:o,value:n,props:i}=e,s=!!Array.isArray(a)&&a.includes(`${n}`);return Object(b.jsxs)("label",{...i,className:["ant-radio-button-wrapper",s?"ant-radio-button-wrapper-checked":"",l===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(s?a.filter((e=>`${n}`!==e)):[...a,`${n}`])},children:[Object(b.jsx)("span",{className:"ant-radio-button "+(s?"ant-radio-button-checked":""),children:Object(b.jsx)("span",{className:"ant-radio-button-inner"})}),Object(b.jsx)("span",{className:"label",children:o})]},n)}))})]})},Oi=Object(ba.b)(Sn)`
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
`,wi=Object(r.forwardRef)(((e,t)=>{let{backgroundColor:a,children:o,receivingCanvas:n,onSourceLoaded:i,onTainted:l,onCropChange:s}=e;const c=Ca(),{background:d,backgroundCrop:u,backgroundType:m,backgroundData:f,backgroundSource:h,backgroundFit:g,isPendulum:y,opacity:v,getUpdater:x,setCard:j}=tr(Object(io.useShallow)((e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:o,backgroundSource:n,backgroundFit:i,isPendulum:l,opacity:s},getUpdater:c,setCard:d}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:o,backgroundSource:n,backgroundFit:i,isPendulum:l,opacity:s,getUpdater:c,setCard:d}}))),O=Object(r.useRef)(null),w=Object(r.useMemo)((()=>x("backgroundSource")),[x]),S=Object(r.useMemo)((()=>x("background")),[x]),k=Object(r.useMemo)((()=>x("backgroundData")),[x]),F=Object(r.useCallback)((e=>j((t=>({...t,backgroundFit:e})))),[j]),C=Object(r.useCallback)(((e,t,a)=>{null===s||void 0===s||s(e,t),e&&j((t=>({...t,backgroundCrop:e})),a)}),[s,j]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=O.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=O.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o}=e;var n,i;"offline"===o?"string"===typeof r&&a&&(null===(n=O.current)||void 0===n||n.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(i=O.current)||void 0===i||i.forceSource("online",t,a))}}))),Object(b.jsx)(Oi,{ref:O,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:f,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:n,forceFit:g,onSourceChange:(e,t)=>{w(e),"offline"===e?k(t):S(t)},onCropChange:C,onTainted:l,onSourceLoaded:i,onForceFitChange:F,onMaxSizeExceeded:e=>{pa.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:p(y,v,m).backgroundRatio,beforeCropper:null,children:o})}));var Si=a(565);a(511);const ki=ba.b.span`
    white-space: pre-line;
`,Fi=ba.b.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    padding: 2px 0;
    align-items: center;
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
    .card-opacity-slider {
        flex: 0 1 auto;
        display: grid;
        grid-template-columns: max-content 60px 45px 12px;
        &.inactive {
            .slider-label,
            .ant-slider,
            .slider-padding {
                background-color: var(--main-level-3);
            }
        }
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
`,Ci=ba.b.div`
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
`,Ti=Object(r.forwardRef)(((e,t)=>{var a;let{receivingCanvas:o,defaultValue:n,onTainted:i,onChange:s,onSourceLoaded:u,onCropChange:p}=e;const m=Ca(),{background:f,backgroundData:h,backgroundSource:g,backgroundType:y,getUpdater:v,hasBackground:x,isPendulum:j,setCard:O}=tr(Object(io.useShallow)((e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:o,hasBackground:n,isPendulum:i},setCard:l,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:o,getUpdater:s,hasBackground:n,isPendulum:i,setCard:l}}))),[w,S]=Object(r.useState)(!0),[k,F]=Object(r.useState)(!0),[C,T]=Object(r.useState)((()=>({...d(),...n}))),R=Object(r.useRef)(null),N=Object(r.useMemo)((()=>v("backgroundType")),[v]),L=Object(r.useCallback)((e=>O((t=>({...t,hasBackground:e.target.checked})))),[O]);Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&s(C)}),500),()=>{e=!1}}),[C]),Object(r.useEffect)((()=>{S(!1),setTimeout((()=>{F(!1)}),250)}),[]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=R.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o,...n}=e;var i;"string"!==typeof t&&"string"!==typeof r||!a||(null===(i=R.current)||void 0===i||i.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:o}));for(const l in n)n[l]!==C[l]&&T((e=>({...e,...n})))}})));const E=0===(null!==f&&void 0!==f?f:"").length&&!0!==(null===(a=R.current)||void 0===a?void 0:a.hasImage());return Object(b.jsxs)(Fi,{className:"card-opacity-slider-container",children:[Object(b.jsx)(ma.a,{overlayClassName:"long-tooltip-overlay",title:Object(b.jsx)(ki,{children:m["input.opacity.boundless.tooltip"]}),children:Object(b.jsx)(Co.a,{className:"art-frame",onChange:e=>T((t=>({...t,boundless:e.target.checked}))),checked:C.boundless,children:m["input.opacity.boundless.label"]})}),ct.map((e=>{var t,a,r;let{labelKey:n,type:s,subType:d,tooltipKey:v}=e;if("pendulum"===s&&!j)return null;const O=!!d,F=d&&C[d];return Object(b.jsxs)("div",{className:["card-opacity-slider",F?"":"inactive"].join(" "),children:[Object(b.jsxs)("div",{className:"slider-label",children:["body"===s&&Object(b.jsx)(Oo.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:S,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",k?"picker-hidden":""].join(" "),content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsxs)(Ci,{className:["custom-style-picker",E?"overlay-no-background-image":""].join(" "),children:[Object(b.jsxs)("h3",{className:"custom-style-expand "+(x?"":"inactive"),children:[Object(b.jsx)(Co.a,{checked:x,onChange:e=>{L(e)},children:m["input.background.toggle-label"]}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:m["input.background.description"]})]}),Object(b.jsx)("div",{className:"background-picker "+(x?"":"overlay-no-background"),children:Object(b.jsx)(wi,{ref:R,receivingCanvas:o,onSourceLoaded:u,onTainted:i,onCropChange:p,backgroundColor:C.baseFill,children:Object(b.jsxs)("div",{className:"layout-picker-panel",children:[Object(b.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(b.jsx)("h2",{children:m["input.background-color.label"]}),Object(b.jsx)(ti.b,{colors:dt,color:C.baseFill,onChangeComplete:e=>{T((t=>({...t,baseFill:e.hex})))}})]}),!E&&Object(b.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(b.jsx)("h2",{children:m["input.background-type.label"]}),Object(b.jsx)(Ao,{className:"background-type-picker",onChange:N,optionList:l({fit:m["input.background-type.fit.label"],full:m["input.background-type.full.label"],frame:m["input.background-type.frame.label"]}),value:y})]})]})})})]})}),placement:"bottom",children:Object(b.jsx)("div",{className:"background-preview",style:{backgroundColor:x?C.baseFill:c},children:Object(b.jsx)(ma.a,{overlay:m["input.background.toolip"],children:Object(b.jsx)("div",{className:"background-preview-callback-passer",children:x?f?Object(b.jsx)("img",{className:"background-image-preview",src:"online"===g?f:h,alt:"Background"}):null:Object(b.jsx)(Si.a,{className:"no-background-icon"})})})})}),O&&Object(b.jsx)(ma.a,{title:v&&null!==(t=m[v])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(b.jsx)(Co.a,{checked:F,onChange:e=>d&&T((t=>({...t,[d]:e.target.checked})))})}),m[n]]}),Object(b.jsx)(ri.a,{size:"small",min:0,max:100,onChange:e=>T((t=>({...t,[s]:"number"===typeof e?e:100}))),value:null!==(a=C[s])&&void 0!==a?a:100}),Object(b.jsx)(Cn,{min:0,max:100,step:5,onChange:e=>T((t=>({...t,[s]:e}))),value:null!==(r=C[s])&&void 0!==r?r:100}),Object(b.jsx)("div",{className:"slider-padding"})]},s)}))]})}));var Ri=a(566),Ni=a(567),Li=a(568);const Ei=Object(ba.b)(Nn.Container)`
    img.icon-image {
        width: var(--fs-lg);
    }
`,Ii=Object(ba.b)(Ao)`
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
`,Ai=Object(r.forwardRef)(((e,t)=>{let{isLink:a,isMonster:o,showCreativeOption:n}=e;const i=Ca(),{frame:l,subFamily:s,cardIcon:c,star:d,starAlignment:u,getUpdater:p}=tr(Object(io.useShallow)((e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:o,starAlignment:n},getUpdater:i}=e;return{frame:t,subFamily:a,cardIcon:r,star:o,starAlignment:n,getUpdater:i}}))),f="dark-synchro"==={frame:l}.frame;const h=bt({frame:l}),v=Object(r.useMemo)((()=>p("cardIcon")),[p]),x=Object(r.useMemo)((()=>p("subFamily")),[p]),w=Object(r.useMemo)((()=>p("star")),[p]),S=Object(r.useMemo)((()=>p("starAlignment")),[p]);Object(r.useImperativeHandle)(t,(()=>({})));const k="auto"===c?j[o?h?"rank":f?"negative-level":"level":"st"]:j[c],F=i[k.labelKey],C=n?Object(b.jsxs)(b.Fragment,{children:[F," ",Object(b.jsx)(ai.a,{})]}):F,T=Object(b.jsx)(Oo.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(Ei,{children:O.map((e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(b.jsxs)(Nn.Option,{className:a===c?"menu-active":"",onClick:()=>v(a),children:[r?Object(b.jsxs)(b.Fragment,{children:[r,"\xa0"]}):null,i[t]]},a)}))})}),placement:"bottomRight",children:Object(b.jsx)("span",{className:`card-icon-dropdown ${"auto"===c?"":"active"} ${n?"":"disabled"}`,children:C})},"icon-type-picker"),R=n?T:C;return a?null:"st"===k.value?Object(b.jsx)(Ao,{className:"fill-input-train",value:s,onChange:x,optionList:(N=i,y.map((e=>{let{value:t,nameKey:a}=e;return{label:t===g?Object(b.jsx)(m.a,{}):Object(b.jsx)(ma.a,{overlay:N[a],children:Object(b.jsx)("img",{alt:N[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}}))),children:R}):Object(b.jsx)(Ii,{className:"checkbox-star-train",value:d,onChange:w,optionList:qn,strict:!0,suffix:n&&Object(b.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(b.jsx)(mn.a,{className:"custom-star-input",value:"number"===typeof d?"":d,allowClear:!0,onChange:w,placeholder:i["input.icon-type.custom.placeholder"]}),Object(b.jsx)(Ao,{value:u,onChange:S,optionList:[{value:"auto",tooltipProps:{overlay:i["input.icon-type.alignment.auto"]},label:Object(b.jsx)(m.a,{})},{value:"left",tooltipProps:{overlay:i["input.icon-type.alignment.left"]},label:Object(b.jsx)(Ri.a,{})},{value:"center",tooltipProps:{overlay:i["input.icon-type.alignment.center"]},label:Object(b.jsx)(Ni.a,{})},{value:"right",tooltipProps:{overlay:i["input.icon-type.alignment.right"]},label:Object(b.jsx)(Li.a,{})}]})]}),children:R});var N})),Bi=new Set(["1","2","3","4","5"]),zi=(e,t,a,r,o,n)=>{const i=e.substring(a,r),l="\n"===e[r]||!o;let s=i,c=2;switch(t){case"1":s=`[${i}]${l?"":"\n"}`,c=l?2:3;break;case"2":s=`{${i}}`;break;case"3":s=`{${i}|}`;break;case"4":s=`{${i}||}`,c=3;break;case"5":s=`{{${i}}}`,c=4}n(e.substring(0,a)+`${s}`+e.substring(r,e.length),r+c)},Wi=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:Di}=mn.a,Pi=Object(r.forwardRef)(((e,t)=>{let{id:a,allowHotkey:o,defaultValue:n,onTakePicker:i,onChange:l,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(n),[p,m]=Object(r.useState)(n),[f,h]=Object(r.useState)({id:"",placement:-1}),g=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;u.current=t,m(t)}),[]);Object(r.useEffect)((()=>{Wi(f)}),[f]),Object(r.useEffect)((()=>{l({target:{value:p}})}),[p]);const y=e=>{e!==u.current&&g(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:y,getPickerRef:()=>a?{id:a,setValue:y}:null}))),Object(b.jsx)(Di,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:y})),allowClear:!0,spellCheck:!1,className:`${a}-input ${c}`,value:p,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!o)return;const{ctrlKey:n,key:i,metaKey:l}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||l)&&a&&d!==c&&Bi.has(i)&&(e.preventDefault(),zi(e.currentTarget.value,i,c,d,!0,((e,t)=>{g(e),h({id:a,placement:t})})))},onChange:g,...d})})),Mi=Object(r.forwardRef)(((e,t)=>{let{id:a,defaultValue:o,onTakePicker:n,onChange:i,onKeyDown:l,className:s,...c}=e;const{setting:d}=ar(),{allowHotkey:u}=d,p=Object(r.useRef)(o),[m,f]=Object(r.useState)(o),[h,g]=Object(r.useState)({id:"",placement:-1}),y=Object(r.useCallback)((e=>{const t="string"===typeof e?e:e.target.value;p.current=t,f(t)}),[]);Object(r.useEffect)((()=>{Wi(h)}),[h]),Object(r.useEffect)((()=>{i({target:{value:m}})}),[m]);const v=e=>{e!==m&&y(e)};return Object(r.useImperativeHandle)(t,(()=>({setValue:v}))),Object(b.jsx)(mn.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===n||void 0===n?void 0:n({id:a,setValue:v})),allowClear:!0,className:`${a}-input ${s}`,value:m,onKeyDown:e=>{var t,r;if(null===l||void 0===l||l(e),!u)return;const{ctrlKey:o,key:n,metaKey:i}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(o||i)&&a&&c!==s&&Bi.has(n)&&(e.preventDefault(),zi(e.currentTarget.value,n,s,c,!1,((e,t)=>{y(e),g({id:a,placement:t})})))},onChange:e=>y(e.target.value),...c})})),Hi=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=tr((e=>e.getUpdater)),n=Object(r.useRef)(null),i=Object(r.useMemo)((()=>o("effect",void 0,"debounce")),[o]);return Object(r.useEffect)((()=>{var e;const t=null===(e=n.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))}),[]),Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;null===(t=n.current)||void 0===t||t.setValue(e)}}))),Object(b.jsx)(Pi,{ref:n,id:"effect",allowHotkey:!0,defaultValue:tr.getState().card.effect,onChange:i,onTakePicker:a,rows:9})})),$i=ba.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,Ki=e=>{const t=Ca(),{isDuelTerminalCard:a,isFirstEdition:o,isSpeedCard:n,isLimitedEdition:i,isLegacyCard:l,setCard:s}=tr(Object(io.useShallow)((e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}}))),c=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}))),[s,l]),d=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}))),[s,l]),u=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}))),[s,l]),p=Object(r.useCallback)((e=>s((t=>{let a;return a=e.target.checked?l?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}))),[s,l]),m=Object(r.useCallback)((e=>s((t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:o,isLimitedEdition:n,isSpeedCard:i}=t;let l=!1,s=!1,c=!1,d=!1;return a?(s=o,d=!s&&i,l=!d&&!s&&r,c=!(l||s||c)&&n):(s=o,c=!s&&n,d=i,l=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:l,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}))),[s]);return Object(b.jsxs)($i,{className:"checkbox-input",children:[Object(b.jsx)(ma.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(b.jsx)(Co.a,{className:"input-legacy",onChange:m,checked:l,tabIndex:0,children:t["input.legacy.label"]})}),Object(b.jsx)(Co.a,{className:"input-1st",onChange:c,checked:o,tabIndex:0,children:t["input.1st-edition.label"]}),Object(b.jsx)(Co.a,{className:"input-limited",onChange:d,checked:i,tabIndex:0,children:t["input.limited-edition.label"]}),Object(b.jsx)(Co.a,{className:"input-speed",onChange:p,checked:n,tabIndex:0,children:t["input.speed-duel.label"]}),Object(b.jsx)(Co.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var Yi=a(569),Gi=a(570);const Ui=Object(ba.b)(Nn.Container)`
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
    ${gi}
`,Xi=ba.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,Vi=ba.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,_i=Object(ba.b)(Ao)`
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
`,qi=ba.b.div`
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
`,Ji=Object(r.forwardRef)(((e,t)=>{let{isMonster:a,showCreativeOption:o,onTakePicker:n}=e;const i=Ca(),{sticker:l,format:s,getUpdater:c}=tr(Object(io.useShallow)((e=>{let{card:{sticker:t,format:a},getUpdater:r}=e;return{sticker:t,format:a,getUpdater:r}}))),d=Object(r.useRef)(null),u=Object(r.useRef)(null),p=Object(r.useRef)(null),m=Object(r.useRef)(null),f=s&&se[s]?se[s]:se.tcg,h=Object(r.useMemo)((()=>c("atk",(e=>"string"===typeof e?e.trim():e))),[c]),g=Object(r.useMemo)((()=>c("def",(e=>"string"===typeof e?e.trim():e))),[c]),y=Object(r.useMemo)((()=>c("password",void 0,"debounce")),[c]),v=Object(r.useMemo)((()=>c("sticker")),[c]),x=Object(r.useMemo)((()=>c("creator",void 0,"debounce")),[c]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a,r,o;let{password:n,creator:i,atk:l,def:s}=e;"string"===typeof l&&(null===(t=p.current)||void 0===t||t.setValue(l)),"string"===typeof s&&(null===(a=m.current)||void 0===a||a.setValue(s)),"string"===typeof n&&(null===(r=d.current)||void 0===r||r.setValue(n)),"string"===typeof i&&(null===(o=u.current)||void 0===o||o.setValue(i))}}))),Object(b.jsxs)(qi,{className:"card-footer-input",children:[(a||o)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Mi,{ref:p,id:"atk",addonBefore:i["input.atk.label"],defaultValue:tr.getState().card.atk,onChange:h,onTakePicker:n}),Object(b.jsx)(Mi,{ref:m,id:"def",addonBefore:i["input.def.label"],defaultValue:tr.getState().card.def,onChange:g,onTakePicker:n})]}),Object(b.jsx)(Mi,{ref:d,id:"password",addonBefore:Object(b.jsxs)(Xi,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:i["input.password.label"]}),Object(b.jsx)(Ro,{onClick:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.setValue(`${na("0123456789",8)}`)},Icon:Yi.a,tooltipProps:{overlay:i["button.randomize.label"]}})]}),defaultValue:tr.getState().card.password,onChange:y,onTakePicker:n}),Object(b.jsx)(Mi,{ref:u,id:"creator",addonBefore:Object(b.jsxs)(Xi,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:i["input.copyright.label"]}),Object(b.jsx)(mo.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(b.jsx)(cn.a,{onClick:e=>e.domEvent.stopPropagation(),children:f.map(((e,t)=>Object(b.jsx)(cn.a.Item,{onClick:()=>{var t;null===(t=u.current)||void 0===t||t.setValue(e)},children:e},`${t}`)))}),children:Object(b.jsx)("div",{children:Object(b.jsx)(Ro,{onClick:()=>{},Icon:Gi.a})})})]}),defaultValue:tr.getState().card.creator,onChange:x,onTakePicker:n}),Object(b.jsx)(Ki,{}),Object(b.jsx)(Ao,{className:"sticker-input fill-input-train",value:l,onChange:v,optionList:Jn,children:Object(b.jsx)("span",{children:i["input.sticker.label"]})})]})})),Zi=Object(ba.b)(Ao)`
    .ant-input-group-addon {
        flex: 0;
    }
    .radio-train-input-group .ant-radio-button-wrapper {
        min-width: unset;
    }
`,Qi=Object(r.forwardRef)(((e,t)=>{let{showExtraDecorativeOption:a,receivingCanvas:o,onSourceLoaded:n,onTainted:i,onCropChange:l}=e;const s=Ca(),{opacity:c,artFinish:d,linkMap:u,isPendulum:m,isLink:f,art:h,artCrop:g,artData:y,artSource:v,artFit:x,getUpdater:j,setCard:O}=tr(Object(io.useShallow)((e=>{let{card:{opacity:t,artFinish:a,linkMap:r,isPendulum:o,isLink:n,art:i,artCrop:l,artData:s,artSource:c,artFit:d},getUpdater:u,setCard:p}=e;return{opacity:t,artFinish:a,linkMap:r,isPendulum:o,isLink:n,art:i,artCrop:l,artData:s,artSource:c,artFit:d,getUpdater:u,setCard:p}}))),w=Object(r.useRef)(null),S=Object(r.useMemo)((()=>j("linkMap")),[j]),k=Object(r.useCallback)((e=>O((t=>({...t,isLink:e,isPendulum:!e&&t.isPendulum})))),[O]),F=Object(r.useMemo)((()=>j("art")),[j]),C=Object(r.useMemo)((()=>j("artData")),[j]),T=Object(r.useCallback)((e=>O((t=>({...t,artFit:e})))),[O]),R=Object(r.useMemo)((()=>j("artSource")),[j]),N=Object(r.useMemo)((()=>j("artFinish")),[j]),L=Object(r.useCallback)(((e,t,a)=>{null===l||void 0===l||l(e,t),e&&O((t=>({...t,artCrop:e})),a)}),[l,O]);return Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:o}=e;var n,i;"offline"===o?"string"===typeof r&&a&&(null===(n=w.current)||void 0===n||n.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(i=w.current)||void 0===i||i.forceSource("online",t,a))}}))),Object(b.jsx)(Sn,{ref:w,title:s["input.card-art.label"],defaultSourceType:v,defaultExternalSource:h,defaultInternalSource:y,defaultCropInfo:g,forceFit:x,receivingCanvas:o,onSourceChange:(e,t)=>{R(e),"offline"===e?C(t):F(t)},onCropChange:L,onTainted:i,onSourceLoaded:n,onForceFitChange:T,onMaxSizeExceeded:e=>{pa.a.error({description:s["error.max-size.description"](e),message:s["error.max-size.message"]})},ratio:p(m,c).ratio,beforeCropper:a?Object(b.jsx)(Zi,{className:"art-finish-checkbox fill-input-train",value:d,onChange:N,optionList:Vn,children:Object(b.jsx)("span",{className:"field-title",children:s["input.art-finish.label"]})}):null,children:Object(b.jsx)(Fn,{active:f,defaultValue:u,onChange:S,onStatusChange:k},`link-${JSON.stringify(u)}`)})})),el=ba.b.div`
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
`,tl=ba.b.span`
    cursor: pointer;
`,al=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=Ca(),{name:n,format:i,getUpdater:l}=tr(Object(io.useShallow)((e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}}))),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)((()=>l("setId")),[l]),u=Object(r.useMemo)((()=>l("name",void 0,"debounce")),[l]);return Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t,a;let{name:r,setId:o}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof o&&(null===(a=c.current)||void 0===a||a.setValue(o))}}))),Object(b.jsxs)(el,{className:"name-id-input",children:[Object(b.jsx)(Mi,{ref:s,id:"name",defaultValue:n,addonBefore:Object(b.jsx)(ma.a,{title:o["input.name.tooltip"],children:Object(b.jsx)(tl,{onClick:()=>{navigator.clipboard.writeText(At(n))},children:o["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(b.jsx)(Mi,{ref:c,id:"set-id",defaultValue:tr.getState().card.setId,addonBefore:Object(b.jsxs)(Xi,{className:"input-label-with-button",children:[Object(b.jsx)("div",{className:"input-label",children:o["input.set-id.label"]}),Object(b.jsx)(Ro,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>na("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+na("0000000000111111111122222222223456789",1)+na("0123456789",2))(i))},Icon:Yi.a,tooltipProps:{overlay:o["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})})),rl=Object(r.forwardRef)(((e,t)=>{let{frameList:a,pendulumFrame:o,onChange:n,onCancel:i}=e;const l=Ca(),s=Object(r.useRef)("auto"===o?"spell":o),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,(()=>({focus:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.focus()}}))),Object(b.jsxs)(Ui,{className:"pendulum-frame-picker",...oa({stopPropagation:!0,optionLength:a.length,setFocus:u,onTrigger:()=>{d>=0&&n(a[d].value)},onCancel:i}),children:[Object(b.jsx)(Co.a,{ref:c,className:"frame-auto-checkbox",checked:"auto"===o,onChange:e=>{n(e.target.checked?"auto":s.current)},children:l["input.frame.auto"]}),Object(b.jsx)(Ao,{className:"frame-radio",value:o,onChange:n,optionList:a})]})})),ol=ba.b.div`
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
`,nl=ba.b.div`
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
`,il=Object(r.forwardRef)(((e,t)=>{let{showCreativeOption:a,showExtraDecorativeOption:o,onTakePicker:n}=e;const i=Ca(),{isPendulum:l,pendulumFrame:s,pendulumScaleBlue:c,pendulumScaleRed:d,setCard:u,getUpdater:p}=tr(Object(io.useShallow)((e=>{let{card:{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:o},setCard:n,getUpdater:i}=e;return{isPendulum:t,pendulumFrame:a,pendulumScaleBlue:r,pendulumScaleRed:o,setCard:n,getUpdater:i}}))),m=Object(r.useRef)(null),f=Object(r.useRef)(null),h=Object(r.useRef)(null),[g,y]=Object(r.useState)(!0),[v,x]=Object(r.useState)(!1),j=Object(r.useRef)("auto"===s?"spell":s),O=Object(r.useMemo)((()=>p("pendulumScaleRed")),[p]),w=Object(r.useMemo)((()=>p("pendulumScaleBlue")),[p]),S=Object(r.useMemo)((()=>p("pendulumEffect",void 0,"debounce")),[p]),k=Object(r.useMemo)((()=>_n().filter((e=>o||"normal"===e.edition))),[o]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=h.current)||void 0===t||t.setValue(a))}})));const F=pe[s];return Object(b.jsxs)(nl,{className:"pendulum-input",children:[Object(b.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(b.jsx)("div",{className:"pendulum-checkbox",children:Object(b.jsx)(Co.a,{onChange:e=>u((t=>{const a=e.target.checked;return{...t,isPendulum:a,isLink:!a&&t.isLink}})),checked:l,children:i["input.pendulum.label"]})}),a&&Object(b.jsx)(Oo.a,{visible:v,onVisibleChange:x,trigger:["hover","click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(rl,{ref:f,frameList:k,pendulumFrame:s,onCancel:()=>{var e;x(!1),null===(e=m.current)||void 0===e||e.focus()},onChange:e=>{const t=`${e}`;"auto"!==t&&(j.current=t),u((e=>({...e,pendulumFrame:t})))}})}),children:Object(b.jsxs)(ol,{ref:m,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return x(!0),setTimeout((()=>{var e;null===(e=f.current)||void 0===e||e.focus()}),200),!1},children:[Object(b.jsxs)("span",{className:"pendulum-frame-label",children:[i["input.bottom-frame.label"]," ",Object(b.jsx)(ai.a,{})]}),F?Object(b.jsx)(sn,{className:"pendulum-frame-info-block",...F}):Object(b.jsx)(sn,{className:"pendulum-frame-info-block",nameKey:"input.frame.auto"})]})}),l&&a&&Object(b.jsx)(Co.a,{onChange:e=>y(e.target.checked),checked:g,children:i["input.mirror-scale.label"]})]}),l&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)(mn.a,{addonBefore:Object(b.jsx)("span",{children:i["input.scale.label"](Object(b.jsx)("span",{className:"blue-scale",children:i["input.scale.blue.label"]},"blue-scale"))}),value:c,onChange:e=>{w(e),g&&O(e)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(mn.a,{addonBefore:Object(b.jsx)("span",{children:i["input.scale.label"](Object(b.jsx)("span",{className:"red-scale",children:i["input.scale.red.label"]},"red-scale"))}),value:d,onChange:e=>{g&&w(e),O(e)}})}),Object(b.jsx)("div",{className:"joined-row",children:Object(b.jsx)(Pi,{ref:h,id:"pendulum-effect",allowHotkey:!0,defaultValue:tr.getState().card.pendulumEffect,onChange:S,onTakePicker:n,rows:5})})]})]})})),ll=ba.b.div`
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
`,sl=Object(r.forwardRef)(((e,t)=>{let{onTakePicker:a}=e;const o=Ca(),{frame:n,cardIcon:i,format:l,furiganaHelper:s,condenseTolerant:c,setCard:d,getUpdater:u}=tr(Object(io.useShallow)((e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:o,effectStyle:n},setCard:i,getUpdater:l}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:o,condenseTolerant:null===n||void 0===n?void 0:n.condenseTolerant,setCard:i,getUpdater:l}}))),p="ocg"===l?"\uff0f":"/",m=Object(r.useRef)(null),f=Object(r.useMemo)((()=>u("typeAbility",(e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map((e=>`${e}`.trim())).filter((e=>"string"===typeof e&&e.length>0))),"debounce")),[u]),h=Object(r.useCallback)((e=>d((t=>({...t,furiganaHelper:e.target.checked})))),[d]);Object(r.useImperativeHandle)(t,(()=>({setValue:e=>{var t;let{typeAbility:a}=e;a&&(null===(t=m.current)||void 0===t||t.setValue(a.join(p)))}})));const g="auto"===i?ht({frame:n})?"input.type.monster.label":"input.type.st.label":"st"===j[i].value?"input.type.st.label":"input.type.monster.label",y="ocg"===l;return Object(b.jsxs)(ll,{className:`post-pendulum-input variant-${l}`,children:[Object(b.jsx)(Mi,{ref:m,addonBefore:o[g],id:"type-ability",defaultValue:tr.getState().card.typeAbility.join(p),onChange:f,onTakePicker:a}),y&&Object(b.jsx)(ma.a,{overlay:o["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(b.jsx)(Co.a,{className:"input-kanji-helper",onChange:h,checked:s,children:o["input.furigana-helper.label"]})}),Object(b.jsx)(Ao,{className:"condense-input",value:`${c}`,onChange:e=>(e=>{d((t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}})))})(e),optionList:Zn,children:Object(b.jsxs)("span",{children:[o["input.condense.label"]," ",Object(b.jsx)(ko,{content:Object(b.jsx)(Yo,{children:o["input.condense.tooltip"]})})]})}),Object(b.jsx)(on,{})]})})),cl=ba.b.div`
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
`,dl=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],ul=e=>{let{value:t="",onChange:a}=e;const[o,n]=Object(r.useState)(t),[i,l]=Object(r.useState)((()=>({hex:la.test(t)?t:"#000000",rgb:sa(t,!1)})));return Object(r.useEffect)((()=>{const e=o.startsWith("#")?o:`#${o}`;la.test(e)&&(n(e),l({hex:e,rgb:sa(e,!1)}),null===a||void 0===a||a(e))}),[o]),Object(r.useEffect)((()=>{n(t),l({hex:la.test(t)?t:"#000000",rgb:sa(t,!1)})}),[t]),Object(b.jsxs)(cl,{children:[Object(b.jsx)("div",{className:"color-list",children:dl.map((e=>{let{hex:t,rgb:r}=e;const o=(299*r[0]+587*r[1]+114*r[2])/1e3>=128?"#000000":"#FFFFFF";return Object(b.jsx)("div",{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:i.hex.toUpperCase()===t&&Object(b.jsx)("div",{className:"active-dot",style:{backgroundColor:o}})},t)}))}),Object(b.jsxs)("div",{className:"color-input",children:[Object(b.jsx)("div",{className:"color-block static-block",style:{backgroundColor:i.hex}}),Object(b.jsx)(mn.a,{size:"small",value:o,onChange:e=>{n(e.target.value)}})]})]})},pl=ba.b.div`
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
        background-color: #eaeaea;
        border-radius: var(--br-sm);
        box-shadow: 0 0 1px 1px var(--main-level-1) inset;
    }
    .text-style-label {
        padding: var(--spacing-xxs);
        line-height: 1.7;
    }
`,ml=ba.b.div`
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
`,bl={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},fl=()=>{const e=Ca(),{effectStyle:t,effectTextStyle:a,otherTextStyle:r,pendulumStyle:o,pendulumTextStyle:n,setCard:i,statTextStyle:l,typeTextStyle:s}=tr(Object(io.useShallow)((e=>{let{card:{effectStyle:t,effectTextStyle:a,otherTextStyle:r,pendulumStyle:o,pendulumTextStyle:n,statTextStyle:i,typeTextStyle:l},setCard:s}=e;return{effectStyle:t,effectTextStyle:a,otherTextStyle:r,pendulumStyle:o,pendulumTextStyle:n,setCard:s,statTextStyle:i,typeTextStyle:l}}))),c=[{info:bl.effectTextStyle,value:a,extraValue:t},{info:bl.pendulumTextStyle,value:n,extraValue:o},{info:bl.statTextStyle,value:l},{info:bl.typeTextStyle,value:s},{info:bl.otherTextStyle,value:r}];return Object(b.jsx)(Oo.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(b.jsx)("div",{className:"overlay-event-absorber",children:Object(b.jsx)(ml,{className:"custom-style-picker",children:c.map((t=>{let{info:a,value:r,extraValue:o}=t;const{keyName:n,labelKey:l,extraKeyname:s}=a,[c,d,u,p]=r,{upSize:f,fontStyle:h}=null!==o&&void 0!==o?o:{};return Object(b.jsxs)("div",{className:"style-section",children:[Object(b.jsxs)("h3",{className:"custom-style-expand "+(c?"":"inactive"),children:[Object(b.jsx)("span",{children:e[l]}),Object(b.jsx)(Co.a,{checked:c,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[n]:[a,...r.slice(1)]}}))},children:e["input.text-style.custom.label"]})]}),c&&Object(b.jsxs)("div",{className:"style-picker-section",children:["string"===typeof h&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h2",{className:"font-style-picker",children:[Object(b.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(b.jsx)(Ao,{className:"inline-radio-train",value:h,optionList:[{label:Object(b.jsx)(m.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{i((t=>{const a=s?{...t[s]}:void 0;return a&&s?(a.fontStyle="string"===typeof e?e:"auto",{...t,[s]:a}):t}))}})]})}),"number"===typeof f&&Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h2",{className:"size-picker",children:[Object(b.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(b.jsx)(Ao,{className:"inline-radio-train",value:f,optionList:[{label:Object(b.jsx)(m.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{i((t=>{const a=s?{...t[s]}:void 0;return a&&s?(a.upSize="number"===typeof e?e:0,{...t,[s]:a}):t}))}})]})}),Object(b.jsx)("h2",{children:Object(b.jsx)(Co.a,{className:"shadow-checkbox",checked:u,onChange:e=>{i((t=>{const a=e.target.checked;return{...t,[n]:[...r.slice(0,2),a,r[3]]}}))},children:Object(b.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),u&&Object(b.jsx)(ul,{value:p,onChange:e=>i((t=>({...t,[n]:[...r.slice(0,3),e]})))}),Object(b.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(b.jsx)(ti.b,{colors:dt,color:null!==d&&void 0!==d?d:"",onChangeComplete:e=>{i((t=>({...t,[n]:[r[0],e.hex,...r.slice(2,4)]})))}})]})]},n)}))})}),children:Object(b.jsxs)(pl,{className:"text-style-preview",children:[Object(b.jsx)("div",{className:"text-style-grid",children:c.map((e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:o}=t,[n,i,l,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(b.jsx)("div",{className:"text-style-preview-section",style:{color:0!==(null!==i&&void 0!==i?i:"").length&&n?i:"#000000",textShadow:n&&l?`0 0 2px ${s}`:"none",fontStyle:n&&"italic"===d?"italic":"normal"},children:c&&n?Object(b.jsxs)("div",{children:["+",c]}):"Auto"},o)}))}),Object(b.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(512);const hl=Object(r.forwardRef)(((e,t)=>{let{artworkCanvas:a,backgroundCanvas:o,onCropChange:n,onTainted:i,onSourceLoaded:l}=e;const s=Ca(),{format:c,frame:d,foil:u,finish:p,opacity:g,nameStyleType:y,nameStyle:v,isPendulum:x,isLink:j,attribute:O,getUpdater:w,setCard:S}=tr(Object(io.useShallow)((e=>{let{card:{format:t,frame:a,foil:r,finish:o,opacity:n,nameStyleType:i,nameStyle:l,isPendulum:s,isLink:c,attribute:d},getUpdater:u,setCard:p}=e;return{format:t,frame:a,foil:r,finish:o,opacity:n,nameStyleType:i,nameStyle:l,isPendulum:s,isLink:c,attribute:d,getUpdater:u,setCard:p}}))),{setting:k}=ar(),{showCreativeOption:F,showExtraDecorativeOption:C}=k,T=Object(r.useRef)(null),R=ht({frame:d}),[N,L]=Object(r.useState)(0),E=Object(r.useMemo)((()=>{return e={normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]},H(e).map((e=>{let{color:t,name:a,label:r}=e;return{label:"normal"===a?Object(b.jsx)(m.a,{}):r,value:a,props:{style:{color:t,fontWeight:"bold"}}}}));var e}),[s]),I=Object(r.useRef)(null),A=Object(r.useRef)(null),B=Object(r.useRef)(null),z=Object(r.useRef)(null),W=Object(r.useRef)(null),D=Object(r.useRef)(null),P=Object(r.useRef)(null),[M,$]=Object(r.useState)({id:"",setValue:()=>{}}),K=Object(r.useMemo)((()=>w("foil")),[w]),Y=Object(r.useMemo)((()=>w("finish")),[w]),G=Object(r.useCallback)((e=>S((t=>({...t,opacity:e})))),[S]),U=Object(r.useMemo)((()=>w("attribute")),[w]),X=Object(r.useCallback)(((e,t)=>{S((a=>({...a,nameStyleType:e,nameStyle:t})))}),[S]),V=Object(r.useMemo)((()=>((e,t,a)=>h.map((a=>{let{name:r,nameKey:o,isCreative:n}=a;return{label:r===f?Object(b.jsx)(m.a,{}):Object(b.jsx)(ma.a,{overlay:t[o],children:Object(b.jsx)("img",{alt:t[o],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:n}})).filter((e=>{let{isCreative:t}=e;return!1===t||t===a})))(c,s,F)),[c,s,F]);return Object(r.useEffect)((()=>{var e;null===(e=T.current)||void 0===e||e.setValue({font:v.font})}),[v]),Object(r.useEffect)((()=>{var e;null===(e=A.current)||void 0===e||e.setValue(g)}),[g]),Object(r.useImperativeHandle)(t,(()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=I.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=A.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,o,n,i,l;L((e=>e+1));const{name:s,art:c,artCrop:d,artData:u,artSource:p,background:m,backgroundCrop:b,backgroundData:f,backgroundSource:h,opacity:g,setId:y,pendulumEffect:v,typeAbility:x,effect:j,atk:O,def:w,creator:S,password:k}=e;null===(t=I.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:p}),null===(a=A.current)||void 0===a||a.setValue({...g,background:m,backgroundCrop:b,backgroundData:f,backgroundSource:h}),null===(r=B.current)||void 0===r||r.setValue({name:s,setId:y}),null===(o=z.current)||void 0===o||o.setValue({pendulumEffect:v}),null===(n=W.current)||void 0===n||n.setValue(j),null===(i=D.current)||void 0===i||i.setValue({typeAbility:x}),null===(l=P.current)||void 0===l||l.setValue({atk:O,def:w,creator:S,password:k})}}))),Object(b.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(b.jsx)(_o,{}),Object(b.jsx)("br",{}),Object(b.jsx)(Uo,{}),Object(b.jsxs)("div",{className:"card-overlay-input",children:[Object(b.jsx)(_i,{className:"format-radio",value:c,onChange:e=>{S((t=>{var a,r,o,n,i;const l=va(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:p,creator:m,pendulumEffect:b}=l;return null===(a=B.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=W.current)||void 0===r||r.setValue(d),null===(o=z.current)||void 0===o||o.setValue({pendulumEffect:b}),null===(n=D.current)||void 0===n||n.setValue({typeAbility:u}),null===(i=P.current)||void 0===i||i.setValue({creator:m,password:p}),l}))},optionList:Un,children:Object(b.jsx)("span",{children:s["input.format.label"]})}),Object(b.jsx)(Ao,{className:"foil-radio",value:u,onChange:K,optionList:E,children:Object(b.jsx)("span",{children:s["input.foil.label"]})}),C&&Object(b.jsx)(ji,{className:"finish-checkbox",value:p,onChange:Y,optionList:Xn,children:Object(b.jsx)("span",{children:s["input.finish.label"]})})]}),F&&Object(b.jsxs)("div",{className:"card-layout-input",children:[Object(b.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(b.jsx)(ko,{content:Object(b.jsx)(Yo,{children:s["input.layout.tooltip"]})})]}),Object(b.jsx)(Ti,{ref:A,defaultValue:g,receivingCanvas:o,onChange:G,onTainted:i,onCropChange:n,onSourceLoaded:l})]}),Object(b.jsx)(vi,{onSTFrameChange:e=>{var t;return null===(t=D.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=P.current)||void 0===t?void 0:t.setValue({password:e})}}),Object(b.jsxs)(Vi,{className:"name-style-id-input",children:[Object(b.jsx)(al,{ref:B,onTakePicker:$}),Object(b.jsx)(hi,{ref:T,frameInfo:pe[d],defaultType:y,defaultValue:v,showExtraDecorativeOption:C,onChange:X},N),Object(b.jsx)(Ai,{isLink:j,isMonster:R,showCreativeOption:F})]}),Object(b.jsxs)("div",{className:"main-info",children:[Object(b.jsxs)("div",{className:"main-info-first",children:[Object(b.jsx)(Ao,{className:"fill-input-train attribute-input",value:O,onChange:U,optionList:V,children:Object(b.jsx)("span",{children:s["input.attribute.label"]})}),(x||F)&&Object(b.jsx)(il,{ref:z,showCreativeOption:F,showExtraDecorativeOption:C,onTakePicker:$}),Object(b.jsx)(sl,{ref:D,onTakePicker:$}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(b.jsx)(Tn,{className:"standalone-label",children:s["input.effect.label"]}),F?Object(b.jsx)(fl,{}):Object(b.jsx)("div",{}),Object(b.jsx)(ei,{targetId:M.id,onPick:M.setValue})]}),Object(b.jsx)(Hi,{ref:W,onTakePicker:$})]}),Object(b.jsx)(Ji,{ref:P,isMonster:R,showCreativeOption:F,onTakePicker:$})]}),Object(b.jsx)("div",{className:"main-info-second",children:Object(b.jsx)(Qi,{ref:I,receivingCanvas:a,showExtraDecorativeOption:C,onSourceLoaded:l,onTainted:i,onCropChange:n})})]})]})}));var gl=a(520);const{height:yl,width:vl,cardBorder:xl}=s,jl=68/vl,Ol=ba.b.div`
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
`,wl=e=>{var t,a,o,n;let{index:i,card:l,active:s,language:d,onDuplicate:u,onSelect:m,onDelete:f,style:h}=e;const[y,v]=Object(r.useState)(!1),{art:x,artCrop:j,artData:O,artFit:w,artSource:S,atk:k,attribute:F,background:C,backgroundCrop:T,backgroundData:R,backgroundFit:N,backgroundSource:L,backgroundType:E,cardIcon:I,def:A,format:B,frame:z,hasBackground:W,isLink:D,isPendulum:P,linkMap:M,name:H,opacity:$,pendulumFrame:K,pendulumScaleBlue:Y,pendulumScaleRed:G,setId:U,star:X,subFamily:V,typeAbility:_}=l,q=At(H),J="auto"===K?P?"spell":z:K,Z="offline"===S?x?O:"https://i.imgur.com/jjtCuG5.png":x,Q="offline"===L?C?R:"https://imgur.com/pdSVzUZ.png":C,ee="auto"===I?gt(z):I,te="st"===ee?V:ee,ae=ht(l),re=ft(l),oe="auto"!==K||P?!!(k||A||D&&M.length):ae,ne=_.join(" / "),ie=p(P,$),{artFrameHeight:le,artFrameWidth:se}=ie;return Object(b.jsxs)(Ol,{className:da("truncate",s?"active":"",i%2===0?"alternative-color":""),onClick:()=>m(l),style:h,children:[Object(b.jsxs)("div",{className:"left-slot",children:[Object(b.jsx)("div",{className:"card-frame top-frame",style:{backgroundColor:null===(t=pe[z])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=pe[z])||void 0===a?void 0:a.labelBackgroundImage}}),Object(b.jsx)("div",{className:"card-frame bottom-frame",style:{backgroundColor:null===(o=pe[J])||void 0===o?void 0:o.labelBackgroundColor,backgroundImage:null===(n=pe[J])||void 0===n?void 0:n.labelBackgroundImage}}),Object(b.jsxs)("a",{className:"card-art-container",href:Z,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:se*jl,height:le*jl,top:(yl-vl)/2/2*jl,left:(vl-se)/2*jl,backgroundColor:c},children:[W&&Object(b.jsx)(kl,{className:"background-art",artLink:Q,name:q+" - background",fit:N,crop:T,canvasCoordinate:p(P,{...$,boundless:"fit"!==E})}),Object(b.jsx)(kl,{className:"foreground-art",artLink:Z,name:q,fit:w,crop:j,canvasCoordinate:ie})]}),D&&[...Array(9)].map(((e,t)=>4===t?null:Object(b.jsx)("div",{className:da(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,M.includes(`${t+1}`)?"marker-checked":""),style:{transform:`rotate(${fe[t]}deg) translateY(${he[t]}px)`}},`link-${t}`))),P&&Object(b.jsx)("div",{className:"pendulum-scale blue-scale",children:Y}),P&&Object(b.jsx)("div",{className:"pendulum-scale red-scale",children:G})]}),Object(b.jsxs)("div",{className:"right-slot truncate",children:[Object(b.jsx)("div",{className:"first-row truncate",children:q}),Object(b.jsxs)("div",{className:"second-row truncate",children:[re||"NONE"===F?null:Object(b.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${B}-${F.toLowerCase()}.png`,alt:"Icon"}),_.length>0&&Object(b.jsx)("div",{className:"truncate",children:ne}),"st"!==ee&&Object(b.jsx)("div",{className:"padding"}),!D&&te!==g&&"none"!==ee&&Object(b.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${te.toLowerCase()}.png`,alt:"Icon"}),!D&&!re&&"st"!==ee&&Object(b.jsx)("span",{className:da("star-content truncate",ne.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof X?X:""!==X?`"${X}"`:""})]}),Object(b.jsxs)("div",{className:"third-row truncate",children:[oe&&Object(b.jsx)("div",{children:k}),oe?Object(b.jsx)("div",{children:"\xa0/\xa0"}):Object(b.jsx)("div",{children:"\xa0"}),oe&&Object(b.jsx)("div",{children:D?`Link ${M.length}`:A}),U&&Object(b.jsx)("div",{className:"set-id",children:U})]})]}),Object(b.jsx)("div",{className:da("action-slot",y?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(b.jsxs)("div",{className:"action-container",children:[Object(b.jsx)(ma.a,{placement:"left",title:d["manager.button.duplicate.tooltip"],children:Object(b.jsx)(zn.a,{className:"action-button action-duplicate",onClick:()=>u(l)})}),Object(b.jsx)(gl.a,{placement:"left",title:d["manager.button.delete.label"],onVisibleChange:e=>v(e),onConfirm:()=>f(l.id),okText:d["manager.button.delete.confirm.label"],cancelText:d["manager.button.delete.cancel.label"],children:Object(b.jsx)(ma.a,{placement:"left",title:d["manager.button.delete.tooltip"],children:Object(b.jsx)(ga.a,{className:"action-button action-delete"})})})]})})]})},Sl=(e,t,a,r,o)=>{var n;const{artWidth:i,artY:l,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:p,x:m,y:b}=null!==(n=o?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==n?n:{},f=e*((null!==u&&void 0!==u?u:0)/100),h=t*((null!==p&&void 0!==p?p:0)/100),g=i*jl/(f<=0?1:f);return{top:(null!==b&&void 0!==b?b:0)/100*-t*g,left:(null!==m&&void 0!==m?m:0)/100*-e*g,width:e*g,height:o?t*(i/s*jl/(h<=0?1:h)):void 0,transform:`translateX(${-(i===c?0:(vl-c)/2-xl)*jl}px) translateY(${-(d-l)*jl}px)`}},kl=e=>{let{artLink:t,name:a,crop:o,className:n,fit:i,canvasCoordinate:l,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[p,m]=Object(r.useState)((()=>{var e,t,a,r;return Sl(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,o,i)}));return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{e&&d(t)}),500),()=>{e=!1}}),[t]),Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{var t,a,r,n;e&&m(Sl(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(n=u.current)||void 0===n?void 0:n.naturalHeight)&&void 0!==r?r:1,l,o,i))}),500),()=>{e=!1}}),[o,l,i]),Object(b.jsx)("img",{ref:u,className:da("card-art",n),src:c,alt:a,style:{...p,...s},onLoad:()=>{var e,t,a,r;m(Sl(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,l,o,i))}})};var Fl=a(280),Cl=a(292);const Tl=ba.b.div`
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
`,Rl=e=>{let{data:t,index:a,style:r}=e;const{activeId:o,language:n,list:i,onDelete:l,onDownload:s,onDuplicate:c,onSelect:d}=t;return Object(b.jsx)(wl,{index:a,card:i[a],active:i[a].id===o,language:n,onDuplicate:c,onSelect:d,onDownload:s,onDelete:l,style:r})},Nl=e=>{let{language:t,onSelect:a,onDownload:o,onRequestImport:n}=e;const{activeId:i,cardDisplayList:l,deleteCard:s,duplicateCard:c,resetFilter:d}=Za(Object(io.useShallow)((e=>{let{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:o,resetFilter:n}=e;return{activeId:t,cardDisplayList:a,deleteCard:r,duplicateCard:o,resetFilter:n}}))),[u,p]=Object(r.useState)(0),m=e=>{s(e),p((e=>e+1))};return Object(r.useEffect)((()=>{let e=!0;return setTimeout((()=>{if(e&&u>0){const{activeId:e,cardList:t,setCardList:r}=Za.getState(),o=t.find((t=>t.id===e));if(o)a(o);else{const e={id:Object(T.a)(),...st()};r([e],e.name)}}}),500),()=>{e=!1}}),[a,u]),Object(b.jsxs)(Tl,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Object(b.jsx)("div",{className:"list-container",children:Object(b.jsx)(Fl.a,{children:e=>{let{height:r,width:n}=e;return Object(b.jsx)(Cl.a,{className:"List",height:r,itemCount:l.length,itemSize:68,itemData:{list:l,language:t,activeId:i,onDuplicate:c,onSelect:a,onDownload:o,onDelete:m},overscanCount:5,width:n,children:Rl})}})}),0===l.length&&Object(b.jsxs)("div",{className:"no-card",children:[Object(b.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(b.jsx)("div",{className:"reset-filter",onClick:d,children:t["manager.button.search.button.reset.label"]})]}),Object(b.jsx)(po.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var Ll=a(571),El=a(535);const{Panel:Il}=El.a,Al=ba.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,Bl=Object(ba.b)($o)`
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
`,zl=Object(ba.b)(ua.a)`
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
                ${Bl} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,Wl=e=>{let{data:t,children:a}=e;const[o,n]=Object(r.useState)(!1);return Object(b.jsxs)(Bl,{onClick:e=>{var a;e.stopPropagation(),a=t,An()(a),n(!0),setTimeout((()=>{n(!1)}),1e3)},children:[o?Object(b.jsx)("div",{className:"copiable-overlay",children:Object(b.jsx)(Bn.a,{})}):null,a]})},Dl=e=>{let{language:t}=e;const[a,o]=Object(r.useState)(!1);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Al,{className:"manager-toggle-button",onClick:()=>o(!0),children:t["manager.header.button.template.label"]}),Object(b.jsx)(zl,{visible:a,onCancel:()=>o(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(b.jsxs)("div",{className:"sample-modal-container",children:[Object(b.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(b.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(b.jsx)("div",{className:"download-button",children:Object(b.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(b.jsx)(po.a,{children:t["manager.template.download.label"]})})}),Object(b.jsx)(El.a,{ghost:!0,children:Object(b.jsx)(Il,{header:Object(b.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(b.jsxs)("table",{className:"option-container",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(b.jsx)("th",{children:Object(b.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(b.jsx)("div",{children:["tcg","ocg"].map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Frame",altField:"Bottom Frame",value:Object(b.jsx)("div",{children:me.map((e=>{let{name:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Attribute",value:Object(b.jsx)("div",{children:h.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Spell/Trap Icon",value:Object(b.jsx)("div",{children:y.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Sticker",value:Object(b.jsx)("div",{children:x.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Foil",value:Object(b.jsx)("div",{children:H().filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{name:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Card Finish",value:Object(b.jsxs)("div",{children:[Object.values(D).map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)})),Object(b.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(b.jsx)("div",{children:Object.values(P).map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Star Type",value:Object(b.jsx)("div",{children:["number","text"].map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Star Alignment",value:Object(b.jsx)("div",{children:["left","center","right"].map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Card Icon Type",value:Object(b.jsx)("div",{children:O.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Background Type",value:Object(b.jsx)("div",{children:l().map((e=>{let{value:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})},{field:"Condense Rate",value:Object(b.jsx)("div",{children:Object.keys(Q).map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Name Style Type",value:Object(b.jsx)("div",{children:["predefined","custom"].map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Name Style - Font",value:Object(b.jsx)("div",{children:Object(b.jsx)(Wl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(b.jsx)("div",{children:Object.keys(S).map((e=>Object(b.jsx)(Wl,{data:e,children:e},e)))})},{field:"Name Style - Pattern",value:Object(b.jsx)("div",{children:C.filter((e=>{let{isOption:t}=e;return t})).map((e=>{let{key:t}=e;return Object(b.jsx)(Wl,{data:t,children:t},t)}))})}].map((e=>{let{field:t,altField:a,value:r}=e;return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)(Bl,{children:t}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)(Bl,{children:a})]})]}),Object(b.jsx)("td",{children:r})]},t)}))]})},"sample-option")})]})})]})};var Pl=a(156);const Ml=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),Hl=ba.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,$l=Object(ba.b)(Zo.a)`
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
`,Kl=Object(r.forwardRef)(((e,t)=>{let{language:a,onVisibleChange:o,onSelect:n,onDownload:i,onRequestImport:l}=e;const s="list-upload-id",c=Object(r.useRef)(null),{cardList:d,changeEditStatus:u,pendingActiveCard:p,setActiveId:m,setCardList:f,setFilterFunction:h,setListName:g,setPendingActiveCard:y,sortList:v,toggleVisible:x,visible:j}=Za(Object(io.useShallow)((e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:o,setCardList:n,setFilterFunction:i,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:o,setCardList:n,setFilterFunction:i,setListName:l,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}}))),O=ar((e=>e.setting.exportFormat)),[w,S]=Object(r.useState)(0),[k,F]=Object(r.useState)(!1),[C,T]=Object(r.useState)(!1),R=Oa()((e=>{h({type:"text",value:e.target.value})}),250),N=Object(r.useCallback)((e=>{n(e),m(e.id)}),[n,m]);return Object(r.useEffect)((()=>{p&&(n(p),m(p.id),y())}),[n,p,m,y]),Object(r.useEffect)((()=>{localStorage.setItem("manager-panel-visible",j.toString()),o(j)}),[o,j]),Object(r.useEffect)((()=>{const e=Za.subscribe((e=>e.filterResetSignal),(e=>{e&&S((e=>e+1))}));return()=>{e()}}),[]),Object(r.useImperativeHandle)(t,(()=>({})),[]),Object(b.jsx)(Hl,{children:Object(b.jsx)($l,{title:Object(b.jsxs)("div",{className:"card-manager-header truncate",children:[Object(b.jsx)(Gl,{className:"manager-label-container truncate",language:a,children:d.length}),Object(b.jsxs)("div",{className:"manager-button-container",children:[Object(b.jsx)("div",{className:"manager-button",children:Object(b.jsx)(Dl,{language:a})}),Object(b.jsx)(mo.a,{overlay:Object(b.jsx)(cn.a,{children:[{value:qa.level.key,label:a["manager.button.sort.level.label"]},{value:qa.name.key,label:a["manager.button.sort.name.label"]},{value:qa.atk.key,label:a["manager.button.sort.atk.label"]},{value:qa.def.key,label:a["manager.button.sort.def.label"]},{value:qa.set.key,label:a["manager.button.sort.set-id.label"]}].map((e=>{let{value:t,label:a}=e;return Object(b.jsx)(cn.a.Item,{onClick:()=>v(t),children:a},t)}))}),children:Object(b.jsx)("div",{className:"manager-button",children:Object(b.jsx)(Gi.a,{})})}),Object(b.jsx)(ma.a,{title:a["manager.header.button.download.tooltip"],children:Object(b.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(T(!0),Ml.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=Na.length;let r="";for(let o=0;o<e.length;o++){const n=(e,t)=>{const a=Aa[e];"number"===typeof a&&("string"===typeof t&&(i[a]=t),"number"===typeof t&&(i[a]=`${t}`),"boolean"===typeof t&&(i[a]=`${t}`),null==t&&(i[a]=""))},i=Array(a).map((()=>"")),{art:l,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:p,attribute:m,background:b,backgroundCrop:f,backgroundFit:h,backgroundSource:g,backgroundType:y,cardIcon:v,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:S,externalInfo:k,finish:F,foil:C,format:T,frame:R,furiganaHelper:N,hasBackground:L,isDuelTerminalCard:E,isFirstEdition:I,isLegacyCard:A,isLimitedEdition:B,isLink:z,isPendulum:W,isSpeedCard:D,linkMap:P,name:M,nameStyle:H,nameStyleType:$,opacity:K,otherTextStyle:Y,password:G,pendulumEffect:U,pendulumFrame:X,pendulumScaleBlue:V,pendulumScaleRed:_,pendulumStyle:q,pendulumTextStyle:J,setId:Z,star:Q,starAlignment:ee,statTextStyle:te,sticker:ae,subFamily:re,typeAbility:oe,typeTextStyle:ne}=e[o],ie=JSON.stringify(k);n("Format",T),n("Frame",R),n("Name",M),n("Attribute",m),n("Star",`${Q}`),n("Spell/Trap Icon",re),n("Art Link",l),n("Type Ability",oe.join("/")),n("Effect",O),n("Set Id",Z),n("ATK",p),n("DEF",j),n("Password",G),n("Sticker",ae),n("Copyright",x),n("Is Pendulum",W),n("Pendulum Effect",U),n("Pendulum Scale Red",_),n("Pendulum Scale Blue",V),n("Is Link",z),n("Link - Top Left Arrow",P.includes("1")),n("Link - Top Arrow",P.includes("2")),n("Link - Top Right Arrow",P.includes("3")),n("Link - Left Arrow",P.includes("4")),n("Link - Right Arrow",P.includes("6")),n("Link - Bottom Left Arrow",P.includes("7")),n("Link - Bottom Arrow",P.includes("8")),n("Link - Bottom Right Arrow",P.includes("9")),n("Is First Edition",I),n("Is Speed Card",D),n("Is Limited Edition",B),n("Is Duel Terminal Card",E),n("Is Legacy Card",A),n("Foil",C),n("Art Finish",c),n("Card Finish",F.join(",")),n("Art Crop - X (%)",s.x),n("Art Crop - Y (%)",s.y),n("Art Crop - Width (%)",s.width),n("Art Crop - Height (%)",s.height),n("Is Using Full Art",d),n("Star Type","number"===typeof Q&&Q>=0&&Q<=13?"number":"text"),n("Star Alignment",ee),n("Card Icon Type",v),n("Opacity - Body",K.body),n("Opacity - Pendulum",K.pendulum),n("Opacity - Text",K.text),n("Opacity - Name",K.name),n("Opacity - Base Fill",K.baseFill),n("Opacity - Art Border",K.artBorder),n("Opacity - Name Border",K.nameBorder),n("Opacity - Boundless",K.boundless),n("Has Background",L),n("Background Link",b),n("Is Using Full Background",h),n("Background Type",y),n("Background Crop - X (%)",f.x),n("Background Crop - Y (%)",f.y),n("Background Crop - Width (%)",f.width),n("Background Crop - Height (%)",f.height),n("Bottom Frame",X),n("Condense Rate",w.condenseTolerant),n("Use Furigana Helper",N),n("Name Style Type",$),n("Name Style - Font",H.font),n("Name Style - Fill Style",H.fillStyle),n("Name Style - Headtext Fill Style",H.headTextFillStyle),n("Name Style - Shadow Color",H.shadowColor),n("Name Style - Shadow Offset Y",H.shadowOffsetY),n("Name Style - Shadow Offset X",H.shadowOffsetX),n("Name Style - Shadow Blur",H.shadowBlur),n("Name Style - Has Shadow",H.hasShadow),n("Name Style - Line Color",H.lineColor),n("Name Style - Line Width",H.lineWidth),n("Name Style - Line Offset Y",H.lineOffsetY),n("Name Style - Line Offset X",H.lineOffsetX),n("Name Style - Has Outline",H.hasOutline),n("Name Style - Gradient Angle",H.gradientAngle),n("Name Style - Gradient Color",H.gradientColor),n("Name Style - Has Gradient",H.hasGradient),n("Name Style - Preset",H.preset),n("Name Style - Pattern",H.pattern),n("Stat Style - Is Custom",te[0]),n("Stat Style - Fill Color",te[1]),n("Stat Style - Has Shadow",te[2]),n("Stat Style - Shadow Color",te[3]),n("Type Style - Is Custom",ne[0]),n("Type Style - Fill Color",ne[1]),n("Type Style - Has Shadow",ne[2]),n("Type Style - Shadow Color",ne[3]),n("Effect Style - Is Custom",S[0]),n("Effect Style - Fill Color",S[1]),n("Effect Style - Has Shadow",S[2]),n("Effect Style - Shadow Color",S[3]),n("Effect Style - Upsize",w.upSize),n("Pendulum Effect Style - Is Custom",J[0]),n("Pendulum Effect Style - Fill Color",J[1]),n("Pendulum Effect Style - Has Shadow",J[2]),n("Pendulum Effect Style - Shadow Color",J[3]),n("Pendulum Effect Style - Upsize",q.upSize),n("Other Style - Is Custom",Y[0]),n("Other Style - Fill Color",Y[1]),n("Other Style - Has Shadow",Y[2]),n("Other Style - Shadow Color",Y[3]),n("External Info (JSON)","{}"===ie?"":ie),("offline"===u||L&&"offline"===g)&&(r="offline-data"),t.push(i.map(Ba).join(","))}return{value:[Na.join(","),t.join("\n")].join("\n"),error:r}})(Za.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&pa.a.error({message:t,description:r})}switch(O){case"xlsx":{const e=Pl.a.read(t,{type:"string"});Pl.a.writeFile(e,`${Za.getState().listName}.xlsx`);break}default:zt(Za.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}u("download")}catch(t){}T(!1)},children:C?Object(b.jsx)(Ll.a,{}):Object(b.jsx)(gn.a,{})})}),Object(b.jsx)(ma.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(b.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(s);e&&!k&&e.click()},children:[Object(b.jsx)("input",{ref:c,type:"file",id:s,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=c.current)||void 0===t?void 0:t.files,{isListDirty:o}=Za.getState(),i=()=>{S((e=>e+1)),F(!1),pa.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let l=!0;if(o&&(l=window.confirm(a["prompt.warning.on-import.label"])),l&&r&&r[0]){F(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=Pl.a.read(e,{codepage:65001}),o=Pl.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),l=Ma(o);l.length>0?(f(l,l[0].id),g(t),S((e=>e+1)),n(l[0]),F(!1)):i()}catch(e){console.error(e),i()}}else S((e=>e+1)),F(!1)}},`upload-${w}`),k?Object(b.jsx)(Ll.a,{}):Object(b.jsx)(Kn.a,{})]})},`${k}`),Object(b.jsx)("div",{className:"manager-button close-button",onClick:()=>x(!1),children:Object(b.jsx)(ga.a,{})})]}),Object(b.jsx)("div",{className:"card-manager-filter",children:Object(b.jsx)(mn.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:R,onPressEnter:e=>h({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${w}`)})]}),visible:j,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:()=>null,onClose:()=>x(!1),width:280,children:Object(b.jsx)(Nl,{language:a,onSelect:N,onDownload:i,onRequestImport:l})})})})),Yl=ba.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,Gl=e=>{let{language:t,children:a,...o}=e;const{isListDirty:n,cardList:i}=Za(Object(io.useShallow)((e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}})));return Object(r.useEffect)((()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return n&&i.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[i.length,n,t]),Object(b.jsxs)(Yl,{...o,children:[a,n&&i.length>1&&Object(b.jsx)("span",{className:"header-warning",children:"\xa0*"})]})};var Ul=a(572),Xl=a(573);const Vl=ba.b.div`
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
        ${fa} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,_l=ba.b.div`
    width: var(--card-width);
    height: var(--card-height);
    margin-bottom: var(--spacing);
    transform: translateX(var(--translate-ratio)) translateY(var(--translate-ratio)) scale(var(--resize-ratio))
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
        .reset-button,
        .lightbox-button {
            display: block;
        }
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
`,ql=ba.b.div`
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
`,Jl=ba.b.div`
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
`,Zl=ba.b.span`
    color: var(--main-danger);
`,Ql=ba.b.div`
    --overlay-size: 51px;
    position: absolute;
    z-index: 101;
    background: var(--main-primary);
    border-color: var(--main-active);
    color: var(--color-heavy);
    padding: var(--spacing);
    line-height: 1;
    font-size: var(--fs-3xl);
    text-align: center;
    width: var(--overlay-size);
    height: var(--overlay-size);
    border-radius: var(--br-lg);
    cursor: pointer;
    box-shadow: var(--bs-1);
    display: none;
    &:hover {
        background: var(--sub-primary);
    }
`,es=Object(ba.b)(Ql)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,ts=Object(ba.b)(Ql)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var as=a(217),rs=a(528),os=a(530),ns=a(540),is=a(543);Object(as.configure)({ignoreTags:[]});const ls={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:ss,width:cs}=s;var ds=function(){var e;const{allowHotkey:t,softMode:a}=ar(Object(io.useShallow)((e=>{let{setting:{allowHotkey:t,reduceMotionColor:a}}=e;return{softMode:a,allowHotkey:t}}))),{isInitiating:o,isLoading:n,language:i,isMetadataReady:l,languageInfo:c,initiate:d,loadDefaultLanguage:u}=Fa(Object(io.useShallow)((e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:o,languageInfo:n,initiate:i,loadDefaultLanguage:l}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:o,languageInfo:n,initiate:i,loadDefaultLanguage:l}}))),[p,m]=Object(r.useState)(!0),[f,h]=Object(r.useState)(""),[g,y]=Object(r.useState)("online"),[v,x]=Object(r.useState)(0),[j,O]=Object(r.useState)(!1),[w,S]=Object(r.useState)(!1),k=Object(r.useRef)(null),F=Object(r.useRef)(null),C=Object(r.useRef)(null),T=Object(r.useRef)(null),R=Object(r.useRef)(null),N=Object(r.useRef)(null),L=Object(r.useRef)(null),E=Object(r.useRef)(null),I=Object(r.useRef)(null),A=Object(r.useRef)(null),B=Object(r.useRef)(null),z=Object(r.useRef)(null),W=Object(r.useRef)(null),D=Object(r.useRef)(null),P=Object(r.useRef)(null),M=Object(r.useRef)(null),H=Object(r.useRef)(null),$=Object(r.useRef)(null),[K]=Object(r.useState)({artworkCanvasRef:F,backgroundCanvasRef:C,exportCanvasRef:T,frameCanvasRef:R,cardIconCanvasRef:N,pendulumScaleCanvasRef:L,pendulumEffectCanvasRef:E,typeCanvasRef:I,effectCanvasRef:A,nameCanvasRef:B,statCanvasRef:z,setIdCanvasRef:W,passwordCanvasRef:D,creatorCanvasRef:P,stickerCanvasRef:M,finishCanvasRef:H,lightboxCanvasRef:$}),Y=Object(r.useRef)(null),G=Object(r.useRef)(null),U=Object(r.useRef)(null),[X,V]=Object(r.useState)(0);Object(r.useEffect)((()=>{d()}),[d]),Object(r.useEffect)((()=>{l&&u()}),[l,u]),Object(r.useEffect)((()=>{["font-family","letter-spacing","--width-label"].forEach((e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=c.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")}))}),[c]),Object(r.useEffect)((()=>{var e;const t=null===(e=T.current)||void 0===e?void 0:e.getContext("2d"),a=tr.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",dr(t)),!1===o&&no.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),o=r?Tt(JSON.parse(r)):null,n=new URLSearchParams(window.location.search).get("data");if(n){var e,t;const{card:a}=Qa(n),r=Tt(a),{artSource:i,backgroundSource:l}=r;if("online"===i&&"online"===l)return Qa(n).card;const s={...r};return"offline"===i&&(s.artData=null!==(e=null===o||void 0===o?void 0:o.artData)&&void 0!==e?e:""),"offline"===l&&(s.backgroundData=null!==(t=null===o||void 0===o?void 0:o.backgroundData)&&void 0!==t?t:""),s}return null!==o&&"2.1.17"===a?o:lt()}catch(a){return console.error(a),lt()}})();a(e),Za.getState().setCardList([e],e.id),m(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),pa.a.error({message:Ta()["error.load.font.tcg"](e)})},inactive:()=>{h(Ta()["error.load.font.all-tcg"]),m(!1)}})}),[o]);const{styleContent:_}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:o,onFontInactive:n,onInactive:i}=e;const{font:l,format:s}=tr(Object(io.useShallow)((e=>({format:e.card.format,font:e.card.nameStyle.font})))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),p=Object(r.useRef)(0);return Object(r.useEffect)((()=>{("ocg"===s||"OCG"===l)&&!1===u.current&&p.current<=3&&!1===t&&(p.current+=1,d("/ygocarder/asset/ocg-font.css"),o(),no.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,i()},fontinactive:n}))}),[s,l,t,a,o,n,i]),{styleContent:c}})({isLanguageInitiating:o,onBeforeLoad:()=>{var e;m(!0);const t=null===(e=T.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",dr(t))},onActive:()=>{m(!1)},onInactive:()=>{h(Ta()["error.load.font.all-ocg"]),m(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),pa.a.error({message:Ta()["error.load.font.ocg"](e)})}}),[q,J]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=document.body.classList;a?e.add("reduced-color-motion"):e.remove("reduced-color-motion")}),[a]);const Z=Object(r.useCallback)((function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!t||O((t=>"boolean"===typeof e?e:!t))}),[t]),Q=Object(r.useRef)(!1),ee=document.getElementById("sentry-bug-report");Object(r.useEffect)((()=>{ee&&i&&!1===Q.current&&!1===ho.f()&&(Q.current=!0,rs.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[os.a(),ns.a(),is.a({colorScheme:"system",autoInject:!1}).attachTo(ee,{formTitle:i["contributor.bug-report.tooltip"],nameLabel:i["contributor.bug-report.name.label"],namePlaceholder:i["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:i["contributor.bug-report.message.label"],messagePlaceholder:i["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:i["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:i["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:i["contributor.bug-report.cancel.label"],submitButtonLabel:i["contributor.bug-report.submit.label"],isRequiredLabel:i["contributor.bug-report.required.label"],successMessageText:i["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))}),[i,ee]);const te=Object(r.useCallback)(((e,t)=>{var a;const{addToList:r,forcePurityCheck:o,writeOnCurrentCard:n}=null!==t&&void 0!==t?t:{},{setCard:i,card:l}=tr.getState(),s=n?{...e,id:l.id}:e;r&&Za.getState().addCard(s),i(s,o),V((e=>e+1)),null===(a=k.current)||void 0===a||a.forceCardData(s),ia()}),[]),ae=Object(r.useCallback)((async function(e){var a;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!t||(null===e||void 0===e||e.preventDefault(),null===(a=U.current)||void 0===a||a.requestImport("replace"))}),[t]),re=Object(r.useCallback)((function(e){var a;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!t||(null===e||void 0===e||e.preventDefault(),null===(a=U.current)||void 0===a||a.requestImport("merge"))}),[t]),oe=Object(r.useCallback)((function(e){var a;let r=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||t)if(null===e||void 0===e||e.preventDefault(),"online"===g&&null!==(a=k.current)&&void 0!==a&&a.isLoading())window.alert(i["error.export.image-loading.message"]);else try{var o;const e=null!==r&&void 0!==r?r:tr.getState().card;null===(o=G.current)||void 0===o||o.setCardData(e)}catch(n){console.error(n),pa.a.error({message:i["error.export.message"],description:i["error.export.description"]})}}),[t,i,g]),ne=Object(r.useCallback)((e=>{const{id:t,...a}=e;oe(void 0,!1,a)}),[oe]),ie=Object(r.useCallback)((function(e){var a;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!t||(null===e||void 0===e||e.preventDefault(),null===(a=Y.current)||void 0===a||a.download())}),[t]),le=Object(r.useMemo)((()=>({IMPORT:e=>ae(e,!0),MERGE:e=>re(e,!0),EXPORT:e=>oe(e,!0),VIEW:()=>Z(!0,!0),DOWNLOAD:e=>ie(e,!0)})),[ie,oe,ae,re,Z]),se=Object(r.useCallback)((()=>{J(!0),alert(i["prompt.download.tainted.message"])}),[i]),ce=Object(r.useCallback)((e=>{"anonymous"===e&&(J(!1),x((e=>e+1))),V((e=>e+1))}),[]),de=Object(r.useCallback)(((e,t)=>{V((e=>e+1)),y(t)}),[]),ue=Object(r.useCallback)((()=>{V((e=>e+1)),J(!0)}),[]),pe=Object(r.useCallback)((e=>{S(e)}),[]),me=n||p;return Object(b.jsx)(as.HotKeys,{keyMap:ls,handlers:le,children:Object(b.jsxs)("div",{id:"app",onDrop:()=>{},className:`language-${c.codeName} manager-${w?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:ca()?"-webkit-fill-available":"100vh","--card-height":`${s.height}px`,"--card-width":`${s.width}px`},children:[_&&Object(b.jsx)("link",{rel:"stylesheet",type:"text/css",href:_}),Object(b.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[me&&Object(b.jsx)(ql,{className:"app-loading",children:f.length>0?Object(b.jsx)(Zl,{children:f}):null!==(e=c.initialMessage)&&void 0!==e?e:""}),Object(b.jsxs)("div",{className:"card-preview-panel "+(q?"export-tainted":"export-normal"),children:[Object(b.jsxs)(Vl,{className:"data-button-panel",children:[Object(b.jsxs)("div",{className:"imexport",children:[Object(b.jsx)($n,{ref:G,tainted:q,artworkCanvas:F.current,onRequireExportData:oe,onRequireDownload:()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.download()},onClose:ia}),Object(b.jsx)("div",{}),Object(b.jsx)(Gn,{ref:U,onImport:te,onClose:ia,allowHotkey:t,language:i})]}),Object(b.jsx)(uo,{language:i}),Object(b.jsx)(En,{ref:Y,canvasMap:K,imageChangeCount:X,isTainted:q,isInitializing:p,onDownloadError:se}),q&&Object(b.jsx)("div",{id:"save-button-tainted",className:"save-button-container",children:Object(b.jsxs)("span",{children:[i["alert.download.tainted-first-line"],Object(b.jsx)("br",{}),i["alert.download.tainted-second-line"]," ",Object(b.jsx)(Jo,{})]})})]}),Object(b.jsx)("div",{className:"card-canvas-container",children:Object(b.jsxs)(_l,{className:"card-canvas-group",children:[Object(b.jsx)(ma.a,{title:i["button.reset.tooltip"],children:Object(b.jsx)(ts,{className:"reset-button",onClick:()=>{if(window.confirm(i["prompt.reset.message"])){var e;const{setCard:t,card:a}=tr.getState(),r={id:a.id,...it()},o="tcg"===a.format?r:va(r,"ocg");t(o,!0),V((e=>e+1)),null===(e=k.current)||void 0===e||e.forceCardData(o)}},children:Object(b.jsx)(Ul.a,{})})}),Object(b.jsx)(ma.a,{title:Object(b.jsxs)("div",{className:"center",children:[i["button.full-size.label"],t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(b.jsx)(es,{className:"lightbox-button",onClick:()=>Z(),children:Object(b.jsx)(Xl.a,{})})}),Object(b.jsx)("canvas",{id:"export-canvas",ref:T,width:cs,height:ss},v+.1),Object(b.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(b.jsx)("canvas",{id:"frameCanvas",ref:R,width:cs,height:ss},v),Object(b.jsx)("canvas",{id:"nameCanvas",ref:B,width:cs,height:148}),Object(b.jsx)("canvas",{id:"cardIconCanvas",ref:N,width:cs,height:222}),Object(b.jsx)("canvas",{id:"pendulumScaleCanvas",ref:L,width:cs,height:889}),Object(b.jsx)("canvas",{id:"pendulumEffectCanvas",ref:E,width:cs,height:889}),Object(b.jsx)("canvas",{id:"typeCanvas",ref:I,width:cs,height:1037}),Object(b.jsx)("canvas",{id:"effectCanvas",ref:A,width:cs,height:1111}),Object(b.jsx)("canvas",{id:"statCanvas",ref:z,width:cs,height:ss}),Object(b.jsx)("canvas",{id:"setIdCanvas",ref:W,width:cs,height:ss}),Object(b.jsx)("canvas",{id:"passwordCanvas",ref:D,width:cs,height:ss}),Object(b.jsx)("canvas",{id:"creatorCanvas",ref:P,width:cs,height:ss}),Object(b.jsx)("canvas",{id:"stickerCanvas",ref:M,width:cs,height:ss}),Object(b.jsx)("canvas",{id:"finishCanvas",ref:H,width:cs,height:ss}),Object(b.jsx)("canvas",{className:"crop-canvas",ref:F}),Object(b.jsx)("canvas",{className:"crop-canvas",ref:C})]})})]}),!1===me&&Object(b.jsx)(hl,{ref:k,artworkCanvas:F.current,backgroundCanvas:C.current,onSourceLoaded:ce,onCropChange:de,onTainted:ue})]}),Object(b.jsx)(Kl,{language:i,onVisibleChange:pe,onDownload:ne,onSelect:te,onRequestImport:()=>{var e;null===(e=U.current)||void 0===e||e.requestImport("new")}}),Object(b.jsx)(ua.a,{width:`${s.width+30}px`,wrapClassName:"card-lightbox-overlay",visible:j,forceRender:!0,onCancel:()=>O(!1),footer:null,children:Object(b.jsx)("canvas",{id:"lightbox-canvas",ref:$,width:cs,height:ss},v+.1)}),Object(b.jsxs)(Jl,{className:"by-me",children:["Made by Lauqerm ",Object(b.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var us=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,575)).then((t=>{let{getCLS:a,getFID:r,getFCP:o,getLCP:n,getTTFB:i}=t;a(e),r(e),o(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(ds,{})}),document.getElementById("root")),us()}},[[514,1,2]]]);
//# sourceMappingURL=main.d36ade0f.chunk.js.map