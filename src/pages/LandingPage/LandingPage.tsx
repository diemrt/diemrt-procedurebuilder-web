import DefaultWrapper from "../../components/DefaultWrapper/DefaultWrapper";
import Hero1 from "../../assets/hero1.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import Faq from "../../components/common/Faq";
import LandingInputDropzone from "../../components/forms/LandingInputDropzone/LandingInputDropzone";
import OpenLoadedProcedureLink from "../../components/OpenLoadedProcedureLink/OpenLoadedProcedureLink";
import { Link } from "react-router-dom";
import { DocumentIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";

const LandingPage = () => {
  return (
    <DefaultWrapper>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-6 md:space-y-8 ">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Costruisci, condividi, segui: semplifica ogni processo!
          </h1>
        </div>
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-black/70">
            <span className="opacity-90 font-bold">procedure builder</span> è
            l'app che ti permette di creare, visualizzare e condividere
            istruzioni passo-passo per ogni tipo di attività.
          </p>
        </div>
        <OpenLoadedProcedureLink />
        <div className="w-full flex justify-center">
          <Link className="flex items-center justify-center gap-x-3 max-w-sm w-full h-14 px-4 text-center bg-gradient-to-tl bg-blue-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50" to="/procedure/editor">
            <DocumentPlusIcon className="size-6" />
            <span>Crea una nuova procedura</span>
          </Link>
        </div>
        <div className="max-w-3xl text-center mx-auto flex items-center text-xs text-gray-500 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Oppure
        </div>
        <LandingInputDropzone />
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
                      accessibili ovunque. Carica un file con le istruzioni
                      della procedura, oppure crearne una da zero con il nostro
                      editor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <Faq />
        <div className="text-center">
          <Link
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-blue-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
            to="/procedure/editor"
          >
            Crea una procedura
            <DocumentIcon className="size-4" />
          </Link>
        </div>
      </div>
    </DefaultWrapper>
  );
};

export default LandingPage;
