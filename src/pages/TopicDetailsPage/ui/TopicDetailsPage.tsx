import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { WordList } from '@/entities/Word/ui/WordList/WordList.tsx';
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
        <div style={{ textAlign: 'center' }}>
          <Link to={'game'}>
            <button
              style={{
                backgroundColor: 'var(--color-accent-third)',
                color: 'var(--color-background)',
                textTransform: 'uppercase',
                padding: '15px 30px',
                fontWeight: 700,
                borderRadius: 50,
              }}
            >
              Учить
            </button>
          </Link>
        </div>
        <WordList words={currentTopic.words} className={cls.wordList} />
      </div>
    </div>
  );
};

export default TopicDetailsPage;
