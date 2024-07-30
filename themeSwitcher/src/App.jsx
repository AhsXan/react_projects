/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./App.css";
import useTheme, { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn"
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    let x = document.querySelector("html").classList;
    x.remove("light", "dark");
    x.add(themeMode);
  }, [themeMode]);



  return (
    <>
      <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full bg-pink-700 max-w-sm mx-auto">
              {" "}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
