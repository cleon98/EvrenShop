import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to='/'>
        <img src='https://i.imgur.com/MwoLWpn.png' className={styles.navLogo} alt='Store logo'/></Link>
        <div className={styles.navSymbols} >
        <label for='toggle'> &#9776; </label>
        <Link to='/catalogo' className={styles.navList} >Catálogo</Link>
        <Link to='/catalogo/hombre' className={styles.navList} >Hombre</Link>
        <Link to='/catalogo/mujer' className={styles.navList} >Mujer</Link>
        <Link to='#'> <img src="https://i.imgur.com/XlOLBHJ.png" alt="Shopping cart icon" className={styles.navCart}/> </Link>
        </div>
    </nav>

  )
}

export default NavBar