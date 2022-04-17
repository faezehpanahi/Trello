import React from "react";

const FormLogin = () => {
  return (
    <>
      <div className="rounded-sm px-6 py-10 shadow-[0_0_10px_0_rgba(200,200,200,1)] w-96 h-[642px]">
        <h3 className="text-center text-base mt-3 mb-6 font-bold text-gray-500">
          Log in to Trello
        </h3>

        <form className="w-full ">
          <input
            className="border-2 border-gray-300 rounded-[3px] outline-none text-sm w-full h-11 p-2 mb-4"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="border-2 border-gray-300 rounded-[3px] outline-none text-sm w-full h-11 p-2 mb-4"
            type="password"
            placeholder="Entr password"
          />
          <input
            className="border-2 border-none rounded-md text-sm w-full h-8 px-4 py-2 bg-[#5AAC44] text-white "
            type="submit"
            value="Log in"
          />
        </form>

        <span className="flex justify-center text-center text-xs text-gray-500 my-4">
          OR
        </span>

        <form className="flex flex-col justify-center items-center">
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
          <p>
            <a className="text-sm text-[#0052CC] hover:underline" href="#">
              Log in with SSO
            </a>
          </p>
        </form>

        <hr className="mt-6 mb-4 h-[1px] bg-gray-400" />

        <ul className="flex justify-center text-sm">
          <li className="mr-6 hover:underline">
            <a className="text-[#0052CC]" href="#">
              Can't log in?
            </a>
          </li>
          <li className="list-disc hover:underline">
            <a className="text-[#0052CC]" href="#">
              Sign up for an account
            </a>
          </li>
        </ul>
      </div>

      <ul className="flex justify-center text-xs my-3">
        <li className="mr-6 hover:underline">
          <a className="text-[#0052CC]" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="list-disc hover:underline">
          <a className="text-[#0052CC]" href="#">
            Terms of Service
          </a>
        </li>
      </ul>
    </>
  );
};

export default FormLogin;
