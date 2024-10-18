import { AnimatePageWrapper } from './AnimatePageWrapper/AnimatePageWrapper.tsx';
import { Button } from './Button/Button.tsx';
import { Input } from './Input/Input.tsx';
import { LinkWithAnimation } from './LinkWithAnimation/LinkWithAnimation.tsx';
import { PageLoader } from './PageLoader/PageLoader.tsx';
import {
  type IStopwatchScheme,
  stopwatchActions,
  stopwatchReducer,
} from './Stopwatch/model/stopwatchSlice.ts';
import { Stopwatch } from './Stopwatch/ui/Stopwatch.tsx';

export {
  Button,
  Input,
  PageLoader,
  AnimatePageWrapper,
  LinkWithAnimation,
  stopwatchActions,
  stopwatchReducer,
  IStopwatchScheme,
  Stopwatch,
};
