import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./SideBar.scss";

interface Props {
  close: boolean;
}

export const SideBar: React.FC<Props> = ({ close }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname.includes(path) ? "active" : "";
  return (
    <div className={`side-bar ${close && "close"}`}>
      <ul>
        <li onClick={() => navigate("/")}>
          <span>
            <i
              className={`fa fa-laptop ${close ? "icon-only" : "menu-text"}`}
            ></i>
            {!close && <span>Dashboard</span>}
          </span>
        </li>
        {/* <li className={isActive("/users")} onClick={() => navigate("/users")}>
          <span>
            <i
              className={`fa fa-users ${close ? "icon-only" : "menu-text"}`}
            ></i>
            {!close && <span>Users</span>}
          </span>
        </li> */}
        <li
          className={isActive("/department")}
          onClick={() => navigate("/department")}
        >
          <span>
            <i
              className={`fa-solid fa-sitemap ${
                close ? "icon-only" : "menu-text"
              }`}
            ></i>
            {!close && <span>Teachers</span>}
          </span>
        </li>
        {/* <li className={isActive("/form")} onClick={() => navigate("/form")}>
          <span>
            <i
              className={`fa-regular fa-file-lines ${
                close ? "icon-only" : "menu-text"
              }`}
            ></i>
            {!close && <span>Sales Form</span>}
          </span>
        </li> */}
      </ul>
    </div>
  );
};
