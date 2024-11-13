import Input from "../../common/Input/Input";
import Section from "../../common/Section/Section";

const EditorGenericInfoForm = () => {
  return (
    <Section
      title="Informazioni generali"
      description="Compila tutti i dati obbligatori, necessari al funzionamento minimo"
    >
      <div className="col-span-2">
        <div className="md:grid md:grid-cols-3 md:gap-5">
          <div className="col-span-full">
            <Input name="title" type="text" label="Titolo" />
          </div>
          <div className="col-span-full">
          <Input name="description" type="text" label="Descrizione" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditorGenericInfoForm;
