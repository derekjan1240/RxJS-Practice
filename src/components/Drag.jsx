import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { fromEvent, animationFrameScheduler } from "rxjs";
import { switchMap, map, takeUntil, subscribeOn } from "rxjs/operators";

function dragBoxExample() {
  const target = document.querySelector("#Drag_Box");
  const mouseup$ = fromEvent(target, "mouseup");
  const mousemove$ = fromEvent(document, "mousemove");
  const mousedown$ = fromEvent(target, "mousedown");

  const drag$ = mousedown$.pipe(
    switchMap((start) => {
      return mousemove$.pipe(
        map((move) => {
          move.preventDefault();
          return {
            left: move.clientX - start.offsetX,
            top: move.clientY - start.offsetY,
          };
        }),
        takeUntil(mouseup$)
      );
    })
  );

  const position$ = drag$.pipe(subscribeOn(animationFrameScheduler));

  const subDrag = position$.subscribe((pos) => {
    target.style.top = `${pos.top}px`;
    target.style.left = `${pos.left}px`;
  });

  return subDrag;
}

const useStyles = makeStyles(() => ({
  dragBox: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "50vh",
    left: "50vw",
    cursor: "pointer",
    background: "black",
    borderRadius: 5,
  },
}));

function Drag() {
  const classes = useStyles();

  useEffect(() => {
    const subDrag = dragBoxExample();
    return () => {
      subDrag.unsubscribe();
    };
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <h1>Drag</h1>
      </Grid>
      <Grid item xs={12}>
        <div id="Drag_Box" className={classes.dragBox}></div>
      </Grid>
    </>
  );
}

export default Drag;
