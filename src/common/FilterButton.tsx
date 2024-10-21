import styled from "styled-components";

export const FilterButton = styled.button<{
  $backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "white"};
  min-width: 143px;
  height: 32px;
  padding: 0 15px;
  margin-right: 10px;
  border-radius: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border: none;
  }
  &:focus {
    outline: none;
  }
`;

export const FilteredButton = styled.button<{
  $backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.theme.colors.DarkerGreenBackGround};
  padding: 0 15px;
  height: 32px;
  margin-right: 10px;
  border-radius: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  cursor: auto;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    border: none;
  }
  &:focus {
    outline: none;
  }
`;
