import { useEffect, useState } from "react";
import { RedirectLayout } from "../../styles/Layout.styles";
import { useGetKakaoToken } from "../../hooks/useGetKakaoToken";
import { TitleText1 } from "../../common/Text";

const RedirectPage = () => {
  const [code, setCode] = useState<string | null>(null);

  const { tokens } = useGetKakaoToken(code);
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const codeValue = params.get("code");
    if (codeValue) {
      console.log(codeValue);
      setCode(codeValue);
    }
  }, []);

  useEffect(() => {
    if (tokens) {
      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);
      window.location.href = "/cafestudy/lists";
    }
  }, [tokens]);

  return (
    <RedirectLayout>
      <TitleText1>리다이렉트 중...</TitleText1>
    </RedirectLayout>
  );
};

export default RedirectPage;
