import { createContext } from "react";

const contextAPI = createContext({
  inView: false,
  setInView: () => {},
  current: 0,
  setCurrent: () => {},
  displaySignup: true,
  setDisplaySignup: () => {},
  inputValue: "",
  setInputValue: () => {},
});

export default contextAPI;
