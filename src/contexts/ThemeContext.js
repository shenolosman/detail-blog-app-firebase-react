import React, { createContext } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {

  return <ThemeContext.Provider>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;
