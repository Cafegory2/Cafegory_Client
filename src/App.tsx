import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styles/GlobalStyle";
import { Layout, MobileLayout } from "./styles/Layout.styles";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <MobileLayout>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/oauth" element={<RedirectPage />}></Route>
              </Routes>
            </BrowserRouter>
          </MobileLayout>
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
