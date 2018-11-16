import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Description from "@material-ui/icons/Description";
import AccessTime from "@material-ui/icons/AccessTime";
import Pageview from "@material-ui/icons/Pageview";
import Edit from "@material-ui/icons/Edit";

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

// Additional Custom Styling
import dashboardStyle from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import holochainLogo from "../../assets/img/holochain-logo-lg.png";
import holoLogo from "../../assets/img/holo-logo.png";


class Dashboard extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 style={{color:"white", margin:"50px 0px"}}>View Your Stats</h1>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
          </GridItem>

          <GridItem xs={12} sm={6} md={6} lg={3}>
          </GridItem>

          <GridItem xs={12} sm={6} md={6} lg={3}>
          </GridItem>
        </GridContainer>
        <hr/>

        <h1 style={{color:"white", margin:"50px 0px", textAlign:"center"}}>Manage Your hApps</h1>
        <GridContainer>
          <div />
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
