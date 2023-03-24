import React, { Fragment, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Header } from "../Header/Header";
import { MainLayout } from "./Main/Main";
import { SideBar } from "./SideBar/SideBar";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Dashboard } from "../../containers/Dashboard/dashboard";
import { Login } from "../../containers/Authentication/login";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Apps } from "../../redux/reducers/apps.thunks";
import DepartmentList from "../../containers/DepartmentList/DepartmentList";

interface Props {
  children?: any;
}

const Home: React.FC<Props> = ({ children }) => {
  const { registration_status } = useAppSelector<any>((state) => state.apps);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      Apps({
        // data: {
        //   model: "registration_status",
        // },
        // method: "LIST",
        // module: "listItems",
        // fields: ["registration_status"],
        method: "GET",
        module: "teachersList",
        fields: "department",
      })
    );
  }, []);

  const dashBoard = useLocation().pathname === "/";
  const [close, setClose] = useState(false);
  const token = localStorage.getItem("token");
  let expired = token ? false : true;

  if (token) {
    const userInfo: any = jwtDecode(token);
    const expireTime = new Date(userInfo.exp * 1000);
    const currentTime = new Date();
    expired = currentTime >= expireTime;
  }

  return (
    <Fragment>
      {!expired ? (
        <Fragment>
          <Header setClose={setClose} close={close} />
          <MainLayout>
            <SideBar close={close} />
            {dashBoard && <Dashboard />}
            {children}
            <Outlet />
          </MainLayout>
        </Fragment>
      ) : (
        <Fragment>
          
            <DepartmentList />
          : (
            <Login />
          )
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
