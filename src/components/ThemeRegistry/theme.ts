import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#234b8f'
    },
    secondary: {
      main: '#3a9d93'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'inherit'
        }
      }
    }
  }
});

export default theme;
