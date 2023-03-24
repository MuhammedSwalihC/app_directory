import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ColumnManager } from "../../components/columnManager/columnManager";
import { SelectBox, TextInput } from "../../components/CustomComponents";
import { Button } from "../../components/CustomComponents/Button/Buttons";
import { Modal } from "../../components/CustomComponents/ModalBox/Modal";
import { TableContainer } from "../../components/CustomComponents/Table/TableContainer";
import { Container, WorkArea } from "../../components/Forms/FormContainers";
import UserModal from "../../components/Forms/user/UserModal";
import { Pagination } from "../../components/Pagination/pagination";
import { useAppSelector } from "../../redux/hooks";
import { Apps } from "../../redux/reducers/apps.thunks";
import { userinitialValue } from "../../utils/initializers";

interface Props {
  children?: any;
}

export const UserList: React.FC<Props> = () => {
  const { users, modules, department } = useAppSelector<any>(
    (state) => state.apps
  );
  const [state, setState] = useState<any>(userinitialValue);
  const [modal, modalOpen] = useState<any>(false);
  const [filterOpen, setfilterOpen] = useState<any>(false);
  const dispatch = useDispatch<any>();
  const departmentData = useMemo(
    () => department.map((i: any) => ({ label: i.name, value: i.id })),
    [department]
  );
  useEffect(() => {
    dispatch(
      Apps({
        method: "LIST",
        module: "userList",
        fields: "users",
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
        module: "adduserPost",
        fields: "users",
      })
    );
    modalOpen(false);
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
              <th>Id</th>
                <th>User</th>
                <th>Email</th>
                <th>Role Name</th>
                {/* <th>
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
                </th> */}
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((data: any, key: any) => {
                  return (
                    <tr key={key}>
                      <td>{data.id}</td>
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.role}</td>
                      {/* <td width="200px">
                        <i className="fa fa-pen" />
                      </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </TableContainer>
        </Container>
      </WorkArea>
      {modal && (
        <UserModal
          buttonTitle="Add"
          data={state}
          departmentOptions={departmentData}
          handleChange={handleInputChange}
          handleSubmit={handleSubmit}
          moduleOptions={modules}
          setModal={modalOpen}
        />
      )}
    </WorkArea>
  );
};
