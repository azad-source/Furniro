import styled from "styled-components";
import { ISelectProps } from "./Select";
import { FIELD_ERROR_HEIGHT, TEXT_ERROR_COLOR } from "variables";
import { getFieldHeight } from "theme";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectStyled = styled.select<ISelectProps>`
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
  box-sizing: border-box;
  background-color: transparent;
  margin: 0;
  outline: none;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const OptionStyled = styled.option``;

export const ArrowDownStyled = styled.div`
  display: inline-block;
  position: absolute;
  right: ${({ theme }) => theme.formFieldHorizontalPadding};
  top: 50%;
  transform: translateY(-30%);
  z-index: -1;
`;

export const ErrorStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  color: ${TEXT_ERROR_COLOR};
  width: min-content;
  min-height: ${FIELD_ERROR_HEIGHT};
  padding: 4px 0;
  font-size: ${({ theme }) => theme.textExtraSmallFontSize};
  line-height: ${({ theme }) => theme.textExtraSmallLineHeight};
  font-weight: 400;
`;
