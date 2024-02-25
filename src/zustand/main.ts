import { create } from 'zustand';

export interface IMainStore {
  loading: boolean;
  reject: boolean;
  movies: any[];
  date: string;
  nation: 'K' | 'N';
  posters: any[];
  names: any[];
  updateState: ({ key, payload }: { key: string; payload: boolean | string | any[] }) => void;
}

export const mainStore = create<IMainStore>((set) => ({
  loading: false,
  reject: false,
  movies: null,
  date: '',
  nation: null,
  posters: [],
  names: null,
  updateState: ({ key, payload }) => set((state) => ({ ...state, [key]: payload })),
}));
