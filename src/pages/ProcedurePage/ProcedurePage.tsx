import { useSearchParams } from "react-router-dom";
import DeserializeBase64 from "../../components/DeserializeBase64/DeserializeBase64";

const ProcedurePage = () => {
  const [searchParams] = useSearchParams();
  const base64 = searchParams.get("base64");
  return (
    <div className="bg-gradient-to-b from-blue-600/10 via-transparent">
      <DeserializeBase64 base64={base64 ?? ""} />
    </div>
  );
};

export default ProcedurePage;
