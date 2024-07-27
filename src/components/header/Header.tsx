import useGeoLocation from "../../hooks/useGeoLocation";
import * as Style from "./Header.styles";

//현재 페이지를 추적해서 login페이지인지 아닌지 판단 로직 필요
//로그인 페이지의 Header는 기본 Header랑 다름
const Header = () => {
  const location = useGeoLocation();
  if (!location.error) {
    console.log(location.coordinates?.lat, location.coordinates?.lng);
  } else {
    console.log(location.error.message);
  }

  return <Style.HeaderLayout>헤더임</Style.HeaderLayout>;
};

export default Header;
