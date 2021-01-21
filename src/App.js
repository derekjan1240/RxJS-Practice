import React from "react";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Button from "@material-ui/core/Button";

import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "counter", element: <Counter /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Button variant="contained">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="contained">
        <Link to="/counter">Counter</Link>
      </Button>
      <App />
    </Router>
  );
};

export default AppWrapper;
