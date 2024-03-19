import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import all from '../all.module.css'
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
            <a href="mailto:chandransu.work.01@gmail.com" className={`${styles.contactBtn} ${all.btn}`}> Contact me </a>
        </div>
    
        <div className={styles.imgs}>
          <img src={getImageUrl('hero/heroImage.webp')} alt='Hero Image of me' className={styles.heroImg}/>
        </div>
         
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
