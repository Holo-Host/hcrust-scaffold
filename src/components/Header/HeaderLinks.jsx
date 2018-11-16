import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @aterial-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// style
import headerLinksStyle from "../../assets/jss/material-dashboard-pro-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={managerClasses}>
        <div/>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};

export default withStyles(headerLinksStyle)(HeaderLinks);
