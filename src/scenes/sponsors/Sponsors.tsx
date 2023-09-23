import { sponsors } from "@/constants";
const Sponsors = () => {
  return (
    <div className="flex justify-between bg-primary-300 items-center py-6 px-4">
      {sponsors.map((sponsor) => (
        <div key={sponsor.id}>
          <img src={sponsor.img} alt="sponsor" />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
