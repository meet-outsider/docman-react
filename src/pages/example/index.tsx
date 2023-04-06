import React, { useState } from 'react';
import {Button} from "@mui/material";



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
    </div>
  );
};
