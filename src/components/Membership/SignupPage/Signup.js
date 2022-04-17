import React from "react";
import Footer from "../Footer";
import FormSignup from "./FormSignup";
import Header from "../Header";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <Header />
      <FormSignup />
      <Footer />
    </div>
  );
};

export default Signup;
