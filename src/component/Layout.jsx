import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Layout = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`h-screen `}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
