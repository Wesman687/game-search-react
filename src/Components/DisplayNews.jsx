import React, { useContext } from "react";
import "./DisplayNews.css";
import { Context } from "../newsFunction/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DisplayNews = () => {
  const { loading, news, index, moveRight, moveLeft } = useContext(Context);
  return (
    <div className="row dn__row">
      <div className="container dn__container">
        <div className="dn__wrapper">
          {loading ? (
            <div className="spinner__wrapper-news">
              <FontAwesomeIcon
                icon="fa-solid fa-spinner"
                className="fas fa-spinner fa-spinner--news"
              />
            </div>
          ) : (<>
            <h1 className="dn__title">{news[index].title}</h1>
            <div className="dn__content" dangerouslySetInnerHTML={{__html:news[index].article_content}}></div>
            <a href={news[index].article_url} className="dn__link">{news[index].article_url}</a>
            <h2 className="dn__sub--title">{news[index].short_description}</h2>
            <div className="btn__container">
                <button onClick={()=> moveLeft()} className="previous button__search button__popular click">Previous Article</button>
                <button onClick={()=> moveRight()} className="next button__search button__popular click">Next Article</button>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayNews;
