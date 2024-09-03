import styled from "styled-components";
import { HeaderHeight } from "../constants";

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
  height: calc(100vh - ${HeaderHeight});
  margin-top: ${HeaderHeight};
`;

export const MainLayout = styled.div`
  width: 100%;
  padding: 0px 16px;
  margin-top: calc(${HeaderHeight} + 110px);
  background-color: white;
`;

export const MainLayout2 = styled.div<{
  $padding?: string;
}>`
  width: 100%;
  margin-top: ${HeaderHeight};
  padding: ${(props) => props.$padding || '0px' }
`;

export const NoResultLayout = styled.div`
  min-height: calc(100vh - 130px);
  display:flex; 
  align-items: center;
  justify-content: center;
`