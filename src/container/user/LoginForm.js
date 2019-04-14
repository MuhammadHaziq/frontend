import React, { Component } from "react";
import Input from "../../component/Input.js";
import Buttons from "../../component/Buttons.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { UserLogin } from "../../action/authActions.js";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: ""
    };
  }
  componentWillMount() {
    if (this.props.auth === true) {
      this.props.history.replace("/home");
    }
  }
  componentDidMount() {
    document.body.style.background = "#bbdefb";
  }
  componentWillUnmount() {
    document.body.style.background = "";
  }
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    let data = {
      email: this.state.Email,
      password: this.state.Password
    };
    let location = this.props.history;
    console.log(location);
    this.props.UserLogin(data, location);
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
                  <Buttons color={"primary"} value={"Login"} type={"submit"} />
                  <Buttons
                    to="/signup"
                    color={"secondary"}
                    value={"Sign Up"}
                    type={"button"}
                  />
                </Grid>
              </CardActions>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Typography
                  paragraph
                  className={classes.textLink}
                  color="primary"
                  component={Link}
                  to="/forgotpassword"
                >
                  Forget Password?
                </Typography>
              </Grid>
            </Card>
          </Grid>
        </form>
      </Grid>
    );
  }
}
LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  UserLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.AuthReducer.auth
  };
};
const style = withStyles(styles)(LoginForm);
export default connect(
  mapStateToProps,
  { UserLogin }
)(style);
