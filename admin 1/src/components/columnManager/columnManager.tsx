import React, { Fragment, useState } from "react";
import { Button } from "../CustomComponents/Button/Buttons";
import { Modal } from "../CustomComponents/ModalBox/Modal";
import { Container, WorkArea } from "../Forms/FormContainers";

interface Props {
  columns?: any;
  handleInputChange?: any;
  setColumns?: any;
  defaultColumns?: any;
  checked?: any;
  name?: any;
}

export const Column: React.FC<Props> = ({
  handleInputChange,
  name,
  checked,
}) => {
  const [active, setActive] = useState<any>(null);
  const setAction = (e: any) => {
    setActive(e.target.checked);
    handleInputChange(e);
  };
  return (
    name && (
      <div className="filter-box">
        <span className="filter-label">
          {}
          <input
            type="checkbox"
            name={name}
            onChange={setAction}
            checked={active === null ? checked : active}
          />
          <label>{name && name.replace(/_/g, " ")}</label>
        </span>
      </div>
    )
  );
};

export const ColumnManager: React.FC<Props> = ({
  columns,
  setColumns,
  defaultColumns,
  handleInputChange,
}) => {
  return (
    <Modal>
      <WorkArea className={"work-area width-x-small fixed-height col"}>
        <WorkArea className={"work-area width-full  fixed-height col"}>
          <Container
            className={"form-container width-full col"}
            styles={{ padding: "15px" }}
          >
            {columns &&
              columns.length > 0 &&
              columns.map((name: any, key: any) => {

                return (
                  <Column
                    name={name}
                    checked={defaultColumns.includes(name)}
                    handleInputChange={handleInputChange}
                  />
                );
              })}
          </Container>
        </WorkArea>
        <WorkArea className={"work-area width-full"}>
          <Container
            className={"form-container width-full"}
            styles={{ padding: "15px" }}
          >
            <Button
              value="Select"
              className={"btn-success width-full"}
              handleSubmit={setColumns}
            />
          </Container>
        </WorkArea>
      </WorkArea>
    </Modal>
  );
};
