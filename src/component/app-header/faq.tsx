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
        const currentReminder = '23/12/2025';
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
            author: 'Blake at Dec 23, 2025',
            question: 'Did you use boundless cause I’m trying to make the object the image go over the card.',
            answer: 'Yeah boundless layout is the main option to use. But the hard thing here is that you need a transparent artwork to combine with it to make a proper overframe card, which the app cannot help.',
        },
        {
            author: 'Ebrahim at Dec 23, 2025',
            question: 'when I click on the xyz background template the 1st Edition text is in black not white and it\'s hard to see please fix immediately.',
            answer: 'It\'s done, the text should display properly now.',
        },
        {
            author: 'A-Rex at Dec 22, 2025',
            question: 'Me gustaría poder colocar 1a edición\nPero en su lugar aparece 1st Edition\nQuisiera poder poner manualmente eso.',
        },
        {
            author: 'Ralph at Dec 22, 2025',
            question: 'quisiera poner la marca 1a edición\npero en su lugar pone 1st edition\nme gustaría poder al menos colocarla manualmente.',
            answer: 'I have implemented a customizable edition text with predefined options, you may try it now.',
        },
        {
            author: 'Blake at Dec 21, 2025',
            question: 'When are you going to be adding the overframe rare?',
            answer: 'With Layout options the app is already able to create cards with extended art (see attached image), but I will need to tweak some behaviors so it looks more correct.\nGrandmaster Rare however is a different story, as it use an entirely different set of layers and I can only wait for talented artists to extract them.',
            image: 'https://i.imgur.com/a6ZlmEg.png',
        },
        {
            author: 'Blake at Dec 18, 2025',
            question: 'I can’t download the card with a new attribute.',
        },
        {
            author: 'Blake at Dec 18, 2025',
            question: 'It won’t let me upload the card with a custom attribute.',
            answer: 'Hi there, the app will now correctly show what is happening. In short, this is a security feature of your browser (not the app) that protect you from potential dangers of the image link, so you must manually download the image.',
        },
        {
            author: 'TOVYA at Dec 13, 2025',
            question: 'Chào bạn, bạn có thể thêm vào hướng dẫn cách chạy project này của bạn bằng Docker trong README.md không á?',
            answer: 'Done nha.',
        },
        {
            author: 'Anonymous User at Dec 13, 2025',
            question: 'would it be possible to add the ability to upload custom attribute icons?',
            answer: 'Right now I can only support using external link for attribute, so you can upload your custom attribute icon to an image hosting service (e.g., imgur) and use the link in the attribute input box.',
            image: 'https://i.postimg.cc/cJMFW3M1/image.png',
        },
        {
            author: 'TheTonyB at Dec 12, 2025',
            question: 'I noticed Korean and Portuguese are missing from Attributes languages. Can you add those? Specially portuguese which is my main language.\nCould you also add other language options to the "1st Edition"/"Limited Edition" text or allow for a custom text?\nThanks and keep up the great work!',
            answer: 'Hi there, unfortunately I have no access to those language sprites, so I cannot add them at the moment (somehow Yugipedia does not have attributes in Portugese and Korean even though they have the rest of official supported languages).',
        },
        {
            author: 'Anonymous User at Dec 04, 2025',
            question: 'Hello! I\'ve noticed there\'s a problem with these 3 new cards :\nMagnet Warrior Σ－\nMagnet Warrior Σ＋\nMagnet Warrior Ω+\n\nI\'ve noticed that Konami is using new characters, and unfortunately, they\'re not displaying correctly for creating cards. Could you please fix this?\nThanks in advance.\nLigerrFanArt',
            answer: 'Because those cards do not have an offical TCG version yet, so I will just import OCG font for this case.',
        },
        {
            author: 'Anonymous User at Oct 26, 2025',
            question: 'Square brackets are not displayed properly in the card name.',
            answer: 'I have updated the letters.',
        },
        {
            author: 'I have assets to donate! at Oct 23, 2025',
            question: 'Konami\'s new Genesys card searcher initially had high-resolution renders of all cards. I snagged a few before they "fixed" it (now their images are low-res again...) and used them to correct all the card frames, bevels, level stars, text boxes, fonts, and even text colors. I\'m talking major corrections that took me hours since I\'m not very efficient in Photoshop.\nAt the very least, your current Spell and Synchro frames need updating. Not only are the colors off, but there\'s actually an artifactual defect running across the entire right edge that you inherited from 9558able\'s frames (it\'s actually on all of them, but most visible on the Spell frame).\nAs far as I can tell, my updated assets now produce the most accurate proxies anywhere. I would like to donate them! I don\'t see a way to email you, but please email me at *******88@gmail.com if you\'re interested.\nI can reply with specifics and send you some comparisons.',
            answer: 'Hi there, thanks for your generosity. I have already emailed you at Oct 24, hopefully I can make some good use out of it.',
        },
        {
            author: 'Problem at Oct 22, 2025',
            question: 'Hi, just to let you know that there are new characters on the Magnet cards that I haven\'t inserted here. I think you should be aware of this. This character "±" is not displayed on the cards for example. \n\nKind regards\nLigerrFanArt',
            answer: 'Hi there, thanks for the head-up, I have updated the letter "±" specifically, but will wait a bit before adding new one because the TCG might not use those characters at all.',
        },
        {
            author: 'New Character Title at Oct 11, 2025',
            question: 'Elvennotes ~Homecoming Paralleism~\nElvennotes ~Reunion Tercet~\nElvennotes ~Maddening Rhapsodia~\nElvennotes ~Oracle Alicetea~\n\nHello,\nI noticed that these cards that will be released soon do not display the character "~" correctly. I hope you can do something about it. \n\nThanks \nLiger',
            answer: 'I have updated the font, hopefully it looks better now.',
        },
        {
            author: 'Anonymous User at Oct 08, 2025',
            question: 'Missed you so much bro its been a month',
            answer: 'Me too, me too.',
        },
        {
            author: 'Anonymous User at Sep 28, 2025',
            question: 'For some reason, the border changes depending on the card type even though it\'s set to Default',
            answer: 'It seems like the card border is not loaded yet, so it exposes the underlying frame. I have replicate your card but does not see the same issue, does the problem still persist?',
        },
        {
            author: 'mguesiten at Sep 28, 2025',
            question: 'for the accented letter for example "é" or "à"',
            answer: 'This is a known issue, unfortunately I haven\'t found any better font with correct accents display, sorry for the inconvenience.',
        },
        {
            author: 'Anonymous User at Sep 26, 2025',
            question: 'hi m8. luv your work. i was thinking about two things. maybe 1 option for anime cards like in Vrains. another option to adjust the colour and saturation of the card frame. thks again for your work',
            answer: 'Hi there, currently I do not have time needed for new templates, but for the color option, have you checking out the Advanced Layout option? If will allow you to change current frame\'s color at will, which seem suitable for your use-case.'
        },
        {
            author: 'OCG Proxy Secret Rare at Sep 18, 2025',
            question: 'Is there a way to implement a Predefined or a pattern similar to the OCG Rainbow Secret Rare proxy text, please?',
            answer: 'Hi there, I have added a new predefined preset for this case, you may try it now.',
        },
        {
            author: 'Elttaest the Master of Duels at Sep 18, 2025',
            question: 'Hi. Love your work, just wondering - with Elttaes, the Master of Duels and Dragon of Illumination, Sanctuary\'s Shield, shouldn\'t we have enough data to make Rush Duel cards in English as well? The font seems the same in both English and Japanese. And the card name seems the same used in TCG, although I can\'t really make out what the Japanese font is. Sorry again for this. Just curious. Thanks for your time',
            answer: 'Hi there, you are right that both cards can be used as a template for Rush Duel cards, but the main problem before the template itself is that currently I don\'t have enough resources for such project right now, so I can\'t promise anything at this moment. I will keep this in mind and see if I can do it in the future.',
        },
        {
            author: 'Outline at Sep 17, 2025',
            question: 'When placing an outline a location 0/0, the line is not aligned equally throughout the letter',
            answer: 'Hi there, this is a known issue for Chrome on Windows, which currently I\'m unable to fix. You can see the same card display perfectly fine on Chrome on MacOS.',
            image: 'https://i.postimg.cc/MZsjtS2k/Screenshot-2025-09-17-at-08-09-48.png',
        },
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