import { colors } from '@/styles/colors';
import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  height: 52px;
  width: 100%;
  background-color: ${colors.gray[900]};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray[800]};
  padding: 10px;
  color: ${colors.gray[100]};
  font-size: 16px;
`;
