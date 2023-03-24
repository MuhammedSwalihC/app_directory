import * as React from "react";

export const handleInputChange = (e: any, filter: any, setFilter: any) => {
  if (!filter.hasOwnProperty(e.target.name)) {
    setFilter({
      ...filter,
      [e.target.name]: { value: null, type: "eq" },
    });
  } else {
    if (e.target.localName === "select") {
      setFilter({
        ...filter,
        [e.target.name]: {
          ...filter[e.target.name],
          type: e.target.value,
        },
      });
    } else if (e.target.localName === "input") {
      if (e.target.hasOwnProperty("checked") && e.target.checked === false) {
        delete filter[e.target.name];
        setFilter(filter);
      } else {
        setFilter({
          ...filter,
          [e.target.name]: {
            ...filter[e.target.name],
            value: e.target.value,
          },
        });
      }
    }
  }
};

export const handleColumnSelect = (
  e: any,
  defaultColumns: any,
  setDefaultColumn: any
) => {
  if (e.target.checked) {
    setDefaultColumn([...defaultColumns, e.target.name]);
  } else {
    defaultColumns.splice(defaultColumns.indexOf(e.target.name), 1);
    setDefaultColumn(defaultColumns);
  }
};

export const createRows = (
  rows: any,
  columns: any,
  edit: any,
  navigate?: any
) => {
  const listItems = rows.map((row: any, key: any) => {
    return (
      <tr key={key}>
        {columns.map((column: any, key1: any) => {
          return <td key={key1}>{row[column]}</td>;
        })}
        <td width="200px">
          <i
            className="fa fa-pen"
            onClick={() => navigate(`/${edit}/${row.id}`)}
          />
        </td>
      </tr>
    );
  });
  return listItems;
};
