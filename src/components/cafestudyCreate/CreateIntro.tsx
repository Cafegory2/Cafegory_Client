import { TitleText1 } from "../../common/Text";
import { Color } from "../../constants";
import { TextArea } from "./styles";

const CreateIntro = () => {
  return(
    <>
      <TitleText1 $color={Color.GreenText}>
        카공 소개글 작성
      </TitleText1>
      <TextArea placeholder="모집하려는 카공을 자유롭게 소개해주세요!"/>
    </>
  )
}
export default CreateIntro; 