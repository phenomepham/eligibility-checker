
export enum ProgramType {
  ADULT = 'Adult',
  YOUTH = 'Youth'
}

export interface Criterion {
  id: string;
  label: string;
  category: string;
  value: boolean | null;
  note: string;
  isCustom?: boolean;
}

export interface Participant {
  firstName: string;
  lastName: string;
  dob: string;
  ssn: string;
  email: string;
  phone: string;
  address: string;
  programType: ProgramType;
}

export interface EligibilityState {
  participant: Participant;
  criteria: Criterion[];
}
