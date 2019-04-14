import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  profilename: {
    alignItems: "center"
  }
});
class ProfileName extends Component {

  render() {
    return (
      <div>
        <Typography variant="h6" color="inherit" noWrap align="center">
          {this.props.username}
        </Typography>
      </div>
    );
  }
}
ProfileName.propTypes = {
  classes: PropTypes.object.isRequired
  // theme: PropTypes.object.isRequired
};
export default withStyles(styles)(ProfileName);
