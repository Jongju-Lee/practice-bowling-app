import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Calculator from "./pages/Calculator";
import AppLayout from "./components/AppLayout";
import { useState } from "react";
import MyClub from "./pages/MyClub";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]); // 가입된 멤버들의 이름, Average 정보

  const handleChangeData = (nameState, averState) => {
    setData({
      ...data,
      membersName: { ...nameState },
      membersAver: { ...averState },
    });
  };

  return (
    <BrowserRouter>
      <AppLayout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <SignUp
                handleChangeData={handleChangeData}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/cal" element={<Calculator />} />
          <Route path="/myclub" element={<MyClub />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
