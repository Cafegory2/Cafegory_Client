import { BodyText3, GreenTitleText2, TitleText2 } from "../../common/Text";
import { ProfileLayout } from "../../styles/Layout.styles";
import Avatar from "../../assets/avatar.jpeg";
import * as Style from "./styles";
import { FilteredButton } from "../../common/FilterButton";
import ListComponent from "../../components/cafestudyLists/ListComponent";

const RedirectPage = () => {
  return (
    <ProfileLayout>
      <Style.Section>
        <Style.TopContainer>
          <Style.ContainerLeft>
            <Style.UserImage>
              <Style.ImageContainer src={Avatar} alt="프로필 이미지" />
            </Style.UserImage>
            <Style.UserName>
              <GreenTitleText2
                style={{
                  overflow: "visible",
                  whiteSpace: "normal",
                }}
              >
                카페고리 님
              </GreenTitleText2>
            </Style.UserName>
          </Style.ContainerLeft>
        </Style.TopContainer>
        <Style.BottomContainer>
          <Style.BottomTitle>
            <TitleText2>카페고리님의 자기소개</TitleText2>
          </Style.BottomTitle>
          <Style.BottomDetail1>
            <BodyText3
              style={{
                overflow: "visible",
                whiteSpace: "normal",
              }}
            >
              안녕하세요! UXUI 공부중인 디자이너 지망생 00입니다 <br />
              같이 자유로운 분위기에서 공부하실 분을 찾고 있어요:)
            </BodyText3>
          </Style.BottomDetail1>
          <Style.BottomTitle>
            <TitleText2>카페고리님은 이런 공부에 관심있어요</TitleText2>
          </Style.BottomTitle>
          <Style.BottomDetail2>
            <FilteredButton>
              <TitleText2># 디자인</TitleText2>
            </FilteredButton>
            <FilteredButton>
              <TitleText2># 마케팅/광고</TitleText2>
            </FilteredButton>
          </Style.BottomDetail2>
        </Style.BottomContainer>
      </Style.Section>
      <Style.Section>
        <Style.BottomContainer>
          <Style.BottomTitle>
            <TitleText2>카페고리님이 모집중인 카공이에요</TitleText2>
          </Style.BottomTitle>
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
          <ListComponent />
        </Style.BottomContainer>
      </Style.Section>
    </ProfileLayout>
  );
};

export default RedirectPage;
