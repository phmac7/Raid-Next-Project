import create from "zustand";
import { Game, User } from "@/models/responseTypes";

interface StoreType {
  storedUser: User | null;
  storedUserGames: Game[] | null;
  setStoredUser: (user: User) => void;
  setStoredUserGames: (games: Game[]) => void;
}

export const useStore = create<StoreType>((set) => ({
  storedUser: null,
  storedUserGames: null,
  setStoredUser: (user: User) => set({ storedUser: user }),
  setStoredUserGames: (games) => set({ storedUserGames: games }),
}));
console.log("useStore", useStore);
