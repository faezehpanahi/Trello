import style from "./app.module.css";
import { useState } from "react";
import contextAPI from "./components/contextAPI/contextAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./components/MainPage/Home";
import Login from "./components/Membership/LoginPage/Login";
import Signup from "./components/Membership/SignupPage/Signup";

function App() {
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);
  const [displaySignup, setDisplaySignup] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <contextAPI.Provider
      value={{
        inView: inView,
        setInView: setInView,
        current: current,
        setCurrent: setCurrent,
        displaySignup: displaySignup,
        setDisplaySignup: setDisplaySignup,
        inputValue: inputValue,
        setInputValue: setInputValue,
      }}
    >
      <div className={style.container}>
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
