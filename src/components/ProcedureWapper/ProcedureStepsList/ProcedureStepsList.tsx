import { CheckIcon } from "@heroicons/react/24/outline";
import PrimaryLink from "../../PrimaryLink/PrimaryLink";

const ProcedureStepsList = () => {
  return (
    <div className="mt-10">
      <div className="mb-4">
        <h3 className="text-blue-500 text-xs font-bold uppercase">Steps</h3>
      </div>
      <div className="flex gap-x-5 ms-1">
        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-blue-400">
          <div className="relative z-10 size-8 flex justify-center items-center">
            <span className="flex shrink-0 justify-center items-center size-8 border border-blue-400 text-white bg-blue-500 font-bold text-xs uppercase rounded-full">
              1
            </span>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8 sm:pb-12">
          <p className="text-sm lg:text-base text-gray-600 flex flex-col">
            <span className="text-gray-900">Market Research and Analysis:</span>
            Identify your target audience and understand their needs,
            preferences, and behaviors.
          </p>
        </div>
      </div>
      <PrimaryLink
        text="Completato"
        to="/"
        className="bg-green-500 disabled:bg-gray-400"
        iconAfter={<CheckIcon className="size-4 shrink-0" />}
      />
    </div>
  );
};

export default ProcedureStepsList;
