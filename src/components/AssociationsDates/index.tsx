import { Grid } from "@mui/material";
import { colors } from "../../constants";
import HistoryText from "../Helpers/HistoryText";

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
        <HistoryText
          title={association.from}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <HistoryText
          title={association.to}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default AssociationDates;
