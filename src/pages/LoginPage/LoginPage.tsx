import * as Style from "./styles";
import Logo from "../../assets/Logo.svg";
import { MonoBodyText2 } from "../../common/Text";
import KakaoLogin from "../../components/login/KakaoLogin";
import GoogleLogin from "../../components/login/GoogleLogin";
import { LoginLayout } from "../../styles/Layout.styles";

const LoginPage = () => {
  return (
    <LoginLayout>
      <Style.SectionTop>
        <img src={Logo} alt="Logo" style={{ width: "40%" }} />
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
