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
        const currentReminder = '28/06/2025';
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