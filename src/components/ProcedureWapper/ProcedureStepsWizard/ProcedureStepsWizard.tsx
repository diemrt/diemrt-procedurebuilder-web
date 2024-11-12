import { useState } from "react";
import { ProcedureStepType } from "../../../types/procedureTypes";
import PrimaryActionButton from "../../PrimaryActionButton/PrimaryActionButton";
import { CheckIcon } from "@heroicons/react/16/solid";
import ShowWhen from "../../ShowWhen/ShowWhen";
import GrayTone from "../../../assets/gray_tone.jpg";
import NextStepButton from "../NextStepButton/NextStepButton";

interface Props {
  steps: ProcedureStepType[];
}
const ProcedureStepsWizard = ({ steps }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isThereAnyNextStep = currentStep < steps.length - 1;
  const nextStep = () => {
    if (isThereAnyNextStep) setCurrentStep(currentStep + 1);
  };

  const { image, description, name, timeToRead } = steps[currentStep];

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src={image ?? GrayTone} />
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-blue-500 text-xs font-extrabold uppercase">
                  Passo {currentStep + 1}
                </h3>
                <h2 className="font-black text-3xl lg:text-4xl text-gray-800">
                  {name}
                </h2>
                <p className="text-gray-500">{description}</p>
              </div>
              <ShowWhen condition={isThereAnyNextStep}>
                <NextStepButton nextStep={nextStep} currentStep={currentStep} timeToRead={timeToRead} />
              </ShowWhen>
              <ShowWhen condition={!isThereAnyNextStep}>
                <PrimaryActionButton
                  text="Completato"
                  disabled
                  className="bg-green-500"
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
