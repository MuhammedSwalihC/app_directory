import React, { FC, useRef } from "react";
import { useOutsideEvent } from "../../../hooks/checkOutsideClick";
import { userInterface } from "../../../utils/interfaces";
import { SelectBox, TextInput } from "../../CustomComponents";
import { Button } from "../../CustomComponents/Button/Buttons";
import { Modal } from "../../CustomComponents/ModalBox/Modal";
import { Container, WorkArea } from "../FormContainers";

interface IProps {
  data: userInterface;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  buttonTitle: string;
  setModal: (value: boolean) => void;
  moduleOptions: any;
  departmentOptions: any;
}

const UserModal: FC<IProps> = ({
  buttonTitle,
  data,
  handleChange,
  handleSubmit,
  setModal,
  moduleOptions,
  departmentOptions,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useOutsideEvent(modalRef, setModal);
  return (
    <Modal>
      <WorkArea
        className={"work-area width-full full-height"}
        styles={{ padding: "20px", justifyContent: "center" }}
      >
        <div
          className={"form-container width-half position-relative"}
          ref={modalRef}
          style={{ justifyContent: "center", height: "400px" }}
        >
          <button
            className="position-absolute"
            style={{
              padding: "0px",
              borderRadius: "9999px",
              borderWidth: "0px",
              right: "-12px",
              top: "-12px",
              cursor: "pointer",
            }}
            onClick={() => setModal(false)}
          >
            <i
              className="fa-solid fa-circle-xmark"
              style={{ fontSize: "30px", color: "#dc2121" }}
            />
          </button>
          <Container
            className={"form-container width-medium col"}
            styles={{ alignItems: "center", marginTop: "40px" }}
          >
            <TextInput
              name="email"
              Placeholder={"Email"}
              handleInputChange={handleChange}
            />
            <SelectBox
              name="module_id"
              placeHolder={"Select Module"}
              data={moduleOptions && moduleOptions}
              value={data.module_id || ""}
              handleInputChange={handleChange}
            />
            <SelectBox
              name="department_id"
              placeHolder={"Select Department"}
              data={departmentOptions && departmentOptions}
              value={data.department_id || ""}
              handleInputChange={handleChange}
            />
            <TextInput
              name="domain_name"
              Placeholder={"Domain Name"}
              handleInputChange={handleChange}
            />
            <Container
              className={"form-container width-full col"}
              styles={{ padding: "0px 20px" }}
            >
              <Button
                className="btn-success"
                value="ADD"
                handleSubmit={handleSubmit}
              />
            </Container>
          </Container>
        </div>
      </WorkArea>
    </Modal>
  );
};

export default UserModal;
