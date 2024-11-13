import React from "react";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}
const DefaultWrapper = ({ children }: Props) => {
  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-b from-blue-600/10 via-transparent pt-5">
        {children}
      </div>
    </div>
  );
};

export default DefaultWrapper;
