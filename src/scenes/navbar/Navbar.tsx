import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import ActionButton from "@/shared/components/ActionButton";
import { RefObject, useEffect, useState } from "react";
import useOnScroll from "@/shared/hooks/useOnScroll";
type Props = {
  refs: RefObject<HTMLElement[]>;
};
type SignInProp = {
  flexBetween?: string;
  styles: string;
};
const SignIn = ({ flexBetween, styles }: SignInProp) => {
  return (
    <div className={`${flexBetween} ${styles}`}>
      <p>Sign In</p>
      <ActionButton>Become a member</ActionButton>
    </div>
  );
};
const Navbar = ({ refs }: Props) => {
  const [onTop, setOnTop] = useState(true);
  const [isToggled, setToggled] = useState(false);
  const [signToggled, setSignToggle] = useState(false);
  const { handleNavOnScroll } = useOnScroll(refs, setOnTop);
  useEffect(() => {
    window.addEventListener("scroll", handleNavOnScroll);
    return () => window.removeEventListener("scroll", handleNavOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const flexBetween = "flex items-center justify-between";
  const navBackground = onTop ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`w-full px-4 fixed top-0 z-30 py-6 transition-all duration-150 ${navBackground}`}
      >
        <div className={`${flexBetween} mx-auto`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            <div className={`md:items-center md:gap-12 gap-4 md:flex hidden`}>
              <div className={`${flexBetween} gap-6`}>
                <Link>Home</Link>
                <Link>Benefits</Link>
                <Link>Our Classes</Link>
                <Link>Contact Us</Link>
              </div>
              <SignIn
                styles="gap-4 lg:gap-6 lg:flex hidden"
                flexBetween={flexBetween}
              />
              <div
                className={`lg:hidden rounded-full  relative transition-all ${
                  signToggled ? "bg-secondary-400" : "bg-secondary-500"
                }`}
                onClick={() => setSignToggle(!signToggled)}
              >
                <UserIcon className="text-gray-500 h-6 w-12 cursor-pointer p-[2px]" />
                <div
                  className={`bg-white rounded-md absolute select-none top-[120%] -left-[15px] overflow-hidden transition-all cursor-pointer ${
                    signToggled ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="hover:bg-primary-300 hover:text-white transition-all px-2 ">
                    Sign In
                  </p>
                  <p className="hover:bg-primary-300 hover:text-white transition-all px-2">
                    Register
                  </p>
                </div>
              </div>
            </div>

            <div className={`${flexBetween} block md:hidden`}>
              <button
                onClick={() => setToggled(true)}
                className={`bg-secondary-500 rounded-full p-2`}
              >
                <Bars3Icon className="text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`bg-primary-100 w-[200px] h-[100vh] transition-all duration-300 md:hidden drop-shadow-xl fixed top-0 z-40 ${
            isToggled ? "right-0" : "-right-[200px]"
          } `}
        >
          <XMarkIcon
            onClick={() => setToggled(false)}
            className="text-gray-400 hover:text-white transition duration-300 w-6 h-6 ml-auto mt-4 mr-4 cursor-pointer"
          />
          <div className="flex flex-col ">
            <div className={`flex ml-8 flex-col gap-4 pt-12 text-xl`}>
              <Link>Home</Link>
              <Link>Benefits</Link>
              <Link>Our Classes</Link>
              <Link>Contact Us</Link>
            </div>
            <SignIn
              styles="gap-4 lg:gap-6 lg:hidden flex flex-col-reverse mt-12"
              flexBetween={flexBetween}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
