import Htext from "@/shared/components/Htext";
import benefitGraph from "@/assets/BenefitsPageGraphic.webp";
import ActionButton from "@/shared/components/ActionButton";
const CTA = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center section-padding custom-container gap-8">
      <div className="">
        <img src={benefitGraph} alt="" />
      </div>
      <div
        className="lg:w-3/5 text-center lg:text-left relative md:before:content-abstractwaves before:absolute before:-left-[50px] before:-top-[80px]
        md:after:content-sparkles after:absolute after:object-contain after:-bottom-[80px] after:right-20"
      >
        <Htext>
          MILLIONS OF HAPPY MEMBERS GETTING{" "}
          <span className="text-primary-500">FIT</span>.
        </Htext>{" "}
        <p className="py-3">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>
        <p className="pb-6">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
        <ActionButton style="block w-fit lg:mx-0 mx-auto">Join Us</ActionButton>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
