import { Modal, notification, Tabs } from 'antd';
import { FaqButtonLabel, QuoteContainer } from './styled';
import { useNotification } from 'src/service';
import React, { useEffect, useState } from 'react';

export const FAD_BUTTON_ID = 'faq-button';

type Quote = {
    author?: string,
    question: string,
    children: React.ReactNode,
}
const Quote = ({
    author,
    question,
    children,
}: Quote) => {
    return <QuoteContainer>
        <blockquote>
            {author && <label>{author}</label>}
            <div className="question">{question}</div>
        </blockquote>
        <div className="answer">{children}</div>
    </QuoteContainer>;
};

export const QuestionAndFeedback = () => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [faqReminder, setMemoizedReminder] = useNotification('faqReminder');
    const [feedbackReminder, setFeedbackReminder] = useNotification('feedbackReminder');

    useEffect(() => {
        const currentReminder = '29/07/2025.1';
        if (faqReminder !== currentReminder) {
            if (process.env.REACT_APP_VERSION) setMemoizedReminder(currentReminder);

            setAnimating(true);
            setTimeout(() => {
                setAnimating(false);
            }, 8000);
        }
    }, [setMemoizedReminder, faqReminder]);

    useEffect(() => {
        if (feedbackReminder !== true) {
            setFeedbackReminder(true);
            setAnimating(true);
            notification.info({
                message: 'Feedback Reminder',
                description: 'If you have any feedback or suggestion, please check the FAQ button first to see if your feedback has been addressed.',
                duration: 10,
                onClose: () => {
                    setAnimating(false);;
                }
            });
        }
    }, [feedbackReminder, setFeedbackReminder]);

    return <>
        <FaqButtonLabel id={FAD_BUTTON_ID} $animating={animating} onClick={() => setVisible(cur => !cur)}>
            {'FAQ'}
        </FaqButtonLabel>
        <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
            <Tabs>
                <Tabs.TabPane key="feedback" tab="Feedbacks">
                    <div><i>Solved or stale (4 weeks of inactive) feedbacks are removed.</i></div>
                    <br />
                    {[
                        {
                            author: 'Ivan/Liger  at Jul 29, 2025',
                            question: 'Hello, sorry to bother you. I\'m not sure if your site is under maintenance, but I\'ve noticed some major issues recently. It all started when I could no longer save images — nothing in the top bar seems to work anymore. I tried switching my browser to “Desktop mode” to see if it would help, but that made things even worse. The default zoom setting at 100% doesn\'t display properly, so I had to set it to 50% just to see the full layout. Unfortunately, I still can\'t do anything at the moment. I hope this helps. I haven’t noticed any other issues for now.\n\nBest regards,\nIvan / Liger'
                        },
                        {
                            author: 'Ebrahim at Jul 29, 2025',
                            question: 'I\'m trying to download the card from the website to my phone but the download button isn\'t working can you please fix it.',
                            answer: 'Both issues seem to have the same cause, it should be fixed by now.',
                        },
                        {
                            author: 'Anonymous User at Jul 29, 2025',
                            question: 'The manual scroll option works perfectly! Thank you so much for the update and for staying in touch!',
                            answer: 'Thanks, happy that the work around worked because honestly I\'m out of ideas otherwise.',
                        },
                        {
                            author: 'Anonymous User at Jul 28, 2025',
                            question: 'Happy to help! I tried to screenshot the auto-scroll issue via the app before, but the UI doesn\'t let me scroll down and screenshot at the same time, so I won\'t be able to show you clearly. (I\'d use my own screenshots, but I can\'t paste or upload them, either.) What I can tell you is that the card preview scrolls up along with the rest of the page, so it never moves below the "Finish: Art" section. If there\'s another way I can show you the issue to help you solve this, please let me know!',
                            answer: 'Don\'t worry, even if you could not capture the exact behavior, it still provide information about your layout and screensize which could be useful for debugging.\n\nOn the other hand, I have added the manual option that allow you to grab the preview and slide it at will. You can change the behavior in Setting => "Preview sliding"',
                        },
                        {
                            author: 'Anonymous User at Jul 28, 2025',
                            question: 'Thank you for responding so quickly! I don\'t see the auto-scroll effect happening for the card preview, though. I reset my browser just in case, but that didn\'t seem to work. (Maybe I just need to wait a bit for the update to kick in or if there\'s some new hidden option to toggle it?) In any case, I hope it works eventually because this card maker is awesome!',
                            answer: 'That\'s pretty weird indeed. The feature should apply automatically without any additional action. Anyway, in the Report dialog there should be a "Take screenshot" button, if possible please submit the app\'s screenshot so I can try to diagnose the problem. Thanks for your help.',
                        },
                        {
                            author: 'Anonymous User at Jul 24, 2025',
                            question: 'Is it possible to make it so that users can scroll through the customization options while the card preview always stays in place onscreen? (Or alternatively, is it possible to give the card preview its own separate scroll bar?)',
                            answer: 'I have added some auto scroll behavior to keep the card in view, hopefully it looks better now.',
                        },
                        {
                            author: 'Blake at Jul 23, 2025',
                            question: 'Are you able to make custom attributes and upload them on here?',
                            answer: 'No I can\'t unfortunately, as best I can provide you a way to use your own custom attribute.',
                        },
                        {
                            author: 'Anonymous User at Jul 18, 2025',
                            question: 'The drag and drop feature is pretty nice... Is there a way for it not to take precedence over the drag and drop in the text box? It kinda makes it fizzle.',
                            answer: 'This should be fixed by now.',
                        },
                        {
                            author: 'Blake at Jul 19, 2025',
                            question: 'On rushify, can you make rush rare of the cards look like the real ones?',
                        },
                        {
                            author: 'Blake at Jul 14, 2025',
                            question: 'Isn’t there any other person that’s able to create a website like this one but only rush duel?',
                        },
                        {
                            author: 'Blake at Jul 13, 2025',
                            question: 'On GitHub Rushify, can you add the other card types?',
                            answer: 'I am not the author of Rushify, so I afraid I can\'t help much.',
                        },
                        {
                            author: 'Anonymous User at Jul 14, 2025',
                            question: 'The outline when placed at 0/0 is not evenly positioned',
                            answer: 'The image you provided is the app working properly, this is kind of a technical limitation on my side and I can\'t do much about it.'
                        },
                        {
                            author: 'Being able to save some Customs Presets at Jul 12, 2025',
                            question: 'The ability to save 2-3 Customs Presets',
                            answer: 'Let\'s see if I can come up with something.'
                        },
                        {
                            author: 'New Feature Suggestion at Jul 12, 2025',
                            question: 'For the card art, maybe you could make a drag and drop feature to it?',
                            answer: 'I have added the feature, you may try it now.'
                        },
                        {
                            author: 'TheTonyB at Jul 10, 2025',
                            question: 'Can you add support for greek letters in TCG format? Currently, the only ones that work fine are α, β, Ω, and I think μ too. In OCG format they all work perfectly. I included a screeenshot of me trying to use the greek letter Ν. Goated card maker by the way.',
                        },
                        {
                            author: 'TheTonyB at Jul 10, 2025',
                            question: 'Can you improve compatibility with greek letters in TCG format? The only ones that work fine are α, β and Ω. In OCG format they all work perfectly.',
                            answer: 'I have updated font, hopefully it looks better now.'
                        },
                        {
                            author: 'San_San at Jul 10, 2025',
                            question: 'Al escribir en español las vocales con tilde sobresalen ligeramente del resto de letras',
                            answer: 'Can you provide an example image? As far as I check words like "número" or "además" looks normal to me.'
                        },
                        {
                            author: 'Error "é" at Jun 30, 2025',
                            question: 'There is a problem with the writing. The line wrap is sometimes incorrect when using this "é" character.\nThe last word is "Matériel". The last word should not be cut.',
                            answer: 'I have updated the algorithm to have a better behavior for non-alphabet letters. But in case it goes wrong, you can always use non-breakable text syntax to keep the word in line.'
                        },
                        {
                            author: 'Anonymous User at Jun 30, 2025',
                            question: 'Having a format similar for cards similar to Master Duel cards.',
                            answer: 'I have no plan to support format like Master Duel right now.'
                        },
                        {
                            author: 'Anonymous User at Jun 29, 2025',
                            question: 'Add a predefined rainbow gradient for Name Styles similar to the one for Secret Rares in Simplified Chinese\'s proxies',
                            answer: 'I don\'t think I can do it. I don\'t even know what those proxies look like.'
                        },
                        {
                            author: 'Anonymous User at Jun 28, 2025',
                            question: 'It seems to me that the attribute "darkness" in French is not the correct image. The name "Ténèbres" is written in larger letters (less constricted) and extends beyond the circle because it is a long word.\nMaybe the same problem for light too "LUMIERE".\nSee this link:\nhttps://yugioh.fandom.com/fr/wiki/T%C3%89N%C3%88BRES',
                            answer: 'I have updated the icon, hopefully it looks better now.'
                        },
                        {
                            author: 'Blake Jun at 27, 2025',
                            question: 'Can you make a website with rush duel. card templates just like this one? Not only effect and fusion, but all card types.',
                        },
                        {
                            author: 'Blake Jun at 27, 2025',
                            question: 'Can you also put in the link in the description?',
                            answer: 'At the moment, no. You may check the FAQ for more detail.'
                        },
                        {
                            author: 'Skip at Jun 27, 2025',
                            question: 'Good job! I notice a mistake with the attribute spell card in french. It is not "SPELL" but "MAGIE" we should use.',
                            answer: 'Indeed, I have messed up the Spell attribute between French and German cards. It should be fixed by now.'
                        },
                        {
                            author: 'Rush Duel at Jun 22, 2025',
                            question: 'This card maker is amazing! Have you ever consider doing a rush duel section as well?',
                            answer: 'I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future.',
                        },
                        {
                            author: 'Die Frauen at Jun 22, 2025',
                            question: 'Fantastic job, you understood the assignment. It sappears it still needs to be better centered out , the custom array is a bit skewed to the right, and it appears the toggle to move them to the left/center aren\'t quite there yet.\n\nA minor update I would like is, to add a "normal spell/trap" icon, I think you can find it on the wiki if you look it up, as a blank template.',
                        },
                        {
                            author: 'Die Frauen at Jun 22, 2025',
                            question: 'Addendum (Disregard the alignment comment, or to rephrase, it works fine. I was under the impression it would align on its own, and put the level at the edges and it projected as though it were the 13th icon).\n\nI assume you can organize those manually, but for all intents and purposes it is perfectly functional!',
                            answer: 'Come to think of it, maybe the star editor is not intuitive enough to use, so I have updated it a bit more. Also the normal icon for Spell/Trap is now available.',
                        },
                        {
                            author: 'Maya at May 23, 2025',
                            question: 'I\'d like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker',
                            answer: 'I will try, but this is pretty hard to do to be honest, don\'t keep your hope up.',
                        },
                    ].map(({ author, question, answer }, index) => {
                        return <Quote key={index} author={author} question={question}>
                            {answer}
                        </Quote>;
                    })}
                </Tabs.TabPane>
                <Tabs.TabPane key="faq" tab="Frequently Asked Questions">
                    {[
                        {
                            question: 'Can you make the pendulum effect box semi-transparent? Just like real pendulum cards.',
                            answer: 'Yes, both pendulum and default card effect box can be made semi-transparent. In "Layout" row you can find "Pendulum" and "Effect" slider, each control how transparent the effect box is (0 is fully see-through and 100 is fully solid).',
                        },
                        {
                            question: 'Will you make another version for Rush Duel cards?',
                            answer: 'I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future.',
                        }
                    ].map(({ question, answer }, index) => {
                        return <Quote key={index} question={question}>
                            {answer}
                        </Quote>;
                    })}
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    </>;
};