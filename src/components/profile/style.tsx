import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
`;

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.GreenText};
  margin-bottom: 4px;
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.div`
  width: 100%;
  position: absolute;
  top: 125px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const BottomTitle = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 8px;
`;

export const BottomDetail1 = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 12px;
  margin-bottom: 24px;
`;

export const BottomDetail2 = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
