import React, { useContext } from "react";
import contextAPI from "../../contextAPI/contextAPI";

const FormSignup = () => {
  const context = useContext(contextAPI);

  const changeValueInput = (e) => {
    context.setInputValue(e.target.value);
  };

  return (
    <>
      <div className="rounded-sm px-6 py-10 shadow-[0_0_10px_0_rgba(200,200,200,1)] w-96 ">
        <h3 className="text-center text-base mt-3 mb-6 font-bold text-gray-500">
          Sign up for your account
        </h3>
        <form className="w-full">
          <input
            className="border-2 border-gray-300 rounded-[3px] outline-none text-sm w-full h-11 p-2 mb-4"
            type="email"
            placeholder="Enter email"
            value={context.inputValue}
            onChange={changeValueInput}
          />
          <span className="text-[12px] text-[#5E6C84] leading-4 py-5">
            By signing up, you confirm that you've read and accepted our{" "}
            <a className="text-[#0052CC] hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-[#0052CC] hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </span>
          <input
            className="border-2 border-none rounded-md text-sm font-bold w-full h-8 px-4 py-2 bg-gray-300 text-gray-500 mt-5"
            type="submit"
            value="Countinue"
          />
        </form>
        <div style={{ display: !context.inputValue ? "block" : "none" }}>
          <span className="flex justify-center text-center text-xs text-gray-500 my-4">
            OR
          </span>

          <form>
            <input
              className="h-10 w-full text-[#505f79] text-sm font-bold p-1 mb-3 shadow-[0_0_5px_0_rgba(200,200,200,1)] rounded"
              type="button"
              value="Countinue with Google"
            />
            {/* https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg     */}
            <input
              className="h-10 w-full text-[#505f79] text-sm font-bold p-1 mb-3 shadow-[0_0_5px_0_rgba(200,200,200,1)] rounded"
              type="button"
              value="Countinue with Microsoft"
            />
            {/* https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg */}
            <input
              className="h-10 w-full text-[#505f79] text-sm font-bold p-1 mb-3 shadow-[0_0_5px_0_rgba(200,200,200,1)] rounded"
              type="button"
              value="Countinue with Apple"
            />
            {/* https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/6fc4ecf05a97cfb43cfcbb14738a5aa0/apple-logo-black.svg */}
            <input
              className="h-10 w-full text-[#505f79] text-sm font-bold p-1 mb-3 shadow-[0_0_5px_0_rgba(200,200,200,1)] rounded"
              type="button"
              value="Countinue with Slack"
            />
            {/* https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/slack-logo.svg */}
          </form>

          <hr className="mt-6 mb-4 h-[1px] bg-gray-400" />
        </div>

        <span className=" text-sm text-[#0052CC] hover:underline flex justify-center pt-4">
          <a href="../LoginPage/Login.js">Already have an account? Log In</a>
        </span>
      </div>
    </>
  );
};

export default FormSignup;
