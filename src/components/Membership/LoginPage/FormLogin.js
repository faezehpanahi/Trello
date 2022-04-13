import React from "react";

const FormLogin = () => {
  return (
    <>
      <div>
        <h3>Log in to Trello</h3>

        <form>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Entr password" />
          <input type="submit" value="Log in" />
        </form>

        <span>OR</span>

        <form>
          <input type="button" value="Countinue with Google" />
          <input type="button" value="Countinue with Microsoft" />
          <input type="button" value="Countinue with Apple" />
          <input type="button" value="Countinue with Slack" />
          <p>
            <a href="#">Log in with SSO</a>
          </p>
        </form>

        <hr />

        <ul>
          <li>
            <a href="#">Can't log in?</a>
          </li>
          <li>
            <a href="#">Sign up for an account</a>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </ul>
    </>
  );
};

export default FormLogin;
