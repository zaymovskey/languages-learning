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
import { type FC, useEffect, useState } from 'react';

interface IInputProps extends IQuestionComponentProps {
  className?: string;
}

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

  const [isRightAnswerIsTranscription, setIsRightAnswerIsTranscription] =
    useState<boolean>();

  useEffect(() => {
    setIsRightAnswerIsTranscription(Math.random() < 0.5);
  }, []);

  const refreshQuestion = () => {
    setIsAnswerWrong(false);
    setIsAnswerGiven(false);
    setIsRightAnswerIsTranscription(Math.random() < 0.5);

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
          <>
            {isRightAnswerIsTranscription
              ? rightAnswer.russian
              : rightAnswer.transcription}
          </>
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
