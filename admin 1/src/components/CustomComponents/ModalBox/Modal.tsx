import React, { useRef, useState } from "react";
import { Container } from "../../Forms/FormContainers";
import { Button } from "../Button/Buttons";
import "./Modal.scss";

interface Props {
  children?: React.ReactNode;
  name?: string | null | undefined;
  styles?: any;
  className?: any;
  handleUpload?: any;
  setUploadModal?: any;
  headerText?: any;
}

export const Modal: React.FC<Props> = ({ children, styles }) => {
  return (
    <div className="modal-background" style={styles}>
      {children}
    </div>
  );
};

export const ModalUpload: React.FC<Props> = ({
  handleUpload,
  setUploadModal,
  headerText,
}) => {
  const [state, setState] = useState<any>();
  const fileOpen: any = useRef();
  const showOpenFileDialog = () => {
    fileOpen.current.click();
  };

  return (
    <Modal>
      <Container
        className={"form-container width-small col"}
        styles={{ justifyContent: "center" }}
      >
        <Container
          className={"form-container width-full"}
          styles={{
            alignItems: "center",
            paddingLeft: "20px",
            height: "40px",
            justifyContent: "flex-start",
            marginBottom: "10px",
            borderBottom: "1px solid rgba(221, 221, 221, 0.925)",
          }}
        >
          {headerText}
        </Container>
        <Container
          className={"form-container width-full col"}
          styles={{
            padding: "20px",
            justifyContent: "flex-start",
          }}
        >
          <Container
            className={"form-container width-full col"}
            styles={{
              alignItems: "center",
              justifyContent: "center",
              lineHeight: "20px",
              border: "1px solid rgba(221, 221, 221, 0.925)",
              minHeight: "120px",
            }}
          >
            <input
              type="file"
              id="file"
              ref={fileOpen}
              onChange={(e: any) => setState(e.target.files[0])}
              style={{ display: "none" }}
            />
            <p>
              Drop files here or{" "}
              <span
                onClick={showOpenFileDialog}
                style={{ color: "blue", fontWeight: "bold", cursor: "pointer" }}
              >
                Browse
              </span>
            </p>
            <p>Max file size : 3mb</p>
            <p>Support only Excel & CSV</p>
          </Container>

          <Container
            className={"form-container width-full"}
            styles={{ justifyContent: "flex-end" }}
          >
            <Button
              className="btn-cancel width-small"
              styles={{ padding: "10px", width: "120px" }}
              value="Close"
              handleSubmit={() => setUploadModal(false)}
            />
            <Button
              className="btn-success width-small"
              value="Upload"
              styles={{ padding: "10px", width: "120px" }}
              handleSubmit={() => handleUpload(state)}
            />
          </Container>
        </Container>
      </Container>
    </Modal>
  );
};
