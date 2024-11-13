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
      description="Assicurati di fornire informazioni chiare e dettagliate per aiutare gli utenti a comprendere meglio la procedura."
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
