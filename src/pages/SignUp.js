import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  backBtnClickModal,
  createClubName,
  totalNumberOfMembers,
} from "../util/modalFunc";
// component
import InputProfile from "../components/InputProfile";
import MyButton from "../components/MyButton";
import InputAver from "../components/InputAver";

const SignUp = ({ handleChangeData, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [clubName, setClubName] = useState(""); // 클럽 이름
  const [totalNumber, setTotalNumber] = useState(); // 클럽 총원 수
  const [memberNames, setMemberNames] = useState([]); // 멤버들의 이름
  const [memberAvers, setMemberAvers] = useState([]); // 멤버들의 Aver

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
  };

  const onSubmit = () => {
    // 저장버튼 눌렀을때
    const membersLength = Object.keys(memberNames).length;
    const membersAverLength = Object.keys(memberAvers).length;
    Swal.fire({
      title: "저장",
      text: "현재 상태로 저장하시겠습니까?",
      icon: "question",
      color: "#777",
      background: "#333",
      showCancelButton: true,
      confirmButtonText: "저장",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        // 여기에 실제 저장 로직을 추가
        if (
          parseInt(totalNumber) === parseInt(membersLength) &&
          parseInt(totalNumber) === parseInt(membersAverLength)
        ) {
          // 저장이 유효한 경우
          Swal.fire({
            title: "저장 되었습니다.",
            icon: "success",
            color: "#777",
            background: "#333",
          });
          handleChangeData(memberNames, memberAvers);
          navigate("/", { replace: true });
          setIsLoggedIn(true);
        } else {
          // 저장이 유효하지 않은 경우
          Swal.fire({
            title: "빈칸이 있습니다 모두 채워주세요",
            icon: "error",
            color: "#777",
            background: "#333",
          });
        }
      } else {
        // 사용자가 '취소'를 클릭한 경우
        Swal.fire({
          title: "취소 되었습니다.",
          icon: "info",
          color: "#777",
          background: "#333",
        });
      }
    });
  };

  const onBackBtn = () => {
    backBtnClickModal();
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        maxWidth: "sm",
        margin: "0 auto",
      }}
    >
      <Grid
        xs={12}
        sx={{
          margin: "-10px auto",
          textAlign: "center",
        }}
      >
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
        <div
          style={{
            display: "flex",
          }}
        >
          {totalNumber ? (
            <MyButton text="뒤로가기" onClick={onBackBtn} sx={{ mr: 2 }} />
          ) : (
            ""
          )}
          {totalNumber ? <MyButton text="저장하기" onClick={onSubmit} /> : ""}
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
