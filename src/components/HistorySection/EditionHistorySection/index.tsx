import { Paper, Collapse, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import HistoryHeader from "../HistoryHeader";
import { editionHistory } from "./data";
import { colors } from "../../../constants";
import EditIcon from "@mui/icons-material/Edit";

import EditionHistoryItem from "../../EditionHistoryItem";
function EditionHistorySection() {
  const [expanded, setExpanded] = useState(false);
  const editionsHistory = useMemo(() => {
    return editionHistory;
  }, []);
  return (
    <Paper
      sx={{
        padding: "10px",
      }}
    >
      <HistoryHeader
        setExpanded={setExpanded}
        expanded={expanded}
        title="Historial de edición"
      >
        <EditIcon color="success" />
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
          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                color: colors.primary,
              }}
            >
              Operador
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Dato modificado
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary,
              }}
            >
              Descripción
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "end",
                color: colors.primary,
              }}
            >
              Fecha
            </Typography>
          </Grid>
        </Grid>
        {editionsHistory.map((el, i) => {
          return <EditionHistoryItem editionHistory={el} key={i} />;
        })}
      </Collapse>
    </Paper>
  );
}

export default EditionHistorySection;
