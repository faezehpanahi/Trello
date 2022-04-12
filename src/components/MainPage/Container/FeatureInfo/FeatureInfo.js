import React from "react";
import style from "./FeatureInfo.module.css";

const FeatureInfo = () => {
  return (
    <section className={style.feature}>
      <div>
        <h1>Features to help your team succeed</h1>
        <p>
          Powering a productive team means using a powerful tool (and plenty of
          snacks). From meetings and projects to events and goal setting,
          Trello’s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
      </div>
    </section>
  );
};

export default FeatureInfo;
