import React, { Fragment, useState } from "react";
import "./TextArea.scss";

interface Props {
  children?: React.ReactNode;
  label?: string;
  value?: any;
  handleInputChange?: any;
  name?: string | undefined;
  update?: boolean | null;
  error?: string | undefined;
  placeholder?: any;
}

const TextArea: React.FC<Props> = ({
  children,
  label,
  value,
  handleInputChange,
  name,
  update = false,
  error,
  placeholder,
}) => {
  const [disabled, setDisabled] = useState<boolean | null>(update);
  const [onClickState, onClickSetState] = useState<any>(false);
  return (
    <div className="form-text">
      {label && <span className="text-label">{label}</span>}
      <span className={!disabled ? "text-wrapper" : "text-wrapper disabled"}>
        <textarea
          name={name}
          className={!disabled ? "text-input" : "text-input disabled"}
          onChange={(e) => handleInputChange(e)}
          rows={4}
          cols={50}
          value={value}
          placeholder={placeholder}
        />
        <span className="tool-box">
          {update && (
            <Fragment>
              {disabled && <i className="fas fa-check tickIcon"></i>}
              {!disabled && (
                <i
                  className="fa fa-pen"
                  onClick={() => setDisabled(disabled === false)}
                ></i>
              )}
            </Fragment>
          )}
        </span>
        {onClickState && <span className="error">{error}</span>}
      </span>
    </div>
  );
};

export default TextArea;
