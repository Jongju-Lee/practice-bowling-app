import styled from "styled-components";
import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "55px", fontFamily: "Black Ops One, cursive" }}>
      {children}
    </strong>
  );
};
const NewFont = ({ children }) => {
  return (
    <h2
      style={{
        fontFamily: "Black Han Sans, sans-serif",
        fontWeight: 100,
        fontSize: "1.5rem",
      }}
    >
      {children}
    </h2>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <header>
        <div className="typeit_wrapper">
          <TypeIt
            options={{
              speed: 150,
              fontSize: "80px",
            }}
          >
            <SuperStrong>AWESOME BOWLING!</SuperStrong>
          </TypeIt>
        </div>
        <div
          style={{
            fontFamily: "Black Han Sans, sans-serif",
            fontWeight: 200,
          }}
        >
          <NewFont>환영합니다!</NewFont>
          <NewFont>우측 상단의 SIGN UP을 눌러</NewFont>
          <NewFont>새로운 팀을 등록해 주세요!</NewFont>
        </div>
      </header>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90%;
  }
  .typeit_wrapper {
    height: 10rem;
  }
`;
