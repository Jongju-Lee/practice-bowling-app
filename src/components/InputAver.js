import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styled from "styled-components";

const InputAver = () => {
  const MyStyledSelect = styled(Select)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white", // 아웃라인 색상을 변경합니다.
      },
      "&:hover fieldset": {
        borderColor: "white", // 호버 상태의 아웃라인 색상을 변경합니다.
      },
      "&.Mui-focused fieldset": {
        borderColor: "white", // 포커스 상태의 아웃라인 색상을 변경합니다.
      },
      "& .MuiSelect-icon": {
        color: "white", // 셀렉트 아이콘의 색상을 변경합니다.
      },
    },
    "& .MuiInputBase-input": {
      color: "white", // 텍스트 색상을 변경합니다.
    },
  });

  const MyStyledMenuItem = styled(MenuItem)({
    color: "black", // 메뉴 아이템의 텍스트 색상을 변경합니다.
  });

  const [selectedValue, setSelectedValue] = useState(150);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Grid container spacing={4.4}>
      <Grid>
        <MyStyledSelect
          label="숫자 선택"
          value={selectedValue}
          onChange={handleChange}
        >
          {/* 150부터 200까지 5씩 증가하는 메뉴 아이템 생성 */}
          {Array.from({ length: (200 - 150) / 5 + 1 }, (_, index) => (
            <MyStyledMenuItem key={index} value={150 + index * 5}>
              {150 + index * 5}
            </MyStyledMenuItem>
          ))}
        </MyStyledSelect>
      </Grid>
    </Grid>
  );
};

export default InputAver;
