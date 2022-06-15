import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../../constants/theme';

const Card = styled.View<Props>`
  border-radius: 6px;
  border: 1px solid ${({ $color }) => $color};
  background-color: ${({ $color, $filled }) =>
    $filled ? $color : Color.Neutral};
`;

/** Base component renders a View with dynamically handled color */
const ColoredView: React.FC<Props> = ({ $color, $filled, children }) => {
  return <Card {...{ $color, $filled }}>{children}</Card>;
};

export default ColoredView;

type Props = {
  $color: Color;
  $filled: boolean;
  children: React.ReactNode;
};
