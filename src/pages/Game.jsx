import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Game = () => {
  return (
    <div class="row">
        <Nav />
      <div class="container search__container">
        <h1 class="search__title--text shadoww">
          Search through our massive search list, to find your new gaming home.
        </h1>
        <h2 class="search__subtitle--text shadoww">
          We have something for everyone, search for your favorite game here.
        </h2>
        <div class="input__wrapper">
          <input
            onkeydown="pressEnter(event.key)"
            type="text"
            placeholder="Search for Game here"
            class="input__bar"
          />
          <button onclick="searchBar()" class="submit__btn">
            Submit
          </button>
        </div>

        <FontAwesomeIcon icon="fas fa-spinner" className="fa-spinner--games" />
        <div class="popular__games games">

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
