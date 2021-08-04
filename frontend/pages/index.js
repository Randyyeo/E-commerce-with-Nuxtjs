import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  

  return (

    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Peachy Keyn
      </h1>
      <div className={styles.list}>
        <ul>
          <li><h3 className={styles.subtitle}>Satisfactory</h3></li>
          <li><h3 className={styles.subtitle}>.</h3></li>
          <li><h3 className={styles.subtitle}>Perfect</h3></li>
          <li><h3 className={styles.subtitle}>.</h3></li>
          <li><h3 className={styles.subtitle}>Adequate</h3></li>
        </ul>
      </div>
      <br />
      <div className={styles.button}>
        <button>SHOP NOW</button>
      </div>
      
      
    </div>
    /* <div>
    HELLO WORLD
    </div> */
  )
}
