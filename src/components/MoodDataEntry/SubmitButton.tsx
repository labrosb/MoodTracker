import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../../constants/theme';
import Text from '../Base/Text';

const Button = styled.TouchableOpacity`
  margin: 8px auto;
  padding: 12px 24px;
  border-radius: 20px;
  border: 1px solid ${Color.PrimaryTypography};
  ${({ disabled }) => disabled && 'opacity: 0.2'};
`;

const SubmitButton: React.FC<Props> = ({ disabled = true, onPress }) => {
  return (
    <Button {...{ disabled, onPress }}>
      <Text>Submit</Text>
    </Button>
  );
};

export default SubmitButton;

type Props = {
  disabled: boolean;
  onPress: () => void;
};
