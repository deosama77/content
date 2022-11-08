import React from "react";
import CustomTable from "../components/table/CustomTable";
import {ContentEngineeringTableRows} from "./helper";

function ContentEngineering(props) {
  return (
    <div>
      <CustomTable
        tableRows={ContentEngineeringTableRows}
        headerForm="Content Engineering"
      ></CustomTable>
    </div>
  );
}

export default ContentEngineering;
