import { Box, Grid, Paper, Typography } from "@mui/material";
import { colors } from "../../constants";
import PaymentsHistorySection from "./PaymentsHistorySection";
import BoxLayout from "../BoxLayout";
import EditionHistorySection from "./EditionHistorySection";
import AssociationsSection from "./AssociationsSection";
import CuponsSection from "./CuponsSection";
import Accesses from "./AccessesSection";
import AccessesSection from "./AccessesSection";

function HistorySection() {
  return (
    <Paper
      sx={{
        width: "100%",
        background: "white",
        color: colors.primary,
        height: "min-content",
        marginTop: "50px",
        border: `1px solid ${colors.primary}`,
        paddingTop: "20px",
        paddingBottom: "20px",
        minHeight: "200px",
      }}
      component="section"
    >
      <BoxLayout>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          Historiales de pagos y más
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <PaymentsHistorySection />
          <EditionHistorySection />
          <CuponsSection />

          <Grid container>
            <Grid
              item
              xs={6}
              sx={{
                paddingRight: "10px",
              }}
            >
              <AssociationsSection />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                paddingLeft: "10px",
              }}
            >
              <AccessesSection />
            </Grid>
          </Grid>
        </Box>
      </BoxLayout>
    </Paper>
  );
}

export default HistorySection;
