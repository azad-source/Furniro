import styled from "styled-components";
import { ILabelProps } from "./Label";

export const LabelStyled = styled.label<ILabelProps>`
  display: block;
  width: ${({ width, theme }) =>
    width ? `${width}px` : theme.formFieldMinWidth};
  position: relative;

  .label {
    margin-bottom: 22px;
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 500;
  }

  .rightIcon {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-35%);
    /* z-index: -1; */
  }
`;
