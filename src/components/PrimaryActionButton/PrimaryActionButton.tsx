import ShowWhen from "../ShowWhen/ShowWhen";

interface Props {
  text: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
const PrimaryActionButton = ({ text, iconAfter, iconBefore, onClick, disabled, className }: Props) => {
  return (
    <button
      className={`inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 disabled:shadow-none py-3 px-6 ${className ? className : "bg-blue-500"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <ShowWhen condition={typeof iconBefore !== "undefined"}>
        {iconBefore}
      </ShowWhen>
      {text}
      <ShowWhen condition={typeof iconAfter !== "undefined"}>
        {iconAfter}
      </ShowWhen>
    </button>
  );
};

export default PrimaryActionButton;
