//Hamburger 버튼과 필터링 버튼의 상태관리 타입
export interface overlayType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}
