import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer>
    <h3 className={styles.title}>EVREN HIGH</h3>
    <p className={styles.mark}>Marca 100% colombiana</p>
    <h3 className={styles.contact}>Contacto</h3>
    <p className={styles.number}>+57 302 8312 876</p>
    <h3 className={styles.social}>Redes sociales</h3>
    <div className={styles.socialmedia}>
       <a className={styles.socialLogo1} href="https://www.instagram.com/evren_ib/?hl=es-la" target="_blank"><img className={styles.socialLogo1} src="https://i.imgur.com/XG6Fd0u.png" alt="Redirect to website insta" /></a> 
        <a className={styles.socialLogo2} href='https://wa.me/573028312876' target="_blank"><img className={styles.socialLogo2} src="https://i.imgur.com/RtvcMO1.png" alt="Redirect to whatsapp" /></a>
    </div>
    <h3 className={styles.owner}>Sitio web diseñado por: <a href='https://portfolio-cristian.netlify.app/' target="_blank">Cristian <span className={styles.lastName}>Leon</span></a></h3>
</footer>
  )
}

export default Footer