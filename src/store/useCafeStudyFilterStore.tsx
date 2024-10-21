import { create } from "zustand";
import { CafeStudyType } from "../types/cafestudyType";

const useCafeStudyFilterStore = create<CafeStudyType>((set) => ({
  categories: [],
  dates: [],
  cafes: [],
  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),
  toggleDate: (date) =>
    set((state) => ({
      dates: state.dates.includes(date)
        ? state.dates.filter((d) => d !== date)
        : [...state.dates, date],
    })),
  toggleCafe: (cafe) =>
    set((state) => ({
      cafes: state.cafes.includes(cafe)
        ? state.cafes.filter((c) => c !== cafe)
        : [...state.cafes, cafe],
    })),
}));

export default useCafeStudyFilterStore;
