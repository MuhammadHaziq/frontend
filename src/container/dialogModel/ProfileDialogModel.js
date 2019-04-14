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

class ProfileDialogModel extends Component {
  state = {
    open: false,
    email: "",
    username: "",
    phonenumber: "",
    dateofbirth: "",
    selectDate: new Date()
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
  handleDateChange = selectDate => {
    this.setState({
      selectDate: selectDate
    });
  };

  render() {
    console.log(this.props.userDetail);
    return (
      <React.Fragment>
        <Button onClick={this.handleClickOpen}>Profile</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Profile</DialogTitle>
          <DialogContent>
            <form>
              <Input
                autoFocus
                name={"email"}
                type={"text"}
                value={this.props.userDetail.email}
                handleOnChange={this.handleOnChange}
                label={"Email"}
              />
              <Input
                autoFocus
                name={"username"}
                type={"text"}
                handleOnChange={this.handleOnChange}
                label={"UserName"}
              />
              <Input
                autoFocus
                name={"phonenumber"}
                type={"number"}
                handleOnChange={this.handleOnChange}
                label={"Phone Number"}
              />
              <Date_Picker
                label="Date of Birth"
                selectedDate={this.state.selectDate}
                handleDateChange={this.handleDateChange}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    userDetail: state.userProfileReducer.userProfile
  };
};
export default connect(
  mapStateToProps,
  { userProfile }
)(ProfileDialogModel);
