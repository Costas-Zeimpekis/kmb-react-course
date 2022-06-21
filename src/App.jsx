import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const themes = {
  light: {
    foreground: "#000000",
    background: "red",
  },
  dark: {
    foreground: "#ffffff",
    background: "green",
  },
};

export const ThemeContext = createContext(themes);

function App() {
  const [isDark, setIsDark] = useState(true);
  function handleThemeChange() {
    setIsDark((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={isDark ? themes.dark : themes.light}>
      <Header title="Hello world" />
      <Main description="This is a new React App" />
      <button onClick={handleThemeChange}>Change Theme</button>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
