import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

 
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className = { styles.title} >Hi, I&apos;m Abhi</h1>
            <p className={styles.description}>I&apos;m a mern-stack developer.Reach out if you need me </p>
            <a href="mailto:ExampleEmail@gmail.com" className={styles.contactBtn}> Contact me </a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt='Hero Image of me' className={styles.heroImg}/> 
        <div className={StyleSheet.topBlur}></div>
        <div className={StyleSheet.bottomBlur}></div>
    </section>
  )
}
