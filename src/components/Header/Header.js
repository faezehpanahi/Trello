import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul className={style.logo}>
          <li className={style.logo_img}>
            <Link to="/home">
              <img src="" alt="logo" />
            </Link>
          </li>
          <li className={style.logo_link}>
            <Link to="/home">Trello</Link>
          </li>
        </ul>
        <ul className={style.buttons}>
          <li className={style.login}>
            <Link to="login">Log in</Link>
          </li>
          <li className={style.signup}>
            <Link to="/singup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <header className={style.header_container}>
        <div className={style.header_info}>
          <h1>Trello helps teams move work forward.</h1>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
          <form>
            <input type="email" className={style.input} placeholder="Email" />
            <input
              type="submit"
              className={style.submit}
              value="Sign up-it's free!"
            />
          </form>
        </div>
        <div className={style.header_img}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" />
        </div>
      </header>
    </div>
  );
};

export default Header;
