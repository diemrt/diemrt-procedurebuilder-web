import { Link } from "react-router-dom";
import FullLogoGray from "../../components/common/FullLogoGray";
import PrimaryLink from "../../components/PrimaryLink/PrimaryLink";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

const NotFoundPage = () => {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full pt-10">
      {/* ========== HEADER ========== */}
      <header className="mb-auto flex justify-center z-50 w-full py-4">
        <nav className="px-4 sm:px-6 lg:px-8">
          <Link
            className="flex-none text-xl font-semibold sm:text-3xl"
            to="/"
          >
            <FullLogoGray width="200" height="40" />
          </Link>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
            404
          </h1>
          <p className="mt-3 text-gray-600">Oops, qualcosa è andato storto</p>
          <p className="text-gray-600">Siamo spiacenti, non è stato possibile trovare la pagina.</p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <PrimaryLink text="Torna alla Home" to="/" iconBefore={<ChevronLeftIcon className="size-4 shrink-0" />} />
          </div>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© All Rights Reserved. {new Date().getFullYear()}</p>        
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
};

export default NotFoundPage;
