import cls from './TopicDetailsPage.module.scss';
import { useAppSelector } from '@/app';
import { WordList } from '@/entities/Word';
import { classNames } from '@/shared/lib';
import { AnimatePageWrapper, Button, LinkWithAnimation } from '@/shared/ui';

const TopicDetailsPage = () => {
  const currentTopic = useAppSelector((state) => state.currentTopic);

  return (
    <AnimatePageWrapper>
      <div className={cls.imageBlock}>
        <currentTopic.Icon color={'white'} width={110} height={110} />
      </div>
      <div className={classNames('paddings-content', {}, [cls.mainContent])}>
        <h2 className={cls.title}>{currentTopic.title}</h2>
        <LinkWithAnimation
          to={'game'}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button>Учить</Button>
        </LinkWithAnimation>
        <WordList words={currentTopic.words} className={cls.wordList} />
      </div>
    </AnimatePageWrapper>
  );
};

export default TopicDetailsPage;
