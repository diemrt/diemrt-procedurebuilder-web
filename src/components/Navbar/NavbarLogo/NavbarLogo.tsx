import { Link } from 'react-router-dom'
import FullLogoGray from '../../common/FullLogoGray'
import LogoGray from '../../common/LogoGray'

const NavbarLogo = () => {
  return (
    <>
    <div className="hidden md:block">
              <Link
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                to="/"
              >
                <div className="p-3">
                  <FullLogoGray width="160" height="30" />
                </div>
              </Link>
            </div>
            <div className="md:hidden">
              <Link
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                to="/"
              >
                <div className="p-1">
                  <LogoGray width="24" height="24" />
                </div>
              </Link>
            </div>
    </>
  )
}

export default NavbarLogo