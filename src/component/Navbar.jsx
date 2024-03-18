import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  //   console.log('--darkTheme---',darkTheme)
  const [side, setSide] = useState(false);
  return (
    <div
      className={`w-full bg-orange-400 h-[80px] flex justify-between items-center dark:${
        darkTheme ? "bg-gray-800" : ""
      }`}
    >
      <span className="ml-4 hidden md:block ">XYZ</span>

      {/* sidebar */}
      <div
        className={`absolute bg-gray-700 w-1/3 top-0 h-3/4 transition-transform transform ${
          side ? `translate-x-0` : `-translate-x-full`
        } ease-in-out duration-300`}
      >
        <div className="">
          <button onClick={() => setSide(false)} className="ml-4">
            X
          </button>
          <ul className="mt-4">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
          </ul>
        </div>
      </div>

      <button onClick={() => setSide(true)} className="ml-4 md:hidden">
        menu
      </button>
      <ul className="hidden md:flex">
        <li className="mr-4">Home</li>
        <li className="mr-4">About</li>
      </ul>

      <button
        className={`bg-sky-300 text-black p-2 rounded-lg mr-4 dark:bg-gray-700 `}
        onClick={toggleTheme}
      >
        toggle
      </button>
    </div>
  );
};

export default Navbar;
