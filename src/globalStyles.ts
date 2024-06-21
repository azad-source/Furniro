import { createGlobalStyle } from "styled-components";
import { MAIN_TEXT_COLOR, SECONDARY_TEXT_COLOR } from "variables";

export const GlobalStylesForModal = createGlobalStyle`
  html, body { overflow: hidden}
`;

const GlobalStyles = createGlobalStyle`
  a {
    color: ${MAIN_TEXT_COLOR.default};

    &:hover {
      text-decoration: none;
    }
  }

  * {
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid ${SECONDARY_TEXT_COLOR.default};
    }
  }
`;

export default GlobalStyles;
