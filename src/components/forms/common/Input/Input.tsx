interface Props {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}
const Input = ({ name, placeholder, type = 'text', label }: Props) => {
  return (
    <div className="space-y-2 w-full">
      <label
        htmlFor={name}
        className="inline-block text-sm font-medium text-gray-800 dark:text-neutral-200"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="py-2 px-3 pe-11 block w-full border-2 border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
