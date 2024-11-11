import React from "react";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
  isMinimal?: boolean;
}
const DefaultWrapper = ({ children, isMinimal }: Props) => {
  return (
    <div>
      <Navbar isMinimal={isMinimal} />

      <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-10">
        {children}
      </div>
    </div>
  );
};

export default DefaultWrapper;
