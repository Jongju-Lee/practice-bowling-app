import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { createClubName, totalNumberOfMembers } from "../util/modalFunc";
import InputProfile from "../components/InputProfile";
import MyButton from "../components/MyButton";
import InputAver from "../components/InputAver";

const SignUp = () => {
  const [clubName, setClubName] = useState(""); // 클럽 이름
  const [totalNumber, setTotalNumber] = useState(""); // 팀원 총원 수
  const [memberNames, setMemberNames] = useState({});
  const [memberAvers, setMemberAvers] = useState({});

  useEffect(() => {
    // 클럽 이름 물어보는 모달
    const clubNameModal = async () => {
      const name = await createClubName();
      setClubName(name.value);
    };
    clubNameModal();
  }, []);

  useEffect(() => {
    // 총원 몇명인지 물어보는 모달
    if (!clubName) {
      return;
    }
    totalNumberModal();
  }, [clubName]);

  const totalNumberModal = async () => {
    const number = await totalNumberOfMembers();
    setTotalNumber(number.value);
  };

  const memberNameChange = (e) => {
    // 멤버 이름 적으면 state로
    setMemberNames({
      ...memberNames,
      [e.target.name]: e.target.value,
    });
    console.log(memberNames);
  };

  const onSubmit = () => {
    // 저장버튼 눌렀을때
  };

  return (
    <Grid container spacing={3} sx={{ maxWidth: "sm", margin: "0 auto" }}>
      <Grid xs={12} sx={{ margin: "-10px auto", textAlign: "center" }}>
        <h2>{clubName ? `${clubName}` : ""}</h2>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {/* 총원 수에 따라서 input 수가 정해짐 */}
          {totalNumber
            ? Array.from({ length: totalNumber }, (_, idx) => {
                const index = idx + 1;
                const name = `memberName${index}`;
                return (
                  <InputProfile
                    key={idx}
                    idx={index}
                    text={"번째 회원 이름"}
                    name={name}
                    value={memberNames[name]}
                    onChange={memberNameChange}
                  />
                );
              })
            : ""}
        </div>
        <div>
          {/* 총원 수에 따라서 select 수가 정해짐 */}
          {totalNumber
            ? Array.from({ length: totalNumber }, (_, idx) => {
                const index = idx + 1;
                const name = `memberAver${index}`;
                return (
                  <InputAver
                    key={idx}
                    idx={index}
                    name={name}
                    value={memberAvers[name]}
                    memberAvers={{ ...memberAvers }}
                    setMemberAvers={setMemberAvers}
                  />
                );
              })
            : ""}
        </div>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <div>{totalNumber ? <MyButton text="저장하기" /> : ""}</div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
