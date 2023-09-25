import { classesImgs } from "@/constants";
import SectionHeader from "@/shared/components/SectionHeader";
import ActionButton from "@/shared/components/ActionButton";
type Props = {
  addRef: (el: HTMLElement) => void;
};
const OurClasses = ({ addRef }: Props) => {
  return (
    <section ref={addRef} id="ourclasses" className="bg-primary-100">
      <div className="custom-container section-padding">
        <SectionHeader
          paragraph="Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc."
        >
          our classes
        </SectionHeader>
        <div className="flex gap-3 overflow-auto p-5">
          {classesImgs.map((img) => (
            <div
              key={img.name}
              className={`min-w-[300px] transition-all relative`}
            >
              <div
                className=" opacity-0 cursor-pointer hover:opacity-80 transition-all duration-500 w-[100%] h-[100%] text-center flex 
              items-center justify-center flex-col gap-1 absolute bg-primary-500 text-white p-5 rounded-md"
              >
                <h2 className="font-semibold text-1xl text-white">
                  {img.name}
                </h2>
                <p className="text-[11px]">{img.description}</p>
              </div>
              <img
                alt={img.name}
                src={img.imageSmall}
                className="rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="my-10">
          <SectionHeader paragraph="with A Fully dedicated coach to help you achieve your fitness goals">
            for <span className="text-primary-500">private</span> sessions
          </SectionHeader>
          <ActionButton>Contact Us</ActionButton>
        </div>
      </div>
    </section>
  );
};

export default OurClasses;
