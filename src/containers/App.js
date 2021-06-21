import React from "react";
import { useState } from "react";
import "../styles/css/styles.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Cards } from "../components/Cards";
import { ThemeContext } from '../context/ThemeContext';

export const App = () => {
  
  const [theme, themeUpdate] = useState("bg-white");
  const [underline, setUnderline] = useState("white-bg");
  const [shadow, setShadow] = useState("black-shadow");
  const [border, setBorder] = useState("gray-border");

  return (
    <BrowserRouter>
      <Switch>
        <ThemeContext.Provider value={{ theme, themeUpdate, underline, setUnderline, shadow, setShadow, border, setBorder }}>
          <Layout className={theme + " main__container"}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:id" component={Cards}/>
          </Layout>
        </ThemeContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}
