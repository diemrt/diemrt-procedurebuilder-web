import { useFormContext, useFormState } from "react-hook-form";
import Input from "../../common/Input/Input";
import Section from "../../common/Section/Section";
import Textarea from "../../common/Textarea/Textarea";
import Switch from "../../common/Switch/Switch";

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
          <div className="col-span-full">
            <Switch
              label="Procedura guidata"
              name="isStepByStep"
              placeholder="Se attivato, la procedura sarà divisa in passaggi che richiederanno un'interazione da parte degli utenti. In questo modo si potrà seguire la procedura passo dopo passo."
              register={register}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditorGenericInfoForm;
