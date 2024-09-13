import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { QUESTION_TYPES } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { WordList } from '@/entities/Word/ui/WordList/WordList.tsx';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';

const TopicDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug)!;

  const onClickLearn = () => {
    const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
    dispatch(currentTopicActions.setQuestionType(QUESTION_TYPES[randomIndex]));
  };

  return (
    <div>
      <div className={cls.imageBlock}>
        <currentTopic.Icon color={'inherit'} width={110} height={110} />
      </div>
      <div className="paddings-content">
        <Typography.Title level={2} className={cls.title}>
          {currentTopic.title}
        </Typography.Title>
        <div style={{ textAlign: 'center' }}>
          <Link to={'game'}>
            <Button
              onClick={onClickLearn}
              type="primary"
              style={{
                backgroundColor: 'var(--color-accent-third)',
                color: 'var(--color-background)',
                textTransform: 'uppercase',
                padding: '25px 30px',
                fontWeight: 700,
                borderRadius: 50,
              }}
            >
              Учить
            </Button>
          </Link>
        </div>
        <WordList words={currentTopic.words} className={cls.wordList} />
      </div>
    </div>
  );
};

export default TopicDetailsPage;
