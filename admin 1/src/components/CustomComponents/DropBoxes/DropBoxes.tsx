import React, { Fragment, useEffect, useState } from "react";
import "../TextBoxes/TextBoxes.scss";
import "./DropBoxes.scss";
import Select from "react-select";

interface Props {
  label?: string;
  value?: any;
  handleInputChange?: any;
  name?: string | null | undefined;
  update?: boolean | null;
  top?: boolean;
  data?: any;
  error?: string | undefined;
  global?: any;
  setGlobal?: any;
  placeHolder?: any;
}

const DropBox: React.FC<Props> = ({
  top = false,
  label,
  value,
  handleInputChange,
  name,
  update = false,
  data,
  error,
  global,
  setGlobal,
  placeHolder,
}) => {
  let obj = value && data && data.find((o: any) => o.value === value);
  const [disabled, setDisabled] = useState<any>(update);
  const [selectedOption, setSelectedOption] = useState<any>(value);
  const [onClickState, onClickSetState] = useState<any>(false);

  useEffect(() => {
    selectedOption &&
      handleInputChange({
        target: { name: name, value: selectedOption.value },
      });
  }, [selectedOption]);

  return (
    <div className="form-text">
      {label && <span className="select-label">{label}</span>}
      <span
        className={
          !disabled || global ? "text-wrapper" : "text-wrapper disabled"
        }
        onClick={() => onClickSetState(true)}
      >
        <Select
          value={obj}
          onChange={setSelectedOption}
          options={data}
          placeholder={placeHolder}
        />
        <span className="tool-box">
          {update && (
            <Fragment>
              {!disabled && update && (
                <i
                  className="fas fa-check tickIcon"
                  onClick={() => setDisabled(true)}
                ></i>
              )}
              {disabled && !global && (
                <i className="fa fa-pen" onClick={() => setDisabled(false)}></i>
              )}
            </Fragment>
          )}
        </span>
        {onClickState && <span className="error">{error}</span>}
      </span>
    </div>
  );
};

export default DropBox;
