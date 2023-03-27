import { useSelector, useDispatch } from 'react-redux';
import { closeAlert } from '@/features/alert/alertSlice';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useCallback } from 'react';


function AlertDialog() {
  const dispatch = useDispatch();
  const { open, message } = useSelector((state: any) => state.alert);
  const handleClose = useCallback(() => {
    dispatch(closeAlert());
  }, [dispatch]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            message:{message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
