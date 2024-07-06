import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"
function About() {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")
            } alt="Me sitting with a laptop" 
            className={styles.aboutImage}/>

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")
            } alt="Cursor Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Front-end Developer</h3>
                    <p>
                      I am a front-end developer with experience in building optimized sites .
                    </p>
                  </div>  
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")
            } alt="server Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Back-end Developer</h3>
                    <p>
                      I am a Back-end developer with experience in building optimized sites .
                    </p>
                  </div>  
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")
            } alt="UI Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Competitive Programmer</h3>
                    <p>
                      I am a front-end developer with experience in building optimized sites .
                    </p>
                  </div>  
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
