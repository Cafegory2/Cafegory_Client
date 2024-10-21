import styled from "styled-components";

export const LoginButton = styled.button<{
  $borderRadius?: number;
  $backgroundColor?: string;
  $border?: string;
}>`
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : 12}px;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "white"};
  border: ${(props) => (props.$border ? props.$border : "none")};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 8px 0px;
  margin: 8px 0px;
  &:hover {
    transition: 0.2s ease;
    filter: brightness(95%);
  }
  &:focus {
    outline: none;
  }
`;

export const KakaoLoginButton = styled(LoginButton)`
  background-color: ${(props) => props.theme.colors.Kakao};
`;
