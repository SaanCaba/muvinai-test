import { Paper, Collapse, Grid } from "@mui/material";
import React, { useMemo, useState } from "react";
import HistoryHeader from "../HistoryHeader";
import { editionHistory } from "./data";

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
      />
      <Collapse
        sx={{
          paddingTop: "15px",
        }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      ></Collapse>
    </Paper>
  );
}

export default EditionHistorySection;
