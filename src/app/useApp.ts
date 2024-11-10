import { LinkStorage, linkStorage } from '@/storage/link-storage';
import { EActions } from '@/types/enums';
import { categories } from '@/utils/categories';
import { useFocusEffect } from 'expo-router';
import { Reducer, useCallback, useReducer, useState } from 'react';
import { Alert, Linking } from 'react-native';

type StateProps = {
  category: string;
  links: LinkStorage[];
};

type ActionProps = {
  type: EActions;
  nextState: string | LinkStorage[];
};

const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case EActions.ChangeCategory: {
      return {
        ...state,
        category: action.nextState as string,
      };
    }

    case EActions.ChangeLinks: {
      return {
        ...state,
        links: action.nextState as LinkStorage[],
      };
    }

    default: {
      return state;
    }
  }
};

export const useApp = () => {
  const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
    reducer,
    { category: categories[0].name, links: [] }
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentLink, setCurrentLink] = useState<LinkStorage>();

  const getLinks = async () => {
    try {
      var filtered: LinkStorage[] = [];

      const response = await linkStorage.get();

      if (state.category === 'Todos') {
        filtered = response;
      } else {
        filtered = response.filter((link) => {
          return link.category === state.category;
        });
      }

      dispatch({
        nextState: filtered,
        type: EActions.ChangeLinks,
      });
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível listar os links');
    }
  };

  const handleDetails = (link: LinkStorage) => {
    setShowModal(true);
    setCurrentLink(link);
  };

  const linkRemove = async () => {
    try {
      await linkStorage.remove(currentLink?.id as string);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert('Error', 'Não foi possivel excluir o link');
      console.log({ error });
    }
  };

  const handleRemove = () => {
    Alert.alert('Excluir', 'Deseja realmente excluir ?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: linkRemove,
      },
    ]);
  };

  const handleOpen = async () => {
    try {
      await Linking.openURL(currentLink?.url as string);
      setShowModal(false);
    } catch (error) {
      Alert.alert('Link', 'Não foi possível abrir o link');
      console.log({ error });
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [state.category])
  );

  return {
    state,
    showModal,
    setShowModal,
    dispatch,
    handleDetails,
    currentLink,
    handleRemove,
    handleOpen,
  };
};
