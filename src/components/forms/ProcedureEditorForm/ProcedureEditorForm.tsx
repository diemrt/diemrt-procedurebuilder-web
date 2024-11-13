import { FieldValues, FormProvider, useForm } from "react-hook-form";
import BackToLink from "../../BackToLink/BackToLink";
import EditorGenericInfoForm from "./EditorGenericInfoForm/EditorGenericInfoForm";

const ProcedureEditorForm = () => {
  const formProps = useForm<FieldValues>();

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
              Potrai creare una procedura da zero, o usare una procedura
              esistente e modificarne il contenuto
            </p>
          </div>
          <EditorGenericInfoForm />
        </div>
      </div>
    </FormProvider>
  );
};

export default ProcedureEditorForm;
