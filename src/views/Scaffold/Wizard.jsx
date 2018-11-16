import React from "react";

// core components
import Wizard from "../../components/Wizard/Wizard.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";
import Step4 from "./WizardSteps/Step4.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "What are hApps?", stepComponent: Step1, stepId: "about" },
              { stepName: "Build Your App", stepComponent: Step2, stepId: "build" },
              { stepName: "Review Your App", stepComponent: Step3, stepId: "review" },
              { stepName: "Next Steps", stepComponent: Step4, stepId: "after" }
            ]}
            title="Build Your First Holochain App"
            subtitle="This information will help you build your first hApp!"
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
