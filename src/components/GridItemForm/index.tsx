import { Box, Grid } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function GridItem({ children }: Props) {
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}

export default GridItem;
