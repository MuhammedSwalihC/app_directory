import React, { Fragment } from "react";
import "./TableContainer.scss";

interface Props {
  children?: React.ReactNode;
  label?: string;
  value?: any;
  handleInputChange?: any;
  name?: string | null | undefined;
  update?: boolean | null;
  headers?: [];
  data?: any;
  styles?: any;
  className?: any;
}

export const TableContainer: React.FC<Props> = ({
  className = "",
  children,
  styles,
}) => {
  return (
    <table className={`table-container ${className}`} style={styles}>
      {children}
    </table>
  );
};
