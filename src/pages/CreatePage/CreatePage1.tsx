import {
  BodyText3,
  GreenTitleText1,
  MonoBodyText3,
  TitleText2,
} from "../../common/Text";
import { CreatePageLayout } from "../../styles/Layout.styles";
import * as Style from "./styles";

const CreatePage1 = () => {
  return (
    <CreatePageLayout>
      <Style.Wrapper>
        <Style.Title>
          <GreenTitleText1>카공 정보 작성</GreenTitleText1>
        </Style.Title>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>카공 장소</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.FinderButton>
                <MonoBodyText3>
                  카공을 진행하려는 카페를 선택해주세요.
                </MonoBodyText3>
              </Style.FinderButton>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>카공 날짜</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3 style={{ marginRight: "8px" }}>월</BodyText3>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3>일</BodyText3>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>시작 시간</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3 style={{ marginRight: "8px" }}>시</BodyText3>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3>분</BodyText3>
            </Style.Bottom>
          </Style.Container>
          <Style.Container>
            <Style.Top>
              <TitleText2>종료 시간</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3 style={{ marginRight: "8px" }}>시</BodyText3>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3>분</BodyText3>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>모집 인원</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.RadioContainer></Style.RadioContainer>
              <BodyText3>명</BodyText3>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>카테고리 선택</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.FinderButton>
                <MonoBodyText3>카테고리를 선택해주세요.</MonoBodyText3>
              </Style.FinderButton>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
        <Style.BigContainer>
          <Style.Container>
            <Style.Top>
              <TitleText2>소통 여부</TitleText2>
            </Style.Top>
            <Style.Bottom>
              <Style.RadioContainer2>
                <BodyText3>소통 여부</BodyText3>
              </Style.RadioContainer2>
            </Style.Bottom>
          </Style.Container>
        </Style.BigContainer>
      </Style.Wrapper>
    </CreatePageLayout>
  );
};

export default CreatePage1;
