import React, { useState } from 'react'
import './Cards.css';
import { Link } from 'react-router-dom';

export const Cards = ({ImageUrl, CardName, setCurrentCard, handleCard, currentCard}) => {
  
  return (
    
    <div className="card" >
    <img src={ImageUrl} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{CardName}</h5>
      <p className="card-text">Let's play around {CardName}....</p>
      <Link to="html">
      <button  className="btn button-36 " onClick={handleCard}>START</button>
      </Link>
      
    </div>
  </div>
 
  )
}
