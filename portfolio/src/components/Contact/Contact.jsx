import { Email } from "./Email";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.contactForm}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.email}>
        <Email/>
      </div>
    </div>
    <div className={styles.links}>
      {/* <p>Follow me</p>   */}
      <a href="mailto:chandransu.work.01@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
      <a href="https://www.linkedin.com/in/chandransu-sekhar-satapathy-408054229/"><img
        src={getImageUrl("contact/linkedinIcon.png")}
        alt="LinkedIn icon"
      /></a>
      <a href="https://github.com/CHANDRANSU2033"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
    </div>
    </footer>
  );
};