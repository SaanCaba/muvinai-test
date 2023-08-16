import { Box, Grid, Typography } from "@mui/material";
import Label from "../Helpers/Label";

interface Props {
  field: string | boolean;
  fieldName: string;
}

function Field({ field, fieldName }: Props) {
  return (
    <Grid item xs={3}>
      <Label name={fieldName} />
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="h6"
      >
        {typeof field === "boolean" ? (field ? "Activo" : "Inactivo") : field}
      </Typography>
    </Grid>
  );
}

export default Field;
