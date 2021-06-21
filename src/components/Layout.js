import React from "react";
import { Header } from "../components/Header"
// import "../styles/Layout.css"

export const Layout = (props) => {
  return (
    <div className={props.className}>
      <Header />
      {props.children}
    </div>
  );
};

