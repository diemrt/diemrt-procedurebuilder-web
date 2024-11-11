import ProcedureWapper from "../../components/ProcedureWapper/ProcedureWapper";
import { ProcedureRootType } from "../../types/procedureTypes";
import obj from "../../assets/data.json";
import MinimalNavbar from "../../components/MinimalNavbar/MinimalNavbar";

const DemoPage = () => {
  return (
    <>
      <MinimalNavbar />
      <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-10 md:pt-5">
        <ProcedureWapper data={obj as ProcedureRootType} />
      </div>
    </>
  );
};

export default DemoPage;
