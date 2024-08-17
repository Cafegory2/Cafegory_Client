import styled from "styled-components";
import { Color } from "../../constants";

export const Container = styled.div`
  width: 100%;
  height: 162px;
  border-radius: 10px;
  margin: 12px 0px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const ContainerLeft = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContainerRight = styled.div`
  width: 30%;
  height: 100%;
  background-color: #56e97b89;
  position: relative;
`;

export const TagContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Tag = styled.div`
  padding: 4px 8px;
  display: inline-flex;
  background-color: ${Color.MonoTag};
  border-radius: 22px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoDetail = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
`;

export const InfoDetailTitle = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const InfoDetailDetail = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const ViewCount = styled.div`
  width: auto;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const ImageContainer = styled.div``;

export const HeadCount = styled.div`
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  bottom: 6px;
  display: flex;
  align-items: center;
  background-color: ${Color.HeadCount};
  border-radius: 22px;
`;
