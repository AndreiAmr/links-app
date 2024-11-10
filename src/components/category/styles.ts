import { colors } from '@/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 5;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray[400]};
`;
