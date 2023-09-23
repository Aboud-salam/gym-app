import { selectedPage } from "../types/types";
import { Dispatch, RefObject, SetStateAction, useContext } from "react";
import { navContext } from "@/contexts/navLinks-context";
const useOnScroll = (
  refs: RefObject<HTMLElement[]>,
  setOnTop: Dispatch<SetStateAction<boolean>>
) => {
  const { setLink } = useContext(navContext);
  const handleNavOnScroll = () => {
    if (window.scrollY === 0) {
      setOnTop(true);
      setLink(selectedPage.Home);
    } else {
      setOnTop(false);
      setLink(selectedPage.none);
    }
  };
  const handleSectionsScroll = () => {
    if (refs.current) {
      refs.current.map((ref) => {
        if (ref !== null) {
          const height = ref.offsetHeight;
          const offsetTop = ref.offsetTop - 200;
          if (scrollY > offsetTop && scrollY < offsetTop + height)
            setLink(ref.id);
        }
      });
    }
  };
  const handleScroll = () => {
    handleNavOnScroll();
    handleSectionsScroll();
  };
  return { handleNavOnScroll, handleSectionsScroll, handleScroll };
};

export default useOnScroll;
