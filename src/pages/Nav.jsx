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

        <li className="">
          <Link to="./games">
            <button className="button__search nav__search click shadowb">
              Browse Games
            </button>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Nav;
