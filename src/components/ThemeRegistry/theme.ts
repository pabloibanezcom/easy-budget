import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#376fd0'
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
