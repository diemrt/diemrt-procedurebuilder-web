import { Link } from "react-router-dom";
import ShowWhen from "../ShowWhen/ShowWhen";

interface Props {
  text: string;
  to: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
}
const PrimaryLink = ({ text, to, iconAfter, iconBefore }: Props) => {
  return (
    <Link
      className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-blue-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
      to={to}
    >
      <ShowWhen condition={typeof iconBefore !== "undefined"}>
        {iconBefore}
      </ShowWhen>
      {text}
      <ShowWhen condition={typeof iconAfter !== "undefined"}>
        {iconAfter}
      </ShowWhen>
    </Link>
  );
};

export default PrimaryLink;
