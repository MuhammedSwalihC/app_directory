import { Console } from "console";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ColumnManager } from "../../components/columnManager/columnManager";
import { SelectBox, TextInput } from "../../components/CustomComponents";
import { Button } from "../../components/CustomComponents/Button/Buttons";
import { Modal } from "../../components/CustomComponents/ModalBox/Modal";
import { TableContainer } from "../../components/CustomComponents/Table/TableContainer";
import DepartmentModal from "../../components/Forms/department/DepartmentModal";
import { Container, WorkArea } from "../../components/Forms/FormContainers";
import { Pagination } from "../../components/Pagination/pagination";
import { useAppSelector } from "../../redux/hooks";
import { Apps } from "../../redux/reducers/apps.thunks";
import { defaultAccountColumns } from "../../utils/defaultColumns";
import { departmentinitialValue } from "../../utils/initializers";

interface Props {
  children?: any;
}

const DepartmentList: React.FC<Props> = () => {
  const { department, modules } = useAppSelector<any>((state) => state.apps);
  const [state, setState] = useState<any>(departmentinitialValue);
  const [departmentId, setDepartmentId] = useState<any>("");
  const [modal, modalOpen] = useState<any>(false);
  const [editModal, setEditModalOpen] = useState<any>(false);
  const [filterOpen, setfilterOpen] = useState<any>(false);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(
      Apps({
        method: "LIST",
        module: "teachersList",
        fields: "teacher",
      })
    );
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(
      Apps({
        method: "POST",
        data: state,
        module: "departmentPost",
        fields: "department",
      })
    );
    modalOpen(false);
  };

  const handleEditSubmit = () => {
    dispatch(
      Apps({
        method: "PATCH",
        data: state,
        module: "departmentPatch",
        fields: "department",
        id: departmentId,
      })
    );
    setEditModalOpen(false);
  };

  const pageSelection = (pageNumber: any) => {
    dispatch(
      Apps({
        method: "LIST",
        data: { model: "accounts", pagination: { page: pageNumber } },
        module: "listItems",
        fields: "accounts",
        clearField: "account",
      })
    );
  };

  return (
    <WorkArea
      className={"work-area width-full fixed-height col"}
      styles={{ paddingLeft: "10px" }}
    >
      <WorkArea
        className={"work-area width-full"}
        styles={{ padding: "10px 0px" }}
      >
        <Container
          className={"form-container width-full"}
          styles={{ justifyContent: "space-evenly" }}
        >
          <Container
            className={"form-container width-half full-height"}
            styles={{ justifyContent: "flex-start" }}
          >
            <span
              onClick={() => modalOpen(true)}
              className="fa-light fa-plus"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "20px",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "green",
              }}
            />
            <Pagination pageSelection={pageSelection} />
          </Container>
          <Container
            className={"form-container width-half"}
            styles={{ justifyContent: "flex-end" }}
          ></Container>
        </Container>
      </WorkArea>

      <WorkArea className={"work-area width-full fixed-height"}>
        <Container
          className={"form-container width-full"}
          styles={{
            alignItems: "flex-start",
            padding: "0px 20px",
            overflowX: "auto",
          }}
        >
          <TableContainer className={"width-full"}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>
                  Actions
                  <span
                    onClick={() => setfilterOpen(filterOpen === false)}
                    className="fa-light fa-bars-filter"
                    style={{
                      float: "right",
                      fontSize: "18px",
                      paddingRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {department &&
                department.length > 0 &&
                department.map((data: any, key: any) => {
                  
                  return (
                    <tr key={key}>
                      <td>{data.first_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.email_address}</td>
                      <td>{data.phone_number}</td>
                      <td
                        width="200px"
                        onClick={() => {
                          setEditModalOpen(true);
                          setState({
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email_address: data.email_address,
                            phone_number: data.phone_number,
                          });
                          setDepartmentId(data.id);
                        }}
                      >
                        <i className="fa fa-pen" />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </TableContainer>
        </Container>
      </WorkArea>
      {modal && (
        <DepartmentModal
          data={state}
          handleChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonTitle="Add"
          setModal={modalOpen}
        />
      )}
      {editModal && (
        <DepartmentModal
          data={state}
          handleChange={handleInputChange}
          handleSubmit={handleEditSubmit}
          buttonTitle="Edit"
          setModal={setEditModalOpen}
        />
      )}
    </WorkArea>
  );
};
export default DepartmentList;
