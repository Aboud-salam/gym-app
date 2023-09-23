type Props = {
  children: string;
  href: string;
};

const LearnMore = ({ href, children }: Props) => {
  return (
    <a
      href={"#" + href}
      className="text-primary-500 hover:text-gray-500 underline transition-all ml-5"
    >
      {children}
    </a>
  );
};

export default LearnMore;
