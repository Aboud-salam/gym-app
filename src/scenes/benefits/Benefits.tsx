import { benefits } from "@/constants";
import BenefitCard from "./BenefitCard";
import SectionHeader from "@/shared/components/SectionHeader";
import CTA from "../cta";
type Props = {
  addRef: (el: HTMLElement) => void;
};
const Benefits = ({ addRef }: Props) => {
  return (
    <section ref={addRef} id="benefits" className=" custom-container">
      <div className="section-padding pb-0">
        <SectionHeader
          paragraph={`   We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.`}
        >
          more than just a gym.
        </SectionHeader>
        <div className="flex mt-8 gap-6 lg:flex-nowrap flex-wrap justify-center items-center">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} obj={benefit} />
          ))}
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default Benefits;
