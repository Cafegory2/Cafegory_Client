import styled from "styled-components";
import { Color } from "../constants";

export const FilterButton = styled.button<{
  $backgroundColor?: string;
  $border?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "white"};
  border: ${(props) => (props.$border ? props.$border : "none")};
  min-width: 143px;
  height: 40px;
  padding: 0 15px;
  margin-right: 10px;
  border-radius: 38px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--black-4, #454545);
  &:hover {
    transition: 0.2s ease;
    filter: brightness(95%);
    border: 1px solid var(--black-4, #454545);
  }
  &:focus {
    outline: none;
  }
`;

export const FilteredButton = styled.button<{
  $backgroundColor?: string;
  $border?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : Color.DarkerGreenBackGround};
  border: ${(props) => (props.$border ? props.$border : "none")};
  border: 1px solid var(--black-4, #454545);
  padding: 0 15px;
  height: 40px;
  margin-right: 10px;
  border-radius: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    transition: 0.2s ease;
    border: 1px solid var(--black-4, #454545);
  }
  &:focus {
    outline: none;
  }
`;
