import { useFormContext, useFieldArray } from 'react-hook-form';

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
                <div key={field.id}>
                    <input
                        type="text"
                        placeholder="Step Name"
                        {...register(`steps.${index}.name` as const)}
                    />
                    <textarea
                        placeholder="Step Description"
                        {...register(`steps.${index}.description` as const)}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        {...register(`steps.${index}.image` as const)}
                    />
                    <input
                        type="number"
                        placeholder="Time to Read (minutes)"
                        {...register(`steps.${index}.timeToRead` as const)}
                    />
                    <button type="button" onClick={() => remove(index)}>Remove Step</button>
                </div>
            ))}
            <button type="button" onClick={handleAddStep}>Add Step</button>
        </div>
    );
};

export default EditorStepsForm;
