import * as Style from "./styles";
import {
  TitleText1,
  BodyText3,
  TagText2,
  GreenTagText2,
  MonoTagText2,
  MonoBodyText4,
} from "../../common/Text";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cafestudy/detail");
    window.scrollTo(0, 0);
  };
  return (
    <Style.Container onClick={handleNavigate}>
      <Style.ContainerLeft>
        <Style.TagContainer>
          <Style.GreenTag>
            <GreenTagText2>#모집중</GreenTagText2>
          </Style.GreenTag>
          <Style.Tag>
            <MonoTagText2>#디자인</MonoTagText2>
          </Style.Tag>
          <Style.Tag>
            <MonoTagText2>#대화환영</MonoTagText2>
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
          <MonoBodyText4>조회수: 120</MonoBodyText4>
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
