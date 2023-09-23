import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPage } from "../types/types";
type Props = {
  children: string;
  style?: string;
};
const ActionButton = ({ children, style }: Props) => {
  return (
    <AnchorLink
      href={`#` + selectedPage.ContactUs}
      className={`rounded-md bg-secondary-500 hover:bg-primary-500 transition duration-300 md:px-10 px-3 py-2 hover:text-white ${style}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
