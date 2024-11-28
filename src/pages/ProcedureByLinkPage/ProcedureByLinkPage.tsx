import { useState, useEffect } from "react";
import MinimalNavbar from "../../components/MinimalNavbar/MinimalNavbar";
import ProcedureWapper from "../../components/ProcedureWapper/ProcedureWapper";
import { ProcedureRootType } from "../../types/procedureTypes";
import InvalidRenderPage from "./InvalidRenderPage/InvalidRenderPage";
import { supabaseClient } from "../../api/supabaseUtils";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useProcedureValidation = (data: ProcedureRootType) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    try {
      const { procedure } = data;
      if (!procedure || !procedure.name) {
        setIsValid(false);
        return;
      }
      setIsValid(true);
    } catch (error: any) {
      console.error("Error while validating procedure data", error);
      setIsValid(false);
    }
  }, [data]);

  return isValid;
};

const ProcedureByLinkPage = () => {
  const { link } = useParams();
  const [procedureData, setProcedureData] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabaseClient.storage
        .from(import.meta.env.VITE_SUPABASE_BUCKET)
        .download(`public/${link}.json`);
      if (error) {
        toast.error(`Errore durante il download della procedura: ${error.message}`);
        return;
      }
      if (data) {
        const text = await data.text();
        setProcedureData(text)
      }
    }
    fetchData();
  }, [link]);

  const procedureLoaded = procedureData;
  const obj = procedureLoaded ? JSON.parse(procedureLoaded) : {};
  const isObjValid = Object.keys(obj).length !== 0;
  const isValidProcedure = useProcedureValidation(obj as ProcedureRootType);

  return (
    <>
      <MinimalNavbar />
      {isObjValid && isValidProcedure ? (
        <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-10 md:pt-5">
          <ProcedureWapper data={obj as ProcedureRootType} />
        </div>
      ) : (
        <InvalidRenderPage />
      )}
    </>
  );
};

export default ProcedureByLinkPage;
