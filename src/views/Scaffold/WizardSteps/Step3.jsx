import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";

// core components
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import Accordion from "../../../components/Accordion/Accordion.jsx";
import customSelectStyle from "../../../assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  ...customSelectStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false
    };
  }
  sendState() {
    return this.state;
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Review your App Folder Structure Below</h4>

          <h4 className={classes.infoText}>PRINT OF DECISION LIST/TREE</h4>
          <h4 className={classes.infoText}>PRINT PIC OF FOLDER STRUCTURE (DIAGRAM TO SHOW FOLDER TREE?)</h4>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step3);
