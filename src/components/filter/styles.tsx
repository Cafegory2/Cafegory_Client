import styled from "styled-components";
import { Color, HeaderHeight } from "../../constants";

export const Layout = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  height: 54px;
  margin-top: calc(${HeaderHeight} + 44px);
  padding: 0px 16px 0px 16px;
  display: flex;
  background-color: white;
  overflow: auto;
  display: flex;
  align-items: center;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const FilterBar = styled.div`
  width: 1px;
  height: 40px;
  margin-right: 10px;
  background-color: ${Color.MonoTagText};
`;

export const FilterImgContainer = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const FilterTextContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
`;
