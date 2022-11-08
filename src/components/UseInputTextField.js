import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

function UseInputTextField(props) {
  const [name,setName]=useState("");
  const handleChange=(e)=>{setName(e.target.value)}
  return (
    <FormControl variant="standard" sx={{width:215}}>
      <Input value={name} onChange={handleChange} />
    </FormControl>
  );
}

export default UseInputTextField;
