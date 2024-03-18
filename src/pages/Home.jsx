import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext);
  console.log("--darkTheme---", darkTheme);
  return (
    <div
      className={`h-4/5 flex justify-center items-center dark:${
        darkTheme ? `bg-red-800` : null
      }`}
    >
      {/* <span className={`text-gray-900 dark:${darkTheme && `text-white`}`}> */}
      Home
      {/* </span> */}
    </div>
  );
};

export default Home;
