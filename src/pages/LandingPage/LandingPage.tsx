import DefaultWrapper from "../../components/DefaultWrapper/DefaultWrapper";
import Hero1 from "../../assets/hero1.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import Faq from "../../components/common/Faq";
import LandingInputDropzone from "../../components/forms/LandingInputDropzone/LandingInputDropzone";
import OpenLoadedProcedureLink from "../../components/OpenLoadedProcedureLink/OpenLoadedProcedureLink";

const LandingPage = () => {
  return (
    <DefaultWrapper>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Costruisci, condividi, segui: semplifica ogni processo!
          </h1>
        </div>
        <OpenLoadedProcedureLink />
        <LandingInputDropzone />
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-black/70">
            <span className="opacity-90 font-bold">procedure builder</span> è
            l'app che ti permette di creare, visualizzare e condividere
            istruzioni passo-passo per ogni tipo di attività.
          </p>
        </div>
        <>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                  <div className="col-span-4">
                    <img
                      className="rounded-xl"
                      src={Hero3}
                      alt="Features Image"
                    />
                  </div>
                  <div className="col-span-3">
                    <img
                      className="rounded-xl"
                      src={Hero2}
                      alt="Features Image"
                    />
                  </div>
                  <div className="col-span-5">
                    <img
                      className="rounded-xl"
                      src={Hero1}
                      alt="Features Image"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                      Uno strumento accessibile da qualsiasi dispositivo
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">
                      Crea infinite procedure, facili da modificare e
                      accessibili ovunque. Carica un file con le istruzioni della procedura, oppure crearne una da zero.
                      <span className="font-bold">
                        Nessun dato verrà salvato sui nostri server.
                      </span>
                    </p>
                  </div>
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
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
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          <span className="font-bold">Meno carta</span> e più
                          accessibilità
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
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
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          Infiniti utilizzi,{" "}
                          <span className="font-bold">nessun limite</span>
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="shrink-0 size-3.5"
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
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          Sicuro e trasparente
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
        <Faq />
        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-blue-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
            href="#"
          >
            Crea una procedura
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </DefaultWrapper>
  );
};

export default LandingPage;
