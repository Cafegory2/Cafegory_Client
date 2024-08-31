import { DefaultTheme } from "styled-components";

const colors = {
  Black: "black",
  Gray: "#737373",
  SearchGrayText: "#818181",
  Kakao: "#F8E412",
  Mono: "#ECECEC",
  HeadCount: "rgba(255, 255, 255, 0.6)",
  ViewCount: "rgba(42, 42, 42, 0.5)",
  MonoTagText: "#939393",
  GreenTag: "rgba(26, 229, 101, 0.20)",
  GreenText: "#1AE565",
  GreenBackGround: "rgba(26, 229, 101, 0.10)",
  DarkerGreenBackGround: "rgba(26, 229, 101, 0.20)",
} as const;

export type ColorType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
