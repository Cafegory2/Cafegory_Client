import styled from "styled-components";
import { Color } from "../constants";

export const Text = styled.p<{
  $fontSize?: number;
  $fontWeight?: number;
  $color?: string;
  $disabled?: boolean;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 14)}px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  color: ${(props) =>
    props.$disabled
      ? Color.MonoTagText
      : props.$color
      ? props.$color
      : "black"};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: auto;
`;

export const TitleText1 = styled(Text)`
  font-size: 22px;
  font-weight: 700;
`;

export const TitleText2 = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const BodyText1 = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`;

export const BodyText2 = styled(Text)`
  font-size: 14px;
  font-weight: 400;
`;

export const BodyText3 = styled(Text)`
  font-size: 12px;
  font-weight: 400;
`;

export const BodyText4 = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

export const TagText1 = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const TagText2 = styled(Text)`
  font-size: 10px;
  font-weight: 700;
`;
