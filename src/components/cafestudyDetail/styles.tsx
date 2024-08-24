import styled from "styled-components";
import { Color } from "../../constants";

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 16px;
`;

export const DetailContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px - min(max(8vh, 60px), 100px));
  padding: 12px 16px;
  background-color: ${Color.GreenBackGround};
`;

export const ContainerOverview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const OverviewTop = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export const OverviewTopSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OverviewBottom = styled.div`
  width: 100%;
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const OverviewBottomSection = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-around;
  align-items: center;
`;

export const Section = styled.div`
  width: 47%;
  height: 100%;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle1 = styled.div`
  min-width: 45px;
`;

export const SectionTitle2 = styled.div`
  min-width: 55px;
`;

export const SectionDetail = styled.div`
  width: 85%;
`;

export const ContainerDetail = styled.div`
  width: 100%;
  padding: 8px 12px;
  margin-top: 8px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.div`
  margin-bottom: 12px;
  width: 100%;
`;

export const DetailBody = styled.div`
  width: 100%;
  height: auto;
`;
