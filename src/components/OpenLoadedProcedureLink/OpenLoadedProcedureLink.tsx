import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ShowWhen from "../ShowWhen/ShowWhen";

const OpenLoadedProcedureLink = () => {
  const isProcedureLoaded = localStorage.getItem("procedureLoaded") !== null;

  return (
    <ShowWhen condition={isProcedureLoaded}>
      <div className="hidden md:flex absolute top-14 inset-x-0 justify-center mb-4">
        <Link
          className="inline-flex items-center gap-x-2 bg-white border-2 border-gray-300 text-sm text-blue-500 p-1 ps-3 rounded-full transition hover:border-blue-400 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
          to="/procedure/render"
        >
          Apri l'ultima procedura
          <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-blue-500 font-semibold text-sm text-white dark:bg-neutral-700 dark:text-neutral-400">
            <ChevronRightIcon className="size-4" />
          </span>
        </Link>
      </div>
    </ShowWhen>
  );
};

export default OpenLoadedProcedureLink;
