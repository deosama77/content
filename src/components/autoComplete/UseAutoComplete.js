import {useState, Fragment} from "react";
import TextField from "@mui/material/TextField";

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import DialogAutoComplete from "./DialogAutoComplete";
import useFetchOptions from "../../helper/hooks/useFetchOptions";
import {postNewOptions} from "../../helper/help";



const filter = createFilterOptions();

export default function UseAutoComplete({
  headerForm ="",
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
  sendData=()=>{}
}) {
  const [value, setValue] = useState(null);
  const [openDialog, toggleOpenDialog] = useState(false);
  const [autocompleteOptions, setAutocompleteOptions]=useFetchOptions( autocompleteId,autocompleteOptionsRemotly)
  const [addToOptionschecked, setaddToOptionschecked] = useState(true);

  const [dialogValue, setDialogValue] = useState({
    label: "",
    id:""
  });

  const handleClose = () => {
    setDialogValue({
      label: "",
      id:""
    });
    toggleOpenDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      label: dialogValue.label,
      id:dialogValue.id
    });
    if(dialogValue&&dialogValue.label&&addToOptionschecked){
      sendData(
          {id:dialogValue.id,value:dialogValue.label, field:autocompleteId})
         if(dialogValue.label.length>2){
           postNewOptions(dialogValue , autocompleteId, headerForm)
         }
    }else {
      sendData({id:null,value:null, field:autocompleteId})
    }

    handleClose();
  };

  const handleChangeAutoComplete = (event, newValue) => {
    if (typeof newValue === "string") {
      // timeout to avoid instant validation of the dialog's form.
      setTimeout(() => {
        toggleOpenDialog(true);
        setDialogValue({
          label: newValue,
          id:newValue
        });
      });
    } else if (newValue && newValue.inputValue) {
      toggleOpenDialog(true);
      setDialogValue({
        label: newValue.inputValue,
        id:newValue.inputValue
      });
    } else {
      setValue(newValue);
      if(newValue){
        sendData({id:newValue.id,value:newValue.label, field:autocompleteId})
      }else {
        sendData({id:null,value:null, field:autocompleteId})
      }

    }
  };

  const getAutocompleteFilterOpetion = (options, params) => {
    const filtered = filter(options, params);

    if (params.inputValue !== ""&& !filtered.length) {
      filtered.push({
        inputValue: params.inputValue,
        label: `Add "${params.inputValue}"`,
      });
    }
    return filtered;
  };

  const getAutocompleteOptionLabel = (option) => {
    if (typeof option === "string") {
      return option;
    }
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  };

  const getAutocompleteRenderInput = (params) => (
    <TextField {...params} variant="standard" />
  );

  const getAutoCompleteRenderOption = (props, option) => (
    <li {...props}>{option.label}</li>
  );

  return (
    <Fragment>
      <Autocomplete
        sx={{ width: "100%" }}
        options={autocompleteOptions}
        value={value}
        id={autocompleteId}
        freeSolo
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        onChange={(event, newValue) =>
          handleChangeAutoComplete(event, newValue)
        }
        filterOptions={(options, params) =>
          getAutocompleteFilterOpetion(options, params)
        }
        getOptionLabel={(options) => getAutocompleteOptionLabel(options)}
        renderOption={(props, option) =>
          getAutoCompleteRenderOption(props, option)
        }
        renderInput={(params) => getAutocompleteRenderInput(params)}
      />
      <DialogAutoComplete
        open={openDialog}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        addToOptionschecked={addToOptionschecked}
        setaddToOptionschecked={setaddToOptionschecked}
        setAutocompleteOptions={setAutocompleteOptions}
        dialogValue={dialogValue}
        setDialogValue={setDialogValue}
        dialogContentText="Did you miss any paltform in our list? Please, add it!"
        dialogTitle="Add a new platform"
        textFieldId="1"
      ></DialogAutoComplete>
    </Fragment>
  );
}
