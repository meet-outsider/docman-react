import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';

interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  onCallback: (data: any) => void;
}

const FormDialog: React.FC<FormDialogProps> = ({ open, onClose, onCallback }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    onCallback({ name, email });
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

export const ExamplePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({username: ''});

  const onCallback = (data: any) => {
    setUser(data);
  };
  return (
    <div>
      <h1>Example Page</h1>
      <h2>{user.username}</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Form
      </Button>
      <FormDialog open={open} onClose={() => { setOpen(false) }} onCallback={onCallback} />
    </div>
  );
};
