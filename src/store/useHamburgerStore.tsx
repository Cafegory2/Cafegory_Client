import { create } from "zustand";
import { overlayType } from "../types/overlayType";

const useHamburgerStore = create<overlayType>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export default useHamburgerStore;
