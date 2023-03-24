import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";
import "./DatePicker.scss";

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
}

export const CustomDatePicker: React.FC<Props> = ({
  label,
  value,
  handleInputChange,
  name,
  update = false,
  error,
  global,
  patchUpdate,
}) => {
  const [disabled, setDisabled] = useState<boolean | null>(update);
  const [onClickState, onClickSetState] = useState<any>(false);

  const editBox = (status: any) => {
    if (status === true) {
      patchUpdate(name, value);
    }
    setDisabled(status);
  };

  return (
    <div className="form-text">
      <span className="text-label">{label}</span>
      <span
        className={
          !disabled || global ? "text-wrapper" : "text-wrapper disabled"
        }
        onClick={() => onClickSetState(true)}
      >
        {!value && <span className="hider"></span>}
        <DatePicker
          onChange={(date: any) =>
            handleInputChange({
              target: { name: name, value: date },
            })
          }
          format="MM-dd-yyyy"
          value={value && new Date(value)}
        />
        <span className="tool-box">
          {update && (
            <Fragment>
              {!disabled && update && (
                <i
                  className="fas fa-check tickIcon"
                  onClick={() => editBox(disabled == false)}
                ></i>
              )}
              {disabled && !global && (
                <i className="fa fa-pen" onClick={() => editBox(false)}></i>
              )}
            </Fragment>
          )}
        </span>
        {onClickState && <span className="error">{error}</span>}
      </span>
    </div>
  );
};
