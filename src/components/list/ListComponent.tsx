import * as Style from "./ListComponent.styles";

const ListComponent = () => {
  return (
    <Style.Container>
      <Style.ContainerLeft>
        <Style.LeftTag>
          <p>#모집중</p>
          <p>#디자인</p>
          <p>#대화환영!</p>
        </Style.LeftTag>
        <Style.LeftTitle>
          <p>스타벅스 카공 모집</p>
        </Style.LeftTitle>
        <Style.LeftInfo>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>장소</Style.InfoDetailTitle>
            <Style.InfoDetailDetail>스타벅스 역삼역점</Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>시간</Style.InfoDetailTitle>
            <Style.InfoDetailDetail>
              8월 13일 14시 ~ 16시
            </Style.InfoDetailDetail>
          </Style.InfoDetail>
          <Style.InfoDetail>
            <Style.InfoDetailTitle>작성자</Style.InfoDetailTitle>
            <Style.InfoDetailDetail>수박바</Style.InfoDetailDetail>
          </Style.InfoDetail>
        </Style.LeftInfo>
        <Style.ViewCount>조회수: 120</Style.ViewCount>
      </Style.ContainerLeft>
      <Style.ContainerRight></Style.ContainerRight>
    </Style.Container>
  );
};

export default ListComponent;
