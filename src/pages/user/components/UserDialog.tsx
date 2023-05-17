import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useReducer } from 'react';

interface FormDialogProps {
  id: number;
  open: boolean;
  onClose: () => void;
  onCallback: (data: IUser) => void;
}

type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string };

function userReducer(state: IUser, action: Action): IUser {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, username: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const FormDialog: React.FC<FormDialogProps> = ({
  id,
  open,
  onClose,
  onCallback,
}) => {
  const [user, dispatch] = useReducer(userReducer, {
    id: id,
    username: '',
    nickname: '',
    email: '',
    phone: 0,
    createdAt: '',
    roles: [],
    // add more properties here
  });

  useEffect(() => {
    console.log('effect', id);
  }, [id]);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'UPDATE_NAME', payload: event.target.value });
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onCallback(user);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your Information</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={user.username}
            onChange={handleNameChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={user.email}
            onChange={handleEmailChange}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
