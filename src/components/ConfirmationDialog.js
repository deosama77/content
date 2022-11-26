import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

export default function ConfirmationDialog({open=false,setOpen=()=>{} , value=false,
                                               setValue=()=>{} , title="" ,
                                               body=""}) {

    const handleEntering = () => {
        console.log("Handle Entering")
    };

    const handleCancel = () => {
        setOpen(false)
        setValue(false)
    };

    const handleOk = () => {
        setOpen(false)
        setValue(true)
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                TransitionProps={{ onEntering: handleEntering }}
                open={open}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent dividers>
                    {body}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleOk}>Ok</Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}
