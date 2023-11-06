"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function GalleryNew() {
  const section = useRef(null);

  const gallery1 = useRef(null);
  const gallery2 = useRef(null);
  const gallery3 = useRef(null);
  const gallery4 = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.to(section.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top 90%",
        end: "+=500",
        scrub: 0.5,
        // markers: true,
      },
      duration: 4,
      scale: 1,
    });
  }, []);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    const scrollConfig = {
      trigger: section.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.001,
      // markers: true,
    };

    const animationConfig = (height) => ({
      scrollTrigger: scrollConfig,
      y: height,
      ease: "none",
    });

    tl.to(gallery1.current, animationConfig(2000));

    tl.to(gallery2.current, animationConfig(1500));

    tl.to(gallery3.current, animationConfig(1100));

    tl.to(gallery4.current, animationConfig(1300));
  });

  console.log(scrollYProgress.current);

  return (
    <main className={styles.main} ref={section}>
      <div ref={section} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} refer={gallery1} />
        <Column images={[images[3], images[4], images[5]]} refer={gallery2} />
        <Column images={[images[6], images[7], images[8]]} refer={gallery3} />
        <Column images={[images[9], images[10], images[11]]} refer={gallery4} />
      </div>
    </main>
  );
}

const Column = ({ images, refer, y }) => {
  return (
    <div className={styles.column} ref={refer}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <img src={`/gallery/${src}`} alt="image" />
          </div>
        );
      })}
    </div>
  );
};
