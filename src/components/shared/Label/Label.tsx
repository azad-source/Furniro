import { LabelStyled } from "./Label.styles";

export interface ILabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string;
  width?: number;
}

export default function Label({ label, children, ...props }: ILabelProps) {
  return (
    <LabelStyled {...props}>
      {!!label && <div>{label}</div>}
      {children}
    </LabelStyled>
  );
}
