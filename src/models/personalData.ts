export interface PersonalData {
  firstName: string;
  lastName: string;
  activePlan: string;
  dni: string;
  phoneNumber: string;
  high: boolean;
  mail: string;
  birth: string | Date;
  picture: any;
  fitMedical: boolean;
}

export interface PersonalDataForm extends PersonalData {
  birth: Date;
}
