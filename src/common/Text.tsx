import styled from "styled-components";

export const Text = styled.p<{
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 14)}px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 300)};
  color: ${(props) => (props.$color ? props.$color : "black")};
  text-align: center;
`;
