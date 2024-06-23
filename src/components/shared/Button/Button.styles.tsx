import styled from "styled-components";
import { IButtonProps } from "./Button";
import { SERVICE_COLOR } from "variables";

export const StyledButton = styled.button<IButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : undefined)};
  height: ${({ btnSize }) => getHeight(btnSize)};
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

function getHeight(size: IButtonProps["btnSize"]) {
  switch (size) {
    case "xl":
      return "74px";
    case "l":
      return "64px";
    case "m":
      return "48px";
    case "s":
      return "30px";
    case "xs":
      return "24px";
  }
}
