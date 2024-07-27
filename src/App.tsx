import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styles/GlobalStyle";
import { MainLayout, MobileLayout } from "./styles/Layout.styles";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <MainLayout>
          <MobileLayout>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
              </Routes>
            </BrowserRouter>
          </MobileLayout>
        </MainLayout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
