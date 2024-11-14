import { useFormContext, useFieldArray } from 'react-hook-form';
import Section from "../../common/Section/Section";
import Input from "../../common/Input/Input";
import Textarea from "../../common/Textarea/Textarea";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const EditorStepsForm = () => {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'steps'
    });

    const handleAddStep = () => {
        append({ name: '', description: '', image: '', timeToRead: 0 });
    };

    return (
        <div>
            {fields.map((field, index) => (
                <Section
                    key={field.id}
                    title={`Passo ${index + 1}`}
                    description="Fornisci i dettagli per questo passaggio."
                    icon={<InformationCircleIcon className="me-2 size-5" />}
                >
                    <div className="col-span-2">
                        <div className="md:grid md:grid-cols-3 md:gap-5">
                            <div className="col-span-full">
                                <Input
                                    name={`steps.${index}.name`}
                                    type="text"
                                    label="Nome del Passaggio"
                                    register={register}
                                    rules={{
                                        required: "Campo obbligatorio",
                                    }}
                                />
                            </div>
                            <div className="col-span-full">
                                <Textarea
                                    name={`steps.${index}.description`}
                                    label="Descrizione del Passaggio"
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
                                />
                            </div>
                            <div className="col-span-full">
                                <Input
                                    name={`steps.${index}.timeToRead`}
                                    type="number"
                                    label="Tempo di Lettura (minuti)"
                                    register={register}
                                />
                            </div>
                            <div className="col-span-full">
                                <button type="button" onClick={() => remove(index)}>Rimuovi Passaggio</button>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}
            <button 
                type="button" 
                onClick={handleAddStep} 
                className="mt-4 px-4 py-2 border-2 border-blue-500 text-blue-500 text-sm font-semibold rounded-full shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Aggiungi Passaggio
            </button>
        </div>
    );
};

export default EditorStepsForm;
