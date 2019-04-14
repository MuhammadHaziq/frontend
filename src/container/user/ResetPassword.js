import React, { Component } from "react";
import Input from "../../component/Input.js";
import Buttons from "../../component/Buttons.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { passwordReset } from "../../action/authActions.js";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import queryString from "query-string";

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

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpassword: "",
      confirmpassword: "",
      activationcode: ""
    };
  }
  componentDidMount() {
    document.body.style.background = "#bbdefb";
  }

  componentWillMount() {
    document.body.style.background = "";
  }

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };
  handleOnSubmit = e => {
    let url = this.props.match.params;
    let params = queryString.parse(url);
    const activationcode = url["activationcode"];
    const data = {
      newpassword: this.state.newpassword,
      confirmpassword: this.state.confirmpassword,
      activationcode: activationcode
    };
    this.props.passwordReset(data, activationcode);
    e.preventDefault();
  };
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
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
                    image="/Images/login.png"
                    title="Login Image"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography paragraph className={classes.text}>
                    Enter Your New Password
                  </Typography>
                  <Input
                    name={"newpassword"}
                    type={"password"}
                    handleOnChange={this.handleOnChange}
                    label={"New Password"}
                  />
                  <Input
                    name={"confirmpassword"}
                    type={"password"}
                    handleOnChange={this.handleOnChange}
                    label={"Confirm Password"}
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
                      value={"Reset"}
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

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired
};

const theme = withStyles(styles)(ResetPassword);
export default connect(
  null,
  { passwordReset }
)(theme);
