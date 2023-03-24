import React, { FC, useEffect, useMemo, useState } from "react";

interface IProps {
  menu: string;
  endpoints: string;
  onSubmit: (data: { menu: string; endpoints: string }) => void;
  onPatchSubmit: (data: {
    menu: string;
    endpoints: string;
    id: string;
  }) => void;
  moduleName: string;
  id: string;
}

interface IMenuInput {
  menuData: string;
  showError: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MenuInput: FC<IMenuInput> = ({ menuData, handleChange, showError }) => {
  return (
    <>
      <input type="text" onChange={handleChange} value={menuData} />
      {showError && <span>Menu name is required</span>}
    </>
  );
};

const ListItem: FC<IProps> = ({
  endpoints,
  onSubmit,
  onPatchSubmit,
  menu,
  moduleName,
  id,
}) => {
  const [menuData, setMenuData] = useState(menu || "");
  const [EditMode, setEditMode] = useState(false);
  const [showError, setShowError] = useState(false);
  const isCreated = useMemo(() => id !== "", [id]);
  const toggleEditMode = () => setEditMode(!EditMode);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setMenuData(e.target.value);
  };
  const handleSubmit = () => {
    if (menuData === "") setShowError(true);
    else if (!isCreated) {
      toggleEditMode();
      onSubmit({ endpoints, menu: menuData });
    } else {
      toggleEditMode();
      onPatchSubmit({ endpoints, menu: menuData, id });
    }
  };
  const cancelEdit = () => {
    setMenuData(menu);
    toggleEditMode();
  };

  useEffect(() => {
    setMenuData(menuData);
  }, [menu]);
  return (
    <tr className="form-item">
      <td style={{ textTransform: "capitalize" }}>{moduleName}</td>
      <td>
        {EditMode ? (
          <MenuInput
            handleChange={handleChange}
            menuData={menuData}
            showError={showError}
          />
        ) : (
          <label>{menuData}</label>
        )}
      </td>
      <td>{endpoints}</td>
      <td>
        {EditMode ? (
          <>
            <button className="save-btn" onClick={handleSubmit}>
              Save
            </button>
            <button className="save-btn" onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button className="save-btn" onClick={toggleEditMode}>
            {isCreated ? "Edit" : "Create"}
          </button>
        )}
      </td>
    </tr>
  );
};

export default ListItem;
