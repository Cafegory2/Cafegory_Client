import { BodyText1 } from "../../../common/Text";
import useCafeStudySelectFilterStore from "../../../store/useCafeStudySelctFilterStore";
import useCafeStudyFilterStore from "../../../store/useCafeStudyFilterStore";
import * as Style from "../styles";
import { Color } from "../../../constants";

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

export const RenderFilterContent = () => {
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

  const { selectedCategory } = useCafeStudySelectFilterStore();

  switch (selectedCategory) {
    case "카테고리":
      return (
        <Style.ContainerBottom id="filter">
          {CategoryTmp.map((category) => (
            <Style.BottomSection
              key={category}
              style={{
                backgroundColor: categories.includes(category)
                  ? Color.DarkerGreenBackGround
                  : "white",
              }}
              onClick={() => {
                handleAddCategory(category);
              }}
            >
              <BodyText1>{category}</BodyText1>
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
              style={{
                backgroundColor: dates.includes(date)
                  ? Color.DarkerGreenBackGround
                  : "white",
              }}
              onClick={() => {
                handleAddDate(date);
              }}
            >
              <BodyText1>{date}</BodyText1>
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
              style={{
                backgroundColor: cafes.includes(cafe)
                  ? Color.DarkerGreenBackGround
                  : "white",
              }}
              onClick={() => {
                handleAddCafe(cafe);
              }}
            >
              <BodyText1>{cafe}</BodyText1>
            </Style.BottomSection>
          ))}
        </Style.ContainerBottom>
      );
    default:
      return null;
  }
};
