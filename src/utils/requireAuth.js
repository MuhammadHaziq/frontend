import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { messages } from "../action/authActions.js";

export default ComposedComponent => {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.auth) {
        // const message = "Login Require";
        // this.props.messages(message);
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextprops) {
      if (!nextprops.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    auth: PropTypes.bool.isRequired,
    messages: PropTypes.func.isRequired
  };

  const mapStateToProps = state => {
    return {
      auth: state.AuthReducer.auth
    };
  };

  return connect(
    mapStateToProps,
    { messages }
  )(Authenticate);
};
