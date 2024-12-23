import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  rules?: RegisterOptions;
  label: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
}
const Textarea = <TFieldValues extends Record<string, unknown>>({
  name,
  label,
  register,
  rules,
  ...rest
}: Props<TFieldValues>) => {
  return (
    <div className="space-y-2 w-full mb-3 md:mb-0">
      <label
        htmlFor={name}
        className="inline-block text-sm font-medium text-gray-800 dark:text-neutral-200"
      >
        {label}
        {rules?.required && (
          <span className="text-red-500 font-bold ms-1">*</span>
        )}
      </label>
      <textarea
        id={name}
        className="py-2 px-3 pe-11 block w-full min-h-40 border-gray-300 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        {...rest}
        {...(register &&
          register(
            name,
            rules as RegisterOptions<TFieldValues, Path<TFieldValues>>
          ))}
      />
    </div>
  );
};

export default Textarea;
