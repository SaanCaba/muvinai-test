import { Collapse, Grid, Paper, Typography } from "@mui/material";
import HistoryHeader from "../HistoryHeader";
import GroupIcon from "@mui/icons-material/Group";
import { useMemo, useState } from "react";
import { associations } from "./data";
import { colors } from "../../../constants";
import AssociationDates from "../../AssociationsDates";
function AssociationsSection() {
  const [expanded, setExpanded] = useState(false);
  const totalAssociations = useMemo(() => {
    return associations;
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
        title="Asociaciones pasadas"
      >
        <GroupIcon color="success" />
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
          <Grid xs={6}>
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
          <Grid xs={6}>
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
        {totalAssociations.map((el) => {
          return <AssociationDates association={el} />;
        })}
      </Collapse>
    </Paper>
  );
}

export default AssociationsSection;
