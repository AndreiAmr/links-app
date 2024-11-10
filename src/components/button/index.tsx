import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <S.Button activeOpacity={0.7} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
