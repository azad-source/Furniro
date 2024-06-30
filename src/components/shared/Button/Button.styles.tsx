import styled from "styled-components";
import { IButtonProps } from "./Button";
import { SERVICE_COLOR } from "variables";
import { getFieldHeight } from "theme";

export const StyledButton = styled.button<IButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : undefined)};
  height: ${({ btnSize }) => getFieldHeight(btnSize)};
  border: unset;
  box-sizing: border-box;
  padding: 0 20px;
  font-weight: 600;
  background-color: ${({ use }) =>
    use === "primary" ? SERVICE_COLOR.default : "transparent"};
  border: ${({ use }) =>
    use === "primary" ? "none" : `1px solid ${SERVICE_COLOR.default}`};
  cursor: pointer;
  color: ${({ use }) => (use !== "primary" ? SERVICE_COLOR.default : "#fff")};
  &:hover {
    color: #fff;
    background-color: ${({ use }) =>
      use !== "primary" ? SERVICE_COLOR.default : SERVICE_COLOR.hover};
  }
  &:active {
    color: #fff;
    background-color: ${SERVICE_COLOR.active};
  }
`;
