import { ParticipateButton } from "../../common/ParticipateButton";
import {
  BodyText3,
  GreenTitleText2,
  MonoBodyText3,
  TitleText1,
} from "../../common/Text";
import * as Style from "./styles";

const DetailComponent = () => {
  const timeTmp: string = "16:40";
  const viewTmp: number = 154;

  return (
    <>
      <Style.ImgContainer>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#56e97b89",
          }}
        ></div>
      </Style.ImgContainer>
      <Style.DetailContainer>
        <Style.ContainerOverview>
          <Style.OverviewTop>
            <Style.OverviewTopSection>
              <TitleText1>스타벅스 카공 모집</TitleText1>
            </Style.OverviewTopSection>
            <Style.OverviewTopSection>
              <MonoBodyText3>작성 일시 | {timeTmp}</MonoBodyText3>
              <MonoBodyText3>조회수 | {viewTmp}</MonoBodyText3>
            </Style.OverviewTopSection>
          </Style.OverviewTop>
          <Style.OverviewBottom>
            <Style.SectionContainer>
              <Style.Section>
                <Style.SectionTitle1>
                  <MonoBodyText3>장소</MonoBodyText3>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText3 style={{ textDecoration: "underline" }}>
                    <a href="https://www.starbucks.co.kr">
                      스타벅스 역삼대로점
                    </a>
                  </BodyText3>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle1>
                  <MonoBodyText3>일시</MonoBodyText3>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText3>8월 13일 14시 ~ 16시</BodyText3>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle1>
                  <MonoBodyText3>작성자</MonoBodyText3>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText3>수박바</BodyText3>
                </Style.SectionDetail>
              </Style.Section>
            </Style.SectionContainer>
            <Style.SectionContainer>
              <Style.Section>
                <Style.SectionTitle2>
                  <MonoBodyText3>대화</MonoBodyText3>
                </Style.SectionTitle2>
                <Style.SectionDetail2>
                  <BodyText3>대화 환영!</BodyText3>
                </Style.SectionDetail2>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <MonoBodyText3>모집인원</MonoBodyText3>
                </Style.SectionTitle2>
                <Style.SectionDetail2>
                  <BodyText3>(2/4)</BodyText3>
                </Style.SectionDetail2>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <MonoBodyText3>카테고리</MonoBodyText3>
                </Style.SectionTitle2>
                <Style.SectionDetail2>
                  <BodyText3>고객 서비스/리테일</BodyText3>
                </Style.SectionDetail2>
              </Style.Section>
            </Style.SectionContainer>
          </Style.OverviewBottom>
        </Style.ContainerOverview>
        <Style.ContainerDetail>
          <Style.DetailTitle>
            <GreenTitleText2>카공 소개</GreenTitleText2>
          </Style.DetailTitle>
          <Style.DetailBody>
            <BodyText3 style={{ overflow: "visible", whiteSpace: "normal" }}>
              안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에
              대한 설명인데 여기서 이걸 이렇게 하면안녕하세요! 어쩌고 저쩌고
              카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸
              이렇게 하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는
              카공에 대한 설명인데 여ㄴㅇㄴㅇ기서 이걸 이렇게 하면안녕하세요!
              어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데
              여기서 이걸 이렇게 하면
            </BodyText3>
          </Style.DetailBody>
        </Style.ContainerDetail>
        <Style.ContainerDetail style={{ marginBottom: "90px" }}>
          <Style.DetailTitle>
            <GreenTitleText2>Q&A</GreenTitleText2>
          </Style.DetailTitle>
          <Style.DetailBody>
            <BodyText3 style={{ overflow: "visible", whiteSpace: "normal" }}>
              아직 Q&A가 등록되지 않았습니다.안녕하세요! 어쩌고 저쩌고 카공
              설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸 이렇게
              하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에
              대한 설명인데 여기서 이걸 이렇게 하면안녕하세요! 어쩌고 저쩌고
              카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸
              이렇게 하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는
              카공에 대한 설명인데 여ㅇㄴㅇㄴㅇ기서 이걸 이렇게 하면안녕하세요!
              어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데
              여기서 이걸 이렇게 하면 하면안녕하세요! 어쩌고 저쩌고 카공 설명~
              이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸 이렇게
              하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에
              대한 설명인데 여기서 이걸 이렇게 하면안녕하세요! 어쩌고 저쩌고
              카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸
              이렇게 하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는
              카공에 대한 설명인데 여기서 이걸 이렇게 하면
            </BodyText3>
          </Style.DetailBody>
        </Style.ContainerDetail>
        <ParticipateButton>
          <TitleText1>참여하기</TitleText1>
        </ParticipateButton>
      </Style.DetailContainer>
    </>
  );
};

export default DetailComponent;
