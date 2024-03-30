import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImageUrl } from '../../utils'
import styles from './Carousel.module.css'


const MyCarousel = () => {
    return (
        <Carousel nextIcon={null} prevIcon={null} className={styles.container}>
          <Carousel.Item className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl('about/cursorIcon.png')} alt = 'cursor Icon'/>
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>I’m a front-end developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          </Carousel.Item>
          <Carousel.Item className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl('about/serverIcon.png')} alt = 'server Icon'/>
            <div className={styles.aboutItemText}> 
              <h3>BackEnd Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs</p>
            </div>
          </li>
          </Carousel.Item>
          {/* <Carousel.Item className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl('about/uiIcon.png')} alt = 'ui Icon'/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
          </Carousel.Item> */}
        </Carousel>
      );
}

export default MyCarousel