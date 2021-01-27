import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Drag from "./components/Drag";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "counter", element: <Counter /> },
    { path: "drag", element: <Drag /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <Link to="/" className={classes.link}>
              RxJS
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <App />
        </Grid>
      </Container>
    </Router>
  );
};

export default AppWrapper;
