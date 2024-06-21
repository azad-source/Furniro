import { StyledLink } from "./Link.styles";

type LinkSizeType = "xs" | "s" | "m" | "l" | "xl";
type LinkUseType = "primary" | "icon";

export interface ILinkProps extends React.HTMLProps<HTMLAnchorElement> {
  linkSize?: LinkSizeType;
  use?: LinkUseType;
}

export const Link: React.FC<ILinkProps> = ({
  linkSize = "m",
  use = "primary",
  ...props
}) => {
  return <StyledLink {...props} linkSize={linkSize} use={use} />;
};
