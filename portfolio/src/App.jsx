import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import About  from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default App