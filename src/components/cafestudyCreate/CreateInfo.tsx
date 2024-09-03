import { useNavigate } from "react-router-dom";
import { BodyText2, TitleText1, TitleText2 } from "../../common/Text";
import { Color } from "../../constants";
import * as Style from "./styles";

const CreateInfo = () => {
  const navigate = useNavigate();
  const searchPlace = () => {
    navigate('/cafestudy/lists/search')
  }

  return(
    <>
      <TitleText1 $color={Color.GreenText}>
        카공 정보 작성
      </TitleText1>
      <Style.InputWrapper>
        <TitleText2>카공명</TitleText2>
        <input placeholder="모집하려는 카공의 이름을 알려주세요." />
      </Style.InputWrapper>
      <Style.InputWrapper>
        <TitleText2>카공 장소</TitleText2>
        <input onClick={searchPlace} 
          placeholder="카공을 진행하려는 카페를 선택해주세요." />
      </Style.InputWrapper>
      <Style.InputWrapper>
        <TitleText2>카공 날짜</TitleText2>
        <input placeholder="모집하려는 카공의 이름을 알려주세요." />
      </Style.InputWrapper>
      {/* <Style.InputWrapper>
        <TitleText2>시작 시간</TitleText2>
        <input placeholder="모집하려는 카공의 이름을 알려주세요." />
      </Style.InputWrapper>
      <Style.InputWrapper>
        <TitleText2>종료 시간</TitleText2>
        <input placeholder="모집하려는 카공의 이름을 알려주세요." />
      </Style.InputWrapper> */}
      <Style.InputWrapper>
        <TitleText2>모집 인원 </TitleText2>
        <input placeholder="모집하려는 카공의 이름을 알려주세요." />
      </Style.InputWrapper>
      <Style.InputWrapper>
        <TitleText2>카테고리 선택</TitleText2>
        <input/>
      </Style.InputWrapper>
      <Style.InputWrapper>
        <TitleText2>대화 여부 선택</TitleText2>
        <input/>
      </Style.InputWrapper>
    </>
  )
}
export default CreateInfo;