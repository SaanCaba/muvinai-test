import { Collapse, Grid, Paper, Typography } from "@mui/material";
import HistoryHeader from "../HistoryHeader";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useMemo, useState } from "react";
import { colors } from "../../../constants";
import { cupons } from "./data";
import CuponItem from "../../CuponItem";

function CuponsSection() {
  const [expanded, setExpanded] = useState(false);
  const cuponsData = useMemo(() => {
    return cupons;
  }, []);
  return (
    <Paper
      sx={{
        padding: "10px",
      }}
    >
      <HistoryHeader
        expanded={expanded}
        setExpanded={setExpanded}
        title="Cupones utilizados"
      >
        <ConfirmationNumberIcon color="success" />
      </HistoryHeader>
      <Collapse
        sx={{
          paddingTop: "15px",
        }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Grid
          container
          sx={{
            padding: "10px",
            border: `1px solid ${colors.primary}`,
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <Grid xs={4}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Nombre
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Desde
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Hasta
            </Typography>
          </Grid>
        </Grid>
        {cuponsData.map((el, i) => {
          return <CuponItem cupon={el} key={i} />;
        })}
      </Collapse>
    </Paper>
  );
}

export default CuponsSection;
