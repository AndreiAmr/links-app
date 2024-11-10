import { colors } from '@/styles/colors';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  height: 52px;
  background-color: ${colors.green[300]};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 24px;
`;

const Title = styled.Text`
  color: ${colors.green[900]};
  font-size: 16px;
  font-weight: 600;
`;

export { Button, Title };
