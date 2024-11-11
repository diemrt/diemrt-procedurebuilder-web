import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProcedurePage from "../../pages/ProcedurePage/ProcedurePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ReinitializationHelper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/procedure" element={<ProcedurePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ReinitializationHelper>
    </BrowserRouter>
  );
};

export default AppRouter;
