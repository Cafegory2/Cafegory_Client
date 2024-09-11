import { BodyText1Custom, TitleText2 } from "../../../common/Text";
import useCafeStudyFilterStore from "../../../store/useCafeStudyFilterStore";
import * as Style from "../styles";
import { useEffect } from "react";
import React from "react";
import { FilterOption } from "../../../types/cafestudyfilterType";
import GreenCheck from "../../../assets/GreenCheck.svg";
import DetailButton from "../../../assets/FilterDetailShowButton.svg";

const CategoryTmp = [
  "개발",
  "경영/비즈니스",
  "마케팅/광고",
  "디자인",
  "영업",
  "고객 서비스/리테일",
];

const DateTmp = [
  "8월 2일",
  "8월 3일",
  "8월 4일",
  "8월 5일",
  "8월 6일",
  "8월 7일",
];

const CafeTmp = ["카페 시설", "분위기", "기타"];

interface PropType {
  selectedCategory: FilterOption;
}

const RenderFilterContent = React.memo<PropType>(({ selectedCategory }) => {
  const { categories, dates, cafes, toggleCategory, toggleDate, toggleCafe } =
    useCafeStudyFilterStore();
  const handleAddCategory = (prop: string) => {
    toggleCategory(prop);
  };
  const handleAddDate = (prop: string) => {
    toggleDate(prop);
  };
  const handleAddCafe = (prop: string) => {
    toggleCafe(prop);
  };

  //웹 최적화 검증
  useEffect(() => {
    console.log("하단 필터 오버레이 렌더링");
  });

  switch (selectedCategory) {
    case "카테고리":
      return (
        <Style.ContainerBottom id="filter">
          {CategoryTmp.map((category) => (
            <Style.BottomSection
              key={category}
              onClick={() => handleAddCategory(category)}
            >
              <BodyText1Custom $isSelected={categories.includes(category)}>
                {category}
              </BodyText1Custom>
              {categories.includes(category) ? (
                <img src={GreenCheck} alt="체크표시" />
              ) : null}
            </Style.BottomSection>
          ))}
        </Style.ContainerBottom>
      );
    case "날짜":
      return (
        <Style.ContainerBottom id="filter">
          {DateTmp.map((date) => (
            <Style.BottomSection
              key={date}
              onClick={() => {
                handleAddDate(date);
              }}
            >
              <BodyText1Custom $isSelected={dates.includes(date)}>
                {date}
              </BodyText1Custom>
              {dates.includes(date) ? (
                <img src={GreenCheck} alt="체크표시" />
              ) : null}
            </Style.BottomSection>
          ))}
        </Style.ContainerBottom>
      );
    case "카페":
      return (
        <Style.ContainerBottom id="filter">
          {CafeTmp.map((cafe) => (
            <Style.BottomSection
              key={cafe}
              onClick={() => {
                handleAddCafe(cafe);
              }}
            >
              <TitleText2>{cafe}</TitleText2>
              <img src={DetailButton} alt="디테일 표시" />
            </Style.BottomSection>
          ))}
        </Style.ContainerBottom>
      );
    default:
      return null;
  }
});

export default RenderFilterContent;
