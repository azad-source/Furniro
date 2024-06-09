export const SITE_NAME = "Furniro";

// Colors
export const SERVICE_COLOR = {
  default: "#b88e2f",
  hover: "#ab8428",
  active: "#a17c24",
};
export const MAIN_TEXT_COLOR = {
  default: "#3A3A3A",
  hover: "#111",
  active: "#000",
};
export const SECONDARY_TEXT_COLOR = {
  default: "#9F9F9F",
};
export const HEADER_BG_COLOR = "#fff";
export const FOOTER_BG_COLOR = HEADER_BG_COLOR;

// Sizes
export const BREAK_POINTS = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const HEADER_HEIGHT = "100px";
export const MIN_CONTENT_WIDTH = "1236px";
export const SIDE_PADDING = "20px";

export const device = {
  mobileS: `(min-width: ${BREAK_POINTS.mobileS})`,
  mobileM: `(min-width: ${BREAK_POINTS.mobileM})`,
  mobileL: `(min-width: ${BREAK_POINTS.mobileL})`,
  tablet: `(min-width: ${BREAK_POINTS.tablet})`,
  laptop: `(min-width: ${BREAK_POINTS.laptop})`,
  laptopL: `(min-width: ${BREAK_POINTS.laptopL})`,
  desktop: `(min-width: ${BREAK_POINTS.desktop})`,
  desktopL: `(min-width: ${BREAK_POINTS.desktop})`,
};
