import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { createClubName, totalNumberOfMembers } from "../util/modalFunc";
import InputProfile from "../components/InputProfile";
import MyButton from "../components/MyButton";
import InputAver from "../components/InputAver";

const SignUp = () => {
  const [clubName, setClubName] = useState("");
  const [totalNumber, setTotalNumber] = useState("");

  useEffect(() => {
    const clubNameModal = async () => {
      const name = await createClubName();
      setClubName(name.value);
    };
    clubNameModal();
  }, []);

  useEffect(() => {
    if (!clubName) {
      return;
    }
    totalNumberModal();
  }, [clubName]);

  const totalNumberModal = async () => {
    const number = await totalNumberOfMembers();
    setTotalNumber(number.value);
  };

  return (
    <Grid container spacing={3} sx={{ maxWidth: "sm", margin: "0 auto" }}>
      <Grid xs={12} sx={{ margin: "-10px auto", textAlign: "center" }}>
        <h2>{clubName ? `${clubName}` : ""}</h2>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {totalNumber
            ? Array.from({ length: totalNumber }, (_, idx) => (
                <InputProfile key={idx} idx={idx} text={"번째 회원 이름"} />
              ))
            : ""}
        </div>
        <div>
          {totalNumber
            ? Array.from({ length: totalNumber }, (_, idx) => (
                <InputAver key={idx} idx={idx} text={"번째 회원 aver"} />
              ))
            : ""}
        </div>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <div>{totalNumber ? <MyButton text="저장하기" /> : ""}</div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
