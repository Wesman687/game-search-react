import React from "react";
import News from "./News";
import epic from "../assets/Epic_Games_logo.svg.png";
import ea from "../assets/ea-games-logo-png-transparent.png";
import company from "../assets/image.png";
import { useNavigate } from "react-router-dom";
const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className="row">
      <div className="container landing__container">
        <h1 className="landing__text--title shadowb">
          America's Best Search Engine for Top Games.
        </h1>
        <h2 className="landing__text--subtitle">
          Find your new Gaming Home Here
        </h2>

        <News />

        <button onClick={()=>navigate("/games")} className="button__search button__popular click">
          Search Popular Games
        </button>

        <div className="gaming__companies">
          <figure className="companies__imgs">
            <img src={ea} className="companies__img" alt="" />
          </figure>
          <figure className="companies__imgs">
            <img src={epic} className="companies__img" alt="" />
          </figure>

          <figure className="companies__imgs">
            <img src={company} className="companies__img" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Landing;
