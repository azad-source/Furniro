import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  gap?: number;
  grow?: boolean;
}

const Wrapper = styled.div<{ gap: number; vertical?: boolean; grow?: boolean }>`
  gap: ${({ gap }) => gap + "px"};
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  display: flex;

  > * {
    width: ${({ grow }) => (grow ? "100% !important" : undefined)};
  }
`;

export default function Gapped({ children, gap = 8, grow }: IProps) {
  return (
    <Wrapper gap={gap} grow={grow}>
      {children}
    </Wrapper>
  );
}
