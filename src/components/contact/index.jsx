import styles from "./style.module.scss";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import RoundedButton from "../roundedButton";
import Magnetic from "../magnetic";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.top}>
        <div className={styles.header}>
          <img src={"/me.jpg"} alt="profile" />
          Let's work together
        </div>
        <div className={styles.buttons}>
          <RoundedButton>
            <p>noesrafa@gmail.com</p>
          </RoundedButton>
          <RoundedButton>
            <p>+52 55 2998 5379</p>
          </RoundedButton>
          <div backgroundColor={"#774FE9"} className={styles.button}>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>2024 © Edition</p>
        <div className={styles.links}>
          <Magnetic>
            <p>LinkedIn</p>
          </Magnetic>
          <Magnetic>
            <p>Behance</p>
          </Magnetic>
          <Magnetic>
            <p>Dribbble</p>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
}
