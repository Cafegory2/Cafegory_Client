import * as Style from "./styles";
import SearchIcon from "../../assets/SearchIcon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SearchNavComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./search");
  };

  //웹 최적화 검증
  useEffect(() => {
    console.log("검색바 렌더링");
  });

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
