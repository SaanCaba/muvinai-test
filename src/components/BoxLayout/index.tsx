import { Box } from "@mui/material";
import React from "react";

function BoxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        paddingLeft: "70px",
        paddingRight: "70px",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}

export default BoxLayout;
