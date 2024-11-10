import { Text, TouchableOpacity, View } from 'react-native';
import * as S from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { router } from 'expo-router';
import { CategoriesList } from '@/components/categoriesList';
import { Input } from '@/components/Input';
import { Button } from '@/components/button';
import { useAdd } from './useAdd';
import { EActions } from '@/types/enums';

export default function Add() {
  const { state, dispatch, handleAdd } = useAdd();

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <S.Title>Novo</S.Title>
      </S.Header>
      <S.Label>Selecione uma categoria</S.Label>
      <CategoriesList
        onChange={(category: string) =>
          dispatch({
            type: EActions.ChangeCategory,
            nextState: category,
          })
        }
        selected={state.category}
      />
      <S.Form>
        <Input
          placeholder="Nome"
          placeholderTextColor={colors.gray[400]}
          value={state.name}
          onChangeText={(text) =>
            dispatch({
              nextState: text,
              type: EActions.ChangeName,
            })
          }
        />
        <Input
          placeholder="URL"
          placeholderTextColor={colors.gray[400]}
          value={state.url}
          autoCapitalize="none"
          onChangeText={(text) =>
            dispatch({
              nextState: text,
              type: EActions.ChangeURL,
            })
          }
        />
      </S.Form>
      <Button title="Adicionar" onPress={handleAdd} />
    </S.Container>
  );
}
