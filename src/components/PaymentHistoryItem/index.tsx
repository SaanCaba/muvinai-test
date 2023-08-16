import { PaymentHistory } from "../../models/paymentHistory";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { colors } from "../../constants";
interface Props {
  paymentHistory: PaymentHistory;
}

function PaymentHistoryItem({ paymentHistory }: Props) {
  return (
    <Grid
      container
      sx={{
        padding: "10px",
        border: `1px solid ${colors.primary}`,
      }}
    >
      <Grid item xs={3}>
        <span style={{ color: colors.primary }}>{paymentHistory.year}</span>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {paymentHistory.payments.card.brand}
          <i> {"#" + paymentHistory.payments.card.lastFourDigits}</i>
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Number(paymentHistory.payments.amount).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {paymentHistory.payments.refused ? (
            <CancelIcon color="error" />
          ) : (
            <CheckCircleIcon color="success" />
          )}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <i>{paymentHistory.payments.date}</i>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PaymentHistoryItem;
