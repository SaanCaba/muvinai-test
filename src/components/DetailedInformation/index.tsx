import BoxLayout from "../BoxLayout";
import SectionTitle from "../Helpers/SectionTitle";
import { Grid, Typography, Button, Box, Divider } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import Field from "../Field";
import Label from "../Helpers/Label";
import { useState } from "react";
import { colors } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../PersonalDataForm/formatDate";
import FitMedicalField from "./FitMedicalField";

interface Props {
  fitMedical: { status: boolean; expiration: string | Date };
  editFitMedical: (status: boolean, expiration: string) => void;
}

function DetailedInformation({ fitMedical, editFitMedical }: Props) {
  const [localFitMedical, setLocalFitMedical] = useState<null | string>(null);
  const [localExpiration, setLocalExpiration] = useState(new Date());
  const handleUpdateFitMedical = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setLocalFitMedical(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editFitMedical(true, formatDate(localExpiration));
    setLocalFitMedical(null);
  };

  return (
    <BoxLayout>
      <SectionTitle title="Información detallada">
        <RecentActorsIcon />
      </SectionTitle>
      <Grid
        container
        sx={{
          display: "flex",
        }}
      >
        <Field fieldName="Pago" field="Agosto 2023" />
        <Field fieldName="ID de Socio" field="#39389" />
        <Field fieldName="Estado" field="En Actividad" />
        <FitMedicalField fieldName="Apto médico">
          {fitMedical.status ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>Aprobado</span>
              <span>Expira: {fitMedical.expiration as string}</span>
            </Box>
          ) : (
            "Desaprobado / No enviado"
          )}
        </FitMedicalField>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h6" sx={{ paddingBottom: "15px" }}>
          ¿Deseas subir un apto médico?
        </Typography>
        <label className="fitMedicalLabel">
          Seleccionar apto
          <input
            onChange={(e) => handleUpdateFitMedical(e)}
            accept="image/*"
            type="file"
            hidden
          />
        </label>
      </Box>
      {localFitMedical !== null && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a
            target="__blank"
            href={localFitMedical}
            style={{ width: "min-content" }}
          >
            <img width={300} height={300} src={localFitMedical} />
          </a>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Box>
              <Label name="Fecha de caducidad" />
              <DatePicker
                selected={localExpiration}
                onChange={(date) => date !== null && setLocalExpiration(date)}
                dateFormat={"dd/MM/yyyy"}
                className="datepicker"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  width: "145px",
                }}
                variant="contained"
                color="error"
                onClick={() => {
                  editFitMedical(false, fitMedical.expiration as string);
                  setLocalFitMedical(null);
                }}
                type="button"
              >
                Denegar
              </Button>
              <Button
                sx={{
                  width: "145px",
                }}
                variant="contained"
                color="success"
                type="submit"
              >
                Aprobar
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <Divider
        sx={{
          background: colors.primary,
          marginTop: "10px",
        }}
      />
    </BoxLayout>
  );
}

export default DetailedInformation;
