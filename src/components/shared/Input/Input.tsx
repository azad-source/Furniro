import Label from "../Label/Label";
import { InputStyled } from "./Input.styles";

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  width?: number;
  label?: string;
  placeholder?: string;
}

export default function Input({ label, ...props }: IInputProps) {
  return (
    <Label width={props.width}>
      {!!label && <div>{label}</div>}
      <InputStyled {...props} />
    </Label>
  );
}
