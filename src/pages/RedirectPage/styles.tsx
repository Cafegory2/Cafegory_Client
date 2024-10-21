import styled from "styled-components";

export const UserImage = styled.div`
  width: 144px;
  height: 144px;
  top: 20px;
  border-radius: 50%;
  border: 7px solid ${(props) => props.theme.colors.GreenText};
  margin-bottom: 4px;
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
