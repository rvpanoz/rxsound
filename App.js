import { withStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./variables/styles/appStyle";

//layout
import MainLayout from "./layouts/main";

const App = props => {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainPanel}>
        <section className={classes.content}>
          <MainLayout />
        </section>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
