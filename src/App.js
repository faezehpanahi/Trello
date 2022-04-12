import "./app.css";
import { useState } from "react";
import contextAPI from "./components/contextAPI/contextAPI";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Container/Main";
import Footer from "./components/Footer/Footer";

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
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </contextAPI.Provider>
  );
}

export default App;
