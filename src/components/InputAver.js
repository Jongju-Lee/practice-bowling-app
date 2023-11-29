import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const InputAver = ({ name, memberAvers, setMemberAvers }) => {
  const [defaultValue, setDefaultValue] = useState(0);

  const changeDefaultValue = (e) => {
    setDefaultValue(e.target.value);
    setMemberAvers({
      ...memberAvers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={4.4}>
      <Grid>
        <Select
          label="숫자 선택"
          name={name}
          value={defaultValue}
          onChange={changeDefaultValue}
          sx={{
            width: "100px",
            border: "1px solid white",
            color: "white",
            height: "55px",
          }}
        >
          {/* 150부터 200까지 5씩 증가하는 메뉴 아이템 생성 */}
          {Array.from({ length: (200 - 150) / 5 + 1 }, (_, index) => (
            <MenuItem key={index} value={150 + index * 5}>
              {150 + index * 5}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default InputAver;
