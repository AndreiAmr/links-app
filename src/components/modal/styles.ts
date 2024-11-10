import { colors } from '@/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Content = styled.View`
  background-color: ${colors.gray[900]};
  border-top-width: 1px;
  border-top-color: ${colors.gray[800]};
  padding-bottom: 32px;
  padding: 24px;
`;
