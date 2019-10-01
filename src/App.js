import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles } from '@material-ui/styles';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import 'typeface-roboto';
import './App.css';

const useStyles = makeStyles({
  root: {
    background: '#ede7f6',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 812,
    padding: '0 0px',
  },
});


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5c8d',
      main: '#D81B60',
      dark: '#a00037',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffcccb',
      main: '#EF9A9A',
      dark: '#ba6b6c',
      contrastText: '#000000',
    },
  },
});

const App = () => {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        
        <div className="Welcome">
          Welcome
        </div>

        <div
          className="logo"
        > 
          <p>
            <span className="Giftcard"> Giftcard </span>
            {' '}
            <span className="Manager"> Manager </span>
          </p>
        </div>
        
        <div
          className="add"
        >
          <Fab 
            color="secondary"
            aria-label="add"
            size="large"
          >
            <AddIcon />
          </Fab>
        </div>

        <div> 
          <p 
            className="Add-a-card">
              <span>
                Add a card
              </span>  
          </p>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default App;
