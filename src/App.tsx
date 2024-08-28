import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styles/GlobalStyle";
import { MobileLayout } from "./styles/Layout.styles";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import CafeStudyListPage from "./pages/CafeStudyPage/CafeStudyListPage";
import CafeStudyDetailPage from "./pages/CafeStudyPage/CafeStudyDetailPage";
import { CafeStudySearchPage } from "./pages/CafeStudyPage/CafeStudySearchPage";
import "./styles/fonts.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <MobileLayout>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/oauth" element={<RedirectPage />}></Route>
              <Route path="/cafestudy">
                <Route
                  path="/cafestudy/lists"
                  element={<CafeStudyListPage />}
                ></Route>
                <Route
                  path="/cafestudy/detail"
                  element={<CafeStudyDetailPage />}
                ></Route>
                <Route
                  path="/cafestudy/lists/search"
                  element={<CafeStudySearchPage />}
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </MobileLayout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
