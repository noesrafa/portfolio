// import { useEffect } from "react";
// import Styles from "./style.module.scss";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Description() {
//   const description = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let tl = gsap.timeline();

//     tl.to(description.current, {
//       scrollTrigger: {
//         trigger: description.current,
//         start: "top 90%",
//         end: "bottom+=400px bottom",
//         scrub: 0.5,
//       },
//       opacity: 1,
//       x: 100,
//       duration: 3,
//     });
//   }, []);

//   return (
//     <>
//       <section className={Styles.main}>
//         <div className={Styles.content}>
//           <h4 ref={description}>
//             A versatile professional who has transitioned from 3D artist to UX
//             designer. With a strong background in prototyping and testing
//             digital products.
//           </h4>
//           <p>
//             A versatile professional who has transitioned from 3D artist to UX
//             designer. With a strong background in prototyping and testing
//             digital products.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import RoundedButton from "../roundedButton";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        {/* <div data-scroll data-scroll-speed={0.1}>
          <RoundedButton className={styles.button}>
            <p>About me</p>
          </RoundedButton>
        </div> */}
      </div>
    </div>
  );
}
