import { Modal as RNModal, ModalProps } from 'react-native';
import * as S from './styles';

type Props = ModalProps & {
  isVisible: boolean;
};

export function Modal({ isVisible, ...rest }: Props) {
  return (
    <RNModal transparent visible={isVisible} animationType="slide" {...rest}>
      <S.Container>
        <S.Content>{rest.children}</S.Content>
      </S.Container>
    </RNModal>
  );
}
