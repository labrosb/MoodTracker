import React from 'react';
import styled from 'styled-components/native';
import { MoodType } from '../../models/mood';
import { Color } from '../../constants/theme';
import Text from '../Base/Text';
import ColoredView from '../Base/ColorView';

const Card = styled.TouchableOpacity`
  padding: 4px 8px;
`;

/** Component renders a list of options */
const MoodTypeCard: React.FC<Props> = ({
  $color,
  label,
  isSelected,
  onSelected,
}) => {
  return (
    <ColoredView $filled $color={isSelected ? $color : Color.Fade}>
      <Card onPress={() => onSelected(label)}>
        <Text>{label}</Text>
      </Card>
    </ColoredView>
  );
};

export default MoodTypeCard;

type Props = {
  $color: Color;
  label: MoodType;
  isSelected: boolean;
  onSelected: (item: MoodType) => void;
};
