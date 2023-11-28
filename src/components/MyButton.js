import React from "react";
import { Button } from "@mui/material";

const MyButton = ({ text, onClick, sx }) => {
  return (
    <div>
      <Button onClick={onClick} variant="outlined" color="inherit" sx={sx}>
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
