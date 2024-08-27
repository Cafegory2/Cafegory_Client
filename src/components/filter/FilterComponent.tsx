import { FilterButton, FilteredButton } from "../../common/FilterButton";
import { TitleText2 } from "../../common/Text";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useFilterStore from "../../store/useFilterStore";
import useCafeStudyFilterStore from "../../store/useCafeStudyFilterStore";
import * as Style from "./styles";
import DownButton from "../../assets/Down.svg";
import CancelButton from "../../assets/Cancel.svg";
import { FilterOverlay } from "../overlay/filter/FilterOverlay";

export const FilterComponent = () => {
  const { isOpen, toggleMenu } = useFilterStore();
  useLockBodyScroll(isOpen);

  const { categories, dates, cafes, toggleCategory, toggleDate, toggleCafe } =
    useCafeStudyFilterStore();

  const handleToggleCategory = (prop: string) => {
    toggleCategory(prop);
  };
  const handleToggleDate = (prop: string) => {
    toggleDate(prop);
  };
  const handleToggleCafe = (prop: string) => {
    toggleCafe(prop);
  };
  const handleToggle = () => {
    toggleMenu();
  };

  //카테고리 쪽은 했지만 날짜랑 카페는 해야 함
  return (
    <>
      <Style.Layout>
        <FilterButton onClick={handleToggle}>
          <img src={DownButton} alt="필터 버튼" />

          <TitleText2>필터링 검색</TitleText2>
        </FilterButton>
        {categories.length > 0 || dates.length > 0 || cafes.length > 0 ? (
          <Style.FilterBar>|</Style.FilterBar>
        ) : null}
        {categories
          ? categories.map((category) => (
              <FilteredButton key={category}>
                <TitleText2 style={{ marginRight: "10px" }}>
                  {category}
                </TitleText2>
                <img
                  src={CancelButton}
                  alt="취소 버튼"
                  onClick={() => {
                    handleToggleCategory(category);
                  }}
                />
              </FilteredButton>
            ))
          : null}
        {dates
          ? dates.map((date) => (
              <FilteredButton key={date}>
                <TitleText2 style={{ marginRight: "10px" }}>{date}</TitleText2>
                <img
                  src={CancelButton}
                  alt="취소 버튼"
                  onClick={() => {
                    handleToggleDate(date);
                  }}
                />
              </FilteredButton>
            ))
          : null}
        {cafes
          ? cafes.map((cafe) => (
              <FilteredButton key={cafe}>
                <TitleText2 style={{ marginRight: "10px" }}>{cafe}</TitleText2>
                <img
                  src={CancelButton}
                  alt="취소 버튼"
                  onClick={() => {
                    handleToggleCafe(cafe);
                  }}
                />
              </FilteredButton>
            ))
          : null}
      </Style.Layout>
      {isOpen && <FilterOverlay />}
    </>
  );
};
