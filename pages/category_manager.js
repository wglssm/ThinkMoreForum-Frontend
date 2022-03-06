import React from 'react';
import {
  CssBaseline,
  makeStyles,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
// import Header from '../components/CategoryManager/Header';
import Categories from './categoryTable/Categories';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f5f0',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

const CategoryManager = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Categories />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default CategoryManager;
