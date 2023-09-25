import Htext from "./Htext";
import Ptext from "./Ptext";

type Props = {
  children: string | React.ReactNode;
  paragraph: string;
};

const SectionHeader = ({ children, paragraph }: Props) => {
  return (
    <div className="lg:w-3/5 text-center lg:text-left">
      <Htext>{children}</Htext>
      <Ptext>{paragraph}</Ptext>
    </div>
  );
};

export default SectionHeader;
