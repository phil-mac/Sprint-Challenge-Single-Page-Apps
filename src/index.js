import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {createMuiTheme, ThemeProvider, CssBaseline} from '@material-ui/core';
import "./index.css";
import App from "./App";

const theme = createMuiTheme({
  palette: {
      primary: {
      main: '#9F7AEA',
      contrastText: '#fff'
      },
  }
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
