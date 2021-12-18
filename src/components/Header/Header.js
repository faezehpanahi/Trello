import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="logo">
          <li className="logo_img">
            <Link to="/home">
              <img src="" alt="logo" />
            </Link>
          </li>
          <li className="logo_link">
            <Link to="/home">Trello</Link>
          </li>
        </ul>
        <ul className="buttons">
          <li className="login">
            <Link to="login">Log in</Link>
          </li>
          <li className="signup">
            <Link to="/singup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <header className="header_container">
        <div className="header_info">
          <h1>Trello helps teams move work forward.</h1>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
          <form>
            <input type="email" className="input" placeholder="Email" />
            <input
              type="submit"
              className="submit"
              value="Sign up-it's free!"
            />
          </form>
        </div>
        <div>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" />
        </div>
      </header>
    </div>
  );
};

export default Header;
