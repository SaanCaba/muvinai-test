import { Typography } from "@mui/material";
import React from "react";

function SectionTitle({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Typography
      variant="h5"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {children} {title}
    </Typography>
  );
}

export default SectionTitle;
