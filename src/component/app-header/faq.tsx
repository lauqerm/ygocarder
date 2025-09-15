import { Modal, notification, Tabs } from 'antd';
import { FaqButtonLabel, QuoteContainer } from './styled';
import { useNotification } from 'src/service';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const FAD_BUTTON_ID = 'faq-button';

type Feedback = {
    author?: string,
    question: string,
    answer?: string,
    image?: string,
};

const StyledQuoteContainer = styled(QuoteContainer)`
    text-align: center;
    blockquote,
    .answer {
        text-align: left;
    }
    img {
        max-height: 400px;
    }
`;
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
    return <StyledQuoteContainer>
        <blockquote>
            {author && <label>{author}</label>}
            <div className="question">{question}</div>
        </blockquote>
        <div className="answer">{children}</div>
        {image && <img className="image" src={image} alt="answer preview" />}
    </StyledQuoteContainer>;
};

export const QuestionAndFeedback = () => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [faqReminder, setMemoizedReminder] = useNotification('faqReminder');
    const [feedbackReminder, setFeedbackReminder] = useNotification('feedbackReminder');

    useEffect(() => {
        const currentReminder = '15/09/2025';
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
                    setAnimating(false);
                }
            });
        }
    }, [feedbackReminder, setFeedbackReminder]);

    const feedbackList: Feedback[] = [
        {
            author: 'Image disappeards at Sep 15, 2025',
            question: 'Adding the width function removes the image, regardless of the width chosen (it works without it)',
            answer: 'Hi there, your syntax is incorrect, you must put the width attribute between double quotes ("), like this: <img src="https://ms.yugipedia.com//5/59/Type-Cyberse-MADU.png" width="40" />.',
        },
        {
            author: 'Anonymous User at Sep 10, 2025',
            question: 'Ko hiện các dòng chữ hiệu ứng của lá bài',
            answer: 'Đã fix nha bạn.',
        },
        {
            author: 'Jayden at Sep 08, 2025',
            question: 'Not a bug, but a possible suggestion. For my own personal reasons, I would love the opportunity to add either a custom sigil/icon of my own design (link/image upload) that could replace the existing ones, and also, the possibility to paste those and existing sigil’s/icon’s into the effect text of the card. So that maybe I could do for example, “Add 1 (Icon) Quick-Play Spell from your Deck to your hand.”',
            answer: 'This is a rather complex feature, but not impossible, maybe I could extend the preset feature for this. Let\'s see if I can look into it this weekend.',
        },
        {
            author: 'Jayden at Sep 08, 2025',
            question: 'I want to firstly express my most sincere gratitude for such an amazing card maker that makes custom cards appear so professional with no cost on the maker.\nAs for an issue, I have none other than a request / suggestion. Would it be possible to implement Bolded portion of text in the Effect Text? For those users that wish to express unique and more modernised redesigns to card effects.',
            answer: 'I have added an experimental syntax for this case, you may try it now.',
            image: 'https://i.postimg.cc/G3Qd2Ws9/image.png',
        },
        {
            author: 'Armando Giordano at Sep 06, 2025',
            question: 'Thank you for your quick response and for your astonishing work with the Carder. Yes, I am using an iPad and a phone, and, with both devices, when I click on the Download button, it just shows "Saving..." for a second, then no Download starts. I am now on a computer and it works great with left click and "Save as", though it would be nice to be able to use it on mobile.',
        },
        {
            author: 'Armando Giordano at Sep 06, 2025',
            question: 'Sorry for second report in a row! I noticed you asked me specific questions. 1 The App does NOT freeze when trying to download on iPad and Android phone. Just no download starts. 2 The problem was immediately experienced because I discovered the Carder just yesterday.',
            answer: 'Now it\'s a bit strange; usually, if the export process encounters an error, an explicit message will be displayed. In this case, if the download process is already running but no files are downloaded, it could be that your mobile browser is blocking the automatic download due to some advance security settings. All mobile devices I have tested so far do not exhibit the same issue. I will try to investigate this further, but chances are I won\'t be able to resolve it if I cannot reproduce the issue. Sorry for the inconvenience.',
        },
        {
            author: 'Armando Giordano at Sep 06, 2025',
            question: 'Hello! I am loving your work. I hope my issue is not because of ignorance, but it seems like it\'s not possible to download cards as images.',
            answer: 'Hi there, based on the report it seems that you are using an iPad. I don\'t have an iPad to test right now, but could you please provide me some more information?\n1. When you click the Download button, does anything happen? Does the app freeze or it just not doing anything?\n2. Is the problem just appear recently, or it never worked in the first place?',
            image: 'https://i.postimg.cc/Y2fjyvV2/image.png',
        },
        {
            author: 'Numbers at Sep 04, 2025',
            question: 'There\'s a weird glitch that happens when adding numbers. The spacing seems to be inconsistent depending on the content',
            answer: 'Hi there, unfortunately this is by design, as the space between words are calculated so that the entire line fit the space perfectly, so depend on the text, it maybe longer or shorter than usual.\nHowever, if what you want is to align the effect numbers, you can achieve the result by using the following "<pre>" syntax.',
            image: 'https://i.postimg.cc/GhbnM0qt/image.png',
        },
        {
            author: 'Italic text at Aug 31, 2025',
            question: 'Adding a syntax option for Italic in order to make only specific part of the text italic',
            answer: 'I have added an experimental syntax for this case, you may try it now.',
            image: 'https://images2.imgbox.com/c3/1b/OFLOLdf9_o.png',
        },
        {
            author: 'ZorcNecropHades at Aug 26, 2025',
            question: 'Hello, the token text cannot be displayed below. I did not have this problem before when I moved it to the bottom.',
            answer: 'It should be fixed by now.',
        },
        {
            author: 'Anonymous User at Aug 16, 2025',
            question: 'Art Filter #9 seems not to be working with Pendulum frames',
            answer: 'Hi there, I have checked this case and do not see any significant error (see image below), do you have any image to demonstrate the error?',
            image: 'https://images2.imgbox.com/5b/1f/vp8d5wIa_o.png',
        },
        {
            author: '& symbol at Aug 14, 2025',
            question: 'This symbole & isnt correct on display.\nSee photo Magie & Piège',
            answer: 'Hi there, I have checked the letter on a real card and do not see any significant error, do you have any image for how the letter should be displayed?',
            image: 'https://i.imgur.com/xZ9Pp9X.png',
        },
        {
            author: 'Die Frauen at Aug 9, 2025',
            question: 'As for a suggestion related to the pevious query, this may be a bit too crazy, but since it\'s lodged together with the advanced/custom layout feature, do you think perhaps the foil could be split into 5 pieces the same as it? (all 4 corners and the text frame). If it may take too much effort or is not feasible I\'ll understand that.',
            answer: 'I don\'t think this would be possible, as card foils are divided into multiple pieces for different places, so I couldn\'t split them the same way as card frames at all.',
        },
        {
            author: 'Die Frauen at Aug 9, 2025',
            question: 'For convenience\'s sake, I think it\'d be a bit more useful if the foil dye set also had a hue slider, or a toggle for the RGB values like the one in the name coloring tabs... for the less inclined to memorize the Hex values.',
            answer: 'I have added rgb inputs for dye color picker.',
        },
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