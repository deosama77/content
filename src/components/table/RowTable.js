import React from "react";
import UseAutoComplete from "../autoComplete/UseAutoComplete";
import UseAutoCompleteMulti from "../UseAutoCompleteMulti";
import UseInputTextField from "../UseInputTextField";
import styles from "./Table.module.css";

function RowTable({ fields = [] }) {

  const getContentField = ({
    text,
    typeInput,
    autocompleteOptionsRemotly,
    autocompleteId,
    sendData
  }) => {
    if (text && text !== "") {
      return text;
    } else if (typeInput === "textField") {
      return <UseInputTextField></UseInputTextField>;
    } else if (typeInput === "autoComplete") {
      return (
        <UseAutoComplete
          autocompleteId={autocompleteId}
          autocompleteOptionsRemotly={autocompleteOptionsRemotly}
          sendData={sendData}
        ></UseAutoComplete>
      );
    } else if(typeInput==="useAutoCompleteMulti"){
      return <UseAutoCompleteMulti
      autocompleteId={autocompleteId}
      autocompleteOptionsRemotly={autocompleteOptionsRemotly}
      sendData={sendData}
      ></UseAutoCompleteMulti>
    }
    
    else {
      return "";
    }
  };

  const rowFields = fields.map(
    (
      {
        rowHeader,
        colHeader,
        text = "",
        typeInput,
        autocompleteId,
        autocompleteOptionsRemotly,
        sendData
      },
      i
    ) => (
      <td
        key={i + text}
        className={
          rowHeader ? styles.row_header : colHeader ? styles.col_header : ""
        }
      >
        {getContentField({
          text,
          typeInput,
          autocompleteId,
          autocompleteOptionsRemotly,
          sendData
        })}
      </td>
    )
  );
  return <tr>{rowFields}</tr>;
}

export default RowTable;
