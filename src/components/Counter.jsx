import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { merge, fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

function counterExample(count, setCount) {
  const clickAdd$ = fromEvent(document.querySelector("#Add"), "click");
  const clickMinus$ = fromEvent(document.querySelector("#Minus"), "click");

  const subClicks = merge(
    clickAdd$.pipe(mapTo(1)),
    clickMinus$.pipe(mapTo(-1))
  ).subscribe((val) => {
    setCount(count + val);
  });

  return subClicks;
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const subClicks = counterExample(count, setCount);
    return () => {
      subClicks.unsubscribe();
    };
  }, [count]);
  return (
    <>
      <Grid item xs={12}>
        <h1>Counter</h1>
      </Grid>
      <Grid item xs={12}>
        <Button id="Add" variant="contained" color="primary">
          +
        </Button>
        <Button id="Minus" variant="contained" color="secondary">
          -
        </Button>
      </Grid>
      <Grid item xs={12}>
        <p>Count: {count}</p>
      </Grid>
    </>
  );
}

export default Counter;
