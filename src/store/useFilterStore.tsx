import { create } from "zustand";
import { overlayType } from "../types/overlayType";

const useFilterStore = create<overlayType>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export default useFilterStore;
