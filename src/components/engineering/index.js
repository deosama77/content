import React from "react";
import CustomTable from "../tableForm/CustomTable";


function ContentEngineering({contentEngineeringTableRows=[]}) {

    return (
    <div>
      <CustomTable
        tableRows={contentEngineeringTableRows}
        headerForm="Content Engineering"
      ></CustomTable>
    </div>
  );
}

export default ContentEngineering;
