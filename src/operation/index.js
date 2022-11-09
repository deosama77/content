import React from "react";
import CustomTable from "../components/table/CustomTable";
import { OperationTableRows } from "./helper";
function ContentOperation() {
  return (
     <div>
      <CustomTable
        tableRows={OperationTableRows}
        headerForm="Content Operation"
      ></CustomTable>
    </div>
  );
}

export default ContentOperation;
