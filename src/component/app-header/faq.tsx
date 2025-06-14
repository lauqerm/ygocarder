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
        const currentReminder = '16/06/2025';
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
                    <div><i>Solved feedbacks are removed.</i></div>
                    <br />
                    {[
                        {
                            author: 'TheDuelistt at Jun 15, 2025',
                            question: 'Can you make this L letter to be consistent with the rest of the INK, also, can you make the Link Rating value (number) lower and consistent with the INK, and the dash "-" a little bolder, so that the overall look is similar to the official Konami Yugioh Card template. Thank you.',
                            answer: 'I have updated the layer, hopefully it look better now.',
                        },
                        {
                            author: 'text format at Jun 14, 2025',
                            question: 'The text format looks completely different with the pendulum effect than with the monster effect',
                            answer: 'Text effect is automatically calculated to best fit in the card, I always recommended to let it flow naturally, but regardless, I have added input to define the minimum lines of effect you would want in your cards.',
                        },
                        {
                            author: 'Anonymous User at Jun 14, 2025',
                            question: 'The outline is a bit uneven depending on the letter.',
                            answer: 'This is a known issue, unfortunately this is the best I can offer right now.',
                        },
                        {
                            author: 'Anonymous User at Jun 14, 2025',
                            question: 'Justify doesn\'t seem to work',
                            answer: 'It should work normally by now.',
                        },
                        {
                            author: 'Phan Trí Dĩ at Jun 11, 2025',
                            question: 'Hi, firstly, I want to thanks to your hardwork for making a wonderful website, very appreciate your work. There\'s some K9 card with a special hash sign. It get a bit smaller when I use it. I wondering if you can fix it. Thank you very much.',
                            answer: 'Hi there. There are two parts of the problem here:\nThe first thing is the hash sign, which is not a bug. This design has been used on many cards in the past, for example "Hi-Speedroid Glider #2", and there is no sign that it would be different this time.\nThe second thing is the letter "Ø", which currently only appear on the OCG card, as Lupus itself is not yet revealed for TCG, we doesn\'t know if the TCG would keep this letter or not.',
                        },
                        {
                            author: 'Anonymous User at Jun 06, 2025',
                            question: 'When using the Link Arrows on a Pendulum card, the Link Rating disappears',
                            answer: 'It should be fixed by now',
                        },
                        {
                            author: 'Shanaya User at Jun 04, 2025',
                            question: 'I would like to request another artwork effect like this, like the effect of the attached picture its a secret rare effect',
                            answer: 'I have added foil 9, this is my best and final attempt, sorry if it does not match your need.',
                        },
                        {
                            author: 'Yugiohfann at Jun 03, 2025',
                            question: 'Please fix the ATK/DEF font text, the numbers are higher than the ATK/DEF text.',
                        },
                        {
                            author: 'Anonymous User at Jun 03, 2025',
                            question: 'Small adjustment for size and style of card stats (ATK, DEF). Can you bring back the old size and style of card stats. Now the stats are higher than the ATK and DEF text.',
                            answer: 'Can you provide a sample image so I can see the difference? I cannot take action blindly wihout any reference.',
                        },
                        {
                            author: 'Anonymous User at Jun 02, 2025',
                            question: 'please can you add sizing selection in card name? please? thank you!',
                            answer: 'Can you provide a sample image of the old card? I would like to take a look to see if it is possible to implement it or not.',
                        },
                        {
                            author: 'Cardmaker_01',
                            question: 'Hello, the Xyz cards have black font in Set ID and Copyright, making it invisible to Xyz cards. Attached screenshot is an example. Can you please fix those fields to white font again? tysm and more power to you :)',
                            answer: 'It should be fixed by now, thanks for your feedback.'
                        },
                        {
                            author: 'galaxy dragon',
                            question: 'Can you add a little space on the edge of the spell and trap card? when it is full of text. Thank you.',
                            answer: 'I can\'t quite understand what you mean, can you be more specific, or provide a sample image?',
                        },
                        {
                            author: 'Anonymous User at May 27, 2025',
                            question: 'Hello, can you add a selection of sizes in card title? because the old card and new card have different card title alignment, the old card seems to appear the title is more stretch than the new maybe because of the card size of the old card. can you fix it pls? maybe add some choices of card title alignments?\nor maybe size? THANK YOU SO MUCH!!',
                            answer: 'Do you have any sample image of the old card? I would like to see the difference between the two so I can decide that if it is possible or not.',
                        },
                        {
                            author: 'ATK/DEF at May 26, 2025',
                            question: 'The ATK/DEF text and values seem to have different sizes than usual. Also the ? seems to be in a different format to how it appears in TCG/OCG',
                            answer: 'I have made a bit adjustment for font size and font family of stats text.',
                        },
                        {
                            author: 'Maya at May 23, 2025',
                            question: 'I\'d like to make a request, is it possible to put a SPEED DUEL watermark in EVERY card types in the description area like the Speed Skill type when it is set to speed duel? thank you so much. Appreciate your lovely cardmaker',
                            answer: 'I will try, but this is pretty hard to do to be honest, don\'t keep your hope up.',
                        },
                        {
                            author: 'Shanaya at May 22, 2025',
                            question: 'Can you put something rainbow effect on the Finish in number 3?',
                            answer: 'I have added art finish type 8, which is a mix between type 3 and 6, you may try that out.',
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