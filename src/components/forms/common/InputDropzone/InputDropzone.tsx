import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ShowWhen from "../../../ShowWhen/ShowWhen";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const InputDropzone = () => {
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          localStorage.setItem("procedureLoaded", JSON.stringify(json));
          navigate("/procedure/render");
        } catch (error) {
          console.error("File non valido o non supportato", error);
        }
      };
      reader.readAsText(file);
    });
  }, [navigate]);
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: { "application/json": [] } });

  return (
    <div
      {...getRootProps()}
      className="px-20 flex flex-col items-center justify-center w-full h-64 p-4 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer bg-blue-50 hover:border-blue-500 focus:outline-none text-blue-400 hover:text-blue-500"
    >
      <input {...getInputProps()} className="hidden" />
      <ShowWhen condition={isDragActive && !isDragReject}>
        <p className="flex items-center font-medium text-2xl text-blue-500">
          <DocumentArrowDownIcon className="animate-bounce me-3 size-6" />{" "}
          Rilascia il file qui
        </p>
      </ShowWhen>
      <ShowWhen condition={!isDragActive && !isDragReject}>
        <p className="flex items-center font-medium text-2xl">
          <DocumentArrowUpIcon className="me-3 size-6" /> Trascina qui il file
        </p>
      </ShowWhen>
      <ShowWhen condition={isDragReject}>
        <p className="flex items-center font-medium text-2xl text-red-500">
          <ExclamationTriangleIcon className="me-3 size-6" /> Il file non è
          valido
        </p>
      </ShowWhen>
      <small>
        Sono ammessi solo file con estensione <code>.json</code>
      </small>
    </div>
  );
};

export default InputDropzone;
