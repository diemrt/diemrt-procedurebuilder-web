import remarkGfm from "remark-gfm";
import { ProcedureRootType } from "../../types/procedureTypes";
import BackToLink from "../BackToLink/BackToLink";
import ShowWhen from "../ShowWhen/ShowWhen";
import ProcedureStepsList from "./ProcedureStepsList/ProcedureStepsList";
import ProcedureStepsWizard from "./ProcedureStepsWizard/ProcedureStepsWizard";
import ReactMarkdown from "react-markdown";

interface Props {
  data: ProcedureRootType;
}
const ProcedureLayout = ({ data }: Props) => {
  const { procedure } = data;
  const { name, description, steps, isStepByStep } = procedure ?? {};

  return (
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      <div className="mb-10 lg:mb-14">
        <BackToLink text="Torna alla Home" to="/" />
        <div className="max-w-4xl">
          <h2 className="text-gray-900 font-bold text-2xl md:text-4xl md:leading-tight">
            {name}
          </h2>
          <ReactMarkdown className="mt-1 text-neutral-800" children={description} remarkPlugins={[remarkGfm]} />
        </div>
        <ShowWhen condition={isStepByStep}>
          <ProcedureStepsWizard steps={steps} />
        </ShowWhen>
        <ShowWhen condition={!isStepByStep}>
          <ProcedureStepsList steps={steps} />
        </ShowWhen>
      </div>
    </div>
  );
};

export default ProcedureLayout;
