import React, { Component } from "react";
import styles from "../../variables/styles/audioPlayerStyles";
import { withStyles } from "@material-ui/core";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
  }

  render() {
    return (
      <div id="audiowrap">
        <div id="audio0">
          <audio id="audio1" preload="true" controls="true">
            Your browser does not support HTML5 Audio! 😢
          </audio>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AudioPlayer);
