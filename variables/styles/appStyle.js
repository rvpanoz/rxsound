// ##############################
// // // App styles
// #############################

import { drawerWidth, transition, container } from "../index";

const appStyle = theme => ({
  "@global body": {
    margin: 0,
    padding: 0,
    backgroundColor: "#fff",
    fontWeight: 300
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    // [theme.breakpoints.up("md")]: {
    //   width: `calc(100% - ${drawerWidth}px)`
    // },
    width: "100%",
    overflow: "auto",
    position: "relative",
    ...transition
  },
  content: {
    minHeight: "calc(100% - 100px)"
  }
});

export default appStyle;
