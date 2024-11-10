import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-vertical: 62px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 24px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${colors.gray[200]};
  font-size: 24px;
  font-weight: 600;
`;

export const Label = styled.Text`
  color: ${colors.gray[400]};
  font-size: 14px;
  padding-horizontal: 24px;
`;

export const Form = styled.View`
  padding: 24px;
  gap: 16px;
  flex: 1;
`;
