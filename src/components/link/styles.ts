import { colors } from '@/styles/colors';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 12px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: ${colors.gray[100]};
  font-size: 16px;
  font-weight: 600;
`;

export const Url = styled.Text`
  color: ${colors.gray[400]};
  font-size: 14px;
`;
