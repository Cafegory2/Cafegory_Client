import styled, { keyframes } from 'styled-components';

export const HeaderLayout = styled.header`
  width: 100%;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const MenuOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Menu = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff;
  padding: 2rem;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease-out;
`;

export const MenuItem = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  transition: background-color 0.2s ease;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

