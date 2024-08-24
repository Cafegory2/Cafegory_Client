import * as Style from "./styles";
import SearchIcon from "../../assets/SearchIcon.svg";
import { useNavigate } from "react-router-dom";

export const SearchNavComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./search");
  };

  return (
    <Style.Layout>
      <Style.Container onClick={handleClick}>
        <Style.ImgContainer>
          <img src={SearchIcon} alt="SearchIcon" />
        </Style.ImgContainer>
        <Style.InputContainer
          readOnly
          placeholder="장소, 카페명을 검색해보세요!"
        />
      </Style.Container>
    </Style.Layout>
  );
};
