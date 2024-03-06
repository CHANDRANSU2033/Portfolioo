import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import { TypeAnimation } from 'react-type-animation';
import animationData from './TypeFun';


export const Hero = () => {

  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <div className={styles.titles}>
            <TypeAnimation
          className = { styles.title}
          sequence={animationData.sequence}
          speed={animationData.speed}
          style={animationData.style}
          repeat={animationData.repeat}
        />
        </div>
            <p className={styles.description}>I&apos;m a mern-stack developer.Reach out if you need me </p>
            <a href="mailto:ExampleEmail@gmail.com" className={styles.contactBtn}> Contact me </a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt='Hero Image of me' className={styles.heroImg}/> 
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
