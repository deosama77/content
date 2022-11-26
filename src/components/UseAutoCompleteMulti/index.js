import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import {audience_api, basic_api} from "../../helper/api";
import useFetchOptions from "../../helper/hooks/useFetchOptions";

export default function UseAutoCompleteMulti({
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
    sendData=()=>{}
}) {
    const [autocompleteOptions, setAutocompleteOptions]=useFetchOptions( autocompleteId,autocompleteOptionsRemotly)

    const handleSendData=(event,value)=>{
        sendData({id:value,value:value, field:autocompleteId})
        if(autocompleteId==='audience'&&value.length&&value[value.length-1].length>3){

          let findValueDB= autocompleteOptions
              .find(opetion=> opetion.label.toLowerCase() === value[value.length-1].toLowerCase()
          )
               if(!findValueDB){
                   axios.post(basic_api+audience_api , {label:value[value.length-1]})
                       .then(respone=> {
                           if(respone&&respone.data){
                               setAutocompleteOptions([...autocompleteOptions,respone.data])
                           }
                       })
               }



        }
    }
    return (
    <Autocomplete
      sx={{ width: "100%" }}
      multiple
      id={autocompleteId}
      options={[...new Set(autocompleteOptions.map((option) => option.label))]}
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
