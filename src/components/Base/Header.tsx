import React from 'react';
import styled from 'styled-components/native';
import { Font, FontSize } from '../../constants/theme';
import Text from './Text';

const Container = styled.View`
  padding: 34px 0 34px 0;
`;

const Title = styled(Text)`
  font-family: ${Font.Bold};
  font-size: ${FontSize.Large};
`;

/** Base component renders a Header */
const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

type Props = { title: string };
