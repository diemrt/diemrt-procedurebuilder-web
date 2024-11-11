import NavbarLogo from "../Navbar/NavbarLogo/NavbarLogo";

const MinimalNavbar = () => {
  return (
    <>
      <header className="fixed top-0 inset-x-0 flex justify-center flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="px-4 md:px-0 flex justify-between items-center">
            <NavbarLogo />
          </div>
        </nav>
      </header>
    </>
  );
};

export default MinimalNavbar;
