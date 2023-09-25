import HomeGraphic from "@/assets/HomePageGraphic.webp";
import HomeText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/components/ActionButton";
import LearnMore from "@/shared/components/LearnMore";
import { selectedPage } from "@/shared/types/types";
import Sponsors from "../sponsors";
type Props = {
  addRef: (el: HTMLElement) => void;
};
const Home = ({ addRef }: Props) => {
  return (
    <section ref={addRef} id="home" className="pt-[88px]">
      <div className="custom-container lg:flex-row flex flex-col items-center mt-20 lg:mt-0 lg:gap-16 gap-8">
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="heading-img relative lg:before:content-evolvetext before:absolute before:-top-[70px] before:-z-[1] z-10 before:-left-[120px]">
            <img
              src={HomeText}
              alt="home-page-heading"
              className="mx-auto lg:mx-0"
            />
          </div>
          <p className="my-5 px-1">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          <div>
            <ActionButton>Join Now</ActionButton>
            <LearnMore href={selectedPage.ContactUs}>Learn More</LearnMore>
          </div>
        </div>
        <div className="relative z-20">
          <img src={HomeGraphic} alt="home-page-graphic" />
        </div>
      </div>
      <Sponsors />
    </section>
  );
};

export default Home;
