import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../styles/Layout.styles";
import { useGetKakaoToken } from "../../hooks/useGetKakaoToken";

const RedirectPage = () => {
  const [code, setCode] = useState<string | null>(null);
  const navigate = useNavigate();

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
      navigate("/");
    }
  }, [tokens, navigate]);

  return <MainLayout></MainLayout>;
};

export default RedirectPage;
