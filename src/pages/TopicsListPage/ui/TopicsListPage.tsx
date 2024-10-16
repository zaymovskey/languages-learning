import { TOPICS } from '@/DB.tsx';
import { TopicsList } from '@/entities/Topic';
import { AnimatePageWrapper } from '@/shared/ui';

const TopicsListPage = () => {
  return (
    <AnimatePageWrapper>
      <div className="paddings-content">
        <TopicsList topics={TOPICS} />
      </div>
    </AnimatePageWrapper>
  );
};

export default TopicsListPage;
