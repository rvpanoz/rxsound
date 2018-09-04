import config from "../config";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import AudioPlayer from "./common/AudioPlayer";

class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      loading: false,
      audioSrc: ""
    };
    this.searchElement = React.createRef();
  }

  _onResolveResponse = data => {
    setTimeout(() => {
      this.setState({
        status: 1,
        loading: false
      });
    }, 1500);
  };

  handleKeyPress = e => {
    const { which } = e;

    if (which === 13) {
      this.handleSearch();
    }
  };

  handleSearch = e => {
    const url =
      (this.searchElement.current && this.searchElement.current.value) ||
      config.initial;
    this.props.fetchTrackStart(url);
  };

  render() {
    const { classes } = this.props;

    return (
      <section
        className={classes.container}
        onKeyPress={e => this.handleKeyPress(e)}
      >
        <div className={classes.flexContainer}>
          <TextField
            id="search"
            label="Enter a soundcloud URL"
            type="search"
            className={classes.searchField}
            margin="normal"
            InputProps={{
              inputRef: this.searchElement
            }}
          />
          <Button
            className={classes.searchButton}
            color="primary"
            variant="raised"
            onClick={e => this.handleSearch(e)}
          >
            Search
          </Button>
        </div>
        <div className={classes.loading}>
          {this.state.loading && <LinearProgress color="secondary" />}
        </div>
        {this.state.status === 1 && <AudioPlayer />}
      </section>
    );
  }
}

const styles = {
  flexContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  searchButton: {
    margin: 15,
    width: 100
  },
  searchField: {
    marginLeft: 15,
    marginRight: 15,
    maxWidth: 500
  }
};

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchTrackStart: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchView);
