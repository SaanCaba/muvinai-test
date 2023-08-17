import { Box, Button, Grid, Paper } from "@mui/material";
import { colors } from "../../constants";
import usePersonalData from "../../hooks/usePersonalData";
import { useState } from "react";
import { PersonalData } from "../../models/personalData";
import DetailedInformation from "../DetailedInformation";
import Contact from "../Contact";
import PersonalInformation from "../PersonalInformation";
import PersonalDataForm from "../PersonalDataForm";
import Field from "../Field";
import BoxLayout from "../BoxLayout";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

function PersonalSection() {
  const { personalData, editData, editPicture, editFitMedical } =
    usePersonalData();
  const [edit, setEdit] = useState(false);

  const handleEdit = (e: React.FormEvent, dataForm: PersonalData) => {
    e.preventDefault();
    editData(dataForm);
    setEdit(false);
  };

  const handleCancelEdit = () => {
    setEdit(false);
  };

  const handleEditPicture = (picture: string) => {
    editPicture(picture);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        background: "white",
        color: colors.primary,
        height: "min-content",
        minHeight: "200px",
        border: `1px solid ${colors.primary}`,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      component="section"
    >
      <PersonalInformation
        personalData={personalData}
        handleEditPicture={handleEditPicture}
      >
        {edit ? (
          <PersonalDataForm
            handleEdit={handleEdit}
            data={personalData}
            handleCancelEdit={handleCancelEdit}
          />
        ) : (
          <>
            <Grid container rowSpacing={1}>
              <Field fieldName="Nombre" field={personalData.firstName} />
              <Field fieldName="Apellido" field={personalData.lastName} />
              <Field fieldName="Plan" field={personalData.activePlan} />
              <Field fieldName="DNI" field={personalData.dni} />
            </Grid>
            <Grid container rowSpacing={1}>
              <Field fieldName="Teléfono" field={personalData.phoneNumber} />
              <Field fieldName="Alta" field={personalData.high} />
              <Field fieldName="Email" field={personalData.mail} />
              <Field
                fieldName="Nacimiento"
                field={personalData.birth as string}
              />
            </Grid>
          </>
        )}
        {!edit && (
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <Button
              sx={{
                height: "50px",
                width: "120px",
                fontSize: "15px",
              }}
              onClick={() => setEdit(true)}
              variant="contained"
            >
              Editar
            </Button>
          </Box>
        )}
      </PersonalInformation>
      <DetailedInformation
        editFitMedical={editFitMedical}
        fitMedical={personalData.fitMedical}
      />
      <Contact />
      <BoxLayout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            startIcon={<ConfirmationNumberIcon />}
            color="success"
            variant="contained"
          >
            Aplicar cupón de descuento
          </Button>
          <Button
            startIcon={<DoDisturbIcon />}
            color="error"
            variant="contained"
          >
            Invalidar accesso
          </Button>
        </Box>
      </BoxLayout>
    </Paper>
  );
}

export default PersonalSection;
