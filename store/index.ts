import create from 'zustand';
import { User } from '@/models/responseTypes';

interface StoreType {
  storedUser: User | null;
  setStoredUser: (user: User) => void;
}

export const useStore = create<StoreType>((set) => ({
  storedUser: null,
  setStoredUser: (user: User) => set((state) => ({ storedUser: user })),
}));
