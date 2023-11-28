import React from "react";
import styled from "styled-components";
import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "55px" }}>{children}</strong>;
};

const Home = () => {
  return (
    <Wrapper>
      <header>
        <div className="typeit_wrapper">
          <TypeIt
            options={{
              speed: 300,
            }}
          >
            <SuperStrong>AWESOME BOWLING!</SuperStrong>
          </TypeIt>
        </div>
        <h2>환영합니다!</h2>
        <h2>우측 상단의 SIGN UP을 눌러</h2>
        <h2>새로운 팀을 등록해 주세요!</h2>
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
