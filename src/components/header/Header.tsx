import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "../../hooks/useGeoLocation";
import * as Style from "./Header.styles";
import AlarmSvg from "../../assets/Alarm.svg";
import BackSvg from "../../assets/Back.svg";
import HamburgerSvg from "../../assets/Hamburger.svg";
import { HeaderButton } from "../../common/HeaderButton";
import { Text } from "../../common/Text";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useGeoLocation();

  useEffect(() => {
    if (!location.error) {
      console.log(location.coordinates?.lat, location.coordinates?.lng);
    } else {
      console.log(location.error.message);
    }
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Style.HeaderLayout>
        <HeaderButton onClick={handleBack}>
          <img src={BackSvg} alt="뒤로가기 이미지" />
        </HeaderButton>
        <div>
          <HeaderButton>
            <img src={AlarmSvg} alt="알람 이미지" />
          </HeaderButton>
          <HeaderButton onClick={toggleMenu} style={{ marginLeft: "10px" }}>
            <img src={HamburgerSvg} alt="햄버거 이미지" />
          </HeaderButton>
        </div>
      </Style.HeaderLayout>

      {isMenuOpen && (
        <Style.MenuOverlay onClick={closeMenu}>
          <Style.Menu>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
            <Style.MenuItem>
              <Text>메뉴 1</Text>
            </Style.MenuItem>
          </Style.Menu>
        </Style.MenuOverlay>
      )}
    </>
  );
};

export default Header;
