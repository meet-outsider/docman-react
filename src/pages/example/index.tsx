import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

async function getUser(): Promise<any> {
  return await fetch('https://jsonplaceholder.typicode.com/users/1');
}

async function getRole(): Promise<any> {
  return await fetch('https://jsonplaceholder.typicode.com/roles/1');
}

async function getProduct(): Promise<any> {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1');
}

export const ExamplePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: 'ss' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        onCallback(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onCallback = (data: any) => {
    setUser(data);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

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
