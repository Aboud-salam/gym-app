import { LinkContext } from "@/App";
import { selectedPage } from "@/shared/types/types";
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const navContext = createContext<LinkContext>({} as LinkContext);

type Props = {
  children: React.ReactNode;
};

const NavProvider = ({ children }: Props) => {
  const [selectedLink, setLink] = useState<selectedPage | string>(
    selectedPage.Home
  );
  return (
    <navContext.Provider value={{ selectedLink, setLink }}>
      {children}
    </navContext.Provider>
  );
};
export default NavProvider;
