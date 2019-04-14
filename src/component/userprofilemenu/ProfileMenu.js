import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { logout } from "../../action/authActions.js";
import { connect } from "react-redux";
import ProfileDialogModel from "../../container/dialogModel/ProfileDialogModel.js";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ProfileMenu extends Component {
  state = {
    auth: true,
    anchorEl: null,
    open: false
  };

  handleChange = () => {
    this.setState(prevState => ({
      auth: !prevState.auth
    }));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleOnOpenModel = () => {
    this.setState({
      ...this.state,
      open: true
    });
  };
  handleOnCloseModel = () => {
    this.setState({
      ...this.state,
      open: false
    });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleOnClick = e => {
    e.preventDefault();
    const location = this.props.history;
    this.props.logout(location);
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    // console.log(this.state);
    return (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "bottom"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "bottom"
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={ProfileDialogModel} />
          <MenuItem onClick={this.handleOnClick}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

ProfileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const theme = withStyles(styles)(ProfileMenu);
export default connect(
  null,
  { logout }
)(theme);
// Profile;
// <ProfileDialogModel
//   open={this.state.open}
//   Close={this.handleOnCloseModel}
// />
