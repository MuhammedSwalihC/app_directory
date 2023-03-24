import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectBox } from "../../components/CustomComponents";
import { TableContainer } from "../../components/CustomComponents/Table/TableContainer";
import ListItem from "../../components/FormSettings/ListItem";
import { useAppSelector } from "../../redux/hooks";
import { Apps } from "../../redux/reducers/apps.thunks";
import "./style.scss";
import Select from "react-select";

const FormSettings = () => {
  const [departmentId, setDepartmentId] = useState<{
    label: string;
    value: string;
  } | null>({ label: "", value: "" });
  const { department, menu } = useAppSelector<any>((state) => state.apps);
  const departmentData = useMemo(
    () => department.map((i: any) => ({ label: i.name, value: i.id })),
    [department]
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(
      Apps({
        method: "GET",
        // data: { model: "department", many: true },
        module: "teachersList",
        fields: "department",
      })
    );
  }, []);
  useEffect(() => {
    const request = {
      method: "LIST",
      data: {
        model: "menu",
        many: true,
        filters: {},
      },
      module: "listItems",
      fields: "menu",
    };
    if (departmentId)
      request.data.filters = {
        department_id: {
          value: departmentId.value,
          type: "eq",
        },
      };
    dispatch(Apps(request));
  }, [departmentId]);

  useEffect(() => {
    if (department)
      setDepartmentId({ label: department[0]?.name, value: department[0]?.id });
  }, [department]);

  const getMenuData = (endpoint: string) => {
    if (!menu) return { id: "", menu: "" };
    else {
      let menuData = menu.find((i: any) => i.endpoints === endpoint);
      if (menuData) return { id: menuData.id, menu: menuData.menu };
      else return { id: "", menu: "" };
    }
  };

  const tableListData = useMemo(
    () => [
      {
        endpoints: "/contacts",
        menu: getMenuData("/contacts").menu,
        moduleName: "Suspect",
        id: getMenuData("/contacts").id,
      },
      {
        endpoints: "/leads",
        menu: getMenuData("/leads").menu,
        moduleName: "Leads",
        id: getMenuData("/leads").id,
      },
      {
        endpoints: "/accounts",
        menu: getMenuData("/accounts").menu,
        moduleName: "Account",
        id: getMenuData("/accounts").id,
      },
    ],
    [department, menu]
  );

  const onSubmit = (data: { menu: string; endpoints: string }) => {
    dispatch(
      Apps({
        method: "POST",
        data: { ...data, department_id: departmentId?.value },
        module: "menuPost",
        fields: "menu",
      })
    );
  };

  const onPatchSubmit = (data: {
    menu: string;
    endpoints: string;
    id: string;
  }) => {
    dispatch(
      Apps({
        method: "PATCH",
        data: { menu: data.menu },
        module: "menuPatch",
        fields: "menu",
        id: data.id,
      })
    );
  };

  return (
    <div className="container">
      <div className="department-selection">
        <Select
          value={departmentId || departmentData[0]}
          onChange={setDepartmentId}
          options={departmentData}
          placeholder={"Select department"}
        />
      </div>
      <TableContainer className={"width-full"}>
        <thead>
          <tr>
            <th>Module</th>
            <th>Menu Name</th>
            <th>End Point</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableListData.map((i) => (
            <ListItem
              endpoints={i.endpoints}
              menu={i.menu}
              key={i.menu + i.endpoints + departmentId?.value}
              onSubmit={onSubmit}
              onPatchSubmit={onPatchSubmit}
              moduleName={i.moduleName}
              id={i.id}
            />
          ))}
        </tbody>
      </TableContainer>
    </div>
  );
};

export default FormSettings;
