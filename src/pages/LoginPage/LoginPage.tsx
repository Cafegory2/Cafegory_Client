import * as Style from "./LoginPage.styles";
import Logo from "../../assets/Logo.svg";
import { Text } from "../../common/Text";
import { Color } from "../../constants";
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
        <Text $color={Color.Gray}>SNS 계정으로 로그인</Text>
        <Style.Bar />
        <KakaoLogin />
        <GoogleLogin />
      </Style.SectionBottom>
    </LoginLayout>
  );
};

export default LoginPage;
