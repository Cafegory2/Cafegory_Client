// import { Text } from "../../common/Text";
import { ParticipateButton } from "../../common/ParticipateButton";
import { BodyText3, TitleText1, TitleText2 } from "../../common/Text";
import { Color } from "../../constants";
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
              <BodyText3 $color={Color.MonoTagText}>
                작성 일시 | {timeTmp}
              </BodyText3>
              <BodyText3 $color={Color.MonoTagText}>
                조회수 | {viewTmp}
              </BodyText3>
            </Style.OverviewTopSection>
          </Style.OverviewTop>
          <Style.OverviewBottom>
            <Style.SectionContainer>
              <Style.Section>
                <Style.SectionTitle1>
                  <BodyText3 $color={Color.MonoTagText}>장소</BodyText3>
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
                  <BodyText3 $color={Color.MonoTagText}>일시</BodyText3>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText3>8월 13일 14시 ~ 16시</BodyText3>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle1>
                  <BodyText3 $color={Color.MonoTagText}>작성자</BodyText3>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText3>수박바</BodyText3>
                </Style.SectionDetail>
              </Style.Section>
            </Style.SectionContainer>
            <Style.SectionContainer>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText3 $color={Color.Black}>대화</BodyText3>
                </Style.SectionTitle2>
                <Style.SectionDetail2>
                  <BodyText3>대화 환영!</BodyText3>
                </Style.SectionDetail2>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText3 $color={Color.MonoTagText}>모집인원</BodyText3>
                </Style.SectionTitle2>
                <Style.SectionDetail2>
                  <BodyText3>(2/4)</BodyText3>
                </Style.SectionDetail2>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText3 $color={Color.MonoTagText}>카테고리</BodyText3>
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
            <TitleText2 $color={Color.GreenText}>카공 소개</TitleText2>
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
            <TitleText2 $color={Color.GreenText}>Q&A</TitleText2>
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
