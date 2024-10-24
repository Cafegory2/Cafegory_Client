import styled from "styled-components";

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
      ? props.theme.colors.MonoTagText
      : props.$color
      ? props.$color
      : "black"};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: auto;
`;

export const LogoTextBigL = styled(Text)`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.Black};
`;

export const LogoTextBigR = styled(LogoTextBigL)`
  color: ${(props) => props.theme.colors.GreenText};
`;

export const LogoTextL = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.Black};
`;

export const LogoTextR = styled(LogoTextL)`
  color: ${(props) => props.theme.colors.GreenText};
`;

export const TitleText1 = styled(Text)`
  font-size: 22px;
  font-weight: 700;
`;

export const TitleText2 = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const GreenTitleText2 = styled(TitleText2)`
  color: ${(props) => props.theme.colors.GreenText};
`;

export const BodyText1 = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`;

export const BodyText1Custom = styled(BodyText1)<{ $isSelected: boolean }>`
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.GreenText : "black"};
`;

export const BodyText2 = styled(Text)`
  font-size: 14px;
  font-weight: 400;
`;

export const MonoBodyText2 = styled(BodyText2)`
  color: ${(props) => props.theme.colors.MonoTagText};
`;

export const BodyText3 = styled(Text)`
  font-size: 12px;
  font-weight: 400;
`;

export const MonoBodyText3 = styled(BodyText3)`
  color: ${(props) => props.theme.colors.MonoTagText};
`;

export const BodyText4 = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

export const MonoBodyText4 = styled(BodyText4)`
  color: ${(props) => props.theme.colors.ViewCount};
`;

export const TagText1 = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

export const TagText2 = styled(Text)`
  font-size: 10px;
  font-weight: 700;
`;

export const GreenTagText2 = styled(TagText2)`
  color: ${(props) => props.theme.colors.GreenText};
`;

export const MonoTagText2 = styled(TagText2)`
  color: ${(props) => props.theme.colors.MonoTagText};
`;
