import React, { ReactNode } from "react";
import { Header } from "semantic-ui-react";

import { MedicalInfo, Patient } from "../helpers/types";
import { LeftAlignedDiv, StyledButton } from "./Shared";
import { PossibleSteps } from "./Step";

type SummaryProps = {
  medicalInfo: MedicalInfo;
  nextButton: ReactNode;
  patient: Patient;
  prevButton: ReactNode;
  specificStepCallback: (step: PossibleSteps) => void;
};

const Summary = ({
  medicalInfo,
  nextButton,
  patient,
  prevButton,
  specificStepCallback,
}: SummaryProps) => {
  return (
    <LeftAlignedDiv>
      <Header as="h3">Demographic Data</Header>
      <StyledButton
        icon="pencil"
        circular
        floated="right"
        onClick={() => specificStepCallback(PossibleSteps.medicalQuestions)}
        size="small"
      />

      <p>First Name: {patient.firstName}</p>
      <p>Last Name: {patient.lastName}</p>
      {patient.gender !== "" && <p>Gender: {patient.gender}</p>}
      <p>Date of Birth: {patient.dateOfBirth}</p>
      <p>Email: {patient.email}</p>
      <p>Phone Number: {patient.phoneNumber}</p>
      <p>Street Address: {patient.streetAddress}</p>
      <p>City: {patient.city}</p>
      <p>State: {patient.state}</p>
      <p>Zip: {patient.zip}</p>
      {patient.maritalStatus !== "" && (
        <p>MaritalStatus: {patient.maritalStatus}</p>
      )}
      {patient.condition !== "" && <p>Condition: {patient.condition}</p>}

      <hr />
      <Header as="h3">Medical Questions</Header>
      <StyledButton
        icon="pencil"
        circular
        floated="right"
        onClick={() => specificStepCallback(PossibleSteps.medicalQuestions)}
        size="small"
      />

      <p>
        Do you smoke any tobacco products?
        <br />
        {medicalInfo.tobacco.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.tobacco.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      <p>
        Do you drink alcohol?
        <br />
        {medicalInfo.alcohol.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.alcohol.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      <p>
        Have you regularly used illicit drugs?
        <br />
        {medicalInfo.drugs.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.drugs.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      <p>
        Current medications
        <br />
        {medicalInfo.medications.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.medications.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      <p>
        Medication allergies or reactions
        <br />
        {medicalInfo.allergies.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.allergies.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      <p>
        List any surgeries or hospital stays you have had and their approximate
        date / year
        <br />
        {medicalInfo.hospitalization.isConsumingOrHas ? (
          <p>
            Yes
            <br />
            {medicalInfo.hospitalization.details}
          </p>
        ) : (
          "No"
        )}
      </p>

      {prevButton}
      {nextButton}
    </LeftAlignedDiv>
  );
};

export default Summary;
