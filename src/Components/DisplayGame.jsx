import React, { useEffect, useState } from "react";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNews() {
    console.log(id);
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/game',
      params: {id: `${id}`},
      headers: {
        'x-rapidapi-key': '477cc3938dmsh3d6acb4fdba02afp1d7380jsn03a9325cb48a',
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }    
    setLoading(false);
    console.log(news);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <Nav />
      <div className="row">
        <div className="container">
          <div className="display__wrapper"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayNews;
