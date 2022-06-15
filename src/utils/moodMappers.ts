import {
  faFaceFrown,
  faFaceFrownOpen,
  faFaceMeh,
  faSmile,
  faFaceLaugh,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';

import { MoodValue, MoodType } from '../models/mood';
import { Color } from '../constants/theme';

// Maps Mood Values to Colors
const MoodColorsMap: MoodColorsMapType = {
  [MoodValue.VeryBad]: Color.Minimum,
  [MoodValue.Bad]: Color.Slight,
  [MoodValue.Moderate]: Color.Moderate,
  [MoodValue.Good]: Color.High,
  [MoodValue.VeryGood]: Color.Highest,
};
// Maps Mood Values to icons
const MoodIconsMap: MoodIconsMapType = {
  [MoodValue.VeryBad]: faFaceFrown,
  [MoodValue.Bad]: faFaceFrownOpen,
  [MoodValue.Moderate]: faFaceMeh,
  [MoodValue.Good]: faSmile,
  [MoodValue.VeryGood]: faFaceLaugh,
};
// Creates map of Mood Types to object with boolean values
const mapMoodTypesToBoolObj = (): SelectedMoodTypes =>
  Object.values(MoodType).reduce(
    (total, current) => ({ ...total, [current]: false }),
    {} as SelectedMoodTypes
  );

// Types
type MoodColorsMapType = Record<MoodValue, Color>;
type MoodIconsMapType = Record<MoodValue, IconDefinition>;
type SelectedMoodTypes = Record<MoodType, boolean>;

export { MoodColorsMap, MoodIconsMap, mapMoodTypesToBoolObj };

// eslint-disable-next-line no-undef
export type { SelectedMoodTypes };
