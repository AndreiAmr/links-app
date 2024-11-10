import { MaterialIcons } from '@expo/vector-icons';

export type CategoryProps = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: CategoryProps[] = [
  { id: '1', name: 'Todos', icon: 'apps' },
  { id: '2', name: 'Curso', icon: 'code' },
  { id: '3', name: 'Projeto', icon: 'folder' },
  { id: '4', name: 'Site', icon: 'language' },
  { id: '5', name: 'Artigo', icon: 'newspaper' },
  { id: '6', name: 'Video', icon: 'movie' },
  { id: '7', name: 'Documentação', icon: 'content-paste' },
];
