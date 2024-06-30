import { FieldSizeType } from "theme";
import { StyledButton } from "./Button.styles";

type ButtonUseType = "primary" | "transparent";

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  btnSize?: FieldSizeType;
  use?: ButtonUseType;
}

export const Button: React.FC<IButtonProps> = ({
  btnSize = "m",
  use = "primary",
  ...props
}) => {
  return <StyledButton {...props} btnSize={btnSize} use={use} />;
};
