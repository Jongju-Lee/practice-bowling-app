import Swal from "sweetalert2";

export const createClubName = () => {
  const name = Swal.fire({
    title: "클럽 이름이 무엇인가요?",
    icon: "question",
    input: "text",
    inputPlaceholder: "2글자 이상 입력",
    inputAttributes: {
      maxlength: 10, // 글자수 최대 10글자
    },
    preConfirm: (value) => {
      // 최소 길이 검사
      if (value.length < 2) {
        Swal.showValidationMessage("최소 2자 이상 입력하세요."); // 사용자에게 메시지 표시
        return false; // 검사 실패
      }
      return value; // 검사 통과
    },
    confirmButtonText: "OK",
    color: "#fff",
    background: "#333",
    width: "23rem",
    backdrop: false, // true로 설정하면 모달 바깥을 눌렀을때 모달이 닫힘
  });
  return name;
};

export const totalNumberOfMembers = () => {
  const number = Swal.fire({
    title: "총 몇명 인가요?",
    icon: "question",
    input: "select",
    inputValue: "10",
    confirmButtonText: "OK",
    color: "#777",
    background: "#333",
    width: "23rem",
    backdrop: false,
    inputPlaceholder: "",
    inputOptions: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
    },
  });
  return number;
};
