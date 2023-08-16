import { Paper, Grid, Collapse, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { colors } from "../../../constants";

import { paymentHistory } from "./data";
import PaymentHistoryItem from "../../PaymentHistoryItem";
import HistoryHeader from "../HistoryHeader";

function PaymentsHistorySection() {
  const [expanded, setExpanded] = useState(false);
  const paymentsHistory = useMemo(() => {
    return paymentHistory;
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
        title="Historial de pagos"
      />
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
          }}
        >
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                color: colors.primary,
              }}
            >
              Year
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
              Card / Last 4 Digits
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
              Amount
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
              Payment Status
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "end",
                color: colors.primary,
              }}
            >
              Date
            </Typography>
          </Grid>
        </Grid>
        {paymentsHistory.map((el, i) => {
          return <PaymentHistoryItem paymentHistory={el} key={i} />;
        })}
      </Collapse>
    </Paper>
  );
}

export default PaymentsHistorySection;
