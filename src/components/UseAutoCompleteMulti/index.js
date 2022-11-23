import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {audience_api, basic_api} from "../../helper/api";

export default function UseAutoCompleteMulti({
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
    sendData=()=>{}
}) {
    const handleSendData=(event,value)=>{
        console.log("Value > ", value)
        sendData({id:value,value:value, field:autocompleteId})
        if(autocompleteId==='audience'&&value.length&&value[value.length-1].length>3){

          let findValueDB= autocompleteOptionsRemotly
              .find(opetion=> opetion.label.toLowerCase() === value[value.length-1].toLowerCase()
          )
          console.log("valueDB  >> ",findValueDB)
               if(!findValueDB){
                   axios.post(basic_api+audience_api , {label:value[value.length-1]})
               }



        }
    }
    return (
    <Autocomplete
      sx={{ width: "100%" }}
      multiple
      id={autocompleteId}
      options={[...new Set(autocompleteOptionsRemotly.map((option) => option.label))]}
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
