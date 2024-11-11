import { ProcedureRootType } from "../../types/procedureTypes";
import BackToLink from "../BackToLink/BackToLink";
import ShowWhen from "../ShowWhen/ShowWhen";
import ProcedureStepsWizard from "./ProcedureStepsWizard/ProcedureStepsWizard";

interface Props {
  data: ProcedureRootType;
}
const ProcedureLayout = ({ data }: Props) => {
  const { procedure } = data;
  const { name, description, steps, isStepByStep } = procedure;

  return (
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      <div className="mb-10 lg:mb-14">
        <BackToLink text="Torna alla Home" to="/" />
        <div className="max-w-4xl">
          <h2 className="text-gray-900 font-bold text-2xl md:text-4xl md:leading-tight">
            {name}
          </h2>
          <p className="mt-1 text-neutral-800">{description}</p>
        </div>
        <ShowWhen condition={isStepByStep}>
          <ProcedureStepsWizard steps={steps} />
        </ShowWhen>
      </div>
    </div>
  );
};

export default ProcedureLayout;
