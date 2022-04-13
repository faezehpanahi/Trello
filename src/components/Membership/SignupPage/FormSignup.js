import React from "react";

const FormSignup = () => {
  return (
    <>
      <form>
        <h3>Sign up for your account</h3>
        <input type="email" placeholder="Enter email" />
        <span>
          By signing up, you confirm that you've read and accepted our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </span>
        <input type="submit" value="Countinue" />
      </form>

      <span>OR</span>

      <form>
        <input type="button" value="Countinue with Google" />
        <input type="button" value="Countinue with Microsoft" />
        <input type="button" value="Countinue with Apple" />
        <input type="button" value="Countinue with Slack" />
      </form>

      <hr />

      <span>
        <a href="../LoginPage/Login.js">Already have an account? Log In</a>
      </span>
    </>
  );
};

export default FormSignup;
