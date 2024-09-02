import styled from 'styled-components';
import { Color } from '../../constants';

export const Button = styled.button<{
  $fontSize?: string; 
  $fontWeight?: string;
  $color?: string;
  $backGround?: string; 
}>`
  border-radius: 10px; 
  padding: 10px 16px; 
  text-align: center; 
  font-size: ${props => props.$fontSize || '16'}px;
  font-weight: ${props => props.$fontWeight || '500'};
  color: ${props => props.$color || '#2a2a2a'};
  background: ${props => props.$backGround || 'transparent'};
`
export const FixedBottomButton = styled(Button)`
  position: fixed; 
  bottom: 40px;
  &:active{
    outline: none;
  }
`
export const CenterFlex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  min-width: 430px;
`
