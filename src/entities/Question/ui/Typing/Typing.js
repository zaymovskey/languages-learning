import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './Typing.module.scss';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { classNames, getRandomUniqueElements } from '@/shared/lib';
import { playWord } from '@/shared/lib/utils/playWord/playWord.ts';
import { Button, EnumButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { EnumInputTheme, Input } from '@/shared/ui/Input/Input.tsx';
import { HeadphonesIcon } from 'hugeicons-react';
import { useEffect, useState } from 'react';
const questionTypes = ['russian', 'transcription', 'sound'];
export const Typing = ({ className, toNextQuestion }) => {
    const dispatch = useAppDispatch();
    const topicWords = useAppSelector((state) => state.currentTopic.words);
    const [rightAnswer, setRightAnswer] = useState(getRandomUniqueElements(topicWords, 1)[0]);
    const [answer, setAnswer] = useState('');
    const [isAnswerWrong, setIsAnswerWrong] = useState(false);
    const [isAnswerGiven, setIsAnswerGiven] = useState(false);
    const [questionWordType, setQuestionWordType] = useState(getRandomUniqueElements([...questionTypes], 1)[0]);
    useEffect(() => {
        setQuestionWordType(getRandomUniqueElements([...questionTypes], 1)[0]);
    }, []);
    const refreshQuestion = () => {
        setIsAnswerWrong(false);
        setIsAnswerGiven(false);
        setQuestionWordType(getRandomUniqueElements([...questionTypes], 1)[0]);
        setRightAnswer(getRandomUniqueElements(topicWords, 1)[0]);
        setAnswer('');
    };
    const handleCheckAnswer = () => {
        dispatch(currentTopicActions.setIsBlocked(true));
        setIsAnswerGiven(true);
        const isAnswerWrong = answer !== rightAnswer.hebrew.withoutAnnouncement;
        setIsAnswerWrong(isAnswerWrong);
        const action = isAnswerWrong
            ? currentTopicActions.increaseWrongAnswers
            : currentTopicActions.increaseRightAnswers;
        dispatch(action());
        setTimeout(() => {
            playWord(rightAnswer.hebrew.withoutAnnouncement);
            setTimeout(() => {
                toNextQuestion(refreshQuestion);
                dispatch(currentTopicActions.setIsBlocked(false));
            }, 1000);
        }, 1000);
    };
    const handlePlayQuestionWord = () => {
        playWord(rightAnswer.hebrew.withoutAnnouncement);
    };
    const getQuestionWord = () => {
        if (questionWordType === 'russian') {
            return rightAnswer.russian;
        }
        else if (questionWordType === 'transcription') {
            return rightAnswer.transcription;
        }
        else if (questionWordType === 'sound') {
            return (_jsx(Button, { onClick: handlePlayQuestionWord, children: _jsx(HeadphonesIcon, {}) }));
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getButtonNInputTheme = (themeEnum) => {
        return isAnswerGiven
            ? isAnswerWrong
                ? themeEnum.WRONG
                : themeEnum.RIGHT
            : themeEnum.PRIMARY;
    };
    return (_jsxs("div", { className: classNames(cls.Input, {}, [className]), children: [_jsx("div", { className: classNames(cls.questionWord, {
                    [cls.highlight]: isAnswerGiven,
                }), children: isAnswerGiven ? (rightAnswer.hebrew.withoutAnnouncement) : (_jsx(_Fragment, { children: getQuestionWord() })) }), _jsxs("div", { className: cls.inputBlock, children: [_jsx(Input, { className: cls.input, dir: "rtl", value: answer, onChange: (event) => setAnswer(event.target.value), theme: getButtonNInputTheme(EnumInputTheme) }), _jsx(Button, { onClick: handleCheckAnswer, theme: getButtonNInputTheme(EnumButtonTheme), children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C" })] })] }));
};
