import React from "react";

const Footer = () => {
  return (
    <footer>
      <form className="w-40 text-sm border-2 border-gray-300 text-[#5E6C84] p-2 my-10 mx-auto">
        <select className="w-full" name="language-picker" id="language-picker">
          <option value="choose-one" disabled={true}>
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

      <hr className="w-[400px] h-[2px] bg-gray-300 my-10 mx-auto" />

      <div className="w-36 mb-5 text-sm mx-auto">
        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" />
      </div>

      <div>
        <ul className="flex justify-between text-[#5E6C84] text-sm my-6">
          <li className="mx-2 hover:underline">
            <a href="#">Templates</a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">Pricing</a>
          </li>
          <li>
            <a className="mx-2 hover:underline" href="#">
              Apps
            </a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">Jobs</a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">Blog</a>
          </li>
          <li className="mx-2 hover:underline">
            <a className="hover:underline" href="#">
              Developers
            </a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">About</a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">Help</a>
          </li>
          <li className="mx-2 hover:underline">
            <a href="#">Cookie Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
