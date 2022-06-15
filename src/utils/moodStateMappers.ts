import { MoodValue, MoodType } from '../models/mood';

/** State Mappers */

// Creates map array of Mood Values to counters
const mapMoodValueToStateCounter = (): MoodValueCount[] =>
  Object.values(MoodValue).map((value) => ({
    valueId: value,
    count: 0,
  }));
// Creates map Array of objects of Mood Types and Mood Value arrays with counters (state)
const mapMoodTypesToState = (): MoodState[] =>
  Object.values(MoodType).map((type) => ({
    id: type,
    values: mapMoodValueToStateCounter(),
    total: 0,
  }));

// Types
type MoodValueCount = { valueId: MoodValue; count: number };
type MoodState = {
  id: MoodType;
  values: MoodValueCount[];
  total: number;
};

export { mapMoodTypesToState };

// eslint-disable-next-line no-undef
export type { MoodValueCount, MoodState };
