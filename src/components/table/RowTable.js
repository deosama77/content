import React from "react";
import UseAutoComplete from "../autoComplete/UseAutoComplete";
import AutoCompleteComboBo from "../AutoCompleteComboBox";
import AutoCompleteFreeSolo from "../AutoCompleteFreeSolo";
import UseInputTextField from "../UseInputTextField";
import styles from "./Table.module.css";

function RowTable({ fields = [] }) {
  const getContentField = ({ text, typeInput }) => {
    if (text && text !== "") {
      return text;
    } 
    else if (typeInput === "textField") {
      return <UseInputTextField></UseInputTextField>;
    } else if (typeInput === "autoComplete") {
      return <UseAutoComplete></UseAutoComplete>;
    } else if(typeInput==='AutoCompleteComboBox'){
      return <AutoCompleteComboBo></AutoCompleteComboBo>
    }else if(typeInput==='AutoCompleteFreeSolo'){
      return <AutoCompleteFreeSolo></AutoCompleteFreeSolo>
    }
    else {
      return "";
    }
  };

  const rowFields = fields.map(
    ({ rowHeader, colHeader, text = "", typeInput } , i) => (
      <td key={i+text}
        className={
          rowHeader ? styles.row_header : colHeader ? styles.col_header : ""
        }
      >
        {getContentField({ text, typeInput })}
      </td>
    )
  );
  return <tr>{rowFields}</tr>;
}

export default RowTable;
