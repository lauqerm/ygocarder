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
        const currentReminder = '27/06/2025';
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
                            author: 'Anonymous User at Jun 24, 2025',
                            question: 'In a line with brackets (), with no justifing syntax, the line with brackets will appear more compressed compared to a line with no brackets',
                            answer: 'The first line ("3 Xyz...") is using the non-breakable line syntax, which does not obey the overall compressing ratio. I will update the description to make it more clear.'
                        },
                        {
                            author: 'Blake at Jun 23, 2025',
                            question: 'When choose an image for the background of the card, not only it covers the card but also the main image of the card. Can you do something to fix it please?',
                            answer: 'Hi there, the background system is indeed has a bug, but in your case, it seems that you are using the "Replace Frame" option, which will replace the usual card frame (Normal, Effect, etc...) with your background. You may want to switch cover type into "Fit to art border" instead.',
                        },
                        {
                            author: 'Die Frauen at Jun 22, 2025',
                            question: 'Looking good. One last change for now I\'d like to see is, if you could implement that dye feature on the card layout for the card frames as well. That way you could get different variations from just Gold and Platinum',
                            answer: 'Update: I already implement the feature.\nFoil system contains more parts, but I think it should be doable. I will look into it later.',
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
                            author: 'Die Frauen at Jun 19, 2025',
                            question: 'This may be a bit crazy, but since you\'ve already come a long way with customization, do you think it\'d be possible to toggle Star Types to be sorted manually in any combinations of the ones currently available?\n\nAnd on that note, and this here may be a bit too out there, but do you think you could use the Spell/Trap iconography as you would any of those? And if it\'s not too much of a bother, maybe the monster Attributes downsized on that row as well?',
                            answer: 'Putting Spell/Trap/Monster Attribute icon in star slots is possible. As for manual icon of each star slot, I think *technically* it should be doable, but I need to do a bit more test, probably will look into it this weekend.\nUpdate: I have added those options, you may try it out now.',
                        },
                        {
                            author: 'Die Frauen at Jun 19, 2025',
                            question: 'Hello, first of all I would like to congratulate you on creating what\'s probably the best card editor there is, and thank you for making things convenient for everyone using it. I shall formally make a request of sorts in a different report, but I couldn\'t just not commend the efforts you and all others involved have done. Even managed to  mesh together the Link Arrows for a Pendulum frame in a not entirely unsightly way, and the new hue feature for advanced layouts is also superb for custom card frame efforts.\n\nSuperb work, keep it up',
                            answer: 'Thanks for your kind words, appreciate your support.',
                        },
                        {
                            author: 'Not really a feedback but... at Jun 19, 2025',
                            question: 'It would be cool to see the Attributes in other languages available in TCG',
                            answer: 'I have added many more Attributes that I could find on Yugipedia.',
                        },
                        {
                            author: 'KaibaSetoo at Jun 15, 2025',
                            question: 'Hello, can you fix the scale number 10, 11 and 12. They are not in the center of the scale value border. Thank you.',
                            answer: 'I have updated some cases, but please note that some scale numbers does not place at the center of the box at all, but deviated a bit to the right side (very clear in cards like "D/D Savant Kepler").',
                        },
                        {
                            author: 'Anonymous User at Jun 16, 2025',
                            question: 'Can you change back the *LINK-* text as before, like before the increase card larger update, the letter *L* is now higher.',
                        },
                        {
                            author: 'Anonymous User at Jun 16, 2025',
                            question: 'And the LINK number are now higher then the text too.',
                        },
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
                            answer: 'I have added finish type 9, this is my best and final attempt, sorry if it does not match your need.',
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