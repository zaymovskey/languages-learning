import cls from './InputQuestion.module.scss';
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { IQuestionComponentProps } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { type FC, useEffect, useState } from 'react';

interface IInputProps extends IQuestionComponentProps {
  className?: string;
}

export const InputQuestion: FC<IInputProps> = ({ className }) => {
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

  const handleCheckAnswer = () => {
    setIsAnswerGiven(true);

    const isAnswerWrong = answer !== rightAnswer.hebrew.withoutAnnouncement;
    setIsAnswerWrong(isAnswerWrong);
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
        />
        <Button onClick={handleCheckAnswer}>Проверить</Button>
      </div>
    </div>
  );
};
