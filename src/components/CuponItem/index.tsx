import { Grid } from "@mui/material";
import { Cupon } from "../../models/cupons";
import { colors } from "../../constants";
import HistoryText from "../Helpers/HistoryText";

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
        <HistoryText
          title={cupon.name}
          styles={{
            display: "flex",
            justifyContent: "start",
            fontSize: "18px",
          }}
        />
      </Grid>
      <Grid xs={2}>
        <HistoryText
          title={cupon.from}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        />
      </Grid>
      <Grid xs={2}>
        <HistoryText
          title={cupon.to}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        />
      </Grid>
      <Grid xs={4}>
        <HistoryText
          title={cupon.discount}
          styles={{
            display: "flex",
            justifyContent: "end",
            fontSize: "18px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default CuponItem;
