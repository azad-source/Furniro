import Label from "../Label/Label";
import {
  ArrowDownStyled,
  ErrorStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./Select.styles";
import ArrowDownIcon from "./arrow-down.svg?react";

export type OptionType = { value: string | number; label: string };

export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  width?: number;
  label?: string;
  items: OptionType[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export const SELECT_DISABLED = "disabled";

export default function Select(props: ISelectProps) {
  const label = props.label;
  const items = props.items;
  const width = props.width;

  const options: OptionType[] = [
    { value: SELECT_DISABLED, label: props.placeholder || "Select item" },
    ...items,
  ];

  return (
    <Label width={width}>
      {!!label && <div>{label}</div>}
      <SelectWrapper>
        <SelectStyled {...props} defaultValue={options[0].value}>
          {options.map(({ value, label }) => (
            <OptionStyled
              key={value}
              value={value}
              disabled={value === SELECT_DISABLED}
              className={value === SELECT_DISABLED ? "disabled" : undefined}
            >
              {label}
              {!!props.required && value === SELECT_DISABLED && <> *</>}
            </OptionStyled>
          ))}
        </SelectStyled>
        <ArrowDownStyled>
          <ArrowDownIcon />
        </ArrowDownStyled>
      </SelectWrapper>
      <ErrorStyled>{props.error}</ErrorStyled>
    </Label>
  );
}
