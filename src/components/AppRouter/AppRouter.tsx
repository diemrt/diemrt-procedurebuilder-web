import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ReinitializationHelper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </ReinitializationHelper>
    </BrowserRouter>
  );
};

export default AppRouter;
