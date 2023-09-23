import AnchorLink from "react-anchor-link-smooth-scroll";
import { navContext } from "@/contexts/navLinks-context";
import { useContext } from "react";
import { selectedPage } from "@/shared/types/types";

type Props = {
  children: string;
};

const Link = ({ children }: Props) => {
  const { selectedLink, setLink } = useContext(navContext);
  const lowerCase = children
    .toLocaleLowerCase()
    .replace(/ /g, "") as selectedPage;
  return (
    <AnchorLink
      onClick={() => setLink(lowerCase)}
      href={`#${lowerCase}`}
      className={`${
        selectedLink === lowerCase ? "text-primary-500" : ""
      } transition duration-300 hover:text-primary-300`}
    >
      {children}
    </AnchorLink>
  );
};

export default Link;
