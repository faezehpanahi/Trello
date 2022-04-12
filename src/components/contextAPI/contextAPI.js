import { createContext } from "react";

const contextAPI = createContext({
  inView: false,
  setInView: () => {},
  current: 0,
  setCurrent: () => {},
});

export default contextAPI;
