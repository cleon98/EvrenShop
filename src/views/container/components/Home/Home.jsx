import React from 'react'
import styles from './styles.module.css'
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <section>
        <img className={styles.homeBanter} src='https://i.imgur.com/WGL527d.jpg' alt='Evren Banner'/>
        <Link to='#'><button className={styles.homeButton1} >Hombre</button></Link>
        <Link to='#'><button className={styles.homeButton2} >Mujer</button></Link>
    </section>
  )
}
