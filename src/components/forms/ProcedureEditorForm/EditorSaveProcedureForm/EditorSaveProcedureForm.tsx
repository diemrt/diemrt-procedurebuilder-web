import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SuccessSection from "../../common/SuccessSection/SuccessSection";

const EditorSaveProcedureForm = () => {
  return (
    <SuccessSection
      title="Salva la procedura!"
      description="Assicurati di copiare il link univoco alla procedura."
      icon={<CheckCircleIcon className="me-2 size-5" />}
    >
      aaa
    </SuccessSection>
  );
};

export default EditorSaveProcedureForm;
