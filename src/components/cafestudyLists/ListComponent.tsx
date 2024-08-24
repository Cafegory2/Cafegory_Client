import * as Style from "./styles";
import { TitleText1, BodyText3, BodyText4, TagText2 } from "../../common/Text";
import { Color } from "../../constants";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const statusTagColor = Color.GreenTag;
  const statusTagText = Color.GreenText;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cafestudy/detail");
    window.scrollTo(0, 0);
  };
  return (
    <Style.Container onClick={handleNavigate}>
      <Style.ContainerLeft>
        <Style.TagContainer>
          <Style.Tag style={{ backgroundColor: `${statusTagColor}` }}>
            <TagText2 $color={statusTagText}>#모집중</TagText2>
          </Style.Tag>
          <Style.Tag>
            <TagText2 $color={Color.MonoTagText}>#디자인</TagText2>
          </Style.Tag>
          <Style.Tag>
            <TagText2 $color={Color.MonoTagText}>#대화환영!</TagText2>
          </Style.Tag>
        </Style.TagContainer>
        <Style.TitleContainer>
          <TitleText1>스타벅스 카공 모집</TitleText1>
        </Style.TitleContainer>
        <Style.InfoContainer>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <BodyText3>장소</BodyText3>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <BodyText3>스타벅스 역삼역점</BodyText3>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <BodyText3>시간</BodyText3>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <BodyText3>8월 13일 14시 ~ 16시</BodyText3>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <BodyText3>작성자</BodyText3>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <BodyText3>수박바</BodyText3>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
        </Style.InfoContainer>
        <Style.ViewCount>
          <BodyText4 $color={Color.ViewCount}>조회수: 120</BodyText4>
        </Style.ViewCount>
      </Style.ContainerLeft>
      <Style.ContainerRight>
        <Style.ImageContainer></Style.ImageContainer>
        <Style.HeadCount>
          <TagText2>인원(2/4)</TagText2>
        </Style.HeadCount>
      </Style.ContainerRight>
    </Style.Container>
  );
};

export default ListComponent;
