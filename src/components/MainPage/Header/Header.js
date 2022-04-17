import React, { useRef, useEffect, useContext } from "react";
import contextAPI from "../../contextAPI/contextAPI";
import style from "./Header.module.css";

const Header = () => {
  const context = useContext(contextAPI);

  const windowHeight = useRef(null);
  // const windowHeight = window.innerHeight;

  const windowView = () => {
    if (windowHeight.current) {
      const windowLocation = windowHeight.current.getBoundingClientRect();
      // console.log(windowHeight.current.getBoundingClientRect());

      return (
        windowLocation.top >= -110 &&
        windowLocation.bottom <= window.innerHeight
        // windowLocation.top >= 0 && windowLocation.bottom <= 200
      );
    }
    return false;
  };

  const scrollHandler = () => {
    context.setInView(() => {
      return windowView();
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    context.setInView(windowView);
  });

  return (
    <div className={style.container}>
      <header className={style.header} ref={windowHeight}>
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
