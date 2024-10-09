import { KakaoLoginButton } from "../../common/LoginButton";
import { Text } from "../../common/Text";
import KakaoLogo from "../../assets/Kakao.svg";

const KakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <KakaoLoginButton onClick={loginHandler}>
      <img
        src={KakaoLogo}
        alt="KakoLogo"
        style={{ position: "absolute", left: 25 }}
      />
      <Text $fontSize={16} $fontWeight={400}>
        KAKAO로 로그인
      </Text>
    </KakaoLoginButton>
  );
};

export default KakaoLogin;
