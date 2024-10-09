import * as Style from "./styles";
import Logo from "../../assets/Logo.svg";
import { MonoBodyText2 } from "../../common/Text";
import KakaoLogin from "../../components/login/KakaoLogin";
import GoogleLogin from "../../components/login/GoogleLogin";
import { LoginLayout } from "../../styles/Layout.styles";
import { LogoTextBigL, LogoTextBigR } from "../../common/Text";

const LoginPage = () => {
  return (
    <LoginLayout>
      <Style.SectionTop>
        <Style.ImgContainer>
          <img src={Logo} alt="Logo" style={{ width: "40%" }} />
        </Style.ImgContainer>
        <Style.TextContainer>
          <LogoTextBigL>카페</LogoTextBigL>
          <LogoTextBigR>고리</LogoTextBigR>
        </Style.TextContainer>
      </Style.SectionTop>
      <Style.SectionBottom>
        <MonoBodyText2>SNS 계정으로 로그인</MonoBodyText2>
        <Style.Bar />
        <KakaoLogin />
        <GoogleLogin />
      </Style.SectionBottom>
    </LoginLayout>
  );
};

export default LoginPage;
