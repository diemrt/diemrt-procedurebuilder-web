import { IStaticMethods } from "preline";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

interface Props {
  children: React.ReactNode;
}

const ReinitializationHelper = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    if (document.readyState === "complete") {
      window.HSStaticMethods?.autoInit();
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default ReinitializationHelper;
