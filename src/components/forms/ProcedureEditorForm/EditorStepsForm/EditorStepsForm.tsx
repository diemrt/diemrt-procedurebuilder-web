import { useFormContext, useFieldArray } from "react-hook-form";
import Section from "../../common/Section/Section";
import Input from "../../common/Input/Input";
import Textarea from "../../common/Textarea/Textarea";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import EditorToolbar from "./EditorToolbar/EditorToolbar";

const EditorStepsForm = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const handleAddStep = () => {
    append({ name: "", description: "", image: "", timeToRead: 0 });
  };

  return (
    <div>
      {fields.map((field, index) => (
        <Section
          key={field.id}
          title={`Passo ${index + 1}`}
          description="Ogni passo rappresenta un'azione che l'utente dovrà compiere per completare la procedura."
          icon={<DocumentTextIcon className="me-2 size-5" />}
        >
          <div className="col-span-2">
            <div className="md:grid md:grid-cols-3 md:gap-5">
              <div className="col-span-full">
                <Input
                  name={`steps.${index}.name`}
                  type="text"
                  label="Titolo"
                  register={register}
                  rules={{
                    required: "Campo obbligatorio",
                  }}
                />
              </div>
              <div className="col-span-full">
                <Textarea
                  name={`steps.${index}.description`}
                  label="Descrizione"
                  register={register}
                  rules={{
                    required: "Campo obbligatorio",
                  }}
                />
              </div>
              <div className="col-span-full">
                <Input
                  name={`steps.${index}.image`}
                  type="text"
                  label="URL dell'Immagine"
                  register={register}
                  rules={{
                    required: "Campo obbligatorio",
                  }}
                />
              </div>
              <div className="col-span-full">
                <Input
                  name={`steps.${index}.timeToRead`}
                  type="number"
                  label="Tempo di Lettura (secondi)"
                  register={register}
                />
              </div>
              <div className="col-span-full">
                <div className="flex flex-col bg-red-50 border border-red-700 shadow-sm rounded-xl p-4 md:p-5 dark:bg-red-200 dark:border-red-700 dark:shadow-neutral-700/70">
                  <h3 className="font-bold text-sm text-red-800 flex items-center">
                    Zona pericolosa
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    Questa azione è irreversibile, prima di procedere assicurati di voler rimuovere il passo definitivamente.
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-4 py-2 text-xs w-fit mt-4 bg-gray-400 text-white font-semibold rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  >
                    Rimuovi passo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
      <EditorToolbar onAddStep={handleAddStep}/>
    </div>
  );
};

export default EditorStepsForm;
