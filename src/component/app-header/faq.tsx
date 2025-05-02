import { Modal, Tabs } from 'antd';
import { FaqButtonLabel, QuoteContainer } from './styled';
import { useNotification } from 'src/service';
import React, { useEffect, useState } from 'react';

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
    const [
        faqReminder,
        setMemoizedReminder,
    ] = useNotification('faqReminder');

    useEffect(() => {
        if (faqReminder) {
            if (process.env.REACT_APP_VERSION) setMemoizedReminder(false);

            setAnimating(true);
            setTimeout(() => {
                setAnimating(false);
            }, 8000);
        }
    }, [setMemoizedReminder, faqReminder]);

    return <>
        <FaqButtonLabel id="faq-button" $animating={animating} onClick={() => setVisible(cur => !cur)}>
            {'FAQ'}
        </FaqButtonLabel>
        <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
            <Tabs>
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
                <Tabs.TabPane key="feedback" tab="Feedbacks">
                    <div><i>Solved feedbacks are removed.</i></div>
                    <br />
                    {[
                        {
                            author: 'Anonymous User at May 02, 2025',
                            question: 'can you include the icons, attributes and stars if choosing art finishes? and maybe make a choice if we will put art finish or not if choosing art finishes? Thank you!',
                        },
                        {
                            author: 'Anonymous User at May 01, 2025',
                            question: 'Can you add a selection of holographic overlay to the stars, attribute, icons and sticker? that would be a great help for making some super rare cards! Looking forward to this update',
                        },
                        {
                            author: 'Anonymous User at Apr 28, 2025',
                            question: 'Hello, can you add art finishes on attributes, stars, icons and sticker like a holographic overlay to it? It would be a great help! THANKS!!! :))',
                            answer: 'Now you can pick individual finish for each attribute, sticker and card icons (spell/trap icon and stars).',
                        },
                        {
                            author: 'hello there at Apr 30, 2025',
                            question: 'can you make the  top and left lines of Synchro monster name border/box more visible/whiter?',
                            answer: 'Even more white it is.',
                        },
                    ].map(({ author, question, answer }, index) => {
                        return <Quote key={index} author={author} question={question}>
                            {answer}
                        </Quote>;
                    })}
                </Tabs.TabPane>
            </Tabs>
        </Modal>
    </>;
};