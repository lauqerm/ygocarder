(this.webpackJsonpygocarder=this.webpackJsonpygocarder||[]).push([[0],{335:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},435:function(e,t,a){},573:function(e,t,a){},579:function(e,t,a){},580:function(e,t,a){},581:function(e,t,a){},583:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(50),l=a.n(i);a(335),a(336),a(337),a(338),a(339),a(340);const o=e=>[{value:"fit",label:null===e||void 0===e?void 0:e.fit},{value:"full",label:null===e||void 0===e?void 0:e.full},{value:"frame",label:null===e||void 0===e?void 0:e.frame}],s={width:813,height:1185,maximumScale:2,topToPendulumStructure:210,topToPendulumStructureFrame:185,topToArtFrame:213,pendulumStructureHeight:912,pendulumIconFrameWidth:813,pendulumIconFrameHeight:100,pendulumFrameWidth:753,pendulumFrameHeight:955,leftToPendulumStructure:56,cardBorder:28,topToEffectBox:885,leftToEffectBox:54,effectBoxWidth:705,effectBoxHeight:231,finishTypeCardWidth:702,finishTypeCardHeight:200,stickerSize:52,attributeSize:77,attributeY:55,attributeX:678,stickerX:739.1438,stickerY:1110.938,iconWidth:43,iconHeight:44},c="#404040",d=()=>({body:100,pendulum:100,text:100,name:100,baseFill:c,artBorder:!0,nameBorder:!0,boundless:!1}),u={normal:{artFinishX:100,artFinishY:219,artWidth:614,artX:100,artY:219,ratio:1,backgroundRatio:1,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"normal"},pendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.325,backgroundRatio:1.325,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"pendulum"},pendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.236,backgroundRatio:1.236,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"pendulumSmall"},extendedCard:{artFinishX:100,artFinishY:219,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"extendedCard"},extendedPendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"extendedPendulum"},extendedPendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:.775,backgroundRatio:.775,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.236,type:"extendedPendulumSmall"},truePendulum:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulum"},truePendulumSmall:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1.055,backgroundRatio:1.055,artFrameWidth:702,artFrameHeight:568,artFrameY:213,artFrameX:56,artRatio:1.236,type:"truePendulumSmall"},truePendulumLarge:{artFinishX:56,artFinishY:213,artWidth:702,artX:56,artY:213,ratio:1,backgroundRatio:1,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"truePendulumLarge"},fullCard:{artFinishX:100,artFinishY:219,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:614,artFrameHeight:614,artFrameY:219,artFrameX:100,artRatio:1,type:"fullCard"},fullPendulum:{artFinishX:56,artFinishY:213,artWidth:758,artX:28,artY:28,ratio:.67,backgroundRatio:.67,artFrameWidth:702,artFrameHeight:530,artFrameY:213,artFrameX:56,artRatio:1.325,type:"fullPendulum"}},m=(e,t,a,r)=>{const{boundless:n,body:i,pendulum:l,text:o}={...d(),...t};if("full"===a)return u.fullCard;let s="normal";"fit"!==a&&n||i<100?s=e?"fullPendulum":"fullCard":e?o<100?s="small"===r?"extendedPendulumSmall":"extendedPendulum":l<100?("large"===r&&(s="truePendulumLarge"),"small"===r&&(s="truePendulumSmall"),"medium"===r&&(s="truePendulum")):s="small"===r?"pendulumSmall":"pendulum":s=o<100?"extendedCard":"normal";const c=u[s];return{...c,backgroundRatio:"frame"===a?.686:c.backgroundRatio}},b=[{blendMode:"overlay",opacity:1}],p=[{blendMode:"overlay",opacity:.65},{blendMode:"multiply",opacity:.55}],h={type1:{value:"type1",label:"1",partInstructionMap:{},pendulumSubstituteMap:{}},type2:{value:"type2",label:"2",partInstructionMap:{},pendulumSubstituteMap:{}},type3:{value:"type3",label:"3",partInstructionMap:{"card-border":b,"art-overlay":b,"art-border":b,"art-border-pendulum":b,"border-pendulum":b,attribute:b,frame:b},pendulumSubstituteMap:{}},type4:{value:"type4",label:"4",partInstructionMap:{},pendulumSubstituteMap:{}},type5:{value:"type5",label:"5",partInstructionMap:{},pendulumSubstituteMap:{}},type6:{value:"type6",label:"6",partInstructionMap:{},pendulumSubstituteMap:{}},type7:{value:"type7",label:"7",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.175},{blendMode:"color-dodge",opacity:.125}]},pendulumSubstituteMap:{}},type8:{value:"type8",label:"8",partInstructionMap:{"card-border":p,"art-border":p,"art-border-pendulum":p,"border-pendulum":p,frame:p,"frame-background":p,name:p,star:p},pendulumSubstituteMap:{}},type9:{value:"type9",label:"9",partInstructionMap:{"total-overlay":[{blendMode:"screen",opacity:.45}]},pendulumSubstituteMap:{}},type10:{value:"type10",label:"10",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type11:{value:"type11",label:"11",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}},type12:{value:"type12",label:"12",partInstructionMap:{"total-overlay":[{blendMode:"source-over",opacity:.45}]},pendulumSubstituteMap:{}},type13:{value:"type13",label:"13",partInstructionMap:{"total-overlay":[]},pendulumSubstituteMap:{}}},g={type1:{value:"type1",label:"1",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type2:{value:"type2",label:"2",partInstructionMap:{art:[{opacity:.08,blendMode:"darken"},{opacity:.28,blendMode:"color-dodge"},{opacity:.48,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type3:{value:"type3",label:"3",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type4:{value:"type4",label:"4",partInstructionMap:{art:[{opacity:.31,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type5:{value:"type5",label:"5",partInstructionMap:{art:[{opacity:.19,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type6:{value:"type6",label:"6",partInstructionMap:{art:[{opacity:.25,blendMode:"color-dodge"},{opacity:.6,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type7:{value:"type7",label:"7",partInstructionMap:{art:[{}]},pendulumSubstituteMap:{small:"-pendulum-small",medium:"-pendulum-medium",large:"-pendulum-medium"}},type8:{value:"type8",label:"8",partInstructionMap:{art:[{opacity:.66,blendMode:"color-dodge"},{opacity:.64,blendMode:"multiply"}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}},type9:{value:"type9",label:"9",partInstructionMap:{art:[{blendMode:"darken",opacity:1},{blendMode:"multiply",opacity:1},{blendMode:"overlay",opacity:1}]},pendulumSubstituteMap:{small:"",medium:"-pendulum-medium",large:"-pendulum-medium"}}},f={art:{key:"art",labelKey:"input.art-finish.label"},background:{key:"background",labelKey:"input.background.label"},attribute:{key:"attribute",labelKey:"input.attribute.label"},icon:{key:"icon",labelKey:"input.icon-type.icon.label"},sticker:{key:"sticker",labelKey:"input.sticker.label"}},v={normal:{name:"normal",color:"#747b95",isOption:!1},gold:{name:"gold",color:"#cfa65f",isOption:!0},platinum:{name:"platinum",color:"#b1b1b1",isOption:!0}},y=e=>[{label:null===e||void 0===e?void 0:e.normal,...v.normal},{label:null===e||void 0===e?void 0:e.gold,...v.gold},{label:null===e||void 0===e?void 0:e.platinum,...v.platinum}],x={topLeftFrame:0,topRightFrame:1,bottomLeftFrame:2,bottomRightFrame:3,effectBackground:4,pendulumEffectBackground:5,foil:6};var j=a(615),O=a(1);const w="NONE",k=[{name:w,nameKey:"input.attribute.none",color:"#000000",isCreative:!1,isOption:!1},{name:"DARK",nameKey:"input.attribute.dark",label:"Dark",color:"#b41dda",isCreative:!1,isOption:!0},{name:"EARTH",nameKey:"input.attribute.earth",label:"Earth",color:"#8d8e8e",isCreative:!1,isOption:!0},{name:"FIRE",nameKey:"input.attribute.fire",label:"Fire",color:"#e51b23",isCreative:!1,isOption:!0},{name:"LIGHT",nameKey:"input.attribute.light",label:"Light",color:"#bfae32",isCreative:!1,isOption:!0},{name:"WATER",nameKey:"input.attribute.water",label:"Water",color:"#008ecd",isCreative:!1,isOption:!0},{name:"WIND",nameKey:"input.attribute.wind",label:"Wind",color:"#28ab35",isCreative:!1,isOption:!0},{name:"DIVINE",nameKey:"input.attribute.divine",label:"Divine",color:"#ef6300",isCreative:!1,isOption:!0},{name:"SPELL",nameKey:"input.attribute.spell",label:"Spell",color:"#1b8f83",isCreative:!1,isOption:!0},{name:"TRAP",nameKey:"input.attribute.trap",label:"Trap",color:"#c32a8c",isCreative:!1,isOption:!0}],S=[{name:"LAUGH",nameKey:"input.attribute.laugh",label:"Laugh",color:"#f78f27",isCreative:!0,isOption:!0},{name:"MAGIC",nameKey:"input.attribute.magic",label:"Laugh",color:"#1b8f83",isCreative:!0,isOption:!0},{name:"BOSS-1",nameKey:"input.attribute.boss-1",label:"Boss 1",color:"#9b325d",isCreative:!0,isOption:!0},{name:"BOSS-2",nameKey:"input.attribute.boss-2",label:"Boss 2",color:"#942a56",isCreative:!0,isOption:!0},{name:"BOSS-3",nameKey:"input.attribute.boss-3",label:"Boss 3",color:"#86214b",isCreative:!0,isOption:!0},{name:"BOSS-START",nameKey:"input.attribute.boss-start",label:"Boss Start",color:"#a13864",isCreative:!0,isOption:!0}],F={jp:{key:"jp",category:"ocg",fileKey:"ocg"},ch:{key:"ch",category:"ocg",fileKey:"ch"},en:{key:"en",category:"tcg",fileKey:"tcg"},fr:{key:"fr",category:"tcg",fileKey:"fr"},de:{key:"de",category:"tcg",fileKey:"de"},it:{key:"it",category:"tcg",fileKey:"it"},sp:{key:"sp",category:"tcg",fileKey:"sp"}},C={tcg:F.en.key,ocg:F.jp.key},L="NO ICON",N=[{label:Object(O.jsx)(j.a,{}),value:L,nameKey:"input.icon.none",isOption:!1},{label:"Field",value:"FIELD",nameKey:"input.icon.field",isOption:!0},{label:"Continuous",value:"CONTINUOUS",nameKey:"input.icon.continuous",isOption:!0},{label:"Quick-Play",value:"QUICK-PLAY",nameKey:"input.icon.quick-play",isOption:!0},{label:"Ritual",value:"RITUAL",nameKey:"input.icon.ritual",isOption:!0},{label:"Equip",value:"EQUIP",nameKey:"input.icon.equip",isOption:!0},{label:"Counter",value:"COUNTER",nameKey:"input.icon.counter",isOption:!0},{label:"Normal",value:"NORMAL",nameKey:"input.icon.normal",isOption:!0}],T="no-sticker",R=[{value:T,isOption:!1},{value:"gold",isOption:!0},{value:"silver",isOption:!0},{value:"beta",isOption:!0},{value:"holo5",isOption:!0},{value:"holo4",isOption:!0},{value:"holo3",isOption:!0},{value:"holo2",isOption:!0},{value:"holo1",isOption:!0},{value:"limited",isOption:!0},{value:"unlimited",isOption:!0}],I={auto:{value:"auto",labelKey:"input.icon-type.auto.label",fullLabelKey:"input.icon-type.auto.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1},custom:{value:"custom",labelKey:"input.icon-type.custom.label",fullLabelKey:"input.icon-type.custom.full.label",icon:null,isOption:!1,isMixable:!1,showIcon:!1},st:{value:"st",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon-type.icon.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"s/t-icon",src:"/ygocarder/asset/image/subfamily/subfamily-icon-list.png"}),isOption:!0,isMixable:!1,showIcon:!1},level:{value:"level",labelKey:"input.icon-type.level.label",fullLabelKey:"input.icon-type.level.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level.png"}),isOption:!0,isMixable:!0,showIcon:!1},"negative-level":{value:"negative-level",labelKey:"input.icon-type.negative-level.label",fullLabelKey:"input.icon-type.negative-level.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"negative-level-icon",src:"/ygocarder/asset/image/subfamily/subfamily-negative-level.png"}),isOption:!0,isMixable:!0,showIcon:!1},rank:{value:"rank",labelKey:"input.icon-type.rank.label",fullLabelKey:"input.icon-type.rank.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1},"level-rank":{value:"level-rank",labelKey:"input.icon-type.level-rank.label",fullLabelKey:"input.icon-type.level-rank.full.label",icon:Object(O.jsx)("img",{className:"icon-image",alt:"level-rank-icon",src:"/ygocarder/asset/image/subfamily/subfamily-level-rank.png"}),isOption:!0,isMixable:!0,showIcon:!1}},B=Object.values(I),z={dark:{value:"dark",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.dark",icon:Object(O.jsx)("img",{className:"icon-image",alt:"dark-icon",src:"/ygocarder/asset/image/subfamily/subfamily-dark.png"}),isOption:!0,isMixable:!0,showIcon:!0},earth:{value:"earth",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.earth",icon:Object(O.jsx)("img",{className:"icon-image",alt:"earth-icon",src:"/ygocarder/asset/image/subfamily/subfamily-earth.png"}),isOption:!0,isMixable:!0,showIcon:!0},fire:{value:"fire",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.fire",icon:Object(O.jsx)("img",{className:"icon-image",alt:"fire-icon",src:"/ygocarder/asset/image/subfamily/subfamily-fire.png"}),isOption:!0,isMixable:!0,showIcon:!0},light:{value:"light",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.light",icon:Object(O.jsx)("img",{className:"icon-image",alt:"light-icon",src:"/ygocarder/asset/image/subfamily/subfamily-light.png"}),isOption:!0,isMixable:!0,showIcon:!0},water:{value:"water",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.water",icon:Object(O.jsx)("img",{className:"icon-image",alt:"water-icon",src:"/ygocarder/asset/image/subfamily/subfamily-water.png"}),isOption:!0,isMixable:!0,showIcon:!0},wind:{value:"wind",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.wind",icon:Object(O.jsx)("img",{className:"icon-image",alt:"wind-icon",src:"/ygocarder/asset/image/subfamily/subfamily-wind.png"}),isOption:!0,isMixable:!0,showIcon:!0},divine:{value:"divine",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.divine",icon:Object(O.jsx)("img",{className:"icon-image",alt:"divine-icon",src:"/ygocarder/asset/image/subfamily/subfamily-divine.png"}),isOption:!0,isMixable:!0,showIcon:!0},spell:{value:"spell",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.spell",icon:Object(O.jsx)("img",{className:"icon-image",alt:"spell-icon",src:"/ygocarder/asset/image/subfamily/subfamily-spell.png"}),isOption:!0,isMixable:!0,showIcon:!0},trap:{value:"trap",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.attribute.trap",icon:Object(O.jsx)("img",{className:"icon-image",alt:"trap-icon",src:"/ygocarder/asset/image/subfamily/subfamily-trap.png"}),isOption:!0,isMixable:!0,showIcon:!0}},E=Object.values(z),D={"continuous-l":{value:"continuous-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.continuous",icon:Object(O.jsx)("img",{className:"icon-image",alt:"continuous-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-continuous-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"counter-l":{value:"counter-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.counter",icon:Object(O.jsx)("img",{className:"icon-image",alt:"counter-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-counter-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"equip-l":{value:"equip-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.equip",icon:Object(O.jsx)("img",{className:"icon-image",alt:"equip-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-equip-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"field-l":{value:"field-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.field",icon:Object(O.jsx)("img",{className:"icon-image",alt:"field-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-field-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"quick-play-l":{value:"quick-play-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.quick-play",icon:Object(O.jsx)("img",{className:"icon-image",alt:"quick-play-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-quick-play-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"ritual-l":{value:"ritual-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.ritual",icon:Object(O.jsx)("img",{className:"icon-image",alt:"ritual-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-ritual-l.png"}),isOption:!0,isMixable:!0,showIcon:!0},"normal-l":{value:"normal-l",labelKey:"input.icon-type.icon.label",fullLabelKey:"input.icon.normal",icon:Object(O.jsx)("img",{className:"icon-image",alt:"normal-large-icon",src:"/ygocarder/asset/image/subfamily/subfamily-normal-l.png"}),isOption:!0,isMixable:!0,showIcon:!0}},M=Object.values(D),W={...I,...z,...D},A=13,H="Auto",P=()=>({font:H,fillStyle:"#000000",headTextFillStyle:"#000000",shadowColor:"#000000",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:0,hasShadow:!1,lineColor:"#000000",lineWidth:0,lineOffsetY:0,lineOffsetX:0,hasOutline:!1,gradientAngle:0,gradientColor:"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf",hasGradient:!1,embossPitch:90,embossYaw:90,embossThickness:0,hasEmboss:!1,preset:"commonB",pattern:"none"}),$=e=>({hasGradient:!1,hasOutline:!1,hasShadow:!1,hasEmboss:!1,pattern:"none",...e}),K={commonB:{key:"commonB",label:"Common (Black)",image:"asset/image/other/name-common-b.png",value:$({preset:"commonB",fillStyle:"#000000"})},commonW:{key:"commonW",label:"Common (White)",image:"asset/image/other/name-common-w.png",value:$({preset:"commonW",fillStyle:"#ffffff"})},skillDefault:{key:"skillDefault",label:"Skill (Default)",image:"asset/image/other/name-skill-default.png",value:$({preset:"skillDefault",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",hasOutline:!0})},skillArial:{key:"skillArial",label:"Skill (Arial)",image:"asset/image/other/name-skill-arial.png",value:$({preset:"skillArial",font:"Arial",fillStyle:"#ffffff",lineWidth:6,lineColor:"#000",lineOffsetX:1,hasOutline:!0})},rare:{key:"rare",label:"Rare",image:"asset/image/other/name-rare.png",value:$({preset:"rare",fillStyle:"#cfc6de"})},secretGradient:{key:"secretGradient",label:"Secret (Gradient)",image:"asset/image/other/name-secret-gradient.png",value:$({preset:"secretGradient",gradientAngle:180,gradientColor:"0.000|#7a71a6,1.000|#a8c1e5",hasGradient:!0})},secret:{key:"secret",label:"Secret",image:"asset/image/other/name-secret.png",value:$({preset:"secret",fillStyle:"#8a8381"})},platinum2:{key:"platinum2",label:"Platinum",image:"asset/image/other/name-platinum.png",value:$({preset:"platinum2",fillStyle:"#a49f9e"})},ultra:{key:"ultra",label:"Ultra",image:"asset/image/other/name-ultra.png",value:$({preset:"ultra",fillStyle:"#dbb473"})},ultra2:{key:"ultra2",label:"Ultra (Type 2)",image:"asset/image/other/name-ultra-2.png",value:$({preset:"ultra2",fillStyle:"#fee002"})},platinum:{key:"platinum",label:"Foil Platinum",image:"asset/image/other/name-foil-platinum.png",value:$({preset:"platinum",fillStyle:"#CCCCCC",shadowColor:"#FFFFFF",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},gold:{key:"gold",label:"Foil Gold",image:"asset/image/other/name-foil-gold.png",value:$({preset:"gold",fillStyle:"#b88c43",shadowColor:"#FCC400",shadowOffsetY:1,shadowOffsetX:0,shadowBlur:1,hasShadow:!0})},animeRed:{key:"animeRed",label:"Anime (Type Red)",image:"asset/image/other/name-anime-red.png",value:$({preset:"animeRed",gradientAngle:180,gradientColor:"0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654",hasGradient:!0,hasOutline:!0,hasShadow:!0,lineColor:"#333333",lineOffsetX:1,lineOffsetY:0,lineWidth:3,shadowBlur:2,shadowColor:"#383838",shadowOffsetX:2,shadowOffsetY:3})},animeSilver:{key:"animeSilver",label:"Anime (Type Silver)",image:"asset/image/other/name-anime-silver.png",value:$({preset:"animeSilver",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6",hasGradient:!0})},animeGold:{key:"animeGold",label:"Anime (Type Gold)",image:"asset/image/other/name-anime-gold.png",value:$({preset:"animeGold",shadowColor:"#383838",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#333333",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23",hasGradient:!0})},promo:{key:"promo",label:"Promo",image:"asset/image/other/name-promo.png",value:$({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0})},embossGold:{key:"embossGold",label:"Embossed Gold",image:"asset/image/other/name-emboss-gold.png",value:$({preset:"embossGold",fillStyle:"#d09b0e",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#333333",shadowOffsetX:-1,shadowOffsetY:1})},embossPlatinum:{key:"embossPlatinum",label:"Embossed Platinum",image:"asset/image/other/name-emboss-platinum.png",value:$({preset:"embossPlatinum",fillStyle:"#c0c0c0",hasEmboss:!0,embossPitch:90,embossYaw:90,hasShadow:!0,shadowBlur:2,shadowColor:"#4d4d4d",shadowOffsetX:-1,shadowOffsetY:1})}},U=Object.values(K),Y={none:{key:"none",patternImage:"",blendMode:"source-atop",isOption:!1},type1:{key:"type1",patternImage:"finish-name-type1",blendMode:"source-atop",isOption:!0},type2:{key:"type2",patternImage:"finish-name-type2",blendMode:"source-atop",isOption:!0},type3:{key:"type3",patternImage:"finish-name-type3",blendMode:"source-atop",isOption:!0},type4:{key:"type4",patternImage:"finish-name-type4",blendMode:"source-atop",isOption:!0},type5:{key:"type5",patternImage:"finish-name-type5",blendMode:"multiply",overrideFill:!0,isOption:!0},type6:{key:"type6",patternImage:"finish-name-type6",blendMode:"source-atop",isOption:!0},type7:{key:"type7",patternImage:"finish-name-type7",blendMode:"lighter",overrideFill:!0,isOption:!0},type8:{key:"type8",patternImage:"finish-name-type8",blendMode:"source-atop",isOption:!0},type9:{key:"type9",patternImage:"finish-name-type9",blendMode:"source-atop",isOption:!0}},G=Object.values(Y);var V=a(607);const X={small:{key:"small",frameType:"pendulum",labelKey:"input.pendulum-size.small.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:95,pendulumBoxOffsetY:50,numberBlueX:84.4,numberRedX:728,numberY:816,artlessFrameY:594,fontSize:56.5},medium:{key:"medium",frameType:"pendulum",labelKey:"input.pendulum-size.medium.label",effectBoxOffsetY:0,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:147,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:792,artlessFrameY:553,fontSize:56.5},large:{key:"large",frameType:"text",labelKey:"input.pendulum-size.large.label",effectBoxOffsetY:27,pendulumBoxX:55,pendulumBoxY:738,pendulumBoxWidth:705,pendulumBoxHeight:180,pendulumBoxOffsetY:0,numberBlueX:84.4,numberRedX:728,numberY:808,artlessFrameY:553,fontSize:56.5}},q=Object.values(X),J={small:{"speed-skill":{exceptionPendulumBoxOffsetHeight:-13}},medium:{},large:{"speed-skill":{exceptionPendulumBoxOffsetHeight:15},zarc:{exceptionFrameType:"pendulum-large"}}},_="medium",Q=[{index:0,labelKey:"input.flag.mix-def-link",type:"checkbox"},{index:1,labelKey:"input.flag.link-rating-behavior",type:"link-rating-behavior"}],Z=0,ee=1,te=Q.length,ae={veryStrict:{1:600,2:620,3:640},strict:{1:645,2:665,3:685},loose:{1:700,2:710,3:720},veryLoose:{1:740,2:770,3:800},relaxed:{1:850,2:900,3:950}},re={tcg:[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:211}],"tcg-stat":[{trueWidth:684,trueBaseline:890.23,trueEdge:64.8,trueHeightCap:182}],"tcg-type-stat":[{trueWidth:684,trueBaseline:920.8,trueEdge:64.5,trueHeightCap:152}],"tcg-type":[{trueWidth:684,trueBaseline:921.8,trueEdge:64.5,trueHeightCap:182}],ocg:[{trueWidth:684,trueBaseline:895.23,trueEdge:64.8,trueHeightCap:211}],"ocg-stat":[{trueWidth:684,trueBaseline:891.23,trueEdge:64.8,trueHeightCap:182}],"ocg-type-stat":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:152}],"ocg-type":[{trueWidth:684,trueBaseline:918.5,trueEdge:64.5,trueHeightCap:182}],"tcg-pendulumLarge":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:173}],"tcg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:920.73,trueEdge:64.8,trueHeightCap:144}],"tcg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:953.5,trueEdge:64.5,trueHeightCap:118}],"tcg-pendulumLarge-type":[{trueWidth:684,trueBaseline:954.5,trueEdge:64.5,trueHeightCap:144}],"ocg-pendulumLarge":[{trueWidth:684,trueBaseline:923.23,trueEdge:64.8,trueHeightCap:173}],"ocg-pendulumLarge-stat":[{trueWidth:684,trueBaseline:921.23,trueEdge:64.8,trueHeightCap:144}],"ocg-pendulumLarge-type-stat":[{trueWidth:684,trueBaseline:951.5,trueEdge:64.5,trueHeightCap:118}],"ocg-pendulumLarge-type":[{trueWidth:684,trueBaseline:948.5,trueEdge:64.5,trueHeightCap:144}]},ne=64.44,ie={normal:{small:[{trueWidth:555.47,trueBaseline:789.65,trueEdge:128.94,trueHeightCap:80}],medium:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94,trueHeightCap:122.6}],large:[{trueWidth:555.47,trueBaseline:746.29,trueEdge:128.94,trueHeightCap:155.8}]},scaleless:{small:[{trueWidth:684.35,trueBaseline:789.65,trueEdge:64.5,trueHeightCap:79.8}],medium:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:126.1}],large:[{trueWidth:684.35,trueBaseline:746.29,trueEdge:64.5,trueHeightCap:155.5}]}},le={tcg:{smaller:{trueBaseline:919,trueEdge:62.5,trueWidth:684.5},normal:{trueBaseline:920,trueEdge:62.5,trueWidth:684.5},large:{trueBaseline:187.5,trueEdge:732,edgeAlignment:"right",trueWidth:648.5},highPendulumNormal:{trueBaseline:950.5,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949.5,trueEdge:62.5,trueWidth:684.5}},ocg:{smaller:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},normal:{trueBaseline:917,trueEdge:63.7,trueWidth:684.5},large:{trueBaseline:190.5,trueEdge:728,edgeAlignment:"right",trueWidth:642.5},highPendulumNormal:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5},highPendulumSmaller:{trueBaseline:949,trueEdge:62.5,trueWidth:684.5}}},oe={ocg:{trueBaseline:1146.5,trueEdge:736,trueWidth:435},tcg:{trueBaseline:1149.5,trueEdge:733,trueWidth:380}},se={ocg:{trueBaseline:1148.931,trueEdge:37.031,trueWidth:258},tcg:{trueBaseline:1149.431,trueEdge:37.031,trueWidth:311}},ce=[{shortForm:"\u7279\u6b8a\u53ec\u559a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u30ab\u30fc\u30c9",rubyForm:"{\u30ab\u30fc\u30c9}"},{shortForm:"\u30c7\u30e5\u30a8\u30eb",rubyForm:"{\u30c7\u30e5\u30a8\u30eb}"},{shortForm:"\u30de\u30c3\u30c1",rubyForm:"{\u30de\u30c3\u30c1}"},{shortForm:"\u30bf\u30fc\u30f3",rubyForm:"{\u30bf\u30fc\u30f3}"},{shortForm:"\u30d7\u30ec\u30a4\u30e4\u30fc",rubyForm:"{\u30d7\u30ec\u30a4\u30e4\u30fc}"},{shortForm:"\u81ea\u5206",rubyForm:"{\u81ea|\u3058}{\u5206|\u3076\u3093}"},{shortForm:"\u76f8\u624b",rubyForm:"{\u76f8|\u3042\u3044}{\u624b|\u3066}"},{shortForm:"LP",regexForm:"(?<![a-zA-Z_])LP(?![a-zA-Z_])",rubyForm:"{LP|\u30e9\u30a4\u30d5\u30dd\u30a4\u30f3\u30c8}"},{shortForm:"\u30c7\u30c3\u30ad",rubyForm:"{\u30c7\u30c3\u30ad}"},{shortForm:"\u30e1\u30a4\u30f3",rubyForm:"{\u30e1\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30c9",rubyForm:"{\u30b5\u30a4\u30c9}"},{shortForm:"EX",regexForm:"(?<!\\w)EX(?!\\w)",rubyForm:"{EX|\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a3\u30fc\u30eb\u30c9",rubyForm:"{\u30d5\u30a3\u30fc\u30eb\u30c9}"},{shortForm:"\u5893\u5730",rubyForm:"{\u5893|\u307c}{\u5730|\u3061}"},{shortForm:"\u624b\u672d",rubyForm:"{\u624b|\u3066}{\u672d|\u3075\u3060}"},{shortForm:"\u30be\u30fc\u30f3",rubyForm:"{\u30be\u30fc\u30f3}"},{shortForm:"\u30e2\u30f3\u30b9\u30bf\u30fc",rubyForm:"{\u30e2\u30f3\u30b9\u30bf\u30fc}"},{shortForm:"\u7e26\u5217",rubyForm:"{\u7e26|\u305f\u3066}{\u5217|\u308c\u3064}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc}"},{shortForm:"\u6301\u3061\u4e3b",rubyForm:"{\u6301|\u3082}\u3061{\u4e3b|\u306c\u3057}"},{shortForm:"\u30c0\u30e1\u30fc\u30b8",rubyForm:"{\u30c0\u30e1\u30fc\u30b8}"},{shortForm:"\u6226\u95d8",rubyForm:"{\u6226|\u305b\u3093}{\u95d8|\u3068\u3046}"},{shortForm:"\u30b9\u30da\u30eb",rubyForm:"{\u30b9\u30da\u30eb}"},{shortForm:"\u30b9\u30d4\u30fc\u30c9",rubyForm:"{\u30b9\u30d4\u30fc\u30c9}"},{shortForm:"\u30c1\u30a7\u30fc\u30f3",rubyForm:"{\u30c1\u30a7\u30fc\u30f3}"},{shortForm:"\u30d6\u30ed\u30c3\u30af",rubyForm:"{\u30d6\u30ed\u30c3\u30af}"},{shortForm:"\u76f4\u63a5",rubyForm:"{\u76f4|\u3061\u3087\u304f}{\u63a5|\u305b\u3064}"},{shortForm:"\u7d20\u6750",rubyForm:"{\u7d20|\u305d}{\u6750|\u3056\u3044}"},{shortForm:"\u540d",rubyForm:"{\u540d|\u3081\u3044}"},{shortForm:"\u6761\u4ef6",rubyForm:"{\u6761|\u3058\u3087\u3046}{\u4ef6|\u3051\u3093}"},{shortForm:"\u30b3\u30a4\u30f3",rubyForm:"{\u30b3\u30a4\u30f3}"},{shortForm:"\u30b5\u30a4\u30b3\u30ed",rubyForm:"{\u30b5\u30a4\u30b3\u30ed}"},{shortForm:"\u5143",rubyForm:"{\u5143|\u3082\u3068}"},{shortForm:"\u5148",rubyForm:"{\u5148|\u3055\u304d}"},{shortForm:"\u72b6\u614b",rubyForm:"{\u72b6|\u3058\u3087\u3046}{\u614b|\u305f\u3044}"},{shortForm:"\u76f8\u4e92",rubyForm:"{\u76f8|\u305d\u3046}{\u4e92|\u3054}"},{shortForm:"\u30a8\u30af\u30b9\u30c8\u30e9",rubyForm:"{\u30a8\u30af\u30b9\u30c8\u30e9}"},{shortForm:"\u30d5\u30a7\u30a4\u30ba",rubyForm:"{\u30d5\u30a7\u30a4\u30ba}"},{shortForm:"\u30c9\u30ed\u30fc",rubyForm:"{\u30c9\u30ed\u30fc}"},{shortForm:"\u30b9\u30bf\u30f3\u30d0\u30a4",rubyForm:"{\u30b9\u30bf\u30f3\u30d0\u30a4}"},{shortForm:"\u30d0\u30c8\u30eb",rubyForm:"{\u30d0\u30c8\u30eb}"},{shortForm:"\u30a8\u30f3\u30c9",rubyForm:"{\u30a8\u30f3\u30c9}"},{shortForm:"\u30b9\u30bf\u30fc\u30c8",rubyForm:"{\u30b9\u30bf\u30fc\u30c8}"},{shortForm:"\u30b9\u30c6\u30c3\u30d7",rubyForm:"{\u30b9\u30c6\u30c3\u30d7}"},{shortForm:"\u7a2e\u985e",rubyForm:"{\u7a2e|\u3057\u3085}{\u985e|\u308b\u3044}"},{shortForm:"\u5f62\u5f0f",rubyForm:"{\u5f62|\u3051\u3044}{\u5f0f|\u3057\u304d}"},{shortForm:"\u8868\u5074",rubyForm:"{\u8868|\u304a\u3082\u3066}{\u5074|\u304c\u308f}"},{shortForm:"\u88cf\u5074",rubyForm:"{\u88cf|\u3046\u3089}{\u5074|\u304c\u308f}"},{shortForm:"\u8868\u793a",rubyForm:"{\u8868|\u3072\u3087\u3046}{\u793a|\u3058}"},{shortForm:"\u88cf",rubyForm:"{\u88cf|\u3046\u3089}"},{shortForm:"\u7f60",rubyForm:"{\u7f60|\u30c8\u30e9\u30c3\u30d7}"},{shortForm:"\u30a2\u30af\u30b7\u30e7\u30f3",rubyForm:"\u30a2\u30af\u30b7\u30e7\u30f3"},{shortForm:"\u88c5\u5099",rubyForm:"{\u88c5|\u305d\u3046}{\u5099|\u3073}"},{shortForm:"\u901f\u653b",rubyForm:"{\u901f|\u305d\u3063}{\u653b|\u3053\u3046}"},{shortForm:"\u6c38\u7d9a",rubyForm:"{\u6c38|\u3048\u3044}{\u7d9a|\u305e\u304f}"},{shortForm:"\u30ab\u30a6\u30f3\u30bf\u30fc",rubyForm:"{\u30ab\u30a6\u30f3\u30bf\u30fc}"},{shortForm:"\u30ec\u30d9\u30eb",rubyForm:"{\u30ec\u30d9\u30eb}"},{shortForm:"\u30e9\u30f3\u30af",rubyForm:"{\u30e9\u30f3\u30af}"},{shortForm:"\u30b9\u30b1\u30fc\u30eb",rubyForm:"{\u30b9\u30b1\u30fc\u30eb}"},{shortForm:"\u653b\u6483\u529b",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u5b88\u5099\u529b",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u6483\u529b",rubyForm:"{\u6483|\u3052\u304d}{\u529b|\u308a\u3087\u304f}"},{shortForm:"\u52dd\u5229",rubyForm:"{\u52dd|\u3057\u3087\u3046}{\u5229|\u308a}"},{shortForm:"\u5c5e\u6027",rubyForm:"{\u5c5e|\u305e\u304f}{\u6027|\u305b\u3044}"},{shortForm:"\u7a2e\u65cf",rubyForm:"{\u7a2e|\u3057\u3085}{\u65cf|\u305e\u304f}"},{shortForm:"\u52b9\u679c",rubyForm:"{\u52b9|\u3053\u3046}{\u679c|\u304b}"},{shortForm:"\u878d\u5408",rubyForm:"{\u878d|\u3086\u3046}{\u5408|\u3054\u3046}"},{shortForm:"\u5100\u5f0f",rubyForm:"{\u5100|\u304e}{\u5f0f|\u3057\u304d}"},{shortForm:"\u30de\u30ad\u30b7\u30de\u30e0",rubyForm:"{\u30de\u30ad\u30b7\u30de\u30e0}"},{shortForm:"\u30c8\u30fc\u30af\u30f3",rubyForm:"{\u30c8\u30fc\u30af\u30f3}"},{shortForm:"\u30c1\u30e5\u30fc\u30ca\u30fc",rubyForm:"{\u30c1\u30e5\u30fc\u30ca\u30fc}"},{shortForm:"\u30c7\u30e5\u30a2\u30eb",rubyForm:"{\u30c7\u30e5\u30a2\u30eb}"},{shortForm:"\u30ea\u30d0\u30fc\u30b9",rubyForm:"{\u30ea\u30d0\u30fc\u30b9}"},{shortForm:"\u30c8\u30a5\u30fc\u30f3",rubyForm:"{\u30c8\u30a5\u30fc\u30f3}"},{shortForm:"\u30b9\u30d4\u30ea\u30c3\u30c8",rubyForm:"{\u30b9\u30d4\u30ea\u30c3\u30c8}"},{shortForm:"\u30e6\u30cb\u30aa\u30f3",rubyForm:"{\u30e6\u30cb\u30aa\u30f3}"},{shortForm:"\u5149",rubyForm:"{\u5149|\u3072\u304b\u308a}"},{shortForm:"\u95c7",rubyForm:"{\u95c7|\u3084\u307f}"},{shortForm:"\u5730",rubyForm:"{\u5730|\u3061}"},{shortForm:"\u6c34",rubyForm:"{\u6c34|\u307f\u305a}"},{shortForm:"\u708e",rubyForm:"{\u708e|\u307b\u306e\u304a}"},{shortForm:"\u98a8",rubyForm:"{\u98a8|\u304b\u305c}"},{shortForm:"\u7363\u6226\u58eb",rubyForm:"{\u7363|\u3058\u3085\u3046}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u5275\u9020\u795e",rubyForm:"{\u5275|\u305d\u3046}{\u9020|\u305e\u3046}{\u795e|\u3057\u3093}"},{shortForm:"\u30b5\u30a4\u30d0\u30fc\u30b9",rubyForm:"{\u30b5\u30a4\u30d0\u30fc\u30b9}"},{shortForm:"\u6050\u7adc",rubyForm:"{\u6050|\u304d\u3087\u3046}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u5e7b\u795e\u7363",rubyForm:"{\u5e7b|\u3052\u3093}{\u795e|\u3057\u3093}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5929\u4f7f",rubyForm:"{\u5929|\u3066\u3093}{\u4f7f|\u3057}"},{shortForm:"\u60aa\u9b54",rubyForm:"{\u60aa|\u3042\u304f}{\u9b54|\u307e}"},{shortForm:"\u9b5a",rubyForm:"{\u9b5a|\u3055\u304b\u306a}"},{shortForm:"\u30ae\u30e3\u30e9\u30af\u30b7\u30fc",rubyForm:"{\u30ae\u30e3\u30e9\u30af\u30b7\u30fc}"},{shortForm:"\u5e7b\u60f3\u9b54",rubyForm:"{\u5e7b|\u3052\u3093}{\u60f3|\u305d\u3046}{\u9b54|\u307e}"},{shortForm:"\u6606\u866b",rubyForm:"{\u6606|\u3053\u3093}{\u866b|\u3061\u3085\u3046}"},{shortForm:"\u6a5f\u68b0",rubyForm:"{\u6a5f|\u304d}{\u68b0|\u304b\u3044}"},{shortForm:"\u690d\u7269",rubyForm:"{\u690d|\u3057\u3087\u304f}{\u7269|\u3076\u3064}"},{shortForm:"\u722c\u866b\u985e",rubyForm:"{\u722c|\u306f}{\u866b|\u3061\u3085\u3046}{\u985e|\u308b\u3044}"},{shortForm:"\u5ca9\u77f3",rubyForm:"{\u5ca9|\u304c\u3093}{\u77f3|\u305b\u304d}"},{shortForm:"\u6d77\u7adc",rubyForm:"{\u6d77|\u304b\u3044}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u9b54\u6cd5\u4f7f\u3044",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}{\u4f7f|\u3064\u304b}\u3044"},{shortForm:"\u96f7",rubyForm:"{\u96f7|\u3044\u304b\u305a\u3061}"},{shortForm:"\u9ce5\u7363",rubyForm:"{\u9ce5|\u3061\u3087\u3046}{\u7363|\u3058\u3085\u3046}"},{shortForm:"\u5e7b\u7adc",rubyForm:"{\u5e7b|\u3052\u3093}{\u7adc|\u308a\u3085\u3046}"},{shortForm:"\u30a2\u30f3\u30c7\u30c3\u30c8",rubyForm:"{\u30a2\u30f3\u30c7\u30c3\u30c8}"},{shortForm:"\u30b5\u30a4\u30dc\u30fc\u30b0",rubyForm:"{\u30b5\u30a4\u30dc\u30fc\u30b0}"},{shortForm:"\u5929\u754c\u6226\u58eb",rubyForm:"{\u5929|\u3066\u3093}{\u754c|\u304b\u3044}{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u9b54\u5c0e\u9a0e\u58eb",rubyForm:"{\u9b54|\u307e}{\u5c0e|\u3069\u3046}{\u9a0e|\u304d}{\u58eb|\u3057}"},{shortForm:"\u7121\u52b9\u5316",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}{\u5316|\u304b}"},{shortForm:"\u30aa\u30e1\u30ac",rubyForm:"{\u30aa\u30e1\u30ac}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u6368\u3066\u308b",rubyForm:"{\u6368|\u3059}\u3066\u308b"},{shortForm:"\u52a0\u3048\u308b",rubyForm:"{\u52a0|\u304f\u308f}\u3048\u308b"},{shortForm:"\u304b\u3089\u96e2\u308c\u308b",rubyForm:"\u304b\u3089{\u96e2|\u306f\u306a}\u308c\u308b"},{shortForm:"\u4e0e\u3048\u308b",rubyForm:"{\u4e0e|\u3042\u305f}\u3048\u308b"},{shortForm:"\u91cd\u306d\u308b",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u308b"},{shortForm:"\u53d6\u308a\u9664\u304f",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u53d6\u308a\u9664\u3044",rubyForm:"{\u53d6|\u3068}\u308a{\u9664|\u306e\u305e}\u3044"},{shortForm:"\u9664\u304f",rubyForm:"{\u9664|\u306e\u305e}\u304f"},{shortForm:"\u884c\u3046",rubyForm:"{\u884c|\u304a\u3053\u306a}\u3046"},{shortForm:"\u5bfe\u3059",rubyForm:"{\u5bfe|\u305f\u3044}\u3059"},{shortForm:"\u9001\u308b",rubyForm:"{\u9001|\u304a\u304f}\u308b"},{shortForm:"\u7f6e\u304f",rubyForm:"{\u7f6e|\u304a}\u304f"},{shortForm:"\u3081\u304f\u308b",rubyForm:"{\u3081\u304f\u308b}"},{shortForm:"\u30a2\u30c9\u30d0\u30f3\u30b9",rubyForm:"{\u30a2\u30c9\u30d0\u30f3\u30b9}"},{shortForm:"\u53cd\u8ee2",rubyForm:"{\u53cd|\u306f\u3093}{\u8ee2|\u3066\u3093}"},{shortForm:"\u7279\u6b8a",rubyForm:"{\u7279|\u3068\u304f}{\u6b8a|\u3057\u3085}"},{shortForm:"\u767a\u52d5",rubyForm:"{\u767a|\u306f\u3064}{\u52d5|\u3069\u3046}"},{shortForm:"\u7834\u58ca",rubyForm:"{\u7834|\u306f}{\u58ca|\u304b\u3044}"},{shortForm:"\u5bfe\u8c61",rubyForm:"{\u5bfe|\u305f\u3044}{\u8c61|\u3057\u3087\u3046}"},{shortForm:"\u7121\u52b9",rubyForm:"{\u7121|\u3080}{\u52b9|\u3053\u3046}"},{shortForm:"\u7121\u8996",rubyForm:"{\u7121|\u3080}{\u8996|\u3057}"},{shortForm:"\u78ba\u8a8d",rubyForm:"{\u78ba|\u304b\u304f}{\u8a8d|\u306b\u3093}"},{shortForm:"\u653b\u6483",rubyForm:"{\u653b|\u3053\u3046}{\u6483|\u3052\u304d}"},{shortForm:"\u51e6\u7406",rubyForm:"{\u51e6|\u3057\u3087}{\u7406|\u308a}"},{shortForm:"\u5ba3\u8a00",rubyForm:"{\u5ba3|\u305b\u3093}{\u8a00|\u3052\u3093}"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u30ea\u30ea\u30fc\u30b9",rubyForm:"{\u30ea\u30ea\u30fc\u30b9}"},{shortForm:"\u30b9\u30ad\u30c3\u30d7",rubyForm:"{\u30b9\u30ad\u30c3\u30d7}"},{shortForm:"\u30b7\u30e3\u30c3\u30d5\u30eb",rubyForm:"{\u30b7\u30e3\u30c3\u30d5\u30eb}"},{shortForm:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",rubyForm:"{\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb}"},{shortForm:"\u30bb\u30c3\u30c8",rubyForm:"{\u30bb\u30c3\u30c8}"},{shortForm:"RUM",regexForm:"(?<!\\w)RUM(?!\\w)",rubyForm:"{RUM|\u30e9\u30f3\u30af\u30a2\u30c3\u30d7\u30de\u30b8\u30c3\u30af}"},{shortForm:"S",regexForm:"(?<!\\w)S(?!\\w)",rubyForm:"{S|\u30b7\u30f3\u30af\u30ed}"},{shortForm:"X",regexForm:"(?<!\\w)X(?!\\w)",rubyForm:"{X|\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"L",regexForm:"(?<!\\w)L(?!\\w)",rubyForm:"{L|\u30ea\u30f3\u30af}"},{shortForm:"P",regexForm:"(?<!\\w)P(?!\\w)",rubyForm:"{P|\u30da\u30f3\u30c7\u30e5\u30e9\u30e0}"},{shortForm:"\u30ea\u30f3\u30af",rubyForm:"{\u30ea\u30f3\u30af}"},{shortForm:"\u5b88\u5099",rubyForm:"{\u5b88|\u3057\u3085}{\u5099|\u3073}"},{shortForm:"\u901a\u5e38",rubyForm:"{\u901a|\u3064\u3046}{\u5e38|\u3058\u3087\u3046}"},{shortForm:"\u53ef\u80fd",rubyForm:"{\u53ef|\u304b}{\u80fd|\u306e\u3046}"},{shortForm:"\u795e",rubyForm:"{\u795e|\u304b\u307f}"},{shortForm:"\u7363",rubyForm:"{\u7363|\u3051\u3082\u306e}"},{shortForm:"\u30c9\u30e9\u30b4\u30f3",rubyForm:"{\u30c9\u30e9\u30b4\u30f3}"},{shortForm:"\u30b5\u30a4\u30ad\u30c3\u30af",rubyForm:"{\u30b5\u30a4\u30ad\u30c3\u30af}"},{shortForm:"\u91cd\u306d\u3066",rubyForm:"{\u91cd|\u304b\u3055}\u306d\u3066"},{shortForm:"\u9b54\u6cd5",rubyForm:"{\u9b54|\u307e}{\u6cd5|\u307b\u3046}"},{shortForm:"\u6226\u58eb",rubyForm:"{\u6226|\u305b\u3093}{\u58eb|\u3057}"},{shortForm:"\u53ec\u559a",rubyForm:"{\u53ec|\u3057\u3087\u3046}{\u559a|\u304b\u3093}"},{shortForm:"\u5408\u8a08",rubyForm:"{\u5408|\u3054\u3046}{\u8a08|\u3051\u3044}"},{shortForm:"\u4ee5\u4e0a",rubyForm:"{\u4ee5|\u3044}{\u4e0a|\u3058\u3087\u3046}"},{shortForm:"\u4e0a\u8a18",rubyForm:"{\u4e0a|\u3058\u3087\u3046}{\u8a18|\u304d}"},{shortForm:"\u5834\u5408",rubyForm:"{\u5834|\u3070}{\u5408|\u3042\u3044}"},{shortForm:"\u964d\u81e8",rubyForm:"{\u964d|\u3053\u3046}{\u81e8|\u308a\u3093}"},{shortForm:"\u4ee5\u5916",rubyForm:"{\u4ee5|\u3044}{\u5916|\u304c\u3044}"},{shortForm:"\u4f7f\u7528",rubyForm:"{\u4f7f|\u3057}{\u7528|\u3088\u3046}"},{shortForm:"\u5b58\u5728",rubyForm:"{\u5b58|\u305d\u3093}{\u5728|\u3056\u3044}"},{shortForm:"\u6700\u5927",rubyForm:"{\u6700|\u3055\u3044}{\u5927|\u3060\u3044}"},{shortForm:"\u6210\u529f",rubyForm:"{\u6210|\u305b\u3044}{\u529f|\u3053\u3046}"},{shortForm:"\u81ea\u8eab",rubyForm:"{\u81ea|\u3058}{\u8eab|\u3057\u3093}"},{shortForm:"\u4ee5\u4e0b",rubyForm:"{\u4ee5|\u3044}{\u4e0b|\u304b}"},{shortForm:"\u7d42\u4e86",rubyForm:"{\u7d42|\u3057\u3085\u3046}{\u4e86|\u308a\u3087\u3046}"},{shortForm:"\u5168\u3066",rubyForm:"{\u5168|\u3059\u3079}\u3066"},{shortForm:"\u6368\u3066",rubyForm:"{\u6368|\u3059}\u3066"},{shortForm:"\u884c\u304b\u305a",rubyForm:"{\u884c|\u3044}\u304b\u305a"},{shortForm:"CNo\uff0e",regexForm:"(?<![a-zA-Z])CNo\uff0e(?![a-zA-Z])",rubyForm:"{CNo\uff0e||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{CNo||\u30ab\u30aa\u30b9\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"No\uff0e",regexForm:"(?<![a-zA-Z])No\uff0e(?![a-zA-Z])",rubyForm:"{No\uff0e||\u30ca\u30f3\u30d0\u30fc\u30ba}",rubyFormName:"{No||\u30ca\u30f3\u30d0\u30fc\u30ba}\uff0e"},{shortForm:"CX",regexForm:"(?<![a-zA-Z])CX(?![a-zA-Z])",rubyForm:"{CX|\u30ab\u30aa\u30b9\u30a8\u30af\u30b7\u30fc\u30ba}"},{shortForm:"\u9069\u7528",rubyForm:"{\u9069|\u3066\u304d}{\u7528|\u3088\u3046}"},{shortForm:"\u6570\u5024",rubyForm:"{\u6570|\u3059\u3046}{\u5024|\u3061}"},{shortForm:"\u8a08\u7b97",rubyForm:"{\u8a08|\u3051\u3044}{\u7b97|\u3055\u3093}"},{shortForm:"\u5fc5\u8981",rubyForm:"{\u5fc5|\u3072\u3064}{\u8981|\u3088\u3046}"},{shortForm:"\u9078\u629e",rubyForm:"{\u9078|\u305b\u3093}{\u629e|\u305f\u304f}"},{shortForm:"\u534a\u5206",rubyForm:"{\u534a|\u306f\u3093}{\u5206|\u3076\u3093}"},{shortForm:"\u958b\u59cb",rubyForm:"{\u958b|\u304b\u3044}{\u59cb|\u3057}"},{shortForm:"\u88cf\u8868",rubyForm:"{\u88cf|\u3046\u3089}{\u8868|\u304a\u3082\u3066}"},{shortForm:"\u56de\u5fa9",rubyForm:"{\u56de|\u304b\u3044}{\u5fa9|\u3075\u304f}"},{shortForm:"\u6307\u5b9a",rubyForm:"{\u6307|\u3057}{\u5b9a|\u3066\u3044}"},{shortForm:"\u4f4d\u7f6e",rubyForm:"{\u4f4d|\u3044}{\u7f6e|\u3061}"},{shortForm:"\u79fb\u52d5",rubyForm:"{\u79fb|\u3044}{\u52d5|\u3069\u3046}"},{shortForm:"\u65b9\u6cd5",rubyForm:"{\u65b9|\u307b\u3046}{\u6cd5|\u307b\u3046}"},{shortForm:"\u5909\u66f4",rubyForm:"{\u5909|\u3078\u3093}{\u66f4|\u3053\u3046}"},{shortForm:"\u767a\u751f",rubyForm:"{\u767a|\u306f\u3063}{\u751f|\u305b\u3044}"},{shortForm:"\u516c\u958b",rubyForm:"{\u516c|\u3053\u3046}{\u958b|\u304b\u3044}"},{shortForm:"\u9806\u756a",rubyForm:"{\u9806|\u3058\u3085\u3093}{\u756a|\u3070\u3093}"},{shortForm:"\u9650\u308a",rubyForm:"{\u9650|\u304b\u304e}\u308a"},{shortForm:"\u9664\u5916",rubyForm:"{\u9664|\u3058\u3087}{\u5916|\u304c\u3044}"},{shortForm:"\u9806",rubyForm:"{\u9806|\u3058\u3085\u3093}"},{shortForm:"\u4ee3",rubyForm:"{\u4ee3|\u304b}"},{shortForm:"\u8d85",rubyForm:"{\u8d85|\u3053}"},{shortForm:"\u6bce",rubyForm:"{\u6bce|\u3054\u3068}"},{shortForm:"\u524d",rubyForm:"{\u524d|\u307e\u3048}"},{shortForm:"\u9055",rubyForm:"{\u9055|\u3061\u304c}"},{shortForm:"\u7d9a",rubyForm:"{\u7d9a|\u3064\u3065}"},{shortForm:"\u6b8b",rubyForm:"{\u6b8b|\u306e\u3053}"},{shortForm:"\u4ed6",rubyForm:"{\u4ed6|\u307b\u304b}"},{shortForm:"\u5f53",rubyForm:"{\u5f53|\u3042}"},{shortForm:"\u5ea6",rubyForm:"{\u5ea6|\u3069}"},{shortForm:"\u6642",rubyForm:"{\u6642|\u3068\u304d}"},{shortForm:"\u65cf",rubyForm:"{\u65cf|\u305e\u304f}"},{shortForm:"\u6570",rubyForm:"{\u6570|\u304b\u305a}"},{shortForm:"\u4f53",rubyForm:"{\u4f53|\u305f\u3044}"},{shortForm:"\u9650",rubyForm:"{\u9650|\u30b2\u30f3}"},{shortForm:"\u7f6e",rubyForm:"{\u7f6e|\u30c1}"},{shortForm:"\u53d7",rubyForm:"{\u53d7|\u3046}"},{shortForm:"\u679a",rubyForm:"{\u679a|\u307e\u3044}"},{shortForm:"\u5f8c",rubyForm:"{\u5f8c|\u3054}"},{shortForm:"\u9001",rubyForm:"{\u9001|\u304a\u304f}"},{shortForm:"\u4e8b",rubyForm:"{\u4e8b|\u3053\u3068}"},{shortForm:"\u5185",rubyForm:"{\u5185|\u3046\u3061}"},{shortForm:"\u898b",rubyForm:"{\u898b|\u307f}"},{shortForm:"\u4e2d",rubyForm:"{\u4e2d|\u306a\u304b}"},{shortForm:"\u52a0",rubyForm:"{\u52a0|\u304f\u308f}"},{shortForm:"\u9078",rubyForm:"{\u9078|\u3048\u3089}"},{shortForm:"\u4e00",rubyForm:"{\u4e00|\u3044\u3061}"},{shortForm:"\u756a",rubyForm:"{\u756a|\u3070\u3093}"},{shortForm:"\u540c",rubyForm:"{\u540c|\u3069\u3046}"},{shortForm:"\u56de",rubyForm:"{\u56de|\u304b\u3044}"},{shortForm:"\u6271",rubyForm:"{\u6271|\u3042\u3064\u304b}"},{shortForm:"\u661f",rubyForm:"{\u661f|\u30ec\u30d9\u30eb}"},{shortForm:"\u653b",rubyForm:"{\u653b|\u3053\u3046}"},{shortForm:"\u5b88",rubyForm:"{\u5b88|\u3057\u3085}"},{shortForm:"\u623b",rubyForm:"{\u623b|\u3082\u3069}"},{shortForm:"\u4e0a",rubyForm:"{\u4e0a|\u3046\u3048}"},{shortForm:"\u6b21",rubyForm:"{\u6b21|\u3064\u304e}"},{shortForm:"\u5024",rubyForm:"{\u5024|\u3061}"},{shortForm:"\u542b",rubyForm:"{\u542b|\u3075\u304f}"},{shortForm:"\u4e0e",rubyForm:"{\u4e0e|\u3080\u305f}"},{shortForm:"\u5f97",rubyForm:"{\u5f97|\u3048}"},{shortForm:"\u53ca",rubyForm:"{\u53ca|\u304a\u3088}"},{shortForm:"\u7570",rubyForm:"{\u7570|\u3053\u3068}"},{shortForm:"\u8a18",rubyForm:"{\u8a18|\u3057\u308b}"},{shortForm:"\u7e70",rubyForm:"{\u7e70|\u304f}"},{shortForm:"\u8fd4",rubyForm:"{\u8fd4|\u304b\u3048}"},{shortForm:"\u6c7a",rubyForm:"{\u6c7a|\u304d}"},{shortForm:"\u4e92",rubyForm:"{\u4e92|\u305f\u304c}"},{shortForm:"\u6255",rubyForm:"{\u6255|\u306f\u3089}"},{shortForm:"\u591a",rubyForm:"{\u591a|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u304a\u304a}"},{shortForm:"\u6301",rubyForm:"{\u6301|\u3082}"},{shortForm:"\u9593",rubyForm:"{\u9593|\u3042\u3044\u3060}"},{shortForm:"\u6240",rubyForm:"{\u6240|\u3057\u3087}"},{shortForm:"\u9ad8",rubyForm:"{\u9ad8|\u305f\u304b}"},{shortForm:"\u500d",rubyForm:"{\u500d|\u3070\u3044}"},{shortForm:"\u4e0b",rubyForm:"{\u4e0b|\u3057\u305f}"},{shortForm:"\u969b",rubyForm:"{\u969b|\u3055\u3044}"},{shortForm:"\u597d",rubyForm:"{\u597d|\u3059}"},{shortForm:"\u8868",rubyForm:"{\u8868|\u304a\u3082\u3066}"}],de=ce.reduce((e,t)=>(e[t.shortForm]=t,e),{}),ue={allRightSymbolOffset:1,bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6,bulletOffset:0,capitalLetterRatio:1,headTextFontRatio:.355,headTextSpacing:1.5,largeSymbolRatio:1.35,letterSpacing:0,offsetY:0,ordinalFontOffsetY:-2,ordinalFontRatio:1/1.1,squareBracketRatio:1},me={headTextHeightRatio:.8,headTextOverflow:"normal",headTextBold:!0,headTextGapRatio:.03125},be={alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextFontRatio:.7,headTextGapRatio:0,headTextHeightRatio:.815,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:1,vietnameseFont:"Times New Roman",vietnameseFontRatio:1.1,letterOffsetMap:{"\u2605":{ratio:.9,baseline:-.05},"\u2606":{ratio:.9,baseline:-.05}}},pe={...be,font:"MatrixBook, Times New Roman",headTextHeightRatio:.75,fontStyle:"tcg",fontList:[]},he={...be,font:'"StoneSerif-Italic", "SVN-Times New Roman Italic"',vietnameseFont:'"SVN-Times New Roman Italic"',headTextHeightRatio:.75,fontStyle:"tcg",vietnameseFontRatio:1.08,fontList:[]},ge={...be,font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",metricMethod:"compact",fontList:[]},fe={tcg:{...he,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...he,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:4,bulletOffset:2},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:5},{bulletWidth:26,fontSize:28.2,lineHeight:30.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...he,fontList:[{bulletWidth:40,fontSize:44.2,lineHeight:47.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.28,lineHeight:21.3,lineCount:7},{bulletWidth:23,fontSize:17.78,lineHeight:18.9,lineCount:8},{bulletWidth:19,fontSize:15.46,lineHeight:16.8,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:12.99,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...he,fontList:[{bulletWidth:40,fontSize:41.2,lineHeight:44.1,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.5,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...he,fontList:[{bulletWidth:38,fontSize:36.8,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:31.5,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.1,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:23.7,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.54,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.14,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.6,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.4,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...he,fontList:[{bulletWidth:41,fontSize:39.5,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:32.6,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:26.7,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.8,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.3,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.4,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...he,fontList:[{bulletWidth:40,fontSize:44.4,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:33.5,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:26.6,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:24.7,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.4,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.2,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:15.9,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.7,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...he,fontList:[{bulletWidth:40,fontSize:38.9,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:32.4,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:26.5,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.2,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.5,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.6,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:15.7,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.1,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.4,lineHeight:13.4,lineCount:11,bulletOffset:1}]}},ve={tcg:{...pe,fontList:[{bulletWidth:38,fontSize:40.2,lineHeight:42.1,lineCount:5,bulletOffset:1},{bulletWidth:30,fontSize:33.2,lineHeight:35.1,lineCount:6},{bulletWidth:26,fontSize:28.2,lineHeight:30.3,lineCount:7},{bulletWidth:23,fontSize:24.38,lineHeight:24.7,lineCount:8},{bulletWidth:23,fontSize:19.94,lineHeight:21.15,lineCount:10,bulletOffset:1},{bulletWidth:21,fontSize:18.5,lineHeight:19.2,lineCount:11,bulletOffset:1},{bulletWidth:19,fontSize:17,lineHeight:17.6,lineCount:12,bulletOffset:1},{bulletWidth:17,fontSize:15.6,lineHeight:16.3,lineCount:13,bulletOffset:1}]},"tcg-stat":{...pe,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:21,fontSize:19.01,lineHeight:20.15,lineCount:9,bulletOffset:1},{bulletWidth:20,fontSize:17.5,lineHeight:18.2,lineCount:10,bulletOffset:1},{bulletWidth:17,fontSize:15.7,lineHeight:16.5,lineCount:11,bulletOffset:1}]},"tcg-type-stat":{...pe,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:48.1,lineCount:3,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:36.5,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:7,bulletOffset:1},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16.7,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:19,fontSize:15,lineHeight:15,lineCount:10,bulletOffset:2}]},"tcg-type":{...pe,fontList:[{bulletWidth:40,fontSize:42.2,lineHeight:43.9,lineCount:4,bulletOffset:2},{bulletWidth:32,fontSize:33.2,lineHeight:35.5,lineCount:5},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:6},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:7},{bulletWidth:23,fontSize:19.95,lineHeight:21.3,lineCount:8},{bulletWidth:23,fontSize:18.8,lineHeight:18.8,lineCount:9},{bulletWidth:20,fontSize:16.8,lineHeight:17.7,lineCount:10,bulletOffset:1},{bulletWidth:19,fontSize:15.1,lineHeight:16.1,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.1,lineHeight:14.7,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge":{...pe,fontList:[{bulletWidth:38,fontSize:37.6,lineHeight:43.3,lineCount:4,bulletOffset:1},{bulletWidth:32,fontSize:32.2,lineHeight:35.6,lineCount:5,bulletOffset:1},{bulletWidth:26,fontSize:28.7,lineHeight:30.1,lineCount:6},{bulletWidth:23,fontSize:24.2,lineHeight:25.8,lineCount:7},{bulletWidth:22,fontSize:19.94,lineHeight:22.7,lineCount:8,bulletOffset:1},{bulletWidth:20,fontSize:17.44,lineHeight:18.55,lineCount:10,bulletOffset:1},{bulletWidth:18,fontSize:15.8,lineHeight:16.4,lineCount:11,bulletOffset:1},{bulletWidth:17,fontSize:14.5,lineHeight:15,lineCount:12,bulletOffset:1}]},"tcg-pendulumLarge-stat":{...pe,fontList:[{bulletWidth:41,fontSize:40.2,lineHeight:47.9,lineCount:3,bulletOffset:2},{bulletWidth:34,fontSize:33.2,lineHeight:36,lineCount:4},{bulletWidth:26,fontSize:27.2,lineHeight:29.5,lineCount:5},{bulletWidth:23,fontSize:24.3,lineHeight:24.7,lineCount:6},{bulletWidth:20,fontSize:17.31,lineHeight:18.65,lineCount:8,bulletOffset:1},{bulletWidth:17,fontSize:15.5,lineHeight:16.7,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.5,lineHeight:15,lineCount:10,bulletOffset:1}]},"tcg-pendulumLarge-type-stat":{...pe,fontList:[{bulletWidth:40,fontSize:45.2,lineHeight:54.1,lineCount:2,bulletOffset:1},{bulletWidth:30,fontSize:34.2,lineHeight:37.5,lineCount:3},{bulletWidth:26,fontSize:27.2,lineHeight:28.5,lineCount:4},{bulletWidth:23,fontSize:25.2,lineHeight:23.3,lineCount:5},{bulletWidth:22,fontSize:19.85,lineHeight:19.5,lineCount:6,bulletOffset:1},{bulletWidth:20,fontSize:18.5,lineHeight:16.9,lineCount:7,bulletOffset:1},{bulletWidth:17,fontSize:16.1,lineHeight:14.8,lineCount:8,bulletOffset:1},{bulletWidth:16,fontSize:13.8,lineHeight:13.2,lineCount:9,bulletOffset:1}]},"tcg-pendulumLarge-type":{...pe,fontList:[{bulletWidth:40,fontSize:39.8,lineHeight:45.5,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:33.2,lineHeight:36.9,lineCount:4,bulletOffset:1},{bulletWidth:28,fontSize:27.2,lineHeight:28.8,lineCount:5},{bulletWidth:25,fontSize:22.8,lineHeight:24.5,lineCount:6},{bulletWidth:22,fontSize:19.95,lineHeight:21.2,lineCount:7},{bulletWidth:20,fontSize:17.95,lineHeight:18.5,lineCount:8,bulletOffset:1},{bulletWidth:19,fontSize:16,lineHeight:16.6,lineCount:9},{bulletWidth:18,fontSize:14.3,lineHeight:15,lineCount:10,bulletOffset:1},{bulletWidth:16,fontSize:12.5,lineHeight:13.4,lineCount:11,bulletOffset:1}]},ocg:{...ge,fontList:[{bulletWidth:38,fontSize:43.2,lineHeight:50.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:30,fontSize:34.7,lineHeight:40.1,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:8}]},"ocg-stat":{...ge,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-type-stat":{...ge,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:24,fontSize:27.7,lineHeight:30.1,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:6}]},"ocg-type":{...ge,fontList:[{bulletWidth:34,fontSize:38.7,lineHeight:44.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:36.1,lineCount:5,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:26,fontSize:28.7,lineHeight:32.8,lineCount:6,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22.05,lineHeight:25.8,lineCount:7}]},"ocg-pendulumLarge":{...ge,fontList:[{bulletWidth:39,fontSize:45.2,lineHeight:55.1,lineCount:3,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:31,fontSize:35.7,lineHeight:44.1,lineCount:4,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:27,fontSize:29.7,lineHeight:35.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:6},{bulletWidth:16,fontSize:22,lineHeight:26,lineCount:7}]},"ocg-pendulumLarge-stat":{...ge,fontList:[{bulletWidth:37,fontSize:40.7,lineHeight:48.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:30,fontSize:32.7,lineHeight:37.1,lineCount:4,bulletOffset:2,headTextFontRatio:.25},{bulletWidth:23,fontSize:25.7,lineHeight:29.8,lineCount:5,bulletOffset:1,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.9,lineCount:6}]},"ocg-pendulumLarge-type-stat":{...ge,fontList:[{bulletWidth:41,fontSize:45.7,lineHeight:54.8,lineCount:2,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:32,fontSize:35.7,lineHeight:40.1,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:4,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:24.8,lineCount:5}]},"ocg-pendulumLarge-type":{...ge,fontList:[{bulletWidth:38,fontSize:43.7,lineHeight:49.8,lineCount:3,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:31,fontSize:34.7,lineHeight:38.1,lineCount:4,bulletOffset:3,headTextFontRatio:.25},{bulletWidth:23,fontSize:26.7,lineHeight:30.6,lineCount:5,bulletOffset:2,headTextFontRatio:.3},{bulletWidth:16,fontSize:21.05,lineHeight:25.8,lineCount:6}]}},ye={Default:{value:"Default",labelKey:"input.name-style.font-type.default",fontData:{alphabetFont:"MatrixRegularSmallCaps, Times New Roman",font:"MatrixRegularSmallCaps, Times New Roman",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.55,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix, Times New Roman",symbolFontRatio:.775,vietnameseFont:"MatrixRegularSmallCaps",vietnameseFontRatio:1,fontList:[{bulletWidth:64,fontSize:91.5,headTextFontRatio:.19,letterSpacing:.015,lineCount:1,lineHeight:91.5,offsetY:0}],letterOffsetMap:{"\u2605":{ratio:.55,baseline:-.05},"\u2606":{ratio:.55,baseline:-.05}},letterDeviationMap:{1:{threshold:.94,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:11},"\u1ecb":{uniformBoxDescent:11},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:11},"e\u0329":{uniformBoxDescent:11},"\xc8\u0329":{uniformBoxDescent:11},"\xc9\u0329":{uniformBoxDescent:11},"\xe8\u0329":{uniformBoxDescent:11},"\u1eb8":{uniformBoxDescent:11},"\u1eb9":{uniformBoxDescent:11},"\u1ec6":{uniformBoxDescent:11},"\u1ec7":{uniformBoxDescent:11}}},2:{threshold:0,letterMap:{I:{uniformBoxDescent:1},i:{uniformBoxDescent:1},"\xcc":{uniformBoxDescent:1},"\xcd":{uniformBoxDescent:1},"\xce":{uniformBoxDescent:1},"\xcf":{uniformBoxDescent:1},"\xec":{uniformBoxDescent:1},"\xed":{uniformBoxDescent:1},"\xee":{uniformBoxDescent:1},"\xef":{uniformBoxDescent:1},"\u0128":{uniformBoxDescent:1},"\u0129":{uniformBoxDescent:1},"\u012a":{uniformBoxDescent:1},"\u012b":{uniformBoxDescent:1},"\u1ec8":{uniformBoxDescent:1},"\u1ec9":{uniformBoxDescent:1},"\u1eca":{uniformBoxDescent:20},"\u1ecb":{uniformBoxDescent:20},E:{uniformBoxDescent:1},"\xc8":{uniformBoxDescent:1},"\xc9":{uniformBoxDescent:1},"\xca":{uniformBoxDescent:1},"\xca\u0304":{uniformBoxDescent:1},"\xca\u030c":{uniformBoxDescent:1},"\xcb":{uniformBoxDescent:1},"\xe8":{uniformBoxDescent:1},"\xe9":{uniformBoxDescent:1},"\xea":{uniformBoxDescent:1},"\xea\u0304":{uniformBoxDescent:1},"\xea\u030c":{uniformBoxDescent:1},"\xeb":{uniformBoxDescent:1},"\u0112":{uniformBoxDescent:1},"\u0113":{uniformBoxDescent:1},"\u1eba":{uniformBoxDescent:1},"\u1ebb":{uniformBoxDescent:1},"\u1ebc":{uniformBoxDescent:1},"\u1ebd":{uniformBoxDescent:1},"\u1ebe":{uniformBoxDescent:1},"\u1ebf":{uniformBoxDescent:1},"\u1ec0":{uniformBoxDescent:1},"\u1ec1":{uniformBoxDescent:1},"\u1ec2":{uniformBoxDescent:1},"\u1ec3":{uniformBoxDescent:1},"\u1ec4":{uniformBoxDescent:1},"\u1ec5":{uniformBoxDescent:1},"E\u0329":{uniformBoxDescent:20},"e\u0329":{uniformBoxDescent:20},"\xc8\u0329":{uniformBoxDescent:20},"\xc9\u0329":{uniformBoxDescent:20},"\xe8\u0329":{uniformBoxDescent:20},"\u1eb8":{uniformBoxDescent:20},"\u1eb9":{uniformBoxDescent:20},"\u1ec6":{uniformBoxDescent:20},"\u1ec7":{uniformBoxDescent:20}}}}}},Arial:{value:"Arial",labelKey:"input.name-style.font-type.arial",fontData:{alphabetFont:"Arial",font:"Arial",fontStyle:"tcg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextHeightRatio:.825,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:"Arial",vietnameseFontRatio:1,weight:"bold",fontList:[{bulletWidth:40.67,fontSize:61,headTextFontRatio:.19,letterSpacing:-.14,lineCount:1,lineHeight:61,offsetY:3}]}},OCG:{value:"OCG",labelKey:"input.name-style.font-type.ocg",fontData:{alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',font:'"Yu-Gi-Oh! DF Leisho 3"',fontStyle:"ocg",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",headTextBold:!0,headTextHeightRatio:.775,headTextOverflow:"condense",metricMethod:"name",numberFont:"DFKakuTaiHiStd-W4",numberFontRatio:1,ordinalFont:'"DFKakuTaiHiStd-W4"',symbolFont:"matrix",symbolFontRatio:.775,vietnameseFont:'"Yu-Gi-Oh! DF Leisho 3"',vietnameseFontRatio:1,fontList:[{bulletWidth:42.67,fontSize:64,headTextFontRatio:.175,headTextSpacing:3,letterSpacing:-.03,lineCount:1,lineHeight:64,offsetY:0}]}}},xe={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{offsetY:-1,bulletWidth:20.05,fontSize:21.2,lineHeight:21.2,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:20,lineHeight:20,lineCount:1,letterSpacing:-.01,headTextFontRatio:.4,largeSymbolRatio:1.25}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",metricMethod:"creator",fontStyle:"ocg",fontList:[{bulletWidth:18,fontSize:19,letterSpacing:.05,lineHeight:20.5,lineCount:1,headTextFontRatio:0,wordLetterSpacing:.11}]}},je={tcg:{font:"stone-serif-regular",alphabetFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"stone-serif-regular",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:0,headTextFontRatio:.4,largeSymbolRatio:1.25,offsetY:1}]},ocg:{font:'"FOT-Rodin Pro M"',alphabetFont:'"FOT-Rodin Pro M"',numberFont:"stone-serif-regular",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",metricMethod:"furigana",fontList:[{bulletWidth:20.05,fontSize:22.219,lineHeight:22.219,lineCount:1,letterSpacing:.1,headTextFontRatio:.4,largeSymbolRatio:1.25},{bulletWidth:20.05,fontSize:19,headTextFontRatio:0,largeSymbolRatio:1.25,lineCount:1,lineHeight:20.5,ordinalFontOffsetY:1,ordinalFontRatio:1.25}]}},Oe={font:"YuGiOhITCStoneSerifBSc",alphabetFont:"YuGiOhITCStoneSerifBSc",symbolFont:"matrix",symbolFontRatio:.8,ordinalFont:"YuGiOhITCStoneSerifBSc",furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"tcg",fontList:[{bulletWidth:20.05,fontSize:31.5,lineHeight:31.5,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:.02,headTextFontRatio:.4},{bulletWidth:21.8,fontSize:32.75,lineHeight:32.75,lineCount:1,iconSymbolWidth:26,capitalLetterRatio:.95,letterSpacing:-.03,headTextFontRatio:.4},{bulletWidth:14.8,fontSize:44.5,lineHeight:44.5,lineCount:1,iconSymbolWidth:45,capitalLetterRatio:.90001,squareBracketRatio:.94001,letterSpacing:-.03,headTextFontRatio:.4}]},we={font:'"Yu-Gi-Oh! DF Leisho 3"',alphabetFont:'"Yu-Gi-Oh! DF Leisho 3"',symbolFont:"matrix",symbolFontRatio:.8,headTextHeightRatio:.775,ordinalFont:'"DFKakuTaiHiStd-W4"',furiganaFont:"DFHSGothic-W3-WIN-RKSJ-H",fontStyle:"ocg",fontList:[{bulletWidth:20.05,fontSize:25.2,lineHeight:25.2,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:21.8,fontSize:26.5,lineHeight:26.5,lineCount:1,iconSymbolWidth:26,headTextFontRatio:.3},{bulletWidth:36.8,fontSize:48,lineHeight:48,lineCount:1,iconSymbolWidth:45,headTextFontRatio:.25,headTextSpacing:3,letterSpacing:-.07,squareBracketRatio:1.02501}]},ke={"tcg-small":{...he,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...he,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...he,fontList:[{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.52,lineCount:10}]}},Se={"tcg-small":{...pe,fontList:[{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:36,fontSize:36.3,lineHeight:37.2,lineCount:2,bulletOffset:1},{bulletWidth:26,fontSize:24.3,lineHeight:25.65,lineCount:3,bulletOffset:1},{bulletWidth:19,fontSize:18.5,lineHeight:19.23,lineCount:4,bulletOffset:3},{bulletWidth:18,fontSize:14.8,lineHeight:15.78,lineCount:5,bulletOffset:3},{bulletWidth:16,fontSize:12.4,lineHeight:13.32,lineCount:6,bulletOffset:2}]},"tcg-medium":{...pe,fontList:[{bulletWidth:41,fontSize:50.3,lineHeight:56.35,lineCount:2},{bulletWidth:34,fontSize:35.3,lineHeight:38.85,lineCount:3,bulletOffset:2},{bulletWidth:27,fontSize:26.3,lineHeight:29.35,lineCount:4,bulletOffset:3},{bulletWidth:23,fontSize:24.3,lineHeight:24.35,lineCount:5},{bulletWidth:19,fontSize:19.5,lineHeight:20.23,lineCount:6},{bulletWidth:18,fontSize:17,lineHeight:17.4,lineCount:7,bulletOffset:1},{bulletWidth:16,fontSize:14.7,lineHeight:15.32,lineCount:8}]},"tcg-large":{...pe,fontList:[{bulletWidth:41,fontSize:40.7,lineHeight:48.52,lineCount:3,bulletOffset:1},{bulletWidth:36,fontSize:35.3,lineHeight:37.65,lineCount:4,bulletOffset:1},{bulletWidth:30,fontSize:28.3,lineHeight:30.35,lineCount:5,bulletOffset:2},{bulletWidth:26,fontSize:24.3,lineHeight:25.85,lineCount:6,bulletOffset:2},{bulletWidth:23,fontSize:20.7,lineHeight:22.05,lineCount:7,bulletOffset:2},{bulletWidth:19,fontSize:18.5,lineHeight:19.33,lineCount:8,bulletOffset:1},{bulletWidth:18,fontSize:16.8,lineHeight:17.3,lineCount:9,bulletOffset:1}]},"ocg-small":{...ge,fontList:[{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:35,fontSize:38.55,lineHeight:39.2,headTextFontRatio:.2,lineCount:2,bulletOffset:3},{bulletWidth:16,fontSize:22.05,lineHeight:26.6,headTextFontRatio:.3,lineCount:3}]},"ocg-medium":{...ge,fontList:[{bulletWidth:41,bulletOffset:3,fontSize:45.55,lineHeight:57.6,headTextFontRatio:.2,lineCount:2},{bulletWidth:31,bulletOffset:2,fontSize:35.55,lineHeight:40.6,lineCount:3},{bulletWidth:23,bulletOffset:1,fontSize:25.05,lineHeight:30.6,lineCount:4},{bulletWidth:16,fontSize:22.05,lineHeight:25.2,lineCount:5}]},"ocg-large":{...ge,fontList:[{bulletWidth:37,fontSize:43.55,lineHeight:49.6,headTextFontRatio:.25,lineCount:3,bulletOffset:3},{bulletWidth:29,fontSize:32.55,lineHeight:38.6,lineCount:4,bulletOffset:1},{bulletWidth:23,fontSize:25.05,lineHeight:30.6,lineCount:5,bulletOffset:1},{bulletWidth:16,fontSize:22.05,lineHeight:25.9,lineCount:6}]}},Fe={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\u300c":"\uff62","\u300d":"\uff63","\u3001":"\uff64",":":"\uff1a","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\xd8":"\u2205"},Ce={"\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\uff41":"a","\uff42":"b","\uff43":"c","\uff44":"d","\uff45":"e","\uff46":"f","\uff47":"g","\uff48":"h","\uff49":"i","\uff4a":"j","\uff4b":"k","\uff4c":"l","\uff4d":"m","\uff4e":"n","\uff4f":"o","\uff50":"p","\uff51":"q","\uff52":"r","\uff53":"s","\uff54":"t","\uff55":"u","\uff56":"v","\uff57":"w","\uff58":"x","\uff59":"y","\uff5a":"z","\uff21":"A","\uff22":"B","\uff23":"C","\uff24":"D","\uff25":"E","\uff26":"F","\uff27":"G","\uff28":"H","\uff29":"I","\uff2a":"J","\uff2b":"K","\uff2c":"L","\uff2d":"M","\uff2e":"N","\uff2f":"O","\uff30":"P","\uff31":"Q","\uff32":"R","\uff33":"S","\uff34":"T","\uff35":"U","\uff36":"V","\uff37":"W","\uff38":"X","\uff39":"Y","\uff3a":"Z","\uff62":"\u300c","\uff63":"\u300d","\uff64":"\u3001","\uff1a":":","\u2200":"\u2c6f","\ua4ef":"\u2c6f","\ua4db":"\u0186","\ua4f1":"\u018e","\ua4de":"\u2132","\ua4e8":"\u2141","\ua4d8":"\ua7b0","\ua4f6":"\ua780","\u2142":"\ua780","\ua4d2":"\u0500","\ua4d5":"\ua7b1","\u0548":"\ua4f5","\ua4e5":"\u0245","\uff1c":"<","\uff1e":">","\uff01":"!","\uff08":"(","\uff09":")","\uff06":"&","\uff07":"'","\uff20":"@","\u2205":"\xd8"},Le={"(\uff11)":"\u2460","(\uff12)":"\u2461","(\uff13)":"\u2462","(\uff14)":"\u2463","(\uff15)":"\u2464","(\uff16)":"\u2465","(\uff17)":"\u2466","(\uff18)":"\u2467","(\uff19)":"\u2468","(\uff11\uff10)":"\u2469","(\uff11\uff11)":"\u246a","(\uff11\uff12)":"\u246b","(\uff11\uff13)":"\u246c","(\uff11\uff14)":"\u246d","(\uff11\uff15)":"\u246e","(\uff11\uff16)":"\u246f","(\uff11\uff17)":"\u2470","(\uff11\uff18)":"\u2471","(\uff11\uff19)":"\u2472","(\uff12\uff10)":"\u2473","(1)":"\u2460","(2)":"\u2461","(3)":"\u2462","(4)":"\u2463","(5)":"\u2464","(6)":"\u2465","(7)":"\u2466","(8)":"\u2467","(9)":"\u2468","(10)":"\u2469","(11)":"\u246a","(12)":"\u246b","(13)":"\u246c","(14)":"\u246d","(15)":"\u246e","(16)":"\u246f","(17)":"\u2470","(18)":"\u2471","(19)":"\u2472","(20)":"\u2473"},Ne={ocg:["\xa9\u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e\u30fb\u30c6\u30ec\u30d3\u6771\u4eac\u30fbKONAMI","\xa9\u9ad8\u6a4b\u548c\u5e0c \u30b9\u30bf\u30b8\u30aa\u30fb\u30c0\u30a4\u30b9\uff0f\u96c6\u82f1\u793e","\xa9\u9ad8\u6a4b\u548c\u5e0c\uff0f\u96c6\u82f1\u793e"],tcg:["\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","\xa91996 KAZUKI TAKAHASHI","\xa9KAZUKI TAKAHASHI / SHUEISHA"]},Te={ocg:"\u203b\u30c7\u30c3\u30ad\u69cb\u7bc9\u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",tcg:"This card cannot be in a Deck."},Re={"\u6c34\u65cf":"Aqua","\u7363\u65cf":"Beast","\u7363\u6226\u58eb\u65cf":"Beast-Warrior","\u5275\u9020\u795e\u65cf":"Creator God","\u30b5\u30a4\u30d0\u30fc\u30b9\u65cf":"Cyberse","\u6050\u7adc\u65cf":"Dinosaur","\u5e7b\u795e\u7363\u65cf":"Divine-Beast","\u30c9\u30e9\u30b4\u30f3\u65cf":"Dragon","\u5929\u4f7f\u65cf":"Fairy","\u60aa\u9b54\u65cf":"Fiend","\u9b5a\u65cf":"Fish","\u30ae\u30e3\u30e9\u30af\u30b7\u30fc\u65cf":"Galaxy","\u5e7b\u60f3\u9b54\u65cf":"Illusion","\u6606\u866b\u65cf":"Insect","\u6a5f\u68b0\u65cf":"Machine","\u690d\u7269\u65cf":"Plant","\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Psychic","\u708e\u65cf":"Pyro","\u722c\u866b\u985e\u65cf":"Reptile","\u5ca9\u77f3\u65cf":"Rock","\u6d77\u7adc\u65cf":"Sea Serpent","\u9b54\u6cd5\u4f7f\u3044\u65cf":"Spellcaster","\u96f7\u65cf":"Thunder","\u6226\u58eb\u65cf":"Warrior","\u9ce5\u7363\u65cf":"Winged Beast","\u5e7b\u7adc\u65cf":"Wyrm","\u30a2\u30f3\u30c7\u30c3\u30c8\u65cf":"Zombie","\u30b5\u30a4\u30dc\u30fc\u30b0\u65cf":"Cyborg","\u5929\u754c\u6226\u58eb\u65cf":"Celestial Warrior","\u30cf\u30a4\u30c9\u30e9\u30b4\u30f3\u65cf":"High Dragon","\u9b54\u5c0e\u9a0e\u58eb\u65cf":"Magical Knight","\u30aa\u30e1\u30ac\u30b5\u30a4\u30ad\u30c3\u30af\u65cf":"Omega Psychic","\u30e2\u30f3\u30b9\u30bf\u30fc":"Monster","\u9b54\u6cd5\u30ab\u30fc\u30c9":"Spell Card","\u7f60\u30ab\u30fc\u30c9":"Trap Card","\u30a2\u30af\u30b7\u30e7\u30f3":"Action","\u901a\u5e38":"Normal","\u52b9\u679c":"Effect","\u5100\u5f0f":"Ritual","\u30d5\u30e5\u30fc\u30b8\u30e7\u30f3":"Fusion","\u878d\u5408":"Fusion","\u30b7\u30f3\u30af\u30ed":"Synchro","\u30a8\u30af\u30b7\u30fc\u30ba":"Xyz","\u30da\u30f3\u30c7\u30e5\u30e9\u30e0":"Pendulum","\u30ea\u30f3\u30af":"Link","\u30de\u30ad\u30b7\u30de\u30e0":"Maximum","\u30c8\u30fc\u30af\u30f3":"Token","\u7279\u6b8a\u53ec\u559a":"Special Summon","\u30c0\u30fc\u30af\u30b7\u30f3\u30af\u30ed\u30e2\u30f3\u30b9\u30bf\u30fc":"Dark Synchro","\u30c1\u30e5\u30fc\u30ca\u30fc":"Tuner","\u30c7\u30e5\u30a2\u30eb":"Gemini","\u30ea\u30d0\u30fc\u30b9":"Flip","\u30c8\u30a5\u30fc\u30f3":"Toon","\u30b9\u30d4\u30ea\u30c3\u30c8":"Spirit","\u30e6\u30cb\u30aa\u30f3":"Union",[Ne.ocg[2]]:Ne.tcg[2],[Ne.ocg[1]]:Ne.tcg[1],[Ne.ocg[0]]:Ne.tcg[0],"{\u7d14|\u30b8\u30e5\u30f3}{\u72d0|\u3053}":"Junko","\u81ea\u5206\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u52b9\u679c\u30e2\u30f3\u30b9\u30bf\u30fc\xd7\uff12\u4f53\u4ee5\u4e0a\n\u2460\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u304c\u30e2\u30f3\u30b9\u30bf\u30fc\u30be\u30fc\u30f3\u306b\u5b58\u5728\u3059\u308b\u9650\u308a\u3001\u76f8\u624b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u52b9\u679c\u3092\u767a\u52d5\u3059\u308b\u5ea6\u306b\u3001\u305d\u306e\u76f8\u624b\u306e\u8868\u5074\u8868\u793a\u30e2\u30f3\u30b9\u30bf\u30fc\u306b\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\uff11\u3064\u7f6e\u304f(\u6700\u5927\uff11\u3064\u307e\u3067\uff09\u3002\u2461\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u767a\u52d5\u3057\u305f\u52b9\u679c\u3092\u53d7\u3051\u306a\u3044\u3002\u2462\uff1a\u3053\u306e\u30ab\u30fc\u30c9\u306f\u30d4\u30e5\u30a2\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30e2\u30f3\u30b9\u30bf\u30fc\u3068\u306e\u6226\u95d8\u3067\u306f\u7834\u58ca\u3055\u308c\u306a\u3044\u3002":"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.","\u203b\u516c\u5f0f\u306e\u30c7\u30e5\u30a8\u30eb\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002":"This card cannot be used in a Duel.","\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002":"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",[Te.ocg]:Te.tcg},Ie=Object.entries(Re).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{"Once per turn: You can pay 800 LP, increase this card\u2019s Pendulum Scale by 1.":"\u2460\uff1a\uff11\u30bf\u30fc\u30f3\u306b\uff11\u5ea6\u3001\uff18\uff10\uff10\uff2c\uff30\u3092\u6255\u3063\u3066\u767a\u52d5\u3067\u304d\u308b\u3002\u3053\u306e\u30ab\u30fc\u30c9\u306e\uff30\u30b9\u30b1\u30fc\u30eb\u30921\u3064\u4e0a\u3052\u308b\u3002"}),Be={normal:{name:"normal",nameKey:"input.frame.normal",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c49c5e",sortWeight:100},effect:{name:"effect",nameKey:"input.frame.effect",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#b96c49",sortWeight:90},fusion:{name:"fusion",nameKey:"input.frame.fusion",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#8948a4",sortWeight:80},synchro:{name:"synchro",nameKey:"input.frame.synchro",labelColor:"#000",edition:"normal",labelBackgroundColor:"#efefef",sortWeight:70},xyz:{name:"xyz",nameKey:"input.frame.xyz",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#000000",sortWeight:60},link:{name:"link",nameKey:"input.frame.link",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#0c8ac6",sortWeight:50},ritual:{name:"ritual",nameKey:"input.frame.ritual",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#5e85c9",sortWeight:85},spell:{name:"spell",nameKey:"input.frame.spell",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#1b8f83",sortWeight:30},trap:{name:"trap",nameKey:"input.frame.trap",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#c32a8c",sortWeight:25},token:{name:"token",nameKey:"input.frame.token",labelColor:"#ffffff",edition:"normal",labelBackgroundColor:"#6f6c6b",sortWeight:1},"dark-synchro":{name:"dark-synchro",nameKey:"input.frame.dark-synchro",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4d4543",sortWeight:15},obelisk:{name:"obelisk",nameKey:"input.frame.obelisk",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#515eb0",sortWeight:10},osiris:{name:"osiris",nameKey:"input.frame.osiris",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#bd5044",sortWeight:9},ra:{name:"ra",nameKey:"input.frame.ra",labelColor:"#000",edition:"extendend",labelBackgroundColor:"#b9ad34",sortWeight:8},raviel:{name:"raviel",nameKey:"input.frame.raviel",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#313c5f",sortWeight:7},uria:{name:"uria",nameKey:"input.frame.uria",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#623320",sortWeight:6},hamon:{name:"hamon",nameKey:"input.frame.hamon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#534a19",sortWeight:5},"lg-dragon":{name:"lg-dragon",nameKey:"input.frame.lg-dragon",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#4e84a4",sortWeight:3},"speed-skill":{name:"speed-skill",nameKey:"input.frame.speed-skill",labelColor:"#ffffff",edition:"extendend",labelBackgroundColor:"#199cd5",sortWeight:2},zarc:{name:"zarc",nameKey:"input.frame.zarc",labelColor:"#000",edition:"extendend",labelBackgroundColorList:["rgba(185,108,73,1)","rgba(137,72,164,1)","rgba(239,239,239,1)","rgba(0,0,0,1)"],labelBackgroundImage:`linear-gradient(90deg, ${["rgba(185,108,73,1) 23%","rgba(137,72,164,1) 27%","rgba(137,72,164,1) 49%","rgba(239,239,239,1) 51%","rgba(239,239,239,1) 73%","rgba(0,0,0,1) 77%"].join(", ")})`,sortWeight:4}},ze=Object.values(Be),Ee=Be.effect,De={bottomLeftFrame:{labelKey:"input.advanced-frame.name.bottom-left"},bottomRightFrame:{labelKey:"input.advanced-frame.name.bottom-right"},effectBackground:{labelKey:"input.advanced-frame.name.effect-background"},pendulumEffectBackground:{labelKey:"input.advanced-frame.name.pendulum-effect-background"},frame:{labelKey:"input.advanced-frame.name.primary"},topLeftFrame:{labelKey:"input.advanced-frame.name.top-left"},topRightFrame:{labelKey:"input.advanced-frame.name.top-right"},foil:{labelKey:"input.foil.label"}},Me={normal:[{top:175,left:55,width:100,height:100},{top:165,left:323,width:170,height:80},{top:175,left:655,width:100,height:100},{top:442,left:45,width:70,height:170},{top:0,left:0,width:0,height:0},{top:442,left:700,width:70,height:170},{top:775,left:55,width:100,height:100},{top:810,left:323,width:170,height:80},{top:775,left:655,width:100,height:100}],pendulum:[{top:169,left:11,width:100,height:100},{top:159,left:323,width:170,height:80},{top:169,left:699,width:100,height:100},{top:572,left:1,width:70,height:170},{top:0,left:0,width:0,height:0},{top:572,left:744,width:70,height:170},{top:1054,left:11,width:100,height:100},{top:1093,left:323,width:170,height:80},{top:1054,left:699,width:100,height:100}]},We=[-45,0,45,-90,0,90,-135,180,135],Ae=[-38,-28,-38,-28,0,-28,-38,-28,-38],He=[-30,-23,-30,-28,0,-28,-30,-23,-30],Pe=[0,0,0,0,0,0,0,0,0],$e=[-5,0,5,0,0,0,5,0,-5],Ke=new RegExp("[A-Z\uff21-\uff3a\xc0-\xd6]"),Ue=new RegExp("[\\[\\]\u3010\u3011]"),Ye="[#@\u221ea-z\uff41-\uff5aA-Z\uff21-\uff3a0-9\uff10-\uff19\xc0-\xd6\xd9-\xf6\xf9-\xff\u0100-\u017e\u0180-\u024f\u1e00-\u1eff!\uff01+\xd7\uff03#@\u221e\u2018\u201c\u2019\u201d:;\\[\\]\\(\\)\u3010\u3011\\.,]+",Ge=new RegExp(Ye),Ve=new RegExp("[\xc0\xc1\xc2\xc3\xc8\xc9\xca\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ebf\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9]"),Xe=new RegExp(`({[^{}]+?}|${Ye}|.)`),qe="\u2989",Je="\u298a",_e="\u27c5",Qe="\u27c6",Ze="\u169b",et="\u169c",tt="\u27ec",at="\u27ed",rt=new RegExp(`[${[et,Ze,Qe,_e,at,tt,Je,qe].join("")}]|(\\|[^}]+})`,"g"),nt="\u2e26\u2e27",it="\u2e26\u2e26\u2e27\u2e27",lt=new RegExp(`(^|[-\\u2014/[(\\u2018${qe}${_e}${Ze}${tt}\\s])"`,"g"),ot=`${qe}|${Je}`,st=new RegExp(ot),ct=`(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${qe}?(\\(|\\*)[\\w\\W]+${Je}?)\\s*$`,dt=new RegExp("[\xd8#\u2605\u2606@\u221e\u0370-\u03ff\u1f00-\u1ffe]"),ut=`(${ce.map(e=>{var t;return null!==(t=e.regexForm)&&void 0!==t?t:e.shortForm}).join("|")})(?![^{]*})`,mt="\u30fd\u30fe\u30fc\u30a1\u30a3\u30a5\u30a7\u30a9\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u3041\u3043\u3045\u3047\u3049\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u31f0\u31f1\u31f2\u31f3\u31f4\u31f5\u31f6\u31f7\u31f8\u31f9\u31fa\u31fb\u31fc\u31fd\u31fe\u31ff\u3005\u303b",bt=new RegExp(`[${mt}]`),pt=`.[${mt})\\]\uff5d\u3015\u3009\u300b\u300d\uff63\u300f\u3011\u3019\u3017\u301f'"\u2019\u201d\uff60\xbb\u2010\u30a0\u2013\u301c\uff1f!\u203c\u2047\u2048\u2049\u30fb\u3001:;,\u3002.\uff61\uff64]+`,ht=new RegExp("[\u2460-\u2473\u203b]"),gt=new RegExp("[\uff21-\uff3a\uff41-\uff5a]"),ft=new RegExp("[\uff10-\uff19]"),vt=new RegExp("[0-9]"),yt=/[\u3042\u3044\u3046\u3048\u304a\u304b\u304c\u304d\u304e\u304f\u3050\u3051\u3052\u3053\u3054\u3055\u3056\u3057\u3058\u3059\u305a\u305b\u305c\u305d\u305e\u305f\u3060\u3061\u3062\u3064\u3065\u3066\u3067\u3068\u3069\u306a\u306b\u306c\u306d\u306e\u306f\u3070\u3071\u3072\u3073\u3074\u3075\u3076\u3077\u3078\u3079\u307a\u307b\u307c\u307d\u307e\u307f\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308a\u308b\u308c\u308d\u308f\u3090\u3091\u3092\u3093\u3094]/,xt=/[\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ac\u30ad\u30ae\u30af\u30b0\u30b1\u30b2\u30b3\u30b4\u30b5\u30b6\u30b7\u30b8\u30b9\u30ba\u30bb\u30bc\u30bd\u30be\u30bf\u30c0\u30c1\u30c2\u30c4\u30c5\u30c6\u30c7\u30c8\u30c9\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d0\u30d1\u30d2\u30d3\u30d4\u30d5\u30d6\u30d7\u30d8\u30d9\u30da\u30db\u30dc\u30dd\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f0\u30f1\u30f2\u30f3\u30f4\u30f7\u30f8\u30f9\u30fa]/,jt=new RegExp("[\u30fb]"),Ot=new RegExp("[\u30fc]"),wt=new RegExp("[\u2015]"),kt=new RegExp("[\uff1a]"),St=new RegExp("[\u3002\uff64]"),Ft=new RegExp("[\uff1a]"),Ct={"\u3002":-.2,"\uff64":-.2,"\uff62":0,"\uff63":0,"\uff1a":0,">":.25,"<":-.25},Lt={"\u3002":-.5,"\uff1a":-.25},Nt={">":.125,"<":.125},Tt={},Rt={},It={},Bt=e=>"tcg"===e?7:1,zt=/{[^{}]+?}/,Et="\\s\\-/",Dt=-2.25,Mt=()=>({version:2,format:"tcg",region:"en",frame:"fusion",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],otherFinish:["normal","normal","normal","normal"],artFinish:"normal",name:"Junko",nameStyleType:"auto",nameStyle:P(),attribute:"LIGHT",subFamily:L,cardIcon:"auto",star:6,starAlignment:"auto",starList:[],art:"https://i.imgur.com/h5kXZeC.png",artData:"",artFit:!1,artSource:"online",artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:["1","3","7","9"],linkRating:"",isLink:!1,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"Once per turn: You can pay 800 LP, increase this card's Pendulum Scale by 1.",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:_,typeAbility:["Fairy","Fusion","Effect"],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0},effect:"[2+ Effect Monsters on your field]\nEach time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.",setId:"YGOC-EN001",atk:"2000",def:"2000",password:"18199611",sticker:"holo5",isFirstEdition:!0,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"\xa92020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],flag:[0,0],dyeList:["","","","","","",""],externalInfo:{}}),Wt=()=>({id:Object(V.a)(),...Mt()}),At=()=>({version:3,format:"tcg",region:"en",frame:"effect",leftFrame:"auto",rightFrame:"auto",pendulumRightFrame:"auto",foil:"normal",opacity:d(),finish:[],artFinish:"normal",otherFinish:["normal","normal","normal","normal"],name:"",nameStyleType:"auto",nameStyle:P(),attribute:w,subFamily:L,cardIcon:"auto",star:6,starList:[],starAlignment:"auto",art:"https://i.imgur.com/jjtCuG5.png",artData:"",artSource:"online",artFit:!1,artCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},hasBackground:!1,background:"",backgroundData:"",backgroundFit:!1,backgroundSource:"online",backgroundType:"fit",backgroundCrop:{x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},linkMap:[],linkRating:"",isLink:null,isPendulum:!1,pendulumFrame:"auto",pendulumEffect:"",pendulumScaleRed:"4",pendulumScaleBlue:"4",pendulumSize:_,typeAbility:[],effectStyle:{condenseTolerant:"strict",fontStyle:"auto",upSize:0,background:"auto",minLine:0},pendulumStyle:{fontStyle:"auto",upSize:0,background:"auto",minLine:0},effect:"",setId:"",atk:"0",def:"0",password:"",sticker:T,isFirstEdition:!1,isSpeedCard:!1,isLimitedEdition:!1,isDuelTerminalCard:!1,isLegacyCard:!1,creator:"",furiganaHelper:!0,statTextStyle:[!1,"#000000",!1,"#000000"],typeTextStyle:[!1,"#000000",!1,"#000000"],effectTextStyle:[!1,"#000000",!1,"#000000"],pendulumTextStyle:[!1,"#000000",!1,"#000000"],otherTextStyle:[!1,"#000000",!1,"#000000"],dyeList:["","","","","","",""],flag:[0,0],externalInfo:{}}),Ht=[{type:"body",subType:"artBorder",label:"Card",labelKey:"input.opacity.body.label",tooltipKey:"input.opacity.art-border.tooltip"},{type:"name",subType:"nameBorder",label:"Name",labelKey:"input.opacity.name.label",tooltipKey:"input.opacity.name-border.tooltip"},{type:"pendulum",label:"Pendulum",labelKey:"input.opacity.pendulum.label",tooltipKey:null},{type:"text",label:"Effect",labelKey:"input.opacity.effect.label",tooltipKey:null}],Pt=["#4D4D4D","#999999","#FFFFFF","#FF7F7F","#FFD27F","#FFFF7F","#7FFF7F","#7FBF7F","#7FFFFF","#7F7FFF","#BF7FBF","#FF7FFF","#333333","#808080","#cccccc","#FF0000","#FFA500","#FFFF00","#00FF00","#008000","#00FFFF","#0000FF","#800080","#FF00FF","#000000","#666666","#B3B3B3","#7F0000","#7F5200","#7F7F00","#007F00","#004000","#007F7F","#00007F","#400040","#7F007F"],$t={"549x800":{label:"549 \xd7 800",width:549,height:800,scale:1,settingValue:[549,800]},"561x818":{label:"561 \xd7 818",width:561,height:818,scale:1,settingValue:[561,818]},"813x1185":{label:"813 \xd7 1185",width:813,height:1185,scale:1,settingValue:[813,1185]},"1122x1636":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1122 \xd7 1636"}),width:1122,height:1636,scale:2,settingValue:[1122,1636]},"1388x2026":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1388 \xd7 2026"}),width:1388,height:2026,scale:2,settingValue:[1388,2026]},"1626x2370":{label:Object(O.jsx)("div",{style:{color:"var(--main-warning)"},children:"1626 \xd7 2370"}),width:1626,height:2370,scale:2,settingValue:[1626,2370]}},Kt=[$t["549x800"],$t["561x818"],$t["813x1185"],$t["1122x1636"],$t["1388x2026"],$t["1626x2370"]],Ut=[{value:"csv",label:".csv"},{value:"xlsx",label:".xlsx"}],Yt=e=>[{value:"auto",label:e["setting.option.sliding-type.auto.label"]},{value:"manual",label:e["setting.option.sliding-type.manual.label"]}],{width:Gt,height:Vt}=s,Xt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt;const a=document.createElement("canvas");a.width=e,a.height=t;const r=a.getContext("2d");return{canvas:a,ctx:r}};var qt=a(156),Jt=a.n(qt),_t=a(231),Qt=a.n(_t),Zt=a(109),ea=a.n(Zt),ta=a(285),aa=a.n(ta),ra=a(286),na=a.n(ra),ia=a(287),la=a.n(ia),oa=a(288),sa=a.n(oa);function ca(e,t){var a,r,n,i,l,o,s=e.shape.length,c=e.shape.slice(0),d=new Array(s),u=1,m=0,b=0;for(t=t||2,a=s-1;a>=0;--a)d[a]=u,u*=c[a],b+=c[a],m=Math.max(m,c[a]);var p=ea.a.mallocDouble(u),h=Jt()(p,c.slice(0),d.slice(0),0),g=ea.a.mallocUint32(m),f=ea.a.mallocUint32(m),v=ea.a.mallocDouble(u),y=Jt()(v,c.slice(0),d.slice(0),0);for(let x=0;x<e.shape[0];x++)for(let t=0;t<e.shape[1];t++)y.set(x,t,e.get(x,t)?0:b);for(function(e,t,a){var r,n,i,l=0,o=Math.min;for(r=0;r<t;++r){for(i=e[l++],n=1;n<a;++n)i=o(e[l],i+1),e[l++]=i;for(n=0;n<a;++n)i=o(e[--l],i+1),e[l]=i;l+=a}}(y.data,u/c[s-1]|0,0|c[s-1]),a=s-1;a>0;--a){for(i=h.stride,n=1,r=a-1;r<s;++r)i[r]=n,n*=c[r];for(r=a-2;r>=0;--r)i[r]=n,n*=c[r];if(Qt.a.assign(h,y),o=c[a-1],isFinite(t))if(1===t)aa()(h.data,u/o|0,0|o,g,f);else if(2===t)na()(h.data,u/o|0,0|o,g,f);else{if(t<1)throw new Error("Values of exponent < 1 are not supported");sa()(h.data,u/o|0,0|o,g,f,t)}else la()(h.data,u/o|0,0|o,g,f);l=y,y=h,h=l}return Qt.a.assign(e,y),ea.a.freeDouble(v),ea.a.freeDouble(p),ea.a.freeUint32(g),ea.a.freeUint32(f),e}const{width:da,height:ua}=s,ma=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:da,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ua;if(!hr.test(t))return{canvas:e,ctx:e.getContext("2d")};const{ctx:n,canvas:i}=Xt(a,r);return n.filter="grayscale(1)",n.drawImage(e,0,0),n.filter="none",n.fillStyle=t,n.globalCompositeOperation="overlay",n.fillRect(0,0,da,ua),n.globalCompositeOperation="destination-in",n.drawImage(e,0,0),n.globalCompositeOperation="source-over",{canvas:i,ctx:i.getContext("2d")}};var ba=a(37),pa=a(324),ha=a(289),ga=a(140);const fa={uniforms:{tDiffuse:{type:"t",value:null},h:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float h;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float lef4 = vUv.x - 4.0 * h;","float lef3 = vUv.x - 3.0 * h;","float lef2 = vUv.x - 2.0 * h;","float lef1 = vUv.x - 1.0 * h;","float rig1 = vUv.x + 1.0 * h;","float rig2 = vUv.x + 2.0 * h;","float rig3 = vUv.x + 3.0 * h;","float rig4 = vUv.x + 4.0 * h;","lef4 = lef4 >= 0.0 ? lef4 : (1.0 + lef4);","lef4 = lef4 < 1.0  ? lef4 : (lef4 - 1.0 );","lef3 = lef3 >= 0.0 ? lef3 : (1.0 + lef3);","lef3 = lef3 < 1.0  ? lef3 : (lef3 - 1.0 );","lef2 = lef2 >= 0.0 ? lef2 : (1.0 + lef2);","lef2 = lef2 < 1.0  ? lef2 : (lef2 - 1.0 );","lef1 = lef1 >= 0.0 ? lef1 : (1.0 + lef1);","lef1 = lef1 < 1.0  ? lef1 : (lef1 - 1.0 );","rig1 = rig1 >= 0.0 ? rig1 : (1.0 + rig1);","rig1 = rig1 < 1.0  ? rig1 : (rig1 - 1.0 );","rig2 = rig2 >= 0.0 ? rig2 : (1.0 + rig2);","rig2 = rig2 < 1.0  ? rig2 : (rig2 - 1.0 );","rig3 = rig3 >= 0.0 ? rig3 : (1.0 + rig3);","rig3 = rig3 < 1.0  ? rig3 : (rig3 - 1.0 );","rig4 = rig4 >= 0.0 ? rig4 : (1.0 + rig4);","rig4 = rig4 < 1.0  ? rig4 : (rig4 - 1.0 );","sum += texture2D( tDiffuse, vec2( lef4, vUv.y ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( lef3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( lef2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( lef1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( rig1, vUv.y ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( rig2, vUv.y ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( rig3, vUv.y ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( rig4, vUv.y ) ) * 0.051;","if (h > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},va={uniforms:{tDiffuse:{type:"t",value:null},v:{type:"f",value:3/512}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float v;","varying vec2 vUv;","void main() {","vec4 sum = vec4( 0.0 );","float top4 = vUv.y - 4.0 * v;","float top3 = vUv.y - 3.0 * v;","float top2 = vUv.y - 2.0 * v;","float top1 = vUv.y - 1.0 * v;","float bot1 = vUv.y + 1.0 * v;","float bot2 = vUv.y + 2.0 * v;","float bot3 = vUv.y + 3.0 * v;","float bot4 = vUv.y + 4.0 * v;","top4 = top4 >= 0.0 ? top4 : (1.0 + top4);","top4 = top4 < 1.0  ? top4 : (top4 - 1.0 );","top3 = top3 >= 0.0 ? top3 : (1.0 + top3);","top3 = top3 < 1.0  ? top3 : (top3 - 1.0 );","top2 = top2 >= 0.0 ? top2 : (1.0 + top2);","top2 = top2 < 1.0  ? top2 : (top2 - 1.0 );","top1 = top1 >= 0.0 ? top1 : (1.0 + top1);","top1 = top1 < 1.0  ? top1 : (top1 - 1.0 );","bot1 = bot1 >= 0.0 ? bot1 : (1.0 + bot1);","bot1 = bot1 < 1.0  ? bot1 : (bot1 - 1.0 );","bot2 = bot2 >= 0.0 ? bot2 : (1.0 + bot2);","bot2 = bot2 < 1.0  ? bot2 : (bot2 - 1.0 );","bot3 = bot3 >= 0.0 ? bot3 : (1.0 + bot3);","bot3 = bot3 < 1.0  ? bot3 : (bot3 - 1.0 );","bot4 = bot4 >= 0.0 ? bot4 : (1.0 + bot4);","bot4 = bot4 < 1.0  ? bot4 : (bot4 - 1.0 );","sum += texture2D( tDiffuse, vec2( vUv.x, top4 ) ) * 0.051;","sum += texture2D( tDiffuse, vec2( vUv.x, top3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, top2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, top1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;","sum += texture2D( tDiffuse, vec2( vUv.x, bot1 ) ) * 0.1531;","sum += texture2D( tDiffuse, vec2( vUv.x, bot2 ) ) * 0.12245;","sum += texture2D( tDiffuse, vec2( vUv.x, bot3 ) ) * 0.0918;","sum += texture2D( tDiffuse, vec2( vUv.x, bot4 ) ) * 0.051;","if (v > 0.0){","\tvec4 srcValue = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );","\tsum = srcValue + srcValue - sum;","}","gl_FragColor = sum;","}"].join("\n")},ya={uniforms:{type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}},vertexShader:["precision mediump float;","varying vec2 vUv;","varying vec2 step;","uniform vec3 dimensions;","void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","step = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);","vUv = uv;","}"].join("\n"),fragmentShader:["precision mediump float;","uniform vec3 dimensions;","varying vec2 vUv;","varying vec2 step;","uniform float dz;","uniform float invertR;","uniform float invertG;","uniform float invertH;","uniform int type;","uniform sampler2D tHeightMap;","void main(void) {","\tvec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );","\tvec2 lv  = vec2(vUv.x - step.x, vUv.y \t\t   );","\tvec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);","\tvec2 tv  = vec2(vUv.x \t\t  , vUv.y + step.y );","\tvec2 bv  = vec2(vUv.x \t\t  , vUv.y - step.y);","\tvec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );","\tvec2 rv  = vec2(vUv.x + step.x, vUv.y \t\t   );","\tvec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);","\ttlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), \ttlv.y >= 0.0\t? tlv.y : (1.0  + tlv.y));","\ttlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), \ttlv.y < 1.0   \t? tlv.y : (tlv.y - 1.0 ));","\tlv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  \tlv.y  >= 0.0 \t?  lv.y : (1.0  +  lv.y));","\tlv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  \t?  lv.y : ( lv.y - 1.0 ));","\tblv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), \tblv.y >= 0.0 \t? blv.y : (1.0  + blv.y));","\tblv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), \tblv.y < 1.0 \t? blv.y : (blv.y - 1.0 ));","\ttv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  \ttv.y  >= 0.0 \t?  tv.y : (1.0  +  tv.y));","\ttv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 \t?  tv.y : ( tv.y - 1.0 ));","\tbv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  \tbv.y  >= 0.0 \t?  bv.y : (1.0  +  bv.y));","\tbv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 \t?  bv.y : ( bv.y - 1.0 ));","\ttrv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), \ttrv.y >= 0.0 \t? trv.y : (1.0  + trv.y));","\ttrv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), \ttrv.y < 1.0   \t? trv.y : (trv.y - 1.0 ));","\trv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  \trv.y  >= 0.0 \t?  rv.y : (1.0  +  rv.y));","\trv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   \t?  rv.y : ( rv.y - 1.0 ));","\tbrv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), \tbrv.y >= 0.0 \t? brv.y : (1.0  + brv.y));","\tbrv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), \tbrv.y < 1.0   \t? brv.y : (brv.y - 1.0 ));","\tfloat tl = abs(texture2D(tHeightMap, tlv).r);","\tfloat l  = abs(texture2D(tHeightMap, lv ).r);","\tfloat bl = abs(texture2D(tHeightMap, blv).r);","\tfloat t  = abs(texture2D(tHeightMap, tv ).r);","\tfloat b  = abs(texture2D(tHeightMap, bv ).r);","\tfloat tr = abs(texture2D(tHeightMap, trv).r);","\tfloat r  = abs(texture2D(tHeightMap, rv ).r);","\tfloat br = abs(texture2D(tHeightMap, brv).r);","   float dx = 0.0, dy = 0.0;","   if(type == 0){","\t\tdx = tl + l*2.0 + bl - tr - r*2.0 - br;","\t\tdy = tl + t*2.0 + tr - bl - b*2.0 - br;","   }","   else{","\t\tdx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;","\t\tdy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;","   }","\tvec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);","\tgl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);","}"].join("\n")},xa="sobel",ja=()=>({invertedRed:!1,invertedGreen:!1,invertedSource:!1,blurSharp:0,strength:1,level:8.5,type:xa});class Oa{constructor(e,t){this.renderer=void 0,this.effectComposer=void 0,this.normalMapUniform=void 0,this.material=void 0,this.option=void 0,this.canvas=void 0,this.gaussianShaderX=void 0,this.gaussianShaderY=void 0,this.canvas=t,this.option={...ja(),...e},this.init()}apply(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:a,height:r}=e,n=this.getTexture(e);this.normalMapUniform.tHeightMap.value=n,this.normalMapUniform.dimensions.value=[a,r,0],this.renderer.setSize(a,r),this.effectComposer.setSize(a,r),this.effectComposer.reset(this.getRenderTarget(a,r));const{invertedRed:i,invertedGreen:l,invertedSource:o,blurSharp:s,strength:c,level:d,type:u}={...this.option,...t};this.invertRed(i),this.invertGreen(l),this.invertSource(o),this.setBlurSharp(s,a,r),this.setStrengthAndLevel(c,d),this.setType(u),this.effectComposer.render(1/60)}init(){const e=new ba.h(-.5,.5,.5,-.5,0,1),t=new ba.k,a=new ha.a(t,e);this.renderer=new ba.q({alpha:!0,antialias:!0,canvas:this.canvas}),this.renderer.setClearColor(0,0),this.normalMapUniform=ba.n.clone(ya.uniforms),this.material=new ba.l({fragmentShader:ya.fragmentShader,vertexShader:ya.vertexShader,uniforms:this.normalMapUniform}),this.material.transparent=!0;const r=new ba.i(1,1,1,1),n=new ba.f(r,this.material);t.add(n),this.gaussianShaderY=new ga.a(va),this.gaussianShaderX=new ga.a(fa),this.gaussianShaderX.renderToScreen=!0,this.effectComposer=new pa.a(this.renderer,this.getRenderTarget()),this.effectComposer.addPass(a),this.effectComposer.addPass(this.gaussianShaderY),this.effectComposer.addPass(this.gaussianShaderX)}getRenderTarget(e,t){return new ba.p(e,t,{minFilter:ba.g,magFilter:ba.g,format:ba.j,stencilBuffer:!1})}getTexture(e){const t=new ba.m(e);return t.wrapS=t.wrapT=ba.b,t.minFilter=t.magFilter=ba.g,t.anisotropy=2,t.needsUpdate=!0,t}invertRed(e){this.normalMapUniform.invertR.value=e?-1:1}invertGreen(e){this.normalMapUniform.invertG.value=e?-1:1}invertSource(e){this.normalMapUniform.invertH.value=e?-1:1}setBlurSharp(e,t,a){this.gaussianShaderY.uniforms.v.value=e/t/5,this.gaussianShaderX.uniforms.h.value=e/a/5}setStrengthAndLevel(e,t){this.normalMapUniform.dz.value=1/e*(1+Math.pow(2,t))}setType(e){this.normalMapUniform.type.value="sobel"===e?0:1}}const wa=(e,t)=>{const a=(e+90)*Math.PI/180,r=(t+90)*Math.PI/180,n=Math.cos(a)*Math.cos(r),i=Math.sin(a)*Math.cos(r),l=Math.sin(r);return[Math.round(100*n)/100,Math.round(100*i)/100,Math.round(100*l)/100]},ka=e=>{let{inputCanvas:t,affectedHeight:a,affectedWidth:r,maxHeight:n=8,lightColorVec:i=[255,255,255],lightAngleVec:l,lightPitch:o,lightYaw:s,minIntensity:c=-1,maxIntensity:d=1}=e;const u=t.getContext("2d");if(!u)return;const m=null!==a&&void 0!==a?a:t.height,b=null!==r&&void 0!==r?r:t.width,p=u.getImageData(0,0,b,m,{willReadFrequently:!0}).data,h=l||("number"===typeof o&&"number"===typeof s?wa(o,s):[1,0,0]),g=Math.sqrt(h[0]**2+h[1]**2+h[2]**2),f=[h[0]/g,h[1]/g,h[2]/g];if(p)try{const e=new Uint8ClampedArray(b*m);for(let n=0;n<p.length;n+=4)p[n]||p[n+1]||p[n+2]||p[n+3]?e[n/4]=0:e[n/4]=1;const t=ca(Jt()(e,[m,b])),a=t.shape[0],r=t.shape[1],l=new Uint8ClampedArray(b*m*4),o=Math.floor(255/n);for(let n=0;n<a;n++)for(let e=0;e<r;e++){const a=4*(n*b+e),r=t.get(n,e);l[a]=r*o,l[a+1]=r*o,l[a+2]=r*o,l[a+3]=0===r?0:255}const s=document.createElement("canvas");s.width=b,s.height=m,s.getContext("2d").putImageData(new ImageData(l,b,m),0,0);const u=document.createElement("canvas");u.width=b,u.height=m;new Oa(ja(),u).apply(s,{blurSharp:0,level:9,strength:2.5,invertedRed:!1,invertedGreen:!1,invertedSource:!0,type:xa});const h=document.createElement("canvas");h.width=b,h.height=m;const g=h.getContext("2d");g.drawImage(u,0,0,b,m);const v=((e,t,a,r,n,i)=>{const l=new Uint8ClampedArray(t*a*4),o=Math.floor(r/2);function s(e,t,a,r){return Math.exp(-((e-a)**2+(t-r)**2)/(2*i**2))}function c(e,t){return Math.exp(-((e-t)**2)/(2*n**2))}for(let d=0;d<a;d++)for(let r=0;r<t;r++){let n=0,i=0,u=0,m=0;for(let l=-o;l<=o;l++)for(let b=-o;b<=o;b++){const o=r+b,p=d+l;if(o>=0&&p>=0&&o<t&&p<a){const a=4*(d*t+r),l=4*(p*t+o),b=e[a],h=e[a+1],g=e[a+2],f=e[l],v=e[l+1],y=e[l+2],x=s(o,p,r,d)*c(b,f)*c(h,v)*c(g,y);n+=f*x,i+=v*x,u+=y*x,m+=x}}const b=4*(d*t+r);l[b]=n/m,l[b+1]=i/m,l[b+2]=u/m,l[b+3]=e[b+3]}return l})(g.getImageData(0,0,b,m).data,b,m,9,70,20),y=new Uint8ClampedArray(b*m*4);for(let n=0;n<p.length;n+=4){let e=v[n]/127.5-1,t=v[n+1]/127.5-1,a=v[n+2]/127.5-1;const r=(e*f[0]+t*f[1]+a*f[2])/2*(Math.abs(c)+Math.abs(d)),l=Math.max(c,Math.min(r,d));y[n]=Math.round(p[n]+i[0]*l),y[n+1]=Math.round(p[n+1]+i[1]*l),y[n+2]=Math.round(p[n+2]+i[2]*l),y[n+3]=p[n+3]}return new ImageData(y,b,m)}catch(v){return console.error("Could not apply emboss effect",v),null}},Sa=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(r=>{setTimeout(()=>{if(e.current&&t)try{e.current.toBlob(e=>{if(e){const a=URL.createObjectURL(e);if(a){const e=new Image;e.src=a,e.onload=()=>{t.drawImage(e,0,0),URL.revokeObjectURL(a),r(!0)},e.onerror=()=>{URL.revokeObjectURL(a),r(!1)}}else r(!1)}else r(!1)})}catch(a){t.drawImage(e.current,0,0),console.error(a),r(!1)}else r(!1)},25*a)})},Fa=e=>"speed-skill"===e.frame&&!Ca(e),Ca=e=>"spell"!==e.frame&&"trap"!==e.frame&&"speed-skill"!==e.frame,La=e=>"spell"===e||"trap"===e?"st":"xyz"===e?"rank":"dark-synchro"===e?"negative-level":"speed-skill"===e||"link"===e||"lg-dragon"===e?"none":"level",Na=e=>!Ca({frame:e})||Ra(e),Ta=e=>["xyz","dark-synchro","speed-skill","hamon","uria","raviel"].includes(e),Ra=e=>["link"].includes(e)||Ta(e),Ia=(e,t)=>{let a=!1;switch(e){case 1:a=!0;break;case 2:a=!1;break;case 0:a=t}return a},Ba=(e,t)=>{var a,r,n,i,l;const{frame:o,topLeftFrame:s,topRightFrame:c,bottomLeftFrame:d,bottomRightFrame:u,effectBackground:m,pendulumEffectBackground:b}=e,p=null!==o&&void 0!==o?o:"effect",h="auto"===s?p:s,g=null!==(r="auto"===d?t?"spell":h:d)&&void 0!==r?r:p;return{topLeftFrame:h,topRightFrame:null!==(a="auto"===c?h:c)&&void 0!==a?a:p,bottomLeftFrame:g,bottomRightFrame:null!==(n="auto"===u?g:u)&&void 0!==n?n:p,effectBackground:null!==(i="auto"===m?g:m)&&void 0!==i?i:p,pendulumEffectBackground:null!==(l="auto"===b?g:b)&&void 0!==l?l:p}},za=e=>{var t,a;let{format:r,frame:n,nameStyle:i,nameStyleType:l,foil:o}=e;const s=Fa({frame:n});let c=i.font;if(c===H&&"ocg"===r&&(c="OCG"),c===H&&"tcg"===r&&(c="Default"),c===H&&s&&"tcg"===r&&(c="Arial"),"custom"===l)return{...i,font:c};const d=Na(n);let u={fillStyle:d?"#ffffff":"#000000",headTextFillStyle:d?"#ffffff":"#000000"};if("predefined"===l){var m,b;const e={...K[null!==(m=i.preset)&&void 0!==m?m:"commonB"].value};return K[null!==(b=e.preset)&&void 0!==b?b:"commonB"].value.font||(e.font=c),{...u,...e}}let p=s?{hasOutline:!0,lineWidth:6,strokeStyle:"#000"}:{};const h="normal"!==o&&null!==(t=null===(a=K[o])||void 0===a?void 0:a.value)&&void 0!==t?t:{},g="zarc"===n?K.animeGold.value:{};return{font:c,...u,...p,...h,...g}};var Ea=a(614),Da=a(601);const Ma=e=>{var t=(e=e.substring(0,e.length-1)).split("\x01");if(e=t[0],1<t.length){t=t[1];for(let a of t)e=(e=e.split(a)).join(e.pop())}return Wa(e,0)},Wa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>e.replace(new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g"),e=>e===t[0]?t[1]:t[0]);if(t)for(t=0;t<a.length;++t)e=r(e,a[t]);else for(t=a.length;t--;)e=r(e,a[t]);return e},Aa={version:"ve",format:"fm",region:"rg",frame:"fr",rightFrame:"rf",leftFrame:"lf",pendulumRightFrame:"rpf",foil:"fo",opacity:{_newKey:"op",body:"opbd",pendulum:"oppd",name:"opnm",text:"optx",boundless:"opbl",artFrame:"opaf",artBorder:"opab",nameBorder:"opnb",baseFill:"opbf"},finish:"fn",otherFinish:"of",art:"ar",artData:"ad",artFit:"af",artSource:"as",artFinish:"afn",artCrop:{_newKey:"arc",x:"arx",y:"ary",width:"arw",height:"arh",unit:"aru",aspect:"ara"},hasBackground:"hbg",background:"bg",backgroundFit:"bf",backgroundData:"bgd",backgroundSource:"bgs",backgroundType:"bgt",backgroundCrop:{_newKey:"bgc",x:"bgx",y:"bgy",width:"bgw",height:"bgh",unit:"bgu",aspect:"bga"},name:"na",nameStyleType:"nst",effectStyle:{_newKey:"es",condenseTolerant:"cdtl",fontStyle:"efs",upSize:"eus",background:"ebg",minLine:"eml"},pendulumStyle:{_newKey:"ps",fontStyle:"pfs",upSize:"pus",background:"pbg",minLine:"pml"},nameStyle:{_newKey:"ns",embossPitch:"nsep",embossThickness:"nset",embossYaw:"nsey",fillStyle:"nsfs",font:"nsft",gradientAngle:"nsgd",gradientColor:"nscg",hasEmboss:"nshe",hasGradient:"nshg",hasOutline:"nshl",hasShadow:"nshs",headTextFillStyle:"nshfs",lineColor:"nslc",lineOffsetX:"nslox",lineOffsetY:"nsloy",lineWidth:"nslw",pattern:"nspt",preset:"nspr",shadowBlur:"nssb",shadowColor:"nssc",shadowOffsetX:"nssox",shadowOffsetY:"nssoy"},attribute:"at",subFamily:"sf",starList:"stl",star:"st",starAlignment:"sa",cardIcon:"it",linkMap:"lm",linkRating:"lr",isLink:"il",isPendulum:"ip",pendulumFrame:"pf",pendulumEffect:"pe",pendulumScaleRed:"rs",pendulumScaleBlue:"bs",pendulumSize:"psi",typeAbility:"ta",effect:"ef",setId:"si",atk:"atk",def:"def",password:"pw",sticker:"sti",isFirstEdition:"ife",isSpeedCard:"isp",isDuelTerminalCard:"idt",isLimitedEdition:"ile",isLegacyCard:"ilc",creator:"cr",furiganaHelper:"fh",effectTextStyle:"ets",pendulumTextStyle:"pts",statTextStyle:"sts",typeTextStyle:"tts",otherTextStyle:"ots",dyeList:"dl",flag:"fl",externalInfo:"ei",passcode:"pc",picture:"pt",pictureCrop:{_newKey:"ptc",x:"ptx",y:"pty",width:"ptw",height:"pth",unit:"ptu",aspect:"pta"}},Ha=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Aa;const a={},r={...e};return Object.keys(r).forEach(e=>{const n=r[e];if("object"!==typeof n||null===n||Array.isArray(n)){const r=t[e];"string"===typeof r&&(a[r]=n)}else{var i;const r=null===(i=t[e])||void 0===i?void 0:i._newKey;r&&(a[r]=Ha(n,t[e]))}}),a},Pa=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Aa;const a={};return Object.keys(t).forEach(r=>{const n=t[r];if("object"!==typeof n||null===n||Array.isArray(n))null!=e[n]&&(a[r]=e[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&e[i]&&(a[r]=Pa(e[i],t[r]))}}),a},$a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Aa;const a="string"===typeof e?JSON.parse(Ma(decodeURIComponent(e))):e,r={};return Object.keys(t).forEach(e=>{const n=t[e];if("object"!==typeof n||null===n||Array.isArray(n))null!=a[n]&&(r[e]=a[n]);else{const i=null===n||void 0===n?void 0:n._newKey;i&&a[i]&&(r[e]=$a(a[i],t[e]))}}),r},Ka=function(e){var t,a,r,n,i,l;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:At();delete o.version;const s={id:Object(V.a)(),...o,...Object(Ea.a)(e)};if(s.effectStyle={...At().effectStyle,...s.effectStyle},null==s.pendulumStyle?s.pendulumStyle={...At().pendulumStyle}:s.pendulumStyle={...At().pendulumStyle,...s.pendulumStyle},null==s.version&&(s.version=1),null==s.format&&(s.format="tcg"),null==e.region&&(s.region=F["tcg"===s.format?"en":"jp"].key),null==s.pendulumFrame&&(s.pendulumFrame="auto"),null==s.pendulumSize&&(s.pendulumSize="medium"),null==s.rightFrame&&(s.rightFrame="auto"),null==s.leftFrame&&(s.leftFrame="auto"),null==s.pendulumRightFrame&&(s.pendulumRightFrame="auto"),null==s.finish&&(s.finish=[]),Array.isArray(s.starList)||(s.starList=[]),null==s.artFinish&&(s.artFinish="normal"),s.finish){const e=s.finish;e.includes("art")&&(s.finish=e.filter(e=>"art"!==e),s.otherFinish=[s.artFinish,s.artFinish,s.artFinish,s.artFinish])}!Array.isArray(s.otherFinish)||3!==s.otherFinish.length&&null!=s.otherFinish[3]||(s.otherFinish[3]=At().otherFinish[3]),s.picture&&!e.art&&(s.art=s.picture),delete s.picture,s.pictureCrop&&!e.artCrop&&(s.artCrop=s.pictureCrop),delete s.pictureCrop,""===(null!==(t=s.art)&&void 0!==t?t:"")&&(s.art=""),""===(null!==(a=s.artData)&&void 0!==a?a:"")&&(s.artData=""),""===(null!==(r=s.artSource)&&void 0!==r?r:"")&&(s.artSource="online"),null==s.artFit&&(s.artFit=!1),"boolean"===typeof s.opacity.artFrame&&null==s.opacity.boundless&&(s.opacity.boundless=!s.opacity.artFrame,delete s.opacity.artFrame),s.opacity={...d(),...s.opacity},delete s.opacity.artFrame,""===(null!==(n=s.background)&&void 0!==n?n:"")&&(s.background=""),""===(null!==(i=s.backgroundData)&&void 0!==i?i:"")&&(s.backgroundData=""),""===(null!==(l=s.backgroundSource)&&void 0!==l?l:"")&&(s.backgroundSource="online"),null==s.backgroundFit&&(s.backgroundFit=!1),null==s.hasBackground&&(s.background||s.backgroundData||s.opacity.baseFill)&&(s.hasBackground=!0),s.backgroundCrop={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1,...s.backgroundCrop},null==s.isLink&&"link"===s.frame&&(s.isLink=!0),null==s.linkRating&&(s.linkRating=""),s.kanjiHelper&&!e.furiganaHelper&&(s.furiganaHelper=s.kanjiHelper),delete s.kanjiHelper,void 0===s.furiganaHelper&&(s.furiganaHelper=!0),s.passcode&&!e.password&&(s.password=s.passcode),delete s.passcode,s.effectTextStyle||(s.effectTextStyle=[!1,"#000000",!1,"#000000"]),s.pendulumTextStyle||(s.pendulumTextStyle=[!1,"#000000",!1,"#000000"]),s.typeTextStyle||(s.typeTextStyle=[!1,"#000000",!1,"#000000"]),s.statTextStyle||(s.statTextStyle=[!1,"#000000",!1,"#000000"]),s.otherTextStyle||(s.otherTextStyle=[!1,"#000000",!1,"#000000"]),"undefined"===typeof s.isLimitedEdition&&(s.isLimitedEdition=!1),"undefined"===typeof s.isLegacyCard&&(s.isLegacyCard=!1),s.starAlignment||(s.starAlignment="auto");const c=[0,0];if(Array.isArray(s.flag)){if(s.flag.length<c.length){const e=[...s.flag];s.flag=c.map((t,a)=>"number"===typeof e[a]?e[a]:t)}}else s.flag=c;const u=["","","","","","",""];if(Array.isArray(s.dyeList)){if(s.dyeList.length<u.length){const e=[...s.dyeList];s.dyeList=u.map((t,a)=>"string"===typeof e[a]?e[a]:t)}}else s.dyeList=u;if(0===s.version||1===s.version){s.version=2;const{pendulumFrame:e,isPendulum:t,atk:a,def:r,isLink:n,linkMap:i,frame:l}=s,o=Ca({frame:l});("auto"!==e||t?!!(a||r||n&&i.length):o)||(s.atk="",s.def="")}if(2===s.version){s.version=3;const e=s.nameStyle.font;"Default"!==e&&"OCG"!==e||(s.nameStyle.font="Auto")}return s},Ua=e=>{try{return"isFirstEdition"in e&&"typeAbility"in e&&"setId"in e}catch(t){return console.error(t),!1}},Ya=e=>{try{return"ife"in e&&"ta"in e&&"si"in e}catch(t){return console.error(t),!1}},Ga=(e,t)=>{if("offline"===e.artSource||e.hasBackground&&"offline"===e.backgroundSource)return{isPartial:!0,result:Ha(e)};const a={...e,artData:"",backgroundData:""};return{isPartial:!1,result:Ha(a)}},Va=(e,t)=>typeof e===typeof t&&("number"===typeof e&&"number"===typeof t?Math.abs(e-t)<=.1:e===t),Xa=(e,t)=>{const{aspect:a,height:r,width:n,x:i,y:l,unit:o}=null!==e&&void 0!==e?e:{},{aspect:s,height:c,width:d,x:u,y:m,unit:b}=null!==t&&void 0!==t?t:{};return Va(a,s)&&Va(r,c)&&Va(n,d)&&Va(i,u)&&Va(l,m)&&o===b},qa=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},Ja=e=>{try{return e.replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g,"$1").replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm,"$2")}catch(t){return console.error(t),e}},_a=(e,t,a)=>{const r=document.createElement("a"),n=window.URL.createObjectURL(t);r.download=e,r.href=n,r.dataset.downloadurl=[a,r.download,r.href].join(":");const i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(i),r.remove(),window.URL.revokeObjectURL(n)};const Qa={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-play",RITUAL:"Ritual",[L]:"None"},Za=Object.entries(Qa).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),er={large:"Large",medium:"Normal",small:"Small"},tr=Object.entries(er).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),ar={EARTH:"Earth",LIGHT:"Light",DARK:"Dark",FIRE:"Fire",WIND:"Wind",WATER:"Water",SPELL:"Spell",TRAP:"Trap",DIVINE:"Divine"},rr=Object.entries(ar).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),nr={normal:"Normal",effect:"Effect",ritual:"Ritual",fusion:"Fusion",synchro:"Synchro",xyz:"Xyz",link:"Link",token:"Token",spell:"Spell",trap:"Trap","dark-synchro":"Dark Synchro",zarc:"Unity","speed-skill":"Skill"},ir=Object.entries(nr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),lr={common:{key:""},rare:{key:"rare--",text:"rare"},secret:{key:"secretGradient-type3-",text:"secretGradient",artFinish:"type3"},ultra:{key:"ultra-type3-",text:"ultra",artFinish:"type3"},rainbow:{key:"platinum-type1-type1",text:"platinum",artFinish:"type1",finish:["type1"]}},or=Object.entries(lr).reduce((e,t)=>{const[a,r]=t;return e[r.key]=a,e},{}),sr=(e,t)=>{const{name:a,star:r,typeAbility:n,subFamily:i,effect:l,atk:o,def:s,art:c,artData:d,artSource:u,password:m,creator:b,attribute:p,setId:h,pendulumEffect:g,pendulumScaleBlue:f,pendulumScaleRed:v,pendulumSize:y,isPendulum:x,linkMap:j,frame:O,externalInfo:w,nameStyle:k,nameStyleType:S,artFinish:F,finish:C}=e,L=qa(a),N=Ja(l),T=Ja(g),R=Qa[i],I=ar[p],B=nr[O],z="predefined"===S?or[[k.preset,F,C.join("|")].join("-")]:"common",{pendulum:E,rarity:D,...M}=null!==w&&void 0!==w?w:{};return{isPartial:a!==L||l!==N||g!==T||void 0===R||void 0===I||void 0===B||void 0===z,result:{version:"1.0.0",name:L,level:`${r}`,type:n.join("/"),icon:null!==R&&void 0!==R?R:"",effect:N,atk:o,def:s,serial:m,copyright:b,attribute:null!==I&&void 0!==I?I:"None",id:h,pendulum:{enabled:x,effect:T,blue:f,red:v,boxSize:er[y],boxSizeEnabled:!0,...E},variant:"Normal",link:{topLeft:!!j.includes("1"),topCenter:!!j.includes("2"),topRight:!!j.includes("3"),middleLeft:!!j.includes("4"),middleRight:!!j.includes("6"),bottomLeft:!!j.includes("7"),bottomCenter:!!j.includes("8"),bottomRight:!!j.includes("9")},layout:null!==B&&void 0!==B?B:"Normal",boxSize:"large"===y?"Small":"Normal",rarity:null!==z&&void 0!==z?z:D,image:t?t.toDataURL("image/jpeg"):"offline"===u?d:c,...M}}},cr={CONTINUOUS:"Continuous",COUNTER:"Counter",EQUIP:"Equip",FIELD:"Field","QUICK-PLAY":"Quick-Play",RITUAL:"Ritual",[L]:"None"},dr=Object.entries(cr).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),ur=Object.entries({EARTH:"EARTH",LIGHT:"LIGHT",DARK:"DARK",FIRE:"FIRE",WIND:"WIND",WATER:"WATER",SPELL:"SPELL",TRAP:"TRAP",DIVINE:"DIVINE"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),mr=Object.entries({normal:"normal",effect:"effect",ritual:"ritual",fusion:"fusion",synchro:"synchro",xyz:"xyz",link:"link",token:"token",spell:"spell",trap:"trap","speed-skill":"skill",normal_pendulum:"normal_pendulum",effect_pendulum:"effect_pendulum",ritual_pendulum:"ritual_pendulum",fusion_pendulum:"fusion_pendulum",synchro_pendulum:"synchro_pendulum",xyz_pendulum:"xyz_pendulum"}).reduce((e,t)=>{const[a,r]=t;return e[r]=a,e},{}),br={"Top-Left":"1",Top:"2","Top-Right":"3",Left:"4",Right:"6","Bottom-Left":"7",Bottom:"8","Bottom-Right":"9"},pr=e=>{var t,a,r;const{atk:n,attribute:i,card_images:l,card_sets:o,def:s,desc:c,frameType:d,id:u,level:m,monster_desc:b,name:p,pend_desc:h,race:g,scale:f,typeline:v,linkval:y,linkmarkers:x}=e,j=dr[g],O=ur[i],[k,S]=mr[d].split("_"),F=null!==(t=b?b.replaceAll(/^''|''$/g,""):void 0)&&void 0!==t?t:c?c.replaceAll(/^''|''$/g,""):"",C=F.split("\n"),N=(e=>["fusion","synchro","xyz","link","dark-synchro","zarc"].includes(e.frame))({frame:null!==k&&void 0!==k?k:"normal"})&&C.length>1?[`[${C[0].replaceAll("\r","")}]`,...C.slice(1)].join("\n"):F,T=h?h.replaceAll(/^''|''$/g,""):"",R=l[0].image_url_cropped,I=At();return{isPartial:!1,result:{...I,name:p,atk:n<0||null==n?"?":`${n}`,def:s?s<0||null==s?"?":`${s}`:"0",attribute:null!==O&&void 0!==O?O:w,effect:N,subFamily:null!==j&&void 0!==j?j:L,setId:null!==(a=null===(r=o[o.length-1])||void 0===r?void 0:r.set_code)&&void 0!==a?a:"",frame:null!==k&&void 0!==k?k:"normal",star:"link"===d&&y?y:m,typeAbility:v||("spell"===d?["Spell Card"]:"trap"===d?["Trap Card"]:[]),art:R,artSource:"online",artCrop:{...I.artCrop,y:0},isLink:"link"===k&&Array.isArray(x),linkMap:(null!==x&&void 0!==x?x:[]).map(e=>br[e]),isPendulum:"pendulum"===S,pendulumScaleBlue:null==f?"0":`${f}`,pendulumScaleRed:null==f?"0":`${f}`,pendulumEffect:T,password:`${u}`.padStart(8,"0"),creator:Ne.tcg[0]}}},hr=/^#[a-fA-F0-9]{3}([a-fA-F0-9]{3})?$/,gr=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const i=e.replace("#","");let l=[0,0,0,1];var a,r,n;if(3===i.length||4===i.length)l=[parseInt(`${i[0]}${i[0]}`,16),parseInt(`${i[1]}${i[1]}`,16),parseInt(`${i[2]}${i[2]}`,16),parseInt(`${null!==(a=i[3])&&void 0!==a?a:"f"}${null!==(r=i[3])&&void 0!==r?r:"f"}`,16)];if(6===i.length||8===i.length)l=[parseInt(i.slice(0,2),16),parseInt(i.slice(2,4),16),parseInt(i.slice(4,6),16),parseInt(null!==(n=i.slice(6,8))&&void 0!==n?n:"ff",16)];return l.map(e=>isNaN(e)?255:e).slice(0,t?4:3)}catch(i){return[0,0,0,1].slice(0,t?4:3)}},fr=e=>{var t,a,r;return(299*(null!==(t=e[0])&&void 0!==t?t:0)+587*(null!==(a=e[1])&&void 0!==a?a:0)+114*(null!==(r=e[2])&&void 0!==r?r:0))/1e3>=128?"#000000":"#FFFFFF"},vr=1e3,yr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=vr;const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:vr,a=t,r=a,n=30,i=100;const l=()=>n=-1;return{reset:function(){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=l,a=l,n=30,i=100,r=l},searchDown:()=>(a-=i,n-=1,a),reverseSearch:()=>(1===i?l():(a+=i,i/=10,a-=i),Math.min(a,t)),finish:l,getMedian:()=>a,setMedian:e=>a=e,setLastEffective:function(){return r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a},getLastEffective:()=>r,applyLastEffective:()=>(a=r,n=-1,a),getIterateCount:()=>n}}();for(;r.getIterateCount()>=0;){if(r.getIterateCount()<=0){a=r.getMedian();break}if(!e(r.getMedian())&&r.getMedian()>0)r.searchDown();else{if(r.getMedian()===vr)break;a=r.reverseSearch()}}const n=Math.max(t,Math.min(a,vr));return n!==a&&e(n),n},xr=e=>{const{defaultWeight:t="",defaultStyle:a="",defaultSize:r="10px",defaultFamily:n="Arial"}=null!==e&&void 0!==e?e:{};let i=t,l=a,o="number"===typeof r?`${r}px`:r,s="number"===typeof r?r:parseFloat(r.replaceAll("px","")),c=n;return{getFont:()=>`${[l,i,o,c].filter(e=>""!==e).join(" ")}, Arial`,getFontInfo:()=>({style:l,size:o,family:c,sizeAsNumber:s,weight:i}),setWeight(e){return i=e,this},setStyle(e){return l=e,this},setSize(e){const t="function"===typeof e?e(s):e;return o="number"===typeof t?`${t}px`:t,s="number"===typeof t?t:parseFloat(t.replaceAll("px","")),this},setFamily(e){return c=e,this}}},jr=e=>{let{heightCap:t,lineCount:a}=e;return{bulletWidth:Math.round(t/a*.9),fontSize:t/a*.9,lineHeight:t/a,lineCount:a,bulletOffset:1}},Or=(e,t)=>({...e,fontList:[...e.fontList,jr(t)]}),wr=()=>Sr(P().gradientColor),kr=e=>(null!==e&&void 0!==e?e:[]).map(e=>{let{color:t,offset:a}=e;return`${a}|${t}`}).join(","),Sr=e=>e?e.split(",").map((e,t)=>{const[a,r]=e.split("|");return{color:r,offset:a,id:t+1}}):Sr(P().gradientColor),Fr=()=>{const[e,t]=Object(r.useState)(0);return[Object(r.useCallback)(()=>{t(e=>e+1)},[]),e]},Cr=e=>{let{debug:t,optionLength:a,stopPropagation:r=!1,setFocus:n,onTrigger:i,onCancel:l,onKeyPress:o}=e;return{tabIndex:0,onFocus:()=>{t&&console.info("Navigation Focus",t),n(0)},onBlur:()=>{t&&console.info("Navigation Blur",t),n(-1)},onKeyDown:e=>{r&&e.stopPropagation(),t&&console.info("Navigation Keydown",t,e.key),!1!==(null===o||void 0===o?void 0:o(e))&&("ArrowRight"===e.key||"ArrowDown"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e+1)%a)):"ArrowLeft"===e.key||"ArrowUp"===e.key?(e.preventDefault(),n(e=>Math.max(0,a+e-1)%a)):"Enter"===e.key||" "===e.key?i():"Escape"===e.key&&(null===l||void 0===l||l()))}}},Lr=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="";const r=e.length;for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*r));return a},Nr=(e,t)=>{const{trueBaseline:a,trueEdge:r,trueWidth:n,trueHeightCap:i}=e;return{...e,trueBaseline:a*t,trueEdge:r*t,trueWidth:n*t,trueHeightCap:"number"===typeof i?i*t:i}},Tr=(e,t)=>e.map(e=>e*t),Rr=(e,t)=>{const{allRightSymbolOffset:a,bulletOffset:r,bulletWidth:n,fontSize:i,headTextSpacing:l,iconSymbolWidth:o,lineHeight:s,offsetY:c,ordinalFontOffsetY:d,wordLetterSpacing:u}=e;return{...e,allRightSymbolOffset:"number"===typeof a?a*t:void 0,bulletOffset:"number"===typeof r?r*t:void 0,bulletWidth:n*t,fontSize:i*t,headTextSpacing:"number"===typeof l?l*t:void 0,iconSymbolWidth:"number"===typeof o?o*t:void 0,lineHeight:s*t,offsetY:"number"===typeof c?c*t:void 0,ordinalFontOffsetY:"number"===typeof d?d*t:void 0,wordLetterSpacing:"number"===typeof u?u*t:void 0}},Ir=(e,t)=>({...e,fontList:e.fontList.map(e=>Rr(e,t))}),Br=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".radio-train-input-group";null===(e=document.querySelector(t))||void 0===e||e.focus()};function zr(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var Er=a(602),Dr=a(326),Mr=a(117),Wr=a(4);const Ar=Wr.b.button`
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
`;var Hr=a(616),Pr=a(617),$r=a(618);const Kr=(e,t)=>{var a,r,n,i,l;const{creator:o,effect:s,format:c,region:d,isFirstEdition:u,name:m,password:b,pendulumEffect:p,setId:h,typeAbility:g}=e;if(c===t)return e;const f=F[d].category===t?d:F[C[t]].key,v="ocg"===t?Ie:Re,y="ocg"===t&&/-EN/.test(h)?h.replace("-EN","-JP"):"tcg"===t&&/-JP/.test(h)?h.replace("-JP","-EN"):h;return{...e,name:null!==(a=v[m])&&void 0!==a?a:m,format:t,region:f,effect:null!==(r=v[s])&&void 0!==r?r:s,pendulumEffect:null!==(n=v[p])&&void 0!==n?n:p,typeAbility:g.map(e=>{var t;return null!==(t=v[e])&&void 0!==t?t:e}),creator:null!==(i=v[o])&&void 0!==i?i:o,password:null!==(l=v[b])&&void 0!==l?l:b,setId:y,isFirstEdition:"ocg"!==t&&u}};var Ur=a(67);const Yr=Object(Ur.create)((e,t)=>({batchName:"",batch:void 0,batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1,startBatchDownload:(t,a)=>{e({batchName:t,batchQueue:a,isBatchDownloading:!0})},stopBatchDownload:()=>{e({batchName:"",batchQueue:[],batchDataMap:{},isBatchDownloading:!1,isReady:!1})},clearQueue:()=>{e({batchQueue:[]})},addToBatch:(t,a,r)=>{e(e=>{let{batchQueue:n,batchDataMap:i}=e;const l=n.filter(e=>e!==t),o={...i};return o[t]={name:a,blob:r},{batchQueue:l,batchDataMap:o,isReady:0===l.length}})}}));var Gr=a(111),Vr=a.n(Gr),Xr=a(291),qr=a.n(Xr);const Jr=function(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},...e.rawDictionary},a=e=>{var a;return null!==(a=t[e])&&void 0!==a?a:""},r=(e,t)=>{const a=new RegExp(`\\{(${Object.keys(t).join("|")})\\}`),r=e.split(a);return Object(O.jsx)(n.a.Fragment,{children:r.map((e,a)=>a%2===0?Object(O.jsx)(n.a.Fragment,{children:e},`${e}-${a}`):t[e])},e)},i={"error.load.font.tcg":e=>a("error.load.font.tcg").replaceAll("{familyName}",e),"error.load.font.ocg":e=>a("error.load.font.ocg").replaceAll("{familyName}",e),"error.max-size.description":e=>a("error.max-size.description").replaceAll("{fileSize}",`${e}`),"contributor.disclaimer.line-1":e=>r(a("contributor.disclaimer.line-1"),{siteLink:e}),"contributor.disclaimer.line-5":(e,t)=>r(a("contributor.disclaimer.line-5"),{author1:e,author2:t}),"contributor.template-maker":(e,t,n,i)=>r(a("contributor.template-maker"),{artist1:e,artist2:t,artist3:n,artist4:i}),"converter.header.warning.label":e=>r(a("converter.header.warning.label"),{maxAmount:e}),"guide.format.introduction":e=>r(a("guide.format.introduction"),{settingIcon:e}),"guide.format.section-1.content":(e,t,n,i)=>r(a("guide.format.section-1.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-2.content":(e,t,n,i)=>r(a("guide.format.section-2.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-3.content":(e,t,n)=>r(a("guide.format.section-3.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-4.content":(e,t,n)=>r(a("guide.format.section-4.content"),{separator:e,hotkey:t,hotkeyAlternative:n}),"guide.format.section-5.content":(e,t,n,i)=>r(a("guide.format.section-5.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"guide.format.section-6.content":(e,t,n,i)=>r(a("guide.format.section-6.content"),{openTag:e,closeTag:t,hotkey:n,hotkeyAlternative:i}),"input.name-style.emboss.color.alert":e=>r(a("input.name-style.emboss.color.alert"),{colorTab:e}),"input.scale.label":e=>r(a("input.scale.label"),{scaleType:e})};return{...e,rawDictionary:t,dictionary:{...t,...i}}},_r=Object(Ur.create)((e,t)=>{const a=(()=>{const e=new URL(window.location.href),t=e.searchParams,a=t.get("language");if(t.delete("language"),window.history.replaceState(window.history.state,"",e.href),a)return a;try{const e=localStorage.getItem("language");return e||"eng"}catch(r){return console.error("useSetting: Error when getting cached language",r),"eng"}})(),r={},n=Jr({name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1,rawDictionary:{}}),i=async e=>{if(r[e])return null;try{var t;const a=await fetch(`/ygocarder/asset/i18n/${e}.json`,{headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=await a.json();if(!n.rawDictionary)throw new Error("No dictionary found");const i=Jr(n,null===(t=r.eng)||void 0===t?void 0:t.rawDictionary);return r[e]=i,i}catch(a){return console.error("loadLanguage: Could not load language, revert back to default",a),null}},l=async a=>{const l=t().languageMetadataMap[a];if(!l)return;const o=r[a]?r[a]:await i(a);o?(e({languageInfo:t().languageMetadataMap[a],language:o.dictionary}),localStorage.setItem("language",a),e({isLoading:!1,languageInfo:l})):e({isLoading:!1,languageInfo:t().languageMetadataMap.eng,language:n.dictionary})};return{languageMetadataMap:{},languageInfo:{name:"Default",formalName:"Default",codeName:"def",initialMessage:"",order:1e3,active:!1},language:n.dictionary,error:null,isInitiating:!0,isLoading:!0,isMetadataReady:!1,initiate:async()=>{(async()=>{try{const t=await fetch("/ygocarder/asset/i18n/metadata.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}),a=await t.json();if(!a)throw new Error("No metadata found");e({languageMetadataMap:a,isMetadataReady:!0})}catch(t){console.error("loadLanguageMetadata: Could not load language metadata, try to use English",t),e({languageMetadataMap:{eng:{name:"English",formalName:"English",codeName:"eng",initialMessage:"Loading fonts and scripts\u2026",order:1,active:!0}},isMetadataReady:!0})}})()},loadDefaultLanguage:async()=>{await i("eng"),await l(a),e({isInitiating:!1})},loadLanguage:i,changeLanguage:l}}),Qr=()=>_r(e=>{let{language:t}=e;return t}),Zr=()=>_r.getState().language;var en=a(182);const tn=["Format","Frame","Name","Attribute","Star","Spell/Trap Icon","Art Link","Type Ability","Effect","Set Id","ATK","DEF","Password","Sticker","Copyright","Is Pendulum","Pendulum Effect","Pendulum Scale Red","Pendulum Scale Blue","Is Link","Link - Top Left Arrow","Link - Top Arrow","Link - Top Right Arrow","Link - Left Arrow","Link - Right Arrow","Link - Bottom Left Arrow","Link - Bottom Arrow","Link - Bottom Right Arrow","Is First Edition","Is Speed Card","Is Limited Edition","Is Duel Terminal Card","Is Legacy Card","Foil","Art Finish","Card Finish","Art Crop - X (%)","Art Crop - Y (%)","Art Crop - Width (%)","Art Crop - Height (%)","Is Using Full Art","Region","Star Type","Star Alignment","Card Icon Type","Link Rating","Opacity - Body","Opacity - Pendulum","Opacity - Text","Opacity - Name","Opacity - Base Fill","Opacity - Art Border","Opacity - Name Border","Opacity - Boundless","Has Background","Background Link","Is Using Full Background","Background Type","Background Crop - X (%)","Background Crop - Y (%)","Background Crop - Width (%)","Background Crop - Height (%)","Bottom Frame","Condense Rate","Use Furigana Helper","Name Style Type","Name Style - Font","Name Style - Fill Style","Name Style - Headtext Fill Style","Name Style - Shadow Color","Name Style - Shadow Offset Y","Name Style - Shadow Offset X","Name Style - Shadow Blur","Name Style - Has Shadow","Name Style - Line Color","Name Style - Line Width","Name Style - Line Offset Y","Name Style - Line Offset X","Name Style - Has Outline","Name Style - Gradient Angle","Name Style - Gradient Color","Name Style - Has Gradient","Name Style - Emboss Pitch","Name Style - Emboss Yaw","Name Style - Emboss Thickness","Name Style - Has Emboss","Name Style - Preset","Name Style - Pattern","Stat Style - Is Custom","Stat Style - Fill Color","Stat Style - Has Shadow","Stat Style - Shadow Color","Type Style - Is Custom","Type Style - Fill Color","Type Style - Has Shadow","Type Style - Shadow Color","Effect Style - Is Custom","Effect Style - Fill Color","Effect Style - Has Shadow","Effect Style - Shadow Color","Effect Style - Upsize","Effect Style - Font Style","Effect Style - Background","Effect Style - Min Line","Pendulum Size","Pendulum Effect Style - Is Custom","Pendulum Effect Style - Fill Color","Pendulum Effect Style - Has Shadow","Pendulum Effect Style - Shadow Color","Pendulum Effect Style - Upsize","Pendulum Effect Style - Font Style","Pendulum Effect Style - Background","Pendulum Effect Style - Min Line","Other Style - Is Custom","Other Style - Fill Color","Other Style - Has Shadow","Other Style - Shadow Color","Other Finish - Attribute","Other Finish - Background","Other Finish - Icon","Other Finish - Sticker","Left Frame","Right Frame","Bottom Right Frame","Dye List","Star List","Flag","External Info (JSON)"],an=[...tn,"Level/Rank","Star_Type","spell_type/trap_type","Type_1","Type_2","Type_3","Type_4","Set_ID","Borderless","Edition","Rarity","Background_Type","Card_Background","Font_Style","Art_Finish","Image_Frame_Type"],rn=e=>(null!==e&&void 0!==e?e:"").toLowerCase().replaceAll(" ","").replaceAll("-",""),nn=new Set(an.map(rn)),ln=tn.reduce((e,t,a)=>{const r=rn(t);return nn.has(r)&&(e[t]=a),e},{}),on=e=>null==e||""===e?"":`"${e.replace(/"/g,'""')}"`,sn=(e,t)=>{if("boolean"===typeof e)return e;if("string"===typeof e){const a=e.toLowerCase();return"true"===a||"false"!==a&&t}return t},cn=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseInt(e))?parseInt(e):t,dn=(e,t)=>"number"===typeof e?isFinite(e)?e:t:"string"===typeof e&&isFinite(parseFloat(e))?parseFloat(e):t,un=(e,t)=>"string"===typeof e?e.startsWith("#")?e:`#${e}`:t,mn=e=>{try{const t=e[0].reduce((e,t,a)=>{const r=rn(t);return nn.has(r)&&(e[t]=a),e},{});return e.map((e,a)=>{var r,n,i,l,o,s,c,u,b,p,h,g,f,y,x,j,O,k,S,F,C,L,N,T,R,I,B,z,E,D,M,W,H,$,K,U,Y,G,X,q,J,_,Q,Z,ee,ae,re,ne,ie,le,oe,se,ce,de,ue,me,be,pe;if(0===a)return null;if(""===e.join(""))return null;const he=At(),ge=((e,t)=>a=>{var r,n;const i=null!==(r=t[a])&&void 0!==r?r:-1,l=(null!==(n=e[i])&&void 0!==n?n:"").trim();return""===l?void 0:l})(e,t),fe=(null!==(r=null!==(n=ge("Frame"))&&void 0!==n?n:ge("Background_Type"))&&void 0!==r?r:he.frame).toLowerCase(),ve=(null!==(i=ge("Right Frame"))&&void 0!==i?i:he.rightFrame).toLowerCase(),ye=(null!==(l=ge("Left Frame"))&&void 0!==l?l:he.leftFrame).toLowerCase(),xe=(null!==(o=ge("Bottom Right Frame"))&&void 0!==o?o:he.pendulumRightFrame).toLowerCase(),je=null!==(s=null!==(c=ge("Star"))&&void 0!==c?c:ge("Level/Rank"))&&void 0!==s?s:"",Oe="text"===ge("Star Type")?je:parseInt(je)<=13&&parseInt(je)>=0&&"2"!==ge("Star_Type")?parseInt(je):je,we=(null!==(u=null!==(b=ge("Foil"))&&void 0!==b?b:ge("Rarity"))&&void 0!==u?u:"normal").toLowerCase(),ke=v[we]?we:"normal",Se=null===(p=ge("Attribute"))||void 0===p?void 0:p.toUpperCase(),Fe=Se?"NONE"===Se?w:Se:"spell"===fe?"SPELL":"trap"===fe?"TRAP":he.attribute,Ce=null!==(h=ge("Art Finish"))&&void 0!==h?h:ge("Art_Finish")?`type${ge("Art_Finish")}`:"",Le=null!==(g=ge("Other Finish - Attribute"))&&void 0!==g?g:"",Ne=null!==(f=ge("Other Finish - Sticker"))&&void 0!==f?f:"",Te=null!==(y=ge("Other Finish - Icon"))&&void 0!==y?y:"",Re=null!==(x=ge("Other Finish - Background"))&&void 0!==x?x:"",Ie=null!==(j=ge("ATK"))&&void 0!==j?j:"",Be=null!==(O=ge("Card Icon Type"))&&void 0!==O?O:he.cardIcon,ze=null!==(k=ge("Copyright"))&&void 0!==k?k:"",Ee=null!==(S=ge("DEF"))&&void 0!==S?S:"",De=null!==(F=ge("Effect"))&&void 0!==F?F:"",Me=null!==(C=null===(L=ge("Card Finish"))||void 0===L?void 0:L.split(/,| /).filter(e=>""!==e))&&void 0!==C?C:[],We=(null!==(N=ge("Format"))&&void 0!==N?N:he.format).toLowerCase(),Ae=(null!==(T=ge("Region"))&&void 0!==T?T:he.region).toLowerCase(),He=sn(ge("Use Furigana Helper"),he.furiganaHelper),Pe=null!==(R=ge("Name"))&&void 0!==R?R:"",$e=null!==(I=ge("Password"))&&void 0!==I?I:"",Ke=null!==(B=null!==(z=ge("Set Id"))&&void 0!==z?z:ge("Set_ID"))&&void 0!==B?B:"",Ue=(null!==(E=ge("Star Alignment"))&&void 0!==E?E:he.starAlignment).toLowerCase(),Ye=(null!==(D=ge("Sticker"))&&void 0!==D?D:he.sticker).toLowerCase(),Ge=(null!==(M=null!==(W=ge("Spell/Trap Icon"))&&void 0!==W?W:ge("spell_type/trap_type"))&&void 0!==M?M:he.subFamily).toUpperCase(),Ve=null===(H=ge("Edition"))||void 0===H?void 0:H.toLowerCase(),Xe=sn(ge("Is First Edition"),Ve?"1st edition"===Ve:he.isFirstEdition),qe=sn(ge("Is Duel Terminal Card"),Ve?"duel terminal"===Ve:he.isDuelTerminalCard),Je=sn(ge("Is Limited Edition"),Ve?"limited edition"===Ve:he.isLimitedEdition),_e=sn(ge("Is Speed Card"),Ve?"speed duel"===Ve:he.isSpeedCard),Qe=sn(ge("Is Legacy Card"),he.isLegacyCard),Ze=sn(ge("Is Pendulum"),he.isPendulum),et=(null!==($=ge("Bottom Frame"))&&void 0!==$?$:he.pendulumFrame).toLowerCase(),tt=null!==(K=ge("Pendulum Effect"))&&void 0!==K?K:"",at=null!==(U=ge("Pendulum Scale Red"))&&void 0!==U?U:"",rt=null!==(Y=ge("Pendulum Scale Blue"))&&void 0!==Y?Y:"",nt=null!==(G=ge("Pendulum Size"))&&void 0!==G?G:"medium",it=ge("Type Ability"),lt=it?it.split("/"):[ge("Type_1"),ge("Type_2"),ge("Type_3"),ge("Type_4")].filter(e=>"string"===typeof e&&""!==e),ot=(null!==(X=ge("Condense Rate"))&&void 0!==X?X:he.effectStyle.condenseTolerant).toLowerCase(),st=cn(ge("Effect Style - Upsize"),he.effectStyle.upSize),ct=cn(ge("Pendulum Effect Style - Upsize"),he.pendulumStyle.upSize),dt=(null!==(q=ge("Effect Style - Font Style"))&&void 0!==q?q:he.effectStyle.fontStyle).toLowerCase(),ut=(null!==(J=ge("Pendulum Effect Style - Font Style"))&&void 0!==J?J:he.pendulumStyle.fontStyle).toLowerCase(),mt=(null!==(_=ge("Effect Style - Background"))&&void 0!==_?_:he.effectStyle.background).toLowerCase(),bt=(null!==(Q=ge("Pendulum Effect Style - Background"))&&void 0!==Q?Q:he.pendulumStyle.background).toLowerCase(),pt=cn(ge("Effect Style - Min Line"),he.effectStyle.minLine),ht=cn(ge("Pendulum Effect Style - Min Line"),he.pendulumStyle.minLine),gt=d(),ft={artBorder:sn(ge("Opacity - Art Border"),gt.artBorder),baseFill:null!==(Z=ge("Opacity - Base Fill"))&&void 0!==Z?Z:gt.baseFill,body:cn(ge("Opacity - Body"),gt.body),boundless:sn(ge("Opacity - Boundless"),gt.boundless),name:cn(ge("Opacity - Name"),gt.name),nameBorder:sn(ge("Opacity - Name Border"),gt.nameBorder),pendulum:cn(ge("Opacity - Pendulum"),gt.pendulum),text:cn(ge("Opacity - Text"),gt.text)},vt={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},yt=null!==(ee=ge("Art Link"))&&void 0!==ee?ee:he.art,xt=sn(ge("Is Using Full Art"),he.artFit),jt={aspect:m(Ze,ft,void 0,nt).ratio,height:dn(ge("Art Crop - Height (%)"),vt.height),width:dn(ge("Art Crop - Width (%)"),vt.width),x:dn(ge("Art Crop - X (%)"),vt.x),y:dn(ge("Art Crop - Y (%)"),vt.y),unit:"%"},Ot={x:0,y:4,width:100,height:89.5,unit:"%",aspect:1},wt=sn(ge("Has Background"),he.hasBackground),kt=null!==(ae=ge("Background Link"))&&void 0!==ae?ae:he.background,St=(null!==(re=ge("Background Type"))&&void 0!==re?re:he.backgroundType).toLowerCase(),Ft=sn(ge("Is Using Full Background"),he.backgroundFit),Ct={aspect:m(Ze,ft,St,nt).ratio,height:dn(ge("Background Crop - Height (%)"),Ot.height),width:dn(ge("Background Crop - Width (%)"),Ot.width),x:dn(ge("Background Crop - X (%)"),Ot.x),y:dn(ge("Background Crop - Y (%)"),Ot.y),unit:"%"},Lt=P(),Nt=(null!==(ne=ge("Name Style Type"))&&void 0!==ne?ne:he.nameStyleType).toLowerCase(),Tt={embossPitch:cn(ge("Name Style - Emboss Pitch"),Lt.embossPitch),embossYaw:cn(ge("Name Style - Emboss Yaw"),Lt.embossYaw),embossThickness:cn(ge("Name Style - Emboss Thickness"),Lt.embossThickness),fillStyle:un(ge("Name Style - Fill Style"),Lt.fillStyle),font:null!==(ie=ge("Name Style - Font"))&&void 0!==ie?ie:Lt.font,gradientAngle:cn(ge("Name Style - Gradient Angle"),Lt.gradientAngle),gradientColor:null!==(le=ge("Name Style - Gradient Color"))&&void 0!==le?le:Lt.gradientColor,hasEmboss:sn(ge("Name Style - Has Emboss"),Lt.hasEmboss),hasGradient:sn(ge("Name Style - Has Gradient"),Lt.hasGradient),hasOutline:sn(ge("Name Style - Has Outline"),Lt.hasOutline),hasShadow:sn(ge("Name Style - Has Shadow"),Lt.hasShadow),headTextFillStyle:un(ge("Name Style - Headtext Fill Style"),Lt.headTextFillStyle),lineColor:un(ge("Name Style - Line Color"),Lt.lineColor),lineOffsetX:cn(ge("Name Style - Line Offset X"),Lt.lineOffsetX),lineOffsetY:cn(ge("Name Style - Line Offset Y"),Lt.lineOffsetY),lineWidth:cn(ge("Name Style - Line Width"),Lt.lineWidth),pattern:null!==(oe=ge("Name Style - Pattern"))&&void 0!==oe?oe:Lt.pattern,preset:null!==(se=ge("Name Style - Preset"))&&void 0!==se?se:Lt.preset,shadowBlur:cn(ge("Name Style - Shadow Blur"),Lt.shadowBlur),shadowColor:un(ge("Name Style - Shadow Color"),Lt.shadowColor),shadowOffsetX:cn(ge("Name Style - Shadow Offset X"),Lt.shadowOffsetX),shadowOffsetY:cn(ge("Name Style - Shadow Offset Y"),Lt.shadowOffsetY)},Rt=sn(ge("Is Link"),null!==(ce=he.isLink)&&void 0!==ce?ce:"link"===fe),It=null!==(de=[sn(ge("Link - Top Left Arrow"),!1)?"1":"",sn(ge("Link - Top Arrow"),!1)?"2":"",sn(ge("Link - Top Right Arrow"),!1)?"3":"",sn(ge("Link - Left Arrow"),!1)?"4":"",sn(ge("Link - Right Arrow"),!1)?"6":"",sn(ge("Link - Bottom Left Arrow"),!1)?"7":"",sn(ge("Link - Bottom Arrow"),!1)?"8":"",sn(ge("Link - Bottom Right Arrow"),!1)?"9":""].filter(e=>""!==e))&&void 0!==de?de:[],Bt=null!==(ue=ge("Link Rating"))&&void 0!==ue?ue:"",zt=[!1,"#000000",!1,"#000000"],Et=[sn(ge("Stat Style - Is Custom"),zt[0]),un(ge("Stat Style - Fill Color"),zt[1]),sn(ge("Stat Style - Has Shadow"),zt[2]),un(ge("Stat Style - Shadow Color"),zt[3])],Dt=[sn(ge("Type Style - Is Custom"),zt[0]),un(ge("Type Style - Fill Color"),zt[1]),sn(ge("Type Style - Has Shadow"),zt[2]),un(ge("Type Style - Shadow Color"),zt[3])],Mt=[sn(ge("Effect Style - Is Custom"),zt[0]),un(ge("Effect Style - Fill Color"),zt[1]),sn(ge("Effect Style - Has Shadow"),zt[2]),un(ge("Effect Style - Shadow Color"),zt[3])],Wt=[sn(ge("Pendulum Effect Style - Is Custom"),zt[0]),un(ge("Pendulum Effect Style - Fill Color"),zt[1]),sn(ge("Pendulum Effect Style - Has Shadow"),zt[2]),un(ge("Pendulum Effect Style - Shadow Color"),zt[3])],Ht=[sn(ge("Other Style - Is Custom"),zt[0]),un(ge("Other Style - Fill Color"),zt[1]),sn(ge("Other Style - Has Shadow"),zt[2]),un(ge("Other Style - Shadow Color"),zt[3])];let Pt={};try{var $t;Pt=JSON.parse(null!==($t=ge("External Info (JSON)"))&&void 0!==$t?$t:"{}")}catch(Xt){console.error("csvToCardList",Xt)}const Kt=(null!==(me=ge("Flag"))&&void 0!==me?me:"").split("|").map(Number).slice(0,te),Ut=[0,0].map((e,t)=>"number"===typeof Kt[t]?Kt[t]:e),Yt=(null!==(be=ge("Dye List"))&&void 0!==be?be:"").split("|").map(String).slice(0,7),Gt=["","","","","","",""].map((e,t)=>"string"===typeof Yt[t]?Yt[t]:e),Vt=(null!==(pe=ge("Star List"))&&void 0!==pe?pe:"").split("|").map(String).slice(0,A);return{id:Object(V.a)(),...he,art:yt,artCrop:jt,artFinish:Ce,artFit:xt,artSource:"online",atk:Ie,attribute:Fe,background:kt,backgroundCrop:Ct,backgroundFit:Ft,backgroundSource:"online",backgroundType:St,cardIcon:Be,condenseTolerant:ot,creator:ze,def:Ee,dyeList:Gt,effect:De,effectStyle:{condenseTolerant:ot,upSize:st,fontStyle:dt,background:mt,minLine:pt},effectTextStyle:Mt,externalInfo:Pt,finish:Me,flag:Ut,foil:ke,format:We,frame:fe,furiganaHelper:He,hasBackground:wt,isDuelTerminalCard:qe,isFirstEdition:Xe,isLegacyCard:Qe,isLimitedEdition:Je,isLink:Rt,isPendulum:Ze,isSpeedCard:_e,leftFrame:ye,linkMap:It,linkRating:Bt,name:Pe,nameStyle:Tt,nameStyleType:Nt,opacity:ft,otherFinish:[Le,Te,Ne,Re],otherTextStyle:Ht,password:$e,pendulumEffect:tt,pendulumFrame:et,pendulumRightFrame:xe,pendulumScaleBlue:rt,pendulumScaleRed:at,pendulumSize:nt,pendulumStyle:{upSize:ct,fontStyle:ut,background:bt,minLine:ht},pendulumTextStyle:Wt,region:Ae,rightFrame:ve,setId:Ke,star:Oe,starList:Vt,starAlignment:Ue,statTextStyle:Et,sticker:Ye,subFamily:Ge,typeAbility:lt,typeTextStyle:Dt}}).filter(e=>null!=e)}catch(t){return console.error("csvToCardList",t),[]}},bn=(e,t)=>{const a="string"===typeof e?parseInt(e):e,r="string"===typeof t?parseInt(t):t,n=!!a&&isFinite(a),i=!!r&&isFinite(r);if(n&&!i)return-1;if(!n&&i)return 1;if(n&&i)return(null!==r&&void 0!==r?r:0)-(null!==a&&void 0!==a?a:0);const l="?"===e?1:""===e?-1:0,o="?"===t?1:""===t?-1:0;return o-l===0&&"string"===typeof e&&"string"===typeof t?(null!==e&&void 0!==e?e:"").localeCompare(t):o-l},pn=(e,t)=>e.name.localeCompare(t.name),hn=(e,t)=>e.setId.localeCompare(t.setId),gn=(e,t)=>bn(e.atk,t.atk),fn=(e,t)=>bn(e.def,t.def),vn=(e,t)=>e.isLink&&t.isLink?t.linkMap.length-e.linkMap.length:bn(e.star,t.star),yn=(e,t)=>{try{var a,r,n,i;const l=Be[t.frame].sortWeight-Be[e.frame].sortWeight;if(0!==l)return l;return(null!==(a=null===(r=Be[t.pendulumFrame])||void 0===r?void 0:r.sortWeight)&&void 0!==a?a:1e3)-(null!==(n=null===(i=Be[e.pendulumFrame])||void 0===i?void 0:i.sortWeight)&&void 0!==n?n:1e3)}catch(l){return 0}},xn=e=>{const t={...e},{frame:a,isLink:r}=t;return("spell"===a||"trap"===a||Fa(t))&&(t.atk="",t.def="",t.star=0),r&&(t.def="",t.star=0),t},jn=(e,t,a)=>{for(let r=0;r<e.length;r++){const n=e[r](t,a);if(0!==n)return n}return 0},On={name:{key:"name",sortFunction:e=>e.map(xn).sort((e,t)=>jn([pn,vn,yn,hn,gn,fn],e,t))},atk:{key:"atk",sortFunction:e=>e.map(xn).sort((e,t)=>jn([gn,fn,vn,yn,pn,hn],e,t))},def:{key:"def",sortFunction:e=>e.map(xn).sort((e,t)=>jn([fn,gn,vn,yn,pn,hn],e,t))},set:{key:"set",sortFunction:e=>e.map(xn).sort((e,t)=>jn([hn,yn,vn,pn,gn,fn],e,t))},level:{key:"level",sortFunction:e=>e.map(xn).sort((e,t)=>jn([yn,vn,pn,hn,gn,fn],e,t))}},wn=(e,t)=>{const a=Object.values(t).filter(e=>null!=e);return 0===a.length?e:a.reduce((e,t)=>t(e),e)},kn=Object(Ur.create)(Object(en.subscribeWithSelector)(e=>({activeId:"",cardDisplayList:[],cardList:[],selectedMap:{},filterFunctionMap:{},filterResetSignal:0,isListDirty:!1,listName:"card-list",pendingActiveCard:void 0,visible:"true"===localStorage.getItem("manager-panel-visible"),setFilterFunction:t=>{let{type:a,value:r}=t;return e(e=>{let{cardList:t,filterFunctionMap:n}=e;const i={...n};if("text"===a){const e=r.toLowerCase();i[a]=t=>t.filter(t=>{let{name:a,effect:r,pendulumEffect:n}=t;return(qa(a).toLowerCase()+Ja(r).toLowerCase()+Ja(n).toLowerCase()).includes(e)})}return{filterFunctionMap:i,cardDisplayList:wn(t,i)}})},resetFilter:()=>{e(e=>{let{filterResetSignal:t,cardList:a}=e;return{filterFunctionMap:{},filterResetSignal:t+1,cardDisplayList:[...a]}})},addCard:t=>e(e=>{let{cardList:a}=e;const r={id:Object(V.a)(),...t};return{activeId:r.id,cardList:[...a,r],cardDisplayList:[...a,r]}}),changeEditStatus:t=>{"load"===t&&e({isListDirty:!1}),"download"===t&&e({isListDirty:!1})},toggleVisible:t=>e(e=>{let{visible:a}=e;return{visible:null!==t&&void 0!==t?t:!a}}),setListName:t=>e({listName:t}),setPendingActiveCard:t=>e({pendingActiveCard:t}),changeActiveCard:function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(e=>{let{cardList:r,cardDisplayList:n,isListDirty:i}=e,l=i;if(!1===l&&a){const e=r.find(e=>e.id===t.id);l=!e||!((e,t)=>{const{artCrop:a,backgroundCrop:r,...n}=e,{artCrop:i,backgroundCrop:l,...o}=t;return Object(Da.a)(n,o)&&Xa(a,i)&&Xa(r,l)})(t,e)}return{isListDirty:l,cardList:r.map(e=>e.id===t.id?{...t}:e),cardDisplayList:n.map(e=>e.id===t.id?{...t}:e)}})},setActiveId:t=>e({activeId:t}),selectCard:(t,a)=>{e(e=>{let{selectedMap:r}=e;const n={...r};return"add"===a?n[t]=t:delete n[t],{selectedMap:n}})},setSelectMap:(t,a)=>e(e=>{let{selectedMap:r}=e;return{selectedMap:t.reduce((e,t)=>(e[t.id]=t.id,e),"replace"===a?{}:{...r})}}),setCardList:(t,a)=>{var r;e({filterFunctionMap:{},isListDirty:!1,activeId:null!==a&&void 0!==a?a:null===(r=t[0])||void 0===r?void 0:r.id,cardList:t,cardDisplayList:[...t]})},deleteCard:t=>{e(e=>{var a,r,n,i;let{cardList:l,activeId:o,cardDisplayList:s}=e;const c=l.filter(e=>e.id!==t),d=s.filter(e=>e.id!==t),u=d.findIndex(e=>e.id===o);return{activeId:o===t?null!==(a=null!==(r=null===(n=d[u-1])||void 0===n?void 0:n.id)&&void 0!==r?r:null===(i=d[0])||void 0===i?void 0:i.id)&&void 0!==a?a:"":o,cardList:c,cardDisplayList:d}})},duplicateCard:t=>{e(e=>{let{cardList:a,filterFunctionMap:r}=e;const n=a.findIndex(e=>{let{name:a}=e;return a===t.name}),i=Object(V.a)(),l={...Object(Ea.a)(t),name:`${t.name} - Copy`,id:i},o=n<0?[...a,l]:[...a.slice(0,n),a[n],l,...a.slice(n+1,a.length)];return{activeId:i,pendingActiveCard:l,cardList:o,cardDisplayList:wn(o,r)}})},sortList:t=>{e(e=>{let{cardDisplayList:a,cardList:r}=e;return{cardDisplayList:On[t].sortFunction(a),cardList:On[t].sortFunction(r)}})}}))),Sn=(e,t)=>{const a=Object(V.a)();let r=At(),n=!1;if(!e)return{isPartial:n,card:{...r,id:a}};try{const a="string"===typeof e?JSON.parse(e):e;if(t){const e=Pa(a);r=Object.keys(e).length>0?Ka(e,t):Ka(a,t)}else if(Ua(a))r=Ka(a);else if(Ya(a)){const e=Pa(a);r=Ka(e)}else if(Array.isArray(a.data)){const e=Array.isArray(a.data)?a.data[0]:a,{isPartial:t,result:i}=pr(e);n=t,r=i}else if((e=>{try{return"id"in e&&"frameType"in e&&"card_sets"in e}catch(t){return console.error(t),!1}})(a)){const{isPartial:e,result:t}=pr(a);n=e,r=t}else{const{isPartial:e,result:t}=(e=>{const{name:t,atk:a,def:r,attribute:n,effect:i,boxSize:l,copyright:o,icon:s,id:c,image:d,layout:u,level:m,link:b,pendulum:p,rarity:h,serial:g,type:f,variant:v,version:y}=e,{red:x,blue:j,boxSize:O,boxSizeEnabled:k,effect:S,enabled:F}=p,C=Za[s],N=rr[n],T=ir[u],R="string"===typeof(I=d)&&I.startsWith("data:image/");var I;const B=parseInt(m),z=h?lr[h.toLowerCase()]:void 0;let E=void 0===C||void 0===N||void 0===T||void 0===z;const{finish:D,artFinish:M,text:W}=null!==z&&void 0!==z?z:{},A=W?K[W]:null;return{isPartial:E,result:{...At(),finish:null!==D&&void 0!==D?D:[],name:t,nameStyleType:W?"predefined":"auto",nameStyle:A?A.value:P(),atk:a,def:r,attribute:null!==N&&void 0!==N?N:w,effect:i,creator:o,subFamily:null!==C&&void 0!==C?C:L,setId:c,frame:null!==T&&void 0!==T?T:"normal",star:`${B}`===m&&B<=13?B:m,typeAbility:f.split("/").map(e=>e.trim()),art:R?"":d,artFit:!0,artData:R?d:"",artSource:R?"offline":"online",artFinish:null!==M&&void 0!==M?M:"normal",isLink:"link"===T&&null!=b,linkMap:[!0===(null===b||void 0===b?void 0:b.topLeft)?"1":null,!0===(null===b||void 0===b?void 0:b.topCenter)?"2":null,!0===(null===b||void 0===b?void 0:b.topRight)?"3":null,!0===(null===b||void 0===b?void 0:b.middleLeft)?"4":null,!0===(null===b||void 0===b?void 0:b.middleRight)?"6":null,!0===(null===b||void 0===b?void 0:b.bottomLeft)?"7":null,!0===(null===b||void 0===b?void 0:b.bottomCenter)?"8":null,!0===(null===b||void 0===b?void 0:b.bottomRight)?"9":null].filter(e=>"string"===typeof e),isPendulum:F,pendulumScaleBlue:j,pendulumScaleRed:x,pendulumEffect:S,pendulumSize:tr[O],password:g,externalInfo:{version:y,variant:v,boxSize:l,rarity:h,pendulum:{boxSize:O,boxSizeEnabled:k}}}}})(a);n=e,r=t}}catch(i){console.error("decodedCard",e,i);try{r=function(e){let t;return t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?$a(e):"string"===typeof e?JSON.parse(e):e,Ka(t)}(e,!0),Dr.a.info({message:Zr()["service.decode.outdated.message"],description:Zr()["service.decode.outdated.description"]})}catch(i){console.error("cardData",e,i),Dr.a.error({message:Zr()["service.decode.error.message"],description:Zr()["service.decode.error.description"]})}}return{isPartial:n,card:{...r,id:a}}},Fn={debounce:{type:"debounce",wait:400},throttle:{type:"throttle",wait:1e3}},Cn=Object(Ur.create)((e,t)=>({card:Wt(),setCard:(t,a)=>{const r=kn.getState().changeActiveCard;if("function"===typeof t)e(e=>{const n=t(e.card);return r(n,null===a||void 0===a||a),{card:n}});else if("id"in(n=t)&&""!==n.id)r(t,a),e({card:t});else{const n={id:Object(V.a)(),...t};r(n,a),e({card:n})}var n},getUpdater:function(e){var a;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e,n=arguments.length>2?arguments[2]:void 0;const{setCard:i}=t(),l=t=>{i(a=>{var n;return{...a,[e]:r("string"===typeof t||"number"===typeof t||Array.isArray(t)?t:null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)}})};if(!n)return l;const o="string"===typeof n?null!==(a=Fn[n])&&void 0!==a?a:void 0:n;if(!o)return l;const{wait:s,type:c}=o;return"debounce"===c?Vr()(l,s):"throttle"===c?qr()(l,s):l}})),Ln=Object(Ur.create)(e=>{const{allowHotkey:t,exportFormat:a,exportScheme:r,globalScale:n,mirrorPendulumScale:i,reduceMotionColor:l,resolution:o,showCreativeOption:c,showExtraAttribute:d,showExtraDecorativeOption:u,slidingType:m}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem("setting"))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useSetting: Error when getting cached setting",t),{}}})();return{setting:{exportScheme:"string"===typeof r?r:"with-name",globalScale:"number"===typeof n&&n<=s.maximumScale?n:1,exportFormat:"string"===typeof a?a:"csv",slidingType:"string"===typeof m?m:"auto",resolution:Array.isArray(o)&&"number"===typeof o[0]&&"number"===typeof o[1]?o:[s.width,s.height],allowHotkey:"boolean"!==typeof t||t,reduceMotionColor:"boolean"===typeof l&&l,showCreativeOption:"boolean"!==typeof c||c,showExtraAttribute:"boolean"!==typeof d||d,showExtraDecorativeOption:"boolean"!==typeof u||u,mirrorPendulumScale:"boolean"===typeof i&&i},updateSetting:t=>{e(e=>{const a="function"===typeof t?t(e.setting):{...e.setting,...t};return localStorage.setItem("setting",JSON.stringify(a)),{setting:a}})}}}),Nn=e=>{let{isTainted:t,isInitializing:a,exportCanvasRef:n,exportRef:i,onExport:l,onDownloadError:o,onDownloadComplete:s}=e;const c=Qr(),{card:d}=Cn(),{addToBatch:u,batchDataMap:m,isBatchDownloading:b}=Yr(),p=Ln(e=>e.setting.resolution),h=Ln(e=>e.setting.exportScheme),{opacity:g,name:f,isPendulum:v,pendulumSize:y}=d,x=qa(f),j=Object(r.useRef)(!1),O=Object(r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const a=n.current,r=null===a||void 0===a?void 0:a.cloneNode(),i=null===a||void 0===a?void 0:a.getContext("2d"),l=null===r||void 0===r?void 0:r.getContext("2d");if(a&&i&&r&&l&&!t)return e&&(r.width=e[0],r.height=e[1]),l.drawImage(a,0,0,a.width,a.height,0,0,r.width,r.height),r.toDataURL("image/png")},[n,t,p]),w=Object(r.useCallback)(async function(e,t){var a;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;try{const a=await fetch(O(r)),n=await a.blob();b&&u(t,e,n)}catch(n){o()}null===(a=document.querySelector("#export-canvas-guard"))||void 0===a||a.classList.remove("guard-on"),s()},[u,O,b,s,o,p]),k=Object(r.useCallback)(function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;try{const e=qa(f);var a=document.createElement("a");a.download=e?`${e}.png`:"card.png",a.href=O(t),a.click()}catch(r){o()}null===(e=document.querySelector("#export-canvas-guard"))||void 0===e||e.classList.remove("guard-on"),s()},[p,s,f,O,o]);return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&(document.title=x?`${x} - Yu-Gi-Oh Carder`:"Yu-Gi-Oh Carder")},500),()=>{e=!1}},[x]),Object(r.useEffect)(()=>{let e=()=>{var e;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(e="2.3.22")?e:"unknown")};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),Object(r.useEffect)(()=>{let e=!0,t=e=>(e.preventDefault(),c["prompt.warning.on-leave.label"]);if(!1===a){try{var r;localStorage.setItem("card-data",JSON.stringify(d)),localStorage.setItem("card-version",null!==(r="2.3.22")?r:"unknown")}catch(o){const e="fail-to-set-storage-notification";Dr.a.close(e),Dr.a.error({key:e,message:c["error.card-max-size.message"],description:c["error.card-max-size.description"]})}(async()=>{var a,r,o,s;if(n.current&&(window.addEventListener("beforeunload",t),null===(a=document.getElementById("export-canvas"))||void 0===a||a.classList.remove("js-export-available"),null===(r=document.getElementById("preview-canvas"))||void 0===r||r.classList.remove("js-export-available"),null===(o=document.getElementById("export-canvas-guard"))||void 0===o||o.setAttribute("style",""),null===(s=document.getElementById("save-button-waiting"))||void 0===s||s.setAttribute("style","display: block"),i.current.pipelineRunning=!0,await i.current.currentPipeline,e&&(i.current.currentPipeline=l({isPendulum:v,opacity:g,pendulumSize:y,isRelevant:()=>e}),await i.current.currentPipeline,e))){var c,u,p,f;const e={...d,artData:"",backgroundData:""},a=JSON.stringify(Ha(e));"string"===typeof a&&function(e,t){if(window.history.pushState){let a=new URLSearchParams(window.location.search);a.set(e,t);let r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+a.toString();window.history.pushState({path:r},"",r)}}("data",a),null===(c=document.getElementById("export-canvas"))||void 0===c||c.classList.add("js-export-available"),null===(u=document.getElementById("preview-canvas"))||void 0===u||u.classList.add("js-export-available"),null===(p=document.getElementById("export-canvas-guard"))||void 0===p||p.setAttribute("style","display: none"),null===(f=document.getElementById("save-button-waiting"))||void 0===f||f.setAttribute("style","display: none"),window.removeEventListener("beforeunload",t),i.current.pipelineRunning=!1,j.current&&(j.current=!1,k()),b&&!m[e.id]&&setTimeout(()=>{w("with-name"===h?`${x}.png`:`${e.setId} - ${x}.png`,e.id)},200)}})()}return()=>{window.removeEventListener("beforeunload",t),e=!1}}),{onSave:e=>{var t;null===(t=document.querySelector("#export-canvas-guard"))||void 0===t||t.classList.add("guard-on");const a=e?[...e]:void 0;setTimeout(()=>{!1===i.current.pipelineRunning?k(a):j.current=!0},200)},isPipelineRunning:()=>i.current.pipelineRunning}};var Tn=a(295);const Rn=()=>{const[e,t]=Object(r.useState)(null),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{const e=await async function(){try{return await Object(Tn.a)("YgoCarderDb",3,{upgrade(e){e.objectStoreNames.contains("messageStore")||e.createObjectStore("messageStore",{keyPath:"key"}),e.objectStoreNames.contains("presetLayoutStore")||e.createObjectStore("presetLayoutStore",{keyPath:"key"}),e.objectStoreNames.contains("presetNameStyleStore")||e.createObjectStore("presetNameStyleStore",{keyPath:"key"}),console.info("YgoCarderDb ready")}})}catch(e){return console.error("setupYgoCarderDb",e),null}}();t(e),n(!0)})(),setTimeout(()=>{n(!0)},5e3)},[]),{db:e,dbReady:a}},In=e=>{let{value:t="",onChange:a}=e;const[n,i]=Object(r.useState)(t),[l,o]=Object(r.useState)(()=>({hex:hr.test(t)?t:"#000000",rgb:gr(t,!1)}));return Object(r.useEffect)(()=>{const e=n.startsWith("#")?n:`#${n}`;hr.test(e)&&(i(e),o({hex:e,rgb:gr(e,!1)}),null===a||void 0===a||a(e))},[n]),Object(r.useEffect)(()=>{i(t),o({hex:hr.test(t)?t:"#000000",rgb:gr(t,!1)})},[t]),{inputText:n,color:l,setColor:i}};var Bn=a(19);const zn=Object(Ur.create)(e=>({memory:{activeDropzone:0,layoutPresetList:[],nameStylePresetList:[{key:"abc",content:$({preset:"animeGold",shadowColor:"#f8f8f8",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#664444",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#4ee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#45dd2d,1.000|#43da23",hasGradient:!0})},{key:"cde",content:$({preset:"promo",fillStyle:"#c7080b",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#8a1801",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0,font:"OCG"})},{key:"efg",content:$({preset:"promo",fillStyle:"#080bc7",shadowColor:"#333333",shadowOffsetY:0,shadowOffsetX:0,shadowBlur:1,hasShadow:!0,lineColor:"#18018a",lineWidth:3,lineOffsetX:0,hasOutline:!0,lineOffsetY:0,font:"OCG"})},{key:"ghi",content:$({preset:"animeGold",shadowColor:"#f8f8f8",shadowOffsetY:3,shadowOffsetX:2,shadowBlur:2,hasShadow:!0,lineColor:"#664444",lineWidth:3,lineOffsetX:1,lineOffsetY:0,hasOutline:!0,gradientAngle:180,gradientColor:"0.000|#4e17e3,0.220|#db15be,0.270|#20cd09,0.330|#b57f0b,0.380|#d0920c,0.450|#f6bfff,0.610|#ffffff,0.700|#ffffff,0.870|#45dd2d,1.000|#43da23",hasGradient:!0})}]},updateGlobalMemory:t=>{e(e=>({memory:"function"===typeof t?t(e.memory):{...e.memory,...t}}))}})),En=e=>{const{targetMemory:t,updateGlobalMemory:a}=zn(Object(Bn.useShallow)(t=>{let{memory:a,updateGlobalMemory:r}=t;return{targetMemory:a[e],updateGlobalMemory:r}}));return[t,Object(r.useCallback)(t=>{a(a=>({...a,[e]:"function"===typeof t?t(a[e]):t}))},[e,a])]},{height:Dn,width:Mn,maximumScale:Wn}=s,An=()=>"#000000".replace(/0/g,()=>(~~(12*Math.random()+2)).toString(16)),Hn=e=>{let{ctx:t,color:a=An(),width:r,offset:n=4,edge:i,baseline:l,xRatio:o}=e;const s=t.fillStyle;t.fillStyle=a,t.beginPath(),t.rect(i/o,l+1+Math.random()*n,r/o,2),t.fillStyle=s},Pn=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==i&&void 0!==i?i:{};e.textAlign="left";const o=t.split("");let s=r;return o.forEach(t=>{e.fillText(t,s,n),l&&e.strokeText(t,s,n),s+=e.measureText(t).width*(2+a)/2}),s},$n=(e,t,a,r,n,i)=>{if(!e||!t)return r;const{stroke:l=!1}=null!==i&&void 0!==i?i:{};e.textAlign="right";const o=t.split("");let s=r;return o.forEach((t,r)=>{const i=o[o.length-r-1];e.fillText(i,s,n),l&&e.strokeText(i,s,n),s-=e.measureText(i).width*(2+a)/2}),s},Kn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Mn*Wn,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Dn*Wn;return!!e&&(e.clearRect(0,0,t,a),!0)},Un=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return async(a,r,n,i)=>{if(!a||!Array.isArray(e)||e.length<=0)return Promise.resolve();for(const s of e){const e=t[s];if(n&&t[s]){var l,o;const{partInstructionMap:t,pendulumSubstituteMap:c}=e,d=r&&null!==(l=t[r])&&void 0!==l?l:[],u=i?null!==(o=c[i])&&void 0!==o?o:i:_;if(d.length)for(const{blendMode:e="source-over",opacity:r=1}of d)a.globalCompositeOperation=e,a.globalAlpha=r,await n(s,u);else await n(s,u);a.globalAlpha=1,a.globalCompositeOperation="source-over"}}a.globalAlpha=1,a.globalCompositeOperation="source-over"}},Yn="#000000",Gn="#000000",Vn="#000000",Xn=e=>{var t,a;let{ctx:r,x:n,y:i,blur:l,color:o,colorGradient:s,shadowColor:c,lineColor:d,lineColorGradient:u,lineWidth:m,globalScale:b=1,useDefault:p=!0}=e;return(p||"number"===typeof n)&&(r.shadowOffsetX=(null!==n&&void 0!==n?n:0)*b),(p||"number"===typeof i)&&(r.shadowOffsetY=(null!==i&&void 0!==i?i:0)*b),(p||"number"===typeof l)&&(r.shadowBlur=(null!==l&&void 0!==l?l:0)*b),(p||"string"===typeof c)&&(r.shadowColor=null!==c&&void 0!==c?c:Gn),(p||"string"===typeof o)&&(r.fillStyle=null!==(t=null!==s&&void 0!==s?s:o)&&void 0!==t?t:Vn),(p||"string"===typeof d)&&(r.strokeStyle=null!==(a=null!==u&&void 0!==u?u:d)&&void 0!==a?a:Yn),(p||"number"===typeof m)&&(r.lineWidth=(null!==m&&void 0!==m?m:0)*b),()=>{(p||"number"===typeof n)&&(r.shadowOffsetX=0),(p||"number"===typeof i)&&(r.shadowOffsetY=0),(p||"number"===typeof l)&&(r.shadowBlur=0),(p||"string"===typeof c)&&(r.shadowColor=Gn),(p||"string"===typeof o)&&(r.fillStyle=Vn),(p||"string"===typeof d)&&(r.strokeStyle=Yn),(p||"number"===typeof m)&&(r.lineWidth=0)}},qn={},Jn=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return await async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Promise(e&&""!==t?n=>{var i,l;if(!0===(null===(i=qn[t])||void 0===i?void 0:i.ready)){const i=qn[t].image,l="number"===typeof a?a:a(i),o="number"===typeof r?r:r(i);return e.drawImage(i,l,o),void setTimeout(()=>n(!0),0)}if(null!==(l=qn[t])&&void 0!==l&&l.error)return void setTimeout(()=>n(!0),0);const o=qn[t]&&(qn[t].cache||qn[t].ready),s=o?qn[t].image:new Image;o||(s.src="/ygocarder"+t),s.addEventListener("load",()=>{const i="number"===typeof a?a:a(s),l="number"===typeof r?r:r(s);e.drawImage(s,i,l),qn[t]&&(qn[t].ready=!0,qn[t].error=!1),n(!0)},{once:!0}),s.addEventListener("error",()=>{qn[t]&&(qn[t].error=!0),n(!1)},{once:!0}),o||(qn[t]={image:s,ready:!1,error:!1,cache:!0})}:e=>e(!1))}(e,"/asset/image/"+t,a,r)},_n=async(e,t,a,r,n,i,l,o,s,c)=>await(async(e,t,a,r,n,i,l,o,s,c)=>new Promise(e&&""!==t?d=>{var u,m;if(!0===(null===(u=qn[t])||void 0===u?void 0:u.ready)){const u=qn[t].image,m="number"===typeof a?a:a(u),b="number"===typeof r?r:r(u),p="number"===typeof n?n:n(u),h="number"===typeof i?i:i(u),g="number"===typeof l?l:null===l||void 0===l?void 0:l(u),f="number"===typeof o?o:null===o||void 0===o?void 0:o(u),v="number"===typeof s?s:null===s||void 0===s?void 0:s(u),y="number"===typeof c?c:null===c||void 0===c?void 0:c(u);return"number"===typeof g&&"number"===typeof f&&"number"===typeof v&&"number"===typeof y?e.drawImage(u,g,f,v,y,m,b,p,h):e.drawImage(u,m,b,p,h),void setTimeout(()=>d(!0),0)}if(null!==(m=qn[t])&&void 0!==m&&m.error)return void setTimeout(()=>d(!0),0);const b=qn[t]&&(qn[t].cache||qn[t].ready),p=b?qn[t].image:new Image;b||(p.src="/ygocarder"+t),p.addEventListener("load",()=>{const u="number"===typeof a?a:a(p),m="number"===typeof r?r:r(p),b="number"===typeof n?n:n(p),h="number"===typeof i?i:i(p),g="number"===typeof l?l:null===l||void 0===l?void 0:l(p),f="number"===typeof o?o:null===o||void 0===o?void 0:o(p),v="number"===typeof s?s:null===s||void 0===s?void 0:s(p),y="number"===typeof c?c:null===c||void 0===c?void 0:c(p);"number"===typeof g&&"number"===typeof f&&"number"===typeof v&&"number"===typeof y?e.drawImage(p,g,f,v,y,u,m,b,h):e.drawImage(p,u,m,b,h),qn[t]&&(qn[t].ready=!0,qn[t].error=!1),d(!0)},{once:!0}),p.addEventListener("error",()=>{qn[t]&&(qn[t].error=!0),d(!1)},{once:!0}),b||(qn[t]={image:p,ready:!1,error:!1,cache:!0})}:e=>e(!1)))(e,"/asset/image/"+t,a,r,n,i,l,o,s,c),Qn=async(e,t,a,r,n,i,l,o)=>{const s=e.getContext("2d"),c=document.createElement("canvas");c.width=n,c.height=i;const d=c.getContext("2d",{willReadFrequently:!0});if(!d||!s)return;await _n(d,t,0,0,n,i),null!==o&&void 0!==o&&o.color&&(d.fillStyle=o.color,d.fillRect(0,0,n,i),d.globalCompositeOperation="destination-in"),await _n(d,t,0,0,n,i),d.globalCompositeOperation="source-over";const u=Xn({ctx:s,...o,globalScale:l});s.drawImage(c,a,r),u()},Zn=e=>{var t,a;let{ctx:r,letter:n,isLastOfLine:i=!1,debug:l,fontStyle:o,xRatio:s,metricMethod:c="standard",globalScale:d}=e;if(st.test(n))return{width:0,boundWidth:0};const u="tcg"===o?It:Nt,m="tcg"===o?Tt:Ct,b="tcg"===o?Rt:Lt,p=r.measureText(n),{width:h,actualBoundingBoxLeft:g,actualBoundingBoxRight:f}=p,v=g+f;let y=1;"name"===c&&(y=1+8*(1-s));const x="name"===c||"compact"===c||"furigana"===c?.046875:0;let j=v,O=null!==(t=i?b[n]:m[n])&&void 0!==t?t:0;if("tcg"===o){var w;return{width:h,actualBoundWidth:v,boundWidth:h+2*((null!==(w=u[n])&&void 0!==w?w:0)*h),metric:p,offsetRatio:O}}let k=(null!==(a=u[n])&&void 0!==a?a:0)*h+("furigana"===c?0:Math.min(.075*h,Math.max(.45*d,h*x)*y)),S=1;jt.test(n)?(j="furigana"===c?v:v*("creator"===c?1.75:2.5),S=.6):Ot.test(n)?(j="furigana"===c?v:Math.max(v,.75*h),k=2*d):bt.test(n)?j="furigana"===c?v:Math.max(v,.7*h):ft.test(n)?j=h:kt.test(n)?j=2*v:St.test(n)?j=1.25*v*(i?.5:1):yt.test(n)?j="furigana"===c?v:Math.max(v,.75*h):xt.test(n)?j=Math.max(v,.69*h)*("creator"===c?.975:1):wt.test(n)?(j=h,k=0):j="furigana"===c?v:Math.max(v,.75*h),k="furigana"===c?0:k;const F=1*h*1;return l&&console.info(`getLetterWidth ${l}`,n,p,1,1,"|",F),{width:h,actualBoundWidth:v,boundWidth:"standard"===c?h*S:j+2*k,metric:p,offsetRatio:O}},ei=e=>{var t;let{ctx:a,baseline:r,edge:n,letter:i,xRatio:l,deviation:o,letterMetric:s,textDrawer:c}=e;const{boundWidth:d,metric:u=a.measureText(i),offsetRatio:m=0}=null!==s&&void 0!==s?s:{},{letterMap:b={},threshold:p=10}=null!==o&&void 0!==o?o:{},{uniformBoxDescent:h}=null!==(t=b[i])&&void 0!==t?t:{},g=u.width*l,f=d?d*l:g,v=null!==c&&void 0!==c?c:e=>{let{ctx:t,letter:a,scaledBaseline:r,scaledEdge:n}=e;t.fillText(a,n,r)},y=(g-f)/2,x=f*m;let j=1,O=0;if("number"===typeof h&&l>=p){const{actualBoundingBoxDescent:e,actualBoundingBoxAscent:t}=a.measureText(i);O=h-e;const r=t+e;j=(r+2*O)/r}a.scale(1,j),v({ctx:a,letter:i,scaledEdge:n/l-y-x,scaledBaseline:(r+O)/j}),a.scale(1,1/j)},ti=function(e){const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?new RegExp(`([${Et}])|(${qe}[\\w\\W]+?${Je})|(.+?)`):new RegExp(`([${Et}])|${qe}([\\w\\W]+?)${Je}|(.+?)`);return e.split(t).filter(e=>null!=e&&""!==e)},ai=(e,t,a,r,n)=>{const i=Rr(ue,n),{fontSize:l,ordinalFontRatio:o=i.ordinalFontRatio,headTextFontRatio:s=i.headTextFontRatio}=a,{font:c,ordinalFont:d,symbolFont:u,symbolFontRatio:m,numberFont:b=c,numberFontRatio:p=1,furiganaFont:h,vietnameseFont:g,vietnameseFontRatio:f=1}=t;let v=r.getFontInfo();let y=r.getFontInfo();let x=r.getFontInfo();let j=r.getFontInfo();let O=r.getFontInfo();let w=r.getFontInfo();return{applyFuriganaFont:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];O=r.getFontInfo(),e.font=r.setFamily(h).setWeight(t?"bold":"").setSize(l*s).getFont()},stopApplyFuriganaFont:()=>{e.font=r.setFamily(O.family).setWeight(O.weight).setSize(O.size).getFont()},applyLargerText:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;w=r.getFontInfo(),e.font=r.setSize(l*t).getFont()},stopApplyLargerText:()=>{e.font=r.setSize(w.size).getFont()},applyNumberFont:()=>{v=r.getFontInfo(),e.font=r.setFamily(b).setSize(l*p).getFont()},stopApplyNumberFont:()=>{e.font=r.setFamily(v.family).setSize(v.size).getFont()},applyOrdinalFont:()=>{j=r.getFontInfo(),e.font=r.setFamily(d).setSize(l*o).getFont()},stopApplyOrdinalFont:()=>{e.font=r.setFamily(j.family).setSize(j.size).getFont()},applySymbolFont:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;x=r.getFontInfo();const a=l*t;return e.font=r.setFamily(u).setSize(a).getFont(),{fontSize:a}},stopApplySymbolFont:()=>{e.font=r.setFamily(x.family).setSize(x.size).getFont()},applyVietnameseFont:()=>{y=r.getFontInfo(),e.font=r.setFamily(g).setSize(l*f).getFont()},stopApplyVietnameseFont:()=>{e.font=r.setFamily(y.family).setSize(y.size).getFont()},applyAsymmetricScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.scale(t,a)},applyScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e.scale(t,a)},resetScale:()=>{e.setTransform(1,0,0,1,0,0)},reverseScale:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.scale(1/t,1/t)}}},ri=(e,t,a,r,n)=>{const i=(r-n)/2;e.beginPath(),e.arc(t+i,a-i,i,0,2*Math.PI,!1),e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()},ni=e=>{let{footText:t,footTextWidth:a,headText:r,headTextLetterWidth:n,headTextGap:i,headTextSpacing:l,gapPadding:o,debug:s,fitFootText:c,sentenceXRatio:d,xRatio:u}=e;const m=0===r.length,b=n/a*d;let p=l,h=0;b<=.95?p=1*l:b<=1.175?p=l>=0?0:3*l:b<=1.56?p=l>=0?-1*l/4:3*l:(h=.66,p=l>=0?-1*l/4:2*l),(c||u>0&&u<1)&&(p=l);const g=n*(u&&!c?u:!h||c?1:h)+p*(r.length-1),f=m?0:(a-n)/r.length,v=a,y=1===t.length||2*o+g>a?"center":"space-around",x="center"===y?p:f,j="center"===y?2*o+g:v,O=c?Math.min(j,a):j,w="center"===y?(g-a)/2:0,k=Math.max(i,c?Math.min(w,0):w);return s&&console.info(`analyzeHeadText ${s}`,y,x,"|",r,O,j,t,a,k),{gapPadding:o,letterSpacing:x,trueHeadTextWidth:j,headTextWidth:O,alignment:y,halfGap:k,headTextXRatio:"center"===y?h:0}},ii=(e,t)=>e>=0?t>=0?0:-1*Math.max(-1*e,t):t>=0?-1*Math.max(e,-1*t):0,li=e=>{let{ctx:t,token:a,nextToken:r,xRatio:n,previousTokenGap:i=0,letterSpacing:l,format:o,globalScale:s,textData:c}=e;if(!t||!a)return{totalWidth:0,leftMostLetter:"",spaceCount:0,spaceAtEnd:!1,rightGap:0,leftGap:0};const d=Rr(ue,s),u=null!==l&&void 0!==l?l:d.letterSpacing,{currentFont:m,fontData:b,fontLevel:p}=c,{metricMethod:h,headTextGapRatio:g=me.headTextGapRatio,headTextOverflow:f=me.headTextOverflow,fontStyle:v,letterOffsetMap:y={}}=b,x=b.fontList[p],{bulletWidth:j,capitalLetterRatio:O,fontSize:w,iconSymbolWidth:k=j,largeSymbolRatio:S=d.largeSymbolRatio,headTextSpacing:F=d.headTextSpacing,squareBracketRatio:C,wordLetterSpacing:L}=x,N=-.5*w,{applyScale:T,reverseScale:R,applyLargerText:I,stopApplyLargerText:B,applyFuriganaFont:z,stopApplyFuriganaFont:E,applyOrdinalFont:D,stopApplyOrdinalFont:M,applySymbolFont:W,stopApplySymbolFont:A,applyNumberFont:H,stopApplyNumberFont:P,applyVietnameseFont:$,stopApplyVietnameseFont:K}=ai(t,b,x,m,s),U=1+u/2;let Y="",G=0,V=0,X=!1;const q=void 0===r;let J=null!==i&&void 0!==i?i:0,_=!1,Q=0;const Z=a.replaceAll(new RegExp(ot,"g"),"").split(Xe).filter(e=>null!=e&&""!==e);for(let ae=0;ae<Z.length;ae++){const e=0===ae,a=Z[ae];if("\u29be"===a){J=0;G+=k/n*U,e&&(Q=0,Y=a[0])}else if("\u25cf"===a){J=0;G+=j/n*U,e&&(Q=0,Y=a[0])}else if(/[\xa9]/.test(a)){J=0,I(S);const r=t.measureText(a).width/n;B(),G+=r*U,e&&(Q=0,Y=a[0])}else if(ht.test(a)){J=0,D();const r=t.measureText(a).width/n;M(),G+=r*U,V+=1,e&&(Q=0,Y=a[0])}else if(zt.test(a)){const[i,l,d=""]=a.replaceAll(/{|}/g,"").split(/(\|+)/),m="||"===l,{totalWidth:b}=li({ctx:t,token:i,nextToken:r,xRatio:n,letterSpacing:u,previousTokenGap:0,format:o,textData:c,globalScale:s});z();const p=d.split("").map(e=>Zn({ctx:t,letter:e,fontStyle:v,metricMethod:"furigana",xRatio:1,globalScale:s}).boundWidth).reduce((e,t)=>e+t,0);E();const{halfGap:h,headTextWidth:y}=ni({headText:d,headTextLetterWidth:p/n,footText:i,footTextWidth:b,headTextGap:N/n,headTextSpacing:F,gapPadding:g*w/n,fitFootText:m,sentenceXRatio:n,xRatio:"condense"===f&&i.length>1?Math.min(1,n+.1):0}),x=0===d.length?Math.max(N,b/Dt):h,j=x,O=x,k=Math.max(y,b),S=ii(J,j);J=O,G+=k-S,V+=1,e&&(_=!0,Q=j,Y=i[0])}else if(Ge.test(a)){const r=L?1+L/2:U;t.letterSpacing=(r-1)*m.getFontInfo().sizeAsNumber+"px";let n=a,i=0;for(;""!==n;){let e=n[0],a=n.slice(1),r=t.measureText(n).width-t.measureText(a).width;if(Ue.test(e))T(C),r=t.measureText(n).width-t.measureText(a).width,R(C);else if(Ke.test(e))T(O),r=t.measureText(n).width-t.measureText(a).width,R(O);else if(Ve.test(e)&&"tcg"===v)$(),r=t.measureText(n).width-t.measureText(a).width,K();else if(vt.test(e))H(),r=t.measureText(n).width-t.measureText(a).width,P();else if(dt.test(e)&&"tcg"===v){var ee;W(null===(ee=y[e])||void 0===ee?void 0:ee.ratio),r=t.measureText(n).width-t.measureText(a).width,A()}else r=t.measureText(n).width-t.measureText(a).width;i+=r,n=a}const l=Math.max(N,i/Dt),o=l;G+=i-ii(J,l),J=o,e&&(Q=l,Y=a[0]),t.letterSpacing="0px"}else if(dt.test(a)&&"tcg"===v){var te;W(null===(te=y[a])||void 0===te?void 0:te.ratio);const r=t.measureText(a).width*U;A();const n=Math.max(N,r/Dt),i=n;G+=r-ii(J,n),J=i,e&&(Q=n,Y=a[0])}else{const{boundWidth:r}=Zn({ctx:t,letter:a,isLastOfLine:q,fontStyle:v,metricMethod:h,xRatio:n,globalScale:s}),i=r*U,l=Math.max(N,i/Dt),c=l;G+=i-ii(J,l),J=c,("ocg"===o||"tcg"===o&&/\s+/.test(a))&&!1===wt.test(a)&&(V+=1,ae===Z.length-1&&(X=!0)),e&&(Q=l,Y=a[0]),Ft.test(a)&&(Q=0,J=0)}}return{totalWidth:G,spaceCount:V,spaceAtEnd:X,leftMostLetter:Y,rightGap:J,leftGap:Q,offsetable:_}},oi=e=>{let{ctx:t,line:a,width:r,xRatio:n,format:i,isLast:l,textData:o,globalScale:s}=e;const c=ti(a);let d=0,u=0,m=0;for(let p=0,h=n;p<c.length;p++){const e=c[p],a=c[p+1];if(e===tt){h=1;continue}if(e===at){h=n;continue}const{spaceCount:r,totalWidth:l,spaceAtEnd:b,leftGap:g,rightGap:f,leftMostLetter:v}=li({ctx:t,token:e,nextToken:a,xRatio:h,previousTokenGap:m/h,textData:o,format:i,globalScale:s});m=f*h,d+=l*h+((0===p&&g>0?-1*Math.min(20*s,g*h):0)+(0===p&&gt.test(v)?4*s*h:0)),u+=r-(b&&void 0===a?1:0)}const b=u>0?(r-d)/u:0;return{tokenList:c,spaceWidth:l?"tcg"===i?b>1.5*s?0:b:b>3.65*s?0:b:b}},si=e=>{let{ctx:t,median:a,paragraphList:r,additionalLineCount:n=0,width:i,format:l,textData:o,globalScale:s}=e;const{fontData:c,fontLevel:d}=o,{letterSpacing:u}=c.fontList[d],m=[],b=r.reduce((e,r)=>{const n=(a<=100?100:a)/1e3,c=i/n,d=ti(r,!0);let b=1,p=[],h=0,g=0,f=0;for(let i=0,y=n;i<d.length;i++){const e=d[i],r=d[i+1];e===tt?(f+=1,y=1):e===at&&(f-=1,y=n);let{leftMostLetter:v,totalWidth:x,rightGap:j,leftGap:O}=li({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:g,format:l,letterSpacing:u,textData:o,globalScale:s});let w=x/(f>0?n:1)+(0===i?(O>0?-1*Math.min(20*s/y,O):0)+(gt.test(v)?4*s:0):0);if(h+w>c){let n=p.join("").trim();f>0&&(n+=at),f<0&&(n=tt+n),f=0,m.push({line:n,effectiveMedian:a,isLast:!1,actualLineWidth:h});let{totalWidth:i,rightGap:c,leftGap:d}=li({ctx:t,token:e,nextToken:r,xRatio:y,previousTokenGap:0,format:l,textData:o,globalScale:s});h=i+((d>0?-1*Math.min(20*s/y,d):0)+(gt.test(v)?4*s:0)),g=c,p=[e],b+=1}else h+=w,g=j,p.push(e)}let v=p.join("").trim();return f>0&&(v+=at),f<0&&(v=tt+v),f=0,m.push({line:v,effectiveMedian:a,isLast:!0,actualLineWidth:h}),e+b},0)+(null!==n&&void 0!==n?n:0);return{currentLineList:m,currentLineCount:b}},ci=e=>{let{ctx:t,fontSize:a,edge:r,baseline:n,headText:i,headTextLetterWidth:l,footText:o,footTextWidth:s,headTextGap:c,headTextSpacing:d,headTextHeightRatio:u,headTextBold:m,headTextGapRatio:b,globalScale:p,xRatio:h,fontStyle:g,textWorker:f,fitFootText:v,headTextOverflow:y}=e;const{applyFuriganaFont:x,stopApplyFuriganaFont:j,resetScale:O,applyScale:w}=f,k="condense"===y&&o.length>1?Math.min(1,h+.1):0,{gapPadding:S,letterSpacing:F,trueHeadTextWidth:C,halfGap:L,alignment:N,headTextXRatio:T}=ni({headText:i,headTextLetterWidth:l,footText:o,footTextWidth:s*h,headTextGap:c,headTextSpacing:d*h,gapPadding:a*b,fitFootText:v,sentenceXRatio:h,xRatio:k}),R=C>s*h;if(0===i.length)return{trueHeadTextWidth:C,halfGap:L};const I=v?Math.min(1,s*h/C):1,B=v?I:k&&"center"===N?k:T;let z=r;O(),(v||B)&&(w(B,1),z=r/B),"center"===N?(z+=S,R?B>I&&(z+=(s*h/B-C)/2/B):z+=(s*h-C)/2):z+=F/2;for(const E of i){x();const{width:e,boundWidth:r}=Zn({ctx:t,letter:E,fontStyle:g,metricMethod:"furigana",xRatio:1,globalScale:p}),i=(e-r)/2;j(),x(m),t.fillText(E,z-i,n-a*u),j(),z+=r+F}return(v||B)&&O(),w(h,1),{trueHeadTextWidth:C,halfGap:L}},di=e=>{let{ctx:t,tokenList:a,trueEdge:r,trueBaseline:n,spaceWidth:i=0,xRatio:l,yRatio:o=1,textData:s,format:c,textDrawer:d,debug:u=!1,option:m,globalScale:b}=e;const{drawHeadText:p=!0}=null!==m&&void 0!==m?m:{},{currentFont:h,fontData:g,fontLevel:f}=s,v=g.fontList[f],{headTextFillStyle:y,headTextBold:x=me.headTextBold,headTextHeightRatio:j=me.headTextHeightRatio,headTextOverflow:O=me.headTextOverflow,headTextGapRatio:w=me.headTextGapRatio,metricMethod:k,fontStyle:S,letterDeviationMap:F={},letterOffsetMap:C={}}=g,L=Rr(ue,b),{bulletOffset:N=L.bulletOffset,bulletWidth:T,capitalLetterRatio:R=L.capitalLetterRatio,fontSize:I,headTextSpacing:B=L.headTextSpacing,iconSymbolWidth:z=T,largeSymbolRatio:E=L.largeSymbolRatio,letterSpacing:D=L.letterSpacing,ordinalFontOffsetY:M=L.ordinalFontOffsetY,squareBracketRatio:W=L.squareBracketRatio,wordLetterSpacing:A,allRightSymbolOffset:H=L.allRightSymbolOffset}=v,P=ai(t,g,v,h,b),{stopApplyFuriganaFont:$,applyFuriganaFont:K,stopApplyLargerText:U,applyLargerText:Y,stopApplyNumberFont:G,applyNumberFont:V,stopApplyOrdinalFont:X,applyOrdinalFont:q,applyScale:J,reverseScale:_,applySymbolFont:Q,stopApplySymbolFont:Z,applyVietnameseFont:ee,stopApplyVietnameseFont:te,applyAsymmetricScale:ae,resetScale:re}=P,ne=1+D/2,ie=n/o;let le=0,oe=[],se=0,ce=r;for(let ue=0,me=l;ue<a.length;ue++){const e=a[ue];if(e===tt){me=1,t.setTransform(1,0,0,1,0,0);continue}if(e===at){me=l,t.scale(me,1);continue}const r=-.5*me,m=I*r,g=a[ue+1],f=a[ue+2],v={ctx:t,xRatio:me,letterSpacing:D,format:c,textData:s,globalScale:b},L={ctx:t,baseline:ie,xRatio:me,textDrawer:d},xe=e.split(Xe).filter(e=>null!=e&&""!==e),{leftMostLetter:je,leftGap:Oe,rightGap:we,totalWidth:ke,spaceCount:Se}=li({token:e,nextToken:g,previousTokenGap:le/me,...v}),Fe=0===ue?(Oe>0?-1*Math.min(20*b,Oe*me):0)+(gt.test(je)?4*b:0):0;let Ce=ce+Fe,Le=le;for(let a=0;a<xe.length;a++){var de,be;const l=xe[a],u=null!==(de=xe[a+1])&&void 0!==de?de:g,D=null!==(be=xe[ue+2])&&void 0!==be?be:f;if(e===tt||e===at);else if("\u29be"===l)oe.push({edge:Ce,size:z,baseline:ie}),Ce+=z*ne,Le=0,se=0;else if("\u25cf"===l)re(),ri(t,Ce,n+N-1*b,T,Bt(c)*b),Ce+=T*ne,ae(me,o),Le=0,se=0;else if(/[\xa9]/.test(l))re(),Y(E),ei({...L,letter:l,edge:Ce*me,baseline:n+("tcg"===c?H:2*H)}),Ce+=t.measureText(l).width*ne,U(),ae(me,o),Le=0,se=0;else if(ht.test(l))re(),q(),ei({...L,letter:l,edge:Ce*me,baseline:n+M}),Ce+=t.measureText(l).width*ne,X(),ae(me,o),Ce+=i,Le=0,se=0;else if(zt.test(l)){const[e,a,n=""]=l.replaceAll(/{|}/g,"").split(/(\|+)/),h="||"===a,{totalWidth:g}=li({token:e,nextToken:u,previousTokenGap:0,...v});K();const f=n.split("").map(e=>Zn({ctx:t,letter:e,fontStyle:S,metricMethod:"furigana",xRatio:1,globalScale:b}).boundWidth).reduce((e,t)=>e+t,0);$();const{headTextWidth:k,halfGap:F}=ni({headText:n,headTextLetterWidth:f,footText:e,footTextWidth:g*me,headTextGap:m,headTextSpacing:B*me,gapPadding:I*w,fitFootText:h,sentenceXRatio:me,xRatio:"condense"===O&&e.length>1?Math.min(1,me+.1):0}),C=0===n.length?Math.max(m,g*r):F,L=C,N=C,T=ii(Le,N),R=N>0?N-T:0,{offsetable:z,leftGap:E}=li({token:u,nextToken:D,previousTokenGap:L/me,...v}),M=E*me,W=ii(L,M),A=R+(L>0?L-W:0);let H=0,U=0;A>0&&M>=-2*b&&z?(H=(A+2*Math.max(M,0))/3,U=Math.max(M,0)-H):H=R;const Y=Ce+(C<0?-T:Fe?-Fe:H)+se;se=U,di({ctx:t,format:c,textData:s,tokenList:ti(e),trueBaseline:ie,trueEdge:Y,xRatio:me,yRatio:o,spaceWidth:0,textDrawer:d,globalScale:b,debug:!1});const G=t.fillStyle,V=t.strokeStyle,X=t.shadowColor,q=t.shadowOffsetX,J=t.shadowOffsetY,_=t.shadowBlur;y&&(t.fillStyle=y,t.strokeStyle="",t.shadowColor="",t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0);p&&ci({ctx:t,fontSize:I,edge:Ce-T,baseline:ie,headText:n,headTextLetterWidth:f,footText:e,footTextWidth:g,headTextGap:m,headTextSpacing:B,headTextHeightRatio:j,headTextBold:x,headTextGapRatio:w,xRatio:me,fontStyle:S,textWorker:P,fitFootText:h,headTextOverflow:O,globalScale:b}),t.fillStyle=G,t.strokeStyle=V,t.shadowColor=X,t.shadowOffsetX=q,t.shadowOffsetY=J,t.shadowBlur=_,Ce+=Math.max(g*me,k)-T+i,Le=L}else if(Ge.test(l)){const e=A?1+A/2:ne;t.letterSpacing=(e-1)*h.getFontInfo().sizeAsNumber+"px";const a=t.measureText(l).width*me,n=Math.max(m,a*r),i=n;Ce-=ii(Le,n);let o=l,s=Ce;for(;""!==o;){let e=o[0],a=o.slice(1),r=0;const n={...L,deviation:F[`${b}`],letter:e,edge:s};if(Ue.test(e))J(W),r=t.measureText(o).width-t.measureText(a).width,ei({...n,edge:s/W,baseline:ie/W}),_(W);else if(Ke.test(e)){J(R),r=t.measureText(o).width-t.measureText(a).width;const i=r>t.measureText(e).width*R?Math.round(r*(1-R))/2:0;ei({...n,edge:s/R+i,baseline:ie/R}),_(R)}else if(Ve.test(e)&&"tcg"===S)ee(),r=t.measureText(o).width-t.measureText(a).width,ei(n),te();else if(vt.test(e))V(),r=t.measureText(o).width-t.measureText(a).width,ei(n),G();else if(dt.test(e)&&"tcg"===S){var pe,he,ge;const{fontSize:i}=Q(null===(pe=C[e])||void 0===pe?void 0:pe.ratio);r=t.measureText(o).width-t.measureText(a).width,ei({...n,baseline:n.baseline+i*(null!==(he=null===(ge=C[l])||void 0===ge?void 0:ge.baseline)&&void 0!==he?he:0)}),Z()}else r=t.measureText(o).width-t.measureText(a).width,ei(n);s+=r*me,o=a}Ce=s,Le=i,se=0,t.letterSpacing="0px"}else if(dt.test(l)&&"tcg"===S){var fe,ve,ye;const e=l,{fontSize:a}=Q(null===(fe=C[l])||void 0===fe?void 0:fe.ratio),n=t.measureText(e).width*ne*me,i=Math.max(m,n*r),o=i;Ce-=ii(Le,i),ei({...L,baseline:L.baseline+a*(null!==(ve=null===(ye=C[l])||void 0===ye?void 0:ye.baseline)&&void 0!==ve?ve:0),letter:e,edge:Ce}),Ce+=n,Z(),Le=o,se=0}else{const e=l,a=Zn({ctx:t,letter:e,fontStyle:S,metricMethod:k,isLastOfLine:void 0===u,xRatio:me,globalScale:b}),n=a.boundWidth*ne*me,o=Math.max(m,n*r),s=o;Ce-=ii(Le,o),ei({...L,letter:e,edge:Ce,deviation:null===F||void 0===F?void 0:F[`${b}`],letterMetric:a}),Ce+=n,("ocg"===c||"tcg"===c&&/\s+/.test(e))&&!0!==wt.test(e)&&(Ce+=i),Ft.test(e)||(Le=s),se=0}}le=we*me,u&&Hn({ctx:t,baseline:ie,edge:ce,width:ke*me,xRatio:me}),ce+=ke*me+Se*i+Fe}return{tokenEdge:ce,iconPositionList:oe}},ui=(e,t,a)=>{const{multiline:r=!0,furiganaHelper:n=!0,dictionaryType:i="rubyForm"}=null!==a&&void 0!==a?a:{},l=null!==e&&void 0!==e?e:"";let o="",s="ocg"===t?Fe:Ce;for(const h of l){var c;o+=null!==(c=s[h])&&void 0!==c?c:h}const d=o,u=(r?d.replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm,`${Ze}$1${et}`).replace(/^\[([\w\W]*?)\](?=(\n|$))/gm,`${_e}$1${Qe}`):d).replace(/(^|[-\u2014\s(["])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(lt,"$1\u201c").replace(/"/g,"\u201d").replace(/--/g,"\u2014").replace(/\u25cf /g,"\u25cf").replace(/(\([\uff10-\uff190-9]{1,2}\))/g,e=>{const t=Le[e];return null!==t&&void 0!==t?t:e}).replaceAll(new RegExp("{{([^{}]+?)}}","g"),e=>e.replaceAll("{{",tt).replaceAll("}}",at)).replaceAll(new RegExp("{[^{}]+?}","g"),e=>`${qe}${e}${Je}`),m=("tcg"===t||!1===n?u:u.replaceAll(new RegExp(ut,"g"),e=>{var t;const a=null!==(t=de[e][i])&&void 0!==t?t:de[e].rubyForm;return`${qe}${a}${Je}`})).replaceAll(new RegExp(Ye,"g"),e=>`${qe}${e}${Je}`).replaceAll(new RegExp("[(\\[\uff5b\u3014\u3008\u300a\u300c\uff62\u300e\u3010\u3018\u3016\u301d'\"\u2018\u201c\uff5f\xab\u25cf]+.","g"),e=>`${qe}${e}${Je}`).replaceAll(new RegExp(pt,"g"),e=>`${qe}${e}${Je}`).replaceAll(new RegExp(".[\u2014...\u2025\u3033\u3034\u3035)]+[^\\s]","g"),e=>`${qe}${e}${Je}`).replaceAll(new RegExp("[\u2460-\u2473]\uff1a.","g"),e=>`${qe}${e}${Je}`);let b=[],p=0;for(const h of m)h===qe?(0===p&&b.push(h),p+=1):h===Je?(p-=1,0===p&&b.push(h)):b.push(h);return b.join("").replaceAll(`${et}${Je}`,`${Je}${et}`).replaceAll(`${Qe}${Je}`,`${Je}${Qe}`).replaceAll(`${qe}${Ze}`,`${Ze}${qe}`).replaceAll(`${qe}${_e}`,`${_e}${qe}`).replaceAll(`${tt}${Je}`,`${Je}${tt}`).replaceAll(`${qe}${at}`,`${at}${qe}`).replaceAll(`${_e}${Qe}`,"").replaceAll(`${Ze}${et}`,"").replaceAll(`${qe}${Je}`,"")},mi=e=>{let{format:t,useItalic:a,statInEffect:r,typeInEffect:n,frameType:i}=e;const l=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-"),o=[t,..."pendulumLarge"===i?["pendulumLarge"]:[],n?"type":"",r?"stat":""].filter(e=>""!==e).join("-");let s=ve[o];return a&&"tcg"===t&&fe[o]&&(s=fe[o]),{fontDataKey:o,fontData:s,sizeList:re[l]}},bi=e=>{let{ctx:t,content:a,isNormal:r=!1,fontDataKey:n="tcg",fontData:i=ve[n],textStyle:l,sizeList:o=re["tcg-type"],condenseTolerant:s="strict",format:c,furiganaHelper:d,option:u}=e;const{defaultSizeLevel:m,forceRelaxCondenseLimit:b,globalScale:p=1,minLine:h=0}=null!==u&&void 0!==u?u:{},g="number"===typeof h?h:0;let f=null!==m&&void 0!==m?m:0;if(!t||!a)return f;const v=ui(a.trim(),c,{furiganaHelper:d}),{lineList:y,fullLineListOption:x,effectFlavorCondition:j}=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=[],n=[],i=new RegExp([`^(${_e}([^${Qe}]*)${Qe}\\s*)`,`^(${Ze}([^${et}]*)${et}\\s*)`].join("|"));let l=e,o="";const s=null===(t=new RegExp(ct,"m").exec(e))||void 0===t?void 0:t[1];s&&a?(o=s.trim(),l=l.replace(s,"")):o="";let c=0;for(;l.length>0&&c<=100;){const e=i.exec(l),t=null===e||void 0===e?void 0:e[1],a=null===e||void 0===e?void 0:e[2],o=null===e||void 0===e?void 0:e[3],s=null===e||void 0===e?void 0:e[4];if(a&&t)l=l.replace(t,""),r.push({line:a,alignment:"left"}),n.push(nt);else if(s&&o)l=l.replace(o,""),r.push({line:s,alignment:"justify"}),n.push(nt);else{const e=/(.*)(\n|$)/.exec(l),t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];t&&(n.push(...a.replaceAll(_e,"[").replaceAll(Qe,"]").replaceAll(Ze,"[[").replaceAll(et,"]]").split("\n")),l=l.replace(t,""))}c++}return o&&n.push(it),{lineList:n,fullLineListOption:[...r],effectFlavorCondition:o}}(v,r);let O=0;const w=Ir(i,p),{fontList:k}=w;for(;f<=k.length&&f>=0;){var S,F,C;const e=f===k.length,a=Math.min(k.length-1,f),i=e?{1:1e3,2:1e3,3:1e3}:"tcg"===c?b&&a<b?ae.relaxed:null!==(S=ae[s])&&void 0!==S?S:ae.strict:{1:800,2:800,3:800},{trueEdge:d,trueWidth:u,trueBaseline:m,trueHeightCap:h}=Nr(null!==(F=o[a])&&void 0!==F?F:o[o.length-1],p),v=r&&"tcg"===c?u-2*p:u,L=e&&"number"===typeof h,N=L?Or(w,{heightCap:h,lineCount:O}):w,T=L?f:a,{font:R,fontList:I}=N,B=L?I[T]:k[a],{fontSize:z,lineHeight:E,lineCount:D}=B,M=xr();t.font=M.setWeight("").setSize(z).setFamily(R).getFont(),t.textAlign="left";const W={fontData:N,fontLevel:T,currentFont:M};let A=[];const H=y.length>D&&"number"===typeof h?1:yr(e=>{const{currentLineList:a,currentLineCount:r}=si({ctx:t,median:e,paragraphList:y,additionalLineCount:0,format:c,textData:W,width:v,globalScale:p});return A=a,!(r>D)},200);O=Math.max(g,A.length);const P=Xn({ctx:t,...l,globalScale:p});if(!(H<(null!==(C=i[`${y.length}`])&&void 0!==C?C:i[3])&&f<k.length||g>D)){Kn(t);let e=m+E;A.forEach(r=>{let{line:i,effectiveMedian:l,isLast:o}=r;if(i===nt){const{line:a,alignment:r}=x.shift(),n="justify"!==r,i=.001*yr(e=>{const{currentLineCount:r}=si({ctx:t,median:e,paragraphList:[a],format:c,textData:W,width:v,globalScale:p});return!(r>1)}),{tokenList:l,spaceWidth:o}=oi({ctx:t,line:a,xRatio:i,format:c,isLast:n,textData:W,width:v,globalScale:p});t.scale(i,1),di({ctx:t,tokenList:l,xRatio:i,yRatio:1,trueEdge:d,trueBaseline:e,spaceWidth:o,textData:W,format:c,globalScale:p})}else if(i===it){const r=Ir(ve[n],p),i=L?Or(r,{heightCap:h,lineCount:Math.max(g,A.length)}):r,{fontSize:l}=L?i.fontList[T]:r.fontList[a],o=xr();t.font=o.setSize(l).setFamily(r.font).getFont();const s={fontData:i,fontLevel:T,currentFont:o},u=.001*yr(e=>{const{currentLineCount:a}=si({ctx:t,median:e,paragraphList:[j],format:c,textData:s,width:v,globalScale:p});return!(a>1)}),m=ti(j);t.scale(u,1),di({ctx:t,tokenList:m,xRatio:u,yRatio:1,trueEdge:d,trueBaseline:e,textData:s,format:c,globalScale:p})}else{const a=l/1e3,r=i,{tokenList:n,spaceWidth:s}=oi({ctx:t,line:r,xRatio:a,format:c,isLast:o,textData:W,width:v,globalScale:p});t.scale(a,1),di({ctx:t,tokenList:n,xRatio:a,yRatio:1,trueEdge:d,trueBaseline:e,spaceWidth:s,textData:W,format:c,globalScale:p})}t.setTransform(1,0,0,1,0,0),e+=E});break}f+=1,P()}return f},{width:pi,finishTypeCardWidth:hi,stickerSize:gi}=s,{width:fi,height:vi,topToPendulumStructure:yi}=s,xi={topRight:(async()=>{const e=document.createElement("canvas");e.width=fi,e.height=vi;const t=e.getContext("2d");return t?(await Jn(t,"mask/mask-top-right.png"),t.getImageData(0,0,fi,vi).data):null})(),bottomRight:(async()=>{const e=document.createElement("canvas");e.width=fi,e.height=vi;const t=e.getContext("2d");return t?(await Jn(t,"mask/mask-bottom-right.png"),t.getImageData(0,0,fi,vi).data):null})(),right:(async()=>{const e=document.createElement("canvas");e.width=fi,e.height=vi;const t=e.getContext("2d");return t?(await Jn(t,"mask/mask-right.png"),t.getImageData(0,0,fi,vi).data):null})(),name:(async()=>{const e=document.createElement("canvas");e.width=fi,e.height=yi;const t=e.getContext("2d");return t?(await Jn(t,"mask/mask-name.png"),t.getImageData(0,0,fi,yi).data):null})()},ji=async(e,t,a,r)=>{const{ctx:n,canvas:i}=Xt(a,r);if(!n)return i;if("string"===typeof e?await Jn(n,e,0,0):n.drawImage(e,0,0,a,r),!t)return i;const l=n.getImageData(0,0,a,r).data;for(let o=0;o<l.length;o+=4)l[o+3]=t[o+3];return n.putImageData(new ImageData(l,a,r),0,0),i},{width:Oi,height:wi,topToPendulumStructure:ki,topToPendulumStructureFrame:Si,pendulumIconFrameHeight:Fi,pendulumIconFrameWidth:Ci,pendulumFrameHeight:Li,pendulumFrameWidth:Ni,attributeSize:Ti,attributeX:Ri,attributeY:Ii,finishTypeCardWidth:Bi,stickerSize:zi}=s,Ei=e=>{let{canvas:t,artworkCanvas:a,backgroundCanvas:r,globalScale:n,region:i,hasBackground:l,frame:o,leftFrame:s,pendulumFrame:c,rightFrame:d,pendulumRightFrame:u,dyeList:b,effectBackground:p,pendulumEffectBackground:h,backgroundType:f,cardIcon:v,attribute:y,star:x,starList:j,foil:O,pendulumSize:k,opacity:S,isLink:C,isSpeedSkill:L,isXyz:N,isPendulum:T,pendulumFrameTypeMap:R,otherFinish:I,loopFinish:B,loopArtFinish:z}=e;const E=t.getContext("2d"),{artBorder:D,nameBorder:M,body:W,name:A,pendulum:H,text:P,boundless:$}=S,{artX:K,artY:U,artFrameX:Y,artFrameY:G,artFrameHeight:V,artFrameWidth:q,artFinishX:_,artFinishY:Q,artWidth:Z,artRatio:ee}=m(T,S,void 0,k),{frameType:te,effectBoxOffsetY:ae,pendulumBoxX:re,pendulumBoxY:ne,pendulumBoxWidth:ie,pendulumBoxHeight:le,pendulumBoxOffsetY:oe,artlessFrameY:se}=X[k],ce=W>0||D,de=860,ue="normal"!==O,me=N||L?o:"normal",be="synchro"===o?["normal","xyz","xyz","xyz","xyz"]:[me],pe=!$&&ce,he=Ba({frame:o,topLeftFrame:s,topRightFrame:d,bottomLeftFrame:c,bottomRightFrame:u,effectBackground:p,pendulumEffectBackground:h},T),{topLeftFrame:ge,topRightFrame:fe,bottomLeftFrame:ve,bottomRightFrame:ye,effectBackground:xe,pendulumEffectBackground:je}=he,Oe={drawFrame:async()=>{if(!E)return;const e=l&&r&&"frame"===f,{ctx:t,canvas:a}=Xt();await Jn(t,`frame/frame-${ge}.png`,0,0);const{canvas:i,ctx:o}=ma(a,b[0]);if(!e&&(ge!==fe||""!==b[0]||""!==b[1])&&o){const e=await ji(`frame/frame-${fe}.png`,await xi.topRight,Oi,wi),{canvas:t}=ma(e,b[1]);o.drawImage(t,0,0)}const{ctx:s,canvas:c}=Xt();await Jn(s,`frame-pendulum/frame-pendulum-${ve}.png`,0,0);const{canvas:d,ctx:u}=ma(c,b[2]);if(!e&&(ve!==ye||""!==b[2]||""!==b[3])&&u){u.clearRect(714,0,99,wi);const e=await ji(`frame/frame-${ye}.png`,await xi.bottomRight,Oi,wi),{canvas:t}=ma(e,b[3]);u.drawImage(t,0,0)}if(E.globalAlpha=W/100,E.scale(n,n),T&&(null===o||void 0===o||o.clearRect(Y,G,q,V),null===u||void 0===u||u.clearRect(Y,G,q,V)),e&&o&&u){const{width:e,height:t}=r;o.globalCompositeOperation="source-atop",o.drawImage(r,0,0,e,t,0,0,Oi,wi),u.globalCompositeOperation="source-atop",u.drawImage(r,0,0,e,t,0,0,Oi,wi)}E.drawImage(i,0,0),E.drawImage(d,0,0),E.resetTransform(),E.globalAlpha=1},drawCardArt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;if(!a||!e)return;const{width:t,height:r}=a;r<=0||e.drawImage(a,0,0,t,r,n*K,n*U,n*Z,n*Z/(t/r))},drawBackground:async function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!r||!t||!l)return;const{width:i,height:o}=r;if(o<=0)return;const{artX:s,artY:c,artWidth:d,artFrameWidth:u,artFrameX:b,artFrameY:p,ratio:h,artRatio:v}=m(T,S,f,k);"frame"!==f?t.drawImage(r,0,0,i,o,n*s,n*c,n*d,n*d/h):t.drawImage(r,0,0,i,o,0,0,n*Oi,n*wi);const y=null!==(e=I[3])&&void 0!==e?e:"normal";if("normal"!==y&&a){const e=Un([y],g);await e(t,"art",async e=>_n(t,`finish/art-finish-${e}.png`,n*b,n*p,n*u,n*u/v))}},drawAttribute:async()=>{var e;if(!E)return;E.scale(n,n);const{canvas:t,ctx:a}=Xt(Oi*n,(Ii+Ti)*n);await Jn(a,`attribute/attr-${F[i].fileKey}-${y.toLowerCase()}.png`,Ri,Ii);const r=null!==(e=I[0])&&void 0!==e?e:"normal";if("normal"!==r){const e=Un([r],g),{canvas:n,ctx:i}=Xt(Oi,Ii+Ti);null===i||void 0===i||i.drawImage(t,0,0),await e(i,"art",async e=>await Jn(i,`finish/finish-typeart-${e}.png`,(Oi-Bi)/2,zi)),a&&(a.globalCompositeOperation="source-in",a.drawImage(n,0,0)),E.drawImage(t,0,0)}else E.drawImage(t,0,0);E.resetTransform()},drawStar:async e=>{var t;let{style:a,starAlignment:r}=e;const i="auto"===v?La(o):v;if(!E)return;E.scale(n,n);const l=null!==(t=I[1])&&void 0!==t?t:"normal",s="normal"!==l?Un([l],g):void 0;await(async e=>{let{ctx:t,globalScale:a,cardIcon:r,text:n,star:i,starList:l,starAlignment:o="auto",style:s,onStarDraw:c,loopStarFinish:d}=e;const u=Array.isArray(l)?l:[],m=50;let b="custom"===r?u.length:"string"===typeof i?""===i?0:1:"number"===typeof i?i:0,p=m*b+4*(b-1);const h=145;let g="right";["rank","negative-level"].includes(r)&&(g="left"),g="auto"===o?g:o,b>12&&(g="center"),n&&"center"===g&&(b=0,p=0);const f="center"===g?(pi+p)/2:"left"===g?85.9125+p:728.775;let v=-54;if(t&&n&&"st"!==r){const e=50,r=Xn({ctx:t,...s,globalScale:a});t.textAlign="left"===g||"right"===g?g:"left",t.font=`bold ${e}px RoGSanSrfStd-Bd`;const i="center"===g?t.measureText(n).width/-2:"left"===g?4:-58;t.fillText(n,f+i,h+.9*e),t.textAlign="left",r()}const{canvas:y,ctx:x}=Xt(pi*a,195*a);if(await Promise.all([...Array(b)].map(async(e,t)=>{v+=54;const a="custom"===r?u[b-1-t]:r;let n=[f-(m+v),h];return await Jn(x,`subfamily/subfamily-${a}.png`,...n),await c(n)})),d){const{canvas:e,ctx:a}=Xt(pi,195);a.drawImage(y,0,0),await d(a,"art",async e=>await Jn(a,`finish/finish-typeart-${e}.png`,(pi-hi)/2,gi)),x.globalCompositeOperation="source-in",x.drawImage(e,0,0),t.drawImage(y,0,0)}else t.drawImage(y,0,0)})({ctx:E,cardIcon:i,text:"string"===typeof x?x:null,star:x,starList:j,starAlignment:r,style:a,globalScale:n,onStarDraw:async e=>"st"===i?Promise.resolve():await B(E,"star",async t=>Jn(E,`finish/finish-${t}-star.png`,...e)),loopStarFinish:s}),E.resetTransform()},drawPendulumScaleIcon:async()=>{const{canvas:e,ctx:t}=Xt(Ci,Fi);E&&t&&(await Jn(t,`frame-pendulum/pendulum-scale-${k}.png`,0,0),"scaleless"===R.blue&&t.clearRect(0,0,Ci/2,Fi),"scaleless"===R.red&&t.clearRect(Ci/2,0,Ci/2,Fi),E.scale(n,n),E.drawImage(e,0,750),E.resetTransform())},drawStatBorder:async e=>{E&&(E.scale(n,n),await Qn(t,"frame/frame-stat-border.png",0,1070,813,20,n,e),E.resetTransform())},drawNameBackground:async()=>{if(!E)return;E.scale(n,n);const{ctx:e,canvas:t}=Xt(Oi,ki);await Jn(e,`background/background-name-${ge}.png`,0,0);const{canvas:a,ctx:r}=ma(t,b[0]);if(ge!==fe||""!==b[0]||""!==b[1]){const e=await ji(`background/background-name-${fe}.png`,await xi.name,Oi,ki),t=ma(e,b[1]).canvas;null===r||void 0===r||r.drawImage(t,0,0)}E.globalAlpha=A/100,E.drawImage(a,0,0),E.globalAlpha=1,E.resetTransform()},drawEffectBackground:async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!E)return;E.scale(n,n);const{ctx:t,canvas:a}=Xt();e?await _n(t,`background/background-text-${xe}.png`,54,885+ae,705,231,0,0+ae,705,231):await Jn(t,`background/background-text-${xe}.png`,54,885);const r=ma(a,b[4]).canvas;if(E.globalAlpha=P/100,E.drawImage(r,0,0),e){var i;const{ctx:e,canvas:t}=Xt(),{exceptionFrameType:a=te,exceptionPendulumBoxOffsetHeight:r=0}=null!==(i=J[k][je])&&void 0!==i?i:{};await _n(e,`background/background-${a}-${je}.png`,re,ne+oe,ie,le,0,oe+r,ie,le+r);const n=ma(t,b[5]).canvas;E.globalAlpha=H/100,E.drawImage(n,0,0)}E.globalAlpha=1,E.resetTransform()},drawFrameBorder:async()=>{E&&(E.scale(n,n),await Jn(E,`frame/frame-border-${me}.png`,0,0),E.resetTransform())},drawNameBorder:async()=>{if(M&&E){E.scale(n,n);for(let e=0;e<be.length;e++)await Jn(E,`frame/name-border-${be[e]}.png`,0,0);E.resetTransform()}else Promise.resolve()},drawArtBorder:async()=>{if(ce&&E){let e="";e=N||L?`frame/art-border-${o}.png`:C||["zarc","hamon","uria","raviel"].includes(o)?"frame/art-border-special.png":"frame/art-border.png",E.scale(n,n),await Jn(E,e,60,170),E.resetTransform()}},drawPendulumBorder:async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!E)return;const r=hr.test(b[6]),i=r&&a&&"normal"===t?"platinum":t,{canvas:l,ctx:o}=Xt();if(await _n(o,`frame-pendulum/border-pendulum-${k}-${i}-artless`+("scaleless"===R.blue?"-scaleless":"")+".png",30,Si,Ni/2,Li,0,0,Ni/2,Li),await _n(o,`frame-pendulum/border-pendulum-${k}-${i}-artless`+("scaleless"===R.red?"-scaleless":"")+".png",30+Ni/2,Si,Ni/2,Li,Ni/2,0,Ni/2,Li),a&&r){const{canvas:e}=ma(l,b[6]);null===o||void 0===o||o.drawImage(e,0,0)}if(e)if(null===o||void 0===o||o.clearRect(0,0,Oi,se+Si),r){const e="normal"===t?"platinum":t,{ctx:a,canvas:r}=Xt();await Jn(a,`frame-pendulum/border-pendulum-${k}-${e}.png`,30,Si);const{canvas:n}=ma(r,b[6]);null===o||void 0===o||o.drawImage(n,0,0)}else await Jn(o,`frame-pendulum/border-pendulum-${k}-${t}.png`,30,Si);E.scale(n,n),E.drawImage(l,0,0),E.resetTransform()},drawEffectBorder:async()=>{E&&(E.scale(n,n),ue||"speed-skill"!==ve?await Jn(E,"frame/effect-border.png",35,de):await Jn(E,"frame/effect-border-speed-skill.png",35,de),E.resetTransform())},drawCardBorder:async()=>{if(E){if(E.scale(n,n),hr.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Xt();await Jn(t,`frame/card-border-${e}.png`,0,0);const{canvas:r}=ma(a,b[6]);E.drawImage(r,0,0)}else await Jn(E,`frame/card-border${ue?`-${O}`:""}.png`,0,0);E.resetTransform()}},drawArtBorderFoil:async()=>{if(E){if(E.scale(n,n),ce)if(hr.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Xt();await Jn(t,`frame/art-border-${e}.png`,60,170);const{canvas:r}=ma(a,b[6]);E.drawImage(r,0,0)}else await Jn(E,`frame/art-border-${O}.png`,60,170);E.resetTransform()}},drawEffectBorderFoil:async()=>{if(E){if(E.scale(n,n),hr.test(b[6])){const e="normal"===O?"platinum":O,{ctx:t,canvas:a}=Xt();await Jn(t,`frame/effect-border-${e}.png`,35,de);const{canvas:r}=ma(a,b[6]);E.drawImage(r,0,0)}else await Jn(E,`frame/effect-border-${O}.png`,35,de);E.resetTransform()}},drawNameFinish:async()=>{(ce||M)&&E&&(E.scale(n,n),await B(E,"name",async e=>Jn(E,`finish/finish-${e}-name.png`,0,0)),E.resetTransform())},drawAttributeFinish:async()=>{y!==w&&E&&(E.scale(n,n),await B(E,"attribute",async e=>Jn(E,`finish/finish-${e}-attribute.png`,678,55)),E.resetTransform())},drawArtFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;pe&&e&&(e.scale(n,n),await z(e,"art",async(t,a)=>await _n(e,`finish/art-finish-${t}${T?a:""}.png`,_,Q,q,q/ee),k),e.resetTransform())},drawArtOverlayFinish:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;e&&(e.scale(n,n),await B(e,"art-overlay",async t=>Jn(e,`finish/finish-${t}-`+(pe?"art":"unart")+"-overlay"+(T?`-pendulum-${k}`:"")+".png",_,Q)),e.resetTransform())},drawArtBorderFinish:async()=>{ce&&E&&(E.scale(n,n),await B(E,"art-border",async e=>Jn(E,`finish/finish-${e}-art-border.png`,0,0)),E.resetTransform())},drawPendulumArtBorderFinish:async()=>{E&&(E.scale(n,n),ce&&await B(E,"art-border-pendulum",e=>Jn(E,`finish/finish-${e}-art-border-pendulum-${k}.png`,0,0)),E.resetTransform())},drawBorderPendulumFinish:async()=>{E&&(E.scale(n,n),await B(E,"border-pendulum",async e=>{const t=`finish/finish-${e}-border-pendulum-${k}`;await _n(E,`${t}${"scaleless"===R.blue?"-scaleless":""}.png`,0,0,Oi/2,wi,0,0,Oi/2,wi),await _n(E,`${t}${"scaleless"===R.red?"-scaleless":""}.png`,0+Oi/2,0,Oi/2,wi,Oi/2,0,Oi/2,wi)}),E.resetTransform())},drawFrameFinish:async()=>{E&&(E.scale(n,n),await B(E,"frame",async e=>Jn(E,`finish/finish-${e}-frame${T?`-pendulum-${k}`:""}.png`,0,0)),E.resetTransform())},drawFrameBackgroundFinish:async()=>{E&&(E.scale(n,n),await B(E,"frame-background",async e=>Jn(E,`finish/finish-${e}-frame-background${T?"-pendulum":""}.png`,0,0)),E.resetTransform())},drawOverlayFinish:async()=>{E&&(E.scale(n,n),await B(E,"overlay",async e=>Jn(E,`finish/finish-${e}-overlay.png`,0,0)),E.resetTransform())},drawCardBorderFinish:async()=>{E&&(E.scale(n,n),await B(E,"card-border",async e=>Jn(E,`finish/finish-${e}-card-border.png`,0,0)),E.resetTransform())}};return Oe},Di=async(e,t,a,r,n,i,l,o)=>{var s,c,d;const{isSpeedSkill:u,format:m,frame:b,furiganaHelper:p,globalScale:h}=o,g=r*h,f=n*h,v=i*h;if(!t||!a)return;const{embossPitch:y,embossYaw:x,embossThickness:j,fillStyle:O,font:w,gradientAngle:k,gradientColor:S,hasEmboss:F,hasGradient:C,hasOutline:L,hasShadow:N,headTextFillStyle:T,lineColor:R,lineOffsetX:I,lineOffsetY:B,lineWidth:z,shadowBlur:E,shadowColor:D,shadowOffsetX:M,shadowOffsetY:W,pattern:A}={...P(),...l},{patternImage:H,blendMode:$}=null!==(s=Y[null!==A&&void 0!==A?A:""])&&void 0!==s?s:{};t.textAlign="left";const K=Ir({...(null!==(c=ye[w])&&void 0!==c?c:ye.Default).fontData,headTextFillStyle:T},h),U=xr({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),G={fontLevel:0,fontData:K,currentFont:U},V=ui(a,m,{multiline:!1,furiganaHelper:p,dictionaryType:"rubyFormName"}),X="ocg"===m?[V]:V.split(new RegExp("([^&A-Za-z0-9\\-/\\s\\(\\)!,.\u2018\u201c\u2019\u201d:;<>\\[\\]\\\\])","g")),q=xr({defaultFamily:K.font,defaultSize:K.fontList[0].fontSize,defaultWeight:K.weight}),J=q.getFont(),_=q.setSize(e=>e*K.symbolFontRatio).setStyle("small-caps").setFamily(K.symbolFont).getFont();let Q=0,Z=0;X.forEach((e,a)=>{t.font=a%2===0?J:_;const r=t.measureText(e.replaceAll(rt,""));Q=Math.max(Q,r.actualBoundingBoxAscent),Z=Math.max(Z,r.actualBoundingBoxDescent)},0),t.font=J;let ee=0;const te=yr(e=>{const{currentLineCount:a,currentLineList:r}=si({ctx:t,median:e,paragraphList:[V],format:m,textData:G,width:v,globalScale:h});return!(a>1)&&(ee=r[0].actualLineWidth,!0)})/1e3;t.scale(te,1);const ae=Rr(ue,h),re=null!==(d=K.fontList[0].offsetY)&&void 0!==d?d:ae.offsetY,ne=ti(V),ie=ee>0&&C?((e,t,a,r,n,i,l,o)=>{const s=t%360,c=`${Math.floor(s/90)}`,d=s%90,u=l+o,m=r+n/2,b=i+(o-l)/2;let p=n,h=u;"1"!==c&&"3"!==c||(p=u,h=n);const g=Math.sqrt(p**2/4+h**2/4);if(g>0){const t=90-(180*Math.asin(p/2/g)/Math.PI-d),r=Math.sin(t/180*Math.PI)*g,n=Math.sin(d/180*Math.PI)*r,i=Math.cos(d/180*Math.PI)*r;let l=n,o=i;"1"===c&&(l=i,o=-n),"2"===c&&(l=-n,o=-i),"3"===c&&(l=-i,o=n);const s=m+l,u=b-o,h=m-l,f=b+o,v=e.createLinearGradient(s,u,h,f);return a.forEach(e=>{let{color:t,offset:a}=e;return v.addColorStop(parseFloat(a),t)}),v}})(t,k,Sr(S),g,ee,f,Q,Z):void 0;let le=F&&"number"===typeof j&&j>0,oe=()=>{};le&&(oe=Xn({ctx:t,lineWidth:j,lineColor:O,lineColorGradient:ie,globalScale:h,useDefault:!1})),t.fillStyle=null!==ie&&void 0!==ie?ie:O;const{tokenEdge:se}=di({ctx:t,tokenList:ne,xRatio:te,yRatio:1,trueEdge:g,trueBaseline:f,textData:G,format:m,globalScale:h,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n-(u?re:0)),le&&t.strokeText(a,r,n-(u?re:0))}});if(oe(),H){const a=e.cloneNode(),r=a.getContext("2d");r&&(t.setTransform(1,0,0,1,0,0),r.scale(h,h),await Jn(r,`frame/frame-${b}.png`,0,0),await Jn(r,`background/background-name-${b}.png`,0,0),r.globalCompositeOperation=$,r.resetTransform(),await _n(r,`finish-name/${H}.png`,g,f-Q,v,Q+Z),t.globalCompositeOperation="source-in",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",t.scale(te,1))}if(F){const a=10,r=ka({inputCanvas:e,lightPitch:y,lightYaw:x,minIntensity:-.9,maxIntensity:.9,affectedWidth:Math.ceil(se+a)});r&&t.putImageData(r,0,0)}if(L){const e=Xn({ctx:t,lineWidth:z+(F?j:0),lineColor:R,globalScale:h,useDefault:!1});t.globalCompositeOperation="destination-over",di({ctx:t,tokenList:ne,xRatio:te,yRatio:1,trueEdge:g,trueBaseline:f,textData:G,format:m,globalScale:h,option:{drawHeadText:!1},textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.lineJoin="round",t.strokeText(a,r+I,n+B-(u?re:0))}}),t.lineJoin="miter",t.globalCompositeOperation="source-over",e()}if(N){const a=e.cloneNode(),r=a.getContext("2d");if(r){const n=Xn({ctx:r,x:M,y:W,shadowColor:D,blur:E,globalScale:h,useDefault:!1});t.scale(1/te,1),r.drawImage(e,0,0),t.globalCompositeOperation="destination-over",t.drawImage(a,0,0),t.globalCompositeOperation="source-over",n()}}di({ctx:t,tokenList:ne,xRatio:te,yRatio:1,trueEdge:g,trueBaseline:f,textData:G,format:m,globalScale:h,textDrawer:()=>{}});const ce=P();t.setTransform(1,0,0,1,0,0),t.fillStyle=ce.fillStyle,t.lineJoin="miter",t.globalCompositeOperation="source-over"},Mi={smaller:0,normal:1,large:2,highPendulumNormal:1,highPendulumSmaller:0},Wi=e=>{var t,a;let{ctx:r,value:n,format:i,metricMethod:l,size:o,furiganaHelper:s,globalScale:c}=e;const{edgeAlignment:d="left",trueEdge:u,trueBaseline:m,trueWidth:b}=Nr(null!==(t=null===(a=le[i])||void 0===a?void 0:a[o])&&void 0!==t?t:le.tcg.medium,c),p=Ir({tcg:Oe,ocg:we}[i],c),h={...p,metricMethod:null!==l&&void 0!==l?l:p.metricMethod},{font:g}=h,f=Mi[o],v=h.fontList[f],y=xr({defaultFamily:g,defaultSize:`${v.fontSize}px`}),x={fontLevel:f,fontData:h,currentFont:y};let j=0;r.font=y.getFont(),r.textAlign="left";const O=ui(n,i,{multiline:!1,furiganaHelper:s}),w=yr(e=>{const{currentLineCount:t,currentLineList:a}=si({ctx:r,median:e,paragraphList:[O],format:i,textData:x,width:b,globalScale:c});return!(t>1)&&(j=a[0].actualLineWidth,!0)})/1e3;r.scale(w,1);const k=di({ctx:r,tokenList:ti(O),xRatio:w,yRatio:1,trueEdge:"left"===d?u:u-j*w,trueBaseline:m,textData:x,format:i,globalScale:c,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),{...k,xRatio:w}},{finishTypeCardWidth:Ai,width:Hi,iconHeight:Pi,iconWidth:$i}=s,Ki=(e,t,a,r,n,i)=>{const l=a*i,o=r*i;if(e&&t){const a=n*i;e.font=`${a}px MatrixBoldSmallCaps`,e.textAlign="left";const r=`${t}`.split("");if(1===r.length){const t=r[0],n=l-e.measureText(t).width/2;e.fillText(t,"1"===t?n+2*i:n,o+a)}else if(2===r.length){const t=r[0],n=r[1],i=.825*e.measureText(t).width,s=e.measureText(n).width,c=l-i-("1"===t?0:.1*i);e.fillText(t,c,o+a),e.fillText(n,c+i-("1"===t?"1"===n?.1*e.measureText("1").width:.1*s:-.1*s),o+a)}else{let t=0;r.forEach(a=>{t+=e.measureText(a).width*("1"===a?.7:1)});let n=l-t/2;r.forEach(t=>{e.fillText(t,n,o+a),n+=e.measureText(t).width*("1"===t?.7:1)})}}},Ui=(e,t,a,r,n)=>{if(!e)return;const i=a*n,l=r*n;e.scale(1,.98),e.font=`bold ${35.73*n}px Matrix-Bold`;const o=Pn(e,t,.075,i,l/.98);e.setTransform(1,0,0,1,0,0),e.scale(1,1.01),e.font=`bold ${34.74*n}px Matrix-Bold`,Pn(e,"/",.15,o+5*n,l/1.01),e.setTransform(1,0,0,1,0,0)},Yi=(e,t,a,r,n)=>{if(!e||null==t)return;const i=a*n,l=r*n,o=73.97*n;if("\u221e"===t)e.textAlign="right",e.font=`bold ${36.18*n}px matrix`,e.fillText(t,i+o,l);else if("?"===t)e.textAlign="right",e.scale(1,1.29),e.font=` ${34*n}px MatrixBoldSmallCaps`,e.fillText(t,i+o,l/1.29-1),e.setTransform(1,0,0,1,0,0);else{e.textAlign="left";const a=`${t}`.split("?");let r=a.reduce((t,r,i)=>{e.font=36.18*n+"px MatrixBoldSmallCaps";let l=t+e.measureText(r).width;return i<a.length-1&&(e.font=36.18*n+"px matrix",l+=e.measureText("?").width),l},0);if(r>0){const t=Math.min(o/r,1);e.scale(t,1),a.reduce((r,i,o,s)=>{const c=s[s.length-1-o];let d=r;return e.font=36.18*n+"px MatrixBoldSmallCaps",d-=e.measureText(c).width*t,e.fillText(c,d/t,-1+l),o<a.length-1&&(e.font=34*n+"px MatrixBoldSmallCaps",d-=e.measureText("?").width*t,e.scale(1,1.29),e.fillText("?",d/t,l/1.29-1),e.setTransform(1,0,0,1,0,0)),d},i+o),e.scale(1/t,1)}}},{height:Gi,width:Vi,finishTypeCardWidth:Xi,finishTypeCardHeight:qi,stickerX:Ji,stickerY:_i,stickerSize:Qi}=s,Zi=(e,t,a)=>{const{card:n}=Cn(),{exportCanvasRef:i,artworkCanvasRef:l,backgroundCanvasRef:o,frameCanvasRef:s,creatorCanvasRef:u,effectCanvasRef:b,nameCanvasRef:p,passwordCanvasRef:f,pendulumEffectCanvasRef:v,pendulumScaleCanvasRef:y,setIdCanvasRef:x,statCanvasRef:j,stickerCanvasRef:O,cardIconCanvasRef:k,typeCanvasRef:S,finishCanvasRef:F,lightboxRef:C,previewCanvasRef:N}=t,{format:R,region:I,hasBackground:B,backgroundType:z,frame:E,foil:D,finish:M,artFinish:W,otherFinish:A,opacity:H,name:P,nameStyle:$,nameStyleType:K,effectTextStyle:U,pendulumTextStyle:Y,typeTextStyle:G,statTextStyle:V,otherTextStyle:q,effect:J,effectStyle:_,typeAbility:Q,isPendulum:Z,pendulumFrame:ee,pendulumRightFrame:te,pendulumEffect:ae,pendulumScaleBlue:re,pendulumScaleRed:le,pendulumStyle:ce,pendulumSize:de,leftFrame:me,rightFrame:be,dyeList:pe,atk:he,def:ge,linkMap:fe,linkRating:ve,attribute:ye,cardIcon:Oe,subFamily:we,star:Fe,starAlignment:Ce,starList:Le,setId:Ne,password:Te,creator:Re,sticker:Ie,isLegacyCard:Be,isFirstEdition:ze,isDuelTerminalCard:Ee,isSpeedCard:De,isLimitedEdition:We,furiganaHelper:Ae,flag:He}=n,Pe=Object(r.useRef)({frame:{name:"frame",order:1,rerun:0,instructor:()=>Promise.resolve()},attribute:{name:"attribute",order:2,rerun:0,instructor:()=>Promise.resolve()},sticker:{name:"sticker",order:3,rerun:0,instructor:()=>Promise.resolve()},creator:{name:"creator",order:4,rerun:0,instructor:()=>Promise.resolve()},name:{name:"name",order:5,rerun:0,instructor:()=>Promise.resolve()},typeAbility:{name:"typeAbility",order:6,rerun:0,instructor:()=>Promise.resolve()},overlay:{name:"overlay",order:7,rerun:0,instructor:()=>Promise.resolve()}}),$e=_.background,Ke=ce.background,Ue=_.minLine,Ye=ce.minLine,Ge="auto"===ee?Z?"spell":E:ee,Ve=null===_||void 0===_?void 0:_.condenseTolerant,Xe=(e=>"normal"===e.frame&&Ca(e))(n),qe=(e=>"xyz"===e.frame)(n),Je=(e=>!0===e.isLink)(n),_e=Ca(n),Qe=Fa(n),{body:Ze=100,boundless:et}=H,tt=!!(Ze<50||et),at=Ta(Ge),{bottomRightFrame:rt}=Ba({frame:E,topLeftFrame:me,topRightFrame:be,bottomLeftFrame:ee,bottomRightFrame:te,effectBackground:$e,pendulumEffectBackground:Ke},Z),nt=Ta(rt),it=Na(E),{levelStyle:lt,resolvedEffectTextStyle:ot,resolvedPendulumEffectTextStyle:st,resolvedStatTextStyle:ct,resolvedTypeTextStyle:dt,resolvedOtherEffectTextStyle:ut}=Object(r.useMemo)(()=>(e=>{let{lightHeader:t,requireShadow:a,effectTextStyle:r,pendulumTextStyle:n,otherTextStyle:i,statTextStyle:l,typeTextStyle:o}=e;const s={color:t?"#ffffff":"#000000"},c=a?{blur:2,y:1,shadowColor:t?"#000000":"#ffffff",...s}:s,[d,u,m,b]=r,p=d?{...m?{y:0,blur:4,shadowColor:b}:{},color:u}:{},[h,g,f,v]=n,y=h?{...f?{y:0,blur:4,shadowColor:v}:{},color:g}:{},[x,j,O,w]=o,k=x?{...O?{y:1,blur:1,shadowColor:w}:{},color:j}:{},[S,F,C,L]=l,N=S?{...C?{y:1,blur:1,shadowColor:L}:{},color:F}:{},[T,R,I,B]=i;return{levelStyle:c,resolvedEffectTextStyle:p,resolvedOtherEffectTextStyle:T?{...I?{y:0,blur:0,shadowColor:B}:{},color:R}:{},resolvedPendulumEffectTextStyle:y,resolvedStatTextStyle:N,resolvedTypeTextStyle:k}})({lightFooter:at,lightHeader:it,requireShadow:tt,effectTextStyle:U,pendulumTextStyle:Y,otherTextStyle:q,statTextStyle:V,typeTextStyle:G}),[at,it,tt,U,Y,q,V,G]),mt=pe[6],bt=we.toUpperCase(),pt=Q.map(e=>e.trim()).join("ocg"===R?"\uff0f":"\u200a/\u200a"),[ht,gt]=He,ft=!Z&&!_e&&Je&&!(he||ge),vt=Ia(gt,Je)&&!ft,yt=vt&&ht,xt=!(!he&&!ge)||vt||!(!Z||!Ne),jt=pt.length>0&&("auto"===Oe?_e||Qe:"st"!==Oe),Ot=!(""===(null!==re&&void 0!==re?re:"")),wt=!(""===(null!==le&&void 0!==le?le:"")),{isInitializing:kt,imageChangeCount:St,language:Ft,globalScale:Ct}=a,Lt=e&&!1===kt,Nt=Object(r.useMemo)(()=>Un(M,h),[M]),Tt=Object(r.useMemo)(()=>Un([W],g),[W]),[,Rt,It]=A;Object(r.useEffect)(()=>{Lt&&(Pe.current.frame.rerun+=1,Pe.current.frame.instructor=async()=>{var e;const t=null===(e=s.current)||void 0===e?void 0:e.getContext("2d"),a=l.current,r=o.current;if(!Kn(t)||!s.current)return;const n={...d(),...H},{artBorder:i,body:u,boundless:b,baseFill:p}=n,h=(e,t,a,r,n,i)=>new Promise(l=>{setTimeout(()=>{e.fillStyle=B?null!==i&&void 0!==i?i:p:c,e.fillRect(t,a,r,n),l(!0)},0)}),g=u>0||i,{drawAttribute:f,drawBackground:v,drawCardArt:y,drawFrame:x,drawPendulumScaleIcon:j,drawStar:O,drawNameBackground:w,drawEffectBackground:k,drawFrameBorder:S,drawNameBorder:F,drawArtBorder:C,drawPendulumBorder:L,drawBorderPendulumFinish:N,drawEffectBorder:T,drawCardBorder:R,drawStatBorder:M,drawAttributeFinish:W,drawArtBorderFoil:P,drawEffectBorderFoil:$,drawNameFinish:K,drawArtFinish:U,drawArtOverlayFinish:Y,drawArtBorderFinish:G,drawPendulumArtBorderFinish:V,drawFrameFinish:X,drawFrameBackgroundFinish:q,drawOverlayFinish:J,drawCardBorderFinish:_}=Ei({canvas:s.current,artworkCanvas:a,backgroundCanvas:r,globalScale:Ct,region:I,frame:E,leftFrame:me,pendulumFrame:ee,rightFrame:be,pendulumRightFrame:te,dyeList:pe,effectBackground:$e,pendulumEffectBackground:Ke,hasBackground:B,backgroundType:z,attribute:ye,cardIcon:Oe,star:Fe,starList:Le,foil:D,pendulumSize:de,opacity:n,isLink:Je,isSpeedSkill:Qe,isXyz:qe,isPendulum:Z,pendulumFrameTypeMap:{red:wt?"normal":"scaleless",blue:Ot?"normal":"scaleless"},otherFinish:A,loopFinish:Nt,loopArtFinish:Tt});await h(t,0,0,Ct*Vi,Ct*Gi);const{canvas:Q,ctx:ae}=Xt(Vi*Ct,Gi*Ct);a&&ae&&y(ae),await U(ae),await Y(ae);const{canvas:re,ctx:ne}=Xt(Vi*Ct,Gi*Ct);if(ne&&await h(ne,0,0,Ct*Vi,Ct*Gi),r&&ne&&await v(ne,g),!b&&ne&&ne.drawImage(Q,0,0),t.drawImage(re,0,0),await x(),await R(),await _(),Z||(b||(await w(),await k(),await T(),await $()),await C(),await P(),await G()),Z&&!b){const{artX:e,artY:a,artWidth:r,ratio:n}=m(Z,H,void 0,de);t.drawImage(re,Ct*e,Ct*a,Ct*r,Ct*r/n,Ct*e,Ct*a,Ct*r,Ct*r/n),await w(),await k(!0),await j(),await L(g,"normal"),await L(g,D,!0),await V(),g&&await N()}if(b||(await X(),await K()),g&&await q(),b){await w(),await K(),await F(),Je&&!Z?await G():Z&&(g&&(await L(g,"normal"),await L(g,D,!0)),await V());const{artX:e,artY:a,artWidth:r,ratio:n}=m(Z,H,"full",de);t.drawImage(Q,Ct*e,Ct*a,Ct*r,Ct*r/n,Ct*e,Ct*a,Ct*r,Ct*r/n),Z?(await k(!0),await j(),await L(!1,"normal"),await L(!1,D,!0),await N()):(await k(),await T(),await $()),await X()}if(xt&&await M({color:"#000000",...ct}),await f(),await W(),await O({style:lt,starAlignment:Ce}),b||await F(),await S(),vt&&xt){const e=Xn({ctx:t,...ct,globalScale:Ct}),a="string"===typeof ve&&ve.length>0?ve:`${Array.isArray(fe)?fe.length:0}`;await(async(e,t,a,r)=>{const n=e.getContext("2d");if(!n||"string"!==typeof t)return;await Qn(e,"link/link-text.png",...Tr([600,1080,120,30],r),r,a);const i=isNaN(Number(t))?1106:1105,l=Xn({ctx:n,...a,globalScale:r});n.textAlign="right",n.scale(1.2,1),n.font=`bold ${24*r}px RoGSanSrfStd-Bd`,n.fillText(`${t}`,622.75*r,i*r),n.setTransform(1,0,0,1,0,0),n.textAlign="left",l()})(s.current,a,ct,Ct),e()}await(async e=>{let{canvas:t,globalScale:a,type:r,isPendulum:n,isLink:i,isDuelTerminalCard:l,isSpeedCard:o,bordered:s,textStyle:c}=e;if(null===t||void 0===t?void 0:t.getContext("2d")){if(l){const e=n?[255,1072,175,35]:i?[151,848,216,24]:[80,843,270,30];await Qn(t,`text/text-duel-terminal-${r}${s?"-bordered":""}.png`,...Tr(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}if(o){const e=n?[255,1084,176.4,25]:i?[151,854,215.6,22]:[80,850,245,25];await Qn(t,`text/text-speed-duel-${r}${s?"-bordered":""}.png`,...Tr(e,a),a,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)}}})({canvas:s.current,globalScale:Ct,type:at&&!Z?"white":"black",bordered:(u<50||b)&&!Z,isDuelTerminalCard:Ee,isSpeedCard:De,isLink:Je,isPendulum:Z,textStyle:ut}),await J()})},[Lt,Ct,l,ye,o,z,Oe,pe,$e,M,D,R,I,E,s,B,Ee,Je,Z,De,Qe,qe,me,lt,at,fe,ve,Tt,Nt,H,A,Ke,ee,te,de,ut,ct,be,vt,Fe,Le,Ce,xt,Ot,wt,St]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=y.current)||void 0===e?void 0:e.getContext("2d");if(Kn(t)&&Z){const{numberBlueX:e,numberRedX:a,numberY:r,fontSize:n}=X[de];""!==(null!==re&&void 0!==re?re:"")&&Ki(t,re,e,r,n,Ct),""!==(null!==le&&void 0!==le?le:"")&&Ki(t,le,a,r,n,Ct)}},[Lt,Ct,Z,de,re,le,y]),Object(r.useEffect)(()=>{Lt&&(Pe.current.name.rerun+=1,Pe.current.name.instructor=async()=>{var e;const t=null===(e=p.current)||void 0===e?void 0:e.getContext("2d");Kn(t)&&p.current&&await Di(p.current,t,P,"tcg"===R?60:68,116,ye===w?"tcg"===R?688:674:"tcg"===R?608:598,za({format:R,frame:E,nameStyle:$,nameStyleType:K,foil:D}),{isSpeedSkill:Qe,format:R,frame:E,furiganaHelper:Ae,globalScale:Ct})})},[Lt,Ct,ye,D,R,E,Ae,Qe,P,p,$,K]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=j.current)||void 0===e?void 0:e.getContext("2d");if(!Kn(t)||!xt)return;const a=Xn({ctx:t,...ct,globalScale:Ct}),r=vt;if(he){const e=((vt?!!ge&&yt:!!ge)?168.75:0)+(r?168.75:0);Ui(t,"ATK",600.85-e,1106,Ct),Yi(t,he.trim(),677.574-e,1106.5,Ct)}if(ge&&(!vt||yt)){const e=r?168.75:0;Ui(t,"DEF",600.85-e,1106,Ct),Yi(t,ge.trim(),673.865-e,1106.5,Ct)}a()},[Lt,Ct,he,ge,vt,_e,yt,ct,j,xt]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=x.current)||void 0===e?void 0:e.getContext("2d");Kn(t)&&((e,t,a)=>{if(!e)return;const{globalScale:r,isPendulum:n,isLink:i,withShadow:l,format:o,lightFooter:s,textStyle:c}=a;let d=.125,u=0,m=0;e.font=`${l?"bold":""} ${22*r}px stone-serif-regular`,"ocg"===o&&(d=.145,u=-1,m=-3);const b=Xn({ctx:e,color:s&&!n?"#ffffff":"#000000",shadowColor:l?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:l&&!n?3:0,globalScale:r,...c,...null!==c&&void 0!==c&&c.shadowColor?{x:0,y:0,blur:3}:{}});n?Pn(e,t,d,(66.65+m)*r,(1105.01+u)*r):i?$n(e,t,d,(666.56+m)*r,(872.94+u)*r):$n(e,t,d,(728.78+m)*r,(871.5+u)*r),b()})(t,Ne,{globalScale:Ct,isLink:Je,isPendulum:Z,withShadow:tt&&!Z,format:R,lightFooter:nt,textStyle:ut})},[Lt,Ct,R,Je,Z,nt,x,Ne,Qe,Ge,tt,ut]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=f.current)||void 0===e?void 0:e.getContext("2d");if(!Kn(t))return;const a=/^[0-9]*$/.test(Te),r=a&&Z&&Je,{rightEdge:n}=(e=>{var t,a;let{ctx:r,globalScale:n,value:i,format:l,alignment:o,baselineOffset:s=0,edgeOffset:c=0,lightFooter:d,hasShadow:u,textStyle:m,fontLevel:b}=e;if(!Kn(r))return{rightEdge:0};const p=Xn({ctx:r,color:d?"#ffffff":"#000000",shadowColor:u?d?"#000000":"#ffffff":"#000000",x:0,y:0,blur:u?3:0,globalScale:n,...m,...null!==m&&void 0!==m&&m.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:h,trueBaseline:g,trueWidth:f}=Nr(null!==(t=se[l])&&void 0!==t?t:se.tcg,n),v=Ir(je[l],n),{font:y}=v,x=ui(i,l,{multiline:!1,furiganaHelper:!1});let j={fontLevel:b,fontData:v,currentFont:xr()},O=0,w=1e3,k=v.fontList[0];for(let L=0;L<v.fontList.length;L++){k=v.fontList[L];const e=xr({defaultFamily:y,defaultSize:`${k.fontSize}px`,defaultWeight:u?"bold":""});let t={fontLevel:L,fontData:v,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",w=yr(e=>{const{currentLineCount:i,currentLineList:o}=si({ctx:r,median:e,paragraphList:[x],format:l,textData:t,width:f,globalScale:n});return!(i>1)&&(a=o[0].actualLineWidth,!0)}),O=a,j=t,w>=1e3)break}const S=w/1e3;r.scale(S,1);const F=Rr(ue,n),C=di({ctx:r,tokenList:ti(x),xRatio:S,yRatio:1,trueEdge:"left"===o?h+c:h-c-O*S,trueBaseline:g+(null!==(a=k.offsetY)&&void 0!==a?a:F.offsetY)+s,textData:j,format:l,globalScale:n,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),p(),{rightEdge:C.tokenEdge}})({ctx:t,globalScale:Ct,value:Te,lightFooter:at,alignment:"left",edgeOffset:(r?80:0)*Ct,format:R,hasShadow:"zarc"===Ge||tt,textStyle:ut,fontLevel:a?0:1});if(ze){const e=!Z||!!a,r=!Be&&a||Z?Math.max(n/Ct+14.813,162.2)-("ocg"===R?7:0):Je?151:89;e&&function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1150.93,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{globalScale:1,stroke:!1};if(!e)return;const{stroke:i=!1,textStyle:l,globalScale:o}=null!==n&&void 0!==n?n:{},s=t*o,c=a*o,d=r*o,u=Xn({ctx:e,globalScale:o,...l,...null!==l&&void 0!==l&&l.shadowColor?{x:0,y:0,blur:3}:{}}),m=7.4*o;e.font=23.7*o+"px palatino-linotype-bold";let b=s;e.fillText("1",b,c+d),i&&e.strokeText("1",b,c),b+=e.measureText("1").width-2*o,e.font=17.78*o+"px palatino-linotype-bold",e.fillText("st",b,c-m+d),i&&e.strokeText("st",b,c-m),b+=e.measureText("st").width,e.font=22.22*o+"px palatino-linotype-bold",e.fillText(" Edition",b,c+d),i&&e.strokeText(" Edition",b,c),u()}(t,r,!Be&&a||Z?1150.93:871,!Be&&a||Z?Qe?-2:-1:0,{stroke:!1,globalScale:Ct,textStyle:{color:at?"#ffffff":"#000000",...ut}})}},[Lt,Ct,ze,Te,f,at,R,tt,Je,Qe,Z,Be,Ge,ut]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=u.current)||void 0===e?void 0:e.getContext("2d");Pe.current.creator.rerun+=1,Pe.current.creator.instructor=async()=>{var e;if(!Kn(t))return;const a={...d(),...H},{body:r,boundless:n}=a,i=(e=>{var t,a;let{ctx:r,value:n,format:i,alignment:l,baselineOffset:o=0,lightFooter:s,hasShadow:c,textStyle:d,globalScale:u}=e;if(!Kn(r))return;const m=Xn({ctx:r,color:s?"#ffffff":"#000000",shadowColor:c?s?"#000000":"#ffffff":"#000000",y:0,x:0,blur:c?3:0,globalScale:u,...d,...null!==d&&void 0!==d&&d.shadowColor?{x:0,y:0,blur:3}:{}}),{trueEdge:b,trueBaseline:p,trueWidth:h}=Nr(null!==(t=oe[i])&&void 0!==t?t:oe.tcg,u),g=Ir(xe[i],u),{font:f}=g,v=ui(n,i,{multiline:!1,furiganaHelper:!1});let y={fontLevel:0,fontData:g,currentFont:xr()},x=0,j=1e3,O=g.fontList[0];for(let F=0;F<g.fontList.length;F++){O=g.fontList[F];const e=xr({defaultFamily:f,defaultSize:`${O.fontSize}px`,defaultWeight:c?"bold":""});let t={fontLevel:F,fontData:g,currentFont:e},a=0;if(r.font=e.getFont(),r.textAlign="left",j=yr(e=>{const{currentLineCount:n,currentLineList:l}=si({ctx:r,median:e,paragraphList:[v],format:i,textData:t,globalScale:u,width:h});return!(n>1)&&(a=l[0].actualLineWidth,!0)}),x=a,y=t,j>=1e3)break}const w=j/1e3;r.scale(w,1);const k=Rr(ue,u),S=di({ctx:r,tokenList:ti(v),xRatio:w,yRatio:1,trueEdge:"left"===l?b:b-x*w,trueBaseline:p+(null!==(a=O.offsetY)&&void 0!==a?a:k.offsetY)+o*u,textData:y,format:i,globalScale:u,textDrawer:e=>{let{ctx:t,letter:a,scaledEdge:r,scaledBaseline:n}=e;t.fillText(a,r,n)}});return r.setTransform(1,0,0,1,0,0),m(),{leftEdge:"left"===l?b:b-x*w,...S}})({ctx:null===(e=u.current)||void 0===e?void 0:e.getContext("2d"),format:R,value:Re,alignment:"right",baselineOffset:Qe?-2:0,hasShadow:tt,lightFooter:nt,textStyle:ut,globalScale:Ct}),l=("tcg"===R?390:350)*Ct,o=("tcg"===R?30:40)*Ct;var s;We&&u.current&&await(async e=>{let{canvas:t,type:a,globalScale:r,isPendulum:n,isLink:i,isLegacyCard:l,widthOffset:o,bordered:s,textStyle:c}=e;const d=!l||n?[145,1123,240-o/r,37]:i?[151,846,216,36]:[80,843,240,40];await Qn(t,`text/text-limited-edition-${a}${s?"-bordered":""}.png`,...Tr(d,r),r,null!==c&&void 0!==c&&c.shadowColor?{...c,blur:3,x:0,y:0}:c)})({canvas:u.current,ctx:t,globalScale:Ct,type:at&&!Z?"white":"black",bordered:(r<50||n)&&!Z,isLink:Je,isPendulum:Z,widthOffset:(null!==(s=null===i||void 0===i?void 0:i.leftEdge)&&void 0!==s?s:l)<l?o:0,isLegacyCard:Be,textStyle:ut})}},[Lt,Ct,Re,u,b,R,Be,We,Je,Z,Qe,at,nt,H,tt,ut]),Object(r.useEffect)(()=>{Lt&&(Pe.current.sticker.rerun+=1,Pe.current.sticker.instructor=async()=>{var e;const t=null===(e=O.current)||void 0===e?void 0:e.getContext("2d");if(!Kn(t))return;const{canvas:a,ctx:r}=Xt(Vi*Ct,Gi*Ct);await(async e=>{let{ctx:t,sticker:a,globalScale:r,x:n,y:i}=e;if(Kn(t)){if(a===T)return Promise.resolve();t.scale(r,r),await Jn(t,`sticker/sticker-${a.toLowerCase()}.png`,n,i),t.resetTransform()}})({ctx:r,sticker:Ie,globalScale:Ct,x:Ji,y:_i});const n=null!==It&&void 0!==It?It:"normal";if("normal"!==n){const e=Un([n],g),{canvas:i,ctx:l}=Xt(Vi*Ct,Gi*Ct);l&&r&&(l.drawImage(a,0,0),l.scale(Ct,Ct),await e(l,"art",async e=>await Jn(l,`finish/finish-typeart-${e}.png`,Ji-Xi+Qi,_i-qi+Qi)),r.globalCompositeOperation="source-in",r.drawImage(i,0,0),t.drawImage(a,0,0))}else t.drawImage(a,0,0)})},[Lt,Ct,Ie,It,O,Tt]),Object(r.useEffect)(()=>{var e,t;if(!Lt)return;const a=null===(e=b.current)||void 0===e?void 0:e.getContext("2d"),r=null===(t=S.current)||void 0===t?void 0:t.getContext("2d");Pe.current.typeAbility.rerun+=1,Pe.current.typeAbility.instructor=async()=>{if(!Kn(a)||!Kn(r))return;const{condenseTolerant:e,upSize:t,fontStyle:n}=null!==_&&void 0!==_?_:{},i=U[0],l=i?t:0,o=i?Xe&&"auto"===n||"tcg"===R&&"italic"===n:Xe,s=bi({ctx:a,content:J,isNormal:Xe,useItalic:o,condenseTolerant:e,format:R,furiganaHelper:Ae,...mi({format:R,statInEffect:xt,typeInEffect:jt,useItalic:o,frameType:Z&&"large"===de?"pendulumLarge":"normal"}),textStyle:ot,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-l,globalScale:Ct,minLine:Ue}}),c=null!==Rt&&void 0!==Rt?Rt:"normal",d="normal"!==c?Un([c],g):void 0;await(async e=>{let{ctx:t,globalScale:a,typeAbility:r,subFamily:n,format:i,frame:l,size:o,isMonster:s,textStyle:c,furiganaHelper:d,loopIconFinish:u}=e;if(!Kn(t))return;const m=r.length>0,b=n!==L&&"large"===o,p=r+(b?"\u29be":""),h=m?"tcg"===i?"large"===o?`[\u200a\u200a${p}\u200a\u200a]`:`[${p}]`:`\u3010${p}\u3011`:"";if(!m)return;const g={color:Ra(l)&&!Fa({frame:l})&&"large"===o?"#ffffff":"#000000",...c},f=Xn({ctx:t,...g,globalScale:a}),{iconPositionList:v,xRatio:y}=Wi({ctx:t,format:i,size:o,value:h,metricMethod:s?void 0:"compact",furiganaHelper:d,globalScale:a});f();let x="ocg"===i?-5:-1,j="ocg"===i?-3:0;if(b){const{edge:e,baseline:r}=v[0],{canvas:i,ctx:l}=Xt(Hi*a,(r+$i)*a);if(await _n(l,`subfamily/subfamily-${n.toLowerCase()}.png`,()=>e+(.175*$i*y+j)*a,()=>r-.8*$i*a+x*a,()=>$i*a,()=>Pi*a),u){const{canvas:e,ctx:n}=Xt(Hi*a,(r+$i)*a);n.drawImage(i,0,0),await u(n,"art",async e=>await Jn(n,`finish/finish-typeart-${e}.png`,(Hi-Ai)/2,Pi)),l.globalCompositeOperation="source-in",l.drawImage(e,0,0),t.drawImage(i,0,0)}else t.drawImage(i,0,0)}})({ctx:r,globalScale:Ct,format:R,frame:E,furiganaHelper:Ae,isMonster:_e,textStyle:dt,size:jt?Z&&"large"===de?s<=3?"highPendulumNormal":"highPendulumSmaller":s<=3?"normal":"smaller":"large",subFamily:bt,typeAbility:pt,loopIconFinish:d})}},[Lt,Ct,jt,xt,_,J,U,b,Ue,R,E,Z,de,Ae,Rt,_e,Xe,dt,ot,bt,pt,S]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=v.current)||void 0===e?void 0:e.getContext("2d");if(Kn(t)&&Z){const{upSize:e,fontStyle:a}=null!==ce&&void 0!==ce?ce:{},r=Y[0],n=r?e:0,i=!!r&&("tcg"===R&&"italic"===a),l=`${R}-${de}`,o=ie[Ot&&wt?"normal":"scaleless"][de],s=Ot&&wt?o:o.map(e=>{let{trueEdge:t,trueWidth:a,...r}=e;return{...r,trueEdge:t+(Ot?ne:0),trueWidth:a-(Ot?ne:0)-(wt?ne:0)}});bi({ctx:t,content:ae,isNormal:!1,useItalic:i,fontData:(i?ke:Se)[l],fontDataKey:l,textStyle:st,sizeList:s,condenseTolerant:Ve,format:R,furiganaHelper:Ae,option:{forceRelaxCondenseLimit:3,defaultSizeLevel:3-n,globalScale:Ct,minLine:Ye}})}},[Lt,Ct,Ve,R,Z,wt,Ot,de,v,ae,ce,Y,Ye,Ae,st]),Object(r.useEffect)(()=>{var e;if(!Lt)return;const t=null===(e=F.current)||void 0===e?void 0:e.getContext("2d");Pe.current.overlay.rerun+=1,Pe.current.overlay.instructor=async()=>{if(Kn(t)){if(Je){const e={...d(),...H},{artBorder:a,body:r,boundless:n}=e,i=r>0||a;await(async(e,t,a,r,n)=>{e&&(e.scale(t,t),await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:i,top:l,height:o,width:s}=Me[r][t-1],c=a.includes(`${t}`),d=`link/link-inactive-${t}`,u=`link/link-active-${t}`,m=[i,l,s,o];return await _n(e,`${d}-base${n?"-full":""}.png`,...m),await _n(e,`${d}-core.png`,...m),c?(await _n(e,`${u}-base.png`,...m),_n(e,`${u}-core.png`,...m)):void 0})),e.resetTransform())})(t,Ct,fe,Z?"pendulum":"normal",n||!i),await(async(e,t,a,r,n,i)=>{if(!e)return;const l=hr.test(i);if("normal"===a&&!l)return;const o=l?"platinum":a,s=async e=>{r?await Jn(e,`link/link-overlay-arrow-${o}.png`,0,175):await Promise.all([1,2,3,4,6,7,8,9].map(async t=>{const{left:a,top:r,height:i,width:l}=Me[n][t-1],s=[a,r,l,i];await _n(e,`link/link-overlay-${t}-${o}.png`,...s)}))};if(e.scale(t,t),l){const{ctx:t,canvas:a}=Xt();t&&await s(t);const{canvas:r}=ma(a,i);e.drawImage(r,0,0)}else await s(e);e.resetTransform()})(t,Ct,D,!1,Z?"pendulum":"normal",mt)}t.scale(Ct,Ct),await Nt(t,"total-overlay",e=>Jn(t,`finish/finish-${e}-total-overlay.png`,0,0)),t.resetTransform()}}},[Lt,Ct,F,Nt,mt,P,Je,Z,fe,H,et,D,ct,xt,s]);const Bt=Object(r.useRef)({}),zt=Object(r.useCallback)(async e=>{const t=i.current,a=null===t||void 0===t?void 0:t.getContext("2d");var r,n,l;t&&a&&(Kn(a),await Promise.all(Object.values(Pe.current).sort((e,t)=>e.order-t.order).map(e=>{let{instructor:t,rerun:a,name:r}=e;return 0!==a&&Bt.current[r]!==a||!Bt.current[r]?(Bt.current[r]=a,t()):Promise.resolve()})).catch(e=>{console.error(e);const t="fail-to-draw-notification";Dr.a.close(t),Dr.a.error({key:t,message:Ft["error.draw.error.message"],description:Ft["error.draw.error.description"]})}),await Sa(s,a,0),await Sa(p,a,0),await Sa(k,a,0),await Sa(y,a,0),await Sa(v,a,0),await Sa(S,a,0),await Sa(b,a,0),await Sa(j,a,0),await Sa(x,a,0),await Sa(f,a,0),await Sa(u,a,0),await Sa(O,a,0),await Sa(F,a,0),null===(r=C.current)||void 0===r||r.draw(t),null===(n=N.current)||void 0===n||null===(l=n.getContext("2d"))||void 0===l||l.drawImage(t,0,0,t.width,t.height,0,0,Vi,Gi))},[Ft,k,u,i,b,F,C,p,f,v,y,x,s,j,O,S,N]);return{drawingPipeline:Pe,onExport:zt}},el="ygocarder-notification",tl=Object(Ur.create)(e=>{const{condenseReminder:t,versionReminder:a,faqReminder:r,feedbackReminder:n}=(()=>{try{var e;const t=JSON.parse(null!==(e=localStorage.getItem(el))&&void 0!==e?e:"{}");return t&&"object"===typeof t&&!Array.isArray(t)?t:{}}catch(t){return console.error("useNotificationMemory: Error when getting cached notification",t),{}}})();return{memory:{feedbackReminder:"boolean"===typeof n&&n,faqReminder:"string"!==typeof r?"":r,condenseReminder:"boolean"===typeof t&&t,versionReminder:"string"===typeof a?a:"1.99.99"},updateNotification:(t,a)=>{e(e=>{const r={...e.memory,[t]:a};return localStorage.setItem(el,JSON.stringify(r)),{memory:r}})},updateNotificationMemory:t=>{e(e=>{const a="function"===typeof t?t(e.memory):{...e.memory,...t};return localStorage.setItem(el,JSON.stringify(a)),{memory:a}})}}}),al=e=>{const{targetMemory:t,updateNotification:a}=tl(Object(Bn.useShallow)(t=>{let{memory:a,updateNotification:r}=t;return{targetMemory:a[e],updateNotification:r}}));return[t,Object(r.useCallback)(t=>a(e,t),[e,a])]};var rl=a(190),nl=a.n(rl);const il=Object(Ur.create)(Object(en.subscribeWithSelector)(e=>({visible:!1,setVisible:t=>{e(e=>{let{visible:a}=e;return{visible:null==t?!a:t}})}})));var ll=a(191),ol=a.n(ll);const sl=Object(Wr.b)(Er.a)`
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
`,cl=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1),[i,l]=Object(r.useState)(!1),[o,s]=Object(r.useState)(!1),[c,d]=Object(r.useState)([]),u=c.length>50;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(sl,{visible:a,title:t["converter.header.label"],okButtonProps:{disabled:u||i},okText:t["converter.ok.label"],cancelText:t["converter.cancel.label"],onCancel:()=>n(!1),onOk:async()=>{try{l(!0);const e=await Promise.all(c.map(e=>{let{file:t,name:a}=e;return new Promise((e,r)=>{const n=new FileReader;n.onload=t=>{let{target:n}=t;if(!n)return void r("Not a valid target");const{result:i}=n;if("string"!==typeof i)return void r("Not a valid result");let l=JSON.parse(i);Ua(l)&&(l=Ha(l));const s=Ya(l);let c=null;if(c=o?s?sr(Sn(l).card).result:l:s?l:Ha(Sn(l).card),!c)return void r("Not a valid converted result");const d=new Blob([`${JSON.stringify(c)}`],{type:"application/json"});e({blob:d,name:a})},n.readAsText(t)})})),t=new ol.a;e.forEach(e=>{let{blob:a,name:r}=e;t.file(r,a)});const a=await t.generateAsync({type:"blob"});_a("convert-result.zip",a,"application/zip"),l(!1),n(!1)}catch(e){console.error(e),Dr.a.error({message:t["error.convert.message"],description:t["error.convert.description"]}),l(!1)}},children:[Object(O.jsxs)("div",{className:"controller",children:[Object(O.jsx)("label",{children:"YGOPro / DuelingNexus / NeoCardMaker"}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:zr("toggle-button",o?"reverse":""),onClick:()=>s(e=>!e),children:Object(O.jsx)(Hr.a,{})})}),Object(O.jsx)("label",{children:"Yugioh Carder"})]}),Object(O.jsxs)("div",{className:"file-panel",children:[Object(O.jsx)("input",{type:"file",accept:"application/json",multiple:!0,onChange:e=>{const t=e.target.files;if(t){const e=[];for(let a=0;a<=t.length;a++){const r=t.item(a);r&&e.push({file:r,name:r.name})}d(e)}}}),Object(O.jsxs)("div",{className:"announce",children:[t["converter.header.information.label"],i&&Object(O.jsx)("div",{className:"in-progress",children:t["converter.header.in-progress.label"]}),u&&Object(O.jsx)("div",{className:"warning",children:t["converter.header.warning.label"](50)})]}),Object(O.jsx)("div",{className:"file-list",children:c.map(e=>{let{name:t}=e;return Object(O.jsxs)("div",{className:"file-entry",children:[Object(O.jsx)("div",{children:t}),Object(O.jsx)("div",{className:"file-action",children:Object(O.jsx)(Pr.a,{disabled:i,onClick:()=>d(e=>e.filter(e=>e.name!==t))})})]},t)})})]})]}),Object(O.jsx)(Mr.a,{overlay:t["converter.header.label"],children:Object(O.jsx)(Ar,{className:"batch-converter",onClick:()=>n(!0),children:Object(O.jsx)($r.a,{})})})]})};var dl=a(76),ul=a(606),ml=a(633),bl=a(599),pl=a(232);class hl extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error("Boundary",e),{hasError:!0}}componentDidCatch(e,t){pl.c(e,{data:t.componentStack})}render(){return this.state.hasError?this.props.fallback:this.props.children}}var gl=a(196);const fl="controls-wrapper",vl=Wr.b.div`
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
`,yl=e=>{let{children:t,...a}=e;return Object(O.jsxs)(vl,{className:"angle-picker-container",children:[t,Object(O.jsx)(gl.AnglePicker,{...a})]})};var xl=a(623),jl=a(624),Ol=a(625),wl=a(587),kl=a(619);const Sl=Object(Wr.b)(kl.a)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`,Fl=e=>{let{overlayClassName:t,iconProps:a,...r}=e;const{className:n,...i}=null!==a&&void 0!==a?a:{};return Object(O.jsx)(wl.a,{overlayClassName:["explanation-overlay",null!==t&&void 0!==t?t:""].join(" "),...r,children:Object(O.jsx)(Sl,{className:["explanation-icon",null!==n&&void 0!==n?n:""].join(" "),...i})})};var Cl=a(621),Ll=a(611);const Nl=Wr.b.span`
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
`,Tl=e=>{let{size:t="md",Icon:a,children:r,onClick:n,iconProps:i,tooltipProps:l,containerProps:o}=e;const{className:s,onClick:c,onKeyDown:d,...u}=null!==o&&void 0!==o?o:{};return Object(O.jsx)(Mr.a,{title:null,...l,children:Object(O.jsx)(Nl,{$size:t,tabIndex:0,...u,onClick:e=>{null===n||void 0===n||n(),null===c||void 0===c||c(e)},onKeyDown:e=>{null===d||void 0===d||d(e),"Enter"===e.key&&(null===n||void 0===n||n())},className:["icon-button",null!==s&&void 0!==s?s:""].join(" "),$freeSize:!a,children:Object(O.jsxs)(O.Fragment,{children:[a&&Object(O.jsx)(a,{...i}),r]})})})},Rl=Wr.b.div`
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
`,Il=Wr.a`
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
`,Bl=Wr.b.div`
    ${Il}
`,zl=(e,t)=>{let{onChange:a,value:n,optionList:i,children:l,suffix:o,className:s,strict:c=!1}=e;const[d,u]=Object(r.useState)(-1),m=Object(r.useRef)(null),b=i.length;return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.focus()}})),Object(O.jsxs)(Bl,{className:["ant-radio-group ant-radio-group-outline radio-train",s].join(" "),children:[l&&Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:l}),Object(O.jsx)("div",{ref:m,className:"radio-train-input-group",...Cr({setFocus:u,optionLength:b,onTrigger:()=>{const e=i[d];e&&a(e.value)}}),children:i.map((e,t)=>{let{value:r,props:i,label:l,tooltipProps:o}=e;const{className:s}=null!==i&&void 0!==i?i:{},u=c?r===n:`${r}`===`${n}`;return Object(O.jsx)(Mr.a,{overlay:null,...o,children:Object(O.jsxs)("label",{...i,className:["ant-radio-button-wrapper",u?"ant-radio-button-wrapper-checked":"",null!==s&&void 0!==s?s:"",d===t?"radio-train-focused":""].join(" "),onClick:()=>a(r),children:[Object(O.jsx)("span",{className:"ant-radio-button "+(u?"ant-radio-button-checked":""),children:Object(O.jsx)("span",{className:"ant-radio-button-inner"})}),Object(O.jsx)("span",{className:"label",children:l})]})},r)})}),o]})},El=Object(r.forwardRef)(zl);var Dl=a(608);const Ml=Wr.b.div`
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
`;var Wl=a(197),Al=a.n(Wl),Hl=a(620);const Pl=Wr.b.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`,$l=Wr.a`
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
`,Kl=Object(Wr.b)(Pl)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    ${$l}
`,Ul=e=>{let{data:t,children:a,disabled:n,overlay:i=Object(O.jsx)(Hl.a,{}),container:l}=e;const[o,s]=Object(r.useState)(!1);return Object(O.jsxs)(l,{disabled:n,onClick:e=>{var a;e.stopPropagation(),a=t,Al()("number"===typeof a?`${a}`:a),s(!0),setTimeout(()=>{s(!1)},1e3)},children:[o?Object(O.jsx)("div",{className:"copiable-overlay",children:i}):null,a]})},Yl=e=>{let{data:t,children:a}=e;return Object(O.jsx)(Ul,{data:t,container:Kl,children:a})},Gl=Wr.b.div`
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
`,Vl=Object(Wr.b)(Gl)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`,Xl=e=>{let{content:t,children:a,...r}=e;return t?Object(O.jsx)(wl.a,{content:t,...r,children:a}):Object(O.jsx)(O.Fragment,{children:a})},ql=Wr.b.button`
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
`,Jl=Wr.b.div`
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
`,_l=Wr.b.div`
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
`,Ql=Wr.b.div`
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
`,Zl=Wr.b.div`
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
`,eo=e=>{let{width:t,height:a,warning:r=!1}=e;return Object(O.jsxs)(Zl,{$warning:r,children:[Object(O.jsx)("span",{className:"left-part",children:t}),Object(O.jsx)("span",{children:"\xd7"}),Object(O.jsx)("span",{className:"right-part",children:a})]})},to=Wr.c`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`,ao=Wr.b.div`
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
    ${Wr.a`animation: ${to} 6s linear infinite;`}
`,ro=Object(Wr.b)(Dl.a)`
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
`,no=Wr.c`
    to {
        transform: rotate(360deg);
    }
`,io=Wr.b.div`
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
`,lo=Object(Wr.b)(Rl)`
    .anticon-setting {
        > svg {
            ${e=>{let{$softMode:t}=e;return t?"":Wr.a`animation: ${no} 12s linear infinite;`}}
        }
    }
`,oo=()=>{const e=Qr(),{setting:t,updateSetting:a}=Ln(e=>{let{setting:t,updateSetting:a}=e;return{setting:t,updateSetting:a}}),{allowHotkey:r,exportFormat:n,reduceMotionColor:i,resolution:l,showCreativeOption:o,showExtraDecorativeOption:s,slidingType:c}=t;return Object(O.jsx)(lo,{className:"setting-button",$softMode:i,children:Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"setting-button-overlay",content:Object(O.jsxs)(io,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(Ll.a,{checked:i,onChange:e=>a({reduceMotionColor:e.target.checked}),children:e["setting.option.soft-mode.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(Ll.a,{checked:s,onChange:e=>a({showExtraDecorativeOption:e.target.checked}),children:e["setting.option.extra-decorative.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(Ll.a,{checked:o,onChange:e=>a({showCreativeOption:e.target.checked}),children:e["setting.option.creative.label"]})}),Object(O.jsx)("div",{children:Object(O.jsx)(Mr.a,{title:e["setting.option.hotkey.tooltip"],placement:"left",children:Object(O.jsx)(Ll.a,{checked:r,onChange:e=>a({allowHotkey:e.target.checked}),children:e["setting.option.hotkey.label"]})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"list-option",children:e["setting.option.resolution.label"]}),Object(O.jsx)(El,{className:"resolution-list",value:`${l[0]}x${l[1]}`,optionList:Kt.map(t=>{let{height:a,width:r,label:n,scale:i}=t;return{value:`${r}x${a}`,label:i>1?Object(O.jsx)(wl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(O.jsx)(Vl,{children:e["setting.option.resolution.warning"]}),children:Object(O.jsx)(eo,{width:r,height:a,warning:!0})}):Object(O.jsx)(eo,{width:r,height:a})}}),onChange:e=>{const t=$t[e];t&&a({resolution:t.settingValue,globalScale:t.scale})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"list-option",children:e["setting.option.export-format.label"]}),Object(O.jsx)(El,{value:n,optionList:Ut,onChange:e=>{a({exportFormat:e})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"list-option",children:e["setting.option.sliding-type.label"]}),Object(O.jsx)(El,{value:c,optionList:Yt(e),onChange:e=>{a({slidingType:e})}})]}),Object(O.jsx)("div",{children:Object(O.jsx)("small",{children:e["setting.alert"]})})]}),children:Object(O.jsxs)("div",{className:"button-label",children:[Object(O.jsx)(Cl.a,{}),Object(O.jsx)("label",{children:e["setting.button.label"]})]})})})};var so=a(609);const co=Wr.c`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`,uo=Wr.b.div`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #2a2a2a inset;
    transition: background-color 250ms linear;
    ${e=>{let{$animating:t}=e;return t?Wr.a`animation: 2s linear 350ms 4 ${co};`:""}}
    ${e=>{let{$animating:t}=e;return t?"\n            border: var(--bw) solid var(--sub-level-1);\n            background: var(--main-warning);\n            color: var(--color-contrast);\n            text-shadow: none;\n            box-shadow: 0 0 2px 0 #333333;\n        ":""}}
    &:hover {
        background-color: var(--main-level-3);
    }
`,mo=Object(Wr.b)(uo)`
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
`,bo=Wr.b.div`
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
`,po=Wr.b.li`
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
`,ho=(()=>{let e=!1,t=[];return{getLog:async()=>{if(e)return t;const a=await fetch("/ygocarder/log/version.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});try{const r=await a.json();return t=r,e=!0,t}catch(r){console.error(r)}return[]}}})(),go=()=>{const[e,t]=Object(r.useState)([]),[a,n]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{n(!0);const e=await ho.getLog();n(!1),t(e)})()},[]),0!==e.length||a?a?Object(O.jsx)("div",{children:"Loading changelog..."}):Object(O.jsx)("div",{children:e.map((e,t)=>{let{logList:a,version:r}=e;return Object(O.jsxs)("div",{className:"log-section",children:[Object(O.jsx)("b",{children:r}),Object(O.jsx)("br",{}),Object(O.jsx)("ul",{children:a.map((e,t)=>{let{content:a,image:n}=e;return Object(O.jsxs)(po,{children:[Object(O.jsx)("div",{className:"content",children:a}),n&&Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:n,title:"Click to open in new tab",children:Object(O.jsx)("img",{src:n,alt:`version-${r}-illust`})})]},t)})})]},`${r}-${t}`)})}):Object(O.jsx)("div",{children:"No changelogs"})},fo=Object(Wr.b)(Vl)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`,vo=Object(r.memo)(()=>{var e;const[t,a]=Object(r.useState)(!1),[n,i]=al("versionReminder");return Object(r.useEffect)(()=>{if(n){var e;const t=null!==(e="2.3.22")?e:"0.0.0",r=n;i("2.3.22"),((e,t)=>{const[a,r,n]=String(e).split(".").map(Number),[i,l,o]=String(t).split(".").map(Number);return a!==i?a>i:r!==l?r>l:n>o})(t,r)&&(a(!0),setTimeout(()=>{a(!1)},8e3))}},[i,n]),Object(O.jsx)(wl.a,{placement:"bottom",content:Object(O.jsx)(fo,{children:Object(O.jsx)(go,{})}),children:Object(O.jsxs)(uo,{$animating:t,className:"app-log",onMouseOver:()=>a(!1),children:["v",null!==(e="2.3.22")?e:"unknown"]})})});var yo=a(598);const xo="faq-button",jo=e=>{let{image:t,author:a,question:r,children:n}=e;return Object(O.jsxs)(bo,{children:[Object(O.jsxs)("blockquote",{children:[a&&Object(O.jsx)("label",{children:a}),Object(O.jsx)("div",{className:"question",children:r})]}),Object(O.jsx)("div",{className:"answer",children:n}),t&&Object(O.jsx)("img",{className:"image",src:t,alt:"answer"})]})},Oo=()=>{const[e,t]=Object(r.useState)(!1),[a,n]=Object(r.useState)(!1),[i,l]=al("faqReminder"),[o,s]=al("feedbackReminder");Object(r.useEffect)(()=>{const e="30/07/2025";i!==e&&(l(e),n(!0),setTimeout(()=>{n(!1)},8e3))},[l,i]),Object(r.useEffect)(()=>{!0!==o&&(s(!0),n(!0),Dr.a.info({message:"Feedback Reminder",description:"If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.",duration:10,onClose:()=>{n(!1)}}))},[o,s]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(mo,{id:xo,$animating:a,onClick:()=>t(e=>!e),children:"FAQ"}),Object(O.jsx)(Er.a,{visible:e,onCancel:()=>t(!1),footer:null,children:Object(O.jsxs)(yo.a,{children:[Object(O.jsxs)(yo.a.TabPane,{tab:"Feedbacks",children:[Object(O.jsx)("div",{children:Object(O.jsx)("i",{children:"Solved or stale (4 weeks of inactive) feedbacks are removed."})}),Object(O.jsx)("br",{}),[{author:"Re: \u2605 at Jul 30, 2025",question:'I am not sure your latest fix for \u2605, and \u2606 was correct: As far as I can tell, the size of the characters is too small.\nAccording to official cards, they should be as tall as a capital letter.\nMy source of comparison was the "Evil\u2605Twin" Archetype.',answer:"This should be fixed by now."},{author:"TitanKyojin at Jul 30, 2025",question:"I seem to be having the same problem as others. All of the buttons associated with exporting, importing and saving don't seem to be working.",answer:"I have issued another fix, you can check again now."},{author:"Anonymous User at Jul 30, 2025",question:'Thanks again for the manual drag option! It actually helped me notice something that might help with diagnosing the auto-scroll issue if you decide to return to it. After manually dragging the card preview lower and then switching to auto-scroll, the preview instantly moved back to the top of the page and stayed there - that\'s its idea of "auto-scroll." No need to rush to fix this, though; just wanted to share my findings and hopefully a useful note, and the manual drag is a great workaround anyway!',answer:"Yeah, thanks to your screenshot I think the problem here is because the window is too short; it cannot fit the entire card within so no matter how much it try to align, a part of it will be hidden from the viewport, which lead to confusing behavior. In this case manual drag would be the better option regardless."},{author:"\u2605 at Jul 29, 2025",question:"The \u2605 doesn't get displayed correctly",answer:"It should be fixed by now."},{author:"Ivan/Liger at Jul 29, 2025",question:"Hello, sorry to bother you. I'm not sure if your site is under maintenance, but I've noticed some major issues recently. It all started when I could no longer save images \u2014 nothing in the top bar seems to work anymore. I tried switching my browser to \u201cDesktop mode\u201d to see if it would help, but that made things even worse. The default zoom setting at 100% doesn't display properly, so I had to set it to 50% just to see the full layout. Unfortunately, I still can't do anything at the moment. I hope this helps. I haven\u2019t noticed any other issues for now.\n\nBest regards,\nIvan / Liger"},{author:"Ebrahim at Jul 29, 2025",question:"I'm trying to download the card from the website to my phone but the download button isn't working can you please fix it.",answer:"Both issues seem to have the same cause, it should be fixed by now."},{author:"Anonymous User at Jul 29, 2025",question:"The manual scroll option works perfectly! Thank you so much for the update and for staying in touch!",answer:"Thanks, happy that the work around worked because honestly I'm out of ideas otherwise."},{author:"Anonymous User at Jul 28, 2025",question:"Happy to help! I tried to screenshot the auto-scroll issue via the app before, but the UI doesn't let me scroll down and screenshot at the same time, so I won't be able to show you clearly. (I'd use my own screenshots, but I can't paste or upload them, either.) What I can tell you is that the card preview scrolls up along with the rest of the page, so it never moves below the \"Finish: Art\" section. If there's another way I can show you the issue to help you solve this, please let me know!",answer:'Don\'t worry, even if you could not capture the exact behavior, it still provide information about your layout and screensize which could be useful for debugging.\n\nOn the other hand, I have added the manual option that allow you to grab the preview and slide it at will. You can change the behavior in Setting => "Preview sliding"'},{author:"Anonymous User at Jul 28, 2025",question:"Thank you for responding so quickly! I don't see the auto-scroll effect happening for the card preview, though. I reset my browser just in case, but that didn't seem to work. (Maybe I just need to wait a bit for the update to kick in or if there's some new hidden option to toggle it?) In any case, I hope it works eventually because this card maker is awesome!",answer:"That's pretty weird indeed. The feature should apply automatically without any additional action. Anyway, in the Report dialog there should be a \"Take screenshot\" button, if possible please submit the app's screenshot so I can try to diagnose the problem. Thanks for your help."},{author:"Anonymous User at Jul 24, 2025",question:"Is it possible to make it so that users can scroll through the customization options while the card preview always stays in place onscreen? (Or alternatively, is it possible to give the card preview its own separate scroll bar?)",answer:"I have added some auto scroll behavior to keep the card in view, hopefully it looks better now."},{author:"Blake at Jul 23, 2025",question:"Are you able to make custom attributes and upload them on here?",answer:"No I can't unfortunately, as best I can provide you a way to use your own custom attribute."},{author:"Anonymous User at Jul 18, 2025",question:"The drag and drop feature is pretty nice... Is there a way for it not to take precedence over the drag and drop in the text box? It kinda makes it fizzle.",answer:"This should be fixed by now."},{author:"Blake at Jul 19, 2025",question:"On rushify, can you make rush rare of the cards look like the real ones?"},{author:"Blake at Jul 14, 2025",question:"Isn\u2019t there any other person that\u2019s able to create a website like this one but only rush duel?"},{author:"Blake at Jul 13, 2025",question:"On GitHub Rushify, can you add the other card types?",answer:"I am not the author of Rushify, so I afraid I can't help much."},{author:"Anonymous User at Jul 14, 2025",question:"The outline when placed at 0/0 is not evenly positioned",answer:"The image you provided is the app working properly, this is kind of a technical limitation on my side and I can't do much about it."},{author:"Being able to save some Customs Presets at Jul 12, 2025",question:"The ability to save 2-3 Customs Presets",answer:"Let's see if I can come up with something."},{author:"New Feature Suggestion at Jul 12, 2025",question:"For the card art, maybe you could make a drag and drop feature to it?",answer:"I have added the feature, you may try it now."},{author:"TheTonyB at Jul 10, 2025",question:"Can you add support for greek letters in TCG format? Currently, the only ones that work fine are \u03b1, \u03b2, \u03a9, and I think \u03bc too. In OCG format they all work perfectly. I included a screeenshot of me trying to use the greek letter \u039d. Goated card maker by the way."},{author:"TheTonyB at Jul 10, 2025",question:"Can you improve compatibility with greek letters in TCG format? The only ones that work fine are \u03b1, \u03b2 and \u03a9. In OCG format they all work perfectly.",answer:"I have updated font, hopefully it looks better now."},{author:"San_San at Jul 10, 2025",question:"Al escribir en espa\xf1ol las vocales con tilde sobresalen ligeramente del resto de letras",answer:'Can you provide an example image? As far as I check words like "n\xfamero" or "adem\xe1s" looks normal to me.'},{author:'Error "\xe9" at Jun 30, 2025',question:'There is a problem with the writing. The line wrap is sometimes incorrect when using this "\xe9" character.\nThe last word is "Mat\xe9riel". The last word should not be cut.',answer:"I have updated the algorithm to have a better behavior for non-alphabet letters. But in case it goes wrong, you can always use non-breakable text syntax to keep the word in line."},{author:"Anonymous User at Jun 30, 2025",question:"Having a format similar for cards similar to Master Duel cards.",answer:"I have no plan to support format like Master Duel right now."},{author:"Blake Jun at 27, 2025",question:"Can you make a website with rush duel. card templates just like this one? Not only effect and fusion, but all card types."},{author:"Blake Jun at 27, 2025",question:"Can you also put in the link in the description?",answer:"At the moment, no. You may check the FAQ for more detail."},{author:"Rush Duel at Jun 22, 2025",question:"This card maker is amazing! Have you ever consider doing a rush duel section as well?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."},{author:"Die Frauen at Jun 22, 2025",question:'Fantastic job, you understood the assignment. It sappears it still needs to be better centered out , the custom array is a bit skewed to the right, and it appears the toggle to move them to the left/center aren\'t quite there yet.\n\nA minor update I would like is, to add a "normal spell/trap" icon, I think you can find it on the wiki if you look it up, as a blank template.'},{author:"Die Frauen at Jun 22, 2025",question:"Addendum (Disregard the alignment comment, or to rephrase, it works fine. I was under the impression it would align on its own, and put the level at the edges and it projected as though it were the 13th icon).\n\nI assume you can organize those manually, but for all intents and purposes it is perfectly functional!",answer:"Come to think of it, maybe the star editor is not intuitive enough to use, so I have updated it a bit more. Also the normal icon for Spell/Trap is now available."},{author:"Maya at May 23, 2025",question:"I'd like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker",answer:"I will try, but this is pretty hard to do to be honest, don't keep your hope up."}].map((e,t)=>{let{author:a,question:r,answer:n,image:i}=e;return Object(O.jsx)(jo,{author:a,question:r,image:i,children:n},t)})]},"feedback"),Object(O.jsx)(yo.a.TabPane,{tab:"Frequently Asked Questions",children:[{question:"Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.",answer:'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).'},{question:"Will you make another version for Rush Duel cards?",answer:"I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future."}].map((e,t)=>{let{question:a,answer:r}=e;return Object(O.jsx)(jo,{question:a,children:r},t)})},"faq")]})})]})};var wo=a(622),ko=a(588);const So=Wr.b.div`
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
`,Fo=140,Co=Wr.b.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: var(--spacing-xs);
    align-items: center;
    .canvas-container {
        width: ${Fo}px;
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
`,Lo=e=>{let{frameInfo:t,presetContent:a,active:n=!1,language:i,onOverwrite:l,onActive:o,onDelete:s}=e;const{format:c,foil:d}=Cn(Object(Bn.useShallow)(e=>{let{card:{format:t,foil:a}}=e;return{format:t,foil:a}})),u=Object(r.useRef)(null),{name:m,labelBackgroundColor:b,labelBackgroundImage:p}=null!==t&&void 0!==t?t:{},h=null!==m&&void 0!==m?m:"effect";return Object(r.useEffect)(()=>{const e=u.current,t=null===e||void 0===e?void 0:e.getContext("2d");if(e&&t){t.clearRect(0,0,Fo,30);const{font:r}=a;Di(e,t,"OCG"===r?"{\u30ab\u30fc\u30c9\u540d|\u304b\u30fc\u3069\u3081\u3044}":"Card Name","OCG"===r?65:12,"OCG"===r?65:60,350,za({foil:d,format:c,frame:h,nameStyle:a,nameStyleType:"custom"}),{frame:h,format:c,furiganaHelper:!1,globalScale:.4,isSpeedSkill:!0})}},[d,c,h,a]),Object(O.jsxs)(Co,{className:zr("preset-option",n?"menu-active":""),children:[Object(O.jsx)(So,{className:zr("canvas-container",o?"":"menu-off"),onClick:o,style:{background:b,backgroundImage:p},children:Object(O.jsx)("canvas",{ref:u,width:Fo,height:30})}),Object(O.jsxs)("div",{className:"preset-option-action",children:[s&&Object(O.jsx)(ko.a,{title:i["generic.delete.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>s(),children:Object(O.jsx)(Pr.a,{})}),l&&Object(O.jsx)(ko.a,{title:i["generic.overwrite.label"],okText:i["generic.yes.label"],cancelText:i["generic.no.label"],onConfirm:()=>l(),children:Object(O.jsx)(wo.a,{})})]})]})},No=Wr.b.div`
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
`,To=e=>{let{tabIndex:t=0,width:a,height:r,baseLayoutState:n,resolvedLayoutState:i,isPendulum:l,activeLayout:o,dyeList:s,foil:c,onClick:d,onLayoutSelect:u,language:m,vertical:b=!1}=e;return Object(O.jsxs)(No,{$width:a,$height:r,$layoutHoverable:!!u,$hoverable:!!d,onClick:d,className:zr("card-layout-container",b?"is-vertical":"is-horizontal"),children:[[{key:"topLeftFrame",className:"card-layout partial-layout top-left"},{key:"topRightFrame",className:"card-layout partial-layout top-right"},{key:"bottomLeftFrame",className:"card-layout partial-layout bottom-left"},{key:"bottomRightFrame",className:"card-layout partial-layout bottom-right"},{key:"effectBackground",className:"card-layout float-layout effect-background"},{key:"pendulumEffectBackground",className:"card-layout float-layout pendulum-effect-background"}].map(e=>{var r;let{className:c,key:d}=e;const m=i[d],b=null==x[d]?void 0:s[x[d]];if(!m)return null;if(!l&&"pendulumEffectBackground"===d)return null;const{labelBackgroundColor:p,labelBackgroundImage:h}=null!==(r=Be[m])&&void 0!==r?r:{};return Object(O.jsx)("button",{...t<0?{}:{tabIndex:t},className:zr(c,d===o?"active":"","auto"===(null===n||void 0===n?void 0:n[d])?"unmodified":""),onClick:()=>null===u||void 0===u?void 0:u(d),style:h?{backgroundImage:h}:{backgroundColor:p},children:Object(O.jsx)("div",{className:"overlay-patch",style:b?{boxShadow:`0 0 0 ${Math.round(a/16)}px ${b} inset`}:{}})},d)}),Object(O.jsx)("button",{...t<0?{}:{tabIndex:t},className:zr("card-layout float-layout foil","foil"===o?"active":""),onClick:()=>null===u||void 0===u?void 0:u("foil"),style:{boxShadow:`0 0 0 2px ${hr.test(s[x.foil])?s[x.foil]:v[c].color} inset`},children:m["input.foil.label"]})]})},Ro=Wr.b.div`
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
`,Io=e=>{let{onActive:t,onDelete:a,onOverwrite:r,language:n,...i}=e;return Object(O.jsxs)(Ro,{className:"frame-preset-option",children:[Object(O.jsx)("div",{className:"preview-container",onClick:t,children:Object(O.jsx)(To,{...i,language:n})}),Object(O.jsxs)("div",{className:"layout-preset-option-action",children:[a&&Object(O.jsx)(ko.a,{title:n["generic.delete.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:a,children:Object(O.jsx)(Pr.a,{})}),r&&Object(O.jsx)(ko.a,{title:n["generic.overwrite.label"],okText:n["generic.yes.label"],cancelText:n["generic.no.label"],onConfirm:()=>r(),children:Object(O.jsx)(wo.a,{})})]})]})},{width:Bo,height:zo}=s,Eo=Object(Wr.b)(Er.a)`
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
`,Do=e=>{let{language:t,isPendulum:a,frameInfo:n,importData:i,onCancel:l}=e;const{db:o}=Rn(),[s,c]=En("nameStylePresetList"),[d,u]=En("layoutPresetList"),{layoutPresetMap:m,nameStylePresetMap:b}=Object(r.useMemo)(()=>({nameStylePresetMap:s.reduce((e,t)=>(e[t.key]=t,e),{}),layoutPresetMap:d.reduce((e,t)=>(e[t.key]=t,e),{})}),[d,s]),{layoutPresetList:p=[],nameStylePresetList:h=[]}=i,[g,f]=Object(r.useState)(()=>({layoutPresetMap:p.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{}),nameStylePresetMap:h.reduce((e,t)=>(e[t.key]={...t,verdict:"keep-new"},e),{})}));return Object(O.jsxs)(Eo,{visible:!0,width:700,maskClosable:!1,okText:t["preset.button.import.label"],cancelText:t["preset.button.discard.label"],onCancel:l,onOk:async()=>{const e=Object.values(g.layoutPresetMap),t=Object.values(g.nameStylePresetMap),a={},r=[],n=[];if(e.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:i,verdict:l}=e;if(r.push({key:t,content:i}),null==m[t]&&"keep-new"===l)n.push({key:t,content:i});else if("keep-both"===l){const e=Object(V.a)();n.push({key:e,content:i})}else a[t]={key:t,content:i}}),o){const e=o.transaction("presetLayoutStore","readwrite");for(const{key:t,content:a}of r)await o.put("presetLayoutStore",{key:t,content:JSON.stringify(a)});await e.done}u(e=>[...e.map(e=>a[e.key]?a[e.key]:e),...n]);const i={},s=[],d=[];if(t.filter(e=>{let{verdict:t}=e;return"keep-old"!==t}).forEach(e=>{const{key:t,content:a,verdict:r}=e;if(s.push({key:t,content:a}),null==b[t]&&"keep-new"===r)d.push({key:t,content:a});else if("keep-both"===r){const e=Object(V.a)();d.push({key:e,content:a})}else i[t]={key:t,content:a}}),o){const e=o.transaction("presetNameStyleStore","readwrite");for(const{key:t,content:a}of s)await o.put("presetNameStyleStore",{key:t,content:JSON.stringify(a)});await e.done}c(e=>[...e.map(e=>i[e.key]?i[e.key]:e),...d]),l()},children:[Object(O.jsxs)("div",{className:"import-review-title",children:[Object(O.jsx)("h2",{children:t["preset.review-title.label"]}),t["preset.review-description"]]}),Object(O.jsx)("table",{className:"import-action-table",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{className:"import-action-row import-header-row",children:[Object(O.jsx)("th",{className:"header-row",children:t["preset.review-table.current.label"]}),Object(O.jsx)("th",{className:"header-row",children:t["preset.review-table.new.label"]}),Object(O.jsx)("th",{className:"header-row",children:t["preset.review-table.action.label"]})]}),h.map(e=>{var a;let{key:r,content:i}=e;const l={language:t,frameInfo:n},o=null===(a=b[r])||void 0===a?void 0:a.content,s=g.nameStylePresetMap[r].verdict;return Object(O.jsxs)("tr",{className:zr("import-action-row",s),children:[Object(O.jsx)("td",{className:"current-version",children:o&&Object(O.jsx)(Lo,{...l,presetContent:o,children:o.preset})}),Object(O.jsx)("td",{className:"new-version",children:Object(O.jsx)(Lo,{...l,presetContent:i,children:i.preset})}),Object(O.jsx)("td",{className:"action-list",children:Object(O.jsxs)("div",{className:"action-panel",children:[Object(O.jsx)(dl.a,{size:"small",type:"keep-old"===s?"primary":"default",onClick:()=>f(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-old"},{...e,nameStylePresetMap:t}}),children:t[o?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(O.jsx)(dl.a,{size:"small",type:"keep-new"===s?"primary":"default",onClick:()=>f(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-new"},{...e,nameStylePresetMap:t}}),children:t[o?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),o&&Object(O.jsx)(dl.a,{size:"small",type:"keep-both"===s?"primary":"default",onClick:()=>f(e=>{const t={...e.nameStylePresetMap};return t[r]={...t[r],verdict:"keep-both"},{...e,nameStylePresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},r)}),p.map(e=>{var r,n,i,l,o;let{key:s,content:c}=e;const d={width:Math.round(40*Bo/zo),height:40,isPendulum:a,tabIndex:-1,language:t},u=null===(r=m[s])||void 0===r?void 0:r.content,b=g.layoutPresetMap[s].verdict;return Object(O.jsxs)("tr",{className:zr("import-action-row",b),children:[Object(O.jsx)("td",{className:"current-version",children:u&&Object(O.jsx)(Io,{resolvedLayoutState:Ba({frame:u.frame,topLeftFrame:u.leftFrame,topRightFrame:u.rightFrame,bottomLeftFrame:u.pendulumFrame,bottomRightFrame:u.pendulumRightFrame,effectBackground:null===(n=u.effectStyle)||void 0===n?void 0:n.background,pendulumEffectBackground:null===(i=u.pendulumStyle)||void 0===i?void 0:i.background},a),dyeList:u.dyeList,foil:u.foil,...d})}),Object(O.jsx)("td",{className:"new-version",children:Object(O.jsx)(Io,{resolvedLayoutState:Ba({frame:c.frame,topLeftFrame:c.leftFrame,topRightFrame:c.rightFrame,bottomLeftFrame:c.pendulumFrame,bottomRightFrame:c.pendulumRightFrame,effectBackground:null===(l=c.effectStyle)||void 0===l?void 0:l.background,pendulumEffectBackground:null===(o=c.pendulumStyle)||void 0===o?void 0:o.background},a),dyeList:c.dyeList,foil:c.foil,...d})}),Object(O.jsx)("td",{className:"action-list",children:Object(O.jsxs)("div",{className:"action-panel",children:[Object(O.jsx)(dl.a,{size:"small",type:"keep-old"===b?"primary":"default",onClick:()=>f(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-old"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-old.label":"preset.review-table.action.discard.label"]}),Object(O.jsx)(dl.a,{size:"small",type:"keep-new"===b?"primary":"default",onClick:()=>f(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-new"},{...e,layoutPresetMap:t}}),children:t[u?"preset.review-table.action.keep-new.label":"preset.review-table.action.import.label"]}),u&&Object(O.jsx)(dl.a,{size:"small",type:"keep-both"===b?"primary":"default",onClick:()=>f(e=>{const t={...e.layoutPresetMap};return t[s]={...t[s],verdict:"keep-both"},{...e,layoutPresetMap:t}}),children:t["preset.review-table.action.keep-both.label"]})]})})]},s)})]})})]})},Mo=Object(Wr.b)(ro)`
    .ant-drawer-body {
        padding: var(--spacing);
    }
    .overlay-title {
        display: grid;
        grid-template-columns: 1fr max-content;
        line-height: 1;
    }
    .name-style-preset-list {
        margin-top: var(--spacing);
        display: grid;
        grid-template-columns: max-content max-content;
        gap: var(--spacing-sm);
    }
    .layout-preset-list {
        margin-top: var(--spacing);
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
`,Wo=e=>{let{language:t}=e;const{setVisible:a,visible:n}=il(Object(Bn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}})),{frame:i,isPendulum:l}=Cn(Object(Bn.useShallow)(e=>{let{card:{frame:t,isPendulum:a}}=e;return{frame:t,isPendulum:a}})),{db:o}=Rn(),[s,c]=En("nameStylePresetList"),[d,u]=En("layoutPresetList"),[m,b]=Object(r.useState)({visible:!1,layoutPresetList:[],nameStylePresetList:[]}),p=Be[i],[h,g]=Object(r.useState)(0),f=Object(r.useRef)(null),v="preset-import-direct-upload";return Object(O.jsxs)(Mo,{footer:null,width:343,visible:n,title:Object(O.jsxs)("div",{className:"overlay-title",children:[Object(O.jsx)("span",{children:t["preset.manager.label"]}),Object(O.jsx)(Pr.a,{onClick:()=>{a(!1)}})]}),onClose:()=>{a(!1)},children:[Object(O.jsx)("div",{children:t["preset.warning.label"]}),Object(O.jsxs)("div",{className:"action-list",children:[Object(O.jsx)(dl.a,{size:"small",onClick:()=>{const e=JSON.stringify({layoutPresetList:d,nameStylePresetList:s}),t=new Blob([e],{type:"application/json"});_a("preset.json",t,"application/json")},children:t["generic.export.label"]}),Object(O.jsxs)(dl.a,{size:"small",onClick:()=>{const e=document.getElementById(v);e&&e.click()},children:[t["generic.import.label"],Object(O.jsx)("input",{ref:f,type:"file",id:v,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;(e=>{if(e)for(let a=0;a<=e.length;a++){const r=e.item(a);if(!r)continue;const n=new FileReader;n.onload=e=>{let{target:a}=e;if(!a)return;const{result:r}=a;if("string"===typeof r)try{const{layoutPresetList:e,nameStylePresetList:t}=JSON.parse(r);b({visible:!0,layoutPresetList:e,nameStylePresetList:t})}catch(n){console.error(n),Dr.a.error({description:t["error.preset-import.description"],message:t["error.preset-import.message"]})}},n.readAsText(r);break}g(e=>e+1)})(null===(e=f.current)||void 0===e?void 0:e.files)}},`direct-file-input-${h}`)]})]}),Object(O.jsx)("div",{className:"name-style-preset-list",children:s.map(e=>{let{key:a,content:r}=e;return Object(O.jsx)(Lo,{language:t,frameInfo:p,presetContent:r,onDelete:async()=>{if(o){const e=o.transaction("presetNameStyleStore","readwrite");await o.delete("presetNameStyleStore",a),await e.done}c(e=>e.filter(e=>e.key!==a))},children:r.preset},a)})}),Object(O.jsx)("div",{className:"layout-preset-list",children:d.map(e=>{let{content:a,key:r}=e;const{dyeList:n,foil:i,frame:s,pendulumFrame:c,leftFrame:d,pendulumRightFrame:m,rightFrame:b,effectStyle:p,pendulumStyle:h}=a,g={frame:s,topLeftFrame:d,topRightFrame:b,bottomLeftFrame:c,bottomRightFrame:m,effectBackground:null===p||void 0===p?void 0:p.background,pendulumEffectBackground:null===h||void 0===h?void 0:h.background};return Object(O.jsx)(Io,{width:Math.round(40*Bo/zo),height:40,isPendulum:l,resolvedLayoutState:Ba(g,l),tabIndex:-1,dyeList:n,foil:i,language:t,onDelete:async()=>{if(o){const e=o.transaction("presetLayoutStore","readwrite");await o.delete("presetLayoutStore",r),await e.done}u(e=>e.filter(e=>{let{key:t}=e;return r!==t}))}},r)})}),m.visible&&Object(O.jsx)(Do,{onCancel:()=>b(e=>({...e,visible:!1})),importData:m,frameInfo:p,isPendulum:l,language:t})]})};a(428);const Ao=()=>Object(O.jsx)("div",{className:"affiliation",children:Object(O.jsx)("div",{className:"affiliation-link",children:Object(O.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(O.jsx)(xl.a,{})})})}),Ho=Wr.b.div`
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
`,Po=()=>{const{language:e,languageInfo:t,languageMetadataMap:a,changeLanguage:r}=_r(e=>{let{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}=e;return{languageInfo:t,language:a,languageMetadataMap:r,changeLanguage:n}}),{cardList:n,isListDirty:i,toggleVisible:l,visible:o}=kn(Object(Bn.useShallow)(e=>{let{cardList:t,isListDirty:a,toggleVisible:r,visible:n}=e;return{cardList:t,isListDirty:a,toggleVisible:r,visible:n}})),{setVisible:s,visible:c}=il(Object(Bn.useShallow)(e=>{let{setVisible:t,visible:a}=e;return{setVisible:t,visible:a}}));return Object(O.jsxs)("div",{className:"app-header",children:[Object(O.jsx)("img",{alt:"app-logo",src:"/ygocarder/logo192.png",width:35}),Object(O.jsxs)("div",{className:"app-description",children:[Object(O.jsxs)("div",{className:"header-language",children:[Object(O.jsx)("h1",{children:"Yugioh Carder"}),Object(O.jsx)(so.a.Group,{value:t.codeName,size:"small",className:"language-option",children:Object.values(a).filter(e=>{let{active:t}=e;return t}).map(e=>{let{codeName:t,name:a}=e;return Object(O.jsx)(so.a.Button,{value:t,onChange:e=>r(e.target.value),children:a},t)})}),Object(O.jsx)(Mr.a,{title:"Check the FAQ Button => Feedbacks to see if your issue is already answered.",children:Object(O.jsx)("span",{className:"bug-report",onMouseOver:()=>{var e;null===(e=document.getElementById(xo))||void 0===e||e.classList.add("js-highlight")},onMouseOut:()=>{var e;null===(e=document.getElementById(xo))||void 0===e||e.classList.remove("js-highlight")},children:Object(O.jsx)("div",{id:"sentry-bug-report",children:e["contributor.bug-report.tooltip"]})})}),Object(O.jsx)(Oo,{}),Object(O.jsx)(vo,{})]}),Object(O.jsxs)("div",{className:"app-contribution",children:[Object(O.jsxs)("span",{className:"app-creator",children:[e["contributor.gui.label"],": ",Object(O.jsx)("a",{href:"https://github.com/lauqerm/ygocarder",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"Lauqerm"})}),"\xa0",Object(O.jsx)(Fl,{content:Object(O.jsxs)(Vl,{className:"disclaimer",children:[Object(O.jsx)("h2",{children:e["contributor.disclaimer.label"]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:e["contributor.disclaimer.line-1"](Object(O.jsx)("a",{href:"https://lauqerm.github.io/ygocarder",children:"lauqerm.github.io/ygocarder"},"app-author"))}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-2"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-3"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-4"]}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-5"](Object(O.jsx)("a",{href:"https://www.deviantart.com/grezar",target:"_blank",rel:"noreferrer",children:"Grezar"},"template-maker-1"),Object(O.jsx)("a",{href:"https://www.deviantart.com/9558able",target:"_blank",rel:"noreferrer",children:"9558able"},"template-maker-2"))}),Object(O.jsx)("li",{children:e["contributor.disclaimer.line-6"]})]})]})})]}),Object(O.jsx)("span",{className:"template-creator",children:e["contributor.template-maker"](Object(O.jsx)("a",{href:"https://www.deviantart.com/grezar/art/SKILL-UPDATE-Series-10-Card-Proxy-Template-686736691",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"Grezar"})},"artist-1"),Object(O.jsx)("a",{href:"https://www.deviantart.com/9558able/art/Yugioh-Series-10-Proxy-Template-DELUXE-EDITION-843282421",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"9558able"})},"artist-2"),Object(O.jsx)("a",{href:"https://www.deviantart.com/slackermagician",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"SlackerMagician"})},"artist-3"),Object(O.jsx)("a",{href:"https://www.deviantart.com/icycatelf",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("b",{children:"icycatelf"})},"artist-4"))})]})]}),Object(O.jsx)(Ho,{className:"app-setting",children:Object(O.jsx)(oo,{})}),Object(O.jsx)(Ho,{className:"card-manager",children:Object(O.jsx)(Rl,{className:zr("manager-button-label",o?"manager-active":""),onClick:()=>l(),children:Object(O.jsxs)("div",{className:"button-label",children:[Object(O.jsx)(jl.a,{}),Object(O.jsx)("label",{children:e["manager.icon.title"]}),i&&n.length>1&&Object(O.jsx)("div",{className:"manager-notice",children:"*"})]})})}),Object(O.jsxs)(Ho,{className:"preset-manager",children:[Object(O.jsx)(Rl,{className:zr("preset-manager-button-label",c?"preset-manager-active":""),onClick:()=>s(),children:Object(O.jsxs)("div",{className:"button-label",children:[Object(O.jsx)(Ol.a,{}),Object(O.jsx)("label",{children:e["preset.manager.label"]})]})}),Object(O.jsx)(Wo,{language:e})]})]})},$o=()=>{const e=Qr();return Object(O.jsxs)(Vl,{className:"disclaimer",children:[Object(O.jsx)("h2",{children:e["alert.explaination.tainted.first-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.first-answer"]}),Object(O.jsx)("h2",{children:e["alert.explaination.tainted.second-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.second-answer"]}),Object(O.jsx)("h2",{children:e["alert.explaination.tainted.third-question"]}),Object(O.jsx)("p",{children:e["alert.explaination.tainted.third-answer"]})]})},Ko=()=>Object(O.jsx)(Fl,{overlayClassName:"disclaimer-overlay",content:Object(O.jsx)($o,{})});var Uo=a(626);a(429);const Yo=Wr.b.div`
    white-space: pre-line;
    h2 {
        margin-top: var(--spacing);
    }
`,Go=Wr.b.div`
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
`,Vo=Wr.b.div`
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
`,Xo=e=>{let{caption:t,containerProps:a,alt:r,...n}=e;const{className:i}=null!==a&&void 0!==a?a:{};return Object(O.jsxs)(Vo,{className:`image-with-caption ${i}`,children:[Object(O.jsx)("img",{alt:r,...n}),Object(O.jsx)("div",{className:"caption",children:t})]})},qo=()=>{const[e,t]=Object(r.useState)(!1),a=Qr();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Dl.a,{footer:null,visible:e,width:"60%",title:Object(O.jsxs)("div",{className:"overlay-title",children:[a["guide.format.label"],"\xa0\xa0",Object(O.jsx)(dl.a,{size:"small",type:"primary",onClick:()=>{t(!1)},children:a["generic.close.label"]})]}),className:"formattting-guide-overlay",onClose:()=>{t(!1)},children:Object(O.jsxs)(Yo,{children:[Object(O.jsxs)("p",{children:[a["guide.format.introduction"](Object(O.jsx)(Cl.a,{},"icon")),"."]}),Object(O.jsx)("h2",{children:a["guide.format.section-1.label"]}),a["guide.format.section-1.content"](Object(O.jsx)(Pl,{children:"["},"open-tag"),Object(O.jsx)(Pl,{children:"]"},"close-tag"),Object(O.jsx)(Pl,{children:"Ctrl-1"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-1"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-1-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-1-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-6.label"]}),a["guide.format.section-6.content"](Object(O.jsx)(Pl,{children:"[["},"open-tag"),Object(O.jsx)(Pl,{children:"]]"},"close-tag"),Object(O.jsx)(Pl,{children:"Ctrl-Shift-1"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-Shift-1"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"justified non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-6-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"justified non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-6-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-2.label"]}),a["guide.format.section-2.content"](Object(O.jsx)(Pl,{children:"{"},"open-tag"),Object(O.jsx)(Pl,{children:"}"},"close-tag"),Object(O.jsx)(Pl,{children:"Ctrl-2"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-2"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-2-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-2-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-3.label"]}),a["guide.format.section-3.content"](Object(O.jsx)(Pl,{children:"|"},"separator"),Object(O.jsx)(Pl,{children:"Ctrl-3"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-3"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-3-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-3-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-4.label"]}),a["guide.format.section-4.content"](Object(O.jsx)(Pl,{children:"||"},"separator"),Object(O.jsx)(Pl,{children:"Ctrl-4"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-4"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-4-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-4-preview.jpg",caption:a["guide.format.caption.output"]})]}),Object(O.jsx)("h2",{children:a["guide.format.section-5.label"]}),a["guide.format.section-5.content"](Object(O.jsx)(Pl,{children:"{{"},"open-tag"),Object(O.jsx)(Pl,{children:"}}"},"close-tag"),Object(O.jsx)(Pl,{children:"Ctrl-5"},"hotkey"),Object(O.jsx)(Pl,{children:"\u2318-5"},"hokey-alternative")),Object(O.jsxs)(Go,{className:"panel-figure",children:[Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-raw"},alt:"non-breakable line raw",src:"/ygocarder/asset/image/syntax/syntax-5-raw.jpg",caption:a["guide.format.caption.input"]}),Object(O.jsx)(Xo,{containerProps:{className:"panel-box box-preview"},alt:"non-breakable line preview",src:"/ygocarder/asset/image/syntax/syntax-5-preview.jpg",caption:a["guide.format.caption.output"]})]})]})}),Object(O.jsxs)(dl.a,{className:"formatting-help-button",type:"primary",onClick:()=>{t(!0)},children:[a["guide.format.label"]," ",Object(O.jsx)(Uo.a,{})]})]})},Jo=Wr.b.div`
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
`,_o=Wr.b.div`
    display: inline-block;
    width: 10px;
`,Qo=e=>{let{id:t,tabIndex:a,nameKey:r,labelBackgroundColor:n,labelBackgroundColorList:i,className:l,onClick:o}=e;const s=Qr();return Object(O.jsxs)(Jo,{id:t,tabIndex:a,className:`frame-info-block ${null!==l&&void 0!==l?l:""}`,$withPillar:!(!n&&!i),onClick:o,children:[i?Object(O.jsx)(_o,{children:i.map(e=>Object(O.jsx)("div",{style:{backgroundColor:e,height:100/i.length+"%"}},e))}):n?Object(O.jsx)(_o,{style:{backgroundColor:n}}):null,Object(O.jsx)("label",{className:"frame-info-block-label",children:s[r]})]})};var Zo=a(603),es=a(143),ts=a(303),as=a.n(ts),rs=a(627),ns=a(628),is=a(629),ls=a(589);const os=Wr.b.div`
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
`,ss=()=>Object(O.jsx)(ls.a,{});ss.FullView=()=>Object(O.jsx)(os,{className:"loading-fullview",children:Object(O.jsx)(ls.a,{size:"large"})});a(434),a(435);const cs=(e,t,a)=>{if(!t)return e;const{width:r,height:n,x:i=0,y:l=0,unit:o}=e;if("px"===o){const e=.8,n=400/300,{width:o,height:s}=t,c=s/o>=e?n:1,d=Math.min((null!==i&&void 0!==i?i:0)*c,o),u=Math.min((null!==l&&void 0!==l?l:0)*c,s),m=Math.min((null!==r&&void 0!==r?r:0)*c,o);return{unit:"%",x:d/o*100,y:u/s*100,width:m/o*100,height:m/(null!==a&&void 0!==a?a:1)/s*100,aspect:a}}if(i<0)return{...e,x:0};if(l<0)return{...e,y:0};const{naturalHeight:s,naturalWidth:c}=t,d=null!==r&&void 0!==r?r:0,u=null!==n&&void 0!==n?n:0,m=.05*(s>c?s:c),b=Math.abs(u*s*a-d*c)<=m?u:d*t.naturalWidth/a/t.naturalHeight,p=b/100,h=p>1?100:b,g=p>1?d/p:d,f=p>1?(100-g)/2:i<0?0:i,v=p>1||l<0?0:l;return{...e,x:f,y:v,height:h,width:g,aspect:a}},ds=Object(r.forwardRef)((e,t)=>{let{title:a,backgroundColor:n,className:i,forceFit:l,defaultSourceType:o,defaultInternalSource:s="",defaultExternalSource:c="",receivingCanvas:d,children:u,beforeCropper:m,defaultCropInfo:b,ratio:p,onSourceLoaded:h=()=>{},onSourceChange:g=()=>{},onCropChange:f=()=>{},onTainted:v=()=>{},onMaxSizeExceeded:y=()=>{},onForceFitChange:x=()=>{}}=e;const j="offline"===o?"offline":"online",w=Qr(),k=Object(r.useRef)(null),[S,F]=Object(r.useState)("anonymous"),[C,L]=Object(r.useState)(0),[N,T]=Object(r.useState)(j),[R,I]=Object(r.useState)(j),[B,z]=Object(r.useState)(s),[E,D]=Object(r.useState)(!1),[M,W]=En("activeDropzone"),[A,H]=Object(r.useState)(null),[P,$]=Object(r.useState)(!1),[K,U]=Object(r.useState)(c),Y=Object(r.useRef)(null),[G,V]=Object(r.useState)({current:b,completed:null}),[X,q]=Object(r.useState)("%"===b.unit),{current:J,completed:_}=G,Q=e=>{const t=e[0];if(!t)return;if(t.size<4194304){D(!0);const e=new FileReader;e.addEventListener("load",()=>{"string"===typeof e.result&&(F("anonymous"),z(e.result),T("offline"),I("offline"),g("offline",e.result),D(!1))}),e.readAsDataURL(t)}else y(4)},Z=Object(r.useRef)({source:"",crop:null}),ee=Object(r.useCallback)(e=>{if(D(!1),H(null),h(S),Y.current=e,e.src===Z.current.source&&Z.current.crop){const t=te.current;setTimeout(()=>{if(t!==te.current||!Z.current.crop)return;const a=cs(Z.current.crop,e,p);V({completed:a,current:a}),q(!0),Z.current={source:"",crop:null}},250)}else setTimeout(()=>{V(t=>{const a=cs(t.current,e,p);return{completed:a,current:a}}),q(!0)},250)},[S,h,p]);Object(r.useEffect)(()=>{var e,t,a,r;const n=Y.current;if(!_||!d||!n)return;const{aspect:i}=_;d.style.transform="scale(2)";const o=d.getContext("2d");if(!o||"number"!==typeof i||i<=0||E)return;const{naturalHeight:s,naturalWidth:c}=n,u=c/n.width,m=s/n.height,b=null!==(e=_.unit)&&void 0!==e?e:"px",p=window.devicePixelRatio;o.setTransform(p,0,0,p,0,0);let h,g=Math.floor((null!==(t=_.width)&&void 0!==t?t:0)*("px"===b?u:c/100)),v=Math.min(c,g),y=Math.floor(g/i),x=Math.min(s,y),j=Math.min(c,Math.floor((null!==(a=_.x)&&void 0!==a?a:0)*("px"===b?u:c/100))),O=Math.min(s,Math.floor((null!==(r=_.y)&&void 0!==r?r:0)*("px"===b?m:s/100)));if(o.imageSmoothingQuality="high",!(v<=0||x<=0)){if(j+v>c||O+x>s||j<0||O<0||Math.abs((g-v)/v)>.01||Math.abs((y-x)/x)>.01){"width"===(i*s>c?"width":"height")?(v=c,x=v/i,j=0,O=(s-x)/2,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:0,y:O/s*100}):(v=s*i,x=s,j=(c-v)/2,O=0,h={unit:"%",aspect:i,height:x/s*100,width:v/c*100,x:j/c*100,y:0})}if(l){"width"===(i*s>c?"width":"height")?(v=c,x=v/i):(v=s*i,x=s),d.width=v,d.height=x,o.drawImage(n,0,0,c,s,0,0,v,x)}else{var w,k;d.width=null!==(w=v)&&void 0!==w?w:0,d.height=null!==(k=x)&&void 0!==k?k:0,o.drawImage(n,j,O,v,x,0,0,v,x)}"offline"===N&&(null!==B&&void 0!==B?B:"").length<=0||i===_.aspect&&f(_,N,P),h&&V(e=>({...e,current:h}))}},[_,d,C,l]),Object(r.useEffect)(()=>{$(!1),V(e=>{if(null!=Y.current&&e.current){const t=cs(e.current,Y.current,p);return{current:t,completed:t}}return e})},[p]);const te=Object(r.useRef)(0);Object(r.useImperativeHandle)(t,()=>({isLoading:()=>E,hasImage:()=>"string"===typeof B&&B.length>0&&"offline"===N||"string"===typeof K&&K.length>0&&"online"===N,forceSource:(e,t,a)=>{const r="offline"===N?B:K;$(!1),r!==t&&(D(!0),T(e),I(e),g(e,t),"offline"===e?z(t):U(t)),F("anonymous"),q("%"===a.unit),te.current+=1,Z.current={source:t,crop:a},L(e=>e+1)}}));const ae="offline"===N&&(null!==B&&void 0!==B?B:"").length>0||"online"===N&&(null!==K&&void 0!==K?K:"").length>0,re=d&&ae&&!E&&(null===_||void 0===_?void 0:_.width)&&(null===_||void 0===_?void 0:_.height);return Object(O.jsxs)("div",{className:zr("card-image-cropper",i),children:[Object(O.jsxs)("div",{className:"card-image-source-input",children:[Object(O.jsxs)("div",{className:"card-image-source-input-container",children:[Object(O.jsxs)("div",{className:"card-image-source-input-title",children:[Object(O.jsxs)("span",{className:"field-title",children:[a," ",Object(O.jsx)(Tl,{Icon:rs.a,containerProps:{className:re?"":"disabled"},tooltipProps:{overlay:re?w["image-cropper.download"]:w["image-cropper.no-download"]},onClick:()=>re&&d&&function(e,t){t&&e&&e.toBlob(e=>{if(null!==e){const t=window.URL.createObjectURL(e),a=document.createElement("a");a.download="crop-preview.png",a.href=URL.createObjectURL(e),a.click(),window.URL.revokeObjectURL(t)}},"image/png",1)}(d,_)})]}),Object(O.jsxs)(so.a.Group,{className:"card-image-source-type-input",onChange:e=>{const t=e.target.value;I(t),((null!==B&&void 0!==B?B:"").length>0&&"offline"===t||(null!==K&&void 0!==K?K:"").length>0&&"online"===t)&&(T(t),"offline"===t?(F("anonymous"),g("offline",B)):g("online",K))},value:R,children:[Object(O.jsx)(Mr.a,{title:Object(O.jsx)("div",{className:"image-info",children:w["image-cropper.online-tip"]}),children:Object(O.jsx)(so.a.Button,{value:"online",checked:"online"===R,children:w["image-cropper.source.online.tooltip"]})}),Object(O.jsx)(Mr.a,{title:Object(O.jsx)("div",{className:"image-warning",children:w["image-cropper.offline-warning"]}),children:Object(O.jsx)(so.a.Button,{value:"offline",checked:"offline"===R,children:w["image-cropper.source.offline.tooltip"]})})]})]}),Object(O.jsx)("div",{className:["card-image-input","online"===R?"":"input-inactive"].join(" "),children:Object(O.jsx)(Zo.a,{placeholder:w["image-cropper.placeholder"],value:K,onChange:e=>{const t=e.target.value;F("anonymous"),D(!0),T("online"),I("online"),g("online",t),U(t)},maxLength:512,allowClear:!0},"key")}),Object(O.jsx)("div",{className:["card-image-input","offline"===R?"":"input-inactive"].join(" "),children:Object(O.jsx)(Zo.a,{ref:k,type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files.length>0?Q(e.target.files):alert(w["image-cropper.not-found-warning"])},onClick:()=>{var e;return null===(e=k.current)||void 0===e?void 0:e.setValue("")}})})]}),u]}),m,Object(O.jsxs)("div",{className:zr("card-cropper"),onKeyDown:()=>{$(!0)},children:[Object(O.jsx)(ao,{$visible:M>0,className:"drop-zone",onDragOver:e=>e.preventDefault(),onDrop:e=>{if(e.preventDefault(),W(0),e.currentTarget.classList.contains("drop-zone")){const t=e.dataTransfer.files;Q(t)}},children:Object(O.jsx)("label",{children:w["image-cropper.drop.tooltip"]})}),E&&Object(O.jsx)(ss.FullView,{}),ae&&!A&&Object(O.jsxs)("div",{className:"card-image-option",children:[Object(O.jsx)(Mr.a,{placement:"left",overlay:l?w["image-cropper.button.use-crop.tooltip"]:w["image-cropper.button.force-fit.tooltip"],children:Object(O.jsx)("div",{className:zr("image-option force-fit-option",l?"option-active":""),onClick:()=>{$(!0),x(!l)},children:Object(O.jsx)(ns.a,{})})}),!l&&Object(O.jsx)(Mr.a,{placement:"left",overlay:w["image-cropper.button.center-vertical.tooltip"],children:Object(O.jsx)("div",{className:"image-option alignment-center-option",onClick:()=>{$(!0),V(e=>{var t;const{width:a,x:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,x:(100-a)/2};return{current:n,completed:n}})},children:Object(O.jsx)(is.a,{})})}),!l&&Object(O.jsx)(Mr.a,{placement:"left",overlay:w["image-cropper.button.center-horizontal.tooltip"],children:Object(O.jsx)("div",{className:"image-option alignment-middle-option",onClick:()=>{$(!0),V(e=>{var t;const{height:a,y:r}=null!==(t=e.completed)&&void 0!==t?t:{};if("number"!==typeof a||"number"!==typeof r)return e;const n={...e.completed,y:(100-a)/2};return{current:n,completed:n}})},children:Object(O.jsx)(is.a,{})})})]}),(!ae||A&&void 0===S)&&!E&&Object(O.jsx)(es.a,{description:w["image-cropper.not-found-warning"],image:null}),Object(O.jsx)(as.a,{src:"offline"===N?B:K,disabled:l,className:l?"force-fitted":"",imageStyle:n?{backgroundColor:n}:{backgroundImage:'url("/ygocarder/asset/image/texture/transparent-tile.png")'},onImageLoaded:ee,onImageError:()=>{if(d)if("online"===N&&""===(null!==K&&void 0!==K?K:"")||"offline"===N&&""===(null!==B&&void 0!==B?B:"")){Z.current={source:"",crop:null};const{width:e,height:t}=d,a=d.getContext("2d");null===a||void 0===a||a.clearRect(0,0,e,t),_&&f(_,N,P),h(S),D(!1),H("Image not found")}else F(void 0),v();else Z.current={source:"",crop:null},D(!1),H("No receiving canvas"),v();void 0===S&&(D(!1),H("Tainted canvas"))},crop:J,onDragStart:()=>{$(!0)},onChange:(e,t)=>{const a=Y.current;Z.current.crop||E||(X?V(e=>({...e,current:cs(t,a,p)})):(q(!0),V(t=>({...t,current:cs(e,a,p)}))))},onComplete:(e,t)=>{Z.current.crop&&!E||V(e=>({...e,completed:t}))},ruleOfThirds:!0,crossorigin:S},`${N}-${X}-${C}`)]})]})}),us=Wr.b.div`
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
`,ms=[{hex:"#FFFFFF",rgb:[255,255,255]},{hex:"#000000",rgb:[0,0,0]},{hex:"#FF0000",rgb:[255,0,0]},{hex:"#FFFF00",rgb:[255,255,0]},{hex:"#00FF00",rgb:[0,255,0]},{hex:"#00FFFF",rgb:[0,255,255]},{hex:"#0000FF",rgb:[0,0,255]},{hex:"#FF00FF",rgb:[255,0,255]}],bs=e=>{let{value:t="",onChange:a}=e;const{color:r,inputText:n,setColor:i}=In({value:t,onChange:a});return Object(O.jsxs)(us,{children:[Object(O.jsx)("div",{className:"color-list",children:ms.map(e=>{let{hex:t,rgb:n}=e;const i=fr(n);return Object(O.jsx)(Ml,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:r.hex.toUpperCase()===t&&Object(O.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(O.jsxs)("div",{className:"color-input",children:[Object(O.jsx)(Ml,{$static:!0,style:{backgroundColor:r.hex}}),Object(O.jsx)(Zo.a,{size:"small",value:n,onChange:e=>{i(e.target.value)}})]})]})};var ps=a(66),hs=a(311);const gs=Wr.b.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`,fs=Object(ps.c)(e=>{let{onChange:t,...a}=e;return Object(O.jsx)(gs,{children:Object(O.jsx)(hs.Saturation,{...a,onChange:e=>{null===t||void 0===t||t(e)}})})}),vs=[{hex:"#B80000",rgb:[184,0,0]},{hex:"#EB9694",rgb:[235,150,148]},{hex:"#DB3E00",rgb:[219,62,0]},{hex:"#FAD0C3",rgb:[250,208,195]},{hex:"#FCCB00",rgb:[252,203,0]},{hex:"#FEF3BD",rgb:[254,243,189]},{hex:"#008B02",rgb:[0,139,2]},{hex:"#C1E1C5",rgb:[193,225,197]},{hex:"#006B76",rgb:[0,107,118]},{hex:"#BEDADC",rgb:[190,218,220]},{hex:"#1273DE",rgb:[18,115,222]},{hex:"#C4DEF6",rgb:[196,222,246]},{hex:"#004DCF",rgb:[0,77,207]},{hex:"#BED3F3",rgb:[190,211,243]},{hex:"#5300EB",rgb:[83,0,235]},{hex:"#D4C4FB",rgb:[212,196,251]}],ys=Wr.b.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${Ml} {
            display: inline-block;
            flex: 1;
            border: var(--bw) solid var(--sub-level-2);
            height: 18px;
        }
    }
    .color-list {
        display: grid;
        grid-template-columns: repeat(${vs.length/4}, max-content);
        border-radius: var(--br);
        overflow: hidden;
        ${Ml} {
            height: 15px;
            width: 15px;
            box-shadow: none;
            border-radius: 0;
        }
    }
`,xs=e=>{let{children:t,onChange:a,value:r}=e;const{color:n,inputText:i,setColor:l}=In({value:r,onChange:a}),o=""===i;return Object(O.jsxs)(ys,{className:"horizontal-sketch-picker",children:[Object(O.jsx)("div",{className:"input-label",children:t}),Object(O.jsxs)("div",{className:"color-input",children:[Object(O.jsxs)("div",{className:"color-state",children:[Object(O.jsx)(Ml,{$empty:o,style:o?{}:{backgroundColor:n.hex}}),Object(O.jsx)(Tl,{size:"sm",Icon:Pr.a,onClick:()=>{a("")}})]}),Object(O.jsx)(Zo.a,{size:"small",value:i,onChange:e=>{l(e.target.value)}})]}),Object(O.jsx)("div",{className:"color-list",children:vs.map(e=>{let{hex:t,rgb:r}=e;const i=fr(r);return Object(O.jsx)(Ml,{className:"color-block",title:t,style:{backgroundColor:t},onClick:()=>null===a||void 0===a?void 0:a(t),children:n.hex.toUpperCase()===t&&Object(O.jsx)("div",{className:"active-dot",style:{backgroundColor:i}})},t)})}),Object(O.jsx)(fs,{color:n.hex,onChange:e=>{let{hex:t}=e;return l(t)}})]})};var js=a(235),Os=a(630),ws=a(631),ks=a(632);const{height:Ss,width:Fs}=s,Cs=Wr.b.div`
    width: ${Fs}px;
    height: ${Ss}px;
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
`,Ls=e=>{let{zoomIn:t,zoomOut:a,resetTransform:r,setTransform:n,scale:i,globalScale:l,width:o,height:s}=e;return Object(O.jsxs)("div",{className:"control-container",children:[Object(O.jsxs)("div",{className:"action-list",children:[Object(O.jsx)(ql,{disabled:i>=4,onClick:()=>{t()},children:Object(O.jsx)(Os.a,{})}),Object(O.jsx)(ql,{disabled:i<=1/l,onClick:()=>{a()},children:Object(O.jsx)(ws.a,{})}),Object(O.jsx)(ql,{onClick:()=>{r()},children:Object(O.jsx)(ks.a,{})}),Object(O.jsx)(ql,{onClick:()=>{n(-Math.max(0,o-Fs)/2,-Math.max(0,s-Ss)/2,1)},children:Object(O.jsx)(ns.a,{})})]}),Object(O.jsxs)("div",{className:"control-info",children:[i&&Object(O.jsxs)(O.Fragment,{children:["\xd7",i<1?"1/"+Math.round(1/i*10)/10:Math.round(10*i)/10]}),"\xa0(",o," \xd7 ",s,")"]})]})},Ns=Object(r.forwardRef)((e,t)=>{let{globalScale:a}=e;const[n,i]=Object(r.useState)(!1),[l,o]=Object(r.useState)(0),s=Object(r.useRef)(null),c=Object(r.useRef)(null),[d,u]=Object(r.useState)(()=>1/a);return Object(r.useImperativeHandle)(t,()=>({setVisible:i,draw:e=>{var t,a;null===(t=s.current)||void 0===t||null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0)},refresh:()=>o(e=>e+1),getCanvasKey:()=>l})),Object(r.useEffect)(()=>{var e;null===(e=c.current)||void 0===e||e.resetTransform()},[a]),Object(O.jsx)(Er.a,{width:`${Fs+30}px`,wrapClassName:"card-lightbox-overlay",visible:n,forceRender:!0,onCancel:()=>i(!1),footer:null,children:Object(O.jsx)(Cs,{className:"card-lightbox-container",children:Object(O.jsx)(js.b,{ref:c,initialScale:1/a,initialPositionX:0,initialPositionY:0,minScale:1/a,maxScale:4,onTransformed:e=>{u(e.state.scale)},children:e=>{let{...t}=e;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"card-lightbox-control",children:Object(O.jsx)(Ls,{...t,scale:d,globalScale:a,width:Fs*a,height:Ss*a})}),Object(O.jsx)(js.a,{wrapperClass:"card-lightbox-content",wrapperStyle:{maxWidth:Fs,maxHeight:Ss,lineHeight:0},children:Object(O.jsx)("canvas",{id:"lightbox-canvas",ref:s,width:Fs*a,height:Ss*a},l+.1)})]})}})})})}),Ts=Wr.b.div`
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
`,Rs=e=>{let{active:t,defaultValue:a=[],onChange:n=()=>{},onStatusChange:i}=e;const[l,o]=Object(r.useState)(a),s=Qr(),c=JSON.stringify(l);return Object(r.useEffect)(()=>{n(l)},[c]),Object(O.jsxs)(Ts,{className:zr("link-marker-picker",t?"chooser-active":"chooser-disabled"),children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)(Ll.a,{checked:t,onChange:e=>i(e.target.checked),children:s["link-picker.label"]})}),Object(O.jsx)("div",{className:"container",children:[...Array(9)].map((e,a)=>{const r=`${a+1}`;return"5"===r?Object(O.jsx)(Mr.a,{overlay:t?s["link-picker.reset.tooltip"]:null,children:Object(O.jsx)("div",{className:"link-marker-reset",onClick:()=>{t&&o([])},children:Object(O.jsx)(j.a,{})})},"5"):Object(O.jsx)("div",{className:`link-marker-button marker-${a+1} ${l.includes(r)?"marker-checked":""}`,onClick:()=>{t&&o(e=>{let t=[...e];return t.includes(r)?t=t.filter(e=>e!==r):t.push(r),t})},children:Object(O.jsx)("div",{className:`link-marker-icon link-marker-icon-${a+1}`,style:{transform:`rotate(${We[a]}deg) translateY(-1px)`}})},r)})})]})};var Is=a(604);const Bs=Object(Wr.b)(Is.a.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`,zs=Object(Wr.b)(Is.a.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`,Es=e=>{let{onChange:t,...a}=e;const r=Qr(),{resolution:n,updateSetting:i}=Ln(Object(Bn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a},updateSetting:r}=e;return{allowHotkey:t,resolution:a,updateSetting:r}}));return Object(O.jsxs)(Is.a,{onClick:e=>e.domEvent.stopPropagation(),...a,children:[Object(O.jsx)(Bs,{disabled:!0,onClick:e=>e.domEvent.stopPropagation(),children:r["setting.option.resolution.label"]}),Kt.map(e=>{let{width:a,height:l,label:o,scale:s}=e;return Object(O.jsx)(zs,{className:n[0]===a&&n[1]===l?"active-setting":"",onClick:()=>{i({resolution:[a,l],globalScale:s}),null===t||void 0===t||t([a,l],s)},children:s>1?Object(O.jsx)(wl.a,{overlayClassName:"explanation-overlay",placement:"left",content:Object(O.jsx)(Vl,{children:r["setting.option.resolution.warning"]}),children:Object(O.jsx)(eo,{width:a,height:l,warning:!0})}):Object(O.jsx)(eo,{width:a,height:l})},`${a}-${l}`)})]})},Ds=e=>Object(O.jsx)(hl,{fallback:Object(O.jsx)(O.Fragment,{}),children:Object(O.jsx)(bl.a,{...e})}),Ms=Wr.b.div`
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
`,Ws=Wr.b.div`
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
`,As=Wr.b.div`
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`,Hs=Wr.b.div`
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
`,Ps={Container:As,Option:Ws},$s=Wr.b.div`
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
`,Ks=Object(Wr.b)(dl.a)`
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
`,Us=Object(r.forwardRef)((e,t)=>{let{isTainted:a,isInitializing:n,imageChangeCount:i,globalScale:l,canvasMap:o,onDownloadError:s}=e;const c=Qr(),{allowHotkey:d,resolution:u}=Ln(Object(Bn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),{onExport:m}=Zi(!0,o,{imageChangeCount:i,isInitializing:n,language:c,globalScale:l}),{exportCanvasRef:b}=o,p=Object(r.useRef)({currentPipeline:Promise.resolve(),pipelineRunning:!1}),[h,g]=Object(r.useState)(!1),f=Object(r.useCallback)(()=>{g(!1)},[]),{onSave:v,isPipelineRunning:y}=Nn({isTainted:a,isInitializing:n,exportCanvasRef:b,exportRef:p,onExport:m,onDownloadError:s,onDownloadComplete:f}),x=e=>{h||(a?Dr.a.error({message:c["prompt.download.tainted.message"]}):(g(!0),v(e)))};return Object(r.useImperativeHandle)(t,()=>({download:x,isPipelineRunning:y})),a?null:Object(O.jsxs)("div",{className:"save-button-container",children:[Object(O.jsx)("div",{id:"save-button-waiting"}),Object(O.jsxs)(Ks,{className:"save-button",id:"save-button-ready",children:[Object(O.jsx)(Mr.a,{overlay:d?Object(O.jsx)(O.Fragment,{children:"Ctrl-S / \u2318-S"}):null,children:Object(O.jsx)("div",{className:"button-label",children:Object(O.jsx)("div",{className:"label-content",onClick:()=>x(),children:h?c["button.download.ongoing.label"]:c["button.download.label"]})})}),Object(O.jsx)(ul.a,{disabled:h,className:"save-button-dropdown",placement:"bottomRight",overlay:Object(O.jsx)(Es,{onChange:()=>Br()}),children:Object(O.jsxs)($s,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(O.jsx)(ml.a,{className:"resolution-icon"}),Object(O.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]})});var Ys=a(634),Gs=a(635),Vs=a(636);const Xs=Wr.b.div`
    ${Ar} {
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
`,qs=Object(Wr.b)(Ar)`
    ${$l}
`,Js=e=>{let{data:t,children:a,disabled:r,withText:n}=e;return Object(O.jsx)(Ul,{disabled:r,data:t,container:qs,overlay:n?Object(O.jsxs)(O.Fragment,{children:["Copied\xa0",Object(O.jsx)(Hl.a,{})]}):Object(O.jsx)(Hl.a,{}),children:a})},_s=e=>[{label:e["button.import.for-ygocarder.label"],value:"ygocarder",converter:Ga},{label:e["button.import.for-other.label"],value:"other",converter:sr}],Qs=Object(r.forwardRef)((e,t)=>{let{tainted:a,artworkCanvas:n,onRequireExportData:i,onRequireDownload:l,onClose:o}=e;const[s,c]=Object(r.useState)(!1),[d,u]=Object(r.useState)("ygocarder"),[m,b]=Object(r.useState)({other:{name:"",data:"",isPartial:!1},ygocarder:{name:"",data:"",isPartial:!1}}),{allowHotkey:p,resolution:h}=Ln(Object(Bn.useShallow)(e=>{let{setting:{allowHotkey:t,resolution:a}}=e;return{allowHotkey:t,resolution:a}})),g=Qr(),f="export-input-raw",v=Object(r.useCallback)(()=>{const e=document.getElementById(f);e&&(e.focus(),e.select())},[]);Object(r.useImperativeHandle)(t,()=>({setCardData:function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&c(!0),b(_s(g).map(t=>{let{value:a,converter:r}=t;try{const{isPartial:t,result:i}=r(e,n);return{value:a,isPartial:t,name:qa(e.name),data:`${JSON.stringify(i)}`}}catch(i){return console.error(i),{value:a,isPartial:!1,name:"Unknown",data:""}}}).reduce((e,t)=>{let{data:a,isPartial:r,value:n,name:i}=t;return e[n]={name:i,data:a,isPartial:r},e},{...m}))}})),Object(r.useEffect)(()=>{setTimeout(()=>{s&&"ygocarder"===d&&v()},100)},[d,v,s]);const{data:y,isPartial:x,name:j}=m[d];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Er.a,{visible:s,title:g["button.export-modal.label"],className:"global-overlay export-modal",onCancel:()=>{c(!1),o()},cancelText:g["converter.cancel.label"],okButtonProps:{style:{display:"none"}},width:600,destroyOnClose:!1,children:Object(O.jsxs)(Xs,{children:[Object(O.jsx)(El,{optionList:_s(g),onChange:e=>u(e),value:d}),"other"===d&&x&&Object(O.jsxs)("div",{className:"partial-alert",children:[Object(O.jsx)("b",{children:g["service.decode.partial.message"]}),Object(O.jsx)("br",{}),g["service.decode.partial.description"]]}),Object(O.jsxs)("div",{className:zr("export-container-result",`mode_${d}`),children:[Object(O.jsx)(Xl,{content:a&&"other"===d?Object(O.jsx)($o,{}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Ar,{disabled:a&&"other"===d,onClick:()=>{const e=new Blob([y],{type:"application/json"});_a(qa(j),e,"application/json")},children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(rs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.download-button.label"]})]})})}),"ygocarder"===d&&Object(O.jsx)(Xl,{placement:"bottom",content:x?Object(O.jsx)(Vl,{children:g["prompt.export.offline-warning.message"]}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Js,{disabled:!1,data:m.ygocarder.data,withText:!0,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(Ys.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.copy-button.label"]})]})})}),"ygocarder"===d&&Object(O.jsx)(Xl,{placement:"bottom",content:x?Object(O.jsx)(Vl,{children:g["image-cropper.offline-warning"]}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Js,{disabled:x,data:window.location.href,withText:!0,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(Gs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.share-button.label"]})]})})}),Object(O.jsxs)("div",{children:[Object(O.jsx)(Xl,{content:a?Object(O.jsx)($o,{}):void 0,children:Object(O.jsx)("div",{children:Object(O.jsxs)(Ar,{disabled:a,className:"export-download-image",onClick:l,children:[Object(O.jsx)("div",{className:"icon",children:Object(O.jsx)(Vs.a,{})}),Object(O.jsx)("div",{className:"label",children:g["button.export-modal.save-button.label"]})]})})}),Object(O.jsx)(ul.a,{overlay:Object(O.jsx)(Es,{}),children:Object(O.jsxs)("div",{className:"resolution-picker",children:[h[0]," \xd7 ",h[1]]})})]}),"ygocarder"===d&&!x&&Object(O.jsx)(Zo.a.TextArea,{id:f,className:"export-input-raw",size:"small",value:m.ygocarder.data,rows:5})]})]})}),Object(O.jsx)(Mr.a,{overlay:p?Object(O.jsx)(O.Fragment,{children:"Ctrl-D / \u2318-D"}):null,children:Object(O.jsx)("button",{className:"primary-button export-button",onClick:()=>{i(),c(!0)},children:g["generic.export.label"]})}),Object(O.jsx)(ul.a,{overlay:Object(O.jsx)(Is.a,{onClick:e=>e.domEvent.stopPropagation(),children:_s(g).map((e,t)=>{let{converter:a,label:r}=e;return Object(O.jsx)(Is.a.Item,{onClick:()=>{try{const e=Cn.getState().card,{result:t}=a(e,n);((e,t)=>{const a=new Blob([t],{type:"application/json"});_a(qa(e),a,"application/json")})(qa(e.name),`${JSON.stringify(t)}`)}catch(e){console.error(e),Dr.a.error({message:g["error.export.message"],description:g["error.export.description"]})}},children:r},`${t}`)})}),children:Object(O.jsx)(Ar,{className:"secondary-button export-custom",children:Object(O.jsx)(rs.a,{})})})]})});var Zs=a(637);const ec=Wr.b.div`
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
        ${Ar} {
            background-color: var(--main-level-4);
            border: var(--bw) solid var(--color-contrast);
            &:hover {
                background-color: var(--sub-level-4);
            }
        }
    }
`,tc=Object(r.forwardRef)((e,t)=>{let{allowHotkey:a,language:n,onImport:i,onClose:l}=e;const o="import-direct-upload",s="import-upload",c="import-textarea",d=Object(r.useRef)(null),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(0),[p,h]=Object(r.useState)("replace"),[g,f]=Object(r.useState)(!1),[v,y]=Object(r.useState)(!1),x=Object(r.useCallback)(()=>{const e=document.getElementById(c);e&&(e.focus(),e.select())},[]);Object(r.useEffect)(()=>{setTimeout(()=>{g&&x()},100)},[x,g]),Object(r.useImperativeHandle)(t,()=>({requestImport:e=>{h(e),f(!0)}}));const j=()=>{b(e=>e+1),f(!1),y(!1),l()},w=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(e){const{card:a,isPartial:r}=Sn(e,"replace"===p||"new"===p?void 0:Cn.getState().card);if(r&&Dr.a.info({message:n["service.decode.partial.message"],description:n["service.decode.partial.description"]}),t&&"online"===a.artSource&&(e=>{try{return e.startsWith("https://images.ygoprodeck.com/images/cards_cropped")}catch(t){return console.error(t),!1}})(a.art)){const e={...a};i(e,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}else i(a,{forcePurityCheck:!0,writeOnCurrentCard:"new"!==p,addToList:"new"===p})}}catch(a){console.error("Import error:",a),Dr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}},k=e=>{if(e)for(let t=0;t<=e.length;t++){const a=e.item(t);if(!a)continue;const r=new FileReader;r.onload=e=>{let{target:t}=e;if(!t)return;const{result:a}=t;"string"===typeof a&&w(a)},r.readAsText(a);break}},S=async()=>{try{const r=document.getElementById(c);if(r){var e;const{value:n}=r,i=null!==(e=n.trim())&&void 0!==e?e:"";let l="";try{l=Ma(decodeURIComponent(i))}catch(a){}let o=null;if(i.startsWith("{")&&i.endsWith("}"))o=i;else if(l.startsWith("{")&&l.endsWith("}"))o=JSON.parse(l);else{var t;const e=i.startsWith("https://db.ygoprodeck.com/api")?i:`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${i}&num=10&offset=0&misc=yes`;y(!0);const a=await fetch(e);if(!a.ok)throw new Error(`Response status: ${a.status}`);const r=await a.json();o=null!==(t=r.data.find(e=>{let{name:t}=e;return t.toLowerCase()===i.toLowerCase()}))&&void 0!==t?t:r.data.sort((e,t)=>{var a,r;const n=null===(a=e.misc_info)||void 0===a?void 0:a[0],i=null===(r=t.misc_info)||void 0===r?void 0:r[0];if(!n||!i)return 0;return(n.viewsweek+1)/(i.viewsweek+1)>2?i.viewsweek-n.viewsweek:i.views-n.views})[0]}await w(o,!0)}}catch(a){console.error("Import error:",a),Dr.a.error({message:n["error.import.error.message"],description:n["error.import.error.description"]})}finally{j()}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Er.a,{visible:g,title:"merge"===p?n["button.import.merge.label"]:n["generic.import.label"],className:"global-overlay import-modal",onCancel:j,okText:n["prompt.import.ok.label"],confirmLoading:v,cancelButtonProps:{style:{display:"none"}},destroyOnClose:!1,onOk:S,children:Object(O.jsxs)(ec,{children:["merge"!==p?Object(O.jsxs)("div",{className:"prompt-alert",children:[n["prompt.import.instruction.line-1"],Object(O.jsx)("br",{}),n["prompt.import.instruction.line-2"],Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"alert",children:n["prompt.import.instruction.alert.line-1"]})]}):null,Object(O.jsx)("div",{className:"import-container-input",children:Object(O.jsx)(Zo.a.TextArea,{id:c,className:"import-input-raw",size:"small",placeholder:n["prompt.import.message"],disabled:v,onPressEnter:S,rows:4},`input-${m}`)}),"merge"!==p?Object(O.jsxs)("div",{className:"import-container-upload",children:[Object(O.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(O.jsxs)(Ar,{className:"import-custom",onClick:()=>{const e=document.getElementById(s);e&&e.click()},children:[Object(O.jsx)("input",{ref:u,type:"file",id:s,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=u.current)||void 0===e?void 0:e.files;k(t),j()}},`file-input-${m}`),n["button.import.tooltip"]]}),"new"===p&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{className:"option-separator",children:n["prompt.import.alternative.label"]}),Object(O.jsx)(Ar,{className:"import-empty",onClick:()=>{w(At()),j()},children:n["button.empty.label"]})]})]}):null]})}),Object(O.jsx)(Mr.a,{overlay:a?Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("div",{children:"Ctrl-E / \u2318-E"}),Object(O.jsxs)("div",{children:["Ctrl-G / \u2318-G",n["prompt.import.merge.tooltip"]]})]}):null,children:Object(O.jsx)("button",{className:"primary-button import-button",onClick:()=>{h("replace"),f(!0)},children:n["generic.import.label"]})}),Object(O.jsx)(Mr.a,{overlay:n["button.import.tooltip"],children:Object(O.jsxs)(Ar,{className:"secondary-button import-custom",onClick:()=>{const e=document.getElementById(o);e&&e.click()},children:[Object(O.jsx)("input",{ref:d,type:"file",id:o,accept:"application/json",className:"import-upload-input",onChange:()=>{var e;const t=null===(e=d.current)||void 0===e?void 0:e.files;k(t),j()}},`direct-file-input-${m}`),Object(O.jsx)(Zs.a,{})]})})]})}),ac=(Object(Wr.b)(Is.a)`
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
`,[{label:"OCG",value:"ocg",props:{className:"ocg-button",style:{fontWeight:"bold"}}},{label:"TCG",value:"tcg",props:{className:"tcg-button",style:{fontWeight:"bold"}}}]),rc=e=>y(e).map(e=>{let{color:t,name:a,label:r}=e;return{label:"normal"===a?Object(O.jsx)(j.a,{}):r,value:a,props:{style:{color:t,fontWeight:"bold"}}}}),nc=[{value:"normal",label:Object(O.jsx)(j.a,{})},...Object.values(g).map(e=>{let{value:t,label:a}=e;return{label:a,value:t}})],ic=()=>ze.map(e=>{let{name:t,nameKey:a,labelBackgroundColor:r,labelBackgroundColorList:n,edition:i}=e;return{label:Object(O.jsx)(Qo,{labelBackgroundColor:r,labelBackgroundColorList:n,nameKey:a}),value:t,edition:i}}),lc=[...Array(14)].map((e,t)=>({label:t,value:t})),oc=R.map(e=>{let{value:t}=e;return{label:t===T?Object(O.jsx)(j.a,{}):Object(O.jsx)("img",{alt:t,src:`/ygocarder/asset/image/sticker/sticker-${t.toLowerCase()}.png`}),value:t}}),sc=Object.entries({veryStrict:{label:"5",order:1},strict:{label:"4",order:2},loose:{label:"3",order:3},veryLoose:{label:"2",order:4},relaxed:{label:"1",order:5}}).map(e=>{let[t,{label:a,order:r}]=e;return{label:a,value:t,order:r}}).sort((e,t)=>e.order-t.order);var cc=a(648);const dc=Wr.b.div`
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
`,uc=e=>{let{targetId:t="",onPick:a=()=>{}}=e;const r=Qr(),n=e=>{const r=document.getElementById(t);if(r){const{value:t}=function(e,t){if(document.selection)return e.focus(),document.selection.createRange().text=t,{value:e.value,position:0};if(e.selectionStart||0===e.selectionStart){const a=e.selectionStart,r=e.selectionEnd;return e.value=e.value.substring(0,a)+t+e.value.substring(r,e.value.length),e.selectionStart=a+t.length,e.selectionEnd=a+t.length,e.focus(),{value:e.value,position:a+t.length}}return e.value+=t,{value:e.value,position:0}}(r,e);a(t,e)}};return Object(O.jsxs)(dc,{tabIndex:-1,className:"char-picker-container",children:[Object(O.jsx)("div",{id:"char-picker",className:"char-picker",children:["\u221e","\u2606","\u2605","\u25cf","\xa9","\u2122","\u2c6f","\u042f","\xd8","\u203b"].map(e=>Object(O.jsx)("button",{tabIndex:-1,className:"ant-btn",onClick:()=>n(e),children:e},e))}),Object(O.jsx)("div",{className:"char-picker-guideline",children:Object(O.jsx)(Fl,{content:Object(O.jsxs)(Vl,{children:[r["input.char-picker.guide.header"],Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:r["input.char-picker.guide.instruction-1"]}),Object(O.jsx)("li",{children:r["input.char-picker.guide.instruction-2"]})]})]})})})]})};var mc=a(639),bc=a(612);a(572),a(573);const pc=Object(r.forwardRef)((e,t)=>{let{disabled:a,color:n,onSelect:i,onOffsetChange:l,onRemove:o}=e;const s=Qr(),[c,d]=Object(r.useState)(n),[u,m]=Object(r.useState)(0),[b,p]=Object(r.useState)(-1),h=Object(r.useRef)(Vr()(m,250)).current;return Object(r.useImperativeHandle)(t,()=>({setColor:e=>{if(e){const{color:t,offset:a,id:r}=e,{min:n,max:i,round:l}=Math;d(t),m(i(0,n(100,l(100*parseFloat(a))))),p(r)}},setCurrentOffset:(e,t)=>{const{min:a,max:r,round:n}=Math;e===b&&m(r(0,a(100,n(100*parseFloat(t)))))}})),Object(r.useEffect)(()=>{b>0&&(null===l||void 0===l||l(b,""+u/100))},[b,u,l]),Object(O.jsxs)("div",{className:"stop-point-control-panel",children:[Object(O.jsxs)("div",{className:"stop-point-offset-input",children:[Object(O.jsxs)("div",{children:[s["input.name-style.gradient.color-stop.label"],": ",Object(O.jsx)(bc.a,{value:u,size:"small",max:100,min:0,onChange:e=>h("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0)})]}),Object(O.jsx)(dl.a,{className:"remove-stop-color",size:"small",disabled:a,onClick:()=>null===o||void 0===o?void 0:o(b),children:s["input.name-style.gradient.color-remove.label"]})]}),Object(O.jsx)(ps.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:c,onChange:e=>d(e.hex),onChangeComplete:e=>{d(e.hex),null===i||void 0===i||i(e.hex)}})]})}),hc=e=>({colorList:e,raw:kr(e)}),gc=e=>{var t,a;let{palette:n=kr(wr()),angle:i=180,memoizedOnChange:l}=e;const o=Qr(),s=Object(r.useRef)(null),[c,d]=Object(r.useState)(i),[u,m]=Object(r.useState)(()=>{var e,t;const a=Sr(n);return{raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1}}),b=Object(r.useCallback)((e,t)=>m(a=>{const r=a.colorList.map(a=>a.id===e?{...a,offset:t}:a);return{...a,...hc(r)}}),[]);Object(r.useEffect)(()=>{d(i)},[i]),Object(r.useEffect)(()=>{var e,t;const a=Sr(n);m({raw:n,colorList:a,currentControlId:null!==(e=null===(t=a[0])||void 0===t?void 0:t.id)&&void 0!==e?e:-1})},[n]);const p=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{var e;u.colorList[0]&&p.current&&(p.current=!0,null===(e=s.current)||void 0===e||e.setColor(u.colorList[0]))},[u.colorList]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{const{colorList:t,currentControlId:a}=u;if(e&&a>=0){var r;const e=t.find(e=>e.id===a);e&&(null===(r=s.current)||void 0===r||r.setCurrentOffset(a,e.offset))}},100),()=>{e=!1}},[u]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&l(u.colorList,c)},200),()=>{e=!1}},[u,c,l]),Object(O.jsxs)("div",{className:zr(fl,"gradient-picker-container"),children:[Object(O.jsxs)("div",{className:"gradient-angle-control",children:[Object(O.jsx)("h2",{children:o["input.name-style.gradient.color-point.label"]}),Object(O.jsxs)(dl.a,{size:"small",className:"add-stop-color",disabled:(null!==(t=null===(a=u.colorList)||void 0===a?void 0:a.length)&&void 0!==t?t:1e4)>20,onClick:()=>{m(e=>{const t=[...e.colorList,{offset:"0.5",color:"#ffffff",id:e.colorList.length+1}].sort((e,t)=>Number(e.offset)-Number(t.offset));return{...e,...hc(t)}})},children:[o["input.name-style.gradient.add-point.label"]," (",u.colorList.length,"/",20,")"]}),Object(O.jsx)(yl,{angle:c,size:120,setAngle:d,children:Object(O.jsx)("h2",{children:o["input.name-style.gradient.gradient-direction.label"]})})]}),Object(O.jsx)("div",{className:"stop-color-picker-container",children:Object(O.jsx)(gl.GradientPicker,{width:370,paletteHeight:32,maxStops:20,minStops:2,stopRemovalDrop:99999,palette:u.colorList,onPaletteChange:e=>m(t=>({...t,...hc(e)})),onColorStopSelect:e=>{var t;m(t=>({...t,currentControlId:e.id})),null===(t=s.current)||void 0===t||t.setColor(e)},children:Object(O.jsx)(pc,{ref:s,disabled:u.colorList.length<=1,onOffsetChange:b,onRemove:e=>{m(t=>{var a;const r=t.colorList.filter(t=>t.id!==e),n=null!==(a=null===r||void 0===r?void 0:r[0].id)&&void 0!==a?a:-1;var i;n>0&&u.colorList[n]&&(null===(i=s.current)||void 0===i||i.setColor(u.colorList[n]));return{...hc(r),currentControlId:n}})}})})})]})},fc=Object(Wr.b)(Ps.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`,vc=Object(Wr.b)(Ps.Container)`
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
`,yc=Object(Wr.b)(Ps.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`,xc=Wr.b.div`
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
`;var jc=a(322);const Oc=Object(r.forwardRef)((e,t)=>{let{className:a,defaultValue:n,fieldMap:i,labelMap:l,onChange:o}=e;const s=Qr(),{x:c,y:d,color:u,width:m}=i,[b,p]=Object(r.useState)(()=>{const e=n[c],t=n[d],a=n[u],r=n[m];return{x:null!==e&&void 0!==e?e:0,y:null!==t&&void 0!==t?t:0,width:null!==r&&void 0!==r?r:0,color:a}}),{x:h,y:g,color:f,width:v}=b,y=l[m];return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&o(b)},500),()=>{e=!1}},[b]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{const t=Object.keys(e);for(const a in t)if(e[a]!==b[a])return void p(t=>({...t,...e}))}})),Object(O.jsxs)("div",{className:a,children:[Object(O.jsx)("h2",{children:s["input.name-style.slider.position.label"]}),Object(O.jsxs)("div",{className:"line-position",children:[Object(O.jsx)(jc.a,{axis:"xy",styles:{track:{backgroundColor:"var(--main-slider)",width:100,height:100,gridRow:"span 3",position:"relative"},thumb:{backgroundColor:"var(--sub-slider)",zIndex:10}},xmax:8,xmin:-8,ymax:8,ymin:-8,x:null!==h&&void 0!==h?h:0,y:null!==g&&void 0!==g?g:0,onChange:e=>{let{x:t,y:a}=e;return p(e=>({...e,x:t,y:a}))}}),Object(O.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.x-offset.label"],": ",Object(O.jsx)(bc.a,{size:"small",value:h,onChange:e=>p(t=>({...t,x:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))})]}),Object(O.jsxs)("div",{className:"single-slider",children:[s["input.name-style.slider.y-offset.label"],": ",Object(O.jsx)(bc.a,{size:"small",value:g,onChange:e=>p(t=>({...t,y:"number"===typeof e?e:parseInt(null!==e&&void 0!==e?e:"0")}))})]}),Object(O.jsxs)("div",{className:"single-slider",children:[y,":\xa0",Object(O.jsx)(Ds,{value:v,min:1,max:10,onChange:e=>{"number"===typeof e&&p(t=>({...t,width:e}))}})]})]}),Object(O.jsx)("h2",{children:s["input.name-style.slider.color.label"]}),Object(O.jsx)(ps.b,{colors:Pt,color:f,onChangeComplete:e=>p(t=>({...t,color:e.hex}))})]})}),wc=Object(r.forwardRef)((e,t)=>{let{active:a,value:n,onClick:i,onCancel:l}=e;const o=Object(r.useRef)(null),[s,c]=Object(r.useState)(0);return Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.focus()}})),Object(O.jsx)(yc,{ref:o,...Cr({stopPropagation:!0,optionLength:U.length,setFocus:c,onTrigger:()=>{s>=0&&i(U[s])},onCancel:()=>{null===l||void 0===l||l()}}),children:U.map((e,t)=>{const{key:r,image:l,label:o}=e;return Object(O.jsx)(xc,{className:zr("preset-item",n.preset===r&&a?"menu-active":"",s===t?"preset-item-focused":""),onClick:t=>{t.stopPropagation(),i(e)},children:Object(O.jsx)("img",{className:"preset-preview",src:`/ygocarder/${l}`,alt:o})},r)})})});var kc=a(638);const Sc=Wr.b.div`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${e=>{let{$color:t}=e;return`background-color: ${t};`}}
`,Fc=Wr.b.div`
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
`,Cc=.01;const Lc=P(),Nc=Object(r.forwardRef)((e,t)=>{let{defaultPitch:a=Lc.embossPitch,defaultYaw:n=Lc.embossYaw,defaultThickness:i=Lc.embossThickness,materialColor:l,children:o,language:s,onColorTabNavigate:c,onChange:d}=e;const[u,m]=Fr(),[b,p]=Object(r.useState)("#ffffff"),[h,g]=Object(r.useState)(i),[f,v]=Object(r.useState)(n),[y,x]=Object(r.useState)(a),j=Object(r.useRef)([255,255,255]),w=Object(r.useRef)([0,1,0]),k=Object(r.useRef)(i),[S]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{let e=!0;return m&&setTimeout(()=>{if(e){const e=wa(f,y),t=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]}(b);(t[0]!==j.current[0]||t[1]!==j.current[1]||t[2]!==j.current[2]||Math.abs(e[0]-w.current[0])>Cc||Math.abs(e[1]-w.current[1])>Cc||Math.abs(e[2]-w.current[2])>Cc||h!==k.current)&&d({lightColorVec:t,lightAngleVec:e,yaw:f,pitch:y,thickness:h}),j.current=t,w.current=e,k.current=h}},150),()=>{e=!1}},[m,b,f,y,h]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{let{color:t,pitch:a,yaw:r,thickness:n}=e;t&&p(t),a&&x(a),r&&v(r),"number"===typeof n&&v(n)}})),Object(O.jsxs)(Fc,{className:zr(fl,"emboss-control"),children:[Object(O.jsx)("div",{className:"emboss-control-title",children:o}),Object(O.jsxs)("div",{className:"emboss-control-left",children:[Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.color.label"],"\xa0\xa0",Object(O.jsx)(Sc,{className:"material-color",onClick:c,$color:l})]}),s["input.name-style.emboss.color.alert"](Object(O.jsx)("span",{className:c?"navigate-button":"",onClick:c,children:s["input.name-style.color.label"]},"color-navigate")),Object(O.jsxs)("h2",{className:"thickness-row",children:[Object(O.jsx)("span",{children:s["input.name-style.emboss.thickness.label"]}),Object(O.jsx)(Ds,{value:h,min:0,max:4,onChange:e=>{"number"===typeof e&&(g(e),u())}})]}),Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.pitch.label"],"\xa0\xa0",Object(O.jsx)(kc.a,{className:"reset-button",onClick:()=>{x(90),u()}})]}),Object(O.jsxs)(_l,{className:"vertical-angle-control",children:[Object(O.jsx)("div",{className:"slider-label"}),Object(O.jsx)(bc.a,{size:"small",min:-90,max:90,onChange:e=>{x("string"===typeof e?parseInt(e):null!==e&&void 0!==e?e:0),u()},value:y}),Object(O.jsx)(Ds,{min:-90,max:90,value:y,onChange:e=>{x(e),u()}}),Object(O.jsx)("div",{className:"slider-padding"})]}),Object(O.jsxs)("h2",{children:[s["input.name-style.emboss.yaw.label"],"\xa0\xa0",Object(O.jsx)(kc.a,{className:"reset-button",onClick:()=>{v(90),u()}})]}),Object(O.jsx)("div",{className:"horizontal-angle-contorl",children:Object(O.jsx)(yl,{angle:f,size:120,setAngle:e=>{v(e),u()}})})]}),S&&Object(O.jsxs)("div",{className:"emboss-control-right",children:[Object(O.jsx)("h2",{children:"Light color"}),Object(O.jsx)(ps.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:b,onChange:e=>{p(e.hex),u()},onChangeComplete:e=>{p(e.hex),u()}})]})]})}),Tc=Wr.b.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`,Rc=e=>{let{color:t,onChange:a}=e;const[n,i]=Object(r.useState)(t);return Object(r.useEffect)(()=>{i(t)},[t]),Object(O.jsxs)(Tc,{children:[Object(O.jsx)(ps.a,{styles:{default:{picker:{color:"#000000",background:"var(--main-level-3)",boxShadow:"none",padding:"var(--spacing-sm) var(--spacing)"},body:{padding:"var(--spacing) var(--spacing)"}}},disableAlpha:!0,color:n,onChange:e=>i(e.hex),onChangeComplete:e=>{i(e.hex),a(e.hex)}}),Object(O.jsx)(ps.b,{colors:Pt,color:t,onChangeComplete:e=>{a(e.hex)}})]})};a(579);const Ic=Object(r.forwardRef)((e,t)=>{let{frameInfo:a,defaultType:n,defaultValue:i,showExtraDecorativeOption:l,onChange:o}=e;const s=Qr(),c=Object(r.useRef)(null),[d,u]=En("nameStylePresetList"),[m,b]=Object(r.useState)(-1),[p,h]=Object(r.useState)(!1),[g,f]=Object(r.useState)(n),[v,y]=Object(r.useState)(i),[x,w]=Fr(),{db:k}=Rn(),S=Object(r.useRef)(Vr()(o,250)).current,F=il(e=>e.setVisible),C=Object(r.useCallback)((e,t)=>{y(a=>({...a,gradientAngle:t,gradientColor:kr(e)})),x()},[x]),L=Ln(e=>e.setting.reduceMotionColor),N=Object(r.useMemo)(()=>{return[{label:(e=s)["input.name-style.type.auto.label"],value:H},...Object.values(ye).map(t=>{let{value:a,labelKey:r}=t;return{label:e[r],value:a}})];var e},[s]);Object(r.useEffect)(()=>{0!==w&&(f("custom"),S("custom",v))},[w]);const T=Object(r.useRef)(null),R=Object(r.useRef)(null),I=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r;y(t=>({...t,...e}));const{lineColor:n,lineWidth:i,lineOffsetX:l,lineOffsetY:o,shadowBlur:s,shadowColor:c,shadowOffsetX:d,shadowOffsetY:u,embossPitch:m,embossYaw:b,embossThickness:p}=e;null===(t=T.current)||void 0===t||t.setValue({x:d,y:u,width:s,color:c}),null===(a=R.current)||void 0===a||a.setValue({x:l,y:o,width:i,color:n}),null===(r=I.current)||void 0===r||r.setValue({pitch:m,yaw:b,thickness:p})}}));const{fillStyle:B,headTextFillStyle:z,hasOutline:E,hasShadow:D,hasGradient:M,gradientColor:W,gradientAngle:A,hasEmboss:P,embossPitch:$,embossYaw:U,embossThickness:Y,pattern:X,font:q}=v,{labelBackgroundColor:J,labelBackgroundImage:_}=null!==a&&void 0!==a?a:{},Q={background:J,backgroundImage:_},Z="custom"===g,ee="predefined"===g,te="name-style-option-input-container",ae=()=>{f("auto"),"auto"!==g&&S("auto",v)},re=()=>{var e;const t=v.preset?null===(e=K[v.preset])||void 0===e?void 0:e.value:{};f("predefined"),y(e=>({...e,...t})),S("predefined",{...v,...t})},ne=()=>{f("custom"),"custom"!==g&&S("custom",v)},ie="color-picker";return Object(O.jsx)("div",{className:"ant-input-group-wrapper text-style-input",children:Object(O.jsxs)("span",{className:"ant-input-wrapper ant-input-group",children:[Object(O.jsx)("span",{className:"ant-input-group-addon",children:s["input.name-style.label"]}),Object(O.jsxs)("span",{className:"name-style-input-container",children:[Object(O.jsxs)("div",{id:te,className:"ant-radio-group ant-radio-group-outline name-style-option-input-container",...Cr({setFocus:b,optionLength:3,onKeyPress:e=>{if(1===m&&("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key))return e.preventDefault(),b(1),h(!0),setTimeout(()=>{var e;1===m&&(null===(e=c.current)||void 0===e||e.focus())},200),!1},onTrigger(){0===m&&ae(),1===m&&re(),2===m&&ne()}}),children:[Object(O.jsxs)("label",{className:zr("ant-radio-wrapper","auto"===g&&"ant-radio-wrapper-checked",0===m&&"ant-radio-focused"),onClick:()=>ae(),children:[Object(O.jsxs)("span",{className:"ant-radio "+("auto"===g?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"auto"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.auto.label"]})]}),Object(O.jsx)("span",{className:"name-style-option-break"}),Object(O.jsx)("label",{className:zr("ant-radio-wrapper",ee&&"ant-radio-wrapper-checked",1===m&&"ant-radio-focused"),onClick:()=>re(),children:Object(O.jsx)(wl.a,{visible:p,onVisibleChange:h,trigger:["hover","click"],placement:"bottomLeft",overlayClassName:"predefined-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(wc,{ref:c,active:ee,value:v,onCancel:()=>{var e;h(!1),null===(e=document.getElementById(te))||void 0===e||e.focus()},onClick:e=>{var t;let{key:a}=e;const r=a?null===(t=K[a])||void 0===t?void 0:t.value:{};f("predefined"),y(e=>({...e,...r})),S("predefined",{...v,...r})}})}),children:Object(O.jsxs)("span",{className:"name-style-option-label",children:[Object(O.jsxs)("span",{className:"ant-radio "+(ee?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"predefined"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label",children:s["input.name-style.type.predefined.label"]})]})})}),Object(O.jsx)("span",{className:"name-style-option-break"}),Object(O.jsx)("label",{className:zr("ant-radio-wrapper",Z&&"ant-radio-wrapper-checked",2===m&&"ant-radio-focused"),onClick:()=>ne(),children:Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"ant-radio "+(Z?"ant-radio-checked":""),children:[Object(O.jsx)("input",{tabIndex:-1,type:"radio",className:"ant-radio-input",value:"custom"}),Object(O.jsx)("span",{className:"ant-radio-inner"})]}),Object(O.jsx)("span",{className:"ant-radio-label ant-radio-label-custom",children:s["input.name-style.type.custom.label"]})]})})]}),Object(O.jsxs)("div",{className:"style-picker",children:[Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsxs)("div",{className:"custom-style-text",children:[Object(O.jsx)("h3",{children:s["input.name-style.color.text.label"]}),Object(O.jsx)(Rc,{color:B,onChange:e=>{f("custom"),y(t=>({...t,fillStyle:e})),x()}})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"custom-style-text",children:[Object(O.jsx)("h3",{children:s["input.name-style.color.ruby.label"]}),Object(O.jsx)(ps.b,{colors:Pt,color:z,onChangeComplete:e=>{f("custom"),y(t=>({...t,headTextFillStyle:e.hex})),x()}})]})]})}),placement:"bottom",children:Object(O.jsxs)(Ql,{id:ie,$softMode:L,$active:Z,className:"picker-dropdown color-picker-dropdown",children:[s["input.name-style.color.label"]," ",Object(O.jsx)(mc.a,{})]})},"color-picker"),l&&Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(Ll.a,{value:"has-shadow",checked:D,onChange:()=>{f("custom"),y(e=>({...e,hasShadow:!e.hasShadow})),x()},children:s["input.name-style.shadow.toggle.label"]})}),D&&Object(O.jsx)(Oc,{ref:T,className:"custom-style-shadow",fieldMap:{color:"shadowColor",width:"shadowBlur",x:"shadowOffsetX",y:"shadowOffsetY"},labelMap:{shadowBlur:s["input.name-style.slider.blur.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y(e=>({...e,shadowBlur:a,shadowColor:t,shadowOffsetX:r,shadowOffsetY:n})),x()}})]})}),placement:"bottom",children:Object(O.jsxs)(Ql,{$softMode:L,$active:Z&&D,className:"picker-dropdown shadow-picker-dropdown",children:[s["input.name-style.shadow.label"]," ",Object(O.jsx)(mc.a,{})]})},"shadow-picker"),Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(Ll.a,{value:"has-line",checked:E,onChange:()=>{f("custom"),y(e=>({...e,hasOutline:!e.hasOutline})),x()},children:s["input.name-style.outline.toggle.label"]})}),E&&Object(O.jsx)(Oc,{ref:R,className:"custom-style-line",fieldMap:{color:"lineColor",width:"lineWidth",x:"lineOffsetX",y:"lineOffsetY"},labelMap:{lineWidth:s["input.name-style.slider.thickness.label"]},defaultValue:v,onChange:e=>{let{color:t,width:a,x:r,y:n}=e;y(e=>({...e,lineWidth:a,lineColor:t,lineOffsetX:r,lineOffsetY:n})),x()}})]})}),placement:"bottom",children:Object(O.jsxs)(Ql,{$softMode:L,$active:Z&&E,className:"picker-dropdown outline-picker-dropdown",children:[s["input.name-style.outline.label"]," ",Object(O.jsx)(mc.a,{})]})},"outline-picker"),l&&Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(Ll.a,{value:"has-gradient",checked:M,onChange:()=>{f("custom"),y(e=>({...e,hasGradient:!e.hasGradient})),x()},children:s["input.name-style.gradient.toggle.label"]})}),M&&Object(O.jsx)("div",{className:"custom-style-gradient",children:Object(O.jsx)(gc,{angle:A,palette:W,memoizedOnChange:C})})]})}),placement:"bottom",children:Object(O.jsxs)(Ql,{$softMode:L,$active:Z&&M,className:"picker-dropdown gradient-picker-dropdown",children:[s["input.name-style.gradient.label"]," ",Object(O.jsx)(mc.a,{})]})},"gradient-picker"),l&&Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(fc,{onClick:e=>e.stopPropagation(),children:[Object(O.jsx)("div",{className:"alert",children:s["input.name-style.pattern.alert"]}),G.map(e=>{let{key:t,patternImage:a}=e;return Object(O.jsx)(So,{className:["pattern-option",v.pattern===t?"menu-active":"",a?"":"menu-off"].join(" "),onClick:()=>{y(e=>({...e,pattern:t})),x()},children:a?Object(O.jsx)("img",{style:a?Q:{},className:"pattern-image",src:`/ygocarder/asset/image/finish-name/${a}.png`,alt:t}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{})," ",s["input.name-style.pattern.no-pattern.label"]]})},t)})]})}),placement:"bottomLeft",children:Object(O.jsx)(Ql,{$softMode:L,$active:Z&&"string"===typeof X&&"none"!==X,className:"picker-dropdown pattern-picker-dropdown",children:s["input.name-style.pattern.label"]})},"pattern-picker"),Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay font-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Ps.Container,{children:N.map(e=>{let{value:t,label:a}=e;return Object(O.jsx)(Ps.Option,{className:q===t?"menu-active":"",onClick:()=>{y(e=>({...e,font:t})),x()},children:a},t)})})}),placement:"bottomLeft",children:Object(O.jsx)(Ql,{$softMode:L,$active:Z&&"Auto"!==q,className:"picker-dropdown font-picker-dropdown",children:s["input.name-style.font.label"]})},"font-picker"),l&&Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)("div",{className:"custom-style-picker",children:[Object(O.jsx)("h3",{className:"custom-style-expand",children:Object(O.jsx)(Ll.a,{value:"has-emboss",checked:P,onChange:()=>{f("custom"),y(e=>({...e,hasEmboss:!e.hasEmboss})),x()},children:s["input.name-style.emboss.toggle.label"]})}),P&&Object(O.jsx)(Nc,{ref:I,language:s,defaultPitch:$,defaultYaw:U,defaultThickness:Y,materialColor:B,onColorTabNavigate:()=>{var e;null===(e=document.getElementById(ie))||void 0===e||e.click()},onChange:e=>{let{thickness:t,yaw:a,pitch:r}=e;y(e=>({...e,embossPitch:r,embossYaw:a,embossThickness:t})),x()},children:Object(O.jsx)("div",{className:"alert",children:s["input.name-style.emboss.alert"]})})]})}),placement:"bottomLeft",children:Object(O.jsx)(Ql,{$softMode:L,$active:Z&&P,className:"picker-dropdown emboss-picker-dropdown",children:s["input.name-style.emboss.label"]})},"emboss-picker"),Object(O.jsxs)("div",{className:"save-preset-button-group",children:[Object(O.jsx)(dl.a,{size:"small",className:"picker-dropdown preset-picker-dropdown",type:"primary",onClick:async()=>{const e=Object(V.a)();if(k){const t=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:e,content:JSON.stringify(v)}),await t.done}u(t=>[...t,{key:e,content:{...v}}])},children:s["input.name-style.preset.label"]}),Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay global-style-picker-overlay low-index",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(vc,{onClick:e=>e.stopPropagation(),children:[d.length>0&&Object(O.jsxs)("div",{className:"preset-warning",children:[s["preset.warning.label"],"\xa0",Object(O.jsx)("span",{className:"open-preset-manager",onClick:()=>F(!0),children:s["preset.manager.check.label"]})]}),0===d.length&&Object(O.jsx)(es.a,{description:s["generic.empty.label"]}),d.map(e=>{let{key:t,content:r}=e;return Object(O.jsx)(Lo,{language:s,frameInfo:a,presetContent:r,onActive:()=>{y({...r}),x()},onOverwrite:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.put("presetNameStyleStore",{key:t,content:JSON.stringify(v)}),await e.done}u(e=>e.map(e=>e.key===t?{key:t,content:{...v}}:e))},onDelete:async()=>{if(k){const e=k.transaction("presetNameStyleStore","readwrite");await k.delete("presetNameStyleStore",t),await e.done}u(e=>e.filter(e=>e.key!==t))},children:r.preset},t)})]})}),placement:"bottomRight",children:Object(O.jsx)("div",{className:"custom-preset-button",children:Object(O.jsx)(mc.a,{})})},"preset-picker")]})]})]})]})})}),Bc=Wr.a`
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
`,zc=Object(Wr.b)(El)`
	${Bc}
`,Ec=Object(r.forwardRef)((e,t)=>{let{onSTFrameChange:a,onPasswordChange:n,onStatChange:i}=e;const{setting:l}=Ln(),{showExtraDecorativeOption:o}=l,s=Object(r.useMemo)(()=>ic().filter(e=>o||"normal"===e.edition),[o]),{frame:c,setCard:d}=Cn(Object(Bn.useShallow)(e=>{let{card:t,setCard:a}=e;return{frame:t.frame,setCard:a}})),u=Object(r.useCallback)(e=>{d(t=>{const{typeAbility:r,attribute:l,format:o,password:s,star:c,atk:d,def:u,linkRating:m}=t,b=`${e}`,p="spell"===b||"trap"===b,h=p||"speed-skill"===b,g="tcg"===o?{"Spell Card":"Spell Card","Trap Card":"Trap Card"}:Ie,f="spell"===b?[g["Spell Card"]]:"trap"===b?[g["Trap Card"]]:r,v="token"===b?Te[o]:s,y=h?"":""===d?"0":d,x=h?"":""===u?"0":u,j=h?"":m,O="token"===b?0:c;return n(v),p&&a(f),i(y,x,j),{...t,frame:b,isLink:"link"===b,attribute:"token"===b?w:p?`${b}`.toUpperCase():l,star:O,typeAbility:f,password:v,atk:y,def:x,linkRating:j}})},[d,n,a,i]);return Object(r.useImperativeHandle)(t,()=>({changeFrame:u})),Object(O.jsx)(zc,{className:"frame-radio",value:c,onChange:u,optionList:s})}),Dc=Wr.b.div`
    ${Il}
`,Mc=e=>{let{onChange:t,value:a,optionList:n,children:i,className:l}=e;const[o,s]=Object(r.useState)(-1),c=n.length;return Object(O.jsxs)(Dc,{className:["ant-radio-group ant-radio-group-outline checkbox-train",l].join(" "),children:[i&&Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:i}),Object(O.jsx)("div",{className:"checkbox-train-input-group",...Cr({setFocus:s,optionLength:c,onTrigger:()=>{const e=n[o];if(e){const r=!!Array.isArray(a)&&a.includes(`${e.value}`);t(r?a.filter(t=>`${e.value}`!==t):[...a,`${e.value}`])}}}),children:n.map((e,r)=>{const{label:n,value:i,props:l,tooltip:s}=e,c=!!Array.isArray(a)&&a.includes(`${i}`),d=Object(O.jsxs)("label",{...l,className:["ant-radio-button-wrapper",c?"ant-radio-button-wrapper-checked":"",o===r?"checkbox-train-focused":""].join(" "),onClick:()=>{t(c?a.filter(e=>`${i}`!==e):[...a,`${i}`])},children:[Object(O.jsx)("span",{className:"ant-radio-button "+(c?"ant-radio-button-checked":""),children:Object(O.jsx)("span",{className:"ant-radio-button-inner"})}),Object(O.jsx)("span",{className:"label",children:n})]},i);return s?Object(O.jsx)(Mr.a,{title:s,children:d},i):d})})]})},Wc=Object(Wr.b)(ds)`
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
`,Ac=Object(r.forwardRef)((e,t)=>{let{backgroundColor:a,children:n,receivingCanvas:i,onSourceLoaded:l,onTainted:o,onCropChange:s}=e;const c=Qr(),{background:d,backgroundCrop:u,backgroundType:b,backgroundData:p,backgroundSource:h,backgroundFit:g,isPendulum:f,pendulumSize:v,opacity:y,getUpdater:x,setCard:j}=Cn(Object(Bn.useShallow)(e=>{let{card:{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:l,isPendulum:o,pendulumSize:s,opacity:c},getUpdater:d,setCard:u}=e;return{background:t,backgroundCrop:a,backgroundType:r,backgroundData:n,backgroundSource:i,backgroundFit:l,isPendulum:o,pendulumSize:s,opacity:c,getUpdater:d,setCard:u}})),w=Object(r.useRef)(null),k=Object(r.useMemo)(()=>x("backgroundSource"),[x]),S=Object(r.useMemo)(()=>x("background"),[x]),F=Object(r.useMemo)(()=>x("backgroundData"),[x]),C=Object(r.useCallback)(e=>j(t=>({...t,backgroundFit:e})),[j]),L=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&j(t=>({...t,backgroundCrop:e}),a)},[s,j]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},hasImage:()=>{var e,t;return null!==(e=null===(t=w.current)||void 0===t?void 0:t.hasImage())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}=e;var i,l;"offline"===n?"string"===typeof r&&a&&(null===(i=w.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=w.current)||void 0===l||l.forceSource("online",t,a))}})),Object(O.jsx)(Wc,{ref:w,title:c["input.background-image.label"],backgroundColor:a,defaultSourceType:h,defaultInternalSource:p,defaultExternalSource:d,defaultCropInfo:u,receivingCanvas:i,forceFit:g,onSourceChange:(e,t)=>{k(e),"offline"===e?F(t):S(t)},onCropChange:L,onTainted:o,onSourceLoaded:l,onForceFitChange:C,onMaxSizeExceeded:e=>{Dr.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(f,y,b,v).backgroundRatio,beforeCropper:null,children:n})});var Hc=a(640);a(580);const Pc=Wr.b.span`
    white-space: pre-line;
`,$c=Wr.b.div`
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
`,Kc=Wr.b.div`
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
`,Uc=Object(r.forwardRef)((e,t)=>{var a;let{receivingCanvas:n,defaultValue:i,onTainted:l,onChange:s,onSourceLoaded:u,onCropChange:m}=e;const b=Qr(),{background:p,backgroundData:h,backgroundSource:g,backgroundType:f,getUpdater:v,hasBackground:y,isPendulum:x,setCard:j}=Cn(Object(Bn.useShallow)(e=>{let{card:{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,hasBackground:i,isPendulum:l},setCard:o,getUpdater:s}=e;return{background:t,backgroundData:a,backgroundSource:r,backgroundType:n,getUpdater:s,hasBackground:i,isPendulum:l,setCard:o}})),[w,k]=Object(r.useState)(!0),[S,F]=Object(r.useState)(!0),[C,L]=Object(r.useState)(()=>({...d(),...i})),N=Object(r.useRef)(null),T=Object(r.useMemo)(()=>v("backgroundType"),[v]),R=Object(r.useCallback)(e=>j(t=>({...t,hasBackground:e.target.checked})),[j]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&s(C)},500),()=>{e=!1}},[C]),Object(r.useEffect)(()=>{k(!1),setTimeout(()=>{F(!1)},250)},[]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=N.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n,...i}=e;var l;"string"!==typeof t&&"string"!==typeof r||!a||(null===(l=N.current)||void 0===l||l.setValue({background:t,backgroundCrop:a,backgroundData:r,backgroundSource:n}));for(const o in i)i[o]!==C[o]&&L(e=>({...e,...i}))}}));const I=0===(null!==p&&void 0!==p?p:"").length&&!0!==(null===(a=N.current)||void 0===a?void 0:a.hasImage());return Object(O.jsxs)($c,{className:"card-opacity-slider-container",children:[Object(O.jsx)(Mr.a,{overlayClassName:"long-tooltip-overlay",title:Object(O.jsx)(Pc,{children:b["input.opacity.boundless.tooltip"]}),children:Object(O.jsx)(Jl,{className:"background-label",children:Object(O.jsxs)(Ll.a,{className:"art-frame",onChange:e=>L(t=>({...t,boundless:e.target.checked})),checked:C.boundless,children:["\xa0",b["input.opacity.boundless.label"]]})})}),Object(O.jsx)(wl.a,{visible:w,destroyTooltipOnHide:!1,trigger:["click"],onVisibleChange:k,overlayClassName:["global-input-overlay global-style-picker-overlay layout-picker-overlay",w?"picker-visible":"",S?"picker-hidden":""].join(" "),content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(Kc,{className:["custom-style-picker",I?"overlay-no-background-image":""].join(" "),children:[Object(O.jsxs)("h3",{className:"custom-style-expand "+(y?"":"inactive"),children:[Object(O.jsx)(Ll.a,{checked:y,onChange:e=>{R(e)},children:b["input.background.toggle-label"]}),Object(O.jsx)("br",{}),Object(O.jsx)("i",{children:b["input.background.description"]})]}),Object(O.jsx)("div",{className:"background-picker "+(y?"":"overlay-no-background"),children:Object(O.jsx)(Ac,{ref:N,receivingCanvas:n,onSourceLoaded:u,onTainted:l,onCropChange:m,backgroundColor:C.baseFill,children:Object(O.jsxs)("div",{className:"layout-picker-panel",children:[Object(O.jsxs)("div",{className:"layout-picker-subpanel color-section",children:[Object(O.jsx)("h2",{children:b["input.background-color.label"]}),Object(O.jsx)(ps.b,{colors:Pt,color:C.baseFill,onChangeComplete:e=>{L(t=>({...t,baseFill:e.hex}))}})]}),!I&&Object(O.jsxs)("div",{className:"layout-picker-subpanel type-section",children:[Object(O.jsx)("h2",{children:b["input.background-type.label"]}),Object(O.jsx)(El,{className:"background-type-picker",onChange:T,optionList:o({fit:b["input.background-type.fit.label"],full:b["input.background-type.full.label"],frame:b["input.background-type.frame.label"]}),value:f})]})]})})})]})}),placement:"bottom",children:Object(O.jsxs)(Jl,{className:"background-label",children:[Object(O.jsx)("div",{className:"background-preview",style:{backgroundColor:y?C.baseFill:c},children:y?p||h?Object(O.jsx)("img",{className:"background-image-preview",src:"online"===g?p:h,alt:"Background"}):null:Object(O.jsx)(Hc.a,{className:"no-background-icon"})}),b["input.background.label"]]})}),Ht.map(e=>{var t,a,r;let{labelKey:n,type:i,subType:l,tooltipKey:o}=e;if("pendulum"===i&&!x)return null;const s=!!l,c=l&&C[l];return Object(O.jsxs)(_l,{className:["card-opacity-slider",c?"":"inactive"].join(" "),children:[Object(O.jsxs)(Jl,{className:"slider-label",children:[s&&Object(O.jsx)(Mr.a,{title:o&&null!==(t=b[o])&&void 0!==t?t:null,overlayClassName:"long-tooltip-overlay",children:Object(O.jsx)(Ll.a,{checked:c,onChange:e=>l&&L(t=>({...t,[l]:e.target.checked}))})}),b[n]]}),Object(O.jsx)(bc.a,{size:"small",min:0,max:100,onChange:e=>L(t=>({...t,[i]:"number"===typeof e?e:100})),value:null!==(a=C[i])&&void 0!==a?a:100}),Object(O.jsx)(Ds,{min:0,max:100,step:5,onChange:e=>L(t=>({...t,[i]:e})),value:null!==(r=C[i])&&void 0!==r?r:100}),Object(O.jsx)("div",{className:"slider-padding"})]},i)})]})});var Yc=a(641),Gc=a(642);const Vc=Wr.b.div`
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
`,Xc=e=>{let{language:t}=e;const{format:a,region:n,attribute:i,getUpdater:l}=Cn(Object(Bn.useShallow)(e=>{let{card:{format:t,region:a,isLink:r,attribute:n},getUpdater:i}=e;return{format:t,region:a,isLink:r,attribute:n,getUpdater:i}})),{setting:o,updateSetting:s}=Ln(),{showCreativeOption:c,showExtraDecorativeOption:d,showExtraAttribute:u}=o,m=Object(r.useMemo)(()=>l("attribute"),[l]),b=Object(r.useMemo)(()=>l("region"),[l]),p=Object(r.useMemo)(()=>((e,t,a)=>k.map(a=>{var r;let{name:n,nameKey:i,isCreative:l}=a;return{label:n===w?Object(O.jsx)(j.a,{}):Object(O.jsx)(Mr.a,{overlay:t[i],children:Object(O.jsx)("img",{alt:t[i],src:`/ygocarder/asset/image/attribute/attr-${null===(r=F[e])||void 0===r?void 0:r.fileKey}-${n.toLowerCase()}.png`})}),value:n,isCreative:l}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(n,t,c),[n,t,c]),h=Object(r.useMemo)(()=>((e,t,a)=>S.map(a=>{let{name:r,nameKey:n,isCreative:i}=a;return{label:Object(O.jsx)(Mr.a,{overlay:t[n],children:Object(O.jsx)("img",{alt:t[n],src:`/ygocarder/asset/image/attribute/attr-${e}-${r.toLowerCase()}.png`})}),value:r,isCreative:i}}).filter(e=>{let{isCreative:t}=e;return!1===t||t===a}))(a,t,c),[a,t,c]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(El,{className:"fill-input-train span-input-train attribute-input",value:i,onChange:m,optionList:p,suffix:!u&&d?Object(O.jsx)(Tl,{onClick:()=>s({showExtraAttribute:!0}),Icon:Yc.a,tooltipProps:{overlay:t["button.more.label"]}}):null,children:Object(O.jsx)("span",{children:t["input.attribute.label"]})}),d&&Object(O.jsx)(Vc,{className:zr("attribute-region-container",u?"container-block":"container-float"),children:Object(O.jsx)(El,{className:"attribute-region-picker",optionList:Object.values(F).map(e=>{let{key:t}=e;return{value:t,label:t.toUpperCase()}}),value:n,onChange:b})}),d&&u&&Object(O.jsx)(El,{className:"fill-input-train extra-attribute-input",value:i,onChange:m,optionList:h,suffix:d&&u?Object(O.jsx)(Tl,{onClick:()=>s({showExtraAttribute:!1}),Icon:Gc.a,tooltipProps:{overlay:t["button.less.label"]}}):null,children:"\xa0"})]})};var qc=a(643),Jc=a(644),_c=a(645);const Qc=Wr.b.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
`,Zc=Object(Wr.b)(Ps.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
`,ed=Wr.b.div`
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
`,td=e=>{let{disabled:t=!1,className:a,language:r,activeCardIcon:n,showMixableOnly:i=!1,showRemove:l=!1,onChange:o,onRemove:s}=e;const c=i?e=>e.isMixable:()=>!0;return Object(O.jsxs)(ed,{className:zr("icon-dropdown-container overlay-event-absorber",t?"selector-disabled":"",a),children:[t&&Object(O.jsx)(Qc,{className:"container-disable-overlay"}),Object(O.jsxs)(Zc,{className:"container-group container-star",children:[l&&Object(O.jsxs)(Ps.Option,{onClick:()=>null===s||void 0===s?void 0:s(),children:[Object(O.jsx)(j.a,{}),"\xa0",r["input.icon-type.remove.label"]]}),B.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(Ps.Option,{className:a===n?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})]}),Object(O.jsx)(Zc,{className:"container-group container-attribute",children:E.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(Ps.Option,{className:a===n?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})}),Object(O.jsx)(Zc,{className:"container-group container-icon",children:M.filter(c).map(e=>{let{fullLabelKey:t,value:a,icon:i}=e;return Object(O.jsxs)(Ps.Option,{className:a===n?"menu-active":"",onClick:()=>o(a),children:[i?Object(O.jsxs)(O.Fragment,{children:[i,"\xa0"]}):null,r[t]]},a)})})]})},ad=Wr.b.div`
    margin-bottom: var(--spacing);
`,rd=Wr.b.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`,nd=Wr.b.div`
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
`,id=Object(r.forwardRef)((e,t)=>{let{language:a}=e;const{starList:n,setCard:i}=Cn(Object(Bn.useShallow)(e=>{let{card:{starList:t},setCard:a}=e;return{starList:t,setCard:a}})),[l,o]=Object(r.useState)(!1),s=Object(r.useMemo)(()=>e=>{i(t=>{const a=Array.isArray(e)?e:e(t.starList);return{...t,starList:a}})},[i]),[{slotList:c,use12:d},u]=Object(r.useState)(()=>{const e=[],t=n.length<=12;for(let a=0;a<A;a++)e.push({slot:`slot-${a}`,index:a,disabled:!1});return t&&(e[12].disabled=!0),{slotList:e,use12:t}}),[m,b]=Object(r.useState)({activeList:[]});Object(r.useImperativeHandle)(t,()=>({changeStatus:e=>{"open"===e?o(!0):"close"===e?o(!1):"toggle"===e&&o(e=>!e),b({activeList:[]})}}));const{activeList:p}=m;return Object(O.jsxs)(Er.a,{className:"global-overlay global-no-close",visible:l,width:506,onCancel:()=>o(!1),cancelText:a["manager.template.button.cancel.label"],okButtonProps:{style:{display:"none"}},children:[Object(O.jsxs)(ad,{className:"star-list-control-panel",children:[Object(O.jsx)(Ll.a,{checked:d,onChange:e=>{e.target.checked?(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!0,index:12,slot:"slot-12"}],use12:!0}}),s(e=>e.slice(0,12)),b(e=>{let{activeList:t}=e;return{activeList:t.filter(e=>12!==e)}})):(u(e=>{let{slotList:t}=e;return{slotList:[...t.slice(0,12),{disabled:!1,index:12,slot:"slot-12"}],use12:!1}}),s(e=>function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r=[...e];for(let n=e.length;n<t;n++)r.push(a);return r}(e,A)))},children:a["input.icon-type.slot.use-12.label"]}),Object(O.jsx)(dl.a,{size:"small",onClick:()=>{b(e=>({activeList:c.filter(t=>!e.activeList.includes(t.index)&&!t.disabled).map(e=>e.index)}))},children:a["input.icon-type.slot.revert.label"]}),"\xa0",Object(O.jsx)(dl.a,{size:"small",onClick:()=>{b({activeList:c.filter(e=>!e.disabled).map(e=>e.index)})},children:a["input.icon-type.slot.select-all.label"]}),"\xa0",Object(O.jsx)(dl.a,{size:"small",onClick:()=>{b({activeList:[]})},children:a["input.icon-type.slot.deselect-all.label"]})]}),Object(O.jsx)(nd,{className:"star-list-container",children:c.map(e=>{let{slot:t,index:a,disabled:r}=e;const i=n[a],l=W[null!==i&&void 0!==i?i:""],o=p.includes(a);return Object(O.jsxs)("div",{className:zr("star-list-entry",o?"entry-active":"",r?"entry-disable":""),children:[Object(O.jsx)("div",{className:"checkbox-container",children:Object(O.jsx)(Ll.a,{disabled:r,checked:o,onChange:e=>{if(r)return;const t=e.target.checked;b(t?e=>({activeList:[...e.activeList,a]}):e=>({activeList:e.activeList.filter(e=>e!==a)}))}})}),Object(O.jsx)("div",{className:"star-value",onClick:()=>{r||b({activeList:[a]})},children:l?l.icon:Object(O.jsx)(j.a,{})})]},t)})}),Object(O.jsxs)(rd,{children:[Object(O.jsxs)(dl.a,{size:"small",onClick:()=>{s(e=>[...e.slice(1,e.length),""]),b({activeList:[]})},children:[Object(O.jsx)(Gc.a,{}),"\xa0",a["input.icon-type.slot.shift-left.label"]]}),Object(O.jsxs)(dl.a,{size:"small",onClick:()=>{s(e=>["",...e.slice(0,e.length-1)]),b({activeList:[]})},children:[a["input.icon-type.slot.shift-right.label"],"\xa0",Object(O.jsx)(Yc.a,{})]})]}),Object(O.jsx)(td,{disabled:0===p.length,language:a,activeCardIcon:p.length>1?"":n[p[0]],showMixableOnly:!0,showRemove:!0,onRemove:()=>{s(e=>c.filter(e=>!e.disabled).map((t,a)=>p.includes(a)?"":e[a]))},onChange:e=>{s(t=>c.filter(e=>!e.disabled).map((a,r)=>p.includes(r)?e:t[r]))}})]})}),ld=Wr.b.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`,od=Object(Wr.b)(El)`
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
`,sd=Object(Wr.b)(Ql)`
    margin-left: var(--spacing-sm);
`,cd=Wr.b.div`
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
`,dd=e=>{let{language:t,value:a,onChange:r}=e;return Object(O.jsx)(El,{value:a,onChange:r,optionList:[{value:"auto",tooltipProps:{overlay:t["input.icon-type.alignment.auto"]},label:Object(O.jsx)(j.a,{})},{value:"left",tooltipProps:{overlay:t["input.icon-type.alignment.left"]},label:Object(O.jsx)(qc.a,{})},{value:"center",tooltipProps:{overlay:t["input.icon-type.alignment.center"]},label:Object(O.jsx)(Jc.a,{})},{value:"right",tooltipProps:{overlay:t["input.icon-type.alignment.right"]},label:Object(O.jsx)(_c.a,{})}]})},ud=Object(r.forwardRef)((e,t)=>{let{showCreativeOption:a}=e;const n=Qr(),{frame:i,subFamily:l,cardIcon:o,star:s,starList:c,starAlignment:d,getUpdater:u}=Cn(Object(Bn.useShallow)(e=>{let{card:{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:l},getUpdater:o}=e;return{frame:t,subFamily:a,cardIcon:r,star:n,starList:i,starAlignment:l,getUpdater:o}})),m=Ln(e=>e.setting.reduceMotionColor),b=Object(r.useRef)(null),p=Object(r.useMemo)(()=>u("cardIcon"),[u]),h=Object(r.useMemo)(()=>u("subFamily"),[u]),g=Object(r.useMemo)(()=>u("star"),[u]),f=Object(r.useMemo)(()=>u("starAlignment"),[u]);Object(r.useImperativeHandle)(t,()=>({}));const v=La(i),y="auto"===o?W["none"===v?"auto":v]:W[o],{labelKey:x,icon:w,showIcon:k,value:S}=null!==y&&void 0!==y?y:W.level,F="string"===typeof x?n[x]:x({language:n}),C=a?Object(O.jsxs)(ld,{children:[k?w:null," ",F," ",Object(O.jsx)(mc.a,{})]}):F,T=Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)(td,{language:n,activeCardIcon:o,onChange:e=>{var t;p(e),"custom"===e&&(null===(t=b.current)||void 0===t||t.changeStatus("open"))}}),placement:"bottomRight",children:Object(O.jsx)("span",{className:`card-icon-dropdown ${"auto"===o?"":"active"} ${a?"":"disabled"}`,children:C})},"icon-type-picker"),R=a?T:C;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(id,{ref:b,language:n}),"auto"===o&&"none"===v?a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(El,{className:"fill-input-train",value:o,onChange:p,optionList:B.map(e=>{let{icon:t,value:a,fullLabelKey:r}=e;return{label:null!==t&&void 0!==t?t:Object(O.jsx)(j.a,{}),value:a,tooltipProps:{title:n[r]}}}),children:R}),Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Zc,{className:"container-group container-attribute",children:E.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(O.jsxs)(Ps.Option,{className:a===o?"menu-active":"",onClick:()=>p(a),children:[r?Object(O.jsxs)(O.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(O.jsx)(sd,{$softMode:m,className:a?"":"disabled",children:n["input.attribute.label"]})}),Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Zc,{className:"container-group container-icon",children:M.map(e=>{let{fullLabelKey:t,value:a,icon:r}=e;return Object(O.jsxs)(Ps.Option,{className:a===o?"menu-active":"",onClick:()=>p(a),children:[r?Object(O.jsxs)(O.Fragment,{children:[r,"\xa0"]}):null,n[t]]},a)})})}),children:Object(O.jsxs)(sd,{$softMode:m,className:a?"":"disabled",children:[n["input.attribute.spell"],"\xa0/\xa0",n["input.attribute.trap"]]})}),Object(O.jsx)(sd,{$softMode:m,className:a?"":"disabled",onClick:()=>{var e;p("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:n["input.icon-type.custom.label"]})]}):null:"st"===S?Object(O.jsx)(El,{className:"fill-input-train",value:l,onChange:h,optionList:(I=n,N.map(e=>{let{value:t,nameKey:a}=e;return{label:t===L?Object(O.jsx)(j.a,{}):Object(O.jsx)(Mr.a,{overlay:I[a],children:Object(O.jsx)("img",{alt:I[a],src:`/ygocarder/asset/image/subfamily/subfamily-${t.toLowerCase()}.png`})}),value:t}})),children:R}):"custom"===S?Object(O.jsxs)(cd,{className:"custom-star-picker",children:[Object(O.jsx)("label",{className:"standalone-addon ant-input-group-addon",children:R}),Object(O.jsxs)("div",{className:"custom-star-content",children:[c.length>0?Object(O.jsx)("div",{className:"custom-star-preview",children:c.map((e,t)=>{const a=W[e];return Object(O.jsx)("span",{className:"star-preview-entry",children:a?a.icon:Object(O.jsx)(j.a,{})},`${e}-${t}`)})}):null,Object(O.jsx)(dl.a,{size:"small",onClick:()=>{var e;p("custom"),null===(e=b.current)||void 0===e||e.changeStatus("open")},children:n["generic.edit.label"]})]})]}):Object(O.jsx)(od,{className:"checkbox-star-train",value:s,onChange:g,optionList:lc,strict:!0,suffix:a&&Object(O.jsxs)("div",{className:"checkbox-star-suffix",children:[Object(O.jsx)(Zo.a,{className:"custom-star-input",value:"number"===typeof s?"":s,allowClear:!0,onChange:g,placeholder:n["input.icon-type.custom.placeholder"]}),Object(O.jsx)(dd,{language:n,value:d,onChange:f})]}),children:R})]});var I}),md=new Set(["1","2","3","4","5"]),bd=(e,t,a,r,n,i,l)=>{const o=e.substring(a,r),s="\n"===e[r]||!n;let c=o,d=2;switch(t){case"1":i?(c=`[[${o}]]${s?"":"\n"}`,d=s?4:5):(c=`[${o}]${s?"":"\n"}`,d=s?2:3);break;case"2":c=`{${o}}`;break;case"3":c=`{${o}|}`;break;case"4":c=`{${o}||}`,d=3;break;case"5":c=`{{${o}}}`,d=4}l(e.substring(0,a)+`${c}`+e.substring(r,e.length),r+d)},pd=e=>{let{id:t,placement:a}=e;if(t&&a>=0){var r;const e=document.querySelector(`#${t}`);e&&(null!==(r=e.selectionEnd)&&void 0!==r?r:-1)>=0&&(e.selectionEnd=a)}},{TextArea:hd}=Zo.a,gd=Object(r.forwardRef)((e,t)=>{let{id:a,allowHotkey:n,defaultValue:i,onTakePicker:l,onChange:o,onKeyDown:s,className:c,...d}=e;const u=Object(r.useRef)(i),[m,b]=Object(r.useState)(i),[p,h]=Object(r.useState)({id:"",placement:-1}),g=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;u.current=t,b(t)},[]);Object(r.useEffect)(()=>{pd(p)},[p]),Object(r.useEffect)(()=>{o({target:{value:m}})},[m]);const f=e=>{e!==u.current&&g(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:f,getPickerRef:()=>a?{id:a,setValue:f}:null})),Object(O.jsx)(hd,{id:a,autoComplete:"off",onFocus:()=>a&&(null===l||void 0===l?void 0:l({id:a,setValue:f})),allowClear:!0,spellCheck:!1,className:`card-textarea ${a}-input ${c}`,value:m,onKeyDown:e=>{var t,r;if(null===s||void 0===s||s(e),!n)return;const{ctrlKey:i,key:l,metaKey:o}=e,c=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,d=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(i||o)&&a&&d!==c&&md.has(l)&&(e.preventDefault(),bd(e.currentTarget.value,l,c,d,!0,e.shiftKey,(e,t)=>{g(e),h({id:a,placement:t})}))},onChange:g,...d})}),fd=Object(r.forwardRef)((e,t)=>{let{id:a,defaultValue:n,onTakePicker:i,onChange:l,onKeyDown:o,className:s,...c}=e;const{setting:d}=Ln(),{allowHotkey:u}=d,m=Object(r.useRef)(n),[b,p]=Object(r.useState)(n),[h,g]=Object(r.useState)({id:"",placement:-1}),f=Object(r.useCallback)(e=>{const t="string"===typeof e?e:e.target.value;m.current=t,p(t)},[]);Object(r.useEffect)(()=>{pd(h)},[h]),Object(r.useEffect)(()=>{l({target:{value:b}})},[b]);const v=e=>{e!==b&&f(e)};return Object(r.useImperativeHandle)(t,()=>({setValue:v})),Object(O.jsx)(Zo.a,{id:a,autoComplete:"off",onFocus:()=>a&&(null===i||void 0===i?void 0:i({id:a,setValue:v})),allowClear:!0,className:`${a}-input ${s}`,value:b,onKeyDown:e=>{var t,r;if(null===o||void 0===o||o(e),!u)return;const{ctrlKey:n,key:i,metaKey:l}=e,s=null!==(t=e.currentTarget.selectionStart)&&void 0!==t?t:-1,c=null!==(r=e.currentTarget.selectionEnd)&&void 0!==r?r:-1;(n||l)&&a&&c!==s&&md.has(i)&&(e.preventDefault(),bd(e.currentTarget.value,i,s,c,!1,e.shiftKey,(e,t)=>{f(e),g({id:a,placement:t})}))},onChange:e=>f(e.target.value),...c})}),vd=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=Cn(e=>e.getUpdater),i=Object(r.useRef)(null),l=Object(r.useMemo)(()=>n("effect",void 0,"debounce"),[n]);return Object(r.useEffect)(()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.getPickerRef();t&&(null===a||void 0===a||a(t))},[]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;null===(t=i.current)||void 0===t||t.setValue(e)}})),Object(O.jsx)(gd,{ref:i,id:"effect",allowHotkey:!0,defaultValue:Cn.getState().card.effect,onChange:l,onTakePicker:a,autoSize:{minRows:9}})}),yd=Wr.b.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`,xd=e=>{const t=Qr(),{isDuelTerminalCard:a,isFirstEdition:n,isSpeedCard:i,isLimitedEdition:l,isLegacyCard:o,setCard:s}=Cn(Object(Bn.useShallow)(e=>{let{card:t,setCard:a}=e;return{isSpeedCard:t.isSpeedCard,isDuelTerminalCard:t.isDuelTerminalCard,isFirstEdition:t.isFirstEdition,isLimitedEdition:t.isLimitedEdition,isLegacyCard:t.isLegacyCard,setCard:a}})),c=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!0,isLimitedEdition:!1,isSpeedCard:!1}:{isFirstEdition:!0,isLimitedEdition:!1}:{isFirstEdition:!1},{...t,...a}}),[s,o]),d=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!0,isSpeedCard:!1}:{isFirstEdition:!1,isLimitedEdition:!0}:{isLimitedEdition:!1},{...t,...a}}),[s,o]),u=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!0,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!1}:{isSpeedCard:!1,isDuelTerminalCard:!0}:{isDuelTerminalCard:!1},{...t,...a}}),[s,o]),m=Object(r.useCallback)(e=>s(t=>{let a;return a=e.target.checked?o?{isDuelTerminalCard:!1,isFirstEdition:!1,isLimitedEdition:!1,isSpeedCard:!0}:{isDuelTerminalCard:!1,isSpeedCard:!0}:{isSpeedCard:!1},{...t,...a}}),[s,o]),b=Object(r.useCallback)(e=>s(t=>{const a=e.target.checked,{isDuelTerminalCard:r,isFirstEdition:n,isLimitedEdition:i,isSpeedCard:l}=t;let o=!1,s=!1,c=!1,d=!1;return a?(s=n,d=!s&&l,o=!d&&!s&&r,c=!(o||s||c)&&i):(s=n,c=!s&&i,d=l,o=!d&&r),{...t,isLegacyCard:a,isDuelTerminalCard:o,isFirstEdition:s,isLimitedEdition:c,isSpeedCard:d}}),[s]);return Object(O.jsxs)(yd,{className:"checkbox-input",children:[Object(O.jsx)(Mr.a,{overlayClassName:"long-tooltip-overlay",overlay:t["input.legacy.tooltip"],children:Object(O.jsx)(Ll.a,{className:"input-legacy",onChange:b,checked:o,tabIndex:0,children:t["input.legacy.label"]})}),Object(O.jsx)(Ll.a,{className:"input-1st",onChange:c,checked:n,tabIndex:0,children:t["input.1st-edition.label"]}),Object(O.jsx)(Ll.a,{className:"input-limited",onChange:d,checked:l,tabIndex:0,children:t["input.limited-edition.label"]}),Object(O.jsx)(Ll.a,{className:"input-speed",onChange:m,checked:i,tabIndex:0,children:t["input.speed-duel.label"]}),Object(O.jsx)(Ll.a,{className:"input-terminal",onChange:u,checked:a,tabIndex:0,children:t["input.duel-terminal.label"]})]})};var jd=a(646);const Od=Object(Wr.b)(Ps.Container)`
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
    ${Bc}
`,wd=Wr.b.div`
	display: flex;
	align-items: center;
	.input-label {
		flex: 1;
	}
`,kd=Wr.b.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing-sm);
    flex-wrap: wrap;
    row-gap: var(--spacing-sm);
`,Sd=Object(Wr.b)(El)`
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
`,Fd=Wr.b.div`
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
`,Cd=Object(Wr.b)(wd)`
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
`,Ld=Object(r.forwardRef)((e,t)=>{let{isMonster:a,showCreativeOption:n,onTakePicker:i}=e;const l=Qr(),{isLink:o,linkRating:s,autoLinkRating:c,showDefAndLink:d,linkRatingDisplayMode:u,sticker:m,format:b,getUpdater:p}=Cn(Object(Bn.useShallow)(e=>{let{card:{sticker:t,format:a,flag:r,isLink:n,linkRating:i,linkMap:l},getUpdater:o}=e;return{linkRating:i,autoLinkRating:l.length,isLink:n,sticker:t,format:a,showDefAndLink:1===r[Z],linkRatingDisplayMode:r[ee],getUpdater:o}})),h=Object(r.useRef)(null),g=Object(r.useRef)(null),f=Object(r.useRef)(null),v=Object(r.useRef)(null),y=Object(r.useRef)(null),x=!0,j=Ia(u,o),w=!j||d,k=[x,w,j].filter(e=>!0===e).length%2===1,S=b&&Ne[b]?Ne[b]:Ne.tcg,F=Object(r.useMemo)(()=>p("atk",e=>e),[p]),C=Object(r.useMemo)(()=>p("def",e=>e),[p]),L=Object(r.useMemo)(()=>p("linkRating",e=>e),[p]),N=Object(r.useMemo)(()=>p("password",void 0,"debounce"),[p]),T=Object(r.useMemo)(()=>p("sticker"),[p]),R=Object(r.useMemo)(()=>p("creator",void 0,"debounce"),[p]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a,r,n,i;let{password:l,creator:o,atk:s,def:c,linkRating:d}=e;"string"===typeof s&&(null===(t=f.current)||void 0===t||t.setValue(s)),"string"===typeof c&&(null===(a=v.current)||void 0===a||a.setValue(c)),"string"===typeof l&&(null===(r=h.current)||void 0===r||r.setValue(l)),"string"===typeof o&&(null===(n=g.current)||void 0===n||n.setValue(o)),"string"===typeof d&&(null===(i=y.current)||void 0===i||i.setValue(d))}})),Object(O.jsxs)(Fd,{className:"card-footer-input",children:[(a||n)&&Object(O.jsxs)(O.Fragment,{children:[x&&Object(O.jsx)(fd,{ref:f,id:"atk",addonBefore:l["input.atk.label"],defaultValue:Cn.getState().card.atk,onChange:F,onTakePicker:i}),w&&Object(O.jsx)(fd,{ref:v,id:"def",addonBefore:l["input.def.label"],defaultValue:Cn.getState().card.def,onChange:C,onTakePicker:i}),k&&Object(O.jsx)("div",{}),j&&Object(O.jsx)(fd,{ref:y,id:"link",addonBefore:Object(O.jsxs)(Cd,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.link.label"]}),Object(O.jsx)(Mr.a,{title:l["input.link.auto.tooltip"],children:Object(O.jsx)("div",{className:"auto-link-rating-input",children:"string"===typeof s&&s.length>0?Object(O.jsx)(Ll.a,{onChange:e=>{e.target.checked&&(L(""),y.current.setValue(""))}}):Object(O.jsx)("div",{className:"auto-link-rating",children:o?c:"-"})})})]}),defaultValue:`${Cn.getState().card.linkRating}`,onChange:L,onTakePicker:i,placeholder:l["input.link.custom.placeholder"]})]}),Object(O.jsx)(fd,{ref:h,id:"password",addonBefore:Object(O.jsxs)(wd,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.password.label"]}),Object(O.jsx)(Tl,{onClick:()=>{var e;return null===(e=h.current)||void 0===e?void 0:e.setValue(`${Lr("0123456789",8)}`)},Icon:kc.a,tooltipProps:{overlay:l["button.randomize.label"]}})]}),defaultValue:Cn.getState().card.password,onChange:N,onTakePicker:i}),Object(O.jsx)(fd,{ref:g,id:"creator",addonBefore:Object(O.jsxs)(wd,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:l["input.copyright.label"]}),Object(O.jsx)(ul.a,{className:"save-button-dropdown",placement:"topLeft",arrow:!0,overlay:Object(O.jsx)(Is.a,{onClick:e=>e.domEvent.stopPropagation(),children:S.map((e,t)=>Object(O.jsx)(Is.a.Item,{onClick:()=>{var t;null===(t=g.current)||void 0===t||t.setValue(e)},children:e},`${t}`))}),children:Object(O.jsx)("div",{children:Object(O.jsx)(Tl,{onClick:()=>{},Icon:jd.a})})})]}),defaultValue:Cn.getState().card.creator,onChange:R,onTakePicker:i}),Object(O.jsx)(xd,{}),Object(O.jsx)(El,{className:"sticker-input fill-input-train",value:m,onChange:T,optionList:oc,children:Object(O.jsx)("span",{children:l["input.sticker.label"]})})]})}),Nd=Wr.b.div`
    position: relative;
    ${e=>{let{$hover:t}=e;return t?"\n            .link-marker-picker {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n        ":""}}
`,Td=Object(Wr.b)(El)`
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
`,Rd=Object(Wr.b)(Ps.Option)`
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
`,Id=e=>{let{finishValueList:t,changeFinish:a,language:n,showCreativeOption:i}=e;const[l,o]=Object(r.useState)(f.art.key),s={[f.attribute.key]:t[1],[f.background.key]:t[4],[f.icon.key]:t[2],[f.sticker.key]:t[3],[f.art.key]:t[0]},c=Object.values(s).some(e=>"normal"!==e),d=Object(r.useMemo)(()=>{return e=n,Object.values(f).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[n]),u=i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[f[l].labelKey]," ",Object(O.jsx)(mc.a,{})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:[n["input.finish.label"],":"]}),"\xa0",n[f[l].labelKey]]}),m=Object(O.jsx)(wl.a,{trigger:["click"],overlayClassName:"global-input-overlay pattern-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsxs)(Ps.Container,{children:[Object(O.jsx)(Hs,{children:n["input.other-finish.label"]}),d.map(e=>{let{label:t,value:a}=e;return Object(O.jsxs)(Rd,{className:zr("normal"===s[a]?"default":"",l===a?"menu-active":""),onClick:()=>{o(a)},children:[Object(O.jsx)("div",{className:"value",children:Object(O.jsx)("div",{className:"tag",children:"normal"===s[a]||""===s[a]?"Auto":s[a]})}),Object(O.jsx)("div",{className:"label",children:t})]},a)})]})}),placement:"bottomRight",children:Object(O.jsx)("span",{className:`field-title card-icon-dropdown ${c?"active":""} ${i?"":"disabled"}`,children:u})},"icon-type-picker");return Object(O.jsx)(Td,{className:"art-finish-checkbox fill-input-train",value:s[l],onChange:e=>{const t={...s};t[l]=`${e}`,a(t)},optionList:nc,children:m})},Bd=Object(r.forwardRef)((e,t)=>{let{showExtraDecorativeOption:a,showCreativeOption:n,receivingCanvas:i,onSourceLoaded:l,onTainted:o,onCropChange:s}=e;const c=Qr(),{opacity:d,artFinish:u,otherFinish:b,linkMap:p,isPendulum:h,pendulumSize:g,isLink:v,art:y,artCrop:x,artData:j,artSource:w,artFit:k,getUpdater:S,setCard:F}=Cn(Object(Bn.useShallow)(e=>{let{card:{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:l,isLink:o,art:s,artCrop:c,artData:d,artSource:u,artFit:m},getUpdater:b,setCard:p}=e;return{opacity:t,artFinish:a,otherFinish:r,linkMap:n,isPendulum:i,pendulumSize:l,isLink:o,art:s,artCrop:c,artData:d,artSource:u,artFit:m,getUpdater:b,setCard:p}})),C=Object(r.useRef)(null),L=Object(r.useMemo)(()=>S("linkMap"),[S]),N=Object(r.useCallback)(e=>F(t=>({...t,isLink:e})),[F]),T=Object(r.useMemo)(()=>S("art"),[S]),R=Object(r.useMemo)(()=>S("artData"),[S]),I=Object(r.useCallback)(e=>F(t=>({...t,artFit:e})),[F]),B=Object(r.useMemo)(()=>S("artSource"),[S]),z=Object(r.useMemo)(()=>S("artFinish"),[S]),E=Object(r.useMemo)(()=>S("otherFinish"),[S]),D=Object(r.useCallback)((e,t,a)=>{null===s||void 0===s||s(e,t),e&&F(t=>({...t,artCrop:e}),a)},[s,F]);return Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t;return null!==(e=null===(t=C.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e},setValue:e=>{let{art:t,artCrop:a,artData:r,artSource:n}=e;var i,l;"offline"===n?"string"===typeof r&&a&&(null===(i=C.current)||void 0===i||i.forceSource("offline",r,a)):"string"===typeof t&&a&&(null===(l=C.current)||void 0===l||l.forceSource("online",t,a))}})),Object(O.jsx)(ds,{ref:C,title:c["input.card-art.label"],defaultSourceType:w,defaultExternalSource:y,defaultInternalSource:j,defaultCropInfo:x,forceFit:k,receivingCanvas:i,onSourceChange:(e,t)=>{B(e),"offline"===e?R(t):T(t)},onCropChange:D,onTainted:o,onSourceLoaded:l,onForceFitChange:I,onMaxSizeExceeded:e=>{Dr.a.error({description:c["error.max-size.description"](e),message:c["error.max-size.message"]})},ratio:m(h,d,void 0,g).ratio,beforeCropper:a?Object(O.jsx)(Id,{finishValueList:[u,...b],changeFinish:e=>{z(e[f.art.key]),E([e[f.attribute.key],e[f.icon.key],e[f.sticker.key],e[f.background.key]])},language:c,showCreativeOption:n}):null,children:Object(O.jsx)(Nd,{className:"link-picker-container",style:{minWidth:88},$hover:a,children:Object(O.jsx)(Rs,{active:!0===v,defaultValue:p,onChange:L,onStatusChange:N},`link-${JSON.stringify(p)}`)})})}),zd=Wr.b.div`
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
`,Ed=Wr.b.span`
    cursor: pointer;
`,Dd=Object(r.forwardRef)((e,t)=>{let{onTakePicker:a}=e;const n=Qr(),{name:i,format:l,getUpdater:o}=Cn(Object(Bn.useShallow)(e=>{let{card:{name:t,format:a},getUpdater:r}=e;return{name:t,format:a,getUpdater:r}})),s=Object(r.useRef)(null),c=Object(r.useRef)(null),d=Object(r.useMemo)(()=>o("setId"),[o]),u=Object(r.useMemo)(()=>o("name",void 0,"debounce"),[o]);return Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t,a;let{name:r,setId:n}=e;"string"===typeof r&&(null===(t=s.current)||void 0===t||t.setValue(r)),"string"===typeof n&&(null===(a=c.current)||void 0===a||a.setValue(n))}})),Object(O.jsxs)(zd,{className:"name-id-input",children:[Object(O.jsx)(fd,{ref:s,id:"name",defaultValue:i,addonBefore:Object(O.jsx)(Mr.a,{title:n["input.name.tooltip"],children:Object(O.jsx)(Ed,{onClick:()=>{navigator.clipboard.writeText(qa(i))},children:n["input.name.label"]})}),onChange:u,onTakePicker:a}),Object(O.jsx)(fd,{ref:c,id:"set-id",defaultValue:Cn.getState().card.setId,addonBefore:Object(O.jsxs)(wd,{className:"input-label-with-button",children:[Object(O.jsx)("div",{className:"input-label",children:n["input.set-id.label"]}),Object(O.jsx)(Tl,{onClick:()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.setValue((e=>Lr("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4)+"-"+("OCG"===e?"JP":"EN")+Lr("0000000000111111111122222222223456789",1)+Lr("0123456789",2))(l))},Icon:kc.a,tooltipProps:{overlay:n["button.randomize.label"]}})]}),onChange:d,onTakePicker:a})]})});var Md=a(647);const{width:Wd,height:Ad}=s,Hd=Wr.b.div`
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
`,Pd=e=>{let{isPendulum:t,onOverwrite:a,onActive:r,language:n}=e;const{db:i}=Rn(),[l,o]=En("layoutPresetList"),s=il(e=>e.setVisible);return 0===l.length?Object(O.jsx)(O.Fragment,{}):Object(O.jsxs)(Hd,{className:"frame-preset-panel",children:[l.length>0&&Object(O.jsx)("div",{className:"preset-panel-top",children:Object(O.jsxs)("div",{className:"preset-warning",children:[n["preset.warning.label"],"\xa0",Object(O.jsx)("span",{className:"open-preset-manager",onClick:()=>s(!0),children:n["preset.manager.check.label"]})]})}),l.map(e=>{let{content:l,key:s}=e;const{dyeList:c,foil:d,frame:u,pendulumFrame:m,leftFrame:b,pendulumRightFrame:p,rightFrame:h,effectStyle:g,pendulumStyle:f}=l,v={frame:u,topLeftFrame:b,topRightFrame:h,bottomLeftFrame:m,bottomRightFrame:p,effectBackground:null===g||void 0===g?void 0:g.background,pendulumEffectBackground:null===f||void 0===f?void 0:f.background};return Object(O.jsx)(Io,{width:Math.round(40*Wd/Ad),height:40,isPendulum:t,resolvedLayoutState:Ba(v,t),tabIndex:-1,dyeList:c,foil:d,language:n,onActive:()=>r(l),onDelete:async()=>{if(i){const e=i.transaction("presetLayoutStore","readwrite");await i.delete("presetLayoutStore",s),await e.done}o(e=>e.filter(e=>{let{key:t}=e;return s!==t}))},onOverwrite:a?()=>null===a||void 0===a?void 0:a(s):void 0})})]})},$d=Wr.b.div`
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
`,Kd=()=>{const e=Qr(),{flag:t,setCard:a}=Cn(Object(Bn.useShallow)(e=>{let{card:{flag:t},setCard:a,getUpdater:r}=e;return{flag:t,setCard:a,getUpdater:r}})),r=(e,t)=>a(a=>{const r=[...a.flag];return r[t]=e,{...a,flag:r}});return Object(O.jsx)($d,{children:t.map((t,a)=>{var n;const{labelKey:i,type:l}=null!==(n=Q[a])&&void 0!==n?n:{};return"checkbox"===l?Object(O.jsx)("div",{children:Object(O.jsx)(Ll.a,{checked:0!==t,onChange:e=>{const t=e.target.checked?1:0;r(t,a)},children:e[i]})},i):"link-rating-behavior"===l?Object(O.jsx)(El,{className:"link-rating-behavior-panel",onChange:e=>r(Number(e),a),optionList:[{label:e["input.flag.link-rating-behavior.auto"],value:0},{label:e["input.flag.link-rating-behavior.show"],value:1},{label:e["input.flag.link-rating-behavior.hide"],value:2}],value:t,suffix:Object(O.jsx)("label",{children:e[i]})},i):null})})},{width:Ud,height:Yd}=s,Gd=Wr.b.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    ${Od} {
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
`,Vd=Object(r.forwardRef)((e,t)=>{var a,n;let{frameList:i,onFrameChange:l,onCancel:o}=e;const{db:s}=Rn(),c=Qr(),{isPendulum:d,foil:u,frame:m,leftFrame:b,rightFrame:p,pendulumFrame:h,pendulumRightFrame:g,effectBackground:f,pendulumEffectBackground:v,dyeList:y,setCard:j,getUpdater:w}=Cn(Object(Bn.useShallow)(e=>{let{card:{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,dyeList:s,effectStyle:c,pendulumStyle:d},setCard:u,getUpdater:m}=e;return{isPendulum:t,foil:a,frame:r,leftFrame:n,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,effectBackground:c.background,pendulumEffectBackground:d.background,dyeList:s,setCard:u,getUpdater:m}})),[,k]=En("layoutPresetList"),S=Object(r.useRef)({topLeftFrame:"auto"===h?"spell":h,topRightFrame:"auto"===h?"spell":h,bottomLeftFrame:"auto"===h?"spell":h,bottomRightFrame:"auto"===h?"spell":h,effectBackground:"auto"===h?"spell":h,pendulumEffectBackground:"auto"===h?"spell":h}),[F,C]=Object(r.useState)(0),[L,N]=Object(r.useState)("frame"),T="frame-layout-main",R=Object(r.useMemo)(()=>rc({normal:c["input.foil.normal.label"],gold:c["input.foil.gold.label"],platinum:c["input.foil.platinum.label"]}),[c]);Object(r.useEffect)(()=>{"pendulumEffectBackground"!==L||d||N("frame")},[L,d]),Object(r.useImperativeHandle)(t,()=>({focus:()=>{var e;return null===(e=document.getElementById(T))||void 0===e?void 0:e.focus()}}));const I=Object(r.useMemo)(()=>w("foil"),[w]),B=Object(r.useMemo)(()=>w("pendulumFrame"),[w]),z=Object(r.useMemo)(()=>w("pendulumRightFrame"),[w]),E=Object(r.useMemo)(()=>w("leftFrame"),[w]),D=Object(r.useMemo)(()=>w("rightFrame"),[w]),M=e=>j(t=>{const a={...t.effectStyle};return a.background=e,{...t,effectStyle:a}}),W=e=>j(t=>{const a={...t.pendulumStyle};return a.background=e,{...t,pendulumStyle:a}}),A=Object(r.useMemo)(()=>w("dyeList"),[w]),H=e=>{"bottomLeftFrame"===L&&B(e),"bottomRightFrame"===L&&z(e),"topLeftFrame"===L&&E(e),"topRightFrame"===L&&D(e),"effectBackground"===L&&M(e),"pendulumEffectBackground"===L&&W(e)},P={frame:m,topLeftFrame:b,topRightFrame:p,bottomLeftFrame:h,bottomRightFrame:g,effectBackground:f,pendulumEffectBackground:v},$=P[L],K=Ba(P,d),U=x[L];return Object(O.jsxs)(Gd,{children:[Object(O.jsxs)("div",{className:"visual-preview-container",children:[Object(O.jsx)("label",{children:c["input.advanced-frame.main.label"]}),Object(O.jsx)(Qo,{id:T,tabIndex:0,className:"frame"===L?"active":"",...null!==(a=Be[m])&&void 0!==a?a:Ee,onClick:()=>N("frame")}),Object(O.jsx)("label",{children:c["input.advanced-frame.detailed.label"]}),Object(O.jsx)(To,{width:2*Math.round(Ud/20),height:2*Math.round(Yd/20),isPendulum:d,baseLayoutState:P,resolvedLayoutState:K,activeLayout:L,onLayoutSelect:e=>N(e),dyeList:y,foil:u,language:c,vertical:!0}),Object(O.jsxs)("div",{className:"frame-action",children:[Object(O.jsx)(dl.a,{size:"small",onClick:()=>{B("auto"),z("auto"),E("auto"),D("auto"),M("auto"),W("auto"),I("normal"),A(["","","","","","",""])},children:c["generic.reset.label"]}),Object(O.jsx)(dl.a,{size:"small",type:"primary",onClick:async()=>{const e=Object(V.a)(),t={foil:u,frame:m,leftFrame:b,pendulumFrame:h,pendulumRightFrame:g,rightFrame:p,effectStyle:{background:f},pendulumStyle:{background:v},dyeList:[...y]};if(s){const a=s.transaction("presetLayoutStore","readwrite");await s.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}k(a=>[...a,{key:e,content:t}])},children:c["input.advanced-frame.save.label"]})]})]}),Object(O.jsx)("div",{children:Object(O.jsxs)(Od,{className:"pendulum-frame-picker",...Cr({stopPropagation:!0,optionLength:i.length,setFocus:C,onTrigger:()=>{F>=0&&H(i[F].value)},onCancel:o}),children:[Object(O.jsx)("div",{className:"frame-part-name",children:c[null===(n=De[L])||void 0===n?void 0:n.labelKey]}),"foil"!==L&&Object(O.jsx)(Ll.a,{className:zr("inline-input","frame"===L?"checkbox-disabled":""),checked:"auto"===$,disabled:"frame"===L,onChange:e=>{var t;H(e.target.checked?"auto":null!==(t=S.current[L])&&void 0!==t?t:"auto")},children:c["input.frame.auto"]}),"foil"===L?Object(O.jsx)(El,{className:"foil-radio",value:u,onChange:I,optionList:R,children:Object(O.jsx)("span",{children:c["input.foil.label"]})}):Object(O.jsx)(El,{className:"frame-radio",value:$,onChange:e=>{"frame"===L?l(e):H(e)},optionList:i}),"number"===typeof U&&Object(O.jsx)(xs,{value:y[U],onChange:e=>{e!==y[U]&&((e,t)=>{j(a=>{const r=x[t];if("number"!==typeof r)return a;const n=[...a.dyeList];return n[r]=e,{...a,dyeList:n}})})(e,L)},children:c["input.advanced-frame.dye"]})]})}),Object(O.jsx)(Pd,{language:c,isPendulum:d,onOverwrite:async e=>{const t={foil:u,frame:m,leftFrame:b,pendulumFrame:h,pendulumRightFrame:g,rightFrame:p,effectStyle:{background:f},pendulumStyle:{background:v},dyeList:[...y]};if(s){const a=s.transaction("presetLayoutStore","readwrite");await s.put("presetLayoutStore",{key:e,content:JSON.stringify(t)}),await a.done}k(a=>a.map(a=>a.key===e?{key:e,content:t}:a))},onActive:e=>{const{dyeList:t,foil:a,frame:r,pendulumFrame:n,leftFrame:i,pendulumRightFrame:o,rightFrame:s,effectStyle:c,pendulumStyle:d}=e;l(r),B(n),z(o),E(i),D(s),M(c.background),W(d.background),I(a),A(t)}})]})}),Xd=[{...Q[0],valueDisplay:(e,t)=>e["input.flag.mix-def-link"],sampleDisplay:e=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.mix-def-link"],":",Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)(Yl,{data:0,children:"0"}),": ",e["manager.template.description.true"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Yl,{data:1,children:"1"}),": ",e["manager.template.description.false"]]})]})]})},{...Q[1],valueDisplay:(e,t)=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.link-rating-behavior"],": ",e[1===t?"input.flag.link-rating-behavior.show":"input.flag.link-rating-behavior.hide"]]}),sampleDisplay:e=>Object(O.jsxs)(O.Fragment,{children:[e["input.flag.link-rating-behavior"],":",Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)(Yl,{data:0,children:0}),": ",e["input.flag.link-rating-behavior.auto"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Yl,{data:1,children:1}),": ",e["input.flag.link-rating-behavior.show"]]}),Object(O.jsxs)("li",{children:[Object(O.jsx)(Yl,{data:2,children:2}),": ",e["input.flag.link-rating-behavior.hide"]]})]})]})}],{width:qd,height:Jd}=s,_d=Wr.b.div`
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
`,Qd=Wr.b.div`
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
`,Zd=Object(r.forwardRef)((e,t)=>{let{softMode:a,showCreativeOption:n,showExtraDecorativeOption:i,onTakePicker:l,onFrameChange:o}=e;const s=Qr(),{isPendulum:c,frame:d,foil:u,leftFrame:m,rightFrame:b,pendulumFrame:p,pendulumRightFrame:h,effectBackground:g,pendulumEffectBackground:f,pendulumScaleBlue:v,pendulumScaleRed:y,pendulumSize:x,dyeList:j,flag:w,setCard:k,getUpdater:S}=Cn(Object(Bn.useShallow)(e=>{let{card:{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectStyle:u,pendulumStyle:m,dyeList:b,flag:p},setCard:h,getUpdater:g}=e;return{isPendulum:t,frame:a,foil:r,leftFrame:n,rightFrame:i,pendulumFrame:l,pendulumRightFrame:o,pendulumScaleBlue:s,pendulumScaleRed:c,pendulumSize:d,effectBackground:u.background,pendulumEffectBackground:m.background,dyeList:b,flag:p,setCard:h,getUpdater:g}})),{mirrorPendulumScale:F,updateSetting:C}=Ln(Object(Bn.useShallow)(e=>{let{setting:{mirrorPendulumScale:t},updateSetting:a}=e;return{mirrorPendulumScale:t,updateSetting:a}})),L=Object(r.useRef)(null),N=Object(r.useRef)(null),T=Object(r.useRef)(null),[R,I]=Object(r.useState)(!1),B=Object(r.useMemo)(()=>S("pendulumScaleRed"),[S]),z=Object(r.useMemo)(()=>S("pendulumScaleBlue"),[S]),E=Object(r.useMemo)(()=>S("pendulumSize"),[S]),D=Object(r.useMemo)(()=>S("pendulumEffect",void 0,"debounce"),[S]),M=Object(r.useMemo)(()=>{return e=s,Object.values(X).map(t=>{let{key:a,labelKey:r}=t;return{label:e[r],value:a}});var e},[s]),W=Object(r.useMemo)(()=>ic().filter(e=>i||"normal"===e.edition),[i]);Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{pendulumEffect:a}=e;a&&(null===(t=T.current)||void 0===t||t.setValue(a))}}));const A={frame:d,topLeftFrame:m,topRightFrame:b,bottomLeftFrame:p,bottomRightFrame:h,effectBackground:g,pendulumEffectBackground:f},H=w.map((e,t)=>{const a=Xd[t];return 0!==e&&a?Object(O.jsx)("li",{children:a.valueDisplay(s,e)},a.labelKey):null}).filter(e=>null!=e);return Object(O.jsxs)(Qd,{className:"pendulum-input",children:[Object(O.jsxs)("div",{className:"joined-row pendulum-option",children:[Object(O.jsx)("div",{className:"pendulum-checkbox",children:Object(O.jsx)(Ll.a,{onChange:e=>k(t=>({...t,isPendulum:e.target.checked})),checked:c,children:s["input.pendulum.label"]})}),Object(O.jsxs)("div",{className:"pendulum-option-container",children:[n&&Object(O.jsx)(wl.a,{visible:R,onVisibleChange:I,trigger:["click"],placement:"bottom",overlayClassName:"pendulum-frame-picker-overlay",content:Object(O.jsxs)("div",{className:"overlay-event-absorber",children:[Object(O.jsx)(Vd,{ref:N,isPendulum:c,frameList:W,pendulumFrame:p,onFrameChange:o,onCancel:()=>{var e;I(!1),null===(e=L.current)||void 0===e||e.focus()}}),Object(O.jsx)(Kd,{})]}),children:Object(O.jsxs)(_d,{ref:L,className:"pendulum-frame-input",tabIndex:0,onKeyDown:e=>{if("ArrowDown"===e.key||"Enter"===e.key||"  "===e.key)return I(!0),setTimeout(()=>{var e;null===(e=N.current)||void 0===e||e.focus()},200),!1},children:[Object(O.jsx)("span",{className:"pendulum-frame-label",children:s["input.advanced-frame.label"]}),Object(O.jsx)("div",{className:"card-layout-preview-container",children:Object(O.jsx)(To,{width:Math.round(30*qd/Jd),height:30,isPendulum:c,resolvedLayoutState:Ba(A,c),tabIndex:-1,dyeList:j,foil:u,language:s})}),H.length>0?Object(O.jsx)(Xl,{content:Object(O.jsxs)(Vl,{children:[s["input.flag.effective.label"],Object(O.jsx)("ul",{children:H})]}),children:Object(O.jsx)(Md.a,{})}):null,Object(O.jsx)(mc.a,{})]})}),c&&n&&Object(O.jsx)("div",{className:"pendulum-size",children:Object(O.jsx)(wl.a,{overlayClassName:"global-input-overlay font-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(Ps.Container,{children:M.map(e=>{let{value:t,label:a}=e;return Object(O.jsx)(Ps.Option,{className:x===t?"menu-active":"",onClick:()=>{E(t)},children:a},t)})})}),placement:"bottomLeft",children:Object(O.jsx)(Ql,{$softMode:a,$active:x!==_,children:s[X[x].labelKey]})},"color-picker")}),c&&n&&Object(O.jsx)(Ll.a,{className:"mirror-scale",onChange:e=>{const t=e.target.checked;C({mirrorPendulumScale:t}),t&&B(v)},checked:F,children:s["input.mirror-scale.label"]})]})]}),c&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(Zo.a,{addonBefore:Object(O.jsx)("span",{children:s["input.scale.label"](Object(O.jsx)("span",{className:"blue-scale",children:s["input.scale.blue.label"]},"blue-scale"))}),value:v,allowClear:!0,onChange:e=>{z(e),F&&B(e)}})}),Object(O.jsx)("div",{children:Object(O.jsx)(Zo.a,{addonBefore:Object(O.jsx)("span",{children:s["input.scale.label"](Object(O.jsx)("span",{className:"red-scale",children:s["input.scale.red.label"]},"red-scale"))}),value:y,allowClear:!0,onChange:e=>{F&&z(e),B(e)}})}),Object(O.jsx)("div",{className:"joined-row",children:Object(O.jsx)(gd,{ref:T,id:"pendulum-effect",allowHotkey:!0,defaultValue:Cn.getState().card.pendulumEffect,onChange:D,onTakePicker:l,autoSize:{minRows:5}})})]})]})}),eu=Wr.b.div`
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
`,tu=Object(r.forwardRef)((e,t)=>{var a;let{onTakePicker:n}=e;const i=Qr(),{frame:l,cardIcon:o,format:s,furiganaHelper:c,condenseTolerant:d,setCard:u,getUpdater:m}=Cn(Object(Bn.useShallow)(e=>{let{card:{frame:t,cardIcon:a,format:r,furiganaHelper:n,effectStyle:i},setCard:l,getUpdater:o}=e;return{frame:t,cardIcon:a,format:r,furiganaHelper:n,condenseTolerant:null===i||void 0===i?void 0:i.condenseTolerant,setCard:l,getUpdater:o}})),b=Ln(e=>e.setting.showExtraDecorativeOption),p="ocg"===s?"\uff0f":"/",h=Object(r.useRef)(null),[g,f]=Object(r.useState)(()=>Cn.getState().card.effectStyle.minLine),[v,y]=Object(r.useState)(()=>Cn.getState().card.pendulumStyle.minLine),x=Object(r.useMemo)(()=>m("typeAbility",e=>"string"!==typeof e?[]:e.split(/\uff0f|\//).map(e=>`${e}`.trim()).filter(e=>"string"===typeof e&&e.length>0),"debounce"),[m]),j=Object(r.useCallback)(e=>u(t=>({...t,furiganaHelper:e.target.checked})),[u]);Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&u(e=>{const t={...e.effectStyle,minLine:g},a={...e.pendulumStyle,minLine:v};return{...e,effectStyle:t,pendulumStyle:a}})},500),()=>{e=!1}},[g,v,u]),Object(r.useImperativeHandle)(t,()=>({setValue:e=>{var t;let{typeAbility:a,effectMinLine:r,pendulumEffectMinLine:n}=e;a&&(null===(t=h.current)||void 0===t||t.setValue(a.join(p))),"number"===typeof r&&f(r),"number"===typeof n&&y(n)}}));const w="auto"===o?Ca({frame:l})?"input.type.monster.label":"input.type.st.label":"st"===(null===(a=I[o])||void 0===a?void 0:a.value)?"input.type.st.label":"input.type.monster.label",k="ocg"===s;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(eu,{className:`post-pendulum-input first-line variant-${s}`,children:[Object(O.jsx)(fd,{ref:h,addonBefore:i[w],id:"type-ability",defaultValue:Cn.getState().card.typeAbility.join(p),onChange:x,onTakePicker:n}),k&&Object(O.jsx)(Mr.a,{overlay:i["input.furigana-helper.tooltip"],overlayClassName:"long-tooltip-overlay",children:Object(O.jsx)(Ll.a,{className:"input-kanji-helper",onChange:j,checked:c,children:i["input.furigana-helper.label"]})}),Object(O.jsx)(qo,{})]}),Object(O.jsxs)(eu,{className:`post-pendulum-input second-line variant-${s}`,children:[Object(O.jsx)(El,{className:"condense-input",value:`${d}`,onChange:e=>(e=>{u(t=>({...t,effectStyle:{...t.effectStyle,condenseTolerant:e}}))})(e),optionList:sc,children:Object(O.jsxs)("span",{children:[i["input.condense.label"]," ",Object(O.jsx)(Fl,{content:Object(O.jsx)(Vl,{children:i["input.condense.tooltip"]})})]})}),b&&Object(O.jsxs)("div",{className:"line-input",children:[Object(O.jsx)("div",{children:i["input.text-style.min-line.label"]}),Object(O.jsx)(bc.a,{id:"effect-line",value:g,placeholder:i["input.text-style.min-line.effect.placeholder"],onChange:e=>f("number"===typeof e?e:0),min:0,max:50}),Object(O.jsx)(bc.a,{id:"pendulum-effect-line",value:v,placeholder:i["input.text-style.min-line.pendulum-effect.placeholder"],onChange:e=>y("number"===typeof e?e:0),min:0,max:50})]})]})]})}),au=Wr.b.div`
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
`,ru=Wr.b.div`
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
`,nu={effectTextStyle:{keyName:"effectTextStyle",extraKeyname:"effectStyle",labelKey:"input.text-style.section.effect.label"},pendulumTextStyle:{keyName:"pendulumTextStyle",extraKeyname:"pendulumStyle",labelKey:"input.text-style.section.pendulum.label"},statTextStyle:{keyName:"statTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.stat.label"},typeTextStyle:{keyName:"typeTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.type.label"},otherTextStyle:{keyName:"otherTextStyle",extraKeyname:void 0,labelKey:"input.text-style.section.other.label"}},iu=()=>{const e=Qr(),{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:l,setCard:o,statTextStyle:s,typeTextStyle:c}=Cn(Object(Bn.useShallow)(e=>{let{card:{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:l,statTextStyle:o,typeTextStyle:s},setCard:c}=e;return{format:t,effectStyle:a,effectTextStyle:r,otherTextStyle:n,pendulumStyle:i,pendulumTextStyle:l,setCard:c,statTextStyle:o,typeTextStyle:s}})),d=[{info:nu.effectTextStyle,value:r,extraValue:a},{info:nu.pendulumTextStyle,value:l,extraValue:i},{info:nu.statTextStyle,value:s},{info:nu.typeTextStyle,value:c},{info:nu.otherTextStyle,value:n}];return Object(O.jsx)(wl.a,{trigger:["click"],placement:"bottomLeft",overlayClassName:"global-input-overlay global-style-picker-overlay",content:Object(O.jsx)("div",{className:"overlay-event-absorber",children:Object(O.jsx)(ru,{className:"custom-style-picker",children:d.map(a=>{let{info:r,value:n,extraValue:i}=a;const{keyName:l,labelKey:s,extraKeyname:c}=r,[d,u,m,b]=n,{upSize:p,fontStyle:h}=null!==i&&void 0!==i?i:{};return Object(O.jsxs)("div",{className:"style-section",children:[Object(O.jsxs)("h3",{className:"custom-style-expand "+(d?"":"inactive"),children:[Object(O.jsx)("span",{children:e[s]}),Object(O.jsx)(Ll.a,{checked:d,onChange:e=>{o(t=>{const a=e.target.checked;return{...t,[l]:[a,...n.slice(1)]}})},children:e["input.text-style.custom.label"]})]}),d&&Object(O.jsxs)("div",{className:"style-picker-section",children:["string"===typeof h&&"tcg"===t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("h2",{className:"font-style-picker",children:[Object(O.jsx)("span",{className:"label",children:e["input.text-style.font-style.label"]}),Object(O.jsx)(El,{className:"inline-radio-train",value:h,optionList:[{label:Object(O.jsx)(j.a,{}),value:"auto"},{label:e["input.text-style.font-style.normal.label"],value:"normal"},{label:e["input.text-style.font-style.italic.label"],value:"italic"}],onChange:e=>{o(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.fontStyle="string"===typeof e?e:"auto",{...t,[c]:a}):t})}})]})}),"number"===typeof p&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("h2",{className:"size-picker",children:[Object(O.jsx)("span",{className:"label",children:e["input.text-style.extra-size.label"]}),Object(O.jsx)(El,{className:"inline-radio-train",value:p,optionList:[{label:Object(O.jsx)(j.a,{}),value:0},{label:"+1",value:1},{label:"+2",value:2},{label:"+3",value:3}],onChange:e=>{o(t=>{const a=c?{...t[c]}:void 0;return a&&c?(a.upSize="number"===typeof e?e:0,{...t,[c]:a}):t})}})]})}),Object(O.jsx)("h2",{children:Object(O.jsx)(Ll.a,{className:"shadow-checkbox",checked:m,onChange:e=>{o(t=>{const a=e.target.checked;return{...t,[l]:[...n.slice(0,2),a,n[3]]}})},children:Object(O.jsx)("span",{className:"label",children:e["input.text-style.shadow.label"]})})}),m&&Object(O.jsx)(bs,{value:b,onChange:e=>o(t=>({...t,[l]:[...n.slice(0,3),e]}))}),Object(O.jsx)("h2",{children:e["input.text-style.color.label"]}),Object(O.jsx)(ps.b,{colors:Pt,color:null!==u&&void 0!==u?u:"",onChangeComplete:e=>{o(t=>({...t,[l]:[n[0],e.hex,...n.slice(2,4)]}))}})]})]},l)})})}),children:Object(O.jsxs)(au,{className:"text-style-preview",children:[Object(O.jsx)("div",{className:"text-style-grid",children:d.map(e=>{let{info:t,value:a,extraValue:r}=e;const{keyName:n}=t,[i,l,o,s]=a,{upSize:c,fontStyle:d}=null!==r&&void 0!==r?r:{};return Object(O.jsx)("div",{className:"text-style-preview-section",style:{background:i?"var(--sub-level-2)":"var(--sub-level-4)",color:0!==(null!==l&&void 0!==l?l:"").length&&i?l:"var(--color-contrast)",textShadow:i&&o?`0 0 2px ${s}`:"none",fontStyle:i&&"italic"===d?"italic":"normal"},children:c&&i?Object(O.jsxs)("div",{children:["+",c]}):"Auto"},n)})}),Object(O.jsx)("span",{className:"text-style-label",children:e["input.text-style.custom-effect.label"]})]})})};a(581);const lu=Object(r.forwardRef)((e,t)=>{let{artworkCanvas:a,backgroundCanvas:n,onCropChange:i,onTainted:l,onSourceLoaded:o}=e;const s=Qr(),{format:c,frame:d,foil:u,finish:m,opacity:b,nameStyleType:p,nameStyle:g,getUpdater:f,setCard:v}=Cn(Object(Bn.useShallow)(e=>{let{card:{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:l,nameStyle:o,isLink:s},getUpdater:c,setCard:d}=e;return{format:t,frame:a,foil:r,finish:n,opacity:i,nameStyleType:l,nameStyle:o,isLink:s,getUpdater:c,setCard:d}})),{setting:y}=Ln(),{showCreativeOption:x,showExtraDecorativeOption:j,reduceMotionColor:w}=y,k=Object(r.useRef)(null),S=Ca({frame:d}),[F,C]=Object(r.useState)(0),L=Object(r.useMemo)(()=>rc({normal:s["input.foil.normal.label"],gold:s["input.foil.gold.label"],platinum:s["input.foil.platinum.label"]}),[s]),N=Object(r.useRef)(null),T=Object(r.useRef)(null),R=Object(r.useRef)(null),I=Object(r.useRef)(null),B=Object(r.useRef)(null),z=Object(r.useRef)(null),E=Object(r.useRef)(null),D=Object(r.useRef)(null),[M,W]=Object(r.useState)({id:"",setValue:()=>{}}),A=Object(r.useMemo)(()=>f("foil"),[f]),H=Object(r.useMemo)(()=>f("finish"),[f]),P=Object(r.useCallback)(e=>v(t=>({...t,opacity:e})),[v]),$=Object(r.useCallback)((e,t)=>{v(a=>({...a,nameStyleType:e,nameStyle:t}))},[v]),K=Object(r.useMemo)(()=>{return e=s,Object.values(h).map(t=>{let{value:a,label:r,labelKey:n,tooltipKey:i}=t;return{label:n?e[n]:r,tooltip:i?e[i]:void 0,value:a}});var e},[s]);return Object(r.useEffect)(()=>{var e;null===(e=k.current)||void 0===e||e.setValue({font:g.font})},[g]),Object(r.useEffect)(()=>{var e;null===(e=R.current)||void 0===e||e.setValue(b)},[b]),Object(r.useImperativeHandle)(t,()=>({isLoading:()=>{var e,t,a,r;return null!==(e=null===(t=T.current)||void 0===t?void 0:t.isLoading())&&void 0!==e&&e||null!==(a=null===(r=R.current)||void 0===r?void 0:r.isLoading())&&void 0!==a&&a},forceCardData:e=>{var t,a,r,n,i,l,o;C(e=>e+1);const{name:s,art:c,artCrop:d,artData:u,artSource:m,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:g,opacity:f,setId:v,pendulumEffect:y,typeAbility:x,effect:j,atk:O,def:w,creator:k,password:S,effectStyle:F,pendulumStyle:L}=e;null===(t=T.current)||void 0===t||t.setValue({art:c,artCrop:d,artData:u,artSource:m}),null===(a=R.current)||void 0===a||a.setValue({...f,background:b,backgroundCrop:p,backgroundData:h,backgroundSource:g}),null===(r=I.current)||void 0===r||r.setValue({name:s,setId:v}),null===(n=B.current)||void 0===n||n.setValue({pendulumEffect:y}),null===(i=z.current)||void 0===i||i.setValue(j),null===(l=E.current)||void 0===l||l.setValue({typeAbility:x,effectMinLine:F.minLine,pendulumEffectMinLine:L.minLine}),null===(o=D.current)||void 0===o||o.setValue({atk:O,def:w,creator:k,password:S})}})),Object(O.jsxs)("div",{className:["card-info-panel","ocg"===c?"input-ocg":"input-tcg"].join(" "),children:[Object(O.jsx)(Po,{}),Object(O.jsx)("br",{}),Object(O.jsx)(Ao,{}),Object(O.jsxs)("div",{className:"card-overlay-input",children:[Object(O.jsx)(Sd,{className:"format-radio",value:c,onChange:e=>{v(t=>{var a,r,n,i,l;const o=Kr(t,`${e}`),{name:s,setId:c,effect:d,typeAbility:u,password:m,creator:b,pendulumEffect:p}=o;return null===(a=I.current)||void 0===a||a.setValue({name:s,setId:c}),null===(r=z.current)||void 0===r||r.setValue(d),null===(n=B.current)||void 0===n||n.setValue({pendulumEffect:p}),null===(i=E.current)||void 0===i||i.setValue({typeAbility:u}),null===(l=D.current)||void 0===l||l.setValue({creator:b,password:m}),o})},optionList:ac,children:Object(O.jsx)("span",{children:s["input.format.label"]})}),Object(O.jsx)(El,{className:"foil-radio",value:u,onChange:A,optionList:L,children:Object(O.jsx)("span",{children:s["input.foil.label"]})}),j&&Object(O.jsx)(Mc,{className:"finish-checkbox",value:m,onChange:H,optionList:K,children:Object(O.jsxs)(wd,{className:"finish-checkbox-label",children:[Object(O.jsx)("div",{className:"input-label",children:s["input.finish.label"]}),Object(O.jsx)(Tl,{onClick:()=>H([]),Icon:cc.a,tooltipProps:{title:s["input.other-finish.reset.tooltip"]}})]})})]}),x&&Object(O.jsxs)("div",{className:"card-layout-input",children:[Object(O.jsxs)("label",{className:"standalone-addon ant-input-group-addon",children:[s["input.layout.label"]," ",Object(O.jsx)(Fl,{content:Object(O.jsx)(Vl,{children:s["input.layout.tooltip"]})})]}),Object(O.jsx)(Uc,{ref:R,defaultValue:b,receivingCanvas:n,onChange:P,onTainted:l,onCropChange:i,onSourceLoaded:o})]}),Object(O.jsx)(Ec,{ref:N,onSTFrameChange:e=>{var t;return null===(t=E.current)||void 0===t?void 0:t.setValue({typeAbility:e})},onPasswordChange:e=>{var t;return null===(t=D.current)||void 0===t?void 0:t.setValue({password:e})},onStatChange:(e,t,a)=>{var r;return null===(r=D.current)||void 0===r?void 0:r.setValue({atk:e,def:t,linkRating:a})}}),Object(O.jsxs)(kd,{className:"name-style-id-input",children:[Object(O.jsx)(Dd,{ref:I,onTakePicker:W}),Object(O.jsx)(Ic,{ref:k,frameInfo:Be[d],defaultType:p,defaultValue:g,showExtraDecorativeOption:j,onChange:$},F),Object(O.jsx)(ud,{showCreativeOption:x})]}),Object(O.jsxs)("div",{className:"main-info",children:[Object(O.jsxs)("div",{className:"main-info-first",children:[Object(O.jsx)(Xc,{language:s}),Object(O.jsx)(Zd,{ref:B,showCreativeOption:x,showExtraDecorativeOption:j,softMode:w,onTakePicker:W,onFrameChange:e=>{var t;return null===(t=N.current)||void 0===t?void 0:t.changeFrame(e)}}),Object(O.jsx)(tu,{ref:E,onTakePicker:W}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"card-effect-letter-helper",children:[Object(O.jsx)(Ms,{className:"standalone-label",children:s["input.effect.label"]}),x?Object(O.jsx)(iu,{}):Object(O.jsx)("div",{}),Object(O.jsx)(uc,{targetId:M.id,onPick:M.setValue})]}),Object(O.jsx)(vd,{ref:z,onTakePicker:W})]}),Object(O.jsx)(Ld,{ref:D,isMonster:S,showCreativeOption:x,onTakePicker:W})]}),Object(O.jsx)("div",{className:"main-info-second",children:Object(O.jsx)(Bd,{ref:T,receivingCanvas:a,showCreativeOption:x,showExtraDecorativeOption:j,onSourceLoaded:o,onTainted:l,onCropChange:i})})]})]})}),{height:ou,width:su,cardBorder:cu}=s,du=68/su,uu=Wr.b.div`
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
`,mu=e=>{var t,a,n,i,l,o,s,d;let{index:u,card:b,active:p,selected:h,language:g,onDuplicate:f,onActive:v,onDelete:y,onSelect:x,style:j}=e;const[w,k]=Object(r.useState)(!1),{art:S,artCrop:F,artData:C,artFit:N,artSource:T,atk:R,attribute:I,background:B,backgroundCrop:z,backgroundData:E,backgroundFit:D,backgroundSource:M,backgroundType:W,cardIcon:A,def:H,format:P,frame:$,leftFrame:K,rightFrame:U,hasBackground:Y,isLink:G,isPendulum:V,linkMap:X,name:q,opacity:J,pendulumFrame:_,pendulumRightFrame:Q,pendulumScaleBlue:Z,pendulumScaleRed:ee,setId:te,star:ae,subFamily:re,typeAbility:ne,effectStyle:ie,pendulumStyle:le}=b,{topLeftFrame:oe,topRightFrame:se,bottomLeftFrame:ce,bottomRightFrame:de}=Ba({frame:$,topLeftFrame:K,topRightFrame:U,bottomLeftFrame:_,bottomRightFrame:Q,effectBackground:ie.background,pendulumEffectBackground:le.background},V),ue=qa(q),me="offline"===T?S?C:"https://i.imgur.com/jjtCuG5.png":S,be="offline"===M?B?E:"https://imgur.com/pdSVzUZ.png":B,pe="auto"===A?La($):A,he="st"===pe?re:pe,ge=Fa(b),fe=!!(R||H||G&&X.length),ve=ne.join(" / "),ye=m(V,J),{artFrameHeight:xe,artFrameWidth:je}=ye;return Object(O.jsxs)(uu,{className:zr("truncate",p?"active":"",u%2===0?"alternative-color":""),onClick:()=>v(b),style:j,children:[Object(O.jsxs)("div",{className:"left-slot",children:[Object(O.jsx)("div",{className:"card-frame top-left-frame",style:{backgroundColor:null===(t=Be[oe])||void 0===t?void 0:t.labelBackgroundColor,backgroundImage:null===(a=Be[oe])||void 0===a?void 0:a.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame top-right-frame",style:{backgroundColor:null===(n=Be[se])||void 0===n?void 0:n.labelBackgroundColor,backgroundImage:null===(i=Be[se])||void 0===i?void 0:i.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame bottom-left-frame",style:{backgroundColor:null===(l=Be[ce])||void 0===l?void 0:l.labelBackgroundColor,backgroundImage:null===(o=Be[ce])||void 0===o?void 0:o.labelBackgroundImage}}),Object(O.jsx)("div",{className:"card-frame bottom-right-frame",style:{backgroundColor:null===(s=Be[de])||void 0===s?void 0:s.labelBackgroundColor,backgroundImage:null===(d=Be[de])||void 0===d?void 0:d.labelBackgroundImage}}),Object(O.jsxs)("a",{className:"card-art-container",href:me,target:"_blank",rel:"noreferrer",onClick:e=>e.preventDefault(),style:{width:je*du,height:xe*du,top:(ou-su)/2/2*du,left:(su-je)/2*du,backgroundColor:c},children:[Y&&Object(O.jsx)(pu,{className:"background-art",artLink:be,name:ue+" - background",fit:D,crop:z,canvasCoordinate:m(V,{...J,boundless:"fit"!==W})}),Object(O.jsx)(pu,{className:"foreground-art",artLink:me,name:ue,fit:N,crop:F,canvasCoordinate:ye})]}),G&&[...Array(9)].map((e,t)=>{if(4===t)return null;const a=V?He:Ae,r=V?$e:Pe;return Object(O.jsx)("div",{className:zr(`thumb-link-marker-icon thumb-link-marker-icon-${t+1}`,X.includes(`${t+1}`)?"marker-checked":""),style:{top:V?16:19,transform:`rotate(${We[t]}deg) translateY(${a[t]}px) translateX(${r[t]}px)`}},`link-${t}`)}),V&&Z&&Object(O.jsx)("div",{className:"pendulum-scale blue-scale",children:Z}),V&&ee&&Object(O.jsx)("div",{className:"pendulum-scale red-scale",children:ee})]}),Object(O.jsxs)("div",{className:"right-slot truncate",children:[Object(O.jsxs)("div",{className:"first-row truncate",children:[Object(O.jsx)("div",{className:"select-box",onClick:e=>e.stopPropagation(),children:Object(O.jsx)(Ll.a,{checked:h,onChange:e=>{x(b,e.target.checked?"add":"remove")}})}),ue]}),Object(O.jsxs)("div",{className:"second-row truncate",children:[ge||"NONE"===I?null:Object(O.jsx)("img",{className:"attribute-icon",src:`/ygocarder/asset/image/attribute/attr-${P}-${I.toLowerCase()}.png`,alt:"Icon"}),ne.length>0&&Object(O.jsx)("div",{className:"truncate",children:ve}),"st"!==pe&&Object(O.jsx)("div",{className:"padding"}),he!==L&&"none"!==pe&&Object(O.jsx)("img",{className:"card-icon",src:`/ygocarder/asset/image/subfamily/subfamily-${("custom"===he?"icon-list":he).toLowerCase()}.png`,alt:"Icon"}),he!==L&&"st"!==pe&&"none"!==pe&&"custom"!==pe&&Object(O.jsx)("span",{className:zr("star-content truncate",ve.toLowerCase().includes("tuner")?"tuner":""),children:"number"===typeof ae?ae:""!==ae?`"${ae}"`:""})]}),Object(O.jsxs)("div",{className:"third-row truncate",children:[fe&&Object(O.jsx)("div",{children:R}),fe?Object(O.jsx)("div",{children:"\xa0/\xa0"}):Object(O.jsx)("div",{children:"\xa0"}),fe&&Object(O.jsx)("div",{children:G?`Link ${X.length}`:H}),te&&Object(O.jsx)("div",{className:"set-id",children:te})]})]}),Object(O.jsx)("div",{className:zr("action-slot",w?"force-visible":""),onClick:e=>e.stopPropagation(),children:Object(O.jsxs)("div",{className:"action-container",children:[Object(O.jsx)(Mr.a,{placement:"left",title:g["manager.button.duplicate.tooltip"],children:Object(O.jsx)(Ys.a,{className:"action-button action-duplicate",onClick:()=>f(b)})}),Object(O.jsx)(Mr.a,{placement:"left",title:g["manager.button.download.tooltip"],children:Object(O.jsx)(rs.a,{className:"action-button action-download",onClick:()=>{const{id:e,...t}=b;Al()(JSON.stringify(Ha(t)))}})}),Object(O.jsx)(ko.a,{placement:"left",title:g["manager.button.delete.label"],onVisibleChange:e=>k(e),onConfirm:()=>y(b.id),okText:g["manager.button.delete.confirm.label"],cancelText:g["manager.button.delete.cancel.label"],children:Object(O.jsx)(Mr.a,{placement:"left",title:g["manager.button.delete.tooltip"],children:Object(O.jsx)(Pr.a,{className:"action-button action-delete"})})})]})})]})},bu=(e,t,a,r,n)=>{var i;const{artWidth:l,artY:o,ratio:s,artFrameWidth:c,artFrameY:d}=a,{width:u,height:m,x:b,y:p}=null!==(i=n?{...r,width:100,height:100,x:0,y:0}:r)&&void 0!==i?i:{},h=e*((null!==u&&void 0!==u?u:0)/100),g=t*((null!==m&&void 0!==m?m:0)/100),f=l*du/(h<=0?1:h);return{top:(null!==p&&void 0!==p?p:0)/100*-t*f,left:(null!==b&&void 0!==b?b:0)/100*-e*f,width:e*f,height:n?t*(l/s*du/(g<=0?1:g)):void 0,transform:`translateX(${-(l===c?0:(su-c)/2-cu)*du}px) translateY(${-(d-o)*du}px)`}},pu=e=>{let{artLink:t,name:a,crop:n,className:i,fit:l,canvasCoordinate:o,style:s}=e;const[c,d]=Object(r.useState)("https://imgur.com/pdSVzUZ.png"),u=Object(r.useRef)(null),[m,b]=Object(r.useState)(()=>{var e,t,a,r;return bu(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,o,n,l)});return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{e&&d(t)},500),()=>{e=!1}},[t]),Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{var t,a,r,i;e&&b(bu(null!==(t=null===(a=u.current)||void 0===a?void 0:a.naturalWidth)&&void 0!==t?t:1,null!==(r=null===(i=u.current)||void 0===i?void 0:i.naturalHeight)&&void 0!==r?r:1,o,n,l))},500),()=>{e=!1}},[n,o,l]),Object(O.jsx)("img",{ref:u,className:zr("card-art",i),src:c,alt:a,style:{...m,...s},onLoad:()=>{var e,t,a,r;b(bu(null!==(e=null===(t=u.current)||void 0===t?void 0:t.naturalWidth)&&void 0!==e?e:1,null!==(a=null===(r=u.current)||void 0===r?void 0:r.naturalHeight)&&void 0!==a?a:1,o,n,l))}})};var hu=a(315),gu=a(328),fu=a(649),vu=a(650),yu=a(651);const xu=Wr.b.div`
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
`,ju=e=>{let{language:t,onActive:a}=e;const{selectedMap:n,listName:i,activeId:l,cardDisplayList:o}=kn(Object(Bn.useShallow)(e=>{let{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}=e;return{selectedMap:t,listName:a,activeId:r,cardDisplayList:n}})),{batchQueue:s,batchDataMap:c,isBatchDownloading:d,isReady:u,clearQueue:m,stopBatchDownload:b,startBatchDownload:p}=Yr(),h=s[0],g=Object(r.useRef)("");Object(r.useEffect)(()=>{if(h&&d&&h!==g.current){g.current=h;const e=o.find(e=>e.id===h);e&&a(e)}},[o,d,h,a]),Object(r.useEffect)(()=>{let e=!0;return u&&(async()=>{const{batchName:t,batchDataMap:a}=Yr.getState(),r=new ol.a;if(Object.values(a).length>0){Object.values(a).forEach(e=>{let{blob:t,name:a}=e;r.file(a,t)});const n=await r.generateAsync({type:"blob"});e&&(_a(`${t}.zip`,n,"application/zip"),b())}})(),()=>{e=!1}},[u,b]);const f=0===Object.keys(n).length;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Er.a,{visible:d,onCancel:()=>b(),onOk:()=>m(),cancelText:t["manager.batch.batch-download.cancel-all.label"],okText:t["manager.batch.batch-download.premature-stop.label"],okButtonProps:{type:"default"},children:Object(O.jsx)(xu,{className:"exporting-list",children:Object.values(o).map(e=>{let{id:t,name:a}=e;return f||n[t]?Object(O.jsxs)("div",{className:"exporting-item",children:[Object(O.jsx)("div",{className:"export-status",children:l===t?Object(O.jsx)(fu.a,{}):c[t]?Object(O.jsx)(vu.a,{}):Object(O.jsx)(yu.a,{})}),Object(O.jsx)("div",{className:"export-name",children:a})]},t):null})})}),Object(O.jsx)(dl.a,{className:"batch-download-button",onClick:()=>p(i,f?o.map(e=>e.id):Object.keys(n)),children:f?t["manager.batch.batch-download.label"]:t["manager.batch.batch-download.partial-download.label"]})]})};var Ou=a(652);const wu=Object(Wr.b)(Is.a.Item)`
    &.menu-active {
        background-color: var(--main-active);
    }
`,ku=Wr.b.div`
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
`,Su=e=>{let{data:t,index:a,style:r}=e;const{activeId:n,selectedMap:i,language:l,list:o,onDelete:s,onDuplicate:c,onActive:d,onSelect:u}=t;return Object(O.jsx)(mu,{index:a,card:o[a],active:o[a].id===n,selected:!!i[o[a].id],language:l,onDuplicate:c,onActive:d,onDelete:s,onSelect:u,style:r})},Fu=e=>{let{language:t,onActive:a,onRequestImport:n}=e;const{activeId:i,cardDisplayList:l,selectedMap:o,selectCard:s,deleteCard:c,duplicateCard:d,setSelectMap:u,resetFilter:m}=kn(Object(Bn.useShallow)(e=>{let{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:l,setSelectMap:o,resetFilter:s}=e;return{activeId:t,cardDisplayList:a,selectedMap:r,selectCard:n,deleteCard:i,duplicateCard:l,setSelectMap:o,resetFilter:s}})),{exportScheme:b,updateSetting:p}=Ln(Object(Bn.useShallow)(e=>{let{setting:{exportScheme:t},updateSetting:a}=e;return{exportScheme:t,updateSetting:a}})),[h,g]=Object(r.useState)(0),f=Object(r.useCallback)((e,t)=>{s(e.id,t)},[s]),v=e=>{c(e),g(e=>e+1)};return Object(r.useEffect)(()=>{let e=!0;return setTimeout(()=>{if(e&&h>0){const{activeId:e,cardList:t,setCardList:r}=kn.getState(),n=t.find(t=>t.id===e);if(n)a(n);else{const e={id:Object(V.a)(),...At()};r([e],e.name)}}},500),()=>{e=!1}},[a,h]),Object(O.jsxs)(ku,{style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[l.length>0&&Object(O.jsxs)("div",{className:"select-panel",children:[Object(O.jsx)(dl.a,{size:"small",onClick:()=>u([],"replace"),children:t["manager.batch.batch-download.clear.label"]}),Object(O.jsx)(dl.a,{size:"small",onClick:()=>u(l,"add"),children:t["manager.batch.batch-download.all.label"]}),Object(O.jsx)("div",{children:Object(O.jsx)(ul.a,{overlay:Object(O.jsx)(Is.a,{children:[{value:"with-name",label:t["manager.batch.batch-download.export-option.with-name.label"]},{value:"with-id",label:t["manager.batch.batch-download.export-option.with-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(O.jsx)(wu,{onClick:()=>p({exportScheme:t}),className:t===b?"menu-active":"",children:a},t)})}),children:Object(O.jsxs)("div",{className:"scheme-button",children:[t["manager.batch.batch-download.export-scheme.label"]," ",Object(O.jsx)(Ou.a,{})]})})})]}),Object(O.jsx)("div",{className:"list-container",children:Object(O.jsx)(hu.a,{children:e=>{let{height:r,width:n}=e;return Object(O.jsx)(gu.a,{className:"List",height:r,itemCount:l.length,itemSize:68,itemData:{list:l,language:t,activeId:i,selectedMap:o,onDuplicate:d,onActive:a,onDelete:v,onSelect:f},overscanCount:5,width:n,children:Su})}})}),0===l.length&&Object(O.jsxs)("div",{className:"no-card",children:[Object(O.jsx)("div",{children:t["manager.button.search.no-card.message"]}),Object(O.jsx)("div",{className:"reset-filter",onClick:m,children:t["manager.button.search.button.reset.label"]})]}),0!==l.length&&Object(O.jsx)(ju,{language:t,onActive:a}),Object(O.jsx)(dl.a,{className:"add-card",onClick:n,children:t["manager.button.add.label"]})]})};var Cu=a(605),Lu=a(653);const{Panel:Nu}=Cu.a,Tu=Wr.b.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`,Ru=Object(Wr.b)(Er.a)`
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
                ${Kl} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`,Iu=e=>{let{language:t}=e;const[a,n]=Object(r.useState)(!1);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(Tu,{className:"manager-toggle-button",onClick:()=>n(!0),children:[t["manager.header.button.template.label"],"\xa0",Object(O.jsx)(Lu.a,{})]}),Object(O.jsx)(Ru,{visible:a,onCancel:()=>n(!1),okButtonProps:{style:{display:"none"}},cancelText:t["manager.template.button.cancel.label"],children:Object(O.jsxs)("div",{className:"sample-modal-container",children:[Object(O.jsxs)("div",{children:[t["manager.template.description.line-1"],Object(O.jsx)("br",{}),t["manager.template.description.line-2"]]}),Object(O.jsx)("div",{className:"download-button",children:Object(O.jsx)("a",{href:"https://drive.google.com/file/d/1c8SdS0n1UERomLKdlm28dSul5ojBfSiC/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:Object(O.jsx)(dl.a,{children:t["manager.template.download.label"]})})}),Object(O.jsx)(Cu.a,{ghost:!0,children:Object(O.jsx)(Nu,{header:Object(O.jsx)("div",{children:t["manager.template.description.line-3"]}),children:Object(O.jsx)("table",{className:"option-container",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)("b",{children:t["manager.template.header.field.label"]})}),Object(O.jsx)("th",{children:Object(O.jsx)("b",{children:t["manager.template.header.value.label"]})})]}),[{field:"Format",value:Object(O.jsx)("div",{children:["tcg","ocg"].map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Frame",altField:"Bottom Frame",value:Object(O.jsx)("div",{children:ze.map(e=>{let{name:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Attribute",value:Object(O.jsx)("div",{children:[...k,...S].filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Spell/Trap Icon",value:Object(O.jsx)("div",{children:N.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Sticker",value:Object(O.jsx)("div",{children:R.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Foil",value:Object(O.jsx)("div",{children:y().filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{name:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Card Finish",value:Object(O.jsxs)("div",{children:[Object.values(h).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)}),Object(O.jsx)("div",{children:t["manager.template.description.joinable"]})]})},{field:"Art Finish",value:Object(O.jsx)("div",{children:Object.values(g).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Star Type",value:Object(O.jsx)("div",{children:["number","text"].map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Star Alignment",value:Object(O.jsx)("div",{children:["left","center","right"].map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Card Icon Type",value:Object(O.jsx)("div",{children:B.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Background Type",value:Object(O.jsx)("div",{children:o().map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Condense Rate",value:Object(O.jsx)("div",{children:Object.keys(ae).map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Name Style Type",value:Object(O.jsx)("div",{children:["predefined","custom"].map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Name Style - Font",value:Object(O.jsx)("div",{children:Object(O.jsx)(Yl,{data:"Arial",children:"Arial"})})},{field:"Name Style - Preset",value:Object(O.jsx)("div",{children:Object.keys(K).map(e=>Object(O.jsx)(Yl,{data:e,children:e},e))})},{field:"Name Style - Pattern",value:Object(O.jsx)("div",{children:G.filter(e=>{let{isOption:t}=e;return t}).map(e=>{let{key:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Pendulum Size",value:Object(O.jsx)("div",{children:q.map(e=>{let{key:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Other Finish - Attribute",value:Object(O.jsx)("div",{children:Object.values(g).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Other Finish - Background",value:Object(O.jsx)("div",{children:Object.values(g).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Other Finish - Icon",value:Object(O.jsx)("div",{children:Object.values(g).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Other Finish - Sticker",value:Object(O.jsx)("div",{children:Object.values(g).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Region",value:Object(O.jsx)("div",{children:Object.values(F).map(e=>{let{key:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})})},{field:"Star List",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.star-list"]}),Object.values(W).filter(e=>{let{isMixable:t}=e;return t}).map(e=>{let{value:t}=e;return Object(O.jsx)(Yl,{data:t,children:t},t)})]})},{field:"Dye List",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.dye-list"]}),Object(O.jsx)("ul",{children:Object.entries(x).sort((e,t)=>e[1]-t[1]).map(e=>{var a,r;let[n]=e;return Object(O.jsx)("li",{children:t[null!==(a=null===(r=De[n])||void 0===r?void 0:r.labelKey)&&void 0!==a?a:""]},n)})})]})},{field:"Flag",value:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:t["manager.template.description.flag"]}),Xd.map(e=>{let{sampleDisplay:a,index:r}=e;return Object(O.jsx)("div",{children:a(t)},r)})]})}].map(e=>{let{field:t,altField:a,value:r}=e;return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)(Kl,{children:t}),a&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)(Kl,{children:a})]})]}),Object(O.jsx)("td",{children:r})]},t)})]})})},"sample-option")})]})})]})};var Bu=a(166);const zu=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.015,t=e;return{check:()=>{const a=Math.random();return t<a?(t+=e,!1):(t=e,!0)}}}(),Eu=Wr.b.div`
    position: absolute;
    right: 0;
    top: 125px;
`,Du=Object(Wr.b)(ro)`
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
`,Mu=Object(r.forwardRef)((e,t)=>{let{language:a,onVisibleChange:n,onSelect:i,onRequestImport:l}=e;const o="list-upload-id",s=Object(r.useRef)(null),{cardList:c,changeEditStatus:d,pendingActiveCard:u,setActiveId:m,setCardList:b,setFilterFunction:p,setListName:h,setPendingActiveCard:g,sortList:f,toggleVisible:v,visible:y}=kn(Object(Bn.useShallow)(e=>{let{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:l,setListName:o,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}=e;return{cardList:t,changeEditStatus:a,pendingActiveCard:r,setActiveId:n,setCardList:i,setFilterFunction:l,setListName:o,setPendingActiveCard:s,sortList:c,toggleVisible:d,visible:u}})),x=Ln(e=>e.setting.exportFormat),[j,w]=Object(r.useState)(0),[k,S]=Object(r.useState)(!1),[F,C]=Object(r.useState)(!1),L=Vr()(e=>{p({type:"text",value:e.target.value})},250),N=Object(r.useCallback)(e=>{i(e),m(e.id)},[i,m]);return Object(r.useEffect)(()=>{u&&(i(u),m(u.id),g())},[i,u,m,g]),Object(r.useEffect)(()=>{localStorage.setItem("manager-panel-visible",y.toString()),n(y)},[n,y]),Object(r.useEffect)(()=>{const e=kn.subscribe(e=>e.filterResetSignal,e=>{e&&w(e=>e+1)});return()=>{e()}},[]),Object(r.useImperativeHandle)(t,()=>({}),[]),Object(O.jsx)(Eu,{children:Object(O.jsx)(Du,{className:"card-manager-panel",title:Object(O.jsxs)("div",{className:"card-manager-header truncate",children:[Object(O.jsx)(Au,{className:"manager-label-container truncate",language:a,children:c.length}),Object(O.jsxs)("div",{className:"manager-button-container",children:[Object(O.jsx)("div",{className:"manager-button",children:Object(O.jsx)(Iu,{language:a})}),Object(O.jsx)(ul.a,{overlay:Object(O.jsx)(Is.a,{children:[{value:On.level.key,label:a["manager.button.sort.level.label"]},{value:On.name.key,label:a["manager.button.sort.name.label"]},{value:On.atk.key,label:a["manager.button.sort.atk.label"]},{value:On.def.key,label:a["manager.button.sort.def.label"]},{value:On.set.key,label:a["manager.button.sort.set-id.label"]}].map(e=>{let{value:t,label:a}=e;return Object(O.jsx)(Is.a.Item,{onClick:()=>f(t),children:a},t)})}),children:Object(O.jsx)("div",{className:"manager-button",children:Object(O.jsx)(jd.a,{})})}),Object(O.jsx)(Mr.a,{title:a["manager.header.button.download.tooltip"],children:Object(O.jsx)("div",{className:"manager-button",onClick:async()=>{let e=!0;if(C(!0),zu.check()&&(e=window.confirm(a["prompt.remind.backup.label"])),e)try{const{error:e,value:t}=(e=>{const t=[],a=tn.length;let r="";for(let n=0;n<e.length;n++){const i=(e,t)=>{const a=ln[e];"number"===typeof a&&("string"===typeof t&&(l[a]=t),"number"===typeof t&&(l[a]=`${t}`),"boolean"===typeof t&&(l[a]=`${t}`),null==t&&(l[a]=""))},l=Array(a).map(()=>""),{art:o,artCrop:s,artFinish:c,artFit:d,artSource:u,atk:m,attribute:b,background:p,backgroundCrop:h,backgroundFit:g,backgroundSource:f,backgroundType:v,cardIcon:y,creator:x,def:j,effect:O,effectStyle:w,effectTextStyle:k,externalInfo:S,finish:F,flag:C,foil:L,format:N,region:T,frame:R,furiganaHelper:I,hasBackground:B,isDuelTerminalCard:z,isFirstEdition:E,isLegacyCard:D,isLimitedEdition:M,isLink:W,isPendulum:A,isSpeedCard:H,leftFrame:P,linkMap:$,linkRating:K,name:U,nameStyle:Y,nameStyleType:G,opacity:V,otherFinish:X,otherTextStyle:q,password:J,pendulumEffect:_,pendulumFrame:Q,pendulumRightFrame:Z,pendulumScaleBlue:ee,pendulumScaleRed:te,pendulumSize:ae,pendulumStyle:re,pendulumTextStyle:ne,rightFrame:ie,setId:le,star:oe,starAlignment:se,statTextStyle:ce,sticker:de,subFamily:ue,starList:me,typeAbility:be,typeTextStyle:pe,dyeList:he}=e[n],ge=JSON.stringify(S),fe=C.join("|"),ve=he.join("|"),ye=me.join("|");i("Format",N),i("Region",T),i("Frame",R),i("Name",U),i("Attribute",b),i("Star",`${oe}`),i("Spell/Trap Icon",ue),i("Art Link",o),i("Type Ability",be.join("/")),i("Effect",O),i("Set Id",le),i("ATK",m),i("DEF",j),i("Password",J),i("Sticker",de),i("Copyright",x),i("Is Pendulum",A),i("Pendulum Effect",_),i("Pendulum Scale Red",te),i("Pendulum Scale Blue",ee),i("Is Link",null!==W&&void 0!==W?W:void 0),i("Link - Top Left Arrow",$.includes("1")),i("Link - Top Arrow",$.includes("2")),i("Link - Top Right Arrow",$.includes("3")),i("Link - Left Arrow",$.includes("4")),i("Link - Right Arrow",$.includes("6")),i("Link - Bottom Left Arrow",$.includes("7")),i("Link - Bottom Arrow",$.includes("8")),i("Link - Bottom Right Arrow",$.includes("9")),i("Link Rating",K),i("Is First Edition",E),i("Is Speed Card",H),i("Is Limited Edition",M),i("Is Duel Terminal Card",z),i("Is Legacy Card",D),i("Foil",L),i("Art Finish",c),i("Card Finish",F.join(",")),i("Art Crop - X (%)",s.x),i("Art Crop - Y (%)",s.y),i("Art Crop - Width (%)",s.width),i("Art Crop - Height (%)",s.height),i("Is Using Full Art",d),i("Star Type","number"===typeof oe&&oe>=0&&oe<=13?"number":"text"),i("Star Alignment",se),i("Card Icon Type",y),i("Opacity - Body",V.body),i("Opacity - Pendulum",V.pendulum),i("Opacity - Text",V.text),i("Opacity - Name",V.name),i("Opacity - Base Fill",V.baseFill),i("Opacity - Art Border",V.artBorder),i("Opacity - Name Border",V.nameBorder),i("Opacity - Boundless",V.boundless),i("Has Background",B),i("Background Link",p),i("Is Using Full Background",g),i("Background Type",v),i("Background Crop - X (%)",h.x),i("Background Crop - Y (%)",h.y),i("Background Crop - Width (%)",h.width),i("Background Crop - Height (%)",h.height),i("Bottom Frame",Q),i("Condense Rate",w.condenseTolerant),i("Use Furigana Helper",I),i("Name Style Type",G),i("Name Style - Font",Y.font),i("Name Style - Fill Style",Y.fillStyle),i("Name Style - Headtext Fill Style",Y.headTextFillStyle),i("Name Style - Shadow Color",Y.shadowColor),i("Name Style - Shadow Offset Y",Y.shadowOffsetY),i("Name Style - Shadow Offset X",Y.shadowOffsetX),i("Name Style - Shadow Blur",Y.shadowBlur),i("Name Style - Has Shadow",Y.hasShadow),i("Name Style - Line Color",Y.lineColor),i("Name Style - Line Width",Y.lineWidth),i("Name Style - Line Offset Y",Y.lineOffsetY),i("Name Style - Line Offset X",Y.lineOffsetX),i("Name Style - Has Outline",Y.hasOutline),i("Name Style - Gradient Angle",Y.gradientAngle),i("Name Style - Gradient Color",Y.gradientColor),i("Name Style - Has Gradient",Y.hasGradient),i("Name Style - Emboss Pitch",Y.embossPitch),i("Name Style - Emboss Yaw",Y.embossYaw),i("Name Style - Emboss Thickness",Y.embossThickness),i("Name Style - Has Emboss",Y.hasEmboss),i("Name Style - Preset",Y.preset),i("Name Style - Pattern",Y.pattern),i("Stat Style - Is Custom",ce[0]),i("Stat Style - Fill Color",ce[1]),i("Stat Style - Has Shadow",ce[2]),i("Stat Style - Shadow Color",ce[3]),i("Type Style - Is Custom",pe[0]),i("Type Style - Fill Color",pe[1]),i("Type Style - Has Shadow",pe[2]),i("Type Style - Shadow Color",pe[3]),i("Effect Style - Is Custom",k[0]),i("Effect Style - Fill Color",k[1]),i("Effect Style - Has Shadow",k[2]),i("Effect Style - Shadow Color",k[3]),i("Effect Style - Upsize",w.upSize),i("Effect Style - Font Style",w.fontStyle),i("Effect Style - Background",w.background),i("Effect Style - Min Line",w.minLine),i("Pendulum Size",ae),i("Pendulum Effect Style - Is Custom",ne[0]),i("Pendulum Effect Style - Fill Color",ne[1]),i("Pendulum Effect Style - Has Shadow",ne[2]),i("Pendulum Effect Style - Shadow Color",ne[3]),i("Pendulum Effect Style - Upsize",re.upSize),i("Pendulum Effect Style - Font Style",re.fontStyle),i("Pendulum Effect Style - Background",re.background),i("Pendulum Effect Style - Min Line",re.minLine),i("Other Style - Is Custom",q[0]),i("Other Style - Fill Color",q[1]),i("Other Style - Has Shadow",q[2]),i("Other Style - Shadow Color",q[3]),i("Other Finish - Attribute",X[0]),i("Other Finish - Icon",X[1]),i("Other Finish - Sticker",X[2]),i("Other Finish - Background",X[3]),i("Left Frame",P),i("Right Frame",ie),i("Bottom Right Frame",Z),i("Dye List",ve),i("Star List",ye),i("Flag",fe),i("External Info (JSON)","{}"===ge?"":ge),("offline"===u||B&&"offline"===f)&&(r="offline-data"),t.push(l.map(on).join(","))}return{value:[tn.join(","),t.join("\n")].join("\n"),error:r}})(kn.getState().cardList);if(e){let t="",r="";if("offline-data"===e)t=a["error.export.offline-data.message"],r=a["error.export.offline-data.description"];(t||r)&&Dr.a.error({message:t,description:r})}switch(x){case"xlsx":{const e=Bu.a.read(t,{type:"string"});Bu.a.writeFile(e,`${kn.getState().listName}.xlsx`);break}default:_a(kn.getState().listName,new Blob([t],{type:"text/csv"}),"text/csv")}d("download")}catch(t){}C(!1)},children:F?Object(O.jsx)(fu.a,{}):Object(O.jsx)(rs.a,{})})}),Object(O.jsx)(Mr.a,{overlay:a["manager.header.button.upload.tooltip"],children:Object(O.jsxs)("div",{className:"manager-button",onClick:()=>{const e=document.getElementById(o);e&&!k&&e.click()},children:[Object(O.jsx)("input",{ref:s,type:"file",id:o,accept:[".csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].join(","),className:"import-upload-input",onChange:async e=>{var t;const r=null===(t=s.current)||void 0===t?void 0:t.files,{isListDirty:n}=kn.getState(),l=()=>{w(e=>e+1),S(!1),Dr.a.error({message:a["error.csv-import.message"],description:a["error.csv-import.description"]})};let o=!0;if(n&&(o=window.confirm(a["prompt.warning.on-import.label"])),o&&r&&r[0]){S(!0);try{const e=await r[0].arrayBuffer(),t=r[0].name.replace(/\.[^/.]+$/,""),a=Bu.a.read(e,{codepage:65001}),n=Bu.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1,raw:!1}),o=mn(n);o.length>0?(b(o,o[0].id),h(t),w(e=>e+1),i(o[0]),S(!1)):l()}catch(e){console.error(e),l()}}else w(e=>e+1),S(!1)}},`upload-${j}`),k?Object(O.jsx)(fu.a,{}):Object(O.jsx)(Zs.a,{})]})},`${k}`),Object(O.jsx)("div",{className:"manager-button close-button",onClick:()=>v(!1),children:Object(O.jsx)(Pr.a,{})})]}),Object(O.jsx)("div",{className:"card-manager-filter",children:Object(O.jsx)(Zo.a,{className:"card-manager-search",placeholder:a["manager.button.search.text.placeholder"],onChange:L,onPressEnter:e=>p({type:"text",value:e.currentTarget.value}),allowClear:!0},`search-${j}`)})]}),visible:y,maskClosable:!1,mask:!1,destroyOnClose:!1,forceRender:!0,closeIcon:null,onClose:()=>v(!1),width:280,children:Object(O.jsx)(Fu,{language:a,onActive:N,onRequestImport:l})})})}),Wu=Wr.b.div`
    .header-warning {
        color: var(--main-danger);
    }
`,Au=e=>{let{language:t,children:a,...n}=e;const{isListDirty:i,cardList:l}=kn(Object(Bn.useShallow)(e=>{let{isListDirty:t,cardList:a}=e;return{isListDirty:t,cardList:a}}));return Object(r.useEffect)(()=>{let e=e=>(e.preventDefault(),t["prompt.warning.on-leave.label"]);return i&&l.length>1&&window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}},[l.length,i,t]),Object(O.jsxs)(Wu,{...n,children:[a,i&&l.length>1&&Object(O.jsx)("span",{className:"header-warning",children:"\xa0*"})]})},Hu=Wr.b.div`
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
        ${Ar} {
            border-radius: 0 var(--br-lg) var(--br-lg) 0;
            border-left: var(--bw) solid var(--sub-level-3);
        }
    }
`,Pu=Wr.b.div`
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
`,$u=Wr.b.div`
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
`,Ku=Wr.b.div`
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
`,Uu=Wr.b.div`
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
`,Yu=Wr.b.span`
    color: var(--main-danger);
`,Gu=Object(Wr.b)(ql)`
    position: absolute;
    z-index: 101;
`,Vu=Object(Wr.b)(Gu)`
    top: var(--spacing-xs);
    right: var(--spacing-xs);
`,Xu=Object(Wr.b)(Gu)`
    top: var(--spacing-xs);
    right: calc(var(--overlay-size) + 2 * var(--spacing-xs));
`;var qu=a(237),Ju=a(597),_u=a(600),Qu=a(610),Zu=a(613),em=a(321);Object(qu.configure)({ignoreTags:[]});const tm={EXPORT:["ctrl+d","command+d"],IMPORT:["ctrl+e","command+e"],MERGE:["ctrl+g","command+g"],VIEW:["ctrl+b","command+b"],DOWNLOAD:["ctrl+s","command+s"]},{height:am,width:rm}=s;var nm=function(){var e,t,a,n,i,l,o;const{allowHotkey:s,softMode:c,globalScale:d,resolution:u,slidingType:m}=Ln(Object(Bn.useShallow)(e=>{let{setting:{allowHotkey:t,reduceMotionColor:a,globalScale:r,resolution:n,slidingType:i}}=e;return{softMode:a,allowHotkey:t,globalScale:r,resolution:n,slidingType:i}})),{isInitiating:b,isLoading:p,language:h,isMetadataReady:g,languageInfo:f,initiate:v,loadDefaultLanguage:y}=_r(Object(Bn.useShallow)(e=>{let{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:l,loadDefaultLanguage:o}=e;return{isInitiating:t,isLoading:a,language:r,isMetadataReady:n,languageInfo:i,initiate:l,loadDefaultLanguage:o}})),x=(()=>{let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0),e})(),j=!x&&!("ontouchstart"in window||navigator.maxTouchPoints>0),[w,k]=Object(r.useState)(!0),[,S]=En("activeDropzone"),[F,C]=Object(r.useState)(""),[L,N]=Object(r.useState)("online"),{db:T,dbReady:R}=Rn(),[I,B]=Object(r.useState)(!1),z=Object(r.useRef)(null),E=Object(r.useRef)(null),D=Object(r.useRef)(null),M=Object(r.useRef)(null),W=Object(r.useRef)(null),A=Object(r.useRef)(null),H=Object(r.useRef)(null),P=Object(r.useRef)(null),$=Object(r.useRef)(null),K=Object(r.useRef)(null),U=Object(r.useRef)(null),Y=Object(r.useRef)(null),G=Object(r.useRef)(null),V=Object(r.useRef)(null),X=Object(r.useRef)(null),q=Object(r.useRef)(null),J=Object(r.useRef)(null),_=Object(r.useRef)(null),Q=Object(r.useRef)(null),Z=Object(r.useRef)(null),ee=Object(r.useRef)(null),te=Object(r.useRef)(null),[ae]=Object(r.useState)({artworkCanvasRef:W,backgroundCanvasRef:A,exportCanvasRef:H,frameCanvasRef:$,cardIconCanvasRef:K,pendulumScaleCanvasRef:U,pendulumEffectCanvasRef:Y,typeCanvasRef:G,effectCanvasRef:V,nameCanvasRef:X,statCanvasRef:q,setIdCanvasRef:J,passwordCanvasRef:_,creatorCanvasRef:Q,stickerCanvasRef:Z,finishCanvasRef:ee,lightboxRef:te,previewCanvasRef:P}),re=Object(r.useRef)(null),ne=Object(r.useRef)(null),ie=Object(r.useRef)(null),[le,oe]=Object(r.useState)(0);Object(r.useEffect)(()=>{const e=()=>{S(0)};let t=window.setTimeout(e,200);const a=()=>{S(1),window.clearTimeout(t),t=window.setTimeout(e,200)};return document.addEventListener("dragover",a),()=>{document.removeEventListener("dragover",a)}},[S]),Object(r.useEffect)(()=>{v()},[v]),Object(r.useEffect)(()=>{g&&y()},[g,y]),Object(r.useEffect)(()=>{["font-family","letter-spacing","--width-label"].forEach(e=>{var t,a;document.body.style.setProperty(e,null!==(t=null===(a=f.style)||void 0===a?void 0:a[e])&&void 0!==t?t:"")})},[f]),Object(r.useEffect)(()=>{oe(e=>e+1),"auto"===m&&z.current&&(z.current.style.transform="")},[m]),Object(r.useEffect)(()=>{(async()=>{try{if(T&&!1===p&&h){const e=T.transaction("presetLayoutStore","readonly"),t=[];for await(const n of e.store){const{content:e,key:a}=n.value;t.push({key:a,content:JSON.parse(e)})}await e.done,zn.getState().updateGlobalMemory({layoutPresetList:t});const a=T.transaction("presetNameStyleStore","readonly"),r=[];for await(const n of a.store){const{content:e,key:t}=n.value;r.push({key:t,content:JSON.parse(e)})}await a.done,zn.getState().updateGlobalMemory({nameStylePresetList:r})}}catch(e){console.error("Error reading database",e),Dr.a.error({message:h["error.database-initialize.message"],description:h["error.database-initialize.description"]})}})()},[T,p,h]),Object(r.useEffect)(()=>{var e;const t=null===(e=H.current)||void 0===e?void 0:e.getContext("2d"),a=Cn.getState().setCard;t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Kn(t)),!1===b&&nl.a.load({custom:{families:["Matrix-Bold","MatrixBoldSmallCaps","MatrixBook","MatrixRegularSmallCaps","RoGSanSrfStd-Bd","SVN-Times New Roman Italic","StoneSerif-Italic","YuGiOhITCStoneSerifBSc","matrix","palatino-linotype-bold","stone-serif-bold","stone-serif-regular"],urls:["asset/font.css"]},active:()=>{const e=(()=>{try{const a=localStorage.getItem("card-version"),r=localStorage.getItem("card-data"),n=r?Ka(JSON.parse(r)):null,i=new URLSearchParams(window.location.search).get("data");if(i){var e,t;const{card:a}=Sn(i),r=Ka(a),{artSource:l,backgroundSource:o}=r;if("online"===l&&"online"===o)return Sn(i).card;const s={...r};return"offline"===l&&(s.artData=null!==(e=null===n||void 0===n?void 0:n.artData)&&void 0!==e?e:""),"offline"===o&&(s.backgroundData=null!==(t=null===n||void 0===n?void 0:n.backgroundData)&&void 0!==t?t:""),s}return null!==n&&"2.3.22"===a?n:Wt()}catch(a){return console.error(a),Wt()}})();a(e),kn.getState().setCardList([e],e.id),k(!1)},fontinactive(e,t){console.error("TCG fontinactive",e,t),Dr.a.error({message:Zr()["error.load.font.tcg"](e)})},inactive:()=>{C(Zr()["error.load.font.all-tcg"]),k(!1)}})},[b]);const{styleContent:se}=(e=>{let{isLanguageInitiating:t,onActive:a,onBeforeLoad:n,onFontInactive:i,onInactive:l}=e;const{font:o,format:s}=Cn(Object(Bn.useShallow)(e=>({format:e.card.format,font:e.card.nameStyle.font}))),[c,d]=Object(r.useState)(""),u=Object(r.useRef)(!1),m=Object(r.useRef)(0);return Object(r.useEffect)(()=>{("ocg"===s||"OCG"===o)&&!1===u.current&&m.current<=3&&!1===t&&(m.current+=1,d("/ygocarder/asset/ocg-font.css"),n(),nl.a.load({custom:{families:["DFHSGothic-W3-WIN-RKSJ-H","DFKakuTaiHiStd-W4","FOT-Rodin Pro M","Yu-Gi-Oh! DF Leisho 3"],urls:["asset/ocg-font.css"]},active:()=>{u.current=!0,a()},inactive:()=>{u.current=!0,l()},fontinactive:i}))},[s,o,t,a,n,i,l]),{styleContent:c}})({isLanguageInitiating:b,onBeforeLoad:()=>{var e;k(!0);const t=null===(e=H.current)||void 0===e?void 0:e.getContext("2d");t&&(t.setTransform(1,0,0,1,0,0),t.imageSmoothingQuality="high",Kn(t))},onActive:()=>{k(!1)},onInactive:()=>{C(Zr()["error.load.font.all-ocg"]),k(!1)},onFontInactive:(e,t)=>{console.error("OCG fontinactive",e,t),Dr.a.error({message:Zr()["error.load.font.ocg"](e)})}}),[ce,de]=Object(r.useState)(!1);Object(r.useEffect)(()=>{const e=document.body.classList;c?e.add("reduced-color-motion"):e.remove("reduced-color-motion")},[c]);const ue=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||null===(t=te.current)||void 0===t||t.setVisible(t=>"boolean"===typeof e?e:!t)},[s]),me=Object(r.useRef)(!1),be=document.getElementById("sentry-bug-report");Object(r.useEffect)(()=>{be&&h&&!1===me.current&&!1===pl.f()&&(me.current=!0,Ju.a({dsn:"https://32e20d849c5724b2e63eab9d0a57c165@o4508424630697984.ingest.us.sentry.io/4508424632401920",integrations:[_u.a(),Qu.a(),Zu.a({colorScheme:"system",autoInject:!1}).attachTo(be,{formTitle:h["contributor.bug-report.tooltip"],nameLabel:h["contributor.bug-report.name.label"],namePlaceholder:h["contributor.bug-report.name.placeholder"],isEmailRequired:!1,showEmail:!1,messageLabel:h["contributor.bug-report.message.label"],messagePlaceholder:h["contributor.bug-report.message.placeholder"],addScreenshotButtonLabel:h["contributor.bug-report.screenshot.label"],removeScreenshotButtonLabel:h["contributor.bug-report.remove-screenshot.label"],cancelButtonLabel:h["contributor.bug-report.cancel.label"],submitButtonLabel:h["contributor.bug-report.submit.label"],isRequiredLabel:h["contributor.bug-report.required.label"],successMessageText:h["contributor.bug-report.success.label"]})],tracesSampleRate:1,tracePropagationTargets:["lauqerm.github.io"],replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1}))},[h,be]);const pe=Object(r.useCallback)((e,t)=>{var a;const{addToList:r,forcePurityCheck:n,writeOnCurrentCard:i}=null!==t&&void 0!==t?t:{},{setCard:l,card:o}=Cn.getState(),s=i?{...e,id:o.id}:e;r&&kn.getState().addCard(s),l(s,n),oe(e=>e+1),null===(a=M.current)||void 0===a||a.forceCardData(s),Br()},[]),he=Object(r.useCallback)(async function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=ie.current)||void 0===t||t.requestImport("replace"))},[s]),ge=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=ie.current)||void 0===t||t.requestImport("merge"))},[s]),fe=Object(r.useCallback)(function(e){var t;let a=arguments.length>2?arguments[2]:void 0;if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])||s)if(null===e||void 0===e||e.preventDefault(),"online"===L&&null!==(t=M.current)&&void 0!==t&&t.isLoading())window.alert(h["error.export.image-loading.message"]);else try{var r;const e=null!==a&&void 0!==a?a:Cn.getState().card;null===(r=ne.current)||void 0===r||r.setCardData(e)}catch(n){console.error(n),Dr.a.error({message:h["error.export.message"],description:h["error.export.description"]})}},[s,h,L]),ve=Object(r.useCallback)(function(e){var t;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!s||(null===e||void 0===e||e.preventDefault(),null===(t=re.current)||void 0===t||t.download())},[s]),ye=Object(r.useMemo)(()=>({IMPORT:e=>he(e,!0),MERGE:e=>ge(e,!0),EXPORT:e=>fe(e,!0),VIEW:()=>ue(!0,!0),DOWNLOAD:e=>ve(e,!0)}),[ve,fe,he,ge,ue]),xe=Object(r.useCallback)(()=>{de(!0),alert(h["prompt.download.tainted.message"])},[h]),je=Object(r.useCallback)(e=>{var t;"anonymous"===e&&(de(!1),null===(t=te.current)||void 0===t||t.refresh());oe(e=>e+1)},[]),Oe=Object(r.useCallback)((e,t)=>{oe(e=>e+1),N(t)},[]),we=Object(r.useCallback)(()=>{oe(e=>e+1),de(!0)},[]),ke=Object(r.useCallback)(e=>{B(e)},[]),Se=p||w||!R;return Object(O.jsx)(qu.HotKeys,{keyMap:tm,handlers:ye,children:Object(O.jsxs)("div",{id:"app",onDrop:()=>{},onScroll:e=>{const t=e.currentTarget.scrollTop;if(z.current&&E.current&&"auto"===m){const a=document.body.clientWidth<1600?0:10,r=e.currentTarget.getBoundingClientRect().height,n=z.current.getBoundingClientRect().height;if(r>n+a){const e=Math.max(0,E.current.getBoundingClientRect().height-n);z.current.style.transform=`translateY(${Math.max(0,Math.min(e,t)-a)}px)`}else z.current.style.transform=""}},className:`language-${f.codeName} manager_${I?"visible":"hidden"}`,style:{backgroundImage:'url("/ygocarder/asset/image/texture/debut-dark.png"), linear-gradient(180deg, #00000022, #00000044)',height:x?"-webkit-fill-available":"100vh","--card-height":am*d+"px","--card-width":rm*d+"px","--global-scale":`${d}`,"--cropper-width":"375px"},children:[se&&Object(O.jsx)("link",{rel:"stylesheet",type:"text/css",href:se}),Object(O.jsxs)("div",{className:"app-container",style:{backgroundImage:'url("/ygocarder/asset/image/texture/dark-denim-3.png")'},children:[Se&&Object(O.jsx)(Ku,{className:"app-loading",children:F.length>0?Object(O.jsx)(Yu,{children:F}):null!==(e=f.initialMessage)&&void 0!==e?e:""}),Object(O.jsxs)("div",{ref:E,className:zr("card-preview-panel",ce?"export-tainted":"export-normal",`sliding-type_${m}`),children:[Object(O.jsxs)("div",{ref:z,className:"preview-sliding-window",children:[Object(O.jsxs)(Hu,{className:"data-button-panel",children:[Object(O.jsxs)("div",{className:"imexport",children:[Object(O.jsx)(Qs,{ref:ne,tainted:ce,artworkCanvas:W.current,onRequireExportData:fe,onRequireDownload:()=>{var e;return null===(e=re.current)||void 0===e?void 0:e.download()},onClose:Br}),Object(O.jsx)("div",{}),Object(O.jsx)(tc,{ref:ie,onImport:pe,onClose:Br,allowHotkey:s,language:h})]}),Object(O.jsx)(cl,{language:h}),Object(O.jsx)(Us,{ref:re,canvasMap:ae,imageChangeCount:le,isTainted:ce,isInitializing:w,globalScale:d,onDownloadError:xe}),ce&&Object(O.jsxs)("div",{id:"save-button-tainted",className:"save-button-container save-button-tainted",children:[Object(O.jsxs)("div",{className:"alert-label",children:[h["alert.download.tainted-first-line"],Object(O.jsx)("br",{}),h["alert.download.tainted-second-line"]," ",Object(O.jsx)(Ko,{})]}),Object(O.jsx)(ul.a,{className:"save-button-dropdown",placement:"bottomRight",overlay:Object(O.jsx)(Es,{onChange:()=>Br()}),children:Object(O.jsxs)($s,{className:"resolution-option",onClick:e=>e.stopPropagation(),children:[Object(O.jsx)(ml.a,{className:"resolution-icon"}),Object(O.jsx)("span",{className:"resolution-overlay",children:u[1]})]})})]})]}),Object(O.jsxs)(Pu,{className:"card-preview-container",children:[Object(O.jsx)(Mr.a,{title:h["generic.reset.tooltip"],children:Object(O.jsx)(Xu,{className:"reset-button",onClick:()=>{if(window.confirm(h["prompt.reset.message"])){var e;const{setCard:t,card:a}=Cn.getState(),r={id:a.id,...Mt()},n="tcg"===a.format?r:Kr(r,"ocg");t(n,!0),oe(e=>e+1),null===(e=M.current)||void 0===e||e.forceCardData(n)}},children:Object(O.jsx)(cc.a,{})})}),Object(O.jsx)(Mr.a,{title:Object(O.jsxs)("div",{className:"center",children:[h["button.full-size.label"],s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),"Ctrl-B / \u2318-B"]}):null]}),children:Object(O.jsx)(Vu,{className:"lightbox-button",onClick:()=>ue(),children:Object(O.jsx)(Os.a,{})})}),Object(O.jsx)("canvas",{id:"preview-canvas",ref:P,width:rm,height:am},(null!==(t=null===(a=te.current)||void 0===a?void 0:a.getCanvasKey())&&void 0!==t?t:0)+.2),Object(O.jsxs)($u,{className:"card-canvas-group",children:[Object(O.jsx)("canvas",{id:"export-canvas",ref:H,width:rm*d,height:am*d},(null!==(n=null===(i=te.current)||void 0===i?void 0:i.getCanvasKey())&&void 0!==n?n:0)+.1),Object(O.jsx)("div",{id:"export-canvas-guard",onContextMenu:e=>e.preventDefault()}),Object(O.jsx)("canvas",{id:"frameCanvas",ref:$,width:rm*d,height:am*d},null!==(l=null===(o=te.current)||void 0===o?void 0:o.getCanvasKey())&&void 0!==l?l:0),Object(O.jsx)("canvas",{id:"nameCanvas",ref:X,width:rm*d,height:148*d}),Object(O.jsx)("canvas",{id:"cardIconCanvas",ref:K,width:rm*d,height:222*d}),Object(O.jsx)("canvas",{id:"pendulumScaleCanvas",ref:U,width:rm*d,height:920*d}),Object(O.jsx)("canvas",{id:"pendulumEffectCanvas",ref:Y,width:rm*d,height:920*d}),Object(O.jsx)("canvas",{id:"typeCanvas",ref:G,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"effectCanvas",ref:V,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"statCanvas",ref:q,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"setIdCanvas",ref:J,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"passwordCanvas",ref:_,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"creatorCanvas",ref:Q,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"stickerCanvas",ref:Z,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{id:"finishCanvas",ref:ee,width:rm*d,height:am*d}),Object(O.jsx)("canvas",{className:"crop-canvas",ref:W}),Object(O.jsx)("canvas",{className:"crop-canvas",ref:A})]})]})]}),j&&Object(O.jsx)(em.a,{ref:D,target:z,className:"sliding-movable-window",draggable:!0,throttleDrag:1,edgeDraggable:!1,startDragRotate:0,throttleDragRotate:0,throttleScale:0,snappable:!0,pinchable:!0,snapContainer:".card-preview-panel",bounds:{left:0,top:0,right:0,bottom:0,position:"css"},onDrag:e=>{"manual"===m&&(e.target.style.transform=e.transform)}})]}),!1===Se&&Object(O.jsx)(lu,{ref:M,artworkCanvas:W.current,backgroundCanvas:A.current,onSourceLoaded:je,onCropChange:Oe,onTainted:we})]}),Object(O.jsx)(Mu,{language:h,onVisibleChange:ke,onSelect:pe,onRequestImport:()=>{var e;null===(e=ie.current)||void 0===e||e.requestImport("new")}}),Object(O.jsx)(Ns,{ref:te,globalScale:d}),Object(O.jsxs)(Uu,{className:"by-me",children:["Made by Lauqerm ",Object(O.jsx)("img",{src:"https://i.imgur.com/RY6IRqn.png",alt:"avatar"})]})]})})};var im=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,655)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:i,getTTFB:l}=t;a(e),r(e),n(e),i(e),l(e)})};l.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(nm,{})}),document.getElementById("root")),im()}},[[583,1,2]]]);
//# sourceMappingURL=main.1106b5be.chunk.js.map