import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  primaryTitle: {
    color: colors.green[300],
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryTitle: {
    color: colors.gray[400],
    fontSize: 16,
  },
});

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 5;
`;

export const Name = styled.Text`
  font-size: 16px;
`;
