import { Grid, Typography } from "@mui/material";
import { colors } from "../../constants";

interface Props {
  association: { from: string; to: string };
}

function AssociationDates({ association }: Props) {
  return (
    <Grid
      container
      sx={{
        padding: "10px",
        border: `1px solid ${colors.primary}`,
        "&:last-child": {
          borderRadius: "0px 0px 5px 5px",
        },
      }}
    >
      <Grid item xs={6}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {association.from}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {association.to}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AssociationDates;
