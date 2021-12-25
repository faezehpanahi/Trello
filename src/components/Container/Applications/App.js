import React from "react";
import style from "./app.module.css";

const App = () => {
  return (
    <section className={style.apps}>
      <div className={style.container}>
        <p>Trello also works great on your smaller screen.</p>
      </div>
      <div className={style.buttons}>
        <button>
          <a
            href="https://apps.apple.com/app/trello-organize-anything/id461504587"
            target="_blank"
          >
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/apps/0b6d7bcb7ee4c84ef5e8141269925e9a/apple.svg"
              alt="Available on the App Store"
            />
          </a>
        </button>
        <button>
          <a
            href="https://play.google.com/store/apps/details?id=com.trello"
            target="_blank"
          >
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/apps/c3a2a289499157072145f1bd73d7610d/google.svg"
              alt="Get it on Google Play"
            />
          </a>
        </button>
      </div>
    </section>
  );
};

export default App;
