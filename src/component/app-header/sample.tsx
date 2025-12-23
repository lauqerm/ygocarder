import { Button, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { Card } from 'src/model';
import { decodeCard, WithLanguage } from 'src/service';
import styled from 'styled-components';

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
            }
        }
        td {
            &:nth-child(1) {
                padding: var(--spacing-xs);
                img {
                    max-width: 140px;
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
                            description: 'Sample card with overframe artwork. Requires creative options to be enabled.',
                            value: '{"fm":"tcg","rg":"en","fr":"ritual","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":100,"optx":40,"opnm":100,"opbf":"#0062b1","opab":true,"opnb":true,"opeb":true,"opfb":true,"opbl":true},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Blue-Eyes Chaos MAX Dragon","nst":"custom","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":180,"nscg":"0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6","nshg":true,"nshl":true,"nshs":true,"nshfs":"#000000","nslc":"#333333","nslox":1,"nsloy":0,"nslw":3,"nspt":"none","nspr":"animeSilver","nssb":2,"nssc":"#383838","nssox":2,"nssoy":3},"at":"DARK","att":"auto","sf":"QUICK-PLAY","it":"auto","st":8,"stl":[],"sa":"auto","ar":"https://i.imgur.com/msWo4gh.png","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":0.686,"arx":34.1036977491961,"ary":32.5614067055394,"arw":44.05144694533762,"arh":49.92711370262391},"hbg":true,"bg":"https://i.postimg.cc/SK4CtGfY/image.png","bgd":"","bf":false,"bgs":"online","bgt":"strict","bgc":{"bgu":"%","bga":1,"bgx":0,"bgy":0,"bgw":100,"bgh":100},"lm":["1","3","7","9"],"lr":"","il":null,"ip":false,"pf":"auto","pe":"","rs":"4","bs":"4","psi":"medium","ta":["Dragon","Ritual","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"You can Ritual Summon this card with \\"Chaos Form\\". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent\'s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.","si":"LDS2-EN016","atk":"4000","def":"0","pw":"55410871","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}',
                        },
                        {
                            image: 'https://i.postimg.cc/Ss0JTL0H/image.png',
                            description: 'Sample card with custom image as frame background, modified levels and smaller pendulum effect\'s text box. Requires creative options to be enabled.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"platinum","op":{"opbd":100,"oppd":100,"optx":100,"opnm":80,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","normal"],"na":"Malefic Paradulum Dragon","nst":"auto","ns":{"nsfs":"#000000","nsft":"Auto","nsgd":0,"nscg":"0.000|#eef10b,0.5|#d78025,1.000|#7e20cf","nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#000000","nslox":0,"nsloy":0,"nslw":0,"nspt":"none","nspr":"commonB","nssb":0,"nssc":"#000000","nssox":0,"nssoy":0},"at":"DARK","att":"auto","sf":"NO ICON","it":"auto","st":10,"stl":["level","level","level","level",null,"negative-level","negative-level","negative-level",null,"rank","rank","rank","rank"],"sa":"center","ar":"https://i.imgur.com/cQcxyRQ.jpeg","ad":"","as":"online","af":false,"arc":{"aru":"%","ara":1.236,"arx":0,"ary":0,"arw":100,"arh":80.9061488673139},"hbg":true,"bg":"https://i.imgur.com/WpXf0GI.png","bgd":"","bf":false,"bgs":"online","bgt":"frame","bgc":{"bgu":"%","bga":0.686,"bgx":15.449999999999998,"bgy":0,"bgw":68.60000000000001,"bgh":100},"lm":["1","9","3","7"],"lr":"","il":false,"ip":true,"pf":"auto","pe":"During your Main Phase: You can add 1 \\"Malefic\\" Spell / Trap from your Deck to your hand. You can only use this effect of \\"Malefic Paradulum Dragon\\" once per turn.","rs":"0","bs":"0","psi":"small","ta":["Dragon","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"italic","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"Must be Pendulum Summoned, or Special Summoned (from your hand) by banishing 1 \\"Malefic\\" monster from your Extra Deck. While you control no card in your Field Zone, the field is treated as \\"Malefic World\\". Once per turn: You can send 1 \\"Malefic\\" card from your Deck to the GY; return 1 of your banished Level 8 Synchro Monsters to the Extra Deck, then you can Special Summon that monster from the Extra Deck, also you can only attack with \\"Malefic\\" monsters for the rest of this turn.","si":"","atk":"4000","def":"4000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#00007f",true,"#0000FF"],"tts":[false,"#ff0000",true,"#7F0000"],"ets":[false,"#7f0000",true,"#FF0000"],"pts":[false,"#7f0000",true,"#FF0000"],"ots":[false,"#ffffff",true,"#000000"],"dl":["","","","","","",""],"fl":[0,0],"ve":3}'
                        },
                        {
                            image: 'https://i.postimg.cc/1zDJYHn6/image.png',
                            description: 'Sample card with mixed frames. Requires creative options to be enabled.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"synchro","rpf":"trap","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Anotherverse Warden","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":true,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"secretGradient","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"LIGHT","att":"auto","sf":"NO ICON","it":"auto","st":12,"stl":[],"sa":"auto","ar":"https://i.imgur.com/Y7IO7ZB.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":100,"aru":"%","ara":1},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":100,"bgu":"%","bga":1},"lm":["1","3","7","9"],"lr":"","il":false,"ip":false,"pf":"spell","pe":"","rs":"5","bs":"5","psi":"large","ta":["Fiend","Disorder","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"ra","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"<pre>● Effect</pre> Facet: Gains 1000 ATK/DEF while you control no other Disorder Monsters.\\n<pre>● Synchro</pre> Facet (Quick Effect): 1 Level 12 or lower Synchro Monster - It cannot be destroyed by battle or card effects.\\n<pre>● Spell</pre> Facet: 1 Continuous Spell - It cannot be destroyed or banished card effects.\\n<pre>● Trap</pre> Facet (Quick Effect): 1 Continuous Trap - When this card activate its effects: You can target 1 monster on the field; destroy it.","si":"","atk":"3000","def":"3000","pw":"","sti":"holo5","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}'
                        },
                        {
                            image: 'https://i.postimg.cc/YCPQfmdn/image.png',
                            description: 'Sample card with link markers on pendulum frame and custom level placement. Requires creative options to be enabled.',
                            value: '{"fm":"tcg","rg":"en","fr":"effect","lf":"auto","rf":"auto","rpf":"auto","fo":"normal","op":{"opbd":100,"oppd":80,"optx":100,"opnm":100,"opbf":"#404040","opab":true,"opnb":true,"opeb":true,"opfb":false,"opbl":false},"fn":[],"afn":"normal","of":["normal","normal","normal","type9"],"na":"Countermoon Dragon","nst":"predefined","ns":{"nsep":90,"nset":2,"nsey":90,"nsfs":"#cfc6de","nsft":"Auto","nsgd":180,"nscg":"0.000|#7a71a6,1.000|#a8c1e5","nshe":false,"nshg":false,"nshl":false,"nshs":false,"nshfs":"#000000","nslc":"#333333","nslox":0,"nsloy":0,"nslw":6,"nspt":"none","nspr":"rare","nssb":2,"nssc":"#ffff00","nssox":0,"nssoy":0},"at":"WATER","att":"auto","sf":"NO ICON","it":"custom","st":12,"stl":["negative-level","negative-level","negative-level","negative-level",null,null,"level","level","level","level","level","level"],"sa":"auto","ar":"https://i.imgur.com/vf0AWDN.png","ad":"","as":"online","af":false,"arc":{"arx":0,"ary":0,"arw":100,"arh":94.7867298578199,"aru":"%","ara":1.055},"hbg":false,"bg":"https://images2.imgbox.com/26/42/a1xqkgFz_o.jpg","bgd":"","bf":false,"bgs":"online","bgt":"fit","bgc":{"bgx":0,"bgy":0,"bgw":100,"bgh":94.7867298578199,"bgu":"%","bga":1.055},"lm":["1","3","7","9"],"lr":"","il":true,"ip":true,"pf":"auto","pe":"Negate the effects of all face-up Continuous Trap on the field.","rs":"5","bs":"5","psi":"medium","ta":["Wyrm","Synchro","Pendulum","Effect"],"es":{"cdtl":"strict","efs":"auto","eus":0,"ebg":"auto","eml":0,"ejr":100},"ps":{"pfs":"auto","pus":0,"pbg":"auto","pml":0,"pjr":100},"ef":"[Synchro: 1 Tuner + 1 non-Tuner monster | Link: 2 Wyrm monsters]\\nYou can only Special Summon 1 \\"Countermoon Dragon\\" per turn. If this card is Synchro Summoned: You can target 2 Spells/Traps on the field; destroy them. If this card is Dark Synchro Summoned: You can target 1 monster on the field; destroy it. If this card is Link Summoned: You can Special Summon 1 \\"Countersun Dragon\\" from your Extra Deck, then you can place this card in your Pendulum Zone.","si":"","atk":"1500","def":"3000","pw":"","sti":"no-sticker","fe":"1<st> Edition","ife":false,"isp":false,"ile":false,"idt":false,"ilc":false,"cr":"","fh":true,"sts":[false,"#000000",false,"#000000"],"tts":[false,"#000000",false,"#000000"],"ets":[false,"#000000",false,"#000000"],"pts":[false,"#000000",false,"#000000"],"ots":[false,"#000000",false,"#000000"],"dl":["","","","","","",""],"fl":[1,0],"ve":3}',
                        }
                    ].map(({ description, image, value }) => {
                        return <tr>
                            <td>
                                <img src={image} alt="Sample Card" />
                            </td>
                            <td>
                                {description}
                                <br /><br />
                                <Button
                                    size="small"
                                    onClick={() => applyCardData(decodeCard(value).card)}
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