import * as Style from "./SearchComponent.styles";
import SearchIcon from "../../assets/SearchIcon.svg";
import { BodyText1 } from "../../common/Text";
import { Color } from "../../constants";

export const SearchComponent = () => {
  return (
    <Style.Layout>
      <Style.Container>
        <img src={SearchIcon} alt="SearchIcon" />
        <BodyText1 $color={Color.SearchGrayText} style={{ marginLeft: "10px" }}>
          장소, 카페명을 검색해 보세요!
        </BodyText1>
      </Style.Container>
    </Style.Layout>
  );
};
