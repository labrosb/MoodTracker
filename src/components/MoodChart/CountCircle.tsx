import React from 'react';
import styled from 'styled-components/native';
import { Color, Font, FontSize } from '../../constants/theme';
import Text from '../Base/Text';

export const circleWidthPx = 48;
export const circleMargin = -7;

const ResultsCircle = styled.View`
  justify-content: center;
  width: ${circleWidthPx}px;
  height: 30px;
  margin-left: ${circleMargin}px;
  background-color: ${Color.Neutral};
  border: 1.5px solid black;
  border-radius: 50px;
`;

const CircleText = styled(Text)`
  font-family: ${Font.Medium};
  font-size: ${FontSize.Medium};
`;

const CountCircle: React.FC<Props> = ({ value }) => {
  return (
    <ResultsCircle>
      <CircleText>{value}</CircleText>
    </ResultsCircle>
  );
};

export default CountCircle;

type Props = { value: number };
