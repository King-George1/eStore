import React from "react";

export const NavBar = () => {
  return <div className="navBar">
      <div className="logo">
        eSale
      </div>
      <ul className="navItems">
        <li>New Arrival</li>
        <li>Men</li>
        <li>Women</li>
        <li>Travel</li>
        <li><button style={{backgroundColor: "white", marginRight: "10px"}} className="navButton">Sign In</button>
        <button style={{backgroundColor: "red", color: "white"}} className="navButton">Sign Up</button></li>
      </ul>
  </div>;
};
