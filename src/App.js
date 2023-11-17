import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Topics } from './components/Topics/Topics';
import { Html } from './components/Html/Html';

function App({ CardName }) {
  const [currentCard, setCurrentCard] = useState('');
  const handleCard = () => {
    setCurrentCard({CardName});
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/topics' element={<Topics setCurrentCard={setCurrentCard} handleCard={handleCard} currentCard={currentCard} />}>
          <Route path="html" element={<Html />}></Route>
        </Route>
      </Routes>


      {/* <Route
          path={CardName}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {lazy(() => import(`./components/${CardName}`))}
            </Suspense>
          }
        /> */}

      <Footer />
    </>
  );
}

export default App;
