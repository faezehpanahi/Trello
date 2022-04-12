import React from "react";
import style from "./checkOut.module.css";

const CheckOut = () => {
  return (
    <section className={style.checkOut}>
      <div className={style.container}>
        <div className={style.price}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/50d8061c0434175f65976c3afbb8209c/tag.svg" />
          <div>
            <h3>See our pricing</h3>
            <p>
              Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made
              for your organization.
            </p>
            <button>
              <a href="#">Trello pricing</a>
            </button>
          </div>
        </div>
        <div className={style.tour}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/0efeb9f898969b67a9b80dca30183b9d/compass.svg" />
          <div>
            <h3>Take a Trello tour</h3>
            <p>
              Explore the world of boards and beyond in Trello. Dive deeper into
              our most popular features.
            </p>
            <button>
              <a href="#">Tour Trello</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
