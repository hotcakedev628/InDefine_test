import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import typography from './typography';
import breakpoints from './breakpoints';

const themesOption = {
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#F7F5F2'
      }
    }
  },
  breakpoints,
  typography,
  palette: {
    action: {
      active: colors.blueGrey[600]
    },
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white
    },
    primary: {
      main: '#C34242'
    },
    secondary: {
      main: '#F7F5F2'
    },
    text: {
      primary: '#DC6666',
      secondary: '#676564'
    },
    grey: {
      50: '#151515'
    }
  }
};

export const createTheme = () => {
  let theme = createMuiTheme(themesOption);
  theme = responsiveFontSizes(theme);

  return theme;
};
