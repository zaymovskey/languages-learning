import { TOPICS } from '@/DB.tsx';
import { TopicsList } from '@/entities/Topic';

const TopicsListPage = () => {
  return (
    <div>
      <div className="paddings-content">
        <TopicsList topics={TOPICS} />
      </div>
    </div>
  );
};

export default TopicsListPage;
