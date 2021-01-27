import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <h1>Examples</h1>
      </Grid>
      <Grid item xs={12}>
        <Button
          href="/counter"
          variant="contained"
          color="primary"
          className={classes.root}
        >
          Counter
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          href="/drag"
          variant="contained"
          color="primary"
          className={classes.root}
        >
          Drag
        </Button>
      </Grid>
    </>
  );
}

export default Home;
