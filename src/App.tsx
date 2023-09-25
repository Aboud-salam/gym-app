import "./styles.css";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { selectedPage } from "./shared/types/types";
import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("@/scenes/navbar"));
const Home = React.lazy(() => import("@/scenes/home"));
const Benefits = React.lazy(() => import("@/scenes/benefits"));
const OurClasses = React.lazy(() => import("@/scenes/ourclasses"));
const ContactUs = React.lazy(() => import("@/scenes/contactus"));
const Footer = React.lazy(() => import("@/scenes/footer"));
export type LinkContext = {
  selectedLink: selectedPage | string;
  setLink: Dispatch<SetStateAction<selectedPage | string>>;
};
function App() {
  const [onTop, setOnTop] = useState(true);
  const refs = useRef<HTMLElement[]>([] as HTMLElement[]);
  console.log("re-rendered");
  const addRef = (el: HTMLElement) => {
    refs.current.push(el);
  };
  return (
    <div className="app bg-gray-20">
      <Suspense
        fallback={
          <div className="w-[30px] h-[30px] rounded-full border border-primary-500 border-l-0 animate-spin"></div>
        }
      >
        <Navbar refs={refs} onTop={onTop} setOnTop={setOnTop} />
        <Home addRef={addRef} onTop={onTop} />
        <Benefits addRef={addRef} />
        <OurClasses addRef={addRef} />
        <ContactUs addRef={addRef} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
