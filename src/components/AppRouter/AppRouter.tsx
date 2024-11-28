import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import DemoPage from "../../pages/DemoPage/DemoPage";
import ProcedureRenderPage from "../../pages/ProcedureRenderPage/ProcedureRenderPage";
import ProcedureEditorPage from "../../pages/ProcedureEditorPage/ProcedureEditorPage";
import ProcedureByLinkPage from "../../pages/ProcedureByLinkPage/ProcedureByLinkPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ReinitializationHelper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/procedure/demo" element={<DemoPage />} />
          <Route path="/procedure/editor" element={<ProcedureEditorPage />} />
          <Route path="/procedure/render" element={<ProcedureRenderPage />} />
          <Route path="/procedure/:link" element={<ProcedureByLinkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ReinitializationHelper>
    </BrowserRouter>
  );
};

export default AppRouter;
