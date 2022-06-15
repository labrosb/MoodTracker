import styled from 'styled-components/native';
import { Color, Font, FontSize } from '../../constants/theme';

const Text = styled.Text`
  font-family: ${Font.Default};
  font-size: ${FontSize.Default};
  color: ${Color.PrimaryTypography};
  text-align: center;
`;

export default Text;
