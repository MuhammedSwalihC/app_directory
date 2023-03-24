import React, { useState } from "react";
import "./notifications.scss";

interface errorMessage {
  type?: string | undefined;
  message?: string | undefined;
}

interface Props {
  errorMessage?: any;
  successMessage?: any;
}

export const Notification: React.FC<Props> = ({
  errorMessage,
  successMessage,
}) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className="respone-notify"
      style={{
        visibility:
          (errorMessage || successMessage) && !close ? "visible" : "hidden",
        background:
          (errorMessage && "rgb(212, 50, 50)") || (successMessage && "green"),
      }}
    >
      <span className="close-frame">
        <span onClick={() => setClose(close == false)}>X</span>
      </span>
      {successMessage && successMessage}
      {errorMessage && errorMessage}
    </div>
  );
};
