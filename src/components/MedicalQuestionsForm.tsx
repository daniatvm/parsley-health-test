import React, { ReactNode } from "react";
import { CheckboxProps, Form, TextAreaProps } from "semantic-ui-react";

import { FlexDisplayedDiv, Label } from "./Shared";
import { MedicalInfo } from "../helpers/types";

type MedicalQuestionsFormProps = {
  inputChangeCallback: (
    e: React.SyntheticEvent<HTMLElement>,
    data: CheckboxProps | TextAreaProps
  ) => void;
  medicalInfo: MedicalInfo;
  nextButton: ReactNode;
  prevButton: ReactNode;
};

const MedicalQuestionsForm = ({
  inputChangeCallback,
  medicalInfo,
  nextButton,
  prevButton,
}: MedicalQuestionsFormProps) => {
  return (
    <Form>
      <Form.Field>
        <FlexDisplayedDiv>
          <Label>Do you smoke any tobacco products?</Label>
          <Form.Radio
            toggle
            autoFocus
            name="tobacco"
            onChange={inputChangeCallback}
            checked={medicalInfo.tobacco.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.tobacco.isConsumingOrHas && (
        <Form.Field>
          <Label>How much and how often?</Label>
          <Form.TextArea
            name="tobacco"
            onChange={inputChangeCallback}
            value={medicalInfo.tobacco.details}
          />
        </Form.Field>
      )}

      <Form.Field>
        <FlexDisplayedDiv>
          <Label>Do you drink alcohol?</Label>
          <Form.Radio
            toggle
            name="alcohol"
            onChange={inputChangeCallback}
            checked={medicalInfo.alcohol.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.alcohol.isConsumingOrHas && (
        <Form.Field>
          <Label>How much and how often?</Label>
          <Form.TextArea
            name="alcohol"
            onChange={inputChangeCallback}
            value={medicalInfo.alcohol.details}
          />
        </Form.Field>
      )}

      <Form.Field>
        <FlexDisplayedDiv>
          <Label>Have you regularly used illicit drugs?</Label>
          <Form.Radio
            toggle
            name="drugs"
            onChange={inputChangeCallback}
            checked={medicalInfo.drugs.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.drugs.isConsumingOrHas && (
        <Form.Field>
          <Label>How much and how often?</Label>
          <Form.TextArea
            name="drugs"
            onChange={inputChangeCallback}
            value={medicalInfo.drugs.details}
          />
        </Form.Field>
      )}

      <Form.Field>
        <FlexDisplayedDiv>
          <Label>Current medications</Label>
          <Form.Radio
            toggle
            name="medications"
            onChange={inputChangeCallback}
            checked={medicalInfo.medications.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.medications.isConsumingOrHas && (
        <Form.Field>
          <Label>
            Please list any medications you are currently taking including
            non-prescription medications, vitamins and supplements
          </Label>
          <Form.TextArea
            name="medications"
            onChange={inputChangeCallback}
            value={medicalInfo.medications.details}
          />
        </Form.Field>
      )}

      <Form.Field>
        <FlexDisplayedDiv>
          <Label>Allergies or reactions</Label>
          <Form.Radio
            toggle
            name="allergies"
            onChange={inputChangeCallback}
            checked={medicalInfo.allergies.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.allergies.isConsumingOrHas && (
        <Form.Field>
          <Label>Please list any allergies or reactions</Label>
          <Form.TextArea
            name="allergies"
            onChange={inputChangeCallback}
            value={medicalInfo.allergies.details}
          />
        </Form.Field>
      )}

      <Form.Field>
        <FlexDisplayedDiv>
          <Label>
            List any surgeries or hospital stays you have had and their
            approximate date / year
          </Label>
          <Form.Radio
            toggle
            name="hospitalization"
            onChange={inputChangeCallback}
            checked={medicalInfo.hospitalization.isConsumingOrHas}
          />
        </FlexDisplayedDiv>
      </Form.Field>

      {medicalInfo.hospitalization.isConsumingOrHas && (
        <Form.Field>
          <Label>Type of surgery or reason for hospitalization</Label>
          <Form.TextArea
            name="hospitalization"
            onChange={inputChangeCallback}
            value={medicalInfo.hospitalization.details}
          />
        </Form.Field>
      )}

      {prevButton}
      {nextButton}
    </Form>
  );
};

export default MedicalQuestionsForm;
