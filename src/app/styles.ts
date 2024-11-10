import { colors } from '@/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 62;
`;

export const Header = styled.View`
  padding-horizontal: 24px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.Image.attrs({
  source: require('@/assets/logo.png'),
})`
  height: 32px;
  width: 38px;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  showsVerticalScrollIndicator: false,
})<any>`
  border-top-width: 1px;
  border-top-color: ${colors.gray[600]};
`;

export const ModalHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

export const ModalCategory = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray[400]};
`;

export const ModalLinkName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.gray[200]};
`;

export const modalURL = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: ${colors.gray[400]};
`;

export const modalFooter = styled.View`
  flex-direction: row;
  margin-top: 32px;
  width: 100%;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: ${colors.gray[600]};
  padding-vertical: 14px;
`;
