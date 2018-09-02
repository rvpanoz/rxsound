import React, { Component } from "react";

const Audio = props => {
  return (
    <audio
      preload="true"
      id={props.id}
      crossOrigin="anonymous"
      src={props.src || ""}
    >
      Your browser does not support HTML5 Audio!
    </audio>
  );
};

export default Audio;
