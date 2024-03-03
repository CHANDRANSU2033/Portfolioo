import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import About  from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import { Project } from "./components/Project/Project.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App