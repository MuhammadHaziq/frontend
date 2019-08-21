import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../../component/Input.js";
import Grid from "@material-ui/core/Grid";
import Date_Picker from "../../component/dateTimePicker/DatePicker.js";
import { SaveUserProfile } from "../../action/userProfileActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  input: {
    display: "none"
  }
});
class ProfileDialogModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // open: true,
      user_id: this.props.userProfile._id,
      email: this.props.userProfile.email,
      username: this.props.userProfile.name,
      image: this.props.userProfile.image,
      phonenumber: this.props.userProfile.phonenumber || ""
      // selectDate: new Date()
    };
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

  handleOnChangeImage = file => {
    console.log(file.target.files[0]);
    if (!file.target.files[0]) {
      return false;
    } else {
      const reader = new FileReader();
      const url = reader.readAsDataURL(file.target.files[0]);
      // Call Back Function Execute after read file data
      reader.onloadend = e => {
        console.log(reader.result);
        this.setState({
          ...this.state,
          image: reader.result
        });
        // setImage({ ...state, ...date, image: reader.result });
      };
    }
  };
  saveProfileData = e => {
    e.preventDefault();
    const data = {
      user_id: this.state.user_id,
      username: this.state.username,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      image: this.state.image,
      dateofbirth: dateformat(this.state.dateofbirth, "isoDate", true)
    };
    this.props.SaveUserProfile(data);
    console.log(data);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.userProfile);
    if (
      prevProps.userProfile !== this.props.userProfile &&
      this.props.userProfile == ""
    ) {
      this.setState({
        user_id: this.props.userProfile._id,
        email: this.props.userProfile.email,
        username: this.props.userProfile.name,
        image: this.props.userProfile.image,
        phonenumber: this.props.userProfile.phonenumber || ""
      });
    }
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    console.log(this.props.userProfile);
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <Dialog
          open={true}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Profile</DialogTitle>
          <form onSubmit={this.saveProfileData}>
            <DialogContent>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  name="image"
                  onChange={this.handleOnChangeImage}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Upload picture"
                    component="span"
                  >
                    <Avatar
                      className={classes.avatar}
                      src={
                        this.state.image
                          ? this.state.image
                          : "/Images/images.jpeg"
                      }
                    />
                  </IconButton>
                </label>
              </Grid>
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
              <Button onClick={this.props.close} color="primary">
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
    userProfile: state.userProfileReducer.userProfile
  };
};
const dialogModel = withStyles(styles)(ProfileDialogModel);
export default connect(
  mapStateToProps,
  { SaveUserProfile }
)(dialogModel);

// <Button onClick={this.handleClickOpen}>Profile</Button>
