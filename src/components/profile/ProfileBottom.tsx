import { TitleText2 } from "../../common/Text";
import * as Style from "./style";
import ListComponent from "../cafestudyLists/ListComponent";

export const ProfileBottom = () => {
  return (
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
  );
};
