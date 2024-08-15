import * as Style from "./ListComponent.styles";
import { Text } from "../../common/Text";
import { Color } from "../../constants";

const ListComponent = () => {
  const statusTagColor = Color.GreenTag;
  const statusTagText = Color.GreenTagText;
  return (
    <Style.Container>
      <Style.ContainerLeft>
        <Style.TagContainer>
          <Style.Tag style={{ backgroundColor: `${statusTagColor}` }}>
            <Text $fontSize={10} $color={statusTagText} $fontWeight={700}>
              #모집중
            </Text>
          </Style.Tag>
          <Style.Tag>
            <Text $fontSize={10} $color={Color.MonoTagText} $fontWeight={700}>
              #디자인
            </Text>
          </Style.Tag>
          <Style.Tag>
            <Text $fontSize={10} $color={Color.MonoTagText} $fontWeight={700}>
              #대화환영!
            </Text>
          </Style.Tag>
        </Style.TagContainer>
        <Style.TitleContainer>
          <Text $fontSize={22} $fontWeight={700}>
            스타벅스 카공 모집
          </Text>
        </Style.TitleContainer>
        <Style.InfoContainer>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <Text>장소</Text>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <Text>스타벅스 역삼역점</Text>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <Text>시간</Text>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <Text>8월 13일 14시 ~ 16시</Text>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>
              <Text>작성자</Text>
            </Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              <Text>수박바</Text>
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
        </Style.InfoContainer>
        <Style.ViewCount>
          <Text $fontSize={10}>조회수: 120</Text>
        </Style.ViewCount>
      </Style.ContainerLeft>
      <Style.ContainerRight></Style.ContainerRight>
    </Style.Container>
  );
};

export default ListComponent;
