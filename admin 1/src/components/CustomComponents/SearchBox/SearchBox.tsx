import React from "react";
import "./SearchBox.scss";

interface Props {
  value?: any;
  handleInputChange?: any;
  name?: string | undefined;
  styles?: any;
  icon?: any;
}

export const SearchBox: React.FC<Props> = ({
  value,
  handleInputChange,
  name,
  styles,
  icon = false,
}) => {
  return (
    <div className="search-area" style={styles}>
      <div className="search-box" style={{ width: "100%", minHeight: "50px" }}>
        <input
          className="search-input"
          type="text"
          name={name}
          onChange={handleInputChange}
          value={value}
        />
        {icon && <i className="fa fa-search"></i>}
      </div>
    </div>
  );
};
