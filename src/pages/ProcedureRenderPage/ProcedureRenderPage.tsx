import { useState, useEffect } from "react";
import MinimalNavbar from "../../components/MinimalNavbar/MinimalNavbar";
import ProcedureWapper from "../../components/ProcedureWapper/ProcedureWapper";
import ShowWhen from "../../components/ShowWhen/ShowWhen";
import { ProcedureRootType } from "../../types/procedureTypes";
import InvalidRenderPage from "./InvalidRenderPage/InvalidRenderPage";

const useProcedureValidation = (data: ProcedureRootType) => {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    try {
        const { procedure } = data;
        if (!procedure) {
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

const ProcedureRenderPage = () => {
  const procedureLoaded = localStorage.getItem("procedureLoaded");
  const obj = procedureLoaded ? JSON.parse(procedureLoaded) : {};
  const isObjValid = Object.keys(obj).length !== 0;
  const isValidProcedure = useProcedureValidation(obj as ProcedureRootType);

  return (
    <>
      <MinimalNavbar />
      <ShowWhen condition={isObjValid && isValidProcedure}>
        <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-10 md:pt-5">
          <ProcedureWapper data={obj as ProcedureRootType} />
        </div>
      </ShowWhen>
      <ShowWhen condition={!isObjValid || !isValidProcedure}>
        <InvalidRenderPage />
      </ShowWhen>
    </>
  );
};

export default ProcedureRenderPage;
