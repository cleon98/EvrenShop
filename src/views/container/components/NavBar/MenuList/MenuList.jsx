import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const MenuList = (props) => {
    const { show, handleClickItem } = props;
  return (
    <div className={`${styles.menu} ${show ? styles.show : styles.hide}`}>
    <ul className={styles.menu__elements}>
      <li onClick={()=>handleClickItem()}>
        {/* Links to the diferent routes define with react router in the container component */}
        <Link to="#">Catálogo</Link>
        
      </li>

      <li onClick={() => handleClickItem()}>
        <Link to="#">Hombre</Link>
        
      </li>

      <li onClick={() => handleClickItem()}>
      <Link to="#">Mujer</Link>
      
      </li>
    </ul>
  </div>
  )
}

export default MenuList