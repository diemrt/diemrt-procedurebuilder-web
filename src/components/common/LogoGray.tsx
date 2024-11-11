interface Props {
  width?: string,
  height?: string,
}
const LogoGray = ({
  height = "165",
  width = "165",
  }:Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 165 165"
  >
    <path
      fill="#171717"
      fillRule="evenodd"
      d="m109.716 82.287-27.43-27.43-27.428 27.43 27.429 27.429zM82.286 0 0 82.287l82.287 82.287 82.287-82.287z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default LogoGray;
