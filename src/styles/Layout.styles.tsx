import styled from "styled-components";

export const MobileLayout = styled.div`
  max-width: 430px;
  min-width: 320px; // 피그마 보고 수정 예정
  min-height: 100%;
  padding: 0px 16px;
  margin: 0 auto;
  overflow: auto;
  background-color: white;
`;

export const LoginLayout = styled.div`
  width: 100%;
  height: calc(100vh - min(max(8vh, 60px), 100px));
`;

export const MainLayout = styled.div`
  width: 100%;
`;
