import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useGeoLocation from "../../hooks/useGeoLocation";
import useHamburgerStore from "../../store/useHamburgerStore";
import * as Style from "./styles";
import AlarmSvg from "../../assets/Alarm.svg";
import BackSvg from "../../assets/Back.svg";
import HamburgerSvg from "../../assets/Hamburger.svg";
import { HeaderButton } from "../../common/HeaderButton";
import { HamburgerOverlay } from "../overlay/hamburger/HamburgerOverlay";
import { LogoTextL, LogoTextR } from "../../common/Text";
import TextLogo from "../../assets/TextLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const urlLocation = useLocation();
  const path = urlLocation.pathname;
  const { isOpen, toggleMenu } = useHamburgerStore();
  const location = useGeoLocation();

  useEffect(() => {
    if (!location.error) {
      console.log(location.coordinates?.lat, location.coordinates?.lng);
    } else {
      console.log(location.error.message);
    }
  }, [location]);

  useLockBodyScroll(isOpen);

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggle = () => {
    toggleMenu();
  };

  return (
    <>
      <Style.HeaderLayout>
        {path === "/login" ||
        path === "/oauth" ||
        path === "/cafestudy/lists" ||
        path === "/profile" ? (
          <Style.LogoContainer>
            <LogoTextL>카페</LogoTextL>
            <LogoTextR>고리</LogoTextR>
            <img src={TextLogo} alt="로고" style={{ paddingTop: "2px" }} />
          </Style.LogoContainer>
        ) : (
          <HeaderButton onClick={handleBack}>
            <img src={BackSvg} alt="뒤로가기 이미지" />
          </HeaderButton>
        )}
        <div>
          <HeaderButton>
            <img src={AlarmSvg} alt="알람 이미지" />
          </HeaderButton>
          <HeaderButton onClick={handleToggle} style={{ marginLeft: "10px" }}>
            <img src={HamburgerSvg} alt="햄버거 이미지" />
          </HeaderButton>
        </div>
      </Style.HeaderLayout>

      {isOpen && <HamburgerOverlay />}
    </>
  );
};

export default Header;
