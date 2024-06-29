import styled from "styled-components";
import { ILabelProps } from "./Label";

export const LabelStyled = styled.label<ILabelProps>`
  display: block;
  width: ${({ width, theme }) =>
    width ? `${width}px` : theme.formFieldMinWidth};
  position: relative;

  > :first-child {
    margin-bottom: 22px;
    font-size: ${({ theme }) => theme.textMediumFontSize};
    line-height: ${({ theme }) => theme.textMediumLineHeight};
    font-weight: 500;
  }
`;
