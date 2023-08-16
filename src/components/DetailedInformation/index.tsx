import BoxLayout from "../BoxLayout";
import SectionTitle from "../Helpers/SectionTitle";
import { Grid, Typography, Button, Box, TextField } from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import Field from "../Field";
import Label from "../Helpers/Label";
import { useState } from "react";

interface Props {
  fitMedical: boolean;
  editFitMedical: (val: boolean) => void;
}

function FitMedicalField({
  fieldName,
  children,
}: {
  fieldName: string;
  children: React.ReactNode;
}) {
  return (
    <Grid item xs={3}>
      <Label name={fieldName} />
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="h6"
      >
        {children}
      </Typography>
    </Grid>
  );
}

function DetailedInformation({ fitMedical, editFitMedical }: Props) {
  const [localFitMedical, setLocalFitMedical] = useState<null | string>(null);
  const handleUpdateFitMedical = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setLocalFitMedical(URL.createObjectURL(e.target.files[0]));
    }
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
          {fitMedical ? "Aprobado" : "Desaprobado / No enviado"}
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
                editFitMedical(false);
                setLocalFitMedical(null);
              }}
            >
              Denegar
            </Button>
            <Button
              sx={{
                width: "145px",
              }}
              variant="contained"
              color="success"
              onClick={() => {
                editFitMedical(true);
                setLocalFitMedical(null);
              }}
            >
              Aprobar
            </Button>
          </Box>
          <Box>
            <Label name="Fecha de caducidadnpm rn" />
            <TextField
              type="date"
              sx={{
                width: "300px",
              }}
            />
          </Box>
        </Box>
      )}
    </BoxLayout>
  );
}

export default DetailedInformation;
