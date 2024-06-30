import styled from "styled-components";
import { IInputProps } from "./Input";
import { getFieldHeight } from "theme";

export const InputStyled = styled.input<IInputProps>`
  width: 100%;
  height: ${({ size }) => getFieldHeight(size)};
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
