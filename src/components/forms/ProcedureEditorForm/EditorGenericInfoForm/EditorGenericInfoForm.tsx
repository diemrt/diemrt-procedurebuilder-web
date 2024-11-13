import { useFormContext, useFormState } from "react-hook-form";
import Input from "../../common/Input/Input";
import Section from "../../common/Section/Section";
import Textarea from "../../common/Textarea/Textarea";

const EditorGenericInfoForm = () => {
  const { register } = useFormContext();
  const { isValid } = useFormState();

  return (
    <Section
      title="Informazioni generali"
      description="Compila tutti i dati obbligatori, necessari al funzionamento minimo"
      isValid={isValid}
    >
      <div className="col-span-2">
        <div className="md:grid md:grid-cols-3 md:gap-5">
          <div className="col-span-full">
            <Input
              name="title"
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
              name="description"
              label="Descrizione"
              register={register}
              rules={{
                required: "Campo obbligatorio",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditorGenericInfoForm;
