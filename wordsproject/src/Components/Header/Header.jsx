import React from "react";
import "./Header.module.css";

function Header() {
  return (
    <div className="navbar">
      <a href="/categories">Categories</a>
      <a href="/cards">Cards</a>
    </div>
  );
}

export default Header;
