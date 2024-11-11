import { useState } from "react";
import { ProcedureStepType } from "../../../types/procedureTypes";
import PrimaryActionButton from "../../PrimaryActionButton/PrimaryActionButton";
import { CheckIcon } from "@heroicons/react/16/solid";
import ShowWhen from "../../ShowWhen/ShowWhen";

interface Props {
  steps: ProcedureStepType[];
}
const ProcedureStepsWizard = ({ steps }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isThereAnyNextStep = currentStep < steps.length - 1;
  const nextStep = () => {
    if (isThereAnyNextStep) setCurrentStep(currentStep + 1);
  };

  const { image, description, name } = steps[currentStep];

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src={image} />
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-blue-500 text-xs font-extrabold uppercase">
                  Passo {currentStep + 1}
                </h3>
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  {name}
                </h2>
                <p className="text-gray-500">{description}</p>
              </div>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
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
                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Easy &amp; fast</span>{" "}
                      designing
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
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
                    <span className="text-sm sm:text-base text-gray-500">
                      Powerful <span className="font-bold">features</span>
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
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
                    <span className="text-sm sm:text-base text-gray-500">
                      User Experience Design
                    </span>
                  </div>
                </li>
              </ul>
              <ShowWhen condition={isThereAnyNextStep}>
                <PrimaryActionButton
                  text="Prossimo passo"
                  onClick={nextStep}
                  iconAfter={<CheckIcon className="size-4 shrink-0" />}
                />
              </ShowWhen>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcedureStepsWizard;
