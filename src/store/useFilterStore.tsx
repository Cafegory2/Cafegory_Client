// 필터 열렀는지 안 열렀는지 관리하는 상태관리 코드
import { create } from "zustand";
import { overlayType } from "../types/overlayType";

const useFilterStore = create<overlayType>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export default useFilterStore;
