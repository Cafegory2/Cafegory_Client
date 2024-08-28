//카공 스터디 카테고리 / 날짜 / 카페 상태관리 타입
export interface CafeStudyType {
  categories: string[];
  dates: string[];
  cafes: string[];
  toggleCategory: (category: string) => void;
  toggleDate: (date: string) => void;
  toggleCafe: (cafe: string) => void;
}
