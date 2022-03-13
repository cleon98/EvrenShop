import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
        <img src='https://i.imgur.com/MwoLWpn.png' className={styles.navLogo} alt='Store logo'/>
        <div className={styles.navSymbols} >
        <label for='toggle'> &#9776; </label>
        <Link className={styles.navList} to='#'>Catálogo</Link>
        <Link className={styles.navList} to='#'>Hombre</Link>
        <Link className={styles.navList} to='#'>Mujer</Link>
        <Link to='#'> <img src="https://i.imgur.com/XlOLBHJ.png" alt="Shopping cart icon" className={styles.navCart}/> </Link>
        </div>
    </nav>

  )
}

export default NavBar