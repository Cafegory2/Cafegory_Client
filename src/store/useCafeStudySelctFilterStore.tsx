import { create } from "zustand";
import { CafeStudyfilterType } from "../types/cafestudyfilterType";

const useCafeStudySelectFilterStore = create<CafeStudyfilterType>((set) => ({
  selectedCategory: "카테고리",
  setCategory: (category) => set({ selectedCategory: category }),
}));

export default useCafeStudySelectFilterStore;
