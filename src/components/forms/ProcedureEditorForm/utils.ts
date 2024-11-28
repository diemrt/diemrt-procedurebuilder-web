import { toast } from "react-toastify";

export const copyLinkToClipboard = (link: string) => {
  navigator.clipboard.writeText(link);
  toast.success("Link copiato negli appunti!");
};

export const generateUniqueFileName = (fileName: string) => {
  const date = new Date();
  const timestamp = date.getTime();
  return `${fileName}-${timestamp}`;
};
