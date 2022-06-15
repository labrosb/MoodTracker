import React from 'react';
import { MoodType } from '../../models/mood';
import { Color } from '../../constants/theme';
import Container from '../Base/ListWrapContainer';
import MoodTypeCard from './MoodTypeCard';
import type { SelectedMoodTypes } from '../../utils/moodMappers';

const moodTypeArray = Object.values(MoodType);

/**  Component renders options of Mood Types*/
const MoodTypesList: React.FC<Props> = ({
  $color,
  selectedValues,
  onValueSelected,
}) => {
  const onItemSelected = (item: MoodType): void => {
    // If the selected item is already selected -> unselect
    const value = !selectedValues[item];
    // Merges the latest choice to the selection object
    const selection = { ...selectedValues, [item]: value };
    onValueSelected(selection);
  };

  return (
    <Container>
      {moodTypeArray.map((type: MoodType) => (
        <MoodTypeCard
          key={`mood-type-${type}`}
          $color={$color || Color.Checked}
          label={type}
          isSelected={selectedValues[type]}
          onSelected={onItemSelected}
        />
      ))}
    </Container>
  );
};

export default MoodTypesList;

type Props = {
  $color?: Color;
  selectedValues: SelectedMoodTypes;
  onValueSelected: (val: SelectedMoodTypes) => void;
};
