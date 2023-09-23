import LearnMore from "@/shared/components/LearnMore";
type BenefitCardType = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};
type Props = {
  obj: BenefitCardType;
};

const BenefitCard = ({ obj }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 border-gray-500 md:w-[48%] border-[2px] p-5 py-10 rounded-md border-solid">
      <div className="bg-primary-100 rounded-full w-fit p-4 border-gray-500 border-[1px]">
        {obj.icon}
      </div>
      <h3 className="text-xl font-semibold">{obj.title}</h3>
      <p>{obj.description}</p>
      <LearnMore href="">Learn More</LearnMore>
    </div>
  );
};

export default BenefitCard;
