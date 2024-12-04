import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ShowWhen from "../../ShowWhen/ShowWhen";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const LandingInputDropzone = () => {
  const navigate = useNavigate();
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const json = JSON.parse(reader.result as string);
            localStorage.setItem("procedureLoaded", JSON.stringify(json));
            navigate("/procedure/editor/update");
          } catch (error) {
            console.error("File non valido o non supportato", error);
          }
        };
        reader.readAsText(file);
      });
    },
    [navigate]
  );
  const { getRootProps, getInputProps, isDragActive, isDragReject, open } =
    useDropzone({ onDrop, accept: { "application/json": [] }, multiple: false });

  return (
    <>
      <div className="hidden pt-5 md:flex md:justify-center">
        <div
          {...getRootProps()}
          className="px-20 flex flex-col items-center justify-center max-w-2xl w-full h-64 p-4 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer bg-blue-50 hover:border-blue-500 shadow-xl focus:outline-none text-blue-400 hover:text-blue-500"
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
              <DocumentArrowUpIcon className="me-3 size-6" /> Carica una procedura esistente
            </p>
          </ShowWhen>
          <ShowWhen condition={isDragReject}>
            <p className="flex items-center font-medium text-2xl text-red-500">
              <ExclamationTriangleIcon className="me-3 size-6" /> Il file non è
              valido
            </p>
          </ShowWhen>
          <small>
            Trascina qui il tuo file. Sono ammessi solo file con estensione <code>.json</code>
          </small>
        </div>
      </div>
      <div className="md:hidden flex justify-center">
        <button
          onClick={open}
          className="flex items-center justify-center gap-x-3 max-w-sm w-full h-14 px-4 text-center bg-gradient-to-tl bg-white border border-blue-500 text-blue-500 text-sm font-medium rounded-full focus:text-blue-600 focus:border-blue-600 focus:font-bold"
        >
          <DocumentArrowUpIcon className="size-6" />
          <span>Carica una procedura esistente</span>
        </button>
      </div>
    </>
  );
};

export default LandingInputDropzone;
