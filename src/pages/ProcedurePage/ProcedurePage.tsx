import { useSearchParams } from "react-router-dom";
import DeserializeBase64 from "../../components/DeserializeBase64/DeserializeBase64";
import MinimalNavbar from "../../components/MinimalNavbar/MinimalNavbar";

const ProcedurePage = () => {
  const [searchParams] = useSearchParams();
  const base64 = searchParams.get("base64");
  return (
    <>
    <MinimalNavbar />
    <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-10 md:pt-5">
      <DeserializeBase64 base64={base64 ?? ""} />
    </div>
    </>
  );
};

export default ProcedurePage;
