import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";

const Game = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedGames, setSort] = useState([]);
  const [search, setSearch] = useState("");

  async function searchBar() {
    const searchText = search.split(' ').join()
    const tags =
      "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts";
    if (search === "") {
      return;
    }
    if (
      isNaN(search) &&
      tags.toUpperCase().search(search.toUpperCase()) !== -1
    ) {
      await fetchTag(search);
    } else if (search.length === 4 && !isNaN(search)) {
      setSort(games.filter((game) => search === game.release_date.slice(0, 4)));
    }
    else {
        let tempArray = []
        let secondTemp = []
        tempArray = games.filter(game => game.title.toUpperCase().match(search.toUpperCase()))
        secondTemp = games.filter(game =>((game.short_description.toUpperCase().match(searchText.toUpperCase()))))
        if (tempArray.length > 0 || secondTemp.length > 0)
        setSort(tempArray.concat(secondTemp).slice(0,6))
        else
        alert(`Unable to find your search, please search again`)
    }
  }

  async function fetchTag(tag) {
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/games",
      params: {
        category: `${tag}`,
      },
      headers: {
        "x-rapidapi-key": "477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a",
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSort(response.data.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchGames() {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/games",
      params: {
      },
      headers: {
        "x-rapidapi-key": "477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a",
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.length > 0) {
        setGames(response.data);
        setSort(response.data.slice(0, 6));
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="row">      
      <div className="container search__container">
        <h1 className="search__title--text shadoww">
          Search through our massive search list, to find your new gaming home.
        </h1>
        <h2 className="search__subtitle--text shadoww">
          We have something for everyone, search for your favorite game here.
        </h2>
        <form
          className="input__wrapper"
          onSubmit={(event) => {
            event.preventDefault();
            searchBar();
          }}
        >
          <input
            type="text"
            id="input"
            placeholder="Search for Game here"
            className="input__bar"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </form>
        <div className="popular__games games">
          {loading ? (
            <FontAwesomeIcon
              icon="fas fa-spinner"
              className="fa-spinner--games"
            />
          ) : (
            sortedGames.map((game, index) => (
              <div key={index} className="popular__game click">
                <h3 className="game__link--title shadoww">{game.title}</h3>
                <div className="popular__img--wrapper">
                  <figure className="popular__imgs">
                    <img
                      src={game.thumbnail}
                      className="popular__img"
                      alt=""
                    ></img>
                  </figure>
                </div>
                <div className="popular__text--wrapper">
                  <a href={game.game_url} className="game__link--text">
                    {game.game_url}
                  </a>
                  <p className="game__genre--text ">{game.genre}</p>
                  <p className="game__developer--text shadoww">
                    {game.publisher}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;