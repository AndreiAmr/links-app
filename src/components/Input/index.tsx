import { TextInputProps } from 'react-native';
import * as S from './style';

export function Input({ ...rest }: TextInputProps) {
  return <S.TextInput {...rest} />;
}
