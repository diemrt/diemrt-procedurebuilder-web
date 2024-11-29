import { FieldValues, FormProvider, useForm } from "react-hook-form";
import BackToLink from "../../BackToLink/BackToLink";
import EditorGenericInfoForm from "./EditorGenericInfoForm/EditorGenericInfoForm";
import EditorStepsForm from "./EditorStepsForm/EditorStepsForm";
import { useState } from "react";
import ShowWhen from "../../ShowWhen/ShowWhen";
import EditorSaveProcedureForm from "./EditorSaveProcedureForm/EditorSaveProcedureForm";
import { copyLinkToClipboard, createBlob, createProcedureData, downloadFile, generateStorageLink, generateUniqueFileName, handleError, updateFormWithLink, uploadFileToStorage } from "./utils";

const ProcedureEditorForm = () => {
  const isUpdate = window.location.href.includes("update");
  const procedureLoaded = localStorage.getItem("procedureLoaded");
  const obj = procedureLoaded ? JSON.parse(procedureLoaded) : {};

  const formProps = useForm<FieldValues>({
    defaultValues: isUpdate ? {
      title: obj.procedure?.name,
      description: obj.procedure?.description,
      isStepByStep: obj.procedure?.isStepByStep,
      steps: obj.procedure?.steps
    } : undefined,
  });
  const { handleSubmit } = formProps;

  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    try {
      const procedureData = createProcedureData(data);
      const fileName = generateUniqueFileName(data.title);
      const blob = createBlob(procedureData);
      downloadFile(blob, fileName);
      await uploadFileToStorage(blob, fileName);
      const storageLink = generateStorageLink(fileName);
      updateFormWithLink(storageLink, formProps);
      copyLinkToClipboard(storageLink);
    } catch (error: any) {
      handleError(error);
    }
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
