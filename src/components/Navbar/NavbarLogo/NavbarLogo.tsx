import { Link } from "react-router-dom";
import FullLogoGray from "../../common/FullLogoGray";
import LogoGray from "../../common/LogoGray";

interface Props {
  isMinimal: boolean;
}
const NavbarLogo = ({ isMinimal }: Props) => {
  return (
    <Link
      className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
      to="/"
    >
      <div className="md:p-3">
        {isMinimal ? <LogoGray height="24" width="24" /> : <FullLogoGray width="160" height="30" />}
      </div>
    </Link>
  );
};

export default NavbarLogo;
