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
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}
const Input = <TFieldValues extends Record<string, unknown>>({
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
      <input
        id={name}
        className="py-2 px-3 pe-11 block w-full border-gray-300 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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

export default Input;
