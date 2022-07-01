import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./TvShow.module.css";
import { Button } from 'bootstrap';

const API_KEY = `38867792dc340fc79dffd9afef68e086`;

function TvShow() {
    const [tv, setTv] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
        .then((data) => {
            console.log(data.data.results);
            setTv(data.data.results)
        })
    }, [])

    return (
        <>
            <h3 className={styles.title}>TV쇼</h3>

            <nav className={styles.navBtnGroup}>
                <button className={styles.navBtn}>인기</button>
                <button className={styles.navBtn}>TOP</button>
                <button className={styles.navBtn}>최신</button>
            </nav>

            <div className={styles.container}>
                
                {tv.map(item => (
                    <div className={styles.tvshow}key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                        <h5>{item.original_name}</h5>
                    </div>
                ))}
            </div>
        </>
        
    )
}

export default TvShow;