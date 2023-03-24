import React, { Fragment } from "react";
import "./Main.scss";

interface Props {
  children: any;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <div className="main">{children}</div>;
};
