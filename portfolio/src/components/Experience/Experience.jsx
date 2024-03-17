import styles from './Experience.module.css'
import { getImageUrl } from '../../utils'
import skills from '../../data/skills.json'

const Experience = () => {
  return (
    <section className={styles.container} id='expirence'>
      <h2 className={styles.title}>experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill, id) =>{
              return(
                <div key= {id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>)
            })
          }
          </div>
          
      </div>
    </section>
  )
}

export default Experience