import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "theme";
import { MAIN_TEXT_COLOR } from "variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const GlobalStyles = createGlobalStyle`
  a {
    color: ${MAIN_TEXT_COLOR.default};

    &:hover {
      text-decoration: none;
    }
  }
`;

export default function AppRoot() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
