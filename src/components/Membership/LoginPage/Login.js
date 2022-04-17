import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <Header />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
