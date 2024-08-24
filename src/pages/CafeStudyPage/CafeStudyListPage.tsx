import ListComponent from "../../components/cafestudyLists/ListComponent";
import { FilterComponent } from "../../components/filter/FilterComponent";
import { SearchNavComponent } from "../../components/search/SearchNavComponent";
import { MainLayout } from "../../styles/Layout.styles";

const CafeStudyListPage = () => {
  return (
    <>
      <SearchNavComponent />
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
