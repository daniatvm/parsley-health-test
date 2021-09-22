import React, { useState } from "react";
import { CheckboxProps, Form, Header } from "semantic-ui-react";

import { MedicalInfo, Patient } from "../helpers/types";
import { FlexDisplayedDiv, Label, P, StyledButton } from "./Shared";

type SubmitFormProps = {
  medicalInfo: MedicalInfo;
  patient: Patient;
};

const SubmitForm = ({ medicalInfo, patient }: SubmitFormProps) => {
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.SyntheticEvent<HTMLElement>,
    data: CheckboxProps
  ) => {
    if (data.checked !== undefined) {
      setAccepted(data.checked);
    }
  };

  const handleSubmit = () => {
    console.log(patient);
    console.log(medicalInfo);
  };

  return (
    <>
      <Header as="h2">Terms</Header>
      <P>
        Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia
        bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis
        euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget
        urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur
        ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.
        Donec ullamcorper nulla non metus auctor fringilla.
      </P>
      <Form>
        <Form.Field>
          <FlexDisplayedDiv>
            <Label>Do you accept the terms?</Label>
            <Form.Checkbox
              autoFocus
              name="accepted"
              onChange={handleInputChange}
              checked={accepted}
            />
          </FlexDisplayedDiv>
        </Form.Field>

        <StyledButton size="small" disabled={!accepted} onClick={handleSubmit}>
          Submit
        </StyledButton>
      </Form>
    </>
  );
};

export default SubmitForm;
