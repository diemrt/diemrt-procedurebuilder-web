import { useSearchParams } from "react-router-dom";
import DefaultWrapper from "../../components/DefaultWrapper/DefaultWrapper";
import DeserializeBase64 from "../../components/DeserializeBase64/DeserializeBase64";

const ProcedurePage = () => {
  const [searchParams] = useSearchParams();
  const base64 = searchParams.get("base64");
  return(
    <DefaultWrapper isMinimal>
        <DeserializeBase64 base64={base64 ?? ""} />
    </DefaultWrapper>
  );
  
};

export default ProcedurePage;
