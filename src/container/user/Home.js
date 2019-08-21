import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return <div> Hello </div>;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.AuthReducer.auth
  };
};
export default connect(
  mapStateToProps,
  null
)(Home);
