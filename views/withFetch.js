import React, { Component } from "react";
import PropTypes from "prop-types";
import config from "../config";

class WithFetch extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchHandler();
  }
  render() {
    return <div>{this.props.render()}</div>;
  }
}

WithFetch.propTypes = {
  render: PropTypes.func.isRequired,
  fetchHandler: PropTypes.func.isRequired
};

export default WithFetch;
