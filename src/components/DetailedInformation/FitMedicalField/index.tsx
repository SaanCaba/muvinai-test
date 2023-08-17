import { Grid, Typography } from "@mui/material";
import Label from "../../Helpers/Label";

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

export default FitMedicalField;
