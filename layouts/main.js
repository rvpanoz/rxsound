import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

//styles
import styles from "../variables/styles/mainLayoutStyle";

//components
import { Search, Track, WithFetch } from "../views";

//actions
import { addFilter, fetchTrackStart } from "../actions";

const drawerWidth = 240;

class MainLayout extends React.Component {
  state = {
    drawerOpen: false
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { classes, theme, fetchTrackStart } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.drawerOpen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open menu"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.drawerOpen && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              _imy
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.drawerOpen && classes.drawerPaperClose
            )
          }}
          open={this.state.drawerOpen}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify="space-between" spacing={24}>
            <Grid xs={6} item>
              <Search fetchTrackStart={fetchTrackStart} />
            </Grid>
            {/* <Grid xs={6} item>
              <WithFetch
                render={() => <Track />}
                fetchHandler={() => fetchTrack()}
              />
            </Grid> */}
          </Grid>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  filters: state.filters,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  addFilter: (name, value) => dispatch(addFilter(name, value)),
  fetchTrackStart: url => dispatch(fetchTrackStart(url))
});

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainLayout);
