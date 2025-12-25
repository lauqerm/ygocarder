import { Button, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { CanvasConst, Card } from 'src/model';
import { decodeCard, useSetting, WithLanguage } from 'src/service';
import styled from 'styled-components';

const {
    height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
const StyledManagerSample = styled(Modal)`
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
                    height: calc(var(--thumb-size) / ${CanvasWidth} * ${CanvasHeight});
                }
            }
        }
    }
`;

export type SampleCardRef = {
    open: () => void,
};
export type SampleCard = {
    applyCardData: (data: Card) => void,
} & WithLanguage;
export const SampleCard = forwardRef<SampleCardRef, SampleCard>(({ language, applyCardData }, ref) => {
    const [visible, setVisible] = useState(false);
    const {
        updateSetting,
    } = useSetting(({ setting, updateSetting }) => ({ setting, updateSetting }));

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
    }));

    return <StyledManagerSample
        visible={visible}
        onCancel={() => setVisible(false)}
        okButtonProps={{
            style: {
                display: 'none',
            },
        }}
        cancelText={language['form.dismiss']}
    >
        <div>
            {language['sample.manager.creative-requires.label']}
        </div>
        <br />
        <table className="sample-container">
            <tbody>
                <tr>
                    <th><b>{language['sample.manager.header.image.label']}</b></th>
                    <th><b>{language['sample.manager.header.description.label']}</b></th>
                </tr>
                {
                    [
                        {
                            image: 'https://i.postimg.cc/SQDcs87c/image.png',
                            description: 'Sample card with custom background and overframe artwork.',
                            value: '{"fm":"tcg","rg":"en","fr":"ritual","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":40,"opnm":100,"opbf":"#0062b1","opab":true,"opnb":true,"opeb":true,"opfb":true,"opbl":true},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Blue-Eyes Chaos MAX Dragon","nst":"custom","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":180,"nscg":"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6","nshg":true,"nshl":true,"nshs":true,"nshfs":"#000000","nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"animeSilver","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"DARK","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/msWo4gh.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":0.686,"arx":34.1036977491961,"ary":32.5614067055394,"arw":44.05144694533762,"arh":49.92711370262391},"hbg":true,"bg":"https://i.postimg.cc/SK4CtGfY/image.png","bgd":"","bf":false,"bgs":"online","bgt":"strict","bgc":{"bgu":"%","bga":1,"bgx":0,"bgy":0,"bgw":100,"bgh":100},"lm":["1","3","7","9"],"lr":"","il":null,"ip":false,"pf":"auto","pe":"","rs":"4","bs":"4","psi":"medium","ta":["Dragon","Ritual","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"You can Ritual Summon this card with \\"Chaos Form\\". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent\'s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.","si":"LDS2-EN016","atk":"4000","def":"0","pw":"55410871","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}',
                        },
                        {
                            image: 'https://i.postimg.cc/Ss0JTL0H/image.png',
                            description: 'Sample card with custom image as frame background, custom levels alignment and small pendulum effect\'s text box.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"platinum","op":{"opbd":100,"oppd":100,"optx":100,"opnm":80,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Malefic Paradulum Dragon","nst":"auto","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":0,"nscg":"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf","nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#000000","nslox":0,"nsloy":0,"nslw":0,"nspt":"none","nspr":"commonB","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"DARK","att":"auto","sf":"NO ICON","it":"auto","st":10,"stl":["level","level","level","level",null,"negative-level","negative-level","negative-level",null,"rank","rank","rank","rank"],"sa":"center","ar":"https://i.imgur.com/cQcxyRQ.jpeg","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1.236,"arx":0,"ary":0,"arw":100,"arh":80.9061488673139},"hbg":true,"bg":"https://i.imgur.com/WpXf0GI.png","bgd":"","bf":false,"bgs":"online","bgt":"frame","bgc":{"bgu":"%","bga":0.686,"bgx":15.449999999999998,"bgy":0,"bgw":68.60000000000001,"bgh":100},"lm":["1","9","3","7"],"lr":"","il":false,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 \\"Malefic\\" Spell / Trap from your Deck to your hand. You can only use this effect of \\"Malefic Paradulum Dragon\\" once per turn.","rs":"0","bs":"0","psi":"small","ta":["Dragon","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"italic","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"Must be Pendulum Summoned, or Special Summoned (from your hand) by banishing 1 \\"Malefic\\" monster from your Extra Deck. While you control no card in your Field Zone, the field is treated as \\"Malefic World\\". Once per turn: You can send 1 \\"Malefic\\" card from your Deck to the GY; return 1 of your banished Level 8 Synchro Monsters to the Extra Deck, then you can Special Summon that monster from the Extra Deck, also you can only attack with \\"Malefic\\" monsters for the rest of this turn.","si":"","atk":"4000","def":"4000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#00007f",true,"#0000FF"],"tts":[false,"#ff0000",true,"#7F0000"],"ets":[false,"#7f0000",true,"#FF0000"],"pts":[false,"#7f0000",true,"#FF0000"],"ots":[false,"#ffffff",true,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'
                        },
                        {
                            image: 'https://i.postimg.cc/gc8Ccjyq/image.png',
                            description: 'Sample card with no frame background, colorized texts, customized level and attribute.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":0,"oppd":65,"optx":55,"opnm":65,"opbf":"#404040","opab":false,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Mega PenduLuMoon","nst":"predefined","ns":{"nsep":90,"nsey":90,"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"ultra","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"https://i.postimg.cc/HxZCQhxH/paranormal.png","att":"custom","sf":"NO ICON","it":"auto","st":"4","stl":[],"sa":"auto","ar":"https://i.imgur.com/JIgmiMj.png","ad":"","as":"online","af":false,"arc":{"arx":31.17030201342282,"ary":0,"arw":37.65939597315436,"arh":100,"aru":"%","ara":0.67},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":99.99999999999999,"bgu":"%","bga":0.67},"lm":["1","3","7","9"],"lr":"","il":null,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 PARANORMAL Pendulum Monster from your Extra Deck to your hand, then destroy this card. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","rs":"0","bs":"0","psi":"medium","ta":["Spellcaster","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"During your Main Phase: You can add up to 2 face-up PARANORMAL Pendulum Monsters from your Extra Deck to your hand, also for the rest of this turn, until you Pendulum Summon, you cannot activate monster effects, except PARANORMAL Monsters\' effects, and the effects of any cards in your Pendulum Zones are negated. You can only use this effect of \\"Mega PenduLuMoon\\" once per turn.","si":"SMXR-EN025","atk":"400","def":"1400","pw":"45497573","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[true,"#400040",true,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[true,"#000000",true,"#FF00FF"],"pts":[true,"#000000",true,"#FF0000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}',
                        },
                        {
                            image: 'https://i.postimg.cc/YCPQfmdn/image.png',
                            description: 'Sample card with link markers on pendulum frame and custom level placement.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Countermoon Dragon","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"rare","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"WATER","att":"auto","sf":"NO ICON","it":"custom","st":12,"stl":["negative-level","negative-level","negative-level","negative-level",null,null,"level","level","level","level","level","level"],"sa":"auto","ar":"https://i.imgur.com/vf0AWDN.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":94.7867298578199,"aru":"%","ara":1.055},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":94.7867298578199,"bgu":"%","bga":1.055},"lm":["1","3","7","9"],"lr":"","il":true,"ip":true,"pf":"auto","pe":"Negate the effects of all face-up Continuous Trap on the field.","rs":"5","bs":"5","psi":"medium","ta":["Wyrm","Synchro","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"[Synchro: 1 Tuner + 1 non-Tuner monster | Link: 2 Wyrm monsters]\\nYou can only Special Summon 1 \\"Countermoon Dragon\\" per turn. If this card is Synchro Summoned: You can target 2 Spells/Traps on the field; destroy them. If this card is Dark Synchro Summoned: You can target 1 monster on the field; destroy it. If this card is Link Summoned: You can Special Summon 1 \\"Countersun Dragon\\" from your Extra Deck, then you can place this card in your Pendulum Zone.","si":"","atk":"1500","def":"3000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}',
                        },
                        {
                            image: 'https://i.postimg.cc/ncnLK60H/image.png',
                            description: 'Sample card with custom finishes and inline-image in card text.',
                            value: '{"fm":"tcg","rg":"en","fr":"link","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":["type8"],"afn":"type5","of":["normal","normal","normal","normal"],"na":"Promethean Princess, Bestower of Flames","nst":"predefined","ns":{"nsfs":"#dbb473","nsft":"Auto","nsgd":180,"nscg":"0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23","nshg":false,"nshl":false,"nshs":false,"nslc":"#4d4d4d","nslox":0,"nsloy":0,"nslw":2,"nspt":"none","nspr":"ultra","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"FIRE","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/NywTwhA.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1,"arx":0,"ary":0,"arw":100,"arh":100},"hbg":false,"bg":"","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":16.5,"bgy":0,"bgw":67,"bgh":67,"bgu":"%","bga":1},"lm":["8","4","6"],"lr":"","il":true,"ip":false,"pf":"auto","pe":"","rs":"10","bs":"10","psi":"medium","ta":["Fiend","Link","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"{{2+<img src=\\"https://i.postimg.cc/NFQSRSzT/effect-monster.png\\" offsetY=\\"-4\\" />}} / You cannot Special Summon <img name=\\"monster\\" src=\\"https://i.postimg.cc/RZ0mk6G3/monster.png\\" offsetY=\\"-4\\" />, except <img src=\\"icon-fire\\" /><img name=\\"monster\\" />. You can only use each of the following effects of \\"Promethean Princess, Bestower of Flames\\" once per turn. During your {Main Phase}: You can Special Summon 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> from your {<img name=\\"gy\\" src=\\"https://i.postimg.cc/Pr4159Hv/gy.png\\" />.} If a <img name=\\"monster\\" /> is Special Summoned to your opponent\'s field, while this card is in your <img name=\\"gy\\" /> (except during the Damage Step): You can target 1 <img src=\\"icon-fire\\" /><img name=\\"monster\\" /> you control and 1 <img name=\\"monster\\" /> your opponent controls; destroy them, and if you do, Special Summon this card.","si":"PHNI-EN052","atk":"2700","def":"","pw":"02772337","sti":"holo5","fe":"1<st> Edition","ife":true,"isp":true,"ile":false,"idt":false,"ilc":false,"cr":"©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#ffa500",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'
                        }
                    ].map(({ description, image, value }) => {
                        return <tr key={image}>
                            <td>
                                <img src={image} alt="Sample Card" />
                            </td>
                            <td>
                                {description}
                                <br /><br />
                                <Button
                                    size="small"
                                    onClick={() => {
                                        updateSetting({ showCreativeOption: true, showExtraDecorativeOption: true });
                                        applyCardData(decodeCard(value).card);
                                    }}
                                >
                                    Use sample
                                </Button>
                            </td>
                        </tr>;
                    })
                }
            </tbody>
        </table>
    </StyledManagerSample>;
});