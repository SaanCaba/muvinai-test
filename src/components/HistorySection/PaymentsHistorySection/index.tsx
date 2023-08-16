import { Paper, Grid, Collapse, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { colors } from "../../../constants";
import PaidIcon from "@mui/icons-material/Paid";
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
      >
        <PaidIcon color="success" />
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
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                color: colors.primary,
              }}
            >
              Año
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
              Tarjeta / Últimos 4 digitos
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
              Total
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
              Estado del pago
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
              Fecha
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
