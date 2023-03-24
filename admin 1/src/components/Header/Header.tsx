import React, { useMemo, useState } from "react";
import "./Header.scss";
import profileLogo from "../../assets/images/profile-pic.jpg";
import { SearchBox } from "../CustomComponents/SearchBox/SearchBox";
import { useLocation } from "react-router";

interface Props {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
}

export const Header: React.FC<Props> = ({ setClose, close }) => {
  const location = useLocation();
  const initProfile = { profile: false };
  const [profile, setProfile] = useState<boolean | undefined>(false);
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const title = useMemo(() => {
    if (location.pathname.includes("users")) return "Users";
    else if (location.pathname.includes("department")) return "Department";
    else if (location.pathname.includes("form")) return "Sales Form";
    else return "Dashboard";
  }, [location]);
  return (
    <div className="header-layout">
      <div className={`logo-box ${close && "close"}`}>
      </div>
      <div className="header-left">
        <span className="bar-button">
          <i
            className="fa fa-bars"
            onClick={() => setClose(close === false)}
          ></i>
        </span>
        <span className="form-title">
          <p>{title}</p>
        </span>
      </div>
      <div className="header-right">
        <SearchBox styles={{ height: "80px", width: "400px" }} icon />

        <div className="settings-group">
          <div className="far fa-bell right-groups"></div>
          <div className="settings">
            <div className="fa fa-cog right-groups" />
            {/* <div className="settings-dropdown">
              <ul>
                <li>Form Settings</li>
              </ul>
            </div> */}
          </div>

          <div
            className="profile right-groups"
            onClick={() => setProfile(profile === false)}
          >
            <img src={profileLogo} alt="" />
          </div>
          {profile && (
            <div className="profile-actions">
              <span>Profile</span>
              <span onClick={Logout}>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
