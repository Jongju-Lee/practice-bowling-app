import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SingUp";
import Calculator from "./pages/Calculator";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cal" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
