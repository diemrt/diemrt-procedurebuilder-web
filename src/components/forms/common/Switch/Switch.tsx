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
const Switch = <TFieldValues extends Record<string, unknown>>({
  name,
  label,
  register,
  rules,
  placeholder,
  ...rest
}: Props<TFieldValues>) => {
  return (
    <div className="space-y-2 w-full mb-3 md:mb-0">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="relative w-[35px] h-[21px] bg-gray-300 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
  before:inline-block before:size-4 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
          id={name}
          {...rest}
          {...(register &&
            register(
              name,
              rules as RegisterOptions<TFieldValues, Path<TFieldValues>>
            ))}
        />
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-800 dark:text-neutral-200 ms-3"
        >
          {label}
          {rules?.required && (
            <span className="text-red-500 font-bold ms-1">*</span>
          )}
        </label>
      </div>
      <p className="text-sm text-gray-500 dark:text-neutral-300">{placeholder}</p>
    </div>
  );
};

export default Switch;
