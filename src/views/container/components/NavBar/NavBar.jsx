import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" className={styles.check} id="check"></input>
        <label htmlFor="check" className={styles.checkbtn}>
          <i className="fas fa-bars"></i>{" "}
        </label>
        <Link to="/cart">
          {" "}
          <img
            src="https://i.imgur.com/XlOLBHJ.png"
            alt="Shopping cart icon"
            className={styles.navCart}
          />{" "}
        </Link>
        <Link className={styles.link} to="/">
          <img
            src="https://i.imgur.com/MwoLWpn.png"
            className={styles.navLogo}
            alt="Store logo"
          />
        </Link>
        <div className={styles.cart} >

        </div>
        
        <ul>
          <li htmlFor="check" >
            {" "}
            <Link to="/catalogo" className={styles.navList}>
              Catálogo
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/catalogo/hombre" className={styles.navList}>
              Hombre
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/catalogo/mujer" className={styles.navList}>
              Mujer
            </Link>
          </li>
        </ul>

      </nav>
  
    </div>
  );
};

export default NavBar;
