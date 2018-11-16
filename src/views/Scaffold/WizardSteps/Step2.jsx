import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import customSelectStyle from "../../../assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "../../../assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class Step2 extends React.Component {
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>What are you doing? (checkboxes)</h4>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("desgin")}
                    checkedIcon={
                      <i
                        className={
                          "fas fa-pencil-alt " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    icon={
                      <i
                        className={
                          "fas fa-pencil-alt " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Design</h6>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("code")}
                    checkedIcon={
                      <i
                        className={
                          "fas fa-terminal " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    icon={
                      <i
                        className={
                          "fas fa-terminal " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Code</h6>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("develop")}
                    checkedIcon={
                      <i
                        className={"fas fa-laptop " + classes.iconCheckboxIcon}
                      />
                    }
                    icon={
                      <i
                        className={"fas fa-laptop " + classes.iconCheckboxIcon}
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Develop</h6>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem xs={12} sm={12}>
            <h4 className={classes.infoText}>All the Accordion Styling can go here....</h4>
            <h4 className={classes.infoText}>Zome Question</h4>
          </GridItem>
          <GridItem xs={12} sm={7}>
            <CustomInput
              labelText="Zome Name"
              id="Ratings"
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={5}>
            {/* // <Accordion>
            //   <div/>
            // </Accordion> */}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Step2);
