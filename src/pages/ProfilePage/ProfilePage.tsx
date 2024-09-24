import { ProfileLayout } from "../../styles/Layout.styles";
import * as Style from "./styles";
import { ProfileBottom } from "../../components/profile/ProfileBottom";
import { CommonTop } from "../../components/profile/CommonTop";

const RedirectPage = () => {
  return (
    <ProfileLayout>
      <Style.Section>
        <CommonTop />
      </Style.Section>
      <Style.Section>
        <ProfileBottom />
      </Style.Section>
    </ProfileLayout>
  );
};

export default RedirectPage;
