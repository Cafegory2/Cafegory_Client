import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  height: 54px;
  margin-top: calc(min(max(8vh, 60px), 100px) + 44px);
  padding: 8px 16px 0px 16px;
  display: flex;
  background-color: white;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div``;
