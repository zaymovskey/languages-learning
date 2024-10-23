import cls from './Typing.module.scss';
import { IWord } from '@/DB.tsx';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { IQuestionComponentProps } from '@/entities/Question';
import { useAnswersHistory } from '@/entities/Question/lib/hooks/useAnswersHistory.ts';
import { getWordsAndRightAnswer } from '@/entities/Question/lib/utils/getWordsAndRightAnswer.ts';
import { classNames, getRandomUniqueElements } from '@/shared/lib';
import { playWord } from '@/shared/lib/utils/playWord/playWord.ts';
import { Button, EnumButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { EnumInputTheme, Input } from '@/shared/ui/Input/Input.tsx';
import { HeadphonesIcon } from 'hugeicons-react';
import { type FC, useEffect, useState } from 'react';

interface ITypingProps extends IQuestionComponentProps {
  className?: string;
}

const questionTypes = ['russian', 'transcription', 'sound'] as const;
type TypeQuestionTypes = (typeof questionTypes)[number];

export const Typing: FC<ITypingProps> = ({ className, toNextQuestion }) => {
  const dispatch = useAppDispatch();

  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const answersHistory = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );

  const [rightAnswer, setRightAnswer] = useState<IWord>();

  useEffect(() => {
    const [_, rightAnswer] = getWordsAndRightAnswer(
      topicWords,
      answersHistory,
      1
    );
    setRightAnswer(rightAnswer);
  }, []);

  const addAnswersHistory = useAnswersHistory();

  const [answer, setAnswer] = useState<string>('');

  const [isAnswerWrong, setIsAnswerWrong] = useState<boolean>(false);
  const [isAnswerGiven, setIsAnswerGiven] = useState<boolean>(false);

  const [questionWordType, setQuestionWordType] = useState<TypeQuestionTypes>(
    getRandomUniqueElements<TypeQuestionTypes>([...questionTypes], 1)[0]
  );

  useEffect(() => {
    setQuestionWordType(
      getRandomUniqueElements<TypeQuestionTypes>([...questionTypes], 1)[0]
    );
  }, []);

  const refreshQuestion = () => {
    setIsAnswerWrong(false);
    setIsAnswerGiven(false);
    setQuestionWordType(
      getRandomUniqueElements<TypeQuestionTypes>([...questionTypes], 1)[0]
    );

    const [_, rightAnswer] = getWordsAndRightAnswer(
      topicWords,
      answersHistory,
      1
    );
    setRightAnswer(rightAnswer);

    setAnswer('');
  };

  const handleCheckAnswer = () => {
    dispatch(currentTopicActions.setIsBlocked(true));

    setIsAnswerGiven(true);

    const isAnswerWrong = answer !== rightAnswer!.hebrew.withoutAnnouncement;
    setIsAnswerWrong(isAnswerWrong);

    addAnswersHistory(answer, rightAnswer!.hebrew.withoutAnnouncement);

    setTimeout(() => {
      playWord(rightAnswer!.hebrew.withoutAnnouncement);

      setTimeout(() => {
        toNextQuestion(refreshQuestion);
        dispatch(currentTopicActions.setIsBlocked(false));
      }, 1000);
    }, 1000);
  };

  const handlePlayQuestionWord = () => {
    playWord(rightAnswer!.hebrew.withoutAnnouncement);
  };

  const getQuestionWord = () => {
    if (questionWordType === 'russian') {
      return rightAnswer!.russian;
    } else if (questionWordType === 'transcription') {
      return rightAnswer!.transcription;
    } else if (questionWordType === 'sound') {
      return (
        <Button onClick={handlePlayQuestionWord}>
          <HeadphonesIcon />
        </Button>
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getButtonNInputTheme = (themeEnum: any) => {
    return isAnswerGiven
      ? isAnswerWrong
        ? themeEnum.WRONG
        : themeEnum.RIGHT
      : themeEnum.PRIMARY;
  };

  if (!rightAnswer) return <div></div>;

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <div
        className={classNames(cls.questionWord, {
          [cls.highlight]: isAnswerGiven,
        })}
      >
        {isAnswerGiven ? (
          rightAnswer.hebrew.withoutAnnouncement
        ) : (
          <>{getQuestionWord()}</>
        )}
      </div>

      <div className={cls.inputBlock}>
        <Input
          className={cls.input}
          dir="rtl"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          theme={getButtonNInputTheme(EnumInputTheme)}
        />
        <Button
          onClick={handleCheckAnswer}
          theme={getButtonNInputTheme(EnumButtonTheme)}
        >
          Проверить
        </Button>
      </div>
    </div>
  );
};
