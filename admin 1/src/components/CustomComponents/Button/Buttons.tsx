import React, { Fragment } from "react";
import "./Button.scss";

interface Props {
  className?: string;
  value?: string;
  handleSubmit?: any;
  styles?: any;
}

export const Button: React.FC<Props> = ({
  className,
  value = "Save",
  handleSubmit,
  styles,
}) => {
  return (
    <Fragment>
      <div className={className} style={styles}>
        <button onClick={handleSubmit}>{value}</button>
      </div>
    </Fragment>
  );
};
