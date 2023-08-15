import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
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

function PersonalSection() {
  const { personalData, editData, editPicture } = usePersonalData();
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
      }}
      component="section"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          paddingTop: "40px",
          paddingLeft: "70px",
          paddingRight: "70px",
          position: "relative",
        }}
      >
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
            sx={{ width: 100, height: 100 }}
            alt="profile photo"
            src={!personalData.picture ? defaultAvatar : personalData.picture}
          />
          <EditAvatar editPicture={handleEditPicture} />
        </Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
          }}
        >
          {personalData.firstName}
        </Typography>
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
          }}
        />
      </Box>

      <Box></Box>
    </Paper>
  );
}

export default PersonalSection;
