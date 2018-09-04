const audioPlayerStyle = theme => ({
  "@global audio": {
    display: none
  },
  plyr__audio__plyr__controls: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    padding: "20px 20px 20px 13px",
    width: "100%"
  },
  plyr__audio__plyr__controls_button_tab_focus_focus: {
    background: "rgba(0,0,0,.1)"
  },
  plyr__audio__plyr__controls_button_hover: {
    background: "rgba(0,0,0,.1)"
  },
  plyr__play_large: {
    background: "rgba(0,0,0,.1)"
  },
  plyr__progress__played: {
    color: "rgba(0,0,0,.1)"
  },
  plyr__volume__display: {
    color: "rgba(0,0,0,.1)"
  },
  plyr__audio__plyr__progress__buffer: {
    color: "rgba(0,0,0,.1)"
  },
  plyr__audio__plyr__volume__display: {
    background: "rgba(0,0,0,.1)"
  },
  "@media only screen and (max-width:600px)": {
    __expression__: "only screen and (max-width:600px)",
    nowPlay_span_npAction: {
      display: "none"
    },
    nowPlay_span_npTitle: {
      display: "block",
      textAlign: "center",
      width: "100%"
    }
  }
});
