import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../newsFunction/ContextProvider";

const News = () => {
  const { loading, index, news, moveLeft, moveRight, getNews } = useContext(Context)
  
  useEffect(() => {
    getNews()
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
            
          <h1 className="news__title">{news[index].title}</h1>
          <div className="new__img--wrapper"> 
            <figure className="news_imgs">
                <Link to={`./news/`} >
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
