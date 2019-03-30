import React, { Component } from "react";
import { Link } from "react-router-dom";

class GoBack extends Component {
  render() {
    return (
      <div className="gnomecard-goback">
        <Link className="gnomecard-goback-link" to="/">
          Go Back
        </Link>
      </div>
    );
  }
}

export default GoBack;
