import { useState } from "react";
import { PersonalData } from "../models/personalData";

function usePersonalData() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    firstName: "Santiago",
    lastName: "Caballero",
    activePlan: "Plan pro",
    dni: "43598732",
    phoneNumber: "1140398374",
    high: true,
    mail: "santi@gmail.com",
    birth: "29/11/2001",
    picture: null,
    fitMedical: false,
  });

  const editData = (dataForm: PersonalData) => {
    setPersonalData({
      ...dataForm,
      picture: personalData.picture,
    });
  };

  const editPicture = (picture: string) => {
    setPersonalData({
      ...personalData,
      picture,
    });
  };

  const editFitMedical = (fitMedicalStatus: boolean) => {
    setPersonalData({
      ...personalData,
      fitMedical: fitMedicalStatus,
    });
  };

  return { personalData, editData, editPicture, editFitMedical };
}

export default usePersonalData;
