import React, { useContext } from 'react'
import './DisplayNews.css'
import { Context } from '../newsFunction/newsFunction'
const DisplayNews = () => {    
  const {  news, index} = useContext(Context) 
  console.log(news)
  return (
    <div className='row'>
        <div className="container dn__container">
            <div className="dn__wrapper">
                <h1 className='dn__title'></h1>
            </div>
        </div>
        
      
    </div>
  )
}

export default DisplayNews
