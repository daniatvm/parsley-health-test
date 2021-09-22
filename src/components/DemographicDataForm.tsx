import React, { ReactNode } from "react";
import {
  Dropdown,
  DropdownProps,
  Form,
  InputProps,
  SelectProps,
  TextAreaProps,
} from "semantic-ui-react";

import {
  conditions,
  conditionsV2,
  genderOptions,
  maritalOptions,
} from "../helpers/data";
import { Patient } from "../helpers/types";
import { Label } from "./Shared";

type DemographicDataFormProps = {
  inputChangeCallback: (
    e: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps | InputProps | SelectProps | TextAreaProps
  ) => void;
  nextButton: ReactNode;
  patient: Patient;
};

const DemographicDataForm = ({
  inputChangeCallback,
  nextButton,
  patient,
}: DemographicDataFormProps) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field required>
          <Label>First Name</Label>
          <Form.Input
            autoFocus
            name="firstName"
            onChange={inputChangeCallback}
            value={patient.firstName}
          />
        </Form.Field>

        <Form.Field required>
          <Label>Last Name</Label>
          <Form.Input
            name="lastName"
            onChange={inputChangeCallback}
            value={patient.lastName}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <Label>Gender</Label>
          <Form.Select
            options={genderOptions}
            name="gender"
            onChange={inputChangeCallback}
            value={patient.gender}
          />
        </Form.Field>

        <Form.Field>
          <Label>Marital Status</Label>
          <Form.Select
            options={maritalOptions}
            name="maritalStatus"
            onChange={inputChangeCallback}
            value={patient.maritalStatus}
          />
        </Form.Field>

        <Form.Field required>
          <Label>Date of birth</Label>
          <Form.Input
            type="date"
            name="dateOfBirth"
            onChange={inputChangeCallback}
            value={patient.dateOfBirth}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field required>
          <Label>Email</Label>
          <Form.Input
            type="email"
            name="email"
            onChange={inputChangeCallback}
            value={patient.email}
          />
        </Form.Field>

        <Form.Field required>
          <Label>Phone Number</Label>
          <Form.Input
            type="tel"
            name="phoneNumber"
            onChange={inputChangeCallback}
            value={patient.phoneNumber}
          />
        </Form.Field>
      </Form.Group>

      <Form.Field required>
        <Label>Street address</Label>
        <Form.TextArea
          name="streetAddress"
          onChange={inputChangeCallback}
          value={patient.streetAddress}
        />
      </Form.Field>

      <Form.Group widths="equal">
        <Form.Field required>
          <Label>City</Label>
          <Form.Input
            name="city"
            onChange={inputChangeCallback}
            value={patient.city}
          />
        </Form.Field>

        <Form.Field required>
          <Label>State</Label>
          <Form.Input
            name="state"
            onChange={inputChangeCallback}
            value={patient.state}
          />
        </Form.Field>

        <Form.Field required>
          <Label>Zip</Label>
          <Form.Input
            name="zip"
            onChange={inputChangeCallback}
            value={patient.zip}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <Label>Conditions</Label>
          <p>Conditions filtered</p>
          <Dropdown
            placeholder="Type to search conditions"
            search
            selection
            options={conditionsV2}
            name="condition"
            onChange={inputChangeCallback}
          />
        </Form.Field>

        <Form.Field>
          <Label>Conditions</Label>
          <p>Conditions with categories</p>
          <Dropdown placeholder="Type to search conditions" search labeled>
            <Dropdown.Menu>
              {conditions.map((condition) => (
                <React.Fragment key={condition.type}>
                  <Dropdown.Header content={condition.type} />
                  <Dropdown.Divider />
                  {condition.options.map((option) => (
                    <Dropdown.Item
                      key={option.value}
                      text={option.value}
                      value={option.value}
                    />
                  ))}
                </React.Fragment>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
      </Form.Group>

      {nextButton}
    </Form>
  );
};

export default DemographicDataForm;
