import { PaymentHistory } from "../../models/paymentHistory";
import { Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { colors } from "../../constants";
import HistoryText from "../Helpers/HistoryText";
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
        "&:last-child": {
          borderRadius: "0px 0px 5px 5px",
        },
      }}
    >
      <Grid item xs={3}>
        <HistoryText
          title={paymentHistory.year}
          styles={{ color: colors.primary, fontSize: "17px" }}
        />
      </Grid>
      <Grid item xs={2}>
        <HistoryText
          title={
            paymentHistory.payments.card.brand +
            "  #" +
            paymentHistory.payments.card.lastFourDigits
          }
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "17px",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <HistoryText
          title={Number(paymentHistory.payments.amount).toLocaleString(
            "es-AR",
            {
              style: "currency",
              currency: "ARS",
            }
          )}
          styles={{
            display: "flex",
            justifyContent: "center",
            fontSize: "17px",
          }}
        />
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
        <HistoryText
          title={paymentHistory.payments.date}
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

export default PaymentHistoryItem;
