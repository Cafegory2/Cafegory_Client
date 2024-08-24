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
  padding: 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const SectionContainer = styled.div`
  width: 50%;
  max-width: 170px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionTitle1 = styled.div`
  width: 45px;
`;

export const SectionTitle2 = styled.div`
  width: 55px;
`;

export const SectionDetail = styled.div`
  width: calc(100% - 45px);
`;

export const SectionDetail2 = styled.div`
  width: calc(100% - 55px);
`;

export const ContainerDetail = styled.div`
  width: 100%;
  padding: 8px 12px 20px 12px;
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
