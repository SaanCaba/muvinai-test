import { Box, Grid, TextField, Button } from "@mui/material";
import { PersonalData } from "../../models/personalData";
import { useState } from "react";
import GridItem from "../GridItemForm";
import Label from "../Helpers/Label";
import HighButton from "../HighButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseDate } from "./parseDate";

interface Props {
  data: PersonalData;
  handleEdit: (e: React.FormEvent, dataForm: PersonalData) => void;
  handleCancelEdit: () => void;
}

function PersonalDataForm({ data, handleEdit, handleCancelEdit }: Props) {
  const [dataForm, setDataForm] = useState({
    ...data,
    birth: parseDate(data.birth as string),
  });
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </GridItem>
        <GridItem>
          <Label name="Nacimiento" />
          <DatePicker
            selected={
              data.birth !== dataForm.birth
                ? dataForm.birth
                : (parseDate(data.birth as unknown as string) as Date)
            }
            onChange={(date) =>
              setDataForm({ ...dataForm, birth: date as Date })
            }
            dateFormat={"dd/MM/yyyy"}
            className="datepicker"
            required
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
          type="button"
          sx={{
            height: "50px",
            width: "120px",
            fontSize: "15px",
          }}
          variant="contained"
          color="error"
          onClick={handleCancelEdit}
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
