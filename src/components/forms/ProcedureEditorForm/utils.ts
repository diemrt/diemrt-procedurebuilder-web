import { FieldValues, UseFormReturn } from "react-hook-form";
import { toast } from "react-toastify";
import { ProcedureRootType } from "../../../types/procedureTypes";
import { supabaseClient } from "../../../api/supabaseUtils";

export const copyLinkToClipboard = (link: string) => {
  navigator.clipboard.writeText(link);
  toast.success("Link copiato negli appunti!");
};

export const generateUniqueFileName = (fileName: string) => {
  const date = new Date();
  const timestamp = date.getTime();
  const sanitizedFileName = fileName.replace(/\s+/g, '-');
  return `${sanitizedFileName}-${timestamp}`;
};

export const createProcedureData = (data: FieldValues): ProcedureRootType => {
  return {
    procedure: {
      name: data.title,
      description: data.description,
      isStepByStep: data.isStepByStep,
      steps: data.steps,
    },
  };
};

export const createBlob = (procedureData: ProcedureRootType): Blob => {
  const json = JSON.stringify(procedureData, null, 2);
  return new Blob([json], { type: "application/json" });
};

export const downloadFile = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const uploadFileToStorage = async (blob: Blob, fileName: string) => {
  const { data: storageData, error: storageError } = await supabaseClient.storage
    .from(import.meta.env.VITE_SUPABASE_BUCKET)
    .upload(`public/${fileName}.json`, blob);
  if (storageData) {
    toast.success("Procedura salvata correttamente!");
  }
  if (storageError) {
    throw new Error(`Errore durante il caricamento del file: ${storageError.message}`);
  }
};

export const generateStorageLink = (fileName: string): string => {
  return `${import.meta.env.VITE_SELF_URL}/procedure/${fileName}`;
};

export const updateFormWithLink = (link: string, formProps: UseFormReturn<FieldValues, any, undefined>) => {
  formProps.setValue("link", link);
};

export const handleError = (error: Error) => {
  toast.error(error.message);
};