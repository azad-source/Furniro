import styled from "styled-components";
import { IInputProps } from "./Input";

export const InputStyled = styled.input<IInputProps>`
  width: 100%;
  height: ${({ theme }) => theme.formFieldHeight};
  box-sizing: border-box;
  border-style: solid;
  border-color: ${({ theme }) => theme.formFieldBorderColor};
  border-width: ${({ theme }) => theme.formFieldBorderWidth};
  border-radius: ${({ theme }) => theme.formFieldBorderRadius};
  padding: 0 ${({ theme }) => theme.formFieldHorizontalPadding};
  font-size: ${({ theme }) => theme.textMediumFontSize};
  line-height: ${({ theme }) => theme.textMediumLineHeight};
  font-weight: ${({ theme }) => theme.formFieldFontWeight};
`;
