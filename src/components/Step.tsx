import React from "react";
import { Step } from "semantic-ui-react";

const TOTAL_STEPS = 4;
export enum PossibleSteps {
  demographicData,
  medicalQuestions,
  summary,
  submit,
}

type StepWrapperProps = {
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  tittle: string;
};

const StepWrapper = ({
  active,
  completed,
  disabled,
  tittle,
}: StepWrapperProps) => {
  return (
    <Step active={active} completed={completed} disabled={disabled}>
      <Step.Content>
        <Step.Title>{tittle}</Step.Title>
      </Step.Content>
    </Step>
  );
};

type OrderedStepProps = {
  currentStep: PossibleSteps;
};

const OrderedStep = ({ currentStep }: OrderedStepProps) => {
  return (
    <Step.Group ordered widths={TOTAL_STEPS}>
      <StepWrapper
        tittle={"Demographic data"}
        active={currentStep === PossibleSteps.demographicData}
        completed={currentStep > PossibleSteps.demographicData}
        disabled={currentStep < PossibleSteps.demographicData}
      />

      <StepWrapper
        tittle={"Medical questions"}
        active={currentStep === PossibleSteps.medicalQuestions}
        completed={currentStep > PossibleSteps.medicalQuestions}
        disabled={currentStep < PossibleSteps.medicalQuestions}
      />

      <StepWrapper
        tittle={"Summary"}
        active={currentStep === PossibleSteps.summary}
        completed={currentStep > PossibleSteps.summary}
        disabled={currentStep < PossibleSteps.summary}
      />

      <StepWrapper
        tittle={"Submit"}
        active={currentStep === PossibleSteps.submit}
        completed={currentStep > PossibleSteps.submit}
        disabled={currentStep < PossibleSteps.submit}
      />
    </Step.Group>
  );
};

export default OrderedStep;
