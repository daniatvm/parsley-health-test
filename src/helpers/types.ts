export type Patient = {
  city: string;
  condition: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
  maritalStatus: string;
  state: string;
  streetAddress: string;
  zip: string;
};

type PatientResponse = {
  isConsumingOrHas: boolean;
  details: string;
};

export type MedicalInfo = {
  tobacco: PatientResponse;
  alcohol: PatientResponse;
  drugs: PatientResponse;
  medications: PatientResponse;
  allergies: PatientResponse;
  hospitalization: PatientResponse;
};
