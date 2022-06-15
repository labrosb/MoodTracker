import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mapMoodTypesToState } from '../../utils/moodStateMappers';
import type { MoodValue } from '../../models/mood';
import type { SelectedMoodTypes } from '../../utils/moodMappers';
import type { MoodState } from '../../utils/moodStateMappers';
/**
 * State Structure: MoodState[]
    [{
      id: MoodType,
      values: [
        valueId: MoodValue
        count: number
      ]
    }]
 */
const initialState: MoodState[] = mapMoodTypesToState();

const moodTypesSlice = createSlice({
  name: 'moodTypes',
  initialState,
  reducers: {
    addMoodInfo: (state, action: PayloadAction<AddMoodInfoAction>) => {
      const { moodValue, moodTypes } = action.payload;
      state.forEach((stateMoodType) => {
        // Checks if there is a change to be applied
        if (moodTypes[stateMoodType.id]) {
          // Find the array index that matches the valueId
          const index = stateMoodType.values.findIndex(
            (v) => v.valueId === moodValue
          );
          if (index > -1) {
            // Increase counters
            stateMoodType.values[index].count += 1;
            stateMoodType.total += 1;
          }
        }
      });
      return state;
    },
  },
});

export const { addMoodInfo } = moodTypesSlice.actions;
export default moodTypesSlice.reducer;

type AddMoodInfoAction = {
  moodValue: MoodValue;
  moodTypes: SelectedMoodTypes;
};
