import * as Style from "../styles";
import { Text } from "../../../common/Text";
import useHamburgerStore from "../../../store/useHamburgerStore";
export const HamburgerOverlay = () => {
  const { closeMenu } = useHamburgerStore();

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Style.Overlay1 onClick={closeMenu}>
      <Style.MenuContainer onClick={handleMenuClick}>
        <Style.MenuItem>
          <Text>메뉴 1</Text>
        </Style.MenuItem>
        <Style.MenuItem>
          <Text>메뉴 2</Text>
        </Style.MenuItem>
        <Style.MenuItem>
          <Text>메뉴 3</Text>
        </Style.MenuItem>
      </Style.MenuContainer>
    </Style.Overlay1>
  );
};
