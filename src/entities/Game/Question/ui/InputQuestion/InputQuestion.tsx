import cls from './InputQuestion.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import { IQuestionComponentProps } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { playWord } from '@/shared/lib/utils/playWord/playWord.ts';
import { Button, EnumButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { EnumInputTheme, Input } from '@/shared/ui/Input/Input.tsx';
import { HeadphonesIcon } from 'hugeicons-react';
import { type FC, useEffect, useState } from 'react';

interface IInputProps extends IQuestionComponentProps {
  className?: string;
}

const questionTypes = ['hebrew', 'transcription', 'sound'] as const;
type TypeQuestionTypes = (typeof questionTypes)[number];

export const InputQuestion: FC<IInputProps> = (
  { className, toNextQuestion }
) => {
  const dispatch = useAppDispatch();

  const topicWords = useAppSelector((state) => state.currentTopic.words);

  const [rightAnswer, setRightAnswer] = useState(
    getRandomUniqueElements(topicWords, 1)[0]
  );

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
    if (questionWordType === 'hebrew') {
      return rightAnswer.hebrew.withoutAnnouncement;
    } else if (questionWordType === 'transcription') {
      return rightAnswer.transcription;
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
