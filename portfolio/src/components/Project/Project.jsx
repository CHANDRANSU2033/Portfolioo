import styles from './Project.module.css'
import Projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

export const Project = () => {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {
          Projects.map((Project,id) =>{
            return(
              <ProjectCard key = {id} Project = {Project}/>
            )
          })
        }
      </div>
    </section>
  )
}
