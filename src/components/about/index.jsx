import React from "react";
import Styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
import ArrowRight from "/right-arrow.svg";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

const About = () => {
  const section = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to("body", {
      scrollTrigger: {
        trigger: section.current,
        start: "top+=300px 90%",
        end: "top+=750px bottom",
        scrub: 0.5,
        // markers: true,
      },
      backgroundColor: "#dde0e9",
      duration: 4,
      // scale: 1,
    });

    tl.to(section.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top+=300px 90%",
        end: "top+=750px bottom",
        scrub: 0.5,
        // markers: true,
      },
      opacity: 1,
    });
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div className={Styles.main}>
      <div ref={section} className={Styles.container}>
        <div className={Styles.header}>
          <h4>How I help</h4>
          <p>
            HIRE ME IF YOU NEED A FRESH PRODUCT DESIGN, DESIGN ENHANCEMENT,
            CONTINUAL ART DIRECTION, OR MENTORING AND HELPING YOUR IN‑HOUSE
            DESIGNERS GROW THEIR EXPERTISE.
          </p>
          <div className={Styles.process}>
            <span>
              <img src={ArrowRight} alt="arrow" />
              I get to know your team and product
            </span>
            <span>
              <img src={ArrowRight} alt="arrow" />
              We define the extent and nature of my engagement
            </span>
            <span>
              <img src={ArrowRight} alt="arrow" />
              We define the extent and nature of my engagement
            </span>
            <span>
              <img src={ArrowRight} alt="arrow" />
              We define the extent and nature of my engagement
            </span>
          </div>
        </div>
        <div className={Styles.available}>
          <div>
            <h6>Do</h6>
            <ul>
              <li>UX/UI design</li>
              <li>Design audit</li>
              <li>Ongoing art direction</li>
              <li>Help user testing</li>
              <li>Mentoring in-house designers</li>
              <li>Establishing design process</li>
              <li>Design team review</li>
              <li>Help hiring UX/UI designers</li>
            </ul>
          </div>
          <div className={Styles.divider} />
          <div>
            <h6>Don't do</h6>
            <ul>
              <li>UX/UI design</li>
              <li>Design audit</li>
              <li>Ongoing art direction</li>
              <li>Help user testing</li>
              <li>Mentoring in-house designers</li>
              <li>Establishing design process</li>
              <li>Design team review</li>
              <li>Help hiring UX/UI designers</li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div style={{ height }} className={Styles.circleContainer}>
        <div className={Styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default About;
