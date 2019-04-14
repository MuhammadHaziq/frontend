import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});
class Input extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.value ? (
          <div>
            <TextField
              id={this.props.name}
              label={this.props.label}
              value={this.props.value}
              name={this.props.name}
              className={classes.textField}
              onChange={this.props.handleOnChange}
              type={this.props.type}
              margin="normal"
            />
          </div>
        ) : (
          <div>
            <TextField
              required
              id={this.props.name}
              label={this.props.label}
              name={this.props.name}
              className={classes.textField}
              onChange={this.props.handleOnChange}
              type={this.props.type}
              margin="normal"
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Input);
