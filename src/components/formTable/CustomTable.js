import React from "react";
import styles from "./Table.module.css";
import RowTable from "./RowTable";

function CustomTable({tableRows=[] , headerForm=""}) {
  const tableRowsMap = tableRows.map(({ name, fields  } , i) => {
    return <RowTable name={name} fields={fields} key={i+name} headerForm={headerForm}></RowTable>;
  });
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2} className={styles.row_header}>
            {headerForm}
          </th>
        </tr>
      </thead>
      <tbody>{tableRowsMap}</tbody>
    </table>
  );
}

export default CustomTable;
