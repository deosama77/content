import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const filter = createFilterOptions();

export default function UseAutoComplete() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);
  const [platfomrs, setPlatfoms] = React.useState([
    { title: "Platform 1", year: 1994 },
    { title: "Platform 2", year: 1972 },
    { title: "Platform 3", year: 1974 },
    { title: "Platform 4", year: 2008 },
    { title: "Platform 5", year: 1994 },
    { title: "Platform 6", year: 1972 },
    { title: "Platform 7", year: 1974 },
    { title: "Platform 8", year: 2008 },
    { title: "Platform 9", year: 1994 },
    { title: "Platform 10", year: 1972 },
    { title: "Platform 11", year: 1974 },
    { title: "Platform 12", year: 2008 },
  ]);

  const [checked, setChecked] = React.useState(true);

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
    year: "",
  });

  const handleClose = () => {
    setDialogValue({
      title: "",
      year: "",
    });
    toggleOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleAddPlatform = () => {
    if(checked)
    setPlatfoms((prevValue) => [...prevValue, dialogValue]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
                year: "",
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
              year: "",
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }
          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={platfomrs}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 215 }}
        freeSolo
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new platform</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any paltform in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  title: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleAddPlatform}>Add</Button>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="ADD TO LIST"
              />
             
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
