import { createContext, useState } from "react";
import { fetchNews } from "./fetch";

export const Context = createContext()

const ContextProvider = (props) => {
    const [index, setIndex] = useState("");
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const getNews = async () => {
      setLoading(true)
      setNews(await fetchNews())
      setLoading(false)
      setIndex(0)
      console.log(news, "test")
    }

    const moveRight = () =>{
        if (index === 30) {
            setIndex(0);
          } else {
            let temp = index + 1;
            setIndex(temp);
          }
    }
    const moveLeft = () =>{
        if (index === 0) {
            setIndex(30);
          } else {
            let temp = index - 1;
            setIndex(temp);
          }
    }
    const contextValue = {
        moveRight, 
        moveLeft,
        loading,
        index,
        news,
        getNews
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider

  