import styled from "styled-components";

//현재는 모바일 용으로 Layout 설정
//웹 UI 구현 시, mediaQuery 도입해야 함
export const MainLayout = styled.main`
  max-width: 390px; // 피그마 보고 수정 예정
  min-width: 320px; // 피그마 보고 수정 예정
  margin: 0 auto;
`;
