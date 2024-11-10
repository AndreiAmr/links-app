import { categories, CategoryProps } from '@/utils/categories';
import { Category } from '../category';
import { styles } from './styles';
import * as S from './styles';

type Props = {
  selected: string;
  onChange(category: string): void;
};

export function CategoriesList({ selected, onChange }: Props) {
  return (
    <S.Container
      data={categories as CategoryProps[]}
      keyExtractor={(item: CategoryProps) => item.id}
      renderItem={({ item }: { item: CategoryProps }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      contentContainerStyle={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
