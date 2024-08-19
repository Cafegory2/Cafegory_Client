import styled, { keyframes } from "styled-components";

export const HeaderLayout = styled.header`
  max-width: 430px;
  min-width: 320px;
  height: 8vh;
  min-height: 60px;
  max-height: 100px;
  padding: 0px 16px;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const slideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  margin-top: min(max(8vh, 60px), 100px);
  z-index: 1000;
  height: calc(100vh - min(max(8vh, 60px), 100px));
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  animation: ${slideIn} 0.3s ease-out;
`;

export const Menu = styled.div`
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
