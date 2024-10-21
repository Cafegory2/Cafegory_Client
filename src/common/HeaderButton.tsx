import styled from "styled-components";

export const HeaderButton = styled.button<{
  $backgroundColor?: string;
  $border?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "white"};
  border: ${(props) => (props.$border ? props.$border : "none")};
  width: 36px;
  height: 36px;
  padding: 0px;
  &:hover {
    transition: 0.2s ease;
    filter: brightness(95%);
  }
  &:focus {
    outline: none;
  }
`;
