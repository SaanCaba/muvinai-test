import { Grid } from "@mui/material";
import React from "react";
import HistoryText from "../Helpers/HistoryText";
import { colors } from "../../constants";

interface Props {
  accesse: { place: string; total: number };
}

function AccesseItem({ accesse }: Props) {
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
          title={accesse.place}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <HistoryText
          title={accesse.total}
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

export default AccesseItem;
