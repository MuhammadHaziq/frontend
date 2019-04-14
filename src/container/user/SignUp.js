import React, { Component } from "react";
import Buttons from "../../component/Buttons.js";
import Input from "../../component/Input.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { UserRegister } from "../../action/authActions.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 50
  },
  card: {
    minWidth: 300,
    borderRadius: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: "190px"
    // paddingTop: "56.25%" // 16:9
  },
  textLink: {
    textDecoration: "none"
  }
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: ""
    };
  }
  componentDidMount() {
    document.body.style.background = "#bbdefb";
    // document.body.style = {BG};
  }
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    let data = {
      name: this.state.Name,
      email: this.state.Email,
      password: this.state.Password
    };
    let location = this.props.history;
    console.log(location);
    this.props.UserRegister(data, location);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.handleOnSubmit}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Login Image"
                  className={classes.media}
                  image="Images/login.png"
                  title="Login Image"
                />
              </CardActionArea>
              <CardContent>
                <Input
                  name={"Name"}
                  type={"text"}
                  handleOnChange={this.handleOnChange}
                  label={"Name"}
                />
                <Input
                  name={"Email"}
                  type={"text"}
                  handleOnChange={this.handleOnChange}
                  label={"Email"}
                />
                <Input
                  name={"Password"}
                  type={"Password"}
                  handleOnChange={this.handleOnChange}
                  label={"Password"}
                />
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Buttons
                    color={"primary"}
                    value={"Register"}
                    type={"submit"}
                  />
                  <Buttons
                    component={Link}
                    to="/login"
                    color={"primary"}
                    value={"Login"}
                    type={"submit"}
                  />
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </form>
      </Grid>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};
const style = withStyles(styles)(SignUp);
export default connect(
  null,
  { UserRegister }
)(style);
