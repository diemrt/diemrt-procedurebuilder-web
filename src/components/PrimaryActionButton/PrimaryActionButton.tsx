import ShowWhen from "../ShowWhen/ShowWhen";

interface Props {
  text: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
const PrimaryActionButton = ({ text, iconAfter, iconBefore, onClick, disabled }: Props) => {
  return (
    <button
      className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-blue-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
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
