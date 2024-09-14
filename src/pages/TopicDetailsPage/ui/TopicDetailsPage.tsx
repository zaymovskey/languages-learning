import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { WordList } from '@/entities/Word/ui/WordList/WordList.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Link, useParams } from 'react-router-dom';

const TopicDetailsPage = () => {
  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug)!;

  return (
    <div>
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
    </div>
  );
};

export default TopicDetailsPage;
