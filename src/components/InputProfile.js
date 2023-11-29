import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const MyStyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // 아웃라인 색상
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "white", // 호버 상태의 아웃라인 색상
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // 포커스됐을 때의 아웃라인 색상
    },
    "& .MuiInputBase-input": {
      color: "white", // 텍스트 색상
      width: "7rem",
    },
  },
});

const InputProfile = ({ idx, text, name, value, onChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid>
        <MyStyledTextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder={`${idx}${text}`}
          variant="outlined"
          sx={{ mt: 0.5 }}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

export default InputProfile;
