import React, { useState } from "react";
import style from "./containeMide.module.css";

const ContainerMide = () => {
  const [show, setShow] = useState(false);

  const handleShowList = () => {
    setShow(!show);
  };

  const showList = null;
  if (show) {
    showList = (
      <div className={style.learn}>
        <p>
          You and your team can start up a Trello board in seconds. With the
          ability to view board data from many different angles, the entire team
          stays up-to-date in the way that suits them best:
        </p>
        <ul className={style.list}>
          <li>Use a Timeline view for project planning</li>
          <li>Calendar helps with time management</li>
          <li>Table view connects work across boards</li>
          <li>See board stats with Dashboard, and more!</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.choose}>
        <div className={style.image}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg" />
        </div>

        <div className={style.choose_container}>
          <h4>CHOOSE A VIEW</h4>
          <h1>The board is just the beginning</h1>
          <p className={style.choose_container_p}>
            Lists and cards are the building blocks of organizing work on a
            Trello board. Grow from there with task assignments, timelines,
            productivity metrics, calendars, and more.
          </p>
          <div>
            <h2>
              <a onClick={handleShowList}>Learn more</a>
            </h2>
            {showList}
          </div>
        </div>
      </div>

      <div className={style.dive}></div>
      <div className={style.meet}></div>
      <div className={style.power}></div>
    </div>
  );
};

export default ContainerMide;
