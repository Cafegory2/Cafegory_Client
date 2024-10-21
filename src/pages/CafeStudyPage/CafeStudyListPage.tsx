import { useEffect } from "react";
import ListComponent from "../../components/cafestudyLists/ListComponent";
import { FilterComponent } from "../../components/filter/FilterComponent";
import { SearchNavComponent } from "../../components/search/SearchNavComponent";
import { MainLayout } from "../../styles/Layout.styles";

const CafeStudyListPage = () => {
  //웹 최적화 검증
  useEffect(() => {
    console.log("카페 스터디 리스트 렌더링");
  });
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
