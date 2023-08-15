import { Button } from "@mui/material";
import React from "react";
import { PersonalData } from "../../models/personalData";

interface Props {
  high: boolean;
  setData: (data: PersonalData) => void;
  data: PersonalData;
}

function HighButton({ high, setData, data }: Props) {
  return high ? (
    <Button
      sx={{
        width: "260px",
        height: "56px",
      }}
      fullWidth
      color="error"
      variant="contained"
      onClick={() =>
        setData({
          ...data,
          high: false,
        })
      }
    >
      Dar de baja
    </Button>
  ) : (
    <Button
      sx={{
        width: "260px",
        height: "56px",
      }}
      fullWidth
      color="success"
      variant="contained"
      onClick={() =>
        setData({
          ...data,
          high: true,
        })
      }
    >
      Dar de alta
    </Button>
  );
}

export default HighButton;
