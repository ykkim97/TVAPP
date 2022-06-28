import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const API_KEY = `38867792dc340fc79dffd9afef68e086`;

function App() {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    .then((data) => {
      console.log(data.data.results);
      setTv(data.data.results)
    })
  }, [])

  return (
    <div className="App">
      {tv.map(item => (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
          <div key={item.id}>{item.original_name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
