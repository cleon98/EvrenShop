import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section>
        <img
          className={styles.homeBanter}
          src="https://i.imgur.com/WGL527d.jpg"
          alt="Evren Banner"
        />
        <Link to="/catalogo/hombre">
          <button className={styles.homeButton1}>Hombre</button>
        </Link>
        <Link to="catalogo/mujer">
          <button className={styles.homeButton2}>Mujer</button>
        </Link>
      </section>
    <section>
      <img className={styles.homeBanner} src="https://i.imgur.com/KUhb79D.jpg" alt="Evren Moto" />
    </section>
    </div>
  );
};
