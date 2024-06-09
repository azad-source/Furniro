import { StyledButton } from "./Button.styles";

type ButtonSizeType = "xs" | "s" | "m" | "l" | "xl";
type ButtonUseType = "primary" | "transparent";

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  btnSize?: ButtonSizeType;
  use?: ButtonUseType;
}

export const Button: React.FC<IButtonProps> = ({
  btnSize = "m",
  use = "primary",
  ...props
}) => {
  return <StyledButton {...props} btnSize={btnSize} use={use} />;
};
