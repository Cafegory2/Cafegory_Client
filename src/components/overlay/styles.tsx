import styled, { keyframes } from "styled-components";
import { Color } from "../../constants";

const slideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`;

const slideRevIn = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0%); }
`;

export const Overlay1 = styled.div`
  position: fixed;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  top: 0;
  margin-top: min(max(8vh, 60px), 100px);
  z-index: 2;
  height: calc(100vh - min(max(8vh, 60px), 100px));
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  animation: ${slideIn} 0.3s ease-out;
`;

export const Overlay2 = styled(Overlay1)`
  margin-top: 0px;
  height: 100vh;
  z-index: 4;
  animation: none;
`;

export const MenuContainer = styled.div`
  width: 60%;
  padding: 10px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0s ease-out;
`;

export const MenuItem = styled.div`
  padding: 10px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 45vh;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  animation: ${slideRevIn} 0.3s ease-out;
`;

export const ContainerTop = styled.div`
  position: relative;
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${Color.MonoTagText};
`;

export const ContainerSlider = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 25%;
  height: 6px;
  border-radius: 8px;
  background-color: ${Color.Mono};
`;

export const TopSection = styled.div`
  width: 30%;
  height: 50%;
  padding: 12px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: end;
  cursor: pointer;
`;

export const ContainerBottom = styled.div`
  width: 100%;
  height: calc(100% - 85px);
  overflow: auto;
`;

export const BottomSection = styled.div<{
  $isSelected: boolean;
}>`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid ${Color.Mono};
  background-color: ${(props) =>
    props.$isSelected ? Color.DarkerGreenBackGround : "white"};
  cursor: pointer;
`;
