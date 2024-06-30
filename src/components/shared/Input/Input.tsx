import { FieldSizeType } from "theme";
import Label from "../Label/Label";
import { InputStyled } from "./Input.styles";

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  width?: number;
  label?: string;
  placeholder?: string;
  size?: FieldSizeType;
  rightIcon?: React.ReactNode;
}

export default function Input({ label, rightIcon, ...props }: IInputProps) {
  return (
    <Label width={props.width}>
      {!!label && <div>{label}</div>}
      <InputStyled {...props} />
      {!!rightIcon && <div className="rightIcon">{rightIcon}</div>}
    </Label>
  );
}
