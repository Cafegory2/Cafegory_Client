import styled from "styled-components";

export const MainLayout = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const MobileLayout = styled.div`
  max-width: 390px;
  min-width: 320px; // 피그마 보고 수정 예정
  height: 100%;
  padding: 0px 16px;
  margin: 0 auto;
  background-color: aliceblue;
`;
