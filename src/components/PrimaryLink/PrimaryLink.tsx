import { Link } from "react-router-dom";
import ShowWhen from "../ShowWhen/ShowWhen";
import PrimaryActionButton from "../PrimaryActionButton/PrimaryActionButton";

interface Props {
  text: string;
  to: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
const PrimaryLink = ({
  text,
  to,
  iconAfter,
  iconBefore,
  className,
  disabled,
}: Props) => {
  if (!disabled) {
    return (
      <Link
        className={`inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 disabled:shadow-none py-3 px-6 ${
          className ? className : "bg-gray-500 disabled:bg-blue-300"
        }`}
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
  } else {
    return (
      <PrimaryActionButton
        text={text}
        className={className}
        disabled={disabled}
      />
    );
  }
};

export default PrimaryLink;
