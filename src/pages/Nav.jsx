import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="container nav__container">
        <figure id="log__wrapper">
          <img src={logo} alt="" className="logo__img" />
        </figure>
        <p className="nav__link shadowb">Over 100k Games to Choose from!!!</p>
        <div className="button__container">
        <button
          onClick={() => navigate("/games")}
          className="button__search nav__search click shadowb"
        >
          Browse Games
        </button>

        <button
          onClick={() => navigate("/")}
          className="button__search nav__search click shadowb home"
        >
          Home
        </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
