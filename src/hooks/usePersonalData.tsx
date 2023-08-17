import { useState } from "react";
import { PersonalData } from "../models/personalData";
import { formatDate } from "../components/PersonalDataForm/formatDate";

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
    fitMedical: {
      status: false,
      expiration: "",
    },
  });

  const editData = (dataForm: PersonalData) => {
    const formattedDate = formatDate(dataForm.birth as Date);
    setPersonalData({
      ...dataForm,
      picture: personalData.picture,
      birth: formattedDate,
    });
  };

  const editPicture = (picture: string) => {
    setPersonalData({
      ...personalData,
      picture,
    });
  };

  const editFitMedical = (status: boolean, expiration: string) => {
    setPersonalData({
      ...personalData,
      fitMedical: {
        status,
        expiration,
      },
    });
  };

  return { personalData, editData, editPicture, editFitMedical };
}

export default usePersonalData;
