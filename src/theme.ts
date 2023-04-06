import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const primaryTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#ecb5ff',
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: 'rgb(242,238,179,0.7)',
    },
  },
});

export const secondTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#35d4d0',
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(110,196,93)',
    },
    secondary: {
      main: 'rgb(207,189,222)',
    },
  },
});
