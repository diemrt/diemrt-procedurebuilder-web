import { Link } from "react-router-dom";

interface Props {
  text: string;
  to: string;
}
const BackToLink = ({ text, to }: Props) => {
  return (
    <Link
      className="inline-flex items-center gap-x-1 py-4 text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
      to={to}
    >
      <svg
        className="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      {text}
    </Link>
  );
};

export default BackToLink;
