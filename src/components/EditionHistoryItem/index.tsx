import { Grid } from "@mui/material";
import { colors } from "../../constants";
import HistoryText from "../Helpers/HistoryText";

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
        <HistoryText
          title={editionHistory.operatorName}
          styles={{ fontSize: "17px" }}
        />
      </Grid>
      <Grid item xs={2}>
        <HistoryText
          title={editionHistory.action.element}
          styles={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            fontSize: "17px",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <HistoryText
          title={editionHistory.action.description}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "17px",
            whiteSpace: "nowrap",
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <HistoryText
          title={editionHistory.action.date}
          styles={{
            display: "flex",
            justifyContent: "end",
            fontSize: "17px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default EditionHistoryItem;
