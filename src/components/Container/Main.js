import React from "react";
import Features from "./Features/Faetures";
import First from "./First/First";
import style from "./main.module.css";
import FeatureInfo from "./FeatureInfo/FeatureInfo";
import CheckOut from "./CheckOut/CheckOut";
import Customer from "./Customer/Customer";
import Signup from "./Signup/Signup";
import App from "./Applications/App";

const Main = () => {
  return (
    <main className={style.container}>
      <First />
      <FeatureInfo />
      <Features />
      <CheckOut />
      <Customer />
      <Signup />
      <App />
    </main>
  );
};

export default Main;
