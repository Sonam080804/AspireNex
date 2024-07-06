import React from 'react'
import styles from "./Hero.module.css"

import { getImageUrl } from '../../utils'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} > Hi, I'm Sonam</h1>
            <p className={styles.description}>
                I'm a Competitive Programmer as well as Front-End Developer . Let's Connect and make this world more technical .
            </p>
            <div className={styles.btnContainer}>
              <a className={styles.contactBtn} href="mailto:myemail.email.com">Contact</a>
            <a className={styles.contactBtn} href="mailto:myemail.email.com">Resume</a>
            </div>
        </div>

        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />

        <div className={styles.topBlur}>

        </div>
        <div className={styles.bottomBlur}>

        </div>
    </section>
  )
}

export default Hero
