import React from "react";
import style from "./containerFeature.module.css";

const ContainerFeature = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Features to help your team succeed</h1>
        <p className={style.paragraph}>
          Powering a productive team means using a powerful tool (and plenty of
          snacks). From meetings and projects to events and goal setting,
          Trello’s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
      </div>
    </div>
  );
};

export default ContainerFeature;
