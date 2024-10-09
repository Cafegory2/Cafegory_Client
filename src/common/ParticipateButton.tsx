import styled from "styled-components";

export const ParticipateButton = styled.button<{
  $backgroundColor?: string;
  $border?: string;
}>`
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.theme.colors.GreenText};
  border: ${(props) => (props.$border ? props.$border : "none")};
  padding: 10px 32px;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    transition: 0.2s ease;
    filter: brightness(95%);
  }
  &:focus {
    outline: none;
  }
`;
