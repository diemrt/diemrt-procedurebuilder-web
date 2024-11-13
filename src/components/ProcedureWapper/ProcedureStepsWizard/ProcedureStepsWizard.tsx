import { useState } from "react";
import { ProcedureStepType } from "../../../types/procedureTypes";
import GrayTone from "../../../assets/gray_tone.jpg";
import NextStepButton from "../NextStepButton/NextStepButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                <ReactMarkdown className="text-gray-500" children={description} remarkPlugins={[remarkGfm]} />
              </div>
                <NextStepButton isThereAnyNextStep={isThereAnyNextStep} nextStep={nextStep} currentStep={currentStep} timeToRead={timeToRead} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcedureStepsWizard;
