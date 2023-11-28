import Swal from "sweetalert2";

export const createClubName = () => {
  const name = Swal.fire({
    title: "클럽 이름이 무엇인가요?",
    icon: "question",
    input: "text",
    inputPlaceholder: "2글자 이상 입력",
    confirmButtonText: "OK",
    color: "#fff",
    background: "#333",
    width: "23rem",
    backdrop: false,
  });
  return name;
};

export const totalNumberOfMembers = () => {
  const number = Swal.fire({
    title: "총 몇명 인가요?",
    icon: "question",
    input: "number",
    inputValue: "5",
    confirmButtonText: "OK",
    color: "#fff",
    background: "#333",
    width: "23rem",
    backdrop: false,
  });
  return number;
};
