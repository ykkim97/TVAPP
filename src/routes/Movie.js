import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./Movie.module.css";

const API_KEY = `38867792dc340fc79dffd9afef68e086`;

function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((data) => {
            console.log(data.data.results);
            setMovies(data.data.results)
        })
    }, [])

    return (
        <>
            <h3 className={styles.title}>인기있는 영화</h3>
            <div className={styles.container}>
                
                {movies.map(item => (
                    <div className={styles.movies}key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                        <h5>{item.original_title}</h5>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movie;