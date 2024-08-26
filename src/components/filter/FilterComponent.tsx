import { FilterButton } from "../../common/FilterButton";
import { TitleText2 } from "../../common/Text";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useFilterStore from "../../store/useFilterStore";
import * as Style from "./styles";
import DownButton from "../../assets/Down.svg";
import { FilterOverlay } from "../overlay/filter/FilterOverlay";

export const FilterComponent = () => {
  const { isOpen, toggleMenu } = useFilterStore();
  useLockBodyScroll(isOpen);

  const handleToggle = () => {
    toggleMenu();
  };

  return (
    <>
      <Style.Layout>
        <FilterButton onClick={handleToggle}>
          <Style.ImageContainer>
            <img src={DownButton} alt="DownButton" />
          </Style.ImageContainer>
          <Style.TextContainer>
            <TitleText2>필터링 검색</TitleText2>
          </Style.TextContainer>
        </FilterButton>
      </Style.Layout>
      {isOpen && <FilterOverlay />}
    </>
  );
};
