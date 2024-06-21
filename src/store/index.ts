import { create } from "zustand";

interface IAppState {
  showMiniBasket: boolean;
  toggleShowMiniBasket: () => void;
}

export const useAppStore = create<IAppState>()((set, get) => ({
  showMiniBasket: false,
  toggleShowMiniBasket: () => {
    set({ showMiniBasket: !get().showMiniBasket });
  },
}));
