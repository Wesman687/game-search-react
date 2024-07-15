import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";

const Game = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedGames, setSort] = useState([])
  const [search, setSearch] = useState("")
  const [tagArray, setTag] = useState([])
  async function searchBar() {
    const tags = "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts"
    if (search === "") {
        return
    }
    if (isNaN(search) && (tags.toUpperCase().search(search.toUpperCase()) !== -1)){  
        fetchTag(search)
        setSort(tagArray.slice(0,6))   
    }
    else {
        if (search.length === 4 && !(isNaN(search))) {
            setSort(games.filter(game => search === game.release_date.slice(0,4)))
        }
    }

  }
  async function fetchTag(tag) {
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        params: {
          category: `${tag}`
        },
        headers: {
          'x-rapidapi-key': '477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a',
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          setTag(response.data)
      } catch (error) {
          console.error(error);
      }

  }
  async function fetchGames() {
    setLoading(true)
    const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/games",
      platform: 'browser',
      headers: {
        "x-rapidapi-key": "477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a",
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setGames(response.data)
    } catch (error) {
      console.error(error);
    }
    setSort(games.slice(0,6)) 
    setLoading(false)
  }
  
    useEffect(()=>{
        fetchGames()
    },[])
  return (
    <div className="row">
      <Nav />
      <div className="container search__container">
        <h1 className="search__title--text shadoww">
          Search through our massive search list, to find your new gaming home.
        </h1>
        <h2 className="search__subtitle--text shadoww">
          We have something for everyone, search for your favorite game here.
        </h2>
        <div className="input__wrapper">
          <input
            onKeyDown={(event)=> event.key === 'Enter' && searchBar()}
            onChange={(event)=>setSearch(event.target.value)}
            type="text"
            id="input"
            placeholder="Search for Game here"
            className="input__bar"
          />
          <button onClick={()=>searchBar()} className="submit__btn">
            Submit
          </button>
        </div>
        <div className="popular__games games">
        {loading?<FontAwesomeIcon icon="fas fa-spinner" className="fa-spinner--games" />:sortedGames.map((games) => 
    (
        
    <div className="popular__game click">
    <h3 className="game__link--title shadoww">{games.title}</h3>
        <div className="popular__img--wrapper">
        <figure className="popular__imgs">
            <img src={games.thumbnail} className="popular__img" alt=""></img>
        </figure>
        </div>
        <div className="popular__text--wrapper">
        <a href="${games.game_url}" className="game__link--text">{games.game_url}</a>
        <p className="game__genre--text ">{games.genre}</p>
        <p className="game__developer--text shadoww">{games.publisher}</p>
        </div>
    </div>
    
    ))}
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
