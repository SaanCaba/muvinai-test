import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";
import { PersonalData } from "../../models/personalData";
import { useMemo, useState } from "react";
import GridItem from "../GridItemForm";
import Label from "../Helpers/Label";
import HighButton from "../HighButton";

interface Props {
  data: PersonalData;
  handleEdit: (e: React.FormEvent, dataForm: PersonalData) => void;
}

function PersonalDataForm({ data, handleEdit }: Props) {
  const [dataForm, setDataForm] = useState(data);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    keyValue: string
  ) => {
    setDataForm({
      ...dataForm,
      [keyValue]: e.target.value,
    });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "grid",
        gap: "30px",
      }}
      onSubmit={(e) => handleEdit(e, dataForm)}
    >
      <Grid container rowSpacing={3} columnSpacing={15}>
        <GridItem>
          <Label name="Nombre" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="firstName"
            onChange={(e) => handleChange(e, "firstName")}
            value={dataForm.firstName}
          />
        </GridItem>
        <GridItem>
          <Label name="Apellido" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="lastName"
            value={dataForm.lastName}
            onChange={(e) => handleChange(e, "lastName")}
          />
        </GridItem>
        <GridItem>
          <Label name="Plan" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="activePlan"
            value={dataForm.activePlan}
            onChange={(e) => handleChange(e, "activePlan")}
          />
        </GridItem>
        <GridItem>
          <Label name="DNI" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="dni"
            value={dataForm.dni}
            onChange={(e) => handleChange(e, "dni")}
          />
        </GridItem>
        <GridItem>
          <Label name="Teléfono" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="phoneNumber"
            value={dataForm.phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
          />
        </GridItem>
        <GridItem>
          <Label name="Alta" />
          <HighButton
            data={dataForm}
            setData={setDataForm}
            high={dataForm.high}
          />
        </GridItem>
        <GridItem>
          <Label name="Email" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="mail"
            value={dataForm.mail}
            onChange={(e) => handleChange(e, "mail")}
          />
        </GridItem>
        <GridItem>
          <Label name="Nacimiento" />
          <TextField
            sx={{
              width: "260px",
            }}
            name="birth"
            value={dataForm.birth}
            onChange={(e) => handleChange(e, "birth")}
          />
        </GridItem>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "22px",
          gap: "30px",
        }}
      >
        <Button
          type="submit"
          sx={{
            height: "50px",
            width: "120px",
            fontSize: "15px",
          }}
          variant="contained"
          color="error"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          sx={{
            height: "50px",
            width: "min-content",
            fontSize: "15px",
          }}
          color="success"
          variant="contained"
        >
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  );
}

export default PersonalDataForm;
