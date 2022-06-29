import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <Link to="/">GETSHOW</Link>
            </div>
            <div className={styles.menu}>
                <nav><Link to="/tv" id={styles["menu-tv"]}>TV</Link></nav>
                <nav><Link to="/movie" id={styles["menu-movie"]}>Movie</Link></nav>
            </div>
        </nav>
    )
}

export default NavBar;