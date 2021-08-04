import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({children}) {
  const [slide, setSlide] = useState(false)

  const navSlide = () => {
    setSlide(!slide);
  }

  return (

    <>
      <nav>
        <div className={styles.logo}>
          <h4>Peachy Keyn</h4>
        </div>
        <ul className={slide ? styles.navLink + " " + styles.transition: styles.navLink }>
          <li><Link href="/">Home</Link></li>
          <li><Link href="./store">Store</Link></li>
          <li><Link href="./login">Login</Link></li>
        </ul>
        <div className={styles.burger} onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      {children}
      <footer>
        <div className={styles.footer}>
          HELLO THERE
        </div>
      </footer>
    </>
  
  )
}