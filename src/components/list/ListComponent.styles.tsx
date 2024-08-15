import styled from "styled-components";

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
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContainerRight = styled.div`
  width: 30%;
  height: 100%;
  background-color: #56e97b89;
`;

export const LeftTag = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
`;

export const LeftTitle = styled.div`
  width: 100%;
  height: 30%;
`;

export const LeftInfo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const InfoDetail = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;

export const InfoDetailTitle = styled.div`
  width: 25%;
  height: 100%;
`;

export const InfoDetailDetail = styled.div`
  width: 75%;
  height: 100%;
`;

export const ViewCount = styled.div`
  width: auto;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
