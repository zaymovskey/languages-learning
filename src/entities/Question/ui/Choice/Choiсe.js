import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './Choice.module.scss';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { classNames, getRandomNumberFromInterval, getRandomUniqueElements, playWord, } from '@/shared/lib';
import { useEffect, useState } from 'react';
export const Choice = ({ toNextQuestion }) => {
    const dispatch = useAppDispatch();
    const [wordsCount, setWordsCount] = useState(getRandomNumberFromInterval(2, 6));
    const topicWords = useAppSelector((state) => state.currentTopic.words);
    const [currentQuestionWords, setCurrentQuestionWords] = useState(getRandomUniqueElements(topicWords, wordsCount));
    const [rightAnswer, setRightAnswer] = useState(getRandomUniqueElements(currentQuestionWords, 1)[0]);
    const [isShowIcons, setIsShowIcons] = useState(Math.random() < 0.5);
    const [isVariantsLanguageIsHebrew, setIsVariantsLanguageIsHebrew] = useState();
    const [isAnswerLanguageIsHebrew, setIsAnswerLanguageIsHebrew] = useState();
    useEffect(() => {
        setLanguageOfAnswersNQuestions();
    }, []);
    const [isRightAnswerHighlight, setIsRightAnswerHighlight] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const refreshQuestion = () => {
        const newWordsCount = getRandomNumberFromInterval(2, 6);
        setWordsCount(newWordsCount);
        const newRandomUniqueElements = getRandomUniqueElements(topicWords, newWordsCount);
        setCurrentQuestionWords(newRandomUniqueElements);
        setRightAnswer(getRandomUniqueElements(newRandomUniqueElements, 1)[0]);
        setSelectedAnswer(null);
        setIsShowIcons(Math.random() < 0.5);
        setLanguageOfAnswersNQuestions();
    };
    const setLanguageOfAnswersNQuestions = () => {
        const isVariantsLanguageIsHebrew = Math.random() < 0.5;
        let isAnswerLanguageIsHebrew = Math.random() < 0.5;
        if (isVariantsLanguageIsHebrew === isAnswerLanguageIsHebrew) {
            isAnswerLanguageIsHebrew = !isAnswerLanguageIsHebrew;
        }
        setIsVariantsLanguageIsHebrew(isVariantsLanguageIsHebrew);
        setIsAnswerLanguageIsHebrew(isAnswerLanguageIsHebrew);
    };
    const handleSelectAnswer = (word) => {
        dispatch(currentTopicActions.setIsBlocked(true));
        setSelectedAnswer(word);
        const action = word.russian === rightAnswer.russian
            ? currentTopicActions.increaseRightAnswers
            : currentTopicActions.increaseWrongAnswers;
        dispatch(action());
        setTimeout(() => {
            setIsRightAnswerHighlight(true);
            playWord(rightAnswer.hebrew.withoutAnnouncement, () => {
                setTimeout(() => {
                    setIsRightAnswerHighlight(false);
                    toNextQuestion(refreshQuestion);
                    dispatch(currentTopicActions.setIsBlocked(false));
                }, 1000);
            });
        }, 500);
    };
    const isWrongSelectedAnswer = (word) => {
        return (selectedAnswer?.russian === word.russian &&
            selectedAnswer?.russian !== rightAnswer.russian);
    };
    const isRightSelectedAnswer = (word) => {
        return (selectedAnswer?.russian === word.russian &&
            selectedAnswer?.russian === rightAnswer.russian);
    };
    return (_jsxs("div", { children: [_jsx("div", { className: cls.variants, children: currentQuestionWords.map((word, index) => (_jsxs("button", { onClick: () => handleSelectAnswer(word), className: classNames(cls.variantsItem, {
                        [cls.isWrong]: isWrongSelectedAnswer(word),
                        [cls.isRight]: isRightSelectedAnswer(word) ||
                            (word.russian === rightAnswer.russian &&
                                isRightAnswerHighlight),
                    }, []), children: [isShowIcons && (_jsx(word.Icon, { color: 'inherit', width: 40, height: 40 })), _jsx("span", { className: cls.variantText, children: isVariantsLanguageIsHebrew
                                ? word.hebrew.withoutAnnouncement
                                : word.russian })] }, index))) }), _jsx("div", { className: cls.questionWord, children: isAnswerLanguageIsHebrew
                    ? rightAnswer.hebrew.withoutAnnouncement
                    : rightAnswer.russian })] }));
};
