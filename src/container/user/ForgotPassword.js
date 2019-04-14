import React, { Component } from "react";
import Input from "../../component/Input.js";
import Buttons from "../../component/Buttons.js";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { forgotpassword } from "../../action/authActions.js";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 50,
    maxWidth: "350px"
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
  },
  text: {
    textDecoration: "none",
    fontSize: "20px",
    marginTop: 30,
    marginBottom: -15
  }
});

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: ""
    };
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

    // console.log(this.state.Email);
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const email = this.state.Email;
    // let data = {
    //   email: this.state.Email
    // };
    this.props.forgotpassword(email);
    // this.formreset.reset();
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.Email);
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.handleOnSubmit}
            ref={re => (this.fromreset = re)}
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
                  <Typography paragraph className={classes.text}>
                    Enter your email address to reset your password
                  </Typography>
                  <Input
                    name={"Email"}
                    type={"text"}
                    handleOnChange={this.handleOnChange}
                    label={"Email"}
                  />
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Buttons
                      color={"primary"}
                      value={"Submit"}
                      type={"submit"}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                  >
                    <Buttons
                      component={Link}
                      to="/login"
                      color={"primary"}
                      value={"Login"}
                      type={"submit"}
                    />
                  </Grid>
                </CardActions>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                />
              </Card>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  classes: propTypes.object.isRequired
};

const theme = withStyles(styles)(ForgotPassword);
export default connect(
  null,
  { forgotpassword }
)(theme);
