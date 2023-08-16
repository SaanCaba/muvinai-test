import { Collapse, Grid, Paper, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import HistoryHeader from "../HistoryHeader";
import RedoIcon from "@mui/icons-material/Redo";
import { colors } from "../../../constants";
import { totalAccess } from "./data";
import AccesseItem from "../../AccesseItem";

function AccessesSection() {
  const [expanded, setExpanded] = useState(false);

  const accesses = useMemo(() => {
    return totalAccess;
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
        title="Últimos accesos"
      >
        <RedoIcon color="success" />
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
          sx={{
            padding: "10px",
            border: `1px solid ${colors.primary}`,
            borderRadius: "5px 5px 0px 0px",
          }}
          container
        >
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Sede
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Cantidad de veces
            </Typography>
          </Grid>
        </Grid>
        {accesses.map((el, i) => {
          return <AccesseItem accesse={el} key={i} />;
        })}
      </Collapse>
    </Paper>
  );
}

export default AccessesSection;
