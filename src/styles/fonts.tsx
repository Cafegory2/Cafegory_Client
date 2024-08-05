import { css } from "styled-components";

import NotoSansRegular from "../fonts/NotoSansKR-Regular.woff";

export const fonts = css`
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("NotoSansKR"), url(${NotoSansRegular}) format("woff");
  }
`;
