import Label from "../Label/Label";
import { TextareaStyled } from "./Textarea.styles";

export interface ITextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  width?: number;
  label?: string;
  placeholder?: string;
}

export default function Textarea({ label, ...props }: ITextareaProps) {
  return (
    <Label width={props.width}>
      {!!label && <div>{label}</div>}
      <TextareaStyled {...props} />
    </Label>
  );
}
