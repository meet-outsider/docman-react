import '@/app/styles/App.css';

import Layout from '@/layout/Layout';
import React from 'react';
import { primaryTheme, secondTheme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { Button, Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const App: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>(primaryTheme);
  const [open, setOpen] = React.useState(false);
  const handlerSetTheme = (theme: Theme) => {
    setTheme(theme);
    setOpen(false);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
          }}
          variant="contained"
          color="primary"
          onClick={toggleDrawer}
        >
          显示抽屉
        </Button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer} sx={{}}>
          <ThemeDrawer onSetTheme={handlerSetTheme} />
        </Drawer>
        <Layout />
      </ThemeProvider>
    </div>
  );
};

function ThemeDrawer(props: { onSetTheme: (theme: Theme) => void }) {
  return (
    <div
      style={{
        width: 250,
        padding: '10px',
      }}
    >
      <Typography>主题</Typography>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgb(220,214,214)',
          height: '500px',
          borderRadius: '12px',
        }}
      >
        {themes.map((item) => {
          return (
            <Button
              key={item.name}
              style={{
                width: '100%',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: 'rgb(220,214,214)',
                margin: '5px 0',
              }}
              onClick={() => props.onSetTheme(item.theme)}
            >
              {item.name}
            </Button>
          );
        })}
      </Box>
    </div>
  );
}

const themes = [
  {
    name: 'primary',
    theme: primaryTheme,
  },
  {
    name: 'secondary',
    theme: secondTheme,
  },
];
