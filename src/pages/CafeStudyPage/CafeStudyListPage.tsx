import ListComponent from "../../components/cafestudyLists/ListComponent";
import { FilterComponent } from "../../components/filter/FilterComponent";
import { SearchComponent } from "../../components/search/SearchComponent";
import { MainLayout } from "../../styles/Layout.styles";

const CafeStudyListPage = () => {
  return (
    <>
      <SearchComponent />
      <FilterComponent />
      <MainLayout>
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </MainLayout>
    </>
  );
};

export default CafeStudyListPage;
