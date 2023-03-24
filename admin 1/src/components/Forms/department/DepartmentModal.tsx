import React, { FC, useRef } from "react";
import { useOutsideEvent } from "../../../hooks/checkOutsideClick";
import { DepartmentInterface } from "../../../utils/interfaces";
import { Description, TextInput } from "../../CustomComponents";
import { Button } from "../../CustomComponents/Button/Buttons";
import { Modal } from "../../CustomComponents/ModalBox/Modal";
import { Container, WorkArea } from "../FormContainers";

interface IProps {
  data: DepartmentInterface;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  buttonTitle: string;
  setModal: (value: boolean) => void;
}

const DepartmentModal: FC<IProps> = ({
  data,
  handleChange,
  handleSubmit,
  buttonTitle,
  setModal,
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
              name="first_name"
              Placeholder={"First Name"}
              handleInputChange={handleChange}
              value={data.first_name}
            />
            <TextInput
              name="last_name"
              Placeholder={"Last Name"}
              handleInputChange={handleChange}
              value={data.last_name}
            />
            <TextInput
              name="email_address"
              Placeholder={"Email"}
              handleInputChange={handleChange}
              value={data.email_address}
            />
            <TextInput
              name="phone_number"
              Placeholder={"Phone Number"}
              handleInputChange={handleChange}
              value={data.phone_number}
            />
            <Container
              className={"form-container width-full col"}
              styles={{ padding: "0px 20px" }}
            >
              <Button
                className="btn-success"
                value={buttonTitle}
                handleSubmit={handleSubmit}
              />
            </Container>
          </Container>
        </div>
      </WorkArea>
    </Modal>
  );
};

export default DepartmentModal;
