import { Grid, Typography } from "@mui/material";
import { colors } from "../../constants";

interface Props {
  editionHistory: EditionHistory;
}

function EditionHistoryItem({ editionHistory }: Props) {
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
      <Grid item xs={4}>
        <span>{editionHistory.operatorName}</span>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {editionHistory.action.element}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {editionHistory.action.description}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <i>{editionHistory.action.date}</i>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default EditionHistoryItem;
