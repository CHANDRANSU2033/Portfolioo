import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import About  from "./components/About/About.jsx";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
}

export default App