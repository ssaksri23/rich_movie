import dayjs from 'dayjs';
import { create } from 'zustand';

export interface IFilterStore {
  loading: boolean;
  reject: boolean;
  date: string;
  nation: 'K' | 'N';
  updateState: ({ key, payload }: { key: string; payload: boolean | string | any[] }) => void;
}

const defaultState = {
  nation: 'K' as const,
  date: dayjs().subtract(1, 'day').format('YYYYMMDD'),
  loading: false,
  reject: false,
};

export const FilterStore = create<IFilterStore>((set) => ({
  ...defaultState,
  updateState: ({ key, payload }) => set((state) => ({ ...state, [key]: payload })),
}));
