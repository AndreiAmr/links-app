import { TouchableOpacity } from 'react-native';
import * as S from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

type Props = {
  name: string;
  url: string;
  onDetails(): void;
};

export function Link({ name, url, onDetails }: Props) {
  return (
    <S.Container>
      <S.Details>
        <S.Name numberOfLines={1}>{name}</S.Name>
        <S.Url numberOfLines={1}>{url}</S.Url>
      </S.Details>
      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </S.Container>
  );
}
