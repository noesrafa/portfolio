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
import ProjectsMobile from "./components/projectsMobile";
import ContactMobile from "./components/contactMobile";
import GalleryNew from "./components/galleryNew";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const locomotion = async () => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    document.body.style.cursor = "default";
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      locomotion();
    }
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();

  //     locomotiveScroll();

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       document.body.style.cursor = "default";
  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
        <Landing />
        <GalleryNew />
        {/* <Gallery /> */}
        <Description />
        {windowWidth > 768 ? <Projects /> : <ProjectsMobile />}
        <About />
        {windowWidth > 768 && (
          <div style={{ width: "100%", height: 500, background: "#141516" }} />
        )}
        {windowWidth > 768 ? <Contact /> : <ContactMobile />}
      </main>
    </Layout>
  );
}

export default App;
