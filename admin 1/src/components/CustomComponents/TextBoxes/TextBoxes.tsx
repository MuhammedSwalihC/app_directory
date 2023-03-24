import React, { Fragment, useState } from "react";
import Placeholder from "react-select/dist/declarations/src/components/Placeholder";
import "./TextBoxes.scss";

interface Props {
  label?: string;
  value?: any;
  handleInputChange?: any;
  name?: string | undefined;
  error?: string | undefined;
  update?: boolean | null;
  global?: any;
  setGlobal?: any;
  patchUpdate?: any;
  Placeholder?: any;
  type?: string;
}

const TextBox: React.FC<Props> = ({
  label,
  value,
  handleInputChange,
  name,
  update = false,
  error,
  global,
  patchUpdate,
  Placeholder,
  type = "text",
}) => {
  const [disabled, setDisabled] = useState<any>(update);
  const [onClickState, onClickSetState] = useState<any>(false);

  const editBox = (status: any) => {
    if (status === true) {
      patchUpdate(name, value);
    }
    setDisabled(status);
  };

  return (
    <div className="form-text">
      {label && <span className="text-label">{label}</span>}
      <span
        className={
          !disabled || global ? "text-wrapper" : "text-wrapper disabled"
        }
      >
        <input
          name={name}
          type={type}
          disabled={!disabled || global ? false : true}
          className="text-input"
          value={value}
          placeholder={Placeholder}
          onChange={(e) => handleInputChange(e)}
          onClick={() => onClickSetState(true)}
        />
        <span className="tool-box">
          {update && (
            <Fragment>
              {!disabled && update && !error && (
                <i
                  className="fas fa-check tickIcon"
                  onClick={() => editBox(disabled == false)}
                ></i>
              )}
              {disabled && !global && (
                <i
                  className="fa fa-pen"
                  onClick={() => editBox(disabled == false)}
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

export default TextBox;
