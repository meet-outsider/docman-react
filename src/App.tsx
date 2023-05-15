import '@/styles/App.css';

import Layout from '@/layout/Layout';
import React from 'react';
import { primaryTheme, secondTheme } from '@/theme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { Button, Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
        <Drawer
          style={{ zIndex: useTheme().zIndex.drawer + 1 }}
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          sx={{}}
        >
          <ThemeDrawer onSetTheme={handlerSetTheme} />
        </Drawer>
        <Layout />
      </ThemeProvider>
    </div>
  );
};

function ThemeDrawer(props: { onSetTheme: (theme: Theme) => void }) {
  console.log('ThemeDrawer', useTheme().zIndex.drawer + 2);
  return (
    <Paper
      sx={{
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
              variant="contained"
              key={item.name}
              sx={{
                width: '100%',
                borderRadius: '12px',
                margin: '5px 0',
              }}
              onClick={() => props.onSetTheme(item.theme)}
            >
              {item.name}
            </Button>
          );
        })}
      </Box>
    </Paper>
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
