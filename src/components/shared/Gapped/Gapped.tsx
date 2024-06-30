import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  gap?: number;
  grow?: boolean;
  vertical?: boolean;
  spaceBetween?: boolean;
  width?: string;
  className?: string;
}

const Wrapper = styled.div<IProps>`
  gap: ${({ gap }) => (gap || 8) + "px"};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? "space-between" : undefined};
  display: flex;
  width: ${({ width }) => (width ? width : undefined)};

  > * {
    width: ${({ grow }) => (grow ? "100% !important" : undefined)};
  }
`;

export default function Gapped(props: IProps) {
  return <Wrapper {...props} />;
}
