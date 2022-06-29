import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TvShow from './routes/TvShow';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Movie from './routes/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path="/tv" element={<TvShow />}></Route>
          <Route exact path="/movie" element={<Movie />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
