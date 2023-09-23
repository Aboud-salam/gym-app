type Props = {
  children: string;
  style?: string;
};
const Ptext = ({ children }: Props) => {
  return <p className={`mb-5 px-1 capitalize`}>{children}</p>;
};

export default Ptext;
