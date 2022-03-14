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
        <Link to="#">
          <button className={styles.homeButton1}>Hombre</button>
        </Link>
        <Link to="#">
          <button className={styles.homeButton2}>Mujer</button>
        </Link>
      </section>

      <article className={styles.homeText}>
        <article className={styles.homePara1} >
          <h3 className={styles.holaa}>¿Por que escogernos?<br/><br/></h3>
          <p>
            Somos unas empresa 100% colombiana dedicada a la manufactura de
            prendas de alta calidad. 
          </p>
        </article>
        <article className={styles.homePara2} >
          <h3>Tú eres nuestra prioridad<br/><br/></h3>
          <p>
            Somos una pequeña compañia donde nuestra prioridad es brindar la
            mejor atencion al usuario.
          </p>
        </article>
      </article>
    </div>
  );
};
