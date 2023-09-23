import { motion } from "framer-motion";
import Htext from "./Htext";
import Ptext from "./Ptext";

type Props = {
  children: string | React.ReactNode;
  paragraph: string;
};

const SectionHeader = ({ children, paragraph }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="lg:w-3/5 text-center lg:text-left"
    >
      <Htext>{children}</Htext>
      <Ptext>{paragraph}</Ptext>
    </motion.div>
  );
};

export default SectionHeader;
