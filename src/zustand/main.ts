import dayjs from 'dayjs';
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

const defaultState = {
  nation: 'K' as const,
  date: dayjs().subtract(1, 'day').format('YYYYMMDD'),
  loading: false,
  reject: false,
  movies: null,
  posters: [],
  names: null,
};

export const mainStore = create<IMainStore>((set) => ({
  ...defaultState,
  updateState: ({ key, payload }) => set((state) => ({ ...state, [key]: payload })),
}));
