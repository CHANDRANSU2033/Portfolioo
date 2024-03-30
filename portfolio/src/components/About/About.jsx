import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css' 
import MyCarousel from './MyCarousel'



const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className = {styles.moving}>
        <MyCarousel/>
      </div>
      
      <div className={styles.content}>
        <img src = {getImageUrl('about/aboutImage1.png')} alt = 'me sitting with a loaptop'
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl('about/cursorIcon.png')} alt = 'cursor Icon'/>
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl('about/serverIcon.png')} alt = 'server Icon'/>
            <div className={styles.aboutItemText}> 
              <h3>BackEnd Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About