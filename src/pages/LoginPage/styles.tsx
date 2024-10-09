//로그인 페이지 스타일 여기서 처리
import styled from "styled-components";

export const SectionTop = styled.section`
  width: 100%;
  height: 60%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
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
  background-color: ${(props) => props.theme.colors.MonoTagText};
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
