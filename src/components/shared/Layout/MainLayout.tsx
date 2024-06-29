import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
import styled, { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "globalStyles";
import ScrollToTop from "helpers/ScrollToTop";
import { useAppStore } from "store";
import MiniBasket from "components/basket/MiniBasket";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
`;

interface IProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
  const { showMiniBasket } = useAppStore();

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyles />
      <Wrapper>
        <Header />
        {children}
        <Footer />
        {showMiniBasket && <MiniBasket />}
      </Wrapper>
    </ThemeProvider>
  );
}
