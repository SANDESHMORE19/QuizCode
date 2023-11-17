import React from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Topics.css';
import { Cards } from '../Cards/Cards';
export const Topics = ({setCurrentCard, handleCard, currentCard}) => {
  return (
    <section className='topics-div'>

      <section className='topics'>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?html"}  CardName={"HTML"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?css"} CardName={"CSS"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?javascript"} CardName={"javaScript"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      
      </section>
      <section className='topics'>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?ReactJS"} CardName={"React"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?programming"} CardName={"Angular"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      <Cards ImageUrl={"https://source.unsplash.com/random/300*300?NextJs"} CardName={"NextJs"} currentCard = {currentCard} setCurrentCard= {setCurrentCard} handleCard= {handleCard}/>
      
      </section>

    </section>

  )
}
