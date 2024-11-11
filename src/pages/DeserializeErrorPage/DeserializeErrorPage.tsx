import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import PrimaryLink from "../../components/PrimaryLink/PrimaryLink";

const DeserializeErrorPage = () => {
  return (
    <div className="pt-20">
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
            Error?#@
          </h1>
          <p className="mt-3 text-gray-600">
          Purtroppo non è stato possibile recuperare le informazioni relative a questa procedura.</p>
          <p className="text-gray-600">
            Sembra che le informazioni fornite siano errate o corrotte. Si prega di controllare il link e riprovare.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <PrimaryLink
              text="Torna alla Home"
              to="/"
              iconBefore={<ChevronLeftIcon className="size-4 shrink-0" />}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeserializeErrorPage;
