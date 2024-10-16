import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { WordList } from '@/entities/Word';
import { AnimatePageWrapper, Button } from '@/shared/ui';
import { Link, useParams } from 'react-router-dom';

const TopicDetailsPage = () => {
  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug)!;

  return (
    <AnimatePageWrapper>
      <div className={cls.imageBlock}>
        <currentTopic.Icon color={'inherit'} width={110} height={110} />
      </div>
      <div className="paddings-content">
        <h2 className={cls.title}>{currentTopic.title}</h2>
        <Link to={'game'} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>Учить</Button>
        </Link>
        <WordList words={currentTopic.words} className={cls.wordList} />
      </div>
    </AnimatePageWrapper>
  );
};

export default TopicDetailsPage;
