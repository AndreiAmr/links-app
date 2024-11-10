import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { colors } from '@/styles/colors';

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: 'primary' | 'secondary';
};

export function Option({ name, icon, variant = 'primary', ...rest }: Props) {
  const isPrimaryVariant = variant === 'primary';

  return (
    <S.Container {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={isPrimaryVariant ? colors.green[300] : colors.gray[400]}
      />
      <S.Name
        style={
          isPrimaryVariant ? S.styles.primaryTitle : S.styles.secondaryTitle
        }
      >
        {name}
      </S.Name>
    </S.Container>
  );
}
