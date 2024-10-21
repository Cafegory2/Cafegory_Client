import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RedirectLayout } from "../../styles/Layout.styles";
import { useGetKakaoToken } from "../../hooks/useGetKakaoToken";
import { TitleText1 } from "../../common/Text";
import { ParticipateButton } from "../../common/ParticipateButton";
import Avatar from "../../assets/avatar.jpeg";
import * as Style from "./styles";
import { useGetProfile } from "../../hooks/useGetProfile";

const RedirectPage = () => {
  const [code, setCode] = useState<string | null>(null);
  const { tokens, tokenPending, tokenError } = useGetKakaoToken(code);
  const { profile, profilePending, profileError } = useGetProfile(
    tokens?.accessToken,
    {
      enabled: !!tokens,
    }
  );

  useEffect(() => {
    console.log("토큰 받아오는거?", tokenPending);
    console.log("프로필 받아오는거?", profilePending);
  }, [tokenPending, profilePending]);

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/cafestudy/lists");
  };

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const codeValue = params.get("code");
    if (codeValue) {
      console.log(codeValue);
      setCode(codeValue);
    }
  }, []);

  if (tokens) {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }

  if (tokenError || profileError) {
    alert("로그인 중 오류 발생");
    navigate(-1);
  }

  return (
    <RedirectLayout>
      {profilePending && tokenPending ? (
        <TitleText1>정보 확인 중...</TitleText1>
      ) : (
        <>
          <Style.UserImage>
            <Style.ImageContainer src={Avatar} alt="프로필 이미지" />
          </Style.UserImage>
          <Style.TextContainerTop>
            <TitleText1 $color="#1AE565">{profile?.nickname}</TitleText1>
            <TitleText1>님의</TitleText1>
          </Style.TextContainerTop>
          <TitleText1>가입을 환영합니다!</TitleText1>
          <ParticipateButton onClick={handleOnclick}>
            <TitleText1>카공 참여하러 가기</TitleText1>
          </ParticipateButton>
        </>
      )}
    </RedirectLayout>
  );
};

export default RedirectPage;
