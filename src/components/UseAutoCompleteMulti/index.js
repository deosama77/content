import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


export default function UseAutoCompleteMulti({
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
    sendData=()=>{}
}) {
    const handleSendData=(event,value)=>{
        sendData({id:value,value:value, field:autocompleteId})
    }
    return (
    <Autocomplete
      sx={{ width: "100%" }}
      multiple
      id={autocompleteId}
      options={autocompleteOptionsRemotly.map((option) => option.label)}
      freeSolo
      renderTags={(value, getTagProps) =>{
          return  value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
         }
      }
       onChange={(e, value)=>handleSendData(e,value)}
      renderInput={(params) => <TextField {...params} variant="standard"  />}
    />
  );
}
