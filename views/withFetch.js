import React, { Component } from "react";
import config from "../config";

class WithFetch extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.action && this.props.action();
  }
  render() {
    return <div>{this.props.render()}</div>;
  }
}

export default WithFetch;
