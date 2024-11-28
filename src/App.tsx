import { ToastContainer } from "react-toastify";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
