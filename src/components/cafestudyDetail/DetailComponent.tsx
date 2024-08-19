// import { Text } from "../../common/Text";
import { ParticipateButton } from "../../common/ParticipateButton";
import { BodyText1, TitleText1, TitleText2 } from "../../common/Text";
import { Color } from "../../constants";
import * as Style from "./DetailComponent.styles";

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
              <BodyText1 $color={Color.MonoTagText}>
                작성 일시 | {timeTmp}
              </BodyText1>
              <BodyText1 $color={Color.MonoTagText}>
                조회수 | {viewTmp}
              </BodyText1>
            </Style.OverviewTopSection>
          </Style.OverviewTop>
          <Style.OverviewBottom>
            <Style.OverviewBottomSection>
              <Style.Section>
                <Style.SectionTitle1>
                  <BodyText1 $color={Color.MonoTagText}>장소</BodyText1>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText1 style={{ textDecoration: "underline" }}>
                    <a href="https://www.starbucks.co.kr">
                      스타벅스 역삼대로점
                    </a>
                  </BodyText1>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText1 $color={Color.MonoTagText}>대화</BodyText1>
                </Style.SectionTitle2>
                <Style.SectionDetail>
                  <BodyText1>대화 환영!</BodyText1>
                </Style.SectionDetail>
              </Style.Section>
            </Style.OverviewBottomSection>
            <Style.OverviewBottomSection>
              <Style.Section>
                <Style.SectionTitle1>
                  <BodyText1 $color={Color.MonoTagText}>일시</BodyText1>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText1>8월 13일 14시 ~ 16시</BodyText1>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText1 $color={Color.MonoTagText}>모집인원</BodyText1>
                </Style.SectionTitle2>
                <Style.SectionDetail>
                  <BodyText1>(2/4)</BodyText1>
                </Style.SectionDetail>
              </Style.Section>
            </Style.OverviewBottomSection>
            <Style.OverviewBottomSection>
              <Style.Section>
                <Style.SectionTitle1>
                  <BodyText1 $color={Color.MonoTagText}>작성자</BodyText1>
                </Style.SectionTitle1>
                <Style.SectionDetail>
                  <BodyText1>수박바</BodyText1>
                </Style.SectionDetail>
              </Style.Section>
              <Style.Section>
                <Style.SectionTitle2>
                  <BodyText1 $color={Color.MonoTagText}>카테고리</BodyText1>
                </Style.SectionTitle2>
                <Style.SectionDetail>
                  <BodyText1>디자인</BodyText1>
                </Style.SectionDetail>
              </Style.Section>
            </Style.OverviewBottomSection>
          </Style.OverviewBottom>
        </Style.ContainerOverview>
        <Style.ContainerDetail>
          <Style.DetailTitle>
            <TitleText2 $color={Color.GreenText}>카공 소개</TitleText2>
          </Style.DetailTitle>
          <Style.DetailBody>
            <BodyText1 style={{ overflow: "visible", whiteSpace: "normal" }}>
              안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에
              대한 설명인데 여기서 이걸 이렇게 하면
            </BodyText1>
          </Style.DetailBody>
        </Style.ContainerDetail>
        <Style.ContainerDetail style={{ marginBottom: "90px" }}>
          <Style.DetailTitle>
            <TitleText2 $color={Color.GreenText}>Q&A</TitleText2>
          </Style.DetailTitle>
          <Style.DetailBody>
            <BodyText1 style={{ overflow: "visible", whiteSpace: "normal" }}>
              아직 Q&A가 등록되지 않았습니다.안녕하세요! 어쩌고 저쩌고 카공
              설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸 이렇게
              하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에
              대한 설명인데 여기서 이걸 이렇게 하면안녕하세요! 어쩌고 저쩌고
              카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서 이걸
              이렇게 하면안녕하세요! 어쩌고 저쩌고 카공 설명~ 이렇고 저렇고 하는
              카공에 대한 설명인데 여기서 이걸 이렇게 하면안녕하세요! 어쩌고
              저쩌고 카공 설명~ 이렇고 저렇고 하는 카공에 대한 설명인데 여기서
              이걸 이렇게 하면
            </BodyText1>
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
