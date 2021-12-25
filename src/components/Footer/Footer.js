import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <form className={style.language}>
        <select name="language-picker" id="language-picker">
          <option value="choose-one" disabled="true">
            Select your language…
          </option>
          <option value="cs" data-url="https://trello.com/cs">
            Čeština
          </option>
          <option value="de" data-url="https://trello.com/de">
            Deutsch
          </option>
          <option value="en" data-url="https://trello.com/en">
            English
          </option>
          <option value="en-AU" data-url="https://trello.com/en-AU">
            English (AU)
          </option>
          <option value="en-GB" data-url="https://trello.com/en-GB">
            English (UK)
          </option>
          <option value="en-US" data-url="https://trello.com/en-US">
            English (US)
          </option>
          <option value="es" data-url="https://trello.com/es">
            Español
          </option>
          <option value="fr" data-url="https://trello.com/fr">
            Français
          </option>
          <option value="it" data-url="https://trello.com/it">
            Italiano
          </option>
          <option value="hu" data-url="https://trello.com/hu">
            Magyar
          </option>
          <option value="nl" data-url="https://trello.com/nl">
            Nederlands
          </option>
          <option value="nb" data-url="https://trello.com/nb">
            Norsk (bokmål)
          </option>
          <option value="pl" data-url="https://trello.com/pl">
            Polski
          </option>{" "}
          <option value="pt-BR" data-url="https://trello.com/pt-BR">
            Português (Brasil)
          </option>
          <option value="fi" data-url="https://trello.com/fi">
            Suomi
          </option>
          <option value="sv" data-url="https://trello.com/sv">
            Svenska
          </option>
          <option value="vi" data-url="https://trello.com/vi">
            Tiếng Việt
          </option>
          <option value="tr" data-url="https://trello.com/tr">
            Türkçe
          </option>
          <option value="ru" data-url="https://trello.com/ru">
            Русский
          </option>
          <option value="uk" data-url="https://trello.com/uk">
            Українська
          </option>
          <option value="th" data-url="https://trello.com/th">
            ภาษาไทย
          </option>
          <option value="zh-Hans" data-url="https://trello.com/zh-Hans">
            中文 (简体)
          </option>
          <option value="zh-Hant" data-url="https://trello.com/zh-Hant">
            中文 (繁體)
          </option>
          <option value="ja" data-url="https://trello.com/ja">
            日本語
          </option>
        </select>
      </form>

      <div className={style.footerList}>
        <ul>
          <li>
            <a href="#">Templates</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>

      <div className={style.drtails}>
        {/* <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/e4e8fa01ba058bce8e9f2bb7459516f9/atlassian-logo-white-small.svg" /> */}
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" />
        <p> © Copyright 2021. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
