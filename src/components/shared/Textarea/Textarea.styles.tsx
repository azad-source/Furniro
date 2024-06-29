import styled from "styled-components";
import { ITextareaProps } from "./Textarea";

export const TextareaStyled = styled.textarea<ITextareaProps>`
  width: 100%;
  height: ${({ theme }) => theme.formFieldTextareaHeight};
  box-sizing: border-box;
  border-style: solid;
  border-color: ${({ theme }) => theme.formFieldBorderColor};
  border-width: ${({ theme }) => theme.formFieldBorderWidth};
  border-radius: ${({ theme }) => theme.formFieldBorderRadius};
  padding: ${({ theme }) =>
    `${theme.formFieldVerticalPadding} ${theme.formFieldHorizontalPadding}`};
  font-size: ${({ theme }) => theme.textMediumFontSize};
  line-height: ${({ theme }) => theme.textMediumLineHeight};
  font-weight: ${({ theme }) => theme.formFieldFontWeight};
  resize: none;
`;
