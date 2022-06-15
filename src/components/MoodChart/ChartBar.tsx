import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../../constants/theme';
import { MoodColorsMap } from '../../utils/moodMappers';
import type { MoodValueCount } from '../../utils/moodStateMappers';

const Bar = styled.View<BarProps>`
  flex-direction: row;
  width: ${({ $width }) => `${$width || 0}px`};
  height: 16px;
  margin: 8.5px 0;
  border-radius: 5px;
  overflow: hidden;
`;

const BarFragment = styled.View<FragmentProps>`
  width: ${({ $width }) => `${$width || 0}px`};
  height: 100%;
  background-color: ${({ $color }) => ($color ? $color : Color.Neutral)};
`;

const ChartBar: React.FC<Props> = ({ width, values, total }) => {
  return (
    <Bar $width={width}>
      {values.map((value) => (
        <BarFragment
          key={`bar-fragment-${value.valueId}`}
          $color={MoodColorsMap[value.valueId]}
          $width={(width * value.count) / (total || 1)}
        />
      ))}
    </Bar>
  );
};

export default ChartBar;

type Props = { width: number; values: MoodValueCount[]; total: number };
type BarProps = { $width: number };
type FragmentProps = { $width: number; $color: Color };
