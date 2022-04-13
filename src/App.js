import "./app.css";
import { useState } from "react";
import contextAPI from "./components/contextAPI/contextAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./components/MainPage/Home";
import Login from "./components/Membership/LoginPage/Login";
import Signup from "./components/Membership/SignupPage/Signup";

function App() {
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <contextAPI.Provider
      value={{
        inView: inView,
        setInView: setInView,
        current: current,
        setCurrent: setCurrent,
      }}
    >
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </contextAPI.Provider>
  );
}

export default App;
