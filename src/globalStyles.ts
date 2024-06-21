import { createGlobalStyle } from "styled-components";
import { MAIN_TEXT_COLOR } from "variables";

const GlobalStyles = createGlobalStyle`
  a {
    color: ${MAIN_TEXT_COLOR.default};

    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
