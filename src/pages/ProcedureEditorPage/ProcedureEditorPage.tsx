import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultWrapper from "../../components/DefaultWrapper/DefaultWrapper";
import ProcedureEditorForm from "../../components/forms/ProcedureEditorForm/ProcedureEditorForm";
import { checkAuthState } from "../../api/firebase/firebaseUtils";

const ProcedureEditorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthState((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <DefaultWrapper>
      <ProcedureEditorForm />
    </DefaultWrapper>
  );
};

export default ProcedureEditorPage;