import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './GamePage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions, Statistics } from '@/entities/Game';
import { QUESTION_TYPES, QUESTION_TYPES_COMPONENTS, useNextQuestion, } from '@/entities/Question';
import { classNames } from '@/shared/lib';
import { useParams } from 'react-router-dom';
const GamePage = () => {
    const dispatch = useAppDispatch();
    const { slug } = useParams();
    const currentTopic = TOPICS.find((topic) => topic.slug === slug);
    if (!currentTopic) {
        return _jsx("div", { children: "\u0422\u0435\u043C\u0430 \u043D\u0435 \u043D\u0430\u0438\u0306\u0434\u0435\u043D\u0430" });
    }
    const toNextQuestion = useNextQuestion();
    const currentQuestionType = useAppSelector((state) => state.currentTopic.currentQuestionType);
    const isBlocked = useAppSelector((state) => state.currentTopic.isBlocked);
    if (currentQuestionType === null) {
        const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
        dispatch(currentTopicActions.setCurrentQuestionType(QUESTION_TYPES[randomIndex]));
        dispatch(currentTopicActions.setWords(currentTopic.words));
    }
    const QuestionComponent = QUESTION_TYPES_COMPONENTS[currentQuestionType || 'Input'];
    return (_jsx("div", { className: classNames('', { [cls.blocked]: isBlocked }, []), children: _jsxs("div", { className: "paddings-content", children: [_jsx(QuestionComponent, { toNextQuestion: toNextQuestion }), _jsx(Statistics, {})] }) }));
};
export default GamePage;
