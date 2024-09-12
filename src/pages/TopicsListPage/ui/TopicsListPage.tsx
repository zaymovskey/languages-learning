import { ITopicListItem } from '@/entities/Topic/ui/TopicListItem/TopicListItem.tsx';
import { TopicsList } from '@/entities/Topic/ui/TopicsList/TopicsList.tsx';
import { WorkoutRunIcon } from '@/shared/assets/icons.tsx';

const topics: ITopicListItem[] = [
  { title: 'Тема 1', Icon: WorkoutRunIcon },
  { title: 'Тема 2', Icon: WorkoutRunIcon },
  { title: 'Тема 3', Icon: WorkoutRunIcon },
];

const TopicsListPage = () => {
  return (
    <div>
      <TopicsList topics={topics} />
    </div>
  );
};

export default TopicsListPage;
