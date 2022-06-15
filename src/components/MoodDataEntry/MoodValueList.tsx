import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Color } from '../../constants/theme';
import { MoodIconsMap } from '../../utils/moodMappers';
import { MoodValue } from '../../models/mood';
import Container from '../Base/ListWrapContainer';
import ValueBox from './MoodValueBox';

const Content = styled.View`
  flex-direction: column;
  align-items: center;
`;

const FaceIcon = styled(FontAwesomeIcon)`
  margin-bottom: 10px;
  color: ${Color.PrimaryTypography};
`;

const moodValueArray = Object.values(MoodValue);

/** Component renders a row of Value Boxes */
const MoodValueList: React.FC<Props> = ({ selectedValue, onValueSelected }) => {
  return (
    <Container>
      {moodValueArray.map((value) => (
        <Content key={`mood-value-${value}`}>
          <FaceIcon icon={MoodIconsMap[value]} size={26} />
          <ValueBox
            value={value}
            isSelected={selectedValue === value}
            onPress={onValueSelected}
          />
        </Content>
      ))}
    </Container>
  );
};

export default MoodValueList;

type Props = {
  selectedValue?: MoodValue;
  onValueSelected: (val: MoodValue) => void;
};
