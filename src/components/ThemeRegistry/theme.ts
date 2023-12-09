import { alpha, createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

declare module '@mui/material/styles' {
  interface Palette {
    navbar: Palette['primary'];
  }

  interface PaletteOptions {
    navbar?: PaletteOptions['primary'];
  }
}

const customColors = {
  navbar: '#233044'
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#376fd0'
    },
    secondary: {
      main: '#3dada1'
    },
    navbar: {
      main: customColors.navbar,
      light: alpha(customColors.navbar, 0.7),
      dark: alpha(customColors.navbar, 1.2),
      contrastText: '#eeeeee'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily
  },
  components: {}
});

export default theme;
