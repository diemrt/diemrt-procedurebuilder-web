import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ShowWhen from "../../../../ShowWhen/ShowWhen";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface Props {
  onAddStep: () => void;
  isValid: boolean;
}
const EditorToolbar = ({ onAddStep, isValid }: Props) => {
  return (
    <>
      <ShowWhen condition={isValid}>
        <button
          type="submit"
          className="fixed bottom-24 right-10 p-3 border rounded-full shadow-md focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 y-1.5 inline-flex items-center gap-x-2 text-sm font-medium bg-green-500 text-white hover:shadow-xl focus:outline-none"
        >
          <ArrowDownTrayIcon className="size-5" />
        </button>
      </ShowWhen>
      <button
        type="button"
        onClick={onAddStep}
        className="fixed bottom-10 right-10 px-7 py-3 border rounded-full shadow-md focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 y-1.5 inline-flex items-center gap-x-2 text-sm font-medium bg-blue-500 text-white hover:shadow-xl focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
      >
        <PlusCircleIcon className="size-5" />
        Aggiungi passo
      </button>
    </>
  );
};

export default EditorToolbar;
