import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  console.log("--darkTheme-home--", darkTheme);
  return (
    <div
      className={`h-4/5 flex justify-center items-center dark:bg-red-800 dark:text-white`}
    >
      Home
    </div>
  );
};

export default Home;
