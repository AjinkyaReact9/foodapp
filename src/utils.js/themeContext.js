import { createContext, useState, useEffect } from "react";
// import { imgDark, imgLight } from "./config";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "Orange",
    color: "black",
  },
};


const texts = {
    dark: {
        text: "Light Mode"
    },
    light: {
        text: "Dark Mode"
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [text, setText] = useState("isDark");
  // const [image, setImage] = useState("Dark");


  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
    setText(!text);
    // setImage( <img src={isDark? imgDark : imgLight}/>)
  };
  const theme = isDark ? themes.dark : themes.light;
  const textData = text ? texts.light : texts.dark;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark, textData}, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};