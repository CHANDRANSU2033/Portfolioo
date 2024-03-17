import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css';
// import HtmlIcon from '@mui/icons-material/Html';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import CssIcon from '@mui/icons-material/Css';


const ProjectCard = ({Project : {title,imageSrc,description,skills,demo,source}}) => {
  return (
    <div className={styles.container}>
        <img 
        src = {getImageUrl(imageSrc)} 
        alt = {`${title} Image`} 
        className={styles.image}    
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{
            skills.map((skill, id)=>{return(
            <li key={id} className={styles.skill}>
                {skill}
            </li>
            )})
        }</ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link}>Demo</a>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
  )
}

export default ProjectCard