import React from "react";
import styles from "./Table.module.css";
import UseInputTextField from "../../components/UseInputTextField";
import RowTable from "./RowTable";

function CustomTable({tableRows=[] , headerForm=""}) {
  const tableRowsMap = tableRows.map(({ name, fields }) => {
    return <RowTable name={name} fields={fields}></RowTable>;
  });
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3} className={styles.row_header}>
            {headerForm}
          </th>
        </tr>
      </thead>
      <tbody>{tableRowsMap}</tbody>
    </table>
  );
}

export default CustomTable;
