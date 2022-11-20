import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


export default function UseAutoCompleteMulti({
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
    sendData=()=>{}
}) {

    return (
    <Autocomplete
      sx={{ width: "100%" }}
      multiple
      id={autocompleteId}
      options={autocompleteOptionsRemotly.map((option) => option.label)}
      freeSolo
      renderTags={(value, getTagProps) =>{
          sendData({id:value,value, field:autocompleteId})
          return  value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
         }
      }
      renderInput={(params) => <TextField {...params} variant="standard" />}
    />
  );
}
