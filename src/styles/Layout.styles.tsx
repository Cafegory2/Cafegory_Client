import styled from "styled-components";

export const MobileLayout = styled.div`
  max-width: 430px;
  min-width: 320px;
  min-height: 100%;
  margin: 0 auto;
  overflow: auto;
  background-color: white;
  position: relative;
`;

export const LoginLayout = styled.div`
  width: 100%;
  height: calc(100vh - min(max(8vh, 60px), 100px));
  margin-top: min(max(8vh, 60px), 100px);
`;

export const MainLayout = styled.div`
  width: 100%;
  padding: 0px 16px;
  margin-top: calc(min(max(8vh, 60px), 100px) + 110px);
`;

export const MainLayout2 = styled.div`
  width: 100%;
  margin-top: min(max(8vh, 60px), 100px);
`;
