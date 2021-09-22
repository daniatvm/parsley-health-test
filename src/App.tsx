import React, { useState } from "react";
import {
  CheckboxProps,
  DropdownProps,
  Grid,
  Header,
  InputProps,
  SelectProps,
  TextAreaProps,
} from "semantic-ui-react";

import DemographicDataForm from "./components/DemographicDataForm";
import MedicalQuestionsForm from "./components/MedicalQuestionsForm";
import StepOrdered, { PossibleSteps } from "./components/Step";
import SubmitForm from "./components/SubmitForm";
import Summary from "./components/Summary";
import { StyledButton } from "./components/Shared";
import { MedicalInfo, Patient } from "./helpers/types";

const defaultPatient = {
  city: "",
  condition: "",
  dateOfBirth: "",
  email: "",
  firstName: "",
  gender: "",
  lastName: "",
  phoneNumber: "",
  maritalStatus: "",
  state: "",
  streetAddress: "",
  zip: "",
};

const defaultMedicalInfo = {
  tobacco: { isConsumingOrHas: false, details: "" },
  alcohol: { isConsumingOrHas: false, details: "" },
  drugs: { isConsumingOrHas: false, details: "" },
  medications: { isConsumingOrHas: false, details: "" },
  allergies: { isConsumingOrHas: false, details: "" },
  hospitalization: { isConsumingOrHas: false, details: "" },
};

function App() {
  const [currentStep, setCurrentStep] = useState<PossibleSteps>(
    PossibleSteps.demographicData
  );
  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>(
    defaultMedicalInfo
  );
  const [patient, setPatient] = useState<Patient>(defaultPatient);

  const handlePatientInputChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps | InputProps | SelectProps | TextAreaProps
  ) => {
    setPatient((prevPatientInfo) => ({
      ...prevPatientInfo,
      [data.name]: data.value,
    }));
  };

  const handleMedicalInfoInputChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: CheckboxProps | TextAreaProps
  ) => {
    if (data.type === "radio") {
      setMedicalInfo((prevMedicalInfo) => ({
        ...prevMedicalInfo,
        [data.name]: { isConsumingOrHas: data.checked, details: "" },
      }));
    } else {
      setMedicalInfo((prevMedicalInfo) => ({
        ...prevMedicalInfo,
        [data.name]: { isConsumingOrHas: true, details: data.value },
      }));
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSpecificStep = (step: PossibleSteps) => {
    setCurrentStep(step);
  };

  const getNextButton = (centered?: boolean) => {
    return (
      <StyledButton
        icon="right arrow"
        circular
        floated={!centered ? "right" : undefined}
        onClick={handleNextStep}
      />
    );
  };

  const getPrevButton = () => {
    return (
      <StyledButton
        icon="left arrow"
        circular
        floated="left"
        onClick={handlePrevStep}
      />
    );
  };

  const getRenderNode = () => {
    switch (currentStep) {
      case PossibleSteps.demographicData: {
        return (
          <DemographicDataForm
            inputChangeCallback={handlePatientInputChange}
            nextButton={getNextButton(true)}
            patient={patient}
          />
        );
      }
      case PossibleSteps.medicalQuestions: {
        return (
          <MedicalQuestionsForm
            inputChangeCallback={handleMedicalInfoInputChange}
            medicalInfo={medicalInfo}
            nextButton={getNextButton()}
            prevButton={getPrevButton()}
          />
        );
      }
      case PossibleSteps.summary: {
        return (
          <Summary
            medicalInfo={medicalInfo}
            nextButton={getNextButton()}
            patient={patient}
            prevButton={getPrevButton()}
            specificStepCallback={handleSpecificStep}
          />
        );
      }
      case PossibleSteps.submit: {
        return <SubmitForm medicalInfo={medicalInfo} patient={patient} />;
      }
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1024 }}>
        <Header as="h2">Patient Enrollment Form</Header>
        <p>Please fill the following information to enroll</p>
        {getRenderNode()}
        <StepOrdered currentStep={currentStep} />
      </Grid.Column>
    </Grid>
  );
}

export default App;
