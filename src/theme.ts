/**
 * Font Weight List
 * 800 - Extrabold
 * 700 - Bold
 * 600 - Semibold
 * 500 - Medium
 * 400 - Regular
 * 300 - Light
 * 200 - Extralight
 * 100 - Thin
 * */

import { SECONDARY_TEXT_COLOR } from "variables";

const theme = {
  /** Title Large */
  titleLargeFontSize: "48px",
  titleLargeLineHeight: 1.5,
  /** Title Medium */
  titleMediumFontSize: "42px",
  titleMediumLineHeight: 1.5,
  /** Title Small */
  titleSmallFontSize: "36px",
  titleSmallLineHeight: 1.5,
  /** Title Extra Small */
  titleExtraSmallFontSize: "30px",
  titleExtraSmallLineHeight: 1.5,
  /** Text Extra Large */
  textExtraLargeFontSize: "24px",
  textExtraLargeLineHeight: 1.2,
  /** Text Large */
  textLargeFontSize: "20px",
  textLargeLineHeight: 1.5,
  /** Text Medium */
  textMediumFontSize: "16px",
  textMediumLineHeight: 1.5,
  /** Text Extra Small */
  textExtraSmallFontSize: "13px",
  textExtraSmallLineHeight: 1.5,

  /** Font Weight */
  fontWeightExtraBold: 800,
  fontWeightBold: 700,
  fontWeightSemiBold: 600,
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  fontWeightLight: 300,
  fontWeightExtraLight: 200,
  fontWeightThin: 100,

  /** Form Field */
  formFieldHeight: "75px",
  formFieldTextareaHeight: "120px",
  formFieldHorizontalPadding: "25px",
  formFieldVerticalPadding: "25px",
  formFieldBorderRadius: "10px",
  formFieldBorderColor: SECONDARY_TEXT_COLOR.default,
  formFieldBorderWidth: "1px",
  formFieldFontWeight: 400,
  formFieldMinWidth: "200px",
};

export default theme;

export type FieldSizeType = "xs" | "s" | "m" | "l" | "xl";

export function getFieldHeight(size?: FieldSizeType) {
  switch (size) {
    case "xl":
      return "74px";
    case "l":
      return "64px";
    case "m":
    default:
      return "48px";
    case "s":
      return "30px";
    case "xs":
      return "24px";
  }
}
