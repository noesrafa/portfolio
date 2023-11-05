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

import Lenis from "@studio-freight/lenis";
import Contact from "./components/contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();

    requestAnimationFrame(raf);
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
        <div style={{width: "100%", height: 500, background: '#141516'}}/>
        <Contact />
      </main>
    </Layout>
  );
}

export default App;
