import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styles/GlobalStyle";
import { MobileLayout } from "./styles/Layout.styles";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import StudyListPage from "./pages/StudyListPage/StudyListPage";

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
              <Route path="/studylist" element={<StudyListPage />}></Route>
            </Routes>
          </BrowserRouter>
        </MobileLayout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
