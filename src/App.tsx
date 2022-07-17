import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import {Navigation} from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favourites" element={ <FavouritesPage /> } />
      </Routes>
    </>
  )
}

export default App;
