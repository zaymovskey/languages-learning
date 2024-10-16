import {
  type IGlobalScheme,
  globalReducer,
  globalSlice,
  globalActions,
} from './model/globalSlice.ts';
import { classNames } from './utils/classNames/classNames.ts';
import { getRandomNumberFromInterval } from './utils/getRandomNumberFromInterval/getRandomNumberFromInterval.ts';
import { getRandomUniqueElements } from './utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { playWord } from './utils/playWord/playWord.ts';
import { removeLastSegment } from './utils/removeLastSegment/removeLastSegment.ts';

export {
  classNames,
  playWord,
  getRandomNumberFromInterval,
  getRandomUniqueElements,
  globalReducer,
  globalSlice,
  IGlobalScheme,
  removeLastSegment,
  globalActions,
};
