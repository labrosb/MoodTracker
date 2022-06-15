import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectSortedMoodTypes = createSelector(
  (state: RootState) => state.moodTypes,
  (moodTypes) => moodTypes.slice().sort((a, b) => b.total - a.total)
);

export { selectSortedMoodTypes };
