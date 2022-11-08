import React from "react";
import UseAutoComplete from "../autoComplete/UseAutoComplete";
import UseInputTextField from "../UseInputTextField";
import styles from "./Table.module.css";

function RowTable({ fields = [] }) {
  const getContentField = ({ text, typeInput }) => {
    if (text && text !== "") {
      return text;
    } 
    // else if (typeInput === "textField") {
    //   return <UseInputTextField></UseInputTextField>;
    // } else if (typeInput === "autoComplete") {
    //   return <UseAutoComplete></UseAutoComplete>;
    // } 
    else {
      return "";
    }
  };

  const rowFields = fields.map(
    ({ rowHeader, colHeader, text = "", typeInput }) => (
      <td
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
