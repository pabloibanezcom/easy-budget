import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      main: '#344c25'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily
  },
  components: {}
});

export default theme;
