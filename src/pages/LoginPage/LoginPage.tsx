//로그인 페이지에 필요한 컴포넌트들을 import해서 여기서 합침
import * as Style from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <Style.Layout>
      <Style.SectionTop>상단</Style.SectionTop>
      <Style.SectionBottom>하단</Style.SectionBottom>
    </Style.Layout>
  );
};

export default LoginPage;
