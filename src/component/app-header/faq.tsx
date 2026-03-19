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
        const currentReminder = '19/03/2026';
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
            author: 'Anonymous at March 19, 2026',
            question: 'I am not sure if this is even feasible, but I think it\'d be mighty convenient if there was a feature that allowed you to display the submitted card art mirrored in the card display, to save the bother of mirroring it beforehand.',
            answer: 'Hi, now card artwork / background will allow you to flip the image horizontally / vertically.',
            image: 'https://i.postimg.cc/fT68pVrZ/Screenshot-2026-03-19-at-11-44-37.png',
        },
        {
            author: 'RedSupernovaDragon at March 17, 2026',
            question: 'Hello again, I have some news that could help you in fixing the "name box shrinking issue". I tried to see if it was a common problem on similar sites; I typed the whole alphabet and the numbers on YGOPro and found out that it does not have such a defect: letters in the name box shrink normally, keeping their ratio and heights. As your site is objectively superior to YGOpro in terms of card making, image quality and UI, I was wondering if you could try something more to fix the issue, particularly on pc but mobile version would be nice too.\nNamely, you could do 3 things:\n1. Taking inspiration by how YGOpro managed to code the compression. To be clear, this is *not* an incitation to plagiarism, just a small comparison; maybe DevTools can show you how they coded that specific feature, so you can see if there is any substantial difference in the lines. IDK, but there must be a reason why their carder displays the right text at any length.\n2. You could simply try a different font file. I assume you uploaded fonts on this site, perhaps the rendering problem is due to the otf / ttf / whatever file itself.\n3. Finally, you could focus on mastering the manipulation of curved strokes, what is currently difficult for you. You managed to fix basically every other letter, at least on PC; on mobile there are still some issues even with E and I, but that may be related to my browser.\n\nI regard this issue as much more fundamental than it seems, since it affects basically every card with a (not so) long name created with your site.\nThere has to be a solution, otherwise it would be really sad to keep this defect. I think that details like this matter, even more than other features. A realistic proxy can have some defects that are not visibile at first glance; those defects do not include a letter O that goes Over the top in the name box, which is one of the first things you read on a card.\n\nI tried to give some suggestions, hoping that my words didn\'t sound too bad or out of place. And I also hope that this problem will be solved sooner or later.\nLooking forward to the next updates!',
            answer: 'Thanks, I know how irritating this problem is, and believe me, I\'ve spent quite a while trying to figure something out over the past years. The cause is very clear, rendering the font in large size causes the problem to appear when they are condensed. I just can\'t find a way to effectively solve it.\nI appreciate your suggestions though, here is what I have done:\n1. Unfortunately, all other card makers (as far as I know) are closed-source, which means I basically cannot access their codebase to see what they are doing at all.\n2. I did try the font from YGOPro card maker and ygocardmaker.net before, but to no avail.\n3. This is my only tactic right now: keep throwing fixes at the wall to see what sticks 😭.\nAnyway, I have issued another experimental fix for now. If you encounter the problem again (which unfortunately is likely), please attach an image of the app (the report dialog has a screencapture function). It may help me a bit when evaluating any future fixes. Appreciate your help.'
        },
        {
            author: 'MaSaHo at March 11, 2026',
            question: 'I recently noticed that Yu-Gi-Oh cards have had several small reformulations throughout the life of the game, which they call “Series”, and your model is equivalent to Series 10 (the current one). Do you have plans to add the older series layouts at some point in the future?',
            answer: 'Hi there, unfortunately that will require access to old series templates as well as a list of changes made over time, which I currently do not have. The app can only support a few limited options (for example, "small" and "large" pendulum frames, or the old position for the "1st Edition" text), but that is about it.',
        },
        {
            author: 'Seamornf at March 09, 2026',
            question: 'Hi! Love the work. I found that because traps in portuguese have the longest name of any attribute currently, the last "A" is getting the shadow from the name border.',
            answer: 'I have updated the issue, thanks for your report.',
        },
        {
            author: 'RedSupernovaDragon at March 07, 2026',
            question: 'Well, it\'s really unlucky for the name box to have those shrinking issues that you cannot fix at the moment. At least the problem was noticed.\nAside from this issue, there is a (very) small UI update you could make: in the frame panel, "Ritual" is currently placed after "Link"; a better position would be between "Effect" and "Fusion", since\n1) Rituals are Main Deck monsters;\n2) they were introduced early along with Fusions;\n3) this "R, F, S, X" order is the most natural, and it\'s found in some cards like the Firewall upgrades..',
            answer: 'Yeah, I\'m not the font maker so I can only have limited control over the font rendering. About your recommendation for the ritual frame, it should have been updated now.',
        },
        {
            author: 'RedSupernovaDragon at March 05, 2026',
            question: 'Thank you very much for making the paragraph box static.\nWonderful fix for the letters! Unfortunately, there are other similar height issue: on "o"/"O", "q", and some of the numbers (namely 1, 2, and 0). When compression is necessary to fit longer names in the box, all of these characters are taller than they should be to fit on a common line.\nIt\'s a really frustrating issue, I know, especially since the font is supposed to be Regular. Thanks in advance for your working on this issue.',
            answer: 'Right now, it is quite difficult for me to handle characters with curved strokes (like the letters O, Q, and the numbers 0, 3, 6, 9), because they actually protrude slightly beyond the normal top/bottom baselines as far as I can investigate. I might double check the bases of numbers 1 and 2, and that may be it. Sorry for the inconvenience.',
        },
        {
            author: 'RedSupernovaDragon at March 04, 2026',
            question: 'Hello again, about the "i"/"I" issue, I tried to write the whole alphabet (upper and lower case) in the name box and I have to report the same issue for "E" and "N", at least from pc version.',
            answer: 'Now this is really getting out of hand 😭. I have issued another fix for this.',
        },
        {
            author: 'RedSupernovaDragon at March 03, 2026',
            question: 'Hello! First off, thank you very much for this cardmaker, I\'m new to custom cards but this  carder has already become my favourite.\nI\'m using the site on pc, and noticed that when you open the "Paragraph Style" section, its width does not stay fixed like the other settings, but it slides to the right until it eventually stops. I was wondering if you could fix this by making it static, since it\'s kind of difficult to select the things you want while they\'re moving.\nThank you again for your work!',
            answer: 'The paragraph panel should have fixed width now.',
        },
        {
            author: 'Yugiohfann at March 03, 2026',
            question: 'Thank you so much for fixing the "i" letter for me, but it seems the issue has been fixed in the Android version, and the PC version still has the "i" letter sometimes positioned higher and sometimes lower 😭😭.',
            answer: 'It\'s okay, at least something is working 😭. If possible, please also send me the report from the app on the bugged browser (it seems you send most of your reports from Chrome on a mobile device). The report will include additional information about your browser that may help me investigate further. Sorry for the inconvenience.',
        },
        {
            author: 'Yugiohfann at March 02, 2026',
            question: 'I use 813x1185 resolution, can you adjust the height of the letter "i" so that it\'s the same height as the other letters in the name box? Thank you.',
            answer: 'I have updated the font a bit, if this does not improve your issue I\'m sorry I cannot do much more to help.',
        },
        {
            author: 'MaSaHo at March 01, 2026',
            question: 'Is there a plan to update the foil border? I mean, adding the rainbow pattern of the new Overframe cards, as well as the assets from the Grand Master version?',
            answer: 'I would love to but right now I am entirely depend on other artists to provide the assets for those first, so I cannot give a clear ETA on that.',
        },
        {
            author: 'LigerrFanArt at Feb 24, 2026',
            question: 'Hello,\nI noticed a formatting issue with italic text in the effect box (Normal Monster text).\nWhen a line starts directly with a parenthesis, for example:\n"(This card is always treated as an "Archfiend" card.)"\nthe italic formatting does not activate properly.\nTo make the italics work, I have to manually add a space before the "(" at the beginning of the line. However, adding this space causes the text to shift\nslightly and the font size to shrink, as the entire text box appears to be recalculated and resized.\nIt seems like the issue may be related to how the parser handles lines beginning with a parenthesis.\nJust reporting it in case it helps improve the tool.\nThanks for your work!\n\nLigerrFanArt',
            answer: 'I have fixed the issue T.T',
        },
        {
            author: 'TheTonyB at Feb 23, 2026',
            question: 'Spell/Trap icon finishes not working with high-res cards.',
            answer: 'I have fixed the issue.',
        },
        {
            author: 'El Kebabini at Feb 17, 2026',
            question: 'The german Attribute for Dark Finsternis is wrong. It\'s too condensed.',
            answer: 'I am sorry but that is the only one that I have access to, I will update it if I can but right now it\'s really hard to get access to attributes for other languages.',
        },
        {
            author: 'Long at Feb 16, 2026',
            question: 'Why did you change the font color? The default text used to be black, but now it’s gray, and I don’t think this change was necessary.',
            answer: 'I am experimenting with a new color based on high-res official proxy from Konami site, so it may get further adjusted to fit the nature of the app. But you can always change it to pure black in Effect > Text Style. Sorry for the inconvenience.',
        },
        {
            author: 'LigerrFanArt at Feb 14, 2026',
            question: 'Hi,\nWhen I disable “best effort render” to get the rainbow effect on my card, it disables ATK / and DEF / in your menu.\nWould it be possible to add a new section next to Foil, with a Rainbow version alongside Gold and Platinum — unless you’re already working on that?\nI had to manually add ATK / and DEF / in Photoshop myself.\n\nThx\nLigerrFanArt',
            answer: 'Now best effort render option will no longer affect ATK / DEF texts (always display as long as there are values).\nFor rainbow foil unfortunately I am entirely dependent on the assets I can find, and currently I have no access to the frame assets needed for it.',
        },
        {
            author: 'Anonymous at Jan 25, 2026',
            question: 'I was thinking it would be nice to have the Rainbow border similar to the Prismatic SR OCG Proxies and the Maximum Gold Premium Rare ones',
            answer: 'I would love to do that, unfortunately I have no access to the frame assets needed.',
        },
        {
            author: 'Gio at Jan 05, 2026',
            question: 'In Trap cards, the words for the card type are very close together because there isn’t enough spacing between the letters (this doesn’t happen in Spell cards). Also, the letter A is slightly taller than the other letters (I haven’t checked if this happens with other letters as well), and the words look a bit uneven.\nIn Monster cards, the line that is right above ATK and DEF is thicker than in the original cards.\nRegards!',
            answer: 'I have updated the font and spacing, as well as reduced the line thickness for ATK/DEF separator for a bit.',
        },
        {
            author: 'TheTonyB at Jan 04, 2026',
            question: 'Hey, it\'s me again.\n\nSorry. I noticed the positioning of the edition text is off and the font is slightly wrong. \n\nWhen comparing to a real card, the edition text is too much to the right, it should be shifted to the left closer to the passcode.\n\nAbout the font being slightly off, It\'s more noticeable in the Italian, Portuguese and Spanish presets of the edition text. Compared to my real PT cards, the "ª" is wrong, it should be higher and be bold and underlined (it\'s not a problem with the text of the presets, it seems to be the font itself).\n\nLooking closer the font actually seems to be different from the real cards. It looks like the shapes of the letters is slightly different. As examples, the top stroke of the loop of the "d" in the real card seems to match the height of the gap betweeen the base of the "i" and the dot, the current font has that stroke matching the height of the base of the "i" right below the gap, making the "d" appear "taller". The shape of the serif of the "c" also looks diferent, but that\'s about what I could notice comparing this to the microscopic text on an actual TCG card\n\nAnd maybe, I\'m not so sure, but in the real cards the font looks slightly thicker too? I might be wrong about this though as it might be the lighting in my room.\n\nThanks in advance!',
            answer: 'I have updated the edition text offset and fix the ordinal letter "ª". As for the font itself, currently there is not much I could do right now as finding another font that matches perfectly is quite hard (at least from what I have access to), so I must leave it as is.',
        },
        {
            author: 'TheTonyB at Dec 30, 2025',
            question: 'Hey, Lauqerm! Thanks for adding the Portuguese atributes and custom edition text! (Korean coming soon? :))\n\nAnyway, I have another suggestion:\nSince there\'s already a legacy placement option in adition to regular placement of the edition text, what if we could have two different edition texts simultaneously, one in each position?\n\nI imagine this may be more complicated to implement, but it would open up more customization potential. I don\'t mind if this feature isn\'t added though. I can just edit the card in photoshop if I want both texts, this is more of a suggestion than a feature request.\n\nAs always, keep up the good work. Your card maker is absolutely GOATED.',
            answer: 'I have received an asset donation for PT attributes; hopefully, there will be another one for KR soon.\nI have also added an option for text below the image\'s left corner. Choosing legacy display will simply switch the positions between it and the edition text.',
        },
        {
            author: 'Anonymous at Dec 30, 2025',
            question: 'I’d like to use the original attributes in Spanish, where the word extends beyond the limits of the sphere, but when I upload my custom attribute the icon gets compressed and flattened. I designed the attributes from the original Spanish cards in case you’d like to replace them. I’ve also noticed that the Effect Monster card color is a slightly darker shade than the original ones. Here is the link with the attribute icons and the different card frame types, in case you’d like to review it. Thank you, and congratulations—this is the best Card Maker I’ve tried: \nhttps://we.tl/t-niKReItUvF\n\n*If you would like me to modify the attributes to a specific resolution or dimensions, or help you with others languages you can write to me at giohesse7@gmail.com',
            answer: 'Custom attribute will now respect the image\'s ratio when resizing so it no longer get stretched, I also tried some heuristic approach to ensure that it will be at correct position to avoid more complicated manual placement.\nFor the effect monster background though currently I must leave it as is, but thanks for your report.',
        },
        {
            author: 'Anonymous at Dec 26, 2025',
            question: 'There is an error with the vowel accent marks in Spanish (e.g., á, é, í, ó, ú). It appears that the font does not support the Spanish language, as the accented characters look completely different from the original font. Could you please fix the font for this language?',
            answer: 'I have tweaked the font a bit, hopefully it looks better now.',
        },
        {
            author: 'Ebrahim at Dec 24, 2025',
            question: 'An option to maybe reduce the size of the "Edition" section similarly the LIMITED EDITION tag.',
            answer: 'It is a bit cumbersome so for now I will just limit the section\'s maximum width, the text should auto compress if it is too long.',
        },
        {
            author: 'Blake at Dec 23, 2025',
            question: 'Did you use boundless cause I’m trying to make the object the image go over the card.',
            answer: 'Yeah boundless layout is the main option to use. But the hard thing here is that you need a transparent artwork to combine with it to make a proper overframe card, which the app cannot help.\nIn any case I plan to readjust the option a bit for more clarity, and also add sample cards for easy demonstration.',
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
            author: 'I have assets to donate! at Oct 23, 2025',
            question: 'Konami\'s new Genesys card searcher initially had high-resolution renders of all cards. I snagged a few before they "fixed" it (now their images are low-res again...) and used them to correct all the card frames, bevels, level stars, text boxes, fonts, and even text colors. I\'m talking major corrections that took me hours since I\'m not very efficient in Photoshop.\nAt the very least, your current Spell and Synchro frames need updating. Not only are the colors off, but there\'s actually an artifactual defect running across the entire right edge that you inherited from 9558able\'s frames (it\'s actually on all of them, but most visible on the Spell frame).\nAs far as I can tell, my updated assets now produce the most accurate proxies anywhere. I would like to donate them! I don\'t see a way to email you, but please email me at *******88@gmail.com if you\'re interested.\nI can reply with specifics and send you some comparisons.',
            answer: 'Hi there, thanks for your generosity. I have already emailed you at Oct 24, hopefully I can make some good use out of it.',
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
            author: 'Anonymous User at Sep 26, 2025',
            question: 'hi m8. luv your work. i was thinking about two things. maybe 1 option for anime cards like in Vrains. another option to adjust the colour and saturation of the card frame. thks again for your work',
            answer: 'Hi there, currently I do not have time needed for new templates, but for the color option, have you checking out the Advanced Layout option? If will allow you to change current frame\'s color at will, which seem suitable for your use-case.'
        },
        {
            author: 'Elttaest the Master of Duels at Sep 18, 2025',
            question: 'Hi. Love your work, just wondering - with Elttaes, the Master of Duels and Dragon of Illumination, Sanctuary\'s Shield, shouldn\'t we have enough data to make Rush Duel cards in English as well? The font seems the same in both English and Japanese. And the card name seems the same used in TCG, although I can\'t really make out what the Japanese font is. Sorry again for this. Just curious. Thanks for your time',
            answer: 'Hi there, you are right that both cards can be used as a template for Rush Duel cards, but the main problem before the template itself is that currently I don\'t have enough resources for such project right now, so I can\'t promise anything at this moment. I will keep this in mind and see if I can do it in the future.',
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
        <Modal width={600} visible={visible} onCancel={() => setVisible(false)} footer={null}>
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