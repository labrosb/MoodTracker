import React from 'react';
import styled from 'styled-components/native';
import { Font, FontSize } from '../../constants/theme';
import { MoodValue } from '../../models/mood';
import { MoodColorsMap } from '../../utils/moodMappers';
import ColoredView from '../Base/ColorView';
import BaseText from '../Base/Text';

const Box = styled.TouchableOpacity`
  min-width: 52px;
  min-height: 52px;
  margin: 4px 2px;
  justify-content: center;
  align-items: center;
`;

const Text = styled(BaseText)`
  font-family: ${Font.Medium};
  font-size: ${FontSize.Medium};
`;

/** Component renders a value box that triggers an action on click */
const MoodValueBox: React.FC<Props> = ({ value, isSelected, onPress }) => {
  return (
    <ColoredView $filled={isSelected} $color={MoodColorsMap[value]}>
      <Box onPress={() => onPress(value)}>
        <Text>{value}</Text>
      </Box>
    </ColoredView>
  );
};

export default MoodValueBox;

type Props = {
  value: MoodValue;
  isSelected: boolean;
  onPress: (val: MoodValue) => void;
};
