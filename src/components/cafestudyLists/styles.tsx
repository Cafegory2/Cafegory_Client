import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 162px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
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
  overflow: hidden;
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
  gap: 10px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const Tag = styled.div`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.Mono};
  border-radius: 22px;
`;

export const GreenTag = styled(Tag)`
  background-color: ${(props) => props.theme.colors.DarkerGreenBackGround};
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
  background-color: ${(props) => props.theme.colors.HeadCount};
  border-radius: 22px;
`;
