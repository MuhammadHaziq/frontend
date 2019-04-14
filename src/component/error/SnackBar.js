import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import { snackbarclose } from "../../action/authActions.js";
const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SnackBar extends Component {
  state = {
    vertical: "top",
    horizontal: "center"
  };

  handleClose = () => {
    this.props.snackbarclose();
  };

  render() {
    const { vertical, horizontal } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          autoHideDuration={6000}
          open={this.props.open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.props.error}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.AuthReducer.message,
    open: state.AuthReducer.open
  };
};

SnackBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const theme = withStyles(styles)(SnackBar);
export default connect(
  mapStateToProps,
  { snackbarclose }
)(theme);
