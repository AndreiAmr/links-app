import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { MaterialIcons } from '@expo/vector-icons';
import { LinkStorage } from '@/storage/link-storage';
import { colors } from '@/styles/colors';
import { CategoriesList } from '@/components/categoriesList';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { EActions } from '@/types/enums';
import { Modal } from '@/components/modal';

import { useApp } from './useApp';
import * as S from './styles';

export default function Index() {
  const {
    state,
    currentLink,
    showModal,
    dispatch,
    setShowModal,
    handleDetails,
    handleRemove,
    handleOpen,
  } = useApp();

  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <TouchableOpacity onPress={() => router.navigate('/add')}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </S.Header>

      <CategoriesList
        selected={state.category}
        onChange={(text) =>
          dispatch({
            nextState: text,
            type: EActions.ChangeCategory,
          })
        }
      />

      <S.FlatList
        data={state.links}
        keyExtractor={(item: LinkStorage) => item.id}
        renderItem={({ item }: { item: LinkStorage }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
      />

      <Modal isVisible={showModal}>
        <S.ModalHeader>
          <S.ModalCategory>{currentLink?.category}</S.ModalCategory>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <MaterialIcons name="close" size={20} color={colors.gray[400]} />
          </TouchableOpacity>
        </S.ModalHeader>
        <S.ModalLinkName>{currentLink?.name}</S.ModalLinkName>
        <S.modalURL>{currentLink?.url}</S.modalURL>
        <S.modalFooter>
          <Option
            name="Excluir"
            icon="delete"
            variant="secondary"
            onPress={handleRemove}
          />
          <Option name="Abrir" icon="language" onPress={handleOpen} />
        </S.modalFooter>
      </Modal>
    </S.Container>
  );
}
