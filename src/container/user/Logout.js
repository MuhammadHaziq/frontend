import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../action/authActions.js";
import Button from "@material-ui/core/Button";

class Logout extends Component {
  componentWillMount() {
    const location = this.props.history;
    this.props.logout(location);
    console.log(this.props.logout());
  }
  handleOnClick = e => {
    e.preventDefault();
    const location = this.props.history;
    this.props.logout(location);
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.handleOnClick}>
          Logout
        </Button>
      </div>
    );
  }
}
export default connect(
  null,
  { logout }
)(Logout);
