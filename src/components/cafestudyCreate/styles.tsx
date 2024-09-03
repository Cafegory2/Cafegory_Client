import styled from 'styled-components';
import { Color } from '../../constants';
import { BodyText2, TitleText2 } from '../../common/Text';

export const Layout = styled.div`
  max-height: 100vh; 
  overflow-y: auto;
`

export const Button = styled.button<{
  $fontSize?: number; 
  $fontWeight?: number;
  $color?: string;
  $backGround?: string; 
}>`
  border-radius: 10px; 
  padding: 10px 16px; 
  text-align: center; 
  font-size: ${props => props.$fontSize || 16}px;
  font-weight: ${props => props.$fontWeight || 500};
  color: ${props => props.$color || '#2a2a2a'};
  background: ${props => props.$backGround || 'transparent'};
`
export const FixedBottom = styled.div`
  position: fixed; 
  bottom: 40px;
  width: 100%;
  left:50%; 
  right:50%; 
  transform:translate(-50%, 0);
  width: max-content;
  &:active{
    outline: none;
  }
`
export const CenterFlex = styled.div<{
  $gap?: number;
}>`
  display: flex;
  gap: ${props => props.$gap || 0}px;
  justify-content: center;
  align-items: center;
  // min-width: 430px;
`

export const TextArea = styled.textarea`
font-family: 'Noto Sans KR', 'Roboto'; 
  padding: 12px;
  margin-top:8px;
  width: calc(100% - 26px);
  min-height:250px;
  border-radius: 10px; 
  border: 1px solid rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #939393;
  }
`

export const InputWrapper = styled.div`
font-family: 'Noto Sans KR', 'Roboto'; 
  margin-top: 12px;
  position: relative;
  line-height: 1.5;
  ${TitleText2} {
    color: #2a2a2a;
  }
  input{
    margin: 8px 0 0;
    padding: 12px;
    width: calc(100% - 28px);
    border-radius: 10px; 
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${BodyText2} {
      color: #2a2a2a; 
      &::placeholder{ 
        color: #939393;
      }
    }
  }
`