import Styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

const Landing = () => {
  const { scrollYProgress } = useScroll();

  const animation = {
    start: {
      y: 30,
      opacity: 0,
      // scale: 0.9,
    },
    end: {
      y: 0,
      opacity: 1,
      // scale: 1,
    },
    transition: (delay) => ({
      type: "inertia",
      delay: delay,
      default: { duration: 0.3 },
    }),
  };

  return (
    <section className={Styles.container}>
      <motion.header
        initial={animation.start}
        whileInView={animation.end}
        transition={animation.transition(0.1)}
      >
        <h2>Hi, I am Rafael.</h2>
        <h2>
          Designer <span>{"<>"}</span> Developer
        </h2>
      </motion.header>
      <motion.p
        initial={animation.start}
        whileInView={animation.end}
        transition={animation.transition(0.2)}
      >
        A versatile professional who has transitioned from 3D artist to UX
        designer. With a strong background in prototyping and testing digital
        products.
      </motion.p>
    </section>
  );
};

export default Landing;
