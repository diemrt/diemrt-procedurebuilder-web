import { CheckCircleIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import SuccessSection from "../../common/SuccessSection/SuccessSection";
import Input from "../../common/Input/Input";
import { useFormContext } from "react-hook-form";
import { copyLinkToClipboard } from "../utils";

const EditorSaveProcedureForm = () => {
  const { register, watch } = useFormContext();

  return (
    <SuccessSection
      title="Salva la procedura!"
      description="Assicurati di copiare il link univoco alla procedura."
      icon={<CheckCircleIcon className="me-2 size-5" />}
    >
      <div className="col-span-2">
        <div className="md:grid md:grid-cols-3 md:gap-5">
          <div className="col-span-full">
            <Input
              name="link"
              type="text"
              label="Link procedura"
              placeholder="Il link sarà generato automaticamente al salvataggio ..."
              readOnly
              register={register}
              onClick={() => {
                copyLinkToClipboard(watch("link"));
              }}
            />
          </div>
          
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-green-500 shadow-lg shadow-transparent hover:shadow-xl border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-green-700/50 py-3 px-6"
            >
              <CloudArrowUpIcon className="size-5" />
              Salva e scarica
            </button>
        </div>
      </div>
    </SuccessSection>
  );
};

export default EditorSaveProcedureForm;
