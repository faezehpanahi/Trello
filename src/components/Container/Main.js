import React from "react";
import MainFeatur from "./Features/MainFeature";
import First from "./First/First";
import style from "./main.module.css";

const Main = () => {
  return (
    <main className={style.container}>
      <First />
      <MainFeatur />
    </main>
  );
};

export default Main;
