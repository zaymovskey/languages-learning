import { createSlice } from '@reduxjs/toolkit';

export interface IStopwatchScheme {
  seconds: string;
  minutes: string;
  pause: boolean;
}

const initialState: IStopwatchScheme = {
  seconds: '00',
  minutes: '00',
  pause: false,
};

const increaseTime = (time: string) => {
  const newTime = Number(time) + 1;

  if (newTime < 10) {
    return `0${newTime}`;
  }

  return newTime.toString();
};

const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState,
  reducers: {
    tick(state) {
      if (state.pause) return;

      if (state.seconds === '59') {
        state.seconds = '00';
        state.minutes = increaseTime(state.minutes);
      } else {
        state.seconds = increaseTime(state.seconds);
      }
    },
    reset(state) {
      state.seconds = '00';
      state.minutes = '00';
    },
    toggle(state) {
      state.pause = !state.pause;
    },
    pause(state) {
      state.pause = true;
    },
    play(state) {
      state.pause = false;
    },
  },
});

export const { actions: stopwatchActions } = stopwatchSlice;
export const { reducer: stopwatchReducer } = stopwatchSlice;
