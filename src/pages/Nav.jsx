import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="row">
      <div className="container nav__container">
        <figure id="log__wrapper">
          <img src={logo} alt="" className="logo__img" />
        </figure>
        <p className="nav__link shadowb">Over 100k Games to Choose from!!!</p>

        
          
            <button className="button__search nav__search click shadowb">
              Browse Games
            </button>
          
          
            <button className="button__search nav__search click shadowb">
              Home 
            </button>
          
        
      </div>
    </div>
  );
};

export default Nav;
