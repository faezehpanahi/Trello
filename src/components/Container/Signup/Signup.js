import React from "react";
import style from "./signup.module.css";

const Signup = () => {
  return (
    <section className={style.signup}>
      <div className={style.card}>
        <h3>
          Sign up and get started with Trello today. A world of productive
          teamwork awaits!
        </h3>
        <form>
          <input type="text" placeholder="Email" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
