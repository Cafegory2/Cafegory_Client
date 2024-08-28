import styled from "styled-components";
import { Color, HeaderHeight } from "../../constants";

export const Layout = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 44px;
  max-width: 430px;
  min-width: 320px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${HeaderHeight};
  background-color: white;
`;

export const Container = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  margin: auto;
  padding: 0px 10px;
  border-radius: 44px;
  background-color: ${Color.Mono};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: text;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 23px;
  height: 100%;
`;

export const InputContainer = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  width: 100vw;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  background-color: transparent;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5); // 플레이스홀더 색상 조정
  }
`;
