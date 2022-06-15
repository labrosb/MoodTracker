import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Font } from '../../constants/theme';
import { useDispatch } from '../../state/store';
import { addMoodInfo } from '../../state/slices/moodTypesSlice';
import { MoodValue } from '../../models/mood';
import { MoodColorsMap, mapMoodTypesToBoolObj } from '../../utils/moodMappers';
import BaseText from '../Base/Text';
import MoodValueList from './MoodValueList';
import MoodTypesList from './MoodTypesList';
import SubmitButton from './SubmitButton';
import type { SelectedMoodTypes } from '../../utils/moodMappers';

const Text = styled(BaseText)`
  font-family: ${Font.Italic};
`;

const DataEntry: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedRateValue, setSelectedRateValue] = useState<MoodValue>();
  const [selectedMoodTypes, setSelectedMoodTypes] = useState(() =>
    mapMoodTypesToBoolObj()
  );
  const [hasSelectedMoodType, setHasSelectedMoodType] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const onValueSelected = (value: MoodValue): void => {
    setSelectedRateValue(value);
    // If it has a selected type, enable submit (selected value has value here)
    if (hasSelectedMoodType) {
      setCanSubmit(true);
    }
  };

  const onMoodTypesSelected = (types: SelectedMoodTypes): void => {
    setSelectedMoodTypes(types);
    // Check if it has at least one selected type
    const selectedTypeIndex = Object.values(types).findIndex((type) => type);
    const hasMoodType = selectedTypeIndex > -1;
    // If it has selected type AND selected mood type, enable submit
    if (hasMoodType && !!selectedRateValue) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
    setHasSelectedMoodType(hasMoodType);
  };

  const onSubmit = (): void => {
    if (selectedRateValue && hasSelectedMoodType) {
      dispatch(
        addMoodInfo({
          moodValue: selectedRateValue,
          moodTypes: selectedMoodTypes,
        })
      );
      // Reset states
      setSelectedRateValue(undefined);
      setSelectedMoodTypes(mapMoodTypesToBoolObj());
      setHasSelectedMoodType(false);
      setCanSubmit(false);
    }
  };

  const color = selectedRateValue
    ? MoodColorsMap[selectedRateValue]
    : undefined;

  return (
    <>
      <Text>How good are you feeling?</Text>
      <MoodValueList
        selectedValue={selectedRateValue}
        onValueSelected={onValueSelected}
      />
      <Text>How would you describe your feelings?</Text>
      <MoodTypesList
        $color={color}
        selectedValues={selectedMoodTypes}
        onValueSelected={onMoodTypesSelected}
      />
      <SubmitButton disabled={!canSubmit} onPress={onSubmit} />
    </>
  );
};

export default DataEntry;
