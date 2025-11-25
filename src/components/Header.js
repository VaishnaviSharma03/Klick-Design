import React from "react";
import { Navbar } from "./Navbar";
import "./css/Header.css";

export const Header = () => {
  return (
    <header
      style={{
        background: "#333333",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "1000",
      }}
    >
      <Navbar />
    </header>
  );
};
