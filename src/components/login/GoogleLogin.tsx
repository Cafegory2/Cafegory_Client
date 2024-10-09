import { LoginButton } from "../../common/LoginButton";
import { Text } from "../../common/Text";
import GoogleLogo from "../../assets/Google.svg";

const GoogleLogin = () => {
  return (
    <LoginButton style={{ border: "1px solid black" }}>
      <img
        src={GoogleLogo}
        alt="GoogleLogo"
        style={{ position: "absolute", left: 21 }}
      />
      <Text $fontSize={16} $fontWeight={400}>
        GOOGLE로 로그인
      </Text>
    </LoginButton>
  );
};

export default GoogleLogin;
