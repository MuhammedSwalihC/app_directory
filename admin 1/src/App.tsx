import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./loader.scss";
import Home from "./components/Home";
import DepartmentList from "./containers/DepartmentList/DepartmentList";
import FormSettings from "./containers/FormSettings/FormSettings";
import { UserList } from "./containers/AuthUsersList/UsersList";


function App() {
  return (
    <Fragment>
      <Router>
        <Home>
          <Routes>
          <Route path="users" element={<UserList />} />
            <Route path="department" element={<DepartmentList />} />
            <Route path="form" element={<FormSettings />} />
          </Routes>
        </Home>
      </Router>
    </Fragment>
  );
}

export default App;
