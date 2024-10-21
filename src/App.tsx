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
import CreatePage from "./pages/CreatePage/CreatePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { CafeStudySearchPage } from "./pages/CafeStudyPage/CafeStudySearchPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/fonts.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
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
                <Route path="/create" element={<CreatePage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
              </Routes>
            </BrowserRouter>
          </MobileLayout>
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
