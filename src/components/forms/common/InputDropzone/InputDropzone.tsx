import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const InputDropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="px-20 flex flex-col items-center justify-center w-full h-64 p-4 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer bg-blue-50 hover:border-blue-500 focus:outline-none text-blue-400 hover:text-blue-500"
    >
      <input {...getInputProps()} className="hidden" />
      {isDragActive ? (
        <p className="flex items-center font-medium text-2xl text-blue-500"><DocumentArrowDownIcon className="animate-bounce me-3 size-6" /> Rilascia il file qui</p>
      ) : (
        <p className="flex items-center font-medium text-2xl"><DocumentArrowUpIcon className="me-3 size-6" /> Trascina qui il file</p>
      )}
      <small>Sono ammessi solo file con estensione <code>.json</code></small>
    </div>
  );
};

export default InputDropzone;