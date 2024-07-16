import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DisplayGame.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DisplayGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [screenShots, setScreen] = useState([])

  
  useEffect(() => {
    async function fetchGame() {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://mmo-games.p.rapidapi.com/game",
        params: { id: `${id}` },
        headers: {
          "x-rapidapi-key": "477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a",
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        },
      };
  
      try {
        const response = await axios.request(options);
        setGame(response.data);
        setScreen(response.data.screenshots)   
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchGame();
  }, []);
  return (
    <>
      
      <div className="row">
        <div className="container display__container">
          <div className="display__wrapper">
          {loading?<div><FontAwesomeIcon icon="fas fa-spinner" className="fa-spinner--games" /></div>:
          <>
            <h1 className="display__title">{game.title}</h1>
            <img src={game.thumbnail} alt="" className="display__img" />
            <h2 className="display__description--short">{game.short_description}</h2>
            <div className="description" dangerouslySetInnerHTML={{__html:game.description}}></div>
            <a className="display__url" href={game.game_url}>{game.game_url}</a>
            <ul className="display__info">
              <li className="genre">Genre: {game.genre}</li>
              <li className="publisher">Publisher: {game.publisher}</li>
              <li className="developer">Dev: {game.developer}</li>
              <li className="release">Release: {game.release_date}</li>
            </ul>
            <div className="screenshots">
              {screenShots.map((screen, index)=>(<><img src={screen.image} key={index} alt="screen shots" className="screen__image"></img></>))}              
            </div>
            </>
            }
          </div>
        </div>
      </div>

    </>
  );
};

export default DisplayGame;
