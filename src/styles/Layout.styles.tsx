import styled from "styled-components";

export const Layout = styled.main`
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
  background-color: white;
`;

export const MainLayout = styled.div`
  width: 100%;
  height: calc(100% - 110px); //전체에서 헤더 높이 뺀 길이
  color: black;
`;
