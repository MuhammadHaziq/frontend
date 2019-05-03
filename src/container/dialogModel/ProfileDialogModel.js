import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../../component/Input.js";
import Date_Picker from "../../component/dateTimePicker/DatePicker.js";
import { userProfile } from "../../action/userProfileActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProfileDialogModel extends Component {
  state = {
    // open: true,
    email: "",
    username: "",
    phonenumber: "",
    dateofbirth: new Date(),
    // selectDate: new Date()
  };
  componentDidMount() {
    this.props.userProfile();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleDateChange = dateofbirth => {
    this.setState({
      dateofbirth: dateofbirth
    });
  };

  saveProfileData = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      dateofbirth: this.state.dateofbirth
    };
    console.log(data);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.userDetail.email);
    if (prevState.email == null || prevState.email == "") {
      this.setState({
        email: this.props.userDetail.email,
        username: this.props.userDetail.name,
        phonenumber: this.props.userDetail.phonenumber || ""
      });
    }
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    console.log(this.props.userDetail);

    return (
      <React.Fragment>
        <Dialog
          open={true}
          onClose={this.props.handleOnCloseModel}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Profile</DialogTitle>
          <form onSubmit={this.saveProfileData}>
            <DialogContent>
              <Input
                autoFocus
                name={"email"}
                type={"text"}
                value={this.state.email}
                handleOnChange={this.handleOnChange}
                label={"Email"}
              />
              <Input
                autoFocus
                name={"username"}
                type={"text"}
                value={this.state.username}
                handleOnChange={this.handleOnChange}
                label={"UserName"}
              />
              <Input
                autoFocus
                name={"phonenumber"}
                type={"number"}
                value={this.state.phonenumber}
                handleOnChange={this.handleOnChange}
                label={"Phone Number"}
              />
              <Date_Picker
                label="Date of Birth"
                selectedDate={this.state.dateofbirth}
                handleDateChange={this.handleDateChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleOnCloseModel} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    );
  }
}
ProfileDialogModel.propTypes = {
  handleOnCloseModel: PropTypes.func.isRequired,
  open: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    userDetail: state.userProfileReducer.userProfile
  };
};
export default connect(
  mapStateToProps,
  { userProfile }
)(ProfileDialogModel);

// <Button onClick={this.handleClickOpen}>Profile</Button>
