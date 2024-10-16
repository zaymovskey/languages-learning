import {
  type IPrevUrlScheme,
  prevUrlReducer,
  prevUrlSlice,
  prevUrlActions,
} from './model/prevUrlSlice.ts';
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
  prevUrlReducer,
  prevUrlSlice,
  IPrevUrlScheme,
  removeLastSegment,
  prevUrlActions,
};
