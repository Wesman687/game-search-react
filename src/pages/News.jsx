import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [index, setIndex] = useState("");
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  function moveRight() {
    if (index === 30) {
      setIndex(0);
    } else {
      let temp = index + 1;
      setLoading(true);
      setIndex(temp);
      setLoading(false);
    }
  }
  function moveLeft() {
    if (index === 0) {
      setIndex(30);
    } else {
      let temp = index - 1;
      setLoading(true);
      setIndex(temp);
      setLoading(false);
    }
  }
  async function fetchNews() {
    setIndex(0);
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "85145a591amshddc656a65b714a4p1741e9jsn73084d441036",
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      },
    };

    const response = await axios.get(
      "https://mmo-games.p.rapidapi.com/latestnews",
      options
    );
    setNews(response.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      {loading ? (
        <div className="news__window">
          <div className="spinner__wrapper-news">
            <FontAwesomeIcon
              icon="fa-solid fa-spinner"
              className="fas fa-spinner fa-spinner--news"
            />
          </div>
        </div>
      ) : (
        
        <div className="news__window click" id="index" >
            
          <h1 className="news__title shadowb">{news[index].title}</h1>
          <div className="new__img--wrapper"> 
            <figure className="news_imgs">
                <Link to={`./news/article`}>
              <img
                src={news[index].main_image}
                className="news__img"
                alt=""                
              ></img></Link>
              <div className="arrow__wrapper">
                <FontAwesomeIcon
                  onClick={() => moveLeft()}
                  icon="fa-solid fa-caret-left"
                  className="fa-solid fa-caret-left arrow arrow-left click"
                />
                <h2 className="news__subtitle shadowb">
                  {news[index].short_description}
                </h2>
                <FontAwesomeIcon
                  onClick={() => moveRight()}
                  icon="fa-solid fa-caret-right"
                  className="fa-solid fa-caret-right arrow arrow-right click"
                />
              </div>
            </figure>
          </div>
          <a href={news[index].url} className="news__url click">
            {news[index].article_url}
          </a>
          
        </div>
        
      )}
    </>
  );
};

export default News;
