import { Grid, Typography } from "@mui/material";
import { Cupon } from "../../models/cupons";
import { colors } from "../../constants";

interface Props {
  cupon: Cupon;
}

function CuponItem({ cupon }: Props) {
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
      <Grid xs={4}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {cupon.name}
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {cupon.from}
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
          variant="h6"
        >
          {cupon.to}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CuponItem;
