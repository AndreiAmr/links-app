import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingHorizontal: 24,
  },
});

export const Container = styled.FlatList<any>`
  height: 52px;
  max-height: 52px;
`;
