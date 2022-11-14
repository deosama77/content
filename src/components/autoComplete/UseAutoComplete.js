import { useState, Fragment } from "react";
import TextField from "@mui/material/TextField";

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import DialogAutoComplete from "./DialogAutoComplete";

const filter = createFilterOptions();

export default function UseAutoComplete({
  autocompleteId = "-1",
  autocompleteOptionsRemotly = [],
  sendData=()=>{}
}) {
  const [value, setValue] = useState(null);
  const [openDialog, toggleOpenDialog] = useState(false);
  const [autocompleteOptions, setAutocompleteOptions] = useState(
    autocompleteOptionsRemotly
  );
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
    sendData({
      label: dialogValue.label,
      id:dialogValue.id
    })
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
      sendData(newValue)
      setValue(newValue);
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
