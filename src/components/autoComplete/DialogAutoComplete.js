import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function DialogAutoComplete({
  open,
  addToOptionschecked,
  handleClose,
  dialogValue,
  setDialogValue,
  handleSubmit,
  setaddToOptionschecked,
  setAutocompleteOptions,
  dialogContentText="",
  dialogTitle="",
  textFieldId="id"
}) {
  const handleChangeChecked = (event) => {
    setaddToOptionschecked(event.target.checked);
  };

  const handleAddNewOption = () => {
    if (addToOptionschecked) setAutocompleteOptions((prevValue) => [...prevValue, dialogValue]);
  };

  const handleChangeInputText=(event) =>
              setDialogValue({
                ...dialogValue,
                label: event.target.value,
                id:event.target.value
              })
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContentText}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id={textFieldId}
            value={dialogValue.label}
            onChange={(event)=>handleChangeInputText(event)}
            label="label"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleAddNewOption}>
            Add
          </Button>
          <FormControlLabel
            control={<Checkbox checked={addToOptionschecked} onChange={handleChangeChecked} />}
            label="ADD TO LIST"
          />
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default DialogAutoComplete;
