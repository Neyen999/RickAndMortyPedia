import React, {useState, useContext} from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext";
// import "../styles/Header.css"

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, themeUpdate } = useContext(ThemeContext);
  const { underline, setUnderline } = useContext(ThemeContext);
  const { border, setBorder } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    underline === "white-bg" ? setUnderline("black-bg") : setUnderline("white-bg");
    theme === "bg-white" ? themeUpdate("bg-black") : themeUpdate("bg-white");
    border === "gray-border" ? setBorder("white-border") : setBorder("gray-border");
  }

  return (
    <div className="Logo__container">
      <Link to="/">
        <img src={logo} alt="Rick and Morty Logo"/>
      </Link>
      {
        darkMode 
        ? 
        <button className="white-button" type="button" onClick={handleClick}>Go Light!</button> 
        : 
        <button className="bg-black" type="button" onClick={handleClick}>Go Dark!</button>
      }
    </div>
  )
}
