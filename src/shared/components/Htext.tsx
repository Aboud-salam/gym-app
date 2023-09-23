type Props = {
  children: string | React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <h1 className="uppercase font-montserrat font-bold md:text-[40px] text-[25px]">
      {children}
    </h1>
  );
};

export default Htext;
