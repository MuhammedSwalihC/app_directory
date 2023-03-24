import React, { Fragment, useState } from "react";
import { handleInputChange } from "react-select/dist/declarations/src/utils";
import { Button } from "../CustomComponents/Button/Buttons";
import { Container, WorkArea } from "../Forms/FormContainers";
import "./filterComponent.scss";

interface Props {
  handleInputChange?: any;
  name?: any;
  value?: any;
  checked?: any;
  columns?: any;
  inputChange?: any;
  handleFilterSubmit?: any;
  defaultColumns?: any;
}

export const Filter: React.FC<Props> = ({ handleInputChange, name, value }) => {
  const [isChecked, setChecked] = useState<any>(false);
  const checked = (e: any) => {
    if (e.target.checked === false) {
      handleInputChange(e);
    }
    setChecked(e.target.checked);
  };
  return (
    name && (
      <div className="filter-box">
        <span className="filter-label">
          <input type="checkbox" name={name} onChange={checked} />
          <label>{name && name.replace(/_/g, " ")}</label>
        </span>
        {isChecked && (
          <span className={`filter-set`}>
            <select name={name} onChange={handleInputChange}>
              <option value="eq">=</option>
              <option value="ne">!=</option>
            </select>
            <input
              name={name}
              value={value}
              onChange={handleInputChange}
              type="text"
            />
          </span>
        )}
      </div>
    )
  );
};

export const FilterComponent: React.FC<Props> = ({
  columns,
  inputChange,
  handleFilterSubmit,
  defaultColumns,
}) => {
  return (
    <Container
      className={"form-container width-small col"}
      styles={{ marginLeft: "5px", padding: "20px" }}
    >
      <WorkArea
        className={"work-area width-full fixed-height col"}
        styles={{ marginLeft: "5px", padding: "20px" }}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((name: any, key: any) => {
            if (defaultColumns.includes(name)) {
              return (
                <Filter key={key} name={name} handleInputChange={inputChange} />
              );
            }
          })}
      </WorkArea>
      <WorkArea
        className={"work-area width-full"}
        styles={{ marginLeft: "5px", padding: "20px" }}
      >
        <Button
          value="Filter"
          className={"btn-success width-full"}
          handleSubmit={handleFilterSubmit}
        />
      </WorkArea>
    </Container>
  );
};
