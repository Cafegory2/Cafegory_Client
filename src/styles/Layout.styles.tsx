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

export const RedirectLayout = styled(LoginLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -10px;
`;

export const DetailPageLayout = styled(MainLayout)`
  margin-top: ${HeaderHeight};
  padding: 0px;
`;

export const CreatePageLayout = styled(MainLayout)`
  margin-top: ${HeaderHeight};
`;

export const ProfileLayout = styled(MainLayout)`
  margin-top: ${HeaderHeight};
`;
