import { LoginButton } from "../../common/LoginButton";
import { Text } from "../../common/Text";
import { Color } from "../../constants";
import KakaoLogo from "../../assets/Kakao.svg";

const KakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <LoginButton $backgroundColor={Color.Kakao} onClick={loginHandler}>
      <img
        src={KakaoLogo}
        alt="KakoLogo"
        style={{ position: "absolute", left: 25 }}
      />
      <Text $fontSize={20} $fontWeight={400}>
        KAKAO로 로그인
      </Text>
    </LoginButton>
  );
};

export default KakaoLogin;
