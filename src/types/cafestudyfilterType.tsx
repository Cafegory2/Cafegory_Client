export type FilterOption = "카테고리" | "날짜" | "카페";

export interface CafeStudyfilterType {
  selectedCategory: FilterOption;
  setCategory: (category: FilterOption) => void;
}
