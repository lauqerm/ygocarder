import { Modal, notification, Tabs } from 'antd';
import { FaqButtonLabel, QuoteContainer } from './styled';
import { useNotification } from 'src/service';
import React, { useEffect, useState } from 'react';

export const FAD_BUTTON_ID = 'faq-button';

type Feedback = {
    author?: string,
    question: string,
    answer?: string,
    image?: string,
};

type Quote = {
    image?: string,
    author?: string,
    question: string,
    children: React.ReactNode,
}
const Quote = ({
    image,
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
        {image && <img className="image" src={image} alt="answer" />}
    </QuoteContainer>;
};

export const QuestionAndFeedback = () => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [faqReminder, setMemoizedReminder] = useNotification('faqReminder');
    const [feedbackReminder, setFeedbackReminder] = useNotification('feedbackReminder');

    useEffect(() => {
        const currentReminder = '09/08/2025';
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

    const feedbackList: Feedback[] = [
        {
            author: 'Anonymous User at Aug 8, 2025',
            question: 'There should be an effect text formatting option to justify text while making it respect the rest of the text\'s compression ratio, like actual cards do.',
            answer: 'I cannot support a new syntax right now, but if your use-case is just wanting the last line of effect / pendulum effect to be justfiy-aligned, you can use the newly implemented Justify Ratio in Paragraph Style button.',
        },
        {
            author: 'the ¡ symbol is to long (for spanish card names) at Aug 5, 2025',
            question: 'hi, i was trying to create a card using the ¡ symbol in the name, but its too long, not like the ! in the screenshot. for exaple: if u try to write the name \'Caza del Cielo Movilizar - ¡Atacar!\' you can see the symbol ¡ is too long compared to the pics of the same card in spanish. i hope you can fix that and ty for the web:3',
            answer: 'I have updated the ratio, hopefully it looks better now.',
        },
        {
            author: 'Re: ★ at Jul 30, 2025',
            question: 'I am not sure your latest fix for ★, and ☆ was correct: As far as I can tell, the size of the characters is too small.\nAccording to official cards, they should be as tall as a capital letter.\nMy source of comparison was the "Evil★Twin" Archetype.',
            answer: 'This should be fixed by now.',
        },
        {
            author: 'TitanKyojin at Jul 30, 2025',
            question: 'I seem to be having the same problem as others. All of the buttons associated with exporting, importing and saving don\'t seem to be working.',
            answer: 'I have issued another fix, you can check again now.',
        },
        {
            author: 'Anonymous User at Jul 30, 2025',
            question: 'Thanks again for the manual drag option! It actually helped me notice something that might help with diagnosing the auto-scroll issue if you decide to return to it. After manually dragging the card preview lower and then switching to auto-scroll, the preview instantly moved back to the top of the page and stayed there - that\'s its idea of "auto-scroll." No need to rush to fix this, though; just wanted to share my findings and hopefully a useful note, and the manual drag is a great workaround anyway!',
            answer: 'Yeah, thanks to your screenshot I think the problem here is because the window is too short; it cannot fit the entire card within so no matter how much it try to align, a part of it will be hidden from the viewport, which lead to confusing behavior. In this case manual drag would be the better option regardless.'
        },
        {
            author: '★ at Jul 29, 2025',
            question: 'The ★ doesn\'t get displayed correctly',
            answer: 'It should be fixed by now.'
        },
        {
            author: 'Ivan/Liger at Jul 29, 2025',
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
            author: 'Anonymous User at Jun 30, 2025',
            question: 'Having a format similar for cards similar to Master Duel cards.',
            answer: 'I have no plan to support format like Master Duel right now.'
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
            author: 'Rush Duel at Jun 22, 2025',
            question: 'This card maker is amazing! Have you ever consider doing a rush duel section as well?',
            answer: 'I do want to create a similar editor for Rush Duel cards, but it will require a significant amount of effort that I currently lack. Additionally, since there is no official adaptation of Rush cards for TCG, doing this now risks a considerable incompatibility issue in the future.',
        },
        {
            author: 'Maya at May 23, 2025',
            question: 'I\'d like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker',
            answer: 'I will try, but this is pretty hard to do to be honest, don\'t keep your hope up.',
        },
    ];

    return <>
        <FaqButtonLabel id={FAD_BUTTON_ID} $animating={animating} onClick={() => setVisible(cur => !cur)}>
            {'FAQ'}
        </FaqButtonLabel>
        <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
            <Tabs>
                <Tabs.TabPane key="feedback" tab="Feedbacks">
                    <div><i>Solved or stale (4 weeks of inactive) feedbacks are removed.</i></div>
                    <br />
                    {feedbackList.map(({ author, question, answer, image }, index) => {
                        return <Quote key={index} author={author} question={question} image={image}>
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