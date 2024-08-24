import styled from "styled-components";
import { Color } from "../../constants";

export const Layout = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 44px;
  max-width: 430px;
  min-width: 320px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: min(max(8vh, 60px), 100px);
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
