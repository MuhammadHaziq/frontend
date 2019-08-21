import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import LoginForm from "../container/user/LoginForm.js";
import Home from "../container/user/Home.js";
import SignUp from "../container/user/SignUp.js";
import Logout from "../container/user/Logout.js";
import ForgotPassword from "../container/user/ForgotPassword.js";
import ResetPassword from "../container/user/ResetPassword.js";
import requireAuth from "../utils/requireAuth.js";
import ProfileDialogModel from "../container/dialogModel/ProfileDialogModel.js";
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/login" />} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={requireAuth(Home)} />
            <Route
              exact
              path="/profile"
              component={requireAuth(ProfileDialogModel)}
            />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />

            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route
              exact
              path="/resetpassword/:activationcode"
              component={ResetPassword}
            />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default Routes;
