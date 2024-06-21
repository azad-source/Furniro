import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import styled, { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "globalStyles";
import ScrollToTop from "helpers/ScrollToTop";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
`;

export default function AppRoot() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
