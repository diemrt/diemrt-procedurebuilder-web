import { FieldValues, FormProvider, useForm } from "react-hook-form";
import BackToLink from "../../BackToLink/BackToLink";
import EditorGenericInfoForm from "./EditorGenericInfoForm/EditorGenericInfoForm";
import EditorStepsForm from "./EditorStepsForm/EditorStepsForm";
import { ProcedureRootType } from "../../../types/procedureTypes";
import { useState } from "react";
import ShowWhen from "../../ShowWhen/ShowWhen";
import EditorSaveProcedureForm from "./EditorSaveProcedureForm/EditorSaveProcedureForm";
import { copyLinkToClipboard, generateUniqueFileName } from "./utils";
import { supabaseClient } from "../../../api/supabaseUtils";
import { toast } from "react-toastify";

const ProcedureEditorForm = () => {
  const formProps = useForm<FieldValues>();
  const { handleSubmit } = formProps;

  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const procedureData: ProcedureRootType = {
      procedure: {
        name: data.title,
        description: data.description,
        isStepByStep: data.isStepByStep,
        steps: data.steps.map((step: any) => ({
          name: step.name,
          description: step.description,
          image: step.image,
          timeToRead: step.timeToRead,
        })),
      },
    };
    const fileName = generateUniqueFileName(data.title);
    const json = JSON.stringify(procedureData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const { data: storageData, error: storageError } = await supabaseClient.storage.from(import.meta.env.VITE_SUPABASE_BUCKET).upload(`public/${fileName}.json`, blob);
    if (storageData) {
      toast.success("Procedura salvata correttamente!");
    }
    if (storageError) {
      toast.error(`Errore durante il caricamento del file: ${storageError.message}`);
      return;
    }

    const storageLink = `${import.meta.env.VITE_SELF_URL}/procedure/${fileName}`;
    formProps.setValue("link", storageLink);
    copyLinkToClipboard(storageLink);
  };

  return (
    <FormProvider {...formProps}>
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="mb-10 lg:mb-14">
          <BackToLink text="Torna alla Home" to="/" />
          <div className="max-w-4xl">
            <h2 className="text-gray-900 font-bold text-2xl md:text-4xl md:leading-tight">
              Editor procedure
            </h2>
            <p className="mt-1 text-neutral-800">
              Puoi creare una procedura da zero, o usare una procedura esistente
              e modificarne il contenuto
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ShowWhen condition={isFormValid}>
              <EditorSaveProcedureForm />
            </ShowWhen>
            <EditorGenericInfoForm />
            <EditorStepsForm {...{ isFormValid, setIsFormValid }} />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default ProcedureEditorForm;
