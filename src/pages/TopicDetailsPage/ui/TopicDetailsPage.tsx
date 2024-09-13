import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { WordList } from '@/entities/Word/ui/WordList/WordList.tsx';
import { Typography } from 'antd';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';

const TopicDetailsPage = () => {
  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug)!;

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
          <Button
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
        </div>
        <WordList words={currentTopic.words} className={cls.wordList} />
      </div>
    </div>
  );
};

export default TopicDetailsPage;
