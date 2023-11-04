// @ts-nocheck

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader";
import styles from "./style.module.scss";
import Landing from "./components/landing";
import Layout from "./components/layout";
import Gallery from "./components/gallery";
import Description from "./components/description";
import Projects from "./components/projects";
import About from "./components/about";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
        <Landing />
        <Gallery />
        <Description />
        <Projects />
        <About />
      </main>
    </Layout>
  );
}

export default App;
