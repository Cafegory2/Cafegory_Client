//로그인 페이지 스타일 여기서 처리
import styled from "styled-components";
import { Color } from "../../constants";

export const Layout = styled.div`
  width: 100%;
  height: calc(100% - 110px); //전체에서 헤더 높이 뺀 길이
  color: black;
`;

export const SectionTop = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionBottom = styled.section`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  width: 169px;
  height: 1px;
  margin: 5px 0px 16px 0px;
  background-color: ${Color.Gray};
`;
