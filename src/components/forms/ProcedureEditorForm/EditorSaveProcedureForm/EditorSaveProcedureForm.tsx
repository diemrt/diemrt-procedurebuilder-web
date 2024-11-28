import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SuccessSection from "../../common/SuccessSection/SuccessSection";
import Input from "../../common/Input/Input";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

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
                toast.success("Link copiato negli appunti!");
                navigator.clipboard.writeText(watch("link"));
              }}
            />
          </div>
        </div>
      </div>
    </SuccessSection>
  );
};

export default EditorSaveProcedureForm;
