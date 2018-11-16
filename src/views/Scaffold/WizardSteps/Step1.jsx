import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step1 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">

        <GridItem xs={12} sm={12} md={4}>
          <h4 className={classes.cardTitle}>What is Holochain?</h4>
            <h4 className={classes.infoText}>Let's start with the basic information (with validation)</h4>
            <p className={classes.description}>
              Text about the hApps here...
            </p>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step1);
