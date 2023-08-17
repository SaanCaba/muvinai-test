import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { colors } from "../../constants";
import usePersonalData from "../../hooks/usePersonalData";
import Field from "../Field";
import defaultAvatar from "../../assets/Default-avatar.jpg";
import { useState } from "react";
import PersonalDataForm from "../PersonalDataForm";
import { PersonalData } from "../../models/personalData";
import EditAvatar from "../EditAvatar";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import BoxLayout from "../BoxLayout";
import SectionTitle from "../Helpers/SectionTitle";
import DetailedInformation from "../DetailedInformation";
import Contact from "../Contact";

function PersonalSection() {
  const { personalData, editData, editPicture, editFitMedical } =
    usePersonalData();
  const [edit, setEdit] = useState(false);

  const handleEdit = (e: React.FormEvent, dataForm: PersonalData) => {
    e.preventDefault();
    editData(dataForm);
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
      <BoxLayout>
        <Box
          sx={{
            position: "absolute",
            top: "-60px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            transform: "translateX(-70px)",
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              border: `2px solid ${colors.primary}`,
              background: "white",
            }}
            alt="profile photo"
            src={!personalData.picture ? defaultAvatar : personalData.picture}
          />
          <EditAvatar editPicture={handleEditPicture} />
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            paddingTop: "50px",
          }}
        >
          {personalData.firstName} {personalData.lastName} <i>#39389</i>
        </Typography>
        <SectionTitle title="Información personal">
          <AssignmentIndIcon />
        </SectionTitle>
        {edit ? (
          <PersonalDataForm handleEdit={handleEdit} data={personalData} />
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
              <Field fieldName="Nacimiento" field={personalData.birth} />
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
        <Divider
          sx={{
            background: colors.primary,
            marginTop: "10px",
          }}
        />
      </BoxLayout>
      <DetailedInformation
        editFitMedical={editFitMedical}
        fitMedical={personalData.fitMedical}
      />
      <Contact />
    </Paper>
  );
}

export default PersonalSection;
