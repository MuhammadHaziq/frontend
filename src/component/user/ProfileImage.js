import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  avatar: {
    margin: 10
  }
};

function ProfileImage(props) {
  const { classes } = props;
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src={props.userDetail.image !== ''? props.userDetail.image : "/Images/images.jpeg"}
        className={classes.avatar}
      />
    </div>
  );
}

ProfileImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileImage);
