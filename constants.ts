
import { Criterion } from './types';

export const DEFAULT_ADULT_CRITERIA: Criterion[] = [
  // General Documentation
  { id: 'a1', label: 'Intake/ Eligibility Submittal detailed in Case Notes', category: 'General Documentation', value: null, note: '' },
  { id: 'a2', label: 'WIOA Application is uploaded with all required signatures', category: 'General Documentation', value: null, note: '' },
  { id: 'a3', label: 'Data validation within the application is accurate and supports the verification', category: 'General Documentation', value: null, note: '' },
  { id: 'a4', label: 'Release of Information form submitted/uploaded', category: 'General Documentation', value: null, note: '' },
  { id: 'a5', label: 'EO is Law Form and case note is entered verifying discussion of form', category: 'General Documentation', value: null, note: '' },
  { id: 'a6', label: 'SSN Disclosure form was provided to customer based on the intake case note', category: 'General Documentation', value: null, note: '' },
  { id: 'a7', label: 'I-9 supporting documents are valid and uploaded for Authorization to Work in the US', category: 'General Documentation', value: null, note: '' },
  { id: 'a8', label: 'US Citizenship form is uploaded with required signature', category: 'General Documentation', value: null, note: '' },
  { id: 'a9', label: 'If Male 18 or older, Selective Service documentation is uploaded or signed Waiver form is uploaded', category: 'General Documentation', value: null, note: '' },
  { id: 'a10', label: 'If applicable, client Release of UI Information form submitted/uploaded', category: 'General Documentation', value: null, note: '' },
  
  // Income & Priority
  { id: 'a11', label: "If the Applicant's eligibility is income based, calculations are correct and have supporting documentation on file.", category: 'Income & Priority', value: null, note: '' },
  { id: 'a12', label: 'Family Size is calculated correctly if income based', category: 'Income & Priority', value: null, note: '' },
  { id: 'a13', label: "If the Participant's Priority of Service is based on Public Assistance, supporting documents are on file to support eligibility", category: 'Income & Priority', value: null, note: '' },
  { id: 'a14', label: "If the participant's priority of service is based on basic skills deficiency, supporting documents are on file", category: 'Income & Priority', value: null, note: '' },
  { id: 'a15', label: "If participant's priority of service is based on Veteran status, supporting documents are on file", category: 'Income & Priority', value: null, note: '' },
  { id: 'a16', label: 'Priority of Service determined correctly and is stated in the intake case note', category: 'Income & Priority', value: null, note: '' },
  { id: 'a17', label: 'If priority #4 Adult, 25% CAP has not been exceeded or PD approval granted (on PD if over)', category: 'Income & Priority', value: null, note: '' },

  // Dislocated Worker Categories
  { id: 'dw1', label: 'DW- Cat 1: Laid Off, Receipt or exhaustion of UI, Unlikely to Return documented', category: 'Dislocated Worker', value: null, note: '' },
  { id: 'dw2', label: 'DW- Cat 2: Layoff due to permanent closure or substantial layoff of plant/facility; or Gen. Announcement within 180 days', category: 'Dislocated Worker', value: null, note: '' },
  { id: 'dw3', label: 'DW- Cat 3: Conditions affecting self-employment as result of Gen Economic Conditions or Natural Disaster in county of residency', category: 'Dislocated Worker', value: null, note: '' },
  { id: 'dw4', label: 'DW- Cat 4: Displaced Homemaker (Unpaid services in home & dependent on other income/no longer supported) or Dependent of Armed Forces member on active duty', category: 'Dislocated Worker', value: null, note: '' },
  { id: 'dw5', label: 'DW- Cat 5: Military Spouse or Military Spouse to a Service Member', category: 'Dislocated Worker', value: null, note: '' }
];

export const DEFAULT_YOUTH_CRITERIA: Criterion[] = [
  // Basic Requirements
  { id: 'y1', label: 'Intake/ Eligibility Submittal detailed in Case Notes', category: 'General Documentation', value: null, note: '' },
  { id: 'y2', label: 'WIOA Application is uploaded with all required signatures', category: 'General Documentation', value: null, note: '' },
  { id: 'y3', label: 'Self Attestation(s) Form Used as Last Resort', category: 'General Documentation', value: null, note: '' },
  { id: 'y4', label: 'If Minor under 18 or ward of the State, consent forms are signed by parent/guardian', category: 'General Documentation', value: null, note: '' },
  { id: 'y5', label: 'Uploaded documents reflect age at intake and verify program age requirements', category: 'General Documentation', value: null, note: '' },
  
  // In-School Youth Criteria
  { id: 'y6', label: 'Documentation in file for In School Status (Secondary or Post Secondary)', category: 'In-School Status', value: null, note: '' },
  { id: 'y7', label: 'Youth has documented eligibility under the 5% Low Income Exemption', category: 'In-School Status', value: null, note: '' },
  { id: 'y8', label: 'Youth Is Low-Income based on wages/earnings (calculated correctly & family size documented)', category: 'In-School Status', value: null, note: '' },
  { id: 'y9', label: '(OR) Youth is Low-Income based on High Poverty Area with documentation filed', category: 'In-School Status', value: null, note: '' },
  { id: 'y10', label: '(OR) Youth is Low-Income based on receipt of public assist./documentation in file', category: 'In-School Status', value: null, note: '' },
  { id: 'y11', label: '(OR) Youth is Low-Income based on Homeless Status/documentation in file', category: 'In-School Status', value: null, note: '' },
  { id: 'y12', label: '(OR) Youth is Low-Income based on free or reduced lunch/documentation in file', category: 'In-School Status', value: null, note: '' },
  { id: 'y13', label: '(OR) Youth is Low-Income based on being Foster Child on behalf of State/Local Gov.', category: 'In-School Status', value: null, note: '' },
  { id: 'y14', label: '(OR) Youth is Low-Income based on Disability whose own income meets 3.3 standards', category: 'In-School Status', value: null, note: '' },
  { id: 'y15', label: 'AND Youth is BSD (Basic Skills Deficient) with documentation filed/data entered correctly', category: 'In-School Status', value: null, note: '' },
  { id: 'y16', label: '(OR) English Language Learner with documentation filed/data entered correctly', category: 'In-School Status', value: null, note: '' },
  { id: 'y17', label: '(OR) Youth is an offender with documentation filed', category: 'In-School Status', value: null, note: '' },
  { id: 'y18', label: '(OR) Youth is Homeless with documentation filed', category: 'In-School Status', value: null, note: '' },
  { id: 'y19', label: '(OR) Youth is in Foster Care/Aged out/left for kinship/guardian/adoption', category: 'In-School Status', value: null, note: '' },
  { id: 'y20', label: '(OR) Youth is pregnant or parenting with documentation', category: 'In-School Status', value: null, note: '' },
  { id: 'y21', label: '(OR) Youth has disability with documentation', category: 'In-School Status', value: null, note: '' },
  { id: 'y22', label: '(OR) Youth requires additional assistance to complete educational program (BOARD APPROVAL OBTAINED)', category: 'In-School Status', value: null, note: '' },

  // Out-of-School Youth Criteria
  { id: 'y23', label: 'Youth is not Enrolled/attending school (Secondary or Postsecondary)', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y24', label: 'Youth is a school dropout/documentation in file', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y25', label: '(OR) Compulsory school age but has not attended for at least most recent complete school quarter', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y26', label: '(OR) Recipient of secondary school diploma AND is low-income AND basic skills deficient/ELL', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y27', label: '(OR) Youth is an offender with documentation', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y28', label: '(OR) Youth is homeless with documentation', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y29', label: '(OR) Youth is in Foster Care/Aged out/eligible under Chafee', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y30', label: '(OR) Youth is pregnant or parenting with documentation', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y31', label: '(OR) Youth has disability with documentation', category: 'Out-of-School Status', value: null, note: '' },
  { id: 'y32', label: '(OR) Youth requires additional assistance AND is low income (BOARD APPROVAL RECEIVED)', category: 'Out-of-School Status', value: null, note: '' },
  
  // Post Enrollment
  { id: 'y33', label: 'POST ENROLLMENT FOLLOW-UP Application is unexpired', category: 'Post Enrollment', value: null, note: '' },
  { id: 'y34', label: 'POST ENROLLMENT FOLLOW-UP Signed approval documents have been filed', category: 'Post Enrollment', value: null, note: '' }
];
