import { linkStorage } from '@/storage/link-storage';
import { EActions } from '@/types/enums';
import { router } from 'expo-router';
import { Reducer, useReducer } from 'react';
import { Alert } from 'react-native';

type StateProps = {
  name: string;
  url: string;
  category: string;
};

type ActionProps = {
  type: EActions;
  nextState: string;
};

const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case EActions.ChangeName: {
      return {
        ...state,
        name: action.nextState,
      };
    }

    case EActions.ChangeURL: {
      return {
        ...state,
        url: action.nextState,
      };
    }

    case EActions.ChangeCategory: {
      return {
        ...state,
        category: action.nextState,
      };
    }

    default: {
      return state;
    }
  }
};

export const useAdd = () => {
  const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
    reducer,
    {
      name: '',
      url: '',
      category: '',
    }
  );

  const handleAdd = async () => {
    try {
      const { category, name, url } = state;

      if (!category) {
        Alert.alert('Categoria', 'Selecione a categoria');
        return;
      }

      if (!name.trim()) {
        Alert.alert('Nome', 'Informe o nome');
        return;
      }

      if (!url) {
        Alert.alert('URL', 'Informe a URL');
        return;
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert('Sucesso', 'Link adicionado', [
        {
          text: 'Ok',
          onPress: () => {
            router.back();
          },
        },
      ]);
    } catch (err) {
      Alert.alert('Não foi possível salvar o novo link');
      console.log({ err });
    }
  };

  return { state, dispatch, handleAdd };
};
