import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
class Buttons extends Component {
  render() {
    const { classes } = this.props;

    return this.props.to ? (
      <Button
        component={Link}
        to={this.props.to}
        color={this.props.color}
        className={classes.button}
        type={this.props.type}
      >
        {this.props.value}
      </Button>
    ) : (
      <Button
        color={this.props.color}
        className={classes.button}
        type={this.props.type}
      >
        {this.props.value}
      </Button>
    );
  }
}
Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Buttons);
