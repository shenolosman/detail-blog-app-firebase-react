import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Context could not reach");
  }
  return context;
};
